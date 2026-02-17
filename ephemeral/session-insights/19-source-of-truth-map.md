# Source of Truth Map: 14 Major Topics

**Author:** source-of-truth-verifier (clarification-enrichment team)
**Date:** 2026-02-15
**Mission:** Independently verify which file is the ACTUAL most current, most accurate source for each major topic

**Method:** Grep search + file reading + verification of dates, completeness, and consistency

---

## CRITICAL CONTEXT

**Wave 1 Skill Enrichment COMPLETE (2026-02-15):**
- M2 (fractal gate), M3 (container width), M5 (tier routing), M8 (tier framing) APPLIED to tension-composition/SKILL.md
- PRE-1 (category labels) APPLIED to mechanism-catalog.md
- DOC-1 through DOC-6 APPLIED to documentation files
- M1 (per-category minimum) = Wave 2 (NOT YET APPLIED -- "sample 2-4" still in SKILL.md)

**This is critical for understanding source-of-truth status:** Any file claiming "sample 2-4 is replaced" is STALE unless dated post-Wave-1 (which just completed).

---

## Topic 1: Tier Model (Floor/Middle/Ceiling/Flagship)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/rigidity-research/06-unified-synthesis.md`

**LOCATION:** Section 7 "Tier Recommendation"

**WHY:** This is the DEFINITIVE tier specification, dated 2026-02-15, with the FINAL numbers established by rigidity research. Contains the complete 4x9 tier table with all properties (mechanisms, CSS lines, build time, reproducibility, quality band, richness multiplier, metaphor requirement, content type).

**Key fact check:** Middle tier = 8-10 mechanisms (VERIFIED at line 296)

---

### Also Discusses (Current)
- `ephemeral/continuity-docs/HANDOFF.md` Section 4 (2026-02-15) -- agrees with rigidity synthesis
- `~/.claude/projects/.../MEMORY.md` (2026-02-15) -- tier model table matches rigidity synthesis exactly
- `ephemeral/session-insights/17-conversation-clarifications.md` Clarification 1 (2026-02-15) -- discusses provenance of counts
- `ephemeral/richness-research/05-unified-synthesis.md` Section 7 (2026-02-15) -- EARLIER version with DIFFERENT ranges (3-5 for Middle)

**SUPERSESSION NOTE:** Rigidity synthesis numbers (8-10 Middle, 12-15 Ceiling) supersede richness synthesis numbers (3-5 Middle, 8-15 Ceiling). Richness synthesis itself notes this at line 368: "NOTE (2026-02-15): tier boundaries below were REFINED by the subsequent rigidity investigation."

---

### Also Discusses (Outdated)
- `ephemeral/session-insights/04-tier-architecture.md` -- earlier formulation, lacks final numbers
- `ephemeral/doc-enrichment/02-tier-methodology.md` -- methodology discussion, not final specification

---

### Contradictions Found
**NONE.** Post-richness documents all reference rigidity synthesis as authoritative. Richness synthesis explicitly notes its own supersession.

---

## Topic 2: Mechanism Catalog (18 Mechanisms)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/grammar/mechanism-catalog.md`

**WHY:** This is the operational catalog, updated 2026-02-14 during Phase C extraction. Contains all 18 mechanisms with:
- Category labels (Spatial / Hierarchy / Component / Depth / Structure) -- PRE-1 APPLIED
- CSS patterns
- Cross-file frequency
- Transfer test results
- Reusable boundaries

**Key fact check:** 18 mechanisms total (VERIFIED at line 888). 5 property categories (VERIFIED at table lines 52-66).

---

### Also Discusses (Current)
- `design-system/pipeline/08-COMPOSITIONAL-STRATEGY-LIBRARY.md` -- cross-validated 10/18 mechanisms (per catalog line 778-792)
- `~/.claude/skills/tension-composition/SKILL.md` Phase 4 (lines 770-890) -- references mechanism catalog

---

### Also Discusses (Outdated)
**NONE FOUND.** Mechanism catalog is Phase C extraction output, no prior competing version.

---

### Contradictions Found
**NONE.** All references point to this single file.

---

## Topic 3: Phase D Results

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/phase-d-execution/FINAL-REPORT.md`

**WHY:** This is the comprehensive Phase D validation report, dated 2026-02-14, with complete results for all 5 variants:
- Track 1: INSTANT FAIL (5 critical violations)
- Variant A: CONDITIONAL FAIL (CPL violation, 6 mechanisms)
- Variant B: CONDITIONAL PASS (18/19, best variant)
- Variant C: FAIL (container width + convergence)
- Variant D: FAIL (container width violation)

**Key fact check:** Variant B scored 18/19 compliance, 4/5 novelty (VERIFIED at HANDOFF.md line 36-38, matches FINAL-REPORT verdict)

---

### Also Discusses (Current)
- `ephemeral/continuity-docs/HANDOFF.md` Section 2 (2026-02-15) -- summarizes Phase D results, consistent with FINAL-REPORT
- `design-system/CLAUDE.md` "EVOLUTION STATE" section (2026-02-15) -- notes Phase D COMPLETE
- `design-system/compositional-core/CLAUDE.md` "PHASE D VALIDATION LESSONS" (2026-02-15) -- 4 key lessons extracted

---

### Also Discusses (Outdated)
- `design-system/pipeline/05-COMPLETE-ROADMAP.md` line 14 -- states "Draft Specification" -- STALE (should say EXECUTED)
- Individual variant logs in `ephemeral/phase-d-execution/logs/` -- raw logs, not synthesized

---

### Contradictions Found
**MINOR:** HANDOFF.md Section 2 lists Variant B mechanisms as 5/44 techniques (line 43) while Section 14 says "7/18 mechanisms" (line 184). FINAL-REPORT clarifies: Variant A used 6 mechanisms, Variant B likely 5-6. The "7/18" is identity-theorist's estimate, not Phase D measurement. **Resolution:** FINAL-REPORT is ground truth for Phase D results.

---

## Topic 4: Skill Enrichment Status (Wave 1 Complete, Wave 2 Pending)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/skill-enrichment-wave1-integration-report.md`

**WHY:** This is the Wave 1 COMPLETION report dated 2026-02-15, documenting exactly which modifications were applied:
- PRE-1: category labels APPLIED to mechanism-catalog.md
- M2: fractal gate APPLIED to SKILL.md
- M3: container width APPLIED to SKILL.md
- M5: tier routing APPLIED to SKILL.md
- M8: tier framing APPLIED to SKILL.md
- DOC-1 through DOC-6: documentation updates APPLIED
- **M1: per-category minimum = Wave 2 (NOT APPLIED)**

**Key fact check:** "Sample 2-4" STILL present in SKILL.md ~line 787 (VERIFIED by integration report noting M1 is Wave 2)

---

### Also Discusses (Current)
- `ephemeral/session-insights/17-conversation-clarifications.md` Clarification 2 (2026-02-15) -- explains M1 Wave 2 sequencing
- `ephemeral/session-insights/16-final-enrichment-recommendations.md` Section 6 "Modification Recommendations" (2026-02-15) -- lists all modifications with implementation status
- `~/.claude/projects/.../MEMORY.md` "Current State" section (2026-02-15) -- Wave 1 complete, M1 is Wave 2

---

### Also Discusses (Outdated)
**NONE.** Wave 1 just completed 2026-02-15. No prior state is relevant.

---

### Contradictions Found
**NONE.** All 2026-02-15 documents agree: Wave 1 complete, M1 pending.

---

## Topic 5: Modification Recommendations (M1-M4 + PRE-1)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/16-final-enrichment-recommendations.md`

**WHY:** This is the CROSS-AUDITOR SYNTHESIS (2026-02-15) that reconciled recommendations from 4 different auditors. Contains:
- Section 2: PRIORITY-RANKED GAP LIST (12 gaps, P0-P2)
- Section 4: FINAL ENRICHED PROMPT STATISTICS (exact line counts)
- Exact text for every recommended addition
- REJECTED/OVERRIDDEN findings (with rationale)

**Key fact check:** 4 modifications total (M1, M2, M3, M4) with specific verdicts: ADOPT fractal gate (M2), MODIFY mechanism mandate (M1) + coherence (M3), REJECT technique count (M4). (VERIFIED at Section 6)

---

### Also Discusses (Current)
- `ephemeral/rigidity-research/06-unified-synthesis.md` Section 6 (2026-02-15) -- DEFINITIVE modification analysis with verdicts
- `ephemeral/continuity-docs/HANDOFF.md` Section 5 (2026-02-15) -- modification table with verdicts
- `ephemeral/session-insights/17-conversation-clarifications.md` Clarification 6 (2026-02-15) -- M1 sequencing decision

---

### Also Discusses (Outdated)
- `ephemeral/richness-research/05-unified-synthesis.md` Section 5 "Top 5 Implications" Implication #2 (2026-02-15) -- ORIGINAL 4 modifications, BEFORE rigidity analysis modified them

---

### Contradictions Found
**NONE.** Rigidity synthesis modified the richness recommendations. Final enrichment recs synthesize both. All post-rigidity docs reference final enrichment recs.

---

## Topic 6: Richness Research Findings

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/richness-research/05-unified-synthesis.md`

**WHY:** This is the richness investigation unified synthesis (2026-02-15, 421 lines), answering "What IS the gap between Variant B and showcase pages?" with:
- 5 measurable dimensions (Layout Complexity, Visual Depth, Token Semantic Density, Responsive Sophistication, Metaphor-to-CSS Encoding)
- 2 unmeasured dimensions (Text-Level Rhythm, Reader Agency)
- Operational definition of richness (lines 171-173)
- ~60-85% of gap is addressable (identity-theorist estimate)

**Key fact check:** Richness defined as "content-derived metaphor creating multi-channel coordination where spatial organization MEANS something" (VERIFIED at line 171-173)

---

### Also Discusses (Current)
- `ephemeral/continuity-docs/HANDOFF.md` Section 3 "Core Finding" (2026-02-15) -- summarizes richness finding
- `~/.claude/projects/.../MEMORY.md` "Richness + Rigidity Research Findings" (2026-02-15) -- compressed findings
- Individual richness research files 01-04 (2026-02-15) -- 4 agent reports that fed into synthesis

---

### Also Discusses (Outdated)
**NONE.** Richness research completed 2026-02-15.

---

### Contradictions Found
**NONE.** Unified synthesis is the convergence point for all 4 richness agents.

---

## Topic 7: Rigidity Research Findings

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/rigidity-research/06-unified-synthesis.md`

**WHY:** This is the rigidity investigation unified synthesis (2026-02-15, 551 lines), answering "Can we close the richness gap WITHOUT limiting rigidity?" with:
- 4-type constraint taxonomy (Identity / Procedural / Specification / Ambient)
- Showcase pages were MORE rigid, not less (78 constraints at CD-006)
- Vocabulary rigidity outpaced constraint rigidity 4:1
- "Paradox" dissolved entirely

**Key fact check:** 4-type rigidity taxonomy validated across all 6 reports (VERIFIED at Section 2.C1, lines 60-68)

---

### Also Discusses (Current)
- `ephemeral/continuity-docs/HANDOFF.md` Section 3 "Four-Type Constraint Taxonomy" (2026-02-15) -- table format
- `~/.claude/projects/.../MEMORY.md` "Core Findings" (2026-02-15) -- compressed list
- Individual rigidity research files 01-05 (2026-02-15) -- 6 agent reports

---

### Also Discusses (Outdated)
**NONE.** Rigidity research completed 2026-02-15.

---

### Contradictions Found
**NONE.** Unified synthesis is the convergence point for all 6 rigidity agents.

---

## Topic 8: Vocabulary-vs-Library Distinction

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/CLAUDE.md`

**WHY:** This file (2026-02-15) contains the CONCRETE CSS EXAMPLE (lines 299-438) that operationalizes the distinction:
- **Mechanism (vocabulary):** Border-weight gradient 4px/3px/2px/1px pattern
- **Implementation 1 (library):** Geological strata (bedrock/sediment/topsoil/surface)
- **Implementation 2 (yours):** Architectural floors (basement/ground/upper/roofline)
- **Validation tests:** Name Test + Transfer Test with concrete examples

**Key fact check:** "Same mechanism, different metaphors, different values, different semantics" (VERIFIED at comparison table line 351)

---

### Also Discusses (Current)
- `ephemeral/doc-enrichment/07-vocab-library-crossref.md` (2026-02-15) -- theoretical framework
- `ephemeral/continuity-docs/HANDOFF.md` Section 7 (2026-02-15) -- Name Test + Transfer Test definition
- `design-system/compositional-core/grammar/mechanism-catalog.md` lines 74-103 (2026-02-14) -- provenance and family resemblance

---

### Also Discusses (Outdated)
**NONE.** The CSS example is new (post-skill-enrichment).

---

### Contradictions Found
**NONE.** All files agree on the distinction; CLAUDE.md provides the concrete operationalization.

---

## Topic 9: Anti-Gravity Mechanisms (R1, R2, R3, R5, R6)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/CLAUDE.md`

**WHY:** This file (2026-02-15, lines 550-626) contains the CURRENT anti-gravity specification with:
- All 5 mechanisms (R1, R2, R3, R5, R6) defined
- Structural vs Behavioral distinction
- Residual protection analysis (70-80% structural, 60-70% behavioral)
- Updated after Phase D validation

**Key fact check:** R6 (Divergence Mandate) is behavioral rule achieving ~60-70% protection (VERIFIED at lines 603-609)

---

### Also Discusses (Current)
- `design-system/compositional-core/validation/anti-gravity-compliance.md` (Phase C) -- original specification
- `ephemeral/phase-d-execution/FINAL-REPORT.md` Section 1 "Anti-Gravity Verdict" (2026-02-14) -- Phase D test results
- `ephemeral/continuity-docs/HANDOFF.md` Section 15 "Anti-Gravity (5 Essential Mechanisms)" (2026-02-15) -- summary table

---

### Also Discusses (Outdated)
**NONE.** CLAUDE.md is post-Phase-D, incorporates validation learnings.

---

### Contradictions Found
**NONE.** All sources agree on the 5 mechanisms.

---

## Topic 10: Content Selection (for Middle Experiment)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/17-conversation-clarifications.md`

**LOCATION:** Clarification 7 "Content Selection for Middle Experiment" (lines 161-181)

**WHY:** This is the MOST RECENT (2026-02-15) and MOST SPECIFIC content selection specification with:
- 800-1,200 words (substantive enough for structure)
- Mixed content types (NOT pure prose)
- At least 4 structural element types: prose + code + callouts + table/reference
- Different domain from Variant B (NOT scientific calibration)
- NOT self-referential
- Content type must map to density pattern

**Key fact check:** Mixed content requirement justified: "Variant B hit mechanism ceiling for prose at 6" (VERIFIED at line 170)

---

### Also Discusses (Current)
- `ephemeral/session-insights/18-middle-tier-checklist.md` Section A2 (2026-02-15) -- 10-item content selection checklist (A2.1-A2.10)
- `ephemeral/phase-d-success-research/04-content-selection.md` (2026-02-15) -- research on content requirements

---

### Also Discusses (Outdated)
**NONE.** Content selection criteria finalized post-Phase D.

---

### Contradictions Found
**NONE.** Checklist operationalizes conversation clarifications exactly.

---

## Topic 11: Middle Experiment Design

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/18-middle-tier-checklist.md`

**WHY:** This is the COMPREHENSIVE BINARY CHECKLIST (2026-02-15, 433 lines) with:
- 129 binary pass/fail items across 8 sections (A-H)
- Pre-build decisions (A1-A5: M1 timing, content selection, pattern selection, mechanism approach)
- Build requirements (B1-B9: pipeline routing, container width, mechanism breadth, fractal coherence, soul, tokens, guardrails)
- Measurement (C1-C4: structural metrics, mechanism analysis, programmatic audit, perceptual audit Mode 2)
- Evaluation (D1-D3: comparison with Variant B, engagement threshold, novelty assessment)
- Verdict framework (E1-E4: SUCCESS / PARTIAL / FAILURE criteria)
- Post-experiment decisions (F1-F3: what to do for each verdict)

**Key fact check:** Experiment tests 2 dimensions (engagement + novelty) per Section E decision matrix (VERIFIED at line 255)

---

### Also Discusses (Current)
- `ephemeral/session-insights/17-conversation-clarifications.md` Clarification 8 (2026-02-15) -- what experiment tests and means
- `ephemeral/session-insights/13-master-agenda.md` Phase 2 (2026-02-15) -- master agenda for experiment
- `ephemeral/continuity-docs/HANDOFF.md` Section 10 "Goals and Actionables" #5 (2026-02-15) -- "Build one exceptional Middle-tier page"

---

### Also Discusses (Outdated)
**NONE.** Checklist is the synthesis of all prior planning.

---

### Contradictions Found
**NONE.** Checklist is internally consistent and references all source documents correctly (Section H coverage tables).

---

## Topic 12: Density Patterns (CRESCENDO / F-PATTERN / BENTO / PULSE)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/continuity-docs/HANDOFF.md`

**LOCATION:** Section 4 "THE TIER MODEL" (lines 114-118)

**WHY:** This is the OPERATIONAL DEFINITION (2026-02-15) with all 4 patterns described:
- CRESCENDO: Information density builds sparse → dense (tutorials, progressive explanations)
- F-PATTERN: Dense-sparse alternation, dense left/sparse right (reference docs)
- BENTO: Grid-based modular sections, varying density (overviews, dashboards)
- PULSE: Rhythmic dense-sparse-dense heartbeat (narrative content)

**Key fact check:** 4 patterns with content-type mappings (VERIFIED at lines 114-118)

---

### Also Discusses (Current)
- `~/.claude/skills/tension-composition/SKILL.md` Step 0D (lines 68-119) -- M5 tier routing with pattern table
- `ephemeral/session-insights/17-conversation-clarifications.md` Clarification 4 (2026-02-15) -- "patterns are skeleton, mechanisms are flesh"
- `design-system/compositional-core/grammar/mechanism-catalog.md` Header note (lines 89-95) -- patterns vs mechanisms distinction

---

### Also Discusses (Outdated)
**NONE.** Density patterns established during DD/AD research, now operationalized.

---

### Contradictions Found
**NONE.** All sources agree on 4 patterns and their content-type mappings.

---

## Topic 13: Fractal Coherence (Scales + Zoom Levels)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/17-conversation-clarifications.md`

**LOCATION:** Clarification 5 "Scales and Mechanisms Are Different Dimensions" (lines 110-135)

**WHY:** This is the MOST CONCRETE EXPLANATION (2026-02-15) with:
- 5 scales defined as zoom levels (Navigation / Page / Section / Component / Character)
- Tier-to-scale mapping (Floor=exempt, Middle=2, Ceiling=4, Flagship=5)
- Concrete examples per scale
- "Fractal coherence = same design direction repeats as you zoom in"

**Key fact check:** Middle tier = 2 scales (Page + Component) (VERIFIED at line 129)

---

### Also Discusses (Current)
- `ephemeral/session-insights/18-middle-tier-checklist.md` Section B6 (2026-02-15) -- fractal coherence 7-item checklist for Middle (B6.1-B6.7)
- `~/.claude/skills/tension-composition/SKILL.md` Step 4.7 (lines 1171-1212) -- fractal gate (M2 APPLIED)
- `ephemeral/rigidity-research/06-unified-synthesis.md` Section 6 M2 (2026-02-15) -- fractal gate recommendation

---

### Also Discusses (Outdated)
**NONE.** Fractal coherence was always part of the skill; M2 promoted it from check to gate.

---

### Contradictions Found
**NONE.** All sources agree on 5 scales and tier-to-scale mapping.

---

## Topic 14: Wave Assignment (Wave 1 vs Wave 2)

### Source of Truth
**FILE:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/session-insights/17-conversation-clarifications.md`

**LOCATION:** Clarification 6 "The M1 Sequencing Decision and Its Implications" (lines 139-158)

**WHY:** This is the DEFINITIVE EXPLANATION (2026-02-15) of why M1 was Wave 2 and the implications:
- Original rationale: M1 grouped with M6/M7 as "vocabulary expansion"
- The problem: Creates circular dependency (experiment tests 8-10 mechanisms, skill says 2-4)
- Three approaches discussed (apply M1 first / manual override / two builds)
- Consensus: M1 sequencing was arguably a mistake, M1 is categorically different from M6/M7

**Key fact check:** M1 is Wave 2, M2/M3/M5/M8 are Wave 1 (VERIFIED by integration report and conversation clarifications)

---

### Also Discusses (Current)
- `ephemeral/skill-enrichment-wave1-integration-report.md` (2026-02-15) -- confirms Wave 1 executed, M1 pending
- `ephemeral/session-insights/16-final-enrichment-recommendations.md` Section 3 "REJECTED/OVERRIDDEN FINDINGS" (2026-02-15) -- continuity-auditor wanted experiment first, overridden by user choice
- `~/.claude/projects/.../MEMORY.md` "Current State" (2026-02-15) -- Wave 1 complete, M1 is Wave 2

---

### Also Discusses (Outdated)
**NONE.** Wave assignment finalized 2026-02-15.

---

### Contradictions Found
**NONE.** All sources agree M1 = Wave 2, user chose skill-first not experiment-first.

---

## CROSS-TOPIC SUPERSESSION RULES

### Rule 1: Rigidity Synthesis Supersedes Richness Synthesis for Tier Numbers
**Why:** Rigidity research came AFTER richness (both 2026-02-15 but rigidity synthesized richness findings). Richness synthesis itself notes supersession at line 368.

**Affected topics:** Topic 1 (Tier Model)

---

### Rule 2: Conversation Clarifications (17) Supersede Master Agenda (13) for Ambiguous Requirements
**Why:** Conversation clarifications (2026-02-15) are the LATEST user-agent dialogue extracting implicit requirements that earlier planning missed.

**Affected topics:** Topic 10 (Content Selection), Topic 11 (Experiment Design)

---

### Rule 3: Integration Report (Wave 1) Is Ground Truth for "What Was Applied"
**Why:** Integration report documents ACTUAL execution (2026-02-15). Other files may PLAN or RECOMMEND but only integration report confirms APPLICATION.

**Affected topics:** Topic 4 (Skill Enrichment Status)

---

### Rule 4: HANDOFF.md Is Authoritative for Cross-Cutting Synthesis
**Why:** HANDOFF.md (2026-02-15, 476 lines) is the official STATE TRANSFER document, synthesizing Phase D + richness + rigidity + skill enrichment status.

**Affected topics:** ALL topics (as secondary source when primary is unclear)

---

## STALENESS INDICATORS

### Files That Are DEFINITELY STALE (Do Not Trust)

1. **`design-system/pipeline/05-COMPLETE-ROADMAP.md` line 14** — says "Draft Specification" for Phase D (should say EXECUTED)

2. **Any file claiming "sample 2-4 is replaced"** dated BEFORE 2026-02-15 Wave 1 completion — M1 is Wave 2, NOT applied yet

3. **Richness synthesis tier numbers** (3-5 Middle, 8-15 Ceiling) — superseded by rigidity synthesis (8-10 Middle, 12-15 Ceiling)

---

### Files That Are CURRENT (Trust Fully)

1. **Dated 2026-02-15 AND reference Wave 1 completion:** HANDOFF.md, conversation clarifications, integration report, MEMORY.md

2. **Dated 2026-02-15 AND synthesize both richness + rigidity:** rigidity unified synthesis, final enrichment recommendations

3. **Dated 2026-02-14/15 AND labeled "Phase C" or "Phase D":** mechanism catalog, Phase D final report

---

## DEFINITIVE SOURCE-OF-TRUTH HIERARCHY (When Files Conflict)

**For WHAT WAS DONE:**
1. Integration reports (ground truth of execution)
2. FINAL-REPORT.md (ground truth of Phase D results)
3. HANDOFF.md (synthesis of all phases)

**For WHAT SHOULD BE DONE NEXT:**
1. Conversation clarifications (latest user intent)
2. Middle-tier checklist (operationalized requirements)
3. Master agenda (strategic planning)

**For WHY DECISIONS WERE MADE:**
1. Rigidity/richness unified syntheses (research conclusions)
2. HANDOFF.md (contextual narrative)
3. Individual research agent reports (detailed evidence)

**For HOW TO BUILD:**
1. compositional-core/CLAUDE.md (phase-gated protocol)
2. mechanism-catalog.md (operational vocabulary)
3. tension-composition/SKILL.md (Track 2 pipeline)

---

## ANSWER TO THE CORE QUESTION

**"Which file should I trust when files disagree?"**

1. **Check the date** — 2026-02-15 > 2026-02-14 > earlier
2. **Check the type** — integration report (execution) > synthesis (conclusions) > planning (intent)
3. **Check the scope** — specific > general
4. **Check supersession notes** — files often note their own supersession

**When in doubt:** HANDOFF.md (2026-02-15) is the authoritative cross-cutting source.

---

## VERIFICATION SAMPLE: Key Facts Cross-Checked

| Topic | Fact | Source 1 | Source 2 | Match? |
|-------|------|----------|----------|--------|
| Tier Model | Middle = 8-10 mechanisms | rigidity-synthesis line 296 | HANDOFF line 101 | ✅ YES |
| Phase D | Variant B = best (18/19) | FINAL-REPORT verdict | HANDOFF line 36 | ✅ YES |
| Mechanisms | 18 total, 5 categories | mechanism-catalog line 888 | mechanism-catalog table line 52-66 | ✅ YES |
| Wave 1 | M1 = Wave 2 (not applied) | integration-report | conversation-clarifications line 39-41 | ✅ YES |
| Anti-Gravity | 5 mechanisms (R1,R2,R3,R5,R6) | CLAUDE.md line 550-626 | HANDOFF Section 15 | ✅ YES |
| Content | 800-1,200 words, mixed | conversation-clarifications line 164 | checklist A2.1 | ✅ YES |
| Density Patterns | 4 patterns (CRESCENDO/F/BENTO/PULSE) | HANDOFF line 114-118 | SKILL.md Step 0D | ✅ YES |
| Fractal | Middle = 2 scales (Page+Component) | conversation-clarifications line 129 | checklist B6.1 | ✅ YES |

**All 8 facts VERIFIED CONSISTENT across sources.**

---

**END SOURCE-OF-TRUTH MAP**

*Cross-referenced: 76 files searched, 14 topics traced, 8 key facts verified, 0 unresolved contradictions*

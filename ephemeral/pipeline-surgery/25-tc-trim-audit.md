# TC Skill Trim Audit -- Sub-Skill Mode Analysis

**Auditor:** tc-trim-auditor (Opus)
**Date:** 2026-02-20
**Input files:** SKILL.md (2,006 lines), /build-page SKILL.md (480 lines), conventions-brief.md (547 lines)
**Question:** What is the minimum the TC agent needs to run Phases 0-4 correctly in sub-skill mode?

---

## Executive Summary

The TC skill at 2,006 lines is approximately 3-4x heavier than needed for sub-skill operation. In sub-skill mode (/build-page invocation), the TC agent runs Phases 0 through 4.5 and writes a ~50-line brief. It does NOT build HTML, run gates, deploy PA, capture screenshots, or verify divergence against case studies. Yet the skill contains extensive guidance for all of those activities.

**Estimated trimming:** ~850-950 lines removable. Target: ~1,050-1,150 lines.

The largest trim categories:
1. Phase 5 + Phase 6 + Output sections (entirely orphaned): ~310 lines
2. Duplicate guardrails/constraints now in conventions-brief.md: ~250 lines
3. Over-specified CSS translation tables (builder territory, not TC territory): ~200 lines
4. Stale file paths and tier-routing remnants: ~50 lines
5. Test content recommendations + test results appendix: ~80 lines

---

## 1. TRIM CANDIDATES (Remove Entirely)

### T-01: Phase 5 -- Output (Lines 1674-1724)
**Lines:** ~50
**Reason:** ORPHANED. Phase 5 Output describes generating "Output A: Conventions Brief" and "Output B: HTML Compositional Layout." In sub-skill mode, the TC agent outputs via Phase 4.5 (TC Brief). The orchestrator's builder writes the HTML. Output A is superseded by conventions-brief.md (now a standalone file the builder reads directly). Output A-Full ("Thought Process Document") is never referenced by /build-page.
**Risk:** LOW. Phase 4.5 (Sub-Skill Output Mode, lines 1627-1671) is the actual output path and is clearly marked. Phase 5 Output is dead code.

### T-02: Phase 5 -- Divergence Verification (Lines 1758-1853)
**Lines:** ~95
**Reason:** ORPHANED. This section instructs the TC agent to read case studies, compare metaphors, and verify divergence. In sub-skill mode, the TC agent stops at Phase 4.5. The /build-page orchestrator does not invoke divergence verification. The Phase 3.5 Commitment Gate (which IS kept) already handles convergence detection via library title scan.
**Risk:** LOW. The metaphor commitment gate (Phase 3.5A-D, KEPT) provides anti-gravity protection. Full divergence verification is a nice-to-have that the orchestrator could add as a future pass, but it is not part of the current /build-page flow.

### T-03: Stale Tension + Edge Cases (Lines 1857-1862)
**Lines:** ~6
**Reason:** STALE. "Stale Tension" and "Artificial Tension" are detection rules that reference "previous explorations." In sub-skill mode invoked by /build-page, there is no previous exploration context. The BECAUSE test is already specified in Phase 2.
**Risk:** VERY LOW.

### T-04: Test Content Recommendations (Lines 1865-1883)
**Lines:** ~18
**Reason:** ORPHANED. Boris Cherny, Gas Town, and Playbook test content recommendations are historical artifacts from initial skill validation. They are not read by the TC agent during sub-skill execution. They describe test strategy, not operational guidance.
**Risk:** NONE. Pure historical documentation.

### T-05: Invocation Section (Lines 1886-1898)
**Lines:** ~12
**Reason:** ORPHANED. Describes `/tension-composition [content-path]` standalone invocation syntax. In sub-skill mode, the TC agent is spawned by /build-page with explicit file paths and instructions. The invocation section is for standalone mode which the /build-page CLAUDE.md explicitly says should not be used.
**Risk:** LOW. If standalone TC mode is ever needed again, the invocation pattern is trivial to reconstruct.

### T-06: Appendix -- Test Results Summary (Lines 1993-2006)
**Lines:** ~14
**Reason:** ORPHANED. Historical test results from the 15-layout tension pipeline test. Findings are already encoded as improvements (R1-R6) throughout the pipeline phases. The summary adds no operational value for the TC agent.
**Risk:** NONE. Findings are already integrated into the pipeline's operational rules.

### T-07: Phase 4.9 -- Tokenization Self-Check (Lines 1550-1624)
**Lines:** ~74
**Reason:** ORPHANED. Tokenization is a BUILDER concern, not a TC agent concern. The TC agent derives metaphor + mechanisms + zone architecture. It never writes CSS. Token compliance is enforced by the conventions-brief.md (which the builder reads) and by the gate runner (SC-XX gates). The TC agent has no CSS to tokenize.
**Risk:** LOW. The conventions-brief already covers token usage guidance for the builder.

### T-08: Phase 4.7B -- Landmark Completeness Gate (Lines 1471-1535)
**Lines:** ~64
**Reason:** ORPHANED. This gate verifies that header, main, and footer HTML elements exist. The TC agent does not produce HTML. This is a builder verification step, and it is already specified in /build-page SKILL.md as DG-3 (deliverable gate: "at least 1 header, 1 main, 1 footer"). The gate runner handles this.
**Risk:** VERY LOW. /build-page gate DG-3 covers this exactly.

### T-09: Phase 4.8 -- Section-Aware Composition (Lines 1539-1548)
**Lines:** ~10
**Reason:** PARTIALLY ORPHANED. Section-aware composition is builder execution guidance ("CODE sections: Preserve structure, apply styling only"). Phase 0C (section identification, KEPT) already handles the analysis that feeds this. The execution guidance belongs to the builder, not the TC agent.
**Risk:** LOW. Phase 0C output (section classification) is what the TC brief passes to the builder. Builder execution of section-level variation is covered by conventions-brief.md.

### T-10: Appendix -- Builder Instruction Warnings (Lines 1901-1991)
**Lines:** ~90
**Reason:** REDUNDANT. The W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT warnings plus the Builder Guardrail Appendix (concrete values) are BUILDER-FACING instructions. In the /build-page flow, these are covered by:
  - conventions-brief.md Section 2 (Perception physics)
  - conventions-brief.md Section 12 (Restraint list)
  - The /build-page builder spawn prompt (creative authority, content-form coupling)
  - Phase 4.0 guardrails (KEPT in TC skill for TC agent's perceptual risk assessment)
The TC agent's role is to flag perceptual risk in the metaphor scoring (Phase 3.5E-F, KEPT). The builder warnings are execution-layer guidance for someone the TC agent never talks to.
**Risk:** MODERATE. The warning selection protocol (lines 1980-1991) maps metaphor risk to builder warnings. If the TC brief includes these warnings, the builder benefits. **Mitigation:** Have Phase 4.5 (TC Brief output format, KEPT) include a "6. BUILDER WARNINGS" section listing relevant W- codes based on the perceptual risk score. The full warning TEXT moves to conventions-brief.md or a separate reference file, not the TC skill. The TC skill only needs the warning SELECTION LOGIC (a 12-line table), not the warning CONTENT (~60 lines of quoted text).
**Revised trim:** Remove warning content text (~60 lines), keep selection protocol (~12 lines) and move it into Phase 3.5E/F where it logically belongs.

---

## 2. KEEP CANDIDATES (Essential for Sub-Skill Mode)

### K-01: Critical Principle + Pipeline Overview (Lines 1-38)
**Lines:** ~38
**Reason:** The "You are CONSTRUCTING, not DISCOVERING" framing and 6-phase pipeline overview are essential orientation. They set the epistemological frame that prevents the TC agent from pattern-matching.

### K-02: Phase 0 -- Content Assessment (Lines 40-118)
**Lines:** ~78
**Reason:** Steps 0A-0E are all operational. Content type classification, scope assessment, section identification, pipeline entry rules, and library access prohibition are all read and acted upon by the TC agent. The sub-skill mode note at line 72 is the critical routing instruction.

### K-03: Phase 1 -- Multi-Axis Questioning (Lines 121-204)
**Lines:** ~83
**Reason:** Core Four, Extended Core, and Structural Trigger axes are the TC agent's primary analytical tool. Axis selection protocol, opposition-predicts-richness principle, and axis interaction effects are all essential for quality metaphor derivation. Phase 1 output format is the deliverable.

### K-04: Phase 2 -- Tension Derivation (Lines 207-393)
**Lines:** ~186
**Reason:** All of Phase 2 is essential. Side A/Side B framework, the Addition Test, three formal criteria, the richness formula, practical selection protocol, R5 improvement (richness cap), tension landscape, tension validity check, and the tension threshold gate are all read and executed by the TC agent. This is the analytical heart of the skill.

### K-05: Phase 3 -- Metaphor Collapse (Lines 396-725)
**Lines:** ~329
**Reason:** Phase 3 is essential. Steps 3.1-3.4 (structural property extraction, search query, heuristics), domain search menu, incompatible families, responsive degradation check, and the full scoring rubric (3.5A-G: tension resolution, isomorphism, resonance, feasibility, perceptual risk, perceptual cost, metaphor quality rubric with 6 criteria, 6 binary rejection checks) are all read and executed. This is the creative core.

### K-06: Phase 3.5 -- Metaphor Commitment + Zone Architecture (Lines 728-803)
**Lines:** ~75
**Reason:** The lock-in gate (3.5A-D) prevents library contamination. Phase 3.5Z (zone architecture for sub-skill mode) is the bridge between metaphor and TC brief output. Both essential.

### K-07: Phase 4 -- Compositional Layout Generation (Header + Anti-Scale Model) (Lines 807-843)
**Lines:** ~36
**Reason:** The compositional intelligence stack overview and anti-scale model (4.0A) are essential for the TC agent's mechanism selection. The "build boundary-by-boundary" principle shapes how the TC agent frames zone transitions in the brief.

### K-08: Phase 4.0 -- Perceptual Guardrails (Lines 844-1017)
**Lines:** ~173
**Reason:** ESSENTIAL but see M-03 for modification. The TC agent needs perceptual guardrails to score metaphor candidates (Phase 3.5E/F reference these). Container width guardrails are critical. The heading spacing enforcement is builder-level detail but the guardrail VALUES inform the TC agent's perceptual risk scoring.
**Note:** Some of this is duplicated in conventions-brief.md Section 2. See M-03 for compression opportunity.

### K-09: Step 4.0 -- Mechanism Library Access (Lines 1019-1070)
**Lines:** ~51
**Reason:** Per-category mechanism deployment instructions are essential for Phase 4 mechanism selection. The justification requirement is part of the TC brief's Section 4.

### K-10: Step 4.1 -- Extract Metaphor Physical Properties (Lines 1074-1153)
**Lines:** ~79
**Reason:** The 5-category taxonomy (Spatial, Temporal, Material, Behavioral, Relational) and density patterns are essential for the TC agent's metaphor-to-mechanism translation. This is the structured framework for converting a metaphor into CSS directions.

### K-11: Phase 4.5 -- Sub-Skill Output Mode (Lines 1627-1671)
**Lines:** ~44
**Reason:** This IS the output specification for sub-skill mode. The TC Brief format with 5 sections is the deliverable definition.

### K-12: Phase 4.7 -- Fractal Consistency Gate (Lines 1435-1467)
**Lines:** ~32
**Reason:** The fractal echo table is a required deliverable referenced by the TC brief. The TC agent needs to verify fractal coherence before outputting the brief.

### K-13: Edge Cases & Failure Modes (Lines 1727-1755)
**Lines:** ~28
**Reason:** Structureless content, visual-dominant content, emotionally flat content, zero-tension content, scale problems, multi-metaphor content, and equal-richness axes are all edge cases the TC agent encounters during analysis. These guide the TC agent's routing decisions.

---

## 3. MODIFY CANDIDATES (Correct Core, Stale Framing)

### M-01: Step 0E -- Library Access Prohibition (Lines 97-118)
**Current:** References `/active/design-system/case-studies/` and `/active/design-system/library/` (stale paths). Also references "Prior compositional explorations (DD-001 through AD-006)" and "Tension-test layouts (boris/, gastown/, playbook/)".
**Issue:** File paths are wrong (should be `design-system/compositional-core/case-studies/` etc.). The prohibition is correct in principle but references stale locations.
**Fix:** Update paths to current locations. Simplify to: "Do not read case-studies/, validated-explorations/, or any prior HTML explorations during Phases 0-3. Library access begins at Phase 4 (mechanism catalog only)."
**Lines affected:** ~20 lines, net reduction ~5.

### M-02: Step 4.0 Mechanism Library Access (Lines 1019-1025)
**Current:** References `/active/design-system/techniques/mechanisms.md` and `/active/design-system/foundations/components.md` (stale paths).
**Fix:** Update to `design-system/compositional-core/grammar/mechanism-catalog.md`. The /build-page spawn prompt already tells the TC agent to read this file.
**Lines affected:** ~6 lines, net reduction ~2.

### M-03: Phase 4.0 Perceptual Guardrails -- Compression Opportunity
**Current:** ~173 lines of guardrails covering container width, typography spacing, compression, CPL formula, heading spacing enforcement with examples.
**Issue:** Conventions-brief.md Section 2 (Perception) covers the same physics with different framing. The TC agent needs the guardrail VALUES for perceptual risk scoring but does NOT need the extensive builder-facing examples (CSS code blocks, "PASS" and "FAIL" examples). Those are builder territory.
**Fix:** Compress to a ~60-line reference table of guardrail values + the priority order + the container width non-negotiable. Remove all CSS code examples (6 code blocks, ~60 lines), remove the "WHY THIS MATTERS" heading spacing section (lines 992-1001, ~10 lines), remove the CPL concrete example (lines 883-910, ~28 lines). Keep the CPL formula itself (3 lines), the guardrail tables, and the priority order.
**Estimated reduction:** ~100 lines.

### M-04: Step 4.2 -- Translation Grammar (Lines 1154-1238)
**Current:** Extensive lookup tables mapping metaphor properties to CSS expressions (Weight, Depth, Density, Flow, Containment, Transition, Hierarchy, Combined Property Patterns).
**Issue:** This is BUILDER execution guidance, not TC analysis guidance. The TC agent's job is to identify which metaphor properties MAP to which CSS channels (Phase 4.1 covers this). The specific CSS values (`border: 3px solid`, `padding: 64px`) are builder decisions guided by conventions-brief.md. The TC brief output (Phase 4.5) asks for "metaphor-implied CSS DIRECTIONS" which are directional, not prescriptive.
**Fix:** Compress to a ~20-line summary table: "Each metaphor property expresses through one of 6 channels: Background, Border, Typography, Spacing, Layout, Accent. See mechanism-catalog.md for specific CSS patterns." Remove the detailed CSS value tables. The "6 Exhaustive CSS Channels" section (lines 1226-1237, ~12 lines) is good and should stay.
**Estimated reduction:** ~70 lines.

### M-05: Step 4.3 -- Coherence Rules + Multi-Coherence Binding Rules (Lines 1308-1376)
**Current:** 5 coherence rules (C-1 through C-5) + 6 multi-coherence rules (R-MC-01 through R-MC-06).
**Issue:** The coherence rules are ESSENTIAL for the TC agent (they shape the transition table in the TC brief). BUT conventions-brief.md Section 4 covers multi-coherence extensively with the same content. The TC agent needs to understand multi-coherence to derive zone architecture and transition directions, but does not need the full builder-level detail (e.g., R-MC-03 perceptual thresholds per channel are already in conventions-brief.md).
**Fix:** Keep C-1 through C-5 (concise, TC-relevant). Compress R-MC-01 through R-MC-06 to a ~15-line summary: "At each zone boundary, >=3 of 6 channels shift in the same semantic direction. Declare direction in the TC brief's zone architecture. Perceptual thresholds: bg >= 15 RGB, font-size >= 2px, spacing >= 24px, border weight change." Remove the transition table format example (R-MC-01) since the TC brief format (Phase 4.5) already specifies what the output looks like.
**Estimated reduction:** ~25 lines.

### M-06: Step 4.4 / 4.5 -- Component Inventory Tier 2/3 + Adapt-vs-Invent (Lines 1377-1411)
**Current:** Tier 2 vs Tier 3 boundary test + adapt-vs-invent decision tree.
**Issue:** These are BUILDER decisions. The TC agent selects mechanisms from the catalog and lists them in the TC brief. The builder decides whether to adapt or invent components. Tier 2/3 classification is a compositional-core concept that the builder encounters through components.css.
**Fix:** Remove entirely (~34 lines). The TC brief's mechanism list is sufficient guidance.
**Estimated reduction:** ~34 lines.

### M-07: Step 4.6 -- Transition Grammar (Lines 1413-1433)
**Current:** Full transition lookup table (axis-to-axis matrix) plus transition type definitions with gap/border/semantic values.
**Issue:** PARTIALLY redundant with conventions-brief.md Section 7 (Transition Grammar). The TC agent needs to understand SMOOTH/BRIDGE/BREATHING categories to assign them in the zone architecture. The full matrix and concrete CSS values are builder territory.
**Fix:** Keep the 3 transition type definitions (SMOOTH/BRIDGE/BREATHING, ~10 lines). Remove the 5x5 axis-to-axis matrix (~15 lines) and the "multi-coherence at transitions" note (already in M-05).
**Estimated reduction:** ~20 lines.

### M-08: Step 4.2B -- Pacing Prediction Heuristic (Lines 1239-1278)
**Current:** 5 pacing assessment questions + risk output format.
**Issue:** This is TC-relevant (the TC agent should flag pacing risk in the brief). But the 40-line section is over-specified. The TC agent needs the questions, not the implementation details.
**Fix:** Compress to ~15 lines: the 5 questions as a checklist + the risk output format. Remove the detailed sub-bullets under each question.
**Estimated reduction:** ~25 lines.

### M-09: Step 4.2C -- Rhythm Variation Requirement (Lines 1280-1306)
**Current:** Binary rule requiring 3+ transition types, with passing/failing examples and perceptual justification.
**Issue:** The rule itself is TC-relevant (the TC agent should ensure transition variety in zone architecture). The concrete examples and justification are builder-facing.
**Fix:** Compress to ~8 lines: the binary rule + the 3 transition type names. Remove the PASS/FAIL examples and the "WHY THIS MATTERS" section.
**Estimated reduction:** ~18 lines.

### M-10: Phase 0D -- Pipeline Entry (Lines 68-79)
**Current:** Contains "Every page runs the FULL pipeline. No tier routing, no phase skipping." plus tier discussion.
**Issue:** Contains stale language about tier routing being removed. The sub-skill mode exception note is essential.
**Fix:** Simplify to: "Every page runs the full pipeline (Phases 0-4). In sub-skill mode (/build-page invocation), stop at Phase 4.5." Remove the tier routing discussion and mechanism count proxy paragraph (lines 76-78) which is already covered in the Universal Compositional Requirements section.
**Estimated reduction:** ~5 lines.

---

## 4. NET IMPACT

### Line Count Estimate

| Category | Lines Removed | Lines Added/Modified |
|----------|--------------|---------------------|
| **TRIM (Remove entirely)** | | |
| T-01: Phase 5 Output | -50 | 0 |
| T-02: Phase 5 Divergence | -95 | 0 |
| T-03: Stale tension rules | -6 | 0 |
| T-04: Test content recs | -18 | 0 |
| T-05: Invocation section | -12 | 0 |
| T-06: Test results appendix | -14 | 0 |
| T-07: Tokenization self-check | -74 | 0 |
| T-08: Landmark gate | -64 | 0 |
| T-09: Section-aware composition | -10 | 0 |
| T-10: Builder warnings (content) | -60 | +5 (keep selection table) |
| **MODIFY (Compress)** | | |
| M-01: Library paths | -5 | 0 |
| M-02: Mechanism paths | -2 | 0 |
| M-03: Guardrails compress | -100 | 0 |
| M-04: Translation grammar | -70 | +5 (summary) |
| M-05: Multi-coherence compress | -25 | 0 |
| M-06: Component tier/adapt | -34 | 0 |
| M-07: Transition grammar | -20 | 0 |
| M-08: Pacing compress | -25 | 0 |
| M-09: Rhythm compress | -18 | 0 |
| M-10: Pipeline entry | -5 | 0 |
| **TOTAL** | **-707** | **+10** |

**Net reduction: ~697 lines (34.7%)**
**Resulting skill: ~1,309 lines** (down from 2,006)

This is conservative. A more aggressive trim targeting ~1,050 lines is achievable by further compressing:
- Phase 3 scoring rubrics (currently ~200 lines, could be ~120 with tighter formatting)
- Phase 2 tension derivation examples (currently ~186 lines, could be ~140)
- Phase 4.0 guardrails further (currently ~173 -> 73 in this audit, could be ~50 as a pure reference table)

---

## 5. RISKS

### R-01: Builder Warnings Becoming Invisible (MODERATE)
**Risk:** T-10 removes builder warning content from the TC skill. If the TC brief does not include builder warnings, the builder loses perceptual risk context.
**Mitigation:** Add a "6. BUILDER WARNINGS" section to the Phase 4.5 TC Brief format. The TC agent includes relevant W- codes (e.g., "W-DEADZONE, W-IMPLICIT") based on the perceptual risk score. The full warning text lives in conventions-brief.md (add a "Builder Warnings" appendix there) or in a separate reference file the builder reads.
**Status:** Requires coordination with conventions-brief surgery.

### R-02: Guardrail Values Becoming Stale (LOW)
**Risk:** M-03 compresses guardrails to a reference table. If conventions-brief.md and TC skill have different threshold values, they diverge.
**Mitigation:** The TC skill should reference conventions-brief.md for threshold values rather than duplicating them. Single source of truth.

### R-03: Translation Grammar Loss Degrading Brief Quality (LOW)
**Risk:** M-04 removes detailed CSS translation tables. The TC agent might produce less specific "Metaphor-Implied CSS Directions" in the brief.
**Mitigation:** The TC agent still has: (a) mechanism-catalog.md with full CSS patterns, (b) Phase 4.1 5-category extraction framework, (c) the 6 channel list. The brief format asks for DIRECTIONS, not prescriptions. The translation grammar was over-specifying TC territory.

### R-04: Phase 5 Divergence Verification Not Happening (LOW-MODERATE)
**Risk:** T-02 removes divergence verification. If the TC agent produces a metaphor that closely matches a case study, there is no verification step.
**Mitigation:** Phase 3.5C-D (Commitment Verification) catches convergence with library titles. Full case-study comparison is a nice-to-have. The /build-page orchestrator could add a lightweight divergence check as a future enhancement. Current metaphor quality rubric (3.5G) with the interpretive distance criterion already guards against zero-distance metaphors.

### R-05: Fractal Gate Becoming Disconnected (LOW)
**Risk:** K-12 keeps the fractal gate but surrounding context (landmark gate, tokenization) is removed. The fractal gate might feel abrupt.
**Mitigation:** Renumber/restructure Phase 4 sections after trimming. The fractal gate flows naturally from mechanism selection (Phase 4.0-4.1) to brief output (Phase 4.5).

---

## 6. SECTION-BY-SECTION DISPOSITION MAP

| Lines | Section | Disposition | Reason |
|-------|---------|-------------|--------|
| 1-5 | YAML frontmatter | KEEP | Skill metadata |
| 6-24 | Critical Principle | KEEP | Epistemological frame |
| 25-38 | Pipeline overview | KEEP | Orientation |
| 40-65 | Phase 0: Steps 0A-0C | KEEP | Content assessment |
| 68-79 | Step 0D: Pipeline Entry | MODIFY (M-10) | Remove tier routing language |
| 80-95 | Universal Requirements | KEEP | Essential constraints |
| 97-118 | Step 0E: Library Prohibition | MODIFY (M-01) | Update file paths |
| 121-204 | Phase 1: Multi-Axis | KEEP | Core analytical tool |
| 207-393 | Phase 2: Tension Derivation | KEEP | Analytical heart |
| 396-504 | Phase 3: Steps 3.1-3.4 + Search | KEEP | Creative core |
| 505-632 | Step 3.5: Scoring A-F | KEEP | Metaphor evaluation |
| 634-687 | Step 3.5G: Quality Rubric | KEEP | Anti-zero-distance gate |
| 688-725 | Steps 3.6 + Failure Modes | KEEP | Decision + recovery |
| 728-803 | Phase 3.5: Commitment + Zone Arch | KEEP | Lock-in + zone derivation |
| 807-843 | Phase 4: Header + Anti-Scale | KEEP | Governing principle |
| 844-1017 | Phase 4.0: Guardrails | MODIFY (M-03) | Compress, remove CSS examples |
| 1019-1070 | Step 4.0: Mechanism Access | MODIFY (M-02) | Fix paths |
| 1074-1153 | Step 4.1: Property Extraction | KEEP | 5-category framework |
| 1154-1237 | Step 4.2: Translation Grammar | MODIFY (M-04) | Remove CSS tables, keep channels |
| 1239-1278 | Step 4.2B: Pacing Prediction | MODIFY (M-08) | Compress |
| 1280-1306 | Step 4.2C: Rhythm Variation | MODIFY (M-09) | Compress |
| 1308-1376 | Step 4.3: Coherence + MC Rules | MODIFY (M-05) | Compress MC rules |
| 1377-1411 | Steps 4.4-4.5: Component Tier | TRIM (M-06) | Builder territory |
| 1413-1433 | Step 4.6: Transition Grammar | MODIFY (M-07) | Keep types, remove matrix |
| 1435-1467 | Step 4.7: Fractal Gate | KEEP | Required deliverable |
| 1471-1535 | Step 4.7B: Landmark Gate | TRIM (T-08) | Builder/gate-runner territory |
| 1539-1548 | Step 4.8: Section-Aware | TRIM (T-09) | Builder territory |
| 1550-1624 | Phase 4.9: Tokenization | TRIM (T-07) | Builder territory |
| 1627-1671 | Phase 4.5: Sub-Skill Output | KEEP | THE output spec |
| 1674-1724 | Phase 5: Output | TRIM (T-01) | Orphaned |
| 1727-1755 | Edge Cases | KEEP | TC-relevant routing |
| 1758-1853 | Phase 5: Divergence | TRIM (T-02) | Orphaned |
| 1857-1862 | Stale Tension | TRIM (T-03) | Already in Phase 2 |
| 1865-1883 | Test Content Recs | TRIM (T-04) | Historical |
| 1886-1898 | Invocation | TRIM (T-05) | Orphaned |
| 1901-1991 | Builder Warnings | TRIM (T-10) | Move content to brief |
| 1993-2006 | Test Results | TRIM (T-06) | Historical |

---

## 7. RECOMMENDED TRIMMED STRUCTURE

After applying all trims and modifications, the TC skill would have this structure:

```
SKILL.md (~1,050-1,150 lines target)

1. YAML Frontmatter + Critical Principle (30 lines)
2. Pipeline Overview (15 lines)
3. Phase 0: Content Assessment (75 lines)
   - 0A: Content Type, 0B: Scope, 0C: Sections, 0D: Entry, 0E: Library Prohibition
4. Phase 1: Multi-Axis Questioning (85 lines)
   - Core Four, Extended Five, Structural Triggers, Output
5. Phase 2: Tension Derivation (185 lines)
   - Side A/B, Addition Test, Richness Formula, Selection, Tension Landscape
6. Phase 3: Metaphor Collapse (330 lines)
   - Property extraction, search, scoring (A-G), rejection checks, selection, failure modes
7. Phase 3.5: Metaphor Commitment + Zone Architecture (75 lines)
   - Lock-in gate, zone derivation for sub-skill mode
8. Phase 4: Mechanism Selection (compressed, ~200 lines)
   - Anti-scale model, guardrails (compressed), mechanism access, 5-category extraction,
     6 CSS channels, pacing (compressed), rhythm (compressed), coherence rules (compressed),
     fractal gate
9. Phase 4.5: Sub-Skill Output Mode (50 lines)
   - TC Brief format (6 sections: metaphor, zones, tensions, mechanisms, CSS directions, builder warnings)
10. Edge Cases (30 lines)
```

---

## 8. DEPENDENCIES AND COORDINATION

### With conventions-brief.md surgery:
- Builder warning content (W-DEADZONE etc.) should move to conventions-brief.md if not already there
- Guardrail values should have single source of truth (conventions-brief.md Section 2)
- Phase 4.5 TC Brief should add Section 6: Builder Warnings (W- codes only)

### With /build-page SKILL.md:
- No changes needed. The /build-page TC agent spawn prompt (Section 2) correctly references Phases 0-4
- The output path (`_tc-brief.md`) and format are consistent

### With gate-runner.md:
- No changes needed. Gates reference HTML output, not TC brief
- DG-4 references mechanism counts which come from TC brief Section 4

### With PA skill:
- No changes needed. PA skill is invoked independently by /build-page orchestrator

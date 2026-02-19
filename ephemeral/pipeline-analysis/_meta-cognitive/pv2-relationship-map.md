# Pipeline v2 Relationship Map: Existing Files Analysis

**Author:** Relationship Mapper Agent (Opus 4.6)
**Date:** 2026-02-18
**Purpose:** Map what every existing skill/file does, what it does well, what it does poorly, how Pipeline v2 relates, and where File 42 overlaps or conflicts with existing assets.

---

## TABLE OF CONTENTS

1. [File-by-File Analysis](#1-file-by-file-analysis)
2. [Overlap Analysis: File 42 vs TC SKILL.md](#2-overlap-analysis)
3. [Conflict Map](#3-conflict-map)
4. [Relationship Matrix](#4-relationship-matrix)
5. [Recommendations](#5-recommendations)

---

## 1. FILE-BY-FILE ANALYSIS

### 1A. Tension-Composition SKILL.md (~1,878 lines)

**PURPOSE:** The TC skill is the full 6-phase pipeline for transforming raw content into metaphor-driven compositional HTML layouts. It covers: content assessment (Phase 0), multi-axis questioning (Phase 1), tension derivation (Phase 2), metaphor collapse (Phase 3), compositional layout generation (Phase 4), and output (Phase 5). It includes tier classification (Floor/Middle/Ceiling/Flagship), pattern selection for Middle tier, full metaphor derivation for Ceiling+, and extensive guardrails.

**WHAT IT DOES WELL:**
- Phase 0 content assessment and tier routing is comprehensive (5 content types, 5 scope levels, tier classification table with validated evidence)
- Phase 1 multi-axis questioning is thorough (4 core + 5 extended + 5 conditional axes = up to 14 axes)
- Phase 2 tension derivation with the Richness Formula (Opposition x Overlap x Width) is mathematically rigorous
- Phase 3 metaphor collapse is deeply specified: search query generation, domain search menu, 6-criterion rubric (Step 3.5G), 6 binary rejection checks, perceptual risk assessment (3.5E), perceptual cost assessment (3.5F)
- Tier-specific routing: Middle skips Phases 1-3 and goes directly to pattern selection
- Per-category mechanism deployment (5 categories, 1+ each) replaces the old "sample 2-4"
- Guardrails in Phase 4.0 are concrete and binary (940-960px container, 45-80 CPL, 1.5 line-height, etc.)
- Step 4.2 Translation Grammar provides specific CSS-to-metaphor mappings
- Multiple validated gates: Addition Test, BECAUSE test, Fractal Consistency (4.7), Landmarks (4.7B)
- Builder warnings appendix (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT) are excellent

**WHAT IT DOES POORLY (per the 41-file analysis):**
- **JUDGMENT RULES (~0% compliance):** Despite extensive enrichment, several rules still require judgment: "Structural overlap density" (2-3 shared = MEDIUM), "Metaphor space width" (2-4 candidates = MEDIUM). These produce ambiguous assessments.
- **GUARDRAIL DOMINANCE:** Phase 4 opens with 100+ lines of guardrails BEFORE any recipe steps. Even with the post-enrichment "recipe header" (Change 1 in codification map), the guardrail-to-playbook ratio remains high. The builder encounters "what NOT to do" before "what TO DO."
- **NO PERCEPTION THRESHOLDS:** The skill has guardrail values (940px, 45-80 CPL, 1.5 line-height) but NO minimum perceptible deltas (>= 15 RGB between backgrounds, >= 0.5px letter-spacing, >= 24px padding between zones). A builder can comply with all guardrails while producing imperceptible differentiation.
- **PHASE 4 IS A CHECKLIST, NOT A RECIPE:** Despite the skill's structure, Phase 4 reads as "here are 18 mechanisms, here are constraints, here are gates" rather than "Step 1: do X. Step 2: do Y. Step 3: verify Z." The TC skill provides the WHAT (mechanisms, guardrails, gates) but not the HOW (sequenced CSS writing steps).
- **MISSING CONCRETE CSS VALUES:** The Translation Grammar (Step 4.2) provides categories ("Weight: Heavy = border: 3px solid") but not complete recipes. Missing: specific background hex values for zone differentiation, specific font-size cascades, specific heading margin values, grid CSS templates.
- **NO HTML GUIDANCE:** The TC skill outputs a "thought process document" and an "HTML compositional layout" but provides zero guidance on HTML structure: no document shell, no section markup, no ARIA attributes, no component library class names, no grid wrappers.
- **NO ZONE ARCHITECTURE STEP:** The TC skill jumps from "metaphor locked" (Phase 3.5) to "mechanism extraction" (Phase 4) without a zone planning step. File 42's Phase 0.3-0.6 (zone count, zone semantics, section architecture, transition types) has no TC skill equivalent.
- **INFORMATION ROUTING FAILURE:** The skill is read by the PLANNER agent who derives the metaphor. The BUILDER agent (who writes CSS) receives a compressed build plan, not the full mechanism catalog or translation grammar. The skill's best content never reaches the CSS-writing agent.
- **S-09 STACKING LOOPHOLE:** The skill caps individual spacing values but does not address stacked gaps at section boundaries (the flagship's 210-276px void problem).

**Pipeline v2 Relationship: ENHANCE + WRAP**

The TC skill remains the intellectual core -- its tension derivation, metaphor collapse, and tier routing are irreplaceable. But Pipeline v2 must:
1. WRAP Phases 0-3 (metaphor derivation) unchanged
2. REPLACE Phase 4 with File 42's recipe-format phases (0-8)
3. ADD perception thresholds to every gate
4. ADD zone architecture step between metaphor lock-in and mechanism deployment
5. ROUTE the mechanism catalog and translation grammar to the builder agent, not just the planner

---

### 1B. Perceptual-Auditing SKILL.md (~774 lines)

**PURPOSE:** Defines the PA skill with 48 questions across 4 tiers, 4 audit modes (Embedded 90s, Quick 3min, Standard 30min, Standalone 60min), quantitative guardrails, team architecture, information isolation protocol, and visual auditing protocol (Cold Look, Scroll-Through, Zone Sweep).

**WHAT IT DOES WELL:**
- 48 PA questions are comprehensive and well-structured across tiers
- PA-05 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) with scoring rubric are the quality standard
- PA-05c expanded sub-dimensions (Horizontal, Vertical, Breathing proportion) added post-ceiling
- Tier 4 Void Prevention questions (PA-50 through PA-53) address the ceiling experiment's catastrophic failure
- Void Guardrail Specifications provide binary thresholds (max 1.5 consecutive blank viewports, min 60% content, etc.)
- Fresh-eyes principle is non-negotiable and correct
- Information isolation matrix prevents bias contamination
- Cold Look + Scroll-Through protocols are operationally robust
- Language hard block for auditors (no CSS vocabulary in findings) works
- Metaphor-awareness principles (metaphor shapes experience, guardrails prevent breaking) are well-articulated
- Team architecture for Mode 3 (4 agents) and Mode 4 (9+ agents) is validated

**WHAT IT DOES POORLY:**
- **NO PERCEPTION THRESHOLDS:** The skill has void guardrails but no minimum perceptual deltas (>= 15 RGB, >= 0.5px letter-spacing, etc.). Change 2 in the codification map addresses this but is NOT YET APPLIED.
- **NO BUILDER-FACING AUDIT:** The skill is designed for POST-BUILD verification by dedicated auditors. There is no lightweight builder self-check protocol beyond Mode 1 Embedded (PA-01 through PA-05 only). File 42's perception checks at the end of each phase are a different paradigm -- integrated verification, not external audit.
- **MODE 1 IS TOO THIN:** Embedded mode asks only PA-01-PA-05. For Ceiling+ builds, builders need void checks (PA-50-PA-53) and perception threshold verification DURING construction, not just after.
- **NO PROGRAMMATIC GATE INTEGRATION:** The PA skill is entirely perceptual (screenshot-based). It does not integrate with programmatic gates (the spatial gate runner that checks container width, CPL, spacing, etc.). File 42 unifies programmatic and perceptual verification.

**Pipeline v2 Relationship: ENHANCE (external audit) + SUPPLEMENT (builder-facing verification)**

The PA skill remains the canonical external audit tool. Pipeline v2 must:
1. LEAVE the PA skill unchanged for Mode 3/4 external audits
2. ADD perception thresholds (Change 2 from codification map) to guardrail section
3. CREATE a new "Builder Perception Check" protocol extracted from File 42's per-phase checks, distinct from the PA skill's auditor-facing modes
4. INTEGRATE programmatic + perceptual verification in Pipeline v2 gates

---

### 1C. design-system/compositional-core/CLAUDE.md (~680 lines)

**PURPOSE:** Phase-gated building protocol. Routes agents (Track 1 assembly vs Track 2 composition), enforces always-load protocol (prohibitions.md + tokens.css), defines the 6-layer ontology navigation, specifies anti-gravity rules (R1/R2/R3/R5/R6), and provides metacognitive framing.

**WHAT IT DOES WELL:**
- Track 1 vs Track 2 routing with Addition Test is clean
- Always-load protocol (prohibitions + tokens FIRST) prevents soul violations
- Phase-gated library access (R1) is structurally enforced
- 6-layer ontology quick map is useful navigation
- Verification checklist is comprehensive
- Anti-gravity rules (R1-R6) are well-specified
- Jazz Real Book analogy with concrete CSS example is excellent pedagogy
- Metacognitive framing (construction consciousness, template immunity) prevents pattern-matching
- Context awareness ("where was this validated?") promotes situated understanding

**WHAT IT DOES POORLY:**
- **PHASE 6 IS 3 LINES:** The implementation phase gives builders "Use exact token values, mechanisms adapted to YOUR metaphor, YOUR vocabulary" plus 3 CSS constraint lines. This is the ENTIRE implementation guidance. Builders get 500+ lines of "what not to do" and 3 lines of "what to do."
- **NO AGENT COMMUNICATION PROTOCOL:** Zero mention of inter-agent messaging. File-only communication was the confirmed quality bottleneck (Change 8 in codification map).
- **NO MODEL SELECTION GUIDANCE:** No specification of when to use Opus vs Sonnet for builder agents (Change 9 in codification map).
- **BUILDER ROUTING FAILURE:** Phase 4 permits mechanism catalog "first 200 lines" only. The builder needs the FULL catalog including application modes and impact profiles. Change 10 in codification map addresses this.
- **NO ZONE ARCHITECTURE:** The Track 2 workflow jumps from "tension-composition phases 0-3" to "mechanism extraction Phase 4" with no intermediate zone planning step.
- **STALE STATUS:** Still says "Ceiling Preparation In Progress" when ceiling, flagship, and remediation are all complete.

**Pipeline v2 Relationship: ENHANCE**

The CLAUDE.md remains the routing entry point. Pipeline v2 must:
1. EXPAND Phase 6 from 3 lines to the full builder recipe (from File 42 or a derived version)
2. ADD agent communication protocol (Change 8)
3. ADD model selection guidance (Change 9)
4. FIX builder routing to provide full mechanism catalog (Change 10)
5. ADD zone architecture step between metaphor lock-in and mechanism deployment
6. UPDATE status to reflect current state

---

### 1D. design-system/CLAUDE.md (~732 lines)

**PURPOSE:** Root navigation and process enforcement. Routes agents to correct subfolders based on task intent (Build/Validate/Understand/Plan/Research/Trace). Defines soul constraints, folder map, evolution state, skill invocation guidance, ingestion protocol, routing logic, and anti-patterns.

**WHAT IT DOES WELL:**
- Quick Start routing (BUILD/VALIDATE/UNDERSTAND/PLAN/RESEARCH/TRACE) is immediately actionable
- Soul constraints section is authoritative and universal
- Folder Map with 8 subfolders explained is comprehensive
- Supersession Matrix clarifies compositional-core vs specification vs validated-explorations relationships
- Ingestion Protocol per agent type (Builder/Auditor/Research/Planner) is well-organized
- Anti-patterns section prevents common routing mistakes
- Compaction Survival section provides context recovery
- Research finding counts and key file paths are useful reference

**WHAT IT DOES POORLY:**
- **NO PIPELINE V2 ROUTING:** If Pipeline v2 exists as a new entity (File 42 + derived artifacts), the root CLAUDE.md has no routing entry for "I'm here to BUILD using Pipeline v2."
- **STALE EVOLUTION STATE:** Lists "Ceiling Preparation In Progress" when ceiling, flagship, remediation are complete.
- **DOES NOT REFERENCE FILE 42:** The operational recipe is not mentioned anywhere. A builder arriving at the root CLAUDE.md has no path to the recipe.
- **CONDITIONAL-LOAD IS COMPLEX:** The per-agent-type file lists are long and require agents to self-classify. Pipeline v2 could simplify this with explicit per-role loading instructions.

**Pipeline v2 Relationship: ENHANCE**

The root CLAUDE.md must:
1. ADD a routing entry: "I'm here to BUILD a page" -> Pipeline v2 entry point
2. UPDATE evolution state
3. ADD File 42 (or its permanent successor) to key file paths
4. SIMPLIFY conditional-load for Pipeline v2 builder agents

---

### 1E. design-system/compositional-core/guidelines/semantic-rules.md (~530 lines)

**PURPOSE:** Fills semantic gaps identified in adversarial methodology review: Info vs Context vs Note callout selection (Gap 1), Inline vs Block code (Gap 2), Table styling (Gap 3), Breathing-room zone triggers (Gap 4), Callout semantic differentiation (Gap 5), Content density floors (Gap 6), Content-form fit (Gap 7), and Semantic Value Framework (3-question test).

**WHAT IT DOES WELL:**
- Every gap is filled with 2+ HTML evidence examples
- Content Density Floor Rules (Gap 6) are binary and address the ceiling void failure
- Zone Count Ceiling (by word count) is validated against experimental data
- Content-Form Fit (Gap 7) with the "Enough Content?" gate is practical
- Semantic Value Framework with the 3-Question Test (WHAT/WHY/WHY THESE VALUES) enforces intentional CSS
- Before/After examples (arbitrary vs semantic padding, border-weight) are excellent pedagogy
- Tier-Specific Justification Depth table maps tiers to expected reasoning depth

**WHAT IT DOES POORLY:**
- **S-09 STACKING NOT ADDRESSED (partially):** Rule 2 mentions `--space-max-zone` (96px) but does NOT address the stacking loophole where individual values pass but combined values create 210-276px voids. Change 5 in codification map addresses this.
- **NO PERCEPTION THRESHOLDS:** The file defines semantic rules but not minimum perceptible deltas. "Adjacent zones should have distinct backgrounds" without specifying >= 15 RGB minimum.
- **HYPOTHETICAL PATTERNS UNRESOLVED:** Context callout variant and zebra-striping are flagged as HYPOTHETICAL since Phase C extraction. Neither has been validated or discarded.

**Pipeline v2 Relationship: ENHANCE**

Semantic rules remain authoritative for semantic gap decisions. Pipeline v2 must:
1. ADD S-09 stacking rule (Change 5 from codification map)
2. REFERENCE these rules from the builder recipe where relevant (callout selection, table styling, zone architecture)
3. These rules are CONSULTED during building, not MODIFIED by Pipeline v2

---

### 1F. File 42: OPERATIONAL-RECIPE (42-OPERATIONAL-RECIPE.md, ~1,746 lines)

**PURPOSE:** A 9-phase sequential recipe for building design system pages. Content-agnostic. Phases: 0 (Content Analysis + Zone Architecture), 1 (HTML Skeleton), 2 (Base CSS + Soul), 3 (Zone System + Backgrounds), 4 (Typography Cascade), 5 (Component Styling), 6 (Coherence + Transitions), 7 (Accessibility), 8 (Final Perception Audit).

**WHAT IT DOES WELL:**
- RECIPE FORMAT: Every step says "DO X" with exact CSS values. Constraint-to-action ratio is 0.32:1 (actions dominate). This is the proven success pattern from the middle-tier experiment.
- PERCEPTION CHECKS PER PHASE: Each phase ends with "open in browser, verify you can SEE X." This catches problems incrementally, not at final audit.
- ZONE ARCHITECTURE (Phase 0): Zone count by word count, zone semantics (temperature/density/voice/weight), section architecture with grid mandate, transition type assignment with stacking arithmetic. This step is MISSING from the TC skill.
- CONCRETE CSS VALUES: Complete CSS blocks for reset, tokens, container, header, footer, zone backgrounds, typography cascade, component styling, transitions, accessibility. A builder can follow it line by line.
- STACKING ARITHMETIC: Explicitly calculates worst-case gap at section boundaries (padding-bottom + divider margins + divider height + next padding-top) to prevent the S-09 loophole.
- HTML TEMPLATES: Complete document shell, section markup with ARIA, component markup with standard class names, grid wrappers.
- ACCESSIBILITY: Skip link, ARIA roles, focus indicators, color contrast, reduced-motion support -- all as concrete CSS.
- BOOKEND PATTERN: Proven header/footer design from remediation (9/9 auditor acclaim).

**WHAT IT DOES POORLY:**
- **NO METAPHOR DERIVATION:** File 42 is content-agnostic. It provides a PATTERN but not a METAPHOR. For Ceiling+ tier, zone semantics and mechanism selection require metaphor derivation (TC skill Phases 1-3). File 42's zone architecture is a content-mapping approach (content arc -> zone semantics), not a tension-derivation approach.
- **NO TIER ROUTING:** File 42 does not distinguish Floor/Middle/Ceiling/Flagship tiers. It provides a single recipe assumed to work for all tiers. The TC skill's tier-specific routing (Middle skips Phases 1-3, Ceiling requires full pipeline) is absent.
- **N=2 EVIDENCE:** All CSS values are derived from comparing the flagship (failed) and remediation (improved). The specific hex values, font sizes, and spacing values are starting points, not universal answers.
- **NO DIVERGENCE VERIFICATION:** File 42 has no equivalent of TC Phase 5 (comparing against library case studies to verify novelty).
- **NOT A PERMANENT FILE:** File 42 is in `ephemeral/pipeline-analysis/`. It needs codification into permanent design system files.
- **MIDDLE-TIER SPECIFICITY UNCERTAIN:** The recipe was built from the remediation of a RESEARCH-SYNTHESIS content page. Whether the same CSS values work for a tutorial, an API reference, or a case study is untested.

**Pipeline v2 Relationship: The recipe IS Pipeline v2's building phase. INCORPORATE.**

---

### 1G. Codification Map (_meta-cognitive/codification-map.md, ~701 lines)

**PURPOSE:** Maps 10 specific edits from the 41-file analysis into exact before/after file changes with target files, line numbers, rationale, dependencies, and confidence ratings.

**WHAT IT DOES WELL:**
- Each of 10 changes has: target file, target location, current content, proposed content, rationale, dependencies, and confidence tier
- Dependency graph shows application order
- 2 changes already applied (Changes 6, 7), 8 new
- Summary table with line counts

**WHAT IT DOES POORLY:**
- **PIECEMEAL:** The 8 new edits patch existing files. They do not design a UNIFIED artifact. Pipeline v2 needs a coherent architecture, not 8 patches to 5 different files.
- **NO FILE 42 INTEGRATION:** The codification map proposes edits to TC SKILL.md, PA SKILL.md, and CLAUDE.md, but does not specify how File 42 becomes permanent. It exists as separate edits that could be subsumed by a holistic Pipeline v2 design.

**Pipeline v2 Relationship: INCORPORATE changes, but as part of unified design, not as independent patches.**

---

## 2. OVERLAP ANALYSIS: FILE 42 vs TC SKILL.md

This is the critical tension. Both cover content analysis, building, and verification. Where do they complement vs conflict?

### 2A. Phase Mapping

| Activity | TC SKILL.md | File 42 | Relationship |
|----------|-------------|---------|-------------|
| Content classification | Phase 0 (type, scope, section, tier) | Phase 0 (word count, element inventory, content arc) | **COMPLEMENT** -- TC classifies by tension potential, F42 classifies by structural properties. Both needed. |
| Tier routing | Phase 0D (Floor/Middle/Ceiling/Flagship with Addition Test) | None (single recipe for all) | **TC UNIQUE** -- File 42 has no tier routing. TC's tier system is essential. |
| Multi-axis questioning | Phase 1 (14 axes, richness ratings) | None | **TC UNIQUE** -- Metaphor derivation is TC's core value. File 42 does not derive metaphors. |
| Tension derivation | Phase 2 (Richness Formula, Addition Test, BECAUSE test) | None | **TC UNIQUE** |
| Metaphor collapse | Phase 3 (search query, domain menu, composite scoring, 6-criterion rubric) | None | **TC UNIQUE** |
| Metaphor lock-in | Phase 3.5 (commitment gate, divergence verification) | None | **TC UNIQUE** |
| Zone architecture | None | Phase 0.3-0.6 (zone count, semantics, section architecture, transition types, stacking arithmetic) | **F42 UNIQUE** -- This is the biggest gap in TC. |
| Perceptual guardrails | Phase 4.0 (container, CPL, line-height, spacing, compression) | Phase 2 (same values, embedded in CSS) | **OVERLAP -- Same values, different format.** TC lists them as checks; F42 embeds them in recipe CSS. F42 format is superior (compliance is automatic). |
| Mechanism deployment | Phase 4 (5-category table, per-category minimums, extraction protocol) | None (mechanisms implicit in CSS values) | **TC UNIQUE** -- File 42 provides CSS values but no mechanism selection framework. |
| Translation grammar | Step 4.2 (metaphor property -> CSS expression lookup) | Phase 3-6 (CSS values provided directly) | **OVERLAP -- Different paradigms.** TC provides a lookup table for metaphor-to-CSS mapping. F42 provides the CSS directly. For Middle tier, F42 is sufficient. For Ceiling+, TC's translation grammar is needed. |
| HTML structure | None | Phase 1 (document shell, section markup, ARIA, grid wrappers, component classes) | **F42 UNIQUE** -- TC produces no HTML guidance. |
| CSS writing | None (output is "HTML compositional layout") | Phases 2-7 (complete CSS blocks, line by line) | **F42 UNIQUE** -- TC tells builders to "use exact token values" (3 lines). F42 provides complete CSS. |
| Coherence checking | Step 4.3 (5 coherence rules C1-C5) | Phase 6 (coherence section with transition typing) | **OVERLAP -- Complementary.** TC's coherence is metaphor-direction checking. F42's coherence is transition variation. Both needed. |
| Fractal consistency | Step 4.7 (scale coverage table, tier requirements) | None | **TC UNIQUE** -- File 42 has no fractal verification. |
| Landmarks | Step 4.7B (header/main/footer verification) | Phase 1 (header/main/footer in HTML template) | **OVERLAP -- Same requirement, F42 bakes it in.** |
| Tokenization | Step 4.9 (token compliance self-check, >= 80% target) | Phase 2 (tokens in CSS reset, used throughout) | **OVERLAP -- TC checks after build, F42 prevents issue by using tokens from start.** |
| Divergence verification | Phase 5 (case study comparison, divergence table) | None | **TC UNIQUE** |
| Perception checks | None during build (PA skill is post-build) | Per-phase perception checks (open in browser, verify visible) | **F42 UNIQUE** -- TC has no incremental visual verification during build. |
| Accessibility | None | Phase 7 (skip link, focus indicators, ARIA, color contrast, reduced-motion) | **F42 UNIQUE** -- TC has no accessibility phase. |
| Stacking loophole | Not addressed | Phase 0.6 (stacking arithmetic, 120px max) | **F42 UNIQUE** -- Directly prevents the flagship void failure. |
| Builder warnings | Appendix (W-DEADZONE, W-OVERLABEL, W-MONOTONY, etc.) | Implicit in recipe values | **TC UNIQUE** -- Builder warnings are attached to metaphor risk assessment. F42 embeds the mitigations in the recipe values. |
| Perception thresholds | Not in current skill (Change 2 pending) | Phase 3 (>= 10 RGB between zones), Phase 8 (final audit) | **F42 SUPERIOR** -- F42 embeds perception minimums; TC lacks them entirely. |

### 2B. Summary of Overlap Assessment

**TC is essential for:** Tier routing, metaphor derivation (Phases 1-3), mechanism selection framework, divergence verification, fractal consistency, builder warnings.

**File 42 is essential for:** Zone architecture, HTML structure, concrete CSS recipes, per-phase perception checks, stacking prevention, accessibility, perception thresholds.

**Both cover, F42 is better at:** Guardrail enforcement (embedded vs checklist), landmark completeness (template vs gate), tokenization (prevention vs detection).

**Neither covers:** Agent communication protocol, model selection, information routing to builder agents. These are in the codification map (Changes 8, 9, 10).

### 2C. Key Conflicts

| Conflict | TC SKILL.md | File 42 | Resolution |
|----------|-------------|---------|------------|
| **Phase numbering** | Phases 0-5 (6 phases) | Phases 0-8 (9 phases) | Pipeline v2 must unify. TC Phases 0-3 (derivation) + F42 Phases 0-8 (building) = 12+ phases total, which needs simplification. |
| **Zone definition approach** | Metaphor-driven zones (metaphor determines zone character) | Content-arc-driven zones (content progression determines zone character) | Both are valid at different tiers. Middle = F42's content-arc approach. Ceiling+ = TC's metaphor-driven approach. Pipeline v2 should select based on tier. |
| **Background color specificity** | Phase 4.0 says "from locked zone palette" but provides no specific hex values | Phase 3 provides exact hex values (#FEF5EB, #F5EDE2, #F8F6F3, etc.) with >= 10 RGB delta rule | F42 values are starting points. Pipeline v2 should provide them as defaults with permission to override (within perception thresholds). |
| **Transition types** | Step 4.6 Transition Grammar (5x5 matrix based on axis patterns: Z, F, Bento, Spiral, Choreography) | Phase 0.6 (3 types: Smooth/Bridge/Breathing, based on section-to-section relationships) | F42's 3-type system is simpler and more actionable. TC's 5x5 matrix is more nuanced but requires axis knowledge. Pipeline v2 should use F42's 3-type system for Middle tier and TC's full grammar for Ceiling+. |
| **Output format** | Two outputs: Thought Process Document + HTML file | Single HTML file with CSS written in phases | F42's incremental build is better for the builder. TC's thought process document is valuable for the planner. Pipeline v2: planner produces thought process, builder follows recipe. |
| **S-09 maximum gap** | `--space-max-zone: 96px` per property | 120px maximum TOTAL stacked gap at boundaries | Values differ. F42's 120px is more conservative. Codification map Change 5 proposes 192px. Need to reconcile: F42's 120px is per-boundary arithmetic; codification map's 192px is the binary gate. Both are correct at different measurement points. |

---

## 3. CONFLICT MAP

### 3A. Hard Conflicts (must resolve before Pipeline v2)

| # | Conflict | Affected Files | Severity |
|---|----------|---------------|----------|
| C1 | Phase numbering collision (TC 0-5 vs F42 0-8) | TC SKILL.md, F42 | HIGH -- confuses agents about which phase they're in |
| C2 | Zone approach divergence (metaphor-driven vs content-arc) | TC SKILL.md Phase 4, F42 Phase 0 | MEDIUM -- different at different tiers, need explicit routing |
| C3 | Stacking gap threshold inconsistency (96px per-prop in tokens.css, 120px total in F42, 192px in codification map) | tokens.css, F42, semantic-rules.md | HIGH -- three different numbers for the same concern |
| C4 | Background color delta threshold (F42 says >= 10 RGB, codification map says >= 15 RGB) | F42, codification map Change 2 | LOW -- F42 is stricter, 15 RGB is the researched value |

### 3B. Soft Conflicts (can coexist with documentation)

| # | Conflict | Affected Files | Resolution Path |
|---|----------|---------------|----------------|
| S1 | Transition type complexity (3-type vs 5x5 matrix) | TC SKILL.md, F42 | Tier-gated: Middle uses 3-type, Ceiling+ uses full grammar |
| S2 | TC skill Phase 4 "first 200 lines" of mechanism catalog | compositional-core/CLAUDE.md | Change 10 already proposes removing this restriction |
| S3 | F42 has no divergence verification | TC SKILL.md Phase 5, F42 | Divergence remains TC's responsibility, occurs before F42 phases |

---

## 4. RELATIONSHIP MATRIX

| Existing File | Pipeline v2 Relationship | What Changes | What Stays |
|---------------|--------------------------|-------------|------------|
| **TC SKILL.md** | **WRAP + PARTIAL REPLACE** | Phase 4 replaced by F42's recipe approach; zone architecture inserted between Phases 3.5 and 4; perception thresholds added to all gates | Phases 0-3.5 (content assessment through metaphor lock-in); Phase 5 (divergence verification); tier routing; mechanism selection framework; builder warnings |
| **PA SKILL.md** | **ENHANCE** | Add perception thresholds (Change 2); Mode 1 expanded for Ceiling+ builds | All 48 questions; 4 modes; team architecture; information isolation; Cold Look + Scroll-Through protocols |
| **compositional-core/CLAUDE.md** | **ENHANCE** | Phase 6 expanded with builder recipe; agent communication protocol added; model selection added; builder routing fixed; status updated | Track 1/2 routing; always-load protocol; anti-gravity rules; 6-layer ontology; metacognitive framing |
| **design-system/CLAUDE.md** | **ENHANCE** | Pipeline v2 routing entry added; evolution state updated; File 42 successor referenced | Folder map; soul constraints; skill invocation; ingestion protocol; anti-patterns |
| **semantic-rules.md** | **ENHANCE** | S-09 stacking rule added (Change 5) | All 7 gaps; semantic value framework; 3-question test |
| **File 42** | **INCORPORATE as Pipeline v2 building phase** | Move from ephemeral to permanent location; add tier-awareness; reconcile threshold values; integrate with TC skill's metaphor-driven approach | 9-phase recipe structure; concrete CSS values; per-phase perception checks; HTML templates; accessibility; stacking arithmetic |
| **Codification map** | **EXECUTE then ARCHIVE** | Apply 8 new changes to target files; archive the map itself | Nothing -- the map's purpose is to guide edits, then it's done |

---

## 5. RECOMMENDATIONS

### 5A. The Core Architecture Decision

The user's concern is precise: "The tension composition is still integral to this, but there are so many layers on top of it."

**The answer:** Pipeline v2 is NOT a replacement for the TC skill. It is a WRAPPER that:
1. Uses TC Phases 0-3.5 for THINKING (metaphor derivation) -- unchanged
2. Inserts F42's zone architecture as a BRIDGE between thinking and building
3. Uses F42's Phases 0-8 for BUILDING (CSS/HTML writing) -- adapted per tier
4. Uses TC Phase 5 for VERIFICATION (divergence) -- unchanged
5. Uses PA skill for AUDITING (perceptual quality) -- enhanced

### 5B. Tier-Specific File Usage

| Tier | TC SKILL.md | File 42 Recipe | PA SKILL.md |
|------|-------------|---------------|-------------|
| **Floor** | Phase 0 only (content type -> SKIP) | Not needed (Track 1 assembly) | Mode 1 only |
| **Middle** | Phase 0 only (tier routing + pattern selection) | Full recipe, Phases 0-8 | Mode 2 or 3 |
| **Ceiling** | Phases 0-3.5 (full metaphor derivation) | Adapted recipe (zone semantics from metaphor, not content arc) | Mode 3 or 4 |
| **Flagship** | Phases 0-3.5 + enhanced rubric | Multi-pass adapted recipe with inter-agent communication | Mode 4 mandatory |

### 5C. What Must Be UNIFIED (not duplicated)

1. **Perception thresholds**: One authoritative source (PA skill), referenced by TC and F42
2. **Stacking maximum**: One number (recommend 192px from codification map -- matches gate runner)
3. **Container width**: Already unified (940-960px everywhere)
4. **Background color delta**: One number (recommend >= 15 RGB -- researched value, F42's >= 10 is stricter but less supported)
5. **Transition types**: One vocabulary (Smooth/Bridge/Breathing) used by both TC and F42

### 5D. What Must STAY SEPARATE

1. **Metaphor derivation (TC)** must NOT be merged into the building recipe -- it is THINKING, not DOING
2. **Perceptual audit (PA)** must NOT be merged into the builder's self-check -- fresh-eyes principle requires separation
3. **File 42's CSS values** must NOT be hard-coded into TC skill -- they are starting points, not constraints

### 5E. The 3-Document Model

Based on this analysis, Pipeline v2 should produce THREE documents, not one monolith:

1. **Pipeline v2 Router** (~100 lines): Tier classification, file routing per tier, agent role assignments. Lives in compositional-core/CLAUDE.md (enhanced).
2. **Pipeline v2 Derivation** (TC SKILL.md, ~1,900 lines): Metaphor derivation phases 0-3.5 + divergence verification phase 5. Enhanced with zone architecture bridge (new ~50 lines). Consumed by PLANNER agent.
3. **Pipeline v2 Building Recipe** (~1,800 lines, derived from F42): 9-phase CSS/HTML recipe with concrete values, per-phase perception checks, tier-specific adaptations. Consumed by BUILDER agent.

The PA skill remains separate (post-build verification, consumed by AUDITOR agents).

This model directly addresses the "layers on top" concern: the layers are ROUTED, not stacked. Each agent reads ONE document appropriate to their role, not all layers combined.

---

## END

**Key takeaway:** TC SKILL.md and File 42 are not competitors -- they serve different phases of the same pipeline (THINKING vs BUILDING). Pipeline v2's architecture must route the right document to the right agent at the right phase, preventing the 963-line prompt's failure mode where every agent received every layer.

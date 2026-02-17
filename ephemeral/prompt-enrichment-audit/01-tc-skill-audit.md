# AUDIT REPORT: Tension-Composition Skill Invocation in Master Execution Prompt

**Auditor:** TC Skill Deep Auditor (Task #1)
**Date:** 2026-02-17
**Skill file:** `~/.claude/skills/tension-composition/SKILL.md` (1,932 lines, read exhaustively)
**Prompt outline:** `00-PROMPT-STRUCTURE-OUTLINE.md` (105 lines)

---

## 1. EXECUTIVE SUMMARY

**Rating: 4/10 -- Severely Underinvoked**

The current prompt references the TC skill as one of 6 "enriched design system files" in the reading list (Layer C) and touches some of its concepts (metaphor, per-category minimums, container width, tier model). However, the prompt treats the TC skill as a *reference document to be read* rather than as a *pipeline to be executed*. The skill is a 6-phase pipeline with 14+ gates, 18+ scoring rubrics, and dozens of binary decision points. The prompt outline mentions none of the phases by name, none of the gates, none of the scoring protocols, and none of the critical failure modes. The prompt assumes the Opus metaphor agent "knows" the pipeline -- but without explicit invocation of specific phases, the agent will improvise rather than follow the validated pipeline.

The prompt's biggest structural weakness is the absence of any *pipeline routing* instructions. The TC skill has a complete tier-routing system (Phase 0D) that determines which phases to run. The prompt never tells agents which phases to execute for a Flagship-tier page. This is the single highest-leverage gap.

---

## 2. CRITICAL GAPS (Must Fix -- Prompt is Defective Without These)

### CG-1: No Pipeline Phase Routing

**Skill content:** Phase 0D defines 4 tiers (Floor/Middle/Ceiling/Flagship) with explicit routing:
- Floor: Skip Phases 1-5, use Track 1
- Middle: Skip Phases 1-3, go to Phase 4.0 with PATTERN selection
- Ceiling: Full pipeline (Phases 1-7)
- Flagship: Full pipeline + multi-pass audit

**Prompt gap:** The prompt never tells the metaphor agent "You are building Flagship tier. Execute the FULL TC pipeline Phases 0-5 + multi-pass audit." Without this, the agent has no routing instruction.

**Why critical:** Flagship tier requires ALL phases including the Addition Test, BECAUSE test, Richness Formula, Metaphor Quality Rubric (6-criterion, 18-point), 6 Binary Rejection Checks, Perceptual Risk Assessment, and Perceptual Cost Assessment. Skipping any of these was directly responsible for the Ceiling experiment's failure (metaphor scored 6/18 on the rubric that wasn't invoked).

### CG-2: 6-Criterion Metaphor Quality Rubric Missing

**Skill content (lines 705-757):** A complete 18-point rubric with 6 criteria:
1. Interpretive Distance (0-3)
2. Content-Shape Fit (0-3)
3. Structural Survival (0-3)
4. Perceptual Risk (0-3)
5. Mechanism Diversity (0-3)
6. Restraint Compatibility (0-3)

Threshold: >= 12/18 to proceed. Interpretive Distance MUST >= 2 (hard gate).

Plus 6 Binary Rejection Checks (R1-R6) that immediately reject metaphors before scoring.

**Prompt gap:** The prompt outline mentions nothing about metaphor quality scoring, interpretive distance, or rejection checks. The conviction layer mentions metaphor-driven architecture and the execution spec mentions reinforcing pairs, but there is no gate that evaluates whether the chosen metaphor is actually viable.

**Why critical:** The Ceiling experiment's metaphor ("secure facility" for security docs) would have been REJECTED by R1 (content-domain vocabulary) and R2 (label-dependent). It scored 6/18 on this rubric. This rubric IS the fix for the Ceiling experiment's dominant failure, and it's absent from the prompt.

### CG-3: Perceptual Risk + Perceptual Cost Assessments Missing

**Skill content (lines 626-703):** Two separate assessment protocols:
- Perceptual Risk (4 questions, scored 0-4): transition model, expression mode, element variety, responsive story
- Perceptual Cost (5 questions, scored 0-5+): compression below floors, container width, uniform grids, transitions as empty space, explicit labels

These override richness scores. A metaphor with Resolution 7/7 and HIGH perceptual risk should rank BELOW Resolution 5/7 with LOW risk.

**Prompt gap:** The execution spec mentions "content-to-void >= 60:40" and "max void threshold" but these are OUTPUT checks, not INPUT gates. The perceptual risk/cost assessments are INPUT gates that prevent bad metaphors from ever reaching implementation.

**Why critical:** "The pipeline predicts RICHNESS, not QUALITY" is the #1 lesson from 15 test layouts. Without these gates, the metaphor agent will select the richest metaphor (highest tension resolution) instead of the safest metaphor (lowest perceptual risk). This was the exact failure mode of the Ceiling experiment.

### CG-4: Phase 0E Library Access Prohibition Missing

**Skill content (lines 168-188):** Explicit prohibition on reading case studies, prior explorations, and pattern libraries during Phases 0-3. "Violation of this rule invalidates the entire derivation."

**Prompt gap:** The prompt's execution spec (2D PROCESS) mentions "Phase 0E library prohibition" but only as a checklist item. The reading list (Layer D) includes crown jewels CD-006 and DD-006 as mandatory reading. If the metaphor agent reads these BEFORE deriving its metaphor, the derivation is invalid per the skill.

**Why critical:** The TC skill explicitly says "Library patterns are VALIDATION tools, not GENERATION tools. Reading them before metaphor commitment = pattern-matching, not tension-deriving." The prompt's reading list contradicts this by making crown jewels mandatory upfront reading.

**Fix needed:** Crown jewels must be routed to the conviction layer (for understanding quality) but PROHIBITED from the metaphor agent until Phase 5 (divergence verification).

### CG-5: Addition Test + BECAUSE Test Missing from Execution Gates

**Skill content (lines 336-383):** Two critical diagnostic tests:
- Addition Test: "Can you fulfill the reader's need by selecting existing components without transforming their meaning?" YES = cosmetic (no metaphor needed). NO = genuine (metaphor required).
- BECAUSE Test: "The reader needs X BECAUSE [specific content property]." If you can't complete this sentence, the need is manufactured.

**Prompt gap:** Neither test appears in the execution spec or any gate sequence. The prompt assumes genuine tension exists without verifying it.

**Why critical:** These tests prevent the metaphor agent from manufacturing tension where none exists. They are the pipeline's guardrail against over-engineering -- the exact failure mode where a simple page gets an overwrought metaphor that produces void and complexity.

### CG-6: Transition Grammar + 3-Transition Minimum Not Concretely Specified

**Skill content (lines 1303-1330):** Binary rule requiring 3 DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING) between major sections. Includes concrete passing/failing examples and the taxonomy from Phase 4.6.

**Prompt gap:** The execution spec (2C COMPOSITIONAL) mentions "3-transition minimum" as a line item but doesn't specify the taxonomy (SMOOTH/BRIDGE/BREATHING), the concrete CSS values for each, or the verification procedure.

**Why critical:** The Middle experiment failed PA-17 and PA-41 specifically because of uniform transitions. The builder used the same 48px + 1px border between every section. Without the concrete taxonomy and examples, a builder will repeat this failure.

### CG-7: Void Prevention Gate Missing

**Skill content (lines 1262-1301):** Step 4.2B "Pacing Prediction Heuristic" -- a mandatory pre-generation check that evaluates:
1. Section count (3-6 = good, 11+ = high risk)
2. Breathing zone model (CHANGING STATE vs EMPTY SPACE)
3. Element uniformity (VARIED vs UNIFORM)
4. Dramatic moment placement (60-80% of page height)
5. Transition model check per section boundary

Output: PACING RISK rating with specific mitigations.

**Prompt gap:** The execution spec mentions "content-to-void >= 60:40" and "max void threshold" but these are MEASUREMENT metrics, not predictive gates. The Pacing Prediction is a PREDICTIVE gate that runs BEFORE generating HTML to prevent void from being created in the first place.

**Why critical:** The Ceiling experiment's 70-80% void was the dominant failure. A measurement metric catches it after the fact; a predictive gate prevents it. The TC skill has the predictive gate. The prompt doesn't invoke it.

---

## 3. HIGH-VALUE ADDITIONS (Would Significantly Improve Prompt)

### HV-1: Richness Formula (Opposition x Overlap x Width)

**Skill content (lines 385-422):** A multiplicative scoring formula for evaluating tension richness across 3 dimensions. Includes the critical insight that it's MULTIPLICATIVE -- zero on any dimension = zero richness.

**Prompt value:** Gives the metaphor agent a concrete scoring protocol for selecting which tension to resolve. Without this, the agent uses intuition (which produced the Ceiling experiment's zero-distance metaphor).

### HV-2: Tension Landscape Quick Reference

**Skill content (lines 425-441):** Pre-computed tension analysis for KortAI specifically:
- STRONGEST tensions: warmth vs austerity, reconciliation vs verdict-drive, playfulness vs formality
- ZERO tensions: hierarchy/structure, clarity/precision, step-by-step (system already provides these)

**Prompt value:** Prevents the metaphor agent from wasting time deriving tensions that don't exist (KortAI already IS hierarchical and precise). Directs creative energy toward the highest-yield tensions.

### HV-3: Domain Search Menu (10 Compatible Metaphor Families)

**Skill content (lines 528-543):** 10 pre-vetted metaphor domain categories compatible with KortAI's angular/flat/sharp constraints, plus 5 incompatible families to avoid.

**Prompt value:** Prevents the metaphor agent from exploring incompatible domains (organic/biological, liquid/fluid, atmospheric, textile, musical). Saves ~30 min of wasted exploration.

### HV-4: 5-Category Property Extraction (Step 4.1)

**Skill content (lines 1110-1175):** Systematic extraction of metaphor properties across 5 categories: Spatial, Temporal, Material, Behavioral, Relational. Each with concrete CSS mechanism mappings. Includes completeness checklist: "If ANY category produces zero properties, YOUR metaphor may be insufficiently rich."

**Prompt value:** Forces the metaphor agent to map its metaphor across ALL expressive dimensions, not just the obvious 1-2. The Ceiling experiment mapped "secure facility" only through labels (Relational) and zones (Spatial), missing Temporal, Material, and Behavioral entirely.

### HV-5: Translation Grammar Lookup Table (Step 4.2)

**Skill content (lines 1177-1248):** Complete lookup table mapping abstract properties (Weight, Depth, Density, Flow, Containment, Transition, Hierarchy) to concrete CSS expressions. Includes combined property patterns.

**Prompt value:** Eliminates the builder's need to invent CSS from scratch. Every metaphor property has a pre-validated CSS expression.

### HV-6: 6 Exhaustive CSS Channels

**Skill content (lines 1249-1260):** The 6 (and ONLY 6) CSS channels through which metaphors may express: Background, Border, Typography, Spacing, Layout, Color accent.

**Prompt value:** Binary constraint. Prevents soul violations by limiting the expression space to validated channels.

### HV-7: Builder Warning Categories (W-DEADZONE through W-IMPLICIT)

**Skill content (lines 1843-1916):** 6 warning categories with selection protocol based on Perceptual Risk and Pacing Prediction output.

**Prompt value:** These warnings are appended to the builder's instructions based on the specific metaphor selected. They prevent the most common execution failures. The W-IMPLICIT warning ("The best layouts make the reader FEEL the metaphor without ever NAMING it") addresses the Ceiling experiment's dominant labeling problem.

### HV-8: Fractal Consistency Gate (Step 4.7)

**Skill content (lines 1416-1461):** Mandatory gate requiring the same design pattern at multiple scales:
- Middle: 2 scales (Page + Component)
- Ceiling: 4 scales (Navigation/Page/Section/Component)
- Flagship: 5 scales (all scales)

Includes concrete passing/failing examples and a sunset clause.

**Prompt value:** The prompt execution spec mentions "per-category minimums" and "reinforcing pairs" but NOT fractal consistency. This gate ensures the metaphor appears at every scale of attention, which is the conviction layer's definition of beauty ("confident intention at every scale of attention").

### HV-9: Landmark Completeness Gate (Phase 4.7B)

**Skill content (lines 1466-1532):** Binary gate requiring header + main + footer for Middle+ tier. Includes concrete CSS evidence examples and provenance from the Middle experiment's missing footer.

**Prompt value:** The prompt execution spec mentions "header+footer" as a checklist item but doesn't frame it as a GATE with verification protocol. The Middle experiment's missing footer was a WOULD-NOT-SHIP finding.

### HV-10: Tokenization Self-Check (Phase 4.9)

**Skill content (lines 1547-1621):** Protocol for verifying CSS uses design tokens (var()) instead of raw values. Target: >= 80% compliance. Includes formula, concrete examples, and gap analysis from Middle experiment.

**Prompt value:** The prompt mentions "token compliance" in the success criteria but doesn't provide the verification protocol or the formula.

### HV-11: Phase 3.5 Metaphor Commitment Gate

**Skill content (lines 799-862):** Formal lock-in gate with commitment verification (3 questions) and divergence justification protocol. "You are now LOCKED IN. You DO NOT change it after consulting the library."

**Prompt value:** Prevents metaphor drift during implementation. Without this gate, the builder can unconsciously shift the metaphor as they encounter implementation difficulties, which destroys coherence.

### HV-12: Multi-Axis Questioning Protocol (14 Axes)

**Skill content (lines 192-275):** 4 core axes (FEEL/UNDERSTAND/DO/BECOME), 5 extended axes (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE), 5 structural trigger axes (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER). With richness ratings and opposition predictions.

**Prompt value:** The prompt mentions multi-axis questioning nowhere. For Flagship tier, the metaphor agent should run ALL 14 axes to find the richest tension. The extended axes (especially RECONCILE, which produces the highest tension against KortAI at richness 27) are where Flagship-quality metaphors originate.

### HV-13: Responsive Degradation Check (Step 3.4+)

**Skill content (lines 545-565):** Pre-selection check asking "Does this metaphor have a natural responsive story at 768px?" with per-metaphor risk ratings for both 768px AND 1440px utilization risk.

**Prompt value:** Prevents selecting metaphors that break at narrow viewports or waste space at wide viewports.

### HV-14: Coherence Checking (5 Rules, Step 4.3)

**Skill content (lines 1331-1366):** 5 coherence rules (C-1 through C-5) covering density direction, transition strength, typography role, border category, and accent color. With pairwise verification procedure.

**Prompt value:** Ensures ALL CSS channels reinforce the same metaphor direction. Without this, different channels can accidentally contradict each other (e.g., backgrounds darkening while spacing increases -- contradictory density signals).

---

## 4. SPECIFIC INSERTABLE TEXT

### For LAYER 1: CONVICTION (~70 lines)

**Insert after "Anti-scale model" and before "Experiential truth":**

```
THE PIPELINE PREDICTS RICHNESS, NOT QUALITY. High tension resolution scores identify promising pairings but do NOT guarantee perceptual success. The Ceiling experiment scored 12/12 on structural metrics but 6/18 on the quality rubric (interpretive distance = 0). Perceptual gates are mandatory. Never skip them because richness scores look good.

IMPLICIT > EXPLICIT. The best layouts make the reader FEEL the metaphor without NAMING it. The worst moments across all tested layouts were explicit metaphor announcements. If the metaphor vocabulary appears as visible text labels, it is announced, not embodied. Graduated backgrounds ARE the elevation. Deepening color IS the stratum. Narrowing space IS the compression. Show, don't tell.
```

### For LAYER 2: EXECUTION SPEC -- Section 2C COMPOSITIONAL

**Replace current 2C content with expanded version (~25 lines instead of ~15):**

```
2C COMPOSITIONAL RULES (all binary):
- Per-category mechanism minimums: Spatial 1+, Hierarchy 1+, Component 1+, Depth/Emphasis 1+, Structure/Nav 1+ (5 categories, verified by counting)
- Reinforcing pairs: at minimum 2 mechanism pairs encoding SAME semantic through different CSS channels
- Mechanism cap: 16 max (Flagship natural landing 16-18; cap prevents over-concentration)
- Density cap: max 4 mechanisms per viewport-height section
- 3-transition minimum: page MUST use 3+ DIFFERENT transition types from {SMOOTH: 48px + 1px border, BRIDGE: 64px + breathing zone + text, BREATHING: 80px + 3px border}
- Designed moment: at least 1 per page quartile (25%, 50%, 75%, 100% scroll points)
- Dramatic moment placement: at 60-80% of total page height
- Fractal consistency: SAME pattern visible at 5 scales (Navigation/Page/Section/Component/Character) for Flagship
- Landmark completeness: header + main + footer ALL required (page just stopping = fail)
- Footer mirrors header: dark background + 3px red border + inverted text (or equivalent visual weight)
- Token compliance: >= 80% var() usage (count var() / (var() + raw hex/px values))
```

### For LAYER 2: EXECUTION SPEC -- New Section 2F METAPHOR GATES

**Insert as new section after 2E BUILDER SELF-CHECK (~20 lines):**

```
2F METAPHOR GATES (Opus metaphor agent only):
- Phase routing: Flagship tier = FULL pipeline Phases 0-5 + multi-pass audit
- Addition Test: "Can you fulfill reader need by placing existing components without transforming meaning?" YES = no metaphor needed, NO = proceed
- BECAUSE Test: "Reader needs X BECAUSE [specific content property]." Cannot complete = manufactured need, ABORT
- Richness Formula: Opposition (1-3) x Overlap (1-3) x Width (1-3) = score. Select highest. Minimum 8 to proceed.
- 6 Binary Rejection Checks (ANY YES = reject metaphor immediately):
  R1: Uses content's own domain vocabulary? R2: Requires visible text labels? R3: Forces container < 940px?
  R4: ALL transitions = empty space? R5: 6+ identical repeated elements? R6: Requires soul violations?
- 6-Criterion Quality Rubric (18 points, threshold >= 12):
  Interpretive Distance (0-3, MUST >= 2), Content-Shape Fit (0-3), Structural Survival (0-3),
  Perceptual Risk (0-3), Mechanism Diversity (0-3), Restraint Compatibility (0-3)
- Perceptual Risk Assessment (4 questions, 0-4 score): transition model, expression mode, element variety, responsive story. Score >= 2.5 = rank below lower-risk alternatives even with higher resolution.
- Perceptual Cost Assessment (5 questions, 0-5+ score): compression floors, container width, uniform grids, empty transitions, explicit labels. Score 3+ = consider alternative metaphor.
- Metaphor commitment: LOCK IN before reading any library. Divergence justified post-Phase 4.
- Library prohibition: NO case studies, prior explorations, or crown jewels before metaphor commitment.
```

### For LAYER 2: EXECUTION SPEC -- New Section 2G VOID PREVENTION GATE

**Insert after 2F (~10 lines):**

```
2G VOID PREVENTION GATE (runs BEFORE generating HTML):
- Section count: 3-6 = good. 7-10 = risk of monotony (introduce variation). 11+ = HIGH RISK (must group).
- Breathing zone model: CHANGING STATE (background shift, border change, density gradient), NEVER EMPTY SPACE (viewport-height gaps). Max breathing zone: 48px.
- Element uniformity: If 6+ same-shaped elements, break into groups with visual separators.
- Dramatic moment: Place at 60-80% of total page height (natural scroll-reading peak).
- Transition model check per section boundary: background color shifts = GOOD, labeled connectors = BAD.
- Output: PACING RISK rating (LOW/MODERATE/HIGH) with specific mitigations for HIGH.
```

### For LAYER 3: COORDINATION SPEC -- Section 3B COMMUNICATION

**Add to checkpoint sequence:**

```
- Checkpoint F (NEW): Metaphor Quality Gate -- metaphor agent presents 6-criterion rubric score + 6 binary rejection checks BEFORE any builder begins. Team lead reviews. Score < 12/18 or Interpretive Distance < 2 = REJECT and regenerate.
- Checkpoint G (NEW): Void Prevention Gate -- after skeleton but BEFORE mechanism building, embedded auditor runs Pacing Prediction on skeleton HTML. PACING RISK = HIGH triggers re-architecture.
```

### For LAYER 3: COORDINATION SPEC -- Section 3A AGENT ROSTER

**Modify metaphor agent description:**

```
Metaphor Agent (Opus): Runs FULL TC pipeline Phases 0-5. Must execute: multi-axis questioning (14 axes), tension derivation with Addition/BECAUSE tests, richness scoring, metaphor search with domain menu, 6 binary rejection checks, 18-point quality rubric, perceptual risk + cost assessments, metaphor commitment gate. Outputs: committed metaphor + isomorphism table + per-category mechanism mapping + builder warnings (W-DEADZONE through W-IMPLICIT as applicable). Library access PROHIBITED until Phase 5.
```

### For LAYER 4: REFERENCE LIBRARY

**Add routing annotations:**

```
- TC Skill SKILL.md → Route to: Metaphor Agent (Phases 0-3), Content Architect (Phase 4 mechanism mapping), Builder agents (Phase 4 guardrails + warnings), Embedded Auditor (Phase 4.7-4.9 gates)
- Specifically route these TC sections:
  - Lines 70-145 (tier routing): Metaphor Agent
  - Lines 192-275 (multi-axis questioning): Metaphor Agent
  - Lines 278-465 (tension derivation): Metaphor Agent
  - Lines 467-862 (metaphor collapse + commitment): Metaphor Agent
  - Lines 866-1107 (mechanism deployment): Content Architect + Builder
  - Lines 1110-1461 (property extraction + coherence + fractal): Content Architect + Builder
  - Lines 1466-1621 (landmark + tokenization): Builder + Embedded Auditor
  - Lines 1827-1916 (builder warnings): Builder agents
```

---

## 5. SKILL PHASES MAP

Complete map of every TC skill phase/step and its invocation status in the prompt:

| Phase | Step | Skill Lines | Invoked in Prompt? | Should Be? | Priority |
|-------|------|-------------|-------------------|------------|----------|
| **Phase 0** | 0A Content Type Classification | 44-49 | NO | YES -- routes prose vs code vs visual | HIGH |
| | 0B Scope Assessment | 52-57 | NO | YES -- word count routing | MEDIUM |
| | 0C Section Identification | 59-64 | NO | YES -- multi-section handling | MEDIUM |
| | 0D Tier Classification | 68-145 | PARTIAL (tier mentioned, routing absent) | YES -- explicit "Flagship = full pipeline" | CRITICAL |
| | 0D-CEILING Context Box | 148-165 | NO | YES -- 7 mandatory requirements for Ceiling+ | CRITICAL |
| | 0E Library Prohibition | 168-188 | PARTIAL (mentioned as checklist item) | YES -- must be GATE, not checklist | CRITICAL |
| **Phase 1** | Multi-Axis Questioning | 192-275 | NO | YES -- 14 axes, core creative phase | CRITICAL |
| | Core Four (FEEL/UNDERSTAND/DO/BECOME) | 198-204 | NO | YES | CRITICAL |
| | Extended Five (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE) | 206-217 | NO | YES | HIGH |
| | Structural Triggers (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER) | 219-229 | NO | YES | MEDIUM |
| | Axis Selection Protocol | 231-236 | NO | YES | HIGH |
| | Opposition Predicts Richness | 238-248 | NO | YES | HIGH |
| | Axis Interaction Effects | 250-258 | NO | YES | MEDIUM |
| | Phase 1 Output format | 260-274 | NO | YES | HIGH |
| **Phase 2** | Tension Derivation | 278-465 | NO | YES -- core analytical phase | CRITICAL |
| | Side A: Reader Needs | 280-284 | NO | YES | CRITICAL |
| | Side B: KortAI Constraints | 286-335 | PARTIAL (soul in prompt, constraints not) | YES | HIGH |
| | Addition Test | 336-343 | NO | YES -- THE diagnostic | CRITICAL |
| | Three Criteria Genuine | 345-353 | NO | YES | HIGH |
| | Three Criteria Cosmetic | 355-361 | NO | YES | HIGH |
| | Tension Spectrum | 363-373 | NO | YES | MEDIUM |
| | Deriving Tension procedure | 375-383 | NO | YES | HIGH |
| | BECAUSE Test | 382 | NO | YES -- prevents manufactured tension | CRITICAL |
| | Richness Formula | 385-422 | NO | YES -- tension scoring | HIGH |
| | Practical Selection Protocol | 407-414 | NO | YES | HIGH |
| | Richness Formula Cap | 416-423 | NO | YES -- prevents richness overriding risk | HIGH |
| | Tension Landscape | 425-441 | NO | YES -- KortAI-specific quick reference | HIGH |
| | Tension Validity Check | 443-456 | NO | YES | HIGH |
| | Tension Threshold Gate | 458-464 | NO | YES | HIGH |
| **Phase 3** | Metaphor Collapse | 467-797 | NO | YES -- core creative phase | CRITICAL |
| | 3.1 Extract structural from Side A | 473-482 | NO | YES | HIGH |
| | 3.2 Extract structural from Side B | 484-491 | NO | YES | HIGH |
| | 3.3 Structural Overlap | 493-505 | NO | YES | HIGH |
| | 3.4 Generate Search Query | 507-526 | NO | YES -- the creative step | CRITICAL |
| | Three Search Heuristics | 518-526 | NO | YES | HIGH |
| | Domain Search Menu (10 domains) | 528-543 | NO | YES -- prevents incompatible domains | HIGH |
| | Responsive Degradation Check | 545-565 | NO | YES | MEDIUM |
| | Incompatible Metaphor Families | 567-575 | NO | YES -- 5 banned families | HIGH |
| | 3.5 Candidate Scoring (A-F) | 576-703 | NO | YES -- complete scoring protocol | CRITICAL |
| | A: Tension Resolution | 580-587 | NO | YES | HIGH |
| | B: Structural Isomorphism | 589-604 | NO | YES | HIGH |
| | C: Content Resonance (split) | 606-620 | NO | YES | HIGH |
| | D: Mechanism Feasibility | 622-624 | NO | YES | HIGH |
| | E: Perceptual Risk (4 questions) | 626-648 | NO | YES | CRITICAL |
| | F: Perceptual Cost (5 questions) | 650-703 | NO | YES | CRITICAL |
| | 3.5G Metaphor Quality Rubric (18pt) | 705-757 | NO | YES -- THE missing gate | CRITICAL |
| | 6 Binary Rejection Checks | 744-756 | NO | YES | CRITICAL |
| **Phase 3.5** | Metaphor Commitment Gate | 799-862 | NO | YES -- lock-in protocol | CRITICAL |
| | 3.5A State committed metaphor | 803-808 | NO | YES | CRITICAL |
| | 3.5B Document WHY | 810-817 | NO | YES | HIGH |
| | 3.5C Commitment Verification | 819-832 | NO | YES | CRITICAL |
| | 3.5D Divergence Justification | 834-862 | NO | YES | HIGH |
| **Phase 4** | Compositional Layout | 866-1107 | PARTIAL (per-category in prompt) | YES -- need full mechanism deployment | HIGH |
| | 4.0 Perceptual Guardrails | 876-981 | PARTIAL (container width in prompt) | YES -- need ALL guardrails | HIGH |
| | CPL Calculation Formula | 907-942 | NO | YES -- binary verification | HIGH |
| | Container Width Guardrails | 944-981 | YES (in prompt) | Already present | -- |
| | Heading Spacing Enforcement | 984-1034 | NO | YES -- ratio >= 1.5 | MEDIUM |
| | Mechanism Library Access | 1051-1107 | PARTIAL | YES -- need extraction protocol | HIGH |
| | Per-category deployment table | 1078-1092 | PARTIAL (mentioned) | YES -- need full table | HIGH |
| | 4.1 5-Category Property Extraction | 1110-1175 | NO | YES -- systematic extraction | HIGH |
| | 4.2 Translation Grammar | 1177-1248 | NO | YES -- lookup table | MEDIUM |
| | 6 Exhaustive CSS Channels | 1249-1260 | NO | YES -- constraint boundary | HIGH |
| | 4.2B Pacing Prediction | 1262-1301 | NO | YES -- void prevention | CRITICAL |
| | 4.2C Rhythm Variation (3-min) | 1303-1330 | PARTIAL (mentioned as line item) | YES -- need taxonomy + examples | HIGH |
| | 4.3 Coherence Checking (5 rules) | 1331-1366 | NO | YES -- multi-channel consistency | HIGH |
| | 4.4 Component Inventory (Tier 2/3) | 1368-1387 | NO | YES -- prevents over-invention | MEDIUM |
| | 4.5 Adapt-vs-Invent | 1388-1403 | NO | YES -- prevents over-engineering | MEDIUM |
| | 4.6 Transition Grammar table | 1404-1414 | NO | YES -- lookup table for transitions | MEDIUM |
| | 4.7 Fractal Consistency GATE | 1416-1461 | NO | YES -- 5-scale requirement for Flagship | HIGH |
| | 4.7B Landmark Completeness GATE | 1466-1532 | PARTIAL (header+footer mentioned) | YES -- need full gate protocol | HIGH |
| | 4.8 Section-Aware Composition | 1536-1544 | NO | YES -- multi-section handling | MEDIUM |
| | 4.9 Tokenization Self-Check | 1547-1621 | PARTIAL (token compliance mentioned) | YES -- need formula + protocol | MEDIUM |
| **Phase 5** | Output (Thought Process + HTML) | 1624-1650 | NO | YES -- defines deliverables | HIGH |
| | Divergence Verification | 1684-1778 | NO | YES -- novelty gate | HIGH |
| | 5.1 Select Similar Case Studies | 1697-1705 | NO | YES | MEDIUM |
| | 5.2 Divergence Comparison Table | 1707-1718 | NO | YES | MEDIUM |
| | 5.3 Divergence Verdict | 1720-1728 | NO | YES | MEDIUM |
| | 5.4 Convergence Justification | 1730-1761 | NO | YES | MEDIUM |
| | 5.5 Mechanism Extraction | 1763-1778 | NO | YES | LOW |
| **Edge Cases** | 8 edge cases documented | 1653-1681 | NO | YES -- failure mode prevention | MEDIUM |
| **Builder Warnings** | W-DEADZONE through W-IMPLICIT | 1843-1916 | NO | YES -- execution failure prevention | HIGH |
| | Warning Selection Protocol | 1906-1916 | NO | YES -- maps risk to warnings | HIGH |
| **Appendices** | Builder Guardrail Values | 1862-1903 | PARTIAL (some values in prompt) | YES -- need complete set | MEDIUM |
| | Test Results Summary | 1919-1932 | NO | YES -- 6 key findings from 15 layouts | MEDIUM |

**Summary Statistics:**
- Total items mapped: 78
- Fully invoked: 1 (container width guardrails)
- Partially invoked: 12
- Not invoked: 65
- **Coverage: 1.3% fully invoked, 16.7% partially invoked, 83.3% absent**

---

## 6. CROSS-LAYER CONNECTIONS

### How TC Skill Should Connect Conviction → Execution → Coordination

**CONVICTION (Layer 1) should invoke:**
- "Pipeline predicts richness, not quality" (lines 703, 1925)
- "Implicit > explicit metaphors" (lines 1831-1841)
- "The metaphor is CONSTRUCTED, not DISCOVERED" (lines 6-23)
- "Constraint pressure = engine of quality" (already present, but should reference TC's Priority Order: readability > breathing > content width > metaphor > aesthetics)

**EXECUTION SPEC (Layer 2) should invoke:**
- Phase routing: "Flagship = full pipeline Phases 0-5" (line 79)
- Addition Test + BECAUSE Test (lines 336-383) as mandatory gates
- 6 Binary Rejection Checks (lines 744-756) as mandatory gates
- 18-point Quality Rubric with Interpretive Distance >= 2 hard gate (lines 705-757)
- Perceptual Risk/Cost Assessments (lines 626-703) as mandatory gates
- Pacing Prediction Heuristic (lines 1262-1301) as mandatory gate
- 3-transition minimum with taxonomy (lines 1303-1330)
- 5-scale fractal consistency (lines 1416-1461)
- Landmark completeness (lines 1466-1532)
- CPL formula (lines 907-942)
- Token compliance formula (lines 1547-1621)
- All perceptual guardrails (lines 876-981)

**COORDINATION SPEC (Layer 3) should invoke:**
- Metaphor agent: must execute TC Phases 0-3.5 and present rubric scores at Checkpoint F
- Content architect: must execute TC Phases 4.0-4.7 (property extraction, translation, coherence)
- Builder agents: must execute TC Phase 4.7B-4.9 (landmark, tokenization) and follow appended warnings
- Embedded auditor: must verify fractal consistency (4.7), landmark completeness (4.7B), pacing risk (4.2B)
- Library prohibition: metaphor agent cannot read crown jewels (Layer D) until Phase 5
- Builder warnings: metaphor agent outputs W-* codes, which are appended to builder instructions

**REFERENCE LIBRARY (Layer 4) should route:**
- TC Skill → per-agent sections (see Section 4 above for line-range routing)
- Mechanism catalog → builder agents (Phase 4.0 access)
- Case studies → metaphor agent Phase 5 ONLY (divergence verification)
- Crown jewels → conviction layer reading (for understanding quality standard), NOT metaphor agent Phase 0-3

### Critical Cross-Layer Dependencies

1. **Conviction's "beauty = confident intention at every scale"** → connects to **Execution's fractal consistency gate** (5 scales for Flagship) → verified by **Coordination's embedded auditor**

2. **Conviction's "restraint, not complexity"** → connects to **Execution's mechanism cap (16)** and **density cap (4 per viewport)** and **Restraint Compatibility criterion** in rubric → verified by **Coordination's builder self-check**

3. **Conviction's "spatial confidence"** → connects to **Execution's void prevention gate** (content-to-void >= 60:40) and **Pacing Prediction** → verified by **Coordination's checkpoint G**

4. **Conviction's "iteration insight"** → connects to **Execution's two-instance pattern** and **embedded auditor acknowledgment** → implemented by **Coordination's checkpoint sequence** (must enable builder to ASK questions via SendMessage)

---

## 7. HIGHEST-PRIORITY RECOMMENDATIONS (Ranked)

1. **Add Section 2F METAPHOR GATES** to execution spec (see Section 4 above). This is the single highest-leverage addition because it prevents the Ceiling experiment's dominant failure mode.

2. **Add Checkpoint F (Metaphor Quality Gate)** to coordination spec. The metaphor agent must present rubric scores to team lead BEFORE any building begins.

3. **Add Section 2G VOID PREVENTION GATE** to execution spec (see Section 4 above). This prevents the Ceiling experiment's 70-80% void.

4. **Route crown jewels correctly** -- conviction layer reading only, PROHIBITED from metaphor agent until Phase 5.

5. **Expand 2C COMPOSITIONAL** with concrete transition taxonomy and fractal consistency requirements (see Section 4 above).

6. **Add "Pipeline predicts richness, not quality" and "Implicit > Explicit"** to conviction layer.

7. **Add TC skill line-range routing** to reference library (Layer 4).

8. **Modify metaphor agent description** in agent roster to list specific TC phases it must execute.

---

## 8. RISK ASSESSMENT

**If these gaps are NOT fixed:**
- The metaphor agent will improvise instead of following the validated pipeline
- A zero-distance metaphor (like the Ceiling's "secure facility") has no gate preventing it
- Void prevention relies on after-the-fact measurement instead of predictive gating
- The builder will repeat the Middle experiment's uniform transitions
- The Flagship experiment will likely produce Ceiling-quality output (9/9 novelty, DO NOT SHIP) rather than Flagship quality

**If these gaps ARE fixed:**
- The metaphor agent follows a validated 6-phase pipeline with 14+ gates
- Zero-distance metaphors are rejected before any building begins
- Void is prevented predictively, not just measured after the fact
- Transitions are varied by taxonomy, not uniform by default
- The Flagship experiment has the TC skill's full analytical power behind it

---

*End of TC Skill Audit Report*
*Total skill content audited: 1,932 lines*
*Total gaps identified: 7 critical, 14 high-value, 65 uninvoked items*
*Estimated prompt line additions needed: ~75 lines across Layers 1-4*

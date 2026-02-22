# 16 -- Compositional Intelligence Compression Analysis

**Agent:** compression-analyst (Opus)
**Date:** 2026-02-22
**Task:** #29 -- Map EXACTLY how compositional intelligence gets compressed through the pipeline, and whether this compression structurally prevents Flagship quality.

---

## THE USER'S INSIGHT -- CONFIRMED AND EXTENDED

The user identified a devastating vertical compression pattern across 9 compositional intelligence concepts. This analysis validates that pattern against all source files, quantifies the compression ratios, and answers the three structural questions.

**Files read:** conventions-brief.md (609 lines), MASTER-EXECUTION-PROMPT.md (578 lines), SKILL.md (579 lines), gate-runner.md (1,340 lines), 6 deep-dive reports (18-23), previous compression-losses report, _tc-brief.md (Page B), _build-log.md (Page B).

---

## CONCEPT-BY-CONCEPT COMPRESSION TRACING

### CONCEPT 1: The 6 Channels

**What DRAFT-09 / conventions-brief says (Section 4, ~83 lines):**

The conventions brief names all 6 channels with specific CSS properties, classifies 4 as PRIMARY (Chromatic, Typographic, Spatial, Structural) and 2 as ENHANCEMENT (Behavioral, Material), provides perception thresholds per channel in a 5-row table, defines 4 semantic directions (DEEPENING, OPENING, FOCUSING, RESOLVING) with exact CSS patterns for each, gives a concrete worked example of 5 channels encoding DEEPENING at one boundary, provides a layout diversity shortcut (topology change = 3 free channel shifts), includes a coherence arc planning table mapping arc phase to active channel count, and gives a 4-zone DEEPENING arc example with computed RGB deltas.

Specificity: HIGH. CSS properties named per channel. Thresholds per channel. Directions mapped to CSS. Worked example with exact values.

**What the MASTER-EXECUTION-PROMPT says (Section 2, ~4 lines relevant):**

The master prompt mentions "6 channels" in the gate table (SC-13: ">= 3 of 6 channels shift at every zone boundary, avg >= 4"), describes the 6 channels briefly in the gate specification. But the PROMPT ITSELF -- the document that instructs the assembly team HOW to write the conventions brief -- devotes ~4 lines to channel concept versus the brief's ~83 lines. The master prompt treats channels as a gate parameter, not as a compositional intelligence concept to preserve.

**What the SKILL.md says (Section 4.2, ~3 lines):**

SC-13 gate check: ">= 3 of 6 channels shift at every zone boundary, avg >= 4." The builder spawn prompt (Section 3) says "multi-coherence channels" once. The 6 channel NAMES appear only in the gate specification, not in the builder's instructions.

**What the gates check:**

- SC-13: Counts channel shifts (binary: >= 3?). Measures Chromatic by RGB delta >= 15, Typographic by font-size delta >= 2px or font-weight delta >= 200, Spatial by padding delta >= 24px, Structural by border change, Behavioral by transition presence change, Material by background-image change.
- SC-13B: Classifies shift direction as +/- per channel, checks >= 50% of boundaries have >= 3 channels in SAME direction.
- Gate SC-13 CANNOT judge if channels serve the same semantic direction qualitatively. It can count contradictions (bg darkens but spacing loosens) but not semantic coherence. SC-13B attempts direction classification but with ~50% confidence.

**What the PA asks:**

- PA-61 (Tier 5, Auditor F): "Do you perceive independent channel rhythms -- is the typography doing something different from the color, which is different from the spacing, while all point the same direction?" This is the ONLY PA question that directly addresses multi-channel semantic direction. It detects understanding vs existence.

**What the builder actually did (Page B build log):**

The builder's transition table maps all 4 primary channels at every boundary with specific CSS values and direction labels. The boundary CSS section in the TC brief specifies exact channel counts per boundary (4, 3, 3 channels). The build log shows the builder working boundary-by-boundary, adjusting Z3 font-weight from 500 to 600 specifically to strengthen the typographic channel at Z2->Z3. The fix cycle boosted multi-coherence average from 3.3 to 4.2 channels.

**VERDICT: The conventions brief PRESERVES this concept. The builder ABSORBED it.**

The builder's transition table demonstrates understanding of channels as CSS property groups encoding semantic direction -- not just as a count to hit. The fix cycle shows compositional reasoning (strengthening a specific channel at a specific boundary for a specific direction), not gate compliance. The conventions brief provided the intelligence; the builder received it.

**Compression ratio:** 83 lines (brief) -> 3 lines (SKILL gate table) -> binary gate (SC-13: count >= 3)
**But the brief is what the builder reads.** The gate is what verifies AFTER. The compression from brief to gate is by design -- gates are floor detectors, not intelligence carriers.

**What's LOST in the gate:** Semantic direction (partially recovered by SC-13B), the distinction between primary and enhancement channels, the coherence arc planning concept (opening at 2-3 channels, climax at 4-5, resolution at 2-3). The arc concept survives only in the brief and in the builder's internalization.

---

### CONCEPT 2: 5 Scales with Build Order

**What DRAFT-09 / conventions-brief says (Section 5, ~51 lines):**

Names all 5 scales (Navigation, Page, Section, Component, Character) with size ranges, what expresses at each, minimum thresholds, and verification checkboxes. Specifies DEPENDENCY: Scale 5 without perceptible Scale 2 produces orphaned variation. Mandates build order (largest first). Defines priority (Navigation + Page + Component mandatory strong). Provides parametric echo CSS recipe -- a table mapping scale to echo vehicle to specific CSS values for dense/sparse zones. Requires a Fractal Echo Table as a pre-build planning artifact.

Specificity: HIGH. Build order specified. Dependencies stated. CSS recipe per scale. Planning artifact required.

**What the MASTER-EXECUTION-PROMPT says (Section 2, ~2 lines):**

The master prompt instructs the brief-writer to include "Section 5: Fractal Echo -- 5-scale table, build order, dependency verification." The gate section specifies DG-1 (fractal echo table has 5 rows). The prompt treats fractal echo as a section to include, not as intelligence to elaborate.

**What the SKILL.md says (~2 lines):**

DG-1 gate: "Fractal echo table exists with 5 rows, CSS evidence non-empty, pattern direction consistent." The builder spawn prompt does not mention scales, fractal echo, or build order by name. The conventions brief reference is the intelligence carrier.

**What the gates check:**

- DG-1: TABLE EXISTS? 5 rows? CSS evidence non-empty? Pattern direction documented? Pattern direction CONSISTENT?
- This checks EXISTENCE and STRUCTURAL COMPLETENESS. It does NOT verify that the table reflects ACTUAL CSS in the output. A builder could write a beautiful fractal echo table and then ignore it during the build. DG-2 (cascade value table cross-validation) partially closes this gap but only for channel values, not for fractal expression.
- PA-63 (Tier 5): "Can you pick 2 of 5 scales and detect the same organizing principle?" This is the PERCEPTUAL verification that the fractal echo table was actually executed.

**What the builder actually did:**

The builder wrote a complete fractal echo table BEFORE building, mapping "dispatch compression" at all 5 scales with specific CSS properties and thresholds. The build log shows scale-aware decisions: letter-spacing shift to 0.03em in Z3 for Character scale, bento grid in Z2 for Section scale, dark header for Navigation scale. The parametric echo is visible: components in Z3 have tighter padding (16px 20px) than Z1 (24px 32px).

**VERDICT: The brief PRESERVES this concept. The builder ABSORBED it.** The dependency chain (build order), the parametric echo recipe, and the planning artifact all reached the builder through the conventions brief.

**Compression ratio:** 51 lines (brief) -> 2 lines (SKILL gate) -> binary (DG-1: table has 5 rows?)
**What's LOST in the gate:** Build order dependency, parametric echo concept, the distinction between structural and parametric echo. DG-1 checks structure; PA-63 checks perception. The gap between structure and perception is the builder's compositional intelligence -- which the brief teaches and the gates cannot verify.

---

### CONCEPT 3: Anti-Scale Formula

**What DRAFT-09 / conventions-brief says (Section 3, ~17 lines):**

States the formula: Richness = semantic density x restraint x spatial confidence. Explains the multiplicative property (zero in any factor = zero richness). Defines each factor with self-tests:
- Density: every CSS rule perceptible at 100% zoom, >= 2 component types per viewport. Self-test: comment out any rule -- if no visible change, delete it.
- Restraint: >= 3 mechanisms deliberately absent with documented reasoning. No component type > 35%.
- Spatial confidence: >= 2 layout topologies, 3-tier border system, 5+ font-sizes, readable prose width.

Specificity: MODERATE. Formula stated. Factors defined. Self-tests provided. But no numeric threshold for the overall formula (because the multiplication is structural, not arithmetic).

**What the MASTER-EXECUTION-PROMPT says (~1 line):**

The master prompt mentions "anti-scale model: density x restraint x confidence" as content for Section 3 of the brief. No further elaboration.

**What the SKILL.md says (0 lines):**

The anti-scale formula does not appear in SKILL.md. The builder encounters it only through the conventions brief.

**What the gates check:**

NO GATE. There is no gate that checks the anti-scale formula. The constituent parts are partially covered:
- Density: SC-08 checks component library adoption (>= 8 types), but not components-per-viewport or perceptible-mechanism ratio.
- Restraint: DG-4 sub-check 3 checks mechanism count (>= 14), but not DELIBERATE ABSENCE. The build log requirement for "3+ absent mechanisms" is a behavioral check (BG-level), not a programmatic gate.
- Spatial confidence: SC-15 checks border configurations (>= 3), SC-12 checks zones (3-5), SC-11 checks typography zones. These are proxies.

NO PA QUESTION directly addresses the anti-scale formula. PA-64 (Tier 5) asks "Does quiet feel designed or unfinished?" which tests restraint perceptually. PA-60 asks about design moment density. But no question asks: "Does this page exhibit richness = semantic density x restraint x spatial confidence?"

**What the builder actually did:**

The build log documents 3 deliberately absent mechanisms with reasoning (Scroll Witness, Progressive Disclosure, Width Variation). The builder deployed 15 mechanisms across all 5 categories. The self-assessment checks density (CSS ~1059 lines, 16 component types), restraint (3 absent mechanisms with reasoning), and spatial confidence (bento grid + single-column = 2 topologies, 3-tier borders). The builder internalized the formula from the brief.

**VERDICT: The brief PRESERVES this concept. The builder ABSORBED it. But the pipeline has NO VERIFICATION.**

This is the highest-risk compression point. The anti-scale model is the GOVERNING PRINCIPLE of compositional quality. It sits above the entire stack. Yet it has no gate, no PA question, and no programmatic verification. It depends entirely on the builder reading the brief, understanding the formula, and self-applying it. For Page B, this worked. For a less capable or less attentive builder, there is no safety net.

**Compression ratio:** 17 lines (brief) -> 1 line (master prompt mention) -> NO GATE. NO PA QUESTION.
**What's LOST:** Everything below the brief. The anti-scale model is a brief-only concept. It lives or dies with builder absorption.

---

### CONCEPT 4: Multi-Coherence with Semantic Directions

**What DRAFT-09 / conventions-brief says (Section 4, full section ~87 lines):**

The brief defines multi-coherence as "at every zone boundary, at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction." It then provides:
- 6 channels named with CSS properties and primary/enhancement classification
- 4 semantic directions (DEEPENING, OPENING, FOCUSING, RESOLVING) with CSS patterns for EACH
- Perception thresholds per channel in a table
- A worked example of 5 channels at one boundary
- Layout diversity shortcut
- Coherence arc planning table (Opening 2-3 channels -> Building 3-4 -> Climax 4-5 -> Resolution 2-3)
- A concrete 4-zone DEEPENING arc with exact CSS values and computed RGB deltas
- Typographic progression recipes per semantic direction (DEEPENING: font-weight 400->500->600, letter-spacing tightens; OPENING: reverse)
- Global coherence requirement (coherence at every boundary, not just bookends)
- Boundary naming convention (`/* Boundary Z2->Z3: DEEPENING */`)
- Coherence arc planning

Specificity: VERY HIGH. This is the richest section of the brief.

**What the MASTER-EXECUTION-PROMPT says (~5 lines):**

SC-13 threshold (">= 3 of 6 channels shift at every zone boundary, avg >= 4"). SC-13B mentioned as blocking gate for direction coherence. The master prompt instructs the brief to include this as "Section 4: Multi-Coherence -- 6 channels, 4 directions, boundary-by-boundary."

**What the SKILL.md says (~4 lines):**

SC-13 gate specification with 6-channel measurement. Builder spawn prompt: "multi-coherence channels." No semantic direction concept in SKILL.md.

**What the gates check:**

- SC-13: Counts channels (binary >= 3 per boundary, avg >= 4). Measures 6 specific CSS property deltas.
- SC-13B: Direction classification (+ = INTENSIFYING, - = RELAXING). Checks >= 50% boundaries have >= 3 channels in same direction. ~50% confidence.
- SC-13B CANNOT verify semantic alignment of a specific named direction (DEEPENING vs OPENING vs FOCUSING). It classifies relative shift direction but not metaphor-coherent meaning.

**What the PA asks:**

- PA-61 (Tier 5): Multi-voice composition -- "Do channels have independent rhythms pointing same direction?"
- PA questions about coherence (PA-16, PA-17) address rhythm and boundary treatment but not multi-coherence specifically.

**What the builder actually did:**

The builder wrote a transition table mapping all boundaries with direction labels (OPENING, DEEPENING, RESOLVING), channel counts, and CSS values. The self-challenge in fix cycle 1 identified a specific contradiction: spacing arc ("urgency through compression") contradicted by 150px gap at Z3->Z4. The fix addressed the contradiction both structurally (gap reduction) and compositionally (font-weight 600 in Z3 for urgency encoding). The coherence direction integrity check at the end of the fix cycle verified every channel aligns with its declared direction.

**VERDICT: The brief PRESERVES this concept fully. The builder ABSORBED it deeply.**

The builder demonstrated not just compliance but compositional reasoning -- identifying and fixing a contradiction between the metaphor's demands and the CSS reality. This is the conventions brief operating as designed: teaching a world model that the builder then inhabits.

**Compression ratio:** 87 lines (brief) -> 4 lines (SKILL gate) -> binary (SC-13: count >= 3, SC-13B: direction >= 50%)
**What's LOST in the gate:** Named semantic directions (DEEPENING/OPENING/FOCUSING/RESOLVING), the coherence arc concept (variable intensity across boundaries), typographic progression recipes per direction, the layout diversity shortcut. All preserved in the brief, none in the gate.

---

### CONCEPT 5: Fractal Self-Similarity

**What DRAFT-09 / conventions-brief says (Section 5, ~51 lines):**

Defines fractal self-similarity as the organizing principle echoing at all 5 scales. Provides:
- 5-scale table with size, expression, minimum threshold, verification checkbox
- Build order (largest first, verify before proceeding)
- DEPENDENCY chain: Scale 5 without Scale 2 = orphaned variation
- Priority ranking: Navigation + Page + Component mandatory; Section recommended; Character optional
- Parametric echo concept: components in dense zones have tighter padding
- Parametric echo CSS recipe table (scale -> echo vehicle -> CSS values for dense/sparse)
- Character-scale register (closed vocabulary of letter-spacing, font-weight, text-transform, font-style, font-size values)
- Requirement to produce Fractal Echo Table in build log

Specificity: HIGH. CSS recipe per scale. Closed vocabulary. Planning artifact.

**What the MASTER-EXECUTION-PROMPT says (~2 lines):**

Section 5 brief content instruction. DG-1 gate specification.

**What the SKILL.md says (~2 lines):**

DG-1 gate: "5 rows, CSS evidence, pattern direction." Builder prompt does not mention fractal self-similarity by name.

**What the gates check:**

- DG-1: Fractal Echo Table exists? 5 rows? Non-empty CSS evidence? Consistent pattern direction? This checks the PLANNING ARTIFACT, not the EXECUTION. A builder could plan fractal echo perfectly and execute none of it.
- PA-63 (Tier 5): "Can you pick 2 of 5 scales and detect the same organizing principle?" This closes the plan-execution gap perceptually.

**What the builder actually did:**

The fractal echo table maps "dispatch compression" at all 5 scales with specific CSS. The build log's Brief Reflection section (c) traces how the TC brief's "Command Post / Field Dispatch" metaphor drove CSS at multiple scales: border-weight hierarchy for rank (3 scales), spacing compression arc (page scale), component DNA adaptation (component scale), letter-spacing shift (character scale). The parametric echo is visible: Z3 callouts at 16px 20px vs Z1 at 24px 32px.

**VERDICT: The brief PRESERVES this concept. The builder ABSORBED it.**

**Compression ratio:** 51 lines (brief) -> 2 lines (SKILL gate) -> binary (DG-1: table has 5 rows?)
**What's LOST in the gate:** Everything except table existence. Build order, dependency chain, parametric echo concept, character-scale closed vocabulary, priority ranking. All in the brief, none verifiable by gate.

---

### CONCEPT 6: Transition Grammar (3 Kinds of Boundary)

**What DRAFT-09 / conventions-brief says (Section 7, ~25 lines):**

Defines 3 boundary types (SMOOTH, BRIDGE, BREATHING) with CSS specifications:
- SMOOTH: 15-25 RGB shift, 1px rule, stable spacing. Reader crosses without noticing.
- BRIDGE: 25+ RGB shift, 48-64px tinted band, typography weight/size shift. Reader pauses.
- BREATHING: 3-4px structural border, 64-80px spacing. Full rest. Max 2 per page.
- Rule: No 2 BREATHING adjacent. No 3 SMOOTH without BRIDGE/BREATHING.
- Transition-to-coherence mapping table: SMOOTH = 1-2 channels, BRIDGE = 3-4, BREATHING = 4-5.
- Planning shortcut: map transitions BEFORE CSS.

Specificity: HIGH. CSS values per type. Channel budgets per type. Anti-patterns stated.

**What the MASTER-EXECUTION-PROMPT says (~1 line):**

Section 7 brief content instruction.

**What the SKILL.md says (~0 lines directly):**

No transition grammar concept in SKILL.md. The builder encounters it only through the brief.

**What the gates check:**

NO GATE checks transition grammar directly. SC-13 checks channel counts at boundaries but does not classify transition TYPE. DG-4 sub-check 4 checks ">= 3 distinct types" in the builder's plan, but this is a PLAN check, not an EXECUTION check. The pipeline does not verify that a boundary labeled BRIDGE actually has 25+ RGB and 3-4 channels.

**What the PA asks:**

- PA-12 (Flow+Pacing): "Does the page have a clear beginning, middle, and end?"
- PA-62 (Tier 5): "Is there both a dramatic boundary AND a quiet one?"
These detect transition VARIETY but not grammar COMPLIANCE.

**What the builder actually did:**

The TC brief specified 3 distinct transition types: HARD CUT (Z1->Z2, 3px border + 20 RGB), SPACING SHIFT (Z2->Z3, density only), CHECKPOINT (Z3->Z4, mono label bar). The build log's transition table maps each boundary to a type with channel counts. The builder applied the grammar -- HARD CUT at 4 channels, SPACING SHIFT at 3, CHECKPOINT at 3.

**VERDICT: The brief PRESERVES this concept. The builder ABSORBED it.**

**Compression ratio:** 25 lines (brief) -> 0 lines (SKILL.md) -> DG-4 sub-check (>= 3 distinct types in plan)
**What's LOST:** CSS specifications per type (RGB ranges, spacing, border weights), the anti-pattern rules (no 2 BREATHING adjacent), the channel budget per type. All in the brief, nothing in gates.

---

### CONCEPT 7: Perception Thresholds

**What DRAFT-09 / conventions-brief says (Section 2, ~43 lines):**

Defines perception as "the physics of visibility." States:
- Background color: >= 15 RGB max-channel delta between adjacent zones
- Typography: >= 2px font-size delta, >= 0.03em letter-spacing delta, floor 0.025em
- Stacked gaps: <= 120px total (not per-property)
- Multi-coherence floor: >= 3 channel shifts
- Component families: >= 8 from library
- Border configurations: >= 3 distinct
- Mechanism breadth: deployment from all 5 categories

Includes threshold confidence tiers (CONFIRMED/PROVISIONAL/THEORETICAL) with evidence basis per threshold. Contains the key framing: "These are not rules to comply with. They are the physics of human perception."

Specificity: HIGH. Numeric values. Evidence tiers. Physics framing.

**What the MASTER-EXECUTION-PROMPT says (~8 lines):**

Section 0 non-negotiables: ">= 15 RGB background delta, >= 2px font-size delta, no letter-spacing < 0.025em, no stacked gaps > 120px." The master prompt ELEVATES perception thresholds to the top -- they appear in Section 0 (first thing read), Section 2 (brief instructions), and Section 9 (recency restatement). This is the ONE concept that receives AMPLIFICATION rather than compression in the master prompt.

**What the SKILL.md says (~12 lines):**

Non-negotiable #3: "Perceptible CSS." Gate table: SC-09 (bg delta), SC-10 (stacked gap), SC-14 (sub-perceptual prevention). Builder spawn prompt: midpoint checkpoint checks bg deltas >= 15 RGB.

**What the gates check:**

- SC-09: Background delta >= 15 RGB at every zone boundary (BLOCKING)
- SC-10: Stacked gap <= 120px at every boundary (BLOCKING)
- SC-11: Typography hierarchy (display-body >= 10px, 3+ zones) (BLOCKING)
- SC-14: No letter-spacing in (0, 0.025em), no micro-clustering, no intra-zone bg 1-14 RGB (BLOCKING)
- SC-15: >= 3 distinct border configurations (BLOCKING)

This is by far the most thoroughly gated concept. 5 dedicated blocking gates.

**What the PA asks:**

- PA-55: Sub-perceptual detection
- PA-56: Value clustering detection
Multiple standard PA questions about readability, contrast, spacing.

**What the builder actually did:**

The builder OVERRODE the TC brief's zone backgrounds because they failed perception thresholds. TC brief specified #FEF9F5/#F5F0E8/#FAF5ED/#FEF9F5 (deltas: 13, 5, 8 -- all below 15). Builder changed to #FEF9F5/#F0EBE3/#E8E0D4/#F5F0E8 (deltas: 18, 15, 20). This is the conventions brief's PHYSICS framing working as designed -- the builder understood these as physical laws, not suggestions, and overrode the TC brief to comply.

**VERDICT: The brief PRESERVES this concept. The MASTER PROMPT AMPLIFIES it. The gates ENFORCE it. The builder INTERNALIZED it enough to override the TC brief.**

**Compression ratio:** 43 lines (brief) -> 12 lines (SKILL) -> 5 BLOCKING GATES
**What's LOST:** Threshold confidence tiers (CONFIRMED vs PROVISIONAL). The physics framing (replaced with "non-negotiable" framing in SKILL). Evidence basis per threshold. But the OPERATIONAL content is fully preserved and AMPLIFIED.

---

### CONCEPT 8: Unified Metaphor

**What DRAFT-09 / conventions-brief says (Section 6, ~18 lines):**

Defines metaphor as "one structural metaphor that drives CSS decisions." Key requirements:
- Not a label announced in comments but a principle perceived through CSS treatment alone
- Creates multi-coherence opportunities (at each boundary, metaphor suggests channel shifts)
- Selects layout topologies (each pattern chosen because of metaphor's structural logic)
- Test: remove all text labels, can a reader feel the organizing principle from CSS alone?
- Metaphor in navigation elements (header lightest, breadcrumbs, footer echo)
- Fallback: if no metaphor emerges, build without one -- well-composed without metaphor beats poorly-composed with forced one

Specificity: MODERATE. Requirements stated. Test defined. But no CSS recipe for metaphor implementation (because metaphor is content-specific).

**What the MASTER-EXECUTION-PROMPT says (~2 lines):**

Section 6 brief content instruction. Success bar: "metaphor STRUCTURAL."

**What the SKILL.md says (~3 lines):**

BG-2: "Metaphor is STRUCTURAL, not ANNOUNCED." Success bar criteria: "Metaphor STRUCTURAL (not ANNOUNCED or LABELED)." TC re-invocation trigger: "If PA-44 and PA-68 BOTH fail across 2+ cycles, the problem is the METAPHOR."

**What the gates check:**

- BG-2: Behavioral gate -- a fresh-eyes Opus agent reads the build plan and judges STRUCTURAL vs ANNOUNCED. This is the most sophisticated gate type (requires agent judgment, not computation).
- No programmatic gate can verify metaphor. This is inherently a perception/judgment check.

**What the PA asks:**

- PA-44 (Metaphor): "Does the visual treatment feel driven by a central idea?"
- PA-68 (Tier 5): Metaphor spatial coverage
- PA-25 (Ideology): "Does the page reflect an ideology?"
- PA-42, PA-43 (Metaphor-related)

**What the builder actually did:**

The TC brief derived "Command Post / Field Dispatch" with specific CSS directions (rank -> border-weight, clearance -> bg shifts, dispatch compression -> spacing arc). The build log conviction statement commits to the metaphor. The Brief Reflection traces how the metaphor guided 3 specific CSS patterns (rank hierarchy through border-weight, clearance zones through bg progression, dispatch compression through spacing arc). The builder's self-challenge in fix cycle 1 evaluates the CSS against the metaphor's demands, finding and fixing a contradiction.

**VERDICT: The brief PRESERVES the concept. The TC brief INSTANTIATES it for specific content. The builder INHABITS it.** The metaphor is the concept that most clearly demonstrates the pipeline working as designed: brief defines the requirement, TC brief derives the specific metaphor, builder implements through CSS, PA verifies perceptually.

**Compression ratio:** 18 lines (brief) -> 3 lines (SKILL) -> BG-2 (behavioral, agent judgment)
**What's LOST in the gate:** The test (remove labels, still perceivable?), navigation element manifestation guidance, the fallback permission (build without metaphor if none emerges). The operational heart of metaphor (CSS-driven, not label-driven) is preserved in both the brief and the BG-2 gate description.

---

### CONCEPT 9: The Vertical Progression (Stack Integration)

**What the deep dives say (Report 23, Stack Integration, ~full report):**

The compositional intelligence stack is: Perception Thresholds (L1) -> Scales (L2) -> Channels (L3) -> Multi-Coherence (L4) -> Anti-Scale Model (L5). Each layer depends on the previous. The key insight: this is NOT a sequential build order but a PRISM -- every CSS decision participates in all 5 layers simultaneously.

The integration insight from the deep dive:

> "A single CSS decision (e.g., `background: #F0EBE3` at a zone boundary) is simultaneously: a SCALE decision (which zoom level?), a CHANNEL decision (chromatic shift), a MULTI-COHERENCE decision (does it align with other channels here?), and an ANTI-SCALE decision (does it serve density, restraint, or confidence?)."

The resolution: "Plan sequentially, build simultaneously." The transition table IS the stack in tabular form -- each row is a boundary, each column is a channel, the direction column is the multi-coherence check.

**What DRAFT-09 / conventions-brief says (0 lines explicitly):**

The vertical progression is NEVER STATED as a progression. The brief presents Sections 2-5 as independent topics:
- Section 2: Perception (L1)
- Section 3: Richness / Anti-Scale (L5)
- Section 4: Multi-Coherence (L4)
- Section 5: Fractal Echo / Scales (L2)
- Channels (L3) are embedded in Section 4

The ordering is L1 -> L5 -> L4 -> L2, with L3 embedded in L4. The dependency chain (L1 -> L2 -> L3 -> L4 -> L5) is nowhere stated. The prism insight (all layers evaluate the same CSS decision) is nowhere stated. The integration of all layers into the transition table is IMPLICIT (the Process section says "work boundary by boundary" which is the right instruction, but the WHY -- because boundaries are where all layers intersect -- is absent).

**What the MASTER-EXECUTION-PROMPT says (0 lines):**

The vertical progression is not mentioned.

**What the SKILL.md says (0 lines):**

Not mentioned.

**What the gates check:**

Each layer has its own gates. But no gate checks INTEGRATION. SC-13 checks multi-coherence (L4) but does not verify that it's built on scale coverage (L2) and channel vocabulary (L3). DG-1 checks fractal echo (L2) but does not verify that it enables multi-coherence (L4). The gates are LAYER-INDEPENDENT.

**What the PA asks:**

No PA question asks about the stack as a system. PA-63 (fractal), PA-61 (multi-voice), PA-60 (design moments) each address one layer. No question asks: "Does the fractal structure at multiple scales ENABLE the multi-coherence at boundaries, which PRODUCES the overall richness?"

**What the builder actually did:**

Remarkably, the builder achieved stack integration IMPLICITLY through the transition table + fractal echo table + boundary-by-boundary building process. The conventions brief's Process section ("work BOUNDARY BY BOUNDARY rather than channel by channel") is the integration instruction in operational form. The builder did not need to know the theoretical stack; the Process section's instruction produced the same result.

**VERDICT: This is the USER'S KEY FINDING. The vertical progression is NEVER STATED. Yet the conventions brief's Process section operationalizes it implicitly through the transition table format. The builder achieves integration through process, not through understanding the theory.**

This is both a strength and a vulnerability:
- STRENGTH: The builder does not need to understand L1-L5 dependency theory. The process produces integration mechanically.
- VULNERABILITY: A builder who does not follow the process (who builds channel-by-channel or phase-by-phase instead of boundary-by-boundary) will fail to achieve integration, and the pipeline has no gate or diagnostic to tell them WHY.

**Compression ratio:** ~600 lines (deep dives 18-23) -> 0 lines explicitly -> no gate
**What's LOST:** The entire theoretical framework that explains WHY boundary-by-boundary works and channel-by-channel fails. The dependency chain. The prism insight. The builder gets the RIGHT PROCESS but not the UNDERSTANDING of why it's right. If the process fails, the builder has no diagnostic framework to identify which layer broke.

---

## COMPRESSION SUMMARY TABLE

| # | Concept | Brief Lines | SKILL Lines | Gate | PA Question | Builder Evidence | Verdict |
|---|---------|-------------|-------------|------|------------|-----------------|---------|
| 1 | 6 Channels | 83 | 3 | SC-13: count >= 3 | PA-61 | Transition table, fix cycle | PRESERVED in brief, ABSORBED |
| 2 | 5 Scales + Build Order | 51 | 2 | DG-1: table has 5 rows | PA-63 | Fractal echo table, parametric echo | PRESERVED, ABSORBED |
| 3 | Anti-Scale Formula | 17 | 0 | **NO GATE** | **NO QUESTION** | Self-assessment, 3 absent mechanisms | PRESERVED, ABSORBED, **UNVERIFIED** |
| 4 | Multi-Coherence + Directions | 87 | 4 | SC-13 + SC-13B | PA-61 | Transition table, self-challenge | PRESERVED, DEEPLY ABSORBED |
| 5 | Fractal Self-Similarity | 51 | 2 | DG-1 | PA-63 | Echo table, parametric variation | PRESERVED, ABSORBED |
| 6 | Transition Grammar | 25 | 0 | DG-4 sub-check (plan) | PA-62 | TC brief types, 3 boundary types | PRESERVED, ABSORBED |
| 7 | Perception Thresholds | 43 | 12 | 5 BLOCKING gates | PA-55, PA-56 | Override of TC brief values | AMPLIFIED, INTERNALIZED |
| 8 | Unified Metaphor | 18 | 3 | BG-2 (behavioral) | PA-44, PA-68 | Conviction, self-challenge | PRESERVED, INHABITED |
| 9 | Vertical Progression | 0 explicit | 0 | None | None | Implicit via process | NEVER STATED, IMPLICIT |

---

## THE THREE STRUCTURAL QUESTIONS

### Question 1: Can a pipeline that compresses 6-channel-with-CSS-properties to "count >= 3" EVER produce Flagship?

**YES -- but only because the compression happens in the RIGHT PLACE.**

The user's insight identifies a real compression pattern. But the critical finding is that the compression occurs between the CONVENTIONS BRIEF and the GATES, not between the conventions brief and the BUILDER. The builder reads the conventions brief directly. The 83-line channel section, the 87-line multi-coherence section, the 51-line fractal echo section -- the builder sees ALL of it.

The gates compress to "count >= 3" because gates are FLOOR DETECTORS, not intelligence carriers. Their job is to catch mechanical failure (imperceptible backgrounds, zero borders) before PA auditors spend time evaluating. The intelligence that produces Flagship quality flows through the brief, not through the gates.

**The pipeline architecture is:**

```
CONVENTIONS BRIEF (609 lines, full intelligence)
        |
        v
    BUILDER (reads brief, absorbs intelligence, produces CSS)
        |
        v
    GATES (verify mechanical minimums -- floor detection)
        |
        v
    PA AUDIT (verify perceptual quality -- ceiling detection)
```

The compression the user identified is the brief-to-gate compression. This is BY DESIGN. The danger would be if the brief itself were compressed -- if the builder received only "6 channels" instead of 83 lines of channel intelligence. That was exactly the Flagship experiment failure (the 963-line master execution prompt compressed everything to rules). The current pipeline fixes this by giving the builder the FULL conventions brief.

**However:** The pipeline CAN produce Flagship only if:
1. The builder actually READS the conventions brief (not skimming)
2. The builder UNDERSTANDS the concepts (not just following rules)
3. The builder APPLIES the concepts during the build (not just pre-build planning)

The Page B build log demonstrates all three. But this depends on the builder being Opus (always specified) and the conventions brief being well-written (current quality is high).

### Question 2: For each concept, what would the pipeline need to PRESERVE to enable Flagship?

The analysis reveals that the conventions brief ALREADY preserves most concepts adequately. The gaps are:

**Gap 1: Anti-Scale Model has NO verification (Concept 3)**

The governing principle of compositional quality has zero gates and zero PA questions. This is the highest-risk gap.

FIX: Add a PA question (PA-69): "Does the page exhibit richness through the multiplication of semantic density (every CSS rule visible), restraint (deliberate absences), and spatial confidence (layout variety, border hierarchy, readable widths)? Answer YES only if ALL THREE factors are present. A page with dense CSS but no restraint = BUSY. A page with restraint but no spatial confidence = BLAND."

FIX: Add an ADVISORY gate (SC-18): Compute perceptible-mechanism ratio (mechanism instances / CSS lines). ADVISORY threshold: ratio >= 0.03 (1 mechanism per 33 lines). Below this threshold, warn that CSS may be misallocated to imperceptible values (the Flagship 1.5 pathology: ratio 0.010).

**Gap 2: Vertical Progression is NEVER STATED (Concept 9)**

The stack integration (L1->L2->L3->L4->L5 as a dependency chain, with simultaneous application through boundary-by-boundary building) is implicit. The conventions brief's Process section produces the right behavior through instruction without explanation.

FIX: This may not NEED fixing. The Process section works. Adding theoretical explanation risks inflating the brief. The brief is a WORLD-DESCRIPTION, not a textbook. However, a single sentence would help: "When you write CSS at a boundary, you are making a scale decision (which zoom level?), a channel decision (which CSS property?), a multi-coherence decision (does it agree with other channels here?), and a richness decision (does it serve density, restraint, or spatial confidence?) -- all at once. This is why the process says to work boundary-by-boundary."

**Gap 3: Transition Grammar has no execution verification (Concept 6)**

DG-4 checks the PLAN (>= 3 types). No gate checks whether a boundary labeled BRIDGE actually has 25+ RGB and 3-4 channels.

FIX: Extend SC-17 (parametric echo, which already validates TC brief boundary values against actual CSS) to also validate TRANSITION TYPE. If the TC brief labels a boundary as BRIDGE but the measured RGB delta is 12, SC-17 should flag this as a plan-execution mismatch.

**Gap 4: Coherence arc concept has no verification (within Concept 4)**

The conventions brief specifies a coherence arc (Opening 2-3 channels -> Building 3-4 -> Climax 4-5 -> Resolution 2-3). SC-13 checks the AVERAGE across all boundaries (>= 4) but not whether the per-boundary profile matches an arc shape. A page with uniform 4-channel shifts at every boundary passes SC-13 but violates the arc concept.

FIX: Add SC-16 enhancement. SC-16 currently checks monotonic property progression (ADVISORY). Extend it to check whether channel-shift-count varies across boundaries (not monotonic but arc-shaped: increases then decreases). ADVISORY level.

### Question 3: The Paradox -- Can the pipeline have both failure prevention and excellence enablement?

**YES -- and the current pipeline architecture demonstrates the solution.**

The paradox dissolves when you recognize that GATES and the BRIEF serve different functions:

| | GATES | CONVENTIONS BRIEF |
|--|-------|-------------------|
| **Purpose** | Prevent failure | Enable excellence |
| **Format** | Binary thresholds | World-description |
| **Audience** | Verification step | Builder's mind |
| **Compression** | Maximal (87 lines -> "count >= 3") | Minimal (full intelligence) |
| **Relationship to quality** | Floor detector (prevents FLAT) | Ceiling enabler (enables DESIGNED) |

The previous pipeline (Flagship experiment, 963-line master prompt) COLLAPSED these two functions into one document. The result was 97 guardrails with 0 playbooks -- the prompt told the builder what NOT to do but almost nothing about what TO do. Gates and brief were the same thing. Binary compliance was the only available mode.

The current pipeline SEPARATES them:
- The **conventions brief** teaches the WORLD (what compositional quality IS)
- The **gates** verify the FLOOR (what mechanical failure looks like)
- The **PA audit** verifies the CEILING (what perceptual quality looks like)

This separation is the key architectural insight. The brief does not need to compress because it is READ BY THE BUILDER, not parsed by a gate. The gates do not need to carry intelligence because they are FLOOR DETECTORS, not quality teachers.

**The remaining tension:** Even with this separation, the gate results can create a COMPLIANCE MINDSET in fix cycles. When the builder receives "SC-09 FAIL at Z2->Z3: delta 8 RGB," the temptation is to mechanically increase the delta to 16 without considering the multi-coherence implications. The SKILL.md addresses this with the self-challenge requirement ("Name one way your CSS CONTRADICTS your conviction statement") and the brief-section references in gate fix recipes ("Re-read conventions-brief.md Section N before applying this fix"). These are good countermeasures. But they depend on the builder actually performing the self-challenge thoughtfully rather than formulaically.

**The deepest version of the paradox:** The anti-scale model says richness is multiplicative: density x restraint x spatial confidence. Gates can verify density-like properties (mechanism count, component count, channel count) and spatial confidence-like properties (border configurations, layout topologies). But gates CANNOT verify restraint -- the quality of deliberate absence. And gates CANNOT verify the MULTIPLICATION -- that all three factors are present simultaneously. This is why the anti-scale model has no gate and no PA question. It is the quality that emerges from the BUILDER'S compositional intelligence, not from any verification system.

This is not a pipeline failure. It is a recognition that some qualities can only be TAUGHT (through the brief) and PERCEIVED (through the PA audit), never ENFORCED (through gates). The paradox resolves to: **gates prevent the measurable failures, the brief teaches the immeasurable quality, and the PA audit detects whether the immeasurable quality was achieved.** All three are necessary. None is sufficient alone.

---

## WHAT THE PREVIOUS COMPRESSION-LOSSES REPORT GOT RIGHT AND WRONG

The previous report (ephemeral/flagship-audit/04-compression-losses.md) analyzed the 963-line master execution prompt and found 91.2% compression loss across 16 sources. Its central finding -- "the prompt absorbed WHAT to check but compressed away HOW to achieve" -- was correct FOR THAT PROMPT. That prompt collapsed gates and brief into one document.

**What changed:** The current pipeline separates the conventions brief (609 lines, HOW to build) from the gate runner (1,340 lines, WHAT to verify) from the SKILL.md (579 lines, orchestration). The builder reads the BRIEF first, not the gates. The 91.2% compression loss applied to the PROMPT-AS-BRIEF architecture. The current architecture has a dedicated brief that preserves 8 of 9 compositional intelligence concepts with high specificity.

**What the previous report got right that STILL applies:**
1. The vertical progression (Concept 9) is still never stated
2. The anti-scale model (Concept 3) still has no verification
3. The attention budget problem (97 rules exceed ~15-20 rule capacity) is resolved by the brief's world-description format (not a rule list) but could recur if the brief grows beyond ~600 lines
4. "BUILDER INSTRUCTIONS died; AUDITOR INSTRUCTIONS survived" -- this is REVERSED in the current pipeline. The conventions brief IS the builder instruction. The PA auditors read the skill file.

---

## FINAL VERDICT

**The compression pattern the user identified is real but the pipeline compensates.**

The conventions brief -> gate compression (87 lines -> "count >= 3") exists at every concept. But the builder does not read the gates to learn composition. The builder reads the brief. The brief preserves the intelligence. The gates verify the floor.

**The three genuine gaps are:**

1. **Anti-scale model has no verification** -- highest risk. The governing principle of quality is brief-only.
2. **Vertical progression is never stated** -- medium risk. The Process section produces the right behavior implicitly.
3. **Transition grammar has no execution verification** -- low risk. SC-17 could be extended.

**Does the compression structurally prevent Flagship?**

No. The Page B evidence demonstrates that a builder who reads the conventions brief CAN absorb compositional intelligence and produce pages with multi-coherence, fractal echo, metaphor-driven CSS, and semantic direction. The pipeline's architecture -- brief teaches, gates filter, PA judges -- is sound. The compression is between brief and gate, not between intelligence and builder.

**What would structurally prevent Flagship:**

1. A builder that skims the brief (attention budget problem at ~600 lines)
2. A brief that degrades to a rule list (the "checklist vs recipe" failure mode)
3. The anti-scale model remaining unverified (governing principle with no safety net)
4. The brief growing beyond ~600-800 lines (the metacognitive ceiling from report 04)

The current pipeline is closer to Flagship than any previous architecture. The conventions brief IS the compositional intelligence. The compression happens in the right place.

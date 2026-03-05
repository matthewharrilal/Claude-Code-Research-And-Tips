# Prompt Assembly Journal -- Flagship Execution Prompt

**Agent:** prompt-assembler (Opus 4.6)
**Date:** 2026-02-17
**Status:** COMPLETE

---

## 1. FILES READ AND KEY INSIGHTS EXTRACTED

### Read Order (12 files, ~9,000 lines)

1. **supplementary-files-summary.md** (572 lines) -- Summary of 8 pre-flight files. KEY INSIGHTS:
   - Builder prompt ceiling ~120 lines (S3 finding). CD-006 scored 39/40 with shorter prompt than ceiling's 1,004 lines.
   - Prompt sandwich structure: CONVICTION -> EXECUTION -> CONVICTION (V2 finding).
   - Each rule gets ~1/56th attention at 56 rules. PRIMACY EFFECT is the only amplifier (V3).
   - Passes 1-3 = 93% quality. Pass 4-5 = +5%. Cliff between pass 3 and 4 (V3).
   - CD-006 container was 1100px not 960px (V3). Our 960px constraint is STRICTER.
   - Gate fatigue: 47 evaluation points = ~235 min overhead > estimated build time (S4).
   - 5 interaction types for conviction: REINFORCING, MODULATING, RESPONDING, CONTRASTING, CASCADING (V2).
   - Void threshold discrepancy: SC-02=2160px vs SP-02=1620px. V1 calculates 1350px. Registry says 2160px (TC-07).
   - Performative checkpoints are useless. Every checkpoint must produce an ARTIFACT (V2).
   - Mechanism hard cap: 14 recommended (S4, reduced from TC-04's 16).

2. **content-selector-report.md** (754 lines) -- Complete content inventory. KEY INSIGHTS:
   - Topic: RESEARCH-SYNTHESIS (384 lines, ~1,040 words raw, expanded to ~2,700).
   - Self-referential potential: form demonstrating content about design principles.
   - 3-zone density map: TOP (sparse->building), MIDDLE (sustained peak, 11-row table climax), BOTTOM (exhale).
   - CRESCENDO with EXHALE shape. Peak at 45-65% scroll.
   - 10 tables on page (table monotony risk = highest priority risk).
   - Planned mechanisms per zone: 4-5 / 5-6 / 4-5 = total 13-16.
   - Content volume supports 3-4 zones per Gap 6 Rule 3.
   - Content expansion ~1,000-1,500 words needed, all sourced from existing files.

3. **THRESHOLD-REGISTRY.md** (53 lines) -- Single source of truth for thresholds. KEY:
   - TC-01: Content-to-void graduated (60/50/70%). TC-02: Header 20% warning, 25% abort.
   - TC-04: Mechanism target 12-14, hard cap 16. TC-05: 240 lines total, builder 55-80.
   - TC-07: Max void 2160px (1.5 viewports at 1440px). NOTE: Discrepancy with V1 analysis (1350px).
   - BT-06: Max spacing 64px sections, 96px zones. BT-07: >=1 designed moment past 50%.
   - Attention budget: <=37 AU for builder. Binary rule ~0.75 AU. Zero MAY rules.

4. **DECISION-LOG.md** (60 lines) -- D-004 is critical: supplementary insights for prompt assembly.

5. **RESEARCH-SYNTHESIS.md** (384 lines) -- Actual content source. 6 sections, 5 principles, 3 conflicts, 10 tables total, 4 sequence diagrams, 15 hypotheses.

6. **prohibitions.md** (420 lines) -- 24 prohibitions (8 absolute + 14 conditional + 2 meta). Key additions: #21 (void) and #22 (front-loaded weight).

7. **tokens.css** (184 lines) -- 65 tokens including new --space-max-section (64px) and --space-max-zone (96px).

8. **mechanism-catalog.md** (1,219 lines) -- 18 mechanisms + Transition Grammar (3 types: HARD CUT/SPACING SHIFT/CHECKPOINT) + Restraint Protocol (4/viewport cap, distribution requirement, restraint ratio).

9. **semantic-rules.md** (530 lines) -- 7 gaps filled including Gap 6 (content density floors, zone count ceiling) and Gap 7 (content-form fit gates).

10. **tension-composition SKILL.md** (first 200 lines) -- Pipeline structure: 6 phases, tier classification, Middle skips Phases 1-3, Ceiling/Flagship full pipeline.

11. **perceptual-auditing SKILL.md** (first 100 lines) -- 48 PA questions, fresh-eyes principle, sovereignty principle, PA-05 sub-criteria.

---

## 2. RULE CLASSIFICATION

### Classification Legend
- **GATE**: Binary pass/fail. If FAIL, build stops.
- **SELF-CHECK**: Builder evaluates during build. If FAIL, revise.
- **KILL**: Absolute prohibition. Violation = entire build rejected.
- **CONVICTION**: Identity/soul statement. Shapes behavior without testing.
- **REFERENCE**: Lookup information. Zero attention cost.
- **DISCARDED**: Item removed from prompt. Document WHY.

### Layer 1: CONVICTION -- 13 items

| # | Item | Classification | AU Cost |
|---|------|---------------|---------|
| C1 | Mission: beauty, not compliance | CONVICTION | 0.5 |
| C2 | Restraint is a richness driver | CONVICTION | 0.5 |
| C3 | Content DEMANDED the structure | CONVICTION | 0.5 |
| C4 | You are CONSTRUCTING, not discovering | CONVICTION | 0.5 |
| C5 | Container 940-960px NON-NEGOTIABLE | KILL | 0.75 |
| C6 | Content-to-void >= 70% post-build | KILL | 0.75 |
| C7 | Max contiguous void <= 2160px | KILL | 0.75 |
| C8 | Header <= 20% of first viewport | KILL | 0.75 |
| C9 | >= 1 designed moment past 50% scroll | KILL | 0.75 |
| C10 | Zero soul violations (border-radius:0, box-shadow:none) | KILL | 0.75 |
| C11 | Max spacing per property: 96px | KILL | 0.75 |
| C12 | Every mechanism serves CONTENT, not demonstrates vocabulary | CONVICTION | 0.5 |
| C13 | Self-referential: form demonstrates principles it explains | CONVICTION | 0.5 |

**Conviction AU subtotal: ~8.0 AU**

### Layer 2: EXECUTION SPEC -- 22 items

| # | Item | Classification | AU Cost |
|---|------|---------------|---------|
| E1 | Content: RESEARCH-SYNTHESIS.md + expansions from R1-R5 | REFERENCE | 0 |
| E2 | ~2,700 words, 10 tables, 5 diagrams, 8 lists | REFERENCE | 0 |
| E3 | 3 zones: Top/Middle/Bottom thirds | SELF-CHECK | 1.0 |
| E4 | Top third: intro + Principles 1-2 (sparse->building) | SELF-CHECK | 1.0 |
| E5 | Middle third: Principles 3-5 + Conflicts (PEAK) | SELF-CHECK | 1.0 |
| E6 | Bottom third: Findings + Hypotheses + Close (exhale) | SELF-CHECK | 1.0 |
| E7 | Density shape: CRESCENDO with EXHALE | SELF-CHECK | 1.0 |
| E8 | Mechanism target: 12-14, hard cap 14 | GATE | 0.75 |
| E9 | Per-category minimum: S:1+, H:1+, C:1+, D:1+, N:1+ | GATE | 0.75 |
| E10 | Max 4 mechanisms per viewport | SELF-CHECK | 0.75 |
| E11 | Every third of page has >= 2 mechanisms | SELF-CHECK | 0.75 |
| E12 | 5+ mechanism rejections documented with reasoning | SELF-CHECK | 0.75 |
| E13 | Every zone boundary uses transition type (HARD CUT/SPACING SHIFT/CHECKPOINT) | GATE | 0.75 |
| E14 | Zone content minimum: 3+ para OR 2+ components per zone | GATE | 0.75 |
| E15 | Table treatments vary by function (reference vs dimensional vs character vs hypothesis) | SELF-CHECK | 1.0 |
| E16 | All content expansion sourced from existing files | SELF-CHECK | 0.75 |
| E17 | Pass 1: Skeleton (spatial structure, no mechanisms) | SELF-CHECK | 1.0 |
| E18 | Pass 2: Mechanisms (deploy 12-14 to skeleton) | SELF-CHECK | 1.0 |
| E19 | Pass 3: Refinement (transitions, restraint, distribution) | SELF-CHECK | 1.0 |
| E20 | Pass 4 (optional): Intentionality layer | SELF-CHECK | 0.75 |
| E21 | Pass 5 (optional): Polish + self-audit | SELF-CHECK | 0.75 |
| E22 | Restraint ratio: rejected/deployed >= 1.5 | SELF-CHECK | 0.75 |

**Execution AU subtotal: ~16.50 AU**

### Layer 3: COORDINATION -- 7 items

| # | Item | Classification | AU Cost |
|---|------|---------------|---------|
| CO1 | Planner writes content expansion + density map | GATE | 0.75 |
| CO2 | Builder implements 5-pass build | GATE | 0.75 |
| CO3 | Builder MUST SendMessage to lead after each pass | GATE | 0.75 |
| CO4 | Lead MUST review and respond with GO/REVISE before next pass | GATE | 0.75 |
| CO5 | PA auditors receive ONLY screenshots + PA questions (fresh-eyes) | GATE | 0.75 |
| CO6 | Mode 4 PA: 9+ independent auditors, screenshot pre-capture | REFERENCE | 0 |
| CO7 | File ownership: planner owns plan.md, builder owns page.html | REFERENCE | 0 |

**Coordination AU subtotal: ~3.75 AU**

### Layer 4: REFERENCE -- 0 AU cost (lookup only)
All reference items indexed in the reference library section.

### Total Attention Budget

| Layer | Items | AU Cost |
|-------|-------|---------|
| Conviction | 13 | ~8.0 |
| Execution | 22 | ~16.5 |
| Coordination | 7 | ~3.75 |
| Reference | N/A | 0 |
| **TOTAL** | **42** | **~28.25 AU** |

**Budget: 28.25 / 37 = 76% utilization. 9 AU headroom for emergent needs.**

---

## 3. ITEMS CONSIDERED BUT DISCARDED

| Item | Source | Why Discarded |
|------|--------|---------------|
| Calibration run requirement | S4 metacognitive | Would add 2-3 hours. Net benefit unclear for single experiment. The enrichments ARE the calibration. |
| 22-agent topology concern | S4 metacognitive | Topology is coordination layer's problem, not the builder prompt's. Builder sees ~70 lines. |
| Falsification criteria | V3 nuance recovery | Testing theories is research infrastructure. Builder builds pages. |
| Time-based downgrade paths | V3 nuance recovery | Operational decision for team lead, not builder prompt content. |
| CSS ALLOWLIST for silence zones | V1 nuance recovery | Too granular. Builder already knows tokens.css. REFERENCE layer covers this. |
| CSS PROHIBITLIST for silence zones | V1 nuance recovery | Same as above. Covered by prohibitions.md reference. |
| Per-act scroll speeds | V3 | Metaphor-specific, not applicable to builder without metaphor yet derived. |
| Weight targets 1-10 scale | V3 | Novel scale not validated. Builder has enough scales to track. |
| Anti-metronome interval percentages | V3 | Too granular. "Vary rhythm" is sufficient direction. |
| Signal-to-silence ratio 0.6-0.7 | S3 | Calculation too complex for builder. Covered by content-to-void >= 70%. |
| 6 intentionality dimensions | S4 | Pass 4 (intentionality) is optional. Adding 6 dimensions would bloat AU. |
| Constraint pressure as Shannon channel capacity | V3 | Theory, not builder instruction. Fascinating but not actionable. |
| Communication as attention redistribution | V3 | Metacognitive insight for team lead, not builder. |
| Builder emotional state concern | S4 | Addressed by CONVICTION -> EXECUTION -> CONVICTION sandwich structure. |
| Texture promise rule | V3 | Valid principle but adds judgment rule (AU ~4). Already implicit in COHERENT PA-05 sub-criterion. |

---

## 4. KEY DESIGN DECISIONS

### D1: Void Threshold Value (RESOLVED: Use TC-07 = 2160px)

The registry says 2160px (1.5 viewports at 1440px WIDTH). V1 analysis calculates 1350px (1.5 x 900px viewport HEIGHT). The discrepancy exists because "viewport" can mean width OR height.

**Decision:** Use 2160px as specified in THRESHOLD-REGISTRY.md (the single source of truth). The TC-07 value was explicitly resolved in the threshold resolution phase. Overriding it here would undermine the registry's authority. If this proves too lenient, Mode 4 PA will catch it.

### D2: Mechanism Hard Cap (RESOLVED: 14)

TC-04 says target 12-14, hard cap 16. S4 recommends reducing hard cap to 14. Content-selector report plans 13-16.

**Decision:** Target 12-14, hard cap 14. S4's reasoning is sound: at 14 mechanisms with flagship-level multi-channel encoding, attention costs are near capacity (~89/100 AU). A hard cap of 14 prevents overcrowding while allowing the full planned deployment.

### D3: Prompt Length Allocation

Budget: 240 total lines.

| Layer | Budget | Actual |
|-------|--------|--------|
| Layer 1: Conviction | ~70 lines | 55 lines |
| Layer 2: Execution Spec | ~100-120 lines | 93 lines |
| Layer 3: Coordination | ~60 lines | 42 lines |
| Layer 4: Reference Library | remainder | 40 lines |
| **Total** | **240** | **230 lines** |

**Builder sees:** Layer 1 (55) + relevant Layer 2 sections (~40) = ~95 lines. Within the 120-line ceiling.

### D4: Conviction Sandwich Structure

V2 finding: builder should read conviction FIRST and LAST. Implemented by:
- Opening with conviction (C1-C4 identity statements)
- Closing Layer 1 with KILL rules (C5-C11)
- Layer 2 opens with "REMEMBER: Your mission is beauty, not compliance"
- Layer 2 closes with "Before submitting: re-read Layer 1"

### D5: 5 Passes vs 3 Passes

V3 finding: Passes 1-3 = 93% quality. Passes 4-5 = +5%.

**Decision:** Structure as 5 passes but mark passes 4-5 as OPTIONAL. The 93%/+5% data means passes 1-3 are where investment pays off. Passes 4-5 exist if time and energy permit.

### D6: Gate Consolidation

S4 finding: 47 gates = ~235 min overhead. Proposal: combine gates.

**Decision:** Consolidated to 4 gates total:
- Gate 0: Content volume verification (before build starts)
- Gate 1: Skeleton spatial check (after Pass 1)
- Gate 2: Mechanism distribution check (after Pass 3)
- Gate 3: Pre-audit self-check (before submitting to PA)

Each gate produces a specific ARTIFACT (not performative). This reduces from the original 7 proposed gates while preserving the critical checkpoints.

---

## 5. METACOGNITIVE OBSERVATIONS

### Observation 1: The Prompt Paradox
The 1,004-line ceiling prompt produced a worse page than shorter prompts. This prompt at 230 lines contains MORE decision-critical information because it excludes the 774 lines of non-critical content. Compression is not loss -- it's signal amplification. Each remaining line carries ~4x the attention weight.

### Observation 2: CONVICTION vs KILL Distinction
I initially classified container width as CONVICTION. But conviction shapes behavior through identity; container width needs to be TESTED and ENFORCED. Reclassified as KILL. The distinction matters: conviction rules cost ~0.5 AU (absorbed into identity), kill rules cost ~0.75 AU (require explicit checking). Misclassifying saves AU but risks compliance.

### Observation 3: Reference Layer Is Free
The reference library costs zero attention because builders only consult it when they need a specific value. Putting token values or file paths in the execution spec would cost ~0.75 AU each. Putting them in the reference library costs 0 AU. This is why the 4-layer architecture works: it separates attention-cost-bearing instructions from zero-cost lookup material.

### Observation 4: Self-Referential Content Is Both Gift and Risk
RESEARCH-SYNTHESIS describes "Density as Rhythm" and "Layout as Choreography." A page demonstrating these principles while explaining them is the highest form of content-form fit. But this creates a TEMPTATION to demonstrate ALL 5 principles visually. The content-selector report correctly caps visual demonstrations at 3-4 principles. I've included this as conviction item C12: mechanisms serve content, not demonstrate vocabulary.

### Observation 5: The Void Threshold Is Still Contested
TC-07 says 2160px. V1 says 1350px. Prohibition #21 says "a full viewport height" of contentless space fails. At 1440px width, viewport height is ~900px. So prohibition #21 effectively sets maximum at ~900px per viewport increment (30% minimum coverage). This is STRICTER than TC-07 (2160px). The prohibition #21 binary test (scroll in viewport-height increments, check 30% coverage each) is the ACTUAL enforcement mechanism, not a raw pixel maximum. TC-07 may be an upper bound that prohibition #21's binary test makes moot.

---

**END ASSEMBLY JOURNAL**

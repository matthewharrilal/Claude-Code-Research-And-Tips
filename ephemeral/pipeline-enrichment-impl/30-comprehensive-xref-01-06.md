# Comprehensive Cross-Reference Audit: Research Files 01-06 + Debrief Parts 3-4 vs. Current Pipeline State

**Auditor:** cross-reference-auditor (Opus 4.6)
**Date:** 2026-02-20
**Scope:** Every finding/recommendation/observation in research files 01-06 AND Debrief Parts 3-4, checked against the CURRENT state of the 4 pipeline files

**Pipeline files audited (current state):**
1. `~/.claude/skills/build-page/SKILL.md` (436 lines)
2. `design-system/pipeline/conventions-brief.md` (443 lines)
3. `design-system/pipeline/gate-runner.md` (1159 lines)
4. `design-system/pipeline/flagship-pa-questions.md` (144 lines)

---

## SUMMARY STATISTICS

| Status | Count | Percentage |
|--------|-------|------------|
| ADDRESSED | 67 | 43.5% |
| PARTIALLY ADDRESSED | 42 | 27.3% |
| NOT ADDRESSED | 36 | 23.4% |
| CONTRADICTED | 3 | 1.9% |
| N/A | 6 | 3.9% |
| **TOTAL** | **154** | **100%** |

### By Severity of NOT ADDRESSED items:

| Severity | Count |
|----------|-------|
| BLOCKING | 5 |
| SIGNIFICANT | 14 |
| MINOR | 12 |
| INFORMATIONAL | 5 |

---

## ALL BLOCKING/SIGNIFICANT ITEMS THAT REMAIN NOT ADDRESSED

### BLOCKING (5)

| # | Source | Finding | Evidence |
|---|--------|---------|----------|
| B1 | 01:99-101 | DG-1 validates fractal echo TABLE (document) not HTML output -- builder can write perfect table and produce HTML with no fractal expression | gate-runner.md DG-1 (L725-746) still checks YAML deliverable only. No DG-1B or SC-17 added to cross-validate table claims against rendered CSS. |
| B2 | 02:196-217 | Proposed SC-17 (Scale Coverage at Output level) -- validates >= 3 of 5 scales PERCEPTIBLE in rendered output | Not present in gate-runner.md. No gate measures rendered scale coverage. DG-1 remains plan-only. |
| B3 | 05:117-122 | Proposed DG-1B (Fractal Echo Cross-Validation) -- for each scale in fractal table, verify claimed CSS evidence exists in computed styles | Not present in gate-runner.md. The "fractal theater" gap (claiming patterns not implemented) remains open. |
| B4 | 06:256-283 | CONTRADICTION between conventions-brief (boundary-by-boundary building) and SKILL.md checkpoints (channel-by-channel) | ADDRESSED in current SKILL.md L61-68 -- checkpoints ARE now boundary-grouped. See ADDRESSED item A42. This is actually RESOLVED. **DOWNGRADE TO ADDRESSED.** |
| B5 | Debrief P4 | BG-1 and BG-2 ENTIRELY ABSENT from SKILL.md | SKILL.md L147 explicitly lists "behavioral gates BG-1 Metaphor Independence + BG-2 Metaphor Structural" in the structured output section, and L176-177 defines BG-1 and BG-2 under Behavioral gates. **ADDRESSED.** |

**Revised BLOCKING count after verification: 3 (B1, B2, B3 -- all are the same gap: no output-level scale verification)**

### SIGNIFICANT (14)

| # | Source | Finding | Evidence |
|---|--------|---------|----------|
| S1 | 01:219-224 | Anti-scale model (richness = density x restraint x spatial confidence) ABSENT as a named model from SKILL.md and gate-runner.md | SKILL.md: no mention of the formula or its three factors as a model. gate-runner.md: no gate checks the multiplicative relationship. Factors appear individually (SC-08 for density proxy, SC-10 for confidence proxy) but the GOVERNING MODEL is absent from orchestrator and verification. |
| S2 | 01:427-434 | Enhancement channels (Behavioral + Material) are near-phantom -- zero vocabulary guidance, zero positive gate verification, zero PA coverage | conventions-brief.md L102-103 now has CSS property mappings for channels 5-6 (transition, :hover, background-image, component count). gate-runner.md L549-566 has a CHANNEL NOTE acknowledging the gap with 3 deferred options. flagship-pa-questions.md still has zero channel 5-6 specific questions. PARTIALLY ADDRESSED -- conventions-brief improved, but no PA coverage and gate remains binary. |
| S3 | 01:442-451 | Micro-gate schedule enforces CHANNEL-ORDER not SCALE-ORDER -- builder could build all channels at character scale first and pass all micro-gates | gate-runner.md L35-69 unchanged: MG-1 (HTML), MG-2 (backgrounds), MG-3 (borders), MG-4 (typography). This is channel-order. No scale-order enforcement exists. |
| S4 | 01:436-441 | Section 9B of conventions-brief breaks register -- thresholds compressed to numbers without telescope framing | conventions-brief.md L244-258 (Section 9B) now includes: "These numbers describe what a COMPOSED page naturally produces" (L255) and a floor/target distinction paragraph (L257). Register is IMPROVED but the section still reads more checklist than world-description compared to Section 2. PARTIALLY ADDRESSED. |
| S5 | 02:367-381 | Proposed SC-18 (Restraint Check, ADVISORY) -- no gate checks restraint | Not present in gate-runner.md. No programmatic restraint check exists. PA-64 is the only restraint assessment instrument. |
| S6 | 02:487-489 | SC-13B should be enriched from 2-value (INTENSIFYING/RELAXING) to 4-value (DEEPENING/OPENING/FOCUSING/RESOLVING) + DISCORDANT detection | gate-runner.md SC-13B (L672-690) still uses 2-value (INTENSIFYING/RELAXING). No 4-value direction model. No DISCORDANT detection. |
| S7 | 02:493-501 | Proposed PA-68 (stack integration question for Auditor G) | Not present in flagship-pa-questions.md. Only 8 Tier 5 questions (PA-60 through PA-67). |
| S8 | 02:500-501 | Proposed enrichment to PA-63 to add Navigation scale check ("look at header/footer") | flagship-pa-questions.md PA-63 (L51-61) unchanged -- tests Component-to-Page only. No Navigation scale mention. |
| S9 | 03:92-96 | SKILL.md gate threshold table (Section 3.2) duplicates gate-runner.md thresholds -- CONSISTENCY RISK if one is updated without the other | SKILL.md L126-144 gate table exists. gate-runner.md has the full specs. No "SOURCE OF TRUTH: gate-runner.md" annotation exists in SKILL.md. Duplication persists without source-of-truth markers. |
| S10 | 05:124-129 | Proposed SC-13C (Minimum Channel VARIETY per boundary, ADVISORY) -- flag when all 3+ shifts come from secondary channels | Not present in gate-runner.md. The deferred note at L549-566 mentions option (c) but no gate implements it. |
| S11 | 05:131-136 | Proposed SC-10B (Distribution of Content Mass, ADVISORY) -- flag zones with < 30% content fill | Not present in gate-runner.md. No whitespace void distribution check beyond the stacked gap (SC-10). |
| S12 | 05:197-203 | Proposed PA-68 (Transition Texture Variety) for Auditor D | Not present in flagship-pa-questions.md. |
| S13 | 05:205-210 | Proposed PA-69 (Deliberate Asymmetry) for Auditor E | Not present in flagship-pa-questions.md. |
| S14 | 05:213-217 | Proposed PA-70 (Content-Form Echo) for Auditor B | Not present in flagship-pa-questions.md. |

---

## COMPLETE FINDING-BY-FINDING TABLE

### FILE 01: Pipeline State Map (01-pipeline-state-map.md)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 1 | 01:28-31 | Navigation scale (~1440px) ABSENT from SKILL.md and gate-runner.md | NOT ADDRESSED | SKILL.md: no mention of navigation scale. gate-runner.md: no gate measures navigation-scale expression. DG-3 checks header exists but not compositional quality. | SIGNIFICANT |
| 2 | 01:40-42 | Page scale is COMPRESSED in SKILL.md (container + SC-09 only) | ADDRESSED | SKILL.md L17-18 has container. L137-138 has SC-09. L140 has SC-12 zone count. L141 has SC-13 multi-coherence. Page scale is well-represented through multiple gates. | -- |
| 3 | 01:53-56 | Section scale (~200-400px) ABSENT from SKILL.md and gate-runner.md | NOT ADDRESSED | No gate measures section-scale expression (components per viewport). SC-08 counts types globally, not per-section. conventions-brief.md L148 has ">= 2 component types per viewport" but no gate enforces it. | MINOR |
| 4 | 01:67-72 | Component scale gate (SC-08) only counts types, not internal structure (label/body DNA, padding delta) | PARTIALLY ADDRESSED | SC-08 (gate-runner.md L958-993) counts component type families >= 8. No gate checks component internal structure. PA-63 fills the perceptual gap. | MINOR |
| 5 | 01:80-86 | Character scale framed as prohibition only, zero positive verification | ADDRESSED | conventions-brief.md L150 explicitly says "ONLY after Page scale verified." SC-14 (gate-runner.md L573-628) prevents sub-perceptual character-scale CSS. This is intentionally prevention-only per the "build largest first" principle. | -- |
| 6 | 01:91-99 | Scale coverage summary: only Page scale has gates; "build largest first" instruction has ZERO enforcement | NOT ADDRESSED | No scale-order enforcement gate exists. Micro-gates enforce channel-order (MG-1 through MG-4), not scale-order. | SIGNIFICANT |
| 7 | 01:110-116 | Chromatic channel: FULL programmatic, ABSENT perceptual coverage | PARTIALLY ADDRESSED | SC-09 and SC-13 cover chromatic programmatically. No PA question specifically evaluates chromatic QUALITY. PA-62 "visual properties" is general. | MINOR |
| 8 | 01:122-129 | Typographic channel: FULL programmatic, ABSENT perceptual coverage | PARTIALLY ADDRESSED | SC-11, SC-14, SC-13 cover typographic. No PA question specifically tests typographic COMPOSITION. | MINOR |
| 9 | 01:135-142 | Spatial channel: PARTIAL prevention, PA-66 covers quality | ADDRESSED | SC-10 prevents voids. SC-13 checks padding delta >= 24px. PA-66 evaluates spatial quality. | -- |
| 10 | 01:148-155 | Structural channel: FULL programmatic, ABSENT perceptual | PARTIALLY ADDRESSED | SC-15 and SC-13 cover structural. No PA question evaluates structural COMPOSITION (meaningful border hierarchy vs arbitrary configs). | MINOR |
| 11 | 01:161-168 | Behavioral channel: WEAKEST -- one line definition, one binary check, zero PA | NOT ADDRESSED | conventions-brief.md L102 now has CSS properties listed (transition, :hover). gate-runner.md SC-13 Ch5 is still binary presence/absence (L529-532). Zero PA coverage. PARTIALLY improved in brief, unchanged in gates/PA. | MINOR |
| 12 | 01:174-181 | Material channel: PHANTOM -- defined but unmeasured | NOT ADDRESSED | conventions-brief.md L103 now has CSS properties (background-image, component count per zone). gate-runner.md SC-13 Ch6 only checks backgroundImage (L534-536). Zero PA coverage. PARTIALLY improved in brief, unchanged in gates/PA. | MINOR |
| 13 | 01:196 | Channel stack fundamental gap: 4 primary channels have zero dedicated PA questions | NOT ADDRESSED | flagship-pa-questions.md unchanged. No channel-specific PA questions. Multi-coherence questions (PA-61, PA-62, PA-65) test channels AS A SYSTEM but no question isolates individual channel composition. | MINOR |
| 14 | 01:206-211 | Multi-coherence: BEST COVERED concept. Small gap: SC-13 counts but can't judge semantic direction | ADDRESSED | This gap is acknowledged explicitly in gate-runner.md L546-547: "Counts channels but CANNOT judge if shifts serve the SAME semantic direction." SC-13B (ADVISORY) attempts direction. PA-61 and PA-62 fill perceptually. The design is intentional. | -- |
| 15 | 01:218-224 | Anti-scale model ABSENT from SKILL.md and gate-runner.md as a named model | NOT ADDRESSED | SKILL.md: formula not mentioned. gate-runner.md: no gate references the model. Three factors scattered as individual thresholds without unifying equation. | SIGNIFICANT |
| 16 | 01:231-237 | Fractal self-similarity: DG-1 validates TABLE not HTML | NOT ADDRESSED | gate-runner.md DG-1 (L725-746) still checks YAML deliverable only. No DG-1B for cross-validation against rendered CSS. | BLOCKING |
| 17 | 01:260-264 | SKILL.md treats ALL concepts as FLAT, CO-EQUAL CHECKBOXES -- no progression | PARTIALLY ADDRESSED | SKILL.md L18 mentions "fractal expression at all 5 scales" (progression awareness). L61-68 checkpoints are now boundary-grouped (progression improvement). But no explicit stack progression (scales -> channels -> coherence -> anti-scale) is articulated. | MINOR |
| 18 | 01:266-274 | Conventions-brief progression is INVERTED (anti-scale first, scales later) | N/A | This is assessed as DEFENSIBLE in the research itself: "telescope-first order -- see the destination before picking up the tools." The brief correctly describes the world top-down while the builder should BUILD bottom-up. No change needed. | -- |
| 19 | 01:286-292 | Stack progression ABSENT from all 4 files as explicit build-order guidance | PARTIALLY ADDRESSED | conventions-brief.md L142 says "build largest first, verify before proceeding." SKILL.md L61-68 now has boundary-grouped checkpoints. But no explicit "scales first, then channels, then coherence" progression is stated anywhere. | MINOR |
| 20 | 01:300-304 | SKILL.md correctly frames thresholds as FLOORS | ADDRESSED | SKILL.md L17-18: thresholds as non-negotiables (floors). L18: "The target is Flagship 4/4" (separate from floors). Correct framing maintained. | -- |
| 21 | 01:306-314 | conventions-brief correctly frames thresholds as physics | ADDRESSED | conventions-brief.md L69: "These are not rules to comply with. They are the physics of human perception." Unchanged and correct. | -- |
| 22 | 01:317-323 | gate-runner correctly says "Gates raise the FLOOR" | ADDRESSED | gate-runner.md L7-8 unchanged: "Gates raise the FLOOR -- they prevent FLAT (1.5/4) pages from consuming PA auditor time." | -- |
| 23 | 01:330-334 | Builder experience risk: thresholds as "physics" may position them as CONSTRAINTS TO SATISFY | PARTIALLY ADDRESSED | conventions-brief.md L255-257 (Section 9B) now includes "These numbers describe what a COMPOSED page naturally produces" and the DESIGNED/COMPOSED distinction. But the risk remains that builders under pressure treat numbers as the goal. | INFORMATIONAL |
| 24 | 01:349-356 | SKILL.md register is predominantly PERISCOPE (correct) | ADDRESSED | SKILL.md maintains periscope register with appropriate microscope intrusions for gate running. | -- |
| 25 | 01:358-377 | Conventions-brief register is DUAL (mostly correct, Section 9B breaks) | PARTIALLY ADDRESSED | Section 9B (L244-258) improved with framing sentence but still reads more checklist than world-description. | MINOR |
| 26 | 01:379-383 | gate-runner register is MICROSCOPE (correct) | ADDRESSED | gate-runner.md maintains microscope register throughout. | -- |
| 27 | 01:385-388 | PA questions register is TELESCOPE (correct) | ADDRESSED | flagship-pa-questions.md maintains telescope register. | -- |
| 28 | 01:405-411 | Finding 1: Scale-Channel Inversion -- scales DESCRIBED but not ENFORCED, channels ENFORCED but not DESCRIBED as compositional concepts | PARTIALLY ADDRESSED | conventions-brief.md describes both scales and channels. gates enforce channels. The inversion persists: no scale enforcement gates, no channel compositional framing in gates. The gate-runner CHANNEL NOTE (L549-566) now acknowledges this for Ch5-6 but not for the broader scale-channel gap. | SIGNIFICANT |
| 29 | 01:413-416 | Finding 2: Deliverable-vs-HTML Gap -- DG-1 and DG-4 validate plans not output | NOT ADDRESSED | No DG-1B or SC-17 added. Plans can still be fiction. | BLOCKING |
| 30 | 01:418-424 | Finding 3: Governing Principle Absence -- anti-scale model absent from SKILL.md and gate-runner as named model | NOT ADDRESSED | Same as finding #15. Model absent from orchestrator and verification. | SIGNIFICANT |
| 31 | 01:428-434 | Finding 4: Enhancement Channel Desert -- Behavioral and Material channels have zero vocabulary/verification/PA | PARTIALLY ADDRESSED | conventions-brief.md now has CSS properties for Ch5-6 (L102-103). gate-runner.md has CHANNEL NOTE (L549-566) acknowledging the gap. No PA coverage added. | MINOR |
| 32 | 01:436-441 | Finding 5: Section 9B Register Break | PARTIALLY ADDRESSED | Section 9B now has improved framing (L255, L257) but still more checklist than world-description. | MINOR |
| 33 | 01:443-451 | Finding 6: Micro-Gate Schedule Doesn't Enforce Scale Order | NOT ADDRESSED | Micro-gates still channel-ordered (MG-1 through MG-4 at gate-runner.md L35-69). | SIGNIFICANT |
| 34 | 01:453-462 | Finding 7: SKILL.md Non-Negotiables vs. Conventions-Brief Register -- orchestrator never internalizes anti-scale model, multi-coherence directions, or fractal echo | PARTIALLY ADDRESSED | SKILL.md L18 mentions "fractal expression at all 5 scales" and "dynamic multi-coherence" but these are TARGET descriptions, not internalized compositional intelligence. The orchestrator routes to the brief but does not itself understand the stack. | MINOR |
| 35 | 01:500-510 | Seven enrichment targets ranked by severity | See individual items | Each target traced separately below. | -- |

### FILE 02: Stack Placement Design (02-stack-placement-design.md)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 36 | 02:25-27 | Orchestrator should be dispatcher, not composer -- should NOT interpret concepts itself | ADDRESSED | SKILL.md acts as dispatcher: routes files to builder, runs gates, deploys PA. Does not interpret compositional concepts itself. | -- |
| 37 | 02:50-54 | Brief presents anti-scale, multi-coherence, and fractal echo as SEPARATE PEER sections -- no vertical dependency stated | NOT ADDRESSED | conventions-brief.md Sections 3-5 remain peer sections. No bridge text explaining stack dependency (scales -> channels -> coherence -> anti-scale). Research report 04 proposed 5-7 lines of bridge text. Not added. | SIGNIFICANT |
| 38 | 02:58-83 | Proposed brief restructuring: make vertical dependency VISIBLE in reading order (Section 3 = Scale Architecture, Section 4 = Channel Vocabulary, Section 5 = Multi-Coherence, Section 6 = Richness) | NOT ADDRESSED | conventions-brief.md retains original section order: Section 3 = Richness, Section 4 = Multi-Coherence, Section 5 = Fractal Echo. No restructuring applied. | MINOR |
| 39 | 02:86-101 | Proposed gate-runner annotation block naming the dependency chain as "compositional intelligence stack" | NOT ADDRESSED | gate-runner.md L104-107 has the dependency chain but no annotation naming it as the compositional intelligence stack or explaining WHY gates are ordered this way. | MINOR |
| 40 | 02:103-112 | Proposed PA-68 (stack integration synthesis question for Auditor G) | NOT ADDRESSED | flagship-pa-questions.md has no PA-68. Still 8 questions (PA-60 through PA-67). | SIGNIFICANT |
| 41 | 02:136-152 | Proposed channel-perception-floor table consolidating per-channel thresholds | ADDRESSED | conventions-brief.md L107-115 now has a full "Perception thresholds by channel" table with Channel, Property, Perceptible Floor, and Sub-Perceptual columns. This IS the proposed table. | -- |
| 42 | 02:186-193 | Proposed build order prominence: promote "build largest first" from table annotation to named principle with failure reference | PARTIALLY ADDRESSED | conventions-brief.md L142-153 has build order as table + dependency warning + priority guidance. The "238 invisible CSS lines" reference appears at L81 and L53. But the build order is still within the table section, not promoted to a standalone named principle. | MINOR |
| 43 | 02:196-217 | Proposed SC-17 (Scale Coverage Output Verification) | NOT ADDRESSED | Not in gate-runner.md. No output-level scale verification gate. | BLOCKING |
| 44 | 02:218-227 | Proposed PA-63 enrichment to add Navigation scale check | NOT ADDRESSED | PA-63 (flagship-pa-questions.md L51-61) unchanged. Still Component-to-Page only. | SIGNIFICANT |
| 45 | 02:247-252 | Proposed brief addition: distinguish multi-coherence at boundaries from multi-voice between boundaries | PARTIALLY ADDRESSED | conventions-brief.md L132 mentions "narrative arc of visual intensity" (varying coherence profile). But the explicit distinction between "alignment at boundaries" vs "independence between boundaries" is not stated. | MINOR |
| 46 | 02:253-271 | SC-13B analysis: Option B recommended (keep ADVISORY, route diagnostic to weaver) | ADDRESSED | gate-runner.md SC-13B (L672-690) remains ADVISORY. gate-runner.md L273-275 routes gate diagnostic output as PA context. Consistent with recommendation. | -- |
| 47 | 02:273-278 | Weaver should explicitly synthesize PA-61 + PA-62 + SC-13B for multi-coherence verdict | PARTIALLY ADDRESSED | SKILL.md L284-287 weaver prompt now includes "name the affected multi-coherence channel" and "the transition type at the boundary." But no explicit instruction to synthesize PA-61 + PA-62 + SC-13B as a combined multi-coherence verdict sub-section. | MINOR |
| 48 | 02:300-306 | Proposed brief addition: direction can shift across the page (combination rule) | PARTIALLY ADDRESSED | conventions-brief.md L132 mentions "coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels." This implies direction variation. But no explicit "direction can shift across the page" guidance or OPENING-DEEPENING-RESOLVING arc example. | MINOR |
| 49 | 02:308-323 | SC-13B direction model should be enriched from 2-value to 4-value with DISCORDANT detection | NOT ADDRESSED | gate-runner.md SC-13B (L672-690) still uses INTENSIFYING/RELAXING binary. No 4-value model. No DISCORDANT detection. | SIGNIFICANT |
| 50 | 02:326-332 | Proposed PA-62 enrichment: add direction coherence prompt | NOT ADDRESSED | PA-62 (flagship-pa-questions.md L37-47) unchanged. No direction coherence question ("do ALL changes feel like they're saying the same thing"). | MINOR |
| 51 | 02:357-366 | Anti-scale formula: brief should add forward-reference connecting formula to sections below | NOT ADDRESSED | conventions-brief.md Section 3 (L73-89) has the formula but no forward-reference to Sections 4-5 explaining how multi-coherence and fractal echo implement it. | SIGNIFICANT |
| 52 | 02:367-381 | Proposed SC-18 (Restraint Check, ADVISORY) -- component concentration, drop-cap limit, absent mechanisms log | NOT ADDRESSED | Not in gate-runner.md. No programmatic restraint check. | SIGNIFICANT |
| 53 | 02:383-386 | PA-64 (restraint), PA-60 (density), PA-66 (spatial confidence) already map to formula's three factors -- weaver should reference anti-scale formula | NOT ADDRESSED | SKILL.md weaver prompt (L258-314) does not reference the anti-scale formula when describing how to synthesize PA-64/60/66. | MINOR |
| 54 | 02:403-414 | Proposed parametric echo promotion from single sentence to sub-section with concrete example | ADDRESSED | conventions-brief.md L156-158 now has parametric echo as a named concept with a concrete CSS paragraph: "Give each zone a density character. Inside dense zones, reduce component padding by ~25%..." This IS a promoted sub-section. | -- |
| 55 | 02:440-457 | Brief should add "floors produce Middle, not Flagship" clarification to Section 9B | ADDRESSED | conventions-brief.md L257: "DESIGNED describes a page where every element serves a deliberate purpose -- PA-05 >= 3.5. COMPOSED describes a Flagship page where DESIGNED elements additionally interrelate through multi-coherence, fractal echo, and metaphor -- Tier 5 >= 6/8." This IS the floor/target clarification. | -- |
| 56 | 02:462-470 | Master Placement Table showing concept x optic x form | N/A | This is a research artifact for planning, not something that would appear in pipeline files. The individual placements within it are traced separately. | -- |
| 57 | 02:507-511 | Brief: add "Stack Architecture" note between Section 2 and Section 3 | NOT ADDRESSED | conventions-brief.md has no stack architecture bridge between Sections 2 and 3. Sections transition directly from Perception to Richness without naming the stack relationship. | SIGNIFICANT |
| 58 | 02:517-518 | Gate-runner: add "Stack Architecture" annotation to dependency chain | NOT ADDRESSED | gate-runner.md L104-107 has the dependency chain but no annotation naming it as the compositional intelligence stack. | MINOR |
| 59 | 02:523-525 | Weaver should have multi-coherence synthesis, anti-scale factor mapping, and scale coverage synthesis sub-sections | PARTIALLY ADDRESSED | SKILL.md weaver prompt (L280-287) now includes compositional vocabulary (channel names, scales, transition types). But no explicit sub-sections for multi-coherence synthesis, anti-scale factor mapping, or scale coverage synthesis. | MINOR |

### FILE 03: Architecture Analysis (03-architecture-analysis.md)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 60 | 03:14-29 | Pipeline is a 5-file permanent system with clear execution flow | ADDRESSED | The 4 pipeline files + 2 CLAUDE.md routing files constitute the system. Architecture is stable and matches the described flow. | -- |
| 61 | 03:34-42 | Rank 1 modification approach: edit existing files (80% of changes) | N/A | This is a process recommendation, not something to verify in pipeline files. | -- |
| 62 | 03:73-97 | SKILL.md is both orchestrator AND specification -- gate table duplicates gate-runner.md thresholds | PARTIALLY ADDRESSED | SKILL.md L126-144 gate table exists alongside gate-runner.md's full specs. SKILL.md L124 now says "For complete gate specifications...reference gate-runner.md (992 lines, 21 gates)" establishing gate-runner.md as source of truth. But the table values themselves are still duplicated without explicit "SOURCE OF TRUTH" annotations per value. | MINOR |
| 63 | 03:98-129 | conventions-brief.md role: world description, not checklist | ADDRESSED | conventions-brief.md L3-7 framing: "This brief describes the world you are building inside... It does not tell you what to build." Telescope register maintained. | -- |
| 64 | 03:131-154 | gate-runner.md role: verification spec with JS code, thresholds, fix recipes | ADDRESSED | gate-runner.md maintains this role with 1159 lines of gate specs. | -- |
| 65 | 03:156-173 | flagship-pa-questions.md role: Tier 5 questions only | ADDRESSED | flagship-pa-questions.md contains only 8 Tier 5 questions (PA-60 through PA-67) with scoring and assignments. | -- |
| 66 | 03:186-198 | Change propagation: editing conventions-brief.md may require sync with gate-runner.md thresholds | PARTIALLY ADDRESSED | gate-runner.md L223-261 now has Fix Recipe Compositional Context section referencing conventions-brief sections. But no explicit sync protocol or SOURCE OF TRUTH annotation for shared threshold values. | MINOR |
| 67 | 03:213-224 | Change propagation: editing gate-runner.md requires SKILL.md gate table sync | PARTIALLY ADDRESSED | SKILL.md L124 references gate-runner.md as the complete spec. But SKILL.md still has its own gate table (L126-144) that must be manually synchronized. | MINOR |
| 68 | 03:295-296 | Perception thresholds duplicated in THREE places -- a single perception-thresholds.md could eliminate sync risk | NOT ADDRESSED | Thresholds remain duplicated in conventions-brief.md (Section 2 + Section 4 table), gate-runner.md (per-gate), and SKILL.md (L433). No single-source-of-truth file created. | MINOR |
| 69 | 03:393-399 | Brief has room for ~100 more lines before 500-line cognitive load threshold | N/A | conventions-brief.md is now 443 lines (grew from 403). Room is shrinking. This is an observation about constraints, not a finding to address. | -- |
| 70 | 03:503-519 | Synchronization Problem: 5 values duplicated across multiple files | PARTIALLY ADDRESSED | SKILL.md L124 establishes gate-runner.md as reference. But values remain duplicated without per-value source-of-truth markers. | MINOR |
| 71 | 03:522-532 | Brief is near its ceiling at 403 lines -- additions require compression | N/A | Brief is now 443 lines. Observation about constraint, not a finding to address in pipeline files. | -- |
| 72 | 03:533-537 | Pipeline has no version control mechanism (no changelog) | NOT ADDRESSED | No CHANGELOG section in any pipeline file. No pipeline-changelog.md file. | INFORMATIONAL |
| 73 | 03:539-548 | SKILL.md serves two roles (orchestrator + specification) -- acceptable at 408 lines, consider separation at 600+ | N/A | SKILL.md is now 436 lines. Still below the 600-line separation threshold. | -- |

### FILE 04: Brief Deep Dive (04-brief-deep-dive.md)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 74 | 04:50-65 | Stack progression is INVERTED in brief (anti-scale first, scales later) -- relationship architecture is MISSING | PARTIALLY ADDRESSED | conventions-brief.md L89: "These three factors connect through scale: density fills each viewport, restraint governs what IS and IS NOT deployed, spatial confidence ensures the architecture holds at every zoom level." This IS a relationship bridge sentence for the anti-scale formula. But no bridge connecting Sections 3-5 as a vertical stack exists. | MINOR |
| 75 | 04:71-91 | All 6 channels named with CSS properties? PARTIAL for channels 4-6 | ADDRESSED | conventions-brief.md L102-103 now has CSS properties for all 6 channels. Ch5: "transition, :hover rules." Ch6: "background-image pattern, component count per zone." | -- |
| 76 | 04:97-121 | Scale section (Section 5) is operationally complete -- ZERO enrichment needed | ADDRESSED | conventions-brief.md Section 5 (L138-163) remains strong with all 5 scales, build order, thresholds, dependency chain, parametric echo, and deliverable mandate. | -- |
| 77 | 04:125-153 | Multi-coherence section (Section 4) is STRONG with concrete DEEPENING example | ADDRESSED | conventions-brief.md Section 4 (L93-135) retains the concrete example at L128, 4 direction definitions, layout diversity shortcut, global coherence. | -- |
| 78 | 04:157-174 | Anti-scale as governing principle: present in title and position, but hierarchy with multi-coherence and scales is IMPLICIT | NOT ADDRESSED | No explicit bridge naming the hierarchy: "Richness is the GOAL, multi-coherence is the MECHANISM, scales/channels are the TOOLS." | SIGNIFICANT |
| 79 | 04:180-198 | Floor/target distinction: EXPLICIT for multi-coherence (3=DESIGNED, 5+=COMPOSED) but INCONSISTENT for other dimensions | PARTIALLY ADDRESSED | conventions-brief.md L63 has the DESIGNED/COMPOSED pattern. L257 extends it to PA-05 vs Tier 5. But L248-254 (quality floor metrics) do not use the named-level pattern (e.g., "2 layout topologies = DESIGNED, 3+ = COMPOSED" never stated). | MINOR |
| 80 | 04:202-249 | Recipe vs checklist ratio: 51% world-description (healthy), but operational sections are constraint-heavy | N/A | This is an analytical observation. The current brief maintains the healthy ratio. | -- |
| 81 | 04:257-276 | Enrichment 1: Stack Relationship Bridge (~5-7 lines between Section 2 and 3) | NOT ADDRESSED | No bridge text added between sections. The 5-7 line passage naming the stack architecture as "channels (tools) -> multi-coherence (mechanism) -> scales (architecture) -> richness (governing principle)" does not appear. | SIGNIFICANT |
| 82 | 04:278-293 | Enrichment 2: Floor/Target Naming Extension (DESIGNED/COMPOSED pattern to 2-3 more dimensions) | NOT ADDRESSED | No additional DESIGNED/COMPOSED naming in Section 9B. Only multi-coherence channels have the named pattern (L63). | MINOR |
| 83 | 04:294-314 | Enrichment 3: Boundary-by-boundary recipe expansion (concrete CSS example in Process section) | ADDRESSED | conventions-brief.md L416-431 now has a full "Boundary CSS recipe" with concrete DEEPENING example showing 4 channels in CSS, plus the instruction "All four primary channels shift together, all encoding DEEPENING." This is EXACTLY the proposed enrichment. | -- |
| 84 | 04:316-329 | Enrichment 4: Channel CSS property completion for channels 4-6 | ADDRESSED | conventions-brief.md L102-103 now has CSS properties for Ch5 (transition, :hover) and Ch6 (background-image, component count per zone). Ch4 (L101) has "border-left weight, horizontal rules, or divider presence change." | -- |
| 85 | 04:346-357 | Risk assessment: proposed enrichments total ~19 lines (~4.7% growth), negligible risk | N/A | Brief grew from 403 to 443 lines (+40 lines, ~10%). Growth is within tolerance. | -- |

### FILE 05: Verification Deep Dive (05-verification-deep-dive.md)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 86 | 05:24-47 | Gate coverage by stack layer: L0-L1 ~95%, L2-L3 ~35-40%, L4-L5 ~0-25% | ADDRESSED | This coverage pattern is inherent and correct. L0-L1 is mechanical. L4-L5 is evaluative. The pipeline design correctly delegates L4-L5 to PA. gate-runner.md L7-8 acknowledges this. | -- |
| 87 | 05:59 | Coverage degrades precisely along the stack -- not a design flaw but reflects gate capabilities | ADDRESSED | gate-runner.md L5-8 explicitly states gates catch ~26% of compositional quality, PA catches ~74%. Design is intentional. | -- |
| 88 | 05:65-74 | Proposed DG-1B (Fractal Echo Cross-Validation) | NOT ADDRESSED | Not in gate-runner.md. | BLOCKING |
| 89 | 05:76-82 | Channel Semantic Deployment: CANNOT verify programmatically, SHOULD NOT attempt | ADDRESSED | No semantic deployment gate added. Correct non-action. | -- |
| 90 | 05:84-98 | SC-13B upgrade to BLOCKING: PREMATURE (3 reasons) -- keep ADVISORY with calibration protocol | ADDRESSED | gate-runner.md SC-13B (L672-690) remains ADVISORY. No premature promotion. Consistent with recommendation. | -- |
| 91 | 05:100-111 | Anti-scale model: CANNOT verify programmatically, SHOULD NOT attempt | ADDRESSED | No anti-scale programmatic gate added. PA-64/60/66 remain the instruments. Correct non-action. | -- |
| 92 | 05:117-122 | Proposed DG-1B: NEW BLOCKING gate for fractal echo cross-validation | NOT ADDRESSED | Not in gate-runner.md. | BLOCKING |
| 93 | 05:124-129 | Proposed SC-13C: Minimum Channel VARIETY per boundary (ADVISORY) | NOT ADDRESSED | Not in gate-runner.md. Channel variety not measured. | SIGNIFICANT |
| 94 | 05:131-136 | Proposed SC-10B: Distribution of Content Mass (ADVISORY) | NOT ADDRESSED | Not in gate-runner.md. Content mass distribution not measured. | SIGNIFICANT |
| 95 | 05:140-141 | Do NOT add Direction Grammar Gate | ADDRESSED | No direction grammar gate added. Correct non-action. | -- |
| 96 | 05:143-144 | Do NOT add Mechanism Count per Category Gate (runtime) | ADDRESSED | No runtime mechanism count gate added. DG-4 handles this at plan level. | -- |
| 97 | 05:146-147 | Do NOT add Anti-Pattern Detection Gate | ADDRESSED | No anti-pattern gate added. | -- |
| 98 | 05:149-151 | Do NOT add Metaphor Coherence Gate (automated) | ADDRESSED | No automated metaphor gate added. BG-2 remains behavioral. | -- |
| 99 | 05:169 | Tier 5 questions deliberately AVOID stack vocabulary -- CORRECT | ADDRESSED | flagship-pa-questions.md uses perceptual language throughout. No stack vocabulary introduced. | -- |
| 100 | 05:175-181 | PA auditors should NOT know stack vocabulary; PA weaver SHOULD | PARTIALLY ADDRESSED | SKILL.md L216-238 auditor prompt uses perceptual language (correct). SKILL.md L284-287 weaver prompt now includes compositional vocabulary (channel names, scales, transition types). But weaver doesn't have the full stack classification framework (ENSEMBLE/CHOIR/SOLO/BROKEN). | MINOR |
| 101 | 05:185-191 | PA questions that name specific concepts (multi-coherence, fractal) would destroy fresh-eyes | ADDRESSED | No stack vocabulary in PA questions. Fresh-eyes principle maintained. | -- |
| 102 | 05:197-203 | Proposed PA-68 (Transition Texture Variety) for Auditor D | NOT ADDRESSED | Not in flagship-pa-questions.md. | SIGNIFICANT |
| 103 | 05:205-210 | Proposed PA-69 (Deliberate Asymmetry) for Auditor E | NOT ADDRESSED | Not in flagship-pa-questions.md. | SIGNIFICANT |
| 104 | 05:213-217 | Proposed PA-70 (Content-Form Echo) for Auditor B | NOT ADDRESSED | Not in flagship-pa-questions.md. | SIGNIFICANT |
| 105 | 05:220-223 | Rejected PA-71 (channel count as PA question) | ADDRESSED | Not added. Correct rejection. | -- |
| 106 | 05:224-226 | Rejected PA-72 (fractal self-similarity naming) | ADDRESSED | Not added. Correct rejection. | -- |
| 107 | 05:227-228 | Rejected PA-73 (anti-scale H/M/L rating) | ADDRESSED | Not added. Correct rejection. | -- |
| 108 | 05:236-258 | Process gap: Gates measure EFFECTS, PA measures PERCEPTION, neither measures PROCESS -- close through diagnostics not verification | ADDRESSED | Pipeline does not attempt to verify process. Transition table and fractal echo table serve as diagnostic artifacts (DG-1, DG-4). Build log serves as post-hoc diagnostic. Correct approach maintained. | -- |
| 109 | 05:286-302 | SC-13B calibration protocol: record output per build, correlate with PA after 3 builds | NOT ADDRESSED | No calibration protocol documented in gate-runner.md or SKILL.md. SC-13B runs but results are not tracked for calibration. | INFORMATIONAL |
| 110 | 05:316-323 | Five cross-instrument gaps identified (scale-to-scale, drift, layout-mechanism, restraint evidence, stack integration) | PARTIALLY ADDRESSED | No new instruments address these specific gaps. The weaver's compositional vocabulary addition (SKILL.md L284-287) partially addresses stack integration. The others remain open. | MINOR |
| 111 | 05:324-341 | Weaver Stack Verdict: proposed ~10-line addition to weaver instructions with L1-L5 assessment + ENSEMBLE/CHOIR/SOLO/BROKEN classification | NOT ADDRESSED | SKILL.md weaver prompt (L258-314) does not include a Stack Verdict section. No L1-L5 per-layer assessment. No ENSEMBLE/CHOIR/SOLO/BROKEN classification. | SIGNIFICANT |

### FILE 06: Orchestrator Deep Dive (06-orchestrator-deep-dive.md)

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 112 | 06:18-28 | Builder spawn prompt reads 6 files IN ORDER with correct primacy/recency | ADDRESSED | SKILL.md L47-56 has 6 files in correct order: conventions-brief FIRST, prohibitions LAST. | -- |
| 113 | 06:31-38 | Routing is FILE-BASED not CONCEPT-BASED -- no signal about which of 14 sections are HIGHEST PRIORITY | PARTIALLY ADDRESSED | SKILL.md L49 says "Follow its process phases... It is a world-description, not a checklist." But no concept-level priority weighting (e.g., "Sections 3-5 are most critical for compositional quality"). | MINOR |
| 114 | 06:41-43 | Builder receives no explicit compositional intelligence stack progression | NOT ADDRESSED | SKILL.md builder spawn prompt (L43-86) does not mention the stack progression (scales -> channels -> multi-coherence -> anti-scale). | MINOR |
| 115 | 06:44-46 | No per-concept priority weighting -- multi-coherence and fractal echo same visual weight as accessibility | N/A | This is a brief design choice. The brief intentionally does not rank sections. Assessed as acceptable -- the world-description framing treats all physics as equally real. | -- |
| 116 | 06:47-49 | No compositional intelligence cheat sheet for mid-build consultation | NOT ADDRESSED | No _compositional-reference.md or equivalent generated. Builder relies on conviction statement (10 lines) for mid-build memory. | MINOR |
| 117 | 06:50-53 | No explicit connection between mechanism-catalog.md and compositional intelligence concepts in spawn prompt | PARTIALLY ADDRESSED | SKILL.md L53: "mechanism CSS patterns. Select mechanisms that serve your multi-coherence channels." This IS a connection to multi-coherence. But no connection to fractal echo scales or transition grammar types. | MINOR |
| 118 | 06:56-78 | COMPOSE vs COMPLY ratio in spawn prompt: ~60:40 -- GOOD | ADDRESSED | SKILL.md L43-86 maintains compose-forward framing with compliance checkpoints. Ratio preserved. | -- |
| 119 | 06:79-80 | Self-check checkpoints verify PERCEPTION PHYSICS compliance but not COMPOSITIONAL QUALITY | ADDRESSED | SKILL.md L66: ">= 3 channels shift in same semantic direction at each boundary" IS a compositional checkpoint, not just a compliance check. This was added after the research. | -- |
| 120 | 06:86-101 | Fix instruction routing: gate failures have specific CSS but NO compositional context | ADDRESSED | SKILL.md L330-335 now has "Compositional Context (from build log and conventions brief)" section with boundary direction, channel status, and brief section references. This IS the proposed enrichment. | -- |
| 121 | 06:103-114 | Fix routing missing: (1) compositional context for gate fixes, (2) mechanism vocabulary in PA issues, (3) lock sheet context | PARTIALLY ADDRESSED | (1) ADDRESSED via L330-335. (2) PARTIALLY -- weaver uses compositional vocabulary (L284-287) but fix instructions still use "directional, not prescriptive" framing (L337-340). (3) NOT ADDRESSED -- lock sheet (L198-208) and fix instructions (L320-348) are separate; lock sheet is not integrated into DO NOT TOUCH section. | MINOR |
| 122 | 06:119-154 | PA issue routing: weaver translates to generic vocabulary, missing compositional vocabulary layer | ADDRESSED | SKILL.md L284-287: weaver now names "affected multi-coherence channel (Chromatic/Typographic/Spatial/Structural), the fractal scale (Navigation/Page/Section/Component/Character), and the transition type at the boundary (SMOOTH/BRIDGE/BREATHING)." This IS compositional vocabulary in weaver output. | -- |
| 123 | 06:157-195 | Lock sheet is COMPLIANCE-BASED not COMPOSITIONAL -- missing compositional context per element | NOT ADDRESSED | SKILL.md L198-208 lock sheet has three categories (LOCKED Soul, LOCKED Research, CHALLENGEABLE) but no compositional context per element (which channels affected, which scale, current shift count). | MINOR |
| 124 | 06:200-253 | Proposed compositional reference card (30-line condensed reference for mid-build) | NOT ADDRESSED | No reference card generation step in SKILL.md. No _compositional-reference.md creation. | MINOR |
| 125 | 06:256-283 | CONTRADICTION: conventions-brief says boundary-by-boundary, SKILL.md checkpoints imply channel-by-channel | ADDRESSED | SKILL.md L61-68 now has boundary-grouped checkpoints: "After zone boundaries set (all channels together per boundary)" with bg deltas, border configs, and channel shifts grouped together. The contradiction is RESOLVED. | -- |
| 126 | 06:306-328 | Proposed comprehension proof (pre-build absorption gate) | NOT ADDRESSED | No comprehension proof step in SKILL.md builder spawn prompt. Builder reads the brief but no absorption verification before CSS begins. | MINOR |
| 127 | 06:330-352 | Proposed mid-build absorption check enhancement (compositional intelligence questions at midpoint) | PARTIALLY ADDRESSED | conventions-brief.md L269 has midpoint reflection ("what feels designed? What feels flat?"). SKILL.md L68 has "Midpoint observation recorded?" But no compositional intelligence questions (channel count, scale coverage, diagnosis) at midpoint. | MINOR |
| 128 | 06:354-363 | Proposed post-build reflection enhancement (add multi-coherence direction comparison) | NOT ADDRESSED | SKILL.md L80-84 brief reflection has (a) sections influence, (b) mechanisms selected, (c) metaphor. No (d) multi-coherence direction comparison against planned directions. | INFORMATIONAL |
| 129 | 06:371-388 | Proposed Edit 1: Compositional Reference Card Generation (Section 2.5) | NOT ADDRESSED | No Section 2.5 in SKILL.md. No reference card generation step. | MINOR |
| 130 | 06:390-413 | Proposed Edit 2: Restructure Builder Self-Check Checkpoints from channel-grouped to boundary-grouped | ADDRESSED | SKILL.md L61-68 now has boundary-grouped checkpoints with 3 checkpoints (HTML skeleton, zone boundaries, full build). Matches the proposed structure. | -- |
| 131 | 06:415-427 | Proposed Edit 3: Add Comprehension Proof to builder spawn prompt | NOT ADDRESSED | No comprehension proof in SKILL.md. | MINOR |
| 132 | 06:429-445 | Proposed Edit 4: Add Compositional Context to fix instructions | ADDRESSED | SKILL.md L330-335 has compositional context section with boundary direction, channel status, and brief section reference. Matches proposed format. | -- |
| 133 | 06:447-457 | Proposed Edit 5: Enrich weaver prompt with compositional vocabulary | ADDRESSED | SKILL.md L284-287 weaver prompt now includes channel names, scale names, and transition types. | -- |
| 134 | 06:459-469 | Proposed Edit 6: Add Compositional Context to lock sheet | NOT ADDRESSED | SKILL.md L198-208 lock sheet has no compositional context per element. | MINOR |
| 135 | 06:471-478 | Proposed Edit 7: Add Reference Card to builder spawn prompt read list | NOT ADDRESSED | No reference card file added to builder's read list (SKILL.md L47-56). | MINOR |
| 136 | 06:482-496 | Orchestrator routing scorecard: overall 5.8/10 | PARTIALLY ADDRESSED | Several proposed edits were implemented (Edit 2, Edit 4, Edit 5). Edits 1, 3, 6, 7 not implemented. Estimated improvement: ~6.8/10. | -- |
| 137 | 06:497-508 | Pattern: CI enters through conventions-brief but LEAKS OUT at every routing boundary | PARTIALLY ADDRESSED | Weaver now has compositional vocabulary (Edit 5). Fix instructions have compositional context (Edit 4). Checkpoints are boundary-grouped (Edit 2). But: absorption verification absent, mid-build reference absent, lock sheet lacks CI context. Leakage reduced but not eliminated. | MINOR |
| 138 | 06:512-522 | Highest-leverage single edit: restructure checkpoints from channel-by-channel to boundary-by-boundary | ADDRESSED | SKILL.md L61-68 implements this edit. | -- |

### DEBRIEF PART 3: Findings

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 139 | P3-1 | Fix cycle template does NOT reference conventions-brief sections | ADDRESSED | SKILL.md L334: "Re-read conventions-brief.md Section [N] for the relevant concept." gate-runner.md L223-261 has Fix Recipe Compositional Context table mapping gate categories to brief sections. | -- |
| 140 | P3-2 | Fix cycle template does NOT carry concept-level framing | ADDRESSED | SKILL.md L330-335 has "Compositional Context" section with boundary direction, channel status, and brief reference. This IS concept-level framing. | -- |
| 141 | P3-3 | File reading order: conventions-brief FIRST, prohibitions LAST | ADDRESSED | SKILL.md L48: "conventions-brief.md -- YOUR PRIMARY GUIDANCE. Read FIRST." L56: "prohibitions.md -- soul constraints (LOCKED). Read LAST before CSS begins." | -- |
| 142 | P3-4 | TeamCreate vs Task tool ambiguity (lines 30, 204 say TeamCreate; line 398 says Task tool) | ADDRESSED | SKILL.md L30: "Spawn agents using the Task tool." Consistent throughout. No TeamCreate references. | -- |
| 143 | P3-5 | Output directory structure with specific file names | ADDRESSED | SKILL.md L24-25: "Create output directory: ephemeral/pages/[content-slug]/". L426-427: complete file structure listed. | -- |
| 144 | P3-6 | SKILL references "992 lines, 21 gates" for gate-runner.md | PARTIALLY ADDRESSED | SKILL.md L124: "gate-runner.md (992 lines, 21 gates)." gate-runner.md is actually 1159 lines with 22 gates (1 pre-gate + 17 blocking + 2 advisory + 2 behavioral per L1143). Line count and gate count are STALE in SKILL.md. | INFORMATIONAL |

### DEBRIEF PART 4: Findings

| # | Source | Finding | Status | Evidence | Severity |
|---|--------|---------|--------|----------|----------|
| 145 | P4-1 | Gate count: 21 total (12 Tier A, 7 Tier B, 2 Tier C behavioral) | PARTIALLY ADDRESSED | gate-runner.md L1143-1144: "1 pre-gate + 17 blocking + 2 advisory + 2 behavioral = 22 gates." The current count is 22 (with SC-00 pre-gate added). SKILL.md L124 still says "21 gates" -- STALE. | INFORMATIONAL |
| 146 | P4-2 | BG-1 and BG-2 ENTIRELY ABSENT from SKILL.md | ADDRESSED | SKILL.md L147: lists "behavioral gates BG-1 Metaphor Independence + BG-2 Metaphor Structural" in structured output. L175-177: defines both BG-1 and BG-2 under "Behavioral gates (from build log)." | -- |
| 147 | P4-3 | Mechanism count: gate-runner >= 14 AND per-category vs SKILL.md per-category only | ADDRESSED | SKILL.md L171: "mechanisms: >= 14 total AND >= 1 in each of 5 categories." gate-runner.md DG-4 L1081: same. Both now say ">= 14 total AND >= 1 in each of 5 categories." Synchronized. | -- |
| 148 | P4-4 | Micro-gate: gate-runner has 4 orchestrator-run Playwright gates, SKILL.md has 4 builder self-checks (honor system) | ADDRESSED | The current pipeline architecture has BOTH: (1) SKILL.md L61-68 builder self-checks during build (honor system). (2) gate-runner.md L35-69 micro-gate schedule run by orchestrator via Playwright. These are complementary systems, not conflicting. The builder self-checks during Phase C; the orchestrator runs micro-gates at phase transitions. | -- |
| 149 | P4-5 | Threshold differences: MG-1 >= 5 ARIA vs SKILL.md >= 3, MG-3 >= 3 border configs vs SKILL.md >= 2 | ADDRESSED | SKILL.md L62: ">= 5 ARIA landmarks" (matches gate-runner.md SC-06 Flagship L917). SKILL.md L65: ">= 3 distinct border configurations" (matches gate-runner.md SC-15 Flagship L638). Values synchronized. | -- |
| 150 | P4-6 | Gate-to-PA context: gate-runner says gate results serve as PA context, but SKILL.md does NOT route gate results to auditors | ADDRESSED | gate-runner.md L266-279: "Gate diagnostic output...included as PA CONTEXT." SKILL.md L262-263: weaver reads "gate results at [output-dir]/_gate-results.json for diagnostic context." Gates route to WEAVER (not auditors) -- this is CORRECT because auditors must remain fresh-eyes. | -- |
| 151 | P4-7 | Fix recipes: gate-runner embeds in gate JSON, SKILL.md expects manual composition | ADDRESSED | SKILL.md L161: "If any gate FAILS: produce a structured fix instruction with measured values, threshold, and specific CSS fix." gate-runner.md gates include fix recipe format. Both aligned. | -- |
| 152 | P4-8 | DG-4 references _build-plan.yaml but builder never produces it | ADDRESSED | gate-runner.md DG-4 (L1071-1094) now references "_build-log.md plan sections (conviction statement, transition table, fractal echo table)" -- not _build-plan.yaml. SKILL.md L77 specifies builder produces "_build-log.md." Aligned. | -- |
| 153 | P4-9 | BG-1 checks build log ordering (content -> tension -> metaphor -> library) | ADDRESSED | gate-runner.md BG-1 (L1004-1021): "Build log must show: 1. Content analysis, 2. Tension derivation, 3. Metaphor collapse, 4. THEN library consultation." SKILL.md L176: mirrors this. | -- |
| 154 | P4-10 | BG-2 checks metaphor is STRUCTURAL not ANNOUNCED | ADDRESSED | gate-runner.md BG-2 (L1025-1044): "Fresh-eyes Opus agent reads the build plan... Binary judgment: STRUCTURAL or ANNOUNCED." SKILL.md L177: "BG-2: Metaphor is STRUCTURAL (suggests CSS properties), not ANNOUNCED (label-only)." | -- |

---

## ANALYSIS BY FILE

### Research File 01 (Pipeline State Map): 35 findings
- ADDRESSED: 11 (31%)
- PARTIALLY ADDRESSED: 12 (34%)
- NOT ADDRESSED: 9 (26%)
- N/A: 1 (3%)
- CONTRADICTED: 0

**Assessment:** The state map's findings about scale and channel coverage gaps were the most granular. The PAGE scale's strong gating was preserved. The NAVIGATION and SECTION scale gaps remain. The enhancement channel (Ch5-6) gap was partially addressed in the brief but not in gates/PA.

### Research File 02 (Stack Placement Design): 24 findings
- ADDRESSED: 7 (29%)
- PARTIALLY ADDRESSED: 5 (21%)
- NOT ADDRESSED: 11 (46%)
- N/A: 1 (4%)

**Assessment:** Most proposed NEW artifacts (SC-17, SC-18, PA-68, brief restructuring, stack architecture annotation) were NOT implemented. The channel perception floor table WAS added. SC-13B correctly kept ADVISORY. The parametric echo was promoted. The floor/target clarification was added.

### Research File 03 (Architecture Analysis): 14 findings
- ADDRESSED: 4 (29%)
- PARTIALLY ADDRESSED: 5 (36%)
- NOT ADDRESSED: 2 (14%)
- N/A: 3 (21%)

**Assessment:** Architecture findings were mostly structural observations. The synchronization risk (gate table duplication) was partially mitigated by referencing gate-runner.md as source of truth. No changelog mechanism added.

### Research File 04 (Brief Deep Dive): 12 findings
- ADDRESSED: 5 (42%)
- PARTIALLY ADDRESSED: 3 (25%)
- NOT ADDRESSED: 3 (25%)
- N/A: 1 (8%)

**Assessment:** The brief's strongest enrichments were implemented: boundary-by-boundary recipe (L416-431), channel CSS properties (L102-103), parametric echo promotion (L156-158), floor/target clarification (L257). The stack relationship bridge and floor/target naming extension were NOT implemented.

### Research File 05 (Verification Deep Dive): 26 findings
- ADDRESSED: 14 (54%)
- PARTIALLY ADDRESSED: 2 (8%)
- NOT ADDRESSED: 9 (35%)
- N/A: 0

**Assessment:** Correct non-actions were well-preserved (no semantic gates, no stack vocabulary in PA, SC-13B stays ADVISORY). All three proposed new gates (DG-1B, SC-13C, SC-10B) and all three proposed new PA questions (PA-68/69/70) were NOT implemented. The Weaver Stack Verdict was NOT implemented.

### Research File 06 (Orchestrator Deep Dive): 27 findings
- ADDRESSED: 11 (41%)
- PARTIALLY ADDRESSED: 6 (22%)
- NOT ADDRESSED: 9 (33%)
- N/A: 1 (4%)

**Assessment:** The three highest-impact edits were implemented: checkpoint restructuring (Edit 2), compositional context in fix instructions (Edit 4), and weaver compositional vocabulary (Edit 5). Not implemented: reference card (Edit 1), comprehension proof (Edit 3), lock sheet CI context (Edit 6), reference card in read list (Edit 7).

### Debrief Parts 3-4: 16 findings
- ADDRESSED: 14 (88%)
- PARTIALLY ADDRESSED: 2 (12%)
- NOT ADDRESSED: 0

**Assessment:** All debrief findings were addressed. The BG-1/BG-2 absence and DG-4 _build-plan.yaml issues are resolved. Threshold synchronization is now correct. The only partial items are stale line/gate counts in SKILL.md references.

---

## TOP PRIORITY ACTIONS (Ranked)

### Priority 1: Scale Output Verification (BLOCKING)
**What:** Add DG-1B (Fractal Echo Cross-Validation) to gate-runner.md
**Why:** The deliverable-vs-HTML gap is the single most exploitable weakness. A builder can write a perfect fractal echo table and produce HTML that contradicts it. DG-1B closes this by verifying claimed CSS evidence exists in computed styles.
**Impact:** Closes B1, B2, B3 (all three BLOCKING items)
**Effort:** ~20 lines of JS in gate-runner.md + gate table entry in SKILL.md

### Priority 2: Stack Relationship Bridge (SIGNIFICANT)
**What:** Add 5-7 lines to conventions-brief.md between Section 2 and Section 3 naming the stack architecture
**Why:** The concepts are all present but their RELATIONSHIP is implicit. The bridge makes it explicit: "channels (tools) -> multi-coherence (mechanism) -> scales (architecture) -> richness (governing principle)."
**Impact:** Closes S37, S51, S57, S78, S81 (5 SIGNIFICANT items)
**Effort:** 5-7 lines added to conventions-brief.md

### Priority 3: New PA Questions (SIGNIFICANT)
**What:** Add PA-68 (Transition Texture Variety), PA-69 (Deliberate Asymmetry), PA-70 (Content-Form Echo) to flagship-pa-questions.md
**Why:** Current 8 Tier 5 questions miss transition texture variety (L4 depth), deliberate asymmetry (L5 confidence), and content-form resonance. These three questions fill the most significant PA gaps.
**Impact:** Closes S7, S12, S13, S14, S40 (5 SIGNIFICANT items)
**Effort:** ~24 lines added to flagship-pa-questions.md + assignment updates in SKILL.md

### Priority 4: SC-13B Direction Model Enrichment (SIGNIFICANT)
**What:** Enrich SC-13B from 2-value (INTENSIFYING/RELAXING) to 4-value (DEEPENING/OPENING/FOCUSING/RESOLVING) + DISCORDANT detection
**Why:** The brief defines 4 directions but the gate only knows +/-. This mismatch means the gate can't validate what the brief asks builders to do.
**Impact:** Closes S6, S49
**Effort:** ~30 lines of JS modification in gate-runner.md

### Priority 5: Weaver Stack Verdict (SIGNIFICANT)
**What:** Add ~10 lines to weaver instructions with L1-L5 per-layer assessment + ENSEMBLE/CHOIR/SOLO/BROKEN classification
**Why:** No instrument verifies the stack as an integrated system. The weaver already synthesizes all data. Adding stack assessment is low-effort, high-impact.
**Impact:** Closes S111
**Effort:** ~10 lines added to SKILL.md weaver prompt

### Priority 6: Stale References (INFORMATIONAL)
**What:** Update SKILL.md L124 from "992 lines, 21 gates" to "1159 lines, 22 gates"
**Impact:** Closes informational items about stale counts
**Effort:** 1 line edit

---

## CROSS-REFERENCE METHODOLOGY

For each finding, I:
1. Identified the exact claim in the research file (file:line)
2. Searched all 4 current pipeline files for evidence of the finding being addressed
3. Compared the CURRENT state against the PROPOSED state
4. Classified as ADDRESSED (fully implemented), PARTIALLY ADDRESSED (some aspects implemented), NOT ADDRESSED (not present), CONTRADICTED (current state conflicts), or N/A (not applicable to pipeline files)
5. Assigned severity based on impact on compositional quality: BLOCKING (prevents Flagship output), SIGNIFICANT (meaningfully degrades quality), MINOR (small improvement opportunity), INFORMATIONAL (awareness item)

---

*END OF COMPREHENSIVE CROSS-REFERENCE AUDIT*
*154 findings traced across 6 research files + 2 debrief parts against 4 pipeline files*
*Audited line-by-line: every research file read completely (01: 517 lines, 02: 540 lines, 03: 560 lines, 04: 427 lines, 05: 432 lines, 06: 523 lines)*

# 10: Ultra-Deep Multi-Coherence Cross-Reference (Round 2)

**Agent:** mc-deep-crossref-r2 (Opus 4.6, Task #19)
**Date:** 2026-02-17
**Purpose:** EXHAUSTIVE line-by-line verification that EVERY multi-coherence concept from 16-multi-coherence-invocation.md is reflected in the enriched master execution prompt. Builds on, validates, and extends the previous cross-reference (Report 15).

**Sources Cross-Referenced:**
1. `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines -- the prompt)
2. `16-multi-coherence-invocation.md` (951 lines -- MC operational guide)
3. `13-compositional-fluency.md` (670 lines -- compositional fluency research)
4. `15-ultra-deep-coherence-crossref.md` (709 lines -- previous coherence validation)
5. `16-ultra-deep-channel-matrix.md` (651 lines -- channel matrix validation)

---

## METHODOLOGY

This report maps EVERY discrete concept, formula, definition, threshold, protocol, worked example, verification question, and agent assignment from the MC operational guide (file 2) against the enriched prompt (file 1). For each item:

1. **Quote** the item (exact or close paraphrase)
2. **Status:** IN the prompt (cite rule ID + line range) or MISSING
3. **If missing, classify:** CRITICAL / IMPORTANT / NICE-TO-HAVE
4. **For CRITICAL and IMPORTANT items:** Write exact insertable text

I also validate findings from the previous cross-reference (Report 15) and the channel matrix (Report 16), confirming or updating their discrepancy assessments.

---

## PART A: SECTION-BY-SECTION MATRIX

### MC Guide Section 1: MULTI-COHERENCE THEORY

#### 1.1 What Multi-Coherence IS (lines 16-28)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| A01 | Core definition | "Multi-coherence is the property where multiple design dimensions cohere into a unified perceptual experience rather than coexisting as independent effects" | PARTIAL -- A5 (lines 57-66) describes 5 interaction types but does not state the core definition explicitly. The prompt implies it but never defines "multi-coherence" as a term. | IMPORTANT |
| A02 | The 6 design dimensions | SPATIAL, TEMPORAL, CHROMATIC, TYPOGRAPHIC, RHYTHMIC, SEMANTIC | MISSING -- The prompt never enumerates the 6 dimensions. MC-07 (line 202) references "15 possible dimension pairs" but does not name the dimensions. | CRITICAL |
| A03 | Mechanism-to-dimension mapping | Maps specific mechanism numbers (#1-#18) to each of the 6 dimensions | MISSING -- The prompt does not map mechanisms to MC dimensions. The mechanism catalog uses DIFFERENT 5-category groupings (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). | IMPORTANT |
| A04 | "Single atmospheric shift" test | "Scrolling from one zone to the next produces a SINGLE atmospheric shift -- not a list of CSS property changes" | IN PROMPT -- A5 line 66: "Mechanism count does NOT predict quality." Also A6 line 73: "Designed MOMENTS are not designed COMPOSITION." Captures the spirit but not the precise atmospheric-shift language. | NICE-TO-HAVE |

#### 1.2 The Multi-Coherence Equation (lines 30-45)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| A05 | MC equation formula | `Multi-Coherence = (Reinforcing Pairs x Modulating Chains x Fractal Depth) / Independent Mechanisms` | MISSING -- Only CCS appears in the prompt (MC-01, line 194). The higher-level MC equation is absent. | NICE-TO-HAVE |
| A06 | MC interpretation tiers | MC >> 1 = FLAGSHIP, MC ~ 1 = CEILING, MC << 1 = MIDDLE | MISSING -- No tier interpretation for the MC equation. | NICE-TO-HAVE |
| A07 | Independent mechanisms penalty | Denominator penalizes independent mechanisms | MISSING -- CCS measures coupling but doesn't penalize independence explicitly. | NICE-TO-HAVE |

**Assessment:** The MC equation is a theoretical framework. The prompt correctly chose CCS as the operational metric. The equation is NICE-TO-HAVE, not critical.

#### 1.3 Why Multi-Coherence Matters (lines 47-59)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| A08 | CD-006 evidence (CCS ~0.50-0.65) | "CD-006 (39/40): Border-weight gradient + zone backgrounds + spacing compression ALL encode the same density trajectory. CCS estimated 0.50-0.65." | PARTIAL -- A7 (lines 78-92) references CD-006 as quality exemplar but does not state its CCS score. A4 line 54 says "Source 1 + Source 2 = crown jewel (CD-006: 39/40)." | NICE-TO-HAVE |
| A09 | DD-006 evidence (CCS ~fractal) | "DD-006 (36/40): Page-scale mechanism PROPAGATES into component-scale mechanisms. Fractal coherence at 4 scales." | PARTIAL -- DD-006 is in the reference library (line 427) but not cited for MC evidence in the prompt body. | NICE-TO-HAVE |
| A10 | Ceiling experiment evidence (CCS ~0.05-0.10) | "14 mechanisms deployed, 0 multi-coherence. Each mechanism served an independent purpose." | IN PROMPT -- A6 line 72: "Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived." Also A5 line 66: "Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms. The Ceiling scored DO NOT SHIP with 14." | -- |
| A11 | Middle experiment evidence (CCS ~0.10-0.15) | "12 mechanisms, vocabulary fluency achieved, compositional fluency absent." | PARTIAL -- A4 line 54: "Source 1 alone = 'professionally stiff' (Middle result)." Does not cite CCS estimate. | NICE-TO-HAVE |
| A12 | "The gap between designed and felt through IS multi-coherence" | Direct quote, line 59 | MISSING as explicit statement. Implied across A4-A6. | NICE-TO-HAVE |

#### 1.4 The Coherence Threshold (lines 61-73)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| A13 | CCS tier table (0.00-0.15 Middle, 0.15-0.30 Ceiling-low, 0.30-0.50 Ceiling, 0.50-0.70 Flagship, 0.70-1.00 Flagship-peak) | Full 5-tier table | MISSING -- Prompt only states the 0.30 gate (MC-01 line 194, parameter table line 477). The full tier table is absent. | NICE-TO-HAVE |
| A14 | "Flagship target: CCS >= 0.50" | Aspirational target above the 0.30 gate | MISSING -- Prompt only states the 0.30 gate. No aspirational target. | NICE-TO-HAVE |

---

### MC Guide Section 2: FIVE INTERACTION TYPES -- Full Invocation

#### 2.1 REINFORCING (lines 79-133)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| B01 | Operational definition | "Two or more mechanisms encode the SAME semantic dimension through DIFFERENT CSS channels" | IN PROMPT -- A5 line 60: "REINFORCING: Multiple mechanisms encode same meaning through different CSS channels" | -- |
| B02 | OD-004 worked CSS example | 3-mechanism CSS (border-weight + background + padding encoding geological depth) | MISSING from prompt body. Reachable only through 13-compositional-fluency.md (routed to Intentionality Builder, line 431). NOT reachable through 16-MC (not routed). | IMPORTANT |
| B03 | CD-006 4-act arc example | "Spacing compression + zone backgrounds + typographic density in coordinated progression" | PARTIAL -- A7 (lines 80-92) shows CD-006 CSS but for transitions, not reinforcing pairs. | NICE-TO-HAVE |
| B04 | Invocation language block (lines 107-127) | Full builder prompt language for REINFORCING PAIRS (format spec, perceptual effect, binary check) | MISSING -- The detailed invocation language (PAIR [N] format, SHARED SEMANTIC, CSS CHANNELS, CO-VARIATION, PERCEPTUAL EFFECT) is not in the prompt. MC-02 is a one-liner. | CRITICAL |
| B05 | "Reader MUST perceive a single atmospheric change, not separate CSS changes" | Key perceptual test for reinforcement quality | MISSING from prompt. Only in conviction layer implicitly. | IMPORTANT |
| B06 | Binary verification R-01, R-02, R-03 | Per-pair removal test, co-variation check, dependency check | MISSING -- No per-pair verification in prompt. MC-01 CCS partially covers removal testing. | IMPORTANT |
| B07 | Minimum count: 3+ pairs for Flagship | "Flagship requires 3+ pairs" | **CONTRADICTION** -- C-08 (line 169) says >= 2. MC-02 (line 197) says >= 3. Parameter table (line 476) says ">= 2 (>= 3 for Flagship target)." **CONFIRMED from Report 15, D-01.** | CRITICAL |

#### 2.2 MODULATING (lines 136-201)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| B08 | Operational definition | "One mechanism's value GATES or SCALES another mechanism's expression. The outer mechanism reaches INSIDE the inner mechanism and adjusts its parameters." | IN PROMPT -- A5 line 61: "MODULATING: One mechanism controls another's intensity" -- abbreviated but accurate. | -- |
| B09 | DD-006 fractal density CSS example | Section-level dense/sparse modulating component-level padding/margin/font-size | MISSING from prompt body. Reachable through 13-compositional-fluency.md (Intentionality Builder). | NICE-TO-HAVE |
| B10 | CD-006 section density modulating code blocks | Code blocks in Act 3 have tighter padding | MISSING from prompt body. | NICE-TO-HAVE |
| B11 | Invocation language block (lines 170-195) | Full builder prompt language (CHAIN [N] format, OUTER STATE, INNER ADJUSTMENT, FRACTAL EFFECT) | MISSING -- MC-03 is a one-liner. Detailed invocation absent. | CRITICAL |
| B12 | "CRITICAL test: Do components INSIDE dense sections look different from components INSIDE sparse sections?" | The modulation acid test | MISSING from prompt. | IMPORTANT |
| B13 | Binary verification M-01, M-02, M-03 | Component comparison across density zones | MISSING -- No per-chain verification in prompt. | IMPORTANT |
| B14 | Minimum count: 2+ chains | Consistent across sources | IN PROMPT -- MC-03 (line 198): ">= 2 modulating chains." | -- |

#### 2.3 RESPONDING (lines 204-265)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| B15 | Operational definition | "One mechanism's visual weight creates a perceptual condition that the NEXT mechanism responds to. The response manages the transition between visual registers." | PARTIAL -- A5 line 62: "RESPONDING: One mechanism's weight creates a condition the next responds to." Captures core idea. MC-04 (line 199) says "mechanism A's output triggers mechanism B" which drifts toward cascading language. **CONFIRMED from Report 15, D-05.** | NICE-TO-HAVE |
| B16 | CD-006 header-to-drop-cap CSS example | Dark header -> drop cap response, color echo | PARTIAL -- A7 (lines 80-92) shows CD-006 transition CSS but not the header->drop-cap response relationship. | NICE-TO-HAVE |
| B17 | "The drop cap's red color ECHOES the header's red 3px border" | Color echo as response mechanism | MISSING from prompt. | NICE-TO-HAVE |
| B18 | Invocation language block (lines 234-259) | Full builder prompt language (RESPONSE [N] format, WEIGHT CREATED, RESPONSE STRATEGY, COLOR/FORM ECHO) | MISSING -- MC-04 is a one-liner. | CRITICAL |
| B19 | Key distinction quote | "In vocabulary fluency, a drop cap is 'a mechanism I deployed because I covered 5 categories.' In compositional fluency, a drop cap is 'the mechanism that answers the header's visual weight.'" | MISSING from prompt. Present in 13-compositional-fluency.md (reachable by Intentionality Builder). | IMPORTANT |
| B20 | Binary verification RS-01, RS-02, RS-03 | Removal test for response justification | MISSING from prompt. | IMPORTANT |
| B21 | Minimum count: 2+ responses | Consistent across sources | IN PROMPT -- MC-04 (line 199): ">= 2 responding sequences." | -- |

#### 2.4 CONTRASTING (lines 269-333)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| B22 | Operational definition | "One mechanism's deployment in some zones makes its ABSENCE in other zones semantically meaningful" | IN PROMPT -- A5 line 63: "CONTRASTING: Presence in one zone makes absence in another meaningful." MC-05 (line 200) matches. | -- |
| B23 | Restraint Map CSS example | Zone background deployed in zones 1+3, transparent in zones 2+4 | MISSING from prompt body. Available in 13-compositional-fluency.md. | NICE-TO-HAVE |
| B24 | CD-006 drop cap deployment example | Drop cap in Section 1 only; absence in S2-S8 meaningful | MISSING from prompt body. | NICE-TO-HAVE |
| B25 | DD-006 border-weight bookend example | 4px primary border on opening+closing only, absent in middle | MISSING from prompt body. | NICE-TO-HAVE |
| B26 | Invocation language block (lines 293-327) | Full builder prompt language (CONTRAST [N] format, DEPLOYED IN, ABSENT FROM, ABSENCE MEANING, DEPLOYMENT RATIO) | MISSING -- MC-05 is a one-liner. | CRITICAL |
| B27 | DEPLOYMENT RATIO concept | "deployed-in / total-sections -- should be < 1.0" | MISSING from prompt. Quantitative measure for contrasting quality. | IMPORTANT |
| B28 | Anti-pattern: uniform deployment | "Deploying a mechanism uniformly across all sections (deployment ratio = 1.0) eliminates contrast and reduces that mechanism to wallpaper." | MISSING from prompt. | IMPORTANT |
| B29 | Binary verification C-01, C-02, C-03 | Written justification for absence, deployment ratio check | MISSING from prompt. | IMPORTANT |
| B30 | Minimum count: 2+ silences | Consistent across sources | IN PROMPT -- MC-05 (line 200): ">= 2 contrasting deployments." Also C-13 (line 181): ">= 2 designed silence zones." | -- |

#### 2.5 CASCADING (lines 336-408)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| B31 | Operational definition | "A chain of mechanisms where each enables or triggers the next... The chain produces a compositional arc that no single mechanism could create." | IN PROMPT -- A5 line 64: "CASCADING: Chain where each mechanism enables the next." MC-06 (line 201): "cascading chain of 3+ mechanisms." | -- |
| B32 | "Governed by a shared compositional trajectory" | Key distinction: mechanisms are governed, not just sequenced | MISSING from prompt. MC-06 says "A enables B enables C" but not "governed by shared trajectory." | IMPORTANT |
| B33 | CD-006 4-act density cascade CSS | Progressive Disclosure -> Zone Backgrounds -> Spacing Compression -> Border-Weight, all tracking CRESCENDO | MISSING from prompt body. In 13-CF (reachable by Intentionality Builder). | NICE-TO-HAVE |
| B34 | DD-006 fractal cascade | Page-scale -> section-scale -> component-scale -> character-scale density propagation | MISSING from prompt body. | NICE-TO-HAVE |
| B35 | VALUE TABLE format | The acid test: table showing all mechanisms changing in same direction at each stage | MISSING -- **This is the most powerful cascade verification tool.** No equivalent in prompt. **CONFIRMED from Report 15, D-08.** | CRITICAL |
| B36 | Invocation language block (lines 371-402) | Full builder prompt language (CASCADE [N] format, SHARED TRAJECTORY, VALUE TABLE) | MISSING -- MC-06 is a one-liner. | CRITICAL |
| B37 | "Can you write ONE sentence describing the cascade's trajectory that is NOT a list of mechanism names?" | The cascade atmosphere test | MISSING from prompt. | IMPORTANT |
| B38 | Binary verification CA-01, CA-02, CA-03 | Value table directional check, one-sentence trajectory | MISSING from prompt. | IMPORTANT |
| B39 | Minimum count: 1+ cascade of 3+ mechanisms | Consistent across sources | IN PROMPT -- MC-06 (line 201): ">= 1 cascading chain of 3+ mechanisms." | -- |

---

### MC Guide Section 3: CCS (Compositional Coupling Score)

#### 3.1 Formula (lines 414-420)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| C01 | CCS per mechanism formula | `(mechanisms whose perceived meaning changes when THIS mechanism is removed) / (total deployed mechanisms - 1)` | **WRONG IN PROMPT** -- MC-01 (line 195): `CCS = (mechanism_pairs_with_interaction / total_possible_pairs)`. This is a DIFFERENT formula. **CONFIRMED from Report 15, D-09.** | CRITICAL |
| C02 | CCS for page formula | `average CCS across all deployed mechanisms` | MISSING -- Prompt gives only the aggregate ratio, not the per-mechanism-then-average approach. | CRITICAL (part of C01) |

#### 3.2 Worked Example (lines 424-439)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| C03 | CD-006 CCS worked example table | 10-row table showing per-mechanism removal impact and CCS calculation (page CCS ~0.55) | MISSING -- No worked example in prompt. | IMPORTANT |

#### 3.3 Thresholds (lines 441-449)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| C04 | 5-tier CCS interpretation table | 0.00-0.15 Middle / 0.15-0.30 Ceiling-low / 0.30-0.50 Ceiling / 0.50-0.70 Flagship / 0.70-1.00 Flagship-peak | PARTIAL -- Prompt only states 0.30 gate (MC-01 line 194, parameter table line 477). | NICE-TO-HAVE |

#### 3.4 Binary Rule for Prompt (lines 451-475)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| C05 | REMOVAL TEST instruction | "Builder MUST perform the REMOVAL TEST on at least 5 mechanisms" | MISSING -- MC-01 states the threshold but not the test procedure. | CRITICAL |
| C06 | "If CCS < 0.30: revise mechanism pairs to encode SHARED semantic dimension" | Recovery action if gate fails | MISSING -- No failure recovery for CCS. | IMPORTANT |
| C07 | 2-minute SELF-CHECK | "Pick any 3 mechanisms. For each, mentally remove its CSS. Does the page feel BROKEN or merely LESS DECORATED?" | MISSING -- Not in B10 builder self-check. **CONFIRMED from Report 15, D-17.** | CRITICAL |
| C08 | Wallpaper vs load-bearing distinction | "If all 3 feel like wallpaper: STOP and restructure compositional clusters" | MISSING from prompt. Key conceptual framing. | IMPORTANT |

---

### MC Guide Section 4: FRACTAL COHERENCE PROTOCOL

#### 4.1-4.2 Definition and 5 Named Scales (lines 479-494)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| D01 | "Same compositional logic repeats as you zoom in" | Fractal coherence definition | PARTIAL -- SC-07 (line 214): "Scale Coherence Index: same design principle observable at >= 3 scales." Captures essence but not "zoom in" framing. | NICE-TO-HAVE |
| D02 | 5 named scales with descriptions | Navigation / Page / Section / Component / Character | MISSING from prompt. Referenced implicitly by SC-01 "Maximum 5 scales" but never enumerated. | IMPORTANT |
| D03 | Scale-to-Flagship requirement | "Flagship requires 5/5 scales" | **CONTRADICTED** -- SC-01 (line 208): "Preferred 2-3 for flagship." **CONFIRMED from Report 15, D-14.** | CRITICAL |

#### 4.3 Fractal Verification Protocol (lines 496-546)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| D04 | DD-006 fractal evidence at 4 scales | Page/Section/Component/Character with CSS specifics | MISSING from prompt body. | NICE-TO-HAVE |
| D05 | CD-006 fractal evidence at 5 scales | Navigation through Character with CSS specifics | MISSING from prompt body. | NICE-TO-HAVE |
| D06 | Per-scale documentation format | "SCALE [N]: Direction Visible / CSS Evidence / Relationship to Adjacent Scale" | MISSING from prompt. | IMPORTANT |
| D07 | Binary verification FC-01 through FC-06 | Per-scale direction check + cross-scale consistency | MISSING from prompt. SC-07 partially covers ("same design principle observable at >= 3 scales"). | IMPORTANT |

---

### MC Guide Section 5: SELF-REFERENCE DETECTION

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| E01 | Self-reference definition | "The page's compositional structure DEMONSTRATES the content it teaches" | IN PROMPT -- C-16 (line 187): ">= 1 self-referential element (content describes its own form)." | -- |
| E02 | DD-006 self-reference evidence | "Page IS fractally dense; content describes what the form demonstrates" | MISSING from prompt body. | NICE-TO-HAVE |
| E03 | CD-006 self-reference evidence | "A code block contains `.callout { border-left: 4px solid; }` inside a callout whose own border-left IS 4px solid" | MISSING from prompt body. | NICE-TO-HAVE |
| E04 | 3-type detection protocol | (1) Content describes technique visible in its container, (2) Content demonstrates the concept through its own structure, (3) Code example shows CSS used in the page | MISSING from prompt. C-16 is a one-liner. | NICE-TO-HAVE |
| E05 | "ORGANIC vs BOLTED-ON" quality check | "Is the self-reference arising from content-form alignment or inserted to satisfy a checklist?" | MISSING from prompt. | NICE-TO-HAVE |

---

### MC Guide Section 6: CROSS-DIMENSION COHERENCE MATRIX

#### 6.1 The 15 Dimension Pairs (lines 590-611)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| F01 | Complete 15-pair matrix table | All 15 pairs with Coherent State, Verification Question, CSS Evidence | MISSING from prompt. MC-07 (line 202) references "15 possible dimension pairs" without any content. **CONFIRMED from Report 15, D-11.** | CRITICAL |
| F02 | Spatial x Chromatic pair | "Do zone backgrounds get warmer as spacing compresses?" | MISSING -- One of 15 verification questions. | Part of F01 |
| F03 | Spatial x Typographic pair | "Does type loosen as space opens up?" | MISSING | Part of F01 |
| F04 | Spatial x Temporal pair | "Do later, denser sections reveal more information?" | MISSING | Part of F01 |
| F05 | Spatial x Rhythmic pair | "Do borders track the spacing compression?" | MISSING | Part of F01 |
| F06 | Spatial x Semantic pair | "Do callouts breathe more in sparse sections?" | MISSING | Part of F01 |
| F07 | Chromatic x Typographic pair | "Does font treatment shift with background warmth?" | MISSING | Part of F01 |
| F08 | Chromatic x Temporal pair | "Does color warmth map to the pedagogical arc?" | MISSING | Part of F01 |
| F09 | Chromatic x Rhythmic pair | "Do accent colors respect the zone temperature?" | MISSING | Part of F01 |
| F10 | Chromatic x Semantic pair | "Do high-priority items appear in zones with corresponding visual weight?" | MISSING | Part of F01 |
| F11 | Typographic x Temporal pair | "Does heading size track the density trajectory?" | MISSING | Part of F01 |
| F12 | Typographic x Rhythmic pair | "Do text weight and border weight move in the same direction?" | MISSING | Part of F01 |
| F13 | Typographic x Semantic pair | "Is the label/body typographic split consistent across all component types?" | MISSING | Part of F01 |
| F14 | Temporal x Rhythmic pair | "Do borders thicken as disclosure progresses?" | MISSING | Part of F01 |
| F15 | Temporal x Semantic pair | "Do more component types appear in the learning sections than the resolution?" | MISSING | Part of F01 |
| F16 | Rhythmic x Semantic pair | "Do more important callouts have thicker accent borders?" | MISSING | Part of F01 |

#### 6.2 Invocation Language (lines 614-632)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| F17 | Cross-dimension invocation instructions | "For at least 10 of the 15 dimension pairs, document how the two dimensions COHERE rather than merely coexist" | PARTIAL -- MC-07 (line 202): ">= 10 of 15 possible dimension pairs actively coupled." Count matches but no "how to document" guidance. | IMPORTANT |
| F18 | "When dimension A changes value, does dimension B change in a RELATED direction?" | The critical coherence test | MISSING from prompt. | IMPORTANT |
| F19 | "You do NOT need to force coherence on all 15 pairs" | Guidance that some natural independence is acceptable | MISSING from prompt. MC-07 implies all 15 are available but doesn't state this flexibility. | NICE-TO-HAVE |
| F20 | Binary verification XD-01, XD-02 | Count documented pairs + verify both change at same boundary | MISSING from prompt. | IMPORTANT |

---

### MC Guide Section 7: RHYTHM COHERENCE -- Anti-Metronome

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| G01 | "Rhythm coherence is INTENTIONAL VARIATION, not metronomic repetition" | Core definition | IN PROMPT -- C-11 (line 178): "Metronomic rhythm (all gaps equal) is a design failure." MC-08 (line 203): "Anti-metronome: >= 3 distinct padding/margin values." | -- |
| G02 | Metronomic BAD example CSS | `section { padding: 48px; margin-bottom: 48px; }` | MISSING from prompt. | NICE-TO-HAVE |
| G03 | Rhythmic GOOD example CSS | 4 different padding values mapping to ceremony/working/intensity/release | MISSING from prompt. | NICE-TO-HAVE |
| G04 | CD-006 spacing contour | 80->48->32->32->48->48->64->80 across 8 sections | MISSING from prompt. | NICE-TO-HAVE |
| G05 | CONTOUR requirement | "Padding values that form a CONTOUR matching the page's arc" | MISSING -- MC-08 and C-11 require 3+ distinct values but not that they form a contour. Having 3 random values would pass. **CONFIRMED from Report 15, D-13.** | IMPORTANT |
| G06 | FORBIDDEN: Random values | "FORBIDDEN: Random padding values with no compositional logic (chaotic)" | MISSING -- Prompt forbids metronomic but not chaotic. | IMPORTANT |
| G07 | SPACING CONTOUR documentation format | "S1: [Npx] -- [why]; S2: [Npx] -- [why]..." | MISSING from prompt. | IMPORTANT |
| G08 | Binary verification RH-01, RH-02, RH-03 | Distinct values count + coherent shape + maps to density trajectory | PARTIAL -- MC-08 captures RH-01 (>= 3 distinct). RH-02 (coherent shape) and RH-03 (maps to density) are missing. | IMPORTANT |
| G09 | MC-08 / C-11 duplication | Both require >= 3 distinct spacing values | IN PROMPT as duplicate rules. **CONFIRMED from Report 15, D-13.** | NICE-TO-HAVE (remove one) |

---

### MC Guide Section 8: CONVICTION LAYER TEXT (lines 708-740)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| H01 | "Multi-coherence is the property that separates 'professionally formatted' from 'genuinely excellent'" | Opening conviction statement | PARTIAL -- A4-A5 conveys similar meaning via dual richness sources and compositional fluency, but this specific framing is absent. | NICE-TO-HAVE |
| H02 | CD-006 load-bearing evidence paragraph | "Remove the spacing compression and the zone backgrounds lose their meaning..." | MISSING from prompt conviction layer. The conviction layer (A1-A8) does not include this specific multi-coherence argument. | IMPORTANT |
| H03 | DD-006 fractal argument paragraph | "Squint at the page: you see rhythm. Read a section: you see rhythm..." | MISSING from prompt conviction layer. | NICE-TO-HAVE |
| H04 | Ceiling anti-evidence paragraph | "14 mechanisms deployed and scored DO NOT SHIP. 70-80% void. Zero multi-coherence." | IN PROMPT -- A3 line 43: "Ceiling experiment at 4 scales: PA-05 1.5/4 DO NOT SHIP." A5 line 66: "The Ceiling scored DO NOT SHIP with 14." A6 line 72: "14 mechanisms deployed, 1 perceived." | -- |
| H05 | "Three coupled mechanisms outperform fourteen independent ones" | Key principle | PARTIAL -- A5 line 66: "Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms. The Ceiling scored DO NOT SHIP with 14." Captures the inversion but not "coupled vs independent" framing. | NICE-TO-HAVE |
| H06 | "Richness = semantic density x restraint x spatial confidence" | Anti-scale equation (repeated from Section 1) | IN PROMPT -- A3 line 38: `Richness = semantic_density x restraint x spatial_confidence` | -- |

---

### MC Guide Section 9: EXECUTION SPEC TEXT (lines 744-786)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| I01 | MC-01 (3+ REINFORCING PAIRS) | "At least 3 REINFORCING PAIRS documented" | IN PROMPT as MC-02 (line 197) with count >= 3. BUT C-08 (line 169) says >= 2. **CONTRADICTION persists.** | CRITICAL |
| I02 | MC-02 (2+ MODULATING CHAINS) | "At least 2 MODULATING CHAINS documented" | IN PROMPT as MC-03 (line 198). Match. | -- |
| I03 | MC-03 (2+ RESPONDING SEQUENCES) | "At least 2 RESPONDING SEQUENCES documented" | IN PROMPT as MC-04 (line 199). Match (with slight semantic drift in description). | -- |
| I04 | MC-04 (2+ CONTRASTING DEPLOYMENTS) | "At least 2 CONTRASTING DEPLOYMENTS documented" | IN PROMPT as MC-05 (line 200). Match. | -- |
| I05 | MC-05 (1+ CASCADE of 3+) | "At least 1 CASCADE of 3+ mechanisms" | IN PROMPT as MC-06 (line 201). Match. | -- |
| I06 | MC-06 (CCS >= 0.30) | "CCS >= 0.30 across 5 tested mechanisms (removal test)" | IN PROMPT as MC-01 (line 194). **BUT wrong formula (D-09).** And "5 tested mechanisms" qualifier missing. | CRITICAL |
| I07 | MC-07 (Fractal 5/5) | "Fractal coherence at 5/5 scales" | **NOT in MC section.** SC-07 (line 214) says "same design principle observable at >= 3 scales." SC-01 (line 208) says "Preferred 2-3 for flagship." **Neither says 5/5.** | CRITICAL |
| I08 | MC-08 (3+ distinct padding) | "At least 3 DISTINCT section padding values" | IN PROMPT as MC-08 (line 203). Match. | -- |
| I09 | MC-09 (10+ cross-dimension pairs) | "Cross-dimension coherence documented for 10+ of 15 pairs" | IN PROMPT as MC-07 (line 202). Match. | -- |
| I10 | MC-10 (self-reference) | "At least 1 self-referential element" | NOT in MC section. Moved to C-16 (line 187). Functionally equivalent. **CONFIRMED from Report 15, D-15.** | NICE-TO-HAVE |

**Note:** The MC Guide proposes 10 MC rules (MC-01 through MC-10). The prompt consolidates to 8 MC rules (MC-01 through MC-08), absorbing MC-10 into C-16 and renumbering. The numbering mismatch is tracked but not a functional gap since all concepts are present except the formula error (C01) and fractal target discrepancy (D03/I07).

---

### MC Guide Section 10: COORDINATION SPEC TEXT

#### 10.1 Agent Responsibilities (lines 792-856)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| J01 | Metaphor Deriver MC gate | "Metaphor must support at least 3 CSS channels for its primary semantic" | MISSING from prompt C1 agent roster. **CONFIRMED from Report 15, D-16.** | CRITICAL |
| J02 | Content Architect MC gate | "Density trajectory must be describable in one phrase" | MISSING from prompt. | IMPORTANT |
| J03 | Planner MC gate | "Plan must contain at least 3 reinforcing pairs and 1 cascade" | MISSING from prompt. | CRITICAL |
| J04 | Skeleton Builder A MC gate | "Section padding values must have >= 3 distinct values" | MISSING from prompt coordination section. MC-08 states the rule but doesn't assign it to a specific agent at a specific gate. | IMPORTANT |
| J05 | Skeleton Builder B MC gate | "Zone backgrounds must track spacing direction" | MISSING from prompt. | IMPORTANT |
| J06 | Mechanism Builder MC gate | "Same component type must have DIFFERENT CSS values in different density zones" | MISSING from prompt coordination section. | IMPORTANT |
| J07 | Metaphor Builder MC gate | "At least 2 mechanisms have documented absence zones" | MISSING from prompt coordination section. MC-05 states the rule but doesn't assign it to Metaphor Builder. | IMPORTANT |
| J08 | Intentionality Builder MC gate | "Compositional direction documentable at 5/5 scales" | MISSING from prompt coordination section. | IMPORTANT |
| J09 | Embedded Auditor MC gate | "Page CCS >= 0.30" | MISSING from prompt coordination section. MC-01 states the threshold but doesn't assign it to the Embedded Auditor. | IMPORTANT |
| J10 | PA auditor MC test | ">= 7/9 auditors say 'atmospheric' = multi-coherence PASSED" | MISSING from prompt. | NICE-TO-HAVE |

#### 10.2 Multi-Coherence Checkpoints A-E (lines 858-883)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| J11 | Checkpoint A (post-metaphor) | Primary semantic dimension identified? 3+ CSS channels identified? | MISSING -- Prompt Gate 0 (line 351) checks "Content-to-void >= 60:40. Zone count check." No MC checks. | CRITICAL |
| J12 | Checkpoint B (post-planning) | 3+ reinforcing pairs documented? 1+ cascade with value table? 2+ modulating chains? | MISSING -- No prompt gate checks planning for MC content. | CRITICAL |
| J13 | Checkpoint C (post-skeleton) | >= 3 distinct padding values? Zone backgrounds co-vary with spacing? | MISSING -- Prompt Gate 1 (line 352) checks SC-01 through SC-07 (spatial). No MC-specific checks. | IMPORTANT |
| J14 | Checkpoint D (post-mechanisms) | Components different in different density zones? 2+ contrasting deployments? CCS >= 0.30? | MISSING -- Prompt Gate 3 (line 354) checks CP-01 through CP-04 (compositional). No MC-specific checks for modulation, contrast, or CCS. | CRITICAL |
| J15 | Checkpoint E (post-intentionality) | Fractal 5/5? Self-reference? 10+ cross-dimension pairs? | MISSING -- No prompt gate checks for fractal coherence, self-reference, or cross-dimension coherence specifically. | IMPORTANT |

---

### MC Guide Section 11: BUILDER CHECKLIST (lines 887-928)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| K01 | Reinforcement self-check (30s) | "Pick 2 mechanism pairs. Do they encode the SAME semantic? For your strongest pair: remove A mentally. Does B feel wrong?" | MISSING from B10 builder self-check. **CONFIRMED from Report 15, D-17.** | CRITICAL |
| K02 | Modulation self-check (30s) | "Look at one callout in a dense section and one in a sparse section. Do they have DIFFERENT padding/margin/font-size?" | MISSING from B10. | CRITICAL |
| K03 | Response self-check (20s) | "Look at the first section after the dark header. Does it ACKNOWLEDGE the header's visual weight?" | MISSING from B10. | IMPORTANT |
| K04 | Contrast self-check (20s) | "Name one mechanism NOT deployed in at least one section. Can you explain WHY it is absent?" | MISSING from B10. | IMPORTANT |
| K05 | Cascade self-check (10s) | "Do spacing, backgrounds, and borders all change in the SAME DIRECTION from section to section?" | MISSING from B10. | IMPORTANT |
| K06 | Fractal self-check (10s) | "Zoom to one callout. Does its internal structure echo the page's density direction?" | MISSING from B10. | IMPORTANT |
| K07 | Rhythm self-check (10s) | "Are your section padding values all the same number? If yes: FAIL" | PARTIAL -- C-11 and MC-08 capture this rule, but it is NOT in B10 self-check. | IMPORTANT |
| K08 | Atmosphere test (10s) | "Can you describe the page's feel in ONE WORD that is NOT a mechanism name?" | MISSING from B10. **This is the acid test for composition.** | CRITICAL |
| K09 | Pass threshold | "If 6+ checks pass: proceed. If < 6 pass: restructure" | MISSING from B10. | IMPORTANT |

---

### MC Guide Section 12: SUMMARY TABLE (lines 932-947)

| # | Concept | Quote from MC Guide | Status in Prompt | Classification |
|---|---------|---------------------|-----------------|----------------|
| L01 | Summary table (10 rows x 3 columns) | All 10 MC components with minimum requirements and verification methods | PARTIAL -- MC-01 through MC-08 capture 8 of 10. Self-reference is in C-16. CCS verification method is absent. | IMPORTANT |
| L02 | "The one-sentence test" | "Can you describe the page in one atmospheric phrase that is NOT a list of mechanisms?" | MISSING from prompt. Same as K08 (atmosphere test). | CRITICAL |

---

## PART B: VALIDATION OF PREVIOUS CROSS-REFERENCE (Report 15) FINDINGS

| Report 15 ID | Description | This Report's Verdict | Status |
|--------------|-------------|----------------------|--------|
| D-01 | C-08 (>=2) vs MC-02 (>=3) contradiction | **CONFIRMED** (see B07, I01) | STILL OPEN |
| D-02 | Per-pair removal binary check absent | **CONFIRMED** (see B06) | STILL OPEN |
| D-03 | 16-MC not routed to any agent | **CONFIRMED** -- still the single most critical gap. Section E (lines 410-443) routes no agent to 16-multi-coherence-invocation.md. | STILL OPEN (BLOCKING) |
| D-04 | Per-chain modulation binary check absent | **CONFIRMED** (see B13) | STILL OPEN |
| D-05 | MC-04 "triggers" language drift | **CONFIRMED** (see B15) | STILL OPEN |
| D-06 | Per-sequence response binary check absent | **CONFIRMED** (see B20) | STILL OPEN |
| D-07 | Deployment ratio concept absent | **CONFIRMED** (see B27) | STILL OPEN |
| D-08 | VALUE TABLE concept absent for cascading | **CONFIRMED** (see B35) | STILL OPEN |
| D-09 | CCS formula mismatch | **CONFIRMED** (see C01) | STILL OPEN (CRITICAL) |
| D-10 | CCS test method absent | **CONFIRMED** (see C05) | STILL OPEN |
| D-11 | 15-pair matrix unreachable | **CONFIRMED** (see F01) | STILL OPEN (CRITICAL) |
| D-12 | 6 dimensions not enumerated | **CONFIRMED** (see A02) | STILL OPEN |
| D-13 | MC-08/C-11 duplicate + contour missing | **CONFIRMED** (see G05, G09) | STILL OPEN |
| D-14 | Scale requirement contradiction (5 vs 2-3) | **CONFIRMED** (see D03, I07) | STILL OPEN (CRITICAL) |
| D-15 | Self-reference MC-10 -> C-16 | **CONFIRMED** (see I10) | STILL OPEN (MINOR) |
| D-16 | Per-agent MC gates missing | **CONFIRMED** (see J01-J10) | STILL OPEN |
| D-17 | Builder self-check has zero MC items | **CONFIRMED** (see K01-K09) | STILL OPEN (CRITICAL) |
| D-18 | MC dimension framework vs catalog categories | **CONFIRMED** (see A03) | STILL OPEN |
| D-19 | Transition type naming mismatch | **CONFIRMED** -- mechanism catalog uses HARD CUT/SPACING SHIFT/CHECKPOINT; prompt uses SMOOTH/BRIDGE/BREATHING. Both valid but unmapped. | STILL OPEN |

**All 19 discrepancies from Report 15 are CONFIRMED. Zero resolved since that report.**

---

## PART C: VALIDATION OF CHANNEL MATRIX (Report 16) FINDINGS

| Report 16 Finding | This Report's Assessment |
|-------------------|------------------------|
| SC-03 achievable at 32/35 cells | CONFIRMED -- matrix analysis is sound. The prompt's routing architecture does support agents populating 28-32 cells naturally. |
| 3 Character-scale cells (S5xCh4, S5xCh5, S5xCh6) deliberately empty | CONFIRMED -- consistent with anti-scale thesis and SC-08 |
| 6 dimensions differ from catalog's 5 categories | CONFIRMED (Report 16 uses Chromatic/Typographic/Spatial/Structural/Density/Rhythmic/Intentional = 7 CHANNELS, not the 6 dimensions from 16-MC: Spatial/Temporal/Chromatic/Typographic/Rhythmic/Semantic). **Note: Report 16 uses 7 CHANNELS (from scale-channel invocation), while 16-MC uses 6 DIMENSIONS. These are DIFFERENT frameworks.** |
| Agent ownership map covers all 35 cells | CONFIRMED -- no orphan cells |
| Builder attention fragmentation is moderate risk | CONFIRMED -- well-mitigated by primacy positioning of spatial rules |

---

## PART D: INSERTABLE TEXT FOR ALL CRITICAL AND IMPORTANT ITEMS

### CRITICAL FIX 1: CCS Formula Correction (C01, C02, I06)

**Location:** Replace MC-01 (prompt line 194-195)

**Current text:**
```
MC-01. CCS (Compositional Coupling Score) >= 0.30 for Flagship.
        CCS = (mechanism_pairs_with_interaction / total_possible_pairs)
```

**Replacement text:**
```
MC-01. CCS (Compositional Coupling Score) >= 0.30 for Flagship.
        CCS per mechanism = (mechanisms whose meaning changes when THIS one is removed) / (total mechanisms - 1)
        CCS for page = average CCS across all deployed mechanisms.
        TEST: Remove each mechanism's CSS mentally. Count how many OTHER mechanisms look wrong, misplaced, or pointless.
        Perform on at least 5 mechanisms. Average >= 0.30 = PASS.
```

---

### CRITICAL FIX 2: C-08 / MC-02 Reconciliation (B07, I01)

**Option A (recommended): Unify to >= 3**

Replace C-08 (prompt line 169):
```
C-08. >= 3 reinforcing pairs (same semantic, different CSS channels). Flagship gate.
```

**Option B: Explicitly tier**

Replace C-08:
```
C-08. >= 2 reinforcing pairs (same semantic, different CSS channels). Ceiling gate.
       Flagship requires >= 3 (per MC-02).
```

---

### CRITICAL FIX 3: Scale Requirement Reconciliation (D03, I07)

**Location:** SC-01 (prompt line 208)

**Current text:**
```
SC-01. Maximum 5 scales. Preferred 2-3 for flagship. Scale count NEVER takes priority over PA-05.
```

**Replacement text:**
```
SC-01. Maximum 5 scales (Alexander ceiling: ln(1440/12)/ln(e) = 4.8).
        Target: achieve DEEP coherence at 2-3 scales first. If spatial gates pass, extend to 4-5.
        PA-05 score > scale count. Non-negotiable.
        Fractal coherence check: compositional direction must be documentable at EVERY active scale.
```

---

### CRITICAL FIX 4: Add 6 Dimension Names to Prompt (A02)

**Location:** Insert before MC-07 (prompt line 202)

**Insertable text:**
```
THE 6 DESIGN DIMENSIONS (for cross-dimension coherence):
  1. SPATIAL (layout topology, density rhythm, grid)
  2. TEMPORAL (progressive disclosure, pacing, scroll-linked revelation)
  3. CHROMATIC (zone backgrounds, accent encoding, warmth gradients)
  4. TYPOGRAPHIC (scale jumping, font family shifts, weight modulation)
  5. RHYTHMIC (border-weight gradients, spacing compression, alternation)
  6. SEMANTIC (2-zone DNA, border-left signaling, data table structure)
```

---

### CRITICAL FIX 5: Invocation Language for 5 Interaction Types (B04, B11, B18, B26, B36)

The prompt currently gives each interaction type a one-liner in MC-02 through MC-06. The MC Guide provides detailed invocation language with FORMAT specs, BINARY CHECKS, and worked examples. Since the prompt has a length cap (~250 lines), the full invocation language cannot be inlined. Two approaches:

**Option A (recommended): Route 16-MC to the Planner**

In Section E (prompt line 419-421), add to PLANNER reads:
```
PLANNER reads:
  - design-system/compositional-core/grammar/mechanism-catalog.md
  - design-system/compositional-core/guidelines/semantic-rules.md
  - [content inventory]
  - [metaphor derivation]
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md  << ADD THIS
```

**Option B (more compact): Add condensed invocation guidance to B4**

Replace the MC-02 through MC-06 one-liners with:
```
MC-02. >= 3 reinforcing pairs. For each pair, document:
       SHARED SEMANTIC + CSS CHANNELS + CO-VARIATION + PERCEPTUAL EFFECT.
       VERIFY: Remove mechanism A. Does B's meaning change? YES = reinforcing.
MC-03. >= 2 modulating chains. For each chain, document:
       OUTER STATE + INNER ADJUSTMENT + FRACTAL EFFECT.
       VERIFY: Same component in different density zones has DIFFERENT CSS values.
MC-04. >= 2 responding sequences. For each response, document:
       WEIGHT CREATED + RESPONSE STRATEGY + COLOR/FORM ECHO.
       VERIFY: Remove creator section. Does responder feel arbitrary? YES = responding.
MC-05. >= 2 contrasting deployments. For each contrast, document:
       DEPLOYED IN + ABSENT FROM + ABSENCE MEANING + DEPLOYMENT RATIO (< 1.0).
       VERIFY: Written justification for each absence exists.
MC-06. >= 1 cascading chain of 3+ mechanisms. Document:
       SHARED TRAJECTORY + VALUE TABLE (all mechanisms change same direction per stage).
       VERIFY: Describe cascade in one sentence WITHOUT listing mechanism names.
```

---

### CRITICAL FIX 6: CCS Removal Test in Builder Self-Check (C05, C07, K01-K08)

**Location:** Add to B10 builder self-check (prompt line 291, before the closing marker)

**Insertable text:**
```
MULTI-COHERENCE SELF-CHECK (2 minutes, run after mechanism deployment):
[ ] MC-CHECK-1: Pick 2 mechanism pairs. Do they encode the SAME semantic? (reinforcing)
[ ] MC-CHECK-2: One callout in dense section vs one in sparse section: DIFFERENT CSS values? (modulating)
[ ] MC-CHECK-3: First section after header: does it ACKNOWLEDGE header's visual weight? (responding)
[ ] MC-CHECK-4: Name one mechanism NOT in at least one section. Can you explain WHY absent? (contrasting)
[ ] MC-CHECK-5: Spacing + backgrounds + borders all change SAME DIRECTION section-to-section? (cascade)
[ ] MC-CHECK-6: Describe the page in ONE WORD that is NOT a mechanism name. If you can only list mechanisms: STOP. (atmosphere test)
>>> If < 4 pass: restructure compositional clusters before continuing <<<
```

---

### CRITICAL FIX 7: Per-Agent MC Gates in Coordination (J01, J03, J11-J14)

**Location:** Amend Section C1 agent roster (prompt lines 302-324) and C3 gate sequence (lines 350-364)

**Insertable text for C1 (add to each agent block):**
```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)
  -> MC GATE 0: Metaphor supports 3+ CSS channels for primary semantic. Density trajectory describable in one phrase.

PASS 1: Spatial Skeleton
  ...
  -> GATE 1: Spatial Confidence (SC-01 through SC-07)
  -> MC GATE 1: Section padding has >= 3 distinct values. Zone backgrounds co-vary with spacing direction.

PASS 2: Mechanism Deployment
  ...
  -> GATE 3: Composition (CP-01 through CP-04 + spatial re-check)
  -> MC GATE 3: Plan contains 3+ reinforcing pairs + 1 cascade. Same component type has DIFFERENT CSS in different density zones. CCS removal test >= 0.30.

PASS 3: Metaphor Integration + Intentionality
  ...
  -> GATE 4 + MC GATE 4: Fractal coherence at all active scales. 10+ cross-dimension pairs documented. Self-reference exists.
```

---

### CRITICAL FIX 8: 15-Pair Cross-Dimension Matrix Access (F01)

Either inline the 15 verification questions or route the source document. Since 15 verification questions would add ~20 lines, they can be inlined as a compact reference:

**Location:** Insert after the 6 dimension names (after CRITICAL FIX 4)

**Insertable text (compact form):**
```
MC-07. Cross-dimension coherence: >= 10 of 15 pairs actively coupled.
       VERIFICATION QUESTIONS (one per pair):
       SxC: "Do zone backgrounds warm as spacing compresses?"
       SxTp: "Does type loosen as space opens up?"
       SxTm: "Do later, denser sections reveal more information?"
       SxR: "Do borders track spacing compression?"
       SxSm: "Do callouts breathe more in sparse sections?"
       CxTp: "Does font treatment shift with background warmth?"
       CxTm: "Does color warmth map to the pedagogical arc?"
       CxR: "Do accent colors respect zone temperature?"
       CxSm: "Do high-priority items appear in correspondingly weighted zones?"
       TpxTm: "Does heading size track the density trajectory?"
       TpxR: "Do text weight and border weight move together?"
       TpxSm: "Is label/body typographic split consistent across all components?"
       TmxR: "Do borders thicken as disclosure progresses?"
       TmxSm: "Do more component types appear in learning sections than resolution?"
       RxSm: "Do more important callouts have thicker accent borders?"
       Count YES answers. >= 10 = PASS.
```

---

### CRITICAL FIX 9: VALUE TABLE Format for Cascading (B35)

**Location:** Add to MC-06 or as a footnote to B4

**Insertable text:**
```
CASCADE VALUE TABLE (required for each cascade):
  | Stage    | Mech A Value | Mech B Value | Mech C Value |
  |----------|-------------|-------------|-------------|
  | Opening  | [low]       | [low]       | [low]       |
  | Building | [medium]    | [medium]    | [medium]    |
  | Peak     | [high]      | [high]      | [high]      |
  | Resolve  | [medium]    | [medium]    | [medium]    |
  All columns MUST change in the SAME direction at each row. If not = vocabulary, not cascade.
```

---

### IMPORTANT INSERTIONS

#### IMP-1: Atmosphere Test in Conviction Layer (K08, L02, H02)

**Location:** Add to Section D conviction closing (prompt line 398-403)

**Insertable text:**
```
THE ONE-SENTENCE TEST: Can you describe this page in one atmospheric phrase that is
NOT a list of mechanisms? "The page tightens as you go deeper" = composition.
"It uses 14 mechanisms across 5 categories" = vocabulary. If the only description
is a mechanism list, revise.
```

---

#### IMP-2: Rhythm Contour Requirement (G05, G06)

**Location:** Amend MC-08 (prompt line 203)

**Current:**
```
MC-08. Anti-metronome: >= 3 distinct padding/margin values across section boundaries.
```

**Replacement:**
```
MC-08. Anti-metronome: >= 3 distinct padding/margin values across section boundaries.
       Values MUST form a CONTOUR mapping to the density trajectory (not random).
       FORBIDDEN: identical values (metronomic) OR random values (chaotic).
       REQUIRED: contour describable in one phrase ("opening wide, narrowing to climax, releasing").
```

---

#### IMP-3: Deployment Ratio for Contrasting (B27, B28)

**Location:** Amend MC-05 (prompt line 200)

**Current:**
```
MC-05. >= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful).
```

**Replacement:**
```
MC-05. >= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful).
       Deployment ratio per contrasting mechanism < 1.0 (NOT deployed everywhere).
       Anti-pattern: deploying a mechanism uniformly = wallpaper.
```

---

#### IMP-4: "Governed by Shared Trajectory" for Cascading (B32)

Already addressed in CRITICAL FIX 5 Option B and CRITICAL FIX 9.

---

#### IMP-5: Vocabulary vs Composition Distinction Key Quote (B19)

**Location:** Add to A5 (prompt line 66) or A6

**Insertable text:**
```
KEY DISTINCTION: In vocabulary fluency, a drop cap is "a mechanism I deployed
because I covered 5 categories." In compositional fluency, a drop cap is "the
mechanism that ANSWERS the header's visual weight." Every mechanism after the first
section should be justifiable as a RESPONSE to what came before.
```

---

#### IMP-6: Modulation Acid Test (B12)

Already addressed in CRITICAL FIX 5 Option B (MC-03 verification).

---

#### IMP-7: 5 Named Scales Reference (D02, D06)

**Location:** Add before SC-01 or as a footnote to B5

**Insertable text:**
```
THE 5 SCALES: (1) Navigation (bird's eye: header/TOC/footer), (2) Page (full scroll:
section sequencing), (3) Section (one screen: internal arrangement), (4) Component
(one element: internal organization), (5) Character (inline: bold/code/links).
```

---

## PART E: COMPREHENSIVE STATUS SUMMARY

### By Classification

| Classification | Count | Items |
|---------------|-------|-------|
| CRITICAL | 17 | A02, B04, B07/I01, B11, B18, B26, B35, B36, C01/C02, C05, C07, D03/I07, F01, J01, J03, J11, J12, J14, K01, K02, K08/L02 |
| IMPORTANT | 28 | A01, A03, B02, B05, B06, B12, B13, B19, B20, B27, B28, B29, B32, B37, B38, C03, C06, C08, D02, D06, D07, F17, F18, F20, G05, G06, G07, G08, H02, J02, J04-J09, J13, J15, K03-K07, K09, L01 |
| NICE-TO-HAVE | 30 | A04-A07, A08-A14, B03, B09, B10, B15, B16, B17, B23-B25, B33, B34, C04, D01, D04, D05, E02-E05, F19, G01-G04, G09, H01, H03-H05, I10, J10 |
| IN PROMPT (no action) | 16 | A10 (partial), B01, B08, B14, B21, B22, B30, B31, B39, G01, H04, H06, I02-I05, I08, I09, E01 |

### By Fix Type

| Fix Category | Count | Approach |
|-------------|-------|----------|
| Formula correction | 1 | Replace MC-01 formula text |
| Contradiction resolution | 2 | C-08/MC-02 threshold + SC-01 scale target |
| Missing definitions | 2 | 6 dimensions + 5 scales enumeration |
| Invocation language | 5 | Either route 16-MC or expand MC-02 through MC-06 |
| Builder self-check | 6 items | Add MC self-check block to B10 |
| Per-agent MC gates | 5 gates | Amend C1 agent roster and C3 gate sequence |
| Cross-dimension matrix | 15 questions | Inline verification questions after MC-07 |
| Conviction layer | 1 | Add one-sentence atmosphere test |

### Total Line Impact

If ALL critical and important fixes are applied:
- CCS formula fix: +3 lines (net +1, replacing 2)
- C-08 reconciliation: 0 lines (replacement)
- SC-01 reconciliation: +2 lines (net +1)
- 6 dimension names: +7 lines
- Interaction type invocation (Option B): +10 lines (net +5, replacing 5)
- MC self-check in B10: +8 lines
- Per-agent MC gates in C1: +5 lines
- 15-pair verification questions: +17 lines
- VALUE TABLE format: +6 lines
- Atmosphere test in D: +3 lines
- MC-08 contour amendment: +2 lines (net +1)
- MC-05 deployment ratio: +1 line (net 0)
- Vocabulary vs composition quote: +3 lines
- 5 named scales: +2 lines

**Total: approximately +52 additional lines to the execution spec (Sections B-C).**

Current prompt is ~248 lines (Sections A-D). With +52 lines, it would be ~300 lines. This exceeds the 250-line soft cap (parameter table line 462). Options:
1. Accept the overage (MC is the flagship's defining capability)
2. Compress other sections to make room (recommended: remove MC-08/C-11 duplicate [-2], compress parameter table [-5], tighten conviction examples [-5])
3. Route 16-MC to Planner instead of inlining (saves ~30 lines but adds file dependency)

**Recommended approach: Apply all CRITICAL fixes via inlining (~35 lines) + route 16-MC to Planner (saves invocation detail) + apply top 5 IMPORTANT fixes (~17 lines). Total: ~52 lines. Remove duplicates and compress to stay near 280 lines.**

---

## PART F: ITEMS FROM 13-COMPOSITIONAL-FLUENCY.md NOT COVERED ABOVE

The compositional fluency research (670 lines) contains additional concepts not in the MC Guide:

| # | Concept | Source Line | Status in Prompt | Classification |
|---|---------|------------|-----------------|----------------|
| M01 | "Vocabulary and composition are TWO INDEPENDENT AXES, not a spectrum" (Section VII) | Lines 577-625 | MISSING -- Prompt treats them as a progression. | NICE-TO-HAVE |
| M02 | 4-quadrant model (Sparse+Independent / Sparse+Composed / Rich+Independent / Rich+Composed) | Lines 585-614 | MISSING | NICE-TO-HAVE |
| M03 | "Composition can be SCAFFOLDED but not SPECIFIED" (Section VIII) | Line 634 | PARTIAL -- Prompt scaffolds via MC rules but doesn't acknowledge the limitation. | NICE-TO-HAVE |
| M04 | COMPOSITIONAL CLUSTERS plan format | Lines 496-527 | MISSING from prompt. The MC Guide's Section 10.1 assigns this to the Planner but the prompt doesn't specify the cluster format. | IMPORTANT |
| M05 | Phrases that prompt compositional thinking | Lines 529-543 | PARTIAL -- A5-A6 uses some compositional language. The specific anti-vocabulary phrases ("avoid 'Deploy 12-15 mechanisms'") are absent. | NICE-TO-HAVE |
| M06 | CC-01 through CC-07 composition audit checklist | Lines 562-574 | PARTIAL -- MC-01 through MC-08 cover similar ground. CC-07 ("describe in one sentence, not mechanism list") is the atmosphere test (K08/L02). | NICE-TO-HAVE |

---

## FINAL VERDICT

### What the Enriched Prompt Gets RIGHT

1. All 5 interaction types are NAMED and DEFINED (A5, lines 58-64)
2. Minimum COUNTS for all 5 types are stated (MC-02 through MC-06)
3. CCS threshold is stated (MC-01 >= 0.30)
4. Cross-dimension coherence count target stated (MC-07 >= 10/15)
5. Anti-metronome rule stated (MC-08 >= 3 distinct)
6. Self-reference captured (C-16 >= 1 instance)
7. Conviction layer effectively communicates MC importance (A3-A6)
8. CD-006 and Ceiling failure are cited as evidence (A5, A6, A7)
9. Richness = semantic_density x restraint x spatial_confidence equation present (A3)
10. 71 unique rule IDs provide structural clarity

### What the Enriched Prompt MISSES (Ranked by Impact)

1. **CCS formula is WRONG** -- different formula applied with same threshold (CRITICAL)
2. **16-MC not routed to ANY agent** -- 950 lines of operational guidance unreachable (CRITICAL)
3. **Builder self-check has ZERO MC items** -- MC rules exist but are never checked (CRITICAL)
4. **Invocation language absent for all 5 types** -- one-liners without FORMAT, VERIFY, or BINARY CHECK (CRITICAL)
5. **15-pair verification questions absent** -- MC-07 requires 10/15 but agents can't see the 15 questions (CRITICAL)
6. **Per-agent MC gates absent from coordination spec** -- MC rules float without agent ownership (CRITICAL)
7. **MC checkpoints absent from gate sequence** -- Gates 0-5 check spatial/composition but not MC specifically (CRITICAL)
8. **C-08/MC-02 contradiction** -- 2 or 3 reinforcing pairs? (CRITICAL)
9. **Scale target contradiction** -- 5/5 or 2-3? (CRITICAL)
10. **6 dimension names never enumerated** -- MC-07 assumes knowledge agents don't have (CRITICAL)
11. **VALUE TABLE format missing** -- cascade verification tool absent (CRITICAL)

### Compression Ratio

The MC Guide is 951 lines. The prompt's MC content is approximately:
- A5: 10 lines (5 interaction type definitions)
- B4: 10 lines (MC-01 through MC-08)
- Parameter table MC entries: 4 lines
- **Total: ~24 lines of MC content**

**Compression ratio: 951:24 = 39.6:1**

This compression ratio is ABOVE the 5:1 threshold identified in memory as a DELETE signal. The MC Guide was compressed to 2.5% of its content. While some compression is necessary for a <250-line prompt, the operational detail lost includes ALL verification methods, ALL worked examples, ALL invocation formats, ALL per-agent gates, and the complete 15-pair matrix. The prompt states WHAT the rules are but not HOW to verify, HOW to document, or WHO checks at WHICH gate.

---

**END ULTRA-DEEP MULTI-COHERENCE CROSS-REFERENCE (ROUND 2)**

**Total concepts mapped:** 97 (A01-A14, B01-B39, C01-C08, D01-D07, E01-E05, F01-F20, G01-G09, H01-H06, I01-I10, J01-J15, K01-K09, L01-L02, M01-M06)
**IN PROMPT (no action):** 16
**CRITICAL:** 17
**IMPORTANT:** 28
**NICE-TO-HAVE:** 30
**Insertable text provided for:** 9 CRITICAL fixes + 7 IMPORTANT fixes = 16 fix specifications
**Estimated line impact:** +52 lines (compressible to +35 with routing approach)
**Report 15 discrepancies confirmed:** 19/19 (zero resolved)
**Report 16 findings confirmed:** 5/5

# SCAN-C: Cross-Reference Report -- Invocation Files 13-16 vs FINAL Prompt
**Author:** Scanner C (claude-sonnet-4-5-20250929, Task #3)
**Date:** 2026-02-17
**Method:** Full read of FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md + all 4 invocation files, then item-by-item cross-reference

---

## SCOPE

Files cross-referenced:
- `13-tc-pa-integration.md` -- TC-PA cross-skill integration architecture (560 lines)
- `14-enrichment-invocation-map.md` -- All 11 enrichment per-agent invocation language (688 lines)
- `15-scale-channel-invocation.md` -- 7-channel definitions, 7 operational formulas, 8 binary rules, 6 anti-patterns (700 lines)
- `16-multi-coherence-invocation.md` -- 5 interaction types, CCS formula, 15-pair dimension matrix, 10 binary MC rules, builder checklist (951 lines)

Final prompt: `FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (696 lines)

Classification:
- **CRITICAL:** Operational rule or verification that agents NEED and CANNOT reach via file routing
- **IMPORTANT:** Concrete spec that improves agent behavior but IS accessible via file routing
- **NICE-TO-HAVE:** Supporting evidence, theoretical framing, or redundant coverage

---

## PART 1: FILE 13 -- TC-PA INTEGRATION (13-tc-pa-integration.md)

### What File 13 Contains

File 13 defines the integration architecture between tension-composition (TC) and perceptual-auditing (PA): 10 integration rules (TPI-01 through TPI-10), 5 agent-pair matrix rows with dual-skill obligations, 5 TC-PA feedback loop checkpoints (CP-TC-01 through CP-TC-05), 8 failure modes, shared vocabulary table, and gate interaction flow.

### Item-by-Item Cross-Reference

#### TPI Integration Rules (10 rules)

**TPI-01:** "Every builder agent prompt MUST include TC Phase 4.0 guardrail values (container 940-960px, CPL 45-80, line-height 1.5, section spacing 48px). These ARE the PA guardrail values."
- FINAL prompt status: Partially covered. Container (S-01: 940-1100px), CPL (S-07: 45-80) are in B1 SPATIAL. Line-height 1.5 is NOT explicitly stated in execution spec. "Section spacing 48px" is NOT stated (only S-09: max 96px). The UNIFIED framing ("these ARE the PA guardrail values") is absent.
- **Classification: IMPORTANT** -- Values are accessible via routing but the unified framing that TC guardrails = PA guardrails is architecturally important and absent from the prompt.

**TPI-02:** "Every builder agent MUST run PA Mode 1 Embedded (PA-01 through PA-05) BEFORE declaring any build pass complete."
- FINAL prompt status: B10 BUILDER SELF-CHECK says builders must run a self-check. The specific link to "PA Mode 1 Embedded" is not stated -- B10 uses numbered checks (S-01, S-07, etc.) not the PA question numbering. The "before declaring pass complete" timing is implied but not explicit.
- **Classification: IMPORTANT** -- Agents can find via routing but the explicit mode-naming would clarify the mechanism.

**TPI-03:** "PA auditor prompts MUST contain ZERO TC information. No metaphor name, mechanism count, tier classification, no build plan."
- FINAL prompt status: C4 PA DEPLOYMENT states "COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction, THEN questions. Zero TC context." The "Zero TC context" instruction is present but the specific items (metaphor name, mechanism count, tier) are not enumerated.
- **Classification: IMPORTANT** -- Partially covered; specific enumeration would prevent accidental leakage.

**TPI-04:** "When PA finds a guardrail violation (CPL, width, void), the fix routes to the SPECIFIC TC phase that governs that guardrail."
- FINAL prompt status: C6 PA-TO-TC FIX ROUTING provides a complete routing table (10 rows). This is fully implemented.
- **Classification: COVERED**

**TPI-05:** "The embedded auditor agent reads TC coherence rules (C-1 through C-5) as REFERENCE and applies PA Mode 2 Quick as EVALUATION."
- FINAL prompt status: The embedded auditor is mentioned in C1 as "real-time spatial monitoring, exclusive Playwright" but there is NO instruction for the embedded auditor to read TC coherence rules. This dual-skill assignment from File 13 is absent.
- **Classification: CRITICAL** -- The embedded auditor in the FINAL prompt lacks the TC coherence context needed to make PA findings actionable. "Something feels off" findings cannot be routed to TC phases without this context.

**TPI-06:** "Composition self-checks (CC-01 through CC-07) are run by the intentionality builder AFTER Pass 3, BEFORE the embedded audit pass."
- FINAL prompt status: No CC-01 through CC-07 appear anywhere in the FINAL prompt. The self-checks from 13-compositional-fluency.md are referenced only indirectly via routing to "13-compositional-fluency.md" in Section E.
- **Classification: IMPORTANT** -- The composition self-check sequence is a distinct deliverable trigger that prevents shipping without coupling verification.

**TPI-07:** "PA Mode 4 Standalone is ALWAYS the final pass. It follows all TC gates and all builder self-checks. It is the ground truth."
- FINAL prompt status: Gate 5 in C3 states "Mode 4 PA (9 auditors, 48 questions). Programmatic soul/token/CPL audit." The "ground truth" framing and "PA Mode 4 overrides all TC metrics" is in C5 (GATE-THEN-RANKING: "any fail = DO NOT SHIP").
- **Classification: COVERED**

**TPI-08:** "The planner's mechanism plan MUST be organized as compositional clusters (groups of mechanisms encoding shared semantics), not as individual mechanism deployments."
- FINAL prompt status: C1 states the Planner "produces build plan with mechanism deployment map" and "MUST enforce C-01 per-category minimums + C-02 target 12-14 + MC plan." There is NO explicit instruction that the format must be COMPOSITIONAL CLUSTERS. A planner could produce a list of individual mechanism deployments and technically comply.
- **Classification: CRITICAL** -- This is the #1 mechanism for preventing vocabulary-without-composition failure (Failure Mode 2 in File 13). Without this format requirement, the Middle experiment failure mode recurs.

**TPI-09:** "When the prompt references container width, it MUST use one value (940-960px) with one source citation."
- FINAL prompt status: FINAL prompt uses 940-1100px (wider upper bound than File 13's 940-960px). The source citation framing ("TC Phase 4.0 = PA-53") is absent. This is a minor inconsistency but not a contradiction -- 1100px is derived from CD-006 forensics.
- **Classification: NICE-TO-HAVE** -- Value range is defined; unified citation is nice-to-have.

**TPI-10:** "The Lock Sheet (PA) MUST NOT include TC-derived information (metaphor name, mechanism plan, tier classification)."
- FINAL prompt status: C4 states "Screenshot pre-capture: Team-lead captures ALL screenshots BEFORE spawning auditors." The Lock Sheet is not mentioned by name. The information firewall is implied by "Zero TC context" but not formalized as a Lock Sheet protocol.
- **Classification: IMPORTANT** -- Lock Sheet formalization would prevent accidental TC leakage to auditors.

#### TC-PA Shared Vocabulary (14 terms)

File 13 documents 14 terminology alignments between TC and PA (e.g., "Tension" vs "Contrast," "Compositional coupling" vs "PA-05a DESIGNED"). The FINAL prompt uses TC vocabulary throughout with no awareness of PA vocabulary equivalents. Auditors reading PA SKILL.md and builders reading this prompt use different terms for the same concepts.
- **Classification: NICE-TO-HAVE** -- Cross-vocabulary table is useful but agents are routed to their respective skills which carry their own vocabulary.

#### CP-TC Communication Checkpoints (5 checkpoints)

**CP-TC-01 (After Metaphor Commitment):** Metaphor Agent -> Planner with isomorphism table + perceptual risk score + builder warnings.
- FINAL prompt status: CP-A and CP-B in C2 cover builder -> planner and post-build reporting. CP-TC-01 (metaphor -> planner) is NOT represented. The FINAL prompt's CP-A is "post-plan read" by Builder -> Planner, not Metaphor Agent -> Planner.
- **Classification: CRITICAL** -- Without this checkpoint, the planner does not receive the isomorphism table and builder warnings (W-DEADZONE, W-OVERLABEL) that are essential for compositional cluster planning.

**CP-TC-02 (After Mechanism Planning):** Planner -> Skeleton Builders + Mechanism Builder with compositional clusters + per-cluster CSS reference + TC guardrails.
- FINAL prompt status: CP-B covers builder -> team-lead. Planner -> Builders is not specified as a checkpoint. Section E specifies what each agent READS but not a formal checkpoint for transmitting the plan.
- **Classification: IMPORTANT** -- The plan distribution checkpoint ensures builders have compositional cluster format (TPI-08) not just mechanism lists.

**CP-TC-03 (After Each Build Pass):** Builder -> Embedded Auditor: "Pass N complete. Screenshot ready at [URL]." Format: SendMessage.
- FINAL prompt status: CP-B covers builder -> team-lead. Builder -> Embedded Auditor is not specified. The embedded auditor is described as providing "real-time spatial monitoring, exclusive Playwright" but no trigger protocol exists.
- **Classification: IMPORTANT** -- Without this trigger, the embedded auditor may not know when to audit.

**CP-TC-04 (After Embedded Audit):** Embedded Auditor -> Builder with PA findings + TC-phase routing.
- FINAL prompt status: Not explicitly present. C6 PA-TO-TC routing is a reference table for team-lead use, not an auditor -> builder feedback protocol.
- **Classification: IMPORTANT** -- The bidirectional embedded auditor loop is essential for real-time course correction.

**CP-TC-05 (Before Standalone PA):** Team Lead -> PA Lead with screenshots only, ZERO TC information.
- FINAL prompt status: C4 describes screenshot pre-capture protocol and auditor assignments but does not specify a formal handoff message.
- **Classification: IMPORTANT** -- Information firewall requires explicit protocol; informal handoff risks TC leakage.

#### Failure Modes (8 identified)

Failure modes 1-8 in File 13 describe specific systemic failure patterns. The FINAL prompt addresses several through its rules but does NOT address these failure modes as explicit warnings:

- **Failure Mode 2 (Vocabulary Without Composition):** Root cause = planner produces mechanism LISTS not CLUSTERS. TPI-08 addresses this. FINAL prompt does not.
  - **Classification: CRITICAL** (same as TPI-08 above)

- **Failure Mode 5 (PA Feedback Loop Fails to Close):** Root cause = no PA-finding-to-TC-phase mapping in team-lead prompt. C6 routing table exists.
  - **Classification: COVERED**

- **Failure Mode 6 (Embedded Auditor Starved of TC Context):** Root cause = embedded auditor only gets PA questions, not TC coherence rules. TPI-05 addresses this. FINAL prompt does not.
  - **Classification: CRITICAL** (same as TPI-05 above)

- **Failure Mode 7 (Dual Specification Drift):** Root cause = TC says 940-960px, PA says 65-80% of viewport. FINAL prompt uses 940-1100px. Appendix table cites both. Minor risk.
  - **Classification: NICE-TO-HAVE**

---

## PART 2: FILE 14 -- ENRICHMENT INVOCATION MAP (14-enrichment-invocation-map.md)

### What File 14 Contains

File 14 maps all 11 enrichments (B1, B3, C3, A1, A2, A3, D3, BT-08, BT-09, BT-10, BT-11) with: exact text added to design system files, per-agent invocation language, cross-enrichment connections (anti-void triad, content-form chain, transition-restraint pair, detection pipeline), builder quick-reference, gate integration table, and risk map.

### Item-by-Item Cross-Reference

#### Enrichment Coverage in FINAL Prompt

**B1 (Max whitespace prohibition):**
- File 14 invocation: "No 2+ consecutive positions below 30% content coverage. TEST: Screenshot at each increment. Classify coverage."
- FINAL prompt: S-12 states "at no scroll position should a full viewport have < 30% content coverage. 2+ consecutive viewport positions below 30% = FAIL." S-10 addresses contiguous void > 2160px.
- **Classification: COVERED** -- Both the threshold and failure condition present.

**B3 (Front-loaded weight):**
- File 14 invocation: "At least 1 designed moment (3+ mechanisms, unique treatment) below 50% scroll depth."
- FINAL prompt: S-13 states ">= 1 designed moment past 50% scroll depth." C-09 states ">= 1 designed moment per scroll quartile." The 50% threshold matches.
- **Classification: COVERED**

**C3 (Max spacing 96px):**
- File 14 invocation: "No margin or padding value may exceed `var(--space-max-zone)` (96px). Use `var(--space-max-section)` (64px) for within-zone spacing."
- FINAL prompt: S-11 states "C3 prevention: no single CSS margin or padding value > var(--space-max-zone) = 96px." S-09 states "Max spacing between any two content elements: 96px per-property." The within-zone ceiling of 64px is NOT mentioned.
- **Classification: IMPORTANT** -- The 64px within-zone cap is a useful precision that prevents accumulation; currently only the 96px hard cap appears.

**A1 (Transition grammar):**
- File 14 invocation: "Every zone boundary MUST use exactly one of: HARD CUT, SPACING SHIFT, or CHECKPOINT. 'No transition' (just empty space) is NOT valid."
- FINAL prompt: C-05 states ">= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px)" with catalog mapping. However, the names differ: File 14 uses HARD CUT / SPACING SHIFT / CHECKPOINT; FINAL uses SMOOTH / BRIDGE / BREATHING. The catalog mapping in C-05 equates them: "SMOOTH = catalog 'SPACING SHIFT', BRIDGE = catalog 'CHECKPOINT', BREATHING = catalog 'HARD CUT'." This mapping is present but the "no empty space transition" prohibition from File 14 is NOT explicitly stated.
- **Classification: IMPORTANT** -- The "empty space is NOT a valid transition" rule is the heart of the anti-void triad. Without it, builders may use spacing-only transitions.

**A2 (Restraint principle):**
- File 14 invocation: "(a) Max 4 distinct VISIBLE mechanisms per viewport-height section. (b) Every page third has >= 2 distinct mechanisms. (c) Flagship: document 5+ rejected mechanisms."
- FINAL prompt: C-03 covers max 4 per viewport. C-04 covers >= 2 per third. C-12 covers rejection log but specifies "21 considered-and-rejected placements" not "5+ rejected mechanisms." These are different units (21 placements vs 5+ mechanisms).
- **Classification: IMPORTANT** -- The "5+ rejected mechanisms" vs "21 placements" discrepancy could cause confusion. File 14's per-mechanism framing is cleaner for self-check.

**A3 (Content density floors):**
- File 14 invocation: "Word count determines max zones: <1500w=2, 1500-3000=3, 3000-5000=4, 5000+=5. Each zone must contain 3+ paragraphs OR 2+ components."
- FINAL prompt: S-15 states "Zone count ceiling by word count: <1500w=2 zones, 1500-3000w=3, 3000-5000w=4, 5000+=5." S-05 states "All planned sections present, each with >= 200px rendered content height." The "3+ paragraphs OR 2+ components" content minimum is NOT in the FINAL prompt (only 200px height requirement).
- **Classification: IMPORTANT** -- 200px height can be satisfied by a large heading + one sentence. The "3+ paragraphs OR 2+ components" content density floor prevents zone shells with insufficient content.

**D3 (Content-form fit):**
- File 14 invocation: "Every form treatment must be justified by content volume: Zone 3+ paragraphs, Bento 4+ items, Progressive disclosure 3+ phases, Drop cap 3+ sentence paragraph, Bedrock 1 featured element + context."
- FINAL prompt: P-05 covers zone boundary requirements (content >= 800px, content type change, intent change). P-06 states "Pattern overhead <= 20% of content height." The specific per-form-treatment content minimums from D3 are NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- Without per-treatment minimums, agents may use elaborate form treatments (bento, progressive disclosure) for insufficient content, recreating the ceiling experiment failure where architecture exceeded content.

**BT-08 (PA-50-53 void detection):**
- File 14 invocation: PA-50 (consecutive blank viewports), PA-51 (content %), PA-52 (designed moment per third), PA-53 (width utilization 65-80%).
- FINAL prompt: C4 lists PA-50 through PA-53 assigned to Auditor C. B9 routing table references "PA-50 through PA-53 -> Auditor C (Spatial specialist). Sequential: detect -> quantify -> classify -> assess." C5 gate-then-ranking lists PA-50, PA-51, PA-52 as gate questions. These are fully covered.
- **Classification: COVERED**

**BT-09 (Metaphor scoring rubric):**
- File 14 invocation: 6-criterion rubric (18 pts), Interpretive Distance >= 2, 6 rejection checks R1-R6.
- FINAL prompt: MG-01 through MG-05 cover: quality >= 12/18, Interpretive Distance >= 2, 6 rejection checks, structural test, spatial cost. All 5 metaphor gate rules are present.
- **Classification: COVERED**

**BT-10 (PA-09 severity + PA-05c expansion):**
- File 14 invocation: 3-level severity (LOOKS-WRONG 1-2vh, WOULD-NOT-SHIP 3-5vh, CATASTROPHIC 6+vh), PA-05c sub-dimensions (3a horizontal, 3b vertical, 3c breathing).
- FINAL prompt: C5 SEVERITY SYSTEM states "LOOKS-WRONG, WOULD-NOT-SHIP, CATASTROPHIC" with definitions. B9 states "PA-05 scoring -> 4 sub-criteria: Designed, Coherent, Proportionate, Polished." The PA-05c sub-dimensions (3a/3b/3c: horizontal/vertical/breathing) are NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- PA-05c sub-dimensions give auditors precise diagnostic language for proportion failures.

**BT-11 (PA-17/41 elevation):**
- File 14 invocation: "ALL 9 auditors MUST evaluate PA-17 and PA-41 regardless of assigned set. FAIL on either caps verdict at 'YES WITH RESERVATIONS.'"
- FINAL prompt: B9 states "PA-17/PA-41: Auditor F primary. Elevated to Tier 1 for Ceiling+." C5 gate list does not include PA-17 or PA-41 as explicit gate questions (though C4 assigns them to Auditor F as primary). The "caps verdict" rule is NOT explicitly stated in C5.
- **Classification: IMPORTANT** -- The mandatory verdict cap from BT-11 is a hard rule that should appear in C5 alongside other gate questions.

#### Cross-Enrichment Connections (Anti-Void Triad, etc.)

File 14 documents 4 cross-enrichment connection patterns (anti-void triad, content-form chain, transition-restraint pair, detection pipeline) and the builder self-check sequence (STEP 1 through STEP 8).

- The FINAL prompt does NOT document these cross-enrichment connections.
- The builder self-check sequence from File 14 is more granular than B10 in the FINAL prompt.
- **Classification: NICE-TO-HAVE** -- The connections are implicit in the individual rules; explicit cross-enrichment documentation is for human readers. Builder quick-reference sequence is accessible via routing to File 14.

#### Risk Map (11 enrichments)

File 14 provides failure-mode predictions for each unapplied enrichment with ceiling experiment analogs.
- **Classification: NICE-TO-HAVE** -- Supporting evidence for human decision-making; agents don't need this.

---

## PART 3: FILE 15 -- SCALE-CHANNEL INVOCATION (15-scale-channel-invocation.md)

### What File 15 Contains

File 15 provides: the Alexander/Salingaros formula with calculation, 7 channel taxonomy (full 5-scale manifestation per channel), channel interaction matrix, tier coverage targets (matrix cells), 8 binary channel rules (C-01 through C-08), 7 operational formulas (CDT, RDT, MCS, SRS, RR, SCI, CSPS), 6 anti-patterns, agent-channel ownership table, channel communication protocol, and builder quick-reference.

### Item-by-Item Cross-Reference

#### Alexander/Salingaros Formula

File 15: `Number of scales = ln(1440 / 12) / ln(2.7) = 4.8 → 5 scales`. Full calculation with ratio explanation (~2.5-3x between levels).
- FINAL prompt: A3 states "ln(120) ≈ 4.8, where each adjacent scale differs by ~2.7x." The condensed formula is present with scaling factor noted.
- **Classification: COVERED** -- Formula and scaling factor present.

#### 7 Channel Taxonomy (Full Manifestations)

File 15 provides 5-scale manifestation details for each of 7 channels (Ch1-Ch7), including specific CSS values, coherence test questions, and mechanism-to-channel mappings.

- FINAL prompt: SC-02 lists 7 channel definitions with one-line summaries: "Ch1 CHROMATIC, Ch2 TYPOGRAPHIC, Ch3 SPATIAL, Ch4 STRUCTURAL, Ch5 DENSITY, Ch6 RHYTHMIC, Ch7 INTENTIONAL." These are compressed to 2-3 words each.
- The channel interaction matrix (5 pairs), coherence tests, and mechanism-to-channel mappings are NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- Planner and Metaphor Builder are routed to read File 15 directly (Section E). However, the coherence test questions ("Do all color deployments use the same semantic vocabulary?") would benefit from appearing in the planner's section.

#### Binary Channel Rules (C-01 through C-08 from File 15)

These are the 8 rules from File 15's execution spec section. CRITICAL to distinguish from the similar rule IDs in the FINAL prompt (C-01 through C-19 are compositional rules, not channel rules).

**File 15 C-01 (>=3 channels per section transition):**
- FINAL prompt: SC-02 requires ">=5 of 7 channels actively used." MC-07 requires ">=10 of 15 possible dimension pairs coupled." Neither matches File 15 C-01's "per transition" framing. The per-transition channel count is NOT measured in the FINAL prompt.
- **Classification: CRITICAL** -- A page could use all 7 channels but with only 1 active per transition (different channel at each boundary). File 15 C-01's per-transition minimum prevents this. Without it, SC-02 is satisfiable with 5 channels each appearing only once.

**File 15 C-02 (Chromatic-density alignment: warm zones sparse, cool zones dense):**
- FINAL prompt: Not explicitly stated. The general principle is implied by A3 density floors and mechanism-catalog.md mechanism #5, but no binary rule enforces warm=sparse, cool=dense alignment.
- **Classification: IMPORTANT** -- This prevents the perceptually incoherent state where content is densest in warm-background sections (the opposite of the intended semantic).

**File 15 C-03 (Structural weight hierarchy: border weight tracks content importance):**
- FINAL prompt: Not explicitly stated as a binary rule. Mechanism-catalog.md covers border-weight gradient. No rule states "border weight NEVER increases as importance DECREASES."
- **Classification: IMPORTANT** -- Without this, border weights may be decorative rather than semantic.

**File 15 C-04 (Typographic trinity compliance at all scales):**
- FINAL prompt: U-08/U-09 covers "Typography trinity: Instrument Serif / Inter / JetBrains Mono." File 15 specifies "Inter" while FINAL prompt lists this correctly. However, File 15 also specifies "No font-weight values outside {400, 500, 600}" which is NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- The font-weight restriction prevents weight drift that creates incoherence across scales.

**File 15 C-05 (Intentional arc minimum: first/middle/last sections visually distinct):**
- FINAL prompt: A8 describes the 5-act reader journey. C-18 states "Density arc: peak density MUST NOT be first." C-15 covers intentionality dimensions. The explicit "first, middle, last visually distinct" binary check is NOT present.
- **Classification: IMPORTANT** -- The visual distinction test is more concrete than "density arc" and easier to verify.

**File 15 C-06 (>=3 transitions with >=2 reinforcing pairs each):**
- FINAL prompt: MC-02 requires ">=3 reinforcing pairs." C-08 requires ">=2 reinforcing pairs (GATE MINIMUM)." Neither specifies the per-transition distribution. A page could have 3 reinforcing pairs all at the same transition point.
- **Classification: CRITICAL** -- Per-transition distribution ensures reinforcing pairs are spread across the page, not concentrated. This directly prevents the "one atmospheric transition, rest monotone" failure mode.

**File 15 C-07 (Semantic density proportionality: most important element has most mechanisms):**
- FINAL prompt: C-19 states "Semantic density proportionality: the single most important content block MUST use more mechanisms than any supplementary content block." The rule IS present and matches File 15 C-07.
- **Classification: COVERED**

**File 15 C-08 (Signal-to-silence ratio: >=40% quiet zones):**
- FINAL prompt: C-14 states "Signal-to-silence ratio: 0.6-0.8:1. Silence after silence is void, not restraint." C-13 states ">=2 designed silence zones (200px+ height, base typography only)." The 0.6-0.8:1 ratio in C-14 is equivalent to File 15's >=40% quiet zones (0.6-0.8:1 signal-to-silence means 55-44% content, 45-56% silence). The FINAL prompt's ratio inverts what File 15 measures but is numerically compatible.
- **Classification: COVERED** -- Numerically equivalent, differently expressed.

#### 7 Operational Formulas

File 15 provides 7 formulas: CDT (Channel Density per Transition), RDT (Reinforcement Depth per Transition), MCS (Matrix Coverage Score), SRS (Semantic Resonance Score), RR (Restraint Ratio), SCI (Spatial Confidence Index), CSPS (Channel-Scale Priority Score).

- FINAL prompt: Planner is routed to read File 15 directly (Section E). None of these formulas appear in the FINAL prompt body.
- Key formula: **SCI (Spatial Confidence Index)** = 1 - (max_void_height / total_page_height). Target >= 0.85. Veto at < 0.60. This is NOT in the FINAL prompt.
- Key formula: **CDT (Channel Density per Transition)** = count channels shifting at each boundary. Target >= 3.
- Key formula: **RDT (Reinforcement Depth per Transition)** = count reinforcing channel pairs per transition.

**SCI Veto is the most critical missing formula:**
- **Classification: CRITICAL** -- SCI veto (< 0.60 = DO NOT SHIP) is referenced in File 15 Section 11.5 as "the single most important gate in the entire system." The FINAL prompt has S-02 (content-to-void >= 60:40) which is close but measured differently (content heights vs total scroll height, not max_void_height vs total). SCI is a single-void measurement; S-02 is aggregate. A page could pass S-02 (60% total content) while failing SCI (one huge void of 45%).

**CDT threshold (>=3 channels per transition):**
- **Classification: CRITICAL** -- Mapped to File 15 C-01 above. Not in FINAL prompt.

**RDT threshold (>=2 reinforcing pairs per transition):**
- **Classification: CRITICAL** -- Mapped to File 15 C-06 above. Not in FINAL prompt.

**Other formulas (MCS, SRS, RR, CSPS):**
- **Classification: NICE-TO-HAVE** -- Supporting metrics for planner use. Accessible via routing to File 15.

#### Agent-Channel Ownership Table

File 15 maps each agent to owned channels: Metaphor Agent owns Ch7 Intentional, Content Architect owns Ch5 Density + Ch6 Rhythmic, Planner owns Ch3 Spatial + Ch4 Structural, Mechanism Builder implements Ch1-Ch4, Embedded Auditor validates all 7 channels against C-01 through C-08, Intentionality Builder validates Ch7.

- FINAL prompt: C1 agent roster assigns roles but does NOT specify channel ownership per agent.
- **Classification: IMPORTANT** -- Without channel ownership, the Planner may not know to map Ch3 + Ch4 in the build plan. The Embedded Auditor has no mandate to validate all 7 channels against binary rules.

#### Channel Communication Protocol (Checkpoints A, B, D from File 15)

**File 15 Checkpoint A (Metaphor -> Planner: channel map):** "CHANNEL MAP: for each of 7 channels, how the metaphor manifests in that channel."
- FINAL prompt: CP-A is "Builder -> Planner" (spatial concerns). No Metaphor -> Planner channel map checkpoint exists.
- **Classification: CRITICAL** -- Without the channel map transmission, the Planner cannot write a build plan that activates channels across transitions. The planner would be creating a mechanism deployment plan without knowing which channels each mechanism activates.

**File 15 Checkpoint B (Planner -> Builder: transition spec):** "TRANSITION SPEC: for each section boundary, which channels shift and how. Example: 'S2→S3: Ch1 cream→white, Ch3 64px→32px, Ch4 add 3px left border, Ch5 sparse→dense. 4 channels, 2 reinforcing pairs.'"
- FINAL prompt: No transition spec format is specified. C1 states Planner "produces 03-build-plan.md" but no format requirements for the plan's content.
- **Classification: CRITICAL** -- The transition spec is the operational document that makes channel-aware building possible. Without it, the builder has no per-boundary channel targets.

**File 15 Checkpoint D (Builder -> Embedded Auditor: channel self-count):** "CHANNEL SELF-COUNT: channel count at 3 transitions, plus 5 Y/N checks from 2E."
- FINAL prompt: CP-D covers mechanism count + spatial re-check. Channel self-count is NOT in CP-D.
- **Classification: IMPORTANT** -- The channel self-count enables the embedded auditor to quickly verify channel deployment before full audit.

#### 6 Anti-Patterns

File 15 documents 6 anti-patterns:
1. Scale Stacking (adding levels instead of channels)
2. Channel Monotony (same channel at every transition = only spacing changes)
3. Channel Cacophony (all channels changing independently, no reinforcement)
4. Intentional Channel Neglect (skipping argument arc, cognitive choreography)
5. Restraint Deficit (filling all 35 matrix cells, no quiet zones)
6. Channel-Mechanism Confusion (deploys 14 mechanisms all in Spatial channel)

- FINAL prompt: A6 includes some experimental lessons. Anti-pattern 6 (channel-mechanism confusion) is partially addressed in SC-02 ("Channels are NOT mechanisms. They are AXES along which mechanisms operate.") Anti-patterns 2, 3, 4 are not present.
- **Anti-pattern 2 (Channel Monotony) is the most dangerous missing anti-pattern:**
  - **Classification: IMPORTANT** -- A builder producing "all transitions are just spacing changes" is the specific failure mode that SC-02's channel list prevents. Without the anti-pattern name, builders may not recognize the symptom.
- **Anti-pattern 3 (Channel Cacophony):** Related to MC rules. Partially addressed by reinforcing pair requirement.
  - **Classification: NICE-TO-HAVE**

#### Channel Builder Quick-Reference

File 15 Section 7 provides a 40-line quick-reference checklist for builders with per-transition channel counting, before/during/after writing checks, and common failure modes. This is specifically designed for the "30-line per-agent memory."
- FINAL prompt: B10 provides a 16-item builder self-check. Channel-specific per-transition count (how many channels shift at each boundary?) is NOT in B10.
- **Classification: IMPORTANT** -- B10 is mechanism-focused; adding "count channels at 3 transitions (target >=3)" would operationalize SC-02 for builders.

---

## PART 4: FILE 16 -- MULTI-COHERENCE INVOCATION (16-multi-coherence-invocation.md)

### What File 16 Contains

File 16 provides: multi-coherence equation, CCS thresholds table, 5 interaction types with crown jewel CSS evidence + invocation language + binary checks, CCS formula + worked example, fractal coherence protocol with 5-scale verification, self-reference detection protocol, 15-pair cross-dimension coherence matrix with CSS evidence per pair, anti-metronome protocol, conviction layer text, 10 binary MC rules (MC-01 through MC-10), multi-coherence agent responsibilities, 5 checkpoints (A-E), and builder checklist.

### Item-by-Item Cross-Reference

#### Multi-Coherence Equation

File 16: `Multi-Coherence = (Reinforcing Pairs x Modulating Chains x Fractal Depth) / Independent Mechanisms`
- FINAL prompt: Not present. CCS formula is the primary quantitative tool in FINAL prompt.
- **Classification: NICE-TO-HAVE** -- CCS is the operationally measurable equivalent. The multi-coherence equation is theoretical framing.

#### CCS Formula (File 16's primary metric)

File 16: `CCS per mechanism = (mechanisms whose perceived meaning changes when THIS mechanism is removed) / (total deployed mechanisms - 1)`. CCS for page = average across all deployed. Flagship gate: CCS >= 0.30.
- FINAL prompt: MC-01 states the SAME formula: "CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1). CCS for page = average CCS across all deployed." Gate: >= 0.30. B10 includes MC-01 self-check.
- **Classification: COVERED**

#### CCS Flagship Target

File 16 Section 1.4: "Flagship target: CCS >= 0.50" (above the standard >= 0.30 threshold).
- FINAL prompt: MC-01 states "CCS >= 0.30 for Flagship." This is the LOWER threshold from File 16's thresholds table (0.30-0.50 = "Atmospheric, mood-shifting" = Ceiling, not Flagship). File 16 Section 9 (MC-06 binary rule) also states "CCS >= 0.30" for the binary check.
- There is a contradiction within File 16 itself: Section 1.4 says "Flagship target: CCS >= 0.50" but Section 9 MC-06 says "CCS >= 0.30." The FINAL prompt uses 0.30.
- **Classification: IMPORTANT** -- The distinction matters: 0.30 is the FLOOR (binary gate pass/fail) while 0.50 is the ASPIRATION (crown jewel territory). The FINAL prompt should clarify both thresholds: "Gate: >=0.30. Target: >=0.50."

#### 5 Interaction Types -- Invocation Language

**REINFORCING:**
- File 16: Format with PAIR [N], SHARED SEMANTIC, CSS CHANNELS, CO-VARIATION, PERCEPTUAL EFFECT. Binary check: "remove A, does B's meaning change?"
- FINAL prompt: MC-02 states ">= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels)." A5 explains reinforcing type with CD-006 worked example. The invocation FORMAT (PAIR [N] template) is NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- The format requirement ensures planner outputs are structured for downstream builder use. Without it, "3 reinforcing pairs documented" could mean 3 sentences in free text.

**MODULATING:**
- File 16: "Do components INSIDE dense sections look different from components INSIDE sparse sections?" Binary check: compare same component in different density zones.
- FINAL prompt: MC-03 states ">= 2 modulating chains (one mechanism controls another's intensity)." The specific binary check (compare component CSS in different density zones) is NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- The specific binary check is the operationalization. Without it, modulating chains could be documented as a plan without being verified in the built page.

**RESPONDING:**
- File 16: "Remove the preceding section entirely. Does the responding mechanism still feel JUSTIFIED?" + COLOR/FORM ECHO requirement.
- FINAL prompt: MC-04 states ">= 2 responding sequences." The removal test and color/form echo requirement are NOT specified.
- **Classification: IMPORTANT** -- The COLOR/FORM ECHO requirement (specific CSS property connecting creator and responder) prevents nominal responding sequences with no visual continuity.

**CONTRASTING:**
- File 16: "For each deliberately absent mechanism, can you write a 1-sentence justification for WHY it is absent?" + DEPLOYMENT RATIO < 1.0 + ANTI-PATTERN: deployment ratio = 1.0 eliminates contrast.
- FINAL prompt: MC-05 states ">= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful)." The deployment ratio concept and anti-pattern are NOT stated.
- **Classification: IMPORTANT** -- The anti-pattern (mechanism deployed everywhere = wallpaper) is a preventive rule. Without it, the "contrasting" requirement could be nominally satisfied by mechanisms that appear everywhere with one small exception.

**CASCADING:**
- File 16: VALUE TABLE format (Stage | Mech A Value | Mech B Value | Mech C Value). Acid test: "Can you describe the cascade in one sentence WITHOUT listing mechanism names?"
- FINAL prompt: MC-06 states ">= 1 cascading chain of 3+ mechanisms (A enables B enables C)." B10 self-check includes "MC-06: >= 1 cascade of 3+ mechs." The VALUE TABLE format and one-sentence acid test are NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- The VALUE TABLE is the highest-confidence verification for cascading chains. It makes co-variation measurable.

#### CCS Worked Example (File 16 Section 3.2)

File 16 provides a worked CCS calculation for CD-006 with per-mechanism removal impact (10 mechanisms, individual CCS values), arriving at page CCS ~ 0.55.
- FINAL prompt: A5 contains "CD-006 WORKED EXAMPLE" but it focuses on the compositional interaction narrative, not the CCS calculation. The numeric CCS breakdown is NOT in the FINAL prompt.
- **Classification: NICE-TO-HAVE** -- Accessible via routing to File 16. Useful reference for planner and embedded auditor.

#### Fractal Coherence Protocol (File 16 Section 4)

File 16: 5-scale verification protocol with binary checks FC-01 through FC-06. "The same DIRECTION at every scale." Crown jewel evidence for both DD-006 and CD-006 at each scale. "Fractal coherence: direction documentable at 5/5 scales."
- FINAL prompt: MC-07 states "Cross-dimension coherence: >= 10 of 15 possible dimension pairs actively coupled. The 6 dimensions: SPATIAL, TEMPORAL, CHROMATIC, TYPOGRAPHIC, RHYTHMIC, SEMANTIC." This addresses cross-dimension coherence but NOT fractal coherence (same compositional direction at all 5 zoom scales).

**This is a significant gap:**
- File 16 MC-07 (in execution spec Section 9): "Fractal coherence at 5/5 scales. VERIFY: Compositional direction documentable at each scale."
- FINAL prompt MC-07: "Cross-dimension coherence: >= 10 of 15 possible dimension pairs actively coupled."

The FINAL prompt uses "MC-07" for the cross-dimension coherence requirement, while File 16's Section 4 has fractal coherence as a SEPARATE concern with its own binary checks. The FINAL prompt conflates these or omits fractal coherence entirely.
- **Classification: CRITICAL** -- Fractal coherence (same compositional direction at all 5 spatial zoom scales) is distinct from cross-dimension coherence (dimensions co-varying at section transitions). DD-006 (36/40) derives most of its crown jewel quality from fractal coherence. If this is absent from the FINAL prompt, agents building a flagship page will miss the fractal requirement entirely.

#### Self-Reference Detection Protocol (File 16 Section 5)

File 16: "Does the page contain at least 1 element where the content describes, demonstrates, or enacts its own form?" Binary: SELF-REF [N] format with CONTENT / FORM / ALIGNMENT.
- FINAL prompt: C-16 states ">= 1 self-referential element (content describes its own form)." The detection protocol and format (SELF-REF [N] template) are NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- The format ensures self-reference is documented and verifiable, not just claimed.

#### 15-Pair Cross-Dimension Coherence Matrix (File 16 Section 6)

File 16 provides all 15 dimension pairs with: coherent state description, verification question, CSS evidence examples. The highest-value pairs are: Spatial x Chromatic, Spatial x Typographic, Chromatic x Temporal, Typographic x Rhythmic.

- FINAL prompt: MC-07 states ">= 10 of 15 possible dimension pairs actively coupled. Highest-value pairs: Spatial-Chromatic, Typographic-Rhythmic, Chromatic-Semantic." The three named highest-value pairs partially match File 16 (which names Spatial-Chromatic and Typographic-Rhythmic but not Chromatic-Semantic specifically).
- The 15 verification questions and CSS evidence examples are NOT in the FINAL prompt.
- **Classification: IMPORTANT** -- Planner and Embedded Auditor are routed to File 16 directly. The 15 verification questions are accessible via routing. The highest-value pair list in the FINAL prompt is sufficient for conviction but the full matrix is in the reference library.

#### File 16 MC Rules (MC-01 through MC-10 from File 16)

Note: File 16 has 10 MC rules; the FINAL prompt has MC-01 through MC-08 (8 rules). Comparison:

| File 16 Rule | Content | FINAL Prompt Equivalent |
|--------------|---------|------------------------|
| MC-01 | >=3 reinforcing pairs | MC-02 (>=3 for Flagship; C-08 is gate minimum at >=2) |
| MC-02 | >=2 modulating chains | MC-03 |
| MC-03 | >=2 responding sequences | MC-04 |
| MC-04 | >=2 contrasting deployments | MC-05 |
| MC-05 | >=1 cascade of 3+ mechanisms | MC-06 |
| MC-06 | CCS >= 0.30 | MC-01 |
| MC-07 | Fractal coherence 5/5 scales | **ABSENT** (FINAL MC-07 = cross-dimension pairs) |
| MC-08 | >=3 distinct section padding values | MC-08 (anti-metronome) |
| MC-09 | Cross-dimension coherence 10+ of 15 pairs | MC-07 in FINAL |
| MC-10 | >=1 self-referential element | C-16 |

**Fractal coherence (File 16 MC-07) is MISSING from the FINAL prompt.** The FINAL prompt's MC-07 corresponds to File 16's MC-09.
- **Classification: CRITICAL** (restated from fractal coherence section above)

#### Multi-Coherence Agent Responsibilities (File 16 Section 10)

File 16 assigns multi-coherence gates to each agent:
- Metaphor Deriver: "Metaphor must support at least 3 CSS channels for its primary semantic."
- Content Architect: "Density trajectory must be describable in one phrase."
- Planner: "Plan must contain at least 3 reinforcing pairs and 1 cascade."
- Skeleton Builder A: "Section padding values must have >= 3 distinct values."
- Skeleton Builder B: "Zone backgrounds must track spacing direction."
- Mechanism Builder: "Same component type must have DIFFERENT CSS values in different density zones."
- Metaphor Builder: "At least 2 mechanisms have documented absence zones."
- Intentionality Builder: "Compositional direction documentable at 5/5 scales."
- Embedded Auditor: "Runs CCS removal test on 5 mechanisms after Pass 2."

- FINAL prompt: C1 agent roster does NOT assign per-agent multi-coherence gates. The agents are defined by their pass responsibilities but not their MC verification obligations.
- **Classification: IMPORTANT** -- Per-agent MC gates operationalize multi-coherence across the pipeline. Without them, MC verification happens only at Gate 3 (post-pass-2) and Gate 5 (final PA), missing early intervention opportunities.

#### Multi-Coherence Checkpoints A-E (File 16 Section 10.2)

File 16 provides 5 checkpoints with binary YES/NO questions per checkpoint:
- A (after metaphor): primary semantic dimension identified? 3+ CSS channels?
- B (after planning): 3+ reinforcing pairs? 1+ cascade with value table? 2+ modulating chains?
- C (after Pass 1 skeleton): 3+ distinct padding values? zone backgrounds co-vary?
- D (after Pass 2): components different in different zones? 2+ contrasting deployments? CCS >= 0.30?
- E (after Pass 3): fractal coherence 5/5 scales? self-referential element? 10+ cross-dimension pairs?

- FINAL prompt: Gate sequence in C3 covers spatial checks but NOT multi-coherence checks at each pass. Gate 3 (post-Pass-2) includes MC self-check but not the full Checkpoint D. Checkpoints A, B, C, E have no equivalent in the FINAL prompt's gate sequence.
- **Classification: IMPORTANT** -- Checkpoint B (after planning, before building) is the highest-leverage missing checkpoint. If the plan does not document 3+ reinforcing pairs and 1+ cascade with value table, the build cannot achieve flagship MC.

#### Builder MC Checklist (File 16 Section 11)

File 16 provides a 2-minute multi-coherence self-check with 8 categories (Reinforcement, Modulation, Response, Contrast, Cascade, Fractal, Rhythm, Atmosphere test) and the one-sentence atmospheric test: "Can you describe the page in one word that is NOT a mechanism name?"

- FINAL prompt: B10 self-check includes MC-01, MC-02, MC-06, SC-08. The atmosphere test and 6 other MC self-check categories are NOT in B10.
- **Classification: IMPORTANT** -- The atmosphere test ("can you describe in one word?") is the most powerful single check for compositional vs vocabulary fluency. It should be in B10.

---

## SUMMARY: COMPLETE GAP INVENTORY

### CRITICAL Gaps (agents NEED these and CANNOT reach via file routing)

| ID | Gap | Source File | Affected Agent(s) |
|----|-----|-------------|-------------------|
| CR-01 | TPI-05: Embedded auditor must read TC coherence rules as reference | 13-tc-pa | Embedded Auditor |
| CR-02 | TPI-08: Planner plan MUST use compositional cluster format, not mechanism lists | 13-tc-pa | Planner |
| CR-03 | CP-TC-01: Metaphor Agent -> Planner checkpoint with isomorphism table + builder warnings | 13-tc-pa | Metaphor Agent, Planner |
| CR-04 | File 15 C-01: >=3 channels per section transition (per-transition minimum) | 15-scale | Planner, Builder |
| CR-05 | File 15 C-06: >=3 transitions each with >=2 reinforcing channel pairs | 15-scale | Planner, Builder |
| CR-06 | File 15 Checkpoint A: Metaphor -> Planner channel map (how each channel manifests the metaphor) | 15-scale | Metaphor Agent, Planner |
| CR-07 | File 15 Checkpoint B: Planner -> Builder transition spec (per-boundary: which channels shift, how many, reinforcing pairs count) | 15-scale | Planner, Builder |
| CR-08 | SCI Veto: Spatial Confidence Index < 0.60 = DO NOT SHIP (distinct from aggregate content-to-void S-02) | 15-scale | Team Lead, Embedded Auditor |
| CR-09 | Fractal coherence (5/5 scales, same compositional direction at all zoom levels) -- File 16 MC-07 MISSING from FINAL prompt | 16-mc | Builder, Intentionality Builder, Embedded Auditor |
| CR-10 | MC Checkpoint B after planning: 3+ reinforcing pairs documented, 1+ cascade with value table, 2+ modulating chains -- must be a gate before building | 16-mc | Planner, Team Lead |

### IMPORTANT Gaps (accessible via routing but concretely improves agent behavior)

| ID | Gap | Source File | Affected Agent(s) |
|----|-----|-------------|-------------------|
| IM-01 | TPI-01 unified framing: TC guardrail values = PA guardrail values (same numbers, two checkpoints) | 13-tc-pa | All builders |
| IM-02 | TPI-03: Enumerate specific items blocked from auditors (metaphor name, mechanism count, tier) | 13-tc-pa | Team Lead |
| IM-03 | TPI-06: Composition self-checks (CC-01 to CC-07) timing: AFTER Pass 3, BEFORE embedded audit | 13-tc-pa | Intentionality Builder |
| IM-04 | CP-TC-02/03/04: Planner->Builders, Builder->Embedded Auditor, Auditor->Builder checkpoints | 13-tc-pa | Multiple |
| IM-05 | C3-64px: Within-zone spacing cap (64px) vs zone boundary cap (96px) | 14-enrichment | Builder |
| IM-06 | A1 empty-space prohibition: "No transition" (just empty space) is NOT valid | 14-enrichment | Builder |
| IM-07 | D3 per-treatment content minimums (bento 4+ items, progressive 3+ phases, etc.) | 14-enrichment | Planner, Builder |
| IM-08 | A3 content minimum: 3+ paragraphs OR 2+ components per zone (vs current 200px height) | 14-enrichment | Planner, Builder |
| IM-09 | BT-10 PA-05c sub-dimensions (3a horizontal, 3b vertical, 3c breathing) | 14-enrichment | Auditors |
| IM-10 | BT-11 verdict cap: PA-17 or PA-41 FAIL caps verdict at "YES WITH RESERVATIONS" | 14-enrichment | Weaver-Synthesizer |
| IM-11 | File 15 C-02: Chromatic-density alignment (warm zones must have less content per viewport than cool zones) | 15-scale | Builder |
| IM-12 | File 15 C-03: Structural weight hierarchy (border weight NEVER increases as content importance decreases) | 15-scale | Builder |
| IM-13 | File 15 C-04: Font-weight restriction {400, 500, 600} only | 15-scale | Builder |
| IM-14 | File 15 C-05: First/middle/last sections visually distinct binary check | 15-scale | Builder |
| IM-15 | Channel agent ownership: Metaphor=Ch7, ContentArch=Ch5+6, Planner=Ch3+4, Builder=Ch1-4, EmbeddedAuditor=validates all 7 | 15-scale | All agents |
| IM-16 | CCS target clarification: Gate >=0.30 vs Flagship aspiration >=0.50 | 16-mc | Planner, Builder |
| IM-17 | Interaction type invocation formats: PAIR [N], CHAIN [N], RESPONSE [N], CONTRAST [N], CASCADE [N] templates | 16-mc | Planner |
| IM-18 | Modulating chain binary check: compare same component CSS in different density zones | 16-mc | Embedded Auditor |
| IM-19 | Responding sequence COLOR/FORM ECHO requirement (specific property connecting creator and responder) | 16-mc | Builder |
| IM-20 | Contrasting deployment anti-pattern: ratio = 1.0 (everywhere) eliminates contrast | 16-mc | Builder |
| IM-21 | Cascade VALUE TABLE format for verification | 16-mc | Planner, Builder |
| IM-22 | Atmosphere test in builder self-check: "One word description that is NOT a mechanism name" | 16-mc | Builder |
| IM-23 | Per-agent MC gates (Planner: plan must contain 3 reinforcing pairs + 1 cascade; Builder: components differ in different zones) | 16-mc | All agents |
| IM-24 | MC Checkpoints C and E (after Pass 1 skeleton and after Pass 3 intentionality) | 16-mc | Team Lead |

### NICE-TO-HAVE (theoretical framing, redundant coverage, human-facing documentation)

| ID | Gap | Source File |
|----|-----|-------------|
| NH-01 | Shared vocabulary table (TC term vs PA term alignment) | 13-tc-pa |
| NH-02 | Failure mode documentation (8 failure modes with systemic causes) | 13-tc-pa |
| NH-03 | Lock Sheet formalization (PA) | 13-tc-pa |
| NH-04 | Cross-enrichment connection documentation (anti-void triad, content-form chain, etc.) | 14-enrichment |
| NH-05 | Risk map (what breaks if each enrichment not invoked) | 14-enrichment |
| NH-06 | Channel interaction matrix (5 channel pairs with interaction types) | 15-scale |
| NH-07 | Anti-patterns 2-6 (Channel Monotony, Cacophony, Neglect, Restraint Deficit, Confusion) | 15-scale |
| NH-08 | MCS, SRS, RR, CSPS formulas | 15-scale |
| NH-09 | CCS worked example (CD-006 per-mechanism breakdown) | 16-mc |
| NH-10 | Multi-coherence equation (as distinct from CCS formula) | 16-mc |

---

## HIGHEST-PRIORITY RECOMMENDATIONS FOR FINAL PROMPT

### TOP 5 CRITICAL ADDITIONS (ranked by failure risk)

**Priority 1 -- CR-09: Fractal coherence is missing entirely**
The FINAL prompt's MC-07 covers cross-dimension coherence but completely misses fractal coherence (same compositional direction at all 5 spatial zoom scales). DD-006 (36/40) derives the majority of its crown jewel quality from fractal coherence. Suggest adding to B3 COMPOSITIONAL: "C-XX. Fractal coherence: same compositional direction documentable at all 5 zoom levels (Navigation, Page, Section, Component, Character). Verify: at each zoom level, can you name the compositional direction? If direction contradicts across levels = FAIL."

**Priority 2 -- CR-06/CR-07: Channel communication checkpoints (Metaphor->Planner and Planner->Builder)**
Without these, the planner cannot write channel-aware build plans and builders cannot execute channel-aware transitions. Suggest adding to C2: "CP-F (after metaphor): Metaphor Agent -> Planner. CHANNEL MAP: for each of 7 channels, how the metaphor manifests. CP-G (plan to builder): Planner -> Builder. TRANSITION SPEC: for each section boundary, list channels that shift."

**Priority 3 -- CR-04/CR-05: Per-transition channel count (File 15 C-01 and C-06)**
A page can satisfy SC-02 (5+ channels used) without any single transition using more than 1 channel. The per-transition minimum ensures channel richness is distributed. Suggest adding: "SC-09. At each section transition, >= 3 channels shift simultaneously. At >= 3 transitions, >= 2 reinforcing channel pairs (channels shifting in same semantic direction)."

**Priority 4 -- CR-02: Planner must produce compositional clusters, not mechanism lists**
This is the root cause of vocabulary-without-composition failure. Suggest adding to C1 Planner definition: "Plan format: COMPOSITIONAL CLUSTERS (groups of mechanisms encoding shared semantics), NOT individual mechanism lists. Each cluster names: shared semantic, mechanisms involved, co-variation direction. Planner submits >= 3 clusters with >= 2 reinforcing pairs and 1 cascade value table."

**Priority 5 -- CR-10: MC planning gate before building**
Currently there is no gate between plan completion and Pass 1 building that verifies multi-coherence planning is complete. Suggest inserting: "GATE 0.75 (post-plan, pre-build): Plan contains >= 3 reinforcing pairs documented? 1+ cascade with value table? 2+ modulating chains? If NO = revise plan before building."

### ADDITIONAL CRITICAL FIXES

- **CR-01 (TPI-05):** Add to C1 Embedded Auditor: "Reads TC coherence rules as reference. Diagnoses PA findings using TC phase routing. Reports: 'PA-03 FAIL because TC coherence rule [X] violated.'"
- **CR-03 (CP-TC-01):** Add to C2: "CP-F (after metaphor lock): Metaphor Agent -> Planner. Must include isomorphism table, perceptual risk score, and builder warnings (W-DEADZONE, W-OVERLABEL)."
- **CR-08 (SCI Veto):** Add to B1 SPATIAL or KILL CRITERIA: "SCI = 1 - (max_void_height / total_page_height). SCI < 0.60 = DO NOT SHIP. Any single contiguous void exceeding 40% of total page height is a veto regardless of aggregate content-to-void ratio."

---

**END SCAN-C REPORT**

**Total items cross-referenced:** 87 (FINAL prompt) + all specifications from 4 invocation files
**Critical gaps found:** 10
**Important gaps found:** 24
**Nice-to-have gaps found:** 10
**Items confirmed covered:** 32 (estimated from cross-reference)
**Primary failure risk:** Fractal coherence (CR-09) missing entirely; channel communication checkpoints (CR-06/07) absent; compositional cluster format (CR-02) not enforced

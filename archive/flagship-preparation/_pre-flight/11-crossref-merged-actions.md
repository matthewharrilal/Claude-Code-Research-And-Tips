# Cross-Referenced Merged Actions

**Cross-referencer:** cross-ref-worker (task #11)
**Date:** 2026-02-16
**Sources:** All 7 extraction files (01-07 in _pre-flight/)
**Method:** Every action item from all 7 files merged, deduplicated, conflicts identified, and tagged with ALL source files.

---

## SECTION 1: MASTER ACTION LIST (Deduplicated)

### Category A: DESIGN SYSTEM ENRICHMENTS (Apply to Source Files BEFORE Experiment)

#### M-A01: Add Prohibition #21 -- Maximum Whitespace (B1)
- **Sources:** 01 (02-001), 06 (CHK-18-E1, FM-18-01)
- **Action:** Add prohibition to prohibitions.md: no full-viewport-height contentless space except single breathing zone
- **Target:** `design-system/compositional-core/identity/prohibitions.md`
- **Priority:** BLOCKING
- **Binary check:** 0-1 consecutive <30% coverage positions = PASS; 2+ = FAIL

#### M-A02: Add Prohibition #22 -- Front-Loaded Visual Weight (B3)
- **Sources:** 01 (02-005), 06 (CHK-18-E1, FM-18-01)
- **Action:** Add prohibition: never concentrate all visual interest in first third of page
- **Target:** `design-system/compositional-core/identity/prohibitions.md`
- **Priority:** BLOCKING
- **Depends on:** M-A01 (sequential numbering)

#### M-A03: Add Transition Grammar Section (A1)
- **Sources:** 01 (02-002), 04 (A23, A24), 06 (CHK-18-E2, FM-18-02)
- **Action:** Add transition grammar to mechanism-catalog.md: HARD CUT / SPACING SHIFT / CHECKPOINT types. No empty-space-only transitions.
- **Target:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Priority:** BLOCKING
- **Binary check:** Each section boundary has exactly 1 transition type

#### M-A04: Add Restraint Protocol Section (A2)
- **Sources:** 01 (02-003), 02 (RP-10, RP-12, RP-13, RP-15), 06 (CHK-18-E2, FM-18-02)
- **Action:** Add restraint protocol to mechanism-catalog.md: max 4 mechanisms per viewport, min 2 per third, document rejections
- **Target:** `design-system/compositional-core/grammar/mechanism-catalog.md`
- **Priority:** BLOCKING
- **Depends on:** M-A03 (insertion order)

#### M-A05: Add Content Density Floors (A3)
- **Sources:** 01 (02-004), 06 (CHK-18-E4, FM-18-04)
- **Action:** Add Gap 6 to semantic-rules.md: zone minimums (3 paragraphs OR 2+ components), zone count ceiling by content volume
- **Target:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Priority:** BLOCKING

#### M-A06: Add Content-Form Fit Guidance (D3)
- **Sources:** 01 (02-007), 06 (CHK-18-E4, FM-18-04)
- **Action:** Add Gap 7 to semantic-rules.md: form follows content volume, selection criteria per content type
- **Target:** `design-system/compositional-core/guidelines/semantic-rules.md`
- **Priority:** BLOCKING
- **Depends on:** M-A05 (insertion order)

#### M-A07: Add Maximum Spacing Tokens (C3)
- **Sources:** 01 (02-006), 06 (CHK-18-E3, FM-18-03)
- **Action:** Add --space-max-section (64px) and --space-max-zone (96px) to tokens.css
- **Target:** `design-system/compositional-core/vocabulary/tokens.css`
- **Priority:** BLOCKING
- **Binary check:** No margin/padding > 96px

#### M-A08: Add 4 New Spatial PA Questions (PA-50 through PA-53)
- **Sources:** 01 (01-013)
- **Action:** Add PA-50 (empty viewport count), PA-51 (content scroll %), PA-52 (designed moment per third), PA-53 (width utilization %)
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** BLOCKING

#### M-A09: Modify PA-09 Severity Calibration
- **Sources:** 01 (01-015)
- **Action:** Add severity tiers: 1-2 empty = LOOKS-WRONG, 3-5 = WOULD-NOT-SHIP, 6+ = CATASTROPHIC
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH

#### M-A10: Modify PA-05c Proportionate Sub-Criteria
- **Sources:** 01 (01-016)
- **Action:** Expand to 3 sub-dimensions: horizontal, vertical, breathing proportion
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH

#### M-A11: Elevate PA-17 and PA-41 to Middle+ Mandatory
- **Sources:** 01 (01-014)
- **Action:** Move from ceiling-tier-only to CRITICAL for all tiers at/above Middle
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH

#### M-A12: Add Mode 4 Pre-Capture Protocol
- **Sources:** 01 (01-018)
- **Action:** Formalize team-lead screenshot capture before auditor spawning
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH

#### M-A13: Add Root Cause Classification Protocol
- **Sources:** 01 (01-019), 02 (CP-14)
- **Action:** 5 root cause types: CONTENT, SPACING, STRUCTURAL, EXECUTION, METAPHOR
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH

#### M-A14: Add Void Guardrails to PA Skill
- **Sources:** 01 (01-020)
- **Action:** Max 1.5 viewport blank, min 60% content coverage, max 70% weight in first 30%
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** BLOCKING

#### M-A15: Add Metaphor Scoring Criteria 5+6 (Interpretive Distance + Content-Shape Fit)
- **Sources:** 02 (CF-11, CF-12, CF-13), 06 (FM-05-02)
- **Action:** Expand 4-criterion (12pt) rubric to 6-criterion (18pt). New threshold >= 12/18.
- **Target:** `~/.claude/skills/tension-composition/SKILL.md`
- **Priority:** BLOCKING

#### M-A16: Remove PA-03 (Redundant with PA-05b)
- **Sources:** 01 (01-017)
- **Action:** Remove redundant question
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** MEDIUM

#### M-A17: Add Deliberately-Quiet Detection (PA-54)
- **Sources:** 03 (FM-108, R-05)
- **Action:** "Does the page have AT LEAST 2 moments where you feel the design is deliberately QUIET?"
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH
- **NOTE:** Renumbered from PA-51 to PA-54 to avoid conflict with M-A08 (see CONFLICT C-01)

#### M-A18: Add Too-Dense Detection (PA-55)
- **Sources:** 03 (R-05)
- **Action:** "Is there any point where you can scroll through an entire viewport without a VISUAL BREAK?"
- **Target:** `~/.claude/skills/perceptual-auditing/SKILL.md`
- **Priority:** HIGH
- **NOTE:** Renumbered from PA-50 to PA-55 (see CONFLICT C-01)

---

### Category B: PROMPT ARCHITECTURE (Master Execution Prompt Assembly)

#### M-B01: Adopt 4-Layer Prompt Architecture (~240 lines total)
- **Sources:** 04 (A01), 06 (CHK-18-D2, PROMPT-18-L1-L4)
- **Action:** Layer 1 Conviction (70), Layer 2 Execution Spec (100-120), Layer 3 Coordination Spec (60), Layer 4 Reference Library (existing files)
- **Priority:** BLOCKING

#### M-B02: Write Layer 1 Conviction Document (70 lines)
- **Sources:** 04 (A02, A15), 04 (A39, A40, A42, A43, A46), 06 (PROMPT-18-L1)
- **Action:** Thesis, metaphor test, beauty brief, 3-word personality (Warm/Authoritative/Unhurried), 4 resolved tensions, exemplar passages from CD-006 + DD-006, perceptual sequence, emotional arc
- **Priority:** BLOCKING
- **Depends on:** Crown jewel exemplar passages (M-B03)

#### M-B03: Extract Crown Jewel Exemplars (20 lines CD-006, 20 lines DD-006)
- **Sources:** 04 (A35, A36)
- **Action:** Select bridge transition passage from CD-006, fractal coherence passage from DD-006
- **Priority:** HIGH

#### M-B04: Write Layer 2 Execution Spec (100-120 lines)
- **Sources:** 04 (A03, A16), 06 (PROMPT-18-L2)
- **Action:** 8 sections: Mission, Spatial Rules, Soul Rules, Compositional Rules, Process Rules, Builder Self-Check, Success Criteria, Kill Criteria
- **Priority:** BLOCKING
- **Depends on:** Rule classification (M-B05)

#### M-B05: Classify All Rules into KEEP/CONV/COORD/DROP/MERGE
- **Sources:** 04 (A05)
- **Action:** Apply 56-rule classification table. After merging: 22 KEEP + 3 NEW spatial = 25 binary rules.
- **Priority:** HIGH

#### M-B06: Write Layer 3 Coordination Spec (60 lines)
- **Sources:** 04 (A04), 06 (PROMPT-18-L3)
- **Action:** Agent Roster, Communication Obligations, Audit Protocol
- **Priority:** BLOCKING
- **Depends on:** M-B02, M-B04

#### M-B07: Add 3 NEW Spatial Accountability Rules
- **Sources:** 04 (A06), 07 (A20-02)
- **Action:** Content-to-void >= 60:40, no empty structural elements, >= 1 designed moment per scroll quartile
- **Priority:** BLOCKING

#### M-B08: Convert ALL Capability Rules to Obligation Rules
- **Sources:** 04 (A07), 02 (CP-01), 06 (CHK-18-D4), 07 (A20-09)
- **Action:** Every "CAN" becomes "MUST". Every "MAY" becomes "MUST". All rules binary.
- **Priority:** BLOCKING

#### M-B09: Add 7 Binary Beauty Prerequisites (BP-1 through BP-7)
- **Sources:** 04 (A38)
- **Action:** No void > 1.5vh, exactly 1 visual climax, max 3 border treatments, first viewport = header+content, density changes >= 3, final 10% composed, every mechanism serves reader
- **Priority:** BLOCKING

#### M-B10: Prompt Total Must Be <= 200 Lines (Layers 1-3)
- **Sources:** 03 (KB-04), 04 (A01, BC02, BC03), 06 (CHK-18-D1), 07 (P20-01)
- **Action:** Total across all layers <= 240 lines. Builder specifically sees <= 100 lines.
- **Priority:** BLOCKING
- **SEE CONFLICT C-02** (200 vs 100 -- resolved: both apply at different scopes)

#### M-B11: Builder Prompt Specifically <= 80-100 Lines
- **Sources:** 07 (A20-01, P20-01)
- **Action:** Create 80-line builder prompt with 10 sections (SOUL, CONTAINER, SPATIAL ANCHORS, METAPHOR, MECHANISMS, TRANSITIONS, COMMUNICATION, SELF-CHECK, COMPONENTS, DESIGNED MOMENTS)
- **Priority:** BLOCKING

#### M-B12: Create Phase-Specific Prompts (Per-Pass Rule Allocation)
- **Sources:** 07 (A20-04)
- **Action:** Pass 1 ~35 attention units, Pass 2 ~40 units, Pass 3 ~20 units. Only relevant rules per pass.
- **Priority:** BLOCKING

#### M-B13: Route Preparation Outputs to Correct Recipients
- **Sources:** 07 (A20-03, E20-03)
- **Action:** Rules -> Builder (short). Gates -> Team-lead. Vocabulary -> Planner. Checklists -> Auditors.
- **Priority:** BLOCKING

#### M-B14: Run Attention Audit Before Sending Builder Prompts
- **Sources:** 07 (A20-05)
- **Action:** Count demand units, verify surplus >= 30 units
- **Priority:** HIGH

---

### Category C: PIPELINE ARCHITECTURE (5-Pass + Gates)

#### M-C01: Implement 5-Pass Pipeline with Single-Concern Passes
- **Sources:** 06 (ACT-17-01, PASS-18-00 through PASS-18-04)
- **Action:** Pass 0 Content Architecture (Opus), Pass 1 Spatial Skeleton (2x Sonnet competitive), Pass 2 Mechanism Deployment (Sonnet), Pass 3 Metaphor Integration (Opus), Pass 4 Intentionality Layer (Opus)
- **Priority:** BLOCKING
- **SEE CONFLICT C-03** (3-pass vs 5-pass -- resolved: adopt 5-pass as latest design)

#### M-C02: Implement Competitive Skeleton Build (Pass 1)
- **Sources:** 06 (ACT-17-06, ACT-17-07)
- **Action:** Two builders execute Pass 1 in parallel, team-lead selects better. P(good) 70% -> 91%.
- **Priority:** HIGH

#### M-C03: Implement 7-Gate Architecture
- **Sources:** 01 (03-018), 06 (GATE-17-01 through GATE-17-05, GATE-18-00 through GATE-18-05)
- **Action:** Gate 0 Spatial Budget, Gate 1 Spatial Confidence (7 checks), Gate 2 Landmark Completeness, Gate 3 Composition Verification, Gate 4 Metaphor Coherence, Gate 5 Ship-Ready (Mode 4)
- **Priority:** BLOCKING
- **SEE CONFLICT C-04** (gate numbering -- resolved: adopt file 06's 7-gate model)

#### M-C04: Implement Spatial Confidence Gate (7 Binary Checks SC-01 through SC-07)
- **Sources:** 01 (03-003 through 03-009), 06 (GATE-18-01)
- **Action:** SC-01 container 940-960px, SC-02 max void <= 2160px, SC-03 content >= 70%, SC-04 squint test, SC-05 header <= 20%, SC-06 >= 5 sections, SC-07 footer reachable
- **Priority:** BLOCKING

#### M-C05: Implement Void Budget Calculation (Pre-Build Gate)
- **Sources:** 01 (03-001), 06 (ACT-16-02, GATE-18-00), 03 (KB-03)
- **Action:** Content-to-void ratio >= 60:40 at planning stage
- **Priority:** BLOCKING

#### M-C06: Implement Gate Execution Protocol + Fix Cycles
- **Sources:** 01 (03-011, 03-012, 03-013), 06 (ACT-17-02)
- **Action:** Max 2 fix cycles per pass, abort after 2 failures
- **Priority:** BLOCKING

#### M-C07: Include Programmatic Gate Runner Script
- **Sources:** 01 (03-014)
- **Action:** Include runSpatialConfidenceGate() JavaScript for spatial auditor
- **Priority:** BLOCKING

#### M-C08: Implement Embedded Auditor for Passes 1-2
- **Sources:** 06 (ACT-17-11 through ACT-17-15)
- **Action:** Dedicated Sonnet auditor, screenshots every 100 CSS lines, hard alerts, exclusive Playwright access
- **Priority:** HIGH

#### M-C09: Create Crown Jewel Technique Inventory
- **Sources:** 06 (ACT-17-16, ACT-17-17, ACT-17-18)
- **Action:** Opus agent reads DD-006 + CD-006, produces inventory for Pass 3-4 builders
- **Priority:** HIGH

#### M-C10: Execute Calibration Run Before Flagship
- **Sources:** 06 (ACT-17-19, ACT-17-20)
- **Action:** Ceiling-tier target, different content, simplified pipeline. 18 agents, 150-220 min.
- **Priority:** HIGH (STRONGLY recommended)

---

### Category D: PROCESS PROTOCOLS (Communication, Restraint, Content-First)

#### M-D01: Implement 5 Mandatory Communication Checkpoints (A-E)
- **Sources:** 02 (CP-02 through CP-06), 06 (COMM obligations)
- **Action:** A: Post-plan read-through, B: Post-build report, C: Spatial gate result, D: Post-elaboration report, E: Final build report
- **Priority:** BLOCKING

#### M-D02: Implement Standard Message Format (4 Types)
- **Sources:** 02 (CP-07, CP-08)
- **Action:** BLOCKING-DEPENDENCY, QUALITY-GATE, CLARIFICATION-REQUEST, ANOMALY-FLAG
- **Priority:** BLOCKING

#### M-D03: Implement Message Routing Table (17 Pairings)
- **Sources:** 02 (CP-24)
- **Action:** Define who can message whom, PA/novelty isolation prohibition
- **Priority:** BLOCKING

#### M-D04: Minimum 8 Substantive Messages + 5 Deliverables
- **Sources:** 02 (CP-26), 03 (FM-106, item 100)
- **Action:** HYBRID approach: require 5 mandatory checkpoint deliverable FILES + minimum 8 messages as verification
- **Priority:** BLOCKING
- **SEE CONFLICT C-05** (resolved: hybrid approach)

#### M-D05: PA/Novelty Agent Isolation (Zero Inbound Messages)
- **Sources:** 02 (CP-23), 01 (01-009)
- **Action:** PA-1, PA-2, novelty-evaluator receive ZERO messages from other agents
- **Priority:** BLOCKING

#### M-D06: Diagnosis-Before-Fix Protocol
- **Sources:** 02 (CP-14), 01 (01-021)
- **Action:** Root cause classification (CSS/CONTENT/ARCHITECTURE) before any fix. Team-lead approves.
- **Priority:** BLOCKING

#### M-D07: Implement Content Inventory as Step 1
- **Sources:** 02 (CF-01, CF-02), 06 (CHK-18-A1)
- **Action:** Complete content inventory BEFORE metaphor derivation. 15-20 min.
- **Priority:** BLOCKING

#### M-D08: Content Inventory Has VETO POWER Over Metaphor
- **Sources:** 02 (CF-21), 06 (theme 10)
- **Action:** If metaphor demands more zones than content supports, content wins
- **Priority:** BLOCKING

#### M-D09: Implement Restraint Protocol (Rejection Logging)
- **Sources:** 02 (RP-01 through RP-05)
- **Action:** Planner >= 15, Builder >= 6, Total >= 21 rejections. 5-field template.
- **Priority:** BLOCKING

#### M-D10: Implement Silence Zone Specification
- **Sources:** 02 (RP-06, RP-07, RP-08, RP-09)
- **Action:** Min 2 silence zones, each >= 200px, ONLY base typography. Placement rules.
- **Priority:** BLOCKING

#### M-D11: Hard Cap 16 Deployed Mechanisms, Recommended 12-14
- **Sources:** 02 (RP-10), 06 (CP-01, ACT-16-07), 07 (A19-04)
- **Action:** Maximum 16 (HARD CAP). Recommended 12-14.
- **Priority:** BLOCKING
- **SEE CONFLICT C-06** (resolved: 12-14 recommended, 16 hard cap)

#### M-D12: Per-Mechanism Scale Cap (Max 3 of 5)
- **Sources:** 02 (RP-12)
- **Action:** No mechanism at ALL 5 scales. Max 3 scales per mechanism.
- **Priority:** BLOCKING

#### M-D13: Minimum 2 Unused Mechanisms (of 18)
- **Sources:** 02 (RP-13)
- **Action:** At least 2 catalog mechanisms entirely unused
- **Priority:** BLOCKING

#### M-D14: Signal-to-Silence Ratio Target 0.6-0.8:1
- **Sources:** 02 (RP-15), 03 (CHECK-3.2)
- **Action:** 0.6-0.8 PASS, >1.0 FAIL
- **Priority:** BLOCKING

#### M-D15: 3 Embedded Build Checkpoints
- **Sources:** 01 (01-002, 01-003, 01-004)
- **Action:** Checkpoint 1: content audit before CSS. Checkpoint 2: spatial skeleton. Checkpoint 3: scroll experience.
- **Priority:** BLOCKING

#### M-D16: Builder's 10 Self-Check (B-01 through B-10)
- **Sources:** 01 (01-005)
- **Action:** 10-question self-check. B-01/B-03/B-09/B-10 are BLOCKING.
- **Priority:** BLOCKING

#### M-D17: Content-to-Pattern Selection Protocol (6 Steps)
- **Sources:** 02 (CF-06 through CF-10)
- **Action:** Zone count, density map, content types, 20% overhead, 800px zone min, density-shape alignment
- **Priority:** BLOCKING

#### M-D18: Metaphor Rejection Checklist (6 Binary Checks)
- **Sources:** 02 (CF-15)
- **Action:** Interpretive distance >= 2, content-shape fit >= 2, zone count, density direction, survival > 50%, no empty zones
- **Priority:** BLOCKING

#### M-D19: 7-Step Content-First Sequence with Time Budgets
- **Sources:** 02 (CF-22), 06 (recommended steps)
- **Action:** Inventory -> Derive -> Plan -> Build skeleton -> Elaborate -> Intentionality -> Audit
- **Priority:** BLOCKING

---

### Category E: GATES AND KILL CRITERIA

#### M-E01: 24 Kill Criteria Across 5 Stages + Time
- **Sources:** 03 (KB-01 through FK-05, TK-01), 06 (kill criteria table)
- **Action:** Pre-build (5), Pass 1 (6), Pass 2 (4), Pass 3 (3), Final (5), Time (1)
- **Priority:** BLOCKING

#### M-E02: 4 Abort Response Protocols (A-D)
- **Sources:** 03 (Protocols A-D)
- **Action:** Pre-Build, Pass 1, Pass 2, Final Stage abort protocols
- **Priority:** BLOCKING

#### M-E03: Decision Matrix (Fix vs Abort per SC check)
- **Sources:** 01 (03-017)
- **Action:** Per-check guidance for cycle 1 vs cycle 2 failures
- **Priority:** BLOCKING

#### M-E04: Gate 4 Integrated Check (7 Restraint Dimensions)
- **Sources:** 02 (RP-19)
- **Action:** Mechanism count, rejection count, unused, silence zones, placement, scale cap, signal-to-silence
- **Priority:** BLOCKING

#### M-E05: Composition Audit Checklist (CC-01 through CC-07)
- **Sources:** 05 (A13-11)
- **Action:** Reinforcing pairs, co-variation, removal test, response mechanism, silence zone, atmospheric, 1-sentence test
- **Priority:** BLOCKING

#### M-E06: Intentionality Checklist (I-01 through I-12)
- **Sources:** 05 (A14-10)
- **Action:** 12 binary intentionality checks. Must pass 10/12.
- **Priority:** BLOCKING

#### M-E07: 11 Success Gates + 12 Success Scores
- **Sources:** 06 (G1-G11, S1-S12)
- **Action:** Gates non-negotiable. Scores are optimization targets.
- **Priority:** BLOCKING

#### M-E08: Quality Band Classification
- **Sources:** 06 (ACT-17-22, ACT-17-23)
- **Action:** Crown Jewel / Full / Strong / MVF / Failed
- **Priority:** HIGH

---

### Category F: METACOGNITIVE CHECKPOINTS

#### M-F01: 19 Metacognitive Checkpoints Across 5 Stages
- **Sources:** 03 (CHECK-1.1 through CHECK-5.4)
- **Action:** Pre-build (5), Post-Pass-1 (3), Post-Pass-2 (4), Post-Pass-3 (3), Pre-Verdict (4)
- **Priority:** BLOCKING (irreducible minimum: CHECK-1.1, CHECK-2.1, CHECK-5.4)

#### M-F02: Fresh-Eyes Proportion Checks (Separate Agents)
- **Sources:** 03 (CHECK-2.1, CHECK-4.1)
- **Action:** SEPARATE agent with ZERO context views screenshots
- **Priority:** BLOCKING

#### M-F03: 5 Kill-Criteria Metacognitive Questions
- **Sources:** 03 (items 46-50)
- **Action:** Cognitive bias interrupts at each stage
- **Priority:** HIGH

---

### Category G: COMPOSITIONAL FLUENCY

#### M-G01: Require 3+ Reinforcing Pairs in Build Plan
- **Sources:** 05 (A13-01)
- **Action:** Shared semantic dimension, CSS channel, co-variation direction per pair
- **Priority:** BLOCKING

#### M-G02: Organize Build Plan by Compositional Clusters
- **Sources:** 05 (A13-08)
- **Action:** Cluster format, not mechanism-by-mechanism list
- **Priority:** BLOCKING

#### M-G03: Add Metaphor Context Block to Builder Prompt
- **Sources:** 05 (A13-05)
- **Action:** Guiding metaphor name, scroll direction meaning, mechanism co-variation
- **Priority:** BLOCKING

#### M-G04: Add Compositional Thinking Phrases
- **Sources:** 05 (A13-09)
- **Action:** "feel like ONE atmospheric change." Exclude: "deploy 12-15 mechanisms."
- **Priority:** HIGH

---

### Category H: INTENTIONALITY LAYER

#### M-H01: Implement 6 Intentionality Dimensions
- **Sources:** 05 (A14-01 through A14-06), 07 (A21-02)
- **Action:** Self-reference, pedagogical sequencing, cognitive transitions, bookending, meta-annotation, provenance threading
- **Priority:** HIGH

#### M-H02: Pass 1 Preparations for Intentionality (5 items)
- **Sources:** 05 (A14-07)
- **Action:** Bookend designation, .section-meta placeholders, transition divs, threading header stub, self-reference consideration
- **Priority:** BLOCKING

#### M-H03: Pass 2 Preparations for Intentionality (5 items)
- **Sources:** 05 (A14-08)
- **Action:** Per-section patterns, bookend mechanism echo, transition types, CSS source comments, boundary comments
- **Priority:** BLOCKING

#### M-H04: Pass 3 Execution Sequence (8 Steps)
- **Sources:** 05 (A14-09)
- **Action:** Self-reference -> pedagogical -> bridge prose -> bookend -> meta -> threading -> boundary comments -> provenance
- **Priority:** HIGH

---

### Category I: PERCEPTUAL HIERARCHY

#### M-I01: First-5-Seconds Design Protocol
- **Sources:** 05 (A15-01)
- **Action:** Dark header -> blue accent anchor -> visual texture variety -> pattern detection
- **Priority:** BLOCKING

#### M-I02: 5-Act Scroll Narrative
- **Sources:** 05 (A15-02)
- **Action:** Acts at 0-15%, 15-40%, 40-60%, 60-85%, 85-100%
- **Priority:** BLOCKING

#### M-I03: 3-Peak Visual Weight Distribution
- **Sources:** 05 (A15-03)
- **Action:** Opening 7/10, reading 4/10, climax 9/10 at 40-55%, substance 5-6/10, closing 6/10
- **Priority:** BLOCKING

#### M-I04: Prevent 6 Anti-Patterns
- **Sources:** 05 (A15-06 through A15-11)
- **Action:** Narrow river, zone monotony, front-loading, abandoned scroll, viewport amnesia, fragment
- **Priority:** BLOCKING

#### M-I05: 10 Quantified Targets
- **Sources:** 05 (A15-15)
- **Action:** 3 dark sections, 4-5 pause points, 7-9 background changes, etc.
- **Priority:** BLOCKING
- **SEE CONFLICT C-07** (content ratio thresholds)

---

### Category J: CROWN JEWEL STANDARDS

#### M-J01: Token-Referenced Sizing (Zero Hardcoded)
- **Sources:** 04 (A17)
- **Priority:** BLOCKING

#### M-J02: Semantic HTML + ARIA
- **Sources:** 04 (A18)
- **Priority:** HIGH

#### M-J03: Header-Footer Bookend Pattern
- **Sources:** 04 (A19)
- **Priority:** HIGH

#### M-J04: Soul Enforcement Selector
- **Sources:** 04 (A21)
- **Action:** `*:where(:not(input,button,select)){border-radius:0}`
- **Priority:** HIGH

#### M-J05: 3-Category Border System (4px/3px/1px)
- **Sources:** 04 (A20)
- **Priority:** HIGH

#### M-J06: Crown Jewel Quality Gate (8 Checks)
- **Sources:** 04 (A37)
- **Priority:** HIGH

---

### Category K: ADVERSARIAL / FUTURE / RESEARCH

#### M-K01: Add SC-08 Content Weight Check
- **Sources:** 03 (item 96)
- **Action:** Per section min 3 visual elements, min 2 content TYPES
- **Priority:** HIGH

#### M-K02: Replace Message Count with Deliverable Mandates
- **Sources:** 03 (FM-106)
- **Priority:** HIGH (absorbed into M-D04 hybrid approach)

#### M-K03: Move Intentionality to Build Plan (Planner Specifies, Pass 3 Executes)
- **Sources:** 03 (FM-107)
- **Priority:** HIGH

#### M-K04: Create 20-Line Voice Guide for Multi-Agent Passes
- **Sources:** 03 (FM-112)
- **Priority:** HIGH

#### M-K05: Novelty Evaluation AFTER Verdict
- **Sources:** 03 (FM-110)
- **Priority:** HIGH

#### M-K06: Realistic Metaphor Survival (55-65% Max Under Soul)
- **Sources:** 03 (FM-111)
- **Priority:** HIGH

#### M-K07: Select DIFFERENT Content from Middle/Ceiling
- **Sources:** 03 (P-09), 06 (Q3)
- **Priority:** HIGH

#### M-K08: Constraint Pressure Experiment Before Flagship
- **Sources:** 07 (A19-01, P19-01)
- **Priority:** HIGH (BLOCKING per author but optional per practical priority)

#### M-K09: Reduce Mechanism Target to 12-14
- **Sources:** 06 (ACT-16-07), 07 (A19-04)
- **Priority:** HIGH (absorbed into M-D11)

---

## SECTION 2: IDENTIFIED CONFLICTS

### CONFLICT C-01: PA Question Numbering
- **File 01** (01-013): PA-50 = empty viewport count, PA-51 = content scroll %
- **File 03** (FM-108): PA-51 = "deliberately quiet," (R-05): PA-50 = "too dense"
- **Resolution:** File 01 definitions specified first with full detail. Rename file 03's additions to PA-54 and PA-55.

### CONFLICT C-02: Builder Prompt Length
- **File 01/04** (KB-04, A01): Execution prompt <= 200 lines total
- **File 07** (A20-01, P20-01): Builder prompt <= 80-100 lines
- **Resolution:** NOT a true conflict. 200 lines = total across layers. 80-100 = per-builder-agent. ADOPT BOTH.

### CONFLICT C-03: Pipeline Pass Count
- **Files 01, 05**: 3-pass model (skeleton, elaboration, intentionality)
- **File 06**: 5-pass model (content arch, skeleton, mechanism, metaphor, intentionality)
- **Resolution:** 5-pass is MOST RECENT and COMPREHENSIVE. ADOPT 5-pass.

### CONFLICT C-04: Gate Numbering
- **File 01**: 5 gates (Gate 1-5)
- **File 06**: 7 gates (Gate 0-5 + Landmark Completeness)
- **Resolution:** File 06 adds Gate 0 (Spatial Budget) + Gate 2 (Landmark). ADOPT 7-gate model.

### CONFLICT C-05: Messaging Approach
- **File 02**: Minimum 8 substantive messages with count mandates
- **File 03**: Replace count mandates with deliverable mandates (Goodhart's Law risk)
- **Resolution:** GENUINE CONFLICT. ADOPT HYBRID: 5 mandatory checkpoint deliverable files + 8 messages as verification.

### CONFLICT C-06: Mechanism Count Target
- **Tier Model**: Flagship = 16-18
- **File 02**: Hard cap 16, recommended 12-14
- **Files 06, 07**: Target 14-16 or 12-14
- **Resolution:** PROGRESSIVE REFINEMENT. ADOPT: 12-14 recommended, 16 HARD CAP.

### CONFLICT C-07: Content-to-Void Ratio Thresholds
- **File 01** (Checkpoint 2): >= 60%
- **File 01** (SC-03): >= 70%
- **File 05** (target): 90%+
- **File 06** (BC-17-02): < 15% void (= 85%+)
- **Resolution:** STAGE-SPECIFIC thresholds: Pre-build >= 60%, Post-Pass-1 >= 70%, Final >= 85%.

### CONFLICT C-08: Restraint Ratio Definition
- **File 02**: Signal-to-silence ratio 0.6-0.8:1
- **File 03**: R/D >= 1.5 (rejected-to-deployed)
- **Resolution:** TWO DIFFERENT METRICS. Signal-to-silence = visual density. R/D = decision restraint. ADOPT BOTH with distinct names.

### CONFLICT C-09: Max Void Threshold
- **File 01** (03-004): Max void <= 2,160px (1.5 x 1440px)
- **File 03** (SP-02): Max void <= 1,620px
- **Resolution:** GENUINE DIFFERENCE. ADOPT 2,160px (1.5 viewport heights) as more precisely derived.

---

## SECTION 3: IMPLEMENTATION ORDER

### Phase 1: Design System Enrichments (BEFORE prompt assembly)
Order per file 01 (02-008):
1. M-A01 (B1 whitespace prohibition)
2. M-A07 (C3 spacing tokens)
3. M-A05 + M-A06 (A3 + D3 semantic rules)
4. M-A03 (A1 transition grammar)
5. M-A04 (A2 restraint protocol)
6. M-A02 (B3 front-loaded weight)
7. M-A08 through M-A18 (PA skill enrichments)
8. M-A15 (Metaphor scoring criteria 5+6)

### Phase 2: Prompt Architecture
1. M-B05 (Rule classification)
2. M-B03 (Crown jewel exemplars)
3. M-B02 (Layer 1 Conviction)
4. M-B07 + M-B08 + M-B09 (Spatial rules, obligation conversion, beauty)
5. M-B04 (Layer 2 Execution Spec)
6. M-B06 (Layer 3 Coordination Spec)
7. M-B12 (Phase-specific prompts)
8. M-B14 (Attention audit)
9. M-B10/M-B11 (Line count verification)

### Phase 3: Pipeline + Protocol Assembly
1. M-C01 (5-pass pipeline)
2. M-C03/M-C04/M-C05 (Gate architecture + spatial gate + void budget)
3. M-C07 (Gate runner script)
4. M-D01/M-D02/M-D03 (Communication checkpoints + format + routing)
5. M-D07/M-D08 (Content inventory + veto power)
6. M-D09/M-D10/M-D11-14 (Restraint + silence + mechanism rules)
7. M-E01-04 (Kill criteria + abort + decision matrix + Gate 4)
8. M-E05-07 (Composition + intentionality + success criteria)

### Phase 4: Pre-Experiment
1. M-K07 (Select content topic)
2. M-K08 (Constraint pressure experiment -- if run)
3. M-D07 (Content inventory on selected content)
4. M-C10 (Calibration run -- if run)

---

## SECTION 4: SUMMARY STATISTICS

| Category | Items | BLOCKING | HIGH | MEDIUM+ |
|----------|-------|----------|------|---------|
| A: Design System Enrichments | 18 | 9 | 7 | 2 |
| B: Prompt Architecture | 14 | 11 | 3 | 0 |
| C: Pipeline Architecture | 10 | 6 | 4 | 0 |
| D: Process Protocols | 19 | 15 | 4 | 0 |
| E: Gates & Kill Criteria | 8 | 7 | 1 | 0 |
| F: Metacognitive Checkpoints | 3 | 2 | 1 | 0 |
| G: Compositional Fluency | 4 | 3 | 1 | 0 |
| H: Intentionality Layer | 4 | 2 | 2 | 0 |
| I: Perceptual Hierarchy | 5 | 5 | 0 | 0 |
| J: Crown Jewel Standards | 6 | 1 | 5 | 0 |
| K: Adversarial/Future | 9 | 0 | 9 | 0 |
| **TOTAL** | **100** | **61** | **37** | **2** |

### Conflicts: 9 identified, all resolved
### Cross-file items appearing in 3+ files: 10 (see below)

### Most-Referenced Items (3+ extraction files)
1. **Container width 940-960px** -- Files 01, 03, 04, 05, 06, 07 (6 files)
2. **Content-to-void ratio** -- Files 01, 02, 03, 05, 06, 07 (6 files)
3. **Binary rules = 100% compliance** -- Files 02, 03, 04, 06, 07 (5 files)
4. **Void budget gate** -- Files 01, 03, 06 (3 files)
5. **Content inventory before metaphor** -- Files 02, 05, 06 (3 files)
6. **Restraint > saturation** -- Files 02, 04, 05, 07 (4 files)
7. **Prompt compression ~240 lines** -- Files 03, 04, 06, 07 (4 files)
8. **PA/novelty isolation** -- Files 01, 02, 03 (3 files)
9. **Fix cycle max 2** -- Files 01, 03, 06 (3 files)
10. **Mechanism count 12-14 recommended** -- Files 02, 06, 07 (3 files)

### Target File Modification Summary
| Target File | Enrichments | Lines Added | Source Items |
|-------------|-------------|-------------|-------------|
| prohibitions.md | 2 (B1 + B3) | ~75 | M-A01, M-A02 |
| mechanism-catalog.md | 2 (A1 + A2) | ~130 | M-A03, M-A04 |
| tokens.css | 1 (C3) | ~8 | M-A07 |
| semantic-rules.md | 2 (A3 + D3) | ~115 | M-A05, M-A06 |
| PA SKILL.md | 8+ enrichments | ~100+ | M-A08 through M-A18 |
| tension-composition SKILL.md | 1 (criteria 5+6) | ~50 | M-A15 |
| NEW: Layer 1 Conviction | Full document | ~70 | M-B02 |
| NEW: Layer 2 Execution Spec | Full document | ~100-120 | M-B04 |
| NEW: Layer 3 Coordination Spec | Full document | ~60 | M-B06 |

---

**CROSS-REFERENCE COMPLETE. 100 deduplicated master items from 7 extraction files (covering 21 source reports). 9 conflicts identified with resolutions. 4-phase implementation order specified.**

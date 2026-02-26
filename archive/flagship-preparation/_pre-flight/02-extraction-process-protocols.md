# Extraction: Process & Protocol Files (04, 05, 06)

**Extractor:** extraction-worker-2
**Date:** 2026-02-16
**Source files:**
- `04-restraint-protocol.md` (583 lines)
- `05-content-first-methodology.md` (965 lines)
- `06-communication-protocol.md` (690 lines)

---

## FILE 1: 04-restraint-protocol.md (Restraint Protocol)

### ACTION ITEMS

#### RP-01: Create Rejection Log Template in Build Process
- **Source:** 04-restraint-protocol.md, lines 16-108
- **Action:** Implement rejection log format in the elaboration plan. Each rejected placement uses the exact 5-field template: REJECTED, PROPOSED LOCATION, PROPOSED SCALE, REASON FOR REJECTION, WHAT IS PRESERVED.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** `02b-elaboration-plan.md` (planned output file during flagship)
- **Dependencies:** None

#### RP-02: Planner Documents Minimum 15 Rejected Placements (Phase A)
- **Source:** 04-restraint-protocol.md, lines 80-84
- **Action:** During Pass 2 planning, the planner MUST document at least 15 rejected placements in the elaboration plan's Restraint Map BEFORE handing the plan to the builder.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** `02b-elaboration-plan.md`
- **Dependencies:** Metaphor derivation and mechanism selection complete

#### RP-03: Builder Documents Minimum 6 Additional Rejected Placements (Phase B)
- **Source:** 04-restraint-protocol.md, lines 86-91
- **Action:** During Pass 2 execution, the builder MUST document at least 6 additional rejected placements, appended to the Restraint Map after implementation.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** `02b-elaboration-plan.md`
- **Dependencies:** RP-02 complete, builder actively implementing

#### RP-04: Enforce Total Minimum 21 Rejected Placements Before Pass 3
- **Source:** 04-restraint-protocol.md, lines 92-101
- **Action:** Total rejection count must reach 21 before proceeding to Pass 3 (Intentionality Layer). Each entry is ONE placement (same mechanism at different locations = separate rejections).
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** `02b-elaboration-plan.md`
- **Dependencies:** RP-02 + RP-03

#### RP-05: Gate 4 Rejection Count Verification
- **Source:** 04-restraint-protocol.md, lines 103-108
- **Action:** At Gate 4 (Composition Verification), team-lead counts rejection entries: >= 21 PASS, 15-20 WARN (prompt for more), < 15 FAIL (return to planner).
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist / team-lead instructions
- **Dependencies:** Pass 2 complete

#### RP-06: Implement Silence Zone Specification
- **Source:** 04-restraint-protocol.md, lines 111-206
- **Action:** Enforce silence zone rules in builder instructions: minimum 2 silence zones, each >= 200px height at 1440px viewport, containing ONLY base typography (no mechanism CSS). Specific CSS allowlist and prohibit list defined.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Builder prompt / execution prompt
- **Dependencies:** None

#### RP-07: Silence Zone Placement Rules
- **Source:** 04-restraint-protocol.md, lines 174-181
- **Action:** Enforce 3 placement rules: (1) After high-density sections (3+ mechanisms MUST be followed by silence or 1-mechanism section), (2) Before the page's strongest designed moment (at least 200px silence), (3) NOT at page start or end (first/last 300px excluded).
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Builder prompt / planner prompt
- **Dependencies:** None

#### RP-08: Silence Zone Documentation in Restraint Map
- **Source:** 04-restraint-protocol.md, lines 182-194
- **Action:** Each silence zone documented with: LOCATION, APPROXIMATE POSITION (% scroll depth), CONTENT WITHIN, WHAT IT FOLLOWS, WHAT IT PRECEDES, WHY SILENCE HERE.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** `02b-elaboration-plan.md`
- **Dependencies:** Planner identifies silence zone locations

#### RP-09: Gate 4 Silence Zone Verification
- **Source:** 04-restraint-protocol.md, lines 198-205
- **Action:** At Gate 4, verify: (1) count qualifying silence zones (no mechanism CSS), (2) each >= 200px rendered height, (3) at least 2 exist, (4) at least 1 precedes most impactful element. Binary PASS/FAIL.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist
- **Dependencies:** Pass 2 complete

#### RP-10: Hard Cap 16 Deployed Mechanisms
- **Source:** 04-restraint-protocol.md, lines 209-216
- **Action:** Maximum deployed mechanisms is 16 (HARD CAP, no exception). Recommended range 12-14. If planner specifies > 16, plan MUST be revised before builder begins.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Planner prompt / Gate 4 checklist
- **Dependencies:** None

#### RP-11: Mechanism Deployment Counting Rules
- **Source:** 04-restraint-protocol.md, lines 219-234
- **Action:** Define "deployed" = CSS PRESENT in final stylesheet AND applied to >= 1 HTML element. CSS-only presence without HTML application = not deployed. Same mechanism at multiple scales = 1 deployment.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Gate 4 checklist / programmatic-auditor instructions
- **Dependencies:** None

#### RP-12: Per-Mechanism Scale Cap (Max 3 of 5 Scales)
- **Source:** 04-restraint-protocol.md, lines 236-246
- **Action:** No mechanism may operate at ALL 5 scales. Maximum deployment per mechanism: 3 scales. 4+ scales = PROHIBITED, reduce to 3.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist / builder instructions
- **Dependencies:** None

#### RP-13: Minimum 2 Unused Mechanisms (of 18)
- **Source:** 04-restraint-protocol.md, lines 248-268
- **Action:** At least 2 of the 18 catalog mechanisms MUST remain entirely unused (zero CSS, zero HTML). Planner selects based on content fit, not arbitrary exclusion. Document with UNUSED MECHANISM template.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** `02b-elaboration-plan.md` / Gate 4 checklist
- **Dependencies:** Content inventory complete

#### RP-14: Gate 4 Full Mechanism Verification
- **Source:** 04-restraint-protocol.md, lines 269-284
- **Action:** At Gate 4, programmatic-auditor checks: (1) deployed count <= 16, (2) per-mechanism scale coverage <= 3, (3) unused count >= 2. All three must PASS.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist / programmatic-auditor instructions
- **Dependencies:** Pass 2 complete

#### RP-15: Signal-to-Silence Ratio Target 0.6-0.8:1
- **Source:** 04-restraint-protocol.md, lines 287-345
- **Action:** Implement signal-to-silence ratio measurement. Target: 0.6-0.8:1. Signal events = borders, background shifts, dark blocks, components, decorative CSS, transitions. Silence = paragraph groups, spacing >= 32px, silence zones (count 2x). 0.6-0.8 PASS, 0.5-0.59 or 0.81-1.0 WARN, >1.0 or <0.5 FAIL.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist
- **Dependencies:** Pass 2 complete

#### RP-16: Signal-to-Silence Ratio Measurement After Pass 2
- **Source:** 04-restraint-protocol.md, lines 400-405
- **Action:** Ratio measured AFTER Pass 2 completion (before Pass 3) at Gate 4. Planner can ESTIMATE during elaboration planning -- if planned ratio > 1.0, reduce deployments BEFORE builder begins.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt
- **Dependencies:** RP-15 defined

#### RP-17: Include Builder Instructions (< 30 Lines) in Builder Prompt
- **Source:** 04-restraint-protocol.md, lines 465-503
- **Action:** Include the exact 30-line builder instruction block (lines 470-503) verbatim in the builder agent's prompt. Covers mechanism cap, silence zones, rejection log, signal-to-silence ratio, self-check.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Master execution prompt / builder agent prompt
- **Dependencies:** None

#### RP-18: Include Restraint Map Template in Elaboration Plan
- **Source:** 04-restraint-protocol.md, lines 507-558
- **Action:** Include the complete Restraint Map template (Appendix A) as a section of `02b-elaboration-plan.md`. Contains: Deployed Mechanisms table, Unused Mechanisms entries, Rejected Placements entries, Silence Zones entries, Signal-to-Silence Estimate.
- **Category:** ENRICHMENT
- **Priority:** HIGH
- **Target file:** `02b-elaboration-plan.md` template / planner prompt
- **Dependencies:** None

#### RP-19: Gate 4 Integrated Check (All 7 Binary Checks)
- **Source:** 04-restraint-protocol.md, lines 449-461
- **Action:** Gate 4 runs all 7 checks: mechanism count <= 16, rejection count >= 21, unused >= 2, silence zones >= 2, silence zone placement before strongest moment, per-mechanism scales <= 3, signal-to-silence 0.6-0.8. ALL must PASS before Pass 3.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist / team-lead instructions
- **Dependencies:** Pass 2 complete

### BINARY CHECKS (from 04-restraint-protocol.md)

| ID | Check | Pass | Fail | Source Line |
|----|-------|------|------|-------------|
| BC-04-01 | Rejection count | >= 21 entries | < 15 FAIL, 15-20 WARN | ~104-108 |
| BC-04-02 | Silence zone count | >= 2 zones | < 2 | ~166-170 |
| BC-04-03 | Silence zone height | Each >= 200px at 1440px | Any < 200px | ~162-163 |
| BC-04-04 | Silence before drama | >= 1 zone before strongest moment | 0 before strongest | ~178-179 |
| BC-04-05 | No silence at start/end | None in first/last 300px | Any in first/last 300px | ~180-181 |
| BC-04-06 | Mechanism count | <= 16 deployed | > 16 | ~213-215 |
| BC-04-07 | Mechanism recommended | 12-14 deployed | < 12 or > 14 (soft) | ~215-216 |
| BC-04-08 | Per-mechanism scale | <= 3 scales each | Any at 4+ scales | ~238-245 |
| BC-04-09 | Unused mechanisms | >= 2 of 18 unused | < 2 unused | ~250-252 |
| BC-04-10 | Signal-to-silence ratio | 0.6-0.8:1 | > 1.0 FAIL, 0.81-1.0 WARN | ~341-346 |
| BC-04-11 | Planner rejections (Phase A) | >= 15 | < 15 | ~84 |
| BC-04-12 | Builder rejections (Phase B) | >= 6 | < 6 | ~90 |
| BC-04-13 | After high-density: silence | 3+ mechanism section followed by silence or 1-mechanism section | No silence after dense section | ~176-177 |

### CROSS-REFERENCES (from 04-restraint-protocol.md)

| Ref | Referenced File | What's Referenced | Source Line |
|-----|----------------|-------------------|-------------|
| XR-04-01 | 05-flagship-architecture.md Section C | Mechanism cap, scale rule, silence zone spec | ~566-578 |
| XR-04-02 | 06-adversarial-anti-scale.md | "Restraint > saturation" argument | ~7-8 |
| XR-04-03 | 02-content-form-analysis.md | Signal-to-silence 1.18:1 finding, Section D | ~8, 296-298 |
| XR-04-04 | 03-diminishing-returns.md | "Restraint creates richness, iteration > scale" | ~9 |
| XR-04-05 | mechanism-catalog.md | 18 mechanisms, 5 categories | ~10 |
| XR-04-06 | 02b-elaboration-plan.md | Restraint Map target location | ~82, 489 |
| XR-04-07 | Content-form analysis Section D5 | Ceiling best moment ratio ~0.33:1 | ~577 |

### FILE MODIFICATIONS (from 04-restraint-protocol.md)

| ID | Target File | Modification | Priority |
|----|------------|-------------|----------|
| FM-04-01 | Master execution prompt | Add 30-line builder instructions block (lines 470-503) | BLOCKING |
| FM-04-02 | `02b-elaboration-plan.md` template | Add Restraint Map template (Appendix A, lines 511-558) | BLOCKING |
| FM-04-03 | Gate 4 checklist | Add all 7 restraint dimension checks (lines 449-461) | BLOCKING |
| FM-04-04 | Planner prompt | Add rejection logging instructions (Phase A, min 15) | BLOCKING |
| FM-04-05 | Builder prompt | Add rejection logging instructions (Phase B, min 6) | BLOCKING |
| FM-04-06 | Programmatic-auditor instructions | Add mechanism count, scale coverage, unused count checks | HIGH |

### PREREQUISITES (from 04-restraint-protocol.md)

| ID | Prerequisite | Must Be True Before |
|----|-------------|-------------------|
| PR-04-01 | Mechanism catalog (18 mechanisms, 5 categories) exists and is current | Restraint protocol can be applied |
| PR-04-02 | Elaboration plan template includes Restraint Map section | Planner can document rejections |
| PR-04-03 | Gate 4 checklist includes all 7 restraint checks | Composition verification can gate |
| PR-04-04 | Builder instructions (30 lines) included in builder prompt | Builder knows restraint rules |

---

## FILE 2: 05-content-first-methodology.md (Content-First Methodology)

### ACTION ITEMS

#### CF-01: Create Content Inventory BEFORE Metaphor Derivation
- **Source:** 05-content-first-methodology.md, lines 28-165
- **Action:** Implement the content inventory template as the FIRST step in the flagship pipeline. Fill in BEFORE opening the metaphor derivation pipeline. Budget: 15-20 minutes maximum.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt / planner prompt
- **Dependencies:** Raw source content available

#### CF-02: Content Inventory Template Sections
- **Source:** 05-content-first-methodology.md, lines 38-147
- **Action:** The content inventory template must include ALL of these sections: SOURCE, WORD COUNT, CONTENT TYPE MIX, ESTIMATED READING TIME, SECTION CATALOG (per-section: content type, word count, code blocks, tables, lists, diagrams, callouts, information density, reader intent, dependencies), NATURAL GROUPINGS, DENSITY MAP, CONTENT BOUNDARIES, ESTIMATED HEIGHT MAP, CONTENT-ONLY ZONE COUNT.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** Planner prompt / content inventory template
- **Dependencies:** None

#### CF-03: Use Source Content's Own Vocabulary (Not Metaphor Terms)
- **Source:** 05-content-first-methodology.md, lines 149-153
- **Action:** During inventory, do NOT impose metaphorical terms ("zone", "wing", "chamber"). Call sections by their topic names. This is a binary rule for the planner.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt
- **Dependencies:** None

#### CF-04: Identify Density Peaks from Content Volume, Not Importance
- **Source:** 05-content-first-methodology.md, lines 155-156
- **Action:** Density = information volume per scroll-inch, not conceptual weight. Planner must use code block count + prose length to determine density, NOT topic importance.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt
- **Dependencies:** None

#### CF-05: Count Natural Boundaries, Not Existing Headings
- **Source:** 05-content-first-methodology.md, lines 157-158
- **Action:** Content may have 12 `<h2>` headings but only 4 genuine topic shifts. Inventory counts topic shifts, not headings.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt
- **Dependencies:** None

#### CF-06: Implement Content-to-Pattern Selection Protocol (6 Steps)
- **Source:** 05-content-first-methodology.md, lines 167-281
- **Action:** Implement 6-step pattern selection protocol: (1) Read content-only zone count (max zones), (2) Read density map (density shape dictates pattern type), (3) Count content types (prose vs code vs mixed determines pattern), (4) Apply 20% structural overhead budget, (5) Apply 800px zone minimum content mass, (6) Verify density-shape alignment.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Planner prompt / master execution prompt
- **Dependencies:** CF-01 content inventory complete

#### CF-07: Structural Overhead Budget: Max 20% of Content Height
- **Source:** 05-content-first-methodology.md, lines 204-214
- **Action:** Pattern may add no more than 20% structural overhead to content's natural height. `overhead_budget = total_content_height * 0.20`. Candidate patterns exceeding this are DISQUALIFIED.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Planner prompt / Gate 4 checklist
- **Dependencies:** Content inventory height estimates

#### CF-08: Zone Minimum Content Mass: 800px Rendered Height
- **Source:** 05-content-first-methodology.md, lines 216-222
- **Action:** Every zone MUST contain at least 800px of rendered content height. `zone_content_height / (zone_content_height + zone_overhead) >= 0.85`. Failing zones should be merged with adjacent zones.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Planner prompt / Gate 4 checklist
- **Dependencies:** Content inventory height estimates

#### CF-09: Density-Shape Alignment Verification
- **Source:** 05-content-first-methodology.md, lines 224-235
- **Action:** Pattern's density demands MUST align with content's density shape. Misaligned patterns MUST be rejected. Table of alignment rules: Middle peak + escalating = MISALIGNED, Middle peak + arch = ALIGNED, Late peak + escalating = ALIGNED, Uniform + graduated = MISALIGNED.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Planner prompt
- **Dependencies:** CF-01 density map, metaphor derivation

#### CF-10: Red Flags for Immediate Pattern Rejection
- **Source:** 05-content-first-methodology.md, lines 237-248
- **Action:** Implement 5 red flags as binary rejection criteria: (1) pattern requires more zones than natural sections, (2) pattern requires absent content types, (3) metaphor IS content's vocabulary (zero interpretive distance), (4) pattern requires empty structural zones, (5) pattern's density curve wrong direction.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Planner prompt / metaphor derivation pipeline
- **Dependencies:** CF-01 content inventory

#### CF-11: Revised Metaphor Scoring Rubric (6 Criteria, 18 Points)
- **Source:** 05-content-first-methodology.md, lines 299-346
- **Action:** Revise metaphor scoring rubric from 4 criteria (12 points) to 6 criteria (18 points). ADD criterion 5: Interpretive Distance (0-3) and criterion 6: Content-Shape Fit (0-3). New threshold >= 12/18.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** tension-composition SKILL.md or metaphor derivation pipeline
- **Dependencies:** None

#### CF-12: Interpretive Distance Scoring (Criterion 5)
- **Source:** 05-content-first-methodology.md, lines 314-327
- **Action:** Score 0 = metaphor uses content's own vocabulary; Score 1 = same domain; Score 2 = related but different domain (sweet spot); Score 3 = unrelated domain. Key test: remove text labels -- can reader still perceive metaphor through visual structure alone?
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** tension-composition SKILL.md or metaphor derivation pipeline
- **Dependencies:** CF-11

#### CF-13: Content-Shape Fit Scoring (Criterion 6)
- **Source:** 05-content-first-methodology.md, lines 329-346
- **Action:** Score 0 = contradicts content inventory; Score 1 = different but adaptable; Score 2 = matches with minor adaptation (minimum acceptable); Score 3 = perfect alignment. Scoring procedure: compare zone count, density map, content types.
- **Category:** ENRICHMENT
- **Priority:** BLOCKING
- **Target file:** tension-composition SKILL.md or metaphor derivation pipeline
- **Dependencies:** CF-11, CF-01

#### CF-14: Metaphor Candidate Comparison Table
- **Source:** 05-content-first-methodology.md, lines 347-379
- **Action:** When evaluating metaphors, fill in comparison table with all 6 criteria for each candidate. Document content zones, density shape, content vocabulary first. Select based on total score emphasizing criteria 5 and 6.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt / metaphor derivation output template
- **Dependencies:** CF-11

#### CF-15: Metaphor Rejection Checklist (6 Binary Checks)
- **Source:** 05-content-first-methodology.md, lines 381-393
- **Action:** Before committing to metaphor, verify ALL: (1) Interpretive Distance >= 2, (2) Content-Shape Fit >= 2, (3) zone count <= inventory zone count, (4) density direction matches, (5) survival estimate > 50% without labels, (6) no empty structural zones required. Any failure = reject or adapt.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Planner prompt / metaphor gate checklist
- **Dependencies:** CF-11, CF-01

#### CF-16: Content Density Planning Table
- **Source:** 05-content-first-methodology.md, lines 396-477
- **Action:** Before building, fill in density planning table for each section: content height estimate, structural overhead, content ratio (must >= 85%), PASS/FAIL. Total page must be 60-75% content, 15-25% structural, 5-10% intentional whitespace.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt / build plan template
- **Dependencies:** CF-01 content inventory

#### CF-17: Height Estimation Rules
- **Source:** 05-content-first-methodology.md, lines 404-416
- **Action:** At 960px container, 48px padding, 18px body font: prose paragraph = ~92px (3 lines x 30.6px), code block (15 lines) = ~315px, table (5 rows) = ~240px, list (5 items) = ~153px, ASCII diagram (20 lines) = ~420px, callout = ~92px, h2 = ~80px, h3 = ~64px.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt
- **Dependencies:** None

#### CF-18: Zone Content-to-Structure Ratio >= 85%
- **Source:** 05-content-first-methodology.md, lines 420-433
- **Action:** Minimum content-to-structure ratio per zone: 85%. `zone_content_height / (zone_content_height + zone_structural_overhead) >= 0.85`. Overhead includes zone padding, zone indicator height (~50px if present), transition element height, metaphor-specific elements.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist / planner prompt
- **Dependencies:** CF-16 density planning

#### CF-19: Words-Per-Zone Minimum (300 Words or 5 Code Blocks)
- **Source:** 05-content-first-methodology.md, lines 435-439
- **Action:** Minimum: 300 words of prose OR 5 code blocks OR equivalent mixed content per zone. Prevents metaphor-inflated empty zones.
- **Category:** GATE
- **Priority:** HIGH
- **Target file:** Planner prompt / Gate checklist
- **Dependencies:** CF-01

#### CF-20: Full-Page Density Budget (60-75% Content)
- **Source:** 05-content-first-methodology.md, lines 441-454
- **Action:** Target at 1440px viewport: 60-75% content, 15-25% structural, 5-10% intentional whitespace, 0% unintentional void. Max page height = content_height / 0.60.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Gate 4 checklist / planner prompt
- **Dependencies:** CF-16

#### CF-21: Content Inventory Has VETO POWER Over Metaphor
- **Source:** 05-content-first-methodology.md, lines 940-942
- **Action:** Content inventory constrains the plan's STRUCTURE (zone count, density direction, height budget). If metaphor demands 7 zones but inventory identifies 5, planner creates 5 zones. Content does NOT stretch to fill the metaphor.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Planner prompt / master execution prompt
- **Dependencies:** CF-01

#### CF-22: Content-First Sequence (7 Steps with Time Budgets)
- **Source:** 05-content-first-methodology.md, lines 945-961
- **Action:** Implement 7-step flagship sequence: (1) Inventory 15-20min, (2) Derive metaphor 20-30min (using inventory for criteria 5+6), (3) Plan with content constraints 20-30min, (4) Build skeleton 30-40min, (5) Elaborate with restraint 40-60min, (6) Add intentionality 20-30min, (7) Audit against content budget 30-40min.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt
- **Dependencies:** All CF items

#### CF-23: Planner Receives THREE Inputs
- **Source:** 05-content-first-methodology.md, lines 933-939
- **Action:** Planner agent receives: (1) Content inventory (structure constraints), (2) Metaphor derivation (vocabulary constraints), (3) Design system vocabulary/mechanism catalog (grammar constraints). Content inventory constrains structure, metaphor constrains vocabulary, design system constrains grammar.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Planner prompt
- **Dependencies:** CF-01, metaphor derivation, mechanism catalog

#### CF-24: No Zone Indicators in Skeleton (Background Shifts Only)
- **Source:** 05-content-first-methodology.md, lines 778-779, 881-882
- **Action:** No zone indicators ("ZONE 1 OF 4"). Background shifts and border-weight changes communicate position without labels. Skeleton has zones with background differentiation and simple spacing transitions only.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Skeleton-builder prompt
- **Dependencies:** None

#### CF-25: No Checkpoint Infrastructure (Simple Spacing Instead)
- **Source:** 05-content-first-methodology.md, lines 780-781
- **Action:** Replace checkpoint dividers with dark backgrounds and text labels with simple spacing increases (48-80px of designed silence) at natural boundaries.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Skeleton-builder prompt / planner prompt
- **Dependencies:** None

#### CF-26: Mechanisms Amplify Existing Content Density
- **Source:** 05-content-first-methodology.md, lines 885-888
- **Action:** In Pass 2, mechanisms deployed to AMPLIFY existing content density, not to CREATE density where none exists. Dense content section gets heaviest deployment; sparse section gets lightest. No mechanism deployed just to make metaphor legible.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Elaboration-builder prompt / planner prompt
- **Dependencies:** CF-01, CF-16

### BINARY CHECKS (from 05-content-first-methodology.md)

| ID | Check | Pass | Fail | Source Line |
|----|-------|------|------|-------------|
| BC-05-01 | Content inventory completed before metaphor derivation | Inventory exists | Missing | ~151 |
| BC-05-02 | Pattern zone count <= content natural sections | zones <= sections | zones > sections | ~179, 239 |
| BC-05-03 | Structural overhead <= 20% of content height | <= 20% | > 20% | ~204 |
| BC-05-04 | Zone minimum content mass >= 800px | Each >= 800px | Any < 800px | ~218 |
| BC-05-05 | Zone content-to-structure ratio >= 85% | >= 85% | < 85% | ~427 |
| BC-05-06 | Density-shape alignment | Aligned | Misaligned | ~224-235 |
| BC-05-07 | Metaphor interpretive distance >= 2 | >= 2 | < 2 | ~385 |
| BC-05-08 | Metaphor content-shape fit >= 2 | >= 2 | < 2 | ~386 |
| BC-05-09 | Metaphor total score >= 12/18 | >= 12 | < 12 | ~312 |
| BC-05-10 | Metaphor survival > 50% without labels | > 50% | <= 50% | ~389 |
| BC-05-11 | No empty structural zones | 0 empty | Any empty | ~390 |
| BC-05-12 | Full page 60-75% content | 60-75% | Outside range | ~445 |
| BC-05-13 | Words per zone >= 300 (or 5 code blocks) | >= 300 words | < 300 words | ~437 |
| BC-05-14 | Content inventory uses source vocabulary (no metaphor terms) | Source terms | Metaphor terms | ~152-153 |

### CROSS-REFERENCES (from 05-content-first-methodology.md)

| Ref | Referenced File | What's Referenced | Source Line |
|-----|----------------|-------------------|-------------|
| XR-05-01 | 02-content-form-analysis.md | Ceiling content-form fit (310 lines) | ~7 |
| XR-05-02 | 05-flagship-architecture.md | 3-pass execution model (625 lines) | ~8 |
| XR-05-03 | 01-metaphor-derivation.md | Ceiling metaphor derivation (518 lines) | ~8 |
| XR-05-04 | 02-build-plan.md | Ceiling build plan (724 lines) | ~9 |
| XR-05-05 | 04-showcase-archaeology.md | Unmodeled richness (267 lines) | ~10 |
| XR-05-06 | case-studies/README.md | Anti-prescription layer (542 lines) | ~11 |
| XR-05-07 | ceiling-page.html | Built artifact (2,017 lines) | ~12 |
| XR-05-08 | mechanism-catalog.md | 18 mechanisms, 5 categories | implicit |
| XR-05-09 | tension-composition SKILL.md | Metaphor derivation pipeline (Phase 0) | ~151, 949 |

### FILE MODIFICATIONS (from 05-content-first-methodology.md)

| ID | Target File | Modification | Priority |
|----|------------|-------------|----------|
| FM-05-01 | Master execution prompt | Add content inventory as Step 1 (before metaphor derivation) | BLOCKING |
| FM-05-02 | tension-composition SKILL.md or metaphor pipeline | Add criteria 5 (Interpretive Distance) and 6 (Content-Shape Fit) to scoring rubric | BLOCKING |
| FM-05-03 | Planner prompt | Add content-to-pattern selection protocol (6 steps) | BLOCKING |
| FM-05-04 | Planner prompt | Add content inventory template (Section 1 of this document) | BLOCKING |
| FM-05-05 | Planner prompt | Add metaphor rejection checklist (6 binary checks) | BLOCKING |
| FM-05-06 | Build plan template | Add density planning table | HIGH |
| FM-05-07 | Gate 4 checklist | Add structural overhead <= 20% check | BLOCKING |
| FM-05-08 | Gate 4 checklist | Add zone content-to-structure ratio >= 85% check | BLOCKING |
| FM-05-09 | Gate 4 checklist | Add full page 60-75% content check | BLOCKING |
| FM-05-10 | Skeleton-builder prompt | Add "no zone indicators" and "no checkpoint infrastructure" rules | HIGH |

### PREREQUISITES (from 05-content-first-methodology.md)

| ID | Prerequisite | Must Be True Before |
|----|-------------|-------------------|
| PR-05-01 | Raw source content available and accessible | Content inventory can begin |
| PR-05-02 | Content inventory template included in planner instructions | Planner can perform inventory |
| PR-05-03 | Revised 6-criterion metaphor scoring rubric integrated | Metaphor derivation can score properly |
| PR-05-04 | Planner understands "content inventory has VETO POWER over metaphor" | Planner won't force content into bad metaphors |
| PR-05-05 | Height estimation rules available to planner | Density planning can be done accurately |

---

## FILE 3: 06-communication-protocol.md (Inter-Agent Communication Protocol)

### ACTION ITEMS

#### CP-01: Convert ALL Communication Rules to Binary (MUST, Not MAY)
- **Source:** 06-communication-protocol.md, lines 13-23
- **Action:** Every communication requirement expressed as MUST with specific trigger, specific recipient, specific required content format. No MAY rules anywhere.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt / all agent prompts
- **Dependencies:** None

#### CP-02: Implement Checkpoint A (Post-Plan Read-Through)
- **Source:** 06-communication-protocol.md, lines 68-96
- **Action:** skeleton-builder MUST send CLARIFICATION-REQUEST to planner BEFORE writing any HTML. Required content: (1) spatial concern, (2) checkpoint calculation with estimated whitespace, (3) confirmation of plan read. Team-lead MUST NOT release build until Checkpoint A logged.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Skeleton-builder prompt / team-lead instructions
- **Dependencies:** Skeleton plan written

#### CP-03: Implement Checkpoint B (Post-Build Report)
- **Source:** 06-communication-protocol.md, lines 98-126
- **Action:** skeleton-builder MUST send ANOMALY-FLAG to team-lead after Pass 1 complete. Required content: (1) estimated page height, (2) content percentage vs 60% threshold, (3) anomalies list, (4) whitespace concern flag. If content < 60%, team-lead sends void diagnosis request.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Skeleton-builder prompt / team-lead instructions
- **Dependencies:** Pass 1 complete

#### CP-04: Implement Checkpoint C (Spatial Gate Result)
- **Source:** 06-communication-protocol.md, lines 128-173
- **Action:** spatial-auditor MUST send QUALITY-GATE to team-lead after SC-01 through SC-07 checks. Required: gate verdict, each SC result with measurement, fix recommendation if FAIL. Team-lead MUST NOT spawn Pass 2 until all 7 PASS. Team-lead MUST independently run SC-04 squint test.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Spatial-auditor prompt / team-lead instructions
- **Dependencies:** Pass 1 + Checkpoint B complete

#### CP-05: Implement Checkpoint D (Post-Elaboration Report)
- **Source:** 06-communication-protocol.md, lines 176-206
- **Action:** elaboration-builder MUST send ANOMALY-FLAG to planner after Pass 2 complete. Required: (1) deployed mechanisms list, (2) rejected mechanisms with rationale, (3) spatial impact (increased/decreased content-to-void ratio). Team-lead runs PA-05c squint check before Pass 3.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Elaboration-builder prompt / team-lead instructions
- **Dependencies:** Pass 2 complete

#### CP-06: Implement Checkpoint E (Final Build Report)
- **Source:** 06-communication-protocol.md, lines 209-243
- **Action:** intentionality-builder MUST send QUALITY-GATE to team-lead after Pass 3 complete. Required: (1) intentionality inventory (at least 2 of: bookending, self-reference, cognitive transition, meta-annotation) with HTML line refs, (2) interference check, (3) audit readiness. Team-lead verifies 2+ elements before audit wave.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Intentionality-builder prompt / team-lead instructions
- **Dependencies:** Pass 3 complete

#### CP-07: Implement Standard Message Format
- **Source:** 06-communication-protocol.md, lines 246-291
- **Action:** All SendMessage calls MUST follow format: type (4 types), from, to, urgency (HIGH/MEDIUM/LOW), content (max 300 words), summary (5-10 words). Messages MUST reference specific measurements, not subjective judgment.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** All agent prompts
- **Dependencies:** None

#### CP-08: Implement Message Type System (4 Types)
- **Source:** 06-communication-protocol.md, lines 259-266
- **Action:** Define 4 message types: BLOCKING-DEPENDENCY (HIGH, requires response), QUALITY-GATE (HIGH, requires response), CLARIFICATION-REQUEST (MEDIUM, optional response), ANOMALY-FLAG (LOW, no response required).
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All agent prompts
- **Dependencies:** None

#### CP-09: Implement Measurement Specificity Requirement
- **Source:** 06-communication-protocol.md, lines 268-284
- **Action:** Messages MUST reference specific measurements: pixel values, ratios, percentages. WRONG: "looks about right", "a lot of whitespace", "might be heavy". CORRECT: "958px via getBoundingClientRect", "2,800px contiguous void", "header 198px / viewport 900px = 22%".
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All agent prompts (especially auditors)
- **Dependencies:** None

#### CP-10: Maximum Message Length 300 Words
- **Source:** 06-communication-protocol.md, lines 286-291
- **Action:** Content field max 300 words. If more needed, write to file and reference path.
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** All agent prompts
- **Dependencies:** None

#### CP-11: Implement Escalation Trigger 1 (Uncertainty Threshold)
- **Source:** 06-communication-protocol.md, lines 298-330
- **Action:** If ANY builder is < 80% confident in a spatial/architectural decision, MUST send CLARIFICATION-REQUEST to planner BEFORE implementing. Covers: zone count, whitespace allocations, structural element presence, zone content sufficiency. Does NOT cover CSS values, token selection, minor typography.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** All builder prompts
- **Dependencies:** None

#### CP-12: Implement Escalation Trigger 2 (Auditor FAIL Finding)
- **Source:** 06-communication-protocol.md, lines 332-355
- **Action:** If ANY auditor finds WOULD-NOT-SHIP, MUST send QUALITY-GATE to team-lead BEFORE writing full audit report. WOULD-NOT-SHIP criteria: void > 15% scroll, container outside 940-960px, soul violation, footer absent, header > 30% of first viewport.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** All auditor prompts
- **Dependencies:** None

#### CP-13: Implement Escalation Trigger 3 (Unexpected Discovery)
- **Source:** 06-communication-protocol.md, lines 357-381
- **Action:** If ANY agent discovers something unexpected (not in plan/prior deliverables), MUST send ANOMALY-FLAG to team-lead regardless of severity. Examples: content not fitting zone structure, CSS rendering contradicting expectations, unintended perceptual effects, tool failures.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All agent prompts
- **Dependencies:** None

#### CP-14: Implement Escalation Trigger 4 (Diagnosis-Before-Fix)
- **Source:** 06-communication-protocol.md, lines 383-413
- **Action:** Before ANY fix agent applies changes, fix-team-lead MUST send BLOCKING-DEPENDENCY to team-lead with root cause classification: CSS PROBLEM / CONTENT PROBLEM / ARCHITECTURE PROBLEM, with evidence and proposed fix approach. Team-lead MUST respond (APPROVED or REDIRECTED) before fix begins.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Fix-team-lead prompt / team-lead instructions
- **Dependencies:** WOULD-NOT-SHIP finding identified

#### CP-15: Team-Lead Verification Protocol (5 Checkpoints)
- **Source:** 06-communication-protocol.md, lines 416-470
- **Action:** Team-lead verifies at each checkpoint: (A) message sent + 3 fields, (B) content estimate > 60%, (C) all SC-01-07 PASS + independent SC-04, (D) deployment/rejection log + spatial impact, (E) 2+ intentionality elements. Specific failure actions for each.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Team-lead prompt / instructions
- **Dependencies:** None

#### CP-16: Team-Lead Message Count Verification
- **Source:** 06-communication-protocol.md, lines 428-449
- **Action:** Team-lead runs message count at wave transitions: end of Pass 1 = 2 messages, end of Pass 2 = 4, end of Pass 3 = 5, experiment completion = 8. If below minimum, team-lead MUST NOT proceed until missing checkpoint messages sent.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Team-lead prompt
- **Dependencies:** None

#### CP-17: Missing Message Recovery Protocol
- **Source:** 06-communication-protocol.md, lines 452-469
- **Action:** If mandatory checkpoint absent: (1) team-lead sends explicit questions to defaulting agent, (2) team-lead waits for response, (3) if response reveals preventable defect, document as PROTOCOL FAILURE, (4) include in verdict document.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Team-lead prompt
- **Dependencies:** None

#### CP-18: Prohibit Anti-Pattern 1 (File-Only Bus)
- **Source:** 06-communication-protocol.md, lines 478-487
- **Action:** Test for file-only bus: "Could I have caught this mistake by reading the file more carefully?" If NO (requires cross-agent comparison), SendMessage was required.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All builder prompts
- **Dependencies:** None

#### CP-19: Prohibit Anti-Pattern 2 (Broadcast Spam)
- **Source:** 06-communication-protocol.md, lines 490-499
- **Action:** Send to exactly one recipient. No worker agent should broadcast. If team-lead needs to relay to multiple agents, team-lead does routing.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All agent prompts
- **Dependencies:** None

#### CP-20: Prohibit Anti-Pattern 3 (Status-Only Messages)
- **Source:** 06-communication-protocol.md, lines 502-518
- **Action:** Useful messages contain measurements, questions, risks, or gate results. Status-only ("I'm done"), acknowledgment ("Got it"), subjective assessment without measurement ("Looks good") are PROHIBITED.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All agent prompts
- **Dependencies:** None

#### CP-21: Prohibit Anti-Pattern 4 (Judgment Without Measurement)
- **Source:** 06-communication-protocol.md, lines 521-527
- **Action:** Every spatial claim MUST include specific measurement. Section 3 defines correct vs incorrect examples.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** All agent prompts
- **Dependencies:** CP-09

#### CP-22: Prohibit Anti-Pattern 5 (Asking for Approval)
- **Source:** 06-communication-protocol.md, lines 530-540
- **Action:** Instead of "does this look good?", send measurement + threshold + result. Use CLARIFICATION-REQUEST with stated assumption: "I am proceeding with [X]. Correct me if wrong."
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** All builder prompts
- **Dependencies:** None

#### CP-23: Prohibit Anti-Pattern 6 (Messaging Isolated Agents)
- **Source:** 06-communication-protocol.md, lines 543-551
- **Action:** HARD PROHIBITION: No agent may send to PA-1, PA-2, or novelty-evaluator. Even "hi, I built the page" contaminates fresh-eyes assessment. Team-lead monitors and blocks.
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** All agent prompts / team-lead instructions
- **Dependencies:** None

#### CP-24: Implement Message Routing Table (17 Pairings)
- **Source:** 06-communication-protocol.md, lines 554-577
- **Action:** Implement complete routing table: skeleton-builder -> planner (CLARIFICATION, BLOCKING), skeleton-builder -> team-lead (ANOMALY, QUALITY-GATE), spatial-auditor -> team-lead (QUALITY-GATE), elaboration-builder -> planner (ANOMALY, CLARIFICATION), intentionality-builder -> team-lead (QUALITY-GATE, ANOMALY), planner -> skeleton-builder (CLARIFICATION), planner -> elaboration-builder (CLARIFICATION), team-lead -> any builder (QUALITY-GATE, CLARIFICATION), programmatic-auditor -> team-lead (QUALITY-GATE, ANOMALY), verdict-synthesizer -> team-lead (CLARIFICATION), ANY -> PA-1/PA-2 PROHIBITED, PA-1 <-> PA-2 PROHIBITED, ANY -> novelty-evaluator (before blind) PROHIBITED, novelty-evaluator -> anyone (after blind only) ANOMALY-FLAG, fix-team-lead -> team-lead (BLOCKING-DEPENDENCY).
- **Category:** PROCESS
- **Priority:** BLOCKING
- **Target file:** Master execution prompt / team-lead instructions
- **Dependencies:** None

#### CP-25: Implement Per-Agent Message Limits
- **Source:** 06-communication-protocol.md, lines 580-598
- **Action:** Per-agent limits: skeleton-builder 5, elaboration-builder 4, intentionality-builder 3, planner 4, spatial-auditor 2, programmatic-auditor 4, team-lead 15, verdict-synthesizer 2, PA-1 0, PA-2 0, novelty-evaluator 1 (after blind), fix-team-lead 3. Total max ~43, expected 8-15. If > 25, review for anti-patterns.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt / per-agent prompts
- **Dependencies:** None

#### CP-26: Minimum 8 Substantive Messages Total
- **Source:** 06-communication-protocol.md, lines 23, 435, 678
- **Action:** Minimum message threshold for flagship: 8 substantive messages across full experiment. Team-lead verifies at verdict.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Team-lead prompt / verdict template
- **Dependencies:** None

#### CP-27: File-Bus Remains Primary; Messaging Is Supplemental
- **Source:** 06-communication-protocol.md, lines 639-646
- **Action:** Flat file-bus topology PRESERVED. Per-file ownership (1 agent = 1 output file) PRESERVED. SendMessage is quality-assurance overlay only. Files = specifications. Messages = judgments, calculations, risks.
- **Category:** PROCESS
- **Priority:** HIGH
- **Target file:** Master execution prompt
- **Dependencies:** None

#### CP-28: Message Count Verification Template
- **Source:** 06-communication-protocol.md, lines 439-449
- **Action:** Team-lead writes at each wave transition: WAVE [N] MESSAGE COUNT AUDIT with required/actual/shortfall/agents/action.
- **Category:** PROCESS
- **Priority:** MEDIUM
- **Target file:** Team-lead prompt
- **Dependencies:** None

#### CP-29: Minimum Message Verification Checkpoints (5 Moments)
- **Source:** 06-communication-protocol.md, lines 629-637
- **Action:** Team-lead verifies counts at: (1) before Spatial Gate = 2, (2) before Pass 2 = 3, (3) before Pass 3 = 4, (4) before audit wave = 5, (5) in verdict = final count + protocol failures.
- **Category:** GATE
- **Priority:** BLOCKING
- **Target file:** Team-lead prompt
- **Dependencies:** None

### BINARY CHECKS (from 06-communication-protocol.md)

| ID | Check | Pass | Fail | Source Line |
|----|-------|------|------|-------------|
| BC-06-01 | Checkpoint A sent before HTML | Message exists | Missing | ~94 |
| BC-06-02 | Checkpoint A has 3 required fields | All 3 present | Any missing | ~78-81 |
| BC-06-03 | Checkpoint B content >= 60% | >= 60% | < 60% | ~110-111, 124 |
| BC-06-04 | Checkpoint C all SC-01-07 PASS | All PASS | Any FAIL | ~140, 172 |
| BC-06-05 | Checkpoint D deployment log present | Log exists | Missing | ~187 |
| BC-06-06 | Checkpoint E 2+ intentionality elements | >= 2 | < 2 | ~220, 242 |
| BC-06-07 | Message count >= 2 before Spatial Gate | >= 2 | < 2 | ~633 |
| BC-06-08 | Message count >= 3 before Pass 2 | >= 3 | < 3 | ~634 |
| BC-06-09 | Message count >= 4 before Pass 3 | >= 4 | < 4 | ~635 |
| BC-06-10 | Message count >= 5 before audit | >= 5 | < 5 | ~636 |
| BC-06-11 | Message count >= 8 at experiment end | >= 8 | < 8 | ~435, 678 |
| BC-06-12 | PA-1/PA-2/novelty zero inbound messages | 0 messages | Any messages | ~570-574 |
| BC-06-13 | Messages include measurements, not judgments | Measurements | Subjective only | ~268-284 |
| BC-06-14 | Team-lead SC-04 squint independent | Independent check done | Skipped | ~172 |
| BC-06-15 | Fix team sends diagnosis-before-fix | Classification sent | Fix applied without diagnosis | ~384-386 |
| BC-06-16 | Team-lead responds to diagnosis-before-fix | APPROVED or REDIRECTED | No response | ~410-412 |
| BC-06-17 | Builder confidence >= 80% for spatial decisions | >= 80% or escalation sent | < 80% without escalation | ~300-301 |
| BC-06-18 | Message content <= 300 words | <= 300 | > 300 without file ref | ~288 |

### CROSS-REFERENCES (from 06-communication-protocol.md)

| Ref | Referenced File | What's Referenced | Source Line |
|-----|----------------|-------------------|-------------|
| XR-06-01 | 01-process-retrospective.md | Ceiling/Middle zero-message failure analysis (448 lines) | ~7 |
| XR-06-02 | 06-failure-analysis.md | Root cause of zero messaging (520 lines) | ~8 |
| XR-06-03 | 05-flagship-architecture.md | 3-pass execution model (625 lines) | ~8 |
| XR-06-04 | 09-PROTOCOLS.md | CP-02, CP-08, CP-09 protocol design | ~9 |
| XR-06-05 | 08-TEAM-TOPOLOGY.md | Checkpoint architecture | ~10 |
| XR-06-06 | 09-MASTER-RETROSPECTIVE.md | Finding 9, v2 (communication finding) | ~11 |
| XR-06-07 | CD-006 | 39/40 score WITH agent messaging | ~46-47, 677 |
| XR-06-08 | ceiling-page.html | Missing checkpoint content, whitespace void | ~39-40 |

### FILE MODIFICATIONS (from 06-communication-protocol.md)

| ID | Target File | Modification | Priority |
|----|------------|-------------|----------|
| FM-06-01 | Master execution prompt | Add all 5 MUST-rules (Checkpoints A-E) with triggers and content requirements | BLOCKING |
| FM-06-02 | Skeleton-builder prompt | Add Checkpoint A + B mandatory message requirements | BLOCKING |
| FM-06-03 | Spatial-auditor prompt | Add Checkpoint C mandatory message requirement | BLOCKING |
| FM-06-04 | Elaboration-builder prompt | Add Checkpoint D mandatory message requirement | BLOCKING |
| FM-06-05 | Intentionality-builder prompt | Add Checkpoint E mandatory message requirement | BLOCKING |
| FM-06-06 | Team-lead prompt | Add checkpoint verification protocol, message count verification, missing message recovery | BLOCKING |
| FM-06-07 | All agent prompts | Add standard message format (type/from/to/urgency/content/summary) | BLOCKING |
| FM-06-08 | All agent prompts | Add measurement specificity requirement (no subjective claims without measurements) | HIGH |
| FM-06-09 | All builder prompts | Add uncertainty threshold escalation (< 80% confidence -> CLARIFICATION-REQUEST) | BLOCKING |
| FM-06-10 | All auditor prompts | Add WOULD-NOT-SHIP escalation trigger | BLOCKING |
| FM-06-11 | All agent prompts | Add unexpected discovery escalation (ANOMALY-FLAG to team-lead) | HIGH |
| FM-06-12 | Fix-team-lead prompt | Add diagnosis-before-fix protocol (root cause classification required) | BLOCKING |
| FM-06-13 | Master execution prompt | Add message routing table (17 pairings) | BLOCKING |
| FM-06-14 | All agent prompts | Add per-agent message limits | HIGH |
| FM-06-15 | All agent prompts | Add 6 anti-pattern prohibitions | HIGH |
| FM-06-16 | Team-lead prompt | Add 5-moment message count verification checkpoints | BLOCKING |
| FM-06-17 | Verdict template | Add final message count + protocol failure documentation | HIGH |
| FM-06-18 | All agent prompts | Add PA-1/PA-2/novelty isolation prohibition | BLOCKING |

### PREREQUISITES (from 06-communication-protocol.md)

| ID | Prerequisite | Must Be True Before |
|----|-------------|-------------------|
| PR-06-01 | All 5 mandatory checkpoints (A-E) defined with triggers and content requirements | Communication protocol can be enforced |
| PR-06-02 | Message format standard (type/from/to/urgency/content/summary) defined | Agents can format messages correctly |
| PR-06-03 | Routing table (17 pairings) defined and included in prompts | Agents know who to message |
| PR-06-04 | Per-agent message limits defined | Anti-spam enforcement possible |
| PR-06-05 | Team-lead understands checkpoint verification responsibilities | Checkpoints can be enforced |
| PR-06-06 | PA/novelty isolation rules understood by ALL agents | No contamination possible |
| PR-06-07 | WOULD-NOT-SHIP criteria list defined (void > 15%, container out of range, soul violation, footer absent, header > 30%) | Auditors know what to escalate |
| PR-06-08 | Diagnosis-before-fix protocol understood by fix team | CSS/content/architecture classification possible |

---

## CROSS-FILE SUMMARY

### Total Extraction Counts

| Category | File 04 | File 05 | File 06 | Total |
|----------|---------|---------|---------|-------|
| ACTION ITEMS | 19 | 26 | 29 | 74 |
| BINARY CHECKS | 13 | 14 | 18 | 45 |
| CROSS-REFERENCES | 7 | 9 | 8 | 24 |
| FILE MODIFICATIONS | 6 | 10 | 18 | 34 |
| PREREQUISITES | 4 | 5 | 8 | 17 |

### BLOCKING Items (Must Be Resolved Before Flagship)

| ID | Description | Target |
|----|------------|--------|
| RP-01 | Rejection log template in elaboration plan | `02b-elaboration-plan.md` template |
| RP-02 | Planner min 15 rejections (Phase A) | Planner prompt |
| RP-03 | Builder min 6 rejections (Phase B) | Builder prompt |
| RP-04 | Total 21 rejections before Pass 3 | Gate 4 |
| RP-05 | Gate 4 rejection count verification | Gate 4 checklist |
| RP-06 | Silence zone specification | Builder/planner prompt |
| RP-07 | Silence zone placement rules | Builder/planner prompt |
| RP-09 | Gate 4 silence zone verification | Gate 4 checklist |
| RP-10 | Hard cap 16 mechanisms | Gate 4 checklist |
| RP-12 | Per-mechanism scale cap (3 of 5) | Gate 4 checklist |
| RP-13 | Min 2 unused mechanisms | Gate 4 checklist |
| RP-14 | Gate 4 full mechanism verification | Gate 4 checklist |
| RP-15 | Signal-to-silence ratio 0.6-0.8:1 | Gate 4 checklist |
| RP-17 | Builder instructions (30 lines) in prompt | Master execution prompt |
| RP-19 | Gate 4 all 7 restraint checks | Gate 4 checklist |
| CF-01 | Content inventory before metaphor | Master execution prompt |
| CF-02 | Content inventory template sections | Planner prompt |
| CF-06 | Content-to-pattern 6-step protocol | Planner prompt |
| CF-07 | Structural overhead <= 20% | Gate 4 / planner |
| CF-08 | Zone minimum 800px content | Gate 4 / planner |
| CF-09 | Density-shape alignment verification | Planner / gate |
| CF-10 | Red flags for pattern rejection | Planner prompt |
| CF-11 | Revised 6-criterion metaphor rubric | SKILL.md / pipeline |
| CF-12 | Interpretive distance scoring | SKILL.md / pipeline |
| CF-13 | Content-shape fit scoring | SKILL.md / pipeline |
| CF-15 | Metaphor rejection checklist (6 checks) | Planner / gate |
| CF-18 | Zone content-to-structure >= 85% | Gate 4 |
| CF-20 | Full page 60-75% content | Gate 4 |
| CF-21 | Content inventory veto power over metaphor | Planner prompt |
| CF-22 | Content-first 7-step sequence | Master execution prompt |
| CF-26 | Mechanisms amplify existing density | Builder prompt |
| CP-01 | All rules binary (MUST not MAY) | All prompts |
| CP-02 | Checkpoint A implementation | Skeleton-builder prompt |
| CP-03 | Checkpoint B implementation | Skeleton-builder prompt |
| CP-04 | Checkpoint C implementation | Spatial-auditor prompt |
| CP-05 | Checkpoint D implementation | Elaboration-builder prompt |
| CP-06 | Checkpoint E implementation | Intentionality-builder prompt |
| CP-07 | Standard message format | All agent prompts |
| CP-11 | Uncertainty threshold escalation | All builder prompts |
| CP-12 | Auditor FAIL escalation | All auditor prompts |
| CP-14 | Diagnosis-before-fix protocol | Fix-team-lead prompt |
| CP-15 | Team-lead verification protocol | Team-lead prompt |
| CP-16 | Team-lead message count verification | Team-lead prompt |
| CP-23 | PA/novelty isolation prohibition | All agent prompts |
| CP-24 | Message routing table (17 pairings) | Master execution prompt |
| CP-26 | Min 8 substantive messages | Verdict template |
| CP-29 | 5-moment verification checkpoints | Team-lead prompt |

### Inter-File Dependencies

| Dependency | From | To | Nature |
|-----------|------|-----|--------|
| Content inventory feeds metaphor scoring criteria 5+6 | CF-01 (File 05) | CF-11-13 (File 05) | Output-to-input |
| Content inventory feeds zone count for restraint protocol | CF-01 (File 05) | RP-10 (File 04) | Zone count constraint |
| Content density planning feeds signal-to-silence ratio | CF-16 (File 05) | RP-15 (File 04) | Measurement input |
| Checkpoint D reports mechanism deployment for Gate 4 | CP-05 (File 06) | RP-14 (File 04) | Verification input |
| Checkpoint C spatial gate includes void measurement | CP-04 (File 06) | CF-20 (File 05) | 60-75% content check |
| Restraint protocol's rejection log is communicated via Checkpoint D | RP-02-04 (File 04) | CP-05 (File 06) | Log transmitted via message |
| Gate 4 runs both restraint checks AND content density checks | RP-19 (File 04) | CF-07,08,18,20 (File 05) | Combined gate |
| Team-lead verifies silence zones at Gate 4 AND via Checkpoint B | RP-09 (File 04) | CP-03 (File 06) | Dual verification |
| Diagnosis-before-fix uses content vs CSS classification from content-first | CP-14 (File 06) | CF methodology (File 05) | Classification framework |

---

**END EXTRACTION -- 74 ACTION ITEMS, 45 BINARY CHECKS, 24 CROSS-REFERENCES, 34 FILE MODIFICATIONS, 17 PREREQUISITES**

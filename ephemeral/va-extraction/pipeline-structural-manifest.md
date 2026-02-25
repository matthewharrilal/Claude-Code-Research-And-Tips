# Pipeline v3 — Structural Integrity Manifest

> **Purpose:** Permanent structural health checks for every pipeline artifact. NOT a per-run tracker (that's EXECUTION-TRACKER-TEMPLATE.md). This file verifies that the pipeline's documentation is internally consistent, complete, and correctly cross-referenced. Run these checks after any pipeline surgery/enrichment.
>
> **How to use:** An agent reads this file, then reads each artifact file, and checks every item. Binary: present or absent. No judgment calls.
>
> **Hierarchy:**
> - **L0** = Artifact exists and has expected structure
> - **L1** = Required sections present
> - **L2** = Section content checks (specific text, cross-references, invariants)
> - **L3** = Cross-artifact consistency (does File A agree with File B?)

---

## 1. MANIFEST.md (Execution Manifest)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/MANIFEST.md`
- [ ] Date field present
- [ ] Status: AUTHORITATIVE

### L1: Required Sections
- [ ] Quickstart (11-step procedure)
- [ ] Section 1: Pipeline Overview
- [ ] Section 2: Agent Roster (all 15 agents)
- [ ] Section 3: Artifact-to-Agent Routing Table
- [ ] Section 4: Phase-by-Phase Execution
- [ ] Section 5: Dependency Graph
- [ ] Section 6: Failure and Recovery Paths
- [ ] Section 7: Critical Sections Index
- [ ] Section 8: Council Mandates Summary
- [ ] Section 9: Coverage Verification
- [ ] Appendix A: Evidence Taxonomy
- [ ] Appendix B: File Routing Quick Reference
- [ ] Appendix C: Glossary
- [ ] Appendix D: File Paths (if present)
- [ ] Appendix E: Prompt Templates (PA Auditor, Integrative, Weaver)
- [ ] Appendix F: Model Mandate

### L2: Gate Count Consistency
- [ ] Section 2 Agent Roster Gate Runner row: "42 programmatic gate checks"
- [ ] Section 3 gate-runner layers: "42 gate-runner gates"
- [ ] Section 3 gate-runner totals: "18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF VERIFICATION"
- [ ] Section 3 gate-runner-core.js: "9 functions" (not 6)
- [ ] Section 3 gate-runner-core.js: "~1,550 lines" (not 1,436)
- [ ] Section 4 Phase 3A: "42-gate inventory"
- [ ] Section 4 Phase 3C: "42 gates: PASS/FAIL"
- [ ] Section 9 Coverage: "42 gates" in L6 row
- [ ] Section 9 Verification: "All 42 gates"
- [ ] Appendix B Routing: "42 gates" for Gate Runner

### L2: Experiential Architecture in Prompt Templates
- [ ] PA Auditor template: Section 0 EXPERIENTIAL PASS present BEFORE questions
- [ ] PA Auditor template: STEP 1 includes "read FROM THE RENDERED PIXELS ALONE"
- [ ] PA Auditor template: STEP 2 includes chart/diagram extraction test
- [ ] PA Auditor template: STEP 3 includes navigation/structure test
- [ ] PA Auditor template: STEP 4 includes severity ranking (BLOCKING/SIGNIFICANT/MINOR)
- [ ] PA Auditor template: `## 0. Experiential Pass` output format specified
- [ ] PA Auditor template: Experiential pass primacy rationale paragraph present after template
- [ ] Integrative Auditor template: Section 0 own experiential pass BEFORE reading reports
- [ ] Integrative Auditor template: Section 1 experiential pass aggregation
- [ ] Integrative Auditor template: Section 2 gestalt synthesis (was Section 1)
- [ ] Integrative Auditor template: Section 3 top-5 fixes with usability priority
- [ ] Weaver template: Section 0 experiential anchor BEFORE analysis
- [ ] Weaver template: "report what you SEE, not what you KNOW it says"
- [ ] Weaver template: Section 1 experiential pass aggregation with 3+ threshold
- [ ] Weaver template: Section 2 verdict logic PRIORITY 0: confirmed experiential finding blocks SHIP
- [ ] Weaver template: Output A includes "experiential anchor"
- [ ] Weaver template: Output A includes "usability fixes FIRST"

### L2: Gate Runner Description
- [ ] Gate Runner section: lists all 9 functions by name
- [ ] Gate Runner section: `checkDPR(page)` for GR-61 mentioned
- [ ] Gate Runner section: `checkScreenshotQuality(screenshotDir)` for GR-62 mentioned
- [ ] Gate Runner section: `checkUsabilityPriority()` for GR-64 mentioned
- [ ] Gate Runner section: execution order includes pre-screenshot and post-weaver timing

### L2: Information Isolation
- [ ] PA Auditors receive: pa-guardrails.md mention includes "visual verification"
- [ ] Weaver receives: pa-weaver.md mention includes "experiential anchor protocol"
- [ ] Orchestrator receives: pa-deployment.md mention includes "experiential pass deployment protocol"

### L3: Cross-Artifact Consistency
- [ ] Agent count (15) matches Section 2 roster
- [ ] PA question count (69) matches pa-questions.md
- [ ] Soul constraint count (10) matches artifact-identity-perception.md
- [ ] Disposition count (D-01–D-09 = 9) matches artifact-builder-recipe.md
- [ ] Auditor assignments in Section 2 match pa-deployment.md Section 1.2

---

## 2. pa-deployment.md (PA Deployment Protocol)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/pa-deployment.md`
- [ ] Status: AUTHORITATIVE — split from monolithic

### L1: Required Sections
- [ ] Section 0: EXPERIENTIAL PASS PROTOCOL (MANDATORY — Primacy Position)
- [ ] Section 0.1: experiential directive (4 steps)
- [ ] Section 0.2: Why Primacy Matters
- [ ] Section 0.3: Priority Override
- [ ] Section 0.4: Contamination Check
- [ ] Section 1: 9-AUDITOR DEPLOYMENT ARCHITECTURE
- [ ] Section 2: SCREENSHOT PRE-CAPTURE PATTERN
- [ ] Section 3: FRESH-EYES PRINCIPLE
- [ ] Completion Manifest template

### L2: Experiential Pass Content
- [ ] Section 0 is the FIRST analytical section (before Section 1)
- [ ] STEP 1: "read FROM THE RENDERED PIXELS ALONE" present
- [ ] STEP 1: "VISUAL VERIFICATION, NOT CODE INTERPRETATION" header present
- [ ] STEP 1: CODE INTERPRETATION (WRONG) example present
- [ ] STEP 1: VISUAL VERIFICATION (RIGHT) example present
- [ ] STEP 1: "THE RULE" stated: cannot read from screenshot alone = illegible
- [ ] STEP 2: chart/diagram extraction test (5-second rule)
- [ ] STEP 3: navigation/structure test
- [ ] STEP 4: severity ranking with BLOCKING > SIGNIFICANT > MINOR
- [ ] Section 0.2: LLM primacy effect explained
- [ ] Section 0.3: "comprehension failures ALWAYS outrank property measurements"
- [ ] Section 0.4: no PA-XX references allowed in experiential pass section
- [ ] Old Section 2.5 replaced with forward reference to Section 0

### L2: Auditor Assignments
- [ ] 9 auditors (A through I) with specialties listed
- [ ] Each auditor has specific PA question IDs assigned
- [ ] Total across all auditors = 69 questions
- [ ] Auditor B covers readability (PA-02, PA-08, PA-81)
- [ ] PA-05 assigned to Auditor A

### L3: Cross-Artifact Consistency
- [ ] Section 0 visual verification matches pa-guardrails.md Section 3.1
- [ ] Auditor assignments match MANIFEST.md Section 2 Agent Roster
- [ ] Auditor assignments match EXECUTION-TRACKER-TEMPLATE.md Phase 3B table
- [ ] Experiential pass requirement matches pa-guardrails.md Section 2 completion manifest
- [ ] Fresh-eyes principle matches MANIFEST.md Section 3 pa-protocol routing

---

## 3. pa-weaver.md (Weaver Protocol)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/pa-weaver.md`
- [ ] Status: AUTHORITATIVE — split from monolithic

### L1: Required Sections
- [ ] Section 0: WEAVER EXPERIENTIAL ANCHOR (MANDATORY — Before All Other Actions)
- [ ] Section 0.1: View Screenshots Yourself
- [ ] Section 0.2: Write Experiential Anchor
- [ ] Section 0.3: Enhanced Experiential Pass Aggregation
- [ ] Section 0.4: Then Proceed to Verification
- [ ] Section 1: WEAVER ROLE
- [ ] Section 2: WEAVER CALIBRATION REFERENCES
- [ ] Section 3: WEAVER DIAGNOSTIC VOCABULARY
- [ ] Section 4: EMOTIONAL ARC FRAMEWORK
- [ ] Section 5.0: PRIORITY OVERRIDE RULE
- [ ] Section 5: SHIP DECISION AND FEEDBACK LOOP

### L2: Experiential Anchor Content
- [ ] Section 0 is FIRST section (primacy position)
- [ ] Section 0.1: "report what the PIXELS show you" present
- [ ] Section 0.1: visual verification principle woven in (not code interpretation)
- [ ] Section 0.2: 3-sentence anchor specified
- [ ] Section 0.2: anchor "CANNOT be overridden by gate scores or PA numbers"
- [ ] Section 0.3: 5-row agreement table (Weaver + 4 agreement/disagreement patterns)
- [ ] Section 0.3: 3+ auditors threshold = CONFIRMED illegibility → Fix #1
- [ ] Section 0.4: "SECOND, not first" — verification workflow follows experiential anchor
- [ ] Old Section 4.5 replaced with forward reference to Section 0.3
- [ ] Section 5.0: comprehension failures outrank analytical findings

### L2: Calibration Content
- [ ] Multi-coherence scale: FLAT/FUNCTIONAL/DESIGNED/COMPOSED/FLAGSHIP
- [ ] Dead space severity scale
- [ ] Metaphor expression spectrum: STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED
- [ ] PA-05 scoring guidance (sub-criteria)
- [ ] Tier 5 scoring guidance

### L3: Cross-Artifact Consistency
- [ ] Experiential aggregation table matches what MANIFEST.md Weaver template references
- [ ] Verdict logic priorities match MANIFEST.md Weaver template
- [ ] PA-05 sub-criteria match pa-questions.md Section 1.2
- [ ] Calibration scales match MANIFEST.md Weaver template

---

## 4. pa-guardrails.md (Auditor Constraints)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/pa-guardrails.md`
- [ ] Status: AUTHORITATIVE — split from monolithic

### L1: Required Sections
- [ ] Section 1: EVIDENCE FORMAT REQUIREMENT
- [ ] Section 2: COMPLETION MANIFEST REQUIREMENT
- [ ] Section 3: ASSESSMENT LANGUAGE CONSTRAINTS
- [ ] Section 3.1: Visual Verification, Not Code Interpretation
- [ ] Section 4: PA-05 CROSS-VALIDATION
- [ ] Section 5: TIER 1 EQUIVALENT QUESTIONS
- [ ] Section 6: TIER 5 PROVISIONAL SCORING NOTE
- [ ] Section 7: PA-ASSESSED ANTI-PATTERNS
- [ ] Section 8: REVISION DEGRADATION WARNINGS
- [ ] Section 9: S-09 STACKING CHECK
- [ ] Section 10: CROSS-VIEWPORT COMPARISON METHOD
- [ ] Section 11: FRESH-EYES PRINCIPLE (NON-NEGOTIABLE)

### L2: Visual Verification Content (Section 3.1)
- [ ] "Visual Verification, Not Code Interpretation" header present
- [ ] CODE INTERPRETATION (WRONG) example with bar chart scenario
- [ ] VISUAL VERIFICATION (RIGHT) example with pixel-reading description
- [ ] THE RULE: "cannot read the text FROM THE SCREENSHOT ALONE... then the text is illegible"
- [ ] "Say what you SEE, not what you KNOW it says"
- [ ] "A human visitor has never seen the HTML. They have only the pixels."

### L2: Completion Manifest Content (Section 2)
- [ ] Experiential Pass row is MANDATORY in completion table
- [ ] Report without `## 0. Experiential Pass` is INCOMPLETE — stated explicitly

### L2: Fresh-Eyes Content (Section 11)
- [ ] Auditor receives ONLY: screenshots + pa-questions.md + pa-guardrails.md + nothing else
- [ ] "Zero context = genuine first impressions"
- [ ] Three Laws present (screenshot required, plain language, non-designer can validate)

### L3: Cross-Artifact Consistency
- [ ] Visual verification in 3.1 matches pa-deployment.md Section 0.1 STEP 1
- [ ] Fresh-eyes file list matches MANIFEST.md Section 3 information isolation
- [ ] S-09 stacking threshold (120px) matches gate-runner-core.js GR-14
- [ ] Anti-pattern table matches gate-runner-spec.md categories

---

## 5. pa-questions.md (PA Question Definitions)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/pa-questions.md`
- [ ] Status: AUTHORITATIVE — split from monolithic
- [ ] Total: 69 questions stated

### L1: Required Sections
- [ ] Section 1: PA-05 (core question + 4 sub-criteria + scoring)
- [ ] Section 2: TIER 5 questions (PA-60 through PA-68, 9 questions)
- [ ] Section 3: FULL PA QUESTION INVENTORY
- [ ] Section 3.1-3.9: All tier groupings
- [ ] Section 4: QUALITY FRAMEWORK (WEAVER AND ORCHESTRATOR USE ONLY)
- [ ] Appendix A: PERCEPTION THRESHOLD REFERENCE TABLE
- [ ] Appendix B: QUANTITATIVE GUARDRAILS (FLOORS)

### L2: Question Coverage
- [ ] Tier 1 (5 questions): PA-01, PA-02, PA-03, PA-04, PA-05
- [ ] Tier 2 Standard (12 questions): PA-08, PA-11, PA-12–15, PA-16–17, PA-18–20, PA-29
- [ ] Tier 3 Deep Dive: PA-22–28, PA-41–44, PA-45–48, PA-54
- [ ] Tier 4 Void Prevention: PA-50–53 + S-09 stacking check
- [ ] Sub-Perceptual: PA-55, PA-56
- [ ] Pipeline Integration: PA-69, PA-70, PA-71
- [ ] Navigation: PA-80
- [ ] Extended: PA-72–77, PA-81
- [ ] Tier 5: PA-60–PA-68 (9 questions)
- [ ] PA-17 and PA-41 marked TIER 1 EQUIVALENT
- [ ] Section 4 WARNING: WEAVER AND ORCHESTRATOR USE ONLY, must NOT go to auditors

### L2: Readability Questions (Visual Verification Relevance)
- [ ] PA-02: "uncomfortable to read" — readability question present
- [ ] PA-08: "lean in or squint to read" — legibility question present
- [ ] PA-81: chart/diagram comprehension with "readable" checks present
- [ ] PA-55: sub-perceptual detection question present
- [ ] PA-56: tracking difference detection question present

### L3: Cross-Artifact Consistency
- [ ] PA-05 sub-criteria match pa-weaver.md Section 2 calibration
- [ ] Tier 5 questions (PA-60–PA-68) match pa-weaver.md Tier 5 scoring
- [ ] Perception thresholds in Appendix A match artifact-identity-perception.md
- [ ] Auditor assignments in section tables match pa-deployment.md Section 1
- [ ] Total question count (69) matches MANIFEST.md Section 2

---

## 6. artifact-builder-recipe.md (Builder Recipe)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/artifact-builder-recipe.md`
- [ ] Uses RECIPE format (Read/Select/Deploy/Assess verbs), NOT checklist format

### L1: Required Sections
- [ ] Phase 1: READ YOUR VOCABULARY (Steps 1.1–1.4)
- [ ] Phase 2: SELECT YOUR PER-PAGE CREATIVE DECISIONS (Steps 2.1–2.9)
- [ ] Phase 3: DEPLOY YOUR SCAFFOLDING (Steps 3.1–3.5)
- [ ] Phase 4: DEPLOY DISPOSITIONAL INSTRUCTIONS (D-01 through D-09)
- [ ] Phase 5: SELF-EVALUATE AND REFINE
- [ ] Phase 6: TEMPORAL COMPOSITION
- [ ] Appendix A: Council Verdict Amendments
- [ ] Appendix B: Complete Item Cross-Reference
- [ ] Appendix C: Evidence Status Key

### L2: Experiential Self-Check (Step 5.0)
- [ ] Step 5.0 present: "Experience your page as a reader"
- [ ] Step 5.0 marked MANDATORY — before any evaluation
- [ ] Step 5.0: READ sub-step with "read FROM THE RENDERED PIXELS" principle
- [ ] Step 5.0: EXTRACT sub-step for charts/diagrams (5-second rule)
- [ ] Step 5.0: NAVIGATE sub-step for page structure
- [ ] Step 5.0: Three report categories (Failed reading, Effortful reading, Skipped text)
- [ ] Step 5.0: Output format `<!-- EXPERIENTIAL-CHECK: ... -->` HTML comment specified
- [ ] Step 5.0: Priority rule — comprehension failures override Steps 5.1-5.7
- [ ] Step 5.0 appears BEFORE Step 5.1 (primacy within self-evaluation)

### L2: Disposition Instructions
- [ ] D-01 through D-09 all present (9 total)
- [ ] All D-01 through D-08 tagged [EXPERIMENTAL]
- [ ] D-09 (The Quiet Zone) present and tagged [EXPERIMENTAL] [NEW]
- [ ] Background Hex Lock is separate from dispositions (BV-02 enforcement)

### L2: Recipe Format Verification
- [ ] Phase 1 verbs: Read, Assess
- [ ] Phase 2 verbs: Select, Assess
- [ ] Phase 3 verbs: Deploy, Assess
- [ ] Phase 4 verbs: Deploy (dispositions)
- [ ] Phase 5 verbs: Assess, Experience (Step 5.0)
- [ ] Zero checklist verbs (Verify, Fail if, Must be) in main recipe text

### L3: Cross-Artifact Consistency
- [ ] D-01–D-09 count matches MANIFEST.md Section 3 routing table
- [ ] Recipe phases match MANIFEST.md Section 4 Phase 2 steps
- [ ] Self-evaluation 7 questions match EXECUTION-TRACKER-TEMPLATE.md P2-3
- [ ] Mechanism minimums match gate-runner-core.js quality floor checks

---

## 7. artifact-orchestrator.md (Orchestration Protocol)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/artifact-orchestrator.md`
- [ ] Contains all 16+ sections (SECTION 0 through SECTION 16+)

### L1: Required Sections (Key Sections Only)
- [ ] SECTION 0: MASTER EQUATION AND PRECONDITIONS
- [ ] SECTION 1: TOPOLOGY AND ARCHITECTURE
- [ ] SECTION 2: PHASE 0 — CONTENT ANALYSIS
- [ ] SECTION 3: PHASE 1 — BRIEF ASSEMBLY
- [ ] SECTION 4: MODE SELECTION
- [ ] SECTION 5: PHASE 2 — BUILDING
- [ ] SECTION 6: PHASE 3 — PERCEPTUAL AUDIT
- [ ] SECTION 7: VERDICT AND DECISION TREE

### L2: Experiential Architecture
- [ ] Phase 3A+: Orchestrator Experiential Scan section present (between 3A and 3B)
- [ ] 30-Second Read Test with visual verification note present
- [ ] Information Extraction Test present
- [ ] Navigation Test present
- [ ] BLOCKING-USABILITY tagging mechanism present
- [ ] Pre-seeded finding for all PA auditors when BLOCKING-USABILITY found
- [ ] Tracker recording: `EXPERIENTIAL_SCAN: CLEAN` or `BLOCKING-USABILITY: [description]`

### L2: Gate Integration
- [ ] Pre-screenshot: GR-61 (DPR) gate reference present
- [ ] Post-screenshot: GR-62 (Screenshot Quality) gate reference present
- [ ] GR-63 (Experiential Marker) referenced in builder output checks
- [ ] Post-weaver: GR-64 (Usability Priority) referenced in verdict section
- [ ] Usability circuit breaker annotated with GR-64 cross-reference

### L3: Cross-Artifact Consistency
- [ ] Phase sequence matches MANIFEST.md Section 4
- [ ] Verdict logic matches MANIFEST.md Weaver template
- [ ] GR-23–GR-28 (orchestrator decision rules) matches gate-runner-spec.md Wave 3 note
- [ ] Screenshot protocol matches pa-deployment.md Section 2

---

## 8. gate-runner-core.js (Executable Gates)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/gate-runner-core.js`
- [ ] Contains 9 exported/callable functions

### L1: Required Functions
- [ ] `runBriefVerification(briefText)` — BV-01 through BV-04
- [ ] `runGateRunner(page)` — GR-01–GR-15, GR-43, GR-44, GR-63
- [ ] `runAntiPatternGates(page)` — GR-17–GR-22
- [ ] `runWave2Gates(page)` — GR-45, GR-46, GR-50–GR-53
- [ ] `runGateCoverage(allResults)` — GR-48
- [ ] `checkGateResultIntegrity(files, data)` — GR-49
- [ ] `checkDPR(page)` — GR-61
- [ ] `checkScreenshotQuality(screenshotDir)` — GR-62
- [ ] `checkUsabilityPriority(auditorReports, weaverReport)` — GR-64

### L2: Gate Coverage Arrays
- [ ] REQUIRED_GATES array contains 17+ entries (GR-01–GR-10, GR-05b, GR-11, GR-13–GR-15, GR-61, GR-62)
- [ ] RECOMMENDED_GATES array contains 11 entries (including GR-63, GR-64)
- [ ] ADVISORY_GATES array contains 7 entries
- [ ] GR-48 coverage threshold: "17/17 (100%)" for required, ">=5/11" for recommended
- [ ] GR-05b regex: `/^(GR-\d{2}[a-z]?|BV-\d{2})$/` (supports letter suffix)

### L2: File Header
- [ ] Header states: 18 REQUIRED
- [ ] Header states: 11 RECOMMENDED
- [ ] Header states: 7 ADVISORY
- [ ] Header states: 9 functions
- [ ] Total: 42 gates (37 in file + 4 BV + 1 diagnostic)

### L2: Wave 4 Gates (Experiential Enforcement)
- [ ] GR-61 (checkDPR): checks `window.devicePixelRatio === 1`, REQUIRED tier
- [ ] GR-62 (checkScreenshotQuality): filesystem check, blank detection, REQUIRED tier
- [ ] GR-63: checks `<!-- EXPERIENTIAL-CHECK: ... -->` HTML comment, RECOMMENDED tier
- [ ] GR-63: requires legibility keyword AND minimum length (20 chars)
- [ ] GR-64 (checkUsabilityPriority): scans reports for usability patterns, RECOMMENDED tier
- [ ] GR-64: if 3+ auditors flag usability, verifies Fix #1 contains usability term

### L3: Cross-Artifact Consistency
- [ ] Gate IDs match gate-manifest.json
- [ ] Gate IDs match gate-runner-spec.md
- [ ] REQUIRED count (18) matches MANIFEST.md and gate-manifest.json
- [ ] RECOMMENDED count (11) matches MANIFEST.md and gate-manifest.json
- [ ] Function count (9) matches MANIFEST.md and SKILL.md

---

## 9. gate-runner-spec.md (Gate Specifications)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/gate-runner-spec.md`

### L1: Required Sections
- [ ] Sections 1-6 (Waves 1-3 gates)
- [ ] Section 7: Wave 4 Experiential Enforcement Gates
- [ ] Summary table (all gates)
- [ ] Category/tier breakdown table

### L2: Wave 4 Content
- [ ] GR-61 spec: DPR Validation, REQUIRED, pre-screenshot timing
- [ ] GR-62 spec: Screenshot Quality, REQUIRED, post-screenshot timing
- [ ] GR-63 spec: Builder Experiential Marker, RECOMMENDED, post-build timing
- [ ] GR-64 spec: Usability Priority, RECOMMENDED, post-weaver timing
- [ ] Motivation paragraph referencing Gas Town incident
- [ ] Blocking behavior documented for each gate

### L2: Tier Totals
- [ ] 18 REQUIRED (was 16)
- [ ] 11 RECOMMENDED (was 9)
- [ ] 7 ADVISORY
- [ ] 2 DIAGNOSTIC
- [ ] 4 BRIEF VERIFICATION
- [ ] Total: 42

### L3: Cross-Artifact Consistency
- [ ] Gate IDs match gate-runner-core.js function implementations
- [ ] Gate IDs match gate-manifest.json entries
- [ ] Tier counts match MANIFEST.md Section 3 and Section 9

---

## 10. gate-manifest.json (Gate TOC)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/gate-manifest.json`
- [ ] Valid JSON (parseable)

### L1: Required Keys
- [ ] `version` present (should be "4.0.0" or later)
- [ ] `tiers` with `required`, `recommended`, `advisory`, `diagnostic`, `brief`
- [ ] `executionOrder` array
- [ ] `totalGateCount` object
- [ ] `notes` array

### L2: Tier Counts
- [ ] `tiers.required.count` = 18
- [ ] `tiers.recommended.count` = 11
- [ ] `tiers.advisory.count` = 7
- [ ] `tiers.diagnostic.count` = 2
- [ ] `tiers.brief.count` = 4
- [ ] GR-61, GR-62 in required gates list
- [ ] GR-63, GR-64 in recommended gates list

### L2: Execution Steps
- [ ] Step for checkDPR (pre-screenshot timing)
- [ ] Step for checkScreenshotQuality (post-screenshot timing)
- [ ] Step for checkUsabilityPriority (post-weaver timing)

### L2: Wave 4 Note
- [ ] Notes array contains Wave 4 experiential enforcement entry

### L3: Cross-Artifact Consistency
- [ ] Gate IDs match gate-runner-core.js
- [ ] Tier counts match gate-runner-spec.md
- [ ] Execution order matches MANIFEST.md gate runner description

---

## 11. EXECUTION-TRACKER-TEMPLATE.md (Per-Run Tracker)

### L0: File Health
- [ ] File exists at `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md`
- [ ] 4-level hierarchy described (L0/L1/L2/L3)

### L1: Required Sections
- [ ] Build Metadata
- [ ] L0 Pipeline Phase Summary (14 phases)
- [ ] Pre-Flight Checklist (PF-1, PF-2, PF-3)
- [ ] Phase 0: Content Analysis (P0-1 through P0-3)
- [ ] Phase 1: Brief Assembly (P1-1 through P1-3)
- [ ] Phase 2: Building (P2-1 through P2-3)
- [ ] Phase 3A: DPR + Screenshots + Gate Runner (P3A-0 through P3A-4)
- [ ] Phase 3A+: Orchestrator Experiential Scan (P3A+-1 through P3A+-5)
- [ ] Phase 3B: Perceptual Audit (P3B-1 through P3B-5)
- [ ] Phase 3C: Verdict (P3C-1 through P3C-5)
- [ ] Execution Summary
- [ ] Output Files Manifest
- [ ] Post-Run Verification (L0, L1, L2 completeness + cross-phase + experiential integrity)

### L2: Experiential Tracking Fields
- [ ] L0 row: "Phase 3A-pre: DPR Validation" present
- [ ] L0 row: "Phase 3A-post: Screenshot Quality" present
- [ ] L0 row: "Phase 3A+: Experiential Scan" present
- [ ] L0 row: "Phase 3C-post: Usability Gate" present
- [ ] P3A-0: DPR validation section (GR-61)
- [ ] P3A-3: Screenshot quality section (GR-62)
- [ ] P3A+-1 through P3A+-5: Experiential scan steps
- [ ] P3A+-1d: "Visual verification: reported what PIXELS show, not what HTML says"
- [ ] P3B-1g: "All 9 auditor prompts include experiential pass as Section 0"
- [ ] P3B-3: Experiential Pass Verification table (9 rows)
- [ ] P3B-3: Experiential Convergence Count field
- [ ] P3B-4c: "Integrative Auditor performed own experiential pass"
- [ ] P3C-2: Weaver Experiential Anchor section
- [ ] P3C-5: Usability Priority Gate (GR-64) section
- [ ] Post-Run: Experiential Integrity Check (6 items)

### L2: Gate Count Accuracy
- [ ] P3A-4 table: Experiential category row (GR-61, GR-62, GR-63, GR-64 = 4 gates)
- [ ] P3A-4 table: Total = 38 (in-runner, excl BV and post-weaver)
- [ ] Execution Summary: "Gate Pass Rate (total incl. BV + experiential)" = ___/42

### L3: Cross-Artifact Consistency
- [ ] Pre-flight file list matches SKILL.md file table
- [ ] Auditor table matches pa-deployment.md Section 1.2 and MANIFEST.md Section 2
- [ ] Gate category table matches gate-runner-spec.md
- [ ] BV gates match MANIFEST.md Section 4 Phase 1

---

## 12. SKILL.md (Build-Page Skill)

### L0: File Health
- [ ] File exists at `~/.claude/skills/build-page/SKILL.md`

### L1: Required Sections
- [ ] What to do
- [ ] Artifact file table (9 artifacts)
- [ ] Gate runner split files table
- [ ] PA protocol split files table
- [ ] Per-build tracking table
- [ ] Execution rules
- [ ] Non-negotiables

### L2: Gate Count Accuracy
- [ ] Gate runner split files: "9 executable Playwright JS functions (42 gates)"
- [ ] Gate runner split files: "18 REQUIRED + 11 RECOMMENDED + 7 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF"
- [ ] Execution rules: "9 functions, 42 gates" for gate-runner-core.js
- [ ] DPR + Screenshots rule: GR-61 and GR-62 mentioned
- [ ] Experiential scan rule present (~2 min, BLOCKING-USABILITY tagging)
- [ ] Usability priority gate rule: GR-64 post-weaver mentioned

### L2: PA File Line Counts
- [ ] pa-deployment.md: ~320 lines (not 276)
- [ ] pa-weaver.md: ~450 lines (not 403)
- [ ] pa-guardrails.md: ~176 lines (not 151)
- [ ] pa-deployment.md description mentions "experiential pass protocol"
- [ ] pa-weaver.md description mentions "experiential anchor"
- [ ] pa-guardrails.md description mentions "visual verification"

### L3: Cross-Artifact Consistency
- [ ] File table matches actual files in `ephemeral/va-extraction/`
- [ ] Gate counts match MANIFEST.md, gate-manifest.json, gate-runner-spec.md
- [ ] Non-negotiables match artifact-identity-perception.md soul constraints

---

## CROSS-ARTIFACT INVARIANTS

These rules must hold TRUE across ALL artifacts simultaneously. A violation in ANY file means the pipeline is structurally inconsistent.

### INV-1: Gate Count Consistency
All of these must state the same numbers:
- [ ] MANIFEST.md: 42 gates (18R + 11R + 7A + 2D + 4BV)
- [ ] gate-runner-core.js header: 18 REQUIRED, 11 RECOMMENDED, 7 ADVISORY
- [ ] gate-runner-spec.md totals: 42
- [ ] gate-manifest.json: tiers sum to 42
- [ ] SKILL.md: 42 gates, 9 functions
- [ ] EXECUTION-TRACKER-TEMPLATE.md: gate totals consistent

### INV-2: Experiential Pass Chain
The experiential directive must exist in ALL of these files in primacy position:
- [ ] pa-deployment.md: Section 0 (before Section 1)
- [ ] pa-weaver.md: Section 0 (before Section 1)
- [ ] pa-guardrails.md: Section 2 completion manifest requires `## 0. Experiential Pass`
- [ ] artifact-builder-recipe.md: Step 5.0 (before Step 5.1)
- [ ] artifact-orchestrator.md: Phase 3A+ (before Phase 3B)
- [ ] MANIFEST.md: PA Auditor template Section 0 before questions
- [ ] MANIFEST.md: Integrative Auditor template Section 0 before reports
- [ ] MANIFEST.md: Weaver template Section 0 before analysis
- [ ] EXECUTION-TRACKER-TEMPLATE.md: P3A+ section exists

### INV-3: Visual Verification Principle
"Report what you SEE, not what you KNOW it says" must appear in:
- [ ] pa-deployment.md: Section 0.1 STEP 1
- [ ] pa-weaver.md: Section 0.1
- [ ] pa-guardrails.md: Section 3.1
- [ ] artifact-builder-recipe.md: Step 5.0
- [ ] artifact-orchestrator.md: Phase 3A+ visual verification note
- [ ] MANIFEST.md: PA Auditor template STEP 1

### INV-4: Auditor Assignment Consistency
These must all agree on which auditor gets which questions:
- [ ] pa-deployment.md Section 1.2
- [ ] MANIFEST.md Section 2 Agent Roster
- [ ] EXECUTION-TRACKER-TEMPLATE.md Phase 3B table
- [ ] pa-questions.md per-question auditor assignments

### INV-5: Fresh-Eyes Isolation
All of these must state PA auditors receive ONLY screenshots + questions + guardrails:
- [ ] MANIFEST.md: Section 3 information isolation
- [ ] MANIFEST.md: Appendix B routing
- [ ] pa-deployment.md: fresh-eyes section
- [ ] pa-guardrails.md: Section 11
- [ ] artifact-orchestrator.md: Phase 3B routing
- [ ] EXECUTION-TRACKER-TEMPLATE.md: P3B-1 routing verification

### INV-6: PA-05 as Primary Metric
PA-05 scoring is the WEAVER's responsibility (not Integrative Auditor):
- [ ] MANIFEST.md: Integrative Auditor template notes FIX-083
- [ ] MANIFEST.md: Weaver template includes PA-05 scoring
- [ ] pa-weaver.md: PA-05 scoring protocol present
- [ ] EXECUTION-TRACKER-TEMPLATE.md: PA-05 in Phase 3C (not 3B)

---

## VERIFICATION PROCEDURE

To run a full structural integrity check:

1. **Read this manifest** (you're doing it now)
2. **For each artifact** (Sections 1-12): Read the file, check every L1 and L2 item
3. **For cross-artifact invariants** (INV-1 through INV-6): Verify across all referenced files
4. **Report**: List of PASS / FAIL per section, with specific failures cited
5. **If ANY INV fails**: That is a BLOCKING structural inconsistency — fix before running pipeline

**Expected check count:** ~280 binary items across 12 artifacts + 6 invariants
**Expected duration:** ~15 minutes for a thorough agent pass

---

*End of Pipeline Structural Manifest. Last updated after Wave 4 Experiential Enforcement surgery.*

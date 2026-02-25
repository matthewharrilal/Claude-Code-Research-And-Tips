# Pipeline v3 — Execution Tracker (Hierarchical)

> **Instructions:** Copy this template to your build output directory at pipeline start. Fill in fields as each phase completes. All `___` fields and `[ ]` checkboxes must be populated by pipeline end.
>
> **Hierarchy:** This tracker uses 4 levels of granularity:
> - **L0** = Pipeline Phase (did the phase complete?)
> - **L1** = Phase Steps (did each step within the phase execute?)
> - **L2** = Step Checklists (binary items — did each specific thing happen?)
> - **L3** = Item Details (evidence, values, notes for each checklist item)
>
> At any abstraction level, you can verify completeness by checking the level above.
> L0 summarizes L1. L1 summarizes L2. L2 summarizes L3. Nothing is lost.

---

## Build Metadata

| Field | Value |
|-------|-------|
| BUILD_DATE | ___ |
| CONTENT_PATH | ___ |
| SLUG | ___ |
| MODE | ___ (APPLIED / COMPOSED) |
| BUILDER_MODEL | ___ (Opus / Sonnet) |
| START_TIME | ___ |
| END_TIME | ___ |
| TOTAL_DURATION | ___ |

---

## L0 — Pipeline Phase Summary

> Quick glance: did each phase complete? Drill into any NO for details.

| Phase | Complete | Gate | Notes |
|-------|----------|------|-------|
| Pre-Flight | [ ] | All files accessible | ___ |
| Phase 0: Content Analysis | [ ] | Content Map produced | ___ |
| Phase 0.5: Mode Selection | [ ] | Mode determined | ___ |
| Phase 1: Brief Assembly | [ ] | BV-01–BV-04 all PASS | ___ |
| Phase 2: Building | [ ] | HTML + conviction + self-eval | ___ |
| Phase 3A-pre: DPR Validation | [ ] | GR-61 PASS | ___ |
| Phase 3A: Screenshots | [ ] | All 3 viewports captured | ___ |
| Phase 3A-post: Screenshot Quality | [ ] | GR-62 PASS | ___ |
| Phase 3A: Gate Runner | [ ] | All gates executed | ___ |
| Phase 3A+: Experiential Scan | [ ] | Orchestrator read-through complete | ___ |
| Phase 3B: PA Audit (9 auditors) | [ ] | All 9 reports received | ___ |
| Phase 3B: Integrative Auditor | [ ] | Gestalt synthesis produced | ___ |
| Phase 3C: Weaver Verdict | [ ] | VERDICT issued | ___ |
| Phase 3C-post: Usability Gate | [ ] | GR-64 checked | ___ |

---

## Pre-Flight Checklist

### L1: Pre-Flight Steps
- [ ] **PF-1** All artifact files accessible
- [ ] **PF-2** All reference files accessible
- [ ] **PF-3** Output directory created

### L2: PF-1 Artifact File Verification
| ID | File | Expected | Accessible |
|----|------|----------|------------|
| PF-1a | MANIFEST.md | `ephemeral/va-extraction/MANIFEST.md` | [ ] |
| PF-1b | artifact-orchestrator.md | ~1,060 lines | [ ] |
| PF-1c | artifact-identity-perception.md | 556 lines | [ ] |
| PF-1d | artifact-builder-recipe.md | ~959 lines | [ ] |
| PF-1e | gate-runner-core.js | ~1,550 lines, 9 functions | [ ] |
| PF-1f | gate-runner-spec.md | ~210 lines | [ ] |
| PF-1g | gate-runner-preconditions.md | 83 lines | [ ] |
| PF-1h | gate-manifest.json | ~180 lines | [ ] |
| PF-1i | pa-questions.md | ~432 lines | [ ] |
| PF-1j | pa-deployment.md | ~320 lines | [ ] |
| PF-1k | pa-weaver.md | ~450 lines | [ ] |
| PF-1l | pa-guardrails.md | ~176 lines | [ ] |
| PF-1m | pa-manifest.md | 89 lines | [ ] |
| PF-1n | artifact-routing.md | 843 lines | [ ] |
| PF-1o | artifact-tc-brief-template.md | ~165 lines | [ ] |
| PF-1p | artifact-value-tables.md | ~226 lines | [ ] |

### L2: PF-2 Reference File Verification
| ID | File | Expected | Accessible |
|----|------|----------|------------|
| PF-2a | tokens.css | 183 lines | [ ] |
| PF-2b | components.css | 290 lines | [ ] |
| PF-2c | mechanism-catalog.md | present | [ ] |
| PF-2d | council-verdict.md | 575 lines | [ ] |
| PF-2e | Raw content markdown | at CONTENT_PATH | [ ] |

### L2: PF-3 Output Directory
- [ ] PF-3a: Output directory created at: ___

---

## Phase 0: Content Analysis

### L1: Phase 0 Steps
| Step | Description | Complete |
|------|-------------|----------|
| P0-1 | Content Analyst spawned with correct inputs | [ ] |
| P0-2 | Content Map produced | [ ] |
| P0-3 | Mode selection determined | [ ] |

### L2: P0-1 Content Analyst Routing
| ID | Check | Done |
|----|-------|------|
| P0-1a | Content Analyst received raw content markdown | [ ] |
| P0-1b | Content Analyst received content analysis protocol from artifact-routing.md | [ ] |
| P0-1c | Content Analyst received 5-axis reader model from artifact-routing.md | [ ] |
| P0-1d | Content Analyst did NOT receive gate thresholds, pipeline context, or build history | [ ] |

### L3: P0-1 Agent Details
| Field | Value |
|-------|-------|
| Model | ___ |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p0-content-analyst-{timestamp}.md`) |

### L2: P0-2 Content Map Verification
| ID | Check | Value |
|----|-------|-------|
| P0-2a | Content Map produced (~30-50 lines) | [ ] ___ lines |
| P0-2b | Content Type classified | ___ (PROSE / MIXED / VISUAL) |
| P0-2c | Heterogeneity assessed | ___ (LOW / MODERATE / HIGH) |
| P0-2d | Metaphor Viability assessed | ___ (YES / NO) |
| P0-2e | Section Count determined | ___ |
| P0-2f | Density Arc Pattern identified | ___ (CRESCENDO / PLATEAU+TAPER / WAVE / UNIFORM) |

### L2: P0-3 Mode Selection
| ID | Check | Value |
|----|-------|-------|
| P0-3a | Mode determined | ___ (APPLIED / COMPOSED) |
| P0-3b | Rationale documented | ___ |
| P0-3c | If COMPOSED: both high heterogeneity AND metaphor viability confirmed | [ ] N/A / YES |

---

## Phase 1: Brief Assembly

### L1: Phase 1 Steps
| Step | Description | Complete |
|------|-------------|----------|
| P1-1 | Brief Assembler spawned with correct inputs | [ ] |
| P1-2 | Execution Brief produced | [ ] |
| P1-3 | Brief Verification gates all PASS | [ ] |

### L2: P1-1 Brief Assembler Routing
| ID | Check | Done |
|----|-------|------|
| P1-1a | Received Content Map from Phase 0 | [ ] |
| P1-1b | Received TC Brief Template (artifact-tc-brief-template.md) | [ ] |
| P1-1c | Received soul world-descriptions (World-description fields ONLY, NOT Gate check / CSS rule) | [ ] |
| P1-1d | Received perception thresholds as natural laws | [ ] |
| P1-1e | Received recipe phases from artifact-builder-recipe.md | [ ] |
| P1-1f | Received disposition D-01 through D-09 | [ ] |
| P1-1g | Received artifact-value-tables.md as reference | [ ] |
| P1-1h | Did NOT receive gate thresholds or raw prohibition list | [ ] |

### L3: P1-1 Agent Details
| Field | Value |
|-------|-------|
| Model | ___ |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p1-brief-assembler-{timestamp}.md`) |

### L2: P1-2 Brief Structure Verification
| ID | Check | Value |
|----|-------|-------|
| P1-2a | Execution Brief produced | [ ] ___ lines |
| P1-2b | Tier 1 IDENTITY present (~15 lines) | [ ] |
| P1-2c | Tier 2 PERCEPTION present (~8 lines) | [ ] |
| P1-2d | Tier 3 COMPOSITIONAL present (~50 lines) | [ ] |
| P1-2e | Tier 4 DISPOSITION present (~40 lines) | [ ] |
| P1-2f | Content Map appended (~30-50 lines) | [ ] |
| P1-2g | Recipe format (sequenced verbs: Read, Select, Deploy, Assess) | [ ] |

### L2: P1-3 Brief Verification (BV) Gates
| Gate | Check | Result | L3 Details |
|------|-------|--------|------------|
| BV-01 | Tier Line Budget (T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80%) | ___ PASS / FAIL | Per-tier counts: T1=___ T2=___ T3=___ T4=___ CM=___ |
| BV-02 | Background Delta (adjacent zones >= 15 RGB) | ___ PASS / FAIL | Zone pairs: ___ |
| BV-03 | Recipe Format (recipe:checklist verb ratio >= 3:1) | ___ PASS / FAIL | Ratio: ___ |
| BV-04 | Suppressor Scan (zero S-01, S-02, S-08, S-11) | ___ PASS / FAIL | Suppressors found: ___ |

- BV Revision Cycles Used: ___ (0 / 1 / 2)
- [ ] All BV gates PASS — proceed to Phase 2

---

## Phase 2: Building

### L1: Phase 2 Steps
| Step | Description | Complete |
|------|-------------|----------|
| P2-1 | Builder spawned with correct inputs | [ ] |
| P2-2 | HTML file produced | [ ] |
| P2-3 | Builder self-checks present | [ ] |

### L2: P2-1 Builder Routing
| ID | Check | Done |
|----|-------|------|
| P2-1a | Received Execution Brief (from Phase 1) | [ ] |
| P2-1b | Received tokens.css (183 lines) | [ ] |
| P2-1c | Received components.css (290 lines) | [ ] |
| P2-1d | Received mechanism-catalog.md | [ ] |
| P2-1e | Received value tables (~226 lines) | [ ] |
| P2-1f | CD-006 reference provided | ___ (YES / NO / N/A) |
| P2-1g | Did NOT receive gate thresholds | [ ] |
| P2-1h | Did NOT receive raw prohibition list | [ ] |
| P2-1i | Did NOT receive pipeline research or meta-analysis | [ ] |

### L3: P2-1 Agent Details
| Field | Value |
|-------|-------|
| Model | ___ (Opus STRONGLY recommended) |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p2-builder-{timestamp}.html`) |

### L2: P2-2 HTML Output Verification
| ID | Check | Done |
|----|-------|------|
| P2-2a | HTML file produced | [ ] |
| P2-2b | Conviction statement present (HTML comment at top) | [ ] |
| P2-2c | Self-evaluation block present (7 questions answered) | [ ] |
| P2-2d | Experiential check marker present (`<!-- EXPERIENTIAL-CHECK: ... -->`) | [ ] |

### L2: P2-3 Builder Self-Evaluation (7 Questions)
| ID | Self-Check Question | Answered |
|----|---------------------|----------|
| P2-3a | Zone transitions — how many, what changes? | [ ] |
| P2-3b | Transition types — what techniques used? | [ ] |
| P2-3c | Skeleton test — structure holds without content? | [ ] |
| P2-3d | Scroll surprise — designed moment in second half? | [ ] |
| P2-3e | Section heights — varied or uniform? | [ ] |
| P2-3f | Density arc — how does density change across page? | [ ] |
| P2-3g | Ending — designed conclusion or abrupt stop? | [ ] |

---

## Phase 3A: DPR + Screenshots + Gate Runner

### L1: Phase 3A Steps
| Step | Description | Complete |
|------|-------------|----------|
| P3A-0 | DPR Validation (GR-61) — pre-screenshot | [ ] |
| P3A-1 | HTML served + animations disabled + fonts loaded | [ ] |
| P3A-2 | Screenshots captured at all 3 viewports | [ ] |
| P3A-3 | Screenshot quality verified (GR-62) | [ ] |
| P3A-4 | Gate runner executed | [ ] |

### L2: P3A-0 DPR Validation
| ID | Check | Value |
|----|-------|-------|
| P3A-0a | `window.devicePixelRatio` checked | ___ |
| P3A-0b | DPR == 1 (or corrected to 1) | [ ] |
| P3A-0c | GR-61 result | ___ PASS / FAIL |

### L2: P3A-1 Pre-Capture Setup
| ID | Check | Done |
|----|-------|------|
| P3A-1a | HTML served via HTTP (not file://) | [ ] |
| P3A-1b | Scroll animations disabled (`animation: none !important; opacity: 1 !important`) | [ ] |
| P3A-1c | `document.fonts.ready` awaited | [ ] |

### L2: P3A-2 Screenshot Capture
| Viewport | Cold-Look | Scroll-Through | Scroll Count |
|----------|-----------|-----------------|--------------|
| 1440px | [ ] | [ ] (80% steps) | ___ |
| 1024px | [ ] | [ ] (80% steps) | ___ |
| 768px | [ ] | [ ] (80% steps) | ___ |

- Total screenshots: ___
- Screenshot directory: ___

### L2: P3A-3 Screenshot Quality (GR-62)
| ID | Check | Value |
|----|-------|-------|
| P3A-3a | Blank screenshots (<5KB) per viewport | ___ |
| P3A-3b | Max consecutive blanks <= 2 | [ ] |
| P3A-3c | Blank ratio <= 20% | [ ] |
| P3A-3d | GR-62 result | ___ PASS / FAIL |

### L2: P3A-4 Gate Runner Results

| Category | Gates | Pass | Fail | Result |
|----------|-------|------|------|--------|
| Identity (GR-01–GR-10, GR-05b) | 11 | ___ | ___ | ___ |
| Perception (GR-11, GR-13–GR-15, GR-44, GR-60) | 6 | ___ | ___ | ___ |
| Anti-Pattern (GR-17–GR-22) | 6 | ___ | ___ | ___ |
| Wave 2 (GR-45, GR-46, GR-50–GR-53) | 6 | ___ | ___ | ___ |
| Experiential (GR-61, GR-62, GR-63, GR-64) | 4 | ___ | ___ | ___ |
| Meta (GR-48, GR-49) | 2 | ___ | ___ | ___ |
| Mode Detection (GR-33, GR-34) | 2 | ___ | ___ | ___ |
| Output (GR-43) | 1 | ___ | ___ | ___ |
| **Total** | **38** | ___ | ___ | ___ |

Note: GR-23–GR-28 are orchestrator decision rules (Wave 3 reclassification). BV-01–BV-04 tracked in Phase 1. GR-64 runs post-weaver (Phase 3C-post).

- [ ] Gate runner completed
- Gate Results Path: ___ (e.g. `p3a-gate-runner-{timestamp}.json`)
- Failed gates (list): ___

---

## Phase 3A+: Orchestrator Experiential Scan

### L1: Experiential Scan Steps
| Step | Description | Complete |
|------|-------------|----------|
| P3A+-1 | Orchestrator scrolled page at reading speed | [ ] |
| P3A+-2 | Legibility assessment completed | [ ] |
| P3A+-3 | Information extraction test completed | [ ] |
| P3A+-4 | Navigation test completed | [ ] |
| P3A+-5 | Scan result recorded | [ ] |

### L2: P3A+-1 through P3A+-4 Experiential Findings
| ID | Check | Finding |
|----|-------|---------|
| P3A+-1a | Any text illegible at arm's length? | ___ (NONE / description) |
| P3A+-1b | Any chart/diagram message unclear within 5 seconds? | ___ (NONE / description) |
| P3A+-1c | Any navigation that fails to work? | ___ (NONE / description) |
| P3A+-1d | Visual verification: reported what PIXELS show, not what HTML says? | [ ] |

### L2: P3A+-5 Scan Result
- EXPERIENTIAL_SCAN: ___ (CLEAN / BLOCKING-USABILITY)
- If BLOCKING-USABILITY: Finding description: ___
- If BLOCKING-USABILITY: Pre-seeded for all PA auditors: [ ]

---

## Phase 3B: Perceptual Audit (Mode 4)

### L1: Phase 3B Steps
| Step | Description | Complete |
|------|-------------|----------|
| P3B-1 | All 9 PA auditors spawned with correct inputs | [ ] |
| P3B-2 | All 9 PA reports received | [ ] |
| P3B-3 | Experiential pass present in all 9 reports | [ ] |
| P3B-4 | Integrative Auditor produced gestalt synthesis | [ ] |
| P3B-5 | Usability circuit breaker checked | [ ] |

### L2: P3B-1 PA Auditor Deployment

**Per-Auditor Report Tracking:**

| Auditor | Specialty | Questions | Experiential Pass Present | Output Path | Status |
|---------|-----------|-----------|--------------------------|-------------|--------|
| A | Impression + Emotion | PA-01,03,04,05,45,65,67,72,76 (9) | [ ] | ___ | ___ |
| B | Readability + Typography | PA-02,08,29,55,56,70,77,81 (8) | [ ] | ___ | ___ |
| C | Spatial + Proportion | PA-11,30-33,50,51,53,64,66 (10) | [ ] | ___ | ___ |
| D | Flow + Pacing | PA-12,13,34-36,52,62,69,71,74,75 (11) | [ ] | ___ | ___ |
| E | Grid + Layout | PA-14,15,37-39,63,80 (7) | [ ] | ___ | ___ |
| F | Consistency + Rhythm | PA-16,17,41,60,61 (5) | [ ] | ___ | ___ |
| G | Metaphor + Ideology | PA-18-20,42-44,54,68 (8) | [ ] | ___ | ___ |
| H | Responsiveness | PA-22,23,46,47,73 (5) | [ ] | ___ | ___ |
| I | Cross-Page + Adversarial | PA-24-28,48 (6) | [ ] | ___ | ___ |

### L2: P3B-1 Routing Verification (all auditors)
| ID | Check | Done |
|----|-------|------|
| P3B-1a | All 9 auditors received screenshots ONLY (fresh-eyes principle) | [ ] |
| P3B-1b | All 9 auditors received assigned questions ONLY | [ ] |
| P3B-1c | All 9 auditors received pa-guardrails.md (includes visual verification) | [ ] |
| P3B-1d | No auditor received the Execution Brief, Content Map, or build intent | [ ] |
| P3B-1e | No auditor received another auditor's report | [ ] |
| P3B-1f | All 9 auditors spawned in parallel | [ ] |
| P3B-1g | All 9 auditor prompts include experiential pass as Section 0 (primacy position) | [ ] |

### L2: P3B-3 Experiential Pass Verification
| Auditor | ## 0. Experiential Pass section present? | Legibility findings? | Visual verification (pixels not code)? |
|---------|----------------------------------------|---------------------|---------------------------------------|
| A | [ ] | ___ | [ ] |
| B | [ ] | ___ | [ ] |
| C | [ ] | ___ | [ ] |
| D | [ ] | ___ | [ ] |
| E | [ ] | ___ | [ ] |
| F | [ ] | ___ | [ ] |
| G | [ ] | ___ | [ ] |
| H | [ ] | ___ | [ ] |
| I | [ ] | ___ | [ ] |

**Experiential Convergence Count:** ___/9 auditors flagged same element
- If >= 3: CONFIRMED finding → must be Fix #1: ___

### L2: P3B-4 Integrative Auditor

| Field | Value |
|-------|-------|
| Model | ___ |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p3b-integrative-{timestamp}.md`) |

| ID | Check | Done |
|----|-------|------|
| P3B-4a | Integrative Auditor received all 9 PA reports | [ ] |
| P3B-4b | Integrative Auditor received all screenshots | [ ] |
| P3B-4c | Integrative Auditor performed own experiential pass (Section 0) | [ ] |
| P3B-4d | Experiential pass aggregation completed (Section 1) | [ ] |
| P3B-4e | Gestalt synthesis produced (Section 2) | [ ] |
| P3B-4f | Top-5 fixes classified (Section 3) | [ ] |

Note: PA-05 scoring is the WEAVER's responsibility (FIX-083), not the Integrative Auditor's.

### L2: P3B-5 Usability Circuit Breaker
| ID | Check | Value |
|----|-------|-------|
| P3B-5a | Scanned all 9 reports for BLOCKING usability findings | [ ] |
| P3B-5b | Count of BLOCKING usability findings | ___ |
| P3B-5c | If any: elevated to BLOCKING-USABILITY for Weaver | [ ] N/A |
| P3B-5d | If any: annotated as "must be Fix #1" | [ ] N/A |

---

## Phase 3C: Verdict

### L1: Phase 3C Steps
| Step | Description | Complete |
|------|-------------|----------|
| P3C-1 | Weaver spawned with correct inputs | [ ] |
| P3C-2 | Weaver performed experiential anchor (Section 0) | [ ] |
| P3C-3 | Weaver scored PA-05 and Tier 5 | [ ] |
| P3C-4 | Verdict issued | [ ] |
| P3C-5 | Usability priority gate (GR-64) checked | [ ] |

### L2: P3C-1 Weaver Routing
| ID | Check | Done |
|----|-------|------|
| P3C-1a | Received integrative report | [ ] |
| P3C-1b | Received gate runner results (JSON) | [ ] |
| P3C-1c | Received all 9 individual auditor reports | [ ] |
| P3C-1d | Received calibration references from pa-weaver.md | [ ] |

### L3: P3C-1 Agent Details
| Field | Value |
|-------|-------|
| Model | ___ |
| Start | ___ |
| End | ___ |
| Diagnostic Output Path | ___ (e.g. `p3c-weaver-{timestamp}.md`) |
| Artistic Impression Path | ___ |

### L2: P3C-2 Weaver Experiential Anchor
| ID | Check | Done |
|----|-------|------|
| P3C-2a | Weaver viewed screenshots before reading reports | [ ] |
| P3C-2b | 3-sentence experiential anchor written | [ ] |
| P3C-2c | Experiential anchor compared with Integrative Auditor's aggregation | [ ] |
| P3C-2d | Divergences noted (if any) | ___ |

### L2: P3C-3 Scoring
| ID | Metric | Value |
|----|--------|-------|
| P3C-3a | PA-05 Score | ___/4 |
| P3C-3b | PA-05 DESIGNED | ___ PASS / CONDITIONAL / FAIL |
| P3C-3c | PA-05 COHERENT | ___ PASS / CONDITIONAL / FAIL |
| P3C-3d | PA-05 PROPORTIONATE | ___ PASS / CONDITIONAL / FAIL |
| P3C-3e | PA-05 POLISHED | ___ PASS / CONDITIONAL / FAIL |
| P3C-3f | Tier 5 Score | ___/9 |
| P3C-3g | Fix-Type Classification | ___ MECHANICAL / ___ STRUCTURAL / ___ COMPOSITIONAL |
| P3C-3h | Emotional Arc Synthesis | ___ |

### L2: P3C-4 Verdict
| ID | Check | Value |
|----|-------|-------|
| P3C-4a | Verdict | ___ (SHIP / SHIP WITH FIXES / REFINE / REBUILD) |
| P3C-4b | Verdict rationale — priority applied | ___ |
| P3C-4c | Identity gate failures | ___ |
| P3C-4d | Anti-pattern gate failures (count) | ___ |
| P3C-4e | Perception gate failures | ___ |
| P3C-4f | Confirmed experiential failures | ___ |
| P3C-4g | If SHIP: no confirmed experiential failures verified | [ ] N/A |

### L2: P3C-5 Usability Priority Gate (GR-64)
| ID | Check | Value |
|----|-------|-------|
| P3C-5a | GR-64 executed (post-weaver) | [ ] |
| P3C-5b | Auditors flagging usability (count) | ___ |
| P3C-5c | If >= 3: Fix #1 contains usability term | [ ] N/A |
| P3C-5d | GR-64 result | ___ PASS / FAIL / N/A |

---

## Execution Summary

| Metric | Value |
|--------|-------|
| Total Duration | ___ |
| Agents Spawned | ___/15 |
| BV Revision Cycles | ___ |
| Gate Pass Rate (in-runner) | ___/38 |
| Gate Pass Rate (total incl. BV + experiential) | ___/42 |
| PA-05 Score | ___/4 |
| Tier 5 Score | ___/9 |
| Experiential Convergence | ___/9 auditors on worst finding |
| Verdict | ___ |
| Circuit Breaker | ___ (N/A / 1st REBUILD / 1st REFINE / HUMAN REVIEW) |

---

## Output Files Manifest

| Phase | File | Path | Exists |
|-------|------|------|--------|
| P0 | Content Map | ___ | [ ] |
| P1 | Execution Brief | ___ | [ ] |
| P2 | HTML Artifact | ___ | [ ] |
| P3A | Gate Results JSON | ___ | [ ] |
| P3A | Screenshots Dir | ___ | [ ] |
| P3B | PA Report A | ___ | [ ] |
| P3B | PA Report B | ___ | [ ] |
| P3B | PA Report C | ___ | [ ] |
| P3B | PA Report D | ___ | [ ] |
| P3B | PA Report E | ___ | [ ] |
| P3B | PA Report F | ___ | [ ] |
| P3B | PA Report G | ___ | [ ] |
| P3B | PA Report H | ___ | [ ] |
| P3B | PA Report I | ___ | [ ] |
| P3B | Integrative Report | ___ | [ ] |
| P3C | Weaver Diagnostic | ___ | [ ] |
| P3C | Weaver Artistic | ___ | [ ] |

---

## Post-Run Verification

Run these checks after pipeline completion to verify tracker integrity.

### L0 Completeness — Phase Level
- [ ] All 14 L0 phase rows marked complete
- Total L0 complete: ___/14

### L1 Completeness — Step Level
| Phase | L1 Steps | Complete | Incomplete |
|-------|----------|----------|------------|
| Pre-Flight | 3 | ___ | ___ |
| Phase 0 | 3 | ___ | ___ |
| Phase 1 | 3 | ___ | ___ |
| Phase 2 | 3 | ___ | ___ |
| Phase 3A | 5 | ___ | ___ |
| Phase 3A+ | 5 | ___ | ___ |
| Phase 3B | 5 | ___ | ___ |
| Phase 3C | 5 | ___ | ___ |
| **Total** | **32** | ___ | ___ |

### L2 Completeness — Checklist Level
- Total L2 checkboxes: ___
- Total L2 checked: ___
- L2 completion rate: ___%
- Unchecked L2 items (list): ___

### Cross-Phase Consistency
- [ ] Mode in Build Metadata matches Phase 0.5 mode selection (P0-3a)
- [ ] Builder Model in Build Metadata matches Phase 2 model field
- [ ] BV gate results in Phase 1 are all PASS (if Phase 2 was reached)
- [ ] PA-05 score in P3C-3a matches Execution Summary
- [ ] Verdict in P3C-4a matches Execution Summary
- [ ] Experiential convergence count in P3B-3 matches Execution Summary
- [ ] Gate pass rate matches across P3A-4 table and Execution Summary
- [ ] No anomaly keywords in log entries (ABORT, ERROR, TIMEOUT, CRASH)
- Anomalies found: ___

### Experiential Integrity Check
- [ ] Orchestrator experiential scan completed (P3A+-5)
- [ ] All 9 auditor reports contain `## 0. Experiential Pass` section
- [ ] Integrative Auditor performed own experiential pass (P3B-4c)
- [ ] Weaver performed experiential anchor (P3C-2a)
- [ ] If confirmed experiential failure exists: Fix #1 addresses usability
- [ ] Visual verification principle upheld (pixels, not code interpretation)
- Experiential integrity: ___/6 checks passed

### Output Correspondence
- [ ] Every file listed in Output Files Manifest exists on disk
- [ ] Content Map file is non-empty
- [ ] Execution Brief file is non-empty
- [ ] HTML Artifact file is non-empty
- [ ] Gate Results JSON is valid JSON
- [ ] All 9 PA reports are non-empty
- [ ] Integrative report is non-empty
- [ ] Weaver outputs are non-empty
- Missing files: ___

### Automation Hints
```
Parseable checks (can be automated):
- Count [x] vs [ ] at each level (L0, L1, L2) for hierarchical completeness
- Search for "ABORT|ERROR|TIMEOUT|CRASH" for anomalies
- Verify file existence for each Output Files Manifest entry
- Compare field values across sections for consistency
- Check all "## 0. Experiential Pass" headers exist in PA reports
- Verify experiential convergence count matches cross-reference
```

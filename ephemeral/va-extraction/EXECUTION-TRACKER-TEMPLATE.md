# Pipeline v3 — Execution Tracker

> **Instructions:** Copy this template to your build output directory at pipeline start. Fill in fields as each phase completes. All `___` fields and `[ ]` checkboxes must be populated by pipeline end.

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

## Pre-Flight Checklist

All must be checked before Phase 0 begins.

- [ ] Raw content markdown exists at CONTENT_PATH
- [ ] MANIFEST.md accessible at `ephemeral/va-extraction/MANIFEST.md`
- [ ] artifact-orchestrator.md accessible (971 lines)
- [ ] artifact-identity-perception.md accessible (556 lines)
- [ ] artifact-builder-recipe.md accessible (840 lines)
- [ ] Gate runner split files accessible: gate-runner-core.js (1,436 lines), gate-runner-spec.md (188 lines), gate-runner-preconditions.md (83 lines), gate-manifest.json (159 lines)
- [ ] PA split files accessible: pa-questions.md (412 lines), pa-deployment.md (237 lines), pa-weaver.md (376 lines), pa-guardrails.md (151 lines), pa-manifest.md (89 lines)
- [ ] artifact-routing.md accessible (843 lines)
- [ ] artifact-tc-brief-template.md accessible (~165 lines)
- [ ] artifact-value-tables.md accessible (~226 lines)
- [ ] tokens.css accessible (183 lines)
- [ ] components.css accessible (290 lines)
- [ ] mechanism-catalog.md accessible
- [ ] council-verdict.md accessible (575 lines)
- [ ] Output directory created at: ___

---

## Phase 0: Content Analysis

| Field | Value |
|-------|-------|
| Agent | Content Analyst |
| Model | ___ |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p0-content-analyst-{timestamp}.md`) |

**Routing Verification:**
- [ ] Content Analyst received raw content markdown
- [ ] Content Analyst received content analysis protocol from artifact-routing.md
- [ ] Content Analyst received 5-axis reader model from artifact-routing.md
- [ ] Content Map produced (~30-50 lines)

**Content Map Summary:**
- Content Type: ___ (PROSE / MIXED / VISUAL)
- Heterogeneity: ___ (LOW / MODERATE / HIGH)
- Metaphor Viability: ___ (YES / NO)
- Section Count: ___
- Density Arc Pattern: ___ (CRESCENDO / PLATEAU+TAPER / WAVE / UNIFORM)

**Phase 0.5 — Mode Selection:**
- [ ] Mode determined: ___ (APPLIED / COMPOSED)
- Rationale: ___

---

## Phase 1: Brief Assembly

| Field | Value |
|-------|-------|
| Agent | Brief Assembler |
| Model | ___ |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p1-brief-assembler-{timestamp}.md`) |

**Routing Verification:**
- [ ] Brief Assembler received Content Map from Phase 0
- [ ] Brief Assembler received TC Brief Template (artifact-tc-brief-template.md)
- [ ] Brief Assembler received soul world-descriptions (World-description fields ONLY, NOT Gate check / CSS rule)
- [ ] Brief Assembler received perception thresholds as natural laws
- [ ] Brief Assembler received recipe phases from artifact-builder-recipe.md
- [ ] Brief Assembler received disposition D-01 through D-09
- [ ] Brief Assembler received artifact-value-tables.md as reference
- [ ] Execution Brief produced (~100-165 lines)

**Brief Verification (BV) Gate Results:**

| Gate | Check | Result |
|------|-------|--------|
| BV-01 | Tier Line Budget (T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80%) | ___ PASS / FAIL |
| BV-02 | Background Delta (adjacent zones >= 15 RGB) | ___ PASS / FAIL |
| BV-03 | Recipe Format (recipe:checklist verb ratio >= 3:1) | ___ PASS / FAIL |
| BV-04 | Suppressor Scan (zero S-01, S-02, S-08, S-11) | ___ PASS / FAIL |

- BV Revision Cycles Used: ___ (0 / 1 / 2)
- [ ] All BV gates PASS — proceed to Phase 2

---

## Phase 2: Building

| Field | Value |
|-------|-------|
| Agent | Builder |
| Model | ___ (Opus STRONGLY recommended) |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p2-builder-{timestamp}.html`) |

**Routing Verification:**
- [ ] Builder received Execution Brief (from Phase 1)
- [ ] Builder received tokens.css (183 lines)
- [ ] Builder received components.css (290 lines)
- [ ] Builder received mechanism-catalog.md
- [ ] Builder received value tables (~226 lines)
- [ ] Builder received CD-006 reference (optional): ___ (YES / NO / N/A)
- [ ] Builder did NOT receive gate thresholds
- [ ] Builder did NOT receive raw prohibition list
- [ ] Builder did NOT receive pipeline research or meta-analysis
- [ ] HTML file produced
- [ ] Conviction statement present (HTML comment at top)
- [ ] Self-evaluation block present (7 questions answered)

---

## Phase 3A: Screenshots + Gate Runner

| Field | Value |
|-------|-------|
| Start | ___ |
| End | ___ |
| Screenshot Directory | ___ |
| Gate Results Path | ___ (e.g. `p3a-gate-runner-{timestamp}.json`) |

**Screenshot Capture:**
- [ ] HTML served via HTTP (not file://)
- [ ] Scroll animations disabled (`animation: none !important; opacity: 1 !important`)
- [ ] `document.fonts.ready` awaited
- [ ] 1440px: cold-look captured
- [ ] 1440px: scroll-through captured (80% viewport steps)
- [ ] 1024px: cold-look captured
- [ ] 1024px: scroll-through captured
- [ ] 768px: cold-look captured
- [ ] 768px: scroll-through captured
- Total screenshots: ___

**Gate Runner Results Summary:**

| Category | Gates | Pass | Fail | Result |
|----------|-------|------|------|--------|
| Identity (GR-01–GR-10) | 10 | ___ | ___ | ___ |
| Perception (GR-11–GR-15, GR-44) | 6 | ___ | ___ | ___ |
| Anti-Pattern (GR-17–GR-22) | 6 | ___ | ___ | ___ |
| Wave 2 (GR-45, GR-46, GR-50–GR-53) | 6 | ___ | ___ | ___ |
| Meta (GR-48, GR-49) | 2 | ___ | ___ | ___ |
| Mode Detection (GR-33, GR-34) | 2 | ___ | ___ | ___ |
| Output (GR-43) | 1 | ___ | ___ | ___ |
| **Total** | **33** | ___ | ___ | ___ |

Note: GR-23–GR-28 are now orchestrator decision rules (Wave 3 reclassification), not gate-runner gates. BV-01–BV-04 are tracked in Phase 1 above.

- [ ] Gate runner completed
- Failed gates (list): ___

---

## Phase 3B: Perceptual Audit (Mode 4)

**PA Auditor Reports:**

| Auditor | Specialty | Questions | Output Path | Status |
|---------|-----------|-----------|-------------|--------|
| A | Impression + Emotion | PA-01,03,04,05,45,65,67,72,76 (9) | ___ | ___ |
| B | Readability + Typography | PA-02,06,08,29,55,56,70,77 (8) | ___ | ___ |
| C | Spatial + Proportion | PA-09,11,30-33,50,51,53,64,66 (11) | ___ | ___ |
| D | Flow + Pacing | PA-12,13,34-36,52,62,69,71,74,75 (11) | ___ | ___ |
| E | Grid + Layout | PA-14,15,37-39,63 (6) | ___ | ___ |
| F | Consistency + Rhythm | PA-16,17,40,41,60,61 (6) | ___ | ___ |
| G | Metaphor + Ideology | PA-18-20,42-44,68 (7) | ___ | ___ |
| H | Responsiveness | PA-22,23,46,47,73 (5) | ___ | ___ |
| I | Cross-Page + Adversarial | PA-24-28,48 (6) | ___ | ___ |

**Routing Verification (all auditors):**
- [ ] All 9 auditors received screenshots ONLY (fresh-eyes principle)
- [ ] All 9 auditors received assigned questions ONLY
- [ ] No auditor received the Execution Brief, Content Map, or build intent
- [ ] No auditor received another auditor's report
- [ ] All 9 auditors spawned in parallel

**Integrative Auditor:**

| Field | Value |
|-------|-------|
| Model | ___ |
| Start | ___ |
| End | ___ |
| Output Path | ___ (e.g. `p3b-integrative-{timestamp}.md`) |

- [ ] Integrative Auditor received all 9 PA reports
- [ ] Integrative Auditor received all screenshots
- [ ] Integrative Auditor produced gestalt synthesis report
Note: PA-05 scoring is the WEAVER's responsibility (FIX-083), not the Integrative Auditor's.

---

## Phase 3C: Verdict

**Weaver:**

| Field | Value |
|-------|-------|
| Model | ___ |
| Start | ___ |
| End | ___ |
| Diagnostic Output Path | ___ (e.g. `p3c-weaver-{timestamp}.md`) |
| Artistic Impression Path | ___ |

**Routing Verification:**
- [ ] Weaver received integrative report
- [ ] Weaver received gate runner results (JSON)
- [ ] Weaver received all 9 individual auditor reports
- [ ] Weaver received calibration references from pa-weaver.md

**PA-05 Score (Weaver-produced):** ___/4
- PA-05 Sub-criteria: Designed ___  |  Coherent ___  |  Proportionate ___  |  Polished ___
- Tier 5 Score: ___/9
- Fix-Type Classification: ___ MECHANICAL / ___ STRUCTURAL / ___ COMPOSITIONAL
- Emotional Arc Synthesis: ___

**Verdict:** ___ (SHIP / SHIP WITH FIXES / REFINE / REBUILD)

Verdict Rationale (priority applied):
- Identity gate failures: ___
- Anti-pattern gate failures (count): ___
- Perception gate failures: ___
- PA-05 score: ___/4

---

## Execution Summary

| Metric | Value |
|--------|-------|
| Total Duration | ___ |
| Agents Spawned | ___/15 |
| BV Revision Cycles | ___ |
| Gate Pass Rate | ___/29 |
| PA-05 Score | ___/4 |
| Verdict | ___ |
| Circuit Breaker | ___ (N/A / 1st REBUILD / 1st REFINE / HUMAN REVIEW) |

**Output Files Manifest:**

| Phase | File | Path | Exists |
|-------|------|------|--------|
| P0 | Content Map | ___ | [ ] |
| P1 | Execution Brief | ___ | [ ] |
| P2 | HTML Artifact | ___ | [ ] |
| P3A | Gate Results JSON | ___ | [ ] |
| P3A | Screenshots | ___ | [ ] |
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

## Post-Run Verification (FIX-111)

Run these checks after pipeline completion to verify tracker integrity.

### Completeness Check
- [ ] All pre-flight checkboxes marked
- [ ] All Phase 0 fields populated
- [ ] All Phase 1 fields populated (including BV results)
- [ ] All Phase 2 fields populated
- [ ] All Phase 3A fields populated (screenshots + gates)
- [ ] All Phase 3B fields populated (all 9 auditor paths + integrative)
- [ ] All Phase 3C fields populated (verdict + rationale)
- [ ] Execution Summary table fully populated
- Total checkboxes marked: ___
- Total checkboxes expected: ___
- Unmarked checkboxes (list): ___

### Consistency Check
- [ ] Mode in Build Metadata matches Phase 0.5 mode selection
- [ ] Builder Model in Build Metadata matches Phase 2 model field
- [ ] BV gate results in Phase 1 are all PASS (if Phase 2 was reached)
- [ ] PA-05 score in Phase 3B matches Execution Summary
- [ ] Verdict in Phase 3C matches Execution Summary
- [ ] No anomaly keywords in log entries (ABORT, ERROR, TIMEOUT, CRASH)
- Anomalies found: ___

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
- Count [x] vs [ ] for completeness ratio
- Search for "ABORT|ERROR|TIMEOUT|CRASH" for anomalies
- Verify file existence for each Output Files Manifest entry
- Compare field values across sections for consistency
```

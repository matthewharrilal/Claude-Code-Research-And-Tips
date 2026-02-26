# Template-Slot Completeness — Auxiliary Gate 2

**Date:** 2026-02-25
**Auditor:** Opus agent (aux-gate2)
**Scope:** All `{VARIABLE}` placeholder slots across 6 files: MANIFEST.md (Appendix E templates), artifact-orchestrator.md, artifact-tc-brief-template.md, pa-deployment.md, pa-weaver.md, EXECUTION-TRACKER-TEMPLATE.md

---

## Total Slots Found: 28
## Slots with Producer: 28
## Orphan Slots (no producer): 0

---

## Slot Inventory by Template

### 1. Content Analyst Template (MANIFEST.md ~line 998-1015)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 1 | `{RAW_CONTENT_MARKDOWN}` | User-provided pipeline input | Pre-pipeline | YES — documented in Appendix D "Raw content markdown: User-provided, varies" (line 963) and Quickstart Step 0 |

### 2. Brief Assembler Template (MANIFEST.md ~line 1020-1044)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 2 | `{APPLIED or COMPOSED}` | Orchestrator mode selection | Phase 0.5 | YES — documented in MANIFEST Section 4 "Phase 0.5: Mode Selection" (line 379-384) and artifact-orchestrator.md SECTION 3 |
| 3 | `{CONTENT_MAP}` | Content Analyst agent | Phase 0 | YES — Content Analyst output documented in MANIFEST Section 4 Phase 0 (line 374), Agent Roster (line 114) |

### 3. Builder Template (MANIFEST.md ~line 1049-1102)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 4 | `{EXECUTION_BRIEF_FROM_PHASE_1}` | Brief Assembler agent | Phase 1 | YES — Brief Assembler output documented in MANIFEST Section 4 Phase 1 (line 408), Agent Roster (line 120) |
| 5 | `{tokens.css content}` | Static file read | Pre-pipeline | YES — file path documented in Appendix D (line 924): `design-system/compositional-core/vocabulary/tokens.css` |
| 6 | `{components.css content}` | Static file read | Pre-pipeline | YES — file path documented in Appendix D (line 925): `design-system/compositional-core/components/components.css` |
| 7 | `{mechanism-catalog.md content}` | Static file read | Pre-pipeline | YES — file path documented in Appendix D (line 926): `design-system/compositional-core/grammar/mechanism-catalog.md` |
| 8 | `{value-tables.md content}` | Static file read (optional) | Pre-pipeline | YES — file path documented in Appendix D (line 954): `ephemeral/va-extraction/artifact-value-tables.md` |

### 4. PA Auditor Template (MANIFEST.md ~line 1112-1150)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 9 | `{LETTER}` | Orchestrator (A through I) | Phase 3B spawn | YES — enumerated in Agent Roster Section 2 (lines 149-157), pa-deployment.md Section 1.2 |
| 10 | `{SPECIALTY}` | Orchestrator (per-auditor role name) | Phase 3B spawn | YES — enumerated in Agent Roster: A="Impression + Emotion", B="Readability + Typography", etc. (lines 149-157) |
| 11 | `{ASSIGNED_QUESTIONS}` | Orchestrator extracts from pa-questions.md | Phase 3B spawn | YES — per-auditor question assignments documented in MANIFEST Agent Roster (lines 149-157) and pa-deployment.md Section 1.2 (lines 142-151). Orchestrator slices pa-questions.md per assignment table. |
| 12 | `{List of screenshot file paths}` | Orchestrator screenshot capture | Phase 3A | YES — screenshot naming convention documented in pa-deployment.md Section 2.3 (lines 272-288). Orchestrator captures then passes file paths. |

### 5. Integrative Auditor Template (MANIFEST.md ~line 1158-1192)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 13 | `{all 9 reports}` (AUDITOR REPORTS) | 9 PA Auditors A-I | Phase 3B | YES — sequential dependency documented in MANIFEST (line 169): "Integrative Auditor MUST spawn AFTER all 9 PA report files exist." pa-deployment.md Section 1.6 (lines 226-231). |
| 14 | `{file paths}` (SCREENSHOTS) | Orchestrator screenshot capture | Phase 3A | YES — same as slot #12 |

### 6. Weaver Template (MANIFEST.md ~line 1197-1244)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 15 | `{integrative_report}` | Integrative Auditor | Phase 3B | YES — Integrative Auditor produces gestalt synthesis, documented in Agent Roster (line 165) and MANIFEST Phase 3B (line 488) |
| 16 | `{gate_results_json}` | Gate Runner (Playwright JS) | Phase 3A | YES — gate runner output is structured JSON, documented in MANIFEST Phase 3A (line 468-471) |
| 17 | `{all 9 reports — for evidence}` (INDIVIDUAL REPORTS) | 9 PA Auditors A-I | Phase 3B | YES — same source as slot #13 |
| 18 | `{pa-guardrails-weaver.md content}` | Static file read | Pre-pipeline | YES — file documented in Appendix D (line 948): `ephemeral/va-extraction/pa-guardrails-weaver.md` |

### 7. REFINE Builder Template (MANIFEST.md ~line 1248-1278)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 19 | **`{CONVICTION_FROM_PASS_1}`** | Initial Builder (Phase 2) | Phase 2 | YES — Builder template (line 1069) requires `<!-- CONVICTION: [your 3 sentences] -->` at top of HTML. Orchestrator extracts from Pass 1 HTML. Also documented in artifact-orchestrator.md (line 379-380, ITEM 59) and MANIFEST Phase 2 (line 444). |
| 20 | **`{WEAVER_ARTISTIC_IMPRESSION}`** | Weaver agent (Phase 3C) | Phase 3C | YES — Weaver template explicitly produces TWO outputs: "Diagnostic verdict for orchestrator" and "Artistic impression for potential REFINE/REBUILD builder" (MANIFEST lines 516-517). Documented in artifact-orchestrator.md line 581: "REFINE builder receives: artistic impression from Weaver." |
| 21 | **`{RESIDUAL_FROM_PASS_1}`** | Initial Builder (Phase 2) | Phase 2 | YES — REFINE template (line 1267-1268) instructs builder to include `<!-- RESIDUAL: ... -->` comment. artifact-orchestrator.md (line 565-566) documents: "Verify RESIDUAL artifact exists in Pass 1 HTML: `<!-- RESIDUAL: ... -->` comment (>= 50 chars)." |
| 22 | `{EXECUTION_BRIEF}` | Brief Assembler (Phase 1) | Phase 1 | YES — same as slot #4. Orchestrator retains from Phase 1. |
| 23 | `{PASS_1_HTML}` | Initial Builder (Phase 2) | Phase 2 | YES — the HTML file produced in Phase 2. Orchestrator retains. Documented in MANIFEST Phase 2 (line 447): "Builder produces single HTML file." |

### 8. Execution Tracker Template (EXECUTION-TRACKER-TEMPLATE.md)

| # | Slot | Producer | Phase | Verified |
|---|------|----------|-------|----------|
| 24 | `{SLUG}` (title line 1) | Orchestrator | Pipeline start | YES — Quickstart Step 0 (MANIFEST line 23): "Fill in BUILD_DATE, CONTENT_PATH, SLUG." |

### 9. TC Brief Template (artifact-tc-brief-template.md) — Instructional Placeholders

These are NOT runtime variables filled by the orchestrator. They are assembly instructions for the Brief Assembler agent telling it WHAT to synthesize. They are filled by the Brief Assembler using its inputs (Content Map, reference artifacts).

| # | Slot | Producer | Type | Verified |
|---|------|----------|------|----------|
| 25 | `{Z1 -> Z2}`, `{hex}`, `{delta}`, `{subtle/confident/dramatic}` (zone background table, lines 88-90) | Brief Assembler synthesizes from Content Map + artifact-value-tables.md | Assembly instruction | YES — instructional, not runtime. Brief Assembler documented as receiver. |
| 26 | `{Metaphor Name from Content Map}` (line 114) | Brief Assembler extracts from Content Map | Assembly instruction | YES — Content Map includes "recommended metaphor seed" |
| 27 | `{PATTERN_NAME from Content Map}` (line 118) | Brief Assembler extracts from Content Map | Assembly instruction | YES — Content Map includes density arc pattern |
| 28 | `{Content-specific: ...}` placeholders in D-01, D-04, D-09 (lines 178, 187, 215) | Brief Assembler synthesizes from Content Map | Assembly instruction | YES — Content Map provides per-zone classification |

### 10. Orchestrator File Paths (not template slots per se)

| Pattern | Context | Status |
|---------|---------|--------|
| `{SLUG}-{DATE}` (MANIFEST line 23, orchestrator line 737) | Output directory naming convention | NOT A SLOT — naming pattern for directory creation, filled by orchestrator at pipeline start |
| `{width}` (MANIFEST line 464) | Screenshot directory structure | NOT A SLOT — literal subdirectory names: 1440, 1024, 768 |
| `{phase}-{agent}-{timestamp}` (MANIFEST line 531) | Log file naming convention | NOT A SLOT — naming pattern documentation |

---

## REFINE Template Slot Audit (Special Attention)

The REFINE Builder Template (MANIFEST.md lines 1246-1278) is the newest template, added as part of the convergence reframe. It has 5 slots:

| Slot | Producer | Production Documented? | Extraction Method | Risk |
|------|----------|----------------------|-------------------|------|
| `{CONVICTION_FROM_PASS_1}` | Initial Builder | YES — Builder template requires `<!-- CONVICTION: ... -->` as HTML comment at top of output (line 1069). Orchestrator extracts. artifact-orchestrator.md Step 1 "Conviction Statement" (line 379). | Parse `<!-- CONVICTION: ... -->` from Pass 1 HTML | **LOW** — well-documented, explicit in builder template. But: builder could omit it. MANIFEST line 419 documents recovery: "The orchestrator must capture and preserve this artifact." Recovery if missing: re-spawn builder with explicit instruction. |
| `{WEAVER_ARTISTIC_IMPRESSION}` | Weaver (Phase 3C) | YES — Weaver template produces TWO outputs. Output B is explicitly "ARTISTIC IMPRESSION for REFINE/REBUILD builder: NO numbers/gates, describe what the page FEELS like" (MANIFEST line 1230). artifact-orchestrator.md line 581 confirms "REFINE builder receives: artistic impression from Weaver." | Weaver produces as separate output section | **LOW** — Weaver template is explicit. Dual-output requirement is reinforced in both MANIFEST and orchestrator. |
| `{RESIDUAL_FROM_PASS_1}` | Initial Builder | YES — REFINE template itself instructs: "Include your own `<!-- RESIDUAL: ... -->` comment" (line 1267). artifact-orchestrator.md line 565-566 documents extraction: "Verify RESIDUAL artifact exists in Pass 1 HTML: `<!-- RESIDUAL: ... -->` comment (>= 50 chars)." | Parse `<!-- RESIDUAL: ... -->` from Pass 1 HTML | **MEDIUM** — The INITIAL builder template (lines 1049-1102) does NOT explicitly instruct the builder to write a RESIDUAL comment. Only the REFINE builder template does. The initial builder IS instructed to write CONVICTION and SELF-EVALUATION but NOT RESIDUAL. However, artifact-orchestrator.md line 566 says: "If missing: builder must add one before REFINE proceeds." This is a documented recovery path, not a gap. |
| `{EXECUTION_BRIEF}` | Brief Assembler | YES | Retained from Phase 1 | **LOW** |
| `{PASS_1_HTML}` | Initial Builder | YES | Phase 2 output file | **LOW** |

### RESIDUAL Slot: Deeper Analysis

The `{RESIDUAL_FROM_PASS_1}` slot has the most complex production chain:

1. The **initial** Builder template (MANIFEST lines 1049-1102) instructs: CONVICTION (yes), SELF-EVALUATION (yes), RESIDUAL (NO — not mentioned).
2. The **REFINE** Builder template (MANIFEST lines 1248-1278) instructs: "Include your own `<!-- RESIDUAL: ... -->` comment" — but this is for the REFINE builder's OWN residual, not for extracting Pass 1's residual.
3. artifact-orchestrator.md line 566: "Verify RESIDUAL artifact exists in Pass 1 HTML... If missing: builder must add one before REFINE proceeds."

**Finding:** The initial builder is NOT explicitly told to produce a RESIDUAL comment. The orchestrator documentation acknowledges this may be missing and provides a recovery path. This is a **documented gap with recovery**, not an orphan slot.

**Recommendation:** Add `<!-- RESIDUAL: ... -->` instruction to the initial Builder template (MANIFEST lines 1076-1085 area) alongside the existing CONVICTION and SELF-EVALUATION instructions. This would prevent the need for the recovery path.

---

## Cross-Validation: Slots Referenced in artifact-orchestrator.md

The orchestrator (MANIFEST.md Section 4 + artifact-orchestrator.md) describes the data flow between phases. Every slot in the templates corresponds to a documented output from a prior phase:

| Data Flow | Source Phase | Destination Phase | Slot Name | Verified |
|-----------|-------------|-------------------|-----------|----------|
| Raw content -> Content Analyst | Pre-pipeline | Phase 0 | `{RAW_CONTENT_MARKDOWN}` | YES |
| Content Map -> Brief Assembler | Phase 0 | Phase 1 | `{CONTENT_MAP}` | YES |
| Mode -> Brief Assembler | Phase 0.5 | Phase 1 | `{APPLIED or COMPOSED}` | YES |
| Execution Brief -> Builder | Phase 1 | Phase 2 | `{EXECUTION_BRIEF_FROM_PHASE_1}` | YES |
| Reference files -> Builder | Static | Phase 2 | `{tokens.css}`, `{components.css}`, etc. | YES |
| Screenshots -> PA Auditors | Phase 3A | Phase 3B | `{List of screenshot file paths}` | YES |
| Questions -> PA Auditors | Static (pa-questions.md) | Phase 3B | `{ASSIGNED_QUESTIONS}` | YES |
| 9 Reports -> Integrative | Phase 3B | Phase 3B | `{all 9 reports}` | YES |
| Integrative Report -> Weaver | Phase 3B | Phase 3C | `{integrative_report}` | YES |
| Gate Results -> Weaver | Phase 3A | Phase 3C | `{gate_results_json}` | YES |
| Conviction -> REFINE Builder | Phase 2 | REFINE Phase 2 | `{CONVICTION_FROM_PASS_1}` | YES |
| Artistic Impression -> REFINE Builder | Phase 3C | REFINE Phase 2 | `{WEAVER_ARTISTIC_IMPRESSION}` | YES |
| Residual -> REFINE Builder | Phase 2 | REFINE Phase 2 | `{RESIDUAL_FROM_PASS_1}` | YES (with recovery) |
| Execution Brief -> REFINE Builder | Phase 1 | REFINE Phase 2 | `{EXECUTION_BRIEF}` | YES |
| Pass 1 HTML -> REFINE Builder | Phase 2 | REFINE Phase 2 | `{PASS_1_HTML}` | YES |

---

## Findings Summary

### No Orphan Slots Found
All 28 template slots have documented producers. Every data flow from source phase to destination template is traceable.

### One Actionable Finding (NON-BLOCKING)

**FINDING-01: Initial Builder template omits RESIDUAL instruction**
- **Severity:** NON-BLOCKING (recovery path documented in artifact-orchestrator.md)
- **Slot:** `{RESIDUAL_FROM_PASS_1}` in REFINE Builder template
- **Issue:** The initial Builder template (MANIFEST lines 1049-1102) explicitly instructs CONVICTION (`<!-- CONVICTION: ... -->`) and SELF-EVALUATION (`<!-- SELF-EVALUATION: ... -->`), but does NOT instruct the initial builder to produce a `<!-- RESIDUAL: ... -->` comment. The REFINE flow depends on this artifact.
- **Current mitigation:** artifact-orchestrator.md line 566 says: "If missing: builder must add one before REFINE proceeds."
- **Recommendation:** Add RESIDUAL instruction to the initial Builder template, alongside CONVICTION and SELF-EVALUATION. Something like:
  ```
  After building, include a <!-- RESIDUAL: ... --> comment (>= 50 chars)
  documenting: (1) what you preserved from the brief, (2) what you changed,
  (3) what would come next, (4) what trade-offs you made. At least 3 of 4 sections.
  ```
  This eliminates the recovery path and makes REFINE readiness the default.

### Three Observations (INFORMATIONAL)

**OBS-01:** TC Brief Template placeholders (slots 25-28) are assembly instructions, not runtime variables. They are correctly handled by the Brief Assembler agent's synthesis logic, not by orchestrator string substitution.

**OBS-02:** The Weaver's dual-output requirement (diagnostic + artistic impression) is well-documented across three files (MANIFEST Weaver template, artifact-orchestrator.md REFINE section, pa-weaver.md Section 1). Redundancy here is appropriate given the data flow criticality.

**OBS-03:** The `{SLUG}` placeholder in EXECUTION-TRACKER-TEMPLATE.md line 1 is the only slot in a non-Appendix-E file. It is correctly documented in MANIFEST Quickstart Step 0.

---

## Verdict: PASS

All 28 template slots have documented producers. Zero orphan slots. One non-blocking recommendation (RESIDUAL instruction for initial builder) with existing recovery path.

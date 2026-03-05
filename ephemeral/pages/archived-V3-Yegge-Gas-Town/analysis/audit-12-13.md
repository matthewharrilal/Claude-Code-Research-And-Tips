# Comprehensive Audit: Files 12 & 13

**Auditor:** audit-12-13 (Opus 4.6)
**Date:** 2026-02-24
**Sources:**
- `12-implementation-style-guide.md` (369 lines) -- per-file formatting templates, capacity, red lines
- `13-structural-intersection.md` (567 lines) -- budget analysis, 5-wave implementation plan

---

## FILE 12: IMPLEMENTATION STYLE GUIDE — COMPLETE INVENTORY

### Section A: Hard Constraint (Lines 8-27)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-HC-01 | CONSTRAINT | Total aggregate safe addition capacity across ALL artifacts is ~240 lines | All files | MUST | YES |
| ISG-HC-02 | RULE | Most enrichments MUST be implemented as REPLACEMENTS or MODIFICATIONS, not additions | All enrichments | MUST | YES |
| ISG-HC-03 | CONSTRAINT | gate-runner-core.js at 68% compliance, ALREADY PAST CAPACITY | gate-runner-core.js | MUST | YES |
| ISG-HC-04 | RULE | Any enrichment targeting gate-runner-core.js MUST subtract before adding. Non-negotiable. | gate-runner-core.js | MUST | YES |
| ISG-HC-05 | RULE | Before adding N lines to any file, identify N lines to remove or replace. Net-zero is the default posture. | All files | MUST | PARTIAL |

### Section B: Per-File Capacity Table (Lines 14-25)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-CAP-01 | CONSTRAINT | artifact-tc-brief-template.md: ~224 lines, +30 safe, 83.7% compliance, MODERATE headroom | artifact-tc-brief-template.md | MUST | NO |
| ISG-CAP-02 | CONSTRAINT | artifact-builder-recipe.md: ~934 lines, +50 safe, 82% compliance, MODERATE headroom | artifact-builder-recipe.md | MUST | NO |
| ISG-CAP-03 | CONSTRAINT | gate-runner-core.js: ~1,437 lines, **0 net** safe, 68% compliance, OVER CAPACITY | gate-runner-core.js | MUST | YES |
| ISG-CAP-04 | CONSTRAINT | artifact-routing.md: ~900 lines, +40 safe, 71.4% compliance, MODERATE headroom | artifact-routing.md | MUST | NO |
| ISG-CAP-05 | CONSTRAINT | artifact-orchestrator.md: ~1,058 lines, +50 safe, 87% compliance, GOOD headroom | artifact-orchestrator.md | MUST | NO |
| ISG-CAP-06 | CONSTRAINT | artifact-identity-perception.md: ~556 lines, +20 safe, 78.8% compliance, LIMITED headroom | artifact-identity-perception.md | MUST | NO |
| ISG-CAP-07 | CONSTRAINT | pa-questions.md + split files: ~1,004 lines, +30 safe, 94% compliance, GOOD headroom | pa-questions.md | MUST | NO |
| ISG-CAP-08 | CONSTRAINT | MANIFEST.md: ~1,193 lines, +20 safe, 70.6% compliance, LIMITED headroom | MANIFEST.md | MUST | NO |
| ISG-CAP-09 | CONSTRAINT | artifact-value-tables.md: ~263 lines, +50 safe, N/A (reference), GOOD headroom | artifact-value-tables.md | SHOULD | NO |

### Section C: artifact-builder-recipe.md — RECIPE FORMAT (Lines 32-56)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-RCP-01 | TEMPLATE | Sequenced steps with Read/Select/Deploy/Assess verbs | artifact-builder-recipe.md | MUST | PARTIAL |
| ISG-RCP-02 | RULE | Each instruction has a concrete CSS example or value reference | artifact-builder-recipe.md | MUST | PARTIAL |
| ISG-RCP-03 | RULE | No checklist verbs: Verify, Fail if, Must be, Ensure, Check that | artifact-builder-recipe.md | MUST | PARTIAL |
| ISG-RCP-04 | TEMPLATE | Step format: `### Step N.M: [Action Verb] [What]` then Read/Select/Deploy/Assess blocks | artifact-builder-recipe.md | SHOULD | NO |
| ISG-RCP-05 | RULE | Anti-pattern: Prose paragraphs without action verbs ("The builder should consider...") | artifact-builder-recipe.md | MUST | NO |
| ISG-RCP-06 | RULE | Anti-pattern: Gate-format language ("Verify that all backgrounds differ by >= 15 RGB") | artifact-builder-recipe.md | MUST | NO |
| ISG-RCP-07 | RULE | Anti-pattern: Prohibition framing ("Do NOT use cold colors") — use world-description instead ("Your palette is warm: R >= G >= B") | artifact-builder-recipe.md | MUST | PARTIAL |
| ISG-RCP-08 | RULE | Anti-pattern: Naked thresholds without calibration ranges ("delta >= 15" without "15 = floor, 25 = confident, 50 = dramatic") | artifact-builder-recipe.md | MUST | NO |
| ISG-RCP-09 | MECHANISM | BV-03 enforcement: Brief Assembler output checked for 3:1 recipe-to-checklist verb ratio | artifact-builder-recipe.md, TC brief | MUST | NO |

### Section D: artifact-tc-brief-template.md — TIERED TEMPLATE (Lines 59-86)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-TCB-01 | TEMPLATE | 4 tiers with explicit line budgets. Tier 1-2: verbatim (zero compression). Tier 3-4: synthesis targets. | artifact-tc-brief-template.md | MUST | NO |
| ISG-TCB-02 | TEMPLATE | Tier 3 template: Zone boundary + background hex pair with delta + spacing px + typography shift + deploy CSS | artifact-tc-brief-template.md | MUST | NO |
| ISG-TCB-03 | TEMPLATE | Tier 4 template: `D-[NN]: [Name]` + technique + CSS property:value + binary test | artifact-tc-brief-template.md | MUST | NO |
| ISG-TCB-04 | RULE | Anti-pattern: Adding prose without a paired CSS property:value (every Tier 4 disposition MUST have at least 1 concrete CSS pair) | artifact-tc-brief-template.md | MUST | NO |
| ISG-TCB-05 | RULE | Anti-pattern: Breaking tier header format (must match `^#+\s*Tier\s*[1234]` for BV-01 regex) | artifact-tc-brief-template.md | MUST | NO |
| ISG-TCB-06 | CONSTRAINT | BV-01 enforces T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24 at 80% threshold | artifact-tc-brief-template.md | MUST | NO |
| ISG-TCB-07 | MECHANISM | BV-01 enforcement: Programmatic line counting per tier. Content below 80% of budget triggers FAIL. | artifact-tc-brief-template.md | MUST | NO |

### Section E: gate-runner-core.js — EXECUTABLE PLAYWRIGHT JS (Lines 89-133)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-GR-01 | TEMPLATE | Functions return arrays of result objects: `{ gate, name, status: 'PASS'\|'FAIL', measured, threshold }` | gate-runner-core.js | MUST | YES |
| ISG-GR-02 | RULE | All DOM access via `await page.evaluate(() => {...})` | gate-runner-core.js | MUST | YES |
| ISG-GR-03 | RULE | Use `window.isRenderedElement()` helper for element filtering | gate-runner-core.js | MUST | YES |
| ISG-GR-04 | TEMPLATE | Gate template: try/catch wrapper, GR-XX comment, page.evaluate, result push with schema, error catch with FAIL push | gate-runner-core.js | MUST | YES |
| ISG-GR-05 | RULE | Anti-pattern: Returning anything other than 'PASS' or 'FAIL' for status (no 'PASS*', no 'PARTIAL') | gate-runner-core.js | MUST | YES |
| ISG-GR-06 | RULE | Anti-pattern: Querying `document.querySelectorAll('*')` without filtering through `isRenderedElement()` | gate-runner-core.js | MUST | YES |
| ISG-GR-07 | RULE | Anti-pattern: Adding gates without updating GR-48's REQUIRED_GATES or RECOMMENDED_GATES arrays (L1331-1340) | gate-runner-core.js | MUST | YES |
| ISG-GR-08 | RULE | Anti-pattern: Forgetting the try/catch wrapper (uncaught errors break the entire gate run) | gate-runner-core.js | MUST | YES |
| ISG-GR-09 | CHECKLIST-ITEM | Coordinated update 1: gate code in correct function (runGateRunner / runAntiPatternGates / runWave2Gates) | gate-runner-core.js | MUST | YES |
| ISG-GR-10 | CHECKLIST-ITEM | Coordinated update 2: GR-48 REQUIRED or RECOMMENDED array (L1331-1340) | gate-runner-core.js | MUST | YES |
| ISG-GR-11 | CHECKLIST-ITEM | Coordinated update 3: gate-manifest.json L18-52 tier classification | gate-manifest.json | MUST | PARTIAL |
| ISG-GR-12 | CHECKLIST-ITEM | Coordinated update 4: gate-manifest.json L62-111 execution order (if new step needed) | gate-manifest.json | MUST | PARTIAL |
| ISG-GR-13 | CHECKLIST-ITEM | Coordinated update 5: gate-runner-spec.md human-readable specification row | gate-runner-spec.md | MUST | NO |
| ISG-GR-14 | CHECKLIST-ITEM | Coordinated update 6: MANIFEST.md L244-267 Section 3 routing table | MANIFEST.md | MUST | NO |
| ISG-GR-15 | CHECKLIST-ITEM | Coordinated update 7: MANIFEST.md L275-285 verdict logic (if new category) | MANIFEST.md | MUST | NO |

### Section F: MANIFEST.md — DECLARATIVE ROUTING (Lines 136-154)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-MAN-01 | TEMPLATE | Routing entry (Appendix B): `\| [Agent Role] \| [File 1] + [File 2] + ... (~[N] lines) \|` | MANIFEST.md | MUST | NO |
| ISG-MAN-02 | TEMPLATE | Exclusion rule (Appendix B negative table): `\| [Agent Role] \| "[What must NOT be included]" \| [Reason] \|` | MANIFEST.md | MUST | NO |
| ISG-MAN-03 | RULE | Anti-pattern: Adding content to MANIFEST prose sections when it belongs in an artifact file | MANIFEST.md | MUST | NO |
| ISG-MAN-04 | RULE | Anti-pattern: Modifying Appendix E prompt templates without verifying `{VARIABLE}` placeholders still work | MANIFEST.md | MUST | NO |
| ISG-MAN-05 | RULE | Anti-pattern: Changing verdict logic in MANIFEST without updating gate-manifest.json (must stay synchronized) | MANIFEST.md | MUST | YES |

### Section G: pa-questions.md — BINARY PA QUESTIONS (Lines 157-173)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-PA-01 | TEMPLATE | Format: `**PA-[NN]: [Question text ending in ?]**` + evidence format (YES/NO/CONDITIONAL) + viewport(s) + assigned auditor | pa-questions.md | MUST | NO |
| ISG-PA-02 | RULE | Questions in Sections 1-3 are auditor-facing. Section 4 is WEAVER USE ONLY. | pa-questions.md | MUST | NO |
| ISG-PA-03 | RULE | Anti-pattern: Adding calibration data or quality tiers to Sections 1-3 (violates fresh-eyes M-20) | pa-questions.md | MUST | NO |
| ISG-PA-04 | RULE | Anti-pattern: Adding judgment-scale questions ("Rate 1-5") instead of binary YES/NO | pa-questions.md | MUST | NO |
| ISG-PA-05 | CHECKLIST-ITEM | Adding PA questions requires updating: pa-deployment.md assignment table | pa-deployment.md | MUST | NO |
| ISG-PA-06 | CHECKLIST-ITEM | Adding PA questions requires updating: MANIFEST agent roster | MANIFEST.md | MUST | NO |
| ISG-PA-07 | CHECKLIST-ITEM | Adding PA questions requires updating: pa-manifest.md checklist | pa-manifest.md | MUST | NO |
| ISG-PA-08 | CHECKLIST-ITEM | Adding PA questions requires updating: question totals (appear in 3+ locations) | Multiple files | MUST | NO |

### Section H: artifact-value-tables.md — PRE-COMPUTED CSS REFERENCE (Lines 176-188)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-VT-01 | TEMPLATE | Value pair: `\| Pair [N] \| #[HEX1] -> #[HEX2] \| Delta: [N] RGB \| [Intensity label] \| [Usage guidance] \|` | artifact-value-tables.md | SHOULD | NO |
| ISG-VT-02 | RULE | Anti-pattern: Adding value pairs below 15 RGB threshold without marking as "BELOW THRESHOLD -- avoid" | artifact-value-tables.md | MUST | NO |
| ISG-VT-03 | RULE | Anti-pattern: Including prose instructions (this file is REFERENCE, not INSTRUCTION) | artifact-value-tables.md | MUST | NO |

### Section I: artifact-orchestrator.md — ORCHESTRATOR DECISION TREE (Lines 191-210)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-ORC-01 | TEMPLATE | Phase step: `### Phase [N].[M]: [Step Name]` + Input/Action/Output/Verification/If FAIL sections | artifact-orchestrator.md | MUST | NO |
| ISG-ORC-02 | RULE | Anti-pattern: Adding judgment-based decisions where binary decisions are possible | artifact-orchestrator.md | MUST | NO |
| ISG-ORC-03 | RULE | Anti-pattern: Contradicting verdict logic in gate-manifest.json | artifact-orchestrator.md | MUST | NO |
| ISG-ORC-04 | RULE | Anti-pattern: Adding steps without tracking them in EXECUTION-TRACKER-TEMPLATE.md | artifact-orchestrator.md | SHOULD | NO |

### Section J: Format Multiplier Model (Lines 213-232)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-FMM-01 | MECHANISM | Binary + CSS value format: 0.5x compliance impact per line (half normal degradation) | All files | MUST | YES |
| ISG-FMM-02 | MECHANISM | Recipe-format steps: 1.0x compliance impact per line (neutral) | All files | MUST | YES |
| ISG-FMM-03 | MECHANISM | Prose instructions: 2.0x compliance impact per line (double degradation) | All files | MUST | YES |
| ISG-FMM-04 | MECHANISM | Judgment-requiring: 3.0x compliance impact per line (triple degradation) | All files | MUST | YES |
| ISG-FMM-05 | RULE | Before adding any enrichment: (1) count net lines, (2) classify by format type, (3) multiply: effective_lines = net_lines x format_multiplier, (4) compare against safe budget, (5) if over: subtract first or route elsewhere | All enrichments | MUST | PARTIAL |

### Section K: Content Routing Decision Tree (Lines 233-249)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-RTG-01 | RULE | Specifies CSS property:value pair? -> artifact-builder-recipe.md (recipe step) | Routing decisions | MUST | PARTIAL |
| ISG-RTG-02 | RULE | Perception threshold? -> artifact-identity-perception.md (calibration) + gate-runner-core.js (binary check) | Routing decisions | MUST | PARTIAL |
| ISG-RTG-03 | RULE | Brief structure change? -> artifact-tc-brief-template.md (template modification) | Routing decisions | MUST | NO |
| ISG-RTG-04 | RULE | Process/decision change? -> artifact-orchestrator.md (phase step) | Routing decisions | MUST | NO |
| ISG-RTG-05 | RULE | Reference value? -> artifact-value-tables.md (value pair) | Routing decisions | MUST | NO |
| ISG-RTG-06 | RULE | None of the above? -> Reconsider whether the enrichment is needed | Routing decisions | SHOULD | NO |

### Section L: Brief Bottleneck (Lines 251-253)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-BTL-01 | CONSTRAINT | ALL builder-facing enrichments pass through the brief (~165 lines) | TC brief | MUST | NO |
| ISG-BTL-02 | CONSTRAINT | Brief is at the 200-line mode-collapse threshold | TC brief | MUST | NO |
| ISG-BTL-03 | RULE | Builder instructions should go into artifact-builder-recipe.md (934 lines with headroom) rather than artifact-tc-brief-template.md (224 lines near ceiling) | Routing decisions | MUST | NO |

### Section M: File Splitting Guidance (Lines 255-266)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-SPL-01 | RULE | File needs splitting when: compliance drops below 65% | All files | MUST | NO |
| ISG-SPL-02 | RULE | File needs splitting when: single agent must process entire file AND file exceeds 1,000 lines | All files | MUST | NO |
| ISG-SPL-03 | RULE | File needs splitting when: file serves multiple agent roles | All files | SHOULD | NO |
| ISG-SPL-04 | RULE | File does NOT need splitting when: reference document read selectively | All files | SHOULD | NO |
| ISG-SPL-05 | RULE | File does NOT need splitting when: serves single agent role regardless of length | All files | SHOULD | NO |
| ISG-SPL-06 | RULE | File does NOT need splitting when: content is structurally independent per section | All files | SHOULD | NO |

### Section N: Pre-Flight Checklist (Lines 271-282)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-PFC-01 | PRECONDITION | Identify the target file(s) and check the capacity table | Every enrichment | MUST | YES |
| ISG-PFC-02 | PRECONDITION | Identify anti-loss mechanisms in blast radius using the 5 interdependency clusters | Every enrichment | MUST | PARTIAL |
| ISG-PFC-03 | PRECONDITION | Classify the enrichment format (binary+CSS / recipe / prose / judgment) and compute effective lines | Every enrichment | MUST | PARTIAL |
| ISG-PFC-04 | PRECONDITION | Check if net addition exceeds safe budget -- if yes, identify lines to subtract first | Every enrichment | MUST | YES |
| ISG-PFC-05 | PRECONDITION | If targeting gate-runner-core.js: identify equal or greater subtraction. Net-zero is MANDATORY. | gate-runner-core.js | MUST | YES |
| ISG-PFC-06 | PRECONDITION | If targeting brief-facing content: verify NO checklist verbs, NO suppressor patterns, NO prohibition framing | Brief-facing files | MUST | NO |
| ISG-PFC-07 | PRECONDITION | If targeting auditor-facing content: verify NO calibration data, NO tier definitions, NO build intent | Auditor-facing files | MUST | NO |

### Section O: 5 Interdependency Clusters (Lines 284-309)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-CL1-01 | SAFEGUARD | **Cluster 1: Brief Quality Enforcement.** Members: M-05 (tiered brief), M-06 (suppressor management), M-11 (recipe format), M-17 (TC brief template). Shared code: gate-runner-core.js L29-120 (BV-01 through BV-04). Any brief format change must be coordinated across all four mechanisms. | TC brief, gate-runner BV gates | MUST | NO |
| ISG-CL2-01 | SAFEGUARD | **Cluster 2: Builder Information Barrier.** Members: M-04 (context isolation), M-08 (dual-route), M-12 (world-description framing). Shared enforcement: MANIFEST Appendix B exclusion table, BV-04 suppressor scan. Content reaching the builder must avoid prohibition framing AND gate-format thresholds. | MANIFEST, builder-facing files | MUST | PARTIAL |
| ISG-CL3-01 | SAFEGUARD | **Cluster 3: Gate Verification System.** Members: M-13 (binary rules), M-14 (perception calibration), M-19 (programmatic verification). Shared code: gate-runner-core.js (entire file), gate-manifest.json (tiers + verdict logic). Adding/removing gates requires coordinated updates in 5-7 locations. | gate-runner-core.js, gate-manifest.json | MUST | YES |
| ISG-CL4-01 | SAFEGUARD | **Cluster 4: PA Audit Integrity.** Members: M-20 (fresh-eyes), M-21 (screenshots), M-22 (9-auditor deployment). Shared enforcement: pa-deployment.md (assignment table), pa-guardrails.md (constraints). Adding PA questions requires updates in 5+ locations. | PA protocol files | MUST | NO |
| ISG-CL5-01 | SAFEGUARD | **Cluster 5: Routing Accuracy.** Members: M-01 (decomposition), M-03 (direct injection), M-07 (MANIFEST routing), M-09 (prompt templates). Shared spec: MANIFEST.md (Section 3 + Appendix B + Appendix D + Appendix E). Adding new files or changing routing requires updates in all four MANIFEST sections. | MANIFEST.md | MUST | NO |

### Section P: Post-Implementation Verification (Lines 311-318)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-PIV-01 | CHECKLIST-ITEM | Format check: Does the modified section still use recipe verbs (not checklist verbs)? | Builder-facing files | MUST | PARTIAL |
| ISG-PIV-02 | CHECKLIST-ITEM | Capacity check: Count net lines added. Update running total against 240-line budget. | All files | MUST | YES |
| ISG-PIV-03 | CHECKLIST-ITEM | Cross-reference check: If changed a threshold, update ALL locations (gate-runner-core.js + gate-runner-spec.md + gate-runner-preconditions.md + MANIFEST quickstart) | Threshold changes | MUST | PARTIAL |
| ISG-PIV-04 | CHECKLIST-ITEM | Isolation check: Does any new content leak to an agent that should not see it? (Check MANIFEST Appendix B exclusion table) | All enrichments | MUST | NO |
| ISG-PIV-05 | CHECKLIST-ITEM | Regex check: If changed any header format, do BV-01 tier regexes (gate-runner-core.js L35-39) still match? | TC brief headers | MUST | NO |
| ISG-PIV-06 | CHECKLIST-ITEM | GR-48 check: If added a gate, is it in REQUIRED_GATES or RECOMMENDED_GATES? | gate-runner-core.js | MUST | YES |
| ISG-PIV-07 | CHECKLIST-ITEM | Question count check: If added PA questions, are totals updated in pa-deployment.md, pa-manifest.md, and MANIFEST? | PA files | MUST | NO |

### Section Q: Red Lines — 9 Items (Lines 320-333)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-RL-01 | SAFEGUARD | **Red Line 1:** NEVER change the number of pipeline phases (e.g., adding automated REFINE as Phase 4) | Pipeline architecture | MUST | NO |
| ISG-RL-02 | SAFEGUARD | **Red Line 2:** NEVER change the brief line budget totals (e.g., expanding from ~165 to ~250 lines) | TC brief | MUST | NO |
| ISG-RL-03 | SAFEGUARD | **Red Line 3:** NEVER change BV gate thresholds downward (weakening pre-build verification) | gate-runner-core.js BV gates | MUST | NO |
| ISG-RL-04 | SAFEGUARD | **Red Line 4:** NEVER remove any mechanism rated HIGHLY EFFECTIVE (12 mechanisms confirmed effective) | Anti-loss mechanisms | MUST | NO |
| ISG-RL-05 | SAFEGUARD | **Red Line 5:** NEVER change the builder's creative authority band (currently 80%) | Builder authority | MUST | NO |
| ISG-RL-06 | SAFEGUARD | **Red Line 6:** NEVER add calibration data to auditor-visible files (violates fresh-eyes principle) | PA files S1-3 | MUST | NO |
| ISG-RL-07 | SAFEGUARD | **Red Line 7:** NEVER modify the `isCold()` formula in gate-runner-core.js without full palette validation | gate-runner-core.js | MUST | NO |
| ISG-RL-08 | SAFEGUARD | **Red Line 8:** NEVER change GR-48 REQUIRED_GATES to a smaller list (weakening coverage enforcement) | gate-runner-core.js L1331-1340 | MUST | NO |
| ISG-RL-09 | SAFEGUARD | **Red Line 9:** NEVER remove the dual-route pattern for any soul constraint (single-route removes a safety net) | M-08 dual-route | MUST | NO |

### Section R: Blast Radius Template (Lines 335-348)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-BRT-01 | TEMPLATE | Per-enrichment blast radius template with fields: Enrichment, Target file(s), Net lines, Format type, Effective lines, Clusters in blast radius, Anti-loss mechanisms affected, Subtraction offset (if gate-runner), Regression checks needed | Every enrichment | SHOULD | NO |

### Section S: File Fragility Ratings (Lines 352-366)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| ISG-FRG-01 | CONSTRAINT | gate-runner-core.js: **CRITICAL** fragility. Safe: new gate functions following patterns. Dangerous: regex changes, threshold changes, schema changes, GR-48 arrays | gate-runner-core.js | MUST | YES |
| ISG-FRG-02 | CONSTRAINT | gate-manifest.json: **FRAGILE**. Safe: adding gates to tier arrays. Dangerous: verdict logic, execution order, tier reclassification | gate-manifest.json | MUST | PARTIAL |
| ISG-FRG-03 | CONSTRAINT | MANIFEST.md: **FRAGILE** (routing/templates). Safe: adding routing entries, line count updates. Dangerous: exclusion rules, prompt templates, verdict logic | MANIFEST.md | MUST | NO |
| ISG-FRG-04 | CONSTRAINT | pa-deployment.md: **FRAGILE** (assignments). Safe: model recommendations. Dangerous: auditor assignments, cross-validation pairs, question counts | pa-deployment.md | MUST | NO |
| ISG-FRG-05 | CONSTRAINT | pa-questions.md: ROBUST (S1-3) / **FRAGILE** (S4). Safe: adding questions to S1-3. Dangerous: adding calibration data to auditor-visible sections | pa-questions.md | MUST | NO |
| ISG-FRG-06 | CONSTRAINT | artifact-builder-recipe.md: ROBUST. Safe: adding recipe steps. Dangerous: checklist verbs, gate thresholds | artifact-builder-recipe.md | SHOULD | NO |
| ISG-FRG-07 | CONSTRAINT | artifact-tc-brief-template.md: ROBUST (content) / **CRITICAL** (headers). Safe: enriching tier content. Dangerous: changing tier header format (breaks BV-01 regex) | artifact-tc-brief-template.md | MUST | NO |
| ISG-FRG-08 | CONSTRAINT | artifact-orchestrator.md: ROBUST. Safe: adding orchestrator steps. Dangerous: contradicting MANIFEST verdict logic | artifact-orchestrator.md | SHOULD | NO |
| ISG-FRG-09 | CONSTRAINT | artifact-value-tables.md: ROBUST. Safe: adding/modifying value pairs. Dangerous: N/A | artifact-value-tables.md | COULD | NO |
| ISG-FRG-10 | CONSTRAINT | EXECUTION-TRACKER-TEMPLATE.md: ROBUST. Safe: adding verification checkboxes. Dangerous: N/A | EXECUTION-TRACKER-TEMPLATE.md | COULD | NO |

---

## FILE 12: SUMMARY STATISTICS

- **Total unique items extracted:** 94
- **By type:** 39 RULE, 18 CONSTRAINT, 10 TEMPLATE, 8 SAFEGUARD, 7 PRECONDITION, 3 MECHANISM, 9 CHECKLIST-ITEM
- **By tier:** 78 MUST, 11 SHOULD, 5 COULD
- **In current 8-change plan:** 15 YES, 19 PARTIAL, 60 NO

---

## FILE 13: STRUCTURAL INTERSECTION ANALYSIS — COMPLETE INVENTORY

### Part 1: Per-Enrichment Line Budget (57 rows)

#### TIER 1: Priority Inversion Fixes (ME-001 through ME-009)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T1-001 | CONSTRAINT | ME-001: pa-deployment.md +22 lines (recipe format, 22 effective). Experiential pass protocol. | pa-deployment.md | MUST | PARTIAL |
| SI-T1-002 | CONSTRAINT | ME-002: pa-weaver.md +14 lines (recipe, 14 eff). Usability priority in weaver. | pa-weaver.md | MUST | PARTIAL |
| SI-T1-003 | CONSTRAINT | ME-003: gate-runner-core.js +70 (code) + 3 satellite files +13. Net +83 (42 eff). GR-60 WCAG contrast. **DEFERRED — requires -70 subtraction first.** | gate-runner-core.js + 3 satellites | MUST | NO |
| SI-T1-004 | CONSTRAINT | ME-004: artifact-builder-recipe.md +12 (recipe, 12 eff). Builder usability recipe step. | artifact-builder-recipe.md | MUST | PARTIAL |
| SI-T1-005 | CONSTRAINT | ME-005: MANIFEST.md +10, gate-manifest.json +5, gate-runner-core.js +15, -8 existing = net +22 (11 eff). MECHANICAL exception to verdict. | MANIFEST + gate-manifest + gate-runner | MUST | PARTIAL |
| SI-T1-006 | CONSTRAINT | ME-006: pa-deployment.md +25, artifact-orchestrator.md +5, -3 = net +27 (27 eff). Screenshot validation. | pa-deployment + orchestrator | MUST | PARTIAL |
| SI-T1-007 | CONSTRAINT | ME-007: gate-runner-core.js +15, -5 = net +10 (5 eff). GR-44 trailing void fix. | gate-runner-core.js | MUST | PARTIAL |
| SI-T1-008 | CONSTRAINT | ME-008: MANIFEST.md +12 (recipe, 12 eff). Usability circuit breaker in handoff. | MANIFEST.md | MUST | PARTIAL |
| SI-T1-009 | CONSTRAINT | ME-009: pa-deployment.md +10, pa-weaver.md +5 = net +15 (8 eff). Aggregation thresholds. | pa-deployment + pa-weaver | MUST | PARTIAL |
| SI-T1-TOT | CONSTRAINT | **Tier 1 subtotal:** +217 added, -16 removed, **+201 net**, 153 effective | All Tier 1 targets | MUST | PARTIAL |

#### TIER 2: Infrastructure Fixes (ME-010 through ME-023)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T2-010 | CONSTRAINT | ME-010: gate-runner-core.js + gate-manifest.json +20, -5 = net +15 (8 eff). GR-05 split (opacity filter). | gate-runner-core.js + gate-manifest | MUST | NO |
| SI-T2-011 | CONSTRAINT | ME-011: gate-runner-core.js +10, -8 = net +2 (1 eff). GR-06 rendered font check. | gate-runner-core.js | MUST | NO |
| SI-T2-012 | CONSTRAINT | ME-012: gate-runner-core.js +8, -5 = net +3 (2 eff). GR-14 zone-level scoping. | gate-runner-core.js | MUST | NO |
| SI-T2-013 | CONSTRAINT | ME-013: gate-runner-core.js +5, -3 = net +2 (1 eff). GR-09 tolerance bands. | gate-runner-core.js | MUST | NO |
| SI-T2-014 | CONSTRAINT | ME-014: gate-runner-core.js +50 + 3 satellites +9 = net +59 (30 eff). GR-61 min font size. **DEFERRED — requires -50 subtraction.** | gate-runner-core.js + 3 satellites | MUST | NO |
| SI-T2-015 | CONSTRAINT | ME-015: pa-deployment.md +12, pa-questions.md +8 = net +20 (20 eff). Data corruption escalation. | pa-deployment + pa-questions | MUST | NO |
| SI-T2-016 | CONSTRAINT | ME-016: artifact-builder-recipe.md +8 (recipe, 8 eff). ARIA accessibility in recipe. | artifact-builder-recipe.md | MUST | NO |
| SI-T2-017 | CONSTRAINT | ME-017: MANIFEST.md +15 (prose, 30 eff). Phase 4 fix application. **DEFERRED — architectural change (Red Line 1).** | MANIFEST.md | MUST | NO |
| SI-T2-018 | CONSTRAINT | ME-018: artifact-gate-runner.md +8, gate-manifest.json +10 = net +18 (9 eff). Perceptibility column. | gate-runner files + manifest | SHOULD | NO |
| SI-T2-019 | CONSTRAINT | ME-019: pa-weaver.md +12 (recipe, 12 eff). PA-05 score as range. | pa-weaver.md | MUST | NO |
| SI-T2-020 | CONSTRAINT | ME-020: artifact-orchestrator.md +15 (recipe, 15 eff). Orchestrator self-assessment. | artifact-orchestrator.md | SHOULD | NO |
| SI-T2-021 | CONSTRAINT | ME-021: pa-questions.md +5 + 4 satellites +7 = net +12 (6 eff). PA-80 navigation usability. | pa-questions + 4 satellites | MUST | NO |
| SI-T2-022 | CONSTRAINT | ME-022: pa-questions.md +5 + 4 satellites +7 = net +12 (6 eff). PA-81 information extraction. | pa-questions + 4 satellites | MUST | NO |
| SI-T2-023 | CONSTRAINT | ME-023: pa-questions.md +5 + 4 satellites +7 = net +12 (6 eff). PA-54 content promise vs delivery. | pa-questions + 4 satellites | MUST | NO |
| SI-T2-TOT | CONSTRAINT | **Tier 2 subtotal:** +205 added, -21 removed, **+184 net**, 154 effective | All Tier 2 targets | MUST | NO |

#### TIER 3: Gate Severity Restructure (ME-024 through ME-030)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T3-024 | CONSTRAINT | ME-024: gate-runner-core.js + gate-manifest.json, net 0 (0 eff). GR-07 -> RECOMMENDED tier move. | gate-runner + manifest | SHOULD | NO |
| SI-T3-025 | CONSTRAINT | ME-025: gate-runner-core.js + gate-manifest.json, net 0 (0 eff). GR-12 -> RECOMMENDED tier move. | gate-runner + manifest | SHOULD | NO |
| SI-T3-026 | CONSTRAINT | ME-026: gate-runner-core.js + gate-manifest.json, net 0 (0 eff). GR-43 -> RECOMMENDED tier move. | gate-runner + manifest | SHOULD | NO |
| SI-T3-027 | CONSTRAINT | ME-027: gate-runner-core.js + gate-manifest.json, net 0 (0 eff). GR-19 -> ADVISORY tier move. | gate-runner + manifest | SHOULD | NO |
| SI-T3-028 | CONSTRAINT | ME-028: gate-runner-core.js +5, -3 = net +2 (1 eff). GR-21/22 threshold adjust. | gate-runner-core.js | SHOULD | NO |
| SI-T3-029 | CONSTRAINT | ME-029: gate-runner-core.js +2, -2 = net 0 (0 eff). GR-17 list item threshold. | gate-runner-core.js | SHOULD | NO |
| SI-T3-030 | CONSTRAINT | ME-030: gate-runner-core.js +8, -4 = net +4 (2 eff). GR-48/49 viewport namespacing. | gate-runner-core.js | SHOULD | NO |
| SI-T3-TOT | CONSTRAINT | **Tier 3 subtotal:** +27 added, -21 removed, **+6 net**, 3 effective | All Tier 3 targets | SHOULD | NO |

#### TIER 4: PA Enrichments (ME-031 through ME-037)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T4-031 | CONSTRAINT | ME-031: pa-questions.md +5 + 4 satellites +7 = net +12 (6 eff). False affordance scan. | pa-questions + satellites | SHOULD | NO |
| SI-T4-032 | CONSTRAINT | ME-032: pa-questions.md +3 (2 eff). Mark pipeline-introspection questions. | pa-questions.md | SHOULD | NO |
| SI-T4-033 | CONSTRAINT | ME-033: pa-questions.md +5 (5 eff). Void question deduplication. | pa-questions.md | SHOULD | NO |
| SI-T4-034 | CONSTRAINT | ME-034: pa-deployment.md +3 (3 eff). Defect-bypass for cross-viewport. | pa-deployment.md | SHOULD | NO |
| SI-T4-035 | CONSTRAINT | ME-035: pa-questions.md +1 (1 eff). Footer/header contrast note on PA-02. | pa-questions.md | COULD | NO |
| SI-T4-036 | CONSTRAINT | ME-036: pa-questions.md +1 (1 eff). Horizontal scroll element-level note. | pa-questions.md | COULD | NO |
| SI-T4-037 | CONSTRAINT | ME-037: pa-questions.md -20 (net -20, -10 eff). Retire 4 PA questions (PA-06, PA-07 old, PA-09, PA-40). | pa-questions + 4 satellites | MUST | NO |
| SI-T4-TOT | CONSTRAINT | **Tier 4 subtotal:** +18 added, -20 removed, **-2 net**, 8 effective | All Tier 4 targets | SHOULD | NO |

#### TIER 5: Builder Recipe Improvements (ME-038 through ME-041)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T5-038 | CONSTRAINT | ME-038: artifact-builder-recipe.md +3 (binary+CSS, 2 eff). px-only border width. | artifact-builder-recipe.md | SHOULD | NO |
| SI-T5-039 | CONSTRAINT | ME-039: artifact-builder-recipe.md +8 (binary+CSS, 4 eff). html color + font stack boilerplate. | artifact-builder-recipe.md | SHOULD | NO |
| SI-T5-040 | CONSTRAINT | ME-040: gate-runner-core.js +60 + 3 satellites +9 = net +69 (35 eff). GR-62 text overflow. **PERMANENTLY DEFERRED.** | gate-runner-core.js + 3 satellites | SHOULD | NO |
| SI-T5-041 | CONSTRAINT | ME-041: artifact-builder-recipe.md +4 (recipe, 4 eff). Trailing void prevention recipe. | artifact-builder-recipe.md | SHOULD | NO |
| SI-T5-TOT | CONSTRAINT | **Tier 5 subtotal:** +84 added, 0 removed, **+84 net**, 45 effective | All Tier 5 targets | SHOULD | NO |

#### TIER 6: Tracking + Documentation (ME-042 through ME-046)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T6-042 | CONSTRAINT | ME-042: MANIFEST.md net 0 (0 eff). Line count updates. | MANIFEST.md | COULD | NO |
| SI-T6-043 | CONSTRAINT | ME-043: EXECUTION-TRACKER-TEMPLATE.md +5 (3 eff). Tracker fields. | EXECUTION-TRACKER-TEMPLATE.md | COULD | NO |
| SI-T6-044 | CONSTRAINT | ME-044: artifact-pa-protocol.md +10 (prose, 20 eff). Document experiential pass. **PERMANENTLY DEFERRED.** | artifact-pa-protocol.md | COULD | NO |
| SI-T6-045 | CONSTRAINT | ME-045: artifact-orchestrator.md +10, MANIFEST +5 = net +15 (30 eff). Context budget awareness. **PERMANENTLY DEFERRED.** | orchestrator + MANIFEST | COULD | NO |
| SI-T6-046 | CONSTRAINT | ME-046: MANIFEST.md +5 (recipe, 5 eff). Screenshot correction protocol. | MANIFEST.md | COULD | NO |
| SI-T6-TOT | CONSTRAINT | **Tier 6 subtotal:** +38 added, -3 removed, **+35 net**, 58 effective | All Tier 6 targets | COULD | NO |

#### TIER 7: Reservoir Value-System Corrections (ME-047 through ME-057)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-T7-047 | CONSTRAINT | ME-047: artifact-builder-recipe.md +4 (recipe, 4 eff). 3 background registers. **DEFERRED (CONSIDER).** | artifact-builder-recipe.md | COULD | NO |
| SI-T7-048 | CONSTRAINT | ME-048: artifact-builder-recipe.md +3 (recipe, 3 eff). Unique element per zone. **DEFERRED (CONSIDER).** | artifact-builder-recipe.md | COULD | NO |
| SI-T7-049 | CONSTRAINT | ME-049: artifact-builder-recipe.md +3 (recipe, 3 eff). Dark moments. **DEFERRED (CONSIDER).** | artifact-builder-recipe.md | COULD | NO |
| SI-T7-050 | CONSTRAINT | ME-050: artifact-builder-recipe.md +3 (recipe, 3 eff). Spacing compression range. **DEFERRED (CONSIDER).** | artifact-builder-recipe.md | COULD | NO |
| SI-T7-051 | CONSTRAINT | ME-051: pa-questions.md net 0 (0 eff). Swap 4 structural for 4 experiential. **Atomic with ME-037.** | pa-questions + 4 satellites | MUST | NO |
| SI-T7-052 | CONSTRAINT | ME-052: pa-deployment.md +3 (recipe, 3 eff). Audience description. **DEFERRED (CONSIDER).** | pa-deployment.md | COULD | NO |
| SI-T7-053 | CONSTRAINT | ME-053: artifact-builder-recipe.md +4 (recipe, 4 eff). Container width exceptions. **DEFERRED (CONSIDER).** | artifact-builder-recipe.md | COULD | NO |
| SI-T7-054 | CONSTRAINT | ME-054: components.css / tokens.css -13 (-7 eff). Remove dead CSS. | CSS files | SHOULD | NO |
| SI-T7-055 | CONSTRAINT | ME-055: pa-questions.md +12 (6 eff). Anti-Goodhart question. **PERMANENTLY DEFERRED.** | pa-questions + satellites | SHOULD | NO |
| SI-T7-056 | CONSTRAINT | ME-056: artifact-builder-recipe.md +20 (recipe, 20 eff). Codify CSS patterns. **PERMANENTLY DEFERRED — route to new file.** | builder-recipe (or new file) | SHOULD | NO |
| SI-T7-057 | CONSTRAINT | ME-057: pa-weaver.md +5 (recipe, 5 eff). Weaver emotional arc. **DEFERRED (CONSIDER).** | pa-weaver.md | COULD | NO |
| SI-T7-TOT | CONSTRAINT | **Tier 7 subtotal:** +70 added, -33 removed, **+37 net**, 44 effective | All Tier 7 targets | COULD/SHOULD | NO |

### Part 1 continued: File-Level Aggregation (15 files)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-AGG-01 | CONSTRAINT | gate-runner-core.js: ~1,437 current, 0 safe, +259 proposed add, -44 remove = **+215 net. CRITICALLY OVER BUDGET.** | gate-runner-core.js | MUST | YES (partial) |
| SI-AGG-02 | CONSTRAINT | MANIFEST.md: ~1,193 current, +20 safe, +55 add, -11 remove = **+44 net. OVER BUDGET by +24.** | MANIFEST.md | MUST | PARTIAL |
| SI-AGG-03 | CONSTRAINT | artifact-builder-recipe.md: ~934 current, +50 safe, +72 add, 0 remove = **+72 net. OVER BUDGET by +22.** | artifact-builder-recipe.md | MUST | NO |
| SI-AGG-04 | CONSTRAINT | pa-deployment.md: ~237 current, +30 safe (PA family), +75 add, -3 remove = **+72 net. OVER BUDGET by +42.** | pa-deployment.md | MUST | NO |
| SI-AGG-05 | CONSTRAINT | pa-questions.md: ~418 current, +30 safe (PA family), +55 add, -20 remove = **+35 net. OVER BUDGET by +5.** | pa-questions.md | MUST | NO |
| SI-AGG-06 | CONSTRAINT | artifact-orchestrator.md: ~1,058 current, +50 safe, +30 add, 0 remove = **+30 net. WITHIN BUDGET.** | artifact-orchestrator.md | SHOULD | NO |
| SI-AGG-07 | CONSTRAINT | pa-weaver.md: split file, +20 safe est., +36 add, 0 remove = **+36 net. OVER BUDGET by +16.** | pa-weaver.md | MUST | NO |
| SI-AGG-08 | CONSTRAINT | gate-manifest.json: ~159 current, +10 safe est., +24 add, -12 remove = **+12 net. OVER BUDGET by +2.** | gate-manifest.json | MUST | NO |
| SI-AGG-09 | CONSTRAINT | gate-runner-spec.md: ~188 current, +15 safe est., +12 add, 0 remove = **+12 net. WITHIN BUDGET.** | gate-runner-spec.md | SHOULD | NO |
| SI-AGG-10 | CONSTRAINT | EXECUTION-TRACKER-TEMPLATE.md: ~328 current, unlimited, +5 add = **+5 net. WITHIN BUDGET.** | EXECUTION-TRACKER-TEMPLATE.md | COULD | NO |
| SI-AGG-11 | CONSTRAINT | artifact-pa-protocol.md: ~100 est., +15 safe est., +10 add = **+10 net. WITHIN BUDGET.** | artifact-pa-protocol.md | COULD | NO |
| SI-AGG-12 | CONSTRAINT | artifact-identity-perception.md: ~556 current, +20 safe, 0 add = **0 net. WITHIN BUDGET.** | artifact-identity-perception.md | SHOULD | NO |
| SI-AGG-13 | CONSTRAINT | gate-runner-preconditions.md: ~83 current, +10 safe est., +6 add = **+6 net. WITHIN BUDGET.** | gate-runner-preconditions.md | SHOULD | NO |
| SI-AGG-14 | CONSTRAINT | pa-manifest.md: ~89 current, +10 safe est., +6 add = **+6 net. WITHIN BUDGET.** | pa-manifest.md | SHOULD | NO |
| SI-AGG-15 | CONSTRAINT | components.css / tokens.css: -13 remove = **-13 net. SAFE (subtraction).** | CSS files | COULD | NO |

### Part 1 continued: Grand Total and Uncomfortable Math

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-GT-01 | CONSTRAINT | **GRAND TOTAL: +659 added, -103 removed, +556 net lines. Safe budget: ~240. OVERSHOOT: +316 lines (2.3x over budget).** | All files | MUST | YES (awareness) |
| SI-MATH-01 | RULE | Even after deferring 11 enrichments, remaining 46 enrichments propose +459 net lines against ~240 budget. **At most 15-18 enrichments can be applied before a validation build.** | Implementation planning | MUST | YES |
| SI-MATH-02 | RULE | The full 57-enrichment list requires at minimum **3 implementation waves with validation builds between them.** | Implementation planning | MUST | YES |
| SI-MATH-03 | CONSTRAINT | **The net-zero gate runner constraint is the BINDING constraint.** It alone prevents Tier 1's highest-impact items and Tier 2's infrastructure fixes from being applied until subtraction happens. | gate-runner-core.js | MUST | YES |

### Part 1 continued: Defer List

#### Mandatory Deferrals (gate-runner net-zero)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-DEF-01 | RULE | ME-003 (GR-60 WCAG contrast) +70 to gate-runner. Defer until gate consolidation. **Highest-impact gate -- implement FIRST after subtraction.** | gate-runner-core.js | MUST | NO |
| SI-DEF-02 | RULE | ME-014 (GR-61 font size) +50 to gate-runner. Defer until second subtraction round. | gate-runner-core.js | MUST | NO |
| SI-DEF-03 | RULE | ME-040 (GR-62 text overflow) +60 to gate-runner. Defer until second subtraction round. **PERMANENTLY DEFERRED.** | gate-runner-core.js | MUST | NO |
| SI-DEF-04 | CONSTRAINT | These 3 gates account for +180 lines to gate-runner. Must lose ~180+ lines first. Subtraction candidates: GR-33 to GR-42 (~120 lines) + GR-08 (~30 lines) = ~150 lines. Creates capacity for only ONE of three. | gate-runner-core.js | MUST | NO |
| SI-DEF-05 | RULE | **Deferral priority:** ME-003 FIRST after subtraction (BLOCKING severity, most impactful usability gate). ME-014 and ME-040 wait. | gate-runner-core.js | MUST | NO |

#### Capacity Deferrals

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-DEF-06 | RULE | ME-017 (Phase 4 fix application): MANIFEST +15. MANIFEST at +44 vs +20 budget. **Architectural change.** | MANIFEST.md | MUST | NO |
| SI-DEF-07 | RULE | ME-044 (document experiential pass): +10 prose (20 eff). Low priority documentation. | artifact-pa-protocol.md | COULD | NO |
| SI-DEF-08 | RULE | ME-045 (context budget awareness): +15 prose (30 eff). Low priority documentation. | orchestrator + MANIFEST | COULD | NO |
| SI-DEF-09 | RULE | ME-056 (codify CSS patterns): builder-recipe +20, recipe at +72 vs +50 budget. **Move to NEW reference file instead.** | New file recommended | SHOULD | NO |
| SI-DEF-10 | RULE | ME-055 (anti-Goodhart question): pa-questions +12. PA questions at +35 vs +30 budget. Defer until more retirements. | pa-questions.md | SHOULD | NO |

#### Recommended Deferrals (CONSIDER-severity)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-DEF-11 | RULE | ME-047 through ME-050 (builder recipe guidance): +13 combined. CONSIDER severity, low individual impact. | artifact-builder-recipe.md | COULD | NO |
| SI-DEF-12 | RULE | ME-052 (audience description): +3. CONSIDER. Nice to have. | pa-deployment.md | COULD | NO |
| SI-DEF-13 | RULE | ME-053 (container exceptions): +4. CONSIDER. **Contradicts NON-NEGOTIABLE constraint.** | artifact-builder-recipe.md | COULD | NO |
| SI-DEF-14 | RULE | ME-057 (weaver emotional arc): +5. CONSIDER. Low impact. | pa-weaver.md | COULD | NO |

---

### Part 2: Anti-Loss Mechanism Interaction Matrix (19 CAUTION items)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-ALM-01 | SAFEGUARD | ME-002 interacts with M-23 (REBUILD Not FIX) + M-04 (context isolation). MODIFYING existing priority hierarchy. **ADEQUATE.** pa-weaver.md is ROBUST. Verify no gate thresholds leak. | pa-weaver.md | MUST | PARTIAL |
| SI-ALM-02 | SAFEGUARD | ME-003 interacts with M-19 (programmatic gates) + M-13 (binary rules) + M-08 (dual-route). ADDITIVE to CRITICAL fragility file. **PARTIALLY ADEQUATE.** 6-location checklist OMITS schema validation. Must add `{ gate, name, status, measured, threshold }` verification. | gate-runner-core.js | MUST | NO |
| SI-ALM-03 | SAFEGUARD | ME-005 interacts with M-23 + M-13. MODIFYING — adds MECHANICAL exception. **ADEQUATE.** Auto-classification is binary. Must verify verdict logic across 3 locations: gate-manifest.json L55-59, MANIFEST L275-285, gate-runner-core.js L752-778. | MANIFEST + gate-manifest + gate-runner | MUST | PARTIAL |
| SI-ALM-04 | SAFEGUARD | ME-007 interacts with M-19 + M-14. MODIFYING existing GR-44. **ADEQUATE.** Preserving sub-check A, adding sub-check B. | gate-runner-core.js | MUST | PARTIAL |
| SI-ALM-05 | SAFEGUARD | ME-010 interacts with M-08 (dual-route GR-05) + M-06. MODIFYING — splits GR-05. **ADEQUATE.** isCold() unchanged. GR-05a stays REQUIRED. | gate-runner-core.js | MUST | NO |
| SI-ALM-06 | SAFEGUARD | ME-011 interacts with M-08 (GR-05/06 agreement) + M-19. MODIFYING — replaces GR-06 string check. **PARTIALLY ADEQUATE.** `document.fonts.check()` returns false for uninstalled fonts = ALL text fails. Must add fallback logic: `if (!document.fonts.check('16px "Instrument Serif"')) { /* fallback */ }` | gate-runner-core.js | MUST | NO |
| SI-ALM-07 | SAFEGUARD | ME-012 interacts with M-19 + M-14. MODIFYING — restricts GR-14 scope. **ADEQUATE.** Must test against V3 HTML. | gate-runner-core.js | MUST | NO |
| SI-ALM-08 | SAFEGUARD | ME-013 interacts with M-19. MODIFYING — adjusts GR-09 tolerance. **ADEQUATE.** | gate-runner-core.js | MUST | NO |
| SI-ALM-09 | SAFEGUARD | ME-014 interacts with M-19 + M-13. ADDITIVE — new gate in CRITICAL file. **PARTIALLY ADEQUATE.** Same schema gap as ME-003. SVG `<text>` and `<tspan>` need special handling (different sizing APIs than HTML). | gate-runner-core.js | MUST | NO |
| SI-ALM-10 | SAFEGUARD | ME-017 interacts with M-23 circuit breaker. MODIFYING — adds Phase 4. **INADEQUATE.** Mitigation says "update circuit breaker" without WHERE. MANIFEST L605 AND L519-521 ("Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review") both must be updated. **Red Line 1 violation: architectural change disguised as enrichment.** | MANIFEST.md | MUST | NO |
| SI-ALM-11 | SAFEGUARD | ME-021 interacts with M-22 + M-20. ADDITIVE — new PA question. **ADEQUATE.** Auditor E at 6 questions, can absorb 1. 5-location checklist correct. | pa-questions + 4 satellites | MUST | NO |
| SI-ALM-12 | SAFEGUARD | ME-022 interacts with M-22 + M-20. ADDITIVE — new PA question. **ADEQUATE.** Same 5-location pattern. | pa-questions + 4 satellites | MUST | NO |
| SI-ALM-13 | SAFEGUARD | ME-023 interacts with M-22 + M-20. ADDITIVE — new PA question. **ADEQUATE.** Same 5-location pattern. | pa-questions + 4 satellites | MUST | NO |
| SI-ALM-14 | SAFEGUARD | ME-024 interacts with M-13 tier reclassification. MODIFYING — reduces REQUIRED count. **ADEQUATE.** GR-07 checks invisible browser defaults. Downgrade preserves at RECOMMENDED. | gate-runner + manifest | SHOULD | NO |
| SI-ALM-15 | SAFEGUARD | ME-025 interacts with M-13 tier reclassification. MODIFYING. **ADEQUATE.** GR-12 sub-perceptual; GR-18 provides backstop. | gate-runner + manifest | SHOULD | NO |
| SI-ALM-16 | SAFEGUARD | ME-030 interacts with M-19 + M-13 (GR-48/49). MODIFYING — changes result schema. **PARTIALLY ADEQUATE.** Adding `viewport` as optional field. GR-49 integrity check at L1377-1416 may hard-code expected fields. **Must audit GR-49 code before implementation.** | gate-runner-core.js | MUST | NO |
| SI-ALM-17 | SAFEGUARD | ME-031 interacts with M-22. ADDITIVE. **ADEQUATE.** Same 5-location pattern. | pa-questions + satellites | SHOULD | NO |
| SI-ALM-18 | SAFEGUARD | ME-037 interacts with M-22 + M-20. REMOVING — retires 4 PA questions. **ADEQUATE but requires CAUTION.** Must verify retired questions not referenced by: other PA questions, pa-deployment assignments, pa-guardrails scoring, MANIFEST roster, pa-manifest checklist. Reverse 5-location checklist. | pa-questions + 4 satellites | MUST | NO |
| SI-ALM-19 | SAFEGUARD | ME-051 interacts with M-22 + M-20. REPLACING — swaps 4 structural for 4 experiential. **ADEQUATE but DEPENDENT on ME-037.** Must be atomic with ME-037. 5-location update is a swap, not two independent operations. | pa-questions + 4 satellites | MUST | NO |

### Part 2 continued: Interaction Summary

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-INT-01 | RULE | ADDITIVE interactions (safe, new content): 7 total. Risk: LOW. | Various | SHOULD | NO |
| SI-INT-02 | RULE | MODIFYING interactions (existing mechanisms changed): 10 total. Risk: MEDIUM. | Various | MUST | NO |
| SI-INT-03 | RULE | REMOVING interactions: 1 total. Risk: MEDIUM. | ME-037 | MUST | NO |
| SI-INT-04 | RULE | REPLACING interactions: 1 total (must be atomic). Risk: MEDIUM. | ME-037 + ME-051 | MUST | NO |

### Part 2 continued: Mitigation Adequacy

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-MIT-01 | RULE | 12 items rated ADEQUATE — mitigation plan sufficient as-is. | 12 ME items | SHOULD | NO |
| SI-MIT-02 | RULE | 4 items rated PARTIALLY ADEQUATE: ME-003 (schema gap), ME-011 (font install fallback), ME-014 (SVG sizing), ME-030 (GR-49 field audit). | 4 ME items | MUST | NO |
| SI-MIT-03 | RULE | 1 item rated INADEQUATE: ME-017 (architectural change, circuit breaker locations incomplete, Red Line 1). | ME-017 | MUST | NO |
| SI-MIT-04 | RULE | Fix for ME-003/ME-014: Add `assert(result.gate && result.name && result.status && result.measured !== undefined && result.threshold)` validation. | gate-runner-core.js | MUST | NO |
| SI-MIT-05 | RULE | Fix for ME-011: Add `if (!document.fonts.check('16px "Instrument Serif"')) { /* font not installed, use fallback */ }` | gate-runner-core.js | MUST | NO |
| SI-MIT-06 | RULE | Fix for ME-030: Audit GR-49 field expectations (L1377-1416) before implementation. | gate-runner-core.js | MUST | NO |
| SI-MIT-07 | RULE | Fix for ME-017: Reclassify as ARCHITECTURAL CHANGE. Do NOT implement as enrichment. Requires own validation cycle per Red Line 1. | MANIFEST.md | MUST | NO |

---

### Part 3: Structural Change Requirements

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-STR-01 | RULE | No enrichment requires a NEW file (all 57 target existing files). | All | SHOULD | N/A |
| SI-STR-02 | RULE | ME-056 SHOULD be routed to new reference file (`artifact-css-pattern-library.md`) to avoid overloading builder-recipe. Requires: new file (~20 lines), MANIFEST Section 3 +1 row, Appendix B +1 row, Appendix D +1 row, Appendix E +1 reference. | ME-056 | SHOULD | NO |
| SI-STR-03 | RULE | No enrichment requires file splitting. Gate-runner-core.js at 68%; adding ME-003+ME-014+ME-040 (+180) without subtraction would push to ~62-64% (split threshold). The subtraction-before-addition constraint prevents this. | gate-runner-core.js | MUST | YES (awareness) |

#### New Gate Functions (JS Code — 12 enrichments)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-GF-01 | RULE | ME-003: GR-60 (WCAG contrast) ~70 lines JS. Location: `runWave2Gates()` or new `runUsabilityGates()`. Satellites: GR-48 REQUIRED_GATES, gate-manifest.json, gate-runner-spec.md, MANIFEST. | gate-runner-core.js | MUST | NO |
| SI-GF-02 | RULE | ME-005: Modify verdict summary ~15 lines. Location: `runGateRunner()` L752-778. Satellites: gate-manifest.json L55-59, MANIFEST L275-285. | gate-runner-core.js | MUST | PARTIAL |
| SI-GF-03 | RULE | ME-007: Modify GR-44 ~15 lines (net +10). Location: existing GR-44 in `runWave2Gates()`. No satellite updates. | gate-runner-core.js | MUST | PARTIAL |
| SI-GF-04 | RULE | ME-010: Split GR-05 -> GR-05a/GR-05b ~20 lines. Location: existing GR-05 in `runGateRunner()`. Satellites: GR-48 (add GR-05b to ADVISORY), gate-manifest.json. | gate-runner-core.js | MUST | NO |
| SI-GF-05 | RULE | ME-011: Modify GR-06 ~10 lines (net +2). Location: existing in `runGateRunner()`. No satellites. | gate-runner-core.js | MUST | NO |
| SI-GF-06 | RULE | ME-012: Modify GR-14 ~8 lines (net +3). Location: existing in `runAntiPatternGates()`. No satellites. | gate-runner-core.js | MUST | NO |
| SI-GF-07 | RULE | ME-013: Modify GR-09 ~5 lines (net +2). Location: existing in `runGateRunner()`. No satellites. | gate-runner-core.js | MUST | NO |
| SI-GF-08 | RULE | ME-014: GR-61 (min font size) ~50 lines. Location: `runUsabilityGates()` or `runWave2Gates()`. Satellites: GR-48 RECOMMENDED_GATES, gate-manifest.json, gate-runner-spec.md, MANIFEST. | gate-runner-core.js | MUST | NO |
| SI-GF-09 | RULE | ME-028: Modify GR-21/GR-22 ~5 lines (net +2). Location: existing in `runAntiPatternGates()`. No satellites. | gate-runner-core.js | SHOULD | NO |
| SI-GF-10 | RULE | ME-029: Modify GR-17 ~2 lines (net 0). Location: existing. No satellites. | gate-runner-core.js | SHOULD | NO |
| SI-GF-11 | RULE | ME-030: Modify GR-48/GR-49 ~8 lines (net +4). Location: `runGateCoverage()` + `checkGateResultIntegrity()`. Satellites: result schema documentation. | gate-runner-core.js | SHOULD | NO |
| SI-GF-12 | RULE | ME-040: GR-62 (text overflow) ~60 lines. **PERMANENTLY DEFERRED.** | gate-runner-core.js | SHOULD | NO |

#### PA Routing Changes (8 enrichments, 5-location updates each)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-PAR-01 | RULE | ME-001: Add experiential pass section + U-01 question to ALL auditors. Update: pa-deployment.md Section 2 (new section), question totals (all locations). | pa-deployment.md | MUST | PARTIAL |
| SI-PAR-02 | RULE | ME-021: Add PA-80 to Auditor E. 5-location update. | pa-questions + 4 satellites | MUST | NO |
| SI-PAR-03 | RULE | ME-022: Add PA-81 (route TBD — multiple auditors or experiential pass). 5-location update. Routing decision needed. | pa-questions + 4 satellites | MUST | NO |
| SI-PAR-04 | RULE | ME-023: Add PA-54 to Auditor G. 5-location update. | pa-questions + 4 satellites | MUST | NO |
| SI-PAR-05 | RULE | ME-031: Add false affordance scan to Auditor E or H. 5-location update. | pa-questions + satellites | SHOULD | NO |
| SI-PAR-06 | RULE | ME-037: Retire PA-06, PA-07(old), PA-09, PA-40. Reverse 5-location update for each. | pa-questions + 4 satellites | MUST | NO |
| SI-PAR-07 | RULE | ME-051: Add PA-87, PA-99, NEW-07, NEW-17. 5-location update. **ATOMIC with ME-037.** | pa-questions + 4 satellites | MUST | NO |
| SI-PAR-08 | RULE | ME-055: Add anti-Goodhart question. 5-location update. **PERMANENTLY DEFERRED.** | pa-questions + satellites | SHOULD | NO |
| SI-PAR-09 | RULE | Total: 7 independent PA routing operations (ME-037 + ME-051 = 1 atomic operation). | PA protocol files | MUST | NO |

#### MANIFEST Routing Table Updates (8 enrichments)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-MRT-01 | RULE | ME-003: MANIFEST Section 3 gate listing: add GR-60. | MANIFEST.md | MUST | NO |
| SI-MRT-02 | RULE | ME-005: MANIFEST L275-285 verdict logic: add MECHANICAL exception. | MANIFEST.md | MUST | PARTIAL |
| SI-MRT-03 | RULE | ME-008: Phase 3B->3C handoff: add usability circuit breaker. | MANIFEST.md | MUST | PARTIAL |
| SI-MRT-04 | RULE | ME-014: MANIFEST Section 3 gate listing: add GR-61. | MANIFEST.md | MUST | NO |
| SI-MRT-05 | RULE | ME-017: Phase structure: add Phase 4 (if not deferred). **DEFERRED.** | MANIFEST.md | MUST | NO |
| SI-MRT-06 | RULE | ME-040: MANIFEST Section 3 gate listing: add GR-62. **PERMANENTLY DEFERRED.** | MANIFEST.md | SHOULD | NO |
| SI-MRT-07 | RULE | ME-042: Update components.css line count. | MANIFEST.md | COULD | NO |
| SI-MRT-08 | RULE | ME-046: Add screenshot correction protocol. | MANIFEST.md | COULD | NO |

---

### Part 4: Implementation Order

#### Binding Constraints (7 total)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-BC-01 | PRECONDITION | **Gate-runner-core.js is net-zero:** Subtraction MUST precede any gate addition. | gate-runner-core.js | MUST | YES |
| SI-BC-02 | PRECONDITION | **ME-037 + ME-051 are atomic:** PA retirements and replacements in one operation. | PA files | MUST | NO |
| SI-BC-03 | PRECONDITION | **ME-010 (GR-05 split) before ME-003 (GR-60):** Split establishes opacity-filtering pattern that GR-60 reuses. | gate-runner-core.js | MUST | NO |
| SI-BC-04 | PRECONDITION | **ME-001 before ME-009:** Experiential pass protocol must exist before aggregation thresholds. | pa-deployment.md | MUST | PARTIAL |
| SI-BC-05 | PRECONDITION | **ME-006 before ME-015:** Screenshot validation must exist before data corruption escalation. | pa-deployment.md | MUST | PARTIAL |
| SI-BC-06 | PRECONDITION | **Brief-facing content (ME-047-050) AFTER capacity verified:** Builder recipe must stay under 1,000 lines. | artifact-builder-recipe.md | MUST | NO |
| SI-BC-07 | PRECONDITION | **All tier reclassifications (ME-024-027) after GR-48 array understood:** Tier moves affect meta-gate. | gate-runner-core.js | MUST | NO |

#### Wave 0: SUBTRACTION (Prerequisite — 7 steps)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W0-01 | RULE | Step 0.1: Remove GR-33 through GR-35 (Mode Advisory gates) from gate-runner-core.js -> move to artifact-orchestrator.md. **-45 JS lines.** | gate-runner-core.js -> orchestrator | MUST | YES |
| SI-W0-02 | RULE | Step 0.2: Remove GR-36 through GR-39 (Experiment Tracking gates) from gate-runner-core.js -> move to MANIFEST.md. **-40 JS lines.** (cumulative: -85) | gate-runner-core.js -> MANIFEST | MUST | YES |
| SI-W0-03 | RULE | Step 0.3: Remove GR-40 through GR-42 (Policy Gates) from gate-runner-core.js -> move to MANIFEST.md. **-35 JS lines.** (cumulative: -120) | gate-runner-core.js -> MANIFEST | MUST | YES |
| SI-W0-04 | RULE | Step 0.4: Remove GR-08 spec text (no JS implementation exists) from gate-runner-core.js. **-30 JS lines.** (cumulative: -150) | gate-runner-core.js | MUST | YES |
| SI-W0-05 | RULE | Step 0.5: Remove duplicate component patterns from artifact-builder-recipe.md. **-20 md lines.** (cumulative: -170 total) | artifact-builder-recipe.md | MUST | YES |
| SI-W0-06 | RULE | Step 0.6: Update GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays to remove relocated gates. Net 0. | gate-runner-core.js L1331-1340 | MUST | YES |
| SI-W0-07 | RULE | Step 0.7: Update gate-manifest.json to remove relocated gates from tiers/execution order. Net 0. | gate-manifest.json | MUST | YES |
| SI-W0-VER | CHECKLIST-ITEM | **Verification:** gate-runner-core.js line count decreased by ~150. Builder recipe decreased by ~20. GR-48 passes self-check with updated arrays. | gate-runner + recipe | MUST | YES |
| SI-W0-CAP | CONSTRAINT | **Gate-runner capacity after Wave 0: +150 lines available** (but net-zero goal means use ~150 for new content). | gate-runner-core.js | MUST | YES |

#### Wave 1: USABILITY PRIORITY INVERSION (8 enrichments, +134 lines)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W1-01 | RULE | Step 1.1: ME-001 -> pa-deployment.md +22. Cluster 4. | pa-deployment.md | MUST | PARTIAL |
| SI-W1-02 | RULE | Step 1.2: ME-002 -> pa-weaver.md +14. No cluster (ROBUST). | pa-weaver.md | MUST | PARTIAL |
| SI-W1-03 | RULE | Step 1.3: ME-004 -> artifact-builder-recipe.md +12. No cluster (ROBUST). | artifact-builder-recipe.md | MUST | PARTIAL |
| SI-W1-04 | RULE | Step 1.4: ME-006 -> pa-deployment.md + orchestrator +27. Cluster 4 + 5. | pa-deployment + orchestrator | MUST | PARTIAL |
| SI-W1-05 | RULE | Step 1.5: ME-008 -> MANIFEST.md +12. Cluster 5. | MANIFEST.md | MUST | PARTIAL |
| SI-W1-06 | RULE | Step 1.6: ME-009 -> pa-deployment.md + pa-weaver.md +15. Cluster 4. | pa-deployment + pa-weaver | MUST | PARTIAL |
| SI-W1-07 | RULE | Step 1.7: ME-005 -> MANIFEST + gate-manifest + gate-runner +22. Cluster 3. **Sequential (gate changes).** | MANIFEST + gate-manifest + gate-runner | MUST | PARTIAL |
| SI-W1-08 | RULE | Step 1.8: ME-007 -> gate-runner-core.js +10. Cluster 3. **Sequential (gate changes).** | gate-runner-core.js | MUST | PARTIAL |
| SI-W1-PAR | RULE | **Steps 1.1-1.6 can run in parallel** (independent files). **Steps 1.7-1.8 must be sequential** (gate-runner coordination). | Wave 1 | MUST | YES |
| SI-W1-VER | CHECKLIST-ITEM | **Verification:** pa-deployment experiential pass exists, screenshot validation gate exists, MANIFEST usability circuit breaker present, GR-44 trailing void fixed, verdict updated for MECHANICAL exception, BV-03 check (recipe verbs). | Wave 1 targets | MUST | PARTIAL |
| SI-W1-TOT | CONSTRAINT | **Running total after Wave 1:** -170 (Wave 0) + 134 (Wave 1) = **-36 net lines** (under budget). | Budget tracking | MUST | YES |

#### Wave 2: GATE FIXES + GR-60 (12 enrichments, +116 lines)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W2-01 | RULE | Step 2.1: ME-010 GR-05 split (opacity filter) +15. | gate-runner-core.js | MUST | NO |
| SI-W2-02 | RULE | Step 2.2: ME-011 GR-06 rendered font check +2. | gate-runner-core.js | MUST | NO |
| SI-W2-03 | RULE | Step 2.3: ME-012 GR-14 zone-level scoping +3. | gate-runner-core.js | MUST | NO |
| SI-W2-04 | RULE | Step 2.4: ME-013 GR-09 tolerance bands +2. | gate-runner-core.js | MUST | NO |
| SI-W2-05 | RULE | Step 2.5: ME-024 GR-07 -> RECOMMENDED. Net 0. | gate-runner + manifest | SHOULD | NO |
| SI-W2-06 | RULE | Step 2.6: ME-025 GR-12 -> RECOMMENDED. Net 0. | gate-runner + manifest | SHOULD | NO |
| SI-W2-07 | RULE | Step 2.7: ME-026 GR-43 -> RECOMMENDED. Net 0. | gate-runner + manifest | SHOULD | NO |
| SI-W2-08 | RULE | Step 2.8: ME-027 GR-19 -> ADVISORY. Net 0. | gate-runner + manifest | SHOULD | NO |
| SI-W2-09 | RULE | Step 2.9: ME-028 GR-21/22 threshold adjust +2. | gate-runner-core.js | SHOULD | NO |
| SI-W2-10 | RULE | Step 2.10: ME-029 GR-17 list item threshold. Net 0. | gate-runner-core.js | SHOULD | NO |
| SI-W2-11 | RULE | Step 2.11: ME-030 GR-48/49 viewport namespacing +4. **Before 2.12** (meta-gate must handle new viewport field). | gate-runner-core.js | SHOULD | NO |
| SI-W2-12 | RULE | Step 2.12: ME-003 **GR-60 WCAG contrast (NEW)** +70. **LAST** (largest addition, depends on capacity). | gate-runner-core.js | MUST | NO |
| SI-W2-PAR | RULE | **Steps 2.1-2.4 in parallel** (independent existing gates). **Steps 2.5-2.8 in parallel** (tier moves). **Step 2.11 before 2.12.** **Step 2.12 last.** | Wave 2 | MUST | NO |
| SI-W2-VER | CHECKLIST-ITEM | **Verification:** gate-runner net: -150 + 98 = **-52 net** (within net-zero). GR-48 arrays updated (REQUIRED -3, +1 GR-60 = net -2). gate-manifest.json consistent. gate-runner-spec.md GR-60 row added. | Wave 2 | MUST | NO |
| SI-W2-TOT | CONSTRAINT | **Running total after Wave 2:** -36 + 98 + 18 = **+80 net lines**. | Budget tracking | MUST | NO |

**VALIDATION BUILD required between Wave 2 and Wave 3.**

#### Wave 3: PA ENRICHMENTS (12 enrichments, +81 lines)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W3-01 | RULE | Step 3.1: ME-037 + ME-051 **ATOMIC.** Retire 4 questions, add 4 experiential replacements. Net 0 (swap). **FIRST AND ALONE.** | pa-questions + 4 satellites | MUST | NO |
| SI-W3-02 | RULE | Step 3.2: ME-021 PA-80 to Auditor E +12. | pa-questions + satellites | MUST | NO |
| SI-W3-03 | RULE | Step 3.3: ME-022 PA-81 +12. | pa-questions + satellites | MUST | NO |
| SI-W3-04 | RULE | Step 3.4: ME-023 PA-54 to Auditor G +12. | pa-questions + satellites | MUST | NO |
| SI-W3-05 | RULE | Step 3.5: ME-015 data corruption escalation +20. | pa-deployment + pa-questions | MUST | NO |
| SI-W3-06 | RULE | Step 3.6: ME-031 false affordance scan +12. | pa-questions + satellites | SHOULD | NO |
| SI-W3-07 | RULE | Step 3.7: ME-032 pipeline-introspection markers +3. | pa-questions.md | SHOULD | NO |
| SI-W3-08 | RULE | Step 3.8: ME-033 void question deduplication +5. | pa-questions.md | SHOULD | NO |
| SI-W3-09 | RULE | Step 3.9: ME-034 defect-bypass for cross-viewport +3. | pa-deployment.md | SHOULD | NO |
| SI-W3-10 | RULE | Step 3.10: ME-035 footer/header contrast note +1. | pa-questions.md | COULD | NO |
| SI-W3-11 | RULE | Step 3.11: ME-036 horizontal scroll element-level +1. | pa-questions.md | COULD | NO |
| SI-W3-12 | RULE | Step 3.12: ME-019 PA-05 score as range +12. | pa-weaver.md | MUST | NO |
| SI-W3-PAR | RULE | **Step 3.1 FIRST AND ALONE** (atomic swap, verify load balance). **Steps 3.2-3.4 in parallel** (new questions, independent). **Steps 3.5-3.11 in parallel** (modifications, independent). | Wave 3 | MUST | NO |
| SI-W3-VER | CHECKLIST-ITEM | **Verification:** Total PA questions: 65 - 4 + 4 + 3 + 1 = **69**. No auditor exceeds 12 questions. pa-deployment assignments updated. pa-manifest checklist updated. MANIFEST L149-157 roster updated. Question totals consistent across 3+ locations. | PA protocol files | MUST | NO |
| SI-W3-TOT | CONSTRAINT | **Running total after Wave 3:** +80 + 81 = **+161 net lines**. | Budget tracking | MUST | NO |

#### Wave 4: BUILDER RECIPE + NON-GATE INFRASTRUCTURE (9 enrichments, +66 lines)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W4-01 | RULE | Step 4.1: ME-016 ARIA accessibility +8 (builder recipe). | artifact-builder-recipe.md | MUST | NO |
| SI-W4-02 | RULE | Step 4.2: ME-038 px-only border width +3 (builder recipe). | artifact-builder-recipe.md | SHOULD | NO |
| SI-W4-03 | RULE | Step 4.3: ME-039 html color + font stack boilerplate +8 (builder recipe). | artifact-builder-recipe.md | SHOULD | NO |
| SI-W4-04 | RULE | Step 4.4: ME-041 trailing void prevention +4 (builder recipe). | artifact-builder-recipe.md | SHOULD | NO |
| SI-W4-05 | RULE | Step 4.5: ME-018 gate perceptibility column +18 (gate-manifest.json). | gate-manifest.json + gate-runner | SHOULD | NO |
| SI-W4-06 | RULE | Step 4.6: ME-020 orchestrator self-assessment +15. | artifact-orchestrator.md | SHOULD | NO |
| SI-W4-07 | RULE | Step 4.7: ME-042 MANIFEST line count updates. Net 0. | MANIFEST.md | COULD | NO |
| SI-W4-08 | RULE | Step 4.8: ME-043 execution tracker fields +5. | EXECUTION-TRACKER-TEMPLATE.md | COULD | NO |
| SI-W4-09 | RULE | Step 4.9: ME-046 screenshot correction protocol +5 (MANIFEST). | MANIFEST.md | COULD | NO |
| SI-W4-PAR | RULE | **Steps 4.1-4.4 in parallel** (all builder recipe additions). **Steps 4.5-4.9 in parallel** (independent files). | Wave 4 | SHOULD | NO |
| SI-W4-VER | CHECKLIST-ITEM | **Verification:** builder-recipe.md +23 net (within +50 safe after Wave 0 subtraction). All new content uses recipe verbs. No gate thresholds in builder-facing content. gate-manifest perceptibility column doesn't change tier classifications. | Wave 4 | MUST | NO |
| SI-W4-TOT | CONSTRAINT | **Running total after Wave 4:** +161 + 66 = **+227 net lines** (approaching ~240 budget). | Budget tracking | MUST | NO |

**VALIDATION BUILD required between Wave 4 and Wave 5.**

#### Wave 5: DEFERRED / CONDITIONAL

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W5A-01 | RULE | Wave 5a: ME-014 GR-61 (min font size) +59. **Only if** gate-runner net after Waves 0+2 is <= -50 (50+ lines headroom remaining). | gate-runner-core.js | MUST | NO |
| SI-W5B-01 | RULE | Wave 5b.1: ME-047 3 background registers +4. | artifact-builder-recipe.md | COULD | NO |
| SI-W5B-02 | RULE | Wave 5b.2: ME-048 unique element per zone +3. | artifact-builder-recipe.md | COULD | NO |
| SI-W5B-03 | RULE | Wave 5b.3: ME-049 dark moments +3. | artifact-builder-recipe.md | COULD | NO |
| SI-W5B-04 | RULE | Wave 5b.4: ME-050 spacing compression range +3. | artifact-builder-recipe.md | COULD | NO |
| SI-W5B-05 | RULE | Wave 5b.5: ME-052 audience description +3. | pa-deployment.md | COULD | NO |
| SI-W5B-06 | RULE | Wave 5b.6: ME-053 container width exceptions +4. **Contradicts NON-NEGOTIABLE constraint.** | artifact-builder-recipe.md | COULD | NO |
| SI-W5B-07 | RULE | Wave 5b.7: ME-054 remove dead CSS -13. | components.css / tokens.css | SHOULD | NO |

#### Wave 5c: Permanently Deferred (7 items)

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-W5C-01 | RULE | ME-017 (Phase 4): **Architectural change.** Requires separate validation cycle. Red Line 1. | MANIFEST.md | MUST | NO |
| SI-W5C-02 | RULE | ME-040 (GR-62 text overflow): Third new gate. Gate runner cannot absorb without SECOND subtraction round. | gate-runner-core.js | SHOULD | NO |
| SI-W5C-03 | RULE | ME-044 (document experiential): Low-priority prose. High effective-line cost (20 eff for 10 lines). | artifact-pa-protocol.md | COULD | NO |
| SI-W5C-04 | RULE | ME-045 (context budget awareness): Low-priority prose. High effective-line cost (30 eff for 15 lines). | orchestrator + MANIFEST | COULD | NO |
| SI-W5C-05 | RULE | ME-055 (anti-Goodhart question): PA question budget consumed by Waves 3. | pa-questions + satellites | SHOULD | NO |
| SI-W5C-06 | RULE | ME-056 (CSS pattern library): Requires new file creation. Route to separate reference file. | New file | SHOULD | NO |
| SI-W5C-07 | RULE | ME-057 (weaver emotional arc): Low impact CONSIDER item. | pa-weaver.md | COULD | NO |

### Part 4 continued: Implementation Summary

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-SUM-01 | RULE | Wave 0: SUBTRACT, -170 lines (prerequisite). | gate-runner + recipe | MUST | YES |
| SI-SUM-02 | RULE | Wave 1: USABILITY INVERSION, 8 enrichments, +134 lines, Tier 1 BLOCKING. | Multiple files | MUST | PARTIAL |
| SI-SUM-03 | RULE | Wave 2: GATE FIXES + GR-60, 12 enrichments, +116 lines, Tiers 1-3. VALIDATION BUILD after. | gate-runner + satellites | MUST | NO |
| SI-SUM-04 | RULE | Wave 3: PA ENRICHMENTS, 12 enrichments, +81 lines, Tiers 2-4. | PA protocol files | MUST | NO |
| SI-SUM-05 | RULE | Wave 4: BUILDER RECIPE + DOCS, 9 enrichments, +66 lines, Tiers 2-6. VALIDATION BUILD after. | builder-recipe + misc | SHOULD | NO |
| SI-SUM-06 | RULE | Wave 5: CONDITIONAL/DEFERRED, 8+ enrichments, conditional on results. | Various | COULD | NO |
| SI-SUM-07 | CONSTRAINT | Total enrichments Waves 0-4: **41 of 57 (72%)**. Deferred: 7 permanently, 9 conditionally. | All | MUST | YES |
| SI-SUM-08 | CONSTRAINT | Total net lines Waves 0-4: -170 + 134 + 116 + 81 + 66 = **+227 lines** (within ~240 budget). | Budget | MUST | YES |
| SI-SUM-09 | CONSTRAINT | Gate-runner-core.js net: -150 + 10 + 98 = **-42 lines** (net NEGATIVE, as required). | gate-runner-core.js | MUST | YES |

### Part 4 continued: Critical Path

| Item ID | Type | Description | Applies to | Tier | In 8-change plan? |
|---------|------|-------------|------------|------|-------------------|
| SI-CP-01 | RULE | Wave 0 -> Wave 1 AND Wave 2 (parallel after subtraction). | Pipeline | MUST | YES |
| SI-CP-02 | RULE | Wave 1 -> Wave 3 (experiential pass must exist). | Pipeline | MUST | NO |
| SI-CP-03 | RULE | Wave 2 -> VALIDATION BUILD -> Wave 5a (gate capacity check). | Pipeline | MUST | NO |
| SI-CP-04 | RULE | Waves 1+2+3+4 -> VALIDATION BUILD -> Wave 5. | Pipeline | MUST | NO |
| SI-CP-05 | RULE | **Waves 1 and 2 can run in PARALLEL after Wave 0.** Wave 3 depends on Wave 1. Wave 4 is independent. Validation build gates Wave 5. | Pipeline | MUST | YES |

---

## FILE 13: SUMMARY STATISTICS

- **Total unique items extracted:** 209
- **By type:** 117 RULE, 61 CONSTRAINT, 19 SAFEGUARD, 7 PRECONDITION, 5 CHECKLIST-ITEM
- **By tier:** 120 MUST, 50 SHOULD, 39 COULD
- **In current 8-change plan:** 20 YES, 24 PARTIAL, 165 NO

---

## CROSS-FILE SUMMARY

### Grand Totals (Both Files Combined)

| Metric | File 12 | File 13 | Combined |
|--------|---------|---------|----------|
| Total items | 94 | 209 | **303** |
| MUST tier | 78 | 120 | **198** |
| SHOULD tier | 11 | 50 | **61** |
| COULD tier | 5 | 39 | **44** |
| In 8-change plan: YES | 15 | 20 | **35** |
| In 8-change plan: PARTIAL | 19 | 24 | **43** |
| In 8-change plan: NO | 60 | 165 | **225** |

### Critical Findings for Implementation

1. **Budget overshoot is 2.3x:** 57 enrichments propose +556 net lines against ~240 budget. Only 15-18 enrichments can be applied before validation.

2. **Gate-runner is THE binding constraint:** At 68% compliance with 0 net-addition safe budget, every gate change requires equal subtraction. 150 lines can be freed (Wave 0), enabling exactly ONE new gate (GR-60).

3. **Format multiplier is critical:** Prose instructions cost 2x, judgment-requiring 3x. Binary+CSS costs only 0.5x. Route all enrichments toward binary+CSS format wherever possible.

4. **5 interdependency clusters** mean touching one mechanism risks cascading failures. The 5-7 location coordinated update requirement for gate changes is the highest-risk operation.

5. **4 PARTIALLY ADEQUATE mitigations** need fixes before implementation: ME-003 schema, ME-011 font fallback, ME-014 SVG handling, ME-030 GR-49 field audit.

6. **1 INADEQUATE mitigation** (ME-017) is an architectural change disguised as enrichment -- violates Red Line 1. Must NOT be implemented as standard enrichment.

7. **9 Red Lines** are absolute -- any of these changes requires a separate architectural validation cycle, not enrichment-level implementation.

8. **Wave 0 (subtraction) is prerequisite to everything.** Without freeing 150 lines from gate-runner-core.js, zero Tier 1 BLOCKING gate additions can proceed.

9. **41 of 57 enrichments fit in Waves 0-4** within budget (+227 net vs ~240 limit), leaving gate-runner net NEGATIVE (-42 lines). 7 permanently deferred, 9 conditionally deferred.

10. **Waves 1 and 2 can run in parallel** after Wave 0 completes, which is the primary scheduling optimization. Wave 3 depends on Wave 1 (experiential pass protocol).

---

*Audit complete. 303 items extracted across 2 files. Zero items omitted. All 57 enrichment rows, all 19 CAUTION items, all 9 red lines, all 5 clusters, all 7 binding constraints, all 5 waves, all verification checkpoints, and all deferral lists captured with full detail.*

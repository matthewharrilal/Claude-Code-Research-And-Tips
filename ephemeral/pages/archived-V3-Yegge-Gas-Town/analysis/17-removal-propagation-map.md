# REMOVAL PROPAGATION MAP — V3 Pipeline Cascade Analysis

**Analyst:** propagation-tracer (Opus 4.6)
**Date:** 2026-02-24
**Input:** 05-MASTER-ENRICHMENT-LIST.md (57 enrichments) cross-referenced against 13 pipeline spec files
**Scope:** Every REMOVAL, DOWNGRADE, RECLASSIFICATION, and SPLIT proposed in the master enrichment list, with full cascade analysis across all affected files.

---

## METHOD

For each proposed change, I traced:
1. **Primary file** where the change originates
2. **All files that reference the affected item** by ID, name, tier, or behavior
3. **Implicit dependencies** — code or docs that assume the item's current state without naming it
4. **Cross-file consistency** — places where tier/severity must agree across files

Files audited (13 pipeline spec files):
- `MANIFEST.md` (routing, verdict logic, agent roster, quickstart)
- `gate-runner-core.js` (executable gate code, REQUIRED_GATES/RECOMMENDED_GATES arrays)
- `gate-manifest.json` (tier registry, execution order, verdict logic, gate counts)
- `gate-runner-spec.md` (human-readable gate specs, tier tables, summary table)
- `gate-runner-preconditions.md` (BV-01-04, GR-23-28 documentation)
- `artifact-gate-runner.md` (split architecture stub, points to other files)
- `pa-questions.md` (69 question definitions, totals, appendices)
- `pa-deployment.md` (auditor assignments, question counts, totals)
- `pa-weaver.md` (verdict thresholds, anti-pattern → PA question mappings)
- `pa-guardrails.md` (anti-pattern → PA question mappings, S-09 stacking)
- `pa-manifest.md` (per-run tracking template with auditor question counts)
- `artifact-orchestrator.md` (verdict logic, decision tree, failure modes)
- `EXECUTION-TRACKER-TEMPLATE.md` (phase tracking with gate categories, auditor assignments)

---

## REMOVAL 1: ME-010 — Split GR-05 into GR-05a (REQUIRED) + GR-05b (ADVISORY)

**Nature:** SPLIT + DOWNGRADE (sub-perceptual tints from REQUIRED to ADVISORY)
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | GR-05 function body (~L140-280) | Single function checking all colors | Split into two functions: `checkWarmPalette_a(page)` (visible, opacity >= 0.3) and `checkWarmPalette_b(page)` (sub-perceptual, opacity < 0.3). GR-05a returns `{ gate: 'GR-05a', ... }`, GR-05b returns `{ gate: 'GR-05b', ... }` | Core implementation |
| `gate-runner-core.js` | L1331-1335 (REQUIRED_GATES array) | `'GR-05'` | Replace `'GR-05'` with `'GR-05a'` | GR-05b is no longer REQUIRED |
| `gate-runner-core.js` | (no current ADVISORY_GATES array) | N/A | Add `'GR-05b'` to execution in `runAntiPatternGates` or a new advisory runner section | GR-05b needs to execute somewhere |
| `gate-manifest.json` | L21 (required.gates array) | `"GR-05"` | Replace with `"GR-05a"` | Tier registry |
| `gate-manifest.json` | L19 (required.count) | `18` | Keep `18` (GR-05a replaces GR-05) | Count unchanged if GR-05a stays REQUIRED |
| `gate-manifest.json` | L38-40 (advisory.gates array) | `["GR-21", "GR-22", "GR-46", "GR-50", "GR-53"]` | Add `"GR-05b"` | GR-05b is now ADVISORY |
| `gate-manifest.json` | L37 (advisory.count) | `5` | `6` | New ADVISORY gate |
| `gate-manifest.json` | L56 (verdictLogic.REBUILD) | `"ANY identity gate (GR-01-10) FAIL"` | Clarify: GR-05a FAIL = REBUILD, GR-05b FAIL = informational | GR-05b FAIL should not trigger REBUILD |
| `gate-manifest.json` | L62-76 (executionOrder steps) | `"GR-05"` in step 2 gates list (L74) | Replace `"GR-05"` with `"GR-05a"` in step 2; add `"GR-05b"` to step 3 or 4 | Execution routing |
| `gate-manifest.json` | L140-147 (totalGateCount) | `"inGateRunner": 31, "total": 37, "grandTotal": 41` | `"inGateRunner": 32, "total": 38, "grandTotal": 42` | Net +1 gate |
| `gate-runner-spec.md` | L69 (Section 1 GR-05 row) | `GR-05 \| Warm Palette \| All colors within palette...` | Split into two rows: GR-05a (visible colors, REQUIRED) and GR-05b (sub-perceptual, ADVISORY) | Spec documentation |
| `gate-runner-spec.md` | L17-20 (Gate Categorization table) | `18` REQUIRED | Keep 18 (GR-05a replaces GR-05) | Count stays same |
| `gate-runner-spec.md` | L20 (ADVISORY row) | `5` | `6` | +1 ADVISORY |
| `gate-runner-spec.md` | L23 (Total count) | `35` | `36` | +1 gate total |
| `gate-runner-spec.md` | L149-151 (GATE SUMMARY TABLE) | Single GR-05 row: `Identity \| REQUIRED` | Split into GR-05a (Identity, REQUIRED) and GR-05b (Identity, ADVISORY) | Summary table |
| `gate-runner-spec.md` | L180 (Tier totals) | `18 REQUIRED... 5 ADVISORY` | `18 REQUIRED... 6 ADVISORY... 36 executable` | Totals |
| `MANIFEST.md` | L98 (Layer 6 count) | `72` | `73` (net +1 gate) | Layer item count |
| `MANIFEST.md` | L142 (Gate Runner description) | `37 programmatic gate checks` | `38 programmatic gate checks` | Total gate count |
| `MANIFEST.md` | L245 (artifact-gate-runner routing) | `37 gate-runner gates` | `38 gate-runner gates` | Gate count |
| `MANIFEST.md` | L276 (verdict logic) | `ANY Identity gate FAIL → REBUILD` | Add note: "GR-05a FAIL = REBUILD. GR-05b (sub-perceptual tints) is ADVISORY — does not trigger REBUILD." | Verdict clarity |
| `EXECUTION-TRACKER-TEMPLATE.md` | L158 (Identity gates count) | `10` | `10` (GR-05a replaces GR-05 in identity; GR-05b goes to advisory category) | Category counts |
| `EXECUTION-TRACKER-TEMPLATE.md` | L165 (Total) | `33` | `34` (or adjust advisory row +1) | Total gate count |
| `artifact-orchestrator.md` | Verdict decision tree | References "GR-01-10 identity" | Clarify GR-05a is the identity gate; GR-05b is advisory | Verdict logic consistency |

**Orphan risk:** ME-018 (perceptibility classification) proposes classifying GR-05 as "MIXED" — this must be updated to GR-05a = "HUMAN-PERCEPTIBLE" and GR-05b = "SUB-PERCEPTUAL".

**Implicit dependencies:** The `isCold()` heuristic function inside GR-05 is reused by the opacity pre-filter logic. Both GR-05a and GR-05b must share this function. Any refactor must preserve `isCold()` as a shared utility.

---

## REMOVAL 2: ME-024 — Downgrade GR-07 from REQUIRED to RECOMMENDED

**Nature:** DOWNGRADE (tier change)
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | L1331-1335 (REQUIRED_GATES array) | Contains `'GR-07'` | Remove `'GR-07'` | No longer REQUIRED |
| `gate-runner-core.js` | L1337-1340 (RECOMMENDED_GATES array) | `['GR-17', 'GR-18', 'GR-19', 'GR-20', 'GR-45', 'GR-49', 'GR-51', 'GR-52']` | Add `'GR-07'` | Now RECOMMENDED |
| `gate-runner-core.js` | GR-07 function body | Checks all elements for #000/#FFF | Add visible-text-only filter: `el.textContent.trim().length > 0 && el.offsetHeight > 0` | Reduce false positives |
| `gate-manifest.json` | L20-24 (required.gates) | Includes `"GR-07"` | Remove `"GR-07"` | Tier change |
| `gate-manifest.json` | L19 (required.count) | `18` | `17` | -1 REQUIRED |
| `gate-manifest.json` | L29-32 (recommended.gates) | 8 gates | Add `"GR-07"` → 9 gates | +1 RECOMMENDED |
| `gate-manifest.json` | L28 (recommended.count) | `8` | `9` | +1 RECOMMENDED |
| `gate-manifest.json` | L56 (verdictLogic.REBUILD) | `"ANY identity gate (GR-01-10) FAIL"` | Update: GR-07 no longer identity-REQUIRED. Clarify: "ANY identity gate (GR-01-06, GR-08-10) FAIL = REBUILD. GR-07 FAIL counted toward recommended 3+ threshold." | Verdict logic |
| `gate-manifest.json` | L74 (step 2 gates list) | Includes `"GR-07"` | Keep in step 2 execution (still runs) but move to step 3 result tracking | Execution order |
| `gate-manifest.json` | L135 (requiredPresent count) | `"17/17"` | `"16/16"` (or adjust to new required count) | Coverage template |
| `gate-manifest.json` | L136 (recommendedPresent) | `"N/8"` | `"N/9"` | Coverage template |
| `gate-runner-spec.md` | L17 (REQUIRED count) | `18` | `17` | Tier totals |
| `gate-runner-spec.md` | L19 (RECOMMENDED count) | `8` | `9` | Tier totals |
| `gate-runner-spec.md` | L71 (GR-07 row in Section 1) | Listed under "SECTION 1: IDENTITY GATES (REQUIRED)" | Move to "SECTION 3: ANTI-PATTERN GATES" as RECOMMENDED, or create "SECTION 1B: DOWNGRADED IDENTITY" | Section placement |
| `gate-runner-spec.md` | L153 (GATE SUMMARY TABLE GR-07 row) | `Identity \| REQUIRED` | `Identity \| RECOMMENDED` | Summary table |
| `gate-runner-spec.md` | L30 (Execution Protocol step 2) | `Execute REQUIRED gates (GR-01 through GR-15, GR-43, GR-44)` | GR-07 still runs here but is now RECOMMENDED. Either: keep in same execution step (recommended) or note the tier exception | Execution docs |
| `gate-runner-spec.md` | L53-57 (Verdict Logic) | `ANY identity gate FAIL = REBUILD` | Clarify: "ANY identity gate (GR-01-06, GR-08-10) FAIL = REBUILD" | Verdict docs |
| `MANIFEST.md` | L276 | `ANY Identity gate FAIL → REBUILD` | Add note: "GR-07 downgraded to RECOMMENDED — does not individually trigger REBUILD. Counted toward 3+ recommended threshold." | Verdict logic |
| `MANIFEST.md` | L646 | `Identity gate FAIL \| Gate Runner GR-01-GR-10 \| REBUILD` | Clarify GR-07 exception or update range to GR-01-06, GR-08-10 | Failure mode table |
| `MANIFEST.md` | L714 | `SECTION 1: IDENTITY GATES (GR-01-GR-10) \| ANY fail = REBUILD` | Update GR-07 exception | Critical path table |
| `artifact-orchestrator.md` | Section 0 (verdict) | "ANY identity gate FAIL → REBUILD" | Add GR-07 exception | Decision tree |
| `artifact-orchestrator.md` | L474 | "ANY identity gate (GR-01-GR-10) fails" | Update to exclude GR-07 | Early termination logic |
| `pa-weaver.md` | L53 (verdict logic) | Not directly referencing GR-07 | No change needed unless weaver sees gate-level results | Check for implicit reference |
| `EXECUTION-TRACKER-TEMPLATE.md` | L158 | `Identity (GR-01-GR-10) \| 10` | `Identity (GR-01-GR-06, GR-08-GR-10) \| 9` and add GR-07 to Anti-Pattern or a new "Downgraded Identity" row | Category assignment |
| `EXECUTION-TRACKER-TEMPLATE.md` | L31 (gate-runner-core.js line count) | `1,436 lines` | May change due to code edits | Line count reference |

**Orphan risk:** Any documentation that lists "10 identity gates" or "GR-01-10" as a unit. Multiple locations in MANIFEST and orchestrator use this range notation.

**Implicit dependencies:** The GR-48 coverage check (`REQUIRED_GATES` array at L1331) determines what's "required present." Moving GR-07 out means GR-48 will report 16/16 required (not 17/17). This is correct but may confuse orchestrators comparing across pipeline versions.

---

## REMOVAL 3: ME-025 — Downgrade GR-12 from REQUIRED to RECOMMENDED

**Nature:** DOWNGRADE (tier change)
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | L1331-1335 (REQUIRED_GATES) | Contains `'GR-12'` | Remove `'GR-12'` | No longer REQUIRED |
| `gate-runner-core.js` | L1337-1340 (RECOMMENDED_GATES) | 8 gates | Add `'GR-12'` | Now RECOMMENDED |
| `gate-manifest.json` | L20-24 (required.gates) | Includes `"GR-12"` | Remove `"GR-12"` | Tier change |
| `gate-manifest.json` | L19 (required.count) | `18` | Reduce by 1 (coordinate with ME-024/ME-026) | Count |
| `gate-manifest.json` | L29-32 (recommended.gates) | 8 gates | Add `"GR-12"` | +1 RECOMMENDED |
| `gate-manifest.json` | L28 (recommended.count) | `8` | Increase by 1 | Count |
| `gate-manifest.json` | L57 (verdictLogic.REFINE) | `"ANY perception gate (GR-11-15, GR-44) FAIL"` | Update: "ANY perception gate (GR-11, GR-13-15, GR-44) FAIL. GR-12 is RECOMMENDED." | Verdict logic |
| `gate-manifest.json` | L74 (step 2 gates list) | Includes GR-12 in required run | Keep in execution but track as RECOMMENDED | Execution |
| `gate-runner-spec.md` | L17-19 (tier counts) | 18 REQUIRED, 8 RECOMMENDED | Adjust -1/+1 | Counts |
| `gate-runner-spec.md` | L83 (GR-12 row) | Under "SECTION 2: PERCEPTION GATES (REQUIRED)" | Move to RECOMMENDED section or annotate tier change | Section placement |
| `gate-runner-spec.md` | L89 (GR-13/14 complementary note) | References perception gate block | GR-12 no longer in this block | Context |
| `gate-runner-spec.md` | L157 (SUMMARY TABLE GR-12) | `Perception \| REQUIRED` | `Perception \| RECOMMENDED` | Summary |
| `MANIFEST.md` | L260 | `"SECTION 2: PERCEPTION GATES" (GR-11-GR-15, GR-44)` | Update to note GR-12 is RECOMMENDED | Routing table |
| `MANIFEST.md` | L278 | `ANY Perception gate FAIL → REFINE` | Add GR-12 exception: "GR-12 (letter-spacing) is RECOMMENDED — does not individually trigger REFINE" | Verdict logic |
| `MANIFEST.md` | L647 | `Perception gate FAIL \| Gate Runner GR-11-GR-15, GR-44 \| REFINE` | Update range to exclude GR-12 | Failure modes |
| `MANIFEST.md` | L715 | `"SECTION 2: PERCEPTION GATES" (GR-11-GR-15, GR-44) \| ANY fail = REFINE` | Update to exclude GR-12 | Critical path |
| `artifact-orchestrator.md` | Verdict decision tree | "ANY Perception gate FAIL → REFINE" | Add GR-12 exception | Decision tree |
| `EXECUTION-TRACKER-TEMPLATE.md` | L159 | `Perception (GR-11-GR-15, GR-44) \| 6` | `5` (GR-12 moves to recommended row) | Category |

**Orphan risk:** GR-18 (Ghost Mechanisms, RECOMMENDED) already catches sub-perceptual letter-spacing values. With GR-12 also at RECOMMENDED, there is partial overlap. Document the relationship.

**Implicit dependency:** The perception threshold reference table in `pa-questions.md` Appendix A (L370) lists letter-spacing >=0.025em as a minimum perceptible delta. This is a PA reference, not a gate reference, so it stays unchanged. But the fact that a "REQUIRED" gate enforced it and now doesn't may confuse PA auditors who see the threshold.

---

## REMOVAL 4: ME-026 — Downgrade GR-43 from REQUIRED to RECOMMENDED

**Nature:** DOWNGRADE (tier change)
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | L1331-1335 (REQUIRED_GATES) | Contains `'GR-43'` | Remove `'GR-43'` | No longer REQUIRED |
| `gate-runner-core.js` | L1337-1340 (RECOMMENDED_GATES) | 8 gates | Add `'GR-43'` | Now RECOMMENDED |
| `gate-manifest.json` | L20-24 (required.gates) | Includes `"GR-43"` | Remove `"GR-43"` | Tier change |
| `gate-manifest.json` | L19 (required.count) | `18` | Reduce by 1 | Count |
| `gate-manifest.json` | L29-32 (recommended.gates) | 8 gates | Add `"GR-43"` | +1 |
| `gate-manifest.json` | L28 (recommended.count) | `8` | +1 | Count |
| `gate-manifest.json` | L57 (verdictLogic.REFINE) | `"ANY perception gate (GR-11-15, GR-44) FAIL, OR output gate (GR-43) FAIL"` | Remove `"OR output gate (GR-43) FAIL"` — GR-43 FAIL no longer triggers REFINE individually | Verdict logic |
| `gate-manifest.json` | L74 (step 2 gates) | Includes `"GR-43"` | Keep in execution, change tier tracking | Execution |
| `gate-runner-spec.md` | L17 (REQUIRED count) | `18` | -1 | Count |
| `gate-runner-spec.md` | L19 (RECOMMENDED count) | `8` | +1 | Count |
| `gate-runner-spec.md` | L110 (SECTION 4: GR-43 row) | `Self-Evaluation Comment \| REQUIRED` | Change to `RECOMMENDED` | Spec |
| `gate-runner-spec.md` | L53-57 (Verdict Logic) | "ANY perception gate FAIL = REFINE" includes implicit reference to GR-43 | Remove GR-43 from REFINE triggers | Verdict |
| `gate-runner-spec.md` | L169 (SUMMARY TABLE GR-43) | `Output \| REQUIRED` | `Output \| RECOMMENDED` | Summary |
| `MANIFEST.md` | L262 | `"SECTION 3B: OUTPUT VERIFICATION" (GR-43) \| Gate Runner` | Add note: now RECOMMENDED | Routing |
| `MANIFEST.md` | L278 (verdict logic) | Implicit inclusion of GR-43 in REFINE triggers | Clarify GR-43 no longer triggers REFINE | Verdict |
| `artifact-orchestrator.md` | Verdict decision tree | GR-43 contributes to REFINE | Remove from REFINE triggers | Decision tree |
| `EXECUTION-TRACKER-TEMPLATE.md` | L164 (Output GR-43 row) | `1` | Move to recommended category or annotate | Category |

**Orphan risk:** `pa-manifest.md` does not reference GR-43 directly. `pa-weaver.md` does not reference GR-43 directly. Safe.

**Implicit dependency:** GR-50 (Conviction Statement, ADVISORY) is a related output gate. With GR-43 at RECOMMENDED, both output verification gates are now non-blocking. The builder's self-evaluation becomes an advisory signal rather than a hard requirement. This may reduce self-evaluation compliance in future builds.

---

## REMOVAL 5: ME-027 — Downgrade GR-19 from RECOMMENDED to ADVISORY

**Nature:** DOWNGRADE (tier change)
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | L1337-1340 (RECOMMENDED_GATES) | Contains `'GR-19'` | Remove `'GR-19'` | No longer RECOMMENDED |
| `gate-runner-core.js` | (no ADVISORY_GATES array in GR-48) | N/A | GR-19 no longer counted toward "3+ recommended FAIL = REBUILD" threshold. Ensure it still executes in `runAntiPatternGates()`. | Threshold impact |
| `gate-manifest.json` | L29-32 (recommended.gates) | Contains `"GR-19"` | Remove `"GR-19"` | Tier change |
| `gate-manifest.json` | L28 (recommended.count) | `8` | `-1` | Count |
| `gate-manifest.json` | L38-40 (advisory.gates) | 5 gates | Add `"GR-19"` | +1 ADVISORY |
| `gate-manifest.json` | L37 (advisory.count) | `5` | `+1` | Count |
| `gate-manifest.json` | L34 (recommended verdictImpact) | `"3+ FAIL = REBUILD"` | GR-19 no longer counts toward this threshold | Threshold |
| `gate-manifest.json` | L81 (step 3 gates) | `["GR-17", "GR-18", "GR-19", "GR-20", "GR-21", "GR-22"]` | Keep GR-19 in execution step (still runs) but reclassify | Execution |
| `gate-runner-spec.md` | L19 (RECOMMENDED count) | `8` | `-1` | Count |
| `gate-runner-spec.md` | L20 (ADVISORY count) | `5` | `+1` | Count |
| `gate-runner-spec.md` | L99 (GR-19 row) | `AP-10 Threshold Gaming \| RECOMMENDED` | Change to `ADVISORY` | Spec |
| `gate-runner-spec.md` | L163 (SUMMARY TABLE GR-19) | `Anti-pattern \| RECOMMENDED` | `Anti-pattern \| ADVISORY` | Summary |
| `gate-runner-spec.md` | L180 (totals) | Update recommended/advisory counts | Adjust | Totals |
| `MANIFEST.md` | L716 | `"SECTION 3: ANTI-PATTERN GATES" (GR-17-GR-22) \| 3+ fail = REBUILD` | GR-19 no longer counts toward the 3+ threshold | Verdict table |
| `MANIFEST.md` | L656 | `"Anti-pattern gate GR-19 detects this"` (threshold gaming reference) | Still detects it but at ADVISORY tier | Context |
| `EXECUTION-TRACKER-TEMPLATE.md` | L160 | `Anti-Pattern (GR-17-GR-22) \| 6` | GR-19 moves to advisory or keep in anti-pattern with tier annotation | Category |

**Orphan risk:** None significant. GR-19 is referenced in ME-018 (perceptibility classification) as "SUB-PERCEPTUAL" — this classification is unaffected by tier change.

**Cross-file consistency:** GR-19 executes in `runAntiPatternGates()` alongside GR-17, GR-18, GR-20, GR-21, GR-22. Since GR-21 and GR-22 are already ADVISORY and run in the same function, GR-19 at ADVISORY is consistent with this execution grouping.

---

## REMOVAL 6: ME-037 — Retire 4 PA Questions (PA-06, PA-07-old, PA-09, PA-40)

**Nature:** REMOVAL (question retirement)
**Primary file:** `pa-questions.md`

**CRITICAL NOTE:** The enrichment list references "PA-07 (old)" but the current pa-questions.md does NOT have a PA-07. PA-06 exists at L163 (words stacking vertically), PA-08 exists at L165 (text you have to lean in to read), PA-09 exists at L171, PA-40 exists at L204. There is no PA-07 in the current question inventory. This retirement may refer to a question that was already removed or renumbered. **I will trace PA-06, PA-09, and PA-40 only (3 confirmed retirements).**

### Cascading Edits Required — PA-06 Retirement

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `pa-questions.md` | L163 | `PA-06 \| Are any words stacking vertically, one per line, in any column? \| B` | Remove row | Retirement |
| `pa-questions.md` | L306 (Total count) | `69 questions` | Reduce by 1 per retirement | Total |
| `pa-questions.md` | L54 (Total description) | `49 standard + 2 sub-perceptual + 3 pipeline + 6 extended + 9 Tier 5` | `48 standard...` | Subtotal |
| `pa-deployment.md` | L45 (Auditor B row) | `PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70 \| ... \| PA-77 \| 8` | Remove PA-06, count becomes 7 | Assignment |
| `pa-deployment.md` | L54 (Total) | `69 questions across 9 auditors` | Reduce by 1 | Total |
| `pa-manifest.md` | L26 (Auditor B row) | `8 \| ... \| [ ] /8` | `7 \| ... \| [ ] /7` | Tracking |
| `pa-manifest.md` | L36 (Total) | `69 answered questions` | Reduce by 1 | Total |
| `pa-guardrails.md` | No direct PA-06 reference | N/A | No change needed | Safe |
| `pa-weaver.md` | Section 1 (manifest verification) | `69 answered questions` | Reduce by 1 | Verification count |
| `MANIFEST.md` | L150 (Auditor B) | `PA-02, PA-06, PA-08, PA-29, PA-55, PA-56, PA-70, PA-77 (8 questions)` | Remove PA-06, update count to 7 | Agent roster |
| `MANIFEST.md` | L159 (Total) | `69 questions across 9 auditors` | Reduce by 1 | Total |
| `MANIFEST.md` | L320 (PA-05 scoring note) | No direct PA-06 reference | Safe | |
| `EXECUTION-TRACKER-TEMPLATE.md` | L181 (Auditor B) | `PA-02,06,08,29,55,56,70,77 (8)` | Remove 06, update count | Tracking |

### Cascading Edits Required — PA-09 Retirement

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `pa-questions.md` | L171 | `PA-09 \| Is there dead space that serves no purpose? \| C` | Remove row | Retirement |
| `pa-deployment.md` | L46 (Auditor C row) | `PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53 \| PA-64, PA-66 \| — \| 11` | Remove PA-09, count becomes 10 | Assignment |
| `pa-manifest.md` | L27 (Auditor C row) | `11 \| ... \| [ ] /11` | `10 \| ... \| [ ] /10` | Tracking |
| `pa-guardrails.md` | No direct PA-09 reference | N/A | Safe | |
| `pa-weaver.md` | No direct PA-09 reference | N/A | Safe | |
| `MANIFEST.md` | L151 (Auditor C) | `PA-09, PA-11, PA-30-33, PA-50, PA-51, PA-53, PA-64, PA-66 (11 questions)` | Remove PA-09, count becomes 10 | Agent roster |
| `EXECUTION-TRACKER-TEMPLATE.md` | L182 (Auditor C) | `PA-09,11,30-33,50,51,53,64,66 (11)` | Remove 09, count becomes 10 | Tracking |

### Cascading Edits Required — PA-40 Retirement

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `pa-questions.md` | L204 | `PA-40 \| Does spacing between sections feel consistent... \| F` | Remove row | Retirement |
| `pa-deployment.md` | L49 (Auditor F row) | `PA-16, PA-17, PA-40, PA-41 \| PA-60, PA-61 \| — \| 6` | Remove PA-40, count becomes 5 | Assignment |
| `pa-manifest.md` | L31 (Auditor F row) | `6 \| ... \| [ ] /6` | `5 \| ... \| [ ] /5` | Tracking |
| `pa-guardrails.md` | L78 (AP-05 SPACING FLAT-LINE row) | `PA-40 (spacing consistency), PA-66 (negative space variety)` | Remove PA-40 reference. Replace with PA-69 or another spatial question, or update to PA-66 only | Anti-pattern mapping |
| `pa-weaver.md` | L254 (AP-05 row) | `PA-40, PA-66` | Remove PA-40, update mapping | Anti-pattern reference |
| `MANIFEST.md` | L154 (Auditor F) | `PA-16, PA-17, PA-40, PA-41, PA-60, PA-61 (6 questions)` | Remove PA-40, count becomes 5 | Agent roster |
| `EXECUTION-TRACKER-TEMPLATE.md` | L185 (Auditor F) | `PA-16,17,40,41,60,61 (6)` | Remove 40, count becomes 5 | Tracking |

### Combined Impact of 3 Retirements

After retiring PA-06, PA-09, PA-40:
- **Total questions:** 69 → 66
- **Auditor B:** 8 → 7
- **Auditor C:** 11 → 10
- **Auditor F:** 6 → 5
- **Every "69 questions" reference must become "66"** — appears in: pa-questions.md, pa-deployment.md, pa-manifest.md, pa-weaver.md, pa-guardrails.md (L15), MANIFEST.md (L159, L784), EXECUTION-TRACKER-TEMPLATE.md

**Coordination with ME-051:** ME-051 proposes adding 4 replacement questions. If applied atomically with ME-037, the net question count would be 69 → 66 + 4 = 70 (net +1) or 69 → 66 + 3 = 69 (net zero, if only 3 retirements since PA-07 doesn't exist). The exact count depends on how many questions are actually retired and how many replacements are added.

**Orphan risk (PA-09 specific):** ME-033 (Void Question Deduplication Rule) proposes that PA-50 >=3 consecutive blank viewports auto-answers PA-09. If PA-09 is retired, ME-033's reference to PA-09 becomes orphaned. ME-033 must be updated to remove the PA-09 auto-answer.

**Orphan risk (PA-40 specific):** The AP-05 (Spacing Flat-Line) anti-pattern detection relies on PA-40. Without PA-40, AP-05 detection weakens — only PA-66 remains. This affects `pa-guardrails.md` Section 7 and `pa-weaver.md` Section 6.1.

---

## REMOVAL 7: ME-005 — Add MECHANICAL Exception to Verdict Logic

**Nature:** RECLASSIFICATION (changes when identity FAIL triggers REBUILD vs REFINE)
**Primary file:** `MANIFEST.md`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `MANIFEST.md` | L276 | `ANY Identity gate FAIL → REBUILD` | Add MECHANICAL exception: "If ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision), verdict is REFINE, not REBUILD" | Core change |
| `MANIFEST.md` | L285 | `Identity failures override all else` | Add mechanical exception clause | Override logic |
| `MANIFEST.md` | L505-506 | `ANY Identity gate FAIL → REBUILD (highest priority)` | Add MECHANICAL exception | Verdict repetition |
| `MANIFEST.md` | L605 | `Maximum iterations: 1 REBUILD + 1 REFINE` | Update: "max 1 REBUILD + 1 REFINE + 1 Phase 4 mechanical fix" (coordinates with ME-017) | Circuit breaker |
| `MANIFEST.md` | L646 | `Identity gate FAIL \| GR-01-GR-10 \| REBUILD` | Add "unless ALL are MECHANICAL → REFINE" | Failure mode table |
| `MANIFEST.md` | L1144 | `ANY identity gate FAIL => REBUILD` | Add MECHANICAL exception | Execution sequence |
| `gate-manifest.json` | L56 (verdictLogic.REBUILD) | `"ANY identity gate (GR-01-10) FAIL"` | Add MECHANICAL exception | Verdict registry |
| `gate-runner-core.js` | L752-778 (verdict summary function, if exists) | Current verdict logic | Add auto-classification: for each FAIL, check if fix requires <=5 CSS lines AND no HTML structural change. Tag result as `mechanical: true/false` | Classification |
| `gate-runner-spec.md` | L53 | `ANY identity gate FAIL = REBUILD` | Add MECHANICAL exception | Spec docs |
| `artifact-orchestrator.md` | Verdict decision tree | "ANY Identity gate FAIL → REBUILD" | Add MECHANICAL exception | Decision tree |
| `pa-weaver.md` | Section 3 (Diagnostic Vocabulary) | MECHANICAL/STRUCTURAL/COMPOSITIONAL definitions | These already exist and are compatible. No change needed. | Already aligned |

**Orphan risk:** None — the MECHANICAL concept already exists in pa-weaver.md Section 3.

**Implicit dependency:** The orchestrator's early termination optimization (MANIFEST L474: "if ANY identity gate fails, orchestrator MAY skip PA deployment and proceed directly to REBUILD") must be updated: early termination only applies to NON-MECHANICAL identity failures. If all identity failures are mechanical, PA still runs.

**Cross-file consistency:** The verdict logic appears in 6+ locations. ALL must be updated simultaneously:
1. `MANIFEST.md` L276 (primary verdict logic)
2. `MANIFEST.md` L505 (Phase 3C sequence)
3. `MANIFEST.md` L646 (failure mode table)
4. `MANIFEST.md` L1144 (execution sequence)
5. `gate-manifest.json` L56 (verdict registry)
6. `gate-runner-spec.md` L53 (spec docs)
7. `artifact-orchestrator.md` (decision tree)

---

## REMOVAL 8: ME-028 — Adjust GR-21 Threshold + GR-22 Skip-Link Exemption

**Nature:** THRESHOLD CHANGE (GR-21) + EXEMPTION (GR-22)
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | GR-21 function | Threshold: `<= 4 distinct bg colors per 900px` | Change to `<= 6` for COMPOSED mode, OR add alpha < 0.1 exclusion | Threshold adjustment |
| `gate-runner-core.js` | GR-22 function | No skip-link exemption | Add: `if (el.classList.contains('skip-link') \|\| el.closest('.skip-link')) continue;` | False positive fix |
| `gate-runner-spec.md` | L101 (GR-21 row) | `<= 4 distinct bg colors per 900px viewport slice` | Update threshold | Spec docs |
| `gate-runner-spec.md` | L102 (GR-22 row) | No skip-link mention | Add skip-link exemption note | Spec docs |

**Minimal cascade:** Both GR-21 and GR-22 are ADVISORY. No verdict logic, tier counts, or routing changes needed. Only code + spec docs.

---

## REMOVAL 9: ME-029 — Fix GR-17 List Item Threshold

**Nature:** THRESHOLD CHANGE
**Primary file:** `gate-runner-core.js`

### Cascading Edits Required

| File | Section/Location | Current Text | Required Change | Reason |
|------|-----------------|-------------|-----------------|--------|
| `gate-runner-core.js` | GR-17 function | `li` minimum: 12px | Change `li` minimum to 4px (same as td/th) | False positive fix |
| `gate-runner-spec.md` | L97 (GR-17 row) | `Content padding >= 12px, table cell >= 4px` | Add: `list item >= 4px` | Spec docs |

**Minimal cascade:** GR-17 is RECOMMENDED. Threshold change only affects code + spec. No tier, verdict, or routing changes.

---

## CUMULATIVE GATE TIER IMPACT

If ME-010, ME-024, ME-025, ME-026, ME-027 are ALL applied:

### Before

| Tier | Count | Gates |
|------|-------|-------|
| REQUIRED | 18 | GR-01-15, GR-43, GR-44, GR-48 |
| RECOMMENDED | 8 | GR-17-20, GR-45, GR-49, GR-51, GR-52 |
| ADVISORY | 5 | GR-21, GR-22, GR-46, GR-50, GR-53 |

### After (all 5 downgrades applied)

| Tier | Count | Gates |
|------|-------|-------|
| REQUIRED | 15 | GR-01-06, GR-08-11, GR-13-15, GR-44, GR-48 (note: GR-05→GR-05a) |
| RECOMMENDED | 10 | GR-07, GR-12, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 |
| ADVISORY | 8 | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53 |

**Every file that contains tier counts must be updated:**
1. `gate-manifest.json` — all tier count fields
2. `gate-runner-spec.md` — tier categorization table + summary table + totals
3. `gate-runner-core.js` — REQUIRED_GATES and RECOMMENDED_GATES arrays in GR-48
4. `MANIFEST.md` — total gate count, agent roster description, verdict logic ranges
5. `EXECUTION-TRACKER-TEMPLATE.md` — all category counts and totals

**GR-48 coverage check changes:**
- Currently: requires 17/17 REQUIRED gates present + >=4/12 RECOMMENDED
- After: requires 15/15 REQUIRED gates present + >=4/10 RECOMMENDED (if threshold stays at "4")
- The `REQUIRED_GATES` array at L1331 and the `RECOMMENDED_GATES` array at L1337 in `gate-runner-core.js` are the authoritative source. Update both.

---

## NEW GATE ADDITIONS AND THEIR CASCADE (ME-003, ME-014, ME-040)

These are not removals but additions that interact with the removal cascade:

### ME-003: Add GR-60 (WCAG Contrast, REQUIRED)
Adds a NEW required gate. After ME-024/025/026 downgrades, REQUIRED count goes from 18→15, then ME-003 brings it to 16. All tier count locations must reflect this.

### ME-014: Add GR-61 (Minimum Font Size, RECOMMENDED)
After ME-024/025/027 move gates TO recommended, and ME-014 adds one more, RECOMMENDED count changes. Must be tracked.

### ME-040: Add GR-62 (Text Overflow, RECOMMENDED)
Same as ME-014 — affects RECOMMENDED count.

**NET GATE COUNT AFTER ALL ADDITIONS + DOWNGRADES:**
- REQUIRED: 18 - 3 (GR-07, GR-12, GR-43) + 1 (GR-60) + 1 (GR-05a split, net zero) = 16
- RECOMMENDED: 8 + 3 (GR-07, GR-12, GR-43) - 1 (GR-19 to advisory) + 2 (GR-61, GR-62) = 12
- ADVISORY: 5 + 1 (GR-19) + 1 (GR-05b) = 7
- Total: 16 + 12 + 7 = 35 (+ 4 BV + 2 diagnostic = 41 grand total, same as current minus removals plus additions)

---

## PA QUESTION ADDITIONS AND THEIR CASCADE (ME-021, ME-022, ME-023, ME-031, ME-051, ME-055)

Each new PA question requires the M-22 5-location update:

1. `pa-questions.md` — question definition
2. `pa-deployment.md` — auditor assignment + count
3. `MANIFEST.md` — agent roster question list + count
4. `pa-manifest.md` — tracking checklist + count
5. `EXECUTION-TRACKER-TEMPLATE.md` — auditor tracking row + count

Plus update totals in:
6. `pa-questions.md` total (L306)
7. `pa-deployment.md` total (L54)
8. `pa-weaver.md` total (L18)
9. `pa-guardrails.md` total (L15)
10. `MANIFEST.md` total (L159)
11. `EXECUTION-TRACKER-TEMPLATE.md` total

**If ME-037 retires 3 and ME-051 adds 4:** Net change = +1 question. All "69" references become "70".
**If ME-021/022/023/031/055 each add 1:** Additional +5. Grand total = 75 (or whatever net).

Each addition has the SAME 11-location cascade. The totals must be computed AFTER all additions and retirements are coordinated.

---

## CROSS-CUTTING PROPAGATION RISKS

### Risk 1: "69 Questions" Hardcoded in 11+ Locations
The number 69 appears as a hardcoded total in at least 11 places across 6 files. ANY question addition or retirement changes this number everywhere. Recommend computing this dynamically or establishing a single source of truth.

**Affected locations:**
- `pa-questions.md` L306
- `pa-questions.md` L145 (section header)
- `pa-deployment.md` L54
- `pa-guardrails.md` L15
- `pa-weaver.md` L18
- `pa-manifest.md` L36
- `MANIFEST.md` L159
- `MANIFEST.md` L784
- `EXECUTION-TRACKER-TEMPLATE.md` (multiple)

### Risk 2: Verdict Logic Appears in 7+ Locations
The verdict decision tree ("ANY identity FAIL = REBUILD, ANY perception FAIL = REFINE") is duplicated across 7+ locations. ME-005 (MECHANICAL exception) and the tier downgrades (ME-024/025/026) all modify this logic. Every location must be updated simultaneously.

**Affected locations:**
- `MANIFEST.md` L276-285
- `MANIFEST.md` L505-512
- `MANIFEST.md` L646-650
- `MANIFEST.md` L714-716
- `MANIFEST.md` L1144-1150
- `gate-manifest.json` L55-59
- `gate-runner-spec.md` L53-57
- `artifact-orchestrator.md` (verdict decision tree)

### Risk 3: Auditor Load Balance After Question Changes
After retirements + additions, verify no auditor is overloaded:
- Current max: C and D at 11 questions
- After PA-09 retirement: C drops to 10
- After PA-40 retirement: F drops to 5
- New questions (ME-021 PA-80 → E; ME-022 PA-81 → multiple; ME-023 PA-54 → G) must be balanced

### Risk 4: Anti-Pattern → PA Question Mapping After Retirements
`pa-guardrails.md` Section 7 and `pa-weaver.md` Section 6.1 map anti-patterns to specific PA questions. Retiring PA-40 breaks the AP-05 mapping. Retiring PA-09 breaks any ME-033 auto-answer reference. These mappings must be audited after retirements.

### Risk 5: GR-48 Coverage Array Synchronization
The REQUIRED_GATES and RECOMMENDED_GATES arrays in gate-runner-core.js (L1331-1340) are the AUTHORITATIVE definition of what GR-48 checks. If ANY gate is added, removed, or reclassified, these arrays MUST be updated. Failure to update = GR-48 false positives or false negatives on every future run.

---

## IMPLEMENTATION ORDER RECOMMENDATION

To minimize cascade errors, apply changes in this order:

1. **Gate tier downgrades first** (ME-024, ME-025, ME-026, ME-027, ME-010) — these are self-contained tier changes
2. **Gate additions second** (ME-003, ME-014, ME-040) — build on new tier counts
3. **Verdict logic changes third** (ME-005) — depends on final gate tier configuration
4. **PA question retirements fourth** (ME-037) — self-contained removal
5. **PA question additions fifth** (ME-021, ME-022, ME-023, ME-031, ME-051, ME-055) — coordinated with retirements
6. **Total count updates LAST** — compute final numbers only after all individual changes are applied

Within each step, update files in this order: (1) code, (2) manifest/JSON, (3) spec docs, (4) MANIFEST.md routing, (5) deployment/tracker templates.

---

## SUMMARY TABLE

| Enrichment | Type | Files Affected | Edits Required | Orphan Risks | Implicit Deps |
|-----------|------|---------------|----------------|-------------|---------------|
| ME-010 (GR-05 split) | SPLIT+DOWNGRADE | 8 files | ~22 edits | ME-018 classification | isCold() shared utility |
| ME-024 (GR-07→RECOMMENDED) | DOWNGRADE | 9 files | ~24 edits | "GR-01-10" range notation | GR-48 coverage arrays |
| ME-025 (GR-12→RECOMMENDED) | DOWNGRADE | 8 files | ~18 edits | GR-18 overlap | Perception threshold table |
| ME-026 (GR-43→RECOMMENDED) | DOWNGRADE | 8 files | ~17 edits | Output gate both non-blocking | Builder self-eval compliance |
| ME-027 (GR-19→ADVISORY) | DOWNGRADE | 7 files | ~14 edits | None | Threshold in anti-pattern count |
| ME-037 (retire 3 PA Qs) | REMOVAL | 7 files per Q = ~21 edits | ~42 total edits | ME-033 PA-09 ref, AP-05 PA-40 ref | Question total in 11 locations |
| ME-005 (MECHANICAL exception) | RECLASSIFICATION | 7 files | ~11 edits | None | Early termination optimization |
| ME-028 (GR-21/22 adjust) | THRESHOLD | 2 files | ~4 edits | None | None |
| ME-029 (GR-17 adjust) | THRESHOLD | 2 files | ~2 edits | None | None |
| **TOTALS** | | **13 files** | **~154 edits** | **5 orphan risks** | **6 implicit deps** |

---

*End of removal propagation map. 9 change types traced across 13 files. 154 estimated individual edits. 5 orphan risks flagged. 6 implicit dependencies identified. All changes must be applied with cross-file consistency verification.*

# MECHANISM VALIDATION MATRIX + IMPLEMENTATION SAFETY CHECKLIST

**Agent:** mechanisms-auditor (Opus 4.6)
**Date:** 2026-02-24
**Purpose:** Cross-validate ALL 25 anti-loss mechanisms against the 8-change implementation plan. Every mechanism, every safeguard, every validation step.
**Sources:**
- `03-anti-loss-map.md` (25 mechanisms, 5 clusters, per-file fragility)
- `12-implementation-style-guide.md` (formatting rules, capacity ceilings, regression prevention)
- `17-removal-propagation-map.md` (cascade analysis for removals/downgrades)
- `21-PHASE3-MASTER-SYNTHESIS.md` (8-change implementation plan)
- `ephemeral/va-extraction/MANIFEST.md` (VERIFIED: routing tables, verdict logic, agent roster)
- `ephemeral/va-extraction/pa-deployment.md` (VERIFIED: 69 questions, 9 auditors, assignments)
- `ephemeral/va-extraction/gate-runner-core.js` (VERIFIED: 1,437 lines, 6 functions, GR-48 arrays at L1331-1340)

---

## PART 1: MECHANISM VALIDATION MATRIX (M-01 through M-25)

### STRUCTURAL MECHANISMS (M-01 through M-06)

| Field | M-01: Artifact Decomposition |
|-------|------|
| **Location** | MANIFEST.md L91-102 (layer table), L179-342 (routing), L912-958 (file registry); gate-manifest.json L7-15 (files); pa-deployment.md L4-5 (split declaration) |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | NO — none of the 8 changes add/remove/rename artifact files |
| **Risk if not validated** | New artifacts unrouted; agents receive wrong files |
| **Validation check** | After all 8 changes: count artifact files in `ephemeral/va-extraction/`, verify each appears in MANIFEST Section 3 + Appendix D |
| **Anti-skimming** | N/A — structural architecture, no prose formatting |
| **Information isolation** | M-01 enables M-04 by keeping files separable. No direct isolation dependency. |
| **Conviction language** | N/A |

---

| Field | M-02: Dual-Channel Architecture |
|-------|------|
| **Location** | MANIFEST.md L196-198 (dual-route description), L764 (council mandate), L795-797 (cross-artifact verification); artifact-orchestrator.md L233-242 (Channel 1/2 definitions); artifact-builder-recipe.md L62-63 (direct file routes) |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | YES — ME-005 (verdict logic change) touches the verdict pipeline which consumes dual-channel output. Indirect interaction only. |
| **Risk if not validated** | Builder sees gate thresholds (causes gaming); gate runner misses builder-facing calibrations |
| **Validation check** | After ME-005: verify MANIFEST L196-198 dual-route pattern text is unchanged; verify builder prompt template still contains calibration context, not gate thresholds |
| **Anti-skimming** | N/A — architectural pattern |
| **Information isolation** | YES — the dual-route pattern is HOW information isolation works for thresholds. Channel 1 = lossless universal, Channel 2 = regenerated content. |
| **Conviction language** | N/A |

---

| Field | M-03: Direct File Injection |
|-------|------|
| **Location** | MANIFEST.md L853 (Appendix B: builder receives tokens.css + components.css + mechanism-catalog.md + value tables), L1044-1045 (builder prompt template: value tables), L1083-1089 (reference file insertion points); artifact-builder-recipe.md L23-25 (Step 1.1), L55-57 (Step 1.2), L62-63 ("direct file routes"); EXECUTION-TRACKER-TEMPLATE.md L36-38, L118-123 |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | NO — no changes add/remove direct file routes |
| **Risk if not validated** | Builder loses CSS vocabulary; mechanism-catalog.md unreachable; tokens.css compressed |
| **Validation check** | Verify artifact-builder-recipe.md L62-63 still says "direct file routes bypassing the brief" after ME-004 and ME-039 edits to that file |
| **Anti-skimming** | N/A |
| **Information isolation** | Direct injection BYPASSES brief compression — this is intentional. Verify no new ME-004/ME-039 content accidentally routes through the brief instead. |
| **Conviction language** | N/A |

---

| Field | M-04: Per-Agent Context Isolation |
|-------|------|
| **Location** | MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation); pa-deployment.md L92 (cross-validators don't see scores), L201-221 (fresh-eyes); pa-guardrails.md L119-137 (fresh-eyes enforcement); pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); artifact-orchestrator.md L131-143 (builder isolation) |
| **Fragility** | **CRITICAL** |
| **Affected by 8-change plan?** | YES — **ME-001** (experiential pass) adds content to pa-deployment.md that auditors will read; **ME-037+ME-051** (PA question swap) modifies pa-questions.md auditor-facing content; **ME-006** (screenshot validation) adds orchestrator instructions |
| **Risk if not validated** | Auditors receive calibration data (confirmation bias); builder receives gate thresholds (gaming); weaver data anchors auditors |
| **Validation check** | (1) After ME-001: verify experiential pass instructions contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts. (2) After ME-037+ME-051: verify retired questions removed cleanly from Sections 1-3; verify new questions in Sections 1-3 contain NO calibration data. (3) After ME-006: verify screenshot validation info stays in pa-deployment.md (orchestrator file), NOT pa-questions.md (auditor file). (4) Cross-check MANIFEST L859-868 exclusion table is unchanged. |
| **Anti-skimming** | N/A — isolation is structural (file-level separation), not formatting |
| **Information isolation** | THIS IS the information isolation mechanism. It is the MOST at-risk mechanism during this implementation wave. |
| **Conviction language** | N/A — isolation rules don't use recipe/checklist verbs |

---

| Field | M-05: Tiered Brief Structure |
|-------|------|
| **Location** | gate-runner-core.js L29-67 (BV-01 code: tier regexes + line budgets), L34-40 (tier header patterns: T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80%); MANIFEST.md L28-33 (BV gate descriptions), L404-408 (Phase 1 tier structure); gate-runner-preconditions.md L14-19 (BV-01 spec) |
| **Fragility** | **CRITICAL** (gate-runner-core.js) / ROBUST (markdown) |
| **Affected by 8-change plan?** | NO — none of the 8 changes modify tier headers, tier budgets, or BV-01 code |
| **Risk if not validated** | BV-01 regexes fail to match tier headers = silent 0-line count = false PASS on under-specified briefs |
| **Validation check** | After all changes: verify gate-runner-core.js L35-39 tier regexes unchanged (`/^#+\s*Tier\s*1/im` etc.); verify BV-01 min values unchanged (12, 6, 40, 32, 24) |
| **Anti-skimming** | BV-01 IS an anti-skimming mechanism — it catches under-budgeted brief tiers |
| **Information isolation** | N/A |
| **Conviction language** | N/A — JavaScript code, not prose |

---

| Field | M-06: Suppressor Management |
|-------|------|
| **Location** | gate-runner-core.js L104-117 (BV-04 code: 4 suppressor regex patterns); L105-109 (patterns: `sample\s+\d+-\d+`, `must\s+not|shall\s+not|never\s+use`, `verify\s+that|fail\s+if|must\s+be`, `>=?\s*\d+\s+channels?`); artifact-orchestrator.md L42 (suppressors INACTIVE); MANIFEST.md L32 (BV-04); gate-runner-preconditions.md L37-46 (BV-04 spec) |
| **Fragility** | **CRITICAL** (regex patterns) |
| **Affected by 8-change plan?** | YES — **ME-004** (builder Q0) and **ME-039** (boilerplate) add content to artifact-builder-recipe.md. If any new content uses suppressor phrases, BV-04 will catch it when the Brief Assembler extracts into the brief. **ME-002** (weaver priority override) adds to pa-weaver.md which does NOT pass through BV-04 (weaver-facing, not brief-facing). |
| **Risk if not validated** | Suppressor language enters the brief → builder becomes overly cautious or rigid → FLAT output |
| **Validation check** | After ME-004 and ME-039: scan all new text in artifact-builder-recipe.md for BV-04 trigger patterns. Specifically: (1) no `sample N-N` phrases, (2) no `must not`/`shall not`/`never use`, (3) no `verify that`/`fail if`/`must be`, (4) no `>= N channels`. Use recipe verbs: Build/Create/Derive/Map/Read/Select/Deploy/Assess. |
| **Anti-skimming** | BV-04 IS an anti-skimming mechanism for suppressor language |
| **Information isolation** | Suppressor scan applies ONLY to brief-facing content. ME-002 targets pa-weaver.md (weaver-facing) — safe from BV-04. |
| **Conviction language** | CRITICAL — new ME-004/ME-039 content MUST use recipe verbs, not checklist verbs. "Assess whether text is readable" (recipe) NOT "Verify that text is readable" (suppressor). |

---

### ROUTING MECHANISMS (M-07 through M-10)

| Field | M-07: MANIFEST-Driven Routing |
|-------|------|
| **Location** | MANIFEST.md L849-857 (positive routing), L859-868 (negative routing), L179-342 (Section 3 routing table); EXECUTION-TRACKER-TEMPLATE.md L54-58, L83-91, L117-127, L190-195 (phase routing checklists) |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | YES — **ME-005** modifies MANIFEST.md verdict logic (L276+). Must not accidentally alter routing tables. **ME-037+ME-051** changes PA question totals referenced in MANIFEST L149-159 (agent roster). |
| **Risk if not validated** | Wrong agents get wrong files; new content unrouted |
| **Validation check** | After ME-005: verify MANIFEST Section 3 routing table (L179-342) is completely unchanged. After ME-037+ME-051: verify auditor question lists in MANIFEST L149-157 updated correctly. |
| **Anti-skimming** | N/A |
| **Information isolation** | M-07 enforces isolation by defining who receives what. Changes to MANIFEST must preserve routing integrity. |
| **Conviction language** | N/A |

---

| Field | M-08: Dual-Route Pattern |
|-------|------|
| **Location** | gate-runner-core.js L234-277 (GR-05 warm palette code), L246-248 (`isCold()` function); MANIFEST.md L196-198, L795-796; artifact-builder-recipe.md L108-120 (builder calibration) |
| **Fragility** | FRAGILE (isCold heuristic) |
| **Affected by 8-change plan?** | NO — no changes modify GR-05 code, `isCold()`, or builder calibration |
| **Risk if not validated** | Builder receives gate-format thresholds instead of calibration context; cold colors slip through |
| **Validation check** | After all changes: verify `isCold()` at gate-runner-core.js L246-248 is unchanged; verify artifact-builder-recipe.md L108-120 calibration section is unchanged |
| **Anti-skimming** | N/A |
| **Information isolation** | Dual-route ensures builder sees CALIBRATION (15=floor, 25=confident, 50=dramatic) not THRESHOLDS (>=15 PASS, <15 FAIL) |
| **Conviction language** | Builder calibration uses world-description framing ("15 RGB = FLOOR, 25-50 = COMPOSITIONAL, 50+ = DRAMATIC") |

---

| Field | M-09: Agent Prompt Templates |
|-------|------|
| **Location** | MANIFEST.md L975-1170 (Appendix E: all templates), L1037-1090 (builder template), L1098-1119 (PA auditor template), L1138-1170 (weaver template); pa-deployment.md L42-52 (auditor assignment table), L100-104 (model requirements), L106-119 (evidence format) |
| **Fragility** | FRAGILE (templates) / ROBUST (tables) |
| **Affected by 8-change plan?** | YES — **ME-037+ME-051** changes auditor question assignments, which appear in MANIFEST L149-157 (agent roster) and PA auditor prompt templates. **ME-001** adds experiential pass instructions that may affect the PA auditor prompt template. |
| **Risk if not validated** | `{VARIABLE_NAME}` placeholders broken; question counts in templates mismatched; builder file read order disrupted |
| **Validation check** | After ME-037+ME-051: verify all `{VARIABLE}` placeholders in MANIFEST Appendix E are intact; verify question counts in PA auditor templates match pa-deployment.md assignments. After ME-001: verify experiential pass instructions don't break existing PA auditor template structure. |
| **Anti-skimming** | N/A |
| **Information isolation** | Templates enforce isolation by defining WHAT each agent receives in its prompt |
| **Conviction language** | Builder template uses recipe verbs; PA auditor template uses observation verbs |

---

| Field | M-10: Content Map Regeneration |
|-------|------|
| **Location** | gate-runner-core.js L39 (BV-01 ContentMap tier: `{ pattern: /^#+\s*Content\s*Map/im, min: 24 }`); MANIFEST.md L377-378 (Phase 0 output: ~30-50 lines), L986-1003 (Content Analyst prompt template); artifact-orchestrator.md L192-194 |
| **Fragility** | FRAGILE (BV-01 ContentMap regex) |
| **Affected by 8-change plan?** | NO — no changes affect Content Map generation or BV-01 ContentMap regex |
| **Risk if not validated** | Content Map compressed to <24 lines = under-specified brief = FLAT output |
| **Validation check** | After all changes: verify gate-runner-core.js L39 ContentMap regex and min: 24 unchanged |
| **Anti-skimming** | BV-01 ContentMap tier IS the anti-skimming mechanism for content maps |
| **Information isolation** | N/A |
| **Conviction language** | N/A |

---

### FORMAT MECHANISMS (M-11 through M-18)

| Field | M-11: Recipe Format |
|-------|------|
| **Location** | gate-runner-core.js L93-102 (BV-03 code), L94 (recipe verbs: `Build|Create|Derive|Map|Read|Select|Deploy|Assess`), L95 (checklist verbs: `Verify|Fail if|Must be|Ensure|Check that`), L96 (3:1 ratio with Infinity handling); artifact-builder-recipe.md L5, L13 ("recipe not checklist"); MANIFEST.md L31, L234; gate-runner-preconditions.md L30-35 |
| **Fragility** | **CRITICAL** (verb lists in JS) |
| **Affected by 8-change plan?** | YES — **ME-004** (builder Q0) and **ME-039** (boilerplate) add content to artifact-builder-recipe.md. This content will be extracted into the brief by the Brief Assembler and checked by BV-03. All new verbs MUST be recipe verbs. |
| **Risk if not validated** | Checklist verbs in new content → BV-03 detects → brief FAILS verification → revision cycle triggered. Or worse: if BV-03 is weakened, checklist verbs reach builder → FLAT output. |
| **Validation check** | After ME-004 and ME-039: count recipe verbs vs checklist verbs in all new text. Verify ratio remains >= 3:1 when combined with existing content. Specifically: count instances of Build/Create/Derive/Map/Read/Select/Deploy/Assess vs Verify/Fail if/Must be/Ensure/Check that. |
| **Anti-skimming** | BV-03 IS the anti-skimming enforcement for recipe format |
| **Information isolation** | N/A — format applies to brief-facing content only |
| **Conviction language** | **CRITICAL.** ME-004 Q0 self-check MUST use "Assess" not "Verify." ME-039 boilerplate MUST use "Deploy" not "Ensure." |

---

| Field | M-12: World-Description Framing |
|-------|------|
| **Location** | MANIFEST.md L188-190 (extract ONLY "World-description" field), L198 (builder must NOT receive raw prohibition list), L863-864 (exclusion: raw prohibitions), L879 (glossary: world-description delivery); artifact-builder-recipe.md L13 (80% creative authority); artifact-orchestrator.md L131-143 (information isolation); gate-runner-core.js L107 (BV-04 S-02 pattern) |
| **Fragility** | FRAGILE (requires discipline) |
| **Affected by 8-change plan?** | YES — **ME-004** and **ME-039** add builder-facing content. If either uses prohibition framing ("Do NOT use...") instead of world-description framing ("Your world has..."), it violates M-12. BV-04 catches the worst cases, but subtle prohibitions slip through. |
| **Risk if not validated** | Builder receives "must not" framing → becomes cautious → suppressor S-02 → fewer mechanisms → FLAT |
| **Validation check** | After ME-004 and ME-039: read every new sentence. For each: "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?" Prohibition → rewrite. Specific test: ME-004 Q0 says "Assess whether text is readable at arm's length" (world-description: good) vs "Verify that no text is illegible" (prohibition: bad). |
| **Anti-skimming** | N/A — this is about VOICE, not FORMAT |
| **Information isolation** | M-12 depends on M-04 to keep raw SC tables away from the builder |
| **Conviction language** | **CRITICAL.** All new builder-facing content must use world-description verbs (Build, Create, Deploy, Assess), not prohibition verbs (Must not, Never, Fail if). |

---

| Field | M-13: Binary Rules |
|-------|------|
| **Location** | gate-runner-core.js L1-20 (execution order), L752-778 (verdict summary), L1330-1374 (GR-48 coverage), L1331-1340 (REQUIRED_GATES + RECOMMENDED_GATES arrays); gate-manifest.json L55-59 (verdict logic), L18-52 (tier definitions), L62-111 (execution order); gate-runner-spec.md L51-57 (verdict docs); MANIFEST.md L275-285 (verdict logic) |
| **Fragility** | **CRITICAL** (gate-runner-core.js) / FRAGILE (gate-manifest.json) |
| **Affected by 8-change plan?** | YES — **ME-005** (MECHANICAL exception) modifies verdict logic at MANIFEST L276+ and potentially gate-manifest.json L56. **ME-007** (GR-44 fix) modifies gate code in gate-runner-core.js. Both touch M-13's enforcement system. |
| **Risk if not validated** | Verdict contradictions across files; GR-48 false positives/negatives; REBUILD/REFINE misclassification |
| **Validation check** | After ME-005: verify verdict logic is consistent across ALL 7 locations (MANIFEST L276, L505, L646, L714, L1144; gate-manifest.json L56; gate-runner-spec.md L53; artifact-orchestrator.md verdict tree). After ME-007: verify GR-44 still returns `{ gate: 'GR-44', status: 'PASS'|'FAIL' }` schema; verify GR-44 still in REQUIRED_GATES array at L1331. |
| **Anti-skimming** | N/A — code, not prose |
| **Information isolation** | N/A |
| **Conviction language** | N/A — JavaScript |

---

| Field | M-14: Perception Calibration Table |
|-------|------|
| **Location** | gate-runner-core.js L1170-1223 (GR-51: bg delta distribution), L1193-1214 (above25Ratio, stddev, middleHasHighDelta), L69-91 (BV-02: bg delta >=15 RGB); gate-runner-spec.md L132; pa-questions.md L362-377 (Appendix A: perception thresholds); artifact-builder-recipe.md L108-124 (builder calibration: 15=floor, 25=confident, 50=dramatic) |
| **Fragility** | **CRITICAL** (GR-51 code) |
| **Affected by 8-change plan?** | NO — none of the 8 changes modify GR-51, BV-02, or calibration values |
| **Risk if not validated** | Background deltas cluster in 15-27 range = technically passing, perceptually flat |
| **Validation check** | After all changes: verify GR-51 thresholds unchanged (above25Ratio >= 0.50, stddev >= 8, middleHasHighDelta); verify BV-02 minimum delta 15 unchanged at L82 |
| **Anti-skimming** | GR-51 IS the anti-skimming mechanism for background deltas — catches "technically compliant" clustering |
| **Information isolation** | Builder sees CALIBRATION (15=floor, 50=dramatic); gate sees BINARY (above25Ratio >= 0.50). Dual-route. |
| **Conviction language** | N/A |

---

| Field | M-15: Value Tables |
|-------|------|
| **Location** | MANIFEST.md L853 (builder receives value tables ~550 lines), L1044-1045 (builder prompt: value tables LOCKED), L1089 (`{value-tables.md content -- optional}`); artifact-builder-recipe.md L122 (Step 2.1: 20 pre-computed warm color pairs) |
| **Fragility** | FRAGILE ("optional" flag is dangerous) |
| **Affected by 8-change plan?** | NO — no changes modify value tables or their routing |
| **Risk if not validated** | Builder loses pre-computed color pairs → chooses invalid backgrounds → GR-51 FAIL |
| **Validation check** | After all changes: verify MANIFEST L1089 still references value-tables.md; verify artifact-builder-recipe.md L122 still points to value tables |
| **Anti-skimming** | N/A |
| **Information isolation** | Value tables bypass the brief via M-03 direct injection |
| **Conviction language** | N/A |

---

| Field | M-16: Conviction Statement |
|-------|------|
| **Location** | gate-runner-core.js L1136-1168 (GR-50: `<!--\s*CONVICTION:([\s\S]*?)-->/i`, >=3 sentences, keyword checks for metaphor/arc/strategy); MANIFEST.md L423, L1053-1057, L1064-1073; artifact-orchestrator.md L377-379 |
| **Fragility** | FRAGILE (GR-50 regex + keywords) |
| **Affected by 8-change plan?** | NO — none of the 8 changes modify conviction format, GR-50 code, or builder prompt conviction section |
| **Risk if not validated** | Missing conviction = no REBUILD anchor for fresh builder |
| **Validation check** | After all changes: verify GR-50 regex at L1139 unchanged; verify conviction format in builder prompt template unchanged |
| **Anti-skimming** | N/A |
| **Information isolation** | Conviction is builder output → orchestrator extracts → REBUILD path only |
| **Conviction language** | N/A — gate code, not prose |

---

| Field | M-17: TC Brief Template |
|-------|------|
| **Location** | MANIFEST.md L20 (prerequisite: template exists), L209-217 (brief template structure routing); MANIFEST.md L1006-1032 (Brief Assembler prompt template); gate-runner-core.js L29-67 (BV-01 tier enforcement), L93-102 (BV-03 recipe format) |
| **Fragility** | ROBUST (template content) / **CRITICAL** (tier header format must match BV-01 regexes) |
| **Affected by 8-change plan?** | NO — none of the 8 changes modify the TC Brief Template or its tier headers |
| **Risk if not validated** | Tier headers change format → BV-01 regexes don't match → silent false PASS |
| **Validation check** | After all changes: verify TC Brief Template tier headers match `^#+\s*Tier\s*[1234]` and `^#+\s*Content\s*Map` |
| **Anti-skimming** | TC Brief Template defines the STRUCTURE that BV-01 enforces as anti-skimming |
| **Information isolation** | N/A |
| **Conviction language** | Template uses recipe format (Read/Select/Deploy/Assess) |

---

| Field | M-18: Worked Examples |
|-------|------|
| **Location** | MANIFEST.md L905 (glossary: definition), L948 (Appendix D: file path) |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | NO |
| **Risk if not validated** | Low — worked examples are standalone reference |
| **Validation check** | N/A — no changes interact |
| **Anti-skimming** | N/A |
| **Information isolation** | N/A |
| **Conviction language** | N/A |

---

### VERIFICATION MECHANISMS (M-19 through M-25)

| Field | M-19: Programmatic Gate Verification |
|-------|------|
| **Location** | gate-runner-core.js L1-20 (execution order), L29-120 (BV gates), L128-779 (core gates), L786-1038 (anti-pattern gates), L1045-1323 (Wave 2 gates), L1330-1374 (GR-48), L1377-1416 (GR-49), L1418-1437 (usage instructions); gate-manifest.json (159 lines); gate-runner-spec.md (188 lines) |
| **Fragility** | **CRITICAL** (entire gate-runner-core.js) |
| **Affected by 8-change plan?** | YES — **ME-007** modifies GR-44 in gate-runner-core.js. **ME-005** may add mechanical classification logic to verdict summary. Both touch the MOST FRAGILE file. |
| **Risk if not validated** | Gate runner breaks entirely; false PASS on all gates; verdicts incorrect |
| **Validation check** | After ME-007: (1) verify GR-44 still returns correct result schema `{ gate, name, status, measured, threshold }`; (2) verify GR-44 still in `REQUIRED_GATES` array at L1334; (3) verify no other gate functions were accidentally modified (check function boundary comments). After ME-005: (1) if verdict summary at L752-778 is modified, verify verdict logic matches all 7 cross-file locations; (2) verify `runGateRunner()` still returns `{ results, summary }` object; (3) verify all 6 function signatures unchanged. |
| **Anti-skimming** | The entire gate system IS programmatic anti-skimming |
| **Information isolation** | Gate runner is orchestrator-executed, not agent-visible |
| **Conviction language** | N/A — JavaScript |

---

| Field | M-20: Fresh-Eyes PA Principle |
|-------|------|
| **Location** | pa-deployment.md L201-221 (full fresh-eyes spec), L217-221 ("auditor receives ONLY: screenshots, PA questions, nothing else"); pa-guardrails.md L119-148 (Three Laws); pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); MANIFEST.md L322-323, L866-868 |
| **Fragility** | ROBUST (structural enforcement via file split) |
| **Affected by 8-change plan?** | YES — **ME-001** (experiential pass) adds instructions to pa-deployment.md. If experiential pass instructions leak to auditor-facing files (pa-questions.md, pa-guardrails.md), fresh-eyes is violated. **ME-037+ME-051** modifies pa-questions.md auditor-facing content — must contain ZERO calibration data. |
| **Risk if not validated** | Auditors see mechanism counts → confirmation bias → inflated PA-05 scores → false SHIP |
| **Validation check** | After ME-001: verify experiential pass instructions are in pa-deployment.md ONLY (orchestrator file), not in pa-questions.md or pa-guardrails.md (auditor files). After ME-037+ME-051: verify new replacement questions contain ZERO: mechanism counts, pattern names, build plan details, prior experiment results, tier definitions, compositional stack theory. |
| **Anti-skimming** | N/A — this is about WHAT auditors see, not formatting |
| **Information isolation** | **CRITICAL.** ME-001's experiential pass adds a "first impressions" step for auditors. The instructions for HOW to conduct this step go in pa-deployment.md (orchestrator sets it up). The auditors should only receive a prompt like "Before answering questions, describe your first impression." They should NOT receive the rationale for WHY this was added (pipeline failure history, etc.). |
| **Conviction language** | Auditor instructions use observation language ("Describe what you see") not measurement language ("Verify that...") |

---

| Field | M-21: Screenshot Pre-Capture |
|-------|------|
| **Location** | MANIFEST.md L35 (quickstart step 6), L324 ("screenshot pre-capture pattern"); pa-deployment.md L139-196 (Section 2: complete protocol, capture sequence, naming, expected counts); EXECUTION-TRACKER-TEMPLATE.md L142-152 |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | YES — **ME-006** (screenshot validation) adds a validation gate for screenshots. This interacts with the pre-capture pattern. |
| **Risk if not validated** | Blank/broken screenshots fed to 9 Opus agents = wasted compute |
| **Validation check** | After ME-006: verify new screenshot validation logic does NOT modify the capture sequence itself (pa-deployment.md Section 2.2); verify it ADDS validation AFTER capture, not DURING; verify it stays in orchestrator-facing files (pa-deployment.md or artifact-orchestrator.md), not auditor-facing files |
| **Anti-skimming** | N/A |
| **Information isolation** | Screenshot validation results should NOT reach auditors (would anchor their assessment) |
| **Conviction language** | N/A |

---

| Field | M-22: 9-Auditor Deployment |
|-------|------|
| **Location** | pa-deployment.md L28-31 (architecture: 11 agents), L42-52 (**AUTHORITATIVE assignment table**: 69 questions across 9 auditors A-I), L72-92 (PA-05 cross-validation: 4 cross-validators), L106-119 (evidence format + completion manifest); pa-guardrails.md L44-54 (PA-05 cross-validation instructions); pa-manifest.md L22-34 (report checklist), L40-47 (cross-validation status); MANIFEST.md L149-157 (agent roster with question lists) |
| **Fragility** | FRAGILE (assignment table is source of truth) |
| **Affected by 8-change plan?** | YES — **ME-037+ME-051** (retire 4, add 4 PA questions) directly modifies the assignment table. This is the HIGHEST-INTERACTION change for M-22. Changes must propagate to ALL 5 locations per question: pa-questions.md, pa-deployment.md, MANIFEST.md, pa-manifest.md, EXECUTION-TRACKER-TEMPLATE.md. |
| **Risk if not validated** | Auditor assigned a retired question → unanswerable → completion manifest INCOMPLETE → weaver receives incomplete data → verdict unreliable |
| **Validation check** | After ME-037+ME-051 (MUST be atomic): (1) Verify retired questions (PA-06, PA-09, PA-40, and PA-07 if it exists) are REMOVED from pa-questions.md, pa-deployment.md L42-52, MANIFEST.md L149-157, pa-manifest.md L22-34, EXECUTION-TRACKER-TEMPLATE.md. (2) Verify new experiential questions are ADDED to all 5 locations. (3) Verify total counts match across ALL locations (currently 69; after swap: compute new total and verify in pa-questions.md, pa-deployment.md L54, pa-manifest.md L36, pa-weaver.md L18, pa-guardrails.md L15, MANIFEST.md L159+L784). (4) Verify auditor load balance: no auditor exceeds 11 questions; Auditor C (currently 11) should not receive new questions without retirement offsetting. (5) Verify PA-05 cross-validation table at L72-92 is unchanged (cross-validators don't change). |
| **Anti-skimming** | N/A |
| **Information isolation** | Assignment table defines what each auditor sees. Incorrect assignments = wrong auditor sees wrong domain questions. |
| **Conviction language** | N/A |

---

| Field | M-23: REBUILD Not FIX |
|-------|------|
| **Location** | MANIFEST.md L40-42 (single-pass behavior), L275-285 (verdict logic), L519-521 (max iterations: 1 REBUILD + 1 REFINE), L605 (circuit breaker); gate-manifest.json L55-59 (verdict logic); artifact-orchestrator.md L107-115 (REBUILD with fresh builder) |
| **Fragility** | ROBUST (conceptual, not code) |
| **Affected by 8-change plan?** | YES — **ME-005** (MECHANICAL exception) modifies when REBUILD vs REFINE is triggered. This directly changes M-23's behavior: mechanical identity failures now trigger REFINE, not REBUILD. |
| **Risk if not validated** | Mechanical failures (e.g., 2 border-radius violations from a single CSS line) trigger full REBUILD instead of targeted REFINE → wasted builder time |
| **Validation check** | After ME-005: verify MECHANICAL exception is defined consistently across all 7 verdict logic locations. Verify definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) → REFINE; ANY non-MECHANICAL identity failure → REBUILD." Verify circuit breaker at L605 is updated if ME-005 adds a new iteration type. |
| **Anti-skimming** | N/A |
| **Information isolation** | N/A |
| **Conviction language** | N/A — verdict logic, not recipe content |

---

| Field | M-24: Mode Selection by Orchestrator |
|-------|------|
| **Location** | MANIFEST.md L26, L344, L383-389, L886-887; artifact-orchestrator.md L297-347 (complete mode selection logic), L301 ("builder never sees both modes"), L313-323 (APPLIED vs COMPOSED criteria); EXECUTION-TRACKER-TEMPLATE.md L67-69 |
| **Fragility** | ROBUST |
| **Affected by 8-change plan?** | NO — none of the 8 changes modify mode selection |
| **Risk if not validated** | Builder receives conflicting mode signals → confused composition |
| **Validation check** | After all changes: verify artifact-orchestrator.md Section 4 mode selection logic unchanged |
| **Anti-skimming** | N/A |
| **Information isolation** | Builder sees ONE mode, implicit in recipe format |
| **Conviction language** | N/A |

---

| Field | M-25: Honest Complexity Accounting |
|-------|------|
| **Location** | MANIFEST.md L346-356 (accounting table: ~3,600 lines), L750 (council mandate CF-01); artifact-orchestrator.md L147-157 (duplicate); artifact-builder-recipe.md L14-15 (CF-01 reference) |
| **Fragility** | ROBUST (documentation, not code) |
| **Affected by 8-change plan?** | YES — **ME-004** (+12 lines) and **ME-039** (+8 lines) increase artifact-builder-recipe.md size. The honest accounting table should reflect the new total. However, this is documentation-only and not enforced by any gate. |
| **Risk if not validated** | Low — accounting table becomes slightly inaccurate (off by ~20 lines out of ~3,600) |
| **Validation check** | Optional: after ME-004 and ME-039, update MANIFEST.md L346-356 line counts to reflect new artifact-builder-recipe.md size. Not strictly necessary for pipeline function. |
| **Anti-skimming** | N/A |
| **Information isolation** | N/A |
| **Conviction language** | N/A |

---

## PART 2: COMPREHENSIVE IMPLEMENTATION SAFETY CHECKLIST

### CHANGE 1: ME-001 — Experiential Pass for PA Auditors

**Target:** pa-deployment.md (+22 lines)
**Net lines:** +22

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-04 (context isolation — CRITICAL), M-09 (prompt templates), M-20 (fresh-eyes — CRITICAL), M-22 (9-auditor deployment) |
| 2 | **Formatting rules** | pa-deployment.md uses ORCHESTRATOR DECISION TREE format (phased steps with Input/Action/Output/Verification). New experiential pass instructions must follow this template. |
| 3 | **Anti-skimming patterns** | The experiential pass IS an anti-skimming intervention (catches "jumping straight to structured questions"). New text must not contain any BV-04 trigger phrases, even though pa-deployment.md is orchestrator-facing (future brief extraction might pull from it). |
| 4 | **Information isolation boundaries** | **CRITICAL.** Experiential pass instructions go in pa-deployment.md (orchestrator). The auditor receives ONLY a prompt instruction like "Before answering your assigned questions, spend 2 minutes describing your first impression of the page." The auditor must NOT receive: the rationale for the experiential pass, historical PA-05 failure data, expected scores, mechanism counts. |
| 5 | **Conviction language rules** | Use observation verbs: "Describe what you see," "Note your first impression." NOT measurement verbs: "Verify legibility," "Check that text is readable." |
| 6 | **File splitting thresholds** | pa-deployment.md at 237 lines + 22 = 259. Below 300-line threshold. No split needed. |
| 7 | **Propagation cascades** | ME-001 adds a NEW step to the PA deployment protocol. This must be reflected in: (1) pa-deployment.md (primary), (2) MANIFEST.md quickstart step 8 (if it references PA auditor workflow), (3) EXECUTION-TRACKER-TEMPLATE.md Phase 3B checklist. |
| 8 | **Orphan risks** | If experiential pass is added but PA auditor prompt template (MANIFEST Appendix E) is not updated to instruct auditors to complete it, the pass will be silently skipped. |
| 9 | **Pre-implementation verification** | Read pa-deployment.md in full. Verify current line count (237). Identify insertion point (after Section 1.2 assignments, before Section 2 screenshots). Verify no existing experiential pass language exists. |
| 10 | **Post-implementation verification** | (1) Read new text: zero calibration data, zero mechanism counts, zero pipeline history. (2) Verify pa-questions.md NOT modified. (3) Verify pa-guardrails.md NOT modified (or if modified, only to add "complete experiential pass before answering questions" — no calibration). (4) Verify total line count of pa-deployment.md (~259). (5) Verify observation verbs only. |

---

### CHANGE 2: ME-002 — Usability Priority Override in Weaver

**Target:** pa-weaver.md (+14 lines)
**Net lines:** +14

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-04 (context isolation — weaver-facing, safe), M-13 (binary rules — weaver verdict is informed by this) |
| 2 | **Formatting rules** | pa-weaver.md uses VERDICT PROTOCOL format. New usability priority must follow the existing verdict threshold table structure. |
| 3 | **Anti-skimming patterns** | pa-weaver.md is NOT brief-facing. BV-03/BV-04 do not check it. However, if the usability priority override uses judgment language ("if the page FEELS unreadable"), it could introduce inconsistency with the binary verdict system. Use binary framing: "If ANY auditor reports text illegibility at arm's length → this overrides PA-05 sub-criteria scoring." |
| 4 | **Information isolation boundaries** | pa-weaver.md is weaver-facing ONLY. Auditors do NOT see it. Safe to add verdict-influencing content here without isolation risk. |
| 5 | **Conviction language rules** | Weaver instructions can use judgment verbs (the weaver IS the judgment agent). But the usability override itself should be binary: "If text illegibility reported → REFINE regardless of other scores." |
| 6 | **File splitting thresholds** | pa-weaver.md at 376 + 14 = 390. Below threshold. No split needed. |
| 7 | **Propagation cascades** | If ME-002 adds a new verdict category or modifies existing SHIP/REFINE/REBUILD thresholds, this must propagate to: MANIFEST.md L275-285, gate-manifest.json L55-59, gate-runner-spec.md L53-57, artifact-orchestrator.md verdict tree. If ME-002 only adds a PRIORITY OVERRIDE (usability trumps other criteria), it only needs to be in pa-weaver.md. |
| 8 | **Orphan risks** | If usability override references auditor experiential pass output (ME-001), ME-001 must be implemented first. If ME-001 is not implemented, the override references non-existent data. |
| 9 | **Pre-implementation verification** | Read pa-weaver.md in full (376 lines). Identify existing verdict logic section. Determine whether override fits within existing structure or requires a new section. |
| 10 | **Post-implementation verification** | (1) Verify override uses binary language, not judgment scales. (2) Verify no calibration data leaked into auditor-visible files. (3) Verify verdict logic in pa-weaver.md is consistent with MANIFEST L275-285. (4) If verdict thresholds changed, verify all 7 cross-file locations updated. |

---

### CHANGE 3: ME-004 — Legibility Self-Check Q0 for Builder

**Target:** artifact-builder-recipe.md (+12 lines)
**Net lines:** +12

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-06 (suppressor management — CRITICAL: new content enters brief), M-11 (recipe format — CRITICAL: must use recipe verbs), M-12 (world-description framing — CRITICAL: must not use prohibitions), M-03 (direct injection — verify bypass still works), M-25 (honest accounting — update line count) |
| 2 | **Formatting rules** | artifact-builder-recipe.md uses RECIPE FORMAT. Template: `### Step N.M: [Action Verb] [What]` with Read/Select/Deploy/Assess structure. Q0 must follow this. |
| 3 | **Anti-skimming patterns** | New Q0 content will be extracted into the brief by the Brief Assembler. BV-03 checks recipe:checklist ratio. BV-04 checks for suppressor phrases. ALL new text must: (a) use Build/Create/Derive/Map/Read/Select/Deploy/Assess verbs, (b) avoid Verify/Fail if/Must be/Ensure/Check that, (c) avoid "sample N-N", "must not"/"shall not"/"never use", ">= N channels". |
| 4 | **Information isolation boundaries** | artifact-builder-recipe.md reaches the BUILDER. Verify Q0 contains NO gate thresholds in pass/fail format. Express legibility as world-description: "Text should be readable at arm's length" not "Verify text size >= 16px." |
| 5 | **Conviction language rules** | **CRITICAL.** Q0 MUST use: "Assess whether..." (recipe). NOT: "Verify that..." (checklist/suppressor). Example: "Assess: Can body text be comfortably read at arm's length? If not, increase font-size or line-height." |
| 6 | **File splitting thresholds** | artifact-builder-recipe.md at ~934 + 12 = ~946. Well within safe capacity (+50 budget per style guide). |
| 7 | **Propagation cascades** | Q0 is a self-check step in the builder recipe. It does NOT propagate to gate-runner, PA questions, or verdict logic. HOWEVER: if the Brief Assembler's extraction guide (MANIFEST.md L236-240) needs updating to include Q0 in the "INCLUDE VERBATIM" list, add it there. |
| 8 | **Orphan risks** | If Q0 is added to the recipe but the Brief Assembler doesn't extract it into the brief, the builder never sees it. Verify Q0 is in a section that the Brief Assembler includes (Phase 5: SELF-EVALUATE or equivalent). |
| 9 | **Pre-implementation verification** | Read artifact-builder-recipe.md first 30 lines for structure. Identify existing self-check steps (Phase 5 if present). Verify insertion point doesn't break step numbering. |
| 10 | **Post-implementation verification** | (1) Count recipe verbs vs checklist verbs in new text. (2) Search for BV-04 trigger phrases. (3) Verify no gate thresholds in pass/fail format. (4) Verify world-description framing throughout. (5) Verify Step numbering is consistent with surrounding content. (6) Verify artifact-builder-recipe.md L62-63 ("direct file routes") is unchanged. |

---

### CHANGE 4: ME-007 — Fix GR-44 Trailing Void Measurement

**Target:** gate-runner-core.js (+10 lines, must be net-zero per style guide)
**Net lines:** +10 (REQUIRES -10 offset)

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-13 (binary rules — CRITICAL: GR-44 is REQUIRED), M-19 (programmatic verification — CRITICAL: modifying the most fragile file), M-05 (tiered brief — BV-01 code must not be affected), M-06 (suppressor management — BV-04 code must not be affected) |
| 2 | **Formatting rules** | gate-runner-core.js uses EXECUTABLE PLAYWRIGHT JAVASCRIPT format. Result schema: `{ gate: 'GR-44', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`. No other status values. Try/catch wrapper mandatory. |
| 3 | **Anti-skimming patterns** | N/A — JavaScript code, not prose content |
| 4 | **Information isolation boundaries** | Gate runner code is orchestrator-executed. It NEVER reaches builders, auditors, or the weaver as text. Safe. |
| 5 | **Conviction language rules** | N/A — code |
| 6 | **File splitting thresholds** | gate-runner-core.js at 1,437 lines (68% compliance). **NET-ZERO IS MANDATORY.** +10 lines requires -10 lines subtraction elsewhere. Identify: comment trimming, redundant helper consolidation, or gate logic tightening. |
| 7 | **Propagation cascades** | GR-44 is in `REQUIRED_GATES` at L1334. It is in the verdict summary at L756 (`perceptionGates` filter includes 'GR-44'). It is in gate-manifest.json, gate-runner-spec.md, MANIFEST.md. If the gate NAME or ID changes, all must update. If only the MEASUREMENT LOGIC changes (how trailing void is detected), only gate-runner-core.js changes. |
| 8 | **Orphan risks** | If GR-44 fix changes the gate's pass/fail behavior (e.g., previously PASS pages now FAIL or vice versa), this changes verdict outcomes for existing pages. This is intentional (fixing a bug) but must be documented. |
| 9 | **Pre-implementation verification** | Read GR-44 code block in full (find `GR-44` in gate-runner-core.js). Understand current measurement: what does "trailing void" mean in current code? Identify the BUG being fixed. Identify -10 lines to subtract for net-zero. Verify surrounding gate functions won't be affected. |
| 10 | **Post-implementation verification** | (1) Verify GR-44 result schema matches `{ gate, name, status, measured, threshold }`. (2) Verify GR-44 is still in `REQUIRED_GATES` at L1331-1335. (3) Verify verdict summary at L752-778 still includes 'GR-44' in perceptionGates filter. (4) Verify no other gate functions were accidentally modified (check first/last lines of adjacent gates). (5) Verify function boundary comments unchanged. (6) Count total lines: must be <= 1,437. (7) Run the modified gate-runner against known HTML to verify no JavaScript errors. |

---

### CHANGE 5: ME-039 — HTML Color + Font Stack Boilerplate

**Target:** artifact-builder-recipe.md (+8 lines)
**Net lines:** +8

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-06 (suppressor management — CRITICAL), M-11 (recipe format — CRITICAL), M-12 (world-description framing — CRITICAL), M-03 (direct injection), M-08 (dual-route — boilerplate provides CSS values that must align with gate expectations) |
| 2 | **Formatting rules** | RECIPE FORMAT. Boilerplate should be presented as a recipe step: "Deploy this HTML color + font stack as your starting foundation" with copy-paste CSS. |
| 3 | **Anti-skimming patterns** | Boilerplate CSS is a REFERENCE VALUE — it goes through the brief via Brief Assembler extraction. BV-04 will scan it. Ensure no accidental suppressor phrases in comments or instructions around the boilerplate. Especially dangerous: if instructions say "Ensure the font stack matches exactly" → BV-04 catches "Ensure." Use: "Deploy the font stack as shown." |
| 4 | **Information isolation boundaries** | Boilerplate reaches the builder. Verify it contains NO gate thresholds. The CSS values themselves (e.g., `color: #1A1A1A`) are vocabulary, not thresholds — safe. |
| 5 | **Conviction language rules** | Use "Deploy" for the boilerplate. "Deploy this HTML scaffold as your starting `<style>` block." NOT "Ensure your HTML starts with..." |
| 6 | **File splitting thresholds** | artifact-builder-recipe.md at ~934 + 8 = ~942. Within budget. |
| 7 | **Propagation cascades** | If boilerplate specifies fonts that differ from SC-05 (Font Trinity: Instrument Serif / Inter / JetBrains Mono), GR-06 will catch it. Verify boilerplate font stack matches SC-05 exactly. If boilerplate specifies colors, verify they are within the warm palette (no cold colors per GR-05). |
| 8 | **Orphan risks** | If boilerplate specifies `color: #000000` (pure black), GR-07 will flag it. Use `color: #1A1A1A` per SC-04. Similarly, no `#FFFFFF` — use `#FEF9F5` or `#FEFCF3`. |
| 9 | **Pre-implementation verification** | Read artifact-builder-recipe.md Phase 1 (vocabulary section) to find correct insertion point. Verify boilerplate CSS values match tokens.css values. |
| 10 | **Post-implementation verification** | (1) Verify all CSS values in boilerplate match tokens.css. (2) Verify no pure black (#000000) or pure white (#FFFFFF). (3) Verify font stack = Instrument Serif / Inter / JetBrains Mono. (4) Verify recipe verbs only (Deploy/Read/Select). (5) Verify no BV-04 trigger phrases. (6) Verify L62-63 direct file routes unchanged. |

---

### CHANGE 6: ME-005 — Mechanical Exception in Verdict Logic

**Target:** MANIFEST.md (+22 lines) + gate-manifest.json + gate-runner-core.js
**Net lines:** +22 (across 3 files)

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-13 (binary rules — CRITICAL: verdict logic is the core binary system), M-19 (programmatic verification — CRITICAL: if verdict summary in JS changes), M-23 (REBUILD not FIX — directly modifies when REBUILD triggers), M-07 (MANIFEST routing — editing MANIFEST), M-02 (dual-channel — verdict consumes dual-channel output) |
| 2 | **Formatting rules** | MANIFEST.md uses DECLARATIVE ROUTING + AGENT TEMPLATES format. Verdict logic uses prioritized list format. gate-manifest.json uses structured JSON. gate-runner-core.js uses executable JavaScript with structured result objects. |
| 3 | **Anti-skimming patterns** | MANIFEST.md verdict logic is orchestrator-facing (not brief-facing). BV-03/BV-04 do not check it. However, if verdict logic uses judgment language ("if the failure SEEMS mechanical"), it introduces ambiguity. Use binary: "ALL identity failures require <=5 CSS lines to fix AND require no HTML structural changes AND require no design decisions → MECHANICAL → REFINE." |
| 4 | **Information isolation boundaries** | Verdict logic is orchestrator + weaver facing. Builder does NOT see it. PA auditors do NOT see it. Safe from isolation perspective. |
| 5 | **Conviction language rules** | Verdict logic is a DECISION TREE, not a recipe. Binary conditions are appropriate: "IF condition THEN verdict." |
| 6 | **File splitting thresholds** | MANIFEST.md at ~1,193 + ~8 = ~1,201 (limited headroom of +20). gate-manifest.json at 159 + ~4 = 163. gate-runner-core.js at 1,437 — **NET-ZERO MANDATORY** for any JS changes. |
| 7 | **Propagation cascades** | **THIS IS THE HIGHEST-CASCADE CHANGE.** Verdict logic appears in 7+ locations. ALL must be updated simultaneously: (1) MANIFEST.md L276 (primary), (2) MANIFEST.md L505 (Phase 3C), (3) MANIFEST.md L646 (failure mode table), (4) MANIFEST.md L714 (critical path table), (5) MANIFEST.md L1144 (execution sequence), (6) gate-manifest.json L56 (verdict registry), (7) gate-runner-spec.md L53 (spec docs), (8) artifact-orchestrator.md verdict decision tree. MISS ONE = contradiction. |
| 8 | **Orphan risks** | MANIFEST.md L474 early termination: "if ANY identity gate fails, orchestrator MAY skip PA deployment and proceed to REBUILD." If ME-005 is applied, early termination applies ONLY to non-MECHANICAL failures. If ALL identity failures are mechanical, PA still runs. This must be updated. |
| 9 | **Pre-implementation verification** | (1) Read ALL 7 verdict logic locations in full. (2) Verify current verdict logic is consistent across all 7 before editing. (3) Identify the MECHANICAL concept — pa-weaver.md Section 3 already defines MECHANICAL/STRUCTURAL/COMPOSITIONAL diagnostic vocabulary. Verify ME-005 definition is compatible. (4) Determine whether gate-runner-core.js verdict summary (L752-778) needs modification or if MECHANICAL classification is orchestrator-level only. |
| 10 | **Post-implementation verification** | (1) Read ALL 7 verdict logic locations. Verify word-for-word consistency of MECHANICAL exception. (2) Verify early termination at MANIFEST L474 updated. (3) Verify circuit breaker at MANIFEST L605 updated if new iteration type added. (4) Verify gate-manifest.json L56 matches MANIFEST L276. (5) Verify gate-runner-spec.md L53 matches. (6) Verify artifact-orchestrator.md verdict tree matches. (7) If gate-runner-core.js was modified: verify function signatures unchanged, verify result schema unchanged, verify total line count <= 1,437. |

---

### CHANGE 7: ME-006 — Screenshot Validation Gate

**Target:** pa-deployment.md (+15 lines) + artifact-orchestrator.md (+12 lines)
**Net lines:** +27

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-21 (screenshot pre-capture — directly extends), M-04 (context isolation — validation results must not reach auditors), M-20 (fresh-eyes — validation adds a step before auditor spawn), M-09 (prompt templates — orchestrator workflow changes) |
| 2 | **Formatting rules** | pa-deployment.md: phased protocol format. artifact-orchestrator.md: ORCHESTRATOR DECISION TREE format with Input/Action/Output/Verification/If FAIL template. |
| 3 | **Anti-skimming patterns** | N/A — orchestrator-facing, not brief-facing |
| 4 | **Information isolation boundaries** | **CRITICAL.** Screenshot validation results (e.g., "3 screenshots were blank, re-captured with expanded CSS overrides") must NOT reach auditors. If auditors know screenshots were re-captured, it anchors their assessment ("something was wrong with the page"). Validation stays in pa-deployment.md (orchestrator) and artifact-orchestrator.md (orchestrator). |
| 5 | **Conviction language rules** | Orchestrator instructions use decision-tree language: "If screenshot is blank → re-capture with expanded CSS overrides." Binary conditions are appropriate. |
| 6 | **File splitting thresholds** | pa-deployment.md at 237 + 15 = 252 (+ ME-001's 22 = 274 total). Approaching but below threshold. artifact-orchestrator.md at ~1,058 + 12 = ~1,070. Within +50 budget. |
| 7 | **Propagation cascades** | ME-006 adds a validation step between screenshot capture and auditor deployment. This changes the Phase 3A flow: Capture → **Validate** → Deploy auditors. Must be reflected in: (1) pa-deployment.md (primary), (2) artifact-orchestrator.md (orchestrator workflow), (3) MANIFEST.md quickstart step 6 (if it references screenshot flow), (4) EXECUTION-TRACKER-TEMPLATE.md Phase 3A checklist. |
| 8 | **Orphan risks** | ME-006 needs a "builder signal" mechanism per the synthesis (builder declares `<!-- SCROLL-REVEALS: true -->`). If this signal mechanism is defined in artifact-builder-recipe.md but the builder is not prompted to include it, it will never appear in the HTML → screenshot validation doesn't know about scroll reveals → false re-captures. This is a pre-implementation requirement from the synthesis. |
| 9 | **Pre-implementation verification** | (1) Decide whether builder signal is implemented now or deferred. (2) Read pa-deployment.md Section 2 (screenshot protocol). (3) Read artifact-orchestrator.md Phase 3A. (4) Identify insertion point: after capture, before auditor spawn. |
| 10 | **Post-implementation verification** | (1) Verify validation logic stays in orchestrator-facing files only. (2) Verify no validation results leak to pa-questions.md or pa-guardrails.md. (3) Verify MANIFEST quickstart step 6 updated. (4) Verify EXECUTION-TRACKER Phase 3A updated. (5) If builder signal implemented: verify it's in artifact-builder-recipe.md AND builder prompt template AND GR-44 or new gate. |

---

### CHANGE 8: ME-037+ME-051 — Retire 4 PA Questions, Replace with 4 Experiential

**Target:** pa-questions.md + pa-deployment.md + pa-manifest.md + pa-weaver.md + MANIFEST.md + EXECUTION-TRACKER-TEMPLATE.md
**Net lines:** 0 (atomic swap)

| # | Check | Detail |
|---|-------|--------|
| 1 | **Mechanisms interacted** | M-22 (9-auditor deployment — CRITICAL: assignment table changes), M-04 (context isolation — new questions must respect fresh-eyes), M-20 (fresh-eyes — new questions must contain zero calibration), M-07 (MANIFEST routing — agent roster updates), M-09 (prompt templates — question counts change) |
| 2 | **Formatting rules** | pa-questions.md: BINARY PA QUESTION format. Each question: `PA-[NN]: [Text ending in ?]` + Evidence format (YES/NO/CONDITIONAL + screenshot + description) + Viewport(s) + Assigned to. No judgment scales ("Rate 1-5"), only binary YES/NO. |
| 3 | **Anti-skimming patterns** | New experiential questions are the ANTI-SKIMMING INTERVENTION. They add first-impression assessment before structured analysis. The questions themselves must follow binary format (answerable YES/NO with evidence). |
| 4 | **Information isolation boundaries** | **CRITICAL.** New experiential questions go in pa-questions.md Sections 1-3 (auditor-facing). They must contain ZERO: calibration data, tier definitions, mechanism counts, build plan details, expected PA-05 scores. They should ask about PERCEPTION ("Does the page feel intentionally composed?") not about PROCESS ("Were 12+ mechanisms deployed?"). |
| 5 | **Conviction language rules** | New questions use perceptual language: "Does...?" "Is there...?" "Can you...?" NOT measurement language: "Verify that..." "Is count >= N?" |
| 6 | **File splitting thresholds** | Net-zero swap — no file size change. |
| 7 | **Propagation cascades** | **11-LOCATION UPDATE per the propagation map.** For each retired question (PA-06, PA-09, PA-40, and PA-07 if it exists): remove from (1) pa-questions.md, (2) pa-deployment.md L42-52, (3) MANIFEST.md L149-157, (4) pa-manifest.md, (5) EXECUTION-TRACKER-TEMPLATE.md. For each new question: add to all 5 locations. Update TOTALS in: (6) pa-questions.md L306, (7) pa-deployment.md L54, (8) pa-manifest.md L36, (9) pa-weaver.md L18, (10) pa-guardrails.md L15, (11) MANIFEST.md L159+L784. |
| 8 | **Orphan risks** | (a) **PA-40 retirement breaks AP-05 mapping.** pa-guardrails.md Section 7 and pa-weaver.md Section 6.1 map AP-05 (Spacing Flat-Line) to PA-40 + PA-66. Without PA-40, AP-05 detection weakens — replace PA-40 reference with a new experiential question or keep PA-66 as sole AP-05 detector. (b) **PA-09 retirement may orphan ME-033.** ME-033 proposes PA-50 auto-answers PA-09. If PA-09 is retired, ME-033's reference becomes orphan. (Since ME-033 is not in this wave, this is documentation-only.) (c) **PA-07 may not exist.** The propagation map notes: "current pa-questions.md does NOT have a PA-07." Verify before attempting retirement. |
| 9 | **Pre-implementation verification** | (1) Read pa-questions.md: verify PA-06, PA-09, PA-40 exist. Verify PA-07 does or does not exist. (2) Read pa-deployment.md L42-52: note current auditor assignments for each retiring question. (3) Read pa-guardrails.md: identify AP-05 PA-40 reference. (4) Read pa-weaver.md: identify AP-05 PA-40 reference. (5) Plan load balance: retiring B(-1), C(-1), F(-1) frees capacity. New questions: assign to lightest auditors (E:6, F:5-after-retirement, H:5). (6) Verify all 11 "69 questions" locations. |
| 10 | **Post-implementation verification** | (1) Count total questions in pa-questions.md. (2) Count total per-auditor in pa-deployment.md. (3) Verify totals match across ALL 11 locations. (4) Verify no auditor exceeds 11 questions. (5) Verify AP-05 mapping in pa-guardrails.md and pa-weaver.md updated. (6) Verify PA-05 cross-validation table at pa-deployment.md L72-92 unchanged (no retiring question is a PA-05 cross-validator). (7) Verify new questions have: YES/NO format, screenshot reference requirement, viewport assignment, auditor assignment. (8) Verify new questions contain ZERO calibration data or mechanism counts. (9) **ATOMIC CHECK:** retirement and addition must be ONE operation — never commit retirements without additions or vice versa. |

---

## PART 3: CROSS-CUTTING SAFETY SUMMARY

### Mechanisms by Risk Level After 8 Changes

| Risk Level | Mechanisms | Why |
|------------|-----------|-----|
| **HIGH RISK** (directly modified) | M-04, M-06, M-11, M-12, M-13, M-19, M-20, M-22 | Multiple changes touch these mechanisms' enforcement files |
| **MEDIUM RISK** (indirectly affected) | M-02, M-07, M-08, M-09, M-21, M-23, M-25 | Adjacent to changes; cascade effects possible |
| **LOW RISK** (not affected) | M-01, M-03, M-05, M-10, M-14, M-15, M-16, M-17, M-18, M-24 | No changes interact with these |

### Critical Validation Steps (Do ALL of These)

1. **After ME-004 + ME-039:** Run BV-03 regex against all new text in artifact-builder-recipe.md. Count recipe vs checklist verbs. Verify >= 3:1 ratio.
2. **After ME-004 + ME-039:** Run BV-04 regex against all new text. Verify zero suppressor matches.
3. **After ME-005:** Read ALL 7 verdict logic locations. Verify exact textual consistency of MECHANICAL exception.
4. **After ME-007:** Verify gate-runner-core.js total line count <= 1,437. Verify GR-44 in REQUIRED_GATES. Verify result schema.
5. **After ME-037+ME-051:** Count questions across ALL 11 total-count locations. Verify all match.
6. **After ME-037+ME-051:** Verify AP-05 anti-pattern mapping updated in pa-guardrails.md + pa-weaver.md.
7. **After ALL changes:** Verify MANIFEST.md Section 3 routing table (L179-342) unchanged.
8. **After ALL changes:** Verify MANIFEST.md Appendix B exclusion table (L859-868) unchanged.
9. **After ALL changes:** Verify gate-runner-core.js GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays at L1331-1340 match gate-manifest.json tier arrays.
10. **After ALL changes:** Verify pa-deployment.md fresh-eyes principle (L201-221) unchanged.

### The Three Most Dangerous Interactions

1. **ME-004/ME-039 × M-06/M-11/M-12** — New builder recipe content that uses wrong verbs or prohibition framing will be caught by BV-03/BV-04, causing brief FAIL. But if someone "fixes" the BV gate instead of fixing the content, the suppressors enter the pipeline. **Rule: Fix the content, never weaken the gate.**

2. **ME-005 × M-13** — Verdict logic changes across 7+ locations. Missing even ONE location creates a contradiction. If MANIFEST says "MECHANICAL → REFINE" but gate-manifest.json still says "ANY identity FAIL → REBUILD", the pipeline's behavior depends on which file the orchestrator reads first. **Rule: All 7 locations or none.**

3. **ME-037+ME-051 × M-22** — 11-location update for question totals. If pa-deployment.md says 70 but pa-weaver.md says 69, the weaver may flag incomplete data. **Rule: Compute final total ONCE, then search-and-replace across all 11 locations.**

---

*Mechanism validation complete. 25 mechanisms mapped, 8 implementation safety checklists produced (10 checks each = 80 total verification items), 3 most dangerous interactions identified, risk levels assigned. This is the safety net for Phase 3 implementation.*

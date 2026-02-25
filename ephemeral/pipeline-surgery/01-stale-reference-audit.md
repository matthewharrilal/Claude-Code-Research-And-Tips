# Stale Reference Audit — Pipeline v3 Post-Wave 4
Date: 2026-02-25
Auditor: Opus 4.6 (STALE REFERENCE HUNTER)
Scope: 12 pipeline files + SKILL.md

---

## Methodology

1. Read all 12 specified files in full
2. Ran `wc -l` on every pipeline artifact to get ground-truth line counts
3. Searched for specific stale patterns: old gate counts, old line counts, old section references
4. Cross-referenced every claim against the actual file contents
5. Classified severity:
   - **BLOCKING** — Wrong count/reference that would confuse an executing agent
   - **SIGNIFICANT** — Misleading but unlikely to break execution
   - **MINOR** — Cosmetic inaccuracy, approximate values close enough

---

## Ground-Truth Line Counts (via `wc -l`)

| File | Actual Lines | MANIFEST Appendix D Claims | Delta |
|------|-------------|---------------------------|-------|
| gate-runner-core.js | **1,626** | 1,436 (line 927) | **+190** |
| gate-runner-spec.md | **223** | 188 (lines 250, 928) | **+35** |
| gate-manifest.json | **200** | 159 (lines 253, 931) | **+41** |
| pa-deployment.md | **363** | 237 (lines 287, 936) | **+126** |
| pa-weaver.md | **455** | 376 (lines 288, 937) | **+79** |
| pa-guardrails.md | **175** | 151 (lines 289, 938) | **+24** |
| pa-questions.md | **431** | 412 (lines 286, 935) | **+19** |
| EXECUTION-TRACKER-TEMPLATE.md | **595** | 319 (line 932) | **+276** |
| artifact-builder-recipe.md | **999** | 840 (line 219) / 934 (line 925) | **+159 / +65** |
| artifact-orchestrator.md | **1,100** | 1,058 (lines 923, 966) | **+42** |
| artifact-routing.md | **900** | 843 (line 940) | **+57** |
| artifact-tc-brief-template.md | **223** | ~165 (line 942) | **+58** |
| artifact-value-tables.md | **262** | ~226 (lines 943) | **+36** |
| artifact-worked-examples.md | **182** | ~183 (line 943) | -1 (OK) |
| experiment-protocol.md | **51** | ~40 (line 933) | +11 |
| artifact-identity-perception.md | **556** | 556 (line 924) | 0 (OK) |
| council-verdict.md | **575** | 575 (lines 888, 941) | 0 (OK) |

---

## Gate Count Discrepancy (CROSS-FILE CONFLICT)

The pipeline has an unresolved counting conflict across 4 files:

| Source | Claim | Details |
|--------|-------|---------|
| gate-runner-core.js line 18 | "37 (in this file) + 4 BV + 2 diagnostic = **43** total" | Header comment |
| gate-runner-spec.md line 23 | "**42** (18 + 11 + 7 + 2 + 4)" | Authoritative spec |
| gate-manifest.json line 179 | `"total": 42, "grandTotal": 42` | JSON metadata |
| MANIFEST.md line 142 | "**42** programmatic (38 Playwright + 4 BV)" | Pipeline table |
| MANIFEST.md line 246 | "**42** gate-runner gates (18 + 11 + 7 + 2 + 4)" | Artifact description |

**Ground truth (from counting unique gate IDs in core.js):**
- 36 unique GR-* gates with executable code in core.js
- 4 BV gates with executable code in core.js
- 2 diagnostic gates (GR-33, GR-34) — referenced in header but "no code in this file"
- **Total in file: 40 executable** (36 GR + 4 BV)
- **Total pipeline: 42** (36 GR + 4 BV + 2 diagnostic) — matches spec and manifest

**The discrepancies:**
1. core.js header says "37 in this file" but actual count is 36 GR gates (or 40 including BV)
2. core.js header says "43 total" but spec/manifest say 42
3. MANIFEST says "38 Playwright" but actual non-BV executable gates = 36 GR
4. gate-manifest.json says `"inGateRunner": 34` which is stale (pre-Wave-4, missing GR-61/62/63/64)

---

## Findings by File

### FILE 1: MANIFEST.md (1,246 lines)

#### F-01 | Line 142 | BLOCKING
**Stale:** `Run 42 programmatic gate checks (38 Playwright + 4 BV)`
**Should say:** `Run 42 programmatic gate checks (36 GR gates + 4 BV + 2 diagnostic)`
**Reason:** "38 Playwright" does not match any countable set. Actual GR gates in core.js = 36. An agent reading "38 Playwright" will expect 38 Playwright-based gates and fail to reconcile with core.js.

#### F-02 | Line 219 | SIGNIFICANT
**Stale:** `### artifact-builder-recipe.md (840 lines)`
**Should say:** `### artifact-builder-recipe.md (999 lines)`
**Reason:** File has grown significantly. The 840 count predates multiple enrichments.

#### F-03 | Line 236 | SIGNIFICANT
**Stale:** `The 840-line recipe cannot fit in the ~90-line compositional + disposition tiers.`
**Should say:** `The ~1,000-line recipe cannot fit in the ~90-line compositional + disposition tiers.`
**Reason:** Flows from F-02. Same stale "840" count repeated in running text.

#### F-04 | Line 249 | SIGNIFICANT
**Stale:** `gate-runner-core.js (~1,550 lines) — All executable Playwright JavaScript (9 functions)`
**Should say:** `gate-runner-core.js (~1,626 lines) — All executable Playwright JavaScript (9 functions)`
**Reason:** +76 lines from ~1,550, primarily Wave 4 gates (GR-61, GR-62, GR-63, GR-64). The ~ prefix gives some tolerance, but 1,550 vs 1,626 is a 5% drift.

#### F-05 | Line 250 | SIGNIFICANT
**Stale:** `gate-runner-spec.md (188 lines) — Human-readable gate specifications`
**Should say:** `gate-runner-spec.md (~223 lines) — Human-readable gate specifications (Waves 1-4)`
**Reason:** 188 was the pre-Wave-4 count. Now 223 lines.

#### F-06 | Line 253 | SIGNIFICANT
**Stale:** `gate-manifest.json (159 lines) — JSON TOC, tiers, execution order`
**Should say:** `gate-manifest.json (~200 lines) — JSON TOC, tiers, execution order`
**Reason:** 159 was the pre-Wave-4 count. Now 200 lines.

#### F-07 | Line 286 | MINOR
**Stale:** `pa-questions.md (412 lines) — All 69 PA question definitions with scoring guidance`
**Should say:** `pa-questions.md (~431 lines) — All 69 PA question definitions with scoring guidance`
**Reason:** +19 lines. Small drift.

#### F-08 | Line 287 | BLOCKING
**Stale:** `pa-deployment.md (237 lines) — Auditor assignments, screenshot protocol, deployment instructions`
**Should say:** `pa-deployment.md (~363 lines) — 9-auditor assignments, Section 0 experiential pass protocol, screenshot protocol, visual verification`
**Reason:** +126 lines (54% growth). Agent expecting 237 lines to parse will misjudge file structure. The description also omits the experiential pass protocol added in Wave 4.

#### F-09 | Line 288 | SIGNIFICANT
**Stale:** `pa-weaver.md (376 lines) — Weaver protocol, verdict categories, diagnostic vocabulary`
**Should say:** `pa-weaver.md (~455 lines) — Section 0 experiential anchor, Weaver protocol, verdicts, calibration (INFORMATION ISOLATION)`
**Reason:** +79 lines. Description also misses experiential anchor.

#### F-10 | Line 289 | MINOR
**Stale:** `pa-guardrails.md (151 lines) — Auditor anti-patterns, quality bars, scoring thresholds`
**Should say:** `pa-guardrails.md (~175 lines) — Auditor constraints, Section 3.1 visual verification, scoring anchors`
**Reason:** +24 lines. Small drift.

#### F-11 | Lines 923-944 — APPENDIX D FILE PATH REGISTRY | BLOCKING (batch)
Every line count in Appendix D is stale. This is the single largest cluster of stale references.

| Line | File | Listed | Actual | Delta |
|------|------|--------|--------|-------|
| 923 | artifact-orchestrator.md | 1,058 | 1,100 | +42 |
| 925 | artifact-builder-recipe.md | 934 | 999 | +65 |
| 927 | gate-runner-core.js | 1,436 | 1,626 | +190 |
| 928 | gate-runner-spec.md | 188 | 223 | +35 |
| 931 | gate-manifest.json | 159 | 200 | +41 |
| 932 | EXECUTION-TRACKER-TEMPLATE.md | 319 | 595 | +276 |
| 933 | experiment-protocol.md | ~40 | 51 | +11 |
| 935 | pa-questions.md | 412 | 431 | +19 |
| 936 | pa-deployment.md | 237 | 363 | +126 |
| 937 | pa-weaver.md | 376 | 455 | +79 |
| 938 | pa-guardrails.md | 151 | 175 | +24 |
| 940 | artifact-routing.md | 843 | 900 | +57 |
| 942 | artifact-tc-brief-template.md | ~165 | 223 | +58 |
| 943 | artifact-value-tables.md | ~226 | 262 | +36 |

**Note:** Lines 924 (identity-perception, 556), 926 (gate-runner redirect, 22), 939 (pa-manifest, 89), 941 (council-verdict, 575), and 944 (worked-examples, ~183) are all CORRECT.

#### F-12 | Line 925 vs Line 219 | SIGNIFICANT
**Stale:** Line 219 says "840 lines" and line 925 says "934 lines" for the SAME file (artifact-builder-recipe.md).
**Should say:** Both should say "~999 lines" (or simply "999 lines").
**Reason:** Two different stale counts for the same file within the same document. The "934" is less stale than "840" but both are wrong.

#### F-13 | Line 966 | MINOR
**Stale:** `At 1,058 lines, artifact-orchestrator.md covers...`
**Should say:** `At ~1,100 lines, artifact-orchestrator.md covers...`
**Reason:** Running-text repetition of stale orchestrator line count. Part of a usage note, so less impactful than the registry.

---

### FILE 2: gate-runner-core.js (1,626 lines)

#### F-14 | Line 18 | BLOCKING
**Stale:** `// Total executable gates: 37 (in this file) + 4 BV + 2 diagnostic = 43 total pipeline gates`
**Should say:** `// Total executable gates: 36 GR (in this file) + 4 BV (in this file) = 40 in-file + 2 diagnostic (no code) = 42 total pipeline gates`
**Reason:** Three errors in one line:
1. "37" should be 36 (verified by `grep -o "gate: 'GR-[0-9]*[a-z]*'" | sort -u` = 36 unique GR-* IDs)
2. "43 total" should be 42 (contradicts gate-runner-spec.md line 23 and gate-manifest.json "total": 42)
3. The "in this file" claim excludes BV gates but they ARE in the file

This is the most dangerous stale reference in the pipeline. An agent reading "43 total" will add an extra gate to its expected count and report GR-48 coverage as incomplete.

---

### FILE 3: gate-manifest.json (200 lines)

#### F-15 | Line 176 | BLOCKING
**Stale:** `"inGateRunner": 34`
**Should say:** `"inGateRunner": 36`
**Reason:** Pre-Wave-4 count. Wave 4 added GR-61, GR-62, GR-63, GR-64 (4 new gates). 34 + 4 = 38... but wait. Let me reconcile. The "inGateRunner" value should count executable GR-* gates in core.js that are NOT BV and NOT diagnostic.

Actually: looking at the tier breakdown in the manifest itself: REQUIRED=18, RECOMMENDED=11, ADVISORY=7 = 36. But "inGateRunner" says 34. This is 2 short. Pre-Wave-4 this would have been 14 REQ + 11 REC + 7 ADV = 32. So the number was probably 32 + 2 (GR-48, GR-49 meta) = 34. But now with Wave 4 adding 2 REQUIRED (GR-61, GR-62) and 2 RECOMMENDED (GR-63, GR-64), the value should be 34 + 4 = 38. Or alternatively, if "inGateRunner" means "non-BV, non-diagnostic, non-meta executable gates," the math differs.

**Recommendation:** Clarify what "inGateRunner" counts, then update. At minimum it needs +4 for Wave 4 gates. The value 34 is definitively stale.

#### F-16 | Line 170 | MINOR
**Stale:** `"requiredPresent": "17/17"`
**Should say:** `"requiredPresent": "N/17"` (template placeholder, not pre-filled)
**Reason:** This is in the "templateFields" section showing default values. But GR-48's REQUIRED_GATES array now has 17 entries (lines 1358-1362 in core.js: 9 identity + 4 perception + 2 WCAG/wave + 2 experiential = 17). This value is actually CORRECT as a template count. Not stale, but flagging for awareness since the 17 count was updated during Wave 4 (was 15, then 17 after adding GR-61 and GR-62).

---

### FILE 4: EXECUTION-TRACKER-TEMPLATE.md (595 lines)

#### F-17 | Line 298 | BLOCKING
**Stale:** `| **Total** | **38** | ___ | ___ | ___ |`
**Should say:** `| **Total** | **42** | ___ | ___ | ___ |`
**Reason:** The gate runner results table (lines 290-297) lists 7 categories summing to: 11 + 6 + 6 + 6 + 4 + 2 + 2 + 1 = 38. But then it should also include BV-01-BV-04 if claiming total. Actually, looking at the table more carefully:

The 7 categories are: Identity (11), Perception (6), Anti-Pattern (6), Wave 2 (6), Experiential (4), Meta (2), Mode Detection (2), Output (1) = 38. This is the "in-runner" count (excluding BV).

But the actual count of gates in these categories is: 11 + 6 + 6 + 6 + 4 + 2 + 2 + 1 = 38. However, the REQUIRED_GATES array has 17 entries and RECOMMENDED has 11 = 28 among those. Plus 7 ADVISORY... Let me just verify the table entries sum matches the actual gate IDs.

Wait: looking at line 300: "BV-01-BV-04 tracked in Phase 1" — so this table intentionally excludes BV. The question is whether 38 is the correct non-BV, non-diagnostic in-file count. With 36 GR gates in the file + 2 diagnostic (GR-33, GR-34 in "Mode Detection" row) = 38. So **38 is actually correct for this table** (it includes diagnostic gates in its "Mode Detection" row).

**Revised assessment:** 38 is CORRECT for this specific table. Reclassifying to NOT STALE.

#### F-18 | Line 494 | SIGNIFICANT
**Stale:** `| Gate Pass Rate (in-runner) | ___/38 |`
**Should say:** This is consistent with the table at line 298. If F-17 is correct (38 = 36 GR executable + 2 diagnostic), then this is also correct.

**Revised assessment:** 38 is CORRECT as the "in-runner" count (excludes BV-01 through BV-04 which are tracked separately). NOT STALE.

#### F-19 | Line 65 | SIGNIFICANT
**Stale:** `| PF-1b | artifact-orchestrator.md | ~1,060 lines | [ ] |`
**Should say:** `| PF-1b | artifact-orchestrator.md | ~1,100 lines | [ ] |`
**Reason:** Actual is 1,100 lines. The ~ prefix helps, but 1,060 is 40 lines off.

#### F-20 | Line 67 | SIGNIFICANT
**Stale:** `| PF-1d | artifact-builder-recipe.md | ~959 lines | [ ] |`
**Should say:** `| PF-1d | artifact-builder-recipe.md | ~999 lines | [ ] |`
**Reason:** Actual is 999 lines. 40 lines off.

#### F-21 | Line 68 | SIGNIFICANT
**Stale:** `| PF-1e | gate-runner-core.js | ~1,550 lines, 9 functions | [ ] |`
**Should say:** `| PF-1e | gate-runner-core.js | ~1,626 lines, 9 functions | [ ] |`
**Reason:** Actual is 1,626 lines. 76 lines off (5% drift).

#### F-22 | Line 73 | SIGNIFICANT
**Stale:** `| PF-1j | pa-deployment.md | ~320 lines | [ ] |`
**Should say:** `| PF-1j | pa-deployment.md | ~363 lines | [ ] |`
**Reason:** Actual is 363 lines. 43 lines off (13% drift).

#### F-23 | Line 77 | SIGNIFICANT
**Stale:** `| PF-1n | artifact-routing.md | 843 lines | [ ] |`
**Should say:** `| PF-1n | artifact-routing.md | ~900 lines | [ ] |`
**Reason:** Actual is 900 lines. 57 lines off (7% drift). Also missing ~ prefix.

#### F-24 | Line 78 | SIGNIFICANT
**Stale:** `| PF-1o | artifact-tc-brief-template.md | ~165 lines | [ ] |`
**Should say:** `| PF-1o | artifact-tc-brief-template.md | ~223 lines | [ ] |`
**Reason:** Actual is 223 lines. 58 lines off (35% drift).

#### F-25 | Line 79 | MINOR
**Stale:** `| PF-1p | artifact-value-tables.md | ~226 lines | [ ] |`
**Should say:** `| PF-1p | artifact-value-tables.md | ~262 lines | [ ] |`
**Reason:** Actual is 262 lines. 36 lines off.

#### F-26 | Line 208 | MINOR
**Stale:** `| P2-1e | Received value tables (~226 lines) | [ ] |`
**Should say:** `| P2-1e | Received value tables (~262 lines) | [ ] |`
**Reason:** Same stale value-tables line count echoed from PF-1p.

---

### FILE 5: SKILL.md (~/.claude/skills/build-page/SKILL.md, 89 lines)

#### F-27 | Line 46 | SIGNIFICANT
**Stale:** `| gate-runner-core.js | ~1,550 lines — 9 executable Playwright JS functions (42 gates: 18 REQ + 11 REC + 7 ADV + 2 DIAG + 4 BV) |`
**Should say:** `| gate-runner-core.js | ~1,626 lines — 9 executable Playwright JS functions (42 gates: 18 REQ + 11 REC + 7 ADV + 2 DIAG + 4 BV) |`
**Reason:** 76-line drift. The tier breakdown (42 total) is correct.

#### F-28 | Line 50 | MINOR
**Stale:** `| gate-manifest.json | ~180 lines — JSON TOC, tiers (...) |`
**Should say:** `| gate-manifest.json | ~200 lines — JSON TOC, tiers (...) |`
**Reason:** 20-line drift. ~ prefix provides some tolerance but 180 vs 200 is 11%.

#### F-29 | Line 56 | MINOR
**Stale:** `| pa-deployment.md | ~320 lines — 9-auditor assignments, Section 0 experiential pass protocol, screenshot protocol, visual verification |`
**Should say:** `| pa-deployment.md | ~363 lines — 9-auditor assignments, Section 0 experiential pass protocol, screenshot protocol, visual verification |`
**Reason:** 43-line drift (13%).

---

### FILE 6: gate-runner-spec.md (223 lines)

No stale references found. Gate counts, tier breakdowns, and totals are all consistent with the authoritative 42-gate count.

---

### FILE 7: pa-deployment.md (363 lines)

No stale references found. Content reflects Wave 4 experiential enforcement additions.

---

### FILE 8: pa-weaver.md (455 lines)

No stale references found.

---

### FILE 9: pa-guardrails.md (175 lines)

No stale references found.

---

### FILE 10: pa-questions.md (431 lines)

No stale references found.

---

### FILE 11: artifact-builder-recipe.md (999 lines)

No stale references found internally. The stale references to this file's line count exist in MANIFEST.md (F-02, F-03, F-11, F-12).

---

### FILE 12: artifact-orchestrator.md (1,100 lines)

No stale references found internally. The stale reference to this file's line count exists in MANIFEST.md (F-11, F-13).

---

## Summary

### By Severity

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| **BLOCKING** | 4 | F-01, F-08, F-11 (14 sub-items), F-14, F-15 |
| **SIGNIFICANT** | 14 | F-02, F-03, F-04, F-05, F-06, F-09, F-12, F-19, F-20, F-21, F-22, F-23, F-24, F-27 |
| **MINOR** | 7 | F-07, F-10, F-13, F-25, F-26, F-28, F-29 |

### By File

| File | Findings | Blocking |
|------|----------|----------|
| MANIFEST.md | 13 findings (F-01 through F-13) | 3 (F-01, F-08, F-11) |
| gate-runner-core.js | 1 finding (F-14) | 1 (F-14) |
| gate-manifest.json | 2 findings (F-15, F-16) | 1 (F-15) |
| EXECUTION-TRACKER-TEMPLATE.md | 8 findings (F-19 through F-26) | 0 |
| SKILL.md | 3 findings (F-27, F-28, F-29) | 0 |
| gate-runner-spec.md | 0 | 0 |
| pa-deployment.md | 0 | 0 |
| pa-weaver.md | 0 | 0 |
| pa-guardrails.md | 0 | 0 |
| pa-questions.md | 0 | 0 |
| artifact-builder-recipe.md | 0 | 0 |
| artifact-orchestrator.md | 0 | 0 |

### Critical Path Items (Fix First)

1. **F-14 (gate-runner-core.js line 18):** The "43 total" conflicts with 42 everywhere else. This is the most dangerous single-line stale reference because the gate coverage check (GR-48) uses REQUIRED_GATES to verify completeness. If an agent reads the header and expects 43, it will report a missing gate.

2. **F-15 (gate-manifest.json line 176):** `"inGateRunner": 34` is definitively stale (pre-Wave-4). Any tooling that reads this JSON to validate gate coverage will under-count.

3. **F-01 (MANIFEST.md line 142):** "38 Playwright + 4 BV" breakdown is wrong. Should be "36 GR + 4 BV + 2 diagnostic."

4. **F-08 (MANIFEST.md line 287):** pa-deployment.md described as 237 lines when it's actually 363. 54% growth means major structural sections are unaccounted for in the description.

5. **F-11 (MANIFEST.md Appendix D):** 14 of 21 file sizes in the registry are stale. This is the master reference table that agents check during PF-1 (Preflight). Stale sizes create false confidence during file verification.

### Reclassified Findings

- **F-17 (EXECUTION-TRACKER line 298, "38"):** Initially flagged as BLOCKING but reclassified to NOT STALE upon analysis. The table intentionally excludes BV gates (tracked separately) and includes diagnostic gates (Mode Detection row). 36 GR executable + 2 diagnostic = 38 is correct for this table's scope.
- **F-18 (EXECUTION-TRACKER line 494, "___/38"):** Same reclassification. Consistent with F-17.
- **F-16 (gate-manifest.json line 170, "17/17"):** Flagged for awareness but NOT STALE. The 17 count correctly reflects the current REQUIRED_GATES array after Wave 4 additions.

---

## Recommended Fix Order

1. Fix F-14 first (gate-runner-core.js header) — highest confusion risk
2. Fix F-15 (gate-manifest.json inGateRunner count)
3. Fix F-11 batch (MANIFEST Appendix D — all 14 line counts)
4. Fix F-01 (MANIFEST line 142 — gate breakdown description)
5. Fix F-08 (MANIFEST line 287 — pa-deployment description)
6. Fix remaining MANIFEST line counts (F-02 through F-10, F-12, F-13)
7. Fix EXECUTION-TRACKER line counts (F-19 through F-26)
8. Fix SKILL.md line counts (F-27 through F-29)

---

*End of stale reference audit.*

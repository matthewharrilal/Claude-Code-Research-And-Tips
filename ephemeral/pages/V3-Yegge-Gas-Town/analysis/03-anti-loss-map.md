# Anti-Loss Mechanism Map for Phase 3 Enrichment Safety

**Agent:** anti-loss-mapper (Opus)
**Date:** 2026-02-24
**Purpose:** Map every anti-loss mechanism from the 25-mechanism catalog to its exact location(s) in Pipeline v3 spec files, so Phase 3 enrichment implementation knows what NOT to break.
**Source Catalog:** `ephemeral/pages/gas-town-va-pipeline/implementation/audit-anti-loss-mechanisms.md` (25 mechanisms)
**Source Traces:** `ephemeral/pages/gas-town-va-pipeline/implementation/audit-anti-loss-propagation.md` (5 end-to-end traces)

---

## HOW TO USE THIS MAP

For each enrichment you implement during Phase 3:
1. Find the file(s) you plan to edit
2. Search this map for mechanisms that live in those files
3. Check the fragility rating and edit guidance
4. If any mechanism is CRITICAL, get explicit confirmation before editing that section

---

## STRUCTURAL MECHANISMS (M-01 through M-06)

### M-01: Artifact Decomposition

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Monolithic spec files that exceed agent context windows, causing partial reads and missed instructions.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L91-102 | Layer architecture table mapping 9 layers to primary artifacts |
| MANIFEST.md | L179-342 | Artifact-to-agent routing table (Section 3) |
| MANIFEST.md | L912-958 | Appendix D: File Path Registry (complete file inventory) |
| gate-manifest.json | L7-15 | `files` object listing 5 gate split files |
| pa-deployment.md | L4-5 | Split declaration from monolithic PA protocol |

**Fragility:** ROBUST
**Edit guidance:** Safe to ADD new artifacts to the layer table or routing sections. Do NOT remove or rename existing artifacts without updating all cross-references. The decomposition pattern itself is structural -- adding enrichments to existing files is safe; splitting or merging files requires updating MANIFEST Section 3 + Appendix D + gate-manifest.json `files` object.

**Interdependencies:** M-07 (MANIFEST-driven routing) depends on M-01's artifact decomposition being accurate. If you add a new file, it must appear in both the routing table AND the file path registry.

---

### M-02: Dual-Channel Architecture

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Information loss through compression. Channel 1 (universal) passes through lossless; Channel 2 (content) is regenerated, not compressed.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L196-198 | DUAL-ROUTE PATTERN description + council mandate |
| MANIFEST.md | L764 | Council Contradiction F resolution: perception thresholds dual-route |
| MANIFEST.md | L795-797 | Cross-artifact verification: soul constraints dual-route |
| artifact-orchestrator.md | L233-242 | Channel 1 UNIVERSAL (lossless) and Channel 2 CONTENT (regenerated) definitions |
| artifact-builder-recipe.md | L62-63 | Direct file routes bypassing the brief (tokens.css, components.css) |

**Fragility:** ROBUST
**Edit guidance:** The dual-channel pattern is structural. Safe to add NEW dual-routed items (create entries in both the builder-facing artifact AND the gate-runner). DANGEROUS to change existing dual-route items to single-route (removing either the builder-facing or gate-facing copy). If adding an enrichment that creates a new threshold, consider whether it needs dual-routing.

**Interdependencies:** M-03 (direct file injection) and M-08 (dual-route pattern) are both implementations of M-02's architecture.

---

### M-03: Direct File Injection

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Reference files being compressed/summarized during brief assembly, losing CSS vocabulary and component definitions.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L853 | Appendix B: Builder receives "tokens.css + components.css + mechanism-catalog.md + value tables" |
| MANIFEST.md | L1044-1045 | Builder Prompt Template: value tables instruction with LOCKED background note |
| MANIFEST.md | L1083-1089 | Builder Prompt Template: reference file insertion points (tokens.css, components.css, mechanism-catalog.md, value-tables.md) |
| artifact-builder-recipe.md | L23-25 | Step 1.1: "Read tokens.css (183 lines)" |
| artifact-builder-recipe.md | L55-57 | Step 1.2: "Read components.css (290 lines)" |
| artifact-builder-recipe.md | L62-63 | "These two files are provided as direct file routes" |
| EXECUTION-TRACKER-TEMPLATE.md | L36-38 | Pre-flight checklist: tokens.css + components.css accessibility verification |
| EXECUTION-TRACKER-TEMPLATE.md | L118-123 | Phase 2 routing verification: builder received tokens/components/mechanism-catalog/value-tables |

**Fragility:** ROBUST
**Edit guidance:** Safe to add NEW direct-file-route entries (add to MANIFEST Appendix B routing table + Builder Prompt Template + EXECUTION-TRACKER Phase 2 verification). Do NOT change the "bypass the brief" language in artifact-builder-recipe.md L62-63 -- this is the mechanism's core. If adding a new enrichment file that should reach the builder uncompressed, model it after the value-tables pattern.

**Interdependencies:** M-15 (value tables) uses M-03's direct injection. Any new reference file for the builder needs the same treatment.

---

### M-04: Per-Agent Context Isolation

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Agent context contamination -- builder seeing gate thresholds (causes gaming), PA auditors seeing build intent (causes confirmation bias), weaver data leaking to auditors (anchors scoring).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L859-868 | Appendix B: "What each agent MUST NOT receive" exclusion table |
| MANIFEST.md | L301-304 | PA file split information isolation rules |
| pa-deployment.md | L92 | "Cross-validators do NOT see Auditor A's scores" |
| pa-deployment.md | L201-221 | Fresh-eyes principle: auditors receive ONLY screenshots + questions |
| pa-guardrails.md | L119-137 | Section 11: Fresh-eyes principle enforcement |
| pa-questions.md | L312-316 | Section 4 WARNING: "WEAVER AND ORCHESTRATOR USE ONLY (FIX-084 extension)" |
| artifact-orchestrator.md | L131-143 | Section 1: Information Isolation -- what builder does NOT receive |

**Fragility:** CRITICAL
**Edit guidance:** This mechanism is the MOST fragile during enrichment. If an enrichment adds new information to a spec file, you MUST verify it doesn't leak to the wrong agent. Specifically:
- Adding content to pa-questions.md Section 4 (quality framework): verify it's marked WEAVER USE ONLY
- Adding to artifact-builder-recipe.md: verify no gate thresholds in pass/fail format
- Adding to pa-deployment.md: verify no weaver calibration data leaks
- The exclusion table in MANIFEST L859-868 is the authoritative isolation spec. Update it if new exclusion rules are needed.

**Interdependencies:** M-20 (fresh-eyes) is a specialization of M-04 for PA auditors. M-12 (world-description framing) depends on M-04 to keep raw prohibitions away from the builder.

---

### M-05: Tiered Brief Structure

**Rating:** UPGRADED (was PARTIALLY EFFECTIVE)
**What it protects against:** Brief sections being under-budgeted, causing under-specified zones in the build. Previously the Content Map was compressed from 173 lines to ~12 lines.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L29-67 | **BV-01 GATE CODE:** Tier line budget enforcement (T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80% threshold) |
| gate-runner-core.js | L34-40 | BV-01 tier header regex patterns and minimum line counts |
| gate-runner-core.js | L57-60 | BV-01 80% threshold calculation: `count < config.min * 0.8` |
| MANIFEST.md | L28-33 | Quickstart step 4a: BV gate descriptions and failure protocol |
| MANIFEST.md | L404-408 | Phase 1 tier structure: T1 15 lines, T2 8 lines, T3 50 lines, T4 40 lines, CM 30-50 lines |
| gate-runner-preconditions.md | L14-19 | BV-01 specification (human-readable) |

**Fragility:** CRITICAL (gate-runner-core.js) / ROBUST (markdown specs)
**Edit guidance:** The BV-01 gate code in gate-runner-core.js L29-67 is FRAGILE JavaScript:
- The regex patterns in L35-39 (`/^#+\s*Tier\s*1/im` etc.) must match the actual tier header format in the TC Brief Template. If the template's tier headers change format, these regexes break SILENTLY.
- The `min` values (12, 6, 40, 32, 24) are the source-of-truth thresholds. Changing them in MANIFEST or gate-runner-preconditions.md without updating the JS code creates inconsistency.
- Safe to INCREASE minimum line counts. DANGEROUS to decrease (weakens the mechanism).
- If enrichment adds a new brief tier, a new entry must be added to the `tierHeaders` object in gate-runner-core.js AND the MANIFEST quickstart.

**Interdependencies:** M-17 (TC Brief Template) defines the tier structure that BV-01 enforces. They must stay synchronized.

---

### M-06: Suppressor Management

**Rating:** STILL PARTIAL
**What it protects against:** Quality-suppressing language patterns in the brief (e.g., "sample 2-4 mechanisms," "must not use," "verify that").

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L104-117 | **BV-04 GATE CODE:** Suppressor scan regexes for S-01, S-02, S-11, S-08 |
| gate-runner-core.js | L105-109 | Four suppressor regex patterns: `sample\s+\d+-\d+`, `must\s+not|shall\s+not|never\s+use`, `verify\s+that|fail\s+if|must\s+be`, `>=?\s*\d+\s+channels?` |
| artifact-orchestrator.md | L42 | "Suppressor removal status: All 20 historical suppressors INACTIVE in v3" |
| MANIFEST.md | L32 | BV-04 description in quickstart |
| gate-runner-preconditions.md | L37-46 | BV-04 specification (human-readable) |

**Fragility:** CRITICAL (gate-runner-core.js regex patterns)
**Edit guidance:** The BV-04 regexes in gate-runner-core.js L105-109 are the enforcement mechanism. They are FRAGILE:
- Adding enrichment content to any brief-facing artifact that uses phrases matching these regexes will trigger BV-04 FAIL. For example, if an enrichment instruction says "verify that the density arc increases," BV-04 will catch `verify\s+that` and fail the brief.
- SAFE to add NEW suppressor patterns to BV-04 (append to the `suppressorPatterns` array).
- DANGEROUS to modify existing regex patterns (could weaken suppressor detection).
- When writing enrichment content for brief-facing artifacts, use RECIPE verbs (Build, Create, Deploy, Assess) not CHECKLIST verbs (Verify, Fail if, Must be).

**Interdependencies:** M-11 (recipe format) and M-12 (world-description framing) both contribute to suppressor management. BV-03 enforces recipe format; BV-04 catches residual suppressors.

---

## ROUTING MECHANISMS (M-07 through M-10)

### M-07: MANIFEST-Driven Routing

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Wrong files reaching wrong agents, causing context contamination or missing inputs.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L849-857 | Appendix B: Positive routing table (what each agent receives) |
| MANIFEST.md | L859-868 | Appendix B: Negative routing table (what each agent MUST NOT receive) |
| MANIFEST.md | L179-342 | Section 3: Complete artifact-to-agent routing table with actual headers |
| EXECUTION-TRACKER-TEMPLATE.md | L54-58 | Phase 0 routing verification checklist |
| EXECUTION-TRACKER-TEMPLATE.md | L83-91 | Phase 1 routing verification checklist |
| EXECUTION-TRACKER-TEMPLATE.md | L117-127 | Phase 2 routing verification checklist |
| EXECUTION-TRACKER-TEMPLATE.md | L190-195 | Phase 3B routing verification checklist |

**Fragility:** ROBUST
**Edit guidance:** Safe to ADD new routing entries to either table. When adding enrichment content to an artifact, check the Section 3 routing table to verify which agent receives that artifact section. The EXECUTION-TRACKER checklists should be updated if new routing requirements are added.
- Adding a new file: add to both Appendix B tables AND Appendix D file registry.
- Modifying an existing file: check Section 3 to understand which agents see modified sections.

**Interdependencies:** M-01 (artifact decomposition) and M-04 (context isolation) both depend on M-07's routing accuracy.

---

### M-08: Dual-Route Pattern

**Rating:** UPGRADED (was PARTIALLY EFFECTIVE)
**What it protects against:** PASS* verdicts (conditional passes that aren't truly binary). The cold-color gate previously had a "PASS*" that violated the binary principle.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L234-277 | **GR-05 CODE:** Warm palette compliance (cold color detection: `B > R+10 AND B > G+10`) |
| gate-runner-core.js | L246-248 | `isCold()` function: the binary cold/warm classifier |
| MANIFEST.md | L196-198 | DUAL-ROUTE PATTERN description |
| MANIFEST.md | L795-796 | Cross-artifact verification: soul constraints dual-route |
| artifact-builder-recipe.md | L108-120 | Builder receives warm palette as calibration context |

**Fragility:** FRAGILE (GR-05 isCold heuristic)
**Edit guidance:** The `isCold()` function in gate-runner-core.js L246-248 uses a SIMPLE heuristic (`B > R+10 AND B > G+10`). This is a proxy, not a definitive classifier. If enrichment introduces new color recommendations:
- Verify new colors pass the isCold test
- Colors that are perceptually cold but pass the formula (e.g., cool grays with balanced RGB) will slip through
- Safe to ADD new color checks. Dangerous to modify the isCold formula without validating against the full palette.

**Interdependencies:** M-02 (dual-channel) is the architecture; M-08 is an implementation. Both builder calibration AND gate check must agree.

---

### M-09: Agent Prompt Templates

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Agents receiving wrong instructions, missing context, or contaminated context.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L975-1170 | Appendix E: ALL agent prompt templates (Content Analyst, Brief Assembler, Builder, PA Auditors, Integrative Auditor, Weaver) |
| MANIFEST.md | L1037-1090 | Builder prompt template (most critical -- includes reference file insertion points) |
| MANIFEST.md | L1098-1119 | PA Auditor prompt template |
| MANIFEST.md | L1138-1170 | Weaver prompt template (verdict logic, calibration) |
| pa-deployment.md | L42-52 | Auditor assignment table (which questions go to which auditor) |
| pa-deployment.md | L100-104 | Agent model requirements table |
| pa-deployment.md | L106-119 | Evidence format + completion manifest requirements |

**Fragility:** FRAGILE (prompt templates) / ROBUST (assignment tables)
**Edit guidance:** The prompt templates in MANIFEST Appendix E are FRAGILE because they contain:
- `{VARIABLE_NAME}` placeholders that the orchestrator fills -- do not break these
- Exact file reference ordering (Builder reads files "IN ORDER")
- Hard-coded question counts (PA Auditor prompts reference assignment counts)
If enrichment adds a new reference file for the builder:
- Add it to the Builder prompt template L1037-1090 in the correct read-order position
- Add it to MANIFEST L1083-1089 as a reference file insertion point
- Update the PA auditor assignments in pa-deployment.md if new questions are added

**Interdependencies:** M-04 (context isolation) constrains what can go in each template. M-07 (routing) defines the file lists in templates.

---

### M-10: Content Map Regeneration

**Rating:** STILL PARTIAL
**What it protects against:** Content being compressed (lossy) rather than regenerated (lossless). The original pipeline compressed 173-line content maps to ~12 lines.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L39 | BV-01 ContentMap tier: `{ pattern: /^#+\s*Content\s*Map/im, min: 24 }` |
| MANIFEST.md | L377-378 | Phase 0 output: Content Map ~30-50 lines |
| MANIFEST.md | L986-1003 | Content Analyst prompt template (7 operations) |
| artifact-orchestrator.md | L192-194 | Content Map output specification |

**Fragility:** FRAGILE (BV-01 ContentMap regex)
**Edit guidance:** The ContentMap regex in gate-runner-core.js L39 matches `^#+\s*Content\s*Map`. If the Content Map section header in the brief changes format (e.g., from "# Content Map" to "## Content Analysis"), BV-01 will fail to detect it and report 0 lines. Safe to increase the `min: 24` threshold. The Content Analyst prompt at MANIFEST L986-1003 defines the 7 operations -- enrichments can safely add operations 8+ without breaking existing ones.

**Interdependencies:** M-05 (tiered brief) includes the ContentMap as a tier. Both must agree on the header format.

---

## FORMAT MECHANISMS (M-11 through M-18)

### M-11: Recipe Format

**Rating:** HIGHLY EFFECTIVE (confirmed, with programmatic enforcement)
**What it protects against:** Checklist format in the brief ("Verify X, Fail if Y") which produces FLAT output.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L93-102 | **BV-03 GATE CODE:** Recipe format verification (3:1 ratio enforcement) |
| gate-runner-core.js | L94 | Recipe verb regex: `Build|Create|Derive|Map|Read|Select|Deploy|Assess` |
| gate-runner-core.js | L95 | Checklist verb regex: `Verify|Fail if|Must be|Ensure|Check that` |
| gate-runner-core.js | L96 | Ratio calculation with Infinity handling |
| artifact-builder-recipe.md | L5 | "Format: RECIPE (sequenced steps with Read/Select/Deploy/Assess verbs)" |
| artifact-builder-recipe.md | L13 | "This is a sequenced recipe, not a checklist" |
| MANIFEST.md | L31 | BV-03 description |
| MANIFEST.md | L234 | "FORMAT IS CRITICAL" note on recipe vs checklist |
| gate-runner-preconditions.md | L30-35 | BV-03 specification |

**Fragility:** CRITICAL (gate-runner-core.js verb lists)
**Edit guidance:** The BV-03 verb lists at L94-95 are the ENFORCEMENT mechanism:
- If enrichment adds new recipe-style verbs to the builder recipe (e.g., "Compose," "Calibrate"), add them to the recipe verb regex at L94 to ensure they count as recipe verbs.
- If enrichment language accidentally uses checklist verbs ("Ensure the density arc..." instead of "Build the density arc..."), BV-03 will detect it.
- The 3:1 ratio at L96 is the threshold. SAFE to increase (stricter). DANGEROUS to decrease.
- When writing enrichment content for brief-facing artifacts: use Build/Create/Derive/Map/Read/Select/Deploy/Assess. Avoid Verify/Fail if/Must be/Ensure/Check that.

**Interdependencies:** M-06 (suppressor management) BV-04 catches overlapping patterns. M-12 (world-description) depends on recipe format.

---

### M-12: World-Description Framing

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Prohibition rigidity (S-02) -- when the builder receives "do NOT use X" instead of "your world has property Y," it becomes overly cautious.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L188-190 | Soul constraints routing: extract ONLY "World-description" field, NOT "Gate check" / "CSS rule" |
| MANIFEST.md | L198 | CRITICAL note: builder must NOT receive raw prohibition list |
| MANIFEST.md | L863-864 | Exclusion table: Builder must not receive "Raw prohibition list / 'Gate check' or 'CSS rule' fields from SC tables" |
| MANIFEST.md | L879 | Glossary: soul constraints "Delivered as world-description to builder, binary checks to gate runner" |
| artifact-builder-recipe.md | L13 | "80% creative authority within identity constraints -- recipe provides PURPOSE (why) and VOCABULARY (what's available)" |
| artifact-orchestrator.md | L131-143 | Information isolation: builder must NOT receive prohibition list, count-gates, gate thresholds |
| gate-runner-core.js | L107 | BV-04 checks for S-02 pattern: `must\s+not|shall\s+not|never\s+use` |

**Fragility:** FRAGILE (requires discipline in enrichment writing)
**Edit guidance:** This mechanism is FRAGILE because it depends on HUMAN DISCIPLINE in writing:
- Any enrichment content that reaches the builder (via brief) must use world-description framing, not prohibition framing
- BAD: "The builder must NOT use more than 4 background colors" (prohibition)
- GOOD: "A viewport comfortably holds 4 distinct background rooms" (world-description)
- BV-04 (L107) catches the worst violations ("must not," "shall not," "never use") but cannot detect subtler prohibition framing
- When writing enrichments, test mentally: "If the builder reads this, will they feel constrained or inspired?"

**Interdependencies:** M-04 (context isolation) keeps raw SC tables away from builder. M-06 (suppressor management) BV-04 catches remaining prohibitions.

---

### M-13: Binary Rules

**Rating:** UPGRADED (was PARTIALLY EFFECTIVE)
**What it protects against:** PASS* (conditional pass) violations, inconsistent verdict logic, and gate coverage gaps.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L1-20 | Execution order comment block (6 functions, 35 gates) |
| gate-runner-core.js | L752-778 | Verdict summary logic in runGateRunner() |
| gate-runner-core.js | L1330-1374 | **GR-48 CODE:** Gate coverage completeness (17 REQUIRED + >=4/8 RECOMMENDED) |
| gate-runner-core.js | L1331-1340 | GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays |
| gate-manifest.json | L55-59 | Verdict logic definition (REBUILD/REFINE/INCOMPLETE/PROCEED_TO_PA) |
| gate-manifest.json | L18-52 | Tier definitions (REQUIRED/RECOMMENDED/ADVISORY/BV/DIAGNOSTIC) |
| gate-manifest.json | L62-111 | Execution order (7 steps) |
| gate-runner-spec.md | L51-57 | Verdict logic (human-readable) |
| MANIFEST.md | L275-285 | Verdict logic priority order |

**Fragility:** CRITICAL (gate-runner-core.js) / FRAGILE (gate-manifest.json)
**Edit guidance:** Multiple coordinated changes needed if adding/removing gates:
1. gate-runner-core.js: Add gate code in the appropriate function (runGateRunner, runAntiPatternGates, or runWave2Gates)
2. gate-runner-core.js L1331-1340: Add gate ID to REQUIRED_GATES or RECOMMENDED_GATES array in GR-48
3. gate-manifest.json L18-52: Add gate to correct tier
4. gate-manifest.json L62-111: Add to execution order if it requires a new step
5. gate-runner-spec.md: Add human-readable specification row
6. MANIFEST.md L244-267: Update Section 3 routing table
7. MANIFEST.md L275-285: Update verdict logic if new category
- If ANY of these updates are missed, GR-48 will either miss the new gate (no coverage check) or falsely report missing coverage.
- MOST DANGEROUS edit: changing the REQUIRED_GATES array in GR-48 without changing gate-manifest.json tiers -- creates a contradiction.

**Interdependencies:** M-19 (programmatic gate verification) is the implementation of M-13's binary principle. GR-48 self-verifies coverage. GR-49 verifies result integrity.

---

### M-14: Perception Calibration Table

**Rating:** UPGRADED (was PARTIALLY EFFECTIVE)
**What it protects against:** Background delta clustering (all deltas in 15-27 RGB range, technically passing but perceptually flat).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L1170-1223 | **GR-51 CODE:** Background delta distribution (>=50% above 25 RGB, stddev >=8, middle boundaries high) |
| gate-runner-core.js | L1193-1214 | GR-51 calculation: above25Ratio, mean, variance, stddev, middleHasHighDelta |
| gate-runner-core.js | L69-91 | BV-02: Background delta verification in brief (>=15 RGB) |
| gate-runner-spec.md | L132 | GR-51 specification |
| pa-questions.md | L362-377 | Appendix A: Perception threshold reference table |
| artifact-builder-recipe.md | L108-124 | Builder calibration: "15 RGB = FLOOR, 25-50 = COMPOSITIONAL, 50+ = DRAMATIC" |

**Fragility:** CRITICAL (gate-runner-core.js GR-51 code)
**Edit guidance:** GR-51 is the MOST SOPHISTICATED gate code with three sub-checks:
1. `above25Ratio >= 0.50` -- at least half of deltas must exceed 25 RGB
2. `stddev >= 8` -- deltas must have meaningful spread
3. `middleHasHighDelta` -- middle boundaries (25th-75th percentile) must include at least one high delta
- SAFE to increase thresholds (stricter). DANGEROUS to decrease.
- If enrichment changes zone background recommendations, verify the new colors satisfy GR-51 DISTRIBUTION checks, not just GR-11 minimum (15 RGB).
- The warm-palette note in pa-questions.md L377 ("1.3-1.5x standard threshold, effective 20 RGB") is advisory guidance, not programmatically enforced.

**Interdependencies:** M-15 (value tables) provides pre-validated color pairs that satisfy GR-51. M-08 (dual-route) ensures both builder calibration and gate check agree.

---

### M-15: Value Tables

**Rating:** STILL PARTIAL (advisory, not enforced)
**What it protects against:** Builder choosing perceptually-invalid CSS values (colors too similar, spacing too uniform).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L853 | Appendix B: Builder receives value tables (~550 lines) |
| MANIFEST.md | L1044-1045 | Builder Prompt Template: value tables instruction with LOCKED note |
| MANIFEST.md | L1089 | Builder Prompt Template: `{value-tables.md content -- optional, include if token budget allows}` |
| artifact-builder-recipe.md | L122 | Step 2.1: "See artifact-value-tables.md for 20 pre-computed warm color pairs" |

**Fragility:** FRAGILE (the "optional" flag is dangerous)
**Edit guidance:** The value tables are marked "optional" at MANIFEST L1089, which means the orchestrator might omit them under token pressure. This is the weakest point:
- If enrichment adds new value table content, ensure it stays under reasonable token budget (~226 lines current, ~1800 tokens)
- SAFE to modify value table CONTENT (adding/removing color pairs, spacing scales)
- DANGEROUS to remove the value tables file reference from MANIFEST Appendix B
- Consider whether enrichment should promote value tables from "optional" to REQUIRED (the propagation audit recommends this as E-012)

**Interdependencies:** M-03 (direct file injection) is the delivery mechanism. M-14 (perception calibration) GR-51 provides the backstop if value tables are ignored.

---

### M-16: Conviction Statement

**Rating:** UPGRADED (was INEFFECTIVE)
**What it protects against:** Missing design intent documentation, which is needed for the REBUILD path (a fresh builder needs to know what was intended).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L1136-1168 | **GR-50 CODE:** Conviction statement existence check (`<!-- CONVICTION:` with >=3 sentences) |
| gate-runner-core.js | L1139 | GR-50 regex: `<!--\s*CONVICTION:([\s\S]*?)-->/i` |
| gate-runner-core.js | L1148-1150 | GR-50 keyword checks: metaphor, arc, strategy |
| MANIFEST.md | L423 | "CRITICAL -- Builder conviction statement" as separate file requirement |
| MANIFEST.md | L1053-1057 | Builder Prompt Template: conviction statement format |
| MANIFEST.md | L1064-1073 | Builder Prompt Template: self-evaluation block format |
| artifact-orchestrator.md | L377-379 | Builder build sequence Step 1: conviction statement |

**Fragility:** FRAGILE (GR-50 regex and keyword matching)
**Edit guidance:** GR-50 checks for:
1. HTML comment matching `<!-- CONVICTION:` (case-insensitive)
2. >=3 sentences (split by `. ` or `.$`)
3. Keywords: metaphor, arc/emotional/journey, strateg/composition/approach
- If enrichment changes the conviction format (e.g., requiring 5 sentences instead of 3), update the `sentences >= 3` threshold at gate-runner-core.js L1159
- If enrichment adds new required conviction topics, add keyword checks at L1148-1150
- GR-50 is ADVISORY tier -- failure does not block the pipeline. To make it REQUIRED, update gate-manifest.json tiers.
- The propagation audit found a 35% loss probability for the SEPARATE FILE capture (no gate verifies the orchestrator extracted conviction to a separate file). See E-010 recommendation.

**Interdependencies:** M-23 (REBUILD not FIX) depends on the conviction being captured for the REBUILD path.

---

### M-17: TC Brief Template

**Rating:** HIGHLY EFFECTIVE (confirmed, with enforcement)
**What it protects against:** Brief structure deviating from the calibrated tier format, causing under-specified or mis-structured briefs.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L20 | Prerequisite: TC Brief Template exists |
| MANIFEST.md | L209-217 | Brief Template Structure routing (TOC #10) |
| MANIFEST.md | L1006-1032 | Brief Assembler prompt template |
| gate-runner-core.js | L29-67 | BV-01 enforces tier line budgets |
| gate-runner-core.js | L93-102 | BV-03 enforces recipe format |

**Fragility:** ROBUST (template file) / CRITICAL (BV-01 regex must match template headers)
**Edit guidance:** The TC Brief Template is a STANDALONE file (~165 lines). Safe to edit its CONTENT (adding richer compositional guidance, adjusting disposition framing). DANGEROUS to change its TIER HEADER FORMAT without updating BV-01 regexes in gate-runner-core.js L35-39. The headers must match: `^#+\s*Tier\s*[1234]` and `^#+\s*Content\s*Map`.

**Interdependencies:** M-05 (tiered brief structure) BV-01 enforces the template's line budgets. M-11 (recipe format) BV-03 enforces the template's voice.

---

### M-18: Worked Examples

**Rating:** STILL PARTIAL
**What it protects against:** Agents misinterpreting abstract instructions by lacking concrete examples of correct input/output.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L905 | Glossary: Worked Examples definition |
| MANIFEST.md | L948 | Appendix D: artifact-worked-examples.md path |

**Fragility:** ROBUST (minimal integration points)
**Edit guidance:** Worked examples are a reference document with few integration points. Safe to add new examples (Phase 2 brief assembly, counter-examples). The file is not programmatically checked by any gate. Enrichment can freely enhance this without risk.

**Interdependencies:** None significant. This is a standalone reference.

---

## VERIFICATION MECHANISMS (M-19 through M-25)

### M-19: Programmatic Gate Verification

**Rating:** UPGRADED (was PARTIALLY EFFECTIVE)
**What it protects against:** Gates not being executed (coverage gap), inconsistent results, verdict contradictions.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| gate-runner-core.js | L1-20 | **EXECUTION ORDER COMMENT:** The authoritative execution sequence (6 steps) |
| gate-runner-core.js | L29-120 | `runBriefVerification()` -- 4 BV gates |
| gate-runner-core.js | L128-779 | `runGateRunner()` -- 17 core gates + verdict summary |
| gate-runner-core.js | L786-1038 | `runAntiPatternGates()` -- 6 anti-pattern gates |
| gate-runner-core.js | L1045-1323 | `runWave2Gates()` -- 6 Wave 2 gates |
| gate-runner-core.js | L1330-1374 | `runGateCoverage()` -- GR-48 meta-gate |
| gate-runner-core.js | L1377-1416 | `checkGateResultIntegrity()` -- GR-49 meta-gate |
| gate-runner-core.js | L1418-1437 | Usage instructions comment block |
| gate-manifest.json | L1-159 | Complete gate manifest (tiers, execution order, verdict logic, notes) |
| gate-runner-spec.md | L1-188 | Human-readable gate specifications |

**Fragility:** CRITICAL (entire gate-runner-core.js is a coordinated system)
**Edit guidance:** gate-runner-core.js is the MOST FRAGILE file in the pipeline. Any enrichment that touches it must:
1. Maintain the function boundary structure (6 functions, each returns results array)
2. Maintain the `{ gate, name, status, measured, threshold }` result object schema
3. Add new gates to the CORRECT function based on category (identity/perception/anti-pattern/wave2/meta)
4. Update GR-48's REQUIRED_GATES or RECOMMENDED_GATES arrays
5. Use `window.isRenderedElement()` helper for DOM queries (defined at L135-146)
6. Use `await page.evaluate(() => {...})` pattern for all DOM access
- Test any JS changes by running the gate runner against a known HTML file
- The usage instructions at L1418-1437 must match the actual function signatures

**Interdependencies:** M-13 (binary rules) is the principle; M-19 is the implementation. GR-48 self-verifies. GR-49 verifies integrity.

---

### M-20: Fresh-Eyes PA Principle

**Rating:** HIGHLY EFFECTIVE (confirmed, strengthened by Wave 3 split)
**What it protects against:** PA auditors being anchored by build intent, mechanism counts, or expected scores -- producing confirmation bias instead of genuine assessment.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| pa-deployment.md | L201-221 | Section 3: Fresh-eyes principle (full specification) |
| pa-deployment.md | L217-221 | "The auditor receives ONLY: screenshots, PA questions, nothing else" |
| pa-guardrails.md | L119-148 | Section 11: Fresh-eyes enforcement (Three Laws) |
| pa-questions.md | L312-316 | Section 4 WARNING: weaver/orchestrator use only |
| MANIFEST.md | L322-323 | "FRESH-EYES IS NON-NEGOTIABLE" |
| MANIFEST.md | L866-868 | Exclusion table for PA auditors |

**Fragility:** ROBUST (structural enforcement via file split)
**Edit guidance:** The Wave 3 file split structurally enforces fresh-eyes by SEPARATING auditor-facing content (pa-questions.md + pa-guardrails.md) from weaver-facing content (pa-weaver.md) and orchestrator-facing content (pa-deployment.md). This makes accidental leaks harder.
- SAFE to add content to pa-questions.md Sections 1-3 (auditor-facing) or pa-guardrails.md
- DANGEROUS to add calibration data, tier definitions, or quality targets to pa-questions.md Section 4 or pa-guardrails.md (must stay WEAVER USE ONLY)
- If enrichment adds new PA questions: add to pa-questions.md, assign to auditor in pa-deployment.md, update question counts

**Interdependencies:** M-04 (context isolation) is the broader principle. M-22 (9-auditor deployment) depends on fresh-eyes.

---

### M-21: Screenshot Pre-Capture

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Playwright contention between multiple auditor agents trying to take screenshots simultaneously.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L35 | Quickstart step 6: screenshot protocol |
| MANIFEST.md | L324 | "SCREENSHOT PRE-CAPTURE PATTERN" |
| MANIFEST.md | L459-476 | Phase 3A detailed steps |
| pa-deployment.md | L139-196 | Section 2: Complete screenshot protocol (capture sequence, naming, expected counts) |
| EXECUTION-TRACKER-TEMPLATE.md | L142-152 | Phase 3A screenshot capture checklist |

**Fragility:** ROBUST
**Edit guidance:** Safe to modify screenshot counts, viewport widths, or naming conventions. The pattern itself (orchestrator captures ALL before spawning auditors) is structural and not fragile. If enrichment adds a new viewport width (e.g., 375px for mobile), add to: MANIFEST L35, pa-deployment.md viewport lists, EXECUTION-TRACKER Phase 3A checklist.

**Interdependencies:** M-22 (9-auditor deployment) depends on screenshots being available before auditor spawn.

---

### M-22: 9-Auditor Deployment

**Rating:** HIGHLY EFFECTIVE (confirmed, with PA-05 cross-validation)
**What it protects against:** Single-evaluator risk (one auditor's bias determining the entire verdict).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| pa-deployment.md | L28-31 | Architecture overview: 11 agents total (9 + 1 integrative + 1 weaver) |
| pa-deployment.md | L42-52 | **AUDITOR ASSIGNMENT TABLE:** 69 questions across 9 auditors (A-I) |
| pa-deployment.md | L72-92 | PA-05 distributed cross-validation protocol (4 cross-validators) |
| pa-deployment.md | L106-119 | Evidence format + completion manifest requirements |
| pa-guardrails.md | L44-54 | Section 4: PA-05 cross-validation auditor instructions |
| pa-manifest.md | L22-34 | Auditor report receipt checklist |
| pa-manifest.md | L40-47 | PA-05 cross-validation status table |
| MANIFEST.md | L149-157 | Phase 3B agent roster (all 9 auditors with question assignments) |

**Fragility:** FRAGILE (pa-deployment.md assignment table is the source of truth)
**Edit guidance:** The auditor assignment table at pa-deployment.md L42-52 is the AUTHORITATIVE routing for PA questions. If enrichment adds new PA questions:
1. Add question definition to pa-questions.md
2. Assign to an auditor in pa-deployment.md L42-52 (check load balance -- C and D already have 11 each)
3. Update total count (currently 69)
4. Update MANIFEST L149-157 auditor question lists
5. Update pa-manifest.md auditor report checklist
6. Update pa-guardrails.md if the question has special scoring rules
- The cross-validation table at L72-92 maps PA-05 sub-criteria to specific cross-validator auditors. Do NOT change these assignments without understanding the domain logic.
- Question count totals appear in MULTIPLE locations (pa-deployment.md L54, pa-manifest.md L36, MANIFEST L159). ALL must be updated together.

**Interdependencies:** M-20 (fresh-eyes) constrains what auditors receive. M-21 (screenshots) provides their input. M-09 (prompt templates) formats their prompts.

---

### M-23: REBUILD Not FIX

**Rating:** STILL PARTIAL (defined but manual)
**What it protects against:** Degradation from fix cycles (patching one issue breaks composition elsewhere).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L40-42 | Single-pass behavior: REFINE/REBUILD are output labels, not automatic re-execution |
| MANIFEST.md | L275-285 | Verdict logic priority order |
| MANIFEST.md | L519-521 | "Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review" |
| MANIFEST.md | L605 | Circuit breaker: max 1 REBUILD + 1 REFINE |
| gate-manifest.json | L55-59 | Verdict logic formal definition |
| artifact-orchestrator.md | L107-115 | REBUILD with fresh builder (not FIX with same builder) |

**Fragility:** ROBUST (conceptual mechanism, not code)
**Edit guidance:** Safe to modify verdict thresholds or add new verdict categories. The mechanism is DEFINED but not IMPLEMENTED as automatic re-execution (single-pass default means human initiates new runs). Enrichments can safely modify verdict logic in gate-manifest.json L55-59 and MANIFEST L275-285, but must keep both in sync.

**Interdependencies:** M-16 (conviction statement) provides the input for REBUILD (fresh builder reads the conviction). M-13 (binary rules) provides the verdict logic.

---

### M-24: Mode Selection by Orchestrator

**Rating:** HIGHLY EFFECTIVE (confirmed)
**What it protects against:** Builder receiving conflicting mode signals, or mode being misaligned with content affordance.

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L26 | Quickstart step 3: determine mode |
| MANIFEST.md | L344 | Mode selection: builder receives ONE mode, implicit in recipe format |
| MANIFEST.md | L383-389 | Phase 0.5: Mode Selection |
| MANIFEST.md | L886-887 | Glossary: APPLIED and COMPOSED mode definitions |
| artifact-orchestrator.md | L297-347 | Section 4: Complete mode selection logic |
| artifact-orchestrator.md | L301 | "The builder never sees both modes as a choice" |
| artifact-orchestrator.md | L313-323 | When to select APPLIED vs COMPOSED |
| EXECUTION-TRACKER-TEMPLATE.md | L67-69 | Mode selection tracking |

**Fragility:** ROBUST
**Edit guidance:** Safe to add new mode selection criteria or refine the APPLIED/COMPOSED distinction. The key constraint is that the builder sees ONE mode implicit in the brief format, not as a label. If enrichment changes mode criteria in artifact-orchestrator.md Section 4, verify consistency with MANIFEST L383-389 and glossary L886-887.

**Interdependencies:** None highly fragile. Mode flows from content analysis to brief assembly to builder.

---

### M-25: Honest Complexity Accounting

**Rating:** STILL PARTIAL (documented, not enforced)
**What it protects against:** Underestimating builder input complexity (claiming "73 lines" when actual is ~3,600).

| File | Line Range | What Lives Here |
|------|-----------|-----------------|
| MANIFEST.md | L346-356 | Honest complexity accounting table (~3,600 lines breakdown) |
| MANIFEST.md | L750 | Council mandate CF-01 |
| artifact-orchestrator.md | L147-157 | Honest complexity accounting (duplicate) |
| artifact-builder-recipe.md | L14-15 | "Per council verdict (CF-01): this recipe is part of ~3,600 total builder input lines" |

**Fragility:** ROBUST (documentation mechanism, not code)
**Edit guidance:** Safe to update line counts if enrichment changes file sizes. The accounting table in MANIFEST L346-356 and artifact-orchestrator.md L147-157 must stay synchronized. No gate enforces these totals at execution time -- they are documentation only.

**Interdependencies:** None significant. This is awareness, not enforcement.

---

## INTERDEPENDENCY MAP

These mechanism clusters are tightly coupled. Breaking one risks breaking the others.

### Cluster 1: Brief Quality Enforcement (BV gates)
**Members:** M-05 (tiered brief), M-06 (suppressor management), M-11 (recipe format), M-17 (TC brief template)
**Shared code:** gate-runner-core.js L29-120 (BV-01 through BV-04)
**Risk:** Any change to brief format must be coordinated across ALL four mechanisms.

### Cluster 2: Builder Information Barrier
**Members:** M-04 (context isolation), M-08 (dual-route), M-12 (world-description framing)
**Shared enforcement:** MANIFEST Appendix B exclusion table, BV-04 suppressor scan
**Risk:** Enrichment content reaching the builder must avoid prohibition framing AND gate-format thresholds.

### Cluster 3: Gate Verification System
**Members:** M-13 (binary rules), M-14 (perception calibration), M-19 (programmatic verification)
**Shared code:** gate-runner-core.js (entire file), gate-manifest.json (tiers + verdict logic)
**Risk:** Adding/removing gates requires coordinated updates in 5-7 locations (see M-13 edit guidance).

### Cluster 4: PA Audit Integrity
**Members:** M-20 (fresh-eyes), M-21 (screenshots), M-22 (9-auditor deployment)
**Shared enforcement:** pa-deployment.md (assignment table), pa-guardrails.md (constraints)
**Risk:** Adding PA questions requires updates in 5+ locations (see M-22 edit guidance).

### Cluster 5: Routing Accuracy
**Members:** M-01 (decomposition), M-03 (direct injection), M-07 (MANIFEST routing), M-09 (prompt templates)
**Shared spec:** MANIFEST.md (Section 3 + Appendix B + Appendix D + Appendix E)
**Risk:** Adding new files or changing routing requires updates in all four MANIFEST sections.

---

## FILE-LEVEL FRAGILITY SUMMARY

For quick reference during enrichment implementation:

| File | Lines | Overall Fragility | Safe Edits | Dangerous Edits |
|------|-------|-------------------|-----------|-----------------|
| **gate-runner-core.js** | 1,437 | **CRITICAL** | Adding new gate functions following existing patterns | Modifying regex patterns, changing threshold values, altering result schema, editing REQUIRED/RECOMMENDED arrays |
| **gate-manifest.json** | 159 | **FRAGILE** | Adding gates to tier arrays | Changing verdict logic, modifying execution order, altering tier classifications |
| **MANIFEST.md** | ~1,193 | **FRAGILE** (routing/templates), ROBUST (prose) | Adding routing entries, updating line counts | Changing Appendix B exclusion rules, modifying prompt templates, altering verdict logic |
| **pa-deployment.md** | 237 | **FRAGILE** (assignment table) | Updating model recommendations | Changing auditor assignments, modifying cross-validation pairs, altering question counts |
| **pa-questions.md** | 418 | ROBUST (Sections 1-3), **FRAGILE** (Section 4) | Adding questions to Sections 1-3 | Adding calibration data to auditor-visible sections |
| **pa-guardrails.md** | 151 | ROBUST | Adding guardrail rules | Adding weaver/calibration content (violates fresh-eyes) |
| **pa-manifest.md** | 89 | ROBUST | Updating checklist counts | N/A |
| **artifact-builder-recipe.md** | ~934 | ROBUST | Adding recipe steps, enriching guidance | Using checklist verbs, including gate thresholds |
| **artifact-orchestrator.md** | ~1,058 | ROBUST | Adding orchestrator instructions | Contradicting verdict logic in MANIFEST |
| **gate-runner-spec.md** | 188 | ROBUST | Adding gate spec rows | Contradicting thresholds in gate-runner-core.js |
| **gate-runner-preconditions.md** | 83 | ROBUST | Updating BV descriptions | Contradicting thresholds in gate-runner-core.js |
| **EXECUTION-TRACKER-TEMPLATE.md** | 328 | ROBUST | Adding verification checkboxes | N/A |

---

## ENRICHMENT IMPLEMENTATION CHECKLIST

Before applying any enrichment during Phase 3, verify:

- [ ] Does the enrichment touch gate-runner-core.js? If yes, verify GR-48 arrays are updated.
- [ ] Does the enrichment add brief-facing content? If yes, verify NO checklist verbs (BV-03), NO suppressor patterns (BV-04), NO prohibition framing (M-12).
- [ ] Does the enrichment add auditor-facing content? If yes, verify NO calibration data, NO tier definitions, NO build intent (fresh-eyes M-20).
- [ ] Does the enrichment change tier header format? If yes, verify BV-01 regexes match (gate-runner-core.js L35-39).
- [ ] Does the enrichment add a new file? If yes, add to MANIFEST Section 3 + Appendix B + Appendix D.
- [ ] Does the enrichment add a new PA question? If yes, update pa-deployment.md assignments + MANIFEST agent roster + pa-manifest.md checklist + question totals in ALL locations.
- [ ] Does the enrichment add a new gate? If yes, update gate-runner-core.js + gate-manifest.json + gate-runner-spec.md + GR-48 arrays + MANIFEST Section 3.
- [ ] Does the enrichment modify verdict logic? If yes, update gate-manifest.json + MANIFEST L275-285 + gate-runner-core.js verdict summary.
- [ ] Does the enrichment change any threshold value? If yes, update in ALL locations (gate-runner-core.js code + gate-runner-spec.md + gate-runner-preconditions.md + MANIFEST quickstart).

---

*Map complete. 25 mechanisms mapped to specific file locations and line ranges. 5 interdependency clusters identified. Per-file fragility ratings provided. Enrichment implementation checklist included.*

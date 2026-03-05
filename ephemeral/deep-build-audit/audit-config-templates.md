# Audit: Config + Corpus Paths + Templates

**Auditor:** Config-Templates agent
**Date:** 2026-02-28
**Scope:** Checklist F (F.1-F.4), Checklist G (G.1-G.10), contradiction K03, per-role invocation table
**Plan ref:** `~/.claude/plans/sorted-finding-honey.md` lines 275-298, 436-450, 471-564, 1198-1215

---

## Summary

| Area | Verdict |
|------|---------|
| F.1 corpus.ts (subsets + paths) | **PARTIAL** -- 2 findings |
| F.2 constants.ts | **IMPLEMENTED** -- all values match |
| F.3 paths.ts | **PARTIAL** -- 2 broken hardcoded paths |
| F.4 pa-questions.ts | **IMPLEMENTED** -- exact match |
| G.1-G.10 Templates (10 files) | **IMPLEMENTED** -- 3 findings (non-blocking) |
| K03 resolution compliance | **IMPLEMENTED** |

**Overall: PARTIAL -- 4 findings total, 2 BLOCKING (broken paths), 2 NON-BLOCKING (corpus count, missing variable)**

---

## F.1: config/corpus.ts — Corpus Subsets + Filesystem Paths

**Verdict: PARTIAL**

### What matches plan:
- 7 subsets defined (S1-S7) -- CORRECT
- 3 infrastructure files loaded every pass -- CORRECT
- `getAllCorpusFilePaths()` utility for validation -- CORRECT
- `infrastructureFiles` reference in each subset -- CORRECT
- Subset names and thematic groupings match plan's design rationale

### Filesystem verification: ALL 37 FILES EXIST

**Infrastructure (3):**
| Path | Status |
|------|--------|
| `design-system/compositional-core/grammar/mechanism-catalog.md` | EXISTS |
| `design-system/compositional-core/components/components.css` | EXISTS |
| `design-system/compositional-core/vocabulary/tokens.css` | EXISTS |

**S1 - Research Foundation (5 files):**
| Path | Status |
|------|--------|
| `design-system/research/R3-DENSITY-DIMENSIONS.md` | EXISTS |
| `design-system/research/R4-AXIS-INNOVATIONS.md` | EXISTS |
| `design-system/research/R5-COMBINATION-THEORY.md` | EXISTS |
| `design-system/research/RESEARCH-SYNTHESIS.md` | EXISTS |
| `design-system/compositional-core/case-studies/DD-006-fractal.md` | EXISTS |

**S2 - Identity & Perception (5 files):**
| Path | Status |
|------|--------|
| `design-system/research/R1-DOCUMENTATION-PATTERNS.md` | EXISTS |
| `design-system/research/R2-CREATIVE-LAYOUTS.md` | EXISTS |
| `design-system/compositional-core/case-studies/OD-001-conversational.md` | EXISTS |
| `design-system/compositional-core/case-studies/OD-004-confidence.md` | EXISTS |
| `design-system/compositional-core/case-studies/OD-006-creative.md` | EXISTS |

**S3 - Deep Dives & Structure (5 files):**
| Path | Status |
|------|--------|
| `design-system/compositional-core/case-studies/DD-003-islands.md` | EXISTS |
| `design-system/compositional-core/case-studies/DD-004-layers.md` | EXISTS |
| `design-system/compositional-core/case-studies/dd-003-islands-visual.md` | EXISTS |
| `design-system/compositional-core/case-studies/dd-004-layers-visual.md` | EXISTS |
| `design-system/compositional-core/case-studies/dd-006-fractal-visual.md` | EXISTS |

**S4 - Composition Case Studies (4 files):**
| Path | Status |
|------|--------|
| `design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md` | EXISTS |
| `design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md` | EXISTS |
| `design-system/compositional-core/case-studies/CD-006-pilot-migration.md` | EXISTS |
| `design-system/compositional-core/case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` | EXISTS |

**S5 - Identity & Guidelines (4 files):**
| Path | Status |
|------|--------|
| `design-system/compositional-core/guidelines/semantic-rules.md` | EXISTS |
| `design-system/compositional-core/identity/prohibitions.md` | EXISTS |
| `design-system/compositional-core/identity/soul-constraints.md` | EXISTS |
| `design-system/compositional-core/case-studies/README.md` | EXISTS |

**S6 - Pipeline Knowledge (6 files):**
| Path | Status |
|------|--------|
| `ephemeral/va-extraction/artifact-identity-perception.md` | EXISTS |
| `ephemeral/va-extraction/artifact-builder-recipe.md` | EXISTS |
| `ephemeral/va-extraction/artifact-routing.md` | EXISTS |
| `ephemeral/va-extraction/artifact-orchestrator.md` | EXISTS |
| `ephemeral/va-extraction/artifact-value-tables.md` | EXISTS |
| `ephemeral/va-extraction/artifact-tc-brief-template.md` | EXISTS |

**S7 - PA & Evaluation (5 files):**
| Path | Status |
|------|--------|
| `ephemeral/va-extraction/pa-questions.md` | EXISTS |
| `ephemeral/va-extraction/pa-deployment.md` | EXISTS |
| `ephemeral/va-extraction/pa-weaver.md` | EXISTS |
| `ephemeral/va-extraction/pa-guardrails.md` | EXISTS |
| `ephemeral/va-extraction/pa-guardrails-weaver.md` | EXISTS |

### FINDING F1-1: Corpus file count mismatch (NON-BLOCKING)

**Plan says:** "38 unique rotating" files (K02 resolution, F.1 checklist)
**Actual:** 34 unique rotating files + 3 infrastructure = 37 total unique files
**Breakdown:** S1(5) + S2(5) + S3(5) + S4(4) + S5(4) + S6(6) + S7(5) = 34 rotating

The plan's "38 rotating" is likely a miscount or includes the 3 infrastructure files in the rotating count. Since all files exist and are loaded, this is a documentation discrepancy, not a code bug. The `getAllCorpusFilePaths()` function correctly deduplicates and returns 37 paths.

### FINDING F1-2: K03 compliance verified

Plan's K03 resolution: "Doc 03 is canonical (filesystem-verified). Doc 02's subset definitions are SUPERSEDED."

S1 in corpus.ts = R3, R4, R5, RESEARCH-SYNTHESIS, DD-006-fractal -- this matches Doc 03's canonical definition, NOT Doc 02's "all research (R1-R5)". **K03 resolution correctly implemented.**

---

## F.2: config/constants.ts — All Constants

**Verdict: IMPLEMENTED** -- All values match plan spec exactly.

| Constant | Plan Value | Code Value | Match |
|----------|-----------|------------|-------|
| MODEL | `'claude-opus-4-6'` | `'claude-opus-4-6'` | YES |
| RETRY_LIMIT | 3 | 3 | YES |
| RETRY_BACKOFF | [5000,15000,45000] | [5000,15000,45000] | YES |
| BUDGET_WARNING | 150 | 150 | YES |
| BUDGET_CAP | 250 | 250 | YES |
| MAX_PA_CYCLES | 3 | 3 | YES |
| PA_THRESHOLD | 3.5 | 3.5 | YES |
| RETHINK_THRESHOLD | 2.0 | 2.0 | YES |
| MAX_CONVICTION_ENTRIES | 10 | 10 | YES |
| TOKEN_LIMIT | 100000 | 100_000 | YES |
| VIEWPORTS[0] | {1440,900,'desktop'} | {1440,900,'desktop'} | YES |
| VIEWPORTS[1] | {768,1024,'tablet'} | {768,1024,'tablet'} | YES |
| VIEWPORTS[2] | {375,812,'mobile'} | {375,812,'mobile'} | YES |

### Additional constants (not in plan spec but reasonable):
- TIER5_MINIMUM: 6 (matches weaver verdict routing: "tier5 >= 6")
- MAX_DISCOVERY_ENTRIES: 100
- TOKEN_WARNING: 90_000, TOKEN_TRIM: 95_000, TOKEN_FAIL: 105_000
- CHARS_PER_TOKEN: 4
- PASSES_PER_SUBSET: 8, TOTAL_SUBSETS: 7
- CROSS_SUBSET_VERIFY_AFTER: [2, 4, 6] -- matches plan
- STALL_THRESHOLD: 2
- MINI_PA_AUDITORS: ['A', 'C', 'G'], MINI_PA_VIEWPORT_INDEX: 0

### Per-role max-turns (matches plan invocation table lines 279-290):

| Role | Plan | Code | Match |
|------|------|------|-------|
| tc-derivation | 30 | 30 | YES |
| content-analysis | 30 | 30 | YES |
| builder | 1 | 1 | YES |
| verifier | 1 | 1 | YES |
| retrospective | 10 | 10 | YES |
| cross-subset-verifier | 10 | 10 | YES |
| pa-auditor | 30 | 30 | YES |
| integrative-auditor | 20 | 20 | YES |
| weaver | 40 | 40 | YES |
| refine-builder | 25 | 25 | YES |

### Per-role allowed tools (matches plan invocation table):

| Role | Plan | Code | Match |
|------|------|------|-------|
| tc-derivation | Read,Write,Edit | `'Read,Write,Edit'` | YES |
| content-analysis | Read,Write,Edit | `'Read,Write,Edit'` | YES |
| builder | None | `''` | YES |
| verifier | None | `''` | YES |
| retrospective | Read | `'Read'` | YES |
| cross-subset-verifier | Read | `'Read'` | YES |
| pa-auditor | Read,Glob,Grep | `'Read,Glob,Grep'` | YES |
| integrative-auditor | Read,Glob,Grep | `'Read,Glob,Grep'` | YES |
| weaver | Read,Glob | `'Read,Glob'` | YES |
| refine-builder | Read,Write,Edit | `'Read,Write,Edit,Bash,Glob,Grep'` | **MISMATCH** |

### FINDING F2-1: Refine-builder tools EXPANDED vs plan (NON-BLOCKING / INTENTIONAL?)

**Plan says** (line 290): Refine Builder tools = `Read, Write, Edit`
**Code says** (line 108): `'Read,Write,Edit,Bash,Glob,Grep'`

The code grants Bash, Glob, and Grep beyond what the plan specifies. This may be intentional (refine builder needs to search the workspace for auditor reports, screenshots, etc.) or an over-permission. Either way, it does not break anything -- it grants MORE capability, not less. The plan's invocation table may be outdated relative to the Wave 2 implementation.

### STRICT_MCP_ROLES:
Plan: PA Auditor + Integrative Auditor get `--strict-mcp-config`
Code: `['pa-auditor', 'integrative-auditor']`
**Match: YES**

---

## F.3: config/paths.ts — Path Resolution

**Verdict: PARTIAL** -- 2 hardcoded paths reference files that do NOT exist.

### What works:
- Uses `import.meta.url` for portability -- CORRECT per plan F.3
- Resolves PACKAGE_ROOT, SRC_ROOT, TEMPLATES_DIR correctly
- `resolveProjectRoot()` walks up looking for `.git` -- CORRECT
- `resolveProjectPaths()` generates correct relative paths for design-system, ephemeral, etc.
- `buildOutputDir()` generates date-stamped output directories -- CORRECT

### FINDING F3-1: BROKEN HARDCODED PATH — caseStudy (BLOCKING)

**Line 61:** `caseStudy: path.join(projectRoot, 'design-system', 'compositional-core', 'case-studies', 'CD-006', 'exploration.html')`

**File does NOT exist.** No directory `CD-006/` exists under case-studies. The actual file is:
- `design-system/compositional-core/case-studies/CD-006-pilot-migration.md`

The plan (line 484) specifies `{CASE_STUDY}` source as "CD-006 exploration HTML (static)" but this file has never existed at that path. This will cause a runtime error when the assembler tries to load the case study for builder/refine-builder templates.

### FINDING F3-2: BROKEN HARDCODED PATH — r5 (BLOCKING)

**Line 63:** `r5: path.join(projectRoot, 'design-system', 'research', 'R5-agent-assisted-design-review.md')`

**File does NOT exist.** The actual R5 file is:
- `design-system/research/R5-COMBINATION-THEORY.md`

This will cause a runtime error when the assembler tries to load R5 for the weaver's `{RESEARCH_FILES}` variable.

---

## F.4: config/pa-questions.ts — PA Question Assignments

**Verdict: IMPLEMENTED** -- Exact match with plan's PA Question Assignment Table.

| Auditor | Plan Questions | Code Questions | Match |
|---------|---------------|----------------|-------|
| A | PA-01 through PA-07 (7) | PA-01 through PA-07 (7) | YES |
| B | PA-08 through PA-16 (9) | PA-08 through PA-16 (9) | YES |
| C | PA-17 through PA-23 (7) | PA-17 through PA-23 (7) | YES |
| D | PA-24 through PA-29 (6) | PA-24 through PA-29 (6) | YES |
| E | PA-30 through PA-36 (7) | PA-30 through PA-36 (7) | YES |
| F | PA-37 through PA-42 (6) | PA-37 through PA-42 (6) | YES |
| G | PA-43 through PA-49 (7) | PA-43 through PA-49 (7) | YES |
| H | PA-50 through PA-55 (6) | PA-50 through PA-55 (6) | YES |
| I | None (integrative) | `getQuestionsForAuditor('I')` returns [] | YES |

Total: 55 questions across 8 auditors. Plan says "69 questions, PA-01 through PA-77 with gaps" -- the 55 assigned here are a subset; the remaining 14 are Tier 5 questions (PA-60 through PA-77) not assigned to standard auditors.

Auditor focus areas match:
- A: Soul & Identity, B: Perception & Spatial, C: Coherence & Integration, D: Metaphor & Meaning, E: Content Fidelity, F: Responsive & Breakpoints, G: Typography & Readability, H: Spatial Composition, I: Cross-cutting Synthesis (Integrative) -- ALL MATCH plan table.

---

## G: Prompt Templates (10 files)

### G.1: templates/builder-corpus.md

**Verdict: IMPLEMENTED**

**Variables found in template:**
`{WORLD_DESCRIPTION}`, `{CONVICTION_BRIEF}`, `{CONTENT_MAP}`, `{CONTENT_MARKDOWN}`, `{FILE_ORDER_DESCRIPTION}`, `{CORPUS_FILES_CONCATENATED}`, `{CASE_STUDY}`, `{MECHANISM_CATALOG}`, `{COMPONENTS_CSS}`, `{TOKENS_CSS}`, `{CONVICTION_LAYER}`, `{DISCOVERY_LOG}`, `{VERIFIER_OBSERVATIONS_SECTION}`, `{CURRENT_ARTIFACT}`, `{PREVIOUS_SUBSET_SUMMARIES}`, `{PASS_CONTEXT}`

**Plan variable check (16 listed in Builder Template Variables):**
| Plan Variable | In Template | Notes |
|---------------|-------------|-------|
| {WORLD_DESCRIPTION} | YES | line 9 |
| {CONVICTION_BRIEF} | YES | line 25 |
| {CONTENT_MARKDOWN} | YES | line 41 |
| {CONTENT_MAP} | YES | line 33 |
| {FILE_ORDER_DESCRIPTION} | YES | line 49 |
| {CORPUS_FILES_CONCATENATED} | YES | line 51 |
| {CASE_STUDY} | YES | line 59 |
| {MECHANISM_CATALOG} | YES | line 68 |
| {COMPONENTS_CSS} | YES | line 73 |
| {TOKENS_CSS} | YES | line 78 |
| {CONVICTION_LAYER} | YES | line 86 |
| {DISCOVERY_LOG} | YES | line 88 |
| {VERIFIER_OBSERVATIONS_SECTION} | YES | line 92 |
| {PASS_CONTEXT} | YES | line 114 |
| {PREVIOUS_SUBSET_SUMMARIES} | YES | line 108 |
| {CURRENT_ARTIFACT} | YES | line 101 |
| {SEVEN_LENSES} | INLINE | lines 214-231 (correct per plan note at line 562) |
| {MATERIAL_CONSTRAINTS} | INLINE | lines 198-211 (correct per plan note) |
| {RESPONSE_FORMAT_INSTRUCTIONS} | INLINE | lines 234-277 (markers embedded directly) |

**Qualitative check:**
- RECIPE format: YES (Phase 1-5 sequenced recipe, lines 118-195)
- Seven Lenses inline: YES (7 lenses with descriptive text, lines 214-231)
- Material constraints inline: YES (9 constraints listed, lines 198-211)
- Response format markers: YES (HTML_START/END, CONVICTION, DISCOVERY markers, lines 247-277)
- Content-first philosophy ("read BEFORE building"): YES

### G.2: templates/verifier-corpus.md

**Verdict: IMPLEMENTED**

**Variables:** `{WORLD_DESCRIPTION}`, `{CONVICTION_BRIEF}`, `{CORPUS_FILES_CONCATENATED}`, `{CONTENT_MARKDOWN}`, `{CURRENT_ARTIFACT}`, `{ARTIFACT_DIFF}`, `{PASS_CONTEXT}` -- ALL 7 match plan's Verifier Template Variables table.

**Diff-aware mode:** YES -- `{ARTIFACT_DIFF}` variable present in "WHAT CHANGED SINCE LAST PASS" section (line 50-51).

**Qualitative:** Uses perceptual/experiential language. 5-section observation structure (Deeply Integrated, Surface-Level, Absent, Surprised, What Next Builder Should Attend To). Explicitly says "Do NOT write CSS." Correctly framed as READER, not auditor.

### G.3: templates/retrospective.md

**Verdict: IMPLEMENTED**

**Variables:** `{VERIFIER_OBSERVATIONS}`, `{ARTIFACT_EVOLUTION}`, `{CONVICTION_LAYER}`, `{SUBSET_CONTEXT}` -- ALL 4 match plan's Retrospective Template Variables.

**Qualitative:** Produces exactly 3 sentences (STATE, DIRECTION, TERRITORY). Quality test included. No bullet points format specified. NEW template (not from doc 07) -- correctly created from scratch.

### G.4: templates/tc-derivation.md

**Verdict: IMPLEMENTED**

**Variables:** `{WORLD_DESCRIPTION}`, `{CONTENT_MARKDOWN}`, `{RESEARCH_FILES}` -- ALL 3 match plan.

**Qualitative:** Conviction brief spec (80-165 lines, 7 sections). World-Description, Opposition, Metaphor, Arc, Content Map, Mechanism Affinity, What This Page Is NOT. Quality test included. NEW template -- correctly created from scratch.

### G.5: templates/content-analysis.md

**Verdict: IMPLEMENTED**

**Variables:** `{WORLD_DESCRIPTION}`, `{CONTENT_MARKDOWN}` -- matches plan (2 of 3; `{RESEARCH_FILES}` listed in plan's TC+Content combined variable table but only TC needs research files). Content analysis needs only content + world. CORRECT.

**Qualitative:** 7-section structural analysis (Structural Inventory, Hierarchy Depth, Content Type Distribution, Rhetorical Shifts, Natural Zone Candidates, Content Tensions, Key Themes). NEW template -- correctly created from scratch.

### G.6: templates/pa-auditor.md

**Verdict: IMPLEMENTED** (1 minor finding)

**Variables:** `{AUDITOR_ID}` (lines 1, 130), `{SCREENSHOT_PATHS}` (line 52), `{CURRENT_ARTIFACT}` (line 70), `{PA_GUARDRAILS}` (line 79), `{ASSIGNED_QUESTIONS}` (line 90)

**Plan variable check:**
| Plan Variable | In Template | Match |
|---------------|-------------|-------|
| {AUDITOR_ID} | YES | |
| {ASSIGNED_QUESTIONS} | YES | |
| {SCREENSHOT_PATHS} | YES | |
| {CURRENT_ARTIFACT} | YES | |
| {PA_GUARDRAILS} | YES | |
| {EXPERIENTIAL_PROTOCOL} | **NO** | See finding below |

### FINDING G6-1: Missing {EXPERIENTIAL_PROTOCOL} variable (NON-BLOCKING)

Plan (line 518) lists `{EXPERIENTIAL_PROTOCOL}` as a PA Auditor Template Variable with source "Section 0 experiential pass instructions." However, the experiential pass protocol is INLINE in the template (lines 9-44, "## 0. EXPERIENTIAL PASS"). This follows the same pattern as Seven Lenses / Material Constraints -- the content is embedded directly in the template rather than injected as a variable. This is functionally correct (the protocol IS there), but the plan's variable table is misleading. The assembler does NOT need a resolver for this.

**ZERO build context:** CONFIRMED. Lines 106-121 explicitly state the auditor has NOT received conviction brief, builder reflection, design system research, mechanism catalog, world description, gate results, or other auditor reports. Information isolation is correct.

**Qualitative:** Experiential pass protocol (Steps 1-4), visual verification emphasis ("PIXELS not inference"), completion manifest, perceptual language constraint. High quality.

### G.7: templates/pa-integrative.md

**Verdict: IMPLEMENTED**

**Variables:** `{SCREENSHOT_PATHS}`, `{CURRENT_ARTIFACT}`, `{PA_GUARDRAILS}`, `{AUDITOR_REPORTS}` -- all 4 correct.

**Plan spec:** "reads A-H reports, free-form synthesis" -- YES, template reads all 8 reports and synthesizes across 5 sections (Convergent, Divergent, Blind Spots, Cross-Cutting, The One Thing). Completion manifest present. Information isolation correct.

### G.8: templates/pa-weaver.md

**Verdict: IMPLEMENTED**

**Variables:** `{SCREENSHOT_PATHS}`, `{AUDITOR_REPORTS}`, `{CONVICTION_BRIEF}`, `{BUILDER_REFLECTION}`, `{GATE_RESULTS}`, `{RESEARCH_FILES}`, `{CURRENT_ARTIFACT}`, `{PA_GUARDRAILS_WEAVER}` -- ALL 8 match plan's Weaver Template Variables.

**Plan spec:** "structured WeaverVerdict output, experiential anchor first" -- YES.
- Step 0: Experiential anchor (3 sentences, BEFORE reading auditor reports)
- 8-section synthesis including structured JSON verdict block
- Verdict routing: SHIP/REFINE/RETHINK with correct thresholds
- Calibration references (multi-coherence scale, metaphor expression spectrum)
- Fix classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL)

### G.9: templates/refine-builder.md

**Verdict: IMPLEMENTED**

**Variables:** `{CURRENT_ARTIFACT}`, `{WEAVER_SYNTHESIS}`, `{BUILDER_REFLECTION}`, `{CONVICTION_BRIEF}`, `{CONTENT_MARKDOWN}`, `{CASE_STUDY}`, `{MECHANISM_CATALOG}`, `{COMPONENTS_CSS}`, `{TOKENS_CSS}`, `{USER_DIRECTION}`, `{RESPONSE_FORMAT_INSTRUCTIONS}` -- ALL 11 match plan's Refinement Builder Template Variables.

**Plan spec:** "reads artifact BEFORE weaver findings" -- YES. Step 1 presents artifact, Step 2 presents weaver synthesis. Explicit checkpoint: "Write your 2 sentences now... Do not proceed to Step 2 until you have written your impressions."

**Recipe format:** YES. 7-phase refinement recipe (Identify ONE THING, Protect, Mechanical fixes, Boundary-by-boundary, Weaver territories, Regression check, Perception check). Conventions section with material constraints. Response format with markers.

### G.10: templates/world-description.md

**Verdict: IMPLEMENTED**

Static content, ~14 lines. Describes KortAI world: flat surfaces, sharp edges, warm colors, font trinity, 4px spacing, 940-960px container. NEW template -- correctly created from scratch.

Plan says "~17 lines" -- actual is 14 lines. Close enough (no content gap).

---

## Cross-Cutting Findings

### 1. Refine-builder tool over-permission (NON-BLOCKING)

`constants.ts` grants `Read,Write,Edit,Bash,Glob,Grep` to refine-builder.
Plan specifies `Read,Write,Edit` only.
The additional tools (Bash, Glob, Grep) give the refine-builder more filesystem access than planned. This could be intentional for reading screenshots/reports, or could be an over-permission that lets the agent do unintended things. Recommend explicit resolution.

### 2. Two broken paths in paths.ts (BLOCKING)

- `caseStudy` points to non-existent `CD-006/exploration.html` -- actual file is `CD-006-pilot-migration.md`
- `r5` points to non-existent `R5-agent-assisted-design-review.md` -- actual file is `R5-COMBINATION-THEORY.md`

These will cause runtime failures when assembler.ts tries to load these files for the `{CASE_STUDY}` and `{RESEARCH_FILES}` variables. Both are used in critical templates (builder, refine-builder, weaver).

### 3. Corpus count discrepancy (NON-BLOCKING)

Plan says "38 unique rotating" but actual count is 34 unique rotating + 3 infrastructure = 37 total. Likely the plan counted infrastructure in the rotating total. The code correctly loads all files; this is a documentation issue only.

### 4. {EXPERIENTIAL_PROTOCOL} variable listed but inline (NON-BLOCKING)

Plan's PA Auditor variable table lists `{EXPERIENTIAL_PROTOCOL}` but the content is inline in the template. Assembler does not need a resolver. Plan documentation is misleading but code is correct.

---

## BLOCKING Issues Summary

| ID | File | Issue | Fix |
|----|------|-------|-----|
| F3-1 | `src/config/paths.ts:61` | `caseStudy` path `CD-006/exploration.html` does not exist | Change to actual CD-006 path or to the correct exploration HTML if it exists elsewhere |
| F3-2 | `src/config/paths.ts:63` | `r5` path `R5-agent-assisted-design-review.md` does not exist | Change to `R5-COMBINATION-THEORY.md` |

---

## NON-BLOCKING Issues Summary

| ID | File | Issue | Severity |
|----|------|-------|----------|
| F1-1 | `src/config/corpus.ts` | Plan says 38 rotating files, actual count is 34 | Documentation only |
| F2-1 | `src/config/constants.ts:108` | refine-builder tools expanded beyond plan (Bash,Glob,Grep added) | Intentional? Needs resolution |
| G6-1 | Plan line 518 | `{EXPERIENTIAL_PROTOCOL}` listed as variable but is inline in template | Plan docs misleading |

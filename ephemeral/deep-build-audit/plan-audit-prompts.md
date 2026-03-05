# Prompt Variables & Pass Anatomy Audit

## Scope

Audited the plan file (`sorted-finding-honey.md`) sections "Prompt Variable Reference" (lines 314-335) and "Pass-to-Pass Anatomy" (lines 261-312), cross-referenced against:
- Doc 07: `07-prompt-templates.md` (5 template definitions with variable source mapping tables)
- Doc 05: `05-pa-integration.md` (Phase B specification with TypeScript prompt construction functions)

---

## 1. Complete Variable Inventory from Doc 07

### Template 1: BUILDER (Phase A)

| # | Variable in Template | In Plan Variable Reference? | Source (per doc 07) |
|---|---|---|---|
| 1 | `{WORLD_DESCRIPTION}` | YES | `ephemeral/build-page-v2/world-description.md` |
| 2 | `{CONVICTION_BRIEF}` | YES | `{output_dir}/_tc-brief.md` |
| 3 | `{CONTENT_MARKDOWN}` | YES | `{output_dir}/_content.md` |
| 4 | `{FILE_ORDER_DESCRIPTION}` | YES | Computed by orchestrator |
| 5 | `{CORPUS_FILES_CONCATENATED}` | YES | Subset files concatenated |
| 6 | `{CASE_STUDY}` | YES | `compositional-core/case-studies/CD-006-pilot-migration.md` |
| 7 | `{MECHANISM_CATALOG}` | YES | `compositional-core/grammar/mechanism-catalog.md` |
| 8 | `{COMPONENTS_CSS}` | YES | `compositional-core/components/components.css` |
| 9 | `{TOKENS_CSS}` | YES | `compositional-core/vocabulary/tokens.css` |
| 10 | `{CONVICTION_LAYER}` | YES | `{output_dir}/_orchestrator/conviction-layer.md` |
| 11 | `{DISCOVERY_LOG}` | YES | `{output_dir}/_orchestrator/discovery-log.md` |
| 12 | `{VERIFIER_OBSERVATIONS_SECTION}` | YES | Computed, passes 3 and 6 only |
| 13 | `{PASS_CONTEXT}` | YES | Computed per pass number |
| 14 | `{VERIFIER_OUTPUT}` | **NO** | Nested inside `{VERIFIER_OBSERVATIONS_SECTION}` wrapper (doc 07 line 229) |

### Template 2: VERIFIER (Phase A)

| # | Variable in Template | In Plan Variable Reference? | Source (per doc 07) |
|---|---|---|---|
| 1 | `{WORLD_DESCRIPTION}` | YES (same as builder) | Same |
| 2 | `{CONVICTION_BRIEF}` | YES | Same |
| 3 | `{CORPUS_FILES_CONCATENATED}` | YES | Same |
| 4 | `{CONTENT_MARKDOWN}` | YES | Same |
| 5 | `{CURRENT_ARTIFACT}` | **NO** | `{output_dir}/output.html` |

### Template 3: PA AUDITOR (Phase B)

| # | Variable in Template | In Plan Variable Reference? | Source (per doc 07) |
|---|---|---|---|
| 1 | `{AUDITOR_LETTER}` | **NO** | Static A-I |
| 2 | `{SCREENSHOT_PATHS_1440}` | **NO** | Computed from screenshots dir |
| 3 | `{SCREENSHOT_PATHS_768}` | **NO** | Computed from screenshots dir |
| 4 | `{ASSIGNED_QUESTIONS}` | **NO** | From pa-questions.md, filtered |
| 5 | `{PA05_CROSS_VALIDATION_SECTION}` | **NO** | Static per auditor, empty for most |

### Template 4: WEAVER (Phase B)

| # | Variable in Template | In Plan Variable Reference? | Source (per doc 07) |
|---|---|---|---|
| 1 | `{SCREENSHOT_PATHS_1440}` | **NO** | Computed from screenshots dir |
| 2 | `{AUDITOR_REPORTS}` | **NO** | All 10 reports concatenated |
| 3 | `{CONVICTION_BRIEF}` | YES (builder var) | Same |
| 4 | `{BUILDER_REFLECTION}` | **NO** | `{output_dir}/_reflection.md` |
| 5 | `{RAW_RESEARCH_FILES}` | **NO** | `research/RESEARCH-SYNTHESIS.md` + `R5-COMBINATION-THEORY.md` |
| 6 | `{CURRENT_ARTIFACT}` | **NO** (same gap as verifier) | `{output_dir}/output.html` |

### Template 5: REFINEMENT BUILDER (Phase B)

| # | Variable in Template | In Plan Variable Reference? | Source (per doc 07) |
|---|---|---|---|
| 1 | `{CURRENT_ARTIFACT}` | **NO** | `{output_dir}/output.html` |
| 2 | `{WEAVER_SYNTHESIS}` | **NO** | `{output_dir}/_pa/weaver-synthesis.md` |
| 3 | `{BUILDER_REFLECTION}` | **NO** | `{output_dir}/_reflection.md` |
| 4 | `{CONVICTION_BRIEF}` | YES | Same |
| 5 | `{CONTENT_MARKDOWN}` | YES | Same |
| 6 | `{RAW_CD_EXPLORATIONS}` | **NO** | 1-2 CD exploration HTML files |
| 7 | `{MECHANISM_CATALOG}` | YES | Same |
| 8 | `{COMPONENTS_CSS}` | YES | Same |
| 9 | `{TOKENS_CSS}` | YES | Same |
| 10 | `{USER_DIRECTION_SECTION}` | **NO** | `{output_dir}/_user-direction.md` if exists |
| 11 | `{USER_DIRECTION_CONTENT}` | **NO** | Nested inside `{USER_DIRECTION_SECTION}` wrapper (doc 07 line 904) |

### Template 5a: INTEGRATIVE AUDITOR (Phase B)

| # | Variable in Template | In Plan Variable Reference? | Source (per doc 07) |
|---|---|---|---|
| 1 | `{SCREENSHOT_PATHS_1440}` | **NO** | Same as PA auditors |
| 2 | `{SCREENSHOT_PATHS_768}` | **NO** | Same as PA auditors |

---

## 2. Plan Variable Reference Table Coverage

The plan's "Prompt Variable Reference" (lines 314-335) contains **15 variables**. All 15 are scoped to the **Builder (Phase A) template only**. The table header says "Builder template variables that `assembler.ts` must resolve."

### Missing from Plan Variable Reference (variables that exist in doc 07 but NOT in plan table)

| Variable | Template(s) | Severity |
|---|---|---|
| `{CURRENT_ARTIFACT}` | Verifier, Weaver, Refine Builder | **HIGH** -- used in 3 templates, assembler must resolve it |
| `{AUDITOR_LETTER}` | PA Auditor | LOW -- static, trivial to resolve |
| `{SCREENSHOT_PATHS_1440}` | PA Auditor, Weaver, Integrative | MEDIUM -- computed from screenshot dir, affects 3 templates |
| `{SCREENSHOT_PATHS_768}` | PA Auditor, Integrative | MEDIUM -- same |
| `{ASSIGNED_QUESTIONS}` | PA Auditor | MEDIUM -- requires pa-questions.md parsing logic |
| `{PA05_CROSS_VALIDATION_SECTION}` | PA Auditor (B, C, F, G) | MEDIUM -- conditional per auditor |
| `{AUDITOR_REPORTS}` | Weaver | **HIGH** -- 10 reports concatenated, major assembly logic |
| `{BUILDER_REFLECTION}` | Weaver, Refine Builder | **HIGH** -- source is `_reflection.md`, must be generated |
| `{RAW_RESEARCH_FILES}` | Weaver | MEDIUM -- 2 specific files concatenated |
| `{WEAVER_SYNTHESIS}` | Refine Builder | **HIGH** -- the Weaver's output feeds the Refine Builder |
| `{RAW_CD_EXPLORATIONS}` | Refine Builder | MEDIUM -- 1-2 CD exploration files, selected by config |
| `{USER_DIRECTION_SECTION}` | Refine Builder | LOW -- conditional, empty by default |
| `{USER_DIRECTION_CONTENT}` | Nested in `{USER_DIRECTION_SECTION}` | LOW -- nested variable |
| `{VERIFIER_OUTPUT}` | Nested in `{VERIFIER_OBSERVATIONS_SECTION}` | LOW -- nested variable |

**Verdict:** The plan's variable reference table is Builder-only. It is missing **14 variables** used by the other 5 templates. 4 of these are HIGH severity (assembler must resolve them and they involve non-trivial logic).

**Why this is not suspicious that the plan "covers all builder variables":** It does. The plan table was explicitly scoped to "Builder template variables." It just never expanded to cover the other 5 templates' variables. This is a clear gap.

---

## 3. Builder Input List (Plan's 13 items) vs Doc 07

Plan "Pass-to-Pass Anatomy" Builder section lists 13 items. Cross-reference against doc 07 Template 1:

| # | Plan Item | Doc 07 Variable | Match? |
|---|---|---|---|
| 1 | World description (~17 lines) | `{WORLD_DESCRIPTION}` | YES |
| 2 | Conviction brief (80-165 lines) | `{CONVICTION_BRIEF}` | YES |
| 3 | Content markdown | `{CONTENT_MARKDOWN}` | YES |
| 4 | Corpus files (3,336-8,036 lines) | `{CORPUS_FILES_CONCATENATED}` | YES |
| 5 | Case study (CD-006, 387 lines) | `{CASE_STUDY}` | YES |
| 6 | Reference files (mechanism catalog, components, tokens) | `{MECHANISM_CATALOG}`, `{COMPONENTS_CSS}`, `{TOKENS_CSS}` | YES |
| 7 | Conviction layer (capped at 10) | `{CONVICTION_LAYER}` | YES |
| 8 | Discovery log | `{DISCOVERY_LOG}` | YES |
| 9 | Verifier observations (passes 3, 6) | `{VERIFIER_OBSERVATIONS_SECTION}` | YES |
| 10 | Cross-subset context | `{PREVIOUS_SUBSET_SUMMARIES}` | **MISMATCH** |
| 11 | Pass context | `{PASS_CONTEXT}` | YES |
| 12 | Seven lenses | `{SEVEN_LENSES}` | **MISMATCH** |
| 13 | Material constraints | (inline in template) | N/A (not a variable) |

### Findings:

**FINDING B-1 (BLOCKING): `{SEVEN_LENSES}` and `{PREVIOUS_SUBSET_SUMMARIES}` are in the plan variable table but NOT in doc 07 template.**

The plan lists both `{SEVEN_LENSES}` (line 334) and `{PREVIOUS_SUBSET_SUMMARIES}` (line 333) as variables the assembler must resolve. But doc 07's builder template does NOT contain either placeholder. Searching `07-prompt-templates.md` for these strings returns zero matches.

Three possibilities:
1. They were removed from doc 07 but not from the plan (stale plan)
2. They are in the template but under different names
3. They need to be added to the template

The builder template DOES end with a 7-lens evaluation section (lines 171-187 of doc 07), but the lenses are **hardcoded inline** in the template -- not referenced via `{SEVEN_LENSES}`. Similarly, there is no `{PREVIOUS_SUBSET_SUMMARIES}` placeholder anywhere in any template.

**Impact:** `assembler.ts` would try to resolve 2 variables that have no corresponding placeholder in the template. The substitution would be a no-op (string not found), silently wasting the loaded content. Worse: cross-subset context summaries would never reach the builder despite the plan promising they would.

**FINDING B-2 (WARNING): Material constraints (item 13) are hardcoded in both builder template (lines 117-133) and refine builder template (lines 820-833).** They are NOT a variable. The plan lists them as a builder input but they don't need assembler resolution. This is fine for the builder but means any update to material constraints requires editing 2 template files.

**FINDING B-3 (NOTE): Mechanism catalog line count disagrees.** Plan says 1,878 lines (line 326). Doc 07 variable source mapping says 751 lines (line 199). This is a data staleness issue -- the plan likely reflects the enriched version while doc 07 was written against an earlier version. Not blocking but confusing.

---

## 4. Verifier Input List vs Doc 07

Plan verifier anatomy lists 7 items:

| # | Plan Item | Doc 07 Variable | Match? |
|---|---|---|---|
| 1 | World description | `{WORLD_DESCRIPTION}` | YES |
| 2 | Conviction brief | `{CONVICTION_BRIEF}` | YES |
| 3 | Same corpus files in same rotation | `{CORPUS_FILES_CONCATENATED}` | YES |
| 4 | Content markdown | `{CONTENT_MARKDOWN}` | YES |
| 5 | Current artifact HTML | `{CURRENT_ARTIFACT}` | YES |
| 6 | Artifact diff from previous pass | -- | **MISSING FROM DOC 07** |
| 7 | Observation instructions | (inline in template) | N/A (hardcoded) |

**FINDING V-1 (BLOCKING): Plan says verifier receives "Artifact diff from previous pass (provided by diff-checker)" but doc 07's verifier template has NO diff variable.**

The verifier template (doc 07 lines 258-331) does not contain any diff or delta content. The plan mentions `diff-checker.ts` in the file structure (line 479) but the verifier never sees its output in doc 07.

Either:
1. The diff is a planned enhancement not yet in the template (gap)
2. The diff was removed from the template design (stale plan)
3. The diff was intended to be part of the artifact presentation (e.g., shown as comments in the HTML)

**Impact:** Without the diff, the verifier experiences the FULL artifact cold each time, without knowing what changed since the last builder pass. This may be intentional (pure perception) or a gap (verifier needs context on what changed).

---

## 5. PA Auditor Input List vs Doc 05 Section 5

Plan PA auditor anatomy lists 5 items + 1 exclusion list:

| # | Plan Item | Doc 05 / Doc 07 | Match? |
|---|---|---|---|
| 1 | Screenshots (3 viewports: 1440, 768, 375px) | Doc 05 4.1: screenshot file paths via Read tool | **VIEWPORT MISMATCH** |
| 2 | HTML artifact (for code inspection) | Doc 05 4.1 item 4 + doc 07 line 466 | YES |
| 3 | PA guardrails file | Doc 05 4.2: `guardrailsPath` parameter | YES |
| 4 | Assigned questions (5-11 per auditor) | Doc 07: `{ASSIGNED_QUESTIONS}` | YES |
| 5 | Experiential pass protocol | (inline in template, both docs) | YES |

**FINDING PA-1 (BLOCKING): Viewport list contradiction.**

- Plan says: "3 viewports: 1440, 768, 375px"
- Doc 05 Section 2.3 says: `PA_VIEWPORTS = [1440x900, 1024x768, 768x1024]`
- Doc 07 says templates have `{SCREENSHOT_PATHS_1440}` and `{SCREENSHOT_PATHS_768}` (2 viewport variables, no 375px or 1024px)

Three different viewport lists across three documents. 375px (mobile) exists only in the plan. 1024x768 (tablet landscape) exists only in doc 05. Doc 07 templates reference only 1440 and 768.

**FINDING PA-2 (CONFIRMED): Information isolation is correct.**

Plan exclusion list says auditors MUST NOT receive: conviction brief, builder context, gate results, design system docs, world description, other auditor reports. Verified against:
- Doc 07 PA auditor template: contains only `{AUDITOR_LETTER}`, `{SCREENSHOT_PATHS_1440}`, `{SCREENSHOT_PATHS_768}`, `{ASSIGNED_QUESTIONS}`, `{PA05_CROSS_VALIDATION_SECTION}`. No conviction, no gates, no design system.
- Doc 05 Section 4.1: "Zero build context. Zero design system knowledge. Zero gate results."
- Doc 05 `constructAuditorPrompt()` signature: `auditor, screenshotManifest, htmlPath, guardrailsPath, questionsPath` -- no conviction or gate params.

Information isolation is consistently maintained across all three documents. This is one of the best-aligned aspects of the plan.

**FINDING PA-3 (NOTE): Doc 05 auditor prompt gives Write tool, doc 07 gives only Read.**

- Doc 05 Section 4.5: `allowedTools: ['Read', 'Write', 'Glob']` (auditor writes report to file)
- Doc 07 line 516: `--allowedTools "Read"` (Read only)

The auditor needs to WRITE its report file. Doc 07 is wrong -- it should be `Read,Write` at minimum (or `Read,Write,Glob` per doc 05).

---

## 6. Weaver Input List vs Doc 05 / Doc 07

Plan weaver anatomy lists 6 items:

| # | Plan Item | Doc 05 / Doc 07 Source | Match? |
|---|---|---|---|
| 1 | Own experiential anchor (screenshots) | Doc 05 6.2 item 6 + doc 07 `{SCREENSHOT_PATHS_1440}` | YES |
| 2 | All 9 auditor reports + integrative | Doc 05 6.2 items 1-2 + doc 07 `{AUDITOR_REPORTS}` | YES |
| 3 | Conviction brief + builder's 6-dim reflection | Doc 07 `{CONVICTION_BRIEF}` + `{BUILDER_REFLECTION}` | YES |
| 4 | Gate results | Doc 05 6.2 item 5 + doc 07 weaver prompt Step 4 (no variable, inline JSON) | **PARTIAL** |
| 5 | Research files (RESEARCH-SYNTHESIS + R5) | Doc 07 `{RAW_RESEARCH_FILES}` | YES |
| 6 | Current artifact HTML | Doc 07 `{CURRENT_ARTIFACT}` | YES |

**FINDING W-1 (WARNING): Gate results delivery method differs.**

- Plan says "Gate results (deterministic gate scores)" as a simple input
- Doc 05 passes gate results as a JSON blob inline in the prompt (`JSON.stringify(gateResults, null, 2)`)
- Doc 07 does NOT have a `{GATE_RESULTS}` variable; instead the gate JSON appears inline in the template

The plan doesn't clarify this is inline rather than a variable. Not blocking, but `assembler.ts` needs to know this is NOT a simple variable substitution -- it's a JSON.stringify insertion into the template.

**FINDING W-2 (NOTE): Doc 05 adds inputs the plan doesn't mention.**

Doc 05 Section 6.2 weaver receives:
- Previous cycle's weaver report (for cycle >= 2, for Finding Status Map)
- Artifact mode (APPLIED or COMPOSED)

Plan weaver section doesn't mention either. These are Phase B multi-cycle features that the plan's simplified anatomy doesn't cover.

---

## 7. Refine Builder Input List vs Doc 07

Plan refine builder anatomy lists 7 items:

| # | Plan Item | Doc 07 Variable | Match? |
|---|---|---|---|
| 1 | Current artifact HTML | `{CURRENT_ARTIFACT}` | YES |
| 2 | Weaver synthesis | `{WEAVER_SYNTHESIS}` | YES |
| 3 | Previous builder's 6-dim reflection | `{BUILDER_REFLECTION}` | YES |
| 4 | Conviction brief + content markdown | `{CONVICTION_BRIEF}` + `{CONTENT_MARKDOWN}` | YES |
| 5 | 1-2 raw CD exploration HTML files | `{RAW_CD_EXPLORATIONS}` | YES |
| 6 | Mechanism catalog + components + tokens | `{MECHANISM_CATALOG}` + `{COMPONENTS_CSS}` + `{TOKENS_CSS}` | YES |
| 7 | User direction (if second+ REFINE cycle) | `{USER_DIRECTION_SECTION}` | YES |

**Verdict:** Plan's refine builder input list matches doc 07 exactly. No missing items.

**FINDING RB-1 (NOTE): Doc 05's IMPROVE builder is a DIFFERENT prompt than doc 07's REFINE builder.**

Doc 05 Section 8.2 defines `constructImproveBuilderPrompt()` which takes only: htmlPath, weaverReportPath, convictionBriefPath, config (mechanism catalog + components + tokens), cycleNumber. It does NOT include: `{CONTENT_MARKDOWN}`, `{RAW_CD_EXPLORATIONS}`, `{BUILDER_REFLECTION}`, `{USER_DIRECTION_SECTION}`.

Doc 07's Template 5 (REFINEMENT BUILDER) includes all of those.

This is not necessarily a contradiction -- doc 05's IMPROVE builder is a lighter-weight Phase B iteration pass, while doc 07's Template 5 is the full REFINE builder. But the plan's "Refinement Builder" section maps to doc 07's Template 5, and the plan's file structure lists `refine-builder.md` as the template. The distinction between IMPROVE (doc 05) and REFINE (doc 07) should be clarified.

---

## 8. Variables in Plan NOT in Doc 07

| Variable | Plan Source | In Doc 07? | Actual Source |
|---|---|---|---|
| `{SEVEN_LENSES}` | Plan line 334 | **NO** -- content is hardcoded inline in template | Plan only |
| `{PREVIOUS_SUBSET_SUMMARIES}` | Plan line 333 | **NO** -- not present in any template | Plan only |

Both are listed as requiring assembler resolution but have no corresponding placeholder in any doc 07 template. See FINDING B-1.

---

## 9. Consolidated Findings (Severity-Ordered)

### BLOCKING (must fix before implementation)

| ID | Finding | Affected Templates |
|---|---|---|
| B-1 | `{SEVEN_LENSES}` and `{PREVIOUS_SUBSET_SUMMARIES}` in plan variable table but absent from doc 07 templates. Cross-subset context NEVER reaches builder. | Builder |
| V-1 | Plan says verifier gets artifact diff; doc 07 verifier template has no diff variable or content. | Verifier |
| PA-1 | Three different viewport lists: Plan (1440/768/375), Doc 05 (1440/1024/768), Doc 07 templates (1440/768 only). | PA Auditor, Integrative |

### HIGH (missing variables assembler must handle)

| ID | Finding | Affected Templates |
|---|---|---|
| H-1 | Plan variable reference table covers ONLY builder template (15 vars). 14 variables from other 5 templates are unlisted. 4 are high-complexity: `{CURRENT_ARTIFACT}`, `{AUDITOR_REPORTS}`, `{BUILDER_REFLECTION}`, `{WEAVER_SYNTHESIS}`. | Verifier, PA, Weaver, Refine |

### WARNING

| ID | Finding | Affected |
|---|---|---|
| PA-3 | Doc 07 says PA auditors get `Read` only; Doc 05 says `Read,Write,Glob`. Auditors need Write to save their reports. | PA Auditor |
| W-1 | Gate results delivered to Weaver as inline JSON, not as a variable. Assembler needs special handling. | Weaver |
| W-2 | Doc 05 gives Weaver previous cycle report + artifact mode; plan doesn't mention these. | Weaver |
| B-2 | Material constraints are hardcoded in 2 templates (builder + refine builder); no single source of truth. | Builder, Refine Builder |

### NOTE

| ID | Finding |
|---|---|
| B-3 | Mechanism catalog line count: plan says 1,878, doc 07 says 751. Stale data in one source. |
| RB-1 | Doc 05 IMPROVE builder is lighter than doc 07 REFINE builder. Distinction not clarified in plan. |
| PA-2 | Information isolation is correctly maintained across all 3 documents. (Positive finding.) |

---

## 10. Why Zero Missing Variables Would Be Suspicious

If this audit found zero missing variables, that would indicate one of:
1. The auditor only checked the builder template (the plan variable table is builder-scoped)
2. The auditor treated the plan table as ground truth and didn't cross-reference doc 07
3. The auditor conflated "plan describes the input conceptually" with "plan has the variable in its reference table"

In reality, the plan has two representations of builder inputs: a prose anatomy list (lines 261-276) and a variable reference table (lines 314-335). The prose list is largely accurate. The variable table is builder-only and explicitly incomplete for other templates. The gap is that Phase B templates (PA, Weaver, Refine, Integrative) have NO variable reference table in the plan at all -- their resolution logic exists only in doc 05 (as TypeScript function parameters) and doc 07 (as per-template variable source mapping tables).

The assembler (`assembler.ts`) must resolve ALL variables across ALL templates. Having the variable mappings split across 3 documents with no single unified table is a structural risk. The plan should either: (a) expand the variable reference table to cover all 6 templates, or (b) explicitly delegate Phase B variables to doc 05/07 as canonical sources and state that the plan table is builder-only.

---

## 11. Master Variable-to-Source Mapping Table (Complete, All Templates)

For implementor reference -- every variable the `assembler.ts` must resolve:

| Variable | Template(s) | Source | Resolution Complexity |
|---|---|---|---|
| `{WORLD_DESCRIPTION}` | Builder, Verifier | Static file read | Simple |
| `{CONVICTION_BRIEF}` | Builder, Verifier, Weaver, Refine | Output dir file read | Simple |
| `{CONTENT_MARKDOWN}` | Builder, Verifier, Refine | Output dir file read | Simple |
| `{FILE_ORDER_DESCRIPTION}` | Builder | Computed by rotation.ts | Medium (depends on rotation index) |
| `{CORPUS_FILES_CONCATENATED}` | Builder, Verifier | Files read + concatenated with headers | Complex (subset-specific, rotation-ordered) |
| `{CASE_STUDY}` | Builder | Static file read | Simple |
| `{MECHANISM_CATALOG}` | Builder, Refine | Static file read | Simple |
| `{COMPONENTS_CSS}` | Builder, Refine | Static file read | Simple |
| `{TOKENS_CSS}` | Builder, Refine | Static file read | Simple |
| `{CONVICTION_LAYER}` | Builder | State object, capped at 10 entries | Medium (FIFO merge logic) |
| `{DISCOVERY_LOG}` | Builder | State object, growing | Simple |
| `{VERIFIER_OBSERVATIONS_SECTION}` | Builder (passes 3, 6 only) | Conditional: previous verifier output or empty | Medium (conditional + wrapping) |
| `{VERIFIER_OUTPUT}` | Nested in above | Previous verifier's raw output | Simple (nested) |
| `{PASS_CONTEXT}` | Builder | Computed from pass number (lookup table) | Simple |
| `{SEVEN_LENSES}` | **GHOST** -- in plan but not in any template | N/A | **Plan variable with no template placeholder** |
| `{PREVIOUS_SUBSET_SUMMARIES}` | **GHOST** -- in plan but not in any template | N/A | **Plan variable with no template placeholder** |
| `{CURRENT_ARTIFACT}` | Verifier, Weaver, Refine | Output dir file read | Simple |
| `{AUDITOR_LETTER}` | PA Auditor | Static per auditor (A-I) | Trivial |
| `{SCREENSHOT_PATHS_1440}` | PA Auditor, Weaver, Integrative | Computed from screenshot dir listing | Medium (glob + format) |
| `{SCREENSHOT_PATHS_768}` | PA Auditor, Integrative | Computed from screenshot dir listing | Medium |
| `{ASSIGNED_QUESTIONS}` | PA Auditor | Parsed from pa-questions.md, filtered by auditor | Complex (markdown parsing) |
| `{PA05_CROSS_VALIDATION_SECTION}` | PA Auditor (B, C, F, G) | Static text per auditor, empty for A/D/E/H/I | Simple (conditional) |
| `{AUDITOR_REPORTS}` | Weaver | 10 report files read + concatenated with headers | Complex (10 file reads + formatting) |
| `{BUILDER_REFLECTION}` | Weaver, Refine | Output dir file read | Simple |
| `{RAW_RESEARCH_FILES}` | Weaver | 2 specific files concatenated | Simple |
| `{WEAVER_SYNTHESIS}` | Refine | Output dir file read | Simple |
| `{RAW_CD_EXPLORATIONS}` | Refine | 1-2 CD exploration HTML files | Medium (config-selected) |
| `{USER_DIRECTION_SECTION}` | Refine | Conditional: user direction file or empty | Simple (conditional) |
| `{USER_DIRECTION_CONTENT}` | Nested in above | Raw user direction text | Simple (nested) |

**Total unique variables: 29** (27 real + 2 ghost)
**Total the plan's variable reference table covers: 15** (all builder-scoped)
**Coverage: 15/27 = 55.6%**

---

## 12. Additional Findings from Deep Cross-Reference (Second Pass)

A second pass through all three documents uncovered additional issues not in the first audit.

### BLOCKING Additions

**FINDING PA-4 (BLOCKING): Plan says integrative auditor "reads A-H reports" -- docs say it does NOT.**

Plan line 162: "Spawn integrative auditor (I) SEQUENTIALLY -- reads A-H reports."

Doc 05 Section 5.1: "It has NO assigned questions. Its job is gestalt impression -- what does the page FEEL like as a whole? It reads ALL screenshots but does NOT read the 9 auditor reports (those go only to the Weaver)."

Doc 07 Template 5a confirms: the integrative auditor template receives ONLY `{SCREENSHOT_PATHS_1440}` and `{SCREENSHOT_PATHS_768}`. No auditor reports are input. The sequential dependency exists only to ensure audit phase is complete, not because the integrative reads A-H.

This is a fundamental misstatement in the plan's Phase B architecture diagram. The integrative is a GESTALT perceiver, not a synthesizer. The synthesis role belongs to the Weaver.

### HIGH Additions

**FINDING W-3 (HIGH): Doc 05 and doc 07 disagree on whether the Weaver receives research files.**

- Doc 07 Template 4 has `{RAW_RESEARCH_FILES}` variable (line 598): "RESEARCH-SYNTHESIS.md + R5-COMBINATION-THEORY.md, ~2,100 lines of raw theory"
- Doc 05 `constructWeaverPrompt()` function signature (lines 888-898) has NO research file parameter. The function takes: auditorReports, integrativeReportPath, screenshotManifest, htmlPath, gateResults, weaverProtocolPath, questionsPath, cycleNumber, previousWeaverReport, mode.
- Plan weaver anatomy item 5 says "Research files (RESEARCH-SYNTHESIS.md + R5)" -- following doc 07.

If doc 05 is canonical for implementation, the Weaver loses 2,100 lines of compositional theory that doc 07 designed it to receive. If doc 07 is canonical, `constructWeaverPrompt()` needs a research files parameter. The plan must pick one.

**FINDING W-4 (HIGH): Doc 05 provides 4 Weaver inputs not in plan's anatomy.**

Doc 05 Section 6.2 lists 8 Weaver inputs. The plan lists 6. Missing from plan:
1. `pa-weaver.md` protocol file -- the Weaver's operating protocol with scoring methodology, calibration scales, and diagnostic vocabulary
2. `pa-questions.md` (FULL file including Section 4 Quality Framework) -- the Weaver is the ONLY agent that receives Section 4
3. Previous cycle's weaver report (cycle >= 2) -- needed for Finding Status Map
4. Artifact mode (APPLIED vs COMPOSED) -- changes PA-05 scoring ceiling and Tier 5 denominator

These are not cosmetic omissions. The protocol file contains the Weaver's entire methodology. The mode flag changes how PA-05a is scored (APPLIED has ceiling of CONDITIONAL PASS for DESIGNED). Without these in the plan's anatomy, the prompt-architect has an incomplete picture of what the Weaver needs.

**FINDING RB-2 (HIGH): IMPROVE builder architecture conflict between doc 05 and doc 07.**

Doc 07 Template 5 (REFINE builder):
- Receives file CONTENTS via `{VARIABLE}` injection into prompt
- `--allowedTools ""` (no tools) per doc 07 line 917
- Variables: `{CURRENT_ARTIFACT}`, `{WEAVER_SYNTHESIS}`, `{BUILDER_REFLECTION}`, `{CONVICTION_BRIEF}`, `{CONTENT_MARKDOWN}`, `{RAW_CD_EXPLORATIONS}`, `{MECHANISM_CATALOG}`, `{COMPONENTS_CSS}`, `{TOKENS_CSS}`, `{USER_DIRECTION_SECTION}`
- Total injected content: HTML artifact (~2K lines) + weaver synthesis (~200 lines) + reflection + conviction brief + content + 1-2 CD explorations (~1.5-3K lines) + mechanism catalog (~750-1,878 lines) + components (~944 lines) + tokens (~183 lines) = estimated 6,000-9,000 lines injected

Doc 05 Section 8.2 (IMPROVE builder):
- Receives file PATHS, reads them via Read tool
- `--allowedTools "Read,Write"` (doc 05 line 1434)
- Receives only: weaverReportPath, convictionBriefPath, htmlPath, config.referenceFiles (3 paths)
- Does NOT receive: content markdown, CD explorations, builder reflection, user direction
- Much smaller prompt, relies on tool-based file reading

Plan invocation table (line 223): Refine Builder gets "Read, Write, Edit" tools with max-turns 30.

Three different tool configurations:
1. Doc 07: NO tools
2. Doc 05: Read, Write
3. Plan: Read, Write, Edit

And two different input models:
1. Doc 07: prompt injection (everything in the prompt)
2. Doc 05: tool-based reading (paths only, agent reads files)

The plan follows doc 07 for input LIST but doc 05 for tool access. This is incoherent.

### WARNING Additions

**FINDING PA-5 (WARNING): Plan does not explicitly prohibit PA questions Section 4 from reaching auditors.**

Doc 05 Section 4.7: "Section 4 (Quality Framework) is NEVER included -- it is Weaver-only content that would contaminate fresh-eyes assessment."

Doc 05 Section 14 (Information Isolation Matrix): PA questions Sec 4 is **bold N** (actively prohibited) for all 9 PA auditors.

The plan's exclusion list says auditors MUST NOT receive "conviction brief, builder context, gate results, design system docs, world description, other auditor reports." It does NOT explicitly mention PA questions Section 4. Since pa-questions.md is neither a "design system doc" nor any of the other listed exclusions, the plan's prohibition is incomplete. The prompt-architect could inadvertently include Section 4 in auditor prompts.

**FINDING RB-3 (WARNING): Doc 05 defines RETHINK and POLISH builders that the plan doesn't distinguish from REFINE.**

Doc 05 Section 8 defines THREE refinement builder types:
1. IMPROVE Builder (Section 8.2) -- compositional deepening, artistic language, NO gate scores/thresholds
2. RETHINK Builder (Section 8.3) -- fresh compositional approach, COMPOSING mode, may reimagine layout
3. POLISH Builder (Section 8.4) -- mechanical fixes ONLY, <= 3 specific fixes, lightest touch

The plan's anatomy section has only "Refinement Builder (Phase B)" as one entry. The file structure lists only `refine-builder.md`. But doc 05 needs 3 different prompt templates. The plan's template list (G.8) says just `templates/refine-builder.md` -- should this be 3 files?

---

## 13. Updated Finding Count

### BLOCKING (4 total -- +1 from second pass)

| ID | Finding |
|----|---------|
| B-1 | `{SEVEN_LENSES}` and `{PREVIOUS_SUBSET_SUMMARIES}` ghost variables |
| V-1 | Verifier missing artifact diff variable |
| PA-1 | Three-way viewport conflict |
| **PA-4** | **Plan says integrative reads A-H reports; docs say it does not** |

### HIGH (5 total -- +4 from second pass)

| ID | Finding |
|----|---------|
| H-1 | Variable reference table is builder-only (55.6% coverage) |
| **W-3** | **Doc 05 vs doc 07 disagree on Weaver getting research files** |
| **W-4** | **Plan missing 4 Weaver inputs from doc 05 (protocol, questions, previous report, mode)** |
| **RB-2** | **IMPROVE builder architecture conflict: prompt injection vs tool-based reading, 3 different tool configs** |
| **PA-5** | **Plan doesn't prohibit PA questions Section 4 from reaching auditors** |

### WARNING (5 total -- +1 from second pass)

| ID | Finding |
|----|---------|
| PA-3 | PA auditor tool mismatch (Read-only vs Read/Write/Glob) |
| W-1 | Gate results inline JSON, not variable substitution |
| W-2 | Doc 05 multi-cycle Weaver inputs not in plan |
| B-2 | Material constraints hardcoded in 2 templates |
| **RB-3** | **Doc 05 has 3 refinement builder types; plan has 1 template file** |

### NOTE (3 unchanged)

| ID | Finding |
|----|---------|
| B-3 | Mechanism catalog line count discrepancy |
| RB-1 | IMPROVE vs REFINE builder distinction unclear |
| PA-2 | Information isolation correctly maintained (positive) |

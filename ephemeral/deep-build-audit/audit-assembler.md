# Assembler Variable Audit

**File audited:** `tools/deep-build/src/prompts/assembler.ts` (537 lines)
**Reference:** Plan lines 471-562 (Prompt Variable Reference) + lines 396-468 (Pass-to-Pass Anatomy)
**Templates verified:** All 10 .md files in `tools/deep-build/templates/`
**Types verified:** `src/types/prompts.ts` (PromptVariableName union, 30 members)

---

## Variable-by-Variable Verdict

### Builder Template Variables

| Variable | Plan Status | Assembler Status | Template Uses It? | Verdict |
|----------|-------------|-----------------|-------------------|---------|
| `{WORLD_DESCRIPTION}` | Static, `templates/world-description.md` | Line 123: `loadFileOrEmpty(path.join(TEMPLATES_DIR, 'world-description.md'))` | builder L9, verifier L9 | **IMPLEMENTED** |
| `{CONVICTION_BRIEF}` | Phase 0 output `_tc-brief.md` | Line 124: `loadFileOrEmpty(path.join(config.outputDir, '_tc-brief.md'))` | builder L25, verifier L15 | **IMPLEMENTED** |
| `{CONTENT_MARKDOWN}` | User's input content file | Line 125: `loadFileOrEmpty(resolveAbsPath(config.contentPath, pr))` | builder L41, verifier L29 | **IMPLEMENTED** |
| `{CONTENT_MAP}` | Phase 0 content analysis output | Line 126: `loadFileOrEmpty(path.join(config.outputDir, '_content-map.md'))` | builder L33 | **IMPLEMENTED** |
| `{FILE_ORDER_DESCRIPTION}` | Computed by rotation.ts | Line 132: `rotation.description` | builder L49 | **IMPLEMENTED** |
| `{CORPUS_FILES_CONCATENATED}` | Loaded per subset+rotation | Lines 134-141: Iterates `rotation.rotatedFiles`, wraps each with marker comment | builder L51 | **IMPLEMENTED** |
| `{CASE_STUDY}` | CD-006 exploration HTML | Line 148: Loads from `design-system/compositional-core/case-studies/CD-006/exploration.html` | builder L59 | **IMPLEMENTED** |
| `{MECHANISM_CATALOG}` | mechanism-catalog.md | Line 149: Loads from `design-system/compositional-core/grammar/mechanism-catalog.md` | builder L68 | **IMPLEMENTED** |
| `{COMPONENTS_CSS}` | components.css | Line 150: Loads from `design-system/compositional-core/components/components.css` | builder L73 | **IMPLEMENTED** |
| `{TOKENS_CSS}` | tokens.css | Line 151: Loads from `design-system/compositional-core/vocabulary/tokens.css` | builder L78 | **IMPLEMENTED** |
| `{CONVICTION_LAYER}` | `state.convictionLayer` (capped at 10, FIFO) | Line 154: `formatConvictionLayer(state.convictionLayer)` | builder L86 | **IMPLEMENTED** |
| `{DISCOVERY_LOG}` | `state.discoveryLog` | Line 155: `formatDiscoveryLog(state.discoveryLog)` | builder L88 | **IMPLEMENTED** |
| `{VERIFIER_OBSERVATIONS_SECTION}` | Only passes 3, 6 | Lines 160-169: Conditional on `passWithinSubset === 3 || 6`, uses last observation | builder L92 | **IMPLEMENTED** |
| `{PASS_CONTEXT}` | Computed rotation/pass/subset description | Line 156: `formatPassContext(pass)` | builder L114 | **IMPLEMENTED** |
| `{PREVIOUS_SUBSET_SUMMARIES}` | Generated from checkpoint retrospectives | Line 157: `formatSubsetSummaries(state.checkpoints, pr)` | builder L108 | **IMPLEMENTED** |
| `{CURRENT_ARTIFACT}` | Current `output.html` | Line 172-173: `loadFileOrEmpty(state.artifactPath)` | builder L101 | **IMPLEMENTED** |
| `{SEVEN_LENSES}` | INLINE in builder template (not a variable) | NOT resolved (correct per plan L562) | Inline in template L214-231 | **IMPLEMENTED** (correctly inline) |
| `{MATERIAL_CONSTRAINTS}` | INLINE in builder template (not a variable) | NOT resolved (correct per plan L562) | Inline in template L198-211 | **IMPLEMENTED** (correctly inline) |
| `{RESPONSE_FORMAT_INSTRUCTIONS}` | INLINE in builder template | NOT in builder resolver (correct); IS in refine-builder resolver (L528-533) | Inline in builder; variable in refine-builder L151 | **IMPLEMENTED** |

### Verifier Template Variables

| Variable | Assembler Status | Verdict |
|----------|-----------------|---------|
| `{WORLD_DESCRIPTION}` | Reuses builder vars (L351: `resolveBuilderVariables`) | **IMPLEMENTED** |
| `{CONVICTION_BRIEF}` | Reuses builder vars | **IMPLEMENTED** |
| `{CORPUS_FILES_CONCATENATED}` | Reuses builder vars (same rotation order) | **IMPLEMENTED** |
| `{CONTENT_MARKDOWN}` | Reuses builder vars | **IMPLEMENTED** |
| `{CURRENT_ARTIFACT}` | Reuses builder vars | **IMPLEMENTED** |
| `{ARTIFACT_DIFF}` | Line 352: `vars.set('ARTIFACT_DIFF', artifactDiff)` — passed as function parameter | **IMPLEMENTED** |
| `{PASS_CONTEXT}` | Reuses builder vars | **IMPLEMENTED** |

### PA Auditor Template Variables

| Variable | Assembler Status | Template Uses It? | Verdict |
|----------|-----------------|-------------------|---------|
| `{AUDITOR_ID}` | Line 435: `vars.set('AUDITOR_ID', auditorId)` | pa-auditor L1, L130 | **IMPLEMENTED** |
| `{ASSIGNED_QUESTIONS}` | Line 436: `assignedQuestions.join('\n')` | pa-auditor L90 | **IMPLEMENTED** |
| `{SCREENSHOT_PATHS}` | Line 437: formatted as bulleted list | pa-auditor L52 | **IMPLEMENTED** |
| `{CURRENT_ARTIFACT}` | Line 438: `vars.set('CURRENT_ARTIFACT', htmlPath)` | pa-auditor L70 | **WRONG** — sets to PATH string, not file content. Plan says "Current HTML (for code inspection)." The auditor gets a file PATH, not the HTML itself. This may be intentional (auditor uses Read tool on it) but is INCONSISTENT with all other `CURRENT_ARTIFACT` usages which load file content via `loadFileOrEmpty()`. |
| `{PA_GUARDRAILS}` | Line 439: `loadFileOrEmpty(guardrailsPath)` | pa-auditor L79 | **IMPLEMENTED** |
| `{EXPERIENTIAL_PROTOCOL}` | Lines 444-447: Set to inline string | NOT in template (experiential pass is inline text at template L9) | **PARTIAL** — resolver exists but template does NOT use the variable. The experiential protocol is inline in the template. The resolver is dead code — harmless but wasteful. |

### PA Integrative Template Variables

| Variable | Assembler Status | Template Uses It? | Verdict |
|----------|-----------------|-------------------|---------|
| `{AUDITOR_REPORTS}` | Lines 462-466: Concatenates all report files with markers | pa-integrative L47 | **IMPLEMENTED** |
| `{SCREENSHOT_PATHS}` | Line 469: formatted as bulleted list | pa-integrative L22 | **IMPLEMENTED** |
| `{CURRENT_ARTIFACT}` | Line 470: `vars.set('CURRENT_ARTIFACT', htmlPath)` | pa-integrative L29 | **WRONG** — same PATH-not-content issue as PA auditor |
| `{PA_GUARDRAILS}` | Line 471: `loadFileOrEmpty(guardrailsPath)` | pa-integrative L36 | **IMPLEMENTED** |

### Weaver Template Variables

| Variable | Assembler Status | Template Uses It? | Verdict |
|----------|-----------------|-------------------|---------|
| `{SCREENSHOT_PATHS}` | Line 496: formatted as bulleted list | pa-weaver L25 | **IMPLEMENTED** |
| `{AUDITOR_REPORTS}` | Lines 489-493: Concatenates all report files with markers | pa-weaver L45 | **IMPLEMENTED** |
| `{CONVICTION_BRIEF}` | Line 497: passed as function parameter | pa-weaver L54 | **IMPLEMENTED** |
| `{BUILDER_REFLECTION}` | Line 498: passed as function parameter | pa-weaver L57 | **IMPLEMENTED** |
| `{GATE_RESULTS}` | Line 499: passed as function parameter | pa-weaver L67 | **IMPLEMENTED** |
| `{RESEARCH_FILES}` | Line 500: passed as function parameter | pa-weaver L75 | **IMPLEMENTED** |
| `{CURRENT_ARTIFACT}` | Line 501: `loadFileOrEmpty(htmlPath)` | pa-weaver L84 | **IMPLEMENTED** (correctly loads content, unlike PA auditor) |
| `{PA_GUARDRAILS_WEAVER}` | Line 502: `loadFileOrEmpty(weaverGuardrailsPath)` | pa-weaver L91 | **IMPLEMENTED** |

### Refinement Builder Template Variables

| Variable | Assembler Status | Template Uses It? | Verdict |
|----------|-----------------|-------------------|---------|
| `{CURRENT_ARTIFACT}` | Line 518: `loadFileOrEmpty(state.artifactPath)` | refine-builder L12 | **IMPLEMENTED** |
| `{WEAVER_SYNTHESIS}` | Line 519: passed as function parameter | refine-builder L27 | **IMPLEMENTED** |
| `{BUILDER_REFLECTION}` | Line 520: passed as function parameter | refine-builder L37 | **IMPLEMENTED** |
| `{CONVICTION_BRIEF}` | Line 521: `loadFileOrEmpty(path.join(config.outputDir, '_tc-brief.md'))` | refine-builder L45 | **IMPLEMENTED** |
| `{CONTENT_MARKDOWN}` | Line 522: `loadFileOrEmpty(resolveAbsPath(config.contentPath, pr))` | refine-builder L53 | **IMPLEMENTED** |
| `{CASE_STUDY}` | Line 523: Loads CD-006 exploration HTML | refine-builder L61 | **IMPLEMENTED** |
| `{MECHANISM_CATALOG}` | Line 524: Loads mechanism-catalog.md | refine-builder L68 | **IMPLEMENTED** |
| `{COMPONENTS_CSS}` | Line 525: Loads components.css | refine-builder L71 | **IMPLEMENTED** |
| `{TOKENS_CSS}` | Line 526: Loads tokens.css | refine-builder L74 | **IMPLEMENTED** |
| `{USER_DIRECTION}` | Line 527: `userDirection ?? ''` (optional parameter) | refine-builder L95 | **IMPLEMENTED** |
| `{RESPONSE_FORMAT_INSTRUCTIONS}` | Lines 528-533: Inline string with HTML_START/END + CONVICTION markers | refine-builder L151 | **IMPLEMENTED** |

### Retrospective Template Variables

| Variable | Assembler Status | Template Uses It? | Verdict |
|----------|-----------------|-------------------|---------|
| `{VERIFIER_OBSERVATIONS}` | Lines 363-367: Joins all observations with separators | retrospective L11 | **IMPLEMENTED** |
| `{ARTIFACT_EVOLUTION}` | Lines 370-374: Size history summary | retrospective L19 | **IMPLEMENTED** |
| `{CONVICTION_LAYER}` | Line 376: `formatConvictionLayer(state.convictionLayer)` | retrospective L27 | **IMPLEMENTED** |
| `{SUBSET_CONTEXT}` | Lines 378-382: Subset ID + name + file list | retrospective L33 | **IMPLEMENTED** |

### TC Derivation + Content Analysis Template Variables

| Variable | Assembler Status | Template Uses It? | Verdict |
|----------|-----------------|-------------------|---------|
| `{CONTENT_MARKDOWN}` | TC: Line 394; CA: Line 413 | tc-derivation L15; content-analysis L13 | **IMPLEMENTED** |
| `{WORLD_DESCRIPTION}` | TC: Line 395; CA: Line 414 | tc-derivation L1; content-analysis L1 | **IMPLEMENTED** |
| `{RESEARCH_FILES}` | TC: Lines 397-401; CA: Lines 416-420 | tc-derivation L23; content-analysis: NOT USED | **PARTIAL** — Content analysis assembler sets `RESEARCH_FILES` (line 420) but the content-analysis.md template does NOT contain a `{RESEARCH_FILES}` variable. This means the variable is set but never substituted — it's dead code in `assembleContentAnalysisPrompt`. The plan lists RESEARCH_FILES under "TC Derivation + Content Analysis Template Variables" implying both use it, but the template only uses it for TC derivation. |

---

## Token Estimation & Trim Logic

### Token Estimation
- **IMPLEMENTED**: `estimateTokens()` in `utils.ts` line 37-39: `Math.ceil(text.length / CHARS_PER_TOKEN)` where `CHARS_PER_TOKEN = 4`
- Plan specifies ~4 chars/token — matches exactly
- Called in `buildAssembledPrompt()` line 322 on final trimmed text

### Trim Logic (>100K threshold)
- **IMPLEMENTED**: `trimIfNeeded()` at lines 228-309
- **TOKEN_TRIM = 95,000** (constants.ts L47) — triggers trimming
- **TOKEN_FAIL = 105,000** (constants.ts L50) — hard fail
- Plan says ">100K" — implementation uses 95K as trim threshold and 105K as hard fail. This is MORE CONSERVATIVE than the plan specifies (trims earlier, fails later), which is defensively correct.

### Trim Strategy (two phases, matching plan architecture)
1. **Phase 1** (L242-254): Trim conviction layer — removes oldest half of entries. Checks if under TOKEN_TRIM after.
2. **Phase 2** (L256-305): Trim valley-position corpus files — removes positions 2-3 (middle of rotation order, least attention-critical). Fails hard if >50% of corpus removed and still over TOKEN_FAIL.
- **V-05 defense** (L207): Escapes `{UPPER_CASE}` patterns in variable values to prevent content injection. This is a security defense not in the plan but correctly implemented.

### Corpus Concatenation in Rotation Order
- **IMPLEMENTED**: Lines 129-145 in `resolveBuilderVariables`
- Calls `computeRotation(subset.files, pass.rotationIndex)` to get rotated file order
- Iterates `rotation.rotatedFiles` in order, wrapping each with `<!-- === fileName === -->` markers
- Joins with double newline
- Same vars reused for verifier (line 351: `resolveBuilderVariables` called again)
- Rotation logic in `orchestrator/rotation.ts` uses `SHIFT_TABLE` lookup — verified correct

---

## Summary

| Category | IMPLEMENTED | PARTIAL | WRONG | MISSING |
|----------|------------|---------|-------|---------|
| Builder (19 vars) | 19 | 0 | 0 | 0 |
| Verifier (7 vars) | 7 | 0 | 0 | 0 |
| PA Auditor (6 vars) | 4 | 1 | 1 | 0 |
| PA Integrative (4 vars) | 3 | 0 | 1 | 0 |
| Weaver (8 vars) | 8 | 0 | 0 | 0 |
| Refine Builder (11 vars) | 11 | 0 | 0 | 0 |
| Retrospective (4 vars) | 4 | 0 | 0 | 0 |
| TC/Content Analysis (3 vars) | 2 | 1 | 0 | 0 |
| Token/Trim | 3/3 | 0 | 0 | 0 |
| **TOTAL** | **61** | **2** | **2** | **0** |

### Findings Requiring Action

**WRONG-1: PA Auditor `{CURRENT_ARTIFACT}` set to PATH, not content**
- File: `assembler.ts:438`
- `vars.set('CURRENT_ARTIFACT', htmlPath)` — sets the raw file path string
- Every other `CURRENT_ARTIFACT` usage loads file content via `loadFileOrEmpty()`
- The weaver (line 501) correctly uses `loadFileOrEmpty(htmlPath)` for the same variable
- **Risk:** If the PA auditor template substitutes this variable inline, the auditor sees a file path instead of HTML. However, if the template instructs auditors to use the Read tool on this path, it might be intentional. The template at L70 says `{CURRENT_ARTIFACT}` — ambiguous intent.
- **Fix:** Either change to `loadFileOrEmpty(htmlPath)` to match all other usages, or rename to `{ARTIFACT_PATH}` to make the intent explicit.

**WRONG-2: PA Integrative `{CURRENT_ARTIFACT}` same PATH issue**
- File: `assembler.ts:470`
- Same issue as WRONG-1 — sets path string, not file content

**PARTIAL-1: `{EXPERIENTIAL_PROTOCOL}` resolver is dead code**
- File: `assembler.ts:444-447`
- Resolver sets the variable to inline text, but the pa-auditor.md template does NOT use `{EXPERIENTIAL_PROTOCOL}` anywhere — the experiential pass instructions are written directly into the template as prose at section 0
- **Risk:** None (dead code is harmless). But it consumes mental overhead during maintenance.
- **Fix:** Remove the `vars.set('EXPERIENTIAL_PROTOCOL', ...)` call, or add `{EXPERIENTIAL_PROTOCOL}` to the template if dynamic experiential protocol text is desired.

**PARTIAL-2: Content analysis sets `{RESEARCH_FILES}` but template doesn't use it**
- File: `assembler.ts:416-420` sets RESEARCH_FILES for content analysis
- Template `content-analysis.md` does NOT contain `{RESEARCH_FILES}`
- The variable is loaded, concatenated, but never substituted
- **Risk:** Wasted file I/O. No functional impact.
- **Fix:** Either remove the RESEARCH_FILES resolution from `assembleContentAnalysisPrompt`, or add `{RESEARCH_FILES}` to the content-analysis template if the content analyzer should reference research files.

### Type Safety

The `PromptVariableName` union type in `types/prompts.ts` includes all 30 variable names used across templates. Every `vars.set()` call uses a string literal that matches a member of this union. No type mismatches detected.

### Security

- **V-05 injection defense** (L207): `value.replace(/\{([A-Z_]{2,})\}/g, '⟨$1⟩')` prevents user content markdown from injecting template variables. Correctly implemented.
- `loadFileOrEmpty` wraps `readFileChecked` in try/catch, returning empty string on missing files. No path traversal risk since all paths are constructed from config values, not user input.

---

**Auditor:** audit-assembler agent
**Date:** 2026-02-28
**Confidence:** HIGH — all 10 template files grep-verified, all assembler functions traced line-by-line

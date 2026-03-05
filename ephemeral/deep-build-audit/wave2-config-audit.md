# Wave 2: Config Directory Audit
## `tools/deep-build/src/config/`
Date: 2026-02-28
Auditor: config-audit agent (Opus 4.6, zero prior context)

---

## Summary

| File | Findings | BLOCKING | HIGH | MEDIUM | LOW |
|------|----------|----------|------|--------|-----|
| constants.ts | 8 | 1 | 3 | 3 | 1 |
| corpus.ts | 5 | 0 | 2 | 2 | 1 |
| paths.ts | 2 | 0 | 1 | 1 | 0 |
| pa-questions.ts | 3 | 1 | 1 | 1 | 0 |
| **TOTAL** | **18** | **2** | **7** | **7** | **2** |

---

## 1. constants.ts

### C-01: `builder` MAX_TURNS = 1 prevents iteration [HIGH]
- **File:** constants.ts:87
- **Issue:** `'builder': 1` means the builder agent gets exactly 1 turn. A builder that encounters an issue (tool error, partial output, needs to read a reference file mid-build) cannot retry or iterate. The builder prompt uses `claude -p` which with `--max-turns 1` means the model gets one shot to produce the entire HTML artifact.
- **Context:** This may be intentional (builder produces one monolithic output as a pure generation pass), but `refine-builder` gets 25 turns (line 94). If the builder role is truly one-shot-only, this works. If there is any expectation of tool use during building, 1 turn is fatal.
- **Severity:** HIGH — if builder is expected to read files or use tools, 1 turn is insufficient. If builder is a pure generation pass with all context injected via prompt, this is acceptable by design.
- **Suggested fix:** Verify the builder prompt. If builder uses `--allowedTools ''` (confirmed on line 101), then 1 turn is consistent — the builder has no tools and generates in one pass. Mark this as INTENTIONAL in a code comment for clarity. If the design changes to give builder tools, this must increase.

### C-02: `builder` and `verifier` ALLOWED_TOOLS = empty string [MEDIUM]
- **File:** constants.ts:101-102
- **Issue:** Empty string `''` for allowed tools. The consumer of this value must handle the empty string correctly when constructing `--allowedTools` flags. If the consumer passes `--allowedTools ""` to `claude -p`, the behavior depends on how Claude CLI parses an empty allowedTools value — it could mean "no tools" or could be interpreted differently.
- **Severity:** MEDIUM — functional risk if CLI interprets empty string differently than "no tools allowed."
- **Suggested fix:** Add a comment clarifying the semantic meaning. Consider using a sentinel like `'none'` if the CLI supports it, or ensure the consumer omits the `--allowedTools` flag entirely when the value is empty.

### C-03: Budget thresholds significantly different from comment [MEDIUM]
- **File:** constants.ts:17-20
- **Issue:** The team lead's task description says "$15 warning, $25 hard cap" but the actual values are `BUDGET_WARNING = 150` and `BUDGET_CAP = 250`. These are 10x higher than described.
- **Context:** The comment says "in USD" so these are $150/$250. This may be correct for the actual pipeline (Opus agents across 56 corpus passes + PA auditors is expensive). The discrepancy is between the task description and the code, not necessarily a code bug.
- **Severity:** MEDIUM — the code values are internally consistent but differ from what the task assignor described. If $15/$25 was the actual intent, these are 10x too high and the pipeline could burn $249 before stopping.
- **Suggested fix:** Clarify with stakeholder. If $150/$250 is correct, update any external documentation. If $15/$25 was intended, update the constants.

### C-04: RETRY_BACKOFF is not exponential [LOW]
- **File:** constants.ts:13-14
- **Issue:** Comment says "Exponential backoff delays" but values are `[5000, 15000, 45000]` which is `5s, 15s, 45s` — a 3x multiplier each step. True exponential would be `5s, 10s, 20s` (2x) or `5s, 25s, 125s` (5x). The 3x multiplier is reasonable but the comment is misleading.
- **Severity:** LOW — behavior is fine, comment is slightly inaccurate.
- **Suggested fix:** Change comment to "Progressive backoff delays (3x multiplier)" or accept as-is.

### C-05: CHARS_PER_TOKEN = 4 is slightly high [MEDIUM]
- **File:** constants.ts:53
- **Issue:** Modern tokenizers (cl100k_base for GPT-4, Claude's tokenizer) average ~3.2-3.8 chars/token for English prose, and ~2.5-3.0 for code/markdown with lots of special characters. Using 4 means TOKEN_LIMIT of 100K tokens would allow ~400K chars, but actual 100K tokens is closer to ~350K chars. This means the system could assemble prompts that are ~14% over the actual token limit while believing they're under.
- **Severity:** MEDIUM — could cause token limit overruns. The TOKEN_FAIL safety at 105K provides some buffer but if char estimation is 14% off, a prompt estimated at 95K tokens (below TOKEN_TRIM) could actually be ~108K tokens (above TOKEN_FAIL).
- **Suggested fix:** Use 3.5 for a more conservative estimate, or 3.7 as a middle ground. Since this is used for estimation (not billing), being slightly conservative (lower chars/token = higher estimated token count) is safer than being optimistic.

### C-06: MINI_PA_AUDITORS selection rationale undocumented [LOW-INFO]
- **File:** constants.ts:78
- **Issue:** `MINI_PA_AUDITORS = ['A', 'C', 'G']` — why these three? A (Soul/Identity) makes sense as it owns PA-05. C (Spatial/Proportion) and G (Metaphor/Ideology) are reasonable but D (Flow/Pacing) or B (Readability) could arguably be more important for a quick signal. No comment explains the selection.
- **Severity:** LOW — not a bug, but tribal knowledge.
- **Suggested fix:** Add a comment: `// A=PA-05 owner, C=spatial+void, G=metaphor — coverage: quality + space + meaning`

### C-07: PA_THRESHOLD and scoring inconsistency [HIGH]
- **File:** constants.ts:26
- **Issue:** `PA_THRESHOLD = 3.5` for SHIP verdict. But PA-05 is scored on a 1-4 scale (see pa-questions.md section 1.3). A score of 3.5 would mean 3.5/4 sub-criteria passing, which is not a natural value — you can get 3/4 or 4/4, not 3.5/4. The source material (pa-questions.md line 58) mentions Gas Town scored PA-05 3.5 through conditional passes. So 3.5 is achievable but only via the CONDITIONAL PASS mechanism where a technically-passing sub-criterion is downgraded.
- **Context:** The threshold of 3.5 means: "4/4 technically pass BUT one has a critical defect reducing it to conditional" OR "3/4 clean pass + 1 conditional = 3.5". This is a valid threshold but the scoring mechanism is non-obvious.
- **Severity:** HIGH — the threshold works but the scoring system that produces fractional values is not documented in this file. A developer reading `PA_THRESHOLD = 3.5` would not know how a 4-point binary scale produces 3.5.
- **Suggested fix:** Add a comment explaining the conditional pass mechanism: `// PA-05 is 4 sub-criteria. Each: PASS=1, CONDITIONAL=0.5, FAIL=0. So 3.5 = 3 clean + 1 conditional.`

### C-08: STRICT_MCP_ROLES is incomplete [BLOCKING]
- **File:** constants.ts:112
- **Issue:** `STRICT_MCP_ROLES = ['pa-auditor', 'integrative-auditor']` — these roles get `--strict-mcp-config` to deny Playwright access. But PA auditors need to READ screenshots (via Read tool), not take them. The `pa-auditor` ALLOWED_TOOLS on line 105 gives `Read,Glob,Grep` which is correct.
- **The real issue:** The `weaver` role (line 107) has `Read,Glob` — but if the weaver needs to read screenshot files, it also needs --strict-mcp-config to prevent it from accidentally launching Playwright. And `cross-subset-verifier` (line 104) has only `Read` but could potentially interact with MCP tools.
- **More critically:** What does `--strict-mcp-config` actually do? If it denies ALL MCP tools (not just Playwright), then auditors with `Read,Glob,Grep` lose access to any MCP-provided tools they might need. If it specifically denies only Playwright, then the `weaver` and `cross-subset-verifier` should also be in this list.
- **Severity:** BLOCKING — if `--strict-mcp-config` denies Playwright specifically, the weaver should be included (it doesn't need browser access). If it denies ALL MCP tools, we need to verify auditors don't need any MCP tools beyond Claude Code built-ins.
- **Suggested fix:** Clarify the exact behavior of `--strict-mcp-config`. If it only blocks Playwright, add `'weaver'` and `'cross-subset-verifier'` to the list. If it blocks all MCP, verify that no role in the list needs MCP tools.

---

## 2. corpus.ts

### CR-01: S6 approximateLines significantly wrong for 4 of 6 files [HIGH]
- **File:** corpus.ts:117-123
- **Issue:** The `approximateLines` values for S6 (Pipeline Knowledge) files are significantly off from actual:

| File | Declared | Actual | Delta | % Off |
|------|----------|--------|-------|-------|
| artifact-identity-perception.md | 500 | 556 | +56 | +11% |
| artifact-builder-recipe.md | 400 | 827 | +427 | **+107%** |
| artifact-routing.md | 300 | 1056 | +756 | **+252%** |
| artifact-orchestrator.md | 400 | 755 | +355 | **+89%** |
| artifact-value-tables.md | 300 | 262 | -38 | -13% |
| artifact-tc-brief-template.md | 223 | 235 | +12 | +5% |

- **Impact:** Token estimation for S6 uses these line counts. With actual total = 3,691 lines vs declared 2,123 lines (74% undercount), S6 passes will severely underestimate token budget. The assembler may produce prompts exceeding TOKEN_LIMIT because it believes S6 files are much smaller than they are.
- **Severity:** HIGH — token budget miscalculation could cause silent over-limit prompts or runtime failures at TOKEN_FAIL threshold. Especially dangerous because CHARS_PER_TOKEN is already optimistic (C-05 above), compounding the underestimate.
- **Suggested fix:** Update all approximateLines to match actual `wc -l` output. Consider adding a build-time validation step that checks declared vs actual line counts and warns if delta exceeds 20%.

### CR-02: S7 approximateLines also off [MEDIUM]
- **File:** corpus.ts:130-134
- **Issue:** S7 (PA & Evaluation) line counts:

| File | Declared | Actual | Delta | % Off |
|------|----------|--------|-------|-------|
| pa-questions.md | 431 | 456 | +25 | +6% |
| pa-deployment.md | 355 | 450 | +95 | +27% |
| pa-weaver.md | 449 | 468 | +19 | +4% |
| pa-guardrails.md | 113 | 113 | 0 | 0% |
| pa-guardrails-weaver.md | 59 | 59 | 0 | 0% |

- **Severity:** MEDIUM — less severe than S6 but pa-deployment.md is 27% off. Combined with infrastructure files loaded every pass, these add up.
- **Suggested fix:** Update pa-questions.md to 456, pa-deployment.md to 450, pa-weaver.md to 468.

### CR-03: Infrastructure files loaded in EVERY pass but not counted in subset totals [MEDIUM]
- **File:** corpus.ts:23-39, 65-66
- **Issue:** Infrastructure files (mechanism-catalog 751, components.css 944, tokens.css 183 = 1,878 lines) are loaded in every single pass across all 7 subsets. This is ~1,878 lines x 56 passes = constant overhead. The line counts are accurate (verified exact match), but the token impact is significant: ~1,878 lines at ~20 chars/line avg = ~37,560 chars = ~9,390 tokens per pass just for infrastructure files.
- **Context:** This is by design (infrastructure is the shared reference). But subset token budgets should account for this baseline.
- **Severity:** MEDIUM — not a bug, but the total per-pass token budget is: infrastructure (~9.4K tokens) + subset files (varies). S6 actual lines total 3,691 + infra 1,878 = 5,569 lines, which at ~20 chars/line / 4 chars/token = ~27,845 tokens just for corpus files before prompt template, conviction layer, and discovery log.
- **Suggested fix:** Add a comment documenting the effective per-pass token budget. Consider adding a `getEstimatedTokens(subsetId)` helper that includes infrastructure overhead.

### CR-04: Subset balance — S4 has only 4 files vs others' 5-6 [LOW]
- **File:** corpus.ts:94-101
- **Issue:** S4 (Composition Case Studies) has 4 files (1,659 lines total). Other subsets have 5 files (S1, S2, S3, S5, S7) or 6 files (S6). With carousel rotation across 8 passes per subset, 4 files means the rotation pattern differs from 5-file and 6-file subsets. The SHIFT_TABLE (constants.ts:115-119) has entries for 4, 5, and 6 file counts, so this is handled.
- **Severity:** LOW — rotation works, but S4 passes will have less total content than other subsets, meaning the builder sees fewer reference examples during those passes.
- **Suggested fix:** Consider whether any additional case study files could be added to S4 for balance. Not urgent.

### CR-05: Missing files from corpus that exist on disk [HIGH]
- **File:** corpus.ts (entire file)
- **Issue:** Several files exist in `design-system/compositional-core/` that are NOT in any corpus subset:

**Grammar directory (4 files, 0 in corpus besides mechanism-catalog.md):**
- `grammar/compositional-rules.md` — NOT IN CORPUS
- `grammar/border-system.md` — NOT IN CORPUS
- `grammar/mechanism-combinations.md` — NOT IN CORPUS
- `grammar/README.md` — NOT IN CORPUS (acceptable, READMEs are navigational)

**Guidelines directory (3 files, only 1 in corpus):**
- `guidelines/responsive-strategy.md` — NOT IN CORPUS
- `guidelines/usage-criteria.md` — NOT IN CORPUS
- `guidelines/README.md` — NOT IN CORPUS (acceptable)

**Components directory (2 split CSS files not in corpus):**
- `components/components-dd-od.css` — NOT IN CORPUS
- `components/components-cd-tt.css` — NOT IN CORPUS

**Identity directory (1 missing):**
- `identity/README.md` — NOT IN CORPUS (acceptable)

**Research directory:**
- `research/CLAUDE.md` — NOT IN CORPUS (acceptable, navigational)

- **Impact:** `compositional-rules.md`, `border-system.md`, `mechanism-combinations.md`, and `responsive-strategy.md` may contain building-critical content that the builder never sees. If these files define rules or patterns the builder should follow, their absence from the corpus is a gap.
- **Severity:** HIGH — depends on content of missing files. If `compositional-rules.md` contains rules that complement `mechanism-catalog.md`, or if `border-system.md` contains the border conventions the builder needs, these are significant omissions.
- **Suggested fix:** Audit the content of each missing file. If it contains builder-relevant content, add to an appropriate subset or to infrastructure files. The split CSS files (`components-dd-od.css`, `components-cd-tt.css`) are especially suspect — if `components.css` is a merged version, the splits may be redundant. If the splits contain content NOT in `components.css`, they need inclusion.

---

## 3. paths.ts

### P-01: resolveProjectRoot() fallback is fragile [HIGH]
- **File:** paths.ts:38-39
- **Issue:** The fallback `path.resolve(PACKAGE_ROOT, '..', '..')` assumes the package is at `{projectRoot}/tools/deep-build/`. If the package is moved (e.g., to `{projectRoot}/packages/deep-build/` or used as a standalone tool), the fallback silently returns the wrong directory.
- **Context:** The .git traversal (lines 30-37) is robust and should work in all normal cases. The fallback only triggers if no `.git` directory is found in 10 levels of parent traversal.
- **Severity:** HIGH — silent wrong path is worse than a crash. If the fallback fires, all corpus file paths will resolve incorrectly, causing cryptic "file not found" errors downstream.
- **Suggested fix:** Throw an error instead of falling back: `throw new Error('Could not find project root (.git directory) within 10 parent levels of ' + PACKAGE_ROOT)`. The fallback gives false confidence.

### P-02: caseStudy path in resolveProjectPaths points to HTML file, not corpus file [MEDIUM]
- **File:** paths.ts:57
- **Issue:** `caseStudy: path.join(projectRoot, 'design-system', 'validated-explorations', 'combination', 'CD-006-pilot-migration.html')` — this points to the actual HTML artifact, not the case study markdown in the corpus (`design-system/compositional-core/case-studies/CD-006-pilot-migration.md`).
- **Context:** The file exists at the declared path (verified). This may be intentional — the HTML is the reference build artifact that auditors compare against. But having a path named `caseStudy` that points to an HTML file while the corpus has a similarly-named `.md` file could cause confusion.
- **Severity:** MEDIUM — not a bug if the HTML path is intentionally for the reference artifact. But the naming is ambiguous.
- **Suggested fix:** Rename to `caseStudyHtml` or `referenceArtifact` to distinguish from the corpus markdown file.

---

## 4. pa-questions.ts

### PA-01: Question assignments do NOT match pa-deployment.md source of truth [BLOCKING]
- **File:** pa-questions.ts:36-44
- **Issue:** The `PA_QUESTION_ASSIGNMENTS` are simple sequential ranges (A: PA-01 to PA-07, B: PA-08 to PA-16, etc.) but the authoritative source (`pa-deployment.md` Section 1.2) has a completely different, non-sequential assignment scheme:

| Auditor | pa-questions.ts (code) | pa-deployment.md (truth) | Match? |
|---------|----------------------|-------------------------|--------|
| **A** | PA-01 to PA-07 | PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76 | NO |
| **B** | PA-08 to PA-16 | PA-02, PA-08, PA-29, PA-55, PA-56, PA-70, PA-81, PA-77 | NO |
| **C** | PA-17 to PA-23 | PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53, PA-64, PA-66 | NO |
| **D** | PA-24 to PA-29 | PA-12, PA-13, PA-34, PA-35, PA-36, PA-52, PA-69, PA-71, PA-62, PA-74, PA-75 | NO |
| **E** | PA-30 to PA-36 | PA-14, PA-15, PA-37, PA-38, PA-39, PA-80, PA-63 | NO |
| **F** | PA-37 to PA-42 | PA-16, PA-17, PA-41, PA-60, PA-61 | NO |
| **G** | PA-43 to PA-49 | PA-18, PA-19, PA-20, PA-42, PA-43, PA-44, PA-54, PA-68 | NO |
| **H** | PA-50 to PA-55 | PA-22, PA-23, PA-46, PA-47, PA-73 | NO |

**Zero auditors match.** The code has sequential ranges; the source of truth has carefully designed non-sequential assignments organized by domain expertise (A=impression, B=readability, C=spatial, etc.).

- **Impact:** If the orchestrator uses `PA_QUESTION_ASSIGNMENTS` to inject question lists into auditor prompts, every auditor will receive the WRONG questions. Auditor A (Soul & Identity) would get PA-01 through PA-07 instead of PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76. This means:
  - A doesn't get PA-05 (the PRIMARY success metric) — it's in the sequential range but PA-06 and PA-07 are NOT assigned to A in the source
  - A doesn't get PA-45, PA-65, PA-67, PA-72, PA-76 (quality/Tier5/extended questions)
  - B gets PA-09 through PA-16 instead of the readability-focused set
  - Questions are misrouted to wrong domain experts
  - Some questions double-counted, others orphaned

- **Severity:** BLOCKING — every PA auditor receives wrong questions. The entire PA system produces invalid results.
- **Suggested fix:** Replace the sequential ranges with the exact assignments from pa-deployment.md Section 1.2:
```typescript
export const PA_QUESTION_ASSIGNMENTS: Record<Exclude<AuditorId, 'I'>, string[]> = {
  A: ['PA-01', 'PA-03', 'PA-04', 'PA-05', 'PA-45', 'PA-65', 'PA-67', 'PA-72', 'PA-76'],
  B: ['PA-02', 'PA-08', 'PA-29', 'PA-55', 'PA-56', 'PA-70', 'PA-77', 'PA-81'],
  C: ['PA-11', 'PA-30', 'PA-31', 'PA-32', 'PA-33', 'PA-50', 'PA-51', 'PA-53', 'PA-64', 'PA-66'],
  D: ['PA-12', 'PA-13', 'PA-34', 'PA-35', 'PA-36', 'PA-52', 'PA-62', 'PA-69', 'PA-71', 'PA-74', 'PA-75'],
  E: ['PA-14', 'PA-15', 'PA-37', 'PA-38', 'PA-39', 'PA-63', 'PA-80'],
  F: ['PA-16', 'PA-17', 'PA-41', 'PA-60', 'PA-61'],
  G: ['PA-18', 'PA-19', 'PA-20', 'PA-42', 'PA-43', 'PA-44', 'PA-54', 'PA-68'],
  H: ['PA-22', 'PA-23', 'PA-46', 'PA-47', 'PA-73'],
};
```

### PA-02: AUDITOR_FOCUS descriptions are reasonable but incomplete [HIGH]
- **File:** pa-questions.ts:19-29
- **Issue:** The focus descriptions match the pa-deployment.md roles reasonably well but some could be more specific:

| Auditor | Code Focus | Deployment Role | Comment |
|---------|-----------|-----------------|---------|
| A | 'Soul & Identity' | Impression + Emotion | Code says "Soul" but A owns PA-05 (the core quality metric) — "Impression & Quality" would be more accurate |
| B | 'Perception & Spatial' | Readability + Typography | **WRONG** — B is readability/typography, NOT spatial. Spatial is C. |
| C | 'Coherence & Integration' | Spatial + Proportion | **WRONG** — C is spatial/proportion, NOT coherence. Coherence is... nobody? C owns spatial questions. |
| D | 'Metaphor & Meaning' | Flow + Pacing | **WRONG** — D is flow/pacing, NOT metaphor. Metaphor is G. |
| E | 'Content Fidelity' | Grid + Layout | **WRONG** — E is grid/layout, NOT content fidelity. |
| F | 'Responsive & Breakpoints' | Consistency + Rhythm | **WRONG** — F is consistency/rhythm. Responsive is H. |
| G | 'Typography & Readability' | Metaphor + Ideology | **WRONG** — G is metaphor/ideology. Typography is B. |
| H | 'Spatial Composition' | Responsiveness | **WRONG** — H is responsiveness. Spatial is C. |
| I | 'Cross-cutting Synthesis' | Cross-Page + Adversarial | Close match. |

**7 of 9 auditor focus descriptions are wrong.** The descriptions appear to have been written from a different earlier version of the assignment scheme or are simply shuffled.

- **Severity:** HIGH — if focus descriptions are used in auditor prompts (to frame the auditor's role), 7/9 auditors receive the wrong framing, biasing their attention toward the wrong domain.
- **Suggested fix:** Update to match pa-deployment.md:
```typescript
export const AUDITOR_FOCUS: Record<AuditorId, string> = {
  A: 'Impression & Quality (PA-05 Primary)',
  B: 'Readability & Typography',
  C: 'Spatial Composition & Proportion',
  D: 'Flow & Pacing',
  E: 'Grid & Layout',
  F: 'Consistency & Rhythm',
  G: 'Metaphor & Ideology',
  H: 'Responsiveness & Breakpoints',
  I: 'Cross-cutting Synthesis (Integrative)',
};
```

### PA-03: Question count mismatch — code covers 55 questions, source has 69 [MEDIUM]
- **File:** pa-questions.ts:36-44
- **Issue:** The code assigns PA-01 through PA-55 across auditors A-H (55 questions in sequential ranges). The source of truth has 69 questions (PA-01 through PA-81 with gaps, totaling 69 unique questions). This means 14 questions in the source are not covered by any auditor in the code:
  - Tier 5 questions (PA-60 through PA-68) — 9 questions
  - Extended questions (PA-72 through PA-77) — 6 questions minus 1 overlap = 5 unique
  - PA-69, PA-70, PA-71 (pipeline integration) — 3 questions
  - PA-80, PA-81 — 2 questions
  - Various non-sequential assignments (PA-29, PA-45, PA-55, PA-56, etc.)

  The sequential range PA-01 to PA-55 ALSO includes question IDs that don't exist (e.g., PA-06 was retired, PA-07 may not exist, PA-09 was retired, PA-10 may not exist, PA-21 may not exist, PA-40 was retired, PA-49 doesn't appear in the source, etc.).

- **Severity:** MEDIUM — this is a consequence of PA-01 (the assignments being completely wrong). Once PA-01 is fixed, this resolves automatically.
- **Suggested fix:** Fixing PA-01 resolves this.

---

## Cross-Cutting Issues

### X-01: No runtime validation of configuration
- **Files:** All config files
- **Issue:** None of the config files include runtime validation. Constants are exported as plain values with no range checks. Corpus paths are declared as correct but verified only by the comment "FILESYSTEM-VERIFIED." PA question assignments are wrong but nothing catches this at build or test time.
- **Severity:** MEDIUM — a test suite that validates corpus paths exist, PA assignments match source, and constants are within expected ranges would catch PA-01, CR-01, and CR-02.
- **Suggested fix:** Add a `validateConfig()` function (or test) that: (a) checks all corpus file paths exist, (b) verifies approximateLines within 25% of actual, (c) validates PA assignments total to 69 unique questions, (d) verifies no question ID appears in two auditors.

### X-02: SHIFT_TABLE only covers 4-6 file subsets
- **File:** constants.ts:115-119
- **Issue:** `SHIFT_TABLE` has entries for 4, 5, and 6 files per subset. If a subset is modified to have 3 or 7 files, the rotation will fail with an undefined lookup.
- **Severity:** LOW — all current subsets have 4-6 files so this works. But adding a subset with 3 or 7 files would silently break rotation.
- **Suggested fix:** Add a runtime check in the rotation function, or extend the table to cover 3-8.

---

## Priority Fix Order

1. **PA-01 [BLOCKING]** — Fix PA_QUESTION_ASSIGNMENTS to match pa-deployment.md. Every PA run until this is fixed produces invalid results.
2. **C-08 [BLOCKING]** — Clarify STRICT_MCP_ROLES scope and add missing roles.
3. **PA-02 [HIGH]** — Fix AUDITOR_FOCUS descriptions (7/9 wrong).
4. **CR-01 [HIGH]** — Update S6 approximateLines (3 files are 89-252% off).
5. **CR-05 [HIGH]** — Audit and potentially add missing corpus files (compositional-rules.md, border-system.md, etc.).
6. **P-01 [HIGH]** — Replace silent fallback with error throw in resolveProjectRoot().
7. **C-01 [HIGH]** — Document builder MAX_TURNS=1 as intentional (or increase if tools expected).
8. **C-07 [HIGH]** — Document PA-05 conditional pass scoring mechanism.
9. **C-05 [MEDIUM]** — Consider reducing CHARS_PER_TOKEN to 3.5.
10. **CR-02 [MEDIUM]** — Update S7 approximateLines.
11. **CR-03 [MEDIUM]** — Document infrastructure token overhead per pass.
12. **C-02 [MEDIUM]** — Clarify empty-string ALLOWED_TOOLS behavior.
13. **C-03 [MEDIUM]** — Reconcile budget threshold documentation.
14. **P-02 [MEDIUM]** — Rename caseStudy to caseStudyHtml in paths.
15. **X-01 [MEDIUM]** — Add configuration validation test.

---

## Files Verified (All Paths)

### Infrastructure (3 files) — ALL EXIST, ALL LINE COUNTS EXACT
- `design-system/compositional-core/grammar/mechanism-catalog.md` — 751 lines (declared 751) EXACT
- `design-system/compositional-core/components/components.css` — 944 lines (declared 944) EXACT
- `design-system/compositional-core/vocabulary/tokens.css` — 183 lines (declared 183) EXACT

### S1: Research Foundation (5 files) — ALL EXIST, ALL LINE COUNTS EXACT
- R3-DENSITY-DIMENSIONS.md — 553 (declared 553) EXACT
- R4-AXIS-INNOVATIONS.md — 990 (declared 990) EXACT
- R5-COMBINATION-THEORY.md — 784 (declared 784) EXACT
- RESEARCH-SYNTHESIS.md — 383 (declared 383) EXACT
- DD-006-fractal.md — 377 (declared 377) EXACT

### S2: Identity & Perception (5 files) — ALL EXIST, ALL LINE COUNTS EXACT
- R1-DOCUMENTATION-PATTERNS.md — 584 (declared 584) EXACT
- R2-CREATIVE-LAYOUTS.md — 810 (declared 810) EXACT
- OD-001-conversational.md — 297 (declared 297) EXACT
- OD-004-confidence.md — 309 (declared 309) EXACT
- OD-006-creative.md — 333 (declared 333) EXACT

### S3: Deep Dives & Structure (5 files) — ALL EXIST, ALL LINE COUNTS EXACT
- DD-003-islands.md — 405 (declared 405) EXACT
- DD-004-layers.md — 428 (declared 428) EXACT
- dd-003-islands-visual.md — 462 (declared 462) EXACT
- dd-004-layers-visual.md — 144 (declared 144) EXACT
- dd-006-fractal-visual.md — 165 (declared 165) EXACT

### S4: Composition Case Studies (4 files) — ALL EXIST, ALL LINE COUNTS EXACT
- CD-001-reasoning-inside-code.md — 415 (declared 415) EXACT
- CD-005-multi-axis-transition.md — 386 (declared 386) EXACT
- CD-006-pilot-migration.md — 387 (declared 387) EXACT
- ANTI-PRESCRIPTION-TEMPLATE.md — 471 (declared 471) EXACT

### S5: Identity & Guidelines (4 files) — ALL EXIST, ALL LINE COUNTS EXACT
- semantic-rules.md — 529 (declared 529) EXACT
- prohibitions.md — 419 (declared 419) EXACT
- soul-constraints.md — 342 (declared 342) EXACT
- case-studies/README.md — 541 (declared 541) EXACT

### S6: Pipeline Knowledge (6 files) — ALL EXIST, 4/6 LINE COUNTS WRONG
- artifact-identity-perception.md — 556 (declared 500) OFF +11%
- artifact-builder-recipe.md — 827 (declared 400) **OFF +107%**
- artifact-routing.md — 1056 (declared 300) **OFF +252%**
- artifact-orchestrator.md — 755 (declared 400) **OFF +89%**
- artifact-value-tables.md — 262 (declared 300) OFF -13%
- artifact-tc-brief-template.md — 235 (declared 223) OFF +5%

### S7: PA & Evaluation (5 files) — ALL EXIST, 2/5 LINE COUNTS OFF
- pa-questions.md — 456 (declared 431) OFF +6%
- pa-deployment.md — 450 (declared 355) OFF +27%
- pa-weaver.md — 468 (declared 449) OFF +4%
- pa-guardrails.md — 113 (declared 113) EXACT
- pa-guardrails-weaver.md — 59 (declared 59) EXACT

### paths.ts References — ALL VERIFIED
- CD-006-pilot-migration.html — EXISTS at declared path
- .git directory — EXISTS at project root
- tools/deep-build/ — EXISTS (2 levels below project root, matching fallback assumption)

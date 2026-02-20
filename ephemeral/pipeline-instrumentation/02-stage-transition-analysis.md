# Stage Transition Analysis: /build-page Pipeline
# Reliability Engineering Report
# Date: 2026-02-19

---

## 1. TRANSITION MAP

Two layers exist. Layer A is the ASSEMBLY pipeline (master prompt executed by a fresh instance to produce the /build-page files). Layer B is the RUNTIME pipeline (what /build-page does when invoked). Each transition is a point where information crosses a boundary.

### Layer A: Assembly Pipeline (Master Execution Prompt -> Installed Files)

```
LAYER A TRANSITIONS:

T-A1: Master Prompt -> Team Lead Working Memory
  Input:  542-line prompt (3 non-negotiables, 10 actions, 9 checkpoints)
  Output: Internal plan + agent prompts composed in real-time
  Signal: Checkpoint 0 (self-verification, no external gate)

T-A2: Team Lead -> Agent #1 (conventions-brief-writer, Opus)
  Input:  Composed prompt referencing DRAFT-09 + 4 adjustment rules
  Output: conventions-brief.md (~230 lines)
  Signal: File existence + Checkpoint 2 (11 binary checks)

T-A3: Team Lead -> Agent #2 (gate-runner-writer, Sonnet)
  Input:  Composed prompt referencing DRAFT-10 + 3 adjustment rules
  Output: gate-runner.md (~400 lines)
  Signal: File existence + Checkpoint 3 (8 binary checks)

T-A4: Team Lead -> Agent #4 (build-page-skill-writer, Opus)
  Input:  Composed prompt referencing DRAFT-11 Section 5 + 6 adjustments
  Output: SKILL.md (~350 lines)
  Signal: File existence + Checkpoint 5 (13 binary checks)
  Dependency: Conventions-brief.md must exist (cross-reference)

T-A5: Team Lead -> Agent #5 (tc-skill-editor, Sonnet)
  Input:  Composed prompt referencing DRAFT-12 Section 5A + execution order
  Output: 23 edits applied to tension-composition/SKILL.md
  Signal: Checkpoint 6a (7 binary search-checks)

T-A6: Team Lead -> Agent #6 (pa-skill-editor, Sonnet)
  Input:  Composed prompt referencing DRAFT-12 Section 5B
  Output: 16 edits applied to perceptual-auditing/SKILL.md
  Signal: Checkpoint 6b (4 binary search-checks)
  MUST COMPLETE BEFORE T-A7

T-A7: Team Lead -> Agent #3 (pa-questions-writer, Sonnet)
  Input:  Composed prompt referencing DRAFT-11 Section 4
  Output: flagship-pa-questions.md (~80 lines)
  Signal: File existence + Checkpoint 4 (5 binary checks)
  Dependency: Agent #6 must have completed

T-A8: Team Lead -> Agent #7 (claude-md-editor, Sonnet)
  Input:  Composed prompt referencing DRAFT-13-section
  Output: 11 edits to CLAUDE.md + 9 edits to compositional-core/CLAUDE.md
  Signal: Checkpoint 7 (6 binary checks)

T-A9: Wave 1/1.5 outputs -> Wave 2 Verifiers (#8 cross-ref, #9 quality)
  Input:  All 4 new files + 4 edited files
  Output: cross-ref-report.md + quality-report.md
  Signal: BLOCKING/non-blocking findings

T-A10: Wave 2 reports -> Wave 3 Fix Executor (conditional)
  Input:  BLOCKING findings from verifiers
  Output: Targeted edits to Wave 1/1.5 files
  Signal: Max 2 fix cycles

T-A11: All files -> Wave 4 Validation Runner (#11, Opus)
  Input:  Installed pipeline (all files in final state)
  Output: /build-page run against Gas Town content
  Signal: PA-05 + Tier 5 scores -> Verdict table
```

### Layer B: Runtime Pipeline (/build-page invocation)

```
LAYER B TRANSITIONS:

T-B1: User Command -> Orchestrator (SKILL.md)
  Input:  /build-page <content.md>
  Output: Parsed content path, output directory created
  Signal: File existence check

T-B2: SKILL.md + Content -> Builder Spawn Prompt Composition
  Input:  SKILL.md instructions + content path + 6 reference file paths
  Output: ~80-line builder spawn prompt with file manifest
  Signal: None (implicit -- orchestrator composes prompt internally)

T-B3: Builder Spawn Prompt -> Opus Builder Working Memory
  Input:  80-line prompt + 6 file paths to read
  Output: Builder reads 6 files (content + brief + prohibitions +
          tokens + mechanism-catalog + components.css)
  Signal: None until builder completes

T-B4: 6 Reference Files -> Builder's Internal Model
  Input:  ~3,200 lines across 6 files
  Output: Builder's understanding of design system + content
  Signal: None (internal cognitive process)

T-B5: Builder Internal Model -> output.html
  Input:  Builder's plan (metaphor, zones, mechanisms)
  Output: Self-contained HTML+CSS file
  Signal: File existence

T-B6: Builder Internal Model -> _build-log.md
  Input:  Builder's compositional decisions
  Output: Transition table, fractal echo table, override log
  Signal: File existence

T-B7: Builder Internal Model -> _cascade-value-table.md
  Input:  Builder's CSS values at boundaries
  Output: Computed values at every section boundary
  Signal: File existence

T-B8: output.html -> Playwright Rendering
  Input:  HTML file served via HTTP
  Output: Rendered DOM in browser context
  Signal: HTTP server responds + document.fonts.ready

T-B9: Rendered DOM -> Gate Runner (21 gates)
  Input:  Live DOM accessible via page.evaluate()
  Output: gate-results.json + gate-diagnostic.md
  Signal: Per-gate PASS/FAIL, aggregate blocking count

T-B10: Gate Results -> Gate Failure Decision
  Input:  gate-results.json
  Output: PROCEED to screenshots OR ROUTE to fix cycle
  Signal: Zero Tier A/B failures = proceed; any failure = fix

T-B11: Rendered Page -> Screenshot Capture
  Input:  Live page at 3 viewport widths
  Output: ~15-25 PNG files in _screenshots/
  Signal: File count verification

T-B12: _build-log.md -> Lock Sheet Generation
  Input:  Builder's logged decisions + gate diagnostics
  Output: Lock sheet categorizing elements as LOCKED/CHALLENGEABLE
  Signal: Lock sheet file exists

T-B13: Screenshot Files + PA Questions -> 9 Auditor Prompts
  Input:  Screenshot paths + assigned question text + scoring rubrics
  Output: 9 composed prompts sent to 9 Opus auditors
  Signal: None (implicit prompt composition)

T-B14: Screenshots (via Read tool) -> Auditor Perceptual Judgment
  Input:  PNG images viewed by each auditor
  Output: 9 audit reports with YES/NO per question + evidence
  Signal: File existence per auditor report

T-B15: 9 Audit Reports + Gate Results + Lock Sheet -> Weaver
  Input:  9 reports + gate diagnostics + lock sheet
  Output: _pa-report.md with PA-05 score, Tier 5 score, verdict
  Signal: Verdict classification (SHIP/FIX/REBUILD/ESCALATE)

T-B16: Weaver Verdict -> Fix Cycle Decision
  Input:  PA-05 score, Tier 5 score, top-3 issues
  Output: Fix instructions OR final verdict
  Signal: FIX -> compose fix instructions; SHIP -> done

T-B17: Fix Instructions -> Same Builder
  Input:  Gate failures (structured CSS) + PA issues (directional)
  Output: Updated output.html, _build-log.md, _cascade-value-table.md
  Signal: File modification timestamps

T-B18: Updated output.html -> Re-verification (gates + screenshots + PA)
  Input:  Modified page
  Output: New gate results, new screenshots, new PA reports
  Signal: Cycle counter <= 3
```

---

## 2. COMPRESSION LOSS INVENTORY

Quantified information loss at each transition where compression occurs.

### Layer A Compression

| Transition | Input Size | Output Size | Ratio | What Is Lost |
|-----------|-----------|-------------|-------|-------------|
| T-A1: Prompt -> Team Lead Memory | 542 lines | Internal (est. ~200 salient facts) | ~2.7:1 | Attention decay on middle sections (lines 200-400). Non-sequential TC edit ordering (1,2,3,4,5,**22**,6...) is the highest-risk loss target. |
| T-A2: Team Lead -> Agent #1 prompt | 542 lines + DRAFT-09 (~300 lines) | Agent receives ~150-line composed prompt | ~5.6:1 | Team lead composes prompt from section content. Any adjustment rule not included verbatim is lost. Constraint language ratio (Adjustment 5) is a judgment rule -- agent compliance unpredictable. |
| T-A4: Team Lead -> Agent #4 prompt | 542 lines + DRAFT-11 Sec 5 (~400 lines) | Agent receives ~200-line composed prompt | ~4.7:1 | 6 critical adjustments must ALL be included. Adjustment #4 (DG-4 reference change from _build-plan.yaml to _build-log.md) is the most complex -- requires understanding the mismatch, not just copying text. |
| T-A5: Team Lead -> Agent #5 prompt | DRAFT-12 Sec 5A (~400 lines of edit pairs) | 23 Edit tool calls | ~1:1 (mechanical) | **Zero compression if verbatim.** Risk is in transmission: edit old_strings must exactly match file content. Any whitespace, encoding, or prior-modification difference = silent failure. |
| T-A9: All files -> Verifiers | ~1,200 lines across 8 files | 2 verification reports | Variable | Verifiers check cross-references and quality. They do NOT verify that the conventions brief produces good builder behavior (C-03: N=0 testing). |

### Layer B Compression (THE CRITICAL PATH)

| Transition | Input Size | Output Size | Ratio | What Is Lost |
|-----------|-----------|-------------|-------|-------------|
| T-B2: SKILL.md -> Builder Prompt | ~350-line SKILL.md + content path | ~80-line spawn prompt | ~4.4:1 | The orchestrator COMPOSES the builder prompt from SKILL.md instructions. Any SKILL.md guidance not transferred into the spawn prompt is invisible to the builder. The builder NEVER reads SKILL.md directly. |
| T-B4: 6 Files -> Builder Mental Model | ~3,200 lines across 6 files | Internal model (est. ~500 salient patterns) | ~6.4:1 | **This is the decisive compression.** The builder must internalize: 15 brief sections, 48 soul constraints, ~80 token values, ~60 mechanism patterns, ~30 component classes. Primacy-recency means files 1-2 (content + brief) get highest attention; files 5-6 (mechanism-catalog, components.css) get lowest. |
| T-B5: Builder Model -> output.html | ~500 salient patterns | ~800-1500 CSS lines + HTML | Variable | Information EXPANDS here (model -> artifact). But the expansion is LOSSY because the builder's compositional reasoning is not in the HTML -- only its CSS choices are. The gap between what the builder PLANNED and what it WROTE is invisible without _build-log.md. |
| T-B9: DOM -> Gate Results | Entire rendered page | 21 PASS/FAIL values + measurements | Very high | Gates measure ~26% of quality (per DRAFT-10 claim). 74% of compositional quality is INVISIBLE to programmatic checks. Specifically lost: metaphor coherence, content-form coupling, emotional arc, restraint-as-expression, compositional surprise. |
| T-B13: Screenshots -> Auditor Prompts | ~15-25 PNG files | Each auditor sees same PNGs + 4-13 questions | ~1:1 (visual) | **No compression of visual data** (auditors see full screenshots). But TEXTUAL compression occurs: auditors get question text but NO design system context. They cannot distinguish "intentionally plain" from "builder ran out of ideas" without the conventions brief (which they intentionally do not receive). |
| T-B15: 9 Reports -> Weaver Synthesis | 9 reports (~200-400 lines each, ~2,700 total) | 1 synthesis (~100-150 lines) | ~20:1 | **Highest compression in Layer B.** Weaver must collapse 9 independent perspectives into 1 PA-05 score, 1 Tier 5 score, and 3 prioritized issues. Dissenting opinions, nuanced observations, and minority findings are at high risk of being dropped. |

### Total Pipeline Compression (End-to-End)

```
Research corpus (337 findings, ~50,000 lines)
  -> Master prompt (542 lines)                    [~92:1]
  -> DRAFT source files (~2,500 lines)            [embedded, not compressed]
  -> Conventions brief (~230 lines)               [~217:1 from research]
  -> Builder mental model (~500 salient facts)    [~100:1 from research]
  -> output.html CSS decisions                    [unknown ratio]
  -> PA-05 score (1 number)                       [~50,000:1]
```

The research-to-verdict compression is approximately **50,000:1**. The critical question is not whether this is too much compression (it is structural and unavoidable), but whether the RIGHT information survives at each stage.

---

## 3. TELEPHONE GAME TRACES

### Trace 1: Container 940-960px

```
Stage 1: Master Prompt Section 0, line 12
  "Container: 940-960px. Every page. No exceptions."
  STATUS: Explicit. Stated 3 times in master prompt (lines 12, 503, implied in all checkpoints).

Stage 2: Master Prompt -> Team Lead
  Risk: LOW. Stated 3 times with recency restatement.

Stage 3: Team Lead -> conventions-brief-writer (Agent #1)
  Risk: LOW. Checkpoint 2 explicitly checks "Container width stated as 940-960px."
  But: Agent reads DRAFT-09, which contains the brief content. If DRAFT-09
  says 960px without the 940-960 range, the agent may write 960px only.

Stage 4: conventions-brief.md -> Builder (at runtime)
  Risk: MEDIUM. Brief Section 1 (Identity) states the container width. Builder
  reads it as part of a 230-line document. Brief position: FIRST section = HIGH
  attention zone. But builder may interpret "940-960px" as "use 960px" (the max)
  or "use 940px" (the min) rather than choosing within the range.

Stage 5: Builder -> output.html CSS
  Risk: LOW-MEDIUM. Builder writes max-width in CSS. Standard pattern is
  `.page-container { max-width: 960px; }`. Risk: builder uses `width: 100%`
  without max-width, or applies max-width to wrong element.

Stage 6: output.html -> SC-01 Gate
  Risk: MEDIUM-HIGH. Gate JS queries:
    `.page-container, main, [role="main"]`
  If builder uses a DIFFERENT container selector (e.g., `.wrapper`, `.content`,
  `article`, `#main`), the gate matches NOTHING. When nothing matches:
    `const container = document.querySelector(...)` returns NULL.
    `getComputedStyle(null)` THROWS AN ERROR.
  This would crash the gate runner, not silently pass.
  HOWEVER: if the builder wraps content in `<main>` (standard), the fallback
  selector `main` catches it. Risk depends on builder's HTML structure.

VERDICT: Container trace is WELL-PROTECTED by triple-stating and SC-01.
The primary gap is SC-01's selector fragility -- if the builder uses non-standard
container markup, the gate either crashes (detectable) or silently passes
(if it queries a nested element that happens to be narrower).
```

### Trace 2: Letter-spacing >= 0.025em

```
Stage 1: Master Prompt Section 0, line 14
  "No letter-spacing below 0.025em."
  STATUS: Explicit. Restated in Section 9, line 505.

Stage 2: Master Prompt -> conventions-brief-writer
  Risk: HIGH. Adjustment rule #2 says: "Letter-spacing in Section 2 says
  '0.02em' -- change to '0.025em'." This means DRAFT-09 contains the WRONG
  value (0.02em). If agent #1 misses this adjustment, the brief will say
  0.02em. Checkpoint 2 checks "Letter-spacing minimum stated as >= 0.025em
  (NOT 0.02em)" -- but this checkpoint is verified by the TEAM LEAD, not by
  the agent. If the team lead skims the checkpoint, the error persists.

Stage 3: conventions-brief.md -> Builder
  Risk: DEPENDS ON STAGE 2. If brief says 0.02em, builder uses 0.02em.
  If brief says 0.025em, builder uses 0.025em. BUT: builder also reads
  tokens.css, which may have its own letter-spacing values. If tokens.css
  values conflict with brief values, builder must choose. No priority rule
  is stated for conflicts between brief and tokens.css.

Stage 4: Builder -> output.html
  Risk: MEDIUM. Builder may use letter-spacing values like 0.01em or 0.015em
  because they read well in CSS and the "floor" concept is easily forgotten
  amid 230 lines of guidance. The Flagship experiment had 0.001-0.01em values
  -- the builder literally spent 22% of CSS budget on imperceptible micro-typography.

Stage 5: output.html -> SC-14 Gate
  Risk: LOW (if SC-14 threshold is correct). SC-14 checks:
    "No letter-spacing value between 0 and 0.025em (exclusive)"
  This is a hard programmatic check. It WILL catch violations.
  BUT: SC-14 threshold was 0.025em in DRAFT-10 gate runner.
  Master prompt Adjustment #2 aligns the brief to 0.025em.
  CLAUDE.md edits (DRAFT-13) reference 0.02em in multiple places.
  If CLAUDE.md edits are not corrected, CLAUDE.md will say 0.02em
  while the gate enforces 0.025em. The builder reads CLAUDE.md
  (it is auto-loaded). This creates a CONTRADICTION visible to the builder.

VERDICT: Letter-spacing trace has a KNOWN CONTRADICTION (B-07 in contrarian).
The master prompt addresses it with Adjustment #2, but the fix is a SINGLE
adjustment rule that must be applied correctly by Agent #1. If missed, the
brief and gate diverge. The gate will catch the violation, but the builder
will receive a gate failure for following the brief's instructions -- causing
confusion in the fix cycle.
```

### Trace 3: Pervading Metaphor

```
Stage 1: Master Prompt
  "pervading metaphor" appears in SKILL.md Section 0 (line 185 of DRAFT-11):
  "unified pervading metaphor, dynamic multi-coherence, compositional surprise"
  Also in conventions brief Section 6: Unified Metaphor.

Stage 2: Master Prompt -> conventions-brief-writer
  Risk: MEDIUM. Metaphor is Section 6 of the brief (not first, not last).
  Attention zone: MIDDLE (lower attention). The brief describes metaphor as
  "structural requirement, CSS-driven not label-driven." This is a CONSTRAINT
  ("not label-driven") but the brief must also explain what a structural
  metaphor IS. If the brief only says what it is NOT, the builder has no
  positive model.

Stage 3: conventions-brief.md -> Builder
  Risk: HIGH. "Pervading metaphor" is the MOST ABSTRACT concept in the
  pipeline. Container width is a number. Letter-spacing is a number. Metaphor
  is a CREATIVE DECISION. The builder must:
    a) Read the content and identify its inherent tensions/themes
    b) Choose a metaphor that maps to visual language
    c) Express that metaphor through CSS (not labels/aria/text)
    d) Maintain the metaphor across all zones
  Steps a-d are not programmable. They depend on the builder's creative
  capacity. The brief can DESCRIBE what a metaphor should be, but cannot
  DEMONSTRATE it without an exemplar (which is deliberately excluded to
  avoid template gravity).

Stage 4: Builder -> output.html
  Risk: HIGH. The Flagship experiment produced a metaphor that was "announced"
  (40% without labels) rather than "structural." The builder wrote CSS that
  was technically metaphor-consistent but not perceptually identifiable as
  such. This failure mode is NOT detectable by any programmatic gate.

Stage 5: output.html -> PA-63 (Fractal Zoom Coherence)
  Risk: MEDIUM. PA-63 asks: "Does its internal design echo the page's overall
  design language at a smaller scale?" This PARTIALLY tests metaphor (fractal
  self-similarity) but does NOT directly test "pervading metaphor."

Stage 6: PA-63 answer -> Auditor E report
  Risk: MEDIUM. Auditor E sees screenshots with zero build context. They must
  identify whether component-level design echoes page-level design. This is
  a perceptual judgment -- highly dependent on auditor sensitivity. A weak
  metaphor that is "announced" (labels say "fractal" but CSS does not show it)
  would be INVISIBLE to an auditor who only sees screenshots.

Stage 7: Auditor E report -> Weaver
  Risk: HIGH. Weaver reads 9 reports and synthesizes. Metaphor assessment is
  spread across PA-63 (Auditor E), PA-42/43/44 (Auditor G), and PA-65
  (Auditor A). The weaver must triangulate 3 auditors' observations about
  metaphor. If any auditor answers ambiguously (PARTIALLY), the weaver must
  make a judgment call. 20:1 compression from 9 reports to 1 synthesis means
  nuanced metaphor observations are at HIGH risk of being reduced to a single
  YES/NO in the Tier 5 score.

VERDICT: Metaphor trace is the LEAST PROTECTED path through the pipeline.
No programmatic gate catches it (Tier C gates in DRAFT-orchestrator are
"check via _build-log.md timestamps" which tests TIMING, not quality).
PA detection depends on auditor sensitivity to subtle visual language.
Weaver synthesis compresses multi-auditor metaphor signals into binary scores.
This is the path where Flagship failure is most likely to go undetected
until a human reviews the output.
```

### Trace 4: Recipe Format (META-TRACE)

```
This trace tracks FORMAT, not content. The conventions brief's format
determines how the builder reads it -- recipe (sequenced steps) vs
checklist (constraints to verify).

Stage 1: Master Prompt Section 2, line 109
  "It must be a WORLD-DESCRIPTION (what the design system IS), not a
  CHECKLIST (what to verify). Format target: 55% conventions / 25% recipe /
  20% checklist."
  This is a META-INSTRUCTION about the brief's format.

Stage 2: Master Prompt -> conventions-brief-writer (Agent #1)
  Risk: HIGH. The format instruction is a JUDGMENT RULE. "55% conventions /
  25% recipe / 20% checklist" requires Agent #1 to:
    a) Understand the distinction between these three formats
    b) Consciously modulate language in each section
    c) Self-audit the ratio after writing
  Adjustment #5 says "count words... if constraint language exceeds 20%."
  This is the ONLY binary check on format. But word-counting is crude --
  "you MUST use warm colors" is constraint language, but "warm colors
  create..." is conventions language saying the same thing.

Stage 3: conventions-brief.md format -> Builder behavior
  Risk: CRITICAL. This is where the meta-trace becomes invisible.
  The SAME content ("use >= 14 mechanisms") reads differently in recipe
  format ("Deploy mechanisms: select 3+ Spatial, 3+ Hierarchy, 2+ Depth...")
  vs checklist format ("Verify: >= 14 mechanisms, with >= 1 per category").
  The Middle experiment succeeded with a 100-line RECIPE that said
  "Read/Select/Deploy/Assess." The Flagship experiment failed with a
  71-line CHECKLIST that said "Verify/Fail if/Must be."
  If the conventions brief drifts toward checklist language, the builder
  will SATISFY constraints rather than COMPOSE a page. This behavioral
  difference is not measurable by any gate or PA question.

Stage 4: Builder behavior -> output.html quality
  Risk: UNMEASURABLE. A checklist-following builder produces technically
  correct but compositionally flat pages. A recipe-following builder produces
  pages with intentionality and surprise. The difference shows up in PA-05
  scores (2.5 vs 3.5) but is not attributable to any single CSS property.
  It is an EMERGENT property of the builder's reading mode.

VERDICT: The recipe format trace is the most fragile in the entire pipeline.
It is a META-PROPERTY (format affects behavior, not content) that:
  - Is specified as a judgment rule (55/25/20 ratio)
  - Depends on Agent #1's writing sensitivity
  - Has only a crude verification mechanism (word count)
  - Produces an unmeasurable behavioral difference in the builder
  - Has no programmatic gate or PA question targeting it directly

The ONLY protection is the builder spawn prompt (T-B3), which says:
  "Follow it as a RECIPE, not a CHECKLIST."
This is a meta-instruction telling the builder HOW to read. It is the
same pattern that failed in the Flagship experiment (C-04 in contrarian:
"'Recipe not checklist' is instruction, not structure").
```

---

## 4. SILENT FAILURE CATALOG

Silent failures produce output that LOOKS correct but IS wrong. They are the most dangerous failure mode because they pass all explicit checks.

### SF-01: Zone Selector Matches Nothing (All Zone-Dependent Gates Silently Pass)

**Location:** T-B9 (DOM -> Gate Runner)
**Mechanism:** Gates SC-09, SC-10, SC-11, SC-12, SC-13, SC-14 all query:
  `document.querySelectorAll('[class*="zone"], section[data-zone], .section')`
If the builder uses `<section id="intro">`, `<div class="content-block">`, or any non-matching class, the query returns an empty NodeList. For-loops over empty arrays execute zero iterations. All checks "pass" because no violations were found in zero elements.
**Detection:** SC-12 (zone count) would report 0 zones, which fails the >= 3 threshold. But the FALLBACK in SC-12 counts distinct background colors, which might find some -- leading to inconsistent zone counts between SC-12 and the other gates.
**Severity:** CRITICAL. This was identified as C-07 in the contrarian.
**Fix:** Add a zone count minimum assertion BEFORE running zone-dependent gates. If `zones.length === 0`, ALL zone-dependent gates should FAIL with a diagnostic message: "No zones detected. Builder must use [class*='zone'], section[data-zone], or .section markup."

### SF-02: Conventions Brief Path Wrong in SKILL.md (Builder Reads Non-Existent File)

**Location:** T-B3 (SKILL.md -> Builder Prompt)
**Mechanism:** DRAFT-11 references `design-system/compositional-core/conventions-brief.md`. The correct path is `design-system/pipeline/conventions-brief.md`. Master prompt Adjustment #3 corrects this. If Agent #4 misses this adjustment, the builder spawn prompt will reference a non-existent file.
**Detection:** The builder would report an error when trying to Read a non-existent file. NOT truly silent -- but the error occurs inside the builder agent, and if the builder proceeds without the brief (building from tokens/prohibitions/mechanism-catalog alone), the output could be technically valid HTML that fails on every compositional measure.
**Severity:** HIGH.
**Fix:** Checkpoint 5 checks this ("Conventions brief path is `design-system/pipeline/conventions-brief.md`"). But this is a team-lead visual check, not a programmatic assertion.

### SF-03: Builder Writes output.html But Not _build-log.md

**Location:** T-B5/T-B6 (Builder -> output files)
**Mechanism:** Builder is instructed to write 3 files. If it writes output.html but skips or truncates _build-log.md, the gate runner will proceed (it checks output.html, not _build-log.md first). DG-1 checks _build-log.md for the fractal echo table, but DG-1 is in GROUP 5 (runs AFTER Groups 1-4). By the time DG-1 fails, the full gate suite has already consumed ~15 seconds and generated partial results.
**Detection:** DG-1 failure catches missing fractal echo table. But a TRUNCATED _build-log.md (file exists but is incomplete) might pass DG-1 if it contains any 5-row table.
**Severity:** MEDIUM. The _build-log.md is diagnostic, not the deliverable. Its absence degrades the lock sheet (T-B12) and fix cycle quality but does not corrupt the page itself.
**Fix:** Add a file completeness check immediately after builder completion: verify output.html > 500 lines, _build-log.md > 30 lines, _cascade-value-table.md > 10 lines.

### SF-04: SC-04 (Warm Palette) Passes Because Callout Exception Is Too Broad

**Location:** T-B9 (Gate SC-04)
**Mechanism:** SC-04 checks R >= G >= B on all backgrounds. DRAFT-10 adds exception for `.callout-*` or `[data-accent]` parent elements. If the builder wraps large sections in callout classes (to get "accent" styling), the exception could exempt entire zones from the warm palette check.
**Detection:** No secondary check. PA auditors might notice cool-toned areas, but they do not know about the warm palette constraint (fresh-eyes, no design system context).
**Severity:** MEDIUM. The exception is scoped to specific classes, but the builder controls class naming.
**Fix:** Add a maximum exception count: if > 20% of background-bearing elements are excepted, flag as ADVISORY warning.

### SF-05: Weaver Miscalculates PA-05 or Tier 5 Score

**Location:** T-B15 (9 Reports -> Weaver)
**Mechanism:** Weaver manually reads 9 reports and computes PA-05 (average of 4 sub-scores, each 0-4) and Tier 5 (count of YES answers from PA-60 through PA-67). Both are mental arithmetic by an LLM agent. LLMs are notoriously unreliable at arithmetic. If the weaver miscounts (e.g., 5/8 Tier 5 YES but reports 6/8), the verdict changes from APPROACHING to COMPOSED.
**Detection:** No verification of weaver arithmetic. The orchestrator trusts the weaver's reported scores.
**Severity:** HIGH. The entire pipeline verdict depends on two numbers the weaver reports.
**Fix:** Orchestrator should independently count Tier 5 YES answers from the 9 auditor reports (grep for "PA-6[0-7]" and "YES" across files). Compare with weaver's reported count. Flag discrepancy.

### SF-06: Fix Cycle Does Not Converge (Builder Makes Changes That Break Passing Gates)

**Location:** T-B17/T-B18 (Fix Cycle)
**Mechanism:** Builder receives fix instructions for failing gates/PA issues. It modifies output.html. The modifications might fix the targeted issues but REGRESS previously-passing gates. Example: builder widens gap to fix a cramped section, causing SC-10 (stacked gap) to fail. The re-run catches this, but the builder then fixes SC-10 by reducing the gap, re-introducing the original cramp. This oscillation consumes fix cycles without convergence.
**Detection:** Gate re-run catches new failures. But the oscillation pattern is not detected -- each cycle looks like "progress" (different gates failing).
**Severity:** MEDIUM. Max 3 cycles limits damage, but 3 wasted cycles = 105 minutes consumed.
**Fix:** Track gate results across cycles. If a gate that PASSED in cycle N FAILS in cycle N+1, flag it as REGRESSION with a "DO NOT TOUCH" directive for that element in subsequent fix instructions.

### SF-07: Auditor Reads Corrupt or Incomplete Screenshots

**Location:** T-B14 (Screenshots -> Auditor)
**Mechanism:** Screenshot capture (T-B11) may fail for specific scroll positions (Playwright timeout, rendering glitch). If a screenshot file is created but is corrupt (0 bytes, partial render, wrong viewport), the auditor receives it via Read tool. The Read tool returns image content -- but if the image is blank or corrupt, the auditor cannot assess that portion of the page. Auditors have no way to report "I could not see this part of the page."
**Detection:** No screenshot integrity check. Auditors might write "could not assess" but this is not a structured signal.
**Severity:** LOW-MEDIUM. Playwright is generally reliable, but network/rendering issues can occur.
**Fix:** After screenshot capture, verify each PNG file size > 10KB. Re-capture any that are below threshold.

### SF-08: Team Lead Composes Agent Prompts With Missing Adjustments

**Location:** T-A2 through T-A8 (all team lead -> agent transitions)
**Mechanism:** The master prompt describes what each agent should do, but the team lead must COMPOSE the actual prompt sent to each agent. This is an IMPLICIT prompt-composition step. If the team lead omits an adjustment rule (e.g., "change 0.02em to 0.025em"), the agent executes without it. The checkpoint system catches SOME omissions (Checkpoint 2 checks for 0.025em), but checkpoints are verified AFTER the agent completes -- by which time the file exists with the wrong value and must be re-edited.
**Detection:** Checkpoints catch specific known risks. But novel omissions (team lead forgets to include the source file reading order, or omits the "components.css not merged-components.css" correction) are only caught if they happen to trigger a checkpoint item.
**Severity:** HIGH. This is the "telephone game" at its most literal -- the team lead is the telephone.
**Fix:** Include COMPLETE agent prompts in the master prompt (or in appendix DRAFT files), not descriptions of what the prompts should contain. The team lead should COPY, not COMPOSE.

---

## 5. STRUCTURAL GAP LIST

### Missing Dependencies

| Gap ID | Description | Location | Impact |
|--------|------------|----------|--------|
| SG-01 | SKILL.md agent #4 needs conventions-brief.md to exist for cross-reference, but both are in Wave 1 (parallel). No explicit dependency. | T-A4 | Agent #4 may read the brief before Agent #1 finishes writing it. The file may not exist yet. |
| SG-02 | Gate runner gates depend on specific HTML markup patterns, but conventions brief does not mandate those patterns. | T-B3 -> T-B9 | Builder may produce valid HTML that gates cannot parse. |
| SG-03 | Fix cycle sends instructions to "same builder agent" but SKILL.md does not specify how to re-address a completed agent. | T-B16 -> T-B17 | In Claude Code, a completed Task agent cannot receive new messages. The orchestrator may need to spawn a NEW agent with the original page + fix instructions, breaking compositional memory. |
| SG-04 | PA auditors need question TEXT pasted into their prompts, but the orchestrator must compose this from the PA skill + flagship-pa-questions.md. | T-B13 | Orchestrator must read 2 files, extract assigned questions, format them, and paste into 9 different prompts. Any transcription error propagates to auditor behavior. |

### Missing Completion Signals

| Gap ID | Description | Location | Impact |
|--------|------------|----------|--------|
| SG-05 | Builder has no explicit completion signal. Orchestrator waits for Task tool completion, but if builder hits context limit and stops mid-build, the Task may "complete" with partial output. | T-B3 -> T-B5 | Output.html exists but is truncated (e.g., missing closing tags, incomplete CSS). Gate runner may crash on malformed HTML. |
| SG-06 | No signal between micro-gates (MG-1 through MG-4) and the builder. Micro-gates are described in gate-runner.md but the SKILL.md orchestration flow does not reference them. | T-B8 -> T-B9 | Micro-gates are defined but never invoked. The orchestrator runs the FULL gate suite AFTER the builder completes, not during build phases. |
| SG-07 | No explicit "all auditors complete" signal before spawning weaver. SKILL.md says "AFTER all 9 auditors complete" but does not specify a polling or callback mechanism. | T-B14 -> T-B15 | If one auditor fails/hangs, weaver may be spawned with only 8 reports. 1 missing report = 4-13 missing questions in the synthesis. |
| SG-08 | No checkpoint between Wave 1.5 and Wave 2 verifying that Agent #6's PA edits were applied correctly BEFORE Agent #3 runs. The contention is managed by wave ordering, but correctness of Agent #6's output is not verified. | T-A6 -> T-A7 | Agent #3 "verifies Tier 5 insertion" per the prompt, but this is ambiguous -- does it verify by reading the PA skill file or the DRAFT? |

### Missing Rollback Mechanisms

| Gap ID | Description | Location | Impact |
|--------|------------|----------|--------|
| SG-09 | No rollback for failed skill edits. If edit #12 of 23 fails (old_string not found), edits 1-11 are already applied. The file is in a PARTIAL state -- neither the original nor the target. | T-A5 | The partially-edited file may have inconsistencies (e.g., tier routing removed from some sections but not others). Wave 2 verifiers may not catch section-level inconsistencies. |
| SG-10 | No rollback for fix cycle regression. If fix cycle 2 makes the page WORSE than fix cycle 1, there is no mechanism to revert to the cycle 1 version. | T-B17 -> T-B18 | Builder overwrites output.html in place. Previous versions are not preserved. |
| SG-11 | No rollback for conventions-brief-writer producing a brief that is wrong in a way not caught by Checkpoint 2. The 11 checkpoint items cover specific thresholds but not overall quality/tone/recipe-vs-checklist. | T-A2 | A brief that is technically correct (all checkpoint items pass) but tonally wrong (reads as a checklist) will persist into Layer B and produce flat builder behavior. |

---

## 6. FAILURE MODE COVERAGE MATRIX

Contrarian findings (AUDIT-15) mapped against stage transitions that prevent them.

| Contrarian ID | Issue | Preventing Transition | Prevention Quality | Gap |
|--------------|-------|----------------------|-------------------|-----|
| **B-01** | Two conflicting DRAFT-13 files | Master prompt Section 7 specifies "DRAFT-13-claude-md-architecture-section.md" as canonical | **ADDRESSED** in master prompt (picks the `-section` variant with 11+9 edits) | None -- master prompt is explicit |
| **B-02** | merged-components.css in DRAFT-11 builder prompt | Master prompt Section 5, Adjustment #1: "Change merged-components.css to components.css" | **SINGLE POINT OF FAILURE** at T-A4 | If Agent #4 misses Adjustment #1, builder reads non-existent file. Checkpoint 5 checks for it ("References components.css NOT merged-components.css"). But checkpoint is manual. |
| **B-03** | merged-components.css in DRAFT-orchestrator | Master prompt does not reference DRAFT-orchestrator directly -- it supersedes it | **ADDRESSED** by architecture | DRAFT-orchestrator.md is a SOURCE DOCUMENT, not an executed artifact. Agent #4 reads DRAFT-11, which the master prompt corrects. But if Agent #4 ALSO reads DRAFT-orchestrator.md (listed as a research source elsewhere), it could pick up the wrong filename. |
| **B-04** | 35 skill edits depend on exact string matching | No mitigation in master prompt | **NOT ADDRESSED** | Master prompt says "copy them VERBATIM into the Edit tool." No read-verify-edit pattern. No batch checkpoints. No rollback. This is the contrarian's B-SIMPLE: the most likely failure mode. |
| **B-05** | DG-4 references _build-plan.yaml | Master prompt Section 5, Adjustment #4: "Change DG-4 to validate from _build-log.md instead" | **ADDRESSED** if Agent #4 applies Adjustment #4 | Single point of failure at T-A4. Checkpoint 5 does NOT explicitly check DG-4's source file reference. |
| **B-06** | SC-10 threshold: 108px vs 120px | Master prompt Section 2, Adjustment #2: "Stacked gap <= 120px (NOT 108px)." Section 3 verifies. Section 5 Adjustment #2 aligns SKILL.md. | **PARTIALLY ADDRESSED** | Brief is corrected (T-A2). Gate runner already says 120px. SKILL.md is corrected (T-A4). But CLAUDE.md edits (DRAFT-13) reference 108px in multiple places. Master prompt Section 7 says "Ensure they say 120px" but only for B-EDIT-5 and B-EDIT-8. Other DRAFT-13 instances may persist. |
| **B-07** | SC-14 threshold: 0.02em vs 0.025em | Master prompt Section 2, Adjustment #2: "Letter-spacing minimum 0.025em per-element (NOT 0.02em)" | **PARTIALLY ADDRESSED** | Brief is corrected. Gate runner already says 0.025em. But CLAUDE.md edits (DRAFT-13) reference 0.02em. Master prompt does not explicitly correct ALL DRAFT-13 instances of 0.02em. |
| **C-01** | Prompt length ~2,200 lines | Master prompt is 542 lines (not 2,200). DRAFT content is in separate files. | **MITIGATED** by architecture | The master prompt REFERENCES drafts rather than embedding them. Each agent reads only its relevant DRAFT. But total content across all DRAFTs is still ~2,200+ lines. |
| **C-02** | Primacy-recency buries middle sections | Master prompt uses Checkpoints 0-8, recency restatement in Section 9 | **PARTIALLY MITIGATED** | Checkpoints force re-engagement at each section boundary. But middle sections (4-6) are still in the attention valley. |
| **C-03** | Conventions brief N=0 tested | Master prompt Wave 4 (Validation Runner) runs actual builds | **ADDRESSED** by validation builds | But validation is the LAST step. If the brief is wrong, ~200 minutes of assembly are wasted before discovery. |
| **C-04** | "Recipe not checklist" is instruction not structure | Master prompt Section 2: "Format target: 55% conventions / 25% recipe / 20% checklist" + Adjustment #5 word count | **WEAKLY ADDRESSED** | Word count is a crude proxy for recipe format. The structural quality of the brief's language (imperative vs declarative) is a judgment call by Agent #1. |
| **C-05** | Single builder 90-150 min context risk | Micro-gate schedule (MG-1 through MG-4) in gate-runner.md | **NOT ACTUALLY IMPLEMENTED** | Micro-gates are DEFINED in gate-runner.md but NOT INVOKED by the SKILL.md orchestration flow (SG-06). The orchestrator runs full gates AFTER build, not during. The mid-build checkpoint the contrarian recommends does not exist. |
| **C-06** | Fix cycle convergence untested | Fix cycle with max 3 iterations + weaver synthesis | **WEAKLY ADDRESSED** | The weaver translates PA feedback into fix instructions, but "DIRECTION: [what to change -- not what CSS to write]" means the builder must still translate perceptual feedback to CSS. No regression tracking (SF-06). |
| **C-07** | Zone selector fragility | No mitigation in master prompt or conventions brief | **NOT ADDRESSED** | Neither the brief nor the builder prompt mandates specific zone markup patterns. Gate selectors assume class-based or data-attribute-based zones. |
| **C-08** | Tier 5 questions N=0 | Validation builds in Wave 4 | **ADDRESSED** by validation | First build will provide N=1 calibration data. But success bar still gates on Tier 5 >= 6/8 (master prompt) / >= 5/8 (DRAFT-11). |
| **C-09** | PA-05 collapses at scale top | Tier 5 questions added to distinguish 3.0 from 3.5+ | **ADDRESSED** by design | Tier 5 IS the solution to PA-05 collapse. Whether it works is N=0. |

---

## 7. RECOMMENDATIONS

### Priority 1: Close CRITICAL Silent Failure Gaps

**R-01: Zone Markup Mandate in Conventions Brief**
Add to brief Section 1 (Identity) or Section 8 (CSS Vocabulary):
```
Zone markup: Mark each major content zone with `class="zone zone-N"` where N
is the zone number (1-indexed). The gate runner depends on this selector.
```
This closes SF-01 and C-07. Estimated effort: 1 line in brief, 0 lines in gate runner.

**R-02: Zero-Zone Assertion in Gate Runner**
Add before the first zone-dependent gate:
```js
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (zones.length === 0) {
  return { gate: "PRE-CHECK", status: "FAIL",
    message: "No zones detected. Builder must use zone-* classes or data-zone attributes." };
}
```
This makes SF-01 detectable rather than silent. Estimated effort: 5 lines in gate runner.

**R-03: Weaver Score Verification**
Add to SKILL.md Step 5.3 (Weaver) or after weaver completion:
```
After weaver writes _pa-report.md, orchestrator independently verifies:
1. Count "YES" for PA-60 through PA-67 across all 9 auditor reports
2. Compare with weaver's Tier 5 count
3. If discrepancy: re-run weaver with correction instruction
```
This closes SF-05. Estimated effort: 10 lines in SKILL.md.

### Priority 2: Close Structural Gaps

**R-04: Explicit Agent #1/#4 Dependency**
Change Wave 1 in master prompt: Agent #4 (build-page-skill-writer) depends on Agent #1 (conventions-brief-writer). Move Agent #4 to Wave 1.5 or add an explicit dependency: "Agent #4 must wait for conventions-brief.md to exist before reading it for cross-reference."
This closes SG-01.

**R-05: Fix Cycle Version Preservation**
Add to SKILL.md Step 6:
```
Before applying fixes, copy current output.html to
  output-cycle-N-backup.html
If fix cycle N+1 scores LOWER on PA-05 than cycle N, revert to
  output-cycle-N-backup.html and escalate.
```
This closes SG-10 and SF-06.

**R-06: Micro-Gate Invocation in SKILL.md**
The gate-runner.md defines MG-1 through MG-4, but SKILL.md never invokes them. Either:
- Add micro-gate calls to SKILL.md Step 2 (during builder's Phase C), or
- Remove micro-gates from gate-runner.md to avoid dead documentation.
This closes SG-06 and partially addresses C-05 (context risk).

**R-07: Builder Completion Validation**
Add to SKILL.md Step 2 (Wave 1 Monitoring):
```
After builder completes, verify:
  - output.html exists AND > 500 lines
  - _build-log.md exists AND > 30 lines
  - _cascade-value-table.md exists AND > 10 lines
If any check fails: send targeted instruction to builder for missing file.
```
This closes SG-05 and SF-03.

### Priority 3: Strengthen Telephone Game Traces

**R-08: Complete Agent Prompts in Appendix**
For the 3 most critical agents (conventions-brief-writer, build-page-skill-writer, builder), include the COMPLETE prompt text in an appendix to the master prompt. The team lead COPIES the prompt, not COMPOSES it. This closes SF-08 for the highest-risk transitions.

**R-09: Threshold Alignment Table**
Add a single authoritative table to the master prompt (and replicate in the brief and gate runner):
```
THRESHOLD AUTHORITY TABLE (this table wins all conflicts):
| Parameter        | Value    | Brief Section | Gate ID |
|-----------------|----------|---------------|---------|
| Container width  | 940-960px| 1             | SC-01   |
| Background delta | >= 15 RGB| 2             | SC-09   |
| Stacked gap max  | <= 120px | 2             | SC-10   |
| Letter-spacing   | >= 0.025em| 2            | SC-14   |
| Font-size delta  | >= 2px   | 2             | SC-11   |
| Zone count       | 3-5      | 4             | SC-12   |
| Channel shifts   | >= 3/avg 4| 4            | SC-13   |
```
This makes contradiction between documents impossible -- the table is the authority. Closes B-06 and B-07.

**R-10: Skill Edit Resilience**
For the 39 skill edits (23 TC + 16 PA), adopt ONE of:
a) **Ship pre-edited files** (contrarian's B-SIMPLE recommendation). Cost: ~2,800 lines of literal content. Benefit: zero edit failure risk.
b) **Read-verify-edit pattern**: before each edit, read the file and verify old_string exists verbatim. Batch in groups of 5 with re-read between batches. Cost: ~10 minutes and ~80 extra tool calls. Benefit: detects match failures before they cascade.
c) **Post-edit full-file verification**: after all edits, read the complete file and verify every key pattern exists (Checkpoint 6 already does this partially but only checks 11 patterns across 2,800 lines).

### Priority 4: Meta-Level Improvements

**R-11: Recipe Format Measurement**
Replace the crude "count must/verify/ensure/fail words" with a structural check:
```
For each section in the conventions brief:
  - Count IMPERATIVE sentences (verbs: "Select", "Deploy", "Build", "Assess")
  - Count DECLARATIVE sentences (verbs: "is", "has", "contains", "requires")
  - Count CONSTRAINT sentences (verbs: "must", "verify", "ensure", "fail")
  - IMPERATIVE:CONSTRAINT ratio must be >= 2:1
```
This gives the recipe format trace (Trace 4) a binary check.

**R-12: Regression Gate**
Add a per-gate regression tracker to the fix cycle:
```
After each fix cycle re-run:
  - Compare gate-results-cycle-N.json with gate-results-cycle-N-1.json
  - Any gate that was PASS and is now FAIL = REGRESSION
  - Add regressed elements to "DO NOT TOUCH" list for next cycle
  - If total regressions > 2: ESCALATE (fix cycle is not converging)
```
This closes SF-06 with a structural mechanism.

---

## SUMMARY STATISTICS

| Category | Count |
|----------|-------|
| Layer A transitions | 11 |
| Layer B transitions | 18 |
| Total transitions | 29 |
| Silent failure modes | 8 |
| Structural gaps | 11 |
| Contrarian findings analyzed | 19 |
| Contrarian findings ADDRESSED | 7 |
| Contrarian findings PARTIALLY ADDRESSED | 6 |
| Contrarian findings NOT ADDRESSED | 4 |
| Contrarian findings MITIGATED by architecture | 2 |
| Recommendations | 12 |
| Priority 1 (critical) | 3 |
| Priority 2 (structural) | 4 |
| Priority 3 (telephone game) | 3 |
| Priority 4 (meta-level) | 2 |

---

**The three highest-leverage fixes (if only three can be done):**

1. **R-01 + R-02: Zone markup mandate + zero-zone assertion.** Without this, 6 of 21 gates are potentially silent-pass. This is the single largest unprotected gap.

2. **R-09: Threshold alignment table.** The 0.02/0.025em and 108/120px contradictions are the most likely source of builder-gate-brief inconsistency. A single authoritative table eliminates the class of error.

3. **R-10: Skill edit resilience (any variant).** 39 exact-string-match edits across 2,800 lines of source files is the most probable mechanical failure in Layer A. Ship pre-edited files to eliminate this risk entirely, or add read-verify-edit to detect failures before they cascade.

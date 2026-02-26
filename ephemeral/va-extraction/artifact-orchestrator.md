# Orchestrator Flow — Pipeline v3 Complete Sequence
Date: 2026-02-23
Layer: 9 ORCHESTRATION (188 items) + 15 council-rerouted (Pattern 5 Category A) + 19 additional VALUES context items = 222 items total
Authority: Council Verdict (2026-02-23) — this document conforms to all rulings

---

## Document Purpose

This is the **master control document** for the orchestrator agent. It defines the complete pipeline sequence from content input to final page output: who does what, when, with what inputs, producing what outputs, and what decisions gate the next step.

**Council Mandates Applied:**
- Iterative-to-convergence = DEFAULT (IMPROVE loop until RELEASE or diminishing returns). 3-pass Compositional Critic = EXPERIMENTAL (blocked until experiment #21). Standard IMPROVE iteration is NOT the experimental 3-pass architecture.
- Compositional Critic = REMOVED from default pipeline
- "Activation" framing = RETIRED. Replaced with PURPOSE + VOCABULARY
- Honest cost estimates required throughout
- Phased suppressor removal protocol (not blind removal)
- Evidence status on all predictions

---

## SECTION 0: MASTER EQUATION AND PRECONDITIONS (Pre-Pipeline)

### Quality Equation
> Quality_0 = Agent Capability x Content Affordance x Spec Fidelity
> Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)
> Cycle 0 depends on inputs; subsequent cycles grow quality through iteration
> Zero in any Cycle 0 factor = zero starting point

### VALUES Context (15 Planning Items)

Historical PA-05 scores for orchestrator calibration:

| Build | PA-05 Score | Pipeline | Notes |
|-------|-------------|----------|-------|
| Gas Town | 3.5/4 | Old pipeline, Opus, 610 lines | Highest achieved score |
| Middle Experiment | 4/4 | v2 recipe format, 100 lines | PA-05 DESIGNED, 3/3 novel |
| Flagship Experiment | 1.5/4 | Master prompt, 963 lines, all 14 suppressors | FAILED — more lines HURTS |
| CD-006 | 39/40 (CEILING, not Flagship) | Opus builder, multi-pass | No pervading metaphor |

**Suppressor removal status:** All 20 historical suppressors INACTIVE in v3. Phase 1 removals (S-01 mechanism count, S-03 judgment language, S-08 technique counting) confirmed safe. Phase 2 removals (S-09 stacking, S-07 letter-spacing) adjusted with new thresholds.

### Standard Path
**60-80% of builds converge in two cycles.** Single-cycle RELEASE is the exception reserved for simple content. Budget for 2 cycles as the norm, 3 as the ceiling. The IMPROVE cycle is the pipeline's highest-value phase: +1.0 to +1.5 PA-05 per cycle. A build that goes straight to RELEASE is a welcome surprise, not the expected outcome.

**Convergence budget:** 1 RETHINK + 2 IMPROVE cycles maximum. The pipeline iterates to convergence by default.

**Key calibration:** 1.0-point gap between Flagship (1.5) and Middle (2.5) demonstrates that MORE specification lines HURTS quality. v3 improvement is FORMAT (recipe vs checklist) and STRUCTURE (layered architecture), not volume reduction.

### Input Preconditions (All 3 must be TRUE before pipeline starts)

| # | Precondition | Factor | Check | Evidence |
|---|-------------|--------|-------|----------|
| 1 | Model = OPUS for builder | Agent Capability | Phase 2 model selection | OBSERVED (Opus correlates with better output, but variable not isolated) |
| 2 | Content has heterogeneity + metaphor viability | Content Affordance | Phase 0 content analysis | OBSERVED (content type affects output) |
| 3 | Suppressor count = 0 in constraint layer | Spec Fidelity | 73-line brief format design | THEORETICAL (never fully tested at 0) |

### Pipeline Name and Framing

- PIPELINE v3 (official name)
  - Council ruling: "Activation Pipeline" name RETIRED. Use "Pipeline v3" only.
  - Framing: "PURPOSE + VOCABULARY: dispositional instructions provide compositional intent; value tables provide CSS vocabulary. The builder integrates both."

---

## SECTION 1: TOPOLOGY AND ARCHITECTURE (Pre-Pipeline)

### Agent Topology: FLAT (each agent, direct I/O)

The orchestrator spawns agents sequentially. Each agent receives files directly from the orchestrator (not through intermediary agents). No hierarchical sub-leads.

### Iteration Architecture

**DEFAULT: Two-cycle convergence (BUILD + IMPROVE + RE-AUDIT)**
- Cycle 0: Initial build by Builder A (Opus). Produces HTML + conviction + IMPROVEMENT IDEAS.
- Cycle 1 (standard): IMPROVE build by Builder B (different Opus). Receives Builder A's ideas + PA artistic impression. Deepens what Cycle 0 established.
- Cycle 2 (optional): Available when PA-05 delta >= 0.3 after Cycle 1 (strong improvement trajectory).
- Evidence: Gas Town Cycle 0 → Cycle 1: 2.0 → 3.5 (+1.5). Historical IMPROVE ROI: +1.0 to +1.5 per cycle.
- Single-cycle RELEASE: Reserved for content where Cycle 0 achieves PA-05 >= 3.5 AND builder reports zero improvement ideas.

### Model Selection

- **REQUIRED.** Opus for ALL pipeline agents is non-negotiable. Enforced as strictly as container width 940-960px. Sonnet permitted ONLY for declared [SONNET-TEST] runs.
- Opus builder is prerequisite for Composed mode.

### Builder Capabilities

- Builder HAS Playwright and SEES its own output (Tier 4 info via EXPERIENCE).

### Iteration Policy: COMPOSE, Don't Fix

- Fresh builder in COMPOSING mode, generative/artistic language (not diagnostic).
- The IMPROVE pass is the pipeline's most valuable phase: +1.0 to +1.5 PA-05 per pass. This is the standard path to excellence, not recovery from failure.

### Prompt Curation: Survival Function (council Pattern 4 reclassification)

Reclassified from ROUTING/GATE-RUNNER to ORCHESTRATOR per council Pattern 4. The survival function runs during prompt assembly (Phase 0-1), NOT during gate verification (Phase 3). It is a CURATION function that determines which constraints survive into the builder's template.

- S(x) = 1/(1+C(x)): C(x)=0 survives, C(x)>0 dies — the survival function for prompt curation
- Both branches of the survival function: items with zero compositional complexity (C(x)=0) survive into the template; items with any violation count (C(x)>0) are removed

### Information Isolation: What the Builder Does NOT Receive

- Builder must NOT receive: gate thresholds, prohibition lists, count-gates, fix instructions, research archive, process metadata (prevents S-02, S-08, S-18).

**Council clarification (Pattern 1 ruling):** Perception thresholds ARE sent to builder as CALIBRATION (e.g., "Backgrounds must differ by at least 15 RGB points to be perceptible"), but NOT as gates (e.g., "FAIL if delta < 15 RGB"). Gate-format thresholds stay with gate-runner only.

### Honest Complexity Accounting

Total builder input: ~4,250 lines (not "73 lines")
- Constraint layer: 73 lines (recipe format)
- Disposition layer: ~40 lines (9 instructions, D-01 through D-09)
- Content map: ~35 lines
- tokens.css: 183 lines (direct file)
- components.css: ~944 lines (direct file)
- Value tables: ~550 lines
- Content source material: varies
- CD-006 reference (optional): ~1,200 lines

Council ruling (CF-01): "73-line constraint layer within ~4,250 total builder input (including reference files shared with v2). FORMAT improvement (recipe vs checklist) and STRUCTURE improvement (layered constraint architecture), not volume reduction."

**Builder Input Volume Ceiling:** Maximum 2,500 lines total builder-facing input. Before spawning builder, orchestrator counts all builder-facing file lines. If > 2,500, compress or remove content until under ceiling. Enforced by BV-07 gate.

### Observer Agent (Independent Compliance Verifier)

The Observer is the FIRST agent spawned — before the Content Analyst, before any Phase 0 work. It runs for the full pipeline lifecycle as an independent referee.

**Role separation:** The orchestrator EXECUTES the pipeline. The observer VERIFIES the orchestrator followed protocol. They never switch roles. The observer has NO pipeline execution responsibilities.

**Spawn:** Use Task tool with `subagent_type: "Opus"`. Provide ONLY the build output directory path + the observer protocol (see `d10-observer-protocol.md` Section 4 for the copy-paste-ready prompt). The observer receives NO pipeline context, NO build intent, NO content map.

**30 binary checks** across 7 categories:
- Experiential Scan (OBS-01–04): scan recorded before PA, covers all 4 sub-fields, plausible timing, pixel-based language
- BEFORE Checklist (OBS-05–09): IMPROVE checklist answered, different agent, correct inputs, RESIDUAL exists, re-audit happened
- Screenshots (OBS-10–14): 3 viewports, cold-look + scroll, count >= 24, DPR validated, quality gate ran
- BV Gates (OBS-15–18): BV-01–05 all ran, BV-06 at startup, BV-07 before builder, failures triggered revision
- PA Deployment (OBS-19–23): 9 auditors deployed, integrative after all 9, no pipeline context leak, Opus model, completion manifests
- Gate Runner (OBS-24–27): results file exists, count >= 40, GR-48 ran, no manual entries
- Tracker Completeness (OBS-28–30): fill rate >= 80%, monotonic timestamps, output files match reality

**11 BLOCKING checks** can halt the pipeline. **19 SIGNIFICANT checks** are logged but pipeline continues.

**STOP authority:** Observer writes `OBSERVER-STOP.md` to the build output directory if a BLOCKING violation is detected. The orchestrator MUST check for this file before each phase transition:
```
ls {BUILD_DIR}/OBSERVER-STOP.md 2>/dev/null
```
If the file exists, read it and address the violation before proceeding.

**Communication:** All observer communication is FILE-BASED. No SendMessage between observer and orchestrator. This prevents conversational manipulation.

**Verification schedule:** 5 discrete passes at phase boundaries (Pass 0 after Phase 0, Pass 1 after Phase 1, Pass 2 after Phase 3A, Pass 3 after Phase 3B, Pass 4 after Phase 3C, Pass R after IMPROVE if applicable).

**Final report:** After pipeline completes, wait for `OBSERVER-REPORT.md` to appear before archiving the build.

**Overhead:** ~12 min added, 1 additional Opus agent. Total agents with observer: 17.

---

## SECTION 2 (Phase 0): CONTENT ANALYSIS (~15 minutes)

### Agent

- Content Analyst (Opus) — reads content, classifies, maps sections, assesses metaphor.

### Input

- Content source material (raw markdown / article / research).

### Process

The Content Analyst performs 6 operations:

1. Classify content type (prose/mixed/visual)
2. Map structural heterogeneity
3. Assess metaphor viability
4. Per-section character (NARRATIVE/REF/CODE)
5. Estimate density arc
6. Reader model classification

Additionally, from the Reader Model investigation:
- Phase 0 Content Analyst outputs reader profile (~15 lines)
- Two agents: Content Analyst (reader profile) + Brief Assembler (merge)

### Output

- CONTENT MAP (~30-50 lines): "What the content IS, not what the design SHOULD BE."

### Decision Point: Content Affordance Check

If the content lacks heterogeneity or metaphor viability (Precondition 2 fails), the orchestrator must decide:
- Proceed at Middle tier (lower ambition, still valid)
- OR reject the content as unsuitable for this pipeline

### Timing

- Phase 0 takes ~15 minutes.

---

## SECTION 3 (Phase 1): BRIEF ASSEMBLY (~15 minutes)

### Agent

- Brief Assembler (Opus) — merges 73-line template + content map into Execution Brief.

### Input

- 73-line template (pre-compressed, created ONCE)
- Content map (~35 lines from Phase 0)
- Reader profile (~15 lines from Phase 0)

### Process

- Merges template + content map → BRIEF (~113 lines). Reader profile merged into Tier 3.

### Information Flow Architecture

**Channel 1 — UNIVERSAL (lossless, 1:1):** 73-line template passes through without modification. Created ONCE, not per-build.

**Channel 2 — CONTENT (regenerated ~10:1):** Content map is REGENERATED (new analysis), not compressed.

### Brief Structure (4 Tiers)

| Tier | Name | Lines | Content |
|------|------|-------|---------|
| 1 | IDENTITY | ~15 | 10 soul constraints as world-description |
| 2 | PERCEPTION PHYSICS | ~8 | 4 thresholds as NATURAL LAWS (CALIBRATION, not pass/fail) |
| 3 | COMPOSITIONAL | ~50 | Multi-Coherence (18), Metaphor (8), Density Arc (6), Content-Form (4), Creative Authority (8), CSS Values (6) |
| 4 | DISPOSITION | ~40 | D-01 through D-09 instructions |
| — | Content Map | ~35 | Appended from Phase 0 |

### Output

- BRIEF (~100-165 lines). 1:1 to builder, no further compression.
- Brief size constraints: sub-200 lines total, <=73 constraint layer, <=113 builder-visible spec.

### Timing

- Phase 1 takes ~15 minutes.

---

## SECTION 4 (Phase 1.5): MODE SELECTION (Orchestrator Decision)

### Applied vs Composed Mode

The orchestrator selects the builder's mode based on content-form routing. **The builder never sees both modes as a choice** (council ruling on Pattern 3).

- APPLIED: each mechanism solves LOCAL problem ("What does THIS section need?")
- COMPOSED: each mechanism serves GOVERNING LOGIC ("What does the page's CONCEPT need here?")

### Mode Selection Logic

The orchestrator decides mode based on Phase 0 content analysis:

**Select APPLIED when:**
- Content is reference/catalog/documentation
- Low structural heterogeneity (uniform sections)
- No clear metaphor viability from Phase 0
- Target tier: Middle (PA-05 2.5-3.0)

**Select COMPOSED when:**
- Content is narrative/essay/synthesis
- High structural heterogeneity (varied sections)
- Metaphor viability confirmed in Phase 0
- Target tier: Ceiling or Flagship (PA-05 3.0+)

**PA-05 target by mode:**
- APPLIED: PA-05 2.5-3.0 (MIDDLE tier). Tier 5 denominator = 5 (4 metaphor questions scored N/A).
- COMPOSED: PA-05 3.0+ (CEILING/FLAGSHIP). Tier 5 denominator = 9.

**Ship thresholds by mode:**
- APPLIED RELEASE: PA-05 >= 2.5, zero soul violations
- COMPOSED RELEASE: PA-05 >= 3.5, zero soul violations
- (IMPROVE thresholds adjusted proportionally)

### Mode Determinants (post-build verification by gate-runner)

- Mode determinant 1: Custom property naming (position vs concept)
- Mode determinant 2: Component zone-modulation (absent vs present)
- Mode determinant 3: Layout choice driver (content-type vs metaphor)
- Mode determinant 4: Removal test CCS (<0.35 vs >0.45) — RESEARCH CONSTRUCT — do not operationalize until methodology standardized (council CF-02). Listed as mode INDICATOR only, not as a gate check or decision criterion.
- Mode determinant 5: Governing logic (absent vs articulable in 1 sent)

### Mode Is Set At Build Start

Mode is determined by spec format: Recipe → COMPOSED possible, Checklist → APPLIED inevitable. Pipeline v3 creates COMPOSED conditions via D-01 + D-02 + Recipe + creative freedom + Opus. Builder enters COMPOSING mode (not COMPLYING/PLANNING/REPAIRING).

---

## SECTION 5 (Phase 2): TWO-PASS BUILDING (~55-60 minutes)

Phase 2 uses TWO builder passes. Pass A creates the structural foundation (HTML architecture, zone layout, mechanism deployment). Pass B deepens the enrichment layer (transitions, micro-typography, responsive polish). Pass A and Pass B MUST be DIFFERENT Opus agents.

### Phase 2A: Pass A Build (Structure — ~25 min)

**Agent:** Pass A Builder (Opus — REQUIRED, non-negotiable).

**Inputs:**
1. Execution Brief (~100-165 lines)
2. tokens.css, components.css, mechanism-catalog.md, value tables
3. Pass A Recipe (structure-focused: D-01 through D-06 plus D-09)
4. CD-006 reference (optional — COMPOSED mode only)

**Process:**
1. Write 3-sentence Conviction Statement as `<!-- CONVICTION: ... -->` at top of HTML
2. Build HTML structure: semantic sections, ARIA landmarks, grid layouts, component library classes (aim for 8+), skip link, heading hierarchy
3. Apply D-01 through D-06 plus D-09 (structure-facing dispositions)
4. Write CSS foundation: 400-700 lines targeting layout, grid, backgrounds, typography scale, spacing system, border-weight hierarchy
5. Self-evaluate: answer 7 questions as `<!-- SELF-EVALUATION: ... -->` HTML comment

**Output:** Pass A HTML (structure + conviction + self-eval + IMPROVEMENTS). Target 400-700 CSS lines. Orchestrator extracts: `<!-- CONVICTION: ... -->`, `<!-- SELF-EVALUATION: ... -->`, `<!-- IMPROVEMENTS: ... -->` (5-10 improvement ideas with confidence ratings).

### Phase 2A-gate: Pass A Structural Check (~1 min)

The orchestrator runs a LIGHTWEIGHT gate subset — NOT the full gate runner:

- **Identity gates (GR-01 through GR-10):** Soul constraints + container width. ANY FAIL → RETHINK (do not proceed to Pass B).
- **GR-51:** Heading hierarchy (ARIA).
- **Custom checks:** Zone count >= 3, CSS lines >= 400, conviction comment present, self-eval comment present.

**Handoff validation** (before spawning Pass B):
1. Pass A HTML exists and is > 100 lines
2. Conviction statement extracted successfully (>= 20 chars)
3. Self-evaluation exists with all 7 questions answered
4. At least 3 distinct `<section>` or equivalent structural elements
5. Pass B builder is a DIFFERENT Opus agent than Pass A builder

If validation fails on items 1-4: re-spawn Pass A builder (same inputs). Max 1 retry.

### Phase 2B: Pass B Build (Enrichment — ~30 min)

**Agent:** Pass B Builder (DIFFERENT Opus agent — REQUIRED).

**Inputs:**
1. Pass A HTML (the artifact to refine)
2. Conviction statement extracted from Pass A HTML
3. Self-evaluation from Pass A HTML
4. Execution Brief (same brief — continuity)
5. tokens.css, components.css, mechanism-catalog.md, value tables
6. Pass B Recipe (enrichment-focused: D-07 and D-08)

**Structural rules (Pass B MUST NOT violate):**
- Do NOT change HTML section structure (zone count, section order, grid architecture)
- Do NOT change zone background hex values (LOCKED by brief)
- Do NOT remove mechanisms — only add or deepen
- Do NOT change the conviction or metaphor
- MAY add HTML elements within existing sections (spans, dividers, decorative borders)
- MAY restructure CSS extensively (this is expected)

**Refinement priorities (in order):**
1. Multi-coherence: 3+ channel shifts at each zone boundary
2. Transitions: perceptible zone transitions (>= 15 RGB, border-weight changes, spacing jumps)
3. Micro-typography: letter-spacing >= 0.025em, fine-tuned line-heights, heading differentiation
4. Responsive polish: 1024px and 768px breakpoints, grid→stack transitions
5. Hover & interaction: subtle state changes on interactive elements
6. The Quiet Zone (D-09): verify at least one mid-page zone is deliberately plainer

**Output:** Pass B HTML (final artifact). Target 800-1200 total CSS lines (Pass A foundation + 300-600 lines added). Include `<!-- RESIDUAL: ... -->` comment documenting what was preserved/changed/next/trade-offs. Include `<!-- IMPROVEMENTS: ... -->` (5-10 improvement ideas with confidence ratings — Pass B builder's own assessment of remaining potential).

### GR-65: Structure Preservation Verification (post-Pass-B)

After Pass B completes, run GR-65 to verify Pass B preserved Pass A's structure:
- Same `<section>` count
- Same heading hierarchy (h1, h2, h3, h4 sequence matches)
- Grid-template-columns preserved

If GR-65 FAILS: discard Pass B output, re-spawn with escalated instructions. Max 1 retry.

### Timing

- Phase 2A: ~25 min, Phase 2A-gate: ~1 min, Phase 2B: ~30 min. Total: ~55-60 min.

---

## SECTION 6 (Phase 3): PERCEPTUAL AUDIT (Verification Only, ~30 minutes)

### Phase 3A: Screenshot Capture (orchestrator does this)

The orchestrator serves the HTML page via HTTP, captures screenshots at all 3 viewports (1440px, 1024px, 768px) — cold look + full-page + scroll-through — and saves them as files. Auditors read saved images via Read tool. This eliminates Playwright contention and enables 9+ parallel auditors.

**DPR-Safe Capture (NON-NEGOTIABLE):** Use `captureScreenshots(page, htmlUrl, outputDir)` from `gate-runner-core.js` Section 8. This function creates a NEW browser context with `{ deviceScaleFactor: 1 }` per viewport, injects CSS animation overrides, waits for `document.fonts.ready`, captures cold-look + full-page + scroll-through at 80% viewport-height steps, and closes each context. It bypasses the MCP's default DPR entirely, preventing the black screenshot issue caused by fractional DPR (0.667 on Retina Mac).

**Do NOT manually capture screenshots.** The `captureScreenshots` function replaces all manual scroll-and-capture workflows. It handles: DPR normalization, animation/transition disabling, font loading, directory creation, and file naming.

**Post-screenshot validation:** After `captureScreenshots` completes:
1. Run `checkScreenshotQuality(screenshotDir)` (GR-62). If FAIL, re-capture. Do NOT deploy auditors on blank/corrupt screenshots.
2. Run `checkVisibleContent(screenshotDir)` (A-03). If WARNING returned (>=3 consecutive viewports show <30% visible content), record in execution tracker and execute IMPROVE before PA deployment.

**GR-61 (DPR Validation):** Still available as a diagnostic check. If `captureScreenshots` is used (recommended), GR-61 is informational only — the capture function guarantees DPR=1 by construction. If the orchestrator captures screenshots manually (NOT recommended), GR-61 is BLOCKING — FAIL means recreate browser context with `{ deviceScaleFactor: 1 }`.

### Phase 3A+: Orchestrator Experiential Scan (MANDATORY — before deploying auditors)

After capturing all screenshots and BEFORE spawning any PA auditors, the orchestrator
performs a rapid experiential scan of the built page:

1. **30-SECOND READ TEST (VISUAL VERIFICATION):** Open the page at 1440px. Scroll at
   reading speed from top to bottom. Do not analyze. Attempt to READ the page as a
   visitor would — from the RENDERED PIXELS, not from your knowledge of the HTML source.
   If you know what a label "should" say but cannot read it as rendered, it is illegible. Note:
   - Any text you cannot read
   - Any visual element whose meaning is not immediately clear
   - Any moment where you lose orientation (where am I on the page?)
   - Any section where your attention drops off entirely

2. **INFORMATION EXTRACTION TEST:** Return to the top. For every chart, table, diagram,
   or data visualization — can you extract the specific claim it makes within 5 seconds?
   If not, note which element and why.

3. **NAVIGATION TEST:** If the page has a TOC, section markers, or any wayfinding
   elements — can you use them to jump to a specific section? Does the heading hierarchy
   make the page's structure self-evident?

**USABILITY CIRCUIT BREAKER (enhanced):** If the orchestrator's experiential scan finds
ANY text that is completely illegible or ANY core content that is inaccessible:
- Tag finding as BLOCKING-USABILITY
- Include in the prompt for ALL PA auditors as a pre-seeded finding: "The orchestrator
  observed [specific description]. Verify or contradict this finding."
- If the Weaver returns POLISH, verify the usability finding is Fix #1.

**FRESH-EYES EXCEPTION (circuit breaker only):** The pre-seeded finding above is an
EXPLICIT EXCEPTION to the fresh-eyes principle (pa-deployment.md Section 3,
pa-guardrails.md Section 6). This is the ONLY permitted context injection into
auditor prompts. The exception is narrowly scoped:
- ONLY BLOCKING-USABILITY findings from the orchestrator's own experiential scan
- ONLY the specific observation, framed as "verify or contradict"
- NOT gate results, NOT pipeline vocabulary, NOT architectural context
- Document this exception in the execution tracker (P3A+-5)
If the orchestrator has zero BLOCKING-USABILITY findings, no context is injected and
auditors receive pure fresh-eyes prompts (screenshots + questions + guardrails only).

Record result in execution tracker fields P3A+-1a through P3A+-1d:
- P3A+-1a: Any text illegible at arm's length?
- P3A+-1b: Any visual elements unclear within 5 seconds?
- P3A+-1c: Navigation structure self-evident?
- P3A+-1d: Visual verification — reported what PIXELS show, not what HTML says?

Then record the overall result: `EXPERIENTIAL_SCAN: CLEAN` or `EXPERIENTIAL_SCAN: BLOCKING-USABILITY: [description]`

**ENFORCEMENT:** The orchestrator MUST record experiential scan results in the execution tracker BEFORE spawning any PA auditors. If the `EXPERIENTIAL_SCAN` field is empty when PA auditors are deployed, the pipeline has violated sequencing. This is not a gate (no programmatic check) — it is a process discipline requirement that the execution tracker makes auditable after the fact.

> Source: Gas Town incident (2026-02-25) — orchestrator passed illegible chart text
> through to PA audit without flagging it, where it was ranked Fix #5. This scan
> takes ~2 minutes and prevents the expensive PA audit from running on a page with
> fundamental usability failures.

### Phase 3B: PA Audit (9 Opus auditors, parallel)

**Auditor Question Assignments:**
- PA-1 Q1-6, PA-2 Q7-12, ..., PA-7 Q37-42 (7 auditors x 6 questions)
- PA-8 Q43-48
- PA-9 Q49-54 (total 54 PA questions across 9 auditors)

**Integrative Auditor (SEQUENTIAL — spawns AFTER all 9 PA reports exist):**
- Agent 14: INTEGRATIVE AUDITOR (Opus) NO assigned questions
- + Integrative auditor
  - Views all screenshots with zero prior context; reports gestalt impressions
  - **GATEWAY:** Integrative Auditor MUST spawn AFTER all 9 PA report files exist on disk. Verify: `ls p3b-pa-auditor-*.md | wc -l` returns 9 before spawning Integrative. If count < 9, wait until all reports are written.

**USABILITY CIRCUIT BREAKER (Post-PA):** Before passing reports to Weaver, orchestrator scans all 9 auditor reports for BLOCKING-severity findings related to: text legibility, information accessibility, content completeness, or navigation. If ANY auditor flags BLOCKING usability: (1) elevate to BLOCKING-USABILITY, (2) annotate for Weaver as "must be Fix #1", (3) if POLISH verdict, verify usability fix is in the fix list. GR-64 verifies this programmatically after the Weaver report. This is the second circuit breaker — the first is the orchestrator's own Phase 3A+ experiential scan above.

### Phase 3C: Weaver (Opus — verdict synthesis)

Weaver reads all 10 auditor reports (9 PA + 1 Integrative) + gate results and produces the final VERDICT. On IMPROVE, returns to Phase 2 with PA verdict as CONTEXT (generative language).

---

## SECTION 7 (Phase 4): VERDICT AND DECISION TREE

### GR-48 Verdict Precondition (BLOCKING)

Verdict CANNOT be RELEASE or IMPROVE unless GR-48 (gate coverage verification) PASSES. GR-48 FAIL = verdict INCOMPLETE. The orchestrator enforces this via a phase-function accumulator pattern:

- Phase 1: `bvResults = runBriefVerification(brief)` — BV-01 through BV-04
- Phase 3A: `grResults = runPhase3Gates(page)` — GR-01 through GR-22, GR-43, GR-44, GR-45, GR-46, GR-50–GR-53, GR-60, GR-63
- Phase 3C-post: `postResults = runPostWeaverGates(reports, weaver)` — GR-64
- Final: `metaResults = runMetaGates(bvResults + grResults + postResults)` — GR-48 runs HERE, automatically aggregating all prior results. GR-49 runs HERE.

If GR-48 returns FAIL (any gate was skipped or unreported), the verdict is INCOMPLETE regardless of PA-05 score. The orchestrator MUST re-run missing gates before issuing a final verdict.

### Release / Improve / Rethink Thresholds

- RELEASE: PA-05>=3.5/4, Zero soul violations

**RELEASE (PA-05 >= 3.5)**
- Parse `<!-- IMPROVEMENTS: ... -->` from builder HTML.
- Count items tagged HIGH confidence.
- IF HIGH-confidence count >= 3:
    Log: "IMPROVE override: builder identified {count} high-confidence improvements"
    Verdict: IMPROVE (builder-initiated). This is a quality-seeking override, not a failure signal.
- ELSE:
    Pipeline complete. Page is ready.
    Programmatic gates run as final verification (informational).

**POLISH (POTENTIAL OVERRIDE) (PA-05 >= 3.0, <= 3 MECHANICAL fixes, builder has COMPOSITIONAL ideas)**
- All POLISH criteria met
- PLUS: builder's IMPROVEMENT-IDEAS contain at least one COMPOSITIONAL idea
- Orchestrator decision: ELECT IMPROVE (if budget allows) or POLISH + log deferred
- This is NOT a mandatory IMPROVE — it is an orchestrator judgment call
- Default: POLISH (safe). Override: IMPROVE (if orchestrator judges the idea has high potential)

**IMPROVE (PA-05 2.5-3.5)**

DIFFERENT Opus agent, reads conviction + PA artistic impressions, never sees gate scores or threshold numbers.

### IMPROVE Targeting (Two-Pass)

The Weaver's fix-type classification guides which pass to re-execute:

```
IF Weaver verdict is IMPROVE:
  Classify DOMINANT fix type from Weaver's action items:

  IF dominant fixes are MECHANICAL or SURFACE-LEVEL:
    → R-A: IMPROVE Pass B only
    → Pass B IMPROVE builder receives: conviction + artistic + Pass A HTML + Pass B HTML + brief
    → Goal: deepen the enrichment layer without touching structure
    → R-A builder MUST NOT modify HTML structure (CSS-only + minor HTML attributes)

  IF dominant fixes are STRUCTURAL:
    → R-C: IMPROVE Pass A then new Pass B
    → Step 1: Pass A IMPROVE builder receives: conviction + artistic + Pass A HTML + brief
    → Step 2: Fresh Pass B builder receives: revised Pass A HTML + brief + all standard Pass B inputs
    → Goal: fix structural architecture, then re-apply enrichment

  IF dominant fixes are COMPOSITIONAL:
    → RETHINK (full pipeline restart, NOT an IMPROVE)
    → Current RETHINK protocol applies unchanged
```

**IMPROVE budget:** R-A counts as 1 IMPROVE pass. R-C counts as 1 IMPROVE pass (even though it runs two builders). Total budget unchanged: 1 RETHINK + 2 IMPROVE passes maximum.

### IMPROVE Protocol (BEFORE / DURING / AFTER)

**BEFORE:**
- Did you re-read this section? [Y/N — if N, STOP and re-read]
- Assemble IMPROVE builder inputs: conviction artifact, artistic impression, **generatively transformed IMPROVEMENTS**, RESIDUAL artifact, original brief, Cycle 0 HTML.
- **IMPROVEMENTS transformation (orchestrator responsibility):**
  Read each HIGH and MEDIUM confidence item from `<!-- IMPROVEMENTS: ... -->`.
  Rewrite each as a generative observation using compositional vocabulary:
  - Replace diagnostic verbs (fix, increase, add) with generative verbs (deepen, reveal, illuminate)
  - Replace specific values (8 RGB, 16px) with perceptual descriptions (whispers where it could speak, feels compressed where it could breathe)
  - Preserve the ZONE REFERENCE so the IMPROVE builder knows WHERE to look
  Do NOT pass raw IMPROVEMENTS to the IMPROVE builder. Diagnostic vocabulary
  triggers corrective mode, which violates IMPROVE isolation.
- Extract builder IMPROVEMENT-IDEAS and BUILDER-REFLECTION comments from Cycle 0 HTML.
  Include as addendum to the artistic impression: "The original builder's unrealized
  ideas were: [ideas]. Treat these as creative seeds, not as directives."
- Verify RESIDUAL artifact exists in Cycle 0 HTML: `<!-- RESIDUAL: ... -->` comment (>= 50 chars) documenting: (1) what was preserved, (2) what was changed, (3) what would come next, (4) what trade-offs were made. At least 3 of 4 sections required. If missing: builder must add one before IMPROVE proceeds.

**DURING:**
- Is the IMPROVE builder a DIFFERENT Opus agent than the initial builder? [Y/N — if N, STOP and spawn different agent]
- Builder enters COMPOSITIONAL mode: deepening relationships, not fixing defects.
- Builder receives generative verbs only ("illuminate", "reveal", "deepen", "intensify").
- Builder does NOT receive gate scores, threshold numbers, diagnostic language.

**AFTER:**
- Did you return to Phase 3 for full re-audit? [Y/N — if N, STOP and return to Phase 3]
- All Phase 3 artifacts get `-improve` suffix (cycle 2) or `-improve-2` (cycle 3).
- PA reports: `p3b-pa-auditor-A-improve.md`. Gate results: `p3a-gate-results-improve.json`.
- Do NOT proceed to RELEASE/verdict without completing Phase 3B re-deployment.

**IMPROVE Builder Isolation Rules:**
- IMPROVE builder receives: artistic impression from Weaver + conviction statement + original brief + Cycle 0 HTML.
- IMPROVE builder does NOT receive: gate results, PA scores, failure analysis, fix lists, threshold numbers, diagnostic vocabulary.
- IMPROVE brief uses generative verbs ("illuminate", "reveal", "deepen", "intensify") — NOT diagnostic verbs ("fix", "repair", "address", "correct").
- Violation of isolation = suppressor re-activation. The IMPROVE builder must enter COMPOSITIONAL mode, not CORRECTIVE mode.

**Post-IMPROVE Mechanical Sweep (before PA re-deployment):** After IMPROVE completes and BEFORE re-deploying PA auditors, run this mechanical gate subset: GR-10 (container width), GR-18 (ghost mechanisms), GR-22 (CSS budget), GR-51 (heading hierarchy), GR-52 (image alt text). If ANY of these FAIL: fix the mechanical issue before spawning PA auditors. This prevents wasting 9 Opus auditor spawns on pages with trivially detectable defects.

**Post-IMPROVE Gate Re-Run:** After the mechanical sweep passes, re-run ALL gates that FAILED in the initial pass, plus GR-60 (WCAG contrast) regardless of initial result. GR-60 is mandatory because IMPROVE CSS changes can introduce new contrast violations.

**WARNING: GATES PASSED does not mean RELEASE.** Gates verify identity compliance and perception physics only. Compositional quality is verified ONLY by PA re-audit. Proceed to Phase 3B re-deployment after gates pass.

**Post-IMPROVE Screenshot Re-Capture:** Before deploying IMPROVE PA auditors, re-capture ALL screenshots using `captureScreenshots(page, htmlUrl, improveOutputDir)` with a SEPARATE output directory (e.g., `screenshots-improve/`). Run `checkScreenshotQuality` and `checkVisibleContent` on the new directory. DO NOT overwrite initial screenshots — they are the comparison baseline for PA-05 trajectory analysis.

**RETHINK (PA-05 < 2.5)**
- RETHINK: PA-05 < 2.5, FRESH builder in COMPOSING mode
- RETHINK: Fresh Opus builder in COMPOSING mode
- RETHINK: Reads previous conviction artifact (not fix list)
- RETHINK: Generative language, not diagnostic
- VERDICT: RETHINK (PA-05 < 2.5)

RETHINK protocol:
1. Spawn FRESH Opus builder in COMPOSING mode (not repair mode)
2. Give it: original brief, content, conviction artifact from failed build
3. DO NOT give: the failed HTML, fix lists, diagnostic analysis
4. Builder starts from scratch with the lesson of the conviction
5. Return to Phase 2 entirely

### Core Principle

- Fixing alone will not reach Flagship — but COMPOSING through successive IMPROVE passes will. Each IMPROVE is a fresh act of composition, not a repair. The path from 3.0 to 4.0 is "compose, evaluate, compose again" — not "fix, fix, fix."
- THE GAP: 3.2->4.0 = 0.8 points = revision quality deficit

### Iteration Decision Function

When verdict is IMPROVE or RETHINK, execute this decision function:

```
IF verdict is IMPROVE:
  1. Check iteration budget (cycle <= 3). If exceeded: HALT with diagnostic.
  2. Check PA-05 delta from previous pass (delta >= 0.3). If below: HALT (diminishing returns).
  3. Check Tier 5 metaphor score. If DROPPED while PA-05 rose: HALT (compositional averaging).
  4. Otherwise: PROCEED to IMPROVE protocol above.
  [GR-70: PA-05 non-regression — embedded here, NOT a programmatic gate]
  [GR-75: Iteration counter — embedded here, NOT a programmatic gate]

IF verdict is RETHINK:
  1. Check iteration budget (rethinks <= 1). If exceeded: HALT with diagnostic.
  2. Otherwise: PROCEED to RETHINK protocol below.
```

### Low-Friction Iteration Protocol (Staged + Mini-PA)

The standard IMPROVE protocol requires a full Mode 4 PA re-audit after every IMPROVE cycle.
This is the FULL VALIDATION path. When the cost of full validation exceeds the expected
benefit, use these low-friction alternatives:

#### Track A: Staged Iteration (5+ improvement ideas)

When the Weaver's artistic impression identifies 5+ actionable improvements:

1. Spawn IMPROVE builder (Opus). Same builder permitted for intermediate cycles.
2. Builder implements improvements. Output: updated HTML.
3. INTERMEDIATE CHECK (gate-only, no PA):
   - Re-serve HTML. Re-capture 1440px cold-look screenshot only.
   - Re-run identity gates (GR-01–GR-10). All must PASS.
   - Re-run perception gates (GR-11–GR-15). Must not worsen vs previous pass.
   - Re-run anti-pattern gates (GR-17–GR-22). Must not worsen.
   - Orchestrator visual spot-check: compare cold-look to previous.
   - If ANY identity gate FAILED that previously PASSED: ABORT → escalate to Mode 4 PA.
   - If 2+ perception gates worsen: ABORT → escalate to Mode 4 PA.
4. Repeat steps 1-3 up to 3 intermediate cycles.
5. AFTER final intermediate cycle: proceed to FINAL VALIDATION.
   - If previous PA-05 < 3.0: use Mode 4 PA (full re-audit).
   - If previous PA-05 >= 3.0: use Mini-PA (Mode 2.5, see pa-deployment.md Section 6).

#### Track B: Single IMPROVE + Mini-PA (2-4 improvement ideas)

When the Weaver identifies 2-4 improvements:

1. Spawn DIFFERENT Opus IMPROVE builder (standard isolation).
2. Builder implements improvements.
3. Run Mini-PA (Mode 2.5): 3 auditors (A, C, G), 15 questions, 1440px only.
4. Decision:
   - PA-05 dropped: ESCALATE to Mode 4 PA (possible regression).
   - PA-05 rose >= 0.3: apply standard release thresholds.
   - PA-05 stagnant (delta < 0.3): HALT (diminishing returns).

#### Mini-PA Escalation Triggers

Mini-PA (Mode 2.5) must escalate to Mode 4 PA when:
- PA-05 DECREASED vs previous cycle
- Auditors flag a NEW issue not in original PA findings
- Build targets FLAGSHIP tier (PA-05 >= 3.5 threshold)
- Mini-PA shows PA-05 >= 3.5 (FLAGSHIP must be confirmed by Mode 4)

### Gate Logic Relocated from Gate Runner (Wave 1)

The following gate logic was removed from `artifact-gate-runner.md` during Wave 1 because these checks are orchestrator decisions, not DOM inspection gates. Their logic now lives here:

**GR-29 through GR-32 (Verdict Gates) — now orchestrator verdict logic above:**
- GR-29: PA-05 >= 3.5 AND zero soul violations = RELEASE
- GR-30: PA-05 2.5-3.5 = IMPROVE
- GR-31: PA-05 < 2.5 = RETHINK
- GR-32: 3+ anti-pattern fails = RETHINK (overrides PA-05 score)
These are applied in the Release/Improve/Rethink thresholds section above.

**GR-35 (Layout Driver) — rerouted to PA:**
Layout driver assessment (content-type vs metaphor) is NOT automatable. Assessed by PA auditors via PA-05 sub-criteria (DESIGNED) and Tier 5 questions. No orchestrator action needed.

**GR-36 through GR-39 (Experiment Gates) — for separate experiment protocol document:**
- GR-36: Experiment #19 (Opus isolation) active state
- GR-37: Experiment #20 (disposition evaluation) active state
- GR-38: Experiment #21 (3-pass validation) active state
- GR-39: Experiment tracking and PA-05 score comparison across experimental conditions
These will be documented in a dedicated experiment protocol file (Wave 3).

**GR-40 through GR-42 (Policy Gates) — orchestrator process checks:**
- GR-40: Iterative-to-convergence is the default (no unauthorized 3-pass Compositional Critic)
- GR-41: RETHINK uses fresh builder (not same builder in repair mode)
- GR-42: Builder does not receive gate thresholds (overlaps with GR-27 precondition gate)
The orchestrator enforces these as process rules during Phase 2 spawning and Phase 3C verdict handling.

### Orchestrator Decision Rules (formerly GR-23 through GR-28) — Reclassified Wave 3 (FIX-094, FIX-098)

The following gates were removed from `artifact-gate-runner.md` during Wave 3 because they are orchestrator pre-build verification checks, not Playwright DOM inspection gates. They verify pipeline configuration before the builder starts. The orchestrator runs these as text-based checks during Phase 0-1.

**Pre-Build Configuration Checks (GR-23-24):**

- **GR-23: Builder Model = Opus** [REQUIRED]
  - Check: Verify model ID of builder agent is `claude-opus-*`
  - FAIL produces BLOCK — pipeline MUST NOT proceed to Phase 2 with a non-Opus builder
  - Enforcement: Orchestrator verifies model selection during Phase 2 agent spawning. If non-Opus detected, HALT and log reason. Sonnet permitted ONLY for declared [SONNET-TEST] runs.

- **GR-24: Content Has Heterogeneity** [ADVISORY]
  - Check: Phase 0 Content Analyst output must include heterogeneity >= "moderate" and metaphor viability >= "viable"
  - Evidence: CONFOUNDED (maps to Content Affordance factor in master equation)
  - Enforcement: Orchestrator checks Phase 0 output before proceeding to Phase 1

**Brief Verification Checks (GR-25-28):**

- **GR-25: Suppressor Count = 0** [RECOMMENDED]
  - Check: Scan activation brief for known suppressor patterns (same regex as BV-04)
  - Patterns: `/sample\s+\d+-\d+/i`, `/must\s+not|shall\s+not|never\s+use/i`, `/verify\s+that|fail\s+if|must\s+be/i`, `/>=?\s*\d+\s+channels?/i`
  - Evidence: OBSERVED (20 suppressors, ALL correlate with degradation)
  - Enforcement: Orchestrator runs after Brief Assembler output, before passing brief to builder

- **GR-26: Brief Size Cap** [RECOMMENDED]
  - Check: Total brief < 200 lines AND constraint layer <= 73 lines
  - Evidence: OBSERVED (Middle success at 100 lines; Flagship failure at 530+ lines)
  - Enforcement: Orchestrator counts lines after brief assembly

- **GR-27: Builder Does Not Receive Gates** [RECOMMENDED]
  - Check: Scan builder's input for gate-format language ("FAIL if", ">= N channels", "pass/fail threshold")
  - Evidence: OBSERVED (gate visibility caused threshold gaming in Flagship)
  - Enforcement: Orchestrator audits builder input package before spawning builder agent
  - Note: Overlaps with GR-42 (policy gate) — both enforce the same principle

- **GR-28: Recipe Format (Not Checklist)** [RECOMMENDED]
  - Check: Scan builder brief for recipe indicators (sequenced steps, "Read/Select/Deploy/Assess" verbs, world-description voice). Flag if compliance voice ("Verify/Fail if/Must be") detected.
  - Evidence: OBSERVED (Recipe = DESIGNED N=2; Checklist = FLAT N=2; massive effect size)
  - Enforcement: Orchestrator validates brief format after assembly, before passing to builder

**Execution timing:** GR-23 and GR-24 run during Phase 0/Phase 2 agent spawning. GR-25 through GR-28 run between Phase 1 (brief assembly) and Phase 2 (builder execution), alongside BV-01 through BV-04. Together they form the complete pre-build verification layer.

---

## SECTION 8: TOTAL BUILD SUMMARY

| Phase | Duration | Agent Count | Key Agent |
|-------|----------|-------------|-----------|
| Phase 0: Content Analysis | ~15 min | 1 (Opus) | Content Analyst |
| Phase 1: Brief Assembly | ~15 min | 1 (Opus) | Brief Assembler |
| Phase 2A: Pass A Build | ~25 min | 1 (Opus) | Pass A Builder |
| Phase 2A-gate: Structural Check | ~1 min | 0 (orchestrator) | Orchestrator |
| Phase 2B: Pass B Build | ~30 min | 1 (Opus) | Pass B Builder |
| Phase 3A: Screenshots | ~5 min | 0 (lead does this) | Orchestrator |
| Phase 3B: PA Audit | ~15 min | 10 (9 + integrative) | PA-1 through PA-9 |
| Phase 3C: Verdict | ~5 min | 1 (Opus) | Weaver |
| **TOTAL** | **~90-120 min** | **16 agents** | |

**Costs:** Build with convergence: ~90-200 min, ~$65-300/page (1-2 IMPROVE cycles typical). RETHINK adds ~90-120 min. After pipeline completes, archive output directory to `design-system/pipeline/archived-runs/{SLUG}-{DATE}/`.

---

## SECTION 9: VALUES CONTEXT (Historical)

15 council-rerouted VALUES items (Pattern 5 Category A) inform pipeline calibration. Key data points: Gas Town PA-05 3.5/4 (old pipeline, Opus, 610 lines), Middle PA-05 2.5, Flagship PA-05 1.5. Suppressor removal curve: HYPOTHESIZED per council. All items are distributed across Sections 0-8 in their operational locations. Full rerouting provenance archived with Sections 10-16.


---

*Sections 10-16 (historical context, experiment protocol, suppressor management, 13 concepts, diagnostics, revision quality, recommendations, item coverage verification) archived to `_historical/orchestrator-sections-10-16.md`. For execution, Sections 0-9 above are complete.*

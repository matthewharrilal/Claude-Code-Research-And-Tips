# D5: Two-Pass Orchestration Protocol Design

**Date:** 2026-02-26
**Author:** Orchestration Architect (Opus)
**Status:** DESIGN DOCUMENT — Do NOT edit pipeline files
**Scope:** How the orchestrator manages Pass A (structure) and Pass B (refinement) as two separate builder calls

---

## 1. Updated Quickstart Flow

Current quickstart (MANIFEST.md steps 0-11) spawns ONE builder at step 5. The two-pass architecture splits step 5 into 5a and 5b, and inserts a lightweight structural check between them.

### Revised Quickstart Procedure

```
0.  Create output directory. Copy EXECUTION-TRACKER-TEMPLATE.md. Fill BUILD_DATE, CONTENT_PATH, SLUG.
1.  Verify all prerequisite files exist (Phase 0 preconditions).
2.  Spawn Content Analyst (Opus) → Content Map (~30-50 lines).
3.  Determine mode: APPLIED (default) or COMPOSED.
4.  Spawn Brief Assembler (Opus) → Execution Brief (~100-165 lines).
4a. Brief Verification: BV-01 through BV-07. Max 2 revision cycles.

    ── NEW: TWO-PASS BUILD ──

5a. Spawn Pass A Builder (Opus) with:
      - Execution Brief
      - tokens.css, components.css, mechanism-catalog.md, value tables
      - Pass A Recipe (structure-focused: D-01 through D-05)
      - CD-006 reference (COMPOSED mode only)
    Receive: Pass A HTML (structure + conviction + self-eval)

5b. Run Pass A Structural Check (orchestrator, NOT full gate runner):
      - GR-10: Container width 940-960px
      - GR-01-GR-09: Soul constraints (identity)
      - GR-51: Heading hierarchy
      - HTML structure check: zone count, section count, grid presence
      - CSS line count: >= 400 (half of quality floor)
    IF any identity gate FAILS → REBUILD (do not proceed to Pass B)
    IF structural check PASSES → proceed to 5c

5c. Spawn Pass B Builder (DIFFERENT Opus agent) with:
      - Pass A HTML (the artifact to refine)
      - Execution Brief (same brief — continuity)
      - Pass B Recipe (refinement-focused: D-06 through D-09)
      - tokens.css, components.css, mechanism-catalog.md, value tables
      - Conviction statement extracted from Pass A HTML
    Receive: Pass B HTML (final artifact with full CSS)

6.  Serve HTML via HTTP. Capture screenshots at 3 viewports.
7.  Run Gate Runner programmatically against Pass B HTML (full 54 gates).
8.  Spawn 9 PA Auditors (A-I) in parallel.
9.  Spawn Integrative Auditor with all 9 reports.
10. Spawn Weaver with integrative report + gate results.
11. Verdict: SHIP / SHIP WITH FIXES / REFINE / REBUILD.
```

**Step number mapping:** Old step 5 → new steps 5a-5c. Old steps 6-11 → new steps 6-11 (renumbered from 7-12 for minimal disruption). The MANIFEST consumer sees the same structure with an expanded Phase 2.

---

## 2. Pass A → Pass B Handoff Specification

### Artifacts Passed from Pass A to Pass B

| # | Artifact | Source | How Extracted | Required |
|---|----------|--------|---------------|----------|
| 1 | **Pass A HTML file** | Pass A builder output | File path (e.g., `p2a-builder-{timestamp}.html`) | YES |
| 2 | **Conviction statement** | `<!-- CONVICTION: ... -->` in Pass A HTML | Orchestrator extracts via regex: `/<!-- CONVICTION:\s*(.*?)\s*-->/s` | YES |
| 3 | **Self-evaluation comment** | `<!-- SELF-EVALUATION: ... -->` in Pass A HTML | Orchestrator extracts via regex | YES |
| 4 | **Execution Brief** | Phase 1 output (same brief as Pass A) | File path — unchanged | YES |
| 5 | **tokens.css** | Design system file | File path — unchanged | YES |
| 6 | **components.css** | Design system file | File path — unchanged | YES |
| 7 | **mechanism-catalog.md** | Design system file | File path — unchanged | YES |
| 8 | **value tables** | artifact-value-tables.md | File path — unchanged | YES |
| 9 | **Pass A structural check results** | Step 5b output | Summary: which gates passed/failed, zone count, CSS line count | NO (informational) |

### Artifacts NOT Passed to Pass B

| Artifact | Reason |
|----------|--------|
| Full gate runner results | Pass B builder must not threshold-game |
| PA auditor reports | PA has not run yet |
| Content Map (raw) | Builder works from brief, not raw analysis |
| Content source markdown | Already embedded in brief |

### Handoff Validation (Orchestrator Check)

Before spawning Pass B, the orchestrator MUST verify:

1. Pass A HTML exists and is > 100 lines
2. Conviction statement extracted successfully (>= 20 chars)
3. Self-evaluation comment exists with all 7 questions answered
4. Pass A HTML contains at least 3 distinct `<section>` or equivalent structural elements
5. Pass B builder is a DIFFERENT Opus agent than Pass A builder

If validation fails on items 1-4: re-spawn Pass A builder (same inputs). Max 1 retry.
If validation fails on item 5: this is an orchestrator error — spawn a new agent.

---

## 3. Gate Timing Recommendation

### Option Analysis

| Option | Description | Pro | Con |
|--------|-------------|-----|-----|
| A | Build A → Build B → Full Gates → PA | Gates see final output; simplest | No early abort on structural failure |
| B | Build A → Quick Gates → Build B → Full Gates → PA | Early abort saves Pass B cost | Two gate runs; more complexity |
| C | Build A → Structural Gates → Build B → All Gates → PA | Best balance: catch identity failures early, full validation on final | Moderate complexity |

### Recommendation: Option C (Structural Gates Then Full)

**Rationale:**

1. **Identity failures are catastrophic and cheap to detect.** If Pass A produces `border-radius: 8px` on elements, Pass B cannot fix this (refinement operates on Pass A's structure). Running GR-01-GR-10 takes < 30 seconds and prevents wasting ~45 min on a doomed Pass B.

2. **Perception gates need full CSS to evaluate.** Background delta (GR-11), letter-spacing (GR-12), stacked gaps (GR-13-14) are meaningless on a structure-only artifact — Pass A may have placeholder values that Pass B refines. Running perception gates after Pass A would produce false failures.

3. **Anti-pattern gates need final output.** Ghost mechanisms (GR-18), threshold gaming (GR-19), CSS budget (GR-22) are only meaningful after Pass B applies the full refinement layer.

4. **Quality floor (GR-15-16) is split across passes.** Pass A contributes structure (mechanisms via HTML/layout), Pass B contributes surface (mechanisms via CSS). The 14-mechanism minimum and 800-CSS-line minimum can only be evaluated on the combined output.

### Pass A Structural Check Specification

Run AFTER Pass A, BEFORE Pass B. NOT the full gate runner — a lightweight subset:

```javascript
// Pass A Structural Check — orchestrator runs via Playwright
const passACheck = {
  gates: [
    'GR-01', 'GR-02', 'GR-03', 'GR-04', 'GR-05',  // Soul: border-radius, shadows
    'GR-06', 'GR-07', 'GR-08', 'GR-09',             // Soul: palette, fonts, gradients
    'GR-10',                                           // Container width
    'GR-51',                                           // Heading hierarchy (ARIA)
  ],
  custom: [
    { id: 'PA-ZONE-COUNT', check: 'sections >= 3', threshold: 3 },
    { id: 'PA-CSS-FLOOR', check: 'CSS lines >= 400', threshold: 400 },
    { id: 'PA-CONVICTION', check: 'conviction comment exists', threshold: 'present' },
    { id: 'PA-SELF-EVAL', check: 'self-eval comment exists', threshold: 'present' },
  ],
  verdict: {
    anyIdentityFail: 'REBUILD',    // GR-01 through GR-10
    customFail: 'RE-SPAWN-PASS-A', // Retry Pass A once, then REBUILD
    allPass: 'PROCEED-TO-PASS-B',
  }
};
```

**Execution time:** < 1 minute (subset of gates, no perception checks).

### Full Gate Runner Timing

Runs AFTER Pass B completes, in parallel with screenshot capture (unchanged from current pipeline). The full 54-gate suite evaluates the final combined artifact.

---

## 4. REFINE Protocol Updates

### Current REFINE Flow (Single-Pass)

```
Verdict REFINE → Spawn REFINE builder → receives conviction + artistic + RESIDUAL + brief + Pass 1 HTML → produces revised HTML → Full re-audit
```

### Two-Pass REFINE Options

| Option | Description | When to Use |
|--------|-------------|-------------|
| R-A | Re-do Pass B only | PA finds refinement-layer issues (CSS, transitions, typography) but structure is sound |
| R-B | Re-do both passes | PA finds structural issues (zone architecture, content flow, hierarchy) |
| R-C | Re-do Pass A only, then new Pass B | Structure flawed but concept is sound (conviction preserved) |

### Recommendation: Weaver-Guided REFINE Targeting

The Weaver's fix-type classification already distinguishes MECHANICAL / STRUCTURAL / COMPOSITIONAL. Extend this to guide which pass to re-execute:

```
IF Weaver verdict is REFINE:
  Classify DOMINANT fix type from Weaver's action items:

  IF dominant fixes are MECHANICAL or SURFACE-LEVEL:
    → REFINE Pass B only (R-A)
    → Pass B REFINE builder receives: conviction + artistic + Pass A HTML + Pass B HTML + brief
    → Goal: deepen the refinement layer without touching structure

  IF dominant fixes are STRUCTURAL:
    → REFINE Pass A then new Pass B (R-C)
    → Pass A REFINE builder receives: conviction + artistic + Pass A HTML + brief
    → New Pass B builder receives: revised Pass A HTML + brief
    → Goal: fix structural architecture, then re-apply refinement

  IF dominant fixes are COMPOSITIONAL:
    → REBUILD (full pipeline restart, NOT a REFINE)
    → Current REBUILD protocol applies unchanged
```

### REFINE Builder Inputs by Target

**R-A (Pass B only REFINE):**

| Input | Source | Purpose |
|-------|--------|---------|
| Conviction statement | Pass A HTML | Metaphor continuity |
| Artistic impression | Weaver Output B | Generative direction |
| RESIDUAL artifact | Pass B HTML | Builder rationale |
| Original Execution Brief | Phase 1 output | Constraint continuity |
| Pass A HTML | Pass A output | Structural foundation (READ-ONLY — do not modify HTML structure) |
| Pass B HTML | Pass B output | Starting point for refinement |

**R-C (Pass A + new Pass B REFINE):**

Step 1 — Pass A REFINE:
| Input | Source | Purpose |
|-------|--------|---------|
| Conviction statement | Pass A HTML | Metaphor continuity |
| Artistic impression | Weaver Output B | Generative direction |
| Original Execution Brief | Phase 1 output | Constraint continuity |
| Pass A HTML | Pass A output | Starting point |

Step 2 — Fresh Pass B on revised structure:
| Input | Source | Purpose |
|-------|--------|---------|
| Revised Pass A HTML | Step 1 output | New structural foundation |
| Original Execution Brief | Phase 1 output | Constraint continuity |
| All standard Pass B inputs | Same as initial | Reference files |

### REFINE Isolation Rules (Updated)

Current isolation rules remain: REFINE builder sees generative language only, no gate scores, no threshold numbers. Additional rules for two-pass:

- **R-A REFINE builder MUST NOT modify HTML structure.** Changes are CSS-only + minor HTML attribute additions (classes, ARIA labels). If HTML structure needs changes, this is an R-C, not R-A.
- **R-C REFINE builder for Pass A follows current REFINE isolation.** The subsequent Pass B is a FRESH builder (not a REFINE — it's a standard Pass B on new structure).
- **Weaver's artistic impression carries to BOTH passes** in R-C (Pass A REFINE builder reads it; Pass B builder does not — Pass B builder is fresh-eyes on the structure).

### Updated Iteration Budget

```
Budget: 1 REBUILD + 2 REFINE passes maximum (unchanged)

REFINE pass types count toward the same budget:
- R-A counts as 1 REFINE pass
- R-C counts as 1 REFINE pass (even though it runs two builders)
- A second REFINE after R-C can be R-A or R-C

Diminishing returns check: PA-05 delta >= 0.3 still applies.
```

---

## 5. Tracker Field Additions

### New Fields for Phase 2 (Build)

Replace the current single-builder Phase 2 section with:

```markdown
## Phase 2A: Pass A Build (Structure)

- [ ] Pass A HTML produced — ___ lines (auto: `wc -l`)
- CSS lines (Pass A): ___ (auto: count `<style>` content)
- Builder model (Pass A): ___ (manual: Opus REQUIRED)
- Pass A builder spawn time: ___ (auto: `date -u +%H:%M:%S`)
- Pass A builder completion time: ___ (auto: `date -u +%H:%M:%S`)
- Conviction statement present: ___ (auto: grep `<!-- CONVICTION`)
- Self-eval 7 questions answered: ___ (auto: grep count)
- Pass A HTML path: ___ (auto)

## Phase 2A-gate: Pass A Structural Check

- Identity gates: ___/10 PASS (auto: from structural check)
- GR-51 heading hierarchy: ___ (auto: PASS/FAIL)
- Zone count: ___ (auto: section count)
- CSS floor (>= 400): ___ (auto: PASS/FAIL)
- Conviction present: ___ (auto: PASS/FAIL)
- Self-eval present: ___ (auto: PASS/FAIL)
- Pass A structural verdict: ___ (auto: PROCEED-TO-PASS-B / RE-SPAWN / REBUILD)

## Phase 2B: Pass B Build (Refinement)

- [ ] Pass B HTML produced — ___ lines (auto: `wc -l`)
- CSS lines (Pass B): ___ (auto: count `<style>` content)
- CSS lines delta (B - A): ___ (auto)
- Builder model (Pass B): ___ (manual: Opus REQUIRED)
- Pass B builder spawn time: ___ (auto: `date -u +%H:%M:%S`)
- Pass B builder completion time: ___ (auto: `date -u +%H:%M:%S`)
- Pass B is DIFFERENT agent than Pass A: ___ (manual: YES required)
- Pass B HTML path: ___ (auto)
```

### Updated REFINE Section

```markdown
## REFINE Phase (if applicable)

- REFINE target: ___ (manual: R-A = Pass B only / R-C = Pass A + new Pass B)
- REFINE rationale: ___ (manual: 1-line — why this target)
- REFINE builder model: ___ (manual: Opus REQUIRED)
- REFINE builder is DIFFERENT agent: ___ (manual: YES required)
- REFINE isolation verified: ___ (manual: YES/NO — generative language only, no gates/scores)
- If R-C: Pass A REFINE HTML path: ___
- If R-C: Fresh Pass B HTML path: ___
- If R-A: Revised Pass B HTML path: ___
- Post-REFINE mechanical sweep: ___ (auto: gate rerun PASS/FAIL counts)
- GR-60 re-run: ___ (auto: PASS/FAIL)
- REFINE PA-05 delta: ___ (auto: final - initial)
- REFINE CSS lines delta: ___ (auto: final - initial)
```

### Updated Iteration Log

```markdown
| Cycle | Pass | PA-05 | Tier5 | Gate Pass % | Fix Count | Verdict | Decision |
|-------|------|-------|-------|-------------|-----------|---------|----------|
| 1 (initial A+B) | A+B | ___ | ___ | ___ | ___ | ___ | ___ |
| 2 (REFINE) | R-A/R-C | ___ | ___ | ___ | ___ | ___ | ___ |
| 3 (REFINE-2) | R-A/R-C | ___ | ___ | ___ | ___ | ___ | ___ |
```

### Updated Output Files Table

```markdown
| Phase | File | Path | Exists |
|-------|------|------|--------|
| P2A | Pass A HTML | ___ | [ ] |
| P2A-gate | Structural Check JSON | ___ | [ ] |
| P2B | Pass B HTML (final) | ___ | [ ] |
```

### Field Count Impact

Current tracker: 59 fields. New tracker: ~72 fields (+13). The additions are:
- Phase 2A: 8 fields (replacing 6 from old Phase 2) = +2
- Phase 2A-gate: 7 new fields = +7
- Phase 2B: 8 new fields (some overlap removed) = +4 net
- REFINE section: ~12 fields (replacing 7) = +5 net
- Iteration Log: 1 new column = +0 (column, not field)

**Net increase: ~13 fields.** Acceptable — the structural check and pass separation are the primary sources.

---

## 6. Draft Agent Prompt Templates

### Pass A Builder Prompt (Phase 2A)

```
You are the Pass A Builder for Pipeline v3. Your job is STRUCTURAL COMPOSITION —
HTML architecture, zone layout, mechanism deployment, content organization.

Read and internalize these files IN ORDER:
1. The Execution Brief below (your primary guide)
2. tokens.css (183 lines) — shared design vocabulary
3. components.css (~1,195 lines) — pre-built component library
4. mechanism-catalog.md — available compositional mechanisms
5. Value Tables (artifact-value-tables.md) — BACKGROUND COLOR PAIRS are Tier 2 LOCKED.
6. CD-006 reference (COMPOSED mode ONLY) — study for compositional patterns.

Zone backgrounds in the brief are LOCKED. Do not modify zone background hex values.

Before building, write a 3-sentence CONVICTION STATEMENT:
(1) The governing metaphor is ___.
(2) The emotional arc goes from ___ to ___.
(3) The compositional strategy is ___.
Place as <!-- CONVICTION: [your 3 sentences] --> at the TOP of your HTML output.

YOUR FOCUS — Structure (D-01 through D-05):
PHASE 1 - READ: Internalize vocabulary from reference files before writing ANY code.
PHASE 2 - SELECT: Make per-page creative decisions (zone backgrounds from brief,
  type scale, metaphor vocabulary, component adaptation, mechanism selection).
PHASE 3 - DEPLOY SCAFFOLDING: HTML structure with semantic sections, ARIA landmarks,
  grid layouts, component library classes (aim for 8+), skip link, heading hierarchy.
  This is your PRIMARY deliverable — the HTML skeleton must be architecturally sound.
PHASE 4 - DEPLOY DISPOSITION (STRUCTURAL SUBSET): Apply D-01 through D-05:
  {D-01 through D-05 from brief — these are the structure-facing dispositions}
PHASE 5 - SELF-EVALUATE: Answer ALL 7 questions as an HTML comment block.
  Format: <!-- SELF-EVALUATION:
  1. Zone transitions = different room? (per boundary)
  2. Distinct transition types count: ___ (need 3+)
  3. Skeleton has shape without text? (squint test)
  4. Scroll surprise in second half? (describe)
  5. Section heights — 3+ different heights? (list)
  6. Density arc — does density increase then resolve? (5 words)
  7. Ending — does final viewport feel earned? (why?)
  -->

CSS EXPECTATIONS FOR PASS A:
- Write ALL CSS you can. Do not leave placeholders or TODO comments.
- Target 400-700 CSS lines. You are building the FOUNDATION — layout, grid,
  backgrounds, typography scale, spacing system, border-weight hierarchy.
- Focus on SPATIAL decisions: zone heights, grid columns, padding rhythms,
  content widths within container.
- Apply mechanism-catalog mechanisms for STRUCTURE: grid layouts, content zones,
  density arc, section rhythm, type hierarchy.
- A Pass B builder will DEEPEN your CSS (transitions, micro-typography, hover states,
  responsive polish). Do NOT leave these as TODOs — write your best version,
  and Pass B will refine.

OUTPUT: Single HTML file, all CSS in <style> tag, Google Fonts imports.
This file will be the input for a refinement pass — make it architecturally complete.

---
EXECUTION BRIEF:
{EXECUTION_BRIEF_FROM_PHASE_1}

---
REFERENCE FILES:
{tokens.css content}
---
{components.css content}
---
{mechanism-catalog.md content}
---
{value-tables.md content}
```

### Pass B Builder Prompt (Phase 2B)

```
You are the Pass B Builder for Pipeline v3. Your job is REFINEMENT — deepening
the compositional quality of an existing structural foundation.

You are receiving a Pass A HTML file that has been structurally validated.
The HTML architecture, zone layout, and mechanism selection are ESTABLISHED.
Your role is to DEEPEN, INTENSIFY, and POLISH — not to restructure.

Read and internalize these files IN ORDER:
1. The conviction statement from Pass A (your metaphor compass)
2. The self-evaluation from Pass A (what the structural builder intended)
3. The Pass A HTML file (your working artifact)
4. The Execution Brief (your constraint guide)
5. tokens.css, components.css, mechanism-catalog.md (your vocabulary)
6. Value Tables — BACKGROUND COLOR PAIRS are LOCKED.

YOUR FOCUS — Refinement (D-06 through D-09):
Apply D-06 through D-09 from the brief:
{D-06 through D-09 — these are the refinement-facing dispositions}

REFINEMENT PRIORITIES (in order):
1. MULTI-COHERENCE: At every zone boundary, how many channels shift simultaneously?
   Each boundary should shift 3+ channels. If Pass A boundaries are 1-2 channel shifts,
   ADD channels (border insertion, typography change, spacing jump, opacity shift).
2. TRANSITIONS: Make zone transitions PERCEPTIBLE. Adjacent backgrounds must differ by
   >= 15 RGB points (already locked in brief). Add border-weight changes, spacing jumps,
   and typography shifts at boundaries.
3. MICRO-TYPOGRAPHY: Letter-spacing (>= 0.025em where applied), fine-tuned line-heights
   per zone, heading weight/style differentiation, caption/label treatments.
4. RESPONSIVE POLISH: Verify 1024px and 768px breakpoints. Grid → stack transitions.
   Touch target sizing. Content reflow.
5. HOVER & INTERACTION: Subtle state changes on interactive elements. Border-color shifts,
   background tints, underline treatments.
6. THE QUIET ZONE (D-09): Verify at least one mid-page zone is deliberately plainer
   (2-3 mechanisms vs 4-5, no bento grid, single-column prose). If Pass A didn't
   create one, designate one and simplify it.

STRUCTURAL RULES (DO NOT VIOLATE):
- Do NOT change the HTML section structure (zone count, section order, grid architecture).
- Do NOT change zone background hex values (LOCKED by brief).
- Do NOT remove mechanisms — only add or deepen.
- Do NOT change the conviction or metaphor — you are working WITHIN it.
- You MAY add HTML elements within existing sections (spans, dividers, decorative borders).
- You MAY restructure CSS extensively (this is expected).

Include your own <!-- RESIDUAL: ... --> comment documenting:
(1) what you preserved from Pass A
(2) what you changed/deepened
(3) what would come next in a third pass
(4) what trade-offs you made
(>= 50 chars, >= 3 of 4 sections required)

CSS EXPECTATIONS FOR PASS B:
- Target 800-1200 total CSS lines (Pass A foundation + your additions).
- You should ADD 300-600 lines of CSS on top of Pass A's foundation.
- Focus on PERCEPTIBLE refinement: transition properties, hover states,
  fine typography, responsive breakpoints, channel differentiation at boundaries.

OUTPUT: Single HTML file replacing the Pass A output. All CSS in <style> tag.
Maintain container width, soul constraints, warm palette from Pass A.

---
CONVICTION ARTIFACT:
{CONVICTION_FROM_PASS_A_HTML}

SELF-EVALUATION FROM PASS A:
{SELF_EVAL_FROM_PASS_A_HTML}

PASS A HTML:
{PASS_A_HTML_CONTENT}

EXECUTION BRIEF:
{EXECUTION_BRIEF_FROM_PHASE_1}

---
REFERENCE FILES:
{tokens.css content}
---
{components.css content}
---
{mechanism-catalog.md content}
---
{value-tables.md content}
```

### REFINE Pass B Only Prompt (R-A)

```
You are the REFINE Builder (Pass B target). You are RECOMPOSING the refinement
layer within the original builder's metaphor and structure.

Honor the conviction artifact's metaphor choice — do not introduce a new governing idea.
Honor the Pass A structure — do not modify HTML section architecture.

Read these inputs IN ORDER:
1. The conviction artifact (<!-- CONVICTION: ... --> from Pass A HTML)
2. The artistic impression from the Weaver (what the page FEELS like)
3. The RESIDUAL artifact (<!-- RESIDUAL: ... --> from Pass B HTML)
4. The original Execution Brief
5. The Pass A HTML (structural foundation — READ-ONLY, do not modify structure)
6. The Pass B HTML (your starting point for refinement)

You are entering COMPOSITIONAL mode. You are DEEPENING relationships, not fixing defects.
Use generative verbs: illuminate, reveal, deepen, intensify, amplify.
Do NOT use diagnostic verbs: fix, repair, address, correct.

Your goal: make the page's existing transitions MORE DISTINCT, its refinement layer
MORE PERCEPTIBLE, its compositional logic MORE VISIBLE. The structure is set —
make the surface impossible to ignore.

Include your own <!-- RESIDUAL: ... --> comment.

OUTPUT: Single HTML file. Maintain all structural decisions from Pass A.

---
CONVICTION ARTIFACT: {CONVICTION_FROM_PASS_A}
ARTISTIC IMPRESSION: {WEAVER_ARTISTIC_IMPRESSION}
RESIDUAL ARTIFACT: {RESIDUAL_FROM_PASS_B}
EXECUTION BRIEF: {EXECUTION_BRIEF}
PASS A HTML: {PASS_A_HTML}
PASS B HTML: {PASS_B_HTML}
```

---

## 7. Observer Interaction (D10)

The observer agent watches the pipeline for protocol violations. With two-pass building, the observer has additional verification responsibilities.

### Observer Verification Points for Two-Pass

| Checkpoint | What to Verify | When | Severity if Violated |
|------------|---------------|------|---------------------|
| O-PASS-A-COMPLETE | Pass A HTML exists, > 100 lines, has conviction + self-eval | After step 5a | BLOCKING |
| O-STRUCTURAL-CHECK | Pass A structural check ran with correct gate subset | After step 5b | BLOCKING |
| O-DIFFERENT-AGENT | Pass B builder is DIFFERENT Opus agent than Pass A | At step 5c spawn | BLOCKING |
| O-HANDOFF-COMPLETE | Pass B received all 9 required artifacts | At step 5c spawn | BLOCKING |
| O-STRUCTURE-PRESERVED | Pass B HTML has same section count and zone architecture as Pass A | After step 5c | SIGNIFICANT |
| O-CSS-GROWTH | Pass B CSS lines > Pass A CSS lines | After step 5c | SIGNIFICANT |
| O-CONVICTION-PRESERVED | Pass B HTML conviction matches Pass A conviction | After step 5c | BLOCKING |
| O-REFINE-TARGET | If REFINE, correct target selected (R-A vs R-C vs REBUILD) | At REFINE decision | SIGNIFICANT |

### Observer Input Additions

The observer currently receives the execution tracker. With two passes, also provide:

1. Pass A HTML path + Pass A structural check results
2. Pass B HTML path
3. Agent spawn IDs for both Pass A and Pass B builders (to verify different-agent rule)

---

## 8. Budget Impact Analysis

### Cost Comparison

| Scenario | Current (Single-Pass) | Two-Pass | Delta |
|----------|----------------------|----------|-------|
| **Phase 2 builder calls** | 1 Opus (~45 min) | 2 Opus (~25 min + ~30 min) | +1 Opus call |
| **Phase 2 total time** | ~45 min | ~55-60 min | +10-15 min |
| **Structural check** | None | ~1 min (subset of gates) | +1 min |
| **Total pipeline time** | ~80-105 min | ~90-120 min | +10-15 min |
| **Estimated $ cost per build** | ~$50-250 | ~$65-300 | +$15-50 |
| **With 1 REFINE cycle** | ~$100-500 | ~$115-550 | +$15-50 |

### Cost-Benefit Analysis

**Added cost:** ~$15-50 per build (one additional Opus builder spawn).

**Expected benefit:** The two-pass architecture addresses the attention decay problem — the hypothesis that a single builder's attention to D-06 through D-09 (refinement dispositions) degrades after spending cognitive budget on D-01 through D-05 (structural dispositions). If this reduces the REFINE rate from ~50% to ~25%, the two-pass architecture SAVES money by eliminating one REFINE cycle:

```
Current: 50% REFINE rate → average cost = 0.5 * single + 0.5 * (single + REFINE)
       = 0.5 * $150 + 0.5 * $350 = $250 average

Two-pass: 25% REFINE rate → average cost = 0.75 * two-pass + 0.25 * (two-pass + REFINE)
        = 0.75 * $180 + 0.25 * $430 = $242 average
```

**Break-even:** If the two-pass architecture reduces REFINE rate by >= 10 percentage points, it is cost-neutral. If it reduces REFINE rate by >= 20 points, it saves money.

### Acceptable?

YES, with conditions:
1. The REFINE rate reduction hypothesis MUST be tested empirically (run 3-5 builds)
2. If REFINE rate does not decrease after 5 builds, revert to single-pass
3. Cost tracking should be added to the execution tracker (new field: `ESTIMATED_COST`)

---

## 9. Risk Analysis

### Risks of Two-Pass Architecture

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **R1: Pass B destroys Pass A structure** | MEDIUM | HIGH | Pass B prompt explicitly prohibits structural changes. Observer verifies structure preservation (O-STRUCTURE-PRESERVED). Post-Pass-B structure diff check. |
| **R2: Conviction drift between passes** | LOW | MEDIUM | Conviction extracted from Pass A HTML and passed to Pass B verbatim. Observer verifies conviction preservation (O-CONVICTION-PRESERVED). |
| **R3: Two-pass produces WORSE results than single-pass** | LOW-MEDIUM | HIGH | Run as experiment first (3-5 builds, compare PA-05 against single-pass baseline). Revert if no improvement. |
| **R4: Pass B treats Pass A as "someone else's code" and rewrites** | MEDIUM | HIGH | Pass B prompt emphasizes DEEPEN not REPLACE. Structural rules section explicitly prohibits changes. Observer checks post-build. If detected: discard Pass B, re-spawn with stricter instructions. |
| **R5: Brief-diff confusion — which pass should brief refer to?** | LOW | LOW | Brief is the same for both passes. Pass A reads full brief. Pass B reads same brief + Pass A output. No ambiguity. |
| **R6: D-01-D-09 split is wrong** | MEDIUM | MEDIUM | The recipe architect designs this split. If early results show the wrong dispositions in Pass A vs B, the split can be adjusted without changing orchestration. |
| **R7: Increased pipeline complexity** | CERTAIN | LOW-MEDIUM | Complexity is localized to Phase 2 (steps 5a-5c). No changes to Phases 0, 1, 3. Tracker adds ~13 fields. Observer adds ~8 checks. Manageable. |

### Highest Risk: R1 + R4 (Structure Destruction)

The combined risk of Pass B destroying Pass A's architecture is the primary concern. Mitigations:

1. **Prompt-level:** Pass B prompt contains explicit "STRUCTURAL RULES (DO NOT VIOLATE)" section
2. **Gate-level:** Post-Pass-B structure diff (new utility gate)
3. **Observer-level:** O-STRUCTURE-PRESERVED check
4. **Escape hatch:** If Pass B violates structure, orchestrator discards Pass B output, re-spawns with escalated instruction ("You MUST preserve all `<section>` elements, grid layouts, and zone architecture from Pass A. Any structural change = failure.")

### New Utility Gate: GR-65 Structure Preservation

```javascript
// GR-65: Verify Pass B preserved Pass A structure
// Tier: UTILITY (post-Pass-B only)
// Input: Pass A HTML + Pass B HTML
// Check: Same <section> count, same heading hierarchy, same grid-template-columns
function checkStructurePreservation(passAHTML, passBHTML) {
  const passASections = passAHTML.querySelectorAll('section, [role="region"]').length;
  const passBSections = passBHTML.querySelectorAll('section, [role="region"]').length;

  const passAHeadings = [...passAHTML.querySelectorAll('h1,h2,h3,h4')].map(h => h.tagName);
  const passBHeadings = [...passBHTML.querySelectorAll('h1,h2,h3,h4')].map(h => h.tagName);

  return {
    sectionCountMatch: passASections === passBSections,
    headingHierarchyMatch: JSON.stringify(passAHeadings) === JSON.stringify(passBHeadings),
    // Grid check requires computed styles
  };
}
```

---

## 10. Exact Edit Specifications

### 10.1 artifact-orchestrator.md

**Edit 1: Section 4, Phase 2 — Replace single builder with two-pass**

- **Location:** Lines ~425-454 (Phase 2: Building section)
- **Action:** Replace entire Phase 2 section with:
  - Phase 2A: Pass A Build (structure-focused)
  - Phase 2A-gate: Pass A Structural Check
  - Phase 2B: Pass B Build (refinement-focused)
- **Content:** Use the quickstart flow from Section 1 of this document, expanded to match the orchestrator's detailed format

**Edit 2: Section 7, REFINE protocol — Add REFINE targeting**

- **Location:** Lines ~554-592 (REFINE section)
- **Action:** Add REFINE targeting logic (R-A / R-C / REBUILD) between the verdict thresholds and the REFINE builder isolation rules
- **Content:** Use the REFINE Protocol Updates from Section 4 of this document

**Edit 3: Section 8, Timeline — Update Phase 2 timing**

- **Location:** Lines ~714-724 (Timeline table)
- **Action:** Split Phase 2 row into Phase 2A (~25 min) + Phase 2A-gate (~1 min) + Phase 2B (~30 min). Update total to ~90-120 min.

**Edit 4: Dependency Graph — Update Phase 2 flow**

- **Location:** Lines ~553-583 (Dependency Graph)
- **Action:** Insert Phase 2A → Phase 2A-gate → Phase 2B between Phase 1 and Phase 3A

### 10.2 MANIFEST.md

**Edit 1: Quickstart steps — Replace step 5 with 5a-5c**

- **Location:** Lines ~36-37 (step 5 in quickstart)
- **Action:** Replace single builder step with three sub-steps (5a, 5b, 5c)
- **Content:** Use revised quickstart from Section 1 of this document

**Edit 2: Agent Roster — Add Pass A and Pass B builder rows**

- **Location:** Lines ~127-131 (Phase 2 — Building table)
- **Action:** Replace single Builder row with Pass A Builder and Pass B Builder rows. Note different agent requirement.

**Edit 3: Phase-by-Phase Execution — Expand Phase 2**

- **Location:** Lines ~426-454 (Phase 2: Building section in detailed execution)
- **Action:** Split into Phase 2A, Phase 2A-gate, Phase 2B with full detail

**Edit 4: Appendix B — Update builder file routing**

- **Location:** Lines ~860 (Builder row in File Routing)
- **Action:** Split into Pass A Builder and Pass B Builder rows, noting different inputs

**Edit 5: Appendix E — Replace Builder prompt with Pass A + Pass B prompts**

- **Location:** Lines ~1049-1105 (Builder Prompt section)
- **Action:** Replace single builder prompt with Pass A Builder Prompt + Pass B Builder Prompt from Section 6 of this document

**Edit 6: Appendix E — Add REFINE Pass B prompt**

- **Location:** After line ~1281 (after current REFINE Builder Prompt)
- **Action:** Add R-A REFINE prompt from Section 6 of this document

### 10.3 EXECUTION-TRACKER-TEMPLATE.md

**Edit 1: Replace Phase 2 section**

- **Location:** Lines ~35-43 (Phase 2: Build section)
- **Action:** Replace with Phase 2A + Phase 2A-gate + Phase 2B sections from Section 5 of this document

**Edit 2: Replace REFINE section**

- **Location:** Lines ~84-106 (REFINE Phase section)
- **Action:** Replace with updated REFINE section from Section 5 of this document

**Edit 3: Update Output Files table**

- **Location:** Lines ~134-146 (Output Files table)
- **Action:** Add P2A, P2A-gate, P2B rows. Remove single P2 row.

**Edit 4: Update Derived Phase Completion**

- **Location:** Lines ~149-162 (Derived Phase Completion)
- **Action:** Update field counts for Phase 2A (8), Phase 2A-gate (7), Phase 2B (8). Update total.

### 10.4 SKILL.md (~/.claude/skills/build-page/SKILL.md)

**Edit 1: Update execution rules — mention two-pass**

- **Location:** Lines ~72-76 (Execution rules)
- **Action:** Add: "Phase 2 uses TWO builder passes (Pass A: structure, Pass B: refinement). Pass A and Pass B MUST be DIFFERENT Opus agents. See MANIFEST quickstart steps 5a-5c."

**Edit 2: Update non-negotiables — add two-pass requirement**

- **Location:** Lines ~95-99 (Non-negotiables)
- **Action:** Add item 6: "Two-pass build: Pass A (structure) and Pass B (refinement) are separate Opus agents"

### 10.5 gate-manifest.json

**Edit 1: Add GR-65 structure preservation gate**

- **Action:** Add entry for GR-65 with tier UTILITY, phase POST-PASS-B, description "Verify Pass B preserved Pass A HTML structure"

### 10.6 gate-runner-core.js

**Edit 1: Add checkStructurePreservation function**

- **Action:** Add the GR-65 function from Section 9 of this document. Export it alongside existing functions.

---

## 11. Open Questions for Recipe Architect

The orchestration protocol depends on answers from the recipe split design:

1. **Which dispositions are D-01 through D-05 vs D-06 through D-09?** This document uses the current D-01-D-09 numbering as placeholders. The recipe architect determines the actual split.

2. **Does Pass A write full CSS or skeleton CSS?** This document assumes Pass A writes 400-700 lines of real CSS (not placeholders). If the recipe architect decides Pass A should write less, the structural check threshold needs adjustment.

3. **Should Pass B receive the mechanism-catalog.md?** This document includes it. If the recipe architect determines Pass B only deepens existing mechanisms (not add new ones), it could be omitted to reduce input volume.

4. **Self-evaluation in Pass B?** This document keeps self-eval in Pass A only. Should Pass B also answer the 7 questions? The 7 questions are structure-focused (zone transitions, skeleton test, density arc), which aligns with Pass A. Pass B could have a different self-eval focused on refinement quality.

---

## 12. Summary

| Component | Change | Complexity |
|-----------|--------|------------|
| Quickstart flow | Step 5 → 5a/5b/5c | LOW |
| Pass A→B handoff | 9 artifacts, 5 validation checks | MEDIUM |
| Gate timing | Structural subset after A, full after B | LOW |
| REFINE protocol | Weaver-guided targeting (R-A/R-C) | MEDIUM |
| Tracker fields | +13 fields (59→72) | LOW |
| Agent prompts | 2 new builder prompts + 1 REFINE variant | MEDIUM |
| Observer protocol | +8 verification points | LOW |
| New gate (GR-65) | Structure preservation check | LOW |
| Budget impact | +$15-50/build, neutral if REFINE rate drops 10+ pts | ACCEPTABLE |
| Total edit scope | 6 files, ~15 edits | MEDIUM |

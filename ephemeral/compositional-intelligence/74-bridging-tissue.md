# BRIDGING TISSUE ANALYSIS: Every PV2 Boundary Crossing Mapped

**Author:** Bridging Tissue Analyst (Opus 4.6)
**Task:** #74
**Date:** 2026-02-19
**Sources:** Reports 01-14 (scale/channel/stack traces), 17 (recipe restructure), 18 (builder visibility), 19 (programmatic enforcement), 20 (operational patterns), 21 (CD-006 integration), 22 (remediation extraction), 25 (pipeline architecture), 28 (propagation without loss), 41 (always-flagship simplification), PV2-PIPELINE-DIAGRAM.md (977 lines)

---

## EXECUTIVE SUMMARY

PV2 has **11 boundary crossings** between the user typing `/build-page content.md` and the final output HTML. Each boundary is a compression point where intelligence changes format, volume, or audience. This report maps EVERY boundary with:

- What currently crosses (artifact, format, volume)
- What intelligence is preserved vs lost
- The compression ratio (before:after)
- The specific FIX from investigation reports
- The NEW ARTIFACT that bridges each gap

**Key finding:** 4 of 11 boundaries are DESTRUCTIVE (information loss degrades quality). 4 are CONSTRUCTIVE (intentional, quality-serving compression). 3 are NECESSARY (information isolation by design). The 4 destructive boundaries account for an estimated ~65% of total intelligence loss. All 4 have concrete fixes identified in the investigation reports.

**The single highest-leverage fix:** Boundary 3 (TC output -> _build-plan.md). Changing the build plan from prose manifest to structured YAML + embedded CSS snippets doubles intelligence survival from ~35% to ~75% at this boundary alone.

---

## THE 11 BOUNDARIES

```
USER                                          FINAL OUTPUT
  |                                                |
  |  B1   B2    B3       B4    B5     B6    B7     |
  |   |    |     |        |     |      |     |     |
  v   v    v     v        v     v      v     v     v
content → TC → [internal] → _build-plan → [handoff gate] → Builder context → CSS/HTML
  .md   planner   TC          .md          (binary)          (6 files)       output
                 phases                                                        |
                                                                    B8   B9   B10   B11
                                                                     |    |    |      |
                                                                     v    v    v      v
                                                              gate  screen PA    fix
                                                              runner shots  report cycle
                                                               .js   .png   .md   builder
```

---

## BOUNDARY 1: User Content -> TC Planner

| Property | Value |
|----------|-------|
| **From** | User (markdown file) |
| **To** | TC Planner (Opus agent running /tension-composition) |
| **Current Artifact** | `content.md` (500-10,000 words raw markdown) |
| **Current Format** | Unstructured prose/code/tables |
| **Intelligence Preserved** | Section structure, content classification, section count, topic identification, information density per section |
| **Intelligence Lost** | Paragraph-level rhythm, author voice, inline emphasis patterns, sentence-level nuance, "feel" of the prose |
| **Compression Ratio** | N/A (this is INPUT, not compression) |
| **Propagation Pattern** | TRANSLATION (format changes, meaning largely preserved) |
| **Loss Severity** | LOW |

### Current State

TC Phase 0 reads the raw markdown and produces a content assessment: zone count (2-5), section inventory, content classification (prose-dominant/mixed/visual-dominant), scope rating. This is CORRECT abstraction -- the planner needs structural understanding, not word-level detail.

### What SHOULD Cross (Investigation Finding)

**No change needed.** Report #25 (Pipeline Architecture) and Report #28 (Propagation) both confirm this boundary is well-designed. The planner should not propagate word-level detail; content assessment is the right granularity for architectural decisions.

### FIX

None. This boundary is correctly designed.

### Compression Assessment

| Metric | Value |
|--------|-------|
| Input volume | 500-10,000 words |
| Output volume | ~50-100 lines (Phase 0 assessment) |
| Compression ratio | ~10:1 to 100:1 |
| Type | CONSTRUCTIVE (intentional abstraction to planning granularity) |

---

## BOUNDARY 2: TC Internal Phases (Phase 1 -> 2 -> 3 -> 3.5)

| Property | Value |
|----------|-------|
| **From** | TC Phase 1 (multi-axis questioning) |
| **To** | TC Phase 2 (tension derivation) -> Phase 3 (metaphor collapse) -> Phase 3.5 (lock-in gate) |
| **Current Artifact** | Internal TC reasoning (no cross-agent artifact) |
| **Current Format** | Sequential cognitive processing within single agent |
| **Intelligence Preserved** | Winning metaphor, committed tensions, isomorphism mappings, structural overlap scores |
| **Intelligence Lost** | Low-yield axes DISCARDED. Addition Test loses gradient info (85% genuine reads same as 100%). Runner-up metaphors dropped. Rejected-but-rich tension lines discarded. |
| **Compression Ratio** | ~4:1 (9-14 axes -> 1 metaphor + 3-5 tensions) |
| **Propagation Pattern** | COMPRESSION (intentional funneling) |
| **Loss Severity** | MODERATE |

### Current State

The TC skill is designed as a FUNNEL: wide exploration (9-14 axes) narrows to specific output (1 metaphor, 3-5 genuine tensions). This is BY DESIGN -- the funnel prevents analysis paralysis. But discarded alternatives could inform builder decisions.

### What SHOULD Cross (Investigation Finding)

Report #28 (Propagation) identifies that the SECOND-BEST metaphor and rejected tensions could be propagated as "builder warnings" or "alternative directions" at near-zero cost. Report #17 (Recipe Restructure) confirms the funnel is necessary but suggests the recipe instance include "REJECTED mechanisms (with reasons)" to build negative-space awareness.

### FIX

**Enhance TC Phase 3.5 output** to include:
- Runner-up metaphor name + why it lost (1 line)
- 2-3 rejected-but-rich tension lines with brief reason (3 lines)
- These propagate through _build-plan.md as "Builder Context" section

### NEW ARTIFACT

No new artifact. Enhancement to existing `_build-plan.md` output -- add a `## Rejected Alternatives` section (~5-8 lines).

### Compression Assessment

| Metric | Value |
|--------|-------|
| Input volume | 9-14 axis entries, 5-8 tension candidates, 3-5 metaphor candidates |
| Output volume | 1 metaphor + 3-5 tensions + 1 isomorphism table |
| Compression ratio | ~4:1 |
| Type | CONSTRUCTIVE (funnel serves creative focus) |
| After fix | ~3.5:1 (rejected alternatives preserved at +8 lines) |

---

## BOUNDARY 3: TC Output -> _build-plan.md [CRITICAL -- DESTRUCTIVE]

| Property | Value |
|----------|-------|
| **From** | TC Planner's full cognitive output (Phases 0-4.7B) |
| **To** | `_build-plan.md` (written artifact for orchestrator + builder) |
| **Current Artifact** | `_build-plan.md` (~100-200 lines, prose manifest) |
| **Current Format** | Free-form markdown: zone count, mechanism names, background colors, transition plan |
| **Intelligence Preserved** | Zone count, section inventory, mechanism names per category, background hex values, transition types (SMOOTH/BRIDGE/BREATHING), builder warnings |
| **Intelligence Lost** | **THE ENTIRE REASONING CHAIN.** Why this metaphor won. Why specific mechanisms were selected. Richness scores that informed selection. Perceptual risk assessment. Alternative metaphors considered. Axis interactions that produced compound tension. Pacing prediction. Fractal coherence plan's CSS evidence. The BECAUSE-test justifications for each reader need. |
| **Compression Ratio** | **~20:1** (TC's 30-60 min cognitive process -> ~100 line manifest) |
| **Propagation Pattern** | **COMPRESSION (severe -- prose reasoning compressed to structured manifest)** |
| **Loss Severity** | **HIGH -- this is the 50:1 compression problem in miniature** |

### Current State

This is where the pipeline BLEEDS intelligence. Report #28 calls this "the critical boundary." Report #12 (Multi-Coherence) traces how multi-coherence intelligence exists in three places (mechanism catalog, TC Step 4.3, PV2 Phase 8) but NONE tell the builder HOW to execute multi-coherence at each specific boundary. Report #17 identifies that the Middle experiment succeeded because its recipe was a SINGLE document with inline values, while the flagship failed because its checklist extracted intelligence into constraints.

The irony: TC spends ~700 lines (Phases 3-4) on detailed mechanism-to-CSS mapping, isomorphism tables, and coherence checking. ALL of this reasoning evaporates at the build-plan boundary. The builder must RE-DERIVE it from mechanism names alone.

### What SHOULD Cross (Investigation Findings)

**Report #28 (Propagation):** Change `_build-plan.md` from PROSE MANIFEST to STRUCTURED DATA + CSS SNIPPETS. Intelligence survival jumps from ~35% to ~80%.

**Report #17 (Recipe Restructure):** TC should output a BUILD RECIPE INSTANCE (`_build-recipe.md`) that structurally mirrors the recipe phases. For EACH recipe phase (0, 1, 3, 4, 5, 6, 8): concrete values, one-sentence semantic justification ("BECAUSE [content property] maps to [metaphor property] via [CSS channel]"), pre-calculated verification.

**Report #18 (Builder Visibility):** The transition table IS the single most important artifact. It translates multi-coherence from abstract principle to cell-by-cell execution.

**Report #25 (Pipeline Architecture):** Annotated build plan with reasoning chain. Builder sees: what, how, why, and warning per zone. +200 lines to plan (17% builder context increase).

### FIX

Replace `_build-plan.md` (prose manifest) with `_build-recipe.md` (structured recipe instance):

**Layer A: Recipe Template** (`operational-recipe-template.md`, ~300 lines, permanent)
- Phase ordering (0-8), perception thresholds, soul constraints, self-check questions

**Layer B: Build Recipe Instance** (`_build-recipe.md`, ~250-400 lines, generated per build by TC Phase 4.8)
- Per-zone specification with background + padding + metaphor meaning
- Per-mechanism YAML block with catalog ID + CSS snippet + justification
- Pre-computed transition table with channel shift counts
- Per-boundary verification (RGB deltas, font-size deltas, stacked gap totals)
- Rejected mechanisms with reasons
- Coherence rule ("deeper = denser = darker = heavier")

### NEW ARTIFACTS

| Artifact | Size | Replaces | Format |
|----------|------|----------|--------|
| `_build-recipe.md` | ~250-400 lines | `_build-plan.md` (~100-200 lines) | Structured YAML blocks + embedded CSS snippets + BECAUSE clauses |
| `operational-recipe-template.md` | ~300 lines | `operational-recipe.md` (~650 lines) | Static template (universal rules only) |

**Net effect:** Permanent files SHRINK by ~262 lines. Per-build specificity GROWS by ~200 lines. Information in executable format (CSS + YAML) instead of lossy format (prose).

### Compression Assessment

| Metric | Current | After Fix |
|--------|---------|-----------|
| Input volume | 30-60 min TC cognitive process |  Same |
| Output volume | ~100-200 lines prose | ~250-400 lines structured YAML + CSS |
| Compression ratio | ~20:1 | ~8:1 |
| Intelligence survival | ~35-45% | ~75-85% |
| Type | Currently DESTRUCTIVE -> becomes CONSTRUCTIVE |

---

## BOUNDARY 4: Handoff Gate (Orchestrator validates _build-plan.md)

| Property | Value |
|----------|-------|
| **From** | TC output (`_build-recipe.md`) |
| **To** | Builder agent (approved for execution) |
| **Current Artifact** | Binary PASS/FAIL gate result |
| **Current Format** | 5 binary checks (zone count 2-5?, BG colors >=15 RGB?, >=2 grid layouts?, per-category mechs met?, >=3 transition types?) |
| **Intelligence Preserved** | Gate result (PASS/FAIL) |
| **Intelligence Lost** | Nothing -- this is a GATE, not a transform. The artifact passes through unchanged if it meets the checks. |
| **Compression Ratio** | 1:1 (pass-through) or 0:1 (rejection) |
| **Propagation Pattern** | PASS-THROUGH (validation only, no transformation) |
| **Loss Severity** | ZERO |

### Current State

The handoff gate validates structural completeness but does not transform the artifact. Report #17 recommends expanding from 5 to 7 checks (add: recipe instance has phase sections? each phase section has semantic justification?). Report #19 (Programmatic Enforcement) recommends YAML schema validation instead of ad-hoc checks.

### What SHOULD Cross

Same artifact, validated against a SCHEMA instead of ad-hoc checks.

### FIX

Expand gate from 5 binary checks to 7:
1. Zone count 2-5? (existing)
2. BG colors >=15 RGB delta? (existing)
3. >=2 grid layouts? (existing)
4. Per-category mechanisms met? (existing)
5. >=3 transition types? (existing)
6. **NEW:** Recipe instance has phase sections for 0, 1, 3, 4, 5, 6, 8?
7. **NEW:** Each phase section has BECAUSE semantic justification?

### NEW ARTIFACT

Optional: `_handoff-gate-schema.yaml` (~30 lines) defining the structural contract for `_build-recipe.md`. Enables machine-parseable validation.

### Compression Assessment

| Metric | Value |
|--------|-------|
| Compression ratio | 1:1 (pass-through) |
| Type | NECESSARY (quality gate) |

---

## BOUNDARY 5: Build Plan + Reference Files -> Builder Context [DESTRUCTIVE]

| Property | Value |
|----------|-------|
| **From** | Orchestrator (provides 6 files) |
| **To** | Opus Builder agent's internal working model |
| **Current Artifact** | 6 files: recipe (~650), build plan (~100), tokens.css (174), prohibitions.md (353), merged-components.css (~500 relevant), mechanism-catalog.md (~869) |
| **Current Format** | Multiple independent prose + CSS files |
| **Intelligence Preserved** | Recipe phases, zone values, token values, soul constraints, component classes, mechanism application modes |
| **Intelligence Lost** | **Multi-file synthesis overhead.** Builder must MERGE 6 independent files into coherent action plan. Recipe says "Phase 3: Apply zone backgrounds." Build plan says "4 zones, backgrounds #fefcf3 / #f0ebe3 / #faf5ed / #1a1a1a." Catalog says zone backgrounds are "Perceptual Effectiveness: MEDIUM." Builder must MERGE these three sources. Misalignment = ambiguity = judgment = potential loss. |
| **Compression Ratio** | ~1,150 lines input -> builder's internal model (unknown effective utilization) |
| **Propagation Pattern** | TRANSLATION (6 files translated into builder's working model) |
| **Loss Severity** | MODERATE |

### Current State

PV2 already fixed the worst version of this problem (flagship master prompt gave builder only 75 lines = 13.4% visibility). The builder now receives 6 full files (~1,150 lines). But multi-file synthesis is INHERENTLY lossy for LLMs due to context window competition. Report #28 identifies that the recipe gets attention priority (action verbs) while the mechanism catalog (richest compositional intelligence) gets lowest priority (reference material).

### What SHOULD Cross (Investigation Findings)

**Report #17 (Recipe Restructure):** Two-layer system eliminates mental merge. Builder reads recipe template (universal rules) + recipe instance (THIS BUILD's specific values). Same structure, no cross-referencing needed.

**Report #18 (Builder Visibility):** Per-phase file routing. Phase 3: PRIMARY = recipe instance Phase 3. Phase 6: PRIMARY = mechanism catalog (only phase where catalog is primary).

**Report #22 (Remediation Extraction):** The remediation spec's telescope-microscope interleaving pattern -- every CSS block preceded by compositional comment + specific values inline -- is the proven format.

**Report #28 (Propagation):** Instead of 6 separate files requiring synthesis, provide recipe phases with INLINE build-plan values and CSS snippets. Eliminates multi-file synthesis overhead.

### FIX

**Two changes:**

1. **Recipe restructure (Report #17):** Split `operational-recipe.md` (650 lines) into:
   - `operational-recipe-template.md` (~300 lines, permanent, universal rules)
   - `_build-recipe.md` (~250-400 lines, generated by TC, THIS build's values)

2. **Per-agent memory briefs (Report #18):** Builder brief (~40 lines) tells builder:
   - Read order (recipe template first, recipe instance second)
   - Primary failure mode ("technically correct but perceptually invisible")
   - Perception thresholds embedded at point of use
   - Override authority with logging requirement

**Result:** Builder reads recipe template Phase 3 ("apply zone backgrounds at >=15 RGB delta") AND recipe instance Phase 3 ("Zone 1: #FEF9F5, Zone 2: #F0EBE3, delta R-14 G-17 B-18, semantic: surface->sediment"). No cross-referencing needed.

### NEW ARTIFACTS

| Artifact | Size | Purpose |
|----------|------|---------|
| Builder brief | ~40 lines | Role-specific context (failure modes, read order, override authority) |
| TC Planner brief | ~40 lines | Output format requirements, perception thresholds |
| PA Auditor brief | ~25 lines | Zero-context evaluation protocol |
| Planner checkpoint brief | ~20 lines | What to verify at each checkpoint |

### Compression Assessment

| Metric | Current | After Fix |
|--------|---------|-----------|
| Input volume | ~1,150 lines across 6 files | ~1,200 lines across 6 files + 40-line brief |
| Synthesis overhead | HIGH (mental merge of 6 independent docs) | LOW (template + instance share structure) |
| Intelligence survival | ~60-70% | ~80-90% |
| Type | Currently DESTRUCTIVE -> becomes CONSTRUCTIVE |

---

## BOUNDARY 6: Recipe + Build Plan -> Builder CSS/HTML Execution

| Property | Value |
|----------|-------|
| **From** | Builder's synthesized understanding |
| **To** | CSS/HTML output file (700-1500 lines CSS + 500-1000 lines HTML) |
| **Current Artifact** | `output.html` (single file) |
| **Current Format** | HTML + embedded `<style>` CSS |
| **Intelligence Preserved** | Every visual DECISION is encoded as CSS. `border-left: 4px solid #1a1a1a` IS the compositional intelligence in executable form. |
| **Intelligence Lost** | Compositional REASONING. The builder understands WHY border-weight encodes hierarchy, but the CSS comment says `/* 4px = structural emphasis */` not the full isomorphism chain. Future readers lose the connection between metaphor intent and CSS implementation. |
| **Compression Ratio** | N/A (this is GENERATION, not compression) |
| **Propagation Pattern** | GENERATION (intelligence created as CSS from planning inputs) |
| **Loss Severity** | LOW-TO-MODERATE (CSS IS lossless for visual decisions; reasoning is lost) |

### Current State

This boundary is the builder's core work. Report #28 notes it is BOTH the highest-fidelity boundary (CSS literally IS the visual intelligence) and a reasoning loss (WHY behind each declaration is lost). The cascade value table (Phase 8 deliverable) partially addresses this by recording computed values.

### What SHOULD Cross

**Report #22 (Remediation Extraction):** The telescope-microscope interleaving pattern -- every CSS block preceded by a compositional comment explaining WHAT it achieves. This transfers understanding to PA auditors and fix-cycle builders.

**Report #17:** Phase 8 cascade value table should be built INLINE as each boundary is implemented (scale-organized hybrid), not post-hoc.

### FIX

1. **Builder writes CSS comments with telescope framing** (from remediation pattern):
   ```css
   /* Ch4 STRUCTURAL BORDERS -- Section-level containment.
      6 of 12 sections. Alternating presence creates rhythm. */
   .zone-s2 .page-container { border-left: 3px solid var(--color-border); }
   ```

2. **Cascade value table built incrementally** during Phases 3-6 (not just Phase 8)

3. **Required builder deliverable: `_cascade-value-table.md`** recording computed CSS at every section boundary

### NEW ARTIFACT

| Artifact | Size | Purpose |
|----------|------|---------|
| `_cascade-value-table.md` | ~50-100 lines | Measured computed CSS at every boundary (PROOF artifact) |

### Compression Assessment

| Metric | Value |
|--------|-------|
| Input volume | ~1,200 lines builder context |
| Output volume | ~1,200-2,500 lines HTML+CSS |
| Compression ratio | N/A (generative) |
| Type | CONSTRUCTIVE (CSS IS the intelligence in executable form) |

---

## BOUNDARY 7: Builder -> Gate Runner (Programmatic Verification)

| Property | Value |
|----------|-------|
| **From** | Builder output (`output.html`) |
| **To** | Gate runner (JavaScript, runs in Playwright) |
| **Current Artifact** | `output.html` (file path) |
| **Current Format** | Valid HTML file |
| **Intelligence Preserved** | All computed CSS values, all DOM structure |
| **Intelligence Lost** | Zero -- gate runner reads COMPUTED values via `getComputedStyle`, which is lossless for measured properties |
| **Compression Ratio** | 1:1 (pass-through, gate runner reads the SAME artifact) |
| **Propagation Pattern** | PASS-THROUGH (measurement, not transformation) |
| **Loss Severity** | ZERO |

### Current State

Report #19 (Programmatic Enforcement) designs the gate runner as Playwright-based phase gates. 12 binary checks measuring computed CSS. The gate runner does NOT transform the artifact -- it MEASURES it and returns PASS/FAIL with measured values.

### What SHOULD Cross

Same artifact. Gate runner output should include measured values (not just PASS/FAIL) so the fix-cycle builder knows EXACTLY what to change.

### FIX

Gate runner output format enhanced to include measured values:

```json
{
  "gate": "SC-09-backgrounds",
  "pass": false,
  "measured": {
    "zone1_to_zone2_delta": 8,
    "threshold": 15,
    "zone1_bg": "#fefcf3",
    "zone2_bg": "#fef9f5"
  },
  "fix": "Increase zone2 background darkness. Current delta: 8 RGB. Need: >= 15 RGB. Suggested: #f0ebe3 (delta: 46 RGB)."
}
```

### NEW ARTIFACT

| Artifact | Size | Purpose |
|----------|------|---------|
| `_gate-results.json` | ~50-100 lines | Structured gate results with measured values + fix suggestions |

### Compression Assessment

| Metric | Value |
|--------|-------|
| Compression ratio | 1:1 (measurement, not compression) |
| Type | NECESSARY (verification) |

---

## BOUNDARY 8: Builder -> PA Screenshots (Context Stripping) [NECESSARY]

| Property | Value |
|----------|-------|
| **From** | Builder output (`output.html`) |
| **To** | PA Auditors (9 Opus agents, Mode 4) |
| **Current Artifact** | Screenshots (PNG images, 36-102 files) |
| **Current Format** | PNG images at 1440px and 768px viewports |
| **Intelligence Preserved** | Visual perception -- what the reader would see |
| **Intelligence Lost** | **ALL compositional reasoning.** PA auditors see ONLY screenshots with ZERO build context. They cannot distinguish "intentionally sparse" from "accidentally empty." They cannot see whether border-weight encodes a meaningful hierarchy or is random. |
| **Compression Ratio** | ~2,500 lines HTML+CSS -> visual perception only |
| **Propagation Pattern** | GENERATION (intelligence re-created from perception, not from code) |
| **Loss Severity** | HIGH (for compositional reasoning) / ZERO (for perceptual quality) |

### Current State

This boundary is **correctly designed** and **must remain as-is**. Report #25, #28, and #22 all confirm: the fresh-eyes principle is NON-NEGOTIABLE. PA auditors evaluate what the READER would see, not what the BUILDER intended. The information loss is a FEATURE.

The screenshot pre-capture pattern (team lead takes ALL screenshots BEFORE spawning auditors) eliminates Playwright contention and enables 9+ parallel auditors.

### What SHOULD Cross

**No change to what crosses.** Screenshots only, zero build context.

**However:** Report #28 notes the PA WEAVER who synthesizes 9 reports also lacks build context, which means fix-cycle recommendations are perception-based ("more visual variety") rather than composition-based ("strengthen the border-weight-to-metaphor mapping"). This is addressed at Boundary 10.

### FIX

None. This boundary is correctly designed. The information loss is intentional and quality-serving.

### Compression Assessment

| Metric | Value |
|--------|-------|
| Compression ratio | ~total (code -> pixels) |
| Type | NECESSARY (fresh-eyes principle) |

---

## BOUNDARY 9: PA Auditors -> PA Weaver (Report Synthesis)

| Property | Value |
|----------|-------|
| **From** | 9 PA Auditors (each answers assigned subset of 48 questions) |
| **To** | PA Weaver (Opus synthesizer) |
| **Current Artifact** | 9 individual PA reports (~200-400 lines each) |
| **Current Format** | Prose markdown (spatial description + scores) |
| **Intelligence Preserved** | Convergent findings (issues flagged by 5+ of 9 auditors), PA-05 score consensus, top blocking issues |
| **Intelligence Lost** | Minority findings (issues flagged by 1-2 auditors), individual auditor reasoning chains, nuanced "it felt off but I can't specify why" observations |
| **Compression Ratio** | ~2,700 lines (9 reports) -> ~200-400 lines (weaver synthesis) |
| **Propagation Pattern** | COMPRESSION (9 perspectives compressed to convergent findings) |
| **Loss Severity** | LOW (convergence-based compression is high-quality -- things 7/9 auditors agree on are real) |

### Current State

The weaver synthesizes 9 reports into top-3 blocking issues + PA-05 score + verdict. Report #28 notes this compression is CONSTRUCTIVE -- convergent findings from 9 independent auditors are the highest-signal findings. Minority observations are noise-dominated.

### What SHOULD Cross

Weaver output should preserve the STRENGTH of convergence (8/9 agree vs 5/9 agree) as confidence weights, not just binary "is/isn't in the report."

### FIX

Enhanced weaver output format:

```markdown
## TOP BLOCKING ISSUES

1. **Whitespace void at 70-80% scroll** (9/9 convergence, BLOCKING)
   Perception: 210-276px empty cream space between zones 3-4
   Suggested: Reduce stacked gaps, add breathing-zone content

2. **Uniform typography across S4-S12** (7/9 convergence, BLOCKING)
   Perception: All body text appears same size/weight
   Suggested: Verify zone-group typography differentiation

3. **Imperceptible background differences** (6/9 convergence, SIGNIFICANT)
   Perception: Zones look like one continuous color
   Suggested: Increase RGB delta, verify with computed styles
```

### NEW ARTIFACT

No new artifact. Enhancement to `_pa-report.md` format -- add convergence counts and structured fix suggestions.

### Compression Assessment

| Metric | Value |
|--------|-------|
| Input volume | ~2,700 lines (9 reports) |
| Output volume | ~200-400 lines (synthesis) |
| Compression ratio | ~8:1 |
| Type | CONSTRUCTIVE (convergence = high signal) |

---

## BOUNDARY 10: PA Report -> Fix Cycle Builder [DESTRUCTIVE]

| Property | Value |
|----------|-------|
| **From** | PA Weaver (`_pa-report.md`) + Gate Runner (`_gate-results.json`) |
| **To** | Fix-cycle Builder (Opus, same or different from original builder) |
| **Current Artifact** | `_pa-report.md` + `_gate-results.json` |
| **Current Format** | Prose descriptions (PA) + structured JSON (gates) |
| **Intelligence Preserved** | Perceptual symptoms ("whitespace void"), measured violations ("8 RGB delta, need 15"), top-3 issues |
| **Intelligence Lost** | **The connection between PERCEPTION and COMPOSITION.** "Whitespace void" = perceptual symptom. "Missing breathing zone between zones 3 and 4, causing stacked gap of 276px" = compositional diagnosis. The fix-cycle builder receives symptoms, not diagnoses. |
| **Compression Ratio** | N/A (synthesis, not compression) |
| **Propagation Pattern** | TRANSLATION (perceptual language translated to CSS fixes) |
| **Loss Severity** | MODERATE |

### Current State

The fix-cycle builder receives the PA report (perceptual language) and must re-derive the compositional diagnosis. Report #28 notes the fix-cycle builder HAS access to the original recipe + build plan, so it CAN re-derive compositional context. But PA issues described in perceptual language may be misdiagnosed compositionally.

### What SHOULD Cross (Investigation Findings)

**Report #18 (Builder Visibility):** Gate results should include not just measured values but FIX SUGGESTIONS with specific CSS. "Zone 2 background should be #f0ebe3 (currently #fef9f5, only 8 RGB delta)."

**Report #28:** PA issues should be linked to mechanism IDs and CSS selectors where possible. The weaver could add: "This likely relates to mechanism #7 (Zone Background Differentiation) in zones 2-3."

**Report #22 (Remediation):** The remediation recipe succeeded because it gave the builder BOTH the symptom AND the fix. "Find block X. DELETE. Replace with Y."

### FIX

**Orchestrator-mediated fix instructions.** After receiving PA report + gate results, the orchestrator (NOT the PA auditors, who must remain context-free) generates a `_fix-instructions.md` that maps perceptual symptoms to compositional fixes:

```markdown
## FIX INSTRUCTIONS (generated by orchestrator)

### Issue 1: Whitespace void at 70-80% scroll (PA: 9/9, BLOCKING)
COMPOSITIONAL DIAGNOSIS: Stacked gaps at zone 3->4 boundary.
  Section-bottom-margin (32px) + transition-margin-top (24px) +
  divider-margin (24px) + section-top-padding (24px) = 104px.
  BUT: Adjacent empty sections add their own margins -> 276px total.
RECIPE PHASE: 4 (Section Scale)
CSS FIX: Remove empty transition elements between zones 3-4.
  Reduce .zone-transition margin from 24px to 12px.
  Verify: total gap at this boundary <= 108px.

### Issue 2: Uniform typography (PA: 7/9, BLOCKING)
COMPOSITIONAL DIAGNOSIS: Zone-group typography overridden by base styles.
RECIPE PHASE: 5 (Component Scale) / Phase 3 (Page Scale)
CSS FIX: Increase specificity of zone-group typography rules.
  .zone-dense p { font-size: 15px; line-height: 1.55; }
  Verify: computed font-size differs by >=2px between adjacent zones.
```

### NEW ARTIFACT

| Artifact | Size | Purpose |
|----------|------|---------|
| `_fix-instructions.md` | ~50-150 lines | Orchestrator-generated mapping from symptoms to compositional fixes |

### Compression Assessment

| Metric | Current | After Fix |
|--------|---------|-----------|
| Fix-cycle builder input | PA report (symptoms) + gate results (values) | PA report + gate results + _fix-instructions.md (diagnosis + CSS fix) |
| Compositional context | Must re-derive from recipe + build plan | Provided directly by orchestrator |
| Type | Currently DESTRUCTIVE -> becomes CONSTRUCTIVE |

---

## BOUNDARY 11: Fix Cycle -> Final Output

| Property | Value |
|----------|-------|
| **From** | Fix-cycle Builder (revised CSS/HTML) |
| **To** | Final output (deterministic paths) |
| **Current Artifact** | Revised `output.html` |
| **Current Format** | HTML + embedded CSS (same as Boundary 6 output) |
| **Intelligence Preserved** | All visual decisions in CSS, all structural decisions in HTML |
| **Intelligence Lost** | Fix reasoning (WHY these specific fixes were applied). The diff between original and fixed versions is lost unless explicitly logged. |
| **Compression Ratio** | 1:1 (revision of same artifact) |
| **Propagation Pattern** | REVISION (same artifact modified) |
| **Loss Severity** | LOW |

### Current State

The fix loop runs 0-3 cycles. Each cycle: fix top issues -> 2-PA re-check -> repeat. After 3 cycles, ESCALATE to user.

### What SHOULD Cross

The fix-cycle builder should log its changes so the build log captures what was fixed and why.

### FIX

**Build log enhancement.** Fix-cycle builder appends to `_build-log.md`:

```markdown
## Fix Cycle 1

### Issues addressed:
1. Whitespace void at zone 3->4: Removed empty transition element, reduced margin. Gap: 276px -> 96px.
2. Typography uniformity: Added !important to zone-group rules (specificity conflict). Delta: 0px -> 2px.

### Issues deferred:
3. Background delta S3-S4 (15 RGB, borderline). Acceptable per threshold.

### Re-check result:
2-PA quick audit: PA-05 improved from 2.0 -> 2.8. SHIP.
```

### NEW ARTIFACT

Enhancement to existing `_build-log.md` -- fix cycle section added.

### Compression Assessment

| Metric | Value |
|--------|-------|
| Compression ratio | 1:1 (revision) |
| Type | CONSTRUCTIVE (iterative improvement) |

---

## MASTER BOUNDARY TABLE

| # | Boundary | From -> To | Current Format | Compression Ratio | Loss Severity | Type | FIX STATUS |
|---|----------|-----------|----------------|-------------------|---------------|------|------------|
| 1 | Content -> TC | content.md -> TC Phase 0 | Raw markdown | ~10-100:1 | LOW | CONSTRUCTIVE | No fix needed |
| 2 | TC Internal | Phase 1 -> 2 -> 3 -> 3.5 | Internal reasoning | ~4:1 | MODERATE | CONSTRUCTIVE | Minor: add rejected alternatives |
| 3 | **TC -> Build Plan** | **TC Phases 0-4.7B -> _build-plan.md** | **Prose manifest** | **~20:1** | **HIGH** | **DESTRUCTIVE** | **CRITICAL FIX: Structured YAML + CSS snippets** |
| 4 | Handoff Gate | _build-recipe.md -> PASS/FAIL | Binary validation | 1:1 | ZERO | NECESSARY | Minor: expand to 7 checks + schema |
| 5 | **Multi-file -> Builder** | **6 files -> builder's model** | **Multiple independent docs** | **N/A (synthesis)** | **MODERATE** | **DESTRUCTIVE** | **FIX: Template + instance (shared structure)** |
| 6 | Builder -> Output | Builder understanding -> CSS/HTML | Code generation | N/A (generative) | LOW-MOD | CONSTRUCTIVE | Minor: telescope CSS comments + cascade table |
| 7 | Output -> Gate Runner | output.html -> gate checks | Pass-through + measurement | 1:1 | ZERO | NECESSARY | Minor: enhanced output with measured values |
| 8 | Output -> PA | output.html -> screenshots | Total context strip | Total | HIGH/ZERO | NECESSARY | No fix needed (intentional) |
| 9 | 9 PA Reports -> Weaver | 9 reports -> synthesis | Convergence compression | ~8:1 | LOW | CONSTRUCTIVE | Minor: convergence counts |
| 10 | **PA -> Fix Cycle** | **PA report -> fix builder** | **Perceptual symptoms** | **N/A** | **MODERATE** | **DESTRUCTIVE** | **FIX: Orchestrator-generated _fix-instructions.md** |
| 11 | Fix Cycle -> Final | Revised output -> done | Revision | 1:1 | LOW | CONSTRUCTIVE | Minor: build log enhancement |

---

## INTELLIGENCE SURVIVAL CHAIN

Tracing a single compositional decision from TC to final output:

**Example:** "Border-weight gradient encodes geological depth -- 4px/3px/2px/1px mapping confidence levels."

| Boundary | What Survives | What's Lost | Survival % |
|----------|--------------|-------------|------------|
| B1 (content -> TC) | Content has 4 confidence levels in evidence sections | Paragraph-level confidence expression | 90% |
| B2 (TC internal) | Metaphor: geological strata. Confidence maps to depth. | Alternative metaphors that also encode confidence. | 85% |
| **B3 (TC -> build plan)** | **CURRENTLY: "Border-weight gradient (#1)" -- NAME ONLY** | **The entire isomorphism: depth = confidence, 4px = highest certainty, geological consolidation pressure** | **35%** |
| | **AFTER FIX: YAML block with id, css snippet, justification, zone mapping** | **Only the full cognitive derivation chain** | **80%** |
| B4 (handoff gate) | Pass-through | Nothing | 80% |
| **B5 (multi-file -> builder)** | **CURRENTLY: Builder reads mechanism name + looks up catalog** | **Synthesis overhead: builder may misalign recipe phase with catalog entry** | **55%** |
| | **AFTER FIX: Recipe instance Phase 6 has inline CSS + justification** | **Only the LLM attention limits** | **75%** |
| B6 (builder -> CSS) | `border-left: 4px solid var(--color-text)` on `.callout-critical` | WHY 4px (unless telescope CSS comment included) | 70% |
| B7 (output -> gates) | Pass-through (gate measures computed border-left) | Nothing | 70% |
| B8 (output -> PA) | PA sees: "thick dark border on some callouts" | Connection to geological metaphor | 40% (perceptual only) |
| B9 (PA -> weaver) | "Border variation exists between sections" | Nuanced individual assessments | 35% |
| **B10 (PA -> fix cycle)** | **CURRENTLY: "Some callouts have borders, others don't -- feels inconsistent"** | **That inconsistency IS the design (alternating presence = rhythm)** | **25%** |
| | **AFTER FIX: _fix-instructions.md links to mechanism #1, explains alternation pattern** | **Fix builder knows it's intentional** | **55%** |

**Total intelligence survival: CURRENT ~25% | AFTER FIXES ~55%**

The ~45% permanent loss is the IRREDUCIBLE gap -- emergence that exists in perception but cannot be encoded in any format (Report #28, Section 9).

---

## ARTIFACT INVENTORY: What Exists at Each Stage

### Wave 0 (TC Analysis)

| Artifact | Producer | Consumer | Format | Size |
|----------|----------|----------|--------|------|
| `content.md` | User | TC Planner | Raw markdown | 500-10K words |
| TC cognitive output | TC Planner (internal) | TC Planner (internal) | In-context reasoning | ~30-60 min |
| `_build-recipe.md` **[NEW]** | TC Planner (Phase 4.8) | Orchestrator, Builder | Structured YAML + CSS + BECAUSE | ~250-400 lines |

### Wave 0.5 (Metaphor Validation)

| Artifact | Producer | Consumer | Format | Size |
|----------|----------|----------|--------|------|
| Metaphor description | Extracted from `_build-recipe.md` | Fresh-eyes validator | Prose paragraph | ~5-10 lines |
| STRUCTURAL/ANNOUNCED verdict | Validator | Orchestrator | Binary | 1 line |

### Wave 0.9 (Handoff Gate)

| Artifact | Producer | Consumer | Format | Size |
|----------|----------|----------|--------|------|
| `_build-recipe.md` | TC Planner | Gate logic | Structured YAML | ~250-400 lines |
| Gate result | Gate logic | Orchestrator | PASS/FAIL + reasons | ~5-10 lines |
| `_handoff-gate-schema.yaml` **[NEW, optional]** | Pre-defined | Gate logic | YAML schema | ~30 lines |

### Wave 1 (Build)

| Artifact | Producer | Consumer | Format | Size |
|----------|----------|----------|--------|------|
| `operational-recipe-template.md` **[MODIFIED]** | Pre-defined (permanent) | Builder | Prose recipe (universal) | ~300 lines |
| `_build-recipe.md` | TC Planner | Builder | Structured YAML + CSS | ~250-400 lines |
| `tokens.css` | Design system | Builder | CSS :root | 174 lines |
| `prohibitions.md` | Design system | Builder | Prose constraints | 353 lines |
| `merged-components.css` | Design system | Builder | CSS classes | ~500 lines |
| `mechanism-catalog.md` | Design system | Builder | Prose + CSS | ~869 lines |
| Builder brief **[NEW]** | Pre-defined | Builder | Prose instructions | ~40 lines |
| `output.html` | Builder | Gates, PA, Fix cycle | HTML + CSS | ~1,200-2,500 lines |
| `_cascade-value-table.md` **[NEW]** | Builder (Phase 8) | Gates, Orchestrator | Structured table | ~50-100 lines |

### Wave 2 (Verification, Parallel)

| Artifact | Producer | Consumer | Format | Size |
|----------|----------|----------|--------|------|
| `_gate-results.json` **[ENHANCED]** | Gate runner (JS) | Orchestrator, Fix builder | Structured JSON with values + fixes | ~50-100 lines |
| Screenshots | Orchestrator (pre-capture) | 9 PA Auditors | PNG images | 36-102 files |
| 9 PA audit reports | 9 PA Auditors | PA Weaver | Prose markdown | ~200-400 lines each |
| `_pa-report.md` **[ENHANCED]** | PA Weaver | Orchestrator, Fix builder | Prose with convergence counts | ~200-400 lines |

### Wave 3 (Fix Cycle, Conditional)

| Artifact | Producer | Consumer | Format | Size |
|----------|----------|----------|--------|------|
| `_fix-instructions.md` **[NEW]** | Orchestrator | Fix-cycle Builder | Symptom -> diagnosis -> CSS fix | ~50-150 lines |
| Revised `output.html` | Fix-cycle Builder | Gates, 2-PA re-check | HTML + CSS | ~1,200-2,500 lines |
| `_build-log.md` **[ENHANCED]** | Fix-cycle Builder | User, future reference | Fix cycle log with diffs | ~50-100 lines added |

### Final Output

| Artifact | Purpose | Format | Size |
|----------|---------|--------|------|
| `output.html` | The built page | HTML + CSS | ~1,200-2,500 lines |
| `_pa-report.md` | Perceptual audit results | Prose markdown | ~200-400 lines |
| `_build-log.md` | Full build history | Prose markdown | ~100-300 lines |
| `_cascade-value-table.md` | Computed CSS proof | Structured table | ~50-100 lines |

---

## COMPRESSION RATIO SUMMARY

| Boundary | Before Fix | After Fix | Improvement |
|----------|-----------|-----------|-------------|
| B1: Content -> TC | ~10-100:1 (correct) | Same | N/A |
| B2: TC Internal | ~4:1 (correct) | ~3.5:1 | Minor |
| **B3: TC -> Build Plan** | **~20:1 (destructive)** | **~8:1** | **2.5x improvement** |
| B4: Handoff Gate | 1:1 (correct) | Same | N/A |
| **B5: Multi-file -> Builder** | **~high synthesis overhead** | **~low (shared structure)** | **~2x improvement** |
| B6: Builder -> Output | N/A (generative) | Same | Minor (CSS comments) |
| B7: Output -> Gates | 1:1 (correct) | Same | N/A |
| B8: Output -> PA | Total (correct) | Same | N/A |
| B9: PA Reports -> Weaver | ~8:1 (correct) | Same | Minor (convergence counts) |
| **B10: PA -> Fix Cycle** | **Symptoms only** | **Symptoms + diagnosis + CSS fix** | **~2x improvement** |
| B11: Fix -> Final | 1:1 (correct) | Same | Minor (build log) |

---

## NEW ARTIFACTS SUMMARY (What Gets Added to PV2)

| Artifact | Type | Size | Purpose | Replaces |
|----------|------|------|---------|----------|
| `_build-recipe.md` | Per-build, TC-generated | ~250-400 lines | Structured recipe instance with YAML + CSS + BECAUSE | `_build-plan.md` (~100-200 lines) |
| `operational-recipe-template.md` | Permanent | ~300 lines | Universal recipe phases + thresholds | `operational-recipe.md` (~650 lines) |
| Builder brief | Permanent | ~40 lines | Role-specific builder context | N/A (new) |
| TC Planner brief | Permanent | ~40 lines | Output format requirements | N/A (new) |
| PA Auditor brief | Permanent | ~25 lines | Zero-context evaluation protocol | N/A (new) |
| Planner checkpoint brief | Permanent | ~20 lines | Checkpoint verification protocol | N/A (new) |
| `_cascade-value-table.md` | Per-build, builder-generated | ~50-100 lines | Computed CSS proof at boundaries | N/A (new, was informal) |
| `_gate-results.json` | Per-build, gate-runner-generated | ~50-100 lines | Enhanced gate results with values + fixes | Informal gate output |
| `_fix-instructions.md` | Per-build, orchestrator-generated | ~50-150 lines | Symptom-to-fix mapping | N/A (new) |
| `_handoff-gate-schema.yaml` | Permanent, optional | ~30 lines | Schema for _build-recipe.md validation | N/A (new) |

**Total new permanent lines:** ~455 lines across 5 files
**Total new per-build lines:** ~400-750 lines across 4 files (replacing ~750-850 lines)
**Net permanent change:** -195 lines (recipe shrinks from 650 to 300, build plan restructured)

---

## HIGHEST-LEVERAGE FIXES (RANKED)

| Rank | Boundary | Fix | Intelligence Gain | Effort |
|------|----------|-----|-------------------|--------|
| **1** | **B3: TC -> Build Plan** | **Structured _build-recipe.md with YAML + CSS** | **+40% survival (35% -> 75%)** | **~80 lines added to TC SKILL.md** |
| **2** | **B5: Multi-file -> Builder** | **Template + instance (shared structure) + per-agent briefs** | **+20% survival (60% -> 80%)** | **~125 lines new briefs + recipe restructure** |
| **3** | **B10: PA -> Fix Cycle** | **_fix-instructions.md (orchestrator-generated)** | **+30% survival at fix boundary** | **~20 lines orchestrator logic** |
| 4 | B6: Builder -> Output | Telescope CSS comments + cascade table | +10% survival | ~0 (behavioral change, no new code) |
| 5 | B2: TC Internal | Rejected alternatives section | +5% survival | ~10 lines TC output enhancement |
| 6 | B9: PA -> Weaver | Convergence counts in report | +5% at synthesis | ~5 lines weaver output format |
| 7 | B11: Fix -> Final | Build log enhancement | Traceability (no survival change) | ~10 lines builder logging |

**Fixes 1-3 address the 4 DESTRUCTIVE boundaries and account for ~90% of recoverable intelligence loss.**

---

## THE IRREDUCIBLE GAP

Report #28 (Propagation, Section 9) identifies intelligence loss that NO format change can fix:

1. **The metaphor's "feel" cannot be encoded in CSS.** "Geological strata with consolidation under pressure" SUGGESTS a CSS direction, but the FEELING of excavation emerges from the COMBINATION of channels, not from any single property.

2. **The builder's creative contribution is unpredictable.** Opus brings compositional fluency that TC cannot specify. This CREATION flows upstream (builder -> composition), not downstream.

3. **Context window limits create a hard bandwidth cap.** Even with perfect formats, the builder can actively attend to ~2,000-4,000 tokens at any moment.

**Estimated partition:** ~60% of current loss is TRACTABLE (format-fixable). ~40% is IRREDUCIBLE (emergence, creativity, context limits).

The fixes in this report address the 60% tractable portion. The 40% irreducible gap is the permanent ceiling of fire-and-forget pipelines. CD-006 exceeded this ceiling because it had human-in-the-loop iteration (Report #21) -- the human played the role that no artifact can.

---

**END OF REPORT**

**Key finding:** 4 destructive boundaries, 3 concrete fixes, ~55% total intelligence survival (up from ~25%). The single highest-leverage change is Boundary 3: structured _build-recipe.md replaces prose _build-plan.md.

**Files referenced:**
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/25-skill-pipeline-arch.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/28-meta-propagation.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/17-design-recipe-restructure.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/18-design-builder-visibility.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/22-integration-remediation.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/19-design-programmatic-enforcement.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/21-integration-cd006.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/compositional-intelligence/12-stack-multi-coherence.md`
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/PV2-PIPELINE-DIAGRAM.md`

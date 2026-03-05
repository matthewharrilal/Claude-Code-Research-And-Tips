# PHASE 3 MASTER SYNTHESIS

**Date:** 2026-02-24
**Sources:** 20 analysis files (01-20), 20+ agents (6 extractors + 1 merger + 1 adversarial + 3 buddies + 1 style guide + 1 structural + 4 surgeons + 3 gap-checkers)
**Total analysis corpus:** ~650k across 20 files

---

## THE HONEST FRAMING

Phase 2 concluded: "The pipeline went from 100 lines (PA-05 4/4) to 3,600 lines (PA-05 3/4). More specification produced worse output."

Phase 3 responded by producing 650k of analysis recommending 57 enrichments adding ~620 net lines.

The metacognitive buddy (10) diagnosed this precisely: **Phase 3 operates under Frame A ("Fix the Machine") while speaking the language of Frame C ("Reduce to Essentials").** The adversarial review (06) measured it: **42:1 add:remove ratio.** The fresh-eyes buddy (11) prescribed the cure: **"Implement 5, run once, measure, then decide."**

This synthesis takes the fresh-eyes prescription seriously.

---

## WHAT WE KNOW (Convergence Across 20+ Agents)

### Five findings every agent agreed on:

1. **Priority inversion is the root cause.** The pipeline checks CSS compliance when it should check human readability. This appears at every pipeline stage: gates check sub-perceptual colors before text legibility, auditors answer 69 structural questions before asking "can I read this?", the weaver prioritizes gate failures over usability failures.

2. **The experiential pass (ME-001) is the single highest-ROI change.** Every extraction source, every buddy, every adversarial reviewer independently identified this. The gap is: 9 auditors look at a page and immediately jump to answering structured questions. Nobody first asks "can I even read this?"

3. **The WCAG text contrast gate (ME-003) fills a glaring hole.** 31 programmatic gates and none checks whether text is readable against its background. But implementation requires resolving the accent palette conflict (buddy-adversarial finding 1B: soul-mandated accent colors fall below 4.5:1 on warm backgrounds).

4. **The screenshot validation gate (ME-006) is input validation for the most expensive pipeline phase.** If PA screenshots are broken, 9 Opus agent-runs are wasted. But re-capture with expanded CSS overrides changes the page (buddy-adversarial finding 1C).

5. **The capacity budget is ~240 lines.** gate-runner-core.js is at 68% compliance (net-zero mandatory). All other artifacts have tight budgets. The 57-enrichment list proposes +620 lines — 2.6x over budget.

### Three findings the buddy agents added:

6. **Experiential pass time explosion** (09): +45-72 minutes across 9 auditors, expanding Weaver input by ~100+ lines, increasing context exhaustion risk.

7. **WCAG vs warm palette conflict** (09): accent colors (#2a7d7d, #6b9b7a, #c49052, #c97065) fall to 3:1-4.1:1 on warm backgrounds. REQUIRED gate would block builds over soul-mandated colors.

8. **The complexity ratchet is a property of the tool** (10): LLM agents receive a problem description and produce a solution spec. The solution spec is always a document. The document always adds lines. The 42:1 add:remove ratio is not a pipeline design flaw — it is what happens when you use LLM agents to improve LLM agent pipelines.

### Two findings from the gap check:

9. **77% FULL coverage** (18): 189/247 findings from 19 reports are fully captured. 18 MISSING items are concentrated in paradigm-level questions (no spec fix), content quality observations (outside pipeline scope), and 3 operational gaps.

10. **Zone 4 monotony NOT CAPTURED** (20): The cross-run comparison showed Zone 4 had repetitive visual rhythm in V3 vs V2. No enrichment addresses this. Also: loss of diagrams, code headers, drop caps, and print styles from V2 are uncaptured.

---

## THE IMPLEMENTATION PLAN

### Philosophy: Measure, Don't Speculate

The buddy-metacognitive (10) was right: Phase 3 should have produced a 20-line diff and a run plan, not 5,846 lines. This synthesis corrects course.

**The plan is: implement 8 surgical changes, run the pipeline, measure PA-05, then decide what else (if anything) is needed.**

### The 8 Changes (Prioritized by Convergence + Safety)

These 8 were selected by intersecting:
- Fresh-eyes top 5 (ME-001, ME-003, ME-006, ME-007, ME-039)
- Adversarial "what survives" (ME-001, ME-004, ME-007, ME-039)
- Structural intersection "within budget" (all 8 below fit inside capacity)
- Surgery plan feasibility (net-zero gate-runner achieved via consolidation)

| # | ME-ID | Change | Target File | Net Lines | Risk |
|---|-------|--------|-------------|-----------|------|
| 1 | ME-001 | Experiential pass for PA auditors | pa-deployment.md | +22 | SAFE |
| 2 | ME-002 | Usability priority override in Weaver | pa-weaver.md | +14 | SAFE |
| 3 | ME-004 | Legibility self-check Q0 for builder | artifact-builder-recipe.md | +12 | SAFE |
| 4 | ME-007 | Fix GR-44 trailing void measurement | gate-runner-core.js | +10 | SAFE |
| 5 | ME-039 | HTML color + font stack boilerplate | artifact-builder-recipe.md | +8 | SAFE |
| 6 | ME-005 | Mechanical exception in verdict logic | MANIFEST.md + 2 satellite | +22 | CAUTION |
| 7 | ME-006 | Screenshot validation gate (with builder signal) | pa-deployment.md + orchestrator | +27 | CAUTION |
| 8 | ME-037+ME-051 | Retire 4 PA questions, replace with 4 experiential | pa-questions.md + 4 satellite | 0 (swap) | CAUTION |

**Total net addition: +115 lines** (within 240-line budget, with 125-line buffer for second wave if needed)

### What Was Cut and Why

| Category | Cut Items | Reason |
|----------|-----------|--------|
| **New gates (ME-003, ME-014, ME-040)** | GR-60 WCAG, GR-61 font size, GR-62 overflow | Gate-runner at 68% compliance. Requires Wave 0 subtraction (-150 lines) first. ME-003 also has unresolved WCAG vs palette conflict. **DEFERRED to Wave 2 after validation run.** |
| **Gate severity restructure (ME-024-030)** | 7 tier moves/threshold changes | Low leverage individually. Batch with Wave 2 after measuring whether current tier assignments actually cause problems. |
| **Tracking/documentation (ME-042-046)** | 5 documentation enrichments | Zero impact on output quality. Add if/when the pipeline runs successfully. |
| **Reservoir items (ME-047-057)** | 11 CONSIDER-severity items | Lowest confidence. Many came from old reservoir before V3 evidence existed. Apply selectively after validation. |
| **Phase 4 fix application (ME-017)** | Architectural change | INADEQUATE mitigation per structural analysis (13). Requires its own validation cycle. |
| **PA enrichments (ME-015, ME-021-023, ME-031-036, ME-055)** | 11 PA question adds/modifications | Over PA budget (+35 vs +30 safe). ME-037/ME-051 swap is sufficient for one validation run. |
| **Gate modifications (ME-010-013)** | 4 existing gate fixes | Low individual impact. GR-05 split, GR-06 font check, GR-14 scoping, GR-09 tolerance — all improve accuracy but don't change WHAT the pipeline checks. |

### Pre-Implementation Requirements

Before touching any spec file:

1. **Resolve WCAG palette conflict** (from buddy-adversarial 1C):
   - Decision needed: is GR-60 REQUIRED or RECOMMENDED?
   - If REQUIRED: define accent color exemptions for decorative/non-informational elements
   - **NOTE:** GR-60 is DEFERRED from this wave, so this can be resolved before Wave 2

2. **Add builder signal for ME-006** (from buddy-adversarial 1C):
   - ME-006 needs a mechanism for builder to declare "this page uses scroll-triggered reveals"
   - Without this, re-capture with expanded CSS creates a different page than intended
   - Propose: builder adds `<!-- SCROLL-REVEALS: true -->` HTML comment; ME-006 checks for it

3. **Verify anti-loss mechanism preservation** (from anti-loss map, file 03):
   - Cross-check each edit against the 5 CRITICAL fragility mechanisms (M-01, M-02, M-04, M-06, M-19)
   - Use the 9-item pre-flight checklist from file 03
   - Use the per-file formatting templates from file 12

### Implementation Order

```
Step 0: Read all 8 target files. Verify line counts match analysis.

Step 1 (parallel, SAFE items):
  1a. ME-001 → pa-deployment.md (experiential pass)
  1b. ME-002 → pa-weaver.md (usability priority)
  1c. ME-004 → artifact-builder-recipe.md (builder Q0)
  1d. ME-039 → artifact-builder-recipe.md (boilerplate)

Step 2 (sequential, gate-runner):
  2a. ME-007 → gate-runner-core.js (GR-44 fix)

Step 3 (sequential, CAUTION items):
  3a. ME-005 → MANIFEST.md + gate-manifest.json + gate-runner-core.js (verdict logic)
  3b. ME-006 → pa-deployment.md + artifact-orchestrator.md (screenshot validation)

Step 4 (atomic swap):
  4a. ME-037 → retire 4 PA questions (reverse 5-location update per question)
  4b. ME-051 → add 4 experiential questions (5-location update per question)
  (4a and 4b MUST be one operation)

Step 5: Verification
  - Run anti-loss pre-flight checklist (9 items from file 03)
  - Verify line counts are within budgets
  - Verify recipe verbs (not checklist verbs) in all new content
  - Verify binary format for all new rules (no judgment language)
```

### Post-Implementation: Run and Measure

After the 8 changes are applied:

1. **Run `/build-page`** on the same Gas Town content
2. **Measure PA-05** — if >= 3.5/4, the changes worked
3. **Measure experiential pass output** — did auditors actually use it? Or did it get compressed to "No legibility issues found"?
4. **Measure GR-44** — does the trailing void fix catch real voids?
5. **Measure screenshot quality** — did ME-006 prevent blank screenshots?

Based on results, decide:
- If PA-05 >= 3.5/4 → Success. Cherry-pick remaining enrichments as needed.
- If PA-05 < 3.5/4 but experiential pass worked → Detection improved, resolution chain broken. Focus on fix application (ME-017 Phase 4, deferred).
- If experiential pass compressed → The causal chain broke at step 2. Rethink approach.
- If PA-05 unchanged → The 8 changes didn't address the real problem. Re-examine assumptions.

---

## WHAT THIS SYNTHESIS DOES NOT CONTAIN

Deliberately excluded to honor the metacognitive frame correction:

- No additional enrichments beyond the 57 already cataloged
- No new anti-loss mechanisms
- No new capacity models
- No architecture proposals
- No speculation about what Wave 2 should contain (measure first)

The 20 analysis files (01-20) contain the full enrichment catalog, surgery plans, propagation maps, and gap analysis. They are reference material for future waves, not action items for this wave.

---

## FILE INDEX

| File | Purpose | Key Content |
|------|---------|-------------|
| 01-v3-enrichments.md | V3 Phase 2 extraction | 52 enrichments (V3E-001-052) |
| 02-reservoir-extraction.md | Old reservoir audit | 94 APPLIED, 187 INVALIDATED, 79 STILL-USEFUL |
| 03-anti-loss-map.md | Mechanism preservation | 25 mechanisms, 5 CRITICAL, 9-item pre-flight |
| 04-cross-reference.md | Phase 2 vs 128-fix delta | 18 FIXED, 8 FAILED, 21 NEW |
| 05-MASTER-ENRICHMENT-LIST.md | Merged catalog | 57 enrichments (ME-001-057) |
| 06-adversarial-review.md | Adversarial attack | 42:1 ratio, 3.3x over budget |
| 07-handoff-enrichments.md | HANDOFF extraction | 18 enrichments (HE-001-018) |
| 08-pipeline-pa-enrichments.md | Pipeline PA extraction | 16 enrichments (PE-001-016) |
| 09-buddy-adversarial.md | Second-order effects | WCAG conflict, time explosion, screenshot paradox |
| 10-buddy-metacognitive.md | Frame analysis | "Fix the Machine" vs "Reduce to Essentials" |
| 11-buddy-fresh-eyes.md | Top 5 picks | "Implement 5, run, measure, decide" |
| 12-implementation-style-guide.md | Format templates | Per-file capacity, red lines, clusters |
| 13-structural-intersection.md | Budget analysis | +556 vs 240 budget, 5-wave plan |
| 14-gate-surgery-plan.md | Gate-runner surgery | NET ZERO: -60 freed, +60 consumed |
| 15-manifest-surgery-plan.md | MANIFEST surgery | +12 net within +20 budget |
| 16-pa-surgery-plan.md | PA surgery | +40 net, 3 retirements, 3 new |
| 17-removal-propagation-map.md | Cascade analysis | 154 edits across 13 files, 5 orphan risks |
| 18-gap-check.md | Coverage verification | 247 findings, 77% FULL, 8 proposed new |
| 19-user-insight-completeness.md | User insight check | Gorilla framing partially flattened |
| 20-paradigm-crossrun-completeness.md | Cross-run check | Zone 4 monotony NOT CAPTURED |
| **21-PHASE3-MASTER-SYNTHESIS.md** | **This file** | **8-change implementation plan** |

---

## DECISION LOG

| Decision | Rationale | Source |
|----------|-----------|-------|
| 8 changes, not 57 | Budget constraint (240 lines) + fresh-eyes "implement 5, measure" principle | 06, 11, 13 |
| No new gates this wave | Gate-runner at 68%, net-zero mandatory, WCAG palette conflict unresolved | 06, 09, 13, 14 |
| ME-037+ME-051 as atomic swap | PA retirements and replacements must be one operation (structural analysis) | 13 |
| ME-017 deferred | Architectural change requires own validation cycle (structural analysis) | 13 |
| Measure before Wave 2 | Metacognitive diagnosis: stop speculating, start observing | 10 |
| No new analysis files | This synthesis is the LAST Phase 3 document | 10 |

---

## NEXT ACTION

Apply the 8 changes to the pipeline spec files in `ephemeral/va-extraction/`, following the implementation order above. Then run `/build-page` on Gas Town content and measure results.

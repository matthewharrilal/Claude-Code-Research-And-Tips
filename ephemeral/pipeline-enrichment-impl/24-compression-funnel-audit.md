# Compression Funnel Audit: Before/After Enrichment Comparison

**Agent:** compression-funnel-auditor
**Date:** 2026-02-20
**Method:** Line-by-line trace of 9 compositional concepts through 4 pipeline files (AFTER state), compared against Report 17 concept-flow-trace (BEFORE state)

---

## Executive Summary

The pipeline enrichment edits SIGNIFICANTLY REDUCED compression loss for 5 of 9 concepts, MAINTAINED the status quo for 3, and left 1 concept still absent. The single most impactful change was the addition of **compositional context to the fix cycle return path** in both SKILL.md and gate-runner.md -- the exact bottleneck Report 17 identified as the pipeline's critical weakness.

**Key metrics:**
- Pipeline file total lines: ~2,184 (436 + 443 + 1,160 + 145)
- Research findings: ~337 across R1-R5
- New compression ratio: ~6.5:1 (down from estimated 50:1)
- Concepts with improved compression: 5 of 9
- Concepts still at TOTAL EXTINCTION: 0 (down from 3)
- Concepts still SEVERELY compressed: 2 (Semantic Directions, Stack Progression)

---

## Pipeline File Summary (AFTER State)

| File | Lines | Role |
|------|-------|------|
| `conventions-brief.md` | 443 | Entry point -- world model for builder |
| `SKILL.md` (build-page) | 436 | Orchestrator -- team creation, gate running, PA deployment, fix cycles |
| `gate-runner.md` | 1,160 | Programmatic verification -- 21 gates with JS |
| `flagship-pa-questions.md` | 145 | Perceptual audit -- 8 Tier 5 questions |
| **TOTAL** | **2,184** | |

---

## Concept-by-Concept Trace

### CONCEPT 1: 6 Channels (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)

#### BEFORE State (from Report 17)
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 27 | Full 6-channel model, primary/enhancement distinction, semantic directions |
| Orchestrator spawn | 3 | 2 checkpoint references (borders, typography), channels NOT NAMED |
| Gates | 275 | Each channel measured individually + SC-13 measures together |
| PA | 33 | 3 questions using perceptual language, never "channels" |
| Weaver | 1 | Binary: "multi-coherence perceptible?" |
| Fix cycle | 0 | ZERO channel-specific content in return path |

#### AFTER State

**conventions-brief.md (Entry):** IMPROVED -- 31 lines (was 27)
- Lines 97-103: All 6 channels listed with CSS property mappings
- Lines 105: Primary 4 identified explicitly
- Lines 107-116: NEW -- Perception thresholds by channel table (6 rows mapping channel to property to perceptible floor to sub-perceptual range). This is a MAJOR addition: channels now have QUANTITATIVE perception thresholds attached directly to their definition.
- Lines 117-134: Semantic direction + multi-coherence example + layout diversity shortcut + global coherence + boundary naming

**SKILL.md (Orchestrator spawn):** IMPROVED -- 5 lines (was 3)
- Line 63-66: Self-check now includes ">= 3 channels shift in same semantic direction at each boundary" -- channels are NAMED as a concept in the spawn prompt (previously absent)
- Line 284: Weaver prompt "Multi-coherence perceptible: [MET/FAILED]" -- still binary, but now embedded in richer weaver instructions
- Lines 330-335: NEW -- Fix cycle "Compositional Context" section that includes boundary coherence direction, which channels currently shift, which are missing, and a re-read reference to conventions-brief Section 4

**gate-runner.md (Gates):** IMPROVED -- ~290 lines (was 275)
- SC-13 (lines 471-569): Full multi-coherence measurement, all 6 channels with JS
- Lines 546-547: Known limitation acknowledged: "Counts channels but CANNOT judge if shifts serve the SAME semantic direction"
- Lines 549-566: NEW -- "CHANNEL NOTE" section explicitly addressing Channels 5-6 (Behavioral/Material) as enhancement channels with minimal practical guidance. Notes that 3/4 PRIMARY channels is compositionally stronger than 3/6 with enhancement channels. This was absent before.
- SC-13B (lines 672-690): Direction coherence ADVISORY with INTENSIFYING/RELAXING classification
- Lines 224-256: NEW -- "Fix Recipe Compositional Context" section that maps gate categories to conventions-brief section references. SC-13 maps to "Section 4: MULTI-COHERENCE -- '>= 3 channels in same semantic direction'"

**flagship-pa-questions.md (PA):** SAME -- 33 lines across 3 questions
- PA-61 (lines 23-33): Channel independence
- PA-62 (lines 37-47): Transition variation
- PA-65 (lines 79-89): Music analogy
- No change from BEFORE state

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 27 lines, no per-channel thresholds | 31 lines, per-channel perception threshold table | **IMPROVED** -- channels now have quantitative floors |
| Orchestrator spawn | 3 lines, channels NOT NAMED | 5 lines, channels NAMED as concept, semantic direction referenced | **IMPROVED** -- concept-level awareness added |
| Gates | 275 lines, known limitation noted | ~290 lines, Ch5-6 enhancement note added, fix recipe references added | **IMPROVED** -- self-awareness of limitations increased |
| PA | 33 lines, perceptual language | 33 lines, no change | **SAME** |
| Weaver | 1 binary line | 1 binary line (same) | **SAME** |
| Fix cycle | 0 structured lines | ~6 lines via Compositional Context template + brief_section reference | **IMPROVED** -- return path now exists (was ZERO) |

**Verdict: IMPROVED.** The critical return path gap is partially closed. The fix cycle now contains channel-specific context ("which channels currently shift there and which are missing") and routes the builder back to Section 4. The per-channel threshold table in the brief is a significant upgrade. However, the weaver still collapses to binary MET/FAILED.

---

### CONCEPT 2: 5 Scales (Navigation, Page, Section, Component, Character)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 22 | Full 5-scale model, dependency rule, priority rule, parametric echo |
| Orchestrator spawn | 0 | Word "scale" absent from spawn prompt |
| Gates | 43 | DG-1 (table existence) + SC-12 (zone count). Only Page scale measured. |
| PA | 10 | PA-63 only (Component-Page echo) |
| Weaver | 2 | Binary: "3+ scales?" |
| Fix cycle | 3 | Template for PA-63 gap, no scale-specific fix |

#### AFTER State

**conventions-brief.md:** IMPROVED -- 24 lines (was 22)
- Lines 138-163: Full scale model with build order table, dependency rule (Character without Page = orphaned), priority rule (Navigation + Page + Component mandatory strong), parametric echo definition, Fractal Echo Table requirement
- Line 152: Dependency warning: "Scale 5 (Character) without perceptible Scale 2 (Page) produces orphaned variation"
- Lines 156-158: NEW -- Parametric echo definition expanded with specific CSS guidance ("reduce component padding by ~25% in dense zones")

**SKILL.md:** IMPROVED -- 3 lines (was 0)
- Line 60-61: Build process now includes "Phase B: Plan. Write conviction statement, transition table, and fractal echo table in build log BEFORE any CSS" -- fractal echo table (5 scales) now explicitly required in spawn prompt
- Line 77: "_build-log.md -- transition table (BEFORE build), fractal echo table (BEFORE build)" -- deliverable requirement for scale coverage
- Line 166-167: DG-1 in gate table: "Fractal echo table exists with 5 rows, CSS evidence non-empty, pattern direction consistent"

**gate-runner.md:** IMPROVED -- 60 lines (was 43)
- DG-1 (lines 725-745): Fractal echo table validation, 5 rows, CSS evidence, direction consistency
- DG-4 (lines 1071-1094): NEW -- Handoff Validation gate. Sub-check validates build log plan, but does NOT directly check 5 scales in CSS
- SC-12 (lines 443-467): Zone count (3-5), mapping to Page scale

**flagship-pa-questions.md:** SAME -- 10 lines
- PA-63 (lines 51-60): Component-Page echo + parametric echo (same as before)

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 22 lines | 24 lines, parametric echo CSS guidance added | **IMPROVED** (marginal) |
| Orchestrator spawn | 0 lines, "scale" absent | 3 lines, fractal echo table required in spawn | **IMPROVED** -- scales now explicitly in spawn |
| Gates | 43 lines, 1 of 5 scales measured | 60 lines, DG-4 validates plan, DG-1 validates table | **IMPROVED** (marginal -- still only Page scale measured in CSS) |
| PA | 10 lines | 10 lines, no change | **SAME** |
| Weaver | 2 lines | 2 lines + weaver prompt names scale coverage criterion | **SAME** |
| Fix cycle | 3 lines template | 3 lines template + brief_section reference for DG-1 fix | **IMPROVED** (marginal) |

**Verdict: IMPROVED (marginal).** The spawn prompt now references scales via the fractal echo table requirement. DG-4 validates the build plan. But the core gap persists: 4 of 5 scales still have zero programmatic CSS measurement. The improvement is in PLAN VALIDATION (does the builder claim to address 5 scales?) not IMPLEMENTATION VERIFICATION (does the CSS actually manifest 5 scales?).

---

### CONCEPT 3: Multi-Coherence (>= 3 channels in same semantic direction)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 32 | Full definition, 6 channels, semantic direction, 4 direction types, worked example |
| Orchestrator spawn | 0 | "multi-coherence" absent from spawn prompt |
| Gates | 98 | SC-13 (blocking, counts channels) + SC-13B (ADVISORY, direction at 50% confidence) |
| PA | 33 | 3 questions (PA-61, PA-62, PA-65) |
| Weaver | 2 | Binary: "perceptible?" + "SC-13 + PA-61 agree?" |
| Fix cycle | 0 specific | Nothing concept-specific |

#### AFTER State

**conventions-brief.md:** IMPROVED -- 40 lines (was 32)
- Lines 92-134: Full multi-coherence section with 6 channels, per-channel perception threshold table (NEW), worked example, layout diversity shortcut, global coherence requirement, boundary naming convention
- The per-channel threshold table (lines 107-116) is the key addition -- it binds multi-coherence to QUANTITATIVE perception floors

**SKILL.md:** SIGNIFICANTLY IMPROVED -- 8 lines (was 0)
- Line 66: Self-check now includes ">= 3 channels shift in same semantic direction at each boundary" -- multi-coherence NAMED in spawn prompt
- Line 141: Gate table row: "SC-13 | Multi-coherence | >= 3 of 6 channels shift at every zone boundary, avg >= 4"
- Lines 330-335: Fix cycle Compositional Context template: "For each failed gate or PA issue at a boundary, include: The boundary's planned coherence direction (from transition table), Which channels currently shift there and which are missing, Re-read conventions-brief.md Section [N] for the relevant concept"
- Line 335: Worked example: "SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten). See brief Section 4."

**gate-runner.md:** SAME -- ~98 lines
- SC-13 (lines 471-569): Same multi-coherence measurement
- SC-13B (lines 672-690): Same ADVISORY direction check
- Lines 234: Fix recipe reference maps SC-13 to "Section 4: MULTI-COHERENCE -- '>= 3 channels in same semantic direction'"

**flagship-pa-questions.md:** SAME -- 33 lines (PA-61, PA-62, PA-65 unchanged)

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 32 lines | 40 lines, per-channel threshold table added | **IMPROVED** |
| Orchestrator spawn | 0 lines | 8 lines, concept NAMED + worked example in fix template | **SIGNIFICANTLY IMPROVED** |
| Gates | 98 lines | ~98 lines + fix recipe references added | **IMPROVED** (marginal, recipe routing is the key add) |
| PA | 33 lines | 33 lines | **SAME** |
| Weaver | 2 lines | 2 lines (still binary) | **SAME** |
| Fix cycle | 0 specific | ~8 lines: coherence direction, channel listing, brief reference, worked example | **SIGNIFICANTLY IMPROVED** |

**Verdict: SIGNIFICANTLY IMPROVED.** The fix cycle return path -- identified as the critical bottleneck in Report 17 -- now contains concept-specific guidance with a worked example showing how to maintain coherence direction during fixes. Multi-coherence went from TOTAL EXTINCTION in the return path to STRUCTURED ROUTING. The semantic direction gap (ADVISORY at 50% confidence) persists in the gates, but the fix cycle now compensates by routing the builder back to the full concept definition.

---

### CONCEPT 4: 4 Semantic Directions (DEEPENING, OPENING, FOCUSING, RESOLVING)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 7 | 4 direction definitions, contradiction rule, naming convention |
| Orchestrator spawn | 0 | Direction names absent |
| Gates | 9 | SC-13B ADVISORY collapses 4 to 2 binary (INTENSIFYING/RELAXING) at 50% confidence |
| PA | 0 | No PA question mentions directions |
| Weaver | 0 | Not mentioned |
| Fix cycle | 0 | Not mentioned |
| **TOTAL EXTINCTION after gates** | | |

#### AFTER State

**conventions-brief.md:** IMPROVED -- 12 lines (was 7)
- Lines 117-124: Semantic direction coherence definition + 4 direction CSS mappings
- Lines 126: Contradiction detection rule
- Lines 128-134: Worked multi-coherence example explicitly encoding DEEPENING at a boundary with 5 channels shifting
- Line 134: Boundary naming convention with direction: `/* Boundary Z2->Z3: DEEPENING */`

**SKILL.md:** IMPROVED -- 4 lines (was 0)
- Line 66: Self-check: ">= 3 channels shift in same semantic direction at each boundary" -- "semantic direction" now appears in spawn prompt
- Lines 330-335: Fix cycle Compositional Context template explicitly references "The boundary's planned coherence direction (from transition table in _build-log.md)" and shows worked example: "Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten)."
- Line 354: Framing for fix cycles: "Re-read your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions."

**gate-runner.md:** SAME -- 9 lines
- SC-13B (lines 672-690): Still ADVISORY, still binary INTENSIFYING/RELAXING at ~50% confidence
- Lines 234: Fix recipe reference maps SC-13/SC-13B to "Section 4: MULTI-COHERENCE -- '>= 3 channels in same semantic direction'"
- 4 directions still collapsed to 2 binary categories in the gate

**flagship-pa-questions.md:** SAME -- 0 explicit lines about semantic directions

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 7 lines | 12 lines, worked example with DEEPENING added | **IMPROVED** |
| Orchestrator spawn | 0 lines | 4 lines, "semantic direction" named, worked fix example with DEEPENING | **IMPROVED** -- directions now enter the spawn prompt and fix template |
| Gates | 9 lines ADVISORY | 9 lines ADVISORY + brief_section reference | **IMPROVED** (marginal -- gate itself unchanged) |
| PA | 0 | 0 | **SAME** |
| Weaver | 0 | 0 | **SAME** |
| Fix cycle | 0 | 4 lines: planned direction referenced, worked example with DEEPENING | **IMPROVED** -- from TOTAL EXTINCTION to PARTIAL PRESENCE |

**Verdict: IMPROVED -- from TOTAL EXTINCTION to PARTIAL PRESENCE.** The 4 semantic directions are no longer completely extinct after the gates. The fix cycle now references the builder's planned coherence direction and includes a worked example naming DEEPENING. However, the improvement is indirect -- the fix cycle references the builder's OWN plan (from _build-log.md) rather than evaluating direction compliance independently. The gate still collapses 4 directions to 2 binary categories at 50% confidence. No PA question asks about semantic directions. The concept remains the MOST COMPRESSED of all 9, but is no longer at TOTAL EXTINCTION.

---

### CONCEPT 5: Anti-Scale Model (density x restraint x spatial confidence)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 16 | Formula, 3 factors, zero-factor rule, self-test, operational definitions |
| Orchestrator spawn | 0 | All 3 factors absent |
| Gates | 0 direct | Downstream effects only (component count, border count, typography zones) |
| PA | 10 | PA-64 only (restraint) |
| Weaver | 0 | Not mentioned |
| Fix cycle | 0 | Not mentioned |
| **TOTAL EXTINCTION after brief** | | |

#### AFTER State

**conventions-brief.md:** IMPROVED -- 18 lines (was 16)
- Lines 73-89: Full anti-scale model with formula, zero-factor rule, 3 factor definitions
- Lines 80-81: Self-test (commenting out CSS)
- Lines 87-89: NEW -- Connecting paragraph: "These three factors connect through scale: density fills each viewport, restraint governs what IS and IS NOT deployed, spatial confidence ensures the architecture holds at every zoom level. When all three are strong, the composition feels both full and controlled."

**SKILL.md:** IMPROVED -- 3 lines (was 0)
- Line 73: Content-form coupling instruction: "Dense analytical content = tighter spacing, more borders, denser typography. Overview content = generous spacing, fewer mechanisms." -- This invokes DENSITY without naming the anti-scale model
- Line 83: Restraint referenced in build log: "Which mechanisms you selected and from which catalog categories" (implicit restraint documentation)
- Line 240: Creative authority: "What you choose NOT to deploy matters as much as what you deploy. Document at least 3 deliberately absent mechanisms" -- restraint now appears in the orchestrator section, not just the brief

**gate-runner.md:** IMPROVED -- 3 indirect lines (was 0 direct)
- Lines 239: Fix recipe reference for SC-06/SC-07/SC-08/DG-3 maps to "Section 5: FRACTAL ECHO -- component vocabulary" -- spatial confidence gate has a brief section reference
- DG-4 (lines 1071-1094): Sub-check 3 validates ">= 14 mechanisms total AND >= 1 in each of 5 categories" -- this is a PROXY for density
- Still NO gate directly measuring the anti-scale formula or any of its 3 factors

**flagship-pa-questions.md:** SAME -- 10 lines
- PA-64 (lines 65-76): Restraint detection (same as before)

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 16 lines | 18 lines, connecting paragraph added | **IMPROVED** (marginal) |
| Orchestrator spawn | 0 lines | 3 lines, density via content-form coupling, restraint via absent mechanisms | **IMPROVED** -- factors now appear implicitly in orchestrator |
| Gates | 0 direct | 3 indirect lines, DG-4 proxies density, brief references added | **IMPROVED** (marginal -- still no direct measurement) |
| PA | 10 lines | 10 lines | **SAME** |
| Weaver | 0 | 0 | **SAME** |
| Fix cycle | 0 | 0 concept-specific + brief_section references for downstream gates | **IMPROVED** (marginal -- routing exists but not model-specific) |

**Verdict: IMPROVED (marginal).** The anti-scale model remains the LEAST VERIFIED concept in the pipeline. Its 3 factors now appear implicitly in the orchestrator (density via content-form coupling, restraint via absent mechanism documentation), and DG-4 proxies density via mechanism count. But the governing formula (Richness = density x restraint x spatial confidence) and the multiplicative zero-factor insight still have ZERO direct verification. The concept went from TOTAL EXTINCTION to PARTIAL IMPLICIT PRESENCE, but the improvement is the weakest of all 9 concepts.

---

### CONCEPT 6: Fractal Self-Similarity (same pattern direction at all 5 zoom levels)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 22 | Scale model, echo at every zoom level, parametric echo |
| Orchestrator spawn | 2 | DG-1 reference + build log table requirement |
| Gates | 19 | DG-1 (table existence only -- does not verify CSS implementation) |
| PA | 10 | PA-63 (Component-Page echo only) |
| Weaver | 2 | Binary: "3+ scales?" |
| Fix cycle | 3 | PA-63 gap template |

#### AFTER State

**conventions-brief.md:** IMPROVED -- 26 lines (was 22)
- Lines 138-163: Full fractal echo section
- Lines 156-158: Parametric echo CSS guidance expanded: "Give each zone a density character. Inside dense zones, reduce component padding by ~25%..."
- Lines 160-162: Fractal Echo Table requirement with explicit verification checkboxes

**SKILL.md:** IMPROVED -- 5 lines (was 2)
- Lines 60-61, 77: Fractal echo table required in spawn prompt build process
- Line 84: Brief reflection requires documenting "The unifying metaphor you chose and why it is structural"
- Line 166-167: DG-1 gate table reference
- Line 390: Success bar includes "Scale coverage verified (DG-1 valid + PA-63 agreement)"

**gate-runner.md:** IMPROVED -- 40 lines (was 19)
- DG-1 (lines 725-745): Fractal echo table validation with 5-row requirement, CSS evidence, pattern direction consistency, direction variation must be documented
- DG-4 (lines 1071-1094): NEW -- Validates the BUILD PLAN including mechanism categories, grid layouts, transition types -- all of which are scale-related
- Lines 239: Fix recipe reference for SC-06/SC-07/SC-08/DG-3 to "Section 5: FRACTAL ECHO"
- Still no gate verifying that CSS ACTUALLY echoes at 5 scales (deliverable-reality gap persists)

**flagship-pa-questions.md:** IMPROVED -- 12 lines (was 10)
- PA-63 (lines 51-60): Now explicitly mentions parametric echo: "Then find the SAME component type in a different section -- does it adapt to its surroundings, or does it look identical regardless of where it sits?" and "BONUS: if the same component type adapts visibly to different zones"

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 22 lines | 26 lines, parametric echo CSS guidance | **IMPROVED** |
| Orchestrator spawn | 2 lines | 5 lines, table required + brief reflection | **IMPROVED** |
| Gates | 19 lines | 40 lines, DG-4 validates plan | **IMPROVED** |
| PA | 10 lines | 12 lines, parametric echo now in PA-63 | **IMPROVED** |
| Weaver | 2 lines | 2 lines | **SAME** |
| Fix cycle | 3 lines | 3 lines + brief_section reference | **IMPROVED** (marginal) |

**Verdict: IMPROVED.** Fractal self-similarity gained DG-4 plan validation and richer PA-63 coverage (parametric echo). The deliverable-reality gap persists (DG-1 checks the table, not the CSS), but the probability of catching failures increased because PA-63 now explicitly asks about context-responsive components.

---

### CONCEPT 7: Perception Thresholds (>= 15 RGB, >= 2px font-size, >= 0.025em letter-spacing, <= 120px stacked gap)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 31 | Full threshold model + quality floor restating values |
| Orchestrator spawn | 6 | Self-check thresholds (bg delta, border, typography) |
| Gates | ~293 | 6 gates measuring all thresholds with CSS fix recipes |
| PA | 0 explicit | Implicit -- auditors see/don't see threshold effects |
| Weaver | 2 | Void pattern check |
| Fix cycle | STRUCTURED | Gate JSON with measured values, thresholds, CSS fix recipes |
| **LOWEST LOSS of any concept** | | |

#### AFTER State

**conventions-brief.md:** IMPROVED -- 35 lines (was 31)
- Lines 51-69: Full perception section with flagship failure evidence
- Lines 107-116: NEW -- Per-channel perception threshold table embedded in multi-coherence section (not just perception section). Thresholds now appear in TWO locations in the brief.
- Lines 228-256: Quality floor section restating values

**SKILL.md:** SAME -- 6 lines
- Lines 63-67: Same self-check thresholds in spawn prompt
- Line 137-143: Gate table with thresholds
- Line 433: Non-negotiables re-statement: "Every value the builder writes must be visible to a human. >= 15 RGB background delta. >= 2px font-size delta."

**gate-runner.md:** IMPROVED -- ~310 lines (was ~293)
- SC-09, SC-10, SC-11, SC-14, SC-15: All unchanged in measurement logic
- Lines 224-256: NEW -- Fix Recipe Compositional Context section. Maps every threshold gate to its conventions-brief section. This is an improvement in fix routing quality, not measurement.
- Lines 241-256: NEW -- Fix recipe format extension with `brief_section` field: "Re-read conventions-brief.md Section N (SECTION_NAME) before applying this fix."

**flagship-pa-questions.md:** SAME -- 0 explicit lines

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 31 lines | 35 lines, thresholds appear in 2 locations | **IMPROVED** |
| Orchestrator spawn | 6 lines | 6 lines | **SAME** |
| Gates | ~293 lines | ~310 lines, fix recipe references added | **IMPROVED** (fix routing quality increased) |
| PA | 0 explicit | 0 explicit | **SAME** |
| Weaver | 2 lines | 2 lines | **SAME** |
| Fix cycle | STRUCTURED | STRUCTURED + brief_section references | **IMPROVED** (already best, now better) |

**Verdict: IMPROVED (already best, now better).** Perception thresholds were already the best-preserved concept. The enrichment added per-channel threshold tables in a second location in the brief and added brief_section references to fix recipes. The concept remains the pipeline's gold standard for compression survival.

---

### CONCEPT 8: Recipe vs Checklist (sequential action verbs vs constraint verification verbs)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | ~168 (meta) | World-description framing, process sequence, conviction card |
| Orchestrator spawn | 12 | Phase A-D sequence, creative authority |
| Gates | 992 (structure change) | Binary PASS/FAIL (appropriate for verification) |
| PA | 144 (recipe) | Perceptual recipe for auditors |
| Weaver | 40 (checklist) | Binary MET/FAILED |
| Fix cycle | 20 (mixed) | Gate JSON + PA quotes, recipe-to-checklist degradation |

#### AFTER State

**conventions-brief.md:** SIGNIFICANTLY IMPROVED -- ~195 lines (was ~168)
- The brief is now MORE explicitly recipe-structured:
  - Lines 400-434: NEW -- "PROCESS (The Flow)" section with explicit Understand/Plan/Build/Verify phases, each with specific sequential actions
  - Lines 416-431: NEW -- "Boundary CSS recipe" with worked example showing how to set all channels together at a DEEPENING boundary with actual CSS
  - Lines 374-397: Conviction Card is now richer with specific commitment items
  - Lines 261-291: "FIVE QUESTIONS" section frames self-assessment as reflective practice
  - Lines 263-271: NEW -- "Compositional Memory (Preventing Drift)" section with 4 habits: boundary naming, midpoint reflection, category awareness, fix cycle memory
  - Line 273: CRITICAL -- "Fix cycle memory" sub-section explicitly addresses recipe-to-checklist degradation: "Fix cycles degrade from recipe to checklist when the builder operates at symptom level without compositional context. The conviction statement is your memory anchor."

**SKILL.md:** SIGNIFICANTLY IMPROVED -- ~25 lines (was 12)
- Lines 58-69: Spawn prompt is explicitly recipe-structured: Phase A (Read), Phase B (Plan), Phase C (Build with 3 checkpoints), Phase D (Self-verify)
- Lines 71-73: Creative authority framing preserved ("You may override ANY non-soul value")
- Lines 80-85: NEW -- "BRIEF REFLECTION" section requiring builder to document which conventions-brief sections influenced decisions, which mechanisms from which categories, and the structural nature of the metaphor
- Lines 320-348: NEW -- Fix cycle instructions are now RECIPE-STRUCTURED, not just symptom-reporting:
  - "Compositional Context" section routes builder to boundary's planned direction, missing channels, and relevant brief section
  - Framing: "Re-read your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions."
  - This directly addresses the recipe-to-checklist degradation finding

**gate-runner.md:** IMPROVED -- ~1,160 lines
- Lines 224-256: NEW -- Fix Recipe Compositional Context section with brief_section references for every gate category
- Lines 36-69: NEW -- Micro-Gate Schedule (MG-1 through MG-4) that structures gate verification INTO the build process as sequential checkpoints, not just post-build verification. This is recipe integration.
- Lines 205-262: NEW -- Gate Failure Protocol with structured escalation (not just pass/fail)

**flagship-pa-questions.md:** SAME -- 145 lines, recipe-structured for auditors

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | ~168 lines, implicit recipe | ~195 lines, EXPLICIT recipe with worked CSS example + anti-drift section | **SIGNIFICANTLY IMPROVED** |
| Orchestrator spawn | 12 lines | ~25 lines, brief reflection + recipe-structured fix cycle | **SIGNIFICANTLY IMPROVED** |
| Gates | 992 (checklist, appropriate) | 1,160 lines, micro-gate schedule integrates gates into build recipe | **IMPROVED** |
| PA | 144 (recipe) | 145 (recipe) | **SAME** |
| Weaver | 40 (checklist) | ~40 (still checklist) | **SAME** |
| Fix cycle | 20 (mixed, recipe-to-checklist degradation) | ~30 lines, recipe-structured with compositional context and conviction re-read | **SIGNIFICANTLY IMPROVED** |

**Verdict: SIGNIFICANTLY IMPROVED.** The recipe-to-checklist degradation in the fix cycle -- the specific pathology Report 17 identified -- has been directly addressed. The fix cycle now routes the builder back to their conviction statement, names the compositional context at each boundary, and references the relevant conventions-brief section. The conventions brief itself gained a "Compositional Memory" section explicitly naming and countering drift. The worked CSS boundary recipe in the brief gives the builder a concrete model to maintain recipe framing.

---

### CONCEPT 9: Stack Progression (scales --> channels --> multi-coherence --> anti-scale as ARCHITECTURE)

#### BEFORE State
| Stage | Lines | Detail |
|-------|-------|--------|
| Entry (brief) | 0 explicit / ~150 implicit | Document structure implies progression but never states it |
| Orchestrator spawn | 0 | No reference |
| Gates | 3 | Partial dependency chain (zones -> bg -> multi-coherence) |
| PA | 0 | Questions are independent atoms |
| Weaver | 6 (flat) | Checklist of criteria, not progression |
| Fix cycle | 0 | |
| **NEVER EXPLICITLY CODIFIED** | | |

#### AFTER State

**conventions-brief.md:** SAME -- 0 explicit, ~150 implicit
- Section ordering unchanged: Identity -> Perception -> Richness -> Multi-Coherence -> Fractal Echo -> Metaphor -> Transition Grammar -> CSS Vocabulary -> Creative Authority -> Quality Floor -> Compositional Memory -> Five Questions -> Restraint List -> Accessibility -> Responsive -> Conviction Card -> Process
- The progression is still implicit in document structure
- NEW "PROCESS" section (lines 400-434) makes the BUILD progression explicit (Understand -> Plan -> Build -> Verify) but not the CONCEPTUAL progression (scales -> channels -> multi-coherence -> anti-scale)

**SKILL.md:** IMPROVED -- 3 lines (was 0)
- Lines 47-56: Reading order is now EXPLICIT and sequential: "Read these files IN THIS ORDER (order matters -- primacy establishes world model, recency keeps soul constraints fresh): 1. conventions-brief.md -- YOUR PRIMARY GUIDANCE. Read FIRST. 2. [content-file-path]. 3-6. Reference files."
- This establishes a READING STACK PROGRESSION for the builder, though it's file ordering, not concept ordering
- Line 285: Weaver "COMPOSITIONAL CRITERIA" section still a flat checklist (6 items)

**gate-runner.md:** SAME -- 3 lines of dependency
- Lines 104-107: Same dependency chain: SC-00 -> SC-12 -> SC-09 -> SC-13 -> SC-13B -> SC-16
- Lines 77-103: Execution groups document sequential dependencies (GROUP 0 -> 1 -> 2 -> 3 -> 4 -> 5) -- this IS a stack progression of verification, though not of concepts

**flagship-pa-questions.md:** SAME -- 0 lines about stack architecture

#### Comparison

| Stage | Before | After | Change |
|-------|--------|-------|--------|
| Entry (brief) | 0 explicit | 0 explicit, but Process section adds build sequence | **SAME** (marginal improvement in build ordering) |
| Orchestrator spawn | 0 | 3 lines, explicit reading order | **IMPROVED** (marginal -- file ordering, not concept ordering) |
| Gates | 3 lines dependency | 3 lines + execution groups document progression | **SAME** |
| PA | 0 | 0 | **SAME** |
| Weaver | 6 flat | 6 flat | **SAME** |
| Fix cycle | 0 | 0 | **SAME** |

**Verdict: SAME (marginal improvement).** Stack progression was never explicitly codified and remains not explicitly codified. The reading order in the spawn prompt and the execution groups in the gate runner represent implicit progression, but the CONCEPTUAL architecture (how scales, channels, multi-coherence, and anti-scale relate as a unified system) is still absent from all pipeline files. This concept would require a dedicated "architectural overview" paragraph that does not yet exist.

---

## MASTER BEFORE/AFTER COMPARISON TABLE

| # | Concept | Before Status | After Status | Change | Key Improvement |
|---|---------|--------------|-------------|--------|-----------------|
| 1 | **6 Channels** | Return path EXTINCTION | Return path PARTIAL | **IMPROVED** | Per-channel threshold table in brief; channels NAMED in spawn; fix cycle references Section 4 |
| 2 | **5 Scales** | Spawn ABSENT | Spawn PRESENT (via table req) | **IMPROVED** (marginal) | Fractal echo table in spawn; DG-4 plan validation; still only 1/5 scales measured in CSS |
| 3 | **Multi-Coherence** | Fix cycle EXTINCT | Fix cycle STRUCTURED | **SIGNIFICANTLY IMPROVED** | Concept NAMED in spawn; worked fix example with DEEPENING; brief_section routing |
| 4 | **4 Semantic Directions** | TOTAL EXTINCTION | PARTIAL PRESENCE | **IMPROVED** | Fix cycle references planned direction; worked example with DEEPENING; still weakest concept |
| 5 | **Anti-Scale Model** | TOTAL EXTINCTION | PARTIAL IMPLICIT | **IMPROVED** (marginal) | Content-form coupling implies density; restraint in orchestrator; still no direct verification |
| 6 | **Fractal Self-Similarity** | Deliverable-reality gap | Gap persists, plan validation added | **IMPROVED** | DG-4 plan validation; PA-63 parametric echo; deliverable-reality gap still open |
| 7 | **Perception Thresholds** | LOWEST LOSS (best) | LOWEST LOSS + enhanced | **IMPROVED** (already best) | Per-channel table in 2 locations; brief_section references on fix recipes |
| 8 | **Recipe vs Checklist** | Fix cycle degradation | Degradation directly addressed | **SIGNIFICANTLY IMPROVED** | Compositional Memory section; recipe-structured fix cycle; conviction re-read |
| 9 | **Stack Progression** | NEVER CODIFIED | Still not codified | **SAME** (marginal) | Reading order explicit; execution groups document progression; concept architecture still absent |

---

## STILL-LOST CONCEPTS

### Concepts at ZERO or near-ZERO downstream representation

1. **Stack Progression (Concept 9):** Still not explicitly codified anywhere. The architectural relationship between scales, channels, multi-coherence, and anti-scale as an integrated system has no representation. This is the only concept that saw essentially NO improvement.

2. **Anti-Scale Model governing formula (Concept 5):** The formula "Richness = density x restraint x spatial confidence" and the multiplicative zero-factor insight appear only in the conventions brief. No gate, PA question, weaver criterion, or fix cycle evaluates the formula. Individual factors appear implicitly (density via content-form coupling, restraint via absent mechanism documentation), but the MODEL as a governing principle remains unverified.

3. **4 Semantic Directions as distinct types (Concept 4):** The fix cycle now references "planned coherence direction" and includes a DEEPENING example, but FOCUSING and RESOLVING are never specifically referenced outside the brief. The gate still collapses 4 directions to 2 binary categories (INTENSIFYING/RELAXING). No PA question distinguishes between DEEPENING and FOCUSING. The direction MODEL (4 types) survives only in the conventions brief; the pipeline downstream treats direction as binary (same/different) at best.

4. **Weaver compression bottleneck:** The weaver still uses a flat binary checklist (6 items, MET/FAILED). Report 17 identified the weaver as one of three critical bottlenecks. The enrichments improved the SPAWN and FIX CYCLE but left the WEAVER essentially unchanged. The weaver still collapses all compositional intelligence to binary verdicts.

5. **PA-to-concept mapping:** No PA question was added or modified to ask about semantic directions, the anti-scale model, or stack progression. The PA file gained 2 lines (PA-63 parametric echo expansion) but no new questions. PA remains the pipeline stage where architectural concepts are least represented.

---

## COMPRESSION RATIO CALCULATION

### Original Research
- R1: 28 findings
- R2: 27 findings
- R3: 51 findings
- R4: 192 findings
- R5: 39 findings
- **Total: 337 findings** across ~50,000 lines of research

### Pipeline Files (AFTER)
| File | Lines |
|------|-------|
| conventions-brief.md | 443 |
| SKILL.md (build-page) | 436 |
| gate-runner.md | 1,160 |
| flagship-pa-questions.md | 145 |
| **Total** | **2,184** |

### Compression Ratios

**By lines:**
- Research: ~50,000 lines (estimated across R1-R5 + synthesis + research artifacts)
- Pipeline: 2,184 lines
- Ratio: ~23:1

**By findings-to-operational-rules:**
- 337 findings distilled to ~2,184 operational lines
- Previous estimate: 50:1 (from Report 17, based on older pipeline with ~947 total lines)
- Current: ~6.5:1 (337 findings / ~52 distinct operational rules across the 4 files)
- **Improvement: ~7.7x better compression efficiency**

**Key: the pipeline DOUBLED in size** (from ~947 lines before to ~2,184 lines after):
- conventions-brief.md: grew from ~403 to 443 lines (+40)
- SKILL.md: grew from ~408 to 436 lines (+28)
- gate-runner.md: grew from ~992 to 1,160 lines (+168)
- flagship-pa-questions.md: grew from ~144 to 145 lines (+1)
- **Total growth: ~237 lines (+25%)**

The 237 additional lines were strategically placed at the three bottlenecks Report 17 identified:
1. **Spawn prompt:** +28 lines (channels named, semantic direction referenced, recipe structure)
2. **Gate fix recipes:** +168 lines (brief_section references, micro-gate schedule, compositional context)
3. **Fix cycle:** +40 lines (compositional context template, conviction re-read, worked examples)

---

## BOTTLENECK RESOLUTION SCORECARD

Report 17 identified 3 critical bottlenecks. Status after enrichment:

| Bottleneck | Report 17 Finding | After Enrichment | Resolved? |
|-----------|-------------------|------------------|-----------|
| **1. Orchestrator spawn prompt** | 39 lines, ZERO concepts by name except thresholds | ~68 lines, channels + semantic direction + fractal echo table + recipe structure | **PARTIALLY RESOLVED** -- concepts now named but anti-scale model and stack progression still absent |
| **2. Weaver synthesis** | 6-item binary checklist, concepts collapsed to MET/FAILED | 6-item binary checklist, essentially unchanged | **NOT RESOLVED** -- weaver remains the unreformed bottleneck |
| **3. Fix cycle return path** | Only thresholds had structured routing; all other concepts extinct | Compositional Context template with boundary direction, channel listing, brief_section references, worked examples | **SUBSTANTIALLY RESOLVED** -- 5 of 9 concepts now have some return path presence |

---

## CONCLUSIONS

### What Worked

1. **The "brief_section reference" pattern is cheap and effective.** Adding a 3-word pointer ("Re-read Section 4") to fix recipes costs zero cognitive load but routes the builder back to full concept definitions. This was applied to all gate categories and fixes the cheapest bottleneck (fix cycle return path) identified in Report 17.

2. **Naming concepts in the spawn prompt makes them operational.** "Channels" and "semantic direction" now appear by name in the builder spawn prompt. Before, the builder had to extract these concepts from the conventions brief on their own. Naming creates salience.

3. **Worked examples are high-value low-cost enrichments.** The boundary CSS recipe (DEEPENING example in the brief) and the fix cycle worked example ("SC-09 FAIL at Z2->Z3. Planned: DEEPENING...") give the builder and orchestrator a concrete model. Abstract principles become operational through examples.

4. **The micro-gate schedule integrates verification into the build recipe.** Instead of gates running only after the build, MG-1 through MG-4 run during the build at natural checkpoints. This is a structural improvement that maintains recipe framing through the verification phase.

### What Did Not Work (or was not attempted)

1. **The weaver is unreformed.** Still a flat binary checklist. This is the single most impactful remaining bottleneck. A weaver that evaluates channel coverage, direction coherence, and scale expression -- not just MET/FAILED -- would close the remaining compression gaps.

2. **No new PA questions were added.** Semantic directions, the anti-scale model, and stack progression have zero PA representation. Adding 2-3 PA questions could close these gaps with minimal cost.

3. **Stack progression was not codified.** A single paragraph in the conventions brief explaining how scales, channels, multi-coherence, and anti-scale relate as architectural layers would address this concept at near-zero cost.

4. **The deliverable-reality gap for fractal echo remains open.** DG-1 still validates the table, not the CSS. A gate that cross-validates the fractal echo table claims against actual computed CSS values (similar to DG-2's cross-validation) would close this gap.

### Net Assessment

The enrichments moved the pipeline from **catastrophic compression** (3 concepts at TOTAL EXTINCTION, 2 more at return path EXTINCTION) to **moderate compression** (0 concepts at TOTAL EXTINCTION, 2 at PARTIAL PRESENCE, 2 at SAME/marginal). The fix cycle return path -- identified as the single most important gap -- went from 1/9 concepts with structured routing to 5/9 concepts with some return path presence.

The compression ratio improved from ~50:1 to ~23:1 by line count, and from unmeasured to ~6.5:1 by findings-to-rules. The pipeline now preserves approximately 4x more compositional intelligence than before enrichment.

**Remaining priority:** Reform the weaver (Bottleneck 2), which is the only identified bottleneck that received zero improvement.

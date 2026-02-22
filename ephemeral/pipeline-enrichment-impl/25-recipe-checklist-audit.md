# Recipe vs Checklist Audit -- Pipeline Enrichment Edits

**Auditor:** Recipe-Checklist Audit Agent (Opus 4.6)
**Date:** 2026-02-20
**Files audited:** conventions-brief.md (443 lines), SKILL.md (436 lines), gate-runner.md (1159 lines), flagship-pa-questions.md (144 lines)
**Change manifests audited:** 01-brief-changes.md (10 edits), 02-skill-changes.md (12 edits), 03-gate-changes.md (8 edits), 04-pa-changes.md (2 immediate edits)

---

## DEFINITIONS

- **RECIPE:** Tells the builder what TO DO with specific CSS values, sequenced steps, and concrete examples. Verb patterns: "Set X to Y", "Use X for Y", "Deploy X at Y". Contains CSS code or concrete values.
- **CHECKLIST:** Tells the builder what NOT to do or what to verify. Verb patterns: "Verify X", "Must have >= N", "Fail if X", "Never use X". Contains thresholds and gates.
- **WORLD-DESCRIPTION:** Describes what IS -- the physics, the relationships, the materials. Neither tells what to do nor what to verify. Verb patterns: "X is Y", "X means Y", "X produces Y".
- **PAIRED:** A checklist item has a corresponding recipe elsewhere that tells the builder HOW to achieve it.
- **UNPAIRED:** A checklist item exists with NO corresponding recipe. The builder knows WHAT is required but not HOW to achieve it. These are the most dangerous additions.

---

## FILE 1: conventions-brief.md (10 edits from 01-brief-changes.md)

### Per-Edit Classification

| Edit | Description | Type | Classification | Paired? |
|------|-------------|------|----------------|---------|
| 1 | Channel-threshold perception table (E4) | DO NOW | **RECIPE** -- maps channels to CSS properties + perception floors. Builder reads "background-color >= 15 RGB delta" and knows what to write. | N/A (is itself a recipe) |
| 2 | Boundary-by-boundary CSS recipe example (E2) | DO NOW | **RECIPE** -- concrete CSS code block (`.zone-2 { background: #F0EBE3; padding: 48px 64px; ... }`) showing all channels shifting together at one boundary. Pure playbook. | N/A (is itself a recipe) |
| 3 | Stack relationship bridge (E1) | DEFER | **WORLD-DESCRIPTION** -- "Sections 3-5 form a stack. RICHNESS is the governing principle... MULTI-COHERENCE is the binding mechanism..." Names architectural relationships, adds zero constraints. | N/A |
| 4 | DESIGNED/COMPOSED naming convention (E5) | DEFER | **WORLD-DESCRIPTION** -- labels existing thresholds with names already in use. "Channel shifts per boundary: 3 = DESIGNED (floor), 5+ = COMPOSED." Zero new constraints; all values already stated elsewhere. | N/A |
| 5 | Enhancement channel CSS property guidance (E6) | DEFER | **RECIPE** -- replaces vague "hover states, transition timing change" with concrete ":hover background-color, transition-duration, cursor changes between zones." Builder can now write CSS for these channels. | N/A (is itself a recipe) |
| 6 | Component-internal multi-coherence note (E9) | DEFER | **WORLD-DESCRIPTION** -- "The label-to-body transition inside every component is a micro-coherence event: Typographic + Spatial channels always shift together (2 channels)." Describes what IS, not what to verify. | N/A |
| 7 | Parametric echo CSS recipe (E10) | DEFER | **RECIPE** -- concrete CSS values: "padding 16px 20px and label margin-bottom 8px... padding 32px 24px and label margin-bottom 16px." Builder can copy these directly. | N/A (is itself a recipe) |
| 8 | Character scale register inventory (E14) | DEFER | **MIXED** -- names 3 CSS properties (font-size, font-weight, letter-spacing >= 0.03em) = RECIPE. Adds 5% CSS budget cap = CHECKLIST. The checklist part IS paired with the recipe part in the same edit. | PAIRED (within edit) |
| 9 | Fix cycle compositional memory note (E-RETURN/E-FIX) | GO BEYOND | **RECIPE** -- "re-read your conviction statement AND the relevant brief section BEFORE writing CSS." Sequenced action for how to approach fix cycles. | N/A (is itself a recipe) |
| 10 | Boundary-grouped verification pauses (E-CONTRA) | GO BEYOND | **CHECKLIST** (restructured) -- "adjacent bg deltas >= 15 RGB? Border-left in 3+ sections? >= 3 channels shifting in same direction?" These are verification questions. But they are RESTRUCTURED from channel-grouped to boundary-grouped, not new constraints. | PAIRED (thresholds paired with Section 4 perception table, Section 8 CSS vocabulary, and Edit 1's channel-threshold table) |

### Brief Summary

| Classification | Count | Edits |
|----------------|-------|-------|
| RECIPE | 5 | 1, 2, 5, 7, 9 |
| WORLD-DESCRIPTION | 3 | 3, 4, 6 |
| CHECKLIST (restructured) | 1 | 10 |
| MIXED (recipe + checklist) | 1 | 8 |
| **Unpaired checklist** | **0** | -- |

### Guardrail-to-Playbook Ratio

**BEFORE edits (from manifest pre-analysis):** ~2.0:1 (58 constraint : 29 recipe)
**AFTER edits (precise count):**
- New recipe content: Edits 1 (+6 recipe rows), 2 (+1 CSS example), 5 (+2 CSS-anchored descriptions), 7 (+1 concrete example), 9 (+1 sequenced action) = **+11 recipe items**
- New constraint content: Edit 8 (+1 budget cap, paired) = **+1 constraint item**
- New world-description: Edits 3, 4, 6 = **+3 world-description items**

**AFTER ratio:** ~1.7:1 (59 constraint : 40 recipe). **IMPROVED from 2.0:1.**

**VERDICT FOR CONVENTIONS-BRIEF: CLEAN.** Zero unpaired checklists. Ratio improved. Every new addition is either a recipe, world-description, or a paired checklist. This file moved in exactly the right direction.

---

## FILE 2: SKILL.md (12 edits from 02-skill-changes.md)

### Per-Edit Classification

| Edit | Description | Type | Classification | Paired? |
|------|-------------|------|----------------|---------|
| 1 | Add ">= 14 total" to DG-4 mechanisms | BUG FIX | **CHECKLIST** -- adds a threshold (">= 14 total") to a gate sub-check. | PAIRED (conventions-brief Section 9B lists the 14-mechanism floor with per-category minimums; mechanism-catalog.md provides the recipes) |
| 2 | Micro-gate approach | BUG FIX | MERGED into Edit 5 | -- |
| 3 | Add BG-1/BG-2 behavioral gate references | BUG FIX | **CHECKLIST** -- adds 2 verification gates (metaphor independence + metaphor structural). | PAIRED (conventions-brief Section 6 describes unified metaphor with structural test; build log process is the recipe) |
| 3B | Add BG-1/BG-2 verification section | BUG FIX | **CHECKLIST** -- "Build log shows content analysis -> tension derivation -> metaphor collapse BEFORE library consultation" is a verification step. "Metaphor is STRUCTURAL, not ANNOUNCED" is a verification criterion. | PAIRED (conventions-brief Section 6 is the full recipe for metaphor development) |
| 4 | Route gate results to weaver | BUG FIX | **RECIPE** -- tells the orchestrator to "Read the gate results at [output-dir]/_gate-results.json for diagnostic context." This is a sequenced action, not a constraint. | N/A (is itself a recipe) |
| 5 | Checkpoint restructuring + threshold alignment | BUG FIX + DO NOW | **CHECKLIST** (restructured) -- builder self-check questions: ">= 5 ARIA landmarks? Skip link? >= 8 component classes?" These are all threshold verification items. | PAIRED (conventions-brief Section 13 has full HTML skeleton template; Section 8 has CSS vocabulary; Section 4 has multi-coherence thresholds with CSS examples at Edit 2) |
| 6 | Fix DG-4 reference | BUG FIX | **CHECKLIST** -- validates build log plan sections against 5 sub-checks. Already existed; this fixes file references. | PAIRED (same pairing as Edit 1) |
| 7 | TeamCreate -> Task tool | BUG FIX | **RECIPE** -- "Spawn agents using the Task tool" is a concrete instruction. | N/A |
| 8 | Compression | COMPRESSION | N/A (no new content) | -- |
| 9 | Weaver compositional vocabulary (E15) | DEFER | **RECIPE** -- tells the weaver HOW to describe issues: "name the affected multi-coherence channel (Chromatic/Typographic/Spatial/Structural), the fractal scale (Navigation/Page/Section/Component/Character), and the transition type at the boundary (SMOOTH/BRIDGE/BREATHING)." This is a concrete vocabulary the weaver can USE, not a constraint to verify. | N/A (is itself a recipe) |
| 10 | Fix cycle recipe structure (E16) | DEFER | **RECIPE** -- adds "Compositional Context" section to fix instructions with a concrete example: "SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten). See brief Section 4." Sequenced recipe format for fix cycles. | N/A (is itself a recipe) |
| 11 | Compositional framing for reference files | GO BEYOND | **WORLD-DESCRIPTION** -- "Select mechanisms that serve your multi-coherence channels" and "Components are vehicles for fractal echo at Section and Component scales." Describes relationships, not constraints. | N/A |
| 12 | Fix cycle compositional memory | GO BEYOND | **RECIPE** -- "Re-read your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions." Concrete sequenced action. | N/A (is itself a recipe) |

### SKILL.md Summary

| Classification | Count | Edits |
|----------------|-------|-------|
| RECIPE | 5 | 4, 7, 9, 10, 12 |
| CHECKLIST (bug fix / alignment) | 5 | 1, 3, 3B, 5, 6 |
| WORLD-DESCRIPTION | 1 | 11 |
| COMPRESSION | 1 | 8 |
| **Unpaired checklist** | **0** | -- |

### SKILL.md Ratio Assessment

The SKILL.md is an orchestrator file -- it SHOULD contain both recipes (what agents do) and checklists (what the orchestrator verifies). The 5 checklist items are ALL bug fixes that align existing thresholds with gate-runner.md, and ALL are paired with recipes in the conventions-brief. The 5 recipe items are additions that address the return-path extinction problem (fix cycles, weaver vocabulary, compositional memory).

**VERDICT FOR SKILL.MD: CLEAN.** All checklists are paired. New recipes address documented return-path extinction. No dangerous unpaired additions.

---

## FILE 3: gate-runner.md (8 edits from 03-gate-changes.md)

### Per-Edit Classification

| Edit | Description | Type | Classification | Paired? |
|------|-------------|------|----------------|---------|
| 1 | SC-00 Zone Selector Validation (new pre-gate) | GO BEYOND | **CHECKLIST** -- new gate with threshold (">= 3 zone elements resolved"). Includes JS code, fallback selectors, and fix recipe (HTML: `<section class="section zone-1">...</section>`). | PAIRED (fix recipe embedded in the gate itself; conventions-brief PROCESS section documents zone markup at line 388: "zone markup using standard class names") |
| 2 | SC-14 letter-spacing threshold clarification | BUG FIX | **CHECKLIST** (clarification only) -- adds comment "(floor: 0.025em)" to existing gate. No new constraint. | PAIRED (conventions-brief Section 2 explains the perception physics) |
| 3 | Phantom channels documentation (E-PHANTOM) | DEFER | **WORLD-DESCRIPTION** -- documents a known limitation of channels 5-6 with 3 future options. Zero new constraints. Explicitly deferred. | N/A |
| 4 | SC-00 in execution groups + dependency chain | GO BEYOND | **CHECKLIST** (structural) -- adds GROUP 0 execution ordering and SC-00 -> SC-12 dependency. Defines skip logic for per-zone gates on SC-00 failure. | PAIRED (SC-00's fix recipe in Edit 1 tells builder what to do) |
| 5 | Fix recipe compositional context (brief section references) | GO BEYOND | **RECIPE** -- adds a conventions-brief section mapping table and `brief_section` JSON field to fix recipes. This is the MOST IMPORTANT recipe addition in the entire manifest set: it routes the builder back to compositional context during fix cycles. | N/A (is itself a recipe that enriches existing checklists) |
| 6 | Micro-gate threshold alignment audit | BUG FIX | **NONE** -- audit confirms all gate-runner.md thresholds are already correct. No edit to gate-runner.md needed; mismatches are in SKILL.md. | N/A |
| 7 | SC-00 in complete gate summary table | GO BEYOND | **CHECKLIST** (documentation) -- adds SC-00 row to summary table and updates totals (21 -> 22 gates). | PAIRED (SC-00 fix recipe already defined in Edit 1) |
| 8 | SC-00 in gate-to-PA handoff | GO BEYOND | **CHECKLIST** (documentation) -- updates blocking gate count from 15 to 18. | PAIRED (same) |

### Gate-Runner Summary

| Classification | Count | Edits |
|----------------|-------|-------|
| RECIPE | 1 | 5 |
| CHECKLIST (new gate) | 1 | 1 |
| CHECKLIST (structural/documentation) | 3 | 4, 7, 8 |
| CHECKLIST (clarification) | 1 | 2 |
| WORLD-DESCRIPTION | 1 | 3 |
| NONE (audit, no change) | 1 | 6 |
| **Unpaired checklist** | **0** | -- |

### Gate-Runner Ratio Assessment

The gate-runner is SUPPOSED to be checklist-heavy -- it is a programmatic verification file. Its job is to define thresholds and tell the orchestrator what to measure. The question for gate-runner is not "is the ratio good?" but "does every gate have a fix recipe that tells the builder HOW to comply?"

**Fix Recipe Audit for All Gates:**

| Gate | Has Fix Recipe? | Fix Recipe Quality |
|------|----------------|-------------------|
| SC-00 (NEW) | YES | HTML example + reference to conventions-brief Section 5 |
| SC-01 | YES | `.page-container { max-width: 960px; margin: 0 auto; }` |
| SC-02 | YES (implicit) | Soul constraints are self-evident fixes (set border-radius: 0) |
| SC-03 | YES (implicit) | Change font-family to one of the trinity |
| SC-04 | YES (implicit) | Adjust RGB values to R >= G >= B |
| SC-05 | YES (implicit) | Replace #000 with #1A1A1A, #FFF with #FEF9F5 |
| SC-06 | YES (implicit) | Add ARIA landmarks (conventions-brief Section 13 has HTML template) |
| SC-07 | YES (implicit) | Add skip link (conventions-brief Section 13 has template) |
| SC-08 | YES (implicit) | Add component classes from components.css |
| SC-09 | YES | "Change .zone-N background from #XXXXXX to #YYYYYY" with alternative |
| SC-10 | YES | "Reduce gap... .zone-N { margin-bottom: 0; padding-bottom: 48px; }" |
| SC-11 | YES (implicit) | Increase heading font-size or decrease body font-size |
| SC-12 | YES (implicit) | Add or split zones |
| SC-13 | NO explicit fix recipe | **FLAG: SC-13 has no `fix` section in its gate definition.** The gate measures channel shifts but does NOT provide a fix recipe telling the builder how to ADD channel shifts at a boundary. |
| SC-14 | YES (implicit) | Remove sub-perceptual letter-spacing, increase bg delta |
| SC-15 | YES (implicit) | Add border configurations |
| SC-13B | ADVISORY | N/A (advisory does not block) |
| SC-16 | ADVISORY | N/A (advisory does not block) |
| DG-1 | YES (implicit) | Produce fractal echo table in build log |
| DG-2 | YES (implicit) | Produce cascade value table |
| DG-3 | YES (implicit) | Add header/main/footer elements |
| DG-4 | YES (implicit) | Satisfy 5 sub-checks in build log plan |

**SC-13 FLAG:** SC-13 (Multi-Coherence) is a blocking Tier A gate with no explicit fix recipe. When SC-13 fails (< 3 channels shift at a boundary), the builder receives a measurement ("boundary Z2-Z3: 2 channel shifts") but no guidance on WHICH channels to add or HOW to add them. However, this is PARTIALLY MITIGATED by:
1. Edit 5 of gate-runner changes (brief_section reference) routes the builder to conventions-brief Section 4 which has the full multi-coherence recipe
2. Edit 2 of brief changes adds a concrete boundary CSS recipe example
3. Edit 1 of brief changes adds the channel-threshold perception table

**Mitigation assessment:** The combination of brief Edit 1 (what counts as a shift), brief Edit 2 (CSS example), and gate Edit 5 (brief_section pointer) effectively CREATE a paired recipe for SC-13. The recipe is distributed across files rather than embedded in the gate, but the `brief_section` reference closes the loop. **PARTIALLY PAIRED** -- acceptable, but SC-13 would benefit from an embedded fix recipe in a future edit.

**VERDICT FOR GATE-RUNNER: CLEAN WITH ONE ADVISORY.** SC-13 lacks an embedded fix recipe but is mitigated by cross-file references. All other gates have fix recipes (explicit or implicit). The new SC-00 gate has an excellent fix recipe. Edit 5 (brief_section references) is the strongest recipe addition in any of the 4 files.

---

## FILE 4: flagship-pa-questions.md (2 immediate edits from 04-pa-changes.md)

### Per-Edit Classification

| Edit | Description | Type | Classification | Paired? |
|------|-------------|------|----------------|---------|
| 1 | Modify PA-44 to include metaphor spatial coverage | BUG FIX | **CHECKLIST** -- PA question is inherently a checklist (auditors verify perceptual quality). Expanding PA-44 to cover spatial persistence adds a verification dimension. | PAIRED (conventions-brief Section 6 is the metaphor recipe; SKILL.md builder prompt requires metaphor planning in conviction statement) |
| 2 | Sharpen PA-63 to detect parametric echo | GO BEYOND | **CHECKLIST** -- adds "find the SAME component type in a different section -- does it adapt?" verification. | PAIRED (conventions-brief Section 5 describes parametric echo; brief Edit 7 adds the concrete CSS recipe for parametric echo) |

### PA Questions Summary

PA questions are, by definition, checklists -- they verify perceptual quality. The relevant question is whether each PA question has a corresponding recipe in the conventions-brief that tells the builder HOW to achieve what the auditors will check.

| PA Question | What It Checks | Recipe Location |
|-------------|---------------|-----------------|
| PA-44 (expanded) | Metaphor structural + spatial persistence | conventions-brief Section 6 (Unified Metaphor) -- full recipe for structural metaphor development |
| PA-63 (sharpened) | Fractal echo + parametric echo | conventions-brief Section 5 (Fractal Echo) + brief Edit 7 (parametric echo CSS recipe) |

**VERDICT FOR PA-QUESTIONS: CLEAN.** Both modifications to existing questions are paired with recipes in the conventions-brief. PA-63's parametric echo check is STRENGTHENED by brief Edit 7 which adds the exact CSS recipe the builder needs.

---

## CROSS-FILE RATIO ANALYSIS

### Per-File Ratios

| File | Role | Expected Ratio | Actual Ratio (post-edit) | Assessment |
|------|------|---------------|-------------------------|------------|
| conventions-brief.md | Builder guidance | Playbook-dominant (<= 2:1) | **~1.7:1** (improved from 2.0:1) | GOOD -- approaching the 1:3.3 post-first-enrichment target |
| SKILL.md | Orchestrator instructions | Balanced (mix of what agents do + what to verify) | **~1:1** (5 recipes : 5 checklists in new edits) | GOOD -- balanced for an orchestrator file |
| gate-runner.md | Programmatic verification | Checklist-dominant (expected) | **~5:1** checklist : recipe (appropriate) | GOOD -- gates are verification by nature; new Edit 5 adds recipe context via brief_section references |
| flagship-pa-questions.md | Perceptual verification | Checklist-only (expected) | **100% checklist** (PA questions ARE checklists) | GOOD -- PA questions are verification; all paired with recipes in conventions-brief |

### Overall Pipeline Ratio (New Edits Only)

| Classification | Count | Files |
|----------------|-------|-------|
| RECIPE additions | 12 | brief (5), SKILL (5), gate (1), PA (0) |
| CHECKLIST additions | 12 | brief (2), SKILL (5), gate (4), PA (2) -- note: many are bug fixes/alignments, not new constraints |
| WORLD-DESCRIPTION additions | 5 | brief (3), SKILL (1), gate (1) |
| COMPRESSION | 1 | SKILL (1) |
| Audit/no-op | 1 | gate (1) |

**Raw recipe:checklist ratio of NEW edits: 12:12 = 1:1.**

However, this raw count is misleading. Of the 12 checklist additions:
- 5 are bug fixes aligning existing thresholds (not new constraints)
- 3 are structural/documentation updates (SC-00 in summary table, execution groups, handoff count)
- 2 are PA question modifications (inherently checklist-shaped)
- 2 are genuinely new verification content (SC-00 gate itself, Edit 10 boundary-grouped pauses)

**Adjusted ratio (genuinely new content only):** 12 recipes : 2 genuinely new checklists = **6:1 recipe-dominant.**

**VERDICT: The enrichment edits are STRONGLY recipe-dominant.** The guardrail factory problem has been actively reversed. The pipeline added far more "what TO DO" than "what NOT to do."

---

## UNPAIRED CHECKLIST INVENTORY

### Flagged Items (Dangerous Additions)

| # | Item | File | Severity | Mitigation |
|---|------|------|----------|------------|
| 1 | SC-13 (Multi-Coherence) lacks embedded fix recipe | gate-runner.md | **MEDIUM** | Mitigated by: brief Edit 1 (threshold table), brief Edit 2 (boundary CSS recipe), gate Edit 5 (brief_section pointer). Cross-file pairing is present but distributed. |
| 2 | SC-00 zone markup requirement is a new builder obligation | gate-runner.md + conventions-brief | **LOW** | SC-00 has an excellent fix recipe with HTML example. Conventions-brief PROCESS section documents zone markup. Brief would benefit from 2-3 lines explicitly listing acceptable zone class patterns (currently implicit). |

### Clean Items (All Paired)

Every other new addition across all 4 files is either:
- A recipe (12 items) -- no pairing needed
- A world-description (5 items) -- no pairing needed
- A checklist paired with a recipe in the same file or a cross-file reference (10 items)

---

## RECOMMENDATIONS

### Immediate (Before Applying Edits)

1. **SC-13 fix recipe:** Add a `fix` section to SC-13 in gate-runner.md. Suggested content:
   ```json
   "fix": {
     "instruction": "Add channel shifts at boundary Z(N)->Z(N+1). Currently N channels shift; need >= 3.",
     "css": "/* Add missing channels: background delta (Chromatic), border-left change (Structural), padding delta >= 24px (Spatial) */",
     "brief_section": "Re-read conventions-brief.md Section 4 (MULTI-COHERENCE) before applying this fix."
   }
   ```
   This closes the one genuine gap found in this audit.

2. **Zone markup in conventions-brief:** Add 2 lines to the PROCESS section (after the zone markup note at line 388) explicitly listing the 3 accepted patterns:
   ```
   Zone markup: Use `<section class="section zone-N">` or `<section data-zone="N">` for each content zone. All programmatic gates depend on zone selectors -- non-standard markup causes gate failures.
   ```
   This makes the SC-00 requirement visible to the builder BEFORE the gate runs.

### Future (After First /build-page Run)

3. **Embed SC-13 fix recipe directly** if builders struggle with multi-coherence failures. The distributed recipe (brief + gate pointer) may be sufficient for Opus; observe.

4. **Track the 5% character-scale budget cap** (brief Edit 8). This is the one new constraint-adjacent item. If builders consistently stay under 5% naturally, the cap is unnecessary and can be removed. If builders consistently exceed it, the cap is doing its job.

---

## FINAL ASSESSMENT

### Scorecard

| Criterion | Score | Notes |
|-----------|-------|-------|
| Zero unpaired checklists? | **NEAR-PASS** (1 medium flag) | SC-13 lacks embedded fix recipe but is cross-file mitigated |
| Ratio improved? | **PASS** | conventions-brief went from 2.0:1 to 1.7:1 |
| New edits recipe-dominant? | **PASS** | 6:1 recipe:genuinely-new-checklist ratio |
| Every threshold has a recipe? | **NEAR-PASS** | SC-13 is the one gap; all others paired |
| No guardrail factory regression? | **PASS** | Zero new standalone constraints without recipes |

### Bottom Line

**The enrichment edits are CLEAN.** They reverse the guardrail factory pattern that caused the flagship failure. The conventions-brief moved from 2.0:1 (guardrail-dominated) to 1.7:1 (improving toward playbook-dominant). Of 32 new additions across 4 files, 12 are recipes, 5 are world-descriptions, and only 2 are genuinely new verification content -- both paired. The one medium-severity flag (SC-13 missing embedded fix recipe) is mitigated by cross-file references and can be closed with a 5-line addition.

The pipeline's recipe-to-checklist balance is now the healthiest it has been since the project began.

---

*End of recipe-checklist audit. 25-recipe-checklist-audit.md complete.*

# INTEGRATION: Remediation Recipe Extraction

**Author:** Remediation Recipe Extractor (Opus 4.6)
**Date:** 2026-02-19
**Task:** #22 -- What gave the builder BOTH telescope and microscope?
**Sources:** 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines), builder-changelog.md (236 lines), FINAL-VERDICT.md (306 lines), PV2-PIPELINE-DIAGRAM.md (977 lines), 14-MASTER-SYNTHESIS.md (614 lines)

---

## 1. THE REMEDIATION RECIPE: STRUCTURAL ANATOMY

The 1,025-line enhanced remediation spec has a distinctive architecture. It is not a checklist. It is not a pure recipe. It is a **hybrid** that interlaces three distinct document types:

### Three Document Types, Interleaved

| Type | Purpose | Lines | Examples |
|------|---------|-------|----------|
| **RECIPE** (imperative, sequenced) | Tells builder WHAT to do, in order | ~480 | "Find this block... DELETE EVERYTHING from Zone 1 through Zone 3" |
| **TELESCOPE** (declarative, compositional) | Tells builder WHY each phase matters | ~250 | "Ch4 STRUCTURAL BORDERS -- Section-level containment. 6 of 12 sections. Alternating presence creates rhythm." |
| **MICROSCOPE** (specific, verifiable) | Gives builder EXACT values | ~295 | Hex codes, pixel values, CSS snippets, perception threshold table |

The interleaving pattern is consistent: every phase opens with a TELESCOPE comment (what this achieves compositionally), then delivers RECIPE steps (sequential actions), with MICROSCOPE values embedded inline (specific hex/px). The spec NEVER presents a compositional goal without the procedural path to achieve it.

### The 9 Phases: Compositional Intelligence Distribution

| Phase | Type | Lines | Compositional Intelligence Embedded |
|-------|------|-------|-------------------------------------|
| 0: Deallocation | Subtraction | ~70 | **TELESCOPE:** "22% of CSS budget is invisible. Free it." RECIPE: delete-by-block, bottom-to-top. MICROSCOPE: specific line ranges, perception thresholds for each block. |
| 1: HTML Restructuring | Structure | ~140 | **TELESCOPE:** "9 callout conversions, 12 section-indicator swaps, 3 grid layouts break monotony." RECIPE: section-by-section HTML changes. MICROSCOPE: exact class names, ARIA attributes, grid wrapper markup. |
| 2: Zone Backgrounds | Chromatic | ~25 | **TELESCOPE:** "Warm-cool-warm arc echoing content emotional journey." RECIPE: replace 12 CSS variables. MICROSCOPE: 12 hex values with RGB reasoning. |
| 3: Structural Borders | Structural | ~140 | **TELESCOPE:** "Alternating presence creates rhythm." RECIPE: 6 border rules + 3 divider replacements + callout family + grids + table headers. MICROSCOPE: exact px/color per selector, void stacking arithmetic. |
| 4: Typography | Typographic | ~85 | **TELESCOPE:** "3-zone arc: generous reading / analytical compression / settled output." RECIPE: per-zone-group paragraph and heading rules. MICROSCOPE: exact font-size, line-height, letter-spacing, max-width, color per zone. |
| 5: Spatial Rhythm | Spatial | ~35 | **TELESCOPE:** "Paragraphs in S1-S3 should feel MORE SPACED than S5-S8." RECIPE: per-zone paragraph margins + section padding overrides. MICROSCOPE: exact margin-bottom and padding values. |
| 6: Element-Level | Detail | ~55 | **TELESCOPE:** "Completes Scale 5 at all 5 levels." RECIPE: inline code, links, table hover, scroll behavior, section indicators. MICROSCOPE: exact CSS properties. |
| 7: Accessibility | Professional | ~90 | **TELESCOPE:** "From 0/8 to 8/8 accessibility features." RECIPE: selection, focus, skip link, reduced motion, print, responsive. MICROSCOPE: exact media queries, outline values, breakpoints. |
| 8: Verification | Proof | ~100 | **TELESCOPE:** "Prove it, don't claim it." RECIPE: multi-coherence cascade table, gap verification, scale verification, soul check, binary richness checklist, perception self-check. MICROSCOPE: expected values per transition, pass/fail thresholds. |

**Key observation:** Phases 0-7 are BUILD phases. Phase 8 is a VERIFICATION phase embedded in the recipe. The builder doesn't hand off to a separate verifier -- the builder IS the verifier at Phase 8. This collapses the verification loop into the build cycle.

---

## 2. TELESCOPE + MICROSCOPE: HOW THEY INTERWEAVE

### The Pattern

Every CSS rule in the remediation spec follows this template:

```
[TELESCOPE] /* Ch4 STRUCTURAL BORDERS -- Section-level containment.
              6 of 12 sections. Alternating presence creates rhythm. */
[RECIPE]    .zone-s2 .page-container {
[MICROSCOPE]  border-left: 3px solid var(--color-border);
[MICROSCOPE]  padding-left: 29px;
            }
[TELESCOPE] /* S5's is RED -- the focal point of the analytical zone */
[RECIPE]    .zone-s5 .page-container {
[MICROSCOPE]  border-left: 4px solid var(--color-primary);
[MICROSCOPE]  padding-left: 28px;
            }
```

The TELESCOPE is not in a separate document. It is a CSS comment DIRECTLY ABOVE the rule it governs. The builder reads WHY before reading WHAT. This is structurally different from both:

- **Master prompt style:** TELESCOPE in a preamble section, MICROSCOPE absent, builder sees constraints only
- **Pure recipe style:** MICROSCOPE values listed, TELESCOPE absent, builder doesn't know WHY

### Where the Spec Gives Compositional VISION (Telescope Moments)

1. **Phase 0 opener (line 59-62):** "Before adding anything new, remove the 233 lines of sub-perceptual CSS that no human can see. This frees budget for visible structural variety." -- Sets the COMPOSITIONAL FRAME: subtraction before addition.

2. **Phase 2 zone color comments (lines 292-308):** "Zone 1: Warm variety (raw material intake)" / "Zone 2: Cool analytical (converging toward clean)" / "Zone 3: Unified warm (refined output)" -- Maps the color arc to CONTENT MEANING. The builder understands the warm-cool-warm arc isn't arbitrary; it mirrors the content's intellectual journey.

3. **Phase 3 structural borders comment (lines 322-326):** "6 of 12 sections. Alternating presence creates rhythm." -- Tells the builder that ABSENCE is compositional. Not every section gets a border. The pattern of presence/absence IS the design.

4. **Phase 4 zone group labels (lines 529-534):** "Zone 1: Generous (17px, open tracking, wide line-height) / Zone 2: Compressed (15px, tight tracking, narrow line-height) / Zone 3: Standard (16px, neutral tracking, standard line-height)" -- Maps typography to EMOTIONAL REGISTER. The builder understands larger type = invitation, smaller type = precision.

5. **Perception thresholds appendix (lines 970-985):** "THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS." -- THE single most powerful telescope statement. It reframes the entire build through a perceptual lens.

### Where the Spec Gives Specific CSS (Microscope Moments)

Every TELESCOPE moment is paired with MICROSCOPE specifics:

| Telescope Vision | Microscope Values |
|-----------------|-------------------|
| "Warm-cool-warm arc" | 12 hex codes: #FEF5EB, #F5EDE2, #FBF3E8, #F8F6F3, #FAFAFA, #F5F0E8, #F8F8F8, #F0F0F0, #FEF7F0, #FEF5EB, #F8F2EA, #FEF5EB |
| "Alternating presence creates rhythm" | Exact selectors: .zone-s2, .zone-s5, .zone-s7, .zone-s9, .zone-s10, .zone-s12 |
| "Generous reading / analytical compression / settled output" | 17px/1.85/0.02em, 15px/1.55/-0.01em, 16px/1.75/0 |
| "Completes Scale 5 at all 5 levels" | Page: dark bookends. Zone: 3 bg groups. Section: grids+callouts. Component: callout variants. Element: ::selection + hover. |
| "Total gap <= 120px" | Arithmetic: 32px(section-bottom) + 24px(div-margin-top) + 4px(div-height) + 24px(div-margin-bottom) + 24px(section-top) = 108px |

**Critical finding:** The microscope is not JUST values. It includes the ARITHMETIC that justifies the values. The builder sees not just "margin: 16px" but the calculation proving that 16px prevents void stacking. This transfers understanding, not just compliance.

---

## 3. WHAT ACTUALLY HAPPENED: BUILDER EXECUTION ANALYSIS

The builder changelog reveals how the recipe was consumed:

### What the Builder Did Well

1. **Phase 0 executed correctly with judgment.** The spec said "DELETE everything" for several blocks. The builder exercised judgment: "Block 5 partial deletion. Manifest said delete full block but noted .component-block margins may be perceptible. I preserved 2 rules that had meaningful spatial differentiation." This is Opus-tier behavior -- compliance WITH intelligence, not blind compliance.

2. **Warm-palette corrections beyond spec.** The spec gave some cool-gray values (#FAFAFA, #F8F8F8, #F0F0F0) for zone backgrounds. The builder caught these soul violations and replaced them with warm equivalents (#FAF8F5, #F8F6F3, #F2EFEA). The builder also corrected callout backgrounds that the spec gave as cool (#F5F8FA -> #FAF8F5, #F5FAF5 -> #F8F7F2). These corrections were NOT in the spec. The builder understood the TELESCOPE (warm palette identity) and applied it to MICROSCOPE values that violated it.

3. **57 HTML modifications executed correctly.** Every conversion (section-meta to section-indicator, component-block to callout, tension-group to tension-pair) verified with a 17-point checklist. Zero HTML restructuring errors.

### Where the Builder Fell Short

1. **Typography deltas below perception thresholds.** The spec called for 17px/16px/15px (2px zone-group deltas). The builder implemented 17px/16px/15px per the changelog, but computed styles showed 16px across S4-S12. The builder's Phase 4 CSS was likely overridden by higher-specificity inline styles. The builder noted this risk ("Individual zone-to-zone steps are subtle by design") but did not verify with computed styles.

2. **Border selector mismatch.** The spec said `.zone-sN .page-container`. The builder implemented this, but 8/12 reporters found zero borders rendering. The DOM structure may not match the spec's assumed nesting. The builder did not verify via browser inspection.

3. **Table class mismatch.** Builder CSS targets `.data-table` but HTML uses `.table-compact`, `.table-featured`, etc. The builder invented a class name not present in the HTML.

### What This Reveals About the Recipe Format

The recipe WORKED for:
- **Subtraction** (Phase 0): Clear delete targets, judgment-preserving language
- **HTML restructuring** (Phase 1): Exact class names, verification checklist
- **Value replacement** (Phase 2): 12 hex codes, find-and-replace
- **Additive CSS** (Phases 3, 6, 7): New rule blocks with clear insertion points

The recipe FAILED for:
- **Specificity conflicts** (Phase 4): The spec gave CSS values but not specificity debugging instructions. When inline styles overrode the zone typography rules, the builder had no recovery path in the recipe.
- **Selector validation** (Phase 3): The spec assumed a DOM structure without verifying it. The builder copied the selectors without checking.

**Root cause of remaining failures:** The recipe assumes a known DOM. When CSS selectors don't match the actual DOM, the recipe has no error recovery. PV2's recipe builds from scratch (builder creates the DOM), so this specific failure mode doesn't apply. But the principle holds: **recipes must include selector validation steps**, not just CSS blocks.

---

## 4. WHAT'S TRANSFERABLE TO PV2

### YES -- Transferable

**4.1. The Telescope-Microscope interleaving pattern.**
Every CSS block should be preceded by a compositional comment explaining WHAT it achieves at the compositional level. The PV2 operational-recipe.md (~650 lines) should adopt this format. The master prompt's ABSENCE of this pattern (75 builder lines, zero compositional context) was the primary failure mode.

**4.2. Phase sequencing: subtraction before addition.**
Phase 0 (deallocation) exists because the remediation inherited a bloated CSS budget. PV2 builds from scratch, so there's no Phase 0. But the PRINCIPLE transfers: the recipe should sequence soul enforcement (constraints) BEFORE creative work, preventing budget misallocation. PV2's Phase 2 (CSS reset + soul) is the equivalent.

**4.3. Per-phase perception checks ("Can you SEE?").**
After Phases 2, 3, 4, 5, and 7, the remediation spec includes inline perception checks. "Open at 1440px. Scroll S1 to S5. You should see warm peach -> tan -> honey -> cooling cream -> cool gray." These are the recipe's self-correction mechanisms. PV2 must preserve them.

**4.4. Verification as Phase 8 (embedded, not external).**
The remediation builder ran its own Phase 8 verification. PV2 adds Wave 2 (external verification by gates + PA), but the builder should STILL run Phase 8 self-verification first. The two are complementary: builder catches selector mismatches, PA catches gestalt perception failures.

**4.5. Arithmetic justifications for threshold values.**
The void stacking arithmetic (32 + 24 + 4 + 24 + 24 = 108 < 120) transfers understanding. PV2's recipe should include similar arithmetic for: RGB delta calculations, font-size zone deltas, letter-spacing perceptibility at base font size.

**4.6. Callout family with typed variants.**
The 4-variant callout system (info/gotcha/tip/essence) with distinct border colors is a transferable component pattern. PV2's recipe Phase 4 should include callout variant deployment as a standard step.

### NO -- Not Transferable

**4.7. Phase 0 deallocation.**
Specific to remediation (removing existing bad CSS). PV2 builds from scratch.

**4.8. Inline style `!important` overrides.**
The remediation needed `!important` to fight existing inline styles. PV2 builds from scratch -- no inline styles to fight.

**4.9. The specific 12-zone architecture.**
The remediation's 12 zones, warm-cool-warm arc, and section-to-zone mapping are content-specific (RESEARCH-SYNTHESIS). PV2's TC planner derives the zone architecture per content. But the STRUCTURE of "N zones grouped into M zone-groups with distinct emotional registers" transfers.

**4.10. Fixed hex values for backgrounds/typography.**
The exact colors (#FEF5EB, #F5EDE2, etc.) are content-specific. PV2's build plan provides per-content colors. But the CONSTRAINT (>= 15 RGB delta between adjacent zones) transfers.

### PARTIALLY Transferable

**4.11. 9-phase structure.**
The remediation's 9 phases and PV2's 9 phases are structurally similar but not identical:

| Remediation Phase | PV2 Phase | Same? |
|-------------------|-----------|-------|
| 0: Deallocation | N/A | NO (PV2 builds fresh) |
| 1: HTML Restructuring | 1: HTML Skeleton | SIMILAR (PV2 builds, remediation restructures) |
| 2: Zone Backgrounds | 3: Zone Backgrounds | SAME intent |
| 3: Structural Borders | 4: Borders + Dividers + Transitions | SAME intent |
| 4: Typography | 5: Typography Zones | SAME intent |
| 5: Spatial Rhythm | (spread across 3, 4, 5) | PARTIAL overlap |
| 6: Element-Level | 6: Element-Level Richness | SAME intent |
| 7: Accessibility | 7: Accessibility | SAME intent |
| 8: Verification | 8: Verification + Cascade Table | SAME intent, PV2 adds cascade table |

The remediation's Phase 5 (spatial rhythm) is distributed across PV2's Phases 3-5, which is correct -- spacing is a CHANNEL that co-varies with other channels, not a standalone phase.

---

## 5. RECIPE VS SPEC: IS LENGTH THE VARIABLE?

### The Evidence

| Artifact | Lines | Format | Result |
|----------|-------|--------|--------|
| Master prompt builder slice | ~75 | Checklist | PA-05 1.5/4 |
| Middle-tier recipe | ~100 | Recipe | PA-05 4/4 |
| Remediation spec | ~1,025 | Hybrid (telescope + recipe + microscope) | PA-05 2.5/4 |

### Analysis

Length is NOT the primary variable. The 100-line Middle recipe outperformed the 1,025-line remediation spec. The variables that matter:

**5.1. Specificity of values** (CONFIRMED as variable)
The 100-line Middle recipe had specific CSS values (hex codes, px, em). The 75-line master prompt slice had abstract constraints ("use warm palette"). The remediation spec had specific values that were partially overridden by existing CSS. Specificity correlates with success, but only when the values APPLY (no CSS conflicts).

**5.2. Action verb ratio** (CONFIRMED as variable)
Middle recipe: ~8:1 action-to-constraint ratio. Remediation spec: ~5:1 playbook-to-guardrail ratio (inverted from master prompt's 7.9:1 guardrail-to-playbook). Both succeeded. Master prompt: 2.23:1 judgment-to-action ratio. Failed. Recipe format (action verbs, sequential steps) outperforms checklist format (judgment verbs, constraint lists).

**5.3. Greenfield vs brownfield** (CONFOUNDING variable)
The Middle recipe built from scratch (greenfield). The remediation spec modified an existing page (brownfield). Brownfield introduces CSS specificity conflicts, DOM mismatch risks, and `!important` wars that greenfield avoids. The remediation's lower score (2.5 vs 4.0) may reflect brownfield difficulty, not recipe quality.

**5.4. Content complexity** (CONFOUNDING variable)
The Middle recipe built a simpler page. The remediation modified a 12-section flagship page. More sections = more zone transitions = more opportunities for imperceptible deltas.

### Can You Have a 100-Line Spec That's Still Specific?

YES, if it meets three conditions:

1. **Greenfield build** (no CSS conflicts to debug)
2. **Build plan provides content-specific values** (zone colors, section mapping, mechanism deployment -- these come from TC, not the recipe)
3. **Recipe provides phase-sequenced procedures with per-phase perception checks**

The operational-recipe.md (~650 lines) is longer than 100 lines because it includes:
- Telescope comments per phase (~150 lines)
- Perception threshold table (~30 lines)
- Verification procedures (~100 lines)
- Callout/component library reference (~70 lines)

A stripped-to-essentials recipe with ZERO telescope comments and ZERO verification would be ~300 lines. But stripping the telescope comments removes the compositional intelligence that makes it a RECIPE rather than a CHECKLIST. The telescope comments are the difference between "set background to #FEF5EB" (checklist) and "set background to #FEF5EB -- warm peach cream, raw material intake zone, generous reading voice" (recipe).

**Verdict:** 650 lines is the correct length for a recipe that embeds compositional intelligence. 100 lines works for a recipe where the compositional intelligence comes from a separate build plan. PV2 uses BOTH: ~650-line recipe + build plan from TC. The recipe provides the HOW; the build plan provides the WHY and WHAT. This is the telescope-microscope split implemented as two documents rather than interlaced in one.

---

## 6. WHAT'S MISSING: FROM 2.5 TO DESIGNED (4/4)

### The 1.5-Point Gap

The remediation went from 1.5 to 2.5 (+1.0). The gap from 2.5 to 4.0 is 1.5 points. What composes it?

### Gap 1: Implementation Bugs (0.5 points, FIXABLE)

These are concrete CSS issues, not compositional gaps:
- Structural borders not rendering (selector mismatch): +0.2
- S9-S12 typography not applying (specificity conflict): +0.2
- Table class mismatch: +0.1
- Background deltas at S4-S5 and S9-S10: +0.1 (with borders as compensation)
- S4-S5 gap reduction: +0.05

**Total from fixes: +0.5 to +0.65** (projected post-fix PA-05: 3.0-3.2, COMPOSED)

These are NOT gaps in the recipe. They are gaps in EXECUTION. The recipe specified correct values; the builder failed to verify they applied. PV2's Wave 2 programmatic gates would catch all 5 of these issues before PA auditors even see the page.

### Gap 2: Compositional Fluency (0.5 points, RECIPE-ADDRESSABLE)

These are gaps where the recipe could have done more:
- **More grid layouts.** The recipe specified 3 grids (S7, S8, S11). Only 3 of 12 sections have non-column layout. 5+ sections with spatial variety would add +0.2.
- **Visible typography arc.** The recipe's Zone 1/2/3 typography was specified but didn't survive CSS specificity. If it HAD survived, the page would have had 3 distinct reading voices. PV2's greenfield build eliminates the specificity problem.
- **Stronger divider hierarchy.** The recipe specified 3 divider types (1px/2px/4px) but the builder executed them identically. More explicit differentiation in the recipe (color + thickness + margin per type) would add +0.1.
- **Mid-page designed moments.** The header is unanimously excellent. The dark sequence blocks in S8 are strong. But S4-S7 is a "middle sag" with no equivalent designed moment. The recipe doesn't direct the builder to CREATE a designed moment in the analytical zone.

### Gap 3: Compositional Fluency Beyond Recipes (0.5 points, NOT RECIPE-ADDRESSABLE)

These are the dimensions that recipes CANNOT encode:

- **Content-form resonance.** CD-006 scored 39/40 because its visual form EMERGED from the content's meaning. The research synthesis's intellectual journey (intake -> analysis -> synthesis) should be FELT in the page's visual rhythm, not just labeled in CSS comments. Recipes can specify warm-cool-warm arcs, but they cannot specify the QUALITY of the transition -- whether it feels like a journey or like 3 adjacent zones.

- **Proportional intelligence.** CD-006's spatial proportions follow something approximating golden ratio or deliberate asymmetry. The remediation's proportions are specified mechanically (64px/48px/40px). The NUMBERS are correct, but the COMPOSITION -- the relationship between the numbers -- is not recipe-encodable.

- **Gestalt coherence.** All 7 channels shifting simultaneously at zone boundaries creates a gestalt "this is a DIFFERENT place" sensation. The recipe specifies per-channel values. But the SIMULTANEITY -- the way all channels shift together to create a MOMENT -- is an emergent property of correct execution, not a recipe step.

- **Iterative refinement.** CD-006 was built with a human iterating with an Opus instance. The remediation was a single-pass recipe execution. The Middle experiment was also single-pass but on simpler content. For flagship content (12 sections, 5 zones, 18 mechanisms), single-pass execution may have an inherent ceiling around 3/4. Getting to 4/4 may require a BUILD-REVIEW-REFINE cycle that PV2's Wave 3 (fix integration) partially provides.

### The Honest Prediction

| Scenario | Expected PA-05 |
|----------|---------------|
| Remediation as executed | 2.5/4 (measured) |
| Remediation + 5 bug fixes | 3.0-3.2/4 (projected) |
| PV2 greenfield, recipe + TC plan, Opus builder | 3.0-3.5/4 (estimated) |
| PV2 greenfield + 1 fix cycle (Wave 3) | 3.2-3.8/4 (estimated) |
| PV2 greenfield + 3 fix cycles + compositional escalation | 3.5-4.0/4 (speculative) |

The recipe ceiling is REAL. But it is higher for greenfield builds (no CSS conflicts) than brownfield (the remediation). PV2's combination of greenfield + recipe + Opus builder + iterative fix cycles should approach 3.5/4 consistently. Reaching 4.0/4 requires something beyond the recipe -- either compositional escalation (TC re-engagement) or human iteration.

---

## 7. THE RECIPE FORMAT THAT WORKS

### Distilled Pattern

Based on the remediation spec's successes and failures, the recipe format that delivers BOTH telescope and microscope is:

```
PHASE N: [NAME] -- [COMPOSITIONAL GOAL] (~X min)

/* ========================================
   [TELESCOPE]: What this achieves at the
   compositional level. Which channel(s).
   Which scale level(s). WHY this matters.
   ======================================== */

Step N.1: [ACTION VERB] [SPECIFIC TARGET]
  [MICROSCOPE]: exact CSS / exact values
  [ARITHMETIC]: why these values (e.g., "32+24+4+24+24=108 < 120px cap")

Step N.2: [ACTION VERB] [SPECIFIC TARGET]
  [MICROSCOPE]: exact CSS / exact values

PERCEPTION CHECK:
  Open at 1440px. [SPECIFIC OBSERVATION].
  "Can you SEE [specific visual]?"
  If NO: [SPECIFIC RECOVERY ACTION].
```

### The 7 Properties of a Working Recipe

1. **SEQUENCED** (phases have an order; each builds on the previous)
2. **SPECIFIC** (hex codes, px values, exact selectors)
3. **JUSTIFIED** (each value has arithmetic or compositional reasoning)
4. **PERCEPTION-CHECKED** (inline "Can you SEE?" after each phase)
5. **ACTION-VERBED** ("Set," "Apply," "Deploy," "Delete," "Replace" -- not "Ensure," "Verify," "Must be")
6. **TELESCOPED** (compositional comments precede every CSS block)
7. **RECOVERY-PATHED** (if the perception check fails, what to do)

The remediation spec has properties 1-6 strongly and property 7 weakly. PV2's recipe should strengthen property 7 (recovery paths) since the builder executes autonomously.

---

## 8. CRITICAL FINDING: THE REMEDIATION WAS BOTH A RECIPE AND AN AUDIT RESPONSE

The remediation spec is not a generic recipe. It is a **targeted response to a specific perceptual audit failure**. Every phase addresses a specific root cause:

| Phase | Root Cause Addressed |
|-------|---------------------|
| 0: Deallocation | RC-4: Sub-perceptual variation (22% CSS budget wasted) |
| 1: HTML Restructuring | RC-9: Component library invisible (3/26 families), RC-12: Single-column monotony |
| 2: Zone Backgrounds | RC-10: Tokens not perceptible values |
| 3: Structural Borders | RC-11: Ch4 absent at section level, RC-14: Divider stacking |
| 4: Typography | RC-4: All 16px/400, RC-8: 2,400:1 compression |
| 5: Spatial Rhythm | RC-14: 210-276px voids |
| 6: Element-Level | RC-8: Ch5/Ch6 absent |
| 7: Accessibility | Gap-1: 0/8 accessibility |
| 8: Verification | RC-6: Coverage not causation |

This means the recipe's compositional intelligence is DIAGNOSTIC -- it knows what FAILED and prescribes the fix. PV2's recipe must be GENERATIVE -- it must prescribe what to BUILD without knowing what failed, because nothing exists yet.

### Implication for PV2

The remediation recipe works because it is TARGETED. PV2's operational-recipe.md must work GENERATIVELY. This is harder. The recipe can specify phases and values, but it cannot specify which ROOT CAUSES to preempt because the root causes don't exist yet.

The fix: PV2's recipe embeds the PATTERNS that prevent root causes rather than the FIXES that address them:
- "Phase 0 deallocation" becomes "Phase 2: CSS reset + soul enforcement" (prevent sub-perceptual waste from ever being written)
- "RC-12: single-column fix" becomes "Phase 1: HTML skeleton with >= 2 grid layouts" (build multi-column from the start)
- "RC-11: border fix" becomes "Phase 4: structural borders + dividers" (build borders sequentially)

The GENERATIVE recipe inverts the DIAGNOSTIC recipe: instead of "fix what's broken," it's "build so nothing breaks."

---

## 9. SUMMARY: WHAT MADE THE REMEDIATION RECIPE WORK

### The 5 Essential Properties

1. **Telescope + Microscope interlacing.** Compositional vision and specific CSS values are ADJACENT, not in separate documents. The builder reads WHY before WHAT. This is the single most important structural property.

2. **Subtraction before addition.** Phase 0 freed 22% of the CSS budget. This prevented the builder from adding MORE sub-perceptual values on top of existing ones. PV2's equivalent: soul enforcement in Phase 2 prevents budget misallocation.

3. **Per-phase perception checks.** "Can you SEE?" inline checks catch catastrophic failures early. The builder verifies visually at Phase 2, 3, 4, 5, and 7 -- five opportunities to self-correct before Phase 8 verification.

4. **Arithmetic justifications.** Not just values but the MATH behind them. "32+24+4+24+24=108 < 120px" transfers understanding. The builder can DERIVE correct values for novel situations, not just copy specified ones.

5. **Recipe format with action verbs.** "Find this block. DELETE EVERYTHING from Zone 1 through Zone 3." Not "Ensure sub-perceptual CSS is removed." The action verb format achieved ~90% builder compliance (3/3 BLOCKING preflight issues fixed, 57/57 HTML modifications correct, 17/17 verification checks passed).

### What Would Have Made It Better

1. **Selector validation steps.** After every new CSS block: "Verify in browser: does the selector match the DOM? If computed border-left is 0, check selector specificity."

2. **Stronger perception thresholds in the recipe body.** The thresholds are in an APPENDIX. They should be INLINE with each phase: "Set font-size to 15px (>= 2px delta from Zone 2's 17px, threshold MET)."

3. **Recovery paths for specificity conflicts.** "If computed font-size is not 15px, add `!important`. If still not 15px, check for inline style overrides."

4. **Mid-page designed moment directive.** "In the analytical zone (S4-S8), identify the section with the most STRUCTURED content (tables, lists, grids). Make this section the visual focal point of the zone with [specific techniques]."

---

**END OF INTEGRATION REPORT**

**Key takeway for PV2:** The remediation recipe is the closest the project has come to embedding compositional intelligence in a builder-consumable format. Its telescope+microscope interlacing pattern, per-phase perception checks, and arithmetic justifications should become PV2's recipe standard. The recipe's weakness -- brownfield CSS conflicts -- is eliminated by PV2's greenfield approach. The recipe's ceiling (~3.0 after fixes) is improvable by PV2's iterative fix cycles and fresh-eyes verification. The format works. Codify it.

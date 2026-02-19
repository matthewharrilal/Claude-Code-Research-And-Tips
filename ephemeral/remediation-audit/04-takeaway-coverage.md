# 04: Master Takeaway Coverage Audit

**Auditor:** takeaway-coverage-auditor (Opus 4.6)
**Date:** 2026-02-17
**Scope:** Evaluate the remediation prompt (10-REMEDIATION-PROMPT.md, 301 lines) against ALL 10 Master Takeaways from the flagship retrospective synthesis (09-SYNTHESIS.md, Part 8).
**Method:** For each takeaway, assess whether it is addressed, whether as a RECIPE (action verbs, specific CSS values, specific selectors) or a CHECKLIST (verify/must be), and grade coverage.

**Cross-references:**
- `05-metacognitive-process.md` -- recipe vs checklist analysis
- `07-contrarian-challenge.md` -- contrarian findings, especially on model selection and prompt tone

---

## SCORING LEGEND

- **FULLY ADDRESSED:** The takeaway's core recommendation is present in the remediation with actionable specificity.
- **PARTIALLY ADDRESSED:** Some aspect is present but key elements are missing or insufficiently specified.
- **NOT ADDRESSED:** The takeaway is absent from the remediation entirely.
- **RECIPE:** Instructions use action verbs ("Add," "Replace," "Set"), provide specific CSS values, name specific selectors. A builder can execute without judgment.
- **CHECKLIST:** Instructions use verification language ("verify," "must be," "fail if"), state requirements without implementation steps.

---

## TAKEAWAY 1: ADD A PLAYBOOK GENERATION PHASE

### Statement
> Stop the analysis-to-rules pipeline before it reaches the builder. Insert one Opus agent between the build plan and the builder who reads the plan + mechanism catalog + tokens.css and writes 100-150 lines of section-by-section CSS instructions with specific values. Cost: 1 agent, ~30 minutes. The Middle-tier's planner slice is the template. (Sources: 03 Finding 5, 05 Section 10)

### Is It Addressed?
**YES, but implicitly rather than explicitly.** The remediation prompt (10-REMEDIATION-PROMPT.md) IS ITSELF a playbook. It provides section-by-section CSS instructions with specific values across 5 phases. Phase 1 gives exact border selectors and values (lines 29-77). Phase 2 gives per-zone font-size, font-weight, letter-spacing with specific pixel/em values (lines 81-149). Phase 3 gives exact hex color values for all 12 zone backgrounds (lines 153-183). Phase 4 gives per-zone paragraph margins and max-widths (lines 187-223). Phase 5 gives component differentiation CSS (lines 227-269).

However, the takeaway recommends a STRUCTURAL PROCESS CHANGE: inserting a playbook generation phase into the pipeline for future experiments. The remediation prompt does not address this process change -- it only provides a playbook for the CURRENT fix. The takeaway is about preventing recurrence; the remediation is about fixing the current artifact.

### Recipe or Checklist?
**RECIPE.** The remediation is overwhelmingly recipe-formatted. Action verbs: "Add," "Replace," "Select," "Amplify." Specific CSS selectors: `.zone-s2 .page-container`, `.divider-breathing`. Specific values: `4px solid var(--color-border)`, `font-size: 17px`, `#FEF5EB`. This is exactly the format the metacognitive analysis (05, Section 1) identified as the success factor in the Middle-tier planner slice.

### Grade: PARTIALLY ADDRESSED

### Enhancement Needed
The remediation serves as a one-time playbook but does not codify the PROCESS recommendation. For future experiments, add a header note:

> **Process note for future experiments:** This document is the output of a playbook generation phase. For any future flagship-tier build, insert a dedicated Opus agent between the build plan and the builder to produce a document of this type: section-by-section CSS instructions with specific values, 100-200 lines, action verbs not verification language.

---

## TAKEAWAY 2: SPLIT THE BUILDER PROMPT INTO DUAL TRACKS

### Statement
> Track A: 30 lines of binary constraints (soul, container width, CPL). Track B: 100 lines of CSS implementation instructions (per-section backgrounds, borders, typography, spacing with specific values). Track A achieves compliance. Track B generates richness. The current monolithic document merges both into one constraint-only document. (Sources: 05 Section 4, 03 lines 505-509)

### Is It Addressed?
**PARTIALLY.** The remediation prompt has a clear Track B (Phases 1-5, ~250 lines of CSS implementation instructions). Track A is present but minimal: the CONSTRAINTS section (lines 294-296) contains 3 lines of prohibitions plus the Soul check in Phase 6 (line 290). The Perception Thresholds table (lines 7-20) functions as a hybrid -- it is both a constraint floor (Track A) and an implicit instruction (Track B).

The structural separation IS present: constraints are physically separated from instructions (CONSTRAINTS section at lines 294-296 vs Phases 1-5 as instructions). But the 30-line Track A is compressed to ~6 lines. This is fine for remediation (the soul constraints already exist in the HTML and do not need re-specification), but the dual-track ARCHITECTURE is not explicitly named or structured as a reusable pattern.

### Recipe or Checklist?
**MOSTLY RECIPE (Track B), CHECKLIST (Track A).** Phases 1-5 are pure recipe. The CONSTRAINTS section is pure checklist ("Do NOT change..."). Phase 6 Self-Verification is pure checklist ("Can you SEE..."). This is actually the correct dual-track structure the takeaway recommends.

### Grade: PARTIALLY ADDRESSED

### Enhancement Needed
The remediation implements dual-track in practice but does not label it. Make the architecture explicit:

```
## TRACK A: BINARY CONSTRAINTS (DO NOT VIOLATE)
[lines 294-296 + Soul check from Phase 6]

## TRACK B: CSS IMPLEMENTATION INSTRUCTIONS (FOLLOW THIS RECIPE)
[Phases 1-5]
```

This labeling costs 2 lines and makes the architectural pattern reusable.

---

## TAKEAWAY 3: ADD PERCEPTUAL MAGNITUDE FLOORS TO EVERY CHANNEL RULE

### Statement
> No rule currently defines "how much" variation is enough. Add minimum perceptual thresholds: background deltas >= 15 RGB points, letter-spacing range >= 0.025em, border weight difference >= 2px between zones, font-size variation >= 2px. Without these, "channel active" means "technically present but invisible." (Sources: 03 Finding 1, 04 lines 370-371, 06 Section 9)

### Is It Addressed?
**YES.** The remediation prompt opens with a PERCEPTION THRESHOLDS table (lines 7-20) that defines minimum perceptible deltas for 7 properties:

| Property | Takeaway Floor | Remediation Floor | Match? |
|----------|---------------|-------------------|--------|
| Background color | >= 15 RGB points | >= 10 RGB points (8 between adjacent, 10 required) | CLOSE but lower than takeaway |
| Letter-spacing | >= 0.025em | >= 0.03em at 16px | EXCEEDS takeaway |
| Border weight | >= 2px difference | Not stated as a floor; specific values given (1px/2px/3px/4px) | IMPLICIT via recipe |
| Font-size | >= 2px | >= 2px | EXACT MATCH |
| Line-height | Not in takeaway | >= 3px / >= 0.2 unit | BONUS (not required) |
| Font-weight | Not in takeaway | 400 vs 500+ | BONUS |
| Margin | Not in takeaway | >= 8px difference | BONUS |

The table is followed by THE RULE (line 21): "If a human cannot SEE the difference without a color picker, do NOT write the CSS." This is a perceptual magnitude floor stated as a universal principle.

**Discrepancy:** The takeaway specifies >= 15 RGB points for backgrounds; the remediation uses >= 10. The remediation's actual color values (Phase 3) produce deltas of 10-20 RGB points between adjacent sections, which mostly meets the >= 15 threshold in practice even though the stated floor is lower. This is a minor gap.

### Recipe or Checklist?
**HYBRID.** The thresholds table is a checklist (minimum values). But the table is followed by 5 phases of specific CSS that IMPLEMENT values above the floors. The thresholds serve as a floor; the recipes provide the actual values. This is the ideal structure.

### Grade: FULLY ADDRESSED

### Minor Enhancement
Raise the stated background floor from >= 10 to >= 15 to match the takeaway's recommendation and the actual values provided in Phase 3 (which produce 10-20 point deltas anyway).

---

## TAKEAWAY 4: FIX THE S-09 STACKING LOOPHOLE

### Statement
> Redefine S-09 to measure TOTAL visual gap between adjacent content (sum of all margins, paddings, divider heights) rather than per-property maximum. Current: each property <= 96px, but stacked values create 210-276px voids. Target: total gap <= 120px between any two content elements. (Sources: 02 RC-14, 03 Finding 2, 04 lines 192-228)

### Is It Addressed?
**PARTIALLY.** The remediation addresses the stacking problem in two places:

1. Phase 1B (line 64): `.divider-breathing` margin reduced from `--space-20` (80px) to `--space-16` (64px) with the comment "reduced to prevent void."
2. Phase 4B (lines 209-223): Section padding adjusted per zone, with asymmetric padding-top/padding-bottom values that reduce total gap.

However, the remediation does NOT:
- State a maximum total gap value (the takeaway says <= 120px)
- Verify that the stacked values at each of the 6 identified catastrophic boundaries are within limits
- Include a Phase 6 verification check for total gap size
- Name the specific section boundaries where 210-276px voids existed (S3/S4, S6/S7, etc.)

The synthesis report (09-SYNTHESIS.md, lines 115-116) specifically states: "The remediation reduces ONE divider margin but does not individually target the 6 catastrophic gaps." This gap was already identified.

### Recipe or Checklist?
**RECIPE (but incomplete).** The divider-breathing margin change and section padding changes ARE recipes. But the total-gap constraint is absent as either recipe or checklist.

### Grade: PARTIALLY ADDRESSED

### Enhancement Needed
Add a total-gap rule and per-boundary verification:

```css
/* STACKING RULE: At every section boundary, sum of:
   section-N padding-bottom + divider total height + section-N+1 padding-top
   MUST NOT exceed 120px. */
```

Add to Phase 6 Self-Verification:
```
11. **No whitespace voids:** Scroll at 1440px. Zero viewports contain ONLY background color with no content. YES/NO.
12. **Gap stacking:** At every section boundary, total visual gap (padding-bottom + divider + padding-top) <= 120px. Measure at S3/S4, S5/S6, S8/S9 boundaries.
```

---

## TAKEAWAY 5: ADD ACCESSIBILITY MINIMUM TO REMEDIATION AND FUTURE PROMPTS

### Statement
> ::selection, focus-visible, prefers-reduced-motion, and at least one responsive breakpoint (768px). CD-006 scores 8/8 on accessibility; flagship scores 0/8. This is ~15 lines of CSS. No reason to omit it. (Sources: 04 lines 113-148, 06 Channel F, 08 REQ-25 through REQ-30)

### Is It Addressed?
**NO.** The remediation prompt contains zero mention of:
- `::selection` styling
- `focus-visible` outlines
- `prefers-reduced-motion` media query
- Responsive breakpoints (768px, 480px)
- Skip links
- ARIA labels

The synthesis report (09-SYNTHESIS.md, lines 112-113) already flagged this as BLOCKING gap #1: "Zero mention of ::selection, focus-visible, prefers-reduced-motion, skip link, ARIA labels, or responsive breakpoints."

The remediation's CSS-only scope partially explains this: responsive breakpoints require layout changes, and skip links require HTML. But `::selection`, `focus-visible`, and `prefers-reduced-motion` are purely CSS additions that fit within the CSS-only constraint.

### Recipe or Checklist?
**N/A** -- not present at all.

### Grade: NOT ADDRESSED

### Enhancement Needed
Add a Phase 5C or Phase 6 preamble:

```css
/* Phase 5C: ACCESSIBILITY MINIMUM */
::selection {
  background-color: var(--color-primary);
  color: #FFFFFF;
}

*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is 15 lines of CSS. It costs nothing and closes the 0/8 -> 3/8 accessibility gap.

---

## TAKEAWAY 6: REDIRECT CSS BUDGET FROM MICRO-MODULATION TO STRUCTURAL VARIETY

### Statement
> The flagship spent 227 lines (22% of CSS) on imperceptible per-zone typography shifts. CD-006 spent those lines on 11 component types, 5 grid layouts, and 3 responsive breakpoints. Future prompts should explicitly state: "structural diversity (borders, component types, layout patterns) takes priority over typographic micro-modulation." (Sources: 06 Sections 9-12)

### Is It Addressed?
**YES, but through implicit structure rather than explicit statement.** The remediation's 5 phases allocate CSS budget as follows:

| Phase | Focus | Approx. Lines | Allocation |
|-------|-------|--------------|------------|
| 1: Structural Borders | Ch4 Structural | 48 lines | STRUCTURAL |
| 2: Typography Enrichment | Ch2 Typographic | 68 lines | TYPOGRAPHIC (but at perceptible magnitudes) |
| 3: Background Amplification | Ch1 Chromatic | 32 lines | CHROMATIC |
| 4: Spatial Rhythm | Ch3+Ch6 Spatial | 36 lines | SPATIAL |
| 5: Component Differentiation | Ch5 Component | 42 lines | STRUCTURAL |
| 6: Self-Verification | Checklist | 16 lines | VERIFICATION |

Structural variety (Phases 1+5) gets ~90 lines (36% of phases). Typography (Phase 2) gets ~68 lines (27%). This is a meaningful rebalance from the flagship's 22% structural / 22% imperceptible micro-typography. Phase 2's typography is at PERCEPTIBLE magnitudes (17px vs 15px, 600 vs 400 weight), not the flagship's imperceptible 0.001em letter-spacing shifts.

However, the remediation does NOT explicitly state the priority ordering. The takeaway recommends an explicit statement: "structural diversity takes priority over typographic micro-modulation." This statement is absent.

Also missing: grid layouts and multi-column layout variation. The remediation is CSS-only and does not add any grid/flex declarations. This is a fundamental constraint of the CSS-only scope -- layout variation requires HTML restructuring (adding grid containers, flex parents). The takeaway references "5 grid layouts" from CD-006, which the remediation cannot address.

### Recipe or Checklist?
**RECIPE.** Phase 1 (borders) and Phase 5 (components) are pure recipe with specific selectors and values. The budget redirection is achieved through recipe ordering (borders FIRST, typography SECOND) rather than through an explicit priority statement.

### Grade: PARTIALLY ADDRESSED

### Enhancement Needed
1. Add explicit priority statement at the top:
```
## PRIORITY ORDERING
Structural variety (borders, containment, component differentiation) > Typography (font-size, weight) > Chromatic (background colors) > Spatial (margins, padding). If time is short, complete Phase 1 and Phase 5 FIRST.
```

2. Acknowledge the grid/layout gap explicitly:
```
## KNOWN LIMITATION: This CSS-only remediation cannot add multi-column layouts, grids, or flex containers. Those require HTML restructuring in a future pass.
```

---

## TAKEAWAY 7: CAP ANALYTICAL PHASES AT 2 BETWEEN RESEARCH AND EXECUTION

### Statement
> The Flagship pipeline ran 6 consecutive analytical phases (5-10), inflating the meta-to-output ratio to 660:1. Cap at 2 analytical phases. Use the third phase slot for the playbook generation phase. The threshold: if meta-output exceeds 20:1 ratio to product, the pipeline is feeding on itself. (Sources: 05 Section 6)

### Is It Addressed?
**NO.** This is a PROCESS recommendation, not a CSS recommendation. The remediation prompt addresses the current artifact (fixing 07-intentionality.html) and does not address pipeline architecture for future experiments.

This is expected and acceptable: a CSS remediation prompt is not the right vehicle for process architecture recommendations. However, the takeaway IS relevant because the remediation prompt itself exists within a pipeline context -- if the remediation triggers further analytical phases (auditing the remediation, validating the remediation, etc.), the analytical inflation loop restarts.

### Recipe or Checklist?
**N/A** -- process recommendation, not present in CSS remediation.

### Grade: NOT ADDRESSED

### Enhancement Needed
This takeaway should be addressed in a PROCESS document (e.g., a future pipeline architecture update), not in the remediation prompt. However, a one-line note could prevent analytical inflation around the remediation itself:

```
## PROCESS NOTE
Execute this remediation in a SINGLE PASS. Do not spawn analytical agents to audit the remediation. Apply Phases 1-5, run Phase 6 self-verification, deliver. Total agents: 1 builder + 1 PA auditor.
```

---

## TAKEAWAY 8: CONSIDER OPUS FOR ALL CREATIVE BUILDER ROLES

### Statement
> CD-006 was built by Opus. The flagship skeleton/mechanism builders were Sonnet. The contrarian report identifies this as potentially the highest-leverage unexamined intervention. At minimum, the Mechanism Builder (Pass 2) and Intentionality Builder (Pass 4) should be Opus. (Sources: 07 lines 296-301)

### Is It Addressed?
**NO.** The remediation prompt does not specify which model should execute it. It contains no agent model recommendation.

The contrarian analysis (07, lines 296-301) argues this may be the "highest-leverage unexamined intervention" and that "a Sonnet agent given 55 constraints will comply meticulously. An Opus agent given 55 constraints will comply AND make creative decisions beyond the constraints."

For a remediation prompt that IS a recipe (not a checklist), the model selection is less critical -- a recipe-following Sonnet agent should produce the specified CSS correctly. But for creative surplus (going beyond the recipe to make additional good judgment calls), Opus would be preferable.

### Recipe or Checklist?
**N/A** -- model selection is not present.

### Grade: NOT ADDRESSED

### Enhancement Needed
Add a model recommendation:

```
## EXECUTION NOTE
This remediation should be executed by an Opus agent. The recipe provides specific values, but some phases (especially Phase 5: Component Differentiation) benefit from creative judgment about WHICH component-blocks get which variant class. Opus agents make better judgment calls in ambiguous contexts.
```

---

## TAKEAWAY 9: ADD A PLAN-FIDELITY GATE

### Statement
> No current gate checks whether the built artifact matches the build plan. Add Gate 2.5: compare skeleton against build plan, verify every planned section exists with approximately matching spatial budget, verify each mechanism cluster's primary property is present. Plan-to-build divergence > 20% = fix cycle. (Sources: 02 RC-15, 03 Section C3)

### Is It Addressed?
**NO (but justifiably).** The remediation prompt operates on an EXISTING artifact (07-intentionality.html, 2,034 lines). There is no build plan to check fidelity against -- the page is already built. The remediation modifies CSS within the existing structure.

A plan-fidelity gate would be relevant for a FUTURE full-build experiment, not for a CSS-only remediation of an existing page.

### Recipe or Checklist?
**N/A** -- not applicable to remediation context.

### Grade: NOT ADDRESSED (justifiably -- not applicable to remediation scope)

### Enhancement Needed
None for the current remediation. This takeaway applies to future full-build pipeline architecture. If desired, a note:

```
## FUTURE PROCESS NOTE
For future builds, add a Plan-Fidelity Gate (Gate 2.5) between skeleton build and mechanism pass. Compare built sections against the build plan's spatial budget and mechanism assignments. Divergence > 20% triggers a fix cycle.
```

---

## TAKEAWAY 10: EMBED PERCEPTION CHECKS IN EXECUTION GATES, NOT JUST FINAL PA

### Statement
> Currently, perceptual quality is only checked at Gate 5 (Mode 4 PA) -- after the page is fully built. Move simple perceptual checks into Gate 1 (post-skeleton) and Gate 3 (post-mechanism): "scroll through at 1440px -- are there blank viewports? Can you distinguish sections by background color without dev tools?" These take 5 minutes and catch catastrophic failures 4 hours earlier. (Sources: 03 Section B7, 07 RC-6 verdict)

### Is It Addressed?
**YES, partially.** Phase 6 (Self-Verification, lines 275-292) embeds 10 perceptual checks WITHIN the remediation execution, not deferred to a final PA:

1. "Screenshot S1 next to S5. Can you SEE color change without zooming?" -- PERCEPTUAL
2. "Computed p font-size in S1 vs S5 differs by >= 2px" -- PROGRAMMATIC
3. "Computed h2 font-weight in S1 vs S5: 400 vs 600" -- PROGRAMMATIC
4. "Computed letter-spacing S1 vs S5 differs by >= 0.4px" -- PROGRAMMATIC
5. ">= 6 elements with visible border in body" -- PROGRAMMATIC + PERCEPTUAL
6. ".divider-smooth vs .divider-breathing clearly different weight/color" -- PERCEPTUAL
7. "margin-bottom on p in S1 vs S5 differs by >= 8px" -- PROGRAMMATIC
8. ".component-block in S3 vs S9 has different border color AND background" -- PERCEPTUAL
9. "p max-width in S1 vs S5 differs by >= 6ch" -- PROGRAMMATIC
10. "Full scroll at 1440px. Each screenful looks DIFFERENT from previous. YES/NO." -- PERCEPTUAL

4 of 10 checks are purely perceptual (checks 1, 6, 8, 10). This is significant improvement over the flagship's approach of deferring all perceptual checks to the final Mode 4 PA.

However, the takeaway recommends embedding checks at MULTIPLE gates (Gate 1, Gate 3), not just at the end. The remediation's Phase 6 is a single end-of-process verification, not an embedded mid-process checkpoint. For a 5-phase CSS remediation, mid-process checkpoints would look like: "After Phase 1, scroll to verify borders are visible. After Phase 3, screenshot S1 next to S5 to verify background contrast."

### Recipe or Checklist?
**CHECKLIST.** Phase 6 is entirely verification ("verify," "differs by," "YES/NO"). This is appropriate for verification -- the recipe is in Phases 1-5; the check is in Phase 6.

### Grade: PARTIALLY ADDRESSED

### Enhancement Needed
Add mid-process perceptual checkpoints:

```
### CHECKPOINT AFTER PHASE 1:
Scroll through at 1440px. Can you see at least 3 left borders without zooming? YES/NO. If NO, increase border width to 5px.

### CHECKPOINT AFTER PHASE 3:
Screenshot S1 next to S5. Can you distinguish background color WITHOUT dev tools? YES/NO. If NO, increase RGB deltas by 5 points each.
```

---

## SUMMARY TABLE

| # | Takeaway | Addressed? | Format | Grade |
|---|----------|-----------|--------|-------|
| 1 | Playbook Generation Phase | Remediation IS a playbook; process change absent | RECIPE | PARTIALLY |
| 2 | Dual-Track Prompt | Implemented in practice, not labeled | RECIPE + CHECKLIST | PARTIALLY |
| 3 | Perceptual Magnitude Floors | Threshold table + per-channel values | HYBRID | FULLY |
| 4 | S-09 Stacking Fix | One divider reduced; no total-gap cap | RECIPE (incomplete) | PARTIALLY |
| 5 | Accessibility Minimum | Completely absent | N/A | NOT ADDRESSED |
| 6 | CSS Budget Redirection | Structural phases first; no explicit priority statement | RECIPE | PARTIALLY |
| 7 | Cap Analytical Phases | Process recommendation; not in CSS scope | N/A | NOT ADDRESSED |
| 8 | Opus for Builders | No model recommendation | N/A | NOT ADDRESSED |
| 9 | Plan-Fidelity Gate | Not applicable to remediation scope | N/A | NOT ADDRESSED (justified) |
| 10 | Embedded Perception Checks | Phase 6 has 4 perceptual checks; no mid-process checkpoints | CHECKLIST | PARTIALLY |

### Score: 1 FULLY / 5 PARTIALLY / 4 NOT ADDRESSED (1 justified)

---

## CROSS-CUTTING OBSERVATIONS

### 1. The Remediation IS a Recipe -- The Metacognitive Lesson Was Learned

The most important finding from the metacognitive analysis (05, Section 1) was that the Middle-tier succeeded because its builder received a RECIPE, while the Flagship failed because its builder received a CHECKLIST. The remediation prompt is overwhelmingly a RECIPE: action verbs, specific selectors, specific CSS values, sequenced phases. 5 of 6 phases are recipe; only Phase 6 is checklist. This is the correct ratio.

This means the remediation's FORMAT addresses the deepest process failure even though it does not explicitly cite the takeaway. The remediation prompt demonstrates that the lesson was absorbed into practice.

### 2. CSS-Scoped vs Process-Scoped Takeaways

4 of the 10 takeaways are PROCESS recommendations (Takeaway 1 process change, 7, 8, 9) that apply to the pipeline architecture, not to a CSS remediation document. The remediation's scope is explicitly "CSS-only remediation" (line 5). These process takeaways should be addressed in a separate process architecture document, not in the remediation prompt.

### 3. The Accessibility Gap Is the Most Actionable Miss

Takeaway 5 (accessibility) is the only NOT ADDRESSED takeaway that falls squarely within the remediation's CSS-only scope. Adding `::selection`, `focus-visible`, and `prefers-reduced-motion` is ~15 lines of CSS that fits perfectly in the remediation's phase structure. This is the highest-priority enhancement.

### 4. The Stacking Fix Needs Completion

Takeaway 4 (S-09 stacking) is PARTIALLY addressed but the synthesis report already flagged the same gap (Part 4, BLOCKING Gap #2). The remediation changes one divider margin but does not verify total stacked gap at the 6 identified catastrophic boundaries. Adding a total-gap verification check to Phase 6 would close this gap at near-zero cost.

### 5. Recipe-First Validates the Contrarian Thesis

The contrarian (07, lines 268-274) argued that "no amount of rule enrichment can replicate design judgment" and that the root cause is in the PROCESS, not the PROMPT. The remediation prompt validates this thesis by showing what a PROCESS CHANGE looks like in practice: instead of more rules, it provides CSS recipes. The remediation is the playbook the contrarian argued for. However, the contrarian's highest-leverage recommendation (Opus for builders, 07 lines 296-301) is still unaddressed.

---

## PRIORITY-ORDERED ENHANCEMENTS

If the remediation prompt is to be updated, apply these in order:

1. **[HIGH] Add accessibility CSS (Takeaway 5):** ~15 lines. Phase 5C with `::selection`, `focus-visible`, `prefers-reduced-motion`. Zero risk, closes 0/8 -> 3/8 gap.

2. **[HIGH] Add total-gap verification (Takeaway 4):** ~5 lines in Phase 6. "Total visual gap at any section boundary <= 120px." + "Zero blank-only viewports at 1440px scroll."

3. **[MEDIUM] Add mid-process checkpoints (Takeaway 10):** ~6 lines. Checkpoint after Phase 1 (borders visible?) and after Phase 3 (backgrounds distinguishable?).

4. **[MEDIUM] Add model recommendation (Takeaway 8):** 2 lines. "Execute with Opus agent."

5. **[LOW] Add explicit priority ordering (Takeaway 6):** 3 lines. "Structural > Typography > Chromatic > Spatial."

6. **[LOW] Label dual-track structure (Takeaway 2):** 2 lines. Rename sections to Track A / Track B.

7. **[LOW] Raise background floor to >= 15 (Takeaway 3):** 1 line edit.

Total enhancement: ~34 lines added to a 301-line document. All enhancements are additive; none contradict existing content.

---

**END OF TAKEAWAY COVERAGE AUDIT**

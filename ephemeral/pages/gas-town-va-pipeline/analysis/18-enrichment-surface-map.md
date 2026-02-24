# Enrichment Surface Area Map — Pipeline v3 Visual Architecture

**Date:** 2026-02-23
**Scope:** Every point in the pipeline where a targeted change could improve visual output quality
**Evidence base:** Gas Town VA Pipeline execution (PA-05 3/4 COMPOSED, Tier 5 6/9), 9 artifact files, MANIFEST.md, verdict report
**Method:** Phase-by-phase walk-through, cross-referenced against actual failure modes observed

---

## Table of Contents

1. [Phase 0: Content Analysis](#phase-0-content-analysis)
2. [Phase 1: Brief Assembly](#phase-1-brief-assembly)
3. [Phase 2: Building](#phase-2-building)
4. [Phase 3A: Gate Runner](#phase-3a-gate-runner)
5. [Phase 3A: Screenshot Capture](#phase-3a-screenshot-capture)
6. [Phase 3B: PA Audit](#phase-3b-pa-audit)
7. [Phase 3C: Verdict and Weaver](#phase-3c-verdict-and-weaver)
8. [Phase 4: Fix/Refine/Rebuild Cycles](#phase-4-fix-refine-rebuild-cycles)
9. [Cross-Phase: Artifact-Level Enrichments](#cross-phase-artifact-level-enrichments)
10. [Ranked Priority List: Top 20](#ranked-priority-list-top-20)

---

## Phase 0: Content Analysis

### E-01: Content Map lacks per-section register vocabulary

- **Current state:** Content Analyst performs 6 operations (classify, heterogeneity, metaphor, per-section character, density arc, reader model). The Content Map from Gas Town included zone-level classifications but NOT per-section NARRATIVE/REFERENCE/CODE labels with CSS implication mappings.
- **Gap:** The worked example itself notes "per-section character vocabulary (NARRATIVE/REFERENCE/CODE) is missing for individual sections" (artifact-worked-examples.md line 91). The Brief Assembler then has to infer register per zone.
- **Proposed change:** Add a 7th operation to the Content Analyst prompt: "7. REGISTER MAP: For each section, classify as NARRATIVE/REFERENCE/CODE and note dominant element types (prose, tables, code blocks, lists, diagrams). Output as a table with section name, register, and element inventory." Add this to artifact-routing.md "Phase 0: Content Analysis Protocol" and update the Content Analyst prompt template in MANIFEST Appendix E.
- **Expected impact:** MEDIUM — gives the Brief Assembler explicit register data for Tier 3 content-form coupling, preventing the builder from guessing.
- **Effort:** ~15 lines added to artifact-routing.md Phase 0, ~5 lines added to MANIFEST Appendix E Content Analyst prompt.
- **Risk:** LOW — additive, no existing behavior changes.

### E-02: Content Map omits transition weight recommendations

- **Current state:** The Content Map describes zone density (SPARSE/MODERATE/DENSE) and density arc pattern but does NOT recommend transition weights between zones.
- **Gap:** The worked example notes "Transition weights between sections are absent" (artifact-worked-examples.md line 92). The Brief Assembler must independently decide which boundaries get light/medium/heavy transitions. In the Gas Town execution, this resulted in a rich boundary map in the brief, but the information had to be invented by the Brief Assembler rather than derived from content analysis.
- **Proposed change:** Add operation 8 to Content Analyst: "8. TRANSITION WEIGHTS: For each zone boundary, recommend light/medium/heavy based on content register shift magnitude. Register shift from NARRATIVE to CODE = heavy. Same register with density change = medium. Same register and similar density = light." Update artifact-routing.md and MANIFEST prompt.
- **Expected impact:** MEDIUM — directly feeds the multi-coherence boundary mapping in Tier 3, reducing Brief Assembler creativity burden.
- **Effort:** ~10 lines added to artifact-routing.md, ~5 lines to prompt template.
- **Risk:** LOW — additive. Could over-specify if Content Analyst is too rigid.

### E-03: Content Map lacks section word counts / element inventories

- **Current state:** Content Map gives zone names, density labels, and broad section groupings but no quantitative data about section lengths or element counts.
- **Gap:** The worked example notes "Content inventory (word counts per section, code block counts) would help the brief assembler" (artifact-worked-examples.md line 93). Without word counts, the Brief Assembler cannot accurately size zones or predict where density peaks create layout challenges.
- **Proposed change:** Add operation 9: "9. CONTENT INVENTORY: Per section — word count, code block count, table count, list count, image count. Output as compact table." Update artifact-routing.md and prompt.
- **Expected impact:** LOW-MEDIUM — useful for zone sizing and layout decisions but not directly tied to visual quality failures observed.
- **Effort:** ~10 lines added.
- **Risk:** LOW — purely informational addition.

### E-04: Tension identification not structurally connected to CSS

- **Current state:** Content tensions are identified (Chaos vs Control, Individual vs Colony, etc.) with dominant pole noted and metaphor-shaping tension identified. However, the mapping from tension to CSS expression is left entirely to the Brief Assembler.
- **Gap:** In the Gas Town execution, the Brief Assembler mapped the refinery metaphor beautifully to CSS custom properties, but the tension-to-CSS mapping happened ad hoc. There is no vocabulary in the pipeline for how tension poles map to visual treatment (e.g., "the dominant pole gets more visual weight / spatial allocation").
- **Proposed change:** Add a "Tension-CSS Mapping Guide" to artifact-routing.md "Metaphor Viability Assessment" section: "For each tension, specify: (a) which pole gets more visual real estate, (b) where the tension resolves spatially on the page, (c) one CSS signal per pole (e.g., heavy borders = control pole, open spacing = chaos pole)."
- **Expected impact:** LOW — the Gas Town brief already handled this well; this mainly helps less capable Content Analysts.
- **Effort:** ~20 lines added to artifact-routing.md.
- **Risk:** LOW — advisory, not prescriptive.

---

## Phase 1: Brief Assembly

### E-05: Tier 3 multi-coherence section lacks boundary-specific channel count targets

- **Current state:** The TC Brief Template (artifact-tc-brief-template.md) says "each boundary shifts at least 3 of 6 channels, average 4+" but the template does not require the Brief Assembler to write explicit channel-count targets per boundary.
- **Gap:** The Gas Town execution brief DID include rich boundary-by-boundary channel descriptions (lines 49-64 of execution-brief.md), but this was due to an exceptionally strong Brief Assembler output, not template enforcement. A weaker assembler could produce "Z1->Z2: background shifts, typography changes" (2 channels, no specifics).
- **Proposed change:** Modify TC Brief Template line 74 to: "For each zone boundary from the Content Map, describe what shifts IN EACH of the 6 channels. Name the specific CSS properties changing. Target: at least 3 channels per boundary, with 1-2 boundaries at 5-6 channels. OUTPUT FORMAT: Table with columns [Boundary | BG | Typography | Spacing | Borders | Color Accents | Components | Total Channels]."
- **Expected impact:** HIGH — this is the single highest-leverage enrichment for multi-coherence. A structured table forces the Brief Assembler to be explicit, and gives the builder a concrete boundary-by-boundary recipe rather than prose.
- **Effort:** ~15 lines modified in artifact-tc-brief-template.md Tier 3.
- **Risk:** MEDIUM — could make the brief too prescriptive, reducing builder creative authority below 80%. Mitigate by framing as "minimum channel shifts per boundary" not "exact CSS values."

### E-06: Tier 4 Disposition under-specifies technique CSS values

- **Current state:** The TC Brief Template (lines 118-142) provides purpose + techniques for D-01 through D-08 but notes that "Purpose-only dispositions produce vague output" and that Gas Town's Tier 4 received only 25 lines vs the 40-line budget.
- **Gap:** The executed brief had strong technique vocabulary per disposition (e.g., D-04 specifying exact px values for pull quotes, D-07 specifying rgba values for hover states). But the TEMPLATE does not enforce this level of specificity. The template says "include 1-2 content-specific observations" but does not require concrete CSS property:value pairs.
- **Proposed change:** Add to each D-XX template block: "REQUIRED: At least 2 CSS property:value pairs per disposition, drawn from tokens.css or value-tables.md. Example: 'D-04 technique: background: var(--color-text); font-size: 2rem; padding: 48px 0.' Dispositions without CSS vocabulary produce vague builder output."
- **Expected impact:** HIGH — the Gas Town retrospective identified "purpose-only dispositions" as a quality suppressor. Adding concrete CSS targets per disposition directly addresses the Gap between COMPOSED and DESIGNED.
- **Effort:** ~20 lines modified in artifact-tc-brief-template.md Tier 4.
- **Risk:** LOW — the executed brief already demonstrated this is achievable; this just makes it mandatory.

### E-07: Brief Assembler has no self-check for channel coverage completeness

- **Current state:** The Brief Assembler produces the brief and outputs it. There is no explicit self-verification step where the assembler checks that all 6 channels are addressed at every boundary.
- **Gap:** It is possible for a Brief Assembler to write boundary descriptions that mention 3 channels but forget the other 3. The builder then has no guidance for those channels and defaults to uniform treatment.
- **Proposed change:** Add to MANIFEST Phase 1 step list: "5b. SELF-VERIFY: Before outputting, verify: (a) Every boundary from the Content Map appears in Tier 3 with explicit channel-shift descriptions. (b) Each D-01 through D-08 has at least 2 CSS property:value pairs. (c) Total brief length is 100-165 lines. If any check fails, revise before output."
- **Expected impact:** MEDIUM — catches incomplete briefs before they reach the builder.
- **Effort:** ~10 lines added to MANIFEST Phase 1 and Brief Assembler prompt.
- **Risk:** LOW — self-check, no behavioral change.

### E-08: No explicit "layout variety requirement" in brief template

- **Current state:** artifact-builder-recipe.md Phase 3 mentions "at least 2 distinct layout patterns across the page. Single-column stack must not exceed 60% of zones." This appears in the recipe but NOT in the TC Brief Template.
- **Gap:** The Brief Assembler may not propagate this requirement to Tier 3 since it is buried in the 840-line recipe. The builder receives it indirectly through the recipe reference but not as an explicit brief instruction.
- **Proposed change:** Add to TC Brief Template Tier 3 "Creative Authority + Components" section: "Layout variety: deploy at least 2 distinct layout patterns (grid, multi-column, side-by-side). Single-column stack must not exceed 60% of zones. Specify which zones use non-standard layouts based on Content Map register analysis."
- **Expected impact:** MEDIUM — directly prevents the "uniform single-column" failure mode that depresses spatial composition scores.
- **Effort:** ~5 lines added to artifact-tc-brief-template.md.
- **Risk:** LOW — already exists in the recipe; this surfaces it in the brief.

### E-09: Mode determination lacks a structured rubric

- **Current state:** MANIFEST Phase 0.5 says "APPLIED = content-first, low-medium heterogeneity. COMPOSED = design-first, high heterogeneity + metaphor viability." The orchestrator makes this decision based on unstructured Phase 0 output.
- **Gap:** There is no scoring rubric for mode determination. An orchestrator could classify marginal content as COMPOSED when APPLIED would produce better results, or vice versa. The Gas Town content was clearly COMPOSED-appropriate, but edge cases are unaddressed.
- **Proposed change:** Add a 3-question binary rubric to artifact-orchestrator.md Section 4: "(1) Is structural heterogeneity HIGH (3+ element types varying across sections)? (2) Does the Content Map identify at least 1 metaphor seed at LOW risk? (3) Are there 2+ content tensions with clear dominant poles? If all 3 = YES: COMPOSED. If 2/3 = YES: COMPOSED with lower target (PA-05 2.5-3.0). If 1/3 or 0/3: APPLIED."
- **Expected impact:** LOW-MEDIUM — prevents mode misclassification for edge-case content. Gas Town was unambiguous.
- **Effort:** ~15 lines added to artifact-orchestrator.md Section 4.
- **Risk:** LOW — binary rubric, easy to apply.

---

## Phase 2: Building

### E-10: Builder prompt does not include the worked example of a good brief

- **Current state:** The builder receives: Execution Brief + tokens.css + components.css + mechanism-catalog.md + value-tables.md + optionally CD-006. The builder does NOT receive artifact-worked-examples.md.
- **Gap:** The worked examples file shows what "good" looks like at every pipeline stage. The builder has no reference for what a successfully-built page's structure looks like except CD-006 (optional, ~1200 lines). A short worked example of CSS structure (zone variable naming, boundary treatment pattern) could prime the builder for COMPOSED mode.
- **Proposed change:** Add to builder prompt template: "REFERENCE: Here is an excerpt of zone variable naming and boundary CSS from a COMPOSED-mode build that scored PA-05 3/4:" followed by 20-30 lines of CSS from the Gas Town output showing concept-based custom properties and one boundary transition.
- **Expected impact:** MEDIUM — worked examples are proven to improve LLM output quality. The builder currently has no example of what "composed CSS" actually looks like.
- **Effort:** ~30 lines added to MANIFEST Appendix E Builder prompt, ~30 lines of CSS excerpt added to artifact-worked-examples.md.
- **Risk:** MEDIUM — could anchor the builder to the Gas Town aesthetic. Mitigate by showing only structural patterns (variable naming, boundary pattern) not specific colors or spacing values.

### E-11: Builder lacks explicit "avoid" patterns from this pipeline's failures

- **Current state:** The builder receives NO information about failure modes. The pipeline philosophy is "don't show the builder what can go wrong, show them what to do." This is correct in principle but means the builder has no awareness of the most common defects.
- **Gap:** The Gas Town execution produced 4 gate failures (GR-05 cold color, GR-11 BG delta, GR-14 visual gap, GR-17 density stacking) and 2 BLOCKING issues (trailing void, cold color). Some of these are preventable by the builder without exposure to gate thresholds — for example, the trailing void is a CSS body/html height bug that a brief note would prevent.
- **Proposed change:** Add to artifact-builder-recipe.md Phase 3 a "Common Pitfalls" subsection (recipe format, not prohibition format): "CHECK: Does `html` or `body` have an explicit height? Remove it — pages should size to content. CHECK: Are ALL accent colors warm? Cold blues and purples violate the palette. CHECK: For each zone boundary, test: can you SEE the background color difference at arm's length? If not, increase the delta."
- **Expected impact:** HIGH — the trailing void was a trivial CSS bug that cost PA-05 0.25 points. A 3-line reminder prevents it.
- **Effort:** ~15 lines added to artifact-builder-recipe.md Phase 3.
- **Risk:** LOW — framed as recipe checks, not prohibitions. Does not expose gate thresholds.

### E-12: Builder has no explicit responsive breakpoint guidance

- **Current state:** The recipe mentions "Responsive (1440px + 768px)" in Phase 5 output targets but provides no specific responsive design patterns or breakpoint guidance.
- **Gap:** The Gas Town build had NO responsive breakpoints — it was fluid (scales proportionally) not responsive (reorganizes). 3/9 auditors flagged this. The builder received no instruction on what should change at 768px.
- **Proposed change:** Add to artifact-builder-recipe.md Phase 3 after Step 3.4: "Step 3.6: Deploy responsive breakpoints. At 768px: stack multi-column grids to single column. Increase touch targets to 44px minimum. Adjust font-size if needed for readability. Check: role cards, comparison tables, and side-by-side layouts must reorganize, not just shrink." Add a responsive example to artifact-worked-examples.md.
- **Expected impact:** HIGH — directly addresses a 3/9 auditor-flagged defect. Responsive design is currently not actionably specified.
- **Effort:** ~20 lines added to artifact-builder-recipe.md, ~20 lines of responsive CSS example to artifact-worked-examples.md.
- **Risk:** LOW — purely additive guidance.

### E-13: Builder conviction statement is under-specified

- **Current state:** Builder outputs a "conviction statement (2-5 sentences) as an HTML comment at the top." The MANIFEST specifies this but the builder prompt template just says "Write a CONVICTION STATEMENT (2-5 sentences) as an HTML comment at the top."
- **Gap:** The conviction statement is critical for the REBUILD path — a fresh builder reads it to understand intent. But the format is vague. A builder might write "I built this page about Gas Town" (useless) or "This page uses the refinery metaphor to create spatial memory through 6 zones with wave-pattern density" (useful).
- **Proposed change:** Add a conviction statement template to the builder prompt: "Your conviction statement must include: (1) The governing metaphor and why, (2) The density arc pattern, (3) One CSS choice you are proudest of, (4) The emotional arc target. Example: 'This page is a refinery tour. The reader enters at intake (sparse, philosophical) and exits through dispatch (evaluative, releasing). The wave-pattern density — two peaks at Z2 and Z5 — mirrors the content's own oscillation between theory and practice. The zone-adapted callout padding is the detail I am signing.'"
- **Expected impact:** LOW-MEDIUM — only matters if the build fails and enters REBUILD. But when it matters, it matters enormously.
- **Effort:** ~10 lines added to MANIFEST Appendix E Builder prompt.
- **Risk:** LOW — additive.

### E-14: Builder has no "component adoption checklist"

- **Current state:** The brief says "Aim for 10+ component library classes" and the recipe says "Check components.css for matching classes BEFORE writing custom CSS." But there is no structured moment where the builder maps Content Map zones to specific components.css classes.
- **Gap:** Gas Town used 17 component classes (good) but reinvented ~200 lines of CSS that existed in the library (bad, per recipe analysis). A structured mapping step would catch this.
- **Proposed change:** Add to artifact-builder-recipe.md Phase 1 Step 1.2: "After reading components.css, create a COMPONENT ADOPTION MAP as an HTML comment: for each zone, list which components.css classes you will use and which you will need to create custom. Target: 8+ adopted, 0 reinvented (check all existing classes before creating new ones)."
- **Expected impact:** MEDIUM — reduces CSS bloat and improves component consistency.
- **Effort:** ~10 lines added to recipe Phase 1.
- **Risk:** LOW — structural exercise, no constraint change.

### E-15: Builder self-evaluation lacks structured checkpoints

- **Current state:** Phase 5 says "Screenshot and assess vs conviction" and "Apply the Skeleton Test (D-08)." But the builder prompt template (MANIFEST Appendix E) simply says "PHASE 5 - SELF-EVALUATE: Every zone transition = different room? 3+ transition types? Skeleton has shape?"
- **Gap:** These are good questions but they are unstructured. A builder that "self-evaluates" by answering "yes" to all three without evidence will produce lower quality than one that takes an actual screenshot and measures.
- **Proposed change:** Add to builder prompt template: "PHASE 5: Take a Playwright screenshot of your full page at 1440px. Open it with the Read tool. Assess: (a) Can you distinguish EVERY adjacent zone pair by background color at arm's length? If not, increase deltas. (b) Count your zone transitions — do they use 3+ distinct visual patterns? (c) Does the bottom third have as much visual interest as the top third? Fix any issues before outputting."
- **Expected impact:** HIGH — builder self-evaluation with actual screenshots catches defects before they reach the PA audit. The Gas Town builder produced sub-threshold BG deltas (Z2-Z3 delta=11, Z3-Z4 delta=8) that a screenshot self-check would have caught.
- **Effort:** ~15 lines modified in MANIFEST Appendix E Builder prompt.
- **Risk:** MEDIUM — adds builder execution time (~5-10 min for screenshot + assessment). Must not trigger REPAIR mode — frame as creative refinement, not defect-fixing.

---

## Phase 3A: Gate Runner

### E-16: Gate runner does not check html/body explicit height

- **Current state:** The gate runner checks 16 REQUIRED gates (identity + perception) and 3 RECOMMENDED anti-pattern gates. There is no gate for the "trailing void" defect that was the #1 BLOCKING issue (9/9 auditors flagged it).
- **Gap:** The trailing whitespace void was caused by an explicit `height` or `min-height` on `body` or a container element. This is a trivially detectable CSS bug but no gate checks for it.
- **Proposed change:** Add gate GR-43 (RECOMMENDED): "Page Height Sanity. Check: `document.body.scrollHeight` vs last content element's `getBoundingClientRect().bottom`. FAIL if scrollHeight exceeds last content bottom + 200px. Evidence: OBSERVED (Gas Town, 5+ viewport-heights of blank space after footer)."
- **Expected impact:** HIGH — catches the single most common and most damaging defect type (9/9 unanimous). Trivial to implement.
- **Effort:** ~20 lines of Playwright JS added to artifact-gate-runner.md Section 3.
- **Risk:** LOW — binary check, no false positive risk if threshold is generous (200px accounts for footer padding).

### E-17: Gate runner does not run responsive gates at 1024px

- **Current state:** Gates run at 1440px, then responsive gates re-run at 768px. 1024px is not tested.
- **Gap:** The pipeline captures screenshots at 3 viewports (1440, 1024, 768) but only runs programmatic gates at 2. Some defects may appear only at 1024px (tablet breakpoint). The Gas Town build had no responsive breakpoints, so 1024px testing would have caught the same issues 768px did — but for a build WITH breakpoints, 1024px is where logic errors often appear.
- **Proposed change:** Run REQUIRED gates (GR-01 through GR-16) at 1024px in addition to 1440px and 768px.
- **Expected impact:** LOW — diminishing returns; most defects appear at 768px. But cheap to implement.
- **Effort:** ~5 lines added to gate runner execution protocol.
- **Risk:** LOW — additive.

### E-18: Anti-pattern gate GR-22 (CSS budget misallocation) not implemented

- **Current state:** The MANIFEST lists GR-22 as an anti-pattern gate that checks CSS budget distribution, but the gate runner executable JavaScript (per the document note) only covers GR-17, GR-18, GR-20.
- **Gap:** The Flagship experiment historically spent 22% of CSS on imperceptible micro-typography. Without GR-22, this failure mode is undetected until the PA audit.
- **Proposed change:** Implement GR-22 as Playwright JS: parse the `<style>` tag, categorize CSS lines by function (layout, typography, spacing, color, interaction, micro-typography), FAIL if any single category exceeds 30% of total CSS lines.
- **Expected impact:** MEDIUM — prevents CSS budget misallocation that historically caused imperceptible micro-typography.
- **Effort:** ~40 lines of JS added to artifact-gate-runner.md.
- **Risk:** MEDIUM — CSS categorization heuristics may be imprecise. Advisory (not REQUIRED) classification mitigates.

### E-19: Gate runner lacks a warm-color comprehensiveness check

- **Current state:** GR-05 checks warm palette using specific hex comparisons for the 3 primary colors. The Gas Town build failed GR-05 with 98 cold color violations on `.role-card__level`.
- **Gap:** GR-05 checks primary colors but the current check may not scan ALL computed background-color and color values for cold colors. A more comprehensive check would flag any `rgb(R,G,B)` where B > R (cold) on non-code-block elements.
- **Proposed change:** Enhance GR-05 implementation: for every element, compute `getComputedStyle(el).color` and `getComputedStyle(el).backgroundColor`. FAIL if any non-code-block, non-syntax-highlight element has B > R by more than 20 points. Exclude elements inside `<pre>`, `<code>`, and `.code-block` (syntax highlighting is exempt).
- **Expected impact:** MEDIUM — catches stray cold colors comprehensively. Gas Town had 98 violations that a more thorough check would have caught.
- **Effort:** ~25 lines modified in artifact-gate-runner.md GR-05.
- **Risk:** LOW — binary check with reasonable exclusions for syntax highlighting.

---

## Phase 3A: Screenshot Capture

### E-20: No full-page screenshot at any viewport

- **Current state:** Screenshot capture takes cold-look + scroll-through at 80% viewport-height steps. There is no single full-page screenshot.
- **Gap:** A full-page screenshot lets auditors see the ENTIRE density arc, zone proportions, and skeleton at a glance. Scroll-through screenshots show local quality but make it hard to assess global proportion. Several PA questions (PA-10 squint test, PA-32 visual weight distribution, PA-52 thirds analysis) would benefit from a full-page image.
- **Proposed change:** Add to Phase 3A: "For each viewport width, also capture a FULL-PAGE screenshot using Playwright's `fullPage: true` option. Save as `screenshots/{width}/full-page.png`. PA auditors receive this as their FIRST image before scroll-through."
- **Expected impact:** MEDIUM — improves PA auditor gestalt impression quality, especially for proportion and skeleton questions.
- **Effort:** ~5 lines added to MANIFEST Phase 3A and screenshot protocol in artifact-pa-protocol.md Part 5.
- **Risk:** LOW — additive. Full-page screenshots can be very large for long pages (10000+ px tall); file size may be significant.

### E-21: No hover-state screenshots

- **Current state:** All screenshots are static. Hover states (D-07 edge intentionality) are invisible to PA auditors.
- **Gap:** D-07 specifies hover states as a key delight mechanism. Gas Town scored 2/10 on delight. PA auditors cannot see hover states in static screenshots, so they cannot assess D-07 effectiveness. This means delight is systematically under-measured.
- **Proposed change:** After standard screenshots, the orchestrator should hover over 3-5 interactive elements (table rows, links, cards) and capture hover-state screenshots. Save as `screenshots/hover/element-{n}.png`. Add to PA auditor prompts: "Also review hover-state screenshots if provided."
- **Expected impact:** LOW-MEDIUM — addresses the delight measurement gap but adds orchestrator work. Only matters for content with significant interactive elements.
- **Effort:** ~20 lines added to screenshot protocol, ~5 lines to PA auditor prompt.
- **Risk:** LOW — additive, optional.

---

## Phase 3B: PA Audit

### E-22: PA Auditor C has 14 questions (2x average load)

- **Current state:** Auditor C (Spatial + Proportion) has 14 questions (PA-09-11, PA-30-33, PA-50-53, PA-55, PA-64, PA-66). Average load is 7.2 questions. Auditor C has nearly double.
- **Gap:** Question overload on one auditor may reduce answer quality. Auditor C covers void prevention (PA-50-53), sub-perceptual detection (PA-55), AND spatial proportion (PA-09-11, PA-30-33), AND two Tier 5 questions (PA-64, PA-66). These are thematically related but the sheer volume may cause shallower responses.
- **Proposed change:** Split Auditor C into two: "C1: Spatial Proportion" (PA-09-11, PA-30-33 = 7 questions) and "C2: Void Prevention + Perception" (PA-50-53, PA-55, PA-64, PA-66 = 8 questions). This increases auditor count from 9 to 10 but keeps each under 8 questions.
- **Expected impact:** MEDIUM — improves depth of spatial and void analysis. The Gas Town verdict showed void prevention was the #1 issue; a dedicated auditor might catch it faster and with more detail.
- **Effort:** ~30 lines modified in artifact-pa-protocol.md Part 4, ~10 lines in MANIFEST Section 2.
- **Risk:** MEDIUM — adds 1 agent (cost increase ~7%). Breaking thematic grouping could fragment spatial coherence assessment.

### E-23: PA auditors lack a "density arc assessment" question

- **Current state:** PA questions cover individual aspects (transitions, spacing, rhythm) but no question explicitly asks "Does the page have a perceivable density arc — do zones get denser and then release?"
- **Gap:** The density arc is a core compositional framework (Phase 6 temporal composition), but no PA question directly measures it. PA-35 ("interest peak and valley") approximates it but asks about interest, not density. PA-32 ("visual weight distributed purposefully") is closer but doesn't ask about arc shape.
- **Proposed change:** Add PA-71 (assigned to Auditor D): "Starting from the top, describe how information density changes as you scroll. Does it follow a recognizable pattern (crescendo, wave, plateau-taper)? Or is density random/uniform?" YES = pattern named and consistent. NO = uniform or random.
- **Expected impact:** MEDIUM — explicitly measures a core pipeline concept that is currently unmeasured.
- **Effort:** ~5 lines added to artifact-pa-protocol.md Part 3, question assigned to Auditor D.
- **Risk:** LOW — additive question.

### E-24: PA auditors do not assess component library adoption

- **Current state:** No PA question asks whether the page uses a consistent component library or whether components are ad hoc.
- **Gap:** Component adoption (target: 8+ library classes) affects coherence, cross-page consistency, and build efficiency. But it is only measured by the gate runner's quality floor check (>=14 mechanisms), not by perceptual assessment.
- **Proposed change:** Add PA-72 (assigned to Auditor E): "Look at repeating visual elements (cards, callouts, code blocks, tables). Do they feel like they come from a shared component kit, or does each one look independently designed?" YES = consistent kit. NO = ad hoc.
- **Expected impact:** LOW — component adoption is more a quality-of-code issue than a visual quality issue. But it correlates with coherence.
- **Effort:** ~5 lines added to artifact-pa-protocol.md.
- **Risk:** LOW — additive.

### E-25: Integrative Auditor receives no structure for gestalt impression

- **Current state:** The Integrative Auditor receives "ALL 9 PA auditor reports + ALL screenshots" with the instruction to write a "free-form gestalt impression." No template or structure is provided.
- **Gap:** Free-form gestalt risks being unfocused. The Gas Town Integrative Auditor contradicted 8/9 auditors on the trailing void severity ("does not damage reading experience" vs everyone else saying BLOCKING). A structured framework might have caught this.
- **Proposed change:** Add to Integrative Auditor prompt: "Structure your gestalt impression around these 5 dimensions: (1) CONVERGENCE: What issues do multiple auditors agree on? Count consensus. (2) CONTRADICTIONS: Where do auditors disagree? What is the evidence for each side? (3) BLIND SPOTS: What aspects of the page did NO auditor address? (4) SEVERITY CALIBRATION: For each convergence issue, classify as BLOCKING/SIGNIFICANT/MODERATE/MINOR using the calibration in your instructions. (5) PA-05 SYNTHESIS with evidence."
- **Expected impact:** MEDIUM — reduces the risk of the Integrative Auditor producing a contradictory or unfocused report. Directly addresses the Gas Town case where the Integrative Auditor disagreed with unanimous consensus.
- **Effort:** ~15 lines added to MANIFEST Appendix E Integrative Auditor prompt.
- **Risk:** LOW — adds structure without constraining impression.

### E-26: No auditor is assigned to assess the header specifically

- **Current state:** PA-29 asks "In the header area, count how many different text styles you see. Are more than three fighting for attention?" (Auditor B) and PA-39 asks "how much is header vs actual content?" (Auditor E). But no question assesses whether the header meets SC-09 (Header DNA: dark background, 3px red bottom border).
- **Gap:** The header is the "page's signature" per soul constraint SC-09. Gate GR-07 checks this programmatically, but the PA audit does not perceptually assess whether the header FEELS authoritative, dense, and purposeful. The Gas Town header passed gates but perceptual assessment of header quality was spread across multiple auditors without focus.
- **Proposed change:** Add PA-73 (assigned to Auditor A): "Does the header feel like a confident signature — dense, purposeful, authoritative? Does it establish the page's identity in under 2 seconds? Or does it feel generic / template-like?"
- **Expected impact:** LOW — the header is already gate-checked and incidentally assessed.
- **Effort:** ~5 lines added.
- **Risk:** LOW — additive.

---

## Phase 3C: Verdict and Weaver

### E-27: Weaver verdict does not account for gate failure severity hierarchy

- **Current state:** The Weaver receives gate results as structured JSON and applies priority-order verdict logic. But the Weaver prompt (MANIFEST Appendix E) lists the logic without specifying how to handle COMBINATIONS of failure types.
- **Gap:** Gas Town had 1 identity FAIL (GR-05, cold color) AND 2 perception FAILs (GR-11, GR-14) AND 1 anti-pattern FAIL (GR-17). The verdict logic says "ANY identity gate FAIL = REBUILD" but the Weaver issued "SHIP WITH FIXES" — a more nuanced judgment. The current prompt does not explain when the Weaver can override the strict verdict logic based on defect triviality (cold color on one class = trivially fixable, not a systemic soul violation).
- **Proposed change:** Add to Weaver prompt: "SEVERITY OVERRIDE: If an identity gate failure is confined to a single CSS class/selector (e.g., one wrong color on one component), classify as MECHANICAL and downgrade from REBUILD to REFINE. REBUILD is reserved for SYSTEMIC soul violations (e.g., border-radius on all elements, shadow system deployed). Evidence: the Weaver must explain the override with specific scope."
- **Expected impact:** MEDIUM — prevents unnecessary REBUILD verdicts for trivial fixes. Gas Town's cold-color issue was a 5-minute fix, not a rebuild.
- **Effort:** ~10 lines added to Weaver prompt in MANIFEST Appendix E.
- **Risk:** MEDIUM — opens the door for Weavers to over-downgrade real violations. Mitigate by requiring explicit scope evidence.

### E-28: Weaver's "Artistic Impression" output is unstructured

- **Current state:** The Weaver produces "OUTPUT B — ARTISTIC IMPRESSION: NO numbers/gates, describe what the page FEELS like using emotional arc registers." No template.
- **Gap:** If the build enters REFINE, the artistic impression is what the next builder sees. An unstructured artistic impression may not convey the specific compositional weaknesses that need addressing. "The middle sags" is useful but "The middle sags because Z4's six identical blockquotes create visual drone, and the density arc peaks at Z2 but never peaks again until Z5 — the valley between them is flat, not recovering" is more actionable.
- **Proposed change:** Add structure to OUTPUT B in Weaver prompt: "Your artistic impression must cover: (1) What the page FEELS like in one sentence (the gestalt). (2) Where the energy PEAKS (name specific zones/scrolls). (3) Where the energy DROPS (name zones/scrolls). (4) What is MISSING emotionally (which of the 4 registers — Surprise, Delight, Authority, Closure — is weakest). (5) One image/metaphor for what the page IS (e.g., 'a lecture that forgets to land the conclusion')."
- **Expected impact:** MEDIUM — makes the REFINE builder's input richer and more actionable.
- **Effort:** ~10 lines added to Weaver prompt.
- **Risk:** LOW — structured artistic language, not diagnostic.

---

## Phase 4: Fix/Refine/Rebuild Cycles

### E-29: REFINE builder receives no CSS-specific fix targets

- **Current state:** REFINE protocol: "Give it: original brief, Pass 1 output, PA weaver's artistic impressions. DO NOT give: gate scores, threshold numbers, diagnostic language." The REFINE builder enters COMPOSITIONAL mode.
- **Gap:** The REFINE builder knows WHAT feels wrong (artistic impression) but not WHERE in the CSS to look. "The middle sags" doesn't tell the builder whether to adjust Zone 4 backgrounds, spacing, component variety, or typography. The original brief has the zone architecture but the REFINE builder must re-derive the fix location.
- **Proposed change:** Add to REFINE protocol: "Additionally give the REFINE builder: (a) A ZONE MAP showing zone names and approximate scroll positions (so they can locate issues in the HTML). (b) The conviction statement from the original builder (so they understand intent)."
- **Expected impact:** MEDIUM — reduces REFINE builder ramp-up time and improves fix targeting.
- **Effort:** ~10 lines added to MANIFEST Phase 3C REFINE protocol and Appendix E.
- **Risk:** LOW — zone map and conviction are not diagnostic data.

### E-30: No automated REFINE path for trivial mechanical fixes

- **Current state:** Single-pass default. REFINE and REBUILD are output labels; a human decides whether to re-run. There is no lightweight "auto-fix" for trivially mechanical issues.
- **Gap:** The Gas Town BLOCKING fixes were: (1) remove trailing void — likely a single CSS property, (2) change cold color — a single hex value. These two fixes would take a human 10 minutes. But the pipeline has no mechanism for the orchestrator to attempt trivial fixes without spawning a full REFINE builder.
- **Proposed change:** Add to MANIFEST Phase 3C: "MECHANICAL FIX PATH: If ALL blocking issues are classified as MECHANICAL by the Weaver, AND there are 3 or fewer blocking issues, the orchestrator MAY attempt direct CSS patches before spawning a REFINE builder. The orchestrator reads the gate failure details, makes targeted CSS edits, re-runs gates, and re-captures screenshots. If all gates pass after mechanical fixes, proceed to PA re-audit. This is a TIME OPTIMIZATION, not a quality path — it only applies to trivially mechanical fixes like wrong hex color or explicit height removal."
- **Expected impact:** HIGH — saves 60+ minutes of REFINE builder spawning for trivial CSS bugs. Gas Town's two BLOCKING issues would have been resolved in 10 minutes.
- **Effort:** ~25 lines added to MANIFEST Phase 3C.
- **Risk:** MEDIUM — the orchestrator must correctly judge what is "mechanical." Mitigate by restricting to Weaver-classified MECHANICAL fixes only, with a 3-fix cap.

---

## Cross-Phase: Artifact-Level Enrichments

### E-31: artifact-value-tables.md has a below-threshold example without warning label

- **Current state:** Pair 8 in the value tables has delta 11 (below 15 threshold). The document notes it as "BELOW THRESHOLD — avoid" but it is listed alongside usable pairs.
- **Gap:** A Brief Assembler or builder scanning the table quickly could pick Pair 8 without reading the footnote. This exact failure mode occurred: Gas Town had Z2-Z3 delta=11 and Z3-Z4 delta=8.
- **Proposed change:** Remove Pair 8 from the usable pair table and move it to a separate "WARNING: Below-threshold pairs (DO NOT USE)" section. Add to each pair's row a "PASS/WARN" indicator column.
- **Expected impact:** LOW — small formatting change that reduces a specific error mode.
- **Effort:** ~10 lines modified in artifact-value-tables.md.
- **Risk:** LOW — formatting change only.

### E-32: artifact-worked-examples.md is incomplete

- **Current state:** The worked examples file has: Example 1 (Content Map — full), Example 2 (Execution Brief — "see separate file"), and presumably more. But the file is only ~100 lines and references rather than includes key examples.
- **Gap:** The worked examples are supposed to show what "good" looks like at every pipeline stage. Without inline examples of gate results, PA excerpts, and CSS patterns, the file is an index rather than a teaching document.
- **Proposed change:** Expand artifact-worked-examples.md to include: (a) 20 lines of Gas Town CSS showing concept-based custom properties and one boundary transition. (b) 10 lines of gate runner output excerpt. (c) 10 lines of PA auditor report excerpt showing perceptual language quality. (d) The Content Map is already included.
- **Expected impact:** MEDIUM — richer worked examples help all pipeline agents calibrate quality expectations.
- **Effort:** ~60 lines added to artifact-worked-examples.md.
- **Risk:** LOW — additive reference material.

### E-33: artifact-builder-recipe.md Phase 3 "Component adoption" lacks a decision tree

- **Current state:** "Check components.css for matching classes BEFORE writing custom CSS. Adopt and extend existing classes, never reinvent."
- **Gap:** The builder reads "adopt and extend" but has no decision tree for when to adopt vs extend vs create new. The Gas Town builder reinvented ~200 lines of CSS that existed in components.css.
- **Proposed change:** Add a 3-step decision tree to Phase 3: "For each visual element you need: (1) CHECK: Does components.css have a class for this? (YES -> adopt verbatim). (2) CHECK: Does components.css have a similar class? (YES -> extend with zone-specific overrides). (3) Only if no similar class exists: CREATE new. Track your adopt/extend/create ratio — target 60%+ adopt."
- **Expected impact:** MEDIUM — directly reduces CSS reinvention.
- **Effort:** ~10 lines added to recipe Phase 3.
- **Risk:** LOW — structured guidance.

### E-34: MANIFEST Appendix E prompts lack a "CRITICAL RULES" section for each agent

- **Current state:** Each agent prompt template lists what the agent receives and what to do. Some include "CRITICAL RULES" (Brief Assembler) but others don't.
- **Gap:** The Builder prompt has phases but no "CRITICAL RULES" section. Rules like "Container 940-960px" and "ALL backgrounds warm" could be overlooked in a 30-line recipe prompt. A 3-5 line CRITICAL RULES block at the top of each prompt would surface the most important constraints.
- **Proposed change:** Add to each agent prompt template in MANIFEST Appendix E: "CRITICAL RULES (read first):" — 3-5 rules specific to that agent. Builder: "Container 940-960px. ALL background colors warm (R>=G>=B). No explicit height on body/html. Target 800-1200 CSS lines. border-radius: 0 on ALL elements."
- **Expected impact:** MEDIUM — surfaces critical constraints that are otherwise buried.
- **Effort:** ~20 lines added across 7 prompt templates.
- **Risk:** LOW — summary extraction, no new information.

### E-35: No cross-artifact consistency check

- **Current state:** 9 artifact files + MANIFEST + council-verdict.md define the pipeline. There is no automated or manual consistency check to verify that changes to one artifact are reflected in others.
- **Gap:** The MANIFEST references specific line counts and section headers in artifacts. If an artifact is modified (e.g., adding a new gate), the MANIFEST's coverage tables and line counts become stale. The Gas Town execution revealed no consistency issues, but as the pipeline evolves, drift will accumulate.
- **Proposed change:** Add a "CONSISTENCY CHECKLIST" appendix to MANIFEST.md: a 10-item list of cross-artifact invariants that must be true (e.g., "Total PA question count in artifact-pa-protocol.md Part 3 matches count in MANIFEST Section 2," "Gate count in artifact-gate-runner.md matches MANIFEST Section 3 coverage table"). Run this checklist before each pipeline execution.
- **Expected impact:** LOW — maintenance hygiene, not directly tied to visual quality.
- **Effort:** ~20 lines added to MANIFEST.
- **Risk:** LOW — checklist, no behavioral change.

### E-36: TC Brief Template does not specify the zone background color plan format

- **Current state:** Tier 3 says "background color -- zone-to-zone deltas using the full 15-50 RGB range" but does not specify an output format for the background color plan.
- **Gap:** The Gas Town brief included excellent background color specifications with hex values and RGB deltas (e.g., "#FEF9F5 to #EDE6DA, delta ~27"). But this was due to a strong Brief Assembler, not template enforcement. A weaker assembler might write "use warm backgrounds that vary."
- **Proposed change:** Add to TC Brief Template Tier 3 "Multi-Coherence" section: "For each zone boundary, specify: exact hex pair from value-tables.md, RGB delta, and perceptual intent (subtle/confident/dramatic). OUTPUT FORMAT: Z1(#hex)->Z2(#hex) delta=XX INTENT."
- **Expected impact:** HIGH — eliminates the class of "sub-perceptual background delta" defects by making the Brief Assembler commit to specific values from the pre-computed table.
- **Effort:** ~10 lines added to artifact-tc-brief-template.md.
- **Risk:** MEDIUM — makes the brief more prescriptive. The builder may feel constrained. Mitigate by saying "these are STARTING VALUES — adjust if your compositional judgment requires it."

### E-37: Content Analyst prompt does not specify output format

- **Current state:** Content Analyst prompt says "Output format: See artifact-worked-examples.md Example 1 for the exact structure." But the worked example is 66 lines and has sections the spec does not require (Content Tensions, Metaphor Seeds).
- **Gap:** A Content Analyst that follows the spec's 6 operations (classify, heterogeneity, metaphor, per-section character, density arc, reader model) will produce a different output than one that follows the worked example (which adds tensions, metaphor seeds with risk ratings, and reader profile axis positions). The spec and the example are misaligned.
- **Proposed change:** Update artifact-routing.md "Phase 0: Content Analysis Protocol" to match the worked example's actual output: add Content Tensions (operation 7) and Metaphor Seeds (as part of operation 3, with risk ratings and recommendation). Update the Content Analyst prompt in MANIFEST Appendix E to match.
- **Expected impact:** MEDIUM — aligns spec with practice. Prevents future Content Analysts from omitting the tensions/seeds that proved valuable.
- **Effort:** ~15 lines added to artifact-routing.md, ~10 lines to MANIFEST prompt.
- **Risk:** LOW — codifies what already works.

---

## Ranked Priority List: Top 20

Ranked by (expected visual quality impact) / (implementation effort), with considerations for risk.

| Rank | ID | Enrichment | Impact | Effort | Risk | Phase |
|------|-----|-----------|--------|--------|------|-------|
| **1** | E-16 | Add GR-43: Page Height Sanity gate (trailing void detection) | HIGH | ~20 lines JS | LOW | Gate Runner |
| **2** | E-11 | Add "Common Pitfalls" recipe section (trailing void, cold colors, BG delta) | HIGH | ~15 lines | LOW | Build |
| **3** | E-36 | Require exact hex pairs + delta for zone backgrounds in brief | HIGH | ~10 lines | MED | Brief Assembly |
| **4** | E-05 | Require boundary-by-boundary channel count table in Tier 3 | HIGH | ~15 lines | MED | Brief Assembly |
| **5** | E-06 | Require 2+ CSS property:value pairs per disposition in Tier 4 | HIGH | ~20 lines | LOW | Brief Assembly |
| **6** | E-12 | Add explicit responsive breakpoint guidance to recipe | HIGH | ~40 lines | LOW | Build |
| **7** | E-15 | Structured builder self-evaluation with actual screenshots | HIGH | ~15 lines | MED | Build |
| **8** | E-30 | Mechanical Fix Path for trivial BLOCKING issues | HIGH | ~25 lines | MED | Fix Cycles |
| **9** | E-25 | Structured Integrative Auditor gestalt framework | MED | ~15 lines | LOW | PA Audit |
| **10** | E-10 | Include CSS worked example in builder prompt | MED | ~60 lines | MED | Build |
| **11** | E-08 | Surface layout variety requirement in brief template | MED | ~5 lines | LOW | Brief Assembly |
| **12** | E-01 | Add per-section register vocabulary to Content Map | MED | ~15 lines | LOW | Content Analysis |
| **13** | E-02 | Add transition weight recommendations to Content Map | MED | ~10 lines | LOW | Content Analysis |
| **14** | E-07 | Brief Assembler self-check for channel coverage | MED | ~10 lines | LOW | Brief Assembly |
| **15** | E-27 | Weaver severity override for trivial identity failures | MED | ~10 lines | MED | Verdict |
| **16** | E-28 | Structured artistic impression template for Weaver | MED | ~10 lines | LOW | Verdict |
| **17** | E-34 | CRITICAL RULES header for each agent prompt | MED | ~20 lines | LOW | Cross-Phase |
| **18** | E-37 | Align Content Analyst spec with worked example output | MED | ~25 lines | LOW | Content Analysis |
| **19** | E-14 | Component adoption map exercise in recipe Phase 1 | MED | ~10 lines | LOW | Build |
| **20** | E-22 | Split Auditor C into C1 (Spatial) + C2 (Void/Perception) | MED | ~40 lines | MED | PA Audit |

### Implementation Waves

**Wave 1 (Highest ROI, ~2 hours):** E-16, E-11, E-36, E-05, E-06
These 5 enrichments address the top failure modes from Gas Town (trailing void, sub-threshold BG deltas, under-specified dispositions, incomplete channel coverage) with minimal effort and low risk.

**Wave 2 (High ROI, ~3 hours):** E-12, E-15, E-30, E-25, E-08
These address responsive design gaps, builder self-evaluation, and mechanical fix automation.

**Wave 3 (Medium ROI, ~3 hours):** E-01, E-02, E-07, E-10, E-27, E-28, E-34, E-37
These refine individual pipeline phases and improve agent prompt quality.

**Wave 4 (Low ROI, ~2 hours):** E-03, E-04, E-09, E-13, E-14, E-17, E-18, E-19, E-20, E-21, E-22, E-23, E-24, E-26, E-29, E-31, E-32, E-33, E-35
Polish and edge case coverage.

---

## Summary Statistics

| Category | Count | HIGH Impact | MEDIUM Impact | LOW Impact |
|----------|-------|-------------|---------------|------------|
| Phase 0: Content Analysis | 4 | 0 | 3 | 1 |
| Phase 1: Brief Assembly | 5 | 3 | 2 | 0 |
| Phase 2: Building | 6 | 3 | 3 | 0 |
| Phase 3A: Gate Runner | 4 | 1 | 2 | 1 |
| Phase 3A: Screenshots | 2 | 0 | 1 | 1 |
| Phase 3B: PA Audit | 5 | 0 | 3 | 2 |
| Phase 3C: Verdict/Weaver | 2 | 0 | 2 | 0 |
| Phase 4: Fix Cycles | 2 | 1 | 1 | 0 |
| Cross-Phase: Artifacts | 7 | 1 | 4 | 2 |
| **TOTAL** | **37** | **9** | **21** | **7** |

**Key insight:** The highest concentration of HIGH-impact enrichments is in Phase 1 (Brief Assembly) and Phase 2 (Building). This confirms the pipeline's foundational finding: the quality ceiling is set by what the builder receives and how it builds, not by how well defects are detected afterward. Enriching detection (PA, gates) catches problems earlier but does not prevent them. Enriching the brief and builder recipe prevents problems from occurring.

---

*End of enrichment surface area map. 37 opportunities identified across 8 pipeline phases + cross-phase artifacts. Top 5 enrichments (E-16, E-11, E-36, E-05, E-06) are estimated at ~80 lines of changes across 4 files and would address the dominant failure modes from the Gas Town VA Pipeline execution.*

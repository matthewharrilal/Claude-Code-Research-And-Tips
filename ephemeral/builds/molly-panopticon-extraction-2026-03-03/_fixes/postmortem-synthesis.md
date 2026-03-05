# Postmortem Synthesis: Root Cause Analysis

**Build:** `molly-panopticon-extraction-2026-03-03`
**Date:** 2026-03-03
**Inputs:** Visual Analysis, PA Failure Analysis, Pipeline Decision Trace, Quality Baseline Comparison
**Method:** Cross-report convergence analysis -- root causes that appear in multiple independent reports are weighted highest

---

## The One-Sentence Verdict

The pipeline produces pages that are structurally compliant, decoratively elaborate, and compositionally dead -- because every stage optimizes for traceable mechanism deployment while no stage evaluates the page as a visual whole.

---

## Root Causes, Ranked by Impact

### RC-1: NO STAGE EVALUATES THE PAGE AS A VISUAL WHOLE (SYSTEMIC FAILURE)

**Convergence: 4/4 reports**

- Visual Analysis: "Over-reliance on spacing as the primary visual mechanism" -- nobody measured the total gap
- PA Failure: "The PA system is structurally blind to basic visual craft quality"
- Pipeline Trace: "No stage in the pipeline evaluates the PAGE AS A VISUAL WHOLE"
- Quality Comparison: "PA compliance checks verify WHAT is present, not HOW it is arranged"

This is the deepest root cause. The TC brief describes a vision. Specialists extract findings. Package builders compile CSS blueprints. Builders deploy CSS per-element. The PA system evaluates atmosphere and compliance. At no point does any agent look at the rendered page and make compositional judgments about what works and what does not. The pipeline is a document-processing chain, not a visual design process.

**Evidence of damage:** The whitespace voids (152-232px dead zones), the invisible domain cards (0 RGB delta from zone), the perceptually identical mechanisms (subtle + subtle + subtle = still subtle) -- all of these are immediately obvious to a human looking at the page, and none were caught by any pipeline stage.

**Classification:** SYSTEMIC FAILURE -- this is not a prompt bug or an execution mistake. The pipeline architecture lacks the fundamental capability of whole-page visual evaluation.

**Fix:** Add a "visual composition" step between Builder Pass 2 and Pass 3. This step renders the page, scrolls through it at 1440px and 768px, and makes creative interventions based on what is SEEN rather than what was PRESCRIBED. This agent must have creative authority to restructure, not just refine. Alternatively, merge this capability into Pass 2 by requiring the builder to take and evaluate screenshots mid-build.

---

### RC-2: LAYOUT ARCHITECTURE IS FROZEN AT VERTICAL FLOW (SYSTEMIC FAILURE)

**Convergence: 3/4 reports**

- Pipeline Trace: "Creative ambition can only decrease across passes" -- Pass 1's structural conservatism is locked in
- Quality Comparison: "Increasing decoration, static structure across all builds" -- 2 layout types vs CD-006's 5
- Visual Analysis: "Uniform element shapes -- everything is full-width text blocks"

The pipeline consistently produces pages with one spatial strategy: vertical flow with optional bento grid. CD-006 achieved its quality through 5 distinct layout types (Z-pattern, F-pattern, Bento, Spiral, Choreography). Every pipeline build, regardless of content, produces the same vertical editorial scroll.

This is not a per-build failure. Quality Comparison confirmed it across 6 builds: "Each build iteration adds more CSS DECORATIVE richness. No build iteration changes the SPATIAL STRATEGY."

The mechanism catalog, the compositional questions, the TC brief invitations, and the PA checks all operate at the decoration level (color, spacing, typography, borders). None operate at the architecture level (how content is spatially arranged on the page).

**Classification:** SYSTEMIC FAILURE -- the pipeline's vocabulary does not contain the concept of layout diversity.

**Fix:**
1. Add a "Section Layout Rotation" mechanism to the mechanism catalog that requires distinct spatial strategies for major sections (full-width, narrow corridor, split-column, offset, inset, asymmetric grid).
2. TC briefs should specify layout TYPE per zone, not just density and atmosphere.
3. Builder Pass 1 should explicitly build varied HTML structures, not just heading hierarchies with uniform vertical flow.
4. Add a PA question: "Do 3+ consecutive sections share the same spatial layout? If yes, architecture problem."

---

### RC-3: THE PA LANGUAGE CONSTRAINT CONVERTS CRAFT FAILURES INTO ATMOSPHERIC POETRY (VALIDATION FAILURE)

**Convergence: 3/4 reports**

- PA Failure: "The language constraint is the single most important mechanism enabling false-positive SHIP verdicts"
- Pipeline Trace: "Nobody stands back and looks at the result" -- the PA system was supposed to be this, but cannot
- Visual Analysis: identified specific problems (232px voids, 0-delta cards, no syntax highlighting) that auditors could see but could not articulate

The PA auditor prompt bans all CSS vocabulary (px, rem, hex, rgb, border-radius, box-shadow, padding, margin, font-size...) and replaces it with experiential vocabulary (heavy, light, cramped, spacious...). This was designed to prevent code-review contamination of perceptual assessment.

The result: craft failures become atmospheric observations. "There is a 200px gap with no content" becomes "the page holds its breath." "The cards have no visual interest" becomes "specimens under examination." "The code is illegible" is never mentioned at all because there is no experiential way to express illegibility -- it is a binary craft fact.

All 5 auditors converged on the header-to-Part-I dead zone as their "worst thing" in cold look. All 5 gave REFINE. The Weaver overrode to SHIP after a fix cycle that addressed secondary issues. The language constraint did not prevent auditors from seeing problems -- it prevented them from expressing problems in actionable terms.

**Classification:** VALIDATION FAILURE -- the PA system works as designed, but the design prevents it from catching the most common class of build failures (craft-level visual problems).

**Fix:**
1. Relax the language constraint: keep the ban on CSS property names but allow dimensional descriptions ("large gap," "small text," "plain boxes," "minimal styling," "identical rectangles").
2. Add 3-5 craft-quality questions to the PA set: "Is there a section that looks undercooked?", "Can you read ALL text comfortably?", "Point to the most and least visually interesting strips -- how different are they?", "Does this look distinctively crafted or like a nice template?"
3. Add detail-crop screenshots to the PA protocol -- auditors need 100% zoom of complex areas, not just full-page views.

---

### RC-4: MULTIPLICATIVE SPACING WITH NO TOTAL-GAP MEASUREMENT (PROMPT FAILURE)

**Convergence: 3/4 reports**

- Visual Analysis: measured exact stacking -- 128-232px dead zones from padding compounds
- Pipeline Trace: "Spacing is prescribed per-element and per-zone but nobody measures the STACK"
- Quality Comparison: "Spacing is QUANTITATIVELY rich but may lack PERCEPTUAL anchoring"

The TC brief prescribes spacing as ranges per zone (64-80px for Datum Point). The package transmits these as CSS values per component. The builder applies them to every element. Container padding (80px) + section padding (64px) + element margin (80px) + element padding (80px) = 304px around a 90px text block. Each individual value is within spec. The total is catastrophic.

Pass 3 includes an anti-pattern check: "Measure TOTAL gap at every zone boundary. Flag any sum > 200px." The builder's reflection does not mention measuring stacked gaps. The check was documented but never executed.

**Classification:** PROMPT FAILURE -- the instructions exist but are ineffective. Per-element spacing prescriptions without total-gap enforcement will always produce compound voids.

**Fix:**
1. Change spacing prescription from per-element ranges to total-gap budgets: "The maximum vertical gap between any two content elements in Datum Point is 120px, measured rendered."
2. Add a builder validation step: after CSS is complete, measure the 5 largest rendered gaps. If any exceeds the zone budget, reduce until compliant.
3. Make Pass 3 hardening check executable: instead of "measure total gap" (vague), require "run `getBoundingClientRect()` on adjacent content elements and report any gap > Xpx" (specific).

---

### RC-5: MECHANISM DEPLOYMENT IS MEASURED, PERCEPTUAL EFFECT IS NOT (SYSTEMIC FAILURE)

**Convergence: 3/4 reports**

- Pipeline Trace: "M04 deployed means the CSS exists. It does not mean the reader FEELS the CRESCENDO."
- Quality Comparison: "The pipeline's quality improvement trajectory is asymptoting along the wrong axis"
- PA Failure: "Compliance assessment (10/10 FOLLOWED) overwhelms perceptual assessment"

All 8 mechanisms were deployed. All 24 findings addressed. All 7 questions explored. The builder's decisions files are meticulous. And the page is bland.

Typography CRESCENDO from 16px/1.8 to 15px/1.55 = 1px body font difference. Border gradient from 4px to 3px = effectively invisible. Three code block atmospheres with 16 RGB-point deltas = indistinguishable. Each mechanism is individually subtle by design ("felt, not consciously noticed"). When EVERY variation is sub-conscious, nothing registers. The page needed 2-3 moments of OVERT visual drama and got zero.

The pipeline counts deployments, not effects. "M04 deployed" checks a box. "Does the page feel progressively denser as you scroll?" is never asked.

**Classification:** SYSTEMIC FAILURE -- the pipeline measures the wrong thing. Deployment tracking is necessary for traceability but is a proxy for quality, not quality itself.

**Fix:**
1. For each mechanism, define a perceptual test: "Can a cold viewer identify which zone is densest without being told?" If not, the mechanism failed regardless of CSS correctness.
2. Require at least 2-3 mechanisms to operate at OVERT scale (>30px spacing differences, >40 RGB-point color differences, distinct element types rather than subtle gradients).
3. Add a "drama budget" to the builder prompt: "At least 3 moments in the page should produce visual surprise -- a layout shift, a strong color contrast, or a component type that appears nowhere else."

---

### RC-6: THE WEAVER CAN OVERRIDE 5/5 REFINE VERDICTS WITHOUT ACCOUNTABILITY (VALIDATION FAILURE)

**Convergence: 2/4 reports**

- PA Failure: "The Weaver override power has no check" -- 5/5 cold looks said REFINE, Weaver shipped
- Pipeline Trace: fix cycle "creates a perception of progress without addressing the fundamental quality gap"

The Weaver prompt says: "Your experiential anchor outranks auditor reports." All 5 auditors gave REFINE in cold look. The Weaver overrode to SHIP after one fix cycle. The fix cycle addressed 5 secondary issues (dark zone uniformity, green tint, quote grouping). The primary issues (dead zones, bland cards, illegible code, lack of character) were never in scope because the Weaver curated the fix list.

The compliance assessment (Output 4: 10/10 FOLLOWED, 90+ lines) dominates the synthesis and creates a "green dashboard" that overwhelms the perceptual signals (13 lines of Experience Portrait). The Weaver processes a wall of green checks and gravitates toward SHIP.

**Classification:** VALIDATION FAILURE -- the Weaver role has structural power without structural constraint.

**Fix:**
1. Hard constraint: if all auditors give REFINE in cold look, the Weaver cannot issue SHIP without documenting why each auditor's "worst thing" was wrong.
2. Separate compliance assessment from perceptual verdict -- Output 4 should be a separate file that the Weaver does NOT see when making the SHIP/REFINE decision.
3. Fix cycle scope: must address every auditor's cold-look "worst thing," not just the Weaver's curated list.

---

### RC-7: DOMAIN CARDS KILLED BY DELTA-COMPLIANCE FIX (EXECUTION FAILURE)

**Convergence: 2/4 reports**

- Visual Analysis: "Card background is IDENTICAL to the zone background. Zero delta."
- Pipeline Trace: "The delta-compliance fix killed the card visibility"

The TC brief suggested white (#FFFFFF) cards on a warm gray zone. Pass 3 hardening changed the zone from #FFFFFF to #EBE7E3 to meet the 15-point RGB delta requirement at zone boundaries. The builder then set card background to the SAME #EBE7E3 as the zone. The fix that was supposed to improve visual quality destroyed it.

**Classification:** EXECUTION FAILURE -- a compliance fix was applied without checking its downstream effects on card visibility.

**Fix:** When changing a zone background, the builder must re-check all component backgrounds within that zone against the new zone color. This should be an explicit Pass 3 validation step: "For each zone background change, verify component-to-zone delta >= 15 RGB points."

---

### RC-8: HALF-DEPTH QUESTION EXPLORATION TREATED AS COMPLETE (EXECUTION FAILURE)

**Convergence: 2/4 reports**

- Pipeline Trace: "Q1 explored 3 of 7 channels, flagged for later passes, never completed"
- Visual Analysis: "Survey marks use only left-border thickness (4px/3px/1px) with no other visual differentiation"

Q1 asked the builder to encode time horizons across the domain grid using 5-7 channels (border-width, padding, background temperature, font-size, grid sizing). The builder deployed 3 channels (border-width, padding, padding-variation). The builder's decisions file flagged this for future passes. Neither Pass 2 nor Pass 3 extended it. The result: domain cards are differentiated by border thickness alone, which is below casual perception threshold.

**Classification:** EXECUTION FAILURE -- the handoff between passes dropped flagged work.

**Fix:**
1. Builder Pass 1 decisions file must include a "FLAGGED FOR PASS 2" section that Pass 2 is required to address.
2. Pass 2 prompt must include: "Check the Pass 1 decisions file for flagged items. These are your highest priority."
3. Consider enforcing a minimum channel count per question: "If a question invites N channels and you deploy fewer than N-2, you must document why the remaining channels were rejected, not just deferred."

---

## Impact Ranking Summary

| Rank | Root Cause | Classification | Convergence | Damage |
|:---:|---|---|:---:|---|
| 1 | No stage evaluates page as visual whole | SYSTEMIC | 4/4 | All visible defects invisible to pipeline |
| 2 | Layout architecture frozen at vertical flow | SYSTEMIC | 3/4 | Structural uniformity across ALL builds |
| 3 | PA language constraint blocks craft assessment | VALIDATION | 3/4 | False-positive SHIP on bland page |
| 4 | Multiplicative spacing, no total-gap measurement | PROMPT | 3/4 | 152-232px dead zones |
| 5 | Mechanism deployment measured, not effect | SYSTEMIC | 3/4 | 8 mechanisms deployed, none perceptible |
| 6 | Weaver override without accountability | VALIDATION | 2/4 | 5/5 REFINE overridden to SHIP |
| 7 | Domain cards killed by delta-compliance fix | EXECUTION | 2/4 | 8 invisible cards |
| 8 | Half-depth question exploration | EXECUTION | 2/4 | Single-channel differentiation |

---

## The Single Highest-Leverage Change

**Add a visual composition step that renders the page and makes creative interventions based on what is SEEN.**

This is RC-1 -- the root cause that all four reports converge on. Every other root cause is a downstream consequence of this absence:

- Whitespace voids (RC-4) would be caught by seeing the page
- Invisible cards (RC-7) would be caught by seeing the page
- Layout monotony (RC-2) would be caught by seeing the page
- Imperceptible mechanisms (RC-5) would be caught by seeing the page
- PA false-positive (RC-3, RC-6) would be unnecessary if the builder caught problems first

The pipeline currently has zero render-and-evaluate steps. The builder writes CSS blind. The PA system evaluates atmosphere, not craft. Between these two stages, there is a gap where a visual composition agent should stand -- one that renders the page, scrolls through it, identifies the 5 weakest visual moments, and fixes them with creative authority.

This single addition would address RC-1 directly, RC-4 and RC-5 and RC-7 indirectly, and reduce the burden on PA (RC-3, RC-6) by catching craft failures before they reach validation.

---

## Is the Architecture Fundamentally Broken?

No. But it is fundamentally incomplete.

The pipeline is excellent at what it does: extracting creative intelligence from content, compiling research into actionable packages, and deploying mechanisms with full traceability. These are hard problems and the pipeline solves them well. The Mar-03 build is the quantitatively richest Molly Panopticon build ever produced -- 1592 CSS lines, 39 colors, 210 class selectors, 8 mechanisms deployed, 14 labeled code blocks.

What the pipeline lacks is a visual design sensibility -- the ability to look at the rendered result and say "this doesn't work" and fix it. Human designers do this constantly. They write CSS, refresh the browser, squint, and adjust. The pipeline writes CSS and never looks.

The architecture needs two additions:
1. **Mid-build visual composition** (between Pass 2 and Pass 3) -- render, evaluate, intervene
2. **Layout diversity vocabulary** (in the mechanism catalog) -- spatial strategies, not just decorative treatments

Everything else (PA language relaxation, total-gap budgets, Weaver constraints, detail screenshots) is important but secondary. Fix the two fundamental gaps and the secondary problems become manageable or disappear.

---

## Classified Fix Priority

### Tier 1: Addresses root architecture gaps (do before next build)

1. Add visual composition step between Pass 2 and Pass 3 (RC-1)
2. Add layout diversity mechanism to catalog + TC brief + builder prompt (RC-2)
3. Change spacing from per-element ranges to total-gap budgets (RC-4)

### Tier 2: Fixes validation blind spots (do before next PA cycle)

4. Relax PA language constraint to allow craft observations (RC-3)
5. Add 3-5 craft-quality PA questions (RC-3)
6. Separate compliance assessment from perceptual verdict in Weaver (RC-6)
7. Add Weaver override constraint for unanimous REFINE (RC-6)
8. Add detail-crop screenshots to PA protocol (RC-3)

### Tier 3: Prevents specific execution failures (do in prompt revision)

9. Require component-to-zone delta check after zone background changes (RC-7)
10. Require Pass 2 to address Pass 1 flagged items (RC-8)
11. Define perceptual tests per mechanism (RC-5)
12. Add "drama budget" requiring 3+ moments of overt visual surprise (RC-5)

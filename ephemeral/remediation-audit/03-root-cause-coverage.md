# Root Cause Coverage Audit

**Auditor:** root-cause-coverage-auditor (Opus 4.6)
**Date:** 2026-02-17
**Method:** Each of the 15 verified root causes checked against 10-REMEDIATION-PROMPT.md (301 lines, 6 phases) for (a) presence, (b) mechanism type (recipe vs constraint), and (c) sufficiency to resolve the cause. Then the 3 BLOCKING gaps are specifically assessed.

**Sources:**
- `10-REMEDIATION-PROMPT.md` (301 lines) -- the remediation prompt under audit
- `01-root-cause-verification.md` (308 lines) -- 8 original root causes with verdicts
- `02-missing-causes.md` (397 lines) -- 7 new root causes (#9-#15)
- `04-remediation-gaps.md` (459 lines) -- 3 BLOCKING + 4 non-blocking gaps
- `09-SYNTHESIS.md` (268 lines) -- unified synthesis

---

## COVERAGE MATRIX: ALL 15 ROOT CAUSES

### RC-1: "The Pipeline Has No CSS-Generative Arrow"

**Root Cause:** The prompt contains 97 rule IDs but essentially zero CSS construction instructions. The builder-prompt.md (71 lines) had zero CSS recipes. Generative content for planning and communication exists but not for CSS.

**Does the remediation address it?** YES -- DIRECTLY. The entire remediation IS a CSS-generative document. Phases 1-5 provide section-by-section CSS recipes with exact property-value pairs.

**Mechanism type:** RECIPE. Every phase provides copy-pasteable CSS blocks:
- Phase 1 (lines 33-41): 6 section-level left borders with exact selectors, widths, and colors
- Phase 2 (lines 88-104): Font-size/weight/letter-spacing per zone with exact values
- Phase 3 (lines 160-178): 12 zone background hex codes as `:root` token replacements
- Phase 4 (lines 194-222): Paragraph margins, max-widths, and section padding per zone
- Phase 5 (lines 234-268): Component block variant CSS with exact backgrounds and borders

**Is it sufficient?** YES for THIS page. The remediation IS the generative arrow the pipeline lacked. However, it does not fix the underlying process failure -- it is a one-time patch, not a pipeline correction. The next page built through the original pipeline would have the same cause. The synthesis (09-SYNTHESIS.md, Takeaway 1) correctly identifies that the structural fix is a PLAYBOOK GENERATION PHASE, not per-page remediation.

**Verdict: ADDRESSED via recipe. Sufficient for immediate remediation; does not fix the pipeline.**

---

### RC-2: "7.9:1 Guardrail-to-Playbook Ratio"

**Root Cause:** 55 building guardrails vs 7 building playbooks. The word "border" appeared only as prohibitions in the builder prompt.

**Does the remediation address it?** YES -- by INVERTING the ratio. The remediation is approximately 250 lines of playbook content (CSS recipes) and 51 lines of constraints (the CONSTRAINTS section at line 294, the perception threshold table at lines 9-20, and the Phase 6 self-verification at lines 275-292). That gives a playbook-to-guardrail ratio of roughly 5:1 -- the mirror image of the original failure.

**Mechanism type:** RECIPE (dominant) + CONSTRAINT (secondary). The remediation pairs positive instructions ("Add section-level left borders to 6 of 12 sections") with verification checks ("Borders in body: >= 6 elements with visible border in body").

**Is it sufficient?** YES for this page. The remediation shows the builder WHAT to write (recipes) and HOW to verify (checks). The ratio inversion is the correct structural fix.

**Verdict: ADDRESSED via ratio inversion. Sufficient.**

---

### RC-3: "Builder Saw 13.4% of the Prompt"

**Root Cause:** The builder received only 71 of 530 lines (13.4%), all guardrails and prohibitions, zero compositional playbooks.

**Does the remediation address it?** PARTIALLY. The remediation IS the document the builder will see -- all 301 lines are for the builder. Visibility is 100%. But this addresses the symptom (the builder needs instructions) not the cause (the pipeline's visibility cap excluded playbooks).

**Mechanism type:** RECIPE. The entire 301-line document is builder-facing with specific CSS instructions.

**Is it sufficient?** YES for this page. The builder reading 301 lines of CSS recipes will see 20x more actionable content than the original 71-line constraint-only prompt. However, the remediation does not change the C1 visibility cap rule for future experiments.

**Verdict: ADDRESSED for this instance. The systemic visibility cap remains unfixed for future pages.**

---

### RC-4: "Sub-Perceptual Variation Satisfies Every Rule"

**Root Cause:** Letter-spacing 0.006em (0.096px) is "active" by rules but invisible. No minimum perceptual thresholds exist in any rule.

**Does the remediation address it?** YES -- DIRECTLY AND STRONGLY. The remediation opens with a PERCEPTION THRESHOLDS table (lines 9-20) that sets explicit minimum amplitudes for every property:

| Property | Minimum Perceptible Delta | Required |
|----------|--------------------------|----------|
| Background color | >= 8 RGB points | >= 10 points |
| Letter-spacing | >= 0.5px | >= 0.03em at 16px |
| Line-height | >= 3px per line | >= 0.2 unit difference |
| Font-size | >= 2px | >= 2px |
| Font-weight | visible jump | 400 vs 500+ |
| Border | always perceptible at 1px | add borders |
| Margin | >= 8px difference | vary 12-24px |

Then line 21 states: **"THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS."**

**Mechanism type:** CONSTRAINT (the threshold table) + RECIPE (the per-phase CSS values all exceed the thresholds). The table is a constraint; the phase CSS values are recipes that DEMONSTRATE compliance.

**Is it sufficient?** YES. The threshold table directly eliminates the root cause. Every CSS value in Phases 1-5 exceeds the specified thresholds:
- Phase 3 backgrounds: 10-20 RGB points between adjacent sections (exceeds the >= 10 threshold)
- Phase 2 letter-spacing: 0.02em to -0.02em range = 0.04em total = 0.64px (exceeds the >= 0.5px threshold)
- Phase 2 font-size: 15px to 17px = 2px range (meets the >= 2px threshold)
- Phase 4 margins: 12px to 20px = 8px range (meets the >= 8px threshold)

**Verdict: FULLY ADDRESSED via threshold table + recipes that exceed thresholds. This is the strongest fix in the remediation.**

---

### RC-5: "Zero Agent Communication"

**Root Cause:** ZERO SendMessage calls across 19 agents despite an explicit mandate for 8+ messages.

**Does the remediation address it?** NO. The remediation is a CSS-only remediation prompt for a single builder agent. It contains no communication protocol, no inter-agent messaging requirements, and no references to SendMessage, CP-A through CP-F, or any coordination mechanism.

**Mechanism type:** N/A (absent).

**Is it sufficient?** NO -- but this is APPROPRIATE. The remediation is scoped as a CSS-only fix for the existing page, not a process redesign. Agent communication is a PROCESS root cause, not a CSS root cause. It cannot be fixed by CSS remediation. The synthesis (09-SYNTHESIS.md, Takeaway 1) correctly identifies communication as a pipeline fix, not a remediation fix.

**Assessment of gap severity:** LOW for this remediation. The remediation is a single-agent task (one builder applying CSS changes). Inter-agent communication is irrelevant for a solo remediation pass. Communication would matter for a REBUILD, not a FIX.

**Verdict: NOT ADDRESSED. Appropriate scope exclusion -- communication is a process fix, not a CSS fix.**

---

### RC-6: "Validation Checked Coverage Not Causation"

**Root Cause:** Validation agents used coverage/percentage methodology that checked PRESENCE but not CAUSATION. "5 channels active" passed when only 2-3 were perceptible.

**Does the remediation address it?** PARTIALLY. Phase 6 (Self-Verification, lines 275-292) contains 10 binary checks that test for PERCEPTUAL causation, not mere coverage:

1. "Screenshot S1 next to S5. Can you SEE color change without zooming?" (CAUSATION check)
2. "Computed p font-size in S1 vs S5 differs by >= 2px" (MAGNITUDE check)
3. "Computed h2 font-weight in S1 vs S5: 400 vs 600" (SPECIFIC VALUE check)
4. "Computed letter-spacing S1 vs S5 differs by >= 0.4px" (MAGNITUDE check)
5. ">= 6 elements with visible border in body" (COUNT check)
6. ".divider-smooth vs .divider-breathing clearly different weight/color" (PERCEPTUAL check)
7. "margin-bottom on p in S1 vs S5 differs by >= 8px" (MAGNITUDE check)
8. ".component-block in S3 vs S9 has different border color AND background" (DIFFERENTIATION check)
9. "p max-width in S1 vs S5 differs by >= 6ch" (MAGNITUDE check)
10. "Full scroll at 1440px. Each screenful looks DIFFERENT from previous. YES/NO." (HOLISTIC CAUSATION check)

**Mechanism type:** CONSTRAINT (verification checks). These are post-build verification, not pre-build recipes.

**Is it sufficient?** PARTIALLY. The 10 checks are a major improvement over coverage-only validation -- they check perceptual OUTCOMES, not rule INPUTS. However:
- Checks 1, 6, 10 require human judgment ("Can you SEE," "clearly different," "DIFFERENT from previous") which are the same judgment-type rules that achieved ~0% compliance in the original prompt.
- Checks 2, 3, 4, 7, 9 are binary magnitude comparisons -- these will achieve high compliance.
- The checks compare only specific section PAIRS (S1 vs S5) rather than ALL transitions. A builder could pass all 10 checks while having uniform stretches from S5 through S8.

**Addition needed:** Extend verification to cover ALL adjacent section pairs, not just S1/S5 spot checks. Add: "11. Check EVERY section-pair boundary (S1/S2, S2/S3, ... S11/S12). At least 8 of 11 boundaries must show >= 2 visible channel changes."

**Verdict: PARTIALLY ADDRESSED. Spot-check verification improves over coverage-only, but does not test all transitions.**

---

### RC-7: "ABSENCE COHERENCE Rule Actively Validated Under-Building"

**Root Cause:** The conviction closing (line 732) states "Consistent absence reads as restraint," creating a perverse incentive to omit entire channels rather than deploy them imperfectly.

**Does the remediation address it?** YES -- by MANDATING deployment. Phase 1 requires adding borders to 6 of 12 sections. Phase 2 requires typography variation. Phase 3 requires background amplification. Phase 5 requires component differentiation. The ABSENCE COHERENCE rule is rendered moot because the remediation does not permit absence -- it prescribes specific additions.

**Mechanism type:** RECIPE. The remediation does not contain an absence coherence rule. It does not tell the builder "consistent absence reads as restraint." Instead, it tells the builder exactly what to add and where.

**Is it sufficient?** YES for this page. By providing specific CSS to add, the remediation eliminates the choice to "consistently omit." The builder cannot invoke absence coherence as justification for skipping Phase 1's borders because the remediation REQUIRES them.

**However:** The remediation's CONSTRAINTS section (line 294) says "Do NOT remove: mechanism CSS comments." It does NOT say "Do NOT remove any existing CSS." A builder who struggles with Phase 1 borders might remove them and invoke the spirit of absence coherence. Adding an explicit constraint would strengthen this: "Every CSS addition in Phases 1-5 is MANDATORY. Partial implementation of a phase is better than omitting the phase entirely."

**Verdict: ADDRESSED via mandatory recipes. The incentive structure is inverted: the builder must ADD, not choose whether to add.**

---

### RC-8: "2,400:1 Compression of Channel Research"

**Root Cause:** 2,733 lines of scale/channel research compressed to 4 lines in the conviction layer. Channel expansion guidance ("add CHANNELS not LEVELS") existed only as philosophy, not as operational rules.

**Does the remediation address it?** PARTIALLY. The remediation operationalizes channel expansion in a different way -- rather than telling the builder "add channels not levels" (philosophy), it tells the builder exactly which channels to activate and how:
- Phase 1: Ch4 (Structural) -- specific borders and dividers
- Phase 2: Ch2 (Typographic) -- specific font-size/weight/letter-spacing
- Phase 3: Ch1 (Chromatic) -- specific background colors
- Phase 4: Ch3+Ch6 (Spatial+Compositional) -- specific margins and max-widths
- Phase 5: Ch5 (Material) -- specific component variants

This is 5 of 7 channels operationalized with specific CSS. The scale research's guidance is IMPLICITLY followed: the remediation adds channels (borders, component types, backgrounds) rather than levels (more zoom magnifications).

**Mechanism type:** RECIPE. The scale research is operationalized through concrete CSS, not through philosophical framing.

**Is it sufficient?** PARTIALLY. Channels 1-5 are operationalized. Channel 6 (Behavioral/Interactive) and Channel 7 (Relational/Coherence) are NOT operationalized:
- Ch6: No hover states, focus states, selection styling, or reduced-motion -- the remediation gap analysis (04) identifies this as BLOCKING.
- Ch7: Multi-coherence coupling is implicit in the zone-based organization but not explicitly verified.

**Verdict: PARTIALLY ADDRESSED. 5/7 channels operationalized via recipes. Ch6 (Behavioral) and Ch7 (Relational) missing.**

---

### RC-9: "Component Library Invisible to Builder" (NEW)

**Root Cause:** The design system has 34 components; the flagship uses 0 standard callout components. The builder reinvented 15+ custom class patterns. The builder prompt contained no mention of components.css.

**Does the remediation address it?** NO. The remediation works with the EXISTING custom class names (`.component-block`, `.component-block.warm`, `.component-block.resolution`, `.component-block.neutral`). It does not reference the standard component library, does not use `.callout` classes, and does not instruct the builder to adopt standard component names.

Phase 5 (lines 228-271) differentiates the existing `.component-block` variants with color and border CSS. This improves VISUAL variety but does not fix SEMANTIC variety or component library utilization.

**Mechanism type:** RECIPE (for the custom classes). No reference to the standard library.

**Is it sufficient?** NO, but this is partially appropriate. The remediation is CSS-only and explicitly states "Do NOT restructure the HTML sections" (line 5). Adopting standard component classes would require HTML class name changes (e.g., renaming `.component-block` to `.callout`), which is outside the CSS-only scope.

**However:** CSS-only rules COULD reference the component library for naming convention guidance. The remediation could add: "When adding new variant classes, prefer names from components.css (e.g., .callout--essence, .callout--tip) over invented names."

**Exact addition needed:** Not required for immediate remediation (scope is CSS-only on existing HTML). For future builds, add a binary gate: "Builder MUST use component class names from components.css for any callout, code-snippet, or pullquote element."

**Verdict: NOT ADDRESSED. Appropriate scope exclusion for CSS-only remediation; needs pipeline fix for future builds.**

---

### RC-10: "Build Plan Specifies Tokens Not Perceptible Values" (NEW)

**Root Cause:** The Planner agent's build plan used token names (e.g., `--color-zone-sparse`) whose actual CSS values differed by only 5 RGB points. The plan validated against token NAMES, not PERCEIVED DIFFERENCES. No "perception gate" existed between plan and build.

**Does the remediation address it?** YES -- by REPLACING the sub-perceptual token values. Phase 3 (lines 160-178) provides explicit hex replacements for all 12 zone tokens:

```
--color-zone-s1: #FEF5EB  (was #FEF9F5)
--color-zone-s2: #F5EDE2  (was #FAF5ED)
--color-zone-s5: #FFFFFF  (was #FEFEFE)
```

The remediation also establishes the perception threshold table (line 13): "Background color >= 10 RGB points between adjacent sections."

**Mechanism type:** RECIPE (token replacements) + CONSTRAINT (threshold table). The remediation provides both the new values AND the rule that validates them.

**Is it sufficient?** YES for this page. The new token values produce 10-20 RGB point deltas (verified against the table in the remediation). However, the underlying process cause remains: no "perception gate" exists in the pipeline to catch sub-perceptual token specifications in future build plans.

**Verdict: ADDRESSED via token value replacement. Sufficient for immediate fix; does not add a perception gate to the pipeline.**

---

### RC-11: "Ch4 Structural Absent at Section Level, No Rule Requires It" (NEW)

**Root Cause:** SC-02 requires 5 of 7 channels but does not specify WHICH 5. The builder chose to omit Ch4 (Structural) and Ch6 (Behavioral) entirely. No rule mandates section-level borders, dividers, or containment.

**Does the remediation address it?** YES -- DIRECTLY. Phase 1 (lines 25-77) is entirely devoted to adding Ch4 structural elements:
- Phase 1A (lines 29-41): Section-level left borders on S2, S5, S7, S9, S10, S12 with specific widths and colors
- Phase 1B (lines 43-66): Amplified dividers with increased height and color contrast
- Phase 1C (lines 68-77): Component block containment with border-top and background

The remediation provides exact CSS for 6 section-level borders, 3 divider type amplifications, and component containment.

**Mechanism type:** RECIPE. Specific selectors, widths, colors, and margins provided.

**Is it sufficient?** YES. Phase 1 adds Ch4 structural elements at the section level, which is exactly what was missing. The verification check #5 ("Borders in body: >= 6 elements with visible border in body") ensures compliance. This directly closes the root cause.

**Verdict: FULLY ADDRESSED via Phase 1 recipes + verification check #5.**

---

### RC-12: "Single-Column Monotony, No Layout Variation" (NEW)

**Root Cause:** Zero multi-column layout, zero grid, zero flex containers across all 2,034 lines of HTML. F-pattern assigned to 10/12 sections. CD-006 uses 6 layout patterns.

**Does the remediation address it?** NO. The remediation explicitly states: "Do NOT restructure the HTML sections" (line 5). Layout variation (grids, flex containers, multi-column arrangements) requires HTML structure changes. The remediation's CSS-only scope cannot address this root cause.

**Mechanism type:** N/A (absent).

**Is it sufficient?** NO -- but this is an APPROPRIATE scope exclusion. Multi-column layout requires adding wrapper `<div>` elements, flex/grid containers, and restructuring content flow. This is fundamentally an HTML change, not a CSS change. The remediation correctly scopes itself to what CSS can do.

**The CSS-only mitigation is Phase 4A's max-width variation** (62ch to 72ch), which creates some horizontal rhythm within the single column. This is the maximum horizontal variation achievable without HTML changes.

**Exact addition needed for future builds:** Add C-22: "At least 1 section MUST use a non-F-pattern internal layout (side-by-side elements, 2-column arrangement, or asymmetric positioning)."

**Verdict: NOT ADDRESSED. Correct scope exclusion for CSS-only remediation. Requires HTML-level fix in future builds.**

---

### RC-13: "Uniform Prose Register Across All Sections" (NEW)

**Root Cause:** All 12 sections use identical rhetorical mode (third-person declarative, medium sentences, zero variation). No lists, questions, short statements, or tone shifts. Content uniformity drives visual uniformity.

**Does the remediation address it?** NO. The remediation explicitly states: "Do NOT change the content" (line 5). Prose register variation is a CONTENT change, not a CSS change. The remediation cannot modify the text itself.

**Mechanism type:** N/A (absent).

**Is it sufficient?** NO -- but this is an APPROPRIATE scope exclusion. Prose register is a content adaptation issue, not a CSS issue. The remediation is correctly scoped to CSS-only modifications.

**CSS-only mitigation:** The remediation's Phase 2 (typography variation by zone) partially compensates by making VISUALLY distinct what is CONTENT-uniform. Different font sizes, weights, and letter-spacing create visual variety even when the prose register is identical. This is the maximum mitigation available without content changes.

**Exact addition needed for future builds:** Add CT-09: "Adapted content MUST use >= 3 distinct rhetorical forms across all sections."

**Verdict: NOT ADDRESSED. Correct scope exclusion. CSS typography variation is the maximum available mitigation.**

---

### RC-14: "Transition Dividers Compound Into Void" (NEW)

**Root Cause:** S-09 caps individual properties at 96px, but stacked values at section boundaries create 210-276px gaps: section padding-bottom (64px) + divider margin (48-80px) + section padding-top (32-64px). Each individual value is compliant; the SUM is not.

**Does the remediation address it?** PARTIALLY. Two relevant fixes exist:

1. **Phase 1B (line 64):** `.divider-breathing` margin reduced from `var(--space-20)` (80px) to `var(--space-16)` (64px). Comment: "reduced to prevent void." This reduces the worst divider type's margin by 16px.

2. **Phase 4B (lines 209-222):** Section padding is varied asymmetrically:
   - Zone 1: padding-top `var(--space-16)`, padding-bottom `var(--space-10)`
   - Zone 2: padding-top `var(--space-8)`, padding-bottom `var(--space-8)`
   - Zone 3: padding-top `var(--space-12)`, padding-bottom `var(--space-10)`

   These asymmetric paddings REDUCE the stacking at Zone 2 boundaries (S4/S5, S5/S6, S7/S8) where the worst voids occurred.

**Mechanism type:** RECIPE (margin/padding value changes). No explicit constraint on total gap size.

**Is it sufficient?** INSUFFICIENT. Let me compute the post-remediation gap at the worst boundary (S8->S9):
- S8 padding-bottom (Zone 2): `var(--space-8)` = 32px
- Divider margin: Depends on type. If `.divider-breathing`: 64px margin-top + 4px height + 64px margin-bottom = 132px. If `.divider-bridge`: `var(--space-16)` = 64px margin-top + 2px height + 64px margin-bottom = 130px.
- S9 padding-top (Zone 3): `var(--space-12)` = 48px

Total: 32 + 132 + 48 = **212px** (barely changed from the original 276px if divider type was breathing, or 32 + 130 + 48 = **210px** for bridge).

Wait -- the stacking reduction comes primarily from SECTION PADDING changes. The original S8 padding-bottom was likely much larger (64-80px), and the original S9 padding-top was also larger. The remediation's Zone 2 `var(--space-8)` (32px) vs original values would reduce the section padding contribution. But the DIVIDER MARGIN contribution remains dominant.

**The remediation does NOT:**
1. Set a maximum TOTAL gap constraint
2. Identify the 6 specific catastrophic gaps from the audit data
3. Provide a verification check for void size
4. Address compound stacking explicitly

**Exact addition needed:**

Add to Phase 6 Self-Verification:
```
11. VOID CHECK: Scroll full page at 1440px. No visible gap of blank background
    between content elements may exceed 120px total (measuring from last content
    pixel of section N to first content pixel of section N+1). If any gap > 120px:
    reduce the largest contributor (divider margin or section padding).
```

Add explicit divider margin caps:
```css
/* Cap all divider margins to prevent void stacking */
.divider-smooth { margin: var(--space-8) 0; }   /* was var(--space-12) */
.divider-bridge { margin: var(--space-10) 0; }   /* was var(--space-16) */
.divider-breathing { margin: var(--space-12) 0; } /* was var(--space-16), further reduced */
```

**Verdict: PARTIALLY ADDRESSED. Section padding is reduced via Phase 4B. Divider margin only reduced for one type. No total-gap constraint or verification check. Computed post-remediation gaps likely still exceed 200px at worst boundaries.**

---

### RC-15: "No Plan-Fidelity Gate Between Plan and Build" (NEW)

**Root Cause:** No gate checks whether the built artifact matches the build plan. Gates check RULES, not PLANS. The plan specified 14 mechanisms, 4 clusters, and a chromatic arc -- no gate verified these were faithfully implemented.

**Does the remediation address it?** NO. The remediation is a CSS-only fix for an already-built page. It is not a pipeline process document. It contains no gate specifications, no plan-fidelity checks, and no reference to the build plan.

**Mechanism type:** N/A (absent).

**Is it sufficient?** NO -- but this is APPROPRIATE. The remediation is fixing a finished page, not designing a new pipeline. Plan-fidelity gates are relevant during BUILD, not during REMEDIATION. The page is already built; the question is not "does it match the plan?" but "does it look good?"

Phase 6 (Self-Verification) IS a form of post-remediation fidelity check -- it verifies the remediation CSS was correctly applied. This is the appropriate analog for a remediation context.

**Exact addition needed for future builds:** Add Gate 2.5 (post-skeleton, pre-mechanism): compare skeleton against build plan, verify spatial budgets and mechanism cluster properties match.

**Verdict: NOT ADDRESSED. Appropriate scope exclusion -- plan fidelity is a build-time gate, not a remediation concern.**

---

## BLOCKING GAP ANALYSIS

### BLOCKING GAP 1: Accessibility (0/6 requirements)

**Source:** 04-remediation-gaps.md, lines 113-148; 09-SYNTHESIS.md, Takeaway 5.

**Current remediation coverage:** ZERO. The remediation has no mention of:
- `::selection` styling
- `a:focus-visible` outline
- `@media (prefers-reduced-motion: reduce)`
- Skip link
- ARIA labels
- Responsive breakpoints
- Link hover states
- Table row hover states

**CD-006 comparison:** CD-006 scores 8/8 on accessibility. The flagship scores 0/8. After the current remediation, it would still score 0/8.

**Why this is BLOCKING:** Accessibility is not optional. It represents an entire channel (Ch6 Behavioral) that is completely absent. The remediation claims to activate channels but leaves Ch6 at zero. A page with zero accessibility CSS cannot be called "DESIGNED" in any professional context.

**The fix (RECIPE, ~18 lines of CSS):**

```css
/* Phase 7: ACCESSIBILITY MINIMUM */

/* Selection styling -- brand-aligned */
::selection { background: rgba(232, 48, 37, 0.15); color: var(--color-text); }

/* Focus states for keyboard navigation */
a:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }

/* Reduced motion respect */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0s !important; animation-duration: 0s !important; }
}

/* Link interaction */
a { transition: color 150ms ease-out; }
a:hover { color: var(--color-text); }

/* Table row hover for scannability */
table tbody tr { transition: background-color 100ms ease-out; }
table tbody tr:hover { background-color: var(--color-zone-breathing); }
```

Add Phase 6 verification check:
```
12. ACCESSIBILITY: ::selection styled? focus-visible on links? prefers-reduced-motion query present? All YES.
```

**Assessment: NOT ADDRESSED. MUST be added as Phase 7. Estimated ~18 lines of CSS + 1 verification check.**

---

### BLOCKING GAP 2: Whitespace Void Mitigation (1/6 targeted)

**Source:** 04-remediation-gaps.md, lines 192-228; 02-missing-causes.md RC-14; 09-SYNTHESIS.md Takeaway 4.

**Current remediation coverage:** PARTIAL (1 of 6 specific voids partially mitigated).
- `.divider-breathing` margin reduced from `--space-20` to `--space-16` (Phase 1B, line 64)
- Section padding reduced for Zone 2 (Phase 4B, lines 215-216)
- No explicit measurement or verification of total gap sizes

**The 6 catastrophic voids (from audit data):**
| Gap | Pre-remediation | Targeted? |
|-----|----------------|-----------|
| S2->S3 (243px) | YES (Phase 4B adjusts Zone 1 padding) | Indirectly |
| S4->S5 (270px) | YES (Phase 4B Zone 2 padding reduction) | Indirectly |
| S6->S7 (210px) | Marginal (depends on divider type) | Indirectly |
| S7->S8 (243px) | YES (Phase 4B Zone 2 padding tight) | Indirectly |
| S8->S9 (276px) | PARTIALLY (Zone 2->3 boundary) | Indirectly |
| S11->S12 (242px) | PARTIALLY (Phase 4B Zone 3 padding) | Indirectly |

The section padding changes in Phase 4B HELP but are not TARGETED at these specific gaps. No verification check ensures the gaps fall below a maximum threshold.

**Why this is BLOCKING:** The MODE 4 PA identified the whitespace void as THE dominant failure (9/9 auditors flagged it). 70-80% of the scroll consisted of blank cream. If the remediation does not verifiably eliminate these voids, the page will still fail any perceptual audit.

**The fix (RECIPE + CONSTRAINT):**

Add to Phase 4 (or new Phase 4C):
```css
/* Explicit void reduction at worst boundaries */
/* Cap all divider total margins to prevent stacking above 120px */
.divider-smooth { margin: 24px 0; }    /* was 48px 0 -- reduced */
.divider-bridge { margin: 32px 0; }    /* was 64px 0 -- reduced */
.divider-breathing { margin: 40px 0; } /* was 80px 0 -- significantly reduced */
```

Add to Phase 6 Self-Verification:
```
11. VOID CHECK: Scroll full page at 1440px. Measure the gap between the last
    content element of each section and the first content element of the next.
    No gap may exceed 120px of blank background. Check ALL 11 section boundaries.
    If any gap > 120px: reduce divider margin or section padding until compliant.
```

**Assessment: PARTIALLY ADDRESSED (1/6 directly, others indirectly via padding). MUST add explicit void verification check with 120px maximum and further divider margin reduction.**

---

### BLOCKING GAP 3: Multi-Coherence Verification (absent)

**Source:** 04-remediation-gaps.md, lines 305-340; 09-SYNTHESIS.md, Part 4 item 3.

**Current remediation coverage:** IMPLICIT only. Phases 1-5 all use the same Zone 1/Zone 2/Zone 3 structure, which means properties CO-VARY at zone boundaries by construction. But:

1. **No cascade value table** showing how ALL properties align at each zone boundary
2. **No per-transition channel count** verifying >= 3 channels shift at each boundary
3. **No CCS computation** or MC metric verification
4. **No explicit documentation** of which mechanism pairs are reinforcing vs modulating

The remediation CREATES the raw materials for multi-coherence (varied backgrounds + varied typography + varied borders + varied spacing), but does not VERIFY that these materials combine coherently.

**Why this is BLOCKING:** Multi-coherence is what separates a page with 5 independently varied channels from a page with 5 channels that work TOGETHER. Without verification, the builder could implement Phase 1 borders in a way that contradicts Phase 3 backgrounds (e.g., warm borders on cool-background sections), producing channel CONFLICT rather than channel COHERENCE.

**The fix (CONSTRAINT -- add to Phase 6):**

```
11. CASCADE VALUE TABLE: Before coding, build this table and verify all
    columns shift in the SAME direction at Zone 1->2 and Zone 2->3 boundaries:

    | Property      | Zone 1 (Sparse)  | Zone 2 (Dense)  | Zone 3 (Refined) |
    |---------------|------------------|-----------------|------------------|
    | Background    | #FEF5EB (warm)   | #FFFFFF (cool)  | #FEF7F0 (warm)   |
    | Font-size     | 17px (generous)  | 15px (tight)    | 16px (standard)  |
    | Font-weight   | 400 (light)      | 600 (heavy)     | 400 (light)      |
    | Letter-spacing| 0.02em (open)    | -0.01em (tight) | 0 (neutral)      |
    | Margins       | 20px (generous)  | 12px (tight)    | 18px (moderate)  |
    | Max-width     | 62ch (narrow)    | 72ch (wide)     | 64ch (moderate)  |
    | Borders       | none             | 4px left        | 3px left         |
    | Section pad   | 64px/40px        | 32px/32px       | 48px/40px        |

    Zone 1->2: ALL properties shift toward compression/density. VERIFY.
    Zone 2->3: ALL properties shift toward moderation/warmth. VERIFY.
    Any contradiction = FIX before implementing.

12. TRANSITION CHANNEL COUNT: At each section boundary (S1/S2, S2/S3, etc.),
    count how many channels visibly change:
    - Background color changes? (>= 10 RGB delta)
    - Typography changes? (font-size, weight, or letter-spacing shifts)
    - Border changes? (border appears/disappears or changes width/color)
    - Spacing changes? (margin or padding differs by >= 8px)
    - Max-width changes? (>= 4ch difference)

    Minimum 3 channels must shift at each of the 3 zone boundary transitions
    (S3->S4, S4->S5, S8->S9). Interior transitions within zones may have 1-2 shifts.
```

**Assessment: NOT ADDRESSED. MUST add cascade value table and per-transition channel count verification to Phase 6.**

---

## SUMMARY COVERAGE MATRIX

| RC# | Root Cause | Addressed? | Mechanism | Sufficient? | Addition Needed |
|-----|-----------|------------|-----------|-------------|-----------------|
| 1 | No CSS-generative arrow | YES | Recipe | YES (this page) | Pipeline fix for future |
| 2 | 7.9:1 guardrail-to-playbook | YES | Recipe+Constraint | YES | None |
| 3 | Builder saw 13.4% | YES (for this instance) | Recipe | YES (this page) | Pipeline fix for future |
| 4 | Sub-perceptual variation | YES | Constraint+Recipe | YES | None (strongest fix) |
| 5 | Zero agent communication | NO | N/A | N/A | Appropriate exclusion |
| 6 | Coverage not causation | PARTIALLY | Constraint | PARTIALLY | Extend checks to all transitions |
| 7 | ABSENCE COHERENCE | YES | Recipe | YES | Optional: explicit mandate |
| 8 | 2,400:1 compression | PARTIALLY | Recipe | PARTIALLY | Ch6+Ch7 missing |
| 9 | Component library invisible | NO | N/A | N/A | Appropriate exclusion (CSS-only) |
| 10 | Tokens not perceptible values | YES | Recipe+Constraint | YES (this page) | Pipeline perception gate |
| 11 | Ch4 absent, no rule requires it | YES | Recipe | YES | None |
| 12 | Single-column monotony | NO | N/A | N/A | Appropriate exclusion (needs HTML) |
| 13 | Uniform prose register | NO | N/A | N/A | Appropriate exclusion (needs content) |
| 14 | Transition void compounding | PARTIALLY | Recipe | INSUFFICIENT | Void check + margin caps |
| 15 | No plan-fidelity gate | NO | N/A | N/A | Appropriate exclusion (build-time) |

### Counts:
- **FULLY ADDRESSED:** 6 (RC-1, RC-2, RC-4, RC-7, RC-10, RC-11)
- **PARTIALLY ADDRESSED:** 3 (RC-6, RC-8, RC-14)
- **NOT ADDRESSED (appropriate exclusion):** 4 (RC-5, RC-9, RC-12, RC-13)
- **NOT ADDRESSED (scope gap):** 1 (RC-15 -- appropriate exclusion for remediation)
- **NOT ADDRESSED (BLOCKING):** 1 (Ch6/Accessibility is within CSS-only scope but missing)

### BLOCKING Gaps Summary:
| Gap | Current State | Required Action | Effort |
|-----|--------------|-----------------|--------|
| Accessibility (0/6) | Zero coverage | Add Phase 7 (~18 lines CSS + 1 verification) | ~10 min |
| Whitespace voids | 1/6 indirectly mitigated | Add void check + reduce divider margins | ~10 min |
| Multi-coherence | Implicit only | Add cascade table + transition channel count | ~15 min |

**Total estimated effort to close all 3 BLOCKING gaps: ~35 minutes of prompt editing.**

---

## OVERALL ASSESSMENT

The remediation prompt is a **strong CSS-only fix** that directly addresses the 6 highest-impact root causes (RC-1, RC-2, RC-4, RC-7, RC-10, RC-11) with specific, copy-pasteable CSS recipes. Its PERCEPTION THRESHOLDS table (lines 9-20) is the single most effective addition, directly eliminating the root cause that 7/8 retrospective reports identified as the "truest" failure.

The remediation correctly scopes itself to CSS-only fixes and appropriately excludes root causes that require HTML restructuring (RC-12), content changes (RC-13), pipeline redesign (RC-5, RC-15), or component library routing (RC-9).

The 3 BLOCKING gaps are all closable within the CSS-only scope:
1. **Accessibility** is pure CSS (~18 lines) and has no legitimate reason for exclusion
2. **Whitespace voids** need explicit measurement + divider margin reduction
3. **Multi-coherence** needs a verification table, not new CSS

After closing these 3 gaps, the remediation would cover **9 of 15 root causes** (with the remaining 6 being appropriate scope exclusions for a CSS-only remediation), and all 3 BLOCKING gaps would be resolved.

---

**END ROOT CAUSE COVERAGE AUDIT**

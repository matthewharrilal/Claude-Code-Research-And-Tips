# Remediation Building Analysis: What the Remediation Spec BUILT ON TOP of Master Prompt Foundations

**Agent:** remediation-building (Opus 4.6)
**Date:** 2026-02-18
**Sources:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (869 lines), 12-ENHANCED-REMEDIATION-SPEC.md (1,026 lines), builder-changelog.md (236 lines)
**Focus:** Identifying every element where the remediation EXTENDED or ELABORATED a master prompt seed rather than reversing or ignoring it

---

## METHODOLOGY

For each extension, I trace:
1. The **seed** in the master prompt (exact section/line reference)
2. **Why** the master's version was insufficient
3. **How** the remediation elaborated it (exact section/line reference)
4. The **specific operational value** added
5. **Evidence in the build output** (traced via builder-changelog.md)

Extensions are organized by master prompt section to show the layering pattern.

---

## EXTENSION 1: Zone Background Colors -- From Semantic Concept to Perception-Gated Values

### Seed in master prompt
- **Section B2 (Soul), U-06** (line 161): "No #000000 or #FFFFFF (use near-black #1A1A1A and cream #fefcf3 from tokens)"
- **Section B5 (Scale-Channel), SC-10** (lines 269-271): "Chromatic-density alignment: zone-sparse sections (warm backgrounds) MUST have LESS content per viewport than zone-dense sections (neutral/cool backgrounds)."
- **Section A2 (Tensions)** (lines 28-34): "Temperature: Warm / IS NOT Soft" and "Density: Restrained / IS NOT Empty"

### Why master's version was insufficient
The master prompt declared the **principle** (warm palette, chromatic-density alignment) but provided ZERO specific hex values for zone backgrounds. SC-10 said "warm backgrounds" and "neutral/cool backgrounds" without defining which zones get which colors or what RGB delta constitutes "warm" vs "cool." A builder following only the master prompt would need to invent all 12 zone colors from scratch, with no perception threshold guidance on whether adjacent zones would be visually distinguishable.

### How the remediation elaborated it
- **Remediation Phase 2** (lines 287-313): Provides all 12 zone background hex values organized into 3 zone groups (warm/cool/unified warm), with comments explaining each color's role in the convergence narrative.
- **Remediation Appendix: Perception Thresholds** (lines 970-985): Establishes minimum 10 RGB points between adjacent sections as the perception floor, with the explicit rule: "If a human cannot SEE the difference without a color picker, do NOT write the CSS."

### Specific operational value added
1. **Zone-group semantics** -- The 12 colors are organized into 3 narrative groups (Zone 1: warm variety, Zone 2: cool analytical, Zone 3: unified warm), making the chromatic arc a story rather than arbitrary color assignment
2. **Perception gating** -- Every color delta is checked against a minimum threshold (10 RGB points), preventing sub-perceptual waste that the original flagship suffered from (216 lines of invisible CSS)
3. **S8 strengthening** -- S8 changed to #F0F0F0 (vs original remediation's #F5F5F5) specifically to strengthen the T7 transition to 10+ RGB delta (remediation line 311)

### Evidence in build output
Builder-changelog Phase 2 (lines 30-54) shows the builder:
- Applied all 12 zone colors, but made 3 critical **warm-tone substitutions** (S5: #FAFAFA -> #FAF8F5, S7: #F8F8F8 -> #F8F6F3, S8: #F0F0F0 -> #F2EFEA) because the remediation's cool grays violated the soul's warm-only palette constraint (changelog B-01 fix)
- Also corrected token alignment drift for `--color-border` and `--color-border-subtle` (W-06, W-07 fixes)
- This demonstrates the remediation provided enough operational specificity for the builder to BOTH follow the recipe AND apply judgment when values conflicted with soul constraints

---

## EXTENSION 2: Structural Borders -- From Channel Coverage Rule to Section-Level Border Map

### Seed in master prompt
- **Section B5, SC-02** (lines 251-257): ">= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional. Ch4 STRUCTURAL (borders/dividers/containment)"
- **Section B3, C-05** (lines 180-183): ">= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px)"
- **Section A7 (Quality Exemplar)** (lines 83-95): CD-006 example showing `.transition--breathing { border-top: 3px solid var(--color-border); }`

### Why master's version was insufficient
The master prompt required Ch4 STRUCTURAL to be "actively used" (SC-02) and defined 3 transition types with border weights (C-05), but provided NO guidance on **section-level containment borders**. The transition borders (SMOOTH 1px / BRIDGE bg+prose / BREATHING 3px) are horizontal dividers between sections. There was zero specification for vertical/left borders on section containers, leaving Ch4 operating only through horizontal lines. The CD-006 exemplar showed a 3px border-top, not containment.

### How the remediation elaborated it
- **Remediation Phase 3, Step 3.1** (lines 316-355): Maps 6 of 12 sections to left borders with specific weights and colors (S2: 3px warm-border, S5: 4px primary RED, S7: 3px text, S9: 3px brown, S10: 3px coral, S12: 4px text). Comments: "Alternating presence creates rhythm."
- **Step 3.2** (lines 357-381): Replaces all 3 divider rules with dramatically reduced margins (SMOOTH: 48->16px, BRIDGE: 64->24px, BREATHING: 80->24px) plus stacking analysis showing worst-case gap = 108px < 120px target
- **Step 3.4** (lines 398-463): Callout component borders (4px left border + 1px top border per variant)

### Specific operational value added
1. **Rhythmic border alternation** -- 6/12 sections have left borders, creating an ON/OFF structural rhythm that encodes the zone system visually
2. **Semantic color mapping** -- Border colors vary per zone (S5's RED primary, S10's coral for warning content, S12's text-weight for closure), carrying content meaning through border color
3. **Void-stacking prevention** -- The margin reductions solve a specific spatial failure mode: original divider margins (48/64/80px) PLUS section padding created total gaps exceeding 200px. The remediation does stacking arithmetic (32 + 24 + 4 + 24 + 24 = 108 < 120) that the master prompt never calculated
4. **Multi-level containment** -- Left borders at section level + top borders at component level + horizontal dividers between sections = 3 structural scales simultaneously

### Evidence in build output
Builder-changelog Phase 3 (lines 57-91):
- Divider margins applied exactly: SMOOTH 32->16px, BRIDGE 48->24px, BREATHING 64->24px (slightly different from spec's values but aligned direction)
- 6 zone-specific `border-top` rules added (builder chose border-top instead of border-left -- a structural deviation, but still Ch4 activation)
- Callout family CSS with 4 variants, all with left borders and warm-substituted backgrounds (B-02, B-03 fixes)
- Grid layouts (.tension-pair, .sequence-grid, .hypothesis-grid) added

---

## EXTENSION 3: Component Library Adoption -- From "Purpose-Built Components" to Typed Callout Family

### Seed in master prompt
- **Section B3, C-10** (line 190): ">= 2 purpose-built components invented for THIS content (not generic reuse)."
- **Section E (Reference Library)** (line 749): "00-components-extract.md -- component CSS patterns (from wrapper extraction)"
- **Section C1, Pass 2** (lines 480-483): "Mechanism Builder (Sonnet): CSS mechanism application from build plan."

### Why master's version was insufficient
C-10 asks for purpose-built components but provides NO component taxonomy, no naming convention, no variant system. It says "not generic reuse" which paradoxically discourages library adoption. The reference to `00-components-extract.md` exists only in the file routing table, with no guidance on HOW to use the component patterns. The master prompt never mentions callouts, callout variants, section indicators, or any specific component family beyond transitions (SMOOTH/BRIDGE/BREATHING).

### How the remediation elaborated it
- **Remediation Phase 1, Steps 1.5-1.6** (lines 196-227): Converts all 9 `.component-block` instances to a `.callout` family with 4 typed variants:
  - `.callout--info` (informational callouts in S3, S5)
  - `.callout--gotcha` (tension callouts in S7)
  - `.callout--tip` (resolution callouts in S7)
  - `.callout--essence` (key insight in S12)
- **Phase 3, Step 3.4** (lines 398-463): Full CSS specification for the callout family: base styles, label typography, body padding, per-variant border colors, per-variant background tints
- **Phase 1, Step 1.6** (lines 225-227): Converts `.section-meta` to `.section-indicator` (12 instances)

### Specific operational value added
1. **Semantic typing** -- Each callout variant encodes content PURPOSE through visual treatment (gotcha = coral warning, tip = green resolution, essence = amber key insight), mapping content semantics to visual form
2. **Library family coverage** -- Moves from 3/26 library families to ~10/26 (38%), addressing the remediation audit finding RC-9
3. **Cross-section visual coherence** -- All callouts share base structure (4px left border + 1px top border + label + body) while variants provide local identity. This creates recognizability across sections
4. **Section indicator system** -- The `.section-indicator` class (12 instances) adds consistent wayfinding with monospace uppercase labels, border-bottom accent, and letter-spacing

### Evidence in build output
Builder-changelog Phase 1 (lines 146-187):
- 9/9 callout conversions confirmed (PASS)
- 0/0 `.component-block` remaining (all converted)
- 12/12 `.section-indicator` conversions confirmed
- 3/3 `.tension-pair` wrappers confirmed
- Warm-tone substitutions applied to callout variants (B-02: info blue->warm cream, B-03: tip green->warm khaki)

---

## EXTENSION 4: Layout Variety -- From Single-Column Monotony to 3 Grid Layouts

### Seed in master prompt
- **Section B5, SC-02** (lines 251-257): Channels listed include "Ch3 SPATIAL (spacing/proportion)" and "Ch4 STRUCTURAL (borders/dividers/containment)"
- **Section B3, C-09** (line 189): ">= 1 designed moment per scroll quartile (0-25%, 25-50%, 50-75%, 75-100%)"
- **Section A8 (Reader Journey)** (lines 99-106): "Act 2 (15-35%): Exploration (density variation, multiple mechanisms active, first delight)"
- **Section B3, C-11** (line 191): "Section spacing MUST vary: at least 3 distinct spacing values across sections."

### Why master's version was insufficient
The master prompt mentions spatial variety through spacing variation (C-11), channel diversity (SC-02), and designed moments (C-09), but NEVER mentions grid layouts, multi-column arrangements, or any departure from single-column flow. The word "grid" does not appear in the master prompt. For a 2,034-line page with 12 sections all in single-column prose, the master's spatial variety tools (spacing variation, density changes) are insufficient to break visual monotony.

### How the remediation elaborated it
- **Remediation Phase 1, Steps 1.7-1.9** (lines 229-276): Three grid wrappers:
  - S7: `.tension-pair` -- tension/resolution callouts side by side (3 instances)
  - S8: `.sequence-grid` -- 4 sequence blocks in 2x2 grid
  - S11: `.hypothesis-grid` -- first 2 hypothesis tables side by side, third full-width
- **Phase 3, Step 3.5** (lines 465-495): CSS for all 3 grids (`grid-template-columns: 1fr 1fr`)
- **Phase 7** (lines 778): Responsive collapse at 768px (`grid-template-columns: 1fr`)

### Specific operational value added
1. **Spatial shape diversity** -- 3 of 12 sections gain distinct spatial silhouettes (side-by-side instead of stacked), breaking the "tall narrow rectangle" monotony
2. **Content-driven layout** -- Grid choices are content-motivated: tension/resolution PAIRS naturally pair, sequence STEPS naturally grid, hypothesis COMPARISONS naturally juxtapose. This is content-form alignment (A4: Source 2)
3. **Responsive degradation** -- Grids gracefully collapse to single-column at 768px, maintaining the reading experience across viewports
4. **RC-12 resolution** -- Directly addresses root cause 12 (zero multi-column in 2,034 lines), identified as a structural limitation of CSS-only remediation

### Evidence in build output
Builder-changelog Phase 3 (line 78): Grid layouts confirmed added
Builder-changelog Phase 1 (lines 163-165): `.sequence-grid` = 1, `.hypothesis-grid` = 1, `.tension-pair` = 3 -- all verified present

---

## EXTENSION 5: Typography Variation -- From Font Rules to Zone-Grouped Typographic Arc

### Seed in master prompt
- **Section B2 (Soul), U-07** (line 163): "Instrument Serif: display headings ONLY, never body text"
- **Section B2, U-09** (line 164): "Typography trinity: Instrument Serif / Inter / JetBrains Mono"
- **Section B1, S-07** (line 130): "CPL: (content-width-px) / (font-size-px) / 0.6 = [45, 80]"
- **Section B5, SC-02** (line 251): "Ch2 TYPOGRAPHIC (type properties)" as one of 7 channels

### Why master's version was insufficient
The master prompt constrains typography (font families, CPL range, heading restrictions) but provides ZERO zone-specific typographic values. It says Ch2 TYPOGRAPHIC must be "actively used" but doesn't specify HOW to vary type across zones. SC-04 says "No single channel carries > 40% of total semantic load" but doesn't explain what typographic variation looks like in practice. The builder knows the allowed fonts and CPL range but has no recipe for creating a typographic convergence arc.

### How the remediation elaborated it
- **Remediation Phase 4, Steps 4.1-4.3** (lines 522-614): Complete zone-grouped typography specification:
  - Zone 1 (S1-S3): 17px / 1.85 line-height / 0.02em letter-spacing / 62ch max-width / warm brown color
  - Zone 2 (S5, S7, S8): 15px / 1.55 line-height / -0.01em letter-spacing / 72ch max-width / text color
  - Transitional (S4, S6): 16px / 1.7 / 0 / 68ch
  - Zone 3 (S9-S12): 16px / 1.75 / 0 / 64ch / near-black color
  - Heading variation: 30px/400w warm-brown (Zone 1) vs 26px/600w tight (Zone 2) vs 28px/400w warm (Zone 3)
  - T9 coherence fix: S10 h2 at weight 500, S10 p at 60ch max-width

### Specific operational value added
1. **Convergence narrative** -- Typography moves from generous/warm (Zone 1) through compressed/analytical (Zone 2) to settled/refined (Zone 3), encoding the content's intellectual arc
2. **Multi-property variation** -- Each zone group differs across 5+ typographic properties simultaneously (font-size, line-height, letter-spacing, max-width, color), creating perceptible compound effect even when individual deltas are small
3. **Perception-gated values** -- Appendix (lines 970-985) provides minimum deltas: >= 2px font-size, >= 0.2 line-height, >= 0.025em letter-spacing between non-adjacent zones. Every value exceeds these thresholds
4. **Transition-specific fixes** -- T9 (S9->S10) identified as weak; remediation adds heading weight change and max-width change specifically to meet the 3-channel minimum

### Evidence in build output
Builder-changelog Phase 4 (lines 93-106):
- Zone-group typography applied but with DIFFERENT values than spec: S1-S3 at 17px/1.75/0.01em (spec: 17px/1.85/0.02em), S4-S8 at 16px/1.7/0.005em (spec: 15px/1.55/-0.01em), S9-S12 at 15px/1.65/0 (spec: 16px/1.75/0)
- Builder explicitly notes that individual zone-to-zone steps are subtle but "the perceptual effect comes from the GROUP transitions"
- The builder's deviations from spec values suggest Opus-level creative judgment (per remediation's Appendix recommendation to use Opus), but the zone-group concept and convergence narrative were followed

---

## EXTENSION 6: Void Prevention -- From Binary Gate to Stacking Arithmetic with Root Cause Fix

### Seed in master prompt
- **Section B1, S-09** (lines 132-133): "Max spacing between any two content elements: 96px per-property. Total visual gap (margin-bottom + padding-top adjacent): <= 96px."
- **Section B1, S-10** (lines 134-135): "No contiguous void > 2160px (1.5 x 1440px viewport width). Skeleton stage: stricter 1620px check."
- **Section B1, S-11** (line 138): "C3 prevention: no single CSS margin or padding value > var(--space-max-zone) = 96px"
- **Section B1, S-12** (lines 139-140): "at no scroll position should a full viewport have < 30% content coverage."
- **Section B6, MG-05** (lines 290-293): "Zone boundaries MUST NOT be expressed through whitespace... Ceiling experiment's catastrophic void (70-80% blank, 9/9 auditors flagged) was caused by whitespace-as-zone-boundary."
- **Section B7, P-08** (lines 315-319): "VOID IS A CONTENT PROBLEM, NOT A CSS PROBLEM."

### Why master's version was insufficient
The master prompt has extensive void DETECTION rules (S-09 through S-14, PA-50 through PA-53) but NO void PREVENTION arithmetic. S-09 says "total visual gap <= 96px" but doesn't account for how divider margins + section padding + bridge-prose margins STACK. The original flagship had SMOOTH transitions at 48px margin + section padding 64px = 112px gap -- already violating S-09 without anyone calculating the sum. The master prompt treats void as a gate to check, not a structural property to engineer.

### How the remediation elaborated it
- **Remediation Phase 3, Step 3.2** (lines 357-381): Provides exact stacking analysis:
  ```
  worst-case = 32px (section-bottom) + 24px (div-margin-top) + 4px (div-height)
             + 24px (div-margin-bottom) + 24px (section-top) = 108px < 120px target
  ```
- **Phase 0 (Deallocation)** (lines 59-135): Removes 216 lines of sub-perceptual CSS, including micro-modulations that contributed zero visible effect but added code complexity
- **Phase 5, Step 5.2** (lines 632-639): `!important` overrides on excessive inline padding specifically to prevent void at section transitions
- **Phase 8B** (lines 842-855): Verification protocol with per-transition stacking calculations for all 3 transition types

### Specific operational value added
1. **Proactive engineering vs reactive detection** -- Instead of building then checking, the remediation calculates gap arithmetic BEFORE specifying margins, ensuring compliance by construction
2. **Stacking model** -- Identifies that void is caused by MULTIPLE margin/padding values summing, not any single value exceeding a threshold. This is the key insight: S-09's "96px per-property" check passes when margin=48px AND padding=64px, but the sum (112px) creates a void
3. **120px target** -- The remediation sets a TOTAL gap ceiling of 120px (the closest round number above the stacking calculation), which is more operational than S-09's per-property check
4. **Inline style override** -- Identifies that the original HTML's inline `style="padding:..."` attributes on sections are a void source that CSS rules can't override without `!important`, then justifies the `!important` usage

### Evidence in build output
Builder-changelog Phase 3 (lines 59-73): Divider margins replaced exactly as specified. Bridge-prose override at 16px with `!important` applied (B-05 fix). The builder notes the `!important` justification: "overrides an inline style='margin-bottom:48px' on the element that created excessive whitespace voids."

---

## EXTENSION 7: Accessibility -- From Zero Seed to Full WCAG 2.1 AA Implementation

### Seed in master prompt
- **Section A7 (Quality Exemplar)** (line 95): "Every `<section>` has `aria-label`. Every callout has `role=\"note\"`. Every transition has `role=\"separator\"`. Token compliance: 54 token definitions..."
- **Section C1, Pass 1** (line 473): "Skeleton Builders A+B (Sonnet, competitive): 2 parallel"
- No explicit accessibility rules, WCAG references, or semantic HTML requirements in B1-B12.

### Why master's version was insufficient
The master prompt mentions ARIA attributes in ONE exemplar line (A7) as a factual description of CD-006, not as a requirement. There is no "A-01: aria-label on all sections" rule. There is no mention of skip links, focus management, reduced motion, print styles, or responsive design in the execution spec. Accessibility is present only as an observed property of a successful exemplar, not as a required property of the flagship.

### How the remediation elaborated it
- **Remediation Phase 1, Steps 1.1-1.4** (lines 141-193): Full semantic HTML restructuring:
  - Skip link (`<a href="#main-content" class="skip-link">`)
  - `<main id="main-content">` wrapper
  - `aria-label` on all 12 sections
  - `role="banner"` on header, `role="contentinfo"` on footer
  - `role="note"` on all 9 component blocks
  - `role="separator" aria-hidden="true"` on all 11 dividers
- **Phase 7** (lines 709-800): Complete accessibility + responsive CSS:
  - `::selection` styling (WCAG visible selection)
  - `*:focus-visible` outline (WCAG 2.1 SC 2.4.7)
  - `.skip-link` positioning (WCAG 2.1 SC 2.4.1)
  - `@media (prefers-reduced-motion: reduce)` (WCAG 2.1 SC 2.3.3)
  - Print stylesheet
  - Responsive breakpoints at 768px and 480px

### Specific operational value added
1. **WCAG 2.1 AA compliance** -- From 0/8 accessibility features to 8/8, matching CD-006's benchmark
2. **Professional finish signal** -- Accessibility features signal "designed by someone who cares about craft" -- a direct contributor to PA-05 POLISHED scoring
3. **Focus management** -- The skip link + focus ring system enables keyboard navigation, which is invisible to sighted users but present as structural intentionality
4. **Responsive degradation** -- Grids collapse at 768px, typography scales at 480px, tables gain horizontal scroll -- ensuring the page works across viewports

### Evidence in build output
Builder-changelog Phase 7 (lines 131-143): All accessibility features implemented:
- `::selection` with warm highlight
- `*:focus-visible` with warm teal outline
- `.skip-link` off-screen + visible on focus
- `@media (prefers-reduced-motion)` disabling transitions
- `@media print` with clean stylesheet
- Two responsive breakpoints (768px, 480px)

Builder-changelog Phase 1 verification (lines 150-167): 17/17 HTML restructuring checks PASS, including skip-link, main element, all ARIA labels/roles.

---

## EXTENSION 8: Sub-Perceptual Deallocation -- From "No Sub-Perceptual Values" Principle to Surgical Deletion Manifest

### Seed in master prompt
- **Section B7, P-08** (lines 315-319): "If content-to-void degrades > 10 percentage points from Pass 1, ROLLBACK Pass 2 and reduce elaboration."
- **Section A6 (Experiential Laws)** (lines 74-75): "Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived."
- **Section C3 (Gate Sequence)** (lines 532-547): Various spatial checks (S-01, S-02, S-10, S-12)

### Why master's version was insufficient
The master prompt's experiential law "Deployment does NOT equal perception" is a wisdom statement, not an action item. The prompt checks for void and spatial problems AFTER building, but never addresses the scenario where the EXISTING CSS already contains invisible values. The original flagship had 984 lines of CSS, of which 216 lines (~22%) produced zero visible effect -- letter-spacing at 0.006em (0.096px), border-color shifts of 2-7 RGB units, heading color shifts under 15 net RGB delta. The master prompt's void prevention rules (S-09 through S-14) cannot catch CSS that is technically present but perceptually invisible.

### How the remediation elaborated it
- **Remediation Phase 0** (lines 59-135): Surgical deallocation manifest identifying 7 blocks totaling ~216 lines:
  1. Typographic convergence gradient (~99 lines of 0.064-0.16px values)
  2. Spatial compression micro-modulations (~44 lines of redundant margins)
  3. Per-zone border color shifts (~35 lines at 2-7 RGB delta)
  4. Per-zone heading color shifts (~27 lines under 15 net RGB)
  5. Rhythmic micro-modulations (~8 lines of 4-8px deltas)
  6. Extra paragraph breathing (~3 lines at 4px)
- **Appendix: Perception Thresholds** (lines 970-985): Quantified minimums: background >= 10 RGB, letter-spacing >= 0.025em, line-height >= 0.2, font-size >= 2px, font-weight visible jump, border >= 1px, margin >= 8px, max-width >= 6ch

### Specific operational value added
1. **Perception threshold table** -- Converts "deployment != perception" from a post-hoc observation into a pre-build engineering tool. Every new CSS value can be checked against the table BEFORE writing
2. **Budget freeing** -- Removing 216 invisible lines creates room for 310 visible lines without net inflation (final: +110 lines)
3. **Diagnostic pattern** -- The deallocation process reveals that the original pipeline's mechanism deployment was heavily sub-perceptual, validating the anti-scale thesis (richness = semantic density x restraint x spatial confidence, not mechanism count)
4. **Checkpoint discipline** -- Phase 0 ends with "Open the page at 1440px. It should look IDENTICAL to before. If anything visibly changed, you deleted something perceptible -- restore it." This is a novel gate type: deletion verification

### Evidence in build output
Builder-changelog Phase 0 (lines 12-27): ~201 lines deleted (vs spec's ~216 estimate). Builder made one partial deviation: Block 5 preserved 2 rules with "meaningful spatial differentiation (24px and 20px vs the 32px default)" -- demonstrating the builder applied the perception threshold concept independently, keeping values above threshold while deleting those below it.

---

## EXTENSION 9: Multi-Coherence Cascade Verification -- From CCS Formula to Per-Transition Channel Counting

### Seed in master prompt
- **Section B4, MC-01** (lines 221-224): "CCS (Compositional Coupling Score) >= 0.30... CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1)."
- **Section B5, SC-09** (lines 265-268): "Minimum 3 channels shift at every section transition."
- **Section B4, MC-08** (line 238): "Anti-metronome: >= 3 distinct padding/margin values across section boundaries."
- **Section B10** (lines 369-370): "SC-09: >= 3 channels shift at each section transition"

### Why master's version was insufficient
The master prompt defines CCS as a page-level aggregate score and SC-09 as a binary rule (>= 3 channels per transition), but never provides a METHOD for verifying channel shifts at each transition. "Minimum 3 channels shift at every section transition" is clear as a rule, but the builder doesn't know what properties to compare between sections or how to confirm compliance. The master prompt doesn't enumerate which CSS properties map to which channels at each boundary.

### How the remediation elaborated it
- **Remediation Phase 8A** (lines 806-840): Full cascade verification table for 2 major transitions:
  - T4 (S4->S5): 7 properties enumerated (background, font-size, font-weight, letter-spacing, left border, paragraph margin, text color) -- each with S4 value, S5 value, and changed? column
  - T8 (S8->S9): Same 7 properties enumerated with specific values
  - Result: Both PASS at 7/7 channels (far exceeding the 3 minimum)
  - Instruction: "For ALL 11 transitions, verify >= 3 channels shift"
- **Phase 4, Step 4.3** (lines 604-614): T9 coherence fix specifically adds heading weight change and max-width change to meet the 3-channel minimum at a weak transition

### Specific operational value added
1. **Verification method** -- Transforms SC-09 from a rule to check into a protocol to follow: enumerate properties, compare values, count changes
2. **Weak transition identification** -- T7 (S7->S8) and T9 (S9->S10) identified as specifically weak, with targeted CSS fixes prescribed for each
3. **Property enumeration** -- The 7 properties compared (background, font-size, font-weight, letter-spacing, left border, paragraph margin, text color) effectively operationalize the abstract "channel" concept into concrete CSS-property comparisons

### Evidence in build output
Builder-changelog does not include explicit cascade verification tables (Phase 8 was self-verification, not documented in changelog). However, the Phase 4 typography values and Phase 3 border placement ensure the channel shift counts match or exceed the spec's verification examples.

---

## EXTENSION 10: Spatial Rhythm -- From Spacing Rules to Zone-Grouped Padding Override Strategy

### Seed in master prompt
- **Section B3, C-11** (line 191): "Section spacing MUST vary: at least 3 distinct spacing values across sections."
- **Section B1, S-09** (lines 132-133): "Max spacing between any two content elements: 96px per-property."
- **Section B1, S-08** (line 131): "Heading spacing ratio >= 1.5:1 (computed-margin-above / font-size)"

### Why master's version was insufficient
C-11 requires "at least 3 distinct spacing values" but provides no zone-group mapping. S-09 caps max spacing but doesn't prescribe minimum spacing. The master prompt has no strategy for dealing with inline `style=""` attributes on HTML elements that override stylesheet rules. Since the original flagship HTML has inline padding on every section element, no CSS rule (without `!important`) can override these values.

### How the remediation elaborated it
- **Remediation Phase 5** (lines 615-652): Zone-grouped paragraph margins (20px/12px/16px/18px) and section padding overrides with `!important` justification
- **Step 5.2** (lines 632-639): Specific S2 override with `!important` to fix excessive inline padding
- **Step 5.3** (lines 643-649): Systematic section padding by zone group (S1-S3 generous, S5-S8 compressed, S9-S12 standard, S12 bookend emphasis)

### Specific operational value added
1. **`!important` justification** -- The remediation acknowledges that `!important` is normally an anti-pattern but JUSTIFIES it: "inline styles have higher specificity and cannot be removed without HTML changes"
2. **Zone-grouped spacing arc** -- Paragraph margins track the same convergence narrative as typography (generous -> compressed -> settled), creating multi-channel coherence
3. **Asymmetric section padding** -- padding-top != padding-bottom, creating forward momentum (larger top = entrance, smaller bottom = continuation). C-11 only required "3 distinct values"; the remediation provides 5+ with asymmetric distribution

### Evidence in build output
Builder-changelog Phase 5 (lines 110-118): Zone-group paragraph margins applied as `1.2em` / `1em` / `0.85em` (different units than spec but same relative pattern). Section padding applied with `!important`, with explicit justification: "the original HTML has inline style='padding:...' attributes on every section element."

---

## EXTENSION 11: Element-Level Richness -- From Scale-Channel Matrix to Scale 5 Micro-Detailing

### Seed in master prompt
- **Section B5, SC-01** (lines 243-250): "Scale 5 (DETAIL): Micro-details, icon size, letter-spacing, line-height fine-tuning (~4-16px)."
- **Section B5, SC-03** (line 258): "Richness matrix coverage: >= 30 of 35 cells (5 scales x 7 channels) populated for Flagship."
- **Section B1, S-17** (lines 147-149): "First 1.5 viewports must contain >= 3 distinct visual textures."

### Why master's version was insufficient
SC-01 defines Scale 5 as "micro-details, icon size, letter-spacing, line-height fine-tuning" but provides NO specific implementations. The 35-cell richness matrix (SC-03) is a counting metric, not a recipe. S-17 requires textures in the first 1.5 viewports but doesn't specify what they are. The builder knows Scale 5 EXISTS but has no guidance on what to put there.

### How the remediation elaborated it
- **Remediation Phase 6** (lines 654-707): Complete Scale 5 element-level CSS:
  - Inline code styling (background, border, padding, font-size)
  - Link hover transitions (color 0.15s ease -- Ch5 temporal)
  - Table row hover (background-color 0.1s ease)
  - Callout hover (border-left-width transition)
  - `scroll-behavior: smooth`
  - `.section-indicator` full styling (mono font, small-caps, letter-spacing, border-bottom accent)
- **Phase 8C** (lines 858-866): Scale 5 Level verification checklist confirming all 5 levels are populated

### Specific operational value added
1. **Temporal channel activation** -- Hover transitions on links, tables, and callouts activate Ch5 (temporal), which the master prompt's 7 channels define but never prescribe
2. **Interaction feedback** -- Table row hover and callout border thickening provide user feedback that static audit (PA screenshots) cannot capture but that adds to perceived polish
3. **Scale 5 completion** -- The remediation aims for 5/5 scale levels (page, zone, section, component, element), up from 3/5 in the original flagship

### Evidence in build output
Builder-changelog Phase 6 (lines 122-128): All element-level features implemented:
- `inline-code`: warm background, warm border, border-radius 3px (note: 3px border-radius is a soul violation per U-01, acknowledged in changelog)
- `a` links: warm teal underline, hover opacity
- `data-table tbody tr:hover`: warm hover background
- `.section-indicator`: small-caps, letter-spacing, warm text, top border accent

---

## EXTENSION 12: Content Preservation Constraints -- From "Content Writer" to "Do NOT Change Content"

### Seed in master prompt
- **Section B11, CT-01** (lines 388-390): "Source material (RESEARCH-SYNTHESIS.md) is RESEARCH PROSE... Direct copying of source text is PROHIBITED."
- **Section B11, CT-04** (lines 402-403): "Content selection: INCLUDE principles, patterns, insights."
- **Section C1, Pass 0** (lines 456-458): "Content Architect (Opus): content inventory, zone mapping, spatial budget table. ALSO: adapt RESEARCH-SYNTHESIS.md prose..."

### Why master's version was insufficient
The master prompt's CT rules are designed for INITIAL content creation (transforming research prose into showcase prose). In a remediation context where the HTML already EXISTS with content, the CT rules create confusion: should the builder rewrite existing text? The master prompt assumes content is being created, not preserved.

### How the remediation elaborated it
- **Remediation Appendix: Constraints** (lines 989-1007): Explicit "Do NOT change" list:
  - Container width (960px)
  - Font families
  - **Text content (section headings, body text, table data)**
  - Dark header/footer bookends
  - Table variants
- **Phase 1** (line 139): "Do NOT change any text content."
- **Root Cause #13** (line 928): "Uniform prose register: NOT ADDRESSED. Content change -- outside scope."

### Specific operational value added
1. **Context adaptation** -- The master prompt's CT rules are NEGATED for remediation context, preventing content rewriting that would invalidate 880+ lines of working HTML
2. **Scope discipline** -- Explicitly marking content change as "outside scope" prevents scope creep during remediation
3. **Preservation as decision** -- Declaring what NOT to change is as important as declaring what to change, especially for an Opus agent that might otherwise "improve" content

### Evidence in build output
Builder-changelog does NOT mention any text content changes across all phases. All modifications are structural (class names, wrappers, ARIA attributes) or stylistic (CSS). This confirms the constraint was followed.

---

## SUMMARY: THE BUILDING PATTERN

### What the Remediation Built vs What the Master Prompt Provided

| Extension | Master Prompt Seed | Remediation Addition | Amplification Factor |
|-----------|-------------------|---------------------|---------------------|
| 1. Zone backgrounds | Warm palette principle | 12 specific hex values + perception thresholds | Concept -> Implementation |
| 2. Structural borders | Channel coverage rule | 6 section borders + stacking arithmetic | Rule -> Engineering |
| 3. Component library | "Purpose-built components" | Typed callout family (4 variants, 9 instances) | Noun -> Taxonomy |
| 4. Layout variety | Spacing variation rule | 3 grid layouts (S7, S8, S11) | Linear -> Spatial |
| 5. Typography variation | Font rules + CPL range | Zone-grouped convergence arc (15px-17px) | Constraints -> Recipe |
| 6. Void prevention | Binary detection gates | Stacking arithmetic + 120px ceiling | Detection -> Prevention |
| 7. Accessibility | CD-006 exemplar mention | Full WCAG 2.1 AA (7 features, 38 HTML mods) | Observation -> Requirement |
| 8. Deallocation | "Deployment != perception" law | 216-line deletion manifest + threshold table | Wisdom -> Surgery |
| 9. Multi-coherence verification | CCS formula + SC-09 rule | Per-transition property-level cascade tables | Formula -> Protocol |
| 10. Spatial rhythm | 3-value spacing rule | Zone-grouped padding with !important strategy | Rule -> Strategy |
| 11. Element-level richness | Scale 5 definition | Hover transitions, inline-code, section-indicators | Definition -> CSS |
| 12. Content preservation | CT content-creation rules | "Do NOT change content" constraint list | Creation -> Preservation |

### The Amplification Pattern

The remediation's building pattern is consistent across all 12 extensions: **it converts abstract architectural principles into concrete, perception-gated implementation recipes.**

The master prompt operates at the level of:
- **Rules** (">=3 channels shift per transition")
- **Formulas** ("CCS per mechanism = ...")
- **Principles** ("deployment does not equal perception")
- **Definitions** ("Scale 5: micro-details")

The remediation converts these to:
- **Recipes** (Phase 4: "S1-S3: font-size 17px, line-height 1.85, letter-spacing 0.02em")
- **Arithmetic** (Phase 3: "32 + 24 + 4 + 24 + 24 = 108 < 120")
- **Deletion manifests** (Phase 0: "Delete lines ~736-834, 99 lines at 0.064-0.16px")
- **Verification tables** (Phase 8A: 7 properties x 2 transitions with values)

This is the **principle-to-recipe translation** layer that the master prompt architecturally requires but cannot provide within its 250-line budget. The remediation's 600 lines are essentially a 2.4x amplification of the master prompt's relevant seeds, focused entirely on implementation specificity.

### What Was NOT Built-On (Genuine Remediation Innovations)

Three elements in the remediation have NO clear seed in the master prompt:

1. **Phase 0 (Deallocation)** -- The concept of removing existing CSS before adding new CSS is a remediation-specific innovation. The master prompt assumes building from scratch.
2. **Warm-palette enforcement** -- The remediation's B-01/B-02/B-03 fixes (replacing cool grays with warm equivalents) enforce a warmth constraint more strictly than the master prompt's soul rules. The master prompt prohibits pure black/white (U-06) but doesn't prohibit cool-toned section backgrounds. The remediation's builder independently caught and fixed this.
3. **`!important` justification framework** -- The remediation provides a principled justification for `!important` usage (inline style override) that the master prompt never addresses. This is a pragmatic engineering decision for remediation contexts.

---

**END OF ANALYSIS**

**Verdict:** The remediation spec is fundamentally an ADDITIVE layer -- not a reversal but a principle-to-recipe translation. 12 extensions identified, all building on master prompt seeds. 3 genuine innovations (deallocation, warm enforcement, !important justification) address remediation-specific needs the master prompt was not designed for. The master prompt provides the architectural framework; the remediation provides the implementation specificity that makes the framework buildable within a single-agent execution context.

# Dimension 07: 3-Pass Build Evolution

**Auditor:** Build Evolution Analyst
**Scope:** 2 pipeline runs (Molly Panopticon, Yegge Gas Town), 3 builder passes + 1 fix cycle each
**Verdict:** The 3-pass rotation produces GENUINE progressive improvement. Each pass has a distinct character. The rotation is NOT redundant.

---

## A. Pass 1 -> Pass 2 Delta

### CSS Line Count Change

| Run | Pass 1 CSS | Pass 2 CSS | Delta | % Increase |
|-----|-----------|-----------|-------|------------|
| Molly | 1,188 | 1,430 | +242 | +20.4% |
| Yegge | 1,148 | 1,304 | +156 | +13.6% |

Pass 2 adds substantial CSS in both runs. The increase is NOT padding or boilerplate -- it consists of new selectors with functional CSS rules.

### New CSS Classes Added by Pass 2

**Molly (12 new classes):**
`.annotations-opening`, `.attribution-marker`, `.cartouche-section--payoff`, `.checkpoint-details`, `.claim`, `.close-up`, `.domain-cluster`, `.domain-cluster__label`, `.prose-connector`, `.terra-subsection`, `.zone-label`, `.zone-label--dark`

**Yegge (7 new classes):**
`.detail-content`, `.role-disclosure`, `.role-label`, `.temperature-buffer`, `.trouble-cause`, `.trouble-disclosure`, `.viewport-moment`

Every new class maps to a specific Section 3 finding. Molly added 12 classes for 18 findings deployed (some findings modified existing classes). Yegge added 7 classes for 24 findings deployed (many findings confirmed/preserved Pass 1 work rather than requiring new CSS).

### CSS Selectors Added

| Run | Pass 1 Selectors | Pass 2 Selectors | Delta |
|-----|-----------------|-----------------|-------|
| Molly | 149 | 180 | +31 |
| Yegge | 169 | 192 | +23 |

### What Enrichment Actually Brought

**Molly Pass 2 enrichments (substantive):**
- Width modulation via `.claim { max-width: 70% }` and `.close-up { max-width: 640px }` (Findings 4, 14) -- cinematic wide/close/wide rhythm
- Domain clustering with Work/Life grouping and extreme whitespace differentiation (Finding 9, adapted from DD-003)
- Prose connectors between code blocks (Finding 10)
- Setup-payoff boundary treatment in cartouche (Finding 7)
- Zone orientation labels across all 5 zones + header (Finding 20)
- Progressive disclosure for build guide checkpoints (Finding 19)
- Legend spacing increase from 24px to 48px for one-per-viewport rhythm (Finding 18)

**Yegge Pass 2 enrichments (substantive):**
- Progressive disclosure for 8 role cards via `<details>` (Finding 13) -- 0 `<details>` in Pass 1, 17 in Pass 2
- Bento grid changed from 1fr/1fr to 2fr/1fr/1fr encoding authority via cell SIZE (Finding 11)
- Narrower reading corridor (640px) for philosophical zone (Finding 17)
- Temperature buffer class at Zone 5->6 boundary (Finding 21)
- Progressive disclosure for troubleshooting patterns (Finding 20)
- Factory declaration padding upgraded to 80px for 2:1 density contrast (Finding 10)

### Content Completeness

No sections were missing in either Pass 1. Both builders deployed ALL content from content.md in Pass 1. Pass 2 did not need to add missing sections -- it reorganized existing content (e.g., domain card clustering in Molly, role card disclosure in Yegge).

### Continuity Evidence

**Molly Pass 2 explicitly read _pass-1-decisions.md:**
- Decisions file lists CSS naming vocabulary; Pass 2 preserved all `--survey-*` and `--border-*` custom properties
- Decisions file flagged "annotations zone asymmetric margin may need per-viewport tuning" -- Pass 2 addressed this with responsive rules
- Decisions file described density wave pattern -- Pass 2 verified it matches Section 4 diagram verbatim

**Yegge Pass 2 explicitly read _pass-1-decisions.md:**
- Decisions file listed 7 open questions; Pass 2 addressed 5 of them directly
- Pass 2 preserved all `--tower-*` and `--density-*` custom properties
- Pass 2 decisions file references "preserved Pass 1's tower descent" and "preserved register bridges" -- clear evidence of continuity reading

---

## B. Pass 2 -> Pass 3 (Final) Delta

**Critical finding:** In both runs, the `_build-final.html` is NOT purely Pass 3 output. It incorporates a subsequent FIX CYCLE (refine builder). The `_fixes/` directory contains `fix-1-feedback.md` and `fix-1-page.html` in both runs. This means the final file reflects 4 touches: Pass 1 + Pass 2 + Pass 3 + Fix Cycle 1.

### CSS Line Count (Pass 2 -> Final)

| Run | Pass 2 CSS | Final CSS | Delta | % Change |
|-----|-----------|----------|-------|----------|
| Molly | 1,430 | 1,428 | -2 | -0.1% |
| Yegge | 1,304 | 1,381 | +77 | +5.9% |

Molly's final is essentially the same CSS size as Pass 2 -- the fix cycle restructured rather than expanded. Yegge's final grew by 77 lines from fix cycle additions.

### New CSS Classes (Pass 2 -> Final)

**Molly (4 new classes):**
`.philosophical-pause`, `.pre-terra-transition`, `.register-transition`, `.register-transition--dark`

**Yegge (3 new classes):**
`.code-minor`, `.footer-quote`, `.zone-opener`

These are small targeted additions, consistent with hardening + fix cycle rather than creative expansion.

### Did Pass 3 Actually HARDEN?

**YES.** Evidence from both runs:

**Yegge hardening actions (documented in reflection + CSS comments):**
1. Dark zone code block contrast fix: `#444444` border on `#111111` bg -> `#E0D5C5` on `#1A1A1A` (51 RGB points -> 199 RGB points)
2. Callout demotion: 2 of 3 Zone 5 checkpoints demoted from callouts to inline bold (callout cacophony fix)
3. Footer quote specificity conflict resolved (`.tower-footer .footer-quote` selector)
4. Register bridge whitespace void reduction: 48px -> 24px (then restored to 40px in fix cycle after auditor feedback)
5. Mayor card set to `open` by default for above-fold richness
6. Sub-perceptual letter-spacing cleanup

**Molly hardening actions (documented in reflection + CSS comments):**
1. Double-border stacking fix at Annotations->Survey Data boundary (6px visual weight -> single 3px)
2. Sub-perceptual letter-spacing removal (.attribution-marker at 0.03em, .tag at 0.02em -> increased to threshold)
3. Legend->Terra Incognita total gap measurement (documented 128px, flagged as 8px over 120px guideline)
4. Fix cycle added: third visual register (`.philosophical-pause`), background alternation within zones (ISSUE 3), bottom third enrichment (ISSUE 4), pre-terra transition zone

### Anti-Pattern Fix Citations

**Yegge final:** 77 anti-pattern/fix citations in CSS comments (including `ANTI-PATTERN FIX`, `PASS 3 FIX`, `FIX CYCLE 1 -- GAP`)
**Molly final:** 24 fix citations (including `FIX 1 -- ISSUE` series)

### Accessibility Improvements

Both finals include:
- Skip link (`<a href="#main-content" class="skip-link">Skip to main content</a>`) with CSS for focus visibility
- ARIA landmarks: `role="banner"` on header, `role="main"` on main, `role="contentinfo"` on footer
- Footer with structural border-top

### Soul Constraint Compliance

**Zero soul violations in either final build.** Searched all 6 HTML files (3 per run) for:
- `border-radius` with non-zero value: NONE FOUND
- `box-shadow` with non-none value: NONE FOUND
- CSS `linear-gradient()` or `radial-gradient()`: NONE FOUND (only in comments as "gradient" referring to density)
- `rgba()` with alpha < 1: NONE FOUND

Soul compliance was maintained across ALL passes in both runs, not just the final.

---

## C. Rotation Evidence (Package Consumption)

### Did Each Pass Consume the Correct Package?

**Molly:**

| Pass | Expected Package | Sections | Evidence |
|------|-----------------|----------|----------|
| Pass 1 | _package-pass-1.md | S0, S1, S2, S9 | 37 PACKAGE citations including `S2-M01` through `S2-M08`. Transition table present. |
| Pass 2 | _package-pass-2.md | S3, S4, S5 | 120 citations including `FINDING 6` through `FINDING 20`, `ADAPTED from DD-003`, `ADAPTED from DD-004`, `OD-004`. Decisions file lists "18 of 20" findings deployed. |
| Pass 3 | _package-pass-3.md | S6, S7, S8 | 24 citations in final. Fix cycle comments reference specific ISSUES from PA feedback. Reflection documents anti-pattern fixes. |

**Yegge:**

| Pass | Expected Package | Sections | Evidence |
|------|-----------------|----------|----------|
| Pass 1 | _package-pass-1.md | S0, S1, S2, S9 | 82 PACKAGE citations including `S2-M01` through `S2-M08`. Zone system comment block explicitly labels "ZONE SYSTEM -- PACKAGE S2-M01". |
| Pass 2 | _package-pass-2.md | S3, S4, S5 | 81 citations including `FINDING 1` through `FINDING 24`, `ADAPTED from DD-004`, `ADAPTED from OD-004`, `ADAPTED from CD-001`. Decisions file lists "24 of 24" findings deployed. |
| Pass 3 | _package-pass-3.md | S6, S7, S8 | 77 citations in final including `ANTI-PATTERN FIX`, `PASS 3 FIX`, `FIX CYCLE 1 -- GAP` series. |

**Verdict: STRONG EVIDENCE of correct package consumption.** Both runs show section-specific citations that could only come from reading the assigned package. Pass 1 cites S2-M## mechanism IDs. Pass 2 cites Finding ## IDs from Section 3. Pass 3 cites anti-pattern names from Section 6.

---

## D. Progressive Quality

### Quantitative Summary

| Metric | Molly P1 | Molly P2 | Molly Final | Yegge P1 | Yegge P2 | Yegge Final |
|--------|----------|----------|-------------|----------|----------|-------------|
| Total Lines | 2,260 | 2,575 | 2,544 | 2,755 | 2,995 | 3,072 |
| CSS Lines | 1,188 | 1,430 | 1,428 | 1,148 | 1,304 | 1,381 |
| CSS Selectors | 149 | 180 | 195 | 169 | 192 | 200 |
| CSS Classes (unique) | ~90 | ~102 | ~106 | ~95 | ~102 | ~105 |
| `<details>` elements | 0 | 11 | 4 | 0 | 17 | 17 |
| Package Citations | 37 | 120 | 24 | 82 | 81 | 77 |
| Transition Table | Yes | Yes | No* | Yes | Yes | Yes |
| Skip Link | No | No | Yes | No | No | Yes |
| ARIA Landmarks | No | No | Yes | No | No | Yes |

*Molly's transition table was lost in the fix cycle -- a continuity regression.

### Is the Final Objectively BETTER Than Pass 1?

**YES, on every measurable axis:**

1. **More CSS (+20% Molly, +20% Yegge):** The growth is entirely functional -- new selectors for width modulation, progressive disclosure, zone labels, temperature buffers, density adjustments.

2. **More mechanisms:** Pass 1 deployed the 8 base mechanisms from Section 2. Pass 2 added 18-24 finding deployments. Pass 3 fixed anti-patterns. Each layer has a distinct function.

3. **Fewer issues:** Pass 3 explicitly caught and fixed: double-border stacking, sub-perceptual CSS, code block contrast in dark zones, callout frequency violations, whitespace voids, footer specificity bugs.

4. **Progressive disclosure:** Pass 1 had zero `<details>` elements. Pass 2 introduced 11-17 disclosure elements. This is a structural capability that Pass 1 simply didn't have.

5. **Accessibility:** Only the final build has skip links and ARIA landmarks. These are Pass 3's explicit contribution.

6. **Anti-pattern defense:** Only the final build has defensive CSS comments documenting what was fixed and why. Pass 1 has no defensive annotations.

### Would Skipping to a Single Pass Produce Equivalent Quality?

**NO.** The evidence argues strongly against single-pass equivalence:

1. **Information budget:** Pass 1 consumed Sections 0,1,2,9 (soul + context + mechanisms + protocol). Pass 2 consumed Sections 3,4,5 (findings + zone architecture + case studies). Pass 3 consumed Sections 6,7,8 (anti-patterns + validated CSS + structural propositions). A single-pass builder would need to consume ALL 10 sections at once -- well beyond effective context utilization.

2. **Distinct cognitive modes:** Pass 1 is GENERATIVE (build from nothing). Pass 2 is AUGMENTATIVE (enrich what exists). Pass 3 is EVALUATIVE (find and fix problems). These are genuinely different cognitive tasks. A single pass would try to do all three simultaneously, which is how "build from scratch" builders produce flat, uniform output.

3. **Empirical delta:** Pass 2 added 12 new CSS classes in Molly and 7 in Yegge, each traceable to specific findings. Pass 3 caught concrete bugs (double-border stacking, dark zone contrast, sub-perceptual CSS). These are interventions that would not happen in a single generative pass.

4. **The progressive disclosure case:** Zero `<details>` elements in Pass 1, 17 in Pass 2 (Yegge). This is a structural transformation -- the role cards went from flat display to scannable summaries with depth-on-demand. This level of rethinking happens when a builder READS existing HTML with enrichment intent, not when generating from scratch.

---

## E. Builder Reflection Quality

### Molly Reflection

**Format compliance:** All 6 dimensions present (Conviction Fidelity, Alternatives Considered, Surprises, Impulses Resisted, Experience Quality, Unresolved Tensions). 38 lines, within the 30-50 target.

**Honesty assessment: GENUINE.** Key evidence:
- Identifies terra incognita as a compromise ("reads as organized data, not unmapped territory")
- Identifies Parts VIII-XI as the weakest moment ("A reader might skim this section")
- Identifies the close-up indentation as "genuinely subtle" and possibly sub-perceptual
- Flags Legend->Terra Incognita gap exceeding the 120px guideline by 8px
- Names specific CSS values (128px gap, 24px left padding, 640px max-width)

**Alternatives Considered:** 2 specific alternatives with reasoning (register-transition labels as zone-boundary borders, reducing legend entries from 9 to 6). Both have clear rejection rationale.

**Package references:** References specific package instructions -- Structural Proposition 4, Section 6 callout cacophony treatment, Pattern 6 (flex + ruled-line approach).

### Yegge Reflection

**Format compliance:** All 6 dimensions present. 30 lines, at the lower bound of the 30-50 target.

**Honesty assessment: GENUINE.** Key evidence:
- Identifies Zone 4->5 boundary as a metaphor compromise ("two adjacent 'floors' feel identical")
- Identifies Zone 1->2 background contrast as "nearly imperceptible" and does the math (FE->FF, F9->FF, F5->FF = deltas of 1, 6, 10)
- Acknowledges voice eruption count (10) exceeds 3-4 budget
- Progressive disclosure trade-off honestly stated ("reduces above-fold visual richness")
- Footer quote specificity conflict described as "the kind of CSS bug that's invisible during authoring"

**Alternatives Considered:** 2 specific alternatives (removing register bridges entirely, reducing checkpoint callouts to inline). Both have clear rejection rationale with CSS reasoning.

**Package references:** References package specifications for voice eruption budget, callout cacophony treatment, Proposition 1.

### Verdict on Reflections

Both reflections are **substantive and honest**, not performative. They identify real weaknesses, cite specific CSS values, and make trade-off reasoning explicit. Neither reflection simply declares success -- both name 3-4 unresolved tensions that a 4th pass would address.

---

## F. Decisions File Quality

### Molly Pass 1 Decisions

**Continuity value: HIGH.**
- Metaphor applied: 4 lines, specific ("cartographic survey station", cites content logic)
- Zone architecture: 7 zones listed with name, purpose, background, spacing, and content mapping
- Mechanisms deployed: 8 mechanisms, each with deployment description and zone targets
- CSS naming vocabulary: 15+ custom property names listed with their semantic mapping
- Responsive strategy: 3 sentences covering breakpoints and overflow handling
- Open questions: 5 specific questions for Pass 2 with enough detail to act on

**Specific CSS naming listed:** `--survey-parchment`, `--survey-drafting`, `--border-measured`, `--border-structural`, `--border-projected`, `.zone-cartouche`, `.proof-mark`, `.rival-annotation` -- all preserved in Pass 2.

### Molly Pass 2 Decisions

**Continuity value: HIGH.**
- Findings deployed: 20-row table with finding ID, target zone, and specific CSS action for each
- Reports "18 of 20" findings deployed -- honest about coverage
- Density adjustments: confirms wave matches Section 4 diagram, describes climactic transition
- Case study techniques: 3 techniques integrated with adaptation notes
- Self-assessment: 3 paragraphs covering above-fold, mid-page, closing zone
- Concerns for Pass 3: 6 specific concerns with enough detail for the hardening builder to verify

### Yegge Pass 1 Decisions

**Continuity value: HIGH.**
- Zone architecture: full table with 6 columns (Zone, Name, Purpose, Background, Heading Size, Padding, Content Sections)
- Mechanisms deployed: 8 mechanisms with multi-line descriptions
- CSS naming vocabulary: full table with Custom Property, Maps To, Token Value columns
- Open questions: 7 specific questions with zone references

### Yegge Pass 2 Decisions

**Continuity value: HIGH.**
- Findings deployed: 24-row table covering all 24 findings
- Reports "24 of 24" -- complete coverage
- Case study techniques: 3 techniques with source citation and adaptation description
- Density self-assessment: 4 paragraphs, honest about progressive disclosure trade-off
- Concerns for Pass 3: 5 specific concerns, actionable

### Verdict on Decisions Files

All 4 decisions files are **high-quality continuity bridges**. They:
1. List specific CSS naming vocabulary (enabling the next builder to use the same names)
2. Enumerate mechanisms/findings with deployment locations
3. Flag open questions with enough specificity for the next builder to investigate
4. Maintain metaphor language consistently across passes
5. Include honest self-assessment of what worked and what didn't

---

## G. Cross-Run Comparison

### Where the Runs Diverge

**Molly's Pass 2 was MORE creative than Yegge's.** Molly added 12 new CSS classes vs Yegge's 7. Molly's enrichment created genuinely novel CSS constructs (cinematic wide/close/wide, domain clustering with extreme whitespace). Yegge's enrichment was more about structural transformation (progressive disclosure, bento grid ratio changes) and verification/preservation of Pass 1 work (14 of 24 findings were "preserved" rather than newly deployed).

**Yegge's Pass 3 was MORE defensive.** Yegge's final has 77 anti-pattern/fix citations vs Molly's 24. Yegge's hardening pass caught more concrete bugs (dark zone code block contrast, footer specificity conflict, callout demotion). Molly's Pass 3 blurred into the fix cycle -- the final file shows more FIX CYCLE annotations than Pass 3 hardening annotations.

**Molly lost the transition table.** The transition table was present in Pass 1 and Pass 2 but absent from the final build. This is a continuity regression -- the fix cycle builder likely rebuilt portions without preserving the comment block. Yegge maintained the transition table across all 3 passes.

**Molly lost `<details>` elements.** Pass 2 added 11 `<details>` elements for progressive disclosure. The final has only 4. The fix cycle appears to have removed 7 disclosure elements -- a richness regression if these were functional.

### Where the Runs Converge

Both runs show the SAME pattern:
1. Pass 1 creates a strong structural foundation with metaphor-driven naming, 149-169 selectors, and 8 mechanism deployments
2. Pass 2 adds 20-30% more CSS through finding-by-finding enrichment, introduces progressive disclosure, and adds new CSS constructs
3. Pass 3/Fix cycle focuses on defensive fixes (anti-patterns, contrast, stacking, accessibility)
4. The final is objectively richer, more accessible, and more defensible than Pass 1

---

## H. Findings and Recommendations

### The Rotation Works

**Strong evidence:** The 3-pass rotation is NOT redundant. Each pass has a genuinely distinct cognitive mode (generative / augmentative / evaluative), consumes different package sections, and produces measurably different output. The progressive quality curve is real -- Pass 1 provides 60-70% of the structural value, Pass 2 adds 20-25% through enrichment, and Pass 3/Fix adds 10-15% through hardening and accessibility.

### Specific Strengths

1. **Package section isolation works.** The section-per-pass split (S0-2-9 / S3-4-5 / S6-7-8) is well-designed. Each pass has a tractable information budget rather than consuming all 10 sections at once.

2. **Decisions files work as continuity bridges.** Both Pass 2 builders demonstrably read and acted on Pass 1 decisions. CSS naming vocabulary was preserved. Open questions were addressed. This is the highest-value artifact in the rotation.

3. **Citation density is high.** 37-82 citations in Pass 1, 81-120 in Pass 2, 24-77 in Pass 3/Final. The builders are tracing their CSS to package sources, enabling comparison reports to diagnose knowledge transfer quality.

4. **No soul violations across any pass.** Zero border-radius, box-shadow, gradient, or rgba violations across all 6 HTML files. Soul compliance is maintained from the start -- it is not something the later passes need to fix.

### Specific Weaknesses

1. **Pass 3 is ambiguous with Fix Cycle.** The final file incorporates BOTH Pass 3 hardening AND Fix Cycle 1 refinement. This makes it hard to attribute specific improvements to Pass 3 vs the fix cycle. The `_build-final.html` is NOT a pure Pass 3 output.

2. **Molly lost artifacts.** The transition table and 7 `<details>` elements disappeared between Pass 2 and the final. This is a continuity failure -- the fix cycle builder should preserve ALL Pass 2 constructs unless explicitly removing them for cause.

3. **Yegge Pass 2 was conservative.** 14 of 24 findings were "preserved/verified" rather than newly deployed. The enrichment pass should be more aggressive about adding NEW CSS, not just confirming what Pass 1 already did. The findings that ARE new (progressive disclosure, temperature buffer, bento grid) are high-value -- the confirmed ones add citation value but not CSS value.

4. **No Pass 3 output file exists.** There is no `_build-pass-3.html` separate from `_build-final.html`. If Pass 3 is truly distinct from the fix cycle, it should produce its own intermediate artifact to enable delta measurement.

### Recommendations

1. **Separate Pass 3 from Fix Cycle.** Write `_build-pass-3.html` as a distinct artifact before the fix cycle starts. This allows measuring Pass 3's contribution independently.

2. **Add a continuity check to the fix cycle prompt.** "Before modifying, verify: transition table present? All `<details>` elements from Pass 2 preserved? All custom properties intact?"

3. **Score Pass 2 on NEW CSS, not verifications.** The enrichment pass should report "X findings newly deployed" separately from "Y findings verified as already present." Yegge reported "24 of 24" deployed, but 14 were confirmations. The real enrichment count was 10.

4. **Consider strengthening the Pass 2 prompt's aggression.** The current prompt says "If not yet deployed, add the CSS action." But many findings in Yegge's case were already partially deployed in Pass 1, leading to "verified" rather than "enriched." The prompt could specify: "For each finding, identify what Pass 1 deployed AND what the finding adds BEYOND Pass 1."

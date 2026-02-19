# Prompt Forensics: Line-by-Line Analysis of the 963-Line Master Execution Prompt

**Analyst:** Prompt Forensics Agent (Opus 4.6)
**Date:** 2026-02-17
**Subject:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (v3, 963 lines)
**HTML Output:** 07-intentionality.html (2,034 lines, 15,711px tall)
**Audit Data Source:** 00-AUDIT-DATA.md (programmatic measurements)

---

## EXECUTIVE SUMMARY

The 963-line prompt is a **guardrail encyclopedia masquerading as a build specification**. It contains 97 rule IDs, 30 parameters, 39 cross-reference enrichments, and extensive conviction prose -- but almost zero positive construction instructions. The prompt tells agents what NOT to do (97 prohibitions/gates/thresholds) and almost nothing about what TO do (zero CSS recipes, zero component templates, zero "build this specific thing" directives).

The result is an HTML page that passes most binary gates but fails perceptually. It is compliant and lifeless. The prompt optimized for measurable compliance and got exactly that -- compliance without design.

**Verdict by section:** 4 WORKED, 5 PARTIAL, 7 FAILED, 2 COUNTERPRODUCTIVE.

---

## SECTION A: CONVICTION LAYER (Lines 11-107, ~96 lines)

### A1. THESIS (Lines 15-24)

- **Intent:** Set emotional orientation. Establish "warm, authoritative, unhurried" as the target personality. Define the 5-second test (arrival, orientation, first delight, spatial confidence).
- **Actual outcome:** The page IS warm (cream backgrounds, Instrument Serif headings, generous opening spacing). The header IS authoritative (dark background, red accent, confident serif title). The 5-second test partially passes: arrival works (strong header), orientation works (Section 1 intro is clear), first delight is debatable (no visual surprise within 15-20% scroll -- Section 2 pullquote is at ~13% which is close), spatial confidence FAILS (sections 4000-6000px are blank cream voids per screenshot evidence).
- **Why it partially failed:** "Warm. Authoritative. Unhurried." is DESCRIPTIVE, not OPERATIONAL. It gives atmosphere targets but zero CSS instructions for achieving them. The builder interpreted "unhurried" as "generous padding" which contributed to the void problem. No rule converts "unhurried" into a specific spacing range.
- **Classification:** PARTIAL

### A2. TENSIONS (Lines 26-33)

- **Intent:** Define IS/IS NOT boundaries for 4 axes (Temperature, Restraint, Authority, Density).
- **Actual outcome:** The "Warm / not Soft" tension was respected -- backgrounds are warm-tinted, not pastel. "Austere / not Cold" was respected -- sharp edges, no decorative flourish. "Authoritative / not Aggressive" was respected -- no overwhelming visual weight. "Restrained / not Empty" was the CRITICAL FAILURE: the page IS empty at multiple scroll positions. Sections S2->S3, S4->S5, S6->S7, S7->S8, S8->S9, S11->S12 all have 210-276px gaps. Scroll positions 4000px, 5000px, 6000px are COMPLETELY BLANK CREAM.
- **Why it failed:** The tension table is a philosophical framework, not a gate. There is no binary rule derived from "Restrained / not Empty." S-02 (content-to-void >= 60:40) actually PASSES at 83:17 globally, but the void is LOCALIZED, not global. The tension table had no way to catch localized emptiness.
- **Classification:** PARTIAL (3/4 axes worked, the critical 4th failed)

### A3. ANTI-SCALE MODEL + EVIDENCE (Lines 35-45)

- **Intent:** Establish `Richness = semantic_density x restraint x spatial_confidence` as the governing formula. Warn that more scales != better design. Set 5 as ceiling.
- **Actual outcome:** The page uses 2-3 scales effectively (page-level structure, section-level organization, element-level typography). It does NOT over-scale. The anti-scale warning was heeded. However, the formula itself was never operationalized -- no agent computed semantic_density, restraint, or spatial_confidence values. The formula exists as explanatory prose, not as a gate.
- **Why it partially failed:** The formula is UNFALSIFIABLE in its current form. How do you measure "semantic_density"? What units? What threshold? The formula explains WHY the ceiling experiment failed but gives no binary check to prevent re-failure.
- **Classification:** PARTIAL (prevented over-scaling; did not prevent spatial confidence failure)

### A4. DUAL RICHNESS SOURCES (Lines 47-54)

- **Intent:** Establish that crown jewel quality requires BOTH constraint pressure (Source 1) AND design intelligence (Source 2).
- **Actual outcome:** Source 1 delivered -- soul compliance is strong (zero border-radius, zero box-shadow, zero gradients, warm neutrals). Source 2 is where the gap is. The prompt says Source 2 "requires Opus-level agents for metaphor + intentionality passes." The metaphor (Assay Laboratory) IS present and structurally deployed through 6 channels. The intentionality pass added 6 dimensions (self-reference, pedagogical sequencing, cognitive transitions, bookending, meta-annotation, provenance threading). So Source 2 WAS attempted -- the issue is that the agents applied it through CSS comments and HTML comments rather than through VISIBLE CSS differentiation. The metaphor is "announced" in comments, not "structural" in perception.
- **Why it partially failed:** "Requires Opus-level agents" is a STAFFING directive, not a DESIGN directive. It tells you WHO should do it, not WHAT they should produce. No binary rule checks whether Source 2 actually manifests visually.
- **Classification:** PARTIAL (both sources attempted; Source 2 invisible to the reader)

### A5. COMPOSITIONAL FLUENCY (Lines 56-69)

- **Intent:** Define 5 interaction types (Reinforcing, Modulating, Responding, Contrasting, Cascading) across 6 dimensions. Provide CD-006 worked example showing how 3 mechanisms co-vary in a CRESCENDO trajectory.
- **Actual outcome:** The HTML output claims 14 mechanisms with 4 compositional clusters. The CSS shows real mechanism interactions: border-weight varies by zone (Zone 1 light, Zone 2 heavy, Zone 3 medium), spacing compresses in Zone 2, backgrounds shift warm->cool->warm. However, the PERCEPTUAL reality from audit data contradicts this: Scale 5 measurements show ALL UNIFORM p fontSize (16px), fontWeight (400), color (rgb(26,26,26)), marginBottom (16px), h2 fontSize (28px), h2 fontWeight (400). The only variation is letter-spacing (0.096px to -0.048px to "normal") and line-height (28.8px to 26.4px to 28px). These are IMPERCEPTIBLE differences (sub-pixel letter-spacing, 2px line-height shifts).
- **Why it failed:** The CD-006 worked example shows border-weight + zone backgrounds + spacing compression ALL tracking the same CRESCENDO. The flagship output HAS this in its CSS definitions but the MAGNITUDES are too small. Background color shifts of 1-8 RGB points are invisible. Letter-spacing shifts of 0.048px are invisible. The prompt gave a beautiful theory of interaction types but zero minimum-magnitude thresholds. A "reinforcing pair" of two imperceptible changes is technically compliant but perceptually empty.
- **Classification:** FAILED (interactions exist on paper; invisible in perception)

### A6. EXPERIENTIAL LAWS (Lines 71-79)

- **Intent:** Encode 6 hard-won lessons from 4 experiments. Key lessons: "Plans do NOT prevent spatial failure. Only GATES prevent spatial failure." "Deployment does NOT equal perception."
- **Actual outcome:** PROPHETIC but UNHEEDED. The prompt's own insight -- "Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived" -- describes EXACTLY what happened in this experiment. The flagship deploys 14 mechanisms. The audit data shows most are imperceptible. The prompt KNEW this would happen and said it in plain text. But no GATE was derived from this lesson. No rule says "each mechanism must produce >= Xpx of visible change."
- **Why it failed:** These are OBSERVATIONS, not RULES. "Every rule in this prompt has an attention cost" is brilliant metacognition but it is descriptive, not prescriptive. The sentence "LENGTH IS THE ENEMY OF QUALITY" is SELF-CONTRADICTORY in a 963-line prompt. The prompt violates its own principle.
- **Classification:** COUNTERPRODUCTIVE (the prompt contains the diagnosis of its own failure but formatted it as wisdom, not as gates)

### A7. QUALITY EXEMPLAR: CD-006 (Lines 81-95)

- **Intent:** Provide a concrete CSS code example from the 39/40 crown jewel. Show a "breathing transition" with specific values (80px margin, 3px border, 80px padding). Show token compliance (54 definitions, ~270 var() usages).
- **Actual outcome:** The flagship DOES have breathing transitions (`.divider-breathing` with 80px margin + 3px height). Token compliance appears strong (extensive var() usage throughout). The specific code example was faithfully replicated. However, CD-006 also used section-level borders, callout borders, and horizontal rules as VISIBLE structural elements. The flagship has ZERO section-level borders (audit: "Zero borders anywhere in the entire page outside of tables and component-blocks"). CD-006's transitions were embedded in a page with rich structural differentiation; the flagship's transitions float in a sea of near-identical sections.
- **Why it partially failed:** One code snippet is not enough to convey CD-006's holistic approach. The exemplar shows a transition technique but not the SURROUNDING CONTEXT that made it work. Builder learned the transition recipe but not the structural-diversity recipe.
- **Classification:** PARTIAL (transition technique replicated; structural context lost)

### A8. READER JOURNEY (Lines 97-106)

- **Intent:** Define scroll as a 5-act story with specific scroll-depth percentages and requirements. "Every visual texture promised in Act 1 MUST recur in Acts 2-4."
- **Actual outcome:** The 12-section structure maps roughly to the 5 acts. Act 1 (0-15%): header + intro + pullquote -- this WORKS. Act 2 (15-35%): density rhythm + choreography -- this works but is text-heavy without visual delight. Act 3 (35-65%): components + whitespace + tensions + architecture -- this is the strongest visual section with the featured table and dark code blocks. Act 4 (65-85%): findings + anti-patterns + hypotheses -- this DEGRADES to uniform table-after-table. Act 5 (85-100%): closing + footer -- this works. The "interest monotonically decreases" warning was violated: Acts 4-5 are visually less interesting than Acts 1-3.
- **Why it partially failed:** "Every visual texture promised in Act 1 MUST recur" is unfalsifiable. What "visual textures" does Act 1 "promise"? Drop cap? Serif headings? Dark header? The rule is vague enough that any claim of compliance or violation is equally defensible. No binary check was derived.
- **Classification:** PARTIAL (rough act structure present; monotonic interest decline in second half)

---

## SECTION B: EXECUTION SPEC (Lines 108-435, ~327 lines)

### B1. SPATIAL (Lines 114-150, 17 rules: S-01 through S-17)

- **Intent:** Prevent the two known failure modes: wrong container width and catastrophic whitespace void. 17 binary rules with specific px values and verification methods.
- **Actual outcome per rule:**
  - **S-01 (container 940-1100px):** PASSED. `.page-container { max-width: 960px }` confirmed in CSS line 183.
  - **S-02 (content-to-void >= 60:40):** PASSED GLOBALLY (83:17). But this MASKS localized voids. A page that is 83% content overall can still have 3+ viewport positions that are completely blank.
  - **S-03 (header <= 20% / kill at 25%):** PASSED. Header appears to be ~170px, well under 288px limit.
  - **S-04 (footer exists with content):** PASSED. Dark footer with label, closing quote, meta text, and provenance stamp.
  - **S-05 (all planned sections >= 200px content height):** PASSED. All 12 sections have substantial content.
  - **S-06 (>= 5 content sections):** PASSED. 12 sections.
  - **S-07 (CPL 45-80):** PASSED. `max-width: 68ch` on paragraphs.
  - **S-08 (heading spacing ratio >= 1.5:1):** Likely PASSED but not measured in audit.
  - **S-09 (max spacing 96px, total visual gap <= 96px):** **FAILED.** Audit data shows 6 gaps ranging from 210-276px between sections. These gaps are composed of section padding-bottom + divider margin + bridge prose margin + next section padding-top, which stack to well exceed 96px total.
  - **S-10 (no contiguous void > 2160px):** PASSED per audit (no single void > 2160px, the largest gaps are ~276px).
  - **S-11 (no single CSS property > 96px):** Likely PASSED. The largest single CSS value is `--space-24: 96px` which is the cap. But STACKED values exceed 96px total.
  - **S-12 (no full viewport < 30% content coverage):** **FAILED.** Audit explicitly states "Scroll positions 4000px, 5000px, 6000px are COMPLETELY BLANK CREAM." Zero content at those positions is far below 30%.
  - **S-13 (>= 1 designed moment past 50% scroll):** PASSED. Dark code blocks at ~60% scroll, coral-accented anti-pattern table at ~70%.
  - **S-14 (graduated content-to-void):** PASSED globally but not per-pass.
  - **S-15 (zone count ceiling by word count):** PASSED. Page appears to be 3000-5000 words across 3 zones.
  - **S-16 (SCI >= 0.60):** UNKNOWN. No CCS measurements were taken programmatically.
  - **S-17 (first 1.5 viewports >= 3 visual textures):** PASSED. Header (dark bg + red accent + serif type) + Section 1 (warm cream + drop cap + body text) = at least 3 textures.

  **Score: 12-13 PASS, 2 FAIL (S-09, S-12), 2-3 UNKNOWN/UNMEASURED**

- **Why it partially failed:** S-09 and S-12 are the critical failures. S-09 caps individual CSS properties at 96px but the STACKING of multiple compliant values (section padding-bottom 64px + divider margin 48-80px + bridge prose margin + next section padding-top 32-64px) creates gaps of 210-276px. The rule prevents any SINGLE property from exceeding 96px but not the SUM. This is a specification defect. S-12 should have been a hard gate but was never enforced programmatically during the build.
- **Classification:** PARTIAL (most rules passed; 2 critical spatial rules failed; the stacking loophole in S-09 is a specification defect)

### B2. SOUL (Lines 152-166, 10 rules: U-01 through U-10)

- **Intent:** Enforce the 10 non-negotiable identity constraints (zero border-radius, zero box-shadow, no gradients, no pure black/white, correct font trinity, etc.).
- **Actual outcome:**
  - **U-01 (border-radius: 0):** PASSED. Global `* { border-radius: 0 !important }` on line 56-57.
  - **U-02 (box-shadow: none):** PASSED. Global `* { box-shadow: none !important }` on line 63.
  - **U-03 (no filter: drop-shadow):** PASSED. Zero filter usage in CSS.
  - **U-04 (no rgba/opacity < 1):** PASSED. No rgba() or opacity values found.
  - **U-05 (no gradients):** PASSED. No linear-gradient, radial-gradient, or conic-gradient.
  - **U-06 (no #000000 or #FFFFFF):** MOSTLY PASSED. Uses `#1A1A1A` for near-black and `#FEF9F5` for cream. One potential issue: `#FEFEFE` (near-white) used for Zone 2 sections. Not #FFFFFF but very close. Also `#3A3530` used for dark block internal borders -- this is fine.
  - **U-07 (Instrument Serif: display headings only):** PASSED. `font-family: var(--font-display)` only on h1, h2, pullquote, closing-essence, footer-closing.
  - **U-08 (no cool-toned grays):** PASSED. All grays are warm-shifted (#8A8580, #706860, #A89E94, #C8BFB5).
  - **U-09 (typography trinity):** PASSED. `Instrument Serif / Inter / JetBrains Mono` correctly loaded and applied.
  - **U-10 (soul enforcement selector):** PASSED. Both global `*` and `*:where(:not(input,button,select))` selectors present.

  **Score: 10/10 PASS**

- **Why it worked:** These are the PUREST binary rules in the entire prompt. Each one names a specific CSS property and a specific forbidden value. Zero ambiguity. Zero judgment. The builder can verify each one with a single CSS search. THIS IS THE MODEL for how all rules should be written.
- **Classification:** WORKED

### B3. COMPOSITIONAL (Lines 168-216, 21 rules: C-01 through C-21)

- **Intent:** Govern mechanism deployment, transitions, compositional quality, restraint, intentionality, and fractal coherence.
- **Actual outcome per key rule:**
  - **C-01 (per-category minimums: S:1+, H:1+, C:1+, D:1+, N:1+):** CLAIMED PASSED. Build plan claims 14 mechanisms across categories. But the audit shows Ch4 Structural is "COMPLETELY ABSENT" outside of tables and component-blocks. Section-level borders and dividers are zero. This suggests the "Structure/Nav" category minimum was met by counting table borders and component borders, which is technically compliant but perceptually thin.
  - **C-02 (target 12-14, cap 16):** PASSED. 14 mechanisms deployed.
  - **C-03 (density <= 4 operating per viewport):** PASSED. Most viewports show 1-2 mechanisms operating.
  - **C-05 (>= 3 transition types):** PASSED. CSS defines `.divider-smooth` (48px+1px), `.divider-bridge` (64px+1px), `.divider-breathing` (80px+3px). All three used in HTML.
  - **C-08 (>= 2 reinforcing pairs):** CLAIMED PASSED. The chromatic-spatial pair (warm bg + generous spacing in Zone 1, cool bg + tight spacing in Zone 2) is a real reinforcing pair. But the RGB differences are 1-8 points -- barely perceptible. A reinforcing pair that is imperceptible is technically compliant and perceptually null.
  - **C-09 (>= 1 designed moment per scroll quartile):** PARTIAL. Q1: pullquote (yes). Q2: featured table (yes). Q3: dark code blocks (yes). Q4: closing component block (weak -- it is a standard component-block with serif text, not a strong designed moment).
  - **C-10 (>= 2 purpose-built components):** PASSED. The pullquote wrapper with outline-offset and the sequence-block (dark code blocks) are both purpose-built.
  - **C-12 (rejection log >= 21):** UNKNOWN. Not in the audit data. This is an UNVERIFIABLE rule in post-hoc analysis.
  - **C-13 (>= 2 silence zones 200px+):** FAILED. No section of the page has 200px+ of "base typography only, NO mechanism CSS." Every section has at least zone-background coloring and section-meta labels. The bridge prose areas between sections are the closest thing to silence zones but they are 50-80px, not 200px+.
  - **C-14 (signal-to-silence 0.6-0.8:1):** FAILED. With zero true silence zones, this ratio is undefined/infinite.
  - **C-15 (>= 3 of 6 intentionality dimensions):** PASSED. HTML comments document all 6 dimensions: self-reference (3 organic callouts), pedagogical sequencing (Orient/Deepen/Synthesize), cognitive transitions (4 bridge prose blocks), bookending (S1/S12 mirror), meta-annotation (12 section-meta labels), provenance threading (header comment + footer stamp). However, visibility matters: meta-annotation labels are visible but tiny (12px mono uppercase), self-reference is in prose content not visual form, provenance is in footer only. Most dimensions are textual, not visual.
  - **C-18 (density arc: peak NOT first):** PASSED. Peak density is in S5-S8 (mid-page), not S1.
  - **C-20 (fractal coherence):** CLAIMED PASSED. The CSS comments describe a coherent CRESCENDO arc across scales. But the perceptual reality is that the "crescendo" from Zone 1 to Zone 2 is imperceptible (sub-pixel differences). Fractal coherence at magnitudes below perception is not coherence.
  - **C-21 (compositional clusters):** PASSED. The build plan groups mechanisms into 4 clusters (A: Refinement Gradient, B: Component Identity, C: Structural Bookends, D: Table Progression).

  **Score: ~10-12 PASS, ~3-4 FAIL, ~5-7 UNKNOWN/UNVERIFIABLE**

- **Why it partially failed:** The rules are binary but many operate on CLAIMS rather than MEASUREMENTS. "Per-category minimums" can be gamed by counting technically-present-but-imperceptible mechanisms. "Reinforcing pairs" can be claimed for sub-pixel differences. The rules need PERCEPTUAL MAGNITUDE minimums, not just presence/absence checks.
- **Classification:** PARTIAL (most rules technically passed; many are gamed by imperceptible implementations)

### B4. MULTI-COHERENCE (Lines 218-238, 8 rules: MC-01 through MC-08)

- **Intent:** Ensure mechanisms are COUPLED (removal of one changes meaning of others), not just co-present.
- **Actual outcome:**
  - **MC-01 (CCS >= 0.30):** UNKNOWN. No CCS was computed programmatically. The prompt defines CCS as a per-mechanism removal test, but no agent performed it. This is the HIGHEST-VALUE compositional metric and it was never measured.
  - **MC-02 (>= 3 reinforcing pairs):** CLAIMED but imperceptible (see B3 analysis).
  - **MC-03 (>= 2 modulating chains):** CLAIMED in CSS comments (e.g., "#5 dense/sparse -> #18 data table" and "#5 density -> #2 internals"). The CSS DOES show `.component-block.dense` with tighter padding vs `.component-block.sparse` with generous padding. This is a REAL modulating chain, and it IS visible. PARTIAL PASS.
  - **MC-04 (>= 2 responding sequences):** CLAIMED but unverifiable from output alone.
  - **MC-05 (>= 2 contrasting deployments):** CLAIMED (e.g., dark code blocks in S8 contrasting with light tables). The dark code blocks at S8 ARE a genuine contrast. PASS.
  - **MC-06 (>= 1 cascading chain of 3+):** CLAIMED. The CSS comments describe "border-weight (#1) + zone backgrounds (#7) + spacing compression (#4)" as a co-varying chain. The CSS DOES implement this: Zone 1 has light borders + warm bg + generous spacing; Zone 2 has heavy borders + cool bg + tight spacing. But the zone background differences are imperceptible (1-8 RGB points). The chain exists structurally but one link is invisible.
  - **MC-07 (>= 10/15 dimension pairs coupled):** UNKNOWN. Never measured.
  - **MC-08 (anti-metronome: >= 3 distinct spacing values):** PASSED. Section paddings vary: 32px, 40px, 48px, 64px, 80px across sections.

  **Score: 2-3 PASS, 2-3 CLAIMED/IMPERCEPTIBLE, 3 UNKNOWN**

- **Why it failed:** CCS -- the ONE metric that directly measures whether mechanism deployment creates compositional quality -- was NEVER COMPUTED. The prompt defines it beautifully (lines 221-224) but no gate forces its computation. It is the most important metric in the entire spec and the most ignored.
- **Classification:** FAILED (the signature metric was never measured; claims are unverified)

### B5. SCALE-CHANNEL (Lines 240-271, 10 rules: SC-01 through SC-10)

- **Intent:** Govern the scale-channel matrix -- ensure mechanisms operate across multiple scales and channels for rich coverage.
- **Actual outcome:**
  - **SC-01 (max 5 scales, preferred 2-3):** PASSED. Page operates at 2-3 scales effectively.
  - **SC-02 (>= 5 of 7 channels):** TECHNICALLY PASSED, PERCEPTUALLY FAILED. Ch1 Chromatic: present but 1-8 RGB difference = invisible. Ch2 Typographic: present but sub-pixel letter-spacing = invisible. Ch3 Spatial: present and VISIBLE (section padding varies 32-80px). Ch4 Structural: audit says "COMPLETELY ABSENT" at section level (zero borders, zero dividers, zero containment outside tables/components). Ch5 Density: present and VISIBLE (S5/S8 are genuinely denser). Ch6 Rhythmic: present but subtle (component spacing varies by zone). Ch7 Intentional: present in comments, invisible to reader. Honest count: 2-3 channels perceptibly active (Spatial, Density, and arguably Rhythmic), not 5.
  - **SC-03 (>= 30/35 richness matrix cells):** UNKNOWN. Never computed.
  - **SC-04 (no single channel > 40% semantic load):** UNKNOWN. Never computed.
  - **SC-09 (>= 3 channels shift at each transition):** CLAIMED. HTML comments at each transition note "Channels shifting: Chromatic, Spatial, Structural, Density (4 channels)." But if Chromatic shifts by 3 RGB points, does that count? The rule has no magnitude threshold.
  - **SC-10 (warm=sparse, cool=dense):** PARTIALLY PASSED. Zone 1 (warm) is sparser. Zone 2 (cool) is denser. But the chromatic difference is imperceptible, so the ALIGNMENT cannot be perceived even though it exists in the CSS.

  **Score: 2-3 PASS, 3-4 CLAIMED/IMPERCEPTIBLE, 3-4 UNKNOWN**

- **Why it failed:** Same fundamental issue as B3 and B4: the rules check PRESENCE without checking MAGNITUDE. A channel that shifts by 1 RGB point technically "shifts" but contributes nothing to perceived richness. Channel definitions (SC-02 lines 252-257) are well-written but the verification method is "count channels present" not "count channels PERCEIVABLE."
- **Classification:** FAILED (systematic magnitude blindness)

### B6. METAPHOR GATES (Lines 273-294, 5 rules: MG-01 through MG-05)

- **Intent:** Ensure metaphor quality, interpretive distance, and spatial cost. Prevent the ceiling experiment's failure mode (whitespace-as-zone-boundary).
- **Actual outcome:**
  - **MG-01 (>= 12/18 rubric):** UNKNOWN. No rubric score was recorded in output artifacts.
  - **MG-02 (interpretive distance >= 2):** PARTIAL. "Assay Laboratory" is not literal (not a real lab) and not impenetrable (refinement process is understandable). Probably 2-3 on the scale.
  - **MG-03 (6 rejection checks):** UNKNOWN. No rejection evidence in output.
  - **MG-04 (structural test: remove labels, does structure communicate?):** FAILED. If you remove ALL labels, titles, and CSS comments, the page structure does NOT communicate "assay laboratory." The background tint shifts are 1-8 RGB points -- invisible. The border weight progression exists only in tables. Without labels, the page reads as "text sections with occasional tables and one pullquote" -- a generic documentation page. The metaphor is ANNOUNCED (in comments and section-meta labels) not STRUCTURAL (visible in the design itself).
  - **MG-05 (spatial cost <= 15%):** PASSED. Metaphor adds minimal spatial overhead -- zone backgrounds add zero height, border weight adds negligible height.

  **Score: 1 PASS, 1 PARTIAL, 1 FAIL, 2 UNKNOWN**

- **Why it failed:** MG-04 is the CRITICAL gate and it failed. The prompt even warns: "The Ceiling experiment's catastrophic void was caused by whitespace-as-zone-boundary. This is the #1 failure mode." The flagship avoided the whitespace-as-boundary failure but fell into a new failure: IMPERCEPTIBILITY-as-metaphor. The metaphor exists in the CSS at magnitudes below human perception. MG-04 should have caught this -- it is the right test -- but it requires fresh-eyes evaluation at Gate 4 which either was not done or was not rigorous.
- **Classification:** FAILED (core structural test failed; metaphor is announced not structural)

### B7. PROCESS (Lines 296-319, 8 rules: P-01 through P-08)

- **Intent:** Enforce workflow ordering (content before metaphor, two-instance pattern, builder self-scroll, zone boundary requirements, spatial re-check after Pass 2).
- **Actual outcome:**
  - **P-01 (content inventory before metaphor):** Likely PASSED. Build chain shows content.md -> extract.md -> skeleton.html.
  - **P-04 (builder self-scroll):** UNKNOWN. No evidence of self-scroll verification.
  - **P-05 (zone boundary requires ALL THREE: content >= 800px, type change, intent change):** The page has 3 zones (Orient S1-S4, Deepen S5-S8, Synthesize S9-S12). Each zone has 3-4 sections with substantial content. Likely PASSED.
  - **P-07 (every checkpoint produces artifact):** PASSED. Build chain shows 7 artifacts: 01-content.md through 07-intentionality.html.
  - **P-08 (spatial re-check after Pass 2):** **CRITICAL FAILURE.** If S-09 and S-12 were re-checked after Pass 2, they would have caught the 210-276px gaps and blank viewport positions. Either the re-check was not done, or it was done and the failures were not actioned. The prompt warns: "VOID IS A CONTENT PROBLEM, NOT A CSS PROBLEM. Fix void by adding content, not by reducing margins." The flagship's voids ARE between sections (CSS margin stacking), not within sections.

  **Score: 3-4 PASS, 2-3 UNKNOWN, 1 CRITICAL FAIL (P-08)**

- **Classification:** PARTIAL (the re-check that would have caught the core defect either was not run or was not actioned)

### B8. TC PIPELINE ROUTING (Lines 322-332)

- **Intent:** Route TC phases to specific agent types. Zero builder cost -- builders never see TC details.
- **Actual outcome:** The routing appears to have been followed (build chain has separate content, metaphor, skeleton, mechanism, spatial, metaphor, intentionality passes). However, the "zero builder cost" aspiration is contradicted by the BUILDER SELF-CHECK (B10) which has 22 items -- a significant cognitive load.
- **Classification:** PARTIAL (routing followed; "zero builder cost" claim is false)

### B9. PA INTEGRATION ROUTING (Lines 334-345)

- **Intent:** Route PA questions to 9 auditors. Define PA-05 scoring calibration.
- **Actual outcome:** This section defines routing for the Mode 4 PA that happens AFTER the build, at Gate 5. The routing is well-structured. However, no PA was conducted during this experiment based on available artifacts. The prompt's greatest diagnostic tool was never deployed.
- **Classification:** WORKED (as a specification; was never actually invoked in this experiment)

### B10. BUILDER SELF-CHECK (Lines 347-383, 22 items)

- **Intent:** Last thing the builder reads before writing the file. 22 checkbox items covering spatial, soul, compositional, and multi-coherence checks. Plus an "atmosphere test."
- **Actual outcome:** The self-check is well-designed and covers the right items. S-01 through U-01 items would all pass. The critical items that SHOULD have caught the failure:
  - `S-09+S-11: No margin/padding > 96px, no visual gap > 96px` -- This SHOULD have caught the 210-276px gaps. Either the builder did not run this check, or the builder checked individual properties (each <= 96px) but not their STACKED total.
  - `P-04: Visual scroll-through confirmed` -- If the builder scrolled, they would have seen blank viewports at 4000-6000px. Either the scroll was not done or the builder did not flag it.
  - `SC-10: Warm backgrounds = sparse, cool backgrounds = dense` -- This passes technically but the chromatic difference is imperceptible.

  The "atmosphere test" asks for a ONE WORD description. This is a good design -- it forces gestalt assessment. But it is a self-assessment, not a gate. A builder who just spent hours building will not honestly say "monotonous."

  **Score: The self-check items are well-designed; compliance evidence suggests they were NOT all run**

- **Classification:** PARTIAL (good design, likely not fully executed; the stacking loophole in S-09 would fool even a diligent builder)

### B11. CONTENT TRANSFORMATION (Lines 385-418, 8 rules: CT-01 through CT-08)

- **Intent:** Prevent direct copying from research source. Enforce reader-facing prose tone.
- **Actual outcome:**
  - **CT-01 (no direct copying):** PASSED. The prose is well-written, reader-facing, with no research-register language.
  - **CT-02 (tone: warm, authoritative, unhurried):** PASSED. The prose IS warm ("You have encountered density rhythm without naming it"), authoritative (declarative sentences, no hedging), and unhurried (2-4 sentence paragraphs).
  - **CT-03 (word count targets):** PASSED. Sections have appropriate lengths; headings are 3-8 words.
  - **CT-04 (exclude provenance):** PASSED. No "R-3 found..." or "11 agents analyzed..." in body text.
  - **CT-05 (reader-facing headings):** PASSED. "Why Great Documentation Breathes" not "R3-R5 Synthesis."
  - **CT-06 (self-contained):** PASSED. Each section is understandable independently.
  - **CT-07 (Content Writer assigned):** PASSED per build chain.
  - **CT-08 (content quality gate):** Likely PASSED.

  **Score: 8/8 PASS**

- **Why it worked:** These rules are SPECIFIC, BINARY, and VERIFIABLE. "No direct copying" -- check. "Reader-facing headings" -- check. "No hedging phrases" -- check. The content transformation is THE BEST-EXECUTED aspect of the flagship. The prose quality is genuinely excellent.
- **Classification:** WORKED

### B12. RECOVERY PROTOCOLS (Lines 420-435, 4 rules: RP-01 through RP-04)

- **Intent:** Define what happens when things go wrong. Max 1 metaphor re-derive, 2-gate-failure abort, programmatic tiebreakers, checkpoint artifacts.
- **Actual outcome:** No recovery was needed during the build (no gate failed hard enough to trigger RP-01 through RP-04). This is either because gates passed or because gates were not rigorously run.
- **Classification:** PARTIAL (untested; the fact that no recovery was triggered suggests gates may not have been enforced)

---

## SECTION C: COORDINATION SPEC (Lines 437-654, ~217 lines)

### C1. AGENT ROSTER + TEAM TOPOLOGY (Lines 441-496)

- **Intent:** Define all agent roles across 5 passes. Flat hub-and-spoke topology. Per-file ownership. Builder visibility cap of <= 75 lines.
- **Actual outcome:** The build chain (01-content through 07-intentionality) shows sequential pass execution. The agent roster is comprehensive. However:
  - **Builder visibility cap (75 lines):** This is the RIGHT idea -- builders should see minimal rules. But the prompt is 963 lines and the team-lead must decide WHICH 75 lines to send. No pre-sliced builder prompt exists in the spec. The overhead of extracting 75 lines from 963 is itself a failure point.
  - **"Every agent messages team-lead" + "Zero messages at Gate 1 = PAUSE":** The audit data does not report on messaging. Given prior experiments (ceiling: zero messages, middle: zero messages), messaging enforcement has a ~0% compliance rate across all experiments.
  - **Pass structure:** 5 passes is correct. Content -> Skeleton -> Mechanisms -> Metaphor -> Intentionality. But the flagship output shows metaphor integration so subtle it is invisible, suggesting Pass 3 and Pass 4 operated in CSS-comment-land rather than CSS-property-land.
- **Classification:** PARTIAL (structure correct; messaging enforcement likely failed; builder visibility cap never operationalized into a pre-sliced prompt)

### C2. COMMUNICATION PROTOCOL (Lines 498-527)

- **Intent:** Force inter-agent messaging via 5+1 mandatory checkpoints (CP-A through CP-F). Minimum 8 substantive messages. "Zero SendMessage = quality cost."
- **Actual outcome:** Based on every prior experiment, messaging was likely near zero. The prompt says "CD-006 WITH messaging scored 39/40. Ceiling WITHOUT scored DO NOT SHIP." This is THE most-repeated lesson in the entire project memory. And yet messaging enforcement continues to fail. The reason: agents complete their tasks and write files, but do not send messages because message-sending is a SIDE EFFECT of task completion, not the task itself. No TaskCreate item says "Send CP-A message." The messages are obligations, not deliverables.
- **Why it failed:** Messages are defined as obligations ("MUST") attached to other activities, not as standalone tasks with completion gates. A binary rule like "Gate 1 cannot start until CP-A message text appears in team chat" would work. The current approach -- "you should message" -- is a judgment rule and those achieve ~0% compliance.
- **Classification:** FAILED (messaging was likely zero or near-zero; the prompt KNOWS this is the #1 process failure and still uses judgment language for enforcement)

### C3. GATE SEQUENCE (Lines 529-560)

- **Intent:** Define 6 gates (0 through 5) with specific checks per gate. Kill criteria for abort conditions.
- **Actual outcome:** The gate structure is well-designed. However:
  - **Gate 0 (Pre-Build):** Content-to-void >= 60:40. This is a PRE-BUILD estimate, not a post-build measurement. Useful for catching obvious spatial problems early.
  - **Gate 1 (Post-Pass-1):** S-01, S-02, S-07, S-09, S-10, S-11, S-12, S-14. "Max 2 fix cycles." This is a STRONG gate -- IF ENFORCED. S-09 and S-12 failures in the final output suggest Gate 1 either was not run, was run on a skeleton that didn't have the inter-section gaps yet, or was run and the gaps were introduced AFTER Gate 1 by later passes.
  - **Gate 3 (Post-Pass-2):** Crown Jewel 8-Check (6/8 to pass). This is the RIGHT idea -- a composite quality check. But CCS was never measured, so items 1 and 3 of the 8-check were never verified.
  - **Gate 4 (Post-Pass-3):** "2 fresh-eyes agents. Metaphor structural >= 70% without labels." This gate SHOULD have caught the "announced not structural" metaphor problem. Either it was not run, or the fresh-eyes agents were too generous.
  - **Gate 5 (Final):** Mode 4 PA with 9 auditors. This is the full perceptual audit. Based on artifacts, it was not run during the experiment.
  - **KB-04 (execution prompt <= 200 lines):** FAILED. The prompt is 963 lines. This kill criterion was supposed to PREVENT the very problem we are analyzing.

- **Why it partially failed:** The gates are well-designed on paper. The problem is ENFORCEMENT. There is no mechanism to FORCE gate execution. The prompt defines gates but does not create TaskCreate items for each gate. A builder can proceed to Pass 2 without Gate 1 sign-off because nothing in the tooling prevents it. Gates are defined as prose obligations, not as workflow blockers.
- **Classification:** PARTIAL (excellent gate design; no enforcement mechanism; KB-04 violated by the prompt itself)

### C4. PA DEPLOYMENT (Lines 562-605)

- **Intent:** Define Mode 4 PA procedure: screenshot pre-capture, 9 auditor assignments, tier system, cold look protocol, auditor isolation rules, staged downgrade at 240 min.
- **Actual outcome:** This is the most detailed procedural section in the prompt. It covers every lesson learned from prior PA deployments. The screenshot pre-capture pattern, the auditor isolation rules, the CSS-language prohibition, the cold look 4-field format -- all are correct and would produce excellent audit results.
- **Why it partially failed:** This section is for GATE 5, which appears not to have been executed during the experiment. The 605 lines of PA specification are wasted if the PA never runs. This is the prompt's tragic irony: its most valuable section (PA deployment) is also the section with the least URGENCY because it comes at the end.
- **Classification:** WORKED (as a specification -- the PA deployment design is excellent; it was simply never used in this experiment)

### C5. GATE-THEN-RANKING PROTOCOL (Lines 607-635)

- **Intent:** Define how PA results are processed: binary gate first (any fail = DO NOT SHIP), then ranking for quality assessment.
- **Actual outcome:** Never invoked (no PA was run).
- **Classification:** WORKED (as a specification; untested)

### C6. PA-TO-TC FIX ROUTING (Lines 637-654)

- **Intent:** Map PA findings to TC phases for targeted fixes.
- **Actual outcome:** Never invoked.
- **Classification:** WORKED (as a specification; untested)

### C7. PERCEPTUAL AUDITING SKILL INVOCATION (Lines 656-720)

- **Intent:** Comprehensive PA skill invocation guide with all protocols, tier systems, void pipeline, and retrospective lessons.
- **Actual outcome:** 65 lines of PA invocation spec. Never invoked.
- **Classification:** WORKED (as specification; this is the single best-written section in the prompt)

---

## SECTION D: CONVICTION CLOSING (Lines 722-734, ~12 lines)

- **Intent:** Restate the mission ("beauty, not compliance"), reinforce soul-as-engine, introduce absence coherence principle, deliver "STOP ANALYZING. START BUILDING."
- **Actual outcome:**
  - "The mission is beauty, not compliance." -- The output achieved compliance, not beauty. The prompt's own conviction statement diagnoses the failure.
  - "ABSENCE COHERENCE: If you omit a higher-order element, omit ALL at that tier." -- This is a GOOD rule that was FOLLOWED. The page omits section-level borders and horizontal rules CONSISTENTLY. The problem is that these omissions create visual monotony, not elegant restraint.
  - "STOP ANALYZING. START BUILDING." -- This is placed AFTER 734 lines of analysis. The builder has already consumed 734 lines of rules before seeing this command. The irony is staggering. By this point, the builder's attention budget is exhausted. The closing conviction cannot compensate for 734 lines of rule-saturation.
- **Why it was counterproductive:** The conviction closing SHOULD have been the builder's primary instruction. Instead it comes after the builder has processed 97 rules, 30 parameters, and hundreds of lines of theory. The sandwich structure (conviction-execution-coordination-conviction) means the first conviction (A1-A8, 96 lines) sets the tone, but 638 lines of rules BETWEEN the convictions overwhelm the emotional framing. "STOP ANALYZING" after 734 lines of analysis is not conviction -- it is contradiction.
- **Classification:** COUNTERPRODUCTIVE (self-contradictory; placed too late to influence builder behavior)

---

## SECTION E: REFERENCE LIBRARY (Lines 736-782, ~46 lines)

- **Intent:** Route reading lists per agent role. Zero prompt cost -- agents only read their assigned files.
- **Actual outcome:** The routing is sensible. Builder reads tokens + prohibitions + build plan. Planner reads mechanism catalog + semantic rules. Metaphor Agent reads TC skill + crown jewels. This is a GOOD information architecture that prevents agents from drowning in irrelevant files.
- **Why it partially failed:** The routing works for FILE READING but not for RULE TRANSMISSION. The prompt specifies that builders receive "<= 75 lines of rules" but does not provide the pre-sliced 75-line extract. The team-lead must create it on the fly, which is error-prone.
- **Classification:** PARTIAL (good file routing; missing the pre-sliced builder extract)

---

## APPENDIX + ENRICHMENT TRACEABILITY + ANTI-SKIMMING (Lines 784-963, ~180 lines)

- **Intent:** Authoritative parameter table (30 parameters), enrichment traceability (11/11 traced), anti-skimming compliance (10/10 techniques), and integration log (39 entries).
- **Actual outcome:** The parameter table is THE most useful section for builders -- it collects all thresholds in one place with value, type, and source. The enrichment traceability is for team-lead audit purposes. The anti-skimming compliance list is meta-documentation. The integration log is a changelog.
- **Key observation:** The 180 lines of appendix material is REFERENCE, not EXECUTION. It should never have been in the prompt that agents read sequentially. It should have been a separate file linked from the prompt. These 180 lines consume 19% of the prompt's total length for information that is only useful during post-hoc audit.
- **Classification:** PARTIAL (useful reference material; wrong location -- should be a separate file)

---

## CROSS-CUTTING FINDINGS

### Finding 1: THE MAGNITUDE GAP

The single most devastating failure across the entire prompt: **no rule has a minimum perceptual magnitude threshold**.

- SC-09 says channels must "shift" at transitions -- but a 1 RGB point shift counts.
- MC-02 says reinforcing pairs must encode "same semantic" -- but sub-pixel differences count.
- C-01 says per-category mechanisms must be present -- but imperceptible mechanisms count.

The prompt defines WHAT must be present but never HOW MUCH of it must be perceivable. This is the root cause of the "14 mechanisms deployed, 2 perceptible" outcome.

**Recommended fix:** Every mechanism, channel, and interaction rule needs a perceptual magnitude floor. Example: "Chromatic channel shift >= 15 RGB points between adjacent zones" or "Border weight difference between zones >= 2px."

### Finding 2: THE STACKING LOOPHOLE

S-09 caps individual CSS properties at 96px. But multiple compliant properties STACK at section boundaries:
- Section N padding-bottom: 64px (compliant)
- Divider margin: 48px (compliant)
- Bridge prose bottom margin: 32px (compliant)
- Section N+1 padding-top: 64px (compliant)
- **Total gap: 208px (non-compliant, but no rule catches it)**

The prompt defines S-09 as "max spacing between any two content elements: 96px per-property. Total visual gap (margin-bottom + padding-top adjacent): <= 96px." The second sentence SHOULD catch the stacking, but the builder apparently interpreted "per-property" as the controlling clause and "total visual gap" as applying to a single pair of adjacent properties, not a full stack.

**Recommended fix:** S-09 needs to explicitly define "total visual gap" as the sum of ALL spacing between the last content pixel of section N and the first content pixel of section N+1, including all margins, paddings, and divider heights in between.

### Finding 3: THE PROSE-TO-GATE RATIO

The prompt contains:
- **~96 lines of conviction prose** (Section A: thesis, tensions, anti-scale, dual richness, compositional fluency, experiential laws, quality exemplar, reader journey)
- **~327 lines of execution rules** (Section B: spatial, soul, compositional, multi-coherence, scale-channel, metaphor, process, routing, self-check, content, recovery)
- **~217 lines of coordination spec** (Section C: roster, communication, gates, PA deployment, gate-then-ranking, fix routing, PA invocation)
- **~12 lines of closing conviction** (Section D)
- **~46 lines of reference library** (Section E)
- **~180 lines of appendix** (parameter table, enrichment trace, anti-skimming, integration log)

Total: 96 + 327 + 217 + 12 + 46 + 180 = 878 lines of specification, of which the builder needs ~75 lines.

**The prompt is 12x longer than the builder needs.** The other 888 lines are for the team-lead, planner, metaphor agent, PA auditors, and future reference. Mixing all audiences into one document guarantees that each agent drowns in irrelevant content.

### Finding 4: GATE ENFORCEMENT = ZERO

The prompt defines 6 gates with 40+ checks. Not a single gate has a BLOCKING MECHANISM in the tooling. Gates are prose descriptions of what SHOULD be checked, but there is no TaskCreate item for each gate check, no automated runner, no "must-pass-before-proceeding" enforcement. The result: gates are aspirational, not operational.

### Finding 5: DESCRIPTION-HEAVY, INSTRUCTION-LIGHT

Count by rule type:
- **PROHIBITIONS (what NOT to do):** ~35 rules (all U-rules, most S-rules, soul enforcement)
- **THRESHOLDS (minimum/maximum values):** ~30 rules (CPL, spacing, mechanism counts)
- **DESCRIPTIONS (explaining concepts):** ~20 rules (anti-scale model, compositional fluency theory, experiential laws)
- **POSITIVE INSTRUCTIONS (what TO DO, specifically):** ~12 rules (transition types with CSS values, CD-006 code example, content transformation rules)

The prompt is 3:1 prohibitions-to-instructions. A builder who follows EVERY prohibition perfectly still has no guidance on what to BUILD. The soul rules tell you what CSS NOT to use. The compositional rules tell you HOW MANY mechanisms to deploy. Nothing tells you WHICH CSS properties to vary, by HOW MUCH, or with WHAT visual effect.

### Finding 6: THE CONVICTION SANDWICH FAILS

The "conviction-execution-coordination-conviction" architecture (lines 7, 10-107, 108-435, 437-654, 722-734) is designed to bookend technical rules with emotional framing. In practice:
- First conviction (96 lines): sets tone well but gets overwhelmed by subsequent 638 lines.
- Execution spec (327 lines): the builder's actual rules, buried after 96 lines of philosophy.
- Coordination spec (217 lines): irrelevant to the builder, relevant to team-lead.
- Closing conviction (12 lines): too little, too late.

The builder reads: philosophy... philosophy... philosophy... RULES RULES RULES... more rules for other agents... "STOP ANALYZING. START BUILDING." They have attention fatigue before they reach their first actionable instruction.

### Finding 7: RULES CONTRADICT EACH OTHER

| Rule A | Rule B | Contradiction |
|--------|--------|---------------|
| A6: "LENGTH IS THE ENEMY OF QUALITY" | The prompt itself: 963 lines | Self-violation |
| KB-04: "execution prompt <= 200 lines" | The prompt: 963 lines | Kill criterion violated by prompt itself |
| C-13: ">= 2 silence zones (200px+)" | S-09: "max spacing 96px" | How do you create a 200px silence zone with a 96px spacing cap? |
| C-03: "<= 4 mechanisms OPERATING per viewport" | C-04: "every third of page has >= 2 mechanisms active" | Not contradictory but creates confusing double-bind on density |
| P-08: "VOID IS A CONTENT PROBLEM, NOT A CSS PROBLEM" | S-09: "max spacing 96px per-property" | S-09 treats void as a CSS problem; P-08 says it is not |
| MG-05: "spatial cost <= 15%" | C-13: ">= 2 silence zones 200px+" | Silence zones count toward spatial cost; 2x200px = 400px minimum which could exceed 15% for shorter pages |
| B10 atmosphere test: "describe page in ONE WORD" | B10 preceding 22 checkbox items | After 22 analytical checks, a gestalt gut-reaction is impossible |

### Finding 8: WHAT ACTUALLY WORKED AND WHY

The sections that produced excellent results share common traits:

| Section | Rules | Trait | Outcome |
|---------|-------|-------|---------|
| B2 Soul (U-01-U-10) | 10 | Specific CSS property + forbidden value, zero judgment | 10/10 PASS |
| B11 Content Transform (CT-01-CT-08) | 8 | Specific text property + forbidden pattern, zero judgment | 8/8 PASS |
| A8 Reader Journey | Descriptive | 5-act metaphor is memorable, easy to internalize | Rough structure followed |
| C4 PA Deployment | Procedural | Step-by-step protocol with specific numbers | Excellent spec (untested) |

**Pattern:** Rules that name a SPECIFIC THING and a SPECIFIC PROHIBITION or SPECIFIC VALUE achieve near-perfect compliance. Rules that describe CONCEPTS, THEORIES, or ASPIRATIONAL QUALITIES achieve near-zero compliance.

---

## SECTION-BY-SECTION VERDICT TABLE

| Section | Lines | Rules | Intent | Classification | Key Failure |
|---------|-------|-------|--------|---------------|-------------|
| A1 Thesis | 15-24 | 0 | Set emotional orientation | PARTIAL | "Unhurried" misinterpreted as "generous spacing" |
| A2 Tensions | 26-33 | 0 | IS/IS NOT boundaries | PARTIAL | "Restrained/not Empty" had no binary gate |
| A3 Anti-Scale | 35-45 | 0 | Prevent over-scaling | PARTIAL | Formula is unfalsifiable |
| A4 Dual Richness | 47-54 | 0 | Require both constraint + intelligence | PARTIAL | Source 2 invisible in perception |
| A5 Compositional Fluency | 56-69 | 0 | Define interaction types | FAILED | No magnitude thresholds |
| A6 Experiential Laws | 71-79 | 0 | Encode hard lessons | COUNTERPRODUCTIVE | Contains diagnosis of its own failure but as prose not gates |
| A7 Quality Exemplar | 81-95 | 0 | Show concrete CSS | PARTIAL | One snippet insufficient; missing structural context |
| A8 Reader Journey | 97-106 | 0 | Define scroll story | PARTIAL | Unfalsifiable texture recurrence rule |
| B1 Spatial | 114-150 | 17 | Prevent void + width errors | PARTIAL | S-09 stacking loophole, S-12 not enforced |
| B2 Soul | 152-166 | 10 | Identity enforcement | **WORKED** | N/A |
| B3 Compositional | 168-216 | 21 | Mechanism governance | PARTIAL | Presence without magnitude; unverifiable claims |
| B4 Multi-Coherence | 218-238 | 8 | Mechanism coupling | FAILED | CCS never computed; claims unverified |
| B5 Scale-Channel | 240-271 | 10 | Scale+channel matrix | FAILED | Magnitude blindness |
| B6 Metaphor Gates | 273-294 | 5 | Metaphor quality | FAILED | MG-04 structural test failed |
| B7 Process | 296-319 | 8 | Workflow enforcement | PARTIAL | P-08 re-check not run or not actioned |
| B8 TC Routing | 322-332 | 0 | Phase routing | PARTIAL | "Zero builder cost" claim is false |
| B9 PA Routing | 334-345 | 0 | PA question routing | WORKED | (Never used in experiment) |
| B10 Self-Check | 347-383 | 22 | Pre-write verification | PARTIAL | Stacking loophole; likely not fully executed |
| B11 Content Transform | 385-418 | 8 | Prose quality | **WORKED** | N/A |
| B12 Recovery | 420-435 | 4 | Failure protocols | PARTIAL | Never triggered (suggesting gates not enforced) |
| C1 Agent Roster | 441-496 | 0 | Team structure | PARTIAL | 75-line cap never operationalized |
| C2 Communication | 498-527 | 6 | Inter-agent messaging | FAILED | ~0% messaging compliance (historical) |
| C3 Gate Sequence | 529-560 | 0 | Gate definitions | PARTIAL | No enforcement mechanism |
| C4 PA Deployment | 562-605 | 0 | PA procedure | WORKED | (Never used) |
| C5 Gate-Then-Ranking | 607-635 | 0 | PA result processing | WORKED | (Never used) |
| C6 Fix Routing | 637-654 | 0 | PA-to-TC mapping | WORKED | (Never used) |
| C7 PA Invocation | 656-720 | 0 | Full PA guide | WORKED | (Never used) |
| D Conviction Close | 722-734 | 0 | Mission restatement | COUNTERPRODUCTIVE | Too late; contradicts own length |
| E Reference Library | 736-782 | 0 | File routing | PARTIAL | Missing pre-sliced builder extract |
| Appendix | 784-963 | 0 | Parameter reference | PARTIAL | Wrong location (should be separate file) |

**Totals:** 4 WORKED, 5 PARTIAL (acceptable), 10 PARTIAL (deficient), 5 FAILED, 2 COUNTERPRODUCTIVE

---

## THE FUNDAMENTAL DIAGNOSIS

The prompt is an **encyclopedia of lessons learned** that has been formatted as a **build specification**. It is optimized for COMPLETENESS (every lesson from every prior experiment is included) rather than for EFFICACY (producing a good HTML page).

The 4 sections that WORKED (Soul, Content Transform, PA Deployment, PA Routing) share a common DNA:
1. They name **specific, concrete things** (CSS properties, text patterns, procedure steps)
2. They give **specific, concrete values** (border-radius: 0, no hedging phrases, 50-80 screenshots)
3. They require **zero judgment** (the builder can mechanically verify each one)
4. They are **short** (10 rules, 8 rules, 12 lines, 12 lines)

The 5 sections that FAILED share a different DNA:
1. They describe **abstract concepts** (compositional fluency, multi-coherence, scale-channel coverage)
2. They check for **presence without magnitude** (channel must "shift" but by how much?)
3. They require **judgment** (is this reinforcing pair "real"? is this metaphor "structural"?)
4. They are **long** (18-21 rules with extensive context prose)

**The prompt needs to be split into two documents:**
1. **Builder Execution Spec** (~75 lines): Soul rules + spatial rules with stacking fix + specific CSS recipes for each mechanism + transition CSS patterns + content rules. ZERO theory. ZERO conviction. ZERO coordination.
2. **Team-Lead Orchestration Guide** (unlimited): Everything else -- conviction, theory, gate definitions, PA deployment, coordination, reference library, parameter table, traceability.

The builder should never see the orchestration guide. The team-lead should never burden the builder with theory. The current monolithic document forces every agent to wade through content designed for other agents, exhausting attention budgets before actionable instructions are reached.

---

**END OF FORENSIC ANALYSIS**

**Files read:**
- FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines, read in full)
- 00-AUDIT-DATA.md (109 lines, read in full)
- 07-intentionality.html (2,034 lines, read in full)
- 9 screenshots examined

**Key artifacts cited:**
- S-09 stacking loophole (Finding 2)
- Magnitude gap (Finding 1)
- Prose-to-gate ratio 3:1 prohibitions vs instructions (Finding 5)
- 7 rule contradictions identified (Finding 7)
- 963-line prompt vs 75-line builder cap vs 200-line kill criterion (Finding 3, Finding 7)

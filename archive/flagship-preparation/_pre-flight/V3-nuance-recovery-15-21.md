# V3 Nuance Recovery: Files 15-21

**Checker:** nuance-checker-3
**Date:** 2026-02-16
**Method:** Section-by-section comparison of original files against extraction outputs
**Files checked:**
- File 15 -> 05-extraction-composition-intent.md (File 15 section)
- Files 16, 17, 18 -> 06-extraction-pipeline-synthesis.md
- Files 19, 20, 21 -> 07-extraction-theory-future.md

---

## FILE 15: 15-perceptual-hierarchy.md (609 lines)
### Extraction: 05-extraction-composition-intent.md (File 15 section, lines 512-828)

### MISSED NUANCES

#### N15-01: Contrast Cascade Perceptual Theory (SIGNIFICANT)
- **Source:** Lines 44 (original)
- **What's missing:** The extraction captures the design specs for the orientation box but MISSES the explicit perceptual theory: "This is a contrast cascade: maximum contrast (dark/light) --> chromatic contrast (blue on cream) --> reading contrast (dark text on light). Each step is lower energy than the previous, easing the eye into reading mode." This is not just a design spec -- it's the THEORY behind why the eye path works. The cascade concept (decreasing energy steps) should inform any builder trying to replicate the effect.
- **Impact:** MODERATE. A builder following specs alone would get the right elements but might not understand WHY they're ordered this way or how to adapt if content changes.

#### N15-02: Specific Texture Promise Rule (MINOR)
- **Source:** Lines 61 (original)
- **What's missing:** "Every texture promise made in the first 2-3 seconds MUST be honored throughout the scroll. If the opening shows table + callout + transition, the full page must deliver MORE of each, not less." The extraction captures the 3-texture requirement but misses this BIDIRECTIONAL rule -- the opening textures create OBLIGATIONS for the rest of the page. The word "promise" and the idea of texture-as-commitment is lost.
- **Impact:** MINOR. The during-build checklist partially covers this, but the framing as a "promise" that creates scroll-long obligations is a useful conceptual hook.

#### N15-03: Specific Mechanisms Per Act (SIGNIFICANT)
- **Source:** Lines 96-101, 117-121, 140-145, 160-165, 183-187 (original)
- **What's missing:** The extraction captures Act-level emotional targets and visual characteristics but does NOT extract the specific mechanism deployment recommendations per act. For example:
  - Act 1: "2-zone DNA on orientation callout," "Border-weight gradient beginning (4px borders signal important)," "Zone background at --color-zone-sparse"
  - Act 2: "Background zone alternation (sparse cream -> dense white -> breathing zone)," "First code block appearance (dark background creates HIGH contrast moment)," "Callout variety (at least 2 different callout colors: blue info + green tip)"
  - Act 3: "Full-width dark inset or diagram," "Increased density," "Potential grid/bento layout," "Monospace labels and technical detail"
  - Act 4: "Spacing compression: CRESCENDO pattern -- 64px -> 48px -> 32px," "Higher callout frequency (1 callout per 2-3 paragraphs)," "Code blocks with syntax highlighting," "Tables with technical data"
  - Act 5: "Essence callout (amber/purple, serif italic)," "Spacing EXPANSION (return to 48-64px)"
  These are concrete mechanism-to-act mappings that the builder needs.
- **Impact:** SIGNIFICANT. Without act-specific mechanism guidance, the builder has the structure but not the content of each act.

#### N15-04: Specific Scroll Speed Targets Per Act (MINOR)
- **Source:** Lines 95, 114, 139, 158, 181 (original)
- **What's missing:** Each act has an explicit scroll speed target: Act 1 "SLOW," Act 2 "MEDIUM," Act 3 "STOP" (this is a pause point), Act 4 "SLOW (by choice)," Act 5 "completing, scanning." The extraction mentions "scroll speeds" in the summary but doesn't extract these specific per-act designations.
- **Impact:** MINOR. Scroll speed is implicit in the emotional targets, but the explicit designation helps a builder think about information density per viewport.

#### N15-05: Specific Weight Contributors (Numeric) (MODERATE)
- **Source:** Lines 227-231, 253-257, 283-287 (original)
- **What's missing:** The extraction captures the weight targets (7/10, 4/10, 9/10 etc.) but misses the DECOMPOSITION into specific contributors. For example, Peak 1 decomposes as: "Dark header background = 3 weight units, Blue accent callout = 1.5, First content block = 1.5, Generous white space = -1, Section labels = 1." These decompositions are concrete design guidance -- a builder can add up their weight contributions and verify they hit the target.
- **Impact:** MODERATE. The decompositions make the weight targets actionable instead of abstract.

#### N15-06: Valley 2 Is HIGHER Than Valley 1 (Stated Rule) (MINOR)
- **Source:** Lines 265-268 (original)
- **What's missing:** "This valley is HIGHER than Valley 1 because the reader is now invested. More content per viewport is appropriate." The extraction captures Valley 2's weight (5-6/10) but doesn't flag the explicit comparison/justification: Valley 2 > Valley 1 because reader investment has increased. This is a design principle, not just a number.
- **Impact:** MINOR.

#### N15-07: Anti-Metronome Specific Intervals (MODERATE)
- **Source:** Lines 348-358 (original)
- **What's missing:** The extraction captures the anti-metronome principle ("vary interval") but MISSES the specific example sequence with EXACT percentages:
  - Cream 10% -> White 15% -> Cream 5% (shorter!) -> DARK 15% (climax) -> Cream 5% -> White 20% (longer!) -> Cream 5% -> White 10% -> DARK 15% (footer)
  This is a CONCRETE example of irregular rhythm that a builder could use as a template. The parenthetical annotations (shorter!, longer!) explain the rhythm variation.
- **Impact:** MODERATE. The principle is captured but the actionable example is lost.

#### N15-08: Pause Point Distribution Is NOT Evenly Spaced (Reasoning) (MINOR)
- **Source:** Lines 423 (original)
- **What's missing:** "Pause points are NOT evenly spaced. They cluster more densely at the beginning (PP1 and PP2 are only 10% apart) and toward the end (PP4 and PP5 are 15% apart), with a large gap in the middle where the viewer is in 'reading mode' between PP2 and PP3 (32% gap). This mirrors how a reader behaves: frequent pausing while orienting, sustained reading in the middle, then pausing again as conclusions approach." The extraction captures the positions but not the reasoning for the clustering pattern.
- **Impact:** MINOR. The positions are captured; the reasoning provides context for adaptation.

#### N15-09: CD-006 Max-Width 1100px (Not 960px) (NOTABLE DETAIL)
- **Source:** Line 444 (original)
- **What's missing:** The extraction mentions CD-006 used "full-width elements" but doesn't note that CD-006 used `max-width: 1100px` NOT 960px. This is explicitly stated: "What CD-006 got right: max-width: 1100px container with full-width tables..." Since the flagship mandates 960px (identity constraint), this discrepancy between CD-006 reference and flagship constraint is worth noting. The extraction should flag that CD-006's spatial success was partially due to a WIDER container than what flagship allows.
- **Impact:** MINOR but notable. Builders should know that CD-006's proportional success came from a wider container.

#### N15-10: Anti-Pattern 5 Design Order (1440px FIRST) (MINOR)
- **Source:** Lines 500-501 (original)
- **What's missing:** "Design at 1440px FIRST, then adapt to 768px. Not the reverse." The extraction captures the viewport amnesia prevention but doesn't emphasize the DESIGN ORDER (desktop first). This is a process instruction, not just a verification check.
- **Impact:** MINOR. Captured as "design at 1440px FIRST" in A15-10 but buried in the action rather than highlighted as a directive.

#### N15-11: Gap Table (DD-006/CD-006 vs Ceiling) (MINOR)
- **Source:** Lines 595-603 (original)
- **What's missing:** The 7-row comparison table showing specific dimensional gaps between crown jewels and ceiling experiment (visual peaks, content-to-scroll ratio, section variety, footer, callout variety, transitions, container utilization) is not extracted as its own item. The extraction captures the crown jewel cross-references but not this specific diagnostic table.
- **Impact:** MINOR. Individual items are covered by the quantified targets table and anti-patterns.

#### N15-12: Act 4 Density Rule (MODERATE)
- **Source:** Lines 167 (original)
- **What's missing:** "Act 4 must have MORE content per viewport than Act 2. If Act 2 averaged 60% content density, Act 4 should average 75-80%." This specific COMPARISON between acts (4 > 2 in density) with approximate percentages is not extracted. It's a concrete guidance for the builder to verify relative density between acts.
- **Impact:** MODERATE. Without this, a builder might make Act 4 the same density as Act 2.

---

## FILE 16: 16-cross-experiment-analysis.md (467 lines)
### Extraction: 06-extraction-pipeline-synthesis.md (File 1 section, lines 14-139)

### MISSED NUANCES

#### N16-01: Quality Prediction Model Formula (MODERATE)
- **Source:** Lines 97-104 (original)
- **What's missing:** The explicit quality prediction model is partially captured but the FORMULATION is not complete:
  ```
  Quality = f(spatial_confidence, iteration_count, content_mechanism_fit, constraint_compliance)
  ```
  With the role definitions:
  - Spatial confidence sets the CEILING
  - Iteration count enables DISCOVERY
  - Content-mechanism fit determines COHERENCE
  - Constraint compliance sets the FLOOR
  - "Mechanism count is NOT a factor. Communication enables iteration, which IS a factor."
  The extraction captures the hypotheses but not this synthesis into a single model with role definitions.
- **Impact:** MODERATE. The model provides a compact way to reason about quality drivers.

#### N16-02: Richness Hierarchy (Three Levels) (MINOR)
- **Source:** Lines 139-142 (original)
- **What's missing:** The extraction captures richness predictors but not the explicit 3-level hierarchy:
  1. Vocabulary generation (creating new terms from metaphor): Ceiling, DD-006, CD-006
  2. Vocabulary fluency (deploying many existing mechanisms): Middle
  3. Vocabulary presence (using some mechanisms competently): Phase D
  This is a concise taxonomy of richness types.
- **Impact:** MINOR.

#### N16-03: Perceived Richness Formula (MODERATE)
- **Source:** Lines 133 (original)
- **What's missing:** "Perceived richness = f(mechanism_count * perceivability)." Mechanisms present in CSS but invisible due to spatial composition failures contribute ZERO to perceived richness. This formula is NOT captured. It's a crucial insight: richness is multiplicative (count x perceivability), not additive (count).
- **Impact:** MODERATE. This directly informs the restraint principle -- mechanisms that aren't perceivable don't count.

#### N16-04: Frontier Equation Parameters (MINOR)
- **Source:** Lines 174-183 (original)
- **What's missing:** The frontier equation `Quality-Richness Frontier = f(iteration, judgment, discovery_time)` is mentioned, but the specific NEGATIVE findings are not extracted as a group:
  - NOT determined by: prompt quality (1,004 lines), mechanism count (DD-006 achieves crown with 6), metaphor sophistication (ceiling had sophisticated metaphor but failed), agent count (ceiling 12 vs middle 8), constraint count (ceiling 12 success criteria vs middle fewer).
  These negatives are as important as the positives.
- **Impact:** MINOR. Some are captured individually but the coherent list of "NOT factors" is lost.

#### N16-05: n=4 Epistemic Limitations -- Specific Falsification Criteria (SIGNIFICANT)
- **Source:** Lines 318-345 (original)
- **What's missing:** The extraction captures the hypotheses and verdicts but MISSES the detailed falsification criteria for the flagship experiment. These are specific observational tests:
  - "If quality does NOT improve with iteration, H3 is weakened"
  - "If PA-05c still fails despite void budget, spatial confidence prediction needs refinement"
  - "If void is under 30% but page still feels 'empty,' the gate's threshold needs recalibration"
  - "If phased execution produces similar PA-05c failure, attention budget is not the root cause"
  - "If fix passes fail (like ceiling's CSS-only fix), agents cannot effectively self-critique"
  These are SPECIFIC observational tests to run during/after flagship. They turn the flagship from an experiment into a hypothesis test.
- **Impact:** SIGNIFICANT. These guide what to LOOK FOR during flagship, not just what to BUILD.

#### N16-06: Ceiling Experiment Unique Finding -- Plans Produce Catastrophic Aggregate Effects (MODERATE)
- **Source:** Lines 225-226 (original)
- **What's missing:** "Each zone padding (64px, 48px, 32px) was reasonable in isolation. Each checkpoint transition (48-80px) was reasonable in isolation. Their AGGREGATE effect was catastrophic (1,500-2,000px of transition whitespace alone)." The extraction captures the spatial failure generally but this specific finding about INDIVIDUALLY reasonable specs producing AGGREGATE catastrophe is a key insight for the planner. The specific number (1,500-2,000px of transition whitespace) is not captured.
- **Impact:** MODERATE. This is the root cause that the spatial budget gate addresses. The specific aggregation arithmetic is useful.

#### N16-07: Methodological Limitations Section (MODERATE)
- **Source:** Lines 425-448 (original)
- **What's missing:** The entire Section 10 (Methodological Notes) documenting 5 specific comparability limitations is not extracted:
  1. Different evaluation frameworks (19-point vs PA-05 vs Mode 4)
  2. Different content (SYSTEM prose vs remote Mac vs fractal teaching)
  3. Different prompt architectures (5 variants vs sliced vs 1,004-line)
  4. Different audit depths (compliance scoring vs Mode 2 vs Mode 4)
  5. Different evaluators (no inter-rater reliability testing)
  And the conclusion: "Our conclusions are PATTERN OBSERVATIONS from non-controlled quasi-experiments, not CAUSAL FINDINGS from controlled experiments."
- **Impact:** MODERATE. This epistemic humility should inform how confidently the flagship prompt asserts its design principles.

#### N16-08: Tier Model Time Estimates "Wildly Incorrect" (MINOR)
- **Source:** Line 170 (original)
- **What's missing:** The parenthetical note that tier model time estimates are "already shown to be wildly incorrect -- Middle took 35 min vs 70-100 min predicted" is not captured. This is a specific data point that questions the reliability of time estimates throughout the pipeline design.
- **Impact:** MINOR. Relevant to the 320-min estimate for flagship.

#### N16-09: Raw Data Compilation Table (MINOR)
- **Source:** Lines 375-392 (original)
- **What's missing:** The full 5-experiment comparison table with 19 dimensions is not extracted. While individual data points appear throughout, the single comprehensive table is a useful reference artifact.
- **Impact:** MINOR. Data is captured elsewhere but the consolidated view is useful.

---

## FILE 17: 17-no-compromise-pipeline.md (806 lines)
### Extraction: 06-extraction-pipeline-synthesis.md (File 2 section, lines 141-418)

### MISSED NUANCES

#### N17-01: Why 5 Passes Not 3 -- Specific Failure Mode Reasoning (MODERATE)
- **Source:** Lines 51-55 (original)
- **What's missing:** The extraction captures the 5-pass recommendation but not the SPECIFIC reasoning for each decomposition:
  - Content Architecture from Skeleton Build: "The content architecture is a THINKING task. The skeleton build is a BUILDING task. The ceiling experiment combined both and the builder never calculated the spatial budget."
  - Mechanism Deployment from Metaphor Integration: "Mechanisms can be deployed as CSS techniques first, then metaphor vocabulary layered on top. The ceiling tried both simultaneously and produced mechanisms that existed in CSS but were invisible under metaphor vocabulary labels."
  This reasoning is the JUSTIFICATION for the architectural split and helps the team-lead understand WHY the passes are separated.
- **Impact:** MODERATE. The what is captured but the why is lost.

#### N17-02: Competitive Build Selection Criteria (4 specific criteria) (MINOR)
- **Source:** Lines 179-187 (original)
- **What's missing:** The extraction mentions "selection criteria" but doesn't enumerate all 4:
  1. Spatial Confidence Gate (both must pass)
  2. Squint Test Comparison (which has better visual mass distribution at 25% zoom)
  3. Content-Container Fit (which makes content feel most natural)
  4. Mechanism Receptivity (which provides better "hooks" for mechanism deployment)
  Criteria 3 and 4 are particularly novel -- they assess FUTURE-PASS compatibility, not just current quality.
- **Impact:** MINOR. The concept is captured; specific criteria provide operational detail.

#### N17-03: Competitive Build Probability Calculation (MINOR)
- **Source:** Lines 199 (original)
- **What's missing:** The extraction captures "P(good skeleton) goes from 70% to 91%" but the formula `P(at least one good) = 1 - (0.3)^2 = 91%` is captured. However, the implicit assumption (70% base probability) is stated as an ASSUMPTION, not a measured value. This matters for calibration.
- **Impact:** MINOR. The 70% is an estimate, not empirical.

#### N17-04: Competitive Intentionality Layer Verdict (NOT WORTH IT) -- Reasoning (MINOR)
- **Source:** Lines 215-219 (original)
- **What's missing:** The extraction captures "NOT WORTH IT" but not the reasoning: "Intentionality is the lowest-risk pass (HTML content addition, not CSS complexity). The probability of failure is already ~90% success. Doubling the investment at a 90% success rate yields 99% -- a marginal improvement for a significant cost." This is a good example of cost-benefit reasoning that could apply to other competitive build decisions.
- **Impact:** MINOR.

#### N17-05: Iteration 1 Must Be FULL REBUILD Not CSS Patch (Already Captured) (N/A)
- Confirmed as captured in ACT-17-10.

#### N17-06: CD-006 Actual Pipeline -- 24 Explorations, 2,500 Minutes (MODERATE)
- **Source:** Lines 368-392 (original)
- **What's missing:** While XREF-17-12 references this, the extraction does not capture the STRUCTURED breakdown:
  - Phase A (DD-001 to DD-006): 6 explorations, 18 findings, ~900 minutes
  - Phase B (OD-001 to OD-006): 6 explorations, 17 findings, ~600 minutes
  - Phase C (AD-001 to AD-006): 6 explorations, 28 findings, ~500 minutes
  - Phase D (CD-001 to CD-006): 6 explorations, 25 findings, ~500 minutes
  - TOTAL: ~2,500 minutes (41.7 hours), 88 accumulated findings
  The specific finding counts per phase (18, 17, 28, 25 = 88 total) and the phase durations are useful for understanding the scale of iteration that produced the crown jewels.
- **Impact:** MODERATE. These numbers contextualize the "60% of CD-006's constraint richness" estimate.

#### N17-07: Crown Jewel Simulation -- "80% of the Effect" Estimate (MINOR)
- **Source:** Lines 398-437 (original)
- **What's missing:** The specific estimate that the simulation achieves "approximately 60% of CD-006's constraint richness" with the other 40% requiring actual iterative discovery (24 explorations). The overall quality ceiling estimate: "90-95% of CD-006, achieved in ~6 hours instead of ~42 hours." These specific percentages are not captured.
- **Impact:** MINOR. Sets expectations for what the flagship pipeline CAN and CANNOT achieve.

#### N17-08: Calibration Run -- Different Content REQUIRED (IMPORTANT CONSTRAINT)
- **Source:** Lines 466 (original)
- **What's missing:** "If the calibration uses the same content as the flagship, it contaminates the flagship's freshness (agents have continuation bias from the calibration)." The extraction captures "DIFFERENT content from flagship" but doesn't explain WHY -- continuation bias contamination. This is a critical process constraint.
- **Impact:** MINOR. The instruction is captured; the reasoning is missing.

#### N17-09: Decision Matrix (If You Have X, Use Y) (MINOR)
- **Source:** Lines 674-682 (original)
- **What's missing:** The 5-row decision matrix mapping budget level to pipeline variant:
  - Unlimited: Maximum (30 agents, 380 min, 65-75% Full)
  - Large: Recommended (22 agents, 320 min, 55-65% Full, 85-90% MVF)
  - Moderate: Flagship architecture (13 agents, 200-280 min, 49-75% better-than-Ceiling)
  - Budget-conscious: "Ceiling + iterate twice" (10 agents, 235 min, 70-80% strong Ceiling)
  - Minimum: Middle tier (8 agents, 70 min, 85% PA-05 4/4)
  This is a practical reference for the team-lead's budget decision.
- **Impact:** MINOR. Provides a useful reference but doesn't affect flagship execution directly.

#### N17-10: Each Pass Receives ALL Previous Outputs (Handoff Degradation Prevention) (MODERATE)
- **Source:** Lines 789 (original, Risk R4)
- **What's missing:** "Each pass receives ALL previous pass outputs (not just the immediate predecessor). The intentionality builder sees the content architecture, skeleton, mechanism plan, AND metaphor derivation." This is captured in the risk mitigations table but should be a PROCESS RULE, not just a risk mitigation. It prevents the "telephone game" effect across 5 passes.
- **Impact:** MODERATE. Critical for maintaining coherence across the 5-pass pipeline.

---

## FILE 18: 18-UNIFIED-ACTION-PLAN.md (555 lines)
### Extraction: 06-extraction-pipeline-synthesis.md (File 3 section, lines 422-884)

### MISSED NUANCES

#### N18-01: Specific Kill Criteria Differences (SP-02 vs Void Budget) (MINOR)
- **Source:** Lines 507 (original)
- **What's missing:** SP-02 (Max void) threshold is `<= 1620px` in the kill criteria table, but the Spatial Confidence Gate SC-02 threshold is `<= 1.5 viewport heights (2,160px)`. These are DIFFERENT thresholds for the same concept (max contiguous void). The kill criterion (1620px) is STRICTER than the gate check (2,160px). The extraction captures both but doesn't flag the DISCREPANCY.
- **Impact:** MINOR but worth noting. The two thresholds should be reconciled or the distinction explained.

#### N18-02: Theme 3 -- Specific Attention Budget Arithmetic (MINOR)
- **Source:** Lines 426 (original)
- **What's missing:** "A 56-rule prompt with 26 judgment rules consumes ~152 attention units" -- this specific calculation from the attention theory is included in Theme 3 of the original but not captured in the extraction's rendering of Theme 3.
- **Impact:** MINOR. The principle is captured; the specific arithmetic adds concreteness.

#### N18-03: Beauty Definition (Specific Wording) (MINOR)
- **Source:** Lines 450 (original)
- **What's missing:** The FULL beauty definition: "the feeling of encountering a page that is warm without being soft, austere without being cold, authoritative without being aggressive, and restrained without being empty. The Ceiling page fell off 'restrained/not-empty.' The Middle page walked all four tightropes at low height. The crown jewels walk all four at height." The extraction captures "Beauty = Confident Intention at Every Scale" but not the 4-tightrope framing with specific experiment mapping.
- **Impact:** MINOR. The tightrope framing is evocative and useful for the conviction layer.

#### N18-04: Content-Form Fit VETO POWER Reasoning (MINOR)
- **Source:** Lines 454 (original)
- **What's missing:** The specific reasoning: "The ceiling experiment chose 'Secure Facility' for semantic alignment (security content -> security metaphor). The content naturally divided into 5 sections with peak density in the MIDDLE, but the metaphor demanded escalating density toward the END. The mismatch produced the void." The extraction captures the principle but not the diagnostic narrative that makes it visceral.
- **Impact:** MINOR.

#### N18-05: Execution Prompt Outline -- Section 0.5 Quality Exemplar (MODERATE)
- **Source:** Lines 242-245 (original)
- **What's missing:** The extraction captures the Layer 1 outline but doesn't fully detail Section 0.5 (Quality Exemplar): "20 lines from CD-006 showing one designed transition zone. 20 lines from DD-006 showing fractal coherence at 2 scales. 'This is what felt through looks like. Not the specific patterns -- the QUALITY.'" This is a concrete, novel section type (code examples AS conviction) that should be specifically noted.
- **Impact:** MODERATE. The quality exemplar is a new prompt architecture idea -- showing code examples for FEEL, not for copying.

#### N18-06: Time-Based Kill Criterion Detail (Staged Downgrade) (MODERATE)
- **Source:** Lines 487-491 (original)
- **What's missing:** The staged downgrade based on WHERE the pipeline is when time expires:
  - At 240 min, Pass 2 complete but Pass 3 not started -> Ship as CEILING-PLUS
  - At 240 min, Pass 1 complete but Pass 2 not started -> Ship as CEILING-MINUS
  - At 240 min, Pass 1 still failing gates -> ABORT, document as attempt failure
  The extraction captures TK-01 (240 min hard stop) but not these stage-specific downgrade paths. These are crucial for the team-lead's real-time decision-making.
- **Impact:** MODERATE. Without these, the team-lead must improvise at the 240-min mark.

---

## FILE 19: 19-constraint-pressure-hypothesis.md (720 lines)
### Extraction: 07-extraction-theory-future.md (File 1 section, lines 12-221)

### MISSED NUANCES

#### N19-01: Shannon's Channel Capacity Analogy (Formal Information Theory) (MODERATE)
- **Source:** Lines 66-80 (original)
- **What's missing:** The formal analogy to Shannon's channel capacity theorem is not captured. The extraction captures the general concept of constraint pressure but not the information-theoretic formalization:
  - Bandwidth (B) = number of distinct CSS values a channel can take (border-weight has ~4, spacing has ~14, color has ~8)
  - Signal-to-noise ratio (S/N) = viewer's ability to distinguish meaningful variation from noise
  - When 6 channels close, S/N increases per remaining channel because less competition
  - "This is why a 1px vs 4px border in KortAI carries more perceptual meaning than the same distinction in Material Design"
  The specific mechanism (S/N increase per channel under constraint) is the theoretical core.
- **Impact:** MODERATE. The theory is what makes the hypothesis predictive rather than just descriptive.

#### N19-02: Compression Analogy (Lossy Audio) (MINOR)
- **Source:** Lines 83-93 (original)
- **What's missing:** The lossy audio compression analogy is not captured:
  - Masking threshold: shadows/gradients provide "easy" depth cues that MASK subtle cues
  - Surviving channels are UNMASKED: without shadow depth, border-weight becomes PRIMARY
  - "Just as audiophiles describe well-mastered compression as 'warm' and 'detailed'... viewers describe KortAI pages as 'rich' and 'intentional'"
  This analogy is useful for explaining WHY constraint creates richness.
- **Impact:** MINOR. Useful for intuition but not directly actionable.

#### N19-03: Concrete DD-006 Border-Weight Encoding Table (MODERATE)
- **Source:** Lines 98-112 (original)
- **What's missing:** The specific DD-006 border-weight encoding table showing how one channel encodes 7 different semantic levels (Page frame 3px, Scale demo 2px, Callout 4px, Component 4px, Fractal 3px, Code block none, Divider 1px). This concrete example demonstrates the theory in action. The extraction references DD-006 but doesn't capture this specific table.
- **Impact:** MODERATE. This is the best concrete example of semantic density per channel.

#### N19-04: Constraint Ratio Calculation (51.3% Lower Bound) (MODERATE)
- **Source:** Lines 183-185 (original)
- **What's missing:** While the extraction mentions "~55-65%" constraint pressure, it doesn't capture the specific CALCULATION: ~400 eliminated values / ~780 total = 51.3% (lower bound), with conditional prohibitions bringing the effective ratio to ~55-65%. The distinction between the calculated lower bound and the effective range is useful.
- **Impact:** MINOR.

#### N19-05: Comparative Constraint Ratios Table (6 Systems) (MODERATE)
- **Source:** Lines 189-197 (original)
- **What's missing:** The 6-system comparison table is not captured:
  - Tailwind CSS: ~5%, very low pressure, "versatile but generic"
  - Material Design 3: ~20-25%, low, "recognizable but conventional"
  - Apple HIG: ~30-35%, moderate, "distinctive but flexible"
  - IBM Carbon: ~35-40%, moderate-high, "corporate-precise"
  - KortAI Soul: ~55-65%, high, "rich, intentional, editorial"
  - Brutalist/Swiss: ~70-80%, very high, "austere, sometimes paralyzed"
  This positions KortAI relative to other systems and establishes the "sweet spot" claim.
- **Impact:** MODERATE. Useful context for understanding where KortAI sits on the constraint curve.

#### N19-06: Channel Loading Stability Finding (SIGNIFICANT)
- **Source:** Lines 228-229 (original)
- **What's missing:** The extraction has a binary check (B19-01) referencing line 228-229 but doesn't capture the FINDING itself: "The channel distribution is remarkably consistent between DD-006 and CD-006 despite DD-006 being a concept demonstration and CD-006 being a full pilot migration. Spacing is the dominant channel in both (~23%), followed by typography (~19%) and background/color (~16%). This suggests a STABLE EQUILIBRIUM of channel loading under constraint pressure." The stability finding implies that the design system naturally converges to this distribution -- it's not accidental.
- **Impact:** MODERATE. Validates that the channel distribution is inherent to the constraint system, not page-specific.

#### N19-07: Scale-Attention Matrix (Detailed Table) (SIGNIFICANT)
- **Source:** Lines 278-286 (original)
- **What's missing:** The 6-row scale-attention matrix showing attention consumed and predicted quality at each scale count:
  - 1 scale: ~10% consumed, ~90% remaining, 4/4 (excellent, probably boring)
  - 2 scales: ~20% consumed, ~80% remaining, 4/4 (excellent, spatial confidence intact)
  - 3 scales: ~35% consumed, ~65% remaining, 3-4/4 (good, some tension)
  - 4 scales: ~55% consumed, ~45% remaining, 1.5-3/4 (risky, cliff edge)
  - 5 scales: ~75% consumed, ~25% remaining, 0.5-2/4 (likely failure)
  - 6 scales: ~90% consumed, ~10% remaining, 0-1/4 (catastrophic)
  And the key insight: "The attention consumption per scale is NOT linear. It accelerates because higher scales create COMBINATORIAL interactions."
- **Impact:** SIGNIFICANT. This table directly informs the per-pass scale allocation in the 3-pass architecture.

#### N19-08: Counter-Intuitive Prediction (Explicit Statement) (MODERATE)
- **Source:** Lines 307-325 (original)
- **What's missing:** The explicitly labeled "counter-intuitive prediction": "If constraint pressure reduces M (attention per scale), then INCREASING constraint pressure enables MORE scales without quality collapse." And the specific KortAI vs Material Design comparison:
  - KortAI builder at 4 scales: ~55% attention consumed (risky but achievable)
  - Material Design builder at 4 scales: ~70% attention consumed (likely failure)
  The extraction captures the general recommendation but not this specific comparative prediction.
- **Impact:** MODERATE. This is the constraint pressure hypothesis's most provocative claim.

#### N19-09: Inflection Point Analysis (KortAI Is CLOSE to Edge) (SIGNIFICANT)
- **Source:** Lines 540-548 (original)
- **What's missing:** The analysis that KortAI is CLOSE to the inflection point is not captured:
  - Documentation needs ~5 channels minimum (to distinguish 5-7 semantic types)
  - Current KortAI has ~6 surviving channels
  - Margin: 1 channel (~17% overhead)
  - "KortAI is CLOSE to the inflection point. Adding 2-3 more absolute prohibitions (closing 1-2 more channels) would push the system to the edge."
  This is WHY the proposed additional constraints are VALUE RESTRICTIONS (narrowing existing channels) rather than CHANNEL CLOSURES. The extraction captures B19-03 (minimum 5 channels) but not the proximity analysis.
- **Impact:** SIGNIFICANT. This constrains what KIND of additional prohibitions are safe.

#### N19-10: Type of Constraint Matters (4 Types with Effects) (MODERATE)
- **Source:** Lines 554-559 (original)
- **What's missing:** The 4-type taxonomy of constraints with differential effects:
  - Channel closure (HIGH pressure, HIGH richness): box-shadow: none
  - Value restriction (MODERATE pressure, MODERATE richness): "Only 6 spacing anchors"
  - Contextual prohibition (LOW pressure, LOW-MODERATE richness): "No same-density stacking"
  - Process constraint (ZERO pressure, INDIRECT richness): "No pattern without tension"
  And the recommendation: "For flagship: value restrictions are the safest way to increase pressure without risking paralysis."
- **Impact:** MODERATE. This taxonomy directly informs how to design the additional prohibitions.

#### N19-11: Thought Experiment -- Crown Jewels Without Anti-Physical Prohibitions (MINOR)
- **Source:** Lines 694-709 (original, Appendix C)
- **What's missing:** The thought experiment showing what DD-006 and CD-006 would lose if shadows/gradients/transparency were allowed. DD-006: 2 of 3 primary channels become redundant, semantic density drops ~60%. CD-006: would score ~30/40 instead of 39/40. This confirms the hypothesis from the opposite direction.
- **Impact:** MINOR. Confirmatory rather than actionable.

---

## FILE 20: 20-attention-bandwidth-theory.md (674 lines)
### Extraction: 07-extraction-theory-future.md (File 2 section, lines 224-533)

### MISSED NUANCES

#### N20-01: Mechanism Attention -- 42% of Total Budget (CRITICAL NUMBER)
- **Source:** Lines 129-131 (original)
- **What's missing:** The extraction captures the key numbers in the "KEY NUMBERS" section (line 528-529) but the IMPLICATION is not fully drawn out in the action items: "Mechanism deployment alone consumed ~42% of the total budget. This left ~47 units for everything else: understanding the content (~10 units), implementing the metaphor's spatial structure (~15 units), handling transitions (~8 units), and producing emergent spatial quality (~0 units remaining)." The BREAKDOWN of remaining attention into specific tasks is not captured.
- **Impact:** MINOR (numbers captured, decomposition adds color but not actionability).

#### N20-02: Mechanisms + Scales = 89% of Budget (CRITICAL ARITHMETIC)
- **Source:** Lines 153-156 (original)
- **What's missing:** "If mechanisms consumed ~53 units and scales consumed ~36 units, these two categories alone demand ~89 units -- nearly the entire budget of ~100 units. Everything else must fit in the remaining ~11 units." This arithmetic is the CORE PROOF of why the ceiling failed. The extraction captures individual costs but not the additive devastation.
- **Impact:** MODERATE. The sum (~89 of ~100) is the most powerful single number in the attention theory.

#### N20-03: Examples vs Explanations Cost Ratio (1:3) (MINOR)
- **Source:** Lines 183-191 (original)
- **What's missing:** The specific cost ratio (1:3) between examples and explanations is captured in A20-08 but the REASONING is not: "An example costs ~1 attention unit. The builder pattern-matches against the example and reproduces the pattern. An explanation costs ~3 units. The builder must parse the explanation, extract the principle, apply it to context, and generate implementation." The mechanism (pattern-matching vs principle-extraction) explains why examples are cheaper.
- **Impact:** MINOR.

#### N20-04: Negative vs Positive Rules Cost Ratio (1:2) (MINOR)
- **Source:** Lines 193-201 (original)
- **What's missing:** The cost ratio (1:2) between negative and positive rules is captured in A20-09 but not the mechanism: "A negative rule ('header must not exceed 25%') is a boundary check: measure one thing, compare to one threshold. ~1 unit. A positive rule ('use appropriate spacing') is open-ended. ~2-4 units."
- **Impact:** MINOR.

#### N20-05: Communication as Attention Redistribution (KEY THEORY) (SIGNIFICANT)
- **Source:** Lines 596-602 (original)
- **What's missing:** The theory that communication acts as an ATTENTION REDISTRIBUTION mechanism is not captured as an explicit action item or enrichment:
  "When the builder messages the planner ('these 5 checkpoints with 80px margins will create ~900px of whitespace -- is that intended?'), the planner can spend its OWN attention budget on spatial reasoning that the builder cannot afford."
  "Communication is an attention redistribution mechanism. It does not create more total attention, but it redistributes attention from agents with surplus to agents with deficit."
  This explains WHY inter-agent messaging improves quality -- not because messages contain useful information (though they might), but because messaging TRANSFERS cognitive work from overloaded agents to underloaded ones.
- **Impact:** SIGNIFICANT. This is the deepest theoretical justification for mandatory messaging and changes how we think about messaging protocols.

#### N20-06: Sonnet Budget Estimate (~90 vs Opus ~100) (MINOR)
- **Source:** Line 515 (original footnote)
- **What's missing:** "Sonnet models may have slightly lower effective budget (~90 units) than Opus (~100 units), reflecting the model capability difference." This assumption affects all the per-agent budget calculations in Section 7.
- **Impact:** MINOR. Noted in the original but easy to overlook.

#### N20-07: Self-Check Runs AFTER Main Build (Timing Detail) (MINOR)
- **Source:** Lines 231-233 (original)
- **What's missing:** "SELF-CHECK (8 items with formulas, run BEFORE file write) [COST: ~8 units -- but these run AFTER main build, so they don't compete with build attention]" -- the self-check items cost attention but run at a DIFFERENT TIME than the creative work, so they don't compete for attention during the compositional phase. This timing insight is not captured.
- **Impact:** MINOR. Affects attention budget modeling.

#### N20-08: Phase D Explained by the Model (Surplus Without Tools) (MINOR)
- **Source:** Lines 589-590 (original)
- **What's missing:** "Floor fails because surplus without vocabulary is wasted (agents have attention to spare but nothing to express)." The model predicts Phase D's moderate quality not from overload but from UNDERUTILIZATION -- high surplus + low vocabulary = wasted potential. This completes the 4-experiment explanation.
- **Impact:** MINOR.

---

## FILE 21: 21-beyond-flagship.md (672 lines)
### Extraction: 07-extraction-theory-future.md (File 3 section, lines 536-909)

### MISSED NUANCES

#### N21-01: Atoms Tier Gap Analysis -- 5 Specific Gaps (MODERATE)
- **Source:** Lines 38-59 (original)
- **What's missing:** The extraction captures A21-05 (temporal identity) and some future items, but the structured 5-gap analysis of what human designers do that agents CANNOT is not fully captured:
  1. Micro-typographic intentionality: kerning pairs, tracking variation (0.02em vs 0.1em), sub-pixel alignment
  2. Motion as compositional grammar: easing curves as semantic meaning, stagger patterns, reveal sequences
  3. Material texture simulation: paper grain, ink weight, fabric weave
  4. Responsive as composition, not adaptation: each viewport is a DIFFERENT page
  5. Sensory richness beyond vision: sound design, haptic feedback, scrolljacking
  The extraction captures some items individually but not the structured "5 things agents cannot do" framework.
- **Impact:** MODERATE. Sets the theoretical ceiling for what any agent pipeline can achieve.

#### N21-02: Diminishing Returns Curve with Specific Quality Percentages (SIGNIFICANT)
- **Source:** Lines 99-114 (original)
- **What's missing:** The specific quality percentage curve is not extracted:
  - Floor: 30% quality at 30 min
  - Middle: 65% at 60 min
  - Pass 1 (spatial): 75% at 90 min
  - Pass 2 (composition): 88% at 120 min
  - Pass 3 (intentionality): 93% at 150 min
  - Pass 4 (perceptual polish): 95% at 180 min
  - Pass 5 (material): 96% at 210 min
  - Pass 6 (temporal): 98% at 240 min
  And the key finding: "The cliff is between Pass 3 and Pass 4. Passes 1-3 produce ~93% quality in ~160 minutes. Passes 4-6 add ~5% quality in ~70 more minutes. The ROI per minute drops by approximately 4x after Pass 3."
- **Impact:** SIGNIFICANT. These numbers directly inform the decision of how many passes to include.

#### N21-03: Multi-Page Level 3 -- Structural Counterpoint (MODERATE)
- **Source:** Lines 157-164 (original)
- **What's missing:** The concept of "structural counterpoint" between sibling pages is not captured:
  - "Authentication page uses light-to-dark gradient (reading as accumulation of layers)"
  - "Error Handling page uses dark-to-light gradient (reading as resolution of problems)"
  - "A reader who visits both experiences COUNTERPOINT -- two pages in deliberate dialogue"
  This is a novel design concept that goes beyond just "consistent styling."
- **Impact:** MODERATE. Not needed for flagship but a rich concept for future work.

#### N21-04: Multi-Page Level 4 -- Footer/Header Continuity (MINOR)
- **Source:** Lines 166-177 (original)
- **What's missing:** The "book model" detail: "The footer of page N contains a structural preview of page N+1. The header of page N echoes the conclusion of page N-1." This specific structural technique is not captured.
- **Impact:** MINOR. Future work.

#### N21-05: Book vs Encyclopedia Model (MINOR)
- **Source:** Lines 205-214 (original)
- **What's missing:** The explicit framing of two multi-page architectures: Book model (reading order, narrative arc, journey) vs Encyclopedia model (independent pages, navigation-primary, reference). "The current system implicitly assumes the encyclopedia model." This distinction is not captured.
- **Impact:** MINOR.

#### N21-06: Interactive Vocabulary -- KortAI Interaction Should Be QUIET (MODERATE)
- **Source:** Lines 320-326 (original)
- **What's missing:** The explicit austerity doctrine for interaction:
  - Hover effects: border-weight change ONLY (no color explosion, no scale transform)
  - Accordions: max-height transition ONLY (no rotate-arrow, no background flash)
  - Tooltips: opacity transition ONLY (appear, don't slide)
  - Everything uses the same temporal identity tokens
  The extraction captures the interactive mechanisms but not the CONSTRAINT that makes them KortAI-compatible.
- **Impact:** MODERATE. Without the "quiet interaction" principle, builders might add conventional hover effects.

#### N21-07: Self-Improving System Concept (MINOR)
- **Source:** Lines 399-411 (original)
- **What's missing:** The concept of a self-improving system that uses its own PA scores as training labels:
  - After 50 Middle-tier pages: 50 PA reports, 50 audit results, 50 execution traces
  - Can identify which mechanisms/combinations correlate with DESIGNED scores
  - Supervised learning from the system's own quality signal
  - Timeline: 2-3 years
- **Impact:** MINOR. Long-term vision, not flagship-relevant.

#### N21-08: "What No Compromise Actually Looks Like" -- 17-Point Specification (MODERATE)
- **Source:** Lines 591-609 (original)
- **What's missing:** The complete 17-point specification of what "atoms" looks like is not captured as a single item. While individual points appear across various action items, the UNIFIED VISION of 17 simultaneous qualities (4-scale coherence, 12-14 mechanisms, 2+ silence zones, metaphor through 3+ reinforcing pairs, bookending, self-reference, cognitive transitions, background texture, hover states, scroll reveals, 4 passes, 3+ auditors, multi-page system, 4 temporal layers, materiality range 7+, narrative arc 0.7+, 4+ emotional registers) is lost.
- **Impact:** MODERATE. The unified vision provides a north star that individual action items cannot.

#### N21-09: Three Competing Definitions of "Richest" (MINOR)
- **Source:** Lines 549-564 (original)
- **What's missing:** The three competing definitions:
  - A: Maximum Spatial Complexity (scale model's definition -- leads to flagship)
  - B: Maximum Restraint Within Maximum Constraint (anti-scale thesis -- leads to Middle-plus)
  - C: Maximum Experiential Completeness (7-dimensional model -- leads to beyond-flagship)
  The extraction captures the unified formula but not the three COMPETING definitions that it synthesizes.
- **Impact:** MINOR. Philosophical framing.

---

## SUMMARY

### Total Missed Nuances by File

| File | Total Found | SIGNIFICANT | MODERATE | MINOR |
|------|------------|-------------|----------|-------|
| 15 | 12 | 1 | 5 | 6 |
| 16 | 9 | 1 | 5 | 3 |
| 17 | 10 | 0 | 3 | 7 |
| 18 | 6 | 0 | 3 | 3 |
| 19 | 11 | 3 | 5 | 3 |
| 20 | 8 | 1 | 1 | 6 |
| 21 | 9 | 1 | 4 | 4 |
| **TOTAL** | **65** | **7** | **26** | **32** |

### Most Critical Missed Items (SIGNIFICANT)

1. **N15-03:** Per-act mechanism deployment recommendations (specific mechanisms per scroll act)
2. **N16-05:** Falsification criteria for flagship hypothesis testing (5 specific observational tests)
3. **N19-07:** Scale-attention matrix (6-level table predicting quality at each scale count)
4. **N19-09:** KortAI is CLOSE to inflection point (1 channel margin, ~17% overhead)
5. **N19-06:** Channel loading stability finding (distribution converges regardless of page)
6. **N20-05:** Communication as attention redistribution mechanism (theoretical justification for messaging)
7. **N21-02:** Diminishing returns curve with specific quality percentages per pass

### Key Theme: Theory vs Specification

The extractions consistently capture SPECIFICATIONS (what to do, what to check, what values to use) but miss THEORIES (why those specifications work, what models predict, what would falsify the approach). This is by design -- the extraction focuses on actionable items. However, several theories directly inform HOW to implement the specifications:

- The contrast cascade (N15-01) tells builders WHY the eye path works
- The perceived richness formula (N16-03) tells planners WHY some mechanisms "don't count"
- The scale-attention matrix (N19-07) tells architects WHY 2 scales per pass is optimal
- The attention redistribution theory (N20-05) tells protocol designers WHY messaging matters
- The inflection point analysis (N19-09) tells enrichment authors WHAT KIND of constraints are safe

These theories should be available in reference documents (Layer 1: Conviction or Layer 4: Reference Library) even if they don't appear in builder prompts.

---

**END V3 NUANCE RECOVERY**

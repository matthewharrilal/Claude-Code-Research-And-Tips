# Fresh-Eyes Audit: Adversarial Review Quality

**Auditor:** score-driver-analyst
**Date:** 2026-02-23
**Subject:** `09-adversarial-review.md` (454 lines, by adversarial-reviewer)
**Method:** Verify source citations, test steel-manning quality, identify propagated errors, evaluate balance

---

## 1. SCOPE COVERAGE

### Did the adversarial reviewer challenge ALL analysis reports?

The adversarial reviewer claims scope of "All 8 primary analysis reports + 8 buddy reviews." Checking coverage:

| Report | Challenged? | Evidence |
|--------|------------|----------|
| 01 (Phase 0) | YES | A2 (Sonnet vs Opus), R1 (content tensions), R4 (Opus brief assembler) |
| 02 (Phase 1) | YES | A2, C1 (brief line budget), C3 (Sonnet quality), R2 (Tier 4 budget), R4 |
| 03 (Phase 2) | YES | R7 (background delta), C4 (what prevents DESIGNED) |
| 04 (Phase 3A) | YES | C2 (gate coverage), R3 (gate runner JavaScript) |
| 05 (Phase 3B) | YES | A3 (fresh-eyes), A5 (auditor count), R5 (fresh-eyes enforcement), R6 (Tier 5), O3 |
| 06 (Score Drivers) | YES | A1 (72% unfalsifiable), R7 (background delta), C4, R17 (classification) |
| 07 (Context Gap) | YES | C1 (brief line budget), B2 (template reusability), B5 (orchestrator), R1, O2 |
| 08 (Artifact Analysis) | YES | C1, C2, R3, R7 (stacked gap), R8 (worked examples) |

**Verdict: 8/8 reports challenged.** Coverage is comprehensive.

### Buddy review coverage:

The adversarial reviewer references buddy review findings at C3 (Report 02 buddy review "devastating") and mentions buddy reviews in the scope declaration. However, the review does NOT systematically audit each buddy review individually. The buddy reviews are used as evidence sources, not as objects of adversarial scrutiny.

**Gap: Buddy reviews are referenced but not adversarially challenged.** The reviewer could have asked: "Do buddy reviews exhibit the same over-specification bias as the primary analyses?"

---

## 2. STEEL-MANNING QUALITY

### A1: "72% Recipe Gap Is Unfalsifiable"

**Steel-man quality: STRONG.** The counterfactual test ("would a different builder produce the same defects?") is the correct adversarial move. The reframing from "72% CAUSED BY recipe gaps" to "72% COULD BE PREVENTED by recipe additions" is a genuinely important distinction that Report 06 does not make.

**However:** The adversarial reviewer does not engage with Report 06's actual classification methodology. Report 06 (lines 54-55, 80, 105, 127, etc.) provides per-deduction reasoning for each classification, with specific CSS evidence. The adversarial reviewer treats the 72% as an undefended assertion when it is actually supported by 18 individual analyses. A stronger steel-man would have tested 2-3 specific classifications rather than attacking the aggregate.

**Score: 7/10** -- correct abstract challenge, insufficient engagement with concrete evidence.

### A2: "Sonnet vs Opus Is Treated as Self-Evident"

**Steel-man quality: EXCELLENT.** The historical experiment table (Middle-Tier/Flagship/Ceiling/Gas Town) is the strongest single argument in the entire adversarial review. The observation that "pipeline complexity, not model choice, is the dominant variable" is well-supported.

**Factual check:** The adversarial reviewer states "I see no definitive evidence" that the Brief Assembler was Sonnet. The MANIFEST line 112 says "Opus (recommended)" for the Brief Assembler. This means the adversarial reviewer is CORRECT to question the assumption -- if the brief assembler WAS Opus (as the manifest recommends), then the "Sonnet limitation" narrative in Reports 01 and 02 collapses. The adversarial reviewer identified this but framed it as uncertainty rather than definitive refutation.

**Score: 9/10** -- well-evidenced, historically grounded, correctly identifies confounding variable.

### A3: "Fresh-Eyes Violation May Not Be a Problem"

**Steel-man quality: STRONG.** The three examples (Auditor C needing RGB measurement, Auditor G needing font metrics, Auditor F needing ARIA inspection) effectively demonstrate that screenshot-only auditing would degrade the best reports. The distinction between "source code reveals implementation" vs "brief reveals intent" is architecturally important.

**Score: 8/10** -- well-argued reframing with concrete evidence.

### A4: "175/200 Is Treated as Success"

**Steel-man quality: GOOD.** The minimum viable pipeline question is valid. However, the claim that Middle-Tier "produced PA-05 4/4 DESIGNED with a SIMPLER pipeline" conflates different content, different time periods, and different evaluation contexts. The Middle-Tier experiment was on different content (not Gas Town). The adversarial reviewer does not acknowledge this confound.

**Score: 6/10** -- valid question, but comparison is confounded and the reviewer does not flag this limitation.

### A5: "9 PA Auditors Is Assumed Correct"

**Steel-man quality: MODERATE.** The observation that "by auditor #3 flagging Z4->Z5, auditors 4 and 5 add zero information gain" is factually wrong. Information gain from CONVERGENCE is not zero -- it increases confidence. 5/9 convergence is statistically stronger than 2/9. The adversarial reviewer confuses unique findings with statistical confidence. However, the core point (nobody tested 5 vs 9) is valid.

**Score: 5/10** -- correct high-level question, flawed reasoning about convergence value.

---

## 3. SPOT-CHECK: FACTUAL CLAIMS AGAINST SOURCE MATERIAL

### Spot-Check 1: "Resolve stacked gap threshold contradiction" (Recommendation #7)

The adversarial reviewer states: "Three documents say three different numbers (120px, 150px, and implicit). Pick one and update all references."

**FACTUAL ERROR.** This perpetuates the same false contradiction I identified in my buddy reviews of Report 08. Verified against the source:

- **GR-13** (artifact-gate-runner.md lines 177-183): "No single stacked gap (margin-bottom + padding-bottom + margin-top + padding-top at any boundary) may exceed 120px"
- **GR-14** (artifact-gate-runner.md lines 185-192): "TOTAL accumulated gap at any section boundary (including ALL contributing properties) must not exceed 150px. This catches the S-09 stacking loophole where individual values pass GR-13 but STACKED values create 210-276px voids."

These are TWO SEPARATE COMPLEMENTARY GATES measuring different things:
- GR-13 = CSS property sum (4 properties at one boundary) <= 120px
- GR-14 = visual measurement (getBoundingClientRect gap) <= 150px

The 30px difference accounts for borders, margin collapse, and other rendering-layer effects that cause the visual gap to differ from the sum of CSS properties. There is no contradiction to resolve.

**Verdict: WRONG.** The adversarial reviewer uncritically adopted Report 08's false finding without verifying against the source artifacts. This is a propagated error through three layers: Report 08 analyst -> Report 08 first buddy reviewer -> adversarial reviewer.

### Spot-Check 2: "The MANIFEST recommends Opus for the Brief Assembler" (Section 6)

The adversarial reviewer states (line 341): "The MANIFEST recommends Opus for the Brief Assembler (line 112)."

**Verified: CORRECT.** MANIFEST.md line 112 reads: `| **Brief Assembler** | Opus (recommended) | ...`

This is an important finding because Reports 01 and 02 frame the brief quality issues as "Sonnet limitations" when the manifest actually recommends Opus for this role. If Opus was used as recommended, then the 6.3/10 brief quality score reflects Opus performance, not Sonnet. The adversarial reviewer correctly identifies this but buries it in a footnote rather than making it a headline finding.

### Spot-Check 3: "Report 05 calls fresh-eyes violation 'the single most important protocol failure'" (A3)

Checking Report 05 (Phase 3B analysis), line 588: "Fresh-eyes principle was completely violated. 9/9 auditors had source code access. This is the single most important protocol failure."

**Verified: CORRECT.** The exact quote is confirmed. And the adversarial reviewer's observation that Report 05 simultaneously calls it "critical" but assesses impact as "moderate" (line 219: "The source code access was used to SUPPORT perceptual findings with evidence, not to generate findings from code alone") is a genuine internal contradiction in Report 05.

### Spot-Check 4: "Middle-Tier experiment used Sonnet builder" (A2 table)

The adversarial reviewer's table (line 41) lists Middle-Tier builder model as "Sonnet."

**Not directly verified in this retro.** The MEMORY.md states the Middle-Tier experiment was a "SUCCESS" with "PA-05 DESIGNED, 3/3 novel" but does not explicitly state the builder model. The adversarial reviewer presents this as fact without citation. Given the project's history of using both models, this claim should be marked as UNVERIFIED.

### Spot-Check 5: "~100 enrichment recommendations" (R8, B4)

The adversarial reviewer tallies per-report enrichment counts (lines 287-294) and arrives at "~100 enrichment recommendations."

**Partial verification:** Report 06 (Score Drivers) has 12 recipe enrichments -- CONFIRMED (line 852-867, 12 items). Report 05 (Phase 3B) has "3 BLOCKING, 4 SIGNIFICANT, 3 NICE-TO-HAVE = 10" -- CONFIRMED (lines 526-567). The total of ~100 across all 8 reports is plausible given the individual counts.

The adversarial reviewer's meta-observation that "the 8 reports reproduce the pipeline's own failure mode" (over-specification without proportionate actionability) is well-argued and consistent with the project's documented "complexity ratchet" finding.

---

## 4. BALANCE ASSESSMENT

### Substantive vs Trivial Challenges

| Category | Count | Substantive? |
|----------|-------|-------------|
| Challenged Assumptions (A1-A5) | 5 | 4/5 substantive (A5 reasoning is flawed) |
| Contradictions (C1-C4) | 4 | 4/4 substantive |
| Blind Spots (B1-B5) | 5 | 4/5 substantive (B2 template reusability is minor) |
| Recommendation Testing (R1-R8) | 8 | 7/8 substantive |
| Model Choice Critique | 1 section | Substantive |
| Overengineering Risks (O1-O3) | 3 | 3/3 substantive |
| Fresh-Instance Problem | 1 section | Substantive |

**Ratio: ~25 of ~27 items are substantive.** The adversarial review does NOT pad with trivial nitpicks. This is a high-signal document.

### Does it attack findings or just reframe them?

Mixed. The strongest sections (A2 with the experiment table, A3 with the intent-vs-implementation distinction, B4 with the complexity ratchet) are genuine attacks that could change the retrospective's conclusions. The weaker sections (A5, B2) are reframes that acknowledge the original finding is correct but argue it was over-weighted. The meta-observation (Section 10) is a frame-level critique rather than a finding-level attack.

---

## 5. MISSED OPPORTUNITIES

### 5.1: "175/200" Aggregate Construction

The adversarial reviewer notes that 175/200 is unquestioned (A4, B3). But it could have gone further: the 200-point total assumes PA-05 (4 points) scales with the 25-point auditor dimensions, which it does not. 175/200 treats a 1-point PA-05 deduction identically to a 1-point typography deduction, but PA-05 measures on a 4-point scale while all others use 5-point scales. The aggregate is not mathematically coherent. The adversarial reviewer identifies the weighting problem (B3, item 2) but does not explicitly call out the scale incompatibility.

### 5.2: Zone Count Deviation from Routing Artifact

Report 01 identifies that the routing artifact recommends 4-5 zones for 8,500 words but the content map specified 6. The adversarial reviewer does not challenge whether the 6-zone choice caused the Z4->Z5 blending problem. If the content had been mapped to 5 zones (merging Z4 and Z5), the dominant defect would not exist. This is a surprisingly simple root cause that nobody -- including the adversarial reviewer -- examines.

### 5.3: The Adversarial Review's Own Biases

The adversarial reviewer does not disclose its own analytical lens. Its consistent framing -- pipeline complexity is the bottleneck, simplification is better, fewer rules beat more rules -- is itself an assumption that is never self-examined. The review argues against over-specification but its own recommendations (Section 9) include 18 classified items with specific action guidance. The meta-observation in Section 10 partially acknowledges this but does not resolve the irony.

---

## 6. CLASSIFICATION OF 18 RECOMMENDATIONS

The adversarial reviewer classifies 18 recommendations as 9 STRONG / 6 QUESTIONABLE / 3 WRONG.

### Agreement Assessment

| # | Reviewer's Class | My Assessment | Agree? |
|---|-----------------|---------------|--------|
| 1 | STRONG (gate runner JS) | STRONG | YES |
| 2 | STRONG (content tensions) | STRONG | YES |
| 3 | STRONG (density arc notation) | STRONG | YES |
| 4 | STRONG (TC Brief Template) | STRONG | YES |
| 5 | STRONG (Tier 5 questions) | STRONG | YES |
| 6 | STRONG (scoring rubric) | STRONG | YES |
| 7 | STRONG (stacked gap "contradiction") | **WRONG** -- false contradiction | **NO** |
| 8 | STRONG (worked examples) | STRONG | YES |
| 9 | STRONG (Z4->Z5 fix) | STRONG | YES |
| 10 | QUESTIONABLE (always Opus) | QUESTIONABLE | YES |
| 11 | QUESTIONABLE (Tier 4 budget) | QUESTIONABLE | YES |
| 12 | QUESTIONABLE (25 RGB) | QUESTIONABLE (20 RGB compromise is good) | YES |
| 13 | QUESTIONABLE (11 auditors) | QUESTIONABLE | YES |
| 14 | QUESTIONABLE (templates as specs) | QUESTIONABLE | YES |
| 15 | QUESTIONABLE (component-zone mapping) | QUESTIONABLE | YES |
| 16 | WRONG (remove source code) | Agree it's WRONG as stated | YES |
| 17 | WRONG (72% reclassification) | PARTIALLY AGREE -- classification IS useful, but reframing IS needed | PARTIAL |
| 18 | WRONG (merge Auditor A) | Agree WRONG -- cold accents are perceptual | YES |

**Agreement rate: 15/18 full agreement, 1 partial, 2 disagreements (one is the stacked gap false contradiction).**

---

## 7. OVERALL ASSESSMENT

### Strengths

1. **The experiment history table (A2) is the single most valuable analytical contribution in the entire retrospective.** No other report compares Gas Town against Middle-Tier, Flagship, and Ceiling. This table reframes the entire discussion.

2. **The "complexity ratchet" observation (B4, O1, Section 10) is correct and urgent.** The retrospective proposes ~100 enrichments. The adversarial reviewer is the only voice saying "applying all 100 will hurt more than help."

3. **The recommendation classification (Section 9) is operationally useful.** The 9/6/3 split gives the synthesis team a clear signal about which recommendations to adopt, test, and reject.

4. **The fresh-eyes reframing (A3, R5) is architecturally important.** Distinguishing "implementation details" from "build intent" provides a principled basis for revised audit protocol.

5. **High signal-to-noise ratio.** ~25 of ~27 items are substantive. The document respects the reader's time.

### Weaknesses

1. **Propagated stacked gap error (Recommendation #7).** The adversarial reviewer adopted Report 08's false "contradiction" without verifying against the gate runner artifact. GR-13 (120px CSS property sum) and GR-14 (150px visual measurement) are separate complementary gates, not contradictory thresholds. This error has now propagated through three layers of analysis.

2. **Middle-Tier builder model claim is unverified.** The experiment table lists "Sonnet" as the Middle-Tier builder but provides no citation. If the Middle-Tier builder was actually Opus, the A2 argument weakens significantly.

3. **A5 convergence reasoning is flawed.** The claim that "by auditor #3 flagging Z4->Z5, the information gain from auditors 4 and 5 is zero" confuses unique information with statistical confidence. 5/9 convergence IS more informative than 3/9, even though no new DETAILS emerge.

4. **A4 comparison is confounded.** The Middle-Tier experiment used different content, different infrastructure, and a different evaluation context. The adversarial reviewer does not flag these confounds when comparing it to Gas Town.

5. **No self-examination of adversarial biases.** The review consistently favors simplification and questions complexity. This is a defensible position but it is presented as objective analysis rather than as one analytical lens among several.

---

## 8. SCORING

| Criterion | Score | Notes |
|-----------|-------|-------|
| Scope coverage | 9/10 | All 8 reports challenged; buddy reviews used as evidence but not individually scrutinized |
| Steel-manning quality | 7/10 | A2 and A3 are excellent; A1 and A5 are weaker |
| Factual accuracy | 7/10 | Stacked gap error is significant; Middle-Tier model claim unverified; most other claims verified |
| Balance | 9/10 | High substantive ratio, no trivial padding, constructive output |
| Analytical depth | 8/10 | Experiment table, complexity ratchet, and fresh-eyes reframe are genuinely deep |
| Missed opportunities | 6/10 | Missed zone count root cause, PA-05 scale incompatibility, own biases |

**Overall score: 7.7/10**

**Verdict: ACCEPT WITH CORRECTIONS**

The adversarial review is the highest-value analytical document in the retrospective. It provides the only cross-experiment comparison, the only complexity ratchet warning, and the most operationally useful recommendation classification. However, the stacked gap false contradiction must be corrected before this document informs the synthesis (Task #11). The Middle-Tier model claim should be verified or flagged as uncertain. And the synthesis team should treat the adversarial reviewer's pro-simplification bias as one perspective, not as settled fact.

### Required Corrections Before Synthesis

1. **Remove Recommendation #7 from STRONG list.** GR-13 and GR-14 are separate complementary gates, not contradictory thresholds. No resolution is needed.
2. **Mark Middle-Tier builder model as UNVERIFIED** in the A2 experiment table.
3. **Correct A5 convergence reasoning:** 5/9 convergence adds statistical confidence even when no new unique details emerge.

---

*End of adversarial review audit. Score: 7.7/10. Verdict: ACCEPT WITH CORRECTIONS. 3 required corrections identified.*

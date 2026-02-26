# Flagship Experiment: Kill Criteria and Abort Decision Tree

**Author:** KILL-CRITERIA-DESIGNER
**Date:** 2026-02-16
**Sources:**
- `ephemeral/ceiling-experiment/_flagship-prep/04-metacognitive-analysis.md`
- `ephemeral/ceiling-experiment/_flagship-prep/06-failure-analysis.md`
- `ephemeral/ceiling-experiment/_flagship-prep/05-flagship-architecture.md`
- `ephemeral/ceiling-experiment/07-VERDICT.md`

**Purpose:** Every criterion in this document is BINARY (PASS/FAIL, not "seems okay") and MEASURABLE (a number or a yes/no, not a judgment call). The ceiling experiment had no kill criteria. The catastrophic whitespace void was discovered AFTER full completion. An abort at the spatial gate would have saved all subsequent effort. These criteria prevent that pattern from repeating.

---

## WHY KILL CRITERIA EXIST

### The Ceiling Experiment's Lesson

The ceiling experiment ran to completion and was declared "SUCCESS WITH CRITICAL CONTAINER VIOLATION." A Mode 4 PA (9 auditors) then revealed the actual dominant failure: 70-80% whitespace void. The initial 5-agent audit had missed it entirely.

**The cost of no kill criteria:**
- Full 12-agent experiment executed before dominant failure detected
- Fix cycle applied (40 CSS changes) targeting wrong root cause (CSS, not content)
- Re-audit found void unchanged
- Verdict downgraded from "ship after fix" to "DO NOT SHIP"
- All post-build effort (fix team, re-audit team) was wasted

**What an abort would have prevented:** If the void had been detected at Pass 1 (spatial skeleton phase), the fix path would be metaphor restructure or zone reduction — architectural, not cosmetic. The fix cycle cost would have been 30-40 minutes instead of 3+ audit rounds.

### The Sunk Cost Trap

The metacognitive analysis identified sunk cost bias as a structural failure mode: "Establishing explicit 'abandon' triggers before experiments begin neutralizes sunk cost at the decision point." These kill criteria are that advance commitment.

**Key principle from analysis:** "Aborting a 200-minute experiment is better than shipping a broken flagship."

---

## STAGE 1: PRE-BUILD KILL CRITERIA

These criteria fire BEFORE any HTML is written. They assess the concept and plan. A pre-build abort costs 30-45 minutes (metaphor derivation time). Proceeding with a flawed plan costs 200-280 minutes of wasted execution.

### KB-01: Content Section Count

**Question:** Does the content topic have at least 4 natural, meaningfully distinct sections?

**Measurement:**
1. List all sections the content naturally divides into
2. Count: N = number of sections where each section has >= 200 words of distinct content

**Threshold:** N >= 4

**PASS:** N >= 4 → Proceed
**FAIL:** N < 4 → ABORT: insufficient content for flagship

**Rationale:** A flagship page at 12-16 mechanisms requires content surface area to deploy mechanisms against. Fewer than 4 sections means mechanisms will be crammed into too few contexts, producing saturation rather than rhythm. The ceiling experiment's 4 zones with insufficient content to fill them was the root cause of the void.

**Abort action:** STOP. Do not proceed to metaphor derivation. The content topic cannot support flagship-tier architecture. Recommend: either expand content scope or downgrade to ceiling tier.

---

### KB-02: Metaphor-Zone Compatibility Assessment

**Question:** Does the proposed metaphor require more zones than the content can fill?

**Measurement:**
1. Metaphor-agent documents: M = number of structural zones the metaphor requires
2. Content inventory documents: C = number of content sections with >= 200 words each
3. Compute: ratio = C / M

**Threshold:** ratio >= 1.5 (content sections outnumber zones by at least 1.5:1)

**PASS:** ratio >= 1.5 → Proceed
**FAIL:** ratio < 1.5 → ABORT: metaphor-content mismatch

**Measurement example:**
- Secure facility metaphor: requires 4 zones (EXTERIOR, LOBBY, SECURED WING, OPS CENTER)
- Available content sections with >= 200 words: 4 sections
- ratio = 4 / 4 = 1.0 → FAIL (this is what the ceiling experiment did, producing void)
- Required: at least 6 content sections for a 4-zone metaphor

**Rationale:** The ceiling experiment's root cause was exactly this: 4 zones with content insufficient to fill them. The metacognitive analysis states: "No one asked 'How many words of content exist for Zone 3? Is it enough to fill a zone?'"

**Abort action:** STOP. Either (a) select a simpler metaphor with fewer zones, or (b) add content before building. Proceed only after ratio >= 1.5 with revised metaphor or expanded content.

---

### KB-03: Predicted Void Budget

**Question:** Does the planned architecture project to exceed 30% contentless scroll depth?

**Measurement:**
1. Planner sums all specified zone paddings + checkpoint margins + heading spacing + inter-section gaps from the build plan
2. Planner estimates content height per section (words × approximate line height × font size)
3. Compute: predicted_void_pct = (total_spacing / (total_spacing + total_content)) × 100

**Threshold:** predicted_void_pct <= 30%

**PASS:** predicted_void_pct <= 30% → Proceed
**FAIL:** predicted_void_pct > 30% → ABORT: plan will produce too-sparse page

**Calculation method:**
```
Total spacing = sum of all zone padding-top + zone padding-bottom +
                checkpoint margin-top + checkpoint margin-bottom +
                section gap + heading margin-top + heading margin-bottom
                (for all instances in plan)

Total content = number of words × (estimated line height px) × (chars per line / chars per word)
                (rough: 500 words ≈ 800-1200px of rendered text at 18px/line 70CPL)

predicted_void_pct = total_spacing / (total_spacing + total_content) × 100
```

**PASS:** predicted_void_pct <= 30% → Proceed
**FAIL:** predicted_void_pct > 30% → Planner must compress spacing or eliminate zones before proceeding. If compression cannot bring it below 30%, ABORT.

**Rationale:** Failure analysis states the ceiling experiment's 4 zones × 7 transitions at 48-80px each produced ~400-560px in transitions alone, before intra-zone spacing. Summing these upfront prevents faithful execution of a void-producing plan.

**Abort action:** Revise plan to reduce spacing or zone count. Recompute. Only proceed when measurement passes.

---

### KB-04: Prompt Length Check

**Question:** Does the execution prompt exceed 200 lines?

**Measurement:**
```
wc -l execution-prompt.md
```

**Threshold:** line_count <= 200

**PASS:** line_count <= 200 → Proceed
**FAIL:** line_count > 200 → COMPRESS before proceeding

**Rationale:** The metacognitive analysis found: "The Middle experiment used a substantially shorter prompt and achieved 960px container width compliance. The Ceiling experiment used a much longer prompt and failed on container width. The longer prompt did not produce better compliance — it produced WORSE compliance, because critical rules were diluted among non-critical rules." The empirical ceiling is ~100-200 lines.

**This is NOT an abort criterion — it is a compression mandate.** The team-lead must compress the prompt until it is <= 200 lines. Only then proceed.

---

### KB-05: Metaphor Soul Compatibility

**Question:** Does the metaphor require visual channels prohibited by soul constraints to express zone boundaries?

**Measurement:**
Metaphor-agent answers each question with YES or NO:

| Channel | Soul Allows? | Metaphor Requires? | Conflict? |
|---------|-------------|-------------------|-----------|
| Gradients | NO | YES/NO | YES if metaphor requires |
| Box shadows | NO | YES/NO | YES if metaphor requires |
| Cool tones | NO | YES/NO | YES if metaphor requires |
| border-radius != 0 | NO | YES/NO | YES if metaphor requires |

Count of conflicts: X

**Threshold:** X = 0 (zero channel conflicts)

**PASS:** X = 0 → Proceed
**FAIL:** X >= 1 → REDESIGN metaphor to use available channels (border weight, spacing, warm palette variation) before proceeding

**Rationale:** The failure analysis found the ceiling experiment's metaphor was "announced not structural" (40% visual strength without labels) because soul constraints close off the channels needed for zone differentiation. Pre-checking prevents building with a metaphor that cannot visually express itself.

---

## STAGE 2: PASS 1 KILL CRITERIA (After Spatial Skeleton)

Pass 1 builds the spatial skeleton: container, section flow, density rhythm, header/footer, 8-10 mechanisms. No metaphor elaboration yet. These criteria run via the Spatial Confidence Gate.

All measurements are COMPUTED STYLES (via Playwright `getBoundingClientRect()` or `getComputedStyle()`), not visual estimation or CSS declaration inspection. The ceiling experiment showed CSS declaration and computed rendering can diverge.

### SP-01: Container Width

**Measurement:**
```javascript
document.querySelector('.page-container, .container, main > div').getBoundingClientRect().width
```
If multiple containers exist, measure the innermost content-bearing container.

**Threshold:** 940 <= width_px <= 960

**PASS:** 940 <= width_px <= 960 → Criterion passes
**FAIL:** width_px < 940 or width_px > 960 → Criterion fails

**On first fail:** Builder corrects container CSS. Spatial auditor re-runs. One correction cycle allowed.
**On second fail after correction:** ABORT: fundamental layout error. Rebuild from base template.

**Abort action:** The container width violation was the single most important guardrail throughout all experiments. Two failed attempts indicates a structural CSS architecture problem. Do not proceed to Pass 2. Rebuild skeleton.

---

### SP-02: Void Budget (Contiguous Contentless Scroll)

**Measurement:**
```javascript
// Measure maximum contiguous void: height of largest vertical gap with no content-bearing elements
// Content-bearing = has text, images, or interactive elements as children
// Measure at 1440px viewport width
```

Script captures: max_contiguous_void_px = maximum height of any vertical span with no content-bearing descendants.

**Threshold:** max_contiguous_void_px <= 1620 (= 1.5 × 1080px viewport height)

**PASS:** max_contiguous_void_px <= 1620 → Criterion passes
**FAIL:** max_contiguous_void_px > 1620 → Criterion fails

**On first fail:** Builder reduces zone spacing or adds content to sparse zone. One correction cycle allowed.
**On second fail after correction:** ABORT: metaphor structurally produces void. Rebuild with simpler metaphor (2-3 zones instead of 4+) or downgrade to ceiling tier.

**Abort rationale:** "If the metaphor structurally requires void (as the ceiling experiment's 'secure facility' metaphor did), no amount of fixing will eliminate it." (Flagship Architecture, Section F, KILL-01)

---

### SP-03: Content Distribution

**Measurement:**
```javascript
// Measure percentage of scroll depth that contains content-bearing elements
// Content-bearing = has text, images, or interactive elements
// total_scroll = document.documentElement.scrollHeight
// content_height = sum of heights of all content-bearing elements (no double-counting)
// content_pct = (content_height / total_scroll) * 100
```

**Threshold:** content_pct >= 70

**PASS:** content_pct >= 70 → Criterion passes
**FAIL:** content_pct < 70 → Criterion fails

**On fail:** Builder adds content to sparse sections. If content cannot be added, zones must be eliminated until content_pct >= 70. One correction cycle.
**On second fail:** ABORT: architecture has more structure than content can fill. Rebuild.

---

### SP-04: Header Viewport Ratio

**Measurement:**
```javascript
const headerHeight = document.querySelector('header').getBoundingClientRect().height;
const viewportHeight = window.innerHeight; // at 1440px viewport
const headerRatio = (headerHeight / viewportHeight) * 100;
```

**Threshold:** headerRatio <= 25

**PASS:** headerRatio <= 25 → Criterion passes
**FAIL:** headerRatio > 25 → Builder reduces header padding until <= 25%. One correction cycle.
**On second fail:** ABORT: header is architecturally over-weighted. Rebuild.

**Additional check:** Content (first section h2 or first paragraph) must be visible within the first viewport. Binary: YES or NO.

**PASS:** content visible in first viewport → passes
**FAIL:** content not visible in first viewport → ABORT: header buries all content

---

### SP-05: Footer Presence and Reachability

**Measurement:**
1. `document.querySelector('footer')` is not null → YES or NO
2. Space between last content element and footer: `footer.getBoundingClientRect().top - lastContent.getBoundingClientRect().bottom` <= 1080 (1 viewport height)

**Threshold:** footer exists = YES AND pre-footer void <= 1080px

**PASS:** both conditions true → Criterion passes
**FAIL:** footer absent or pre-footer void > 1080px → Builder adds/fixes footer. One correction cycle.
**On second fail:** ABORT: architectural oversight. Rebuild.

**Rationale:** The middle experiment's missing footer was attributed to zero messaging. The ceiling experiment fixed this. The flagship must maintain this fix. The footer is a landmark, not optional.

---

### SP-06: Spatial Confidence Gate Summary (Pass 1 Gate)

**All 5 spatial criteria must PASS before Pass 2 begins. This gate is BLOCKING.**

| Criterion | Measurement | Threshold | Status |
|-----------|-------------|-----------|--------|
| SP-01 Container Width | getBoundingClientRect().width | 940-960px | PASS/FAIL |
| SP-02 Void Budget | max contiguous void | <= 1620px | PASS/FAIL |
| SP-03 Content Distribution | content_height / scroll_height | >= 70% | PASS/FAIL |
| SP-04 Header Ratio | header_height / viewport_height | <= 25% | PASS/FAIL |
| SP-05 Footer Reachability | present AND void <= 1080px | BOTH true | PASS/FAIL |

**Gate PASS:** All 5 = PASS → Proceed to Pass 2
**Gate FAIL (any 1 fails):** Fix and re-run. Maximum 2 correction cycles total.
**Gate FAIL after 2 cycles:** ABORT flagship. Downgrade to ceiling tier with current skeleton.

**Who runs this gate:** Spatial-auditor agent (Sonnet 4.5) runs SP-01 through SP-05. Team-lead verifies results and makes the PROCEED or ABORT decision.

---

## STAGE 3: PASS 2 KILL CRITERIA (After Compositional Elaboration)

Pass 2 layers the metaphor's full expression, multi-channel encoding, and 4-6 additional mechanisms onto the verified spatial skeleton. Total mechanism count reaches 12-16.

### CP-01: Mechanism Count Cap

**Measurement:**
Count of distinct mechanisms deployed in the HTML+CSS, using mechanism-catalog.md categories.

**Threshold:** count <= 16

**PASS:** count <= 16 → Criterion passes
**FAIL:** count > 16 → Remove mechanisms until count <= 16 before any audit proceeds

**This is NOT an abort — it is a required reduction.** Count the mechanisms. Remove lowest-value ones. Recount. Do not proceed to Pass 3 until <= 16.

---

### CP-02: Signal-to-Silence Ratio

**Measurement:**
- Deployed mechanisms: D = count from CP-01
- Rejected mechanisms (documented in Restraint Map): R = count from 02b-elaboration-plan.md
- ratio = R / D

**Threshold:** ratio >= 1.5

**PASS:** ratio >= 1.5 → Criterion passes
**FAIL:** ratio < 1.5 → Return to planner. Planner must document more rejections in Restraint Map OR reduce deployed mechanisms further. Recompute until >= 1.5.

**This is NOT an abort — it is a required planning documentation step.** The restraint map must be populated.

---

### CP-03: Zone Visual Differentiation

**Measurement:**
For each adjacent zone pair, measure: is the boundary perceptible WITHOUT reading text labels?

Auditor (human or agent) views page with all text labels removed (CSS: `.zone-label { display: none }`) and answers for each zone boundary:
- "Can I see where zone N ends and zone N+1 begins?" YES or NO

Count invisible_boundaries = number of boundaries answered NO.

**Threshold:** invisible_boundaries <= 1 (at most 1 out of all boundaries may be imperceptible without labels)

**PASS:** invisible_boundaries <= 1 → Criterion passes
**FAIL:** invisible_boundaries >= 2 → Redesign zone differentiation using available soul channels (border weight variation, spacing variation, background shade variation within warm palette). One correction cycle.
**On second fail:** ABORT Pass 2 and redesign zone differentiation before proceeding. Do not proceed to Pass 3 with imperceptible zone boundaries.

**Rationale:** The failure analysis found the ceiling experiment's metaphor scored 40% strength without labels, with zone boundaries "nearly indistinguishable perceptually" due to 5-10 RGB value differences. The fix: increase zone color differentiation to >= 25 RGB value difference AND use structural borders as zone markers.

---

### CP-04: Spatial Confidence Re-Check (After Pass 2)

**Measurement:** Re-run SP-01 (container width) and SP-03 (content distribution) using same computed measurement scripts.

**Threshold:** SP-01 = PASS AND SP-03 = PASS (same thresholds as Pass 1)

**PASS:** both = PASS → Composition elaboration did not degrade spatial quality → Proceed to Pass 3
**FAIL (either):** ROLLBACK to Pass 1 v1 output. Re-attempt Pass 2 with reduced elaboration (fewer mechanisms, less dense spacing). One rollback allowed.
**On second fail:** DOWNGRADE to ceiling tier. Ship v1 (Pass 1 skeleton) as ceiling-tier page.

**Rationale:** From Flagship Architecture Section F, KILL-02: "Pass 2 should ENHANCE spatial quality, not degrade it. If elaboration breaks proportions, the elaboration plan is too ambitious."

---

## STAGE 4: PASS 3 KILL CRITERIA (After Intentionality Layer)

Pass 3 adds intentionality: structural bookending, cognitive transitions, self-referential elements, meta-annotation. This is HTML content addition, not CSS complexity.

### IT-01: Intentionality Height Budget

**Measurement:**
Before Pass 3: measure total_page_height_before = `document.documentElement.scrollHeight`
After Pass 3: measure total_page_height_after = `document.documentElement.scrollHeight`
height_increase_pct = ((total_page_height_after - total_page_height_before) / total_page_height_before) × 100

**Threshold:** height_increase_pct <= 10

**PASS:** height_increase_pct <= 10 → Intentionality additions are appropriately lightweight → Proceed
**FAIL:** height_increase_pct > 10 → REVERT the heaviest intentionality additions. Intentionality should be lightweight (content text, minor structural elements). If Pass 3 is adding substantial page height, it is adding content, not intentionality.

**Revert procedure:** Remove the largest additions first. Re-measure. Repeat until <= 10%.

---

### IT-02: Intentionality Element Presence

**Measurement:**
Team-lead checks for presence of each intentionality element type. Each is YES or NO.

| Element | Present? |
|---------|---------|
| Structural bookending (opening section echoes closing section in form or content) | YES / NO |
| At least 1 self-referential element (content that demonstrates its own form) | YES / NO |
| At least 2 cognitive transition moments (designed mode shifts between sections) | YES / NO |
| OR at least 1 meta-annotation (section labels explaining the architecture) | YES / NO |

Count present = number of YES answers.

**Threshold:** count_present >= 2

**PASS:** count_present >= 2 → Intentionality layer has substance → Proceed
**FAIL:** count_present < 2 → Pass 3 did not meaningfully add intentionality. Team-lead instructs intentionality-builder to add specific missing elements. One addition cycle.

---

### IT-03: Self-Reference Test (2-Person Consensus)

**Question:** Does the self-referential element feel integral to the page, or forced?

**Measurement:**
Two independent readers (team-lead + one audit agent) each answer:
"Does the self-referential element [describe element] feel like it belongs here, or does it feel inserted?"
Answer: INTEGRAL or FORCED.

Count FORCED answers.

**Threshold:** count_FORCED = 0

**PASS:** both say INTEGRAL → Self-reference works → Keep
**FAIL:** either says FORCED → REMOVE the self-referential element. Do not keep forced self-reference. Intentionality must be earned.

**This is the only judgment-based criterion in this document.** It is limited to 2 human readers specifically to prevent it from being resolved by LLM agent consensus, which suffers from continuation bias. Both readers must independently agree on INTEGRAL.

---

## STAGE 5: FINAL KILL CRITERIA (Before Declaring Success)

These criteria fire after all three passes are complete, before the shipping verdict.

### FK-01: PA-05 DESIGNED Score

**Measurement:**
Average PA-05 score across both perceptual auditors (PA-1 and PA-2).
PA-05 has 4 sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, POLISHED.
Each is PASS or FAIL. Score = count of PASS sub-criteria.
Average across both auditors: avg_score = (PA1_score + PA2_score) / 2

**Threshold:** avg_score >= 3

**PASS:** avg_score >= 3 → DO NOT SHIP condition clear
**FAIL:** avg_score < 3 → DO NOT SHIP

**On FAIL:** Identify which sub-criterion is failing. If PROPORTIONATE fails, this is a spatial architecture problem — CSS fixes are unlikely to resolve it (per failure analysis). If DESIGNED fails, metaphor has not manifested. Both require architectural review, not CSS patch.

---

### FK-02: Soul Compliance

**Measurement:**
Programmatic audit counts soul violations. The 8 soul constraints are:
1. border-radius: 0 everywhere
2. box-shadow: none
3. No drop-shadow filter
4. opacity: 1 on backgrounds
5. No gradients
6. No pure black (#000000) or pure white (#FFFFFF) except token-excepted cases
7. Instrument Serif ONLY for display headings
8. No cool-toned grays

Count violations: V = number of failed constraints.

**Threshold:** V = 0

**PASS:** V = 0 → DO NOT SHIP condition clear
**FAIL:** V >= 1 → DO NOT SHIP until violations are corrected

**On FAIL:** Fix violations and re-run programmatic audit. Soul violations are CSS-level fixes. This is the one category where CSS fixes ARE the correct response (soul constraints are specification violations, not architectural failures).

---

### FK-03: Spatial Confidence Gate (Final Check)

**Measurement:** Re-run SP-01, SP-02, SP-03 for the final time using same computed measurement scripts.

**Threshold:** SP-01 = PASS AND SP-02 = PASS AND SP-03 = PASS

**PASS:** all three = PASS → DO NOT SHIP condition clear
**FAIL (any):** DO NOT SHIP

**On FAIL:** If SP-02 or SP-03 fails after all three passes, the issue is architectural (not CSS). DO NOT attempt CSS patch. The page requires structural rebuild.

---

### FK-04: Novelty Assessment

**Measurement:**
Blind novelty evaluator scores page on D3 dimensions (D3.1 Structural Fingerprint, D3.2 CSS Value Overlap, D3.3 Mechanism Combination). Each dimension scores 0-3. Total: 0-9.

**Threshold:** total_novelty_score >= 6

**PASS:** total_novelty_score >= 6 → Ship
**CONDITIONAL:** total_novelty_score = 5 → CONDITIONAL SHIP: flag as ceiling-equivalent, not flagship. Document that novelty target was not met.
**FAIL:** total_novelty_score <= 4 → DO NOT SHIP as flagship. Review whether page is ceiling-tier or middle-tier quality.

**Note:** Novelty below 6 does not necessarily mean abort. It means classify correctly. Ship at the tier the page actually achieved.

---

### FK-05: No Spatial WOULD-NOT-SHIP Findings

**Measurement:**
Count of findings where BOTH perceptual auditors independently classify as "would not ship this page" due to spatial/proportional concerns.
Count: dual_WNS_spatial = number of such findings.

**Threshold:** dual_WNS_spatial = 0

**PASS:** dual_WNS_spatial = 0 → No spatial WOULD-NOT-SHIP → Clear to ship
**FAIL (1 dual_WNS_spatial):** DO NOT SHIP. Identify root cause. If fixable via architecture (zone reduction, content addition): attempt 1 rebuild cycle. If not fixable: ABORT.
**FAIL (>= 2 dual_WNS_spatial):** ABORT. The page is structurally unsound. Declare flagship attempt failed. Document learnings. Rebuild from scratch.

**Distinction from FK-01:** FK-01 catches PA-05 score degradation. FK-05 catches consensus "this page is unshippable" judgments — which is a higher bar than scoring below 3/4.

---

## TIME-BASED KILL CRITERION

### TK-01: Total Experiment Time Budget

**Measurement:**
Wall-clock time from experiment start (metaphor derivation begins) to Pass 3 completion.

**Time thresholds:**

| Time elapsed | Action |
|-------------|--------|
| <= 160 minutes | All on track |
| 160-200 minutes | Normal range; no action |
| 200-240 minutes | Caution zone: team-lead evaluates whether remaining gates are likely to pass |
| 240 minutes | SHIP AT CURRENT STATE — do not attempt further passes |

**At 240 minutes:**
- If Pass 2 complete but Pass 3 not started → Ship as CEILING-PLUS (spatial + compositional, no intentionality)
- If Pass 1 complete but Pass 2 not started → Ship as CEILING-MINUS
- If Pass 1 still in progress with failed spatial gates → ABORT. Document as attempt failure.

**Rationale:** "The diminishing returns research shows that build time grows exponentially with scale depth. If the experiment is taking longer than 240 minutes, something is structurally wrong." (Flagship Architecture Section F, KILL-03)

**Sunk cost acknowledgment:** This criterion forces the team to acknowledge the sunk cost trap. Pre-committing to a 240-minute hard stop prevents the pattern of "just one more fix cycle" that extends failing experiments indefinitely.

---

## DECISION TREE

The following describes the full abort decision tree, stage by stage.

```
START: Flagship Experiment
│
├── [PRE-BUILD STAGE]
│   │
│   ├── KB-01: Content sections >= 4?
│   │   ├── YES → Continue
│   │   └── NO → ABORT: insufficient content for flagship
│   │
│   ├── KB-02: Content/Zone ratio >= 1.5?
│   │   ├── YES → Continue
│   │   └── NO → Redesign metaphor or add content → Recheck
│   │             Still NO → ABORT: metaphor-content mismatch
│   │
│   ├── KB-03: Predicted void <= 30%?
│   │   ├── YES → Continue
│   │   └── NO → Compress plan spacing → Recompute
│   │             Still NO → ABORT: plan will produce too-sparse page
│   │
│   ├── KB-04: Prompt <= 200 lines?
│   │   ├── YES → Continue
│   │   └── NO → COMPRESS (mandatory, not abort) → Recount until pass
│   │
│   └── KB-05: Zero soul channel conflicts?
│       ├── YES → Continue to Pass 1
│       └── NO → Redesign metaphor to use available channels → Recheck
│
├── [PASS 1: SPATIAL SKELETON]
│   │
│   └── Spatial Confidence Gate (SP-01 through SP-05, all BINARY)
│       │
│       ├── ALL PASS → Continue to Pass 2
│       │
│       └── ANY FAIL → Correction cycle #1
│           │
│           ├── Fix applied → Re-run gate
│           │   ├── ALL PASS → Continue to Pass 2
│           │   └── ANY FAIL → Correction cycle #2
│           │       │
│           │       ├── Fix applied → Re-run gate
│           │       │   ├── ALL PASS → Continue to Pass 2
│           │       │   └── ANY FAIL → ABORT: rebuild at ceiling tier
│           │       │               (keep content, simplify metaphor)
│           │       └── SP-01 fails both cycles → ABORT: fundamental layout error
│
├── [PASS 2: COMPOSITIONAL ELABORATION]
│   │
│   ├── CP-01: Mechanism count <= 16?
│   │   ├── YES → Continue
│   │   └── NO → Remove mechanisms until <= 16 (mandatory, not abort)
│   │
│   ├── CP-02: Restraint ratio (R/D) >= 1.5?
│   │   ├── YES → Continue
│   │   └── NO → Document more rejections in Restraint Map (mandatory, not abort)
│   │
│   ├── CP-03: Zone boundaries perceptible without labels (invisible_boundaries <= 1)?
│   │   ├── YES → Continue
│   │   └── NO → Redesign zone differentiation → Recheck
│   │             Still NO → ABORT Pass 2: rebuild zone differentiation
│   │
│   └── CP-04: Spatial re-check (SP-01 + SP-03 still passing)?
│       ├── YES → Continue to Pass 3
│       └── NO → ROLLBACK to v1, re-attempt Pass 2 with reduced elaboration
│           │
│           ├── Rollback Pass 2 passes spatial re-check → Continue to Pass 3
│           └── Second fail → DOWNGRADE to ceiling tier, ship v1
│
├── [PASS 3: INTENTIONALITY LAYER]
│   │
│   ├── IT-01: Page height increase <= 10%?
│   │   ├── YES → Continue
│   │   └── NO → Revert heaviest additions → Recheck until <= 10%
│   │
│   ├── IT-02: Intentionality elements present >= 2?
│   │   ├── YES → Continue
│   │   └── NO → Add missing elements (one cycle) → Recheck
│   │
│   └── IT-03: Self-reference INTEGRAL (2/2 consensus)?
│       ├── YES → Continue to Final Stage
│       └── NO → REMOVE self-referential element, proceed without it
│
├── [FINAL STAGE: SHIP/NO-SHIP]
│   │
│   ├── FK-01: PA-05 avg_score >= 3?
│   │   ├── YES → Continue
│   │   └── NO → DO NOT SHIP
│   │             (Identify failing sub-criterion: PROPORTIONATE = architectural problem
│   │              not CSS-fixable. Review and rebuild required before shipping.)
│   │
│   ├── FK-02: Soul violations = 0?
│   │   ├── YES → Continue
│   │   └── NO → Fix violations (CSS-level fixes are correct here) → Re-audit → Continue
│   │
│   ├── FK-03: Spatial gate final (SP-01, SP-02, SP-03 all PASS)?
│   │   ├── YES → Continue
│   │   └── NO → DO NOT SHIP
│   │             (Spatial failure after 3 passes = structural rebuild required)
│   │
│   ├── FK-04: Novelty >= 6?
│   │   ├── >= 6 → SHIP as FLAGSHIP
│   │   ├── = 5 → CONDITIONAL SHIP as CEILING-EQUIVALENT (not flagship)
│   │   └── <= 4 → DO NOT SHIP as flagship (reassess tier)
│   │
│   └── FK-05: Dual spatial WOULD-NOT-SHIP = 0?
│       ├── YES → SHIP (verdict: SUCCESS)
│       ├── 1 finding → DO NOT SHIP, attempt 1 architectural fix cycle
│       │             Pass → SHIP
│       │             Fail → ABORT: structurally unsound
│       └── >= 2 findings → ABORT: structurally unsound, declare attempt failure
│
└── [TIME KILL — concurrent with all stages]
    │
    └── TK-01: Time >= 240 minutes?
        ├── Pass 2 complete → Ship as CEILING-PLUS (no intentionality layer)
        ├── Pass 1 complete → Ship as CEILING-MINUS
        └── Pass 1 still in progress with failing gates → ABORT, document attempt failure
```

---

## ABORT RESPONSE PROTOCOLS

When an abort is triggered, the response is not "give up." It is a STRUCTURED DOWNGRADE.

### Protocol A: Pre-Build Abort

**Trigger:** KB-01, KB-02, or KB-03 fires

**Response:**
1. Team-lead documents which criterion fired and the measurement value
2. If KB-01 (content too thin): expand content scope OR select a different content topic
3. If KB-02 (metaphor-content mismatch): reduce zone count in metaphor OR add content sections
4. If KB-03 (void predicted): reduce planned spacing OR reduce zone count
5. Re-run pre-build criteria before starting Pass 1

**Estimated recovery cost:** 30-60 minutes (plan revision)

---

### Protocol B: Pass 1 Abort (Spatial Gate Failure)

**Trigger:** SP-01, SP-02, or SP-03 fails after 2 correction cycles

**Response:**
1. Team-lead documents which criteria failed and measurement values
2. Save current skeleton as `_aborted-skeleton.html`
3. Re-derive metaphor with explicit spatial constraint: "Metaphor must be expressible within 960px container with <= 2 zones and <= 30% void budget"
4. Build new skeleton from revised metaphor (target: ceiling tier, not flagship)
5. Run spatial gate on new skeleton
6. If passes: ship as ceiling-tier page

**Estimated recovery cost:** 60-90 minutes (re-derivation + rebuild)

---

### Protocol C: Pass 2 Abort (Spatial Degradation)

**Trigger:** CP-04 fails after rollback

**Response:**
1. Team-lead documents which spatial criterion degraded and by how much
2. Ship Pass 1 v1 as CEILING-MINUS: spatially sound, lacks compositional elaboration
3. Document the elaboration plan that caused degradation for future research
4. Classify as: "Spatial architecture confirmed, elaboration scope exceeded spatial tolerance"

**Estimated recovery cost:** None (ship v1 directly)

---

### Protocol D: Final Stage Abort

**Trigger:** FK-01, FK-03, or FK-05 (>= 2 findings) fires

**Response:**
1. Team-lead documents which criterion fired
2. Do NOT attempt CSS fixes for FK-01 (PA-05c fail) or FK-03 (spatial fail) — these are architectural failures
3. Declare flagship attempt: FAILED. Write a 1-page failure report documenting root cause.
4. Assess whether current page is shippable at a lower tier (ceiling, middle) based on passing criteria
5. Ship at correct tier or discard

**Estimated cost:** 30 minutes (failure documentation)

---

## QUICK REFERENCE: BINARY CRITERIA SUMMARY

All criteria below return exactly PASS or FAIL. No partial credit. No "mostly okay."

| Stage | ID | Criterion | Threshold | Pass Value |
|-------|-----|-----------|-----------|-----------|
| Pre-Build | KB-01 | Content section count | >= 4 sections with >= 200 words each | N >= 4 |
| Pre-Build | KB-02 | Content/Zone ratio | >= 1.5 | C/M >= 1.5 |
| Pre-Build | KB-03 | Predicted void | <= 30% | predicted_void_pct <= 30 |
| Pre-Build | KB-04 | Prompt length | <= 200 lines | count <= 200 |
| Pre-Build | KB-05 | Soul channel conflicts | 0 conflicts | X = 0 |
| Pass 1 | SP-01 | Container width | 940-960px | 940 <= px <= 960 |
| Pass 1 | SP-02 | Max contiguous void | <= 1620px | px <= 1620 |
| Pass 1 | SP-03 | Content distribution | >= 70% | pct >= 70 |
| Pass 1 | SP-04 | Header ratio | <= 25% of viewport | pct <= 25 |
| Pass 1 | SP-05 | Footer present + reachable | footer + void <= 1080px | BOTH true |
| Pass 2 | CP-01 | Mechanism count | <= 16 | count <= 16 |
| Pass 2 | CP-02 | Restraint ratio | >= 1.5 | R/D >= 1.5 |
| Pass 2 | CP-03 | Zone boundaries visible | <= 1 invisible | count <= 1 |
| Pass 2 | CP-04 | Spatial re-check | SP-01 + SP-03 pass | BOTH pass |
| Pass 3 | IT-01 | Height increase | <= 10% | pct <= 10 |
| Pass 3 | IT-02 | Intentionality elements | >= 2 present | count >= 2 |
| Pass 3 | IT-03 | Self-reference consensus | 2/2 say INTEGRAL | count FORCED = 0 |
| Final | FK-01 | PA-05 average | >= 3/4 | avg >= 3 |
| Final | FK-02 | Soul violations | 0 | V = 0 |
| Final | FK-03 | Spatial final check | SP-01+SP-02+SP-03 pass | ALL pass |
| Final | FK-04 | Novelty score | >= 6/9 flagship, >= 5 conditional | score >= 6 |
| Final | FK-05 | Dual spatial WNS findings | 0 | count = 0 |
| Ongoing | TK-01 | Total time | <= 240 minutes | time <= 240 |

**Criteria that trigger ABORT (vs require fix):**
- ABORT: KB-01, KB-02, KB-03 (after 1 revision attempt)
- ABORT: SP-01, SP-02, SP-03 (after 2 correction cycles)
- ABORT: CP-03 (after 1 correction cycle) — ABORT PASS 2 only
- ABORT: CP-04 (after rollback) — DOWNGRADE tier
- ABORT: FK-01, FK-03, FK-05 >= 2 — DO NOT SHIP
- ABORT: TK-01 — SHIP AT CURRENT STATE (not rebuild)

---

## METACOGNITIVE CHECKPOINTS

At each stage, the team-lead answers these questions before proceeding. They are not criteria — they are reasoning checks.

**Pre-Build:**
"We have a concept rated 12/12. But is it 12/12 as a concept or 12/12 as a build plan?"

**Before Pass 1:**
"Assume this experiment fails catastrophically. What is the most likely cause, and have we procedurally prevented it (not just documented it)?"

**After Pass 1 gate:**
"Have we observed the spatial artifact holistically BEFORE constructing any evaluation narrative?"

**After Pass 2:**
"Are we measuring ambition or execution? Are we assuming one implies the other?"

**Before Final Verdict:**
"Is there any condition under which we would abandon this attempt entirely? If not, we have committed to completion regardless of evidence — which is sunk cost bias."

---

**KILL CRITERIA COMPLETE**
**Author:** KILL-CRITERIA-DESIGNER
**Total criteria:** 20 binary criteria + 1 time-based criterion
**Abort triggers:** 8 distinct abort conditions (vs 12 mandatory-fix conditions)
**Judgment calls:** 1 (IT-03 self-reference, requires 2-person consensus by design)
**Decision tree stages:** 5 stages (pre-build, pass 1, pass 2, pass 3, final)
**Key principle:** Every criterion returns PASS or FAIL. "Seems okay" is not a result.

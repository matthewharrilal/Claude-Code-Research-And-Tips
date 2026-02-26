# 14b: PA Source Artifact Review — Analysis from VA Extraction Files

**Agent:** Supplementary PA Research Agent (Opus)
**Date:** 2026-02-24
**Sources:** 11 files from `ephemeral/va-extraction/` + 2 enrichment history files
**Scope:** Source-artifact-perspective analysis of PA question quality, complementing the primary pipeline-compliance agent

---

## 1. Buddy-Artifact-PA Findings

### 1.1 What the Buddy Review Found

The buddy review of `artifact-pa-protocol.md` was conducted by an independent Opus agent on 2026-02-23. The verdict was **PASS** with 4 MINOR issues (all LOW/NEGLIGIBLE severity). This is the cleanest pass of any artifact in the VA extraction.

**Item coverage verification:**
- 53/53 Layer 7 PA items from the unified registry: ALL PRESENT
  - 23/23 ORCHESTRATOR items
  - 14/14 PA-AUDITOR items
  - 12/12 GATE-RUNNER items
  - 4/4 PIPELINE-META items
- 10/10 council Category B rerouted items: ALL PRESENT
- 33 additional VALUES|PA-AUDITOR items: ALL ACCOUNTED FOR

**Council verdict compliance:** 5/5 rulings COMPLIANT (CF-02, CF-04, Pattern 5 Cat B, Contradiction C, CCS research construct)

**PA-05 rubric completeness:** ALL components present (core question, 5 dimensions, 4 sub-criteria, 3 PA-05c sub-dimensions, scoring table, 1-4 scale, primary metric status, CCS relationship)

**9-auditor deployment:** FULLY SPECIFIED (65 questions verified across 9 auditors, sums correct)

### 1.2 Issues Flagged

**ISSUE 1 (LOW): "12 VALUES items" count discrepancy.**
The artifact header says "12 VALUES ITEMS REROUTED TO PA-AUDITOR" but the council Category B actually lists 10 items. The artifact counts 12 rows in its first table by including items from extract-d09-d11.md that were PA-AUDITOR from initial classification, not council-rerouted. The buddy calls this "framing imprecision, not an error" -- the items are present and correctly routed regardless.

**ISSUE 2 (NEGLIGIBLE): AP-04 Scale Collision absent from Part 8 anti-pattern table.**
AP-04 is a GATE-RUNNER-detectable anti-pattern (not PA-detectable), so its exclusion from Part 8's perceptual-judgment table is a correct design decision. It does appear in Part 12 registry.

**ISSUE 3 (LOW): Part 7 expanded beyond council Category B.**
Part 7 lists 25 items (not the 10 from council Category B). The extra items are all correctly PA-AUDITOR routed in the registry -- over-inclusion for completeness.

**ISSUE 4 (NEGLIGIBLE): ITEM 77 ship threshold cross-layer overlap.**
ITEM 77 is classified GATES|ORCHESTRATOR in the registry but included in the PA artifact's Part 10 and Part 12. The artifact transparently labels this as "Ship Threshold Items (Overlap with GATES Layer)."

### 1.3 What Was NOT Flagged (Notable Absences)

The buddy review found ZERO issues with:
- Question quality or wording
- Auditor assignment optimality
- Scoring rubric calibration
- Tier 5 question design
- The emotional arc assessment framework
- Fresh-eyes protocol completeness
- Perception threshold table accuracy
- Quantitative guardrails correctness

This is notable because the buddy was verifying COMPLETENESS (are all items present?) rather than QUALITY (are the questions well-designed?). The buddy did not evaluate whether PA questions are answerable from screenshots, whether scoring criteria are operationally useful, or whether the 65 questions have redundancy.

### 1.4 Buddy Review Strengths Highlighted

The buddy specifically praised:
1. Exhaustive Part 12 registry (88 items tracked) with full provenance chain
2. Emotional arc assessment (Part 6) correctly implementing Contradiction C synthesis
3. Fresh-eyes protocol (Part 13) as a valuable addition beyond registry requirements
4. Perception threshold table (Appendix A) and quantitative guardrails (Appendix B) giving auditors concrete calibration
5. Anti-pattern awareness (Part 8) with revision degradation warnings
6. Applied/Composed mode detection (Part 11) adding diagnostic depth

---

## 2. Cross-Artifact PA Gaps

### 2.1 PA Questions That Should Exist But Do Not

From reading ALL buddy reviews and the council verdict, I identified several assessment dimensions that lack dedicated PA questions:

**Gap 1: Accessibility audit question.**
The identity artifact includes focus-visible styling (ITEM 69, D15-D17), skip-link presence (ITEM 70, D15-D17), and the gate runner has binary checks for these (GR-01 through GR-10). But NO PA question asks auditors to evaluate the perceptual experience of accessibility features. Can the skip link be found visually? Do focus indicators feel designed or bolted-on? Does the heading hierarchy create a logical scan path for screen readers? The gate runner checks PRESENCE; the PA should check QUALITY.

**Gap 2: Component library adoption question.**
The builder recipe (artifact-builder-recipe.md) specifies component adoption targets ("aim for 8+ from components.css"). The gate runner can count adoptions. But no PA question evaluates whether adopted components feel INTEGRATED into the page's visual language or feel like foreign imports. PA-19 ("element from a different website") partially addresses this but from a general inconsistency angle, not specifically about component-context coupling.

**Gap 3: Typography hierarchy question beyond readability.**
PA-02, PA-06, PA-07, PA-08, and PA-29 all address readability/comfort. PA-56 detects sub-perceptual tracking. But no question asks: "Does the typographic scale create a clear information hierarchy? Can you identify 3+ levels of importance from type size/weight alone?" This is distinct from readability -- it is about hierarchy as a compositional tool.

**Gap 4: Builder self-evaluation correlation question.**
The builder recipe includes Phase 5 "SELF-EVALUATE" where the builder assesses its own work. The PA protocol has no mechanism to compare the builder's self-assessment against PA findings. This is not a PA question per se, but the Weaver could receive the builder's conviction statement and flag discrepancies.

**Gap 5: Print/degraded-mode question.**
The emotional arc assessment mentions "print-specific styling" as a DELIGHT signal (ITEM 010-014, D21-D25). But no PA question evaluates degraded-mode experience. This is low priority but noted for completeness.

### 2.2 PA Questions That Cannot Be Answered From Screenshots Alone

The Three Laws of PA state: (1) answer must require a screenshot, (2) answer must be describable in plain language, (3) a non-designer must be able to validate the answer.

**Problematic questions:**

**PA-23: "What breaks if you resize 200px narrower?"**
This requires INTERACTIVE testing -- shrinking the viewport. Screenshots are captured at fixed widths (1440px, 1024px, 768px). Auditor H can compare across the three viewport sets but cannot answer "what breaks at 1240px" or "what breaks at 568px." The question implicitly requires Playwright access the auditor does not have. RECOMMENDATION: Rewrite to "At 768px, does anything look broken, truncated, or overlapping that worked at 1440px?"

**PA-25: "If you covered the header, could you identify the design system?"**
This requires knowledge of the design system -- the auditor would need to know what the design system looks like to answer this. Fresh-eyes auditors have zero context. They cannot identify a design system they have never seen. RECOMMENDATION: Rewrite to "If you covered the header, does the rest of the page still feel like a cohesive design?" (This preserves the intent -- testing whether identity is distributed throughout -- without requiring design system knowledge.)

**PA-26: "Is any convention CAUSING a visual problem?"**
This requires knowledge of conventions. Fresh-eyes auditors do not know what is a "convention" versus a one-off design choice. RECOMMENDATION: Rewrite to "Is there any element that looks wrong but seems intentional -- like a rule is forcing a bad outcome?"

**PA-27: "Designing from scratch, would you design it this way?"**
This is valid for a designer audit but problematic for LLM auditors. An LLM has no personal design practice to compare against. The question works as a gestalt prompt but the answer is unfalsifiable. LOW PRIORITY -- the question is useful as a creativity prompt even if the answer is subjective.

**PA-63 (Tier 5): "Does its internal design echo the page's overall design language at a smaller scale? Then find the SAME component type in a different section -- does it adapt to its surroundings, or look identical?"**
This requires the auditor to (a) zoom into a component, (b) analyze its internal structure, (c) find another instance of the same component. From screenshot images, zooming is limited. The auditor can describe what they see at screenshot resolution but cannot inspect fine detail. PARTIALLY ADDRESSABLE -- high-resolution screenshots help, but this question pushes the limits of screenshot-based auditing.

### 2.3 Overlap with Gate Checks (Redundancy Analysis)

Several PA questions overlap with gate runner checks:

| PA Question | Gate Check | Redundancy Level |
|-------------|-----------|-----------------|
| PA-09 (dead space) | GR-13, GR-14 (stacked gap <=120px/150px) | MODERATE -- PA adds perceptual severity; gate checks binary threshold |
| PA-50 (blank viewports) | GR-14 (total stacked gap) | HIGH -- nearly identical check, different unit (viewports vs pixels) |
| PA-51 (content %) | Implicit in GR-14 | MODERATE |
| PA-53 (container width) | GR-03 (940-960px) | HIGH -- identical dimension, different framing |
| PA-55 (zone differences) | GR-11 (>=15 RGB), GR-12 (>=0.025em) | MODERATE -- PA checks perceptibility; gate checks threshold |
| PA-56 (tracking difference) | GR-12 (>=0.025em letter-spacing) | HIGH -- same property, different detection method |

The redundancy is BY DESIGN per the council's dual-route mandate. Gates check binary thresholds; PA checks perceptual reality. A zone background might pass GR-11 (16 RGB delta) but fail PA-55 (auditor cannot perceive the difference in warm tones where 20 RGB is the effective threshold). This dual-route catches false positives from gates.

However, PA-50 and PA-53 add very little perceptual value beyond the gate check. The gate measures the exact same thing (blank space proportion, container width) with higher precision than a visual estimate. RECOMMENDATION: Consider demoting PA-50 and PA-53 to "verify gate results" addenda rather than standalone questions, freeing Auditor C's 14-question load.

### 2.4 Contradictions with Other Artifacts

**Contradiction 1: PA question count discrepancy across artifacts.**
- artifact-pa-protocol.md: 65 questions (54 standard + 2 sub-perceptual + 9 Tier 5)
- PA skill enrichment changelog: 59 questions (50 standard + 9 Tier 5) -- this was the SKILL.md count as of 2026-02-20
- PA skill enrichment report: 65 questions -- this was the count AFTER the second round of enrichments
- artifact-pa-protocol.md auditor table sums: A=7, B=6, C=14, D=8, E=6, F=6, G=7, H=5, I=6 = 65 VERIFIED
- MANIFEST Section 2 Agent Roster: A=7, B=6, C=14, D=8, E=6, F=6, G=7, H=5, I=6 = 65 MATCHES

The question count is currently consistent at 65 across the PA protocol artifact and the MANIFEST. The enrichment files document the history of how it grew from 48 to 57 to 59 to 65.

**Contradiction 2: Auditor assignments differ between PA protocol and earlier enrichment changelogs.**
The PA enrichment changelog (2026-02-20) has:
- Auditor B: PA-02, 06, 07, 08, 29, 70 [6 Qs] -- MATCHES protocol
- Auditor D: PA-12, 13, 34, 35, 36, 69 + T5: PA-62 [7 Qs] -- protocol shows 8 Qs (adds PA-70)

Wait -- the PA protocol assigns PA-70 to Auditor D (Flow+Pacing), but the enrichment changelog says PA-70 was assigned to Auditor B (Readability+Typography). Let me verify.

Protocol Part 3.8: "PA-69, PA-70" -- both assigned to Auditor D.
Enrichment changelog: "PA-70 assigned to Auditor B."

This is a REAL CONTRADICTION. The enrichment changelog assigned PA-70 to Auditor B (as "Content-Form Coupling" -- a typography/density question). The protocol artifact later reassigned it to Auditor D (Flow+Pacing). The MANIFEST follows the protocol (D gets 8 questions).

IMPACT: The enrichment changelog's reasoning was that PA-70 is a density/typography question better suited to Auditor B (who had the lightest load at 5 questions). The protocol's reassignment to D means B stays at 6 and D goes to 8, creating load imbalance. D already has the third-highest load. The original Auditor B assignment was arguably better from both a thematic and load-balancing perspective. RECOMMENDATION: Reassign PA-70 back to Auditor B per the enrichment changelog's original reasoning.

**Contradiction 3: Integrative Auditor role description.**
- PA protocol Part 4.4: "The Integrative Auditor has NO assigned questions."
- MANIFEST Section 2: "Synthesize 9 auditor reports + gestalt impression, score PA-05"
- PA protocol Part 4.5 (Weaver): "reads ALL 10 auditor reports (9 PA auditors + 1 Integrative)"

The question is: does the Integrative Auditor produce the PA-05 score, or does the Weaver? The protocol says the Weaver produces "PA-05 Score" (first listed output). The MANIFEST says the Integrative Auditor produces "PA-05 score + verdict recommendation." This is a FUNCTIONAL CONTRADICTION about who owns PA-05 scoring.

RECOMMENDATION: The protocol's design (Weaver scores PA-05) is more defensible because the Weaver has access to gate results AND all auditor reports AND the integrative synthesis. The Integrative Auditor should produce a gestalt impression and identify cross-cutting patterns, NOT score PA-05. The MANIFEST should be corrected.

---

## 3. Council Verdict PA Impact

### 3.1 CF-02: Compositional Critic Removed -- PA is PRIMARY

The council ruled that the Compositional Critic has N=0 evidence and is EXPERIMENTAL. The PA auditor is now the PRIMARY quality check. This has profound implications:

**Before CF-02:** The Compositional Critic was supposed to mediate between build passes, check emotional arc, and provide compositional feedback. The PA was a verification layer after the Critic's work.

**After CF-02:** The PA carries the ENTIRE burden of quality assessment. There is no upstream compositional check. The builder produces output, and the PA judges it cold.

**Impact on question quality:** PA questions must now cover compositional assessment that was previously the Critic's domain. This is partially addressed by Tier 5 questions (PA-60 through PA-68) and the emotional arc assessment (Part 6). But the questions were designed as VERIFICATION questions ("does this exist?") not as DIAGNOSTIC questions ("why does this fail?"). The Weaver's fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) attempts to bridge this gap, but the underlying PA questions do not provide enough compositional diagnostic data for the Weaver to distinguish STRUCTURAL from COMPOSITIONAL failures.

**Specific gap:** No PA question asks "Why does this feel [flat/assembled/composed/designed]? What specific visual relationship creates or destroys that impression?" The Weaver needs this to produce useful REFINE/REBUILD guidance. Currently, PA questions identify symptoms (monotonous rhythm, dead space, inconsistent elements) but do not diagnose root causes (missing multi-coherence, absent metaphor, broken density arc).

### 3.2 Contradiction C: Emotional Arc -- EMERGENT, Not Specified

The council ruled that emotional arc is emergent, disposition-emotion links are DESIGN INTENTIONS (not guarantees), and PA assesses emotional arc post-build.

**Impact on questions:** Part 6 maps 6 existing PA questions to 4 emotional registers:
- PA-35 --> overall arc shape (interest peaks/valleys/fades)
- PA-36 --> SURPRISE placement (dramatic visual moment)
- PA-13 --> CLOSURE (clear visual ending)
- PA-45 --> DELIGHT (single moment to show someone)
- PA-05a sub-criterion DESIGNED --> AUTHORITY
- PA-47 --> late-page SURPRISE

This mapping is INDIRECT. No question directly asks "Does this page build to something?" or "Does the ending feel earned by the journey?" PA-13 asks about a "clear visual ending" which is about PRESENCE, not about EARNED quality. The protocol compensates by having the Weaver synthesize across questions, but the raw auditor data for emotional arc assessment is thin.

**Recommendation:** Add one direct emotional arc question: "Scroll from top to bottom at reading speed. Does the visual journey have a shape -- building, peaking, resolving -- or does it feel like the same room repeated?" Assign to Auditor A (Impression + Emotion). This gives the Weaver direct data for the emotional arc synthesis instead of inferring it from five tangential questions.

### 3.3 Pattern 5: 12 VALUES Items Rerouted TO PA

The council rerouted quality tier definitions from GATE-RUNNER to PA-AUDITOR. These items (ITEM 36-61 from d09-d11, ITEM 22-45 from d18-d20) give the PA auditor context for tier classification.

**Impact:** The PA auditor now has tier framework knowledge (FLOOR/MIDDLE/CEILING/FLAGSHIP definitions with mechanism counts, CSS line targets, PA-05 ranges). This is useful for the WEAVER but potentially dangerous for individual auditors. If Auditor A knows the target is "PA-05 >= 3.5" they may anchor their scoring. If Auditor C knows "12-15 mechanisms = CEILING tier," they may count mechanisms instead of assessing spatial balance.

**Current protection:** The fresh-eyes principle (Part 13) prohibits giving auditors tier information. The rerouted items go to the PA ARTIFACT, not to individual auditors. The Weaver receives tier context; auditors do not.

**Risk:** If the Weaver's tier context leaks into auditor prompts (e.g., orchestrator accidentally includes tier definitions in auditor spawn), the entire fresh-eyes principle breaks. RECOMMENDATION: The protocol should explicitly state that rerouted tier definitions are WEAVER-ONLY context, not available to individual auditors A-I.

### 3.4 How These Rulings Affect Question Quality

The net effect of CF-02 + Contradiction C + Pattern 5 is:

1. **PA questions bear more weight than originally designed for.** They were designed as verification questions for a pipeline with a Compositional Critic. Now they are the sole quality assessment.

2. **The diagnostic gap is the biggest quality issue.** Questions detect problems but do not diagnose causes. The Weaver must infer causes from symptom patterns, which is unreliable.

3. **Emotional arc assessment is under-questioned.** Six indirect questions mapped to four registers is thin coverage for what the council declared "emergent and primary."

4. **Tier context is correctly firewalled** but the firewall is not explicitly documented in the protocol. It exists by convention (fresh-eyes) not by specification (explicit "Weaver-only" label on tier items).

---

## 4. PA Protocol vs Pipeline Execution Reality

### 4.1 Are the 9-Auditor Assignments Optimal?

**Load analysis:**

| Auditor | Questions | Load Rank |
|---------|-----------|-----------|
| C (Spatial + Proportion) | 14 | HIGHEST |
| D (Flow + Pacing) | 8 | 2nd |
| A (Impression + Emotion) | 7 | 3rd (tied) |
| G (Metaphor + Ideology) | 7 | 3rd (tied) |
| B (Readability + Typography) | 6 | 5th (tied) |
| E (Grid + Layout) | 6 | 5th (tied) |
| F (Consistency + Rhythm) | 6 | 5th (tied) |
| I (Cross-Page + Adversarial) | 6 | 5th (tied) |
| H (Responsiveness) | 5 | LOWEST |

**Auditor C is overloaded at 14 questions** -- more than double the median (6). Auditor C covers: PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33 (Spatial), PA-50, PA-51, PA-52, PA-53 (Void Prevention), PA-55 (Sub-perceptual), PA-64, PA-66 (Tier 5). This auditor carries the entire spatial assessment burden PLUS void prevention PLUS two Tier 5 questions.

**Risk:** Auditor C may produce less thorough answers per question due to volume. Spatial assessment requires careful viewport-by-viewport analysis -- rushing through 14 questions degrades quality on ALL spatial findings. The catastrophic whitespace void in the Flagship experiment (which 9/9 auditors flagged but which was THE dominant failure) was primarily Auditor C's domain. If C's analysis is shallow due to overload, the pipeline's most important failure detection is compromised.

**Recommendation:** Split Auditor C into two roles:
- **C1 (Spatial Balance):** PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-55 (8 questions)
- **C2 (Void Prevention + Tier 5):** PA-50, PA-51, PA-52, PA-53, PA-64, PA-66 (6 questions)

This requires 10 PA auditors + 1 Integrative + 1 Weaver = 12 agents (up from 11). The cost increase is one additional Opus agent spawn (~$5-15) for significantly better coverage of the pipeline's most critical failure mode.

**Auditor H is thematically narrow.** Only 5 questions, all about responsiveness. At 768px this is critical but auditor H has no work at 1440px (the primary evaluation viewport). Consider giving H an additional general-impression question at 1440px to avoid wasted assessment capacity.

### 4.2 Is the Integrative Auditor Doing What It Should?

The protocol specifies the Integrative Auditor:
- Receives ALL screenshots
- Writes a free-form gestalt impression
- Identifies cross-cutting patterns
- Flags issues individual auditors miss

**Problem:** The MANIFEST says the Integrative Auditor "score[s] PA-05" but the protocol says the Weaver produces "PA-05 Score." This role confusion means the Integrative Auditor's actual job is ambiguous. In practice (based on previous pipeline executions documented in MEMORY.md), the Integrative Auditor has been used to synthesize and the Weaver to verdict.

**The real question is: does the Integrative Auditor add value beyond what the Weaver could do?** The Weaver already reads all 9 reports. If the Integrative Auditor just summarizes what 9 auditors already said, it is a compression step, not an insight step. The Integrative Auditor's value comes from reading SCREENSHOTS (which the Weaver does not) and having NO assigned questions (which frees it for gestalt assessment).

**Recommendation:** Clarify the Integrative Auditor's role as: (1) produce a free-form gestalt impression from SCREENSHOTS (not reports), (2) identify any issue NOT raised by any of the 9 auditors, (3) assess emotional arc using the 4-register framework. The Integrative Auditor should NOT score PA-05 -- that is the Weaver's job. This preserves the Integrative Auditor's unique value (fresh impression from screenshots, not filtered through structured questions) while avoiding role confusion.

### 4.3 Is the Weaver Producing the Right Outputs?

The protocol specifies 6 Weaver outputs:
1. PA-05 Score (1-4 with sub-criteria)
2. Tier 5 Score (0-9 YES count)
3. Combined Verdict (from PA-05 x Tier 5 matrix)
4. Top-5 Fixes (MECHANICAL/STRUCTURAL/COMPOSITIONAL)
5. Ship Decision (SHIP/SHIP WITH FIXES/REFINE/REBUILD)
6. Emotional Arc Assessment

**Assessment:** This is comprehensive. The fix-type classification (Output 4) is particularly important because it determines whether a REFINE pass can succeed (MECHANICAL fixes) or whether REBUILD is needed (COMPOSITIONAL fixes).

**Gap:** The Weaver produces TWO outputs per the MANIFEST: (a) diagnostic verdict for orchestrator, (b) artistic impression for potential REFINE/REBUILD builder. The artistic impression uses generative language ("the middle sags -- energy dissipates by S5") rather than gate language ("SC-09 FAILED: stacked gap 210px"). This dual-output design is excellent -- it matches the finding that recipe language produces DESIGNED output while checklist language produces FLAT output.

**Problem:** The Weaver's calibration references (multi-coherence scale, severity scale, metaphor expression spectrum) are useful but introduce a subtle bias. When the Weaver reads "STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED" for metaphor expression, it may anchor on these categories rather than describing what the page actually does. RECOMMENDATION: Frame calibration references as AFTER-THE-FACT classification tools, not evaluation rubrics. "First describe what you observe, THEN classify using the reference scales."

### 4.4 Disconnects Between Spec and Reality

**Disconnect 1: Question count evolution.**
The protocol specifies 65 questions, but the PA SKILL.md went through at least three enrichment rounds. The enrichment changelog documents 57->59 and the enrichment report documents 63->65. The protocol artifact was written AFTER all enrichments, so it reflects the final count. But if the SKILL.md is the file auditors actually read, and the protocol artifact is the file the orchestrator reads, there could be drift. Both must be synchronized.

**Disconnect 2: Screenshot capture spec vs practice.**
The protocol specifies "cold look + scroll-through at 80% viewport-height steps" at 3 viewports. MEMORY.md documents that the Mode 4 PA in the ceiling experiment used "102 screenshots, 9 agents parallel, zero contention." 102 screenshots across 3 viewports = ~34 per viewport. At 80% viewport steps on a typical 5000px page, that is ~7 scroll screenshots per viewport. 7 x 3 + 3 cold looks = 24. Where do the other 78 come from? Either the practice exceeds the spec (more screenshots than specified) or the 102 number includes additional detail shots. The protocol should be specific about EXPECTED screenshot count per page length.

**Disconnect 3: "All PA auditors must be Opus" vs cost reality.**
The protocol (Part 4.3) and MANIFEST (Appendix F) both mandate Opus for all PA auditors. With 9 auditors + 1 Integrative + 1 Weaver = 11 Opus agents in Phase 3 alone, this is the most expensive phase. The council ruled Opus = "STRONG RECOMMENDATION, not non-negotiable" for the builder, but the PA protocol says "MUST be Opus" for auditors without the council's softened language. RECOMMENDATION: Align PA auditor model requirement with council language: "STRONG RECOMMENDATION" not "MUST."

---

## 5. Enrichment History

### 5.1 Enrichments Applied and Verified

Two enrichment rounds are documented:

**Round 1 (skill-surgery, 2026-02-20): 10 enrichments to PA SKILL.md**

| ID | Description | Status |
|----|-------------|--------|
| PA-ENRICH-01 | Perception threshold reference table | APPLIED |
| PA-ENRICH-02 | PA-68 Tier 5 scoring verification | VERIFIED (no changes needed) |
| PA-ENRICH-03 | 15 RGB canonical threshold | APPLIED (embedded in ENRICH-01) |
| PA-ENRICH-04 | S-09 stacking check (120px) | APPLIED |
| PA-ENRICH-05 | Channel activation vs deployment distinction | APPLIED |
| PA-ENRICH-06 | Coherence magnitude check | APPLIED |
| PA-ENRICH-07 | Sub-perceptual CSS detection (PA-55, PA-56) | APPLIED -- 2 new questions |
| PA-ENRICH-08 | Fix-type classification in Weaver | APPLIED |
| PA-ENRICH-09 | Metaphor failure root-cause diagnosis | APPLIED |
| PA-ENRICH-10 | Coherence ARC detection (4 arc types) | APPLIED |

Result: 63 -> 65 questions, 880 -> 993 lines

**Round 2 (pipeline-surgery, 2026-02-20): 5 enrichments to PA SKILL.md**

| # | Description | Status |
|---|-------------|--------|
| 1 | Screenshot-Reading Protocol | APPLIED (+18 lines) |
| 2 | Weaver Protocol (6-section replacement) | APPLIED (+62 net) |
| 3 | Tier 5 Question Detail Merge | APPLIED (+48 net) |
| 4 | TC-Aware Auditing Guidance | APPLIED (+39 lines) |
| 5 | PA-69 + PA-70 New Questions | APPLIED (+16 lines) |

Result: 987 -> 1,208 lines, 57 -> 59 questions

NOTE: The two rounds appear to have been executed by different agents with partially overlapping scope. Round 1 added PA-55 and PA-56 (sub-perceptual detection). Round 2 added PA-69 and PA-70 (pipeline integration). The final PA SKILL.md incorporates both rounds. The enrichment changelog (Round 2) starts from 987 lines with 57 questions; the enrichment report (Round 1) starts from 880 lines with 63 questions. These are clearly DIFFERENT starting points, suggesting the rounds operated on different file states or that the "before" counts reference different baselines. The final artifact (65 questions, ~1,208 lines) appears correct.

### 5.2 Enrichments Proposed But NOT Applied

From the enrichment research documents, several items were proposed but not applied:

1. **PA-57 (merged into PA-56):** Originally a separate micro-typography detection question. Merged into PA-56 to avoid question proliferation.

2. **Explicit diagnostic questions:** The pa-sufficiency-audit and pa-metacognitive analyses both flagged the diagnostic gap (PA detects symptoms but not causes). No diagnostic questions were added -- the gap was addressed by enriching the WEAVER protocol rather than adding auditor questions. This was a deliberate design choice: auditors should not diagnose (they lack context), the Weaver should diagnose (it has all reports + gate data).

3. **Content-form coupling as a standalone tier:** Some research proposed elevating content-form coupling to a full Tier (like Tier 5 for compositional depth). Instead, PA-70 was added as a Tier 2 question. The decision was correct -- creating a new tier would require threshold recalibration across all existing tiers.

4. **Auditor C load rebalancing:** The overload was identified but not addressed. The enrichment agents added PA-55 to Auditor C (bringing it from 13 to 14), worsening rather than improving the load problem.

### 5.3 Gaps Remaining from Enrichment Work

1. **Auditor C overload (14 questions):** Identified, not addressed.
2. **PA-70 auditor assignment contradiction:** Enrichment changelog says Auditor B, protocol says Auditor D. Unresolved.
3. **Diagnostic gap:** Enriched Weaver protocol helps but individual auditors still produce symptom-only data.
4. **Emotional arc under-coverage:** Enrichments added TC-aware auditing guidance and coherence ARC detection, but no direct emotional arc question was added.
5. **Accessibility quality question:** Not addressed in either enrichment round.
6. **PA-23 screenshot-answerable rewrite:** Not addressed. The question still requires interactive viewport resizing.
7. **PA-25 design-system knowledge requirement:** Not addressed. Still requires knowledge auditors do not have.
8. **PA-26 convention knowledge requirement:** Not addressed. Still requires knowledge auditors do not have.

---

## 6. Recommendations

### 6.1 PA Questions That Need Rewriting

**PA-23 (Responsiveness -- Auditor H):**
- CURRENT: "What breaks if you resize 200px narrower?"
- PROPOSED: "At 768px, does anything look broken, truncated, or overlapping compared to the 1440px layout? At what point between viewports does the layout feel most strained?"
- REASON: Cannot be answered from fixed-width screenshots without interactive testing.

**PA-25 (Cross-Page -- Auditor I):**
- CURRENT: "If you covered the header, could you identify the design system?"
- PROPOSED: "If you covered the header, would the remaining page still feel like it belongs to a cohesive design family? Does the identity persist throughout, or only in the header?"
- REASON: Requires design system knowledge that fresh-eyes auditors do not have.

**PA-26 (Architectural Challenge -- Auditor I):**
- CURRENT: "Is any convention CAUSING a visual problem?"
- PROPOSED: "Is there any element that looks wrong but seems intentional -- as if a rule is forcing a bad outcome? Point to it."
- REASON: Requires knowledge of which elements are conventions vs one-off choices.

**PA-50 (Void Prevention -- Auditor C):**
- CURRENT: "Count viewport-heights where < 30% is content. How many consecutive blank viewports?"
- PROPOSED: Demote from standalone question to verification note: "Cross-reference with GR-14 gate result. If gate passed but you perceive a void, flag as FALSE NEGATIVE."
- REASON: Near-identical to gate check GR-14. Frees one question from Auditor C's overloaded 14-question set.

**PA-53 (Void Prevention -- Auditor C):**
- CURRENT: "At 1440px, does the container use 65-80% of horizontal space, or feel like a narrow strip?"
- PROPOSED: Demote from standalone question to verification note: "Cross-reference with GR-03 gate result. If gate passed but the page feels too narrow or too wide, flag as perceptual mismatch."
- REASON: Near-identical to gate check GR-03 (940-960px container). Frees another question from Auditor C.

### 6.2 PA Questions That Should Be Added

**PA-71: Emotional Arc Direct Assessment (NEW)**
- TEXT: "Scroll from top to bottom at reading speed. Does the visual journey have a shape -- building, peaking, resolving -- or does it feel like the same room repeated? Where is the peak? Does the ending feel earned?"
- AUDITOR: A (Impression + Emotion)
- REASON: Emotional arc is now PA-primary (CF-02) but no question directly assesses it. The Weaver currently infers arc from 5 tangential questions.
- TIER: 2 (Standard)

**PA-72: Accessibility Perceptual Quality (NEW)**
- TEXT: "Look for focus indicators, skip links, and heading hierarchy. Do they feel designed (integrated into the visual language) or bolted on (visible but stylistically foreign)?"
- AUDITOR: E (Grid + Layout)
- REASON: Gate runner checks accessibility PRESENCE; no PA question checks accessibility QUALITY.
- TIER: 2 (Standard)

**PA-73: Typographic Hierarchy as Composition (NEW)**
- TEXT: "Looking only at text sizes and weights (ignore color and spacing), can you identify 3 or more levels of importance? Does the hierarchy guide your reading order?"
- AUDITOR: B (Readability + Typography)
- REASON: Existing typography questions focus on readability/comfort but not on hierarchy as a compositional tool.
- TIER: 2 (Standard)

### 6.3 PA Questions That Should Be Removed

No questions should be fully removed. However, PA-50 and PA-53 should be DEMOTED from standalone questions to gate-verification notes, reducing Auditor C's load from 14 to 12. This is functionally a removal of 2 questions from the active question set.

### 6.4 How Auditor Assignments Should Change

**Reassign PA-70 to Auditor B (Readability + Typography).**
Per the enrichment changelog's original reasoning: PA-70 (content-form coupling) is a density/typography question better suited to Auditor B. The protocol's assignment to Auditor D creates unnecessary load imbalance.

**Split Auditor C into C1 and C2 (if budget allows):**
- C1 (Spatial Balance): PA-09, PA-10, PA-11, PA-30, PA-31, PA-32, PA-33, PA-55 (8 questions)
- C2 (Void Prevention + Tier 5): PA-52, PA-64, PA-66 (3 questions + 2 gate-verification notes for PA-50/PA-53)

**Revised load after all changes:**

| Auditor | Current | Proposed | Delta |
|---------|---------|----------|-------|
| A | 7 | 8 (+PA-71) | +1 |
| B | 6 | 7 (+PA-70, +PA-73) | +1 (net: PA-70 moves from D to B, PA-73 new) |
| C1 | 14 | 8 (split) | -6 |
| C2 | 0 (new) | 5 (3 questions + 2 notes) | +5 |
| D | 8 | 7 (-PA-70) | -1 |
| E | 6 | 7 (+PA-72) | +1 |
| F | 6 | 6 | 0 |
| G | 7 | 7 | 0 |
| H | 5 | 5 | 0 |
| I | 6 | 6 | 0 |

New total: 66 active questions + 2 gate-verification notes across 10 auditors + 1 Integrative + 1 Weaver = 12 agents.

### 6.5 Structural Changes to artifact-pa-protocol.md

**Change 1: Add explicit Weaver-only label on tier context.**
In Part 7 (12 VALUES Items Rerouted to PA-AUDITOR), add a WARNING box: "These tier definitions are for WEAVER use only. They MUST NOT be included in PA Auditor A-I prompts. The fresh-eyes principle (Part 13) prohibits tier context for individual auditors."

**Change 2: Clarify Integrative Auditor vs Weaver PA-05 scoring.**
In Part 4.4 (Integrative Auditor), explicitly state: "The Integrative Auditor does NOT score PA-05. The Integrative Auditor produces: (1) gestalt impression from screenshots, (2) cross-cutting patterns not caught by individual auditors, (3) emotional arc observation using the 4-register framework. PA-05 scoring is the WEAVER's responsibility."

**Change 3: Add a "Questions That Require Cross-Viewport Comparison" section.**
PA-21 through PA-23, PA-46 all require comparing behavior across viewports. Currently these questions are scattered across auditor assignments. Add a short section noting which questions require multi-viewport evidence and how auditors should structure their analysis (compare 1440px vs 768px side-by-side, then compare intermediate 1024px).

**Change 4: Add diagnostic vocabulary guidance for the Weaver.**
After Part 4.5, add a subsection: "Weaver Diagnostic Vocabulary." When classifying fixes as MECHANICAL/STRUCTURAL/COMPOSITIONAL, the Weaver should:
- MECHANICAL: Can be fixed by changing a CSS value. Evidence: auditor reports cite specific elements or properties.
- STRUCTURAL: Requires reorganizing zones, boundaries, or grid layouts. Evidence: auditor reports describe spatial relationship problems.
- COMPOSITIONAL: Requires re-invoking the tension-composition process. Evidence: auditor reports describe absence of unifying logic or metaphor.

**Change 5: Add Weaver calibration sequencing note.**
In Part 4.5, add: "Calibration references are CLASSIFICATION tools, not evaluation rubrics. The Weaver must FIRST describe observations in its own words, THEN classify using the reference scales. Reading the scales before reviewing auditor reports risks anchoring on categories rather than evidence."

**Change 6: Reconcile PA-70 assignment.**
Fix the PA-70 auditor assignment to match the enrichment changelog's original reasoning (Auditor B) or explicitly document why the protocol overrides that decision. Currently the discrepancy is undocumented.

---

## Summary of Findings

| Category | Count | Severity |
|----------|-------|----------|
| Buddy review issues found | 4 | All LOW/NEGLIGIBLE |
| Cross-artifact PA gaps identified | 5 | 2 SIGNIFICANT, 3 MINOR |
| Questions not answerable from screenshots | 5 | 2 SIGNIFICANT, 3 MINOR |
| Gate-PA redundancies | 6 | 2 HIGH (demote), 4 BY DESIGN |
| Cross-artifact contradictions | 3 | 1 SIGNIFICANT (PA-70 assignment), 1 MODERATE (Integrative role), 1 LOW (question count history) |
| Council verdict impacts | 4 rulings analyzed | 1 SIGNIFICANT gap (diagnostic questions), 1 MODERATE (emotional arc), 2 MINOR |
| Execution reality disconnects | 4 | 1 SIGNIFICANT (Auditor C overload), 3 MODERATE |
| Enrichment gaps remaining | 8 | 2 SIGNIFICANT, 6 MINOR |
| Questions recommended for rewrite | 5 | -- |
| Questions recommended for addition | 3 | -- |
| Questions recommended for demotion | 2 | -- |
| Structural changes recommended | 6 | -- |

**The PA protocol artifact is the highest-quality artifact in the VA extraction (cleanest buddy pass, most comprehensive coverage). Its primary weaknesses are operational rather than architectural: Auditor C overload, diagnostic gap for the Weaver, unclear Integrative Auditor role, and three questions that cannot be answered from screenshots alone. The 6 structural changes recommended above are all additive improvements that preserve the existing architecture.**

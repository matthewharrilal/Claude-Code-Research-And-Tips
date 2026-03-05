# PA Skill Enrichment Audit: Findings from Pipeline Surgery

**Author:** PA enrichment auditor (Opus 4.6)
**Date:** 2026-02-20
**PA Skill:** `~/.claude/skills/perceptual-auditing/SKILL.md` (1,208 lines post-enrichment-23)
**Surgery files audited:** 11 files (04, 05, 08, 09, 10, 16, 17, 19, 21, 23, 24)

---

## Methodology

For each finding from the 11 surgery files, I checked:
1. **What the surgery file says** (specific finding, recommendation, or discovery)
2. **Where in PA skill it would belong** (section, line range, adjacent content)
3. **Is it already there?** (YES = skip, PARTIAL = note what's missing, NO = candidate)
4. **Priority:** CRITICAL (PA produces wrong results without it), IMPORTANT (PA quality degrades), NICE-TO-HAVE (marginal improvement)

---

## Finding Inventory

### FINDING 1: PA-03, PA-24, PA-25 Unassigned to Any Mode 4 Auditor

**Source:** `10-pa-assignment-reconciliation.md` (Section 2, Discrepancy D-2)
**What it says:** Three standard PA questions are DEFINED in the PA skill but NEVER assigned to any Mode 4 auditor. PA-03 ("Does this feel like one designer made it, or three?") is a Tier 1 MANDATORY question. PA-24 and PA-25 are Tier 3 Cross-Page questions.
**Where in PA:** Mode 4 team structure (current line ~640-651) and question assignment lists
**Already there?** NO. The questions exist as definitions but are absent from all assignment tables. Confirmed across 18 files by the reconciliation report.
**Recommended assignment:** PA-03 to Auditor A (Impression+Emotion), PA-24 to Auditor F (Consistency+Rhythm), PA-25 to Auditor G (Metaphor+Ideology)
**Priority:** **CRITICAL** -- PA-03 is one of the original Mandatory Five. Every Mode 4 audit that runs without it misses a Tier 1 signal. The holistic audit (file 24) lists this as BLOCKING-05.

---

### FINDING 2: PA-68 Missing from Tier 5 Question Definition Section

**Source:** `10-pa-assignment-reconciliation.md` (Section 2, Discrepancy D-1)
**What it says:** PA-68 (Metaphor Spatial Coverage) exists in the Mode 4 team tree and in `flagship-pa-questions.md`, but the PA SKILL.md Tier 5 DEFINITION section still lists only 8 questions (PA-60 through PA-67) with /8 scoring thresholds. The Mode 4 section says 9 Tier 5 questions with /9 scoring. Internal contradiction.
**Where in PA:** Tier 5 section (current lines ~374-503)
**Already there?** PARTIAL. The `23-pa-enrichment-changelog.md` reports that PA-68 WAS merged into Tier 5 as part of Enrichment 3. However, the reconciliation report (written contemporaneously) says the Tier 5 section still uses /8 scoring. Verify whether the enricher actually updated the scoring thresholds from /8 to /9 throughout.
**What to verify:** (a) PA-68 full question text in Tier 5 section, (b) Tier 5 scoring table uses /9 not /8, (c) combined verdict matrix uses /9, (d) Tier 5 auditor assignment summary includes PA-68 on Auditor G.
**Priority:** **CRITICAL** -- Weaver receives conflicting scoring guidance (/8 vs /9) which causes incorrect Tier 5 verdicts. Listed as BLOCKING-04 in the holistic audit.

---

### FINDING 3: Weaver Protocol Fragmentation (2-Section vs 6-Section)

**Source:** `16-pa-sufficiency-audit.md` (BLOCKING 1, Recommendation 10)
**What it says:** The PA skill's weaver protocol had only 2 sections (PA-05 score + Tier 5 score). The build-page SKILL.md defines a 6-section protocol (PA-05, Tier 5, Top-5 Issues, Per-Question Matrix, Compositional Criteria, Verdict). If an auditor reads PA skill for weaver guidance, they get an incomplete spec.
**Where in PA:** Weaver protocol section (post-Mode 4 definitions)
**Already there?** YES -- per `23-pa-enrichment-changelog.md` Enrichment 2, the Weaver protocol was expanded to 6 sections and calibration references were added. This finding IS addressed.
**Priority:** N/A (already applied)

---

### FINDING 4: Screenshot-Reading Protocol for Pipeline Auditors

**Source:** `16-pa-sufficiency-audit.md` (BLOCKING 3)
**What it says:** The PA skill's visual auditing protocol describes Playwright-based screenshot capture. But pipeline auditors NEVER use Playwright -- they read PRE-CAPTURED screenshots via the Read tool. Auditors encounter workflow instructions they cannot follow.
**Where in PA:** After Mode 4 task graph, before Weaver Protocol
**Already there?** YES -- per `23-pa-enrichment-changelog.md` Enrichment 1, a Screenshot-Reading Protocol section was added (+18 lines).
**Priority:** N/A (already applied)

---

### FINDING 5: TC-Derivation Detection Guidance (Principled vs Ad-Hoc Composition)

**Source:** `16-pa-sufficiency-audit.md` (Recommendation 3), `09-pa-metacognitive-analysis.md` (Section 1)
**What it says:** Auditors lack vocabulary to distinguish compositions derived from a unifying organizational principle vs ad-hoc assembly. Without this, auditors cannot reliably distinguish the pipeline's core value proposition from generic competence. Principled composition signatures: visual decisions agree, organizing logic inferrable, transitions feel like chapters, components adapt. Ad-hoc signatures: contradictions, no inferrable logic, arbitrary transitions, static components.
**Where in PA:** After Metaphor Expression Spectrum, before Common Metaphor Traps
**Already there?** YES -- per `23-pa-enrichment-changelog.md` Enrichment 4, three subsections were added: Fresh-Eyes Detection (~10 lines), Detecting Principled vs Ad-Hoc Composition (~25 lines), Content-Form Coupling Detection (~4 lines).
**Priority:** N/A (already applied)

---

### FINDING 6: PA-69 (Multi-Coherence Dynamic Range) and PA-70 (Content-Form Coupling)

**Source:** `09-pa-metacognitive-analysis.md` (Section 4.1), `16-pa-sufficiency-audit.md` (Question Gap Analysis), `17-skill-interaction-analysis.md` (BLOCKING-3)
**What it says:** Two critical gaps in PA question coverage: (a) No question evaluates whether boundaries have VARIED intensity or uniform intensity (multi-coherence dynamic range); (b) No question detects whether visual treatment responds to content density (content-form coupling). Both are core pipeline failure modes.
**Where in PA:** After PA-48, before Tier 4
**Already there?** YES -- per `23-pa-enrichment-changelog.md` Enrichment 5, PA-69 and PA-70 were added as "Pipeline Integration" questions. PA-69 assigned to Auditor D (Flow+Pacing), PA-70 assigned to Auditor B (Readability+Typography).
**Priority:** N/A (already applied)

---

### FINDING 7: Weaver Calibration Tables (Multi-Coherence, Severity, Metaphor Spectrum)

**Source:** `09-pa-metacognitive-analysis.md` (Section 2, BLOCKING-01), `24-holistic-coherence-audit.md` (Section 5, data flow)
**What it says:** The Weaver synthesizes Tier 5 scores without calibration tables for multi-coherence quality levels, severity thresholds, or metaphor expression spectrum. When auditors describe "3 things changed simultaneously," the Weaver has no framework for translating this to DESIGNED vs COMPOSED. Currently the Weaver applies raw YES/NO, losing nuance. Calibration tables go to Weaver ONLY, not auditors (preserves fresh-eyes).
**Where in PA:** In the Weaver Protocol section, as "Weaver Calibration References"
**Already there?** YES -- per `23-pa-enrichment-changelog.md` Enrichment 2, three calibration reference tables were added to the Weaver section: multi-coherence scale (0-6 shifts), severity scale (viewport-heights), metaphor expression spectrum (STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED). Explicitly marked "for CLASSIFICATION, not perception."
**Priority:** N/A (already applied)

---

### FINDING 8: Fix Cycle Compositional Degradation -- PA's Role in Fix Routing

**Source:** `21-fix-cycle-analysis.md` (Section 4, Fix Type Classification)
**What it says:** Not all fixes are the same. TYPE A (mechanical: soul/accessibility), TYPE B (structural: boundary thresholds), TYPE C (compositional: metaphor expression, design direction). PA findings drive fix routing but the PA skill has no guidance on how auditor language maps to fix types. The Weaver's Top-5 Issues should include fix-type classification to prevent compositional fixes from being treated mechanically.
**Where in PA:** Weaver Protocol, Section 3 (Top-5 Issues)
**Already there?** PARTIAL. The Weaver protocol (Enrichment 2) includes "affected channel + scale + transition type" in the Top-5 Issues format. But there is no explicit fix-type classification (TYPE A/B/C). The Weaver does not classify findings as mechanical vs structural vs compositional.
**What's missing:** A brief instruction in the Weaver protocol's Top-5 Issues section telling the Weaver to classify each issue as MECHANICAL (exact CSS value wrong), STRUCTURAL (boundary threshold missed), or COMPOSITIONAL (design direction/metaphor expression). This classification feeds directly into the fix cycle's routing decisions.
**Priority:** **IMPORTANT** -- Without fix-type classification, the orchestrator treats all PA findings identically, causing compositional issues to receive mechanical fixes (which makes them worse). The fix-cycle analysis identifies this as the primary degradation mechanism.

---

### FINDING 9: Fix Cycle TC Brief Re-Invocation -- Weaver Should Flag Metaphor-Level Failures

**Source:** `21-fix-cycle-analysis.md` (Section 5), `17-skill-interaction-analysis.md` (BLOCKING-1, BLOCKING-2, E-PA-3)
**What it says:** When PA-44 (metaphor not structural) or PA-68 (metaphor fades in bottom third) FAIL, the Weaver should explicitly diagnose whether the root cause is: (A) builder implementation failure (labels instead of CSS), (B) metaphor inherently label-dependent (TC derivation failure), or (C) builder ran out of steam (coverage failure). Each routes differently. Currently the Weaver reports PA-44=NO without distinguishing these three causes.
**Where in PA:** Weaver Protocol, after verdict section or as part of Section 3 (Top-5 Issues)
**Already there?** NO. The Weaver protocol has no root-cause diagnosis for metaphor failures. The Weaver reports YES/NO on PA-44 and PA-68 but does not analyze WHY the failure occurred.
**What's needed:** Add to the Weaver protocol:
```
When PA-44 = NO or PA-68 = NO:
  ROOT CAUSE DIAGNOSIS (include in Top-5 if applicable):
  - If auditors describe visible CSS structure (bg shifts, border patterns, spacing
    compression) but labels dominate: IMPLEMENTATION failure -> route to builder
  - If auditors describe NO visible CSS differentiation: STRUCTURAL failure ->
    check if TC brief specified CSS directions. If yes: builder. If no: TC re-derivation.
  - If metaphor visible in top third but absent below: COVERAGE failure -> route
    to builder with instruction to extend to bottom zones
```
**Priority:** **IMPORTANT** -- Misrouted metaphor fixes are the highest-cost error in the fix cycle. A compositional failure treated as a mechanical fix wastes a cycle and may worsen the result. The skill-interaction analysis identifies this as BLOCKING for the TC-PA relationship.

---

### FINDING 10: Auditor C Overload (13 Questions)

**Source:** `09-pa-metacognitive-analysis.md` (Section 5), `10-pa-assignment-reconciliation.md` (Section 3)
**What it says:** Auditor C (Spatial+Proportion) has 13 questions -- 60% above the median load of ~6. Many of C's questions are measurement-heavy (counting viewports, estimating percentages). Cognitive fatigue risk on later-numbered questions.
**Where in PA:** Mode 4 auditor assignment table
**Already there?** PARTIAL. Both reports acknowledge the overload but classify it as "SIGNIFICANT but not blocking" because C's spatial domain is the broadest and splitting it across auditors would break domain coherence. The metacognitive report suggests optionally moving PA-52 from C to D.
**What's missing:** An explicit note in the PA skill that Auditor C has a heavy load and should be monitored for quality degradation on later questions. Alternatively, move PA-52 (visual weight distribution across thirds) to Auditor D (Flow+Pacing) since it is fundamentally a pacing question.
**Priority:** **NICE-TO-HAVE** -- The overload is acknowledged and manageable. Opus auditors handle 13 questions without significant degradation. Monitor in practice.

---

### FINDING 11: Content-Form Coupling as a Lens, Not Just a Question

**Source:** `16-pa-sufficiency-audit.md` (Recommendation 4c), `17-skill-interaction-analysis.md` (Section 6, Gap 1)
**What it says:** Content-form coupling detection was added as PA-70 (a question), but it should also be embedded as a general evaluation LENS in the metaphor-awareness principles. "Does the visual density of each section MATCH the analytical density of its content? Dense analysis = dense typography + tighter spacing. Overview content = generous spacing + lighter touch." This is broader than a single question -- it is a perceptual principle that influences how auditors answer PA-03, PA-05a, PA-20, PA-30, and PA-65.
**Where in PA:** After the "Detecting Principled vs Ad-Hoc Composition" section (already added in Enrichment 4)
**Already there?** PARTIAL. The `23-pa-enrichment-changelog.md` mentions "Content-Form Coupling Detection (~4 lines)" was added as part of Enrichment 4. However, the sufficiency audit and interaction analysis recommend it be more prominent -- not just 4 lines but a principle that auditors apply across multiple questions.
**What's missing:** Expand the content-form coupling detection from ~4 lines to ~10 lines, making it a named sub-section with the explicit instruction: "This is NOT a separate question. It is a lens for answering PA-03, PA-05a, PA-20, PA-30, PA-65. If visual density does not track content density, your PA-05a answer should lean toward 'assembled components.'"
**Priority:** **NICE-TO-HAVE** -- PA-70 catches the most egregious failures. The expanded lens would catch subtler ones but is not essential.

---

### FINDING 12: Mid-Build Perceptual Verification -- PA as Reference for Builder Self-Checks

**Source:** `08-remediation-lessons-xref.md` (GAP 1, BLOCKING)
**What it says:** The remediation succeeded partly because of embedded perceptual checkpoints DURING the build ("After zone backgrounds: can you see 3+ distinct color zones without a color picker?"). The pipeline defers all perceptual checking to post-build PA. The PA skill could provide simplified self-check questions for builders to use mid-build (Mode 1 equivalent), referenced from the build-page skill.
**Where in PA:** Mode 1 (Embedded) section
**Already there?** PARTIAL. Mode 1 already says "PA-01 through PA-05 answered in plain language" in 90 seconds. But it does not include a void check or perception-specific questions. The Tier 4 section includes an "Embedded Mode Integration" note (line ~372): "Builders running Mode 1 should add a void check: after answering PA-01 through PA-05, quickly scroll through and verify no 2+ consecutive blank viewport-heights exist."
**What's missing:** Expand Mode 1 to include 2-3 perception-specific checks that map to the remediation's embedded checkpoints:
1. "Can you see zone color differences without a color picker?" (maps to SC-09)
2. "Can you see at least 3 different structural elements (borders, dividers, callouts)?" (maps to SC-15)
3. "Are there any sections where you scroll through 2+ full screens of near-empty space?" (maps to PA-50)
These would give the builder a quick perceptual self-check that catches the flagship's dominant failure mode (imperceptible CSS) before post-build gates.
**Priority:** **IMPORTANT** -- The remediation lessons cross-reference identifies this as its single BLOCKING gap. The flagship's builder produced imperceptible CSS across multiple phases; mid-build checks would have caught this 10-20x cheaper than post-build PA. However, this is more of a build-page SKILL.md change than a PA skill change -- PA provides the reference questions, build-page embeds them in the builder's process.

---

### FINDING 13: Tier 5 Questions Need Richer Scoring Detail from flagship-pa-questions.md

**Source:** `16-pa-sufficiency-audit.md` (BLOCKING 2), `10-pa-assignment-reconciliation.md` (Section 2)
**What it says:** The separate `flagship-pa-questions.md` has MORE DETAILED scoring criteria than the PA skill for Tier 5 questions. Example: PA-60 in the separate file says "Middle pages have 0-1; Flagship needs >= 5 distributed across all scroll thirds" while the PA skill version is less specific. Auditors reading only the PA skill get less detailed guidance.
**Where in PA:** Tier 5 section (lines ~374-503)
**Already there?** YES -- per `23-pa-enrichment-changelog.md` Enrichment 3, the Tier 5 question detail was merged from the separate file into the PA skill with richer scoring rubrics per question.
**Priority:** N/A (already applied)

---

### FINDING 14: CSS Budget Misallocation Detection

**Source:** `08-remediation-lessons-xref.md` (GAP 2, SIGNIFICANT), `05-root-cause-coverage.md` (RC-8)
**What it says:** The flagship spent 23.7% of CSS on invisible micro-typography. PA has no question that detects CSS budget misallocation -- a page with elaborate typography and zero structural variety passes all PA questions if it "looks good" in a gestalt sense. SC-14 prevents sub-perceptual CSS but does not prevent UNDER-ALLOCATION to structural variety.
**Where in PA:** This would be a new question or lens
**Already there?** PARTIAL. PA-60 (design moment density) partially catches this by requiring >= 3 distinct design moments. PA-17 (rhythm) catches uniform pacing. PA-41 (repetition monotony) catches repeated patterns. But none specifically asks "is there structural variety -- borders, dividers, grids, callouts -- or is this page all typography?"
**What's missing:** The PA skill does not have a question specifically about STRUCTURAL VARIETY (presence of borders, grids, callouts, component types). This is covered by the gate runner (SC-08: >= 8 component types, SC-15: >= 3 border configs) but not by PA. A PA question would catch the case where structural elements exist but are visually imperceptible (passing gates but failing perception).
**Priority:** **NICE-TO-HAVE** -- Gates SC-08 and SC-15 enforce structural presence programmatically. PA-60 catches design moment density. The marginal value of a dedicated structural-variety PA question is low given existing coverage.

---

### FINDING 15: Coherence ARC Detection

**Source:** `16-pa-sufficiency-audit.md` (Recommendation 4a)
**What it says:** No PA question explicitly asks about compositional JOURNEY -- whether visual complexity builds, peaks, and resolves across scroll depth. PA-35 (engagement decay) and PA-52 (thirds distribution) approach this but do not directly ask "does complexity follow an arc?" The sufficiency audit proposes a "Coherence ARC Detection" evaluation guidance section.
**Where in PA:** After multi-coherence evaluation, before Visual Auditing Protocol
**Already there?** NO. No coherence ARC detection guidance exists in the PA skill. PA-35 asks about engagement fade, PA-52 asks about designed moments per third, but neither frames the evaluation as detecting a compositional journey (BUILD-PEAK-RESOLVE vs SUSTAINED vs FRONT-LOADED vs RANDOM).
**What's needed:** Add ~20 lines of evaluation guidance describing the 4 ARC types and how to detect them. This is NOT a new question but a lens for answering PA-35, PA-52, PA-62, and PA-65. The sufficiency audit provides draft content.
**Priority:** **IMPORTANT** -- The flagship's most severe failure mode was front-loaded visual interest (all design in first third, remainder monotone). The ARC detection guidance would give auditors vocabulary to describe this precisely rather than vaguely noting "the page loses interest."

---

### FINDING 16: Mechanism Category Breadth Has Zero PA Detection

**Source:** `17-skill-interaction-analysis.md` (Section 1, Row 10; Section 2, Aggregate Coverage)
**What it says:** TC mandates per-category mechanism minimums (Spatial 1+, Hierarchy 1+, Component 1+, Depth/Emphasis 1+, Structure/Navigation 1+). PA has NO question that detects whether all 5 categories are represented. A page with 15 mechanisms all from Hierarchy and Component categories would pass all PA questions.
**Where in PA:** This would be a new question
**Already there?** NO. PA measures visual impression, not mechanism taxonomy. This is by design -- PA should react to perception, not catalog.
**What's recommended:** The skill-interaction analysis correctly concludes this is a GATE RUNNER responsibility, not a PA responsibility. PA-60 (design moments) and PA-17 (rhythm) catch the perceptual effects of mechanism breadth without counting categories.
**Priority:** **NICE-TO-HAVE** -- Correctly classified as a gate runner concern. PA should not count mechanism categories. The perceptual effects are covered by existing questions.

---

### FINDING 17: PA-63 Should Cover 3+ Scales, Not Just 2

**Source:** `17-skill-interaction-analysis.md` (E-PA-2)
**What it says:** Current PA-63 (fractal zoom coherence) asks about page-level echo and component-level echo (2 scales). TC specifies 5 scales. The interaction analysis recommends expanding PA-63 to explicitly ask about section-level (3rd scale): "Then zoom OUT to section level -- pick one viewport-height screenful. Does that section have internal structure that also echoes the same language?"
**Where in PA:** PA-63 question text in Tier 5 section
**Already there?** NO. PA-63 still asks about 2 scales (page + component) per the current text. The Progressive Zoom Test protocol (lines ~998-1028) does cover 5 scales but this is a PROTOCOL, not a question auditors answer. PA-63 itself only tests 2.
**What's needed:** Edit PA-63 to add one sentence about section-level scale: "Then zoom OUT to section level -- pick one viewport-height screenful. Does that section have internal structure that also echoes the same language?" This extends PA-63 from 2-scale to 3-scale detection with minimal text change.
**Priority:** **IMPORTANT** -- Fractal coherence is a core Tier 5 signal. Testing only 2 of 5 scales leaves a significant coverage gap. Adding section-level (the middle scale) is the highest-ROI single edit -- it catches whether the organizing principle penetrates to the section layer, which is where most builders stop.

---

### FINDING 18: Stacked Gap Threshold Affects PA-09 Severity Calibration

**Source:** `04-anti-reproduction-xref.md` (BLOCKING-4), `24-holistic-coherence-audit.md` (BLOCKING-06)
**What it says:** The pipeline uses 120px as the stacked gap threshold everywhere. PV2 designed 120px as builder TARGET and 192px as gate threshold. Standard padding (48px + 48px + 48px = 144px) automatically FAILS at 120px. This affects PA because PA-09 severity calibration references "viewport-heights of low-content space" but not the stacked gap threshold.
**Where in PA:** PA-09 Severity Calibration section (current lines ~153-165)
**Already there?** PARTIAL. PA-09 severity calibration addresses dead SPACE severity (1-2 viewports = LOOKS-WRONG, 3-5 = WOULD-NOT-SHIP, 6+ = CATASTROPHIC). But it does not reference the 120px/192px stacked gap boundary in any way. PA auditors evaluate dead space perceptually, not by measuring pixel gaps. This is correct -- PA should NOT measure pixels.
**What's needed:** No change to PA skill. The stacked gap threshold is a gate runner concern, not a PA concern. PA-09 severity calibration correctly uses perceptual language (viewport-heights of empty space) rather than pixel measurements.
**Priority:** N/A (correctly NOT a PA concern)

---

### FINDING 19: Fix Cycle PA -- Reduced Auditor Count Protocol

**Source:** `21-fix-cycle-analysis.md` (Section 1, Step 7.3)
**What it says:** Fix cycle re-verification uses 2 PA auditors (reduced from 9). But the PA skill has no "Mode 2.5" or "Fix Cycle PA" protocol for this reduced deployment. Which 2 auditors? Which questions? The SKILL.md says "2 PA auditors" but the PA skill's Mode 2 (Quick) only covers PA-01-PA-05 at two viewports -- no Tier 5, no specialized questions.
**Where in PA:** Between Mode 2 and Mode 3, or as a variant of Mode 2
**Already there?** NO. The PA skill has Mode 1 (90 sec, embedded), Mode 2 (3 min, quick), Mode 3 (30 min, 4 agents), Mode 4 (60 min, 12 agents). No mode covers the fix-cycle use case (targeted re-evaluation of specific issues by 2 auditors).
**What's needed:** Add a "Mode 2F: Fix Cycle" protocol:
```
Mode 2F: Fix Cycle (10 minutes, 2 auditors)
When: Re-evaluating after fix cycle. Targeted, not comprehensive.
What: The 2 auditors receive ONLY the Top-3 issues from the previous PA report.
They evaluate whether those specific issues are resolved.
Plus PA-01-PA-05 (mandatory) to catch regressions.
Auditor selection: Choose the 2 auditors whose domains overlap with the
Top-3 issues (e.g., if Top-3 includes a spatial issue and a rhythm issue,
deploy Auditor C and Auditor F).
```
**Priority:** **IMPORTANT** -- The fix cycle protocol is untested (BLOCKING-1 in file 21). When it IS tested, the PA skill needs to support the reduced-auditor deployment. Without a defined protocol, the orchestrator must improvise which 2 auditors to deploy and which questions they answer.

---

### FINDING 20: Weaver Should Receive TC Brief for Metaphor Failure Diagnosis

**Source:** `17-skill-interaction-analysis.md` (E-BP-3, E-PA-3)
**What it says:** The Weaver currently reads: 9 auditor reports + gate results + lock sheet. It does NOT read the TC brief. For diagnostic purposes (distinguishing metaphor failure from implementation failure), the Weaver should also read `_tc-brief.md`. This is for DIAGNOSTIC use only -- not to bias quality judgment.
**Where in PA:** Weaver Protocol, in the "inputs" section
**Already there?** NO. The Weaver protocol lists auditor reports, gate results, and lock sheet as inputs. The TC brief is not mentioned.
**What's needed:** Add one line to the Weaver's input list: "Also read: [output-dir]/_tc-brief.md (for metaphor failure diagnosis ONLY -- do not let TC expectations bias your quality assessment)."
**Priority:** **IMPORTANT** -- Without TC brief access, the Weaver cannot distinguish between "metaphor was structural but builder used labels" (implementation failure, route to builder) and "metaphor was inherently label-dependent" (derivation failure, route to TC). This distinction drives fix routing.

---

### FINDING 21: Total Question Count Inconsistency

**Source:** `10-pa-assignment-reconciliation.md` (Section 2, Discrepancy D-3), `24-holistic-coherence-audit.md` (Contradiction C-4)
**What it says:** Multiple count conventions exist: "48 standard" (Tiers 1-3 only), "52 standard" (Tiers 1-4), "57 total" (48+9 Tier 5), "59 total" (48+2 pipeline+9 Tier 5), "61 total" (52+9 Tier 5 with PA-03/24/25 assigned). The PA skill header, Mode 4 section, and various references use different counts.
**Where in PA:** Header warning (line ~7), Mode 4 description (line ~636), total line
**Already there?** PARTIAL. The enrichment changelog (file 23) updated to "59 questions" (50 standard + 9 Tier 5) after adding PA-69 and PA-70. But if PA-03, PA-24, PA-25 are assigned (Finding 1), the count becomes 63 (53 standard + 9 Tier 5 + 1 PA-03-was-already-counted-as-defined-but-not-assigned).
**What's needed:** Once Finding 1 is resolved, update ALL count references to a single canonical number. Use the reconciliation report's precise count: Tiers 1-4 = 52 standard + 2 pipeline integration + 9 Tier 5 = 63 total. Or simplify: "63 questions across 9 auditors."
**Priority:** **IMPORTANT** -- Count inconsistencies cause confusion during orchestration and auditing. A single canonical count prevents the "how many questions?" question from recurring.

---

### FINDING 22: Perceptual Language Enforcement for Pipeline Auditors

**Source:** `16-pa-sufficiency-audit.md` (Dimension 7, Fresh-Eyes Tension)
**What it says:** The PA skill correctly instructs auditors to use perceptual language ("heavy, light, cramped, spacious, jarring, smooth") instead of CSS vocabulary. The build-page skill tells auditors to read the PA skill "for its evaluation framework." This is NOT a contradiction because the framework teaches HOW to look, not WHAT to find. But it would help to reinforce the perceptual language instruction in the screenshot-reading protocol.
**Where in PA:** Screenshot-Reading Protocol section (added in Enrichment 1)
**Already there?** PARTIAL. The screenshot-reading protocol mentions "Describe what you see using perceptual language" but does not repeat the full language hard-block list. The language hard-block (lines ~1078-1080) exists elsewhere in the skill.
**What's needed:** Add one sentence to the screenshot-reading protocol: "Describe what you see using perceptual language. 'The background shifts from warm cream to cooler gray' not 'The background-color changes from #FEF9F5 to #F0EBE3.'"
**Priority:** **NICE-TO-HAVE** -- The language hard-block exists elsewhere. Repeating it in the screenshot protocol is reinforcement, not new content.

---

### FINDING 23: Font Trinity Discrepancy in PA Skill

**Source:** `10-pa-assignment-reconciliation.md` (Discrepancy D-6), `24-holistic-coherence-audit.md` (GAP-03)
**What it says:** Build-page SKILL.md SC-03 references "Instrument Serif, Inter, JetBrains Mono." An enriched prompt in the PA skill references "Instrument Serif / Source Sans 3 / Source Code Pro." These are different font families. The PA skill should not contain font specifications at all (auditors should not reference font names), but if it does, they must match tokens.css.
**Where in PA:** Any section referencing specific fonts
**Already there?** UNKNOWN -- the discrepancy was noted but the exact location in the PA skill is not specified. If the PA skill contains font family names in any enriched prompt section, they should be removed (auditors should describe typeface FEEL, not name fonts) or corrected to match tokens.css.
**Priority:** **NICE-TO-HAVE** -- Auditors should not be naming fonts at all. If font names appear in the PA skill, they should be removed or replaced with perceptual descriptions.

---

### FINDING 24: Tier 5 Weight Differentiation for TC Feedback

**Source:** `17-skill-interaction-analysis.md` (E-PA-4)
**What it says:** Some Tier 5 questions are more diagnostic of the TC-PA relationship than others. PA-61 (multi-voice), PA-62 (transition variation), PA-63 (fractal echo), PA-68 (metaphor coverage) are HIGH weight for TC feedback. PA-60 (design moments) and PA-67 (novelty) are LOW weight (reflect builder craft, not TC quality). High-weight failures should be included in fix instructions with TC-brief cross-references.
**Where in PA:** Tier 5 section or Weaver protocol
**Already there?** NO. All 9 Tier 5 questions have equal weight (binary YES/NO, each counts 1 toward the /9 score).
**What's needed:** Add a note in the Weaver protocol's Tier 5 scoring section: "PA-61, PA-62, PA-63, and PA-68 failures are HIGH diagnostic weight for compositional failure. If 2+ of these fail, include TC-brief cross-references in fix instructions. PA-60 and PA-67 failures reflect builder craft more than compositional planning."
**Priority:** **NICE-TO-HAVE** -- The current equal-weight scoring is simpler and less error-prone. Differential weighting adds complexity to the Weaver's task. The diagnostic value is real but can be achieved by the orchestrator during fix instruction composition rather than by the Weaver during scoring.

---

## Summary Table

| # | Finding | Source Files | Already in PA? | Priority |
|---|---------|-------------|---------------|----------|
| 1 | PA-03/24/25 unassigned | 10, 24 | NO | **CRITICAL** |
| 2 | PA-68 in Tier 5 section + /9 scoring | 10, 24 | VERIFY | **CRITICAL** |
| 3 | Weaver 6-section protocol | 16 | YES | N/A |
| 4 | Screenshot-reading protocol | 16 | YES | N/A |
| 5 | TC-derivation detection guidance | 16, 09 | YES | N/A |
| 6 | PA-69 + PA-70 | 09, 16, 17 | YES | N/A |
| 7 | Weaver calibration tables | 09, 24 | YES | N/A |
| 8 | Fix-type classification in Weaver Top-5 | 21 | NO | **IMPORTANT** |
| 9 | Weaver metaphor failure root-cause diagnosis | 21, 17 | NO | **IMPORTANT** |
| 10 | Auditor C overload | 09, 10 | ACKNOWLEDGED | NICE-TO-HAVE |
| 11 | Content-form coupling as broader lens | 16, 17 | PARTIAL | NICE-TO-HAVE |
| 12 | Mid-build perceptual self-checks | 08 | PARTIAL | **IMPORTANT** |
| 13 | Tier 5 richer scoring detail | 16, 10 | YES | N/A |
| 14 | CSS budget misallocation detection | 08, 05 | NO (gate concern) | NICE-TO-HAVE |
| 15 | Coherence ARC detection guidance | 16 | NO | **IMPORTANT** |
| 16 | Mechanism category breadth | 17 | NO (gate concern) | NICE-TO-HAVE |
| 17 | PA-63 expand to 3 scales | 17 | NO | **IMPORTANT** |
| 18 | Stacked gap threshold vs PA-09 | 04, 24 | N/A (gate concern) | N/A |
| 19 | Fix cycle PA Mode 2F protocol | 21 | NO | **IMPORTANT** |
| 20 | Weaver reads TC brief for diagnosis | 17 | NO | **IMPORTANT** |
| 21 | Total question count consistency | 10, 24 | PARTIAL | **IMPORTANT** |
| 22 | Perceptual language in screenshot protocol | 16 | PARTIAL | NICE-TO-HAVE |
| 23 | Font trinity discrepancy | 10, 24 | UNKNOWN | NICE-TO-HAVE |
| 24 | Tier 5 weight differentiation | 17 | NO | NICE-TO-HAVE |

---

## Priority Breakdown

### CRITICAL (PA produces wrong results without these)

| # | Finding | Action Required |
|---|---------|----------------|
| 1 | PA-03/24/25 unassigned | Add PA-03 to Auditor A, PA-24 to Auditor F, PA-25 to Auditor G in Mode 4 table |
| 2 | PA-68 Tier 5 scoring | Verify PA-68 is in Tier 5 definition section with /9 scoring thresholds throughout |

### IMPORTANT (PA quality degrades without these)

| # | Finding | Action Required |
|---|---------|----------------|
| 8 | Fix-type classification | Add MECHANICAL/STRUCTURAL/COMPOSITIONAL classification guidance to Weaver Top-5 Issues |
| 9 | Metaphor failure root-cause | Add root-cause diagnosis protocol to Weaver for PA-44/PA-68 failures |
| 12 | Mid-build perceptual checks | Expand Mode 1 with 3 perception-specific self-checks for builders |
| 15 | Coherence ARC detection | Add ~20 lines of ARC type guidance (BUILD-PEAK-RESOLVE / SUSTAINED / FRONT-LOADED / RANDOM) |
| 17 | PA-63 expand to 3 scales | Add section-level scale to PA-63 question text (one sentence) |
| 19 | Fix cycle PA Mode 2F | Add Mode 2F protocol for 2-auditor fix-cycle re-evaluation |
| 20 | Weaver reads TC brief | Add TC brief to Weaver input list for diagnostic purposes |
| 21 | Question count consistency | Reconcile all count references after Finding 1 is applied |

### NICE-TO-HAVE (marginal improvement)

| # | Finding | Action Required |
|---|---------|----------------|
| 10 | Auditor C overload | Monitor; optionally move PA-52 to Auditor D |
| 11 | Content-form coupling lens | Expand from ~4 lines to ~10 lines |
| 14 | CSS budget detection | No PA action (gate concern) |
| 16 | Mechanism category breadth | No PA action (gate concern) |
| 22 | Perceptual language reinforcement | Add one sentence to screenshot protocol |
| 23 | Font trinity | Remove or correct any font names in PA skill |
| 24 | Tier 5 weight differentiation | Add diagnostic weight note to Weaver protocol |

---

## Files That Need Updating

If all CRITICAL and IMPORTANT findings are applied:

| File | Changes |
|------|---------|
| `~/.claude/skills/perceptual-auditing/SKILL.md` | (1) Add PA-03 to Auditor A, PA-24 to F, PA-25 to G in Mode 4 table. (2) Verify PA-68 + /9 scoring throughout Tier 5. (3) Add fix-type classification to Weaver Top-5. (4) Add metaphor failure root-cause to Weaver. (5) Expand Mode 1 with 3 perception checks. (6) Add coherence ARC guidance (~20 lines). (7) Edit PA-63 to add section-level scale. (8) Add Mode 2F protocol. (9) Add TC brief to Weaver inputs. (10) Update all question count references. |
| `~/.claude/skills/build-page/SKILL.md` | (1) Update auditor assignments to match PA skill (PA-03, PA-24, PA-25). (2) Update question count references. |
| `design-system/pipeline/flagship-pa-questions.md` | (1) Update auditor assignment summary to include PA-03, PA-24, PA-25. (2) Update total count. |

---

## Estimated Line Impact

| Priority | Findings | Net Lines Added to PA Skill |
|----------|----------|----------------------------|
| CRITICAL | 2 | +5 (assignment table edits, scoring verification) |
| IMPORTANT | 8 | +85 (Mode 2F ~15, ARC guidance ~20, Weaver additions ~25, Mode 1 expansion ~10, PA-63 edit ~2, count fixes ~5, TC brief input ~3, fix-type ~5) |
| NICE-TO-HAVE | 7 | +15 (optional, not recommended for immediate application) |
| **Total** | **17 actionable** | **+90 to +105 lines** |

PA skill would grow from ~1,208 lines to ~1,298-1,313 lines.

---

**END OF PA ENRICHMENT AUDIT**
**Surgery files read:** 11
**Total findings:** 24
**Already applied (via enrichment-23):** 7
**Actionable (not yet applied):** 17 (2 CRITICAL, 8 IMPORTANT, 7 NICE-TO-HAVE)
**Not PA concerns (gate/pipeline issues):** 3

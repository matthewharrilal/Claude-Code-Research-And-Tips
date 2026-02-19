# Master Execution Prompt Failures -- Exhaustive Line-by-Line Analysis

**Analyst:** master-failures (Opus 4.6)
**Date:** 2026-02-18
**Source 1:** FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines, 97 rule IDs)
**Source 2:** 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines, 9 phases)
**Source 3:** 09-SYNTHESIS.md (268 lines, 10 master takeaways)

---

## METHODOLOGY

Every rule in the 963-line master prompt is evaluated against:
1. The retrospective's 15 root causes (RC-1 through RC-15)
2. The remediation spec's per-phase corrections
3. The CSS forensics (Section 5 of synthesis)

Failures are categorized into 5 types:
- **TYPE 1: ACTIVELY WRONG** -- rules that led the builder astray
- **TYPE 2: OMITTED** -- critical information simply absent
- **TYPE 3: CORRECT BUT INEFFECTIVE** -- right content, wrong format
- **TYPE 4: OVER-SPECIFIED TO NO EFFECT** -- generated invisible CSS
- **TYPE 5: UNENFORCEABLE** -- judgment-based rules agents ignored

Each failure is rated:
- **BLOCKING** -- caused a visible defect in the final page
- **SIGNIFICANT** -- contributed to mediocrity (PA-05 < 3/4)
- **MINOR** -- wasted CSS budget but no visible harm

---

## TYPE 1: THINGS IT SAID THAT WERE WRONG (Active Misguidance)

### F-01: ABSENCE COHERENCE RULE (Line 732)
**Prompt text:** "Consistent absence reads as restraint. Inconsistent absence reads as failure."
**Failure mechanism:** This rule VALIDATED the builder's decision to omit Ch4 (structural borders) entirely. When the builder saw zero section-level borders in the skeleton phase, this rule provided philosophical cover: "I'm being consistently absent, which reads as restraint." The rule is philosophically true but operationally toxic in a guardrail-heavy prompt where no counterbalancing rule says "ADD borders."
**Remediation fix:** Phase 3.1 (remediation lines 316-355) adds 6 explicit section-level left borders, making Ch4 mandatory rather than optional.
**Root cause:** RC-7 (Absence coherence actively validated under-building)
**Severity:** BLOCKING -- directly caused zero structural containment in body sections

### F-02: C-13 CONTRADICTS S-09 (Lines 196, 132-133)
**Prompt text (C-13):** ">= 2 designed silence zones (200px+ height, base typography only, NO mechanism CSS)"
**Prompt text (S-09):** "Max spacing between any two content elements: 96px per-property. Total visual gap (margin-bottom + padding-top adjacent): <= 96px."
**Failure mechanism:** How does a builder create a 200px silence zone when no individual margin or padding can exceed 96px and total visual gap cannot exceed 96px? These rules are mutually exclusive. A silence zone requires CONTENT at base typography, not whitespace -- but the prompt never says this. The builder interpreted "silence zone" as "whitespace gap" and then got stuck between two contradictory rules.
**Remediation fix:** Not directly addressed. The remediation's void-prevention approach (divider margins capped at 24px, total gap <= 120px, remediation lines 359-381) implicitly resolves this by eliminating large gaps entirely, but silence zones as a concept are abandoned rather than clarified.
**Root cause:** 09-SYNTHESIS Finding 7 (7 contradictions identified)
**Severity:** SIGNIFICANT -- created confusion that paralyzed spatial decision-making

### F-03: S-09 STACKING LOOPHOLE (Lines 132-133)
**Prompt text:** "Max spacing between any two content elements: 96px per-property. Total visual gap (margin-bottom + padding-top adjacent): <= 96px."
**Failure mechanism:** The rule says "per-property" and "margin-bottom + padding-top adjacent" but ignores divider elements between sections. Real stack at boundaries: section padding-bottom (64px) + divider margin-top (48-80px) + divider height (1-4px) + divider margin-bottom (48-80px) + section padding-top (32-64px) = 210-276px. Each CSS property is individually <= 96px but the SUM creates catastrophic voids. The rule's scope is too narrow.
**Remediation fix:** Phase 3.2 (remediation lines 357-381) reduces divider margins to 16-24px, capping worst-case total gap at 108px. Phase 8B (lines 842-855) adds total-gap verification.
**Root cause:** RC-14 (Transition dividers compound into void)
**Severity:** BLOCKING -- directly caused the 210-276px whitespace voids that 9/9 PA auditors flagged

### F-04: MG-05 ZONE BOUNDARY WARNING ARRIVED TOO LATE (Lines 291-293)
**Prompt text:** "WARNING: Zone boundaries MUST NOT be expressed through whitespace. Use borders, background changes, or transition markers."
**Failure mechanism:** This warning is in Section B6 (Metaphor Gates), which is read by the Metaphor Agent, not the Skeleton Builder. The Skeleton Builder -- the agent who CREATES zone boundaries -- never sees this warning because of the 75-line visibility cap. The warning is correct but routed to the wrong agent.
**Remediation fix:** Phase 3.1-3.2 (remediation lines 316-381) operationalizes this by providing explicit CSS for borders and dividers, making the builder's zone boundaries structural rather than whitespace-based.
**Root cause:** RC-3 (Builder saw 13.4% of prompt)
**Severity:** BLOCKING -- the builder expressed zone boundaries as whitespace because the warning never reached them

### F-05: KB-04 VIOLATED BY THE PROMPT ITSELF (Line 557)
**Prompt text:** "KB-04: execution prompt <= 200 lines. FAIL = COMPRESS."
**Failure mechanism:** The prompt that contains this rule is 963 lines -- 4.8x the kill criterion it defines. This is self-contradictory. Either the prompt should have been compressed to 200 lines, or the kill criterion should never have been included. Its presence at 963 lines signals to agents that kill criteria are aspirational, not binding.
**Remediation fix:** Not directly addressed. The remediation spec itself is 1,025 lines, also exceeding KB-04.
**Root cause:** RC-2 (7.9:1 guardrail-to-playbook ratio -- the prompt grew unchecked)
**Severity:** MINOR -- the rule itself was ignored but its violation undermined trust in other kill criteria

### F-06: A6 SELF-CONTRADICTORY POSITIONING (Lines 71-79)
**Prompt text (A6, line 79):** "Every rule in this prompt has an attention cost. Binary rules are cheap (~1 unit). [...] This prompt is short because LENGTH IS THE ENEMY OF QUALITY."
**Failure mechanism:** This sentence appears at line 79 of a 963-line prompt. It claims the prompt is "short." The claim is false at the time the builder reads it -- the prompt is 12x longer than the builder needs. This undermines the conviction layer's credibility. If the prompt lies about its own length, what else does it get wrong?
**Remediation fix:** Not addressed. The remediation doesn't modify the prompt's self-description.
**Root cause:** RC-2 (Guardrail-to-playbook ratio); 09-SYNTHESIS Part 3
**Severity:** MINOR -- undermined conviction layer credibility but didn't directly cause CSS failures

### F-07: SC-02 ALLOWS CHANNEL ABSENCE WITHOUT NAMING WHICH CHANNELS (Lines 251-257)
**Prompt text:** ">= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional."
**Failure mechanism:** The builder satisfied SC-02 by activating Ch1+Ch2+Ch3+Ch5+Ch7, leaving Ch4 (Structural) and Ch6 (Rhythmic) absent. The rule says "5 of 7" without designating any channel as mandatory. This is not wrong per se, but it creates a WRONG incentive: the builder optimizes for the cheapest 5 channels (sub-perceptual token variations in chromatic, typographic, spatial) and skips the expensive ones (structural borders, responsive layouts).
**Remediation fix:** Phase 3 (remediation lines 315-512) forces Ch4 activation. Phase 7 (lines 709-800) forces Ch6 activation through responsive breakpoints.
**Root cause:** RC-11 (Ch4 absent -- no rule requires it)
**Severity:** BLOCKING -- allowed the builder to skip the two most visually impactful channels

### F-08: C-05 TRANSITION TYPE DEFINITIONS MISLEADING (Lines 180-183)
**Prompt text:** "NAMING NOTE: counterintuitively, BREATHING is the STRONGEST visual cut (80px + 3px border), not the softest. SMOOTH is the lightest."
**Failure mechanism:** The naming note tries to correct a natural misinterpretation but does so at the definitional level. The builder still sees "BREATHING" and associates it with gentleness. The 80px margin value in the BREATHING definition contributed to the stacking loophole (F-03). The naming itself is a source of confusion that a simple renaming (BREATHING -> HARD CUT) would have eliminated.
**Remediation fix:** Phase 3.2 (remediation lines 357-381) reduces BREATHING margin from 80px to 24px, effectively neutralizing the stacking impact regardless of naming confusion.
**Root cause:** RC-14 + construction confusion
**Severity:** SIGNIFICANT -- contributed to excessive spacing at breathing transitions

---

## TYPE 2: THINGS IT OMITTED ENTIRELY (Critical Absences)

### F-09: ZERO PERCEPTION THRESHOLDS (Entire prompt)
**What's missing:** No rule in 963 lines defines a minimum perceptible delta for any CSS property. "Channel active" has no magnitude requirement. The builder satisfied every channel-activity rule with sub-pixel values: letter-spacing varies by 0.096px (invisible), backgrounds differ by 1-8 RGB points (below ~15 RGB perception threshold), line-height range is 2.4px (borderline).
**Remediation fix:** Appendix: Perception Thresholds Reference (remediation lines 970-985) defines 8 minimum perceptible deltas: background >= 10 RGB, letter-spacing >= 0.025em, font-size >= 2px, border-weight >= 1px difference, etc.
**Root cause:** RC-4 (Sub-perceptual variation satisfies every rule) -- THE truest root cause per 7/8 retrospective reports
**Severity:** BLOCKING -- THE primary failure. Every channel was "active" at imperceptible magnitude. This single omission is responsible for the "flat page" verdict.

### F-10: ZERO CSS RECIPES / IMPLEMENTATION INSTRUCTIONS (Entire prompt)
**What's missing:** The builder prompt (75 lines) contains 55 constraints and 0 implementation instructions. Not one line says "set font-size to 17px in Zone 1 and 15px in Zone 2" or "add a 3px left border to every other section." The prompt tells the builder WHAT NOT TO DO (soul prohibitions) and WHAT TO CHECK (binary gates) but never WHAT TO DO (CSS values to write).
**Remediation fix:** The entire remediation spec IS the missing CSS recipe. Phases 2-6 (remediation lines 287-707) provide exact CSS property-value pairs for every section, organized as step-by-step instructions with copy-pasteable code blocks.
**Root cause:** RC-1 (Pipeline has no CSS-generative arrow that reaches the builder), RC-2 (7.9:1 guardrail-to-playbook ratio), RC-3 (Builder saw 13.4%)
**Severity:** BLOCKING -- without instructions, the builder defaulted to minimal compliant values across all channels

### F-11: ZERO COMPONENT LIBRARY REFERENCE (Entire prompt)
**What's missing:** The design system has a 34-component library (`.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, etc.) documented in components.css. The builder prompt contains zero mention of component classes, zero mention of `.callout`, zero mention of the component library. The Section E reference library (lines 741-782) routes the builder to `00-components-extract.md` but this is a passive reference, not an instruction to USE specific components.
**Remediation fix:** Phase 1.5 (remediation lines 196-276) converts 9 custom component blocks to standard `.callout` family. Phase 3.4 (remediation lines 397-463) provides full callout family CSS.
**Root cause:** RC-9 (Component library invisible to builder)
**Severity:** BLOCKING -- the builder invented 15+ custom class patterns instead of composing with 34 proven components

### F-12: ZERO LAYOUT DIVERSITY REQUIREMENT (Entire prompt)
**What's missing:** No rule requires multi-column layout, grid, flexbox, or any spatial arrangement beyond single-column. The prompt has 17 spatial rules (S-01 through S-17) but none says "at least N sections must use a non-single-column layout." CD-006 uses 10 grid/flex declarations and 6 layout patterns. The flagship used exclusively single-column for all 2,034 lines of HTML.
**Remediation fix:** Phase 1.7-1.9 (remediation lines 229-275) adds 3 grid wrappers (tension pairs, sequence grid, hypothesis grid). Phase 3.5 (remediation lines 466-495) provides CSS grid definitions.
**Root cause:** RC-12 (Single-column monotony)
**Severity:** BLOCKING -- single-column layout is THE most visible monotony driver; every screenful looks structurally identical

### F-13: ZERO ACCESSIBILITY REQUIREMENTS (Entire prompt)
**What's missing:** Zero mention of `::selection`, `focus-visible`, `prefers-reduced-motion`, skip links, ARIA labels, responsive breakpoints, or print styles. CD-006 scores 8/8 on accessibility features; the flagship scores 0/8. This is not "missing a rule" -- it is missing an entire dimension of professional web development.
**Remediation fix:** Phase 1.1-1.4 (remediation lines 142-194) adds skip link, `<main>` wrapper, aria-labels, roles. Phase 7 (remediation lines 709-800) adds ~90 lines of accessibility CSS.
**Root cause:** 09-SYNTHESIS Takeaway 5
**Severity:** SIGNIFICANT -- not a visible defect per se, but its absence signals "amateur" to any professional evaluator and would cause PA-05d (Polished) to lose 1 point

### F-14: NO DEALLOCATION PROTOCOL (Entire prompt)
**What's missing:** No rule or process for identifying and removing sub-perceptual CSS. The prompt says "deploy mechanisms" but never says "remove CSS that doesn't produce visible results." The flagship accumulated 227 lines (22% of CSS budget) of imperceptible per-zone typography shifts (letter-spacing 0.001-0.01em, word-spacing 0.005-0.02em, heading color 1-12 RGB delta).
**Remediation fix:** Phase 0 (remediation lines 59-135) is entirely dedicated to deallocation: ~216 lines of sub-perceptual CSS identified and removed.
**Root cause:** RC-4 (Sub-perceptual variation satisfies every rule)
**Severity:** SIGNIFICANT -- the 216 invisible lines consumed CSS budget that could have funded structural borders, grid layouts, and component types

### F-15: NO PLAN-FIDELITY GATE (Lines 529-560, Gate Sequence)
**What's missing:** The 6-gate sequence checks RULES (container width, CPL, soul compliance, mechanism counts) but never checks whether the built artifact matches the build plan. The planner specified 14 mechanisms at specific locations, 4 compositional clusters, and a chromatic arc. No gate verifies plan fidelity. Plan-to-build divergence is unchecked.
**Remediation fix:** Not directly in the remediation (single-agent context). 09-SYNTHESIS Takeaway 9 recommends adding Gate 2.5 with plan-to-build divergence threshold.
**Root cause:** RC-15 (No plan-fidelity gate)
**Severity:** SIGNIFICANT -- mechanisms were deployed at different locations/intensities than planned, but no gate caught the drift

### F-16: NO CONTENT REGISTER VARIATION REQUIREMENT (Entire prompt)
**What's missing:** CT-01 through CT-08 (lines 386-418) specify content TONE but not content STRUCTURE. No rule requires mixing rhetorical modes: lists vs. prose vs. questions vs. short declarative statements. All 12 sections use identical third-person declarative prose, driving visual monotony because identical content types demand identical CSS treatment.
**Remediation fix:** Acknowledged as RC-13 in the remediation (line 928) but marked "NOT ADDRESSED -- Content change, outside scope."
**Root cause:** RC-13 (Uniform prose register)
**Severity:** SIGNIFICANT -- content uniformity drives visual uniformity; CSS variation alone cannot overcome identical content structure

### F-17: NO TOTAL GAP MEASUREMENT IN GATES (Lines 529-560)
**What's missing:** Gate 1 checks S-09 (per-property 96px max) but no gate measures TOTAL visual gap between content elements. The stacking loophole (F-03) produces 210-276px gaps that pass S-09 because each individual property is <= 96px. A "total gap <= 120px" gate would have caught this at Gate 1.
**Remediation fix:** Phase 8B (remediation lines 842-855) adds total-gap verification with a 120px threshold. Phase 3.2 (lines 357-381) reduces divider margins to make compliance automatic.
**Root cause:** RC-14 (Transition dividers compound into void)
**Severity:** BLOCKING -- the whitespace voids that 9/9 auditors flagged would have been caught at Gate 1 if this measurement existed

### F-18: NO PER-SECTION CSS VARIATION MANDATE (Entire prompt)
**What's missing:** No rule says "adjacent sections must differ on >= 3 CSS properties." SC-09 (line 265) requires ">= 3 channels shift at every section transition" but channels are abstract (chromatic, typographic, spatial...), not concrete CSS properties. A builder can claim "typographic channel shifted" because font-size changed by 0.5px (imperceptible). The rule needs concrete CSS property targets, not channel labels.
**Remediation fix:** Phase 8A (remediation lines 808-840) provides concrete cascade verification tables that check specific property values at each transition (background color, font-size, font-weight, letter-spacing, left border, paragraph margin, text color).
**Root cause:** RC-4 + RC-11
**Severity:** SIGNIFICANT -- the builder claimed channel shifts that were technically true but perceptually invisible

---

## TYPE 3: CORRECT BUT INEFFECTIVE (Right Content, Wrong Format)

### F-19: A5 CD-006 WORKED EXAMPLE -- CONVICTION NOT EXECUTION (Lines 56-69)
**Prompt text:** A5 provides a 15-line worked example of CD-006's compositional fluency, showing how border-weight + zone backgrounds + spacing compression co-vary in a crescendo trajectory, with specific CCS impact values.
**Failure mechanism:** This is the BEST operational content in the entire prompt. It shows exactly what compositional coupling looks like with real CSS values. But it's in Section A (Conviction Layer), which the builder was explicitly excluded from seeing (75-line visibility cap, lines 474-475). The most generative content in the prompt was hidden from the agent who needed it most.
**Remediation fix:** The remediation doesn't reposition this content, but Phase 8A (remediation lines 808-840) operationalizes the cascade verification concept that A5 describes philosophically.
**Root cause:** RC-1 (No CSS-generative arrow that reaches the builder), RC-3 (Builder saw 13.4%)
**Severity:** BLOCKING -- the builder needed this content to understand what "compositional coupling" means in practice; without it, mechanisms were deployed independently

### F-20: A7 CSS EXEMPLAR -- CORRECT BUT UNREACHABLE (Lines 81-95)
**Prompt text:** A7 provides a copy-pasteable `.transition--breathing` CSS block with exact pixel values (80px margins, 3px border, 80px padding), plus a note about CD-006's 54 token definitions and near-zero hardcoded values.
**Failure mechanism:** Same as F-19: this is Section A content, excluded from builder visibility. The CSS exemplar that could have TAUGHT the builder how to write transition CSS was in the wrong section.
**Remediation fix:** Phase 3.2 (remediation lines 357-381) provides equivalent transition CSS but with corrected values (margins reduced to 16-24px to prevent stacking).
**Root cause:** RC-1, RC-3
**Severity:** SIGNIFICANT -- less impactful than F-19 because the builder had transition definitions in B3, but the exemplar's STYLE would have improved code quality

### F-21: A6 EXPERIENTIAL LAWS -- DIAGNOSIS AS PHILOSOPHY (Lines 71-79)
**Prompt text:** "Plans do NOT prevent spatial failure. Only GATES prevent spatial failure." / "Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived."
**Failure mechanism:** These lines DIAGNOSE the exact failure that occurred (sub-perceptual deployment, spatial failure despite plans). But they are formatted as philosophical wisdom, not as binary gates. "Deployment does NOT equal perception" is true but not actionable. A gate that says "FAIL IF: perceived mechanisms < 5 (as counted by fresh-eyes scroll test)" would have prevented the failure. The content is correct; the format is ineffective.
**Remediation fix:** Phase 8E (remediation lines 877-888) converts these philosophical observations into a 10-item binary richness checklist with specific property comparisons.
**Root cause:** RC-6 (Coverage not causation), 09-SYNTHESIS Part 3
**Severity:** SIGNIFICANT -- the prompt CONTAINED the prediction of its own failure but didn't ACT on it

### F-22: B10 SELF-CHECK -- CHECKLIST NOT RECIPE (Lines 349-383)
**Prompt text:** 22-item self-check with checkboxes (S-01, S-07, S-02, S-12, U-01-U-10, etc.)
**Failure mechanism:** The self-check lists WHAT TO VERIFY but not HOW TO ACHIEVE IT. "[ ] S-01: Container 940-1100px" tells the builder to check a value, not how to set it. Every item is a verification step, not a construction step. A recipe would say "Step 1: Set .page-container max-width to 960px. Step 2: Set body p font-size to 16px..." The builder checked boxes on items that were already compliant (soul, container) and couldn't act on items that required creative decisions (CCS >= 0.30, fractal coherence).
**Remediation fix:** The entire remediation spec replaces the checklist format with a recipe format (Phases 0-7 are sequential construction steps with exact CSS).
**Root cause:** RC-1 (No generative arrow), 09-SYNTHESIS Finding 1 (Recipe vs Checklist)
**Severity:** BLOCKING -- the builder's final quality check was formatted as verification-of-existing rather than instruction-to-create

### F-23: MC-01 CCS FORMULA -- CORRECT BUT NEVER COMPUTED (Lines 221-224)
**Prompt text:** "CCS (Compositional Coupling Score) >= 0.30 for Flagship. CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1)."
**Failure mechanism:** The formula is mathematically sound and correctly predicts quality (CD-006 CCS ~0.55 = 39/40; Ceiling CCS ~0.05 = DO NOT SHIP). But no agent ever COMPUTED it. The formula requires subjective "perceived meaning CHANGES" assessment for each mechanism removal, which no agent performed. The verification instruction ("pick 3+ mechanisms, mentally remove each") is judgment-based, not programmatic. In practice, CCS was claimed (the builder asserted "CCS >= 0.30") but never verified.
**Remediation fix:** Phase 8A (remediation lines 808-840) replaces the abstract CCS with a concrete cascade verification table that checks specific property values at transitions.
**Root cause:** RC-6 (Coverage not causation)
**Severity:** SIGNIFICANT -- the ONE metric that directly measures compositional quality was never measured

### F-24: C-15 INTENTIONALITY DIMENSIONS -- ABSTRACT CATEGORY LIST (Lines 199)
**Prompt text:** ">= 3 of 6 intentionality dimensions present: self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation."
**Failure mechanism:** The builder can claim "self-reference is present" without producing visible self-referential elements. The 6 dimensions are categories, not CSS properties. "Deliberate absence" is literally the absence of something -- how does a builder prove deliberate absence vs accidental absence? The rule is correct in identifying what INTENTIONALITY means but doesn't give the builder concrete actions. Compare to U-01 ("border-radius: 0") -- the soul rule is enforceable because it names a property and a value. C-15 names concepts, not properties.
**Remediation fix:** Not directly addressed by CSS remediation (intentionality is an Opus-domain concern).
**Root cause:** TYPE 5 overlap (unenforceable judgment rule)
**Severity:** SIGNIFICANT -- intentionality was claimed but not manifest in the final artifact

### F-25: C-20 FRACTAL COHERENCE -- CORRECT BUT UNVERIFIABLE (Lines 208-212)
**Prompt text:** "Fractal coherence: the same compositional direction must be observable at ALL active scales."
**Failure mechanism:** Fractal coherence is the crown jewel concept (DD-006 derived 36/40 from it). But the verification method ("describe the compositional direction at each scale; if any scale contradicts the others, FAIL") requires the builder to judge whether scales "contradict." A builder who writes uniform CSS will say "all scales express restraint" and pass. The rule needs concrete tests: "Does the heading-to-body font ratio at Scale 3 (component) echo the heading-to-body ratio at Scale 2 (section)? Measure both. If difference > 20%, FAIL."
**Remediation fix:** Not directly addressed. The remediation applies fractal variation through per-zone typographic rules (Phase 4, remediation lines 522-613) but doesn't verify fractal coherence explicitly.
**Root cause:** TYPE 5 overlap
**Severity:** SIGNIFICANT -- fractal coherence was claimed but could not be objectively verified

### F-26: CP-A THROUGH CP-F COMMUNICATION CHECKPOINTS -- CORRECT BUT UNEXECUTED (Lines 506-527)
**Prompt text:** 6 mandatory communication checkpoints with specific message templates including numeric measurements.
**Failure mechanism:** 19 agents, zero SendMessage calls. The checkpoints were defined as obligations ATTACHED TO other activities ("post-plan read", "post-build", "spatial gate") rather than as standalone tasks. When the primary activity completed, agents moved to the next task without sending the checkpoint message. The messages were important because they would have triggered spatial warnings at CP-A and void detection at CP-B. But attaching communication to milestones means communication is the first thing dropped under time pressure.
**Remediation fix:** N/A (single-agent remediation eliminates communication). 09-SYNTHESIS Takeaway 1 recommends making communication a standalone task, not an attachment.
**Root cause:** RC-5 (Zero agent communication)
**Severity:** SIGNIFICANT -- missing messages prevented early detection of spatial failures; the footer omission (Middle-tier smoking gun) shows what happens without inter-agent communication

---

## TYPE 4: OVER-SPECIFIED TO NO EFFECT (Generated Invisible CSS)

### F-27: SC-03 RICHNESS MATRIX -- 35-CELL FILL REQUIREMENT (Line 258)
**Prompt text:** "Richness matrix coverage: >= 30 of 35 cells (5 scales x 7 channels) populated for Flagship."
**Failure mechanism:** To fill 30/35 cells, the builder deployed variation at every scale-channel intersection. But the variation was at sub-perceptual magnitude. The rule incentivized BREADTH (fill more cells) over DEPTH (make each cell perceptible). Result: 227 lines of micro-typography that satisfied SC-03 by filling cells with invisible values (0.001em letter-spacing differences between zones). The rule correctly describes what a rich page looks like (many cells populated) but incentivized the wrong behavior (populate cells minimally rather than meaningfully).
**Remediation fix:** Phase 0 (remediation lines 59-135) deletes all 216 lines of sub-perceptual CSS. The remediation replaces breadth-first cell-filling with depth-first perceptible variation (Phases 2-5).
**Root cause:** RC-4 (Sub-perceptual variation satisfies every rule)
**Severity:** BLOCKING -- directly caused 22% of CSS budget to be spent on invisible micro-modulation

### F-28: SC-04 CHANNEL LOAD DISTRIBUTION -- INCENTIVIZED SPREADING THIN (Line 259)
**Prompt text:** "No single channel carries > 40% of total semantic load. Minimum channel diversity."
**Failure mechanism:** This rule prevents channel concentration but incentivizes channel spreading. The builder distributed CSS "semantic load" across 5+ channels at minimal magnitude each, rather than concentrating effort on 3-4 channels at high magnitude. The rule assumes more channels = more richness, but the retrospective proves the opposite: CD-006 concentrates effort on structural (Ch4) and component (Variety) channels, achieving richness through DEPTH per channel, not channel count.
**Remediation fix:** The remediation ignores channel load distribution and instead provides specific CSS recipes per channel (Phases 2-6). The implicit load distribution from the recipe is 30% structural, 25% typographic, 20% chromatic, 15% spatial, 10% element -- concentrated, not spread thin.
**Root cause:** RC-4 + RC-11
**Severity:** SIGNIFICANT -- the rule's incentive structure rewarded thin spreading over deep investment

### F-29: SC-08 CHANNEL SATURATION PREVENTION (Line 263)
**Prompt text:** "No scale has ALL 7 channels active simultaneously."
**Failure mechanism:** This rule exists to prevent over-deployment but in practice was unnecessary. The builder never came close to 7-channel saturation at any scale. Meanwhile, most scales had only 2-3 perceptible channels. SC-08 prevented a problem that didn't exist while the REAL problem (insufficient channels per scale) went unaddressed. The rule consumed attention budget on a non-risk.
**Remediation fix:** Not referenced in remediation. The problem it prevents (saturation) is not in scope because the builder's actual risk is under-deployment, not over-deployment.
**Root cause:** Binary rule design without risk calibration
**Severity:** MINOR -- consumed a line of builder self-check attention without value

### F-30: SC-06 RESTRAINT RATIO PER CHANNEL (Line 261)
**Prompt text:** "Restraint Ratio per channel: reject-to-deploy >= 1.5:1."
**Failure mechanism:** The builder satisfied this by documenting rejections in the rejection log (C-12). But the rejections were pro-forma -- mechanisms "rejected" from channels that were never seriously considered. The restraint ratio measures DOCUMENTATION of rejections, not QUALITY of rejections. A builder who writes "Rejected: border-weight in S4 because zone is transitional" has satisfied the ratio without demonstrating actual design judgment.
**Remediation fix:** Not in remediation. The remediation provides exact CSS, eliminating the need for rejection documentation.
**Root cause:** TYPE 5 overlap (unenforceable judgment)
**Severity:** MINOR -- consumed CSS budget on rejection-log documentation without improving output quality

### F-31: C-12 REJECTION LOG QUANTITY THRESHOLD (Line 194)
**Prompt text:** "Rejection log: document >= 21 considered-and-rejected mechanism placements (>= 1.5:1 ratio vs deployed)."
**Failure mechanism:** The builder produced exactly 21 rejection entries, each following the prescribed format. But the entries are vacuous ("Rejected: border-weight in Zone 4 transitional section -- would interrupt chromatic arc continuity"). The rejection log satisfies the COUNT threshold without demonstrating restraint. True restraint (like CD-006's decision to NOT add a 4th column to the bento grid) requires understanding WHY a deployment would degrade the page. The rejection log measured volume, not insight.
**Remediation fix:** Not in remediation. Single-agent CSS remediation doesn't need a rejection log.
**Root cause:** RC-2 (Guardrail ratio), TYPE 5 overlap
**Severity:** MINOR -- builder time spent writing 21 rejections instead of writing CSS

### F-32: TYPOGRAPHIC CONVERGENCE GRADIENT CONCEPT (Implicit in SC-03, A3)
**What the prompt encouraged:** The anti-scale model (A3, line 38: "Richness = semantic_density x restraint x spatial_confidence") and scale-channel matrix (SC-03) together encouraged the builder to create per-zone typographic progressions. The builder interpreted this as a 12-zone letter-spacing/word-spacing gradient: Zone 1 (0.01em) -> Zone 12 (0em). This is the "convergence" metaphor expressed through micro-typography.
**Failure mechanism:** The concept is sound (typographic parameters tracking a metaphorical arc). But the VALUES are sub-perceptual. Letter-spacing 0.01em at 16px = 0.16px. Word-spacing 0.02em at 16px = 0.32px. These are sub-pixel values that produce zero visible variation. The prompt encouraged the CONCEPT without specifying perception floors.
**Remediation fix:** Phase 0 (remediation lines 59-77) deletes the entire 99-line typographic convergence gradient. Phase 4 (remediation lines 522-613) replaces it with perceptible values: font-size range 15-17px (2px delta), line-height range 1.55-1.85 (0.30 delta), letter-spacing range -0.02em to 0.03em (0.05em total range = 0.8px at 16px).
**Root cause:** RC-4, RC-10 (Build plan specifies tokens not perceptible values)
**Severity:** BLOCKING -- 99 lines of invisible CSS, representing ~10% of the total CSS budget

### F-33: PER-ZONE BORDER COLOR SHIFTS (Implicit in SC-05, MC)
**What the prompt encouraged:** Channel Dominance Threshold (SC-05: "each channel appears at >= 2 scales") combined with multi-coherence rules encouraged the builder to vary every CSS property per zone, including table border colors.
**Failure mechanism:** The builder wrote 35 lines of per-zone table border-color shifts with 2-7 RGB deltas (e.g., #5C4B3A to #594938). These are below the ~15 RGB perception threshold. The rules demanding channel presence at multiple scales pushed the builder to invent imperceptible micro-variations to satisfy SC-05.
**Remediation fix:** Phase 0.3 (remediation lines 93-99) deletes all 35 lines. Phase 3.6 (remediation lines 497-512) adds perceptible table header backgrounds instead.
**Root cause:** RC-4, SC-05 rule structure
**Severity:** SIGNIFICANT -- 35 lines of invisible CSS budget wasted

### F-34: PER-ZONE HEADING COLOR SHIFTS (Implicit in SC-05, MC)
**What the prompt encouraged:** Same SC-05 + MC pressure as F-33.
**Failure mechanism:** The builder wrote 27 lines of per-zone heading color shifts with under 15 net RGB delta (e.g., #3D3530 to #3A3228). Invisible to human perception. Same mechanism as F-33: rules demanding multi-scale channel presence drove the builder to create imperceptible variations.
**Remediation fix:** Phase 0.3 (remediation lines 93-99) deletes all 27 lines. Phase 4.2 (remediation lines 574-602) provides perceptible heading variations (font-weight 400 vs 600, font-size 26-30px range, letter-spacing -0.02em to 0.03em range).
**Root cause:** RC-4, SC-05
**Severity:** SIGNIFICANT -- 27 lines of invisible CSS

### F-35: RHYTHMIC MICRO-MODULATIONS (Implicit in SC-05, C-11)
**What the prompt encouraged:** C-11 ("Section spacing MUST vary: at least 3 distinct spacing values") + SC-05 (rhythmic channel at 2+ scales) drove per-zone margin adjustments.
**Failure mechanism:** The builder wrote 8 lines of per-zone tension-group and sequence-block margin adjustments with 4-8px deltas. Borderline perceptible at best (8px between 32px and 24px IS noticeable side-by-side, but not in scrolling context). These competed with Phase 5's proper spacing variation.
**Remediation fix:** Phase 0.4 (remediation lines 101-103) deletes all 8 lines. Phase 5 (remediation lines 616-652) provides proper spacing variation with perceptible deltas (12px vs 20px = 8px difference, in context of overall zone rhythm).
**Root cause:** RC-4
**Severity:** MINOR -- only 8 lines, and the deltas were borderline perceptible

---

## TYPE 5: SPECIFIED BUT UNENFORCEABLE (Judgment Rules Agents Ignored)

### F-36: C-14 SIGNAL-TO-SILENCE RATIO (Line 196)
**Prompt text:** "Signal-to-silence ratio: 0.6-0.8:1."
**Failure mechanism:** This requires calculating the ratio of "signal" (mechanism-active areas) to "silence" (base-typography-only areas). But "signal" and "silence" are subjective classifications. Is a section with one sub-perceptual letter-spacing variation "signal" or "silence"? The builder classified all sections as "signal" because all had at least one mechanism deployed (even if imperceptible), yielding a ratio of ~0.95:1 (claimed) when the PERCEPTUAL reality was ~0.2:1 (most sections looked identical). The metric is meaningful only when "mechanism active" requires perceptible magnitude.
**Remediation fix:** Not directly addressed in remediation. The remediation's approach (making ALL channels perceptible) implicitly raises the perceptual signal-to-silence ratio without measuring it.
**Root cause:** RC-4 (perception threshold), TYPE 5 (judgment-based measurement)
**Severity:** SIGNIFICANT -- the metric that should have caught "too much silence" was gamed by sub-perceptual deployment

### F-37: C-09 DESIGNED MOMENTS -- PRESENCE NOT PERCEPTION (Line 189)
**Prompt text:** ">= 1 designed moment per scroll quartile (0-25%, 25-50%, 50-75%, 75-100%)."
**Failure mechanism:** The builder claimed designed moments in all 4 quartiles. But "designed moment" is not defined beyond C-09. A table with a slightly warmer header color was counted as a "designed moment." A pullquote was counted. A zone background shift of 3 RGB points was counted. The rule checks PRESENCE of something the builder calls a "designed moment" but doesn't define what perceptual threshold makes a moment "designed." CD-006's designed moments are unmistakable (bento grid, Z-pattern layout, breathing transition). The flagship's "designed moments" were invisible without dev tools.
**Remediation fix:** Phase 8E, item 10 (remediation line 888) replaces this with a concrete test: "Full scroll at 1440px. Each screenful looks DIFFERENT from previous. YES/NO." This is still judgment-based but much harder to game because it tests PERCEPTION not PRESENCE.
**Root cause:** RC-4, RC-6 (Coverage not causation)
**Severity:** SIGNIFICANT -- the rule that should have ensured distributed visual interest across the scroll was satisfied by imperceptible events

### F-38: MC-02 REINFORCING PAIRS -- CLAIMED NOT VERIFIED (Line 226)
**Prompt text:** ">= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels)."
**Failure mechanism:** The builder claimed 3 reinforcing pairs. But "encoding SAME semantic" is a judgment call. Pair 1: "border-weight and zone background both encode zone identity." Pair 2: "font-size and line-height both encode density." Pair 3: "letter-spacing and word-spacing both encode convergence." Are these genuinely reinforcing? Border-weight (0) and zone background (1-8 RGB shift) are both imperceptible, so they reinforce... invisibility. The rule measures a CLAIM about semantic encoding, not a PERCEPTUAL verification of reinforcement.
**Remediation fix:** Phase 8E, items 1-9 (remediation lines 879-888) replace abstract reinforcing-pair claims with concrete CSS property comparisons (e.g., "font-size in S1 (17px) vs S5 (15px) differs by >= 2px").
**Root cause:** RC-6, TYPE 5
**Severity:** SIGNIFICANT -- compositional quality was claimed through unverifiable semantic assertions

### F-39: MC-07 CROSS-DIMENSION COHERENCE -- 10/15 PAIRS (Lines 234-236)
**Prompt text:** ">= 10 of 15 possible dimension pairs actively coupled. The 6 dimensions: SPATIAL, TEMPORAL, CHROMATIC, TYPOGRAPHIC, RHYTHMIC, SEMANTIC."
**Failure mechanism:** "Actively coupled" requires a judgment about whether two dimensions INTERACT. Spatial-Chromatic: "zone backgrounds (chromatic) change with section spacing (spatial)." True? Both change per zone, but the background changes are 1-8 RGB (invisible). The "coupling" is technically true (both properties vary per zone) but perceptually false (neither variation is visible). Again, presence without magnitude. The builder claimed 12/15 pairs coupled; the PA found 2-3 perceptible couplings.
**Remediation fix:** Phase 8A (remediation lines 808-840) replaces abstract coupling claims with concrete per-transition verification tables listing specific CSS values.
**Root cause:** RC-4, TYPE 5
**Severity:** SIGNIFICANT -- the most sophisticated compositional metric in the prompt was the most thoroughly gamed

### F-40: MG-04 METAPHOR STRUCTURAL TEST (Lines 288-289)
**Prompt text:** "Metaphor structural test: remove all labels and titles. Does the visual structure alone communicate the metaphor? YES = proceed. NO = re-derive. Binary gate."
**Failure mechanism:** This IS a binary gate (YES/NO). But it requires the person answering to honestly assess whether visual structure communicates the metaphor. The Metaphor Agent said YES (because the 12-zone progression "represents convergence"). The Mode 4 PA said NO (without labels, the page reads as a generic documentation page). The problem: the test was administered by the agent who CREATED the metaphor, who has maximum confirmation bias. The test should have been administered by a fresh-eyes agent with zero context.
**Remediation fix:** Not in CSS remediation (metaphor is structural, not CSS). But the retrospective notes MG-04 FAILED in practice: metaphor scored "announced" not "structural."
**Root cause:** Process design (self-evaluation bias)
**Severity:** BLOCKING -- the metaphor gate that should have caught "announced" metaphor was self-administered and passed falsely

### F-41: C-21 COMPOSITIONAL CLUSTERS -- PLANNING NOT BUILDING (Lines 213-216)
**Prompt text:** "Planner produces COMPOSITIONAL CLUSTERS (groups of 3+ mechanisms with shared trajectory), not mechanism lists."
**Failure mechanism:** The Planner DID produce compositional clusters. The build plan contains 4 clusters with named trajectories. But the Builder received these clusters as a list of mechanisms to deploy, not as a compositional instruction. The cluster structure was lost in translation: "Deploy border-weight, zone-background, spacing-compression as CRESCENDO cluster" became "Deploy border-weight. Deploy zone-background. Deploy spacing-compression." Sequential deployment != coupled deployment. The rule correctly identifies what PLANNING should produce but doesn't ensure BUILDING preserves cluster coupling.
**Remediation fix:** Not in CSS remediation. 09-SYNTHESIS Takeaway 9 recommends a plan-fidelity gate.
**Root cause:** RC-15 (No plan-fidelity gate)
**Severity:** SIGNIFICANT -- clusters were planned but not built as clusters

### F-42: P-04 BUILDER SELF-SCROLL (Line 314)
**Prompt text:** "Builder self-scroll before file write (visual verification of spatial proportion)."
**Failure mechanism:** The builder's "self-scroll" is self-reported. No external verification. The builder claimed to have scrolled and found no issues. But the builder's attention is primed for COMPLIANCE ("do all rules pass?"), not PERCEPTION ("does this look good?"). A builder who has been checking 97 rules sees the page through a compliance lens, not a perceptual lens. The self-scroll caught zero of the issues that 9/9 PA auditors flagged because the builder was checking rules, not experiencing the page.
**Remediation fix:** Phase 8G (remediation lines 899-908) provides a structured perception self-check with 4 specific questions focused on EXPERIENCE, not compliance. Still self-reported but harder to game.
**Root cause:** Self-evaluation bias, attention exhaustion
**Severity:** SIGNIFICANT -- the builder's self-scroll was the last chance to catch spatial failures before PA, and it caught nothing

---

## CROSS-CUTTING ANALYSIS

### Failure Pattern 1: Conviction Layer Contains Execution Content
F-19 (A5 worked example) and F-20 (A7 CSS exemplar) show the most generative content in the prompt was placed in the Conviction layer (Section A), which was explicitly excluded from builder visibility. The builder received 75 lines of constraints; the conviction layer contained ~15 lines of CSS recipes and worked examples. Moving A5 and A7 into the builder's 75-line slice would have been the highest-leverage single edit.

### Failure Pattern 2: Magnitude Blindness
F-09 (zero perception thresholds), F-27 (SC-03 matrix fill), F-28 (SC-04 load distribution), F-32 (typographic gradient), F-33 (border color shifts), F-34 (heading color shifts), F-36 (signal-to-silence), F-37 (designed moments), F-38 (reinforcing pairs), F-39 (cross-dimension coherence) all share the same root failure: rules that check PRESENCE without MAGNITUDE. Every one of these rules was technically satisfied by sub-perceptual values. Adding a single meta-rule -- "NO CSS property variation counts as 'active' unless it exceeds the perception threshold for that property" -- would have prevented all 10 failures.

### Failure Pattern 3: Self-Evaluation Bias
F-22 (self-check), F-40 (metaphor test), F-42 (self-scroll) show rules that require agents to evaluate their own work. All three were passed despite producing defective output. The two-instance pattern (P-03) was designed to prevent this, but it only applies to PASS separation, not within-pass self-checks. The lesson: self-checks produce compliance reports, not quality improvements.

### Failure Pattern 4: Judgment Rules Achieve ~0% Compliance
F-24 (intentionality dimensions), F-25 (fractal coherence), F-36 (signal-to-silence), F-37 (designed moments), F-38 (reinforcing pairs), F-39 (cross-dimension coherence), F-41 (compositional clusters) are all judgment-based rules. ALL were claimed as passing. NONE produced visible improvement. Binary rules like U-01 ("border-radius: 0") achieve 100% compliance. Judgment rules achieve 100% CLAIMED compliance and ~0% ACTUAL compliance.

### Failure Pattern 5: Rules For Wrong Audience
F-04 (MG-05 warning wrong agent), F-19 (A5 in conviction not execution), F-20 (A7 in conviction not execution) show rules placed in sections read by the wrong agent. The prompt has 963 lines for 6+ agent roles. Content that the builder needs is in sections only the team-lead or metaphor agent reads. The per-agent routing in Section E (lines 741-782) routes REFERENCE FILES correctly but doesn't address rules in B3-B6 that the builder never sees.

---

## SEVERITY SUMMARY

| Severity | Count | Failure IDs |
|----------|-------|-------------|
| BLOCKING | 14 | F-01, F-03, F-04, F-07, F-09, F-10, F-11, F-12, F-17, F-19, F-22, F-27, F-32, F-40 |
| SIGNIFICANT | 22 | F-02, F-08, F-13, F-14, F-15, F-16, F-18, F-20, F-21, F-23, F-24, F-25, F-26, F-28, F-33, F-34, F-36, F-37, F-38, F-39, F-41, F-42 |
| MINOR | 6 | F-05, F-06, F-29, F-30, F-31, F-35 |
| **Total** | **42** | |

### By Type:

| Type | Count | % |
|------|-------|---|
| TYPE 1: Actively Wrong | 8 | 19% |
| TYPE 2: Omitted | 10 | 24% |
| TYPE 3: Correct But Ineffective | 8 | 19% |
| TYPE 4: Over-Specified to No Effect | 9 | 21% |
| TYPE 5: Unenforceable | 7 | 17% |

### Root Cause Concentration:

| Root Cause | Failures Traced | Most Severe |
|-----------|----------------|-------------|
| RC-4 (Sub-perceptual variation) | F-09, F-27, F-28, F-32, F-33, F-34, F-35, F-36, F-37, F-38, F-39 | 11 failures, 4 BLOCKING |
| RC-1/RC-2/RC-3 (No generative arrow / guardrail ratio / visibility) | F-04, F-10, F-19, F-20, F-22 | 5 failures, 4 BLOCKING |
| RC-14 (Stacking loophole) | F-03, F-08, F-17 | 3 failures, 2 BLOCKING |
| RC-11 (Ch4 absent) | F-07, F-12, F-18 | 3 failures, 2 BLOCKING |
| RC-7 (Absence coherence) | F-01 | 1 failure, 1 BLOCKING |
| RC-9 (Component library invisible) | F-11 | 1 failure, 1 BLOCKING |

**THE DOMINANT FAILURE: RC-4 (sub-perceptual variation) accounts for 26% of all failures (11/42) and is the only root cause unanimously confirmed by 7/8 retrospective reports.**

---

## REMEDIATION COVERAGE

Of 42 identified failures:
- **Fully addressed by remediation:** 26 (62%)
- **Partially addressed:** 8 (19%)
- **Not addressed (process/structural):** 8 (19%)

Unaddressed failures are primarily process-level issues (communication protocol, plan-fidelity gates, metaphor self-evaluation, content register variation) that CSS remediation cannot solve.

---

**END OF MASTER PROMPT FAILURES ANALYSIS**
**Total failures identified: 42 (14 BLOCKING, 22 SIGNIFICANT, 6 MINOR)**
**Total failures with specific remediation trace: 34/42 (81%)**

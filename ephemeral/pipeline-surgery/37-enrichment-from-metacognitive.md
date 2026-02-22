# 37 -- Enrichment Audit: Meta-Cognitive, Discussion-Guides, Adversarial, Drafts
# =====================================================================================
#
# Auditor: enrichment-auditor (Opus 4.6)
# Date: 2026-02-20
# Scope: All files in ephemeral/pipeline-analysis/ subdirectories:
#   - _meta-cognitive/ (30 files)
#   - _discussion-guides/ (6 files)
#   - _adversarial/ (4 files)
#   - _drafts/ (2 files)
#
# Skills read in full:
#   - ~/.claude/skills/tension-composition/SKILL.md (2,006 lines)
#   - ~/.claude/skills/perceptual-auditing/SKILL.md (1,209 lines)
#
# Deliverable: TC enrichments, PA enrichments, codification map status,
#              anti-reproduction gate status
# =====================================================================================

---

## SECTION 1: TC (TENSION-COMPOSITION) ENRICHMENTS

### TC-E01: Recipe Framing Header for Phase 4
- **Source:** `_meta-cognitive/codification-map.md` (Change 1, lines 95-160)
- **What:** Add a recipe framing header before TC Phase 4.0 that converts the compositional layout section from constraint-list to recipe format. The header would include: (a) explicit statement that Phase 4 output is a BUILD PLAN, not a constraint list; (b) the instruction "Every rule below tells the builder WHAT TO DO, not what to avoid"; (c) a pointer to the operational recipe for CSS execution.
- **Where in TC:** Before Phase 4.0 (Compositional Layout Generation), approximately line 1150
- **Priority:** HIGH -- This is the corpus's #1 finding (recipe > checklist). Phase 4 currently reads as a constraint list despite containing actionable content.
- **Already applied?** NO. TC Phase 4.0 begins with "Phase 4.0: Compositional Layout Generation" and proceeds with guardrails and anti-scale model without any recipe framing. The codification-map provides exact before/after text for this edit.
- **Evidence strength:** Tier 1. Files 04, 18, 24, 42 all converge on recipe format as causal factor.

### TC-E02: Content-Appropriateness Gate
- **Source:** `_meta-cognitive/hidden-questions.md` (A-02, lines 138-157)
- **What:** Add a gate between TC Phase 3 (Metaphor Collapse) and Phase 3.5 (Lock-in) that checks whether the metaphor is appropriate for the content TYPE, not just derivable from it. Example: a geological metaphor for error documentation may be derivable but inappropriate. The gate asks: "Would someone familiar with this content domain find this metaphor clarifying or confusing?"
- **Where in TC:** After Phase 3 Metaphor Collapse, before Phase 3.5 Lock-in Gate, approximately line 1050
- **Priority:** MEDIUM -- Hidden-questions identifies this as a blind spot: TC derives metaphors from content structure but never validates against content domain expectations.
- **Already applied?** NO. TC Phase 3.5 Lock-in Gate checks metaphor quality (18-point rubric, >= 12/18) but all 18 criteria evaluate structural and compositional fitness, not content-domain appropriateness.
- **Evidence strength:** Tier 3. Single source (hidden-questions), but the fresh-eyes review (pv2-flagship-fresh-eyes.md) independently identifies the metaphor-recipe conflict as the #1 likely failure mode, which partially validates this concern.

### TC-E03: Post-Recipe Compositional Deviation Phase
- **Source:** `_meta-cognitive/hidden-questions.md` (Exploit 3, lines 290-310)
- **What:** Add guidance for when a builder should DEVIATE from recipe values to serve the metaphor. Currently TC hands off to the recipe, which says "do not backtrack." But for 4/4 DESIGNED, the builder may need to override recipe defaults where the metaphor isomorphism table specifies different values. TC should include a "deviation protocol" that lists: (a) which recipe values CAN be overridden by metaphor (typography, background colors); (b) which CANNOT (soul constraints, container width, S-09 stacking); (c) the escalation path (QUERY message to planner).
- **Where in TC:** Phase 4.5 Sub-skill Output, approximately line 1350, as an addendum to the build plan output format
- **Priority:** MEDIUM-LOW -- Relevant only for Ceiling/Flagship tiers. The fresh-eyes review (pv2-flagship-fresh-eyes.md) predicts this will cap PA-05 at 3/4 if unresolved, but no experiment has validated this prediction.
- **Already applied?** NO. TC Phase 4.5 specifies output format but does not include deviation guidance.
- **Evidence strength:** Tier 3-4. Adversarial prediction, not empirically validated.

### TC-E04: Sunset Protocol for Recipe Recommendations
- **Source:** `_meta-cognitive/anti-reproduction-protocol.md` (M-2 Complexity Ratchet Brake, lines 280-320) and `_meta-cognitive/hidden-questions.md` (B-04, lines 200-215)
- **What:** Add a sunset mechanism to TC's Phase 4 guardrails. Currently rules only accumulate, never retire. The complexity ratchet diagnosis (anti-reproduction-protocol M-2) proposes: every rule must have a "last validated" date and a "retire if not validated within N experiments" clause. For TC specifically, this means mechanism minimums, transition counts, and spatial guardrails should have provenance tags and sunset criteria.
- **Where in TC:** Phase 4.0 guardrails section, approximately line 1200, as a meta-instruction about rule maintenance
- **Priority:** LOW -- This is process-level guidance, not execution guidance. Important for long-term health but not urgent.
- **Already applied?** NO. TC has no rule retirement mechanism.
- **Evidence strength:** Tier 2. Anti-reproduction protocol is widely cited (Files 02, 07, 41). The complexity ratchet is documented by multiple sources.

### TC-E05: Phase 0 Content Preparation Enhancement
- **Source:** `_meta-cognitive/hidden-questions.md` (B-03, lines 185-200) and `_meta-cognitive/pv2-flagship-fresh-eyes.md` (Part B, Phase 0 simulation)
- **What:** TC Phase 0 (Content Assessment) should include guidance on content PREPARATION, not just assessment. The fresh-eyes review found that the recipe assumes content has an "Introduction -> body -> conclusion" arc, with no guidance for flat-structure content (FAQ, reference docs, comparison matrices). TC should document: (a) which content structures are well-served by the TC pipeline; (b) which require adaptation; (c) minimum content preparation before entering TC (e.g., content must have identifiable sections).
- **Where in TC:** Phase 0 Content Assessment, approximately line 400
- **Priority:** MEDIUM -- The pipeline has been tested exclusively on prose-dominant and research-synthesis content. Non-standard content types are untested.
- **Already applied?** PARTIAL. TC Phase 0 assesses content type but does not distinguish between content types that are good fits vs. poor fits for the pipeline.
- **Evidence strength:** Tier 3. Fresh-eyes adversarial finding, corroborated by hidden-questions.

### TC-E06: Builder Visibility of Mechanism Catalog
- **Source:** `_meta-cognitive/codification-map.md` (Change 10, lines 590-650) and `_meta-cognitive/pipeline-implications.md` (lines 120-145)
- **What:** TC Phase 4 references the mechanism catalog for mechanism selection, but the catalog is routed to the PLANNER, not the BUILDER. TC should explicitly state that the mechanism catalog (or its relevant subset) must be included in the build plan output, so the builder receives mechanism descriptions alongside CSS instructions.
- **Where in TC:** Phase 4.5 Sub-skill Output format specification, approximately line 1350
- **Priority:** HIGH -- The inverted quality routing (rich files to planners, thin specs to builders) is identified as a root cause in Files 06, 22. TC's output format is the natural place to fix this.
- **Already applied?** PARTIAL. TC Phase 4.5 includes mechanism selections in the output, but the mechanism catalog's impact profiles and application modes (added during enrichment execution) are not explicitly routed to the builder.
- **Evidence strength:** Tier 1. Files 06, 22, and retro findings converge on this as a root cause.

### TC-E07: Perception Threshold Awareness in Phase 4
- **Source:** `_meta-cognitive/pv2-threshold-map.md` (Section B4, lines 107-119)
- **What:** TC SKILL has ZERO numeric perception thresholds. While the threshold-map correctly notes that perception thresholds belong in the execution context (operational recipe), not the derivation context (TC), TC Phase 4 should at minimum include a cross-reference: "CSS values in the build plan must exceed perception thresholds defined in the operational recipe. See perception-thresholds.md." This prevents TC from generating build plans with sub-perceptual specifications.
- **Where in TC:** Phase 4.0 guardrails section, approximately line 1200
- **Priority:** MEDIUM -- TC does not write CSS, but it specifies CSS-adjacent values (zone semantics, padding ranges, typography guidance). A one-line cross-reference costs nothing and prevents the pipeline's #1 failure mode.
- **Already applied?** NO. TC Phase 4.0 has spatial guardrails (940px container, 45-80 CPL) but no perception threshold reference.
- **Evidence strength:** Tier 1 (principle) / Tier 2 (implementation). The threshold-map explicitly assessed TC and concluded cross-reference is correct approach.

---

## SECTION 2: PA (PERCEPTUAL-AUDITING) ENRICHMENTS

### PA-E01: Minimum Perceptual Delta Thresholds Table
- **Source:** `_meta-cognitive/codification-map.md` (Change 2, lines 165-250) and `_meta-cognitive/pv2-threshold-map.md` (Section B5, lines 121-131)
- **What:** Add a Minimum Perceptible Delta table to PA SKILL, enabling auditors to calibrate perceptual assessments against numeric thresholds. The table:

  | CSS Property | Minimum Perceptible Delta |
  |-------------|--------------------------|
  | Background color | >= 15 RGB on at least one channel |
  | Font size | >= 2px between adjacent sections |
  | Letter-spacing | >= 0.03em (0.5px at 16px base) |
  | Line-height | >= 0.15 (e.g., 1.5 vs 1.7) |
  | Padding/margins | >= 24px between zones |
  | Border width | >= 1px (present or absent) |
  | Font weight | >= 200 (e.g., 400 vs 600) |
  | Total boundary gap | <= 120px stacked (S-09 fix) |

- **Where in PA:** After the Quantitative Guardrails section, approximately line 500, as a new subsection "Perception Threshold Reference"
- **Priority:** CRITICAL -- This is the corpus's most actionable artifact. PA auditors currently have no numeric grounding for "does this look different?" assessments. The codification-map provides exact before/after text.
- **Already applied?** NO. PA SKILL has spacing RANGE tables (line 385: heading gap 12-24px minimum to 32-64px maximum) and void thresholds (line 160: "3-5 viewport-heights") but ZERO minimum perceptible delta thresholds.
- **Evidence strength:** Tier 1 (principle: master prompt had zero perception terms, unanimous across 11/25 files). Tier 2 (specific values: N=1 per File 25). The pv2-threshold-map confirms PA SKILL has ABSENT numeric thresholds.

### PA-E02: Warm Palette Multiplier Note
- **Source:** `_meta-cognitive/pv2-threshold-map.md` (Section D3, lines 229-237) and `_meta-cognitive/pv2-flagship-perception-audit.md` (Part D, Section D4, line 281)
- **What:** Add a context note that warm-palette backgrounds (the KortAI default) require 1.3-1.5x the standard perception thresholds because warm tones within a narrow RGB band (R: 240-255, G: 235-250, B: 225-245) are harder to distinguish than equivalent deltas in cool tones. Practical implication: when auditing warm-palette pages, the effective background threshold is >= 20 RGB, not >= 15.
- **Where in PA:** Alongside the perception threshold table (PA-E01), as a "Context Note" subsection
- **Priority:** MEDIUM -- This interaction effect was identified by the threshold-mapper and perception-auditor independently. Without it, auditors may rate warm-palette pages as "different enough" when the computed delta passes 15 RGB but the perceptual difference is actually below threshold due to warm-tone compression.
- **Already applied?** NO. PA has no context-dependent threshold adjustments.
- **Evidence strength:** Tier 3. Two independent agents propose the multiplier, but it has not been validated empirically.

### PA-E03: PA-FUNCTIONAL and PA-TRUST Complementary Metrics
- **Source:** `_meta-cognitive/hidden-questions.md` (A-01, lines 115-138)
- **What:** Hidden-questions raises a fundamental challenge: PA-05 ("Does this feel DESIGNED?") may not capture the full quality picture. Two complementary metrics are proposed:
  - PA-FUNCTIONAL: "Does this page WORK for its intended purpose?" (content usability, not visual design)
  - PA-TRUST: "Would you trust the information on this page based on how it looks?" (credibility signal from design quality)

  These would be OPTIONAL additions to the PA protocol, not replacements for PA-05.
- **Where in PA:** After the existing question tiers (Tier 1-5), as a new "Experimental Complementary Metrics" subsection
- **Priority:** LOW -- Interesting conceptual contribution but entirely untested. PA already has 63 questions across 5 tiers. Adding more without removing obsolete ones violates the complexity ratchet principle.
- **Already applied?** NO.
- **Evidence strength:** Tier 4. Single source, speculative, no experimental validation.

### PA-E04: Coherence Verification Magnitude Check
- **Source:** `_meta-cognitive/pv2-flagship-perception-audit.md` (C32, Part C lines 200-232) and `_meta-cognitive/pv2-flagship-coherence-audit.md` (Part C, lines 143-186)
- **What:** PA's multi-coherence evaluation currently counts channels shifting at zone transitions (>= 3 channels) but does not verify the MAGNITUDE of each shift. A builder could satisfy the count with 3 sub-perceptual shifts. PA should add to its multi-coherence questions: "For each channel you counted as 'shifting,' does the delta exceed the perception threshold? Count only shifts that exceed the threshold."
- **Where in PA:** Multi-Coherence Evaluation section, approximately line 700
- **Priority:** HIGH -- The perception-auditor and coherence-auditor independently flagged this as the most significant gap in the counting-to-measuring paradigm inversion. Phase 8E in the operational recipe counts but doesn't measure; PA is the safety net that should catch this.
- **Already applied?** NO. PA's multi-coherence evaluation counts channels at transitions but has no magnitude verification step.
- **Evidence strength:** Tier 2. Two independent audit agents converge. The gap is structural (counting without measuring contradicts the core paradigm shift).

### PA-E05: S-09 Stacking Audit Guidance
- **Source:** `_meta-cognitive/codification-map.md` (Change 5, lines 340-400) and `_meta-cognitive/pv2-flagship-perception-audit.md` (C25-C28)
- **What:** PA's void prevention questions should explicitly include S-09 stacking checks. Currently PA asks about whitespace voids but does not specify HOW to measure boundary gaps. Add: "At each section boundary, sum: section-bottom-padding + divider-top-margin + divider-height + divider-bottom-margin + next-section-top-padding. If total exceeds 120px, flag as void."
- **Where in PA:** Tier 4 Void Prevention questions, approximately line 550
- **Priority:** MEDIUM -- The stacking loophole is a Tier 1 finding (zero dissent). PA already checks for voids but the measurement method is implicit.
- **Already applied?** PARTIAL. PA Tier 4 has void prevention questions but they are perceptual ("do you see dead space?") not arithmetic ("sum the gaps"). The arithmetic check would make the audit more reliable.
- **Evidence strength:** Tier 1 (the stacking loophole itself). Tier 2 (the specific 120px threshold).

### PA-E06: Perception Check Theater Detection
- **Source:** `_meta-cognitive/pv2-flagship-fresh-eyes.md` (Part D, lines 193-206) and `_meta-cognitive/pv2-comms-protocol.md` (Section A1, lines 55-61)
- **What:** The fresh-eyes review identifies "perception check theater" as the #2 most likely failure mode: builders self-report what they see, planners approve without independent verification. PA should add guidance for auditors to detect theater: "If a checkpoint file's PERCEPTION_CHECK sentence uses CSS terms (applied, set, used) instead of visual terms (see, notice, distinguish), flag the checkpoint as potentially unreliable. Recommend independent screenshot verification."
- **Where in PA:** Visual Auditing Protocol section, approximately line 800
- **Priority:** LOW-MEDIUM -- This is a process concern, not a perceptual one. PA is primarily a post-build audit, but for Mode 4 (9-auditor team), auditors may review checkpoint files as context.
- **Already applied?** NO. PA's Visual Auditing Protocol covers screenshot methodology but not checkpoint reliability assessment.
- **Evidence strength:** Tier 3. Single adversarial source, but the concern is logically sound.

### PA-E07: Channel Activation Target
- **Source:** `_meta-cognitive/pv2-flagship-perception-audit.md` (C44, Part D line 218) and `_meta-cognitive/pv2-flagship-coherence-audit.md` (SC-02 row)
- **What:** PA should include a tier-specific channel activation target:
  - Floor: 3+ channels perceptibly active
  - Middle: 4+ channels perceptibly active
  - Ceiling: 5+ channels perceptibly active
  - Flagship: 6-7 channels perceptibly active

  Currently PA counts mechanisms and zones but does not count perceptibly active CSS channels. The "technically active vs perceptibly active" distinction (C41) is the key diagnostic vocabulary.
- **Where in PA:** Tier 5 Compositional Depth questions, approximately line 600
- **Priority:** MEDIUM -- Two independent audit agents flagged the absence of channel activation targets. The tier-routing matrix (pv2-tier-routing.md) has graduated targets, but the PA SKILL does not.
- **Already applied?** NO. PA counts mechanisms and visual weight distribution but does not count perceptibly active CSS channels at transitions.
- **Evidence strength:** Tier 2. Perception-auditor and tier-routing matrix converge.

### PA-E08: 10 vs 15 RGB Resolution
- **Source:** `_meta-cognitive/pv2-threshold-map.md` (Section C, lines 148-196) and `_meta-cognitive/pv2-flagship-fresh-eyes.md` (Part A, Contradiction #1)
- **What:** If/when PA-E01 (threshold table) is applied, it MUST use 15 RGB, not 10 RGB. The threshold-map provides comprehensive evidence: (a) 10 RGB was specified in the remediation but only 3-6 RGB was achieved in practice; (b) 15 RGB has stronger empirical grounding from the failure analysis; (c) warm palettes compress perceptual range further; (d) no file in the corpus argues 15 is too high; (e) all meta-cognitive files written after full corpus analysis use 15, not 10.
- **Where in PA:** Embedded in PA-E01 threshold table value
- **Priority:** CRITICAL (conditional on PA-E01 being applied) -- If PA gets a threshold table, the wrong value would be worse than no table (false precision).
- **Already applied?** N/A (dependent on PA-E01)
- **Evidence strength:** Tier 2. Comprehensive evidence from threshold-mapper, fresh-eyes, and CLAUDE.md convergence. Recommended value: >= 15 RGB.

---

## SECTION 3: CODIFICATION MAP STATUS (10 Items)

Source: `_meta-cognitive/codification-map.md` (701 lines, 10 proposed changes)

| # | Change | Target | TC/PA? | Status | Notes |
|---|--------|--------|--------|--------|-------|
| 1 | Recipe format header for Phase 4 | TC SKILL.md Phase 4 | **TC** | **PENDING** | See TC-E01 above. Codification-map provides exact before/after text (lines 95-160). Not yet applied to TC SKILL. |
| 2 | Perception thresholds table | PA SKILL.md | **PA** | **PENDING** | See PA-E01 above. Codification-map provides exact before/after text (lines 165-250). Not yet applied to PA SKILL. |
| 3 | Builder CSS recipes in building protocol | compositional-core/CLAUDE.md | N/A (not TC/PA) | **PENDING** | Adds recipe format instructions to the building protocol. Not in scope for TC/PA skills. |
| 4 | Gate runner perception deltas (SC-09, SC-10) | spatial-gate-runner.js | N/A (not TC/PA) | **PENDING** | Adds programmatic perception threshold checks to gate runner. Not in scope for TC/PA skills. |
| 5 | S-09 stacking rule expansion | semantic-rules.md + tokens.css | N/A (not TC/PA) | **PENDING** | Expands S-09 to measure total boundary gap. PA-E05 proposes related PA enrichment. The underlying rule change is not in TC/PA scope. |
| 6 | Per-category mechanism minimums | TC SKILL.md Phase 3.5F | **TC** | **APPLIED** | TC Phase 3.5F Fractal Gate already contains per-category minimums (Spatial: 1+, Temporal: 1+, Material: 1+, Behavioral: 1+, Relational: 1+). Verified present in TC SKILL. |
| 7 | 3-transition minimum for coherence | TC SKILL.md Phase 4 | **TC** | **APPLIED** | TC Phase 4 already contains the 3-transition minimum requirement. Verified present in TC SKILL. |
| 8 | Agent communication protocol | Building protocol CLAUDE.md | N/A (not TC/PA) | **PENDING** | Adds inter-agent communication requirements. Not in scope for TC/PA skills. Addressed by pv2-comms-protocol.md design. |
| 9 | Opus for builder agents | Building protocol CLAUDE.md | N/A (not TC/PA) | **PENDING** | Specifies Opus model for builder agents. Not in scope for TC/PA skills. Confidence: Tier 3. |
| 10 | Builder visibility / quality routing | Building protocol CLAUDE.md | N/A (not TC/PA) | **PENDING** | Routes CSS-rich files to CSS-writing agents. Not in scope for TC/PA skills, but TC-E06 proposes a related TC enrichment (mechanism catalog in build plan output). |

### Summary

| Status | Count | Items |
|--------|-------|-------|
| APPLIED | 2 | Changes 6, 7 |
| PENDING (TC/PA scope) | 2 | Changes 1, 2 |
| PENDING (out of TC/PA scope) | 6 | Changes 3, 4, 5, 8, 9, 10 |

---

## SECTION 4: ANTI-REPRODUCTION GATE STATUS (7 Gates)

Source: `_meta-cognitive/anti-reproduction-protocol.md` (458 lines, 7 gates + 5 meta-protections)

### Gate-by-Gate Assessment

#### Gate 1: 50:1 Compression Gate
- **Binary test:** "Can a reader trace any pipeline rule to its research source in <= 2 hops?"
- **TC status:** PARTIALLY IN SKILL. TC Phase 4 guardrails have provenance references (e.g., spatial guardrails cite Alexander/Salingaros). But many rules lack provenance tags. TC-E01 (recipe framing header) would improve traceability.
- **PA status:** PARTIALLY IN SKILL. PA questions have provenance in the research sovereignty section but individual questions lack per-question source citations.
- **Overall:** PARTIAL in both skills. Neither skill fully satisfies the 2-hop traceability test.

#### Gate 2: Judgment Rule Gate
- **Binary test:** "Does every rule have an unambiguous pass/fail test?"
- **TC status:** MOSTLY IN SKILL. TC Phase 3.5 Lock-in Gate has the 18-point rubric with >= 12/18 threshold. TC Phase 4 guardrails have binary thresholds (940px container, 45-80 CPL, per-category minimums). However, TC Phase 3 (Metaphor Collapse) has judgment criteria in the 6-criterion rubric that could be considered non-binary (e.g., "structural isomorphism" evaluation).
- **PA status:** MOSTLY IN SKILL. PA questions are structured as binary (yes/no) or scaled (1-4). The Tier 5 compositional depth questions contain some judgment language ("does it feel designed?") but this is inherent to perceptual auditing and is the point of PA-05, not a defect.
- **Overall:** MOSTLY present. Both skills are predominantly binary. Remaining judgment is either intentional (perceptual assessment is inherently subjective) or in TC Phase 3 where metaphor evaluation resists full binarization.

#### Gate 3: Guardrail-to-Playbook Ratio Gate
- **Binary test:** "For every 'do not' instruction, is there a paired 'instead do' with a concrete example?"
- **TC status:** MISSING from TC. TC Phase 4 guardrails list constraints (no spacing > 96px, no more than 5 zones) without always pairing them with "instead do" instructions. TC-E01 (recipe framing) would partially address this.
- **PA status:** N/A. PA is an audit skill, not a building skill. Guardrail-to-playbook ratio applies to building instructions, not audit questions.
- **Overall:** MISSING from TC. N/A for PA.

#### Gate 4: Builder Visibility Gate
- **Binary test:** "Does every agent receive all information needed for its specific role?"
- **TC status:** N/A. TC is a derivation pipeline, not a multi-agent building protocol. Builder visibility is an orchestration concern addressed by the building protocol, not by TC.
- **PA status:** PARTIALLY IN SKILL. PA auditors receive the full skill content, but the screenshot pre-capture pattern (team lead takes screenshots before spawning auditors) is documented in MEMORY.md, not in the PA SKILL itself. PA Mode 4 specifies 9 parallel auditors but doesn't specify the screenshot delivery protocol.
- **Overall:** N/A for TC. PARTIAL for PA (screenshot delivery protocol not in skill).

#### Gate 5: Quality Routing Gate
- **Binary test:** "Are CSS-rich reference files routed to CSS-writing agents?"
- **TC status:** N/A. TC does not route files to agents. This is an orchestration concern. However, TC-E06 proposes including mechanism catalog content in the build plan output, which partially addresses routing at the TC level.
- **PA status:** N/A. PA does not route files.
- **Overall:** N/A for both skills. Addressed by the building protocol.

#### Gate 6: Meta-to-Output Ratio Gate
- **Binary test:** "Is the ratio of meta-discussion to actionable output <= 10:1?"
- **TC status:** IN SKILL (implicitly). TC SKILL is ~2,006 lines producing a build plan of ~100-500 lines, yielding a ratio of approximately 4:1 to 20:1 depending on plan complexity. The skill itself does not monitor this ratio.
- **PA status:** IN SKILL (implicitly). PA SKILL is ~1,209 lines producing audit reports. The ratio depends on audit mode (Mode 1 produces ~50 lines; Mode 4 produces ~500+ lines across 9 auditors).
- **Overall:** Neither skill explicitly monitors the meta-to-output ratio. The anti-reproduction-protocol notes Gate 6 is ALREADY VIOLATED at infinity:1 in the pipeline-analysis corpus. Adding a meta:output self-check to both skills would be possible but is more of a process concern than a skill concern.

#### Gate 7: Recipe-vs-Checklist Gate
- **Binary test:** "Does every building section provide sequenced steps with exact values, not just constraints?"
- **TC status:** MISSING from TC. TC Phase 4 is predominantly a constraint list with thresholds, not a sequenced recipe with exact values. TC-E01 (recipe framing header) is the proposed fix. The codification-map specifically targets this.
- **PA status:** N/A. PA is an audit skill. The recipe-vs-checklist distinction applies to building instructions, not audit protocols. PA's audit modes ARE effectively recipes (sequenced steps for conducting audits), but the gate is about building instructions.
- **Overall:** MISSING from TC. N/A for PA.

### Anti-Reproduction Gate Summary

| Gate | TC Status | PA Status |
|------|-----------|-----------|
| Gate 1: Compression | PARTIAL -- provenance exists but incomplete | PARTIAL -- research sovereignty section exists but per-question citations absent |
| Gate 2: Judgment Rule | MOSTLY PRESENT -- binary thresholds throughout, some judgment in Phase 3 metaphor evaluation | MOSTLY PRESENT -- binary/scaled questions, inherent subjectivity in perceptual assessment |
| Gate 3: Guardrail:Playbook | MISSING -- constraints without paired "instead do" | N/A -- audit skill, not building skill |
| Gate 4: Builder Visibility | N/A -- derivation pipeline, not multi-agent protocol | PARTIAL -- Mode 4 lacks screenshot delivery protocol |
| Gate 5: Quality Routing | N/A -- not a routing mechanism | N/A -- not a routing mechanism |
| Gate 6: Meta:Output Ratio | IMPLICIT -- no explicit monitoring | IMPLICIT -- no explicit monitoring |
| Gate 7: Recipe vs Checklist | MISSING -- Phase 4 is constraint-list format | N/A -- audit skill, not building skill |

### Meta-Process Protections (5 items from anti-reproduction-protocol)

| Protection | In TC? | In PA? | Notes |
|------------|--------|--------|-------|
| M-1: Cheapest Experiment First | NO | NO | Process guidance, not skill content. Would belong in building protocol. |
| M-2: Complexity Ratchet Brake | NO | NO | See TC-E04 (sunset protocol proposal). Neither skill has rule retirement. |
| M-3: Two-Instance Pattern | NO | NO | Process guidance about using separate instances for drafting and reviewing. |
| M-4: Discussion-Before-Codification | NO | NO | Process guidance for user decision-making. |
| M-5: Anti-Echo-Chamber | NO | PARTIAL | PA Mode 4 (9 independent auditors) implements fresh-eyes anti-echo-chamber. But M-5 is broader (about ensuring independent analysis), not just about PA deployment. |

---

## SECTION 5: CROSS-FILE FINDINGS (Not Captured Above)

These findings from the subdirectory files are noteworthy but do not cleanly map to specific TC or PA enrichments.

### Finding F-01: CCS Replacement Gap
- **Source:** `_meta-cognitive/pv2-flagship-perception-audit.md` (C05-C06) and `_meta-cognitive/pv2-flagship-coherence-audit.md` (MC-01 row)
- **What:** CCS (Compositional Coupling Score) was dropped entirely from Pipeline v2 without explicit replacement. Multi-coherence verification (Phase 8E) + perception thresholds (Phase 8A) together REPLACE CCS, but this connection is implicit. Neither TC nor PA references CCS or its replacement.
- **Relevance to TC/PA:** TC previously referenced CCS in the mechanism catalog's impact profiles. If CCS is dropped, TC should acknowledge the replacement. PA should know what to evaluate instead of CCS.
- **Recommendation:** Add a one-line note to both skills: "CCS has been superseded by the combination of multi-coherence channel counting (>= 3 channels shifting at zone transitions) and perception threshold verification (all shifts exceed minimum perceptible deltas)."

### Finding F-02: Discussion Guides Contain No TC/PA-Specific Enrichments
- **Source:** All 6 files in `_discussion-guides/`
- **What:** The discussion guides are conversation facilitation tools (per-file surprises, adversarial challenges, probing questions, 10-session walkthrough). They contain rich analytical content but NO actionable enrichments for TC or PA. They are meta-level guidance for discussing the corpus, not operational guidance for building or auditing.
- **Relevance to TC/PA:** None directly.

### Finding F-03: Adversarial Files Contain Validation, Not Enrichment
- **Source:** All 4 files in `_adversarial/`
- **What:** The adversarial files test the CLAUDE.md + discussion guides system (fresh-instance navigation, stress-testing, discussion readiness, structural integrity). They validate existing content rather than proposing new enrichments. The one exception is the fresh-instance test, which identifies 7 navigation gaps in CLAUDE.md -- none of which are TC/PA gaps.
- **Relevance to TC/PA:** None directly.

### Finding F-04: Draft Files Are Process Infrastructure
- **Source:** Both files in `_drafts/` (ingestion-prompt.md, discussion-protocol.md)
- **What:** These are draft bootstrap and discussion protocols for new instances engaging with the corpus. They do not contain TC/PA enrichments.
- **Relevance to TC/PA:** None directly.

### Finding F-05: PV2 Flagship Audit Files Are Primarily Recipe Validation
- **Source:** 15 `pv2-flagship-*.md` files in `_meta-cognitive/`
- **What:** These files audit the operational recipe (File 42) against various quality dimensions (perception, compression, coherence, CSS philosophy, traceability, verbiage, fresh-eyes, self-test, etc.). Their findings primarily target File 42 edits, not TC/PA skill edits. The TC/PA-relevant findings have been extracted as enrichments above (PA-E04 from coherence audit, PA-E07 from perception audit, TC-E02/TC-E03 from fresh-eyes review).
- **Relevance to TC/PA:** Indirect. The primary TC/PA enrichments have been extracted above. The remaining findings target the operational recipe and building protocol.

---

## SECTION 6: PRIORITY RANKING

### Critical (Apply Before Next Build)
1. **PA-E01** -- Perception threshold table in PA SKILL (codification-map Change 2)
2. **PA-E08** -- 15 RGB resolution (conditional on PA-E01)
3. **TC-E01** -- Recipe framing header in TC Phase 4 (codification-map Change 1)

### High (Apply Before Next Flagship)
4. **PA-E04** -- Coherence verification magnitude check
5. **TC-E06** -- Builder visibility of mechanism catalog in build plan output
6. **TC-E07** -- Perception threshold cross-reference in TC Phase 4

### Medium (Apply When Convenient)
7. **TC-E02** -- Content-appropriateness gate
8. **TC-E05** -- Phase 0 content preparation enhancement
9. **PA-E02** -- Warm palette multiplier note
10. **PA-E05** -- S-09 stacking audit guidance
11. **PA-E07** -- Channel activation target by tier

### Low (Track but Defer)
12. **TC-E03** -- Post-recipe compositional deviation phase
13. **TC-E04** -- Sunset protocol for recipe recommendations
14. **PA-E03** -- PA-FUNCTIONAL and PA-TRUST complementary metrics
15. **PA-E06** -- Perception check theater detection

---

## SECTION 7: SUMMARY STATISTICS

| Category | Identified | Already Applied | Pending |
|----------|-----------|-----------------|---------|
| TC enrichments | 7 (TC-E01 through TC-E07) | 0 | 7 |
| PA enrichments | 8 (PA-E01 through PA-E08) | 0 | 8 |
| Codification map items (TC/PA scope) | 4 (Changes 1, 2, 6, 7) | 2 (Changes 6, 7) | 2 (Changes 1, 2) |
| Codification map items (out of scope) | 6 (Changes 3, 4, 5, 8, 9, 10) | 0 | 6 |
| Anti-reproduction gates (TC relevant) | 4 (Gates 1, 2, 3, 7) | 1 MOSTLY + 1 PARTIAL | 2 MISSING |
| Anti-reproduction gates (PA relevant) | 3 (Gates 1, 2, 4) | 1 MOSTLY + 2 PARTIAL | 0 fully MISSING |
| Anti-reproduction gates (N/A for both) | 2 (Gates 5, 6) | -- | -- |
| Meta-process protections in skills | 0 of 5 | -- | -- |
| Cross-file findings (non-enrichment) | 5 (F-01 through F-05) | -- | -- |

**Total actionable enrichments: 15 (7 TC + 8 PA), of which 3 are CRITICAL priority.**

---

*END OF ENRICHMENT AUDIT*

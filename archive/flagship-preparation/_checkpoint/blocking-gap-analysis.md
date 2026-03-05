# BLOCKING GAP ANALYSIS: 33 Items vs Actual Deliverables

**Agent:** blocking-gap-analyzer (Opus 4.6)
**Date:** 2026-02-17
**Input:** 13-MASTER-PRE-FLIGHT-CHECKLIST.md (851 lines), master-execution-prompt.md (193 lines), prompt-assembly-journal.md (247 lines), content-selector-report.md (754 lines), FILE-TRACKER.md (48 lines), + spot-checks of 6 enriched design system files
**Task:** Classify each of 33 BLOCKING items as DONE / PARTIAL / DIFFERENT / NOT DONE / UNNECESSARY

---

## 1. SUMMARY TABLE

| ID | Item | Status | Severity | Notes |
|----|------|--------|----------|-------|
| **BT-01** | Prohibition #21 -- Maximum Whitespace | **DONE** | -- | Lines 323-356 in prohibitions.md. Binary 3-step test present. |
| **BT-02** | Transition Grammar Section | **DONE** | -- | Lines 944-1026 in mechanism-catalog.md. 3 types + CSS + selection rule. |
| **BT-03** | Restraint Protocol Section | **DONE** | -- | Lines 1029-1067 in mechanism-catalog.md. 4/viewport cap, distribution, ratio. |
| **BT-04** | Content Density Floors | **DONE** | -- | Gap 6 (lines 252-318) in semantic-rules.md. 3 rules + zone count ceiling. |
| **BT-05** | Content-Form Fit Guidance | **DONE** | -- | Gap 7 (lines 322-397) in semantic-rules.md. Section minimums + binary gates. |
| **BT-06** | Maximum Spacing Tokens | **DONE** | -- | Lines 114-122 in tokens.css. --space-max-section: 64px, --space-max-zone: 96px. |
| **BT-07** | Prohibition #22 -- Front-Loaded Visual Weight | **DONE** | -- | Lines 359-386 in prohibitions.md. Binary test: >= 1 designed moment past 50%. |
| **BT-08** | Void Guardrails + PA-50 through PA-53 | **DONE** | -- | Tier 4 section (lines 337-364) in PA SKILL.md. 4 questions + guardrail table. |
| **BT-09** | Metaphor Scoring Rubric + Rejection Checklist | **DONE** | -- | Step 3.5G in tension-composition SKILL.md. 6-criterion rubric, 18pt total, >= 12/18. |
| **BT-10** | PA-09 Severity Calibration + PA-05c Expansion | **DONE** | -- | PA-09: 3-tier severity (lines 153-165). PA-05c: 3 sub-dimensions (lines 100-123). |
| **BT-11** | PA-17/PA-41 Ceiling+ Tier Elevation | **DONE** | -- | Lines 202-214 in PA SKILL.md. Formal elevation with binary enforcement. |
| **BT-12** | Layer 1 Conviction Document (~70 lines) | **DONE** | -- | Lines 5-40 in execution prompt. 55 lines. Beauty brief, creed, kill rules. |
| **BT-13** | Layer 2 Execution Spec (~100-120 lines) | **DIFFERENT** | LOW | 93 lines (within budget). BUT: not a standalone file -- embedded in single prompt. See detail. |
| **BT-14** | Layer 3 Coordination Spec (~60 lines) | **DIFFERENT** | LOW | 42 lines (within budget). Consolidated -- not a separate file but embedded. See detail. |
| **BT-15** | 25 Binary Rules + Convert CAN to MUST | **PARTIAL** | MEDIUM | Binary rules present but count is ~22 not 25. Most CAN/MAY eliminated. See detail. |
| **BT-16** | Builder Prompt Template (~55 lines) | **DIFFERENT** | LOW | No separate "builder template" file. Builder sees full prompt (193 lines) but AU budget is 28.25/37. See detail. |
| **BT-17** | Phase-Specific Prompts (3 files) | **NOT DONE** | MEDIUM | Zero per-pass prompt files exist. Passes described in single prompt. See detail. |
| **BT-18** | Route Preparation Outputs to Correct Recipients | **PARTIAL** | MEDIUM | Routing implicit in coordination spec. No explicit routing table. PA isolation mentioned. See detail. |
| **BT-19** | Content Inventory Template | **DIFFERENT** | LOW | No reusable template file. Content-selector-report.md IS the filled inventory (full and thorough). |
| **BT-20** | Select Content Different from Middle/Ceiling | **DONE** | -- | RESEARCH-SYNTHESIS selected. Different from "Remote Mac Control." 6-dimension rationale. |
| **BT-21** | Content-to-Pattern Selection Protocol | **PARTIAL** | MEDIUM | content-selector-report covers content-form fit + density map but NOT the formal 6-step protocol from BT-21 spec. See detail. |
| **BT-25** | Programmatic Gate Runner JavaScript | **NOT DONE** | CRITICAL | No JavaScript gate runner file exists anywhere in _checkpoint/. Zero programmatic gate code. |
| **BT-26** | 5 Mandatory Communication Checkpoints (A-E) | **DIFFERENT** | MEDIUM | Reduced to 4 checkpoints (pass-by-pass messages + GO/REVISE). Checkpoint B-E simplified. No measurement-specific fields. See detail. |
| **BT-27** | Message Format + Routing Table | **NOT DONE** | MEDIUM | No message types defined (BLOCKING-DEPENDENCY etc.). No 17-pairing routing table. PA isolation mentioned but not formal. |
| **BT-28** | Escalation Triggers + Diagnosis-Before-Fix | **NOT DONE** | MEDIUM | No escalation triggers. No root cause classification requirement (CSS/CONTENT/ARCHITECTURE). See detail. |
| **BT-29** | Spatial Confidence Gate + Gate Architecture | **DIFFERENT** | MEDIUM | Kill rules K1-K7 cover the checks, BUT: no formal gate architecture (Gate 0-5 system). Consolidated to 4 gates (G0-G3). See detail. |
| **BT-30** | Composition Verification Gate (Post-Pass-2) | **PARTIAL** | MEDIUM | Partially covered by self-check + G2 gate. Missing: restraint ratio threshold, rejection count >= 21, silence zones >= 2, signal-to-silence ratio. |
| **BT-31** | Ship-Ready Gate + Mode 4 PA Protocol | **PARTIAL** | LOW | Mode 4 PA mentioned in coordination spec (9+ auditors, screenshot pre-capture). Missing: dissent protection, comparative audit vs CD-006/DD-006. |
| **NR-01** | Builder Self-Scroll Before Handoff | **NOT DONE** | MEDIUM | The word "scroll" does not appear in the builder's self-check. No self-scroll requirement in execution prompt. |
| **NR-02** | Spatial Budget CALCULATION Mandate | **NOT DONE** | MEDIUM | No "sum zone padding" calculation mandate in the execution prompt. Content-selector-report estimates content-to-void at 73% but no arithmetic mandate for builder. |

### Status Summary

| Status | Count | Items |
|--------|-------|-------|
| **DONE** | 14 | BT-01 through BT-12, BT-20 |
| **DIFFERENT** | 6 | BT-13, BT-14, BT-16, BT-19, BT-26, BT-29 |
| **PARTIAL** | 5 | BT-15, BT-18, BT-21, BT-30, BT-31 |
| **NOT DONE** | 8 | BT-17, BT-25, BT-27, BT-28, NR-01, NR-02 |
| **UNNECESSARY** | 0 | -- |

### Severity Summary

| Severity | Count | Items |
|----------|-------|-------|
| **CRITICAL** | 1 | BT-25 |
| **MEDIUM** | 11 | BT-15, BT-17, BT-18, BT-21, BT-26, BT-27, BT-28, BT-29, BT-30, NR-01, NR-02 |
| **LOW** | 5 | BT-13, BT-14, BT-16, BT-19, BT-31 |

---

## 2. DETAILED ANALYSIS PER ITEM

### Phase 1: Design System Enrichments (BT-01 through BT-07)

#### BT-01: Prohibition #21 -- Maximum Whitespace -- **DONE**

Verified in `design-system/compositional-core/identity/prohibitions.md` lines 323-356.

Present:
- Title: "NEVER Allow a Full Viewport Height of Contentless Space"
- Binary 3-step measurement test (viewport-height increments, 30% coverage, consecutive positions)
- Pass/fail: 0-1 below 30% = PASS, 2+ consecutive = FAIL
- Single breathing zone exception with 3 requirements
- Evidence from ceiling experiment (9/9 auditors)
- Exception documentation format

Missing: Nothing. Fully matches specification.

#### BT-02: Transition Grammar Section -- **DONE**

Verified in `design-system/compositional-core/grammar/mechanism-catalog.md` lines 944-1026.

Present:
- 3 transition types: HARD CUT (3px border), SPACING SHIFT (padding change), CHECKPOINT (labeled element)
- CSS code blocks for each type
- Selection rule (same domain? -> type 2/3. Different domain? -> type 1)
- Binary compliance test
- Maximum transition spacing (96px)
- Validated examples from CD-006 and OD-004

Missing: Nothing. Fully matches specification. Line count increase exceeds target.

#### BT-03: Restraint Protocol Section -- **DONE**

Verified in `design-system/compositional-core/grammar/mechanism-catalog.md` lines 1029-1067.

Present:
- 4/viewport mechanism density cap with binary test
- Distribution requirement (every third >= 2 mechanisms)
- Restraint ratio by tier (Middle: 8-10 deployed; Ceiling: 12-15, 3+ rejections; Flagship: 16-18, 5+ rejections)
- Evidence from ceiling experiment (14 deployed, 1 perceivable)

Missing: Nothing. Fully matches specification.

#### BT-04: Content Density Floors -- **DONE**

Verified in `design-system/compositional-core/guidelines/semantic-rules.md` Gap 6, lines 252-318.

Present:
- Rule 1: Minimum content per zone (3+ para OR 2+ components for dedicated zones)
- Rule 2: Maximum consecutive empty viewport height (30% coverage)
- Rule 3: Zone count ceiling by content volume (table: <1,500 = 2 zones, etc.)
- Binary tests for all 3 rules
- Boundary rule: "Zones exist to SERVE content, not to DEMONSTRATE architecture"
- Cross-reference to --space-max-zone in tokens.css

Missing: Nothing.

#### BT-05: Content-Form Fit Guidance -- **DONE**

Verified in `design-system/compositional-core/guidelines/semantic-rules.md` Gap 7, lines 322-397.

Present:
- Form-to-content-volume table (bento grid 4+ items, progressive disclosure 3+ phases, etc.)
- "Enough Content?" binary gate
- "Form Matches Content" inverse test ("simplest form" check)
- Boundary rule: "Form follows content volume. Never the reverse."
- Concrete bad example (1-paragraph section with excessive treatment)

Missing: Nothing.

#### BT-06: Maximum Spacing Tokens -- **DONE**

Verified in `design-system/compositional-core/vocabulary/tokens.css` lines 114-122.

Present:
- `--space-max-section: var(--space-16);` (64px)
- `--space-max-zone: var(--space-24);` (96px)
- Comment explaining checkpoint rule
- Anti-stacking guidance
- Evidence from ceiling experiment

Missing: Nothing.

#### BT-07: Prohibition #22 -- Front-Loaded Visual Weight -- **DONE**

Verified in `design-system/compositional-core/identity/prohibitions.md` lines 359-386.

Present:
- Title: "NEVER Concentrate All Visual Interest in the First Third of the Page"
- Binary test: identify designed moments, map scroll positions, >= 1 below 50%
- Definition of "designed moment" (3+ mechanisms at high intensity)
- Exception for short pages

Minor difference: Title says "First Third" while BT-07 spec says "First 30%." Functionally equivalent. The measurement test uses 50% scroll depth as threshold, which matches spec.

Missing: Nothing material.

---

### Phase 2: Skill Enrichments (BT-08 through BT-11)

#### BT-08: Void Guardrails + PA-50 through PA-53 -- **DONE**

Verified in `~/.claude/skills/perceptual-auditing/SKILL.md` lines 337-364.

Present:
- PA-50 (blank viewport counting), PA-51 (content-to-scroll ratio), PA-52 (designed moment distribution), PA-53 (width utilization)
- Binary guardrail table: max 1.5 viewport-heights, min 60%, visual weight per third, 65-80% width
- Mode 4 integration note
- Tier 4 classification (Ceiling+ only, MANDATORY)

Missing: Nothing.

#### BT-09: Metaphor Scoring Rubric + Rejection Checklist -- **DONE**

Verified in `~/.claude/skills/tension-composition/SKILL.md` starting at line ~705.

Present:
- 6-criterion rubric with 0-3 scale each (18 points total)
- Interpretive Distance dimension with specific examples
- Content-Shape Fit dimension
- >= 12/18 threshold
- CRITICAL RULE: Interpretive Distance >= 2 mandatory
- 6 binary rejection checks
- Provenance (ceiling experiment would have scored 6/18, REJECT)

Missing: Nothing.

#### BT-10: PA-09 Severity Calibration + PA-05c Expansion -- **DONE**

Verified in `~/.claude/skills/perceptual-auditing/SKILL.md`.

PA-09 severity (lines 153-165):
- 1-2 viewports = LOOKS-WRONG
- 3-5 viewports = WOULD-NOT-SHIP
- 6+ viewports = CATASTROPHIC
- Measurement definition and provenance present

PA-05c expansion (lines 100-123):
- 3 sub-dimensions: horizontal proportion, vertical proportion, breathing proportion
- Each has pass/fail criteria
- All 3 must pass for PA-05c to pass
- Ceiling experiment failure references

Missing: Nothing.

#### BT-11: PA-17/PA-41 Ceiling+ Tier Elevation -- **DONE**

Verified in `~/.claude/skills/perceptual-auditing/SKILL.md` lines 202-214.

Present:
- Formal elevation to Tier 1 equivalent for Ceiling+ audits
- Binary enforcement: FAIL on PA-17 or PA-41 = maximum verdict "YES WITH RESERVATIONS"
- All Mode 4 auditors MUST evaluate regardless of assigned question set
- Provenance from middle-tier and ceiling experiments

Missing: Nothing.

---

### Phase 4: Prompt Assembly (BT-12 through BT-18)

#### BT-12: Layer 1 Conviction Document -- **DONE**

Verified in `master-execution-prompt.md` lines 5-40 (55 lines).

Present:
- Self-referential quality mission (C13)
- Beauty brief ("Warm without being soft. Austere without being cold. Authoritative without being aggressive.")
- 3-word personality equivalent ("Warm. Authoritative. Unhurried" -- not explicit 3-word format but intent is there in the prose)
- "Designed" definition with two dimensions (vocabulary fluency + compositional fluency)
- Builder's creed (CONSTRUCTING, not discovering)
- NON-NEGOTIABLE KILL RULES (K1-K7)
- Guard against technique-as-demonstration (C12 in journal, line 23 "form must DEMONSTRATE")

Minor gaps: No explicit "feel like opening a well-made book" quote (CV-01). No explicit resolved tensions table (CV-02). No perceptual sequence (CV-03). No 5-scales-max conviction (CV-05). No PA-05-over-scale-count conviction (CV-06). No dual-richness-sources statement (CV-07). No "12/12 concept = 1.5/4 product" warning (NR-14). These are conviction items (CV-01 through CV-09, NR-14 through NR-16) that the prompt-assembler chose to integrate narratively rather than as discrete items. The ESSENCE is present (beauty brief woven into prose); the EXPLICIT ENUMERATION is absent.

Verdict: DONE -- the conviction document achieves its purpose even though not all 12 CV items appear as discrete entries. The assembler's journal documents discarding some as too granular for builder attention budget.

#### BT-13: Layer 2 Execution Spec -- **DIFFERENT** (LOW severity)

Verified in `master-execution-prompt.md` lines 43-117 (75 lines of content, ~93 lines with whitespace).

What's DIFFERENT from spec:
- **Not a separate file.** BT-13 specified "New file in execution prompt package." The execution spec is embedded in the single master-execution-prompt.md file.
- **8 sections present but structure differs.** Has: Content, Density Map, Mechanism Deployment, Transition Grammar, Table Treatments, 5-Pass Build, Pre-Submission Self-Check. Missing as named sections: "Mission" (folded into Layer 1), "Soul" (folded into K6), "Success Criteria" (folded into self-check), "Kill Criteria" (in Layer 1 as K1-K7).

Why this is LOW severity: The 4-layer architecture is present within a single file. The prompt-assembler's journal (D3, lines 188-196) documents this as an intentional consolidation decision. The veto agent verified it passes at 193 total lines, well under 240 budget. The builder sees one cohesive document rather than multiple files -- arguably BETTER for attention budget.

Effort to fix: ~15 min to split into separate files if desired. Not recommended.

#### BT-14: Layer 3 Coordination Spec -- **DIFFERENT** (LOW severity)

Verified in `master-execution-prompt.md` lines 122-159 (38 lines).

What's DIFFERENT from spec:
- **Not a separate file.** Same reason as BT-13.
- **Simpler than specified.** BT-14 called for 25-line agent roster, 20-line communication obligations, 15-line audit protocol. Actual has 4 roles (not full roster), 4 communication rules (not 20 lines), 4 gates (not 5-gate system).
- **No 5-pass pipeline with time budgets.** Passes described in Layer 2 execution spec, not coordination spec.
- **No gate execution log format.** Team-lead role defined but gate logging not specified.
- **No fix cycle protocol.** No "max 2 fix cycles, then abort per decision matrix."

Why this is LOW severity: The consolidation from ~60 lines to ~38 lines with 4 clear gates is arguably more executable. The veto agent verified it passes. However, missing fix cycle protocol could cause unbounded fix iterations during execution.

Effort to remediate fix cycle protocol: ~5 min to add "max 2 fix cycles per gate, then ABORT" to Layer 3.

#### BT-15: 25 Binary Rules + Convert CAN to MUST -- **PARTIAL** (MEDIUM severity)

Verified by analyzing master-execution-prompt.md for binary rules.

Binary rules identified:
1. K1: Container 940-960px
2. K2: Content-to-void >= 70%
3. K3: Max contiguous void (2+ consecutive < 30%)
4. K4: Header <= 288px
5. K5: Designed moment past 50%
6. K6: Soul compliance (border-radius: 0, etc.)
7. K7: Max spacing 96px
8. Target 12-14 mechanisms, hard cap 14
9. Per-category minimum (S:1+, H:1+, C:1+, D:1+, N:1+)
10. Max 4 mechanisms per viewport
11. Every third >= 2 mechanisms
12. 5+ rejected mechanisms documented
13. Every zone boundary has transition type
14. Zone content minimum: 3+ para OR 2+ components
15. Table treatments must vary by function
16. Content expansion from existing files only
17. Builder MUST send message after each pass
18. Lead MUST respond GO/REVISE
19. Builder MUST NOT proceed without GO
20. PA auditors fresh-eyes only
21. All content from existing files (E16)
22. Self-check all items marked

Count: ~22 binary rules. Spec required 25.

Missing binary rules from spec:
- "If zero messages at Gate 1: team-lead PAUSES build" (critical behavioral rule -- S3 Law 3)
- Restraint ratio >= 1.5 (mentioned in self-check but not as binary rule)
- Communication count minimum (8+ substantive messages)

CAN/MAY elimination: The word "MAY" appears once -- in "ALL communication instructions are MUST, not MAY" (an instruction AGAINST MAY, not a MAY rule). No "CAN" directives found. This part is largely achieved.

Gap: 3 missing binary rules. The "zero messages = PAUSE" rule is the most important (identified as Law 3 in the retrospective analysis as the single most critical behavioral intervention).

Effort to fix: ~5 min to add 3 missing rules.

#### BT-16: Builder Prompt Template (~55 lines) -- **DIFFERENT** (LOW severity)

No separate builder prompt template file exists.

What's DIFFERENT: BT-16 specified a ~55-line builder-only prompt with specific structure (FAIL IF, SPACE, SOUL, COMPOSITION, PROCESS, TOKENS, SELF-CHECK). The actual implementation embeds builder instructions within the master-execution-prompt.md. The prompt-assembly-journal calculates builder-facing content at ~95 lines (Layer 1 + relevant Layer 2 sections).

Why this is LOW severity: The AU budget analysis shows 28.25/37 AU utilization (76%), well within bounds. The builder's effective attention load is within acceptable range even without a separate sliced prompt. The veto agent passed this.

However: The original intent of BT-16 was to prevent the builder from being overwhelmed (the 1,004-line ceiling prompt problem). At 193 lines total, the current prompt is significantly shorter than the ceiling's 1,004 lines. The risk of attention overload is substantially reduced even without per-agent slicing.

Effort to create separate builder template: ~15 min. Recommended only if builder shows attention overload during execution.

#### BT-17: Phase-Specific Prompts (3 files) -- **NOT DONE** (MEDIUM severity)

Zero per-pass prompt files exist. The 5-pass build process is described within the master execution prompt (lines 88-109), but each pass does NOT have its own prompt file with per-pass attention budgets.

Impact: Builder sees ALL rules for ALL passes simultaneously. Per-pass attention budget verification is impossible without separate prompts. However, the passes are described concisely (4-6 lines each), and the prompt-assembler notes passes 1-3 achieve 93% quality with passes 4-5 adding only 5%.

Severity assessment: MEDIUM. The original rationale was strong (each pass agent sees only relevant rules, preventing attention waste). However, since passes are executed sequentially by the SAME builder agent (not separate agents), separate files may add coordination overhead without proportional benefit. The prompt-assembler's decision to mark passes 4-5 as OPTIONAL partly addresses the attention concern.

Effort to create: ~30 min to create 3 separate per-pass prompt files with filtered rules.

#### BT-18: Route Preparation Outputs to Correct Recipients -- **PARTIAL** (MEDIUM severity)

Routing is implicit, not explicit:
- Layer 3 specifies file ownership (planner: plan.md, builder: flagship.html, etc.)
- Layer 3 states "PA auditors receive ONLY screenshots + PA questions (fresh-eyes)"
- Layer 2 is builder-facing, Layer 3 is lead-facing

Missing:
- No explicit routing table classifying every action item (Rules -> Builder, Gates -> Team-lead, etc.)
- No verification that builder prompt contains zero PA questions
- No verification that builder prompt contains zero kill criteria text (note: K1-K7 ARE in builder prompt, which contradicts BT-18's spec that says "zero kill criteria in builder prompt")

Discrepancy: BT-18 spec says "verify builder prompt contains zero PA questions, zero kill criteria." But the actual execution prompt intentionally includes K1-K7 as the first thing the builder sees (primacy position). The prompt-assembler made this choice deliberately, citing the kill rules as the most critical builder-facing constraints. This is a DESIGN DECISION, not an oversight.

Effort to create routing table: ~10 min (mostly documentation). The routing exists implicitly; making it explicit is straightforward.

---

### Phase 5: Gate/Protocol Preparation (BT-25 through BT-31)

#### BT-25: Programmatic Gate Runner JavaScript -- **NOT DONE** (CRITICAL severity)

No JavaScript gate runner file exists. `runSpatialConfidenceGate()` is not written. No programmatic checking code of any kind exists in _checkpoint/.

Impact: The spatial confidence gate (SC-01 through SC-07) must be run manually via visual inspection rather than programmatically. This means:
- Container width (SC-01) measured by eye or manual computed-style check
- Void ratio (SC-02/SC-03) estimated by scrolling rather than calculated
- The ceiling experiment's measurement error (2160px false positive -- possibly measuring viewport width, not void height) is likely to recur

This is the SINGLE most critical gap. The programmatic gate was specifically designed to prevent the ceiling experiment's spatial measurement failures. Without it, gates G1 and G2 are enforced via the same unreliable manual inspection that failed in the ceiling experiment.

Effort to fix: ~30-45 min to write JavaScript that:
- Measures container max-width
- Scans page height in viewport-height increments using elementsFromPoint
- Calculates content-to-void ratio
- Checks header height
- Outputs structured PASS/FAIL report

#### BT-26: 5 Mandatory Communication Checkpoints (A-E) -- **DIFFERENT** (MEDIUM severity)

The execution prompt has 4 communication rules (lines 137-141):
1. Builder MUST send message after each pass (includes pass completed, K1-K7 status, concerns)
2. Lead MUST respond GO/REVISE
3. Builder MUST NOT proceed without GO
4. Immediate message for spatial concerns

What's DIFFERENT from the 5-checkpoint spec:
- Checkpoint A (post-plan read-through with biggest spatial concern + whitespace calculation + plan read confirmation): **NOT PRESENT.** The plan review happens at Gate 0, but the SPECIFIC FIELDS (spatial concern, whitespace calculation) are not required.
- Checkpoint B (post-build report with page height + content-to-void ratio + section count + deviations): **PARTIALLY PRESENT.** Builder reports K1-K7 status, which covers content-to-void and container width. Missing: explicit page height, section count.
- Checkpoint C (spatial gate result to all agents): **NOT PRESENT as broadcast.** Gate results go to lead only.
- Checkpoint D (post-elaboration report): **NOT DISTINCT** from per-pass messages.
- Checkpoint E (final build report): **IMPLICITLY PRESENT** as last pass completion message.

Key missing element: Required MEASUREMENT CONTENT per checkpoint. The spec required specific numbers (pixel values, percentages). The execution prompt requires "K1-K7 status" and "concerns" but does not mandate specific measured values in the message. This allows "K2 PASS" without specifying "content-to-void: 73%."

Effort to fix: ~10 min to add measurement-specific fields to per-pass messages.

#### BT-27: Message Format + Routing Table -- **NOT DONE** (MEDIUM severity)

No message type definitions exist (BLOCKING-DEPENDENCY, QUALITY-GATE, CLARIFICATION-REQUEST, ANOMALY-FLAG). No 17-pairing routing table. PA/novelty isolation is mentioned ("PA auditors receive ONLY screenshots + PA questions") but not formalized as routing prohibition.

Impact: Messages will be informal narrative rather than structured types with specific content requirements. This may be acceptable given the simpler 4-gate architecture (vs the original 7-gate spec), but prevents systematic message monitoring during execution.

Effort to fix: ~15 min.

#### BT-28: Escalation Triggers + Diagnosis-Before-Fix -- **NOT DONE** (MEDIUM severity)

No escalation triggers defined (uncertainty > 80%, WOULD-NOT-SHIP, unexpected discovery). No root cause classification requirement (CSS/CONTENT/ARCHITECTURE). No prohibition on CSS fixes for architecture problems.

Impact: If a spatial or compositional issue is found during execution, the fix approach is unconstrained. The ceiling experiment's failure mode (CSS fixes applied to architecture problems, making the page worse) could recur. The fix team "solved the wrong problem" by reducing padding when the real problem was content volume.

Effort to fix: ~5 min to add 3 escalation triggers + diagnosis requirement.

#### BT-29: Spatial Confidence Gate + Gate Architecture -- **DIFFERENT** (MEDIUM severity)

Kill rules K1-K7 cover the substance of SC-01 through SC-07:
- K1 = SC-01 (container 940-960px)
- K2 = SC-02+SC-03 (void budget, content-to-void >= 70%, consecutive viewport check)
- K4 = SC-05 (header <= 288px)
- K6 = soul compliance
- K7 = max spacing 96px

What's DIFFERENT:
- **Gate architecture simplified.** Spec called for 5-gate system (Gate 0-5). Actual has 4 gates (G0-G3). Gates 4-5 (metaphor coherence, ship-ready) are not explicitly defined as gates.
- **SC-04 (squint test) missing.** 25% zoom with 3+ content regions. Not in kill rules or gates.
- **SC-06 (CPL 45-80) missing from execution prompt.** Although CPL was mentioned in earlier pre-flight docs, K1-K7 does not include a CPL check.
- **SC-07 (footer presence) missing from kill rules.** BT-29 required "footer present with content." Kill rules check container, void, header, spacing, soul, and designed moment -- but NOT footer. (This was the ceiling experiment's "missing footer" finding.)
- **Max 2 fix cycles, then ABORT missing.** No fix cycle limit in the execution prompt.
- **Gate execution log format not specified.** Team-lead's deliverable is "review notes" not a structured gate log.

Severity: MEDIUM. The kill rules capture the most critical spatial checks. The missing items (squint test, CPL, footer, fix cycle limit) are real gaps but lower probability of causing flagship failure than the void/container issues that ARE covered.

Effort to fix: ~15 min to add SC-04 (squint test), SC-06 (CPL), SC-07 (footer), fix cycle limit, and gate execution log format.

#### BT-30: Composition Verification Gate (Post-Pass-2) -- **PARTIAL** (MEDIUM severity)

G2 (after Pass 3) checks: "K1-K7 all pass. 12-14 mechanisms deployed. All 5 categories. Distribution verified."

Present:
- Mechanism count check (12-14, hard cap 14)
- Category minimum check (5 categories)
- K1-K7 spatial checks

Missing from BT-30 spec:
- Restraint ratio >= 1.5 (mentioned in journal but not as gate criterion)
- Zone visibility (all planned zones have visual boundary without labels)
- SC-02+SC-03 re-verification (explicit re-check after mechanism deployment)
- Rejection count >= 21
- Silence zones >= 2
- Signal-to-silence ratio 0.6-0.8:1
- Structural overhead <= 20%

The self-check (lines 113-117) covers rejection documentation (5+ rejected) and distribution, but the counts are lower than spec (5+ vs 21+ rejections, no silence zone requirement).

Effort to fix: ~10 min to add missing composition gate criteria.

#### BT-31: Ship-Ready Gate + Mode 4 PA Protocol -- **PARTIAL** (LOW severity)

Layer 3 coordination (line 131): "PA Auditors (9+): Mode 4 perceptual audit (fresh-eyes, screenshot-based)."

Present:
- Mode 4 specified (9+ independent auditors)
- Fresh-eyes principle maintained
- Screenshot-based audit

Missing:
- Screenshot pre-capture pattern (team-lead takes ALL screenshots before spawning auditors) -- not explicitly stated, though this is operational knowledge from memory
- Dissent protection rule ("if ANY auditor reports WOULD-NOT-SHIP with specific measurements, MUST NOT dismiss without investigation")
- Comparative audit vs CD-006/DD-006
- Blind novelty evaluation

Severity: LOW because Mode 4 PA operational details are well-documented in the PA skill file itself. The execution team will invoke the PA skill, which contains the full protocol. The missing items are operational refinements that the team-lead should know from prior experiments.

Effort to fix: ~5 min to add dissent protection + comparative audit + pre-capture pattern.

---

### Phase 6: Content Preparation (BT-19 through BT-21)

#### BT-19: Content Inventory Template -- **DIFFERENT** (LOW severity)

No reusable template file exists. Instead, the content-selector agent produced a FILLED content inventory (754 lines) that is far more thorough than any template would be.

The filled inventory includes:
- Per-section word counts, tables, code/diagrams, lists, narrative paragraphs
- Content source map with specific line references
- Density map by thirds with mechanism assignments
- Content-form fit assessment using Gap 7 criteria
- Risk assessment table
- Content expansion plan with sources

Why DIFFERENT not NOT DONE: The INTENT of BT-19 was to ensure content analysis happens before building. The content-selector-report achieves this intent BETTER than a blank template would. However, no reusable template exists for future content selections.

Effort to create template: ~10 min. Recommended as post-flagship cleanup, not pre-flagship blocker.

#### BT-20: Select Content Different from Middle/Ceiling -- **DONE**

RESEARCH-SYNTHESIS selected. 6-dimension rationale documented. Confirmed different from "Remote Mac Control" (Middle + Ceiling experiments). 4 candidates rejected with reasoning. >= 4 sections (6 sections), >= 200 words each (900 words per zone after expansion).

Intentionality dimension assessment: Content supports self-reference (form demonstrates principles), pedagogical sequencing (principles build on each other), cognitive transitions (tables -> narrative -> resolution), and bookending. >= 4/6 dimensions supported.

#### BT-21: Content-to-Pattern Selection Protocol -- **PARTIAL** (MEDIUM severity)

The content-selector-report addresses content-form fit (Section 4, lines 590-651) and density map (Section 3, lines 470-587), which covers the SUBSTANCE of BT-21.

Missing the FORMAL 6-step protocol:
1. Read zone count from content inventory -- DONE (3 zones from content volume)
2. Read density map -- DONE (ASCII density visualization)
3. Count content types per zone -- DONE (tables, code, narrative counted)
4. Apply 20% overhead budget -- **NOT DONE.** No structural overhead calculation.
5. Apply 800px zone minimum -- **NOT DONE.** No minimum renderable content height per zone.
6. Verify density-shape alignment -- **PARTIALLY DONE.** CRESCENDO shape described but no ARC INVERSION check.

5 binary rejection criteria: **NOT PRESENT.** No formal rejection gates for content-pattern mismatch.

Impact: Steps 4-5 are the highest-risk gaps. Without the 20% overhead budget, structural elements (padding, borders, checkpoints, transitions) could consume more page height than expected, leaving less room for content. Without the 800px zone minimum, a zone could be specified that is too small to contain its assigned content.

Effort to fix: ~10 min to add steps 4-6 + binary rejection criteria to the content-selector-report or as an addendum.

---

### Nuance Recovery (NR-01, NR-02)

#### NR-01: Builder Self-Scroll Before Handoff -- **NOT DONE** (MEDIUM severity)

Grep for "scroll" in the builder's self-check section (lines 111-117) returns ZERO matches. The self-check contains:
- K1-K7 all pass
- 12-14 mechanisms, hard cap 14
- All 5 categories represented
- Zone boundaries have transition types
- Distribution checks
- Rejected mechanisms documented
- Visual structure communicates without text labels

But NOT: "Scroll full page top-to-bottom at 1440px viewport before reporting done."

Impact: The builder may complete the page and report "done" without scrolling through the full result. This was identified as a root cause of the ceiling failure -- the builder never scrolled the finished page and therefore never saw the void. NR-01 is the single cheapest intervention (1 min, 1 line of text) with one of the highest leverage effects.

Effort to fix: ~1 min. Add to self-check: "[ ] Scrolled full page top-to-bottom at 1440px. No viewport-height of nothing."

#### NR-02: Spatial Budget CALCULATION Mandate -- **NOT DONE** (MEDIUM severity)

No spatial budget calculation requirement exists in the execution prompt. The content-selector-report estimates content-to-void at ~73% (line 581), but this is the content-selector's estimate, not a mandate for the builder or planner to perform the calculation.

Missing: "Sum zone padding + checkpoint margins + heading margins + transition gaps. Compare to content height. If ratio > 35% void: restructure."

Impact: The planner may specify zones, transitions, and spacing without calculating total structural overhead. The 2,700px whitespace accumulation in the ceiling experiment was predictable with a 30-second arithmetic calculation that no agent performed.

Effort to fix: ~2 min. Add to Pass 0 (planner) instructions or Gate 0 definition.

---

## 3. REMEDIATION PLAN FOR CRITICAL AND HIGH-PRIORITY GAPS

### CRITICAL (Must Fix Before Flagship)

#### BT-25: Programmatic Gate Runner JavaScript (~30-45 min)

**Action:** Write `spatial-gate-runner.js` that:
1. Opens the page in a browser (Playwright-compatible)
2. Measures `.container` or `main` computed max-width -> SC-01
3. Scans page height at 50px intervals using `document.elementsFromPoint()` -> SC-02/SC-03
4. Calculates content-to-void ratio -> K2
5. Measures header element total height -> SC-05/K4
6. Checks CPL of body text -> SC-06
7. Verifies footer element exists with text content -> SC-07
8. Outputs structured PASS/FAIL report with measured values

**Where:** `ephemeral/flagship-preparation/_checkpoint/spatial-gate-runner.js`
**Verification:** `node -e "new Function(fs.readFileSync('spatial-gate-runner.js','utf8'))"` exits 0.

### MEDIUM (Should Fix Before Flagship, ~35 min total)

Priority order by impact:

1. **NR-01: Builder Self-Scroll** (~1 min)
   - Add to execution prompt self-check: `[ ] Scrolled full page top-to-bottom at 1440px. If any viewport is empty: STOP and fix.`

2. **NR-02: Spatial Budget Calculation** (~2 min)
   - Add to Pass 0 / Gate 0: "Planner MUST calculate: Sum(zone padding) + Sum(checkpoint margins) + Sum(heading margins) + Sum(transition gaps) = total structural overhead. If overhead > 35% of estimated page height: restructure before builder begins."

3. **BT-15: Missing 3 Binary Rules** (~5 min)
   - Add: "If zero SendMessage messages at Gate 1: team-lead PAUSES build and prompts builder."
   - Add: "Restraint ratio (rejected/deployed) >= 1.5"
   - Add: "Minimum 8 substantive messages across full experiment"

4. **BT-28: Escalation + Diagnosis** (~5 min)
   - Add to Layer 2 or Layer 3: "Before ANY fix: classify root cause as CSS / CONTENT / ARCHITECTURE. CSS fixes for ARCHITECTURE problems are PROHIBITED."
   - Add 3 escalation triggers with binary criteria.

5. **BT-29 gaps: SC-04 + SC-06 + SC-07 + fix cycle limit** (~10 min)
   - Add squint test, CPL check, footer check to gate spec
   - Add "Max 2 fix cycles per gate. If still failing: ABORT."

6. **BT-26: Measurement-specific checkpoint fields** (~5 min)
   - Amend per-pass message requirement: "Message MUST include: page height in px, content-to-void percentage, mechanism count, any K-rule status changes."

7. **BT-30: Missing composition gate criteria** (~5 min)
   - Add to G2: "Rejection documentation count >= 5 (at flagship: >= 21 with NR rejected). Silence zones >= 2."

8. **BT-21: Missing protocol steps 4-6** (~5 min)
   - Add 20% structural overhead budget + 800px zone minimum + ARC INVERSION check.

### LOW (Can Proceed Without, Document for Future)

- BT-13/BT-14/BT-16: Single-file vs multi-file prompt architecture. Current approach works.
- BT-17: Per-pass prompt files. Mitigated by concise pass descriptions within single prompt.
- BT-19: Reusable template. Content-selector-report IS the filled template.
- BT-27: Formal message types. Informal messaging is acceptable for this experiment's team size.
- BT-31: Pre-capture pattern + dissent protection. Operational knowledge exists in memory/PA skill.

---

## 4. LEVEL 2 OBSERVATIONS

### Observation 1: The Prompt Assembler Made Defensible Consolidation Decisions

The most common gap pattern is "specified as separate file/protocol, implemented as integrated section." The prompt-assembler consolidated 7 specified files into 1, reduced 5 gates to 4, and simplified 5 communication checkpoints to 4 rules. The assembly journal documents these as intentional decisions (D5: passes 4-5 optional; D6: gate consolidation). The veto agent verified the consolidated result passes all 24 checklist items.

The consolidation is architecturally sound for a SINGLE experiment. The separate-file spec was designed for a repeatable pipeline; the consolidated prompt is designed for one flagship execution. If the flagship succeeds, future iterations should consider reverting to separate files for reproducibility.

### Observation 2: The Gate/Protocol Phase (BT-25 through BT-31) Was Systematically Under-Implemented

Of 7 items in this phase, 3 are NOT DONE (BT-25, BT-27, BT-28) and 3 are PARTIAL/DIFFERENT (BT-26, BT-29, BT-30). Only BT-31 is partially present. This is the WEAKEST phase of the entire pre-flight. The enrichments (BT-01 through BT-11) are 100% DONE. The prompt assembly (BT-12 through BT-18) is 57% DONE. The gate/protocol preparation is ~15% DONE.

Root cause: The pipeline executed enrichments (Phase 1+2), thresholds (Phase 3), content (Phase 4), prompt assembly (Phase 5), and verification (Phase 6) -- but skipped the dedicated gate/protocol preparation phase. The prompt-assembler folded some gate concepts into the execution prompt's kill rules, but the INFRASTRUCTURE (JavaScript runner, routing table, escalation protocol) was never built.

This means: The flagship experiment will have ENRICHED design system files, a SOLID execution prompt, and VERIFIED content -- but NO PROGRAMMATIC ENFORCEMENT INFRASTRUCTURE. Gates will be enforced manually by the team-lead using kill rules and visual inspection. This is the same enforcement mode as the ceiling experiment, which failed spatial checks.

### Observation 3: The Single Most Critical Missing Item Is BT-25

The programmatic gate runner is the difference between "team-lead scrolls through the page and eyeballs container width" and "JavaScript measures container width = 947px, PASS." Every spatial measurement error in the ceiling experiment (container width false positive, void undercount, header proportion misjudgment) would have been caught by programmatic measurement. The pre-flight checklist identified this as the #1 reason spatial failures recur. Its absence is the single highest-risk gap in the current preparation.

### Observation 4: NR-01 Is the Highest-ROI Item Not Yet Done

One line of text ("Scroll full page top-to-bottom before reporting done") takes 1 minute to add and directly addresses the root cause finding from Mode 4 PA: "the builder never scrolled the finished page." This is the cheapest possible intervention for one of the highest-impact failure modes. Its absence is surprising given the extensive analysis that produced it.

### Observation 5: The Veto Agent Passed Despite These Gaps

The veto agent's 24-item checklist did NOT include items for: programmatic gate runner existence, per-pass prompt files, routing table, escalation protocol, message format definitions, spatial budget calculation, or builder self-scroll. The veto checklist focused on enrichments (7 items), skills (4 items), thresholds (4 items), content (4 items), and prompt quality (5 items). The gate/protocol infrastructure was not in the veto scope.

This is a meta-observation: the verification system cannot catch gaps it does not test for. The pre-flight checklist's 33 BLOCKING items were broader than the veto's 24-item checklist. The gap is between what was SPECIFIED (33 items) and what was VERIFIED (24 items).

---

**END BLOCKING GAP ANALYSIS**

**Summary:** 14/33 DONE (42%), 6 DIFFERENT (18%), 5 PARTIAL (15%), 8 NOT DONE (24%). 1 CRITICAL gap (BT-25 programmatic gate). 11 MEDIUM gaps. Total remediation effort for CRITICAL+MEDIUM: ~65-80 min.

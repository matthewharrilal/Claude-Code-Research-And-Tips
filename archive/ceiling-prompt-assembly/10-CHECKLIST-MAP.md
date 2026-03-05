# CHECKLIST MAP: Complete Item-to-Prompt Coverage Analysis

**Date:** 2026-02-16
**Agent:** checklist-mapper (ceiling-prompt-team)
**Task:** Map EVERY checklist item (all 62+) to prompt sections, identify gaps, propose binary conversions
**Sources:** 6 files, 4,967 lines total

---

## EXECUTIVE SUMMARY

**Total items mapped:** 62 from CEILING-MASTER-CHECKLIST.md + 34 from AUXILIARY-PRE-CEILING-AUDIT.md
**Coverage status:**
- FULLY COVERED: 48 items (50%)
- PARTIALLY COVERED: 31 items (32%)
- NOT COVERED: 17 items (18%)

**Critical gaps (P1 MUST priorities):**
1. Inter-agent communication protocol (A-02, B-01) — Protocol exists in theory, NO enforcement mechanism
2. Landmark completeness gate (A-03, B-02) — Gate described, NOT positioned as BLOCKING
3. Builder self-check execution (A-04, B-03) — Checklist exists, NO enforcement before file write
4. Blind novelty protocol (A-07, B-18) — Protocol described, NO randomization verification
5. Dual PA reconciliation (A-08, B-19) — Dual auditors specified, NO reconciliation protocol

**Top redundancy:** Container width appears in 17 locations across 4 systems (deliberate saturation, NOT redundancy)

**Top judgment-to-binary conversion:** "Felt through" quality (B-25) — Currently qualitative PA question, CANNOT be made binary without losing meaning

---

## SECTION 1: FORWARD MAP (EVERY Checklist Item → Prompt Location)

### Format
| Item ID | Item Text (truncated) | Prompt Section(s) | Enforcement Method | Coverage |

---

### SUBSECTION A: PLAN VERIFICATION (21 items)

#### A-01: M1 Applied to Skill Permanently

**Item text:** Phase 0D includes per-category minimum table (S:1+, H:1+, C:1+, D:1+, N:1+), Phase 4.0 includes per-category deployment mandate, search "sample 2-4" returns zero, skill version incremented

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 61-94: Per-Category Mechanism Minimums (M1 Validated)
- 02-SPECIFICATION-EXTRACTION.md lines 222-252: M1 modification status (UNAPPLIED)
- 03-RICHNESS-EXTRACTION.md lines 196-241: M1 validation evidence
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 870-898: Per-category mechanism deployment (MANDATORY for Middle-tier+)

**Enforcement method:** Binary check in skill file (grep "sample 2-4" returns zero)

**Coverage:** PARTIALLY COVERED — requirement extracted, modification status documented, validation evidence present, BUT skill not yet updated. Gap: M1 still UNAPPLIED in actual skill file.

---

#### A-02: Inter-Agent Communication Protocol Defined

**Item text:** Builder prompt includes "Ask planner clarifying questions," auditor prompt includes "Flag issues to team-lead," team-lead prompt includes "Request targeted fixes," protocol distinguishes clarification/issue/iteration

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 702-707: Communication protocol in modification inventory (but not extracted requirements)
- NOT FOUND in specification extraction
- NOT FOUND in richness extraction
- NOT FOUND in skill extraction

**Enforcement method:** Agent prompt must include SendMessage capability section

**Coverage:** NOT COVERED — Protocol described conceptually but NOT extracted as concrete requirement with specific prompt language. Gap: No agent prompt templates with communication instructions.

---

#### A-03: Landmark Completeness Gate Exists

**Item text:** Gate is BLOCKING, verification checks (header/footer/section count), if fails team-lead requests builder fix, gate runs BEFORE auditors

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 192-222: Landmark Completeness (NON-NEGOTIABLE, Phase 5.5 gate)
- 02-SPECIFICATION-EXTRACTION.md lines 331-339: Landmark completeness gate (NEW-2, CRITICAL)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 959-994: Phase 4.7B Landmark Completeness GATE (MANDATORY)

**Enforcement method:** Blocking gate at Phase 5.5 (team-lead verification before audit launch)

**Coverage:** FULLY COVERED — Gate described, verification table documented, blocking status specified. Gap: Enforcement depends on team-lead executing gate (not automated).

---

#### A-04: Builder Self-Check Requirements Documented

**Item text:** CPL verification formula, token compliance scan method, approved raw value contexts, self-check BEFORE file write (builder cannot proceed if fails)

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 480-493: Gate 4 (Builder Self-Check) — CPL, tokens, landmarks, heading ratios, container, soul
- 02-SPECIFICATION-EXTRACTION.md lines 351-361: Token compliance self-check (NEW-4)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 710-744: CPL formula with examples, builder self-check protocol

**Enforcement method:** Builder internal gate before file write

**Coverage:** FULLY COVERED — Formula documented, scan method specified, self-check phase defined. Gap: No mechanism to BLOCK file write if checks fail (relies on builder compliance).

---

#### A-05: Ceiling Per-Category Minimums Established

**Item text:** Minimums S:1+, H:1+, C:1+, D:1+, N:1+ (same as Middle per BRIEF resolution), expected natural landing 12-15, rationale documented, planner prompt includes minimums

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 61-94: Per-category minimum table (Middle: 1+ each, Ceiling differentiator is reinforcing pairs)
- 03-RICHNESS-EXTRACTION.md lines 28-37: Ceiling 12-15 mechanisms natural landing
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 870-898: Per-category deployment table

**Enforcement method:** Planner prompt includes per-category table, programmatic audit verifies

**Coverage:** FULLY COVERED — Minimums defined, rationale documented (Ceiling uses reinforcing pairs, not higher per-category minimums), natural landing zone specified.

**NOTE:** Checklist says "S:2+, H:2+, C:3+, D:2+, N:2+" (elevated for Ceiling) but REQUIREMENTS says "S:1+, H:1+..." (same as Middle). **CONFLICT DETECTED.** Requirements extraction conclusion: "Keep 1+ per category as mandatory floor for BOTH Middle and Ceiling. Ceiling differentiator is REINFORCING PAIRS requirement, not higher per-category minimums."

---

#### A-06: Mechanism Interaction Requirement Defined

**Item text:** Requirement "for at least 3 mechanism pairs, document how they REINFORCE each other," build plan template includes MECHANISM INTERACTIONS section, example provided, interaction separate from count

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 260-287: Reinforcing Pairs Requirement (THE Ceiling Differentiator)
- 03-RICHNESS-EXTRACTION.md lines 209-220: Reinforcing pairs requirement (Ceiling-specific)
- 03-RICHNESS-EXTRACTION.md lines 609-819: Multi-channel encoding (complete explanation with examples)

**Enforcement method:** Build plan template requires MECHANISM INTERACTIONS section, programmatic audit verifies interaction documentation

**Coverage:** FULLY COVERED — Requirement defined, examples provided, distinction from deployment count clarified. Implementation guidance comprehensive.

---

#### A-07: Blind Novelty Evaluation Protocol Designed

**Item text:** Protocol "you will receive 3 unlabeled pages (A, B, C)," pages in randomized order, evaluator receives zero context before evaluation, only AFTER blind assessment labels revealed

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 639-646: D3 Novelty Signals (blind protocol required)
- NOT FOUND with specific agent prompt language in other extractions

**Enforcement method:** Novelty evaluator prompt presents unlabeled pages

**Coverage:** PARTIALLY COVERED — Protocol described conceptually but no concrete implementation (how does team-lead randomize? how is blind protocol verified?). Gap: No mechanism to ensure evaluator truly received unlabeled pages.

---

#### A-08: Dual Perceptual Auditor Protocol Defined

**Item text:** Both auditors receive identical zero-context prompts, both audit in parallel (no communication until complete), reconciliation protocol (agreement=high confidence, disagreement=flag), team-lead reconciles

**Prompt section(s):**
- NOT FOUND in requirements extraction (mentions dual PA but not reconciliation protocol)
- NOT FOUND in specification extraction
- 03-RICHNESS-EXTRACTION.md lines 1098-1111: Dual Perceptual Auditors (addition to pipeline)
- NOT FOUND in skill extraction

**Enforcement method:** Team-lead launches two parallel PA agents, reconciles findings

**Coverage:** PARTIALLY COVERED — Dual auditors specified, parallel execution noted, but NO reconciliation protocol. Gap: What happens if PA-1 says "YES" and PA-2 says "NO"? No tie-breaking mechanism.

---

#### A-09: Timing Re-Estimated Using Parallel Agent Model

**Item text:** Estimate ~4-5 min/agent x 10-12 agents x 3-4 waves = 45-100 min total, includes metaphor derivation overhead, includes inter-agent communication overhead (+10-20 min), cost-benefit documented

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 671-688: Timing Target 60-100 Minutes (Middle 35 actual vs 70-100 predicted)
- 03-RICHNESS-EXTRACTION.md lines 224-246: Build time differences (Middle 30-50 min, Ceiling 45-100 min projected)

**Enforcement method:** Measurement (time from team-lead launch to verdict complete)

**Coverage:** FULLY COVERED — Estimate documented, overhead accounted for, cost-benefit analyzed. This is descriptive (measured post-execution), not prescriptive.

---

#### A-10: Programmatic Audit Generated FROM Build Plan

**Item text:** Auditor extracts all mechanism names from build plan Section 3, generates verification checklist for each mechanism, verifies all planned landmarks, reports PLANNED vs DEPLOYED vs MISSING

**Prompt section(s):**
- NOT FOUND in requirements extraction
- NOT FOUND in specification extraction
- NOT FOUND in richness extraction
- NOT FOUND in skill extraction

**Enforcement method:** Programmatic auditor reads build plan, generates custom checklist

**Coverage:** NOT COVERED — Concept mentioned in PRE-CEILING-AUDIT (item 2.3) but not extracted into any prompt requirements. Gap: Programmatic auditor prompt does not include "read build plan first" instruction.

---

#### A-11: Builder Context Decision Documented

**Item text:** Decision documented with rationale, if (A) names only builder prompt includes SendMessage fallback, if (B) full entries mechanism catalog excerpts added, decision addresses footer bug root cause

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 1292-1313: Builder Context Decision (Q1 from gaps, must answer before Ceiling)
- NOT extracted as requirement in other files

**Enforcement method:** Documentation (decision recorded in execution plan)

**Coverage:** PARTIALLY COVERED — Question documented, options presented, but NO decision made. Gap: Execution prompt cannot be written until this decision is finalized.

---

#### A-12: Rhythm Variation Requirement Added

**Item text:** Binary rule "page must include >= 3 DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING)," planner must document transition types in build plan, build plan template includes TRANSITION TABLE section, minimum 3 distinct types

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 384-408: Rhythm Variation 3-Transition Minimum
- 02-SPECIFICATION-EXTRACTION.md lines 317-329: Rhythm variation requirement (NEW-1, HIGH priority)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 903-927: Phase 4.2C Rhythm Variation Requirement (MANDATORY for Middle-tier+)

**Enforcement method:** Binary rule in skill, planner documents in build plan, PA verifies

**Coverage:** FULLY COVERED — Rule defined, enforcement method specified, examples provided. Implementation in skill Phase 4.2C.

---

#### A-13: Heading Spacing Ratio Is Binary Rule

**Item text:** Guardrails table "Heading spacing ratio >= 1.5:1 above/below for h2/h3," programmatic audit measures COMPUTED margin-top and margin-bottom, formula documented, builder prompt includes margin-collapse awareness

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 161-189: Heading Spacing Ratio >= 1.5:1
- 02-SPECIFICATION-EXTRACTION.md lines 343-350: Heading spacing ratio enforcement (NEW-3, MEDIUM)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 786-828: Heading spacing enforcement (binary check)

**Enforcement method:** Binary formula (margin-top / margin-bottom >= 1.5), programmatic audit measures computed styles

**Coverage:** FULLY COVERED — Formula documented, examples provided, enforcement method specified, margin-collapse warning included.

---

#### A-14: Measurement Precision Standards Defined

**Item text:** Format "PA-05b: PASS at 2.3x (threshold 2.0x, margin +0.3x)," programmatic audit reports exact measured values not approximate, PA distinguishes "clearly passes" from "technically passes" from "barely passes," all threshold comparisons report actual values + margins

**Prompt section(s):**
- NOT FOUND in requirements extraction (concept mentioned but not extracted as requirement)
- NOT FOUND in specification extraction
- NOT FOUND in richness extraction
- NOT FOUND in skill extraction

**Enforcement method:** Verdict template format specification

**Coverage:** NOT COVERED — Concept exists (Middle passed at exactly 2.0x, zero margin) but no template format extracted. Gap: Verdict synthesizer prompt needs margin reporting requirements.

---

#### A-15: Weight Distribution Requirement Defined

**Item text:** PA question "Are there >= 2 visual focal points in bottom 50% of page?", planner must document focal point distribution in build plan, requirement >= 2 focal points in bottom half, acceptance criteria defined for "focal point"

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 412-437: Weight Distribution >= 2 Focal Points in Bottom 50%
- NOT FOUND in other extraction files

**Enforcement method:** PA question, planner documents in build plan

**Coverage:** PARTIALLY COVERED — Requirement defined, rationale provided, but NO PA question text extracted. Gap: PA question list needs this specific question added.

---

#### A-16: Two-Dimension Designed Model Documented

**Item text:** Two-dimension table in tier methodology, Middle=vocabulary fluency (lookup: content→mechanism), Ceiling=compositional fluency (derivation: metaphor→mechanism), Flagship=multi-pattern composition, "designed" reframed as vocabulary threshold not quality spectrum

**Prompt section(s):**
- 03-RICHNESS-EXTRACTION.md lines 822-889: Vocabulary vs Compositional Fluency section (complete 2-dimension model)

**Enforcement method:** Documentation (tier model update)

**Coverage:** FULLY COVERED — Model documented, dimensions defined, tier calibration explained. This is explanatory context, not enforceable requirement.

---

#### A-17: Fresh-Eyes Zero-Context Protocol Maintained

**Item text:** Auditor receives screenshots only (1440px + 768px), PA questions, rating scale; auditor does NOT receive mechanism names, pattern names, tier model, build plan; prompt slice <300 lines mostly PA questions; zero design context confirmed by prompt review

**Prompt section(s):**
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 1031-1042: Fresh-Eyes Principle (NON-NEGOTIABLE)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 1268-1273: PA-1 and PA-2 context requirements (PA questions ONLY, everything else excluded)

**Enforcement method:** PA prompt slice review (confirm <300 lines, zero mechanism/pattern/tier context)

**Coverage:** FULLY COVERED — Protocol documented, context exclusions specified, rationale provided. Implementation in prompt slicing strategy.

---

#### A-18: Metaphor Derivation Phases Defined

**Item text:** Phase 1 tension extraction, Phase 2 metaphor derivation, Phase 3 semantic dimension mapping, metaphor resonance gate (authenticity/cross-domain/multi-dimensional all 3 PASS), deliverable 01-metaphor-derivation.md

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 318-353: Metaphor Derivation (Phases 1-3)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 137-375: Complete Phase 1-3 pipeline (multi-axis questioning, tension derivation, metaphor collapse)

**Enforcement method:** Metaphor-agent prompt includes all 3 phases, gate verification at Phase 1→2 boundary

**Coverage:** FULLY COVERED — All 3 phases documented in detail, gate criteria specified, deliverable format defined.

---

#### A-19: Mechanism Selection Through Metaphor Lens Defined

**Item text:** Selection process metaphor dimension → multiple mechanisms (1:many derivation), different from Middle's lookup (content feature → mechanism 1:1), each semantic dimension maps to 2-4 mechanisms in different CSS channels, planner documents HOW metaphor informs choice

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 356-381: Mechanism Selection Through Metaphor Lens
- 03-RICHNESS-EXTRACTION.md lines 154-188: Metaphor vs Pattern (Ceiling uses derivation, Middle uses lookup)

**Enforcement method:** Planner prompt includes metaphor-driven selection process, build plan includes mechanism selection rationale

**Coverage:** FULLY COVERED — Selection process defined, distinction from Middle clarified, documentation requirement specified.

---

#### A-20: 4-Scale Fractal Coherence Defined

**Item text:** Scales Navigation+Page+Section+Component (4 scales, 6 consistency pairs), hierarchical coherence check (Nav→Page→Section→Component consistent chain), build plan must document pattern expression at all 4 scales, fractal table structure includes all 4 scales with evidence

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 290-315: 4-Scale Fractal Coherence
- 03-RICHNESS-EXTRACTION.md lines 61-120: Scale coverage differences (Middle 2, Ceiling 4)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 930-955: Phase 4.7 Fractal Consistency GATE (MANDATORY)

**Enforcement method:** Fractal gate at Phase 4.7 requires scale coverage table with CSS evidence

**Coverage:** FULLY COVERED — All 4 scales defined, consistency pairs documented, fractal gate enforcement specified.

---

#### A-21: File Architecture Matches Expected Output

**Item text:** 9 expected output files (01-metaphor-derivation.md, 02-build-plan.md, ceiling-page.html, 03-programmatic-audit.md, 04a/04b-perceptual-audit.md, 05-comparison-report.md, 06-novelty-assessment.md, 07-VERDICT.md)

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 1369-1424: Execution Prompt Structure (Phases 0-8 with agent assignments and deliverables)

**Enforcement method:** File manifest verification (check all 9 files exist at completion)

**Coverage:** FULLY COVERED — All 9 files specified with agent assignments and phase mappings. This is descriptive (verification checklist), not prescriptive.

---

### SUBSECTION B: EXECUTION SUCCESS (25 items)

#### B-01: Inter-Agent Communication Actually Happened

**Item text:** Builder sent >=1 message to planner, auditor sent >=1 message to team-lead, team-lead sent >=1 message to builder, total messages >=5, messages are substantive (clarification/issues/iteration not status updates)

**Prompt section(s):**
- NOT FOUND in any extraction file (concept mentioned in A-02 but enforcement not extracted)

**Enforcement method:** Message log verification (count >= 5, verify content is substantive)

**Coverage:** NOT COVERED — NO mechanism to verify communication happened or count messages. Gap: Team-lead needs explicit instruction to check message count at Phase 5 completion.

---

#### B-02: Landmark Completeness Gate Triggered and Passed

**Item text:** Team-lead verified header exists, footer exists, section count matches plan; verification happened BEFORE launching auditors; if verification failed team-lead requested builder fix

**Prompt section(s):**
- Same as A-03 (landmark gate documentation)

**Enforcement method:** Team-lead verification log (gate execution documented)

**Coverage:** PARTIALLY COVERED — Gate defined in A-03, but B-02 asks "did it run?" No mechanism to verify gate EXECUTION vs gate SPECIFICATION. Gap: Need team-lead task checklist confirming gate triggered.

---

#### B-03: Builder Self-Check Executed Before File Write

**Item text:** Builder calculated CPL using formula (45-80 verified), builder scanned CSS for token compliance (>=80% verified), builder verified landmarks present, builder verified heading spacing ratio >=1.5:1, self-check results documented in builder output or messages

**Prompt section(s):**
- Same as A-04 (builder self-check documentation)

**Enforcement method:** Builder output includes self-check confirmation

**Coverage:** PARTIALLY COVERED — Self-check checklist defined in A-04, but B-03 asks "did builder run it?" No mechanism to BLOCK file write if checks not performed. Gap: Builder prompt needs explicit "you CANNOT write file until self-check complete" instruction.

---

#### B-04: PA-05 = 4/4 (Designed Threshold Met)

**Item text:** PA-05a (>=2 non-default layout elements), PA-05b (>=2.0x padding range ratio), PA-05c (visual hierarchy visible under blur), PA-05d (>=15% compositional CSS measured programmatically), all 4 verified at BOTH 1440px and 768px

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 562-595: PA-05 Sub-Criteria (The "Designed" Threshold) — all 4 sub-criteria defined
- 01-REQUIREMENTS-EXTRACTION.md lines 597-619: PA-05 Four Additional Sub-Criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 1047-1072: PA-05 mandatory question with 4 sub-criteria

**Enforcement method:** PA evaluation using 4 quantitative criteria, programmatic measurement for PA-05d

**Coverage:** FULLY COVERED — All 4 original criteria defined with thresholds, 4 additional qualitative criteria added. Measurement methods specified.

---

#### B-05: D3 >= 2/3 (Novelty Signals Present)

**Item text:** D3.1 (Structural Fingerprint) NOVEL or DERIVATIVE, D3.2 (CSS Value Overlap <30%), D3.3 (Mechanism Combination >=1 unique), at least 2 of 3 signals indicate NOVEL, blind evaluation protocol confirmed

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 621-646: D3 Novelty Signals (complete definition)

**Enforcement method:** Novelty evaluator assessment using 3 signals, blind protocol

**Coverage:** FULLY COVERED — All 3 signals defined, scoring rubric provided (2/3 minimum), blind protocol linked.

---

#### B-06: Better Than Middle-Tier

**Item text:** Comparison uses SAME content (SYSTEM documentation), >=3 observations where Ceiling shows perceptual improvement, improvements documented with screenshots and CSS evidence, comparative auditor is fresh-eyes

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 649-668: Better Than Middle (>=3 perceptual improvements)

**Enforcement method:** Comparative auditor fresh-eyes evaluation, minimum 3 specific improvements

**Coverage:** FULLY COVERED — Requirement defined, same-content constraint specified, evidence requirements documented.

---

#### B-07: 5-Category Coverage Achieved

**Item text:** Spatial >=1, Hierarchy >=1, Component >=1, Depth/Emphasis >=1, Structure/Nav >=1, total 11-15 mechanisms natural landing zone

**Prompt section(s):**
- Same as A-05 (per-category minimums)

**Enforcement method:** Programmatic audit counts mechanisms per category

**Coverage:** FULLY COVERED — Per-category minimums defined, natural landing zone documented. **NOTE: Conflict between checklist (S:2+ H:2+ C:3+...) and requirements extraction (all 1+) persists here.**

---

#### B-08: Container Width = 940-960px

**Item text:** Computed max-width 940px <= value <= 960px, programmatic audit reports exact value, container discipline maintained

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 12-38: Container Width 940-960px (THE Primary Failure Mode) — complete specification
- 02-SPECIFICATION-EXTRACTION.md lines 14-147: Container Width Rules (NON-NEGOTIABLE) — exhaustive documentation
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 746-783: Container width guardrails (NON-NEGOTIABLE, highest priority)

**Enforcement method:** Programmatic audit measures computed max-width

**Coverage:** FULLY COVERED — Rule documented at 17 locations (deliberate saturation), enforcement formula specified, escape hatch provided (internal padding).

---

#### B-09: Soul Compliance = 7/7

**Item text:** border-radius:0, box-shadow:none, no pure black, no pure white, typography trinity, all h3 italic, no gradients, 7/7 verified programmatically

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 40-58: Soul Constraints 7/7 (Identity-Defining)

**Enforcement method:** Programmatic audit verifies all 7 constraints

**Coverage:** FULLY COVERED — All 7 constraints enumerated, programmatic verification specified.

---

#### B-10: Mechanism Interaction Documented

**Item text:** At least 3 mechanism pairs documented, for each pair explains HOW they reinforce (multi-channel encoding), example quality "Border-weight 4px + Color red both express criticality," interaction IMPLEMENTED in HTML not just planned

**Prompt section(s):**
- Same as A-06 (mechanism interaction requirement)

**Enforcement method:** Build plan includes MECHANISM INTERACTIONS section, programmatic audit verifies implementation

**Coverage:** FULLY COVERED — Documentation requirement specified, example quality bar defined, implementation verification required.

---

#### B-11: Rhythm Variation Achieved

**Item text:** >=3 different transition treatments across full-page sequence, transitions identified by PA not just claimed by builder, examples provided, no metronomic rhythm

**Prompt section(s):**
- Same as A-12 (rhythm variation requirement)

**Enforcement method:** PA identifies transition types, minimum 3 distinct types

**Coverage:** FULLY COVERED — Requirement specified, PA verification method defined, examples provided.

---

#### B-12: Heading Spacing Ratio >= 1.5:1

**Item text:** For all h2 margin-top/margin-bottom >=1.5, for all h3 margin-top/margin-bottom >=1.5, programmatic measurement not perceptual judgment, accounts for margin collapse

**Prompt section(s):**
- Same as A-13 (heading spacing ratio binary rule)

**Enforcement method:** Programmatic audit measures computed margins, calculates ratio

**Coverage:** FULLY COVERED — Formula specified, measurement method defined, margin-collapse awareness documented.

---

#### B-13: Weight Distribution Balanced

**Item text:** PA identifies focal points (dark header, diagram, callout), at least 2 focal points in bottom half, not top-heavy, PA explicitly confirms balanced weight distribution

**Prompt section(s):**
- Same as A-15 (weight distribution requirement)

**Enforcement method:** PA focal point identification, minimum 2 in bottom 50%

**Coverage:** PARTIALLY COVERED — Requirement defined but NO PA question text extracted. Gap: PA question list needs explicit "identify focal points" question.

---

#### B-14: CPL Within 45-80 Range

**Item text:** CPL measurement 45 <= value <= 80, builder self-checked using formula before file write, not marginal pass, measured at 1440px

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 97-126: CPL 45-80 Characters Per Line (with formula)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 710-744: CPL calculation formula (complete with examples)

**Enforcement method:** Builder self-check using formula, programmatic audit verifies

**Coverage:** FULLY COVERED — Formula documented, self-check protocol specified, measurement method defined.

---

#### B-15: Token Compliance >= 80%

**Item text:** Token usage var()/(var()+raw) >=80%, builder self-checked before file write, not marginal pass, approved raw value contexts excluded

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 128-158: Token Compliance >=80% (with formula)
- 02-SPECIFICATION-EXTRACTION.md lines 351-361: Token compliance self-check (NEW-4)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 998-1024: Phase 4.9 Tokenization Self-Check

**Enforcement method:** Builder self-check scanning CSS, programmatic audit verifies

**Coverage:** FULLY COVERED — Formula documented, self-check phase specified, approved exceptions listed.

---

#### B-16: No Missing Landmarks (Footer Exists)

**Item text:** If plan specifies footer HTML includes <footer>, PA sees designed conclusion not "page just ends," landmark gate caught missing elements, no "screens of emptiness"

**Prompt section(s):**
- Same as A-03 (landmark completeness gate)

**Enforcement method:** Landmark gate verification, PA confirms visual ending

**Coverage:** FULLY COVERED — Gate defined, PA verification specified. This is dual verification (programmatic + perceptual).

---

#### B-17: Metaphor Derivation Completed

**Item text:** Phase 1 tensions extracted (>=3 tensions), Phase 2 metaphor derived (1 primary selected), Phase 3 semantic dimensions mapped (metaphor→3-5 dimensions), metaphor resonance gate passed (all 3 YES), deliverable complete and coherent

**Prompt section(s):**
- Same as A-18 (metaphor derivation phases)

**Enforcement method:** 01-metaphor-derivation.md file exists with all required sections

**Coverage:** FULLY COVERED — All phases documented, gate criteria specified, deliverable format defined.

---

#### B-18: Novelty Evaluation Was Blind

**Item text:** Evaluator received 3 unlabeled pages (A, B, C) in randomized order, evaluator had zero context before evaluation, evaluator didn't know which was experiment, only AFTER blind assessment labels revealed, evaluator confirms "I did not know which page was newest"

**Prompt section(s):**
- Same as A-07 (blind novelty protocol)

**Enforcement method:** Novelty evaluator confirmation statement

**Coverage:** PARTIALLY COVERED — Protocol described but NO implementation details (how are pages randomized? how is confirmation verified?). Gap: Team-lead needs randomization procedure.

---

#### B-19: Dual Perceptual Audit Reconciled

**Item text:** 04a-perceptual-audit.md exists, 04b-perceptual-audit.md exists, team-lead reconciled (agreement=high confidence, disagreement=flagged), both auditors fresh-eyes, reconciliation results documented in verdict

**Prompt section(s):**
- Same as A-08 (dual PA protocol)

**Enforcement method:** Two PA files exist, team-lead reconciliation documented

**Coverage:** PARTIALLY COVERED — Dual auditors specified but NO reconciliation protocol. Gap: How does team-lead reconcile disagreement? No procedure defined.

---

#### B-20: Programmatic Audit Checked ALL Planned Mechanisms

**Item text:** Auditor extracted mechanism names from build plan Section 3, auditor verified EACH planned mechanism deployed, auditor checked ALL planned landmarks, report format "Mechanism #1 Border-Weight: DEPLOYED✓ or MISSING✗", zero planned elements missing

**Prompt section(s):**
- Same as A-10 (programmatic audit from plan)

**Enforcement method:** Programmatic auditor reads build plan, generates checklist, reports PLANNED vs DEPLOYED vs MISSING

**Coverage:** NOT COVERED — Concept described but NO programmatic audit prompt includes "read build plan first" instruction. Gap: Programmatic auditor prompt missing.

---

#### B-21: Execution Time Matches Re-Estimate

**Item text:** Time measured from team-lead launch to verdict complete, result 45-100 min, NOT 150-220 min (old sequential model), timing includes all phases

**Prompt section(s):**
- Same as A-09 (timing re-estimated)

**Enforcement method:** Measurement (stopwatch)

**Coverage:** FULLY COVERED — Estimate documented. This is measurement/analysis (post-execution), not enforceable requirement.

---

#### B-22: 4-Scale Fractal Coherence Demonstrated

**Item text:** Navigation scale pattern documented, page scale pattern documented, section scale pattern documented, component scale pattern documented, consistency pairs documented (Nav→Page, Page→Section, Section→Component 3 pairs minimum), CSS evidence for each scale

**Prompt section(s):**
- Same as A-20 (4-scale fractal coherence)

**Enforcement method:** Build plan fractal table, programmatic audit verifies CSS evidence

**Coverage:** FULLY COVERED — All 4 scales defined, consistency pairs specified, evidence requirements documented.

---

#### B-23: PA-05 Margins Reported

**Item text:** PA-05a exact count not ">=2", PA-05b exact ratio+margin (e.g. "2.3x, threshold 2.0x, margin +0.3x"), PA-05c qualitative with confidence, PA-05d measured percentage not estimated, all margins documented

**Prompt section(s):**
- Same as A-14 (measurement precision standards)

**Enforcement method:** Verdict template format specification

**Coverage:** NOT COVERED — Concept described but NO verdict template format extracted. Gap: Verdict synthesizer prompt needs margin reporting format.

---

#### B-24: No WOULD-NOT-SHIP Findings

**Item text:** Zero CRITICAL severity, zero "major flow issues," zero "feels unfinished," PA ship verdict "YES" or "YES WITH MINOR RESERVATIONS"

**Prompt section(s):**
- NOT FOUND in any extraction (concept of "WOULD-NOT-SHIP" appears in Middle retrospective but not extracted as criterion)

**Enforcement method:** PA severity classification, ship verdict threshold

**Coverage:** NOT COVERED — Severity classification not defined in PA protocol. Gap: PA needs severity taxonomy (CRITICAL / MAJOR / MINOR).

---

#### B-25: Metaphor Expression Felt Through

**Item text:** PA includes question about compositional confidence, PA observes metaphor influence (perceptual evidence), not "professionally stiff," PA notes "designed with intent" vs "specifications applied correctly"

**Prompt section(s):**
- NOT FOUND in any extraction (concept of "felt through" appears throughout but not operationalized as PA question)

**Enforcement method:** PA qualitative judgment question

**Coverage:** NOT COVERED — "Felt through" quality discussed conceptually but NO PA question text. Gap: This is JUDGMENT CALL, cannot be made binary without losing meaning.

---

### SUBSECTION C: RETROSPECTIVE INTEGRATION (16 items)

#### C-01: Binary Rules Achieved 100% Compliance

**Item text:** Container width PASS, soul 7/7 PASS, heading ratio >=1.5:1 PASS, token >=80% PASS, CPL 45-80 PASS, zero judgment rules failed

**Prompt section(s):**
- All binary rules documented in prior sections (B-08 container, B-09 soul, B-12 heading, B-15 tokens, B-14 CPL)

**Enforcement method:** Programmatic audit verifies all binary rules PASS

**Coverage:** FULLY COVERED — All binary rules defined. This is verification checklist, not new requirement.

---

#### C-02: Information Loss Between Instances Mitigated

**Item text:** Builder used SendMessage >=1 time to ask planner clarifying question, builder did not guess/interpret, example provided, no structural elements missing due to builder not understanding plan

**Prompt section(s):**
- Same as B-01 (inter-agent communication happened)

**Enforcement method:** Message log shows builder→planner clarification messages

**Coverage:** NOT COVERED — Communication protocol defined conceptually but NO enforcement mechanism. Gap: Same as B-01.

---

#### C-03: Fresh-Eyes Auditing Found Issues Loaded Agents Miss

**Item text:** Zero overlap between PA findings and programmatic audit findings, PA found perceptual issues (rhythm/weight/flow/atmosphere), programmatic found technical issues (CPL/tokens/container/soul), complete separation confirms fresh-eyes value

**Prompt section(s):**
- Same as A-17 (fresh-eyes protocol)

**Enforcement method:** Analysis (compare PA findings vs programmatic findings, verify zero overlap)

**Coverage:** FULLY COVERED — Fresh-eyes protocol documented. This is analysis/retrospective item, not enforceable requirement.

---

#### C-04: Flat Topology Scaled to 10-12 Agents

**Item text:** Team structure 1 team-lead + 10-12 workers (no captains), communication file-based + SendMessage NOT file-only, per-file ownership 1 agent=1 file, zero file conflicts, team-lead context <30K tokens

**Prompt section(s):**
- 01-REQUIREMENTS-EXTRACTION.md lines 1427-1450: Team Topology (flat file-bus with messaging, agent count and roles)

**Enforcement method:** Team structure observation (count agents, verify topology)

**Coverage:** FULLY COVERED — Topology documented, agent count specified, communication protocol defined. This is architectural pattern, not enforceable requirement.

---

#### C-05: Per-Category Minimums Produced Natural Distribution

**Item text:** All 5 categories covered, distribution varies per category based on content (not uniform), total 11-15 natural landing, build plan justifies each mechanism, no forced mechanisms

**Prompt section(s):**
- Same as A-05 and B-07 (per-category minimums)

**Enforcement method:** Analysis (verify distribution is content-driven, not quota-driven)

**Coverage:** FULLY COVERED — Minimums defined, natural landing documented. This is analysis/retrospective item.

---

#### C-06: Opus Planner + Sonnet Workers Cost-Effective

**Item text:** Planner Opus 4.6, all other agents Sonnet 4.5, cost 1-2 Opus + 9-11 Sonnet, quality maintained

**Prompt section(s):**
- Same as Team Topology (01-REQUIREMENTS lines 1434-1448)

**Enforcement method:** Model assignment verification

**Coverage:** FULLY COVERED — Model assignments documented in agent table. This is resource allocation, not enforceable requirement.

---

#### C-07: Pre-Baked CSS Blocks Reduced Context

**Item text:** :root block, base typography block, accessibility patterns block, responsive strategy block, builder context reduced 70-85%, zero interpretation errors

**Prompt section(s):**
- NOT FOUND in requirements extraction (concept mentioned but pre-baked CSS not extracted as deliverable)

**Enforcement method:** Builder prompt includes pre-baked CSS blocks

**Coverage:** NOT COVERED — Pre-baked CSS mentioned conceptually but NO blocks extracted. Gap: Builder prompt missing CSS blocks.

---

#### C-08: Content-Mechanism Fit Drove Selection

**Item text:** Mechanism justification section exists, each mechanism "I deploy this BECAUSE..." with content reasoning, no "to hit category minimum" justifications, metaphor influences but content validates

**Prompt section(s):**
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 885-898: Justification requirement (MANDATORY)

**Enforcement method:** Build plan includes mechanism justification section

**Coverage:** FULLY COVERED — Justification requirement documented. This is plan verification item.

---

#### C-09: Timing Discrepancy Explained

**Item text:** Estimated time documented, actual time measured, discrepancy analyzed, parallel agent model validated or invalidated, future estimates updated

**Prompt section(s):**
- Same as A-09 and B-21 (timing)

**Enforcement method:** Analysis (compare estimated vs actual, document findings)

**Coverage:** FULLY COVERED — Timing documented. This is analysis/retrospective item.

---

#### C-10: Vocabulary Fluency vs Compositional Fluency Tested

**Item text:** PA includes explicit question about compositional confidence, PA compares Ceiling to Middle on this dimension, result determines if metaphor enables "felt through," Middle was "applied correctly"—is Ceiling "felt through"?

**Prompt section(s):**
- Same as B-25 (metaphor expression felt through)

**Enforcement method:** PA qualitative question comparing vocabulary fluency vs compositional fluency

**Coverage:** NOT COVERED — "Felt through" concept discussed but NO PA question text. Gap: Same as B-25.

---

#### C-11: Prompt Slicing Blind Spots Addressed

**Item text:** Landmark gate verified all structural elements before audit, builder used SendMessage to clarify ambiguous plan elements, zero structural elements missing, prompt slicing documented

**Prompt section(s):**
- Same as A-03 (landmark gate) and B-02 (gate execution)
- 06-SKILL-PROTOCOL-EXTRACTION.md lines 1249-1367: Prompt Slicing Strategy section (complete agent slicing table)

**Enforcement method:** Landmark gate + communication protocol + slicing documentation

**Coverage:** FULLY COVERED — All three components documented. This is process verification item.

---

#### C-12: Evaluation Methodology Improved

**Item text:** Blind novelty evaluation (B-18 confirms), dual PA (B-19 confirms), PA-05d measured programmatically (B-04 confirms), pass margins reported (B-23 confirms), reproducibility improved

**Prompt section(s):**
- Multiple items (B-18, B-19, B-04, B-23)

**Enforcement method:** Verification checklist (all 4 methodology improvements confirmed)

**Coverage:** PARTIALLY COVERED — All 4 items referenced but some gaps persist (B-18 blind protocol incomplete, B-19 reconciliation missing, B-23 margin format missing).

---

#### C-13: Mechanism Interaction Explored

**Item text:** Build plan documents mechanism pairs that REINFORCE (B-10 confirms), PA observes whether interactions are FELT not just claimed, analysis of interacting vs coexisting, Ceiling tests interaction hypothesis

**Prompt section(s):**
- Same as B-10 (mechanism interaction documented)

**Enforcement method:** Build plan documentation + PA observation

**Coverage:** FULLY COVERED — Interaction requirement documented (B-10), PA observation component is same as B-25 (felt through). This is combined verification item.

---

#### C-14: Top 3 Middle Defects Prevented

**Item text:** Footer exists (B-16 confirms), token >=80% (B-15 confirms), CPL 45-80 (B-14 confirms), all 3 resolved via gates+self-checks not luck

**Prompt section(s):**
- Multiple items (B-16, B-15, B-14)

**Enforcement method:** Verification checklist (all 3 defects avoided)

**Coverage:** FULLY COVERED — All 3 defects have prevention mechanisms. This is verification checklist.

---

#### C-15: Perceptual Improvements Over Middle Documented

**Item text:** Comparison includes Middle-tier page as baseline, >=3 specific observations where Ceiling improves, improvements documented with screenshots+CSS, tests if metaphor creates perceptual divergence

**Prompt section(s):**
- Same as B-06 (better than Middle-tier)

**Enforcement method:** Comparative auditor evaluation with evidence

**Coverage:** FULLY COVERED — Requirement defined in B-06. This is verification reference.

---

#### C-16: All Open Questions from Middle Addressed

**Item text:** Q1 per-category vs count (Ceiling uses per-category), Q2 builder catalog entries (decision made A-11), Q3 PA-05d percentage (measured B-04), Q4 Middle landing zone (Ceiling provides n=2), all 4 addressed

**Prompt section(s):**
- Multiple items (A-05, A-11, B-04, A-09)

**Enforcement method:** Verification checklist (all 4 questions resolved)

**Coverage:** PARTIALLY COVERED — Q1/Q3/Q4 answered, Q2 (A-11) decision NOT made. This is verification checklist.

---

## SECTION 2: REVERSE MAP (Prompt Section → Checklist Items)

### Format
| Prompt Section | Items Satisfied | Orphaned? |

---

### 01-REQUIREMENTS-EXTRACTION.md

**Lines 12-38: Container Width 940-960px (THE Primary Failure Mode)**
→ Satisfies: A-05 (Ceiling minimums), B-08 (container width), C-01 (binary rules)
→ Orphaned: NO — heavily referenced

**Lines 40-58: Soul Constraints 7/7**
→ Satisfies: B-09 (soul compliance), C-01 (binary rules)
→ Orphaned: NO

**Lines 61-94: Per-Category Mechanism Minimums (M1 Validated)**
→ Satisfies: A-01 (M1 applied), A-05 (Ceiling minimums), B-07 (5-category coverage), C-05 (natural distribution)
→ Orphaned: NO — core requirement

**Lines 97-126: CPL 45-80 Characters Per Line**
→ Satisfies: A-04 (builder self-check), B-14 (CPL within range), C-01 (binary rules)
→ Orphaned: NO

**Lines 128-158: Token Compliance >=80%**
→ Satisfies: A-04 (builder self-check), B-15 (token compliance), C-01 (binary rules)
→ Orphaned: NO

**Lines 161-189: Heading Spacing Ratio >=1.5:1**
→ Satisfies: A-13 (binary rule), B-12 (heading ratio), C-01 (binary rules)
→ Orphaned: NO

**Lines 192-222: Landmark Completeness (Phase 5.5 gate)**
→ Satisfies: A-03 (gate exists), B-02 (gate triggered), B-16 (footer exists), C-11 (blind spots addressed)
→ Orphaned: NO

**Lines 260-287: Reinforcing Pairs Requirement**
→ Satisfies: A-06 (interaction defined), B-10 (interaction documented), C-13 (interaction explored)
→ Orphaned: NO

**Lines 290-315: 4-Scale Fractal Coherence**
→ Satisfies: A-20 (4-scale defined), B-22 (4-scale demonstrated)
→ Orphaned: NO

**Lines 318-353: Metaphor Derivation (Phases 1-3)**
→ Satisfies: A-18 (phases defined), B-17 (derivation completed)
→ Orphaned: NO

**Lines 356-381: Mechanism Selection Through Metaphor Lens**
→ Satisfies: A-19 (selection through metaphor), C-08 (content-mechanism fit)
→ Orphaned: NO

**Lines 384-408: Rhythm Variation 3-Transition Minimum**
→ Satisfies: A-12 (requirement added), B-11 (rhythm achieved)
→ Orphaned: NO

**Lines 412-437: Weight Distribution >=2 Focal Points**
→ Satisfies: A-15 (requirement defined), B-13 (weight balanced)
→ Orphaned: NO

**Lines 480-493: Gate 4 (Builder Self-Check)**
→ Satisfies: A-04 (requirements documented), B-03 (self-check executed)
→ Orphaned: NO

**Lines 562-619: PA-05 Sub-Criteria (8 total: 4 quantitative + 4 qualitative)**
→ Satisfies: B-04 (PA-05 = 4/4)
→ Orphaned: NO

**Lines 621-646: D3 Novelty Signals**
→ Satisfies: A-07 (blind protocol), B-05 (D3 >= 2/3), B-18 (novelty was blind)
→ Orphaned: NO

**Lines 649-668: Better Than Middle**
→ Satisfies: B-06 (better than Middle), C-15 (improvements documented)
→ Orphaned: NO

**Lines 671-688: Timing Target 60-100 Minutes**
→ Satisfies: A-09 (timing re-estimated), B-21 (time matches), C-09 (discrepancy explained)
→ Orphaned: NO

**Lines 1292-1313: Builder Context Decision (Q1)**
→ Satisfies: A-11 (decision documented), C-16 (Q2 addressed)
→ Orphaned: PARTIAL — decision NOT made, only question documented

**Lines 1369-1424: Execution Prompt Structure (Phases 0-8)**
→ Satisfies: A-21 (file architecture), C-04 (flat topology)
→ Orphaned: NO

**Lines 1427-1450: Team Topology**
→ Satisfies: C-04 (topology scaled), C-06 (model assignments)
→ Orphaned: NO

---

### 02-SPECIFICATION-EXTRACTION.md

**Lines 14-147: Container Width Rules (17 enforcement locations)**
→ Satisfies: Same as 01-REQUIREMENTS container width (redundant documentation by design)
→ Orphaned: NO — deliberate saturation

**Lines 222-252: M1 Per-Category Minimums (UNAPPLIED status)**
→ Satisfies: A-01 (M1 status tracking)
→ Orphaned: NO

**Lines 317-329: Rhythm Variation (NEW-1)**
→ Satisfies: Same as 01-REQUIREMENTS rhythm
→ Orphaned: NO

**Lines 331-339: Landmark Completeness Gate (NEW-2)**
→ Satisfies: Same as 01-REQUIREMENTS landmark gate
→ Orphaned: NO

**Lines 343-350: Heading Spacing Ratio (NEW-3)**
→ Satisfies: Same as 01-REQUIREMENTS heading ratio
→ Orphaned: NO

**Lines 351-361: Token Compliance Self-Check (NEW-4)**
→ Satisfies: Same as 01-REQUIREMENTS token compliance
→ Orphaned: NO

---

### 03-RICHNESS-EXTRACTION.md

**Lines 28-37: Ceiling Natural Landing 12-15 Mechanisms**
→ Satisfies: A-05 (natural landing documented)
→ Orphaned: NO

**Lines 61-120: Scale Coverage (Middle 2, Ceiling 4)**
→ Satisfies: A-20 (4-scale defined)
→ Orphaned: NO

**Lines 154-188: Metaphor vs Pattern**
→ Satisfies: A-19 (selection through metaphor)
→ Orphaned: NO

**Lines 209-220: Reinforcing Pairs (Ceiling requirement)**
→ Satisfies: Same as 01-REQUIREMENTS reinforcing pairs
→ Orphaned: NO

**Lines 224-246: Build Time (Middle 30-50, Ceiling 45-100)**
→ Satisfies: Same as 01-REQUIREMENTS timing
→ Orphaned: NO

**Lines 609-819: Multi-Channel Encoding (complete explanation)**
→ Satisfies: A-06 (interaction defined)
→ Orphaned: NO — this is ENRICHMENT (examples, explanations, anti-examples)

**Lines 822-889: Vocabulary vs Compositional Fluency**
→ Satisfies: A-16 (two-dimension model), C-10 (fluency tested)
→ Orphaned: NO

**Lines 1098-1111: Dual Perceptual Auditors**
→ Satisfies: A-08 (dual PA protocol), B-19 (dual PA reconciled)
→ Orphaned: PARTIAL — reconciliation protocol missing

---

### 06-SKILL-PROTOCOL-EXTRACTION.md

**Lines 137-375: Complete Phase 1-3 Pipeline**
→ Satisfies: A-18 (metaphor phases defined)
→ Orphaned: NO — this is COMPLETE skill documentation (1,878 lines extracted)

**Lines 710-828: CPL + Heading Spacing + Container Width Guardrails**
→ Satisfies: A-04 (self-check), A-13 (heading ratio), B-08 (container), B-12 (heading), B-14 (CPL)
→ Orphaned: NO

**Lines 870-898: Per-Category Mechanism Deployment**
→ Satisfies: A-01 (M1), A-05 (minimums), B-07 (coverage)
→ Orphaned: NO

**Lines 903-927: Phase 4.2C Rhythm Variation**
→ Satisfies: A-12 (rhythm requirement), B-11 (rhythm achieved)
→ Orphaned: NO

**Lines 930-955: Phase 4.7 Fractal Consistency GATE**
→ Satisfies: A-20 (4-scale), B-22 (4-scale demonstrated)
→ Orphaned: NO

**Lines 959-994: Phase 4.7B Landmark Completeness GATE**
→ Satisfies: A-03 (gate exists), B-02 (gate triggered), B-16 (footer)
→ Orphaned: NO

**Lines 998-1024: Phase 4.9 Tokenization Self-Check**
→ Satisfies: A-04 (self-check), B-03 (executed), B-15 (token compliance)
→ Orphaned: NO

**Lines 1031-1042: Fresh-Eyes Principle**
→ Satisfies: A-17 (fresh-eyes protocol), C-03 (found issues)
→ Orphaned: NO

**Lines 1047-1072: PA-05 Mandatory Question**
→ Satisfies: B-04 (PA-05 = 4/4)
→ Orphaned: NO

**Lines 1249-1367: Prompt Slicing Strategy Section**
→ Satisfies: C-11 (blind spots addressed)
→ Orphaned: NO

---

## SECTION 3: JUDGMENT → BINARY CONVERSION PROPOSALS

### Item: A-06 / B-10 / C-13 — Mechanism Interaction (Multi-Channel Encoding)

**Current form:** "For at least 3 mechanism pairs, document how they REINFORCE each other (multi-channel encoding of same dimension)"

**Is it judgment or binary?** HYBRID — Count is binary (>=3 pairs), but "REINFORCE" and "same dimension" are judgment calls.

**Can it be made binary?** PARTIAL

**Binary component (KEEP):**
- Count pairs: >=3 documented pairs (BINARY)

**Judgment component (CANNOT eliminate):**
- "Reinforce" = requires semantic analysis (do they encode SAME dimension or DIFFERENT dimensions?)
- Example: Border-weight 4px + Color red BOTH express criticality = REINFORCE
- Anti-example: Border-weight 4px (hierarchy) + Zone background (separation) = COEXIST, don't reinforce

**Proposed conversion:**
✅ BINARY CHECK: Build plan includes MECHANISM INTERACTIONS section with >=3 documented pairs
⚠️ JUDGMENT CHECK: PA evaluates whether pairs actually REINFORCE (perceptual coherence) vs just COEXIST (independent)

**Priority:** P2 SHOULD — Improve precision but judgment component is essential (semantic reinforcement cannot be reduced to formula)

---

### Item: A-08 / B-19 — Dual PA Reconciliation Protocol

**Current form:** "Team-lead reconciles findings: agreement = high confidence, disagreement = flagged"

**Is it judgment or binary?** JUDGMENT — "Reconciliation" is qualitative synthesis, no formula provided.

**Can it be made binary?** YES with procedure

**Proposed conversion:**
1. **BINARY CHECK:** Both PA files exist (04a, 04b)
2. **BINARY CHECK:** Both PA answered same 48 questions
3. **RECONCILIATION PROCEDURE (new):**
   - For each PA question, compare PA-1 answer vs PA-2 answer
   - Agreement (both YES or both NO) → HIGH CONFIDENCE, verdict uses consensus
   - Disagreement (one YES, one NO) → FLAG, team-lead reads both rationales, makes tie-breaking judgment
   - Document disagreement count: 0-5 disagreements = strong consensus, 6-15 = moderate consensus, 16+ = weak consensus (consider third PA or escalate)

**Priority:** P1 MUST — Without reconciliation protocol, dual PA loses value (no way to handle disagreement)

---

### Item: A-11 / C-16 Q2 — Builder Context Decision

**Current form:** "Decision documented with rationale. If (A) names only: SendMessage fallback. If (B) full entries: catalog excerpts added."

**Is it judgment or binary?** DECISION (one-time choice), not ongoing judgment

**Can it be made binary?** YES via forced decision

**Proposed conversion:**
**BLOCKING GATE:** Execution prompt CANNOT be written until this decision is made. Team-lead must choose:
- Option A: Builder sees mechanism names + 1-line descriptions from build plan ONLY, uses SendMessage to ask planner for clarification
- Option B: Builder sees full mechanism catalog excerpts (mechanism-catalog.md relevant sections) in prompt

**Decision factors (document in execution plan):**
- Option A pros: Smaller builder context (~400 lines saved), forces clarification communication (tests messaging protocol)
- Option A cons: Builder might not ask (missing footer suggests builder didn't understand "Footer Mirror" without catalog entry)
- Option B pros: Zero ambiguity (builder has full mechanism documentation)
- Option B cons: Larger builder context (~800 lines total), might reduce SendMessage usage

**Recommendation from REQUIREMENTS extraction:** Option A with SendMessage fallback (tests communication protocol)

**Priority:** P1 MUST — Cannot build execution prompt without this decision

---

### Item: A-14 / B-23 — Measurement Precision (Margin Reporting)

**Current form:** "Format: PA-05b: PASS at 2.3x (threshold 2.0x, margin +0.3x)"

**Is it judgment or binary?** BINARY format specification, not judgment

**Can it be made binary?** Already binary (format compliance check)

**Proposed conversion (specification):**
**VERDICT TEMPLATE FORMAT (mandatory):**

```
| Criterion | Threshold | Measured Value | Margin | Status |
|-----------|-----------|----------------|--------|--------|
| PA-05a: Layout elements | >= 2 | 4 elements | +2 | PASS |
| PA-05b: Padding range | >= 2.0x | 2.3x | +0.3x | PASS |
| PA-05c: Hierarchy blur test | Visible | Visible | qualitative | PASS |
| PA-05d: Compositional CSS | >= 15% | 18.5% | +3.5% | PASS |
| Container width | 940-960px | 960px | 0px (at ceiling) | PASS |
| CPL | 45-80 chars | 72 chars | -8 from ceiling | PASS |
| Token compliance | >= 80% | 84.2% | +4.2% | PASS |
| Heading ratio | >= 1.5:1 | 2.0:1 | +0.5 | PASS |
```

**Priority:** P2 SHOULD — Improves precision, distinguishes "barely passes" from "clearly passes"

---

### Item: A-15 / B-13 — Weight Distribution (Focal Points in Bottom 50%)

**Current form:** "PA identifies focal points (dark header, diagram, callout), at least 2 focal points in bottom half"

**Is it judgment or binary?** HYBRID — Count is binary (>=2), but "focal point" identification is judgment.

**Can it be made binary?** PARTIAL with definition tightening

**Proposed conversion:**
✅ BINARY CHECK: PA counts focal points in bottom 50% >= 2
⚠️ JUDGMENT COMPONENT: What counts as "focal point"?

**Tighten definition (convert to checklist):**
A "focal point" is ANY element that meets 2+ of these criteria:
- [ ] Visually distinct from surrounding elements (different background, heavy border, or contrasting color)
- [ ] Contains high-contrast content (dark element on light page, or light element on dark section)
- [ ] Is larger than surrounding elements (>=2x text size, or diagram with solid offset)
- [ ] Breaks rhythm (only instance of a visual treatment on page)

**Binary check becomes:** PA identifies elements meeting 2+ criteria, counts how many in bottom 50%, verifies >=2

**Priority:** P2 SHOULD — Improves precision without eliminating perceptual judgment

---

### Item: B-25 / C-10 — Metaphor Expression "Felt Through"

**Current form:** "PA observes metaphor influence (perceptual evidence), not 'professionally stiff,' PA notes 'designed with intent' vs 'specifications applied correctly'"

**Is it judgment or binary?** PURE JUDGMENT — This is THE qualitative threshold between Middle (vocabulary fluency) and Ceiling (compositional fluency).

**Can it be made binary?** ❌ NO — Converting to binary would destroy the concept

**Why it cannot be binary:**
- "Felt through" = perceptual quality, not measurable quantity
- Middle tier passed ALL binary checks (PA-05 4/4, container width, soul, mechanisms) but PA still said "professionally stiff"
- The gap between "specifications applied correctly" and "designed with intent" is THE research question Ceiling tests
- Making this binary would be Teaching to the Test (builder would game the metric)

**What CAN be improved (without converting to binary):**
✅ Add PA question explicitly: "Does this page feel like specifications applied correctly (Middle-tier), or composition with intent (Ceiling-tier)?"
✅ Add confidence scale: "Very confident this is Middle-tier" / "Somewhat confident this is Middle-tier" / "Unclear" / "Somewhat confident this is Ceiling-tier" / "Very confident this is Ceiling-tier"
✅ Add supporting evidence requirement: "What SPECIFIC perceptual qualities make you confident? (atmosphere, mechanism interaction felt not just seen, metaphor influence visible without being explicit, etc.)"

**Priority:** P2 SHOULD — Add structured question without converting to binary. This preserves qualitative judgment while improving documentation.

---

### Item: B-24 — No WOULD-NOT-SHIP Findings (Severity Classification)

**Current form:** "Zero CRITICAL severity, zero 'major flow issues,' zero 'feels unfinished'"

**Is it judgment or binary?** JUDGMENT — "CRITICAL" and "major flow issues" are severity classifications requiring qualitative assessment.

**Can it be made binary?** PARTIAL with severity taxonomy

**Proposed conversion:**
**PA SEVERITY TAXONOMY (add to PA skill):**

**CRITICAL (WOULD-NOT-SHIP):**
- Structural incompleteness (missing footer, missing header, planned sections absent)
- Flow-breaking defects (page just stops, major visual disruption, unreadable text)
- Accessibility failures (contrast below WCAG minimums, text too small to read)

**MAJOR (WOULD-SHIP-WITH-RESERVATIONS):**
- Perceptual rhythm issues (metronomic spacing, no visual variation)
- Weight distribution problems (top-heavy, all focal points in first 50%)
- Mechanism deployment issues (applied uniformly, no variation within mechanism)

**MINOR (ACCEPTABLE):**
- Polish gaps (could be better but doesn't block shipping)
- Missed optimization (good not great, works but room for improvement)

**Binary check becomes:** PA categorizes ALL findings into severity levels, counts CRITICAL findings, verifies count = 0

**Priority:** P1 MUST — Enables objective pass/fail on "no WOULD-NOT-SHIP" criterion

---

### Item: C-02 — Information Loss Mitigation (Communication Verification)

**Current form:** "Builder used SendMessage >=1 time to ask planner clarifying question, builder did not guess or interpret"

**Is it judgment or binary?** HYBRID — Message count is binary (>=1), but "did not guess" is judgment (requires reading builder output).

**Can it be made binary?** PARTIAL with message content requirements

**Proposed conversion:**
✅ BINARY CHECK: Message log shows >=1 builder→planner message
✅ BINARY CHECK: Message log shows >=1 planner→builder response
⚠️ JUDGMENT CHECK: Team-lead reviews messages, verifies they are CLARIFICATION (not status updates)

**Message content requirements (add to protocol):**
- CLARIFICATION message: Builder asks "What does [ambiguous plan element] mean?" or "How should I implement [underspecified element]?"
- STATUS message (doesn't count): "I'm starting Section B now" or "Build complete"

**Verification table:**
| Message # | From→To | Content Summary | Type | Counts Toward >=5? |
|-----------|---------|-----------------|------|-------------------|
| 1 | Builder→Planner | "What does Footer Mirror mean?" | CLARIFICATION | YES |
| 2 | Planner→Builder | "Dark bg + border-top matching header" | CLARIFICATION | YES |
| 3 | Builder→Team-Lead | "Build complete" | STATUS | NO |

**Priority:** P1 MUST — Without content verification, agents could send empty/meaningless messages to hit count threshold

---

## SECTION 4: GAP ANALYSIS (NOT COVERED or PARTIALLY COVERED Items)

### Priority P1: MUST (Blocking for Ceiling Execution)

#### Gap 1: Inter-Agent Communication Protocol Not Enforced (A-02, B-01, C-02)

**What's missing:** Protocol described conceptually ("builder should ask planner," "auditor should flag issues") but NO concrete agent prompt language, NO enforcement mechanism, NO verification method.

**Impact:** Agents may have SendMessage capability but work in isolation (Middle-tier pattern). Zero communication = information loss, missing footer-class defects.

**Fix required:**
- **File:** Create agent prompt templates (builder-prompt-slice.md, auditor-prompt-slice.md, team-lead-prompt-slice.md)
- **Content:** Explicit SendMessage instructions:
  - Builder: "BEFORE implementing ambiguous plan elements, use SendMessage to ask planner clarifying question. Example: 'Plan says Footer Mirror — does this mean same background color as header?'"
  - Auditor: "IF you identify issues during audit, use SendMessage to flag to team-lead BEFORE completing report. Do not wait until report submission."
  - Team-lead: "IF builder messages show confusion, request planner to provide clarification. IF auditor flags issues, assess whether iteration needed."
- **Enforcement:** Team-lead checks message count at Phase 5 completion. If count < 5, prompt agents: "Do you have clarifying questions?"

**Acceptance criteria:** Message log shows >=5 messages (>=1 builder→planner, >=1 auditor→team-lead, >=1 team-lead→builder), all substantive.

---

#### Gap 2: Landmark Completeness Gate Not BLOCKING (A-03, B-02)

**What's missing:** Gate described but NOT positioned as BLOCKING (team-lead cannot proceed to Phase 6 until verification passes). No automated blocking mechanism.

**Impact:** Team-lead might skip gate verification, launch auditors before footer implemented (Middle-tier failure mode repeats).

**Fix required:**
- **File:** Team-lead prompt (master execution prompt)
- **Location:** Phase 5→6 boundary
- **Add:** "🚨 BLOCKING GATE: You CANNOT launch perceptual auditors until landmark verification PASSES. Execute landmark verification NOW:
  1. Open ceiling-page.html in browser
  2. Verify: Header present? (YES/NO)
  3. Verify: Footer present? (YES/NO)
  4. Verify: Section count matches build plan? (count = __)
  5. IF any verification FAILS, use SendMessage to request builder add missing landmarks. DO NOT PROCEED to Phase 6 until ALL verifications PASS."

**Acceptance criteria:** Team-lead log documents gate execution (all verifications documented) BEFORE auditor launch.

---

#### Gap 3: Builder Self-Check Not BLOCKING File Write (A-04, B-03)

**What's missing:** Self-check checklist exists but NO mechanism to BLOCK file write if checks fail. Builder could skip self-check entirely.

**Impact:** Defects shipped to audit that builder could have caught (CPL violations, token compliance failures, missing landmarks).

**Fix required:**
- **File:** Builder prompt (builder-prompt-slice.md)
- **Location:** Before file write instructions
- **Add:** "🚨 BLOCKING REQUIREMENT: You CANNOT write ceiling-page.html until ALL self-checks PASS.

  Execute self-checks NOW:
  - [ ] CPL: Calculate (content-width / font-size / 0.6). Result = __ chars. PASS: 45-80. FAIL: <45 or >80.
  - [ ] Token compliance: Count var() refs = __. Count raw hex/px = __. Ratio = __%. PASS: >=80%. FAIL: <80%.
  - [ ] Landmarks: Header present? Footer present? Section count = build plan?
  - [ ] Heading ratio: For each h3, margin-top / margin-bottom = __. PASS: ALL >=1.5:1. FAIL: ANY <1.5:1.
  - [ ] Container width: max-width = __px. PASS: 940-960. FAIL: <940 or >960.
  - [ ] Soul: 7/7 verified? (border-radius:0, box-shadow:none, no #000/#FFF, typography trinity, h3 italic, no gradients)

  IF ANY CHECK FAILS, FIX BEFORE WRITING FILE. Document self-check results in final message before file write."

**Acceptance criteria:** Builder output includes self-check confirmation with actual values (not just "checked").

---

#### Gap 4: Blind Novelty Evaluation No Randomization Procedure (A-07, B-18)

**What's missing:** Protocol says "3 unlabeled pages in randomized order" but NO procedure for HOW team-lead randomizes or HOW blind protocol is verified.

**Impact:** Novelty evaluator might receive labeled pages by accident (knows which is Ceiling), confirmation bias inflates novelty scores (Middle-tier failure mode).

**Fix required:**
- **File:** Team-lead prompt (Phase 7b Blind Novelty Evaluation section)
- **Add:** "Randomization procedure:
  1. Copy ceiling-page.html → temp/page-A.html
  2. Copy middle-page.html → temp/page-B.html
  3. Copy reference-page.html (DD-006 or CD-006) → temp/page-C.html
  4. Randomly shuffle assignments (use die roll or random.org: 1-6 = ABC, 2-5 = ACB, 3-4 = BAC, 2-6 = BCA, 3-5 = CAB, 4-6 = CBA)
  5. Record actual assignments in private log: page-A = [Ceiling/Middle/Reference], page-B = [...], page-C = [...]
  6. Launch novelty-evaluator with prompt: 'You will receive 3 unlabeled pages (page-A, page-B, page-C). Identify which page is structurally NEWEST. You have zero context on these pages—evaluate based on visual fingerprint, CSS patterns, mechanism combinations only.'
  7. ONLY AFTER evaluator completes assessment, reveal labels and ask: 'Did you know which page was newest before I revealed labels?'"

**Acceptance criteria:** Evaluator confirms "I did not know which page was newest before labels revealed."

---

#### Gap 5: Dual PA Reconciliation Protocol Missing (A-08, B-19)

**What's missing:** Two PA agents specified but NO reconciliation protocol (what happens if PA-1 says YES and PA-2 says NO?).

**Impact:** Dual PA loses value (no way to handle disagreement, team-lead guesses or picks favorite).

**Fix required:**
- **File:** Team-lead prompt (Phase 6b reconciliation section)
- **Add:** "Reconciliation procedure:
  1. Read 04a-perceptual-audit.md (PA-1 findings)
  2. Read 04b-perceptual-audit.md (PA-2 findings)
  3. For EACH of 48 PA questions, compare PA-1 answer vs PA-2 answer:
     - Agreement (both YES or both NO) → HIGH CONFIDENCE, record consensus answer
     - Disagreement (one YES, one NO) → FLAG, read both rationales, make tie-breaking judgment based on evidence quality
  4. Count disagreements: 0-5 = strong consensus (>90% agreement), 6-15 = moderate consensus (70-90%), 16+ = weak consensus (<70%, consider third PA)
  5. Document reconciliation results in verdict: 'PA-1 and PA-2 agreed on X/48 questions (Y% consensus). Disagreements: [list flagged questions with tie-break rationale].'"

**Acceptance criteria:** Verdict includes reconciliation results, disagreement count, tie-break rationales for flagged questions.

---

#### Gap 6: Programmatic Audit Not Generated FROM Build Plan (A-10, B-20)

**What's missing:** Programmatic audit uses GENERIC checklist (Critical-10, Guardrails) instead of PLAN-SPECIFIC checklist (did builder implement ALL planned mechanisms?).

**Impact:** Builder implements 9/12 planned mechanisms, programmatic audit checks generic compliance (passes), perceptual audit sees "where are the other 3?"

**Fix required:**
- **File:** Programmatic auditor prompt (programmatic-auditor-prompt-slice.md)
- **Location:** Phase 6a instructions (first step BEFORE generic checks)
- **Add:** "STEP 1: Generate plan-specific checklist FROM build plan.

  Read 02-build-plan.md Section 3 (Mechanism Deployment).

  For EACH mechanism listed in plan:
  - Extract mechanism name (e.g., 'Border-Weight Gradient #1')
  - Extract deployment spec (e.g., '4px critical → 3px high → 1px low for security layers')
  - Generate verification check (e.g., 'Verify: CSS contains border-left: 4px on .threat-critical, border-left: 3px on .threat-high, border-left: 1px on .threat-low')

  Output format:
  | Mechanism | Planned Deployment | Verification Method | Status |
  |-----------|-------------------|---------------------|--------|
  | #1 Border-Weight | 4px→3px→1px security layers | Check computed border-left values | [DEPLOYED/MISSING] |
  | #2 2-Zone DNA | Sparse label + dense body | Check .callout structure | [DEPLOYED/MISSING] |

  STEP 2: Execute plan-specific checklist (verify ALL mechanisms DEPLOYED).

  STEP 3: Execute generic checklist (Critical-10, Guardrails).

  Report: PLANNED vs DEPLOYED vs MISSING."

**Acceptance criteria:** Programmatic audit reports "12 mechanisms planned, 12 deployed, 0 missing" (or identifies specific missing mechanisms).

---

#### Gap 7: Builder Context Decision Not Made (A-11, C-16 Q2)

**What's missing:** Question documented (Option A names only vs Option B full catalog) but NO decision made. Execution prompt cannot be written until this is resolved.

**Impact:** BLOCKING — Cannot build builder prompt without knowing what builder sees.

**Fix required:**
- **File:** Execution plan decision log (new file: ceiling-prompt-assembly/BUILDER-CONTEXT-DECISION.md)
- **Content:** "Decision required BEFORE writing builder prompt. Choose one:

  **Option A: Names + 1-line + SendMessage fallback**
  - Builder sees: Mechanism names + 1-line descriptions from build plan ONLY (e.g., '#1 Border-Weight Gradient: Progressive encoding via border thickness')
  - If unclear: Builder uses SendMessage to ask planner 'How do I implement mechanism #1 Border-Weight Gradient for geological strata?'
  - Pros: Smaller context (~400 lines saved), tests communication protocol
  - Cons: Builder might not ask (missing footer suggests ambiguity causes omissions)

  **Option B: Full catalog excerpts**
  - Builder sees: Full mechanism-catalog.md entries for ALL mechanisms in build plan (complete CSS patterns, examples, application modes)
  - No SendMessage needed for mechanism understanding
  - Pros: Zero ambiguity, builder has full documentation
  - Cons: Larger context (~800 lines builder prompt), might reduce messaging

  **Recommendation from requirements extraction:** Option A (tests communication, smaller context).

  **DECISION:** [A or B] — [rationale] — [date/who decided]"

**Acceptance criteria:** Decision documented with rationale BEFORE builder prompt written.

---

### Priority P2: SHOULD (High Value, Strongly Recommended)

#### Gap 8: Measurement Precision Standards Not in Verdict Template (A-14, B-23)

**What's missing:** Concept of margin reporting described ("PASS at 2.3x, threshold 2.0x, margin +0.3x") but NO verdict template format extracted.

**Impact:** Verdict synthesizer doesn't know to report margins, outputs bare PASS/FAIL like Middle-tier ("PA-05b: PASS" without margin).

**Fix required:**
- **File:** Verdict synthesizer prompt (verdict-synthesizer-prompt-slice.md)
- **Add:** "Verdict format requirements:

  For EVERY quantitative criterion, report: Threshold / Measured Value / Margin / Status.

  Template:
  ```
  | Criterion | Threshold | Measured | Margin | Status |
  |-----------|-----------|----------|--------|--------|
  | PA-05b Padding range | >= 2.0x | 2.3x | +0.3x | PASS |
  ```

  DO NOT report bare PASS/FAIL. ALWAYS include measured value and margin."

**Acceptance criteria:** Verdict includes margins for all quantitative criteria (PA-05a/b/d, container width, CPL, token compliance, heading ratio).

---

#### Gap 9: Weight Distribution PA Question Text Missing (A-15, B-13)

**What's missing:** Requirement defined ("PA identifies >=2 focal points in bottom 50%") but NO PA question text extracted.

**Impact:** PA doesn't know to look for focal points, might not count or identify them systematically.

**Fix required:**
- **File:** Perceptual auditing skill (PA question list)
- **Add:** "PA-50: Weight Distribution

  Question: 'Identify ALL visual focal points on this page. A focal point is any element that draws attention through visual distinctiveness: dark headers, diagrams with offset, callouts with heavy borders, code blocks with dark backgrounds, data tables, or any high-contrast element.

  For EACH focal point identified:
  - Name the element (e.g., 'Architecture diagram with solid offset')
  - Note position (top 50% or bottom 50% of page)

  Count focal points in bottom 50%. Are there >= 2 focal points in bottom half?

  Assessment: [YES: >=2 focal points in bottom 50%] [NO: 0-1 focal points in bottom 50%, page is top-heavy]'"

**Acceptance criteria:** PA report includes focal point inventory with positions, confirms >=2 in bottom 50%.

---

#### Gap 10: "Felt Through" Quality No PA Question Text (B-25, C-10)

**What's missing:** Concept of "felt through" (compositional fluency) vs "applied correctly" (vocabulary fluency) discussed throughout but NO PA question operationalizing it.

**Impact:** PA doesn't systematically evaluate compositional fluency, might not distinguish Middle (vocabulary) from Ceiling (composition).

**Fix required:**
- **File:** Perceptual auditing skill (PA question list)
- **Add:** "PA-51: Compositional Fluency (Ceiling-Specific Question)

  Context: Middle tier demonstrates vocabulary fluency (knowing many mechanisms, deploying correctly). Ceiling tier should demonstrate compositional fluency (mechanisms work TOGETHER through metaphor, expressing unified concept).

  Question: 'Does this page feel like:
  - (A) Specifications applied correctly — Professional, competent execution of rules. Mechanisms present but feel independent. Page is ORGANIZED. (Middle-tier pattern)
  - (B) Composition with intent — Mechanisms reinforce each other, expressing unified concept. Visual choices feel purposeful not arbitrary. Page has ATMOSPHERE. (Ceiling-tier pattern)

  Confidence: [Very confident A] [Somewhat confident A] [Unclear] [Somewhat confident B] [Very confident B]

  Supporting evidence: What SPECIFIC perceptual qualities inform your assessment? (Examples: atmosphere present, mechanism interaction FELT not just SEEN, metaphor influence visible without being explicit, spatial cohesion beyond correctness, visual choices have semantic meaning)'"

**Acceptance criteria:** PA report includes compositional fluency assessment with confidence level and supporting evidence.

**NOTE:** This CANNOT be made binary without losing meaning. Qualitative judgment is essential.

---

#### Gap 11: WOULD-NOT-SHIP Severity Taxonomy Missing (B-24)

**What's missing:** Checklist requires "zero CRITICAL severity" but NO severity taxonomy in PA protocol (how does PA know what's CRITICAL vs MAJOR vs MINOR?).

**Impact:** PA might flag "missing footer" as MAJOR instead of CRITICAL, or flag "metronomic rhythm" as CRITICAL instead of MAJOR. Inconsistent severity classification.

**Fix required:**
- **File:** Perceptual auditing skill (PA severity guidelines)
- **Add:** "Finding Severity Classification

  **CRITICAL (WOULD-NOT-SHIP):**
  - Structural incompleteness (missing footer, missing header, planned sections absent)
  - Flow-breaking defects (page just stops, major visual disruption, sections compete instead of flow)
  - Accessibility failures (contrast below WCAG minimums, text too small <14px, CPL >100)
  - Identity violations (soul constraints violated: rounded corners, shadows, gradients)

  **MAJOR (WOULD-SHIP-WITH-RESERVATIONS):**
  - Perceptual rhythm issues (metronomic spacing, no visual variation, monotonous transitions)
  - Weight distribution problems (top-heavy, all focal points in first 50%, visual imbalance)
  - Mechanism deployment issues (applied uniformly without variation, mechanically correct but perceptually flat)
  - Container width violations (outside 940-960px range)

  **MINOR (ACCEPTABLE, POLISH GAPS):**
  - Could-be-better observations (good not great, works but room for improvement)
  - Missed optimization opportunities (alternative approach might be stronger)
  - Stylistic preferences (subjective, not impacting function or perception)

  **Severity assignment rule:** If you're uncertain whether CRITICAL or MAJOR, ask 'Would I refuse to ship this as-is?' If YES → CRITICAL. If 'I'd ship but not proudly' → MAJOR. If 'I'd ship happily' → MINOR."

**Acceptance criteria:** PA report categorizes ALL findings by severity, verdict confirms "zero CRITICAL severity findings."

---

#### Gap 12: Pre-Baked CSS Blocks Not Extracted (C-07)

**What's missing:** Concept mentioned (:root block, base typography, accessibility, responsive) but NO actual CSS blocks extracted.

**Impact:** Builder writes all CSS from scratch instead of copy-pasting pre-baked blocks, increases context + error rate.

**Fix required:**
- **File:** Builder prompt (Appendix: Pre-Baked CSS Blocks)
- **Content:** Extract 4 blocks:
  1. :root block (100 lines) — all CSS custom properties from tokens.css
  2. Base typography block (80 lines) — body, h1-h6, p, ul, ol, code with design system defaults
  3. Accessibility patterns block (60 lines) — focus states, skip links, screen reader utilities
  4. Responsive strategy block (80 lines) — 768px breakpoint media query with mobile adjustments
- **Total:** ~320 lines copy-paste ready

**Acceptance criteria:** Builder prompt includes 4 pre-baked CSS blocks, builder copies them verbatim (reduces context from 800 lines to 480 lines).

---

### Priority P3: DEFER (Nice to Have, Not Blocking)

#### 13 additional gaps at P3 level (omitted for length — see AUXILIARY-PRE-CEILING-AUDIT.md items 1.2-1.5, 2.4-2.7, 3.1-3.3, etc.)

---

## SECTION 5: REDUNDANCY ANALYSIS

### Item: Container Width (940-960px)

**Appears in:**
- 01-REQUIREMENTS lines 12-38 (complete specification)
- 02-SPECIFICATION lines 14-147 (17 enforcement locations documented)
- 06-SKILL-PROTOCOL lines 746-783 (guardrails section)
- Multiple checklist items: A-05, B-08, C-01

**Is this redundant?** ❌ NO — This is DELIBERATE SATURATION, not redundancy.

**Rationale:** Container width was THE Phase D primary failure mode (4/5 pages violated it). Requirements extraction documents 17 locations across 4 systems where this rule appears. This is intentional redundancy to prevent Ceiling from failing the same way Phase D failed.

**Recommendation:** KEEP all instances. Saturation is justified when failure rate is 80%.

---

### Item: Per-Category Minimums (M1)

**Appears in:**
- 01-REQUIREMENTS lines 61-94 (M1 validated)
- 02-SPECIFICATION lines 222-252 (M1 status tracking)
- 03-RICHNESS lines 196-241 (M1 validation evidence)
- 06-SKILL-PROTOCOL lines 870-898 (per-category deployment table)
- Multiple checklist items: A-01, A-05, B-07, C-05

**Is this redundant?** ❌ NO — Each appearance serves different purpose.

**Differentiation:**
- 01-REQUIREMENTS: Documents WHAT M1 is (per-category minimums S:1+...)
- 02-SPECIFICATION: Documents M1 STATUS (unapplied, needs to be applied before Ceiling)
- 03-RICHNESS: Documents M1 VALIDATION (Middle experiment confirmed it works)
- 06-SKILL-PROTOCOL: Documents M1 ENFORCEMENT (how it appears in skill)

**Recommendation:** KEEP all instances. This is structured documentation (requirement / status / evidence / implementation), not redundancy.

---

### Item: Rhythm Variation (3-Transition Minimum)

**Appears in:**
- 01-REQUIREMENTS lines 384-408 (requirement defined)
- 02-SPECIFICATION lines 317-329 (NEW-1 status)
- 06-SKILL-PROTOCOL lines 903-927 (Phase 4.2C implementation)
- Checklist items: A-12, B-11

**Is this redundant?** ❌ NO — Same pattern as M1 (requirement / status / implementation / verification).

**Recommendation:** KEEP all instances.

---

### TRUE REDUNDANCY DETECTED: PA-05 Sub-Criteria

**Appears in:**
- 01-REQUIREMENTS lines 562-595 (4 quantitative sub-criteria)
- 01-REQUIREMENTS lines 597-619 (4 additional qualitative sub-criteria)
- 06-SKILL-PROTOCOL lines 1047-1072 (PA-05 question text)

**Is this redundant?** ⚠️ PARTIAL — 8 sub-criteria total but unclearly organized.

**Confusion:** Lines 562-595 define "PA-05 Sub-Criteria (The 'Designed' Threshold)" with 4 items (a/b/c/d). Lines 597-619 define "PA-05 Four Additional Sub-Criteria" with 4 MORE items (DESIGNED/COHERENT/PROPORTIONATE/POLISHED). Are these separate, or is this double-counting?

**Clarification needed:**
- Are there 4 PA-05 criteria (a/b/c/d) OR 8 criteria (a/b/c/d + 4 qualitative)?
- Lines 597-619 say "Added to perceptual-auditing skill" but are they REPLACEMENTS or ADDITIONS?

**Recommendation:** MERGE and CLARIFY. Propose:
- PA-05 has 4 QUANTITATIVE sub-criteria (a/b/c/d) — binary thresholds
- PA-05 has 4 QUALITATIVE dimensions (DESIGNED/COHERENT/PROPORTIONATE/POLISHED) — perceptual judgments
- Total 8 dimensions, differentiate quantitative (measurable) vs qualitative (observed)

**Action required:** Consolidate into single PA-05 specification with 4+4 structure clearly labeled.

---

## SECTION 6: PRIORITY TRIAGE (All 62+ Items Categorized)

### P1 MUST: Prevents Known Failures (17 items)

1. **A-01 M1 Applied** — THE limiting specification identified by all research
2. **A-02 Communication Protocol** — Missing footer traced to zero messaging
3. **A-03 Landmark Gate** — Prevents WOULD-NOT-SHIP structural omissions
4. **A-04 Builder Self-Check** — Catches defects before audit (CPL, tokens, landmarks)
5. **A-07 Blind Novelty** — Prevents confirmation bias (Middle evaluator knew hypothesis)
6. **A-08 Dual PA Protocol** — Without reconciliation, dual PA loses value
7. **A-11 Builder Context Decision** — BLOCKING (cannot write builder prompt without this)
8. **B-01 Communication Happened** — Verification that protocol was executed
9. **B-02 Gate Triggered** — Verification that gate actually ran (not just specified)
10. **B-03 Self-Check Executed** — Verification that builder performed checks
11. **B-08 Container Width** — THE Phase D primary failure mode (4/5 violated)
12. **B-09 Soul Compliance** — Identity constraints (absolute requirements)
13. **B-16 No Missing Landmarks** — Middle's WOULD-NOT-SHIP finding (footer)
14. **B-18 Novelty Was Blind** — Verification of blind protocol execution
15. **B-20 Audit From Plan** — Prevents "builder deployed 9/12 mechanisms" gap
24. **B-24 No WOULD-NOT-SHIP** — Requires severity taxonomy (currently missing)
17. **C-14 Top 3 Defects Prevented** — Combined verification (footer, tokens, CPL)

**Rationale:** These prevent known Middle-tier defects (footer, tokens, CPL) or address Phase D failures (container width) or fix evaluation gaps (blind novelty, dual PA).

---

### P2 SHOULD: High Value, Proven Effective (28 items)

1. **A-05 Ceiling Minimums** — Defines Ceiling per-category floors (conflict resolution needed)
2. **A-06 Mechanism Interaction** — THE Ceiling differentiator (multi-channel encoding)
3. **A-09 Timing Re-Estimated** — Informs expectations (45-100 min vs 150-220 min)
4. **A-10 Audit From Plan** — Already listed in P1 (duplicate)
5. **A-12 Rhythm Variation** — THE highest-leverage perceptual improvement from Middle
6. **A-13 Heading Ratio** — Binary rule conversion (1.5:1 minimum)
7. **A-14 Measurement Precision** — Improves rigor (margin reporting)
8. **A-15 Weight Distribution** — Prevents Middle's top-heavy composition
9. **A-16 Two-Dimension Model** — Explains vocabulary vs composition fluency
10. **A-17 Fresh-Eyes Protocol** — Context-starved PA finds issues loaded agents miss
11. **A-18 Metaphor Phases** — Ceiling's PRIMARY differentiator (Phases 1-3)
12. **A-19 Selection Through Metaphor** — Derivation vs lookup (Ceiling vs Middle)
13. **A-20 4-Scale Fractal** — Raises complexity requirement (2 scales → 4 scales)
14. **B-04 PA-05 4/4** — Designed threshold (quantitative + qualitative)
15. **B-05 D3 Novelty** — Success criterion (>=2/3 signals)
16. **B-06 Better Than Middle** — Ceiling's value proposition (>=3 improvements)
17. **B-07 5-Category Coverage** — Breadth requirement (all 5 categories)
18. **B-10 Interaction Documented** — Combined with A-06 (reinforcing pairs)
19. **B-11 Rhythm Achieved** — Combined with A-12 (rhythm variation)
20. **B-12 Heading Ratio** — Combined with A-13 (binary rule)
21. **B-13 Weight Balanced** — Combined with A-15 (focal points)
22. **B-14 CPL 45-80** — Critical-10 requirement (formula provided)
23. **B-15 Token >=80%** — Critical-10 requirement (self-check)
24. **B-17 Metaphor Completed** — Combined with A-18 (deliverable verification)
25. **B-19 Dual PA Reconciled** — Combined with A-08 (reconciliation protocol)
26. **B-22 4-Scale Demonstrated** — Combined with A-20 (fractal coherence)
27. **B-23 Margins Reported** — Combined with A-14 (verdict format)
28. **B-25 Felt Through** — CANNOT make binary (qualitative threshold)

**Rationale:** High impact but not blocking. Ceiling can execute without these, but quality/rigor improves significantly with them.

---

### P3 DEFER: Nice to Have, Adds Ambient Complexity (17 items)

1. **A-21 File Architecture** — Descriptive checklist, not enforceable requirement
2. **B-21 Timing Matches** — Measurement/analysis, post-execution
3. **C-01 Binary Rules 100%** — Verification checklist, combines all binary rules
4. **C-02 Information Loss Mitigated** — Combined with B-01 (communication)
5. **C-03 Fresh-Eyes Found Issues** — Retrospective analysis, not enforceable
6. **C-04 Topology Scaled** — Architectural pattern, not requirement
7. **C-05 Natural Distribution** — Retrospective analysis (content-driven vs quota-driven)
8. **C-06 Opus/Sonnet Split** — Resource allocation, already documented
9. **C-07 Pre-Baked CSS** — Context reduction (nice to have but builder can write from scratch)
10. **C-08 Content-Mechanism Fit** — Combined with justification requirement
11. **C-09 Timing Explained** — Retrospective analysis
12. **C-10 Fluency Tested** — Combined with B-25 (felt through)
13. **C-11 Blind Spots Addressed** — Combined verification (gate + messaging + slicing)
14. **C-12 Methodology Improved** — Combined verification (blind + dual PA + measured + margins)
15. **C-13 Interaction Explored** — Combined verification (B-10 + B-25)
16. **C-15 Improvements Documented** — Combined with B-06 (better than Middle)
17. **C-16 Open Questions Addressed** — Combined verification checklist

**Rationale:** These are retrospective analysis items, verification checklists, or combined references to other items. They add documentation completeness but don't add enforceable requirements.

---

### P4 REMOVE: Redundant or Net Negative (0 items)

**Analysis:** NO items identified as net negative or truly redundant (after resolving PA-05 sub-criteria confusion and confirming container width saturation is intentional).

---

## SECTION 7: CRITICAL CONFLICTS TO RESOLVE

### Conflict 1: Ceiling Per-Category Minimums (A-05, B-07)

**Checklist says:** S:2+, H:2+, C:3+, D:2+, N:2+ (elevated for Ceiling)

**Requirements extraction says:** S:1+, H:1+, C:1+, D:1+, N:1+ (same as Middle)

**Requirements extraction rationale (lines 78-82):** "Keep '1+ per category' as mandatory floor for BOTH Middle and Ceiling. Ceiling differentiator is REINFORCING PAIRS requirement, not higher per-category minimums."

**Which is correct?**

**Evidence review:**
- BRIEF lines 139-166: "At least 1 mechanism from each of the 5 categories (breadth floor, same as Middle)"
- BRIEF lines 305-306: "Per-category minimum is the DEFAULT."
- CEILING-MASTER-CHECKLIST A-05 lines 86-99: Mentions "S:2+, H:2+, C:3+..." but also says "per BRIEF resolution" which contradicts
- AUXILIARY-PRE-CEILING-AUDIT does NOT specify elevated minimums

**Resolution:**
✅ **REQUIREMENTS EXTRACTION IS CORRECT.** Per-category minimums are 1+ for BOTH Middle and Ceiling (same floor). Ceiling differentiator is:
- Reinforcing pairs (>=2 mechanism pairs encoding same dimension)
- 4-scale fractal coherence (not 2-scale)
- Metaphor derivation (Phases 1-3)

**Recommendation:** UPDATE checklist items A-05 and B-07 to reflect 1+ per category (not 2+/3+). The elevated numbers appear to be from earlier planning before BRIEF resolution clarified that Ceiling tier uses SAME per-category floor + DIFFERENT interaction requirement.

---

### Conflict 2: PA-05 Has 4 Sub-Criteria or 8? (B-04)

**01-REQUIREMENTS lines 562-595:** "PA-05 Sub-Criteria (The 'Designed' Threshold)" — defines 4 items:
- PA-05a: Layout sophistication (>=2 non-default layout elements)
- PA-05b: Spatial range (>=2.0x padding ratio)
- PA-05c: Hierarchy clarity (visible under 20px blur)
- PA-05d: Compositional CSS (>=15% non-framework)

**01-REQUIREMENTS lines 597-619:** "PA-05 Four Additional Sub-Criteria (Enrichment E10)" — defines 4 MORE items:
- DESIGNED (intentional composition visible)
- COHERENT (one designer feel)
- PROPORTIONATE (spatial balance)
- POLISHED (execution quality, no missing elements)

**Lines 617-619 say:** "These are perceptual judgments to COMPLEMENT the original 4 quantitative PA-05 criteria (a/b/c/d). Total PA-05 assessment now has 4 quantitative + 4 qualitative dimensions."

**Resolution:**
✅ **PA-05 HAS 8 DIMENSIONS TOTAL:**
- 4 quantitative (a/b/c/d) — binary thresholds with measurement
- 4 qualitative (DESIGNED/COHERENT/PROPORTIONATE/POLISHED) — perceptual judgments

**Scoring:** All 4 quantitative must PASS. All 4 qualitative should be YES. If 3/4 qualitative YES = "YES WITH RESERVATIONS." If 2/4 or less = NO.

**Recommendation:** CLARIFY in checklist item B-04 that PA-05 has 4+4 structure (quantitative + qualitative).

---

## SECTION 8: IMPLEMENTATION ROADMAP

### Phase 1: BLOCKING Items (Must Complete Before Execution Prompt)

**Duration:** 2-3 hours
**Priority:** P1 MUST

1. **A-11 Builder Context Decision** — Choose Option A or B, document rationale (30 min)
2. **Create agent prompt templates** — Builder, auditor, team-lead with SendMessage instructions (60 min)
3. **Write reconciliation procedures** — Dual PA reconciliation, blind novelty randomization (45 min)
4. **Extract pre-baked CSS blocks** — :root, typography, accessibility, responsive (30 min)
5. **Create severity taxonomy** — CRITICAL/MAJOR/MINOR definitions for PA skill (15 min)

**Deliverables:**
- BUILDER-CONTEXT-DECISION.md (decision documented)
- builder-prompt-slice.md (with self-check + communication + pre-baked CSS)
- auditor-prompt-slice.md (with issue flagging protocol)
- team-lead-prompt-slice.md (with gates + reconciliation + randomization)
- PA severity taxonomy (add to perceptual-auditing SKILL.md)

---

### Phase 2: HIGH PRIORITY Items (Strongly Recommended Before Execution)

**Duration:** 2-3 hours
**Priority:** P2 SHOULD

1. **Write PA questions** — Weight distribution (PA-50), Felt Through (PA-51) (30 min)
2. **Create verdict template** — With margin reporting format (30 min)
3. **Write programmatic audit procedure** — Read build plan first, generate plan-specific checklist (45 min)
4. **Update checklist conflicts** — Resolve per-category minimums (1+ not 2+), clarify PA-05 (4+4) (30 min)
5. **Document blocking gates** — Landmark gate, self-check gate explicit BLOCKING language (30 min)

**Deliverables:**
- PA questions PA-50, PA-51 added to perceptual-auditing SKILL.md
- verdict-template.md (margin reporting format)
- programmatic-auditor-prompt-slice.md (plan-derived checklist procedure)
- CEILING-MASTER-CHECKLIST.md v2 (conflicts resolved)

---

### Phase 3: Write Master Execution Prompt (Integrate All Extractions)

**Duration:** 4-6 hours
**Priority:** Synthesis

**Input files:**
- 01-REQUIREMENTS-EXTRACTION.md (2,698 lines)
- 02-SPECIFICATION-EXTRACTION.md (910 lines)
- 03-RICHNESS-EXTRACTION.md (1,545 lines)
- 06-SKILL-PROTOCOL-EXTRACTION.md (1,374 lines)
- All prompt slices from Phase 1-2
- Conflict resolutions from Phase 2

**Output:**
- CEILING-MASTER-EXECUTION-PROMPT.md (estimated 2,000-2,500 lines)
  - Phase 0-8 complete specifications
  - All 10 agents with prompt slices
  - All gates with blocking enforcement
  - All checklists with verification procedures
  - Success criteria with margin reporting

---

### Phase 4: Validation (Pre-Execution Review)

**Duration:** 1-2 hours
**Priority:** Quality assurance

**Checklist walk-through:**
1. Read master execution prompt start to finish
2. For EACH of 62 checklist items, verify prompt addresses it
3. For EACH P1 MUST item, verify enforcement mechanism exists
4. For EACH binary rule, verify formula/threshold documented
5. Resolve any remaining ambiguities

**Final check:** Can a fresh Opus instance execute Ceiling using ONLY the master execution prompt + skill files? If NO → identify missing context.

---

## CONCLUSION

**Total items mapped:** 96 (62 from CEILING-MASTER-CHECKLIST + 34 from AUXILIARY-PRE-CEILING-AUDIT)

**Coverage summary:**
- FULLY COVERED: 48 items (50%) — Requirements extracted, enforcement specified
- PARTIALLY COVERED: 31 items (32%) — Concept documented, gaps in enforcement/verification
- NOT COVERED: 17 items (18%) — Missing from prompt requirements entirely

**Critical gaps (P1 MUST):** 17 items preventing Ceiling execution
**High-priority gaps (P2 SHOULD):** 28 items improving quality/rigor
**Defer (P3):** 17 items (retrospective analysis, combined verification)
**Remove (P4):** 0 items (no net negatives identified)

**Conflicts resolved:** 2 critical conflicts (per-category minimums, PA-05 structure)

**Next step:** Complete Phase 1-2 items (4-6 hours), then write master execution prompt (4-6 hours). Total: 8-12 hours before Ceiling is ready to execute.

**Top recommendation:** Prioritize P1 MUST items (17 blocking gaps). These prevent known Middle-tier defects and Phase D failures. Without these, Ceiling will repeat Middle's mistakes.

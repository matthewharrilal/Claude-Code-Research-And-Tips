# 19: Logical Soundness and Contradiction Audit (v2 -- Complete)

**Author:** scale-channel-invoker (Opus 4.6), superseding soundness-v2 partial audit
**Date:** 2026-02-17
**Task:** #36
**Sources:** ALL audit reports 00-18, 20 (19 files total in prompt-enrichment-audit/)
**Purpose:** Identify every logical contradiction, impossible constraint combination, circular dependency, conflicting threshold, and attention budget violation across the full audit corpus.
**Supersedes:** v1 of this file (covered reports 00-09 only, 6 contradictions). This v2 covers ALL reports and identifies 23 contradictions.

---

## METHODOLOGY

Every audit report (00-18, 20) was read in full. For each contradiction found:
- **ID:** SC-XX (Soundness Contradiction)
- **Severity:** BLOCKING (must resolve before prompt assembly) / SIGNIFICANT (should resolve) / MINOR (document, no action needed)
- **Reports involved:** Which audit files conflict
- **Resolution recommendation:** How to resolve

---

## SECTION 1: CONTRADICTIONS BETWEEN REPORTS

### SC-01: Container Width -- Three Incompatible Values [BLOCKING]

**Reports:** 07 (crown jewel audit), 08 (checkpoint integration), 11 (TC deep invocation), 13 (TC-PA integration), 15 (scale-channel invocation)

**The contradiction:**
- Design system rule: 940-960px (NON-NEGOTIABLE, in prohibitions.md and TC skill)
- CD-006 crown jewel: `max-width: 1100px` (report 07, line 145)
- DD-006 crown jewel: `max-width: 1000px` (report 07, line 146)
- Report 07 recommends "940-1100px" range
- Report 08 flags this as UNRESOLVED (D-004 #9)
- Report 11 states "940-960px NON-NEGOTIABLE" throughout
- Report 13 identifies PA-53 measuring "65-80% width utilization" -- at 1440px, 65% = 936px (BELOW the 940px floor)

**Why it matters:** The crown jewels that scored 39/40 and 36/40 violated the container width rule. If we enforce 940-960px strictly, we cannot replicate crown jewel quality. If we relax to 940-1100px, we invalidate the enrichment that calls 940-960px "the #1 Phase D failure mode."

**Resolution recommendation:** The 940-960px rule applies to the CONTENT container (`max-width` on `.container`). The crown jewels used wider containers but maintained narrower content widths through internal padding. CD-006's 1100px container had ~120px padding per side = ~860px effective content width, which is actually narrower than the floor. The rule should be:
- Content container CSS: max-width 960px (the structural container in CSS)
- Content WIDTH: 860-960px effective (after padding)
- Crown jewel evidence suggests the VISUAL content band, not the CSS `max-width`, is what matters
- PA-53's "65-80% utilization" should measure VISUAL content band, not CSS container

**Action:** Rewrite container width rule to distinguish CSS container from visual content band. The enriched prompt should specify: "`max-width: 960px` is the structural container. Internal padding may narrow the visual content band to 860px minimum. What matters is the VISUAL band width at 1440px viewport, which must be 860-960px (60-67% of viewport)."

---

### SC-02: Void Threshold -- FOUR Incompatible Values [BLOCKING]

**Reports:** 03 (ceiling reflections), 05 (pre-flight crossref), 11 (TC deep invocation), 14 (enrichment invocation map)

**The contradiction:**
- Report 03: "0.5x viewport (720px at 1440px)" as void threshold
- Report 05: "1,350px (1.5 x 900px viewport HEIGHT)"
- TC-07 / Pre-flight resolution: "2,160px (1.5 x 1440px viewport WIDTH)"
- LIVING-STATE.md: "1,620px skeleton stage, 2,160px final"
- Report 11 (TC deep invocation, S2): "No contiguous void > 1.5 viewports (2,160px)"
- Report 14 (enrichment map, B1 rule): "NO 2+ consecutive positions may have content coverage below 30%" measured in viewport-height increments

**Why it matters:** Four different threshold values exist in the audit corpus. A builder checking their work would get different pass/fail results depending on which document they read.

**Resolution recommendation:** The enrichments (B1 in prohibitions.md) supersede all previous values. B1's rule is:
- Scroll in viewport-height increments (900px at 1440x900)
- At each position, estimate content coverage
- 0-1 consecutive positions below 30%: PASS
- 2+ consecutive positions below 30%: FAIL

This translates to: maximum contiguous void approximately 1.8 viewport-heights (1,620px) before failing, since you need 2 consecutive frames below 30%. This aligns with the "1,620px skeleton stage" value.

The 2,160px value (1.5x viewport WIDTH) is a MATHEMATICAL ERROR that conflated viewport width with viewport height. At 1440x900, 1.5 viewports = 1,350px (height-based) or 2,160px (width-based). The height-based calculation is correct since we are measuring vertical scroll.

The 720px value from report 03 (0.5x viewport) appears to be a different measurement: the maximum SINGLE gap between content elements, not the maximum total void zone. This is actually the C3 token cap (96px max per margin/padding) applied at the zone level.

**Action:** Eliminate all void threshold values from the prompt EXCEPT B1's binary measurement protocol. Do not specify a pixel threshold -- specify the MEASUREMENT METHOD (scroll in viewport-height increments, count consecutive frames below 30%). This eliminates the possibility of conflating width and height.

---

### SC-03: Total Line Budget -- Mathematically Impossible [BLOCKING]

**Reports:** 01 (TC skill audit), 02 (PA skill audit), 06 (scale metacognitive), 11 (TC deep invocation), 12 (PA deep invocation), 15 (scale-channel), 16 (multi-coherence), 18 (structural anti-skimming), 20 (invocation guarantee)

**The contradiction:**
- Current prompt: 193 lines, budget cap 240 lines
- Available headroom: 47 lines
- Report 01 (TC audit): needs ~75 lines of additions
- Report 02 (PA audit): needs ~101 lines of additions
- Report 06 (scale): needs ~65 lines of additions
- Report 15 (scale-channel): adds 8 binary rules (C-01 through C-08)
- Report 16 (multi-coherence): adds 10 binary rules (MC-01 through MC-10)
- Report 11 (TC deep invocation): 46 invocable techniques cataloged, 24 gaps
- Report 12 (PA deep invocation): 48 PA questions deployed across 9 auditors
- Report 18 (anti-skimming): recommends 7 structural changes
- Report 20 (invocation guarantee): adds checksums, templates, phased reveal

Total proposed additions: 75 + 101 + 65 + ~30 + ~40 = **~311 lines**
Available headroom: **47 lines**
DEFICIT: **~264 lines**

Even accounting for overlap between reports, the proposed additions exceed the budget by 5-6x.

**Why it matters:** This is the single most critical soundness issue. Every audit report proposes additions. No audit report proposes REMOVALS. The aggregate recommendations are mathematically impossible to implement within the 240-line budget.

**Resolution recommendation:** The resolution MUST be architectural, not editorial:

1. **Layer 4 (Reference Library) is zero-cost.** Move ALL invocation language, technique catalogs, deployment maps, operational scaffolding, and detailed protocols to reference files. The builder prompt itself contains ONLY rule IDs and binary thresholds.

2. **Per-agent prompt slicing.** The 240-line budget applies to the TOTAL prompt, not the builder's prompt. Report 20 calculates: Builder Pass 1 = 75 lines, Builder Pass 2 = 60 lines, Builder Pass 3 = 50 lines, Planner = 100 lines, Auditors = unlimited (observation, not creation). These are DIFFERENT PROMPTS, not one 240-line document.

3. **The attention budget, not the line budget, is the real constraint.** Report 20 models: builder = ~37 attention units, planner = ~55 units, team-lead = ~38.5 units. Lines are the PROXY; attention is the REALITY.

**Action:** The synthesizer (Task #10) must assemble per-agent prompts (not a monolithic 240-line document), route reference material to Layer 4, and verify per-agent attention budgets rather than a total line count. The 240-line cap applies to the TOTAL of all unique rules -- not to any single agent's prompt.

---

### SC-04: Mechanism Cap -- Three Values [SIGNIFICANT]

**Reports:** 08 (checkpoint integration), 11 (TC deep invocation), 15 (scale-channel), 20 (invocation guarantee)

**The contradiction:**
- Pre-flight / tier model: 16-18 mechanisms (descriptive, for Flagship tier)
- Phase 5 prompt assembly (VETO agent): hard cap reduced to 14, absolute max 16
- Report 11 (TC deep invocation, C6): "Mechanism cap: 14 (hard), 16 (absolute max)"
- Report 15 (scale-channel): "Flagship: deploy 12-14 of 18, restrain 4-6 (optimal RR 0.3-0.5)"
- Report 08: debate documented as unresolved

**Why it matters:** Builder sees "cap 14" but tier model says "16-18." Planner allocates based on one number, builder targets another.

**Resolution recommendation:** ALREADY RESOLVED by the VETO agent: 14 hard cap, 16 absolute max. This is an intentional divergence (tier model = descriptive, execution = prescriptive). Document this once in the prompt and do not repeat the tier model number.

**Action:** Use "target: 12-14 mechanisms. Hard cap: 14. Absolute ceiling: 16 (requires documented justification for each mechanism above 14)." Remove all references to "16-18" from execution-facing documents.

---

### SC-05: PA-53 Width vs TC Container Floor [SIGNIFICANT]

**Reports:** 13 (TC-PA integration), 14 (enrichment invocation map)

**The contradiction:**
- TC container rule: >= 940px (floor)
- PA-53: "65-80% of horizontal space at 1440px"
- 65% of 1440px = 936px -- BELOW the 940px floor
- 80% of 1440px = 1,152px -- ABOVE the 960px ceiling

**Why it matters:** A page that passes PA-53 at 65% fails the container width rule. A page that hits 80% width passes PA-53 but fails the container width rule. The two rules have incompatible ranges.

**Resolution recommendation:** PA-53 should measure the VISUAL CONTENT BAND (see SC-01 resolution), not the CSS container. The compatible range is:
- CSS container: 940-960px (60-67% of 1440px)
- PA-53 visual assessment: "Does content use a comfortable proportion of viewport?" -- the 65-80% range should be GUIDANCE for perceptual assessment, not a pixel threshold.
- Resolve by making PA-53's measurement purely perceptual ("does it feel proportionate?") while the binary container rule remains the pixel measurement.

**Action:** Edit PA-53 invocation to separate the binary check (container 940-960px) from the perceptual question ("does it feel proportionate at this width?"). The 65-80% range becomes a perceptual anchor, not a measurement.

---

### SC-06: TC Phase 0E Library Prohibition vs Reading List [SIGNIFICANT]

**Reports:** 01 (TC skill audit), 11 (TC deep invocation)

**The contradiction:**
- TC Phase 0E: "MUST NOT read case-studies, library, or prior explorations during Phases 0-3"
- Prompt Reading List: Crown jewels (CD-006, DD-006) listed as mandatory reading files
- Report 11 (CG-4): "Phase 0E library prohibition contradicts reading list making crown jewels mandatory"

**Why it matters:** The reading list tells agents to read crown jewels. Phase 0E prohibits reading them during creative phases. Which takes precedence?

**Resolution recommendation:** The prohibition is TEMPORAL, not absolute. Crown jewels may be read by specific agents at specific times:
- Crown jewel analyst (dedicated agent): reads at any time
- Metaphor agent: PROHIBITED during Phases 0-3 (creative derivation). MAY read AFTER Phase 3.5 commitment.
- Builder: MAY read during Phase 4+ (after metaphor is locked in)
- Content architect: MAY read for divergence verification (Phase 5)

The reading list should specify WHEN each file is available per agent role. This is not a contradiction but a routing problem.

**Action:** Add temporal annotations to the reading list: "AVAILABLE after Phase 3.5 for metaphor agent. AVAILABLE immediately for crown jewel analyst and builder."

---

### SC-07: "Binary = 100% Compliance" -- Empirical Challenge [SIGNIFICANT]

**Reports:** 09 (adversarial fresh-eyes), 20 (invocation guarantee)

**The challenge:**
- Core architectural principle: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%"
- Report 09 objects: "This is N=1 evidence (one Middle experiment). It confounds difficulty with encoding format. Simple judgment rules might achieve high compliance; complex binary rules might fail."
- Report 20 (invocation guarantee): estimates ~20% performative acknowledgment rate for binary rules, ~30% mid-section scanning

**Why it matters:** The entire prompt architecture is built on the assumption that binary encoding guarantees compliance. If this assumption is wrong, the architecture has a foundation-level flaw.

**Resolution recommendation:** The adversarial challenge is VALID but does not invalidate the principle. The correction is:
- Binary encoding is NECESSARY but not SUFFICIENT for compliance
- Binary rules achieve ~80-95% compliance (not 100%)
- Judgment rules achieve ~10-30% compliance (not 0%)
- The 4-8x compliance advantage of binary encoding is real even if the absolute numbers are imprecise
- The invocation guarantee system (checksums, templates, spot checks) addresses the ~5-20% leakage in binary compliance

**Action:** Soften the claim in conviction text. Instead of "binary = 100%, judgment = 0%," use "binary rules are 4-8x more likely to be followed. Every rule that CAN be binary SHOULD be binary. But binary encoding alone does not guarantee compliance -- verification is still required."

---

### SC-08: Attention Budget Model -- "100 Units" Validity [MINOR]

**Reports:** 09 (adversarial fresh-eyes), 18 (structural anti-skimming), 20 (invocation guarantee)

**The challenge:**
- Report 18 and 20 use "~100 attention units" as a budget model
- Report 09 calls this "invented" with "false precision"
- No empirical calibration exists for the unit definition

**Why it matters:** If the attention model is wrong, per-agent line budgets derived from it may be miscalibrated.

**Resolution recommendation:** The attention model is a USEFUL HEURISTIC, not a scientific measurement. Its value lies in:
1. Providing a common vocabulary for comparing rule costs
2. Forcing per-agent budget discipline
3. Making implicit attention competition explicit

The specific numbers (37 units for builder, 55 for planner) are directionally correct even if the unit definition is imprecise. The model correctly predicts that builder prompts above ~80 lines degrade performance (observable in ceiling experiment where builder prompt was ~1,004 lines and produced catastrophic failure).

**Action:** Keep the attention model as a planning tool. Do not cite "100 units" in the execution prompt itself -- it is a META tool for prompt designers, not a builder instruction. The builder sees line counts and rule counts, not attention units.

---

### SC-09: Content-to-Void Ratio -- Graduated vs Single Value [MINOR]

**Reports:** 05 (pre-flight crossref), 11 (TC deep invocation), 14 (enrichment invocation map)

**The contradiction:**
- Graduated model: 60% pre-build, 50% skeleton, 70% post-mechanism
- Report 11 (TC rules, S3): "Content in >= 70% of scroll depth"
- Report 14 (enrichment map, BT-08 PA-51): "Min content percentage: 60% of total scroll height"
- Multiple reports cite ">= 60%" without noting the graduation

**Why it matters:** Low severity because all values are within the same ballpark, but builder confusion is possible.

**Resolution recommendation:** Use a SINGLE value in the builder prompt: ">= 60% content at every viewport frame" (from B1/PA-51). The graduated model is useful for PLANNING (planner expects 50% at skeleton, improving to 70% after mechanisms) but the builder's BINARY CHECK is simply: "at any scroll position, >= 60% of visible area has content."

**Action:** Builder sees one number: 60%. Planner sees the graduated expectation. Document this split in the coordination spec.

---

### SC-10: "Perceptual Risk" Terminology Collision [SIGNIFICANT]

**Reports:** 13 (TC-PA integration)

**The contradiction:**
- TC skill: "perceptual risk" = risk that a metaphor will cause visual problems (Phase 3.5E, scored 0-4)
- PA skill: "perception track" = a classification for findings that are perceptual (as opposed to rule-track)
- Both use "perceptual" to mean different things
- Report 13 flags this as a terminology collision

**Why it matters:** An agent reading both skills (or a synthesizer combining both) may confuse TC's "perceptual risk score" with PA's "perception track classification." These are entirely different concepts.

**Resolution recommendation:** Rename TC's concept to "execution risk" or "metaphor risk" to eliminate the collision. The TC concept is about the risk that a metaphor creates visual problems during CSS implementation. "Execution risk" is more accurate and avoids collision with PA terminology.

**Action:** In the enriched prompt, use "EXECUTION RISK" for the TC Phase 3.5E concept and "PERCEPTION TRACK" for the PA classification. Never use "perceptual risk" ambiguously.

---

### SC-11: Scale-Channel Rules vs Multi-Coherence Rules -- Overlap [SIGNIFICANT]

**Reports:** 15 (scale-channel invocation), 16 (multi-coherence invocation)

**The contradiction:**
- Report 15 adds rules C-01 through C-08 (8 channel rules)
- Report 16 adds rules MC-01 through MC-10 (10 multi-coherence rules)
- Several overlap:
  - C-06 (reinforcing pairs: 3 transitions x 2 pairs) overlaps MC-01 (3 reinforcing pairs)
  - C-08 (signal-to-silence 60:40) overlaps with content-to-void >= 60:40
  - C-01 (3 channels per transition) partially overlaps with the existing 3-transition-types minimum
  - MC-07 (fractal coherence 5/5 scales) overlaps with existing fractal consistency gate (4.7)
  - MC-08 (3 distinct padding values) is a subset of the rhythm variation rule (3+ transition types)

**Why it matters:** 18 new binary rules (C-01 through C-08, MC-01 through MC-10) cannot all be added to the builder's 37-attention-unit budget. Report 15 estimates ~5-6 new attention units. Report 16 does not estimate attention cost but 10 additional binary rules would add ~5-10 more units. Total: ~10-16 new units, which would push the builder to ~47-53 attention units, EXCEEDING the ~37 target by 30-43%.

**Resolution recommendation:** MERGE overlapping rules. After deduplication and routing:
- Builder adds ~6 rules (C-01 channels per transition, cascade check, anti-metronome, chromatic-density alignment, intentional arc, semantic proportionality)
- Planner adds ~4 rules (modulating chains, responding sequences, contrasting deployments, cross-dimension pairs)
- Auditor adds ~3 rules (CCS >= 0.30, fractal coherence, self-reference detection)
- Intentionality builder adds ~1 rule (self-reference)

Deduplicate: reinforcing pairs (one rule, not two), fractal coherence (merge with existing 4.7), anti-metronome (merge with existing rhythm variation), signal-to-silence (merge with content-to-void).

**Action:** The synthesizer MUST deduplicate before including any channel or multi-coherence rules. Route verification-heavy rules to auditors, not builders.

---

### SC-12: PA-05c / PA-52 Measurement Overlap [MINOR]

**Reports:** 12 (PA deep invocation), 13 (TC-PA integration)

**The contradiction:**
- PA-05c "Vertical Proportion" sub-dimension: "every third has at least one designed moment"
- PA-52: "Divide page into thirds. Does each third have at least 1 designed moment?"
- These are the SAME measurement. PA-05c asks it within the PA-05 composite; PA-52 asks it as a standalone void question.

**Why it matters:** Auditor A (who evaluates PA-05) and Auditor C (who evaluates PA-52) will produce duplicate findings for the same observation.

**Resolution recommendation:** Acknowledge the intentional overlap. PA-05c is the QUALITATIVE assessment ("does vertical proportion feel considered?"). PA-52 is the QUANTITATIVE measurement ("count designed moments per third"). Both are valid from different angles. The weaver should cross-reference them, not treat them as independent data points.

**Action:** Add a note in the PA operational scaffolding: "PA-05c/3b and PA-52 measure the same property from qualitative and quantitative perspectives. The weaver should cross-reference, not double-count."

---

### SC-13: Header Proportion -- Two Values [MINOR]

**Reports:** 11 (TC deep invocation), 14 (enrichment invocation map)

**The contradiction:**
- TC S4 (report 11): "Header < 25% of first viewport" (hard abort at 25%, warning at 20%)
- Enrichment spatial safeguards (report 11, section 4B): "Header MUST NOT exceed 33% of first viewport height"
- At 1440x900: 25% = 225px, 33% = ~300px

**Why it matters:** Low severity because both are in the same direction (limit header size), but the specific thresholds differ.

**Resolution recommendation:** Use the STRICTER value: 20% warning, 25% hard abort. The 33% value appears to be an earlier, less refined version from the enrichment worker.

**Action:** Standardize on "Header: < 20% first viewport = PASS, 20-25% = WARNING, > 25% = FAIL." Remove all references to 33%.

---

### SC-14: Border Width -- 2px Prohibition vs Multi-Coherence Example [MINOR]

**Reports:** 07 (crown jewel audit), 16 (multi-coherence invocation)

**The observation:**
- Soul rule: "border widths: 1px or 3px or 4px only. 2px anywhere = FAIL"
- Report 16 (multi-coherence, OD-004 example): `.stratum--speculative { border-left: 2px solid var(--color-text-secondary); }`

**Why it matters:** Very low severity -- the OD-004 example is from earlier research, not from CD-006 or DD-006. The soul rule is clear and the enrichments enforce it. But the invocation language in report 16 uses 2px in a code example.

**Resolution recommendation:** The soul rule is correct (no 2px borders). Report 16's code example should use 1px for speculative strata. This is a documentation error, not a rule conflict.

**Action:** If report 16's invocation text is used in the prompt, change `2px` to `1px` in the OD-004 example.

---

## SECTION 2: CIRCULAR DEPENDENCIES AND IMPOSSIBLE GATES

### SC-15: Gate Fatigue -- 47+ Verification Points [SIGNIFICANT]

**Reports:** 18 (structural anti-skimming), 05 (pre-flight crossref), 20 (invocation guarantee)

**The concern:**
- Report 05 counts 47 potential gate points across the pre-flight checklist
- Report 18 flags "gate fatigue" as a structural risk
- Report 20 estimates 22+ gate entries in the execution log
- Multiple gate systems overlap: spatial confidence gates (SC-01 through SC-07), compositional gates (CP-01 through CP-04), kill criteria (KB-01 through KB-05), communication gates, PA audit gates

**Why it matters:** Too many gates create two failure modes:
1. Team-lead attention fragmentation -- cannot track 47 checkpoints meaningfully
2. Performative gating -- checking boxes without actually verifying

**Resolution recommendation:** Consolidate into 5 gates with clear ownership:
1. **Gate 0** (after plan): Spatial budget + zone count + mechanism allocation (planner output)
2. **Gate 1** (after Pass 1 skeleton): SC-01 through SC-07 + communication check (7 binary checks)
3. **Gate 2** (after Pass 2 elaboration): CP-01 through CP-04 + spatial re-check (4+7 binary checks)
4. **Gate 3** (after Pass 3 intentionality): Height delta + intentionality checklist (3 checks)
5. **Gate 4** (post-audit): Mode 4 PA + blind novelty + comparative + ship decision

Total: 5 gates, ~25 binary checks distributed across them. This is manageable for the team-lead.

**Action:** The synthesizer should merge all gate proposals into 5 gates with a maximum of 7 binary checks per gate.

---

### SC-16: Circular Self-Check -- Builder Validates Own Work [MINOR]

**Reports:** 20 (invocation guarantee), 11 (TC deep invocation)

**The concern:**
- Report 20 requires the builder to run self-check before file write
- But the builder is checking their OWN work with their own attention budget
- The same continuation bias that created the ceiling void would prevent the builder from detecting it in self-check
- Report 20 acknowledges this: "~20% performative acknowledgment rate"

**Why it matters:** Low severity because the embedded auditor and Mode 4 PA are the real quality gates. Self-check creates false confidence only if the team-lead over-trusts it.

**Resolution recommendation:** Self-check is valuable as a CHEAP PRE-FILTER, not as a quality gate. The architecture already handles this correctly: self-check catches obvious errors (container width != 960px), while the embedded auditor catches spatial drift, and Mode 4 PA catches perceptual failures. The three-layer system (self-check -> embedded auditor -> Mode 4 PA) is sound.

**Action:** No change needed. Document that self-check is a pre-filter, not a gate. The team-lead should not weight builder self-check results heavily.

---

## SECTION 3: ATTENTION BUDGET VIOLATIONS

### SC-17: Builder Prompt Overload from All Proposals [BLOCKING]

**Reports:** 11, 12, 15, 16, 18, 20

**The calculation:**
- Report 20 allocates builder Pass 1: 75 lines, ~37 attention units
- Report 11 proposes 46 TC techniques (many requiring builder invocation)
- Report 15 proposes 8 channel rules (C-01 through C-08, ~5-6 AU)
- Report 16 proposes 10 multi-coherence rules (MC-01 through MC-10, ~5-10 AU)
- Report 12 proposes PA operational scaffolding (builder does not need, but builder self-check overlaps)

If ALL proposals are adopted, builder attention demand: ~37 (current) + 6 (channels) + 10 (multi-coherence) + 5 (additional TC) = ~58 AU, against a ~37 AU budget. Overrun: 57%.

**Resolution recommendation:** The builder's prompt must contain ONLY:
1. Spatial binary rules (S1-S5): ~5 AU
2. Soul binary rules (U1-U8): ~4 AU
3. Per-category mechanism minimums + cap: ~4 AU
4. Transition types (3+ required): ~1 AU
5. Communication obligations: ~3 AU
6. Build plan reference (from planner): ~8 AU
7. Self-check list: ~3.5 AU
8. Metaphor summary: ~3 AU
9. From channels: C-01 (3 channels per transition): ~1 AU
10. From multi-coherence: MC-05 cascade check: ~1 AU
**Total: ~33.5 AU** (within budget)

Everything else (detailed TC phases, PA scaffolding, channel taxonomy, multi-coherence theory, reinforcing pair documentation) goes to Opus agents (planner, metaphor agent, content architect) or to reference files.

**Action:** The synthesizer MUST route rules to the correct agent. The builder is a SONNET agent executing CSS. It does not need philosophical framing, creative derivation protocols, or audit scaffolding. The Opus agents (planner, metaphor agent) absorb the creative and compositional rules.

---

## SECTION 4: ASSUMPTIONS CHALLENGED

### SC-18: "Fear Gradient" -- Does Strict Prompt Create Defensive Builders? [MINOR]

**Reports:** 06 (scale metacognitive), 09 (adversarial fresh-eyes)

**The concern:**
- Report 06: "Builder emotional state blind spot: prompt creates defensive builders via fear gradient"
- Report 09: "The prompt's dominant emotion is FEAR -- fear of void, fear of failure, fear of the ceiling experiment. A builder reading this prompt would feel like they're walking through a minefield, not composing a page."
- Counter-evidence: The Middle experiment builder was NOT defensive and produced PA-05 4/4 DESIGNED

**Resolution recommendation:** The fear gradient is a valid observation but may be overstated. The resolution is architectural:
- Conviction layer provides POSITIVE framing (construction, beauty, intentionality)
- Execution layer provides BINARY rules (no judgment = no anxiety about "right" choices)
- The fear gradient comes from AMBIGUOUS rules ("should" without threshold), not from strict binary rules
- Binary rules REDUCE anxiety because they have clear pass/fail conditions

**Action:** Ensure the conviction layer starts with positive, inspiring text. Ensure the execution layer is purely binary. The fear gradient arises from judgment rules, not from the quantity of binary rules.

---

### SC-19: Crown Jewel Evidence Base -- N=2 [MINOR]

**Reports:** 07 (crown jewel audit), 09 (adversarial fresh-eyes)

**The concern:**
- All crown jewel evidence comes from CD-006 (39/40) and DD-006 (36/40)
- N=2 is a thin evidence base for generalizing design principles
- CD-006 was built with a different process (human-agent collaboration with messaging)
- DD-006 was built under different constraints

**Resolution recommendation:** Valid concern but not actionable -- we cannot generate more crown jewels before the flagship experiment. The mitigation is:
1. Treat crown jewel patterns as HYPOTHESES, not laws
2. The flagship experiment IS the test of these hypotheses
3. If the flagship succeeds, crown jewel patterns are validated (N=3)
4. If it fails, crown jewel patterns may need revision

**Action:** No change to prompt. Document in the team-lead's coordination notes that crown jewel patterns are hypotheses being tested, not validated laws.

---

## SECTION 5: RECOMMENDATIONS ASSUMING INFINITE ATTENTION

### SC-20: Report 16 (Multi-Coherence) Requires ~36 Binary Checks [SIGNIFICANT]

**Report:** 16 (multi-coherence invocation)

**The problem:** Report 16 proposes:
- R-01 through R-03: reinforcing pair checks (3 checks)
- M-01 through M-03: modulating chain checks (3 checks)
- RS-01 through RS-03: responding sequence checks (3 checks)
- C-01 through C-03: contrasting deployment checks (3 checks)
- CA-01 through CA-03: cascading chain checks (3 checks)
- FC-01 through FC-06: fractal coherence checks (6 checks)
- XD-01 through XD-02: cross-dimension coherence (2 checks)
- RH-01 through RH-03: rhythm coherence checks (3 checks)
- MC-01 through MC-10: execution rules (10 binary rules)

Total: ~36 new binary checks. At 0.5-1 AU each, this is 18-36 new attention units for the BUILDER ALONE.

**Resolution recommendation:** Report 16 is a REFERENCE DOCUMENT for the synthesizer, not a builder prompt. The synthesizer should extract the MINIMUM VIABLE subset:
- 3 checks for builder (cascade exists? anti-metronome? reinforcing pair documented?)
- 5 checks for planner (modulating chains planned? responding sequences planned? contrasting deployments documented? cross-dimension pairs documented? fractal coherence at tier-appropriate scales?)
- 4 checks for auditor (CCS >= 0.30? fractal coherence verified? self-reference detected? atmosphere test passed?)

**Action:** Distribute checks to appropriate agents. The builder gets 3, not 36.

---

### SC-21: Reports 15 + 16 Partially Redundant [MINOR]

**Reports:** 15 and 16

**The overlap:**
Both reports derive from the same research (scale exploration + compositional fluency). They describe the same phenomenon (multi-dimensional coherence) from different angles:
- Report 15: channels as independent dimensions crossing all scales
- Report 16: interaction types between mechanisms creating coupled composition

Specific overlaps:
- "Reinforcing pairs" (16) = "reinforcing channel pairs" (15)
- "Fractal coherence" (16) = "scale-channel matrix coverage" (15)
- "Anti-metronome" (16) = "channel density per transition" (15)
- Both reference the same crown jewel evidence (CD-006 and DD-006)

**Resolution recommendation:** Merge into a single conceptual framework for the prompt. The synthesizer should use report 15's channel taxonomy as the VOCABULARY and report 16's interaction types as the GRAMMAR. One section, not two.

**Action:** Create a unified "Compositional Coherence" section that combines channel taxonomy (7 channels) with interaction types (5 types) and the CCS metric. Avoid duplicating the crown jewel evidence.

---

## SECTION 6: JUDGMENT RULES DISGUISED AS BINARY

### SC-22: "Designed Moment" Lacks Operational Definition [SIGNIFICANT]

**Reports:** 14 (enrichment map, B3), 12 (PA deep invocation, PA-52), 16 (multi-coherence)

**The problem:** Multiple rules reference "designed moment" as if it were binary:
- B3: "at least 1 designed moment below 50% scroll depth"
- PA-52: "Does each third have at least 1 designed moment?"
- MC: various rules reference "designed moments"

But "designed moment" is defined as "3+ mechanisms at high intensity + unique treatment" -- which contains two judgment calls:
1. What counts as "high intensity"? (No threshold given)
2. What counts as "unique treatment"? (No comparison baseline given)

**Why it matters:** A rule that appears binary but requires judgment will be inconsistently applied. The builder may claim "this section has 3 mechanisms" without evaluating intensity or uniqueness.

**Resolution recommendation:** Operationalize "designed moment" as: "A section with (a) >= 3 different mechanism categories represented, (b) at least 1 mechanism NOT used in the adjacent sections, and (c) a visual treatment that differs from the preceding section in >= 3 CSS channels." This is still imperfect but more binary than "high intensity + unique treatment."

**Action:** Replace "designed moment" with the operationalized definition in all builder-facing rules.

---

### SC-23: "Atmospheric" vs "Formatted" -- PA-05a Judgment [MINOR]

**Reports:** 12 (PA deep invocation), 16 (multi-coherence), 17 (PA operational scaffolding)

**The observation:** PA-05a asks "Does this feel designed or formatted?" This is inherently a judgment call. Report 16's multi-coherence system attempts to make it measurable (CCS >= 0.30 = compositional), but the PA auditors do not have access to CCS calculations.

**Resolution recommendation:** This is intentionally a judgment call -- PA-05 is a PERCEPTUAL assessment, not a binary check. The CCS metric provides the PLANNER with a target. The PA auditors provide independent perceptual validation. These are complementary, not contradictory.

**Action:** No change. Document that PA-05 is deliberately a judgment question. The binary gates (spatial, soul, compositional) provide the floor; PA-05 provides the ceiling assessment.

---

## SECTION 7: CROSS-REFERENCE WITH V1 RESOLUTIONS

The v1 audit (from soundness-v2 agent) resolved 6 contradictions. Here is how v2 aligns:

| V1 Resolution | V2 Status | Changes |
|---------------|-----------|---------|
| Container 940-960px (over CD-006's 1100px) | EXPANDED to SC-01 -- added visual content band distinction | V1 said "940-960px is authoritative." V2 adds nuance: distinguish CSS container from visual band. |
| Mechanism target 12-14, hard cap 16 | CONFIRMED as SC-04 | No material change |
| Attention budget per-agent routing | EXPANDED to SC-03 + SC-17 | V1 had the right insight. V2 adds specific AU calculations showing 57% overrun if all proposals adopted. |
| Line count 225 target | SUBSUMED by SC-03 | Per-agent prompts make the 240-line monolithic cap irrelevant |
| Void threshold graduated 1620/2160 | CORRECTED in SC-02 | V1 accepted the width-based 2160px value. V2 identifies this as a mathematical error (should be height-based). Recommends B1 measurement protocol instead. |
| Conviction-Execution-Conviction sandwich | NOT CONTRADICTED | Still recommended by multiple independent reports |

---

## SUMMARY TABLE

| ID | Severity | Topic | Resolution |
|----|----------|-------|------------|
| SC-01 | BLOCKING | Container width 3 values | Distinguish CSS container from visual content band |
| SC-02 | BLOCKING | Void threshold 4 values | Use B1's measurement protocol, eliminate pixel thresholds |
| SC-03 | BLOCKING | Line budget impossible (311 > 47) | Per-agent prompts + Layer 4 routing |
| SC-04 | SIGNIFICANT | Mechanism cap 3 values | Standardize: target 12-14, cap 14, absolute max 16 |
| SC-05 | SIGNIFICANT | PA-53 width vs TC container | Separate binary check from perceptual assessment |
| SC-06 | SIGNIFICANT | Library prohibition vs reading list | Add temporal annotations per agent role |
| SC-07 | SIGNIFICANT | "Binary = 100%" challenged | Soften to "4-8x more likely" |
| SC-08 | MINOR | "100 attention units" model | Keep as planning tool, don't cite in execution prompt |
| SC-09 | MINOR | Content-to-void graduated vs single | Builder sees 60%. Planner sees graduation. |
| SC-10 | SIGNIFICANT | "Perceptual risk" terminology collision | Rename TC's concept to "execution risk" |
| SC-11 | SIGNIFICANT | Channel + multi-coherence rule overlap | Merge and deduplicate, route to correct agents |
| SC-12 | MINOR | PA-05c / PA-52 measurement overlap | Acknowledge, instruct weaver to cross-reference |
| SC-13 | MINOR | Header proportion 25% vs 33% | Standardize: 20% warning, 25% hard abort |
| SC-14 | MINOR | 2px border in invocation example | Fix documentation error |
| SC-15 | SIGNIFICANT | 47+ gate verification points | Consolidate to 5 gates, max 7 checks each |
| SC-16 | MINOR | Builder validates own work | Self-check is pre-filter, not gate |
| SC-17 | BLOCKING | Builder attention overrun 57% | Route rules to correct agents, builder max 33.5 AU |
| SC-18 | MINOR | Fear gradient from strict prompt | Binary rules reduce anxiety; judgment rules create it |
| SC-19 | MINOR | Crown jewel evidence N=2 | Flagship IS the test; document as hypotheses |
| SC-20 | SIGNIFICANT | Report 16 proposes ~36 binary checks | Extract minimum viable subset per agent |
| SC-21 | MINOR | Reports 15+16 partially redundant | Merge into unified compositional coherence section |
| SC-22 | SIGNIFICANT | "Designed moment" is judgment disguised as binary | Operationalize with 3-part definition |
| SC-23 | MINOR | PA-05a "atmospheric" is inherently judgment | Intentional -- PA is perceptual, not binary |

**BLOCKING count:** 4 (SC-01, SC-02, SC-03, SC-17)
**SIGNIFICANT count:** 9 (SC-04, SC-05, SC-06, SC-07, SC-10, SC-11, SC-15, SC-20, SC-22)
**MINOR count:** 10 (SC-08, SC-09, SC-12, SC-13, SC-14, SC-16, SC-18, SC-19, SC-21, SC-23)

---

## CRITICAL PATH FOR SYNTHESIZER (Task #10)

The synthesizer MUST resolve the 4 BLOCKING issues before assembling the prompt:

1. **SC-01 + SC-05:** Rewrite container width rule to distinguish CSS container from visual content band. Test: does the rule permit CD-006's approach while preventing Phase D failures?

2. **SC-02:** Eliminate all void pixel thresholds. Use B1's measurement protocol (viewport-height increments, consecutive frame counting) as the ONLY void measurement. Test: can a builder unambiguously apply this measurement?

3. **SC-03 + SC-17:** Assemble PER-AGENT prompts, not a monolithic document. Route reference material to Layer 4. Verify each agent's prompt is within its attention budget. Test: builder prompt <= 75 lines and ~37 AU. Planner prompt <= 100 lines. Total unique rules across all agents <= 60.

4. **SC-11 + SC-20 + SC-21:** Deduplicate channel rules and multi-coherence rules. Merge overlapping rules. Route verification rules to auditors. Test: builder receives <= 6 new rules from the channel/coherence framework.

---

## CONSISTENT PARAMETER SET (Reconciled Across All 19 Reports)

All contradictions resolved. These are the authoritative values:

| Parameter | Value | Type | Source Resolution |
|-----------|-------|------|-------------------|
| Container width (CSS) | max-width: 960px | FAIL-IF binary | SC-01 resolution |
| Visual content band | 860-960px at 1440px | FAIL-IF binary | SC-01 resolution |
| Void measurement | B1 protocol (consecutive frames below 30%) | MEASUREMENT METHOD | SC-02 resolution |
| Content-to-void ratio (builder) | >= 60% at every viewport frame | FAIL-IF binary | SC-09 resolution |
| Content-to-void ratio (planner) | Graduated: 50% skeleton, 60% pre-build, 70% post-mechanism | Planning target | SC-09 resolution |
| Header proportion | < 20% = PASS, 20-25% = WARNING, > 25% = FAIL | Graduated gate | SC-13 resolution |
| Mechanism target | 12-14 | Target range | SC-04 resolution |
| Mechanism hard cap | 14 (16 absolute max with justification) | FAIL-IF binary | SC-04 resolution |
| Mechanism density | <= 4 operating per viewport | FAIL-IF binary | Consistent across reports |
| Builder prompt length | <= 75 lines (55 execution + 10 conviction opener + 10 conviction closer) | Hard cap | SC-03 + SC-17 resolution |
| Builder attention budget | <= 37 AU (currently ~33.5) | Budget target | SC-17 resolution |
| Master prompt total rules | <= 60 unique rules across all agents | Soft cap | SC-03 resolution |
| Soul compliance | 8/8 binary checks | FAIL-IF binary | Consistent |
| CPL | 45-80 characters | FAIL-IF binary | Consistent |
| Transition types | >= 3 different (SMOOTH/BRIDGE/BREATHING) | FAIL-IF binary | Consistent |
| Designed moment | >= 1 per scroll third (operationalized: 3+ categories, 1+ unique, 3+ channel shifts) | FAIL-IF binary | SC-22 resolution |
| Metaphor quality | >= 12/18 rubric, Interpretive Distance >= 2 | FAIL-IF binary (metaphor agent) | Consistent |
| Scale depth | 5 maximum (2-3 sufficient for Middle) | Informational | Consistent |
| Max spacing token | 96px (var(--space-max-zone)) | FAIL-IF binary | Consistent |
| Prompt architecture | Conviction-Execution-Coordination-Conviction sandwich | Structural | Consistent |
| Library access | Temporal: prohibited Phases 0-3 for metaphor agent; permitted for others | Process gate | SC-06 resolution |
| Binary compliance claim | "4-8x more likely than judgment rules" (not "100%") | Conviction framing | SC-07 resolution |
| TC "perceptual risk" | Renamed to "EXECUTION RISK" | Terminology | SC-10 resolution |
| Channel rules for builder | 6 rules maximum from channel/coherence framework | Budget cap | SC-11 + SC-20 resolution |
| Gate structure | 5 gates, max 7 binary checks each, ~25 total | Structural | SC-15 resolution |
| Border widths | 1px, 3px, 4px ONLY. Never 2px. | FAIL-IF binary | SC-14 resolution |

---

**END SOUNDNESS AUDIT (v2 -- COMPLETE)**
**23 contradictions identified: 4 BLOCKING, 9 SIGNIFICANT, 10 MINOR**
**Critical path: 4 BLOCKING issues must resolve before prompt assembly**
**Supersedes v1 (6 contradictions from reports 00-09 only)**
**Full coverage: ALL 19 audit reports analyzed**

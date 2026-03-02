# Freedom Buddy -- Adversarial Review

**Task:** #84 -- Wave 5 Freedom Buddy
**Date:** 2026-02-28
**Reviewer:** freedom-buddy agent (Opus)
**Audit Under Review:** `83-freedom-audit.md`
**Files Independently Examined:** SKILL.md (956 lines), TC SKILL.md (841 lines), PA SKILL.md (30 lines header), prompt-templates.md (598 lines), world-description.md (18 lines), conventions-brief.md (48 lines)

---

## 1. COMPLIANCE LANGUAGE FOUND

The freedom audit claims "ZERO compliance red flags found." I performed an independent grep for `must`, `MUST`, `fail`, `FAIL`, `enforce`, `require`, `mandatory` across SKILL.md and TC SKILL.md. Here is what I found in creative-facing prompts specifically:

### In SKILL.md (builder-visible sections only):

| # | Phrase | Line | In Creative Prompt? | Assessment |
|---|--------|------|---------------------|------------|
| 1 | "You must produce 3 files" | 80 | YES (Window 1) | AGREE with audit: output specification, not quality target |
| 2 | "You may NOT replace the metaphor itself" | 755 | YES (REFINE) | AGREE with audit: architectural continuity, not creative constraint |
| 3 | "Follow this sequence exactly" | 765 | YES (REFINE) | AGREE with audit: reading order, not creative constraint |
| 4 | "your synthesis MUST acknowledge it" | 535 | YES (Weaver) | AGREE with audit: intellectual honesty, not creative constraint |
| 5 | "Do not proceed until you have written them" | 774 | YES (REFINE) | NEW FINDING: this is a checkpoint enforcement. Mild, but imperative. Classification: METHODOLOGICAL -- forces engagement before building. Not a quality target. |
| 6 | "Your answers may NOT contain: px, rem..." | 469-471 | YES (PA auditors) | AGREE with audit: language constraint that supports perceptual freedom |

**Compliance language verdict: The freedom audit's classification is CORRECT.** All "must"/"NOT" instances in creative prompts fall into plumbing, methodology, or architecture. None are quality targets, mechanism counts, or score requirements. I found one additional imperative (#5) that the audit table omitted, but its classification is the same (methodological).

### In TC SKILL.md (embedded in Window 1 prompt):

This is where the freedom audit's analysis becomes less thorough. The TC skill is embedded wholesale in the Window 1 prompt ({TC_SKILL} at SKILL.md line 95). It contains **substantially more compliance language** than the audit acknowledges:

| # | Phrase | TC Line | Assessment |
|---|--------|---------|------------|
| 1 | "YOU MUST NOT read the following during Phases 0-3" | 79 | PROCESS constraint -- library access timing |
| 2 | "FAIL" (Bootstrap test) | 215-218 | PROCESS constraint -- metaphor quality gates |
| 3 | "ALL answers must favor independent convergence" | 495 | PROCESS constraint -- derivation verification |
| 4 | "BEFORE proceeding to Phase 4, you MUST complete this gate" | 455 | PROCESS constraint -- lock-in gate |
| 5 | "Your page must include at least 3 DIFFERENT transition types" | 596 | **THIS IS AN OUTCOME CONSTRAINT** |
| 6 | "All channels must reinforce the same metaphor direction" | 603 | **THIS IS AN OUTCOME CONSTRAINT** |
| 7 | ">=3 of 6 channels must shift simultaneously" | 611 | **THIS IS AN OUTCOME CONSTRAINT** |
| 8 | "Density direction must be consistent across ALL channels" | 605 | **THIS IS AN OUTCOME CONSTRAINT** |
| 9 | "Typography role must match content authority" | 607 | **THIS IS AN OUTCOME CONSTRAINT** |
| 10 | "Border category must match containment intent" | 608 | **THIS IS AN OUTCOME CONSTRAINT** |
| 11 | "Accent color must match semantic role" | 609 | **THIS IS AN OUTCOME CONSTRAINT** |
| 12 | "Every CSS rule must be perceptible at 100% zoom. Zero waste." | 527 | **THIS IS AN OUTCOME CONSTRAINT** |
| 13 | "Monotonous single-column layout is the #1 visual uniformity failure" | 560 | PRESCRIPTIVE GUIDANCE with urgency framing |

**Critical finding: Items 5-12 are OUTCOME constraints, not process constraints.** They specify properties the BUILT ARTIFACT must exhibit. "At least 3 different transition types," ">=3 of 6 channels must shift simultaneously," "density direction must be consistent across ALL channels" -- these are not about HOW to derive a metaphor. They are about WHAT the CSS must look like.

The freedom audit categorizes the entire TC skill as "PROCESS constraints (how to derive), not OUTCOME constraints (what to produce)" (line 47 of the audit). This is an OVERSTATEMENT. Phases 0-3 of the TC skill are genuinely process-oriented. **Phase 4 (Compositional Architecture) is substantially outcome-oriented.** It specifies:
- Minimum transition type variety (3)
- Minimum channel shift count at boundaries (3/6)
- Coherence rules for every channel
- Density consistency requirements
- Component invention restrictions
- Fractal consistency requirements (5 zoom levels)

**However -- and this is important -- these outcome constraints are COMPOSITIONAL WISDOM, not compliance targets.** They encode "how to compose well," not "what score to achieve." The distinction is real but subtler than the audit acknowledges. The audit draws the line at process/outcome; the more accurate line is between COMPOSITIONAL PRINCIPLES (enabling, even if imperative) and COMPLIANCE TARGETS (score-seeking). The TC Phase 4 rules are compositional principles wearing imperative language.

**Net assessment: The audit UNDERSTATES the amount of imperative language in the TC skill but its CONCLUSION is still directionally correct.** The imperatives encode craft knowledge, not quality scores. A builder who internalizes ">=3 channels shift at boundaries" will compose BETTER, not merely COMPLY more. The 1/10 deduction the audit gives for the world-physics aesthetic limitation should arguably be 2/10 to account for the TC Phase 4 outcome constraints.

---

## 2. HIDDEN CONSTRAINTS

### 2A. The Conventions Are More Constraining Than "Physics"

The freedom audit calls the 14-line conventions "physics, not aesthetics" and "enabling, not constraining." I challenge this framing on two specific items:

**R >= G >= B on every background hex.** The audit says this "eliminates cold/blue-dominant backgrounds but preserves enormous creative latitude within the warm spectrum." Let me be more precise about what it eliminates:
- ALL cool-toned backgrounds (blues, teals, cool grays)
- ALL purple-dominant backgrounds
- ALL green-dominant backgrounds
- ALL neutral grays where B > R (e.g., #808085 fails)

The constraint restricts the builder to: warm whites, creams, tans, browns, warm grays, oranges, reds, yellows, and near-blacks. This is a SUBSTANTIAL aesthetic restriction. The audit acknowledges this in its 1/10 deduction but downplays the magnitude. A builder who wants to create a "cold night sky" zone, a "deep ocean" section, or a "clinical steel" area simply cannot. The world-description says "The palette is warm" -- this IS the world, but the constraint is still a significant freedom limitation.

**Assessment: AGREE the constraint is world-physics, but the audit UNDERSTATES its restrictiveness.** Not a red flag -- this is an honest design choice, and the audit should call it that rather than minimizing it.

**h3 headings: italic.** The conventions-brief.md line 13 specifies "h3 headings: italic." This is NOT in the embedded 14-line conventions in SKILL.md. But the conventions-brief.md is listed as one of the audit's examined files. The italic h3 rule is a typographic aesthetic choice that removes builder freedom for a specific heading level. It does not appear in the runtime prompt, so its impact is minimal -- but the audit's claim of "no aesthetic judgments encoded" in the conventions is technically incorrect for the conventions-brief.md file (though correct for the embedded 14 lines).

### 2B. The TC Skill's Phase 4 Is a Hidden Compositional Curriculum

The freedom audit treats the TC skill as a "sonnet form" analogy -- structure that channels creativity. This is partially correct for Phases 0-3. But Phase 4 is more accurately described as a **compositional curriculum** embedded inside the creative prompt. It teaches the builder:
- What fractal consistency means (5 zoom levels)
- What multi-coherence is (>=3 channels per boundary)
- What density patterns exist (CRESCENDO, F-PATTERN, BENTO, PULSE)
- What transition types exist (SMOOTH, BRIDGE, BREATHING)
- What compositional richness means (SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE)

This is not a "hidden constraint" in the compliance sense -- it is a hidden PEDAGOGY. The builder receives ~300 lines of compositional theory as part of their creative prompt. This shapes their creative decisions profoundly. A builder who reads "RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE" will build differently from one who doesn't.

**Is this a freedom limitation?** No. It is a FREEDOM ENABLER. The builder who understands multi-coherence can deploy it consciously. The builder who doesn't understand it cannot. Teaching vocabulary is not the same as constraining output. But the audit should acknowledge this as "compositional education embedded in the creative window" rather than categorizing the entire TC skill as pure process structure.

### 2C. Component Invention Restriction

TC SKILL.md line 621-625: "Before inventing a new component: [3 checks]. Only if ALL THREE are 'no' should you invent a new component." This is a CREATE-LAST constraint that channels builders toward adapting existing components. The freedom audit does not mention this. It is not a hidden compliance target, but it IS a hidden creative constraint: the builder must justify new components against a 3-question test before inventing them. This biases toward library conformity over creative invention.

**Assessment: MINOR hidden constraint.** The 3-question test is reasonable (don't reinvent wheels), but it means the builder's default is "use the library" rather than "express the metaphor." The prompt does balance this with "Do not copy when your metaphor demands something different" (SKILL.md line 163), which explicitly permits invention when warranted.

---

## 3. ISOLATION VERIFIED

### PA Auditor Isolation: CONFIRMED GENUINE

I independently verified the PA auditor isolation by tracing exactly what content reaches each auditor:

**What the AUDITOR PROMPT TEMPLATE contains (SKILL.md lines 424-482):**
1. Role framing ("You are a perceptual auditor...")
2. Receiving principle (5 points)
3. Section 0 protocol (cold look + scroll-through)
4. Visual verification instruction
5. Screenshot paths
6. 4 questions (pre-assigned from the 20)
7. Language constraint (banned CSS vocabulary + suggested perceptual vocabulary)
8. Output file path

**What it does NOT contain:**
- Gate results or gate IDs -- VERIFIED ABSENT
- Builder's reflection -- VERIFIED ABSENT
- Conviction brief or metaphor -- VERIFIED ABSENT
- Mechanism catalog -- VERIFIED ABSENT
- Components CSS -- VERIFIED ABSENT
- Content markdown -- VERIFIED ABSENT
- Other auditor reports -- VERIFIED ABSENT
- Any numerical targets -- VERIFIED ABSENT
- Any reference to TC skill phases -- VERIFIED ABSENT
- PA skill header ("guardrails are FLOORS...") -- VERIFIED ABSENT from prompt template

**Cross-verification with prompt-templates.md:** The information isolation matrix (lines 567-577) confirms the same isolation. The orchestrator notes at line 283 reinforce it.

**One subtlety the audit catches correctly:** The PA skill file header (lines 5-9) contains framing about "audit-optimized compositions feel mechanical" and "guardrails are FLOORS." This content EXISTS in the PA skill file but is NOT embedded in auditor prompts. Auditors receive only the AUDITOR PROMPT TEMPLATE content. The PA skill file is read by the orchestrator for protocol reference, not injected into auditor prompts. VERIFIED.

**Potential concern: Auditor receives screenshot paths that may contain build directory slug.** The screenshot paths include the output directory name (e.g., `ephemeral/builds/yegge-gas-town-2026-02-25/_screenshots/1440/cold-look.png`). The slug "yegge-gas-town" could theoretically leak content subject matter to the auditor. However, this is MINIMAL information (a topic hint, not build context) and the auditor will see the content on the page itself in the screenshots. This is NOT a meaningful isolation breach.

**ISOLATION VERDICT: GENUINE.** The audit's assessment is correct. PA auditors are rigorously context-starved.

---

## 4. DOES ANY CONSTRAINT CROSS THE PLUMBING/FREEDOM BOUNDARY?

### 4A. Routing Decision (Step 6) -- CLEAN

The routing decision is purely mechanical: creative_verdict (from Weaver or keyword scan) + GATES_FAILED (from gate runner) = route. The orchestrator does not interpret quality, does not override the Weaver, and does not add creative direction. The routing matrix (SKILL.md lines 626-640) is a truth table, not a judgment call.

**One edge case:** The RETHINK protocol (Step 6.5) adds "Do NOT derive a metaphor related to: {metaphor}" to the Window 1 prompt. This IS a creative constraint -- it eliminates one metaphor from the solution space. But it is an appropriate constraint (don't repeat what was rejected) and it comes from the WEAVER's creative judgment, not the orchestrator's. The orchestrator merely transmits the exclusion.

### 4B. Mechanical Patching (Step 6.4) -- CLEAN BUT NOTABLE

The orchestrator performs deterministic CSS patches for failed gates. These patches modify the builder's creative output without creative input. Example: GR-05 fails, the orchestrator changes hex values. GR-13 fails, the orchestrator reduces margins.

The freedom audit does not discuss mechanical patching at all. This is an OMISSION.

**Is mechanical patching a freedom violation?** No -- but it deserves acknowledgment. The patches modify CSS values to satisfy world-physics constraints. They are analogous to a copy editor fixing spelling: the meaning is preserved, the mechanics are corrected. The builder's COMPOSITION is not altered; specific VALUE violations are fixed. And the patches only affect values that violate the conventions the builder already received -- so the builder "should have" gotten them right.

However, the patching happens WITHOUT builder awareness. The builder's creative output is modified post-hoc by the orchestrator. In a strict freedom analysis, this is a boundary transgression: the orchestrator (plumbing) modifies the output (creative artifact) without creative-agent involvement. The audit should acknowledge this and classify it as "acceptable plumbing correction" rather than ignoring it.

### 4C. GR-45 Typography Variation -- CLEAN

GR-45 is marked "NOT patchable" and routes to REFINE. This is correct: typography monotony is a structural creative issue that requires creative judgment, not mechanical fixes. The orchestrator correctly delegates this to the REFINE builder's creative territory rather than attempting to fix it mechanically.

### 4D. Regression Check (Step 8.3b) -- CLEAN

If the REFINE builder introduces MORE gate failures than the pre-REFINE version, the orchestrator reverts to the pre-REFINE HTML. This is a safety mechanism, not a creative judgment. It prevents regression without evaluating creative quality.

---

## 5. VERDICT

### AGREE -- with 3 qualifications

I agree with the freedom audit's central claim: **freedom is genuine across all four creative windows.** No creative agent receives quality targets, score requirements, gate IDs, or compliance checklists. The plumbing/freedom separation is clean. Information isolation for PA auditors is rigorous and verified.

**Qualification 1: The TC Phase 4 outcome constraints are understated.**

The audit classifies the entire TC skill as "process constraints." This is accurate for Phases 0-3 but inaccurate for Phase 4, which contains 8+ imperative outcome rules about what the built artifact must exhibit. These are compositional principles, not compliance targets, but the audit should acknowledge the distinction rather than sweeping all TC content into "process."

**Adjusted confidence: 8.5/10** (was 9/10). The 0.5 deduction is for the audit's failure to distinguish TC process from TC outcome constraints. The freedom itself is real -- but the audit's ANALYSIS of the freedom is slightly imprecise.

**Qualification 2: Mechanical patching is an unacknowledged plumbing-into-freedom transgression.**

The orchestrator modifies the builder's CSS output during Step 6.4 without creative-agent involvement. This is appropriate (fixing world-physics violations) but the audit should acknowledge it as a boundary crossing that is acceptable rather than pretending it doesn't exist.

**Qualification 3: The "physics" framing of conventions is slightly euphemistic.**

R >= G >= B eliminates ~40-50% of the RGB color space for backgrounds. The 14-line conventions collectively define a narrow aesthetic world (warm, sharp, flat, structured). Calling this "physics" rather than "aesthetic restrictions" is accurate within the fiction of the design system but understates the real creative limitation. The audit's 1/10 deduction is proportionate -- I would score it the same -- but the framing could be more forthright.

**Bottom line: The freedom audit reaches the right conclusion for the right reasons, with minor analytical imprecision in its treatment of the TC skill's Phase 4 and its omission of the mechanical patching step.**

---

## Appendix: Items the Freedom Audit Got Right That I Verified

These are not qualifications -- these are confirmations of the audit's strongest claims:

1. **Receiving principle is genuinely generative.** Verified: "What excites you?", "The metaphor is yours," "your perception is the tiebreaker." These are not disguised compliance language.

2. **PA auditors are truly context-starved.** Verified: zero build context, zero gate results, zero numerical targets, zero compositional theory.

3. **Weaver has genuine creative sovereignty.** Verified: verdict is "a creative judgment, not a calculation." Convergence rule requires acknowledgment, not agreement.

4. **REFINE builder has full creative authority.** Verified: can restructure HTML, rewrite CSS, change layouts, introduce mechanisms. Only restriction: don't replace metaphor, don't violate world-description.

5. **World-description reads as prose, not rules.** Verified: "Every surface is sharp" establishes physics. "Think of a well-edited magazine spread" gives creative orientation. No checklist items, no compliance language.

6. **Different Opus instance for REFINE defeats continuation bias.** Verified: SKILL.md line 953 ("Different builder for REFINE"), prompt-templates.md line 522 ("This MUST be a different Task agent from Window 1").

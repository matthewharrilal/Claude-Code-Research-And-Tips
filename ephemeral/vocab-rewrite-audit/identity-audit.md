# Fresh-Eyes Audit: identity.md + vocabulary.md Rewrite

**Auditor:** Opus 4.6 fresh-eyes agent (zero prior context)
**Date:** 2026-03-01
**Method:** Zero-context reading of new files, then cross-referencing against originals and synthesis. No prior involvement in the audit or rewrite.

---

## PART 1: Did identity.md Capture Everything Important?

### Source Material Size

- prohibitions.md: 420 lines, 24 rules (8 absolute, 14 conditional, 2 meta)
- soul-constraints.md: 343 lines, 3 soul principles + philosophy + validation checklist
- **Combined source: 763 lines**
- **identity.md: 82 lines (89% compression)**

### 1.1 Soul Principles: What Was Kept

The originals had 3 soul constraints. identity.md has 2 soul principles. The synthesis recommended this change based on soul-tracer finding that `filter: drop-shadow()` is an implementation detail of the box-shadow prohibition, not an independent soul piece.

| Original Soul Constraint | identity.md | Verdict |
|--------------------------|-------------|---------|
| #1: border-radius: 0 | Soul Principle 1 "Angular Geometry" (lines 13-14) | KEPT - correct |
| #2: box-shadow: none | Soul Principle 2 "No Shadow/Depth Simulation" (lines 16-17) | KEPT - correct |
| #3: filter: none | Merged into Principle 2 (line 17: "no filter: drop-shadow()") | MERGED per synthesis - correct |

The merge is clean. Line 17 explicitly covers box-shadow, filter: drop-shadow, AND rgba() opacity tricks. This is more comprehensive than the original which treated filter as a separate-but-same principle.

**One thing LOST:** soul-constraints.md lines 145-149 listed PERMITTED filters (grayscale, brightness, contrast). identity.md's "No shadow/depth simulation" framing could cause builders to avoid ALL filter usage. The phrase "no filter: drop-shadow()" on line 17 partially addresses this by specifying which filter is banned, but the permissive side is absent.

### 1.2 Absolute Prohibitions: What Was Kept

Prohibitions.md had 8 absolute prohibitions. identity.md has 8 absolute refusals (lines 53-61). Mapping:

| Orig # | Original Rule | identity.md Line | Status |
|--------|--------------|-------------------|--------|
| 1 | No border-radius > 0 | 53: "No rounded corners -- ever, on anything" | KEPT |
| 2 | No box-shadow | 54: "No shadows -- box-shadow, drop-shadow, rgba shadow tricks" | KEPT (merged with #3 and #4) |
| 3 | No filter: drop-shadow | Merged into line 54 | MERGED per synthesis rec |
| 4 | No semi-transparent backgrounds | 56: "No semi-transparent backgrounds on visual elements -- opacity must be 1" | KEPT as separate line |
| 5 | No gradient backgrounds | 55: "No gradient backgrounds -- solid colors only" | KEPT |
| 6 | No pure black/white | 57: "No pure black #000000 or pure white #FFFFFF -- use palette values" | KEPT |
| 7 | No Instrument Serif for body | Not in refusals; relocated to Identity Signatures section line 29: "NEVER used for body text" | RELOCATED (reasonable) |
| 8 | No rounded corners for decoration | Not present | DELETED per synthesis (redundant with #1) |

**Observation:** There's a subtle redundancy between line 54 ("rgba shadow tricks") and line 56 ("No semi-transparent backgrounds"). The shadow tricks in line 54 refer to rgba pseudo-elements that create shadow-like effects, while line 56 refers to opacity < 1 on visual elements generally. These overlap. The synthesis recommended keeping #4 but merging #3 into #2. identity.md keeps #4 as separate AND merges it partially into the shadow line. This creates double-coverage, which is actually safer for builders but slightly confusing for auditors.

### 1.3 Conditional Prohibitions: What Was Kept

Prohibitions.md had 14 conditional prohibitions (#9-#22). identity.md has 7 conditional refusals (lines 63-69).

| Orig # | Original Rule | identity.md | Status |
|--------|--------------|-------------|--------|
| 9 | No 2px borders (exception: OD-004 confidence) | Line 63 | KEPT |
| 10 | No accent borders < 4px (exception: AD-004 depth) | Line 64 | KEPT |
| 11 | No decorative elements without info | Moved to ABSOLUTE refusals (line 59) | PROMOTED to absolute - reasonable |
| 12 | No decorative grid breaking | Line 65 | KEPT |
| 13 | No vertical table borders | Line 66 | KEPT |
| 14 | No hover lift effects | Moved to ABSOLUTE refusals (line 60) | PROMOTED to absolute - reasonable |
| 15 | No traffic-light color adjacency | Not present | DELETED per synthesis (arbitrary) |
| 16 | No cool-toned grays | Moved to ABSOLUTE refusals (line 58) | PROMOTED to absolute - correct |
| 17 | No non-italic h3 | Not present | DELETED per synthesis (contradicted by DD-001) |
| 18 | No same-density stacking (exception: crescendo) | Line 67 | KEPT |
| 19 | Research provenance required | Not present | MOVED to pipeline per synthesis |
| 20 | Tension derivation required | Not present | MOVED to pipeline per synthesis |
| 21 | No full viewport contentless space | Line 68 | KEPT |
| 22 | No front-loading visual interest | Line 69 | KEPT |

**Reclassification analysis:** Rules #11, #14, and #16 were conditional in the original but are now absolute in identity.md:
- #11 (no decoration without info): Original said "NONE documented" for exceptions, so promoting to absolute is consistent.
- #14 (no hover lift): Original also said "NONE documented." Correct promotion.
- #16 (no cool grays): Original said "NONE documented." Correct promotion.

This is actually a quality improvement -- rules with zero exceptions SHOULD be absolute, not conditional.

### 1.4 What Was LOST That Shouldn't Have Been

**LOST (Significant):**

1. **Measurement protocols for #21 and #22.** Prohibitions.md had detailed binary measurement protocols for the viewport content coverage test (#21, lines 335-355) and the visual interest distribution test (#22, lines 370-385). These included step-by-step scroll position measurement, content coverage percentages, and pass/fail criteria. identity.md reduces both to one-line summaries. This is APPROPRIATE for identity.md (character, not compliance), but these protocols need to live somewhere in the system. If they're in the gate runner, that's fine. If they're not anywhere else, this is a real loss.

2. **Exception documentation templates.** Prohibitions.md included explicit documentation templates for conditional prohibitions (e.g., "If using 2px border for [specific confidence encoding pattern from OD-004]. Exception justified by [pattern reference]"). identity.md drops all of these. Again, appropriate for identity.md, but builders using exceptions need guidance on HOW to document them.

3. **Permitted filters list.** soul-constraints.md lines 145-149 explicitly listed permitted filter values (grayscale, brightness, contrast). A builder reading "No shadow/depth simulation" might overcorrect.

4. **Violation examples.** soul-constraints.md had specific CSS violation examples (e.g., "border-radius: 4px on cards -> SOUL VIOLATION"). These were useful as quick-recognition aids.

5. **Validation checklist.** soul-constraints.md lines 293-303 had a 6-item pre-commit verification checklist. Useful for standalone auditors.

**LOST (Minor -- appropriate omissions):**

6. **Evidence citations.** Every prohibition in the original had multi-source evidence blocks (geometry.md lines, registry lines, identity-lens.md lines, AD forward references). All removed. Appropriate -- identity.md is character, not provenance.

7. **"How to Use This Document" section.** Prohibitions.md lines 408-416 had usage instructions. Not needed in the streamlined format.

8. **"What Happens When Soul Is Violated" section.** soul-constraints.md lines 308-338 described visual, systemic, and process impacts. Dramatic but not operationally necessary.

9. **Compositional chain diagram.** soul-constraints.md lines 271-285 showed how soul constraints generate the rest of the system. Helpful for understanding but not for building.

### 1.5 Overall Loss Assessment

The compression from 763 to 82 lines (89%) is aggressive but well-targeted. Everything lost falls into two categories:
- **Provenance and evidence** (items 6-9): Correct to remove from a character document
- **Operational details** (items 1-5): Correct to remove IF they exist elsewhere in the system

The critical question is: do measurement protocols, exception templates, and permitted filters exist in another file? If the gate runner and pipeline manifest cover these, the loss is acceptable. If not, they need to be documented somewhere.

---

## PART 2: What Was ADDED That Might Be Wrong?

### 2.1 Character Statement (identity.md lines 3-5)

**Text:** "KortAI is an editorial purist with the temperament of a print architect. It treats the screen as a page, not an app. Its personality is austere, confident, and deliberately unfriendly -- not hostile, but uninterested in being approachable."

**Source check:**
- "editorial purist" -- No source document uses this phrase. INFERRED from soul-constraints.md line 30 ("decisive, confident, editorial, authoritative, precise") and the general anti-physical philosophy. Reasonable inference, not fabricated.
- "temperament of a print architect" -- No source uses this phrase. INFERRED from the "print heritage" mentioned in soul-constraints.md lines 28, 48, 88. The "architect" framing is new -- the originals said "print heritage," not "print architect." Slightly creative but defensible.
- "deliberately unfriendly" -- **This is the strongest addition.** The originals said "not friendly" (soul-constraints.md line 28: "friendly, safe, generic" are what rounded corners signal, and KortAI rejects that). But "deliberately unfriendly" is stronger than "not friendly." The originals never explicitly called the system unfriendly; they said it's not TRYING to be friendly. "Not pursuing friendliness" and "deliberately unfriendly" are different claims. This is an extrapolation, not a finding.
- "simultaneously inviting and uncompromising" -- This captures the Warmth vs Severity tension well. Supported by the coexistence of warm cream (#FEF9F5) with sharp geometry.
- "typeset journal, not a dashboard" -- Not in any source. NEW metaphor added by the rewrite author. It's vivid and useful, but it's an editorial addition, not a captured finding.

**Verdict:** The character statement is well-written and broadly accurate. Two phrases are creative additions: "deliberately unfriendly" (slightly stronger than source material warrants) and "typeset journal, not a dashboard" (new metaphor, but genuinely helpful for builders).

### 2.2 Identity Signatures Structure (lines 21-33)

The "2 soul principles + 3 identity signatures" structure was proposed by the synthesis (Section 6). This structure itself is NEW -- neither prohibitions.md nor soul-constraints.md had an "identity signatures" tier. The distinction (immutable principles vs. "highly stable but not immutable" signatures) is an invention of the synthesis-guided restructuring.

**Is it accurate?**

The signatures are:
1. Warm Palette (#3 in identity.md) -- The original soul-constraints.md had 3 soul constraints, none of which were the palette. The palette was in prohibitions.md (#6, #16) but at the prohibition level, not soul level. The synthesis found that the original lens-manifesto DID list "primary red (#E83025)" as a consensus soul item, and it was demoted without documentation. Elevating it to "signature" (one tier below soul) is a compromise position. Defensible.

2. Typography Trinity (#4) -- Not a soul constraint in the originals. Was prohibition #7 (no serif for body). Elevating the entire trinity to "signature" status is new. The synthesis (Section 1.4) confirms 100% locked across all 18 explorations, supporting this elevation.

3. 4px Left-Border Callout System (#5) -- Also not a soul constraint in the originals. Was implied by prohibition #10 (no accent borders < 4px) and documented in identity-lens.md. The synthesis found it was one of the original SOUL-DISCOVERIES (Soul Piece 3: "Callout family DNA") that was DEMOTED when the focus narrowed to grepable CSS properties. Re-elevation to signature is supported by evidence (18/18 explorations).

**Verdict:** The signatures are all well-supported by evidence. The structural innovation of having a "signature" tier is reasonable and fills a real gap between "immutable soul constraint" and "ordinary prohibition."

### 2.3 Internal Tensions Section (lines 36-44)

This section is entirely NEW. Neither original file had a "tensions" section.

**Warmth vs Severity tension:** Accurately captures the real tension between the warm cream palette and the sharp angular geometry. Both originals documented these properties separately but never named the tension. This is a genuine insight synthesis, not fabrication.

**Solid Offset vs Anti-Shadow tension:** This is the most sophisticated addition. identity.md notes: "The system rejects box-shadow as 'dishonest fake 3D' yet provides a ::after pseudo-element offset technique that visually mimics a shadow. The distinction -- structural vs simulated -- is philosophically thin." The originals never acknowledged this tension. In fact, soul-constraints.md went to great lengths to justify the philosophical distinction (lines 68-82). identity.md is being more honest about the weakness of that distinction. This is editorially brave and accurate.

**Vocabulary Ceiling tension:** Captures a real limitation. The originals never documented what the system CANNOT do. This adds genuine value for builders.

**Missing tension:** The synthesis identified a 4th tension -- "Scar tissue rules (#21, #22) derived from experiment failures." identity.md doesn't acknowledge that some conditional boundaries are post-hoc reactions to specific experiment failures rather than patterns observed across explorations. This provenance distinction matters because it affects confidence in the rules.

**Verdict:** The tensions section is the best new content in the rewrite. It's honest, useful, and fills a real documentation gap. Missing the scar tissue tension is the only gap.

### 2.4 Vocabulary Limitations Section (lines 73-81)

Also entirely NEW. Five limitations listed:
1. Playfulness -- accurate. No exploration demonstrates playfulness.
2. Celebration -- accurate. Success states are minimal.
3. Visual surprise -- accurate. The toolkit is constrained.
4. Emotional range -- accurate. "Authoritative warmth" is the dominant register.
5. Softness -- accurate. "The system would rather be mistaken for cold than for approachable."

Item 5 is an editorial addition (not found in any source), but it's a fair characterization of the design philosophy.

**Verdict:** All 5 limitations are accurate characterizations, not fabrications. Useful addition.

---

## PART 3: vocabulary.md Accuracy Check

### 3.1 Claims That Could Be Made Up

**"The system rejected the pipeline's constructed gray ramp (#444444/#888888/#AAAAAA)" (line 11):**
- Synthesis Section 2.1 confirms this: tokens-components-tracer found #444444, #888888, #AAAAAA have NO exploration source. All 18 explorations use #1A1A1A primary and #666666 secondary.
- **VERIFIED: True claim, not fabricated.**

**"Four background values signal content type shifts" (line 15):**
- Sparse (#FEF9F5), dense (#FFFFFF), breathing (#FAF5ED), bedrock (#1A1A1A).
- Synthesis Section 1.2 confirms all 4 zone tokens. Zone token naming traces to OD/CD explorations.
- **VERIFIED: True, but #FFFFFF creates a contradiction with identity.md (see below).**

**"~1.5x ratio between levels" for the type scale (line 26):**
- Let me check: 12, 14, 16, 18, 20, 24, 28, 36, 48. The ratio from 12->14 is 1.17, from 14->16 is 1.14, from 24->28 is 1.17, from 36->48 is 1.33. This is NOT consistently ~1.5x. The largest jump (28->36) is 1.29x.
- **INACCURATE: The "~1.5x ratio" claim is an approximation, but it's misleading. The actual ratios range from 1.14 to 1.33, averaging closer to 1.2x. "~1.5x" is too high.**

**"Consistent within a single page. Variable across pages based on content needs." (line 53):**
- Synthesis Section 5 confirms: DD used 900-1100px varying per exploration, OD locked at 860px, CD locked at 1100px.
- **VERIFIED: True claim.**

**"The 2px weight is deliberately skipped" (line 42):**
- Synthesis Section 1.6 confirms: 17-agent audit found 108 declarations of 2px borders in OD, classified as epidemic.
- **VERIFIED: True claim with strong evidence.**

### 3.2 Omissions from vocabulary.md

1. **Callout background hex values.** The synthesis Section 3.2 identified 5 CD-006 opaque callout backgrounds (#F5F9FE, #F2F9F4, #FEF6F5, #FFFBF2, #F8F5FE). vocabulary.md mentions they exist ("Each accent has a matching opaque tinted background") but doesn't list them. Builders need these values.

2. **Syntax highlighting palette.** 7 syntax tokens confirmed across all explorations with code blocks (synthesis Section 1.7). Not mentioned in vocabulary.md.

3. **Font fallback stacks.** vocabulary.md lists font names but not fallback chains. tokens.css has them, but a pointer would help.

4. **Dark theme / bedrock zone usage guidance.** vocabulary.md lists the bedrock zone (#1A1A1A) but gives no guidance on when to use it. The dark header pattern is one of the most recognizable KortAI signatures (12-14/18 explorations per synthesis Section 1.10 mechanism #13).

---

## PART 4: Refusal Categorization (Absolute vs Conditional)

### 4.1 Are Absolute Refusals Correctly Categorized?

All 8 absolute refusals in identity.md are rules that have ZERO documented exceptions in the original prohibitions.md. Correct categorization.

The promotions from conditional to absolute (#11 no decorative elements, #14 no hover lift, #16 no cool grays) are all rules that were labeled "conditional" in prohibitions.md but had "NONE documented" for their exception. Promoting them to absolute is a logical correction.

### 4.2 Are Conditional Refusals Correctly Categorized?

All 7 conditional refusals have genuine, documented exceptions. Correct categorization.

### 4.3 Any Misclassifications?

**#11 (No decorative elements without info) -- promoted to absolute.**
In the original, this was conditional but with "NONE documented" exception. identity.md promotes it. However, this is the most judgment-heavy prohibition. What counts as "information"? A visual flourish that creates breathing room carries information about page rhythm. This rule is softer than the other absolutes (border-radius: 0 is binary; "carries information" is subjective). Promoting it to absolute is defensible but creates a judgment rule in what should be a binary section.

**No other misclassifications found.**

---

## PART 5: Cross-File Consistency

### 5.1 The #FFFFFF Contradiction

**This is the single most important finding.**

- identity.md line 57: "No pure black #000000 or pure white #FFFFFF -- use palette values"
- vocabulary.md line 15: "dense (#FFFFFF, near-white)"

These two files are meant to be read together. They directly contradict each other on pure white.

The synthesis (Section 9.2) resolved this: "Acknowledge that white/#FFFFFF is a legitimate component background for surfaces. The prohibition should target page-level backgrounds, not component surfaces." But neither file implements this nuance. identity.md retains the blanket prohibition; vocabulary.md uses the prohibited value.

**Fix options:**
1. Reframe identity.md: "No pure white #FFFFFF for page backgrounds -- use #FEF9F5 warm cream" (component/zone surfaces may use white for contrast)
2. Change vocabulary.md: Use #FEFEFE or #FAFAF8 for the dense zone (avoids triggering the prohibition)
3. Add clarification to vocabulary.md: A note explaining why #FFFFFF is used for dense zones despite the prohibition

Option 1 is best -- it refines the prohibition to match actual practice (explorations DO use white for surfaces).

### 5.2 Numbering Alignment

identity.md uses a unified numbering scheme (1-5, where 1-2 are soul principles and 3-5 are identity signatures). vocabulary.md doesn't reference identity.md's numbering. No conflict, but the numbering doesn't carry across files.

### 5.3 Palette Values Cross-Check

| Value | identity.md | vocabulary.md | Match? |
|-------|-------------|---------------|--------|
| #FEF9F5 | Line 26 | Lines 9, 15 | YES |
| #1A1A1A | Line 26 | Lines 11, 15 | YES |
| #E83025 | Line 26 | Line 13 | YES |
| #E0D5C5 | Not mentioned | Line 9 | N/A (vocabulary-only) |
| #F0EBE3 | Not mentioned | Line 9 | N/A (vocabulary-only) |
| #666666 | Not mentioned | Line 11 | N/A (vocabulary-only) |

No hex value conflicts between the files (except the #FFFFFF issue above).

### 5.4 Container Width vs CLAUDE.md Files

vocabulary.md (line 48): "Range, not mandate. Explorations used 860-1100px"
compositional-core/CLAUDE.md: "940-960px container width (SC-01)" -- still references the old hard constraint.
design-system/CLAUDE.md: Also references 940-960px in soul constraints section.

**This creates a 3-file contradiction.** vocabulary.md says range, CLAUDE.md files say hard constraint. CLAUDE.md files are auto-loaded and will override vocabulary.md in practice.

---

## PART 6: Character Statement Assessment

The character statement on line 5 is the most significant new content. Does it accurately represent the design system?

**"Editorial purist"** -- Supported. The anti-decoration philosophy, anti-complexity principle, and "information density over decoration" from soul-constraints.md all point here.

**"Temperament of a print architect"** -- Supported. "Print heritage" appears in soul-constraints.md lines 28, 48, 88, 94. "Architect" is new but fits the structural emphasis (border-weight hierarchy, spatial encoding).

**"Treats the screen as a page, not an app"** -- Strongly supported. No hover effects, no interactive lift, no animation (per prohibitions #14 and the AD-F-020 anti-physical finding). This is the clearest distillation of the anti-physical identity.

**"Austere, confident, and deliberately unfriendly"** -- Partially supported. "Austere" and "confident" are directly from soul-constraints.md line 30. "Deliberately unfriendly" is an extrapolation. The originals describe what KortAI is NOT (friendly, safe, approachable) rather than asserting it IS unfriendly. "Deliberately uninterested in friendliness" would be more precise. "Unfriendly" implies active hostility that the originals don't claim.

**"Speaks in warm earth tones while insisting on sharp geometry"** -- Perfectly supported. This is the core tension documented across multiple files.

**"A typeset journal, not a dashboard"** -- New metaphor, not in source material. But genuinely useful as a builder-facing shorthand. Accurate characterization.

---

## PART 7: Summary Findings

### By Severity

#### BLOCKING (Must Fix Before Deployment)

1. **#FFFFFF CONTRADICTION.** identity.md prohibits pure white; vocabulary.md uses it as dense zone background. Builders will see contradictory instructions in files meant to be read together. Fix: reframe identity.md prohibition to "page-level backgrounds" or change vocabulary.md value.

#### SIGNIFICANT (Should Fix)

2. **Permitted filters missing.** identity.md says "no shadow/depth simulation" but doesn't clarify that grayscale, brightness, and contrast filters ARE permitted. Builders may overcorrect.

3. **Type scale ratio claim inaccurate.** vocabulary.md claims "~1.5x ratio between levels." Actual ratios range from 1.14 to 1.33, averaging ~1.2x. This is misleading.

4. **Container width contradiction with CLAUDE.md files.** vocabulary.md says 860-1100px range; both CLAUDE.md files still say 940-960px hard constraint. The CLAUDE.md files are auto-loaded and will take precedence.

5. **Scar tissue tension undocumented.** identity.md documents 3 of 4 tensions from the synthesis. Missing: acknowledgment that #21 and #22 are post-hoc rules from experiment failures, not exploration-derived.

#### MINOR (Nice to Have)

6. **"Deliberately unfriendly" is slightly stronger than source material.** "Not pursuing friendliness" would be more precise than "deliberately unfriendly."

7. **Callout background hex values omitted from vocabulary.md.** The 5 CD-006 opaque backgrounds are mentioned but not listed.

8. **Redundancy between lines 54 and 56 of identity.md.** "rgba shadow tricks" in the shadows line partially overlaps with "No semi-transparent backgrounds." Safe but slightly confusing.

9. **Measurement protocols for #21/#22 need a home.** identity.md correctly omits them, but they need to exist somewhere in the system (gate runner, pipeline manifest, or a separate validation reference).

10. **No syntax highlighting mention in vocabulary.md.** 7 syntax tokens confirmed across explorations, not documented.

11. **Prohibition #11 (no decorative elements) is judgment-based.** Promoting it to "absolute" puts a subjective rule among binary rules. "Carries information" is inherently interpretive.

### Overall Grades

**identity.md: 4.5/5** -- Excellent rewrite. Captures all critical identity content in 82 lines. The character statement, tensions section, and vocabulary limitations are high-quality additions. One contradiction (#FFFFFF) and a few minor gaps.

**vocabulary.md: 4/5** -- Good rationale document. The 2-color text hierarchy correction is the standout contribution. The type scale ratio claim is inaccurate. Missing callout backgrounds and syntax palette.

**Fidelity to originals: 4.5/5** -- 17/17 synthesis recommendations correctly implemented. All 6 recommended deletions applied. All 3 recommended promotions applied. One missing tension.

**Fidelity to synthesis: 4.5/5** -- Structure matches synthesis Section 4 proposals exactly. Line budgets under target. File-level recommendations followed. Minor gaps in implementation details.

**Cross-file consistency: 3.5/5** -- The #FFFFFF contradiction and the container-width CLAUDE.md inconsistency are real problems. Both are easy to fix.

---

**END AUDIT**

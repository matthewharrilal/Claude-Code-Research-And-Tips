# PA System Failure Postmortem

## The Verdict Gap

The PA system issued a **SHIP** verdict for a page that a human reviewer immediately identified as having: excessive whitespace (200+px dead zones), bland domain cards (text-with-borders, no visual interest), a visually uninteresting anti-patterns section, illegible code snippets, and an overall lack of character. Five auditors praised the page's "confidence" and "conviction" while these basic craft failures went unaddressed.

This document diagnoses how and why the PA system produced a false-positive SHIP.

---

## Diagnosis 1: Did Auditors Actually Look at the Screenshots?

**Yes, but through a literary lens rather than a craft lens.**

The auditors demonstrably engaged with the screenshots. Their reports contain specific, page-accurate observations:

- Auditor 1 identified the "yawning gap between the header and the first body text" (view-a-02.png clearly shows this ~120px void between the header and "PART I")
- Auditor 2 tracked the light-to-dark transitions through the scroll
- Auditor 3 noted the card sections "stack awkwardly" at 768px
- Auditor 4 identified that "gaps between cards on dark backgrounds feel like nothing" and the "large empty stretch between the header area and PART I label"
- Auditor 5 noted "attention starts to drift" in the dark sections

These are real perceptions from real screenshot viewing. The problem is not that auditors failed to look. The problem is that **the prompt directs them to describe experiences using literary/atmospheric language, which systematically converts visual defects into aesthetic observations.** The gap between the header and Part I label -- a straightforward dead zone -- becomes "the page declared its thesis and then hesitated before beginning the argument" (Auditor 1). A failure of craft becomes a feature of voice.

---

## Diagnosis 2: Did ANY Auditor Flag the Core Issues?

### Excessive whitespace: PARTIALLY FLAGGED, THEN AESTHETICIZED

- **Auditor 1** called it "dead air" in the cold look, then in E-05 reframed it as "the prose sections breathe comfortably" and "designed pauses."
- **Auditor 4** was the most direct: "The empty space that is just... empty accumulates inside the dark-background zones" and flagged the header-to-Part-I gap as "dead space at every viewport." This is the strongest craft-level observation across all five reports.
- **All 5 cold looks** identified the header-to-Part-I gap as the "worst thing." This is remarkable convergence that should have been a WOULD-NOT-SHIP signal.

Yet the Weaver synthesis dismisses this: the fix cycle addresses dark-zone sub-zone backgrounds but **never addresses the 200+px dead zones between sections in the light areas.** The fix builder's feedback explicitly says "Did NOT attempt prose line-height variation." The core whitespace problem survived the entire PA cycle.

### Bland domain cards: NOT FLAGGED

No auditor describes the domain cards as visually uninteresting. Instead:
- Auditor 2 calls them "the page's highest achievement" -- the moment where "the essay shifts from telling to showing"
- Auditor 3 says "the card-like grids offer a different kind of density that IS working"
- Auditor 5 calls them "genuinely like peering into a dashboard or terminal"

Looking at the actual screenshot (view-a-01.png), the domain cards are **bordered rectangles with text labels on a dark background.** They are minimally styled. The auditors perceived them as "specimens under examination" and "instruments laid out on a table" -- literary interpretations that obscure the visual reality: they are plain boxes with text.

### Illegible code snippets: NOT FLAGGED

Zero auditors mention code readability. The skill's Priority Override rule states: "Comprehension failures ALWAYS outrank aesthetic observations. If text is illegible... that is your first finding regardless of everything else." This rule was not triggered. Code snippets in the dark zones are small, low-contrast text on near-black backgrounds. No auditor flagged this.

### Overall lack of character: INVERTED INTO A STRENGTH

Every auditor described the page as "authoritative," "somber," "vigilant," "deliberate." These are personality attributions that reframe "visually plain" as "tonally confident." The PA system cannot distinguish between intentional restraint and failure to invest creative energy, because the questions only ask about experiential character, never about craft investment.

---

## Diagnosis 3: What in the Prompts Enables False-Positive SHIP?

### 3a. The PA Auditor Prompt's Language Constraint Creates a Euphemism Machine

The auditor prompt (lines 69-74) bans all CSS vocabulary: "px, rem, em, %, hex, rgb, rgba, border-radius, box-shadow, padding, margin, font-size..." and replaces it with experiential vocabulary: "heavy, light, cramped, spacious, jarring, smooth, floating, grounded..."

**The problem:** CSS vocabulary is the language of craft. Experiential vocabulary is the language of atmosphere. When you can only describe atmosphere, craft failures become invisible. "There is a 200px gap with no content" becomes "the page holds its breath." "The cards have no visual interest beyond a 1px border" becomes "the containers feel like specimens under examination." The language constraint was designed to prevent auditors from being code reviewers. It succeeded -- but it also prevents them from being craft reviewers.

### 3b. The Auditor Prompt's "Strength + Weakness Balance" Rule Creates Praise Pressure

Lines 43-49: "At least ONE of your four answers should describe what IS WORKING -- not just what's wrong." And specifically: "Questions E-05 (breathing), E-06 (confidence), E-09 (form coupling), E-15 (dramatic peak), E-17 (voice), and E-18 (best moment) naturally invite strength-finding. If you have one of these, lean into the positive dimension."

6 of the 20 questions are tagged as "naturally invite strength-finding." Combined with the experiential language constraint, this creates a system that is structurally biased toward finding positive interpretations of neutral or even negative visual states.

### 3c. The Weaver Prompt's "Anchor Override" Gives the Synthesis Agent Supreme Authority to Dismiss Auditor Concerns

Weaver prompt, line 200-202: "Your experiential anchor outranks auditor reports. If 5 auditors say 'the typography is elegant' but your first impression was 'the typography feels stiff,' trust your anchor."

In this case, all 5 auditors gave **REFINE** in their cold look. The Weaver overrode this to **SHIP** after one fix cycle. The Weaver's justification: "The five fixes from Cycle 1 have resolved all flagged issues at a perceptible level." But the fixes addressed sub-zone backgrounds, green tint visibility, quote grouping, and padding -- none of which are the human reviewer's core complaints (dead zones, bland cards, illegible code, lack of character).

The Weaver has the power to override 5/5 REFINE verdicts, and the prompt encourages this by framing the Weaver's anchor as having "permanent priority."

### 3d. The Weaver Prompt's Compliance Assessment Creates a "Green Dashboard" That Overwhelms Perceptual Concerns

The Weaver's Output 4 (Package Compliance) is an extensive section-by-section compliance check that in this case returned **10/10 FOLLOWED, 0/10 partial, 0/10 not followed.** This green dashboard creates a strong confirmation signal: if the builder followed all instructions, the page must be good. The synthesis literally concludes: "High compliance with strong perceptual result."

But compliance with the research package is orthogonal to visual quality. A builder can follow every instruction from a research package that itself failed to specify interesting visual treatments. The compliance assessment dominates the synthesis output (90+ lines of Output 4 vs. 13 lines of Experience Portrait), creating an overwhelming signal that drowns the perceptual verdict.

### 3e. The Fix Cycle Process Launders REFINE into SHIP

The auditors all said REFINE. A fix cycle addressed 5 issues. The Weaver re-evaluated after the fix cycle and upgraded to SHIP. But the fix cycle addressed issues the auditors flagged (dark zone uniformity, green tint, quote repetition), NOT the issues the human reviewer would flag (bland styling, dead zones, illegible code, lack of character). The fix cycle creates a perception of progress -- "we fixed 5 things!" -- without addressing the fundamental quality gap.

---

## Diagnosis 4: Systemic Bias Toward Abstract Praise Over Concrete Craft

**Yes, this is the core systemic failure.**

The entire PA system is designed to capture experiential/atmospheric qualities and explicitly prohibits craft-level observation. This creates a systematic bias:

| What auditors CAN say | What auditors CANNOT say |
|---|---|
| "The page feels confident" | "The cards are visually boring -- just text in boxes" |
| "The dark sections feel like entering a different room" | "There's 200px of dead space between sections" |
| "The opening earns trust" | "The code snippets are too small and low-contrast to read" |
| "The rhythm creates a heartbeat" | "The anti-patterns section is a wall of identical bordered rectangles" |

The PA system is blind to craft by design. It was built to prevent "programmatic gate" thinking from contaminating perceptual assessment. But it overcorrected: by banning all measurement and specificity, it created a system that can only perceive atmosphere and tone, never execution quality.

**The atmosphere CAN be confident while the execution is bland.** A dark background with serif type and a red accent line creates "authority" and "seriousness" regardless of whether the actual content sections are well-crafted. The PA system detects the atmosphere and cannot see through it to the craft beneath.

---

## Diagnosis 5: Are the 23 PA Questions Designed to Catch These Issues?

### Analysis of question coverage:

| Issue | Relevant Questions | Coverage |
|---|---|---|
| Excessive whitespace / dead zones | E-04 (empty space), E-05 (breathing/density) | PARTIAL -- E-04 asks about generous space vs. abandoned space, which should catch dead zones. Auditor 4 DID flag this. But the Weaver classified it as a "mechanical" fix (padding adjustment) rather than a fundamental problem. |
| Bland/uninteresting visual styling | E-10 (what design adds), E-18 (best moment), E-19 (almost working) | WEAK -- these questions ask what IS working or almost working, not whether the styling is boring. No question asks "does any section look visually unfinished?" or "is there a section that looks like a first draft?" |
| Illegible content (code, small text) | Priority Override rule in Section 0 | THEORETICALLY COVERED but failed. The Priority Override says "Comprehension failures ALWAYS outrank aesthetic observations." Zero auditors triggered this. Possible reason: auditors view full-page screenshots where code blocks are tiny, making it hard to assess legibility. They may be inferring readability rather than testing it. |
| Lack of character / blandness | E-03 (personality), E-17 (voice), E-06 (conviction) | INVERTED -- these questions detect WHAT character a page has, not whether it has ENOUGH character. "Vigilant" and "authoritative" are personality attributions that sound like strengths. No question asks "is this page visually interesting?" or "would you remember this page tomorrow?" |
| Repetitive sections / visual monotony | E-14 (rhythm), E-08 (thirds), E-16 (adaptation) | MODERATE -- auditors DID flag repetition in the dark zones. But the fix cycle addressed this with sub-zone backgrounds (4-16 RGB point differences), not with genuinely different visual treatments. |

### Missing question types:

The PA questions have a major blind spot. They are all framed as **perceptual experience** questions. None are framed as **craft quality** questions. Missing:

1. **"Is there a section that looks undercooked -- like the builder ran out of time or ideas?"** This would catch bland cards and minimal styling.
2. **"Can you read ALL the text on this page comfortably?"** This would catch illegible code blocks.
3. **"Does this page look like something you've seen before, or does it look distinctive?"** This would catch generic styling.
4. **"Point to the most visually interesting 200px-tall strip on the page. Now point to the least interesting. How different are they?"** This would catch uniformity of visual investment.
5. **"If you showed this page to a friend, would they say 'that looks really well-made' or 'that looks like a nice template'?"** This would catch the template-quality craft issue.

---

## Root Causes (Ordered by Impact)

### RC-1: The language constraint converts craft failures into atmospheric observations (HIGHEST IMPACT)

By banning CSS/measurement vocabulary, the PA system ensures that concrete visual problems can only be expressed as abstract experiential qualities. A dead zone becomes "a pause." A bland card becomes "a specimen." An illegible code block is never mentioned at all. **The language constraint is the single most important mechanism enabling false-positive SHIP verdicts.**

### RC-2: The question set has zero craft-quality questions

All 23 questions ask about experience, atmosphere, rhythm, personality, and feeling. Zero questions ask about execution quality, visual interest level, or basic readability. The question set is designed to evaluate compositional coherence and content-form coupling -- legitimate concerns -- but is completely blind to whether the execution is actually good at a basic visual craft level.

### RC-3: The Weaver's compliance assessment dominates the verdict

Output 4 (90+ lines of green compliance checks) overwhelms Outputs 1-3 (30 lines of perceptual assessment). A Weaver processing 10/10 FOLLOWED naturally gravitates toward SHIP even when the perceptual signals say REFINE. The compliance assessment should be a separate document, not part of the synthesis, so it cannot contaminate the perceptual verdict.

### RC-4: The fix cycle creates false progress

5 auditors said REFINE. 5 fixes were applied. The Weaver re-evaluated and said SHIP. But the fixes addressed secondary issues (sub-zone backgrounds, green tint) while the primary issues (dead zones, bland styling, illegible code) were never in scope. The fix cycle satisfies the process without satisfying the quality bar.

### RC-5: The Weaver override power has no check

The Weaver can override 5/5 REFINE verdicts with no accountability mechanism. The prompt encourages this: "Your experiential anchor outranks auditor reports." There is no second opinion, no human checkpoint, no threshold for "if all auditors say REFINE, the Weaver cannot unilaterally SHIP."

### RC-6: Full-page screenshots obscure detail-level problems

Auditors view the page as a single enormous image (2160x26746px in this case). At that scale, code snippets, card borders, and spacing details are nearly invisible. Auditors perceive macro-level atmosphere (light/dark alternation, overall rhythm) but cannot assess micro-level craft (code legibility, card styling quality, spacing precision). The screenshot protocol needs detail crops, not just full-page and fold views.

---

## Recommendations

### Immediate (address before next build)

1. **Add 3-5 craft-quality questions to the PA question set.** Specifically: readability check, visual interest gradient, "undercooked" detection, distinctiveness assessment.

2. **Add detail-level screenshots to the capture protocol.** For each zone: one crop at 100% zoom showing the most complex/dense area. Auditors need to see cards, code blocks, and spacing at readable scale.

3. **Separate compliance assessment from perceptual synthesis.** Output 4 should be a separate file, not part of the Weaver's synthesis. The Weaver should make the SHIP/REFINE/REBUILD call based ONLY on perceptual Outputs 1-3.

4. **Add a Weaver override constraint.** If all 5 auditors say REFINE in cold look, the Weaver CANNOT issue SHIP without explicitly documenting why every auditor was wrong. Currently the Weaver can silently override.

### Structural (address in prompt redesign)

5. **Relax the language constraint to allow craft observations.** Keep the ban on CSS property names but allow dimensional descriptions: "large gap," "small text," "plain boxes," "minimal styling." The current constraint is so strict it prevents auditors from saying "this looks boring" in any form.

6. **Add a "Devil's Advocate" auditor role.** One auditor whose explicit job is to find reasons NOT to ship. This counterbalances the strength-finding bias in the other 4 auditors.

7. **Fix the fix cycle scope problem.** When auditors say REFINE, the fix cycle must address the AUDITOR'S cold-look "worst thing" items, not just the Weaver's curated issue list. All 5 auditors identified the header-to-Part-I dead zone as their "worst thing," yet the fix cycle never touched it.

---

## Summary

The PA system gave a SHIP verdict to a page with obvious craft failures because:
- The language constraint converted problems into poetry
- The question set asks about atmosphere but never about craft quality
- The compliance assessment drowned the perceptual signals
- The fix cycle created an illusion of progress
- The Weaver had unchecked power to override 5 REFINE verdicts
- Full-page screenshots hid detail-level problems

The PA system is excellent at evaluating compositional coherence and atmospheric character. It is structurally blind to basic visual craft quality. These are different things, and the system currently treats them as one.

# PA Lessons for Build-Embedded Quality

**Author:** PA-DEEP-REVIEWER
**Date:** 2026-02-16
**Sources Analyzed:**
- AUDIT-REPORT.md (Mode 4 master synthesis, 492 lines)
- REAUDIT-REPORT.md (post-fix Mode 4 re-audit, 404 lines)
- 07-VERDICT.md (initial lighter audit, 851 lines)
- 9 auditor findings files (original PA)
- 9 auditor findings files (re-audit PA)
- 2 lock sheets (original + re-audit)
- perceptual-auditing SKILL.md (775 lines)

---

## 1. PA Question Diagnostic Value Ranking

### Tier A: High-Diagnostic (Found REAL blocking issues in both audits)

| Rank | PA# | Question | Hit Rate | What It Found | False Positive Rate |
|------|-----|----------|----------|---------------|---------------------|
| 1 | PA-09 | Dead space serving no purpose? | 9/9 both audits | THE catastrophic whitespace void | 0% |
| 2 | PA-33 | Largest empty space: silence or dropped signal? | 9/9 both audits | Void as "dropped signal" not "designed silence" | 0% |
| 3 | PA-35 | Interest level across scroll | 9/9 both audits | Interest whiplash: peak->cliff->flatline | 0% |
| 4 | PA-12 | Eyes flow smoothly? | 9/9 both audits | Flow breaks at ~25% scroll depth | 0% |
| 5 | PA-05 | Would you put your name on this? | 9/9 | Overall composition judgment (1.5/4 -> 2.0/4) | 0% |
| 6 | PA-32 | Visual weight distributed across scroll? | 9/9 both audits | 100% weight in first 30%, 0% in rest | 0% |
| 7 | PA-01 | First thing that bothers you? | 9/9 both audits | Immediately identified whitespace void | 0% |
| 8 | PA-13 | Clear visual ending? | 4/9 + 4/9 | Footer buried under void, page just stops | 0% |
| 9 | PA-30 | 1440px feels designed for this width? | 5/9 both audits | Narrow column in vast emptiness | 0% |
| 10 | PA-42 | Metaphor causing visual problem? | 2/9 + 2/9 | Whitespace voids serve zone metaphor but look broken | 0% |

### Tier B: Moderate-Diagnostic (Found real but non-blocking issues)

| Rank | PA# | Question | What It Found | Notes |
|------|-----|----------|---------------|-------|
| 11 | PA-20 | Three-word personality | "Technical. Austere. Unfinished" -- 2/3 mismatch | Correctly identified "incomplete" as wrong personality |
| 12 | PA-44 | Sense metaphor without labels? | 40% survival rate -- announced not structural | True insight about metaphor quality |
| 13 | PA-10 | Squint test balanced? | "Vertical stick on canvas" at 1440 | Complementary to PA-09 |
| 14 | PA-47 | "Seen this before" scroll point | 30% depth -- no second-half surprises | Accurately located novelty decay |
| 15 | PA-34 | Transition: designed or empty space? | Zone 1->2 designed, all others void | Distinguished good vs bad transitions |
| 16 | PA-36 | Dramatic visual moment? | ONE at 10-20% scroll -- positioned too early | Correctly identified front-loading |
| 17 | PA-31 | Surrounding space designed or leftover? | Leftover at 1440, designed at 768 | Complementary to PA-30 |
| 18 | PA-43 | Same metaphor, less visual cost? | Multiple alternatives at 40-80% less cost | Actionable design alternatives |
| 19 | PA-48 | Rank among 5 options? | 4th of 5 -- "has merit, needs structural revision" | Useful calibration |
| 20 | PA-22 | User feel served or punished? | 768 served, 1440 punished | Viewport-specific quality signal |

### Tier C: Low-Diagnostic (Found minor or no issues on this page)

| Rank | PA# | Question | What It Found | Notes |
|------|-----|----------|---------------|-------|
| 21 | PA-17 | Visual rhythm? (CRITICAL) | "Metronomic not musical" -- content rhythm collapses | Correct but redundant with PA-09/35 |
| 22 | PA-41 | Patterns repeated 4+ times? (CRITICAL) | Feature table 9 rows borderline | Minor finding -- nesting saved diagrams |
| 23 | PA-11 | Margins generous or anxious? | "Anxious at all widths for different reasons" | Valid but dominated by void |
| 24 | PA-40 | Section spacing consistent? | Hyper-consistent (too consistent) | Interesting but not actionable |
| 25 | PA-21 | Designed for this width? | 768 yes, 1440 no | Redundant with PA-30 |
| 26 | PA-04 | Eye goes where first? | Header (correct), minor subtitle wobble | Pass with note |
| 27 | PA-08 | Squint to read? | Diagram labels only | Minor finding |
| 28 | PA-29 | Header text styles competing? | No -- clean 3-tier hierarchy | Pass |
| 29 | PA-46 | 768 reorganization sensible? | No reorganization (accidental success) | True but lower priority |
| 30 | PA-23 | What breaks 200px narrower? | Nothing above 700px | Pass |

### Tier D: No-Signal (Pass on this page, no issues found)

| PA# | Question | Result | Notes |
|-----|----------|--------|-------|
| PA-02 | Text uncomfortable to read? | PASS | Typography universally praised |
| PA-06 | Words stacking vertically? | PASS | No bento grid failure |
| PA-07 | Read longest paragraph? | PASS | Short paragraphs by design |
| PA-14 | Every column breathing room? | PASS (where content exists) | Table columns breathe well |
| PA-15 | Left edge positions? | 3 (original) / 4 (re-audit) | Both acceptable |
| PA-16 | Identical elements match? | PASS | Zone labels perfectly templated |
| PA-18 | Grays/neutrals same family? | PASS | Warm undertone throughout |
| PA-19 | Element from different website? | PASS | Everything belongs |
| PA-37 | 5+ competing elements? | PASS | Clear hierarchy in all containers |
| PA-38 | Clear reading order in callout? | PASS | YOU ARE HERE box exemplary |
| PA-39 | Header vs content ratio? | PASS | 75% content, 25% header |
| PA-45 | Good design moment to show? | YES -- architecture diagram | Universally praised |
| PA-26 | Convention causing visual problem? | YES -- zone system creating void | Adversarial-only, correct |
| PA-27 | Would you design it this way? | NO | Adversarial-only, correct |
| PA-28 | How to make terrible while passing rules? | Multiple strategies documented | Adversarial-only, reveals gaming |

### KEY INSIGHT: Spatial Questions Are King

The top 10 most diagnostic questions are overwhelmingly SPATIAL:
- PA-09, PA-33, PA-32, PA-30, PA-31 = direct spatial measurement
- PA-35, PA-12 = flow/pacing (spatial-over-time)
- PA-01 = open-ended but triggered spatial on this page
- PA-05 = composite but PA-05c (PROPORTIONATE) drove the failure
- PA-42 = metaphor-spatial intersection

**Typography and readability questions found almost nothing.** The page's typography was universally excellent. The catastrophe was spatial composition, not text treatment. This suggests the PA skill is over-weighted toward text readability and under-weighted toward spatial composition for pages that clear the basic readability bar.

---

## 2. PA Dimension Hit Rates

| Dimension | Auditor | Questions | Findings Found | Blocking Findings | Hit Rate |
|-----------|---------|-----------|---------------|-------------------|----------|
| **Spatial + Proportion** | Auditor C | PA-09,10,11,30,31,32,33 | 7/7 | 4 (PA-09,30,31,33) | 100% |
| **Flow + Pacing** | Auditor D | PA-12,13,34,35,36 | 5/5 | 3 (PA-12,35,34) | 100% |
| **Impression + Emotion** | Auditor A | PA-01,04,05,18,19,20,45 | 5/7 | 2 (PA-01,05) | 71% |
| **Responsive** | Auditor H | PA-21,22,23,46,47 | 4/5 | 1 (PA-47) | 80% |
| **Adversarial** | Adversarial | PA-26,27,28,48 | 4/4 | 2 (PA-26,48) | 100% |
| **Metaphor + Ideology** | Auditor G | PA-42,43,44 | 3/3 | 1 (PA-42) | 100% |
| **Consistency + Rhythm** | Auditor F | PA-16,17,40,41 | 2/4 | 0 | 50% |
| **Grid + Layout** | Auditor E | PA-14,15,37,38,39 | 2/5 | 0 | 40% |
| **Readability + Typography** | Auditor B | PA-02,06,07,08,29 | 1/5 | 0 | 20% |

**Conclusions:**
- Spatial + Proportion, Flow + Pacing, and Adversarial have 100% hit rate for genuine issues
- Readability + Typography has 20% hit rate -- the page's typography was excellent, so these questions found nothing
- Grid + Layout found issues only when they overlapped with spatial (PA-14 void counted as "breathing room" failure)
- Consistency + Rhythm found the metronomic/monotony issue but no blocking problems
- The DIMENSION assignment determines what gets found -- Spatial questions were perfectly calibrated for this page's failure mode

---

## 3. Why Mode 4 Caught What the Initial Audit Missed

### The Initial 07-VERDICT Audit (5 auditors, lighter methodology)

The initial lighter audit used: programmatic auditor + comparative auditor + 2 PAs + novelty assessor. It concluded "SUCCESS WITH CRITICAL CONTAINER VIOLATION" and scored PA-05 at 3/4.

**What it found:** Container width 2160px, header metadata illegibility, header proportions, border rendering artifact, token compliance at 86%, missing messaging.

**What it MISSED:** The catastrophic whitespace void (THE dominant perceptual failure).

### Why It Missed It -- 5 Specific Causes

**Cause 1: Playwright contention masked the void**
PA-2 in the initial audit encountered blank renders due to Playwright contention with 4-5 concurrent agents. These blank screens were dismissed as "rendering artifacts." But they were actually SHOWING the real page experience -- screens of nothing. The initial audit's recovery logic ("dismiss blank renders as contention artifact") prevented recognizing the void.

**Cause 2: Programmatic auditors can't see spatial failure**
The programmatic auditor verified: mechanisms deployed (14 -- check), token compliance (86% -- check), landmarks present (all -- check), heading spacing (2.0:1 -- check). None of these metrics capture "70% of scroll is blank." There is no programmatic metric for "does the scroll experience feel empty." The void is a PERCEPTUAL problem invisible to programmatic measurement.

**Cause 3: Two PAs insufficient breadth**
With only 2 perceptual auditors, there weren't enough independent perspectives to corroborate the void finding. PA-1 noted "header too heavy" and attributed proportional failure to the header, not the void. PA-2 saw blank screens but they were dismissed as contention artifacts. Mode 4's 9 auditors created 9 INDEPENDENT observations of the same void, making it undeniable.

**Cause 4: No spatial specialist**
The initial audit didn't assign auditors by dimension. Mode 4's dimension-specific assignment (Auditor C = Spatial, Auditor D = Flow) ensured questions like PA-09, PA-32, PA-33 were answered by auditors whose ENTIRE focus was spatial analysis. The initial audit's PAs answered spatial questions as part of a broader assessment, reducing depth.

**Cause 5: PA-05c failure was misattributed**
The initial audit's PA-05c PROPORTIONATE failure was attributed to "header too heavy." This is technically correct but masks the larger failure. Mode 4 revealed that header proportions were a minor issue compared to the catastrophic void. The initial audit stopped at the first proportional problem found ("header") and didn't investigate further.

### What Mode 4 Specifically Enabled

1. **9 independent cold looks (27 across viewports)** -- Critical mass for corroboration. 9/9 flagging the void makes it undeniable.
2. **Dimension-specialized auditors** -- Spatial specialist (Auditor C) spent all attention on spatial questions, producing the deepest analysis.
3. **Scroll-through protocol** -- Every auditor scrolled through the entire page at viewport scale, experiencing the void as users would. Full-page screenshots compress voids to invisible.
4. **Adversarial auditor** -- Specifically looked for rule-gaming and convention failures. Found the breathing-room convention was being gamed (max spacing everywhere).
5. **Metaphor auditor** -- Identified that the void SERVED the metaphor but at catastrophic perceptual cost (PA-42/43/44 analysis).
6. **No Playwright contention** -- Screenshot pre-capture pattern eliminated contention entirely.

### The Meta-Lesson

**The initial audit was optimized to catch MEASURABLE defects (container width, token compliance, border rendering). Mode 4 was optimized to catch PERCEPTUAL defects (spatial composition, visual momentum, scroll experience).**

The whitespace void is unmeasurable by any single metric. No CSS property is "wrong." No token is violated. No mechanism is missing. The page is technically correct and perceptually catastrophic. Only breadth-of-perspective (9 independent auditors) with depth-of-focus (dimension specialization) catches this category of failure.

---

## 4. Embedding PA-Level Scrutiny INTO the Build Process

### The Core Problem

PA is currently POST-HOC: build the page, then audit it, then discover it's catastrophic, then try to fix it (and fail, as the re-audit showed). This is wasteful and often unfixable -- spatial composition problems require structural changes, not CSS tweaks.

### The Solution: Three Embedded Checkpoints

#### Checkpoint 1: CONTENT AUDIT (Before Any CSS)

**When:** After content is assembled, before any styling begins.

**What to check:**
- Total content volume: Count headings, paragraphs, tables, diagrams, code blocks
- Content-to-zone ratio: Does each zone have enough content to justify its existence?
- Content distribution: Is content front-loaded, evenly spread, or back-loaded?
- Zone necessity: Do all planned zones have content? Eliminate empty zones.

**The Gate Question:** "If I laid this content out with zero styling in a single scrolling column, would a reader encounter significant blank regions?"

**Why this works:** The ceiling experiment's catastrophic failure was fundamentally a CONTENT problem, not a CSS problem. Zones 3-4 had structural containers but minimal content. No amount of CSS can fix absent content. The re-audit confirmed: "The fix treated a CONTENT problem as a SPACING problem. Reducing padding around empty zones still leaves empty zones."

**Binary rule:** EACH zone must contain >= 3 distinct content elements (heading + paragraph + one of: table, diagram, code block, callout). If any zone has fewer, restructure before proceeding.

#### Checkpoint 2: SPATIAL SKELETON CHECK (After layout, before polish)

**When:** After basic layout is in place (containers, grid, major sections positioned).

**What to check:**
- Full-page screenshot squint test (PA-10): blur vision, look at weight distribution
- Scroll-through at 1440px: count blank screens vs content screens
- Content-to-scroll ratio: what percentage of total scroll contains content?
- Designed moment placement: are visual peaks distributed across scroll, or front-loaded?

**The Gate Question:** "If I squint at the full-page screenshot, does the visual weight look distributed, or concentrated?"

**Void budget:** Content must fill >= 60% of total scroll height. No more than 2 consecutive viewport-height screens may be content-free.

**Binary rule:** Take a full-page screenshot. If the top 30% of the image contains all visible dark/dense areas and the bottom 70% is uniform light, STOP and restructure.

#### Checkpoint 3: SCROLL EXPERIENCE CHECK (After styling, before declaring done)

**When:** After all CSS is applied, before the build agent declares the page complete.

**What to check:**
- Scroll through at reading speed: does interest sustain or flatline?
- Footer reachability: can a user reach the footer without thinking the page broke?
- Transition quality: are zone transitions designed moments or empty gaps?
- Second-half surprises: is there anything visually interesting past the 50% scroll mark?

**The Gate Question:** "Would I keep scrolling past the midpoint, or assume the page is done?"

**Binary rule:** There must be at least ONE designed visual moment (diagram, dramatic table, visual treatment change) in each third of the scroll (top third, middle third, bottom third).

---

## 5. The Builder's PA: A 10-Question Self-Check

This is a simplified version of the 48-question PA that a builder agent runs after each major section. It takes ~60 seconds and catches the categories of failure that dominated both audits.

### THE BUILDER'S 10 (Run after each major section is built)

| # | Question | What It Catches | Source PA |
|---|----------|-----------------|----------|
| **B-01** | Does the section I just built have visible content filling its container, or is there significant empty space below the last element? | THE void problem | PA-09 |
| **B-02** | If I scroll from the previous section to this one, is the transition a designed moment (banner, visual shift, breathing space) or just a gap? | Undesigned transitions | PA-34 |
| **B-03** | Take a screenshot at 1440px. Does the content use the container width, or is it a narrow strip in vast emptiness? | Container utilization | PA-30 |
| **B-04** | Can I read all text at this scroll position without squinting? Is there any text too small or too low-contrast? | Basic readability | PA-02, PA-08 |
| **B-05** | Does this section contain at least one element that looks different from the previous section (different visual treatment, a diagram, a table, a callout)? | Visual monotony | PA-47 |
| **B-06** | Are all border weights, colors, and spacing values using design system tokens? | Token compliance | Guardrails |
| **B-07** | If I showed only this section to someone, could they tell what metaphor or concept drives the design? | Metaphor structural presence | PA-44 |
| **B-08** | Is the spacing between elements in this section consistent with spacing in the previous section? Does any gap feel dramatically different? | Spacing consistency | PA-40 |
| **B-09** | Does the container width measure 940-960px? | THE Phase D guardrail | Container check |
| **B-10** | After building this section, does my page still have visual interest distributed across its full scroll height, not concentrated at the top? | Weight distribution | PA-32 |

### Usage Protocol

1. Builder completes a major section (e.g., Zone 2 content)
2. Takes viewport screenshot at 1440px and 768px
3. Answers B-01 through B-10 in plain language
4. If B-01, B-03, B-09, or B-10 FAIL: STOP and fix before continuing
5. If any other question FAILS: note it, continue, but address before declaring done

### Why 10 Questions, Not 5

Five questions would miss either spatial distribution (which only becomes apparent as the page grows) or metaphor presence (which requires structural assessment). Ten questions cover:
- 3 spatial (B-01, B-03, B-10) -- the dominant failure category
- 2 flow/pacing (B-02, B-05) -- second most important
- 1 readability (B-04) -- basic hygiene
- 1 metaphor (B-07) -- ceiling/flagship specific
- 1 consistency (B-08) -- rhythm maintenance
- 1 compliance (B-06) -- token hygiene
- 1 guardrail (B-09) -- the non-negotiable

---

## 6. Original Audit vs Re-Audit: What Changed and What It Means

### Side-by-Side Comparison

| Dimension | Original Mode 4 | Re-Audit Mode 4 | Change |
|-----------|-----------------|-----------------|--------|
| **Whitespace void (dominant finding)** | 9/9 flagged, 70-80% void | 9/9 flagged, 70-80% void | IDENTICAL |
| **PA-05 overall** | 1.5/4 | 2.0/4 | +0.5 (marginal) |
| **PA-05a DESIGNED** | Partial pass | 1.5/4 | Marginal improvement |
| **PA-05b COHERENT** | Pass | 3.5/4 | Confirmed strong |
| **PA-05c PROPORTIONATE** | Fail | 0.5/4 | UNCHANGED (blocking) |
| **PA-05d POLISHED** | Pass with concerns | 2.5/4 | Minor polish gains |
| **Cold look NO count (1440)** | 2 | 7 | WORSE |
| **Header metadata** | SHOULD-FIX | RESOLVED | Fix worked |
| **Header proportions** | SHOULD-FIX | IMPROVED | Fix partially worked |
| **Diagram hierarchy** | MINOR | IMPROVED | Fix worked |
| **Metaphor structural** | 40% without labels | 35-45% | UNCHANGED |
| **Client ranking** | 4th of 5 | 4th of 5 | UNCHANGED |
| **WOULD-NOT-SHIP count** | 6 | 7 | WORSE |

### What the Fix Actually Achieved

The fix applied 40 CSS/HTML changes including:
- Spacing reduction (estimated 1,652px saved)
- Header metadata contrast increase (opacity 0.7->0.85, font-size increase)
- Header padding reduction (128px->72px)
- 5+ new designed moments added
- 4 new responsive breakpoints
- Zone indicator color progression
- Footer margin reduction (80px->32px)

**Of these 40 changes:**
- **1 definitively resolved:** Header metadata (auditors no longer flagged it)
- **2 improved:** Header proportions, diagram hierarchy
- **3 possibly improved but invisible:** Footer, horizontal space, visual monotony (buried under void)
- **3 unchanged:** Whitespace void, metaphor, italic rule

### What This Tells Us About Audit Reliability

**Finding 1: Consistent findings are highly reliable.**
The whitespace void was flagged by 9/9 auditors in BOTH the original and re-audit -- 18/18 independent observations. Consistent corroboration across two independent audit runs with different screenshot sets validates the finding beyond doubt.

**Finding 2: Re-audits catch process failures.**
The re-audit discovered that the fix's claimed content-to-void shift from 30:70 to 65:35 did not materialize. Either the fix was insufficient (1,652px savings on ~8,000px of void = still catastrophic) or there was a build/deployment error. Without the re-audit, the fix would have been declared successful based on its CSS changelog alone.

**Finding 3: CSS fixes cannot solve content problems.**
The re-audit's most important contribution is the root cause analysis: "The fix treated a CONTENT problem as a SPACING problem." The void isn't excessive padding -- it's empty zones with structural containers but no content. Reducing padding around empty containers makes the containers smaller but doesn't fill them.

**Finding 4: Marginal improvements register differently.**
Header improvements were noticed (+0.5 on DESIGNED, +0.5 on POLISHED). But the void dominates perception so completely that even genuine improvements in other dimensions barely register. This means: FIX BLOCKING ISSUES FIRST, then polish.

**Finding 5: Cold look verdicts can WORSEN after a "fix."**
Original audit: 2 NO verdicts at 1440px. Re-audit: 7 NO verdicts. This is likely because:
- Re-audit auditors may have been primed to look harder (hearing "this was fixed")
- The void becomes MORE frustrating after being told it was addressed
- Auditor expectations shifted: they expected improvement, got the same experience

### Implications for Audit Methodology

1. **Never declare a fix successful based on CSS changelog alone.** Always re-audit visually.
2. **Single-pass fixes are unreliable for structural problems.** The fix reduced spacing but didn't add content.
3. **Root cause analysis must precede fixing.** Is this a SPACING problem or a CONTENT problem? The answer determines the fix strategy.
4. **Re-audits with fresh eyes are essential.** Even knowing about the fix, 9/9 re-audit auditors independently confirmed the void was unchanged.

---

## 7. Metacognitive Lessons About Auditing Methodology

### Lesson 1: Breadth of Perspective is THE Key Value of Mode 4

9 auditors catch what 2 PAs miss. The whitespace void was THE dominant finding (9/9 in both audits) but the initial 2-PA audit missed it entirely. This isn't because 2 PAs were incompetent -- it's because:
- PA-1 attributed proportional failure to the header (correct but incomplete)
- PA-2 saw blank screens but they were dismissed as Playwright artifacts
- Neither PA had enough context to recognize "70% void" as distinct from "header too heavy"

With 9 auditors, the void becomes undeniable through sheer corroboration. Any ONE auditor could be wrong. NINE cannot all hallucinate the same finding.

**Rule:** For blocking quality decisions (ship/no-ship), always use Mode 4 (9 auditors). Mode 2/3 is suitable for progress checks but not final quality gates.

### Lesson 2: Dimension Specialization Produces Depth

Auditor C (Spatial) produced the deepest spatial analysis in the entire project. Their 195-line report on PA-09/10/11/30/31/32/33 was more thorough than any previous spatial assessment because their ENTIRE attention was on spatial questions. No distraction from typography, metaphor, or responsiveness.

**Rule:** Assign auditors by dimension, not by question count. Each auditor should own ONE perceptual dimension.

### Lesson 3: The Adversarial Auditor Finds What Others Protect

Both original and re-audit adversarial auditors produced the most actionable findings:
- "This is a developer README that someone put in a nice font" (re-audit adversarial)
- "The rules don't protect against structural emptiness" (original adversarial)
- "Convention-shaped, not intention-shaped" (original adversarial)
- "Vocabulary of sophistication, structure of incompletion" (re-audit adversarial)

The adversarial auditor's role -- explicitly looking for weakness, gaming, and fragility -- produces insights that supportive dimensions miss because they're focused on "what works" not "what breaks."

**Rule:** Always include an adversarial auditor. Their PA-26/27/28 findings often identify the root cause that other auditors describe the symptoms of.

### Lesson 4: Fresh Eyes Are Non-Negotiable

The initial 07-VERDICT audit had context about the build plan, mechanism count, and metaphor intention. This context PROTECTED the page: "the void is intentional spacing compression" was a plausible excuse. Mode 4 auditors had ZERO context -- they saw void and called it void.

**Rule:** Perceptual auditors must NEVER see the build plan, mechanism list, or metaphor description before auditing. Context enables rationalization. Ignorance enables perception.

### Lesson 5: Programmatic and Perceptual Audits Find Different Failure Categories

| Failure Category | Programmatic Catches | Perceptual Catches |
|-----------------|---------------------|-------------------|
| Token violations | YES | NO |
| Container width (numerical) | YES | PARTIALLY (describes narrow column) |
| Soul violations | YES | NO |
| Spatial composition | NO | YES |
| Visual momentum | NO | YES |
| Metaphor quality | NO | YES |
| Typography comfort | NO | YES |
| Heading spacing ratio | YES | NO |

They are COMPLEMENTARY, not redundant. The ceiling experiment needed BOTH to produce a complete picture. Programmatic found the container specification issue; perceptual found the void.

**Rule:** Always run BOTH programmatic and perceptual audits. Neither alone is sufficient.

### Lesson 6: The Scroll-Through Protocol is Essential

Full-page screenshots compress the void to invisibility. At thumbnail scale, a 22,000px page looks fine -- the void is a light band that could be "breathing room." At viewport scale (scrolling through one screenful at a time), the void becomes 24 consecutive blank screens that dominate the experience.

The scroll-through protocol (take viewport-sized screenshots at 80% scroll increments, examine EACH one individually) is what enables Mode 4 to catch what full-page screenshots miss.

**Rule:** NEVER assess spatial composition from full-page screenshots alone. Always use viewport-scale scroll-through.

### Lesson 7: The Lock Sheet is Critical but Must Follow Perception

The lock sheet (sovereignty classification: always-locked, locked, challengeable) prevented auditors from attacking soul decisions while enabling them to attack builder choices. This is the correct hierarchy: soul is non-negotiable, but spacing values are fair game.

However, the lock sheet must be provided AFTER cold looks are locked. The re-audit used the same temporal firewall as the original: auditors react first, classification happens after. This prevents "I know this is locked, so I won't flag it" rationalization.

**Rule:** Maintain the temporal firewall. Cold looks and PA answers FIRST, lock sheet classification SECOND.

---

## 8. PA Skill Restructuring Recommendations

### Changes Based on Empirical Evidence

#### ADD: Spatial Composition Gate Questions (New PA-50 through PA-53)

The existing PA questions are sufficient to IDENTIFY spatial failure but don't QUANTIFY it. Add:

| New PA# | Question | Why Needed |
|---------|----------|-----------|
| PA-50 | Scroll through the full page. How many full-viewport screens are completely empty (no content, just background)? | Directly quantifies the void. Current PA-09 asks "is there dead space?" but doesn't measure scale. |
| PA-51 | What percentage of the total scroll contains actual content? Estimate: 90%+, 70-90%, 50-70%, 30-50%, or <30%? | Forces numerical estimate of content-to-void ratio. This page would score "<30%" and be instantly flagged. |
| PA-52 | Is there a designed visual moment (diagram, treatment change, visual peak) in each third of the scroll? Mark which thirds have one: TOP / MIDDLE / BOTTOM | Catches front-loading. This page would score "TOP only" revealing the problem. |
| PA-53 | At 1440px, what percentage of the viewport WIDTH does the content actively use? Estimate: 90%+, 70-90%, 50-70%, 30-50%, or <30%? | Catches the "narrow column in vast emptiness" that PA-30 describes qualitatively. |

#### MODIFY: PA-17 and PA-41 Elevation for All Tiers

Currently: "CEILING-TIER ELEVATION: For Ceiling-tier and above audits, PA-17 and PA-41 are de facto CRITICAL questions."

**Change to:** Elevate PA-17 and PA-41 to critical for ALL tiers at or above Middle. The metronomic rhythm problem is not ceiling-specific -- it emerged from the Middle experiment's uniformity too. PA-17 should be Tier 1 Mandatory, not Tier 2 Standard.

#### MODIFY: PA-09 Severity Calibration

PA-09 asks "Is there dead space serving no purpose?" but doesn't distinguish between:
- Minor dead zones (some extra margin, not ideal) = COULD-BE-BETTER
- Moderate dead zones (one section with too much spacing) = LOOKS-WRONG
- Catastrophic dead zones (70%+ of scroll is blank) = WOULD-NOT-SHIP

**Add severity calibration language:**
- 1-2 empty viewport-screens: LOOKS-WRONG
- 3-5 empty viewport-screens: WOULD-NOT-SHIP
- 6+ empty viewport-screens: CATASTROPHIC (blocking, requires structural restructuring not CSS fixes)

#### MODIFY: PA-05c PROPORTIONATE Sub-Criteria

Current PA-05c only says: "Look for: content-to-viewport ratio 65-80%, breathing room at major sections, no dead zones or cramping."

**Expand to explicitly separate:**
- **Horizontal proportion:** Does the content use the container width effectively?
- **Vertical proportion:** Is visual weight distributed across the scroll, not concentrated?
- **Breathing proportion:** Is negative space designed (intentional pauses) or abandoned (content ran out)?

All three must pass for PA-05c to pass. This prevents the initial audit's error of attributing PA-05c failure to header weight alone when the real failure was vertical void.

#### REMOVE: PA-03 (Redundant with PA-05b)

PA-03 ("Does this feel like one designer made it, or three?") is redundant with PA-05b COHERENT ("Does this feel like one designer made it, or vocabulary from multiple systems?"). Both produced identical PASS results. PA-05b is more specific and actionable. Remove PA-03 to reduce auditor load.

#### ADD: Mode 4 Pre-Capture Protocol Enhancement

The PA skill already documents the screenshot pre-capture pattern. Formalize it as mandatory:

**Before spawning auditors:**
1. Team lead takes ALL screenshots at ALL viewports (cold look + full scroll-through)
2. Save to files with systematic naming
3. Auditors receive screenshots via Read tool, never touch Playwright
4. This eliminates contention entirely and enables 9+ parallel auditors

**Evidence:** Mode 4 used 102 screenshots with 9 parallel auditors and zero contention. The initial audit's 2 PAs had Playwright contention that produced blank renders AND was misdiagnosed.

#### ADD: Root Cause Classification Protocol

When findings are identified, the synthesizer should classify root cause:

| Root Cause Type | Definition | Fix Strategy |
|----------------|------------|-------------|
| **CONTENT** | Not enough content to fill structural containers | Add content or remove containers. CSS fixes useless. |
| **SPACING** | Too much/too little CSS spacing between elements | Adjust padding/margin values. |
| **STRUCTURAL** | Wrong page architecture (too many zones, wrong layout) | Restructure information architecture. |
| **EXECUTION** | Correct design, poor CSS implementation | Fix CSS to match design intent. |
| **METAPHOR** | Metaphor creating perceptual cost exceeding benefit | Modify metaphor expression or choose different metaphor. |

The ceiling experiment's void was misclassified as SPACING (fix strategy: reduce padding) when it was actually CONTENT (fix strategy: add content or remove empty zones). This misclassification caused the fix to fail.

#### ADD: Guardrail for Maximum Void

Current guardrails include:
- Content-to-viewport ratio: 44% minimum
- Section vertical spacing: 48px minimum to 160px maximum
- Content-to-space ratio: 50/50 minimum content

**Add explicit void guardrail:**
- **Maximum consecutive blank space:** 1.5 viewport heights (no more than 1.5 screens of content-free scrolling at any point)
- **Minimum content coverage:** 60% of total scroll height must contain visible content
- **Visual weight distribution:** No more than 70% of total visual weight (dark/dense areas visible in squint test) may be concentrated in the first 30% of scroll

These guardrails would have flagged the ceiling page as BLOCKING before any perceptual audit.

---

## Summary: The 5 Most Important Lessons

**1. Spatial composition is the dominant failure mode, and current PA questions catch it but don't prevent it.** Embed spatial checks INTO the build process, not just in post-hoc audits. The Builder's 10 self-check (Section 5) addresses this.

**2. Mode 4 (9 auditors) catches what lighter audits miss, and the investment is justified for ship/no-ship decisions.** The void was invisible to 2 PAs but undeniable to 9. Use Mode 4 for final quality gates.

**3. CSS fixes cannot solve content problems.** Root cause classification must precede fixing. Ask: "Is this a spacing problem or a content problem?" before writing any CSS.

**4. The PA skill needs 4 new spatial quantification questions (PA-50 through PA-53), severity calibration for PA-09, and expanded PA-05c sub-criteria.** Current questions identify problems qualitatively but don't quantify severity.

**5. Build-embedded checkpoints (Content Audit, Spatial Skeleton Check, Scroll Experience Check) would catch the ceiling page's catastrophic failure BEFORE the build was complete, saving the entire fix-and-re-audit cycle.**

---

**REPORT COMPLETE**
**Total source material analyzed:** ~4,200 lines across 22 documents
**Deliverable:** 8 sections answering all 8 task questions
**Key recommendation:** Embed PA-level scrutiny INTO the build via 3 checkpoints + Builder's 10 self-check

# Pipeline PA Enrichments -- Extracted from 9 Auditor Reports
## V3 Gas Town PA Analysis
Date: 2026-02-24
Source: p3b-pa-auditor-A.md through p3b-pa-auditor-I.md, pa-deployment.md, pa-questions.md

---

## 1. DPR BUG IMPACT PER AUDITOR

The "catastrophic whitespace void" (content hidden by scroll-triggered animations/opacity) dominated every single auditor's report. Here is how each handled it:

| Auditor | Void Treatment | Questioned Screenshot Validity? | Impact on Scoring |
|---------|---------------|--------------------------------|-------------------|
| **A** | Treated void as structural failure. Reported 16 blank viewports at 1440px. | NO -- treated blank screenshots as accurate page state. | PA-05: 1/4 FLAT. Said visible content alone would be 2.5-3/4. |
| **B** | Treated void as dominant finding. Cross-referenced full-page to confirm content exists. | PARTIALLY -- noted "if this is a screenshot artifact... would be PASS" but did not formally question methodology. | PA-05d cross-val: CONDITIONAL PASS (undermined by void). |
| **C** | Treated void as rendering failure. 16 consecutive blank viewports counted precisely. | NO -- accepted blanks at face value. | PA-05c cross-val: FAIL (2/3 vertical thirds void). |
| **D** | Treated void as DOM-present-but-invisible content. Speculated scroll animations as cause. | YES -- explicitly hypothesized "scroll-triggered animations (opacity: 0 by default)" as root cause. Recommended disabling `opacity: 1 !important; visibility: visible !important`. | Scored visible content positively but all flow questions CONDITIONAL. |
| **E** | Most sophisticated diagnosis. Identified DPR animation dependency as probable cause. | YES -- "sections that depend on scroll-triggered visibility transitions never become visible. The full-page screenshot likely forces a paint of all elements regardless of animation state." | Acknowledged cannot rate full page. Visible 25% rates well. |
| **F** | Treated void as "either catastrophic whitespace void or screenshot-capture issue." | PARTIALLY -- acknowledged the ambiguity but scored based on what was visible. | PA-05a cross-val: FAIL (insufficient visible composition). |
| **G** | Accepted void exists, used full-page screenshot as supplementary evidence. | PARTIALLY -- listed 3 possible causes (CSS visibility, JS observer, opacity). Based metaphor analysis on BOTH scroll-visible and full-page evidence. | PA-05b cross-val: CONDITIONAL PASS. |
| **H** | Treated void as dominant failure across all 3 viewports. Most thorough cross-viewport void documentation. | NO -- accepted blanks as accurate. Noted screen-reader desync concern. | All viewports: "PUNISHED." |
| **I** | Treated void as rendering bug. Most definitive diagnosis: "fix the rendering bug, then re-audit." | YES -- "Content IS in the DOM. It is rendering in a non-scrolling full-page capture. But it is INVISIBLE during interactive scrolling." | PA-48: LAST CHOICE (current), 2nd-3rd CHOICE (if fixed). |

### Key Finding: NO auditor formally questioned whether the screenshot PROTOCOL was at fault.

Every auditor treated the blank screenshots as evidence of a page defect. None asked: "Was `animation: none !important; opacity: 1 !important` actually applied before scrolling?" The pa-deployment.md protocol (Section 2.2, Step 3) explicitly requires disabling animations BEFORE the scroll-through. If this step was executed correctly and content was still hidden, the page has a CSS bug beyond `animation`. If this step was NOT executed (or was executed incompletely), the screenshots are unreliable.

**3 auditors (D, E, I) correctly identified the mechanism** (scroll-triggered opacity/visibility). But none took the next logical step: "If this is a known class of rendering bug caused by opacity:0 + IntersectionObserver, the PA protocol should include `opacity: 1 !important; visibility: visible !important` as standard pre-capture overrides, not just `animation: none !important`."

---

## 2. EXPERIENTIAL GAP EVIDENCE: ATTENTIONAL TUNNELING

### 2.1 The Void Absorbed All Attention

Every auditor spent 40-60% of their report discussing the whitespace void. This is appropriate given its severity, but it created massive attentional tunneling:

| Auditor | % of Report on Void | What They MISSED Because of Void Focus |
|---------|---------------------|---------------------------------------|
| A | ~50% | Did not evaluate any content beyond Section 03. Could have used full-page screenshot to assess more. |
| B | ~35% | Mild. Still provided thorough typography analysis of visible content. |
| C | ~55% | All spatial questions collapsed to "void prevents assessment." Lost nuance on breathing/proportion within visible sections. |
| D | ~40% | Diagnosed cause well. But flow/pacing analysis was truncated -- all "CONDITIONAL" because of void. |
| E | ~30% | BEST at resisting tunneling. Provided detailed grid analysis of visible content AND used full-page for supplementary observations. |
| F | ~45% | Rhythm analysis severely curtailed. Only 30% of page assessable. |
| G | ~40% | Metaphor analysis partially saved by using full-page screenshot as evidence. Only auditor to systematically use full-page as a data source for their domain. |
| H | ~50% | Responsiveness analysis dominated by "all viewports punished." Cross-viewport comparison was thin because the comparison material was identical (all blank). |
| I | ~35% | Adversarial analysis was strong despite void. PA-28 (fragility) analysis was excellent and void-independent. |

### 2.2 The Complexity Ladder Chart: Missed Legibility Finding

**PA-02 (Auditor B) and PA-08 (Auditor B)** both flagged the chart's illegible labels. **PA-42 (Auditor G)** flagged the diagram containers as oversized. **PA-43 (Auditor G)** said the chart could communicate at "30% of visual cost."

But NO auditor asked the fundamental question: **"Is this chart a raster image or an HTML/SVG element?"** If it is a raster image (which PA-73/Auditor H hinted at with alt-text concerns), then the illegibility is a content production problem, not a CSS problem. The PA protocol does not equip auditors to distinguish between CSS-fixable issues and content-authoring issues.

### 2.3 Question-Induced Tunnel Vision

| Auditor | Questions That Caused Tunneling | Evidence |
|---------|-------------------------------|----------|
| C | PA-50 (blank viewport count) + PA-51 (density) + PA-33 (silence vs signal) | Three questions all probe the same void phenomenon. C answered all three with essentially the same finding. Redundant work. |
| D | PA-12 (flow) + PA-35 (interest) + PA-52 (thirds) | All three collapse to "content stops at scroll-05." Three questions, one answer. |
| H | PA-22 (served/punished) at 3 viewports | Same verdict (PUNISHED) x3. The question protocol requires separate per-viewport answers but all three say the same thing when the defect is viewport-independent. |

---

## 3. QUESTION EFFECTIVENESS ANALYSIS

### 3.1 Questions That Generated Unique, Useful Findings

| Question | Auditor | Why Useful |
|----------|---------|-----------|
| PA-28 (fragility) | I | Identified the palette's zero-redundancy fragility. This is actionable design feedback independent of any bug. |
| PA-45 (showpiece moment) | A | Identified the Yegge blockquote as the single best composed moment. Specific, positive, and useful for understanding what works. |
| PA-55 (adjacent section diff) | B | Confirmed section variation IS perceptible -- a positive finding that would have been easy to miss amid void-dominated reports. |
| PA-63 (component echo/adapt) | E | Detailed analysis of blockquote adaptation (red vs purple, standalone vs labeled). High-quality compositional intelligence finding. |
| PA-15 (left-edge positions) | E | Precise grid discipline analysis: 3 positions, one dominant. Actionable and specific. |
| PA-77 (hierarchy levels) | B | Identified 5 distinct levels. Clear, positive, useful for understanding the type system. |
| PA-67 (novelty beyond competence) | A | Named two genuine surprises (purple accent, density labels on TOC). Content-specific finding. |
| PA-73 (accessibility) | H | Identified screen-reader/visible-content desync as the most severe accessibility issue. Novel finding not captured by any other auditor. |
| PA-62 (transition variation) | D | Counted 5-shift dramatic + 3-shift moderate + 2-shift quiet transitions. Quantitative, useful, specific. |

### 3.2 Questions That Generated Noise (Same Answer Everywhere)

| Question | Problem | Recommendation |
|----------|---------|---------------|
| PA-50 (blank viewport count) | Overlaps with PA-09 (dead space) and PA-51 (density characterization) when a catastrophic void exists. All three get the same answer. | DEDUPLICATE: When PA-50 detects >3 consecutive blank viewports, auto-skip PA-09 and PA-51 as already answered. Or merge them into a single "Void Severity Assessment" composite question. |
| PA-52 (designed moments per third) | Overlaps with PA-32 (visual weight distribution) when void is present. | CONDITIONAL: If PA-50 finds catastrophic void, PA-52 and PA-32 answers should be combined. |
| PA-22 per viewport | When the defect is viewport-independent (like a void), answering separately for 1440/1024/768 is redundant. | ADD GUIDANCE: "If the finding is identical across viewports, state the finding once and note 'identical at all viewports' rather than repeating." |
| PA-68 (metaphor persistence) | Cannot be answered when 75% of content is invisible. G answered "FAIL / UNABLE TO VERIFY." | ADD PROTOCOL: If >50% of content is invisible, PA-68 should be answered "BLOCKED BY VISIBILITY DEFECT" with a note to re-audit after fix, not scored. |

### 3.3 Questions Where Every Auditor Agreed (Potentially Trivial)

| Finding | Auditors Agreeing | Implication |
|---------|-------------------|-------------|
| "Whitespace void is catastrophic" | 9/9 | Not trivial -- just unanimous on an obvious defect. This validates the protocol: 9 independent observers converge on the same critical issue. |
| "Visible content is well-designed" | 9/9 | Every auditor praised the first 25% of the page. This IS potentially trivially obvious -- the opening is professionally executed. But it is useful because it isolates the problem to the void, not the design language. |
| "PA-04: Eye goes to title first, which is correct" | 1/1 (A only) | Only one auditor answers PA-04. |

### 3.4 Questions That Were NEVER Asked But Should Have Been

1. **"Is the full-page screenshot consistent with the scroll-through screenshots?"** -- No question requires auditors to cross-reference the full-page capture with scroll-throughs. Every auditor who used the full-page noted the discrepancy voluntarily. This should be a MANDATORY check.

2. **"Does the page length match your expectation from the TOC?"** -- The Settlement Map promises 12 sections. The scroll delivers 3. No question explicitly asks auditors to compare structural promises against delivered content.

3. **"Is there a progressive-disclosure or scroll-animation mechanism at work?"** -- 3 auditors diagnosed this independently. The question should be standard so ALL auditors address it.

---

## 4. ROUTING EFFECTIVENESS

### 4.1 Question Load Balance

| Auditor | Assigned | Answered | Load Assessment |
|---------|----------|----------|----------------|
| A | 9 | 9/9 | APPROPRIATE. High-value questions, manageable count. |
| B | 8 | 8/8 (incl cross-val) | APPROPRIATE. Clean, focused domain. |
| C | 11 | 11/11 (incl cross-val) | OVERLOADED. 11 questions is the highest count. Several collapsed to the same void-finding, creating redundant work without additional insight. |
| D | 11 | 11/11 | OVERLOADED but handled well. Multiple questions converged on the same flow/void finding. |
| E | 6 | 6/6 | LIGHT. Could have handled 2-3 more. Highest signal-to-noise ratio of all auditors. |
| F | 6 | 6/6 (incl cross-val) | LIGHT. Rhythm analysis was severely constrained by void. Could have been assigned more visible-content questions. |
| G | 7 | 7/7 (incl cross-val) | APPROPRIATE. Good match between metaphor questions and auditor capability. |
| H | 5 | 5/5 | LIGHT. Responsiveness domain was severely impacted by viewport-independent void. Most per-viewport questions collapsed to identical answers. |
| I | 6 | 6/6 | APPROPRIATE. Adversarial questions were void-resistant -- PA-28 produced excellent findings regardless of the bug. |

### 4.2 Routing Mismatches

| Issue | Details |
|-------|---------|
| **C overloaded with void-dominated questions** | PA-09, PA-50, PA-51, PA-33 all ask about the same spatial defect. C spent most of the report saying "void" in different ways. Reassign PA-50 to the Integrative Auditor (gestalt impressions can include void assessment) or create a COMPOSITE void assessment that replaces individual void questions when PA-50 > 3. |
| **H under-utilized when defect is viewport-independent** | 3 of H's 5 questions require cross-viewport comparison. When the dominant defect is identical at all viewports, H's cross-viewport analysis becomes "same at all widths." The routing was correct in theory but the defect eliminated H's differential value. |
| **E's domain was least affected by the void** | Grid/layout analysis of visible content was productive. E had the best report quality relative to constraints. E's domain (structural analysis) is void-resistant because it can assess the EXISTING content. Future routing should give E MORE questions or broader scope when a void is detected. |
| **I's adversarial questions were MOST void-resistant** | PA-28 (fragility analysis) produced the audit's most actionable design insight completely independent of the void. PA-27 (design from scratch) and PA-48 (ranking) also worked well despite the bug. Adversarial questions should be prioritized when catastrophic defects are present because they generate useful findings regardless. |

---

## 5. PA PROTOCOL IMPROVEMENTS

### PE-001: Add Visibility Override to Screenshot Pre-Capture Protocol
**Severity:** BLOCKING
**Target file:** `pa-deployment.md`, Section 2.2 Step 3
**Current:** `animation: none !important; opacity: 1 !important;`
**Proposed change:** Expand CSS override to:
```css
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}
```
**Rationale:** The current override disables CSS animations but does NOT override: (a) `opacity: 0` set as a default state waiting for JS triggers, (b) `visibility: hidden` on sections, (c) `transform: translateY(...)` that positions content off-screen. All 3 auditors who diagnosed the V3 void identified these as probable causes. The protocol must preemptively override ALL visual-hiding mechanisms.

### PE-002: Add Full-Page vs Scroll Cross-Reference as Mandatory Check
**Severity:** SIGNIFICANT
**Target file:** `pa-deployment.md`, new Section 2.5 (or append to 2.4)
**Proposed change:** Add a mandatory protocol step after scroll-through capture:
> **Step 5: Cross-Reference Check.** Compare the full-page screenshot with the scroll-through sequence. If the full-page shows content that is NOT visible in the scroll-through, the pre-capture CSS overrides failed. REPEAT the pre-capture step with expanded overrides before proceeding to auditor deployment. Do NOT deploy auditors on screenshots with hidden content.
**Rationale:** All 9 auditors encountered blank screenshots AND a full-page showing content. None had protocol authority to halt the audit and request re-capture. This step would have caught the V3 bug before any auditors were deployed, saving 9 agent-runs worth of effort spent analyzing a broken capture.

### PE-003: Add "BLOCKED BY DEFECT" Scoring Option for Auditors
**Severity:** SIGNIFICANT
**Target file:** `pa-questions.md`, add to Section 1 preamble
**Proposed change:** Add guidance:
> **BLOCKED BY DEFECT Protocol:** If a catastrophic defect (e.g., >50% of content invisible, entire page blank, fatal rendering error) prevents meaningful assessment of a question, answer "BLOCKED BY DEFECT -- [defect name]" instead of forcing a YES/NO/CONDITIONAL answer. This prevents auditors from spending analysis time on questions that cannot be meaningfully assessed. The Weaver should tally BLOCKED questions separately from scored questions.
**Rationale:** Auditors C, D, F, G, H all spent significant report space explaining WHY they could not answer questions properly. The current protocol forces them to provide a verdict even when the question is unanswerable, leading to pseudo-answers ("CONDITIONAL -- but only for visible content") that dilute the signal.

### PE-004: Deduplicate Void-Related Questions Under Catastrophic Conditions
**Severity:** MODERATE
**Target file:** `pa-questions.md`, Sections 3.2 and 3.6
**Proposed change:** Add a conditional routing rule:
> **Void Collapse Rule:** If PA-50 detects >= 3 consecutive blank viewports, the following questions are AUTO-ANSWERED from PA-50's findings: PA-09 (dead space = YES), PA-51 (density = VOID-DOMINATED), PA-33 (silence vs signal = DROPPED SIGNAL). Auditor C need only answer PA-50 in full detail, then reference that answer for the collapsed questions. This saves ~30% of C's analysis time under catastrophic void conditions.
**Rationale:** Auditor C answered PA-09, PA-50, PA-51, and PA-33 with nearly identical content. Under normal conditions these questions probe different phenomena, but under catastrophic void they collapse to one finding.

### PE-005: Add "Content Promise vs Delivery" Question
**Severity:** MODERATE
**Target file:** `pa-questions.md`, Section 3.6 (Void Prevention) or Section 3.2 (Tier 2)
**Proposed new question:**
> **PA-54: Does the page deliver on its structural promises?** Count navigational elements that promise content (TOC entries, section numbers, tabs, progress indicators). How many of these promises are fulfilled by visible, scrollable content? If < 80% are fulfilled, flag as STRUCTURAL PROMISE VIOLATION.
**Rationale:** The Settlement Map promises 12 sections. The scroll delivers 3. No current PA question captures this specific failure mode. PA-13 (clear visual ending) partially addresses it, but PA-54 would catch promise-delivery gaps even when the page does have an ending (e.g., a footer exists but 8 of 12 promised sections are missing).

### PE-006: Add Image-vs-CSS Distinction Guidance for Auditors
**Severity:** MODERATE
**Target file:** `pa-questions.md`, Appendix or Section 3.2 alongside PA-08
**Proposed change:** Add guidance note:
> **Image Content Note:** When flagging legibility issues in charts, diagrams, or visualizations, note whether the problematic element appears to be a raster image (photograph-like, uniform quality regardless of zoom) or an HTML/CSS/SVG element (text remains sharp at any zoom). Raster image legibility is a CONTENT PRODUCTION issue (fix at source), while HTML/CSS element legibility is a STYLING issue (fix with CSS). This distinction helps the remediation team route fixes correctly.
**Rationale:** Auditors B, G, H, and I all flagged chart/diagram legibility. None identified whether these were images or styled HTML. The distinction matters for fix routing.

### PE-007: Expand H's Cross-Viewport Protocol with Defect-Bypass
**Severity:** MODERATE
**Target file:** `pa-deployment.md`, Section 1.2.1
**Proposed change:** Add to cross-viewport comparison requirements:
> **Defect Uniformity Note:** If a defect is identical across all viewports (e.g., same void at all widths), Auditor H should state this ONCE and redirect remaining analysis time to viewport-SPECIFIC differences in the NON-defective content. Example: "The void is identical at all widths. In the visible content, 768px shows Section 03 while 1440px does not -- evaluating this differential in detail."
**Rationale:** H spent most of the report saying "PUNISHED" three times. The useful finding (768px shows more content before the void) was buried as a minor observation. Redirecting H to differential analysis of the non-defective zone would improve signal.

### PE-008: Add Adversarial Question Prioritization Under Catastrophic Defects
**Severity:** LOW
**Target file:** `pa-deployment.md`, Section 1.2 (auditor assignments)
**Proposed change:** Add note:
> **Catastrophic Defect Priority:** When a catastrophic rendering defect affects >50% of content, Auditor I's adversarial questions (PA-28, PA-27, PA-48) become HIGHEST PRIORITY because they generate actionable design feedback independent of the defect. The Weaver should weight I's findings more heavily in the verdict under these conditions.
**Rationale:** I's PA-28 analysis (palette fragility, zero redundancy, load-bearing design choices) was the most actionable non-void finding in the entire audit. Adversarial questions are inherently void-resistant because they ask about design decisions and fragility, not rendering fidelity.

### PE-009: Add Orchestrator Validation Gate Before Auditor Deployment
**Severity:** SIGNIFICANT
**Target file:** `pa-deployment.md`, new Section 2.6 (before Section 3)
**Proposed change:** Add a validation gate:
> **Pre-Deployment Validation Gate:** Before spawning any PA auditors, the orchestrator MUST verify:
> 1. Content is visible in scroll-through screenshots (not just full-page capture)
> 2. No more than 2 consecutive scroll screenshots are blank at any viewport
> 3. The number of scroll screenshots with >30% content matches the expected section count from the page's own navigation (if present)
>
> If ANY check fails: DO NOT deploy auditors. Fix the pre-capture CSS overrides and re-capture. Deploying auditors on broken screenshots wastes 9 agent-runs and produces void-dominated reports with minimal design signal.
**Rationale:** The V3 audit deployed 9 Opus agents, each of which spent 30-60% of their analysis on the void. If the orchestrator had validated screenshots before deployment, the capture could have been fixed in minutes. Cost: ~9 wasted agent runs plus weaver analysis of void-dominated reports.

### PE-010: Add PA-05 "Hypothetical" Score Protocol for Auditor A
**Severity:** MODERATE
**Target file:** `pa-questions.md`, Section 1.3 (PA-05 Scoring) or `pa-deployment.md`, Auditor A instructions
**Proposed change:** Add to PA-05 scoring guidance:
> **Hypothetical Score:** When a BLOCKING defect (e.g., catastrophic void, missing sections, rendering failure) prevents clean scoring, Auditor A should provide TWO scores: (1) the actual PA-05 score based on the page as experienced, and (2) a HYPOTHETICAL PA-05 score for the visible/working content, clearly labeled "(hypothesis)." This gives the remediation team a target: if they fix the BLOCKING defect, what PA-05 score should the page achieve?
**Rationale:** Auditor A scored PA-05 = 1/4 FLAT but noted "the visible content earns better -- perhaps 2.5-3 if the void were fixed." This hypothetical score is extremely valuable for remediation prioritization but was provided informally. Making it a formal protocol element ensures it is always captured.

### PE-011: Add Screenshot Count Validation to Deployment Protocol
**Severity:** LOW
**Target file:** `pa-deployment.md`, Section 2.1.1 (Expected Screenshot Count)
**Proposed change:** Add validation rule:
> **Blank Screenshot Threshold:** After capture, count the number of entirely blank screenshots per viewport. If blank screenshots exceed 20% of total scroll screenshots at ANY viewport, the capture is SUSPECT. Cross-reference with full-page capture before proceeding.
**Rationale:** At 1440px, 16/21 screenshots (76%) were blank. At 768px, 13/18 (72%). A simple percentage check would have flagged this immediately.

---

## 6. PATTERNS ACROSS AUDITORS

### 6.1 Universal Agreements (9/9)

1. **The whitespace void is catastrophic and page-breaking.** Zero disagreement. All 9 auditors independently identified the void and rated it BLOCKING.

2. **The visible content (first 25%) is well-designed.** All 9 auditors praised the header, metadata cards, section transitions, blockquotes, and typography hierarchy in the content that rendered.

3. **The full-page screenshot shows content exists below the void.** All auditors who reviewed the full-page (all 9) noted the discrepancy.

4. **The Settlement Map with density labels is a good navigational component.** Auditors A, B, E, F, G, I all specifically praised it. No auditor criticized it.

5. **The Yegge blockquote is the single best composed moment.** Auditors A (explicitly), B, D, E, F all identified it as a design highlight. Zero negative mentions.

### 6.2 Near-Universal Agreements (7-8 of 9)

6. **The chart/diagram legibility is poor.** Auditors A, B, G, H, I flagged this. Only C, D, E, F did not specifically call it out (D and F focused on flow/rhythm, E and C focused on spatial assessment).

7. **The purple "Idea Compiler" border is a dialect shift.** Auditors A (called it "deliberate -- blue note in jazz"), G (called it "from a different website"), I (called it "color inconsistency"). A interpreted it positively, G and I negatively. B noted it but was neutral. Split interpretation = most interesting disagreement.

### 6.3 Significant Disagreements

| Topic | Positive Interpretation | Negative Interpretation | Implication |
|-------|------------------------|------------------------|-------------|
| **Purple border** | A: "deliberate coolness... like a single blue note in jazz." E: "meaningful adaptation... color shift signals different function." | G: "breaks the color system... feels imported from a different design system." I: "purple vs red border inconsistency." | This is THE richest disagreement. Both readings are defensible. The PA protocol provides no guidance on when a palette deviation is "intentional accent" vs "system violation." A new question or scoring rubric could help: "Does the deviation SERVE the content differentiation, or does it feel arbitrary?" |
| **Large red "8" numeral** | E: no comment (not in domain). A: no comment. | G: "disproportionately large... verges on feeling like a magazine pull-stat." I: "oversized... looks like it might be a hero-stat with missing context." H: "creates additional whitespace" at 768px. | 3 auditors flagged it negatively, 0 positively. This is a design decision that doesn't land. |
| **Metadata cards at 768px** | H: "tight but functional." B: "impressive at this width." | H (later): "should be 2x2 grid." I: "cramped." | 768px treatment is a SIGNIFICANT responsiveness gap. Cards survive but should reorganize. |
| **Dark diagram containers** | D: "confident structural markers." F: "heartbeat-like cadence." | G: "visual cost exceeds metaphor payoff... by the 4th dark block, meaning is lost through repetition." | G's "visual cost" analysis is a Tier 5 finding that other auditors were not equipped to see from their domain lens. |

### 6.4 Things Only ONE Auditor Found

| Finding | Auditor | Why Only One |
|---------|---------|-------------|
| Screen-reader/visible-content desync as accessibility failure | H | Only H had accessibility questions (PA-73). No other auditor was routed to consider assistive technology. |
| Page is too long (14,500px) even if fully rendering | I | Only I had the architectural challenge question (PA-27: "design from scratch?"). Other auditors assess what IS, not what SHOULD BE. |
| The palette has zero redundancy (fragility analysis) | I | Only I had PA-28 (adversarial fragility). This structural insight about the design's dependency on exactly 3 channels (spacing, size, weight) with no color spectrum backup is uniquely valuable. |
| Background temperature operates on its own rhythm independent of section boundaries | F | Only F was looking for independent rhythms (PA-61). This is a genuine compositional intelligence finding. |
| 5 distinct typographic hierarchy levels | B | Only B was assigned PA-77 (hierarchy levels). Others saw "clear hierarchy" but did not count levels. |
| Component adaptation between sections (red quote -> purple labeled quote) | E | Only E had PA-63 (component echo/adapt). This Tier 5 finding about blockquote adaptation was invisible to other auditors. |

---

## 7. META-ENRICHMENTS: What This Audit Reveals About the PA Protocol

### PE-012: The PA Protocol Has No "Halt and Re-Capture" Authority
**Severity:** SIGNIFICANT
**Target file:** `pa-deployment.md`
**Finding:** When the orchestrator deploys auditors on broken screenshots, no auditor has the authority to say "STOP -- these screenshots are broken, re-capture before we waste analysis time." Each auditor independently diagnosed the problem and worked around it. This is a waste of 9x the diagnostic effort.
**Proposed change:** Add a "First-Auditor Halt" protocol: The FIRST auditor to complete their cold-look (typically A, since they are the impression specialist) should check for catastrophic rendering defects before the remaining 8 auditors begin deep analysis. If A flags a rendering defect, the orchestrator re-captures before B-I proceed.

### PE-013: The Full-Page Screenshot Is Under-Utilized
**Severity:** MODERATE
**Target file:** `pa-deployment.md`, Section 2.2
**Finding:** The full-page screenshot was the single most informative artifact for understanding the void (it proved content exists). But the protocol treats it as supplementary. Some auditors used it extensively (G, E), others barely referenced it (C). There is no guidance on WHEN and HOW to use the full-page capture.
**Proposed change:** Add explicit protocol: "The full-page screenshot is the GROUND TRUTH for page content. If scroll-through screenshots show blank areas that the full-page does not, the scroll-through is UNRELIABLE. Auditors should cross-reference the full-page before scoring any void-related questions."

### PE-014: Cross-Validators Provide Marginal Signal When Dominant Defect Exists
**Severity:** LOW
**Target file:** `pa-deployment.md`, Section 1.3
**Finding:** The 4 cross-validators (B for PA-05d, C for PA-05c, F for PA-05a, G for PA-05b) all scored "FAIL" or "CONDITIONAL PASS" with the same reason: the void prevents assessment. Cross-validation adds value when sub-criteria scores DIFFER between primary and cross-validator. When a dominant defect forces all scores to the same floor, cross-validation is redundant.
**Proposed change:** Add note: "When a BLOCKING defect is identified by Auditor A, cross-validators should still provide their assessment but should ALSO provide a hypothetical cross-validation score for the non-defective content. This gives the Weaver two data points: (1) the actual score, and (2) what the score would be after the defect is fixed."

### PE-015: The Integrative Auditor Is Missing From This Analysis
**Severity:** LOW
**Target file:** `pa-deployment.md`, Section 1.5
**Finding:** The pa-deployment.md specifies an Integrative Auditor (no assigned questions, gestalt only). The file `p3b-integrative.md` exists but was not included in this analysis task's scope. The Integrative Auditor's gestalt impression is the ONE report type that should be least affected by the void (gestalt is about feeling, not question-answering). Future analysis should always include the Integrative Auditor's report.

### PE-016: 9 Auditors Is Correct for Catching Convergent Defects, Overkill for Void-Dominated Pages
**Severity:** LOW (observation, not actionable change)
**Target file:** N/A
**Finding:** The V3 audit demonstrates that 9/9 convergence on a catastrophic defect is diagnostic overkill -- 3 auditors would have sufficed for void detection. The value of 9 auditors is in DISAGREEMENT (like the purple border debate) and UNIQUE findings (like I's fragility analysis, E's component adaptation, H's accessibility concern). Under catastrophic-defect conditions, the protocol should optimize for generating DIVERSE non-void findings rather than 9 redundant void reports.

---

## ENRICHMENT SUMMARY

| ID | Severity | Target | One-Line Description |
|----|----------|--------|---------------------|
| PE-001 | BLOCKING | pa-deployment.md S2.2 | Expand CSS override to include opacity, visibility, transform |
| PE-002 | SIGNIFICANT | pa-deployment.md new S2.5 | Add full-page vs scroll cross-reference as mandatory check |
| PE-003 | SIGNIFICANT | pa-questions.md S1 | Add "BLOCKED BY DEFECT" scoring option |
| PE-004 | MODERATE | pa-questions.md S3.2/3.6 | Deduplicate void questions under catastrophic conditions |
| PE-005 | MODERATE | pa-questions.md S3.6 | Add "Content Promise vs Delivery" question (PA-54) |
| PE-006 | MODERATE | pa-questions.md Appendix | Add image-vs-CSS distinction guidance |
| PE-007 | MODERATE | pa-deployment.md S1.2.1 | Add defect-bypass for H's cross-viewport protocol |
| PE-008 | LOW | pa-deployment.md S1.2 | Prioritize adversarial questions under catastrophic defects |
| PE-009 | SIGNIFICANT | pa-deployment.md new S2.6 | Add orchestrator validation gate before auditor deployment |
| PE-010 | MODERATE | pa-questions.md S1.3 | Add hypothetical PA-05 score protocol |
| PE-011 | LOW | pa-deployment.md S2.1.1 | Add blank screenshot threshold validation |
| PE-012 | SIGNIFICANT | pa-deployment.md | Add "First-Auditor Halt" protocol for re-capture authority |
| PE-013 | MODERATE | pa-deployment.md S2.2 | Full-page screenshot as ground truth, explicit usage guidance |
| PE-014 | LOW | pa-deployment.md S1.3 | Cross-validators provide hypothetical scores under dominant defects |
| PE-015 | LOW | pa-deployment.md S1.5 | Include Integrative Auditor in all PA analyses |
| PE-016 | LOW | N/A (observation) | 9 auditors is overkill for void detection, valuable for disagreement |

**Total: 16 enrichments (1 BLOCKING, 4 SIGNIFICANT, 6 MODERATE, 5 LOW)**

---

## APPENDIX: The Purple Border Disagreement -- A Case Study in PA Protocol Gaps

The purple border on "THE IDEA COMPILER" blockquote generated the audit's most interesting disagreement:

- **Auditor A:** "Deliberate departure, not a dialect break... like a single blue note in a jazz piece."
- **Auditor E:** "Meaningful adaptation... the color shift and label addition signal that the second quote carries a different function."
- **Auditor G:** "Breaks the color system... feels imported from a different design system."
- **Auditor I:** "Color inconsistency."
- **Auditor B:** Noted it but was neutral ("the ONLY purple element visible on the entire page").
- **Auditor F:** Not addressed.
- **Auditor C, D, H:** Not in their domain.

This 2-vs-2-vs-1 split (positive / negative / neutral) reveals a GAP in the PA question set: there is no question that asks auditors to evaluate whether a palette deviation SERVES the content or is arbitrary. PA-19 ("element from different website?") only asks if something feels OUT OF PLACE. It does not ask if the out-of-place-ness is JUSTIFIED.

**Proposed question (not yet assigned an ID):** "When you see a visual element that breaks the established pattern (different color, different style, different component type), does the break SERVE the content it marks? Or could the same content distinction be made within the existing palette?"

This question would route the purple-border debate into a structured assessment rather than leaving it to individual auditor judgment with no shared framework.

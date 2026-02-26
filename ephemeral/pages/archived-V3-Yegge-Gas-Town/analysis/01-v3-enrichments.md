# V3 Phase 2 Enrichment Extraction

**Extracted by:** v3-extractor agent (Opus 4.6)
**Date:** 2026-02-24
**Sources:** 20 Phase 2 reports (MASTER-SYNTHESIS + 19 individual reports)
**Total enrichments extracted:** 52
**Severity distribution:** 9 BLOCKING, 18 SIGNIFICANT, 25 MINOR

---

## METHODOLOGY

1. Started with MASTER-SYNTHESIS's 9 priority-corrected action items
2. Read all 19 individual reports, extracting additional enrichments not in the synthesis
3. Grouped enrichments by target spec file
4. Flagged potential conflicts with existing anti-loss mechanisms
5. Marked REPLACE vs ADD for each enrichment

---

## TARGET FILE: pa-deployment.md (237 lines)

### V3E-001 — Add Experiential Pass (MANDATORY before questions)
- **Severity:** BLOCKING
- **Source:** experiential-pa-analysis.md (Section 7), MASTER-SYNTHESIS (Action Item 1), inattentional-blindness-audit.md (Section: Proposed Fix)
- **Type:** ADD (new Section 2.5, inserted before step 3)
- **Description:** Add mandatory experiential pass to ALL 9 auditors before assigned questions. Each auditor scrolls through screenshots trying to READ every piece of text, reporting: (1) illegible text, (2) effortful text, (3) skipped text. Reported in separate "Section 0. Experiential Pass" at top of each audit report.
- **Exact change:** Insert new section 2.5 between current screenshot-reading protocol and question answering:
  ```
  ### 2.5 Experiential Pass (MANDATORY -- Before Questions)

  Before answering any assigned questions, each auditor performs an experiential pass:

  > Look at these screenshots as a READER, not as an evaluator. Scroll through
  > the page and try to READ every piece of text you see -- headings, body text,
  > labels, chart annotations, captions, metadata, footer text, everything.
  >
  > Report THREE things:
  > 1. **Illegible text:** Every place where you could not read the text at all.
  > 2. **Effortful text:** Every place where you had to slow down or squint.
  > 3. **Skipped text:** Every place where you chose to skip text because it
  >    looked too small, too dense, or too low-contrast to bother reading.
  >
  > Report in a separate section at the TOP of your audit report, labeled
  > "## 0. Experiential Pass."
  ```
- **Evidence:** Chart illegibility detection was 1/9 (11%) under analytical-only framing. Projected 78-100% under experiential pass. 43% of real usability issues completely missed by analytical PA (inattentional-blindness-audit).
- **Conflict check:** No conflict with existing mechanisms. Strengthens fresh-eyes principle.

### V3E-002 — Add Universal Legibility Pre-Check to ALL auditors
- **Severity:** BLOCKING
- **Source:** priority-inversion-analysis.md (Section 4c), MASTER-SYNTHESIS (Action Item 1)
- **Type:** ADD (new shared question, prepended to every auditor's question set)
- **Description:** Add U-01 shared question to ALL 9 auditors, asked FIRST before assigned questions:
  > "Before answering your assigned questions, scan the full page. Is there ANY text you cannot read? Any diagram, chart, or label that is illegible? If yes, describe it and flag as BLOCKING. If no, write 'No legibility issues found.'"
- **Exact change:** In the auditor prompt template (pa-deployment.md Section 3), add U-01 as the first question for every auditor.
- **Evidence:** PA-02 and PA-08 (the only legibility questions) routed exclusively to Auditor B. 8/9 auditors had zero legibility questions. 5/9 auditors looked at the illegible chart and did not flag it.
- **Conflict check:** Slight overlap with V3E-001 (experiential pass). Both should be present -- V3E-001 is open-ended text reading, V3E-002 is a specific binary question.

### V3E-003 — Add Screenshot Validation Gate before PA distribution
- **Severity:** BLOCKING
- **Source:** MASTER-SYNTHESIS (Action Item 6), buddy-metacognitive.md (Section 4), buddy-adversarial.md (Challenge B)
- **Type:** ADD (new protocol step between screenshot capture and PA distribution)
- **Description:** Before distributing screenshots to PA auditors, validate:
  1. No more than 3 consecutive screenshots are predominantly monochrome (catches blank-screenshot bug)
  2. Total unique screenshot visual entropy exceeds a minimum threshold
  3. Content visible in full-page screenshot is also visible in scroll screenshots
  If validation fails: re-capture with `animation: none !important; opacity: 1 !important; transform: none !important;` injected, or flag corruption and halt PA.
- **Exact change:** Add new Section 2.3a "Screenshot Validation" after screenshot capture, before auditor spawning.
- **Evidence:** DPR/scroll-reveal bug corrupted ALL 15 PA auditors (9 pipeline + 6 Phase 2). Dominant finding across all reports was a screenshot artifact. 50%+ of PA effort was misdirected. 15/15 auditors reported the same wrong conclusion -- zero self-correction mechanism.
- **Conflict check:** No conflict. Fills a structural gap identified by ALL Phase 2 analysts.

### V3E-004 — Add Data Corruption Escalation Protocol
- **Severity:** SIGNIFICANT
- **Source:** buddy-adversarial.md (Report 2), buddy-metacognitive.md (Section 4)
- **Type:** ADD (new instruction in auditor prompt)
- **Description:** Add instruction to PA auditor prompts: "If you suspect screenshots may be corrupted (e.g., large blank areas that contradict the full-page thumbnail, or content that the TOC promises but you cannot see), FLAG this as a DATA QUALITY CONCERN in your report header. Do not adjust scoring for suspected corruption -- but DO report the discrepancy."
- **Exact change:** Add to pa-deployment.md Section 2.4 (screenshot-reading protocol) as a new bullet point.
- **Evidence:** 3 of 9 pipeline auditors (B, D, E) hypothesized technical causes for the void but none adjusted scoring or flagged data quality. Protocol says "score what you see" but needs "and flag when what you see contradicts other evidence."
- **Conflict check:** No conflict with fresh-eyes or "score what you see" principle. Adds a reporting channel, does not change scoring behavior.

### V3E-005 — Add Experiential Detection Threshold Table
- **Severity:** SIGNIFICANT
- **Source:** experiential-pa-analysis.md (Section 7.2)
- **Type:** ADD (new content in pa-deployment.md or pa-questions.md appendix)
- **Description:** Add threshold table for interpreting experiential pass findings:
  | Metric | Threshold | Meaning |
  |--------|-----------|---------|
  | >= 3/9 auditors flag same text element | CONFIRMED illegibility | Priority escalation to Fix #1 |
  | 1/9 flags a text element | POSSIBLE issue | Weaver investigates |
  | 0/9 across all auditors | All text readable | No action |
- **Exact change:** Add as new subsection in pa-deployment.md Section 5 (Weaver input format).
- **Evidence:** Chart illegibility caught by 1/9 (11%) under analytical framing. With experiential pass, the threshold table gives the Weaver a calibration framework.
- **Conflict check:** None.

### V3E-006 — Reduce Auditor Count Consideration
- **Severity:** MINOR
- **Source:** step-paradigm-analysis.md (Section 3), buddy-fresh-eyes.md (Section 2), buddy-metacognitive.md (Section 6)
- **Type:** CONSIDER (not a direct spec edit -- a design question for the user)
- **Description:** Multiple reports converge on: 9 auditors provide ~2-3x effective coverage, not 9x. Cost is $30-40 for ~1 unique finding beyond gates. Consider reducing to 3-5 auditors: cold-look impressionist, structural analyst, content-form specialist, readability specialist, plus 1-2 rotating specialists. Or: keep 9 but make 2 of them "experiential auditors" with V3E-001 tasks plus reduced analytical questions.
- **Evidence:** PA reviewer: "5 of 9 single-point findings are HIGH significance" but adversarial buddy challenges 4 of those 9. Paradigm analyst: "ONE finding from 11 agents costing ~$30-40." Fresh-eyes buddy: "12 agents producing 4,000+ lines for a B+ web page is not QA, it is avoidance."
- **Conflict check:** Would require redesigning question routing if auditor count changes. DOES NOT conflict with V3E-001/V3E-002 which work at any auditor count.

---

## TARGET FILE: pa-questions.md (418 lines)

### V3E-007 — Add WCAG Contrast Quantitative Guardrail
- **Severity:** SIGNIFICANT
- **Source:** gate-usability-audit.md (Section 4A), priority-inversion-analysis.md (Section 2b)
- **Type:** ADD (new content in Appendix B)
- **Description:** Add contrast-specific guardrail text:
  > "When any auditor identifies text readability concerns, quantify: estimate the contrast ratio (text color vs background color). WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text (>=18px or >=14px bold). Report both the estimated ratio and the WCAG threshold."
- **Exact change:** Add to pa-questions.md Appendix B (Quantitative Guardrails).
- **Evidence:** Auditor B caught chart legibility but rated it SIGNIFICANT, not BLOCKING. No auditor quantified the contrast ratio. Adding a quantitative frame helps the Weaver prioritize correctly.
- **Conflict check:** None.

### V3E-008 — Add Footer Contrast Explicit Instruction
- **Severity:** MINOR
- **Source:** inattentional-blindness-audit.md (D-07)
- **Type:** ADD (modify existing PA-02 or add note to Auditor B's routing)
- **Description:** Add explicit instruction to PA-02 or to Auditor B's prompt: "Check contrast in header AND footer zones, not just body content. Footer text is frequently overlooked because auditors deprioritize it."
- **Exact change:** Append note to PA-02 in pa-questions.md: "(Include header and footer text in your assessment, not just body content.)"
- **Evidence:** Footer link contrast was 3.5:1 (#666666 on #1E1E1E) -- below WCAG AA. No PA auditor flagged this. Footer is a low-attention zone for auditors.
- **Conflict check:** None. Extends existing question scope.

### V3E-009 — Add Navigation Usability Question
- **Severity:** SIGNIFICANT
- **Source:** inattentional-blindness-audit.md (D-01, D-10, Instruction 1)
- **Type:** ADD (new PA question)
- **Description:** Add new question (PA-80 or equivalent): "Starting from the middle of the page, can you reach any other section using visible navigation tools? If the page has a TOC or nav, do the links appear functional? Flag if a page >10 viewport-heights long has no sticky nav, back-to-top, or section links."
- **Exact change:** Add as new question in pa-questions.md, route to Auditor E (Grid + Layout) or a new experiential auditor.
- **Evidence:** Gas Town is ~14,500px with 12 sections but no sticky nav, no back-to-top, no section navigation links. Phase 2 PA Delta and Epsilon noted absence but could not evaluate experiential impact. Fresh-eyes buddy: "Make the Settlement Map links actually work" was the single most impactful change.
- **Conflict check:** None.

### V3E-010 — Add Information Extraction Question
- **Severity:** SIGNIFICANT
- **Source:** inattentional-blindness-audit.md (D-02, Instruction 2)
- **Type:** ADD (new PA question)
- **Description:** Add new question (PA-81 or equivalent): "For every chart, diagram, or infographic, can you answer 'What is the ONE thing this element wants me to know?' in under 5 seconds? If not, the element fails its communicative purpose regardless of whether the text is technically readable."
- **Exact change:** Add as new question in pa-questions.md. Route to multiple auditors or include in experiential pass.
- **Evidence:** Complexity Ladder was technically readable with effort but failed its communicative purpose. Auditor B caught readability but no auditor assessed communicative effectiveness. 5/9 auditors saw the chart as a visual rhythm device, not as information to be extracted.
- **Conflict check:** None.

### V3E-011 — Add False Affordance Scan Question
- **Severity:** MINOR
- **Source:** inattentional-blindness-audit.md (D-05, Instruction 3)
- **Type:** ADD (new PA question)
- **Description:** Add new question: "Examine every element that LOOKS interactive (buttons, checkboxes, toggleable items, clickable-looking text). Does it actually appear to be interactive? Flag any element that looks interactive but is not."
- **Exact change:** Add to pa-questions.md. Route to Auditor E or Auditor H.
- **Evidence:** Section 07 has CSS pseudo-element checkboxes that look interactive but are purely decorative. No PA auditor identified this false affordance.
- **Conflict check:** None. Screenshot-based PA auditors can assess visual affordance appearance even without interacting.

### V3E-012 — Add Content-Promise Match Question
- **Severity:** MINOR
- **Source:** inattentional-blindness-audit.md (D-03, D-04, Instruction 4)
- **Type:** ADD (new PA question)
- **Description:** Add new question: "Read every TOC entry, section heading, and label. Does the corresponding content appear to deliver what the label promised? Do collapsible summaries give enough information to decide whether to expand?"
- **Exact change:** Add to pa-questions.md. Route to Auditor G (Metaphor) or a content-form specialist.
- **Evidence:** TOC density labels are functionally accurate but rendered invisible. Collapsible role deep dives give no preview of content inside. No auditor assessed promise-delivery alignment.
- **Conflict check:** None.

### V3E-013 — Sub-Perceptual Detection Questions Metadata
- **Severity:** MINOR
- **Source:** gate-usability-audit.md (Section 1A), priority-inversion-analysis.md (Section 3c)
- **Type:** ADD (metadata annotation to existing questions)
- **Description:** Mark PA-55 ("Can you describe how 3 adjacent sections DIFFER?") and PA-56 ("Can you FEEL the tracking difference?") with metadata: `[PERCEPTIBILITY-TEST]`. These questions are pipeline-introspection questions (testing whether the pipeline's own compositional model is perceptible), not reader-experience questions. The Weaver should weight them differently from experiential findings.
- **Exact change:** Add `<!-- PIPELINE-INTROSPECTION -->` comment next to PA-55 and PA-56 in pa-questions.md.
- **Evidence:** Priority-inversion analysis: "These questions are not about human reading experience. They are about whether the PIPELINE'S COMPOSITIONAL MODEL is reflected in perceptible output." Experiential-pa-analysis: "PA-55 and PA-56 are the pipeline auditing itself."
- **Conflict check:** None. Metadata only, does not change question text.

---

## TARGET FILE: pa-weaver.md (Weaver instructions)

### V3E-014 — Add Usability Priority Override Rule
- **Severity:** BLOCKING
- **Source:** priority-inversion-analysis.md (Section 4d), MASTER-SYNTHESIS (Action Item 1)
- **Type:** ADD (new priority rule, inserted before existing fix ordering logic)
- **Description:** Add to Weaver prompt:
  ```
  PRIORITY OVERRIDE RULE:
  Before ordering your fix list, ask: "Is there ANY finding from ANY auditor
  that describes something a reader CANNOT READ or CANNOT USE?"

  If yes: that finding is Fix #1, regardless of gate status. A reader who
  cannot read the page does not care about the font fallback stack.

  Gate failures are important. But an invisible gate failure is ALWAYS lower
  priority than a visible usability failure.
  ```
- **Exact change:** Insert as new Section 5.0 in pa-weaver.md, before existing Section 5.1 (current priority model).
- **Evidence:** Weaver ranked illegible chart as Fix #5 (last) behind 4 invisible CSS violations. The priority model (identity gate > perception gate > PA finding) systematically deprioritizes the most user-facing defects. Priority-inversion analysis documents 5/7 MAXIMUM inversions.
- **Conflict check:** MODIFIES existing priority hierarchy. Current: identity > perception > PA. New: usability-blocking > identity > perception > PA. This is the intended correction -- the existing hierarchy is the diagnosed problem.

### V3E-015 — Add Experiential Pass Aggregation to Weaver Input
- **Severity:** SIGNIFICANT
- **Source:** experiential-pa-analysis.md (Section 7.2), MASTER-SYNTHESIS (Action Item 1)
- **Type:** ADD (new input section in Weaver's received data)
- **Description:** The Weaver should receive a pre-aggregated summary of experiential pass findings from all 9 auditors. Format: "N/9 auditors flagged [element] as illegible/effortful/skipped." If N >= 3, mark as CONFIRMED USABILITY BLOCKER.
- **Exact change:** Add to pa-weaver.md Section 3 (Weaver inputs): "The Weaver also receives a summary table of experiential pass findings aggregated across all 9 auditors."
- **Evidence:** Without aggregation, the Weaver must scan 9 separate "Section 0" reports to find convergence patterns. Pre-aggregation ensures usability findings are not buried in analytical findings.
- **Conflict check:** Requires the orchestrator or integrative auditor to aggregate experiential findings before passing to the Weaver. Adds ~5 minutes of orchestrator work.

---

## TARGET FILE: gate-runner-core.js (1,436 lines)

### V3E-016 — Add GR-55/GR-60: WCAG Text Contrast Gate (REQUIRED)
- **Severity:** BLOCKING
- **Source:** MASTER-SYNTHESIS (Action Item 2), gate-usability-audit.md (Section 5, GR-60), priority-inversion-analysis.md (Section 4b)
- **Type:** ADD (new gate)
- **Description:** Add REQUIRED gate checking WCAG 2.1 AA text contrast ratios for all visible text elements. Normal text (<18px or <14px bold): >= 4.5:1. Large text (>=18px or >=14px bold): >= 3:1. Walk DOM tree for effective background color. Check SVG <text> and <tspan> elements.
- **Exact change:** Add ~70 lines of Playwright JS implementing the WCAG luminance formula + contrast ratio check. Full implementation sketch in gate-usability-audit.md Section 5, GR-60.
- **Evidence:** 31 gates, ZERO check text legibility. The most basic usability requirement is entirely absent. 4 of 18 REQUIRED gates check sub-perceptual CSS properties. A page could pass all 18 REQUIRED gates while having illegible text on every element.
- **Conflict check:** No conflict. Fills the most critical gap in gate coverage. Does NOT duplicate any existing gate.

### V3E-017 — Add GR-56/GR-61: Minimum Font Size Gate (RECOMMENDED)
- **Severity:** SIGNIFICANT
- **Source:** MASTER-SYNTHESIS (Action Item 2), gate-usability-audit.md (Section 5, GR-61)
- **Type:** ADD (new gate)
- **Description:** Add RECOMMENDED gate checking minimum text size. Body text >= 14px, caption/label >= 11px, absolute minimum for any visible text >= 10px. SVG text elements checked separately. CRITICAL violations (below absolute minimum) cause FAIL.
- **Exact change:** Add ~50 lines of Playwright JS. Implementation sketch in gate-usability-audit.md Section 5, GR-61.
- **Evidence:** Gate runner checks font FAMILY (GR-06) and font SIZE variation (GR-45) but never checks whether any text is too small to read. A 6px font in the correct family passes every gate.
- **Conflict check:** None.

### V3E-018 — Add GR-57/GR-62: Text Overflow/Clipping Gate (RECOMMENDED)
- **Severity:** MINOR
- **Source:** gate-usability-audit.md (Section 5, GR-62)
- **Type:** ADD (new gate)
- **Description:** Add RECOMMENDED gate checking for text content that overflows its container and is clipped by `overflow: hidden`. Detect horizontal and vertical clipping, `text-overflow: ellipsis` truncation, and off-screen positioned content (excluding skip-link).
- **Exact change:** Add ~60 lines of Playwright JS. Implementation sketch in gate-usability-audit.md Section 5, GR-62.
- **Evidence:** No existing gate checks whether text fits inside its container. An element with `overflow: hidden` silently swallows content.
- **Conflict check:** None.

### V3E-019 — Fix GR-44 False Negative (Trailing Void Measurement)
- **Severity:** BLOCKING
- **Source:** MASTER-SYNTHESIS (Action Item 5), buddy-adversarial.md (Challenge D line about GR-44)
- **Type:** REPLACE (modify existing GR-44 implementation)
- **Description:** GR-44 currently measures from the last DOM element's bottom. It should measure from the last VISIBLE element (accounting for the page's actual scrollable extent vs content extent). The ~5,500px trailing void below the footer was invisible to the gate because GR-44 measures voidHeight=0 for the CONTENT zone.
- **Exact change:** In gate-runner-core.js, modify GR-44 to: (1) find the last visible element with `offsetHeight > 0`, (2) compare its bottom position to `document.documentElement.scrollHeight`, (3) report the difference as trailing void.
- **Evidence:** Adversarial buddy discovered a real ~5,500px trailing void BELOW the footer that GR-44 missed. The fix mapper and gate analyst both rated GR-44 as "WORKED" -- this is a false assessment. The gate measures content-zone void, not total page void.
- **Conflict check:** Modifies existing gate. Must preserve the existing content-zone measurement AND add a page-level measurement.

### V3E-020 — Fix GR-14 Structural False Positives
- **Severity:** SIGNIFICANT
- **Source:** step5-gate-analysis.md (Failure 5), MASTER-SYNTHESIS (implicit in Tier 2 fixes)
- **Type:** REPLACE (modify existing GR-14 implementation)
- **Description:** GR-14 produced 13 false positives from nested section containers. Restrict gap measurement to zone-level siblings (direct children of `<main>` or elements sharing the same parent), not sub-elements within zones measured against adjacent zones.
- **Exact change:** In gate-runner-core.js GR-14 section, add parent-level scoping: only measure gaps between elements that are direct children of the same container (e.g., `<main>`) or adjacent zone-level sections.
- **Evidence:** V3 GR-14 reported 13 failures with gaps 400-2400px. Gate runner's own fixNote says "likely a gate false-positive from nested HTML structure." This is architecturally broken for modern HTML structure (nested section containers).
- **Conflict check:** Modifies existing gate logic. FIX-005 (structural transition handling) partially addressed this but only for elements BETWEEN zones, not elements WITHIN zones.

### V3E-021 — Fix GR-09 Tolerance Band Implementation
- **Severity:** SIGNIFICANT
- **Source:** step5-gate-analysis.md (Failure 4, "GATE IMPLEMENTATION DISCREPANCY")
- **Type:** REPLACE (verify/fix existing implementation)
- **Description:** FIX-003 specified tolerance-band matching for GR-09 (primary 3.5-4.5, secondary 2.5-3.5, tertiary 0.5-1.5). But V3 gate results report `threshold: { allowedWidths: [1, 2, 3, 4] }` -- integer-only checking. Either FIX-003 was not fully integrated, or a secondary check overrides the tolerance logic.
- **Exact change:** Audit gate-runner-core.js GR-09 implementation. Verify tolerance bands are present. If not, implement them per FIX-003 spec. If a secondary integer-only check exists, remove it or make it conditional on the tolerance band result.
- **Evidence:** V3 reported 0.667px and 2.667px borders as failures. These are clearly 1px and 3px with subpixel rendering -- the tolerance bands should accept them.
- **Conflict check:** FIX-003 already specified this change. This enrichment is about verifying implementation, not adding new logic.

### V3E-022 — Downgrade GR-05 Sub-Perceptual Tints to ADVISORY
- **Severity:** SIGNIFICANT
- **Source:** MASTER-SYNTHESIS (Action Item 4), gate-usability-audit.md (Section 3, GR-05)
- **Type:** REPLACE (split existing gate)
- **Description:** Split GR-05 into:
  - GR-05a: Warm Palette (visible colors, opacity >= 0.3) -- keep REQUIRED
  - GR-05b: Warm Palette (sub-perceptual tints, opacity < 0.3) -- downgrade to ADVISORY
- **Exact change:** In gate-runner-core.js GR-05, add alpha check: if element's effective opacity < 0.3, route violation to GR-05b (ADVISORY) instead of GR-05a (REQUIRED).
- **Evidence:** V3 failures were `rgba(124, 58, 237, 0.04)` -- purple at 4% opacity. Invisible. The pipeline's own perception threshold (15 RGB delta) proves 4% opacity is imperceptible. A REQUIRED gate that triggers REBUILD for an invisible color shift is a priority inversion.
- **Conflict check:** MODIFIES gate severity. The warm palette remains REQUIRED for visible colors. Only sub-perceptual tints are downgraded. Identity preservation is maintained for perceivable colors.

### V3E-023 — Modify GR-06 to Check Rendered Font
- **Severity:** SIGNIFICANT
- **Source:** MASTER-SYNTHESIS (Action Item 4), gate-usability-audit.md (Section 3, GR-06)
- **Type:** REPLACE (modify existing gate logic)
- **Description:** Change GR-06 from checking the full font-family declaration stack to checking the RENDERED font via `document.fonts.check()`. Primary font position must be a trinity font. Fallback fonts in positions 2+ should not trigger REQUIRED failures -- route to ADVISORY.
- **Exact change:** In gate-runner-core.js GR-06, replace the font-stack string check with: (1) `document.fonts.check('16px "Instrument Serif"')` etc. to verify trinity fonts are loaded, (2) check that the first font in each element's computed font-family is a trinity font. Fallback-only violations → ADVISORY.
- **Evidence:** V3's 181 violations were all from fallback fonts (Times, SF Mono, Georgia) that never render. GR-06 triggers REBUILD for fonts users will never see.
- **Conflict check:** Changes gate behavior. Might allow pages with bad primary fonts if `document.fonts.check` has edge cases. Mitigate by keeping primary-font-position check as REQUIRED.

### V3E-024 — Downgrade GR-07 to RECOMMENDED
- **Severity:** MINOR
- **Source:** MASTER-SYNTHESIS (Action Item 4), gate-usability-audit.md (Section 3, GR-07)
- **Type:** REPLACE (change gate tier)
- **Description:** Downgrade GR-07 from REQUIRED to RECOMMENDED. Additionally, modify to only check elements with visible text content (`el.textContent.trim().length > 0` and `el.offsetHeight > 0`). Browser defaults on structural containers should not trigger failures.
- **Exact change:** In gate-runner-core.js and gate-manifest.json, change GR-07 tier from "REQUIRED" to "RECOMMENDED". Add visible-text-only filter.
- **Evidence:** V3 failure was `rgb(0,0,0)` on the `<html>` element -- browser default overridden by all visible text. Pure black (#000) vs warm dark (#1a1a1a) at body text sizes is sub-perceptual.
- **Conflict check:** Reduces strictness of identity enforcement. Mitigated by: visible text with pure black would still be flagged (just as RECOMMENDED, not REBUILD-triggering).

### V3E-025 — Downgrade GR-12 to RECOMMENDED
- **Severity:** MINOR
- **Source:** MASTER-SYNTHESIS (Action Item 4), gate-usability-audit.md (Section 3, GR-12)
- **Type:** REPLACE (change gate tier)
- **Description:** Downgrade GR-12 (letter-spacing >= 0.025em) from REQUIRED to RECOMMENDED. The entire monitored range (0 to 0.4px) is below human perception threshold. GR-18 (Ghost Mechanisms) already catches sub-perceptual values at RECOMMENDED tier.
- **Exact change:** In gate-runner-core.js and gate-manifest.json, change GR-12 tier from "REQUIRED" to "RECOMMENDED".
- **Evidence:** 0.025em at 16px = 0.4px. The difference between 0.020em and 0.025em letter-spacing is invisible. Gate-usability-audit: "The entire range this gate monitors is below the threshold of human perception."
- **Conflict check:** Reduces REQUIRED gate count by 1. Ghost mechanism detection preserved via GR-18.

### V3E-026 — Downgrade GR-43 to RECOMMENDED
- **Severity:** MINOR
- **Source:** gate-usability-audit.md (Section 3, GR-43)
- **Type:** REPLACE (change gate tier)
- **Description:** Downgrade GR-43 (self-evaluation comment) from REQUIRED to RECOMMENDED. An HTML comment invisible to all users should not block builds.
- **Exact change:** In gate-runner-core.js and gate-manifest.json, change GR-43 tier from "REQUIRED" to "RECOMMENDED".
- **Evidence:** Self-evaluation exists as an HTML comment (invisible to users). Its value is as a process artifact. A page with perfect visual output should not FAIL because of a missing invisible comment.
- **Conflict check:** Reduces process compliance enforcement. Self-eval remains checked but no longer blocks.

### V3E-027 — Downgrade GR-19 to ADVISORY
- **Severity:** MINOR
- **Source:** gate-usability-audit.md (Section 3, GR-19)
- **Type:** REPLACE (change gate tier)
- **Description:** Downgrade GR-19 (threshold gaming detection) from RECOMMENDED to ADVISORY. This gate checks builder INTENT (are they gaming thresholds?) not visual output.
- **Exact change:** In gate-runner-core.js and gate-manifest.json, change GR-19 tier from "RECOMMENDED" to "ADVISORY".
- **Evidence:** A page with 50% of deltas at 15-17 RGB looks identical to one with deltas at 18-20 RGB. The statistical distribution of CSS values is not perceivable.
- **Conflict check:** Minor -- threshold gaming is a real concern but ADVISORY still flags it.

### V3E-028 — Adjust GR-21 Threshold for COMPOSED Mode
- **Severity:** MINOR
- **Source:** step5-gate-analysis.md (Failure 7), step7-fix-effectiveness.md (Section 2, GR-21)
- **Type:** REPLACE (modify threshold)
- **Description:** Increase GR-21 threshold from 4 to 6 distinct backgrounds per viewport for COMPOSED mode pages, OR exclude backgrounds with alpha < 0.1 from the count.
- **Exact change:** In gate-runner-core.js GR-21, add: `if (alpha < 0.1) continue;` when counting distinct backgrounds, or make the threshold configurable by mode (COMPOSED: 6, APPLIED: 4).
- **Evidence:** V3 got 6 distinct backgrounds because callout tints at 4-6% opacity inflated the count. The callout tints are imperceptible.
- **Conflict check:** None. The gate remains but with a more appropriate threshold.

### V3E-029 — Add GR-22 Skip-Link Exemption
- **Severity:** MINOR
- **Source:** step5-gate-analysis.md (Failure 8)
- **Type:** REPLACE (modify gate logic)
- **Description:** Exempt skip-link elements from GR-22 (red background count). Skip-links use red backgrounds for accessibility focus visibility -- this is correct usage, not a design violation.
- **Exact change:** In gate-runner-core.js GR-22, add: `if (el.classList.contains('skip-link') || el.closest('.skip-link')) continue;`
- **Evidence:** V3 had 4 red background uses (skip-link, pull-quote, 2x callout-warning). Skip-link is an accessibility element -- its red bg should not count against the design threshold.
- **Conflict check:** None.

---

## TARGET FILE: MANIFEST.md (1,192 lines)

### V3E-030 — Fix Verdict Logic for Mechanical Identity Failures
- **Severity:** BLOCKING
- **Source:** buddy-adversarial.md (Finding 5, "MANIFEST's verdict logic is the defect"), priority-inversion-analysis.md (Section 4), step1-paper-trail-audit.md (F1)
- **Type:** REPLACE (modify verdict logic section)
- **Description:** Current verdict logic: "ANY Identity gate FAIL -> REBUILD." This is too rigid for mechanical CSS oversights (html default color, font fallbacks, sub-pixel borders, low-opacity tints). Add a MECHANICAL exception: if ALL identity gate failures are classified as MECHANICAL by the gate runner (single-line CSS fixes, no design decision involved), the verdict is REFINE, not REBUILD.
- **Exact change:** In MANIFEST.md Section [verdict logic], add: "If all REQUIRED identity gate failures are annotated as MECHANICAL (gate runner auto-classifies based on: fix requires <= 5 CSS lines, no HTML structural change, no design decision), verdict is REFINE, not REBUILD."
- **Evidence:** V3 orchestrator correctly overrode REBUILD to SHIP WITH FIXES for 4 mechanical identity failures. Paper trail auditor called this BLOCKING. Gate analyst, Weaver, and adversarial buddy all agreed the override was correct. Three assessors, three different verdicts from the same evidence = governance defect in MANIFEST.
- **Conflict check:** MODIFIES existing anti-loss mechanism. The "any identity FAIL = REBUILD" rule exists to prevent soul violations from shipping. Adding a MECHANICAL exception preserves the intent while removing false positives. Risk: a "mechanical" classification could be gamed. Mitigate by requiring gate runner to auto-classify (not orchestrator discretion).

### V3E-031 — Add Phase 4 Fix Application Protocol
- **Severity:** SIGNIFICANT
- **Source:** step7-fix-effectiveness.md (Section 8.4, anomaly 5), step-paradigm-analysis.md (Section 5)
- **Type:** ADD (new phase)
- **Description:** Add Phase 4: Apply Weaver's top-N fixes within the pipeline run. Current pipeline ends at the verdict -- fixes are deferred to a future session. Phase 4: orchestrator applies mechanical fixes (CSS value changes, font-stack cleanup, html color declaration), then re-runs relevant gates to verify. Only MECHANICAL fixes -- no structural or compositional changes.
- **Exact change:** Add new Phase 4 section to MANIFEST.md after Phase 3C.
- **Evidence:** V3 produced 5 CSS fixes totaling ~15 lines. These were NOT applied within the pipeline run. The page ships with known defects that take 2 minutes to fix.
- **Conflict check:** Adds pipeline complexity. The paradigm analyst argues for LESS complexity. However, this directly addresses the "SHIP WITH FIXES but never actually fix" gap.

### V3E-032 — Update components.css Line Count
- **Severity:** MINOR
- **Source:** step1-paper-trail-audit.md (Section 3a, components.css discrepancy)
- **Type:** REPLACE (update metadata)
- **Description:** MANIFEST says components.css is 290 lines. Builder received 1,195 lines. Update MANIFEST to reflect actual file size.
- **Exact change:** In MANIFEST.md routing table, change components.css line count from 290 to current actual.
- **Evidence:** 4x discrepancy flagged by paper trail auditor. MANIFEST maintenance issue -- the file has grown but the spec was not updated.
- **Conflict check:** None. Metadata correction only.

### V3E-033 — Add Usability Circuit Breaker to Orchestrator Protocol
- **Severity:** SIGNIFICANT
- **Source:** priority-inversion-analysis.md (Section 4e)
- **Type:** ADD (new orchestrator instruction)
- **Description:** Between Phase 3B (PA) and Phase 3C (Weaver), the orchestrator scans all 9 auditor reports for BLOCKING-severity findings related to text legibility, information accessibility, content completeness, or navigation functionality. If ANY auditor flags a BLOCKING usability issue: (1) elevate to BLOCKING-USABILITY status, (2) annotate for Weaver as "must be Fix #1," (3) if SHIP WITH FIXES verdict, verify usability fix is addressed.
- **Exact change:** Add to MANIFEST.md Phase 3B->3C handoff section.
- **Evidence:** The orchestrator already reads all 9 reports. It just needs to scan for usability-blocking language. In V3, the orchestrator flagged A5 (legibility routing problem) but did not elevate Fix #5.
- **Conflict check:** Adds orchestrator responsibility. Must be lightweight (keyword scan, not deep analysis).

---

## TARGET FILE: artifact-builder-recipe.md (builder recipe)

### V3E-034 — Add Legibility Self-Check as Q0
- **Severity:** BLOCKING
- **Source:** MASTER-SYNTHESIS (Action Item 3), priority-inversion-analysis.md (Section 4a)
- **Type:** ADD (new question, prepended before existing Q1)
- **Description:** Add as the FIRST self-evaluation question (before compositional questions):
  > "Q0: Is every piece of text on this page legible at its rendered size and contrast? Scan every text element. Any text below 12px? Any text with contrast ratio below 3:1 against its background? Any diagram/chart labels that are hard to read? List all issues or 'none found.'"
- **Exact change:** Insert as Q0 in the builder self-evaluation template in artifact-builder-recipe.md. Renumber existing Q1-Q7 to Q1-Q8.
- **Evidence:** Builder created the illegible chart, then passed 7/7 self-evaluation questions because no question asked "can someone read this." The self-eval asks about compositional architecture but has zero questions about element-level execution.
- **Conflict check:** None. Adds one question to the self-eval. Does not remove any existing questions.

### V3E-035 — Add Component Functionality Self-Check
- **Severity:** SIGNIFICANT
- **Source:** priority-inversion-analysis.md (Section 4a, NEW Q2)
- **Type:** ADD (new question after V3E-034's Q0)
- **Description:** Add self-evaluation question:
  > "Q1: Does every visual component (diagram, chart, table, card, grid) convey its information clearly? For each non-prose visual element, can a reader extract the information it presents? List each component and yes/no."
- **Exact change:** Insert as Q1 in builder self-evaluation template. Renumber.
- **Evidence:** The Complexity Ladder fails its communicative purpose even when text is technically readable. No self-eval question asks "does this component work?"
- **Conflict check:** None.

### V3E-036 — Add px-Only Border Width Instruction
- **Severity:** MINOR
- **Source:** step7-fix-effectiveness.md (Section 8.3, Recommendation 3)
- **Type:** ADD (new instruction in builder recipe)
- **Description:** Add to builder recipe: "All border-width values MUST be integer px (1px, 2px, 3px, 4px). Do NOT use em/rem for border-width -- these compute to fractional px values that fail gate verification."
- **Exact change:** Add as explicit instruction in artifact-builder-recipe.md CSS rules section.
- **Evidence:** V3 builder used em/rem for borders, producing 0.667px and 2.667px. Gate accuracy improved but builder prevention did not.
- **Conflict check:** None. Prevents a known gate failure at source.

### V3E-037 — Add html Color Declaration to Boilerplate
- **Severity:** MINOR
- **Source:** step7-fix-effectiveness.md (Section 8.3, Recommendation 2), step5-gate-analysis.md (Failure 3)
- **Type:** ADD (add to boilerplate CSS)
- **Description:** Add `html { color: #2a2a2a; font-family: Inter, system-ui, sans-serif; }` to the components.css or builder recipe boilerplate. Prevents browser default #000 on html element.
- **Exact change:** Add to artifact-builder-recipe.md CSS boilerplate section, or to components.css directly.
- **Evidence:** V3 GR-07 failed because builder did not set explicit html color. This is a boilerplate oversight, not a design decision.
- **Conflict check:** None.

### V3E-038 — Add Font Stack Template
- **Severity:** MINOR
- **Source:** step7-fix-effectiveness.md (Section 8.3, Recommendation 2)
- **Type:** ADD (add to builder recipe)
- **Description:** Template the font-family declarations so the builder copies them rather than writing their own:
  ```css
  /* Required font stacks -- do not modify */
  --font-body: "Inter", system-ui, sans-serif;
  --font-heading: "Instrument Serif", serif;
  --font-code: "JetBrains Mono", monospace;
  ```
- **Exact change:** Add as explicit CSS custom properties in artifact-builder-recipe.md or components.css.
- **Evidence:** V3 builder included Georgia, SF Mono, Times in font stacks -- all caught by GR-06. Templating prevents this.
- **Conflict check:** None. Gates still verify; this prevents violations at source.

### V3E-039 — Add ARIA Accessibility Requirement
- **Severity:** SIGNIFICANT
- **Source:** step6-cross-run-comparison.md (Section 6.1, "SIGNIFICANT REGRESSION")
- **Type:** ADD (new instruction in builder recipe)
- **Description:** Add explicit ARIA requirement: "All data tables must have `aria-label` or `aria-labelledby`. All diagrams/images must have `aria-label` or meaningful `alt` text. All interactive regions (collapsible details, nav, complementary) must have `role` and `aria-label` attributes. Target: >= 15 ARIA attributes."
- **Exact change:** Add as new section in artifact-builder-recipe.md under "Accessibility Requirements."
- **Evidence:** V3 has 7 ARIA attributes vs VA Pipeline's 19 -- a 63% regression. Most ASCII diagrams and tables lack `aria-label`. This is the most notable regression from the cross-run comparison.
- **Conflict check:** None. Adds a new quality dimension.

---

## TARGET FILE: artifact-orchestrator.md (orchestrator instructions)

### V3E-040 — Add Scroll-Reveal Disabling in Screenshot Capture
- **Severity:** SIGNIFICANT
- **Source:** MASTER-SYNTHESIS (Section 3), buddy-metacognitive.md (Section 4)
- **Type:** ADD (new instruction in screenshot capture protocol)
- **Description:** Before taking screenshots, inject CSS to disable scroll-reveal animations:
  ```javascript
  await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important; }' });
  ```
- **Exact change:** Add to artifact-orchestrator.md Phase 3A screenshot protocol.
- **Evidence:** CSS scroll-reveal animations using Intersection Observer don't trigger during Playwright's `window.scrollTo()`. Content remains at opacity: 0. This caused the DPR bug that corrupted all 15 PA auditor inputs.
- **Conflict check:** May affect visual appearance of screenshots (removes intended animation states). But static screenshots without animations are MORE useful for PA evaluation than blank screenshots.

### V3E-041 — Add Context Budget Awareness
- **Severity:** MINOR
- **Source:** step1-paper-trail-audit.md (Anomaly A2), step7-fix-effectiveness.md (Section 8.4, anomaly 2)
- **Type:** ADD (new guidance in orchestrator instructions)
- **Description:** Add note: "The pipeline typically requires 2-3 sessions due to context exhaustion. Plan for session boundaries between Phase 2 (build complete) and Phase 3A (gate evaluation). Save all state to files before each potential session boundary."
- **Exact change:** Add to artifact-orchestrator.md execution planning section.
- **Evidence:** V3 required 3 sessions. MANIFEST estimates 80-105 minutes; actual was ~6 hours (4x underestimate). The 128 fixes added spec volume without addressing context budget.
- **Conflict check:** None. Documentation/planning guidance.

---

## TARGET FILE: artifact-gate-runner.md (gate documentation)

### V3E-042 — Add Gate Perceptibility Classification
- **Severity:** SIGNIFICANT
- **Source:** gate-usability-audit.md (Section 2), MASTER-SYNTHESIS (Action Item 4)
- **Type:** ADD (new metadata column in gate manifest)
- **Description:** Add perceptibility classification to every gate: HUMAN-PERCEPTIBLE, SUB-PERCEPTUAL, MIXED, or N/A. This metadata helps the Weaver, orchestrator, and future analysts understand which gate failures a human would actually notice.
- **Exact change:** Add "Perceptibility" column to gate manifest table. Classifications per gate-usability-audit.md Section 2:
  - HUMAN-PERCEPTIBLE: GR-03, GR-08, GR-13, GR-14, GR-15, GR-44, GR-20, GR-45, GR-52
  - SUB-PERCEPTUAL: GR-05b, GR-06 (fallbacks), GR-07, GR-12, GR-18, GR-19, GR-46, GR-50, GR-53, GR-43
  - MIXED: GR-01, GR-02, GR-04, GR-05a, GR-09, GR-10, GR-11, GR-17, GR-21, GR-22, GR-51
  - N/A: BV-01-04, GR-48, GR-49
- **Evidence:** V3 weaver prioritized 4 sub-perceptual gate failures above 1 human-perceptible usability failure. Perceptibility metadata would have enabled correct prioritization.
- **Conflict check:** None. Metadata addition only.

### V3E-043 — Add GR-17 List Item Exemption
- **Severity:** MINOR
- **Source:** step5-gate-analysis.md (Failure 6)
- **Type:** REPLACE (modify gate threshold)
- **Description:** Add `li` to the reduced-minimum group in GR-17 (density stacking). List items at 8px padding are a standard design choice for compact lists. Change `li` minimum from 12px to 4px (same as td/th).
- **Exact change:** In gate-runner-core.js GR-17, move `li` from the 12px-minimum selector group to the 4px-minimum group.
- **Evidence:** V3 had 30 li violations at 8px padding. FIX-006 fixed table cells but left `li` in the strict group. 8px list padding is a reasonable density choice.
- **Conflict check:** FIX-006 deliberately kept `li` in the 12px group. This enrichment overrides that decision based on V3 evidence.

---

## TARGET FILE: artifact-pa-protocol.md (PA protocol docs)

### V3E-044 — Document Experiential Pass Protocol
- **Severity:** SIGNIFICANT
- **Source:** experiential-pa-analysis.md (full report)
- **Type:** ADD (new section documenting the experiential pass)
- **Description:** Add documentation of the experiential pass protocol, its rationale (gorilla experiment analogy, attentional tunnels from analytical questions), and its expected impact (11% -> 78-100% detection rate for experiential-class failures).
- **Exact change:** Add new section to artifact-pa-protocol.md explaining the experiential pass and referencing the specification in pa-deployment.md.
- **Evidence:** The experiential PA analysis is the most detailed report on why the analytical-only framing fails. The protocol documentation should capture this rationale for future reference.
- **Conflict check:** None. Documentation only.

---

## TARGET FILE: EXECUTION-TRACKER-TEMPLATE.md

### V3E-045 — Add Experiential Pass Tracking
- **Severity:** MINOR
- **Source:** V3E-001, V3E-005 (derived)
- **Type:** ADD (new tracking fields)
- **Description:** Add tracking fields for experiential pass: "Experiential pass completed by N/9 auditors: [ ]", "Experiential findings aggregated: [ ]", "CONFIRMED usability blockers (>=3/9): [ ]".
- **Exact change:** Add new checkbox section in EXECUTION-TRACKER-TEMPLATE.md Phase 3B section.
- **Evidence:** Derived from V3E-001 and V3E-005. If experiential pass is added, tracking should follow.
- **Conflict check:** None.

### V3E-046 — Add Screenshot Validation Tracking
- **Severity:** MINOR
- **Source:** V3E-003 (derived)
- **Type:** ADD (new tracking field)
- **Description:** Add: "Screenshot validation gate PASSED: [ ] (N consecutive monochrome, entropy check, full-page cross-check)"
- **Exact change:** Add in EXECUTION-TRACKER-TEMPLATE.md Phase 3A section.
- **Evidence:** Derived from V3E-003.
- **Conflict check:** None.

---

## CROSS-CUTTING ENRICHMENTS (Multiple targets)

### V3E-047 — Priority Hierarchy Inversion Fix (System-Wide)
- **Severity:** BLOCKING
- **Source:** priority-inversion-analysis.md (full report), MASTER-SYNTHESIS (Finding 1)
- **Type:** REPLACE (multiple files)
- **Description:** The current priority hierarchy across ALL pipeline stages is: CSS compliance > Compositional intelligence > Human experience. This should be inverted to: Human experience > CSS compliance > Compositional intelligence. This affects:
  1. Builder self-eval: legibility questions FIRST (V3E-034, V3E-035)
  2. Gate runner: usability gates as REQUIRED, sub-perceptual identity gates downgraded (V3E-016, V3E-022-027)
  3. PA deployment: experiential pass BEFORE analytical questions (V3E-001)
  4. Weaver: usability override rule (V3E-014)
  5. Orchestrator: usability circuit breaker (V3E-033)
  6. MANIFEST: verdict logic for mechanical failures (V3E-030)
- **Exact change:** This is the meta-enrichment that V3E-001, V3E-014, V3E-016, V3E-022-027, V3E-030, V3E-033, V3E-034, V3E-035 collectively implement. No additional spec changes beyond those individual enrichments.
- **Evidence:** Priority-inversion analysis documents MAXIMUM inversions at 5/7 findings. Every pipeline stage's blind spot feeds the next, amplifying the inversion. The causal chain runs: builder doesn't check legibility -> gates don't check legibility -> PA routes legibility to 1/9 auditors -> weaver deprioritizes it -> orchestrator accepts.
- **Conflict check:** This is the most significant systemic change. Each individual enrichment has its own conflict analysis above.

### V3E-048 — CSS Trailing Void Fix (Page-Level)
- **Severity:** MINOR
- **Source:** MASTER-SYNTHESIS (Action Item 7), inattentional-blindness-audit.md (D-08)
- **Type:** ADD (builder recipe instruction)
- **Description:** Add to builder recipe: "Verify that the page does not extend significantly beyond its last content element. Add `body { min-height: unset; }` if needed. The page should end within 100px of the last content element."
- **Exact change:** Add to artifact-builder-recipe.md under "Common Defects to Avoid."
- **Evidence:** V3 page is 14,524px tall with content ending at ~9,000px. ~5,500px of blank cream below footer.
- **Conflict check:** None.

### V3E-049 — Add Scroll Termination Check to Gate Runner
- **Severity:** MINOR
- **Source:** inattentional-blindness-audit.md (Instruction 5)
- **Type:** ADD (enhancement to GR-44 or new micro-gate)
- **Description:** In addition to V3E-019 (fix GR-44 measurement), add explicit check: "Is the last visible content element within 300px of the bottom of the scrollable area? If not, report excess page height."
- **Exact change:** Extend V3E-019's GR-44 fix to include this total-page check.
- **Evidence:** V3 had ~5,500px of blank space below footer. GR-44 measured voidHeight=0 because it only checked content zone.
- **Conflict check:** Overlaps with V3E-019. Implement as part of the same GR-44 fix.

### V3E-050 — Add Horizontal Scroll Check at Element Level
- **Severity:** MINOR
- **Source:** inattentional-blindness-audit.md (D-06)
- **Type:** ADD (new gate or PA instruction)
- **Description:** Current PA question about horizontal scrolling (PA-07) checks PAGE-LEVEL horizontal scroll. Add check for ELEMENT-LEVEL horizontal scroll: contained elements with `overflow-x: auto` that require horizontal scrolling at 768px.
- **Exact change:** Add note to PA-07 in pa-questions.md: "(Check both page-level AND element-level horizontal scroll. A contained element with local horizontal scroll does not break the page layout but disrupts reading.)" OR add to gate runner as a new check.
- **Evidence:** Hierarchy diagram at 768px requires horizontal scrolling within its container. PA Epsilon scored "No horizontal scrolling observed" at 4/4 -- missing the contained scroll.
- **Conflict check:** None.

### V3E-051 — Add GR-14 li Padding Threshold Consideration
- **Severity:** MINOR
- **Source:** step5-gate-analysis.md (Failure 6)
- **Type:** CONSIDER (same as V3E-043 but from different angle)
- **Description:** Consider whether the 12px minimum padding threshold for list items is appropriate. V3 builder chose 8px for compact lists -- a standard web design choice. If the threshold is kept at 12px, add this to the builder recipe as an explicit constraint so builders know.
- **Evidence:** 30 li violations at 8px. This is an ongoing tension: the gate enforces a minimum the builder reasonably disagrees with.
- **Conflict check:** Overlaps with V3E-043. Choose one approach: either change the gate (V3E-043) or document the constraint for builders (V3E-051).

### V3E-052 — A/B Test Protocol: Full Pipeline vs Minimal Pipeline
- **Severity:** MINOR (process recommendation, not spec change)
- **Source:** MASTER-SYNTHESIS (Action Item 8), step-paradigm-analysis.md (Blind Spot 1), buddy-metacognitive.md (Q3)
- **Type:** CONSIDER (experimental protocol, not a direct spec edit)
- **Description:** Design and run an A/B test: (A) Full V3 pipeline on non-Gas-Town content, (B) Opus + 50-line constraints + components.css on same content. Compare PA-05. If minimal matches or beats full, the case for radical simplification is proven.
- **Evidence:** The Middle Experiment (100 lines, PA-05 4/4) vs V3 (3,600 lines, PA-05 3/4) is the paradigm analyst's central evidence, but it is confounded by model, content, format, and team topology (N=4). A controlled experiment would resolve this. Estimated cost: $5-15, 1-2 hours.
- **Conflict check:** Not a spec change. A strategic decision for the user.

---

## SUMMARY BY TARGET FILE

| Target File | Enrichment Count | BLOCKING | SIGNIFICANT | MINOR |
|-------------|-----------------|----------|-------------|-------|
| pa-deployment.md | 6 | 3 | 2 | 1 |
| pa-questions.md | 7 | 0 | 3 | 4 |
| pa-weaver.md | 2 | 1 | 1 | 0 |
| gate-runner-core.js | 14 | 3 | 5 | 6 |
| MANIFEST.md | 4 | 2 | 1 | 1 |
| artifact-builder-recipe.md | 6 | 1 | 2 | 3 |
| artifact-orchestrator.md | 2 | 0 | 1 | 1 |
| artifact-gate-runner.md | 2 | 0 | 1 | 1 |
| artifact-pa-protocol.md | 1 | 0 | 1 | 0 |
| EXECUTION-TRACKER-TEMPLATE.md | 2 | 0 | 0 | 2 |
| Cross-cutting / Multiple | 6 | 1 | 0 | 5 |
| **TOTAL** | **52** | **9** | **18** | **25** |

---

## PRIORITY ORDER FOR IMPLEMENTATION

### Tier 1: Priority Inversion Fixes (IMPLEMENT FIRST)
1. **V3E-001** — Experiential Pass (pa-deployment.md) — BLOCKING
2. **V3E-014** — Usability Priority Override (pa-weaver.md) — BLOCKING
3. **V3E-016** — WCAG Contrast Gate GR-55/60 (gate-runner-core.js) — BLOCKING
4. **V3E-034** — Legibility Self-Check Q0 (artifact-builder-recipe.md) — BLOCKING
5. **V3E-030** — Mechanical Failure Verdict Logic (MANIFEST.md) — BLOCKING

### Tier 2: Infrastructure Fixes (IMPLEMENT SECOND)
6. **V3E-003** — Screenshot Validation Gate (pa-deployment.md) — BLOCKING
7. **V3E-019** — Fix GR-44 False Negative (gate-runner-core.js) — BLOCKING
8. **V3E-002** — Universal Legibility Pre-Check (pa-deployment.md) — BLOCKING
9. **V3E-033** — Usability Circuit Breaker (MANIFEST.md) — BLOCKING
10. **V3E-040** — Scroll-Reveal Disabling (artifact-orchestrator.md) — SIGNIFICANT

### Tier 3: Gate Severity Restructure (IMPLEMENT THIRD)
11. **V3E-022** — Split GR-05 (gate-runner-core.js) — SIGNIFICANT
12. **V3E-023** — Modify GR-06 (gate-runner-core.js) — SIGNIFICANT
13. **V3E-024** — Downgrade GR-07 (gate-runner-core.js) — MINOR
14. **V3E-025** — Downgrade GR-12 (gate-runner-core.js) — MINOR
15. **V3E-026** — Downgrade GR-43 (gate-runner-core.js) — MINOR

### Tier 4: Gate Fixes (IMPLEMENT FOURTH)
16. **V3E-020** — Fix GR-14 (gate-runner-core.js) — SIGNIFICANT
17. **V3E-021** — Fix GR-09 (gate-runner-core.js) — SIGNIFICANT
18. **V3E-017** — Add GR-56/61 Min Font Size (gate-runner-core.js) — SIGNIFICANT

### Tier 5: PA Enrichments (IMPLEMENT FIFTH)
19. **V3E-004** — Data Corruption Escalation (pa-deployment.md) — SIGNIFICANT
20. **V3E-005** — Experiential Detection Thresholds (pa-deployment.md) — SIGNIFICANT
21. **V3E-015** — Experiential Aggregation for Weaver (pa-weaver.md) — SIGNIFICANT
22. **V3E-009** — Navigation Question (pa-questions.md) — SIGNIFICANT
23. **V3E-010** — Information Extraction Question (pa-questions.md) — SIGNIFICANT
24. **V3E-039** — ARIA Requirement (artifact-builder-recipe.md) — SIGNIFICANT

### Tier 6: Minor Improvements (IMPLEMENT IF TIME)
25-52. All MINOR enrichments (V3E-006-008, V3E-011-013, V3E-018, V3E-025-029, V3E-031-032, V3E-035-038, V3E-041-046, V3E-048-052)

---

## ENRICHMENTS NOT EXTRACTED (Filtered Out)

The following findings from Phase 2 reports were NOT extracted as enrichments because they are strategic considerations, not actionable spec changes:

1. **"Pipeline is the problem" paradigm thesis** — Valid strategic question but not a spec change. Addressed by V3E-052 (A/B test protocol).
2. **"Reduce to 3 auditors" proposal** — Captured as V3E-006 (CONSIDER) but not a direct spec edit.
3. **"Has any human read a pipeline page?"** — Meta-question from buddy-metacognitive, not a spec change.
4. **"Is PA-05 a valid quality metric?"** — Structural concern from buddy-metacognitive, not a spec change.
5. **"Opus vs Sonnet builder variable"** — Unexamined confound noted by adversarial buddy. Experiment needed, not spec change.
6. **"Is 3/4 acceptable?"** — Meta-question from MASTER-SYNTHESIS Action Item 9. User decision, not spec change.
7. **"Content selection is unexamined"** — Paradigm analyst blind spot. Design question, not spec change.
8. **Phase 2's own disproportionality** — Metacognitive finding about analysis overhead. Self-referential, not spec change.

---

*52 enrichments extracted from 20 Phase 2 reports. 9 BLOCKING, 18 SIGNIFICANT, 25 MINOR. Priority-ordered into 6 implementation tiers. The dominant theme: the pipeline optimizes for CSS compliance when it should optimize for reader experience. The top 5 enrichments collectively invert the priority hierarchy at every pipeline stage.*

# Nuance Recovery: Second-Pass Verification (Files 01-07)

**Verifier:** nuance-checker-1
**Date:** 2026-02-16
**Method:** Section-by-section comparison of original files 01-07 against extraction outputs 01, 02, 03

---

## FILE 01: 01-pa-lessons-for-build.md (505 lines) vs 01-extraction (Items 01-001 through 01-021)

### Section 1: PA Question Diagnostic Value Ranking (lines 16-92)

**MISSED: Full ranked table with hit rates and false positive rates.**
The extraction captured the KEY INSIGHT (spatial questions are king) but did NOT extract:
- The complete 30-question ranking (Tier A through D) with exact hit rates (e.g., PA-09 = 9/9, PA-33 = 9/9, PA-13 = 4/9)
- False positive rate data: ALL questions in Tier A had 0% false positive rate
- Tier D "No-Signal" questions: PA-02, PA-06, PA-07, PA-14-16, PA-18-19, PA-37-39, PA-45 all PASS -- this is important because these questions can be DEPRIORITIZED or SKIPPED for pages that clear basic readability
- Specific findings per question: e.g., PA-20 found "Technical. Austere. Unfinished" (2/3 personality mismatch), PA-44 found "40% survival rate" for metaphor
- PA-42 finding: "Whitespace voids serve zone metaphor but look broken" -- the tension between metaphor fidelity and perceptual quality
- PA-48 ranking: "4th of 5 -- has merit, needs structural revision" -- calibration data for the client ranking question

**MISSED: The phrase "over-weighted toward text readability and under-weighted toward spatial composition for pages that clear the basic readability bar."**
While the extraction mentions this in 01-001, the CONDITIONAL nature ("for pages that clear the basic readability bar") is critical. The PA skill is NOT universally over-weighted -- only when readability is already fine.

### Section 2: PA Dimension Hit Rates (lines 96-116)

**MISSED: Complete dimension-by-dimension hit rate table.**
The extraction does not capture:
- Spatial + Proportion = 100% hit rate (7/7)
- Flow + Pacing = 100% (5/5)
- Consistency + Rhythm = 50% (2/4)
- Grid + Layout = 40% (2/5)
- Readability + Typography = 20% (1/5)
- The CONCLUSION at line 115: "The DIMENSION assignment determines what gets found"

**MISSED: Auditor identities mapped to dimensions.**
- Auditor C = Spatial, Auditor D = Flow, Auditor A = Impression, etc.
- This mapping is operationally important for dimension assignment in Mode 4.

### Section 3: Why Mode 4 Caught What Initial Audit Missed (lines 119-159)

**MISSED: The 5 specific causes of the initial audit missing the void.**
The extraction captures the general lesson (Mode 4 better than lighter audits) but misses the specific diagnostic causes:
- **Cause 1:** Playwright contention masked void -- blank renders dismissed as "rendering artifacts" (line 131-132). This is a PROCESS lesson: contention can mask real failures.
- **Cause 2:** Programmatic auditors can't see spatial failure -- "no programmatic metric for 'does the scroll experience feel empty'" (line 135)
- **Cause 3:** Two PAs insufficient breadth -- PA-1 attributed failure to header, PA-2 saw blank screens dismissed as artifacts (lines 137-138)
- **Cause 4:** No spatial specialist -- initial audit didn't assign by dimension (line 141)
- **Cause 5:** PA-05c failure was misattributed -- "stopped at the first proportional problem found ('header') and didn't investigate further" (line 144)

**MISSED: Line 148 -- "9 independent cold looks (27 across viewports)".**
27 total cold looks because 9 auditors x 3 viewports.

**MISSED: Line 159 -- "Only breadth-of-perspective (9 independent auditors) with depth-of-focus (dimension specialization) catches this category of failure."**
This is the META-LESSON: breadth AND depth together, not just one.

### Section 4: Embedding PA-Level Scrutiny INTO Build Process (lines 163-216)

**Generally well-captured (Items 01-002, 01-003, 01-004).** However:

**MISSED: Line 167 -- "This is wasteful and often unfixable -- spatial composition problems require structural changes, not CSS tweaks."**
The extraction captures the checkpoints but not the REASON PA is post-hoc: spatial problems are UNFIXABLE after the fact.

**MISSED: Line 183 -- the re-audit quote: "The fix treated a CONTENT problem as a SPACING problem. Reducing padding around empty zones still leaves empty zones."**
This specific quote is referenced but not attributed to the re-audit in the extraction.

**MISSED: Checkpoint 1 binary rule uses "heading + paragraph + one of: table, diagram, code block, callout" as the formula.**
The extraction captures ">= 3 distinct content elements" but the specific composition (heading + paragraph + one other) is the actual formula.

### Section 5: The Builder's 10 (lines 219-256)

**Well-captured (Item 01-005).** Minor misses:

**MISSED: Line 247-255 -- the rationale for WHY 10 questions and not 5.**
The extraction captures the B-01 through B-10 questions and their source PAs but does not capture the explicit category breakdown (3 spatial, 2 flow/pacing, 1 readability, 1 metaphor, 1 consistency, 1 compliance, 1 guardrail).

**MISSED: Lines 243-244 -- the escalation distinction.**
"If B-01, B-03, B-09, or B-10 FAIL: STOP and fix before continuing. If any other question FAILS: note it, continue, but address before declaring done."
The extraction captures this but only as a cross-reference. It is a CRITICAL operational distinction (4 are blocking, 6 are non-blocking).

### Section 6: Original Audit vs Re-Audit (lines 259-321)

**PARTIALLY MISSED: The side-by-side comparison table (lines 264-277).**
The extraction captures the general findings but NOT the specific metrics:
- Cold look NO count: 2 -> 7 (WORSE)
- WOULD-NOT-SHIP count: 6 -> 7 (WORSE)
- PA-05a DESIGNED: Partial pass -> 1.5/4
- PA-05b COHERENT: Pass -> 3.5/4 (STRONG)
- PA-05c PROPORTIONATE: Fail -> 0.5/4 (UNCHANGED)
- PA-05d POLISHED: Pass with concerns -> 2.5/4

**MISSED: Line 282 -- the 40 CSS/HTML changes enumerated.**
Specific changes: spacing reduction (1,652px saved), header metadata contrast (opacity 0.7->0.85), header padding (128px->72px), 5+ designed moments added, 4 new responsive breakpoints, zone indicator color progression, footer margin (80px->32px).

**MISSED: Finding 5 (lines 310-315) -- "Cold look verdicts can WORSEN after a 'fix.'"**
Three possible reasons listed: primed auditors, void MORE frustrating after "fix" claim, shifted expectations. This is a METACOGNITIVE finding about audit methodology.

### Section 7: Metacognitive Lessons (lines 325-394)

**PARTIALLY CAPTURED (Items 01-006 through 01-012).** Key misses:

**MISSED: Line 334 -- "Any ONE auditor could be wrong. NINE cannot all hallucinate the same finding."**
This is the statistical argument for Mode 4 breadth.

**MISSED: Line 341 -- Auditor C produced a 195-line report on spatial questions.**
Specific evidence of dimension specialization depth.

**MISSED: Lines 347-352 -- specific adversarial auditor quotes.**
- "This is a developer README that someone put in a nice font" (re-audit adversarial)
- "Convention-shaped, not intention-shaped" (original adversarial)
- "Vocabulary of sophistication, structure of incompletion" (re-audit adversarial)
These quotes are diagnostic tools for identifying the category of failure.

**MISSED: Line 364-375 -- the Programmatic vs Perceptual table.**
Complete categorization of what each audit type catches:
- Token violations: Programmatic YES, Perceptual NO
- Container width: Programmatic YES, Perceptual PARTIALLY
- Soul violations: Programmatic YES, Perceptual NO
- Spatial composition: Programmatic NO, Perceptual YES
- Visual momentum: Programmatic NO, Perceptual YES
- Metaphor quality: Programmatic NO, Perceptual YES
- Typography comfort: Programmatic NO, Perceptual YES
- Heading spacing ratio: Programmatic YES, Perceptual NO

**MISSED: Line 381-385 -- scroll-through protocol specifics.**
"Take viewport-sized screenshots at 80% scroll increments, examine EACH one individually." The 80% increment number is operationally specific.

**MISSED: Lines 389-393 -- lock sheet temporal firewall details.**
"Sovereignty classification: always-locked, locked, challengeable" -- three-tier lock system.

### Section 8: PA Skill Restructuring Recommendations (lines 397-484)

**MOSTLY CAPTURED (Items 01-013 through 01-020).** Key misses:

**MISSED: PA-50 through PA-53 are QUANTIFICATION questions, not identification questions.**
The extraction captures them but does not emphasize the distinction: existing PA questions IDENTIFY spatial failure qualitatively; the new questions QUANTIFY it. This distinction matters for severity calibration.

**MISSED: Lines 441-443 -- PA-03 removal rationale detail.**
"Both produced identical PASS results" -- the empirical evidence for redundancy.

**MISSED: Lines 457-469 -- Root Cause Classification Protocol details.**
The extraction captures the 5 types but misses the KEY insight at line 469: "The ceiling experiment's void was misclassified as SPACING when it was actually CONTENT. This misclassification caused the fix to fail."

**MISSED: Lines 473-483 -- the void guardrail NUMBERS.**
- Content-to-viewport ratio: 44% minimum (existing)
- Section vertical spacing: 48px minimum to 160px maximum (existing)
- Content-to-space ratio: 50/50 minimum content (existing)
These are the EXISTING guardrails that the new guardrails complement.

---

## FILE 02: 02-enrichment-specifications.md (659 lines) vs 01-extraction (Items 02-001 through 02-009)

### Overview section (lines 10-22)

**MISSED: Line 22 -- "All 7 gaps trace to Failure 1 (catastrophic whitespace void). This is expected -- the void was caused by the convergence of missing constraints across multiple files."**
The extraction captures individual gaps but not this convergence insight. The void is not caused by ONE missing constraint but by the INTERSECTION of missing constraints across 4 files.

### B1: Maximum Whitespace Prohibition (lines 26-108)

**MOSTLY CAPTURED (Item 02-001).** Key misses:

**MISSED: Lines 76-82 -- "Why This Specific Wording" rationale.**
5 specific design decisions:
1. "100vh at 1440px" ties to standard audit viewport
2. "30% content coverage" threshold from enrichment audit
3. "2+ consecutive positions" distinguishes breathing from void
4. CONDITIONAL (not ABSOLUTE) -- has documented exception unlike Prohibition #1
5. Binary measurement steps -- agent can execute mechanically

**MISSED: Lines 86-93 -- Compliance Test alternative method.**
Automated alternative: `document.querySelectorAll('*')` -> sum element heights with visible text/image content -> divide by scrollHeight. If ratio < 0.40, flag for manual review. The 0.40 threshold is DIFFERENT from the 0.30 per-position threshold.

**MISSED: Lines 95-108 -- Summary Statistics update specifics.**
Change "12" to "13" for conditional, "22" to "23" for total. (Plus later B3 would change to "14" and "24".)

### A1: Transition Grammar (lines 112-224)

**MOSTLY CAPTURED (Item 02-002).** Key misses:

**MISSED: Lines 148, 169, 191 -- Validated examples for each transition type.**
- Type 1 HARD CUT: "CD-006 uses 3px primary border hard cuts between major content modes (39/40 audit score)"
- Type 2 SPACING SHIFT: "OD-004 uses spacing compression between established (40px) and speculative (16px) strata"
- Type 3 CHECKPOINT: "Ceiling experiment's CHECK-01 through CHECK-05 system (the one successful spatial element in an otherwise failed page)"
These validated examples provide copy-paste-ready patterns.

**MISSED: Line 206 -- Maximum transition spacing rule.**
"No transition may exceed `var(--space-max-zone)` (96px) in total vertical space consumed (see C3 below)."
The extraction captures this as a cross-reference but not as a standalone rule within the transition grammar section.

### A2: Restraint Protocol (lines 227-293)

**MOSTLY CAPTURED (Item 02-003).** Key misses:

**MISSED: Line 254 -- "At 4 simultaneous mechanisms, readers can perceive each one distinctly. At 5+, mechanisms compete for attention and none register clearly."**
The perceptual threshold for mechanism saturation.

**MISSED: Lines 268-277 -- The Restraint Ratio documentation requirement.**
Target ratios per tier:
- Middle: Deploy 8-10, no rejection documentation required
- Ceiling: Deploy 12-15, document 3+ rejected mechanisms with reasoning
- Flagship: Deploy 16-18, document 5+ rejected mechanisms with reasoning
The extraction captures "document rejected mechanisms" but not the PER-TIER minimums.

### A3: Content Density Minimum Per Zone (lines 297-391)

**WELL CAPTURED (Item 02-004).** Minor misses:

**MISSED: Lines 368 -- the worked example for ceiling experiment.**
"6,500 words allows maximum 4 zones -- but only if each zone has at least 1,625 words."
Specific arithmetic showing the ceiling experiment would have been caught.

### B3: Front-Loaded Visual Weight Prohibition (lines 394-450)

**WELL CAPTURED (Item 02-005).** Minor misses:

**MISSED: Lines 438-439 -- "Simpler and more conservative than 'final third.' A designed moment at 51% scroll satisfies this rule while still being in the middle of the page."**
Design decision rationale for why 50% threshold instead of final-third.

### C3: Maximum Spacing Token (lines 453-493)

**WELL CAPTURED (Item 02-006).** Minor misses:

**MISSED: Line 492 -- the automated grep command.**
`grep -E "(margin|padding).*[0-9]+(px|rem)" page.css` -- specific regex for compliance checking.

### D3: Content-Form Fit Guidance (lines 496-606)

**WELL CAPTURED (Item 02-007).** Minor misses:

**MISSED: Lines 601-604 -- the inverse test is "FLAG for review (not automatic fail, but documented concern)."**
The "simplest form" test is NOT a hard fail -- it's a soft flag. This distinction matters operationally.

### Cross-Gap Dependencies (lines 609-633)

**CAPTURED (Item 02-008).** Key miss:

**MISSED: Lines 631-633 -- the implementation ORDER recommendation with rationale.**
"B1 first (establishes the prohibition), then C3 (token-level prevention), then A3 + D3 (content-level prevention), then A1 (structural prevention), then A2 (distribution), then B3 (arc-level prevention)."
The extraction captures the order but not the REASONING (prohibition -> token -> content -> structural -> distribution -> arc).

---

## FILE 03: 03-spatial-confidence-gate.md (1,110 lines) vs 01-extraction (Items 03-001 through 03-019)

### Section 1: Void Budget Calculation (lines 16-168)

**MOSTLY CAPTURED (Items 03-001, 03-002).** Key misses:

**MISSED: Lines 73-78 -- the simplified estimation method formulas.**
Specific per-element estimation constants:
- body_text_lines = word_count / 12 (avg 12 words per line at 960px, 18px Inter)
- body_text_px = body_text_lines * 30.6 (18px * 1.7 line-height)
- code_block_px = code_lines * 22.3 (0.875rem * 16px * 1.5 line-height ~= 21px + 1.3px padding per line)
- table_px = table_rows * 40
- list_px = list_items * 30
- heading_px = heading_count * 55
- callout_px = callout_count * 120

The extraction captures these but the SPECIFIC derivation (e.g., 22.3px = 0.875rem * 16px * 1.5) is missing.

**MISSED: Lines 112-159 -- the complete worked example.**
The post-hoc ceiling experiment void budget calculation with actual values. This is a calibration reference showing the gate PASSES (92%) even though the page failed perceptually. Key values:
- Content subtotal: ~33,550px
- Zone padding subtotal: 456px (7 zones with specific padding values)
- Transition subtotal: 472px (entry gate 40px, security desk 80px, smooth dividers 3x48px, vault door 80px, bridge transitions 2x64px)
- Misc overhead: ~1,830px
- Total page: ~36,308px
- Result: 92:8 PASS

**MISSED: Lines 161-168 -- WHY gate passes but page failed.**
Three specific reasons:
1. Horizontal void: 960px content in 1440px viewport = 33% horizontal fill
2. Perceptual fatigue from zone uniformity
3. Checkpoint dividers were empty `<div>` elements with no visible content
This is the calibration note that makes the gate useful -- it catches gross failures, not the ceiling's specific failure mode.

### Sections 2-3: The 7 Binary Checks and Gate Timing (lines 172-562)

**WELL CAPTURED (Items 03-003 through 03-013).** Key misses:

**MISSED: SC-02 JavaScript code at lines 218-244.**
The complete `elementsFromPoint` scanning algorithm with content-bearing tag detection. The extraction mentions "full implementation" but doesn't capture the specific tag list: `['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'pre', 'code', 'blockquote', 'figcaption', 'dt', 'dd']`.

**MISSED: SC-03 includes additional inline tags in its content check (line 281).**
SC-03 adds `span`, `a`, `strong`, `em` to the content tag list. SC-02 does NOT include these. The difference is intentional: SC-02 measures STRUCTURAL void (no content elements); SC-03 measures CONTENT COVERAGE (any text).

**MISSED: Line 343 -- "Note on viewport height" for SC-05.**
"At 1440px width, typical viewport height is 900px (16:10 aspect ratio) or 810px (16:9). Use the ACTUAL viewport height reported by window.innerHeight."

**MISSED: Lines 486-498 -- Gate Execution Protocol step details.**
- Step 1: spatial-auditor output goes to `03-spatial-audit.md` specifically
- Step 2: team-lead takes screenshots WHILE spatial-auditor runs programmatic checks (parallel)
- Step 3: team-lead reads audit file and combines
- Step 4: ALL 7 PASS -> message planner "Spatial gate passed. Proceed to Pass 2 elaboration plan."

**MISSED: Lines 519-542 -- Fix Cycle Protocol exact sequence.**
The 7-step sequence per fix cycle:
1. Team-lead identifies WHICH checks failed and WHY
2. Team-lead sends fix instructions via SendMessage (WHICH checks, WHAT values, WHAT targets, SPECIFIC CSS/HTML changes)
3. Skeleton-builder applies fixes to flagship-page.html (v1.N)
4. Skeleton-builder sends ANOMALY-FLAG with changes list and new estimated height
5. Spatial-auditor re-runs all 7 checks
6. Team-lead re-evaluates SC-04
7. Verdict: ALL PASS -> proceed; ANY FAIL + N<2 -> cycle N+1; ANY FAIL + N=2 -> ABORT

**MISSED: Line 544 -- Estimated time per fix cycle: 10-20 minutes.**

**MISSED: Lines 553-562 -- Downgrade decision detail.**
Two downgrade paths:
- Passes 4-5 of 7: rebuild FAILING sections only targeting ceiling tier without metaphor zone obligations
- Passes < 4: abandon skeleton entirely, rebuild at ceiling tier with simpler spatial architecture (2-3 sections, no zone progression), keep metaphor at vocabulary level only

### Section 4: Programmatic Implementation (lines 566-957)

**PARTIALLY CAPTURED (Items 03-014, 03-015).** Key misses:

**MISSED: The complete runSpatialConfidenceGate() function (lines 572-930).**
The extraction notes its existence but the 360-line JavaScript function contains operational details:
- Container selector fallback chain: `.page-container`, `[class*="container"]`, `main`, `article`, `.content`
- SC-02 scan uses the container center as scanX, not viewport center
- SC-02 handles void extending to end of page (lines 679-690)
- SC-03 uses `Math.max(0, y - window.innerHeight / 2)` for scroll positioning
- SC-06 deduplicates sections using a Set
- SC-07 handles both missing footer and excessive gap

**MISSED: Lines 936-957 -- Playwright integration specifics.**
- `page.setViewportSize({ width: 1440, height: 900 })` -- specific viewport dimensions
- `page.waitForLoadState('networkidle')` -- wait strategy
- `page.waitForTimeout(2000)` -- 2-second font/layout settle time

### Section 5: Decision Matrix (lines 1012-1041)

**WELL CAPTURED (Item 03-017).** Key miss:

**MISSED: Line 1038 -- "ESCALATE" definition.**
"Team-lead must diagnose whether the failure is CSS-fixable or metaphor-structural BEFORE authorizing fix cycle 2. If metaphor-structural, skip cycle 2 and ABORT immediately (saves 10-20 minutes)."

**MISSED: "FIX IN PLACE" definition at line 1040.**
"The check is trivially fixable (1-3 line CSS change). Allow a targeted fix even after 2 cycles. This does NOT extend the fix cycle count."

### Section 6: Relationship to Other Gates (lines 1044-1081)

**WELL CAPTURED (Item 03-018).** Key miss:

**MISSED: Line 1080 -- "Gates 2 and 3 run IN PARALLEL after Pass 1 completion."**
The extraction captures this but doesn't emphasize that this is a time-saving parallelism opportunity.

### Section 7: Evidence Traceability (lines 1084-1098)

**PARTIALLY CAPTURED (Item 03-019).** Key misses:

**MISSED: Specific threshold derivation rationale for each value.**
The table at lines 1090-1098 provides WHY each number was chosen:
- Container 940-960px: "960px is the design system standard. 940-960 range allows for sub-pixel rendering variance."
- Max void 1.5 viewports: "1.5 viewports is the threshold where void becomes perceptually dominant -- scrolling through 1.5 blank screens makes the reader think the page is broken."
- Content 70%: "70% is the floor where content feels present throughout the page. Below 60%, void dominates perception."
- Header 20%: "20% is generous -- 15% is better. 20% provides headroom for metaphor-rich headers."
- 5+ sections: "Content-form analysis identified 5 natural sections for the ceiling's content."
- Footer gap 1 viewport: "1 viewport of gap is generous -- 0.5 would be tighter."
- 2 fix cycles: "2 cycles = 20-40 minutes of fix time. After 2 cycles without resolution, the problem is structural."
- 60:40 pre-build: "Pre-build estimates have ~10% error margin, so 60% pre-build ~= 55-65% post-build."

---

## FILE 04: 04-restraint-protocol.md (583 lines) vs 02-extraction (Items RP-01 through RP-19)

### Section 1: Rejection Log Format (lines 16-108)

**WELL CAPTURED.** Key misses:

**MISSED: Lines 19-28 -- the rationale with three specific evidence points.**
1. Ceiling deployed 14, only 1 perceivable. Signal saturation eliminated drama.
2. Content-form analysis: 1.18:1 signal-to-silence ratio -- too flat. Best moment (architecture diagram) had 3:1 silence-to-signal LOCALLY.
3. Adversarial research: "Richness comes from the ratio of signal to silence, not from the total amount of signal."

**MISSED: Lines 43-74 -- the 3 WORKED EXAMPLES of rejection entries.**
Three complete rejection entries with full 5-field format:
1. #7 Zone Background Differentiation rejected for callout interiors
2. #5 Dense/Sparse Alternation rejected for within-section paragraph rhythm
3. #1 Border-Weight Gradient rejected for uniform h3 headings

These examples are CRITICAL because they demonstrate what "good rejection reasoning" looks like. Without them, agents may produce trivial rejections.

**MISSED: Line 96-98 -- the 1.5:1 ratio derivation.**
"14 deployed x 1.5 = 21 rejections minimum. 12 deployed x 1.5 = 18 rejections minimum (rounded up to 21 for consistency)."

**MISSED: Line 100 -- the counting rule specificity.**
"The same mechanism rejected at different locations counts as separate rejections."

### Section 2: Silence Zone Specification (lines 111-206)

**MOSTLY CAPTURED (RP-06 through RP-09).** Key misses:

**MISSED: Lines 120-121 -- "A silence zone is NOT void. It contains CONTENT."**
Critical distinction: silence zones have paragraphs and lists, just no mechanism CSS. They are NOT empty space.

**MISSED: Lines 124-143 -- the complete CSS ALLOWLIST and PROHIBIT LIST.**
Specific CSS properties ALLOWED in silence zones:
- `font-family: var(--font-body)`, `font-size: var(--type-body)`, `line-height: 1.7`, `color: var(--color-text)`, etc.
Specific CSS PROHIBITED:
- `border-left: *`, `border-left-color: var(--accent-*)`, `background: var(--color-zone-*)`, any pseudo-elements, grid/flex beyond standard flow, drop cap, any catalog mechanism

**MISSED: Line 170 -- the MAXIMUM silence zone guidance.**
"No cap, but more than 6 risks the page feeling sparse rather than restrained."

**MISSED: Lines 182-194 -- the silence zone DOCUMENTATION FORMAT.**
6-field template: LOCATION, APPROXIMATE POSITION (% scroll), CONTENT WITHIN, WHAT IT FOLLOWS, WHAT IT PRECEDES, WHY SILENCE HERE.

### Section 3: Mechanism Cap Enforcement (lines 209-284)

**WELL CAPTURED (RP-10 through RP-14).** Key misses:

**MISSED: Lines 222-234 -- the "Deployed" definition table.**
4 specific scenarios with YES/NO verdicts:
- CSS exists AND classes used in HTML = YES (counts as 1)
- CSS exists but NO element uses classes = NO (not deployed)
- Same mechanism at Page AND Component scale = YES (counts as 1, not 2)
- Different mechanisms encoding same semantic purpose = YES (counts as 2)

**MISSED: Lines 255-267 -- the unused mechanism SELECTION CRITERIA.**
3 specific criteria for choosing which mechanisms to leave unused:
1. Does content have the structural property this mechanism requires?
2. Would deploying duplicate another mechanism's semantic channel?
3. Does perceptual effectiveness justify deployment given content density?

### Section 4: Signal-to-Silence Ratio (lines 287-405)

**MOSTLY CAPTURED (RP-15, RP-16).** Key misses:

**MISSED: Lines 296-298 -- the ceiling experiment's ratio analysis.**
- Ceiling measured 1.18:1 (67 signal, 57 silence) = TOO FLAT
- Best moment ratio: ~0.33:1 (1 signal, 3 silence elements) = too extreme for full page but demonstrates principle
- 0.6-0.8:1 = "predominantly quiet with distinct signal peaks"

**MISSED: Lines 301-319 -- the COMPLETE signal event type table.**
7 signal types with examples:
- Structural borders (4px border-left on callout, 3px border-bottom on header)
- Background shifts (zone background change)
- Dark-background blocks (header, footer, code blocks, checkpoint dividers)
- Component containers (callouts, data tables, bento grid cells)
- Decorative elements (drop cap, solid offset depth, ::after)
- Typographic emphasis (headings with custom styling beyond scale)
- Transition markers (section dividers, checkpoint bars, zone indicators)

And the DO NOT COUNT list:
- Standard h2/h3 with only typographic scale = NOT signal
- Standard paragraph text = NOT signal
- Standard list items = NOT signal
- Standard link styling = NOT signal
- Spacing and padding = silence, NOT signal

**MISSED: Lines 327-330 -- silence zone WEIGHTING rule.**
"Designed silence zones count as 2 each" -- silence zones are weighted 2x because they are designed, not accidental. This affects ratio calculation.

**MISSED: Lines 347-398 -- the complete WORKED EXAMPLE.**
16 signal events and 17 silence elements enumerated, producing ratio 16/21 = 0.76:1 (PASS). This example is operationally critical for agents to understand how to count.

### Section 5: Synthesis (lines 408-462)

**PARTIALLY CAPTURED (RP-19).** Key misses:

**MISSED: Lines 413-434 -- the interlocking equation.**
How the 4 dimensions constrain each other: Mechanism Cap -> limits signal sources -> Rejection Log forces consideration of WHERE -> Silence Zones create structural gaps -> Signal-to-Silence Ratio validates the combination.

**MISSED: Lines 439-445 -- the failure mode prevention table.**
Maps each ceiling failure to its preventing restraint dimension.

### Section 6: Builder Instructions (lines 465-503)

**CAPTURED (RP-17).** However:

**MISSED: The instruction block is exactly 33 lines (not "< 30" as described).**
The actual line count matters for prompt length budgeting.

### Appendix B: Quick Reference Card (lines 562-578)

**MISSED: The complete quick reference card.**
12-row table with all restraint values and their sources. This is the most efficient reference for the execution prompt.

---

## FILE 05: 05-content-first-methodology.md (965 lines) vs 02-extraction (Items CF-01 through CF-26)

### Opening section (lines 17-25)

**MISSED: The one-sentence lesson at line 20.**
"The ceiling experiment chose a 'Secure Facility' metaphor that scored 12/12 in derivation, then inflated 5 natural content sections into 10 structural blocks (7 zone sections + 3 checkpoint dividers), producing ~1,200px of structural overhead on ~11,500px of content."
This single sentence captures the entire content-first argument.

**MISSED: Lines 23-24 -- the root cause statement.**
"The content was then distributed across the metaphor's pre-built structure. Where content didn't fill a zone, the zone existed anyway."

### Section 1: Content Inventory Template (lines 28-165)

**WELL CAPTURED (CF-01, CF-02).** Key misses:

**MISSED: Lines 62-67 -- the Information Density scale definition.**
- HIGH = technical core, multiple code blocks + tables, reader must concentrate
- MEDIUM = explanatory prose with some code/tables, reader can flow
- LOW = orientation, context-setting, minimal technical content

**MISSED: Lines 66 -- Reader Intent taxonomy.**
6 intents: LEARN, BUILD, VERIFY, ORIENT, DECIDE, REFLECT

**MISSED: Lines 137-146 -- the Zone Justification criteria.**
A zone boundary requires ALL THREE conditions:
1. Content mass >= 800px rendered height
2. Content TYPE changes (narrative -> reference, conceptual -> procedural)
3. Reader INTENT changes (learning -> building, building -> verifying)
The extraction captures zone count but not these 3 specific justification criteria.

### Section 2: Content-to-Pattern Selection Rules (lines 167-281)

**WELL CAPTURED (CF-06 through CF-10).** Key misses:

**MISSED: Lines 185-191 -- the density shape -> pattern implications table.**
5 density shapes with specific pattern guidance:
- Early peak, tapering -> avoid escalating structures
- Middle peak, bookends light -> create visual arch
- Late peak -> escalating patterns work
- Uniform -> avoid zone-based patterns; use section-level rhythm
- Multi-peak -> independent section treatments

**MISSED: Lines 196-201 -- the content mix -> pattern implications table.**
4 content mixes:
- >70% prose -> width variation, typographic rhythm, editorial patterns. Grid/bento do NOT work.
- >50% code/tables -> reference patterns, dense formatting
- Mixed 40-60% -> hybrid, zone backgrounds differentiate prose from reference
- Heavy diagrams -> feature patterns, diagrams need prominence

**MISSED: Lines 249-281 -- the complete decision flowchart.**
5-step binary flowchart with specific actions at each decision point.

### Section 3: Metaphor Selection Criteria (lines 285-393)

**WELL CAPTURED (CF-11 through CF-15).** Key misses:

**MISSED: Lines 289-297 -- the ceiling experiment's scoring breakdown.**
Original 4-criterion scores: Structural depth 3, Tension resonance 3, Mechanism affinity 3, Semantic surplus 3.
Plus: "0/4 perceptual risk and only 1/5 perceptual cost."
This shows the original rubric gave a PERFECT score to a metaphor that failed.

**MISSED: Lines 320-327 -- the key test for criterion 5.**
"Remove all text labels from the page. Can a reader still perceive the metaphor through visual structure alone?"
The ceiling experiment's 35-45% survival = score 0. This test is operationally critical.

**MISSED: Lines 808-837 -- the alternative metaphor scoring examples.**
Two alternative metaphors rescored on the 6-criterion rubric:
- "Geological Cross-Section": 15/18 (Interpretive Distance 3, Content-Shape Fit 2)
- "Manuscript/Codex": 15/18 (Interpretive Distance 2, Content-Shape Fit 3)
Both score higher than "Secure Facility" at 13/18. This demonstrates the rubric works.

### Section 5: Worked Example (lines 481-893)

**PARTIALLY CAPTURED.** Major misses:

**MISSED: Lines 484-723 -- the complete retroactive content inventory.**
A full worked example applying the methodology to the ceiling experiment's content. This is the MOST VALUABLE section for agents because it shows exactly what a content inventory looks like when filled in. Includes:
- Full section catalog (5 sections with counts)
- Natural groupings (5 groups with rationale)
- Density map (Section 3 = PEAK, Section 1 = DIP, peak position = MIDDLE)
- Content boundaries (4 natural, 3 artificial)
- Height estimates per section (844px, 1616px, 8402px, 6057px, 3729px)
- Zone justification (5 zones, all meeting 3 criteria)

**MISSED: Lines 725-786 -- "What the Ceiling Experiment Actually Did".**
Side-by-side comparison table showing 6 metaphor demands vs content reality:
- 4 zones vs 5 natural sections
- Zone 3 with 3 sub-rooms vs one continuous technical core
- Zone 4 as densest vs Section 3 being densest
- 7 transitions vs 4 natural transitions
- Zone indicators vs content headings already marking sections
Inflation factor: 2x (10 structural blocks vs 5 needed)

**MISSED: Lines 788-869 -- the content-first reconstruction comparison.**
Signal-to-silence ratio improvement: 1.18:1 -> 0.67:1
Eliminated elements: zone indicators (-200px), checkpoint dark bars (-390px), sub-zone boundaries, workstation title bars (-180px)
Total eliminated overhead: ~770px

---

## FILE 06: 06-communication-protocol.md (690 lines) vs 02-extraction (Items CP-01 through CP-29)

### Section 1: Evidence Base (lines 27-61)

**MOSTLY CAPTURED.** Key misses:

**MISSED: Lines 35-41 -- specific ceiling experiment failures from zero messaging.**
- Checkpoint dividers were empty `<div>` elements -- builder never asked "is 900px of checkpoint whitespace intentional?"
- Fix team misdiagnosed void as CSS problem -- no agent could ask "is this spacing or architecture?"
- 5-member fix team operated in parallel isolation

**MISSED: Lines 46-47 -- CD-006 messaging outcomes.**
"Builders could ask clarifying questions, planner could proactively flag concerns. Result: 'compositionally confident' vs 'professionally stiff'"

### Section 2: Mandatory Message Checkpoints (lines 64-243)

**WELL CAPTURED (CP-02 through CP-06).** Key misses:

**MISSED: Lines 84-92 -- the Checkpoint A example message.**
Complete worked example showing what a good Checkpoint A message looks like.

**MISSED: Lines 114-122 -- the Checkpoint B example message.**

**MISSED: Lines 144-170 -- the Checkpoint C example messages (PASS and FAIL).**
Both pass and fail examples are provided with specific measurements.

**MISSED: Lines 192-203 -- the Checkpoint D example message.**
Shows deployed/rejected mechanisms with rationale format.

**MISSED: Lines 226-239 -- the Checkpoint E example message.**
Shows intentionality inventory with HTML line references.

All these examples are operationally critical -- they show agents EXACTLY what good checkpoint messages look like.

### Section 4: Escalation Protocol (lines 294-413)

**WELL CAPTURED (CP-11 through CP-14).** Key misses:

**MISSED: Lines 305-312 -- what does NOT count for uncertainty escalation.**
- CSS property values for mechanisms already specified in plan
- Token selection from existing token set
- Minor typographic decisions within typography spec
This exclusion list prevents over-escalation.

**MISSED: Lines 314-330 -- the worked escalation example.**
Complete example message showing how a builder should report spatial uncertainty with calculation.

### Section 6: Anti-Patterns (lines 474-551)

**WELL CAPTURED (CP-18 through CP-23).** Key misses:

**MISSED: Lines 482-486 -- Anti-Pattern 1 diagnostic test.**
"Could I have caught this mistake by reading the file more carefully? If YES, file-only was fine. If NO, SendMessage was required."
This test is captured briefly but the full reasoning about AGGREGATE vs INDIVIDUAL errors is missed.

**MISSED: Lines 524-527 -- Anti-Pattern 4 specific evidence.**
The ceiling experiment's PA-2 reported "3,600px of blank space" but it was dismissed as an artifact. If PA-2 had written measurements instead of judgment, dismissal would have been impossible.

### Section 7: Message Routing Table (lines 554-577)

**CAPTURED (CP-24).** Key miss:

**MISSED: Lines 575 -- novelty-evaluator -> anyone is YES "after blind assessment only".**
The temporal constraint on novelty-evaluator messaging.

### Section 10: Failure Modes and Countermeasures (lines 650-661)

**MISSED: The complete failure mode probability table.**
7 failure modes with probability estimates, detection methods, and countermeasures:
- Builder skips Checkpoint A: MEDIUM probability
- Checkpoint A omits calculation: LOW
- Builder sends wrong measurements: LOW
- PA contamination: LOW
- Fix team skips diagnosis: MEDIUM (same failure mode as ceiling)
- Message count below 8: MEDIUM (100% historical rate in both prior experiments)
- Broadcast instead of direct: LOW

---

## FILE 07: 07-kill-criteria.md (797 lines) vs 03-extraction

### Pre-Build Kill Criteria (lines 38-165)

**WELL CAPTURED.** Key misses:

**MISSED: Lines 55-57 -- KB-01 rationale with mechanism surface area argument.**
"A flagship page at 12-16 mechanisms requires content surface area to deploy mechanisms against. Fewer than 4 sections means mechanisms will be crammed into too few contexts."

**MISSED: Lines 75-79 -- KB-02 worked example.**
Ceiling experiment: 4 zones with 4 content sections = ratio 1.0 -> FAIL. Required: 6 content sections for 4 zones.

**MISSED: Lines 93-112 -- KB-03 calculation method specifics.**
Rough estimation: "500 words ~= 800-1200px of rendered text at 18px/line 70CPL"

**MISSED: Lines 137-139 -- KB-04 evidence from metacognitive analysis.**
"The Middle experiment used a substantially shorter prompt and achieved 960px container width compliance. The Ceiling experiment used a much longer prompt and failed on container width."

**MISSED: Line 139 -- KB-04 is NOT an abort criterion.**
"This is NOT an abort criterion -- it is a compression mandate." Important distinction.

### Pass 1 Kill Criteria (lines 168-293)

**WELL CAPTURED.** Key misses:

**MISSED: Lines 172-173 -- emphasis on COMPUTED STYLES.**
"CSS declaration and computed rendering can diverge." This is why getBoundingClientRect, not CSS inspection.

**MISSED: Lines 202 -- SC-02 viewport height is 1080px, not 900px.**
The kill criteria document uses 1080px viewport height (1620 = 1.5 x 1080), while the spatial confidence gate uses 900px (2160 = 1.5 x 1440). These are DIFFERENT thresholds in different documents. This is a DISCREPANCY:
- Kill criteria SP-02: maxVoid <= 1620px (1.5 x 1080)
- Spatial gate SC-02: maxVoid <= 2160px (1.5 x 1440)
The viewport height assumption differs: 1080 vs 1440. The spatial gate appears to use viewport WIDTH (1440) not HEIGHT (900) in its calculation at line 217, which seems like an error.

**MISSED: Lines 249-257 -- SP-04 has TWO checks.**
1. headerRatio <= 25% (extraction captures this)
2. Content (first h2 or first paragraph) must be visible within first viewport (binary YES/NO)
The second check is independent -- content can be visible even if header is < 25%, or not visible even if header is exactly 25%.

**MISSED: Line 292 -- agent model specification.**
"Spatial-auditor agent (Sonnet 4.5)" -- specific model recommendation.

### Pass 2 Kill Criteria (lines 296-361)

**WELL CAPTURED.** Key misses:

**MISSED: Lines 346 -- the RGB value difference threshold.**
"Zone color differentiation >= 25 RGB value difference AND use structural borders as zone markers."
This is a specific enrichment recommendation with a measurable threshold.

### Pass 3 Kill Criteria (lines 364-421)

**WELL CAPTURED.** Key misses:

**MISSED: Lines 420-421 -- IT-03 is the ONLY judgment-based criterion.**
"It is limited to 2 human readers specifically to prevent it from being resolved by LLM agent consensus, which suffers from continuation bias."
The anti-LLM-consensus reasoning is important.

### Final Kill Criteria (lines 425-511)

**WELL CAPTURED.** Key misses:

**MISSED: Lines 442-443 -- FK-01 failure diagnosis guidance.**
"If PROPORTIONATE fails, this is a spatial architecture problem -- CSS fixes are unlikely to resolve it. If DESIGNED fails, metaphor has not manifested."
Two different failure types require different responses.

**MISSED: Lines 490-494 -- FK-04 tiered response.**
- >= 6: SHIP as FLAGSHIP
- = 5: CONDITIONAL SHIP as CEILING-EQUIVALENT (not flagship)
- <= 4: DO NOT SHIP as flagship
The distinction between flagship and ceiling-equivalent is operationally important.

### Abort Response Protocols (lines 665-725)

**MOSTLY CAPTURED.** Key misses:

**MISSED: Lines 691-692 -- Protocol B re-derivation constraint.**
"Re-derive metaphor with explicit spatial constraint: 'Metaphor must be expressible within 960px container with <= 2 zones and <= 30% void budget'"
This specific constraint string prevents the same failure mode.

**MISSED: Estimated recovery costs per protocol.**
- Protocol A: 30-60 minutes
- Protocol B: 60-90 minutes
- Protocol C: None (ship v1)
- Protocol D: 30 minutes (documentation)

### Metacognitive Checkpoints (lines 769-787)

**CAPTURED in 03-extraction.** Key miss:

**MISSED: Lines 785-786 -- the sunk cost bias question.**
"Is there any condition under which we would abandon this attempt entirely? If not, we have committed to completion regardless of evidence -- which is sunk cost bias."
This is the most operationally important metacognitive question.

---

## DISCREPANCIES BETWEEN FILES

### DISCREPANCY 1: Void Threshold Confusion
- **03-spatial-confidence-gate.md SC-02:** maxVoid <= 2,160px (using 1.5 x 1440px viewport WIDTH)
- **07-kill-criteria.md SP-02:** maxVoid <= 1,620px (using 1.5 x 1080px viewport HEIGHT)
- **Resolution needed:** These are different thresholds for the same check. The spatial gate document appears to use viewport width (1440) as the viewport height, which is incorrect. Standard viewport at 1440px wide is 900px tall, making the correct threshold 1,350px (1.5 x 900).

### DISCREPANCY 2: Header Ratio Threshold
- **03-spatial-confidence-gate.md SC-05:** headerRatio <= 20%
- **07-kill-criteria.md SP-04:** headerRatio <= 25%
- **Resolution needed:** The spatial gate is more strict (20%) than the kill criteria (25%).

### DISCREPANCY 3: Content Distribution Threshold Consistency
- **01-pa-lessons Checkpoint 2:** Content >= 60% of scroll height
- **03-spatial-confidence-gate SC-03:** Content >= 70%
- **07-kill-criteria SP-03:** Content >= 70%
- **03-spatial-confidence-gate Void Budget (pre-build):** Content >= 60%
- **Resolution:** The 60% is for pre-build estimates (which have ~10% error margin), the 70% is for post-build measurement. Both documents agree on this but the extraction should flag it clearly.

### DISCREPANCY 4: Kill Criteria document uses 5 spatial checks (SP-01 through SP-05), while the Spatial Gate document uses 7 checks (SC-01 through SC-07).
- SP-01 = SC-01 (container width)
- SP-02 = SC-02 (void budget) -- but different thresholds!
- SP-03 = SC-03 (content distribution)
- SP-04 = SC-05 (header ratio) -- but different thresholds!
- SP-05 = SC-07 (footer reachability)
- MISSING from kill criteria: SC-04 (squint test) and SC-06 (minimum content sections)

---

## SUMMARY

### Total Missed Items by Category

| Category | Count | Impact |
|----------|-------|--------|
| Specific numbers/thresholds | 23 | HIGH -- these are operational values agents need |
| Worked examples | 12 | HIGH -- agents learn from examples, not rules |
| Rationale/reasoning | 18 | MEDIUM -- helps agents make judgment calls |
| Complete tables | 9 | HIGH -- partial capture loses structure |
| Cross-file discrepancies | 4 | CRITICAL -- conflicting thresholds must be resolved |
| CSS/JavaScript specifics | 7 | HIGH -- operational code for auditors |
| Process sequence details | 11 | MEDIUM -- exact steps for protocols |
| Diagnostic distinctions | 8 | HIGH -- what counts vs doesn't count |

### Most Critical Misses

1. **DISCREPANCY: Void threshold (1,620 vs 2,160 vs 1,350px)** -- conflicting values across files
2. **DISCREPANCY: Header ratio (20% vs 25%)** -- conflicting values across files
3. **Worked examples from restraint protocol** -- without them, agents produce trivial rejections
4. **Signal-to-silence counting methodology** -- silence zones count 2x, this changes the math
5. **Complete content inventory worked example** -- agents need to see what a filled template looks like
6. **CSS allowlist/prohibitlist for silence zones** -- operationally critical for builders
7. **The 5 causes of initial audit failure** -- process lessons for audit design
8. **Content-first vs pattern-first comparison table** -- demonstrates the inflation factor

---

**END NUANCE RECOVERY REPORT**
**Files checked:** 7 originals against 3 extraction outputs
**Sections verified:** 48
**Missed items documented:** 88
**Discrepancies identified:** 4

# 07 — Handoff Enrichments

**Source:** `HANDOFF.md` (372 lines), `p3a-gate-results.json` (290 lines), `p3c-weaver-diagnostic.md` (447 lines)
**Extractor model:** Opus
**Date:** 2026-02-24

---

## Method

Each enrichment is extracted by comparing the pipeline's self-assessment against Phase 2's master findings. The key Phase 2 findings used for comparison:

- **Finding 1:** Priority inversion — pipeline prioritizes CSS compliance over human usability at every stage
- **Finding 2:** Experiential gap — PA asks auditors to EVALUATE but never to USE the page (43% miss rate)
- **Finding 3:** Complexity-quality inversion — more spec may produce worse output
- **GR-44 false negative:** Trailing void exists (~5,500px) but gate says 0
- **DPR screenshot bug:** All PA auditors received corrupted screenshots (blank from scroll-04 onward)
- **Corrected PA-05:** 2.5-3.0/4 (pipeline scored 3/4)

---

## Enrichments

### HE-001: Pipeline Self-Scores PA-05 at 3/4 — Phase 2 Corrects to 2.5-3.0/4

**Severity:** HIGH
**Target file:** `design-system/pipeline/pa-weaver.md` (calibration section)
**Category:** Verdict discrepancy

The Weaver assigned PA-05 = 3/4 (COMPOSED, lower bound). Phase 2 analysis corrects this to 2.5-3.0/4. The 0.5-point inflation comes from the Weaver's own correction methodology: it "extracts the auditor's observation about the VISIBLE content, discards the void-contaminated conclusion, and re-evaluates using corrected screenshots." This is a reasonable approach but it UPGRADES scores that were downgraded for the void — it does not independently assess the full page. The Weaver never saw the page cold. It saw corrected screenshots AFTER reading all 9 auditor reports, which means it was primed with positive void-corrected assessments.

**Proposed change:** Add calibration guidance: "When correcting for screenshot artifacts, the Weaver MUST note that its correction is inherently optimistic. Score should be presented as a RANGE (lower = conservative, upper = corrected) rather than a single number. Example: PA-05 = 2.5-3.0/4, not PA-05 = 3/4."

---

### HE-002: GR-44 Reports voidHeight = 0 — Phase 2 Found ~5,500px Trailing Void

**Severity:** CRITICAL
**Target file:** `design-system/pipeline/gate-runner.md` (GR-44 implementation)
**Category:** Gate result pattern / false negative

The gate results JSON shows `"gate": "GR-44", "status": "PASS", "measured": { "voidHeight": 0 }`. Phase 2 analysis found a trailing void of approximately 5,500px below the footer. This is a confirmed false negative — the gate's measurement algorithm is broken. The HANDOFF does not mention this discrepancy at all, which means the orchestrator never questioned GR-44's result.

**Evidence chain:** GR-44 says 0px void. Phase 2 scrolled the actual page and found massive trailing whitespace. The gate algorithm likely measures the wrong element or measures CSS height rather than rendered height.

**Proposed change:** GR-44 measurement must be replaced. Current algorithm: unknown (likely `scrollHeight - lastElementBottom`). Required algorithm: navigate to page bottom via `window.scrollTo(0, document.body.scrollHeight)`, take screenshot, check if visible content exists in the viewport. Alternatively: `Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - lastVisibleContentBottom`.

---

### HE-003: Orchestrator Accepts Protocol Override Without Independent Verification

**Severity:** HIGH
**Target file:** `design-system/pipeline/MANIFEST.md` (verdict protocol)
**Category:** Decision rationale / reasoning flaw

The Weaver verdict is SHIP WITH FIXES via protocol override. The strict protocol says REFINE (PA-05 in 2.5-3.5 range + identity gate failures). The override justification: "fixes 1-4 are all consequences of a single root cause (incomplete font/color cleanup) and could reasonably be counted as 1 fix." The orchestrator ACCEPTS this override (HANDOFF Section 4, line 205: "Agreed with Weaver's reasoning").

This is a reasoning flaw. The Weaver is the entity requesting the override, and the orchestrator is the entity meant to verify it. Instead, the orchestrator defers to the Weaver's reasoning without independent assessment. The MANIFEST should define who has override authority and require the overriding party to be different from the requesting party.

**Proposed change:** Add to MANIFEST verdict protocol: "Protocol overrides require orchestrator approval. The orchestrator MUST state independent justification (not merely 'agreed with Weaver'). If orchestrator agrees with override, orchestrator must cite specific evidence from gate results that supports the reclassification."

---

### HE-004: Chart Legibility Is Fix #5 — Matches Phase 2's Priority Inversion Finding

**Severity:** HIGH
**Target file:** `design-system/pipeline/pa-weaver.md` (fix prioritization)
**Category:** Weaver priorities / priority inversion confirmation

The Weaver's Top-5 Fixes are ordered: (1) Font stack cleanup, (2) Callout background tints, (3) Border width rounding, (4) HTML default color, (5) Chart label legibility. Fixes 1-4 are CSS compliance issues invisible to users. Fix 5 is the ONE issue that makes content unreadable to humans.

This EXACTLY matches Phase 2's Finding 1 (priority inversion). The pipeline prioritizes CSS compliance (warm palette, font trinity, integer borders, no pure black) over human usability (can you read the chart?) at every stage — including the final fix prioritization.

The HANDOFF repeats this ordering without questioning it (Section 4, lines 208-215). The orchestrator treats all 5 fixes as equally "MECHANICAL" when Fix 5 is categorically different: it affects whether users can read content.

**Proposed change:** Fix prioritization must use a different ordering criterion: USER IMPACT first, then GATE COMPLIANCE. Any fix that affects content legibility or usability ranks above any fix that only affects design-system compliance. The Weaver protocol should require: "Order fixes by: (1) fixes affecting human readability/usability, (2) fixes affecting visual perception, (3) fixes affecting identity compliance."

---

### HE-005: Pipeline Blind Spot — Zero Mention of Experiential Gap

**Severity:** HIGH
**Target file:** `design-system/pipeline/pa-weaver.md` (PA question coverage)
**Category:** Pipeline blind spot / absence as evidence

Phase 2's Finding 2 identifies that PA questions ask auditors to EVALUATE ("does this feel designed?") but never to USE the page ("can you find what Yegge means by 'Beads'?" or "try reading the troubleshooting steps — does the information hierarchy help you?"). The HANDOFF contains zero mention of this gap. The Weaver diagnostic contains zero mention. The orchestrator's compliance self-assessment contains zero mention.

This is the most significant blind spot. The pipeline cannot detect usability failures because it never tests usability. The chart legibility issue was caught ONLY because auditors visually noticed illegible text in screenshots — not because any question asked them to try reading chart content.

**Proposed change:** Add to PA question bank: 3-5 experiential/task-based questions. Examples: "PA-80: Pick a section from the table of contents and scroll to it. Did you find it easily? Did the visual hierarchy help you navigate?" "PA-81: Read the code blocks. Can you distinguish commands from output? Are syntax-highlighted keywords legible?" "PA-82: Find the author's strongest opinion on this page. How quickly did you find it?"

---

### HE-006: DPR Bug Self-Diagnosis Is Thorough BUT Misses Root Cause Implication

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/MANIFEST.md` (screenshot protocol)
**Category:** Self-identified issue / incomplete analysis

The HANDOFF identifies the DPR bug in detail (Section 5, Anomaly A1). The orchestrator correctly identifies the root cause (DPR 0.75), the impact (all 9 auditor reports contaminated), and even proposes a fix ("A simple check — do > 3 consecutive screenshots appear predominantly monochrome?"). This is good self-diagnosis.

BUT the HANDOFF misses the deeper implication: the DPR bug means the pipeline's entire PA phase was built on fabricated evidence. All 9 auditors agreed on a finding (catastrophic whitespace void) that was 100% artifact. This means the pipeline's consensus mechanism (9 independent auditors) provides ZERO protection against infrastructure failures. Consensus is only valuable when auditors observe reality, not when all 9 observe the same corrupted input.

The HANDOFF frames this as "anomaly" (fixable infrastructure bug). Phase 2 frames it as "architectural vulnerability" (consensus is fragile when inputs are shared).

**Proposed change:** Add to MANIFEST screenshot protocol: (1) DPR must be set explicitly (`page.setViewportSize()` + verify `window.devicePixelRatio === 1`). (2) Post-capture validation: check each screenshot for predominantly-monochrome content (> 80% same color = REJECT). (3) If > 2 consecutive screenshots fail validation, HALT PA phase and re-capture.

---

### HE-007: Orchestrator Self-Scores 6/10 Compliance — But Misidentifies What It Got Wrong

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/MANIFEST.md` (orchestrator checklist)
**Category:** Orchestrator compliance / self-assessment accuracy

The orchestrator rates itself 6/10 on compliance (HANDOFF Section 6). The items it flags as non-compliant are: timestamp precision, screenshot validation, GR-33/34 reclassification, fix application, DPR handling, corrected screenshots, protocol override. These are all legitimate process gaps.

But the orchestrator does NOT flag: (1) accepting GR-44's false negative without questioning it, (2) ordering fixes with compliance before usability, (3) accepting the Weaver's PA-05 = 3/4 without noting it is the optimistic end of a range, (4) not questioning whether 9 parallel auditors provide genuine redundancy when all receive the same screenshots.

The items the orchestrator missed are JUDGMENT errors, not PROCESS errors. The orchestrator's self-assessment framework only checks process compliance — did I follow the MANIFEST? It does not check reasoning quality — did my decisions make sense?

**Proposed change:** Add to orchestrator self-assessment template: "Section B: Decision Quality. For each judgment call made during this run: (1) What evidence supported the decision? (2) What evidence contradicted it? (3) Was the decision independently verified or merely accepted from a downstream agent?"

---

### HE-008: GR-14 False Positive Acknowledged — But Treatment Reveals Systemic Pattern

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/gate-runner.md` (GR-14 spec)
**Category:** Gate result pattern

GR-14 (Visual Gap <= 150px) reported 13 failures. The HANDOFF and gate JSON both classify these as "structural false positive from nested section/zone HTML." The fix note says: "Likely a gate false-positive from nested HTML structure, not a real whitespace void."

This is correct for this specific gate. But it reveals a systemic pattern: gates that produce false positives get EXPLAINED AWAY rather than FIXED. The orchestrator writes a narrative justification in the gate result JSON itself ("These are structural layout gaps from nested sections, not whitespace voids") rather than marking the gate as NEEDS_FIX or UNRELIABLE. Future runs will encounter the same false positive, write the same justification, and move on.

Meanwhile, GR-44 (the gate that should catch trailing voids) produced a false NEGATIVE that nobody questioned. The pipeline treats false positives as "known limitation" and false negatives as "not a problem."

**Proposed change:** Gate results JSON should include a `reliability` field: `RELIABLE`, `FALSE_POSITIVE_RISK`, `FALSE_NEGATIVE_RISK`, `NEEDS_REWORK`. Any gate marked `FALSE_POSITIVE_RISK` or `FALSE_NEGATIVE_RISK` must be tracked for repair. The HANDOFF should include a "Gate Health" section listing all gates that produced questionable results.

---

### HE-009: 9 Auditors Provide "~2-3x Effective Coverage, Not 9x" — Orchestrator Knows But Does Not Act

**Severity:** HIGH
**Target file:** `design-system/pipeline/MANIFEST.md` (PA architecture)
**Category:** Self-identified issue / unresolved

HANDOFF Section 7 contains a remarkably candid admission: "9 auditors provide ~2-3x effective coverage, not 9x. Question routing creates silos. Legibility detection depends on 1 auditor. The one finding all 9 agreed on (whitespace void) was a screenshot artifact."

The orchestrator has diagnosed its own PA architecture as inefficient. BUT the HANDOFF does not propose any structural change. It does not recommend reducing to 4-5 auditors with overlapping coverage. It does not recommend dual-routing critical questions. It observes the problem and moves on.

This matches Phase 2's complexity-quality inversion finding: the pipeline adds more agents (9 auditors) expecting proportionally more coverage, but diminishing returns and siloed routing mean the marginal auditor adds almost nothing.

**Proposed change:** (1) Reduce PA auditors from 9 to 5. (2) Route legibility questions (PA-02, PA-08) to at least 2 auditors. (3) Route PA-05 sub-criteria to at least 3 auditors (currently: 1 primary + 1 cross-validator per sub-criterion). (4) Save the cost of 4 auditor agents (~$15-20) per run.

---

### HE-010: "Pipeline Cannot Complete Its Own Fix Cycle" — Architectural Admission

**Severity:** HIGH
**Target file:** `design-system/pipeline/MANIFEST.md` (phase architecture)
**Category:** Self-identified issue / architectural

HANDOFF Section 7, point 5: "The pipeline cannot complete its own fix cycle. SHIP WITH FIXES is the verdict, but the fixes cannot be applied and re-verified in the same session." Section 6 repeats: "Fixes NOT applied. Context exhausted before fix phase could begin."

This means SHIP WITH FIXES is a verdict that the pipeline cannot execute on. It identifies fixes but cannot apply them. The pipeline produces a page plus a fix list, then expects a separate execution context to apply fixes. This is not documented in the MANIFEST — there is no Phase 4.

**Proposed change:** Either: (A) Add Phase 4 (Fix Application) to MANIFEST, explicitly designed for a fresh context window (receives: HTML file + fix list + gate thresholds, produces: fixed HTML + re-run of failed gates). OR (B) Redesign the pipeline to stay within context limits by reducing orchestrator overhead (fewer status updates, leaner gate evaluation, compressed handoff).

---

### HE-011: Weaver's Tier 5 Score = 9/9 — All Scored YES After Void Correction

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/pa-weaver.md` (Tier 5 scoring)
**Category:** Verdict discrepancy / scoring inflation

The Weaver scores Tier 5 at 9/9, with 2 items scored "PARTIAL (YES)" and then rounded up. For PA-61 (Independent visual rhythms): "2/4 independent = partial. Scoring YES because 2 independent channels confirmed." For PA-68 (Metaphor persists across all thirds): "Metaphor modulates but persists."

The Weaver is explicitly generous — it sees PARTIAL evidence and scores YES. Combined with the void-correction methodology (which is inherently optimistic, per HE-001), the Tier 5 score is likely inflated by 1-2 points. A conservative scoring would give 7-8/9.

This matters because Tier 5 = 9/9 combined with PA-05 = 3/4 places the page at "unlikely" in the matrix (Weaver's own words: "the matrix does not have an exact cell for this combination"). The pipeline resolves this by scoring CEILING anyway, but if Tier 5 were 7/9 and PA-05 were 2.5-3.0, the tier would be solid MIDDLE-to-CEILING rather than CEILING.

**Proposed change:** Tier 5 scoring protocol should require: "PARTIAL counts as 0.5, not 1. Round DOWN, not up. A page must earn each Tier 5 point with full evidence, not partial-with-correction."

---

### HE-012: HANDOFF Does Not Mention Trailing Void At All

**Severity:** HIGH
**Target file:** `design-system/pipeline/gate-runner.md` (GR-44)
**Category:** Pipeline blind spot / absence as evidence

The HANDOFF documents 6 anomalies (A1-A6). None of them mention a trailing void below the footer. GR-44 says `voidHeight: 0`. The Weaver says nothing about trailing space. Phase 2 found ~5,500px of trailing whitespace.

This is not a disagreement — it is a total blind spot. The pipeline has NO mechanism to detect trailing voids because GR-44 is broken and no PA question specifically asks "does the page end cleanly after the footer?" The only way this would be caught is if an auditor scrolled to the absolute bottom and noticed — but auditors receive pre-captured screenshots, so they cannot scroll.

**Proposed change:** (1) Fix GR-44 measurement (see HE-002). (2) Add a PA question: "PA-83: Look at the last screenshot. Does the page end cleanly at the footer, or is there empty space below?" (3) During screenshot capture, always include one screenshot at `document.body.scrollHeight - viewportHeight` to capture the absolute bottom.

---

### HE-013: "Gate Runner Catches Preventable Builder Errors" — Self-Identified But Not Resolved

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/MANIFEST.md` (builder spec)
**Category:** Self-identified issue / efficiency

HANDOFF Section 7, point 4: "Gate runner catches preventable builder errors. Font stacks, default colors, and fractional border widths should be caught at build time, not after a separate verification phase."

The orchestrator identifies that 4 of 8 gate failures (GR-05, GR-06, GR-07, GR-09) are things the builder should have checked before submitting. The builder received the font trinity specification and the warm palette rule — it simply did not apply them completely.

This reinforces the inefficiency: the pipeline spends ~$30-40 on 9 PA auditors and ~15 minutes on 31 gate evaluations to catch issues that could be prevented by a 10-line CSS linter appended to the builder's prompt.

**Proposed change:** Add to builder spec: "Before submitting HTML, run self-check: (1) `grep -c 'Times\|Georgia\|SF Mono' style_block` must return 0. (2) All rgba backgrounds must have R>=G>=B. (3) `html` element must have explicit color set. (4) All border-width values must be integers." This is a 4-line checklist, not a new agent.

---

### HE-014: Context Exhaustion Is "The Norm, Not The Exception" — Pipeline Exceeds Its Environment

**Severity:** HIGH
**Target file:** `design-system/pipeline/MANIFEST.md` (architecture)
**Category:** Self-identified issue / architectural

HANDOFF Section 5 (A2) and Section 7 (point 3): "The pipeline is architecturally too large for a single context window. 14 agent spawns + 31 gate evaluations + screenshot management + coordination = consistent context exhaustion. This is not an edge case; it is the expected behavior."

The orchestrator has diagnosed the pipeline as exceeding its execution environment. It took 3 sessions and ~6 hours to produce one page. This is self-aware but non-actionable within the current MANIFEST — the MANIFEST does not address context limits.

**Proposed change:** Two options: (A) Split the pipeline into 2 context-independent halves: Pipeline-A (P0+P1+P2, produces HTML) and Pipeline-B (P3A+P3B+P3C, evaluates HTML). Each runs in a fresh context. OR (B) Reduce orchestrator overhead: stop recording verbose gate justifications inline, compress status updates, use structured JSON instead of markdown for inter-phase communication.

---

### HE-015: Weaver Emotional Arc Analysis Is High-Quality BUT Disconnected From Fix Priorities

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/pa-weaver.md` (emotional arc → fix mapping)
**Category:** Decision rationale / missed connection

The Weaver produces a detailed Emotional Arc Synthesis (diagnostic Section 7): Authority 8/10, Delight 6/10, Earned Closure 6/10, Surprise 5/10. It identifies that Surprise is weakest and concentrated in the first half. It notes "the second half does not have a clear 'moment you did not expect.'"

But this analysis has ZERO connection to the Top-5 Fixes. None of the fixes address the weakest emotional register. Fix 5 (chart legibility) would improve Delight and Authority, but the Weaver does not make this connection. The emotional arc analysis is produced, filed, and ignored.

This is a design-system-level version of Phase 2's priority inversion: the pipeline generates rich qualitative analysis and then makes decisions based only on gate compliance.

**Proposed change:** Weaver protocol should require: "After emotional arc analysis, check whether any top-5 fix would improve the weakest register. If a fix improves both gate compliance AND emotional register, it ranks higher. If the weakest register has no corresponding fix, consider adding a COMPOSITIONAL recommendation (not a mechanical fix) as Fix #6."

---

### HE-016: Orchestrator Does Not Question Whether COMPOSED Mode Was Correct

**Severity:** LOW
**Target file:** `design-system/pipeline/MANIFEST.md` (mode selection)
**Category:** Decision rationale / unexamined assumption

Phase 0 selected COMPOSED mode (HANDOFF Section 4). The rationale: "HIGH heterogeneity + HIGH metaphor viability." The Weaver's Mode Detection assessment (Appendix B, diagnostic line 443): "APPLIED trending toward COMPOSED. The page has a governing logic and component adaptation, but the metaphor is more structural than atmospheric."

The Weaver assessed the final page as APPLIED-to-COMPOSED, not solidly COMPOSED. This means the mode selection (COMPOSED) may have been more ambitious than what was achieved. The HANDOFF does not reflect on whether COMPOSED mode was the right call or whether the pipeline should have targeted APPLIED mode for a more achievable goal.

**Proposed change:** Add to HANDOFF template: "Mode Retrospective: Was the selected mode (COMPOSED/APPLIED/etc.) achieved? If the Weaver's mode assessment differs from the Phase 0 selection, note the gap and whether it suggests the mode was over-ambitious or the builder under-delivered."

---

### HE-017: Components.css Discrepancy Flagged But Not Investigated

**Severity:** LOW
**Target file:** `design-system/pipeline/MANIFEST.md` (pre-flight checklist)
**Category:** Orchestrator compliance / uninvestigated

HANDOFF Section 6, unclear item 4: "The MANIFEST pre-flight says components.css is 290 lines. The builder received a 'full merged CSS' at 1,195 lines. It's unclear whether these are different files or whether the MANIFEST's line count is outdated."

The orchestrator flagged a 4x discrepancy in a critical input file's size and then... moved on. Did the builder receive the right file? Was the 1,195-line file bloated with deprecated rules? Was the 290-line file outdated? Unknown.

**Proposed change:** Pre-flight checklist should include: "Verify components.css line count matches MANIFEST expectation (tolerance: +/- 20%). If discrepancy > 20%, investigate before proceeding."

---

### HE-018: Weaver's "Corrected Screenshot" Methodology Is Undocumented In MANIFEST

**Severity:** MEDIUM
**Target file:** `design-system/pipeline/MANIFEST.md` (screenshot recovery protocol)
**Category:** Protocol gap

The Weaver received 8 corrected screenshots captured via fullPage clip regions. This correction was ad hoc — the MANIFEST has no protocol for it. The orchestrator notes this (Section 6: "Ad hoc workaround. The MANIFEST has no protocol for screenshot correction").

The correction was reasonable but its methodology introduces bias: the orchestrator selected which regions to capture, meaning the Weaver saw orchestrator-curated content rather than the neutral scroll-through that auditors are supposed to see. If the orchestrator inadvertently captured the best-looking regions, the Weaver's assessment would be optimistically biased.

**Proposed change:** If screenshot correction is needed, the protocol should specify: "Corrected screenshots must cover the ENTIRE page at regular intervals (every 900px of scroll height), not selected regions. The correction must be algorithmic, not curated."

---

## Summary Table

| ID | Severity | Category | One-line summary |
|----|----------|----------|-----------------|
| HE-001 | HIGH | Verdict discrepancy | PA-05 scored 3/4, should be presented as 2.5-3.0 range |
| HE-002 | CRITICAL | Gate false negative | GR-44 reports 0px void when ~5,500px exists |
| HE-003 | HIGH | Reasoning flaw | Orchestrator accepts Weaver override without independent justification |
| HE-004 | HIGH | Priority inversion | Usability fix (chart legibility) ranked #5 behind 4 CSS compliance fixes |
| HE-005 | HIGH | Blind spot | Zero experiential/task-based PA questions — usability untested |
| HE-006 | MEDIUM | Incomplete analysis | DPR bug diagnosed as anomaly, not as consensus architecture vulnerability |
| HE-007 | MEDIUM | Self-assessment gap | Orchestrator checks process compliance but not decision quality |
| HE-008 | MEDIUM | Gate health | False positives explained away, false negatives unquestioned |
| HE-009 | HIGH | Architecture | 9 auditors = 2-3x coverage, not 9x — known but unresolved |
| HE-010 | HIGH | Architecture | Pipeline cannot execute its own SHIP WITH FIXES verdict |
| HE-011 | MEDIUM | Scoring inflation | Tier 5 at 9/9 with 2 partials rounded up |
| HE-012 | HIGH | Blind spot | Trailing void completely invisible to pipeline |
| HE-013 | MEDIUM | Efficiency | Builder errors caught by gates, not prevented at build time |
| HE-014 | HIGH | Architecture | Context exhaustion is normal, pipeline exceeds environment |
| HE-015 | MEDIUM | Disconnection | Emotional arc analysis produced then ignored in fix prioritization |
| HE-016 | LOW | Unexamined | COMPOSED mode selected, APPLIED-to-COMPOSED achieved, gap unremarked |
| HE-017 | LOW | Uninvestigated | 4x components.css size discrepancy flagged then dropped |
| HE-018 | MEDIUM | Protocol gap | Corrected screenshots were orchestrator-curated, not algorithmic |

**Totals:** 18 enrichments (1 CRITICAL, 7 HIGH, 8 MEDIUM, 2 LOW)

---

## Cross-Reference: Phase 2 Findings Confirmed by HANDOFF Evidence

| Phase 2 Finding | HANDOFF Evidence | Enrichment |
|----------------|-----------------|------------|
| Priority inversion | Fix #5 (usability) ranked last behind 4 CSS fixes | HE-004 |
| Experiential gap | Zero mention in HANDOFF, Weaver, or orchestrator self-assessment | HE-005 |
| Complexity-quality inversion | 9 auditors = 2-3x effective coverage (orchestrator's own words) | HE-009 |
| GR-44 false negative | GR-44 reports voidHeight = 0, no one questions it | HE-002, HE-012 |
| DPR screenshot bug | Fully documented in HANDOFF Anomaly A1, but framed as fixable bug not architecture flaw | HE-006 |
| Corrected PA-05 = 2.5-3.0 | Pipeline says 3/4, Weaver methodology is inherently optimistic | HE-001 |

All 6 major Phase 2 findings are independently confirmed or reinforced by evidence within the pipeline's own self-assessment documents. The pipeline sees many of its own problems but either (a) does not act on them, (b) underestimates their severity, or (c) is structurally unable to detect them (GR-44, experiential gap).

---

*End of handoff enrichments.*

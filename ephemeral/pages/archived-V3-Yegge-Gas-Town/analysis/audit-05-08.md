# COMPREHENSIVE AUDIT — Files 05 through 08

**Auditor:** audit-05-08 (Opus 4.6)
**Date:** 2026-02-24
**Scope:** Every change, enrichment, nuance, pre-condition, safeguard, and implementation detail across 4 files
**8-Change Plan Reference:** ME-001, ME-002, ME-004, ME-005, ME-006, ME-007, ME-037+ME-051, ME-039

---

## TABLE OF CONTENTS

1. [File 05: MASTER-ENRICHMENT-LIST.md — All 57 Enrichments](#file-05)
2. [File 06: Adversarial Review — All Findings](#file-06)
3. [File 07: Handoff Enrichments — All 18 Items](#file-07)
4. [File 08: Pipeline PA Enrichments — All 16 Items](#file-08)
5. [Cross-File Synthesis: Unique Nuances Not Captured in Master List](#synthesis)
6. [Loss Analysis: What the 8-Change Plan Leaves Behind](#loss-analysis)

---

## FILE 05: MASTER-ENRICHMENT-LIST.md — Complete 57-Enrichment Inventory {#file-05}

**File stats:** 1,014 lines, 243 raw items deduplicated to 57, organized in 7 tiers
**Sources merged:** 01-v3-enrichments.md (52), 02-reservoir-extraction.md (79), 03-anti-loss-map.md (25), 04-cross-reference.md (53), 07-handoff-enrichments.md (18), 08-pipeline-pa-enrichments.md (16)

### TIER 1: PRIORITY INVERSION FIXES (9 items, ALL BLOCKING)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-001** | CHANGE | Add Experiential Pass (Section 2.5) to ALL PA auditors -- mandatory before question answering. Auditors perform cold-look reading pass reporting: (1) illegible text, (2) effortful text, (3) skipped text. Report at TOP of audit as "## 0. Experiential Pass." Also adds universal legibility pre-check U-01 as FIRST question for all 9 auditors. | `pa-deployment.md` | MUST | SAFE | **YES** | 43% detection miss rate on usability defects persists. Pipeline catches CSS violations but not "can you read this?" |
| **ME-002** | CHANGE | Add Usability Priority Override (new Section 5.0) to Weaver fix ordering. "Is there ANY finding a reader CANNOT READ or CANNOT USE?" = Fix #1 regardless of gate status. Order: (1) Human readability, (2) Visual perception, (3) Identity compliance. Includes emotional arc connection (from HE-015). | `pa-weaver.md` | MUST | CAUTION (modifies existing priority hierarchy -- this IS the intended correction) | **YES** | Priority inversion persists: CSS compliance fixes ranked above legibility fixes (V3 chart legibility was Fix #5 behind 4 invisible CSS fixes) |
| **ME-003** | CHANGE | Add WCAG Text Contrast Gate GR-60 (REQUIRED). Normal text >=4.5:1, large text >=3:1. Walk DOM tree for effective background. Check SVG text/tspan. ~70 lines new gate code. Must update: gate-runner-core.js, GR-48 REQUIRED_GATES, gate-manifest.json, gate-runner-spec.md, pa-questions.md Appendix B. | `gate-runner-core.js`, `gate-manifest.json`, `gate-runner-spec.md`, `pa-questions.md` | MUST | CAUTION (gate-runner-core.js is CRITICAL fragility M-19; requires 6-location update per M-13) | **NO** | No programmatic contrast checking. Contrast failures detected only if PA auditor happens to notice. |
| **ME-004** | CHANGE | Add Legibility Self-Check Q0+Q1 to builder self-evaluation. Q0: text legibility scan (size <12px? contrast <3:1? diagram labels?). Q1: visual component clarity check. Renumber existing Q1-Q7 to Q2-Q8. Also add builder self-check grep commands (from HE-013). | `artifact-builder-recipe.md` | MUST | SAFE | **YES** | Builder submits HTML without ever checking if text is readable. Preventable errors caught only by expensive gate+PA phase. |
| **ME-005** | CHANGE | Fix verdict logic for mechanical identity failures. Add MECHANICAL exception: if ALL REQUIRED identity gate failures are MECHANICAL (<=5 CSS lines, no HTML structural change, no design decision), verdict = REFINE not REBUILD. Add protocol override rule requiring orchestrator independent justification. Update gate-manifest.json L55-59 + gate-runner-core.js L752-778. | `MANIFEST.md`, `gate-manifest.json`, `gate-runner-core.js` | MUST | RISK (modifies M-23 REBUILD Not FIX -- the pipeline's most important safety mechanism) | **YES** | A typo-level CSS error (missing `html { color }`) triggers full REBUILD. Wastes entire build cycle on mechanical fixes. |
| **ME-006** | CHANGE | Add screenshot validation gate before PA deployment. 4 sub-changes: (1) Expand CSS override to include `visibility: visible !important; transform: none !important`, (2) Add Section 2.3a screenshot validation (no >2 consecutive blank, <20% blank total), (3) Add Section 2.5 full-page cross-reference, (4) Add DPR validation to orchestrator. | `pa-deployment.md`, `artifact-orchestrator.md` | MUST | SAFE | **YES** | 9 auditors deployed on broken screenshots. V3 wasted 9 agent-runs analyzing artifacts, not page content. |
| **ME-007** | CHANGE | Fix GR-44 false negative (trailing void measurement). Replace current algorithm with: find last visible element via getBoundingClientRect(), compare bottom to scrollHeight, fail if gap >300px. PRESERVE existing content-zone measurement as sub-check A, add page-level as sub-check B. Also add builder recipe trailing void check. | `gate-runner-core.js` | MUST | CAUTION (modifies existing gate in CRITICAL fragility file; must preserve both sub-checks) | **YES** | GR-44 reports 0px void when 5,500px exists. The single worst false negative in the gate system. |
| **ME-008** | CHANGE | Add usability circuit breaker to orchestrator. Between Phase 3B (PA) and 3C (Weaver), orchestrator scans all 9 reports for BLOCKING usability findings. If found: elevate to BLOCKING-USABILITY, annotate as "must be Fix #1" for Weaver, verify fix in SHIP WITH FIXES verdict. | `MANIFEST.md` | MUST | SAFE | **NO** | Usability-blocking findings can be deprioritized by Weaver without orchestrator intervention. |
| **ME-009** | CHANGE | Add experiential detection threshold table + aggregation rules. >=3/9 auditors flag same text = CONFIRMED illegibility (Fix #1). 1/9 = POSSIBLE (Weaver investigates). 0/9 = All text readable. Add pre-aggregated summary to Weaver inputs. | `pa-deployment.md`, `pa-weaver.md` | MUST | SAFE (ensure no calibration data leaks to auditors per M-04/M-20) | **NO** | Experiential pass findings (ME-001) have no structured aggregation. Weaver must manually parse 9 reports for text legibility themes. |

### TIER 2: INFRASTRUCTURE FIXES (14 items, ALL SIGNIFICANT)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-010** | CHANGE | Split GR-05 (warm palette): GR-05a (visible, opacity >=0.3) stays REQUIRED; GR-05b (sub-perceptual, opacity <0.3) downgraded to ADVISORY. | `gate-runner-core.js`, `gate-manifest.json` | SHOULD | CAUTION (modifies M-08 dual-route; opacity pre-filter changes code path BEFORE isCold) | NO | Sub-perceptual tints (~20 RGB at 5% opacity) cause REQUIRED failures for invisible differences. |
| **ME-011** | CHANGE | Modify GR-06 to check rendered font (not declared stack). Use `document.fonts.check()` after `document.fonts.ready`. Fallback-only violations -> ADVISORY. | `gate-runner-core.js` | SHOULD | CAUTION (must ensure fonts.ready resolves before check) | NO | Fallback fonts that never render still trigger REQUIRED failures. |
| **ME-012** | CHANGE | Fix GR-14 structural false positives. Restrict gap measurement to zone-level siblings only (direct children of same container). Preserve FIX-005's structural transition handling. | `gate-runner-core.js` | SHOULD | CAUTION (maintains result object schema) | NO | 13 false positives from nested HTML structure. |
| **ME-013** | CHANGE | Fix GR-09 tolerance band implementation. Verify FIX-003 bands: primary 3.5-4.5px->4px, secondary 2.5-3.5px->3px, tertiary 0.5-1.5px->1px. Remove or subordinate integer-only check. 0.667px and 2.667px must PASS. | `gate-runner-core.js` | SHOULD | CAUTION (audit full code path) | NO | Subpixel rendering values fail despite being valid renderings of allowed widths. |
| **ME-014** | CHANGE | Add minimum font size gate GR-61 (RECOMMENDED). Body >=14px, caption >=11px, absolute minimum >=10px. SVG text checked separately. CRITICAL violations (below absolute min) FAIL. ~50 lines. | `gate-runner-core.js` | SHOULD | CAUTION (6-location update) | NO | No programmatic font size checking. Tiny text only caught by PA auditors' visual scan. |
| **ME-015** | CHANGE | Add data corruption escalation protocol for PA auditors. 4 sub-changes: (1) Data quality awareness note in deployment, (2) BLOCKED BY DEFECT scoring option, (3) First-Auditor Halt protocol, (4) Full-page as ground truth guidance. | `pa-deployment.md`, `pa-questions.md` | SHOULD | SAFE | NO | Auditors forced to score questions they cannot meaningfully assess. Pseudo-answers dilute signal. |
| **ME-016** | CHANGE | Add ARIA accessibility requirements to builder recipe. All data tables: aria-label. All diagrams: aria-label or alt text. All interactive regions: role + aria-label. Target >=15 ARIA attributes. | `artifact-builder-recipe.md` | SHOULD | SAFE (use recipe framing) | NO | Zero accessibility structure in HTML output. |
| **ME-017** | CHANGE | Add Phase 4: Fix Application Protocol. Orchestrator applies MECHANICAL fixes only (CSS value changes), re-runs failed gates, updates verdict. Budget: <=15 min, <=50 CSS lines. | `MANIFEST.md` | SHOULD | CAUTION (adds third iteration type; must update circuit breaker at L605) | NO | SHIP WITH FIXES verdict cannot be executed -- fixes identified but never applied. Pipeline delivers page + fix list, not fixed page. |
| **ME-018** | CHANGE | Add gate perceptibility classification column to manifest. HUMAN-PERCEPTIBLE / SUB-PERCEPTUAL / MIXED / N/A for all gates. Add `reliability` field to gate result JSON. | `artifact-gate-runner.md`, `gate-manifest.json` | SHOULD | SAFE (metadata only) | NO | No distinction between gates checking visible vs invisible properties. All weighted equally. |
| **ME-019** | CHANGE | PA-05 score as range, not single number. Weaver presents lower=conservative, upper=corrected. PARTIAL counts 0.5 not 1. Round DOWN. Hypothetical score for BLOCKING defects. | `pa-weaver.md` | SHOULD | SAFE | NO | Single-number PA-05 obscures uncertainty. 3/4 is presented as precise when it is actually 2.5-3.0. |
| **ME-020** | CHANGE | Add orchestrator decision quality self-assessment. Section B: evidence for/against each judgment call, independent verification check, mode retrospective, components.css line count pre-flight. | `artifact-orchestrator.md` | SHOULD | SAFE | NO | Orchestrator checks process compliance but never reasoning quality. |
| **ME-021** | CHANGE | Add navigation usability PA question PA-80. Route to Auditor E. Must update 5+ locations per M-22. | `pa-questions.md` | SHOULD | CAUTION (5-location update) | NO | No question tests whether navigation works. |
| **ME-022** | CHANGE | Add information extraction PA question PA-81. "Can you answer 'What is the ONE thing this element wants me to know?' in <5 seconds?" Add image-vs-CSS distinction (PE-006). | `pa-questions.md` | SHOULD | CAUTION (5-location update) | NO | No question tests whether infographics communicate their purpose. |
| **ME-023** | CHANGE | Add content promise vs delivery PA question PA-54. Count navigational promises fulfilled. If <80%, STRUCTURAL PROMISE VIOLATION. Collapsible summary adequacy check. | `pa-questions.md` | SHOULD | CAUTION (5-location update) | NO | TOC promises 12 sections, page delivers 3, no question catches this. |

### TIER 3: GATE SEVERITY RESTRUCTURE (7 items, ALL MINOR)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-024** | CHANGE | Downgrade GR-07 to RECOMMENDED. Add visible-text-only filter. Browser defaults on structural containers should not trigger failures. | `gate-runner-core.js`, `gate-manifest.json` | COULD | CAUTION (reduces REQUIRED count) | NO | Invisible browser defaults trigger REQUIRED identity failures. |
| **ME-025** | CHANGE | Downgrade GR-12 to RECOMMENDED. letter-spacing >=0.025em at 16px = 0 to 0.4px, entirely below perception. | `gate-runner-core.js`, `gate-manifest.json` | COULD | CAUTION | NO | Sub-perceptual letter-spacing triggers REQUIRED failures. |
| **ME-026** | CHANGE | Downgrade GR-43 to RECOMMENDED. An invisible HTML comment should not block builds. | `gate-runner-core.js`, `gate-manifest.json` | COULD | SAFE | NO | Missing self-eval comment blocks build. |
| **ME-027** | CHANGE | Downgrade GR-19 to ADVISORY. Checks builder INTENT, not visual output. | `gate-runner-core.js`, `gate-manifest.json` | COULD | SAFE | NO | Intent-detection gate weighted as RECOMMENDED. |
| **ME-028** | CHANGE | Adjust GR-21 threshold from 4 to 6 distinct backgrounds for COMPOSED mode, OR exclude alpha <0.1 backgrounds from count. | `gate-runner-core.js` | COULD | SAFE (ADVISORY tier) | NO | Low threshold triggers false positive in COMPOSED mode. |
| **ME-029** | CHANGE | Fix GR-17 list item threshold. Change `li` minimum from 12px to 4px (same as td/th). V3 evidence: 30 violations at 8px is standard design. | `gate-runner-core.js` | COULD | SAFE (RECOMMENDED tier) | NO | Standard 8px list padding triggers warnings. |
| **ME-030** | CHANGE | Fix viewport namespacing conflict GR-48 vs GR-49. Add viewport field to result objects. Update GR-49 to check `gate + viewport` pairs not just `gate`. | `gate-runner-core.js` | COULD | CAUTION (modifies both meta-gates + result schema) | NO | Every multi-viewport run has GR-48 deduplication conflicting with GR-49 integrity check. |

### TIER 4: PA ENRICHMENTS (6 items, ALL MINOR)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-031** | CHANGE | Add false affordance scan PA question. "Does every interactive-looking element actually appear interactive?" Route to E or H. | `pa-questions.md` | COULD | CAUTION (5-location update) | NO | False affordances undetected. |
| **ME-032** | NUANCE | Mark PA-55, PA-56, PA-69 as PIPELINE-INTROSPECTION with HTML comment. Weaver weights differently from experiential findings. | `pa-questions.md` | COULD | SAFE (metadata only) | NO | Pipeline-introspection questions weighted same as reader-experience questions. |
| **ME-033** | SAFEGUARD | Add void question deduplication rule. If PA-50 >=3 blank viewports: PA-09, PA-51, PA-33 auto-answered from PA-50. Saves ~30% of Auditor C time. | `pa-questions.md` | COULD | SAFE | NO | Under catastrophic void, 3 questions produce identical answers. Redundant work. |
| **ME-034** | NUANCE | Add defect-bypass for H's cross-viewport protocol. If defect identical across viewports, state once, redirect to viewport-specific differences in non-defective content. | `pa-deployment.md` | COULD | SAFE | NO | H says "PUNISHED" 3 times for identical defect. |
| **ME-035** | NUANCE | Add footer/header to PA-02 scope: "(Include header and footer text in your assessment, not just body content.)" | `pa-questions.md` | COULD | SAFE | NO | Header/footer text excluded from contrast assessment. |
| **ME-036** | NUANCE | Add horizontal scroll check at element level to PA-07: "(Check both page-level AND element-level horizontal scroll.)" | `pa-questions.md` | COULD | SAFE | NO | Element-level `overflow-x: auto` at 768px undetected. |

### TIER 5: BUILDER RECIPE IMPROVEMENTS (4 items, ALL MINOR)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-038** | CHANGE | Add px-only border width instruction. "All border-width values MUST be integer px. Do NOT use em/rem." | `artifact-builder-recipe.md` | COULD | SAFE | NO | Builder uses em/rem for borders, computes to fractional px, fails GR-09. |
| **ME-039** | CHANGE | Add `html { color }` declaration + font stack template to CSS boilerplate. Pre-set `html { color: #2a2a2a; font-family: Inter, system-ui, sans-serif; }` and 3 font stack custom properties. | `artifact-builder-recipe.md` | COULD | SAFE | **YES** (ME-039 in 8-plan) | Known gate failures (GR-07 pure black default, GR-06 font stack) recur on every build. Prevention at source. |
| **ME-040** | CHANGE | Add text overflow gate GR-62 (RECOMMENDED). Check `overflow: hidden` clipping, `text-overflow: ellipsis` truncation, off-screen content. ~60 lines. | `gate-runner-core.js` | COULD | CAUTION | NO | Clipped/truncated text undetected programmatically. |
| **ME-041** | CHANGE | Add trailing void prevention to builder recipe. "Verify page ends within 100px of last content element. Override `min-height: 100vh` if needed." | `artifact-builder-recipe.md` | COULD | SAFE | NO | Builder creates trailing void, caught only by (broken) GR-44. |

### TIER 6: TRACKING + DOCUMENTATION (5 items, ALL MINOR)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-042** | NUANCE | Update MANIFEST line counts. components.css from 290 to actual. Add pre-flight validation +/-20%. | `MANIFEST.md` | COULD | SAFE | NO | 4x discrepancy in components.css size flagged then dropped. |
| **ME-043** | NUANCE | Add experiential pass + screenshot validation tracking fields to EXECUTION-TRACKER-TEMPLATE. | `EXECUTION-TRACKER-TEMPLATE.md` | COULD | SAFE | NO | No tracking for new experiential/screenshot protocols. |
| **ME-044** | NUANCE | Document experiential pass rationale (gorilla experiment, attentional tunnels, 11% -> 78-100% detection). | `artifact-pa-protocol.md` | COULD | SAFE | NO | Rationale undocumented. |
| **ME-045** | NUANCE | Add context budget awareness. Pipeline requires 2-3 sessions. Plan boundaries between P2 and P3A. Update time estimates 80-105 min -> 3-6 hours. | `artifact-orchestrator.md`, `MANIFEST.md` | COULD | SAFE | NO | MANIFEST time estimates wildly wrong. |
| **ME-046** | SAFEGUARD | Add corrected screenshot recovery protocol. Must cover ENTIRE page at regular intervals (every 900px), not curated regions. | `MANIFEST.md` | COULD | SAFE | NO | Corrected screenshots are orchestrator-curated, introducing bias. |

### TIER 7: RESERVOIR VALUE-SYSTEM CORRECTIONS (11 items, ALL CONSIDER)

| Item ID | Type | Description | Target File(s) | Tier | Anti-Loss | In 8-Plan? | Loss if Skipped |
|---------|------|-------------|----------------|------|-----------|------------|-----------------|
| **ME-047** | NUANCE | 3 perceptually distinct background registers: LIGHT/MEDIUM/DARK. "FEWER distinctions with LARGER deltas." | `artifact-builder-recipe.md` or TC Brief | COULD | SAFE | NO | Builder creates 6 barely-distinguishable cream shades instead of 3 distinct registers. |
| **ME-048** | NUANCE | One unique visual element per zone. "If every zone is interchangeable, the design is templated, not composed." | `artifact-builder-recipe.md` | COULD | SAFE | NO | Zones visually identical. |
| **ME-049** | NUANCE | 2-3 dark moments distributed across scroll. "A page that is entirely light cream creates scroll fatigue." | `artifact-builder-recipe.md` | COULD | SAFE | NO | No dark-background pacing moments. |
| **ME-050** | NUANCE | Widen spacing compression range 3:1 ratio. "If max padding 80px, min <=27px." | `artifact-builder-recipe.md` | COULD | SAFE | NO | Current 2.5:1 barely registers perceptually. |
| **ME-051** | CHANGE | Replace retired questions (ME-037) with experiential questions: PA-87, PA-99, NEW-07, NEW-17. Net zero question count change. | `pa-questions.md` | COULD | CAUTION (5-location update; must coordinate with ME-037) | **YES** (ME-037+ME-051 in 8-plan) | Retired questions leave gaps unfilled. New experiential questions never added. |
| **ME-052** | NUANCE | Add one-line audience description to PA auditor prompts. "The intended audience for this page is [X]." Ensure no build-intent leaks (M-04). | `pa-deployment.md` | COULD | SAFE | NO | Auditors evaluate without knowing who the page is for. |
| **ME-053** | NUANCE | Container width per-zone exceptions for code-heavy content. Code zones may expand to 1200px. Prose stays 960px. | `artifact-builder-recipe.md` | COULD | SAFE (relaxes NON-NEGOTIABLE but only for code/data) | NO | Code blocks truncated at 960px, harming readability. |
| **ME-054** | CHANGE | Remove dead CSS/unused tokens. Unused font-weight 700 (saves 20-50KB), 3 unused custom properties, `.featured-code` if unused. | `components.css`, `tokens.css` | COULD | SAFE (subtraction, verify truly unused) | NO | Dead code persists, adding to pipeline complexity. |
| **ME-055** | CHANGE | Add "What would you REMOVE?" anti-Goodhart PA question. Inverts PA's additive bias. | `pa-questions.md` | COULD | SAFE | NO | Every PA question asks "what's missing/wrong" -- none ask "what's excess." |
| **ME-056** | NUANCE | Codify best CSS patterns as available techniques library. Zone-adaptive font-size, dark code block inversion, inversion block pattern, font-family trinity, border hierarchy. | `artifact-builder-recipe.md` | COULD | SAFE (world-description framing M-12) | NO | CSS patterns exist only in reference files builder may not see. |
| **ME-057** | NUANCE | Weaver emotional arc -> fix mapping. After arc analysis, check if any top-5 fix improves weakest register. Add compositional recommendation as Fix #6 if not. | `pa-weaver.md` | COULD | SAFE | NO | Emotional arc analysis produced then completely ignored in fix prioritization. |

### FILE 05 STRUCTURAL ELEMENTS

**Deduplication Methodology (7 rules):**
1. Merged items with same change from multiple sources into single enrichment
2. Conflicts: chose version with stronger execution evidence (V3 > reservoir > theoretical)
3. FIX-FAILED items from cross-reference elevated to HIGH PRIORITY
4. Overlapping reservoir/V3 items: V3 version preferred
5. INVALIDATED reservoir items (187) EXCLUDED
6. ALREADY-FIXED items (18) EXCLUDED
7. Pure process observations classified CONSIDER, not actionable

**Conflict Register (5 documented):**
| Pair | Nature | Resolution |
|------|--------|------------|
| ME-037 vs ME-051 | Retirements make room for additions | Apply as single atomic change |
| ME-005 vs M-23 | MECHANICAL weakens identity protection | Gate runner auto-classifies (not orchestrator), binary criteria |
| ME-010 vs M-08 | Split creates GR-05a/GR-05b | Keep isCold() unchanged; add opacity pre-filter only |
| ME-017 vs MANIFEST circuit breaker | Phase 4 = third iteration type | Scope to MECHANICAL only, update breaker |
| ME-053 vs 960px NON-NEGOTIABLE | Exception for code/data | Prose stays 960px; code zones to 1200px |

**Excluded Items:**
- 18 ALREADY-FIXED (AF-01 through AF-18)
- 187 INVALIDATED reservoir items (perceptual science measurements, new measurement instruments, new analytical gates, structural PA questions, superseded experiments, precision-without-usability enrichments, E07-01 automated REFINE)
- 6 UNTESTABLE (UT-01 through UT-06, DPR prevents verification)
- 5 PROCESS/PARADIGM questions (N-19, N-20, N-21, V3E-006, V3E-052)

**Summary Statistics:**
| Severity | Count | BLOCKING | SIGNIFICANT | MINOR | CONSIDER |
|----------|-------|----------|-------------|-------|----------|
| Total | 56* | 9 | 14 | 22 | 11 |

*Note: Header says 57 but count table says 56. ME-037 has priority rank 36 but is labeled with rank 37 in the text for ME-036. Minor numbering inconsistency in the file.

---

## FILE 06: ADVERSARIAL REVIEW — Complete Findings {#file-06}

**File stats:** 271 lines, 8 attacks, 4 CRITICAL + 4 SIGNIFICANT findings
**Verdict:** "THE LIST REPRODUCES THE DISEASE IT DIAGNOSES"

### ATTACK 1: COMPLEXITY RATCHET CHECK

| Item ID | Type | Description | Target File(s) | Tier | In 8-Plan? |
|---------|------|-------------|----------------|------|------------|
| ADV-01 | WARNING | Add:Remove ratio is 42:1 (42 ADD, 11 REPLACE, 1 REMOVE, 3 SIMPLIFY). Net addition ~620 lines against 240-line safe budget. | All files | MUST | N/A (structural) |
| ADV-01a | MECHANISM | "The complexity ratchet is not about the QUALITY of additions -- it is about the ACT of addition." Each line added must be implemented by gate runner, routed by brief assembler, absorbed by builder, coordinated by orchestrator. | N/A | MUST | N/A |
| ADV-01b | WARNING | The defense "these are the RIGHT 620 lines" is the same argument every previous enrichment wave made. The 128-fix wave and V3 spec both claimed their additions were "the right ones." | N/A | MUST | N/A |

**CRITICAL finding #1: The list violates its own founding principle. Priority inversion finding says problem is WHAT the pipeline checks, not HOW MANY checks. 42 additions + 1 removal reproduces the disease.**

### ATTACK 2: CAPACITY BUDGET VIOLATION

| Artifact | Safe Budget | Proposed | Over Budget? |
|----------|------------|----------|--------------|
| `gate-runner-core.js` | **0 net** (must subtract first) | **+310 lines** (ME-003: +70, ME-014: +50, ME-040: +60, ME-007: +20, ME-010: +20, ME-011: +20, ME-012: +10, ME-013: +10, ME-024: +10, ME-025: +5, ME-026: +5, ME-027: +5, ME-028/029: +10, ME-029: +5, ME-030: +10) | **YES -- 310 over zero.** Even with 150 subtracted, net +160. |
| `pa-deployment.md` | +30 | **+100 lines** (ME-001: +25, ME-006: +30, ME-009: +15, ME-015: +20, ME-034: +5, ME-052: +5) | **YES -- 3.3x over** |
| `pa-questions.md` | +30 | **+80 net lines** (ME-021: +10, ME-022: +10, ME-023: +15, ME-031: +10, ME-032: +5, ME-033: +10, ME-035: +5, ME-036: +5, ME-037: -20, ME-051: +20, ME-055: +10) | **YES -- 2.7x over** |
| `artifact-builder-recipe.md` | +50 | **+145 lines** | **YES -- 2.9x over** |
| `MANIFEST.md` | +20 | **+75 lines** | **YES -- 3.75x over** |
| `pa-weaver.md` | (within orch budget) | **+50 lines** | Moderate |
| `artifact-orchestrator.md` | +50 | **+25 lines** | WITHIN BUDGET |
| **TOTAL** | **~240 lines** | **~785 lines** | **3.3x over** |

**CRITICAL finding #2: Budget exceeded by 3.3x. If enforced strictly, only Tier 1 BLOCKING (~200 lines) + 2-3 SIGNIFICANT enrichments fit. Tiers 3-7 have ZERO remaining capacity.**

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-02 | WARNING | "The 57-item list is actually a 12-15 item list wearing a trenchcoat." | MUST |
| ADV-02a | PRECONDITION | The ~240 line budget means: Implement Tier 1 BLOCKING (~200 lines) first, then ~40 lines remain for 2-3 SIGNIFICANT items. Everything else is post-validation. | MUST |

### ATTACK 3: ACTIONABILITY TEST

| ME | Actionable? | Problem |
|----|------------|---------|
| ME-001 | **YES** | Exact text provided, target clear |
| ME-002 | **YES** | Exact text provided, target clear |
| ME-003 | **PARTIAL** | "~70 lines" Playwright JS referenced in another file but not included. Says "go read gate-usability-audit.md Section 5." 2-hour task disguised as single enrichment. |
| ME-004 | **YES** | Exact text provided |
| ME-005 | **PARTIAL** | "Modify verdict logic section" but three files need coordinated changes. No exact old->new diffs for JS or JSON. |
| ME-006 | **PARTIAL** | 4 sub-changes across 2 files. Change 1 is exact CSS. Changes 2-4 described but not diffed. Change 4 "DPR validation" has no code. |
| ME-007 | **YES** | Algorithm described clearly |
| ME-008 | **YES** | Exact text provided |
| ME-009 | **YES** | Exact text for both changes |

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-03 | WARNING | 5/9 BLOCKING items fully actionable, 4/9 partial. ME-003 worst offender -- most impactful gate change says "go read another file for the code." | SHOULD |
| ADV-03a | PRECONDITION | ME-003, ME-005, ME-006 all require significant discovery work before implementation. Must read external files, find sections, write coordinated diffs. | SHOULD |

### ATTACK 4: ANTI-LOSS HONESTY

**Items rated CAUTION that should be RISK:**

| ME | Listed As | Should Be | Reason |
|----|-----------|-----------|--------|
| ME-005 | CAUTION | **RISK** | "Design decision" classification requires JUDGMENT (is this a design decision?). This is a judgment rule disguised as a binary rule -- the exact failure mode the project identifies. |
| ME-017 | CAUTION | **RISK** | Phase 4 adds a THIRD iteration type to a pipeline that already exceeds context window. |
| ME-010 | CAUTION | **RISK (low)** | Opacity pre-filter changes code path BEFORE isCold, meaning a bug silently bypasses entire warm palette check. |

**Multi-mechanism interactions unacknowledged:**

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-04a | WARNING | ME-003 (WCAG gate) touches M-13 (binary rules), M-19 (gate verification), M-08 (dual-route). New REQUIRED gate must appear in 5+ locations AND DOM walking code could conflict with isRenderedElement() helper. | SHOULD |
| ADV-04b | WARNING | ME-005 (MECHANICAL verdict) changes verdict logic in THREE coordinated files. If any one updated without others, pipeline has contradictory verdict rules. | SHOULD |
| ADV-04c | WARNING | ME-006 (screenshot validation) re-capture with expanded CSS overrides might CHANGE page's visual appearance (removing legitimate animations). Tension unaddressed. | SHOULD |
| ADV-04d | WARNING | ME-001 + ME-009 (experiential pass + aggregation): 9 auditors each reporting 3 categories of legibility = ~100+ new Weaver input lines. Weaver capacity not analyzed. | SHOULD |

### ATTACK 5: CONFLICT DETECTION

**4 MISSING conflicts (beyond the 5 documented in master list):**

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-05a | WARNING | ME-001 (experiential pass) vs ME-037 (retire questions): ME-037 creates room consumed by ME-021/022/023/031, NOT by ME-001. ME-001 is net additive regardless of retirements. The "room" argument is false. | SHOULD |
| ADV-05b | WARNING | ME-003 + ME-014 + ME-040: Three new gates adding ~180 lines to gate-runner at zero budget. Combined impact is the problem, not individual safety. Even after 150-line subtraction, net +30. Subtraction targets not validated. | MUST |
| ADV-05c | WARNING | ME-005 (MECHANICAL exception) vs ME-008 (usability circuit breaker): When both coexist, what happens? MECHANICAL says REFINE; usability breaker says "Fix #1." Interaction undefined. Combinatorial explosion of verdict states. | SHOULD |
| ADV-05d | WARNING | ME-019 (PA-05 as range) vs tier/mode classification system: PA-05 used as discrete number throughout project. If it becomes 2.5-3.0, which tier? Range straddles boundaries. No downstream adaptation documented. | SHOULD |

### ATTACK 6: PRIORITY CHALLENGE

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-06a | WARNING | ME-037 (retire questions) ranked 36th but is the ONLY subtraction. "Subtraction must precede addition." Should be rank 1-5. | MUST |
| ADV-06b | WARNING | ME-054 (remove dead CSS) ranked 54th. Same logic -- subtraction should happen early. Should be rank 25-30. | SHOULD |
| ADV-06c | WARNING | ME-003 (WCAG gate) ranked 3rd but implementation is 70 lines on zero-budget artifact. Concept is BLOCKING, implementation is dangerous. Should be rank 12-15, after gate-runner subtraction. | MUST |
| ADV-06d | WARNING | ME-017 (Phase 4) ranked 17th but is architectural change, not enrichment. Safety analysis says "run as experiment." Should be CONSIDER rank 50+. | SHOULD |

### ATTACK 7: WHAT'S MISSING

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-07a | PRECONDITION | **Gate-runner subtraction plan** completely absent from master list. Safety analysis says "remove GR-33 through GR-42 and GR-08 spec text (~150 lines)." THE most important prerequisite for Tier 1. Without it, ME-003/014/040 cannot be safely added. | **MUST** |
| ADV-07b | PRECONDITION | **Builder recipe subtraction** absent. "Remove duplicate component pattern descriptions (~20-30 lines)." Needed before ME-038/039/041/047-056 added. | SHOULD |
| ADV-07c | WARNING | **Opus vs Sonnet builder variable** listed as "process question" in EXCLUDED. Single largest unexamined confound. One experiment ($5-15, 1-2 hrs) could render half the list unnecessary. | SHOULD |
| ADV-07d | PRECONDITION | **DPR root cause fix** buried inside ME-006. PE-001's CSS fix should be its own top-priority item, not embedded in larger screenshot-validation enrichment. | SHOULD |
| ADV-07e | WARNING | **Brief assembler compression behavior** unaddressed. Multiple enrichments add to TC Brief Template without acknowledging assembler compresses additions away (79-line map -> ~12 lines historically). | SHOULD |
| ADV-07f | WARNING | 4 specific reservoir omissions: VA-03 (Zone 4 monotony), VA-09 (collapsible long scripts), E03-03 (recovery command danger hierarchy -- SAFETY concern), AR-02 (palette families instead of warm/cool binary). | COULD |

### ATTACK 8: PARADIGM CHALLENGE

| Item ID | Type | Description | Tier |
|---------|------|-------------|------|
| ADV-08a | WARNING | Evidence: 100 lines -> PA-05 4/4; 610 lines -> 3.5/4; 3,600 lines -> 3/4; 963 lines -> 1.5/4. Proposed: 4,220 lines. Correlation is MORE spec = WORSE output. | SHOULD |
| ADV-08b | MECHANISM | The 6-8 enrichments that MODIFY existing behavior (~50 lines) have highest probability of improving quality. The 49 that ADD new behavior (~570 lines) have uncertain-to-negative expected value. | SHOULD |
| ADV-08c | WARNING | Gate runner absorbs ~310 of ~620 proposed lines -- the file with LOWEST compliance and ZERO capacity budget. Usability framing does NOT apply to gate code additions. | SHOULD |

### ADVERSARIAL STRUCTURAL RECOMMENDATION

**Phase A: SUBTRACT FIRST (Priority 0)**
1. Remove GR-33 through GR-42 + GR-08 from gate-runner-core.js (-150 lines)
2. Remove duplicate content from artifact-builder-recipe.md (-30 lines)
3. ME-037: Retire 4 PA questions (-20 lines)
4. ME-054: Remove dead CSS (-15 lines)
5. ME-024/025/026/027: Downgrade 4 gates (0 net lines)

**Phase B: MODIFY EXISTING (Priority 1)**
6-12: ME-002, ME-005, ME-010, ME-011, ME-012, ME-013, ME-007

**Phase C: ADD NEW (Priority 2 -- only after Phase A+B + validation build)**
13-57: All remaining, subject to capacity budget AFTER subtraction

**Items to CUT entirely:** ME-017 (Phase 4), ME-040 (text overflow gate), ME-044 (documentation), ME-056 (CSS patterns codification)

**Items to DEFER to post-validation backlog:** All 11 CONSIDER (ME-047-057), all 5 tracking/docs (ME-042-046), all PA question additions (ME-021-023, ME-031)

**Net effect:** Reduces actionable list from 57 to ~25 items, net budget from ~620 to ~200 lines -- within ~240 capacity budget.

### ADVERSARIAL SUMMARY SCORECARD

| # | Attack | Finding | Severity |
|---|--------|---------|----------|
| 1 | Complexity ratchet | 42:1 add:remove. List reproduces disease. | **CRITICAL** |
| 2 | Capacity budget | 785 vs 240 safe budget (3.3x over) | **CRITICAL** |
| 3 | Actionability | 5/9 BLOCKING fully actionable, 4/9 partial | SIGNIFICANT |
| 4 | Anti-loss honesty | 3 CAUTION should be RISK; 4 multi-mechanism interactions | SIGNIFICANT |
| 5 | Conflict detection | 4 missing conflicts incl MECHANICAL vs circuit breaker | SIGNIFICANT |
| 6 | Priority challenge | Subtractions ranked 36th/54th, should be 1st-5th | **CRITICAL** |
| 7 | Missing items | Gate-runner subtraction plan (THE prerequisite) absent | **CRITICAL** |
| 8 | Paradigm challenge | More lines correlates with worse PA-05 | SIGNIFICANT |

---

## FILE 07: HANDOFF ENRICHMENTS — Complete 18-Item Inventory {#file-07}

**File stats:** 332 lines, 18 enrichments extracted from HANDOFF.md (372 lines), p3a-gate-results.json (290 lines), p3c-weaver-diagnostic.md (447 lines)
**Severity distribution:** 1 CRITICAL, 7 HIGH, 8 MEDIUM, 2 LOW

### Complete Inventory

| Item ID | Type | Description | Target File(s) | Tier | Merged into Master? | Unique Nuance NOT in Master |
|---------|------|-------------|----------------|------|---------------------|----------------------------|
| **HE-001** | CHANGE | PA-05 should be range not single number. Weaver's correction methodology is inherently optimistic (primed by void-corrected assessments). Score as 2.5-3.0, not 3.0. | `pa-weaver.md` | SHOULD | YES -> ME-019 | **Unique nuance:** Explains WHY Weaver is optimistic: "It saw corrected screenshots AFTER reading all 9 auditor reports, which means it was primed with positive void-corrected assessments." ME-019 mentions the range but not the priming mechanism. |
| **HE-002** | CHANGE | GR-44 reports voidHeight=0 when ~5,500px exists. Confirmed false negative. Replace measurement algorithm. | `gate-runner.md` | MUST | YES -> ME-007 | **Unique nuance:** Provides specific algorithm suggestion: "navigate to page bottom via `window.scrollTo(0, document.body.scrollHeight)`, take screenshot, check if visible content exists." ME-007 uses getBoundingClientRect instead. Both are valid approaches. |
| **HE-003** | CHANGE | Orchestrator accepts protocol override without independent verification. "Agreed with Weaver's reasoning" is not independent justification. | `MANIFEST.md` | MUST | YES -> ME-005 | **Unique nuance:** Focuses specifically on the OVERRIDE mechanism separation (requesting party != verifying party). ME-005 includes this as a sub-point but the override governance framing is clearer in HE-003. |
| **HE-004** | CHANGE | Chart legibility is Fix #5 behind 4 CSS compliance fixes. EXACT match of priority inversion finding. Weaver and HANDOFF repeat ordering without questioning. | `pa-weaver.md` | MUST | YES -> ME-002 | **Unique nuance:** Documents the specific fix ordering (1. Font stack, 2. Callout backgrounds, 3. Border widths, 4. HTML default color, 5. Chart legibility) as concrete evidence. ME-002 is more abstract. |
| **HE-005** | CHANGE | Zero experiential/task-based PA questions. Pipeline cannot detect usability failures because it never tests usability. Chart caught only because auditors visually noticed. | `pa-weaver.md` | MUST | YES -> ME-001 | **Unique nuance:** Notes chart legibility was caught ONLY by visual accident, not by any question. ME-001 has the solution but HE-005 has the diagnostic evidence. |
| **HE-006** | CHANGE | DPR bug self-diagnosis is thorough BUT misses architectural implication. Consensus is only valuable when auditors observe reality, not same corrupted input. | `MANIFEST.md` | SHOULD | YES -> ME-006 | **Unique nuance:** "The pipeline's consensus mechanism (9 independent auditors) provides ZERO protection against infrastructure failures." ME-006 has the fix but HE-006 has the architectural critique. Not captured in master list. |
| **HE-007** | CHANGE | Orchestrator self-scores 6/10 compliance but misidentifies what it got wrong. Flags PROCESS errors, misses JUDGMENT errors: (1) accepting GR-44 false negative, (2) compliance-before-usability ordering, (3) optimistic PA-05, (4) not questioning shared-screenshot redundancy. | `MANIFEST.md` | SHOULD | YES -> ME-020 | **Unique nuance:** Lists the 4 specific judgment errors the orchestrator missed. ME-020 has the generic self-assessment template but HE-007 has the diagnostic specifics. |
| **HE-008** | CHANGE | GR-14 false positive explained away rather than fixed. Reveals systemic pattern: false positives get narratives, false negatives get ignored. Pipeline treats false positives as "known limitation" and false negatives as "not a problem." | `gate-runner.md`, `gate-manifest.json` | SHOULD | PARTIAL -> ME-012 (GR-14 fix) + ME-018 (reliability field) | **Unique nuance:** The SYSTEMIC PATTERN observation (false positives explained away, false negatives unquestioned) is NOT captured in master list. ME-012 fixes GR-14 specifically; ME-018 adds reliability metadata. But the meta-pattern of asymmetric treatment is unique to HE-008 and has no master list equivalent. |
| **HE-009** | NUANCE | 9 auditors = 2-3x effective coverage, not 9x. Orchestrator's own words. Question routing creates silos. Legibility detection depends on 1 auditor. Proposes reduction to 4-5 auditors with overlapping coverage. | `MANIFEST.md` | COULD | NO | **Entirely unique.** The master list has no enrichment reducing auditor count from 9 to 5, dual-routing critical questions, or saving $15-20 per run. Listed as excluded process question in master list (V3E-006) but HE-009 provides specific implementation: reduce to 5, route PA-02/PA-08 to 2 auditors, PA-05 sub-criteria to 3. |
| **HE-010** | CHANGE | Pipeline cannot complete its own fix cycle. SHIP WITH FIXES is a verdict pipeline cannot execute on. | `MANIFEST.md` | SHOULD | YES -> ME-017 | **Unique nuance:** Provides two options: (A) Add Phase 4, (B) Reduce orchestrator overhead. ME-017 only implements option A. Option B (redesign for context limits) is not in master list. |
| **HE-011** | CHANGE | Tier 5 scored 9/9 with 2 partials rounded up. Inflated by 1-2 points. Conservative: 7-8/9. Combined with PA-05 2.5-3.0, tier = solid MIDDLE-to-CEILING not CEILING. | `pa-weaver.md` | SHOULD | YES -> ME-019 | **Unique nuance:** Provides specific scoring examples (PA-61: "2/4 independent = partial. Scoring YES because 2 independent channels confirmed"). ME-019 mentions round-down but not these specific Tier 5 inflation instances. |
| **HE-012** | CHANGE | HANDOFF does not mention trailing void AT ALL. GR-44 says 0, Weaver says nothing. Total blind spot. Proposes: fix GR-44, add PA question, always capture bottom screenshot. | `gate-runner.md` | MUST | YES -> ME-007 | **Unique nuance:** Proposes PA question "PA-83: Look at the last screenshot. Does the page end cleanly at the footer?" and "always include one screenshot at scrollHeight - viewportHeight." Neither is in ME-007, which focuses only on the gate fix. The PA question and screenshot additions are LOST. |
| **HE-013** | CHANGE | Builder errors should be caught at build time, not by expensive gate+PA phase. 4 of 8 gate failures are preventable. Proposes 4-line CSS linter: grep for non-trinity fonts, check rgba warmth, verify html color, check border-width integers. | `MANIFEST.md` | SHOULD | PARTIAL -> ME-004 + ME-039 | **Unique nuance:** The specific 4-line grep-based self-check is partially in ME-004 but more specific in HE-013. The "pipeline spends ~$30-40 on 9 PA auditors to catch issues a 10-line CSS linter prevents" framing is unique. |
| **HE-014** | NUANCE | Context exhaustion is "the norm, not the exception." 14 agent spawns + 31 gate evaluations + screenshots + coordination = consistent exhaustion. Not edge case but expected behavior. | `MANIFEST.md` | SHOULD | YES -> ME-045 | **Unique nuance:** Proposes Pipeline-A/Pipeline-B split (P0+P1+P2 vs P3A+P3B+P3C in separate contexts). ME-045 mentions session boundaries but not the A/B split. The structural split is a MORE AGGRESSIVE proposal than ME-045's documentation-level change. |
| **HE-015** | CHANGE | Weaver emotional arc analysis is high-quality but disconnected from fix priorities. Surprise is weakest register, concentrated in first half. Zero connection to Top-5 Fixes. | `pa-weaver.md` | SHOULD | YES -> ME-002 + ME-057 | **Unique nuance:** ME-002 includes "after emotional arc analysis, check whether any top-5 fix would improve the weakest register" but ME-057 has the full version. The specific emotional arc scores (Authority 8/10, Delight 6/10, Earned Closure 6/10, Surprise 5/10) provide concrete evidence not in the master list. |
| **HE-016** | NUANCE | Orchestrator does not question whether COMPOSED mode was correct. Weaver assessed APPLIED-to-COMPOSED, not solidly COMPOSED. Mode retrospective needed. | `MANIFEST.md` | COULD | PARTIAL -> ME-020 | **Unique nuance:** "Mode Retrospective" concept partially captured in ME-020's decision quality self-assessment but not as an explicit named protocol. The specific finding (Phase 0 selected COMPOSED, Weaver assessed APPLIED-to-COMPOSED) is unique diagnostic evidence. |
| **HE-017** | NUANCE | Components.css 4x size discrepancy (290 in MANIFEST vs 1,195 received). Orchestrator flagged then moved on. | `MANIFEST.md` | COULD | YES -> ME-042 | **Unique nuance:** ME-042 says "update line counts." HE-017 says "verify within +/- 20%, investigate if discrepancy > 20% BEFORE proceeding." The pre-flight blocking behavior is in HE-017 but only partially in ME-042. |
| **HE-018** | SAFEGUARD | Weaver received orchestrator-curated corrected screenshots. Must be algorithmic (every 900px), not curated (selected regions). Curated corrections bias Weaver toward best regions. | `MANIFEST.md` | SHOULD | YES -> ME-046 | **Unique nuance:** Explains the BIAS MECHANISM: "orchestrator selected which regions to capture, meaning the Weaver saw orchestrator-curated content rather than the neutral scroll-through." ME-046 has the protocol but HE-018 has the reasoning for why curation is biased. |

### FILE 07 CROSS-REFERENCE TABLE (Phase 2 Findings Confirmed by HANDOFF Evidence)

| Phase 2 Finding | HANDOFF Evidence | Enrichment |
|----------------|-----------------|------------|
| Priority inversion | Fix #5 (usability) ranked last behind 4 CSS fixes | HE-004 |
| Experiential gap | Zero mention anywhere in pipeline self-assessment | HE-005 |
| Complexity-quality inversion | "9 auditors = 2-3x effective coverage" (orchestrator's own words) | HE-009 |
| GR-44 false negative | GR-44 reports voidHeight=0, no one questions it | HE-002, HE-012 |
| DPR screenshot bug | Documented as anomaly, not architecture flaw | HE-006 |
| Corrected PA-05 | Pipeline says 3/4, Weaver methodology inherently optimistic | HE-001 |

### FILE 07 KEY META-FINDING

"All 6 major Phase 2 findings are independently confirmed or reinforced by evidence within the pipeline's own self-assessment documents. The pipeline sees many of its own problems but either (a) does not act on them, (b) underestimates their severity, or (c) is structurally unable to detect them."

---

## FILE 08: PIPELINE PA ENRICHMENTS — Complete 16-Item Inventory {#file-08}

**File stats:** 347 lines, 16 enrichments extracted from 9 auditor reports (p3b-pa-auditor-A through I)
**Severity distribution:** 1 BLOCKING, 4 SIGNIFICANT, 6 MODERATE, 5 LOW
**Key finding:** DPR bug dominated ALL 9 auditors (40-60% of each report)

### Section 1: DPR Bug Impact Per Auditor (UNIQUE DATA NOT IN MASTER LIST)

| Auditor | Void Treatment | Questioned Screenshots? | Impact on Scoring |
|---------|---------------|------------------------|-------------------|
| A | Treated as structural failure. 16 blank viewports at 1440px. | NO | PA-05: 1/4 FLAT. Visible alone: 2.5-3/4. |
| B | Treated as dominant finding. Cross-referenced full-page. | PARTIALLY | PA-05d cross-val: CONDITIONAL PASS |
| C | Treated as rendering failure. 16 consecutive blanks counted. | NO | PA-05c cross-val: FAIL (2/3 vertical thirds void) |
| D | Treated as DOM-present-but-invisible. Speculated scroll animations. | **YES** -- hypothesized IntersectionObserver + opacity:0 | All flow questions CONDITIONAL |
| E | Most sophisticated diagnosis. Identified DPR animation dependency. | **YES** -- "sections depend on scroll-triggered visibility transitions" | Acknowledged cannot rate full page. Visible 25% rates well. |
| F | Either whitespace void or screenshot-capture issue. | PARTIALLY | PA-05a cross-val: FAIL |
| G | Accepted void, used full-page as supplementary. | PARTIALLY | PA-05b cross-val: CONDITIONAL PASS |
| H | Dominant failure across all 3 viewports. Most thorough documentation. | NO | All viewports: "PUNISHED" |
| I | Treated as rendering bug. Most definitive: "fix bug, re-audit." | **YES** -- "Content IS in DOM, renders in non-scrolling capture, INVISIBLE during interactive scrolling" | PA-48: LAST CHOICE (current), 2nd-3rd (fixed) |

**Key finding (unique to file 08):** NO auditor formally questioned whether the screenshot PROTOCOL was at fault. All treated blanks as page defect. 3 auditors (D, E, I) correctly identified mechanism but none proposed protocol fix.

### Section 2: Experiential Gap Evidence (UNIQUE ANALYSIS NOT IN MASTER LIST)

**Attentional tunneling per auditor:**

| Auditor | % Report on Void | What They MISSED |
|---------|-----------------|-----------------|
| A | ~50% | No content beyond Section 03 evaluated. Could have used full-page. |
| B | ~35% | Mild. Still thorough typography analysis. |
| C | ~55% | All spatial questions collapsed to "void prevents assessment." Lost nuance on breathing/proportion. |
| D | ~40% | Flow/pacing truncated. All "CONDITIONAL." |
| E | ~30% | **BEST at resisting tunneling.** Detailed grid analysis + full-page supplementary. |
| F | ~45% | Rhythm analysis severely curtailed. Only 30% assessable. |
| G | ~40% | Metaphor partially saved by full-page as evidence source. Only auditor to systematically use full-page for domain analysis. |
| H | ~50% | Cross-viewport comparison thin (all blank = identical). |
| I | ~35% | Adversarial analysis strong despite void. PA-28 excellent and void-independent. |

**Unique findings:**
- Complexity Ladder Chart: NO auditor asked if it is raster image or HTML/SVG -- the fundamental distinction for fix routing.
- Question-Induced Tunnel Vision: C answered PA-09/PA-50/PA-51/PA-33 with essentially same content. D answered PA-12/PA-35/PA-52 with same answer. H answered PA-22 x3 viewports with same "PUNISHED."

### Section 3: Question Effectiveness Analysis (UNIQUE DATA)

**Questions that generated unique, useful findings:**
| Question | Auditor | Why Useful |
|----------|---------|-----------|
| PA-28 (fragility) | I | Zero-redundancy fragility. Void-independent. |
| PA-45 (showpiece) | A | Yegge blockquote = single best composed moment |
| PA-55 (adjacent diff) | B | Section variation IS perceptible (positive) |
| PA-63 (component echo) | E | Blockquote adaptation (red vs purple, standalone vs labeled) |
| PA-15 (left-edge) | E | 3 positions, one dominant. Actionable. |
| PA-77 (hierarchy levels) | B | 5 distinct levels identified |
| PA-67 (novelty) | A | Purple accent, density labels on TOC |
| PA-73 (accessibility) | H | Screen-reader/visible-content desync. NOVEL. |
| PA-62 (transition variation) | D | 5-shift dramatic + 3-shift moderate + 2-shift quiet. Quantitative. |

**Questions that generated noise:**
- PA-50 overlaps PA-09/PA-51 under catastrophic void
- PA-52 overlaps PA-32 under void
- PA-22 per viewport redundant when defect is viewport-independent
- PA-68 unanswerable when 75% invisible

**Questions NEVER asked but should have been (unique to file 08):**
1. "Is the full-page screenshot consistent with scroll-through?" -- should be MANDATORY
2. "Does the page length match TOC promise?" -- structural promise vs delivery
3. "Is there a progressive-disclosure or scroll-animation mechanism?" -- 3 auditors diagnosed independently

### Section 4: Routing Effectiveness (UNIQUE DATA)

| Auditor | Load | Assessment |
|---------|------|-----------|
| A | 9 | APPROPRIATE |
| B | 8 | APPROPRIATE |
| C | 11 | **OVERLOADED** -- several collapsed to same void finding |
| D | 11 | **OVERLOADED** but handled well |
| E | 6 | **LIGHT** -- highest signal-to-noise, could handle 2-3 more |
| F | 6 | **LIGHT** -- void curtailed rhythm analysis |
| G | 7 | APPROPRIATE |
| H | 5 | **LIGHT** -- viewport-independent void collapsed all comparisons |
| I | 6 | APPROPRIATE -- adversarial questions were void-resistant |

**Routing mismatches (unique findings):**
- C overloaded with void-dominated questions (PA-09/50/51/33 all same spatial defect)
- H under-utilized when defect is viewport-independent
- E's domain (structural analysis) is void-resistant; should get MORE questions during void
- I's adversarial questions are MOST void-resistant; should be prioritized under catastrophic defects

### Complete 16-Enrichment Inventory

| Item ID | Type | Description | Target File(s) | Tier | Merged into Master? | Unique Nuance NOT in Master |
|---------|------|-------------|----------------|------|---------------------|----------------------------|
| **PE-001** | CHANGE | Expand CSS pre-capture override: add `transition: none !important; visibility: visible !important; transform: none !important` to universal selector including `::before, ::after`. | `pa-deployment.md` S2.2 | MUST | YES -> ME-006 (sub-change 1) | **Unique nuance:** Explicitly targets `*::before, *::after` pseudo-elements. ME-006 includes the CSS but the pseudo-element targeting is more explicit in PE-001. Also provides detailed rationale: current override misses opacity:0 as default state, visibility:hidden, transform:translateY off-screen. |
| **PE-002** | CHANGE | Add full-page vs scroll cross-reference as mandatory check after capture. If full-page shows content not in scroll-through, overrides failed. REPEAT before auditor deployment. | `pa-deployment.md` new S2.5 | SHOULD | YES -> ME-006 (sub-change 3) | **Unique nuance:** "Do NOT deploy auditors on screenshots with hidden content." The halt-before-deploy imperative is stronger in PE-002 than in ME-006's Section 2.5. |
| **PE-003** | SAFEGUARD | Add "BLOCKED BY DEFECT" scoring option. If >50% content invisible, answer "BLOCKED BY DEFECT -- [name]" instead of forcing YES/NO/CONDITIONAL. Weaver tallies separately. | `pa-questions.md` S1 | SHOULD | YES -> ME-015 (sub-change 2) | **Unique nuance:** "Prevents auditors from spending analysis time on questions that cannot be meaningfully assessed, leading to pseudo-answers ('CONDITIONAL -- but only for visible content') that dilute the signal." ME-015 includes the protocol text but PE-003 explains the dilution mechanism. |
| **PE-004** | SAFEGUARD | Deduplicate void questions under catastrophic conditions. If PA-50 >=3 blank viewports: PA-09, PA-51, PA-33 auto-answered from PA-50. Saves ~30% of C's time. | `pa-questions.md` S3.2/3.6 | COULD | YES -> ME-033 | None -- ME-033 captures fully. |
| **PE-005** | CHANGE | Add "Content Promise vs Delivery" question PA-54. Count navigational promises fulfilled. <80% = STRUCTURAL PROMISE VIOLATION. Include collapsible summary adequacy. | `pa-questions.md` S3.6 | COULD | YES -> ME-023 | **Unique nuance:** "The Settlement Map promises 12 sections. The scroll delivers 3." This specific example is only in PE-005, not in ME-023. |
| **PE-006** | NUANCE | Add image-vs-CSS distinction guidance. Auditors note if problematic element is raster image or HTML/SVG. Raster = content production issue; HTML/CSS = styling issue. | `pa-questions.md` Appendix | COULD | YES -> ME-022 (note) | **Unique nuance:** "Auditors B, G, H, and I all flagged chart/diagram legibility. None identified whether these were images or styled HTML." The specific failure evidence is unique to PE-006. |
| **PE-007** | NUANCE | Expand H's cross-viewport protocol with defect-bypass. If defect identical across viewports, state once, redirect to viewport-specific differences in non-defective content. | `pa-deployment.md` S1.2.1 | COULD | YES -> ME-034 | None -- ME-034 captures fully. |
| **PE-008** | NUANCE | Prioritize adversarial questions under catastrophic defects. I's PA-28/PA-27/PA-48 become HIGHEST PRIORITY because they generate void-independent design feedback. | `pa-deployment.md` S1.2 | COULD | NO | **Entirely unique.** No master list enrichment addresses adversarial question prioritization under catastrophic defects. I's PA-28 produced the audit's most actionable finding (palette fragility) completely independent of the void. |
| **PE-009** | CHANGE | Add orchestrator validation gate before auditor deployment. (1) Content visible in scroll-through, (2) No >2 consecutive blank, (3) Screenshot content matches expected section count from navigation. | `pa-deployment.md` new S2.6 | SHOULD | YES -> ME-006 (sub-change 2) | **Unique nuance:** Check 3 (screenshot content matches expected section count from page's own navigation) is NOT in ME-006. ME-006's validation gate has checks 1-2 but not the structural promise cross-check. |
| **PE-010** | NUANCE | Add hypothetical PA-05 score protocol. Auditor A provides (1) actual score and (2) hypothetical score for visible/working content, labeled "(hypothesis)." | `pa-questions.md` S1.3 | COULD | YES -> ME-019 (partial) | **Unique nuance:** ME-019 puts the hypothetical in the Weaver. PE-010 puts it in the Auditor A instructions. Both are needed -- auditor generates hypothetical, Weaver presents it as range. PE-010's auditor-side instruction is not in the master list. |
| **PE-011** | NUANCE | Add blank screenshot threshold validation. If blank >20% of total at any viewport, capture is SUSPECT. | `pa-deployment.md` S2.1.1 | COULD | YES -> ME-006 (sub-change 2) | None -- ME-006 includes 20% threshold. |
| **PE-012** | SAFEGUARD | Add "First-Auditor Halt" protocol. Auditor A checks for catastrophic rendering defects during cold-look. If flagged, orchestrator re-captures before B-I proceed. | `pa-deployment.md` | SHOULD | YES -> ME-015 (sub-change 3) | **Unique nuance:** Specifies "typically A, since they are the impression specialist." ME-015 mentions First-Auditor Halt but does not specify which auditor. |
| **PE-013** | NUANCE | Full-page screenshot is GROUND TRUTH. If scroll-throughs show blanks that full-page does not, scroll-through is UNRELIABLE. Explicit usage guidance. | `pa-deployment.md` S2.2 | COULD | YES -> ME-015 (sub-change 4) | **Unique nuance:** "Some auditors used it extensively (G, E), others barely referenced it (C). There is no guidance on WHEN and HOW to use the full-page capture." The per-auditor usage variation data is unique. |
| **PE-014** | NUANCE | Cross-validators provide marginal signal when dominant defect exists. Add hypothetical cross-validation score for non-defective content. | `pa-deployment.md` S1.3 | COULD | NO | **Entirely unique.** No master list enrichment addresses cross-validator behavior under dominant defects. The "hypothetical cross-validation score" concept is unique to PE-014. |
| **PE-015** | NUANCE | Integrative Auditor is missing from this analysis. Gestalt impression should be least affected by void. Future analysis should always include. | `pa-deployment.md` S1.5 | COULD | NO | **Entirely unique.** Master list has no enrichment about Integrative Auditor inclusion requirements. |
| **PE-016** | NUANCE | 9 auditors correct for catching convergent defects, overkill for void-dominated pages. Value is in DISAGREEMENT and UNIQUE findings, not redundant void reports. Under catastrophic defects, optimize for diverse non-void findings. | N/A (observation) | COULD | NO | **Entirely unique.** Similar to HE-009 but different angle: HE-009 says "reduce to 5"; PE-016 says "optimize existing 9 for diversity under defect conditions." Both absent from master list. |

### Section 5: Auditor Agreement Patterns (UNIQUE DATA)

**Universal agreements (9/9):**
1. Whitespace void is catastrophic and page-breaking
2. Visible content (first 25%) is well-designed
3. Full-page shows content exists below void
4. Settlement Map with density labels is good navigational component
5. Yegge blockquote is single best composed moment

**Near-universal (7-8/9):**
6. Chart/diagram legibility is poor (A, B, G, H, I flagged)
7. Purple "Idea Compiler" border is a dialect shift (A positive, G and I negative -- MOST INTERESTING DISAGREEMENT)

**Significant disagreements (UNIQUE DATA):**
| Topic | Positive | Negative |
|-------|----------|----------|
| Purple border | A: "blue note in jazz." E: "meaningful adaptation" | G: "from a different design system." I: "color inconsistency" |
| Large red "8" numeral | (none positive) | G, I, H: "disproportionate," "oversized," "creates whitespace" |
| Metadata cards at 768px | H: "tight but functional," B: "impressive" | H (later): "should be 2x2 grid," I: "cramped" |
| Dark diagram containers | D: "confident structural markers," F: "heartbeat" | G: "visual cost exceeds metaphor payoff by 4th block" |

**Things only ONE auditor found (UNIQUE DATA):**
| Finding | Auditor | Reason for exclusivity |
|---------|---------|----------------------|
| Screen-reader/visible-content desync | H | Only H had accessibility questions |
| Page too long (14,500px) even if fully rendering | I | Only I had architectural challenge question |
| Palette has zero redundancy (fragility) | I | Only I had PA-28 adversarial fragility |
| Background temperature on own rhythm | F | Only F looking for independent rhythms |
| 5 distinct hierarchy levels | B | Only B assigned PA-77 |
| Component adaptation (red quote -> purple labeled quote) | E | Only E had PA-63 |

### FILE 08 APPENDIX: Purple Border Case Study

The purple border on "THE IDEA COMPILER" blockquote is documented as a PA protocol gap:
- 2 auditors positive (A, E): intentional accent, meaningful adaptation
- 2 auditors negative (G, I): breaks color system, inconsistency
- 1 neutral (B)
- 4 not in domain (C, D, F, H)

**Gap identified:** No PA question asks whether a palette deviation SERVES the content or is arbitrary. PA-19 asks if something feels out of place, but not if the out-of-place-ness is JUSTIFIED.

**Proposed question (no ID assigned):** "When you see a visual element that breaks the established pattern, does the break SERVE the content it marks? Or could the same content distinction be made within the existing palette?"

---

## CROSS-FILE SYNTHESIS: Unique Nuances Not Captured in Master List {#synthesis}

### Items ENTIRELY ABSENT from Master List

| Source | Item | Description | Should It Be Added? |
|--------|------|-------------|---------------------|
| HE-009 | Reduce PA auditors from 9 to 5 | Specific implementation: 5 auditors, dual-route PA-02/PA-08 to 2, PA-05 sub-criteria to 3. Saves $15-20/run. | YES -- but listed as excluded process question in master (V3E-006). Should at minimum be a CONSIDER item. |
| PE-008 | Adversarial question prioritization under catastrophic defects | I's void-resistant questions become HIGHEST PRIORITY. Weaver weights I more heavily. | YES -- small protocol addition, high value. |
| PE-014 | Hypothetical cross-validation scores under dominant defects | Cross-validators provide actual + hypothetical scores. | COULD -- small nuance. |
| PE-015 | Integrative Auditor inclusion requirement | Always include Integrative Auditor in PA analyses. | COULD -- process note. |
| PE-016 | Optimize 9 auditors for diversity under defect conditions | Different from HE-009 (reduce) -- keep 9 but redirect analysis when void exists. | COULD -- routing nuance. |
| File 08 Appendix | PA question for justified vs arbitrary palette deviation | No current question distinguishes intentional from arbitrary rule-breaking. | YES -- addresses real scoring gap (purple border disagreement). |

### Nuances in Merged Items That Master List LOSES

| Master Item | Source | Lost Nuance |
|-------------|--------|-------------|
| ME-006 | PE-009 | Check 3: screenshot content matches expected section count from page's own navigation. Not in ME-006. |
| ME-007 | HE-012 | PA question "PA-83: Does the page end cleanly?" + always capture bottom screenshot. Both lost in merge. |
| ME-019 | PE-010 | Hypothetical score should be generated by AUDITOR A, not just presented by Weaver. Auditor-side instruction lost. |
| ME-019 | HE-001 | Priming mechanism: Weaver is optimistic because it reads 9 auditor reports before seeing corrected screenshots. Not in ME-019. |
| ME-015 | PE-012 | "Typically A, since they are the impression specialist" -- specifies which auditor does First-Auditor Halt. |
| ME-018 | HE-008 | Systemic pattern of asymmetric treatment (false positives explained, false negatives ignored). Meta-observation lost. |
| ME-045 | HE-014 | Pipeline-A/Pipeline-B structural split proposal (P0-P2 vs P3A-P3C in separate contexts). More aggressive than ME-045's documentation. |

### Adversarial Findings That Create NEW Implementation Requirements

| Adversarial Finding | Requirement Created | Currently Addressed? |
|--------------------|--------------------|--------------------|
| ADV-07a: Gate-runner subtraction plan absent | Must remove GR-33-42 + GR-08 (~150 lines) BEFORE any gate additions | **NO -- not in any enrichment or plan** |
| ADV-07b: Builder recipe subtraction absent | Must remove duplicate patterns (~20-30 lines) before builder recipe additions | **NO** |
| ADV-05b: Combined gate additions exceed budget | Must validate: ME-003 + ME-014 + ME-040 combined = 180 lines; even after subtraction = net +30 | **NO** |
| ADV-05c: MECHANICAL + circuit breaker interaction | Must define verdict behavior when both classifications coexist | **NO** |
| ADV-05d: PA-05 range + tier system | Must define how ranges map to discrete tiers | **NO** |
| ADV-07e: Brief assembler compression | Must address how new TC Brief content survives compression | **NO** |

---

## LOSS ANALYSIS: What the 8-Change Plan Leaves Behind {#loss-analysis}

### The 8-Change Plan (8 items)

| # | Item(s) | In master list? |
|---|---------|----------------|
| 1 | ME-001 (experiential pass) | YES |
| 2 | ME-002 (usability priority override) | YES |
| 3 | ME-004 (builder legibility self-check) | YES |
| 4 | ME-005 (MECHANICAL verdict exception) | YES |
| 5 | ME-006 (screenshot validation gate) | YES |
| 6 | ME-007 (GR-44 trailing void fix) | YES |
| 7 | ME-037 + ME-051 (retire 4 questions + add 4 experiential) | YES |
| 8 | ME-039 (html color + font stack boilerplate) | YES |

### What the 8-Change Plan GETS RIGHT

- Covers 6 of 9 BLOCKING items (ME-001, ME-002, ME-004, ME-005, ME-006, ME-007)
- Includes the only SUBTRACTION (ME-037) paired with its coordinated addition (ME-051)
- Includes prevention-at-source (ME-039 boilerplate)
- Roughly within capacity budget (~200-250 lines)
- Addresses all 3 major Phase 2 findings: priority inversion (ME-002), experiential gap (ME-001), DPR bug (ME-006)

### What the 8-Change Plan MISSES

**3 BLOCKING items NOT in plan:**

| Item | What's Lost | Severity of Loss |
|------|-------------|-----------------|
| **ME-003** (WCAG contrast gate GR-60) | No programmatic contrast checking. Text contrast failures detected only by PA visual scan. | HIGH -- but adversarial review (ADV-06c) argues implementation is dangerous on zero-budget artifact. Should be deferred until after gate-runner subtraction. |
| **ME-008** (usability circuit breaker) | No orchestrator intervention between PA and Weaver for BLOCKING usability findings. Weaver can still deprioritize. | MEDIUM -- ME-002 partially addresses by changing Weaver's priority model. ME-008 adds an orchestrator-level backstop. |
| **ME-009** (experiential aggregation thresholds) | Experiential pass findings (ME-001) have no structured aggregation. Weaver manually parses 9 reports for legibility themes. | MEDIUM -- ME-001 generates the data, ME-009 structures how it's consumed. Without ME-009, Weaver may underweight experiential findings. |

**ALL 14 SIGNIFICANT items NOT in plan (ME-010 through ME-023):**

The most impactful losses:
| Item | Loss Description |
|------|-----------------|
| ME-010 (GR-05 split) | Sub-perceptual tints still cause REQUIRED failures |
| ME-011 (GR-06 rendered font) | Fallback fonts never rendering still trigger failures |
| ME-012 (GR-14 false positives) | 13 false positives from nested HTML persist |
| ME-013 (GR-09 tolerance) | Subpixel rendering values still fail |
| ME-015 (data corruption protocol) | Auditors still forced to score unanswerable questions |
| ME-016 (ARIA requirements) | Zero accessibility structure guidance for builder |
| ME-017 (Phase 4 fix application) | SHIP WITH FIXES verdict still unexecutable |
| ME-019 (PA-05 as range) | Score precision still obscures uncertainty |

**ALL gate severity restructuring NOT in plan (ME-024 through ME-030):**
- GR-07, GR-12, GR-43 still REQUIRED when they should be RECOMMENDED
- GR-19 still RECOMMENDED when it should be ADVISORY
- GR-48/GR-49 viewport conflict persists

**ALL builder recipe improvements NOT in plan except ME-039:**
- ME-038 (px-only borders), ME-041 (trailing void prevention) -- preventable failures continue

**ALL tracking/documentation NOT in plan (ME-042 through ME-046):**
- MANIFEST line counts remain wrong, time estimates remain wrong, new protocols untracked

**ALL reservoir value-system corrections NOT in plan except ME-051:**
- Background register guidance, zone uniqueness, dark moments, spacing compression, audience description, container exceptions, dead CSS, anti-Goodhart question, CSS technique library, emotional arc mapping -- all deferred

**ADVERSARIAL PREREQUISITES NOT in plan:**
- ADV-07a: Gate-runner subtraction (~150 lines) -- THE most important prerequisite, completely absent
- ADV-07b: Builder recipe subtraction (~30 lines)
- ADV-05c: MECHANICAL + circuit breaker interaction definition
- ADV-05d: PA-05 range + tier mapping

### ITEMS ENTIRELY UNIQUE TO FILES 07/08 THAT HAVE NO PATH TO IMPLEMENTATION

| Item | Source | Description | Impact |
|------|--------|-------------|--------|
| Reduce to 5 auditors | HE-009 | Dual-route critical questions, save $15-20/run | SIGNIFICANT cost + architecture improvement, no path |
| Adversarial question priority under defects | PE-008 | I's questions become highest priority under catastrophic defects | MINOR protocol improvement, easy to add |
| Hypothetical cross-validation scores | PE-014 | Cross-validators provide actual + hypothetical under dominant defects | MINOR nuance |
| Integrative Auditor inclusion | PE-015 | Always include in PA analyses | Process note |
| Optimize 9 for diversity under defects | PE-016 | Redirect analysis when void exists | Routing nuance |
| Justified vs arbitrary palette deviation question | File 08 Appendix | PA question addressing purple border disagreement | Scoring gap |
| Pipeline-A/Pipeline-B structural split | HE-014 (aggressive option) | P0-P2 vs P3A-P3C in separate contexts | Architecture proposal, deferred to ME-045 doc-level |
| PA-83: "Does page end cleanly at footer?" | HE-012 | Explicit trailing void PA question (lost in merge to ME-007) | PA coverage gap for trailing void |
| Screenshot at scrollHeight - viewportHeight | HE-012 | Always capture absolute bottom of page | Capture protocol gap |
| Screenshot match expected section count from nav | PE-009 (check 3) | Structural promise cross-check in validation gate | Validation gap (lost in merge to ME-006) |

---

## APPENDIX: STATISTICS

**Total unique items across all 4 files:**
- File 05: 57 enrichments + 5 conflicts + 18 excluded (already-fixed) + 187 excluded (invalidated) + 6 excluded (untestable) + 5 excluded (process) = 278 cataloged items
- File 06: 8 attacks containing 24+ distinct findings/warnings
- File 07: 18 enrichments + 6 cross-reference confirmations
- File 08: 16 enrichments + 9 useful questions + 4 noise questions + 3 never-asked questions + 4 routing mismatches + 5 universal agreements + 4 disagreements + 6 unique-to-one findings + 1 proposed question

**In 8-change plan:** 8 items (ME-001, ME-002, ME-004, ME-005, ME-006, ME-007, ME-037+ME-051, ME-039)
**Not in 8-change plan:** 49 master list items + all adversarial prerequisites + all file 07/08 unique items
**Items rated SAFE:** 37 of 56
**Items rated CAUTION:** 19 of 56
**Items rated RISK:** 1 of 56 (ME-005), but adversarial argues 3 (ME-005, ME-017, ME-010)

---

*Audit complete. 57 master enrichments inventoried, 8 adversarial attacks with 24+ findings cataloged, 18 handoff enrichments cross-referenced, 16 pipeline PA enrichments cross-referenced. 10 items entirely unique to files 07/08 with no path to implementation. 6 merged nuances lost in deduplication. 6 adversarial prerequisites NOT in any plan. The 8-change plan covers 6/9 BLOCKING items and addresses all 3 major Phase 2 findings, but leaves behind all gate fixes, all severity restructuring, all non-ME-039 builder improvements, and critically, the gate-runner subtraction prerequisite identified by the adversarial review as THE most important first step.*

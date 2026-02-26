# Comprehensive Audit of Files 01-04

**Auditor:** comprehensive-auditor (Opus 4.6)
**Date:** 2026-02-24
**Scope:** Extract EVERY change, enrichment, nuance, pre-condition, safeguard, and implementation detail from files 01 through 04.

---

## REFERENCE: The 8 Planned Changes

For cross-referencing throughout this audit:

| Code | Change |
|------|--------|
| **ME-001** | Experiential pass added to PA deployment |
| **ME-002** | Weaver usability priority override |
| **ME-004** | Builder Q0 legibility self-check |
| **ME-005** | Verdict logic for mechanical failures |
| **ME-006** | Screenshot validation gate |
| **ME-007** | GR-44 trailing void fix |
| **ME-037+ME-051** | PA question swap (experiential replaces structural) |
| **ME-039** | html/font boilerplate additions |

---

## FILE 1: 01-v3-enrichments.md (52 enrichments)

### Distribution: 9 BLOCKING, 18 SIGNIFICANT, 25 MINOR

### Table: All 52 Enrichments

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| V3E-001 | CHANGE | Add mandatory experiential pass (Section 2.5) to ALL 9 auditors before questions. Report illegible/effortful/skipped text in "Section 0. Experiential Pass" at top of audit report. | pa-deployment.md | MUST | **YES** (ME-001) |
| V3E-002 | CHANGE | Add universal legibility pre-check question U-01 to ALL 9 auditors, asked FIRST before assigned questions. Binary: any text unreadable? | pa-deployment.md | MUST | **PARTIAL** (ME-001 covers experiential pass; U-01 as specific binary question is additional) |
| V3E-003 | CHANGE | Add screenshot validation gate before PA distribution: no >3 consecutive monochrome, entropy threshold, full-page cross-check. Re-capture with animation-disabling CSS if validation fails. | pa-deployment.md | MUST | **YES** (ME-006) |
| V3E-004 | CHANGE | Add data corruption escalation protocol: auditors flag DATA QUALITY CONCERN in report header if screenshots look corrupted. Do not adjust scoring, but report discrepancy. | pa-deployment.md | SHOULD | NO |
| V3E-005 | NUANCE | Add experiential detection threshold table: >=3/9 = CONFIRMED illegibility, 1/9 = POSSIBLE, 0/9 = all readable. Goes in pa-deployment.md Section 5 (Weaver input format). | pa-deployment.md | SHOULD | NO |
| V3E-006 | NUANCE | Consider reducing auditor count from 9 to 3-5 OR keeping 9 but making 2 "experiential auditors." Cost $30-40 for ~1 unique finding beyond gates. | pa-deployment.md | COULD | NO |
| V3E-007 | CHANGE | Add WCAG contrast quantitative guardrail to pa-questions.md Appendix B: estimate contrast ratio, report vs WCAG AA thresholds (4.5:1 normal, 3:1 large text). | pa-questions.md | SHOULD | NO |
| V3E-008 | CHANGE | Add footer contrast explicit instruction to PA-02: "Include header and footer text in assessment, not just body content." | pa-questions.md | COULD | NO |
| V3E-009 | CHANGE | Add navigation usability question PA-80: Can you reach any section from middle of page? Flag if >10 viewport-heights with no sticky nav/back-to-top. | pa-questions.md | SHOULD | **PARTIAL** (ME-037+ME-051 swaps questions but this specific one may or may not be included) |
| V3E-010 | CHANGE | Add information extraction question PA-81: For every chart/diagram, can you answer "What is the ONE thing this wants me to know?" in <5 seconds? | pa-questions.md | SHOULD | **PARTIAL** (ME-037+ME-051) |
| V3E-011 | CHANGE | Add false affordance scan question: examine every element that LOOKS interactive -- does it actually DO something? | pa-questions.md | COULD | NO |
| V3E-012 | CHANGE | Add content-promise match question: do TOC entries/headings deliver on their promise? Do collapsible summaries preview content? | pa-questions.md | COULD | NO |
| V3E-013 | FORMATTING | Add `<!-- PIPELINE-INTROSPECTION -->` metadata comment to PA-55 and PA-56. These test pipeline's own model, not reader experience. Weaver should weight differently. | pa-questions.md | COULD | NO |
| V3E-014 | CHANGE | Add usability priority override rule to Weaver: "Is there ANY finding from ANY auditor that describes something a reader CANNOT READ or CANNOT USE? That = Fix #1 regardless of gate status." | pa-weaver.md | MUST | **YES** (ME-002) |
| V3E-015 | CHANGE | Add experiential pass aggregation to Weaver input: pre-aggregated summary "N/9 auditors flagged [element]." If N>=3, CONFIRMED USABILITY BLOCKER. | pa-weaver.md | SHOULD | **PARTIAL** (ME-002 adds priority override but aggregation mechanism is additional) |
| V3E-016 | CHANGE | Add GR-55/GR-60: WCAG text contrast gate (REQUIRED). Walk DOM for effective background color. Check SVG text/tspan. Normal text >=4.5:1, large text >=3:1. ~70 lines Playwright JS. | gate-runner-core.js | MUST | NO |
| V3E-017 | CHANGE | Add GR-56/GR-61: minimum font size gate (RECOMMENDED). Body >=14px, caption/label >=11px, absolute min >=10px. Check SVG text separately. ~50 lines. | gate-runner-core.js | SHOULD | NO |
| V3E-018 | CHANGE | Add GR-57/GR-62: text overflow/clipping gate (RECOMMENDED). Detect horizontal/vertical clipping, text-overflow: ellipsis, off-screen content. ~60 lines. | gate-runner-core.js | COULD | NO |
| V3E-019 | CHANGE | Fix GR-44: measure from last VISIBLE element to scrollHeight, not from last DOM element. Report difference. The ~5,500px void was missed because GR-44 measured DOM extent not visible extent. | gate-runner-core.js | MUST | **YES** (ME-007) |
| V3E-020 | CHANGE | Fix GR-14: restrict gap measurement to zone-level siblings (direct children of main or same parent). Not sub-elements within zones measured against adjacent zones. Architecturally broken for nested HTML. | gate-runner-core.js | SHOULD | NO |
| V3E-021 | CHANGE | Fix GR-09: verify tolerance bands are present per FIX-003 spec. If integer-only check exists, remove or make conditional. 0.667px and 2.667px should PASS. | gate-runner-core.js | SHOULD | NO |
| V3E-022 | CHANGE | Split GR-05 into GR-05a (visible, opacity >=0.3 = REQUIRED) and GR-05b (sub-perceptual, opacity <0.3 = ADVISORY). | gate-runner-core.js | SHOULD | NO |
| V3E-023 | CHANGE | Modify GR-06: check RENDERED font via document.fonts.check(), not declared font-stack. Fallback-only violations -> ADVISORY. | gate-runner-core.js | SHOULD | NO |
| V3E-024 | CHANGE | Downgrade GR-07 from REQUIRED to RECOMMENDED. Add visible-text-only filter (textContent.trim().length >0 and offsetHeight >0). | gate-runner-core.js | COULD | NO |
| V3E-025 | CHANGE | Downgrade GR-12 (letter-spacing >=0.025em) from REQUIRED to RECOMMENDED. Entire monitored range is sub-perceptual. | gate-runner-core.js | COULD | NO |
| V3E-026 | CHANGE | Downgrade GR-43 (self-evaluation comment) from REQUIRED to RECOMMENDED. Invisible HTML comment should not block builds. | gate-runner-core.js | COULD | NO |
| V3E-027 | CHANGE | Downgrade GR-19 (threshold gaming detection) from RECOMMENDED to ADVISORY. Checks builder INTENT not visual output. | gate-runner-core.js | COULD | NO |
| V3E-028 | CHANGE | Adjust GR-21 threshold from 4 to 6 for COMPOSED mode, OR exclude backgrounds with alpha <0.1 from count. | gate-runner-core.js | COULD | NO |
| V3E-029 | CHANGE | Add GR-22 skip-link exemption: `el.classList.contains('skip-link')` -> continue. | gate-runner-core.js | COULD | NO |
| V3E-030 | CHANGE | Fix verdict logic: add MECHANICAL exception. If ALL identity gate failures are MECHANICAL (<=5 CSS lines, no HTML structural change, no design decision), verdict = REFINE not REBUILD. Auto-classify by gate runner, not orchestrator discretion. | MANIFEST.md | MUST | **YES** (ME-005) |
| V3E-031 | CHANGE | Add Phase 4: apply Weaver's top-N mechanical fixes within pipeline run (CSS value changes, font-stack cleanup, html color). Re-run relevant gates to verify. | MANIFEST.md | SHOULD | NO |
| V3E-032 | CHANGE | Update components.css line count from 290 to actual (1,195). | MANIFEST.md | COULD | NO |
| V3E-033 | CHANGE | Add usability circuit breaker between Phase 3B and 3C: orchestrator scans all 9 reports for BLOCKING usability findings. If found: elevate to BLOCKING-USABILITY, annotate as "must be Fix #1." | MANIFEST.md | SHOULD | NO |
| V3E-034 | CHANGE | Add Q0 to builder self-eval: "Is every piece of text legible at its rendered size and contrast? Any <12px? Any contrast <3:1? Any chart labels hard to read?" | artifact-builder-recipe.md | MUST | **YES** (ME-004) |
| V3E-035 | CHANGE | Add Q1 to builder self-eval: "Does every visual component convey its information clearly? List each non-prose element and yes/no." | artifact-builder-recipe.md | SHOULD | **PARTIAL** (ME-004 adds Q0; Q1 is additional) |
| V3E-036 | CHANGE | Add px-only border width instruction: "All border-width values MUST be integer px (1px, 2px, 3px, 4px). Do NOT use em/rem." | artifact-builder-recipe.md | COULD | **PARTIAL** (ME-039 handles boilerplate but this specific instruction may not be included) |
| V3E-037 | CHANGE | Add `html { color: #2a2a2a; font-family: Inter, system-ui, sans-serif; }` to boilerplate CSS. | artifact-builder-recipe.md | COULD | **YES** (ME-039) |
| V3E-038 | CHANGE | Add font stack template as CSS custom properties: --font-body, --font-heading, --font-code. | artifact-builder-recipe.md | COULD | **YES** (ME-039) |
| V3E-039 | CHANGE | Add ARIA accessibility requirement: all data tables must have aria-label/aria-labelledby, all diagrams/images must have meaningful alt text, target >=15 ARIA attributes. | artifact-builder-recipe.md | SHOULD | NO |
| V3E-040 | CHANGE | Add scroll-reveal disabling in screenshot capture: inject CSS `animation: none !important; opacity: 1 !important; transform: none !important; transition: none !important;` | artifact-orchestrator.md | SHOULD | **PARTIAL** (ME-006 adds screenshot validation; scroll-reveal disabling is a prerequisite/companion) |
| V3E-041 | NUANCE | Add context budget awareness note: pipeline typically requires 2-3 sessions. Plan for session boundaries. Save all state to files before each potential session boundary. | artifact-orchestrator.md | COULD | NO |
| V3E-042 | CHANGE | Add gate perceptibility classification column to gate manifest: HUMAN-PERCEPTIBLE, SUB-PERCEPTUAL, MIXED, N/A per gate. | artifact-gate-runner.md | SHOULD | NO |
| V3E-043 | CHANGE | Add li to reduced-minimum group in GR-17 (change from 12px to 4px minimum, same as td/th). | artifact-gate-runner.md | COULD | NO |
| V3E-044 | CHANGE | Document experiential pass protocol in artifact-pa-protocol.md: rationale (gorilla experiment), expected impact (11% -> 78-100%), reference to pa-deployment.md. | artifact-pa-protocol.md | SHOULD | NO |
| V3E-045 | CHANGE | Add experiential pass tracking fields to EXECUTION-TRACKER-TEMPLATE.md Phase 3B. | EXECUTION-TRACKER-TEMPLATE.md | COULD | NO |
| V3E-046 | CHANGE | Add screenshot validation tracking fields to EXECUTION-TRACKER-TEMPLATE.md Phase 3A. | EXECUTION-TRACKER-TEMPLATE.md | COULD | NO |
| V3E-047 | MECHANISM | System-wide priority hierarchy inversion fix. Current: CSS compliance > compositional intelligence > human experience. New: human experience > CSS compliance > compositional. This is the META-enrichment implemented by V3E-001, V3E-014, V3E-016, V3E-022-027, V3E-030, V3E-033, V3E-034, V3E-035. | Multiple | MUST | **PARTIAL** (8-change plan covers the top items but not the full systematic inversion) |
| V3E-048 | CHANGE | Add trailing void prevention instruction to builder recipe: "Verify page doesn't extend beyond last content element. Add `body { min-height: unset; }` if needed." | artifact-builder-recipe.md | COULD | NO |
| V3E-049 | CHANGE | Add scroll termination check to GR-44: is last visible content within 300px of scrollable area bottom? | gate-runner-core.js | COULD | **YES** (part of ME-007) |
| V3E-050 | CHANGE | Add horizontal scroll check at element level to PA-07: check ELEMENT-LEVEL overflow-x: auto, not just page-level. | pa-questions.md | COULD | NO |
| V3E-051 | CHANGE | Add GR-14 li padding threshold consideration OR document constraint for builders. | pa-questions.md / artifact-builder-recipe.md | COULD | NO |
| V3E-052 | NUANCE | A/B test protocol: full V3 pipeline vs Opus + 50-line constraints + components.css on same content. Compare PA-05. Cost $5-15, 1-2 hours. | N/A (experiment) | COULD | NO |

### Summary: 8-Change Plan Coverage of File 01

| Coverage Status | Count | Items |
|----------------|-------|-------|
| **YES** (fully covered) | 8 | V3E-001, V3E-003, V3E-014, V3E-019, V3E-030, V3E-034, V3E-037, V3E-038 |
| **PARTIAL** (related but incomplete) | 9 | V3E-002, V3E-009, V3E-010, V3E-015, V3E-035, V3E-036, V3E-040, V3E-047, V3E-049 |
| **NO** (not covered) | 35 | All remaining |

---

## FILE 2: 02-reservoir-extraction.md (360 old enrichments classified)

### Distribution: 94 APPLIED, 187 INVALIDATED, 79 STILL-USEFUL

### Table: All STILL-USEFUL Items (79 total, the actionable output)

#### A. Usability Improvements (18 items)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| VA-03 | CHANGE | Break Zone 4 monotony (5 identical principle blocks) | HTML structure | SHOULD | NO |
| VA-06 | CHANGE | Fix subtitle low-contrast on dark header | HTML CSS | SHOULD | NO |
| VA-07 | CHANGE | Reduce gap between TOC and Zone 1 | HTML CSS | COULD | NO |
| VA-08 | CHANGE | Zebra-striping for table rows | HTML CSS | COULD | NO |
| VA-09 | CHANGE | Collapsible treatment for long startup script | HTML structure | COULD | NO |
| VA-10 | CHANGE | Visual preview for collapsed accordion items | HTML structure | COULD | NO |
| VA-11 | CHANGE | Differentiate card backgrounds by level | HTML CSS | COULD | NO |
| CSS-07 | CHANGE | Add scroll-margin-top for anchor links | HTML CSS | COULD | NO |
| E01-04 | CHANGE | Responsive drop cap sizing (3.5em too large at 768px) | Builder recipe | COULD | NO |
| E03-03 | SAFEGUARD | Recovery command danger hierarchy (destructive commands look different from safe ones) | Builder recipe | SHOULD | NO |
| E08-03 | CHANGE | Text measure variation (uniform 960px left-aligned is fatiguing) | Builder recipe | SHOULD | NO |
| E08-05 | CHANGE | Vary heading treatment for emphasis | Builder recipe | COULD | NO |
| E08-06 | CHANGE | Vary callout structure for different types | Builder recipe | COULD | NO |
| E08-07 | CHANGE | Design footer as real destination, not just stop | Builder recipe | COULD | NO |
| E08-10 | CHANGE | Distinguish ASCII diagrams from code blocks | Builder recipe | COULD | NO |
| E06-11 | CHANGE | Deliberate plainness instruction (reader needs rest zones) | TC Brief Template | SHOULD | NO |
| E06-12 | CHANGE | Thematic return instruction (circular narrative strengthens experience) | TC Brief Template | COULD | NO |
| AR-04 | CHANGE | One-line audience description for PA auditors (fixes audience-blindness) | PA protocol | COULD | NO |

#### B. Experiential PA Questions (24 items)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| PA-80 | CHANGE | Does your feeling change at least 3 times in logical order? | pa-questions.md | SHOULD | **PARTIAL** (ME-037+ME-051 does question swap but specific questions not confirmed) |
| PA-81 | CHANGE | Stretch of 3+ screenfuls where attention drifts? | pa-questions.md | SHOULD | **PARTIAL** |
| PA-84 | CHANGE | Any interactive detail revealing intentional refinement? | pa-questions.md | COULD | **PARTIAL** |
| PA-85 | CHANGE | Visual surprise in bottom half? | pa-questions.md | COULD | **PARTIAL** |
| PA-86 | CHANGE | Does CSS amplify how text speaks? | pa-questions.md | SHOULD | **PARTIAL** |
| PA-87 | CHANGE | Could this design work for different subject matter? (content-form specificity) | pa-questions.md | SHOULD | **PARTIAL** |
| PA-88 | CHANGE | Close eyes, what visual image persists? (memorability) | pa-questions.md | COULD | **PARTIAL** |
| PA-89 | CHANGE | Navigate by visual landmarks without reading? (findability) | pa-questions.md | SHOULD | **PARTIAL** |
| PA-90 | CHANGE | Do you feel more trusting at end than start? (trust) | pa-questions.md | COULD | **PARTIAL** |
| PA-91 | CHANGE | Design hedges somewhere? (confidence) | pa-questions.md | COULD | **PARTIAL** |
| PA-93 | CHANGE | Layout decision specific to this viewport? (responsive intent) | pa-questions.md | COULD | **PARTIAL** |
| PA-95 | CHANGE | Spacing feel taut or slack? (precision) | pa-questions.md | COULD | **PARTIAL** |
| PA-96 | CHANGE | Visual design mirrors logical structure? (content-form coupling) | pa-questions.md | SHOULD | **PARTIAL** |
| PA-97 | CHANGE | Each zone NEEDS to look different? (content-driven necessity) | pa-questions.md | COULD | **PARTIAL** |
| PA-98 | CHANGE | Page feels finished or could continue indefinitely? (completion) | pa-questions.md | COULD | **PARTIAL** |
| PA-99 | CHANGE | Would you WANT to return to this page? (ultimate usability) | pa-questions.md | SHOULD | **PARTIAL** |
| NEW-01 | CHANGE | Anything makes you involuntarily STOP scrolling? (engagement) | pa-questions.md | SHOULD | **PARTIAL** |
| NEW-02 | CHANGE | What visual element would you describe a week later? (memorability) | pa-questions.md | COULD | **PARTIAL** |
| NEW-04 | CHANGE | Visual journey CONCLUDED or just STOPPED? (closure) | pa-questions.md | COULD | **PARTIAL** |
| NEW-05 | CHANGE | Typography express a personality? (type character) | pa-questions.md | COULD | **PARTIAL** |
| NEW-07 | CHANGE | Element created SPECIFICALLY for this content? (custom vs template) | pa-questions.md | SHOULD | **PARTIAL** |
| NEW-08 | CHANGE | One BOLD design decision? (confidence signal) | pa-questions.md | COULD | **PARTIAL** |
| NEW-17 | CHANGE | Page intentionally BREAKS its own rules? (sprezzatura, the 4/4 separator) | pa-questions.md | SHOULD | **PARTIAL** |
| NEW-18 | CHANGE | Section where designer stopped paying attention? (craft consistency) | pa-questions.md | COULD | **PARTIAL** |

**CRITICAL NUANCE:** These 24 questions should REPLACE structural questions, NOT be added alongside them. Net question count should not increase.

#### C. PA Question Retirements (4 items)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| PA-06 retire | CHANGE | Retire "Words stacking vertically?" -- near-zero failure rate | pa-questions.md | SHOULD | **PARTIAL** (ME-037+ME-051) |
| PA-07 retire | CHANGE | Retire "Can you read the longest paragraph?" -- PA-02 covers this | pa-questions.md | SHOULD | **PARTIAL** |
| PA-09 retire | CHANGE | Retire "Dead space, no purpose?" -- PA-33 captures same better | pa-questions.md | SHOULD | **PARTIAL** |
| PA-40 retire | CHANGE | Retire "Spacing jump?" -- PA-69 subsumes more precisely | pa-questions.md | SHOULD | **PARTIAL** |

#### D. Value System Corrections (12 items)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| E08-01 | CHANGE | 3 perceptually distinct background registers (LIGHT/MEDIUM/DARK) instead of 6-zone gradient. FEWER distinctions, LARGER deltas. SIMPLIFICATION. | Builder recipe / TC Brief | SHOULD | NO |
| E08-02 | CHANGE | One unique visual element per zone | Builder recipe / TC Brief | SHOULD | NO |
| E08-04 | CHANGE | 2-3 dark moments distributed across scroll | Builder recipe / TC Brief | SHOULD | NO |
| E08-08 | CHANGE | Widen spacing compression range to 3:1 ratio (80px vs 32px doesn't feel like compression) | Builder recipe | COULD | NO |
| E08-09 | CHANGE | Editorial-weight-by-importance heading treatment | Builder recipe | COULD | NO |
| E08-11 | CHANGE | Asymmetric spacing for editorial emphasis | Builder recipe | COULD | NO |
| E05-02 | CHANGE | Metaphor persistence in final zones (addresses "metaphor fades" pattern) | Builder recipe / TC Brief | SHOULD | NO |
| E06-01 | MECHANISM | Add experiential PA questions as PRINCIPLE (not specific list) | PA protocol | SHOULD | **YES** (ME-001 + ME-037+ME-051) |
| E06-09 | CHANGE | Emotional arc from inventory to sequence | PA questions | COULD | NO |
| E06-06 | CHANGE | PA-93 Viewport Design Intent (catches fluid-not-responsive) | pa-questions.md | COULD | **PARTIAL** |
| E03-06 | MECHANISM | Lead PA with experiential questions before structural (changes ORDERING not quantity) | pa-deployment.md | SHOULD | **YES** (ME-001) |
| E03-05 | CHANGE | Second interstitial moment for long pages | Builder recipe | COULD | NO |

#### E. Builder Experience Improvements (9 items)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| E01-01/E04-01 | CHANGE | Concept-naming for custom properties (--accent-blue = #A07D50 is a bug) | Builder recipe | COULD | NO |
| CSS-03 | CHANGE | Remove unused font-weight 700 from import (20-50KB saved) | components.css | COULD | NO |
| CSS-04 | CHANGE | Remove dead tokens (3 unused custom properties) | tokens.css | COULD | NO |
| CSS-09 | CHANGE | Remove .featured-code if unused (13 dead CSS lines) | components.css | COULD | NO |
| CSS-10 | NUANCE | Codify zone-adaptive body font-size as technique (not rule) | Builder recipe | COULD | NO |
| CSS-11 | NUANCE | Codify dark code block inversion as technique | Builder recipe | COULD | NO |
| CSS-12 | NUANCE | Codify inversion block pattern as technique | Builder recipe | COULD | NO |
| CSS-13 | NUANCE | Codify font-family trinity as technique | Builder recipe | COULD | **PARTIAL** (ME-039 adds font stack template) |
| CSS-14 | NUANCE | Codify border hierarchy with color-weight pairing as technique | Builder recipe | COULD | NO |

#### F. Process Simplifications (12 items)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|-------------------|
| E02-03 | CHANGE | Weaver can downgrade REBUILD->REFINE for single-value fixes | pa-weaver.md / MANIFEST | SHOULD | **PARTIAL** (ME-005 adjusts verdict logic) |
| AR-01 | CHANGE | Container width per-zone exceptions for code-heavy content | MANIFEST / Builder recipe | COULD | NO |
| AR-02 | CHANGE | Palette families instead of warm/cool binary | Builder recipe / Gate runner | COULD | NO |
| AR-10 | CHANGE | Remove mechanism count floor (make ADVISORY) | Gate runner | COULD | NO |
| VA-04 | CHANGE | Semantic color coding for principle borders | Builder recipe | COULD | NO |
| VA-12 | CHANGE | Strengthen metaphor from announced to structural | Builder recipe | SHOULD | NO |
| PF-14 | CHANGE | Auditor conviction statement (single DOMINANT finding per auditor) | PA deployment | COULD | NO |
| PF-15 | CHANGE | Soft boundary for REBUILD/REFINE (instead of hard binary) | MANIFEST | COULD | **PARTIAL** (ME-005) |
| PA-01 to PA-04 | CHANGE | Retire 4 low-value PA questions | pa-questions.md | SHOULD | **PARTIAL** (ME-037+ME-051) |
| PA-05 | CHANGE | Revise PA-12 for specificity (sharpen existing question) | pa-questions.md | COULD | NO |
| PA-06 | CHANGE | Revise PA-16 to Inverse Twin Test (replace, not add) | pa-questions.md | COULD | NO |
| ADV-05 | CHANGE | "What would you REMOVE?" -- THE anti-Goodhart question | pa-questions.md | SHOULD | NO |

### Cross-Cutting Observations from File 02

| Observation | Type | Description | Tier |
|-------------|------|-------------|------|
| OBS-01 | MECHANISM | 75% of old reservoir's enrichments ADD something. Only 8% subtract. More specification = worse output. | MUST (filter principle) |
| OBS-02 | MECHANISM | All STILL-USEFUL items share: fix USABILITY, measure EXPERIENCE, SIMPLIFY pipeline, or address CONTENT-FORM coupling. | MUST (selection criterion) |
| OBS-03 | SAFEGUARD | E07-01 (Automated REFINE cycle) -- historically highest-leverage -- is NOW INVALID. Refining inverted-value output = polished wrong output. Only becomes high-leverage AFTER value system correction. | MUST (anti-loss) |
| OBS-04 | NUANCE | 6 of 7 proposed experiments superseded. Only Experiment 4 (human validation) remains genuinely unresolved. | COULD |
| OBS-05 | NUANCE | extract-meta.md is 90% invalidated. Only ~8 experiential PA questions survive. | COULD |

### Summary: 8-Change Plan Coverage of File 02 STILL-USEFUL Items

| Coverage Status | Count |
|----------------|-------|
| **YES** | 2 (E06-01, E03-06) |
| **PARTIAL** | ~35 (mostly PA question swaps whose specific content is not confirmed) |
| **NO** | ~42 (all usability improvements, value system corrections, builder improvements, most process simplifications) |

---

## FILE 3: 03-anti-loss-map.md (25 mechanisms)

### Anti-Loss Mechanism Inventory: M-01 through M-25

#### Structural Mechanisms (M-01 through M-06)

| Mechanism | Type | What it Protects | Location(s) | Fragility | In 8-Change Plan? | Must NOT Break |
|-----------|------|-----------------|-------------|-----------|-------------------|----------------|
| M-01: Artifact Decomposition | SAFEGUARD | Agent context windows from monolithic specs | MANIFEST.md L91-102, L179-342, L912-958; gate-manifest.json L7-15; pa-deployment.md L4-5 | ROBUST | NO (not touched) | Do NOT remove/rename artifacts without updating cross-refs. Adding files = update routing table AND file registry. |
| M-02: Dual-Channel Architecture | SAFEGUARD | Information loss through compression. Ch1=universal/lossless, Ch2=content/regenerated | MANIFEST.md L196-198, L764, L795-797; artifact-orchestrator.md L233-242; artifact-builder-recipe.md L62-63 | ROBUST | NO | Do NOT change existing dual-route items to single-route. New thresholds should consider dual-routing. |
| M-03: Direct File Injection | SAFEGUARD | Reference files being compressed/summarized during brief assembly | MANIFEST.md L853, L1044-1045, L1083-1089; artifact-builder-recipe.md L23-25, L55-57, L62-63; EXECUTION-TRACKER L36-38, L118-123 | ROBUST | NO | Do NOT change "bypass the brief" language at L62-63. New reference files for builder need same treatment. |
| M-04: Per-Agent Context Isolation | SAFEGUARD | Context contamination (builder seeing thresholds, auditors seeing intent) | MANIFEST.md L859-868, L301-304; pa-deployment.md L92, L201-221; pa-guardrails.md L119-137; pa-questions.md L312-316; artifact-orchestrator.md L131-143 | **CRITICAL** | **YES** (ME-001 adds content to pa-deployment.md, ME-004 adds to builder recipe) -- VERIFY no isolation leaks | Adding to pa-questions.md Section 4: mark WEAVER USE ONLY. Adding to builder recipe: no gate thresholds in pass/fail format. Update MANIFEST L859-868 exclusion table if new exclusion rules needed. |
| M-05: Tiered Brief Structure | SAFEGUARD | Under-budgeted brief sections causing under-specified zones | gate-runner-core.js L29-67 (BV-01); MANIFEST.md L28-33, L404-408; gate-runner-preconditions.md L14-19 | **CRITICAL** (JS) / ROBUST (markdown) | NO | BV-01 regex patterns L35-39 must match tier header format. `min` values are source-of-truth. New tier = new entry in tierHeaders object + MANIFEST quickstart. |
| M-06: Suppressor Management | SAFEGUARD | Quality-suppressing language in brief ("sample 2-4", "must not", "verify that") | gate-runner-core.js L104-117 (BV-04); artifact-orchestrator.md L42; MANIFEST.md L32; gate-runner-preconditions.md L37-46 | **CRITICAL** (regex) | **YES** (ALL brief-facing enrichments must use RECIPE verbs not CHECKLIST verbs) | BV-04 regexes L105-109 will catch enrichment text using "verify that", "must be", etc. Use Build/Create/Deploy/Assess verbs. |

#### Routing Mechanisms (M-07 through M-10)

| Mechanism | Type | What it Protects | Location(s) | Fragility | In 8-Change Plan? | Must NOT Break |
|-----------|------|-----------------|-------------|-----------|-------------------|----------------|
| M-07: MANIFEST-Driven Routing | SAFEGUARD | Wrong files reaching wrong agents | MANIFEST.md L849-857, L859-868, L179-342; EXECUTION-TRACKER L54-58, L83-91, L117-127, L190-195 | ROBUST | NO | New files = add to both Appendix B tables AND Appendix D. Check Section 3 routing before modifying artifacts. |
| M-08: Dual-Route Pattern | SAFEGUARD | PASS* verdicts (conditional passes violating binary principle) | gate-runner-core.js L234-277 (GR-05); MANIFEST.md L196-198, L795-796; artifact-builder-recipe.md L108-120 | FRAGILE (isCold heuristic) | NO | `isCold()` at L246-248 is simple proxy (B>R+10 AND B>G+10). New color recommendations must pass this test. |
| M-09: Agent Prompt Templates | SAFEGUARD | Agents receiving wrong instructions or contaminated context | MANIFEST.md L975-1170 (all templates); pa-deployment.md L42-52, L100-104, L106-119 | FRAGILE (templates) / ROBUST (tables) | **YES** (ME-001 changes PA auditor instructions, ME-004 changes builder template, ME-037+ME-051 changes question assignments) | Do NOT break `{VARIABLE_NAME}` placeholders. Maintain file reference ordering. Update question counts in MANIFEST L149-157 if new questions added. |
| M-10: Content Map Regeneration | SAFEGUARD | Content compression (lossy) vs regeneration (lossless) | gate-runner-core.js L39 (BV-01 ContentMap regex); MANIFEST.md L377-378, L986-1003; artifact-orchestrator.md L192-194 | FRAGILE (regex) | NO | ContentMap regex matches `^#+\s*Content\s*Map`. If header format changes, BV-01 fails silently. |

#### Format Mechanisms (M-11 through M-18)

| Mechanism | Type | What it Protects | Location(s) | Fragility | In 8-Change Plan? | Must NOT Break |
|-----------|------|-----------------|-------------|-----------|-------------------|----------------|
| M-11: Recipe Format | SAFEGUARD | Checklist format in brief producing FLAT output | gate-runner-core.js L93-102 (BV-03); artifact-builder-recipe.md L5, L13; MANIFEST.md L31, L234; gate-runner-preconditions.md L30-35 | **CRITICAL** (verb lists) | **YES** (all brief-facing changes must use recipe verbs) | BV-03 verb lists at L94-95 are enforcement. New recipe verbs (Compose, Calibrate) should be added to L94. 3:1 ratio at L96 is threshold. |
| M-12: World-Description Framing | SAFEGUARD | Prohibition rigidity (S-02). Builder receives "your world has property Y" not "do NOT use X" | MANIFEST.md L188-190, L198, L863-864, L879; artifact-builder-recipe.md L13; artifact-orchestrator.md L131-143; gate-runner-core.js L107 | FRAGILE (requires discipline) | **YES** (ME-004 adds builder content -- must use world-description framing) | BAD: "Builder must NOT use more than 4 backgrounds." GOOD: "A viewport comfortably holds 4 distinct background rooms." BV-04 catches worst violations but cannot detect subtle prohibition framing. |
| M-13: Binary Rules | SAFEGUARD | PASS* violations, inconsistent verdicts, gate coverage gaps | gate-runner-core.js L1-20, L752-778, L1330-1374 (GR-48); gate-manifest.json L55-59, L18-52, L62-111; gate-runner-spec.md L51-57; MANIFEST.md L275-285 | **CRITICAL** (JS) / FRAGILE (JSON) | **YES** (ME-005 changes verdict logic, ME-007 modifies gate code) | Adding/removing gates requires 5-7 coordinated updates. MOST DANGEROUS: changing REQUIRED_GATES array in GR-48 without changing gate-manifest.json tiers. |
| M-14: Perception Calibration Table | SAFEGUARD | Background delta clustering (all deltas 15-27 RGB, technically passing but perceptually flat) | gate-runner-core.js L1170-1223 (GR-51); L69-91 (BV-02); gate-runner-spec.md L132; pa-questions.md L362-377; artifact-builder-recipe.md L108-124 | **CRITICAL** (GR-51 code) | NO | GR-51 has 3 sub-checks (above25Ratio, stddev, middleHasHighDelta). Safe to increase thresholds. If changing zone background recommendations, verify new colors satisfy GR-51 DISTRIBUTION checks, not just GR-11 minimum. |
| M-15: Value Tables | SAFEGUARD | Builder choosing perceptually-invalid CSS values | MANIFEST.md L853, L1044-1045, L1089; artifact-builder-recipe.md L122 | FRAGILE ("optional" flag) | NO | Value tables marked "optional" at MANIFEST L1089 -- orchestrator might omit under token pressure. Consider promoting to REQUIRED. |
| M-16: Conviction Statement | SAFEGUARD | Missing design intent documentation for REBUILD path | gate-runner-core.js L1136-1168 (GR-50); MANIFEST.md L423, L1053-1057, L1064-1073; artifact-orchestrator.md L377-379 | FRAGILE (regex + keywords) | NO | GR-50 checks `<!-- CONVICTION:` with >=3 sentences + keywords (metaphor, arc, strategy). Changing format = update L1159 threshold. |
| M-17: TC Brief Template | SAFEGUARD | Brief structure deviating from calibrated tier format | MANIFEST.md L20, L209-217, L1006-1032; gate-runner-core.js L29-67 (BV-01), L93-102 (BV-03) | ROBUST (template) / **CRITICAL** (BV-01 regex) | NO | Tier header format must match BV-01 regexes. Headers must be: `^#+\s*Tier\s*[1234]` and `^#+\s*Content\s*Map`. |
| M-18: Worked Examples | SAFEGUARD | Agents misinterpreting abstract instructions | MANIFEST.md L905, L948 | ROBUST | NO | No programmatic checking. Safe to freely enhance. |

#### Verification Mechanisms (M-19 through M-25)

| Mechanism | Type | What it Protects | Location(s) | Fragility | In 8-Change Plan? | Must NOT Break |
|-----------|------|-----------------|-------------|-----------|-------------------|----------------|
| M-19: Programmatic Gate Verification | SAFEGUARD | Gates not executed, inconsistent results, verdict contradictions | gate-runner-core.js (entire file, 6 functions); gate-manifest.json (full); gate-runner-spec.md | **CRITICAL** | **YES** (ME-007 modifies gate code) | Maintain function boundary structure. Maintain `{gate, name, status, measured, threshold}` schema. Use `window.isRenderedElement()` helper. Use `await page.evaluate()` pattern. |
| M-20: Fresh-Eyes PA Principle | SAFEGUARD | PA auditors anchored by build intent or expected scores | pa-deployment.md L201-221; pa-guardrails.md L119-148; pa-questions.md L312-316; MANIFEST.md L322-323, L866-868 | ROBUST (structural via file split) | **YES** (ME-001 changes auditor instructions) | Safe to add to pa-questions.md Sections 1-3. DANGEROUS to add calibration data to auditor-visible sections. |
| M-21: Screenshot Pre-Capture | SAFEGUARD | Playwright contention between multiple auditor agents | MANIFEST.md L35, L324, L459-476; pa-deployment.md L139-196; EXECUTION-TRACKER L142-152 | ROBUST | **YES** (ME-006 adds validation step) | Pattern itself is structural. New viewport widths = add to MANIFEST L35 + pa-deployment.md + EXECUTION-TRACKER Phase 3A. |
| M-22: 9-Auditor Deployment | SAFEGUARD | Single-evaluator risk | pa-deployment.md L28-31, L42-52, L72-92, L106-119; pa-guardrails.md L44-54; pa-manifest.md L22-34, L40-47; MANIFEST.md L149-157 | FRAGILE (assignment table) | **YES** (ME-037+ME-051 changes question assignments) | Adding questions = update 5+ locations (pa-questions.md, pa-deployment.md L42-52, MANIFEST L149-157, pa-manifest.md, question totals in ALL locations). Cross-validation table L72-92 has domain logic. |
| M-23: REBUILD Not FIX | SAFEGUARD | Degradation from fix cycles | MANIFEST.md L40-42, L275-285, L519-521, L605; gate-manifest.json L55-59; artifact-orchestrator.md L107-115 | ROBUST | **YES** (ME-005 modifies verdict logic) | Verdict thresholds safe to modify. Keep MANIFEST L275-285 and gate-manifest.json L55-59 in sync. |
| M-24: Mode Selection by Orchestrator | SAFEGUARD | Builder receiving conflicting mode signals | MANIFEST.md L26, L344, L383-389, L886-887; artifact-orchestrator.md L297-347; EXECUTION-TRACKER L67-69 | ROBUST | NO | Builder sees ONE mode implicit in brief, not as label. |
| M-25: Honest Complexity Accounting | SAFEGUARD | Underestimating builder input complexity | MANIFEST.md L346-356, L750; artifact-orchestrator.md L147-157; artifact-builder-recipe.md L14-15 | ROBUST | NO | Update line counts if enrichment changes file sizes. MANIFEST and orchestrator copies must stay synchronized. |

### CRITICAL Fragility Items (Mechanisms That Could Break)

| Mechanism | Fragility | Reason | Which 8-Changes Touch It |
|-----------|-----------|--------|--------------------------|
| **M-04** (Context Isolation) | CRITICAL | Most fragile during enrichment. New content must verify no leaks to wrong agent. | ME-001, ME-004, ME-037+ME-051 |
| **M-05** (Tiered Brief) | CRITICAL (JS) | BV-01 regex must match tier headers. `min` values are source of truth. | None directly, but brief-facing changes must not break headers |
| **M-06** (Suppressor Mgmt) | CRITICAL (regex) | BV-04 catches "verify that", "must be" etc. All brief-facing enrichments must use recipe verbs. | All brief-facing changes (ME-004 especially) |
| **M-11** (Recipe Format) | CRITICAL (verbs) | BV-03 verb lists at L94-95. 3:1 ratio threshold. | All brief-facing changes |
| **M-13** (Binary Rules) | CRITICAL (JS) | Adding/removing gates = 5-7 coordinated updates. GR-48 arrays must match gate-manifest.json. | ME-005, ME-007 |
| **M-14** (Perception Cal) | CRITICAL (GR-51) | 3 sub-checks in GR-51. Zone background changes must satisfy DISTRIBUTION, not just minimum. | None directly |
| **M-19** (Programmatic Gate) | CRITICAL | Entire gate-runner-core.js is coordinated system. Any JS change must maintain schema. | ME-007 |

### 5 Interdependency Clusters

| Cluster | Members | Shared Code/Spec | Risk During 8-Change Plan |
|---------|---------|------------------|---------------------------|
| **Cluster 1: Brief Quality** | M-05, M-06, M-11, M-17 | gate-runner-core.js L29-120 (BV-01 through BV-04) | **LOW** -- 8 changes don't modify brief format. But ME-004 adds builder content that goes through brief = must use recipe verbs. |
| **Cluster 2: Builder Info Barrier** | M-04, M-08, M-12 | MANIFEST Appendix B exclusion table, BV-04 suppressor scan | **MEDIUM** -- ME-004 adds to builder recipe. Must avoid prohibition framing and gate thresholds. |
| **Cluster 3: Gate Verification** | M-13, M-14, M-19 | gate-runner-core.js (entire), gate-manifest.json | **HIGH** -- ME-007 modifies gate code. ME-005 modifies verdict logic. Must maintain coordinated updates across 5-7 locations. |
| **Cluster 4: PA Audit Integrity** | M-20, M-21, M-22 | pa-deployment.md, pa-guardrails.md | **HIGH** -- ME-001 changes auditor instructions. ME-006 adds screenshot validation. ME-037+ME-051 changes question assignments. Updates needed in 5+ locations per question change. |
| **Cluster 5: Routing Accuracy** | M-01, M-03, M-07, M-09 | MANIFEST Section 3 + Appendix B/D/E | **MEDIUM** -- ME-001 and ME-037+ME-051 change PA auditor instructions/assignments. Prompt templates in MANIFEST Appendix E must be updated. |

### 9-Item Pre-Flight Checklist (from File 03)

| # | Check | Relevant Changes |
|---|-------|-----------------|
| 1 | Does the enrichment touch gate-runner-core.js? If yes, verify GR-48 arrays are updated. | ME-007 (GR-44 fix) |
| 2 | Does the enrichment add brief-facing content? Verify NO checklist verbs (BV-03), NO suppressor patterns (BV-04), NO prohibition framing (M-12). | ME-004 (builder Q0) |
| 3 | Does the enrichment add auditor-facing content? Verify NO calibration data, NO tier definitions, NO build intent (fresh-eyes M-20). | ME-001 (experiential pass), ME-037+ME-051 (PA questions) |
| 4 | Does the enrichment change tier header format? Verify BV-01 regexes match (gate-runner-core.js L35-39). | None expected |
| 5 | Does the enrichment add a new file? Add to MANIFEST Section 3 + Appendix B + Appendix D. | None expected |
| 6 | Does the enrichment add a new PA question? Update pa-deployment.md assignments + MANIFEST agent roster + pa-manifest.md checklist + question totals in ALL locations. | ME-037+ME-051 (question swap) |
| 7 | Does the enrichment add a new gate? Update gate-runner-core.js + gate-manifest.json + gate-runner-spec.md + GR-48 arrays + MANIFEST Section 3. | None in 8-change plan (V3E-016/017/018 NOT included) |
| 8 | Does the enrichment modify verdict logic? Update gate-manifest.json + MANIFEST L275-285 + gate-runner-core.js verdict summary. | ME-005 (mechanical exception) |
| 9 | Does the enrichment change any threshold value? Update in ALL locations (JS code + spec.md + preconditions.md + MANIFEST quickstart). | ME-007 (GR-44 measurement change) |

### Mechanisms Affected by Each of the 8 Planned Changes

| Change | Mechanisms Touched | Risk Level |
|--------|-------------------|------------|
| **ME-001** (Experiential pass) | M-04 (context isolation -- verify no leaks), M-09 (prompt templates -- update auditor instructions), M-20 (fresh-eyes -- verify auditor only gets screenshots+questions), M-22 (9-auditor -- update assignment table if new questions) | HIGH |
| **ME-002** (Weaver priority) | M-09 (prompt templates -- update weaver template), M-23 (REBUILD not FIX -- new priority affects verdict flow) | LOW |
| **ME-004** (Builder Q0) | M-04 (context isolation -- no gate thresholds in Q0), M-06 (suppressor mgmt -- Q0 must use recipe verbs), M-09 (prompt templates -- update builder template), M-11 (recipe format -- Q0 must not be checklist format), M-12 (world-description -- Q0 must not be prohibition) | MEDIUM |
| **ME-005** (Verdict logic) | M-13 (binary rules -- update verdict logic in gate-manifest.json + MANIFEST + JS), M-23 (REBUILD not FIX -- coordinated update) | MEDIUM |
| **ME-006** (Screenshot validation) | M-21 (screenshots -- add validation step to existing protocol) | LOW |
| **ME-007** (GR-44 fix) | M-13 (binary rules -- verify GR-48 still lists GR-44), M-19 (programmatic gate -- maintain result schema + function boundaries) | MEDIUM |
| **ME-037+ME-051** (PA swap) | M-04 (context isolation -- new questions must not leak calibration data), M-09 (prompt templates -- update MANIFEST Appendix E auditor templates), M-20 (fresh-eyes -- new questions auditor-safe), M-22 (9-auditor -- update assignment table, cross-validation pairs if PA-05 related, question totals in 3+ locations) | **HIGH** |
| **ME-039** (Boilerplate) | M-03 (direct file injection -- new boilerplate content reaches builder via components.css or recipe), M-12 (world-description -- boilerplate is neutral, no framing risk) | LOW |

### Mechanisms Implying ADDITIONAL Changes Not in 8-Change Plan

| Mechanism | Implied Change | Why |
|-----------|---------------|-----|
| M-04 (Context Isolation) | MANIFEST L859-868 exclusion table may need update if experiential pass adds new data categories | ME-001 adds "experiential pass findings" -- is this a new data type that needs isolation rules? |
| M-09 (Prompt Templates) | MANIFEST Appendix E prompt templates must be updated for EVERY change touching agent instructions | All of ME-001, ME-002, ME-004, ME-037+ME-051 -- templates are the delivery mechanism for these changes. If templates are not updated, agents never receive the changes. |
| M-22 (9-Auditor) | Question totals in 3+ locations must be updated if ME-037+ME-051 changes net question count | pa-deployment.md L54, pa-manifest.md L36, MANIFEST L159 -- all must show correct count. |
| M-13 (Binary Rules) | If ME-005 adds MECHANICAL classification, a new gate or classification mechanism may be needed in gate-runner-core.js | The auto-classification of "MECHANICAL" vs "design-decision" failures needs implementation somewhere. |
| M-25 (Honest Complexity) | If enrichments increase file sizes, line count table in MANIFEST L346-356 and artifact-orchestrator.md L147-157 need updating | All changes collectively add content. Line counts drift. |
| M-15 (Value Tables) | Consider promoting from "optional" to REQUIRED at MANIFEST L1089 | Not in 8-change plan but recommended by propagation audit. |

---

## FILE 4: 04-cross-reference.md (53 findings classified)

### The 8 FIX-FAILED Items

| FF-ID | Description | Fix That Failed | In 8-Change Plan? | Notes |
|-------|-------------|-----------------|-------------------|-------|
| **FF-01** | GR-09 tolerance bands NOT functioning. Integer-only checking despite FIX-003 spec. 0.667px and 2.667px fail when they should pass. | FIX-003 | **NO** | V3E-021 covers this. Not in 8-change plan. MEDIUM severity (gate accuracy, not visual). |
| **FF-02** | GR-14 structural false positives EXPANDED. 13 false positives from nested section containers. FIX-005 only fixed between-zone, not within-zone. | FIX-005 | **NO** | V3E-020 covers this. Not in 8-change plan. HIGH severity (gate credibility). |
| **FF-03** | GR-17 density stacking MUTATED to list items. 30 li violations at 8px. FIX-006 fixed table cells but left li in strict group. | FIX-006 | **NO** | V3E-043 covers this. Not in 8-change plan. LOW severity. |
| **FF-04** | GR-44 trailing void FALSE NEGATIVE. Reports 0px when real void is ~5,500px. Measures DOM extent not visible extent. | FIX-068 | **YES** (ME-007) | THE #1 historical defect gate designed to catch, with a measurement bug. HIGH severity. |
| **FF-05** | GR-05 warm palette catches sub-perceptual tints. 4% opacity purple/blue/green flagged as REQUIRED failures. | FIX-001 | **NO** | V3E-022 covers this. Not in 8-change plan. HIGH for credibility. |
| **FF-06** | GR-06 font trinity catches never-rendered fallback fonts. 181 violations from fallback fonts that never display. | FIX-002 | **NO** | V3E-023 covers this. Not in 8-change plan. HIGH for credibility. |
| **FF-07** | MANIFEST verdict logic overly rigid. ANY identity FAIL = REBUILD, even for 15 lines of CSS fixes. | Multiple MANIFEST-EDIT fixes | **YES** (ME-005) | MEDIUM severity. Orchestrator already worked around it. |
| **FF-08** | Conviction as HTML comment, not separate file. Builder embedded in HTML instead of separate capture. | FIX-022 + FIX-079 | **NO** | LOW severity. Implementation arguably better than spec. Accept HTML comment as valid. |

**Coverage: 2 of 8 FIX-FAILED items are covered by the 8-change plan (FF-04 and FF-07). The other 6 are NOT covered.**

### The 21 NEW Items

#### Category A: Priority Inversion (4 items)

| N-ID | Description | In 8-Change Plan? |
|------|-------------|-------------------|
| N-01 | Priority inversion is pipeline-wide. Every stage prioritizes CSS compliance over usability. 4/18 REQUIRED gates are sub-perceptual. Zero gates check legibility. | **PARTIAL** (ME-002 addresses Weaver; ME-004 addresses builder; but gate runner tier restructuring NOT in plan) |
| N-02 | Zero usability gates exist. 31 gates, 0 check legibility/contrast/font size/content accessibility. | **NO** (V3E-016/017/018 add usability gates but NOT in 8-change plan) |
| N-03 | Weaver priority model ranks invisible above visible. Fix ordering: font fallbacks > tints > sub-pixel borders > illegible chart. | **YES** (ME-002) |
| N-04 | Builder self-eval has zero legibility questions. 7 about composition, 0 about readability. | **YES** (ME-004) |

#### Category B: Experiential PA Gap (5 items)

| N-ID | Description | In 8-Change Plan? |
|------|-------------|-------------------|
| N-05 | PA is analytical, never experiential. 69 analytical questions, no experiential. Chart illegibility caught by 1/9 (11%). | **YES** (ME-001) |
| N-06 | Legibility routing is SPOF. PA-02 and PA-08 both exclusively routed to Auditor B. 4% bandwidth on legibility. | **YES** (ME-001 adds universal legibility to ALL auditors) |
| N-07 | 43% experiential miss rate. 23 usability issues, PA caught 7 fully, missed 10 entirely. | **YES** (ME-001 addresses through experiential pass) |
| N-08 | Per-auditor tunnel vision on chart. 7 of 9 saw chart as "rhythm device/weight element" etc. Only B saw "text with readability problem." | **YES** (ME-001) |
| N-09 | Sub-perceptual PA questions disguised as perceptual. PA-55, PA-56, PA-69 test pipeline's model not reader experience. | **PARTIAL** (ME-037+ME-051 swaps questions but V3E-013 metadata annotation not confirmed) |

#### Category C: Screenshot/Infrastructure (4 items)

| N-ID | Description | In 8-Change Plan? |
|------|-------------|-------------------|
| N-10 | DPR screenshot bug is systemic. Same bug in BOTH pipeline PA and Phase 2. 15/15 auditors treated it as page defect. | **YES** (ME-006) |
| N-11 | No screenshot validation mechanism. No way to detect corrupted screenshots before distributing. | **YES** (ME-006) |
| N-12 | No Phase 4 fix-application protocol. Pipeline ends at verdict. 5 mechanical fixes NOT applied within run. | **NO** (V3E-031 covers this but not in 8-change plan) |
| N-13 | Context exhaustion across 3 sessions. MANIFEST estimates 80-105 min, actual ~6 hours (4x underestimate). | **NO** |

#### Category D: Gate Accuracy (3 items)

| N-ID | Description | In 8-Change Plan? |
|------|-------------|-------------------|
| N-14 | GR-21 threshold too low for COMPOSED mode. 4 distinct backgrounds threshold catches callout tints. | **NO** |
| N-15 | GR-22 flags skip-link background (accessibility element). | **NO** |
| N-16 | Viewport namespacing conflict (GR-48 vs GR-49). Duplicate gate IDs across viewports. | **NO** |

#### Category E: WCAG/Accessibility (2 items)

| N-ID | Description | In 8-Change Plan? |
|------|-------------|-------------------|
| N-17 | ARIA regression (19 -> 7 attributes). 63% regression. No fix addresses ARIA. | **NO** |
| N-18 | Zero WCAG contrast gates. Most fundamental web accessibility standard has zero coverage. | **NO** |

#### Category F: Paradigm/Process (3 items)

| N-ID | Description | In 8-Change Plan? |
|------|-------------|-------------------|
| N-19 | Complexity-quality inversion (N=4 data). Suggestive inverse relationship but confounded. | **NO** (paradigm question, not spec change) |
| N-20 | Opus vs Sonnet builder is largest unexamined confound. | **NO** (experiment question) |
| N-21 | Pipeline's 400:1 analysis-to-fix ratio. Complexity disease is self-replicating. | **NO** (process question) |

### Coverage Summary: 21 NEW Items

| Coverage Status | Count | Items |
|----------------|-------|-------|
| **YES** | 8 | N-03, N-04, N-05, N-06, N-07, N-08, N-10, N-11 |
| **PARTIAL** | 2 | N-01, N-09 |
| **NO** | 11 | N-02, N-12, N-13, N-14, N-15, N-16, N-17, N-18, N-19, N-20, N-21 |

---

## MASTER COVERAGE ANALYSIS

### What the 8-Change Plan DOES Cover

| Change | Covers These Items Well |
|--------|------------------------|
| ME-001 (Experiential pass) | V3E-001, V3E-002 (partial), N-05, N-06, N-07, N-08, E06-01, E03-06 |
| ME-002 (Weaver priority) | V3E-014, N-03 |
| ME-004 (Builder Q0) | V3E-034, V3E-035 (partial), N-04 |
| ME-005 (Verdict logic) | V3E-030, FF-07, E02-03 (partial), PF-15 (partial) |
| ME-006 (Screenshot validation) | V3E-003, V3E-040 (partial), N-10, N-11 |
| ME-007 (GR-44 fix) | V3E-019, V3E-049, FF-04 |
| ME-037+ME-051 (PA swap) | V3E-009/010 (partial), PA retirements (partial), 24 experiential questions (partial) |
| ME-039 (Boilerplate) | V3E-037, V3E-038, CSS-13 (partial) |

### What the 8-Change Plan Does NOT Cover

#### HIGH PRIORITY GAPS (items rated MUST or HIGH severity that are not covered)

| Item | Severity | Description | Why It Matters |
|------|----------|-------------|----------------|
| **V3E-016** (GR-60 WCAG contrast gate) | BLOCKING | Zero usability gates exist. A page could pass all 18 REQUIRED gates with illegible text everywhere. | THE #1 gap in gate coverage. |
| **FF-01** (GR-09 tolerance bands) | MEDIUM | Implementation gap between spec and deployed code. | Gate accuracy. |
| **FF-02** (GR-14 false positives) | HIGH | Architecturally broken for nested HTML. 13 false positives every run. | Gate credibility. |
| **FF-05** (GR-05 sub-perceptual tints) | HIGH (credibility) | Triggers REBUILD for invisible violations. | Central to priority inversion. |
| **FF-06** (GR-06 fallback fonts) | HIGH (credibility) | 181 violations from fonts nobody sees. | Central to priority inversion. |
| **N-02** (Zero usability gates) | HIGHEST | 31 gates, zero check reader experience. | Systemic blind spot. |
| **N-12** (No Phase 4 fix application) | HIGH | Pipeline produces fixes but never applies them. | Process gap. |
| **N-17** (ARIA regression) | MEDIUM | 63% regression in accessibility attributes. | Accessibility. |
| **N-18** (Zero WCAG contrast gates) | MEDIUM | Overlaps N-02. Most fundamental accessibility standard unmonitored. | Accessibility. |
| **V3E-004** (Data corruption escalation) | SIGNIFICANT | Auditors have no way to report suspected screenshot corruption. | Data quality. |
| **V3E-005** (Experiential detection thresholds) | SIGNIFICANT | No calibration framework for experiential pass findings. | Weaver needs this. |
| **V3E-015** (Experiential aggregation for Weaver) | SIGNIFICANT | Weaver must manually scan 9 Section 0 reports for convergence. | Aggregation needed. |
| **V3E-020** (GR-14 fix) | SIGNIFICANT | 13 false positives on every run. | Gate accuracy. |
| **V3E-021** (GR-09 fix) | SIGNIFICANT | Tolerance bands not functioning per FIX-003 spec. | Gate accuracy. |
| **V3E-022** (Split GR-05) | SIGNIFICANT | Sub-perceptual tints triggering REBUILD. | Priority inversion. |
| **V3E-023** (Modify GR-06) | SIGNIFICANT | 181 false violations from fallback fonts. | Priority inversion. |
| **V3E-033** (Usability circuit breaker) | SIGNIFICANT | No orchestrator scan for BLOCKING usability findings. | Priority inversion fix. |
| **V3E-039** (ARIA requirement) | SIGNIFICANT | 63% ARIA regression unaddressed. | Accessibility. |

#### The Priority Inversion Is Only PARTIALLY Fixed

The 8-change plan fixes 4 of 6 stages of the priority inversion (per V3E-047):

| Stage | Fix | In Plan? |
|-------|-----|----------|
| Builder self-eval | V3E-034 (Q0) | **YES** (ME-004) |
| Gate runner (usability gates) | V3E-016 (GR-60 WCAG) | **NO** |
| Gate runner (tier restructure) | V3E-022-027 (downgrades) | **NO** |
| PA deployment | V3E-001 (experiential pass) | **YES** (ME-001) |
| Weaver | V3E-014 (priority override) | **YES** (ME-002) |
| MANIFEST (verdict logic) | V3E-030 (mechanical exception) | **YES** (ME-005) |

**Gate runner stage (stages 2 and 3 of 6) is completely unaddressed.** No new usability gates, no gate tier restructuring, no gate severity downgrades.

### Implementation Pre-Conditions (from File 03)

These must be verified BEFORE implementing each of the 8 changes:

| Change | Pre-Conditions |
|--------|---------------|
| ME-001 | Verify experiential pass instructions don't leak calibration data (M-04). Update MANIFEST Appendix E PA auditor template (M-09). Verify auditors still only receive screenshots + questions (M-20). |
| ME-002 | Update MANIFEST Appendix E Weaver template (M-09). Verify new priority doesn't contradict MANIFEST L275-285 verdict logic (M-23). |
| ME-004 | Write Q0 using RECIPE verbs not CHECKLIST verbs (M-06, M-11). Use world-description framing (M-12). No gate thresholds in pass/fail format (M-04). Update MANIFEST Appendix E Builder template (M-09). |
| ME-005 | Update verdict logic in THREE places: gate-manifest.json L55-59 + MANIFEST L275-285 + gate-runner-core.js verdict summary (M-13). Implement auto-classification for MECHANICAL (new code in gate runner). Keep MANIFEST and gate-manifest.json in sync (M-23). |
| ME-006 | Add validation step to pa-deployment.md screenshot protocol (M-21). Add to EXECUTION-TRACKER Phase 3A (M-21). Inject animation-disabling CSS as pre-condition (V3E-040). |
| ME-007 | Maintain `{gate, name, status, measured, threshold}` result schema (M-19). Verify GR-48 REQUIRED_GATES array still includes GR-44 (M-13). Test against known HTML (M-19). |
| ME-037+ME-051 | Update pa-deployment.md L42-52 assignment table (M-22). Update MANIFEST L149-157 auditor question lists (M-22). Update pa-manifest.md checklist (M-22). Update question totals in ALL locations: pa-deployment.md L54, pa-manifest.md L36, MANIFEST L159 (M-22). Verify new questions don't include calibration data (M-20). |
| ME-039 | If adding to builder recipe: verify no gate thresholds in pass/fail format (M-04). If adding to components.css: update MANIFEST line counts (M-25). |

---

## APPENDIX A: Items That Imply Changes BEYOND the 8-Change Plan

These items from files 01-04 are not standalone enrichments but rather implications, nuances, or requirements that emerge from the analysis and affect how the 8 changes should be implemented OR suggest additional work.

| Source | Item | Type | Description | Tier |
|--------|------|------|-------------|------|
| File 01 | V3E-002 (U-01) | PRECONDITION | Universal legibility pre-check should accompany V3E-001's experiential pass. Both are needed -- V3E-001 is open-ended text reading, V3E-002 is binary "any text unreadable?" | SHOULD |
| File 01 | V3E-005 (threshold table) | PRECONDITION | Without the threshold table, the Weaver has no calibration for interpreting experiential pass findings from ME-001. | SHOULD |
| File 01 | V3E-015 (aggregation) | PRECONDITION | Without pre-aggregation, Weaver (ME-002) must manually scan 9 separate "Section 0" reports. | SHOULD |
| File 01 | V3E-040 (scroll-reveal disable) | PRECONDITION | Screenshot validation (ME-006) should be paired with scroll-reveal disabling CSS injection. Without it, validation catches the problem but doesn't prevent it. | SHOULD |
| File 03 | M-09 templates | PRECONDITION | MANIFEST Appendix E prompt templates are the delivery mechanism for ME-001, ME-002, ME-004, ME-037+ME-051. If templates not updated, agents never receive changes. | **MUST** |
| File 03 | M-22 question totals | PRECONDITION | ME-037+ME-051 must update question counts in 3+ locations. Missing ANY = inconsistency. | **MUST** |
| File 03 | M-13 coordinated update | PRECONDITION | ME-005 (verdict logic) must update in 3 coordinated locations. Missing ANY = contradiction. | **MUST** |
| File 04 | FF-01 to FF-03, FF-05, FF-06, FF-08 | CHANGE | 6 FIX-FAILED items not in the 8-change plan. Most are gate accuracy fixes (HIGH severity). | SHOULD (each) |
| File 04 | N-02 + N-18 | CHANGE | Zero usability gates. THE #1 structural blind spot. Not adding GR-60 means the priority inversion fix is incomplete at the gate layer. | MUST |
| File 02 | E08-01 (3 bg registers) | CHANGE | Value system correction: FEWER distinctions, LARGER deltas. Simplification, not addition. | SHOULD |
| File 02 | ADV-05 ("What would you REMOVE?") | CHANGE | The anti-Goodhart question. Should be added to PA question pool even if not in ME-037+ME-051 swap list. | SHOULD |
| File 02 | E03-03 (danger hierarchy) | SAFEGUARD | Recovery command danger hierarchy is a SAFETY concern for content with destructive commands. | SHOULD |

---

## APPENDIX B: Complete Statistics

### File 01 (v3-enrichments.md)
- **Total enrichments:** 52
- **BLOCKING:** 9 (V3E-001, 002, 003, 014, 016, 019, 030, 034, 047)
- **SIGNIFICANT:** 18
- **MINOR:** 25
- **Covered by 8-change plan:** 8 fully, 9 partially, 35 not covered

### File 02 (reservoir-extraction.md)
- **Total old enrichments classified:** 360
- **APPLIED (already done):** 94 (26.1%)
- **INVALIDATED (more spec = worse output):** 187 (51.9%)
- **STILL-USEFUL (pass V3 filter):** 79 (21.9%)
- **STILL-USEFUL covered by 8-change plan:** 2 fully, ~35 partially, ~42 not covered

### File 03 (anti-loss-map.md)
- **Total mechanisms:** 25
- **CRITICAL fragility:** 7 (M-04, M-05, M-06, M-11, M-13, M-14, M-19)
- **FRAGILE:** 6 (M-08, M-09, M-10, M-12, M-15, M-16)
- **ROBUST:** 12
- **Interdependency clusters:** 5
- **Pre-flight checklist items:** 9
- **Mechanisms touched by 8-change plan:** 15 of 25

### File 04 (cross-reference.md)
- **Total findings:** 53
- **ALREADY-FIXED:** 18
- **FIX-FAILED:** 8 (2 covered by plan, 6 not covered)
- **NEW:** 21 (8 covered, 2 partial, 11 not covered)
- **UNTESTABLE:** 6

### Overall 8-Change Plan Coverage

| Metric | Value |
|--------|-------|
| V3E enrichments fully covered | 8 / 52 (15%) |
| V3E enrichments partially covered | 9 / 52 (17%) |
| V3E enrichments not covered | 35 / 52 (67%) |
| FIX-FAILED items covered | 2 / 8 (25%) |
| NEW items covered | 8 / 21 (38%) |
| NEW items partially covered | 2 / 21 (10%) |
| NEW items not covered | 11 / 21 (52%) |
| BLOCKING V3E items covered | 6 / 9 (67%) |
| BLOCKING V3E items not covered | 3 / 9 (V3E-002, V3E-016, V3E-047 partial) |
| Priority inversion stages addressed | 4 / 6 (67%) |
| CRITICAL mechanisms at risk | 7 mechanisms, all have at least 1 planned change touching them or their cluster |

---

*Audit complete. 4 files analyzed. Every enrichment, mechanism, finding, pre-condition, and implementation detail extracted. The 8-change plan covers the highest-priority items (experiential pass, weaver priority, builder Q0, verdict logic, screenshot validation, GR-44 fix) but leaves significant gaps: zero usability gates (V3E-016), 6 of 8 FIX-FAILED items, the gate tier restructure, ARIA regression, and all 79 STILL-USEFUL items from the old reservoir. The most critical implementation risk is Cluster 3 (Gate Verification) and Cluster 4 (PA Audit Integrity), where multiple planned changes touch CRITICAL-fragility mechanisms requiring coordinated multi-location updates.*

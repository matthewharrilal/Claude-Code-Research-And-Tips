# Audit Data Extract -- Pre-Digested for OD-AUDIT-SYNTHESIS

**Generated:** 2026-02-08 by census-c
**Sources:** 9 primary files (OD-GRANULAR-AUDIT-RESULTS.md, FIX-STATE.md, fresh-eyes.md, contrast-accessibility.md, cross-od-consistency.md, identity-brief.md, OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md, RETROACTIVE-AUDIT-DD-001-006.md, structural-integrity.md)

---

## 1. Finding Summary

**89 total findings across 6 OD HTML explorations (OD-001 through OD-006).**

| Severity | Count | Key Examples |
|----------|-------|--------------|
| Critical | 8 | OD-004 Essence callout font FAIL (only explicit FAIL), callout labels at 1.00:1 ratio (invisible), OD-001/002 missing `<main>` landmark |
| High | 6 | 2px border epidemic (108 CSS decls, 1,619 computed instances), callout label contrast failures, OD-004 tab ARIA incomplete |
| Medium | 16 | OD-005 960px width, missing prefers-reduced-motion (OD-001/002/003), missing focus-visible (OD-001/002/005/006), no skip-to-content links |
| Low | 8 | No favicon, no ::selection, no print styles, header meta layout inconsistency |
| Notes | ~51 | Per-OD UI inconsistencies, half-baked components, comparative observations |

**Breakdown by cross-OD vs per-OD:**
- 6 systemic issues (affect all or most ODs): thin borders, callout contrast, meta contrast, favicon, skip links, print/selection/scrollbar
- 6 cross-OD inconsistencies: semantic HTML gap, code block theme, header layout, reduced-motion, focus-visible, container width
- 2 Nuclear Question contradictions resolved: OD-003 (fresh-eyes correct), OD-004 (both partially correct)

---

## 2. Fix Summary

**16/16 fixes applied. Fix #17 deferred. 2 false positives identified.**

| # | Priority | Description | Status | Agent | Notes |
|---|----------|-------------|--------|-------|-------|
| 1 | CRITICAL | OD-004 Essence font | NO FIX NEEDED | fixer-c | Font renders correctly (Instrument Serif italic). Audit finding was font-loading timing artifact -- `document.fonts.ready` needed before getComputedStyle |
| 2 | CRITICAL | OD-001/002 main landmark | DONE | fixer-a | `<main id="main-content" role="main">` wrapping content |
| 3 | CRITICAL | OD-001/002 heading hierarchy | DONE | fixer-a | 001: 4 div to h2. 002: 4 div to h2 + 9 div to h3 |
| 4 | HIGH | ALL callout label contrast | ALL DONE | all fixers | Consolidated to var(--color-text) #1A1A1A in all 6 files |
| 5 | HIGH | ALL 2px to 3px structural borders | ALL DONE | all fixers | 3-category system applied: Cat 1 upgraded, Cat 2/3 left |
| 6 | HIGH | OD-004 tab ARIA | DONE | fixer-c | Full ARIA: button elements, aria-controls/selected, tabpanel, keyboard nav |
| 7 | HIGH | OD-004 dead zone removal | NO FIX NEEDED | fixer-c | No dead zone exists -- scroll-animation artifact, not structural gap |
| 8 | HIGH | OD-003 remove accent-tan | DONE | fixer-b | var + 2 refs removed, 0 instances remain |
| 9 | MEDIUM | OD-005 max-width 960 to 860 | DONE | fixer-d | 2 locations, grid verified at 860px |
| 10 | MEDIUM | OD-001/002/003 prefers-reduced-motion | ALL DONE | fixer-a/b | Universal PRM block in all 3 files |
| 11 | MEDIUM | OD-001/002/005/006 focus-visible | ALL DONE | fixer-a/d | *:focus-visible 3px solid primary |
| 12 | MEDIUM | ALL skip-to-content link | ALL DONE | all fixers | skip-link + id=main-content in all 6 files |
| 13 | MEDIUM | ALL inline code font fix | ALL DONE | all fixers | code { font-family: var(--font-mono); font-size: 0.9em } |
| 14 | LOW | ALL favicon | ALL DONE | all fixers | SVG data URI red K |
| 15 | LOW | ALL ::selection styling | ALL DONE | all fixers | primary bg, bg text |
| 16 | LOW | ALL @media print | ALL DONE | all fixers | hide nav/skip, show URLs |
| 17 | LOW | Header meta layout | DEFERRED | -- | Out of scope (subjective) |

**False positives discovered during fix execution:**
1. **Fix #1 (Essence Font):** Audit reported OD-004 Essence callout used Inter/normal instead of Instrument Serif italic. Fixer-C used Playwright with `document.fonts.ready` before getComputedStyle and confirmed the font IS Instrument Serif italic. The audit agent measured before Google Fonts async load completed, getting fallback font values.
2. **Fix #7 (Dead Zone):** Audit reported full-viewport dead zone at ~6881px in OD-004. Fixer-C measured element positions and found content exists at that location (first article.content-block in speculative stratum starts at y=6874). The "dead zone" was caused by scroll-driven animation `.reveal` elements at opacity:0 until viewport triggers them. Fallbacks already handle PRM/unsupported browsers.

**Commit:** f5357a7 -- 6 files, 447 insertions, 136 deletions

---

## 3. Soul Compliance

**0 violations across 3,479+ DOM elements tested.**

| Soul Rule | Check | Result |
|-----------|-------|--------|
| border-radius: 0 | All elements + pseudo-elements across all 6 ODs | PASS (0 violations) |
| box-shadow: none | All elements across all 6 ODs | PASS (0 violations) |
| filter: drop-shadow | All elements across all 6 ODs | PASS (0 violations) |
| Locked palette compliance | Per-OD checks | OD-004 cleanest (13 colors, all on-palette). OD-003 worst (off-palette #B8A080 accent-tan -- fixed in Fix #8) |

**Post-fix soul verification (from programmatic verification):**
- 60 random elements spot-checked across all 6 files
- 0 borderRadius != 0px
- 0 boxShadow != none
- Soul compliance maintained at 100% through all 16 fixes

**Locked token diff (from cross-od-consistency.md):**
- 12/12 locked tokens IDENTICAL across all 6 ODs (--color-primary, --color-background, --color-text, --color-text-secondary, --color-border, --color-border-subtle, --font-display, --font-body, --font-mono, --border-radius, --box-shadow, --border-left-width)
- 0 critical divergences, 4 high divergences (OD-006 type scale + space-24 inconsistency), 3 notes

---

## 4. 3-Quality-Dialect

Fresh-eyes (F-E-004 and Section 9F) identified three quality tiers:

| Dialect | ODs | Characteristics | Assessment |
|---------|-----|-----------------|------------|
| **A: Polished** | OD-001, OD-002 | Dark code blocks, v2 enrichments (OD-001: scroll witness, solid offsets, enrichment cards), full-bleed header with dark bg | Most polished, feels like v2 products |
| **B: Functional** | OD-003, OD-004, OD-005 | Lighter code blocks (OD-003), more thin borders, simpler headers, wider range of 2px borders | Functional but less refined, feels like v1 products |
| **C: Editorial** | OD-006 | No code blocks, meta-documentary style, heaviest typography, most editorial, deliberately different | Unique as synthesis page, crown jewel |

**Key insight (from retrospective):** The dialect gap is a TEMPORAL ARTIFACT of build sequence, not a design inconsistency. OD-001/002 built first with deep iteration but before semantic HTML conventions. OD-003-006 built after conventions established but with less polish iteration.

**Per-OD quality ranking (from audit results):**

| Rank | OD | Soul | Craft | Accessibility | Identity | Overall |
|------|-----|------|-------|---------------|----------|---------|
| 1 | OD-006 | 5/5 | HIGHEST | 4 failures | STRONGEST | STRONGEST |
| 2 | OD-005 | 5/5 | HIGH | 8 failures | STRONG | STRONG |
| 3 | OD-001 | 5/5 | HIGH | 5 failures | STRONG | STRONG |
| 4 | OD-004 | 4/5 (Essence font -- later disproved) | HIGH | 5 failures | STRONGEST concept | STRONG |
| 5 | OD-002 | 5/5 | MEDIUM | 7 failures | WEAK | NEEDS ENRICHMENT |
| 6 | OD-003 | 5/5 | LOW | 6 failures | ADEQUATE | NEEDS MOST WORK |

---

## 5. F-E Findings (Fresh Eyes)

5 cross-OD findings from the Fresh-Eyes adversarial auditor (no builder context, identity knowledge only):

| ID | Severity | Finding | Details |
|----|----------|---------|---------|
| F-E-001 | HIGH | Rule 5 violated across all 6 ODs -- thin borders everywhere | 108 thin-border CSS declarations (37 x 1px + 71 x 2px). OD-003 worst: 661 computed instances. Borders "whisper when they should speak." |
| F-E-002 | MEDIUM | OD-005 uses wrong page container width | max-width: 960px vs spec-required 860px. OD-005 noticeably wider than other 5 ODs at 1440px. |
| F-E-003 | HIGH | OD-004 has full-viewport dead zone at mid-scroll | At scrollY ~6881px, completely blank viewport. Later disproved by fixer-c (scroll-animation artifact, not structural gap). |
| F-E-004 | LOW-MEDIUM | Header meta layout inconsistency across ODs | 3 different layouts: Format A (OD-001/002 stacked), Format B (OD-003/005 horizontal inline), Format C (OD-004 vertical stacked). OD-006 minimal. |
| F-E-005 | LOW | Off-palette colors in code blocks -- acceptable exception or palette leak? | VS Code syntax highlighting colors (#6A9955, #C586C0, #CE9178, etc.) plus dark backgrounds (#1E1E1E). Code blocks recognized as "dark zone" exception but undeclared in identity doc. |

**Ship verdicts from fresh-eyes:**
- OD-001: YES (with note about research enrichment cards feeling like appendix)
- OD-002: YES
- OD-003: CONDITIONAL NO (worst border inconsistency + monotonous islands)
- OD-004: NO (dead zone blocker -- later disproved)
- OD-005: CONDITIONAL YES (960px width should be corrected)
- OD-006: YES (crown jewel, most memorable of all 6)

---

## 6. CA Findings (Contrast/Accessibility)

**Total contrast failures: 35 across all 6 ODs (5+7+6+5+8+4)**

### Systemic CA Findings

| ID | Severity | Finding | Details |
|----|----------|---------|---------|
| CA-001 | HIGH | Callout labels below WCAG AA (ALL 6 ODs) | Accent colors as text on similar-luminance backgrounds. Worst: 1.00:1 ratio (invisible) in OD-001/002/005 where label is accent-on-accent. Fixed by Fix #4. |
| CA-002 | MEDIUM | Exploration meta values below WCAG AA (ALL 6 ODs) | --color-primary (#E83025) at 10px bold on white = 4.30:1 (needs 4.5:1). Misses by 0.20. |
| CA-003 | MEDIUM | No focus-visible styles (4/6 ODs) | OD-001, OD-002, OD-005, OD-006 missing. Fixed by Fix #11. |
| CA-004 | MEDIUM | No prefers-reduced-motion (2-3/6 ODs) | OD-001 worst: 415 animated elements with no reduced-motion. OD-002 also missing. Fixed by Fix #10. |
| CA-005 | LOW-MEDIUM | No skip links (5/6 ODs) | Only OD-005 had skip link (but with low contrast 4.30:1). Fixed by Fix #12. |

### Per-OD Contrast Failures

| OD | Failures | Critical (<=2:1) | Details |
|----|----------|------------------|---------|
| OD-001 | 5 | 3 | Info/Tip/Gotcha labels at 1.00:1 (invisible) |
| OD-002 | 7 | 2 | Essence callout purple bg, code line numbers at 2.24:1 |
| OD-003 | 6 | 0 | Prerequisites label, troubleshoot summary, checkmarks |
| OD-004 | 5 | 0 | Essence label, troubleshoot summary, verification checkmarks |
| OD-005 | 8 (most) | 2 | Breadcrumb separator 1.39:1, checkpoint label 1.00:1, code line numbers |
| OD-006 | 4 (fewest) | 1 | Certainty badge icon 1.00:1 |

### Accessibility Feature Matrix

| Feature | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|---------|--------|--------|--------|--------|--------|--------|
| prefers-reduced-motion | MISSING | MISSING | Unclear | YES | YES | YES |
| :focus-visible | MISSING | MISSING | YES | YES | MISSING | MISSING |
| Skip link | MISSING | MISSING | MISSING | MISSING | Present (low contrast) | MISSING |
| `<main>` landmark | NO | NO | YES | YES | YES | YES |
| `<article>` elements | 0 | 0 | 6 | 11 | 0 | 0 |
| ARIA sections | 0 | 0 | 2 | 6 | 8 | 6 |
| `<details>` | 0 | 0 | 6 | 1 | 0 | 1 |
| Color-only info | PASS | PASS | PASS | PASS | PASS | PASS |

**Most accessible:** OD-003 (best semantic HTML), OD-005 (best landmark/ARIA coverage)
**Least accessible:** OD-002 (zero ARIA, no main, flat headings), OD-001 (no main, flat headings)

---

## 7. 89-to-17 Prioritization Mapping

The audit produced 89 findings. The cross-od-consistency agent (Phase C) synthesized these into 17 fix items across 4 priority tiers:

### How 89 Became 17

1. **Deduplication:** Many findings were the same issue reported by multiple agents (e.g., 2px borders flagged by 10+ agents -> 1 fix item)
2. **Systemic grouping:** Per-OD instances of the same issue grouped into "ALL 6" fix items (e.g., callout contrast in each OD -> 1 systemic fix)
3. **Cross-reference weighting:** Weaver's 18 cross-references confirmed which findings were real vs isolated observations
4. **Priority tiering:** Critical (must fix before production) -> High (quality bar) -> Medium (consistency) -> Low (polish)

### Mapping Table

| Fix # | Priority | Composed From (agent sources) |
|-------|----------|-------------------------------|
| 1 | CRITICAL | Visual-004 + Systematic-004 + Consistency: OD-004 Essence font |
| 2 | CRITICAL | Structural (STR-001): OD-001/002 missing main |
| 3 | CRITICAL | Structural (STR-002): OD-001/002 flat headings |
| 4 | HIGH | Contrast (CA-001) + all systematic agents: callout label contrast |
| 5 | HIGH | F-E-001 + all visual + all systematic + Weaver XR-3: 2px borders |
| 6 | HIGH | Structural (STR-003) + Contrast: OD-004 tab ARIA |
| 7 | HIGH | F-E-003 + Visual-004: OD-004 dead zone |
| 8 | HIGH | F-E-005 + Research-ref + Consistency: OD-003 accent-tan |
| 9 | MEDIUM | F-E-002 + Visual-005 + Consistency: OD-005 width |
| 10 | MEDIUM | Contrast (CA-004): prefers-reduced-motion |
| 11 | MEDIUM | Contrast (CA-003): focus-visible |
| 12 | MEDIUM | Structural (STR-006) + Contrast (CA-005): skip-to-content |
| 13 | MEDIUM | Systematic agents: inline code font |
| 14 | LOW | Structural: favicon |
| 15 | LOW | Structural (STR-008): ::selection |
| 16 | LOW | Structural (STR-009): print styles |
| 17 | LOW | F-E-004: header meta layout (DEFERRED) |

---

## 8. Post-Fix Scores

### Programmatic Verification Results
- **187 tests, 187 PASS, 0 FAIL**
- Zero adversarial contradictions
- All fixes confirmed by inversion test ("if this fix had NOT been applied, would I notice?")

### Visual Verification Results
- **12 screenshots (6 files x 2 viewports: 1440px and 768px), ALL PASS**
- Zero visual regressions detected
- Soul compliance maintained: 0 violations across all 6 files post-fix

### Key Post-Fix Verifications
| Fix | Verification Method | Result |
|-----|---------------------|--------|
| Fix #1 (Essence font) | `document.fonts.ready` + getComputedStyle | CONFIRMED false positive -- Instrument Serif italic present |
| Fix #4 (callout labels) | 47 labels checked, all rgb(26,26,26) | ALL PASS |
| Fix #5 (borders) | 24 selectors checked, 19 applicable | ALL PASS (5 N/A: intentionally borderless code blocks) |
| Fix #6 (tab ARIA) | 3 tabs, 3 panels, matching IDs | FULLY VERIFIED |
| Fix #7 (dead zone) | DOM position inspection at y=6881 | NO dead zone -- content exists |
| Fix #8 (accent-tan) | Zero instances of rgb(184,160,128) | CONFIRMED removed |
| Soul spot check | 60 random elements across all 6 | 0 borderRadius != 0px, 0 boxShadow != none |

---

## 9. Methodology

### Team Structure
- **17 agents total:** Traverser, 3 Visual-First, Fresh-Eyes, 3 Systematic, Structural, Contrast, Content, Comparative, Research-Ref, Weaver, Consistency, Synthesizer
- **4-phase wave execution:**
  - Phase A: Identity Loading (Traverser produces identity-brief.md)
  - Wave 1: Visual-First audits (3 visual agents + fresh-eyes, parallel)
  - Wave 2: Programmatic audits (3 systematic + structural + contrast + content + comparative, parallel)
  - Phase C: Cross-OD Consistency (token diff + squint test + contradiction resolution)
  - Phase D: Synthesis (final report compilation)
- **Wall time:** ~45 minutes, single session, no context compaction
- **Lead context usage:** 77% (154K/200K tokens)

### Fix Execution Team
- **7 agents:** 4 fixers + 2 verifiers + weaver
- **Per-file ownership:** fixer-a (OD-001/002), fixer-b (OD-003), fixer-c (OD-004), fixer-d (OD-005/006)
- **Sequential verification:** programmatic first (187 tests), then visual (12 screenshots)
- **Wall time:** ~25 minutes

### Key Methodological Features
1. **Wave model:** Visual before programmatic prevents Playwright contention; visual agents PRIME systematic agents with where to look
2. **Fresh-eyes constraint:** Full identity knowledge but zero builder justifications -- produces genuine epistemic separation
3. **Weaver cross-referencing:** 18 entries tracking multi-agent agreement, enabling confidence-weighted findings
4. **Adversarial debates:** ~40 documented across all agents. Most verdicts were IMPROVE (hedging), not VALIDATED or REJECT
5. **Nuclear Question:** "If this OD were the ONLY page a user ever saw -- would they understand the identity?" Split assessment: insider test (visual auditors) vs outsider test (fresh-eyes)
6. **Border 3-category system:** All 4 fixers independently applied same classification: Cat 1 (structural frames) upgraded 2px to 3px, Cat 2 (table/chart separators) left at 2px, Cat 3 (micro-elements) left at 2px

---

## 10. Per-OD Audit Summary

### Systemic Findings (affect all/most ODs)
1. **#1 Systemic: 2px border epidemic** -- 108 CSS declarations, 1,619 computed instances across all 6 ODs. OD-003 worst (661). Fixed by upgrading Cat 1 borders to 3px.
2. **Callout label contrast** -- ALL 6 ODs failed WCAG AA. Worst: 1.00:1 (invisible). Fixed to #1A1A1A.
3. **Meta value contrast** -- ALL 6 ODs at 4.30:1 (needs 4.5:1). Deficit of 0.20.
4. **Missing skip-to-content** -- 5/6 ODs. Fixed.
5. **Off-palette colors** -- OD-001/002/003 had off-palette colors (#808080 table borders, #B8A080 accent-tan, callout tints). OD-004 cleanest.
6. **Inline code font fallback** -- Bare `<code>` elements fell back to generic monospace. Fixed.

### Per-File Summary

| OD | Body Height | Elements | Squint Test | Unique Defects | Nuclear Q |
|----|------------|----------|-------------|----------------|-----------|
| OD-001 | 9,769px | 525 | 8/8 PASS | None critical | PASS |
| OD-002 | 6,458px | 415 | 8/8 PASS | Zero ARIA, fewest tokens | CONCERN |
| OD-003 | 19,829px | 668 | 6/8 (2 CONCERN) | Off-palette color, most thin borders | PARTIAL PASS |
| OD-004 | 13,762px | 367 | 8/8 PASS | Essence font (false positive) + dead zone (false positive) | PARTIAL PASS |
| OD-005 | 19,247px | 1018 | 8/8 PASS | 960px width (fixed) | PASS |
| OD-006 | 15,238px | 486 | 7/7 PASS | Type scale divergence (3rem vs 2.5rem) | STRONG PASS (unanimous) |

### DD Ancestor Fidelity (from comparative-reference.md)
- **ZERO token drift** across all 6 ODs relative to DD ancestors
- All 6 DD patterns faithfully inherited and evolved:
  - DD-001 PULSE -> OD-001 Q&A alternation (EVOLVED)
  - DD-002 CRESCENDO -> OD-002 narrative arc (FAITHFUL)
  - DD-003 ISLANDS -> OD-003 task clusters (EVOLVED)
  - DD-004 GEOLOGICAL -> OD-004 confidence strata (CREATIVE REINTERPRETATION)
  - DD-005 TIDAL -> OD-005 hub-spoke (EVOLVED)
  - DD-006 FRACTAL -> OD-006 meta-synthesis (DEFINITIVE)

### Content Authenticity
- Zero placeholder content, zero lorem ipsum across all 6 ODs
- 5 example.com instances (OD-003/004) -- legitimate API documentation
- The Unhurried Editor voice maintained consistently
- Each OD uses genuinely different technical content

---

## 11. Scratchpad File Index

28 files in `_od-audit-scratchpad/` (~528KB total):

| File | Agent | Lines | Content |
|------|-------|-------|---------|
| identity-brief.md | Traverser | 522 | 11 sections, 55 EXT-* citations, 6 constraint tables, locked palette/type scale/soul checklist |
| visual-audit-001.md | Visual-First-A | 283 | OD-001 visual sweep, 7 debates, Nuclear Q PASS |
| visual-audit-002.md | Visual-First-A | 331 | OD-002 visual sweep, 6 debates, Nuclear Q CONCERN |
| visual-audit-003.md | Visual-First-B | 294 | OD-003 quantitative + visual, 4 debates, Nuclear Q PASS |
| visual-audit-004.md | Visual-First-B | 380 | OD-004 quantitative + visual, 5 debates, Nuclear Q PASS (1 MAJOR) |
| visual-audit-005.md | Visual-First-C | 243 | OD-005 visual sweep, 10 proportional checks, Nuclear Q PASS |
| visual-audit-006.md | Visual-First-C | 294 | OD-006 visual sweep, 10 proportional checks, Nuclear Q PASS |
| fresh-eyes.md | Fresh-Eyes | 324 | All 6 ODs, 5 cross-OD findings (F-E-001 to F-E-005), 3-dialect identification |
| systematic-audit-001.md | Systematic-A | 348 | OD-001 programmatic, 5 issue categories |
| systematic-audit-002.md | Systematic-A | 409 | OD-002 programmatic, 5 issue categories |
| systematic-audit-003.md | Systematic-B | 453 | OD-003 programmatic, 4 minor improvements |
| systematic-audit-004.md | Systematic-B | 481 | OD-004 programmatic, 1 MAJOR + 3 minor |
| systematic-audit-005.md | Systematic-C | 452 | OD-005 programmatic, 0 Critical, 1 High, 3 Medium |
| systematic-audit-006.md | Systematic-C | 464 | OD-006 programmatic, 0 Critical, 1 High, 2 Medium |
| structural-integrity.md | Structural | 403 | All 6 semantic HTML + ARIA audit, 10 findings (3C/2H/2M/3L) |
| contrast-accessibility.md | Contrast | 361 | All 6 WCAG contrast + accessibility, 35 failures, 5 systemic findings (CA-001 to CA-005) |
| content-authenticity.md | Content | 306 | All 6 content verification, 0 placeholders, 0 lorem ipsum |
| comparative-reference.md | Comparative | 313 | All 6 vs DD ancestors, 0 token drift |
| research-refinement.md | Research-Ref | 395 | 55 EXT-* citations, 7 spirit violations, 7 raw directives |
| cross-od-consistency.md | Consistency | 607 | Token diff (12/12 locked PASS), squint test (all PASS), 17 fix recs |
| weaver-tracker.md | Weaver | 179 | 18 cross-references, agent completion status |
| AUDIT-STATE.md | Weaver | 25 | Phase tracking (all phases complete) |
| fix-report-fixer-a.md | Fixer-A | -- | OD-001/002 fixes: 10 applied, 0 soul violations |
| fix-report-fixer-b.md | Fixer-B | -- | OD-003 fixes: 9 applied, 0 soul violations |
| fix-report-fixer-c.md | Fixer-C | -- | OD-004 fixes: 7 applied + 2 NO FIX NEEDED, 0 soul violations |
| fix-report-fixer-d.md | Fixer-D | -- | OD-005/006 fixes: 11 fix types, 0 soul violations |
| fix-verification-programmatic.md | Verifier-Prog | -- | 187/187 PASS, 0 FAIL |
| fix-verification-visual.md | Verifier-Vis | -- | 12 screenshots, ALL PASS, 0 regressions |
| FIX-STATE.md | Weaver | 89 | Fix execution tracking, final status COMPLETE |

---

## 12. Cross-Stage Audit References (Dark Matter)

**Source: RETROACTIVE-AUDIT-DD-001-006.md (929 lines)**

This document bridges the DD audit stage to OD audit stage. Key cross-stage data:

### DD-to-OD Audit Evolution
- The retroactive audit checked 128 applicable research findings across all 6 DD explorations (48 from R-3, 5 from R-1, 6 from R-2, 43 from R-4, 12 from R-5, 14 anti-patterns)
- **Average DD research application rate: 76%** (DD-001: 70%, DD-002: 80%, DD-003: 56%, DD-004: 85%, DD-005: 83%, DD-006: 88%)
- The OD granular audit inherited and extended this coverage -- checking not just research application but also soul compliance, density pattern fidelity, accessibility, and content authenticity

### DD Findings That Carried Into OD
1. **DD-001 Traffic-Light violation (green Tip adjacent to red Gotcha)** -- This anti-pattern check was applied in OD audit (all 6 ODs passed)
2. **DD-003 weakest research application (56%)** -- OD-003 independently scored as "NEEDS MOST WORK" in OD audit, confirming the DD-003 weakness carried forward
3. **DD-006 strongest (88% + exemplary R3-023 fractal)** -- OD-006 independently scored as STRONGEST in OD audit, confirming DD-006 excellence carried forward
4. **DD-004 geological model (85%, 3 EXEMPLARY ratings)** -- OD-004 identified as "strongest conceptual identity" in OD audit

### Perceptual Audit Scores (DD Stage)
| DD | Avg Audit Score | Soul Alignment | Decision |
|----|-----------------|----------------|----------|
| DD-001 | 7.36/10 | 5/6 (traffic-light) | DOCUMENT |
| DD-002 | 8.57/10 | 6/6 | INCLUDE |
| DD-003 | 7.86/10 | 6/6 | DOCUMENT |
| DD-004 | 8.43/10 | 6/6 | INCLUDE |
| DD-005 | 8.50/10 | 6/6 | INCLUDE |
| DD-006 | 8.64/10 | 6/6 | INCLUDE (BEST) |

### Cross-Stage Quality Correlation
The DD quality ranking (DD-006 > DD-002 > DD-005 > DD-004 > DD-003 = DD-001) correlates with but does not determine OD quality ranking (OD-006 > OD-005 > OD-001 > OD-004 > OD-002 > OD-003). Key observations:
- DD-006/OD-006 top in both stages -- synthesis excels regardless of stage
- DD-001 was DOCUMENT but OD-001 ranked #3 -- deep iteration overcame weak DD base
- DD-003 was DOCUMENT and OD-003 ranked last -- weakness persisted across stages
- DD-002 was INCLUDE but OD-002 ranked #5 -- insufficient enrichment in OD stage

---

## 13. Structural Integrity (Dark Matter)

**Source: _od-audit-scratchpad/structural-integrity.md (403 lines)**

Found at expected location within the scratchpad directory. Contains the full structural audit by the STRUCTURAL agent.

### OD-Relevant Structural Findings

**10 findings total (3 Critical, 2 High, 2 Medium, 3 Low):**

| ID | Severity | Finding | ODs Affected |
|----|----------|---------|--------------|
| STR-001 | CRITICAL | No `<main>` landmark | OD-001, OD-002 |
| STR-002 | CRITICAL | Flat heading hierarchy (only H1) | OD-001, OD-002 |
| STR-003 | CRITICAL | OD-004 tab ARIA incomplete | OD-004 |
| STR-004 | HIGH | Zero ARIA attributes | OD-002 |
| STR-005 | HIGH | Inconsistent landmark patterns | OD-001/002 vs OD-003-006 |
| STR-006 | MEDIUM | No skip-to-content on any OD | All 6 |
| STR-007 | MEDIUM | OD-003 code blocks not focusable | OD-003 |
| STR-008 | LOW | No ::selection styling | All 6 |
| STR-009 | LOW | No @media print styles | All 6 |
| STR-010 | LOW | No custom scrollbar | All 6 |

### Structural Maturity Ranking
| Rank | OD | Strengths |
|------|-----|-----------|
| 1 | OD-005 | Most complete landmarks (main, nav x6, footer, aside x6), 20 aria-labels, 26 headings, 33 focusable elements |
| 2 | OD-003 | Best heading hierarchy (10 headings), 6 articles, 8 aria-labelledby, 6 details |
| 3 | OD-004 | 15 aria-labels, 11 articles, 18 headings, tab interface (ARIA incomplete pre-fix) |
| 4 | OD-006 | Good landmarks (main, nav, footer), 6 aria-labelledby, 12 headings |
| 5 | OD-001 | Basic nav + 2 details elements, but no main, flat headings |
| 6 | OD-002 | Zero ARIA, no main, flat headings, no nav, no details |

### Build-Order Insight
STR-005 confirms the 3-dialect observation: OD-001/002 were built BEFORE the team established landmark/semantic HTML conventions. OD-003-006 were built AFTER. This is a process artifact, not a design choice.

---

## COMPACTION-SAFE SUMMARY

- **File:** extract-audit-data.md
- **Purpose:** Pre-digested audit data for OD-AUDIT-SYNTHESIS downstream consumption
- **Findings:** 89 total (8C/6H/16M/8L/~51N)
- **Fixes:** 16/16 applied + Fix #17 deferred + 2 false positives (Fix #1 font-loading, Fix #7 scroll-animation)
- **Soul compliance:** 0 violations / 3,479+ elements
- **F-E findings:** 5 (F-E-001 through F-E-005)
- **CA findings:** 5 systemic (CA-001 through CA-005), 35 contrast failures total
- **3 dialects:** Polished (OD-001/002), Functional (OD-003/004/005), Editorial (OD-006)
- **Post-fix:** 187 programmatic PASS + 12 visual screenshots PASS
- **Cross-stage:** DD quality correlates with OD quality; DD-003/OD-003 weakest, DD-006/OD-006 strongest
- **Structural:** 10 findings, OD-005 most complete, OD-002 least accessible
- **Scratchpad:** 28 files
- **Status:** COMPLETE

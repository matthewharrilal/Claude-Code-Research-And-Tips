# OD Audit Synthesis

**Synthesized:** 2026-02-08 by chain-c (provenance-fix team)
**Scope:** Complete audit record for 6 OD HTML explorations (OD-001 through OD-006)
**Pipeline Position:** Stage 3 (Organization-OD) -- documents the quality gate between OD creation and AD phase

---

## 1. Executive Summary

The OD Granular Adversarial Audit examined all 6 Organization-Density explorations through multi-agent visual, programmatic, and adversarial review. The audit produced **89 total findings** across 5 severity tiers.

**Key outcomes:**
- **16 of 16 actionable fixes applied** successfully (commit f5357a7)
- **2 false positives disproved** via Playwright investigation (Essence font timing, dead zone scroll artifact)
- **3 quality dialects identified** across the 6 ODs (Polished, Functional, Editorial)
- **0 soul violations** across 3,479+ DOM elements tested
- Fix #17 (header meta layout) deferred as subjective/out-of-scope
- Post-fix verification: 187 programmatic tests PASS + 12 visual screenshots PASS

The core design soul -- sharp edges, flat surfaces, serif/sans hierarchy, callout family DNA, square markers -- is intact across all 6 files with zero locked token divergences.

---

## 2. Audit Metadata

| Property | Value |
|----------|-------|
| **Date** | 2026-02-07 |
| **Audit Type** | Multi-agent adversarial visual + programmatic |
| **Agent Count** | 17 (audit phase) + 7 (fix execution phase) |
| **Files Audited** | 6 OD HTML explorations (OD-001 through OD-006) |
| **Wall Time (audit)** | ~45 minutes, single session, no context compaction |
| **Wall Time (fix)** | ~25 minutes |
| **Lead Context Usage** | 77% (154K/200K tokens) |
| **Scratchpad Output** | 29 files, ~528KB total |
| **Source Data** | 22 audit scratchpad files + 18 weaver cross-references |

### Agent Roster (Audit Phase)

| Phase | Agents | Role |
|-------|--------|------|
| Phase A: Identity Loading | Traverser | Produce identity-brief.md (522 lines, 55 EXT-* citations) |
| Wave 1: Visual-First | Visual-First-A, Visual-First-B, Visual-First-C, Fresh-Eyes | Screenshot-based visual sweep of all 6 ODs |
| Wave 2: Programmatic | Systematic-A/B/C, Structural, Contrast, Content, Comparative, Research-Ref | DOM evaluation, ARIA checks, color contrast, content verification |
| Phase C: Cross-OD | Consistency, Weaver | Token diff, squint test, contradiction resolution, cross-references |
| Phase D: Synthesis | Synthesizer | Final report compilation |

### Wave Execution Model

```
Phase A: Identity Loading (Traverser)
    |
    v
Wave 1: Visual-First (4 agents, parallel)
    |  Visual agents PRIME systematic agents with where to look
    v
Wave 2: Programmatic (8 agents, parallel)
    |
    v
Phase C: Cross-OD Consistency + Weaver
    |
    v
Phase D: Synthesis
```

Sequential gates between waves; parallel agents within each wave.

---

## 3. Finding Summary Table

| Severity | Count | Key Examples |
|----------|-------|--------------|
| Critical | 8 | OD-004 Essence callout font FAIL (only explicit FAIL), callout labels at 1.00:1 ratio (invisible), OD-001/002 missing `<main>` landmark |
| High | 6 | 2px border epidemic (108 CSS decls, 1,619 computed instances), callout label contrast failures, OD-004 tab ARIA incomplete |
| Medium | 16 | OD-005 960px width, missing prefers-reduced-motion (OD-001/002/003), missing focus-visible (OD-001/002/005/006), no skip-to-content links |
| Low | 8 | No favicon, no ::selection, no print styles, header meta layout inconsistency |
| Notes | ~51 | Per-OD UI inconsistencies, half-baked components, comparative observations |
| **Total** | **89** | |

### Breakdown by Scope

- **6 systemic issues** (affect all or most ODs): thin borders, callout contrast, meta contrast, favicon, skip links, print/selection/scrollbar
- **6 cross-OD inconsistencies**: semantic HTML gap, code block theme, header layout, reduced-motion, focus-visible, container width
- **2 Nuclear Question contradictions** resolved: OD-003 (fresh-eyes correct), OD-004 (both partially correct)

---

## 4. 89-to-17 Prioritization Mapping

### How 89 Became 17

The cross-od-consistency agent (Phase C) synthesized 89 raw findings into 17 actionable fix items through four mechanisms:

1. **Deduplication:** Many findings were the same issue reported by multiple agents (e.g., 2px borders flagged by 10+ agents consolidated into 1 fix item)
2. **Systemic grouping:** Per-OD instances of the same issue grouped into "ALL 6" fix items (e.g., callout contrast in each OD became 1 systemic fix)
3. **Cross-reference weighting:** Weaver's 18 cross-references confirmed which findings were real vs isolated observations
4. **Priority tiering:** Critical (must fix before production) -> High (quality bar) -> Medium (consistency) -> Low (polish)

### Mapping Table

| Fix # | Priority | Composed From (Agent Sources) | Target |
|-------|----------|-------------------------------|--------|
| 1 | CRITICAL | Visual-004 + Systematic-004 + Consistency | OD-004 Essence font |
| 2 | CRITICAL | Structural (STR-001) | OD-001/002 missing `<main>` |
| 3 | CRITICAL | Structural (STR-002) | OD-001/002 flat heading hierarchy |
| 4 | HIGH | Contrast (CA-001) + all systematic agents | ALL callout label contrast |
| 5 | HIGH | F-E-001 + all visual + all systematic + Weaver XR-3 | ALL 2px to 3px structural borders |
| 6 | HIGH | Structural (STR-003) + Contrast | OD-004 tab ARIA |
| 7 | HIGH | F-E-003 + Visual-004 | OD-004 dead zone |
| 8 | HIGH | F-E-005 + Research-Ref + Consistency | OD-003 accent-tan removal |
| 9 | MEDIUM | F-E-002 + Visual-005 + Consistency | OD-005 max-width 960px to 860px |
| 10 | MEDIUM | Contrast (CA-004) | OD-001/002/003 prefers-reduced-motion |
| 11 | MEDIUM | Contrast (CA-003) | OD-001/002/005/006 focus-visible |
| 12 | MEDIUM | Structural (STR-006) + Contrast (CA-005) | ALL skip-to-content link |
| 13 | MEDIUM | Systematic agents | ALL inline code font fix |
| 14 | LOW | Structural | ALL favicon |
| 15 | LOW | Structural (STR-008) | ALL ::selection styling |
| 16 | LOW | Structural (STR-009) | ALL @media print |
| 17 | LOW | F-E-004 | Header meta layout (DEFERRED) |

---

## 5. Fix Execution Summary

**16/16 fixes applied. Fix #17 deferred. 2 false positives identified.**
**Commit:** f5357a7 -- 6 files, 447 insertions, 136 deletions

### Fix Execution Team

| Agent | Scope | Fixes Applied |
|-------|-------|---------------|
| Fixer-A | OD-001, OD-002 | 10 fixes |
| Fixer-B | OD-003 | 9 fixes |
| Fixer-C | OD-004 | 7 fixes + 2 NO FIX NEEDED investigations |
| Fixer-D | OD-005, OD-006 | 11 fix types |
| Verifier-Prog | All 6 ODs | 187/187 PASS, 0 FAIL |
| Verifier-Vis | All 6 ODs | 12 screenshots (6 files x 2 viewports), ALL PASS |
| Weaver | State tracking | FIX-STATE.md updates, progress tracking |

### Per-Fix Status

| # | Priority | Description | Status | Agent |
|---|----------|-------------|--------|-------|
| 1 | CRITICAL | OD-004 Essence font | NO FIX NEEDED (false positive) | fixer-c |
| 2 | CRITICAL | OD-001/002 `<main>` landmark | DONE | fixer-a |
| 3 | CRITICAL | OD-001/002 heading hierarchy | DONE | fixer-a |
| 4 | HIGH | ALL callout label contrast | DONE | all fixers |
| 5 | HIGH | ALL 2px to 3px structural borders | DONE | all fixers |
| 6 | HIGH | OD-004 tab ARIA | DONE | fixer-c |
| 7 | HIGH | OD-004 dead zone removal | NO FIX NEEDED (false positive) | fixer-c |
| 8 | HIGH | OD-003 remove accent-tan | DONE | fixer-b |
| 9 | MEDIUM | OD-005 max-width 960px to 860px | DONE | fixer-d |
| 10 | MEDIUM | OD-001/002/003 prefers-reduced-motion | DONE | fixer-a/b |
| 11 | MEDIUM | OD-001/002/005/006 focus-visible | DONE | fixer-a/d |
| 12 | MEDIUM | ALL skip-to-content link | DONE | all fixers |
| 13 | MEDIUM | ALL inline code font fix | DONE | all fixers |
| 14 | LOW | ALL favicon | DONE | all fixers |
| 15 | LOW | ALL ::selection styling | DONE | all fixers |
| 16 | LOW | ALL @media print | DONE | all fixers |
| 17 | LOW | Header meta layout | DEFERRED (subjective, out of scope) | -- |

### Post-Fix Verification

| Verification Type | Result | Details |
|-------------------|--------|---------|
| Programmatic | 187/187 PASS | Zero adversarial contradictions. All fixes confirmed by inversion test. |
| Visual | 12/12 PASS | 6 files x 2 viewports (1440px + 768px). Zero visual regressions. |
| Soul spot-check | 60 elements | 0 borderRadius != 0px, 0 boxShadow != none |

---

## 6. False Positives

Two audit findings were disproved during fix execution through Playwright investigation:

### False Positive 1: OD-004 Essence Font (Fix #1)

- **Audit claim:** OD-004 Essence callout used Inter/normal instead of Instrument Serif italic. This was the only explicit FAIL verdict across the entire audit.
- **Investigation:** Fixer-C used Playwright with `document.fonts.ready` before `getComputedStyle` and confirmed the font IS Instrument Serif italic.
- **Root cause:** The audit agent measured computed font BEFORE Google Fonts async load completed, getting fallback font values. Without awaiting `document.fonts.ready`, fallback fonts report incorrectly.
- **Lesson:** `document.fonts.ready` is CRITICAL before checking computed font values on any page with async font loading.

### False Positive 2: OD-004 Dead Zone (Fix #7)

- **Audit claim:** Full-viewport dead zone at ~6881px scroll position in OD-004. Fresh-eyes described it as "a page that forgot to have content."
- **Investigation:** Fixer-C measured DOM element positions and found content exists at that location (first `article.content-block` in speculative stratum starts at y=6874).
- **Root cause:** Scroll-driven animation `.reveal` elements at `opacity: 0` until viewport triggers them. Content exists but is invisible until scrolled into view. Fallbacks already handle prefers-reduced-motion and unsupported browsers.
- **Lesson:** Scroll animation artifacts can produce false positive "dead zone" findings when auditors check at a scroll position but don't trigger the animation.

---

## 7. Soul Compliance Matrix

**0 violations across 3,479+ DOM elements tested.**

### Core Soul Checks

| Soul Rule | Check | Result |
|-----------|-------|--------|
| border-radius: 0 | All elements + pseudo-elements across all 6 ODs | PASS (0 violations) |
| box-shadow: none | All elements across all 6 ODs | PASS (0 violations) |
| filter: drop-shadow | All elements across all 6 ODs | PASS (0 violations) |
| Locked palette compliance | Per-OD checks | OD-004 cleanest (13 colors, all on-palette). OD-003 worst (off-palette #B8A080 accent-tan -- fixed in Fix #8) |

### Locked Token Verification

12/12 locked tokens IDENTICAL across all 6 ODs:

| Token | Value | Status |
|-------|-------|--------|
| --color-primary | #E83025 | IDENTICAL |
| --color-background | (per-OD) | IDENTICAL |
| --color-text | #1A1A1A | IDENTICAL |
| --color-text-secondary | (per-OD) | IDENTICAL |
| --color-border | (per-OD) | IDENTICAL |
| --color-border-subtle | (per-OD) | IDENTICAL |
| --font-display | Instrument Serif | IDENTICAL |
| --font-body | Inter | IDENTICAL |
| --font-mono | JetBrains Mono | IDENTICAL |
| --border-radius | 0 | IDENTICAL |
| --box-shadow | none | IDENTICAL |
| --border-left-width | 4px | IDENTICAL |

Divergences: 0 critical, 4 high (OD-006 type scale + space-24 inconsistency), 3 notes.

### Post-Fix Soul Spot-Check

- 60 random elements across all 6 files
- 0 borderRadius != 0px
- 0 boxShadow != none
- Soul compliance maintained at 100% through all 16 fixes

---

## 8. Three-Dialect Quality Documentation

Fresh-eyes agent (F-E-004 and Section 9F) identified three quality tiers across the 6 ODs:

### Dialect A: Polished (OD-001, OD-002)

- **Characteristics:** Dark code blocks, v2 enrichments (OD-001: scroll witness, solid offsets, enrichment cards), full-bleed header with dark bg
- **Assessment:** Most polished, feels like v2 products
- **Structural weakness:** Built BEFORE semantic HTML conventions were established -- no `<main>` landmark, flat heading hierarchy, minimal ARIA

### Dialect B: Functional (OD-003, OD-004, OD-005)

- **Characteristics:** Lighter code blocks (OD-003), more thin borders, simpler headers, wider range of 2px borders
- **Assessment:** Functional but less refined, feels like v1 products
- **Structural strength:** Built AFTER conventions established -- proper landmarks, heading hierarchy, ARIA attributes

### Dialect C: Editorial (OD-006)

- **Characteristics:** No code blocks, meta-documentary style, heaviest typography, most editorial, deliberately different
- **Assessment:** Unique as synthesis page, crown jewel. Roughest surface but deepest findings (including the OD-F-005 meta-pattern)
- **Nuclear Q verdict:** STRONG PASS (unanimous)

### Key Insight

The dialect gap is a **temporal artifact of the build sequence**, not a design inconsistency. OD-001/002 were built first with deep iteration but before semantic HTML conventions. OD-003-006 were built after conventions established but with less polish iteration. Iteration and convention maturity pull quality in opposite directions unless both are present simultaneously.

### Per-OD Quality Ranking

| Rank | OD | Soul | Craft | Accessibility | Identity | Overall |
|------|-----|------|-------|---------------|----------|---------|
| 1 | OD-006 | 5/5 | HIGHEST | 4 failures | STRONGEST | STRONGEST |
| 2 | OD-005 | 5/5 | HIGH | 8 failures | STRONG | STRONG |
| 3 | OD-001 | 5/5 | HIGH | 5 failures | STRONG | STRONG |
| 4 | OD-004 | 4/5 (Essence font -- later disproved) | HIGH | 5 failures | STRONGEST concept | STRONG |
| 5 | OD-002 | 5/5 | MEDIUM | 7 failures | WEAK | NEEDS ENRICHMENT |
| 6 | OD-003 | 5/5 | LOW | 6 failures | ADEQUATE | NEEDS MOST WORK |

---

## 9. Methodology

### Wave Model

The wave execution model (visual-first, programmatic-second) mirrors how competent human auditors work: look before you measure. The sequential dependency produced better findings than parallel visual+programmatic would have:

- **Visual without programmatic** = "something feels off" without specifics
- **Programmatic without visual** = "all values are correct" with false confidence
- Visual agents PRIMED systematic agents with their findings, so systematic agents knew WHERE to look harder

### Fresh-Eyes Agent

Cost: 1 agent. Value: 2 Nuclear Question contradictions that no other agent produced. The constraint -- full identity knowledge but zero builder justifications -- was the mechanism. Every other agent had read the identity brief with builder rationale and was primed to confirm. Fresh-eyes came in with genuine epistemic separation and said OD-003 and OD-004 wouldn't communicate the identity to a newcomer. Those contradictions are the most important output of the entire audit.

### Weaver Cross-Referencing

18 cross-reference entries tracking multi-agent agreement. The ability to say "this finding was confirmed by 7 agents" vs "this was noted by 1 agent" is the difference between a finding list and an audit. The Weaver turned independent observations into a confidence-weighted body of evidence. Proven pattern across 2 team executions.

### Adversarial Debates

~40 documented across all agents. Verdict distribution: ~20 VALIDATED, ~17 IMPROVE, 1 REJECT. The nearly-all-IMPROVE distribution suggests agents hedging rather than committing. A genuinely adversarial process would produce more extreme verdicts. The retrospective recommends adversarial PAIRING (two separate agents, one defending, one attacking) instead of adversarial PROMPTING (one agent simulating both sides).

### Border 3-Category System

All 4 fixers independently applied the same classification:
- **Category 1 (structural frames):** Upgraded 2px to 3px
- **Category 2 (table/chart separators):** Left at 2px
- **Category 3 (micro-elements):** Left at 2px

### Fix Execution Architecture

Per-file ownership eliminates contention: fixer-a (OD-001/002), fixer-b (OD-003), fixer-c (OD-004), fixer-d (OD-005/006). Sequential verification: programmatic first (187 tests), then visual (12 screenshots). Zero file conflicts across all 4 fixers.

### Nuclear Question

Split assessment proved necessary: insider test (visual auditors who read builder context) vs outsider test (fresh-eyes with identity knowledge only). These are different questions with different correct answers. Their divergence reveals how much contextual knowledge the design assumes.

### Team Sizing Retrospective

The retrospective assessed 17 agents was 5-7 too many. Marginal value curve: agents 1-5 HIGH value, 6-10 MEDIUM, 11-14 LOW-MEDIUM, 15-17 LOW. Proposed sweet spot for future audits: 10-12 agents.

---

## 10. Scratchpad File Index

29 files in `knowledge-architecture/_od-audit-scratchpad/` (~528KB total):

### Audit Phase Files

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

### Fix Phase Files

| File | Agent | Content |
|------|-------|---------|
| fix-report-fixer-a.md | Fixer-A | OD-001/002 fixes: 10 applied, 0 soul violations |
| fix-report-fixer-b.md | Fixer-B | OD-003 fixes: 9 applied, 0 soul violations |
| fix-report-fixer-c.md | Fixer-C | OD-004 fixes: 7 applied + 2 NO FIX NEEDED, 0 soul violations |
| fix-report-fixer-d.md | Fixer-D | OD-005/006 fixes: 11 fix types, 0 soul violations |
| fix-verification-programmatic.md | Verifier-Prog | 187/187 PASS, 0 FAIL |
| fix-verification-visual.md | Verifier-Vis | 12 screenshots, ALL PASS, 0 regressions |
| FIX-STATE.md | Weaver | 89 lines, fix execution tracking, final status COMPLETE |

---

## SOURCE EVIDENCE

| Evidence | File | Lines | What |
|----------|------|-------|------|
| Primary data source | `knowledge-architecture/_remediation/extract-audit-data.md` | 1-427 | Census-c pre-digested audit data: findings, fixes, soul compliance, dialects, methodology, scratchpad index, cross-stage refs |
| Detail source | `knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md` | 1-688 | Full audit report: per-OD results, systemic issues, debates, nuclear questions, fix recs |
| Methodology evolution | `knowledge-architecture/OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` | 1-200+ | Wave model rationale, fresh-eyes value assessment, weaver validation, adversarial debate critique, team sizing analysis |
| Cross-stage DD data | `extract-audit-data.md` Section 12 | 338-371 | DD-to-OD quality correlation, DD research application rates (avg 76%), DD perceptual audit scores |
| Cross-stage structural | `extract-audit-data.md` Section 13 | 374-409 | OD structural maturity ranking, build-order insight confirming 3-dialect temporal artifact |
| Scratchpad primary | `knowledge-architecture/_od-audit-scratchpad/` | 29 files | Raw agent output: visual audits, systematic audits, fresh-eyes, structural, contrast, content, comparative, research-ref, consistency, weaver, fix reports, verification reports |

---

## COMPACTION-SAFE SUMMARY

- **File:** OD-AUDIT-SYNTHESIS.md
- **Purpose:** Complete audit record for OD stage -- findings, fixes, false positives, soul compliance, quality dialects, methodology
- **Scope:** 89 findings -> 17 fix items -> 16 applied + 1 deferred + 2 false positives
- **Soul:** 0 violations / 3,479+ elements, 12/12 locked tokens identical
- **Quality:** 3 dialects (Polished/Functional/Editorial), OD-006 strongest, OD-003 weakest
- **Method:** 17 agents in 4-phase wave execution, ~45 min; 7 agents for fixes, ~25 min
- **Commit:** f5357a7 (6 files, 447 insertions, 136 deletions)
- **Verification:** 187 programmatic PASS + 12 visual PASS + 60 soul spot-checks PASS
- **All 10 sections present:** Executive Summary, Audit Metadata, Finding Summary, 89-to-17 Mapping, Fix Execution, False Positives, Soul Compliance, 3-Dialect Quality, Methodology, Scratchpad Index
- **Status:** COMPLETE

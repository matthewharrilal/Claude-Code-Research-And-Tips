<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/dark-matter-index-a.md
Tier: B | Generated: 2026-02-08

1. WHY THIS EXISTS
Dark matter catalog for _od-audit-scratchpad/ directory. Maps every file to its
purpose, provenance chain cross-references, and key data for re-enrichment agents.

3. STATUS
COMPLETE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| _od-audit-scratchpad/ (29 files)        | Source directory cataloged             |
| OD-GRANULAR-AUDIT-RESULTS.md            | Formal synthesis referencing these     |
| OD-AUDIT-SYNTHESIS.md                   | Formal chain referencing these         |
| OD-outbound-findings.md                 | Formal chain referencing these         |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Wave 1 Research agents                  | Identify dark matter for enrichment    |
| Wave 3 Enrichment scribes               | Source data for OD re-enrichment       |
| Wave 6 Verifiers                        | Completeness verification              |

END INLINE THREADING HEADER
-->

# Dark Matter Index A: _od-audit-scratchpad/

**Scope:** `knowledge-architecture/_od-audit-scratchpad/`
**Total files:** 29
**Total lines:** 9,275
**Total size:** ~540KB
**Phase produced:** OD Granular Adversarial Audit (17 agents) + OD Fix Execution (7 agents)

---

## Directory Purpose

Working artifacts from two agent team operations:
1. **OD Granular Audit** (17 agents, 4 phases, ~45 min) -- adversarial UI audit of all 6 OD explorations
2. **OD Fix Execution** (7 agents, ~25 min) -- applying 16 fixes identified by the audit

These files are the raw per-agent reports that feed into the formal chain document `OD-GRANULAR-AUDIT-RESULTS.md` (688 lines). They contain granular data (element-level measurements, per-OD breakdowns, adversarial debates) that the synthesis necessarily compressed.

---

## Formal Chain Cross-References

| Formal Chain Document | References These Files |
|-----------------------|----------------------|
| `OD-GRANULAR-AUDIT-RESULTS.md` | All 22 audit files listed in Appendix A (lines 585-606) |
| `DESIGN-SYSTEM/provenance/.../OD-AUDIT-SYNTHESIS.md` | References scratchpad as source evidence |
| `DESIGN-SYSTEM/provenance/.../OD-outbound-findings.md` | References scratchpad for finding provenance |
| `DESIGN-SYSTEM/provenance/.../OD-SYNTHESIS.md` | References scratchpad for synthesis evidence |
| `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` | References scratchpad for process lessons |
| `OD-FIX-EXECUTION-PROMPT.md` | References scratchpad for fix specifications |

---

## File Catalog

### State Tracking Files (3 files, 291 lines)

| File | Lines | Agent | Purpose | Key Data |
|------|-------|-------|---------|----------|
| `AUDIT-STATE.md` | 25 | Weaver | Audit phase completion tracker | Final stats: 89 findings (8C/6H/16M/8L/~51N), 0 soul violations, 22 scratchpad files |
| `FIX-STATE.md` | 88 | Weaver | Fix execution state tracker | 16/16 fixes applied, 187/187 programmatic tests PASS, 12/12 visual PASS, commit f5357a7 |
| `weaver-tracker.md` | 179 | Weaver | Cross-reference log + agent completion | 18 cross-references (XR-1 through XR-18), per-OD verdict matrix, contradiction tracker |

### Phase A -- Identity Loading (1 file, 522 lines)

| File | Lines | Agent | Purpose | Key Data |
|------|-------|-------|---------|----------|
| `identity-brief.md` | 522 | Traverser | Ground truth for all audit agents | 11 sections: 5 soul pieces, 6 universal rules, per-OD constraints (6 tables), anti-patterns (5 categories), locked palette (14 colors), type scale (10 sizes), 55 EXT-* citations, DD-to-OD mapping, identity statements |

### Wave 1 -- Visual Audits (7 files, 2,149 lines)

| File | Lines | Agent | ODs Covered | Key Findings |
|------|-------|-------|-------------|-------------|
| `visual-audit-001.md` | 283 | Visual-First-A | OD-001 | 2px borders, scroll witness position, badge competing with title. Nuclear Q: PASS. 7 adversarial debates |
| `visual-audit-002.md` | 331 | Visual-First-A | OD-002 | No v2 enrichments, header wrapper missing, 2px act borders. Nuclear Q: CONCERN. 6 debates |
| `visual-audit-003.md` | 294 | Visual-First-B | OD-003 | 2px frame epidemic (224 thin borders computed), #808080 table border off-palette. Nuclear Q: YES. 4 debates |
| `visual-audit-004.md` | 380 | Visual-First-B | OD-004 | Essence callout font FAIL (Inter not Instrument Serif), 76 thin borders, 13 colors (all on-palette). Nuclear Q: YES (strong). 5 debates, 1 MAJOR |
| `visual-audit-005.md` | 243 | Visual-First-C | OD-005 | 960px width (spec=860px), territory badge 1px border, 15px font off-scale. Nuclear Q: PASS. 10 proportional checks |
| `visual-audit-006.md` | 294 | Visual-First-C | OD-006 | 48px title (spec display=3rem=48px OK), sidebar 2px border, most fractal confirmed. Nuclear Q: PASS. 10 proportional checks |
| `fresh-eyes.md` | 324 | Fresh-Eyes | All 6 ODs | 5 cross-OD findings: F-E-001 (108 thin border CSS decls, 1000+ computed), F-E-002 (OD-005 960px width), F-E-003 (OD-004 dead zone), F-E-004 (3 header layouts), F-E-005 (code block syntax colors). 3 dialects identified. 2 contradictions with visual auditors |

### Parallel -- Research Refinement (1 file, 395 lines)

| File | Lines | Agent | Purpose | Key Data |
|------|-------|-------|---------|----------|
| `research-refinement.md` | 395 | Research-Ref | EXT-* citation soul test | All 55 EXT-* citations tested against 5-question soul test. 7 spirit violations identified, 7 raw directives needing refinement. No Playwright used (file-only analysis) |

### Wave 2 -- Programmatic Audits (10 files, 3,967 lines)

| File | Lines | Agent | ODs Covered | Key Data |
|------|-------|-------|-------------|----------|
| `systematic-audit-001.md` | 348 | Systematic-A | OD-001 | 50 thin borders detected, categorized into 3 types. Full 4A-4Q programmatic sweep. 5 issue categories |
| `systematic-audit-002.md` | 409 | Systematic-A | OD-002 | Similar 2px pattern, Playwright tab interference noted. Full 4A-4Q. 5 issue categories |
| `systematic-audit-003.md` | 453 | Systematic-B | OD-003 | 668 DOM elements, 19,402px height. Border width distribution table. Full 4A-4Q. 4 minor improvements |
| `systematic-audit-004.md` | 481 | Systematic-B | OD-004 | 367 DOM elements, 3 tab controls verified. Border data cross-referenced with Visual-First-B. 1 MAJOR + 3 minor |
| `systematic-audit-005.md` | 452 | Systematic-C | OD-005 | 1018 DOM elements, 386 thin borders computed. Per-component breakdown (territory-tile, badge, pseudo). 0 Critical, 1 High, 3 Medium |
| `systematic-audit-006.md` | 464 | Systematic-C | OD-006 | 486 DOM elements, scroll-witness border, visual-index borders. Per-component breakdown. 0 Critical, 1 High, 2 Medium |
| `structural-integrity.md` | 403 | Structural | All 6 ODs | Semantic HTML (heading hierarchy, landmarks, ARIA), focus management, HTML validation, distributed checks (scrollbar, selection, print). OD-001/002: no `<main>` landmark. All: missing skip-to-content |
| `contrast-accessibility.md` | 361 | Contrast | All 6 ODs | WCAG 2.1 contrast ratios programmatically computed. CA-001: callout labels below AA (all 6 ODs). CA-002: exploration meta values below AA. Full per-color ratio table |
| `content-authenticity.md` | 306 | Content | All 6 ODs | Zero lorem ipsum, zero placeholders, zero TODO/FIXME. All content domain-specific. Word counts per OD. Missing favicon in all 6 |
| `comparative-reference.md` | 313 | Comparative | All 6 ODs | DD ancestor comparison: token inheritance (all PASS), pattern inheritance (all EVOLVED), drift detection (zero token drift). Per-OD evolution assessment |

### Phase C -- Cross-OD Consistency (1 file, 607 lines)

| File | Lines | Agent | Purpose | Key Data |
|------|-------|-------|---------|----------|
| `cross-od-consistency.md` | 607 | Consistency | Cross-OD synthesis | Token diff (12/12 locked tokens PASS, 0 divergences), non-locked token analysis (OD-006 type scale HIGH), 5px Gaussian blur squint test, contradiction resolution (OD-003/004), 17 fix recommendations |

### Fix Execution Reports (6 files, 1,320 lines)

| File | Lines | Agent | Files Fixed | Key Data |
|------|-------|-------|-------------|----------|
| `fix-report-fixer-a.md` | 219 | Fixer-A | OD-001, OD-002 | 10 fixes applied: main landmark, heading hierarchy, callout labels, 2px->3px borders, PRM, focus-visible, skip-to-content, inline code font, favicon, ::selection, @media print. 0 soul violations |
| `fix-report-fixer-b.md` | 145 | Fixer-B | OD-003 | 9 fixes applied: callout labels consolidated (7 per-type rules removed), 11 structural borders 2px->3px (OD-003 had 661 thin borders -- most careful categorization), accent-tan removed. 0 soul violations |
| `fix-report-fixer-c.md` | 257 | Fixer-C | OD-004 | 7 fixes applied + 2 NO FIX NEEDED. Essence font: Playwright `document.fonts.ready` proved font-loading timing artifact (false positive). Dead zone: Playwright proved scroll-animation artifact. Tab ARIA: full keyboard nav added. 0 soul violations |
| `fix-report-fixer-d.md` | 177 | Fixer-D | OD-005, OD-006 | 11 fix types: callout labels (10 per-type rules removed across both), 6+6 borders 2px->3px, OD-005 max-width 960->860. Different callout names noted (insight/discovery/warning/note vs info/tip/gotcha/checkpoint). 0 soul violations |
| `fix-verification-programmatic.md` | 306 | Verifier-Prog | All 6 ODs | 187 tests, 187 PASS, 0 FAIL. Fix #1 confirmed false positive via `document.fonts.ready`. Fix #4: 47 callout labels all rgb(26,26,26). Soul spot check: 60 random elements, 0 violations |
| `fix-verification-visual.md` | 216 | Verifier-Vis | All 6 ODs | 12 screenshots (6 files x 2 viewports: 1440px + 768px). All PASS. Zero visual regressions |

---

## Key Cross-OD Data Available in Dark Matter

These data points exist in the scratchpad files but are compressed or absent from formal chain documents:

| Data Type | Location | Value for Re-Enrichment |
|-----------|----------|------------------------|
| Per-element border measurements | systematic-audit-001 through 006 | Exact CSS selectors and computed counts per OD |
| Adversarial debate transcripts | visual-audit-001 through 006 | ~40 debates showing reasoning for VALIDATE/IMPROVE/REJECT verdicts |
| WCAG contrast ratios per color pair | contrast-accessibility.md | Full ratio table with deficit calculations |
| EXT-* soul test results (all 55) | research-refinement.md | Per-citation 5-question assessment |
| DD-to-OD token inheritance tables | comparative-reference.md | Full token diff showing zero drift |
| Content word counts per OD | content-authenticity.md | OD-001: ~1,592 words (plus other ODs) |
| 18 weaver cross-references | weaver-tracker.md | XR-1 through XR-18 with multi-source validation |
| Fixer-C Playwright evidence | fix-report-fixer-c.md | Computed style proof that Essence font and dead zone were false positives |
| 3 dialect classification | fresh-eyes.md | Dialect A (OD-001/002 polished), Dialect B (OD-003/004/005 functional), Dialect C (OD-006 editorial) |
| Border categorization system | All fix reports | 3-category system independently derived by all 4 fixers |

---

## Statistics

| Metric | Value |
|--------|-------|
| Total files | 29 |
| Total lines | 9,275 |
| Total size | ~540KB |
| Unique agents who wrote files | 17 (audit) + 6 (fix) = 23 |
| Phases represented | Phase A, Wave 1, Parallel, Wave 2, Phase C, Phase D (audit) + Phases B-E (fix) |
| Formal chain documents referencing these | 6 |
| Files with no formal chain reference | 0 (all 29 referenced in OD-GRANULAR-AUDIT-RESULTS.md Appendix A) |

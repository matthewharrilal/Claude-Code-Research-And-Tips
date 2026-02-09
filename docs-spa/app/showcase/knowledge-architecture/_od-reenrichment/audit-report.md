<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/audit-report.md
Tier: A | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: All 9 audit files (identity-brief, fresh-eyes, standards, visual-a/b/c, systematic-a/b/c), calibration-violations.md
CONSUMED BY: Wave 6 verifiers, Lead, scribe (provenance updates)
END INLINE THREADING HEADER
-->

# Master Audit Report: OD Re-Enrichment Wave 5C
## Cross-OD Consistency Synthesis

**Generated:** 2026-02-09
**Author:** consistency agent
**Input:** 9 audit files + calibration-violations.md (10 documents, ~3,500 lines)
**Scope:** All 6 OD explorations (OD-001 through OD-006), post-v3 re-enrichment

---

## 1. Executive Summary

### Overall Verdict: CONDITIONAL PASS

The 6 OD explorations form a **cohesive, recognizable product family** with strong shared DNA (design tokens, typography triad, sharp-edge aesthetic, dark header pattern, callout system). All 6 pages pass the critical soul checks for geometry (border-radius: 0, box-shadow: none, filter: none) and typography (font trio only). No page has introduced new soul violations in the core categories that define the ANTI-PHYSICAL identity.

**However, one systemic issue prevents a clean PASS:** OD-AP-003 (semi-transparent rgba backgrounds and sub-1.0 opacity on visual elements) persists across 5 of 6 ODs. This was already identified as "systemic, found in EVERY wave" in the identity brief and remains the single highest-priority remediation target.

Additionally, OD-003 carries two unique violations (border-radius: 4px on toggle, 2px structural border on callout) that are confirmed calibration plants and have been REMOVED. Post-removal, OD-003's real violations are limited to rgba/opacity issues shared with the other ODs.

### Finding Totals (Real Findings Only -- Calibration Removed)

| Severity | Count | Description |
|----------|-------|-------------|
| CRITICAL | 0 | No critical soul violations after calibration removal |
| HIGH | 6 | All OD-AP-003 (rgba/opacity) -- systemic across OD-001/002/003/005 |
| MEDIUM | 10 | Off-palette colors, proportional wrongness, convention divergences, missing semantics |
| LOW | 14 | Minor convention inconsistencies, token drift, responsive gaps |
| NOTE | 8 | Cosmetic divergences, code smell, non-blocking observations |
| **TOTAL** | **38** | Deduplicated across all 9 audit agents |

### Soul Compliance Summary

| Soul Check | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|------------|--------|--------|--------|--------|--------|--------|
| 1. border-radius: 0 | PASS | PASS | PASS* | PASS | PASS | PASS |
| 2. box-shadow: none | PASS | PASS | PASS | PASS | PASS | PASS |
| 3. filter: none | PASS | PASS | PASS | PASS | PASS | PASS |
| 4. No hover z-depth | PASS | PASS | PASS | PASS | PASS | PASS |
| 5. Locked palette | PASS | FAIL | FAIL | PASS+ | PASS | PASS+ |
| 6. Font trio only | PASS | PASS | PASS | PASS | PASS | PASS |
| 7. Border 3-category | PASS | PASS | PASS* | PASS | PASS | PASS |
| 8. No 2px structural | PASS | PASS | PASS* | PASS** | PASS | PASS |
| 9. Token spacing | PASS | PASS | PASS | PASS | PASS | PASS |
| 10. Max 2 callouts/vh | PASS | PASS | PASS | PASS | PASS | PASS |
| **OD-AP-003 (rgba/opacity)** | **FAIL** | **FAIL** | **FAIL** | **PASS** | **FAIL** | **FAIL** |

\* OD-003 calibration violations removed; post-removal status is PASS
\*\* OD-004 2px border is intentional Cat 3 semantic confidence encoding (documented exception)
\+ Minor off-palette callout tint colors (#F4FAF6, #F5EDE0) -- borderline, consistent with precedent

### Calibration Detection Rate

**89% overall (8/9 checks detected) -- PASS** (threshold: 80%)

---

## 2. Per-OD Scorecard

### OD-001: Conversational (Q&A)

| Dimension | Score | Details |
|-----------|-------|---------|
| Soul (10 checks) | 9/10 | FAIL: OD-AP-003 (6 rgba callout bgs + 2 opacity < 1 on micro-labels) |
| Standards (17 checks) | 16/17 | Missing `<footer>` |
| Visual | GOOD | Strongest editorial polish; scroll witness, drop caps, solid offsets |
| Systematic | 7/8 PASS | FAIL: 8 OD-AP-003 violations (6 rgba + 2 opacity) |
| **Overall** | **CONDITIONAL PASS** | Fix rgba/opacity; add footer |

**Key findings:** VA-H-001 (6x rgba callout bgs), VA-H-003 (opacity 0.7 on narrowing), VA-H-004 (opacity 0.6 on tags), VA-M-002 (8px font below type floor), VA-L-002 (letter-spacing 0.1em vs spec 0.15em)

### OD-002: Narrative Arc

| Dimension | Score | Details |
|-----------|-------|---------|
| Soul (10 checks) | 8/10 | FAIL: OD-AP-003 (6 rgba callout bgs), off-palette code block colors |
| Standards (17 checks) | 13/17 | Missing `<nav>`, `<footer>`, `<article>`; minimal ARIA |
| Visual | ADEQUATE | Cleanest of the "functional dialect" pages; CRESCENDO structure visible |
| Systematic | 7/8 PASS | FAIL: 6 OD-AP-003 violations |
| **Overall** | **CONDITIONAL PASS** | Fix rgba; fix off-palette #333/#444/#555/#888; add semantic elements |

**Key findings:** VA-H-002 (6x rgba callout bgs), VA-M-001 (4 off-palette cool grays in code block), VA-M-003 (missing header margin-bottom), VA-M-004 (no responsive title reduction at 768px), STD-H-002 (weakest ARIA of all 6)

### OD-003: Task-Based

| Dimension | Score | Details |
|-----------|-------|---------|
| Soul (10 checks) | 8/10 | FAIL: OD-AP-003 (4 rgba violations). Calibration items removed. |
| Standards (17 checks) | 13/17 | Missing `<nav>`, `<footer>`, `<article>` |
| Visual | ADEQUATE | Functional cookbook feel; archipelago map effective |
| Systematic | 6/8 PASS | FAIL: OD-AP-003 (4 rgba), plus calibration items (now removed) |
| **Overall** | **CONDITIONAL PASS** | Fix rgba; add semantic elements; add 768px breakpoint |

**Key findings:** VB-003-03 (4x rgba), VB-003-05 (off-palette callout bgs #FEF5F4, #F4FAF6, #FEF6F5), VB-003-06 (no 768px breakpoint -- 860px container exceeds 768px viewport)

**Post-calibration note:** VB-003-01 (border-radius: 4px), VB-003-02 (2px callout border), VB-003-04 (#B8A080 off-palette) were calibration plants -- now REMOVED.

### OD-004: Confidence-Based

| Dimension | Score | Details |
|-----------|-------|---------|
| Soul (10 checks) | **10/10** | Cleanest OD. Zero rgba, zero opacity violations. |
| Standards (17 checks) | 16/17 | Missing `<footer>` only. Best ARIA implementation. |
| Visual | EXCELLENT | Most structurally innovative. Geological strata visible. |
| Systematic | **8/8 PASS** | Zero violations. 2px border is documented Cat 3 semantic exception. |
| **Overall** | **PASS** | Only needs `<footer>` element. |

**Key findings:** VC-M-003 (off-palette #F4FAF6 checkpoint bg -- borderline), VC-L-004 (multi-tier body font sizes 13/14/15/16px -- intentional density stratification but outside type scale)

### OD-005: Spatial/Hub-Spoke

| Dimension | Score | Details |
|-----------|-------|---------|
| Soul (10 checks) | 9/10 | FAIL: OD-AP-003 (5 rgba callout bgs) |
| Standards (17 checks) | **17/17** | Most complete structural implementation. All semantic elements present. |
| Visual | GOOD | Strong hub-spoke oscillation; territory grid with keyboard nav |
| Systematic | 7/8 PASS | FAIL: 5 OD-AP-003 violations |
| **Overall** | **CONDITIONAL PASS** | Fix rgba callout backgrounds only |

**Key findings:** VB-005-01 (5x rgba callout bgs). Otherwise the cleanest page after OD-004. Hover spirit violation properly resolved (flat border-color change). Solid offset opacity explicitly set to 1.

### OD-006: Creative/Emergent (Crown Jewel)

| Dimension | Score | Details |
|-----------|-------|---------|
| Soul (10 checks) | 9/10 | FAIL: OD-AP-003 (1 rgba + 3 opacity < 1 on fractal annotations/TOC) |
| Standards (17 checks) | 15/17 | Missing `<header>`, `<article>` |
| Visual | EXCELLENT | Most complex; all 5 org modes demonstrated; 5th fractal scale |
| Systematic | 7/8 PASS | FAIL: 4 OD-AP-003 violations (1 rgba, 3 opacity) |
| **Overall** | **CONDITIONAL PASS** | Fix rgba/opacity; add semantic elements |

**Key findings:** VC-M-001 (rgba highlight bg), VC-M-002 (fractal annotation opacity 0.6/0.7), VC-L-001 (#F5EDE0 hover not in palette), VC-L-002 (essence callout uses purple not red -- cross-OD discrepancy), OD-006-SYS-C-002 (3x sub-1.0 opacity on text elements)

### Per-OD Rankings

1. **OD-004** (PASS) -- 10/10 soul, 8/8 systematic, best ARIA. The gold standard.
2. **OD-005** (CONDITIONAL) -- 17/17 standards, only rgba callouts to fix.
3. **OD-001** (CONDITIONAL) -- Strongest editorial polish, but most opacity violations.
4. **OD-006** (CONDITIONAL) -- Most ambitious, but fractal annotation opacity + rgba.
5. **OD-002** (CONDITIONAL) -- Off-palette code block colors + weakest ARIA.
6. **OD-003** (CONDITIONAL) -- Most violations (rgba + missing breakpoint + off-palette tints).

---

## 3. Cross-OD Findings (Systemic Issues)

### 3.1 OD-AP-003: rgba/Opacity Semi-Transparency (SYSTEMIC -- #1 PRIORITY)

This is the single most pervasive issue across the entire OD set. It appears in 5 of 6 ODs (only OD-004 is clean).

**Instance count by OD:**

| OD | rgba instances | opacity < 1 instances | Total | Pattern |
|----|---------------|----------------------|-------|---------|
| OD-001 | 6 (callout bgs + decision matrix) | 2 (micro-labels 0.7, 0.6) | 8 | Callout variant backgrounds |
| OD-002 | 6 (callout bgs + decision matrix) | 0 | 6 | Same as OD-001 |
| OD-003 | 4 (zone emphasis, inline code, code line separator) | 0 | 4 | Mixed: zone token + inline code + border |
| OD-004 | 0 | 0 | **0** | CLEAN |
| OD-005 | 5 (callout bgs) | 0 | 5 | Callout variant backgrounds |
| OD-006 | 1 (code highlight) | 3 (fractal annotations 0.6/0.7, TOC 0.7) | 4 | Mixed: highlight + visual hierarchy |
| **TOTAL** | **22** | **5** | **27** | |

**Root cause:** The callout variant system was designed with rgba tinting to create subtle background differentiation between callout types (info=blue tint, tip=green tint, gotcha=coral tint, essence=purple tint). This pattern was replicated across ODs by builders who treated it as a convention. The identity brief's binary rule ("opacity === 1.0 everywhere") was established AFTER the callout system was built.

**Remediation:** Replace all rgba backgrounds with pre-computed solid equivalents. Systematic-A agent provided exact solid color mappings:
- `rgba(74, 144, 217, 0.05)` on #FEF9F5 -> `#F5F7FB` (info)
- `rgba(74, 157, 107, 0.05)` on #FEF9F5 -> `#F5F9F6` (tip)
- `rgba(201, 112, 101, 0.05)` on #FEF9F5 -> `#FBF7F6` (gotcha)
- `rgba(124, 58, 237, 0.04)` on #FEF9F5 -> `#F9F7FC` (essence)
- `rgba(217, 119, 6, 0.05)` on #FEF9F5 -> `#FBF8F3` (challenge)
- `rgba(232, 48, 37, 0.04)` on #FEF9F5 -> `#FBF6F5` (highlight)
- `rgba(74, 157, 107, 0.06)` on #FEF9F5 -> `#F4F9F6` (checkpoint)

For opacity < 1 on text elements (OD-001, OD-006): Replace `opacity: 0.6/0.7` with `color: var(--color-text-secondary)` or a lighter hex color at full opacity.

### 3.2 Off-Palette Colors

**Cross-OD inventory:**

| Color | OD(s) | Context | Assessment |
|-------|-------|---------|------------|
| #333 | OD-002, OD-004 | Dark code block internals | ACCEPTABLE -- dark-context adaptation |
| #444 | OD-002 | Code block copy button border | NOTE -- should use token |
| #555 | OD-002 | Code block line numbers | NOTE -- should use token |
| #888 | OD-002 | Code block lang label, copy text | NOTE -- should use token |
| #B8A080 | OD-003* | Callout label text | REMOVED (calibration plant) |
| #FEF5F4 | OD-003 | Prereq callout background | LOW -- near-palette warm pink tint |
| #F4FAF6 | OD-003, OD-004 | Checkpoint callout background | LOW -- near-palette green tint |
| #FEF6F5 | OD-003, OD-004 | Troubleshoot/error callout background | LOW -- near-palette coral tint |
| #F5EDE0 | OD-006 | Territory tile hover background | LOW -- warm cream interpolation |

**Pattern:** OD-002 has hardcoded cool grays in dark code blocks where other ODs use tokens. OD-003, OD-004, and OD-006 share a pattern of near-palette callout/hover tint colors that serve functional differentiation. These are borderline -- the convention spec doesn't explicitly address callout-variant background tinting at full opacity.

**Recommendation:** Either formalize callout tint colors as design tokens (adding ~5 new tokens) OR replace with existing zone tokens. OD-002's cool grays should be replaced with `var(--color-text-secondary)` or tokenized equivalents.

### 3.3 Missing Semantic Elements

| Element | Present In | Absent From | Impact |
|---------|-----------|-------------|--------|
| `<footer>` | OD-005, OD-006 | OD-001, OD-002, OD-003, OD-004 | MEDIUM -- accessibility landmark |
| `<nav>` | OD-001, OD-004, OD-005, OD-006 | OD-002, OD-003 | MEDIUM -- navigation landmark |
| `<article>` | OD-001, OD-004 | OD-002, OD-003, OD-005, OD-006 | LOW -- content sectioning |
| `<header>` | OD-001-005 | OD-006 | LOW -- page landmark |

**Pattern:** Pages built earlier in the process (OD-002, OD-003) have fewer semantic elements and weaker ARIA. Pages built later (OD-004, OD-005) have richer implementations. This is a "maturity gradient" reflecting the team's evolving standards.

### 3.4 Exploration ID Inconsistency

| Aspect | OD-001 | OD-002-005 | OD-006 |
|--------|--------|-----------|--------|
| ID color | `var(--color-primary)` (red) | `var(--color-text-secondary)` (gray) | Different class structure |
| Letter-spacing | 0.1em | 0.15em | N/A |
| Hypothesis line-height | 1.6 | 1.7 | N/A |

**Impact:** LOW -- minor visual inconsistency in headers. Convention spec says 0.15em, so OD-001 is the divergent one.

### 3.5 Essence Callout Color Discrepancy

OD-006 uses `var(--accent-purple)` (#7C3AED) for essence callout borders, while OD-001/002/004 use `var(--color-primary)` (#E83025, red). The convention spec should clarify which is canonical.

---

## 4. Calibration Analysis

### Planted Violations (All 3 in OD-003)

| # | Violation | Planted Value | Detection Rate |
|---|-----------|--------------|----------------|
| 1 | border-radius: 4px on `.task-island__toggle` | Soul violation -- direct | 3/3 (100%) |
| 2 | #B8A080 off-palette on `.callout__label` | Subtle warm brown | 2/3 (67%) |
| 3 | 2px structural border on `.callout` | OD-F-AP-001 epidemic | 3/3 (100%) |

### Detection by Agent

| Agent | Detected | Missed | Rate |
|-------|----------|--------|------|
| fresh-eyes | 2/3 | #B8A080 (no palette context) | 67% |
| visual-b | 3/3 | -- | 100% |
| systematic-b | 3/3 | -- | 100% |

### Calibration Verdict: PASS (89% overall, threshold 80%)

- The border-radius violation was universally caught -- the soul's most recognizable constraint
- The 2px border was universally caught -- the epidemic anti-pattern is well-internalized
- The off-palette color was the subtlest violation (#B8A080 is a warm tone that blends with the palette family); fresh-eyes missing it without design system context is expected
- All 3 violations have been **REMOVED** from OD-003 post-audit
- Calibration findings are NOT counted in the real findings registry below

---

## 5. Findings Registry (All Findings, Deduplicated)

### HIGH Severity

| ID | OD(s) | Description | Found By | Cross-Validated |
|----|-------|-------------|----------|-----------------|
| F-H-001 | OD-001 | OD-AP-003: 6x rgba callout backgrounds (alpha 0.04-0.05) | visual-a, systematic-a | YES (2 agents) |
| F-H-002 | OD-002 | OD-AP-003: 6x rgba callout backgrounds (alpha 0.04-0.05) | visual-a, systematic-a | YES (2 agents) |
| F-H-003 | OD-001 | OD-AP-003: opacity 0.7 on .question__narrowing micro-label | visual-a, systematic-a | YES (2 agents) |
| F-H-004 | OD-001 | OD-AP-003: opacity 0.6 on .enrichment-card__tag micro-label | visual-a, systematic-a | YES (2 agents) |
| F-H-005 | OD-003 | OD-AP-003: 4x rgba (zone-emphasis, inline code bgs, code line separator) | visual-b, systematic-b | YES (2 agents) |
| F-H-006 | OD-005 | OD-AP-003: 5x rgba callout backgrounds (alpha 0.04-0.06) | visual-b, systematic-b | YES (2 agents) |

### MEDIUM Severity

| ID | OD(s) | Description | Found By | Cross-Validated |
|----|-------|-------------|----------|-----------------|
| F-M-001 | OD-002 | Off-palette colors #333/#444/#555/#888 in dark code block | visual-a, systematic-a | YES (2 agents) |
| F-M-002 | OD-001 | font-size: 8px on .question__narrowing and .enrichment-card__tag (below 12px type floor) | visual-a | |
| F-M-003 | OD-002 | Missing header margin-bottom (OD-001 has space-chapter, OD-002 does not) | visual-a | |
| F-M-004 | OD-002 | Missing responsive title reduction at 768px (stays 2.5rem; OD-001 reduces to 2rem) | visual-a | |
| F-M-005 | OD-003 | No 768px responsive breakpoint; 860px container exceeds 768px viewport width | visual-b | |
| F-M-006 | OD-006 | OD-AP-003: rgba(232,48,37,0.05) on .code-target.highlighted | visual-c, systematic-c | YES (2 agents) |
| F-M-007 | OD-006 | OD-AP-003: .fractal-annotation opacity 0.6, .fractal-annotation__ratio opacity 0.7 | visual-c, systematic-c | YES (2 agents) |
| F-M-008 | OD-004 | Off-palette #F4FAF6 on .callout--checkpoint background | visual-c, systematic-c | YES (2 agents) |
| F-M-009 | OD-001-004 | Missing `<footer>` semantic element | standards | |
| F-M-010 | OD-002 | Minimal ARIA implementation (only role="main") | standards | |

### LOW Severity

| ID | OD(s) | Description | Found By | Cross-Validated |
|----|-------|-------------|----------|-----------------|
| F-L-001 | OD-001, OD-002 | font-size: 9px on micro-labels (below 12px type-meta floor) | visual-a | |
| F-L-002 | OD-001 | Exploration-id letter-spacing 0.1em (spec says 0.15em) | visual-a, fresh-eyes | YES |
| F-L-003 | OD-001, OD-002 | Reduced-motion animation-duration inconsistency (0.001ms vs 0.01ms) | visual-a | |
| F-L-004 | OD-003 | Off-palette callout backgrounds #FEF5F4, #F4FAF6, #FEF6F5 | visual-b, systematic-b | YES |
| F-L-005 | OD-005 | Purple accent #7C3AED needs cross-OD confirmation as sanctioned 5th accent | visual-b | |
| F-L-006 | OD-005 | Wave indicator disappears at 1200px (may be too aggressive) | visual-b | |
| F-L-007 | OD-006 | Off-palette hover color #F5EDE0 on territory tiles | visual-c, systematic-c | YES |
| F-L-008 | OD-006 | Essence callout uses --accent-purple vs --color-primary (red) in other ODs | visual-c | |
| F-L-009 | OD-006 | .toc__mode opacity 0.7 (technically OD-AP-003 but minimal impact) | visual-c, systematic-c | YES |
| F-L-010 | OD-004 | Multi-tier body font sizes (13/14/15/16px) outside type scale tokens | visual-c | |
| F-L-011 | OD-004 | Geological column minimap lacks explicit 768px responsive handling | visual-c | |
| F-L-012 | OD-002, OD-003 | Missing `<nav>` semantic element | standards | |
| F-L-013 | OD-002, OD-003, OD-005, OD-006 | Missing `<article>` semantic elements for content blocks | standards | |
| F-L-014 | OD-006 | Missing `<header>` semantic element (uses div class="page-header") | standards | |

### NOTE Severity

| ID | OD(s) | Description | Found By |
|----|-------|-------------|----------|
| F-N-001 | OD-006 | Exploration header uses different CSS class (page-header vs exploration-header) | fresh-eyes |
| F-N-002 | OD-004 | Unique --space-24: 96px token not in other ODs | fresh-eyes |
| F-N-003 | OD-004 | Zone token naming drift (--color-zone-moderate, --color-zone-densest) | fresh-eyes |
| F-N-004 | OD-005 | Duplicate --space-within/--space-between/--space-chapter definitions | fresh-eyes |
| F-N-005 | OD-001, OD-002 | Hypothesis line-height inconsistency (1.6 vs 1.7) | fresh-eyes |
| F-N-006 | OD-002 | Print style overrides header to white bg; OD-001 does not | visual-a |
| F-N-007 | All 6 | No inter-page navigation (each page is a standalone island) | fresh-eyes |
| F-N-008 | OD-001-003, OD-005-006 | Redundant role="main" on `<main>` element (harmless) | standards |

---

## 6. Recommendations

### MUST FIX Before Commit (CRITICAL/HIGH -- 0 CRITICAL, 6 HIGH)

All 6 HIGH findings are OD-AP-003 (rgba/opacity semi-transparency). The fix is mechanical:

1. **Replace all rgba() callout backgrounds with solid equivalents** in OD-001, OD-002, OD-003, OD-005 (22 total rgba declarations). Use the pre-computed solid colors from Section 3.1.
2. **Replace opacity < 1 on micro-labels** in OD-001 (.question__narrowing 0.7, .enrichment-card__tag 0.6) with `color: var(--color-text-secondary)` at full opacity.
3. **Verify OD-003 calibration violations are fully removed** (border-radius: 4px, #B8A080, 2px border). Per calibration-violations.md, this is DONE.

### SHOULD FIX (MEDIUM -- 10 findings)

| Priority | Finding(s) | Fix |
|----------|-----------|-----|
| 1 | F-M-006, F-M-007 | OD-006: Replace rgba highlight bg with solid; replace fractal annotation opacity with lighter text color |
| 2 | F-M-001 | OD-002: Replace #333/#444/#555/#888 in code blocks with tokenized vars |
| 3 | F-M-009 | Add `<footer>` to OD-001, OD-002, OD-003, OD-004 (template from OD-005) |
| 4 | F-M-010 | Add ARIA attributes to OD-002 act sections and narrative beats |
| 5 | F-M-003 | OD-002: Add `margin-bottom: var(--space-chapter)` to .exploration-header |
| 6 | F-M-004 | OD-002: Add responsive title reduction to 2rem at 768px |
| 7 | F-M-005 | OD-003: Add 768px breakpoint; ensure content container respects viewport |
| 8 | F-M-008 | OD-004: Either add #F4FAF6 as a token or replace with var(--color-border-subtle) |
| 9 | F-M-002 | OD-001: Address 8px font-size (either add sub-meta token or raise to 10px minimum) |

### COULD FIX (LOW -- 14 findings)

These are minor inconsistencies that don't affect ship readiness:
- Normalize exploration-id color across all ODs (pick red or gray)
- Normalize letter-spacing to 0.15em in OD-001
- Resolve essence callout color (purple vs red) across ODs
- Add `<nav>`, `<article>` where missing
- Remove duplicate spacing alias definitions in OD-005
- Formalize near-palette callout tint colors as tokens
- Address 9px micro-label font sizes

### Deferred to AD Phase

- **F-N-007 (inter-page navigation):** Adding prev/next navigation between ODs is an AD-level concern (axis layout determines navigation patterns)
- **OD-004 zone token naming:** --color-zone-moderate and --color-zone-densest are intentional for the 4-stratum model; standardization should be evaluated during AD
- **WCAG AA contrast audit:** All 6 ODs have deferred contrast verification (Playwright contention prevented live measurement). Should be a Wave 6 or AD task.

---

## 7. Convention Compliance

### Alignment to OD-CONVENTION-SPEC.md

| Convention | Compliance | Notes |
|------------|-----------|-------|
| Dark header (full-bleed #1A1A1A, 3px red border) | 6/6 PASS | All ODs have correct dark header |
| Inner wrapper (860px, margin 0 auto) | 6/6 PASS | All ODs use correct container |
| Type scale tokens (unified 5-level) | 5/6 PASS | OD-004 has intentional sub-token body sizes for density stratification |
| --type-page: 2.5rem (OD-006: 3rem sanctioned) | 6/6 PASS | OD-006 correctly uses 3rem |
| Font trio (Instrument Serif, Inter, JetBrains Mono) | 6/6 PASS | No off-trio fonts |
| Zone token naming (sparse/dense/breathing) | 5/6 PASS | OD-004 adds zone-moderate/zone-densest (intentional extension) |
| Dark code blocks (#1A1A1A bg, syntax palette) | 5/5 PASS | OD-006 has no code blocks (intentional) |
| Reduced-motion prophylactic | 6/6 PASS | All have @media (prefers-reduced-motion: reduce) |
| Border 3-category system | 5/6 PASS | OD-003 had calibration 2px (removed); OD-004 has semantic 2px (exception) |
| Page length target (10K-14K px) | DEFERRED | Cannot verify without Playwright |

### Remaining Dialect Differences

The original "3 dialects" observation (Polished/Functional/Editorial) persists to a degree:

- **Polished (OD-001, OD-002):** Drop caps, scroll witnesses, solid offsets, editorial flair. Strongest visual identity.
- **Functional (OD-003, OD-004, OD-005):** Cleaner, more utilitarian. OD-004 and OD-005 have stronger ARIA. OD-003 is the leanest.
- **Editorial (OD-006):** Unique crown-jewel status. 3rem title, fractal annotations, drop caps, meta-documentary structure.

The convention spec unified the STRUCTURAL elements (headers, code blocks, tokens, borders). The EDITORIAL elements (drop caps, scroll witnesses, solid offsets) remain intentional per-OD variations. This is acceptable -- the variations serve each OD's organizational pattern.

---

## 8. Fresh-Eyes vs Identity Assessment

### Where Fresh-Eyes Agreed with Identity-Aware Auditors

| Observation | Fresh-Eyes | Identity-Aware | Agreement |
|-------------|-----------|----------------|-----------|
| Strong cohesion via shared tokens | YES -- "identical design tokens" | YES -- all soul checks pass | FULL AGREEMENT |
| Sharp-edge aesthetic is distinctive | YES -- "unusual and intentional" | YES -- 0 border-radius/box-shadow violations | FULL AGREEMENT |
| Three dialects visible | YES -- "Polished/Functional/Architectural" | YES -- confirmed across all visual auditors | FULL AGREEMENT |
| OD-003 toggle has border-radius: 4px | YES -- found as sole rounded element | YES -- systematic-b, visual-b | FULL AGREEMENT (calibration) |
| Dark header is consistent | YES -- all 6 share pattern | YES -- convention spec verified | FULL AGREEMENT |
| 860px max-width may be narrow | YES -- "wasteful on large monitors" | N/A -- not a soul concern | FRESH-EYES UNIQUE |

### Where Fresh-Eyes Saw Something Others Missed

1. **No inter-page navigation** (F-N-007) -- Fresh-eyes noted that none of the 6 pages link to each other. No prev/next buttons, no breadcrumb trail, no index. Identity-aware auditors did not flag this because they were focused on soul compliance within each page.

2. **Information density in HTML comments is "absurd"** -- Fresh-eyes observed the 100-200 line comment headers documenting research findings. Identity-aware auditors see these as provenance infrastructure; fresh-eyes correctly identified the overhead-to-content ratio concern from a developer experience perspective.

3. **Text-heavy with no imagery** -- Fresh-eyes noted the absence of actual images across all 6 pages. Identity-aware auditors focused on CSS/structural compliance and didn't evaluate content richness.

4. **Solid offset technique used inconsistently** -- Fresh-eyes noticed the depth technique appears prominently in OD-001 but not consistently across all pages. This is actually intentional (not every OD needs solid offsets), but the observation is valid.

### Where Identity-Aware Auditors Caught Things Fresh-Eyes Missed

1. **OD-AP-003 (rgba/opacity)** -- This requires deep knowledge of the binary rule (opacity === 1.0). Fresh-eyes would see `rgba(74, 144, 217, 0.05)` as an unremarkable CSS background. Identity-aware auditors knew this violates the ANTI-PHYSICAL identity. This finding class represents ~70% of all findings.

2. **Off-palette #B8A080** -- Fresh-eyes missed this calibration plant. Without the locked palette reference, a warm brown label color looks plausible.

3. **Convention spec divergences** -- Letter-spacing (0.1em vs 0.15em), header margin-bottom presence/absence, responsive title reduction -- these require knowledge of the convention spec to identify.

4. **OD-004 2px border exception** -- Identity-aware auditors correctly identified the semantic confidence encoding as an intentional Cat 3 exception. Fresh-eyes flagged the 2px in OD-003 (calibration) but would not have known to exempt OD-004's 2px.

### Synthesis

Fresh-eyes excels at **product-level observations** (navigation gaps, content density, developer experience) that identity-aware auditors overlook because they are focused on compliance. Identity-aware auditors excel at **specification-level precision** (rgba violations, palette conformance, convention divergences) that require deep context. The combination provides comprehensive coverage.

---

## 9. COMPACTION-SAFE SUMMARY

**Master Audit Report for OD Re-Enrichment Wave 5C**

- **Verdict:** CONDITIONAL PASS -- ship with rgba/opacity fixes
- **Total findings:** 38 deduplicated (0 CRITICAL, 6 HIGH, 10 MEDIUM, 14 LOW, 8 NOTE)
- **Systemic issue:** OD-AP-003 (rgba/opacity < 1) affects 5/6 ODs (27 total instances). Only OD-004 is clean.
- **Soul compliance:** 6/6 PASS on geometry (border-radius, box-shadow, filter), typography (font trio), hover safety, spacing tokens. Only OD-AP-003 causes failures.
- **Calibration:** 89% detection rate (8/9, PASS). 3 planted violations in OD-003 all REMOVED.
- **Standards:** OD-005 is best (17/17). OD-002 and OD-003 weakest (13/17 each, missing nav/footer/article + ARIA gaps).
- **Rankings:** OD-004 > OD-005 > OD-001 > OD-006 > OD-002 > OD-003
- **Must fix:** Replace 22 rgba declarations with solid colors + fix 5 opacity < 1 values. Mechanical fix, pre-computed colors provided.
- **Should fix:** OD-002 off-palette code block colors, missing `<footer>` in 4 ODs, OD-002 ARIA, OD-002/003 responsive gaps.
- **Fresh-eyes unique:** No inter-page navigation, text-heavy pages, HTML comment overhead. Identity-aware unique: rgba violations (70% of findings), convention spec divergences.
- **Convention compliance:** Strong on structure (headers, code blocks, borders, fonts). Remaining dialect differences (Polished/Functional/Editorial) are intentional per-OD variations, not violations.
- **Deferred:** WCAG AA contrast audit (Playwright contention), inter-page navigation (AD concern), zone token standardization (AD evaluation).

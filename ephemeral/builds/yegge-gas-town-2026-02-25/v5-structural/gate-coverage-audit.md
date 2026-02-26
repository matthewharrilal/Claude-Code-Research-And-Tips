# Gate Coverage Audit — Pipeline v5 Structural Analysis

**Date:** 2026-02-26
**Auditor:** Opus agent (gate-coverage-auditor)
**Sources:** gate-manifest.json (v4.2.0), gate-runner-core.js (2,809 lines), gate-runner-spec.md (300 lines)
**Historical reference:** Yegge Gas Town initial build PA-05 2.0/4 with ALL programmatic gates PASSING

---

## 1. Executive Summary

The gate system contains **56 gates** across 6 tiers. All 56 are accounted for in the manifest; **54 have executable code** in gate-runner-core.js. The 2 diagnostic gates (GR-33, GR-34) are documented but have no implementation. This is a **critical coverage gap** -- the manifest counts them toward the 56 total, but they produce no results and are excluded from GR-48 coverage checks.

**Key finding:** The gates are structurally sound for catching IDENTITY violations (wrong fonts, wrong colors, wrong container width) but WEAK at predicting PERCEPTUAL QUALITY. This matches the historical evidence: all gates passed for a PA-05 2.0/4 page. The gap is not in individual gate logic but in what the gates collectively DON'T measure.

---

## 2. Gate-by-Gate Verification

### 2.1 REQUIRED Gates (21) — Identity + Perception + Experiential + Meta

| Gate | In Code? | What It REALLY Checks | Tier Appropriate? | Gameable? |
|------|----------|----------------------|-------------------|-----------|
| **GR-01** | YES | `borderRadius !== '0px'` on ALL rendered elements | YES -- binary identity | NO -- zero tolerance |
| **GR-02** | YES | `boxShadow !== 'none'` on ALL rendered elements | YES -- binary identity | NO -- zero tolerance |
| **GR-03** | YES | `maxWidth` of container candidates between 940-960px | YES -- binary identity | LOW -- must use specific candidates (spine/container/wrapper/main/article/style maxWidth) |
| **GR-04** | YES | `backgroundImage` contains 'gradient' | YES -- binary identity | NO -- zero tolerance |
| **GR-05** | YES | Cold-color detection: B > R+10 AND B > G+10, with effective visibility > 20 | YES -- binary identity | LOW -- opacity manipulation could hide cold colors below visibility threshold |
| **GR-06** | YES | Font trinity (Instrument Serif, Inter, JetBrains Mono) via `document.fonts.check()`. All 3 present + no rendered violations | YES -- binary identity | LOW -- requires actual rendered fonts, not just CSS declarations |
| **GR-08** | YES | Standalone HRs (not adjacent to headings), empty spacer divs (height > 10), aria-hidden icon-only decorative elements | BORDERLINE -- heuristic, misses decorative pseudo-elements entirely | YES -- `::before`/`::after` decorative content invisible to this gate |
| **GR-09** | YES | Border weight hierarchy: 4px primary (3.5-4.5), 3px secondary (2.5-3.5), 1px tertiary (0.5-1.5). Requires primary + (secondary OR tertiary) | **SHOULD BE STRICTER** -- only requires 2 of 3 tiers. A page with ONLY 4px borders passes. | YES -- two borders at any 2 of 3 weight bands pass |
| **GR-10** | YES | 9 sub-checks: skip-link, heading hierarchy, callout 4px border, ::selection red, :focus-visible 3px, p max-width, body line-height >= 1.6, h3 italic, header DNA (dark bg + red 3px border) | **TOO MANY SUB-CHECKS** -- ALL must pass. Single missing skip-link = REBUILD verdict even if everything else is perfect | LOW -- each sub-check is specific |
| **GR-11** | YES | Adjacent zone background delta >= 15 RGB (max channel difference). Uses `section, [class*="zone"], [class*="section"]` selectors | YES -- proven threshold | **YES -- HIGHLY GAMEABLE** -- builder can use delta 16 everywhere and pass. See GR-19 for gaming detection. |
| **GR-13** | YES | CSS property sum (mb + pb + mt + pt) at section boundaries <= 120px | YES -- proven | MEDIUM -- builder can distribute spacing across many non-boundary elements instead |
| **GR-14** | YES | Visual gap (getBoundingClientRect) at section boundaries <= 150px. Structural transitions excluded. Parent-scoped selector `:scope >` | YES -- proven | MEDIUM -- structural transition exclusion is exploitable (add colored sibling between sections) |
| **GR-15** | YES | No single margin/padding value > 96px. Auto centering margins excluded. | YES -- proven | MEDIUM -- builder can stack 90px + 90px = 180px gap via two adjacent elements |
| **GR-44** | YES | Distance from last visible content to body scrollHeight <= 300px | YES | LOW -- fairly tight threshold |
| **GR-60** | YES | WCAG 2.1 AA contrast ratios (4.5:1 normal, 3:1 large). Uses ancestor background traversal. | YES -- factual check | NO -- robust implementation |
| **GR-61** | YES | `window.devicePixelRatio === 1`. Flags DPR > 1 for browser context recreation. | YES -- critical for screenshot accuracy | NO |
| **GR-62** | YES | Per viewport: >= 3 PNGs, <= 2 consecutive blanks, blank ratio <= 20%. Blank = file size < 5KB. | YES -- critical for PA input quality | LOW -- 5KB threshold is generous |
| **GR-63** | YES | `<!-- EXPERIENTIAL-CHECK: -->` comment with >= 100 chars, mentions legibility + visual clarity + structural ref + negative finding | **HIGHEST GAMING RISK** -- builder can template a fake self-check | **YES -- TRIVIALLY GAMEABLE** -- write "I checked legibility of the header zone section. Tables and charts are visually clear. However, I noticed the footer could be improved slightly" = instant pass with zero actual inspection |
| **GR-64** | YES | If >= 3/9 auditors flag usability, weaver Fix #1 must contain usability term. Auto-passes if < 3 flag. | YES | LOW -- runs post-PA, auditors are independent |
| **GR-48** | YES | All 20 REQUIRED gates have results + >= 5/14 RECOMMENDED | YES -- meta-enforcement | NO -- counts actual results |
| **GR-79** | YES | All iteration artifacts exist with correct suffix for cycle >= 2. Auto-passes for cycle 1. | YES | NO -- filesystem check |

### 2.2 RECOMMENDED Gates (14)

| Gate | In Code? | What It REALLY Checks | Tier Appropriate? | Gameable? |
|------|----------|----------------------|-------------------|-----------|
| **GR-07** | YES | Zero instances of pure black (0,0,0) or pure white (255,255,255) on visible text elements | COULD BE REQUIRED -- pure B/W is an identity violation | LOW |
| **GR-17** | YES | Content padding >= 12px (p, blockquote, callout), table cells >= 4px | YES | LOW |
| **GR-18** | YES | Zero sub-perceptual borders (< 0.5px), opacity (< 0.1), letter-spacing (< 0.025em) | **SHOULD BE REQUIRED** -- ghost mechanisms were THE failure mode in Flagship experiment | LOW -- catches sub-perceptual values reliably |
| **GR-20** | YES | < 3 consecutive sections with identical bg + padding + borderBottom | YES | MEDIUM -- change one property by 1px to break the echo |
| **GR-43** | YES | `<!-- SELF-EVALUATION: -->` comment exists | YES | YES -- trivially templated |
| **GR-45** | YES | >= 2 distinct H2 font-size bands (4px tolerance). Falls back to H2+H3 combined if < 3 H2s | YES | MEDIUM -- two H2s at 24px and 20px pass |
| **GR-49** | YES | Exactly 1 result file, no duplicate IDs, valid format | YES | NO -- meta-check |
| **GR-51** | YES | >= 50% of deltas >= 25 RGB, stddev >= 8, middle boundaries have high deltas | YES -- forces distribution, not floor-hugging | LOW -- multi-criteria |
| **GR-52** | YES | >= 3 distinct section height bands (50px tolerance) | YES | MEDIUM -- artificial section heights possible |
| **GR-67** | YES | All text in footer/last zone >= 11px | YES | LOW |
| **GR-78** | YES | `<!-- RESIDUAL: -->` comment >= 50 chars with >= 3/4 section keywords (preserved, changed, next, trade) | YES -- cycle >= 2 only | YES -- templatble |
| **GR-80** | YES | Auto-fills tracker iteration log table row with cycle metrics | YES -- WRITE gate | N/A -- utility, not pass/fail |
| **GR-82** | YES | Finding Status Map in weaver report for cycle >= 2 (table + FIXED/IMPROVED/UNCHANGED/REGRESSION) | YES | LOW -- requires weaver cooperation |
| **GR-83** | YES | >= 15 INTENT comments, >= 1 disposition narration. FAIL < 10, WARN 10-14, PASS 15-30, WARN > 30 | YES | YES -- templatable pattern |

### 2.3 ADVISORY Gates (10)

| Gate | In Code? | What It REALLY Checks | Tier Appropriate? | Gameable? |
|------|----------|----------------------|-------------------|-----------|
| **GR-05b** | YES | Sub-perceptual cold colors (effective visibility <= 20) | YES -- informational | N/A |
| **GR-19** | YES | >= 50% of bg deltas cluster at floor (15-17 RGB). Cross-checks with letter-spacing floor. | **SHOULD BE RECOMMENDED** -- floor-hugging is a confirmed gaming pattern | LOW |
| **GR-21** | YES | <= 6 distinct bg colors per 900px viewport slice | YES -- theoretical threshold | MEDIUM |
| **GR-22** | YES | Primary red used for borders/emphasis, not backgrounds (<= 2 bg uses). Skip-link excluded. | YES | LOW |
| **GR-46** | YES | >= 1 @media print rule | COULD BE DEMOTED OR REMOVED -- not quality-correlated | LOW |
| **GR-50** | YES | `<!-- CONVICTION: -->` comment >= 3 sentences | YES | YES -- templatable |
| **GR-53** | YES | Densest section is not first or last | YES -- theoretical | MEDIUM -- content placement is a design choice |
| **GR-55** | YES | >= 3 distinct CSS channel differences at each adjacent zone boundary | **SHOULD BE RECOMMENDED** -- multi-coherence is THE quality differentiator | LOW |
| **GR-66** | YES | >= 8 distinct component CSS classes | **SHOULD BE RECOMMENDED** -- component variety directly predicts richness | MEDIUM -- can add empty class containers |
| **GR-81** | YES | No predictive PA-05 language in weaver report | YES | LOW |

### 2.4 Brief Verification Gates (8)

| Gate | In Code? | What It REALLY Checks | Gameable? |
|------|----------|----------------------|-----------|
| **BV-01** | YES | Tier line budgets: T1 >= 10, T2 >= 5, T3 >= 32, T4 >= 26, ContentMap >= 19 (80% thresholds) | MEDIUM -- padding with blank lines |
| **BV-02** | YES | Background hex delta >= 15 RGB between consecutive hex values in "Zone Backgrounds" section | LOW -- catches planning-level delta violations |
| **BV-03** | YES | Recipe verbs (Build/Create/etc.) to checklist verbs (Verify/Fail if/etc.) ratio >= 3:1 | LOW -- but builder could game by adding recipe verbs |
| **BV-04** | YES | Zero suppressor patterns (sample range, raw prohibition, compliance voice, count-gate) | LOW -- specific pattern matching |
| **BV-05** | YES | All 9 dispositions (D-01 through D-09) have >= 1 keyword, hover vocabulary present, compression ratio <= 50:1 | MEDIUM -- keyword matching is shallow |
| **BV-06** | YES | Zero forbidden anti-regression phrases in MANIFEST.md and orchestrator. 7 patterns. | NO -- catches known regression phrases |
| **BV-07** | YES | Builder-facing input <= 2,500 lines total | NO -- line count |
| **BV-08** | YES | 6-dimension brief-output diff: zones (+-1), backgrounds (hex match), typography (+-1px/+-0.1/+-0.005em), components (synonym), metaphor (custom prop), disposition CSS (property presence). 80% threshold per dimension. | LOW -- most robust gate in the system |

### 2.5 Diagnostic + Utility (3)

| Gate | In Code? | What It REALLY Checks |
|------|----------|----------------------|
| **GR-33** | **NO CODE** | CSS Naming Mode (position-based vs concept-based) -- SPEC ONLY |
| **GR-34** | **NO CODE** | Component Modulation (same component varies across zones) -- SPEC ONLY |
| **A-03** | YES | 3+ consecutive screenshots < 5KB per viewport |

---

## 3. Coverage Gaps — What SHOULD Be Checked But ISN'T

### 3.1 CRITICAL GAPS (directly correlate with PA-05 score)

| Gap ID | What's Missing | Impact | Why It Matters |
|--------|---------------|--------|----------------|
| **GAP-01** | **Total page whitespace percentage** | CRITICAL | The ceiling experiment had 70-80% blank cream. No gate measures total whitespace-to-content ratio. GR-13/14 only check BOUNDARIES, not MID-SECTION voids. |
| **GAP-02** | **Border presence/variety** | CRITICAL | Flagship FAILED with zero visible borders. GR-09 checks weight HIERARCHY but not border COUNT. A page with 2 borders at 4px and 1px passes. |
| **GAP-03** | **Typography distinctness (not just variation)** | HIGH | GR-45 checks H2 font-size bands. But the Flagship had ALL elements at 16px/400 except headings. No gate checks body text vs. callout text vs. table text differentiation. |
| **GAP-04** | **Background perceptibility** | HIGH | GR-11 checks delta >= 15 RGB. But backgrounds differing by 1-8 RGB points BETWEEN non-adjacent elements are invisible. No gate checks whether backgrounds are PERCEPTUALLY DISTINCT (human perception needs ~25 RGB to notice without side-by-side comparison). |
| **GAP-05** | **Content density per zone** | HIGH | No gate checks whether a zone has meaningful content or is mostly empty space. A zone with 3 paragraphs in a 600px box vs. 1 sentence in a 600px box are treated identically. |
| **GAP-06** | **Mechanism count** | HIGH | The tier model specifies 8-10 mechanisms for MIDDLE, 12-15 for CEILING, 16-18 for FLAGSHIP. No gate counts actual CSS mechanisms used. GR-55 (multi-coherence) is the closest proxy but only measures channels at boundaries. |
| **GAP-07** | **Emotional arc / surprise detection** | MEDIUM | D-04 (surprise/inversion) is the hardest disposition to verify programmatically. No gate detects whether a page has a scale break, mid-page inversion, or crescendo pattern. GR-53 (density arc) is a weak proxy. |

### 3.2 MODERATE GAPS

| Gap ID | What's Missing | Impact |
|--------|---------------|--------|
| **GAP-08** | Hover state quality | MEDIUM -- BV-05 checks hover KEYWORDS in brief, no gate checks actual :hover CSS |
| **GAP-09** | Responsive layout adaptation | MEDIUM -- core gates re-run at 768px but don't check for MEANINGFUL layout changes (e.g., grid collapsing to single column) |
| **GAP-10** | Component internal quality | MEDIUM -- GR-66 counts component CLASSES but not component RENDERING (a .data-table with no borders, no spacing, no hover states passes) |
| **GAP-11** | Inter-zone content flow | LOW -- no gate checks whether zone ORDER makes narrative sense for the source content |

---

## 4. Perceptual Quality Correlation Analysis

### 4.1 Historical Evidence: ALL Gates PASS, PA-05 2.0/4

The initial Yegge Gas Town build (pre-REFINE) passed ALL programmatic gates while scoring PA-05 2.0/4. This is the single most important data point for evaluating gate quality.

**What passed that shouldn't have (false confidence):**
- GR-11 (Background Delta): All deltas >= 15 RGB, but the page felt monotone because deltas were 15-18 (floor-hugging). GR-19 should have caught this as GAMING, but GR-19 is ADVISORY so it didn't block.
- GR-55 (Multi-Coherence): Boundaries technically had 3+ channel differences, but the differences were sub-perceptual (e.g., letter-spacing 0.01em vs 0.02em counts as a "different channel").
- GR-13/14 (Stacked Gaps): Individual boundaries passed but MID-SECTION whitespace created dark zone fatigue.
- GR-63 (Experiential Marker): Builder wrote an EXPERIENTIAL-CHECK comment without genuine engagement.

### 4.2 Gate Correlation Ranking

**HIGHEST correlation with perceptual quality (gates whose FAIL reliably predicts poor PA-05):**

1. **BV-08** (Brief-Output Diff) -- Most predictive. Dropped specs = dropped quality.
2. **GR-51** (Bg Delta Distribution) -- Forces variation, not floor-hugging. stddev >= 8 requirement is meaningful.
3. **GR-60** (WCAG Contrast) -- Illegibility is immediately perceptible.
4. **GR-18** (Ghost Mechanisms) -- Sub-perceptual CSS = wasted budget that could have been visible.
5. **GR-09** (Border Weight Hierarchy) -- Border system presence/absence correlates with structure perception.

**LOWEST correlation with perceptual quality (gates that PASS for bad pages):**

1. **GR-46** (Print Stylesheet) -- Zero correlation with visual quality. Purely accessibility/completeness.
2. **GR-50** (Conviction Statement) -- Easily templated. Content of conviction doesn't predict output quality.
3. **GR-43** (Self-Evaluation Comment) -- Same as GR-50. Template compliance, not quality evidence.
4. **GR-63** (Experiential Marker) -- Templatable. No way to verify the builder actually performed the check.
5. **GR-08** (No Decorative Elements) -- Catches a narrow class of violations. Missing `::before`/`::after` entirely.

---

## 5. Gaming Analysis — Trivially Gameable Gates

### 5.1 Template-Gameable (builder writes boilerplate that passes)

| Gate | Template That Passes | Risk |
|------|---------------------|------|
| GR-63 | `<!-- EXPERIENTIAL-CHECK: I verified the legibility of all header and footer zones. Charts and tables are visually clear with adequate font sizes. However, the secondary navigation text could benefit from slightly larger sizing to improve readability at arm's length. The structural sections flow well from introduction through analysis to conclusion. -->` | HIGH -- this 100+ char comment passes all 5 sub-checks (legibility, visual clarity, structural ref, negative finding, length) without ANY actual inspection |
| GR-43 | `<!-- SELF-EVALUATION: The page implements the specified metaphor with appropriate restraint. -->` | MEDIUM |
| GR-50 | `<!-- CONVICTION: My compositional approach centers on the structural metaphor of X. The emotional arc builds through progressive density. I chose restraint over spectacle to honor the content's authority. -->` | MEDIUM |
| GR-78 | `<!-- RESIDUAL: I preserved the core zone structure and color palette. I changed the typography hierarchy and spacing rhythm. Next iteration could refine hover states. The tradeoff was sacrificing variety for coherence. -->` | MEDIUM |
| GR-83 | 17 INTENT comments following the template pattern = instant PASS without genuine narration | MEDIUM |

### 5.2 Threshold-Gameable (meeting the letter but not the spirit)

| Gate | Gaming Strategy | Risk |
|------|----------------|------|
| GR-11 | Set all zone backgrounds to exactly 16 RGB apart. Passes GR-11 (>= 15). Even passes GR-19 if not > 50% at floor. Perceptually: near-identical zones. | HIGH |
| GR-09 | Use exactly 2 borders: one at 4px, one at 1px. Passes hierarchy check. Perceptually: almost no visible border system. | HIGH |
| GR-55 | Change background + font-size + padding at every boundary. Three channels differ. But font-size differs by 0.5px and padding by 2px = invisible differences that count as channels. | HIGH |
| GR-45 | Two H2s: one at 24px, one at 20px. Passes "2 distinct bands." Perceptually: minimal variation. | MEDIUM |

---

## 6. D3 (Voluntary Non-Execution) Vulnerability Map

**D3 crack dimension:** Which gates could be skipped without detection?

| Gate | Skippable? | Detection Mechanism | D3 Defense |
|------|-----------|---------------------|------------|
| BV-01 through BV-05 | YES -- if orchestrator skips brief verification phase | GR-48 does NOT check BV gates in REQUIRED list | **D3 VULNERABLE** -- BV gates are not in GR-48's coverage array |
| BV-06 | YES -- runs at pipeline startup, not tracked by GR-48 | None | **D3 VULNERABLE** |
| BV-07 | YES -- pre-build check, not tracked by GR-48 | None | **D3 VULNERABLE** |
| BV-08 | YES -- post-build text check, not in GR-48 REQUIRED | None beyond GR-48 RECOMMENDED count | **D3 VULNERABLE** |
| GR-01 through GR-15 | NO for each individually | GR-48 checks all 20 REQUIRED gates by ID | D3 DEFENDED |
| GR-44, GR-60 | NO | GR-48 | D3 DEFENDED |
| GR-61, GR-62 | NO | GR-48 | D3 DEFENDED |
| GR-63, GR-64 | NO | GR-48 | D3 DEFENDED |
| GR-79 | NO | GR-48 | D3 DEFENDED |
| GR-48 itself | **STRUCTURALLY IMPOSSIBLE TO SKIP** | B-01 wrapper calls runMetaGates automatically | D3 DEFENDED by architecture |
| GR-17-22 (Anti-pattern) | YES -- RECOMMENDED, GR-48 only requires 5/14 RECOMMENDED | Partial: GR-48 counts presence but allows 9 missing | **D3 PARTIALLY VULNERABLE** |
| GR-33, GR-34 | **ALREADY SKIPPED** -- no executable code | Not tracked anywhere | **D3 FULLY VULNERABLE** (but low impact: DIAGNOSTIC only) |

**Critical D3 finding:** The entire BV gate suite (8 gates) runs OUTSIDE GR-48's enforcement. An orchestrator that skips `runBriefVerification()` and `checkBriefOutputDiff()` will not trigger any FAIL. BV-06 is especially critical -- it prevents pipeline regression -- and has no backup enforcement.

---

## 7. Tier Reclassification Recommendations

### 7.1 Promote to REQUIRED

| Gate | Current | Proposed | Rationale |
|------|---------|----------|-----------|
| GR-18 | RECOMMENDED | REQUIRED | Ghost mechanisms were THE dominant Flagship failure mode. Sub-perceptual CSS wastes budget and produces 1.5/4 PA-05. |
| GR-55 | ADVISORY | RECOMMENDED | Multi-coherence is the strongest quality predictor outside BV-08. Boundaries with < 3 PERCEPTIBLE channels indicate flat design. |
| GR-19 | ADVISORY | RECOMMENDED | Floor-hugging (all deltas 15-17) is a confirmed gaming pattern from the Gas Town initial build. |
| GR-66 | ADVISORY | RECOMMENDED | Component variety directly predicts richness tier. < 8 components = FLOOR tier. |

### 7.2 Consider Demotion or Removal

| Gate | Current | Proposed | Rationale |
|------|---------|----------|-----------|
| GR-46 | ADVISORY | REMOVE | Print stylesheet has zero correlation with visual quality. Adds compliance burden with no quality signal. |
| GR-33, GR-34 | ADVISORY (DIAGNOSTIC) | IMPLEMENT OR REMOVE | Currently ghost gates -- counted in the 56 total but produce no results. Either write code or stop counting them. |

### 7.3 Strengthen Existing Gates

| Gate | Current Threshold | Proposed | Rationale |
|------|------------------|----------|-----------|
| GR-09 | 2 of 3 weight tiers | ALL 3 tiers (4px + 3px + 1px) | Two borders is insufficient for "hierarchy" |
| GR-11 | >= 15 RGB delta | >= 20 RGB delta for REQUIRED, keep 15 for GR-19 gaming detection | 15 is perceptual floor; 20 is perceptual threshold |
| GR-55 | >= 3 channels per boundary | Add PERCEPTIBILITY requirement: font-size diff >= 2px, letter-spacing diff >= 0.5px, padding diff >= 8px | Sub-perceptual channel differences should not count |
| GR-63 | Keyword presence + length | Add uniqueness check: text must not match any known template. Or: require SPECIFIC zone/section names from the HTML. | Template-matching is trivially gameable |

---

## 8. New Gates Recommended

| Proposed ID | Name | Tier | What It Checks | Addresses Gap |
|-------------|------|------|---------------|---------------|
| GR-84 | Total Whitespace Ratio | REQUIRED | Scroll through page in 900px slices. If > 40% of any 2+ consecutive slices are single-color background with no content: FAIL | GAP-01 |
| GR-85 | Border Count + Distribution | RECOMMENDED | Count total visible borders (width > 0, height > 0). Require >= 8 borders distributed across >= 3 zones | GAP-02 |
| GR-86 | Typography Differentiation | RECOMMENDED | Count distinct (font-size, font-weight, font-family) tuples across semantic roles (h2, h3, p, table, callout, blockquote). Require >= 5 distinct tuples. | GAP-03 |
| GR-87 | Mechanism Density Proxy | ADVISORY | Count distinct CSS properties actually varying across zones (beyond background): borders, shadows-none, font changes, padding, letter-spacing, transforms. Require >= 8 distinct varying properties. | GAP-06 |
| GR-88 | BV Coverage Enforcement | META | Verify BV-01 through BV-08 results are present in the gate result set. Auto-fail if any BV gate was skipped. | D3 vulnerability in BV suite |

---

## 9. Cross-Reference: Gates vs PA-05 Failure Modes

Mapping the 48 PA questions to gate coverage. PA questions that NO gate addresses:

| PA Question Area | Covered by Gates? | Gap |
|-----------------|-------------------|-----|
| Emotional impact / delight | NO | No gate measures emotional response |
| Compositional intelligence | PARTIAL -- GR-55 (channels), GR-53 (density arc) | No gate measures intentionality or purposeful variation |
| Metaphor structural integration | NO -- GR-50 checks CONVICTION text, not CSS embodiment | Metaphor in CSS custom properties checked only in BV-08 |
| Reading rhythm / pacing | NO | No gate measures line-by-line reading experience |
| Information hierarchy clarity | PARTIAL -- GR-45 (H2 variation), GR-09 (border hierarchy) | No gate measures whether hierarchy COMMUNICATES content importance |
| Hover/interaction delight | NO -- BV-05 checks keywords only | No gate measures hover CSS quality |
| Dark zone fatigue | PARTIAL -- GR-20 (structural echo), A-03 (blank screenshots) | Neither specifically detects "6/10 auditors report fatigue" |

---

## 10. Conclusions

### 10.1 The Fundamental Gate Limitation

Gates verify COMPLIANCE, not QUALITY. The entire gate system answers: "Did the builder follow the rules?" But PA-05 answers: "Does this page feel like it was designed with intention?" These are orthogonal questions.

A builder can achieve 100% gate compliance with:
- Container at 950px (GR-03 PASS)
- All backgrounds exactly 16 RGB apart (GR-11 PASS, GR-19 PASS)
- Two borders at 4px and 1px (GR-09 PASS)
- Three fonts present (GR-06 PASS)
- All text at 4.5:1 contrast (GR-60 PASS)
- Template EXPERIENTIAL-CHECK comment (GR-63 PASS)
- Result: PA-05 1.5-2.0/4 (FLOOR tier)

**The gate system catches FLOOR violations but cannot distinguish MIDDLE from CEILING from FLAGSHIP.** This is by design -- binary gates achieve 100% compliance but cannot measure judgment. The gap must be filled by PA auditors, not more gates.

### 10.2 What Gates CAN Do Better

1. **Close D3 vulnerability:** Add GR-88 to enforce BV gate execution.
2. **Promote GR-18 to REQUIRED:** Ghost mechanisms are the single most preventable failure mode.
3. **Add perceptibility thresholds to GR-55:** Sub-perceptual channel differences are noise, not signal.
4. **Add GR-84 (whitespace ratio):** The ONE programmatically-detectable failure that 100% correlates with poor PA-05.
5. **Implement or remove GR-33/GR-34:** Ghost gates erode trust in the manifest count.

### 10.3 Summary Statistics

| Category | Count | Has Code | Notes |
|----------|-------|----------|-------|
| REQUIRED | 21 | 21/21 | All implemented |
| RECOMMENDED | 14 | 14/14 | All implemented |
| ADVISORY | 10 | 8/10 | GR-33, GR-34 have NO code |
| BRIEF | 8 | 8/8 | All implemented but D3-vulnerable |
| UTILITY | 1 | 1/1 | A-03 |
| DIAGNOSTIC | 2 | 0/2 | GR-33, GR-34 spec-only |
| **TOTAL** | **56** | **52/56** | 4 gates without executable verification |

**Trivially gameable gates:** 5 (GR-63, GR-43, GR-50, GR-78, GR-83)
**D3-vulnerable gate suites:** BV-01 through BV-08 (entire brief verification pipeline)
**Gates recommended for tier promotion:** 4 (GR-18, GR-55, GR-19, GR-66)
**New gates recommended:** 5 (GR-84, GR-85, GR-86, GR-87, GR-88)

---

*Report generated from exhaustive line-by-line review of gate-runner-core.js (2,809 lines), cross-referenced against gate-manifest.json (343 lines) and gate-runner-spec.md (300 lines).*

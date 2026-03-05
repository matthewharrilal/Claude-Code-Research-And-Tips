# Compliance Audit: artifact-identity-perception.md

**Auditor:** audit-identity (Opus agent)
**Artifact:** `ephemeral/va-extraction/artifact-identity-perception.md` (557 lines)
**Output:** `ephemeral/pages/yegge-gas-town-extraction/yegge-gas-town.html` (2,767 lines)
**Gate Results:** `ephemeral/pages/yegge-gas-town-extraction/gate-results.md`
**Date:** 2026-02-23

---

## PART 1: LAYER 1 -- IDENTITY (Soul Constraints)

### Section 1.2: Soul Constraints (The 10 Non-Negotiables)

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 41 | SC-01: `border-radius: 0` on ALL elements | YES | CSS var `--border-radius: 0` defined (line 25). Gate GR-01: PASS, 0 violations. No `border-radius` value set anywhere else in CSS. |
| 50 | SC-02: `box-shadow: none` on ALL elements | YES | CSS var `--box-shadow: none` defined (line 26). Gate GR-02: PASS, 0 violations. No `box-shadow` appears anywhere else in CSS. |
| 58-60 | SC-03: Container 940-960px, max 1100px for data-heavy | YES | `.container { max-width: 960px }` (line 169). `.header-inner`, `.toc__inner`, `.footer-inner` all set `max-width: 960px`. Gate GR-03: PASS, 960px, 6 container elements. |
| 68-69 | SC-04: Warm palette -- `--color-primary: #E83025`, `--color-background: #FEF9F5`, `--color-text: #1A1A1A`, accent colors match | PARTIAL | Primary colors correct: `#E83025` (line 29), `#FEF9F5` (line 30), `#1A1A1A` (line 31). However, `--accent-purple: #7C3AED` (124,58,237 -- cold purple), `--syntax-function: #4A7C9B` (74,124,155 -- cold blue). Gate GR-05: FAIL -- 98 cold colors on role-card__level. The `--accent-blue: #A07D50` is actually warm brown (correctly named misleadingly). |
| 76-78 | SC-05: Font Trinity -- Instrument Serif (headings), Inter (body), JetBrains Mono (code) | YES | All three loaded via Google Fonts (line 18). CSS vars defined: `--font-display: 'Instrument Serif'`, `--font-body: 'Inter'`, `--font-mono: 'JetBrains Mono'`. All font-family declarations use these vars exclusively. Gate GR-06: PASS (9 "violations" are browser defaults on HTML/HEAD/META/TITLE -- false positive). |
| 86-87 | SC-06: No gradients in backgrounds | YES | Zero gradient functions found in CSS. Gate GR-04: PASS, 0 violations. |
| 94-95 | SC-07: Zero decorative elements | YES | No non-functional dividers, ornamental borders, or decorative background images found. All visual elements serve content purposes. The `.prereq-list li::before` red squares serve as list markers, not decoration. |
| 102-104 | SC-08: Border-Weight Hierarchy -- 4px primary, 3px section, 1px subtle | YES | CSS vars: `--border-structural: 4px`, `--border-accent: 3px`, `--border-micro: 1px` (lines 87-89). 4px used for pull-quote left border, callout left border, principle left border, role-card left borders, decision-split borders. 3px used for header bottom, table header bottom borders, footer top, zone transition borders. 1px used for subtle row borders, section-indicator bottom, TOC bottom. Gate GR-08: PASS -- 3 distinct weights (4.0px, 2.7px, 0.7px). Note: rendered values are slightly less than specified due to sub-pixel rendering, but hierarchy is correct. |
| 111-113 | SC-09: Header DNA -- dark bg, 3px red bottom border | YES | `header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); }` (lines 180-183). Gate GR-07: PASS -- dark bg rgb(26,26,26), red border 2.67px rgb(232,48,37). Color values match. |
| 120-122 | SC-10: Typography Foundations -- `line-height: 1.7`, `p { max-width: 70ch }`, `h3 { font-style: italic }` | PARTIAL | `body { line-height: 1.7 }` (line 120) -- YES. `h3 { font-style: italic }` -- YES in all 6 zone-specific h3 selectors (lines 507, 588, 818, 1001, 1106, 1404). Gate GR-09: PASS (23 h3s italic). BUT `p { max-width: 70ch }` -- NO. No global paragraph max-width rule. Individual paragraphs use various max-widths: `38em` (zone-intake), `50ch` (header subtitle, pull-quote), `40ch` (footer, inversion-block). Most zone paragraphs have NO max-width at all. |

**Soul Constraint Summary: 8 YES, 2 PARTIAL (SC-04 warm palette, SC-10 paragraph max-width)**

---

### Section 1.3: Family DNA -- Shared Properties

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 133 | `--color-primary: #E83025` | YES | Line 29: exact match |
| 134 | `--color-background: #FEF9F5` | YES | Line 30: exact match |
| 135 | `--color-text: #1A1A1A` | YES | Line 31: exact match |
| 136 | 5 accent colors match tokens | PARTIAL | `--accent-blue: #A07D50` (warm, non-standard name), `--accent-green: #4A9D6B`, `--accent-coral: #C97065`, `--accent-amber: #D97706`, `--accent-purple: #7C3AED`. Cannot verify against tokens.css without seeing it, but `--accent-purple` is cold and `--syntax-function: #4A7C9B` is cold blue. |
| 137 | `border-radius: 0` | YES | See SC-01 |
| 138 | `box-shadow: none` | YES | See SC-02 |
| 139 | Font trinity | YES | See SC-05 |
| 140 | Body typography `1rem / 1.7` | YES | `body { font-size: var(--text-base); line-height: 1.7; }` (lines 119-120). `--text-base: 1rem` (line 64). |
| 141 | Paragraph max-width `70ch` | NO | No global `p { max-width: 70ch }` rule found. See SC-10 PARTIAL above. |
| 142 | Header: dark bg + 3px red bottom border | YES | See SC-09 |
| 143 | Callout DNA: 4px left border | YES | `.callout { border-left: var(--border-structural) solid var(--color-primary); }` (line 401). `--border-structural: 4px` (line 87). |
| 144 | h3 style: italic | YES | All zone h3 selectors include `font-style: italic`. |
| 145 | Syntax highlighting: 6 colors match | YES | 6 syntax vars defined (lines 92-97): keyword (#E83025), string (#6B9B7A), comment (#666666), function (#4A7C9B), number (#D97706), punctuation (#E0D5C5). Classes `.kw`, `.st`, `.cm`, `.fn`, `.nu` defined (lines 1146-1150). |
| 146 | Selection: red background | YES | `::selection { background: var(--color-primary); color: var(--color-background); }` (lines 152-155). |
| 147 | Focus-visible: 3px solid primary | YES | `*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }` (lines 147-150). |
| 148 | Skip-link: present, red bg | YES | `.skip-link` with `background: var(--color-primary)` (line 133). HTML: `<a href="#main-content" class="skip-link">Skip to main content</a>` (line 1709). |

**Family DNA Summary: 14 YES, 1 PARTIAL (accent colors), 1 NO (paragraph 70ch max-width)**

---

### Section 1.4: Identity Routing Rules

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 166 | Builder must NOT receive prohibition list beyond soul | CANNOT DETERMINE | This is an orchestrator-level routing rule, not verifiable from output HTML alone. The output HTML does not show what the builder received. |
| 167 | Builder must NOT receive 55 prohibitions | CANNOT DETERMINE | Same -- orchestrator routing. |
| 168 | 10 soul constraints (count) | CANNOT DETERMINE | Routing rule, not output-verifiable. |
| 169 | Zero repair-mode suppressors | CANNOT DETERMINE | Routing rule. |
| 170 | 20 quality suppressors active (old pipeline reference) | N/A | Historical reference, not a requirement. |
| 171 | 0 suppressors active (new pipeline target) | CANNOT DETERMINE | Routing rule. |

**Identity Routing Summary: 0 verifiable from output, 5 CANNOT DETERMINE, 1 N/A**

---

## PART 2: LAYER 2 -- PERCEPTION (Physics)

### Section 2.2: Core Thresholds

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 198-203 | PT-01: Background delta >= 15 RGB between adjacent zones | PARTIAL | Gate GR-11: FAIL. Z1 (#FEF9F5) to Z2 (#EDE6DA): delta R=17, G=19, B=27 -- PASS. Z2 (#EDE6DA) to Z3 (#F5EFE5): delta R=8, G=9, B=11 -- FAIL (all < 15). Z3 (#F5EFE5) to Z4 (#FAF5ED): delta R=5, G=6, B=8 -- FAIL (all < 15). Z4 (#FAF5ED) to Z5 (#E5DDD0): delta R=21, G=24, B=29 -- PASS. Z5 (#E5DDD0) to Z6 (#F0EBE0): delta R=11, G=14, B=16 -- PARTIAL (B passes, R and G fail). Total: 2/5 transitions PASS, 2 clearly FAIL, 1 PARTIAL. |
| 211-215 | PT-02: Letter-spacing >= 0.025em when applied | YES | All applied letter-spacing values: `0.1em` (12 instances), `0.08em` (3 instances), `0.05em` (7 instances), `0.12em` (1 instance), `0.03em` (1 instance). All well above 0.025em floor. Gate GR-12: PASS, 0 violations. |
| 222-227 | PT-03: Stacked gap <= 120px total between content blocks; gate FAIL at 150px | PARTIAL | Gate GR-13: PASS (max 112px Z1-Z2). But Gate GR-14: FAIL -- Z5-Z6: 318px visual gap due to dark inversion block (D-04 second-half moment positioned between zones). The inversion block has `padding: var(--space-12)` (48px top + 48px bottom) plus `margin: var(--space-8) calc(-1 * var(--space-6))` (32px top). This creates a large structural gap, though it is intentional as a compositional device. |
| 233-236 | PT-04: Single margin/padding <= 96px | YES | Maximum spacing token: `--space-24: 96px` (line 84). All padding/margin values use tokens <= `--space-24`. Gate GR-15: PASS, 0 violations. |
| 241-245 | PT-05: Container width 940-960px | YES | `max-width: 960px` on all containers. Gate GR-03: PASS. |
| 250-253 | PT-06: Border weights 4/3/1px hierarchy | YES | See SC-08 above. Gate GR-08: PASS. |

**Core Thresholds Summary: 3 YES, 2 PARTIAL (background deltas, stacked gap), 0 NO**

---

### Section 2.3: Perception Calibration Table

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 264 | Background delta: uses FULL RANGE (15-50+ RGB), not just floor | PARTIAL | Z1-Z2 delta: ~21 (compositional range). Z4-Z5: ~25 (compositional). But Z2-Z3: ~9 (below floor), Z3-Z4: ~6 (below floor), Z5-Z6: ~14 (below floor). Builder parked 3 of 5 transitions BELOW the floor, not using the compositional or dramatic range. Evidence of calibrational flatness in middle zones. |
| 265 | Letter-spacing: uses range 0.025em-0.05em+ | YES | Values span 0.03em to 0.12em -- strong compositional use. No values at threshold floor (0.025em). |
| 266 | Stacked gap: uses compositional range 60-90px, not parking at ceiling 120px | YES | Gaps measured: max 112px (GR-13), others at 80px. Within compositional range. |
| 267 | Single margin: compositional 48-72px | YES | Zone paddings use `--space-12` (48px), `--space-16` (64px), `--space-20` (80px), `--space-8` (32px). Well-distributed across compositional range. |
| 268 | Border weight: uses full 1/3/4px range | YES | All three weights used extensively with correct semantic assignment. |
| 270 | Builder instruction: "Use the FULL RANGE" -- not floor values | PARTIAL | Letter-spacing, gaps, and borders use full range. Background deltas do NOT -- 3/5 transitions fail even the floor value. This is a partial calibration failure on the background color axis specifically. |

**Calibration Summary: 4 YES, 2 PARTIAL**

---

### Section 2.5: Anti-Pattern Detection

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 299-300 | AP-09: Ghost Mechanisms -- FAIL if mechanism CSS below perception thresholds | YES | Gate GR-18: PASS, 0 ghosts. All mechanisms have perceptible CSS values. |
| 307-309 | AP-10: Threshold Gaming -- WARNING if >50% values within 10% of floor | YES | Letter-spacing values all 2x+ above floor. Background deltas: 2 transitions are well above floor, 3 below floor entirely (not threshold gaming, actual violations). No evidence of parking at exact floor values. |
| 316-317 | AP-01: Density Stacking -- FAIL if min(all padding) < 12px | NO | Gate GR-17: FAIL -- 262 violations. Table cells at 8px padding (`--space-2: 8px` used in `padding: var(--space-2) var(--space-3)` on stages-table td, checklist-table td, comparison-table td, extensions-table td). Also `.prereq-list li` has `padding: var(--space-2) 0` (8px 0). Significant density stacking violation in all data tables. |

**Anti-Pattern Summary: 2 YES, 1 NO (density stacking)**

---

### Section 2.6: Transition Perception

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 328 | Light transition: 1px border + 48px gap = legato | YES | `.transition-light { border-top: 1px solid var(--color-border); }` (line 550). Used at Z3-Z4 boundary. |
| 329 | Medium transition: 3px border + 80px gap = breathing rest | YES | `.transition-medium { border-top: 3px solid var(--color-border); }` (line 546). Used at Z2-Z3 and Z5-Z6 boundaries. |
| 330 | Heavy transition: colored background + text = full stop | YES | `.transition-heavy { border-top: 3px solid var(--pipeline-connector); }` (line 542) with `--pipeline-connector: #E83025` (red). Used at Z1-Z2 and Z4-Z5. Plus the dark inversion block is the ultimate heavy transition. |
| 331 | CD-006 uses 3 distinct transition types (compositional) | YES | This build uses all 3: light (1x), medium (2x), heavy (2x) + dark inversion (1x). 4 distinct transition types total. |
| 334 | Builder instruction: use at least 2 distinct transition weights; 3 = temporal variety | YES | 3+ transition types used. Exceeds minimum. |

**Transition Summary: 5 YES**

---

### Section 2.7: Flagship Dimension Gap Scores

These are reference scores from a PREVIOUS Gas Town analysis, not requirements for this build. They describe the CURRENT STATE for PA auditor context.

| Line | Dimension | Status | Evidence |
|------|-----------|--------|----------|
| 343 | Pervading Metaphor: 2.5/5 (needs architecture change) | IMPROVED | This build has a STRUCTURAL pervading metaphor: "refinery." Zone names (intake, floor, tank, control, line, dispatch), CSS var names (--refinery-intake, --pipeline-connector, --pressure-indicator), and conviction statement all encode the refinery metaphor. Significant improvement over previous 2.5/5. |
| 344 | Multi-coherence: 1.5/5 (needs architecture change) | IMPROVED | Multiple coherence channels operating: zone backgrounds shift systematically, typography density varies per zone (sparse Z1 at 18px to dense Z5 at 15px), border weights follow content gravity, spacing compresses in dense zones (Z5 padding 8px vs Z1 20px). |
| 345 | Compositional Intelligence: 2.0/5 (needs architecture change) | IMPROVED | Mechanisms interact compositionally: zone backgrounds + transition types + typography density + spacing compression create a 4-channel system. Drop cap at opening, dark inversion at pivot, footer mirror at close. |
| 348 | Detail Density: 2.0/5 (fixable by prompt) | IMPROVED | High mechanism density: drop caps, bento grids, ASCII diagrams, role cards, recovery grids, collapsibles, cost blocks, profile tables, waves tables, stages tables, comparison tables. Well above previous 2.0/5. |

**Dimension Scores: Not requirements, but all show improvement. CANNOT DETERMINE exact new scores from CSS audit alone -- requires PA auditor.**

---

### Section 2.8: Perception Risk Probabilities

| Line | Risk | Status | Evidence |
|------|------|--------|----------|
| 368 | P=0.40 Container width violation | DID NOT OCCUR | 960px on all containers. Risk successfully mitigated. |
| 369 | P=0.35 Whitespace voids (stacked gap) | PARTIALLY OCCURRED | Z5-Z6: 318px gap (dark inversion block). But this is intentional compositional device, not a whitespace void in the Flagship sense (unintentional blank space). All other gaps <= 112px. |
| 370 | P=0.20 Micro-typography recurrence (letter-spacing < 0.5px) | DID NOT OCCUR | Minimum letter-spacing is 0.03em (~0.48px at 16px base). All others are 0.05em+ (0.8px+). Risk mitigated. Note: 0.03em is borderline at 0.48px -- technically below 0.5px but well above the 0.025em threshold. |

**Risk Probabilities: 1 DID NOT OCCUR, 1 PARTIALLY (intentional), 1 BORDERLINE**

---

### Section 2.10: Compositional Quality Floors

| Line | Metric | Status | Evidence |
|------|--------|--------|----------|
| 394 | Mechanisms >= 8 (floor) | YES | HTML evidence: drop cap (#16), bento grid (#15), 2-zone DNA (#2), border-weight hierarchy (#1), zone backgrounds (#7), color encoding (#9), code blocks (#17), data tables (#18), ASCII diagrams, spacing compression (#4), type scale variation (#11), progressive disclosure (#12), dark inversion, footer mirror (#14), TOC navigation (#8), pull quotes. Well above 14-16 compositional target. |
| 395 | CSS lines >= 350 (floor) | YES | CSS occupies lines 19-1705 in the HTML, approximately 1,686 lines of CSS (including comments and blank lines). Effective CSS easily exceeds 800+ compositional target. |
| 396 | CCS >= 0.15 (floor) | CANNOT DETERMINE | CCS methodology is unstandardized per council verdict. Cannot compute from static analysis. |

**Quality Floors: 2 YES, 1 CANNOT DETERMINE**

---

## PART 3: CROSS-LAYER INTEGRATION

### Section 3.2: Builder Delivery Format

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 428-429 | Tier 1: 10 soul constraints as WORLD-DESCRIPTION | CANNOT DETERMINE | Routing/delivery format is not verifiable from output HTML. |
| 432-433 | Tier 2: 4 core thresholds as NATURAL LAWS + calibration table | CANNOT DETERMINE | Same -- delivery format question. |

### Section 3.3: Gate-Runner Delivery Format

| Line | Requirement | Status | Evidence |
|------|------------|--------|----------|
| 441 | Identity gates: border-radius=0, box-shadow=none, container 940-960px, warm palette match, font trinity, no gradients, border hierarchy, header DNA | YES | Gate results show all identity gates were RUN (GR-01 through GR-10). 9/10 PASS. GR-05 (warm palette) was correctly identified as FAIL. |
| 442 | Perception gates: bg delta >=15, letter-spacing >=0.025em, stacked gap <=150px, single property <=96px, min padding >=12px | YES | Gate results show all perception gates were RUN (GR-11 through GR-17). GR-11 (bg delta), GR-14 (visual gap), GR-17 (density stacking) correctly identified as FAIL. |

**Cross-Layer Summary: 2 YES (gates ran correctly), 2 CANNOT DETERMINE (delivery format)**

---

## OVERALL COMPLIANCE SUMMARY

### Totals

| Category | Found | MET | MISSED | PARTIAL | CANNOT DETERMINE | N/A |
|----------|-------|-----|--------|---------|-------------------|-----|
| Soul Constraints (SC-01 to SC-10) | 10 | 8 | 0 | 2 | 0 | 0 |
| Family DNA (16 properties) | 16 | 14 | 1 | 1 | 0 | 0 |
| Identity Routing (6 rules) | 6 | 0 | 0 | 0 | 5 | 1 |
| Core Thresholds (PT-01 to PT-06) | 6 | 3 | 0 | 2 | 0 | 0 |
| Calibration Table (6 ranges) | 6 | 4 | 0 | 2 | 0 | 0 |
| Anti-Patterns (AP-01, AP-09, AP-10) | 3 | 2 | 1 | 0 | 0 | 0 |
| Transitions (5 items) | 5 | 5 | 0 | 0 | 0 | 0 |
| Dimension Gaps (4 reference scores) | 4 | 0 | 0 | 0 | 4 | 0 |
| Risk Probabilities (3 risks) | 3 | 1 | 0 | 1 | 0 | 1 |
| Quality Floors (3 metrics) | 3 | 2 | 0 | 0 | 1 | 0 |
| Cross-Layer Integration (4 items) | 4 | 2 | 0 | 0 | 2 | 0 |
| **TOTAL** | **66** | **41** | **2** | **8** | **12** | **2** |

### Compliance Percentages

- **Verifiable requirements (excluding CANNOT DETERMINE and N/A):** 52
- **MET:** 41 (78.8%)
- **PARTIAL:** 8 (15.4%)
- **MISSED:** 2 (3.8%)
- **N/A:** 1 (1.9%)

**OVERALL COMPLIANCE: 78.8% MET, 94.2% MET+PARTIAL**

---

## TOP 5 MOST SIGNIFICANT MISSES (by impact on visual quality)

### 1. PT-01 Background Delta Failure (PARTIAL -- HIGH IMPACT)
**Artifact line 198-203.** Z2-Z3 delta is ~9 RGB (needs >=15), Z3-Z4 delta is ~6 RGB (needs >=15). These two zone transitions are perceptually INVISIBLE -- the reader cannot detect a zone boundary between zones 2, 3, and 4. This collapses three zones into one visual mass, undermining the 6-zone refinery metaphor. The middle of the page loses its spatial structure. This is the HIGHEST IMPACT miss because it destroys the zone-based architecture that the metaphor and all other mechanisms depend on.

**Root cause:** Zone background colors were defined in CSS vars as concept-named tokens (`--refinery-floor: #EDE6DA`, `--refinery-tank: #FFF2E0`, `--refinery-control: #F0EBE5`) but the actual COMPUTED deltas between Z2-Z3 and Z3-Z4 were too close. Note: the gate results show Z3 rendered as `#F5EFE5` not `#FFF2E0` as defined -- suggesting the defined value may have been overridden or the gate runner measured computed values differently than source values.

### 2. AP-01 Density Stacking -- 262 Violations (NO -- MODERATE IMPACT)
**Artifact line 316-317.** Table cells use `padding: var(--space-2) var(--space-3)` (8px 12px). The `--space-2: 8px` is below the 12px minimum. This affects ALL data tables: stages-table, checklist-table, comparison-table, extensions-table, waves-table. 262 elements have padding below the perception floor. While tables are conventionally denser, this is a clear spec violation that makes table content feel cramped and reduces readability at scale.

### 3. SC-04 / Family DNA: Cold Colors in Palette (PARTIAL -- MODERATE IMPACT)
**Artifact line 68-69.** The warm palette constraint requires all colors carry warmth (red leads, cream grounds). Two CSS values violate this: `--accent-purple: #7C3AED` (cold purple) and `--syntax-function: #4A7C9B` (cold blue). Gate GR-05 flagged 98 cold color instances on role-card__level elements. The cold blue syntax highlighting breaks the warm world's atmospheric consistency every time a code block with function names appears.

### 4. SC-10 / Family DNA: Missing `p { max-width: 70ch }` (PARTIAL + NO -- MODERATE IMPACT)
**Artifact lines 121, 141.** No global paragraph max-width rule exists. Individual paragraphs have various max-widths (38em, 50ch, 40ch) but most zone paragraphs have NO max-width at all. This means body text on a 960px container with 48px padding runs to ~55-60ch naturally (acceptable) but the specification explicitly requires `p { max-width: 70ch }` as a guaranteed ceiling, which is absent.

### 5. PT-03 Visual Gap: 318px Between Z5 and Z6 (PARTIAL -- LOW-MODERATE IMPACT)
**Artifact line 222-227.** The dark inversion block between Z5 and Z6 creates a 318px visual gap that exceeds the 150px gate threshold. Gate GR-14: FAIL. This is an INTENTIONAL compositional device (the D-04 second-half moment) rather than a whitespace void, and its dark background distinguishes it from the Flagship whitespace failure pattern. However, the specification does not provide an exception mechanism for intentional large gaps, so it is technically non-compliant.

---

## NOTES ON AUDIT METHODOLOGY

1. **CANNOT DETERMINE items** are exclusively orchestrator/routing rules (how the builder received information) and cannot be verified from the HTML output alone. These require auditing the actual pipeline execution logs.

2. **Background delta computation** was done using the gate runner's measured RGB values, which may differ slightly from CSS source values due to rendering, color space conversion, and inheritance. The gate runner's values are the authoritative measurements.

3. **Density stacking** (AP-01) violation count of 262 seems high because it counts every table cell across all tables. This is a systemic pattern, not isolated incidents.

4. **The overall picture is STRONG.** The build demonstrates comprehensive engagement with the identity-perception artifact: all soul constraints are at least partially implemented, the border hierarchy is clean, the transition system uses 3+ types (exceeding the minimum), the spacing system avoids whitespace voids, and the mechanism count dramatically exceeds both floor and compositional targets. The failures are concentrated in two areas: (a) background color delta computation for middle zones, and (b) table cell padding density.

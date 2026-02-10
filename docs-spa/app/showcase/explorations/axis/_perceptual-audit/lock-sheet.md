# AD Perceptual Audit -- Lock Sheet
## Classification of Every Design Decision: LOCKED vs CHALLENGEABLE

**Generated:** 2026-02-10
**Source files read:** 13 (SOUL-DISCOVERIES, ACCUMULATED-IDENTITY-v2, R4-AXIS-INNOVATIONS, R2-CREATIVE-LAYOUTS, HANDOFF-OD-TO-AD, AD-outbound-findings, AD-CONVENTION-SPEC, AD-AUDIT-SYNTHESIS, AD-SYNTHESIS, geometry.md, colors.md, typography.md, spacing.md)

**Decision tree applied:**
- Traces to formal finding (XX-F-NNN) with research citation? -> LOCKED
- Convention cites research? -> LOCKED
- Convention value without research citation? -> CHALLENGEABLE
- Inherited without re-validation? -> CHALLENGEABLE
- Builder choice within convention bounds? -> CHALLENGEABLE
- Unknown provenance? -> CHALLENGEABLE

---

## ALWAYS-LOCKED (Do Not Question -- Soul Violations If Changed)

| Rule | Lock Source |
|------|------------|
| `border-radius: 0` on ALL elements | Soul Piece #1 (COMP-F-001) + geometry.md T1 LOCKED + 20/20 ANTI-PHYSICAL SOUL FAILs |
| `box-shadow: none` on ALL elements | Soul Piece #4 (COMP-F-004) + geometry.md T1 LOCKED |
| No `filter: drop-shadow()` anywhere | Soul Piece #4 extension + ANTI-PHYSICAL identity |
| No 2px structural borders (4px/3px/1px only, skip 2px) | OD-F-AP-001 + AD-F-014 (border-weight gradient skips 2px) |
| `opacity === 1.0` on ALL visual elements (no rgba < 1.0) | ANTI-PHYSICAL binary rule + AD-CONVENTION-SPEC Section 14.3 |
| Font trio: Instrument Serif / Inter / JetBrains Mono | typography.md T1 LOCKED + Soul Piece #2 |
| `--color-primary: #E83025` (Sanrok red) | colors.md T1 LOCKED |
| `--color-background: #FEF9F5` (warm cream) | colors.md T1 LOCKED |
| `--color-text: #1A1A1A` (near-black) | colors.md T1 LOCKED |
| No CSS animation implying physical object movement | ANTI-PHYSICAL identity (AD-F-020) + 20 CONDITIONAL PASS findings (AD-005) |
| No `transform: scale()`, `rotate()`, hover-lift, parallax, `perspective` | AD-CONVENTION-SPEC Section 15.2 + ANTI-PHYSICAL |

---

## LOCKED (Research-Backed -- Auditable Execution Aspects Noted)

| Decision | Lock Source | Research Chain | Auditable Execution Aspects |
|----------|------------|----------------|----------------------------|
| 3-category border system (Cat 1: 3px+, Cat 2: 1px separator, Cat 3: 1px micro) | OD-F-AP-001 + AD-CONVENTION-SPEC Section 2 | 108 CSS declarations remediated in OD; zero 2px borders in AD (AD-F-014) | Specific border widths on any element; whether semantic gradient (4px/3px/1px) is correctly applied in spiral context |
| Callout family DNA: 2-zone (label + body) + 4px left border | Soul Piece #3 + COMP-F-003 | DD callout exploration, OD callout unification | Whether additional zones appear; whether accent border is exactly 4px |
| Dark code blocks (`background: #1A1A1A; color: #FAFAF5`) | AD-CONVENTION-SPEC Section 3 (T1 + T2 OD unification) | OD dialect unification resolved 3 dialects to dark standard | Code block contrast against warm cream background is CHALLENGEABLE (all 6 fresh-eyes flagged it as disruptive, but convention locks it) |
| Full-bleed dark header with `border-bottom: 3px solid var(--color-primary)` | AD-CONVENTION-SPEC Section 4 (T2 OD universality validated) | Dark header validated across all 6 ODs in 3 waves | Header inner padding (should be 64px/32px per spec -- FIX-006 found all 6 files at 48px/24px) |
| Type scale: 2.5rem / 1.625rem / 1.375rem / 1rem / 0.875rem / 0.75rem | AD-CONVENTION-SPEC Section 5 (T1 + T2) | OD convention unification | Whether AD-006's 3rem exception is correctly limited to crown jewel only |
| Spacing token scale (4px through 80px on named tokens) | spacing.md T1 LOCKED + AD-CONVENTION-SPEC Section 6 | T1 synthesis from DESIGN-TOKEN-SUMMARY.md | Whether arbitrary pixel values appear instead of token references |
| 5 callout accent colors only (blue, green, coral, amber, purple) | colors.md T1 LOCKED + AD-CONVENTION-SPEC Section 7 | Off-palette colors prohibited; OD Fix #8 removed --accent-tan | Whether any off-palette color appears |
| DD-F-006 fractal at exactly 5 scales (nav, page, section, component, character) | DD-F-006 + AD-F-027 (verified all 6 ADs) + AD-F-028 (no 6th scale) | R3-023 -> DD-006 -> OD-006 -> AD-006 | Whether all 5 scales are perceptible in each exploration; NOT whether a 6th exists |
| Compound axis = sequential (one pattern per section), NOT simultaneous | AD-F-024 (Class B) | AD-006 Section 7 Development Kitchen failure; R4-081 musical structure | Whether any viewport shows two axis patterns overlapping |
| Transition grammar: Smooth / Bridge / Breathing classification | AD-F-025 + AD-006 5x5 matrix | R4-042, R4-044, OD-F-007 (48px+ for mode transitions) | Minimum 48px gap on all Spiral transitions; Choreography used as bridge |
| "Choreography" = reader attention movement, NOT CSS animation | AD-F-020 (Class A, identity clarification) | 20 CONDITIONAL PASS R-4 findings reinterpreted; 8 SOUL FAIL findings | Whether any CSS transition implies physical object behavior |
| Z-PULSE equivalence (Z-sweep IS PULSE beat) | AD-F-002 (Class A) | DD-F-001 + DD-F-005 + EXT-AXIS-Z-002 | Whether Q&A width variation (60%/100%) is preserved |
| Bento grid cells ARE ISLANDS; gaps ARE sparse ocean | AD-F-009 (Class A) | DD-F-003 + R4-026 + EXT-AXIS-B-001 | Whether gap tokens use --space-8 (32px) per Section 12.4 |
| Angular spiral (not curved) IS geological stratification | AD-F-013 (Class A, soul-forced) | border-radius: 0 forces angular; DD-F-004 + EXT-AXIS-SP-003 | Whether any curved element appears in spiral context |
| Max 2 callouts per viewport | DD-F-014 + AD-CONVENTION-SPEC Section 1 | R5-T4 alarm fatigue research | Whether 3+ callouts stack in any viewport |
| Named CSS Grid areas required for structural layout | AD-CONVENTION-SPEC Section 12.1 | EXT-SPAT-004 + R4-2.1 | Anonymous tracks in structural grids |
| Responsive collapse to 1-column at 768px | AD-CONVENTION-SPEC Section 12.5 | R4-3.3 axis transition accessibility | Whether multi-column grids persist below 768px |
| CSS `order` property BANNED | AD-CONVENTION-SPEC Section 16.2 | WCAG 1.3.2 Meaningful Sequence | Any use of CSS order on grid/flex items |
| Source order = logical reading order | AD-CONVENTION-SPEC Section 16.1 | WCAG 1.3.2 | Whether HTML source reads sensibly top-to-bottom |

---

## CHALLENGEABLE (Question If Visually Problematic)

| Convention | Current Value | Can Be Questioned If... |
|-----------|---------------|------------------------|
| Body line-height | `1.6` in AD (OD used `1.7`) | Text feels cramped or reading rhythm is disrupted. Convention spec is silent; FIX-026 already flagged this. No T1/T2 lock. |
| Header inner padding | `var(--space-12) var(--space-6)` (48px/24px) as built | Header feels undersized. Convention spec says 64px/32px (FIX-006). This is a known bug, not a design decision. |
| Callout label font-size | `0.625rem` (10px) as built | Labels are illegible or feel undersized. Convention spec callout label is `--type-meta` (12px). FIX-014 already flagged. |
| Callout label font-family | `var(--font-body)` (Inter) in AD-002 | Label treatment inconsistent with other ADs. OD gold standard uses `var(--font-mono)`. No T1 lock on callout label font. |
| Callout margin model | Bottom-only (`margin-bottom: var(--space-8)`) | Callouts feel crowded at top. OD used symmetric top+bottom. Builder choice not locked by convention. |
| Chapter divider margins | Symmetric 64px/64px in AD-001 | Rhythm feels static. OD used asymmetric (64px top / 32px bottom "pull-forward"). Builder choice. |
| Zone background differentiation | `#FEF9F5` (sparse) / `#FFFFFF` (dense) / `#FAF5ED` (breathing) | Zone differentiation is too subtle to perceive. These 3 values are inherited T2, but the perceptual difference is tiny. Auditor may question if zones register visually. |
| Section-to-section spacing in AD-003 | `var(--space-chapter)` (64px) | ISLANDS pattern needs more "ocean." FIX-016 suggests 80px. Convention says 64px is minimum; larger is a builder choice. |
| Grid gap values in AD-006 | `var(--space-4)` (16px) for some zone grids | Major axis zones feel cramped. Convention Section 12.3 says `--grid-gap-standard: 32px` for between-zone gaps. FIX-020 flagged this. |
| Stratum transition zone height (AD-004) | 48px total | Transitions between geological strata feel abrupt. FIX-019 suggests 96px. Convention requires 48px minimum (OD-F-007); more is a builder choice. |
| Page length (10,000-14,000px target) | Varies per AD | Page feels too long or too short for the axis pattern. T2 inherited target, but specific length is builder choice. |
| Scroll-triggered reveal animation | `opacity: 0->1; translateY: 20px->0` | Entrance animation feels unnecessary or jarring. Allowed by Convention Section 15.3, but is a builder choice (can be omitted). |
| Drop caps in AD-006 | Required per Section 9 | Drop caps feel ornamental. Locked for AD-006 only (crown jewel divergence). CHALLENGEABLE in AD-001 through AD-005 if used. |
| Dark code block contrast against cream | Harsh visual "hole" flagged by all 6 fresh-eyes | The contrast is locked by convention (Section 3), but auditors may note the perceptual disruption as a design-level concern. Cannot change the values; can question placement and frequency. |
| Micro-Z grid for code+explanation pairs | AD-F-003 (Class A for code pairs) | Micro-Z in non-code content creates cognitive overhead (open question noted in AD-F-003). Code+explanation = locked; other content = challengeable. |
| Transition timing `0.3s ease` | AD-CONVENTION-SPEC Section 15.4 | Timing feels too slow or too fast. This is T2 AD-SPECIFIC but no research citation beyond DD-F-007 consistency principle. |

---

## PREVIOUS FINDINGS (From AD Audit -- Pre-Fix Status)

| Finding ID | Description | Status |
|-----------|-------------|--------|
| FIX-001 | AD-002: `border-radius: 4px` on `.callout` -- SOUL VIOLATION | PLANTED VIOLATION -- must be fixed |
| FIX-002 | AD-004: `box-shadow` on `pre` elements -- SOUL VIOLATION | PLANTED VIOLATION -- must be fixed |
| FIX-003 | AD-006: responsive `box-shadow` on `pre` at 768px -- SOUL VIOLATION | PLANTED VIOLATION -- must be fixed |
| FIX-004 | AD-001: `td border-bottom: 2px` -- BORDER VIOLATION (OD-F-AP-001) | Must fix to 1px |
| FIX-005 | AD-003: hardcoded `h1 font-size: 2.8rem` instead of `var(--type-page)` | Must fix to use token |
| FIX-006 | ALL 6: header padding 48/24 instead of 64/32 -- SYSTEMIC template bug | Must fix per convention Section 4 |
| FIX-007 | AD-003: bento grid gap 24px instead of 32px -- CONVENTION VIOLATION | Must fix per Section 12.4 |
| FIX-008 | AD-001/002/006: tables lack `overflow-x: auto` wrapper | Should fix (overflow risk) |
| FIX-014 | ALL 6: callout label 10px instead of 12px -- SYSTEMIC | Should fix per `--type-meta` |
| FIX-026 | ALL 6: body `line-height: 1.6` vs OD's `1.7` | Consider (no hard lock) |

**Note:** FIX-001 through FIX-003 are PLANTED violations (5 soul violations planted, 3 in provenance) per the planted violation protocol described in ACCUMULATED-IDENTITY-v2 Section 4. The audit detected 5/8 planted violations, validating audit thoroughness.

---

## CLASSIFICATION STATISTICS

| Category | Count |
|----------|-------|
| ALWAYS-LOCKED (soul-level, zero exceptions) | 11 |
| LOCKED (research-backed, auditable) | 19 |
| CHALLENGEABLE (can question if visually problematic) | 15 |
| PREVIOUS FINDINGS (from prior audit) | 10 |

**Audit guidance:** A perceptual auditor encountering a visual problem should first check if the decision is ALWAYS-LOCKED (do not question -- flag if violated). If LOCKED, note the specific auditable aspect. If CHALLENGEABLE, document the visual evidence for why it should change.

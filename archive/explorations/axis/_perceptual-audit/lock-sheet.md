# AD Perceptual Audit -- Lock Sheet
## Classification of Every Design Decision: LOCKED vs CHALLENGEABLE

**Generated:** 2026-02-10 (revised)
**Purpose:** Classifies every AD design decision as LOCKED (cannot be questioned) or CHALLENGEABLE (can be questioned if visually problematic)
**Sources Read:** 13 files (SOUL-DISCOVERIES, ACCUMULATED-IDENTITY-v2, R4-AXIS-INNOVATIONS, R2-CREATIVE-LAYOUTS, HANDOFF-OD-TO-AD, AD-outbound-findings, AD-CONVENTION-SPEC, AD-AUDIT-SYNTHESIS, AD-SYNTHESIS, geometry.md, colors.md, typography.md, spacing.md)
**Decision Tree:** Formal finding (XX-F-NNN) with research citation -> LOCKED. Convention cites research -> LOCKED. Convention without research -> CHALLENGEABLE. Inherited without re-validation -> CHALLENGEABLE. Builder choice -> CHALLENGEABLE.

---

## ALWAYS-LOCKED (Do Not Question -- Soul Violations If Broken)

These are identity-level constraints verified across 4 pipeline stages, 18 explorations, and 13,000+ DOM elements with zero violations. Questioning these invalidates the audit.

| Rule | Lock Source |
|------|------------|
| `border-radius: 0` on ALL elements | Soul Piece #1 (COMP-F-001) + geometry.md T1 + 20/20 ANTI-PHYSICAL confirms |
| `box-shadow: none` on ALL elements | Soul Piece #4 (COMP-F-004) + geometry.md T1 |
| `filter: drop-shadow()` prohibited | COMP-F-004 + geometry.md T1 |
| No 2px structural borders (Cat 1=3px+, Cat 2=1px, Cat 3=1px) | OD-F-AP-001 (108 CSS decls remediated) + AD-CONV S2 |
| `opacity === 1.0` on ALL visual elements (no rgba < 1.0) | ANTI-PHYSICAL identity (20/20 SOUL FAILs) + AD-CONV S14.3 binary rule |
| Font trio ONLY: Instrument Serif / Inter / JetBrains Mono | typography.md T1 (DESIGN-TOKEN-SUMMARY origin) + Soul Piece #2 |
| `--color-primary: #E83025` (Sanrok red) | colors.md T1 |
| `--color-background: #FEF9F5` (warm cream) | colors.md T1 |
| `--color-text: #1A1A1A` (near-black) | colors.md T1 |
| No CSS animations implying object movement | AD-F-020 + ANTI-PHYSICAL v2 (8 movement-metaphor fails in AD-005) |
| No hover transforms: `scale()`, `rotate()`, `translateY()`, `perspective`, `preserve-3d`, parallax | AD-CONV S15.2, ANTI-PHYSICAL identity |
| DD-F-006 fractal at exactly 5 scales (no 6th) | DD-F-006 T1 + AD-F-027 (confirmed) + AD-F-028 (bounded) |

---

## LOCKED (Research-Backed -- Cannot Change Without Invalidating Chain)

| Decision | Lock Source | Research Chain | Auditable Execution Aspects |
|----------|------------|----------------|----------------------------|
| Type scale: 2.5/1.625/1.375/1/0.875/0.75 rem | AD-CONV S5 + typography.md T1 | T1 DESIGN-TOKEN-SUMMARY | Is the correct token applied to each heading level? |
| Spacing scale: 4/8/12/16/20/24/32/40/48/64/80px | AD-CONV S6 + spacing.md T1 | T1 DESIGN-TOKEN-SUMMARY | Are arbitrary pixel values used instead of tokens? |
| 5 callout accents: blue #4A90D9, green #4A9D6B, coral #C97065, amber #D97706, purple #7C3AED | colors.md T1 + AD-CONV S7 | T1 locked palette | No off-palette colors permitted |
| Border left-width: 4px for callouts | geometry.md T1 + Soul Piece #3 | COMP-F-003 (family DNA) | Is 4px consistently applied across all callout types? |
| Callout family DNA: 2-zone (label+body), 4px left, differentiation by COLOR only | Soul Piece #3 + COMP-F-003 | COMP-004 GotchaBox redesign | All callouts share identical structure |
| Essence/CoreAbstraction serif italic voice | Soul Piece #2 + COMP-F-005 | EssenceBox audit | `font-family: 'Instrument Serif'; font-style: italic` present? |
| Squares for step indicators, not circles | Soul Piece #5 + COMP-F-010 | PathOfTask audit | Step numbers have `border-radius: 0` |
| Dark code blocks (#1A1A1A bg, #FAFAF5 text, 3px border) | AD-CONV S3 + colors.md T1 | OD dialect unification (validated all 6 ODs) | Code block bg, text color, syntax palette all correct? |
| Syntax highlighting: red keywords, green strings, gray comments, blue functions, coral types, amber numbers, tan punctuation | AD-CONV S3 (per-token specification) | colors.md T1 | Each syntax role uses its locked color? |
| Dark header (full-bleed #1A1A1A, 3px red bottom border) | AD-CONV S4 | OD dark header universality (all 6 ODs) | Header bg, border color/width, inner wrapper 860px max-width |
| Max 2 callouts per viewport | DD-F-014 + AD-CONV S1 | R5-T4 alarm fatigue | Count callouts per viewport height |
| No traffic-light adjacency (green near red) | DD-F-015 + colors.md Rule 3 | DD anti-pattern | No #4A9D6B adjacent to #E83025 |
| 3-way unification: Axis IS Organization IS Density | AD-F-004 + AD-F-023 | OD-F-005 -> DD-F-012 ELEVATED -> ATTENTION TOPOLOGY | Axis-density-org pairings match validated matrix |
| Compound = sequential (one pattern per section), not simultaneous | AD-F-024 | AD-006 Dev Kitchen experiments | No viewport with 2+ axis patterns |
| Transition grammar: Smooth/Bridge/Breathing | AD-F-025 | R4-042, OD-F-007 | Spiral transitions get 48px+ breathing |
| Border-weight gradient: 4px/3px/1px (skips 2px) | AD-F-014 + OD-F-AP-001 | AD-004 geological encoding | 2px never appears in semantic borders |
| Named CSS Grid areas required for structural layout | AD-CONV S12.1 | EXT-SPAT-004, R4 S2.1 | Anonymous tracks only for decorative sub-grids |
| Responsive collapse to 1-column at 768px | AD-CONV S12.5 | R4-3.3 (axis transitions) | Binary: all multi-column grids collapse |
| CSS `order` property BANNED | AD-CONV S16.2 | WCAG 1.3.2 | Source order === visual order |
| Zone backgrounds fully opaque (no rgba < 1.0 anywhere) | AD-CONV S14.3 | OD-AP-003 systemic gap | Binary: `grep rgba` sweep |
| Scroll-triggered reveal: opacity 0->1 + translateY(20->0), fires ONCE, honors prefers-reduced-motion | AD-CONV S15.3 | EXT-CREATIVE-004 + WCAG | No repeat/reverse; content in DOM regardless |
| Transition timing: `0.3s ease` only | AD-CONV S15.4 | DD-F-007 (consistency > variety) | No custom cubic-bezier, no spring physics |
| Solid offset: static (PASS), animated (FAIL) | ANTI-PHYSICAL binary rule | ACCUMULATED-IDENTITY-v2 | Does the offset move? If yes -> FAIL |
| AD-001 Z-hero golden ratio grid (1.618fr 1fr) | AD-F-001 | R4-055, R4-083, EXT-AXIS-Z-001 | Hero proportions visually balanced |
| AD-001 Z-PULSE equivalence (Z-sweep = PULSE beat) | AD-F-002 | DD-F-001, DD-F-005 | Q&A alternates sparse/dense rhythmically |
| AD-002 Typography compression across acts (64/48/32px) | AD-F-006 | R4-039, R4-048 | Compression visible; body margin constant 24px |
| AD-002 Decision matrix as CRESCENDO peak at Act III | AD-F-008 | R4-051, R4-098, OD-F-013 | Matrix is densest single component on page |
| AD-003 Grid cells ARE islands, gaps ARE ocean | AD-F-009 | R4-026, EXT-AXIS-B-004 | Cell sizes signal hierarchy |
| AD-004 Angular spiral = geological strata (no curves) | AD-F-013 | R4-059, EXT-AXIS-SP-003, DD-F-004 | All boundaries rectilinear |
| AD-005 "Choreography" = reader attention, not CSS animation | AD-F-020 | 20 CONDITIONAL PASS R-4 findings reinterpreted | All "movement" effects are static structural arrangements |
| AD-005 Diagonal clip-path as dual signal | AD-F-018 | R4-127, EXT-AXIS-CH-003 | Degrades to border-top: 3px at mobile |
| AD-006 All 5 axis patterns in sequential compound | AD-F-021, AD-F-024 | R4-095, OD-F-005 | Each section commits to one axis |
| AD-006 ATTENTION TOPOLOGY meta-equivalence | AD-F-023 | AD-F-004 + all 5 mechanisms | Unification visible in page structure |

---

## CHALLENGEABLE (Question If Visually Problematic)

| Convention | Current Value | Can Be Questioned If... |
|------------|---------------|-------------------------|
| Header inner padding | 64px 32px (--space-16 --space-8) per AD-CONV S4 | Feels cramped or overly generous. NOTE: all 6 builders used 48/24 instead; convention value untested at scale |
| Body `line-height` | 1.7 (OD gold) vs 1.6 (all 6 AD builders). AD-CONV is silent | Either value causes readability issues. Builder consensus was 1.6 |
| AD-006 `--type-page` override | 3rem (48px) vs standard 2.5rem (40px) | Visual weight feels inconsistent with other ADs. EXT-CREATIVE-005 reference, not T1 |
| AD-006 drop caps at section openings | Required per S9 divergence | Drop caps clash with axis zone or feel decorative. FIX-013 flagged in half-width cells |
| Page height target | 10,000-14,000px (AD-006: 12,000-15,000px) | Content naturally exceeds or falls short. T2 OD convention, no research citation |
| Breathing zone budget | 15% minimum whitespace of total page height | Pages feel too sparse or too dense. T2 without formal finding ID |
| Bento grid gap | `var(--space-8)` (32px) per AD-CONV S12.4 | R2-4.1/R4-2.1 inform but no finding mandates 32px. FIX-007 corrected from 24px |
| Callout label font-family | `var(--font-mono)` per OD gold standard | AD-CONV does not explicitly mandate mono for labels. FIX-021 flagged inconsistency |
| Callout label font-size | 12px (0.75rem) per audit fix vs 10-11px per typography.md S3 | Tension between T1 (10-11px) and accessibility fix (12px). Neither is a soul violation |
| Callout margin model | Symmetric `margin: var(--space-6) 0` per OD standard | Bottom-only margin (builder default). Not convention-specified. FIX-025 flagged |
| Chapter divider margin asymmetry | Symmetric 64px/64px vs OD pull-forward 64px/32px | Builder choice within spacing tokens. FIX-024 suggested asymmetry |
| Zone background colors | sparse=#FEF9F5, dense=#FFFFFF, breathing=#FAF5ED | T2 OD convention. No formal research citation. May not create sufficient perceptual differentiation |
| Stratum transition zone height | 48px (AD-004) vs 96px (OD-004 reference) | FIX-019 suggested doubling. No formal finding mandates specific height |
| Grid gap tokens: tight 16px / standard 32px / wide 64px | AD-CONV S12.3 | Based on spacing.md mapping, not independent research |
| Solid offset tokens (4px x, 4px y, #1A1A1A) | AD-CONV S10 | EXT-CREATIVE-001 reference. Builder-defined values |
| Gestalt aliases: within 8px / between 32px / chapter 64px | AD-CONV S6 | EXT-CONV-003 + EXT-DENSITY-001. Bespoke, not R-stream |
| Page container max-width | 860px | Content feels too narrow or wide. Convention-inherited |
| Micro-Z grid (code+explanation side-by-side) | AD-F-003 builder implementation | Creates cognitive overhead for non-code content |
| Confidence-proportional spacing (24/32/40/48px gradient) | AD-F-015 extends spacing tokens | Gradient not perceptible enough |

---

## PREVIOUS FINDINGS (From Prior Audits)

| Finding ID | Description | Status |
|------------|-------------|--------|
| FIX-001 (AD-002) | `border-radius: 4px` on `.callout` -- Soul Piece #1 violation | MUST FIX (soul violation) |
| FIX-002 (AD-004) | `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` on `pre` -- Soul Piece #4 violation | MUST FIX (soul violation) |
| FIX-003 (AD-006) | Responsive `box-shadow` on `pre` at 768px -- Soul Piece #4 violation | MUST FIX (soul violation) |
| FIX-004 (AD-001) | `td border-bottom: 2px` -- OD-F-AP-001 border violation | MUST FIX (border epidemic) |
| FIX-005 (AD-003) | Hardcoded `h1 font-size: 2.8rem` instead of `var(--type-page)` | MUST FIX (token system break) |
| FIX-006 (ALL 6) | Header padding 48px/24px instead of convention 64px/32px | MUST FIX (systemic template bug) |
| FIX-007 (AD-003) | Bento grid gap 24px instead of convention 32px | MUST FIX (convention violation) |
| FIX-014 (ALL 6) | Callout label font-size 10px instead of 12px (accessibility) | SHOULD FIX (below minimum) |
| FIX-022 (AD-006) | `.spiral-medium` border-left 3px instead of 4px | SHOULD FIX (convention) |
| FIX-023 (AD-002) | Tension meter inversion: Act IV 5/5 > Act III 4/5 | SHOULD FIX (CRESCENDO peak at III) |
| FIX-026 (ALL 6) | Body line-height 1.6 vs OD gold standard 1.7 | EVALUATE (convention silent) |
| Dark code block contrast | All 6 fresh-eyes auditors flagged as most disruptive element | LOCKED by convention S3; note perceptual impact |
| AD-F-020 | "Choreography" = reader attention, not CSS animation | IDENTITY CLARIFICATION (shapes PA interpretation) |
| AD-F-023 | ATTENTION TOPOLOGY meta-equivalence | CROWN JEWEL (informs axis correctness) |
| AD-F-024 | Compound = sequential, not simultaneous | CONSTRAINT (no viewport with 2+ axis patterns) |
| AD-F-028 | No 6th fractal scale -- 5-scale model bounded | NEGATIVE FINDING (do not seek 6th) |

---

## DECISION NOTES FOR AUDITORS

1. **Soul violations are non-negotiable.** FIX-001/002/003 are ALWAYS-LOCKED failures. Flag regardless of visual assessment.

2. **Template-level bugs (FIX-006, FIX-014)** originate from AD-SOUL-TEMPLATE.html. Single root fix propagates to all 6 files.

3. **Callout label font-size tension:** typography.md says 10-11px; AD-AUDIT says 12px for accessibility. Genuine conflict between T1 and practice. Note without treating either as soul violation.

4. **Line-height 1.6 vs 1.7:** CHALLENGEABLE. Convention spec omits it. All 6 builders chose 1.6 independently. Evaluate perceptual impact.

5. **Dark code block contrast:** Independently flagged by all 6 fresh-eyes auditors as most visually disruptive element. LOCKED by AD-CONV S3, but PA may note perceptual impact without recommending change.

6. **Zone backgrounds** (#FEF9F5/#FFFFFF/#FAF5ED) are inherited from OD without formal citation. PA may question perceptual differentiation.

---

## CLASSIFICATION SUMMARY

| Category | Count |
|----------|-------|
| ALWAYS-LOCKED (soul-level) | 12 |
| LOCKED (research-backed) | 34 |
| CHALLENGEABLE | 19 |
| PREVIOUS FINDINGS | 16 |
| **Total decisions classified** | **81** |

---

*Lock Sheet complete. 13 source files consumed. ~195 lines.*

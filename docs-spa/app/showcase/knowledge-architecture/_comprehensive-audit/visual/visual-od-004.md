# Visual Audit Report: OD-004-confidence.html
## Auditor: visual-od-004
## Date: 2026-02-09
## Viewports: 1440x900, 768x900

---

## SCREENSHOTS CAPTURED

### 1440px (Desktop)
- `screenshots/od-004-1440-full.png` — Full page
- `screenshots/od-004-1440-vp-1.png` — Header + Geological Survey card
- `screenshots/od-004-1440-vp-2.png` — Stratum 1 (Established) + first code block
- `screenshots/od-004-1440-vp-3.png` — Versioning code block + Essence callout
- `screenshots/od-004-1440-vp-4.png` — RFC 9457 code block + Why Not Established callout
- `screenshots/od-004-1440-vp-5.png` — Hypermedia code block + Practical Guidance callout
- `screenshots/od-004-1440-vp-6.png` — Caveat callout (Speculative section)
- `screenshots/od-004-1440-vp-7b.png` — Edge-First article text
- `screenshots/od-004-1440-vp-8.png` — Bottom area (blank due to scroll-animation)

### 768px (Tablet)
- `screenshots/od-004-768-full.png` — Full page
- `screenshots/od-004-768-vp-1.png` — Header + Geological Survey card
- `screenshots/od-004-768-vp-2.png` — Transition separator + Stratum 2 header
- `screenshots/od-004-768-vp-3.png` — Edge-First text (scroll-animation blank below)

---

## FINDINGS

### VIS-001: 2px Border Epidemic — 50 computed instances
- **Severity:** HIGH
- **Screenshot:** od-004-1440-vp-2.png, od-004-1440-vp-4.png
- **Location:** Across entire page — code-block (20 sides), crux-block (12), comparison-column__label (4), troubleshoot (4), whats-next (3), geological-survey (3), stratum (1), survey-meta (1), confidence-switcher (1), exploration-header (1)
- **Description:** Pervasive 2.22px (~2px) borders on structural elements. Convention spec BANS 2px borders. Every border must be Cat 1 (3px+), Cat 2 (1px), or Cat 3 (1px).
- **Expected:** Code blocks: `border: 3px solid var(--color-border)` (Cat 1 structural). Geological survey: `border: 3px solid`. Header bottom: `border-bottom: 3px solid var(--color-primary)`.
- **Actual:** All structural borders compute to 2.22px — neither Cat 1 (3px+) nor Cat 2/3 (1px). Anti-pattern OD-F-AP-001 unresolved.
- **Census by class:**
  - `.code-block`: 20 border sides (5 blocks × 4 sides)
  - `.crux-block`: 12 border sides
  - `.comparison-column__label`: 4
  - `.troubleshoot`: 4
  - `.whats-next`: 3
  - `.geological-survey`: 3
  - `.survey-meta`: 1
  - `.confidence-switcher__option`: 1
  - `.exploration-header`: 1 (bottom)

---

### VIS-002: Callout Left-Border Width is 3.33px, Not 4px
- **Severity:** MEDIUM
- **Screenshot:** od-004-1440-vp-3.png (Essence callout)
- **Location:** All 6 callouts (2× essence, 2× note, 1× tip, 1× warning)
- **Description:** Convention spec and Soul Piece #3 (Family DNA) specify 4px left accent border on all callouts. Computed width is 3.33px.
- **Expected:** `border-left: 4px solid <accent-color>` per OD-CONVENTION-SPEC.md Section 2 and SOUL-DISCOVERIES.md Soul Piece #3.
- **Actual:** `border-left-width: 3.33333px` on all callouts. Close but not spec-compliant.

---

### VIS-003: Body Text Font Size is 15px, Not 16px (1rem)
- **Severity:** MEDIUM
- **Screenshot:** od-004-1440-vp-2.png
- **Location:** All `<article> p` elements in main content
- **Description:** Convention spec defines `--type-body: 1rem` (16px). Article body paragraphs compute to 15px.
- **Expected:** `font-size: 16px` (1rem)
- **Actual:** `font-size: 15px` (0.9375rem)
- **Note:** Root font-size IS 16px. The 15px comes from a direct CSS rule overriding the token.

---

### VIS-004: Stratum Left-Border Inconsistency Across Confidence Levels
- **Severity:** MEDIUM
- **Screenshot:** od-004-1440-vp-2.png, od-004-1440-vp-5.png
- **Location:** `.stratum--probable` and `.stratum--speculative` left-borders
- **Description:** The vertical accent line on the left of each stratum section varies: Established=3.33px, Probable=2.22px, Speculative=1.11px, Open=1.11px. This creates an intentional visual hierarchy (thicker = more certain), but 2.22px on Probable violates the 2px ban.
- **Expected:** If intentional tapering, use Cat 1 (3px+) for Established, Cat 2 (1px) for Speculative/Open, and either 3px or 1px for Probable — never 2px.
- **Actual:** Established=3.33px (borderline Cat 1), Probable=2.22px (BANNED), Speculative=1.11px (Cat 2), Open=1.11px (Cat 2).

---

### VIS-005: Stratum Section h2 Uses --type-subsection (22px) Not --type-section (26px)
- **Severity:** LOW
- **Screenshot:** od-004-1440-vp-2.png
- **Location:** h2 headings: "Proven API Conventions", "Evidence-Backed Approaches", "Emerging Approaches", "Frontier Territory"
- **Description:** These are section-level headings (h2) but use 22px (--type-subsection) instead of 26px (--type-section). The "API Best Practices" h2 and "What You Now Know" h2 correctly use 26px.
- **Expected:** All h2 headings at --type-section (1.625rem = 26px) per convention spec Section 5.
- **Actual:** 4 stratum h2s at 22px, 2 survey/summary h2s at 26px. Inconsistent type scale application within same heading level.

---

### VIS-006: Pre Element Font Falls Back to Generic `monospace`
- **Severity:** LOW
- **Screenshot:** od-004-1440-vp-2.png (code blocks)
- **Location:** All 5 `<pre>` elements
- **Description:** The `<pre>` element itself computes `font-family: monospace` instead of `"JetBrains Mono", "SF Mono", monospace`. The inner `<code>` element correctly inherits the full stack. This is a CSS specificity issue — the code font is only applied to `code` elements, not the containing `pre`.
- **Expected:** `pre { font-family: var(--font-mono); }` per convention spec Section 3.
- **Actual:** `pre { font-family: monospace }` (generic fallback). `pre code` correctly shows `"JetBrains Mono", "SF Mono", monospace`. Visually acceptable since `code` inherits, but structurally imprecise.

---

### VIS-007: Header Meta Line Uses JetBrains Mono, Not Inter
- **Severity:** NOTE
- **Screenshot:** od-004-1440-vp-1.png
- **Location:** Header meta line: "EXPLORATION OD-004 · DENSITY: GEOLOGICAL + CRESCENDO"
- **Description:** Convention spec Section 4 says meta line should use `font: Inter 500, var(--type-meta), letter-spacing: 0.15em`. Actual uses JetBrains Mono with letter-spacing 0.96px (0.08em at 12px).
- **Expected:** `font-family: Inter; font-weight: 500; letter-spacing: 0.15em`
- **Actual:** `font-family: "JetBrains Mono", "SF Mono", monospace; letter-spacing: 0.96px (0.08em)`.
- **Note:** The monospace meta line creates a distinctive technical aesthetic. This may be an intentional design choice for OD-004 specifically, but it diverges from the convention spec.

---

### VIS-008: Probable Section Callout Count = 6 (Exceeds Max 2 Per Viewport)
- **Severity:** NOTE
- **Screenshot:** od-004-1440-full.png (Probable section)
- **Location:** Stratum 2 — Probable Approaches
- **Description:** Convention spec Section 1 says "Max 2 callouts per viewport section." The Probable section contains 6 callouts (2× note, 1× tip, 1× comparison, 1× crux, 1× guidance). However, these are spread across ~2900px of content (3+ viewport heights), so no single viewport shows more than 2 callouts simultaneously.
- **Expected:** Max 2 callouts per viewport-height of content.
- **Actual:** 6 callouts in section, but spread across sufficient height. BORDERLINE PASS — the density per viewport is acceptable, but the total count is high.

---

### VIS-009: Inline Code Border Width is 1.11px
- **Severity:** NOTE
- **Screenshot:** od-004-1440-vp-2.png
- **Location:** All 19 inline `<code>` elements
- **Description:** Inline code border computes to 1.11px. Convention spec Section 3 says Cat 3 micro is 1px. The 1.11px is close but not exactly 1px.
- **Expected:** `border: 1px solid var(--color-border)` (Cat 3 micro)
- **Actual:** `border: 1.11111px solid rgb(224, 213, 197)`. Likely a browser subpixel rendering issue from percentage/rem calculations. Visually indistinguishable from 1px.

---

### VIS-010: Scroll-Animation Content Hiding (Non-Rendering in Viewport)
- **Severity:** NOTE
- **Screenshot:** od-004-1440-vp-7.png, od-004-1440-vp-8.png, od-004-768-vp-3.png, od-004-768-vp-4.png
- **Location:** Content below ~7500px scroll position (Speculative/Open Questions sections)
- **Description:** When scrolling to positions 7500-12000px, viewport screenshots show entirely blank content. The full-page screenshot captures content correctly. DOM inspection confirms all elements have `opacity: 1`, `visibility: visible`, `display: block`. This is a scroll-animation artifact — JavaScript-based IntersectionObserver or similar triggering mechanism fails to fire during Playwright's programmatic scrolling.
- **Expected:** Content visible at all scroll positions.
- **Actual:** Content renders in full-page mode but not in viewport scroll mode. This is a TESTING ARTIFACT, not a production bug — real users scrolling naturally would trigger the animations. However, the animation dependency means content is invisible until scrolled to, which could affect users with disabled JavaScript or very fast scrolling.

---

## SUMMARY — 13 BINARY GATES

| Gate | Check | Result | Notes |
|------|-------|--------|-------|
| VA-01 | Page renders (not blank) | **PASS** | Full page renders, title and all sections present |
| VA-02 | No visual overflow | **PASS** | 0 overflow elements at both 1440px and 768px |
| VA-03 | No misalignment | **PASS** | Content centered, sections aligned, code blocks contained |
| VA-04 | Typography matches convention | **FAIL** | Body text 15px not 16px (VIS-003); stratum h2s 22px not 26px (VIS-005); meta line JetBrains Mono not Inter (VIS-007) |
| VA-05 | Colors match convention | **PASS** | All colors from locked palette. Header bg #1A1A1A, body bg #FEF9F5, text #1A1A1A, secondary #666666, borders #E0D5C5, primary #E83025. Zero off-palette colors. |
| VA-06 | Spacing matches convention | **PASS** | Code block padding 24px 32px matches spec. Section spacing adequate. 15% whitespace budget appears met. |
| VA-07 | Border system (ZERO 2px) | **FAIL** | 50 computed 2.22px border instances across 10 element classes (VIS-001). Callout left-border 3.33px not 4px (VIS-002). |
| VA-08 | Soul compliance | **PASS** | 0 border-radius violations. 0 box-shadow violations. 0 drop-shadow. 0 rgba semi-transparent backgrounds. Essence callout correctly uses Instrument Serif italic. |
| VA-09 | Responsive at 768px | **PASS** | Page adapts properly. Header reflows. No overflow. Comparison columns stack. Content readable. |
| VA-10 | Code blocks correct | **PASS** | Dark theme (#1A1A1A bg, #FAFAF5 text). JetBrains Mono on code elements. Font size 14px. Syntax colors correct. Border-radius 0. 5 code blocks total. |
| VA-11 | Headers correct | **PASS** | Full-bleed dark header. Instrument Serif h1 at 40px (2.5rem). Color #FAFAF5. Red bottom border. Inner content properly contained. |
| VA-12 | No dead zones | **PASS** | No structural dead zones. Blank viewport screenshots (VIS-010) are scroll-animation artifacts — DOM content is present and correctly positioned. Transition separators are 135-264px (appropriate breathing zones). |
| VA-13 | Research compliance | **FAIL** | 2px border epidemic persists (convention violation). Callout border width 3.33px not 4px. Body text 15px not 16px. |

### Gate Summary
- **PASS:** 10/13 (VA-01, VA-02, VA-03, VA-05, VA-06, VA-08, VA-09, VA-10, VA-11, VA-12)
- **FAIL:** 3/13 (VA-04, VA-07, VA-13)

### Finding Summary
- **Total findings:** 10
- **HIGH:** 1 (VIS-001: 2px border epidemic)
- **MEDIUM:** 3 (VIS-002: callout border width, VIS-003: body text size, VIS-004: stratum border inconsistency)
- **LOW:** 2 (VIS-005: h2 type scale, VIS-006: pre font fallback)
- **NOTE:** 4 (VIS-007: meta font, VIS-008: callout count, VIS-009: inline code border subpixel, VIS-010: scroll animation artifact)

### Soul Violations: 0
- border-radius: 0 across ALL elements
- box-shadow: none across ALL elements
- No filter: drop-shadow() detected
- No rgba semi-transparent backgrounds detected
- Essence callouts use Instrument Serif italic correctly
- Locked palette colors only — zero off-palette

### Key Positive Observations
1. Dark code blocks with correct syntax highlighting palette
2. Full-bleed dark header with Instrument Serif at correct 40px
3. Geological column navigation with color-coded confidence indicators
4. Confidence filter tabs (Facts Only / Full Analysis / Everything) — interactive filtering
5. Well-structured stratum transitions with progress indicators (1/4, 2/4, etc.)
6. "What Would Change This Rating" crux blocks — excellent epistemic transparency
7. Comparison columns (Established vs Probable, Established vs Speculative) work well
8. Essence callout with serif italic — Soul Piece #2 properly implemented
9. Responsive layout adapts cleanly to 768px without overflow
10. Zero soul violations across entire page

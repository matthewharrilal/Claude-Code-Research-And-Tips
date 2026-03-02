# CSS Audit: tokens.css + components.css Rewrite

**Auditor:** Fresh-eyes Opus agent (Task #38)
**Date:** 2026-03-01
**Reference:** MASTER-SYNTHESIS.md (706 lines, Sections 2-3 primary)
**Method:** Line-by-line comparison against MASTER-SYNTHESIS removal/addition lists, cross-checked against soul constraints and exploration evidence

---

## PART 1: tokens.css AUDIT

**File:** `design-system/compositional-core/vocabulary/tokens.css` (124 lines)

### 1.1 Pipeline-Invented Tokens: Were ALL 11 Removed?

| # | Token | Expected Action | Status | Evidence |
|---|-------|----------------|--------|----------|
| 1 | `--bg-page: #FAFAFA` | DELETE | **REMOVED** | Not present in file |
| 2 | `--bg-info: #F5F8FA` | DELETE | **REMOVED** | Not present (note: `--bg-callout-info` is a DIFFERENT token, correctly added) |
| 3 | `--bg-tip: #F5FAF5` | DELETE | **REMOVED** | Not present (note: `--bg-callout-tip` is a DIFFERENT token, correctly added) |
| 4 | `--bg-gotcha: #FEF6F5` | DELETE | **REMOVED** | Not present (note: `--bg-callout-gotcha` is a DIFFERENT token, correctly added) |
| 5 | `--bg-summary: #FEF9F0` | DELETE | **REMOVED** | Not present in file |
| 6 | `--bg-dark: #1E1E1E` | DELETE | **REMOVED** | Not present in file |
| 7 | `--text-secondary: #444444` | DELETE | **REMOVED** | Not present. `--color-text-secondary: #666666` correctly retained (genuine) |
| 8 | `--text-tertiary: #888888` | DELETE | **REMOVED** | Not present in file |
| 9 | `--text-muted: #AAAAAA` | DELETE | **REMOVED** | Not present in file |
| 10 | `--space-max-section: 64px` | DELETE | **REMOVED** | Not present in file |
| 11 | `--space-max-zone: 96px` | DELETE | **REMOVED** | Not present in file |

**Result: 11/11 REMOVED. PASS.**

### 1.2 Duplicate/Alias Tokens: Were ALL 6 Removed?

| # | Token | Redundant With | Status | Evidence |
|---|-------|---------------|--------|----------|
| 1 | `--bg-warm: #FEF9F5` | `--color-background` | **REMOVED** | Not present |
| 2 | `--text-primary: #1A1A1A` | `--color-text` | **REMOVED** | Not present |
| 3 | `--text-inverse: #FFFFFF` | Never tokenized in explorations | **REMOVED** | Not present |
| 4 | `--border-left-width: 4px` | `--border-structural` | **REMOVED** | Not present. `--border-structural: 4px` correctly retained |
| 5 | `--type-body: 1rem` | `--text-base` | **REMOVED** | Not present (part of --type-* scale removal) |
| 6 | `--type-code: 0.875rem` | `--text-sm` | **REMOVED** | Not present |
| 7 | `--type-meta: 0.75rem` | `--text-xs` | **REMOVED** | Not present |

**Result: 7/7 REMOVED (synthesis listed 6, but --type-meta was also a duplicate). PASS.**

### 1.3 Entire --type-* Scale: Was It Removed?

Grepped for `--type-` in tokens.css: **Zero matches.**

The dual type scale (`--type-page`, `--type-section`, `--type-subsection`, `--type-body`, `--type-code`, `--type-meta`) is fully removed. Only the `--text-*` scale remains (lines 62-70).

**Result: PASS.**

### 1.4 CD-006 Opaque Callout Backgrounds: Were ALL 5 Added?

| # | Token | Value | Expected | Status |
|---|-------|-------|----------|--------|
| 1 | `--bg-callout-info` | `#F5F9FE` | ADD | **PRESENT** (line 43) |
| 2 | `--bg-callout-tip` | `#F2F9F4` | ADD | **PRESENT** (line 44) |
| 3 | `--bg-callout-gotcha` | `#FEF6F5` | ADD | **PRESENT** (line 45) |
| 4 | `--bg-callout-challenge` | `#FFFBF2` | ADD | **PRESENT** (line 46) |
| 5 | `--bg-callout-essence` | `#F8F5FE` | ADD | **PRESENT** (line 47) |

All 5 values match MASTER-SYNTHESIS Section 3.2 exactly.

**Result: 5/5 ADDED. PASS.**

### 1.5 Genuine Tokens: Are All Still Present?

**6 Primary Colors:**

| Token | Value | Status |
|-------|-------|--------|
| `--color-primary` | `#E83025` | PRESENT (line 22) |
| `--color-background` | `#FEF9F5` | PRESENT (line 23) |
| `--color-text` | `#1A1A1A` | PRESENT (line 24) |
| `--color-text-secondary` | `#666666` | PRESENT (line 25) |
| `--color-border` | `#E0D5C5` | PRESENT (line 26) |
| `--color-border-subtle` | `#F0EBE3` | PRESENT (line 27) |

**5 Accent Colors:**

| Token | Value | Status |
|-------|-------|--------|
| `--accent-blue` | `#4A90D9` | PRESENT (line 30) |
| `--accent-green` | `#4A9D6B` | PRESENT (line 31) |
| `--accent-coral` | `#C97065` | PRESENT (line 32) |
| `--accent-amber` | `#D97706` | PRESENT (line 33) |
| `--accent-purple` | `#7C3AED` | PRESENT (line 34) |

**3 Fonts:**

| Token | Value | Status |
|-------|-------|--------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | PRESENT (line 57) |
| `--font-body` | `'Inter', system-ui, sans-serif` | PRESENT (line 58) |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | PRESENT (line 59) |

**Text Scale (9 values):** All present (lines 62-70).

**Spacing Scale (11 values + 3 gestalt aliases + 1 grid):** All present (lines 75-93).

**Border Widths (3-weight system):** All present (lines 98-100).

**Syntax Highlighting (7 colors):** All present (lines 105-111).

**Result: ALL genuine tokens retained. PASS.**

### 1.6 Soul Constraints Present?

| Constraint | Status | Line |
|-----------|--------|------|
| `--border-radius: 0` | PRESENT | Line 14 |
| `--box-shadow: none` | PRESENT | Line 15 |

**Result: PASS.**

### 1.7 --bg-dark Value Correction

The synthesis required `--bg-dark` to be REMOVED entirely (it was a pipeline invention). The zone background `--color-zone-bedrock: #1A1A1A` (line 40) serves the same purpose using the correct value (#1A1A1A not #1E1E1E).

Grepped for `#1E1E1E`: **Zero matches.** The incorrect value is nowhere in the file.

**Result: PASS.**

### 1.8 Anything That Looks Wrong or Inconsistent?

**Observations:**

1. **`--bg-card: #FFFFFF` (line 50):** This token was NOT in the master synthesis removal list, but it also was NOT in the "keep" list. It's a white surface token. The synthesis (Section 9.2) noted that `white`/`#FFFFFF` is a legitimate component background for surfaces. Keeping this token is CONSISTENT with the resolution. **ACCEPTABLE.**

2. **`--space-24` removed correctly:** The synthesis noted `--space-24: 96px` was OD-004+ only. It is NOT present. The scale correctly tops out at `--space-20: 80px`. **CORRECT.**

3. **Zone backgrounds (lines 37-40):** These 4 zone tokens are present. The synthesis (Section 9.7) noted the OD-F-005 attribution was wrong (CD implementation, not OD). The current file says "CD implementation" in the comment (line 36). **ATTRIBUTION CORRECTED.**

4. **Solid offset tokens (lines 121-123):** `--offset-x: 4px`, `--offset-y: 4px`, `--offset-color: #1A1A1A`. These are genuine (Mechanism #3 in synthesis). Not flagged for removal. **CORRECT.**

5. **Transition token (line 116):** `--transition-standard: 0.3s ease`. Not in removal list. Standard CSS utility. **ACCEPTABLE.**

6. **Accent color ordering:** `--accent-coral` (line 32) is listed before `--accent-amber` (line 33). The synthesis marks coral as "CD-ERA" (Section 1.3). No ordering requirement specified. **ACCEPTABLE.**

**POTENTIAL ISSUE:** The `--space-between` gestalt alias (line 89) maps to `var(--space-8)` which is 32px. The original spacing documentation used `--space-between` for "between related sections" which was typically 32-40px. The mapping to 32px is reasonable but could arguably be `--space-10` (40px). This is a MINOR design decision, not an error. **NOT BLOCKING.**

### tokens.css SUMMARY

| Check | Result |
|-------|--------|
| 11 pipeline-invented tokens removed | **PASS** (11/11) |
| 6+ duplicate/alias tokens removed | **PASS** (7/7) |
| Entire --type-* scale removed | **PASS** |
| 5 CD-006 callout backgrounds added | **PASS** (5/5, all values match) |
| All genuine tokens retained | **PASS** |
| Soul constraints present | **PASS** |
| --bg-dark #1E1E1E eliminated | **PASS** (bedrock uses #1A1A1A) |
| Inconsistencies | **NONE BLOCKING** |

**tokens.css VERDICT: CLEAN. All synthesis recommendations correctly applied.**

---

## PART 2: components.css AUDIT

**File:** `design-system/compositional-core/components/components.css` (780 lines)

### 2.1 Tension-Test Components: Were They Removed?

| Component | Expected Action | Status |
|-----------|----------------|--------|
| `.stratum` | DELETE | **REMOVED** (grep: zero matches) |
| `.stratum-boundary` | DELETE | **REMOVED** |
| `.floor` | DELETE | **REMOVED** |
| `.floor-label` | DELETE | **REMOVED** |
| `.room` | DELETE | **REMOVED** |
| `.compression-grid` | DELETE | **REMOVED** |
| `.compression-cell` | DELETE | **REMOVED** |

**Result: 7/7 REMOVED. PASS.**

### 2.2 Breadcrumb Component: Was It Removed?

Grepped for `breadcrumb`: **Zero matches.**

**Result: PASS.**

### 2.3 Density Indicator: Was It Removed?

Grepped for `density-indicator`, `density-bar`, `density-meter`: **Zero matches.**

**Result: PASS.**

### 2.4 rgba() Callout Backgrounds: Were They Replaced?

Grepped for `rgba(`: **Zero matches in entire file.**

All callout variants now use opaque token references via CSS custom properties:

- `.callout--essence` -> `--callout-bg-color: var(--bg-callout-essence, #F8F5FE)` (line 48)
- `.callout--tip` -> `--callout-bg-color: var(--bg-callout-tip, #F2F9F4)` (line 55)
- `.callout--info/.callout--note` -> `--callout-bg-color: var(--bg-callout-info, #F5F9FE)` (line 63)
- `.callout--gotcha/.callout--warning` -> `--callout-bg-color: var(--bg-callout-gotcha, #FEF6F5)` (line 71)
- `.callout--challenge/.callout--caution` -> `--callout-bg-color: var(--bg-callout-challenge, #FFFBF2)` (line 79)

All fallback hex values match the tokens.css definitions exactly.

**Result: PASS. All rgba() eliminated, replaced with opaque CD-006 tokens.**

### 2.5 --type-* References: Were They Replaced?

Grepped for `--type-` in components.css: **Zero matches.**

All typography references use the `--text-*` scale exclusively (e.g., `var(--text-xs, 12px)`, `var(--text-sm, 14px)`, `var(--text-base, 16px)`, `var(--text-h3, 22px)`).

**Result: PASS.**

### 2.6 Page Header Background: Using var() Instead of Bare "white"?

Line 180: `background: var(--color-zone-dense, #FFFFFF);`

The bare `white` keyword has been replaced with a proper token reference. The fallback value `#FFFFFF` is acceptable as a CSS fallback (not a declaration of bare white).

Grepped for `background: white` or `background: #FFF`: **Zero matches.**

**Result: PASS.**

### 2.7 Soul Constraints: Are They Maintained Throughout?

**border-radius:**
All 6 instances use `var(--border-radius, 0)`:
- Line 97: `pre` element
- Line 120: `p code, li code`
- Line 127: `.code-snippet`
- Line 153: `.code-snippet__copy`
- Line 281: `.skip-link`
- Line 467: `.question__marker`

No instances of non-zero border-radius anywhere. **PASS.**

**box-shadow:**
Only reference is the comment in file header (line 3): "Soul compliance: border-radius: 0, box-shadow: none". No `box-shadow` property is used anywhere in the file. **PASS.**

No `filter: drop-shadow` found. **PASS.**

**Result: FULL SOUL COMPLIANCE.**

### 2.8 Density-Meter (CD-ONLY): Was It Removed?

Grepped for `density-meter`: **Zero matches.**

**Result: PASS.**

### 2.9 Missing Components That Should Be There?

The synthesis (Section 4) proposed components.css at ~700 lines. Current file is 780 lines, which is close to target.

**Components present (verified):**

Universal components:
- Callout family (`.callout` + 5 semantic variants + essence variant) -- PRESENT
- Code blocks (`pre`, `code`, inline code, `.code-snippet` with header) -- PRESENT
- Page header (`.exploration-header` / `.page-header`) -- PRESENT
- Page footer (`.page-footer`) -- PRESENT
- Tables (`table`, `th`, `td`) -- PRESENT
- Skip link (`.skip-link`) -- PRESENT
- Focus-visible (`*:focus-visible`) -- PRESENT
- Selection styling (`::selection`) -- PRESENT
- Stats bar / metadata grid (`.stats-bar`, `.stat-item`) -- PRESENT
- Section indicator / meta line (`.section-indicator`, `.meta-line`) -- PRESENT
- File tree (`.file-tree`) -- PRESENT
- Decision matrix (`.decision-matrix`) -- PRESENT
- Q&A pair (`.question`, `.answer`, `.answer__lead--dropcap`) -- PRESENT

CD-era components:
- Reasoning component (`.reasoning`) -- PRESENT
- Core abstraction (`.core-abstraction`) -- PRESENT
- Bento grid (`.bento-grid`, `.bento-cell`) -- PRESENT
- Essence pullquote (`.essence-pullquote`) -- PRESENT
- Version badge (`.version-badge`) -- PRESENT
- Section zones (`.section-zone` + 5 variants) -- PRESENT
- Breathing zones (`.breathing-zone` + variants) -- PRESENT

Responsive utilities (768px breakpoint) -- PRESENT
Reduced motion accessibility -- PRESENT

**No missing components identified.** The component inventory is comprehensive.

### 2.10 CSS Values That Look Wrong?

**Detailed scan:**

1. **`.page-header__*` dual API (lines 184-207):** The synthesis Section 4 proposed removing the `.page-header__*` invented names and keeping only `.exploration-*`. The current file retains BOTH:
   - `.exploration-id, .page-header__id` (line 184-185)
   - `.exploration-title, .page-header__title` (line 194-195)
   - `.exploration-hypothesis, .page-header__subtitle` (line 202-203)

   **FINDING: The `.page-header__*` class names were NOT removed.** The synthesis specifically said: "Remove dual header API (.page-header__* invented names)" (Section 4, Layer 2 Reference). However, the `.page-header` base class (line 177) IS used in explorations, so the dual selector approach is a reasonable compromise. **MINOR -- not blocking, but deviates from synthesis recommendation.**

2. **`.question__text` font-size (line 472):** Uses `var(--text-h3, 22px)` but `--text-h3` in tokens.css is defined as `1.5rem` (= 24px at default). The fallback of 22px doesn't match the token value. **MINOR INCONSISTENCY** -- the token will override the fallback in practice, so no visual bug, but the fallback should ideally be 24px to match.

3. **`.core-abstraction__quote` font-size (line 576):** Uses `var(--text-h3, 24px)`. Here the fallback IS 24px, which matches. Inconsistent with line 472's 22px fallback for the same token. **COSMETIC.**

4. **`.reasoning__title` font-size (line 535):** Uses `var(--text-h3, 22px)`. Same 22px vs 24px fallback inconsistency as item 2. **COSMETIC.**

5. **`.essence-pullquote p` font-size (line 640):** Uses `var(--text-h3, 24px)`. Correct fallback. **OK.**

6. **Various `font-size: 10px` and `font-size: 11px` bare values** (lines 187, 399, 433, etc.): Some label/meta elements use bare pixel values instead of `var(--text-xs)`. The token `--text-xs` is 0.75rem = 12px, so 10px/11px are intentionally smaller. This is acceptable as these are specific design choices for micro-labels. **ACCEPTABLE.**

7. **`.stats-bar__label font-size: var(--text-xs, 10px)` (line 323):** `--text-xs` is 12px but fallback says 10px. Mismatch, but token overrides. **COSMETIC INCONSISTENCY.**

8. **`table` has `display: block` (line 238):** This is unusual for a table element. It enables `overflow-x: auto` for horizontal scrolling on narrow viewports. This is a deliberate responsive pattern. **INTENTIONAL.**

---

## SUMMARY

### tokens.css

| Check | Status |
|-------|--------|
| 11 pipeline-invented tokens removed | PASS |
| 6+ duplicate/alias tokens removed | PASS (7 removed) |
| Entire --type-* scale removed | PASS |
| 5 CD-006 callout backgrounds added | PASS |
| All genuine tokens retained | PASS |
| Soul constraints present | PASS |
| --bg-dark corrected | PASS (removed entirely; bedrock uses #1A1A1A) |
| Values correct | PASS |

**tokens.css VERDICT: CLEAN. Zero issues.**

### components.css

| Check | Status | Severity |
|-------|--------|----------|
| Tension-test components removed | PASS | -- |
| Breadcrumb removed | PASS | -- |
| Density indicator removed | PASS | -- |
| rgba() replaced with opaque tokens | PASS | -- |
| --type-* replaced with --text-* | PASS | -- |
| Page header background uses var() | PASS | -- |
| Soul constraints (border-radius: 0) | PASS (6/6 instances) | -- |
| Soul constraints (box-shadow: none) | PASS (zero usage) | -- |
| Density-meter removed | PASS | -- |
| No missing components | PASS | -- |
| `.page-header__*` dual API retained | **DEVIATION** | MINOR |
| `--text-h3` fallback inconsistency (22px vs 24px) | **COSMETIC** | TRIVIAL |
| Some `--text-xs` fallbacks say 10px (token = 12px) | **COSMETIC** | TRIVIAL |

**components.css VERDICT: CLEAN with 1 minor deviation and 2 trivial cosmetic inconsistencies.**

### BLOCKING ISSUES: **ZERO**

### RECOMMENDED FIXES (non-blocking):

1. **MINOR:** Either remove `.page-header__*` selectors (per synthesis) or document the dual API as intentional. Current state is ambiguous.

2. **TRIVIAL:** Standardize `--text-h3` fallback to 24px (not 22px) at lines 472, 535 where the fallback doesn't match the token value of 1.5rem.

3. **TRIVIAL:** Standardize `--text-xs` fallback to 12px (not 10px) in places where it's used with the token reference.

### OVERALL VERDICT: **PASS**

Both files correctly implement the MASTER-SYNTHESIS recommendations. All fabricated content has been removed. All genuine tokens are retained. Soul compliance is complete. The 5 CD-006 callout background tokens are properly added and referenced. The rgba-to-opaque migration is complete. The --type-* scale has been fully eliminated.

The rewrite is clean and ready for use.

# PRE-FLIGHT VALIDATION

**Validator:** pre-flight-validator (Opus 4.6)
**Date:** 2026-02-18
**Inputs:** 12-ENHANCED-REMEDIATION-SPEC.md (1,025 lines), 07-intentionality.html (2,034 lines), prohibitions.md (420 lines), tokens.css (184 lines)

---

## BLOCKING ISSUES (must fix before building)

### B-01: Cool-Toned Zone Backgrounds Violate Prohibition #16

The spec (Phase 2, lines 298-308) introduces THREE cool-toned gray values:
- `--color-zone-s5: #FAFAFA` (cool gray -- NO warm component)
- `--color-zone-s7: #F8F8F8` (cool gray -- NO warm component)
- `--color-zone-s8: #F0F0F0` (cool gray -- NO warm component, dangerously close to forbidden `#F5F5F5`)

Prohibition #16 states: "NEVER Use Cool-Toned Grays (#F5F5F5, #E0E0E0, etc.) -- Cool grays = sterile, institutional. KortAI uses warm earth tones."

tokens.css confirms `--color-zone-dense: #FFFFFF` and `--bg-page: #FAFAFA` exist as available tokens, but these are the ONLY near-neutral values. `#F0F0F0` and `#F8F8F8` have zero warm tint.

**Classification: BLOCKING.** These values must be replaced with warm-neutral equivalents. Suggested replacements:
- S5: `#FAF8F5` (warm near-white, maintains analytical coolness while adding warm tint)
- S7: `#F8F6F3` (warm light gray)
- S8: `#F2EFEA` (warm mid-gray, provides needed contrast for T7 transition)

### B-02: Callout Info Background Violates Prohibition #16

The spec (Phase 3, Step 3.4, line 432) introduces:
- `.callout--info { background-color: #F5F8FA; }`

`#F5F8FA` is a cool blue-gray (blue channel > red channel). This violates the warm palette requirement.

**Classification: BLOCKING.** Replace with warm-tinted equivalent: `#FAF8F5` or `#FEF9F5`.

### B-03: Callout Tip Background -- Potential Cool Tone

The spec (line 444) introduces:
- `.callout--tip { background-color: #F5FAF5; }`

`#F5FAF5` has a slight green tint (green channel highest). This is borderline -- it's semantically motivated (green = tip) but the warm palette may not accommodate it.

**Classification: SIGNIFICANT WARNING (downgraded from BLOCKING).** The green tint is semantic (matches tip callout's green border) and very subtle. Builder should evaluate in context. If it reads as cool, replace with `#FAF8F0`.

### B-04: Missing `--color-text-secondary` Fallback in Section Indicator

The spec (Phase 6, line 700) uses:
```css
color: var(--color-text-secondary, #8A8580);
```

The HTML's `:root` block defines `--color-text-secondary: #6B6B6B` (line 74). This is a COOL gray value that also potentially violates Prohibition #16's spirit (though it applies to text color, not backgrounds). The fallback `#8A8580` is actually warmer.

**Classification: NOT BLOCKING** (text colors are not explicitly covered by Prohibition #16, which targets backgrounds). But builder should be aware that existing `#6B6B6B` is cool-toned while the fallback `#8A8580` is warm.

---

## SIGNIFICANT WARNINGS (builder should address)

### W-01: Spec Phase 5.3 Section Padding Uses `!important` Extensively

Phase 5.3 (lines 645-649) overrides ALL 12 section paddings with `!important`:
```css
.zone-s1, .zone-s3 { padding-top: var(--space-16) !important; padding-bottom: var(--space-10) !important; }
```

This is JUSTIFIED because the inline `style=""` attributes on sections have higher specificity. However, the spec also says Phase 5.2 overrides S2's padding with `!important` -- but Phase 5.3 does NOT include S2 in any rule. This means S2 gets ONLY the Phase 5.2 override (48px top, 40px bottom) and NOT a zone-group override, which is the intended behavior.

**Action:** Builder should verify S2 is intentionally excluded from Phase 5.3 (it has the pullquote, needs different padding).

### W-02: `.page-container` Is NOT Inside Every Zone Section

The spec Phase 3.1 targets `.zone-sN .page-container` for section-level borders. Verified: all 12 sections (S1-S12) DO contain a `<div class="page-container">` child. PASSES.

However, `.page-container` is also used in divider wrapper divs (11 instances at lines 1085, 1113, 1192, 1262, 1388, 1421, 1504, 1652, 1747, 1813, 1962) with inline `style="max-width: 960px; margin: 0 auto; padding: 0 var(--space-8);"`. These are NOT `.page-container` classes -- they use inline styles instead. No conflict.

### W-03: `.section-meta` to `.section-indicator` Rename (Phase 1.6) -- CSS Must Address Both

The spec renames HTML from `.section-meta` to `.section-indicator` (Phase 1.6) and adds new `.section-indicator` CSS (Phase 6, line 697). However, the existing `.section-meta` CSS (line 1012 of HTML) will become dead code after the rename. The builder should DELETE the old `.section-meta` rule when adding `.section-indicator`.

### W-04: Inline Style on S2 Section Has 80px Padding

S2 (line 1097): `style="padding-top: var(--space-20); padding-bottom: var(--space-20);"` where `--space-20: 80px`.

Phase 5.2 addresses this: `.zone-s2 { padding-top: 48px !important; padding-bottom: 40px !important; }`. The `!important` is necessary and correct. PASSES.

### W-05: Inline `style` on Component Labels in S7

Three tension labels (lines 1453, 1469, 1485) have:
```html
<div class="component-label" style="color: var(--color-coral);">
```

After Phase 1.5 converts these to `.callout .callout__label`, the new CSS `.callout--gotcha .callout__label { color: var(--color-coral); }` will conflict with the inline `style="color: var(--color-coral);"`. The inline style and the CSS rule set the SAME value (`--color-coral`), so there is no visual conflict. But the inline style is redundant and should be removed during HTML restructuring for cleanliness.

### W-06: `--color-border` Discrepancy Between HTML and tokens.css

- HTML `:root`: `--color-border: #D4C5B5` (line 75)
- tokens.css: `--color-border: #E0D5C5` (line 31)

These differ by 12 RGB points per channel. The spec does not change this value. The builder should decide which is authoritative. tokens.css is the canonical source, so `#E0D5C5` should be used. The builder should update the HTML's `:root` to match.

### W-07: `--color-border-subtle` Discrepancy

- HTML `:root`: `--color-border-subtle: #E8DDD0` (line 76)
- tokens.css: `--color-border-subtle: #F0EBE3` (line 32)

Differ by 8-14 RGB points. Same recommendation as W-06.

### W-08: Spec References `.table-wrapper` Overflow in Responsive -- Must Add to Grid Children

Phase 7 responsive (line 781): `.table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }`. This already exists in base CSS (line 290). The responsive addition is for `touch` scrolling specifically. No conflict, but redundant `overflow-x: auto` declaration.

---

## INFORMATIONAL (noted for record)

### I-01: Phase 0 Deallocation Line Numbers Are Approximate

The spec references line numbers (e.g., "lines ~736-834", "lines ~840-890") that are approximate. The builder should search by the CSS comment markers indicated (e.g., `/* --- Zone 1: Typographic variety ---*/`) rather than relying on line numbers, as prior edits may shift line positions.

### I-02: Spec Component Block Fallback

Phase 3.4 (line 456-462) provides fallback styling for unconverted `.component-block` instances. Since Phase 1.5 converts ALL 9 component blocks, this fallback may be unnecessary. However, keeping it as defense-in-depth is acceptable.

### I-03: `--color-text-secondary` Has Two Values

- HTML `:root`: `--color-text-secondary: #6B6B6B` (line 74)
- tokens.css: `--color-text-secondary: #666666` (line 30)

Minor discrepancy (5 points in each channel). Not impactful.

### I-04: Print Styles Reference `#f5f5f5` for Sequence Block Background

Phase 7 print styles (line 761): `.sequence-block { background: #f5f5f5; }`. This is a cool gray, but it's only for print media and is not visible on screen. Technically violates the spirit of Prohibition #16 but is pragmatically acceptable for print (where warm tones may not reproduce well).

---

## Detailed Checks

### 1. Selector Existence

| Selector | Exists in HTML? | Count | Lines |
|----------|----------------|-------|-------|
| `.zone-s1` | YES | 1 | 1066 |
| `.zone-s2` | YES | 1 | 1097 |
| `.zone-s3` | YES | 1 | 1132 |
| `.zone-s4` | YES | 1 | 1204 |
| `.zone-s5` | YES | 1 | 1282 |
| `.zone-s6` | YES | 1 | 1401 |
| `.zone-s7` | YES | 1 | 1441 |
| `.zone-s8` | YES | 1 | 1523 |
| `.zone-s9` | YES | 1 | 1670 |
| `.zone-s10` | YES | 1 | 1761 |
| `.zone-s11` | YES | 1 | 1832 |
| `.zone-s12` | YES | 1 | 1985 |
| `.page-container` (inside zones) | YES | 12 (1 per zone) | 1067, 1098, 1133, etc. |
| `.component-block` (body HTML) | YES | 9 | 1180, 1376, 1452, 1458, 1468, 1474, 1484, 1490, 2000 |
| `.divider-smooth` | YES | 6 | 1086, 1193, 1389, 1422, 1748, 1814 |
| `.divider-bridge` | YES | 4 | 1114, 1263, 1505, 1963 |
| `.divider-breathing` | YES | 1 | 1653 |
| `.bridge-prose` | YES | 6 | 1116, 1265, 1424, 1507, 1655, 1965 |
| `.tension-group` | YES | 3 | 1451, 1467, 1483 |
| `.sequence-block` | YES | 4 | 1605, 1614, 1624, 1633 |
| `.table-compact` | YES | 2 | 1144, 1219 |
| `.table-featured` | YES | 1 | 1296 |
| `.table-dense` | YES | 4 (combined) | 1296, 1533, 1680, 1771 |
| `.table-moderate` | YES | 1 | 1533 |
| `.table-warning` | YES | 1 | 1771 |
| `.table-light` | YES | 3 | 1845, 1883, 1921 |
| `.table-findings` | YES | 1 | 1680 |
| `.section-meta` | YES | 12 | 1069, 1100, 1135, 1207, 1285, 1404, 1444, 1526, 1673, 1764, 1835, 1988 |
| `.hypothesis-group-2` | YES | 1 | 1878 |
| `.hypothesis-group-3` | YES | 1 | 1916 |

**NEW selectors in spec (created by Phase 1 HTML changes):**

| New Selector | Created By | Status |
|-------------|-----------|--------|
| `.callout` | Phase 1.5 (replaces `.component-block`) | Builder creates |
| `.callout__label` | Phase 1.5 (replaces `.component-label`) | Builder creates |
| `.callout__body` | Phase 1.5 (replaces `.component-body`) | Builder creates |
| `.callout--info` | Phase 1.5 | Builder creates |
| `.callout--gotcha` | Phase 1.5 | Builder creates |
| `.callout--tip` | Phase 1.5 | Builder creates |
| `.callout--essence` | Phase 1.5 | Builder creates |
| `.section-indicator` | Phase 1.6 (replaces `.section-meta`) | Builder creates |
| `.tension-pair` | Phase 1.7 (replaces `.tension-group` wrapper) | Builder creates |
| `.sequence-grid` | Phase 1.8 (new wrapper) | Builder creates |
| `.hypothesis-grid` | Phase 1.9 (new wrapper) | Builder creates |
| `.skip-link` | Phase 1.1 | Builder creates |
| `main#main-content` | Phase 1.1 | Builder creates |

**All existing selectors verified present. All new selectors will be created by Phase 1 HTML changes. PASS.**

### 2. Soul Compliance

| Check | Spec CSS | Violation? | Classification |
|-------|----------|-----------|----------------|
| border-radius > 0 | NONE found in spec | NO | PASS |
| box-shadow | NONE found in spec | NO | PASS |
| linear-gradient / radial-gradient | NONE found in spec | NO | PASS |
| opacity < 1 on containers | NONE found in spec | NO | PASS |
| Pure #000000 backgrounds | NONE found in spec | NO | PASS |
| Pure #FFFFFF backgrounds | NONE found in spec | NO | PASS |
| Cool-toned grays (Prohibition #16) | `#FAFAFA` (S5), `#F8F8F8` (S7), `#F0F0F0` (S8), `#F5F8FA` (callout--info) | YES | **BLOCKING (B-01, B-02)** |
| Non-palette colors used as backgrounds | `#FEF5EB`, `#F5EDE2`, `#FBF3E8`, `#F8F6F3`, `#F5F0E8`, `#FEF7F0`, `#F8F2EA`, `#FEF0EE`, `#F5FAF5`, `#FEF6F5` | Warm-tinted, ACCEPTABLE | PASS |
| Instrument Serif for body text (#7) | `.callout--essence { font-family: var(--font-display); }` (line 451) | ACCEPTABLE -- Essence callouts use serif per anti-patterns registry line 172-188 which allows serif for essence ONLY | PASS |

**Summary: 2 BLOCKING issues (B-01, B-02) on cool-toned values. All other soul checks PASS.**

### 3. Inline Style Conflicts

| Element | Line | Inline Properties | Spec Override? | Conflict? |
|---------|------|-------------------|----------------|-----------|
| `section.zone-s1` | 1066 | `padding-top: var(--space-16); padding-bottom: var(--space-16)` | Phase 5.3: `!important` override | YES -- spec uses `!important` to resolve. HANDLED. |
| `section.zone-s2` | 1097 | `padding-top: var(--space-20); padding-bottom: var(--space-20)` | Phase 5.2: `!important` override (48px/40px) | YES -- spec uses `!important` to resolve. HANDLED. |
| `section.zone-s3` | 1132 | `padding-top: var(--space-12); padding-bottom: var(--space-12)` | Phase 5.3: `!important` override | YES -- spec uses `!important` to resolve. HANDLED. |
| `section.zone-s4` | 1204 | `padding-top: var(--space-12); padding-bottom: var(--space-12)` | Phase 5.3: `!important` override | HANDLED. |
| `section.zone-s5` | 1282 | `padding-top: var(--space-8); padding-bottom: var(--space-8)` | Phase 5.3: `!important` override (same values) | HANDLED (no visual change). |
| `section.zone-s6` | 1401 | `padding-top: var(--space-10); padding-bottom: var(--space-10)` | Phase 5.3: `!important` override | HANDLED. |
| `section.zone-s7` | 1441 | `padding-top: var(--space-8); padding-bottom: var(--space-8)` | Phase 5.3: `!important` override (same values) | HANDLED. |
| `section.zone-s8` | 1523 | `padding-top: var(--space-8); padding-bottom: var(--space-8)` | Phase 5.3: `!important` override (same values) | HANDLED. |
| `section.zone-s9` | 1670 | `padding-top: var(--space-10); padding-bottom: var(--space-10)` | Phase 5.3: `!important` override (48px/40px) | YES -- spec changes from 40px to 48px top. HANDLED. |
| `section.zone-s10` | 1761 | `padding-top: var(--space-10); padding-bottom: var(--space-10)` | Phase 5.3: same as S9 | HANDLED. |
| `section.zone-s11` | 1832 | `padding-top: var(--space-12); padding-bottom: var(--space-12)` | Phase 5.3: `!important` override | HANDLED. |
| `section.zone-s12` | 1985 | `padding-top: var(--space-16); padding-bottom: var(--space-16)` | Phase 5.3: `!important` override (48px/64px) | YES -- spec changes from 64px/64px to 48px/64px. HANDLED. |
| `.bridge-prose` (x6) | 1116, etc. | `margin-bottom: var(--space-8)` (32px) | Phase 3.3 sets `margin-bottom: 16px` | **CONFLICT** -- inline `margin-bottom: 32px` will OVERRIDE Phase 3.3's `margin-bottom: 16px` because inline > class. Spec does NOT use `!important` for bridge-prose. |
| `.component-block.sparse` (S12) | 2000 | `margin-top: var(--space-8)` | Phase 1.5 converts to `.callout--essence`. New `.callout` rule sets `margin: var(--space-6) 0`. Inline `margin-top: 32px` will override. | MINOR -- 32px vs 24px margin-top. Visually acceptable. |
| `.component-label` in S7 (x3) | 1453, 1469, 1485 | `color: var(--color-coral)` | Phase 1.5 creates `.callout--gotcha .callout__label { color: var(--color-coral) }` | NO CONFLICT -- same value. But inline is redundant. |
| `td` elements with color (x7) | 1321, etc. | `color: var(--color-amber)` / `var(--color-blue)` / `var(--color-coral)` | No spec override | NO CONFLICT. |
| `.table-wrapper` in S11 (x2) | 1882, 1920 | `margin-top: var(--space-4)` | No specific override | NO CONFLICT. |
| Divider wrapper divs (x11) | 1085, etc. | `max-width: 960px; margin: 0 auto; padding: 0 var(--space-8)` | No override | NO CONFLICT. |
| `.component-block .component-body p` in S3 | 1184 | `margin-top: var(--space-3)` | Phase 1.5 converts to callout. `.callout__body p { margin-bottom: 0 }` does not address `margin-top`. | NO CONFLICT on margin-top. |

**BLOCKING INLINE CONFLICT:**

**B-05: bridge-prose `margin-bottom` inline style overrides Phase 3.3**

Six `.bridge-prose` elements have `style="margin-bottom: var(--space-8);"` (32px). The spec's Phase 3.3 sets `.bridge-prose { margin-bottom: 16px; }` -- but this CSS rule CANNOT override the inline style without `!important`.

**Fix:** Either:
- (a) Add `!important` to Phase 3.3: `.bridge-prose { margin-bottom: 16px !important; }`
- (b) Remove the inline `style="margin-bottom: var(--space-8);"` from all 6 bridge-prose elements during Phase 1

Option (b) is cleaner. Builder should remove inline styles from bridge-prose divs during HTML restructuring.

### 4. Dependencies

| Phase 0 Deletion | Referenced by Phases 2-7? | Conflict? |
|-------------------|--------------------------|-----------|
| Typographic convergence gradient (lines ~736-834) | Phase 4 replaces ALL typographic variation | NO -- Phase 4 provides new values for every zone |
| Spatial compression micro-modulations (lines ~840-890) | Phase 5 replaces all section padding + paragraph margins | NO -- Phase 5 provides new values |
| Per-zone border color shifts (lines ~896-963) | Not referenced by any later phase | NO |
| Per-zone heading color shifts (same block) | Phase 4.2 provides new heading colors | NO |
| Rhythmic micro-modulations (lines ~970-977) | Phase 5 provides new spatial values | NO |
| Extra paragraph breathing (lines ~758-762) | Phase 5.1 provides new paragraph margins | NO |
| `.hypothesis-group-2`, `.hypothesis-group-3` CSS (lines 999-1005) | Phase 1.9 REMOVES these HTML wrappers and replaces with `.hypothesis-grid`. NEW CSS in Phase 3.5 styles `.hypothesis-grid`. | NO CONFLICT -- old CSS becomes dead code, new CSS replaces functionality. |

**However:** Phase 0.2 says "Keep ONLY" `.zone-s5 .component-block { margin: 16px 0; }` and `.zone-s7 .component-block { margin: 16px 0; }`. After Phase 1.5 renames component-block to callout, these kept rules become dead code. **Not a conflict**, just inefficiency. The builder could skip keeping them if Phase 1.5 runs before Phase 0.2.

**Recommendation:** Execute Phase 0 BEFORE Phase 1 (as spec says). The kept rules in Phase 0.2 will survive until Phase 1.5 renames the classes, at which point they become dead but harmless.

**No circular dependencies found. PASS.**

### 5. Missing Custom Properties

Custom properties used in spec's new CSS:

| Property | Defined in HTML `:root`? | Value |
|----------|-------------------------|-------|
| `--color-border` | YES | `#D4C5B5` (but tokens.css says `#E0D5C5`) |
| `--color-primary` | YES | `#E83025` |
| `--color-text` | YES | `#1A1A1A` |
| `--color-coral` | YES | `#E83025` (same as primary) |
| `--color-green` | YES | `#4A9D6B` |
| `--color-amber` | YES | `#D97706` |
| `--color-zone-breathing` | YES | `#FAF5ED` |
| `--color-border-subtle` | YES | `#E8DDD0` (but tokens.css says `#F0EBE3`) |
| `--color-background` | YES | `#FEF9F5` |
| `--font-mono` | YES | `'JetBrains Mono', monospace` |
| `--font-body` | YES | `'Inter', sans-serif` |
| `--font-display` | YES | `'Instrument Serif', serif` |
| `--space-1` through `--space-24` | YES | All defined |
| `--border-micro` | YES | `1px` |
| `--border-accent` | YES | `3px` |
| `--border-structural` | YES | `4px` |
| `--color-text-secondary` | YES | `#6B6B6B` |
| `--type-body` | YES | `16px` |
| `--type-meta` | YES | `12px` |
| `--type-h2` | YES | `28px` |

**All custom properties exist in HTML `:root`. PASS.**

**Note:** `--color-text-secondary` is used with a fallback in one place: `var(--color-text-secondary, #8A8580)` (Phase 6, line 700). This is defensive coding. Acceptable.

### 6. Specificity Issues

| New Rule | Existing Rule | Specificity Comparison | Override? |
|----------|--------------|----------------------|-----------|
| `.zone-s2 .page-container { border-left: 3px... }` | `.page-container { max-width: 960px }` | Both 0-1-0 vs 0-2-0 for zone version | YES -- zone version higher. PASS. |
| `.zone-s1 p { font-size: 17px; }` | `section p { font-size: var(--type-body); }` | 0-1-1 (zone) vs 0-0-2 (section p) | Zone wins. PASS. |
| `.zone-s5 h2 { font-weight: 600; }` | `section h2 { font-weight: 400; }` | 0-1-1 vs 0-0-2 | Zone wins. PASS. |
| Phase 5.3 `!important` overrides | Inline `style=""` | `!important` beats inline | YES. PASS. |
| `.callout { border-left: 4px... }` | `.component-block { border-left: 4px... }` | Same specificity, but after rename only `.callout` exists | No conflict (rename eliminates old class). PASS. |
| `.section-indicator { ... }` | `.section-meta { ... }` | Same specificity, but after rename only `.section-indicator` exists | No conflict (rename eliminates old class). PASS. |
| `table thead tr { background-color: #F5F0E8; }` | `table thead tr { border-bottom: 3px solid... }` | Same specificity | No property conflict (background vs border). PASS. |

**Existing `!important` declarations in HTML CSS:**
- `* { border-radius: 0 !important; }` -- NOT overridden by spec. PASS.
- `* { box-shadow: none !important; }` -- NOT overridden by spec. PASS.

**No specificity issues found. PASS.**

---

## SUMMARY

| Check Category | Result |
|---------------|--------|
| 1. Selector Existence | **PASS** -- All 34 existing selectors confirmed. 13 new selectors created by Phase 1. |
| 2. Soul Compliance | **FAIL** -- 2 BLOCKING (B-01: cool zone backgrounds, B-02: cool callout--info background) |
| 3. Inline Style Conflicts | **FAIL** -- 1 BLOCKING (B-05: bridge-prose margin-bottom inline overrides Phase 3.3) |
| 4. Dependencies | **PASS** -- No circular dependencies between phases |
| 5. Missing Custom Properties | **PASS** -- All var(--xxx) exist in :root |
| 6. Specificity Issues | **PASS** -- All new rules have sufficient specificity |

### Total Issues

| Severity | Count | IDs |
|----------|-------|-----|
| BLOCKING | 3 | B-01 (cool zone backgrounds), B-02 (cool callout-info bg), B-05 (bridge-prose inline override) |
| SIGNIFICANT WARNING | 8 | W-01 through W-08 |
| INFORMATIONAL | 4 | I-01 through I-04 |

### Recommended Fixes Before Building

1. **B-01:** Replace `#FAFAFA` -> `#FAF8F5`, `#F8F8F8` -> `#F8F6F3`, `#F0F0F0` -> `#F2EFEA` in Phase 2 zone backgrounds
2. **B-02:** Replace `#F5F8FA` -> `#FAF8F5` in `.callout--info` background
3. **B-05:** Either add `!important` to Phase 3.3 bridge-prose margin-bottom, OR remove inline `style="margin-bottom: var(--space-8);"` from all 6 bridge-prose elements during Phase 1 (preferred)
4. **W-06/W-07:** Update HTML `:root` to match tokens.css values for `--color-border` and `--color-border-subtle`

---

**END PRE-FLIGHT VALIDATION**

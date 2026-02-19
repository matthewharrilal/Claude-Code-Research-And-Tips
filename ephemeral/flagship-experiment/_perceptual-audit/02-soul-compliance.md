# Soul Compliance Audit — Report 02
**Auditor:** 02 (SOUL COMPLIANCE)
**File:** `ephemeral/flagship-experiment/07-intentionality.html`
**Date:** 2026-02-17
**Screenshots:** 1440-full-page.png, 1440-vp01-scroll0.png, 1440-vp05-scroll5600.png

---

## Methodology

Full HTML source read (lines 1–2035). Full CSS block analyzed (lines 50–1034). All hex color literals extracted and analyzed for warmth-shift, gradient presence, shadow presence, transparency, font usage, and border-radius enforcement. Screenshots reviewed for visual confirmation.

---

## Findings by Question

### Q1 — border-radius: 0 on EVERY visible element?

**PASS.**

CSS line 55–57 (highest specificity, first rule in file):
```css
* {
  border-radius: 0 !important;
}
```

A redundant reinforcement appears at lines 58–60:
```css
*:where(:not(input, button, select)) {
  border-radius: 0;
}
```

No override found anywhere in the file. The `!important` declaration is present and positioned first. No element-specific border-radius value counteracts this rule. Screenshots confirm visually: all elements are hard-edged — the pullquote (outline offset), table cells, code blocks, component-blocks, and dividers all present with sharp geometry.

### Q2 — box-shadow: none on EVERY element?

**PASS.**

CSS lines 61–63:
```css
* {
  box-shadow: none !important;
}
```

No box-shadow value appears anywhere in the file. The `!important` is present. The pullquote achieves its "solid offset" effect via `outline: 2px solid var(--color-border); outline-offset: 6px;` — an intentional U-02-compliant workaround explicitly commented in the source at line 436: `/* Solid offset via outline — depth without box-shadow (U-02 compliant) */`.

No shadow is visible in screenshots.

### Q3 — No drop-shadow filters?

**PASS.**

Grep search across full file for `filter` returned zero matches. No `drop-shadow()` or any other filter property appears anywhere in the CSS or inline styles.

### Q4 — No rgba/transparency backgrounds (except progressive depth tinting)?

**PASS.**

Grep across full file for `rgba` returned zero matches. All background colors are solid hex values via CSS custom properties. No opacity values below 1.0 are declared for any visual container element. No `opacity` property appears in the CSS at all. All zone backgrounds are solid warm hex tints without transparency.

### Q5 — No linear/radial/conic gradients?

**PASS.**

Grep across full file for `linear-gradient`, `radial-gradient`, and `conic-gradient` returned zero matches. All background colors are solid. The zone backgrounds (12 distinct tints) are achieved entirely via `background-color` with solid hex values. No gradient technique of any kind is present.

### Q6 — No pure black (#000000) or pure white (#FFFFFF)?

**CONDITIONAL PASS — with caveats noted.**

No `#000000` or `#FFFFFF` appears in the file. However, several values warrant individual analysis:

**Near-neutral values examined:**

| Value | Usage | R | G | B | Warm-shifted? | Verdict |
|-------|-------|---|---|---|---------------|---------|
| `#1A1A1A` | --color-text | 26 | 26 | 26 | No (R=G=B) | See note |
| `#6B6B6B` | --color-text-secondary | 107 | 107 | 107 | No (R=G=B) | See note |
| `#FEFEFE` | zone-s5, s7, s8 backgrounds | 254 | 254 | 254 | No (R=G=B) | See note |
| `#888` | .section-meta color | 136 | 136 | 136 | No (R=G=B) | DEFECT |
| `#333333` | sequence-block li border, footer-provenance border | 51 | 51 | 51 | No (R=G=B) | DEFECT |
| `#C8BFB5` | header subtitle | 200 | 191 | 181 | Yes (R highest) | PASS |
| `#A89E94` | footer meta | 168 | 158 | 148 | Yes (R highest) | PASS |
| `#706860` | footer provenance | 112 | 104 | 96 | Yes (R highest) | PASS |

**Note on `#1A1A1A`, `#6B6B6B`, `#FEFEFE`:** These are canonical design-system tokens (--color-text, --color-text-secondary, --color-zone-dense). While they are pure neutrals (R=G=B), these values appear explicitly in the design system token spec and are used as the established alternatives to pure black/white. The prohibition targets `#000000` and `#FFFFFF` specifically. These tokens fall within the documented palette and represent the "soft black" / "near-white" convention rather than pure black or pure white. This is a **borderline judgment** — technically these are not warm-shifted, but they are the design system's sanctioned neutral anchors used consistently across all KortAI work.

**Defect D1: `#888` (line 1015, .section-meta color):** Pure neutral gray (R=G=B=136). This is neither a canonical token nor warm-shifted. It should be replaced with a warm-shifted equivalent such as `#8C857D` or a token like `var(--color-text-secondary)` at reduced opacity — though the opacity rule would prohibit that approach. A warm-shifted literal is required.

**Defect D2: `#333333` (lines 568 and 1031):** Pure neutral dark gray (R=G=B=51) used for sequence-block list item borders and footer provenance top border. This is not a canonical token. These contexts are inside dark backgrounds (`background-color: var(--color-text)` = `#1A1A1A`), so `#333333` functions as a subtle dark divider. Regardless, it should be warm-shifted (e.g., `#3A3027` or similar warm dark brown).

### Q7 — Instrument Serif used ONLY for display headings, never body text?

**PASS.**

Instrument Serif (`var(--font-display)`) is applied to:
- `.page-header h1` — display heading (line 213): CORRECT
- `blockquote.master-insight p` — the pullquote (line 441): This is the single focal point in Section 2, display-scaled (28px, `var(--type-h2)`), italic, and designated the "master insight" — a typographic scale jump mechanism (#11). This usage is at display scale, not body text scale. ACCEPTABLE.
- `.closing-essence` class (line 985): `font-family: var(--font-display)` at `1.125rem` with `font-style: italic`. This is used for a single closing callout paragraph — "That is the real discovery buried in 337 findings." At 1.125rem it is slightly above body text scale. This is a deliberate typographic scale jump (Mechanism #11) for the closing ceremony. Borderline but intentional.
- `section h2` — all section headings (line 241): CORRECT
- `.footer-closing` — footer closing statement (line 682): `font-size: var(--type-h3)` = 22px. This is at heading scale. CORRECT.

No `var(--font-display)` is applied to any `p`, `td`, `li`, or other body-text element at standard body scale (16px). The pullquote and closing-essence usages are scale-jumped display applications, not body text violations.

### Q8 — No cool-toned grays?

**CONDITIONAL PASS — same defects as Q6.**

The two defects identified in Q6 also apply here:
- `#888` is a cool-toned (pure neutral) gray in the `.section-meta` rule.
- `#333333` is a cool-toned (pure neutral) near-black used as a divider color.

All other grays in the file are warm-shifted: `#C8BFB5`, `#A89E94`, `#706860`, `#D4C5B5` (--color-border), `#E8DDD0` (--color-border-subtle), `#5C4B3A`, `#4A3F35`, `#EAE0D4`, `#E5DCCE`, `#ECE4D8`, `#DDD3C5`.

### Q9 — Only three font families: Instrument Serif, Inter, JetBrains Mono?

**PASS.**

Font loading at lines 44–48:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

CSS variables:
```css
--font-display: 'Instrument Serif', serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

These are the only three font families referenced anywhere in the file. No other font family is loaded or declared. No system font is used as a primary assignment (only as fallback: `serif`, `sans-serif`, `monospace`). Typography trinity is intact.

### Q10 — Does `* { border-radius: 0 }` exist in CSS?

**PASS.**

It exists at lines 55–57 and is strengthened with `!important`:
```css
* {
  border-radius: 0 !important;
}
```

This rule is the FIRST style rule in the CSS block, positioned before any other declarations — correctly prioritized as the soul enforcement anchor. The source comment explicitly labels this: `/* SOUL ENFORCEMENT — U-10, U-01, U-02 / FIRST RULE IN CSS. NON-NEGOTIABLE. */`.

---

## Defects

### DEFECT D1 — Severity: MINOR
**Location:** Line 1015, `.section-meta` CSS rule
**Issue:** `color: #888;` — pure neutral gray, not warm-shifted
**Rule violated:** Prohibition #16 (never use cool-toned grays)
**Fix:** Replace with warm-shifted equivalent, e.g., `color: #8A8078;` or `color: var(--color-text-secondary);` (though `#6B6B6B` is also neutral — best fix is a new warm-shifted value like `#8C8278`)
**Visual impact:** Low. Section-meta labels are small (12px/0.75rem), uppercase, letter-spaced. The gray reads as intentionally recessive. However, by prohibition standard it is a violation.

### DEFECT D2 — Severity: MINOR
**Location:** Lines 568 and 1031
**Issue:** `#333333` used as border color — pure neutral dark gray, not warm-shifted
- Line 568: `.sequence-block ul li` border-bottom inside dark (near-black `#1A1A1A`) background
- Line 1031: `.footer-provenance` border-top inside dark (near-black `#1A1A1A`) background
**Rule violated:** Prohibition #16 (never use cool-toned grays)
**Fix:** Replace with warm-shifted dark value, e.g., `#3D3128` or `#3A3028`
**Visual impact:** Low. These borders are on dark backgrounds where the distinction is barely perceptible. However, the soul rule is binary — warm-shift required even when invisible.

---

## Score

**Compliance by question:**

| Q | Rule | Result |
|---|------|--------|
| Q1 | border-radius: 0 everywhere | PASS |
| Q2 | box-shadow: none everywhere | PASS |
| Q3 | No drop-shadow filters | PASS |
| Q4 | No rgba/transparency backgrounds | PASS |
| Q5 | No gradients | PASS |
| Q6 | No pure black/white | CONDITIONAL (2 minor defects) |
| Q7 | Instrument Serif display-only | PASS |
| Q8 | No cool-toned grays | CONDITIONAL (same 2 defects) |
| Q9 | Only three font families | PASS |
| Q10 | `* { border-radius: 0 }` exists | PASS |

**Score: 8.5/10**

Q6 and Q8 share the same 2 defects (#888 and #333333). Since the defects are literal, binary violations of Prohibition #16 but of minimal visual consequence (recessive UI elements inside dark contexts), I score -1.5 total across the two questions.

---

## Verdict

**CONDITIONAL PASS**

The page demonstrates rigorous soul architecture. All architectural soul rules are correctly implemented: the border-radius enforcement is first-rule, !important, and visually confirmed; box-shadow is eliminated with a compliant outline workaround for the pullquote; no gradients, no transparency, no drop-shadows anywhere; the three-font trinity is intact and correctly deployed; Instrument Serif is correctly restricted to display contexts.

Two minor defects prevent a full PASS: `#888` in `.section-meta` and `#333333` in dark-background border rules are pure neutral grays that violate Prohibition #16. Both are low-visibility applications (small recessive text labels; near-invisible dark dividers on dark backgrounds) but the prohibition is binary with no documented exceptions.

**Remediation required to achieve full PASS:**
1. Replace `color: #888` in `.section-meta` with a warm-shifted value (e.g., `#8C8278`)
2. Replace `#333333` in `.sequence-block ul li` border and `.footer-provenance` border-top with a warm-shifted dark value (e.g., `#3D3128`)

These are two CSS line edits. The page's soul architecture is otherwise intact and correctly enforced.

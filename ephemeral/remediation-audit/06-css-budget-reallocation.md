# CSS Budget Reallocation Analysis

**Analyst:** CSS Budget Reallocation Analyst
**Source:** `ephemeral/flagship-experiment/07-intentionality.html` (lines 50-1034, 984 CSS lines)
**Comparison:** `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (~1,090 CSS lines)
**References:** `ephemeral/flagship-retrospective/06-cd006-css-forensics.md`, `ephemeral/flagship-audit/10-REMEDIATION-PROMPT.md`

---

## 1. COMPLETE CSS RULE CATEGORIZATION

Every CSS rule in the flagship `<style>` block (lines 50-1034) is categorized below by visual impact.

### Category A: VISIBLE STRUCTURAL (borders, grids, layout, responsive, component differentiation)

| Lines | Rule(s) | What It Does | Lines |
|-------|---------|--------------|-------|
| 55-57 | `* { border-radius: 0 !important }` | Soul enforcement -- sharp edges | 3 |
| 58-60 | `*:where(:not(...)) { border-radius: 0 }` | Soul enforcement fallback | 3 |
| 61-63 | `* { box-shadow: none !important }` | Soul enforcement -- flat surfaces | 3 |
| 158-162 | `*, *::before, *::after { box-sizing; margin:0; padding:0 }` | Reset | 5 |
| 181-184 | `.page-container { max-width: 960px }` | Container constraint | 4 |
| 191-196 | `.page-header { background; color; border-bottom; padding }` | Dark header background + red border | 6 |
| 198-201 | `.page-header .header-inner { max-width; margin }` | Header container | 4 |
| 234-237 | `section { padding-left; padding-right }` | Section base padding | 4 |
| 274-282 | `.drop-cap::first-letter { font-size: 3.5em; float; color }` | Drop cap -- visible landmark | 9 |
| 289-292 | `.table-wrapper { overflow-x; margin }` | Table wrapper | 4 |
| 294-298 | `table { width; border-collapse; font-size }` | Table base | 5 |
| 300-302 | `table thead tr { border-bottom: 3px solid }` | Table header border | 3 |
| 315-322 | `table td { padding; border-bottom: 1px; vertical-align }` | Table cell borders | 8 |
| 324-326 | `table tbody tr:last-child td { border-bottom: none }` | Last row cleanup | 3 |
| 337-340 | `.table-compact th, td { padding }` | Compact table padding | 4 |
| 342-344 | `.table-compact thead tr { border-bottom: 3px }` | Compact header border | 3 |
| 348-351 | `.table-dense th, td { padding: 10px 14px }` | Dense table padding | 4 |
| 356-358 | `.table-featured { border-left: 4px solid red }` | Featured table left border | 3 |
| 360-362 | `.table-featured thead tr { border-bottom: 3px }` | Featured header border | 3 |
| 366-368 | `.table-moderate { border-left: 3px solid border-color }` | Moderate table left border | 3 |
| 370-372 | `.table-moderate thead tr { border-bottom: 3px }` | Moderate header border | 3 |
| 377-379 | `.table-warning { border-left: 3px solid coral }` | Warning table left border | 3 |
| 381-383 | `.table-warning thead tr { border-bottom: 3px coral }` | Warning header border | 3 |
| 391-393 | `.table-light { border: 1px solid }` | Light table containment | 3 |
| 395-396 | `.table-light thead tr { border-bottom: 1px }` | Light header border | 2 |
| 403-405 | `.table-findings { border-top: 3px }` | Findings table top border | 3 |
| 407-409 | `.table-findings thead tr { border-bottom: 3px }` | Findings header border | 3 |
| 414-418 | `.table-featured/moderate/findings tbody tr:nth-child(even) td { background }` | Alternating row shading | 5 |
| 427-429 | `.pullquote-wrapper { max-width: 80%; margin: 0 auto }` | Pullquote width variation | 3 |
| 431-438 | `blockquote.master-insight { padding; border-left: 4px; outline: 2px; outline-offset }` | Pullquote structural treatment | 8 |
| 455-458 | `.component-block { border-left: 4px solid red; margin }` | Component left border | 4 |
| 460-469 | `.component-block .component-label { font-family; font-size; letter-spacing; text-transform; color; padding; border-bottom }` | Component label zone | 10 |
| 471-473 | `.component-block .component-body { padding }` | Component body | 3 |
| 502-504 | `.component-block.neutral { border-left-color }` | Neutral variant border | 3 |
| 506-508 | `.component-block.warm { border-left-color }` | Warm variant border | 3 |
| 510-512 | `.component-block.warm .component-label { color }` | Warm label color | 3 |
| 514-516 | `.component-block.resolution { border-left-color }` | Resolution variant border | 3 |
| 518-520 | `.component-block.resolution .component-label { color }` | Resolution label color | 3 |
| 527-531 | `.tension-group { max-width: 90%; margin-left: 5% }` | Width variation for tension groups | 5 |
| 533-535 | `.tension-group h3 { margin-bottom }` | Tension heading spacing | 3 |
| 542-547 | `.sequence-block { background: dark; color: light; padding; margin }` | Dark code block background | 6 |
| 549-556 | `.sequence-block .seq-label { font-family; font-size; letter-spacing; text-transform; color; margin }` | Code block label | 8 |
| 558-561 | `.sequence-block ul { list-style: none; padding: 0 }` | Code block list reset | 4 |
| 563-570 | `.sequence-block ul li { font-family; font-size; color; padding; border-bottom }` | Code block list items | 8 |
| 572-574 | `.sequence-block ul li:last-child { border-bottom: none }` | Last item cleanup | 3 |
| 576-579 | `.sequence-block ul li::before { content: arrow; color: red }` | Arrow prefix | 4 |
| 590-594 | `.divider-smooth { height: 1px; background; margin: 48px }` | Smooth divider | 5 |
| 598-602 | `.divider-bridge { height: 1px; background; margin: 64px }` | Bridge divider | 5 |
| 606-610 | `.divider-breathing { height: 3px; background; margin: 80px }` | Breathing divider (largest) | 5 |
| 613-617 | `.bridge-prose { max-width; margin; padding }` | Bridge prose container | 5 |
| 641-652 | `.zone-s1` through `.zone-s12 { background-color }` | Zone backgrounds (12 rules) | 12 |
| 659-664 | `.page-footer { background; color; border-top: 3px; padding }` | Dark footer | 6 |
| 666-668 | `.page-footer .footer-inner { max-width; margin }` | Footer container | 3 |
| 699-704 | `.findings-num { font-family; font-size; font-weight; color }` | Numbered findings accent | 6 |
| 712-715 | `.narrow-table-wrapper { max-width: 85%; margin: auto }` | Width variation | 4 |
| 722-726 | `.visually-prominent { border-left: 3px; padding-left; margin }` | Accent hierarchy element | 5 |
| 984-989 | `.closing-essence { font-family: serif; font-style: italic; font-size: 1.125rem }` | Closing typographic shift | 6 |
| 995-997 | `.zone-s11 .table-wrapper + h3 { margin-top }` | Progressive disclosure spacing | 3 |
| 999-1001 | `.hypothesis-group-2 { margin-top: 40px }` | Progressive disclosure spacing | 3 |
| 1003-1005 | `.hypothesis-group-3 { margin-top: 48px }` | Progressive disclosure spacing | 3 |
| 1012-1019 | `.section-meta { font-family; font-size; color; letter-spacing; text-transform; margin }` | Section meta labels | 8 |
| 1024-1033 | `.footer-provenance { font-family; font-size; color; letter-spacing; margin; padding; border-top }` | Provenance stamp | 10 |

**Category A Total: ~310 lines**

---

### Category B: PERCEPTIBLE TYPOGRAPHIC (font-size >= 2px, weight changes, color >= 15 RGB)

| Lines | Rule(s) | What It Does | Lines |
|-------|---------|--------------|-------|
| 164-168 | `html { font-size: 16px; -webkit-font-smoothing; -moz-osx-font-smoothing }` | Base font setup | 5 |
| 170-176 | `body { font-family; font-size; color; background-color; line-height: 1.7 }` | Body text styling | 7 |
| 203-210 | `.page-header .header-meta { font-family: mono; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: red }` | Header meta typography (perceptible) | 8 |
| 212-219 | `.page-header h1 { font-family: serif; font-size: 36px; font-weight: 400; line-height: 1.2; color: cream }` | H1 typography | 8 |
| 221-227 | `.page-header .header-subtitle { font-family; font-size: 16px; color: #C8BFB5; max-width: 640px }` | Subtitle typography | 7 |
| 239-246 | `section h2 { font-family: serif; font-size: 28px; font-weight: 400; line-height: 1.3 }` | H2 typography | 8 |
| 248-255 | `section h3 { font-family: body; font-size: 22px; font-weight: 600; font-style: italic }` | H3 typography | 8 |
| 257-263 | `section p { font-size: 16px; line-height: 1.75; max-width: 68ch; margin-bottom }` | Paragraph base | 7 |
| 265-267 | `section p:last-child { margin-bottom: 0 }` | Last paragraph cleanup | 3 |
| 304-313 | `table th { font-family: mono; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase }` | Table header typography | 10 |
| 398-400 | `.table-light th { font-size: 11px }` | Light table smaller headers | 3 |
| 440-448 | `blockquote.master-insight p { font-family: serif; font-size: 28px; font-style: italic; line-height: 1.45 }` | Pullquote typography (display size) | 9 |
| 481-484 | `.component-block.dense .component-label { padding: 8px }` | Dense label padding | 4 |
| 486-488 | `.component-block.dense .component-body { padding: 12px }` | Dense body padding | 3 |
| 491-494 | `.component-block.sparse .component-label { padding: 12px 24px }` | Sparse label padding | 4 |
| 496-498 | `.component-block.sparse .component-body { padding: 16px 24px }` | Sparse body padding | 3 |
| 619-625 | `.bridge-prose p { font-size; color: secondary; font-style: italic; line-height; max-width: 60ch }` | Bridge prose typography | 7 |
| 671-678 | `.page-footer .footer-label { font-family: mono; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: red }` | Footer label typography | 8 |
| 680-686 | `.page-footer .footer-closing { font-family: serif; font-size: 22px; font-style: italic; color: cream }` | Footer closing typography | 7 |
| 688-693 | `.page-footer .footer-meta { font-family: body; font-size: 12px; color: #A89E94 }` | Footer meta typography | 6 |
| 475-477 | `.component-block .component-body p { margin-bottom: 0 }` | Component body cleanup | 3 |

**Category B Total: ~138 lines**

---

### Category C: SUB-PERCEPTUAL (letter-spacing < 0.025em, color < 15 RGB, word-spacing < 0.02em, line-height delta < 0.1)

These rules are below human perception thresholds. The forensics report (Section 9) identified 227 lines; my line-by-line count confirms this figure.

#### Ch2 Typographic Convergence Gradient (lines 736-834) -- 99 lines

| Lines | Rule | What It Changes | Perceptible? |
|-------|------|-----------------|-------------|
| 738-742 | `.zone-s1 p { line-height: 1.8; letter-spacing: 0.006em; word-spacing: 0.02em }` | 0.1px letter-spacing at 16px; 0.32px word-spacing | NO (0.006em = 0.096px) |
| 744-746 | `.zone-s1 h2 { letter-spacing: 0.01em }` | 0.28px at 28px | NO |
| 748-752 | `.zone-s3 p { line-height: 1.75; letter-spacing: 0.004em; word-spacing: 0.015em }` | 0.064px letter-spacing | NO |
| 754-756 | `.zone-s3 h2 { letter-spacing: 0.008em }` | 0.224px | NO |
| 759-762 | `.zone-s1, .zone-s3 > p + p { margin-top: 4px }` | +4px extra paragraph gap | BORDERLINE (4px = barely visible) |
| 765-768 | `.zone-s4 p { line-height: 1.7; letter-spacing: 0.002em }` | 0.032px | NO |
| 770-772 | `.zone-s4 h2 { letter-spacing: 0.004em }` | 0.112px | NO |
| 774-780 | `.zone-s5,s7,s8 p { line-height: 1.65; letter-spacing: -0.003em; word-spacing: -0.01em }` | -0.048px letter, -0.16px word | NO |
| 782-786 | `.zone-s5,s7,s8 h2 { letter-spacing: -0.01em }` | -0.28px at 28px | BORDERLINE |
| 788-791 | `.zone-s6 p { line-height: 1.7; letter-spacing: 0 }` | Explicitly sets 0 (no change from default) | NO (redundant) |
| 793-795 | `.zone-s6 h2 { letter-spacing: 0 }` | Same | NO (redundant) |
| 798-802 | `.zone-s9 p { line-height: 1.7; letter-spacing: 0; word-spacing: 0 }` | Explicitly 0 | NO (redundant) |
| 804-806 | `.zone-s9 h2 { letter-spacing: 0 }` | Same | NO (redundant) |
| 808-811 | `.zone-s10 p { line-height: 1.75; letter-spacing: 0 }` | Explicitly 0 | NO (redundant) |
| 813-815 | `.zone-s10 h2 { letter-spacing: 0 }` | Same | NO (redundant) |
| 817-820 | `.zone-s11 p { line-height: 1.75; letter-spacing: 0 }` | Explicitly 0 | NO (redundant) |
| 822-824 | `.zone-s11 h2 { letter-spacing: 0.005em }` | 0.14px at 28px | NO |
| 826-830 | `.zone-s12 p { line-height: 1.8; letter-spacing: 0; word-spacing: 0 }` | Return to 1.8 (same as base 1.7 + 0.1) | BORDERLINE (1.6px delta per line) |
| 832-834 | `.zone-s12 h2 { letter-spacing: 0.01em }` | 0.28px | NO |

**Subtotal: 99 lines, ~4 borderline, ~95 definitively sub-perceptual**

#### Ch3 Spatial Compression Micro-Modulations (lines 840-890) -- 51 lines

| Lines | Rule | What It Changes | Perceptible? |
|-------|------|-----------------|-------------|
| 842-844 | `.zone-s1 .component-block { margin: 32px 0 }` | Same as base margin | NO (no change from default) |
| 846-848 | `.zone-s3 .component-block { margin: 32px 0 }` | Same | NO |
| 850-852 | `.zone-s3 .table-wrapper { margin: 32px 0 }` | vs 24px default = +8px | BORDERLINE |
| 855-857 | `.zone-s5 .component-block { margin: 16px 0 }` | vs 32px = -16px | YES (perceptible) |
| 859-861 | `.zone-s5 .table-wrapper { margin: 16px 0 }` | vs 24px = -8px | BORDERLINE |
| 863-865 | `.zone-s7 .component-block { margin: 16px 0 }` | Same as S5 | YES |
| 867-869 | `.zone-s8 .table-wrapper { margin: 16px 0 }` | Same reduction | BORDERLINE |
| 871-873 | `.zone-s8 .sequence-block { margin: 12px 0 }` | vs 16px default = -4px | NO |
| 876-878 | `.zone-s9 .table-wrapper { margin: 24px 0 }` | Same as base | NO (redundant) |
| 880-882 | `.zone-s10 .table-wrapper { margin: 24px 0 }` | Same | NO (redundant) |
| 884-886 | `.zone-s11 .table-wrapper { margin: 24px 0 }` | Same | NO (redundant) |
| 888-890 | `.zone-s12 .component-block { margin: 32px 0 }` | Same as Zone 1 | NO (redundant) |

**Subtotal: 51 lines, 2 perceptible (moved to Category A), 5 borderline, 44 sub-perceptual**

#### Ch4 Structural Border/Color Micro-Shifts (lines 896-930) -- 35 lines

| Lines | Rule | What It Changes | Perceptible? |
|-------|------|-----------------|-------------|
| 897-899 | `.zone-s3 .table-compact thead tr { border-bottom-color: #5C4B3A }` | vs #1A1A1A = lighter brown | BORDERLINE (perceptible on large surface, but table header border is 3px thin) |
| 901-903 | `.zone-s4 .table-compact thead tr { border-bottom-color: #4A3F35 }` | vs #1A1A1A = slightly lighter | BORDERLINE |
| 906-908 | `.zone-s3 table td { border-bottom-color: #EAE0D4 }` | vs #E8DDD0 = 2-6 RGB shift | NO |
| 910-912 | `.zone-s4 table td { border-bottom-color: #E5DCCE }` | vs #E8DDD0 = 3 RGB | NO |
| 915-917 | `.zone-s10 table td { border-bottom-color: #EAE0D4 }` | Same as S3 | NO |
| 919-921 | `.zone-s11 table td { border-bottom-color: #ECE4D8 }` | vs #E8DDD0 = 4-7 RGB | NO |
| 924-926 | `.zone-s11 .table-light { border-color: #E5DCCE }` | vs #E8DDD0 = 3 RGB | NO |
| 928-930 | `.zone-s11 .table-light thead tr { border-bottom-color: #DDD3C5 }` | vs #E0D5C5 = 3 RGB | NO |

**Subtotal: 35 lines, 0 perceptible, 2 borderline, 33 sub-perceptual**

#### Ch5 Density Heading Color Modulation (lines 937-963) -- 27 lines

| Lines | Rule | What It Changes | Perceptible? |
|-------|------|-----------------|-------------|
| 937-939 | `.zone-s1 h2 { color: #2A2420 }` | vs #1A1A1A = +16,+10,+6 RGB | BORDERLINE (16 on R channel, but heading is small area) |
| 941-943 | `.zone-s3 h2 { color: #252018 }` | vs #1A1A1A = +11,+6,-2 RGB | NO (net < 15) |
| 946-950 | `.zone-s5,s7,s8 h2 { color: var(--color-text) }` | Explicitly sets to default | NO (redundant) |
| 953-955 | `.zone-s9 h2 { color: #1E1B18 }` | vs #1A1A1A = +4,+1,-2 RGB | NO |
| 957-959 | `.zone-s10 h2 { color: #221F1A }` | vs #1A1A1A = +8,+5,0 RGB | NO |
| 961-963 | `.zone-s12 h2 { color: #2A2420 }` | Same as S1 | BORDERLINE |

**Subtotal: 27 lines, 0 perceptible, 2 borderline, 25 sub-perceptual**

#### Ch6 Rhythmic Micro-Modulations (lines 970-977) -- 8 lines

| Lines | Rule | What It Changes | Perceptible? |
|-------|------|-----------------|-------------|
| 970-972 | `.zone-s7 .tension-group { margin-bottom: 24px }` | vs 32px default = -8px | BORDERLINE |
| 975-977 | `.zone-s8 .sequence-block + .sequence-block { margin-top: 8px }` | vs 16px = -8px | BORDERLINE |

**Subtotal: 8 lines, 0 perceptible, 2 borderline, 6 sub-perceptual**

#### Zone Background Token Definitions that are sub-perceptual (lines 113-135) -- 23 lines

These are the `:root` definitions. The 12 zone backgrounds THEMSELVES vary by only 2-6 RGB points between adjacent zones. While the CLASS usage (lines 641-652) is structural, the TOKEN VALUES are sub-perceptual.

| Token | Value | vs Base #FEF9F5 | Perceptible? |
|-------|-------|-----------------|-------------|
| `--color-zone-s1` | `#FEF9F5` | 0 RGB | NO (IS the base) |
| `--color-zone-s2` | `#FAF5ED` | -4,-4,-8 | YES (tan vs cream) |
| `--color-zone-s3` | `#FDF8F2` | -1,-1,-3 | NO |
| `--color-zone-s4` | `#FDFBF8` | -1,+2,+3 | NO |
| `--color-zone-s5` | `#FEFEFE` | 0,+5,+9 | BORDERLINE |
| `--color-zone-s6` | `#FBF7F1` | -3,-2,-4 | NO |
| `--color-zone-s7` | `#FEFEFE` | Same as S5 | NO (duplicate) |
| `--color-zone-s8` | `#FEFEFE` | Same as S5 | NO (duplicate) |
| `--color-zone-s9` | `#FEFCFA` | -0,+3,+5 | NO |
| `--color-zone-s10` | `#FEF9F5` | 0,0,0 | NO (IS the base) |
| `--color-zone-s11` | `#FBF7F1` | Same as S6 | NO (duplicate) |
| `--color-zone-s12` | `#FEF9F5` | 0,0,0 | NO (IS the base) |

Of 12 zone tokens, only 2 are perceptibly distinct from the base: S2 (`#FAF5ED` tan) and S5/S7/S8 (`#FEFEFE` near-white, all identical). The other 8 are sub-perceptual variations.

**Subtotal for sub-perceptual token definitions: 23 lines** (the definition lines in `:root` for 8 imperceptible tokens, ~2 lines each + comments)

---

### CATEGORY C TOTAL: ~220 lines sub-perceptual + ~13 borderline

The forensics report estimated 227 lines. My line-by-line count finds **~220 definitively sub-perceptual + ~13 borderline = ~233 lines** in the sub-perceptual to borderline zone. The two estimates converge within 3%.

---

## 2. CSS BUDGET SUMMARY

| Category | Lines | % of Total (984) | Description |
|----------|-------|-------------------|-------------|
| **A: Visible Structural** | ~310 | 31.5% | Borders, layout, backgrounds, component differentiation |
| **B: Perceptible Typographic** | ~138 | 14.0% | Font sizes, weights, colors above threshold |
| **C: Sub-Perceptual** | ~233 | 23.7% | Imperceptible micro-typography, redundant declarations |
| **Tokens + Comments** | ~153 | 15.5% | `:root` block (non-zone tokens), CSS comments |
| **Reset + Foundation** | ~150 | 15.3% | Reset, soul enforcement, base styles, section base |
| **Total** | ~984 | 100% | |

**The flagship spends 23.7% of its CSS budget on rules that no human can see.** This is consistent with the forensics finding of "22% (~227 lines) on imperceptible micro-typography."

---

## 3. WHAT SHOULD BE DEALLOCATED (removed or simplified)

### 3A. FULL REMOVAL -- 155 lines

These rules have ZERO visual effect and should be deleted entirely:

| Block | Lines | Reason |
|-------|-------|--------|
| Zone 1-3 paragraph letter-spacing/word-spacing (0.004-0.006em) | 15 | Below 0.1px absolute. Invisible. |
| Zone 4 paragraph letter-spacing (0.002em) | 4 | 0.032px. Invisible. |
| Zone 6 paragraph/h2 `letter-spacing: 0` | 7 | Explicitly sets DEFAULT. Redundant. |
| Zone 9 paragraph/h2 `letter-spacing: 0; word-spacing: 0` | 8 | Explicitly sets DEFAULT. Redundant. |
| Zone 10 paragraph/h2 `letter-spacing: 0` | 7 | Redundant. |
| Zone 11 paragraph `letter-spacing: 0` | 4 | Redundant. |
| Zone 11 h2 `letter-spacing: 0.005em` | 3 | 0.14px. Invisible. |
| Zone 12 h2 `letter-spacing: 0.01em` | 3 | 0.28px. Invisible. |
| Zone 1/3 h2 `letter-spacing` (0.008-0.01em) | 7 | 0.22-0.28px. Invisible. |
| Zone 4 h2 `letter-spacing: 0.004em` | 3 | 0.112px. Invisible. |
| Zone 5/7/8 h2 `letter-spacing: -0.01em` | 5 | Borderline but overlaps with heading weight remediation |
| Per-zone table td border-bottom-color shifts (3-7 RGB) | 24 | Below 15 RGB. Invisible. |
| Per-zone heading color shifts (S3, S9, S10, S12: < 15 net RGB) | 16 | Below threshold. |
| Zone 5/7/8 h2 color redundant to default | 4 | Explicitly sets `var(--color-text)` which is already inherited. |
| Redundant spacing (S1, S3 component margins = base; S9-S11 table margins = base; S12 component margin = base) | 24 | Sets values identical to base. No effect. |
| Zone S8 sequence-block margin (12px vs 16px = 4px delta) | 3 | Below 8px threshold. |
| Zone S3 table-wrapper margin override to 32px (vs 24px base) | 3 | Borderline but replaced by zone-level spacing in remediation. |
| 8 redundant zone token definitions (S3, S4, S6, S7, S8, S9, S10, S12 -- duplicates of S1 or S5) | 15 | Define colors no human can distinguish from base/near-white. Consolidate to 3 tokens. |

**Total removable: ~155 lines**

### 3B. SIMPLIFICATION -- 78 lines reduced to ~25 lines

These rules have a CONCEPT worth preserving but are overspecified:

| Block | Current Lines | Simplified To | Net Savings |
|-------|---------------|---------------|-------------|
| Zone 1/3 word-spacing (0.015-0.02em) + Zone 5/7/8 word-spacing (-0.01em) | 12 | Remove entirely (word-spacing below perception threshold) | -12 |
| Zone-specific line-height (1.65-1.85 range, delta = 0.05-0.15) | 24 | Consolidate to 3 zone rules: Zone 1 `line-height: 1.8`, Zone 2 `line-height: 1.6`, Zone 3 `line-height: 1.75` | -15 |
| 12 zone background tokens | 23 | Consolidate to 4: `--color-zone-warm: #FEF5EB`, `--color-zone-cool: #F5F5F5`, `--color-zone-tan: #F5EDE2`, `--color-zone-base: #FEF9F5` | -14 |
| 12 `.zone-sN` background rules | 12 | Map to 4 tokens (some sections share the same background) | -5 |
| Zone S7 tension-group margin (24px vs 32px) + Zone S8 stacking (8px vs 16px) | 8 | Simplify to 2 rules at perceptible amplitudes | -2 |
| Zone S1 h2 color (#2A2420 = borderline perceptible) | 3 | Merge into Zone 1 heading rule at a more clearly perceptible color | 0 |

**Total simplification savings: ~48 lines** (78 lines -> ~30 lines)

### 3C. NET DEALLOCATION

- **Lines removed:** ~155
- **Lines simplified:** ~48 net savings
- **Total CSS freed:** ~203 lines

**CSS line count after deallocation: ~984 - 203 = ~781 lines**

---

## 4. WHAT SHOULD REPLACE THE DEALLOCATED CSS

The 203 freed lines should be reallocated to the channels where the flagship scores ZERO compared to CD-006.

### 4A. Component Definitions (CRITICAL -- 0 in flagship vs 11 in CD-006)

Currently the flagship has 1 component type (`component-block`) with 3 color variants. CD-006 has 11 distinct component types.

**Recommended allocation: ~60 lines**

```
- 5 callout types with distinct backgrounds:
  .callout--info    { border-left-color: blue;  background: #F5F8FA; }
  .callout--tip     { border-left-color: green; background: #F2F9F4; }
  .callout--gotcha  { border-left-color: coral; background: #FEF6F5; }
  .callout--essence { border-left-color: amber; background: var(--color-zone-breathing); font-family: serif; }
  .callout--challenge { border-left-color: amber; background: #FFFBF2; }

- 3px full containment borders on components (not just border-left)
- Component body backgrounds with distinct hue tints (blue, green, coral, amber -- not cream variants)
```

**Impact:** Transforms "same red-bordered box repeated 27 times" into visually differentiated components. This is the HIGHEST-IMPACT reallocation.

### 4B. Grid/Flex Layouts (CRITICAL -- 0 in flagship vs 10 in CD-006)

The flagship is 100% single-column. CD-006 uses grid for bento layouts, 2-column reasoning, hub/spoke choreography, and Z-pattern hero.

**Recommended allocation: ~45 lines**

```
- 1 bento grid for Section 5 (component character map could be grid instead of table)
- 1 two-column layout for Section 7 (tension/resolution pairs side by side)
- 1 hub/spoke pattern for Section 8 (component sequences in grid)
```

**Impact:** Breaks single-column monotony. Gives different sections different spatial shapes. Second-highest impact.

### 4C. Responsive Breakpoints (HIGH -- 0 in flagship vs 5 in CD-006)

The flagship has ZERO media queries. CD-006 has 5 (`prefers-reduced-motion`, `print`, `960px`, `768px`, `480px`).

**Recommended allocation: ~60 lines**

```
@media (max-width: 960px) { /* grid collapse, container padding */ }
@media (max-width: 768px) { /* type scale reduction, header simplification */ }
@media (max-width: 480px) { /* further type reduction, single-column force */ }
@media (prefers-reduced-motion: reduce) { /* disable any animations */ }
@media print { /* dark header/footer inversion, background removal */ }
```

**Impact:** Professional production quality. Ensures page works on mobile.

### 4D. Accessibility Features (HIGH -- 0 in flagship vs 5 in CD-006)

**Recommended allocation: ~15 lines**

```
.skip-link { position: absolute; top: -100%; /* visible on focus */ }
.skip-link:focus { top: 0; z-index: 1000; }
*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
::selection { background: var(--color-primary); color: var(--color-background); }
```

**Impact:** Professional finish. Not visual richness per se, but essential quality.

### 4E. Visible Structural Variety (MEDIUM -- partially present)

**Recommended allocation: ~23 lines**

```
- Section-level left borders on alternating sections (6 of 12)
- Bridge transitions as containers (background-colored dividers, not just 1px lines)
- Q&A pattern styling (serif italic question + indented answer)
- Border-weight semantic gradient on body components (4px/3px/1px = confidence hierarchy)
```

**Impact:** Creates structural rhythm visible during scroll. Each screenful looks different.

### TOTAL REALLOCATION BUDGET

| New Feature | Lines | Priority |
|-------------|-------|----------|
| Component definitions (5 types + containment) | ~60 | CRITICAL |
| Grid/flex layouts (3 patterns) | ~45 | CRITICAL |
| Responsive breakpoints (5 queries) | ~60 | HIGH |
| Accessibility (skip, focus, selection) | ~15 | HIGH |
| Visible structural variety | ~23 | MEDIUM |
| **TOTAL** | **~203** | |

**This exactly fills the 203-line budget freed by deallocation.**

---

## 5. DOES THE REMEDIATION PROMPT REDIRECT BUDGET OR JUST ADD MORE?

### Analysis of the Remediation Prompt (10-REMEDIATION-PROMPT.md)

The remediation prompt has 6 phases:

| Phase | What It Does | Redirects Budget? | Adds on Top? |
|-------|-------------|-------------------|-------------|
| Phase 1: Structural Borders | Adds section left-borders, amplifies dividers, adds component containment | **ADDS** new rules. Does NOT remove any existing CSS. | YES -- purely additive |
| Phase 2: Typography Enrichment | Adds per-zone font-size, font-weight, letter-spacing at perceptible amplitudes | **PARTIALLY REDIRECTS** -- replaces sub-perceptual letter-spacing with perceptible values. But also adds new font-size and font-weight rules. | MIXED -- replaces some, adds more |
| Phase 3: Background Amplification | Replaces zone background tokens with perceptible values | **REDIRECTS** -- replaces 12 sub-perceptual tokens with 12 perceptible ones. Line count stays the same. | NO -- same lines, better values |
| Phase 4: Spatial Rhythm | Adds per-zone paragraph margins and max-widths | **ADDS** new rules. Does not remove existing spatial modulation. | YES -- purely additive |
| Phase 5: Component Differentiation | Adds callout type backgrounds | **ADDS** new CSS on top of existing. | YES -- purely additive |
| Phase 6: Self-Verification | Not CSS. | N/A | N/A |

### VERDICT: The remediation prompt MOSTLY ADDS more CSS on top.

**Only Phase 3 (background tokens) is a true redirect** -- same 12 token definitions, better values.

**Phase 2 partially redirects** -- it says "replace all current letter-spacing values" but then adds font-size AND font-weight modulation rules that don't exist currently. Net: adds ~30 new lines while potentially replacing ~99 existing ones (if builder follows the "replace" instruction).

**Phases 1, 4, 5 are purely additive** -- they add structural borders (~20 lines), spatial rules (~20 lines), and component differentiation (~20 lines) WITHOUT removing any of the 220 sub-perceptual lines.

**Projected CSS after remediation if applied as written:**
- Current: ~984 lines
- Phase 2 letter-spacing replacement: -99 lines + ~40 new lines = -59
- Phase 3 token replacement: +0 (same lines, different values)
- Phases 1, 4, 5 additions: +60 lines
- **Projected total: ~984 - 59 + 60 = ~985 lines**

The remediation prompt keeps the total roughly constant BUT fails to explicitly deallocate:
1. The ~24 lines of per-zone table border-color shifts (Phase 1 doesn't mention them)
2. The ~27 lines of per-zone heading color modulation (Phase 2 doesn't mention them)
3. The ~51 lines of per-zone spatial micro-modulation (Phase 4 adds ON TOP, doesn't replace)
4. The ~8 redundant zone token definitions (Phase 3 replaces ALL 12 but could consolidate to 4)

**Total missed deallocation: ~110 lines** that remain in the CSS doing nothing visible.

---

## 6. BEFORE/AFTER CSS BUDGET BREAKDOWN

### CURRENT (Flagship as-built)

| Channel | Lines | % | CD-006 Lines | Gap |
|---------|-------|---|-------------|-----|
| Soul enforcement + reset | 14 | 1.4% | ~15 | 0 |
| Token definitions (`:root`) | 85 | 8.6% | ~95 | -10 |
| Foundation (body, html, section base) | 50 | 5.1% | ~50 | 0 |
| Header/footer bookends | 60 | 6.1% | ~60 | 0 |
| Table variants (7 types) | 100 | 10.2% | ~15 | **+85** |
| Component definitions (1 type + variants) | 75 | 7.6% | ~200 | **-125** |
| Pullquote | 20 | 2.0% | ~15 | +5 |
| Code blocks (sequence-block) | 35 | 3.6% | ~40 | -5 |
| Dividers + bridge prose | 25 | 2.5% | ~20 | +5 |
| Width variation | 10 | 1.0% | ~5 | +5 |
| Zone backgrounds (classes) | 12 | 1.2% | ~5 | +7 |
| Sub-perceptual typography (Ch2) | **99** | **10.1%** | 0 | **+99** |
| Sub-perceptual spatial (Ch3) | **51** | **5.2%** | 0 | **+51** |
| Sub-perceptual borders (Ch4) | **35** | **3.6%** | 0 | **+35** |
| Sub-perceptual headings (Ch5) | **27** | **2.7%** | 0 | **+27** |
| Sub-perceptual rhythmic (Ch6) | **8** | **0.8%** | 0 | **+8** |
| Section meta + provenance | 20 | 2.0% | ~15 | +5 |
| Accent/findings/closing | 15 | 1.5% | ~15 | 0 |
| Progressive disclosure (S11) | 10 | 1.0% | 0 | +10 |
| Drop cap | 9 | 0.9% | ~10 | -1 |
| Grid/flex layouts | **0** | **0%** | ~80 | **-80** |
| Responsive breakpoints | **0** | **0%** | ~90 | **-90** |
| Accessibility | **0** | **0%** | ~30 | **-30** |
| Callout color system | **0** | **0%** | ~40 | **-40** |
| Q&A pattern | **0** | **0%** | ~15 | **-15** |
| Comments | ~133 | 13.5% | ~95 | +38 |
| **TOTAL** | **~984** | **100%** | **~1,090** | |

### RECOMMENDED AFTER REALLOCATION

| Channel | Before | After | Delta | Action |
|---------|--------|-------|-------|--------|
| Sub-perceptual typography (Ch2) | 99 | 9 | **-90** | Remove redundant `letter-spacing: 0`, consolidate zone line-heights to 3 rules |
| Sub-perceptual spatial (Ch3) | 51 | 6 | **-45** | Remove redundant margin overrides, keep only S5/S7 compression |
| Sub-perceptual borders (Ch4) | 35 | 0 | **-35** | Remove all per-zone border-color shifts |
| Sub-perceptual headings (Ch5) | 27 | 0 | **-27** | Remove all per-zone heading color shifts |
| Sub-perceptual rhythmic (Ch6) | 8 | 4 | **-4** | Keep S8 stacking at perceptible amplitude |
| Zone tokens (8 redundant) | 23 | 8 | **-15** | Consolidate 12 tokens to 4 perceptible tokens |
| **Subtotal deallocated** | **243** | **27** | **-216** | |
| | | | | |
| Component definitions (5+ types) | 75 | 135 | **+60** | Add 5 callout types, containment borders, backgrounds |
| Grid/flex layouts | 0 | 45 | **+45** | Add 3 layout patterns |
| Responsive breakpoints | 0 | 60 | **+60** | Add 5 media queries |
| Accessibility | 0 | 15 | **+15** | Add skip link, focus, selection |
| Visible structural variety | 0 | 23 | **+23** | Add section borders, bridge containers, Q&A |
| Comments (reduced -- less explanation needed for visible CSS) | 133 | 120 | **-13** | Trim metaphor channel comments on removed rules |
| **Subtotal allocated** | **75** | **278** | **+203** | |
| | | | | |
| **GRAND TOTAL** | **~984** | **~971** | **-13** | Net DECREASE despite massive capability increase |

### PROJECTED IMPACT

| Metric | Before | After |
|--------|--------|-------|
| Sub-perceptual CSS | 23.7% (233 lines) | 2.7% (27 lines) |
| Component types | 1 (with 3 color variants) | 6 (with distinct backgrounds, borders, typography) |
| Grid/flex definitions | 0 | 3 |
| Media queries | 0 | 5 |
| Accessibility features | 0 | 4 |
| Perceptibly distinct backgrounds | 5 | 8+ |
| Border contexts in body | 2 (table + component-left) | 8+ |
| CSS lines | ~984 | ~971 |

---

## 7. KEY RECOMMENDATIONS

### For the remediation prompt (10-REMEDIATION-PROMPT.md)

1. **ADD an explicit Phase 0: DEALLOCATION.** Before adding anything new, remove the 155 definitively sub-perceptual lines and simplify the 78 overspecified lines. The prompt currently assumes the builder will "replace" but never explicitly says "delete these blocks."

2. **Phase 2 must say "DELETE" not just "replace."** The instruction "Replace all current letter-spacing values" is ambiguous. A builder might ADD the new values ALONGSIDE the old ones (CSS cascade: later wins, but old lines remain). Make it explicit: "DELETE lines 738-834, then add these 15 consolidated rules."

3. **Phase 4 must NOT be purely additive.** It currently adds per-zone paragraph margins WITHOUT removing the existing per-zone spatial modulation (lines 840-890). Result: BOTH sets of rules exist, cascade produces unpredictable margins. Must say "DELETE lines 840-890 first."

4. **Add grid/flex layouts.** The remediation prompt has ZERO mention of `display: grid` or `display: flex`. This is the second-highest-impact gap (after component definitions). Without layout variety, the page remains single-column regardless of how good the typography gets.

5. **Add responsive breakpoints.** The remediation prompt has ZERO mention of `@media`. A production page without responsive CSS is incomplete.

6. **Consolidate zone tokens.** Instead of replacing 12 sub-perceptual tokens with 12 perceptible tokens (Phase 3), consolidate to 4 semantically meaningful tokens (`warm`, `cool`, `tan`, `base`). Less to maintain, more intentional.

### For the builder executing remediation

The remediation prompt is ~80% correct in diagnosis but ~40% correct in execution strategy. The builder should:

1. Start by DELETING lines 738-963 (the entire sub-perceptual block)
2. Then add the remediation prompt's replacements (which are correctly specified at perceptible amplitudes)
3. Then add component definitions, grid layouts, and responsive breakpoints from the freed budget
4. Result: roughly same CSS line count, dramatically different visual impact

---

## 8. EXECUTIVE SUMMARY

**Root cause:** The flagship spent 23.7% of its CSS budget (233 lines) on typographic and spatial micro-modulations that no human can perceive. Meanwhile, it spent 0% on grid layouts, responsive breakpoints, accessibility, and distinct component types -- the exact features that make CD-006 score 39/40.

**The CSS was not under-written. It was misallocated.** Both files have ~1,000 CSS lines. The gap is WHERE those lines go.

**The remediation prompt correctly identifies WHAT to fix** (structural borders, perceptible typography, amplified backgrounds, spatial rhythm, component differentiation) **but fails to explicitly DEALLOCATE** the sub-perceptual CSS first. This creates a risk that builders ADD the remediation ON TOP of the existing sub-perceptual CSS, producing a ~1,200-line stylesheet that is still 20% wasted.

**The fix is budget-neutral.** Remove 203 sub-perceptual lines, add 203 lines of visible structural variety. Net CSS change: approximately zero. Visual impact change: transformative.

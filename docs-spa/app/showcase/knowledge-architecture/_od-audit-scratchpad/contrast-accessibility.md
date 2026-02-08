# Contrast & Accessibility Audit — All 6 ODs

**Auditor:** CONTRAST
**Date:** 2026-02-07
**Method:** Programmatic WCAG 2.1 contrast ratio extraction via Playwright `page.evaluate()` on each OD page at `localhost:8080`. Foreground colors extracted from `getComputedStyle().color`, background colors resolved by walking the DOM parent chain. Relative luminance and contrast ratios computed per WCAG 2.1 algorithm. Focus indicators, `prefers-reduced-motion`, keyboard navigation, ARIA landmarks, and color-only information also checked.

---

## CROSS-OD SYSTEMIC FINDINGS (affect all or most ODs)

### FINDING CA-001: Callout Labels Below WCAG AA (ALL 6 ODs)
**Severity: HIGH**
**WCAG: 1.4.3 Contrast (Minimum) — Level AA**

Callout labels use their accent color as text color on backgrounds that are too similar in luminance. At 10-12px normal weight, these require 4.5:1 minimum.

| Color Token | Foreground | Typical Background | Ratio | Required | Deficit |
|---|---|---|---|---|---|
| `--accent-blue` (#4A90D9) | rgb(74,144,217) | #FFFFFF (white) | 3.34:1 | 4.5:1 | -1.16 |
| `--accent-blue` (#4A90D9) | rgb(74,144,217) | #F0EBE3 (border-subtle) | 2.82:1 | 4.5:1 | -1.68 |
| `--accent-blue` (#4A90D9) | rgb(74,144,217) | #FEF9F5 (background) | 3.20:1 | 4.5:1 | -1.30 |
| `--accent-green` (#4A9D6B) | rgb(74,157,107) | #FFFFFF | 3.32:1 | 4.5:1 | -1.18 |
| `--accent-green` (#4A9D6B) | rgb(74,157,107) | #F0EBE3 | 2.80:1 | 4.5:1 | -1.70 |
| `--accent-green` (#4A9D6B) | rgb(74,157,107) | #FEF9F5 | 3.17:1 | 4.5:1 | -1.33 |
| `--accent-coral` (#C97065) | rgb(201,112,101) | #FEF6F5 | 3.29:1 | 4.5:1 | -1.21 |
| `--accent-amber` (#D97706) | rgb(217,119,6) | #F0EBE3 | 2.68:1 | 4.5:1 | -1.82 |
| `--accent-amber` (#D97706) | rgb(217,119,6) | #FEF9F5 | 3.05:1 | 4.5:1 | -1.45 |
| `--accent-purple` (#7C3AED) | rgb(124,58,237) | #7C3AED (self) | 1.00:1 | 4.5:1 | -3.50 |
| `--color-primary` (#E83025) | rgb(232,48,37) | #F0EBE3 | 3.63:1 | 4.5:1 | -0.87 |

**Affected ODs:**
- OD-001: "Info" label (blue/blue bg 1.00:1), "Tip" (green/green bg 1.00:1), "Gotcha" (coral/coral bg 1.00:1) — These show label ON the accent color background, ratio = 1.00:1 (CRITICAL)
- OD-002: "Essence" label (purple/purple bg 1.00:1 or red/subtle 3.63:1)
- OD-003: "Prerequisites" (red on light red 4.01:1), troubleshoot summary (coral 3.29:1)
- OD-004: "Essence" (red on border-subtle 3.63:1), troubleshoot summary (coral 3.29:1)
- OD-005: "Checkpoint" label (green/green 1.00:1), Essence (text on purple 3.05:1)
- OD-006: "Insight" label (blue/white 3.34:1), "Note" (amber/background 3.05:1), "Warning" (coral/background 3.35:1)

**Note on 1.00:1 ratio labels:** Several ODs render callout labels with the accent color AS the label background, making the text invisible against its own background color. This appears to be a CSS architecture issue where `.callout__label` gets both `color: <accent>` and a parent `background-color: <accent>`.

**Recommended Fix:** Darken all accent-color label text by ~30% or use `--color-text` (#1A1A1A) for labels, relying on the 4px left border color for type differentiation.

---

### FINDING CA-002: Exploration Meta Values Below WCAG AA (ALL 6 ODs)
**Severity: MEDIUM**
**WCAG: 1.4.3 Contrast (Minimum) — Level AA**

`.exploration-meta__value` uses `--color-primary` (#E83025) at 10px bold on white (#FFFFFF). Ratio: **4.30:1** (requires 4.5:1 for normal-size text). At 10px even with bold weight (700), this does NOT qualify as "large text" (needs >= 14px bold or >= 18px).

**Affected elements across all ODs:**
- "PULSE + TIDAL", "Q&A Dialogue", "DD-005, DD-006", "12 Research Findings" (OD-001)
- "CRESCENDO", "Narrative Arc", "DD-001, DD-002, DD-006" (OD-002)
- "Islands + Bookends", "DD-003 (32/40)", "3 — Organization", "5/5" (OD-003)
- "Active", "Geological + Crescendo", "Certainty Strata" (OD-004)
- "WAVE + ISLANDS", "Hub-Spoke" (OD-005)
- Section header numbers (OD-006)

**Ratio: 4.30:1** — misses 4.5:1 by 0.20.

**Recommended Fix:** Either increase font size to 14px bold (qualifies as large text, 3:1 needed = PASS) or darken the red slightly.

---

### FINDING CA-003: No `focus-visible` Styles (4/6 ODs)
**Severity: MEDIUM**
**WCAG: 2.4.7 Focus Visible — Level AA**

| OD | Has `:focus-visible` rules? | Has custom focus styling? |
|---|---|---|
| OD-001 | NO | Browser default only (blue auto 1px) |
| OD-002 | NO | Browser default only |
| OD-003 | YES | Custom focus styling present |
| OD-004 | YES | Custom focus styling present |
| OD-005 | NO | Browser default only |
| OD-006 | NO | Browser default only |

Browser defaults (blue auto outline) are technically WCAG-compliant but:
1. The blue outline color is NOT in the locked palette
2. At 1px width, the outline may be insufficient against the warm cream background
3. Soul checklist item #10 specifies focus-visible requirements

**Recommended Fix:** Add `:focus-visible` rule to all ODs: `outline: 3px solid var(--color-primary); outline-offset: 2px;` — this uses the locked red accent, maintains soul compliance (sharp edges), and provides clear focus indication.

---

### FINDING CA-004: No `prefers-reduced-motion` (2/6 ODs)
**Severity: MEDIUM**
**WCAG: 2.3.3 Animation from Interactions — Level AAA**

| OD | `prefers-reduced-motion` media query? | Animation elements detected |
|---|---|---|
| OD-001 | NO | 415 elements with animation/transition |
| OD-002 | NO | Unknown (script-based detection unavailable) |
| OD-003 | NO (per structural check) | Unknown |
| OD-004 | YES | Animations respect reduced motion |
| OD-005 | YES | Animations respect reduced motion |
| OD-006 | YES | Animations respect reduced motion |

OD-001 has 415 elements with active CSS animations/transitions and NO reduced-motion media query. This includes the scroll-witness, scroll-driven section reveals (EXT-CREATIVE-003, EXT-CREATIVE-004), and hover transitions.

OD-002 similarly lacks a reduced-motion query.

**Recommended Fix:** Add to all ODs:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### FINDING CA-005: No Skip Links (5/6 ODs)
**Severity: LOW-MEDIUM**
**WCAG: 2.4.1 Bypass Blocks — Level A**

| OD | Skip Link Present? | Notes |
|---|---|---|
| OD-001 | NO | No skip link |
| OD-002 | NO | No skip link |
| OD-003 | NO | No skip link |
| OD-004 | NO | No skip link |
| OD-005 | YES | `.skip-link` "Skip to territory map" — but contrast fails (4.30:1 white on red) |
| OD-006 | NO | No skip link |

OD-005 has a skip link but its contrast (white on `--color-primary` red) is 4.30:1, below the 4.5:1 requirement for normal text at 16px.

**Recommended Fix:** Add skip link to all ODs. For OD-005, ensure the skip link text is large enough (18px+) or use a higher-contrast combination.

---

## PER-OD DETAILED FINDINGS

### OD-001: Conversational Structure

**Contrast Failures:** 5
| Element | FG | BG | Size | Ratio | Required |
|---|---|---|---|---|---|
| `.exploration-meta__value` "PULSE + TIDAL" | #E83025 | #FFFFFF | 10px/700 | 4.30:1 | 4.5:1 |
| `.exploration-meta__value` "Q&A Dialogue" | #E83025 | #FFFFFF | 10px/700 | 4.30:1 | 4.5:1 |
| `.callout__label` "Info" | #4A90D9 | #4A90D9 bg | 10px/400 | 1.00:1 | 4.5:1 |
| `.callout__label` "Tip" | #4A9D6B | #4A9D6B bg | 10px/400 | 1.00:1 | 4.5:1 |
| `.callout__label` "Gotcha" | #C97065 | #C97065 bg | 10px/400 | 1.00:1 | 4.5:1 |

**Accessibility Features:**
- `prefers-reduced-motion`: MISSING
- `:focus-visible`: MISSING
- Skip link: MISSING
- ARIA landmarks: None (no `<main>`, no `<nav>`, no `<article>`)
- Interactive elements: 4 (Copy buttons only, scroll-witness links)
- `<details>` elements: 0 (collapsible sections use JavaScript)
- Semantic HTML: LOW — all `<div>`-based, no landmark elements

**Keyboard Navigation:**
- Copy buttons reachable via Tab
- Scroll-witness sidebar links reachable
- Collapsible "Dive deeper" sections use `<div>` with cursor:pointer — NOT keyboard accessible (no `<details>/<summary>`, no `role="button"`, no `tabindex`)
- Tab order follows visual order: PASS

**Color-Only Information:**
- Callout types differentiated by color AND text label: PASS (each callout has "Info", "Tip", "Gotcha", "Essence", "Challenge" label)
- Q/A differentiation by background color AND structural position (Q label + indentation): PASS

---

### OD-002: Narrative Arc Structure

**Contrast Failures:** 7
| Element | FG | BG | Size | Ratio | Required |
|---|---|---|---|---|---|
| `.exploration-meta__value` "CRESCENDO" | #E83025 | #FFFFFF | 10px/700 | 4.30:1 | 4.5:1 |
| `.callout--essence` (container) | #1A1A1A | #7C3AED | 16px/400 | 3.05:1 | 4.5:1 |
| `.callout__label` "Essence" | #7C3AED | #7C3AED bg | 10px/400 | 1.00:1 | 4.5:1 |
| `.callout__body` (Essence body) | #1A1A1A | #7C3AED | 16px/400 | 3.05:1 | 4.5:1 |
| `.code-block__num` line numbers | #555555 | #1E1E1E | 13px/400 | 2.24:1 | 4.5:1 |
| `.file-tree__item--highlight` | #E83025 | #FFFFFF | 13px/500 | 4.30:1 | 4.5:1 |
| `.narrative-summary__marker` | #1A1A1A | #E83025 | 14px/400 | 4.04:1 | 4.5:1 |

**CRITICAL — Essence Callout (OD-002):** The Essence callout uses `--accent-purple` (#7C3AED) as a SOLID background with near-black text (#1A1A1A) on top. Ratio = 3.05:1. For 16px normal weight text, 4.5:1 is required. This is a significant WCAG failure. The same callout label "Essence" is rendered purple-on-purple (1.00:1).

**CRITICAL — Code Block Line Numbers:** `.code-block__num` renders gray (#555555) on the dark code background (#1E1E1E). Ratio = 2.24:1. Well below any WCAG threshold.

**Accessibility Features:**
- `prefers-reduced-motion`: MISSING
- `:focus-visible`: MISSING
- Skip link: MISSING
- ARIA landmarks: None (no `<main>`, no `<nav>`, no `<article>`)
- Interactive elements: 4 (Copy buttons only)
- `<details>` elements: 0
- Semantic HTML: LOW

---

### OD-003: Task-Based Structure

**Contrast Failures:** 6
| Element | FG | BG | Size | Ratio | Required |
|---|---|---|---|---|---|
| `.exploration-meta__value` "Islands + Bookends" | #E83025 | #FFFFFF | 10px/700 | 4.30:1 | 4.5:1 |
| `.bookend-front__label` "You Are Here" | #E83025 | #FFFFFF | 10px/400 | 4.30:1 | 4.5:1 |
| `.callout__label` "Prerequisites" | #E83025 | #FEF5F4 | 10px/400 | 4.01:1 | 4.5:1 |
| Troubleshoot `<summary>` | #C97065 | #FEF6F5 | 12px/500 | 3.29:1 | 4.5:1 |
| `.verification-list__check` checkmarks | #4A9D6B | #FFFFFF | 11px/400 | 3.32:1 | 4.5:1 |
| `.whats-next__arrow` arrows | #E83025 | #FFFFFF | 12px/400 | 4.30:1 | 4.5:1 |

**Accessibility Features:**
- `prefers-reduced-motion`: Reported inconsistently (likely MISSING based on structural check)
- `:focus-visible`: YES — custom focus styling present
- Skip link: MISSING
- ARIA landmarks: `<main>` YES, `<article>` x6 (each task island), `<section aria-label>` x2
- Interactive elements: 6 (Copy buttons + troubleshoot details)
- `<details>` elements: 6 (troubleshooting accordions)
- Semantic HTML: HIGH — best of all 6 ODs

**Keyboard Navigation:**
- All 6 troubleshooting `<details>/<summary>` elements reachable and toggleable via Enter/Space: PASS
- Copy buttons reachable via Tab: PASS
- Task island articles properly structured with headings: PASS

**Color-Only Information:**
- Checkmarks use green color AND checkmark symbol: PASS
- Task progress uses numbered steps AND visual markers: PASS
- Callout types have text labels AND color: PASS

---

### OD-004: Confidence-Based Structure

**Contrast Failures:** 5
| Element | FG | BG | Size | Ratio | Required |
|---|---|---|---|---|---|
| `.exploration-meta__value` "Active" | #E83025 | #FFFFFF | 10px/400 | 4.30:1 | 4.5:1 |
| `.geological-survey__label` | #E83025 | #FFFFFF | 10px/400 | 4.30:1 | 4.5:1 |
| `.callout__label` "Essence" | #E83025 | #F0EBE3 | 10px/400 | 3.63:1 | 4.5:1 |
| Troubleshoot `<summary>` | #C97065 | #FEF6F5 | 12px/500 | 3.29:1 | 4.5:1 |
| `.verification-list__check` | #4A9D6B | #FEF9F5 | 11px/400 | 3.17:1 | 4.5:1 |

**Accessibility Features:**
- `prefers-reduced-motion`: YES
- `:focus-visible`: YES
- Skip link: MISSING
- ARIA landmarks: `<main>` YES, `<article>` x11, `<section aria-label>` x6
- Interactive elements: 1 (confidence switcher)
- `<details>` elements: 1
- Semantic HTML: HIGH

**Keyboard Navigation:**
- Confidence switcher (button-like elements) need verification for keyboard operability
- Details/summary reachable: PASS

---

### OD-005: Spatial Hub-Spoke Structure

**Contrast Failures:** 8
| Element | FG | BG | Size | Ratio | Required |
|---|---|---|---|---|---|
| `.skip-link` "Skip to territory map" | #FFFFFF | #E83025 | 16px/400 | 4.30:1 | 4.5:1 |
| `.exploration-meta__value` "WAVE + ISLANDS" | #E83025 | #FFFFFF | 10px/700 | 4.30:1 | 4.5:1 |
| `.territory-tile__badge` "3 Concepts" | #E83025 | #FFFFFF | 10px/400 | 4.30:1 | 4.5:1 |
| `.breadcrumb__separator` triangles | #E0D5C5 | #FEF9F5 | 11px/400 | 1.39:1 | 4.5:1 |
| `.code-block__num` line numbers | #555555 | #1E1E1E | 13px/400 | 2.24:1 | 4.5:1 |
| `.callout__label` "Checkpoint" | #4A9D6B | #4A9D6B bg | 10px/400 | 1.00:1 | 4.5:1 |
| `.callout--essence` (container) | #1A1A1A | #7C3AED | 16px/400 | 3.05:1 | 4.5:1 |
| `.callout--essence` (container, variant) | #1A1A1A | #7C3AED | 16px/400 | 3.05:1 | 4.5:1 |

**CRITICAL — Breadcrumb Separator:** The `>` / `triangle` breadcrumb separator uses `--color-border` (#E0D5C5) on `--color-background` (#FEF9F5). Ratio = **1.39:1**. This is nearly invisible. However, breadcrumb separators are decorative and the text labels themselves pass, so this may be acceptable as a decorative element (WCAG 1.4.3 exempts decoration).

**CRITICAL — Code Block Line Numbers (shared with OD-002):** Same issue as OD-002 — gray on dark = 2.24:1.

**Accessibility Features:**
- `prefers-reduced-motion`: YES
- `:focus-visible`: MISSING
- Skip link: YES (but fails contrast — 4.30:1)
- ARIA landmarks: `<main>` YES, `<nav>` YES, `<section aria-label>` x8
- Interactive elements: 33 (territory tiles, navigation links, copy buttons)
- `<details>` elements: 0
- Semantic HTML: HIGH — best landmark coverage

**Keyboard Navigation:**
- Territory tile navigation: 33 interactive elements suggest comprehensive keyboard support
- Hub/spoke navigation via breadcrumbs: links are keyboard accessible
- Tab order follows visual order: likely PASS given semantic structure

---

### OD-006: Creative/Emergent Synthesis

**Contrast Failures:** 4
| Element | FG | BG | Size | Ratio | Required |
|---|---|---|---|---|---|
| `.section-header__number` "Section 01" | #E83025 | #FEF9F5 | 12px/400 | 4.11:1 | 4.5:1 |
| `.callout__label` "Insight" | #4A90D9 | #FFFFFF | 12px/500 | 3.34:1 | 4.5:1 |
| `.task-step__marker` | #1A1A1A | #666666 | 16px/400 | 3.03:1 | 4.5:1 |
| `.certainty-badge__icon` | #1A1A1A | #1A1A1A | 10px/500 | 1.00:1 | 4.5:1 |

**CRITICAL — Certainty Badge Icon:** Renders near-black on near-black (1.00:1). This appears to be an icon that inherits text color without a contrasting background.

**Accessibility Features:**
- `prefers-reduced-motion`: YES
- `:focus-visible`: MISSING
- Skip link: MISSING
- ARIA landmarks: `<main>` YES, `<nav>` YES, `<section aria-label>` x6
- Interactive elements: 10
- `<details>` elements: 1
- Semantic HTML: MODERATE

---

## SUMMARY MATRIX

| Check | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|---|---|---|---|---|---|---|
| **Contrast Failures** | 5 | 7 | 6 | 5 | 8 | 4 |
| **Contrast Passes** | ~28 | ~28 | ~32 | ~30 | ~43 | ~39 |
| **Critical (<=2:1)** | 3 | 2 | 0 | 0 | 2 | 1 |
| **prefers-reduced-motion** | MISSING | MISSING | Unclear | YES | YES | YES |
| **:focus-visible** | MISSING | MISSING | YES | YES | MISSING | MISSING |
| **Skip Link** | MISSING | MISSING | MISSING | MISSING | Present (low contrast) | MISSING |
| **`<main>` landmark** | NO | NO | YES | YES | YES | YES |
| **`<nav>` landmark** | NO | NO | NO | NO | YES | YES |
| **`<article>` elements** | 0 | 0 | 6 | 11 | 0 | 0 |
| **ARIA sections** | 0 | 0 | 2 | 6 | 8 | 6 |
| **`<details>` (keyboard-native collapsibles)** | 0 | 0 | 6 | 1 | 0 | 1 |
| **Interactive element count** | 4 | 4 | 6 | 1 | 33 | 10 |
| **Color-only info** | PASS | PASS | PASS | PASS | PASS | PASS |

---

## TOP 5 ISSUES BY SEVERITY

1. **CRITICAL — Callout labels with 1.00:1 ratio** (OD-001, OD-002, OD-005): Labels rendered in accent color ON accent color background. Completely invisible. Affects Info, Tip, Gotcha, Essence, Checkpoint callout types.

2. **HIGH — Essence callout body text on purple** (OD-002, OD-005): #1A1A1A on #7C3AED = 3.05:1. Body text at 16px/400 needs 4.5:1.

3. **HIGH — Code block line numbers** (OD-002, OD-005): #555555 on #1E1E1E = 2.24:1. Well below minimum.

4. **MEDIUM — All meta values fail** (ALL 6 ODs): #E83025 on white at 10px = 4.30:1. Misses 4.5:1 by 0.20.

5. **MEDIUM — Missing reduced-motion and focus-visible** (OD-001, OD-002 worst): No animation fallback for motion-sensitive users; no custom focus indicators.

---

## COMPACTION-SAFE SUMMARY

**Agent:** CONTRAST
**Scope:** All 6 ODs, WCAG 2.1 Level AA contrast + accessibility features
**Total contrast failures:** 35 across 6 ODs (5+7+6+5+8+4)
**Critical failures (<=2:1):** 8 instances across 4 ODs
**Systemic issues:** 5 (CA-001 through CA-005)
**Per-OD issues:** OD-002 worst (7 failures, no motion/focus/landmarks); OD-006 best (4 failures, has motion/landmarks)
**All ODs pass:** Color-only information check (labels present on all callouts)
**Most accessible OD:** OD-003 (semantic HTML, articles, focus-visible, details elements)
**Least accessible OD:** OD-001/OD-002 (no landmarks, no focus-visible, no reduced-motion)
**Key fix:** Darken callout label text colors or use #1A1A1A with border-color-only differentiation
**Status:** COMPLETE

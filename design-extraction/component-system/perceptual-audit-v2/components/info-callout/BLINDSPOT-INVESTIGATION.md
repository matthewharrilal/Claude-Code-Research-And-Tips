# Blindspot Investigation: Info Callout (REVISED)

**Component:** Info Callout
**Audit Date:** 2026-02-03
**Previous Score:** 3/5 (critical gaps)
**Artifacts Reviewed:**
- Screenshot: `info-callout-L3-revised.png`
- HTML: `component-info-callout.html`

---

## Step 1: Edge Cases

| Edge Case | Examined? | Evidence | Notes |
|-----------|-----------|----------|-------|
| Empty content | NO | Not demonstrated | No empty state shown. Would the callout collapse? Show a default message? |
| Very long content | NO | Not demonstrated | No example tests content wrapping over many lines or screen widths |
| Inline code in content | YES | Lines 215, 229-230, 246 | `<code>claude-code --version</code>`, `<code>CLAUDE.md</code>`, `<code>--reload</code>` — well styled |
| Links in content | PARTIAL | CSS defined (lines 148-151) but NO demo | `.info-callout__content a` exists with red underline, but no link shown in examples |
| Multiple paragraphs | YES | Lines 228-231 | Multi-paragraph example with proper `p + p` margin spacing |

**Edge Case Coverage:** 2.5/5

---

## Step 2: Accessibility

| Accessibility Feature | Present? | Evidence | Gap Analysis |
|-----------------------|----------|----------|--------------|
| Focus indicators | NO | Not defined | No `:focus` or `:focus-visible` styles for interactive elements (links, potentially the callout itself) |
| Color contrast | PARTIAL | Text is `#1a1a1a` on `#FEF9F5` | Needs formal WCAG verification. Label at `#3d3d3d` (line 121) may be borderline on warm background |
| Screen reader semantics | YES | `role="note"` on all instances | Correctly applied on lines 212, 226, 245, 263 |
| RTL support | NO | Not addressed | No `dir="rtl"` testing, no logical properties (`padding-inline-start` vs `padding-left`), border-left won't flip |

**Accessibility Coverage:** 2/4

### Specific Accessibility Issues:

1. **Focus states missing entirely** — If links are in content (CSS suggests they can be), there's no focus ring defined
2. **Border-left hardcoded** — Should use `border-inline-start` for RTL support
3. **Padding uses physical properties** — `padding-left/right` should be `padding-inline-start/end`
4. **Label color contrast** — `#3d3d3d` on `#FEF9F5` warm background needs verification (WCAG AA requires 4.5:1)

---

## Step 3: Responsive Behavior

| Responsive Aspect | Examined? | Evidence | Notes |
|-------------------|-----------|----------|-------|
| Mobile width behavior | NO | Fixed `max-width: 700px` only | No media queries. What happens at 320px? 375px? |
| Code wrapping at narrow widths | NO | Not tested | `<code>` elements have no `word-break` or `overflow-wrap` rules. Long code strings could overflow |
| Padding adjustment at mobile | NO | Fixed 24px/20px/28px | No responsive padding reduction for small screens |
| Touch target size | N/A | No interactive elements in base component | Would apply if links present |

**Responsive Coverage:** 0/4

### Code Wrapping Risk:

```css
.info-callout__content code {
  font-family: var(--font-code);
  font-size: 0.9em;
  background: var(--bg-card-warm);
  padding: 2px 6px;
  border-radius: 0;
  /* MISSING: word-break, overflow-wrap, white-space handling */
}
```

A long command like `claude-code --config=/very/long/path/to/configuration.json --verbose --debug` could break the layout on mobile.

---

## Step 4: Critical Blindspots (TOP 3)

### 1. NO RESPONSIVE BREAKPOINTS

**Severity:** HIGH
**Impact:** Component untested below 700px. Mobile users (>50% of web traffic) may see:
- Overly cramped text
- Code overflow
- Excessive padding relative to content area

**Recommendation:** Add at minimum:
```css
@media (max-width: 480px) {
  .info-callout {
    padding: 16px 12px 20px 12px;
  }
}
```

### 2. NO FOCUS STATES FOR INTERACTIVE CONTENT

**Severity:** HIGH
**Impact:** Keyboard users cannot navigate links within callouts. WCAG 2.4.7 failure (Focus Visible).

**Recommendation:**
```css
.info-callout__content a:focus-visible {
  outline: 2px solid var(--accent-red);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### 3. NO RTL SUPPORT

**Severity:** MEDIUM
**Impact:** Right-to-left languages (Arabic, Hebrew, Persian) will see broken layout:
- Border on wrong side
- Padding asymmetry incorrect

**Recommendation:** Use CSS logical properties:
```css
.info-callout {
  border-inline-start: var(--border-accent) solid var(--text-tertiary);
  padding-inline: 20px;
  padding-block: 24px 28px;
}
```

---

## Step 5: Score Assessment

### What the Revised Version Got Right:

1. **Semantic HTML** — `<aside>` with `role="note"` is correct
2. **Typography hierarchy** — Serif italic label + sans content creates proper differentiation
3. **Inline code styling** — Present and readable
4. **Multi-paragraph support** — Proper spacing with `p + p`
5. **Variant system** — Tinted variant demonstrates extensibility
6. **BEM naming** — `.info-callout__label`, `.info-callout__content` is clean
7. **Design token usage** — Consistent use of CSS variables

### What's Still Missing:

| Gap | Weight | Score Impact |
|-----|--------|--------------|
| No responsive behavior | 1.0 | -1.0 |
| No focus states | 0.8 | -0.8 |
| No RTL support | 0.5 | -0.5 |
| No empty state | 0.3 | -0.3 |
| No link demo (only CSS) | 0.2 | -0.2 |
| No long content test | 0.2 | -0.2 |

**Total Deductions:** -3.0

---

## Final Score

| Category | Max Points | Awarded | Notes |
|----------|------------|---------|-------|
| Edge Cases | 1.0 | 0.5 | Inline code + multi-para only |
| Accessibility | 1.0 | 0.5 | role="note" yes, focus/RTL no |
| Responsive | 1.0 | 0.0 | Zero coverage |
| Visual Design | 1.0 | 0.9 | Soul intact, well executed |
| Code Quality | 1.0 | 0.9 | Clean BEM, tokens, semantic |

**NEW SCORE: 2.8/5** (rounded to **3/5**)

**ASSESSMENT:** Score remains at 3/5. The revision improved typography confidence and semantic structure, but did not address the fundamental gaps in responsive behavior, accessibility focus states, and RTL support. These are architectural gaps, not styling oversights.

---

## Remediation Priority

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| P0 | Add focus states | 15 min | WCAG compliance |
| P0 | Add responsive breakpoints | 30 min | Mobile usability |
| P1 | Convert to logical properties | 20 min | RTL support |
| P2 | Add empty state handling | 15 min | Edge case coverage |
| P2 | Demo with links | 5 min | Documentation completeness |
| P3 | Long content stress test | 10 min | Robustness verification |

---

*Investigation complete. Core soul principles are sound; infrastructure gaps remain.*

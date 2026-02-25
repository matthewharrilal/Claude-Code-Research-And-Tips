# Gate Runner Usability Blindness Audit

**Date:** 2026-02-24
**Auditor:** Opus agent (gate-usability-audit task)
**Source files:**
- `ephemeral/va-extraction/gate-runner-core.js` (1,437 lines)
- `ephemeral/va-extraction/gate-runner-spec.md` (189 lines)
- `ephemeral/va-extraction/gate-manifest.json` (159 lines)
- `ephemeral/va-extraction/gate-runner-preconditions.md` (84 lines)
- `ephemeral/pages/V3-Yegge-Gas-Town/p3a-gate-results.json` (291 lines)

---

## THE PROBLEM

The gate runner has 31 Playwright-executable gates + 4 brief verification gates. It flagged a 4%-opacity purple tint (`rgba(124, 58, 237, 0.04)`) as a REQUIRED FAIL. It has ZERO gates checking whether a human can read the text on the page.

The pipeline's primary diagram has illegible labels. No gate caught this. Not REQUIRED, not RECOMMENDED, not ADVISORY. The gate runner is blind to the single most obvious defect on the page.

---

## SECTION 1: EVERY EXISTING GATE CATEGORIZED

### Classification Criteria

- **HUMAN-PERCEPTIBLE:** A typical reader at normal viewing distance would notice this defect within 5 seconds of seeing the page.
- **SUB-PERCEPTUAL:** No human would detect this without dev tools, color pickers, or pixel measurement. The difference is below the threshold of casual perception.
- **MIXED:** Whether a human notices depends on the specific measured values. At one end of the range it is invisible; at the other it is obvious.

---

### 1A. Identity Gates (GR-01 through GR-10) -- All REQUIRED

| Gate | Name | Perceptibility | Rationale |
|------|------|---------------|-----------|
| **GR-01** | Border Radius Zero | **MIXED** | A 2px radius is invisible. A 12px radius is immediately visible. The gate has zero tolerance -- any non-zero value fails. Most violations (1-3px rounding from subpixel rendering) are SUB-PERCEPTUAL. |
| **GR-02** | Box Shadow None | **MIXED** | A `0 0 0 1px rgba(0,0,0,0.02)` shadow is invisible. A `0 4px 12px rgba(0,0,0,0.3)` shadow is immediately visible. Zero tolerance means sub-perceptual violations fail. |
| **GR-03** | Container Width 940-960px | **HUMAN-PERCEPTIBLE** | A 1200px container vs 960px container changes the entire page feel. Readers notice this. |
| **GR-04** | No Gradients | **MIXED** | A subtle `linear-gradient(180deg, #faf8f2, #f8f5ed)` (3 RGB delta) is invisible. A rainbow gradient is obvious. Zero tolerance catches invisible gradients. |
| **GR-05** | Warm Palette Compliance | **SUB-PERCEPTUAL** | The V3 failures were `rgba(124, 58, 237, 0.04)` -- a purple tint at 4% opacity. No human can see this. The gate tests the raw RGB channel relationship (B > R+10 AND B > G+10) with no consideration of opacity or visibility. A fully opaque cold blue heading would be visible; a 4% opacity tint is not. |
| **GR-06** | Font Trinity | **SUB-PERCEPTUAL** | The V3 failures were "Times" (html default never rendered because body has font-family set), "SF Mono" (monospace fallback after JetBrains Mono), and "Georgia" (serif fallback). These are FALLBACK fonts that only render if the primary font fails to load. On any normal connection, users see Instrument Serif/Inter/JetBrains Mono. The gate checks font-stack declaration, not what the user actually sees. |
| **GR-07** | No Pure Black/White | **SUB-PERCEPTUAL** | The V3 failure was `rgb(0,0,0)` on the `<html>` element -- the browser's default text color. No text on the page actually renders in pure black because all visible text elements have explicit color overrides. The gate checks the inherited default, not what renders. `#000000` vs `#1a1a1a` at body text size: imperceptible without a color picker. |
| **GR-08** | No Decorative Elements | **HUMAN-PERCEPTIBLE** | Standalone hrs, empty spacer divs, and icon-only decorative elements are visible page furniture. |
| **GR-09** | Border Weight Hierarchy | **MIXED** | The V3 failures were `0.666667px` and `2.66667px` borders. 0.67px is sub-pixel -- literally cannot render at that precision on any screen. The gate is detecting CSS declaration artifacts, not visible border problems. A page with only 1px borders (no hierarchy) would be visible to an experienced designer; sub-pixel width differences are not. |
| **GR-10** | Cross-Page DNA Properties | **MIXED** | Bundles 9 sub-checks. Some are HUMAN-PERCEPTIBLE (skip link existence, heading hierarchy). Some are SUB-PERCEPTUAL (::selection color checked via stylesheet rules -- users only see this when they select text, and most won't notice the exact red shade; :focus-visible only visible during keyboard navigation; h3 italic vs non-italic is noticeable but not a usability defect). |

---

### 1B. Perception Gates (GR-11 through GR-15, GR-44) -- All REQUIRED

| Gate | Name | Perceptibility | Rationale |
|------|------|---------------|-----------|
| **GR-11** | Background Delta >= 15 RGB | **MIXED** | 15 RGB delta IS the floor of human perception. Deltas below 15 are SUB-PERCEPTUAL. Deltas of 15-20 are BARELY perceptible. The gate correctly targets the perception boundary, but it treats a 14-delta violation the same as a 3-delta violation. |
| **GR-12** | Letter Spacing >= 0.025em | **SUB-PERCEPTUAL** | 0.025em at 16px font = 0.4px. The difference between 0.020em (0.32px) and 0.025em (0.4px) letter spacing is not visible to any human. This gate exists to prevent "ghost mechanism" letter-spacing (e.g., 0.001em), but 0.020em is already invisible. The correct concern (letter-spacing so small it cannot be seen) is valid, but the threshold is set at a level where both sides of the boundary are invisible. |
| **GR-13** | Stacked Gap <= 120px (CSS) | **HUMAN-PERCEPTIBLE** | 120px+ of whitespace between sections is visible as "too much blank space." This measures a real user-facing problem. |
| **GR-14** | Total Visual Gap <= 150px | **HUMAN-PERCEPTIBLE** | Direct viewport measurement of the gap between sections. The V3 false positives (nested section indicators) are a selector issue, not a concept issue. When accurate, this catches real whitespace voids. |
| **GR-15** | Single Margin <= 96px | **HUMAN-PERCEPTIBLE** | 96px of padding/margin is over 1 inch on screen. Exceeding it creates visible dead zones. |
| **GR-44** | Trailing Whitespace Void | **HUMAN-PERCEPTIBLE** | 300px of blank space at the bottom of the page is immediately noticed by scrolling users. |

---

### 1C. Anti-Pattern Gates (GR-17 through GR-22)

| Gate | Name | Tier | Perceptibility | Rationale |
|------|------|------|---------------|-----------|
| **GR-17** | Density Stacking | RECOMMENDED | **MIXED** | 4px padding on content text = noticeably cramped. 8px vs 12px on list items (the V3 failure) = borderline -- some designers prefer tighter list padding. |
| **GR-18** | Ghost Mechanisms | RECOMMENDED | **SUB-PERCEPTUAL** | By definition: sub-perceptual borders (<0.5px) and opacity (<0.1). This gate exists explicitly to catch invisible CSS. Its entire purpose is detecting sub-perceptual values. |
| **GR-19** | Threshold Gaming | RECOMMENDED | **SUB-PERCEPTUAL** | Checks whether >50% of background deltas cluster at the 15-17 RGB floor. This is a statistical pattern in CSS values. A page that "games" the threshold looks identical to one that honestly has deltas in the 15-17 range. The gate is checking builder intent, not visual output. |
| **GR-20** | Structural Echo | RECOMMENDED | **HUMAN-PERCEPTIBLE** | 3+ identical sections in a row (same bg, padding, border) = visible monotony. Users perceive "this page looks the same all the way down." |
| **GR-21** | Cognitive Overload | ADVISORY | **MIXED** | 4 distinct bg colors per viewport is a reasonable proxy, but includes callout tint backgrounds that inflate the count (V3 got 6 because of callout tints the human cannot see at 4-6% opacity). |
| **GR-22** | Color Zone Conflict | ADVISORY | **MIXED** | Red used as background vs border is a design system concern. 4 red bg elements (V3) might or might not be visible depending on size and context. |

---

### 1D. Wave 2 Gates (GR-45, GR-46, GR-50 through GR-53)

| Gate | Name | Tier | Perceptibility | Rationale |
|------|------|------|---------------|-----------|
| **GR-45** | Typography Variation | RECOMMENDED | **HUMAN-PERCEPTIBLE** | Whether headings use different sizes across sections = visible page rhythm. |
| **GR-46** | Print Stylesheet | ADVISORY | **SUB-PERCEPTUAL** | Existence of @media print rules. No user looking at the screen can tell whether a print stylesheet exists. This is a best-practice code quality check, not a visual check. |
| **GR-50** | Conviction Statement | ADVISORY | **SUB-PERCEPTUAL** | HTML comment. Invisible to all users. This is a process/documentation check. |
| **GR-51** | Bg Delta Distribution | RECOMMENDED | **MIXED** | The aggregate distribution of deltas (>=50% above 25 RGB) has a perceptual correlation but the specific statistical thresholds (stddev >= 8) are not things a human perceives. |
| **GR-52** | Section Height Variation | RECOMMENDED | **HUMAN-PERCEPTIBLE** | Visible page rhythm. All sections being the same height = monotonous. |
| **GR-53** | Density Arc Direction | ADVISORY | **SUB-PERCEPTUAL** | Whether the densest section is first or last is a compositional theory concern, not something a reader perceives as a defect. |

---

### 1E. Output Verification Gates

| Gate | Name | Tier | Perceptibility | Rationale |
|------|------|------|---------------|-----------|
| **GR-43** | Self-Evaluation Comment | REQUIRED | **SUB-PERCEPTUAL** | HTML comment. Invisible to all users. Process check. |

---

### 1F. Brief Verification Gates (BV-01 through BV-04)

| Gate | Name | Perceptibility | Rationale |
|------|------|---------------|-----------|
| **BV-01** | Tier Line Budget | **N/A (pre-build)** | Checks brief content, not visual output. Correlates with output quality but is not itself perceptual. |
| **BV-02** | Background Delta Verification | **N/A (pre-build)** | Checks brief hex values. Pre-build process check. |
| **BV-03** | Recipe Format Verification | **N/A (pre-build)** | Counts verb types in brief text. Pre-build process check. |
| **BV-04** | Suppressor Scan | **N/A (pre-build)** | Regex scan for anti-patterns in brief text. Pre-build process check. |

---

### 1G. Meta Gates

| Gate | Name | Tier | Perceptibility | Rationale |
|------|------|------|---------------|-----------|
| **GR-48** | Gate Coverage | REQUIRED | **N/A (meta)** | Checks that all other gates ran. Process meta-check. |
| **GR-49** | Result File Integrity | RECOMMENDED | **N/A (meta)** | Checks output file format. Process meta-check. |

---

## SECTION 2: AGGREGATE PERCEPTIBILITY CLASSIFICATION

### Summary Table

| Classification | Count | Gates | Current Tier Distribution |
|---------------|-------|-------|--------------------------|
| **HUMAN-PERCEPTIBLE** | 9 | GR-03, GR-08, GR-13, GR-14, GR-15, GR-44, GR-20, GR-45, GR-52 | 6 REQUIRED, 1 RECOMMENDED, 2 RECOMMENDED |
| **MIXED** | 10 | GR-01, GR-02, GR-04, GR-09, GR-10, GR-11, GR-17, GR-21, GR-22, GR-51 | 5 REQUIRED, 3 RECOMMENDED, 2 ADVISORY |
| **SUB-PERCEPTUAL** | 8 | GR-05, GR-06, GR-07, GR-12, GR-18, GR-19, GR-46, GR-50, GR-53, GR-43 | 4 REQUIRED, 2 RECOMMENDED, 4 ADVISORY |
| **N/A (pre-build/meta)** | 6 | BV-01-04, GR-48, GR-49 | 5 REQUIRED, 1 RECOMMENDED |

**Critical finding: 4 of 18 REQUIRED gates are SUB-PERCEPTUAL (GR-05, GR-06, GR-07, GR-12).** A page could fail all 4 of these gates while looking perfect to every human viewer. Conversely, a page could pass all 18 REQUIRED gates while having illegible text, broken diagrams, and invisible interactive elements.

---

## SECTION 3: SUB-PERCEPTUAL GATES -- DOWNGRADE ANALYSIS

For each SUB-PERCEPTUAL gate currently at REQUIRED or RECOMMENDED: should it be downgraded?

### GR-05: Warm Palette Compliance (currently REQUIRED)

**What it catches at the sub-perceptual end:** 4% opacity tints with cold channel ratios. `rgba(124, 58, 237, 0.04)` on a warm cream background computes to approximately `#fdfcf8` -- indistinguishable from the base `#fefcf3`.

**What it catches at the perceptible end:** A fully opaque blue heading (`color: #0000ff`) or a cold gray background (`#f0f0f8`).

**Should it be downgraded?** MODIFY, not downgrade. The gate should factor in EFFECTIVE visibility:
- If `opacity * max_channel_difference > 20`, the cold color is perceptible -- REQUIRED
- If `opacity * max_channel_difference <= 20`, the cold color is invisible -- ADVISORY
- Current behavior treats both identically, which is incorrect.

**Impact of downgrading to ADVISORY:** Cold tints at 4-6% opacity would no longer block the build. No visual change to the page. Fully opaque cold colors would also stop blocking, which IS a problem.

**Recommendation:** SPLIT into two gates:
- GR-05a: Warm Palette (visible colors, opacity >= 0.3 or no alpha) -- keep REQUIRED
- GR-05b: Warm Palette (sub-perceptual tints, opacity < 0.3) -- downgrade to ADVISORY

---

### GR-06: Font Trinity (currently REQUIRED)

**What it catches:** Font-family declarations that include non-trinity fonts in the stack. The V3 failures ("Times", "SF Mono", "Georgia") are all fallback fonts in the stack that only render if the primary font fails to load.

**Should it be downgraded?** MODIFY. The gate checks font-family DECLARATION, not rendered font. A much better check:
- Does `document.fonts.check('16px "Instrument Serif"')` return true? (font actually loaded)
- Is the FIRST font in each stack a trinity font?
- Are there rendered elements where the computed font is not a trinity font?

**Impact of downgrading to ADVISORY:** Fallback font stacks would stop blocking builds. On fast connections where all three fonts load, zero visual impact. On slow connections or font load failures, users might see Georgia instead of Instrument Serif -- this IS a visible difference but is an edge case.

**Recommendation:** MODIFY threshold. Check the RENDERED font (via `document.fonts.check()`) rather than the declared stack. Fallback fonts in positions 2+ of the stack should not trigger REQUIRED failures. Keep REQUIRED for: primary font position is wrong, or fewer than 3 trinity fonts are actively rendering.

---

### GR-07: No Pure Black/White (currently REQUIRED)

**What it catches:** `rgb(0,0,0)` or `rgb(255,255,255)` anywhere on any element. The V3 failure was the `<html>` element's DEFAULT color, which is overridden by explicit styles on all visible text.

**Should it be downgraded?** MODIFY. The gate should check VISIBLE TEXT ELEMENTS, not inherited defaults.

**Impact of downgrading to ADVISORY:** Browser default colors on structural elements that have no visible text would stop blocking. If actual visible text is in pure black (#000), that would also stop blocking -- but pure black text vs dark warm gray (#2a2a2a) is not perceptible without a color picker at body text sizes.

**Recommendation:** MODIFY to only check elements with visible text content (`el.textContent.trim().length > 0`) and visible rendering (`el.offsetHeight > 0`). Inherited defaults on structural containers should not trigger REQUIRED failures. Additionally, the #000 vs #1a1a1a distinction at 14-18px body text is genuinely sub-perceptual -- consider downgrading the entire gate to RECOMMENDED.

---

### GR-12: Letter Spacing >= 0.025em (currently REQUIRED)

**What it catches:** Letter-spacing values between 0 and 0.025em. At 16px base font, 0.025em = 0.4px. The gate is trying to prevent "ghost letter-spacing" (0.001em = 0.016px) but also catches 0.020em (0.32px), which is equally invisible.

**Should it be downgraded?** YES, to RECOMMENDED. The entire range this gate monitors (0 to 0.4px of letter-spacing) is below the threshold of human perception. The correct gate is GR-18 (Ghost Mechanisms), which already catches sub-perceptual values. GR-12 adds nothing that GR-18 doesn't already cover, but at a HIGHER severity tier.

**Impact of downgrading to RECOMMENDED:** Letter-spacing of 0.020em would no longer block builds. No visual change. The page already looks the same with 0.020em and 0.025em letter-spacing.

**Recommendation:** Downgrade to RECOMMENDED. Or better: MERGE into GR-18 (Ghost Mechanisms) and remove as a standalone gate.

---

### GR-18: Ghost Mechanisms (currently RECOMMENDED)

**Should it be downgraded?** NO. This is correctly tiered. It catches sub-perceptual values and is RECOMMENDED (informational flag), not REQUIRED. This is the MODEL for how sub-perceptual gates should be tiered.

### GR-19: Threshold Gaming (currently RECOMMENDED)

**Should it be downgraded?** Downgrade to ADVISORY. This gate checks builder INTENT (are they gaming thresholds?) not visual OUTPUT. A page with 50% of deltas at 15-17 RGB looks identical to one with deltas at 18-20 RGB. The statistical distribution of CSS values is not something any human perceives.

### GR-46: Print Stylesheet (currently ADVISORY)

**Already correctly tiered.** ADVISORY is appropriate for an invisible code-quality check.

### GR-50: Conviction Statement (currently ADVISORY)

**Already correctly tiered.** ADVISORY is appropriate for an invisible HTML comment.

### GR-53: Density Arc Direction (currently ADVISORY)

**Already correctly tiered.** ADVISORY is appropriate for a compositional theory concern.

### GR-43: Self-Evaluation Comment (currently REQUIRED)

**Should it be downgraded?** YES, to RECOMMENDED. This is an HTML comment invisible to all users. Its value is as a process artifact (did the builder reflect on their work?). Making it REQUIRED means a page with perfect visual output FAILS because of a missing invisible comment. That inverts the priority stack: process documentation > visual quality.

**Recommendation:** Downgrade to RECOMMENDED. A missing self-evaluation comment should be flagged, not block the build.

---

## SECTION 4: MISSING USABILITY GATES

These are defects a human reader would notice IMMEDIATELY that the gate runner cannot currently detect.

### 4A. Text Legibility (WCAG AA Contrast Ratios)

**What it is:** Text must have sufficient contrast against its background to be readable. WCAG 2.1 AA requires:
- Normal text (< 18px or < 14px bold): contrast ratio >= 4.5:1
- Large text (>= 18px or >= 14px bold): contrast ratio >= 3:1

**Why it's missing:** The gate runner has GR-05 (warm palette) and GR-07 (no pure B/W) which check the IDENTITY of colors but never check whether the TEXT IS READABLE against its background. A warm cream text on a slightly different warm cream background passes every existing gate while being completely illegible.

**Evidence from V3:** The page's primary diagram reportedly has illegible labels. No gate detected this. The labels presumably use warm, non-black colors on warm backgrounds -- passing GR-05 and GR-07 while failing the most basic usability test: can you read it?

**Priority: CRITICAL MISSING. This should be REQUIRED.**

---

### 4B. Minimum Font Size

**What it is:** Text below a certain size is unreadable for most users.

**Why it's missing:** The gate runner checks font FAMILY (GR-06), font SIZE variation (GR-45), and letter-spacing (GR-12), but never checks whether any text is too small to read. A 6px font in the correct family passes every gate.

**Thresholds:**
- Body text: >= 14px (preferably >= 16px)
- Caption/label text: >= 11px
- Any visible text: >= 10px

**Priority: HIGH MISSING. Should be RECOMMENDED.**

---

### 4C. Text Overflow / Truncation

**What it is:** Text that overflows its container, is clipped by `overflow: hidden`, or wraps in ways that make it unreadable.

**Why it's missing:** The gate runner checks container WIDTH (GR-03) and spacing (GR-13, GR-14, GR-15) but never checks whether text content fits inside its container. An element with `overflow: hidden` silently swallows half a sentence.

**Detection method:** Check for elements where `scrollWidth > clientWidth` or `scrollHeight > clientHeight` AND `overflow` is `hidden` or `clip`.

**Priority: HIGH MISSING. Should be RECOMMENDED.**

---

### 4D. Image/SVG Accessibility

**What it is:** Images and SVGs that lack alt text, are zero-sized, fail to load, or contain text too small to read.

**Why it's missing:** The gate runner checks for decorative elements (GR-08) but never checks whether images and SVGs are functional, loaded, and accessible.

**Priority: MEDIUM MISSING. Should be RECOMMENDED.**

---

### 4E. Interactive Element Usability

**What it is:** Links and buttons that are too small to click/tap (< 44x44px touch target), have no visible affordance, or have no hover/focus states.

**Why it's missing:** The gate runner checks :focus-visible existence (sub-check of GR-10) but never checks whether interactive elements are usable. A 10x10px link target passes every gate.

**Priority: MEDIUM MISSING. Should be ADVISORY.**

---

### 4F. Content Visibility

**What it is:** Elements that are present in the DOM but invisible due to `opacity: 0`, `visibility: hidden`, `display: none`, `color` matching background, `height: 0`, or being positioned off-screen.

**Why it's missing:** The `isRenderedElement()` helper filters out `display: none` and `visibility: hidden` elements, but only to EXCLUDE them from other checks. It never checks whether CONTENT-BEARING elements are invisible. An entire section with `opacity: 0` is invisible to the user but invisible to every gate too -- the gates just skip it.

**Priority: MEDIUM MISSING. Should be RECOMMENDED.**

---

### 4G. Scroll-Reveal / Animation-Gated Content

**What it is:** Content that requires scrolling or JavaScript animation triggers to become visible. If JS fails or animations are disabled, this content may never appear.

**Why it's missing:** The gate runner does not check for intersection-observer-based reveal patterns or CSS animation-gated visibility.

**Priority: LOW MISSING. Should be ADVISORY.**

---

### 4H. Empty Sections / Missing Content

**What it is:** Sections with headings but no meaningful content below them. A section that says "Key Arguments" followed by nothing.

**Why it's missing:** GR-08 checks for empty spacer divs but not for sections that SHOULD have content and don't.

**Priority: MEDIUM MISSING. Should be RECOMMENDED.**

---

## SECTION 5: TOP 3 MISSING GATES -- PLAYWRIGHT IMPLEMENTATION SKETCHES

### PROPOSED GATE: GR-60 — Text Contrast Legibility (REQUIRED)

```javascript
// GR-60: Text Contrast Legibility (WCAG AA)
// Checks that all visible text has sufficient contrast against its background.
const contrastCheck = await page.evaluate(() => {
  // Compute relative luminance per WCAG 2.1
  function relativeLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  function contrastRatio(l1, l2) {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function parseRGB(str) {
    const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
    return null;
  }

  // Get effective background color by walking up the DOM tree
  function getEffectiveBg(el) {
    let current = el;
    while (current && current !== document.documentElement) {
      const bg = getComputedStyle(current).backgroundColor;
      const rgb = parseRGB(bg);
      if (rgb) {
        // Check if it's transparent (alpha = 0)
        const alphaMatch = bg.match(/rgba\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);
        if (alphaMatch && parseFloat(alphaMatch[1]) < 0.1) {
          current = current.parentElement;
          continue;
        }
        if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') {
          current = current.parentElement;
          continue;
        }
        return rgb;
      }
      current = current.parentElement;
    }
    return { r: 255, g: 255, b: 255 }; // default white
  }

  const failures = [];
  const checked = { total: 0, passed: 0, failed: 0 };

  // Check all elements with visible text
  const textElements = document.querySelectorAll(
    'p, span, a, li, h1, h2, h3, h4, h5, h6, td, th, label, ' +
    'figcaption, blockquote, cite, dt, dd, summary, caption, ' +
    'text, tspan' // SVG text elements
  );

  textElements.forEach(el => {
    // Skip invisible elements
    if (!window.isRenderedElement(el)) return;
    const text = el.textContent.trim();
    if (text.length === 0) return;

    checked.total++;

    const style = getComputedStyle(el);
    const fgRGB = parseRGB(style.color);
    if (!fgRGB) return;

    const bgRGB = getEffectiveBg(el);
    if (!bgRGB) return;

    const fgLum = relativeLuminance(fgRGB.r, fgRGB.g, fgRGB.b);
    const bgLum = relativeLuminance(bgRGB.r, bgRGB.g, bgRGB.b);
    const ratio = contrastRatio(fgLum, bgLum);

    const fontSize = parseFloat(style.fontSize);
    const fontWeight = parseInt(style.fontWeight) || 400;
    const isLargeText = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
    const minRatio = isLargeText ? 3.0 : 4.5;

    if (ratio < minRatio) {
      checked.failed++;
      failures.push({
        tag: el.tagName,
        class: el.className.toString().substring(0, 50),
        text: text.substring(0, 40),
        fgColor: style.color,
        bgColor: `rgb(${bgRGB.r}, ${bgRGB.g}, ${bgRGB.b})`,
        ratio: ratio.toFixed(2),
        required: minRatio,
        fontSize: fontSize + 'px',
        isLargeText
      });
    } else {
      checked.passed++;
    }
  });

  return {
    checked,
    failures: failures.length,
    samples: failures.slice(0, 10),
    pass: failures.length === 0
  };
});

// Result:
// {
//   gate: 'GR-60', name: 'Text Contrast Legibility (WCAG AA)',
//   status: contrastCheck.pass ? 'PASS' : 'FAIL',
//   measured: contrastCheck,
//   threshold: { normalText: '4.5:1', largeText: '3.0:1', standard: 'WCAG 2.1 AA' }
// }
```

**Edge cases handled:**
- Walks up the DOM tree for effective background color (handles transparent parent layers)
- Checks SVG `<text>` and `<tspan>` elements (catches diagram label illegibility)
- Applies different thresholds for large text (18px+ or 14px+ bold)
- Skips invisible/empty elements
- Handles `rgba` with alpha < 0.1 as transparent

**What it would have caught in V3:** If the diagram labels had low contrast against their background, this gate would have detected it as the highest-priority failure.

---

### PROPOSED GATE: GR-61 — Minimum Font Size (RECOMMENDED)

```javascript
// GR-61: Minimum Font Size
// Checks that all visible text meets minimum readable size thresholds.
const fontSizeCheck = await page.evaluate(() => {
  const violations = [];
  const MIN_BODY = 14; // minimum for body/paragraph text
  const MIN_CAPTION = 11; // minimum for captions, labels, small text
  const MIN_ABSOLUTE = 10; // absolute minimum for ANY visible text

  const bodyElements = 'p, li, blockquote, td, th, dd, dt';
  const captionElements = 'figcaption, caption, small, .caption, .label, .footnote, sup, sub';

  // Check body text elements
  document.querySelectorAll(bodyElements).forEach(el => {
    if (!window.isRenderedElement(el)) return;
    if (el.textContent.trim().length === 0) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs < MIN_BODY) {
      violations.push({
        tag: el.tagName, class: el.className.toString().substring(0, 50),
        text: el.textContent.trim().substring(0, 40),
        fontSize: fs + 'px', threshold: MIN_BODY + 'px',
        severity: fs < MIN_ABSOLUTE ? 'CRITICAL' : 'WARNING'
      });
    }
  });

  // Check caption/label elements
  document.querySelectorAll(captionElements).forEach(el => {
    if (!window.isRenderedElement(el)) return;
    if (el.textContent.trim().length === 0) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs < MIN_CAPTION) {
      violations.push({
        tag: el.tagName, class: el.className.toString().substring(0, 50),
        text: el.textContent.trim().substring(0, 40),
        fontSize: fs + 'px', threshold: MIN_CAPTION + 'px',
        severity: fs < MIN_ABSOLUTE ? 'CRITICAL' : 'WARNING'
      });
    }
  });

  // Check SVG text (common source of tiny text in diagrams)
  document.querySelectorAll('text, tspan').forEach(el => {
    const text = el.textContent.trim();
    if (text.length === 0) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    // SVG text is often in user units — check computed px
    if (fs > 0 && fs < MIN_ABSOLUTE) {
      violations.push({
        tag: el.tagName, class: el.className?.baseVal || '',
        text: text.substring(0, 40),
        fontSize: fs + 'px', threshold: MIN_ABSOLUTE + 'px',
        severity: 'CRITICAL',
        note: 'SVG text element'
      });
    }
  });

  // Check ALL remaining visible text elements as absolute floor
  document.querySelectorAll('span, a, div, label, summary').forEach(el => {
    if (!window.isRenderedElement(el)) return;
    // Only check direct text nodes (not children)
    const hasDirectText = [...el.childNodes].some(n =>
      n.nodeType === 3 && n.textContent.trim().length > 0
    );
    if (!hasDirectText) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs < MIN_ABSOLUTE) {
      violations.push({
        tag: el.tagName, class: el.className.toString().substring(0, 50),
        text: el.textContent.trim().substring(0, 40),
        fontSize: fs + 'px', threshold: MIN_ABSOLUTE + 'px',
        severity: 'CRITICAL'
      });
    }
  });

  const critical = violations.filter(v => v.severity === 'CRITICAL');
  return {
    violations: violations.length,
    critical: critical.length,
    samples: violations.slice(0, 10),
    pass: critical.length === 0 // PASS if no text below absolute minimum
  };
});

// Result:
// {
//   gate: 'GR-61', name: 'Minimum Font Size',
//   status: fontSizeCheck.pass ? 'PASS' : 'FAIL',
//   measured: fontSizeCheck,
//   threshold: { bodyText: '14px', captionText: '11px', absoluteMin: '10px' }
// }
```

**Edge cases handled:**
- Different thresholds for body text vs caption text vs absolute minimum
- SVG `<text>` elements checked separately (diagram labels)
- Direct text nodes checked (not just element text content)
- CRITICAL vs WARNING severity to distinguish "probably too small" from "definitely unreadable"

---

### PROPOSED GATE: GR-62 — Text Overflow / Clipping Detection (RECOMMENDED)

```javascript
// GR-62: Text Overflow / Clipping Detection
// Checks for text content that overflows its container and is clipped.
const overflowCheck = await page.evaluate(() => {
  const clipped = [];
  const overflowing = [];

  document.querySelectorAll('*').forEach(el => {
    if (!window.isRenderedElement(el)) return;
    const text = el.textContent.trim();
    if (text.length === 0) return;

    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();

    // Check for horizontal overflow with hidden/clip
    if (el.scrollWidth > el.clientWidth + 2) { // 2px tolerance for subpixel
      const overflow = style.overflowX || style.overflow;
      if (overflow === 'hidden' || overflow === 'clip') {
        const clippedAmount = el.scrollWidth - el.clientWidth;
        if (clippedAmount > 10) { // more than 10px clipped = probably cutting text
          clipped.push({
            tag: el.tagName,
            class: el.className.toString().substring(0, 50),
            text: text.substring(0, 60),
            containerWidth: Math.round(el.clientWidth) + 'px',
            contentWidth: Math.round(el.scrollWidth) + 'px',
            clippedPx: Math.round(clippedAmount) + 'px',
            overflow: overflow,
            type: 'horizontal-clip'
          });
        }
      }
    }

    // Check for vertical overflow with hidden/clip
    if (el.scrollHeight > el.clientHeight + 2) {
      const overflow = style.overflowY || style.overflow;
      if (overflow === 'hidden' || overflow === 'clip') {
        const clippedAmount = el.scrollHeight - el.clientHeight;
        // Only flag if significant content is hidden (> 1 line height)
        const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.5;
        if (clippedAmount > lineHeight) {
          clipped.push({
            tag: el.tagName,
            class: el.className.toString().substring(0, 50),
            text: text.substring(0, 60),
            containerHeight: Math.round(el.clientHeight) + 'px',
            contentHeight: Math.round(el.scrollHeight) + 'px',
            clippedPx: Math.round(clippedAmount) + 'px',
            linesHidden: Math.round(clippedAmount / lineHeight),
            overflow: overflow,
            type: 'vertical-clip'
          });
        }
      }
    }

    // Check for text-overflow: ellipsis (content is being truncated)
    if (style.textOverflow === 'ellipsis' && el.scrollWidth > el.clientWidth + 2) {
      overflowing.push({
        tag: el.tagName,
        class: el.className.toString().substring(0, 50),
        text: text.substring(0, 60),
        containerWidth: Math.round(el.clientWidth) + 'px',
        contentWidth: Math.round(el.scrollWidth) + 'px',
        type: 'ellipsis-truncation'
      });
    }

    // Check for off-screen content (negative positioning hiding text)
    if (rect.right < 0 || rect.bottom < 0 ||
        rect.left > window.innerWidth || rect.top > document.documentElement.scrollHeight) {
      // Skip if it's a skip-link (intentionally off-screen until focused)
      if (!el.classList.contains('skip-link') && !el.closest('.skip-link') &&
          !el.matches('[class*="skip"]')) {
        overflowing.push({
          tag: el.tagName,
          class: el.className.toString().substring(0, 50),
          text: text.substring(0, 60),
          position: `top:${Math.round(rect.top)} left:${Math.round(rect.left)}`,
          type: 'off-screen'
        });
      }
    }
  });

  return {
    clipped: clipped.length,
    overflowing: overflowing.length,
    clippedSamples: clipped.slice(0, 10),
    overflowingSamples: overflowing.slice(0, 5),
    pass: clipped.length === 0
  };
});

// Result:
// {
//   gate: 'GR-62', name: 'Text Overflow / Clipping',
//   status: overflowCheck.pass ? 'PASS' : 'FAIL',
//   measured: overflowCheck,
//   threshold: { clippedElements: 0, tolerance: '10px horizontal, 1 line height vertical' }
// }
```

**Edge cases handled:**
- Subpixel tolerance (2px) to avoid false positives from rounding
- Separate horizontal and vertical clipping detection
- Vertical clipping threshold is content-aware (uses line-height, not arbitrary px)
- Skip-links excluded from off-screen check (intentionally positioned off-screen)
- `text-overflow: ellipsis` detected as truncation (may be intentional but should be flagged)
- Reports estimated hidden lines for vertical clipping

---

## SECTION 6: PRIORITY-CORRECTED GATE MANIFEST

### Reclassified Gates

| Gate | Current Tier | New Tier | Reason |
|------|-------------|----------|--------|
| **GR-05** | REQUIRED | SPLIT: GR-05a REQUIRED / GR-05b ADVISORY | Sub-perceptual tints (opacity < 0.3) should not block builds |
| **GR-06** | REQUIRED | REQUIRED (modified) | Check RENDERED font, not declared fallback stack |
| **GR-07** | REQUIRED | RECOMMENDED | Pure black (#000) vs warm dark (#1a1a1a) is sub-perceptual at body text sizes. Browser defaults on non-text elements should not block builds. |
| **GR-12** | REQUIRED | RECOMMENDED | Entire monitored range (0-0.4px) is sub-perceptual. Merge concern into GR-18. |
| **GR-19** | RECOMMENDED | ADVISORY | Checks builder INTENT (gaming), not visual output |
| **GR-43** | REQUIRED | RECOMMENDED | Invisible HTML comment should not block builds |

### New Gates

| Gate | Tier | Name | Justification |
|------|------|------|---------------|
| **GR-60** | REQUIRED | Text Contrast Legibility (WCAG AA) | THE most basic usability requirement. A page you cannot read is worthless regardless of warm palette compliance. |
| **GR-61** | RECOMMENDED | Minimum Font Size | Text below 10px is unreadable. SVG diagram labels are a known failure point. |
| **GR-62** | RECOMMENDED | Text Overflow / Clipping | Hidden content is a usability failure invisible to current gates. |
| **GR-63** | ADVISORY | Image/SVG Load Verification | Check that `<img>` elements loaded (naturalWidth > 0) and SVGs rendered. |
| **GR-64** | ADVISORY | Touch Target Size | Interactive elements >= 44x44px (WCAG 2.5.5) |

### New Tier Distribution

| Tier | Current Count | New Count | Change |
|------|--------------|-----------|--------|
| **REQUIRED** | 18 | 18 | +1 (GR-60), -1 (GR-07 downgraded), -1 (GR-12 downgraded), -1 (GR-43 downgraded), +1 (GR-05 split keeps required half) |
| **RECOMMENDED** | 8 | 13 | +3 (GR-07, GR-12, GR-43 downgraded), +2 (GR-61, GR-62 new) |
| **ADVISORY** | 5 | 8 | +1 (GR-05b split), +1 (GR-19 downgraded), +2 (GR-63, GR-64 new), -1 (GR-19 was RECOMMENDED) |

### Complete New Manifest

**REQUIRED (18 gates) -- ANY FAIL blocks build:**
```
GR-01  Border Radius Zero
GR-02  Box Shadow None
GR-03  Container Width 940-960px
GR-04  No Gradients
GR-05a Warm Palette (visible colors, opacity >= 0.3)    [MODIFIED]
GR-06  Font Trinity (rendered font check)                [MODIFIED]
GR-08  No Decorative Elements
GR-09  Border Weight Hierarchy
GR-10  Cross-Page DNA Properties
GR-11  Background Delta >= 15 RGB
GR-13  Stacked Gap <= 120px (CSS)
GR-14  Total Visual Gap <= 150px
GR-15  Single Margin <= 96px
GR-44  Trailing Whitespace Void
GR-48  Gate Coverage Completeness
GR-60  Text Contrast Legibility (WCAG AA)                [NEW]
```

**RECOMMENDED (13 gates) -- 3+ FAIL = REBUILD:**
```
GR-07  No Pure Black / White                             [DOWNGRADED from REQUIRED]
GR-12  Letter Spacing >= 0.025em                         [DOWNGRADED from REQUIRED]
GR-17  Density Stacking
GR-18  Ghost Mechanisms
GR-20  Structural Echo
GR-43  Self-Evaluation Comment                           [DOWNGRADED from REQUIRED]
GR-45  Typography Variation
GR-49  Result File Integrity
GR-51  Background Delta Distribution
GR-52  Section Height Variation
GR-61  Minimum Font Size                                 [NEW]
GR-62  Text Overflow / Clipping                          [NEW]
```

**ADVISORY (8 gates) -- Informational only:**
```
GR-05b Warm Palette (sub-perceptual tints, opacity < 0.3) [NEW SPLIT]
GR-19  Threshold Gaming                                   [DOWNGRADED from RECOMMENDED]
GR-21  Cognitive Overload (Bg Proxy)
GR-22  Color Zone Conflict (Red Role)
GR-46  Print Stylesheet
GR-50  Conviction Statement
GR-53  Density Arc Direction
GR-63  Image/SVG Load Verification                        [NEW]
GR-64  Touch Target Size                                   [NEW]
```

---

## SECTION 7: KEY FINDINGS SUMMARY

### The Fundamental Inversion

The gate runner was designed by and for the design system pipeline, which values IDENTITY PRESERVATION above all else. The tier system reflects this: brand compliance (warm palette, font trinity, no pure black) is REQUIRED; human readability is ABSENT.

The result is a verification system that:
1. **REQUIRES** that `rgba(124, 58, 237, 0.04)` -- a 4% opacity purple tint -- must be replaced with a warm equivalent. No human can see this.
2. **REQUIRES** that `rgb(0,0,0)` on the `<html>` element (overridden by all visible text styles) must be changed. No human encounters this color.
3. **REQUIRES** that fallback fonts in positions 2-4 of the font stack must be removed, even though the primary fonts load successfully. No human sees the fallback fonts.
4. **DOES NOT CHECK** whether text on the page is readable. The single most fundamental quality a web page can have.

### The Fix Is Simple

Add GR-60 (Text Contrast Legibility) as REQUIRED. This one gate would catch more real usability defects than GR-05, GR-06, and GR-07 combined. The implementation is 60 lines of JavaScript using the WCAG luminance formula -- a well-established, well-tested standard.

### Impact on V3 Results

The V3 page currently has 8 gate failures. Under the corrected manifest:
- **GR-05 FAIL** would likely become GR-05b ADVISORY (the violations were 4-6% opacity tints)
- **GR-06 FAIL** would likely PASS (if the rendered fonts are correct, which they are)
- **GR-07 FAIL** would become RECOMMENDED (not blocking)
- **GR-09 FAIL** stays REQUIRED (sub-pixel border widths are a legitimate rendering concern)
- **GR-14 FAIL** stays REQUIRED (though the false positive from nested sections needs a selector fix)
- **GR-17 FAIL** stays RECOMMENDED
- **GR-21 FAIL** stays ADVISORY
- **GR-22 FAIL** stays ADVISORY
- **NEW: GR-60** would check text legibility (result unknown -- depends on actual contrast ratios)
- **NEW: GR-61** would check font sizes (result unknown -- depends on diagram label sizes)

The corrected manifest would reduce the V3 identity gate failures from 4 to 1 (GR-09), while adding checks for the most user-facing defects the current system misses entirely.

---

*End of audit. File: `ephemeral/pages/V3-Yegge-Gas-Town/phase2-screenshots/gate-usability-audit.md`*

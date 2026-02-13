# Convention Extraction from AD Perceptual Audits

**Source files:** 6 AUDIT-REPORTs, 6 fix-reports, FIX-VERIFICATION-REPORT, plus findings files from all 6 AD pages
**Extraction date:** 2026-02-11
**Scope:** Every convention established, reinforced, or discovered during the AD perceptual audit and fix process

---

## CONVENTION INDEX

| # | Convention | Status | Pages Affected | Category |
|---|-----------|--------|----------------|----------|
| C-01 | Content width: 1100px max-width | NEW | 6/6 | Width |
| C-02 | Visual page ending (footer/bookend) | NEW | 6/6 | Visual Ending |
| C-03 | Dead space elimination (inter-section tightening) | NEW | 6/6 | Spacing |
| C-04 | 3px Cat 1 structural border on footer | NEW | 6/6 | Visual Ending |
| C-05 | Responsive padding reduction at 768px | NEW | 6/6 | Responsive |
| C-06 | Soul compliance: 0 violations across all fixes | REINFORCED | 6/6 | Soul |
| C-07 | Token-only CSS values in all fixes | REINFORCED | 6/6 | Soul |
| C-08 | 960px early collapse for 4+-column grids | NEW | 1/6 (AD-006) | Responsive |
| C-09 | Scroll-reveal defensive CSS (opacity/transform/visibility !important) | NEW | 1/6 (AD-006) | Defensive CSS |
| C-10 | Code wrap in narrow containers (pre-wrap + word-wrap) | NEW | 1/6 (AD-003) | Defensive CSS |
| C-11 | Breathing zone ceiling (~15-25%, not unlimited) | NEW | 6/6 | Spacing |
| C-12 | Tension meter labeling ("Narrative tension: X / 5") | NEW | 1/6 (AD-002) | Component |
| C-13 | Compact interstitial transition markers | NEW | 1/6 (AD-005) | Component |
| C-14 | Warm neutral palette cohesion (0 violations) | REINFORCED | 6/6 | Palette |
| C-15 | Typography trio compliance (0 violations) | REINFORCED | 6/6 | Typography |
| C-16 | Dark header + red bottom border | REINFORCED | 6/6 | Header |
| C-17 | Callout family DNA (2-zone, 4px left border) | REINFORCED | 6/6 | Component |
| C-18 | Essence/CoreAbstraction serif italic | REINFORCED | 6/6 | Component |
| C-19 | Dark code blocks (#1A1A1A bg) | REINFORCED | 6/6 | Component |
| C-20 | p { max-width: 70ch } line-length constraint | REINFORCED | 6/6 | Typography |
| C-21 | Q&A PULSE rhythm (question=inhale, answer=exhale) | REINFORCED | 1/6 (AD-001) | Rhythm |
| C-22 | Page personality: "Scholarly, Deliberate, Warm" | REINFORCED | 6/6 | Identity |
| C-23 | Footer mirrors header design language | NEW | 6/6 | Visual Ending |
| C-24 | No navigation hijack / scroll-triggered page changes | REINFORCED | 1/6 (AD-001) | Defensive |
| C-25 | Responsive collapse at 768px for 2-3 column grids | REINFORCED | 6/6 | Responsive |
| C-26 | Cross-page family DNA (sibling resemblance) | REINFORCED | 6/6 | Identity |
| C-27 | WAVE density oscillation (sparse-dense-breathe) | REINFORCED | 2/6 (AD-005, AD-006) | Rhythm |

---

## DETAILED CONVENTION DESCRIPTIONS

---

### C-01: Content Width Standard — 860px to 1100px

**Binary rule:** All `.page-container` and `.header-inner` elements MUST use `max-width: 1100px` (not 860px).

**Discovery:** AD-001 through AD-006 audit reports ALL flagged that 860px left ~40% of a 1440px viewport as unused cream margins. Beta (AD-003): "For a page demonstrating bento grid layouts, this narrow tube undermines the content's own message." Alpha (AD-001): "Content column occupies roughly sixty percent of the viewport width."

**Pages affected:** 6/6 — every AD page had this fix applied.

**CSS pattern:**
```css
.header-inner { max-width: 1100px; margin: 0 auto; }
.page-container { max-width: 1100px; margin: 0 auto; }
/* Also applies to: .act-zone, .breathing-zone__inner, .page-footer__inner,
   .axis-transition__inner, .spoke-content__inner, etc. */
```

**Rationale:** 1100px uses ~76% of a 1440px viewport (vs ~60% at 860px). The `p { max-width: 70ch }` rule (C-20) still constrains prose for readability. Grid layouts benefit from the wider container.

**Status:** NEW — discovered during AD audit, applied uniformly across all 6 pages.

**Verification:** FIX-VERIFICATION-REPORT confirms all 6 pages pass width check at 1100px.

---

### C-02: Visual Page Ending Required

**Binary rule:** Every AD page MUST end with a visual terminus element. The page MUST NOT trail off into empty cream space.

**Discovery:** Flagged on ALL 6 pages. Two-auditor concordance on AD-001 (LW-01: "~1,800px empty tail"), AD-002 (F-001: "~3,700px void"), AD-003 (WNS-1: "4,000-6,000px dead space"), AD-004 (LW-4: "page just stops... TWICE"), AD-005 (LW-3: FAIL verdict), AD-006 (MF-004: "no visual closure"). This was the single most consistently flagged finding across all 6 audits.

**Pages affected:** 6/6

**CSS pattern:**
```css
.page-footer {
  border-top: 3px solid var(--color-border); /* Cat 1 structural */
  padding: var(--space-8) 0;
  max-width: 1100px;
  margin: 0 auto;
}
.page-footer__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**HTML pattern (varies by page):**
```html
<!-- After </main> -->
<footer class="page-footer">
  <div class="page-footer__inner">
    <span>AD-00X . [Axis Name]</span>
    <span>v1 enriched</span>
  </div>
</footer>
```

**Variations by page:**
- AD-001: Simple two-span footer (identifier + version)
- AD-002: Dark footer matching header (left/center/right with 48px red rule)
- AD-003: Centered 64px horizontal rule + "AD-003 BENTO GRID" label
- AD-004: Centered label "End of Exploration AD-004 -- Spiral Axis -- Bedrock to Atmosphere"
- AD-005: Italic serif "End of Exploration AD-005" with 80px red rule
- AD-006: Full dark bookend mirroring header (title + subtitle in mono)

**Status:** NEW — this convention did not exist before the AD audit. Every page lacked a footer.

---

### C-03: Dead Space Elimination

**Binary rule:** No viewport-sized voids between sections. Inter-section spacing MUST NOT exceed one-third of a viewport height (~300px at 900px viewport). The page MUST NOT contain blank cream space exceeding the height of the adjacent content section.

**Discovery:** Flagged on ALL 6 pages as the #1 or #2 finding. AD-001: "cavernous dead space" (Alpha), "~1,800px empty tail" (Beta). AD-002: "3,700px blank void" (F-001 CRITICAL). AD-003: "4,000-6,000px catastrophic dead space" (WNS-1). AD-004: "approximately FOUR consecutive screens of nothing" (Beta CRITICAL). AD-005: "MASSIVE dead zones ~2 viewport heights" (3-auditor concordance). AD-006: "multiple full-viewport blanks" (5/5 UNANIMOUS).

**Pages affected:** 6/6

**Fix patterns applied:**
- Chapter divider height reduced (e.g., `--space-12` to `--space-8`)
- Chapter divider margins reduced (e.g., `--space-12` to `--space-8`)
- Section padding reduced (e.g., `--space-20` to `--space-16`, or `--space-12` to `--space-8`)
- Breathing zone heights reduced (e.g., `--space-20` to `--space-12`)
- Hidden duplicate sections removed (AD-003 had a `display: none` RAR section outside `</main>`)
- Closing statement padding tightened

**Net reduction:** ~300-1,600px per page depending on original dead space severity.

**Status:** NEW — dead space was universal before AD audit. Fixes tightened vertical rhythm across all 6 pages.

---

### C-04: Footer Border — 3px Cat 1 Structural

**Binary rule:** Footer elements MUST use `border-top: 3px solid var(--color-border)` or `border-top: 3px solid var(--color-primary)`. NEVER 2px (violates border-weight hierarchy). NEVER 1px (too subtle for a structural terminus).

**Discovery:** Derived from fix execution across all 6 pages. The 3px border echoes the header's 3px red bottom border, creating a bookend frame. AD-006 fix report: "Top border matching header's bottom border (3px solid var(--color-primary))."

**Pages affected:** 6/6

**CSS pattern:**
```css
/* Option A: Using border color (neutral) */
border-top: 3px solid var(--color-border);

/* Option B: Using primary color (red, matching header) */
border-top: 3px solid var(--color-primary);
```

**Status:** NEW — established during fix execution as the standard footer border.

---

### C-05: Responsive Padding Reduction at 768px

**Binary rule:** At `@media (max-width: 768px)`, reduce `.header-inner` padding to `var(--space-8) var(--space-4)` (or `var(--space-12) var(--space-6)`) and `.page-container` padding to `var(--space-8) var(--space-4)`. Footer stacks vertically with centered text.

**Discovery:** Multiple audit findings flagged cramped content at 768px. AD-001 LW-04: "overview grid cards feel squeezed." AD-002 F-005: "columns should likely collapse to a single column at this breakpoint." AD-004 WNS-1/LW-5: "text clipping at 768px." AD-005 LW-2: "page renders identically at 1440px, 1024px, and 768px."

**Pages affected:** 6/6 — all had responsive padding improvements added.

**CSS pattern:**
```css
@media (max-width: 768px) {
  .header-inner {
    padding: var(--space-8) var(--space-4); /* ~32px 16px */
  }
  .page-container {
    padding: var(--space-8) var(--space-4); /* ~32px 16px */
  }
  .page-footer__inner {
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);
  }
  /* Tables: reduce font-size and cell padding */
  table { font-size: var(--type-code); }
  /* Essence pullquote: reduce from section-size to subsection-size */
}
```

**Status:** NEW — most pages had no or minimal 768px responsive rules before the audit.

---

### C-06: Soul Compliance — Zero Violations Across All Fixes

**Binary rule:** ALL fixes MUST introduce ZERO soul violations. Check these 7 rules before committing:
1. `border-radius: 0` on ALL elements (no rounding)
2. `box-shadow: none` on ALL elements (no shadows)
3. `filter: drop-shadow()` NEVER used
4. No 2px structural borders (use 3px Cat 1 or 1px Cat 2/3)
5. `opacity === 1.0` (no rgba < 1.0)
6. Font trio ONLY: Instrument Serif / Inter / JetBrains Mono
7. All colors from locked palette tokens

**Discovery:** Every audit report checked soul compliance. Every fix report verified zero violations introduced. FIX-VERIFICATION-REPORT: "ZERO violations across all 6 files (no border-radius, no box-shadow, no drop-shadow in source)."

**Pages affected:** 6/6

**Status:** REINFORCED — this was already a locked convention. The AD audit validated it across all 6 pages with zero violations detected by 2-4 independent auditors per page.

---

### C-07: Token-Only CSS Values

**Binary rule:** ALL new CSS values MUST reference CSS custom properties from the locked layer. No hardcoded hex colors, pixel values, or font names.

**Discovery:** Every fix report explicitly verified token compliance. AD-001 fix: "All new values reference CSS custom properties from locked layer." AD-003 fix: "page-end uses --color-border (#E0D5C5)." AD-005 fix: "All new spacing uses var(--space-*) tokens."

**Pages affected:** 6/6

**CSS pattern (correct):**
```css
/* YES - token references */
padding: var(--space-8) 0;
color: var(--color-text-secondary);
font-family: var(--font-mono);

/* NO - hardcoded values */
padding: 32px 0;
color: #666;
font-family: 'JetBrains Mono';
```

**Status:** REINFORCED — already a convention, now validated across 6 fix cycles.

---

### C-08: 960px Early Collapse for Complex Grids

**Binary rule:** Grids with 4+ columns MUST collapse to single-column at `max-width: 960px` (not 768px). Simpler 2-3 column grids collapse at 768px as before.

**Discovery:** AD-006 audit escalation MF-002 (5/5 UNANIMOUS, WOULD-NOT-SHIP): "Bento grid text collapses to single-character-per-line vertical stacking at viewports below ~960px. The LOCKED 768px responsive collapse fires 130+ units too late." Two LOCKED decisions conflicted: S12.5 (768px collapse) vs AD-F-009 (bento cells must be readable).

**Pages affected:** 1/6 directly (AD-006), but POTENTIALLY SYSTEMIC for any page with 4+-column grids.

**CSS pattern:**
```css
@media (max-width: 960px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
  .bento-item--featured {
    grid-column: span 1;
  }
  .bento-item--featured::after {
    display: none;
  }
  .choreo-layout {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
  .spiral-layout {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }
}
```

**Status:** NEW — established during AD-006 fix to resolve a LOCKED convention conflict. Represents a pattern-specific override to the universal 768px rule.

---

### C-09: Scroll-Reveal Defensive CSS

**Binary rule:** All section content MUST be visible by default. Scroll-reveal animations are PROGRESSIVE ENHANCEMENT only. If JS fails, content MUST remain visible.

**Discovery:** AD-006 audit escalation MF-001 (5/5 UNANIMOUS, WOULD-NOT-SHIP): "40-60% of page content renders as blank when scroll-triggered animations fail to fire." The LOCKED convention S15.3 said "content in DOM regardless" but the implementation hid content via CSS opacity:0/translateY. The fix resolved this by overriding with defensive CSS.

**Pages affected:** 1/6 directly (AD-006), but the principle applies to ANY page using scroll-reveal.

**CSS pattern:**
```css
/* Defensive override — ensures content visible regardless of JS/external CSS */
.axis-section,
.axis-section > *,
.axis-section .page-container,
.axis-section .page-container > * {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}
```

**Rationale:** `!important` is justified as a defensive override against unknown external scroll-reveal code. Content is visible by default; JS adds hidden state that scroll-reveal then removes.

**Status:** NEW — established during AD-006 fix. The audit escalated this to a lock-interpretation question: "Does 'content in DOM regardless' require content to be VISIBLE regardless of JS?"

---

### C-10: Code Wrap in Narrow Containers

**Binary rule:** Code blocks inside narrow containers (bento cells, sidebar cards) MUST use `white-space: pre-wrap; word-wrap: break-word;` instead of relying solely on `overflow-x: auto`.

**Discovery:** AD-003 audit LW-1 (two-auditor concordance): "Code is truncated horizontally -- you can see `grid-template-colu` cut off mid-word. Code that you can't read completely is worse than no code at all."

**Pages affected:** 1/6 directly (AD-003), but applies to ANY page with code blocks in narrow containers.

**CSS pattern:**
```css
.bento-cell pre,
.bento-cell--1x1 pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
```

**Status:** NEW — discovered when code blocks inside narrow bento cells were cut off.

---

### C-11: Breathing Zone Ceiling

**Binary rule:** Breathing zones (inter-section whitespace) MUST be >= 15% of page height (floor, from existing convention) but MUST NOT exceed ~25% (ceiling). No single breathing zone should exceed 300px.

**Discovery:** ALL 6 audits flagged EXCESSIVE breathing as a problem. AD-006 adversarial Challenge 4: "Breathing zone budget >= 15%... Actual breathing may be 30-40%+ due to dead space accumulation." AD-004 Alpha: "more than half the viewport is empty warm cream." AD-005 Auditor A: "MASSIVE dead zones ~2 viewport heights."

**Pages affected:** 6/6

**Fix patterns:**
- Divider heights: `--space-12` (48px) -> `--space-8` (32px)
- Divider margins: `--space-12` each side -> `--space-8` each side
- Section padding: `--space-20` (80px) -> `--space-16` (64px) or `--space-12` (48px)
- Breathing zone heights: `--space-20` (80px) -> `--space-12` (48px)

**Status:** NEW — the existing convention had a floor (15% minimum) but no ceiling. The AD audit established that a ceiling is needed to prevent "is the page broken?" experiences.

---

### C-12: Tension Meter Labeling

**Binary rule:** The five-segment tension bar below ACT headings in AD-002 MUST include a visible label showing "Narrative tension: X / 5".

**Discovery:** AD-002 audit F-002 (two-auditor concordance): "Both auditors independently describe it as looking like a 'broken loading indicator' (Alpha) or 'dashboard widget dropped into an editorial layout' (Beta)."

**Pages affected:** 1/6 (AD-002 only)

**CSS pattern:**
```css
.tension-meter__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
```

**Status:** NEW — AD-002-specific component convention.

---

### C-13: Compact Interstitial Transition Markers

**Binary rule:** In AD-005, transitions between spokes MUST have labeled interstitials. Major transitions use diagonal clip-path; minor transitions use compact interstitials with 3px structural borders and centered uppercase labels.

**Discovery:** AD-005 audit LW-4: "2 interstitials where the choreographic logic suggests 4-5. For a page about choreography, inconsistently applied transitions are a structural irony."

**Pages affected:** 1/6 (AD-005 only)

**CSS pattern:**
```css
.axis-interstitial {
  background: var(--axis-zone-transition);
  border-top: 3px solid var(--color-border);
  border-bottom: 3px solid var(--color-border);
  text-align: center;
  text-transform: uppercase;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  letter-spacing: 0.1em;
  padding: var(--space-6) var(--space-4);
}
```

**Transition hierarchy after fix:**
- Major transitions: Diagonal clip-path (existing)
- Minor transitions: Compact interstitials (NEW)
- Total: 5 transitions (2 diagonal + 3 compact) + 1 closing footer

**Status:** NEW — AD-005-specific convention establishing a 2-tier transition hierarchy.

---

### C-14: Warm Neutral Palette Cohesion

**Binary rule:** ALL colors on the page MUST belong to the warm cream/tan/charcoal family. No cool grays, no blue-blacks, no cool-toned neutrals. The entire palette sits in the warm spectrum.

**Discovery:** Independently confirmed by EVERY auditor across ALL 6 pages with zero violations. AD-001 Beta PA-18: "All the neutrals feel warm and cohesive... I did not detect any cool-toned outlier." AD-003: "Warm Neutral Palette Cohesion — zero palette violations." AD-004: "every neutral, every background, every border lives in the same warm cream/tan family." AD-006 Auditor A: "No jarring cool gray anywhere."

**Pages affected:** 6/6

**Status:** REINFORCED — already a locked convention. The AD audit provides the strongest validation yet: 12+ independent auditors across 6 pages found ZERO temperature violations.

---

### C-15: Typography Trio Compliance

**Binary rule:** ONLY three fonts: Instrument Serif (display/headings/questions/Essence), Inter (body/answers), JetBrains Mono (code/meta/labels). No fourth typeface permitted.

**Discovery:** Confirmed by every auditor on every page. AD-001 Alpha: "serif/sans-serif pairing is consistently applied and clearly intentional." AD-004: "Display serif, body sans, mono for meta/code — consistent." The ONLY finding was AD-001 LW-03 where the metadata card's monospace voice felt like "a terminal dump" — but JetBrains Mono IS in the locked trio, so this was a design concern, not a violation.

**Pages affected:** 6/6

**Status:** REINFORCED — zero violations detected across all audits.

---

### C-16: Dark Header Convention

**Binary rule:** Every page MUST have a dark full-bleed header with `background: var(--color-text)` (#1A1A1A), cream text, and `border-bottom: 3px solid var(--color-primary)` (#E83025 red).

**Discovery:** Unanimously praised across ALL 6 audits as the strongest visual element. AD-001: "commanding" (Alpha), "immediate authority and personality" (Beta). AD-003: "real presence and gravitas" (Beta). AD-004: "Clean, authoritative, well-proportioned" (Alpha). AD-006: 4/4 auditors praise "The Convergence" title typography.

**Pages affected:** 6/6

**Status:** REINFORCED — already locked, now validated as the single most-praised element across the entire audit corpus.

---

### C-17: Callout Family DNA

**Binary rule:** All callouts MUST use the 2-zone structure: colored 4px left border + uppercase label + body content. Differentiation ONLY by border/label color. Five locked accent colors: blue (Context), green (Tip/Discovery), coral (Gotcha/Caution), amber (Caution), purple (Essence).

**Discovery:** Confirmed consistent on every page. AD-001 Beta: "left-border color coding creates useful differentiation." AD-002: "Colored left border + label pattern consistent." AD-005 Auditor D: "blue for context, amber for caution, green for tips, purple for essence." AD-006: "Purple (Essence), Blue (Context), Green (Discovery), Orange (Caution/Gotcha) is coherent and learnable."

**Pages affected:** 6/6

**Status:** REINFORCED — zero structural violations detected.

---

### C-18: Essence/CoreAbstraction Serif Italic

**Binary rule:** Essence callout body text MUST use italic Instrument Serif. This is the "editorial whisper" voice.

**Discovery:** Confirmed on every page where Essence callouts appear. AD-001 Alpha: "Essence callouts in italic serif with purple left border add an editorial voice." AD-004 Alpha: "purple italic serif" in sidebar. AD-005: confirmed by Auditors A and D.

**Pages affected:** 6/6

**Status:** REINFORCED

---

### C-19: Dark Code Blocks

**Binary rule:** Code blocks MUST use `background: #1A1A1A` (or `var(--color-text)`) with syntax highlighting. This is a LOCKED convention — the contrast with the warm page is acknowledged and accepted per Decision Note #5.

**Discovery:** Every auditor noted the stark contrast between dark code blocks and warm cream page. AD-001 CBB-01: "The high-contrast transition from cream body to dark code blocks is jarring." However, this is explicitly LOCKED per AD-CONV S3 and Decision Note #5 (all 6 fresh-eyes auditors flagged this previously). The convention persists as a documented trade-off.

**Pages affected:** 6/6

**Status:** REINFORCED — flagged perceptually but maintained as a locked decision with documented rationale.

---

### C-20: Prose Line-Length Constraint

**Binary rule:** Body paragraphs MUST be constrained to `max-width: 70ch` regardless of container width.

**Discovery:** This rule is what makes C-01 (1100px container width) safe. Without it, wider containers would create uncomfortably long lines. AD-001 fix report: "The p { max-width: 70ch } rule still constrains prose paragraphs for readability." AD-005 fix report: "1100px provides comfortable reading width at 1440px viewport while still maintaining line-length constraints through the existing p { max-width: 70ch } rule."

**Pages affected:** 6/6

**Status:** REINFORCED — already existed, validated as the safety net that enables the width expansion.

---

### C-21: Q&A PULSE Rhythm

**Binary rule:** In AD-001, questions MUST be narrow (~60% width, serif, red left border) and answers MUST be full-width (gray card, sans-serif). This creates the PULSE pattern: question = inhale (sparse), answer = exhale (dense).

**Discovery:** AD-001 two-auditor concordance. Alpha: "the Q&A alternation creates a rhythm... micro-level Z works well." Beta PA-17: "Q&A PULSE rhythm (question=inhale/sparse, answer=exhale/dense) is perceptible as a visual beat." Beta: "one of the strongest aspects of the design."

**Pages affected:** 1/6 (AD-001), but the Q&A pattern may appear on other pages.

**Status:** REINFORCED — the audit confirmed the PULSE rhythm is not just structural but perceptually felt.

---

### C-22: Page Personality — "Scholarly, Deliberate, Warm"

**Binary rule:** The page personality MUST read as "Scholarly, Deliberate, Warm" at 1440px. At 768px, it MUST NOT degrade to "Cramped" or "Unfinished."

**Discovery:** AD-001 Beta PA-20: "Scholarly. Deliberate. Warm." AD-004: "genuinely strong typographic presence... scholarly character." AD-005: "unhurried, architectural, confident." AD-006 at 1440px: "Scholarly, Deliberate, Warm" — ALIGNED. AD-006 at 768px: "Scholarly, Cramped, Unfinished" — MISALIGNED (this drove the responsive fixes).

**Pages affected:** 6/6

**Status:** REINFORCED — independently confirmed by multiple auditors. The personality degradation at 768px drove responsive convention fixes (C-05, C-08).

---

### C-23: Footer Mirrors Header Design Language

**Binary rule:** Footer elements MUST echo the header's design language: same border weight (3px), same color family (primary red or border neutral), same typography tokens (mono for labels, serif for titles).

**Discovery:** Established across all 6 fix reports. AD-001: "footer identifier echoes the header meta-line, creating bookend framing." AD-002: "dark footer matching header... 3px red border echoes header's bottom border." AD-005: "red rule echoes the header's 3px red bottom border." AD-006: "mirrors the opening header band."

**Pages affected:** 6/6

**Status:** NEW — no footers existed before the AD audit. The header-mirroring principle emerged consistently across all 6 independent fix agents.

---

### C-24: No Scroll-Triggered Navigation

**Binary rule:** JavaScript MUST NOT automatically navigate the browser to other pages based on scroll position. Scroll events MUST NOT trigger `window.location` or `history.pushState` to other URLs.

**Discovery:** AD-001 audit WNS-01 (Alpha CRITICAL): "JavaScript automatically navigates the browser to OTHER exploration pages (AD-003, AD-005, AD-006) when the user scrolls past certain positions." Investigation revealed this was likely a Playwright contention artifact (Beta's browser was navigated by another agent), but the principle stands: scroll-triggered navigation hijack is ALWAYS WOULD-NOT-SHIP severity.

**Pages affected:** 1/6 (AD-001 investigation), but the rule is universal.

**Status:** REINFORCED — the investigation concluded it was a contention artifact, not actual page behavior. But the audit established the binary rule that such behavior would be a ship-blocker.

---

### C-25: Responsive Collapse at 768px for Simple Grids

**Binary rule:** All 2-3 column grids MUST collapse to single-column at `max-width: 768px`. (For 4+-column grids, see C-08 which triggers at 960px.)

**Discovery:** Flagged on multiple pages. AD-001 LW-04: "overview grid does not collapse at 768px." AD-003 WNS-2: "Grid does NOT collapse at 768px — VIOLATION OF LOCKED DECISION." AD-004 WNS-1: "media query max-width: 768px means collapse happens BELOW 768, not AT 768." AD-005 LW-2: "the page renders identically at 1440px, 1024px, and 768px."

**Pages affected:** 6/6

**Status:** REINFORCED — already locked (AD-CONV S12.5). The audit discovered implementation gaps (several pages failed to collapse) and fixes corrected them.

---

### C-26: Cross-Page Family DNA

**Binary rule:** All 6 AD pages MUST share recognizable sibling resemblance: same header convention, same callout vocabulary, same color family, same typography trio, same soul rules.

**Discovery:** AD-005 Auditor D PA-24: "AD-005, AD-006, AD-003 share core visual DNA; differences are content-appropriate." AD-006: "Strong sibling resemblance with AD-001 and AD-003." AD-004: "Feels like a single, intentional design voice."

**Pages affected:** 6/6

**Status:** REINFORCED — the audit confirmed that despite different axis patterns, all pages read as siblings of the same design family.

---

### C-27: WAVE Density Oscillation

**Binary rule:** Pages using the Choreography or Compound axis MUST exhibit the SPARSE-DENSE-BREATHE oscillation pattern. Each spoke section follows: breadcrumb > text > code/table > callout. Transition zones function as bar lines.

**Discovery:** AD-005 Auditor C PA-17: "one of the strongest visual rhythms I have seen. The WAVE density oscillation is not just described -- it is embodied in the page structure." AD-006 spatial analysis confirms the same three-part internal rhythm: label, body, callout.

**Pages affected:** 2/6 (AD-005, AD-006), but the rhythm principle informs all pages.

**Status:** REINFORCED — the audit validated that the WAVE density oscillation is perceptually real, not just structural.

---

## FONT LOADING CONVENTION (Operational, from auditor methodology)

**Binary rule:** When checking computed fonts programmatically, ALWAYS await `document.fonts.ready` before measuring. Without this, fallback fonts report incorrectly and produce false positive audit findings.

**Discovery:** AD-001 audit — Alpha's "Essence font" finding was a false positive caused by font-loading timing. OD fix execution confirmed: "`document.fonts.ready` is CRITICAL before checking computed font."

**Pages affected:** Operational (affects audit methodology, not page CSS)

**Status:** REINFORCED from OD phase. The AD audit did not produce new font-loading false positives because auditors were warned.

---

## SUMMARY STATISTICS

| Category | NEW | REINFORCED | Total |
|----------|-----|------------|-------|
| Width | 1 | 0 | 1 |
| Spacing | 2 | 0 | 2 |
| Visual Ending | 3 | 0 | 3 |
| Responsive | 2 | 1 | 3 |
| Defensive CSS | 2 | 0 | 2 |
| Soul | 0 | 2 | 2 |
| Component | 2 | 3 | 5 |
| Typography | 0 | 2 | 2 |
| Palette | 0 | 1 | 1 |
| Rhythm | 0 | 2 | 2 |
| Identity | 0 | 2 | 2 |
| Header | 0 | 1 | 1 |
| Defensive | 0 | 1 | 1 |
| **TOTAL** | **12** | **15** | **27** |

**12 NEW conventions** were discovered during the AD perceptual audit process.
**15 existing conventions** were REINFORCED with multi-auditor validation across 6 pages.

---

## HIGHEST-IMPACT CONVENTIONS FOR CD AGENTS

The following 5 conventions have the highest impact for CD (Convention Documentation) agents because they were flagged on ALL 6 pages and represent the most consistent audit findings:

1. **C-01 (1100px width)** — Universal, applied to all 6 pages
2. **C-02 (Visual page ending)** — Universal, the single most consistent finding
3. **C-03 (Dead space elimination)** — Universal, highest severity across all audits
4. **C-06 (Soul compliance)** — Universal, zero violations is the standard
5. **C-23 (Footer mirrors header)** — Universal, emerged independently from 6 parallel fix agents

These 5 conventions should be treated as LOCKED for any future AD page construction.

# PA Auditor H Report: Soul + Identity Compliance (PA-43 through PA-46)

**Auditor:** PA Auditor H (Fresh Eyes, Zero Prior Context)
**Date:** 2026-02-18
**Sources:** lock-sheet.md, computed-styles-data.md, prohibitions.md, all 1440px screenshots, 768px fullpage

---

## PA-43: Soul Constraint Adherence

**Question:** Does the page FEEL like it follows the soul? Sharp edges, flat surfaces, editorial confidence? Or does it feel soft, decorative, or template-like? Does it feel like it belongs to THIS design system?

**Verdict: MIXED -- Header YES, Body NO**

**What follows the soul:**
- The header/hero area (1440-viewport-top.png) is genuinely excellent. Dark warm background (#1A1A1A region), Instrument Serif display heading at large scale, red accent subtitle in uppercase tracking, crisp horizontal red divider. This opening frame communicates editorial confidence, print heritage, and sharp authority. Zero rounded corners visible. Zero shadows. Zero gradients. The header alone could belong to a premium literary magazine.
- The section indicators ("SECTION 01 - F-PATTERN - SPARSE DENSITY") use uppercase tracked lettering that reads as editorial metadata -- confident and precise.
- The S2 blockquote with 4px red left border on a warm background is a strong soul moment: Instrument Serif italic, sharp edges, flat color, visible border accent.
- All callouts visible in the fullpage have sharp corners and flat, colored left-border accents -- soul-correct.

**What violates the soul IN FEEL (not in CSS rules):**
- The DOMINANT experience of this page is emptiness, not editorial confidence. Of the ~15 scroll-position screenshots I examined, approximately 10 showed COMPLETELY BLANK warm cream expanses with zero visible content. This is not "breathing room" -- this is abandonment. The soul of this design system is editorial: every element carries semantic weight, information density over decoration. A page that is 60-70% blank cream contradicts the soul at the deepest level.
- Where content IS visible (S1 body text, S3 density section, the table in S2-quote.png), the text sits in a near-uniform warm field with minimal visual differentiation between sections. The "sharp edges, flat surfaces" soul principles are technically met, but there is almost nothing TO have sharp edges. The soul constraint says "flat = print heritage, honest." But print heritage means DENSE, AUTHORITATIVE layouts with deliberate use of white space -- not vast expanses of nothing.
- The page does NOT feel template-like (it has character in its typography), but it does feel UNFINISHED, as if content rendering failed to load for most sections.

**Score: 2/4** -- Soul constraints are technically satisfied where content exists, but the experiential soul (editorial confidence, information density) is severely undermined by the void-dominant layout.

---

## PA-44: Identity Expression

**Question:** Does the page express the design system's identity -- editorial, confident, warm, precise? Or does it feel generic? Can you identify what makes this page distinctly "ours"?

**Verdict: PARTIAL IDENTITY -- Top 20% is distinctive, remaining 80% is absence**

**Distinctive identity markers I can identify:**
1. **Instrument Serif headings** -- The h2 headings visible ("What the Research Set Out to Find", "Why Great Documentation Breathes", "The Choreography of Reading") use a distinctive serif face at confident scale. This IS identity-bearing.
2. **Section indicator system** -- The "SECTION 01 - F-PATTERN - SPARSE DENSITY" metadata labels in small uppercase tracking are a distinctive editorial convention. They feel like magazine section markers. This is "ours."
3. **The warm cream palette** -- The background warmth (#FEF5EB range) is distinctly NOT the cold gray of generic documentation. It says "editorial, not technical."
4. **Red accent color** -- The KortAI red (#E83025) in the header subtitle and the blockquote border is a clear identity marker.
5. **Horizontal dividers between sections** -- The 1px warm-tone dividers serve as section breaks similar to print publication conventions.
6. **The blockquote treatment** -- Instrument Serif italic with 4px red left border on a warm background is a confident, identity-specific pattern.
7. **Table headers** -- The dark header row with uppercase tracked column names reads as editorial/confident.
8. **The info callout** (visible in S2-quote area, "DENSITY RHYTHM" label on blue-tinted background) -- uses the left-border accent pattern.

**What feels GENERIC:**
- The body text paragraphs, where visible, are competent Inter text on cream. Without the section indicators and serif headings, these paragraphs could belong to any warm-toned editorial site. The body text does not feel distinctly "ours" -- it feels "not bad."
- The vast empty sections feel like NO design system -- they feel like a rendering failure.

**What makes this page distinctly "ours":**
The combination of (1) Instrument Serif display type, (2) red-accented section metadata, (3) warm-not-hot background palette, (4) sharp-cornered callouts with colored left borders, and (5) horizontal-only table rules with dark headers. These five elements together create a recognizable identity. But they are present in perhaps 20-30% of the visible page area. The remaining 70-80% is undifferentiated cream.

**Score: 2/4** -- The identity elements that DO exist are strong and distinctive. But identity requires EXPRESSION, and expression requires content to carry it. The page has identity vocabulary but has not deployed it across the full page.

---

## PA-45: Prohibition Compliance (Visual)

**Question:** Looking at screenshots, can you spot ANY visual violations? Border-radius? Box-shadow? Gradients? Pure black/white? Cool grays? List anything suspicious.

**Verdict: MOSTLY CLEAN with minor concerns**

**Systematic scan of visible elements:**

### Border-radius (Prohibition #1 -- ABSOLUTE, zero exceptions)
- Header area: All edges sharp. PASS.
- Section containers: All edges sharp. PASS.
- Blockquote container: Sharp corners. PASS.
- Callout containers: Sharp corners. PASS.
- Table: Sharp corners. PASS.
- All elements in 768px fullpage: Sharp corners. PASS.
- **ZERO border-radius violations detected.**

### Box-shadow (Prohibition #2 -- ABSOLUTE)
- No visible shadow effects on any element in any screenshot.
- Computed styles data confirms: 0 box-shadow violations.
- **ZERO box-shadow violations detected.**

### Gradients (Prohibition #5 -- ABSOLUTE)
- No visible gradients in any screenshot.
- Backgrounds are all solid flat colors.
- Computed styles data confirms: 0 gradient violations.
- **ZERO gradient violations detected.**

### Pure Black/White (Prohibition #6 -- ABSOLUTE)
- Header text appears near-black but warm, consistent with #1A1A1A. PASS.
- Dark header/code backgrounds appear to be #1A1A1A or #1E1E1E, not #000000. PASS.
- The blockquote container background and table header background are warm-tinted, not pure white or pure gray. PASS.
- Page backgrounds are all warm cream (confirmed warm in computed-styles-data.md). PASS.
- **No pure black/white violations detected visually.**

### Cool Grays (Prohibition #16)
- Computed styles data shows all 12 zone backgrounds are WARM-tinted. Previously-cool values (#FAFAFA, #F8F8F8, #F0F0F0) were reportedly fixed to warm equivalents.
- Visually, all backgrounds read as warm cream/beige, not cool/clinical.
- **No cool gray violations detected visually.**

### 2px Borders (Prohibition #9 -- conditional)
- No 2px borders visible in any screenshot.
- Callout borders are 4px (confirmed in computed styles).
- **No 2px border violations detected.**

### Hover lift / transforms (Prohibition #14)
- Cannot fully assess from static screenshots, but no visible hover states showing lift effects.

### Vertical table borders (Prohibition #13)
- Table visible in S2-quote screenshot (density dimensions): horizontal rules only, no vertical cell borders. PASS.
- Computed data confirms: table borders are "0px none." PASS.

### h3 italic (Prohibition #17)
- Cannot fully confirm from screenshots alone (h3 subheadings not clearly visible at screenshot resolution). Computed data does not specifically report on h3 font-style. FLAGGED for cross-reference with Typography auditor.

### SUSPICIOUS ITEMS (not clear violations but warrant attention):
1. **The info callout** in the S2-quote area has a light blue-tinted background. The color appears to be in the allowed palette (#F5F8FA info semantic), but it is noticeably cooler than the surrounding warm zones. This is NOT a violation per the lock sheet (F5F8FA is explicitly allowed), but it creates a slight temperature discontinuity.
2. **Zero structural borders detected** (per computed-styles-data.md). The spec called for 6 zone-specific border-top rules, but none are present. This is not a PROHIBITION violation (nothing forbidden is present), but it IS a spec compliance gap that affects visual richness.

**Overall Prohibition Compliance: PASS (clean)**
No absolute prohibitions violated. No conditional prohibitions violated. Two non-prohibition concerns noted (info callout temperature, missing structural borders).

---

## PA-46: Design System Coherence

**Question:** Does the page feel like it was built FROM a design system, or does it feel like a one-off? Are patterns consistent across sections? Would another page in this system feel related?

**Verdict: PARTIALLY COHERENT -- System elements are consistent where present, but deployment is sparse**

**Evidence of systematic consistency:**
1. **Section indicator pattern** is used consistently across all visible sections ("SECTION 01", "SECTION 02", "SECTION 03" etc.) with identical formatting (uppercase, tracked, warm gray). This is a SYSTEM pattern, not a one-off choice.
2. **Typography hierarchy** is consistent: Instrument Serif for headings, Inter for body, across all visible sections. The heading sizes appear proportional and consistent.
3. **Callout component patterns** are consistent: 4px left border, warm-tinted backgrounds, role="note" semantics, matching the callout system in the design system (info, gotcha, tip, essence variants -- 9 total confirmed).
4. **Table presentation** follows a consistent convention: dark header with uppercase tracked labels, horizontal-only rules, clean data rows.
5. **Divider treatment** is consistent: 1px horizontal warm-tone rules between sections with consistent role="separator" semantics.
6. **Color temperature** is consistently warm across all zones (confirmed programmatically -- all 12 zones are warm).
7. **Container width** is locked at 960px (confirmed programmatically). This gives a consistent reading frame.

**Evidence AGAINST coherent system deployment:**
1. **Massive whitespace voids** between sections (6 of 11 gaps exceed 120px per computed data; many screenshots show entirely blank viewports). A coherent design system would produce consistent content density with intentional breathing rhythm, not alternating between content clusters and blank expanses.
2. **Zero structural borders** between zones. The spec called for 6 border-top rules to visually differentiate zone transitions. Their absence means zones flow into each other without visual demarcation -- the background color shifts are too subtle to perceive in many cases (S4 to S5: 2 RGB points difference; S9 to S10: 5 RGB points). Without borders, many zones look identical.
3. **Typography undervariation.** Only S1 has distinct typography (17px/1.85 with letter-spacing). Sections S4-S12 share nearly identical typography (16px, 1.7-1.75 line height, no letter-spacing). A design system with 12 distinct sections should show more typographic variation to signal zone changes.
4. **The lower half of the page is invisible in screenshots.** Screenshots for S5, S6, S7, S8, S9, S10, S11, S12 are almost entirely blank cream. If a fellow designer showed me just the bottom 60% of this page, I would say "this is not a finished page." A coherent system produces coherent output across its ENTIRE surface, not just the top.

**Would another page in this system feel related?**
YES -- if that other page used the same section indicators, heading fonts, callout patterns, and table conventions, it would be recognizably sibling to this page. The system vocabulary IS coherent. The problem is not that the vocabulary is broken -- it is that the vocabulary is not deployed to enough of the page surface.

**Analogy:** Imagine a house with excellent, consistent architectural detailing on the front porch and entryway -- matching trim, consistent window proportions, harmonious colors. But behind the entryway, 8 of the 12 rooms are empty with bare drywall. The system is coherent; the deployment is catastrophically incomplete.

**Score: 2/4** -- System vocabulary is internally consistent and would produce recognizable sibling pages. But system deployment covers only ~30% of the page surface, with the remaining ~70% being undifferentiated blank warm fields.

---

## Summary Verdicts

| PA Question | Score | Verdict |
|-------------|-------|---------|
| PA-43: Soul Constraint Adherence | 2/4 | Technical soul constraints PASS; experiential soul (editorial confidence, density) FAIL due to void dominance |
| PA-44: Identity Expression | 2/4 | Strong identity markers exist but are deployed to only ~20-30% of page surface |
| PA-45: Prohibition Compliance | PASS | Zero absolute prohibition violations; zero conditional violations; 2 non-violation concerns noted |
| PA-46: Design System Coherence | 2/4 | System vocabulary is internally consistent; deployment is ~30% coverage |

## Critical Finding

**The dominant problem is not prohibition violations -- it is ABSENCE.** The page passes every binary prohibition check (border-radius, box-shadow, gradients, palette, etc.) with perfect scores. What fails is the experiential dimension: the soul says "editorial confidence" and "information density over decoration," but the page is ~70% blank warm cream. Prohibition compliance is necessary but not sufficient for soul adherence. This page has technically correct CSS and catastrophically incomplete visual deployment.

**The header and S1-S3 cluster (first ~20% of scroll) achieves genuine soul expression at a level I would call "confident" or "editorially authoritative."** If the entire page maintained the density and visual variety of that opening cluster, this would score 3.5-4/4 across all four questions. The system is capable of producing identity-rich output. It simply has not done so for the remaining 80% of the scroll.

**Root cause hypothesis:** Content exists in the HTML (12 sections, 9 callouts, 9 tables, 3 grids per computed data), but is not visually rendering in the screenshot captures at the scroll positions used. Either (a) the content is concentrated into narrow bands between vast padding/margin gaps, or (b) some CSS is hiding content, or (c) the screenshot scroll positions happen to fall between content clusters. Given the computed-styles gap data (6 of 11 gaps exceed 120px, with S4-S5 at 175px), option (a) seems most likely. The content EXISTS but is separated by excessive vertical space.

---

**END PA Auditor H Report**

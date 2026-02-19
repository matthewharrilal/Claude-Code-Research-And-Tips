# PA Auditor E: Spatial + Structural (PA-25 to PA-30)

**Date:** 2026-02-18
**Auditor:** Fresh-eyes Opus agent (zero prior context)
**Sources:** lock-sheet.md, computed-styles-data.md, all 1440/768/375 screenshots

---

## CRITICAL PREFACE: Catastrophic Content Visibility Failure

Before addressing the six PA questions individually, I must report the dominant finding that overshadows all spatial analysis:

**Of the 15 scroll-position screenshots at 1440px, at least 10 show COMPLETELY BLANK warm cream screens with ZERO visible content.** The screenshots labeled S5-chars, S6-whitespace, S7-tensions, S7-resolutions, S8-structure, S8-sequences, S9-findings, S11-hypotheses, S4-table (nearly blank), and S5-table all render as uniform warm cream rectangles with no text, no components, no tables, no callouts -- nothing.

This means the page has a **catastrophic content-to-whitespace ratio problem.** The page is extremely long (14,000+ pixels at 1440px based on the full-page image dimensions), but the vast majority of that length appears to be empty space between narrow bands of content that cling to the top ~25% of the scroll. The full-page screenshot confirms this: visible content (text, tables, callouts, code blocks) clusters in thin horizontal bands separated by enormous stretches of near-blank warm cream.

This is the single most important spatial finding and it affects every question below.

---

## PA-25: Margin Consistency

**Verdict: MIXED -- Consistent within the visible-content bands, but CATASTROPHICALLY inconsistent at the macro level**

**What works:**
- Within sections that DO show content (S1, S2 quote, S3 top), the left/right margins are balanced. Content is centered within the 960px container, with consistent left alignment of body text at roughly the same inset.
- The section indicators ("SECTION 02 - FOCAL - SPARSE DENSITY") maintain consistent left alignment with body text.
- The callout visible in the S2 area (Essence quote with red left border) is correctly inset within the container with balanced side margins.
- Tables are full-width within the container, creating clean edge-to-edge alignment.

**What fails:**
- The macro-level margin pattern is broken. According to computed-styles-data.md, 6 of 11 section gaps exceed 120px, with the worst being S4->S5 at 175px. But what the screenshots actually show is FAR worse than the numbers suggest. The blank screenshots imply that content within many sections is either: (a) collapsed/hidden, (b) pushed far below the section boundary, or (c) the sections themselves are enormously padded with very little internal content.
- At the full-page 1440px view, you can see that the page's lower half (below roughly the 40% mark) has increasingly sparse content bands separated by growing voids of uniform cream. This creates a "draining hourglass" effect where the page starts with reasonable density and then progressively empties out.

**Score: 2/4** -- Internal consistency is good where content exists; macro consistency is broken.

---

## PA-26: Padding Variation

**Verdict: FAIL -- Padding variation is imperceptible perceptually, despite being specified**

**Evidence from computed-styles-data.md:**
- S1 (warm zone): Body 17px, LH 1.85, letter-spacing 0.02em
- S4 (cool zone): Body 16px, LH 1.7, letter-spacing normal
- S9-S12 (resolved zones): Body 16px, LH 1.75, letter-spacing normal

The SPECIFICATION called for varying padding between zone groups, and the computed data shows some typography variation exists (S1 is slightly different). But:

1. **S9 and S12 are IDENTICAL** to each other and nearly identical to S4. The spec called for S9-S12 to use 15px/1.65, but the builder applied 16px/1.75 -- making them perceptually indistinguishable from the S4 zone.
2. The backgrounds vary in hue (warm cream palette) but the RGB deltas are so small (S4->S5: only 2 RGB points; S9->S10: only 5 RGB points) that zone transitions are invisible to the eye.
3. **ZERO structural borders** exist (computed-styles-data confirms this). The spec called for 6 zone-boundary border-top rules. None are present. Without borders, without perceptible background shifts, and without padding variation, zones MERGE into a single uniform stream.

The net perceptual effect is that the page feels like one continuous zone with the same padding everywhere. Section S2 (the blockquote/quote) is the only section with perceptibly different internal spacing because the quote itself uses larger serif type with generous padding around it.

**Score: 1/4** -- Almost zero perceptible padding variation between zones.

---

## PA-27: Grid Usage

**Verdict: PARTIAL PASS -- Grids exist structurally but are visually INVISIBLE in most screenshots**

**What the computed-styles-data confirms:**
- 3 `.tension-pair` grid instances (present)
- 1 `.sequence-grid` instance (present)
- 1 `.hypothesis-grid` instance (present)

**What the screenshots show:**
- The full-page 1440px screenshot shows the 768px full-page view on the right where grids appear to collapse to single-column (expected for responsive).
- At 1440px, the grids should create multi-column layouts, but the 10 blank scroll screenshots make it impossible to confirm that grids render as multi-column visually. The content-bearing screenshots (S1, S2-quote, S3-density) show single-column text and tables -- no visible grid in those frames.
- The 768px full-page screenshot shows what appears to be tables and callouts in a single-column flow, which is correct for tablet width. But at 1440px where multi-column grids should shine, the scroll screenshots where those grids should appear (S7-tensions, S9-findings, S11-hypotheses) are BLANK.

The grids likely exist in the DOM (confirmed by computed data) but their visual contribution to the page is impossible to assess because the screenshot positions where they would appear show only empty cream. This could mean:
- The grids render but are pushed outside the captured scroll position
- The grids are collapsed or have zero height
- The grids are present but surrounded by such vast whitespace that they don't appear at the expected scroll offsets

**Score: 2/4** -- Structural presence confirmed, visual impact unverifiable and likely poor.

---

## PA-28: Alignment Systems

**Verdict: PASS -- Where content is visible, alignment is clean and consistent**

This is the strongest spatial dimension of the page.

**Evidence:**
- In S1 (body text), S2 (quote area), and S3 (density section), all text aligns to a clear left edge within the 960px container. The container itself is centered on the page.
- The section indicators ("SECTION 02 - FOCAL - SPARSE DENSITY") align left, flush with body text. The monospace uppercase treatment creates a clear typographic landmark.
- Tables span the full container width with consistent column alignment. The dimension table in S2 (Spatial/Temporal/Depth/Semantic/Cognitive/Interaction) shows clean two-column alignment with header row distinct from body rows.
- The blockquote in S2 is properly indented with a left border, creating a sub-level alignment that communicates hierarchy.
- Horizontal dividers (visible as thin lines at section boundaries in S1->S2 and S2->S3) span the full container width, reinforcing the column alignment.
- At 768px, content reflows cleanly to a narrower column with consistent alignment.
- At 375px, content appears to maintain alignment with appropriate margins for mobile.

**No jarring misalignment detected anywhere.** The alignment system is working correctly. The problem is not alignment -- it is that there is so little visible content to align.

**Score: 3.5/4** -- Strong, consistent alignment where content exists.

---

## PA-29: Negative Space

**Verdict: CRITICAL FAIL -- Negative space is NOT used as a design element; it is the DOMINANT element consuming the page**

This is the most damning finding in my audit scope.

**The distinction between intentional negative space and empty void:**
- Intentional negative space creates breathing room AROUND content, directing the eye and creating visual weight through contrast with dense areas.
- What this page has is not negative space -- it is ABSENCE OF CONTENT. The blank cream stretches visible in 10 of 15 scroll screenshots are not "whitespace as design element." They are voids where content should be but is not.

**Specific observations:**

1. **The S2 blockquote area** demonstrates the ONE place where negative space works well. The generous padding around the Instrument Serif italic quote, the subtle background color shift, and the clean margins create a focal moment. The space around the quote feels intentional, allowing the typography to breathe. This is what good negative space looks like.

2. **The S4->S5 transition (175px gap)** is NOT intentional negative space. It is a dead zone. When you scroll past S4's last line of content, you encounter approximately 175 pixels of nothing before S5 begins. With no border, no background shift perceptible to the eye (only 2 RGB points), and no visual landmark, the space reads as "broken" or "incomplete" rather than "designed."

3. **The S7->S8 (148px), S8->S9 (150px), and S11->S12 (148px) gaps** repeat this pattern. The lock sheet defines the S-09 stacking rule as FAIL if >96px total gap. The computed data shows 6 of 11 gaps exceeding 120px. This is a spacing constraint violation that also reads as a design failure.

4. **At the full-page level:** The 1440px full-page screenshot (original 1024x14306 pixels) shows the page is approximately 14,300 pixels tall. The 768px full-page screenshot (500x19043) shows it even taller at mobile breakpoints. At 1440px, with an estimated ~14,300px total scroll, the content (text, tables, callouts, code blocks) appears to occupy roughly 3,000-4,000px of actual visual content, meaning **70-75% of the page is empty cream space.** This is catastrophic.

5. **The space between and around elements does NOT feel intentional.** It feels like sections were placed with mechanical spacing values (padding-top + margin-bottom) that compound into enormous gaps without anyone verifying the cumulative visual effect. The space has no weight, no compositional purpose, no rhythm.

**Score: 0.5/4** -- The S2 quote area demonstrates capability, but overall negative space usage is destructive to the page experience. The page is drowning in unintentional void.

---

## PA-30: Structural Hierarchy

**Verdict: PARTIAL PASS -- The skeleton is present but the body is emaciated**

**Identifiable structural elements:**

1. **Header:** Visible at the top of the 1440px full-page screenshot. Contains the page title in Instrument Serif with introductory body text. Clearly identifiable as the opening of the document.

2. **Section indicators:** The "SECTION 02 - FOCAL - SPARSE DENSITY" and "SECTION 03 - F-PATTERN - MEDIUM DENSITY" labels are visible in the scroll screenshots. These monospace, uppercase markers provide clear structural landmarks. 12 section indicators are confirmed present (computed-styles-data).

3. **Dividers:** Thin horizontal rules are visible between sections (S1->S2, S2->S3). These are role="separator" elements (11 confirmed). They provide visual punctuation between sections.

4. **Section progression:** The visible sections (S1 through S3) show a logical progression: introduction, focal quote, then density discussion. The structure is navigable where it exists.

5. **Footer:** The 768px full-page screenshot shows a dark-background footer at the very bottom of the page. This provides proper document termination.

6. **Dark code block zone:** Visible in the full-page screenshots as a dark band in the middle portion of the page. This creates the most dramatic structural contrast on the page -- a clear "designed moment" where the inverted color scheme breaks the warm cream monotony.

**Structural weaknesses:**

- **The skeleton is stretched too thin.** 12 sections across 14,000+ pixels means each section averages ~1,200px of vertical space, but many sections appear to contain only 200-400px of actual content. The structural skeleton is like a tent frame with no canvas -- the poles (section indicators, dividers) are there but nothing fills the space between them.
- **The middle and lower portions of the page lack structural landmarks.** The S5-S11 range, which represents roughly 50% of the page by scroll depth, produced blank screenshots. If a reader scrolls through this zone, they encounter cream with occasional thin bands of content but no strong structural markers to orient them.
- **No navigation mechanism** (e.g., sticky ToC, scroll indicators) helps the reader understand their position within this very long document.

**Score: 2.5/4** -- The structural elements exist and the skeleton is correctly built. But the excessive spacing between structural elements makes the hierarchy feel nominal rather than functional.

---

## SUMMARY TABLE

| Question | Topic | Score | Verdict |
|----------|-------|-------|---------|
| PA-25 | Margin Consistency | 2/4 | MIXED -- good internally, broken at macro level |
| PA-26 | Padding Variation | 1/4 | FAIL -- zones perceptually indistinguishable |
| PA-27 | Grid Usage | 2/4 | PARTIAL -- present structurally, visually unverifiable |
| PA-28 | Alignment Systems | 3.5/4 | PASS -- consistent, clean alignment throughout |
| PA-29 | Negative Space | 0.5/4 | CRITICAL FAIL -- 70-75% of page is empty void |
| PA-30 | Structural Hierarchy | 2.5/4 | PARTIAL -- skeleton present but overstretched |

**Aggregate: 11.5/24 (48%)**

---

## DOMINANT FINDING: The Whitespace Catastrophe Persists

The remediation was supposed to fix the whitespace void problem that plagued the original flagship experiment (where 70-80% of the scroll was blank cream). Based on this audit:

**The whitespace void problem has NOT been fixed.** The numbers changed slightly (6 gaps exceed 120px vs the original's 210-276px voids), but the perceptual experience is nearly identical: a reader scrolling this page will encounter vast stretches of warm cream nothingness.

The root cause appears to be:
1. **Sections contain very little content** relative to their allocated vertical space
2. **Padding/margin stacking** compounds to create gaps well above the 96px S-09 threshold
3. **Zero structural borders** means zone transitions are invisible
4. **Background deltas too small** (S4->S5: 2 RGB, S9->S10: 5 RGB) to signal zone changes
5. **Typography undervariation** means sections that SHOULD feel different (warm vs cool vs resolved) feel identical

The spatial and structural framework is CORRECTLY built (alignment, section indicators, dividers, grids in DOM). The problem is that this framework is deployed across a page that is 3-4x longer than its content warrants, creating an experience that is more void than substance.

---

## RECOMMENDATION

**DO NOT SHIP in current state.** The spatial issues are severe enough to undermine all other remediation gains. Specific fixes needed:

1. **Reduce section padding** to bring total gap under 96px at every boundary (per S-09)
2. **Activate the 6 missing zone border-top rules** (CSS selector mismatch must be fixed)
3. **Increase background deltas** for S4->S5 and S9->S10 to meet the >=10 RGB threshold
4. **Implement typography differentiation** for S9-S12 (15px/1.65 as spec'd, not 16px/1.75)
5. **Consider reducing total page length by 30-40%** through tighter section pacing

# PA Auditor A Report — Cold Look + Overall Composition (PA-01 through PA-06)

**Auditor:** Fresh-eyes Opus agent (zero prior context)
**Date:** 2026-02-18
**Screenshots reviewed:** 1440-fullpage.png, 1440-viewport-top.png, 768-fullpage.png, 375-fullpage.png
**Data reviewed:** lock-sheet.md, computed-styles-data.md

---

## RAW FIRST IMPRESSION (recorded before analysis)

The page reads as a long-form editorial article on a warm cream ground. The header is strong -- dark background, red accent text, serif title. Below that, the page becomes a long, gentle scroll of cream-on-cream body text. Sections are present but don't announce themselves loudly; backgrounds shift by tiny degrees. Callouts appear as left-bordered boxes but don't dramatically interrupt the flow. The dark code blocks in the lower third provide the strongest visual contrast on the entire page and are genuinely effective. The page feels *warm and competent* but also *under-articulated* -- it's closer to a nicely typeset blog post than a deliberately composed documentation artifact. The monotony of the upper two-thirds is the dominant sensation.

---

## PA-01: First Impression

**Answer:** The page feels **designed but restrained to the point of under-expression**. It does not feel default or accidental -- there are clearly intentional choices (the dark header, the serif/sans-serif pairing, the warm palette, the red drop cap). But those intentional choices are concentrated at the top and in a few scattered moments, while the vast middle of the page coasts on similar-looking cream backgrounds and uniform body text.

**Evidence:**
- The header region (dark bg, serif title, red label, subtitle) is strong and confident -- this is clearly designed.
- The section indicators ("SECTION 01 - F-PATTERN - SPARSE DENSITY") are a nice navigational device.
- The callouts have consistent left-border accents with semantically appropriate colors (red for gotcha, green for tip, amber for essence).
- The dark code blocks (approximately 60-75% down the page) provide genuine contrast.
- But: between the header and those code blocks, there are long stretches where sections look nearly identical -- same font size, same weight, same line-height, on backgrounds that differ by single-digit RGB values.

**Visual Confidence Score: 3 / 5**
It's above-average but not commanding. A viewer would say "this is a nice article" but not "this was carefully designed."

---

## PA-02: Visual Hierarchy

**Answer:** The primary hierarchy (title > section headings > body) is clear at the macro level but **collapses at the meso level**. You can tell what the page is about (the header says so loudly), and you can identify section starts by their h2 headings. But within sections, the hierarchy between body text, table content, callouts, and sub-points is weak.

**Evidence:**
- **Most important (clear):** The dark header with the page title in large Instrument Serif. This reads instantly and correctly as the page's identity.
- **Second most important (adequate):** Section h2 headings in serif. These are visible but their size advantage over body text is modest (computed data shows 30px vs 17px in S1, but 28px vs 16px in later sections -- the ratio shrinks).
- **Third most important (weak):** This is where hierarchy collapses. Tables, callouts, body paragraphs, and block quotes all sit at roughly the same visual weight. The callouts have colored left borders, which helps, but their internal text is the same size and weight as surrounding paragraphs. Tables lack visible borders entirely (computed: 0px none), making them blend into the text flow.
- **Competing focal points:** No severe competition, but the *lack* of secondary focal points is itself a problem -- nothing between the header and the code blocks creates a "stop and look at this" moment.

**Issues:**
- Tables with zero visible borders become near-invisible data structures -- a reader could scroll past them without realizing they contain structured information.
- The h3 headings (italic serif at 24px) should be a strong intermediate level but they don't stand out enough from the h2s and body text in the screenshots, especially in the middle sections where everything is 16px body.

---

## PA-03: Spatial Rhythm

**Answer:** The page has a **discernible but inconsistent rhythm**. The alternating section backgrounds create a faint pulse, and the divider elements between sections provide structural beats. But several gaps are too large (up to 175px between S4 and S5), and the upper sections feel like they breathe too loosely while content density is higher in the lower sections with grids and code blocks.

**Evidence:**
- **Positive rhythm:** Sections are separated by divider elements, creating regular structural beats. The section indicator labels provide a consistent "here comes a new section" signal. The alternating warm backgrounds (cream/slightly-darker-cream) give a faint zebra effect.
- **Excessive breathing:** 6 of 11 section gaps exceed 120px (per computed data). The largest is S4-S5 at 175px. At 1440px, these gaps create noticeable pauses in the scroll that feel *empty* rather than *restful*. They are not catastrophic voids (nothing like the 210-276px voids mentioned in the lock sheet's concern range), but 175px of near-blank cream is pushing it.
- **Density shift:** The top sections (S1-S5) are primarily body text with modest callouts. Sections S6-S8 introduce grids and code blocks, creating a noticeably denser visual texture. S9-S12 return to body text. This creates an uneven experience: sparse-dense-sparse.
- **At 768px:** The rhythm tightens naturally as content fills more of the width. The gaps feel proportionally less empty. The page actually reads better at tablet width.
- **At 375px:** Content is stacked single-column. The rhythm is fine -- mobile naturally eliminates the horizontal emptiness concern.

**Issues:**
- S4-S5 gap (175px) is the single worst spatial moment. It feels like a paragraph break that grew too large.
- The first third of the page at 1440px feels under-populated -- long paragraphs of body text with generous line-height on a wide reading column. It's comfortable but monotonous.

---

## PA-04: Typography

**Answer:** Typography is **intentional at the extremes but undifferentiated in the middle**. The serif/sans-serif pairing is correct and well-chosen. The header uses Instrument Serif at display size with confidence. The drop cap in S1 is a nice touch. But from S4 onward, virtually all body text converges to 16px/1.7-1.75 Inter with no letter-spacing variation, making sections typographically interchangeable.

**Evidence:**
- **Positive:** The Instrument Serif + Inter pairing works well. The display heading in the dark header is well-proportioned. The red drop cap ("F") at the start of S1 is an effective editorial device. Section indicators use small-caps tracking which provides a distinct typographic voice.
- **S1 has distinct typography:** 17px body, 1.85 line-height, 0.02em letter-spacing. This gives S1 a slightly more spacious, editorial feel. It reads like the "opening chapter" of the page.
- **S4-S12 collapse:** These sections all use 16px, line-height between 1.7-1.75, with no letter-spacing. The data confirms S9 and S12 are typographically IDENTICAL. The spec apparently called for S9-S12 to use 15px/1.65 (a tighter, "resolved" voice) but the builder used 16px/1.75 instead. This means the page loses its typographic arc -- the shift from "expansive exploration" to "tight resolution" never happens.
- **h2 size regression:** S1 h2 is 30px, but later sections use 28px. This is a 2px difference, which per the lock-sheet threshold is technically the minimum acceptable, but it's not perceptually strong.
- **Callout text:** Uses the same body font at the same size. No typographic distinction for callout content.

**Typographic Richness Score: 2.5 / 5**
There are two typographic "voices" (display serif and body sans-serif), and one special treatment (the drop cap). But the body voice is essentially one setting repeated across 10 sections with no meaningful variation. The page doesn't use typography to *shape the reading experience* -- it uses it to be readable, which is necessary but not sufficient for DESIGNED.

**Issues:**
- S9-S12 should be typographically distinct (the "resolved" voice) but are identical to S4-S8.
- Tables have no typographic treatment (no smaller size, no different weight for headers vs cells in the screenshots).
- Callout body text is visually identical to paragraph body text.

---

## PA-05: DESIGNED Score

**Score: 2.5 / 4 — STYLED-to-COMPOSED boundary**

This page is clearly above STYLED (2) because there are genuine design decisions that go beyond "apply a template":
- The dark header with integrated branding is intentional
- The warm palette is cohesive and system-consistent
- The drop cap is an editorial choice
- The callout color-coding is semantically meaningful
- The dark code blocks create real contrast
- The grid layouts (tension-pair, sequence-grid) show structural ambition

But it falls short of COMPOSED (3) because:
- **10 of 12 sections are typographically near-identical.** A composed page would use typography to differentiate the *character* of each section, not just its content.
- **Zone backgrounds are perceptibly indistinguishable in places.** S4-S5 differ by 2 RGB points. S9-S10 differ by 0-5 RGB points. These are mathematically different but visually identical. A composed page would make zone shifts *felt*, not just measured.
- **Zero structural borders** on any section. The spec called for 6 zone-specific border-top rules to articulate transitions. Their absence makes sections bleed into each other through the divider elements rather than standing as distinct zones.
- **Tables are invisible.** With 0px borders, tables blend into body text. You need to squint to realize you're looking at structured data vs paragraphs.
- **The page has one visual "move" (dark header) and one visual "accent" (code blocks) and then 80% of the scroll is warm cream body text.** COMPOSED requires designed moments throughout.

**Specific evidence for 2.5:**
- The header (top 10% of page) is a solid 3.5/4
- The code-block region (60-75%) is a solid 3/4
- The grid layouts are a solid 3/4
- Everything else (the remaining ~65% of the scroll) is a 2/4 -- styled but not composed. Good typography, good palette, but no element-level design decisions that say "I placed *this* here because it creates *this* effect."

---

## PA-06: Compositional Integrity

**Answer:** The page has **partial narrative arc** but reads more as a collection of similarly-styled sections than as one coherent composition.

**Evidence for coherence:**
- The dark header establishes an authoritative opening. It says "this is a serious document about research findings."
- The section indicators (numbered, with reading pattern and density labels) create a throughline that a reader can follow.
- The warm palette is consistent throughout -- there's no jarring style break.
- The footer provides a clear ending.

**Evidence against compositional unity:**
- **No middle climax.** The page opens strong (header), has a long flat middle (sections 2-8 of similar visual weight), and then ends. There's no "designed moment" that acts as a turning point or crescendo.
- **The dark code blocks are the most visually dramatic moments but they don't feel compositionally intentional** -- they feel like "we have code, so here's a dark block." They happen to create contrast rather than being placed for compositional rhythm.
- **Beginning, middle, end:** The beginning (header + S1) is clearly distinct. The end (footer) is clearly distinct. The middle (S2 through S11) is **one long middle** without internal structure. A strong composition would have at least 3-4 distinct "movements" -- this page has 2 (header, then everything else until footer).
- **The grid layouts (tension-pair, hypothesis-grid)** are the best candidates for composed moments, but they're modest in visual impact. They don't break the flow the way a full-bleed image or a dramatic pull-quote would.

**At 768px:** The compositional issues are somewhat mitigated because the narrower column creates more natural content density. Sections feel shorter and more distinct at tablet width.

**At 375px:** At mobile, the page reads as a straightforward article. The compositional ambitions aren't really visible -- it's just a well-formatted long read.

---

## SUMMARY OF FINDINGS

### Strengths
1. **Header:** Confidently designed, establishes identity immediately
2. **Palette coherence:** Warm throughout, no cool-gray violations visible
3. **Callout system:** Semantically color-coded, consistent structure
4. **Dark code blocks:** Provide the strongest visual contrast on the page
5. **Section indicators:** Good navigational device
6. **Drop cap:** Nice editorial touch in S1
7. **Soul compliance:** No rounded corners, no shadows, no gradients visible
8. **Structural compliance:** All expected landmarks and elements appear present

### Issues
1. **CRITICAL: Typography collapses after S1.** S4-S12 are typographically near-identical. The page loses its intended typographic arc entirely.
2. **CRITICAL: Zero structural borders.** 6 were specified, 0 are visible. This removes a major tool for zone articulation.
3. **SIGNIFICANT: Imperceptible zone backgrounds.** S4-S5 (2 RGB delta) and S9-S10 (0-5 RGB delta) fail the >=10 RGB threshold. These zones are visually indistinguishable.
4. **SIGNIFICANT: Tables invisible.** 0px borders make 9 tables blend into body text.
5. **MODERATE: S4-S5 gap at 175px.** Largest section gap, feels empty rather than rhythmic.
6. **MODERATE: No mid-page designed moments.** The page front-loads its design confidence (header) and then coasts.
7. **MINOR: Code block mismatch.** Builder CSS targets `.data-table` but HTML uses `.table-compact` -- this explains the invisible tables.

### PA-05 DESIGNED Score: 2.5 / 4

The page is professionally styled with a strong opening and coherent palette, but the middle 65% of the scroll is under-articulated. It needs structural borders, typographic differentiation across zones, perceptible background shifts, and visible table structure to reach COMPOSED (3/4). The gap from 2.5 to 3.0 is closable with targeted fixes; the gap from 2.5 to 4.0 would require a fundamentally different compositional approach.

---

## LOCK-SHEET VERDICT (based on visual inspection + computed data)

```
SOUL:       PASS — no rounded corners, shadows, or gradients detected
TYPOGRAPHY: MARGINAL — fonts correct, but S9-S12 size/line-height deviates from spec
PALETTE:    PASS — all backgrounds warm, no cool grays detected
PERCEPTION: FAIL — S4→S5 (2 RGB) and S9→S10 (≤5 RGB) below ≥10 threshold
BORDERS:    FAIL — 0/6 structural borders present; callout borders PASS (4px, correct colors)
SPACING:    MARGINAL — 175px S4→S5 gap exceeds 96px per-property max (stacking)
STRUCTURE:  PASS — all required elements present per computed data
VOID:       MARGINAL — no catastrophic voids, but upper sections are sparse
PROHIBITED: PASS — no prohibited patterns detected visually

OVERALL: DO NOT SHIP (PERCEPTION and BORDERS fail; SPACING and TYPOGRAPHY marginal)
```

The page needs the structural borders applied (likely a CSS selector fix), the zone backgrounds adjusted for S4-S5 and S9-S10 to meet the >=10 RGB threshold, and the typographic arc restored for S9-S12. With those fixes, it could reach SHIP status and likely a PA-05 of 3/4.

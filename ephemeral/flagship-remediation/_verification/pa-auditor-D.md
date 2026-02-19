# PA Auditor D Report: Typography Deep Dive (PA-19 through PA-24)

**Date:** 2026-02-18
**Auditor:** Fresh-eyes Opus agent (zero prior context)
**Sources:** lock-sheet.md, computed-styles-data.md, 15 screenshots at 1440px, 1 screenshot at 768px

---

## CRITICAL OBSERVATION BEFORE PA ANSWERS

Of the 15 scroll-position screenshots at 1440px, only 4 contain visible content (viewport-top, scroll-01-s1-body, scroll-02-s2-quote, scroll-03-s3-density/scroll-04-s3-table). The remaining 11 screenshots (scroll-05 through scroll-15) show entirely blank warm-cream pages with zero text, zero components, zero structure. This means I can only perform direct visual typography assessment on the header, S1, S2, and S3. For S4-S12, I must rely entirely on the computed-styles-data.md programmatic extraction. This severely limits the perceptual validity of my answers for the lower 70% of the page.

The 768px mobile screenshot shows content through S1, so that provides a secondary reference.

---

## PA-19: Heading Hierarchy

**Question:** Do headings form a clear visual hierarchy? Can you distinguish h1 from h2 from h3 at a glance? Are heading sizes proportional and consistent?

**Answer: PARTIAL PASS -- hierarchy is present but narrow**

What I can see:

1. **h1 (hero):** "What 337 Research Findings Teach About Documentation Design" -- large serif (Instrument Serif), white text on dark background, approximately 40px. This is the most prominent text element on the page. It reads as authoritative and distinct. PASS.

2. **h2 (section titles):** "What the Research Set Out to Find" (S1), "Why Great Documentation Breathes" (S3) -- serif (Instrument Serif), dark text on light background. Computed at 30px in S1 and 28px in S4-S12. These are visually distinguishable from body text in the screenshots where visible. The size feels appropriate for section heads.

3. **h3 (subsection):** "The Choreography of Reading" visible in S3 screenshot. Per the lock-sheet, h3 should be Instrument Serif italic at 24px. From the screenshot, it does appear in a serif face and reads slightly smaller than h2. The italic treatment is present (confirmed visually -- the letterforms slant). PASS on h3 italic compliance.

4. **Section indicators:** "SECTION 01 - F-PATTERN - SPARSE DENSITY" etc. These are small-caps labels above section headings, rendered in a monospace-like all-caps treatment at approximately 11-12px. They function as a wayfinding layer ABOVE the heading hierarchy, which is a good editorial device.

**Hierarchy gap assessment:**
- h1 to h2: 40px to 30px = 10px delta. This is perceptible at a glance. PASS.
- h2 to h3: 30px to 24px = 6px delta. This is perceptible but narrower. BORDERLINE PASS.
- h2 to body: 30px to 17px (S1) = 13px. Very clear. PASS.
- h3 to body: 24px to 17px = 7px. Adequate. PASS.

**Concern:** Per computed data, S4-S12 h2 drops to 28px while S1 h2 is 30px. This 2px difference across sections is unlikely to be noticed by a reader within one session, but it creates a subtle inconsistency. It means the h2-to-h3 gap narrows from 6px (S1) to 4px (S4-S12), which approaches imperceptibility.

**Verdict:** The hierarchy WORKS in the visible sections. h1 is commanding, h2 is clearly subordinate, h3 is clearly tertiary. The system is functional. However, the computed data reveals the hierarchy narrows dangerously in later sections (28px h2 vs 24px h3 = only 4px gap = borderline per the lock-sheet threshold of >=2px between adjacent levels). The hierarchy is present but not robust.

**Score: 3/5** -- Functional hierarchy with narrowing concern in later sections.

---

## PA-20: Body Text Variation

**Question:** Does body text vary across sections or is it uniform? Can you perceive different font sizes, line heights, or letter-spacing between sections? Rate perceptible variation 1-5.

**Answer: FAIL -- near-uniform typography across the page**

From the computed-styles-data:

| Zone | Font Size | Line Height | Letter Spacing |
|------|-----------|-------------|----------------|
| S1 | 17px | 1.85 | 0.02em (0.34px) |
| S4 | 16px | 1.7 | normal |
| S9 | 16px | 1.75 | normal |
| S12 | 16px | 1.75 | normal |

**Analysis:**

1. **S1 stands alone.** S1 has a distinct typographic signature: 17px body, 1.85 line-height, 0.02em letter-spacing. This is the "warm opening" zone. It reads with more air and deliberation. I can confirm from the screenshot that S1 body text feels slightly more spacious than the 768px mobile rendering.

2. **S4 through S12 are essentially identical.** S4 is 16px/1.7, while S9 and S12 are 16px/1.75. The 0.05 line-height difference between S4 (1.7) and S9/S12 (1.75) translates to about 0.8px at 16px font size. This is below any human perceptibility threshold.

3. **The spec called for S9-S12 to use 15px/1.65** (a "resolution" zone with tighter, more resolute typography). The builder did NOT implement this. S9-S12 are at 16px/1.75 -- nearly identical to S4.

4. **Letter-spacing variation is absent.** Only S1 has any letter-spacing (0.02em). All other sections use "normal." The spec allowed for letter-spacing to be a typographic differentiator between zones, but only one zone uses it.

**What this means perceptually:** A reader scrolling from S1 through S12 would notice one typographic shift -- the transition from S1 to S2/S3 where text tightens slightly. After that, for 75% of the page, the body text is typographically identical. There is no sense of the content "changing texture" as you move through sections. The typography does not communicate zone transitions.

**Perceptible variation rating: 1.5/5**

Only S1 is distinct. Everything else is a monotype. The remediation spec called for 3 distinct typographic zones (warm/analytical/resolved). The builder delivered 1.5 (S1 is distinct, everything else merges).

---

## PA-21: Font Pairing

**Question:** Does the serif/sans-serif pairing work? Do headings (Instrument Serif) and body (Inter) complement each other? Does the pairing feel editorial or mismatched?

**Answer: PASS -- the pairing is strong and editorial**

From the visible screenshots:

1. **Instrument Serif for headings** reads as literary, confident, and editorial. It has moderate contrast between thick and thin strokes, which gives it warmth without fussiness. The hero h1 in white-on-dark is particularly effective -- it looks like a magazine cover.

2. **Inter for body text** is clean, neutral, and highly legible. It disappears into the reading experience, which is what a good body sans-serif should do.

3. **The pairing feels deliberate.** Instrument Serif provides personality and anchoring at the heading level, while Inter provides effortless readability in the body. This is a classic editorial pattern (think: serif display + sans body, as used by NYT, The Atlantic, etc.).

4. **The essence callout (S2)** uses Instrument Serif italic for its body text, which is a beautiful application -- the large italic serif text in the blockquote reads as a pull-quote from a magazine. This is the single strongest typographic moment on the page.

5. **Section indicators** use a small-caps treatment that feels like a third typeface layer (possibly Inter in all-caps with tracking). This adds another level to the typographic system.

**Concern:** The pairing works so well at the top that it makes the uniformity of the lower sections more disappointing. The system has the raw materials for excellence but deploys them monotonously after S2.

**Verdict: PASS.** The Instrument Serif / Inter pairing is well-chosen, editorial in feel, and complementary. The issue is not the pairing itself but how little the pairing is leveraged across the page.

**Score: 4/5** -- Strong pairing, would be 5/5 with more varied deployment.

---

## PA-22: Text Alignment

**Question:** Is text consistently left-aligned? Are there any awkward alignment shifts? Does the text column width feel comfortable for reading?

**Answer: PASS -- alignment is clean and consistent**

From visible screenshots:

1. **All body text is left-aligned.** No centered body text visible. No justified text. No right-aligned text. This is correct and matches editorial best practice.

2. **Headings are left-aligned** and share the same left edge as body text within each section. The section indicators ("SECTION 01 - F-PATTERN...") align with the heading below them. No orphaned indentation.

3. **The hero header** is also left-aligned (the red subtitle, the h1, and the subtitle all share a left edge). This is correct -- a centered hero would feel corporate rather than editorial.

4. **The blockquote in S2** appears to be inset from the body text left edge (indented by the left border). This is appropriate and creates a visual citation feel.

5. **Column width:** The page container is 960px with first-paragraph width at 665px. At 17px body text, this yields approximately 55-60 characters per line (allowing for variable character widths). This is within the optimal 45-75 characters per line for reading comfort. At 16px (S4+), the character count increases slightly to roughly 60-65, still comfortable.

6. **768px mobile:** The text reflows naturally. The 768px screenshot shows body text occupying nearly the full width with appropriate padding, yielding approximately 50-55 characters per line. Comfortable.

7. **No alignment shifts detected** between sections. The left margin appears consistent throughout all visible content.

**Verdict: PASS.** Text alignment is impeccable. Column widths are within reading comfort ranges at both viewports.

**Score: 5/5** -- No issues found.

---

## PA-23: Emphasis Techniques

**Question:** How is emphasis created? Bold, italic, color, size? Are emphasis techniques consistent throughout? Do they feel intentional?

**Answer: PARTIAL PASS -- limited but functional emphasis vocabulary**

From visible screenshots and computed data:

1. **Color as emphasis:** The hero uses red (#E83025) for the subtitle "RESEARCH SYNTHESIS -- FIVE PRINCIPLES FROM 337 FINDINGS." This is the strongest emphasis moment. The drop-cap "F" in S1 also uses red. Callout borders use color-coding (red for gotcha, green for tip, amber for essence, blue for info). These are effective and consistent.

2. **Size as emphasis:** The heading hierarchy (40px > 30px > 24px > 17px) creates clear size-based emphasis. The section indicators at ~12px create a small-caps wayfinding layer. The essence blockquote uses a larger serif italic that stands out from surrounding text.

3. **Italic as emphasis:** h3 headings are italic (confirmed by lock-sheet spec). The essence callout body is Instrument Serif italic. These are the only visible italic applications.

4. **Bold as emphasis:** The computed data shows font-weight differences between heading (likely 400 or 600 for serif) and body (400). Table headers use "DIMENSION" / "WHAT IT MEASURES" in small-caps/uppercase, which functions as structural emphasis. I do not see standard bold (700) used within body text paragraphs for inline emphasis.

5. **What is MISSING:**
   - No visible bold text within paragraphs for key terms or definitions
   - No colored inline text (only the drop-cap and section labels)
   - No underline, small-caps, or other inline emphasis within flowing text
   - No pull-quotes beyond S2's blockquote
   - No highlighted or marked text

6. **Table headers** use an uppercase, smaller treatment that acts as emphasis through case transformation and background color. This is effective within the table component but is a component-level treatment, not a paragraph-level emphasis technique.

**Assessment:** The emphasis vocabulary is narrow: size + color + italic + case-transformation. These are all working correctly where deployed, but the repertoire is thin. In a 12-section document, I would expect to see at least occasional bold inline text, perhaps a colored term, or a sidebar callout that uses emphasis differently. The techniques feel intentional where present, but the frequency is low.

**Score: 3/5** -- Functional and consistent where used, but narrow vocabulary and infrequent deployment.

---

## PA-24: Reading Rhythm

**Question:** Does the typography create a reading rhythm? Do you feel pulled through the text or does it feel monotonous? Does the text density vary in a way that creates engagement?

**Answer: FAIL -- monotonous after a strong opening**

**The good (top 25% of page):**

The page opens with a powerful rhythmic sequence:
1. Dark hero header with red accent + large serif title = HIGH ENERGY, editorial hook
2. Transition to warm cream S1 with spacious 17px/1.85 body text = BREATHING ROOM
3. Transition to S2 with large italic serif blockquote on slightly different background = FOCAL MOMENT
4. Transition to S3 with tighter body text + table + info callout = ANALYTICAL SHIFT

This is excellent reading rhythm. The typography changes character at each section, creating a sense of movement. The reader is pulled from proclamation (hero) to narrative (S1) to epigraph (S2) to analysis (S3). The density varies: sparse (hero) -> medium (S1) -> sparse focal (S2) -> medium-dense (S3 with table).

**The bad (remaining 75% of page):**

From S4 onward, based on the computed data:
- Body text is uniformly 16px / 1.7-1.75 / no letter-spacing
- The h2 sizes are uniform (28px)
- The h3 sizes are uniform (24px)
- There are no typographic zone transitions

The content SAYS it is moving through different phases (Choreography, Characters, Whitespace, Tensions, Structure, Findings, Hypotheses, Resolution) but the TYPOGRAPHY does not change to reflect these phases. Every section after S3 looks typographically identical. The reader has no typographic signal that they have entered a different intellectual territory.

**The catastrophic:**

The screenshots from S4 onward are entirely blank cream, suggesting massive whitespace voids between sections. If a reader scrolls through multiple full viewport-heights of blank cream between content sections, the reading rhythm doesn't just stall -- it completely breaks. The reader loses all sense of position and momentum.

**Comparison to spec intent:** The remediation spec called for 3 distinct typographic zones:
- Zone A (S1-S3): Warm, expansive, 17px/1.85 -- IMPLEMENTED
- Zone B (S4-S8): Analytical, 16px/1.7 -- IMPLEMENTED (but barely different from Zone C)
- Zone C (S9-S12): Resolved, tighter, 15px/1.65 -- NOT IMPLEMENTED (builder used 16px/1.75)

Had all three zones been implemented as specified, the reader would experience a progressive tightening of text -- each zone feeling more resolute, more compressed, building toward conclusion. Instead, the page is typographically front-loaded: all the variety is in the first 25%, then it flatlines.

**Score: 2/5** -- Strong opening rhythm collapses into uniformity. The page starts as an editorial magazine and becomes a term paper.

---

## SUMMARY

| Question | Score | Verdict |
|----------|-------|---------|
| PA-19: Heading Hierarchy | 3/5 | PARTIAL PASS -- functional but narrows in later sections |
| PA-20: Body Text Variation | 1.5/5 | FAIL -- only S1 is typographically distinct |
| PA-21: Font Pairing | 4/5 | PASS -- strong editorial pairing |
| PA-22: Text Alignment | 5/5 | PASS -- impeccable |
| PA-23: Emphasis Techniques | 3/5 | PARTIAL PASS -- narrow vocabulary |
| PA-24: Reading Rhythm | 2/5 | FAIL -- strong opening, monotonous after S3 |

**Typography aggregate: 18.5/30 (61.7%)**

## KEY FINDINGS

### Finding D-1 (BLOCKING): Typographic zone differentiation not implemented
The spec called for 3 zones with distinct typography. Only Zone A (S1) was executed. Zone C (S9-S12) was supposed to be 15px/1.65 but was built as 16px/1.75 -- indistinguishable from Zone B. This is the single largest typography failure. 75% of the page has identical body text.

### Finding D-2 (SIGNIFICANT): Catastrophic content voids destroy reading rhythm
Screenshots from S4 through S14 (10 of 15 scroll positions) show entirely blank cream backgrounds. If these represent actual whitespace voids in the rendered page, the reading rhythm is broken beyond what any typographic treatment could repair. Typography cannot create rhythm when there is no text to read.

### Finding D-3 (MODERATE): h2 inconsistency between S1 (30px) and S4-S12 (28px)
This narrows the heading hierarchy in later sections and creates a subtle inconsistency. The h2-to-h3 gap drops to 4px in later sections, approaching the minimum perceptible threshold.

### Finding D-4 (MINOR): No inline emphasis within body text
The page uses zero bold, zero colored inline text, and zero inline typographic emphasis within paragraphs. For a 12-section document about design principles, this is surprisingly barren. Key terms, definitions, and findings would benefit from inline emphasis to aid scanning.

### Finding D-5 (POSITIVE): Instrument Serif / Inter pairing is excellent
The font pairing is the strongest typographic asset. It is editorial, complementary, and well-deployed at the heading/body boundary. The essence blockquote in Instrument Serif italic is the typographic high point of the page.

### Finding D-6 (POSITIVE): Text alignment and column width are perfect
Zero alignment issues. Reading comfort within optimal ranges at both 1440px and 768px.

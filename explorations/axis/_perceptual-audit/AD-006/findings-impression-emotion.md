# Perceptual Audit Findings — Auditor A (Impression + Emotion)
## AD-006: The Convergence (Compound Axis)

**Auditor:** Visual Auditor A
**Questions:** PA-01, PA-04, PA-05, PA-18, PA-19, PA-20
**Viewports:** 1440px, 768px, 1024px
**Date:** 2026-02-10

---

## CRITICAL FINDING: Invisible Bottom Half

**Severity: CRITICAL / Showstopper**

The bottom approximately 60% of the page (Sections 4 through 7: Spiral, Choreography, Decision Matrix, and Fractal Meta) renders as blank cream background when scrolling. Content exists in the DOM -- the accessibility tree confirms all 7 sections with full text, tables, callouts, code blocks, and the discovery log. Programmatic measurement confirms these sections have non-zero computed heights (1125 to 3391 tall). However, they are visually invisible when scrolled to.

This was confirmed across all three viewports (1440px, 768px, 1024px). The page reports a total scroll height of approximately 14,737 but visible content ends around position 6,100 -- everything after the Bento Grid section (Section 3) disappears into an empty void.

This is likely caused by scroll-triggered animation logic that keeps sections hidden until an intersection observer fires, but the observer either is not triggering or the reveal animation requires CSS properties (transforms, opacity transitions) that conflict with the static rendering context. The result: a reader scrolling naturally would encounter approximately 8,600 of nothing -- roughly 10 full viewport heights of blank page.

**This finding alone changes the ship verdict from YES WITH RESERVATIONS to NO.**

---

## 5-Dimension Scroll Pass (1440px -- Visible Content Only: Sections 1-3)

### Pass 1: READABILITY

- **Section 1 (Z-Pattern Overview):** Body text is comfortable to read. The drop cap "E" is a nice touch -- adds warmth without being precious. Line lengths are pleasant -- not too wide, not cramped. The pattern icon grid labels ("Z", "F", "BENTO", "SPIRAL", "CHOREO", "ALL") are readable even at their small size.
- **Section 2 (F-Pattern / Triple Equivalence):** The opening paragraphs flow well. The three-column "Organization / Density / Axis" comparison is readable at 1440px but would be cramped at narrower widths. Table text in "Three Equivalence Mechanisms" is legible -- the "How It Works" column carries the heaviest text load but manages it.
- **Section 3 (Bento Grid):** The featured "Compound Axis" card text is comfortable. The smaller cards (Z-Pattern, F-Pattern, Bento Grid, Spiral) have shorter text that reads well. The Transition Grammar table is clean and scannable.
- **No word stacking or squinting required anywhere in visible content.**

### Pass 2: SPATIAL BALANCE (Squint Test)

- The page has a clear weight distribution: heavy dark band at top, then a balanced cream body. When squinting, Section 1 shows a clear left-text / right-icons split. Section 2 transitions to full-width text, then the three-column cards create a nice horizontal rhythm.
- **Concern:** The Bento section (Section 3) has a visual weight imbalance -- the featured card occupies the entire left column and towers over the smaller cards on the right. When squinting, the featured card reads as a tall dark stripe (because of its left red border) next to shorter lighter blocks. The proportion feels unbalanced -- the featured card is too tall for its content.
- **Section transitions** between 1 and 2 are marked by a thin red divider line -- visible but subtle. Between 2 and 3, same. These are adequate breathing markers but not strongly assertive.

### Pass 3: HIERARCHY & FLOW

- **Focal point chain at 1440px:** Title ("AD-006: The Convergence") commands first. Then "The Five Patterns, One Page" heading. Then the pattern icon grid pulls the eye right. The Essence callout (purple border, italic serif) provides a reflective pause. Then the "What This Page Demonstrates" box with its numbered list anchors the reader before the section transition.
- **Section 2** front-loads "The Triple Equivalence" heading strongly. The three-column cards create a clear horizontal scanning moment. The tables provide dense but organized information.
- **Section 3** leads with "The Five Axis Patterns" and the bento grid. The featured card signals importance through size, but the hierarchy between the smaller cards is flat -- they all look equal, which is correct for a catalog.
- **Transitions:** The section-to-section transitions feel smooth between 1 and 2 (both text-heavy). Between 2 and 3 the shift from vertical F-pattern to horizontal bento grid is noticeable but manageable -- the section header provides enough context.

### Pass 4: CONSISTENCY

- **Callout boxes** are consistent: colored left border, uppercase label, body text. Purple for Essence, blue for Context, green for Discovery, orange for Caution/Gotcha. This color language is coherent and learnable.
- **Section headers** follow a consistent pattern: small uppercase meta label ("SECTION 01 -- Z-PATTERN OVERVIEW"), then large serif heading, then description paragraph. This repetition creates a reliable rhythm.
- **Table styling** is consistent between the Equivalence Mechanisms table and the Proof Across Four Explorations table -- same header treatment, same row spacing.
- **Gray family:** The grays feel unified. The axis indicator bar text, the section meta labels, and the table headers all use a similar warm gray. No jarring cool grays intruding.

### Pass 5: SHIP TEST

- **Sections 1-3:** Would feel at home on a serious design documentation site. The scholarly tone, the careful typography, the restrained color palette -- these communicate expertise and care. Compared to Stripe's documentation: similar confidence, similar restraint, though AD-006 is warmer and more bookish where Stripe is cooler and more technical.
- **The invisible bottom half kills the ship test.** A page where half the content is invisible is fundamentally broken. It does not matter how good the visible half looks.
- **If the invisibility were fixed:** YES WITH RESERVATIONS. The visible sections are strong enough to ship. The reservations are about the bento grid's featured card proportions, the overly generous breathing zones between sections, and the lack of responsive adaptation at 768px.

---

## PA-01: What's the first thing that bothers you?
*CATCHES: Misplaced focal points, gestalt discomfort*

### 1440px
The first thing that bothers me is the **gap between the header and Section 1**. There is an uncomfortable amount of empty cream between the bottom of the dark header band (with its red accent line) and the "SECTION 01" label. It is too much space to feel like "content continues here" but not enough to feel like an intentional breathing zone. The eye drops out of the header and floats for a moment before finding the section label. This gap creates a brief feeling of disorientation -- "did the page break?"

### 768px
The **identical layout at 768px**. Nothing adapts. The page looks like it was built for one width and served unchanged. At 768px the margins eat into the content width without the layout reflowing to compensate. The bento grid is particularly affected -- the featured card's empty space becomes a tall blank column.

### 1024px
At 1024px this is the least problematic viewport. The first thing that bothers me is the same header-to-Section-1 gap, but it is slightly less noticeable here because the content fills more naturally.

---

## PA-04: Where does your eye go first? Is that where it SHOULD go?
*CATCHES: Competing focal points, badges outranking headlines*

### 1440px
My eye goes to **"AD-006: The Convergence"** in the header. This IS where it should go -- the large warm serif title against the dark band is the strongest visual element. Good.

Second look goes to the **pattern icon grid** (the six small black boxes with red accents). These are charming and the eye is naturally drawn to them because they are the only place where the warm palette meets a strong graphic element. This is acceptable -- they serve as a visual index that orients the reader.

The "V1 ENRICHED" badge near the title does NOT compete with the heading. It is quiet enough to be noticed on second look but does not pull focus.

### 768px
Same hierarchy at 768px. The title still commands. However, the axis indicator bar at the very top ("AXIS: COMPOUND / DENSITY: FRACTAL / ORG: CREATIVE") feels more prominent at narrow widths because it occupies a larger proportion of the viewport. It does not outrank the title, but it is more noticeable.

### 1024px
Title first, pattern icons second, then the section heading. The hierarchy is clearest and most intentional at 1024px. This is the best viewport for focal point hierarchy.

---

## PA-05: Would you put your name on this? What would you fix first?
*CATCHES: Gap between "passes rules" and "is good"*

### 1440px
I would put my name on Sections 1-3 with reservations. The typography is confident, the callout system is well-designed, and the content structure is thoughtful.

**What I would fix first:** The invisible bottom half. This is not a cosmetic issue -- it is a broken page. Half the content (including the climactic Decision Matrix and the self-referential Fractal Meta section) is inaccessible to a normal reader scrolling through.

**Second fix:** The Bento grid featured card proportions. The featured card is too tall relative to its content, creating a visual dead zone.

**Third fix:** Responsive behavior. The page needs to reflow at 768px -- stacking columns, adjusting card layouts.

### 768px
No. I would not put my name on this at 768px. The lack of responsive adaptation and the invisible bottom half make it feel like an unfinished prototype.

### 1024px
Yes, with reservations, for the visible sections only.

---

## PA-18: Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler?
*CATCHES: Color temperature inconsistency*

### 1440px
**Yes, the grays feel unified.** The warm cream background, the warm gray text for metadata and labels, and the darker text for body content all share the same warm undertone. There is no jarring cool gray anywhere in the visible sections.

Specific observations:
- The axis indicator bar uses warm gray text that belongs to the page
- Section meta labels (e.g., "SECTION 01") are in a warm medium gray
- Table header text is warm gray uppercase
- The dark header band is not pure black -- it has warmth
- Callout box backgrounds are a slightly different cream shade -- warmer and slightly more beige than the page background, which creates pleasant depth without temperature clash

### 768px
Same color family. No temperature inconsistency introduced by viewport change.

### 1024px
Same. The gray family is consistent across all viewports. This is a strength of the design.

---

## PA-19: Is there any element that feels like it's from a different website?
*CATCHES: Visual intruders (dark code blocks on warm pages)*

### 1440px
**The axis indicator bar** at the very top of the page. While it works functionally, its dark background and centered uppercase labels feel more like a technical toolbar or status bar than part of the warm, bookish page below it. The header band bridges between them, but if I covered the header with my hand and looked at just the indicator bar versus the body, they feel like they come from different design languages. The indicator bar is machine-like; the body is humanist.

This is a minor observation -- it does not break the page -- but it creates a slight tonal split between the navigation chrome and the content.

**Nothing else feels alien** in the visible sections. The callout boxes, tables, pattern icons, and text all feel cohesive.

### 768px
Same observation about the axis indicator bar. Additionally, at 768px the bento grid's featured card -- with its tall red left border and mostly-empty interior -- starts to feel like a sidebar element from a different layout system rather than a featured content card.

### 1024px
Only the axis indicator bar. At 1024px even the bento grid feels at home.

---

## PA-20: If you described this page's personality in three words, what would they be? Does that match the intended personality?
*CATCHES: Emotional misalignment, tonal incoherence*

### 1440px
**Three words: Scholarly, Deliberate, Warm**

- **Scholarly:** The serif headings, the careful callout hierarchy, the research citation style (AD-F-021, EXT-AXIS-X-001), the tables of evidence -- this reads like an academic paper presented beautifully.
- **Deliberate:** Nothing feels accidental. The section numbering, the consistent callout colors, the pattern icons -- every element earns its place.
- **Warm:** The cream background, the warm grays, the serif typography, the italic Essence callouts -- this is not cold or clinical. It invites the reader in.

**Does this match intended personality?** This is a Compound pattern exploration -- the most ambitious and meta of all the axis explorations. Scholarly and deliberate feel RIGHT for a page that is documenting its own structure as proof. Warm feels right for the humanist design philosophy. YES, the personality aligns.

### 768px
**Three words: Scholarly, Cramped, Unfinished**

The scholarly quality survives, but the lack of responsive design makes it feel unfinished, and the squeezed layouts add a feeling of being cramped. The intended personality is not wrong -- it is just not fully realized at this width.

### 1024px
**Three words: Scholarly, Confident, Complete**

At 1024px the personality is strongest. "Complete" replaces "Warm" because at this width the page feels most like a finished product. This is the ideal viewport for the page's intended personality.

---

## Summary of Findings

| ID | Severity | Finding | Viewport |
|---|---|---|---|
| PA-A-001 | CRITICAL | Bottom ~60% of page (Sections 4-7) renders as invisible blank cream | ALL |
| PA-A-002 | HIGH | Bento featured card too tall -- creates blank vertical stripe | 1440, 768 |
| PA-A-003 | HIGH | No responsive adaptation at 768px -- layout identical to 1440px | 768 |
| PA-A-004 | MEDIUM | Header-to-Section-1 gap feels ambiguous -- neither tight nor breathing | ALL |
| PA-A-005 | LOW | Axis indicator bar feels tonally separate from warm body content | ALL |
| PA-A-006 | NOTE | Best viewport is 1024px -- all elements most balanced here | 1024 |
| PA-A-007 | NOTE | Gray/neutral family is well-unified -- no temperature inconsistency | ALL |
| PA-A-008 | NOTE | Callout color system (purple/blue/green/orange) is coherent and learnable | ALL |

### Ship Verdict

**Overall: NO** (due to PA-A-001 invisible bottom half)

**If PA-A-001 were fixed: YES WITH RESERVATIONS** (address PA-A-002 featured card and PA-A-003 responsiveness)

### Personality Assessment

- **Intended:** Scholarly, Meta, Confident
- **Achieved (1440px visible half):** Scholarly, Deliberate, Warm -- ALIGNED
- **Achieved (768px):** Scholarly, Cramped, Unfinished -- MISALIGNED
- **Achieved (1024px visible half):** Scholarly, Confident, Complete -- BEST ALIGNMENT

---

## Addendum: Scroll-Through Session Observations

A second pass at 1440px using `behavior: 'instant'` scrolling (bypassing smooth-scroll interference) confirmed:

1. **Sections 04 through 07 DO render** when reached via instant scroll. The Spiral section's strata cards (Stratum 2 "Section Selection Rules" with green bar, Stratum 3 "Fractal Scale Compliance" with orange bar) are visible. The Choreography section's spoke cards (Temporal/Spatial/Proportional/Gravitational) flanking the hub Essence callout are visible. The content exists and renders.

2. **The "invisible bottom half" issue is caused by scroll-animation interference.** Normal smooth scrolling (or browser-default scrolling) does not trigger the reveal of sections 4-7. Only forced instant-scroll reaches them. This means a real user scrolling naturally WOULD encounter the blank viewports. The finding PA-A-001 stands as CRITICAL.

3. **Dead zones between sections are real but may be intentional "breathing zones."** However, when these zones fill an entire viewport with blank cream (no content visible at all), they feel broken rather than restful. A breathing zone should be noticeable but not dominant. These are dominant.

4. **The page was navigated away from by another agent** mid-audit (URL changed to AD-001-z-pattern.html). This Playwright contention confirms the known multi-agent Playwright access limitation.

5. **Additional positive observations:**
   - The Choreography hub-spoke layout (Section 05) with centered Essence callout flanked by spoke cards is one of the most visually interesting layouts on the page
   - The Spiral strata layout with confidence-level borders (wider = more validated) is a clever and effective visual metaphor
   - The callout color system remains consistent through ALL 7 sections: purple (Essence), blue (Context), green (Discovery), orange (Caution/Gotcha)

# FRESH-EYES AUDIT REPORT — AD Phase (6 Pages)

**Auditor:** Fresh-Eyes Agent (information-barrier constrained)
**Date:** 2026-02-10
**Method:** Full-page Playwright screenshots + accessibility snapshots at BOTH 1440px AND 768px viewports, all 6 AD HTML files. Viewport-by-viewport scroll inspection. DOM overflow measurements via JavaScript evaluation.
**Reference Documents Read:** ACCUMULATED-IDENTITY-v1.1.md (first 100 lines), SOUL-DISCOVERIES.md (first 50 lines)
**Information Barrier:** Did NOT read convention spec, builder reports, any other audit findings

---

## Page-by-Page Audit

---

### AD-001: Z-Pattern Axis
**URL:** http://localhost:3333/explorations/axis/AD-001-z-pattern.html

1. **First impression (5 words):** Dense, scholarly, competent but monotonous
2. **Single worst thing:** The page is visually monolithic — every section looks the same from a distance. Q&A pairs, tables, code blocks, and callouts all stack vertically with identical left-alignment and indistinguishable rhythm. Despite claiming Z-Pattern geometry, the rendered page reads as pure linear vertical scroll with no visible Z-geometry at all.
3. **Single best thing:** The Essence callouts are genuinely beautiful — italic serif in warm cream feels authoritative and editorial, exactly matching the "Archivist speaks in serif" soul piece.
4. **Would a newcomer understand the axis pattern?** Partially. The prose explains the Z-Pattern well, but the page does not DEMONSTRATE the Z-Pattern. A newcomer would learn what a Z-Pattern is conceptually but would not see one in action. The page is about Z but is not Z.
5. **If you could change ONE thing:** Add a visual diagram or actual Z-layout demonstration section. The hero area claims to use a Z-grid with `grid-template-areas` but the rendered result is two text blocks stacked — there is no perceivable diagonal sweep.

---

### AD-002: F-Pattern Layout
**URL:** http://localhost:3333/explorations/axis/AD-002-f-pattern.html

1. **First impression (5 words):** Theatrical, structured, best visual hierarchy
2. **Single worst thing:** The "Act" section headers (Act I - Exposition, Act II - Rising Action, etc.) with their "Narrative tension: minimal/building/peak/relaxing/resolved" tension indicators use a horizontal rule + italicized descriptor pattern that is visually distinct from the rest of the system. The tension labels feel gratuitous — they describe a meta-property of the section that the reader cannot verify. It is telling, not showing.
3. **Single best thing:** The CRESCENDO spacing compression is genuinely perceptible — Act I has generous breathing, Act III is noticeably denser with more code blocks, and Act V relaxes again. This is the only AD page where the claimed density pattern is actually FELT during reading.
4. **Would a newcomer understand the axis pattern?** Yes. The F-Pattern is explained clearly, the typography scanning hierarchy table is immediately useful, and the left-spine heading structure is demonstrated by the page itself. This is the most self-demonstrating of the 6 pages.
5. **If you could change ONE thing:** Remove the "Narrative tension: X" labels. They add meta-noise without serving the reader. The CRESCENDO is felt through spacing and code density — labeling it explicitly breaks the editorial restraint the system claims.

---

### AD-003: Bento Grid
**URL:** http://localhost:3333/explorations/axis/AD-003-bento-grid.html

1. **First impression (5 words):** Modular, task-oriented, genuinely different layout
2. **Single worst thing:** The collapsible sections (details/summary elements with "View implementation steps," "View border rules," etc.) are collapsed by default, making the page feel hollow on first scroll. A reader sees a grid of task cards, but each card's actual content is hidden behind a click. This violates the editorial principle — magazines do not make you click to reveal content.
3. **Single best thing:** The actual bento grid layout with varying cell sizes IS working — you can see Beginner/Intermediate/Advanced task tiles at different sizes in a real grid. Of all 6 pages, this is the one where axis geometry is most visible as rendered output.
4. **Would a newcomer understand the axis pattern?** Yes. The grid IS the demonstration. The modular task-tile layout with size-based hierarchy is immediately comprehensible without reading any explanatory text.
5. **If you could change ONE thing:** Open the first collapsible section in each difficulty tier by default, so the page is not 60% hidden content on first load. Progressive disclosure should reveal, not conceal.

---

### AD-004: Spiral Layout
**URL:** http://localhost:3333/explorations/axis/AD-004-spiral.html

1. **First impression (5 words):** Ambitious concept, visually unconvincing execution
2. **Single worst thing:** The "geological strata" concept (Bedrock/Subsoil/Topsoil/Atmosphere) does not visually communicate itself. The strata nav pills in the header use small colored badges, but in the body, the only visual differentiation between strata is border-left width (4px vs 3px vs 1px). The perceptual difference between a 4px and a 3px left border is nearly invisible at reading speed. The entire confidence-stratification concept depends on a signal that is below the threshold of casual perception.
3. **Single best thing:** The comparative panel (Established Approach vs Speculative Approach side-by-side in the Topsoil stratum) is excellent. Showing the same API documented at two confidence levels makes the stratification concept immediately concrete.
4. **Would a newcomer understand the axis pattern?** No. A newcomer would see a long page with sections of decreasing visual intensity but would not recognize it as a "spiral." The angular spiral is a conceptual metaphor that has no visual manifestation on screen. The page reads as a linear confidence-level document, not a spiral.
5. **If you could change ONE thing:** Add a visual diagram showing how the spiral metaphor maps to the page structure. The strata transitions ("Descending: Bedrock to Subsoil") try to narrate the spatial metaphor but are insufficient. The gap between concept and visual is the widest of any AD page.

---

### AD-005: Choreography
**URL:** http://localhost:3333/explorations/axis/AD-005-choreography.html

1. **First impression (5 words):** Hub-spoke works, dense but navigable
2. **Single worst thing:** The progress indicator images ("Reading progress: Hub section active," "Spoke 1 of 3 active") appear to be image elements but render as broken/invisible or extremely small in the viewport. They consume vertical space without providing visible navigation feedback. This is dead space that interrupts the reading flow.
3. **Single best thing:** The hub-spoke navigation is genuinely functional. The territory tile grid at the top acts as a real hub, and the spoke sections with breadcrumb navigation ("Hub > CSS Transition Choreography") create a navigable structure. The WAVE density oscillation (sparse hub tiles to dense spoke content) is perceptible.
4. **Would a newcomer understand the axis pattern?** Mostly. The hub-spoke metaphor is clear from the territory grid. The "choreography" label is less clear — a newcomer might ask "choreography of what?" The cinematic shot-progression metaphor (establishing shot, close-up) adds conceptual overhead that does not obviously help.
5. **If you could change ONE thing:** Fix the progress indicator images — either make them visible and functional, or remove them. Invisible placeholders are worse than nothing.

---

### AD-006: Compound Axis — The Convergence
**URL:** http://localhost:3333/explorations/axis/AD-006-compound.html

1. **First impression (5 words):** Grand synthesis, longest, visually exhausting
2. **Single worst thing:** The page is extremely long (the full-page screenshot shows 8+ viewport-heights of content) with no persistent navigation or way to jump between the 7 sections. The sticky axis indicator bar at the very top ("Axis: COMPOUND / Density: FRACTAL / Org: CREATIVE") is helpful but does not update as you scroll. A reader at Section 5 has no orientation signal for where they are in the overall page journey. For a page about "choreography of the reader's journey," the reader's journey through THIS page is unchoreographed.
3. **Single best thing:** The pattern echo grid in Section 1 — six small visual thumbnails of each axis pattern — is the single best visual artifact across all 6 AD pages. It immediately communicates what the compound page contains. The self-referential sixth cell ("All") is a delightful touch.
4. **Would a newcomer understand the axis pattern?** Partially. The concept of "use different layouts for different content types" is clear. But the meta-concept of "triple equivalence" (axis = density = organization) requires prior knowledge of the other 5 patterns. This page is not meant for newcomers; it is a synthesis for someone who has read AD-001 through AD-005.
5. **If you could change ONE thing:** Add a sticky section navigator that updates on scroll, showing which of the 7 sections is currently active. The page demands wayfinding that it does not provide.

---

## DUAL NUCLEAR QUESTIONS

### 1. Insider Test: "Does this communicate identity to someone who already knows the system?"

**YES, with caveats.** An insider who has internalized the 5 soul pieces, the ANTI-PHYSICAL identity, and the density patterns will recognize the system at work across all 6 pages. The soul compliance is strong: sharp edges everywhere, no visible border-radius, no shadows, no decorative depth effects. The typography hierarchy (Instrument Serif for headings and Essence, Inter for body, JetBrains Mono for code) is consistent across all 6 pages. The warm cream background (#FEF9F5) and red accent (#E83025) are correctly applied.

**The caveats:** An insider might be disappointed that the axis patterns are mostly described rather than demonstrated. The system's identity IS present, but it feels like a scholarly treatise ABOUT the identity rather than an artifact that EMBODIES the identity. AD-002 (F-Pattern) and AD-003 (Bento Grid) are the exceptions — they genuinely demonstrate their respective patterns through their own structure.

### 2. Outsider Test: "Does this communicate identity to someone encountering it for the first time?"

**PARTIALLY.** An outsider would immediately perceive: (a) this is a serious, editorial-quality design system; (b) the typography is distinctive and consistent; (c) the warm cream palette with red accents creates a recognizable visual brand; (d) the code blocks are well-formatted and readable.

**What an outsider would NOT perceive:** (a) the soul pieces — there is no page that says "this is who we are" visually rather than textually; (b) the distinction between this system and any other clean, modern documentation site; (c) why the sharp edges matter — without context, sharp corners just look unfinished rather than intentional; (d) the density patterns — PULSE, CRESCENDO, GEOLOGICAL, ISLANDS, WAVE are insider vocabulary that would be opaque.

**The gap:** The identity is communicated TEXTUALLY (every page describes its axis/density/organization) but not always VISUALLY. A newcomer cannot "feel" what makes this system unique from looking at it — they need to read the explanations. For a system that values "perceptual truth over CSS rules," this is a meaningful gap.

---

## WORST VISUAL HYGIENE (Across All 6 Pages)

**The single thing that would make a design reviewer wince:**

**Inconsistent callout visual weight across the 6 pages.**

Callout types (Essence, Tip, Caution, Gotcha, Context, Important, Forward Thread) are inconsistent in their visual presentation across pages. Some pages use callouts with colored left borders, others use callouts with full background fills, others use callouts with just italic text. The soul says callouts should "share family DNA" (Soul Piece 3: "Same structure, different personalities"), differentiated through COLOR only. But across the 6 AD pages:

- AD-001: Essence callouts use italic serif with subtle cream background, Tips use a slightly different cream with a green accent
- AD-002: Callouts use a full-width aside pattern with a colored left stripe
- AD-003: Essence callouts are indistinguishable from the section background at a glance
- AD-004: The Essence callout is paired with a metadata sidebar, creating a different structural form factor
- AD-006: Callouts use a purple or green left-border with bold labels in uppercase monospace

The "family DNA" requirement (2-zone: label + body, border-left differentiation through color only) is partially followed but not uniformly enforced. A design reviewer would see 6 pages that each developed their own callout dialect. This is exactly the "three dialects" problem — and now there may be four.

---

## CRITICAL RESPONSIVE FINDING (from 768px audit)

### FRESH-0 (NEW): ALL 6 AD pages have horizontal body overflow at 768px viewport — responsive collapse is BROKEN

**Severity: CRITICAL**

Every single AD page creates a horizontal scrollbar at 768px viewport width. Measured via `document.body.scrollWidth`:

| Page | Body scrollWidth at 768px | Overflow (px) |
|------|--------------------------|---------------|
| AD-001 Z-Pattern | 853px | +85px |
| AD-002 F-Pattern | 853px | +85px |
| AD-003 Bento Grid | **1127px** | **+359px** |
| AD-004 Spiral | **1080px** | **+312px** |
| AD-005 Choreography | 853px | +85px |
| AD-006 Compound | 853px | +85px |

AD-003 (Bento Grid) is the worst offender — its multi-column grid does NOT collapse to single-column at 768px despite the page's own content stating "At viewport widths below 768px, all multi-column grids collapse to single column." AD-004 (Spiral) retains its two-column grid layout at 768px (measured: `grid-template-columns: 533px 179px`), again contradicting its own responsive specification.

The pages that overflow at exactly 853px (AD-001, 002, 005, 006) share a common CSS issue — likely a `max-width` or `padding` value that prevents proper containment at exactly 768px.

This is the single most severe finding because:
1. It contradicts the pages' own documented responsive behavior (they describe `@media (max-width: 768px)` collapse rules that are not implemented)
2. A horizontal scrollbar on mobile is an immediate credibility-killer for a design system
3. The convention spec (which I have NOT read but the pages reference) appears to mandate single-column below 768px

---

## UNIQUE FRESH FINDINGS

### FRESH-1 (NEW): Pages describe axis patterns but do not demonstrate them

**Severity: HIGH**

4 of 6 pages (AD-001 Z-Pattern, AD-004 Spiral, AD-005 Choreography, AD-006 Compound) primarily DESCRIBE their axis pattern in prose rather than DEMONSTRATING it through their own layout. The pages are about Z/Spiral/Choreography/Compound but do not structurally embody these patterns in a way visible to the reader. AD-002 (F-Pattern) and AD-003 (Bento Grid) are the exceptions. This is the most significant fresh finding because it means the majority of AD pages fail the system's own test: "the structure IS the proof."

### FRESH-2 (NEW): No wayfinding across the 6-page AD collection

**Severity: MEDIUM**

There is no inter-page navigation between the 6 AD explorations. Each page is an island. A reader who finishes AD-001 has no link to AD-002. A reader who lands on AD-004 has no context for where it sits in the sequence. For a system obsessed with provenance chains and pipeline architecture, the 6 AD pages have zero navigational chain between them. The axis indicator bar on AD-006 comes closest but only works within that single page.

### FRESH-3 (NEW): Progress indicators on AD-005 are broken/invisible visual artifacts

**Severity: MEDIUM**

AD-005 contains multiple `<img>` elements for "Reading progress" indicators that either render as invisible or as tiny, non-functional visual noise. These occupy vertical space (visible as blank gaps in the full-page screenshot) without providing any reading feedback. They are likely SVG or data-URI images that failed to render correctly, or they are intentionally tiny and fail their design purpose.

### FRESH-4 (NEW): AD-006 has no scroll-aware navigation despite being 8+ viewport-heights long

**Severity: MEDIUM**

AD-006 is by far the longest page (~8 viewport-heights) and has 7 distinct sections with their own axis patterns. The static axis indicator bar at the top does not update on scroll. There is no table of contents, no section jump links, no scroll progress indicator, and no "back to top" affordance. For a page whose thesis is "choreography of the reader's journey," the reader's own journey through this page is unguided.

### FRESH-5 (NEW): The 4px-to-3px border-weight gradient on AD-004 is perceptually indistinguishable

**Severity: LOW**

AD-004's core concept — geological strata communicated through border-left weight (4px Established, 3px Probable, 1px Open) — depends on the reader perceiving the difference between a 4px and a 3px left border. At reading distance and speed, this 1px difference is below the perceptual threshold for most readers. The 1px stratum IS perceptibly different, but the top two strata look identical. The concept is sound; the signal is too subtle.

---

## Summary Statistics

| Page | First Impression Score (1-5) | Self-Demonstrates Pattern? | Newcomer Comprehension | 768px Overflow |
|------|------------------------------|---------------------------|----------------------|----------------|
| AD-001 Z-Pattern | 3 | NO | Partial | +85px |
| AD-002 F-Pattern | 4 | YES | Yes | +85px |
| AD-003 Bento Grid | 4 | YES | Yes | **+359px** |
| AD-004 Spiral | 2 | NO | No | **+312px** |
| AD-005 Choreography | 3 | PARTIAL | Mostly | +85px |
| AD-006 Compound | 3 | PARTIAL | Partial | +85px |

**Best page overall:** AD-002 (F-Pattern) — genuinely demonstrates its pattern through its own structure, has perceptible CRESCENDO density, and is the most self-contained learning experience.

**Most improved potential:** AD-004 (Spiral) — the concept is ambitious and the comparative panels are excellent, but the visual execution does not match the conceptual sophistication.

**Unique Fresh Findings: 6** (target was >= 3) — includes 1 CRITICAL (responsive overflow), 1 HIGH, 4 MEDIUM/LOW

**Audit Method Completeness:**
- 1440px: Full-page screenshots (6 pages) + accessibility snapshots (6 pages) + viewport-by-viewport scroll inspection
- 768px: Full-page screenshots (6 pages) + JavaScript DOM overflow measurement (6 pages) + computed grid column verification
- Both viewports audited for all 6 pages as required

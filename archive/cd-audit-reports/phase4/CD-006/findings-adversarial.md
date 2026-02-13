# ADVERSARIAL FINDINGS: CD-006

**Page:** CD-006 Pilot Migration -- Building Your First KortAI Documentation Page
**Auditor:** Adversarial Red Team (PA-26, PA-27, PA-28)
**Date:** 2026-02-11

---

## Convention Challenges (PA-26)

### CHALLENGE 1: Page Length Exceeds Target (CHALLENGEABLE)

The page stands at 16,264 tall against a convention target of 12,000-15,000 for CD-006. This is an 8.4% overshoot. The page feels long -- not oppressively so, but there is a sense of endurance required to reach Section 8. The content is rich enough to justify length, but the eight-section structure could be tightened. Sections 6 (Auditing) and 7 (Deploying) feel like they could be merged without losing pedagogical clarity. The tutorial arc from "set up tokens" through "audit and deploy" has natural momentum, but the deployment section feels like an afterthought appended rather than woven into the learning journey.

**Verdict:** Convention is not CAUSING a problem, but the page would feel more confident at 14,000. The extra length comes from generous breathing zones between sections and the extensive Step-by-Step Z-Pattern in Section 5. Neither individually is wrong, but together they stretch the page past its natural endpoint.

### CHALLENGE 2: Container Width Creates Dead Space at Wide Viewports (CHALLENGEABLE)

At the widest viewport, the content container occupies roughly 76% of the viewport width. The remaining 24% is pure empty cream on both sides. This is not "dead space" in the pathological sense -- the container is locked at its maximum width and the content reads comfortably. But for a page that claims to be a "full-lifecycle guide," the generous margins at wide viewports create a corridor effect: the reader's eye is funneled into a surprisingly narrow channel.

The bento grids in Sections 3 and 6, which should spread into the available space to create the ISLANDS density pattern, instead feel like compressed versions of what they could be. The grid cells are approximately 240 units wide -- comfortable but not spacious. A wider container would let the bento grids breathe more authentically.

**Verdict:** The container width convention is not causing a visual problem at standard viewports. At the widest viewport, the dead space is noticeable but not jarring. This is a legitimate trade-off between readability (narrower is better for prose) and spatial expression (wider is better for grids). The current compromise favors prose over grids, which is defensible for a tutorial page.

### CHALLENGE 3: Spacing Scale Creates Uniform Gaps (CHALLENGEABLE)

The section-to-section gaps fall into two precise categories: approximately 243-247 units (bridge/breathing transitions) and approximately 161 units (smooth transitions). This mathematical precision is perceptually invisible to a casual reader -- but it creates an unexpected uniformity. Every section transition feels the same weight. The breathing zones between Sections 1-2, 2-3, 3-4, 5-6, and 7-8 are nearly identical.

A reader scrolling through the page experiences a metronome-like rhythm: content-gap-content-gap-content-gap. This is orderly but lacks surprise. If the goal is to create density WAVES (the fractal self-similarity at page scale), the gaps should vary more dramatically. The current spacing says "each section is equally important and equally separated," which contradicts the natural crescendo of a tutorial (early sections should be closer together as momentum builds; later sections can spread apart for reflection).

**Verdict:** The spacing convention is creating a subtle perceptual problem. The gaps are not individually wrong, but collectively they flatten the page-level density wave into a plateau. A tutorial page should feel like it accelerates through the middle sections (tighter gaps) and decelerates for reflection at the end (wider gaps). The current uniform spacing does the opposite of what the CRESCENDO density pattern demands.

### CHALLENGE 4: Drop Caps Feel Decorative (CHALLENGEABLE)

CD-006 uses drop caps at section openings, documented as EXT-CREATIVE-005. In a page that otherwise maintains austere, authoritative restraint, the drop caps feel like ornamentation. They carry no semantic weight -- they do not distinguish section types, signal density changes, or mark confidence strata. They simply say "this is the beginning of a section," which the section header, the section meta line, and the transition zone already communicate.

Drop caps introduce a craft-book aesthetic into a system that presents itself as technically rigorous. The serif drop cap in particular evokes literary publishing rather than technical documentation. This is not wrong, but it creates a tonal dissonance: the page oscillates between "I am a precise engineering document" (code blocks, checklists, audit criteria) and "I am a beautifully typeset manuscript" (drop caps, serif Essence callouts, geological metaphors).

**Verdict:** The drop caps should be questioned. They pass every rule -- no soul violation, no convention violation -- but they introduce visual complexity without semantic purpose. The page would be more disciplined without them.

### CHALLENGE 5: TOC Anchor Navigation Fails (LOCKED -- ESC-002 Violation)

This is the most severe finding. When a reader clicks a Table of Contents link, the browser jumps to the anchor position. If the page uses scroll-reveal animations (IntersectionObserver-based opacity transitions), the content at the anchor position may not have been "revealed" yet because the scroll event that triggers the IntersectionObserver never fires for the intervening content. The result: the reader lands on a blank screen.

This was observed directly: clicking "03 Token Reference Cards" in the TOC navigated to #s3 but produced a completely empty viewport. The content is in the DOM (opacity 1, visibility visible, display block per computed styles), but the visual rendering shows nothing.

This is not a CHALLENGEABLE convention issue. It directly violates ESC-002 from the lock sheet: "Scroll-reveal: initial CSS = VISIBLE, JS MAY add hidden." If the initial CSS makes elements visible and JS adds the hidden state, then anchor navigation to un-scrolled content will show blank pages because the JS has hidden the content but the IntersectionObserver has not yet revealed it.

**Severity:** CRITICAL. The primary navigation mechanism for a 16,000+ tall page sends readers to invisible content.

---

## From-Scratch Assessment (PA-27)

### Would I Design It This Way?

**What works exceptionally well:**

1. **The compound sequencing.** Eight sections, each using a different axis pattern, with the compound effect emerging through scroll time -- this is the crown jewel of the CD stage, and it works. The reader FEELS the pattern changes even without knowing what Spiral, Z-Pattern, Bento, F-Pattern, Choreography mean. Section 1 (Spiral/Geological) feels contemplative. Section 2 (Z-Pattern/Pulse) feels conversational. Section 3 (Bento/Islands) feels like a reference card. This is the proof that the combination theory produces real perceptual effects.

2. **The TOC as a map.** Showing the axis pattern label next to each section title transforms the TOC from a boring list into a visual rhythm map. The reader can see SPIRAL, Z-PATTERN, BENTO, F-PATTERN, Z-PATTERN, BENTO, CHOREO, SPIRAL and immediately grasp that the page has variety and structure. This is the best TOC in the entire exploration set.

3. **The callout family.** Essence (serif italic, blue), Core Abstraction (blue header, italic body), Gotcha (coral warning), Tip (green helpful), Challenge (deep purple provocation) -- the callout family is well-differentiated and each type carries distinct semantic weight. They punctuate the prose without overwhelming it.

4. **Section 2's Q&A accordion structure.** The "Why border-radius: 0?" / "Why no box-shadow?" / "Why Instrument Serif?" pattern is natural, conversational, and matches the Z-Pattern axis label. The reader asks, the section answers. This is the strongest structural alignment between content and axis pattern on the entire page.

**What I would change:**

1. **Kill the scroll-reveal animations entirely.** A 16,000-tall tutorial page that hides content until scrolled-to is hostile UX. The progressive enhancement convention (ESC-002) exists precisely to prevent this. Either make all content visible by default and use animations only as enhancement, or remove animations from a tutorial page where readers will skip around via TOC. The current implementation makes the TOC dangerous.

2. **Merge Sections 6 and 7.** "Auditing for Compliance" and "Deploying Your Page" are both about verification and shipping. The current split forces an unnecessary transition between two conceptually adjacent activities. A single "Ship It: Audit, Build, Deploy" section using Choreography (hub-spoke between audit domains and deployment stages) would be tighter and more natural.

3. **Vary the section gap sizes.** Instead of uniform breathing zones, use the spacing scale to create a page-level crescendo: tight gaps early (building momentum), wide gap before Section 5 "Building" (the dramatic centerpiece), tight through Section 6-7 (maintaining urgency), and a wide gap before Section 8 "What Comes Next" (reflection). This would make the page-level density wave match the tutorial arc.

4. **Make the first bento grid wider.** Section 3's Token Reference Cards are the most "reference-like" content on the page. They should feel spacious, like cards laid out on a desk. Currently they feel like a compressed grid squeezed into the prose-optimized container. Even extending the grid 10-15% beyond the prose width would create the perceptual shift the ISLANDS density demands.

5. **Remove drop caps.** They add visual decoration without semantic purpose. The section headers are strong enough landmarks.

### Is the Layout Serving the Content?

Mostly yes. The eight-section tutorial arc flows naturally from philosophy (why) through practice (how) to deployment (ship). The axis pattern choices match the content modes well. The layout serves the content in every section individually.

The layout CONSTRAINS the content in two places: (a) the bento grids want more horizontal space than the prose container gives them, and (b) the uniform section gaps prevent the page from having a perceptible narrative arc at the macro level.

### Does the Section Sequencing Feel Natural?

Yes, with one exception. The sequence Spiral -> Z-Pattern -> Bento -> F-Pattern -> Z-Pattern -> Bento -> Choreography -> Spiral creates a satisfying envelope (Spiral bookends) with variety in the middle. The only awkward transition is Section 4 (F-Pattern) to Section 5 (Z-Pattern). Section 4 teaches about pattern selection (meta-level) and Section 5 teaches actual building (concrete-level). The shift from "thinking about patterns" to "writing code" is strong enough that the axis pattern change (F -> Z) feels natural, but the transition bridge between them carries a paragraph that tries to do too much summarizing.

---

## Fragility Map (PA-28)

| Width Range | Status | What Breaks |
|---|---|---|
| Wide (1440+) | ROBUST | No issues. Content reads well, generous margins, bento grids fit comfortably. The corridor of dead space on both sides is aesthetic, not structural. |
| Large (1200) | ROBUST | Container narrows gracefully. All layouts intact. No overflow, no cramping. |
| Medium-Large (1024) | ROBUST | Content fills available space well. TOC axis labels still aligned. Bento grids still multi-column. |
| Medium (900) | ROBUST | Solid narrowing. No evidence of collapse or overflow. This is a non-standard breakpoint and nothing breaks here. |
| Medium-Small (768) | ADEQUATE | Expected collapse point for complex grids. Due to Playwright DPR scaling (0.667 on Retina), true CSS behavior at this breakpoint could not be visually verified, but DOM measurements show container still wider than viewport (DPR-adjusted). Need manual browser testing at true 768 CSS width. |
| Small (600) | ADEQUATE | Content narrows well. Single-column layout. Code blocks may need horizontal scroll at true CSS 600. TOC still readable with axis labels. |
| Narrow (480) | ADEQUATE | Bento grid 0 (Section 3 Token Reference Cards) overflows container by approximately 37 units. Table in Section 4 overflows within scrollable container (correct behavior). Body has slight horizontal overflow from bento grid. Page still readable but not perfectly contained. |
| Very Narrow (320) | FRAGILE | Bento grid overflow persists. Decision matrix table extends well beyond viewport (271 units excess) but is within a scrollable container. Body horizontal overflow confirmed. The h1 title at the larger CD-006 heading size feels dominant -- it consumes significant vertical space relative to the narrow viewport. |

---

## Screenshot Evidence

| Filename | Width | What It Shows |
|---|---|---|
| CD-006-1440-top.png | Wide | Header, TOC, Section 1 opening -- well-composed, confident |
| CD-006-1440-full.png | Wide | Full page at wide -- shows overall proportions and section distribution |
| CD-006-1200-top.png | Large | Graceful narrowing, no issues |
| CD-006-1024-top.png | Medium-Large | Solid responsive behavior |
| CD-006-900-top.png | Medium | Non-standard breakpoint, no breakage |
| CD-006-768-top.png | Medium-Small | Content adapts, DPR scaling affects measurement |
| CD-006-600-top.png | Small | Narrowed single-column, readable |
| CD-006-480-top.png | Narrow | Bento overflow begins to show |
| CD-006-320-top.png | Very Narrow | Narrow mobile -- title dominant, content compressed but readable |
| CD-006-1440-s3-clicked.png | Wide | **CRITICAL**: Blank screen after clicking TOC link to Section 3 |
| CD-006-1440-between-s2-s3.png | Wide | Shows transition zone between Section 2 and 3 |

---

## Overall Fragility Rating: ADEQUATE

The page is structurally sound across the standard breakpoint range. It does not shatter at any width. The bento grid overflow at very narrow viewports is minor -- it causes a small horizontal scroll but does not destroy readability. The decision matrix table overflows gracefully within its scrollable container.

The critical fragility is not responsive -- it is functional: **TOC anchor navigation produces blank screens due to scroll-reveal animation conflict**. This alone prevents a ROBUST rating. A tutorial page that cannot be navigated by its own table of contents is fundamentally broken as a user experience, regardless of how polished the visual design is at every breakpoint.

### How Could Someone Make This Terrible While Passing Every Rule?

The scroll-reveal animation finding answers this question directly. Someone could:

1. Add scroll-reveal animations to every element (passes all soul rules -- no border-radius, no box-shadow, no forbidden fonts)
2. Use IntersectionObserver to set initial opacity to 0 via JS (technically satisfies ESC-002 because the CSS initial state is visible)
3. Make the TOC link to anchor IDs within hidden-by-JS sections
4. Result: a page that passes every static audit but is navigationally broken

This exploit reveals a gap in the rule system: **the rules audit static properties (CSS values, DOM structure, color compliance) but do not audit interactive behavior (navigation, scroll-triggered state, anchor functionality)**. A page can be soul-compliant, convention-compliant, and combination-grammar-compliant while being functionally unusable.

### Convention Challenges Summary

| Challengeable Item | Challenged? | Verdict |
|---|---|---|
| Page length target (12,000-15,000) | YES | Slightly over at 16,264 (8.4%). Not critical but could be tighter. |
| Spacing token values | YES | Uniform section gaps flatten the page-level density wave. |
| Gestalt aliases | NO | Semantic grouping matches perceptual grouping within sections. |
| Weight Balance ratios | NO | Component mix feels balanced. |
| Drop caps (EXT-CREATIVE-005) | YES | Decorative without semantic purpose. Should be questioned. |
| Solid offset (EXT-CREATIVE-001) | NO | Offset effect is subtle and consistent where used. |
| Container max-width (1100) | PARTIAL | Works for prose, constrains bento grids. Defensible trade-off. |
| Prose max-width (70ch) | NO | Line lengths feel comfortable at all tested widths. |
| Callout label size | NO | Labels are appropriately sized relative to body text. |
| CD-006 h1 at 48 (3rem) | PARTIAL | Feels right at wide/medium. Dominant at very narrow. |

---

## Breathing Zone Analysis

- Total page height: 16,264
- Content height (8 sections): 13,622
- Total gap/transition space: 1,548
- Header + TOC: 878
- Footer: 216
- **Breathing zone percentage: 16.2%** (within convention 15-25% range, near the floor)

The breathing budget is tight. The page prioritizes content density over whitespace. For a tutorial page, this is the correct direction -- readers come to learn, not to admire the spacing. But the uniform gap sizes within that tight budget mean the page never truly "exhales." It maintains a consistent moderate tension throughout rather than alternating between tight (momentum) and loose (reflection).

# AD-005 Adversarial Findings — Choreography

**Auditor:** Adversarial Agent (Red Team)
**Page:** AD-005-choreography.html
**Date:** 2026-02-10
**Viewports tested:** 1440, 1100, ~1000 (Playwright min), 768, 500 (via reload), 320 (via reload)
**Scroll protocol:** Full scroll-through at each viewport with screenshots at each position

---

## PA-26: Is Any Convention CAUSING a Visual Problem?

### CHALLENGE-01: The "Only 3 Spokes" Convention Creates Structural Imbalance (MEDIUM)
**Convention challenged:** Hub grid shows 7 territory tiles (Featured + A through F), but the page only develops 3 of them as spokes (CSS Transition Choreography, Diagonal Section Dividers, Responsive Collapse). Territories C (WAVE Oscillation), D (Progress Indicators), and F (Scroll-Triggered Reveals) are promised in the hub establishing shot but never delivered as spokes. The hub-spoke structure therefore over-promises and under-delivers. The "establishing shot" convention — show everything first — is actively harmful when most territories are dead ends.

**Perceptual impact:** The reader scans the hub grid and mentally maps 7 destinations. After descending into 3 spokes, the page jumps to synthesis without visiting 4 territories. The choreographic "journey" feels truncated. The WAVE density oscillation the page describes is ironically absent from its own structure — there is no return to the hub between spokes, no "ascending to overview" before re-descending.

**Lock status:** CHALLENGEABLE — hub tile count and spoke count are builder choices (not locked by research). The hub-spoke pattern itself is locked (AD-F-017), but the specific tile-to-spoke ratio is not.

### CHALLENGE-02: Spoke Content is Overwhelmingly Reference-Manual, Not Choreographic (MEDIUM)
**Convention challenged:** The page DESCRIBES choreographic concepts (shot progression, density waves, kinetic equivalence) but its actual content structure is flat reference material — tables of allowed/prohibited properties, code blocks, constraint lists. The content teaches about choreography through the least choreographic possible format. The convention of including "allowed vs prohibited" tables in every spoke forces each spoke into a dry reference pattern rather than demonstrating the concepts it discusses.

**Perceptual impact:** Reading the spokes feels like consulting a specification document, not experiencing a choreographed journey. The page talks about "the absence of movement creating the richest experience" while delivering wall-of-text-plus-table after wall-of-text-plus-table. The Essence callouts (which ARE beautifully choreographic in their italic serif voice) are islands of lived demonstration surrounded by reference material.

**Lock status:** CHALLENGEABLE — internal cell layout templates are builder choices (Lock sheet: "builder creativity within convention").

### CHALLENGE-03: The "Axis Direction Change" Interstitial Creates Dead Space (LOW)
**Convention challenged:** The dark interstitial bands labeled "AXIS DIRECTION CHANGE / Descending into Detail" and "Ascending to Synthesis" occupy significant vertical space (roughly 200-250px each) with minimal content — just two lines of centered text on a dark background. The convention of marking axis transitions with full-bleed dark bands creates breathing zones that are more gap than breath.

**Perceptual impact:** These interstitials feel like loading screens or chapter breaks in a book that has only 3 chapters. At narrow viewports they are proportionally larger relative to content. The "descending/ascending" metaphor is intellectual rather than perceptual — the reader is always scrolling down regardless of the metaphorical direction.

**Lock status:** CHALLENGEABLE — transition timing/spacing are challengeable per lock sheet ("Breathing zone budget >= 15% of page height" and "Transition grammar: Smooth/Bridge/Breathing" are auditable execution aspects).

### CHALLENGE-04: The 4-Column Hub Grid at 768px is Unreadable (HIGH)
**Convention challenged:** The lock sheet states "Grid collapse at 768px (binary rule)" for the mobile breakpoint, but at exactly 768px viewport width the hub grid is STILL rendered as a 4-column grid. The territory tiles are squeezed to approximately 160px wide each, making the serif headings ("Scroll-Triggered Reveals", "Responsive Collapse") wrap into 3-4 lines and the description text becomes compressed into narrow columns that are uncomfortable to read. The convention of a binary 768px collapse is supposed to trigger single-column at this width, but the implementation appears to use the breakpoint inconsistently — 768px is still desktop layout, not mobile.

**Perceptual impact:** At 768px the hub grid looks cramped and rushed. The "generous whitespace between tiles" that defines the sparse phase of the WAVE oscillation is gone — tiles are pressed together. The featured territory (2-column span) dominates while the remaining tiles are unreadably small.

**Lock status:** CHALLENGEABLE — "Grid collapse at 768px" is an explicit CHALLENGEABLE convention that "Can be questioned if content works better at a different breakpoint."

---

## PA-27: If Designing From Scratch, Would You Design It This Way?

### FROM-SCRATCH Assessment

**What I would keep:**
1. **The hub-spoke concept itself.** The establishing shot / close-up / synthesis arc is genuinely effective as a reading progression. It maps to how people naturally explore complex topics.
2. **The Essence callouts.** The italic serif voice in the Essence boxes creates a genuine tonal shift that demonstrates choreographic variety within the page. These are the best-executed elements.
3. **The dark header.** Clear, authoritative, sets context immediately. The red bottom border is a confident structural accent.
4. **Code block styling.** Dark blocks with syntax coloring are readable and create strong visual anchoring within spokes.

**What I would change:**

1. **ELIMINATE DEAD TERRITORY TILES.** If only 3 territories become spokes, the hub should show only 3 tiles (or at most 4 with a "Further Reading" collected tile for the rest). The current 7-tile grid promises a journey it does not deliver. Designing from scratch, I would commit to the actual scope of the page: 3 deep spokes, not 7 shallow promises.

2. **DEMONSTRATE CHOREOGRAPHY, DON'T JUST DESCRIBE IT.** The page about choreography should BE choreographic. Instead of a table listing "allowed transitions," I would show the transitions working — an interactive or at minimum a visually stepped demonstration. The code examples could be paired with visual results rather than sitting as inert reference blocks. If the identity forbids animation, then the "static structural arrangement that choreographs attention" should be more visible in the page's own layout variety.

3. **RETURN TO HUB BETWEEN SPOKES.** The page describes a "hub(sparse) -> spoke(dense) -> hub(sparse)" WAVE but its own structure is "hub -> spoke -> spoke -> spoke -> synthesis." There is no return to the hub. The axis direction change interstitials (dark bands) are stand-ins for hub returns, but they carry no hub content — no re-orientation, no reminder of what territories remain. I would insert brief hub re-appearances between spokes showing "You explored 1 of 3. Territory B awaits."

4. **VARY THE SPOKE INTERNAL STRUCTURE.** All three spokes follow the same pattern: prose introduction, then a table, then a code block, then a callout, then more prose. The choreographic variety the page advocates is absent from its own construction. I would give each spoke a distinct visual structure — one could use a comparison layout, another could use a progressive disclosure accordion, a third could use a narrative timeline.

5. **REDUCE TABLE DENSITY IN FAVOR OF VISUAL HIERARCHY.** The tables (allowed transitions, prohibited transitions, WAVE phases, usage constraints, breakpoint grid) constitute the densest content on the page. At narrow viewports, tables become the primary source of readability failure (columns truncate, text wraps mid-word). A page about visual choreography should minimize tabular data in favor of visually structured information.

---

## PA-28: Fragility Map — How Could This Page Look Terrible While Passing Every Rule Check?

### Fragility Test Results by Viewport

| Viewport | Fragility Level | Primary Failure Mode |
|----------|----------------|---------------------|
| 1440px   | LOW            | Page functions as intended. Wide content area makes tables comfortable. |
| 1100px   | LOW            | Grid correctly collapses to 2-column. Content remains readable. |
| ~1000px  | LOW-MEDIUM     | Tiles at 2-column still comfortable. Tables start to feel wide. |
| 768px    | HIGH           | 4-column grid is cramped. Convention says it should collapse but it does not. |
| 500px    | MEDIUM         | Single-column grid works. Tables truncate columns off right edge. |
| 320px    | HIGH           | Tables severely truncated (CONSTRAINT column loses 40%+ of text). Code blocks overflow. |

### FRAGILITY-01: Tables Are the Primary Fragility Vector (HIGH)
**The attack:** A rule-compliant page could have 8+ table columns with long technical terms. Every cell would use the correct font, correct size, correct color, correct border category. The page would pass soul compliance (no rounded corners, no shadows) while being completely unreadable below 768px because tables have no responsive strategy — they simply overflow or truncate.

**Evidence:** At 320px, the "Allowed Transition Properties" table truncates the CONSTRAINT column text ("Start AND..." becomes "Start AND...must be 1...persisten...elements...allowed fo...scroll-trig...entrance") and the USE CASE column is partially off-screen. At 500px the same table is already clipping. Every rule (font, color, border, spacing) passes while the content is unreadable.

**Severity:** HIGH — This is a real, observable fragility at narrow viewports, not theoretical.

### FRAGILITY-02: The Hub Grid Has No Intermediate Breakpoint (MEDIUM)
**The attack:** The hub grid jumps from 4 columns (>1440) to 2 columns (768-1440) to 1 column (<768). There is no 3-column state. At exactly the 2-column transition point, the featured territory tile (which spans 2 columns at desktop) and the regular tiles create an uneven grid rhythm. Someone could add more territory tiles (passing all rules) and the 2-column layout would create orphaned tiles at the bottom.

**Evidence:** At 1100px, the grid is 2 columns with the featured tile spanning full width. The 6 remaining tiles form 3 rows of 2. If a 7th regular tile were added, it would sit alone in a 4th row, creating asymmetry — while passing every convention.

### FRAGILITY-03: Callout Stacking in Spokes (MEDIUM)
**The attack:** Spoke 1 (CSS Transition Choreography) contains: an Establishing Shot callout, a Caution callout, and an Essence callout, plus two code blocks. The convention says "max 2 callouts per viewport" (DD-F-014, locked). At narrow viewports, the callouts stack more tightly. At 768px, I observed at least 2 callouts visible in a single viewport — approaching but not clearly violating the limit. A rule-compliant builder could add one more "Tip" or "Gotcha" callout to a spoke and create alarm fatigue while technically staying under the limit if the viewport is generous.

**Evidence:** The full page contains Establishing Shot, Caution, Essence (Spoke 1), Gotcha (Spoke 2), Tip (Spoke 3), Essence (Spoke 3), and Essence (Synthesis) — 7 distinct callouts across the page. None appeared to stack more than 2 per viewport at any width tested, but the proximity between the Caution and Essence callouts in Spoke 1 is tight.

### FRAGILITY-04: Scroll-Triggered Reveal Behavior Cannot Be Audited Visually (LOW)
**The attack:** The page describes and implements a scroll-triggered reveal pattern ("arriving wisdom") where elements start hidden and transition to visible once. Since this page is a static HTML document served from a file server (no JavaScript runtime observed), the reveal behavior cannot be tested perceptually. Someone could implement the reveal pattern incorrectly (replaying on scroll-out, using non-compliant transforms) and a visual audit would not catch it because the JavaScript is not executing.

**Evidence:** No scroll-triggered reveal animations were observed during any of the scroll-through sessions. All content appeared immediately. This suggests either: (a) the JS is not loaded, (b) progressive enhancement is working correctly (content visible without JS), or (c) the reveals fired instantly. Regardless, the claimed pattern cannot be adversarially verified through perceptual audit alone.

### FRAGILITY-05: The White-on-Cream Near-Invisibility Risk (LOW)
**The attack:** The synthesis section has a white background (rgb 255,255,255) while the page body background is warm cream (rgb 254,249,245). These are extremely close in value. If a builder used the zone background tokens correctly (zone-dense = white, zone-sparse = cream), the section boundaries become nearly invisible. The distinction between "in a section" and "between sections" depends on a 4-unit difference in the RGB red channel and a 10-unit difference in the green/blue channels. A reader with slight visual impairment or a miscalibrated monitor would see no zone boundaries at all.

**Evidence:** In screenshots, the synthesis section background appears visually identical to the surrounding cream. The full-page screenshot shows the transition from cream to white is barely perceptible. The zone-breathing token (FAF5ED) adds a third nearly-identical background, creating a 3-way near-match.

---

## Risk Assessment Summary

| ID | Finding | Severity | Lock Status | Recommendation |
|----|---------|----------|-------------|----------------|
| CHALLENGE-01 | Hub promises 7 territories, delivers 3 spokes | MEDIUM | CHALLENGEABLE | Reduce hub tiles to match actual spoke count |
| CHALLENGE-02 | Content is reference-manual, not choreographic | MEDIUM | CHALLENGEABLE | Vary spoke internal structure to demonstrate choreography |
| CHALLENGE-03 | Axis direction interstitials are dead space | LOW | CHALLENGEABLE | Add hub re-orientation content to interstitials |
| CHALLENGE-04 | 4-column grid at 768px is cramped | HIGH | CHALLENGEABLE | Implement the documented 768px collapse |
| FRAGILITY-01 | Tables truncate at narrow viewports | HIGH | N/A (fragility) | Add horizontal scroll or responsive table strategy |
| FRAGILITY-02 | No 3-column intermediate grid state | MEDIUM | N/A (fragility) | Consider 3-column breakpoint at ~1100px |
| FRAGILITY-03 | Callout proximity approaches stacking limit | MEDIUM | LOCKED limit | Monitor — currently compliant but barely |
| FRAGILITY-04 | Scroll-triggered reveals unverifiable | LOW | N/A (audit gap) | Requires JavaScript-enabled audit environment |
| FRAGILITY-05 | White/cream zone boundaries nearly invisible | LOW | LOCKED tokens | Acceptable given token compliance, but monitor |

**Overall adversarial assessment:** AD-005 is structurally sound and soul-compliant, but its greatest vulnerability is that it fails to practice what it preaches. A page about choreography should choreograph the reader's attention through varied structure, not describe choreography through uniform reference-manual formatting. The most actionable finding is CHALLENGE-04 (768px grid) which appears to be a genuine implementation gap against the documented convention.

---

## ADDENDUM: Second-Pass Adversarial (v2 — deeper source inspection)

**Method:** Full-page screenshot at 1440px, source code review of CSS responsive rules, scroll-through at 1440/1100/900/500px with viewport screenshots. Confirmed page height = 11,797px.

### ADV-V2-01: The 860px Container Definitively Defeats Choreographic Expression (HIGH, CHALLENGEABLE)

Choreography is the axis pattern MOST harmed by the 860px constraint. AD-005's identity depends on CONTRAST between wide views (establishing shot) and narrow focus (close-up detail). At a fixed 860px, there is no width modulation. The "cinematic shot progression" cannot express itself in a fixed-width tube.

By comparison: Z-Pattern works at 860px (Z-sweep is relative). F-Pattern works (left-margin anchoring). Bento Grid works (cells are container-relative). Spiral works (golden ratio scales). Only Choreography fundamentally requires spatial variation that 860px forbids.

If designing from scratch: the hub/establishing-shot should use a wider container (1100-1200px) to create actual panoramic contrast with the spokes, which could narrow to 700-860px for the "zooming in" effect.

### ADV-V2-02: Dark Code Blocks Override the WAVE Density Rhythm (MEDIUM, LOCKED — note only)

The code blocks create contrast ratios of approximately 15:1 against the page background, while the zone backgrounds (#FEF9F5 vs #FFFFFF vs #FAF5ED) differ by roughly 1.01:1. The reader perceives "cream, DARK BLOCK, cream, DARK BLOCK" — not the intended sparse-dense-sparse oscillation. This is worse in AD-005 than other explorations because AD-005's identity depends on smooth density transitions, which the code blocks shatter. All 6 prior fresh-eyes auditors independently flagged this.

Lock status: LOCKED by AD-CONV S3. Noting perceptual impact per lock-sheet decision note #5.

### ADV-V2-03: Source Code Confirms Responsive Rules Are Correctly Implemented (CORRECTION to CHALLENGE-04)

Source inspection shows the CSS media queries are correctly structured: 4-col above 1440px, 2-col at 1440px and 1024px breakpoints, 1-col at 768px. The 768px breakpoint DOES trigger single-column layout. The earlier CHALLENGE-04 finding about 4-column grid at 768px may have been a Playwright viewport-resize artifact (resize without page reload does not always trigger CSS media query re-evaluation). The responsive implementation appears correct in source. However, the 1024px and 1440px breakpoints both produce the identical 2-column layout — a missed opportunity for a 3-column intermediate state.

### ADV-V2-04: Breathing/Transition Zone Stacking Produces Multi-Viewport Dead Zones (HIGH, CHALLENGEABLE)

At 1440px, scrolling from position ~3500px to ~4500px reveals approximately 1000px of near-empty space (code block bottom, Essence callout, then transition zone). Similarly, between Spoke 2 and the ascending transition zone (~position 8000-9000), another 1000px+ gap appears. These zones stack: spoke padding (48px top/bottom) + breathing zone (48px + 3px borders) + axis transition (80px padding + clip-path dead area). Combined, the inter-spoke dead zones approach 2 full viewports of near-empty content at 900px viewport height.

The breathing budget convention (15% of page height = ~1770px) may be dramatically exceeded. Rough estimate: total empty/transition space is 3000-4000px of the 11,797px page (~25-34%), well above the 15% minimum and into "reader thinks the page is over" territory.

Lock status: CHALLENGEABLE (breathing zone budget, transition zone height both challengeable per lock-sheet).

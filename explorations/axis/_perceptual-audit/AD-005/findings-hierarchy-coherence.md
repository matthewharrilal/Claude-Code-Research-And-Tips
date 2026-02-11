# Findings: Hierarchy, Coherence, and Cross-Page — Auditor D (Round 2)

**Page:** AD-005 Choreography
**Auditor:** D (Hierarchy + Coherence + Cross-Page)
**Viewports Tested:** 1440px, 1024px, 768px
**Scroll Protocol:** Complete scroll-through at 1440px with 720px increments (16 positions). Screenshots taken at each step. 768px header and hub grid verified. 1024px evaluated via accessibility snapshot. Comparison pages AD-006 and AD-003 visited at 1440px.
**Sibling Pages Visited:** AD-006 (Compound), AD-003 (Bento Grid)

---

## PA-03: Does this feel like one designer made it, or three?

### 1440px
This feels like ONE designer working with confidence. The entire page shares a tight vocabulary: warm cream backgrounds, dark serif headings in an ornate typeface, clean sans-serif body text, dark code blocks with colored syntax highlighting, and colored left-border callouts (blue for context, amber/coral for warnings, green for tips, purple for essence). The territory tile grid, spoke sections, breathing zones, and synthesis tables all speak the same visual language.

One subtle perceptual shift exists: the hub section is SPATIAL (cards, grid, horizontal scanning) while the spokes are TEXTUAL (paragraphs, tables, code blocks, vertical reading). This is intentional — the whole point of the choreography is this density oscillation — but the shift is perceptible. It feels like the same designer working in "overview mode" vs "detail mode," not like a different hand.

**Verdict:** One designer. Strong coherence.

### 1024px
Same impression. Identical visual behavior.

### 768px
The single-column card stack at 768px slightly homogenizes the hub vs spoke distinction since both become vertical reading. The overall one-designer impression strengthens at narrower widths because the layout variety decreases.

**Verdict across all viewports: PASS — unified authorship.**

---

## PA-12: Do your eyes flow smoothly from section to section, or do they get stuck?

### 1440px
Eye flow is MOSTLY smooth with SIGNIFICANT sticking points:

**Smooth transitions:**
- Header to hub section: red accent rule and generous whitespace guide the eye naturally downward into "The Hub: Establishing Shot."
- Hub callout to territory grid: the progress bar provides a horizontal anchor, and the grid below draws the eye immediately.
- Territory grid to first "Axis Direction Change" interstitial: the centered label with italic subtitle creates a ceremonial pause. The slightly different background signals a mode shift. This is the choreographic direction change working as designed.
- Within each spoke: breadcrumb, progress bar, heading, prose, table, code, callout — the rhythm is consistent and predictable.
- The Essence callouts provide natural reflective pauses before the next section begins.

**Sticking points:**
1. **Spoke 1 to Density Wave section:** No axis direction change interstitial exists here. The Essence callout of Spoke 1 is followed directly by the "Density Wave" heading. The ceremonial transition established between hub and spoke 1 is absent. The eye expects a breathing zone and finds none.

2. **Massive blank stretches within spokes:** During the scroll-through, I encountered 3-4 FULL VIEWPORTS of empty cream background scattered throughout the spoke sections. These voids are not breathing zones (which have intentional labeling or subtle visual cues). They are simply empty space with no content. The eye falls into a void and must scroll through hundreds of pixels of nothingness to find the next content element. This is the most severe flow disruption on the page.

3. **Synthesis section entry:** The synthesis section lacks the ceremonial framing the spokes received (breadcrumb, progress bar). It begins with a heading directly after Spoke 3's Essence callout. The reader gets no signal that spokes are over and synthesis has begun.

**PA-12 is critical for a choreography page.** The page's defining concept is directional transitions and density oscillation. Blank voids and missing transition ceremonies directly undermine this identity.

### 1024px
Same observations.

### 768px
Same observations. The blank stretches are even more noticeable at 768px because the content column is narrower and the empty cream expanse dominates the viewport completely.

**Verdict: MIXED — smooth within sections, disrupted between them. Blank voids are a CRITICAL issue.**

---

## PA-13: Is there a clear visual ending, or does the page just stop?

### 1440px
The page has NO visual ending. It is worse than "just stopping" — it has an ANTI-ending.

The last visible content element is a Fractal Self-Similarity table (DD-F-006) showing five scales (Navigation, Page, Section, Component, Character). After this table, there is empty cream background. No final Essence callout. No return-to-hub link. No "end of exploration" footer. No closing ceremony.

**CRITICAL BUG:** Scrolling beyond the visible content triggers SILENT automatic navigation to AD-001 (Z-Pattern Axis). The URL changes from AD-005-choreography.html to AD-001-z-pattern.html without any user-visible navigation element being clicked. This was confirmed across FIVE separate attempts. The reader is ejected from the page they were reading without warning or consent.

This is the opposite of a clear ending. The page choreographs its entrance with elaborate ceremony (establishing shot, territory overview, progress bars, axis direction change interstitials) and then ejects the reader out a trapdoor at the bottom.

The contrast between the meticulous opening choreography and the abrupt auto-navigation exit is the most significant coherence failure on this page.

### 1024px
Same behavior.

### 768px
Same behavior.

**Verdict: FAIL — no ending. Auto-navigation bug silently redirects reader to a different page.**

---

## PA-16: Pick two elements that should look identical. Do they?

### Test 1: Territory Tiles (Territories A through F)

Six non-featured territory tiles should look identical in structure:
- All six share the same card structure: label line ("TERRITORY A"), title in ornate serif, description paragraph, monospaced metric line at bottom.
- All six have consistent border treatment (thin neutral border, sharp corners).
- All six have the same cream background.
- Internal typography is consistent across all six.

**Verdict: PASS.** The Featured Territory tile is intentionally distinct (larger, red left border) — this is deliberate hierarchy, not inconsistency.

### Test 2: Breadcrumb Navigation Across Spokes

Three spokes should have identical breadcrumb structure:
- Spoke 1: "Hub > CSS Transition Choreography" with progress segment 1 highlighted
- Spoke 2: "Hub > Diagonal Accents" with progress segment 2 highlighted
- Spoke 3: "Hub > Responsive Collapse" with progress segment 3 highlighted

The breadcrumb format, typography, and progress bar treatment are consistent across all three.

**Verdict: PASS.**

### Test 3: Callout Types

Essence callouts (purple left border, italic text) appear in Spoke 1, Spoke 3, and Synthesis. All three use the same visual treatment: purple left border, cream background, "ESSENCE" label in purple capitals, italic serif body text.

Caution callout in Spoke 1, Gotcha callout in Spoke 2, Tip callout in Spoke 3 — all use the same structural pattern (colored left border, label, body text) with their respective accent colors.

**Verdict: PASS.** Callout vocabulary is visually consistent throughout.

### Test 4: Code Blocks

Multiple dark-background code blocks appear across spokes 1, 2, and 3. All use the same dark background color, same syntax highlighting scheme (keywords in warm colors, strings in muted tones, comments in gray), same monospaced font, same generous internal spacing.

**Verdict: PASS.**

**Overall PA-16: PASS — all tested element pairs are consistent.**

---

## PA-24: Does this page feel like it belongs in the same family as other AD pages?

### Comparison with AD-006 (Compound)

**Shared family traits:**
- Identical dark header bar with exploration number, axis label, "V1 ENRICHED" badge
- Same warm cream page background
- Same ornate serif for headings, same sans-serif body font
- Same callout vocabulary (Essence, Caution, Tip, Context, Gotcha, Discovery)
- Same table styling (uppercase meta headers, body-sized data rows)
- Same code block treatment (dark background, syntax highlighting)
- Same red accent color for progress indicators and featured elements

**Differences (content-appropriate):**
- AD-006 has a floating axis indicator bar at the top ("Axis: COMPOUND / Density: FRACTAL / Org: CREATIVE") that AD-005 lacks. AD-006 is a compound page showing multiple patterns, so persistent context makes sense.
- AD-006 uses section numbering ("Section 01 — Z-Pattern Overview"). AD-005 uses no numbering.
- AD-006 has a bento-style pattern catalog with varied cell sizes. AD-005 uses uniform territory tiles.
- AD-006 has collapsible details/summary sections. AD-005 has none.
- AD-006 uses a 2x3 pattern echo grid with miniature visual diagrams. AD-005 has no equivalent visual index.

**Verdict: SAME FAMILY.** The core visual DNA (header, typography, callouts, tables, code, palette) is unmistakably shared. Differences are appropriate to content type.

### Comparison with AD-003 (Bento Grid)

**Shared family traits:**
- Identical header bar format
- Same warm cream background
- Same typography system
- Same callout vocabulary
- Same code block styling

**Differences (content-appropriate):**
- AD-003 is organized as a task-based tutorial with difficulty tiers (Beginner, Intermediate, Advanced) and time estimates ("~5 min"). AD-005 is organized as a hub-spoke exploration. These are fundamentally different organizational modes.
- AD-003 uses collapsible details/summary elements extensively. AD-005 has none.
- AD-003 has horizontal rule separators between sections. AD-005 uses axis direction change interstitials.
- AD-003 includes a full Research Application Record at the end (10+ subsections). AD-005's synthesis is shorter.

**Verdict: SAME FAMILY, DIFFERENT DIALECT.** AD-003 speaks "tutorial," AD-005 speaks "exploration," but both use the same design language foundation. The family cohesion from shared palette, typography, and component vocabulary is strong.

**Overall PA-24: PASS — strong family resemblance across all three pages.**

---

## PA-25: If you covered the header, could you identify which design system this belongs to?

### 1440px
**Yes, within seconds.** Even without the header, these elements are distinctive enough to identify the design system:

1. **Callout vocabulary** — Thick colored left borders (blue, amber, green, purple) with uppercase meta labels (ESTABLISHING SHOT, CAUTION, TIP, ESSENCE, GOTCHA) and italic serif body text. This specific combination is highly distinctive and not a common web pattern.

2. **Typography trio** — Ornate serif italic for headings and callout text, clean sans-serif for body, monospace for code and metric lines. The italic serif headings are the most recognizable element.

3. **Absolute flatness** — Zero rounded corners anywhere. Zero shadows. Zero gradients. Zero hover-lift effects. The visual language is deliberately flat and print-editorial. This is unusual for web design and immediately narrows identification.

4. **Warm cream palette** — The specific off-white page background (warmer than paper white, cooler than beige) combined with the near-black header creates a distinctive tonal range.

5. **Territory tile grid** — Cards with monospaced metric lines ("6 patterns | 12 examples") arranged in a structured grid. The metric line format is a design system signature.

6. **Axis direction change interstitials** — Centered uppercase labels with italic serif subtitles on a transitional background. This is unique to this system.

**Verdict: IDENTIFIABLE.** The callout vocabulary and flat editorial aesthetic are the two strongest identifiers. Covering the header would not prevent identification.

### 1024px and 768px
Same verdict. Distinctive elements are all present and unchanged.

**Overall PA-25: PASS — design system is clearly identifiable without header.**

---

## Cross-Cutting Observations

### Hierarchy Strength
The page has a CLEAR four-level hierarchy: (1) Page header, (2) Hub overview with territory grid, (3) Spoke detail sections with breadcrumbs, (4) Synthesis with findings tables. This hierarchy is reinforced through:
- Typography scale changes between levels
- Background zone shifts (dark header > cream hub > spoke alternation > synthesis)
- Structural markers (territory grid at level 2, breadcrumbs at level 3, findings tables at level 4)
- Density oscillation (sparse hub > dense spokes > reflective synthesis)

### CRITICAL: Auto-Navigation Bug
The most significant finding from this audit is the auto-navigation to AD-001 when scrolling past the page's content boundary. This was not detected in Round 1. The behavior occurs silently — no navigation element is clicked, no loading indicator appears, the URL simply changes. This violates fundamental user expectations about page boundaries.

### CRITICAL: Blank Viewport Stretches
Multiple full-viewport empty cream areas exist between content sections in the spokes. These are not breathing zones (which are intentional and labeled). They are structural voids that disrupt the reading flow. A reader scrolling through the page will encounter 3-4 screens of absolute nothingness scattered throughout. For a page about choreographic rhythm, these arrhythmic voids are especially damaging.

### Inconsistent Transition Ceremony
The page establishes axis direction changes as ceremonial transitions but applies them inconsistently:
- Hub to Spoke 1: Full interstitial ("Descending into Detail") — PRESENT
- Spoke 1 to Density Wave interlude: No interstitial — MISSING
- Density Wave to Spoke 2: No interstitial — MISSING
- Spoke 2 to Spoke 3: Full interstitial ("Ascending to Synthesis") — PRESENT
- Spoke 3 to Synthesis: No interstitial — MISSING

The page has 2 interstitials where its own choreographic logic suggests 4-5 should exist.

### Page Ending
The page opens with elaborate ceremony and closes with none. The Fractal Self-Similarity table is the last content element, functioning as an appendix rather than a conclusion. No footer, no return navigation, no closing Essence. The auto-navigation bug then ejects the reader entirely.

---

## Summary Scorecard

| Question | 1440px | 1024px | 768px | Overall |
|----------|--------|--------|-------|---------|
| PA-03 (One designer?) | One designer, strong coherence | Same | Same | **PASS** |
| PA-12 (Eye flow) | Smooth within sections; blank voids + missing transitions between | Same | Same | **MIXED** |
| PA-13 (Clear ending?) | No ending; auto-navigation bug ejects reader | Same | Same | **FAIL** |
| PA-16 (Identical elements) | All tested pairs consistent | Same | Same | **PASS** |
| PA-24 (Same family?) | Strong family resemblance with AD-006 and AD-003 | Same | Same | **PASS** |
| PA-25 (Identifiable system?) | Immediately identifiable from callouts + flatness | Same | Same | **PASS** |

**Overall Assessment:** AD-005 has strong visual coherence, distinctive design system identity, and clear internal hierarchy. The four PASSes reflect genuine design quality. The two significant issues are:

1. **CRITICAL — Auto-navigation bug:** Scrolling past the page content silently navigates to AD-001. This is a functional defect, not a design choice.

2. **CRITICAL — Blank viewport voids:** 3-4 full viewports of empty space scattered through the spokes break the reading rhythm that the page's entire concept depends on.

3. **HIGH — Missing transition ceremonies:** Only 2 of 4-5 expected axis direction change interstitials are present, undermining the page's choreographic identity.

4. **HIGH — Abrupt ending:** Elaborate opening ceremony contrasted with zero closing ceremony.

# Perceptual Audit Report -- Auditor B

**Page:** Steve Yegge and Gas Town
**Viewports examined:** 1440px, 1024px, 768px (all 20 screenshots reviewed)
**Auditor context:** Zero knowledge of build process, tools, or intent

---

## PA-02: Is any text uncomfortable to read? Point to the worst spot.

**Answer:** PARTIALLY

**What I see:**

The body text throughout the page is generally comfortable to read -- good size, warm cream background, soft dark text, generous line height. However, there are specific spots where reading comfort degrades:

1. **The dark-background code blocks (all viewports):** Text inside the terminal/code blocks (e.g., the "Communication Flow" diagram in Zone 2, the "Key Beads Commands" block in Zone 3, the startup sequence and daily workflow blocks in Zone 4) uses small, light-on-dark monospaced text. The text appears noticeably smaller than the surrounding body copy. At 768px, these blocks become particularly dense -- the communication flow diagram with its ASCII-art pipes and brackets requires careful visual parsing. The colored syntax elements (orange/amber highlights for commands like `--approve`) help somewhat, but the base text is still small and tightly packed.

2. **The footer/closing dark block:** At the very bottom of the page, the dark block containing "SOURCE MATERIAL," "CLOSING," and "PROVENANCE" sections uses small, low-contrast text -- light gray on dark background. This is the single worst spot on the page. The text appears to be a smaller size than body copy, and the contrast feels lower than the header area's light-on-dark text. At 768px this is especially strained.

3. **The "ESSENCE" and other callout-box quoted text:** The italic serif text inside the callout boxes (e.g., "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks.") is readable but the italic rendering at this size combined with the decorative font makes it slightly less crisp than the body text. Not painful, but noticeably less comfortable than the surrounding paragraphs.

4. **Stat card labels at 768px:** The four stat cards ("LINES CODED," "LINES READ," "BEADS SIZE," "ANNUAL SPEND") have small uppercase labels above their values. At 768px these labels are quite small and closely spaced between the four cards.

**Worst spot:** The footer dark block with "SOURCE MATERIAL" / "CLOSING" / "PROVENANCE" -- smallest text, lowest contrast, hardest to read across all viewports.

**Severity:** CONDITIONAL
The main body text is excellent. The problem spots are confined to code blocks (where density is somewhat expected) and the footer metadata (low-priority content). If the footer text were bumped up slightly in size or contrast, this would be fully shippable.

---

## PA-06: Are any words stacking vertically, one per line, in any column?

**Answer:** NO

**What I see:**

I examined every multi-column layout across all three viewports:

- **Header metadata row (COMPLEXITY / ROLES / MEMORY / DAILY COST / WAVE):** At 1440px, all five items sit comfortably in a single horizontal row with values beneath labels. At 768px, the same five items still fit in one row -- the labels are spaced more tightly but each value ("Level 7," "8 Specialized," "Beads (225K Go)," "$50-200," "6 (Agent Fleets)") reads as a normal horizontal phrase, not stacked single words.

- **Role cards in Zone 2 (Mayor, Deacon, Dogs, Refinery, etc.):** At 1440px these appear as a two-column grid. At 768px they stack into a single column. In neither case do individual words stack vertically. Each card has its role name as a heading, then a description paragraph, then a model line -- all flowing normally.

- **Stat cards in Zone 1 (LINES CODED ~1M, LINES READ ~0, BEADS SIZE 225K Go, ANNUAL SPEND ~$80K):** At 1440px these are four side-by-side cards. At 768px they remain in a four-across row. The labels are short enough that no word stacking occurs.

- **Tables (career history, 6 Waves, Memory Model Architecture, comparison tables, etc.):** All tables maintain their column structure at all viewports. The 768px tables are tighter but text wraps within cells normally -- no single-word-per-line stacking visible.

- **Failure/recovery cards in Zone 4:** At 1440px these are in a two-column grid. At 768px they appear to stack to single column. No vertical word stacking within any card.

- **"The Full Spectrum" comparison table at 768px:** This is the tightest table. At 768px the columns (ORCHESTRATOR, COMPLEXITY, COST/DAY, BEST FOR) compress, and cell content wraps -- but the wrapping produces 2-3 word phrases per line, not single isolated words.

No instance of single-word vertical stacking was found at any viewport.

**Severity:** WOULD-SHIP

---

## PA-07: Can you read the longest paragraph without losing your place?

**Answer:** YES

**What I see:**

The longest paragraphs I can identify are in the body text sections. Examining them:

1. **Zone 1 opening paragraph (Steve Yegge bio):** "Steve Yegge is a 40-year software development veteran whose career arc -- from Amazon early employee to Google senior engineer to full-time AI development advocate -- gives him unique credibility for building Gas Town. He has vibe-coded roughly one million lines of code in 2025 alone, built Beads (225,000 lines of Go), and built Gas Town using Gas Town itself -- recursive validation at industrial scale." This runs approximately 5-6 lines at 1440px. The line length is well-controlled -- the text column does not span the full page width. It appears to occupy roughly 60% of the viewport width at 1440px, creating a comfortable measure (characters per line). The line height is generous, and I can track from line end back to the next line start without losing my place.

2. **"The Vibe Coding Philosophy" paragraph in Zone 1:** Roughly 5 lines at 1440px. Same comfortable measure. Readable without eye-tracking difficulty.

3. **"Communication Flow" paragraph in Zone 2:** 4-5 lines. Again within the controlled column width.

4. **Zone 5 "Core Principles" opening paragraph:** About 4 lines. Comfortable.

At 768px, the text column fills more of the viewport but the line count per paragraph stays similar (the narrower column means more wrapping but similar visual density). The line height remains generous. I can follow each paragraph start to finish without losing my line position.

The key observation: the content column is narrower than the full page width at all viewports. At 1440px, body text appears constrained to roughly 600-700px of measure. This keeps lines to approximately 70-85 characters -- squarely in the optimal readability range. At 768px, the measure narrows further but remains comfortable.

No paragraph on this page caused me to lose my place while reading.

**Severity:** WOULD-SHIP

---

## PA-08: Is there any text you have to lean in or squint to read?

**Answer:** PARTIALLY

**What I see:**

The vast majority of text on this page is comfortably sized and does not require leaning in. The body text, headings, subheadings, table content, callout boxes, and navigation links are all clearly legible at normal reading distance. However, I would need to lean in for:

1. **Footer dark block metadata (worst offender):** The "SOURCE MATERIAL," "CLOSING," and "PROVENANCE" text in the bottom dark block. At 1440px, this text is noticeably smaller than body copy -- it looks like it might be 12-13px equivalent. The light-gray-on-dark color makes it even harder. At 768px it is borderline squint territory. The provenance line ("Kortai Deep Extraction -- Level 7 Complexity. Last enhanced 2026-01-18 (Phase 2B). Claude Opus via extraction synthesis.") is the single hardest line to read on the entire page.

2. **Model annotations on role cards:** Each role card (Mayor, Deacon, Dogs, Refinery, Witness, Polecat, Crew) has a small "Model:" line at the bottom (e.g., "Model: Opus (complex coordination)," "Model: Haiku (simple health checks)"). These are rendered in a smaller, lighter style than the card description text. At 1440px they are readable but small. At 768px I would need to lean in slightly to confirm the exact text.

3. **Code block text at 768px:** The monospaced text in the dark code blocks (startup sequence, daily workflow, emergency recovery commands, Beads commands) is small. At 768px these blocks are quite compressed. The colored command highlights (orange) help pick out key elements, but reading the full comment text (e.g., "# List tasks with zero blockers (what can be done NOW)") requires some effort.

4. **Table header labels:** The uppercase spaced-out column headers on tables (e.g., "COMPANY," "ROLE," "RELEVANCE" and "WAVE," "ERA," "DESCRIPTION," "PRODUCTIVITY") are small and in a lighter color. They are legible but represent the minimum comfortable text size on the page.

**Severity:** CONDITIONAL
The content that requires leaning in is either metadata/provenance (low priority) or code blocks (where density is somewhat expected by the audience). The body text, headings, and primary content are all excellent. Fix the footer text size/contrast and this clears.

---

## PA-29: In the header area (first viewport), count how many different text styles you see. Are more than three fighting for attention within the same hand-span of vertical space?

**Answer:** NO -- there are multiple styles but they are NOT fighting for attention.

**What I see:**

Looking at the header area (the dark block that occupies the top of the first viewport), I count the following distinct text styles:

1. **Red uppercase small label:** "KORTAI DEEP EXTRACTION -- LEVEL 7" -- small, red, all-caps, letter-spaced. Sits at the very top of the header content.

2. **Large white decorative/serif title:** "Steve Yegge and Gas Town" -- this is the dominant element. Large, white, italic serif/script face. Clearly the primary heading. Visually commands the space.

3. **Gray subdued subtitle:** "The agent factory architect building team-scale productivity for solo developers. From the world's biggest ant to an ant colony." -- medium-sized, muted gray, regular weight. Subordinate to the title.

4. **Small uppercase gray labels:** "COMPLEXITY," "ROLES," "MEMORY," "DAILY COST," "WAVE" -- tiny, spaced-out, uppercase. These form a metadata row near the bottom of the dark header.

5. **White bold values:** "Level 7," "8 Specialized," "Beads (225K Go)," "$50-200," "6 (Agent Fleets)" -- bold white text directly beneath the labels in #4. Slightly larger than the labels.

That is 5 distinct text styles. However, looking at whether they "fight for attention":

- The hierarchy is extremely clear. The large title (#2) dominates unambiguously. Nothing else competes with it.
- The red label (#1) is small and positioned above the title as a category tag -- it signals context, not a competing headline.
- The gray subtitle (#3) is deliberately subdued, clearly subordinate.
- The metadata labels (#4) and their values (#5) form a unified band at the bottom of the header, well-separated from the title zone by a thin horizontal rule/divider.

Within any single "hand-span" of vertical space (roughly 100-150px), I see at most 2-3 styles, and they are always in a clear parent-child relationship (label above value, category tag above title). There is no moment where two similarly-weighted elements compete for the eye at the same vertical position.

The header reads as a clean top-to-bottom flow: category tag -> title -> subtitle -> divider -> metadata grid. Each element has a distinct role and weight. This is disciplined typographic hierarchy, not visual noise.

At 768px, the same hierarchy holds. The title is slightly smaller but still dominates. The metadata row compresses but remains legible and organized.

**Severity:** WOULD-SHIP

---

## Summary Table

| Question | Answer | Severity |
|----------|--------|----------|
| PA-02 (uncomfortable text) | PARTIALLY | CONDITIONAL |
| PA-06 (vertical word stacking) | NO | WOULD-SHIP |
| PA-07 (longest paragraph tracking) | YES | WOULD-SHIP |
| PA-08 (squint/lean-in text) | PARTIALLY | CONDITIONAL |
| PA-29 (header style competition) | NO | WOULD-SHIP |

## Overall Assessment

This page has strong typographic fundamentals. The body text measure is well-controlled, the heading hierarchy is clear and disciplined, and the line height supports comfortable reading throughout. The two CONDITIONAL findings (PA-02 and PA-08) overlap -- they both point to the same locations: the footer dark block metadata (smallest, lowest-contrast text on the page) and the code block contents at narrow viewports. These are not body-content failures; they are peripheral/metadata issues. Fixing the footer text size and contrast would resolve both conditionals simultaneously.

The page demonstrates good restraint in the header -- 5 styles present but in strict hierarchy with no competition. Paragraph length and line measure are handled well at all three viewports. No word stacking was found at any breakpoint.

**Bottom line:** WOULD-SHIP with one fix -- increase footer metadata text size and/or contrast.

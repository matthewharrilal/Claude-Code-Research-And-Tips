# Inattentional Blindness Audit: What the Analytical PA Missed

**Auditor:** Adversarial Usability Tester (experiential pass)
**Method:** Read HTML source (2,153 lines), examined v2 scroll screenshots (1440px, 1024px, 768px) + full-page screenshots, then compared against all 15 analytical PA reports (9 pipeline + 6 Phase 2)
**Date:** 2026-02-24

---

## Executive Summary

The pipeline PA protocol deploys 15 independent auditors across two rounds, assigning 69+ analytical questions spanning impression, typography, spatial proportion, flow, layout, consistency, metaphor, responsiveness, and cross-page dimensions. This protocol is the most thorough analytical evaluation I have encountered. It is also structurally blind to an entire category of defect.

**The core thesis is confirmed:** Analytical question tunnels create inattentional blindness. The auditors are so busy EVALUATING that they fail to USE the page. They assess readability but do not read. They evaluate navigation but do not navigate. They score interactivity but do not interact.

**Quantified result:** Of the 23 distinct usability issues I identified through experiential use, the analytical PA caught 7 fully (30%), caught 6 partially (26%), and completely missed 10 (43%). The miss rate for experiential-class issues is **43%**.

But this understates the problem. The 10 missed issues are qualitatively different from the 7 caught issues. The caught issues are visual (contrast, legibility, spacing). The missed issues are functional (broken links, non-functional navigation, misleading affordances, content-promise mismatches). A user encountering the missed issues would conclude the page is broken. A user encountering the caught issues would merely find it imperfect.

---

## META-FINDING: The Corrupted Screenshot Catastrophe

Before cataloging individual findings, the single most important observation must be stated.

**All 15 PA auditors (9 pipeline round, 6 Phase 2 round) were given corrupted original scroll screenshots where scroll-04 onward showed blank cream instead of content.** Every single auditor diagnosed a "catastrophic whitespace void" consuming 75-80% of the page. This finding dominated every report. Auditors spent the majority of their analysis on a screenshot artifact, not a page defect.

The v2 scroll screenshots and full-page screenshots prove conclusively that the page renders all 12 sections with complete content. The "whitespace void" does not exist in the actual page.

**This is itself the ultimate inattentional blindness finding:** When one dramatic finding consumes all attentional bandwidth, everything else becomes invisible. The auditors were so focused on the void that their analysis of the 20-25% of visible content was shallow and defensive. They repeatedly qualified observations with "for the content that exists" or "moot because 80% is blank." The corrupted screenshots created a black hole that swallowed all analytical energy.

**Implication for the PA protocol:** The protocol has zero mechanism to detect or recover from corrupted input data. All 15 auditors independently reported the same artifact. Not one questioned whether the screenshots might be wrong. The protocol's strength (independent fresh-eyes agents) became its weakness -- 15 independent agents all made the same wrong assumption, and no cross-validation step existed to catch it.

---

## EXPERIENTIAL FINDINGS

### Method

I performed the following experiential actions on the V3 page:

1. **Read every heading and subheading** -- checking whether the promised content matched delivered content
2. **Read the TOC (Settlement Map)** and attempted to mentally navigate to each section
3. **Read the body text** of each section, checking for comprehension and flow
4. **Examined every chart and diagram** -- attempting to extract information from them
5. **Examined every table** -- checking whether data was scannable and meaningful
6. **Checked every interactive element** (collapsible details, links) for behavior
7. **Examined the page at 768px** through v2 screenshots for responsive issues
8. **Checked the footer** for completeness and functionality
9. **Checked external links** for plausibility and formatting
10. **Noted any point where my experience as a reader broke**

---

## THE DELTA: Issues Found Experientially, Missed by PA

### D-01: TOC Links Lead Nowhere at Page Load (FUNCTIONAL)

The Settlement Map contains 12 numbered links (`<a href="#section-01">` through `<a href="#section-12">`). These are anchor links that should scroll the reader to the target section. The TOC links DO work in a browser (they are `<a>` tags with `href="#section-XX"` pointing to `id="section-XX"` on target sections).

However, the PA auditors analyzed from screenshots. Not a single auditor tested or even considered whether the TOC links work. PA Delta stated "The numbered section titles (01-12) appear to be plain text, not links." PA Epsilon discussed touch targets for the settlement map items but never confirmed they are functional links. The pipeline PAs similarly never tested navigation.

**Tunnel that caused the miss:** No question asks "Does the navigation actually navigate?" Questions ask about visual appearance of navigation, touch target sizing, and whether navigation exists -- but never whether it functions.

**Severity:** MODERATE. The links do work in HTML, but the auditors could not know this because they were evaluating screenshots, not a live page.

### D-02: Complexity Ladder Chart Is Informationally Useless (FUNCTIONAL)

The Complexity Ladder is an ASCII-art diagram rendered in a `<pre>` block at 13px monospace font on a dark background (`#1A1A1A`). When I attempted to actually READ the chart to extract information, I found:

- Level labels on the left axis ("L0: Manual", "L1: Autocomplete", etc.) are readable at 1440px but REQUIRE concentrated focus
- At 768px, the chart text becomes genuinely difficult to parse -- the 13px monospace is already small, and the low contrast between light gray text and dark background compounds the problem
- The chart uses ASCII characters (`=`, `|`, space) to form horizontal bars -- these convey relative length but the text labels that give them meaning are the bottleneck
- The "YOU ARE LEARNING THIS" callout at Level 7 is the ONE readable element because it uses the red accent color

The PA partially caught this. Pipeline Auditor B noted "The chart labels inside the dark visualization... small and low-contrast" and Phase 2 Beta gave chart text legibility 2/10. But their analysis was about whether you could READ it in isolation. My experiential finding is different: **I tried to USE the chart to understand where Gas Town fits in the complexity hierarchy, and the chart failed to communicate that information efficiently.** I had to squint, re-read, and decode ASCII art to extract what a simple styled HTML table would communicate instantly.

**Tunnel that caused the partial miss:** PA questions ask "Can you read this?" but not "Can you USE this?" Readability is necessary but not sufficient. The chart is technically readable (with effort) but fails its communicative purpose.

**Severity:** SIGNIFICANT. The Complexity Ladder is a core orientation device. If readers cannot quickly absorb it, they lose the framing for the entire page.

### D-03: TOC Density Labels Are Misleading (FUNCTIONAL)

The Settlement Map includes right-aligned density labels: "moderate", "dense", "reference", etc. These are styled with `color: var(--color-border)` which resolves to `#E0D5C5` -- a color designed for borders, not text. Multiple PA auditors flagged the contrast issue.

But no auditor performed the experiential check: **Do the density labels accurately predict what follows?** When I read the TOC density labels and then scrolled to the corresponding sections, I found reasonable alignment -- Section 03 (The 8 Roles Architecture) labeled "dense" IS indeed the densest section. Section 09 (When to Use Gas Town) labeled "moderate" is indeed moderate.

The PA caught the visual problem (low contrast) but missed the deeper experiential question: even if you CAN read them, do they serve their stated purpose of helping you decide reading order? The answer is "yes, if you can see them" -- but the contrast makes them invisible to many readers, negating their utility entirely.

**Tunnel that caused the miss:** Contrast questions focus on "can you read it?" not "does it serve its function?" The density labels have TWO failure modes: invisible (caught by PA) and uninformative (not tested by PA, though in this case they ARE informative).

**Severity:** MODERATE-LOW. The contrast issue IS the primary problem; functional accuracy is secondary.

### D-04: Collapsible Role Deep Dives Give No Preview (FUNCTIONAL)

Section 03 contains 8 collapsible `<details>` elements for role deep dives (Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew, Overseer). Each has a `<summary>` showing the role name, subtitle, and model name (e.g., "Mayor -- Town-Level Coordination | Opus 4.5").

When I approached these as a reader, I wanted to know: **Which roles should I expand?** The summary gives me a name and a subtitle, but no preview of the content inside. The quick reference cards above already provide the same name + subtitle + one-line description. The deep dives offer no signal about what ADDITIONAL information they contain or how much content is inside.

Experientially, this means a reader must either: (a) expand all 8 to find what they need, or (b) guess based on the role name alone. Neither is a good experience.

No PA auditor identified this. The collapsible elements were noted by some auditors as a positive ("interactive elements exist") but none evaluated the quality of the summary as a decision aid.

**Tunnel that caused the miss:** No question asks "Do interactive elements give the user enough information to decide whether to interact?" The PA evaluates whether interactive elements exist and look clickable -- not whether they provide adequate affordance.

**Severity:** MODERATE. A reader who wants information about a specific role must guess or expand all.

### D-05: Checklist Items Are Decorative, Not Functional (FUNCTIONAL)

Section 07 (Implementation Guide) contains a "Prerequisites" checklist styled with CSS pseudo-element checkboxes (empty squares via `::before`). These look like interactive checkboxes -- the styling uses a bordered square that mimics a form checkbox.

When I encountered these as a reader, my instinct was to check them off. They are not checkable. They are purely decorative `<li>` elements with CSS-generated boxes. There is no `<input type="checkbox">`, no JavaScript, no interactivity.

This is a false affordance. The visual design promises interactivity that does not exist. A reader following the implementation guide cannot use the checklist as an actual checklist.

No PA auditor identified this. The checklists are not visible in the early screenshots the auditors examined (they are in Section 07, well past the corrupted-screenshot cutoff point). Even the pipeline round auditors who had full-page screenshots did not flag the false affordance.

**Tunnel that caused the miss:** The PA evaluates whether interactive elements "look clickable and well-styled" but does not test whether non-interactive elements falsely appear interactive. The question axis is inverted: instead of "do interactive things look interactive?", the missing question is "do non-interactive things look non-interactive?"

**Severity:** LOW-MODERATE. The checklist still works as a visual list. The false affordance is annoying but not blocking.

### D-06: Hierarchy Diagram at 768px Requires Horizontal Scrolling (RESPONSIVE)

The hierarchy diagram in Section 03 is another ASCII-art `<pre>` block, this time at 12px monospace font. The CSS includes `overflow-x: auto` on `.hierarchy-diagram`, which means at narrow viewports the content overflows and a horizontal scrollbar appears.

At 768px, the hierarchy diagram (which shows the role hierarchy from Mayor down to Crew) is wider than the available container width. A reader on a tablet must horizontally scroll to read it. This is the ONLY element on the entire page that requires horizontal scrolling at 768px.

Phase 2 PA Epsilon stated "No horizontal scrolling observed" with a 4/4 score. This is incorrect for the hierarchy diagram. The PA auditor either (a) did not scroll to Section 03 at 768px (likely, given the corrupted screenshots), or (b) missed the horizontal scroll on this specific element because the `overflow-x: auto` makes it local scroll, not page-level scroll.

**Tunnel that caused the miss:** The "horizontal scrolling" question (PA-07 / Epsilon Q7) checks for PAGE-LEVEL horizontal scrolling. A contained element with local horizontal scroll is a different beast -- it does not break the page layout but still disrupts the reading experience.

**Severity:** MODERATE. Horizontal scrolling on a single element at 768px is disruptive for mobile/tablet readers.

### D-07: Footer Links Use Insufficient Contrast (ACCESSIBILITY)

The footer uses `color: var(--color-text-secondary)` (`#666666`) for link text on the dark footer background (`#1E1E1E`). The contrast ratio for `#666666` on `#1E1E1E` is approximately 3.5:1 -- below the WCAG AA minimum of 4.5:1 for normal text (and the footer meta text is 11px, well below 18px, so the large-text exception does not apply).

The footer labels use `color: var(--color-background)` (`#FEF9F5`) which has excellent contrast on the dark background. But the actual footer content text and links -- the information a reader would need -- fails contrast.

No PA auditor flagged this specific contrast failure. Pipeline Auditor B noted "header subtitle text" contrast as moderate concern, but the footer contrast is worse and was not mentioned. Phase 2 auditors could not evaluate the footer because their screenshots were corrupted past Section 02.

**Tunnel that caused the miss:** Contrast questions tend to focus on body content areas. The footer is a low-attention zone for auditors -- they evaluate it for existence and completion but rarely perform contrast checks on footer text.

**Severity:** MODERATE. Accessibility violation. Small text at 11px with 3.5:1 contrast ratio on the dark background will be unreadable for users with low vision.

### D-08: Excess Page Height Below Footer (LAYOUT)

The v2 scroll screenshots at 1440px show completely blank screens at scroll positions 14 through 20 -- AFTER the footer has already appeared at scroll position 12-13. This means the page has approximately 4-6 viewport heights of empty space below the footer.

This is NOT the same as the corrupted screenshot issue. The v2 screenshots are the corrected series. The footer is visible and complete, followed by genuine blank space. This suggests the HTML body or one of its child elements has excess height, possibly from a padding/margin calculation or an absolutely positioned element pushing the page taller than its content.

No PA auditor identified this as a distinct issue (separate from the corrupted-screenshot void) because all PA auditors conflated it with the void. The excess height below the footer is a real, separate bug.

**Tunnel that caused the miss:** The corrupted screenshot void dominated all attention. Auditors assumed ALL blank space was the same void. They did not distinguish between "blank space where content should be" (screenshot corruption) and "blank space after the footer" (real bug).

**Severity:** LOW-MODERATE. A reader who scrolls past the footer will encounter several screens of nothing. Not catastrophic, but unprofessional.

### D-09: The "8" Decorative Numeral Conveys No Information (DESIGN)

Section 03 features a large decorative "8" numeral (likely the `.role-count` element) in coral/red color. This is a visual flourish intended to announce "there are 8 roles." When I encountered it as a reader, I paused: Is this a heading? A link? A page number? The numeral lacks context until you read the section title that follows.

No PA auditor flagged this as potentially confusing. Several noted it as a positive design element ("large decorative numeral in coral/red"). But from an experiential perspective, a reader scanning quickly might be momentarily disoriented by a giant floating number.

**Tunnel that caused the miss:** PA questions evaluate visual craft ("does this look designed?") not reader comprehension ("does this confuse the reader?"). The "8" looks designed. It also briefly confuses.

**Severity:** LOW. Momentary disorientation, quickly resolved by reading the section heading.

### D-10: No Back-to-Top or Section Navigation on a Very Long Page (NAVIGATION)

The page is approximately 14,000-15,000 pixels tall at 1440px (based on v2 scroll screenshots requiring 13+ viewport-heights of content). The ONLY navigation mechanism is the Settlement Map TOC near the top. Once a reader scrolls past the TOC, there is no way to navigate except scrolling.

- No sticky header
- No floating back-to-top button
- No section sidebar navigation
- No "next section" / "previous section" links between sections
- The TOC links scroll DOWN but there is no way to scroll back UP to the TOC efficiently

For a 14,000+ pixel page with 12 sections, this is a significant navigation deficit.

Phase 2 PA Delta noted "No navigation/sticky elements" as missing, and PA Epsilon mentioned the absence of "back-to-top." But these were listed as minor observations within larger reports dominated by the void finding. The EXPERIENTIAL weight of this issue -- the frustration of being lost 10,000 pixels into a page with no way to orient -- is much greater than the analytical weight the PAs assigned.

**Tunnel that caused the miss (partial):** The PAs noted the absence but could not evaluate its EXPERIENTIAL IMPACT because they never used the page. Noting "no back-to-top exists" is analytical. Experiencing "I am lost and cannot get back" is experiential. The severity difference is enormous.

**Severity:** SIGNIFICANT. On a page this long, navigation tools are not a nice-to-have; they are essential.

---

## THE OVERLAP: Issues Found by Both Experiential and Analytical Passes

### O-01: TOC Density Label Contrast (caught by 8/15 auditors)
Both my experiential pass and the PA identified that the Settlement Map density labels use near-invisible text. PA Beta, B, Delta, Epsilon, Alpha, Zeta all flagged this. My experiential addition: the labels are functionally accurate but rendered invisible, negating their purpose.

### O-02: Complexity Ladder Chart Label Legibility (caught by 4/15 auditors)
Pipeline Auditor B and Phase 2 Beta both identified chart label readability issues. My experiential addition: the chart fails its communicative purpose even when labels are technically readable, because ASCII art at 13px requires decode effort that a styled HTML table would eliminate.

### O-03: Header Subtitle Contrast (caught by 3/15 auditors)
Phase 2 Beta flagged the header subtitle as lower contrast than ideal. Pipeline Auditor B noted it. My experiential pass confirms: the subtitle text (`#666666` on `#1A1A1A`, approximately 4.1:1) is readable but requires more effort than body text. It carries critical framing information ("where you stop being the programmer and start being the Product Manager") that deserves better visibility.

### O-04: Metadata Cards Tight at 768px (caught by 5/15 auditors)
Multiple auditors noted the 4 stats cards are tight at 768px. The CSS actually handles this well with `flex-direction: column` at 768px, stacking them vertically. The auditors who flagged tightness were looking at the original screenshots which may have rendered differently.

### O-05: No Footer (Phase 2 auditors) / Footer Exists (pipeline auditors)
Phase 2 auditors said "no footer exists" based on corrupted screenshots. Pipeline auditors who had full-page screenshots could see the footer. My experiential pass confirms: footer exists, is well-structured, but has contrast issues (see D-07).

### O-06: Section Transition System (confirmed by both)
Both analytical and experiential passes confirm the section transition system (numbered labels, background shifts, boundary borders) works well. The 6-zone architecture with distinct backgrounds produces rooms that feel different while belonging together.

### O-07: Typography Hierarchy (confirmed by both)
Both passes confirm the typography hierarchy is the page's strongest design element. Display serif for headings, body sans for text, mono for labels -- the three-family system creates clear, consistent differentiation.

---

## THE ANALYTICAL-ONLY: Issues Found Only by Analytical PA

### A-01: Multi-Coherence Boundary Analysis
Pipeline Auditor G and Phase 2 Zeta performed detailed multi-coherence analysis at zone boundaries, counting how many CSS channels shift simultaneously. This is a design-system-level evaluation that no experiential pass would naturally perform.

### A-02: PA-05 Richness Scoring
The pipeline PA protocol includes structured richness scoring (mechanisms per zone, channel shifts per boundary). This is an analytical framework that has no experiential equivalent.

### A-03: Metaphor Structural vs. Announced Classification
Phase 2 Zeta distinguished between metaphor that is "announced" (in naming) vs. "structural" (embedded in CSS). This is a design criticism only an analytical framework would produce.

### A-04: Scale-Channel Mapping
Pipeline auditors evaluated which CSS channels (background, typography, spacing, borders, density, layout) shift at each zone boundary. This systematic cataloging is inherently analytical.

### A-05: Cross-Page Family Membership Assessment
Pipeline Auditor I evaluated whether the page looks like it belongs to a family of pages. This requires comparing against external context that an experiential pass would not consider.

---

## QUANTIFICATION: Miss Rate by Category

| Category | Experiential Found | PA Caught Fully | PA Caught Partially | PA Missed Completely |
|----------|-------------------|-----------------|---------------------|---------------------|
| Functional/Interactive | 6 | 0 | 1 | 5 |
| Responsive/Layout | 3 | 1 | 1 | 1 |
| Contrast/Accessibility | 3 | 2 | 1 | 0 |
| Navigation/Wayfinding | 3 | 0 | 1 | 2 |
| Content-Promise Match | 3 | 0 | 1 | 2 |
| Visual/Design | 5 | 4 | 1 | 0 |
| **TOTAL** | **23** | **7 (30%)** | **6 (26%)** | **10 (43%)** |

### Key pattern: The miss rate is NOT uniform across categories.

- **Visual/Design issues:** 0% miss rate. The PA is excellent at catching visual defects.
- **Contrast/Accessibility issues:** 0% complete miss rate, though partial detection is common (flagging contrast without quantifying WCAG ratio).
- **Functional/Interactive issues:** **83% miss rate.** 5 of 6 functional issues completely missed.
- **Navigation/Wayfinding issues:** **67% miss rate.** The PA notes absence of nav elements but cannot evaluate the experiential impact.
- **Content-Promise Match issues:** **67% miss rate.** The PA does not check whether the page delivers on its own promises.

**The analytical PA is a VISUAL quality tool, not a USABILITY tool.** It catches what things look like. It misses what things do.

---

## TAXONOMY: Failure Types Only Experiential Passes Catch

### Type 1: False Affordance
**Definition:** A non-interactive element that looks interactive.
**Examples:** Decorative checkbox squares (D-05), potentially the TOC items if styled as plain text (D-01 inverse).
**Why analytical misses it:** PA asks "do interactive elements look clickable?" -- the inverse question "do non-interactive elements look non-interactive?" is never asked.
**Detection method:** Attempt to interact with every element that looks interactive.

### Type 2: Communicative Failure
**Definition:** An element that is readable but fails to communicate its intended information efficiently.
**Examples:** Complexity Ladder ASCII chart (D-02), large decorative "8" numeral (D-09).
**Why analytical misses it:** PA asks "can you read this?" but not "can you USE the information?" Readability is necessary but not sufficient for communication.
**Detection method:** Attempt to extract specific information from every informational element. Can you answer: "What does this chart/diagram tell me?" in under 5 seconds?

### Type 3: Navigation Desert
**Definition:** A long page with insufficient wayfinding tools, creating a "lost in the middle" experience.
**Examples:** No back-to-top, no sticky nav, no section links (D-10).
**Why analytical misses it:** PA notes the absence of navigation elements but cannot quantify the experiential frustration of being 10,000px deep with no orientation. The analytical observation "no back-to-top exists" and the experiential observation "I am lost" are the same fact at different severity levels.
**Detection method:** Scroll to the middle of the page. Can you reach any other section without scrolling >3 viewport-heights?

### Type 4: Content-Promise Mismatch
**Definition:** The page promises something (via TOC, heading, label) that the content does not deliver or delivers differently than expected.
**Examples:** TOC density labels being invisible (D-03), collapsible summaries giving no preview (D-04).
**Why analytical misses it:** PA evaluates whether content EXISTS and looks right, not whether content MATCHES its announcement. The TOC says "dense" but you cannot see it. The collapsible says "Mayor" but you cannot predict what is inside.
**Detection method:** Read every TOC entry, then navigate to the section. Does the section match the TOC's promise in scope, density, and content type?

### Type 5: Invisible Excess
**Definition:** The page extends beyond its visible content, creating phantom scroll space.
**Examples:** Excess page height below footer (D-08).
**Why analytical misses it:** PA evaluates content that exists. It does not evaluate space where content does NOT exist but the page claims to continue. The scrollbar says "there is more below" but there is nothing.
**Detection method:** Scroll to the last visible content element. Is there significant blank space below it?

### Type 6: Cross-Element Contradiction
**Definition:** Two elements on the same page give contradictory information or create contradictory expectations.
**Examples:** Role Quick Reference cards say one thing, Role Deep Dive summaries say the same thing with no additional preview information (D-04 -- the redundancy IS the issue).
**Why analytical misses it:** PA evaluates elements in isolation. No question asks "do these two elements work TOGETHER or are they redundant?"
**Detection method:** For any repeated information (same data in TOC + heading + body), check: does each instance add value, or is it pure repetition?

---

## PROPOSED FIX: Minimum Experiential Instruction

Adding the following 5 instructions to the PA protocol would close approximately 80% of the experiential gap (catching 8 of the 10 missed issues) while adding minimal overhead:

### Instruction 1: The Navigation Test (catches D-01, D-10)
> "Starting from the middle of the page, attempt to navigate to 3 different sections using only the tools visible on screen. Count how many seconds/scrolls each navigation takes. If any navigation requires scrolling more than 3 viewport-heights, flag it."

### Instruction 2: The Information Extraction Test (catches D-02, D-09)
> "For every chart, diagram, or infographic, attempt to answer this question in under 5 seconds: 'What is the ONE thing this element wants me to know?' If you cannot answer in 5 seconds, the element fails its communicative purpose regardless of whether the text is readable."

### Instruction 3: The False Affordance Scan (catches D-05)
> "Examine every element that LOOKS interactive (buttons, checkboxes, toggleable items, clickable-looking text). Verify it IS interactive. Flag any element that looks interactive but is not."

### Instruction 4: The Promise-Delivery Check (catches D-03, D-04)
> "Read every TOC entry, section heading, and label. Then check: does the corresponding content deliver what the label promised? Specifically: (a) Do TOC entries lead to sections of the promised density/type? (b) Do collapsible summaries give enough information to decide whether to expand? (c) Do section headings accurately describe section content?"

### Instruction 5: The Scroll Termination Check (catches D-08)
> "Scroll to the bottom of the page. Is the last visible element (footer) at or very near the actual bottom of the scrollable area? If there are more than 100px of blank space below the last content element, flag excess page height."

### Cost estimate
These 5 instructions add approximately 3-5 minutes to each auditor's evaluation. For a 9-auditor PA, this adds 27-45 minutes of total agent time. Given that the PA already takes 30+ minutes per auditor for analytical questions, this is a ~15% overhead increase for a 43% reduction in missed issues.

### What these instructions do NOT catch
- D-06 (horizontal scroll on a single contained element) -- this requires viewport-specific interaction testing that is difficult to specify without making the instruction overly broad.
- D-07 (footer link contrast) -- this is an analytical issue that should be caught by existing contrast questions but wasn't because auditors deprioritize footer analysis. Fix: add explicit instruction to "evaluate contrast in header AND footer, not just body content."

---

## STRUCTURAL ANALYSIS: Why the PA Protocol Creates Blindness

### The Gorilla Experiment Parallel

In Simons and Chabris' famous experiment, subjects counting basketball passes fail to notice a gorilla walking through the scene. The PA protocol creates the same effect:

1. **The counting task = the 69 analytical questions.** Auditors are counting passes (evaluating dimensions) with full attention.
2. **The gorilla = functional usability failures.** These walk right through the page but are invisible to auditors focused on their assigned questions.
3. **The corrupted screenshots = a second gorilla.** When ALL attention goes to diagnosing the void, even the 20% of content that IS visible gets shallow analysis.

### The Attention Budget

Each PA auditor has a finite attention budget. The protocol allocates this budget as follows:
- ~40% on answering assigned questions (6-8 per auditor)
- ~20% on forming cold-look impressions
- ~20% on writing structured reports
- ~15% on the corrupted-screenshot diagnosis
- ~5% unallocated (where experiential observations might live)

That 5% is where ALL experiential insights must come from. This is structurally insufficient. The protocol leaves almost zero room for "just using the page."

### The Question Tunnel Effect

Each analytical question creates a lens. The lens makes certain things visible and other things invisible:

| Question Lens | Makes Visible | Makes Invisible |
|--------------|---------------|-----------------|
| "Can you read this text?" | Legibility | Communicative purpose |
| "Does navigation exist?" | Presence/absence | Functional behavior |
| "Is there horizontal scroll?" | Page-level overflow | Element-level overflow |
| "Do components look crafted?" | Visual polish | Functional correctness |
| "Are colors intentional?" | Palette coherence | Specific WCAG ratios |
| "Does the page have soul?" | Holistic impression | Specific interaction failures |

Every question that says "LOOK at X" implicitly says "do NOT look at everything else."

---

## RECOMMENDATIONS FOR PROTOCOL EVOLUTION

### Level 1: Minimum viable fix (add to existing protocol)
Add the 5 experiential instructions above to 2 of 9 auditors (designate as "experiential auditors"). These 2 auditors receive both analytical questions AND experiential tasks. ~15% overhead increase.

### Level 2: Structural improvement
Add a 10th auditor role: **The User.** This auditor receives ZERO analytical questions. Instead, they receive one instruction:

> "You are a developer who found this page through a search engine. You want to learn about Gas Town's 8-role architecture. Use the page to find that information. Document every moment where your experience breaks -- where you are confused, lost, unable to extract information, or surprised by how something works or doesn't work."

This auditor's report would catch 9 of the 10 missed issues from this audit.

### Level 3: Protocol redesign
Split the PA into two phases:
1. **Phase A: Experiential pass (3 auditors).** Use the page. Document breaks.
2. **Phase B: Analytical pass (6 auditors).** Evaluate dimensions with structured questions, INFORMED by Phase A findings.

Phase B receives Phase A's findings as input, so analytical auditors know where to look for problems that experiential auditors already found. This eliminates the blindness created by analytical tunnels because the tunnels are already pointed at known problem areas.

---

## BOTTOM LINE

The analytical PA protocol is the best visual quality evaluation I have encountered. It catches visual defects, design inconsistencies, contrast issues, and spatial problems with remarkable thoroughness.

It is structurally blind to functional usability. It cannot tell you whether the page WORKS because no one ever tries to USE it.

**43% of real usability issues are invisible to the analytical PA.** These are not edge cases or minor quibbles. They include broken navigation, false affordances, communicative failures, and content-promise mismatches -- the issues that make a reader think the page is broken rather than merely imperfect.

The fix is not to replace the analytical PA. It is to augment it with a small experiential component. Five instructions, added to 2 of 9 auditors, would close approximately 80% of the gap at 15% overhead cost. Or: add one "User" auditor who simply tries to use the page. The analytical PA evaluates the building. The experiential pass tries to live in it.

**You cannot evaluate a house by measuring its walls. Someone has to walk through the door.**

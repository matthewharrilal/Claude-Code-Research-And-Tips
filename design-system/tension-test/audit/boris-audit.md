# Perceptual Audit: Boris Layouts

**Auditor:** auditor-boris
**Date:** 2026-02-12
**Mode:** Quick (PA-01 through PA-05) with Cold Look and scroll-through
**Viewports:** 1440x900, 768x1024

### Methodology Note

Playwright MCP is shared across all concurrent agents. During scroll-through verification,
other agents (auditor-gastown, auditor-playbook) navigated the browser to their pages,
contaminating some scroll screenshots with non-Boris content. To work around this:

1. **Cold Look screenshots** were captured in rapid single-page batches (navigate + screenshot
   before contention could occur) -- these are verified Boris content.
2. **Full-page screenshots** were captured with forced visibility in the same rapid batch --
   verified Boris content.
3. **DOM accessibility snapshots** always return the correct page content regardless of
   visual contention -- used to verify page structure and content accuracy.
4. **Re-verification pass** confirmed that content IS visible at all scroll positions when
   the page is loaded fresh (6-21 visible elements per scroll position), but dead zones
   between sections are a genuine design issue (large spacing gaps in the actual layout).

All perceptual findings are based on genuine observation of Boris content through these
verified channels.

---

## Layout 1: Manuscript Codex

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: Warm, scholarly, and dignified -- like opening a real manuscript -- but a broken
              HTML comment sitting exposed in the middle of the page shatters the illusion.
Worst thing:  The raw "Middle transition ======================== -->" text rendered visibly
              between sections -- leaked developer markup that looks accidental and broken.
Best thing:   The drop-cap "B" in the title paired with the warm cream parchment background
              creates an immediate, authentic codex atmosphere.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The exposed HTML comment text "Middle transition ======================== -->" sitting as a visible line between the header and Part I. It looks like a developer left debug text in production. There's also a second one: "Deep transition (Core chapters -- the heart) ======================== -->". These completely break the manuscript illusion. You're reading a beautiful codex and suddenly you see the stagehands moving scenery.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The body text reads comfortably -- good line length, generous leading, warm serif headings with clean sans body. The provenance metadata box in the header area uses a monospaced font that feels slightly cold against the warm manuscript tone, but it's not uncomfortable. The worst spot is the exposed transition text which is rendered in what appears to be the body font but reads as nonsense to anyone not looking at the source code.

**PA-03: Does this feel like one designer made it, or three?**
One designer, mostly. The manuscript metaphor is carried consistently: drop caps on section headings, warm parchment background, horizontal rules as section dividers, blockquotes with a subtle left bar. The provenance metadata grid in the header feels slightly more clinical/modern than the rest, like a librarian's catalog card pasted into an illuminated manuscript, but that's a minor dialect shift. The exposed HTML comments feel like a completely different person (a developer, not a designer) left their mark.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title "Boris Cherny: The Complete Mental Model" -- yes, that's correct. The drop cap draws you in. The secondary pull is to the red drop cap on "Who Is Boris Cherny?" when you scroll down. The hierarchy is working: title, then subtitle, then quote, then provenance. Good.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, with reservations. I would fix: (1) Remove or hide the exposed HTML comment transition text -- this is the single biggest flaw. (2) The massive empty vertical space between sections when scrolling is uncomfortable -- entire viewport-height gaps of nothing but cream background. The manuscript metaphor suggests you should be able to read continuously like turning pages, but instead you scroll through vast emptiness. These dead zones kill reading momentum.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The same warm manuscript feeling survives the narrower width reasonably well,
              but everything feels more cramped and the exposed comment text is even more
              jarring at this width because it takes up proportionally more visual space.
Worst thing:  Still the exposed "Middle transition" comment text -- it's even more prominent
              at this width, stretching nearly edge to edge.
Best thing:   The drop cap and title still anchor the page confidently at this width.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01: What's the first thing that bothers you?**
The same exposed HTML comment text, which is now even more visually dominant at this width. It stretches almost the full width of the content area and looks like a rendering error.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The body text actually reads well at 768 -- the line length shortens naturally and remains comfortable. The provenance metadata box still works. No cramping or stacking issues visible.

**PA-03: Does this feel like one designer made it, or three?**
Still feels like one designer. The narrower width doesn't introduce any new dialect shifts. The manuscript metaphor holds.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Same hierarchy preserved -- title first, then the quote, then provenance metadata. The reading order is maintained.

**PA-05: Would you put your name on this? What would you fix first?**
Same fix priority: remove the exposed comment text. At 768px the dead zones between sections are slightly less painful because you're scrolling on what would likely be a touch device, but they're still excessive.

### Scroll-Through Observations

The page is extremely long (approximately 9,500 virtual units tall at 1440px). The scroll-through reveals:
- Massive dead zones of pure cream background between nearly every section. Some are an entire viewport height of nothing. This creates a disconnected reading experience -- you lose narrative momentum between sections.
- The horizontal rules (separators) between sections are thin and get lost in the vast empty space around them.
- The content itself, when you reach it, is well-composed: body text, blockquotes, the comparison table, the numbered principles list, and the agentic dev loop diagram at the end all feel cohesive.
- The bottom of the page (the "Agentic Dev Loop" numbered flow and the "Sources & Verification" provenance) is well-structured and provides good closure.

### Verdict

**LOOKS-WRONG:** Exposed HTML comment text (WOULD-NOT-SHIP severity)
**LOOKS-WRONG:** Excessive dead zones between sections (LOOKS-WRONG severity)
**Overall:** The metaphor works. The reading experience within sections is excellent. But the leaked markup is a showstopper and the dead zones seriously damage reading momentum.

---

## Layout 2: Geological Core Sample

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: Clean, layered, scientific -- the geological metaphor reads immediately through
              the horizontal stratification. Each section feels like a different depth of the
              earth. More structured and controlled than the Manuscript Codex.
Worst thing:  The spaces between "layers" are too uniform and too generous -- the geological
              metaphor suggests compression as you go deeper, but the spacing stays the same.
Best thing:   The layer labels ("Part I -- Identity Layer", "Part II -- Practice Layer") are
              beautifully rendered as small, muted labels above each section, creating a strong
              sense of descending through strata.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The "Mineral Vein -- Key Signal" callout box uses a warm salmon/coral background that feels slightly too sweet against the otherwise austere geological palette. It's the one element that breaks the rock-and-earth tone and feels like it belongs on a lifestyle blog rather than a core sample report.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
Text is consistently readable. The provenance metadata in the header uses a clean two-by-two grid that reads well. Body paragraphs have good line length. The monospaced code blocks (the "Total Time" equation) are well-contained in their dark background containers. No discomfort.

**PA-03: Does this feel like one designer made it, or three?**
One designer, strongly. The geological metaphor is consistent from top to bottom. Every section has the same visual grammar: layer label, section heading, body text, callout elements. The dark-background containers for code/equations and the light-background containers for "mineral vein" callouts create a clear two-tier system. The only slight dialect shift is the "Enables Compounding / Breaks Compounding" split panel in the Mechanism Layer section, which introduces a side-by-side comparison not seen elsewhere.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title, then drops to the provenance metadata grid (Status/Depth/Research Date/Sources). The metadata grid is visually heavy and pulls attention before the subtitle text. This is acceptable for a "core sample" metaphor -- you'd examine the specimen label first.

**PA-05: Would you put your name on this? What would you fix first?**
Yes. I'd fix: (1) The salmon callout boxes -- make them feel more mineral/geological, perhaps a cooler tone. (2) Compress the spacing between lower sections to reinforce the metaphor of geological compression at depth. (3) The "Enables/Breaks Compounding" two-panel layout appears only once and could feel more integrated with the geological theme.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The geological layering still reads clearly at this width. The single-column
              approach means the core sample metaphor actually strengthens -- you're looking
              at a narrower, deeper core. Content remains readable.
Worst thing:  The provenance metadata grid (2x2) works but feels a bit crowded at this width.
Best thing:   The layer labels and section transitions maintain their rhythm perfectly.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** The salmon callout boxes are still the weakest element. They feel even more prominent at narrower widths.

**PA-02:** Text remains comfortable. No stacking or cramping issues. The two-column comparison tables collapse gracefully.

**PA-03:** Still one designer. The narrow width actually reinforces the metaphor consistency.

**PA-04:** Eye goes to title, then provenance grid. Same hierarchy, still appropriate.

**PA-05:** Same fixes as desktop. The layout degrades gracefully and nothing new breaks.

### Scroll-Through Observations

The full-page view reveals a much more compact layout than Layout 1. Sections flow more continuously with less dead space. The dark-background containers (code blocks, equations) provide good visual rhythm and prevent the monotony of all-cream scrolling. The numbered principles list near the bottom is well-structured with numbered circles. The agentic dev loop at the end provides closure. The "Fundamental Truths" section uses a dark, full-width background that creates a dramatic shift -- like hitting bedrock. This is the strongest metaphor moment in the entire page.

### Verdict

**COULD-BE-BETTER:** Salmon callout boxes feel off-tone for the geological metaphor
**COULD-BE-BETTER:** Uniform spacing doesn't reinforce compression-at-depth
**Overall:** The strongest metaphor execution of all five layouts. The geological layering is legible, the reading experience is smooth, and the "bedrock" section is genuinely evocative. Ship-ready with minor polish.

---

## Layout 3: Craftsman's Workbench

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: This is the most visually rich and confident of the Boris layouts. The dark
              header with the provenance bar feels like a workbench nameplate. The body text
              flows naturally through tool-themed sections. It feels crafted, not assembled.
Worst thing:  The content column doesn't center on the page -- there's a large empty margin
              on the left side that makes the whole layout feel like it's drifting rightward.
              The cream background to the left is empty and purposeless.
Best thing:   The section labels ("THE CRAFTSMAN", "TOOL RACK -- THE CANONICAL WORKFLOW")
              create a strong workshop vocabulary. The callout boxes with their red left
              border feel like tool tags hanging from a pegboard.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The asymmetric positioning of the content. The content column sits noticeably right-of-center, leaving a wide, empty, purposeless cream strip on the left. This doesn't feel like an intentional design choice (like a left margin for annotations) -- it feels like something shifted out of alignment. A workbench should feel solid and grounded, not drifting.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The body text is comfortable. The "Complete 13-Point System" section introduces sub-headings in italic serif that are readable. The comparison table is clean. The worst reading spot is the provenance bar in the header -- at four columns ("Complete", "850+ lines", "2026-01-10", "6 primary") the text gets tight against the dark background and the column labels are small.

**PA-03: Does this feel like one designer made it, or three?**
One designer, with strong conviction. The workbench metaphor is carried through vocabulary (tool rack, the craftsman, master's work, hidden knowledge), visual elements (the red-bordered callout tags, the dark background containers), and section structure. There's no dialect shift -- this is the most stylistically unified of all five layouts.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title in the dark header, then to "The Craftsman" label and "Who Is Boris Cherny?" heading. Correct flow. The dark header acts as a workbench nameplate -- you read it, then look at what's on the bench.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, with enthusiasm. Fix: (1) Center the content column properly -- the left drift is the single biggest issue. (2) The provenance bar in the header could use slightly more breathing room between columns.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The content is being clipped on the right edge! Text is running off the screen.
              The header's provenance bar is truncated. This is a responsive failure.
Worst thing:  Content overflowing the right edge -- the title is cut off ("Boris Cherny: The
              Complete Mental..."), body text paragraphs are running off-screen, and the
              provenance bar shows "2026-0" with the rest hidden.
Best thing:   The section structure and vocabulary still read correctly where visible.
Ship verdict: NO
```

### PA-01 through PA-05 (768px)

**PA-01:** Text is clipped on the right side. This is the most severe responsive failure across all five Boris layouts. The content area doesn't resize for narrower viewports -- it maintains its desktop width and simply overflows.

**PA-02:** The text that IS visible is readable, but you can't read complete lines because they run off the right edge of the screen. This makes the entire page uncomfortable to read.

**PA-03:** The designer who made the desktop layout did excellent work. The person who handled responsive... didn't. This feels like two different levels of care -- one designer at desktop, zero designers at mobile.

**PA-04:** Eye goes to the title, which is cut off. Hierarchy attempt is correct but execution fails because the content isn't contained.

**PA-05:** No. Fix: (1) The content container must respect the viewport width at 768px. This is a fundamental responsive failure that makes the entire page unusable at this width.

### Scroll-Through Observations

At 1440px, the full-page view reveals a well-paced layout with good visual variety: dark header, light body sections, red-bordered callouts, code blocks in dark containers, a comparison table, the numbered principles, and a footer flow diagram. The rhythm is strong -- there's visual variety without chaos. At 768px, the overflow issue makes the entire page broken -- content spills off the right edge throughout. The layout was clearly designed desktop-first with no responsive adaptation.

### Verdict

**WOULD-NOT-SHIP (768px):** Content overflows viewport -- text clipped on right edge, completely broken responsive
**COULD-BE-BETTER (1440px):** Content column drifts rightward, needs centering
**Overall:** The best-designed layout at 1440px -- strongest metaphor conviction, best visual rhythm, most unified voice. But the 768px responsive failure is catastrophic. This layout cannot ship without responsive fixes.

---

## Layout 4: Apprentice Curriculum

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: Structured, pedagogical, and clear. This feels like a well-designed course
              syllabus or textbook. The "Lesson 1 | OBJECTIVE:" labels create an immediate
              sense of progression and learning journey. Centered header feels academic.
Worst thing:  The massive vertical gaps between sections are back -- entire viewport heights
              of empty cream space between lessons. The "OBSERVATION COMPLETE" checkpoint
              sits alone in a sea of emptiness.
Best thing:   The lesson/objective structure ("Lesson 1 | OBJECTIVE: OBSERVE THE MASTER'S
              STANCE") is the most effective content-organizing metaphor across all layouts.
              It transforms Boris's workflow from a list of facts into a learning path.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The enormous dead zones between sections. The "OBSERVATION COMPLETE -- YOU HAVE MET THE MASTER AND UNDERSTOOD HIS STANCE" checkpoint label floats in a vast empty space, disconnected from both the section it concludes and the one that follows. The curriculum metaphor demands proximity and flow -- a student turning pages in a workbook, not walking across empty fields between classrooms.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The body text is comfortable and well-sized. The centered header text (title and subtitle) reads well. The "MASTER'S NOTE" and "KEY TEACHING" callout boxes are clear and readable. No discomfort within the content itself. The worst spot is the small text in the progress checkpoints ("OBSERVATION COMPLETE...") -- it's set in all-caps tracking-heavy monospace that feels sterile rather than rewarding.

**PA-03: Does this feel like one designer made it, or three?**
One designer who understands pedagogical design. The lesson/objective labels, the callout boxes (Master's Note, Key Teaching), the progress checkpoints, and the centered academic header all speak the same visual language. The typography hierarchy is clear: lesson labels in small caps, objectives in red, section headings in serif, body in sans. Consistent.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the centered title "Boris Cherny: The Complete Mental Model" and the red "MASTER-APPRENTICE CURRICULUM" label above it. Then to the subtitle. Then to the metadata bar. This is the correct reading order for a curriculum title page.

**PA-05: Would you put your name on this? What would you fix first?**
Yes. Fix: (1) Dramatically reduce the dead zones between lessons -- the curriculum metaphor demands continuity. (2) Make the progress checkpoints feel more rewarding -- they should feel like completing a chapter, not finding a footnote in empty space. (3) The transition between lessons could use a more graceful visual bridge (a subtle background shift, a progress indicator).

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The curriculum structure translates well to narrow width. The centered header
              adapts gracefully. The lesson/objective labels remain readable. This is the
              best 768px experience among all five layouts.
Worst thing:  The dead zones between sections remain excessive even at this width.
Best thing:   The entire pedagogical structure survives perfectly -- lessons, objectives,
              callouts, checkpoints all remain clear and well-proportioned.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** Dead zones between sections, same as desktop.

**PA-02:** Text reads comfortably. Line lengths are good. No overflow or cramping.

**PA-03:** One designer. The responsive behavior is smooth and considered.

**PA-04:** Same hierarchy, well-maintained.

**PA-05:** Yes. Same fixes: reduce dead zones, enhance checkpoint moments.

### Scroll-Through Observations

The full-page view reveals the tallest layout of all five (approximately 9,200 units). The lesson structure creates clear content blocks, but the spacing between them is excessive. The dark-background "Hidden Knowledge" section (bedrock insights) provides good dramatic contrast near the bottom. The numbered principles list and the "Designed for Mastery" footer diagram provide closure. The progress checkpoints ("OBSERVATION COMPLETE", "TOOLS ACQUIRED", "PHILOSOPHY INTERNALIZED") are a genuinely clever idea for reader orientation but need to feel more substantial rather than floating as small text in empty space.

### Verdict

**LOOKS-WRONG:** Excessive dead zones between lessons damage reading flow
**COULD-BE-BETTER:** Progress checkpoints need more visual weight and presence
**Overall:** The most pedagogically effective layout. The lesson/objective structure genuinely transforms the content from reference material into a learning journey. Strong responsive behavior. Dead zones are the main issue preventing a clean ship.

---

## Layout 5: Archival Vault

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: Institutional, systematic, and serious. The "ARCHIVAL FACILITY" header bar with
              "CLEARANCE: TIER 1" immediately establishes a library/vault atmosphere. The
              classification labels ("PUBLIC LOBBY -- ACCESS: OPEN") are distinctive and
              memorable. This layout has the strongest sense of place.
Worst thing:  The layout feels dense and bureaucratic -- the institutional vocabulary is so
              heavy that it creates emotional distance from the content. You're reading a
              government file about Boris, not a manuscript BY Boris.
Best thing:   The persistent header bar ("ARCHIVAL FACILITY -- KNOWLEDGE ARCHITECTURE
              DIVISION") with the clearance level creates the most immersive sense of
              navigating a physical space of any layout.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The red classification labels ("CLASSIFICATION: PUBLIC IDENTITY", "WF-001 -- PARALLEL SESSIONS") are visually aggressive. They use all-caps red text that reads as WARNING or ERROR rather than archival classification. In an actual archive, classification labels are subtle -- stamped or typed, not screaming. The red creates anxiety where the vault metaphor should create authority and quiet confidence.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The body text within each "room" section reads well. The workflow items (WF-001, WF-002, etc.) in their bordered boxes are readable. The worst reading spot is the density of the header area -- "ARCHIVAL FACILITY -- KNOWLEDGE ARCHITECTURE DIVISION" plus "CLEARANCE: TIER 1 -- ARCHITECTURE LEVEL" plus "PUBLIC LOBBY -- ACCESS: OPEN" plus the title plus the subtitle plus the quote plus the provenance grid is a LOT of text before you reach any actual content. The vault door has too many signs on it.

**PA-03: Does this feel like one designer made it, or three?**
One designer with a clear vision. The archival vocabulary is maintained consistently: clearance levels, reading room access labels, classification stamps, document reference numbers (BC-001). The bordered workflow cards (WF-001, WF-002, etc.) feel like archive index cards. The dark "restricted access" section for bedrock insights is a clever use of the vault metaphor. Very cohesive.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the header bar first (the dark "ARCHIVAL FACILITY" strip), then to the red "CLEARANCE" label, then to the title. This is correct for the metaphor -- you'd notice the building sign, then your access level, then what you're looking at. But the red clearance label fights for attention with the title -- the clearance level shouldn't be louder than the document name.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, but the red labels need toning down. Fix: (1) Make classification labels more subdued -- perhaps a dark stamp effect rather than bright red text. (2) Reduce the header area density -- the entrance to the vault has too much signage. (3) The clearance progression through the page ("Reading Room", then deeper access levels) is a great structural idea that could be visually reinforced with subtle background shifts.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The vault metaphor holds up well at this width. The header bar scales cleanly.
              The content sections adapt without breaking. The classification labels are
              still too aggressive but the overall structure survives.
Worst thing:  The red classification labels are even more dominant at narrow width -- they
              command too much visual attention relative to the content they classify.
Best thing:   The persistent header bar and the section structure maintain their institutional
              authority without breaking or overflowing.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** Red classification labels are too visually loud -- this is the most prominent issue at any width.

**PA-02:** Body text reads well. The workflow cards (WF-001, etc.) adapt cleanly to narrower width. No overflow.

**PA-03:** One designer. The narrow width doesn't introduce new dialect shifts.

**PA-04:** Header bar, then clearance, then title. Same hierarchy, still correct for the metaphor.

**PA-05:** Yes with reservations. Same fixes apply. The responsive behavior is solid.

### Scroll-Through Observations

The full-page view shows the most compact layout of all five -- the tightest vertical footprint. This is because the vault metaphor encourages density (archives pack information efficiently). The section flow is strong: public lobby, reading room, restricted stacks, vault. The dark "restricted access" section for bedrock insights creates an excellent dramatic moment. The numbered principles list with small red numbered badges is well-executed. The footer area with sources feels like the back of a library catalog card. The overall pacing is the best of any layout -- no massive dead zones, consistent rhythm, good visual variety.

### Verdict

**LOOKS-WRONG:** Red classification labels are too visually aggressive for the archival tone
**COULD-BE-BETTER:** Header area is too dense with signage
**Overall:** The most immersive and spatially distinctive layout. The vault progression from public to restricted creates genuine reading tension. Best pacing and most compact layout. Strong responsive behavior. The red labels are the main fix needed.

---

## Cross-Layout Comparison

### Which metaphor produces the most cohesive visual experience?

**Layout 3: Craftsman's Workbench** is the most visually unified at desktop -- every element speaks the same design language, the vocabulary is consistent, and the visual rhythm is strong. However, its 768px responsive failure disqualifies it from top ranking as a whole. **Layout 5: Archival Vault** is the most cohesive across BOTH viewports.

### Which has the best reading comfort?

**Layout 2: Geological Core Sample** and **Layout 4: Apprentice Curriculum** tie for best reading comfort. Both have good line lengths, clear hierarchies, and comfortable text sizing. Layout 2 edges ahead because it has less dead space between sections.

### Which feels most "designed"?

**Layout 3: Craftsman's Workbench** at 1440px, by a significant margin. It has the strongest visual conviction, the most varied content elements (dark header, light body, red-bordered callouts, dark code blocks, comparison tables, numbered lists), and the best rhythm. The 768px failure is a builder implementation issue, not a design quality issue.

### Overall ranking by visual quality

1. **Layout 3: Craftsman's Workbench** -- Best design quality, but BROKEN at 768px (responsive failure disqualifies for shipping)
2. **Layout 5: Archival Vault** -- Most immersive, best pacing, strong responsive, needs label color fix
3. **Layout 2: Geological Core Sample** -- Strongest metaphor execution, good pacing, minor palette issue
4. **Layout 4: Apprentice Curriculum** -- Best pedagogical structure, strong responsive, but dead zones
5. **Layout 1: Manuscript Codex** -- Warm atmosphere, but exposed HTML comments and severe dead zones

### Recommended for shipping

**Layout 5: Archival Vault** -- best overall balance of design quality, metaphor coherence, reading comfort, pacing, and responsive behavior. Requires only minor fixes (tone down red labels, thin the header signage).

**Layout 2: Geological Core Sample** as close second -- strong metaphor, good pacing, good responsive. Requires only the salmon callout color adjustment.

### Critical issues requiring fixes before ANY layout ships

| Layout | Severity | Issue |
|--------|----------|-------|
| Layout 1 | WOULD-NOT-SHIP | Exposed HTML comment text visible as rendered content |
| Layout 1 | LOOKS-WRONG | Extreme dead zones between sections (full viewport gaps) |
| Layout 3 | WOULD-NOT-SHIP | Content overflows right edge at 768px -- completely broken responsive |
| Layout 4 | LOOKS-WRONG | Excessive dead zones between lessons |
| Layout 5 | LOOKS-WRONG | Red classification labels too visually aggressive |
| Layout 2 | COULD-BE-BETTER | Salmon callout boxes feel off-tone for geological metaphor |

# Perceptual Audit: Gas Town Layouts

**Auditor:** auditor-gastown
**Mode:** Quick (PA-01 through PA-05) with Cold Look at 1440px and 768px
**Date:** 2026-02-12
**Note:** Playwright contention with concurrent Boris auditor caused intermittent browser takeovers. All 5 layouts were successfully captured at both viewports despite contention. Scroll-through partially completed for Layout 1 before contention; remaining layouts assessed via Cold Look + structural analysis.

---

## Layout 1: Industrial Refinery

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: Heavy and industrial at top, then drops into spacious reading
              territory -- the metaphor is working but the dark-to-light
              transition feels like entering a different page entirely.
Worst thing:  The dead space gap between the comparison table and the
              flow-pipe annotation. The page loses all momentum there.
Best thing:   The gauge strip (stats bar) with the red stripe -- sharp,
              confident, grounded. It anchors the entire layout.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The transition from the dark header into the light content zone feels like a drop -- the red accent stripe does its job but the breathing zone between sections creates a gap where the page feels like it pauses rather than flows. The "Feed Stock" tag next to the section heading looks stuck-on rather than integrated.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The monospace text in the gauge strip values at the top is comfortable but small. The italic quote in the Core Insight section reads well. The comparison table is clean and easy to scan. The flow-pipe annotation text (monospace, describing data flow) feels cramped against the red accent marker on the left. Overall reading comfort is good -- no severe issues.

**PA-03: Does this feel like one designer made it, or three?**
This feels like one designer with a strong vision. The industrial metaphor is consistent: dark header as "control room," gauge strip as instrument panel, bordered vessels as containment units, flow-pipe connectors between sections. The typography hierarchy is clear -- Instrument Serif for headings, Inter for body, JetBrains Mono for labels and code. There is one dialect shift: the breathing zones (italic serif text on neutral background) feel more literary than industrial, slightly breaking the factory metaphor.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title "Gas Town: The Agent Factory" first -- correct. Then to the red gauge values in the stats bar. Then to the italic quote. The hierarchy is working as intended. The "Feed Stock" tag pulls attention slightly before the section heading, which is a minor priority inversion.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, with one fix: the dead space between the comparison table and the flow-pipe annotation at the bottom of the first content section. It feels like a paragraph was deleted. The flow-pipe element (red vertical accent with monospace annotation) is a strong design element but floats in too much emptiness.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The layout compresses gracefully -- the gauge strip wraps
              naturally, text remains readable, the industrial feel
              survives the narrower viewport. Surprisingly solid.
Worst thing:  The gauge strip values crowd together when wrapped -- they
              feel anxious rather than the confident spacing at 1440px.
Best thing:   The header typography scales beautifully -- still commanding
              without overwhelming the narrower frame.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** The gauge strip wrapping -- five metrics competing for space in a narrow band feels cramped. The industrial metaphor's precision is undermined when gauges feel squeezed.

**PA-02:** The comparison table columns feel tighter but remain readable. No text stacking. The flow-pipe annotation text is comfortable. The body text line length is actually improved at this width -- easier to track across lines.

**PA-03:** Still feels like one designer. The compression doesn't introduce dialect shifts. The vessel borders, flow-pipes, and zone separators all maintain their industrial vocabulary.

**PA-04:** Eye still goes to the title first, then the stats. The narrower viewport actually improves the hierarchy by reducing horizontal distraction.

**PA-05:** Yes, but fix the gauge strip wrapping -- it needs more breathing room between metrics at this width.

### Scroll-Through Observations

From the partial scroll-through at 1440px (10 screenshots captured before contention):
- The transition from the dark header through the gauge strip into the first content zone is smooth
- The breathing zone (italic text on neutral background) provides good pacing between heavy content sections
- The flow-pipe connectors (red vertical accent with monospace description) create a clear sense of direction and process flow
- The vessel containers (bordered boxes for each role) have consistent weight and spacing
- The 8-role architecture section is the densest part of the page -- many vessels in sequence -- but the grouping by processing level (Town, Rig, Human) prevents it from feeling monotonous
- The memory layers section (three side-by-side cards) provides welcome horizontal variety after the vertical vessel stack

### Verdict
**SHIP WITH RESERVATIONS.** Strong metaphor execution. The refinery/process-plant framing is natural for this content. Fix the dead zone between the comparison table and flow-pipe, and give the gauge strip more room at narrow viewports.

---

## Layout 2: Military Command Post

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: This feels authoritative and deliberate -- like opening a
              classified briefing document. The "OPERATIONAL BRIEFING"
              stamp with the bordered clearance label immediately sets
              the tone. More serious than the refinery, more human.
Worst thing:  The green accent color on the status indicators (situation
              board) feels slightly too casual -- like a dashboard widget
              rather than a military system.
Best thing:   The classification stamp at the top -- it transforms the
              header from a title into a document. Instantly establishes
              the metaphor with a single design element.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The situation board (dark strip with status indicators) uses green for the values, which reads as "status: OK" dashboard rather than military. The rest of the page is warm browns and reds -- the green breaks the palette. Also, the transition from briefing section to operations section uses a full-width border that feels more like a line break than a strategic transition.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
All text is comfortable. The briefing section has generous spacing and good line length. The comparison table is well-structured with clear column headers. The monospace stamps and insignia labels are small but intentionally so -- they read as annotations rather than content. The officer card descriptions at the bottom of the viewport are slightly dense but readable.

**PA-03: Does this feel like one designer made it, or three?**
One designer with strong conviction. The military vocabulary is consistent throughout: classification stamps, rank insignia labels, chain of command structure, officer cards, operational zones. The typography hierarchy reinforces rank: the Commanding Officer (Mayor) gets the heaviest border and largest type, officers get standard cards, enlisted get compact entries. This is the most coherent metaphor of all five layouts.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to "OPERATIONAL BRIEFING -- CLEARANCE LEVEL: STAGE 7+" stamp first, then to the title. This is actually ideal -- it primes you for the tone before delivering the content name. The hierarchy says "this is serious" before it says "this is Gas Town." That ordering matches the content's own personality.

**PA-05: Would you put your name on this? What would you fix first?**
Yes. Fix the green situation board values -- they should be amber or the same red as the primary accent to stay in the military palette. The green reads as "health dashboard" rather than "war room."

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The military authority survives compression better than
              expected. The classification stamp scales down without
              losing impact. The officer cards stacking vertically
              actually feels MORE like a personnel dossier.
Worst thing:  The situation board labels and values are cramped at this
              width -- the five status indicators compete for space.
Best thing:   The classification stamp -- still commands attention, still
              sets the tone, still looks designed for this width.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** The situation board status indicators -- five items wrapping in a dark strip with too little breathing room. The labels are very small and the values crowd together.

**PA-02:** No text discomfort at this width. The briefing section actually reads better narrow -- the line length is more natural. The officer cards at two-column may squeeze at edge cases but look fine in the screenshot.

**PA-03:** Still one designer. The military dialect is robust across viewports. Stacking actually reinforces the chain-of-command hierarchy -- ranks stack top-to-bottom just like the command structure.

**PA-04:** Eye goes to the classification stamp, then the title, then the situation board. Correct priority ordering maintained.

**PA-05:** Yes. Fix the situation board density at this width. Consider three indicators across instead of five.

### Scroll-Through Observations

Based on structural analysis from source reading:
- The chain of command section uses three processing levels (HQ, Field, Garrison) with clear rank-based nesting
- The commanding officer card (Mayor) stands out with heavier borders and the red top accent -- it commands visual authority matching its content authority
- Officer cards use a two-column grid for Deacon/Dogs, which provides good pacing
- The wave progression section (three stages from Lone Operator to Command Post) mirrors the briefing-to-operational narrative arc
- The pressure warning at the bottom uses the same classification stamp aesthetic -- consistent closure
- The footer quote provides good narrative ending

### Verdict
**SHIP WITH RESERVATIONS.** The strongest metaphor-to-content alignment of all five layouts. The military command vocabulary naturally maps to the 8-role hierarchy. Fix the green status indicators and the situation board density at narrow viewports.

---

## Layout 3: City Zoning Map

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: This feels civic and organized -- like reading a municipal
              planning document. The map legend at top is clever. But the
              page feels heavier than the other two -- more borders, more
              structure, less breathing room. It's working hard.
Worst thing:  The map legend (color swatches with labels) looks like a
              UI component that belongs in a sidebar, not a horizontal
              strip. It feels functional rather than designed.
Best thing:   The Mayor card with the "CITY HALL -- CENTRAL AUTHORITY"
              label and red dashed border -- it genuinely feels like a
              building marked on a zoning map. The metaphor collapses
              perfectly here.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The "MAIN STREET -- CONNECTING DISTRICTS" label between sections. It's trying too hard to be the map metaphor rather than serving the content. It feels like labeling a hallway rather than showing me the building. The connecting elements should be felt, not announced.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The two-column Deacon/Dogs cards at the bottom of the viewport -- the text within them is comfortable but they sit very close together with only a thin gap between them. The columns don't feel like separate buildings; they feel like two cells in a table. The body text in the Mayor card is well-spaced and comfortable.

**PA-03: Does this feel like one designer made it, or three?**
One designer, but one who's fighting the metaphor slightly. The zoning map concept works for the spatial layout (districts, zones, buildings), but the connectors ("MAIN STREET," "CONNECTING DISTRICTS") feel forced. The best parts are where the metaphor is implicit -- the Mayor card LOOKS like City Hall without saying "this is a map." The weakest parts are where the metaphor is announced.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title first, then the map legend, then the quote block. The legend pulls attention before the core insight quote, which is a priority inversion. The legend should be quieter -- reference material, not a focal point.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, but fix the "street" connectors -- they should be visual separators (a rule, a texture change, a color band) rather than labeled announcements. The metaphor is strongest when it's structural, not textual.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: Surprisingly similar to 1440px -- the layout doesn't
              change much at this width, suggesting the content area
              was already narrow. The zoning map metaphor works at this
              width because maps are often viewed at various scales.
Worst thing:  The legend strip at the top -- four swatches in a narrow
              band feel cramped and trivial at this width.
Best thing:   The Mayor "City Hall" card -- still the centerpiece, still
              commanding, still feels like the most important building
              on the map.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** The map legend feels ornamental rather than functional at this width. It doesn't earn its space.

**PA-02:** Text is comfortable throughout. The narrower viewport doesn't introduce reading problems. The two-column Deacon/Dogs cards remain side-by-side and readable.

**PA-03:** Still one designer. The municipal vocabulary (districts, zones, streets) carries through consistently.

**PA-04:** Eye goes to title, then legend, then quote. Same priority inversion as 1440px.

**PA-05:** Yes. Quieten the legend and remove the "MAIN STREET" labels.

### Scroll-Through Observations

Based on structural analysis:
- The page uses a tan/beige background (like old map paper) that differentiates it from the white backgrounds of other layouts
- District sections alternate between white and beige backgrounds, creating a subtle zoning effect
- The Mayor card (City Hall) is visually dominant with red dashed borders -- appropriate for the central authority
- The "Underground Utilities" section (Beads memory) uses a dark background, genuinely feeling like infrastructure beneath the surface
- The Wave progression section uses three district cards with stage labels
- The overall page is denser than Layouts 1-2 due to the map metaphor encouraging everything to be "on the map" at once

### Verdict
**SHIP WITH RESERVATIONS.** The zoning map metaphor is clever and leverages Gas Town's own naming convention (Mayor, town, districts). The implicit structural metaphor (districts as sections, buildings as cards) works well. The explicit textual metaphor ("MAIN STREET -- CONNECTING DISTRICTS") works against itself. Fix the connectors and quiet the legend.

---

## Layout 4: Circuit Board / PCB Schematic

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: This is the coldest, most technical of all five. The dark
              substrate background gives it a genuinely different feel --
              like reading a datasheet. It's precise but impersonal. The
              content cards float like IC packages on a dark PCB.
Worst thing:  The dark gaps between content cards feel like dead circuitry
              -- the space serves no visual purpose and makes the page
              feel fragmented. At 1440px, the light content cards floating
              on dark background create a choppy, disconnected rhythm.
Best thing:   The "U1 -- CPU" badge on the Mayor card. It's a small touch
              but it perfectly maps the IC designation onto the role
              hierarchy. Professional and clever.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The dark substrate (near-black background) between content sections creates a heaviness that fights against comfortable reading. The content is readable within each card, but the transitions between cards are jarring -- dark gaps that feel like voids rather than purposeful spacing. The page feels like a technical reference manual rather than something you'd want to read.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
The header area -- light text on the dark background is readable but the monospace spec line feels small and distant. Within the light content cards, text is very comfortable. The "bus labels" between sections (monospace text describing signal flow) are small and easy to overlook. The pin header stats strip uses red values on a dark background -- readable but straining.

**PA-03: Does this feel like one designer made it, or three?**
One very precise designer. The PCB vocabulary is relentlessly consistent: board designation, pin headers, IC packages (U1, U2, U3), bus labels, design rules (DRC-001), component capacities expressed as package types. This is the most technically committed metaphor of all five. But "technically committed" and "visually warm" are in tension -- this layout chose technical accuracy over human warmth.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title, then the pin header stats, then the first content card. The dark substrate creates a frame effect that focuses attention on the light cards -- like components on a board. This is effective for directing focus but creates a reading experience that feels like inspecting components rather than absorbing a narrative.

**PA-05: Would you put your name on this? What would you fix first?**
Yes, as a technical document. But I'd want to soften the transitions between content cards -- the dark gaps need to feel like purposeful bus traces, not dead air. Adding a subtle connecting element (a thin red trace line between sections) would reinforce the metaphor AND solve the fragmentation problem.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The dark substrate is even more dominant at narrow width --
              the content cards feel like tiles on a dark wall. The
              reading experience is actually improved because the cards
              fill more of the viewport width, reducing the dark border.
Worst thing:  The pin header stats strip -- five items cramped in a dark
              narrow band, red values competing with dark labels.
Best thing:   The IC package badges (U1, U2, etc.) -- they survive
              compression and still feel purposeful and precise.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (768px)

**PA-01:** The dark gaps between sections feel even more like fragmentation at this width. The page reads as separate tiles rather than a connected system.

**PA-02:** Text within cards is comfortable. The pin header stats are cramped. The bus labels between sections are too small at this width.

**PA-03:** Still one designer with strong technical vocabulary. The compression doesn't break the metaphor.

**PA-04:** Eye goes to title, then pin header, then first card. Same hierarchy as 1440px. The narrower viewport actually helps focus.

**PA-05:** Yes. Fix the dark gaps -- add subtle trace lines between IC packages to show the interconnections that the PCB metaphor promises.

### Scroll-Through Observations

Based on structural analysis:
- The dark substrate background creates the strongest visual identity of all five layouts -- immediately recognizable
- IC packages (role cards) use component designations (U1-U5, C1-C3, J1) that map perfectly to the 8-role hierarchy
- The worker array section uses a three-column grid for Polecats (persistent) and a separate three-column for Crew (ephemeral), visually distinguishing them
- The ground plane section (Beads memory) stays on dark background, feeling like a different layer of the PCB -- Layer 4 (bottom)
- The board revision history (waves) maps to PCB revisions -- clever and natural
- Design rules section uses DRC (Design Rule Check) numbering -- deep technical commitment
- The dark-on-light-on-dark rhythm creates a distinctive visual pattern but also a fragmented reading experience

### Verdict
**SHIP WITH RESERVATIONS.** The strongest visual identity but the coldest reading experience. The PCB metaphor is technically brilliant -- every vocabulary choice maps to an electronics concept. But it prioritizes technical precision over reading comfort. Fix the dark gaps between sections with connecting trace elements. This layout would excel as a reference poster but struggles as a reading experience.

---

## Layout 5: Building Floor Plan / Architectural Blueprint

### Cold Look (1440px)

```
COLD LOOK (1440px):
Gut reaction: This feels the most "designed" of all five -- like opening
              architectural plans for a real building. The two-column
              header with drawing number on the left and specs on the
              right is elegant. The floor-level headers with the dark
              bars create a genuine floor-plan feeling.
Worst thing:  The corridor labels ("EXECUTIVE CORRIDOR -- CONNECTING TO
              SUPPORT OFFICES") are overly explicit, same problem as
              Layout 3's "MAIN STREET" labels. Show the corridor, don't
              announce it.
Best thing:   The header's two-column layout with drawing number and
              spec block -- it looks like a real architectural title
              block. Professional, measured, precise.
Ship verdict: YES WITH RESERVATIONS
```

### PA-01 through PA-05 (1440px)

**PA-01: What's the first thing that bothers you?**
The corridor labels. "EXECUTIVE CORRIDOR -- CONNECTING TO SUPPORT OFFICES" is telling me what the space between rooms is, rather than letting me feel the transition. A visual separator (a neutral bar, a thin line, a slight color shift) would serve better than a label. The metaphor is strongest when the architecture IS the layout, not when it's described BY the layout.

**PA-02: Is any text uncomfortable to read? Point to the worst spot.**
Text is comfortable throughout. The room cards have generous internal spacing. The two-column Deacon/Dogs cards at the bottom have good balance. The floor-level header bars (dark with white text) are small but serve as wayfinding rather than reading content. The only slight discomfort: the spec block in the header (occupancy, cost, rooms, memory) uses small text that's right-aligned, making it feel like fine print rather than key specifications.

**PA-03: Does this feel like one designer made it, or three?**
One designer with architectural precision. The vocabulary is consistent: drawing number, floor plan, rooms (301, 302, 303), corridors, floors, occupant specs, the building metaphor maps naturally to the content's hierarchy (floors = processing levels, rooms = roles, corridors = communication). The floor-level dark headers create clear spatial boundaries -- genuinely feels like reading an annotated floor plan.

**PA-04: Where does your eye go first? Is that where it SHOULD go?**
Eye goes to the title "Gas Town: Building Plan" first, then the spec block on the right, then the quote below. The two-column header creates a natural left-to-right reading pattern. The spec block on the right feels like it should be secondary to the title but its red-highlighted values pull attention -- minor priority tension.

**PA-05: Would you put your name on this? What would you fix first?**
Yes. Fix the corridor labels -- make them visual separators rather than textual announcements. And reduce the visual weight of the spec block in the header so it doesn't compete with the title.

### Cold Look (768px)

```
COLD LOOK (768px):
Gut reaction: The floor plan metaphor adapts well to narrow width --
              rooms stack vertically, which is how you'd read a floor
              plan of a narrow building. The floor-level headers (dark
              bars) provide clear section breaks. Feels deliberately
              designed for this width, not squeezed.
Worst thing:  The spec block in the header -- at this width it sits
              above-right of the title, creating a split focus between
              the drawing number/title on the left and the specs on
              the right. They compete rather than complement.
Best thing:   The room cards -- they fill the width naturally and feel
              like actual room layouts within a building. The "ROOM 301
              -- MAIN HALL" badge is sharp and purposeful.
Ship verdict: YES
```

### PA-01 through PA-05 (768px)

**PA-01:** The spec block in the header competing with the title for attention. At narrow width, the eye bounces between left (title) and right (specs) rather than flowing down.

**PA-02:** All text is comfortable. The room cards have good internal spacing. No cramping, no stacking. The corridor labels are less intrusive at this width because they span a narrower band.

**PA-03:** Still one designer. The architectural vocabulary is resilient across viewports. Floor plans can be drawn at any scale -- the metaphor justifies the compression naturally.

**PA-04:** Eye goes to the title, then bounces to the spec block, then to the room cards. At 768px, the room cards start to dominate more of the viewport, which is actually ideal -- the rooms ARE the content.

**PA-05:** Yes, I would ship this at 768px. The spec block competition with the title is the only concern.

### Scroll-Through Observations

Based on structural analysis:
- The header uses a genuine architectural title block with drawing number and spec block -- most professional header of all five
- Floor-level separators (dark bars with floor number and function) create clear spatial hierarchy
- Room numbering (301, 302, 303) provides orientation within the building metaphor
- The corridor elements between rooms reinforce the floor-plan feeling but over-label their purpose
- The basement section (Beads memory) uses the darkest background -- genuinely feels "underground"
- The wave progression section maps to building expansion -- natural and unstrained
- The footer provides a clean narrative ending

### Verdict
**SHIP.** The most elegant layout of the five. The architectural blueprint metaphor maps naturally to the content hierarchy (floors/rooms/corridors = levels/roles/communication). The execution is precise and professional. Only fixes: reduce the spec block's visual competition with the title, and convert corridor labels to visual separators.

---

## Cross-Layout Comparison

### Which metaphor produces the most cohesive visual experience?

**Layout 2: Military Command Post** -- The military vocabulary (classification stamps, rank insignia, chain of command, officer cards) creates the most internally consistent visual language. Every element reinforces the metaphor without announcing it. The classification stamp at the top is a masterclass in establishing tone with a single design element.

### Which has the best reading comfort?

**Layout 1: Industrial Refinery** -- The warm cream background, generous spacing within processing zones, and clear section transitions make this the most comfortable to read for extended periods. The vessel containers provide natural paragraph boundaries without feeling confining. Layout 5 (Building Plan) is a close second.

### Which feels most "designed"?

**Layout 5: Building Floor Plan** -- The architectural title block header, the floor-level separators, the room numbering system, and the overall precision give this layout the most "someone designed this carefully" feeling. It's the layout most likely to impress if shown to a design-aware audience.

### Overall Ranking by Visual Quality

1. **Layout 2: Military Command Post** -- Most cohesive metaphor, best tone-setting, strongest personality. (Score: 8.5/10)
2. **Layout 5: Building Floor Plan** -- Most elegant, most "designed," best header. (Score: 8/10)
3. **Layout 1: Industrial Refinery** -- Best reading comfort, strong metaphor, good flow. (Score: 7.5/10)
4. **Layout 3: City Zoning Map** -- Clever metaphor leveraging Gas Town's own vocabulary, but over-labeled connectors. (Score: 7/10)
5. **Layout 4: Circuit Board** -- Strongest visual identity but coldest reading experience. Technically brilliant, emotionally distant. (Score: 6.5/10)

### Systemic Observations Across All Five Layouts

**Shared Strengths:**
- All five use the same typographic foundation (Instrument Serif / Inter / JetBrains Mono) consistently
- All five have dark headers with red accents transitioning to lighter content areas
- All five have a stats bar / situation board / legend strip beneath the header
- All five handle the 8-role architecture section competently with clear hierarchy
- All five correctly identify the Mayor as the visually heaviest element
- No soul violations detected across any layout (sharp corners, no decorative shadows)

**Shared Weaknesses:**
- All five struggle with the same transition: header -> stats strip -> first content section. The three-stage opening creates a stuttering start rather than a flowing entrance.
- All five have difficulty with the "connecting" elements between sections -- they either over-label (Layouts 3, 5: "MAIN STREET," "CORRIDOR") or under-connect (Layout 4: dark gaps) or feel formulaic (Layout 1: flow pipes, Layout 2: operational zone borders).
- The stats strip / situation board / legend / pin header / spec block is the weakest element across all layouts -- it's trying to compress too much metadata into a narrow band.

**The Gas Town Content Advantage:**
The Gas Town content has a natural advantage for metaphorical layouts because Yegge's original framing is ALREADY metaphorical -- "factory," "colony," "ant," "refinery." The content names its own roles with metaphorical language (Mayor, Dogs, Polecats, Crew, Witness). This means every layout is working WITH the content rather than against it, which is why all five layouts feel more cohesive than they might with more abstract content.

**WOULD-NOT-SHIP findings:** None. All five layouts are shippable.
**LOOKS-WRONG findings:** 3 (Layout 4 dark gaps, Layout 3/5 over-labeling)
**COULD-BE-BETTER findings:** 7 (stats strip density at 768px across all, green accent in Layout 2, dead zone in Layout 1, spec block competition in Layout 5, corridor labels in Layouts 3 and 5)

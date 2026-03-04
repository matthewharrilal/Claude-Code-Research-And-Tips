# Rhythm Analysis: Progressive Enrichment Experiment

**Source:** `ephemeral/builds/molly-panopticon-progressive-enrichment-2026-03-03/`
**Purpose:** Extract the actual pattern for the `/falls-in-love` skill

---

## A. THE WAVE STRUCTURE

### Overall Arc

Five waves, each with a distinct role in the progressive enrichment trajectory:

| Wave | Name | Role | Research Absorbed | Mode |
|------|------|------|-------------------|------|
| 1 | Identity + Content Foundation | Build from scratch | Soul documents (identity.md, vocabulary.md, tokens.css, components.css) + raw content markdown | **GENESIS** -- create the entire page architecture |
| 2 | R1-R5 Research Findings | Add design vocabulary | R1 (28 findings), R2 (27), R3 (51), R4 (192), R5 (39) + RESEARCH-SYNTHESIS.md -- 337 findings total | **EXPANSION** -- new components, new layout strategies |
| 3 | Organization Depth (OD) | Add structural intelligence | OD-004-confidence.md, OD-006-creative.md, OD-001-conversational.md, grammar/mechanisms.md, grammar/grammar.md | **EXPANSION** -- hierarchy, annotation, interactivity |
| 4 | Density Depth (DD) + Axis Depth (AD) | Add spatial intelligence | DD-006-fractal.md, DD-003-islands.md, DD-006-fractal.html (visual study), grammar refs | **EXPANSION** -- density rhythm, width variation, fractal navigation |
| 5 | Combination Depth (CD) | Integrate and refine | CD-006-pilot-migration.md, grammar refs | **REFINEMENT** -- no new components, architectural repair, compound mastery |

### The Arc in One Line

**Genesis -> Expansion -> Expansion -> Expansion -> Refinement**

Waves 1-4 = adding new things. Wave 5 = stopping, integrating, and cleaning what already exists. The shift from additive to subtractive is critical -- Wave 5 removed ~86 lines of dead CSS and added zero new component types.

### Passes Per Wave

| Wave | Passes | Notes |
|------|--------|-------|
| 1 | ~5 (not individually logged) | Retrospective written as unified narrative |
| 2 | 5 (3 logged as sub-passes + 2 refinement) | Pass 1 = big additions, Pass 2 = velocity fixes, Pass 3 = refinement, Passes 4-5 = further refinement |
| 3 | 5 | Each individually logged. Pass 1 = bento + annotations, Pass 2 = quote variety + culmination, Pass 3 = dividers + character density, Pass 4 = hover states, Pass 5 = summary strip + responsive |
| 4 | 5 | Each individually logged. Pass 1 = terrain map, Pass 2 = margin note, Pass 3 = dark zone hovers, Pass 4 = featured model cell, Pass 5 = density breather + responsive |
| 5 | 6 | The only wave with 6 passes. Pass 1 = inline style elimination, Pass 2 = terrain map interactivity, Pass 3 = character-level density, Pass 4 = transition grammar, Pass 5 = CSS architecture repair, Pass 6 = retrospective |

**Pattern:** Minimum 5 passes per wave. Wave 5 had 6, suggesting refinement waves naturally need more passes because they discover architectural issues (like the CSS source order bug) that weren't visible during additive phases.

### Research Feed Per Wave

- **Wave 1:** Foundation documents only. No research findings. The agent needed to understand identity and content before it could use research. ~5 files.
- **Wave 2:** All 5 primary research documents + synthesis. The biggest single research infusion (337 findings). ~6 files.
- **Wave 3:** 3 OD case studies + 2 grammar reference files. Narrower but deeper. ~5 files.
- **Wave 4:** 2 DD case studies + 1 HTML visual study + grammar refs. Even narrower. ~4-5 files.
- **Wave 5:** 1 CD case study + grammar refs. The narrowest research set but the deepest engagement. ~3 files.

**Pattern:** Research scope narrows as waves progress. Wave 2 is the widest aperture (337 findings from 6 files). By Wave 5, the agent reads one case study deeply. This mirrors how learning works: early exposure is broad, later engagement is selective and integrative.

### Scope Change Across Waves

- **Wave 1:** Build everything from nothing. Entire 5-zone page architecture, all major content placed.
- **Wave 2:** Add ~8-10 new component types (drop cap, pull quotes, sidebar notes, cinematic banner, numbered steps, callouts, decompression prose). Biggest component expansion.
- **Wave 3:** Add ~6 new component types (zone annotations, landscape quote, section dividers, summary strip, hover states, culmination spread). Also redesigned existing component (bento grid).
- **Wave 4:** Add ~4 new components (terrain map, margin note, density breather, featured model cell). Smaller additions but more inventive (terrain map is a novel creation, not application of a pattern).
- **Wave 5:** Add 0 new component types. Instead: eliminate inline styles (20+ elements), add interactivity to existing component, complete fractal density system, fill transition grammar gap, fix CSS architecture bug, remove dead code.

**The curve:** Each wave added fewer new things but added them with more intelligence. Wave 5 added nothing new and instead made everything existing work together better. This is the "falling in love" arc -- you stop wanting new things and start understanding what you have.

---

## B. THE WITHIN-WAVE RHYTHM

### What a Single Pass Looks Like

The README describes the canonical pass cycle:

1. **Read** a set of research files
2. **Look** at the current state of the page
3. **Build** -- apply what the research suggested, informed by what the page currently needs
4. **Look** at what changed
5. **Refine** -- fix what didn't work, improve what almost worked
6. **Look** again
7. **Refine** again
8. Repeat 5-7 for several passes (minimum 5 per wave)
9. **Write a retrospective** -- what was learned, what still needs work
10. **Move to the next wave**

The core loop is: **Read -> Look -> Build -> Look -> Refine -> Look -> Refine -> Look**

"Look" appears 4+ times in a single pass cycle. Looking at the rendered page is not a validation step -- it is the primary driver of decisions. The agent doesn't build from a plan and then check; it builds a little, looks, and lets what it sees determine what happens next.

### How Passes Within a Wave Relate

**Pass 1 = Biggest structural changes.** This is where the research hits the page for the first time. In Wave 2, Pass 1 added drop caps, pull quotes, sidebar notes, cinematic banners, and numbered steps. In Wave 4, Pass 1 created the terrain map (the most inventive single addition across all waves).

**Middle passes = Targeted fixes and additions.** Wave 2 Pass 2 was explicitly labeled "Velocity Fixes" -- inserting FAST components between SLOW ones. Wave 3 Pass 3 added section dividers. Wave 4 Pass 3 added dark zone hover states. These passes address specific problems identified while looking at Pass 1's results.

**Final passes = Refinement, responsive, and cleanup.** Wave 2 Pass 3 reduced whitespace voids and varied a quote format. Wave 3 Pass 5 added responsive styles. Wave 4 Pass 5 added a density breather and responsive styles. The last pass often handles responsive -- which makes sense, because responsive requires the desktop design to be stable first.

**Pattern within a wave:**
```
Pass 1:  BIG STRUCTURAL MOVES (research -> page)
Pass 2:  TARGETED FIXES (looking at Pass 1 results -> specific improvements)
Pass 3:  SECONDARY ADDITIONS (smaller research applications + refinement)
Pass 4:  POLISH (hover states, character-level details, edge cases)
Pass 5:  INTEGRATION (responsive, spacing, cleanup)
Pass 6:  (Wave 5 only) RETROSPECTIVE / ARCHITECTURAL REPAIR
```

### Screenshot Rhythm

Screenshots were taken at specific moments (the README lists them in the artifacts section):
- Wave 1: 2 progress captures (pass 1, pass 2)
- Wave 2: 2 progress captures (pass 1, pass 2)
- Wave 3: 3 captures (pre-wave, pass 1, pass 5) -- the "pre" capture shows the agent looking at the page BEFORE starting work
- Wave 4: 1 capture (pass 5 -- end of wave)
- Wave 5: captures exist but fewer
- Final: 6 captures across 3 viewports (1440, 1024, 768) x 2 views (full, fold)

**Pattern:** Screenshots decrease as waves progress. By Wave 4-5, the agent is confident enough in its mental model of the page that it doesn't need as many external confirmations. But the "look" step still happens through browser interaction -- screenshots are just the recorded subset.

The Wave 3 "pre" screenshot is notable: the agent looked at the page BEFORE reading Wave 3 research. This is the "what does the page need?" question that precedes the "what does the research offer?" question. Looking comes first. Research comes second.

---

## C. THE SELF-CRITIQUE CHAIN

### "What Still Needs Work" Across All 5 Waves

#### Wave 1 Critique Items:
1. Layout variety is LIMITED -- most zones use single-column vertical flow with occasional grids
2. The dark zone is too long and too uniform in density
3. Zone transitions (especially Zone 2->3) are still subtle
4. The terrain quotes all look the same -- no variation
5. The page feels competent but not EXCITING -- needs more visual character
6. The opening (above the fold) could be more dramatic
7. Code blocks in Zone 3 are a wall of dark rectangles with no rhythm variation

#### Wave 2 Critique Items:
1. Zone 4 internal rhythm -- still mostly uniform (heading, prose, quote, heading, dialectic...)
2. Sidebar notes need visual refinement -- backgrounds could be more distinct
3. Terrain quote variations -- two styles now but dark zone could have a third
4. The 8-domain grid is still a flat 4-column layout -- R4 suggests bento grids
5. No density at the character level -- R3 talks about fractal density at character scale

#### Wave 3 Critique Items:
1. Domain grid bento could use more pronounced visual hierarchy
2. **Zone 1 feels long** -- most prose with least layout variety (NEW observation)
3. Model grid in Zone 5 is still flat 3-column with uniform left-border
4. **No hover states on dark zone elements** (NEW observation)
5. Footer is minimal

#### Wave 4 Critique Items:
1. **Zone 1 is STILL the longest zone** with least structural variety (PERSISTED from Wave 3)
2. No color temperature variation across zones (NEW)
3. **Terrain map has no interactivity** -- clicking should scroll to zone (NEW -- critiquing own Wave 4 creation!)
4. Footer is still minimal (PERSISTED from Wave 3)
5. Character-level density present in a few places but not systematically applied (PERSISTED from Wave 2)

#### Wave 5 "Could Be Explored" Items (terminal list):
1. Zone 1 layout variety (PERSISTED across Waves 3, 4 -- partially addressed by margin note but never fully resolved)
2. Color temperature within zones (PERSISTED from Wave 4)
3. Scroll-based terrain map highlighting via Intersection Observer (evolution of Wave 4 item 3)
4. More transition variety -- non-text dividers (NEW)
5. Dark theme support (NEW)

### Tracing the Resolution Chain

| Item | First Appeared | Addressed In | Resolution |
|------|---------------|--------------|------------|
| Layout variety limited | Wave 1 (#1) | Wave 2 (pull quotes, sidebars, cinematic banner) | RESOLVED by Wave 2 at page level |
| Dark zone too uniform | Wave 1 (#2) | Wave 3 (section dividers, landscape quote) | RESOLVED by Wave 3 |
| Zone transitions subtle | Wave 1 (#3) | Wave 5 Pass 4 (Zone 1->2 bridge added) | RESOLVED by Wave 5 -- last transition gap filled |
| Terrain quotes uniform | Wave 1 (#4) | Wave 2 (full-bleed), Wave 3 (landscape) | RESOLVED by Wave 3 -- 3 distinct quote styles |
| Page not exciting | Wave 1 (#5) | Progressive across Waves 2-4 | RESOLVED incrementally, never in a single pass |
| Code block wall | Wave 1 (#7) | Wave 2 Pass 2 (callout + sidebar insertions) | RESOLVED by Wave 2 |
| Zone 4 uniform rhythm | Wave 2 (#1) | Wave 3 (section dividers, landscape quote) | RESOLVED by Wave 3 |
| No character-level density | Wave 2 (#5) | Wave 5 Pass 3 (systematic letter-spacing) | RESOLVED by Wave 5 -- took 3 waves to address |
| 8-domain grid flat | Wave 2 (#4) | Wave 3 Pass 1 (bento redesign with featured cards) | RESOLVED by Wave 3 |
| Zone 1 feels long | Wave 3 (#2) | Wave 4 Pass 2 (margin note) | PARTIALLY RESOLVED -- persisted to end |
| No dark zone hover states | Wave 3 (#4) | Wave 4 Pass 3 | RESOLVED by Wave 4 |
| Model grid flat | Wave 3 (#3) | Wave 4 Pass 4 (featured model cell) | RESOLVED by Wave 4 |
| Footer minimal | Wave 3 (#5) | Never | UNRESOLVED -- persisted to end |
| Terrain map not interactive | Wave 4 (#3) | Wave 5 Pass 2 (click-to-scroll JS) | RESOLVED by Wave 5 |
| Color temperature variation | Wave 4 (#2) | Never | UNRESOLVED -- persisted to end |

### Persistent Items (Crossed 2+ Wave Boundaries)

1. **"Zone 1 feels long"** -- First noted Wave 3, partially addressed Wave 4 (margin note), still listed Wave 5. This is the stickiest problem because Zone 1 contains the most content and breaking it up without losing the thesis argument is genuinely hard.

2. **"Character-level density"** -- First noted Wave 2, mentioned Wave 4, finally resolved Wave 5. This one was always understood but kept getting deprioritized in favor of larger structural changes. It needed the refinement wave to get addressed.

3. **"Footer is minimal"** -- First noted Wave 3, repeated Wave 4, survived to end. The agent noted it but never prioritized it over more impactful work. This shows triage behavior -- some problems are real but not worth the pass.

### Moments Where Looking Revealed What Research Didn't

1. **Wave 1:** "The page feels competent but not EXCITING" -- no research file told the agent this. It looked at its own work and was dissatisfied. This dissatisfaction drove the entire remaining trajectory.

2. **Wave 3:** "Zone 1 feels long" -- this was a visual/reading observation, not a research finding. The OD research talked about structure and annotation but didn't say "your Zone 1 is too long." The agent noticed a reading-pace problem by looking at the rendered page.

3. **Wave 4:** "The terrain map has no interactivity" -- the agent created the terrain map in Wave 4 Pass 1, then in its own retrospective criticized it for lacking interactivity. The research inspired the component; looking at the component revealed the missing affordance.

4. **Wave 5 Pass 5:** The CSS source order bug. No research file discusses CSS source order. The agent found this by testing responsive behavior and noticing that Wave 3-4 components weren't responding to the `@media` block. Looking at the rendered page at 768px revealed a process-created bug that no research could have predicted.

---

## D. THE LEARNING PROGRESSION

### What the Agent Said It "Learned" in Each Wave (Quoted)

#### Wave 1 -- COMPETENCE WITHOUT CHARACTER
> "The page feels competent but not EXCITING. It needs more visual character."
> "Layout variety is LIMITED."
> "The bilateral asymmetry between institutional sight and personal blindness is THE thesis."

The agent knows what the content is about and can build a complete page, but recognizes the result is flat. Its self-awareness is already active but its vocabulary is limited to noticing absence ("limited," "needs more").

#### Wave 2 -- DISCOVERING VELOCITY
> "The velocity model is the most directly useful finding."
> "Breaking the column is the strongest visual move available."
> "Density is rhythm, not quantity."
> "The cinematic pattern matches the content arc."

The agent starts developing preferences. Out of 337 research findings, it ranks the velocity model highest -- not because it was told to, but because it could see the impact on its own page. It's starting to curate: some findings matter more than others, and the page itself is the test.

#### Wave 3 -- UNDERSTANDING HIERARCHY
> "Structure visibility is educational, not decorative."
> "Hierarchy in grids is more interesting than uniformity. Not all cells are equal because not all content is equal."
> "Mode transitions need explicit markers."
> "Culmination signals arrival."
> "Quote variety prevents monotony."

The agent moves from individual techniques (velocity, pull quotes) to structural principles (hierarchy, visibility, culmination). The insight about structure being "educational, not decorative" shows it's starting to reason about WHY components work, not just WHAT they do.

#### Wave 4 -- DISCOVERING FRACTAL SELF-SIMILARITY
> "Fractal self-similarity is the most generative density principle."
> "Density islands need ocean."
> "Width variation creates reading interest."
> "Bento grid hierarchy makes content legible."

"Most generative" is a judgment about research utility that requires having tried many things. The agent is now evaluating which principles produce the most design possibilities, not just which techniques look good. It's reasoning about principles as tools for invention.

#### Wave 5 -- ARCHITECTURAL MATURITY
> "Compound combination requires clean architecture."
> "Transition grammar creates reading rhythm."
> "Dead code is compound combination debt."
> "CSS source order is a first-class architectural concern."

The agent has shifted from visual thinking to systems thinking. It's reasoning about code architecture (inline styles as combination barriers, CSS source order as architectural concern, dead code as debt). This is the deepest understanding because it's about enabling future changes, not making current changes.

### How Understanding Deepened

The progression maps cleanly:

```
Wave 1: "This is competent but flat"           --> AWARENESS of the problem
Wave 2: "Velocity is the most useful finding"   --> TECHNIQUE selection through experience
Wave 3: "Hierarchy is more interesting"         --> PRINCIPLE formation (why things work)
Wave 4: "Fractal self-similarity is generative" --> META-PRINCIPLE (principles about principles)
Wave 5: "Clean architecture enables compound"   --> SYSTEMS THINKING (enabling future composition)
```

### When the Agent Started Having Opinions

The shift happens between Wave 1 and Wave 2. In Wave 1, the agent describes what it built and what's missing -- it's reporting. In Wave 2, it says "The velocity model is the most directly useful finding." That's not reporting. That's ranking. The agent has tried things, seen results, and decided which research finding matters most.

By Wave 3, the agent has full opinions: "Hierarchy in grids is more interesting than uniformity." The word "interesting" is an aesthetic judgment. The agent isn't saying the bento grid is more correct or more compliant -- it's saying it's more interesting. It has taste.

By Wave 5, the agent is making architectural decisions that no research file prescribed: eliminating inline styles, reordering CSS, removing dead code. These decisions come entirely from the agent's accumulated understanding of how the page works as a system. The research provided the concept of "compound combination," but the decision to eliminate inline styles as the enabling architectural move was the agent's own.

---

## E. THE HTML FILE AS MEMORY

### How the File Grew

The README and wave logs provide these data points:

- **Wave 1:** Complete 5-zone page architecture created from scratch. No line count recorded, but the foundation of ~35 component types was established.
- **Wave 5 start:** 2,375 lines (the pre-Wave-5 count mentioned in Final Build Stats)
- **Wave 5 end:** 2,465 lines total (~1,738 lines CSS). Net growth despite removing ~86 lines of dead code.

The file grew continuously from Wave 1 through Wave 5. It never shrank (even Wave 5's cleanup was offset by new CSS classes and the Zone 1->2 bridge). The trajectory was always additive to the HTML -- even the "refinement" wave added net lines because moving inline styles to classes required new CSS selectors.

### What Carried Forward Between Context Windows

The README is explicit about this:

> "The HTML file was both the output and the memory. When the agent hit context limits and had to continue in a new session, the HTML file carried forward everything that mattered -- every CSS class, every component, every structural decision."

> "This is different from a pipeline log or a decisions document. Those are descriptions of what was done. The HTML file IS what was done. It doesn't summarize -- it embodies."

What the HTML file carried that a handoff document could not:
1. **Every CSS class** -- the exact vocabulary of components the agent had created
2. **Every structural decision** -- the 5-zone architecture, the transition types, the component hierarchy
3. **The density rhythm** -- visible by reading the HTML structure (sparse zone, dense zone, breathing zone, dark zone, synthesis zone)
4. **The naming conventions** -- `.zone--datum`, `.zone--contour`, `.terrain-quote--warm`, `.callout--field` -- which encode the agent's understanding of each component's role
5. **The responsive architecture** -- which components had mobile overrides and which didn't
6. **The bugs** -- the CSS source order problem was carried in the file until Wave 5 found it

### How Previous Waves Informed Later Waves

Specific examples of cross-wave intelligence:

1. **Wave 3 bento grid -> Wave 4 featured model cell:** The agent applied the "featured cell" bento pattern from Wave 3's domain grid redesign to Wave 4's model grid. Same principle, different zone. The agent recognized the pattern in its own work and reapplied it.

2. **Wave 3 hover states -> Wave 4 dark zone hovers:** Wave 3 added hover states to domain cards and principle cards. Wave 4 extended the same pattern (border-color transition, 150ms ease) to dialectic panels and anti-pattern cards. The 150ms timing was carried from Wave 3 as a design constant.

3. **Wave 2 terrain quotes -> Wave 3 landscape quote -> Wave 5 quote variety:** Wave 1 had one quote style. Wave 2 added full-bleed. Wave 3 added landscape. By Wave 5, the agent could reference "3 quote styles" as a completed system. Each wave's additions built on the previous waves' vocabulary.

4. **Wave 4 terrain map -> Wave 5 interactivity:** The agent created the terrain map in Wave 4 as a static visualization. In its own Wave 4 retrospective, it noted the missing interactivity. In Wave 5, it added click-to-scroll JavaScript. The HTML file carried the component; the retrospective carried the dissatisfaction.

5. **Wave 1-4 inline styles -> Wave 5 elimination:** Inline styles accumulated across all 4 additive waves. Wave 5 recognized them as "compound combination debt" and systematically eliminated all 20+ instances. This could only happen because the agent could see the cumulative result in the file.

---

## F. SPECIFIC MOMENTS OF DISCOVERY

### 1. The Terrain Map Invention

**Wave:** 4, Pass 1
**Research input:** DD-006-fractal.md (fractal self-similarity at 4 scales)
**What happened:** The agent read about fractal density -- the same dense/sparse alternation occurring at page, section, component, and character scales simultaneously. Instead of just applying density variation to existing components, it invented a new component: a 5-column map showing each zone's density character (Sparse, Dense, Working, Deep, Synthesis), placed at the top of the page.

The README calls this out explicitly:

> "The terrain map is the clearest example of knowledge-through-building. The agent read about fractal density, then invented a component that makes the page's own density structure visible. No specialist prescribed this. The agent saw a principle in the research and saw a need on the page and created the connection."

**Why this matters for /falls-in-love:** This is the moment where the agent stopped applying research as instructions and started using research as creative material. The research said "density operates at multiple scales." The agent's creative contribution was: "What if the page itself shows its own density pattern?" This is invention, not application. The research was the catalyst, but the idea was the agent's.

### 2. The CSS Source Order Bug

**Wave:** 5, Pass 5
**What happened:** Components added in Waves 3-4 (margin-note, terrain-map, landscape-quote, section-divider, editorial-spread) had their base CSS defined AFTER the `@media (max-width: 768px)` responsive block. Due to CSS source order, the base styles (defined later) overrode the responsive overrides (defined earlier). The result: responsive behavior was broken for all Wave 3-4 components.

The agent's reflection:

> "This is the kind of bug that only surfaces in testing at the exact breakpoint, and it existed because components were appended to CSS in wave order rather than architectural order."

**Why this matters for /falls-in-love:** This is a bug that ONLY exists because of the wave process. In a single-pass build, all components would be defined before the responsive block. In a multi-wave build, each wave appends new component CSS at the end of the stylesheet -- after the responsive block. The agent found this bug through its own testing, diagnosed it as a process artifact, and fixed it. This is the agent debugging its own methodology, not just its output.

### 3. The Transition Grammar Completion

**Wave:** 5, Pass 4
**What happened:** The agent noticed that all zone transitions had explicit bridge elements except Zone 1->2, which only had a structural border. It called this "the weakest transition" and added a BRIDGE-type prose element ("The Problem Is Clear").

Before Wave 5 Pass 4:
- Zone 1->2: structural border only (NO explicit bridge)
- Zone 2->3: Bridge ("From the Drafting Table to the Field")
- Zone 3->4: Cinematic Banner ("Descent")
- Zone 4->5: Summary Strip (icon + summary text)

After:
- Zone 1->2: Bridge ("The Problem Is Clear")
- Zone 2->3: Bridge
- Zone 3->4: Cinematic Banner
- Zone 4->5: Summary Strip

The agent also noted the transition type variety: BRIDGE, BRIDGE, CINEMATIC, SUMMARY -- "The transition types vary but the presence of explicit transitions is consistent."

**Why this matters for /falls-in-love:** This is pattern completion. The agent didn't just see a missing component -- it saw an incomplete grammar. It understood that the 4 zone transitions formed a system, and that system had a gap. The research (CD-006) introduced the concept of "transition grammar," but the agent's observation that Zone 1->2 was the weakest came from looking at its own page and comparing transition quality across zones.

### 4. Inline Style Elimination as Architectural Insight

**Wave:** 5, Pass 1
**What happened:** The agent moved ALL inline `style=""` attributes (20+ elements) to proper CSS classes. It created 14 new CSS selectors. It then verified 0 inline styles remained via grep.

The agent explicitly framed this as architectural, not cosmetic:

> "CD-006 taught that compound combination (DD + OD + AD operating simultaneously) requires clean mechanism separation. Moving to classes enables true stacking -- a `.zone--contour .file-tree` can have DD (density variant), OD (organizational variant), and AD (axis variant) all composed cleanly through CSS specificity."

> "Dead code is compound combination debt."

**Why this matters for /falls-in-love:** This is the highest-maturity moment in the experiment. The agent read CD-006's compound combination theory, looked at its own code, and realized that inline styles were preventing compound combination from working. The research described a principle; the agent diagnosed its own codebase against that principle and performed surgery. This is not applying research -- this is using research as a diagnostic lens on your own work.

---

## G. SYNTHESIS: THE PATTERN FOR /falls-in-love

### The Core Rhythm

```
WAVE 1: Build from identity + content (GENESIS)
  - 5+ passes: build -> look -> refine -> look -> refine -> look
  - End: retrospective identifying what's flat/missing/boring

WAVE 2: Absorb broadest research set (WIDE APERTURE)
  - 5+ passes: read research -> look at page -> apply -> look -> refine
  - End: retrospective identifying what the research taught + what still needs work

WAVE 3-4: Absorb narrower, deeper research (TARGETED DEPTH)
  - 5+ passes per wave: same rhythm
  - Each wave addresses items from previous "What Still Needs Work" lists
  - End: retrospective with increasingly sophisticated self-critique

WAVE 5: Integration and refinement (COMPOUND MASTERY)
  - 5-6 passes: NO new components, instead:
    - Clean architecture (move inline to classes)
    - Add interactivity to existing components
    - Complete unfinished systems (fractal density, transition grammar)
    - Fix process-created bugs (CSS source order)
    - Remove dead code
  - End: final retrospective with terminal "Could Be Explored" list (not "Needs Work")
```

### What Makes It Work

1. **The agent never compresses knowledge for another agent.** It reads research itself and applies it while looking at a page it built. Knowledge and skill live in the same context.

2. **The HTML file is the memory.** Between context windows, the file carries everything: every CSS class, every structural decision, every naming convention, every bug. A new session reads the file and inherits the cumulative result.

3. **Looking drives decisions more than research does.** Research provides vocabulary and principles. But the agent's dissatisfaction with what it sees -- "competent but not exciting," "Zone 1 feels long," "the weakest transition" -- is what actually determines what happens next.

4. **Self-critique is continuous and unmanaged.** No orchestrator routes the "What Still Needs Work" items. The agent remembers its own dissatisfactions and addresses them when the right research arrives or when the refinement wave gives it space.

5. **The shift from additive to subtractive signals maturity.** Wave 5 adds nothing new. It integrates, repairs, and cleans. The agent knows when to stop adding and start understanding what it has. This is the moment of falling in love -- when you stop wanting the page to be different and start wanting it to be more fully itself.

6. **Research narrows as understanding deepens.** 337 findings in Wave 2, one case study in Wave 5. The agent doesn't need more material -- it needs deeper engagement with less material. The funnel shape of research absorption mirrors the funnel shape of creative mastery.

7. **Opinions emerge from building, not from being told.** The agent decides velocity is the most useful finding by trying things and seeing results. It decides hierarchy is more interesting than uniformity by building both. It decides inline styles are architectural debt by trying to compose compound mechanisms. Every opinion is earned through craft, not received through instruction.

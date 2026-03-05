# Progressive Enrichment Experiment

**Date:** 2026-03-03
**Content:** Molly Cantillon's Personal Panopticon (deep extraction)
**Output:** `_build.html` — 2,465 lines, ~1,738 lines CSS, 5-zone architecture
**Method:** One Opus agent, 5 waves of research absorption, ~26 refinement passes
**Duration:** Multiple sessions (agent hit usage limits, continued across context windows)

---

## What This Was

One agent. One HTML file. Five waves of research. Constant building, looking, absorbing, refining, building, looking, absorbing, refining.

No pipeline. No specialists. No synthesizers. No handoff documents. No compression. No extraction of rules for another agent to follow.

Just an agent that built something, looked at what it built, read some research, improved what it built, looked again, improved again, read more research, improved again. For hours.

The HTML file was the artifact that held everything. Every wave refined on top of the last wave's work. Nothing was thrown away. Nothing was started over. The page grew.

---

## Why This Happened

Before this experiment, we ran the Tripod Pipeline on the same content — 17 agents, 5 phases, ~$60, ~4 hours. TC agent derives a metaphor. 5 specialists curate 26,528 lines of research into packages. A synthesizer compresses those packages. 3 builder passes execute from the packages. 5 auditors evaluate. A weaver synthesizes the audits. Fix builders repair.

The output was flat. Bland. Competent committee design.

The infrastructure was actively working against the creative work:

- **50:1 compression ratio.** 337 research findings compressed into a handful of action items. 99.8% of the knowledge never reached the builder.
- **Broken feedback loop.** The builder wrote HTML it never saw rendered. Screenshots happened in a later phase, seen by auditors who had zero context about builder intent.
- **Handoff documents as lossy telephine.** Each phase produced summaries. Each summary lost context. The builder got `_pass-1-decisions.md` — a 20-line summary of hours of creative work — and was expected to build on top of decisions it didn't understand.
- **Fresh-eyes principle as enforced amnesia.** Auditors were deliberately given zero context. They evaluated the page without knowing what it was trying to be. This caught surface problems but missed everything about whether the page achieved its own ambitions.
- **Division of labor as division of understanding.** The specialist who understood DD-006 fractal density never wrote CSS. The builder who wrote CSS never read DD-006. The knowledge and the skill lived in different agents and never met.

The pipeline was a machine for losing information. Every handoff was a lossy compression. Every phase boundary was a wall. The infrastructure was the problem.

---

## The Method: Build, Look, Absorb, Refine

### The Rhythm

Each wave followed the same rhythm:

1. **Read** a set of research files (case studies, findings, mechanism catalogs, grammar rules)
2. **Look** at the current state of the page
3. **Build** — apply what the research suggested, informed by what the page currently needed
4. **Look** at what changed
5. **Refine** — fix what didn't work, improve what almost worked
6. **Look** again
7. **Refine** again
8. Repeat 5-7 for several passes (minimum 5 per wave)
9. **Write a retrospective** — what was learned, what still needs work
10. **Move to the next wave** of research, carrying everything forward

The key: the agent never compressed its understanding into a document for another agent. It never extracted principles for someone else to follow. It just kept building. The understanding lived in the agent's context and in the HTML file itself.

### The HTML File as Living Memory

The HTML file was both the output and the memory. When the agent hit context limits and had to continue in a new session, the HTML file carried forward everything that mattered — every CSS class, every component, every structural decision. A new session could read the file and see the cumulative result of all previous waves.

This is different from a pipeline log or a decisions document. Those are descriptions of what was done. The HTML file IS what was done. It doesn't summarize — it embodies.

---

## Wave-by-Wave

### Wave 1: Identity + Content Foundation

**Research absorbed:** Design system soul documents (identity.md, vocabulary.md, tokens.css, components.css) and the raw content markdown.

**Passes:** Built the entire 5-zone page architecture from scratch. The cartographic survey station metaphor. Zone 1 (Datum Point, warm cream, sparse) through Zone 5 (Projection, return to cream, synthesis). Bilateral asymmetry block communicating the thesis visually. 8-domain bento grid. Dark zone for philosophy. Stats row, model grid, capstone.

**What the agent noticed about its own work:**
> "The page feels competent but not EXCITING. It needs more visual character."
> "Layout variety is LIMITED — most zones use single-column vertical flow."
> "The terrain quotes all look the same — no variation."

No auditor told it these things. It looked at what it built and saw the problems.

### Wave 2: R1-R5 Research Findings (337 findings)

**Research absorbed:** All 5 research documents — documentation patterns, creative layouts, density dimensions, axis innovations, combination theory. Plus the research synthesis.

**5 passes:**
- **Pass 1:** Drop cap on opening paragraph. Full-bleed pull quotes that break the content column. Sidebar notes. Cinematic descent banner between zones. Numbered steps replacing a flat grid.
- **Pass 2:** Velocity fixes — inserting FAST components (callouts, annotations) between SLOW ones (code blocks). "Design Principle" callout after code block. "Why This Matters" sidebar between code blocks.
- **Pass 3:** Refinement — reduced excess whitespace, converted a quote to full-bleed for variety.
- **Passes 4-5:** Further refinement on spacing and component relationships.

**What the agent learned, in its own words:**
> "The velocity model is the most directly useful finding."
> "Breaking the column is the strongest visual move available."
> "Density is rhythm, not quantity."

Out of 337 findings, the agent ranked the velocity model highest — not because a specialist told it to, but because it could see the impact on its own page. This is curation through building, not curation through analysis.

### Wave 3: Organization Depth (OD Case Studies)

**Research absorbed:** Three OD case studies (conversational, confidence, creative) plus the full mechanism catalog and grammar rules.

**5 passes:**
- **Pass 1:** Bento grid redesign — ~/nox and ~/trades now span 2 columns with icon anchors. Zone annotations ("Zone 1 of 5 — The Datum Point") added to every zone.
- **Pass 2:** Landscape quote — a third quote variant with vertical citation and red accent bar. Culmination spread — Zone 5's heading amplified to 40px to signal ARRIVAL.
- **Pass 3:** Section dividers within Zone 4 for cognitive breathing room. Compact callout CSS.
- **Pass 4:** Territorial hover states on domain cards and principle cards.
- **Pass 5:** Summary strip between Zone 4 and Zone 5 as decompression layer. Responsive styles for all new components.

**What the agent learned:**
> "Hierarchy in grids is more interesting than uniformity. Not all cells are equal because not all content is equal."
> "Mode transitions need explicit markers."
> "Culmination signals arrival."

Notice: the agent identified "Zone 1 feels long — most prose, least layout variety" and carried that observation into Wave 4 as something to fix. No orchestrator routed this. The agent remembered its own critique.

### Wave 4: Density Depth (DD) + Axis Depth (AD)

**Research absorbed:** DD case studies (fractal density, density islands), the DD-006 visual HTML study, AD principles from grammar files.

**5 passes:**
- **Pass 1:** Terrain map — a 5-column visualization showing each zone's density character. The page's own rhythm made visible as a navigable element. DD-006's fractal principle applied literally.
- **Pass 2:** Margin note in Zone 1 — specifically addressing the Wave 3 finding that Zone 1 felt long. Purple right-border (the only purple accent) creates asymmetry.
- **Pass 3:** Dark zone hover states — extending Wave 3's territorial hover to dialectic panels and anti-pattern cards.
- **Pass 4:** Featured model cell — Core Insight spans 2 columns in Zone 5's model grid. Same bento principle from Wave 3, reapplied.
- **Pass 5:** Density breather (thin horizontal rule with 48px padding) between stats row and capstone. Responsive styles for terrain map, margin note, featured cell.

**What the agent learned:**
> "Fractal self-similarity is the most generative density principle."
> "Density islands need ocean."
> "Width variation creates reading interest."

The terrain map is the clearest example of knowledge-through-building. The agent read about fractal density, then invented a component that makes the page's own density structure visible. No specialist prescribed this. The agent saw a principle in the research and saw a need on the page and created the connection.

### Wave 5: Combination Depth (CD) — Refinement & Compound Mastery

**Research absorbed:** CD-006 case study (richest exploration in the entire knowledge base), grammar rules.

This wave was different. Instead of adding new components, it was about integration and mastery of what already existed.

**6 passes:**
- **Pass 1:** Eliminated every inline `style=""` attribute (20+ elements) into proper CSS classes. Not aesthetic cleanup — architectural. CD-006 taught that compound combination (DD + OD + AD operating simultaneously) requires clean mechanism separation.
- **Pass 2:** Made the terrain map interactive — click-to-scroll JavaScript with active state. The Wave 4 retrospective noted "the terrain map has no interactivity." Wave 5 fixed it.
- **Pass 3:** Systematic character-level letter-spacing across 6 element types (-0.03em to +0.12em). Completed the 5-scale fractal density system: page, section, component, character, navigation.
- **Pass 4:** Added missing Zone 1→2 bridge ("The Problem Is Clear"). Now all 4 zone transitions have explicit bridge elements with varied types: BRIDGE, BRIDGE, CINEMATIC, SUMMARY.
- **Pass 5:** Critical CSS bug fix — responsive `@media` block was before Wave 3-4 component definitions, so base styles overrode responsive overrides. Moved to end of CSS. Removed ~86 lines of dead CSS. Merged duplicate definitions.
- **Pass 6:** This retrospective.

**What the agent learned:**
> "Compound combination requires clean architecture."
> "Transition grammar creates reading rhythm."
> "Dead code is compound combination debt."
> "CSS source order is a first-class architectural concern."

Wave 5 found and fixed a bug (responsive block ordering) that only existed because of the cumulative wave process — components were added in wave order, not architectural order. This is the agent debugging its own process, not just its output.

---

## What This Means

### The agent grew. It didn't execute.

Read the retrospectives in order. Wave 1: "The page feels competent but not exciting." Wave 2: "Breaking the column is the strongest visual move available." Wave 3: "Hierarchy in grids is more interesting than uniformity." Wave 4: "Fractal self-similarity is the most generative density principle." Wave 5: "Compound combination requires clean architecture."

That's not an agent following instructions. That's an agent developing taste. Each wave's understanding built on every previous wave. By Wave 5, the agent was making architectural decisions (inline style elimination, responsive block reordering) that only make sense if you understand Waves 1-4.

### Knowledge was never compressed.

In the pipeline, 26,528 lines of research get compressed to ~600 lines of package files. 337 findings become a handful of action items. The builder gets rules.

Here, the agent read the research itself. All of it, wave by wave. When it read DD-006 about fractal density, it didn't get a summary — it got the case study. And it read it while looking at a page it had already built through 3 waves of work. The research met the reality of the page and produced understanding that no summary could transfer.

The agent didn't need someone to tell it that the velocity model was the most useful finding from R1-R5. It read the findings, looked at its page, and knew.

### The feedback loop was continuous, not staged.

Pipeline: build → wait → screenshot → wait → audit → wait → fix specification → wait → fix.

This experiment: build → look → "that's not right" → fix → look → "better but the spacing is off" → fix → look → "now what about this other zone" → fix.

The time between creation and evaluation was seconds, not phases. The agent saw problems when they were fresh and fixable, not after they'd been frozen into an artifact for someone else to evaluate.

### Each wave's "What Still Needs Work" became the next wave's starting point.

Wave 1: "Layout variety is limited."
Wave 2: "Zone 4 internal rhythm is still mostly uniform."
Wave 3: "Zone 1 feels long." + "No hover states on dark zone elements."
Wave 4: "Terrain map has no interactivity." + "Character-level density not systematically applied."
Wave 5: Addressed all of the above.

The agent maintained a running list of its own dissatisfactions. No Jira board. No task router. Just an agent that remembered what bothered it and kept working on it.

### The research didn't prescribe — it suggested.

The agent didn't get "DEPLOY mechanism DD-006-FRACTAL to Zone 1." It got the DD-006 case study and decided to build a terrain map. It got OD-006 and decided to add zone annotations. It got CD-006 and decided to eliminate inline styles.

The decisions were the agent's. The research was the material it thought with, not the instructions it followed.

---

## Final Build Stats

| Metric | Value |
|--------|-------|
| Total lines | 2,465 |
| CSS lines | ~1,738 |
| Inline styles | 0 |
| Component types | ~35 distinct classes |
| Zone transitions | 4/4 with explicit bridges |
| Responsive breakpoints | 1 (768px), properly ordered |
| JavaScript features | 1 (terrain map click-to-scroll) |
| Dead CSS removed (Wave 5) | ~86 lines |
| Quote variants | 3 (standard, full-bleed, landscape) |
| Research files absorbed | ~25 files across 5 waves |

---

## Artifacts

```
_build.html .................. The page (deliverable)
_reference-dd006.html ........ DD-006 visual study (reference, not part of build)
_wave-logs/
  wave-1.md .................. Identity + Content foundation retro
  wave-2.md .................. R1-R5 research absorption retro
  wave-3.md .................. OD case studies retro
  wave-4.md .................. DD + AD research retro
  wave-5.md .................. CD combination mastery retro
_screenshots/
  wave-1-pass-{1,2}-*.png .... Wave 1 progress captures
  wave-2-pass-{1,2}-*.png .... Wave 2 progress captures
  wave-3-{pre,pass-1,pass-5}-*.png  Wave 3 progress captures
  wave-4-pass-5-*.png ........ Wave 4 progress captures
  wave-5-*.png ............... Wave 5 progress captures
  final-{1440,1024,768}-{full,fold}.png  Final 3-viewport captures
```

---

## The Process in One Sentence

Instead of compressing knowledge into instructions for a builder, let the builder live inside the knowledge — absorbing, building, looking, refining, absorbing more, building more, looking again, refining again — and the HTML file accumulates everything the agent learns.

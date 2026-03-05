# What Survives the Crossing

Creative intelligence does not survive context window boundaries by default. Everything evaporates. What the next builder knows depends entirely on what was deliberately carried across.

The previous session named 6 dimensions of creative intelligence that a builder generates during construction -- 6 kinds of knowledge that exist in the builder's mind at the moment the build completes, and that vanish when the window closes:

1. **What I built** -- the artifact itself
2. **What I was trying to achieve** -- conviction, intent, the "why"
3. **What I rejected and why** -- roads not taken
4. **What surprised me** -- emergent discoveries
5. **What I wanted but couldn't** -- suppressed creative energy
6. **What's aesthetically unresolved** -- open questions for the next builder

This analysis traces what ACTUALLY flows through a real build (Gas Town Extraction, 2026-02-28) to understand where creative intelligence survives, where it thins, and where it dies.

---

## The Six Dimensions in Practice

### Dimension 1: What I Built

The artifact -- `output.html`, 70k characters, 2034+ lines -- is the strongest channel. The REFINE builder receives the entire HTML embedded in its prompt. Every CSS rule, every class name, every structural decision is visible.

When the builder uses metaphor-encoded class names (`.garrison-header`, `.barracks-zone`, `.armory-dense`), the artifact becomes partly self-narrating. A skilled reader of CSS can infer intent from the code itself: the garrison metaphor bleeds through the naming conventions, the density shifts register through padding values, the color arc tells its story through hex progressions.

But the artifact communicates WHAT decisions were made, never WHY. A beautiful CSS transition between zones says nothing about whether it was planned from the beginning or emerged as a surprise. The artifact is the richest handoff object and the most incomplete one.

**Survival quality: RICH.** The artifact crosses the boundary intact.

---

### Dimension 2: What I Was Trying to Achieve

The conviction brief (`_tc-brief.md`, 75 lines, 9.1k characters) carries the builder's creative intent in 5 sections: WORLD-DESCRIPTION, CALIBRATION, OPPOSITION, ARC, and CONTENT MAP.

What makes this brief more than a content summary is its texture of genuine conviction. Consider the evidence:

The WORLD-DESCRIPTION opens with creative negation: "This page is a frontier garrison. Not a castle -- castles are defensive and inward-looking. Not a factory -- factories are repetitive and mechanical." The negations carry as much information as the assertion. By defining what the world is NOT, the builder reveals a creative mind that has considered and rejected alternatives, not one that has grabbed the first available metaphor.

The OPPOSITION section captures creative tension, not just content analysis: "Yegge explicitly says 'Stop trying to make your agent system beautiful. Make it PRODUCTIVE.' The content has a deliberately anti-aesthetic stance -- Gas Town is named after ugliness. But the 8-role architecture IS elegant." This tension between the content's self-deprecation and its actual sophistication is what drives the composition. The brief preserves it.

The ARC maps an emotional progression (Watch tower through Barracks tour through Armory/Signal room through Descent to Resolution) with density directives per zone. The CONTENT MAP provides a 12-row table mapping section to zone to background to density to transition type to mechanisms -- executable creative planning.

What the brief does NOT preserve is the reasoning process that led to the conviction. The builder who spent 20 minutes deriving the garrison metaphor compresses that derivation into 3 sentences. The brief reads as a final answer, not a thinking trace. The REFINE builder knows WHERE the first builder arrived but not HOW they got there.

The brief's 5-section structure forces articulation of conviction (WORLD-DESCRIPTION), technical planning (CALIBRATION), creative tension (OPPOSITION), temporal structure (ARC), and spatial planning (CONTENT MAP). The gap is that it captures the CONCLUSION of creative thinking, not the PROCESS. But conclusions are surprisingly effective -- the REFINE builder needs to know where to go, not where the first builder wandered.

**Survival quality: RICH.** Three independent sources (TC brief, reflection, Weaver) transmit conviction into the REFINE window. The reasoning process thins, but the conviction itself crosses intact.

---

### Dimension 3: What I Rejected and Why

This dimension lives in two places, with different depths.

**In the TC brief (CALIBRATION section):** Four rejected mechanisms with one-sentence reasons -- "Drop Cap: The content is pragmatic, not literary. A drop cap would signal 'story' when we need 'briefing.' Wrong register." These are mechanical rejections -- useful, but they describe what was rejected without fully articulating the creative logic of the rejection.

**In the reflection (ALTERNATIVES section):** Deeper creative rejections surface. The builder explains rejecting an entire alternative metaphor -- the Building Floorplan -- and articulates why the garrison metaphor "adds a DIMENSION the content does not have on its own: command hierarchy, institutional discipline, operational urgency. It CONFLICTS productively with the content's 'ugly and it works' self-description." This is a METAPHOR-LEVEL rejection, carrying substantially more creative intelligence than a mechanism-level one.

The gap between these two captures is revealing. The brief tells the REFINE builder WHAT was rejected. The reflection tells WHY at a deeper level AND reveals the builder's emotional relationship to the rejection ("I could not bring myself to make them uglier").

A structural tension emerges from the ordering: the REFINE builder reads the Weaver's creative direction (Step 2) BEFORE reading what the previous builder tried and rejected (Step 3 via the reflection). This means creative direction for improvement arrives before the context about what was already considered and discarded. A REFINE builder might unknowingly re-attempt something that was intentionally rejected.

**What a dedicated rejection register could achieve:** Three columns -- (1) what was considered, (2) why it was rejected, (3) what would make it worth reconsidering. The REFINE builder could then make an informed decision about whether to resurrect a rejected idea rather than stumbling into one.

**Survival quality: MODERATE.** The rejections cross the boundary, but split across two files with no prominence signal. The REFINE builder can find them, but nothing flags them as "read this before attempting changes."

---

### Dimension 4: What Surprised Me

This is the thinnest dimension -- the most perishable creative knowledge, given the least structural support.

One paragraph in the reflection captures a genuine surprise: "The wave progression component emerged from nowhere. It was not in the component library, not in any case study, not in any mechanism. It grew from the content's need: a structured list with position awareness. The amber highlight on Wave 5 ('Gas Town lives here') is a simple border-left + background shift, but it carries disproportionate weight. It says 'you are HERE in history.' This moment of unplanned discovery -- where the content demands something the vocabulary does not have, and the builder invents it on the spot -- is what separates composition from assembly."

This is rich, vivid, specific. But the reflection template only prompts for surprises under "UNRESOLVED" -- it is structurally buried. There is no dedicated prompt for "what emerged that you didn't plan."

What is invisible:
- Whether the builder used exactly the 14 planned mechanisms, or whether some emerged and others were dropped during construction
- Mid-build creative pivots -- moments where the builder changed their mind DURING construction. The reflection is written after the build, so it captures the final state's relationship to the plan, not the moment-by-moment evolution
- The REFINE builder's own surprises (notably, the comparison strip emerging as a new component) -- the v2 reflection captures these but no subsequent agent ever reads it

Surprises are where a builder discovers something true about the content that was not visible before construction began. They are the most valuable creative intelligence because they represent genuine contact between the builder's creative process and the content's demands. They are also the most perishable -- if not captured immediately after the build, they evaporate with the context window.

**Survival quality: THIN.** One paragraph, buried in the wrong section, with no structural support for what is arguably the most valuable creative signal.

---

### Dimension 5: What I Wanted But Couldn't

The reflection's ALTERNATIVES section explicitly labels "Suppressed creative energy" entries, and this labeling does real work.

Two suppressed ideas from the first builder:
1. "Dark-mode beads" -- with a detailed explanation of what was wanted, why it was suppressed (would create a fourth dark zone), and even the emotional quality of the desire: "I wanted to render the bead examples on dark backgrounds, like actual document artifacts on a dark desk."
2. "Animated wave progression" -- a horizontal CSS-only animation, suppressed because prohibitions forbid transforms.

The REFINE builder also generated suppressed energy:
- "Solid offset depth on the Mayor card" -- considered and rejected (encoding the same semantic twice)
- "Width variation in the parade ground" -- considered and rejected (would exceed 4-mechanism-per-viewport cap)
- "Drop cap on the opening paragraph" -- considered and rejected (wrong register)

Most revealingly, the REFINE builder PICKED UP the suppressed dark-mode beads idea from the first builder's reflection: "The first builder also wanted this and suppressed it. I suppressed it for a different reason." This is direct evidence of creative intelligence surviving the crossing -- the second builder inherited not just the creation but the creator's unsatisfied desire, and made an independent judgment about it.

What remains invisible: suppressed ambition at the ARCHITECTURAL level. Both builders captured suppressed mechanism ideas. Neither captured suppressed structural ambitions -- "I wanted to try a completely different page structure but the content map locked me into a linear scroll." And time-pressure suppressions (creative energy suppressed because the builder ran out of context/time) are indistinguishable from deliberate suppressions.

The explicit "Suppressed creative energy" label in the template is the mechanism that makes this dimension work. Without that label, these desires would dissolve into the general flow of the reflection. With it, they become visible invitations for the next builder. The gap: they appear under ALTERNATIVES, making them look like considered-and-rejected options rather than unfulfilled creative desires. A dedicated section titled "What I wanted but couldn't" would signal to the REFINE builder: these are creative opportunities, not historical footnotes.

**Survival quality: MODERATE to RICH.** The explicit labeling works. The classification as "alternatives" rather than "opportunities" slightly dampens their power as creative invitations.

---

### Dimension 6: What's Aesthetically Unresolved

Three unresolved tensions named with genuine specificity:

1. "The content's self-deprecation vs. the page's authority." -- Yegge says Gas Town is ugly, but the page is beautiful. The builder identifies this as an unresolved creative tension, not a problem to be solved. This framing matters: it tells the REFINE builder "this is something to navigate, not something to fix."

2. "The bento grid density problem." -- 8 cells in a 2-column grid works at desktop, becomes fatiguing on mobile. This is an architecturally unresolved question that only the next builder, with fresh eyes, can answer.

3. The wave progression component's status -- is it the right solution or a convenient one?

The "What I would tell the next builder" paragraph is a direct handoff between creative minds: "The garrison metaphor served this content, but a different content about Gas Town might need a different metaphor. The garrison works because Gas Town is INSTRUCTIONAL... The metaphor must match the content's INTENT, not its SUBJECT."

The REFINE builder also left open questions:
1. "The density compression may not be perceptible enough." -- 2px font-size delta is above minimum but barely
2. "The comparison strip is the riskiest new component." -- unvalidated by any case study
3. "The warm palette constraint created a semantic differentiation challenge." -- accent colors are all warm earth tones; semantic signals may be too close
4. "Transition hallways need more visual weight."

A critical finding: the v2 reflection (REFINE builder's insights) is never read by any subsequent agent. It dies with the window. If a third builder (Step 9) were triggered, they would receive only the v1 reflection. The REFINE builder's insights about what remains unresolved evaporate.

The deepest version of this dimension would be an evolving document that accumulates across windows rather than being overwritten. Window 1 builder writes 3 questions. The Weaver adds or modifies. The REFINE builder writes 3 more. Each subsequent agent inherits the full list and marks questions as RESOLVED, CONFIRMED, or NEW. The open questions grow richer with each crossing rather than resetting.

**Survival quality: RICH** for Window 1 to Window 3 (two complementary sources: reflection + Weaver). **DEAD** for anything beyond Window 3 (v2 reflection goes nowhere).

---

## Cross-Cutting Patterns

### The Conviction Brief: Where Conviction Lives

The Gas Town TC brief is not a content map that happens to have a metaphor label. It carries genuine creative conviction:
- Creative negation ("Not a castle... Not a factory...")
- Emotional relationship to the content ("I refuse to make this feel like a software documentation page")
- Specific aesthetic commitments ("No Bootstrap blue. No generic card layouts. No rounded-corner 'friendly' UI")
- Intentional tension with the content ("I will honor the pragmatic tone without being visually dull")

The CALIBRATION section is the strongest vehicle for conviction -- naming 14 specific mechanisms with deployment rationales and 4 rejected mechanisms with rejection rationales. This is a builder who has DECIDED, not one who has planned.

But the brief has a conviction gradient: it starts with soul (WORLD-DESCRIPTION, OPPOSITION) and ends with logistics (CONTENT MAP). The 12-row transition table at the end is valuable for execution but carries no conviction -- it is a plan, not a vision. The brief's creative energy peaks early and declines into specification.

### The Reflection: What the Template Shapes

| Dimension | Coverage in _reflection.md |
|-----------|---------------------------|
| D1: What I built | Implicit (described through "Where I succeeded") |
| D2: What I was trying to achieve | 2 paragraphs of conviction + success assessment |
| D3: What I rejected and why | 3 alternatives + rejection reasoning |
| D4: What surprised me | 1 paragraph under UNRESOLVED |
| D5: What I wanted but couldn't | 2 explicit "Suppressed creative energy" entries |
| D6: What's unresolved | 3 unresolved tensions + advice for next builder |

The 3-section template (CONVICTION, ALTERNATIVES, UNRESOLVED) covers 5 of 6 dimensions. Dimension 4 (surprises/discoveries) is the weakest -- one paragraph buried in UNRESOLVED rather than its own section. The implicit mapping is D2 under CONVICTION, D3+D5 under ALTERNATIVES, D4+D6 under UNRESOLVED. This compression conceals the most perishable creative knowledge (D4: surprises) behind the most general category (UNRESOLVED).

### The Weaver: Where Perception Becomes Direction

The Weaver synthesis is the strongest handoff document in the pipeline. Its 5-section structure achieves something none of the other documents attempt -- translating PERCEPTION into CREATIVE DIRECTION:

1. EXPERIENTIAL ANCHOR -- the Weaver's own first impression (8 sentences of genuine perception)
2. WHAT IS WORKING -- convergent strengths with explanations of WHY they work
3. WHAT IS ALMOST THERE -- near-misses framed as creative invitations
4. WHERE TO GO -- 4 creative territories (AMPLIFY, RELEASE, DEEPEN, THE GAP)
5. VERDICT -- creative judgment with reason

The evidence of creative direction (not mere evaluation) is in the language:

The AMPLIFY directive: "The move from warm amber thesis to dark schematic proof is THE compositional gesture of this page. The REFINE builder should study what makes this transition land -- the simultaneous shift of background, typeface, and voice -- and ensure that every other major zone transition in the page achieves the same multi-channel clarity." This explains the PRINCIPLE, not just the observation.

THE GAP: "This page's personality is a frontier garrison commander who knows exactly how to brief the first three rooms of the tour but then walks the visitor through the remaining seven rooms with the lights off." A metaphor-inside-a-metaphor that makes the REFINE builder want to CREATE, not FIX.

Builder-oriented language: "Not more decoration. The same SPECIFICITY." "Not the same colors. The same CONVICTION in the shift."

What the Weaver does NOT carry: specific CSS-level direction (speaks in perceptual language, by design), gate information (never sees gates), the builder's suppressed creative energy (reads the reflection but doesn't explicitly surface suppressed ideas as invitations for the REFINE builder).

### The Routing Log: Plumbing, Not Tissue

The routing log records the pipeline's mechanical decision -- date, creative verdict, gate failure count, route, patches. It contains no creative intelligence. One sentence of engineering judgment: "All gate failures are either DPR artifacts or structural issues requiring holistic redesign." This serves the orchestrator, not the builder. It is infrastructure, not creative tissue.

---

## The Crossing in Full

### Window 1 to Window 2 (DERIVE+BUILD to EVALUATE)

The PA auditors receive ONLY screenshots. No text artifacts. No builder intent. This narrowness is by design -- auditors perceive without preconception. The Weaver receives everything: 5 auditor reports + TC brief + reflection + screenshots. The Weaver is the first agent that can correlate builder intent with audience reaction -- the critical synthesis point where perception meets conviction.

### Window 2 to Window 3 (EVALUATE to REFINE)

The REFINE builder receives:
- `output.html` -- the creation itself (D1)
- `weaver-synthesis.md` -- creative direction from perception (filtered D2-D6)
- `_reflection.md` -- the builder's self-knowledge (D2, D3, D4, D5, D6)
- `_tc-brief.md` -- original conviction (D2, D3)
- `_content.md` -- the raw material
- `mechanism-catalog.md` + `components.css` + `prohibitions.md` + `tokens.css` -- vocabulary
- `_user-direction.md` (if exists) -- user feedback

What the REFINE builder never sees:
- Individual auditor reports (only the Weaver's synthesis)
- Gate results (which gates failed or passed)
- The routing log
- The v2 reflection from any previous REFINE cycle (dead document)
- Screenshots (the REFINE builder never visually perceives the page -- only reads HTML)

| Dimension | Crosses the boundary? | Vehicle | Quality at reception |
|-----------|----------------------|---------|---------------------|
| D1: The artifact | Yes | output.html | FULL |
| D2: Conviction/intent | Yes | TC brief + reflection + Weaver | RICH (3 independent sources) |
| D3: Roads not taken | Yes | TC brief + reflection | MODERATE (present but not prominent) |
| D4: Surprises/discoveries | Partially | Reflection (1 paragraph) | THIN (buried, easy to miss) |
| D5: Suppressed energy | Yes | Reflection ALTERNATIVES | MODERATE (labeled but classified as alternatives) |
| D6: Unresolved questions | Yes | Reflection UNRESOLVED + Weaver GAP | RICH (2 complementary sources) |

### What Thins or Dies in Transit

**The Weaver's compression of auditor diversity.** Five auditors produce ~43k of independent perception. The Weaver compresses this to ~13k. Divergent minority opinions -- where one auditor sees something the other four miss -- may be filtered out in the synthesis. The Weaver template says "Divergence surfaces subtlety," but the actual synthesis may privilege convergence.

**The gate-creative disconnect.** The REFINE builder receives creative direction (Weaver: "deepen the dark zones") alongside constraint files (prohibitions, tokens) but never sees which gates failed. Gate failures (GR-05: 111 cold colors) directly affect the creative territory. The REFINE builder discovers the warm palette constraint exists only by reading the constraint files independently, then figuring out how it intersects with the creative direction. Neither the Weaver nor the REFINE builder holds both creative direction and gate specifics in the same frame.

**The REFINE builder's own creative intelligence dies.** The v2 reflection captures rich information (density compression perceptibility, comparison strip risk, warm palette differentiation challenge, hallway transitions as open creative territory). If a Step 9 third builder were triggered, this intelligence should propagate. The SKILL.md specifies loading "both reflections" in Step 9, but whether v2 reflections actually load is unconfirmed. If they do, the gap closes. If they don't, the REFINE builder's creative insights evaporate.

**Process knowledge stays formless.** The builder's learning about HOW to build (e.g., "the content demands something the vocabulary does not have, and the builder invents it on the spot -- this is what separates composition from assembly") is captured in the reflection but framed as retrospection, not instruction. The REFINE builder reads it as "what the previous builder thought," not as "here's how to approach this content." The same insight, framed as creative guidance, would have different power.

**Visual perception of the artifact.** The REFINE builder receives HTML but never sees screenshots. It works entirely from code, understanding the page through CSS rules and HTML structure rather than through visual perception. The Weaver's perceptual language partially compensates, but the REFINE builder cannot independently verify perceptual claims without serving and viewing the page (nothing in the REFINE prompt instructs this).

---

## Summary

| Dimension | Captured? | Crosses to REFINE? | Survival | The gap |
|-----------|-----------|-------------------|----------|---------|
| D1: The artifact | Yes | Yes | RICH | None significant |
| D2: Conviction/intent | Yes | Yes | RICH | Reasoning process lost; conclusions survive |
| D3: Roads not taken | Partially | Yes | MODERATE | Split across 2 files; no prominence signal |
| D4: Surprises | Yes | Yes | THIN | 1 paragraph, buried in wrong section |
| D5: Suppressed energy | Yes | Yes | MODERATE | Labeled but classified as alternatives, not invitations |
| D6: Unresolved questions | Yes | Yes | RICH | v2 reflection may not propagate to Step 9 |

**Approximately 65-70% of creative intelligence survives from Window 1 to Window 3.**

The strongest channels are the artifact itself (D1), conviction (D2), and unresolved questions (D6). The weakest are surprises/discoveries (D4) and the integration gap between gate data and creative direction.

The system preserves conviction and creative direction well. It underserves emergent knowledge and process learning. The reason: the template structure (CONVICTION, ALTERNATIVES, UNRESOLVED) implicitly prioritizes what the builder DECIDED over what the builder DISCOVERED. Decisions survive because they have structural homes. Discoveries thin because they are guests in someone else's section.

The Weaver is the single most important handoff mechanism -- the only agent that synthesizes perception with intent into creative direction. If the Weaver produces thin output, the entire handoff collapses to "here's the HTML + here's what the builder thought." That is information, but it is not creative direction.

The REFINE builder's own reflection (v2) is currently a dead document -- rich creative intelligence that goes nowhere. This is the single largest systemic waste in the handoff architecture. Not because the information is large (it is small) but because it is the only record of what a builder learned WHILE refining, and that learning is precisely what a third builder would need most.

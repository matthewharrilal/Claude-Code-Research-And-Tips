# Comprehensive Gap Audit: SKILL.md vs Research Corpus

**Date:** 2026-03-03
**Auditor scope:** SKILL.md audited against all 11 research files, 3 source documents (MASTER-BUILD-PHILOSOPHY.md, _reflection-from-practice.md, dissection CLAUDE.md), and the _gap-audit.md's own identified gaps.

**Method:** For each research file, I identify the key insights, check whether the SKILL.md captures them, and specify exactly what is missing with precise insertion points and suggested text.

---

## OVERVIEW: What the SKILL.md Gets Right

The SKILL.md is a strong document. It captures:
- The content-topology formation 3-step mechanism (semantic saturation, spatial projection, topology persistence)
- The endless cycle diagram and reciprocal relationship between building and reading
- The 5-layer metacognitive evaluation and the deepening test
- The wave schedule with correct research feeding order
- The 10 falsifiable criteria and content-form coupling grades
- The swap test
- The anti-patterns (7 of them, well-articulated)
- The screenshot protocol
- Context window management
- The comparison table between pipeline and /falls-in-love
- Design system physics

**Overall gap severity:** The SKILL.md captures the philosophy and structure well but is missing approximately 35-40 specific operational details, nuances, and mechanisms from the research. Many of these are the precise "how" details that would make the difference between an agent that follows the skill's spirit and one that fully executes its intent.

---

## PART 1: FILE-BY-FILE GAP ANALYSIS

---

### 1. _philosophy-extraction.md

**Key insight captured:** YES. The content-topology formation mechanism, the essential principles, the anti-patterns, the measurement framework, and the spatial invention patterns are all present in the SKILL.md.

**Gaps:**

**GAP P-1: The "inhabiting question" vs "checklist question" distinction is absent.**
- SEVERITY: MAJOR
- WHERE: Section "The Cognitive State", after the 3 properties paragraph (line 46)
- The philosophy extraction defines the core divide as two questions: "What layout should this content be in?" vs "What does this content MEAN, and which spatial arrangement EMBODIES that meaning?" This is the single most actionable framing for the agent and it is not stated.
- ADD:

```
### The Two Questions

Two questions define the divide between procedural and devoted building:

- **The checklist question:** "What layout should this content be in?" Answer: vertical column, 960px, section stack, apply surface treatments.
- **The inhabiting question:** "What does this content MEAN, and which spatial arrangement EMBODIES that meaning?" Answer: the content's philosophical arc has a physical shape, and the page's container dimensions should enact it.

A procedural builder asks "how should I lay out this section?" and answers in 5 seconds. A builder in the content-topology state asks the same question and answers after minutes of engagement: "This section is about the convergence of 8 parallel domains at 3 authority tiers, so it should BE a spatial encoding of that hierarchy."

Same question. Same agent. Same design system. Same content. Different answer. The difference is time spent thinking about the content.
```

**GAP P-2: The "ABSENT" coupling grade is missing from the grading table.**
- SEVERITY: MINOR
- WHERE: Section "Content-Form Coupling Grades" table (line 411)
- The philosophy extraction defines 5 grades: INEVITABLE, STRONG, ADEQUATE, GENERIC, ABSENT. The SKILL.md only has 4 (omits ABSENT).
- ADD after the GENERIC row:

```
| **ABSENT** | No meaningful spatial form. Pure vertical stack. Nothing to swap. |
```

**GAP P-3: The DOM skeleton count as a structural diversity metric is missing.**
- SEVERITY: MODERATE
- WHERE: Section "Measurement", after the Content-Form Coupling Grades table (line 414)
- The philosophy extraction defines DOM skeleton count as a key metric: pipeline average 1-2, exploration average 5-9, Molly build 18. This is a concrete measurement the agent can apply.
- ADD:

```
### DOM Skeleton Count

Count the number of fundamentally different spatial organizations in the page. Each unique `grid-template-areas` definition, each unique positioning composition, each unique directional change, each unique flex configuration counts as a distinct DOM skeleton.

- Pipeline average: 1-2
- Exploration average: 5-9
- Target: determined by content, not by a number. But if below 4, the agent has not yet formed a content topology.
```

---

### 2. _rhythm-analysis.md

**Key insight captured:** PARTIALLY. The wave schedule in the SKILL.md follows the correct arc (genesis -> expansion -> refinement). But several critical operational patterns from the actual experiment are missing.

**Gaps:**

**GAP R-1: The additive-to-subtractive shift is not explicitly instructed.**
- SEVERITY: MAJOR
- WHERE: Section "Wave 5: Combination Mastery" (line 265)
- The rhythm analysis identifies the most important signal of maturity: the agent stops adding new things and starts understanding what it has. Wave 5 of the experiment added ZERO new component types and instead eliminated inline styles, completed unfinished systems, and removed dead code. The SKILL.md mentions "inline style elimination" and "dead code removal" but does not frame it as the critical cognitive shift.
- ADD at the beginning of Wave 5:

```
**The Critical Shift:** This wave marks the transition from ADDITIVE to SUBTRACTIVE building. Waves 0-4 add new things. Wave 5 stops adding and starts understanding what already exists. If you are still inventing new components in Wave 5, you have not yet reached the maturity threshold. The signal of falling in love is when you stop wanting the page to be different and start wanting it to be more fully itself.
```

**GAP R-2: The within-wave pass rhythm is not specified.**
- SEVERITY: MAJOR
- WHERE: Section "The Process" (line 120), should be a new subsection after "The Reciprocal Relationship" (line 154)
- The rhythm analysis maps the canonical within-wave rhythm: Pass 1 = BIG STRUCTURAL MOVES, Pass 2 = TARGETED FIXES, Pass 3 = SECONDARY ADDITIONS, Pass 4 = POLISH, Pass 5 = INTEGRATION. This pattern repeats in every wave and is not described in the SKILL.md.
- ADD:

```
### The Within-Wave Rhythm

Within each wave, passes follow a predictable arc:

**Pass 1: Big structural moves.** The research hits the page for the first time. Bold additions: new components, new layout sections, new spatial relationships. 100-200 lines added. The agent is APPLYING the research.

**Middle passes: Targeted fixes and additions.** The agent looks at what Pass 1 produced and addresses specific problems. A rhythm break here, a missing transition there. 50-100 lines changed.

**Final passes: Integration and cleanup.** Responsive styles, spacing rationalization, cleanup. The last pass of a wave often handles responsive because responsive requires the desktop design to be stable first. 10-40 lines changed.

The delta profile decreases across passes. If you are making 100+ line changes in the final pass of a wave, something was missed in the early passes. If you are making 5-line changes in Pass 1, you are not being ambitious enough.
```

**GAP R-3: The screenshot rhythm and its decrease over waves is not captured.**
- SEVERITY: MODERATE
- WHERE: Section "The 'Looking' Protocol" (line 343), after the current content
- The rhythm analysis notes that screenshots decrease as waves progress -- by Wave 4-5, the agent is confident enough in its mental model that it needs fewer external confirmations. But importantly, the Wave 3 "pre" screenshot (looking at the page BEFORE reading Wave 3 research) is a critical pattern: looking comes first, research comes second.
- ADD after line 353 (after the screenshot protocol steps):

```
**Screenshot frequency decreases as understanding deepens.** Early waves need more screenshots because the agent's mental model of the page is still forming. Later waves need fewer because the agent knows the page intimately. But the agent must NEVER stop looking entirely -- even in Wave 5, screenshots at mid-wave and end-of-wave are mandatory.

**Look before reading.** At the start of each wave, take a screenshot and look at the page BEFORE reading the new research. Ask: "What does the page need?" This question precedes "What does the research offer?" Looking comes first. Research comes second.
```

**GAP R-4: The self-critique chain with resolution tracking is not mentioned.**
- SEVERITY: MAJOR
- WHERE: Section "Retrospectives as Thinking" (line 327), after the current 5 retrospective questions
- The rhythm analysis traces "What Still Needs Work" items across waves. Some items persist across 2-3 wave boundaries before being resolved. Some are never resolved (footer, color temperature). This persistence pattern is critical for the agent to understand: not everything gets fixed, and that is acceptable triage.
- ADD:

```
### Persistence and Triage

"What Still Needs Work" items persist across waves. Some are resolved within 1 wave. Some persist 2-3 waves before the right research arrives. Some are never resolved because higher-impact work always takes priority.

This is acceptable. The agent is not required to resolve every critique item. It IS required to track them and consciously decide: "This item persists because I have not yet found the right solution" (keep tracking) vs "This item persists because it is lower priority than what I am doing" (accept and document).

Items that persist across 3+ wave boundaries deserve explicit attention: either they are genuinely hard problems that need a different approach, or they are being avoided. The agent should distinguish between the two.
```

**GAP R-5: The moment when looking reveals what research did not is not highlighted.**
- SEVERITY: MODERATE
- WHERE: Section "The Reciprocal Relationship" (line 149)
- The rhythm analysis identifies 4 specific moments where looking at the rendered page produced insights that no research file contained: "The page feels competent but not exciting" (Wave 1), "Zone 1 feels long" (Wave 3), "The terrain map has no interactivity" (Wave 4), the CSS source order bug (Wave 5). These are the proof that looking is not validation but a primary discovery mechanism.
- ADD after line 155 (after the reciprocal relationship description):

```
Looking produces insights that research cannot:

- "The page feels competent but not exciting" -- no research file tells you this. You see it by looking at your own work.
- "Zone 1 feels long" -- this is a reading-pace observation, not a research finding.
- "The terrain map has no interactivity" -- you created it, then criticized it. Research inspired the component; looking revealed the missing affordance.
- Process-created bugs (e.g., CSS source order) -- no research predicts these. They emerge from the multi-wave building process and can only be found by testing the rendered page.

Looking is not a validation step. It is a discovery mechanism equal in importance to research absorption.
```

---

### 3. _format-analysis.md

**Key insight captured:** YES. The SKILL.md follows the recommended format (single file, no prompts subdirectory, wave-based not phase-based, taste-driven endpoint). The format analysis's recommendations are well-implemented.

**Gaps:**

**GAP F-1: No explicit "When to Use / When NOT to Use" section.**
- SEVERITY: MODERATE
- WHERE: After "What This Is NOT" section (line 29)
- The format analysis recommends a "When to Use / When NOT to Use" section. The SKILL.md has "What This Is NOT" (line 23) which partially covers this, but it lacks the positive case -- WHEN to use this skill.
- ADD after line 29:

```
## When to Use

- Content with spatial potential: content that argues, compares, synthesizes, recurses, maps, or catalogs parallel items
- Content with internal structural tension: dualities, asymmetries, progressive arguments, cyclical processes
- Content where the subject matter contains spatial metaphors: "panopticon," "corridor," "gap," "constellation," "funnel"
- When the user explicitly wants maximum creative depth and is willing to invest $150-300 and 6-10 hours
- When no pipeline output has captured the content's spatial logic

## When NOT to Use

- Content that is genuinely linear and procedural with no spatial potential (step-by-step tutorials, changelog entries)
- When the user needs output in under 2 hours
- When the budget is below $100
- When the content is shorter than 200 lines (insufficient material for deep engagement)
```

---

### 4. _evolving-evaluation.md

**Key insight captured:** PARTIALLY. The SKILL.md has the 5-layer metacognitive evaluation (lines 50-89) and the deepening test (lines 73-89). But the evolving evaluation research contains significantly more operational detail that is missing.

**Gaps:**

**GAP E-1: The 4-phase evaluation progression (structural -> relational -> coupling -> potential) is not explicit.**
- SEVERITY: CRITICAL
- WHERE: Section "The Metacognitive Evaluation -- The Backbone" (line 50), after the 5 layers
- The evolving evaluation research defines a natural trajectory for the KIND of questions the agent asks: Phase 1 (passes 1-3) asks structural questions ("Does the page have zones?"), Phase 2 (passes 4-6) asks relational questions ("Do the components talk to each other?"), Phase 3 (passes 7-10) asks coupling questions ("Could this layout survive transplantation?"), Phase 4 (passes 10+) asks potential questions ("What would I change with infinite time?"). The SKILL.md mentions this in the Deepening Test's example (line 87) but does not make it a structured progression.
- ADD after the Deepening Test section (line 89):

```
### The Evaluation Progression

Evaluation depth follows a natural trajectory. This is descriptive, not prescriptive -- the agent asks whatever questions its current understanding generates. But the progression is predictable because understanding accumulates in layers:

**Structural questions (early passes):** Does the page have zones? Is the metaphor architecturally present? Can a reader tell where they are? These are foundational questions about whether the form EXISTS. You cannot evaluate relationships before parts exist.

**Relational questions (middle passes):** Does the density rhythm work? Are zone transitions effective? Do consecutive components have velocity variation? These are questions about how parts INTERACT. The page is now seen as a system of relationships, not a collection of parts.

**Coupling questions (later passes):** Could this layout survive transplantation to different content? Does the page's spatial form ENACT the content's argument? Where does the form soften? These are questions about whether the form serves THIS content specifically.

**Potential questions (final passes):** What would I change with infinite time? What spatial invention is the content hiding that I have not found yet? Would I be proud of this page? These are questions about unrealized possibilities that only deep familiarity can generate.

If the agent is still asking structural questions at pass 20, the evaluation has not deepened. If the agent is asking potential questions at pass 3, it is skipping ahead of its own understanding. The questions should match the depth of the builder's relationship with the page.
```

**GAP E-2: Evaluation as a LEARNING mechanism is not stated.**
- SEVERITY: CRITICAL
- WHERE: Section "The Metacognitive Evaluation -- The Backbone" (line 50)
- The evolving evaluation research makes a profound point: evaluation does not just CHECK the page -- it TEACHES the agent about the content. The self-feeding loop (BUILD -> EVALUATE -> LEARN -> BUILD BETTER) is the mechanism by which evaluation deepens. The agent who builds Zone 4 as a dark zone knows the content shifts to philosophy there. But the agent who EVALUATES Zone 4 and notices "too long and too uniform" LEARNS that the philosophical section has more internal structure than the current form captures. The evaluation reveals content structure that the builder had flattened. This is not mentioned anywhere in the SKILL.md.
- ADD after the evaluation progression (proposed in GAP E-1):

```
### Evaluation as Learning

Evaluation does not just check the page. It teaches the agent about the content. This is the mechanism by which evaluation deepens.

The loop:
- BUILD (apply current content understanding to spatial form)
- EVALUATE (look at the result; notice where form serves content and where it does not)
- LEARN (the gaps between form and content reveal content structure the agent had not previously noticed)
- BUILD BETTER (the new content understanding produces more coupled spatial decisions)

Each evaluation teaches something new because each evaluation operates on a page that has changed since the last evaluation. The agent who evaluates Zone 4 and notices "too long and too uniform" LEARNS that the philosophical section has more internal structure than the current form captures. The evaluation revealed content structure that the builder had flattened.

This is why fixed rubrics go stale: they do not learn. The PA's 48 questions are the same at cycle 1 and cycle 10 because the rubric's understanding does not change. The self-feeding loop produces DIFFERENT evaluation questions every time because the agent's content understanding changes with each evaluation.
```

**GAP E-3: The taste evaluation protocol is present but lacks the full operational detail.**
- SEVERITY: MODERATE
- WHERE: Section "The 'Looking' Protocol" (line 343)
- The evolving evaluation research defines 4 specific steps for taste evaluation: (1) Screenshot and LOOK at shape/color/weight/rhythm without analyzing, (2) Scroll through as a reader, noting STOP/SCAN/LINGER moments, (3) The pride question, (4) The specific-generic test (swap test as self-evaluation). The SKILL.md has a "Looking Protocol" (line 343) that covers steps 1, 2, 4, and 5 but omits the pride question in this specific context and does not distinguish between experiential and analytical modes as sharply.
- The SKILL.md's "Looking Protocol" (lines 343-353) partially covers this but mixes experiential and analytical steps. The research emphasizes that experiential assessment MUST come first and be written down BEFORE analytical assessment overwrites it.
- ADD to the "Looking" Protocol, replacing the current step 3 (line 349):

```
3. **Experiential assessment first -- write it down BEFORE analyzing:** What is the page's energy? Where does the spatial drama hold? Where does it soften? Where do you feel the content through the form? Where does the form feel generic? WRITE THIS DOWN. Then and only then:
3b. **The pride question:** "If this were the only page I ever built, would I be proud of it?" If the answer is "yes, but..." -- the "but" IS the evaluation.
```

---

### 5. _primacy-rotation.md

**Key insight captured:** PARTIALLY. The SKILL.md includes rotation schedules for Waves 1-4 and mentions primacy rotation. But several critical mechanisms from the primacy rotation research are missing.

**Gaps:**

**GAP PR-1: The diagnostic override protocol is missing from the wave schedules.**
- SEVERITY: MAJOR
- WHERE: Each wave section (Waves 2-5), after the rotation table
- The primacy rotation research defines a critical mechanism: after every pass, the agent performs 3 diagnostic checks that may override the default rotation schedule: (1) What dimension feels weakest? (2) Which research file addresses it? (3) Has that file been at primacy in the last 2 passes? Plus a 4-pass neglect rule. The SKILL.md has rotation tables but no override mechanism.
- ADD after each wave's rotation table:

```
**Diagnostic Override:** After each pass, the agent may override the next pass's primacy:
1. What dimension of the page feels weakest right now?
2. Which research file addresses that dimension?
3. Has that file been at primacy in the last 2 passes?
   - If NO: put it at primacy next.
   - If YES: follow the default schedule.
4. Has any file gone 4+ passes without primacy?
   - If YES: that file gets primacy next, regardless.
```

**GAP PR-2: The content primacy lifecycle (content -> HTML -> audit reference) is not described.**
- SEVERITY: MAJOR
- WHERE: Section "Input" (line 93), or after "The Reciprocal Relationship" (line 154)
- The primacy rotation research defines a lifecycle for the content source file: it starts at primacy in early passes (the agent is reading the content), hands off to the HTML when all content is placed, and migrates to recency/audit position for the remainder of the build. The SKILL.md says "every wave starts with re-reading content" (Wave 0, line 196) but does not describe the content handoff moment.
- ADD as a new subsection after "How to Read Content for Spatial Form" (line 176):

```
### The Content Handoff

The content source file starts at primacy and gradually cedes to the HTML:

**Early passes (Wave 0):** The content source is PRIMARY. The agent reads it at primacy before anything else. Spatial hypotheses form from direct content engagement.

**Middle passes (Wave 1-2):** The content is now IN the HTML. The HTML file takes primacy because it IS the content plus all accumulated spatial decisions. The content source file moves to audit position: read it LAST, checking for omissions.

**Later passes (Waves 3+):** The content source file is read only when the agent suspects content has been lost during design passes, or at the start of a new context window as an audit check.

**The handoff test:** After each early pass, ask: "Is there content in the source file NOT yet in the HTML?" If NO, the HTML takes primacy and the source file moves to audit position. Write in your notebook: "Content handoff at pass N."
```

**GAP PR-3: The builder's notebook size management protocol is missing.**
- SEVERITY: MODERATE
- WHERE: Section "Context Window Management" (line 458), after the notebook mention
- The primacy rotation research specifies that the notebook should not grow unbounded: after each slice (10 passes), the agent writes a SLICE SUMMARY (20-40 lines) that compresses the per-pass entries. Previous per-pass entries can be pruned if the notebook exceeds ~200 lines. Summaries persist; per-pass details are ephemeral.
- ADD after line 465 ("All wave retrospectives"):

```
**Notebook management:** The builder's notebook should not grow unbounded. After each wave, write a WAVE SUMMARY (20-40 lines) compressing the per-pass entries into key learnings and open questions. If the notebook exceeds ~200 lines, prune older per-pass entries, keeping only the wave summaries. The summaries persist; the per-pass details are ephemeral.
```

---

### 6. _content-spatial-discovery.md

**Key insight captured:** PARTIALLY. The SKILL.md has the 4 readings (lines 166-176) and the 7 cognitive moves (lines 178-187). But the content-spatial discovery research contains significantly more operational detail about the reading protocol and the spatial hypothesis formation.

**Gaps:**

**GAP CS-1: The 4th reading (Hypothesis Formation) is described but not given operational teeth.**
- SEVERITY: MAJOR
- WHERE: Section "How to Read Content for Spatial Form" (line 164), after the Fourth reading
- The content-spatial discovery research defines 4 specific properties of a good spatial hypothesis: (1) it is about the content, not about the layout, (2) it is falsifiable, (3) it passes the swap test, (4) it drives CSS decisions. The SKILL.md mentions these (line 174) but does not provide the agent instruction for HOW to form hypotheses.
- ADD after line 175 (after the Fourth reading description):

```
**Forming the hypothesis:** Write each hypothesis as a sentence: "This content's [specific feature] demands [specific spatial form] because [specific reason from the content]."

Examples of GOOD hypotheses:
- "This content's 8 parallel domains demand a grid because they operate simultaneously, not sequentially."
- "This content's argument widens from one provocation to a comprehensive system, so the page should physically widen."

Examples of BAD hypotheses (too generic):
- "This content has sections, so it should use a grid."
- "The layout should match the content's theme."

Form 2-3 hypotheses. One about the PAGE-LEVEL shape (widening corridor, compression funnel, spiral loop). One about the SECTION-LEVEL structure (8-domain grid, hub-and-spoke, branching tree). Optionally, one about a COMPONENT-LEVEL invention (self-referential module, pattern echo grid).
```

**GAP CS-2: The 8 spatial archetypes vocabulary is not included.**
- SEVERITY: MAJOR
- WHERE: Section "Seven Cognitive Moves That Produce Spatial Invention" (line 178), or as a new subsection after it
- The content-spatial discovery research defines 8 spatial archetypes found across 15 extractions: Width as Argument, Grid as Taxonomy, Asymmetry as Power, Loop as Cycle, Compression as Bottleneck, Self-Reference as Meta, Negative Space as Absence, Pattern-Switching as Enactment. Each has a definition, content that contains it, how to discover it, and a CSS signature. The SKILL.md has the 7 cognitive moves (which overlap partially) but lacks this vocabulary as a discoverable reference.
- ADD as a new subsection after "Seven Cognitive Moves" (line 187):

```
### Eight Spatial Forms Hiding in Content

These are not a menu to select from. They are forms that content contains, waiting to be discovered. The agent does not choose from this list -- it discovers one of these forms (or a form not on this list) by reading the content deeply enough to see it.

1. **Width as Argument:** The page's width changes to enact the content's arc. Content with progressive expansion or compression.
2. **Grid as Taxonomy:** Content with N parallel items (N > 3) operating simultaneously. A grid shows simultaneity; a list implies sequence.
3. **Asymmetry as Power:** Content with power dynamics or dualities gets unequal column ratios. The visual weight difference IS the power difference.
4. **Loop as Cycle:** Content about iterative processes gets circular or returning layout.
5. **Compression as Bottleneck:** Content about convergence gets physically narrower at the point of maximum compression.
6. **Self-Reference as Meta:** Content about observation or self-awareness gets a page that observes ITSELF.
7. **Negative Space as Absence:** Content about gaps or blindness gets literal spatial gaps. The whitespace IS the argument.
8. **Pattern-Switching as Enactment:** Content that catalogs distinct approaches uses different layouts for each -- the page demonstrates each pattern it describes.

Content may contain forms not on this list. The list covers archetypes found across 15 extractions. Follow the content wherever it leads.
```

**GAP CS-3: The key unlocking phrases for cognitive frame-shifting are not included.**
- SEVERITY: MODERATE
- WHERE: Section "How to Read Content for Spatial Form" (line 164), or as a note within it
- The content-spatial discovery research identifies specific phrases that shift the agent from "deployer" to "discoverer": "You are not inventing metaphors -- you are finding the ones the content already contains," "What is the SHAPE of what this section says?", "If every section is a vertical column, you have not found the content's spatial logic yet," "The content already contains the layout. Your job is to see it." These are more actionable than the current framing.
- ADD at the end of the "How to Read Content" section (after line 176):

```
**Key reframes for the reading process:**
- "You are not inventing metaphors -- you are finding the ones the content already contains." The agent's job is pattern recognition, not creative generation.
- "What is the SHAPE of what this section says?" This question forces spatial thinking about content.
- "If every section is a vertical column of prose, you have not found the content's spatial logic yet." A diagnostic, not a command.
- "The content already contains the layout. Your job is to see it." The layout is not something the builder ADDS. It is something the content CONTAINS.
```

---

### 7. _extreme-depth.md

**Key insight captured:** PARTIALLY. The SKILL.md's wave schedule draws from this research, and the $300 budget architecture is captured. But several critical specifications are missing.

**Gaps:**

**GAP ED-1: The within-wave 10+ re-enrichment protocol phases are described but the qualitative shift points are not explicit.**
- SEVERITY: MODERATE
- WHERE: Section "Wave 2: Research R1-R5" (line 219), within the "10+ re-enrichment protocol" (line 226)
- The extreme depth research defines 4 qualitative phases within each wave with specific expected deltas: STRUCTURAL (100-200 lines/pass), INTEGRATION (50-100 lines), DEPTH (10-40 lines), MASTERY (changes at invisible grain). The SKILL.md mentions these phases (line 227-231) but does not include the expected delta profile or the qualitative shift descriptions ("The agent is no longer 'applying R3' -- it IS density thinking").
- ADD to the existing within-wave protocol (after line 231):

```
The delta profile is a diagnostic:
- Passes 1-3: 100-200+ lines added (STRUCTURAL)
- Passes 4-6: 50-100 lines changed (INTEGRATION)
- Passes 7-9: 10-40 lines changed (DEPTH)
- Passes 10+: Changes at the invisible grain (MASTERY)

If you are making 100+ line changes in pass 8, something was missed in passes 4-6. If you are making 5-line changes in pass 2, you are not being ambitious enough.
```

**GAP ED-2: The token economics and cost-per-pass breakdown is not included.**
- SEVERITY: MINOR
- WHERE: Section "Cost" (line 478)
- The extreme depth research provides detailed token economics (~$0.60/pass, 10K input tokens average), context window schedule (15-20 passes per window), and budget distribution across waves. The SKILL.md gives the total ($150-300) but not the per-pass economics that would help the agent understand how to allocate effort.
- This is arguably appropriate for a skill file (keep it high-level). No action needed.

**GAP ED-3: The Wave 4 (Synthesis + Provenance) and Wave 5 (Combination Mastery) are significantly compressed in the SKILL.md relative to the research.**
- SEVERITY: MODERATE
- WHERE: Waves 4 and 5 (lines 251-269)
- Waves 4 and 5 in the SKILL.md are 6 and 7 lines each, respectively. The extreme depth research provides detailed pass-by-pass specifications for each. The SKILL.md's Wave 4 lacks specific evaluation focus questions, and Wave 5 lacks the specific architectural goals (zero inline styles, all transitions typed).
- ADD to Wave 4 (after line 258):

```
**Metacognitive focus:** "Is the page internally consistent? Do the findings from different waves contradict each other? Have I reconciled the conflicts the synthesis document identifies?"
```
- ADD to Wave 5 (after line 268):

```
**Metacognitive focus:** "Does compound combination work at every scale? Is every CSS value from tokens? Does every zone transition have a typed bridge (BRIDGE, CINEMATIC, SUMMARY, etc.)? Is the CSS architecture sound enough to support compound mechanism stacking?"
```

---

### 8. _metacognitive-analysis.md

**Key insight captured:** YES for the philosophical framework. The SKILL.md captures the HTML-as-external-memory concept and the infrastructure paradox. But there are several unique insights from this analysis that are not in the SKILL.md.

**Gaps:**

**GAP M-1: Semantic saturation as a threshold phenomenon is not described.**
- SEVERITY: CRITICAL
- WHERE: Section "The Cognitive State" (line 32), or as a new subsection
- The metacognitive analysis makes a critical point: creative quality is not a continuous function of time -- it is a STEP function. Below certain thresholds, entire categories of spatial invention are inaccessible. First-order forms (bilateral asymmetry, 4-column grid) require one reading. Second-order forms (velocity-informed callouts, cinematic descent) require 30-45 minutes. Third-order forms (terrain map, transition grammar) require 60+ minutes. The widening corridor requires the builder to have exhausted ALL standard spatial mappings. The pipeline, by design, operates below the threshold at which content-derived spatial form becomes possible.
- ADD after the 3 properties of the cognitive state (line 47):

```
### Semantic Saturation

Content-topology formation is a threshold phenomenon, not a continuous improvement. Below certain thresholds, entire categories of spatial invention are inaccessible:

**First-order forms (15-20 min):** Bilateral asymmetry block, 4-column domain grid, dark philosophy zone. These map obvious content features to standard spatial forms. A pipeline build produces these.

**Second-order forms (30-45 min):** Velocity-informed callouts, cinematic descent banner, pull quotes as column-breakers. These require one reading of the content PLUS one reading of research PLUS one look at the pass-1 output.

**Third-order forms (60+ min):** Terrain map, bento hierarchy, transition grammar. These require multiple content readings, multiple research absorptions, and multiple looks at the evolving page.

**Fourth-order forms (90+ min):** Widening corridor, self-observation module, asymmetry inversion. These require the builder to have exhausted all standard spatial mappings and to be searching, actively, for what the content demands but has not yet received.

The implication: the pipeline operates below the threshold at which content-derived spatial form becomes possible. More passes of the pipeline produce more polish on the same vertical stack. The falls-in-love approach crosses the thresholds that unlock qualitatively different output.
```

**GAP M-2: The relationship between research absorption and spatial projection (the 3-input convergence) is not described.**
- SEVERITY: MODERATE
- WHERE: Section "The Process" (line 120), or within the wave descriptions
- The metacognitive analysis explains that spatial inventions emerge at the INTERSECTION of 3 inputs: (1) a research principle as attentional lens, (2) content with features visible through that lens, (3) a current page state with specific weaknesses addressable by that lens. Neither research nor content alone suggests a specific spatial form. The convergence of all three in the same context window is where invention happens.
- ADD to the "Reciprocal Relationship" subsection (after line 162):

```
### The Three-Input Convergence

Spatial inventions are not deduced from research alone or from content alone. They emerge at the intersection of three inputs in the same context window:

1. A **research principle** that provides an attentional lens
2. **Content** that has features visible through that lens
3. A **current page state** with specific weaknesses addressable by that lens

The terrain map emerged when DD-006's fractal annotation principle (input 1) met the Molly content's self-legibility thesis (input 2) in a context that already contained a 5-zone page with distinct density characters (input 3). Neither input alone suggests the terrain map. Together, they make it obvious.

This is why the wave schedule matters: each wave adds a new research lens that reveals new content features against the current page state. The convergence of all three in the same context is where spatial invention happens.
```

**GAP M-3: The "HTML as context-window compression device" framing is not stated.**
- SEVERITY: MODERATE
- WHERE: Section "Context Window Management" (line 458)
- The metacognitive analysis makes a precise technical point: the HTML file is not just memory -- it is a context-window compression device. It takes the product of thousands of tokens of processing and encodes it in a form that allows a fresh context window to resume productive work without re-deriving every prior decision. The model reads the HTML and can see the 7:3 ratio, build from it, deepen it -- without understanding its full provenance. This is distinct from and more specific than "the HTML carries forward."
- ADD to the context window management section (after line 473, before the reading order):

```
**The HTML as compression device:** The HTML file is not just memory. It is a context-window compression device. It takes the product of thousands of tokens of processing -- every design decision across every pass -- and encodes it in a form that allows a new context window to resume productive work without re-deriving prior decisions. The model reads the HTML and sees the 7:3 ratio already in place. It does not need to re-derive why. The ratio is there. The model can attend to it, build from it, deepen it. This is why handoff documents fail: they describe decisions ("use 7:3 ratio") while the HTML file IS the decision in enacted form.
```

---

### 9. _gap-audit.md

This file identifies 6 CRITICAL gaps and 14 MAJOR gaps in the research files, which should all be addressed in the SKILL.md.

**CRITICAL GAPS (from _gap-audit.md):**

**GAP GA-C1: "The reciprocal relationship between building and reading" -- was the gap closed?**
- STATUS: YES, captured in SKILL.md lines 149-162. The reciprocal relationship is described.

**GAP GA-C2: "The retrospective as cognitive act, not documentation" -- was the gap closed?**
- STATUS: YES, captured in SKILL.md lines 327-339. "This is NOT documentation -- it is a COGNITIVE ACT."

**GAP GA-C3: "Structural inventions follow the order of visibility, not importance" -- was the gap closed?**
- STATUS: NO. This insight from the reflection-from-practice is not in the SKILL.md.
- SEVERITY: CRITICAL
- WHERE: Section "The Process" (line 120), as a new subsection
- ADD:

```
### Invention Follows Visibility, Not Importance

Structural inventions do not arrive in order of importance. They arrive in order of VISIBILITY. The terrain map (arguably the most inventive component) cannot be invented first because it requires 3 prior waves to create the conditions that make it visible. The Zone 1-2 bridge (arguably the simplest) is the last to arrive because its absence only becomes conspicuous once all other transitions are complete.

The implication: the agent should not try to make the most important spatial decisions first. It should make the spatial decisions that are VISIBLE right now. The most important decisions will become visible when the earlier decisions have been made, because each decision changes what the agent is capable of seeing.
```

**GAP GA-C4: "Building one spatial form reveals that another section needs a different form" -- was the gap closed?**
- STATUS: PARTIALLY. The reciprocal relationship section (line 149) captures building-changes-reading, but the specific mechanism of "bento-trained eyes" seeing where the same principle applies elsewhere is not stated.
- SEVERITY: MODERATE
- ADD to the reciprocal relationship section (after line 162):

```
Building one spatial form also reveals where the SAME principle should apply elsewhere. When the bento grid with featured cells was applied to the domain grid, the flat 3-column model grid elsewhere became visibly inadequate by comparison. The bento principle was learned by doing it once and then seeing, with bento-trained eyes, where it should be applied again. Each spatial decision trains the agent's perception for that type of decision.
```

**GAP GA-C5: "What the content WANTED vs what a pipeline would have given it" -- was the gap closed?**
- STATUS: YES, captured throughout the SKILL.md's anti-patterns section and the pipeline comparison. The specific spatial decisions (bilateral asymmetry block, featured domain cards, landscape quote, terrain map, Zone 1-2 bridge) are not enumerated, but the principle is present.

**GAP GA-C6: "The specific process by which 'looking at the page' produces discoveries" -- was the gap closed?**
- STATUS: PARTIALLY. The "Looking Protocol" (line 343) describes HOW to look but does not describe WHAT looking produces that research cannot. See GAP R-5 above.

**MAJOR GAPS (from _gap-audit.md) -- checking against SKILL.md:**

1. "Taste evaluation 4-step protocol" -- PARTIALLY covered (see GAP E-3)
2. "The 4-phase evaluation progression" -- NOT covered (see GAP E-1)
3. "Self-generated questions replacing fixed rubrics" -- YES covered (deepening test, line 75)
4. "Learning as anti-stale mechanism" -- NOT covered (see GAP E-2)
5. "Adversarial self-questioning frequency" -- PARTIALLY (mentioned but not scheduled)
6. "The 'what would I change with infinite time' question as endpoint" -- YES covered (line 296)
7. "Content-as-Entity-Relationship mapping" -- YES covered (cognitive move #1, line 180)
8. "The 8 spatial archetypes" -- NOT covered (see GAP CS-2)
9. "Specific agent instructions for each reading" -- NOT covered (see GAP CS-1)
10. "Key phrases that unlock cognitive mode" -- NOT covered (see GAP CS-3)
11. "What NOT to say to the agent" -- PARTIALLY (anti-patterns cover some but not all)
12. "The timing matters -- whole-content before any CSS" -- YES covered (Wave 0)
13. "Minimum engagement duration thresholds" -- NOT covered (see GAP M-1)
14. "Opinions emerge from building, not instruction" -- NOT explicitly stated

**GAP GA-M14: "Opinions emerge from building, not instruction" is not stated.**
- SEVERITY: MODERATE
- WHERE: Section "Retrospectives as Thinking" (line 327)
- ADD:

```
The agent develops aesthetic opinions through building, not through being told what to prefer. By Wave 2, the agent has tried things and seen results. It says "the velocity model is the most useful finding" -- not because it was told so, but because it built with it and saw the impact. By Wave 3, it makes aesthetic judgments: "hierarchy in grids is more interesting than uniformity." By Wave 5, it makes architectural decisions no research file prescribed. Every opinion is earned through craft, not received through instruction.
```

**CONTRADICTIONS (from _gap-audit.md):**

The gap audit identifies 3 contradictions in the research:

1. "10+ passes per slice" (extreme-depth) vs "5 passes per wave" (rhythm-analysis) -- The SKILL.md resolves this with minimum pass counts per wave (8-18 depending on wave). RESOLVED.

2. "No fixed pass counts" (philosophy) vs specific pass minimums -- The SKILL.md specifies minimums but states "not maximum" (line 447). The anti-pattern #4 (line 446) explicitly rejects fixed pass counts. RESOLVED.

3. "The agent reads ALL research" vs context window limits -- The SKILL.md handles this via the wave schedule (research is read slice by slice, not all at once) and context window management. RESOLVED.

---

### 10. _intensity-architecture.md

**Key insight captured:** PARTIALLY. The wave schedule in the SKILL.md draws heavily from this research. But several critical operational specifications are missing.

**Gaps:**

**GAP IA-1: The false convergence signals are not explicitly listed.**
- SEVERITY: CRITICAL
- WHERE: After "Wave 7: Self-Audit Cycle" (line 309) or at the end of "Post-Wave Enrichment and Audit" (line 272)
- The intensity architecture defines 5 specific false convergence signals: (1) satisfaction without swap-testing, (2) research findings marked "not applicable" without trying, (3) the "good enough" plateau, (4) habituation blindness, (5) process fatigue masquerading as completion. These are the most actionable diagnostic tools for preventing premature stopping.
- ADD as a new subsection:

```
### False Convergence Signals

The agent believes it is done but has more to discover. Warning signs:

1. **Satisfaction without swap-testing.** The agent feels complete but has not applied the swap test to any section. No convergence claim is valid without swap-testing at least 5 sections.

2. **Research marked "not applicable" without trying.** Some findings only become relevant AFTER 5+ passes. Any finding marked "not applicable" in passes 1-3 must be RE-EVALUATED at pass 8+ with the page's current state.

3. **The "good enough" plateau.** The page passes any formal audit. But "solid" is not the target. "Genuinely proud" is the target. When the agent says "this is good," it must answer: "Would I show this to someone whose taste I respect and feel zero anxiety?"

4. **Habituation blindness.** After 15+ passes, things that were jarring on pass 1 feel normal -- not because they were fixed, but because they were seen enough times. Every 5 passes, ask: "What would a fresh-eyes auditor see that I have stopped seeing?"

5. **Process fatigue masquerading as completion.** The agent is tired of making changes, not satisfied with the result. Diagnostic: if the "infinite time" question produces IDEAS (not micro-adjustments), the agent is process-fatigued, not done. Those ideas should be pursued.
```

**GAP IA-2: The genuine exhaustion signals require all 3 conditions simultaneously.**
- SEVERITY: MAJOR
- WHERE: Each wave's "Exhaustion signal" line
- The intensity architecture specifies that ALL THREE genuine exhaustion signals must be present simultaneously: (1) delta profile bottomed out, (2) research re-read produces no new ideas, (3) "infinite time" answer is invisible. The SKILL.md lists exhaustion signals per wave but does not state the "all 3 simultaneously" requirement.
- ADD to the general process section, before the wave schedule:

```
### Genuine Exhaustion (All 3 Must Be Present)

A wave is exhausted only when ALL three conditions hold simultaneously:

1. **The delta profile has stabilized at invisible grain.** The last 2-3 passes produced 5-15 line changes. A reader would not notice the difference.
2. **The research re-read produces no new ideas.** The agent can annotate every finding: "applied," "irrelevant," or "addressed indirectly."
3. **The "infinite time" answer is invisible.** Every proposed change is below the perceptual threshold.

If any one condition is NOT met, the wave is not exhausted. Continue.
```

**GAP IA-3: The minimum engagement requirements per research slice are not included.**
- SEVERITY: MAJOR
- WHERE: General process section, before or after the wave schedule
- The intensity architecture defines specific minimums per research slice that prevent premature convergence:
  - Passes: 8 minimum
  - Applied findings: 3 per file
  - Swap test: applied to 3+ sections
  - Notebook entries: 1 per pass
  - Screenshot checks: 2 per slice
  - Adversarial self-question: 1 per 4 passes
  - Full HTML re-read: 2 per slice

The SKILL.md has minimum pass counts per wave but not the other minimums.
- ADD as a new subsection before or after the wave schedule:

```
### Minimum Engagement Per Wave

To prevent premature convergence, each wave has minimums:

| Requirement | Minimum |
|-------------|---------|
| Passes | 8 (varies by wave, see schedule) |
| Applied findings | 3 per research file in the wave |
| Swap test | Applied to 3+ sections per wave |
| Notebook entries | 1 per pass |
| Screenshot sessions | 2 per wave |
| Adversarial self-question | 1 per 4 passes |
| Full HTML re-read | 2 per wave |

These are FLOORS, not targets. If the agent is consistently hitting minimums and wanting to stop, that is process fatigue, not genuine exhaustion.
```

---

### 11. _content-spatial-deep.md

**Key insight captured:** PARTIALLY. The SKILL.md captures the general principle of content-derived spatial form. But this research file provides the deepest, most granular evidence of HOW spatial invention actually works in practice, and several of its unique insights are missing.

**Gaps:**

**GAP CSD-1: The specific evidence chain showing how each wave's reading deepened is not included.**
- SEVERITY: MODERATE
- WHERE: Section "The Reciprocal Relationship" (line 149)
- The content-spatial-deep research traces exactly how each re-reading of the Molly content saw something new: Read 1 = editorial arc and thesis. Read 2 = content's velocity/rhythm (only visible after building zones and reading R5). Read 3 = content's need to be structurally visible (only visible after building velocity profiles). Read 4 = content's fractal properties (only visible after 3 waves of density work). Read 5 = page's own architectural demands (the page is now its own system). The SKILL.md lists these (lines 158-162) but does not explain WHY each reading was different.
- ADD to the existing Read 1-5 list (after line 162):

```
Each re-reading is different because the ACT OF BUILDING changes the reader. After building Zone 2's velocity-informed layout, the agent reads the content's velocity differently -- not as abstract fast/slow but as a spatial property already partially constructed. After building the zone annotations, the agent reads the content's self-legibility theme differently -- noticing the irony that a self-legibility essay has an invisible structure. The content has not changed. The builder has.
```

**GAP CSD-2: The CSS-as-interpretation thesis is not stated.**
- SEVERITY: MODERATE
- WHERE: Opening section or "The Cognitive State" (line 32)
- The content-spatial-deep research argues that spatial form is a form of content INTERPRETATION -- the same cognitive act as literary criticism, but expressed in CSS instead of prose. This framing is more precise than "the CSS becomes an argument" and has not been stated.
- ADD to the opening (after line 17):

```
The page's spatial form is not decoration applied to text. It is not layout selected from a catalog. It is INTERPRETATION -- the same cognitive act as literary criticism, but expressed in CSS instead of prose. The widening corridor is an interpretation of the content's philosophical trajectory. The asymmetry panels are an interpretation of the content's power dynamics. The terrain map is an interpretation of the content's self-legibility thesis applied reflexively. Each spatial decision is a claim about what the content means.
```

---

## PART 2: SOURCE DOCUMENT GAPS

---

### 12. MASTER-BUILD-PHILOSOPHY.md

**Key insights not captured in SKILL.md:**

**GAP MBP-1: The 4 Kill Points of the pipeline are not described in Anti-Patterns.**
- SEVERITY: MINOR (for a skill file)
- The master doc describes 4 specific pipeline kill points (TC classification, Synthesizer throttle, Section 11 gate, Builder permission). The SKILL.md's anti-patterns section (line 436) captures the essence (no compression, no fixed steps) but not the specific mechanism. This is arguably appropriate -- the skill should focus on what TO do, not on forensic analysis of the pipeline's failures.
- NO ACTION NEEDED.

**GAP MBP-2: The 19 unrealized pages with their spatial topologies are not referenced.**
- SEVERITY: MINOR
- The master doc maps 19 content pieces to 19 distinct spatial topologies (none the same). This is valuable context for the agent to understand that every content piece has a UNIQUE spatial form, but it is reference material, not skill instruction.
- NO ACTION NEEDED (the principle is captured in "NOT applicable to all content" and the selectivity property).

**GAP MBP-3: The competing builders concept (2 builders in parallel) is not mentioned.**
- SEVERITY: MODERATE
- WHERE: This is a fundamental architectural difference. The SKILL.md describes a SINGLE-agent approach. The master build philosophy describes a 17-agent approach with 2 competing builders (Alpha and Beta). The SKILL.md's approach is deliberately different (one agent, no pipeline), so the competing builders concept does not apply directly. However, the SKILL.md could mention that if the agent forms multiple spatial hypotheses, it should explore 2-3 rough sketches before committing to one.
- ADD to Wave 0 (after line 198):

```
If you form 2-3 competing spatial hypotheses, consider building rough sketches of each before committing. Build 50-line skeleton CSS for hypothesis A, then 50 lines for hypothesis B. Compare. Which one makes the content's spatial logic more visible? Commit to the stronger hypothesis and abandon the other. This internal competition expands the possibility space before the agent locks in.
```

---

### 13. _reflection-from-practice.md

**Key insights not captured in SKILL.md:**

**GAP RP-1: The $2,000 subscription example as a model of deepening reading is not included.**
- SEVERITY: MINOR
- This is illustrative material. The reflection traces how one content element (the $2,000 subscription story) was read differently across 4 passes: (1) proof point, (2) velocity shift, (3) tonal moment, (4) spatial decision. This is a powerful example of the reciprocal relationship but is illustrative, not instructional.
- NO ACTION NEEDED (the principle is captured; examples would make the file too long).

**GAP RP-2: "The page teaches you how to read the content" is stated but not its implications.**
- SEVERITY: MODERATE
- The reflection says: "This is not described in the master build philosophy. The philosophy describes a one-directional flow: read content, form spatial hypotheses, build. What actually happens is circular." The SKILL.md captures the circular process (line 152) but could be more explicit that the page is not just an output of understanding but a TOOL for understanding.
- ADD to the reciprocal relationship section (line 149), replacing or augmenting the current text:

```
The page is not just the output of understanding. The page is a TOOL for understanding. After building the bilateral asymmetry block, the agent reads the asymmetry passages differently -- not as an abstract argument but as a spatial relationship already constructed. The page teaches the builder how to read the content. Building is bidirectional.
```
- NOTE: The SKILL.md already has text close to this at line 154. This is a MINOR enhancement.

**GAP RP-3: "Devotion is a practice, not a feeling" is not explicitly stated.**
- SEVERITY: MODERATE
- WHERE: Section "The Point" (line 496)
- The reflection's concluding insight: "Devotion is not a feeling but a practice. You show love to a piece of work by returning to it. By looking at it again after you thought you were finished. By noticing the thing you missed. By caring enough to fix it. And then by looking again." The SKILL.md's closing (line 496) captures the spirit but could be more precise.
- ADD to "The Point" (line 496):

```
Devotion is not a feeling. It is a practice. You show love to the content by returning to the page. By looking at it after you thought it was finished. By noticing the thing you missed. By caring enough to fix it. And then by looking again. The page tells you when it is done not by passing a rubric but by exhausting the builder's capacity to see unrealized potential.
```

---

### 14. Dissection CLAUDE.md

**Key insights not captured in SKILL.md:**

**GAP DC-1: The 3 inseparable questions (Discovery, Sustained Engagement, Visual Maturity) are not framed.**
- SEVERITY: MINOR
- The dissection CLAUDE.md frames the research around 3 faces of one phenomenon: (1) how the builder FINDS structural ideas, (2) what "building for hours" looks like at minute 45 vs minute 5, (3) how to cross from "technically correct CSS" to 20-year-designer output. These are the motivating questions behind the skill, but they are research framing, not skill instruction.
- NO ACTION NEEDED.

---

## PART 3: METACOGNITIVE EVALUATION PERVASION CHECK

The user specifically asked: "Does the SKILL.md's 5-layer metacognitive evaluation truly pervade the entire skill, or is it just one section?"

**Assessment: The evaluation is concentrated in Section "The Metacognitive Evaluation -- The Backbone" (lines 50-89) and referenced in Wave 6 and Wave 7. It is NOT woven into EVERY wave.**

**Specific pervasion gaps:**

**GAP MC-1: Waves 0-5 lack inline metacognitive evaluation instructions.**
- SEVERITY: CRITICAL
- WHERE: Each wave section
- The SKILL.md says "At EVERY pass: Apply the 5-layer metacognitive evaluation" only in Wave 2 (line 232). Waves 0, 1, 3, 4, and 5 each have a "Metacognitive focus" line but this is a single question, not the full 5-layer protocol. The evaluation should be explicitly woven into every wave.
- ADD to Wave 0 (after line 200, after the metacognitive focus):

```
**At EVERY pass:** Apply the 5 metacognitive layers. What am I seeing? Why now (what has changed since last pass)? What am I NOT seeing? How would I know if I am missing something? Has my evaluation itself deepened?
```

- ADD the same instruction to Waves 1, 3, 4, and 5 (after each wave's metacognitive focus line).

**GAP MC-2: The evaluation is not woven into the "Looking Protocol."**
- SEVERITY: MODERATE
- WHERE: Section "The 'Looking' Protocol" (line 343)
- The looking protocol has step 6 (line 352): "Layer 2-5 metacognitive check." But it does not include the full 5-layer protocol inline -- it just references it by name. The agent might skip it.
- MODIFY step 6 to be explicit:

```
6. **Full metacognitive check:** (a) What am I seeing? (b) Why am I seeing it NOW that I was not seeing it before? (c) What am I NOT seeing -- what has become invisible through habituation? (d) How would I know if I am missing something -- what test would reveal it? (e) Has my evaluation deepened since last look, or am I applying the same lens? If same lens: re-read the content, re-read a different research file, change viewports.
```

**GAP MC-3: The evaluation deepening is described but not operationalized for the agent.**
- SEVERITY: MAJOR
- WHERE: Section "The Metacognitive Evaluation" (line 50)
- The evaluation section says the evaluation deepens (line 86-89) and gives an example (line 87) but does not give the agent a concrete protocol for DETECTING and BREAKING staleness. The "Deepening Test" (line 73) says "if no, break out" and lists 5 things to do. But it does not tell the agent HOW to detect that the evaluation has become stale. The detection mechanism needs to be more specific.
- ADD after the Deepening Test list (line 83):

```
**Staleness detection:** The evaluation is stale when:
- You have asked the same question ("does the page have rhythm?") across 3+ consecutive passes and gotten similar answers
- Your "What Still Needs Work" list has not changed across 2+ passes
- You cannot articulate what NEW thing you noticed about the content since last pass
- Your proposed changes are of the same TYPE as your previous 3 changes (all typography, all spacing, all responsive)

When staleness is detected, do ONE of: (a) re-read the content from scratch, looking for spatial metaphors you previously missed, (b) change viewport (1440 -> 768 -> 1024) and scroll through, (c) ask "What would someone who DISAGREES with my approach build differently?", (d) re-read a research file you have not touched in 3+ passes.
```

---

## PART 4: SUMMARY OF ALL GAPS

### CRITICAL (6 gaps -- must be addressed):
1. **GAP E-1:** 4-phase evaluation progression (structural -> relational -> coupling -> potential) not explicit
2. **GAP E-2:** Evaluation as learning mechanism not stated
3. **GAP GA-C3:** "Invention follows visibility, not importance" missing
4. **GAP M-1:** Semantic saturation as threshold phenomenon not described
5. **GAP IA-1:** False convergence signals not listed
6. **GAP MC-1:** Metacognitive evaluation not woven into every wave

### MAJOR (12 gaps):
1. **GAP P-1:** "Inhabiting question" vs "checklist question" distinction absent
2. **GAP R-1:** Additive-to-subtractive shift not explicitly instructed
3. **GAP R-2:** Within-wave pass rhythm not specified
4. **GAP R-4:** Self-critique chain persistence and triage not mentioned
5. **GAP PR-1:** Diagnostic override protocol missing from wave schedules
6. **GAP PR-2:** Content primacy lifecycle not described
7. **GAP CS-1:** Hypothesis formation lacks operational teeth
8. **GAP CS-2:** 8 spatial archetypes vocabulary not included
9. **GAP IA-2:** Genuine exhaustion requires all 3 conditions simultaneously
10. **GAP IA-3:** Minimum engagement requirements per wave not included
11. **GAP MC-3:** Staleness detection protocol not operationalized
12. **GAP GA-M14:** "Opinions emerge from building" not stated

### MODERATE (12 gaps):
1. **GAP P-3:** DOM skeleton count metric missing
2. **GAP R-3:** Screenshot rhythm decrease and "look before reading" not captured
3. **GAP R-5:** Looking produces insights research cannot -- not highlighted
4. **GAP F-1:** No "When to Use / When NOT to Use" section
5. **GAP E-3:** Taste evaluation protocol lacks full operational detail
6. **GAP PR-3:** Builder's notebook size management not specified
7. **GAP CS-3:** Key unlocking phrases for cognitive frame-shifting not included
8. **GAP ED-1:** Within-wave delta profile diagnostic not explicit
9. **GAP ED-3:** Waves 4 and 5 metacognitive focus questions missing
10. **GAP M-2:** Three-input convergence mechanism not described
11. **GAP M-3:** "HTML as compression device" framing not stated
12. **GAP CSD-1:** Why each re-reading is different not explained
13. **GAP CSD-2:** CSS-as-interpretation thesis not stated
14. **GAP MBP-3:** Competing sketches approach not mentioned
15. **GAP RP-3:** "Devotion is a practice, not a feeling" not explicit

### MINOR (3 gaps):
1. **GAP P-2:** ABSENT coupling grade missing from table
2. **GAP ED-2:** Token economics not included (appropriate omission)
3. **GAP RP-1:** $2,000 subscription deepening example not included (illustrative)

---

## PART 5: ESTIMATED IMPACT

If all CRITICAL and MAJOR gaps are addressed, the SKILL.md would grow from ~500 lines to approximately ~700-750 lines. This is still within the appropriate range for a single-agent framework skill (TC is 839 lines, PA is similar).

The CRITICAL gaps collectively address the skill's most significant weakness: the metacognitive evaluation is described as a philosophy but not operationalized as a protocol. The evaluation section tells the agent WHAT the evaluation should be but not HOW to detect when it is failing or HOW to break out of staleness. Addressing these 6 gaps transforms the evaluation from aspirational prose into actionable protocol.

The MAJOR gaps collectively address the skill's second weakness: the wave schedule describes WHAT to do but not the operational details of HOW to do it within each wave. The within-wave rhythm, the diagnostic override, the content handoff, the minimum engagement requirements, and the false convergence signals are all operational details that bridge the gap between "follow this wave schedule" and "here is what each pass actually looks like."

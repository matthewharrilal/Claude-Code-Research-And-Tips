# Primacy Rotation Protocol for /falls-in-love

Research into how transformer attention primacy should inform the design of a progressive enrichment skill where one agent builds an HTML page through an endless absorb-build-look-refine cycle.

---

## A. THE ROTATION SCHEDULE FOR 10+ PASSES PER SLICE

### The Problem

Transformer attention follows a U-shaped curve across the context window. Tokens at the beginning (primacy) and end (recency) receive disproportionate weight during attention computation. The middle compresses. This is not a bug -- it is a structural property of how self-attention heads allocate scores across long sequences.

When an agent reads five research files sequentially -- R1, R2, R3, R4, R5 -- the attention landscape looks like this:

```
Attention weight
|
|##                                    ##
|####                                ####
|######                            ######
|########                        ########
|##########                    ##########
|############                ############
|##############            ##############
|################        ################
|##################    ##################
|########################################
+----------------------------------------→
 R1    R2    R3    R4    R5    (read order)
      PRIMACY              RECENCY
```

R1 gets primacy. R5 gets recency. R2, R3, R4 get compressed. Over 10 passes, if the read order never changes, the agent will build a page that deeply reflects R1 (documentation patterns) and R5 (combination theory), while R3 (density dimensions -- the richest stream at 51 findings) gets structurally underweighted.

### The Existing Rotation Approach

The research-compose pipeline (SKILL.md, Phase 3) uses a 3-pass rotation:

- **Pass 1:** Package-pass-1 gets primacy (STRUCTURE pass)
- **Pass 2:** Package-pass-2 gets primacy (ENRICHMENT pass)
- **Pass 3:** Package-pass-3 gets primacy (HARDENING pass)

Each pass is a different agent (fresh context). Each pass reads a different package file first. Over 3 passes, each package gets exactly one turn at primacy.

This works for 3 passes with 3 packages. But /falls-in-love does 10+ passes on a single slice with a single agent. The dynamics are different:

1. **Same agent, not fresh agents.** The agent accumulates context. Each new read adds to what is already in the window, rather than replacing it.
2. **10+ passes, not 3.** A mechanical rotation through 5 files gives each file 2 primacy turns. But the rotation should be content-driven, not arithmetic.
3. **The HTML file grows.** By pass 5, the HTML file is substantial. It competes with the research files for attention. By pass 10, it may dominate.

### The Rotation Protocol

The protocol has two layers: a **default schedule** that guarantees coverage, and a **diagnostic override** that lets the agent deviate based on what the page needs.

#### Default Schedule (Guarantees Coverage)

For a slice containing N research files, the default schedule ensures every file gets primacy at least twice across 10 passes. With 5 files (R1-R5), this looks like:

| Pass | Primacy File | Why This File | Phase |
|------|-------------|---------------|-------|
| 1 | R1 (Documentation Patterns) | Structural patterns for initial layout | STRUCTURAL |
| 2 | R4 (Axis Innovations) | Eye movement and spatial form for layout | STRUCTURAL |
| 3 | R3 (Density Dimensions) | Density rhythm for what was just built | STRUCTURAL |
| 4 | R5 (Combination Theory) | How the new components relate to each other | INTEGRATION |
| 5 | R2 (Creative Layouts) | Editorial techniques for visual interest | INTEGRATION |
| 6 | R3 (Density Dimensions) | Re-read density after integration (second primacy) | INTEGRATION |
| 7 | R1 (Documentation Patterns) | Re-read documentation patterns for fine detail | CRAFT |
| 8 | R4 (Axis Innovations) | Re-read axis for movement refinement | CRAFT |
| 9 | R5 (Combination Theory) | Re-read combination for architecture review | ARCHITECTURE |
| 10 | R2 (Creative Layouts) | Final editorial polish | ARCHITECTURE |

Each file gets primacy exactly twice. The schedule is **not random** -- it follows an intentional logic:

- **Passes 1-3** prioritize files that produce the most structural output (documentation patterns for layout skeleton, axis innovations for spatial form, density for rhythm).
- **Passes 4-6** prioritize files about relationships and integration (combination theory, creative layouts, then density again because density is where rhythm breaks show up).
- **Passes 7-8** prioritize files with detail-level findings (documentation patterns have typography rules, axis innovations have movement timing).
- **Passes 9-10** prioritize files about system coherence (combination theory for architecture, creative layouts for polish).

Notice R3 appears at passes 3 AND 6. R3 (density dimensions) is the largest non-axis stream (51 findings) and the one most likely to be underweighted in a single pass. Two primacy turns at different phases -- one structural, one integrative -- lets the agent absorb density findings twice, through different lenses.

#### Diagnostic Override (Content-Driven Deviation)

The default schedule is a safety net, not a straitjacket. After every pass, the agent performs a diagnostic look at the page and may override the next pass's primacy assignment.

The diagnostic is simple -- three questions:

1. **What feels weakest?** The agent looks at the HTML and identifies the dimension that feels most underdeveloped. Is the density rhythm flat? (Put R3 at primacy.) Are the components not talking to each other? (Put R5 at primacy.) Is the layout spatially boring? (Put R4 at primacy.)

2. **What was the last primacy file?** The agent should not put the same file at primacy twice in a row. If R3 was just at primacy, the agent should not override to R3 again -- even if density still feels weak. The override should break the pattern, not reinforce it.

3. **Has any file gone 4+ passes without primacy?** If a file has not been at primacy for 4 consecutive passes, it is being structurally neglected. The agent should prioritize it regardless of diagnosis.

The override language for the skill:

```
After each pass, answer:
- What dimension of the page feels weakest right now?
- Which research file addresses that dimension?
- Has that file been at primacy in the last 2 passes?
  - If NO: put it at primacy for the next pass.
  - If YES: use the default schedule instead.
- Has any file gone 4+ passes without primacy?
  - If YES: that file gets primacy next, regardless.
```

#### Why Not Pure Content-Driven Rotation?

A purely content-driven approach -- "always put whatever the page needs at primacy" -- has a failure mode: the agent will repeatedly put the same 2-3 files at primacy because it keeps diagnosing the same weakness without making progress. This happens because:

1. The agent's diagnosis of "what feels weak" is itself subject to attention bias. It will notice weaknesses in the dimension it just read about (recency effect from the current pass).
2. Some weaknesses are structural and cannot be fixed by re-reading the same file. They require a DIFFERENT file's perspective. A flat density rhythm might actually need axis innovations (R4) to create spatial variety, not more density findings (R3).
3. The 4-pass neglect rule prevents the degenerate case where R2 (creative layouts) never gets primacy because the agent never diagnoses "editorial polish" as the weakest dimension -- it is always chasing density or axis.

The default schedule guarantees breadth. The diagnostic override adds depth. Together they produce coverage without rigidity.

### What the Agent Actually Reads Each Pass

The primacy file is first, but the agent does not re-read ALL files every pass. The protocol:

**Passes 1-3 (STRUCTURAL):** Read 2-3 research files per pass.
- The primacy file (full read)
- 1-2 supporting files (targeted read -- specific sections, not full file)
- The HTML file so far (full read)
- The content source (full read in pass 1, targeted in passes 2-3)

**Passes 4-6 (INTEGRATION):** Read 1-2 research files per pass.
- The primacy file (full read)
- 0-1 supporting files (targeted read)
- The HTML file (full read -- it is the primary artifact now)

**Passes 7-8 (CRAFT):** Read 1 research file per pass.
- The primacy file (targeted read -- specific findings, not the full file)
- The HTML file (full read)

**Passes 9-10 (ARCHITECTURE):** Read 1 research file per pass.
- The primacy file (scan for architecture/system-level findings)
- The HTML file (full read, with focus on CSS structure)

The reading volume decreases across passes. Early passes are research-heavy. Late passes are artifact-heavy. This mirrors how a human designer works: early on you are studying references; late on you are studying what you have built.

---

## B. WHAT 10+ PASSES ON ONE SLICE ACTUALLY LOOKS LIKE

### The Four-Phase Arc

Ten passes on a single research slice follow a natural progression. This progression is OBSERVED, not PRESCRIBED -- the agent decides what each pass focuses on based on what the page needs. But the arc is predictable because it mirrors how craft works at every scale.

#### Passes 1-3: STRUCTURAL (Big Additions)

**What happens:** The agent is APPLYING the research. Each pass adds substantial new structures to the page.

- **Pass 1:** Initial skeleton. Header, first content zone, first spatial form. The primacy file dominates. The agent is essentially building FROM the research, using findings as direct instructions. The HTML goes from 0 to ~200-400 lines. This pass produces the largest single delta.

- **Pass 2:** Second layer. The agent reads a different file at primacy and notices things the page is missing. New components, new layout sections, new spatial relationships. The HTML grows to ~400-700 lines. This pass often produces the most structurally diverse additions because the agent is seeing the page through a different research lens than pass 1.

- **Pass 3:** Third layer. By now the page has enough structure that the agent can see GAPS rather than starting from nothing. The third research file at primacy reveals specific deficiencies. "The density rhythm is monotonic." "There's no axis movement." "The components are all the same width." The additions are still structural, but they are CORRECTIVE -- filling gaps rather than building from scratch.

**Observable signals that STRUCTURAL phase is complete:**
- The page has content coverage (all major content sections are represented in the HTML)
- There are at least 3-4 distinct spatial zones
- The CSS is 200+ lines (enough to constitute a real layout, not just a skeleton)
- The agent's pass notes shift from "I added X" to "I need to fix the relationship between X and Y"

#### Passes 4-6: INTEGRATION (Making Things Talk)

**What happens:** The agent is INTEGRATING what it added. Making the new components talk to the existing ones. Fixing rhythm breaks.

- **Pass 4:** The agent reads the page holistically for the first time. Passes 1-3 were additive -- each pass was focused on what it was adding. Pass 4 is the first pass where the agent's primary attention is on the page itself, not the research. The research at primacy serves as a diagnostic lens: "according to combination theory, these two components should create tension, but they're just sitting next to each other." Fixes are relational, not additive.

- **Pass 5:** Transition refinement. The boundaries between zones -- the seams where pass 1's additions meet pass 2's additions -- get attention. Border weights get adjusted. Spacing gets rationalized. The agent is making the page feel like one composition, not three sequential additions. The research at primacy provides vocabulary for the transitions: "R2 says editorial layouts use pull quotes as bridges between zones."

- **Pass 6:** Rhythm audit. The agent reads the density dimensions file (R3) or whichever file addresses rhythm, and checks whether the page has a discernible density oscillation. High-density zones should alternate with low-density breathing zones. This pass often involves REMOVING things -- an addition from pass 2 that disrupts the rhythm gets simplified or relocated.

**Observable signals that INTEGRATION phase is complete:**
- Zone transitions feel intentional (not accidental adjacency)
- Density oscillation is perceptible (not monotonic)
- The CSS modifications are getting smaller (5-20 line changes, not 50-100 line additions)
- The agent's notes shift from "I fixed the relationship between X and Y" to "the hover timing on this element feels wrong"

#### Passes 7-8: CRAFT (Character-Level Details)

**What happens:** The agent has internalized the research and is now working at the fine-grain level. The research files serve as reference material, not inspiration.

- **Pass 7:** Typography refinement. Letter-spacing adjustments (within perceptible ranges -- >= 0.025em). Line-height tuning for different content types (code blocks vs prose vs headings). Font-size relationships between heading levels. The research at primacy might highlight a specific finding about typography rhythm, but the agent is primarily responding to what it SEES in the page, not what it READS in the file.

- **Pass 8:** Interaction details. Hover state timing (transition durations). Focus indicators. State changes. Border-color shifts on interactive elements. This pass requires the agent to think about the page as a TEMPORAL experience, not a static document. The research might provide interaction density findings, but the agent is crafting feel, not applying findings.

**Observable signals that CRAFT phase is complete:**
- Changes are CSS-property-level (adjusting one value), not component-level
- The agent can articulate WHY a specific value was chosen (not just "it looks better")
- The agent starts noticing things that are correct but could be MORE correct -- a sign of diminishing returns

#### Passes 9-10+: ARCHITECTURE (Structural Soundness)

**What happens:** The agent ensures the accumulated work is structurally sound. This is not a creative phase -- it is a maintenance phase.

- **Pass 9:** CSS audit. Dead code removal (styles that were overridden in later passes and are now unreachable). Property ordering within rulesets. Specificity cleanup. Custom property consolidation (are there redundant variables?). The research at primacy serves as a CHECKLIST: "does this page demonstrate the mechanisms that the research says it should?"

- **Pass 10+:** Responsive verification. The agent checks the page at different viewport widths (the page is self-contained HTML, so this is about CSS, not JS). 768px breakpoint behavior. Content reflow. Does the density rhythm survive at narrow widths? Does the axis movement degrade gracefully? This pass may loop -- if responsive issues are found, the agent fixes them and re-verifies.

**Observable signals that ARCHITECTURE phase is complete:**
- No dead CSS (every rule is reachable and contributes)
- Responsive behavior is intentional (breakpoints exist and produce good layouts)
- The agent's notes are about code quality, not visual quality
- The page is ready for external audit (PA or equivalent)

### Why This Progression Is Observed, Not Prescribed

The skill should NOT say "passes 1-3 are structural, passes 4-6 are integrative." It should say:

> Each pass, decide what the page needs most. In the early passes, you will typically find yourself making large structural additions. In the middle passes, you will typically find yourself fixing relationships between components. In the late passes, you will typically find yourself adjusting fine-grain details. But this is a tendency, not a rule. If pass 7 reveals a structural gap, add structure. If pass 2 reveals a detail issue, fix it.

The phases are descriptive labels for what typically happens, not prescriptive instructions for what should happen. The agent should read them as "here is what you will probably experience" rather than "here is what you must do."

### The Pass Delta Profile

Across 10 passes, the size of changes follows a predictable curve:

```
Lines changed per pass
|
|####
|########
|############
|################
|##############
|##########
|########
|######
|####
|###
+--------------------→
 P1  P2  P3  P4  P5  P6  P7  P8  P9  P10
```

- **Pass 1-2:** Large deltas (100-200+ lines added)
- **Pass 3-4:** Medium deltas (50-100 lines changed)
- **Pass 5-6:** Small deltas (20-50 lines changed)
- **Pass 7-8:** Tiny deltas (5-20 lines changed)
- **Pass 9-10:** Variable (might be 5 lines of cleanup or 50 lines of responsive CSS)

If the agent is making 100+ line changes in pass 8, something went wrong in passes 4-6. If the agent is making 5-line changes in pass 2, it is not being ambitious enough. The delta profile is a diagnostic tool for the agent to calibrate its own behavior.

---

## C. THE CONTEXT WINDOW CHALLENGE

### The Scale Problem

10+ passes per slice multiplied by 5+ slices = 50+ total passes. At roughly 200K tokens per context window, and each pass consuming 5-15K tokens of context (reading research + reading HTML + building + writing changes), a single context window can hold approximately 10-15 passes before hitting the limit.

This means:

- A single slice (10 passes) MIGHT fit in one context window, but only if the HTML stays under ~3000 lines and the research files are read selectively rather than in full.
- Multiple slices WILL NOT fit in one context window. The agent must span context windows.
- The HTML file persists across context windows (it is on disk). The agent's understanding of the research does NOT persist (it is in context only).

### Four Persistence Mechanisms

The skill should use all four, not choose between them:

#### 1. The HTML File as Primary Memory

The HTML file IS the agent's memory. Every design decision the agent made is encoded in the structure:

- Class names carry semantic meaning (`.stratum--bedrock` tells the next context window that geological stratification was the metaphor)
- CSS custom properties carry the token vocabulary (`:root { --zone-primary: ... }` tells the next window what the color system is)
- HTML structure carries spatial decisions (the nesting and ordering of elements is itself a record of layout choices)
- CSS comments carry intent (the agent should comment WHY, not WHAT -- `/* 4px border: bedrock confidence */` not `/* border width */`)

**The HTML file is a lossy memory.** It preserves WHAT was built, not WHY it was built or WHAT THE AGENT WAS THINKING. A context window that starts by reading the HTML knows the current state but not the journey. This is acceptable for CRAFT and ARCHITECTURE passes (where the current state is what matters), but insufficient for INTEGRATION passes (where the reasoning matters).

#### 2. Builder's Notebook (Running Commentary)

A markdown file (`_builders-notebook.md`) that the agent appends to after every pass. Not a log -- a notebook. The distinction matters:

- **Log:** "Pass 3: Added density zones. Changed border weights. 47 lines added."
- **Notebook:** "Pass 3: Reading R3 revealed that the density rhythm is completely flat -- every zone has the same spacing. I added breathing zones between the two densest sections (API reference and code examples). The border-weight gradient feels right for the API section but wrong for the narrative section -- narrative content doesn't have inherent hierarchy the way API endpoints do. Open question: should the narrative section use a DIFFERENT mechanism entirely, or should I adapt border-weight to work with non-hierarchical content?"

The notebook captures:
- **What the agent learned from the research file** (which findings resonated, which were irrelevant to this page)
- **What the agent decided and WHY** (not just what changed, but the reasoning)
- **Open questions** (things the agent noticed but did not resolve -- these become starting points for future passes)
- **Discoveries** (unexpected insights that emerged from the build process, not from the research)

**The notebook is read at the start of each context window.** It bridges the gap between what the HTML preserves (structure) and what the agent needs to know (intent, reasoning, open questions).

**Size management:** The notebook should not grow unbounded. After each slice (10 passes), the agent writes a SLICE SUMMARY at the bottom -- 20-40 lines that compress the 10 per-pass entries into the key learnings and open questions. Previous per-pass entries can be pruned if the notebook exceeds ~200 lines. The summaries persist; the per-pass details are ephemeral.

#### 3. Wave Retrospectives (Slice Boundaries)

At the end of each slice (after 10 passes on a set of research files), the agent writes a WAVE RETROSPECTIVE. This is distinct from the builder's notebook -- the notebook is per-pass, the retrospective is per-slice.

The retrospective answers:
- **What did this research slice contribute to the page?** (Which findings were applied? Which mechanisms were deployed?)
- **What did the page teach me about the research?** (Which findings turned out to be irrelevant? Which were more important than expected?)
- **What is the page's current state?** (Brief architectural snapshot: zones, mechanisms in use, CSS line count, content coverage percentage)
- **What does the NEXT slice need to address?** (Explicit handoff -- the questions the next research slice should answer)

The retrospective is a HANDOFF DOCUMENT. When the agent enters a new context window for the next slice, it reads the retrospective to understand where to start. This is more structured than the notebook and serves a different purpose: the notebook is the agent's thinking; the retrospective is the agent's briefing for its future self.

#### 4. Re-Reading Research with HTML Context

When the agent starts a new context window, it reads the research files. But it reads them DIFFERENTLY than it did in the first window:

- **First window:** The agent reads research with no HTML context. Findings are abstract. "R3-023: fractal self-similarity produces density rhythm" is a concept.
- **Second window:** The agent reads research with the HTML file already in context. Findings are evaluated against what exists. "R3-023: fractal self-similarity produces density rhythm -- I can see that the page already has some fractal nesting in the API section, but the narrative section is flat."

The HTML file provides a FILTER for the research. On re-read, the agent automatically focuses on findings that address the page's current deficiencies, because the page's deficiencies are already in its attention. This is a feature, not a bug -- but it means the agent will MISS findings that are relevant to parts of the page that are already good. The default rotation schedule (Section A) compensates for this by ensuring every file gets primacy, including files addressing dimensions that feel "done."

### The Recommended Reading Order for New Context Windows

When the agent enters a fresh context window mid-build:

1. **Builder's notebook** (first -- gets primacy, carries reasoning and open questions)
2. **Wave retrospective** from the previous slice, if applicable
3. **The HTML file** (the artifact -- what exists now)
4. **The primacy research file for this pass** (the new input)
5. **Supporting research files** (if needed, targeted reads)

The notebook gets primacy because it carries the agent's OWN reasoning, which is the thing most at risk of being lost across context boundaries. The HTML gets second position because it is the artifact. The research file gets third position -- this is deliberate. By the time the agent reads the research, it already knows what it was thinking (notebook) and what exists (HTML). The research is read through the lens of "what can this add to what I already have," not "what should I build."

---

## D. PRIMACY FOR CONTENT vs PRIMACY FOR RESEARCH

### The Content Primacy Lifecycle

The build philosophy says content comes first. The agent reads the content before any research. But what does "content" mean across 50+ passes?

#### Phase 1: Content IS the Source Material (Passes 1-3 of Slice 1)

In the first 3 passes, the agent reads the raw content file (e.g., `gas-town-extraction.md`). The content is the source of truth for WHAT the page should communicate. The agent reads it at primacy:

```
Reading order, Slice 1, Passes 1-3:
1. Content source file  (PRIMACY -- what are we building?)
2. Research file         (what does the research say about how to build it?)
3. HTML file             (what have we built so far? -- empty or small)
```

The content file is at primacy because the agent needs to deeply understand WHAT it is building before it understands HOW to build it. The research is in service of the content, not the other way around.

#### Phase 2: Content IS the HTML File (Passes 4-10 of Slice 1)

By pass 4, all the content is in the HTML. Every section, every heading, every paragraph from the source file has been placed into the page. The HTML file IS the content now -- enriched with layout, typography, spacing, and structure.

The raw content file becomes redundant. The agent can still re-read it, but what it will find is already in the HTML. Worse, re-reading the raw content at primacy will pull the agent's attention BACK toward the content structure (headings, sections, paragraphs) and AWAY from the design structure (zones, rhythms, transitions) -- which is what passes 4-10 should be focused on.

```
Reading order, Slice 1, Passes 4-10:
1. HTML file             (PRIMACY -- the artifact IS the content now)
2. Research file         (diagnostic lens for this pass)
3. Builder's notebook    (what was I thinking?)
```

The transition happens naturally when the agent stops finding new content to add from the source file. If pass 3's notes say "all content sections are now in the HTML," the source file should lose primacy in pass 4.

#### Phase 3: Content as Audit Reference (Slice 2+)

In later slices, the raw content file serves a different purpose: AUDIT REFERENCE. The agent reads it not to discover what to build, but to verify that nothing was lost. Content can drift during design -- a paragraph might get trimmed for layout reasons, a heading might get altered for typographic rhythm, a detail might get dropped because the agent forgot it was there.

```
Reading order, Slice 2+:
1. Builder's notebook    (PRIMACY -- continuity of reasoning)
2. HTML file             (the artifact)
3. Research file         (new research for this slice)
4. Content source file   (AUDIT -- did we lose anything? -- read LAST, targeted)
```

The content file is at the END of the reading order, in the recency position. This is deliberate. In later slices, the content is not at risk of being underweighted by the agent's attention (it is already in the HTML). The risk is that the agent FORGOT something, and recency position makes the omission salient: "I just re-read the content and noticed that the third example in section 4 was never added to the page."

### The Handoff Moment

When does the raw content stop being the primacy file and the HTML file take over? The answer is not a pass number -- it is a condition:

**The handoff happens when the agent can answer YES to: "Does the HTML file contain all the content from the source file?"**

This is not "has the agent read the entire source file." It is "has the agent PLACED all the content into the HTML." The distinction matters because an agent can read a content file in pass 1 and still miss sections. The handoff test is about the HTML, not about the reading.

The skill should make this explicit:

```
After each pass in the STRUCTURAL phase (passes 1-3), check:
- Is there content in the source file that is NOT yet in the HTML?
  - If YES: the source file stays at primacy for the next pass.
  - If NO: the HTML file takes primacy starting next pass.
    Write in your notebook: "Content handoff at pass N. All source
    content is now in the HTML."
```

### Should the Content ALWAYS Be Re-Read?

No. But it should be re-read at two specific moments:

1. **At the start of every new context window** -- as an audit check. Read it LAST (recency position), targeted, looking for omissions.

2. **When the agent feels uncertain about content fidelity** -- if the agent notices during a CRAFT pass that a section feels thin, it should re-read the corresponding section of the source file to check whether content was lost during design passes.

The content file should NOT be re-read:
- At the start of every pass (wastes context on redundant information)
- At primacy position after the handoff (pulls attention away from design work)
- During ARCHITECTURE passes (the agent is auditing CSS, not content)

### The Full Reading Order Matrix

| Phase | Position 1 (Primacy) | Position 2 | Position 3 | Position 4 (Recency) |
|-------|---------------------|------------|------------|---------------------|
| Slice 1, Passes 1-3 | Content source | Research file (rotated) | HTML file | Builder's notebook |
| Slice 1, Passes 4-6 | HTML file | Research file (rotated) | Builder's notebook | Content source (audit) |
| Slice 1, Passes 7-10 | HTML file | Research file (targeted) | Builder's notebook | -- |
| Slice 2+, Passes 1-3 | Builder's notebook | HTML file | Research file (rotated) | Content source (audit) |
| Slice 2+, Passes 4-10 | HTML file | Research file (rotated) | Builder's notebook | -- |

Key observations:

- **The builder's notebook gets primacy at the start of Slice 2+.** This is the context recovery moment. The agent lost its reasoning when the context window reset. The notebook restores it. The HTML restores the artifact. Together they reconstruct enough state for the agent to continue.

- **The content source file migrates from Position 1 (primacy) to Position 4 (recency/audit) over the first slice, then stays at Position 4 or drops off entirely.** It never returns to primacy.

- **The research file is always in Position 2 or 3.** It never gets Position 1 (primacy) WHEN the reading order is about what file is read first. Instead, the primacy rotation from Section A applies to HOW the research file is read -- which file, and which sections of that file, get the most attention.

This creates a subtlety: the primacy rotation (Section A) and the reading order (this section) operate at different levels. The reading order determines which FILE the agent reads first (content, HTML, or notebook). The primacy rotation determines which RESEARCH FILE the agent reads when it gets to the research position. They compose, not conflict.

---

## Summary of Key Design Decisions

1. **Default rotation schedule with diagnostic override.** Every research file gets primacy at least twice across 10 passes. The agent can deviate based on what the page needs, but the 4-pass neglect rule prevents any file from being permanently ignored.

2. **Four-phase arc is descriptive, not prescriptive.** STRUCTURAL / INTEGRATION / CRAFT / ARCHITECTURE describes what typically happens, not what must happen. The agent reads these as tendencies.

3. **Four persistence mechanisms work together.** The HTML file is primary memory (structure). The builder's notebook is reasoning memory (intent + open questions). Wave retrospectives are handoff memory (slice boundaries). Re-reading research with HTML context is filtered memory (relevance emerges from juxtaposition).

4. **Content primacy has a lifecycle.** Raw content gets primacy in early passes, hands off to the HTML when all content is placed, and migrates to recency/audit position for the remainder of the build. The handoff is condition-based ("is all content in the HTML?"), not pass-number-based.

5. **Reading order and primacy rotation are orthogonal.** Reading order determines which CATEGORY of file (content, HTML, notebook, research) gets attention first. Primacy rotation determines which SPECIFIC research file gets attention when the agent reaches the research slot. They compose without conflict.

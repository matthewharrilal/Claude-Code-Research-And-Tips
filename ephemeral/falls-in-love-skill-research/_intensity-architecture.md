# Intensity Architecture for /falls-in-love

**Date:** 2026-03-03
**Purpose:** Design the full intensity protocol -- 10+ passes per research slice, $300 budget, no stopping until exhaustion. This document provides the concrete specifications that will directly inform SKILL.md structure.

**Basis:** Progressive enrichment experiment (5 waves, ~26 passes, ~$60), master build philosophy (18 agents, 3,779 lines, 53/55 maturity), 5 prior research files in this directory, and the dissection research (23 files).

---

## A. THE PASS ARCHITECTURE (10+ Per Slice)

### The Qualitative Shift Model

The progressive enrichment experiment did 5 passes per wave and produced a 2,465-line page with ~35 component types. What it did NOT produce: the widening corridor, the self-observation module, the asymmetry inversion, container queries, scroll-driven animation. Those required the 18-agent build with content intelligence agents, competing builders, and devoted enrichment.

10+ passes per slice exists in a different regime. The difference is not "more of the same." It is a phase transition in the agent's relationship to both research and artifact.

### Passes 1-3: STRUCTURAL (Big Moves From Research)

**What happens:** The agent reads the research slice at primacy and the HTML file as the artifact. Each pass produces large structural additions -- new zones, new component types, new spatial relationships.

**Pass 1 -- First Contact:**
- The research hits the page for the first time. The agent reads the primacy file fully and identifies 3-5 findings that address the page's most obvious structural gaps.
- Additions are BOLD and ROUGH. The agent is not trying to get things right -- it is trying to get things ON THE PAGE. A bento grid that doesn't quite work. A pull quote that breaks the column but lands in the wrong spot. A density zone with placeholder spacing.
- Expected delta: 100-200+ lines added. The single largest delta per pass in the entire slice.
- The agent's stance: "I am APPLYING this research to my page."

**Pass 2 -- Second Lens:**
- The agent re-reads the research (same file, but now the page has Pass 1's additions). Findings that seemed irrelevant on first read now click -- "oh, R3-023 about fractal density is talking about what I just built in Zone 2."
- Additions are CORRECTIVE. The agent sees gaps between what it built and what the research describes. The bento grid gets its hierarchy fixed. A new component fills a rhythm gap.
- Expected delta: 80-150 lines added.
- The agent's stance: "I see what I missed on first read."

**Pass 3 -- Gap Sweep:**
- The agent re-reads the research SELECTIVELY -- scanning for findings it has not yet addressed. By now, 30-40% of the findings have been applied or judged irrelevant. The remaining 60% need triage: which ones address real gaps vs. which ones would add clutter?
- Additions are SURGICAL. One component added because the page's rhythm flatlines at a specific point. One spacing adjustment because the transition grammar is broken.
- Expected delta: 50-100 lines added.
- The agent's stance: "I am triaging the remaining research against what the page actually needs."

**Observable signals that STRUCTURAL is complete:**
- All major content sections are represented in the HTML.
- 3-4+ distinct spatial zones exist.
- CSS exceeds 200 lines (enough to constitute a real layout, not a skeleton).
- The agent's notes shift from "I added X" to "I need to fix the relationship between X and Y."

---

### Passes 4-6: INTEGRATION (Making Things Talk)

**What happens:** The agent's primary attention shifts from the research to the HTML itself. Research becomes a diagnostic lens, not an instruction manual. The agent reads the page holistically -- not section by section, but as a SYSTEM of relationships.

**Pass 4 -- First Holistic Read:**
- This is the first pass where the agent reads the ENTIRE page as a composition. Passes 1-3 were additive -- focused on what to ADD. Pass 4 asks: "Now that these components exist, do they TALK to each other?"
- The research at primacy serves as a diagnostic vocabulary: "According to combination theory, these two components should create tension, but they're just sitting next to each other."
- Changes are RELATIONAL, not additive. Border weights get adjusted to create a gradient across zones. Spacing gets rationalized so that zone transitions have consistent rhythm. A component that was added in Pass 2 gets repositioned because it disrupts the density oscillation.
- Expected delta: 30-80 lines changed (some added, some modified, some removed).
- The agent's stance: "Do the parts form a whole?"

**Pass 5 -- Transition Refinement:**
- The seams between zones get focused attention. Where Pass 1's additions meet Pass 2's additions, there are often jarring boundaries -- different spacing conventions, inconsistent border weights, visual rhythm breaks.
- The agent focuses specifically on the 4-6 transition boundaries in the page. Each boundary should feel intentional -- a designed handoff, not an accidental adjacency. The research provides vocabulary for transitions: "R2 says editorial layouts use pull quotes as bridges between zones."
- Expected delta: 20-50 lines changed.
- The agent's stance: "Do the transitions serve the reading experience?"

**Pass 6 -- Rhythm Audit:**
- The agent reads the density-related research (R3 or equivalent) and checks whether the page has a discernible density oscillation. HIGH-density zones should alternate with LOW-density breathing zones. This is where REMOVAL happens -- an addition from Pass 2 that disrupts the rhythm gets simplified or relocated.
- This pass often involves net REMOVAL of lines. A callout that clutters a breathing zone gets deleted. A grid that was 4-column gets simplified to 3. The agent is trimming, not adding.
- Expected delta: -20 to +20 lines (may be net negative).
- The agent's stance: "Is the density rhythm creating a reading experience or visual noise?"

**Observable signals that INTEGRATION is complete:**
- Zone transitions feel intentional (not accidental adjacency).
- Density oscillation is perceptible (not monotonic).
- CSS modifications are getting smaller (5-20 line changes, not 50-100 line additions).
- The agent's notes shift from "I fixed the relationship between X and Y" to "the hover timing on this element feels wrong."

---

### Passes 7-9: DEPTH (Things That Couldn't Exist at Pass 3)

This is where 10+ passes separates from 5-pass waves. At 5 passes, the agent stops here -- it has structural coverage and basic integration. At passes 7-9, the agent enters territory that literally could not exist at pass 3 because the agent's understanding of the page was insufficient to see these possibilities.

**Pass 7 -- Typography as Argument:**
- The agent stops thinking about layout and starts thinking about CHARACTER-LEVEL spatial form. Letter-spacing as density encoding (-0.03em for compressed authority, +0.12em for sparse labels). Line-height as breathing speed (1.4 for dense analysis, 1.8 for philosophical reflection). Font-size relationships that encode hierarchy WITHIN zones, not just between zone headings.
- This pass requires having internalized the page's spatial logic so deeply that typographic adjustments serve the argument. The agent at pass 3 doesn't know the page well enough to make letter-spacing a semantic decision. At pass 7, it does.
- Expected delta: 10-30 lines changed (CSS property values, not structure).
- The agent's stance: "Does the typography FEEL like the content?"

**Pass 8 -- Interaction as Experience:**
- Hover state timing. Transition durations. Focus indicators. State changes. Border-color shifts on interactive elements. The page is now treated as a TEMPORAL experience, not a static document.
- The agent scrolls through the rendered page and asks: "What should happen when the reader pauses here? When they move their cursor over this? When they tab through this?" Each interaction is a design moment that serves the content's meaning.
- This pass requires having inhabited the page long enough to think about READER EXPERIENCE, not just visual arrangement. At pass 3, the agent thinks in terms of "what to put where." At pass 8, it thinks in terms of "what does the reader feel at this moment."
- Expected delta: 15-40 lines changed (transitions, hover states, animation declarations).
- The agent's stance: "What does the reader experience over TIME as they move through this page?"

**Pass 9 -- Self-Reference and Content-Form Coupling:**
- The agent asks: "Does this page DEMONSTRATE the content it describes?" If the content is about self-observation, does the page observe its own reader? If the content is about fractal patterns, does the page exhibit fractal structure? If the content is about power asymmetry, does the page physically encode that asymmetry at every scale?
- This is the swap test applied as a creative tool: "Which sections could survive transplantation to a different page? Those are the sections where the form is generic. What would make the form INEVITABLE for this content?"
- This pass produces the highest-coupling spatial inventions -- the self-referential components, the content-mapped color semantics, the named grid areas that use content vocabulary. These inventions are only possible because the agent has spent 8 passes building intimacy with both the content and the page.
- Expected delta: 20-60 lines (may add new components that are structurally small but conceptually significant).
- The agent's stance: "Is this page married to its content, or just dating it?"

**Observable signals that DEPTH is complete:**
- Changes are CSS-property-level (adjusting one value), not component-level.
- The agent can articulate WHY a specific value was chosen (not just "it looks better").
- The agent starts noticing things that are correct but could be MORE correct -- a sign of approaching diminishing returns.
- Self-referential components exist (components that reference the page's own structure).

---

### Passes 10+: MASTERY (Inside the Research, Not Applying It)

**What changes at pass 10:**

The agent is no longer "applying research to a page." The agent has INTERNALIZED the research into its own creative vocabulary. Findings are no longer "R3-023 says..." -- they are assumptions the agent makes without citing them. The research has become the agent's taste.

**Pass 10 -- Architectural Soundness:**
- CSS audit. Dead code removal. Property ordering. Specificity cleanup. Custom property consolidation. The agent ensures the accumulated 9 passes of work are structurally sound.
- This is not creative work -- it is craft maintenance. The agent is making the code as clean as the design. But it requires mastery: you can only clean code you fully understand, and the agent only fully understands the code after 9 passes of building it.
- Expected delta: -10 to -50 lines (net removal of dead code, duplicate properties, orphaned selectors).

**Pass 11 -- Responsive as Content-Derived:**
- The agent checks the page at 768px. But not just "does it reflow?" -- rather, "does the responsive behavior serve the content?"
- At 1440px, asymmetric grids encode power relationships. At 768px, do those relationships survive? Or do they collapse into generic single-column stacks? The agent designs responsive behavior that preserves the content-form coupling at narrow widths.
- This requires the agent to understand WHICH spatial decisions are load-bearing (must survive reflow) and which are decorative (can collapse). Only a builder who made those decisions can make this judgment.
- Expected delta: 30-80 lines added (responsive CSS that is content-aware, not generic).

**Pass 12+ -- The Invisible Grain:**
- The agent is making changes that a reader would not consciously notice: padding from 48px to 44px, a border-color from #E5E5E5 to #E0E0E0, a transition duration from 200ms to 180ms.
- These changes are real -- they contribute to the page's overall FEEL. But they are at the threshold of perceptibility. When the agent's proposed changes are consistently at this grain, the slice is exhausted.

---

### What Distinguishes Pass 10 From Pass 3 -- Qualitatively

| Dimension | Pass 3 | Pass 10 |
|-----------|--------|---------|
| Agent's frame | "What does this research say I should add?" | "What does this page need to become?" |
| Research relationship | Instruction source | Internalized vocabulary |
| Change character | Adding new structures | Refining existing relationships |
| Content understanding | Knows WHAT the content says | Knows what the content MEANS spatially |
| Self-critique depth | "This section is missing a component" | "This section's spatial form contradicts its content" |
| CSS decisions | "I'll use a 2-column grid" | "I'll use a 7:3 grid because the content's power dynamic is asymmetric" |
| Swap test capability | Cannot apply (doesn't know the page well enough) | Can apply to every section |
| Invention capacity | Applying known patterns from research | Inventing patterns the research didn't describe |

**What the agent can see at pass 10 that it literally could not see at pass 3:**

1. **Compound relationships.** At pass 3, the agent sees individual components. At pass 10, it sees how 3-4 components interact simultaneously -- how the border-weight gradient in Zone 2 sets up an expectation that the dark zone's border elimination SUBVERTS.

2. **Temporal experience.** At pass 3, the agent sees the page as a spatial layout. At pass 10, it sees the page as a TIME-BASED experience -- how the reading speed changes at each zone transition, how the density rhythm creates a heartbeat, how the hover states punctuate the scroll.

3. **Content echoes.** At pass 3, the agent maps content to zones. At pass 10, it sees how the content's argument RECURSES through the page's form at multiple scales -- the same asymmetry in the bilateral block, in the grid proportions, in the letter-spacing, in the border weights.

4. **What is missing.** At pass 3, the agent sees what it has built. At pass 10, it sees what it HASN'T built -- the negative space of unrealized spatial possibilities that the content suggests.

---

### Signs of Genuine Exhaustion (Time to Move to Next Slice)

The agent must distinguish between FALSE convergence (tempted to stop but more to discover) and GENUINE exhaustion (the research slice has been fully absorbed).

**Genuine exhaustion signals -- all 3 must be present:**

1. **The delta profile has bottomed out.** The last 2-3 passes produced changes of 5-15 lines each. The changes are at the invisible grain -- padding adjustments, border-color fine-tuning, transition timing. A reader would not notice the difference between the pass 8 version and the pass 12 version.

2. **The research re-read produces no new ideas.** The agent re-reads the primacy file and nothing jumps out. Not because the research is weak, but because every applicable finding has been absorbed. The agent can annotate each finding with either "applied in pass N" or "not relevant to this page."

3. **The "infinite time" answer is invisible.** When the agent asks itself "What would I change with infinite time?", the answer involves sub-perceptual adjustments (1px changes, 50ms timing differences) rather than spatial ideas. The visible potential has been exhausted.

**False convergence signals -- indicators the agent should CONTINUE:**

1. **The agent skipped a research finding because it seemed hard.** Some findings are easy to apply (add a border gradient) and some require rethinking spatial structure (restructure a zone around a different reading path). The agent may converge on easy findings and declare the slice exhausted while the hard findings sit unaddressed.

2. **No swap test performed.** If the agent has not applied the swap test to at least 3 sections, it does not know whether the form is coupled to the content. Convergence without coupling verification is premature.

3. **The agent's "What Still Needs Work" list has items from passes 1-3 that were never addressed.** These may have been deprioritized, not resolved. The agent should revisit before declaring exhaustion.

4. **The page has no self-referential components.** If the content has structural themes (self-observation, recursion, hierarchy, patterns) and the page does not demonstrate those themes through its own form, the deepest level of coupling has not been reached. This is not mandatory -- some content does not call for self-reference. But its absence should be consciously evaluated, not overlooked.

---

## B. THE EVALUATION EVOLUTION

### Phase 1 Evaluation: Structural Completeness (Passes 1-3)

**What the agent evaluates:**
- Does the page have distinct zones? Can a reader tell where they are?
- Does the content physically appear in the zones where it belongs?
- Is the metaphor architecturally present (not just named in CSS classes)?
- Are the zone transitions visible?
- Does the page have spatial variety (more than one DOM skeleton)?

**Questions the agent asks itself:**
- "If I remove all CSS, does the HTML still flow in a logical order?"
- "Can a reader scan the page at arm's length and see distinct spatial zones?"
- "Has every section of the source content found a home in the HTML?"
- "What is the page's dominant spatial idea right now? Can I state it in one sentence?"

**What this evaluation CANNOT see:**
- Whether the zones are the RIGHT zones for this content.
- Whether the form is generic (could hold any content) or specific.
- Whether components talk to each other or sit in isolation.

---

### Phase 2 Evaluation: Relational Quality (Passes 4-6)

**What the agent evaluates:**
- Does the density rhythm work? (LOW -> HIGH -> LOW oscillation)
- Are zone transitions effective? (Designed handoffs vs. accidental adjacency)
- Does the grid hierarchy communicate the content's hierarchy?
- Do consecutive components have velocity variation? (FAST -> SLOW -> FAST)
- Is there decompression after high-density zones?

**Questions the agent asks itself:**
- "If I removed one zone, would the adjacent zones still make sense?"
- "Where does my eye STOP when I scroll? Is that stopping point intentional?"
- "Are there two consecutive components of the same type/speed? That's a rhythm break."
- "Does the page accelerate and decelerate, or does it proceed at one speed?"

**What this evaluation CANNOT see:**
- Whether the relationships serve THIS content specifically.
- Whether these same component relationships would work on a different page.
- The difference between "smooth" and "coupled."

**The critical addition at this phase -- adversarial self-questioning:**
- "What am I NOT seeing because I have been staring at this page for 6 passes?"
- "Would someone who disagrees with my approach say the density rhythm is wrong?"
- "Am I confusing familiarity with quality?"

---

### Phase 3 Evaluation: Content-Form Coupling (Passes 7-9)

**What the agent evaluates:**
- The SWAP TEST: "Take this section's layout. Put it on a different page. Does it break?"
  - If YES: coupling is INEVITABLE or STRONG. Keep it.
  - If NO: coupling is GENERIC. Deepen it or accept it.
- Does the page's spatial form ENACT the content's argument?
- Where does the form soften? Where is it "good enough" but not coupled?
- Are there content-semantic grid names? (Grid areas named after what the content IS, not where it sits.)
- Are there asymmetric proportions that encode hierarchy?

**Questions the agent asks itself:**
- "Why is this section 1fr/1fr when the content describes an asymmetric relationship?"
- "This zone background could hold any content. What would make it specific to THIS content?"
- "The content has 8 parallel items. Am I showing them in a grid that makes their relationships visible, or in a list that hides them?"
- "What spatial invention does the content DEMAND that I have not yet discovered?"

**What this evaluation CANNOT see:**
- What the page could STILL become.
- The difference between "no problems" and "no unrealized potential."

---

### Phase 4 Evaluation: Total Integration + Taste (Passes 10+)

**What the agent evaluates:**
- "If this were the only page I ever built, would I be proud of it?"
- "What would I change with infinite time?" (When the answer is invisible-grain, the page is done.)
- "What is the content's deepest structural argument? Does the page embody it at every scale?"
- "Where do I feel the content THROUGH the form? Where does the form feel like a container?"
- "What would a fresh-eyes auditor notice that I have stopped noticing?"

**Questions the agent asks itself -- that it COULD NOT ask at pass 3:**
- "Does the 5-scale fractal density system embody the content's argument about [X] at every scale?"
- "Is the corridor width progression earning its complexity, or is it a trick that impresses once?"
- "Does the page's temporal experience (scroll speed, hover pauses, density changes) match the content's emotional arc?"
- "If I removed my cleverest spatial invention, would the page still work? If yes, the invention is decorative, not structural."
- "What would I build differently if I started over with everything I now know about this content?"

---

### How Evaluation Avoids Becoming a Checklist

The entire point of evolving evaluation is that it CANNOT be pre-written. Here are the mechanisms that prevent checklist decay:

**Mechanism 1: Self-generated questions replace fixed rubrics.**
After each pass, the agent writes "What Still Needs Work" -- questions specific to the current state of THIS page. These questions change because the page changes. Wave 1's "What Still Needs Work" is entirely different from Wave 5's because the page is different and the agent's knowledge of the page is different.

**Mechanism 2: Each retrospective asks "What Did I Learn About the Content?"**
This is the key anti-stale mechanism. The question is not "what did I fix?" but "what did I learn?" Learning is inherently non-repeating. You cannot learn the same thing twice. Each wave teaches the agent something new.

**Mechanism 3: The evaluation includes taste, not just features.**
Fixed rubrics check for PRESENCE: "Does the page have rhythm? Yes/No." Taste evaluates QUALITY: "Does the rhythm serve the content, or does it interrupt it?" Taste cannot be reduced to a rubric because it requires judgment specific to this page.

**Mechanism 4: Periodic adversarial self-questioning.**
Every 3-4 passes, the agent asks:
- "What has become invisible to me because I have been staring at this page?"
- "What would someone who disagrees with my approach say?"
- "Am I confusing familiarity with quality?"
- "What would a fresh-eyes auditor notice?"

**Mechanism 5: The pride question as terminal evaluator.**
"If this were the only page I ever built, would I be proud of it?" This question cuts through all rationalization. If the answer is "yes, but..." -- the "but" IS the evaluation.

---

## C. THE ROTATION PROTOCOL

### The Core Problem

Transformer attention follows a U-shaped curve: tokens at the beginning (primacy) and end (recency) receive disproportionate weight. The middle compresses. When an agent reads 5 research files sequentially, files in positions 2-4 get structurally underweighted.

Over 10+ passes, if the read order never changes, the agent builds a page that deeply reflects file 1 (primacy) and file 5 (recency), while the richest file might sit in the attention trough at position 3.

### Within a Wave: The Default Rotation Schedule

For a slice containing N research files, every file gets primacy at least twice across 10 passes. For a typical 5-file research slice:

| Pass | Primacy File | Phase | Rationale |
|------|-------------|-------|-----------|
| 1 | File A | STRUCTURAL | Structural patterns for initial layout |
| 2 | File D | STRUCTURAL | Axis/spatial form for layout variation |
| 3 | File C | STRUCTURAL | Density rhythm for what was just built |
| 4 | File E | INTEGRATION | How new components relate to each other |
| 5 | File B | INTEGRATION | Creative/editorial techniques for visual interest |
| 6 | File C | INTEGRATION | Re-read density after integration (second primacy) |
| 7 | File A | DEPTH | Re-read for fine-grain typography/documentation detail |
| 8 | File D | DEPTH | Re-read for interaction/movement refinement |
| 9 | File E | MASTERY | Re-read for architecture/compound combination review |
| 10 | File B | MASTERY | Final editorial polish |

Every file gets primacy exactly twice. The schedule is not random:
- Passes 1-3 prioritize files that produce structural output.
- Passes 4-6 prioritize files about relationships and integration.
- Passes 7-8 prioritize files with detail-level findings.
- Passes 9-10 prioritize files about system coherence.

The highest-finding-count file (like R3 with 51 findings, or R4 with 192) appears at passes 3 AND 6 -- two primacy turns at different phases -- because it is most likely to be underweighted in a single pass.

### The Diagnostic Override

After every pass, the agent performs three diagnostic checks that may override the default schedule:

```
After each pass, answer:
1. What dimension of the page feels weakest right now?
2. Which research file addresses that dimension?
3. Has that file been at primacy in the last 2 passes?
   - If NO: put it at primacy for the next pass.
   - If YES: use the default schedule instead.
4. Has any file gone 4+ passes without primacy?
   - If YES: that file gets primacy next, regardless.
```

**Why not pure content-driven rotation?** A purely diagnostic approach has a failure mode: the agent repeatedly puts the same 2-3 files at primacy because it keeps diagnosing the same weakness. This happens because the agent's weakness-diagnosis is itself subject to recency bias, and some weaknesses need a DIFFERENT file's perspective to fix. The 4-pass neglect rule prevents any file from being permanently ignored.

### Across Waves: Preventing Research Fade

Research from earlier waves does not physically persist in context (the context window resets). Four mechanisms prevent research fade:

**1. The HTML file as primary memory.**
Every design decision from earlier waves is encoded in the HTML: class names carry semantic meaning (`.stratum--bedrock`), CSS custom properties carry the token vocabulary, HTML structure carries spatial decisions, CSS comments carry intent. The HTML file IS the agent's memory of what earlier research produced.

**2. The builder's notebook.**
A running markdown file (`_builders-notebook.md`) that the agent appends to after every pass. Not a log -- a notebook. Captures: what the agent learned from the research, what it decided and WHY, open questions, discoveries. Read at the start of each new context window.

**3. Wave retrospectives.**
At the end of each slice (after 10+ passes), the agent writes a wave retrospective. This is a HANDOFF document that answers: What did this research contribute? What did the page teach me about the research? What is the page's current state? What does the NEXT slice need to address?

**4. Targeted re-reading.**
When the agent suspects earlier research is fading (a symptom: the page's vocabulary reverts to generic patterns in zones built during earlier waves), it re-reads 1-2 specific findings from the earlier slice. Not the full file -- targeted extraction of the findings that matter for the current weakness.

### When to Re-Read vs. When to Trust HTML-As-Memory

**Re-read the research when:**
- The agent notices a zone from an earlier wave that has become "stale" -- it was built under earlier research and has not been updated to reflect later learning.
- The agent is making a decision that directly relates to an earlier slice's findings (e.g., deploying a density mechanism while in a combination-theory wave).
- The agent cannot remember the REASONING behind a specific spatial decision in the HTML. The HTML shows WHAT was decided; only the research or notebook shows WHY.

**Trust the HTML when:**
- The agent is doing integration work (passes 4-6) -- the HTML IS the artifact being integrated, and its current state matters more than the research that produced it.
- The agent is doing responsive work (pass 11) -- responsive behavior is about the HTML's spatial structure, not about research findings.
- The agent is removing dead code or cleaning CSS architecture -- this is about the code, not the research.

### How to Detect When Rotation Is Not Working

**Symptoms of attention trough neglect:**

1. **Visual monotony in specific zones.** If the page has 5 zones and zone 3 is visually flat compared to zones 1, 2, 4, and 5, it may correspond to a file that sat in the attention trough during formative passes.

2. **Missing research application.** After a slice, the agent should be able to point to at least 2-3 applied findings per file. If one file has 0 applied findings, it was neglected.

3. **The agent's notebook never mentions a specific file.** If the notebook entries reference 4 of 5 files but never the 5th, the 5th was in the trough.

4. **Zone-specific swap test failure.** If one zone passes the swap test (form is generic) while others fail it (form is content-coupled), the generic zone may have been built during a pass where the relevant research was in the trough.

**Remediation:** When any of these symptoms appear, the agent puts the neglected file at primacy for the next 2 passes and applies it specifically to the weak zone. This is a surgical intervention, not a full re-read.

### Specific Rotation Sequence: R1-R5 Research Slice (337 Findings)

This is the largest and most diverse research slice. Here is the exact rotation:

| Pass | Primacy | Supporting Read | Focus |
|------|---------|----------------|-------|
| 1 | R1 (28 findings: documentation patterns) | R4 targeted (viewport principle) | Layout skeleton, editorial patterns |
| 2 | R4 (192 findings: axis innovations) | R2 targeted (pull quotes) | Spatial form, eye movement, F/Z patterns |
| 3 | R3 (51 findings: density dimensions) | R5 targeted (velocity model) | Density rhythm, HIGH/LOW oscillation |
| 4 | R5 (39 findings: combination theory) | R3 targeted (fractal density) | Component relationships, temperature |
| 5 | R2 (27 findings: creative layouts) | R1 targeted (callout doctrine) | Editorial confidence, column breaks |
| 6 | R3 (second primacy) | RESEARCH-SYNTHESIS | Density re-check post-integration |
| 7 | R1 (second primacy) | None | Typography detail, documentation confidence |
| 8 | R4 (second primacy) | None | Movement timing, interaction density |
| 9 | R5 (second primacy) | None | Architecture review, compound combination |
| 10 | R2 (second primacy) | None | Final editorial polish, visual confidence |
| 11 | RESEARCH-SYNTHESIS only | None | Cross-cutting principles check |
| 12+ | Agent's choice based on diagnostic | None | Diminishing returns territory |

R4 (192 findings, the largest file) gets targeted reads in pass 1 and full primacy in passes 2 and 8. R3 (51 findings, the density backbone) gets primacy at passes 3 and 6 -- once during structural and once during integration.

---

## D. THE $300 BUDGET ARCHITECTURE

### Token Economics Per Pass

**Input tokens per pass (what the agent reads):**
- HTML file: grows from ~500 lines (pass 1) to ~3,000 lines (pass 50). At ~4 tokens/line: 2,000-12,000 tokens.
- Research file (primacy): 200-800 lines depending on file. At ~4 tokens/line: 800-3,200 tokens.
- Supporting research file (targeted): 50-200 lines. 200-800 tokens.
- Builder's notebook: 50-200 lines. 200-800 tokens.
- Content source file (if read): 500-1,000 lines. 2,000-4,000 tokens.
- Screenshot analysis: ~500-1,000 tokens per screenshot.

**Total input per pass:** 4,000-18,000 tokens. Average ~10,000 tokens.

**Output tokens per pass (what the agent writes):**
- HTML modifications: 50-200 lines of CSS/HTML changes. At ~4 tokens/line: 200-800 tokens.
- Notebook entry: 20-50 lines. 80-200 tokens.
- Retrospective (end of slice): 50-100 lines. 200-400 tokens.

**Total output per pass:** 500-1,400 tokens. Average ~800 tokens.

**Cost per pass (at Opus pricing, ~$15/MTok input, ~$75/MTok output):**
- Input: 10,000 tokens x $15/MTok = $0.15
- Output: 800 tokens x $75/MTok = $0.06
- Overhead (system prompt, tool calls, reasoning): ~$0.30
- **Total per pass: ~$0.50-$0.80. Average ~$0.60.**

### Pass Budget Allocation

At $0.60 per pass and $300 budget: **~500 theoretical passes.**

But this is optimistic. Context window management (fresh sessions, re-reading carried-forward files) adds overhead. Realistic estimate: **~350-400 usable passes.**

### Distribution Across Waves

| Wave | Research Slice | Passes | Est. Cost | Rationale |
|------|---------------|--------|-----------|-----------|
| 0 | Content only (no research) | 8-12 | $6-8 | Multiple reads of content, spatial hypothesis formation, initial build |
| 1 | Design system soul (identity, vocabulary, tokens, components) | 10-14 | $7-10 | Foundation: soul constraints, token vocabulary, component awareness |
| 2 | R1-R5 Research (337 findings) | 14-18 | $10-14 | Widest aperture: 6 files, 337 findings, most structural additions |
| 3 | OD case studies (3 case studies + grammar) | 12-15 | $9-12 | Organizational hierarchy, fractal annotation, culmination |
| 4 | DD case studies + AD principles | 12-15 | $9-12 | Density depth, fractal self-similarity, axis movement |
| 5 | CD case study + grammar | 12-15 | $9-12 | Combination mastery, compound deployment, transition grammar |
| 6 | Integration (no new research) | 15-20 | $12-16 | Pure refinement: responsive, architecture, coupling, taste |
| 7 | Final PA + refinement cycle | 8-12 | $10-15 | Fresh-eyes screenshots, self-PA, final surgery |
| **Total** | | **91-121 passes** | **$72-99** | Core build |

**Remaining budget for depth passes: $200-228.**

This remaining budget funds additional depth within each wave. Instead of moving to the next wave after 12 passes, the agent can go to 20-25 passes on a single slice if the research is yielding new ideas. The budget architecture is:

- **Core build (Waves 0-7): ~$100.** This produces a page comparable to the progressive enrichment experiment output.
- **Depth budget: ~$200.** This is what makes the $300 build different from the $60 build. The depth budget funds:
  - 3-5 additional passes per wave where the research is richest (Waves 2-5)
  - 10-15 additional integration passes in Wave 6
  - 2-3 full re-engagement cycles where the agent goes back to an earlier wave's research and re-applies it with the understanding gained from later waves
  - Extended responsive work at multiple viewports
  - A second taste evaluation pass where the agent tries to argue AGAINST its own design choices

**Estimated total: 150-200 passes across 7 waves.**

### Context Window Management

At ~200K tokens per context window and ~10K tokens consumed per pass, a single context window holds approximately 15-20 passes before hitting the limit (accounting for system prompt, conversation history, tool call overhead).

**Context window schedule:**

| Window | Passes | What Carries Forward |
|--------|--------|---------------------|
| 1 | Passes 1-15 (Wave 0 + Wave 1 start) | HTML file + notebook (on disk) |
| 2 | Passes 16-30 (Wave 1 end + Wave 2 start) | HTML + notebook + Wave 1 retrospective |
| 3 | Passes 31-45 (Wave 2 continued) | HTML + notebook + retrospectives 1-2 |
| 4 | Passes 46-60 (Wave 2 end + Wave 3) | HTML + notebook + retrospectives 1-3 |
| 5 | Passes 61-75 (Wave 3 end + Wave 4) | HTML + notebook + retrospectives 1-4 |
| 6 | Passes 76-90 (Wave 4 end + Wave 5) | HTML + notebook + retrospectives 1-5 |
| 7 | Passes 91-110 (Wave 5 end + Wave 6) | HTML + notebook + retrospectives 1-6 |
| 8 | Passes 111-130 (Wave 6 continued) | HTML + notebook + retrospectives 1-7 |
| 9 | Passes 131-150 (Wave 6 end + Wave 7) | HTML + notebook + all retrospectives |
| 10+ | Passes 150+ (depth budget) | HTML + notebook + all retrospectives |

**Reading order for new context windows:**

1. Builder's notebook (gets primacy -- carries reasoning and open questions)
2. Most recent wave retrospective (handoff state)
3. The HTML file (the artifact)
4. The primacy research file for this pass
5. Supporting research files (if needed, targeted reads)

The notebook gets primacy because it carries the agent's OWN reasoning, which is the thing most at risk of being lost across context boundaries.

### Cost Distribution Visualization

```
Wave 0: ####                           ($6-8)    Content absorption
Wave 1: ######                         ($7-10)   Soul foundation
Wave 2: ###########                    ($10-14)  R1-R5 widest aperture
Wave 3: #########                      ($9-12)   OD depth
Wave 4: #########                      ($9-12)   DD/AD depth
Wave 5: #########                      ($9-12)   CD mastery
Wave 6: ############                   ($12-16)  Integration
Wave 7: ##########                     ($10-15)  Final PA + refine
Depth:  ############################   ($200+)   Additional passes everywhere
```

### Comparison: Pipeline vs. /falls-in-love

| Dimension | Pipeline (~$60) | /falls-in-love (~$300) |
|-----------|----------------|----------------------|
| Agents | 17-34 | 1 (with context continuity) |
| Research compression | 50:1 (337 findings -> ~7 action items) | 1:1 (agent reads all research directly) |
| Content engagement | 0.6% of builder attention | 100% of agent attention |
| Feedback loop | build -> wait -> audit -> wait -> fix | build -> look -> "not right" -> fix -> look |
| Passes per research slice | 1 (one specialist per domain) | 10-15 (sustained engagement) |
| DOM skeletons | 1-2 | 10-18+ |
| Content-form coupling | 0 INEVITABLE, mostly GENERIC | 4+ INEVITABLE, 0 GENERIC |
| Spatial inventions | 0 per build | 3-5 per build |
| Builder's content understanding | Reads package, not content | Reads content 8-12 times |

---

## E. THE "NO STOPPING" PROTOCOL

### Signs of False Convergence

The agent believes it is done, but has more to discover. These are the warning signs:

**1. Satisfaction without swap-testing.**
The agent feels the page is complete but has not applied the swap test to any section. Without the swap test, the agent does not know whether its satisfaction is with content-coupled form or with generic competence. Rule: no convergence claim is valid without the swap test applied to at least 5 sections.

**2. Research findings marked "not applicable" without trying.**
The agent read a finding, judged it irrelevant, and moved on. But some findings only become relevant AFTER 5+ passes of building. The fractal density finding seems abstract until the page has enough structure to exhibit density at multiple scales. Rule: any finding marked "not applicable" in passes 1-3 must be RE-EVALUATED at pass 8+ with the page's current state.

**3. The "good enough" plateau.**
The page reaches a state that would pass any formal audit. The density rhythm works. The transitions are clean. The typography is calibrated. The responsive behaves. The agent says: "This is solid. Ship it." But "solid" is not the target. "Genuinely proud" is the target. Rule: when the agent says "this is good," it must answer "Would I show this to someone whose taste I respect and feel zero anxiety?"

**4. Habituation blindness.**
After 15+ passes, the agent has habituated to the page. Things that were jarring on pass 1 now feel normal -- not because they were fixed, but because they were seen enough times. The agent's tolerance has shifted, not the page's quality. Rule: every 5 passes, the agent must ask "What would a fresh-eyes auditor see that I have stopped seeing?" and write the answer in the notebook.

**5. Process fatigue masquerading as completion.**
The agent is tired of making changes, not satisfied with the result. This manifests as smaller and smaller deltas not because the page is approaching perfection, but because the agent's motivation has declined. Diagnostic: if the "infinite time" question produces IDEAS (not just micro-adjustments), the agent is process-fatigued, not genuinely done. Those ideas should be pursued.

### Signs of Genuine Exhaustion

The research slice has been fully absorbed. All three must be present:

**1. The research re-read produces annotations, not ideas.**
The agent reads the primacy file and can annotate every finding: "applied in pass 3," "irrelevant to this content," "addressed indirectly through the bento grid." No finding produces a new spatial idea. The research has been fully metabolized.

**2. The delta profile has stabilized at invisible grain.**
The last 3 passes produced changes of 5-10 lines each, all at the sub-perceptual level (1px adjustments, 25ms timing changes, single-property value tweaks). A reader shown the pass-8 version and the pass-12 version would not identify differences without side-by-side comparison.

**3. The "infinite time" answer is invisible.**
When the agent asks "What would I change with infinite time?", every answer involves changes below the perceptual threshold. "I would adjust the Zone 3 heading from 28px to 27px." "I would change the hover transition from 180ms to 165ms." When no visible change remains unrealized, the slice is exhausted.

### The Role of the Retrospective in Deciding Whether to Continue

At the end of each slice (after 10+ passes), the agent writes a wave retrospective that answers four questions:

1. **What did this research slice contribute to the page?** (Applied findings, new components, spatial inventions)
2. **What did the page teach me about the research?** (Which findings were more/less important than expected)
3. **What is the page's current state?** (Architectural snapshot: zones, mechanisms, CSS lines, content coverage)
4. **What does the NEXT slice need to address?** (Explicit handoff -- the questions for the next research set)

Question 4 is the continuation decision. If the agent can write specific, substantive handoff questions ("The density rhythm flattens in Zone 2 -- the next slice needs organizational depth research to restructure Zone 2 around its internal hierarchy"), it should continue. If the handoff questions are vague or absent ("The page is solid, maybe some polish"), the build is approaching completion.

### Minimum Engagement Requirements Per Research Slice

To prevent premature convergence, each research slice has minimums:

| Requirement | Minimum | Rationale |
|-------------|---------|-----------|
| Passes | 8 | Below 8, the agent has not reached the DEPTH phase |
| Applied findings | 3 per file | Ensures breadth across the slice |
| Swap test | Applied to 3+ sections | Ensures coupling awareness |
| Notebook entries | 1 per pass | Ensures reflective engagement |
| Screenshot checks | 2 per slice | Ensures visual verification (not just code-level) |
| Adversarial self-question | 1 per 4 passes | Prevents habituation |
| Full HTML re-read | 2 per slice | Ensures the agent sees the whole page, not just the section it is working on |

These minimums are FLOORS, not targets. The agent should exceed them naturally. If it is hitting minimums consistently and wanting to stop, that is a sign of process fatigue (Section E.1, Sign 5), not genuine exhaustion.

### The Difference Between Done With a SLICE and Done With the PAGE

**Done with a slice** means: this research set has been fully absorbed. The agent cannot extract more spatial ideas from these files. It is ready for the NEXT research set.

**Done with the page** means: ALL research sets have been absorbed, the integration wave has run to exhaustion, the taste evaluation produces genuine satisfaction, and the "infinite time" answer is invisible-grain.

The page is done only after Wave 6 (integration, no new research) has run to exhaustion. A slice cannot be the final slice unless it is the integration wave. The agent must always have at least one pure-integration wave after the last research wave, because integration work only becomes visible when new research input stops.

---

## F. THE WAVE SCHEDULE (Detailed)

### Wave 0: Content Only (No Research)

**Purpose:** Deep content engagement. Spatial hypothesis formation BEFORE any design vocabulary arrives.

**Input files:**
- The content source file (the extracted article/deep extraction)
- Nothing else. No design system. No research. No case studies.

**What the agent does:**

**Passes 1-3: Reading and Hypothesis Formation**
- Read 1: Read the entire content file as a READER, not a builder. Let the emotional arc land. Notice where the argument compresses, where it breathes, where it turns.
- Read 2: Re-read looking for SPATIAL implications. Where does the content suggest parallel structure (items that should be visible simultaneously)? Where does it suggest hierarchy (items with unequal importance)? Where does it suggest progression (an argument that opens, deepens, or closes)?
- Read 3: Form 3 spatial hypotheses. Write them in the notebook. Each hypothesis is a one-sentence answer to: "What is the page's dominant spatial idea?"

**Passes 4-6: Initial Build**
- Build the first version of the page from the spatial hypotheses. No design system tokens, no research vocabulary -- just HTML and CSS that embodies the content's spatial logic.
- This build will be ROUGH. It will violate soul constraints. It will use incorrect colors and spacing. That is fine. The purpose is to establish the spatial skeleton before any design vocabulary constrains it.
- Look at what was built. Take screenshots. Ask: "Does the page's shape match the content's argument?"

**Passes 7-8: Spatial Refinement**
- Refine the spatial skeleton. Fix zones that feel wrong. Add or remove sections. Adjust proportions.
- Write a Wave 0 retrospective: What are the 3 spatial hypotheses? Which one dominates? What does the page look like? What will the design system need to support?

**Minimum passes:** 8
**Exhaustion signal:** The agent has a spatial hypothesis it believes in, the HTML has all content placed, and the skeleton is stable enough to receive design system tokens.
**Evaluation focus:** "Does the page have a spatial idea? Can I state it in one sentence?"

---

### Wave 1: Design System Soul + Content

**Purpose:** Apply the design system's physics to the Wave 0 skeleton. Transform the rough prototype into a page that lives within the design system's universe.

**Input files:**
- `design-system/compositional-core/identity/identity.md`
- `design-system/compositional-core/identity/vocabulary.md`
- `design-system/compositional-core/vocabulary/tokens.css`
- `design-system/compositional-core/components/components.css`
- The content source file
- Wave 0's HTML file (the skeleton)

**Rotation schedule:**
| Pass | Primacy | Focus |
|------|---------|-------|
| 1 | identity.md | Soul constraints: border-radius, box-shadow, color palette, font trinity |
| 2 | tokens.css | Token vocabulary: replace all arbitrary CSS values with token references |
| 3 | components.css | Component awareness: what pre-built vocabulary is available? |
| 4 | vocabulary.md | Design language: how does the design system SPEAK? |
| 5 | identity.md (second primacy) | Re-check all soul constraints after 4 passes of token application |
| 6 | tokens.css (second primacy) | Token audit: are there any arbitrary values remaining? |
| 7 | components.css (second primacy) | Component integration: which pre-built components serve the content? |
| 8-10 | Agent's choice | Integration and refinement |

**Minimum passes:** 10
**Exhaustion signal:** All soul constraints are satisfied. All CSS values come from the token system. The spatial skeleton from Wave 0 has been translated into the design system's vocabulary without losing its spatial logic.
**Evaluation focus:** "Does the page FEEL like it belongs in this design system? Has the spatial hypothesis survived the translation?"

---

### Wave 2: Research R1-R5 (337 Findings)

**Purpose:** The widest aperture. Absorb the full research corpus and apply the findings that serve this page's spatial hypothesis.

This is the largest and most diverse research slice. The sub-rotation must ensure all 5 research streams get primacy while preventing any single stream from dominating.

**Input files:**
- R1-DOCUMENTATION-PATTERNS.md (28 findings)
- R2-CREATIVE-LAYOUTS.md (27 findings)
- R3-DENSITY-DIMENSIONS.md (51 findings)
- R4-AXIS-INNOVATIONS.md (192 findings)
- R5-COMBINATION-THEORY.md (39 findings)
- RESEARCH-SYNTHESIS.md (unified principles)

**Sub-rotation within the slice:**

| Pass | Primacy | Supporting | Phase | Focus |
|------|---------|-----------|-------|-------|
| 1 | R1 (documentation) | R4 targeted | STRUCTURAL | Editorial patterns, viewport principle, callout doctrine |
| 2 | R4 (axis) | R2 targeted | STRUCTURAL | Eye movement, F/Z/Gutenberg patterns, bento grids |
| 3 | R3 (density) | R5 targeted | STRUCTURAL | Density rhythm, PULSE/CRESCENDO/WAVE patterns, fractal density |
| 4 | R5 (combination) | R3 targeted | INTEGRATION | Component velocity, temperature, weight, anti-patterns |
| 5 | R2 (creative) | R1 targeted | INTEGRATION | Pull quotes, split layouts, editorial asymmetry |
| 6 | R3 (density, 2nd) | SYNTHESIS | INTEGRATION | Density re-check post-integration, fractal depth audit |
| 7 | R1 (documentation, 2nd) | None | DEPTH | Typography rules, documentation confidence, fine detail |
| 8 | R4 (axis, 2nd) | None | DEPTH | Movement timing, interaction density, cinematic patterns |
| 9 | R5 (combination, 2nd) | None | MASTERY | Architecture review, compound combination, mechanism stacking |
| 10 | R2 (creative, 2nd) | None | MASTERY | Final editorial polish, column breaks, visual confidence |
| 11 | SYNTHESIS only | None | MASTERY | Cross-cutting principles check, conflict resolutions |
| 12 | Agent's diagnostic | None | MASTERY | Address whatever the page needs most |
| 13-15 | Depth budget passes | None | DEPTH | Extended engagement if the research is still yielding ideas |

**Minimum passes:** 12
**Exhaustion signal:** The agent can annotate every R1-R5 finding as "applied," "irrelevant to this content," or "addressed indirectly." The research re-read produces no new spatial ideas.
**Evaluation focus:** "Does the page have density rhythm? Does it have velocity variation? Does it break the column? Are the components talking to each other?"

---

### Wave 3: Case Studies (DD, OD, CD)

**Purpose:** Deep engagement with full case studies, not summaries. Each case study is a complete spatial exploration -- the agent reads it as a REFERENCE WORK, not as a finding set.

**Input files:**
- OD-004-confidence.md (border-weight gradient, spacing compression)
- OD-006-creative.md (fractal annotation, culmination spread, territorial hover)
- OD-001-conversational.md (width variation, dense/sparse alternation)
- DD-006-fractal.md (fractal self-similarity at 4 scales)
- DD-003-islands.md (density islands in sparse ocean)
- CD-006-pilot-migration.md (compound combination, transition grammar)
- grammar/mechanism-catalog.md (20 mechanisms reference)
- grammar/grammar.md (compositional rules, anti-patterns)

**Sub-rotation:**

| Pass | Primacy | Phase | Focus |
|------|---------|-------|-------|
| 1 | OD-006 (creative) | STRUCTURAL | Fractal annotations, mode-transition breathing, culmination |
| 2 | DD-006 (fractal) | STRUCTURAL | Self-similarity at 4 scales, spacing compression |
| 3 | CD-006 (pilot) | STRUCTURAL | Compound combination, sequential axis deployment |
| 4 | OD-004 (confidence) | INTEGRATION | Border-weight gradients, inverse density-confidence |
| 5 | DD-003 (islands) | INTEGRATION | Archipelago grouping, extreme whitespace for isolation |
| 6 | OD-001 (conversational) | INTEGRATION | Width variation, PULSE rhythm |
| 7 | mechanism-catalog | DEPTH | Cross-reference all 20 mechanisms against page state |
| 8 | grammar.md | DEPTH | Anti-pattern check, sequencing rules, density patterns |
| 9 | OD-006 (2nd primacy) | MASTERY | Re-read for deeper culmination/annotation application |
| 10 | DD-006 (2nd primacy) | MASTERY | Re-read for fractal completion at all scales |
| 11 | CD-006 (2nd primacy) | MASTERY | Re-read for compound combination architecture |
| 12-15 | Depth budget | MASTERY | Extended engagement with richest case studies |

**Minimum passes:** 10
**Exhaustion signal:** The agent has absorbed specific spatial ideas from each case study and can cite which ideas it applied. The mechanism catalog re-read reveals no un-applied mechanisms that serve this content.
**Evaluation focus:** "Is there fractal self-similarity at 3+ scales? Are there density islands with adequate ocean? Does the page have a culmination spread? Do transitions have variety?"

---

### Wave 4: Validation + Provenance (Stage Handoffs, Synthesis)

**Purpose:** Read the synthesis documents and cross-cutting research. These are META-documents -- they describe how findings relate to each other, which conflicts exist, and which principles override.

**Input files:**
- RESEARCH-SYNTHESIS.md (cross-research insights, conflict resolutions)
- design-system/research/CLAUDE.md (research context)
- design-system/compositional-core/guidelines/semantic-rules.md
- Selected provenance documents (stage handoffs from the design system's own build history)

**Rotation:**

| Pass | Primacy | Focus |
|------|---------|-------|
| 1 | RESEARCH-SYNTHESIS | Cross-cutting principles, conflict resolutions |
| 2 | semantic-rules.md | Semantic rule compliance, guideline awareness |
| 3 | Provenance docs | How the design system was built -- what worked, what failed |
| 4-6 | Agent's diagnostic | Apply synthesis insights to weakest page dimensions |
| 7-10 | Integration passes | Make everything cohere |

**Minimum passes:** 8
**Exhaustion signal:** The agent has reconciled any conflicts between earlier wave applications and the synthesis principles. The semantic rules are satisfied. The page's spatial decisions are consistent with the design system's evolution.
**Evaluation focus:** "Is the page internally consistent? Do the findings from different waves contradict each other? Have I resolved the conflicts the synthesis document identifies?"

---

### Wave 5: Combination Theory + Protocol (CD Execution)

**Purpose:** The deepest engagement with compound combination -- how DD, OD, and AD mechanisms operate SIMULTANEOUSLY on the same elements.

**Input files:**
- CD-006-pilot-migration.md (re-read with deep integration focus)
- grammar/grammar.md (compositional rules for compound deployment)
- The HTML file (the primary artifact -- now likely 2,000+ lines)

**Rotation:**

| Pass | Primacy | Focus |
|------|---------|-------|
| 1 | CD-006 (full re-read) | Compound combination architecture: clean mechanism separation |
| 2 | grammar.md | Anti-patterns: Am I violating any compositional rules? |
| 3 | HTML file (CSS-focused) | Inline style elimination, custom property consolidation |
| 4 | CD-006 (targeted) | Transition grammar: Do all zone transitions have explicit types? |
| 5 | HTML file (responsive-focused) | Responsive behavior: Does coupling survive reflow? |
| 6-8 | Agent's diagnostic | Fractal density completion, character-level spacing, dead code removal |
| 9-10 | Integration passes | Make compound combination clean at every scale |

**Minimum passes:** 8
**Exhaustion signal:** Zero inline styles. All CSS values from tokens. All zone transitions have typed bridges. Dead code removed. Responsive behavior is content-aware. The compound combination is architecturally clean.
**Evaluation focus:** "Does compound combination work at every scale (page, section, component, character, navigation)? Is the CSS architecture sound?"

---

### Wave 6: Integration (No New Research)

**Purpose:** The agent works ONLY with what it already knows. No new input. Pure refinement, deepening, and integration.

This is the most important wave because it is where the agent's INTERNALIZED understanding produces its deepest work. Without new research to apply, the agent must generate its own creative ideas from the accumulated understanding of the content and the design vocabulary.

**Input files:**
- The HTML file
- The builder's notebook
- All wave retrospectives
- The content source file (targeted, audit mode)

**What the agent does:**

**Passes 1-5: Taste Audit**
- Take full-page screenshots at 1440px, 1024px, 768px.
- Scroll through the page at reading speed. Note where you STOP, where you SCAN, where you LINGER.
- Apply the swap test to every section. Grade coupling.
- Apply the pride question: "If this were the only page I ever built, would I be proud of it?"
- Identify the 3-5 weakest dimensions of the page.

**Passes 6-10: Surgical Refinement**
- Address the weakest dimensions identified in the taste audit.
- These passes are where the highest-coupling spatial inventions often appear, because the agent has fully internalized both the content and the design vocabulary and can see connections that did not exist in any research file.

**Passes 11-15: Responsive Deepening**
- Not "does it reflow?" but "does the spatial argument survive at narrow widths?"
- Design responsive behavior that preserves content-form coupling at 768px.
- The corridor width progression, the asymmetry panels, the bento hierarchy -- do they degrade gracefully or collapse into generic stacking?

**Passes 16-20: Final Architecture**
- CSS audit: dead code, duplicate properties, specificity conflicts.
- Custom property consolidation.
- CSS source order verification (responsive block last).
- Accessibility audit: skip links, ARIA, heading hierarchy, reduced motion.
- Performance: is any CSS unnecessary? Can any component be simplified?

**Minimum passes:** 15
**Exhaustion signal:** The taste audit produces genuine satisfaction. The "infinite time" answer is invisible-grain. The responsive behavior preserves coupling. The CSS architecture is clean. The pride question produces "yes" without qualification.
**Evaluation focus:** "Am I genuinely satisfied? Would I show this to someone whose taste I respect? What would they notice that I am missing?"

---

### Wave 7: Final Review + Refinement Cycle (Optional)

**Purpose:** A final fresh-eyes moment. The agent re-reads the HTML as if encountering it for the first time.

This wave is optional. It runs only if the Wave 6 retrospective identified lingering concerns. If Wave 6 ended with genuine satisfaction, Wave 7 is a brief verification pass.

**What the agent does:**
- Full-page screenshots at all 3 viewports.
- One complete scroll-through without analyzing.
- The "What would someone who disagrees with my approach say?" question.
- Any final CSS surgery identified by the above.
- Final retrospective: what was learned, what was built, what would change with more time.

**Minimum passes:** 5
**Exhaustion signal:** The agent writes "I am done" and means it.

---

### Full Schedule Summary

| Wave | Slice | Min Passes | Max Passes | Focus |
|------|-------|-----------|-----------|-------|
| 0 | Content only | 8 | 12 | Spatial hypothesis formation |
| 1 | Design system soul | 10 | 14 | Token/constraint translation |
| 2 | R1-R5 (337 findings) | 12 | 18 | Widest aperture, most structural |
| 3 | Case studies (DD, OD, CD) | 10 | 15 | Deep reference engagement |
| 4 | Synthesis + provenance | 8 | 12 | Meta-principles, conflict resolution |
| 5 | CD execution + grammar | 8 | 12 | Compound combination mastery |
| 6 | Integration (no new research) | 15 | 25 | Taste, responsive, architecture |
| 7 | Final review | 5 | 10 | Fresh-eyes verification |
| **Total** | | **76** | **118** | |

With depth budget passes distributed across waves: **100-200 total passes.**

At ~$0.60/pass: **$60-120 core + $80-180 depth = $140-300 total.**

The $300 ceiling is not a target -- it is permission. The agent should spend what it needs to reach genuine satisfaction, and the $300 says: you have room to go deep. Do not optimize for cost. Optimize for the page.

---

## Summary: What the $300 Buys That $60 Cannot

The $60 pipeline produces a page in ~4 hours through 17 agents, 50:1 compression, broken feedback loops, and division of understanding. It gets 1-2 DOM skeletons, 0 INEVITABLE coupling grades, 0 spatial inventions.

The $300 build produces a page through one agent across 100-200 passes, 7 waves, 7-10 context windows, with uncompressed research, continuous feedback, and sustained engagement. It gets 10-18+ DOM skeletons, 4+ INEVITABLE coupling grades, 3-5+ spatial inventions.

The difference is not 5x more of the same thing. It is a qualitative phase transition: from "applying design to content" to "deriving form from content." The $300 buys the TIME for an agent to fall in love with the content -- to read it deeply enough that the CSS becomes an argument, not a container. Every dollar above $60 buys minutes of content engagement, and minutes of content engagement are the ONLY input that produces content-form coupling.

# Prompt-Level Research: All 13 Agent Prompts

## Executive Summary

The 13 prompts total ~6,800 lines. They are extraordinarily detailed about WHAT to produce and HOW to format it — yet systematically silent on the one thing that matters most: **no agent is ever asked to LOOK at what it's building.** The pipeline treats visual design as an information-processing problem (knowledge in → text out) rather than a perceptual-creative problem (see → respond → adjust). The builder prompts are the most critical gap: they contain extensive instructions about CSS citation formats, zone architecture, recipe verbs, and anti-orphaning chains — but zero instructions about opening a browser, viewing the page, or making a visual judgment.

---

## Per-Prompt Analysis

### 1. TC Derivation (`tc-derivation.md`) — 124 lines

**What it tells the agent to DO:**
- Run the full tension-composition pipeline on content
- Produce a conviction brief with 7 mandatory sections (World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions, Content Map, Structural Observation)
- Include 2-3 "COMPOSITIONAL QUESTIONS" — generative "What if..." invitations
- Identify content archetype from a reference table
- State a spatial proposition

**What it tells the agent NOT to do:**
- Do NOT seek case studies, prior explorations, mechanism files (library prohibition until TC Phase 4)
- Do NOT access gate results, PA scores, or pipeline vocabulary
- Do NOT use hedging language ("could", "might", "perhaps")

**What's MISSING:**
- No visual reference material. The TC agent creates the creative vision for a VISUAL artifact without ever seeing any visual artifact. It reads text about text to produce text about visuals.
- No reference to what the final HTML page will look like, feel like, or how it will be experienced.
- The "Structural Observation" section asks for spatial propositions but provides only a TEXT TABLE of archetypes — no screenshots, no visual examples of what "hub-spoke" or "grid" layouts actually look like rendered.

**Recipe vs Checklist verb ratio:** ~70/30 recipe. Good use of "MUST contain", "state what IS", "make the builder WANT to create." The quality requirements are conviction-oriented.

**Creative invitation vs compliance enforcement:** ~60/40. The experimental questions requirement is genuinely generative. But the 7 mandatory sections with their sub-requirements create a checklist pressure.

**Visual thinking encouragement:** ZERO. The TC agent is told to think about "spatial direction" and "compositional arc" but has no visual substrate to think WITH.

---

### 2. Specialist 1: Findings Mapper (`specialist-1-prompt.md`) — 258 lines

**What it tells the agent to DO:**
- Traverse the ENTIRE research base (337 findings across 7 files, ~4,810 lines)
- Rate findings against THIS content + THIS metaphor (HIGH/MEDIUM/LOW/SKIP)
- Write full entries for HIGH findings with: rationale, CSS action, spatial implication, originating question, expected evidence
- Cross-reference findings across research streams
- Preserve TC experimental questions VERBATIM

**What it tells the agent NOT to do:**
- Do NOT read stage findings (S2's domain), case studies (S3), convention specs (S4), or execution specs (S5)
- Do NOT produce a generic summary
- Do NOT use checklist format
- Do NOT hallucinate finding IDs

**What's MISSING:**
- The agent reads ~4,810 lines of TEXT about design findings and translates them into CSS ACTION INSTRUCTIONS — but has never seen the original explorations that produced those findings. It's like a sommelier who has read every wine review but never tasted wine.
- "Expected Evidence" field asks what the PA auditor should SEE — but the specialist has never SEEN any of the explorations it's drawing from. It's predicting visual outcomes from textual descriptions.
- Quality floor demands "minimum 20 HIGH findings" — this creates pressure to inflate ratings. If the content genuinely maps to fewer than 20, the agent is told to "re-read and lower your threshold."

**Recipe vs Checklist verb ratio:** ~80/20 recipe. Strong: "Apply", "Deploy", "Encode", "Set", "Map", "Configure." The step-by-step recipe format is genuinely sequenced.

**Creative invitation vs compliance enforcement:** ~30/70. The specialist is a CURATOR, not a creator. It rates, maps, and translates. Creative judgment is limited to rating decisions. The 20-finding minimum is enforcement.

**Visual thinking encouragement:** NONE. References "visual" evidence but operates entirely in text.

---

### 3. Specialist 2: Validation Mapper (`specialist-2-prompt.md`) — 333 lines

**What it tells the agent to DO:**
- Traverse stage findings (84 findings across 10 files, ~4,827 lines)
- Follow provenance chains (DD → OD → AD stages)
- Identify ELEVATED, BOUNDED, and cross-stage reinforced findings
- Write provenance chain entries with build-specific applications
- Track spatial chain implications

**What it tells the agent NOT to do:**
- Do NOT read raw research files (S1's domain)
- Do NOT produce flat lists without provenance chains
- Do NOT include findings without stage history
- Do NOT hallucinate chain connections

**What's MISSING:**
- Same fundamental gap as S1: translating textual descriptions of visual outcomes into build instructions without visual grounding.
- The "Spatial Chain Tracking" asks whether explorations used non-standard layouts — but the specialist reads TEXT DESCRIPTIONS of spatial choices, not the HTML that embodied them.

**Recipe vs Checklist verb ratio:** ~75/25 recipe.

**Creative invitation vs compliance enforcement:** ~20/80. This is the most analytical specialist — chain-following is a logical operation, not a creative one.

**Visual thinking encouragement:** NONE.

---

### 4. Specialist 3: Case Study Analyst (`specialist-3-prompt.md`) — 342 lines

**What it tells the agent to DO:**
- Read 14 case study files (~5,120 lines)
- Assess STRUCTURAL AFFINITY (not visual similarity) on 3 axes: content-shape, tension-resolution, mechanism-deployment
- Extract the PROCESS (how the case study THOUGHT — tensions, candidates, selection, sequencing)
- Extract STRUCTURAL LOGIC (content logic → spatial form → why it works → trigger signal)
- Extract adapted CSS for THIS metaphor
- Flag reusable vs non-reusable patterns

**What it tells the agent NOT to do:**
- NOT a template matcher ("same topic" != affinity)
- NOT a visual comparator ("looks editorial" != relevant)
- NOT a CSS copier (technique, not values)

**What's MISSING:**
- Case studies are TEXT DESCRIPTIONS of HTML explorations. The specialist reads ABOUT what was built but never SEES it. "Structural affinity" is assessed from narrative descriptions, not from looking at two pages side-by-side and recognizing shared patterns.
- The "Adapted CSS" section asks the specialist to translate case study CSS into the current metaphor's vocabulary — but the specialist has no way to verify that the adapted CSS would actually LOOK right. It's mechanical text transformation.

**Recipe vs Checklist verb ratio:** ~75/25 recipe. Good process verbs: "FACED → CONSIDERED → REJECTED → SELECTED → DEPLOYED."

**Creative invitation vs compliance enforcement:** ~40/60. The structural affinity concept is genuinely analytical/creative. But the output format is heavily constrained.

**Visual thinking encouragement:** MINIMAL. "Structural logic extraction" asks ABOUT spatial form but operates entirely in prose. The agent never sees any of the 14 case study explorations it analyzes.

---

### 5. Specialist 4: Constraints Compiler (`specialist-4-prompt.md`) — 427 lines

**What it tells the agent to DO:**
- Compile the complete CONSTRAINT LANDSCAPE in 4 categories: Soul (non-negotiable), Convention (rules + reasoning), Anti-pattern (risk-profiled), Creative Territory (where freedom exists)
- Read 11 files (~5,162 lines)
- For each convention: extract RULE + REASONING + APPLICATION
- For each anti-pattern: assess risk for THIS content, provide CSS mitigation and detection method
- Map creative territory with constraint boundaries

**What it tells the agent NOT to do:**
- NOT a rules transcriber (don't copy without reasoning)
- NOT a generic constraint list
- NOT a prohibition engine (half output should be Category 4 — Creative Territory)

**What's MISSING:**
- Anti-pattern detection methods describe WHAT TO LOOK FOR but in code terms, not visual terms. "Count callout elements. If > 2 visible in any 800px vertical slice, reduce." — this is a programmatic check. What's missing is: "Does the page FEEL like it's shouting at you? Does every section demand the same level of attention?"
- The "Spatial Anti-Patterns" (grid for sequential content, hub-spoke for hierarchical content, structural overload) are detected via "signal words" in the content — not by looking at the rendered result and seeing whether the spatial form serves the reader.

**Recipe vs Checklist verb ratio:** ~60/40. The soul checklist is inherently checklist-format. The convention reasoning lifts it, but the overall balance leans more toward compliance than the other prompts.

**Creative invitation vs compliance enforcement:** ~30/70. Category 4 (Creative Territory) is genuinely invitation-oriented, but it's positioned AFTER three constraint categories. The builder encounters 70% prohibition before reaching 30% permission.

**Visual thinking encouragement:** NONE. All detection methods are text-based or code-based.

---

### 6. Specialist 5: Protocol & Exemplar Analyst (`specialist-5-prompt.md`) — 275 lines

**What it tells the agent to DO:**
- Extract: A) consumption protocol (optimal reading order), B) Agent-0C's effective patterns, C) anti-orphaning principle, D) protocol condensation
- Read master execution specs (~2,337 lines) and Agent-0C research packages (~1,555 lines)
- Extract FORMAT patterns, not content patterns

**What it tells the agent NOT to do:**
- NOT producing creative content — producing process intelligence
- NOT speculating about what effective documentation looks like — study the exemplars

**What's MISSING:**
- This specialist is meta-meta: it analyzes how prior builder documentation was structured. The pipeline has a specialist dedicated to optimizing the FORMAT of its own instructions. This is infrastructure about infrastructure.
- The "Anti-Orphaning Principle" creates a traceability chain that serves the COMPARISON REPORT, not the BUILDER. The citation format (`/* PACKAGE S2-M03: ... */`) generates accounting artifacts, not creative quality.

**Recipe vs Checklist verb ratio:** ~85/15 recipe. Strong sequencing throughout.

**Creative invitation vs compliance enforcement:** ~15/85. This is almost entirely about process compliance. The "recipe format is non-negotiable" instruction appears multiple times.

**Visual thinking encouragement:** Mentions "ASCII density diagrams" as an effective pattern — this is the closest ANY specialist gets to visual thinking, and it's about TEXT-BASED visual representation.

---

### 7. Synthesizer (`synthesizer-prompt.md`) — 835 lines

**What it tells the agent to DO:**
- Read all 5 specialist outputs + TC brief + content
- Deduplicate overlapping specialist findings
- Resolve conflicts using hierarchy (TC brief > validated > specific > generic)
- Produce THREE files (one per builder pass) across 12 sections (0-11)
- Front-load each file (most critical content first)
- Apply recipe format throughout
- Include Section 10 (Compositional Questions) from 3 sources: TC brief, knowledge base question families, cross-specialist synthesis
- Include Section 11 (Structural Propositions) from TC Section 7 + specialist inputs

**What it tells the agent NOT to do:**
- NOT padding with generic content
- NOT writing "ensure" or "must be" (recipe verbs only)

**What's MISSING:**
- The synthesizer is the SINGLE MOST CONSEQUENTIAL agent ("your synthesis quality determines whether 75-100 minutes of pipeline work produces a rich page or a flat one") — and it operates ENTIRELY in text. It merges text, resolves text conflicts, and produces text packages. It has never seen any design artifact.
- The "front-load" instruction assumes the builder's attention degrades through each file — acknowledging that the builder is an LLM with a primacy effect. But the response is to optimize TEXT ordering, not to create a more effective information modality (like... showing the builder what success looks like).
- Section 10 (Compositional Questions) is the genuinely creative addition — questions that generate multi-channel CSS decisions. But the questions are assembled by a text-processing agent from other text-processing agents' outputs. No visual substrate informs question selection.

**Recipe vs Checklist verb ratio:** ~80/20 recipe. The format exemplars and critical reminders enforce recipe format aggressively.

**Creative invitation vs compliance enforcement:** ~35/65. Section 10 is creative; everything else is format-compliance machinery. The 835-line prompt is ~70% about format requirements.

**Visual thinking encouragement:** ASCII density diagrams are the sole visual element. They encode "spatial intent" in monospace characters.

**CRITICAL CONTRADICTION:** The synthesizer produces "the MOST CONSEQUENTIAL artifact" but has no mechanism for evaluating whether its output will produce good visual results. It optimizes for textual completeness, format compliance, and deduplication quality — none of which correlate with visual quality.

---

### 8. Builder Pass 1: STRUCTURE (`builder-pass-1-prompt.md`) — 432 lines

**What it tells the agent to DO:**
- Read research package, conviction brief, content, tokens, components IN ORDER
- Build a single self-contained HTML file with all CSS inline
- Establish: zone skeleton, mechanism deployment, typography hierarchy, responsive scaffolding, content mapping
- Write a transition table BEFORE writing CSS
- Use concept-based CSS naming (metaphor vocabulary)
- Build zone-by-zone (boundary-by-boundary), not channel-by-channel
- Explore 2-3 compositional questions from Section 10
- Evaluate structural propositions from Section 11 (ADOPT/MODIFY/REJECT)
- Cite every CSS rule with standardized citation format
- Write _pass-1-decisions.md as continuity bridge for Pass 2

**What it tells the agent NOT to do:**
- NOT building micro-density enrichment (Pass 2), anti-pattern defense (Pass 3), or case study CSS integration (Pass 2)
- NOT inventing texture mechanisms not in the package
- NOT building channel-by-channel (all backgrounds, then all typography, then all spacing)

**What's MISSING — THE CRITICAL GAP:**
- **THE BUILDER NEVER LOOKS AT WHAT IT'S BUILDING.** There is NO instruction to open the HTML in a browser. No instruction to take a screenshot. No instruction to visually verify that the zone skeleton actually creates perceptual zones. No instruction to check whether the transition table's planned CSS actually produces felt transitions. The builder writes ~500-800 lines of HTML+CSS based entirely on textual instructions and then PASSES IT TO THE NEXT BUILDER WITHOUT ANYONE HAVING SEEN IT.
- The "Validation Before Output" section is a TEXT-BASED checklist: grep for border-radius, check that all content sections are present, verify @media breakpoints exist. These are CODE checks, not VISUAL checks. "Container max-width is 940-960px" can be verified by reading CSS. "The page feels inviting and the zones create a natural reading rhythm" cannot.
- The "Richness Standard" defines richness as "semantic density x restraint x spatial confidence" — but measures it through code criteria: "letter-spacing must be >= 0.025em, background deltas must be >= 15 RGB points." These are NUMERICAL thresholds applied to CODE, not perceptual judgments applied to VISUAL EXPERIENCE.
- The "Checkpoint: Package Traceability" is an accounting exercise. Every CSS rule must cite its source. This creates auditable text artifacts — it does NOT create visual quality.
- "Build zone-by-zone" is good advice for coherent CSS. But without visual feedback, zone boundaries are CSS abstractions. The builder can write `padding: 64px 0` and `background: var(--color-zone-sparse)` without knowing whether the resulting zone FEELS sparse.

**Recipe vs Checklist verb ratio:** ~70/30 recipe. Good build-process sequencing. But the validation section reverts to checklist format.

**Creative invitation vs compliance enforcement:** ~40/60. The compositional questions are genuine invitations. The soul constraints, citation requirements, and format specifications are enforcement. The builder prompt is LONGER on format requirements than on creative guidance.

**Visual thinking encouragement:** ZERO. The word "look" does not appear in a creative context. The word "see" does not appear. The word "feel" appears once in the richness standard ("the page should not feel uniform") but there's no mechanism for the builder to actually FEEL the page — it never sees it.

---

### 9. Builder Pass 2: ENRICHMENT (`builder-pass-2-prompt.md`) — 411 lines

**What it tells the agent to DO:**
- Read research package (Section 3: findings, Section 4: zone architecture, Section 5: case study CSS)
- Read Pass 1 decisions and HTML
- Enrich zone-by-zone: apply findings, verify density progression, integrate case study CSS
- Deepen or extend compositional question explorations from Pass 1
- Assess structural evolution opportunities (maximum 1 per pass)
- Perform "Density Self-Assessment" at 3 viewpoints
- Write _pass-2-decisions.md as continuity bridge

**What it tells the agent NOT to do:**
- DO NOT rebuild from scratch
- DO NOT delete zones, rename custom properties, replace HTML structure, remove content

**What's MISSING:**
- **Same fundamental gap: the builder never SEES the page.** The "Density Self-Assessment" asks: "Does the first viewport convey the metaphor? Can a reader sense the compositional intent in the first 3 seconds?" — but the builder has NO WAY TO ANSWER THIS. It has never rendered the page. It's assessing density by reading CSS values, not by looking at the page.
- "Compare the [ASCII] diagram to the current build" — the builder is told to compare a TEXT DIAGRAM to an HTML file it has never SEEN RENDERED. This comparison happens in code-space, not visual-space.
- "Genuine Synthesis Requirement" asks builder to explain HOW findings interact — but the interaction is described textually. The builder can't see whether DD-F-006 and R5-T2 actually create "a push-pull rhythm visible at section scale" because the builder never views the section.
- The continuity protocol (preserve, modify, add, do not) is focused on CODE continuity — same custom property names, same zone classes. There's no concept of VISUAL continuity — does the enriched page still feel like the same page?

**Recipe vs Checklist verb ratio:** ~65/35 recipe. More checklist-oriented than Pass 1 due to the preservation requirements.

**Creative invitation vs compliance enforcement:** ~35/65. Compositional question deepening is creative. Everything else is preservation/compliance.

**Visual thinking encouragement:** The "Density Self-Assessment" IMPLIES visual judgment but provides NO MECHANISM for it. The builder is asked to judge visual quality without visual access.

---

### 10. Builder Pass 3: HARDENING (`builder-pass-3-prompt.md`) — 391 lines

**What it tells the agent to DO:**
- Read research package (Section 6: anti-patterns, Section 7: validated CSS, Section 8: structural propositions)
- Read both decisions files and Pass 2 HTML
- Anti-pattern sweep: work through EVERY anti-pattern starting with HIGH risk
- Check universal anti-patterns (2px borders, rgba, stacked spacing voids, sub-perceptual CSS, missing footer, metronomic transitions)
- Integrate validated CSS from Section 7
- Test structural propositions from Section 8
- Accessibility hardening (skip link, ARIA landmarks, heading hierarchy, color contrast)
- Final validation sweep (soul, structural, perceptual, responsive)
- Produce 3 files: _build-pass-3.html, _build-final.html, _builder-reflection.md

**What it tells the agent NOT to do:**
- DO NOT add new creative features
- DO NOT restructure zone architecture
- DO NOT add new structural inventions (document, don't implement)
- DO NOT get creative instead of defensive

**What's MISSING:**
- **The builder writes a 40-60 line REFLECTION about what the page FEELS LIKE without ever having SEEN it.** The reflection includes: "Conviction Fidelity" (how well does the page embody the metaphor?), "Experience Quality" (what would a reader feel encountering this cold?), "Surprises" (what was harder than expected?). The builder is asked to SIMULATE visual experience from CSS code — to imagine being a reader of a page it has never rendered.
- The "Perceptual Minimum" checklist is entirely code-based: "Display-body font size delta >= 10px", "Background deltas >= 15 RGB at zone boundaries." These are PROGRAMMATIC checks on CSS values, not perceptual checks on rendered output. A page can pass every one of these checks and still look terrible — because perceptual quality emerges from how these values interact IN THE RENDERED PAGE, not from their individual numerical compliance.
- "The Hardening Mindset" says "Think of yourself as a final inspector" — but an inspector who never looks at the product. It's like a quality inspector checking a car by reading its spec sheet without ever sitting in it, driving it, or looking at it.
- Structural proposition testing (Section 8) asks: "Read the current HTML with this proposition in mind — does the build embody it?" The builder can only answer this by reasoning about CSS code, not by perceiving the rendered result.

**Recipe vs Checklist verb ratio:** ~40/60 checklist. This is the most checklist-heavy prompt — the "Final Validation Sweep" is literally a checklist.

**Creative invitation vs compliance enforcement:** ~15/85. This is explicitly "defensive, not creative." The hardening mindset suppresses creative judgment.

**Visual thinking encouragement:** Section 8 (structural propositions) asks "can you FEEL the transition?" — but there's no mechanism for feeling it. The builder reads CSS and reasons about what it might feel like.

---

### 11. PA Auditor (`pa-auditor-prompt.md`) — 112 lines

**What it tells the agent to DO:**
- Experience a designed HTML page through screenshots ONLY
- Cold Look (30 seconds), Scroll-Through, Anchor Statement
- Answer 4 assigned questions in 5-10 lines each
- Use perceptual/experiential language only
- Balance strength + weakness identification

**What it tells the agent NOT to do:**
- No inference about code, CSS, or intent
- No design jargon ("visual hierarchy is unclear" → "I'm not sure where to look first")
- No speculation about design intent ("the designer was trying to..." → "I experience...")
- BANNED WORDS: hierarchy, whitespace management, visual weight, design system, component, token, mechanism, density, axis, scale, composition

**What's MISSING:**
- This is the ONLY prompt that involves visual perception — and it comes AFTER the page is fully built. The auditor sees the result of 3 build passes and a synthesis that were entirely blind. It's like having a food critic taste the dish after the chef cooked it in a soundproof room with no sense of smell or taste.
- The auditor has ZERO context. This is positioned as a superpower, but it also means the auditor can't distinguish between "the builder intentionally created this effect" and "the builder had no idea this would happen." Both look the same in screenshots.
- 4 questions x 5-10 lines = 20-40 lines of actual content. This is the ENTIRE visual evaluation of a build that consumed $20-30+ and 1-2 hours. The perceptual feedback is extremely compressed relative to the input investment.
- The structural perception questions (E-21, E-22, E-23) are new additions that ask about layout variety — but they can only assess the FINAL result. They can't inform the BUILD PROCESS because they happen after it.

**Recipe vs Checklist verb ratio:** N/A — the auditor describes experience, not follows procedures.

**Creative invitation vs compliance enforcement:** ~80/20. This is genuinely experiential. The language constraints push toward authentic perception. But the scope is narrow (4 questions) and happens too late.

**Visual thinking encouragement:** THIS IS THE ONLY VISUALLY-GROUNDED PROMPT. But it's read-only — the auditor SEES but cannot CHANGE.

---

### 12. Weaver (`weaver-prompt.md`) — 227 lines

**What it tells the agent to DO:**
- View ALL screenshots before reading auditor reports
- Synthesize 5 auditor reports into creative direction (AMPLIFY / RELEASE / DEEPEN / THE GAP)
- Produce verdict: SHIP / REFINE / REBUILD
- Package compliance assessment (sections 0-11)
- Structural variety metrics

**What it tells the agent NOT to do:**
- Does NOT receive the conviction brief (no metaphor knowledge)
- Does NOT receive Pass 2 decisions, specialist outputs, or vocabulary files

**What's MISSING:**
- The weaver sees screenshots and reads auditor reports — but has no way to TEST potential fixes. It says "deepen the breathing between zones" but can't verify whether widening padding from 48px to 64px would actually achieve that effect. Its direction is ASPIRATIONAL, not VERIFIED.
- The compliance assessment is text-matching: "what the package instructed → what the builder did → what the PA found." This is accounting, not creative evaluation.
- "Anchor Override Documentation" is good — it makes the weaver's subjective authority transparent. But the override only applies to auditor disagreements. There's no mechanism for the weaver to override the entire approach (e.g., "this page was built from the wrong metaphor").

**Recipe vs Checklist verb ratio:** ~55/45. Process steps are sequenced, but compliance assessment is checklist-oriented.

**Creative invitation vs compliance enforcement:** ~50/50. The experience portrait and creative direction are genuinely creative. The compliance assessment is enforcement.

**Visual thinking encouragement:** MODERATE. The weaver views screenshots and writes experiential prose. But its creative direction is expressed in TEXT that a non-visual builder will attempt to implement without visual feedback.

---

### 13. Refine Builder (`refine-builder-prompt.md`) — 176 lines

**What it tells the agent to DO:**
- Read weaver's creative direction FIRST
- Map fixes to CSS (locate, identify, plan)
- Apply fixes in priority order (soul violations → RELEASE → DEEPEN → AMPLIFY)
- Verify against package
- Preserve pre-fix state (backup copy)

**What it tells the agent NOT to do:**
- NOT a redesign — targeted fix only
- NOT adding new creative features
- NOT starting from scratch
- NOT ignoring AMPLIFY items (protect what works)

**What's MISSING:**
- **Same fundamental gap as builder passes 1-3: the refine builder never SEES the page.** It reads the weaver's DESCRIPTION of what's wrong and modifies CSS based on that description. It's like a mechanic fixing a car based on a customer's description without ever looking under the hood.
- The weaver says "the breathing between zones wants to widen" → the refine builder increases padding values → nobody checks whether the wider padding actually creates the intended breathing effect.
- Fix classification (TYPE A/B/C) is a good framework, but all types are addressed through CSS modification. There's no visual verification loop between fix application and fix validation.

**Recipe vs Checklist verb ratio:** ~60/40 recipe.

**Creative invitation vs compliance enforcement:** ~25/75. This is fix-oriented. The weaver's creative direction provides the creative input; the refine builder executes mechanically.

**Visual thinking encouragement:** ZERO. The refine builder translates textual creative direction into CSS changes without visual feedback.

---

## Cross-Prompt Analysis

### The Visual Perception Gap

| Agent | Sees Visual Output? | Makes Visual Judgments? |
|-------|-------------------|----------------------|
| TC Derivation | NO | Describes visual metaphors from text |
| Specialist 1-5 | NO | Writes "Expected Evidence" from text descriptions |
| Synthesizer | NO | Assembles "spatial intent" from text |
| Builder Pass 1 | NO | Builds HTML blind |
| Builder Pass 2 | NO | Enriches HTML blind |
| Builder Pass 3 | NO | Hardens HTML blind, writes reflection about visual experience it never had |
| PA Auditor | YES (screenshots) | YES — the ONLY agent that sees |
| Weaver | YES (screenshots) | YES — synthesizes visual perception |
| Refine Builder | NO | Fixes HTML blind based on weaver text |

**9 of 13 agents operate entirely in text. 2 agents see screenshots (read-only). 0 agents have a visual feedback loop (see → modify → see again).**

### The Compliance Industrial Complex

**Across all 13 prompts, the aggregate verb breakdown:**

| Category | Approximate Occurrence |
|----------|----------------------|
| Recipe verbs (Apply, Deploy, Read, Map, Build) | ~40% |
| Compliance verbs (Verify, Check, Ensure, Must, Fail if) | ~35% |
| Creative verbs (Explore, Imagine, Feel, Envision) | ~10% |
| Meta-process verbs (Document, Log, Note, Record) | ~15% |

The prompts enforce recipe format aggressively — "if you write 'ensure', you have failed the format requirement." But replacing "Ensure X" with "Deploy X" doesn't change the underlying compliance orientation. The content is still "make sure these properties have these values." Recipe format is cosmetic over a compliance skeleton.

### The Citation Industrial Complex

**Specialist 5 defines a citation format. Builder passes 1, 2, and 3 enforce it. The weaver counts citations. The comparison report extracts them.** A significant portion of the builder's cognitive budget goes to writing comments that trace CSS rules to research findings — comments that serve the pipeline's ACCOUNTING needs, not the page's VISUAL quality.

The anti-orphaning principle creates a perverse incentive: the builder is rewarded for CSS that traces to a finding (even if the CSS is wrong or invisible) and penalized for CSS that doesn't trace to a finding (even if the CSS is visually excellent). **Traceability is orthogonal to quality.**

### The Text-to-Visual Translation Problem

The pipeline assumes that high-quality text instructions → high-quality visual output. This assumption is untested and likely wrong.

**Evidence against the assumption:**
1. Builder Pass 3 includes a "Perceptual Minimum" checklist — checking numerical thresholds on CSS values. But perceptual quality is EMERGENT, not additive. "Background deltas >= 15 RGB" + "letter-spacing >= 0.025em" + "zone boundaries shift 3+ channels" can all pass individually while the page looks incoherent — because coherence depends on HOW these values interact in rendered space, not on their individual compliance.
2. The "Density Self-Assessment" in Pass 2 asks the builder to judge visual outcomes from CSS code. This requires the builder to SIMULATE rendering in its head — to mentally compile hundreds of CSS rules into a spatial experience. This is not what LLMs do well.
3. The PA auditor (the only visual agent) consistently finds issues that no text-based check would catch: "whitespace void" was the #1 finding in Mode 4 PA (9/9 flagged it), yet individual spacing values passed all programmatic checks.

### Contradictions Between Prompts

1. **Builder Pass 1 says "Build zone-by-zone, NOT channel-by-channel"** but the Synthesizer's Section 2 (Mechanism Selections) is organized BY MECHANISM, not by zone. The builder must mentally rearrange mechanism-organized instructions into zone-organized construction. The information is structured for the SYNTHESIZER's convenience, not the BUILDER's workflow.

2. **The PA auditor is told "You have ZERO context. That is your superpower"** but the Weaver is told to do a "Package Compliance Assessment" that requires deep context about what was instructed. The same PA synthesis process demands both zero-context perception AND full-context compliance checking — from the same agent (weaver).

3. **Builder Pass 3 says "This is a HARDENING pass, not a creative pass"** but then asks the builder to write a 40-60 line REFLECTION about conviction fidelity, experience quality, surprises, and impulses resisted — all of which require creative/perceptual judgment. The prompt suppresses creative action while demanding creative assessment.

4. **Specialist 4 says "Half your output should be Category 4 (Creative Territory)"** but the builder prompts emphasize constraints, citations, and checklists far more than creative exploration. The constraints compiler maps creative territory; the builder prompt doesn't use it.

5. **TC Derivation says the conviction brief "must make the builder WANT to create THIS specific page"** — an emotional/motivational goal. But the builder prompt treats the brief as one of many information sources to process in sequence. The motivational intent of the brief is never leveraged in the builder prompt.

6. **The Synthesizer produces "the MOST CONSEQUENTIAL artifact"** but the quality floor is entirely about LINE COUNTS and FORMAT COMPLIANCE (280-360 lines for Pass 1, recipe verbs, 5-8 mechanisms, 18+ findings). There's no quality criterion about whether the package will produce a GOOD-LOOKING page. The most consequential artifact is measured by the least consequential criteria.

### Missing From ALL Prompts

1. **No visual reference library.** No agent ever sees a GOOD page and a BAD page side by side. No agent has exemplars of what "rich" vs "flat" LOOKS LIKE. The entire visual quality vocabulary is text-defined.

2. **No iterative visual feedback loop.** No agent writes CSS, sees the result, and adjusts. The pipeline is a one-shot text-to-HTML transformation with a post-hoc visual check. The most basic creative loop (make → see → adjust) does not exist during construction.

3. **No "How does this FEEL?" instruction for builders.** Builders are asked to track citations, verify checklist items, and maintain continuity — but never asked to step back and judge the FEEL of what they're creating. The reflection in Pass 3 asks about feel, but by then the build is done.

4. **No exemplar HTML.** Builders are told about "Middle tier" and "Flagship" quality levels but never shown what these look like. The case study ANALYSIS is text about HTML; the builders never see the HTML itself.

5. **No mechanism for the builder to FAIL FAST.** If the TC brief produces a weak metaphor, or the synthesizer produces a thin package, or the builder's first zone skeleton is wrong — there's no early detection. The pipeline runs all 3 passes and waits for the PA to flag problems. By then, 60-90 minutes of build time have been spent on a flawed foundation.

6. **No instruction about WHEN to break the rules.** Every prompt defines rules, exceptions, and edge cases — but none says "If following this instruction would make the page ugly, don't follow it." The builder has no permission to exercise visual judgment over procedural compliance.

---

## Verb Ratio Summary Per Prompt

| Prompt | Recipe % | Checklist % | Creative % | Meta % | Lines |
|--------|----------|-------------|------------|--------|-------|
| TC Derivation | 60 | 15 | 20 | 5 | 124 |
| Specialist 1 | 70 | 15 | 5 | 10 | 258 |
| Specialist 2 | 65 | 20 | 5 | 10 | 333 |
| Specialist 3 | 65 | 15 | 10 | 10 | 342 |
| Specialist 4 | 50 | 30 | 5 | 15 | 427 |
| Specialist 5 | 75 | 10 | 5 | 10 | 275 |
| Synthesizer | 70 | 15 | 5 | 10 | 835 |
| Builder Pass 1 | 60 | 20 | 10 | 10 | 432 |
| Builder Pass 2 | 55 | 25 | 10 | 10 | 411 |
| Builder Pass 3 | 35 | 45 | 5 | 15 | 391 |
| PA Auditor | 10 | 5 | 80 | 5 | 112 |
| Weaver | 40 | 30 | 20 | 10 | 227 |
| Refine Builder | 50 | 30 | 10 | 10 | 176 |

**The only prompt where creative verbs dominate is the PA auditor — the only prompt that involves actual visual perception. The correlation is not coincidental.**

---

## The Fundamental Problem

The pipeline treats HTML page construction as an INFORMATION RETRIEVAL AND FORMATTING problem:
- Retrieve the right findings (specialists)
- Format them correctly (synthesizer)
- Apply them in the right order (builders)
- Verify compliance (PA)

But HTML page construction is a PERCEPTUAL-CREATIVE problem:
- See what you're building
- Feel whether it's working
- Adjust based on what you see and feel
- Iterate until it's right

**The prompts are optimized for the first problem (information processing) and entirely unequipped for the second (perceptual creation).** The 6,800 lines of prompts contain hundreds of instructions about WHAT CSS to write, HOW to cite it, and WHERE to put it — but zero instructions about LOOKING AT THE RESULT.

The pipeline's implicit theory of quality: if you give the builder enough good information in the right format, visual quality emerges automatically. The evidence from prior runs: it doesn't. The information-quality-to-visual-quality pipeline has a massive impedance mismatch, and no amount of textual optimization will fix it because the gap is modality-level — text in, visual out, with no visual feedback.

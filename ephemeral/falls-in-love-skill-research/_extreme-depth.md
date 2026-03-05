# Extreme Progressive Enrichment: The Falls-In-Love Build Protocol

**Date:** 2026-03-03
**Purpose:** Design a skill that spends 50-70+ passes across 5 phases, absorbing the full 26,528-line research corpus one slice at a time, building continuously on a single page until the builder has genuinely internalized every dimension of the design system.

**Budget:** $300 | **Duration:** 6-12 hours continuous | **Target:** 3,000-4,000+ line page with 40-60 component types

---

## THE THESIS

The existing /research-compose pipeline (Tripod v1) runs ~26 total passes across 5 waves and produces a 2,465-line page with ~35 component types. That is good. But it is not what happens when a human designer spends three weeks with a design system. A human designer does not read all the research, synthesize it, then build. A human designer reads a little, builds a little, reads more, builds more, and over weeks the system gets into their hands. The design system stops being a reference document and starts being a vocabulary they think in.

This skill simulates that process. Not three weeks, but 6-12 hours of continuous building where the agent is NEVER done, NEVER satisfied, ALWAYS absorbing new material and returning to the page with fresh eyes. The page is not a deliverable being manufactured. It is a relationship being deepened.

The key insight: **every pass the builder makes changes the builder, not just the page.** Pass 1 is a different builder than Pass 40. By Pass 40, the builder has internalized 337 findings, 20 mechanisms, 9 case studies, 149 lines of grammar rules, 18 validated explorations, and the entire soul of the design system. That builder produces CSS that Pass 1 could not imagine.

---

## A. THE COMPLETE RESEARCH FEEDING SCHEDULE

### Corpus Inventory (What Gets Absorbed)

Before mapping the feeding schedule, here is the complete inventory of material available:

**Layer 1: Soul + Identity (266 lines)**
- `identity.md` — 87 lines (character, soul principles, refusals, diagnostics)
- `vocabulary.md` — 55 lines (design decisions & rationale)
- `tokens.css` — 124 lines (65 CSS custom properties)

**Layer 2: Components (816 lines)**
- `components.css` — 779 lines (CSS implementations for all component types)
- `components.md` — 37 lines (inventory with velocity/weight)

**Layer 3: Grammar + Mechanisms (237 lines)**
- `mechanisms.md` — 88 lines (20 mechanisms across 5 categories)
- `grammar.md` — 149 lines (compositional rules, sequencing, density patterns, responsive)

**Layer 4: Research (4,104 lines total)**
- `R1-DOCUMENTATION-PATTERNS.md` — 584 lines (28 findings)
- `R2-CREATIVE-LAYOUTS.md` — 810 lines (27 findings)
- `R3-DENSITY-DIMENSIONS.md` — 553 lines (51 findings)
- `R4-AXIS-INNOVATIONS.md` — 990 lines (192 findings)
- `R5-COMBINATION-THEORY.md` — 784 lines (39 findings)
- `RESEARCH-SYNTHESIS.md` — 383 lines (cross-research unified principles)

**Layer 5: Case Studies (5,120 lines total)**
- 9 textual case studies (DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006)
- 3 visual case studies (dd-003-visual, dd-004-visual, dd-006-visual)
- `ANTI-PRESCRIPTION-TEMPLATE.md` — 471 lines
- `README.md` — 541 lines

**Layer 6: Validated Explorations (28,975 lines total)**
- 6 DD explorations (770-1,275 lines each)
- 6 OD explorations (1,163-2,635 lines each)
- 6 CD explorations (1,567-2,085 lines each)

**Layer 7: Guidelines + Semantic Rules**
- `semantic-rules.md` — Gap decisions for callout selection, component choosing
- `usage-criteria.md` — When to use what
- `responsive-strategy.md` — 768px breakpoint rules

**Total corpus available: ~39,500+ lines across 57+ files**

---

### The Feeding Schedule

The schedule is organized into 6 phases. Each phase has a PRIMARY research focus and SECONDARY integration work. The builder never stops building. Reading and building are interleaved, not sequential.

---

### PHASE 0: CONTENT IMMERSION (5-8 passes, ~$15-25)

**What the builder reads:** ONLY the content markdown + soul constraints (identity.md, vocabulary.md, tokens.css). NO research, NO case studies, NO grammar files, NO explorations.

**Why content-first:** The builder must form its OWN spatial hypotheses about this content before any research can influence its thinking. This is the "naive draft" — what does the builder WANT to do with this content, given only the physics of the design system?

**Pass structure:**

| Pass | Focus | What Happens |
|------|-------|--------------|
| 0.1 | Content reading x3 | Read the content markdown three times. First for comprehension. Second for structure (where are the natural section breaks? what is the rhetorical arc?). Third for spatial imagination (what does this content WANT to look like?). Write a 20-line spatial hypothesis: what sections exist, what density each should have, where the page should breathe, where it should compress. |
| 0.2 | First complete draft | Build the entire page from header to footer. Use ONLY tokens.css values for every CSS property. Use ONLY components.css classes where they fit. Where no component fits, write new CSS from scratch using token values. The goal is a COMPLETE page, not a good page. |
| 0.3 | Structural revision | Look at what 0.2 produced. Is the section architecture correct? Are there too many sections? Too few? Is the density arc right? Make STRUCTURAL changes — add/remove/reorder sections, change which content goes where. |
| 0.4 | Typography pass | Focus exclusively on typography. Every heading level, every body text instance, every label, every metadata line. Are the font-size jumps creating clear hierarchy? Is letter-spacing intentional? Is line-height creating reading comfort or visual monotony? |
| 0.5 | Spacing pass | Focus exclusively on spacing. Measure every gap between elements. Is the inside-vs-between ratio correct (~1:3)? Are section breaks using the right spacing scale values? Does the page breathe correctly? |
| 0.6 | Color + borders pass | Focus exclusively on color and border usage. Are zone backgrounds creating atmospheric shifts? Are border weights encoding hierarchy correctly (4px/3px/1px)? Is the accent color system carrying semantic meaning? |
| 0.7 | Screenshot + honest assessment | Serve the page, take full-page + above-the-fold screenshots at 1440px. Look at what exists. Write a 30-line honest assessment: what works, what is flat, what is missing, what feels like a Bootstrap page that happens to use KortAI tokens. |
| 0.8 (optional) | Second structural revision | If 0.7 reveals major structural problems, make one more structural pass before moving to Phase 1. |

**Exit gate:** A complete, functional page exists. It will probably feel flat. That is correct — the builder has not yet absorbed any compositional intelligence. The page is the baseline from which all enrichment will be measured.

**What this phase produces for the builder's cognitive state:** The builder now has OPINIONS about this content. It has made CHOICES about where things go. It has a RELATIONSHIP with the page. This is critical. Without Phase 0, research absorption becomes pattern-matching instead of problem-solving. The builder reads R3's density dimensions and thinks "yes, THAT is what my opening section needs" instead of "I should add some density variation."

---

### PHASE 1: SOUL + IDENTITY DEEP ABSORPTION (8-12 passes, ~$25-40)

**What the builder reads:**
- `identity.md` — re-read with fresh eyes, paying attention to the internal tensions and vocabulary limitations
- `vocabulary.md` — re-read with focus on the WHY behind each decision
- `tokens.css` — not just the values but the SYSTEM (why these tokens exist, what they encode)
- `components.css` — the full 779 lines, understanding every component variant
- `components.md` — the inventory with velocity and visual weight ratings

**What changes from Phase 0:** The builder already has a page. Now it is learning the PHYSICS of the system it built in. Phase 0 was building with tokens; Phase 1 is understanding WHY those tokens exist and what they make possible.

**Pass structure:**

| Pass | Focus | What Happens |
|------|-------|--------------|
| 1.1 | Identity re-read | Read identity.md with the page open. For each refusal, check: did I accidentally violate this? For each identity signature, check: is this expressed in my page? For the Bootstrap Test: could this page exist in Bootstrap? If yes, WHERE specifically? |
| 1.2 | Component audit | Read components.css line by line. For each component type, ask: does my content have material that FITS this component? Callout-info, callout-tip, callout-warning, callout-essence, callout-challenge — which of these has unrecognized content waiting for it? Reasoning container? Core abstraction? Bento grid? File tree? Decision matrix? |
| 1.3 | Component integration | Add 3-5 new component instances that 1.2 identified. Each must use exact components.css classes. Focus on the 2-Zone DNA pattern — every component should have the sparse label (12px, uppercase, letter-spaced) above dense body (16px, normal). |
| 1.4 | Vocabulary rationale pass | Read vocabulary.md. For each design decision explained, trace it into the page. "Warm, not clinical" — is my page warm? "Two-color text hierarchy" — am I using more than two text colors? "h3 is always italic" — is every h3 italic? Fix every violation. |
| 1.5 | Token audit | Read tokens.css and audit every CSS value in the page. Every color must be a token variable. Every spacing must be from the 4px scale. Every font must be from the trinity. Every border weight must be 4px, 3px, or 1px. Replace ALL non-token values. |
| 1.6 | Internal tensions pass | Re-read the "Internal Tensions" section of identity.md. Warmth vs Severity. Solid Offset vs Anti-Shadow. Vocabulary Ceiling. How does my page navigate these tensions? Am I leaning too far toward warmth (approachable, friendly) or too far toward severity (cold, institutional)? Make adjustments that hold BOTH in productive tension. |
| 1.7 | Vocabulary limitations pass | Re-read the "Vocabulary Limitations" section. What is my content asking for that the system cannot express well? Playfulness? Celebration? Visual surprise? If the content needs these things, how do I get CLOSE to them using only the available vocabulary? This is where creative constraint produces invention. |
| 1.8 | Zone architecture | Implement the 4-zone background system (sparse/dense/breathing/bedrock). Map every section of the page to a zone type. Ensure zone transitions create atmospheric shifts, not just color changes. Check the transition grammar: SMOOTH, BRIDGE, or BREATHING at each boundary. |
| 1.9 | Header + footer | Implement the dark header (1A1A1A background + 3px E83025 border-bottom) and footer mirror (3px border-top). These are identity-locked components. Get them precisely right. |
| 1.10 | Second screenshot + assessment | Take new screenshots. Compare to Phase 0 screenshots. Write a 30-line assessment of what changed. Does the page now FEEL like KortAI? Does it pass the Bootstrap Test? Where is it still generic? |
| 1.11-1.12 (optional) | Refinement passes | If 1.10 reveals remaining flatness, two more passes focusing on the specific areas identified. |

**Exit gate:** Every CSS value traces to a token. Every component uses components.css classes. The page passes the Bootstrap Test — it could NOT exist in Bootstrap without modification. Zone backgrounds create atmospheric shifts. The header and footer are identity-locked.

**What this phase produces for the builder's cognitive state:** The builder now THINKS in tokens. It does not need to look up whether `--space-8` is 32px — it knows. It does not need to check whether `--accent-amber` is for challenges or warnings — it knows (challenges). The design system has moved from reference to vocabulary.

---

### PHASE 2: RESEARCH FINDINGS (18-24 passes, ~$55-80)

This is the longest phase. 337 findings across 5 research streams + 1 synthesis document. Each research file gets PRIMACY for 3-4 passes — meaning it is the ONLY research file loaded, and every pass focuses on what THAT research stream teaches about THIS page.

The order matters. We go from most concrete (R1, documentation patterns) to most abstract (R5, combination theory), with R4 (axis innovations, 192 findings) getting extra time due to its size. The synthesis comes last because it requires all five streams to have been individually absorbed first.

**Sub-Phase 2a: R1 DOCUMENTATION PATTERNS (3-4 passes)**

R1 contains 28 findings from Stripe, Vercel, Linear, Notion, Mintlify, Radix, Apple HIG, Tailwind, Docusaurus, and Storybook. These are CONCRETE patterns about how premium documentation sites handle density rhythm, whitespace, typography hierarchy, and component presentation.

| Pass | Focus |
|------|-------|
| 2a.1 | Read all 28 R1 findings. For each finding, write one sentence about whether and how it applies to THIS page. Identify the 5-7 most relevant findings. |
| 2a.2 | Apply the top 3 R1 findings. Make concrete CSS/HTML changes to the page. If R1-007 says "Stripe uses dense/sparse alternation at viewport-height intervals" and your page has 4 viewports of identical density, FIX THAT. |
| 2a.3 | Apply findings 4-7. These are the less obvious applications — the ones that require creative interpretation rather than direct implementation. |
| 2a.4 (optional) | Integration pass. Step back and look at how the R1 changes interact with each other and with the Phase 1 work. Fix rhythm breaks. |

**Sub-Phase 2b: R2 CREATIVE LAYOUTS (3-4 passes)**

R2 contains 27 findings on creative layout techniques from magazine editorial design, premium dashboards, design system showcases, and experimental web layouts. This is where the page starts moving beyond "well-organized documentation" toward "editorial design."

| Pass | Focus |
|------|-------|
| 2b.1 | Read all 27 R2 findings. Identify which creative layout techniques are compatible with the soul constraints (no rounded corners, no shadows, no gradients). Many R2 findings will need ADAPTATION to work within KortAI's vocabulary. |
| 2b.2 | Apply 3-4 R2 findings that push the page toward editorial feel. Asymmetric layouts? Pull quotes? Grid breaking with content (not decoration)? Width variation? |
| 2b.3 | Apply 2-3 more R2 findings, focusing on the ones that create VISUAL INTEREST without violating soul constraints. |
| 2b.4 (optional) | Integration pass. The page now has documentation patterns (R1) AND creative layouts (R2). Do they fight or complement? Fix conflicts. |

**Sub-Phase 2c: R3 DENSITY DIMENSIONS (3-4 passes)**

R3 is the most CITED research file in the entire system — 51 findings expanding density beyond spatial arrangement into six dimensions: temporal, depth, semantic, cognitive, interaction, and spatial. This is where the builder learns that density is not just "how close things are" but "how much cognitive weight bears on each square inch."

| Pass | Focus |
|------|-------|
| 2c.1 | Read all 51 R3 findings. The key insight is the six-dimensional density model. Map each dimension to your page: Where is temporal density high? Where is cognitive density crushing? Where is semantic density (meaning-per-word) at its peak? |
| 2c.2 | Apply the spatial and temporal density findings. Implement INHALE/EXHALE rhythm. Create deliberate density compression and expansion. Use padding changes (not just content changes) to modulate density. |
| 2c.3 | Apply the depth and semantic density findings. These are subtler — depth density means layered information (tooltip-like progressive disclosure), semantic density means meaning-per-character. Create zones where the page is informationally DENSE but visually SPARSE (high semantic, low spatial). |
| 2c.4 (optional) | The fractal finding (R3-023, which generated DD-F-006). Does your page demonstrate fractal self-similarity? Dense/sparse rhythm at page scale AND section scale AND component scale AND character scale? |

**Sub-Phase 2d: R4 AXIS INNOVATIONS (4-5 passes)**

R4 is the LARGEST research stream — 192 findings on reading patterns (Z, F, Gutenberg), grid innovations (bento, modular, broken grid), movement choreography (spiral, diagonal), and non-linear layout approaches. ALL 192 findings remain UNAPPLIED as of current pipeline state. This is virgin territory.

| Pass | Focus |
|------|-------|
| 2d.1 | Read R4 findings (scan — 192 findings is too many to absorb in one pass, so read in chunks of ~40, noting the 15-20 most relevant). Focus on the reading pattern findings (Z, F, Gutenberg) and identify which pattern each section of your page currently follows. |
| 2d.2 | Apply 3-4 axis innovations. Does one section need to break from F-Pattern into a bento grid? Does the opening section follow a Z-Pattern that guides the eye to a CTA or key concept? Are there sections that would benefit from width-breaking axis shifts? |
| 2d.3 | Apply 2-3 movement choreography findings. Spiral entry? Diagonal movement? These are the most experimental R4 findings and require creative adaptation within soul constraints. |
| 2d.4 | Read the remaining R4 findings you skimmed in 2d.1. Are there any that now, with a more developed page, become relevant? Apply 2-3 more. |
| 2d.5 (optional) | Integration pass. The page now has documentation patterns, creative layouts, density dimensions, AND axis innovations. This is getting complex. Are there sections where too many innovations collide? Simplify where needed. The grammar rule "Maximum patterns per page: 5-6" applies. |

**Sub-Phase 2e: R5 COMBINATION THEORY (3-4 passes)**

R5 contains 39 findings on how components should combine — harmony, tension, sequence, grouping, nesting, and meta-relationships. This is the research stream most directly about COMPOSITION (how things work together, not how individual things work).

| Pass | Focus |
|------|-------|
| 2e.1 | Read all 39 R5 findings. The key concepts: harmony (components that reinforce each other), tension (components that productively contrast), sequence (optimal ordering), grouping (what belongs together), nesting rules. |
| 2e.2 | Audit every component adjacency in your page through R5 lens. Are there harmony violations? Tension mismatches? Grouping errors? Fix the 5-7 worst adjacency problems. |
| 2e.3 | Apply the sequencing and nesting findings. Are recommended sequences (Opening: Hero > Overview > Navigation; Teaching: Essence > Core Abstraction > Code > Tip) being followed where appropriate? |
| 2e.4 (optional) | Nesting audit. Maximum depth: 2 levels. No callout nesting. Code blocks are peers to callouts. Decision matrices are terminal. Fix violations. |

**Sub-Phase 2f: RESEARCH-SYNTHESIS (3-4 passes)**

RESEARCH-SYNTHESIS is the cross-research unification document — the only file that synthesizes across ALL five dimensions into unified principles. Read this AFTER individual streams because its insights only make sense with the underlying research already absorbed.

| Pass | Focus |
|------|-------|
| 2f.1 | Read the full RESEARCH-SYNTHESIS. For each unified principle, check: does my page demonstrate this principle? The synthesis probably identifies 5-8 meta-principles that emerge from cross-dimensional interaction. |
| 2f.2 | Apply the 3-4 synthesis principles that are WEAKEST in your page. These are the cross-cutting insights that no single research stream covers. |
| 2f.3 | Full integration pass. With all R1-R5 + synthesis absorbed, look at the page as a whole. Is it coherent? Does it feel like a unified design or a committee's output? If the latter, identify the 3-5 places where research applications COLLIDE and resolve them. |
| 2f.4 | Screenshot + Phase 2 retrospective. Take new screenshots. Compare to Phase 1 exit screenshots. Write a retrospective: What did the research teach about THIS content? What was surprising? What research seemed irrelevant? What would you do differently? |

**Phase 2 total: 18-24 passes across 6 sub-phases.**

**Exit gate:** The page incorporates insights from all 5 research streams. At least 15 specific research findings are traceable to concrete CSS/HTML changes. The page demonstrates density variation (R3), reading pattern awareness (R4), component combination intelligence (R5), and editorial design sensibility (R2) that were absent in Phase 1.

---

### PHASE 3: CASE STUDIES (15-20 passes, ~$45-65)

Case studies are NOT templates. They are proof-of-concept — documentation of what ONE metaphor produced for ONE specific content tension. The builder extracts the PROCESS, not the ANSWER.

The order goes DD > OD > CD, mirroring the original exploration sequence (density first, then organization, then combination). Each family of case studies gets 5-7 passes.

**Sub-Phase 3a: DD CASE STUDIES (5-7 passes)**

Available: DD-003 (Islands), DD-004 (Layers), DD-006 (Fractal) + 3 visual analyses.

| Pass | Focus |
|------|-------|
| 3a.1 | Read DD-003-islands.md (405 lines). Extract the MECHANISM, not the metaphor. Bento grid isolation. Archipelago structure. Independent modules that do not bleed together. Does your page have content that needs this kind of containment? |
| 3a.2 | Read DD-004-layers.md (428 lines). Extract: atmospheric depth encoding. 4 layers (base/interaction/syntax/meta). Border-weight gradient encoding confidence. Where in your page does content have LAYERS of certainty or depth? |
| 3a.3 | Read DD-006-fractal.md (377 lines). Extract: self-similarity at 4 scales. Fractal density rhythm. Recursive 2-zone DNA. This is the most sophisticated DD case study — the content ABOUT self-similarity DEMONSTRATES self-similarity. Does your content have any recursive or self-referential quality? |
| 3a.4 | Read the visual case studies (dd-003-visual, dd-004-visual, dd-006-visual). These are Playwright rendering analyses — descriptions of what the pages actually LOOK like, not just what CSS they use. Learn from the perceptual analysis. |
| 3a.5 | Apply DD insights. Make 5-10 concrete changes to your page based on DD case study learning. NOT copying CSS — extracting mechanisms and applying them to YOUR content with YOUR metaphor. |
| 3a.6 (optional) | Read DD validated exploration HTML (DD-003, DD-004, DD-006 — 881, 1275, 1120 lines respectively). See the ACTUAL CSS implementations. Note techniques you can adapt. |
| 3a.7 (optional) | Integration pass. How do DD insights interact with the R1-R5 research already applied? |

**Sub-Phase 3b: OD CASE STUDIES (5-7 passes)**

Available: OD-001 (Conversational), OD-004 (Confidence), OD-006 (Creative).

| Pass | Focus |
|------|-------|
| 3b.1 | Read OD-001-conversational.md (297 lines). Extract: Q&A dialogue structure. Width variation (question narrow, answer full). Drop cap as editorial opening signal. Where in your page does content have a CONVERSATIONAL quality — back and forth, question and answer, challenge and response? |
| 3b.2 | Read OD-004-confidence.md (309 lines). Extract: geological stratification as confidence encoding. Border-weight encoding epistemic status (certain = heavy, speculative = light). Zone progression from bedrock (established) to surface (exploratory). Does your content have variable confidence levels? |
| 3b.3 | Read OD-006-creative.md (333 lines). Extract: dual-lens toggle (technical precision + creative metaphor). 2-zone DNA. Serif italic editorial voice. Progressive disclosure. This case study is about TEACHING tension-composition while DEMONSTRATING it — the meta-layer. |
| 3b.4 | Apply OD insights. The organizational case studies teach about HOW CONTENT IS STRUCTURED, not just how it looks. Make structural changes — reorder sections, change width relationships, implement progressive disclosure where appropriate. |
| 3b.5 | Read OD validated exploration HTML (OD-001, OD-004, OD-006 — 2293, 1978, 2635 lines). These are the richest OD explorations. Study the actual CSS. |
| 3b.6 (optional) | Integration pass. |
| 3b.7 (optional) | Additional OD explorations (OD-002 narrative, OD-003 task-based, OD-005 spatial) if relevant. |

**Sub-Phase 3c: CD CASE STUDIES (5-7 passes)**

Available: CD-001 (Reasoning Inside Code), CD-005 (Multi-Axis Transition), CD-006 (Pilot Migration).

CD case studies are the most COMPOSITIONALLY sophisticated — they deal with how components COMBINE, not how individual components work.

| Pass | Focus |
|------|-------|
| 3c.1 | Read CD-001-reasoning-inside-code.md (415 lines). Extract: framed deliberation (code + reasoning containers). 3px border containers. Amber accents for reasoning/challenge. The key insight: showing BOTH implementation AND rationale in the same visual space. |
| 3c.2 | Read CD-005-multi-axis-transition.md (386 lines). Extract: bridge sections. Essence pullquote as transition element. How to move the reader from simple to complex without cognitive whiplash. Where does your page make TRANSITIONS between content domains? |
| 3c.3 | Read CD-006-pilot-migration.md (387 lines). Extract: bento grid for high-density containment. Core abstraction component (essence quote above, code proof below). Density meter. This is the CEILING-tier reference (scored 39/40). Study what maximum quality looks like in this system. |
| 3c.4 | Apply CD insights. Focus on component COMBINATIONS, not individual components. Where do two components create productive tension? Where do three components create a teaching sequence? Where does a transition between sections need a bridge component? |
| 3c.5 | Read CD validated exploration HTML (CD-001, CD-005, CD-006 — 1654, 2003, 2085 lines). The CD explorations have the most complex CSS. Study the selectors, the nesting, the responsive breakpoints. |
| 3c.6 (optional) | Read CD-002, CD-003, CD-004 exploration HTML for additional combination vocabulary. |
| 3c.7 (optional) | Full integration pass. The page now has DD density intelligence, OD organizational intelligence, and CD combinatorial intelligence. |

**Phase 3 total: 15-20 passes across 3 sub-phases.**

**Exit gate:** The page demonstrates structural learning from all three case study families. At least 5 mechanisms extracted from case studies are deployed in novel contexts (not copied). The builder can explain WHY each mechanism was chosen for THIS content.

---

### PHASE 4: MECHANISM GRAMMAR + COMPOSITION (5-8 passes, ~$15-25)

**What the builder reads:**
- `mechanisms.md` — 88 lines, 20 mechanisms across Spatial(4), Hierarchy(2), Component(5), Depth/Emphasis(3), Structure(7)
- `grammar.md` — 149 lines, compositional rules covering nesting, rhythm, zones, density, sequencing, organizational patterns, density patterns, compound pages, fractal self-similarity, responsive, anti-patterns

This phase is about FORMAL INTEGRATION. The builder has absorbed everything informally through immersion. Now it reads the RULES and checks its work against them.

| Pass | Focus |
|------|-------|
| 4.1 | Mechanism audit. Read mechanisms.md. For each of the 20 mechanisms, check: is this deployed in my page? If not, SHOULD it be? Not every mechanism belongs in every page. But the distribution rule says "every page-third must contain at least 2 distinct mechanisms." Count mechanisms per third. |
| 4.2 | Mechanism deployment. For any page-third with fewer than 2 mechanisms, add appropriate mechanisms. For any mechanism that is present in CSS but imperceptible to readers, either make it perceptible or remove it (per the "quality over quantity" rule). |
| 4.3 | Grammar compliance. Read grammar.md rule by rule. Nesting (max 2 levels? no callout nesting?). Rhythm (dense followed by sparse? max 3 consecutive dense?). Zones (max 2-3 changes per viewport?). Density (max 3-4 components per viewport? max 2 callouts per viewport?). Fix violations. |
| 4.4 | Transition grammar. At every zone boundary, verify: is this a SMOOTH, BRIDGE, or BREATHING transition? Is the type correct for the content change? (Same domain different intensity = SMOOTH. Different domain = BRIDGE. Different phase = BREATHING.) |
| 4.5 | Anti-pattern audit. Check for all 7 anti-patterns: callout stacking (3+), uniform density, fighting the pattern, simultaneous axis patterns, traffic-light adjacency, same-velocity stacking, code wall (>30 lines). Fix any found. |
| 4.6 | Responsive verification. Check 768px breakpoint. Grids collapse to 1-2 columns? Padding compresses appropriately? Bento grids go single-column? Font sizes reduce ~19%? |
| 4.7 | Screenshot + Phase 4 assessment. Compare to Phase 3 exit. The changes in this phase should be SUBTLE but IMPORTANT — fixing rhythm breaks, resolving anti-patterns, ensuring responsive behavior. |
| 4.8 (optional) | Component sequencing audit. Check recommended sequences against actual page ordering. Adjust where beneficial. |

**Exit gate:** Zero anti-pattern violations. Every page-third has 2+ mechanisms. Every zone boundary uses correct transition type. Responsive behavior works at 768px. Grammar rules are not violated.

---

### PHASE 5: MASTERY + POLISH (10-15 passes, ~$30-50)

No new research. No new files to read. The builder works from accumulated understanding. This is where the page achieves genuine craft — the difference between "well-built" and "masterful."

| Pass | Focus |
|------|-------|
| 5.1 | Dead code removal. Every CSS rule must be used. Every HTML class must have a corresponding CSS rule. Remove orphaned CSS. Remove unused HTML wrappers. The page should be LEAN. |
| 5.2 | CSS architecture. Group CSS logically: reset/base > tokens > layout > components > zones > typography > utilities > responsive. Are selectors specific enough but not over-specific? Are there redundant declarations? |
| 5.3 | Letter-spacing pass. EVERY instance of letter-spacing must be >= 0.025em (per SC-14, no sub-perceptual CSS). Check that letter-spacing creates hierarchy: labels (0.1em) > metadata (0.05em) > body (default). Remove any letter-spacing values that cannot be perceived. |
| 5.4 | Color temperature pass. Walk through the page top to bottom. Does each zone's background FEEL right? Is the warm cream (FEF9F5) used for sparse/introductory sections? Is the near-white (FFFFFF) used for dense/technical sections? Is the earthy tan (FAF5ED) used for transitional/recovery breathing zones? Adjust any zone that feels wrong. |
| 5.5 | Border weight relationships. Every border in the page should be part of the 4px/3px/1px hierarchy. Check: are 4px borders used for structural accent (callouts, featured elements)? 3px for section framing (header/footer, structural divisions)? 1px for subtle separators (table rows, component frames)? Fix any weight used for the wrong purpose. |
| 5.6 | Hover state pass. Every interactive element needs a hover state. Transitions should be `var(--transition-standard)` (0.3s ease). No transform:translateY (hover lift is a refusal). Hover states should change border-color, not add shadows or scale. |
| 5.7 | Accessibility pass. Check: skip link present? >= 5 ARIA landmarks? Color contrast ratios sufficient? Focus-visible styles working? Reduced-motion media query present? Semantic HTML (article, section, nav, aside)? |
| 5.8 | Perceptual delta check. At every zone boundary, verify: background delta >= 15 RGB max-channel? Total stacked gap <= 120px? Font-size delta >= 2px between zones? >= 3 of 6 channels shift at every boundary? |
| 5.9 | Full-page screenshot at 1440px. Full-page screenshot at 768px. Above-the-fold at both widths. LOOK at all four screenshots. Not analyzing CSS — EXPERIENCING the page visually. Describe what you see in 50 lines. |
| 5.10 | Character-level refinement. This is the finest grain. Review: em-dash vs en-dash usage. Smart quotes. Proper line breaks in code blocks. Consistent capitalization in labels. Precise alignment of elements. Font smoothing (antialiased). |
| 5.11 | Rhythm perfection. Scroll through the page slowly (in your imagination, based on the screenshots). Does the rhythm of dense-sparse FEEL right? Not measure right — FEEL right? Where does the page drag? Where does it rush? Adjust spacing by 4-8px where rhythm is off. |
| 5.12 | Final component audit. Every callout has the 2-zone DNA (sparse label + dense body)? Every code block has a language label? Every table has uppercase mono headers? Every section has appropriate heading hierarchy? |
| 5.13 | CSS comment pass. Add concise comments to non-obvious CSS. Not `/* sets background */` but `/* breathing zone between dense technical sections — reader recovery space */`. Comments should explain WHY, not WHAT. |
| 5.14 | Final screenshot comparison. Place all screenshots from all phases side by side (mentally). The progression should show: Phase 0 (flat, generic, correct tokens) > Phase 1 (KortAI identity, components integrated) > Phase 2 (research-informed density and layout) > Phase 3 (case-study structural intelligence) > Phase 4 (grammar-compliant, anti-pattern-free) > Phase 5 (masterful craft, character-level precision). |
| 5.15 (optional) | One final pass if anything in 5.14 reveals a remaining issue. |

**Exit gate:** No dead CSS. No sub-perceptual values. No anti-pattern violations. No accessibility gaps. The page is a finished, craftsman-quality artifact. Not because rules are followed, but because the builder has internalized the system deeply enough to make decisions that the rules describe but cannot prescribe.

---

### TOTAL PASS COUNT ACROSS ALL PHASES

| Phase | Min Passes | Max Passes | Research Focus |
|-------|-----------|-----------|----------------|
| Phase 0 | 5 | 8 | Content only |
| Phase 1 | 8 | 12 | Soul + Identity + Components |
| Phase 2 | 18 | 24 | R1-R5 + Synthesis (337 findings) |
| Phase 3 | 15 | 20 | 9 case studies + 18 explorations |
| Phase 4 | 5 | 8 | Mechanism catalog + Grammar rules |
| Phase 5 | 10 | 15 | None (mastery from accumulated understanding) |
| **TOTAL** | **61** | **87** | |

---

## B. WHAT EACH PASS LOOKS LIKE AT DIFFERENT DEPTHS

Within each slice, passes have a natural progression that mirrors learning theory:

### Early Passes (1-3): DISCOVERY

The builder is encountering new material. Cognitive mode: **intake + hypothesis**.

- Big structural moves. New components appear. Sections get reorganized. The page might lose coherence temporarily — that is fine.
- The builder is asking: "What does this research MEAN for my page?"
- CSS changes are LARGE: new components (50-100 lines of CSS), new zone structures (background changes across multiple sections), new layout patterns (grid definitions, width changes).
- Typical per-pass change size: 100-300 lines of CSS/HTML added or modified.

**Example (Pass 2c.2 — applying R3 spatial density findings):**
The builder reads R3's finding that density should oscillate at viewport-height intervals. Looking at the page, it sees 4 consecutive dense sections. It adds breathing zones between sections 2-3 and 3-4, changes the padding from uniform 48px to PULSE rhythm (24px inhale / 64-80px exhale), and shifts zone backgrounds from uniform sparse to alternating sparse/dense.

### Middle Passes (4-7): INTEGRATION

The builder is reconciling new material with existing work. Cognitive mode: **synthesis + conflict resolution**.

- Fixing rhythm breaks caused by early-pass additions. Making new components work with old components. Responsive adjustments for new elements.
- The builder is asking: "How does this new thing work with what was already here?"
- CSS changes are MEDIUM: adjusting padding values, fixing responsive breakpoints, resolving selector conflicts, harmonizing color usage across old and new sections.
- Typical per-pass change size: 50-150 lines modified.

**Example (Pass 2c.3 — applying R3 depth/semantic density):**
The builder read about depth density (layered information) and semantic density (meaning-per-word). It created a progressive disclosure section where surface text is sparse (low spatial density, high semantic density — each word carries heavy meaning), and the expandable detail is dense (high spatial density, lower semantic density — more words explaining less). The CSS for the disclosure uses padding changes to signal the shift: 48px padding on the surface, 24px padding on the detail.

### Late Passes (8-10+): MASTERY

The builder is operating from internalized knowledge. Cognitive mode: **refinement + craft**.

- Letter-spacing relationships between label levels. Hover timing curves. Border weight decisions at ambiguous boundaries. Color temperature fine-tuning. The difference between 24px and 28px padding.
- The builder is asking: "Is this EXACTLY right, or just approximately right?"
- CSS changes are SMALL: single property changes, 2-4px padding adjustments, letter-spacing from 0.08em to 0.1em, transition timing from 0.2s to 0.3s.
- Typical per-pass change size: 10-40 lines modified.

**Example (Pass 5.11 — rhythm perfection):**
The builder scrolls through mentally. Between sections 3 and 4, there is a breathing zone with 48px padding. It FEELS too tight — section 3 was a dense technical section with 3 code blocks, and section 4 is a philosophical essay. The reader needs more recovery time. The builder changes the breathing zone to 80px padding and shifts it from `--color-zone-breathing` to a combination of breathing background + 3px border-top for a stronger BRIDGE transition. Total change: 3 CSS properties.

---

## C. THE RETROSPECTIVE PROTOCOL

At the end of each PHASE (not each pass), the builder writes a retrospective to `{OUTPUT_DIR}/_retrospective-phase-{N}.md`. These are the builder's own notes to itself for memory continuity across context windows.

### Retrospective Template

```markdown
# Phase {N} Retrospective: {PHASE NAME}

## Passes completed: {count}
## Research absorbed: {list of files read}

## What I Applied (Specific Changes)

1. [Specific CSS/HTML change] — Motivated by [research finding / case study / grammar rule]
2. [Another change] — Motivated by [source]
...

## What the Research Taught About THIS Content

- [Insight about this specific content that only emerged through research application]
- [Another content-specific insight]
...

## What Still Needs Work

- [Specific area of the page that is not yet at mastery level]
- [Another area]
...

## What I Would Do Differently

- [Process insight — not about the page, about the approach]
...

## Current Page Stats

- Total CSS lines: {count}
- Total HTML lines: {count}
- Component types deployed: {count}
- Mechanisms deployed: {count}
- Token compliance: {percentage of CSS values using tokens}
- Zone count: {count}
- Anti-pattern violations remaining: {count}
```

### Why Retrospectives Are Critical for Context Window Continuity

This skill will hit context window limits every 15-20 passes. When the context resets, the new context needs to understand:

1. WHERE the builder is in the feeding schedule (which phase, which sub-phase, which pass)
2. WHAT has been absorbed so far (which files read, which findings applied)
3. WHAT the builder's current cognitive state is (what does it KNOW about this page?)
4. WHAT still needs work

The retrospective provides all four. The new context reads the most recent retrospective and picks up where the previous context left off. Without retrospectives, each context reset loses the builder's accumulated understanding — the very thing this skill is designed to build.

### Context Window Management Strategy

The pipeline log (`_pipeline-log.md`) tracks mechanical progress. The retrospectives track cognitive progress. Together, they allow a new context window to resume with ~80% of the previous window's understanding intact. The remaining 20% is re-derived by re-reading the page itself (the HTML IS the builder's accumulated output — it encodes all previous decisions).

Expected context window boundaries:
- Window 1: Phase 0 + Phase 1 (passes 1-15, ~15 passes)
- Window 2: Phase 2a-2c (passes 16-30, ~15 passes)
- Window 3: Phase 2d-2f + Phase 3a (passes 31-45, ~15 passes)
- Window 4: Phase 3b-3c + Phase 4 (passes 46-60, ~15 passes)
- Window 5: Phase 5 (passes 61-75+, ~15 passes)

Each window starts by reading:
1. `_pipeline-log.md` (mechanical progress)
2. Most recent `_retrospective-phase-{N}.md` (cognitive progress)
3. The current HTML page (accumulated output)
4. The next research slice to absorb

---

## D. THE SCREENSHOT PROTOCOL

Screenshots serve a different purpose at different phases. The protocol adapts.

### Standard Screenshot Procedure

Every screenshot capture follows this sequence:

```
1. Serve the HTML via Python HTTP server (port 8765)
   python3 -m http.server 8765 --directory {OUTPUT_DIR} &

2. Navigate to localhost:8765/{filename}.html

3. Wait for fonts to load
   browser_wait_for: "document.fonts.ready" (or wait 3s)

4. Disable animations
   browser_evaluate: * { animation: none !important; opacity: 1 !important; transform: none !important; }

5. Resize to 1440px width
   browser_resize: 1440 x 900

6. Take above-the-fold screenshot
   browser_take_screenshot: {OUTPUT_DIR}/_screenshots/phase-{N}-pass-{M}-above-fold-1440.png

7. Take full-page screenshot
   browser_take_screenshot: fullPage=true, {OUTPUT_DIR}/_screenshots/phase-{N}-pass-{M}-full-1440.png

8. Resize to 768px width
   browser_resize: 768 x 1024

9. Take above-the-fold screenshot at 768px
   browser_take_screenshot: {OUTPUT_DIR}/_screenshots/phase-{N}-pass-{M}-above-fold-768.png

10. Take full-page screenshot at 768px (only at phase boundaries)
    browser_take_screenshot: fullPage=true, {OUTPUT_DIR}/_screenshots/phase-{N}-pass-{M}-full-768.png

11. VERIFY file sizes: ls -la {OUTPUT_DIR}/_screenshots/
    Real content = 30k-200k+. Blank white = ~5-6k.
    If blank, re-inject animation disabling and re-capture.
```

### Screenshot Frequency

| Context | When | What to Capture |
|---------|------|----------------|
| Phase 0 exit | After pass 0.7 | Full page at 1440px + above-fold at 1440px |
| Phase 1 exit | After pass 1.10 | Full page at 1440px + above-fold at 1440px |
| Phase 2 mid-point | After sub-phase 2c | Full page at 1440px (density check) |
| Phase 2 exit | After pass 2f.4 | Full page 1440px + full page 768px + above-fold both |
| Phase 3 mid-point | After sub-phase 3b | Full page at 1440px |
| Phase 3 exit | After sub-phase 3c | Full page 1440px + full page 768px + above-fold both |
| Phase 4 exit | After pass 4.7 | Full page 1440px + full page 768px |
| Phase 5 mid-point | After pass 5.9 | Full page 1440px + full page 768px + above-fold both |
| Phase 5 final | After pass 5.14 | Full page 1440px + full page 768px + above-fold both |

**Total screenshots: ~20-25 captures across the full build.**

### What the Builder Does With Screenshots

The builder does NOT analyze CSS from screenshots. The builder EXPERIENCES the page visually.

The description after each screenshot capture should answer:
- What is the FIRST thing my eye lands on?
- Does the page breathe? Where does it feel cramped? Where does it feel empty?
- Is there a rhythm? Can I feel the dense-sparse alternation?
- Does it look like KortAI? Or does it look like a generic documentation page?
- Where is the page BEAUTIFUL? Where is it BORING?
- If I were a reader encountering this page for the first time, would I want to keep scrolling?

These descriptions go in the pipeline log, not the retrospectives. They are ephemeral observations that inform the next 2-3 passes.

---

## E. THE COST MODEL

### Per-Pass Cost Breakdown

| Activity | Token Cost | Dollar Cost (est.) |
|----------|-----------|-------------------|
| Reading research file (500-1000 lines) | ~2k input tokens | $0.30-0.60 |
| Reading current HTML page (~2000 lines) | ~4k input tokens | $0.60 |
| Thinking about changes | ~2k output tokens | $0.30 |
| Writing CSS/HTML changes | ~1-3k output tokens | $0.15-0.45 |
| Screenshot capture + description | ~1k I/O tokens | $0.15 |
| **Total per pass** | **~10-12k tokens** | **$1.50-2.10** |

With Opus pricing (~$15 per million input, $75 per million output), the cost per pass is approximately $2-4 accounting for system prompts, tool calls, and overhead.

### Phase Cost Estimates

| Phase | Passes | Est. Cost | Cumulative |
|-------|--------|-----------|-----------|
| Phase 0 | 5-8 | $10-20 | $10-20 |
| Phase 1 | 8-12 | $20-30 | $30-50 |
| Phase 2 | 18-24 | $45-75 | $75-125 |
| Phase 3 | 15-20 | $40-65 | $115-190 |
| Phase 4 | 5-8 | $12-25 | $127-215 |
| Phase 5 | 10-15 | $25-45 | $152-260 |
| **TOTAL** | **61-87** | **$152-260** | |

Add ~15-25% overhead for context window resets (re-reading retrospectives, pipeline log, current HTML) across ~5 context windows: $23-65.

**Estimated total range: $175-325**

This fits within the $300 budget with some variance. If costs are tracking toward the high end after Phase 2, the builder can reduce pass counts in later phases while maintaining quality (Phase 5 is most compressible — mastery passes can be combined).

### Context Window Economics

Each context window reset costs approximately:
- Re-reading pipeline log: ~$0.50
- Re-reading most recent retrospective: ~$0.50
- Re-reading current HTML page: ~$1.00
- Re-reading next research slice: ~$0.50-1.50
- **Total reset cost: ~$2.50-3.50**

With 5 expected resets, that is $12.50-17.50 in overhead — significant but manageable.

### Duration Estimates

| Phase | Est. Duration | Cumulative |
|-------|--------------|-----------|
| Phase 0 | 30-60 min | 0.5-1 hr |
| Phase 1 | 45-90 min | 1.25-2.5 hr |
| Phase 2 | 90-150 min | 2.75-5 hr |
| Phase 3 | 75-120 min | 4-7 hr |
| Phase 4 | 25-50 min | 4.5-7.8 hr |
| Phase 5 | 50-90 min | 5.3-9.3 hr |
| **TOTAL** | | **5.3-9.3 hours** |

Add context window reset overhead (reading, re-orienting): ~30-60 min total.

**Estimated total duration: 6-10 hours.**

---

## F. WHAT DISTINGUISHES THIS FROM /RESEARCH-COMPOSE

The existing /research-compose (Tripod Pipeline) is excellent for its purpose: producing a high-quality page in 1-2 hours for ~$30-60. This falls-in-love protocol is a fundamentally different proposition.

| Dimension | /research-compose | Falls-In-Love |
|-----------|------------------|---------------|
| **Passes** | ~26 across 5 waves | 61-87 across 6 phases |
| **Duration** | 1-2 hours | 6-10 hours |
| **Cost** | $30-60 | $175-325 |
| **Research absorption** | Synthesized packages (specialists pre-digest) | Direct absorption (builder reads raw research) |
| **Builder continuity** | 3 builder passes (same builder) | 61-87 passes (same builder, with context resets) |
| **Content relationship** | Builder meets content and research simultaneously | Builder meets content FIRST, research SECOND |
| **Metaphor** | Factory (efficient production) | Apprenticeship (deep internalization) |
| **Target output** | 2,000-2,500 line page, 30-35 component types | 3,000-4,000+ line page, 40-60 component types |
| **When to use** | Every page that needs to be great | The ONE page that needs to be transcendent |

### The Key Architectural Difference

In /research-compose, specialists pre-digest research and hand curated packages to the builder. The builder never reads R1-R5 directly — it reads summaries. This is EFFICIENT (the builder gets 80% of the value in 20% of the time) but it is not DEEP. The builder does not form its own relationship with the research.

In falls-in-love, the builder reads everything directly. It forms its own interpretations. It makes its own connections between R3-023 (fractal self-similarity) and the specific content it is designing. No intermediary pre-digests the insight. The builder IS the researcher, the designer, and the implementer.

This is more expensive and slower. It also produces something the Tripod Pipeline cannot: a page where every CSS decision was made by an agent that has personally read and absorbed 39,500 lines of accumulated knowledge about this design system.

---

## G. OPEN QUESTIONS AND RISKS

### Risk 1: Context Window Degradation

The builder hits context limits every 15-20 passes. Each reset loses some cognitive state. The retrospective protocol mitigates this (~80% recovery) but 5 resets mean cumulative loss. By Window 5, the builder has recovered from 4 previous resets.

**Mitigation:** The retrospective protocol. Also: the HTML page itself IS the accumulated state. A new context window can read the current 3,000-line page and understand what the previous builder decided, even without explicit notes.

### Risk 2: Diminishing Returns After Pass 40

After 40+ passes, the page may reach a plateau where additional passes produce only marginal improvements. The builder may start making changes that are lateral (different, not better) rather than additive (genuinely improving).

**Mitigation:** Phase 5's explicit focus on SUBTRACTION (dead code removal) prevents the common failure mode of "adding more to justify continued work." The Phase 4 grammar audit catches instances where the builder over-decorated. The retrospective protocol forces the builder to honestly assess whether progress is still happening.

### Risk 3: Cost Overrun

If passes are slower than estimated (more research reading per pass, more CSS changes per pass), costs could exceed $300.

**Mitigation:** Phase 5 is the most compressible phase. If costs are tracking high after Phase 3, reduce Phase 5 from 10-15 passes to 7-8 passes. The page will still be excellent — Phase 5 is mastery refinement, not fundamental quality.

### Risk 4: Coherence Loss Through Over-Enrichment

Adding research insights from 5 different streams + 9 case studies + 20 mechanisms could produce a page that demonstrates everything and expresses nothing. The committee effect.

**Mitigation:** Phase 4's grammar audit explicitly checks for coherence. The grammar rule "Maximum patterns per page: 5-6" prevents technique stacking. The Phase 2f integration pass explicitly checks for research collisions. And the builder's CONTENT relationship from Phase 0 provides an anchor — the page is about THIS content, not about demonstrating the design system.

### Risk 5: Single Builder vs Team

This protocol uses a SINGLE builder across all passes (with context resets). The Tripod Pipeline uses 16-17 separate agents. Single builder = coherence + accumulated understanding. Multiple agents = parallel efficiency + fresh perspectives.

**Mitigation:** The screenshot protocol provides the "fresh eyes" that would otherwise come from multiple agents. By LOOKING at the page (not just editing CSS), the builder can step outside its accumulated assumptions. Additionally, the Phase 5 accessibility and anti-pattern audits enforce standards that a single builder might have blind spots for.

---

## H. IMPLEMENTATION NOTES

### File Structure

```
ephemeral/builds/{content-name}-falls-in-love-{date}/
  _pipeline-log.md           (mechanical progress)
  _retrospective-phase-0.md  (Phase 0 cognitive state)
  _retrospective-phase-1.md  (Phase 1 cognitive state)
  _retrospective-phase-2.md  (Phase 2 cognitive state)
  _retrospective-phase-3.md  (Phase 3 cognitive state)
  _retrospective-phase-4.md  (Phase 4 cognitive state)
  _retrospective-phase-5.md  (Phase 5 cognitive state, FINAL)
  _spatial-hypothesis.md     (Phase 0 content analysis)
  _research-notes/
    r1-application.md        (R1 findings + how they were applied)
    r2-application.md        (R2 findings + how they were applied)
    r3-application.md        (R3 findings + how they were applied)
    r4-application.md        (R4 findings + how they were applied)
    r5-application.md        (R5 findings + how they were applied)
    synthesis-application.md (Cross-research application)
  _screenshots/
    phase-0-exit-1440.png
    phase-1-exit-1440.png
    phase-2-mid-1440.png
    phase-2-exit-1440.png
    phase-2-exit-768.png
    phase-3-mid-1440.png
    phase-3-exit-1440.png
    phase-3-exit-768.png
    phase-4-exit-1440.png
    phase-4-exit-768.png
    phase-5-mid-1440.png
    phase-5-final-1440.png
    phase-5-final-768.png
  _build-final.html          (THE PAGE — updated continuously)
```

### The Single File Pattern

Unlike /research-compose which produces intermediate build files (_build-pass-1.html, _build-pass-2.html, _build-pass-3.html), the falls-in-love protocol produces a SINGLE HTML file that is continuously modified across all 61-87 passes. There are no intermediate snapshots.

Why: The page IS the builder's evolving understanding. Snapshots would suggest discrete states when the reality is continuous growth. The screenshots serve as visual snapshots; the HTML file is always the CURRENT state.

### Context Window Handoff Format

When the builder hits a context limit, the orchestrator creates a handoff prompt for the new context:

```markdown
You are a builder in the Falls-In-Love protocol, continuing from a previous context window.

CURRENT STATE:
- Phase: {current phase and sub-phase}
- Pass: {current pass number}/{total expected}
- Last completed: {description of last completed pass}

READ THESE FILES (in order):
1. {OUTPUT_DIR}/_pipeline-log.md (mechanical progress)
2. {OUTPUT_DIR}/_retrospective-phase-{latest}.md (cognitive state)
3. {OUTPUT_DIR}/_build-final.html (current page)
4. {next research file to absorb} (next slice)

YOUR TASK:
Continue building. You are on pass {N}. Your focus this pass is: {description}.
Follow the feeding schedule in the SKILL.md for remaining phases.
```

### Orchestrator vs Builder

The ORCHESTRATOR manages:
- File loading / research routing
- Screenshot capture timing
- Cost tracking
- Context window transitions
- Phase gate enforcement

The BUILDER (which IS the orchestrator in this protocol, not a separate agent) manages:
- All CSS/HTML changes
- Research interpretation
- Spatial decisions
- Retrospective writing

This is a SINGLE-AGENT protocol. The orchestrator and builder are the same entity. This is deliberate — the entire point is that one agent builds a deep, continuous relationship with the content and design system. Splitting into orchestrator + builder would fragment that relationship.

---

## I. THE DEEPER ARGUMENT

Why would anyone spend $300 and 8 hours on a single HTML page?

Because the page is not the product. The COGNITIVE STATE of the builder is the product. After 70 passes, the builder does not "know about" the design system. The builder THINKS IN the design system. Every CSS decision it makes is informed by 337 research findings, 20 mechanisms, 9 case studies, 149 lines of grammar rules, and 18 validated explorations — not because it is looking them up, but because they are woven into how it reasons about space, typography, color, and rhythm.

This is what happens when a junior designer becomes a senior designer. Not by reading more documentation, but by building, failing, reading, building again, failing differently, reading more, building again — until the design system is not a reference but a reflex.

The falls-in-love protocol is a 6-10 hour simulation of that multi-year process. It produces one page. But that page is proof that the process works. And if it works for one page, the cognitive patterns it develops can be extracted, documented, and used to improve every subsequent build.

The page is not the point. The page is evidence that falling in love with a design system produces work that following a design system cannot.

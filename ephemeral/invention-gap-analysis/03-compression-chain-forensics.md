# 03: Compression Chain Forensics — Where Structural Questions Die

**Agent:** compression-tracer
**Method:** Line-by-line forensic reading of every prompt file in the pipeline, with exact quotes and line numbers
**Files analyzed:** 10 prompt files across skills/research-compose/

---

## File-by-File Forensic Analysis

---

### FILE 1: `tc-derivation.md` (96 lines)

**Spatial / Layout / Structural mentions:**

- Line 34: `"4. **Compositional Arc** — the spatial and temporal flow of the page. Must contain at least 3 creative waypoints."`
  - This is the ONLY mention of spatial anything. "Spatial flow" is vague — it does not ask about axis patterns, reading paths, grid structures, hub layouts, or structural organization.

- Line 42: `"Creative waypoints must be specific enough that a builder can act on them"`
  - Waypoints are the pipeline's proxy for structural guidance, but the term "waypoint" implies a point on a path, NOT a structural invention like a hub grid or vertical annotation column.

**Invention encouragement / prohibition:**

- Line 40: `"The brief must be conviction-driven: creative invitations, not compliance checklists"`
  - FLOOR language. "Creative invitations" is encouraging.

- Line 47-48: `"The brief MUST include 2-3 explicit 'COMPOSITIONAL QUESTIONS' — generative 'What if...' invitations that the pipeline will carry through to the builder."`
  - FLOOR language. These questions are the primary vehicle for structural invention in the pipeline. They are the highest-value artifact.

- Line 68: `"Each question must imply **3+ visual channels** varying together (not just 'add more padding')"`
  - This pushes questions toward MULTI-CHANNEL coordination (varying spacing + typography + color together), NOT toward STRUCTURAL invention (new layouts, new spatial organizations). Multi-channel coordination is a texture question, not a structural question.

- Lines 73-75: Example "good" questions:
  - `"What if every visual channel compressed as you descend the tower? Typography shrinks, spacing tightens, line-height compresses, letter-spacing neutralizes."`
  - `"What if the code blocks carried the same atmospheric signature as their surrounding zone — not just syntax-highlighted text in a box, but code that BELONGS to its stratum?"`
  - **CRITICAL FINDING:** Both example questions are TEXTURE questions (how channels vary across existing zones), NOT STRUCTURAL questions (what layout to use, whether to break the reading path, whether to use a hub-and-spoke grid). The exemplars steer ALL future TC questions toward texture.

**Ceiling-to-floor ratio:** 0 "Do NOT" instructions, ~5 "must" instructions (quality floors), 2+ "creative invitation" instructions. Ratio is healthy — this file is generative, not restrictive.

**VERDICT:** tc-derivation.md is the ORIGIN POINT of the structural gap. It asks for "spatial flow" but never asks about spatial ORGANIZATION. Its example questions are texture-oriented, training the TC agent to produce texture questions. A TC agent following this prompt would never ask "What if the page used a hub-and-spoke grid with a central navigation index?" because the examples don't demonstrate structural questions.

---

### FILE 2: `specialist-1-prompt.md` (243 lines)

**Spatial / Layout / Structural mentions:**

- Line 42: `"What spatial direction does it imply (vertical strata? horizontal flow? radial expansion?)"`
  - This IS a structural question — but it's asked of the TC brief, not generated as new structural inquiry. The specialist READS spatial direction from the brief but does not GENERATE new spatial ideas.

- Line 60: `"R4-AXIS-INNOVATIONS.md (990 lines, 192 findings)"`
  - R4 contains axis innovations (Z-pattern, F-pattern, Bento, Spiral, Choreography). But the specialist is tasked with RATING these against existing content, not proposing NEW structural arrangements.

**Invention encouragement / prohibition:**

- Line 89: `"**CSS Action:** [Specific CSS instruction for the builder. Name properties, values, selectors. Use recipe verbs: 'Apply', 'Deploy', 'Encode', 'Set'.]"`
  - The CSS Action format is about deploying EXISTING mechanisms, not inventing new ones. "Deploy" = apply from library.

- Line 232: `"Do NOT produce a generic summary of research themes. Every line of your output must be build-specific."`
  - No explicit invention prohibition, but the entire framing is CURATION (rate existing findings) not GENERATION (produce new structural ideas).

- Line 233: `"Do NOT use checklist format. You are writing a RECIPE — sequenced actions with expected results."`
  - Recipe format is good (generative), but recipes are for deploying known mechanisms, not inventing new ones.

**What question TYPES does this file generate/consume?**
- CONSUMES: TC brief questions (preserved verbatim, lines 112-133)
- GENERATES: Finding ratings (HIGH/MEDIUM/LOW) — these are RELEVANCE assessments of existing research, not new structural proposals

**Ceiling-to-floor ratio:** 7 "Do NOT" instructions (lines 228-234), 0 "Explore" or "Invent" instructions. All "Do NOT" items are about scope boundaries (don't read case studies, don't read other specialists' domains), not about structural prohibition per se. But the entire file is structured around CURATION of existing knowledge, creating no space for structural invention.

**VERDICT:** Specialist 1 is a FILTER, not a GENERATOR. It rates 337 existing findings against current content. It preserves TC experimental questions verbatim. It does NOT produce new structural ideas. If the TC questions are texture-oriented (as the exemplars steer), the specialist passes texture questions through unchanged.

---

### FILE 3: `specialist-2-prompt.md` (324 lines)

**Spatial / Layout / Structural mentions:**

- Line 33: `"What is the natural information density progression? (sparse intro → dense middle → sparse conclusion? uniform? alternating?)"`
  - Density progression, not spatial organization. This is a TEMPORAL question (how density changes over scroll time), not a SPATIAL question (how the page is organized in 2D space).

- Lines 109-111: Cross-stage chains reference axis patterns:
  - `"**R3-023 → DD-F-006 → OD (all 6) → AD-F-027**: Fractal self-similarity at 5 scales."`
  - `"**DD-F-001 (PULSE) → OD-F-003 → AD-F-002**: PULSE rhythm as foundational density pattern."`
  - `"**OD-F-005 → AD-F-004 → AD-F-023**: Organization IS density IS axis. The 3-way unification."`
  - These reference validated patterns (fractal, PULSE, topology) — all EXISTING mechanisms, not new structural inventions.

**Invention encouragement / prohibition:**

- No explicit invention prohibition
- No explicit invention encouragement
- The entire file is about PROVENANCE CHAIN following — tracing what has been validated across stages. This is backward-looking by design. It cannot produce forward-looking structural invention.

**What question TYPES does this file generate/consume?**
- CONSUMES: TC brief questions (preserved verbatim, lines 160-176)
- GENERATES: Provenance chain assessments (ELEVATED/BOUNDED) — these are confidence ratings on existing knowledge, not new proposals

**VERDICT:** Specialist 2 is a VALIDATOR, not an inventor. It traces what has been tested. By definition, it cannot propose untested structural ideas.

---

### FILE 4: `specialist-3-prompt.md` (291 lines)

**Spatial / Layout / Structural mentions:**

- Lines 48-69: The "structural affinity" concept covers three axes:
  - Content-Shape Affinity: "Does the case study's content have a similar STRUCTURE to the current content?"
  - Tension-Resolution Affinity: "Did the case study face a similar CREATIVE TENSION?"
  - Mechanism-Deployment Affinity: "Did the case study deploy mechanisms that the TC brief suggests?"
  - The term "structural" here means the SHAPE of the content (hierarchical sections, interleaved blocks, narrative arc), NOT spatial page layout. The specialist is matching content shapes, not proposing new page layouts.

- Lines 71-76: What structural affinity is NOT:
  - "Same topic... ≠ structural affinity"
  - "Same visual style... ≠ structural affinity"
  - This is ANTI-COPYING instruction. The case study analyst is told not to copy visual patterns — which would include copying structural layouts. Good for anti-prescription, but it also means the analyst won't propose a new structural layout INSPIRED BY a case study.

**Invention encouragement / prohibition:**

- Line 107: `"**Critical distinction:** You are NOT copying CSS. You are extracting the TECHNIQUE and re-expressing it in the current metaphor's vocabulary."`
  - TECHNIQUE extraction, not structural invention. The techniques being extracted are CSS patterns (border-weight, zone alternation), not layout structures (hub grid, vertical annotation column).

- Lines 286-288: Three "You are NOT" statements:
  - "You are NOT a template matcher."
  - "You are NOT a visual comparator."
  - "You are NOT a CSS copier."
  - These prevent the WRONG kind of copying but don't encourage the RIGHT kind of invention.

**VERDICT:** Specialist 3 extracts CSS TECHNIQUES from case studies and adapts them. The techniques are texture-level (border-weight gradient, zone alternation, fractal rhythm, 2-zone DNA). None of the exemplar techniques are structural-level (new page layout, new reading path, new axis geometry). Structural invention cannot emerge from case study technique extraction.

---

### FILE 5: `specialist-5-prompt.md` (262 lines)

**Spatial / Layout / Structural mentions:**

- Line 55-56: Consumption protocol analysis: `"Section 1 (Mandatory Reads) defined a numbered, ordered reading list with explicit rationale for WHY each file comes before the next"`
  - This is about document structure (reading order), not page layout.

**Invention encouragement / prohibition:**

- No invention language of any kind. This specialist is purely about PROTOCOL — how to structure builder-facing documents. It does not interact with spatial/structural questions at all.

**VERDICT:** Specialist 5 produces process intelligence about document format. Zero bearing on spatial/structural invention.

---

### FILE 6: `specialist-4-prompt.md` (366 lines)

**Spatial / Layout / Structural mentions:**

- Line 71: `"Container max-width (940-960px for general builds, 860-1100px documented range)"`
  - Container width convention — a CONSTRAINT on structure, not a generation of structure.

- Lines 179-194: Category 4 — Creative Territory:
  - Line 189: `"Zone count and proportions (how many zones, how large, within the breathing zone requirement)"`
  - Line 193: `"Responsive adaptation strategy (how layout changes at 1024px and 768px — within readability requirements)"`
  - These are the ONLY places where structural decisions are marked as creative territory. But the framing is about CHOICES WITHIN CONSTRAINTS, not about inventing fundamentally new structural approaches.

**Invention encouragement / prohibition:**

- Line 195: `"For each freedom, state what CONSTRAINTS bound it"`
  - Even creative territory is presented through the lens of constraints. The builder learns WHERE they can act, but the emphasis is on the BOUNDARIES, not on what novel structures might be possible.

**VERDICT:** Specialist 4 maps constraints and freedoms. The creative territory section IS the closest the pipeline comes to explicitly authorizing structural invention — but it frames freedom as "choices within constraints" rather than "here are structural possibilities you might explore." The emphasis is cartographic (mapping what exists), not generative (proposing what could exist).

---

### FILE 7: `synthesizer-prompt.md` (741 lines)

**Spatial / Layout / Structural mentions:**

- Lines 117-149: Section 1 zone architecture overview:
  - `"Zone count: [N zones]"`
  - `"Density progression: [LOW → MED → HIGH → PEAK → RESOLUTION or similar]"`
  - `"ASCII density diagram"`
  - Zone architecture is VERTICAL (density varies over scroll time). It is not about 2D spatial organization, hub layouts, or structural variety.

- Lines 344-381: Section 4 Zone Architecture:
  - `"Zone-by-Zone Recipe"` with per-zone: Content, Density, Mechanisms, Components, Spacing, Emotional register
  - Again, entirely VERTICAL. Each zone is a horizontal band. The recipe never asks "could this zone use a different layout than single-column?"

**Section 10: Compositional Questions — THE CRITICAL BOTTLENECK**

- Lines 236-301: Section 10 is assembled from 3 sources:
  - Source 1: TC Brief experimental questions (2-3, carried verbatim)
  - Source 2: Knowledge Base question families (2-3, adapted)
  - Source 3: Cross-specialist synthesis question (1)

- Lines 246-253: THE 5 KB QUESTION FAMILIES:
  ```
  | Family | Template |
  | Certainty Encoding | "What if visual weight mapped to [epistemic/authority/confidence gradient]..." |
  | Fractal Self-Similarity | "What if the same structural rhythm repeated at [N] scales..." |
  | Velocity Interleaving | "What if every [heavy/slow] content element had a [light/fast] breathing partner?" |
  | Atmospheric Signature | "What if each [zone/section/stratum] had a unique atmospheric signature..." |
  | Temporal Compression | "What if the page's visual density compressed over time..." |
  ```

  **CRITICAL FINDING: ALL 5 KB QUESTION FAMILIES ARE TEXTURE QUESTIONS.**
  - Certainty Encoding → how visual weight maps to meaning (texture: border-weight, padding, bg-color, font-size, line-height)
  - Fractal Self-Similarity → how rhythm repeats at scales (texture: padding ratios, font-size ratios)
  - Velocity Interleaving → how elements alternate (texture: component selection, spacing, background)
  - Atmospheric Signature → how zones feel different (texture: bg-color, line-height, letter-spacing, padding)
  - Temporal Compression → how density changes over scroll (texture: progressive padding reduction, typography tightening)

  **ZERO of the 5 families ask about spatial ORGANIZATION:**
  - No family asks: "What reading path should this page create?"
  - No family asks: "Could this content use a non-linear layout?"
  - No family asks: "What if different sections used fundamentally different spatial structures?"
  - No family asks: "What axis geometry would serve this content's argumentative structure?"
  - No family asks: "What if this page had a navigation hub that connected to satellite content zones?"

**Invention encouragement / prohibition:**

- Line 254: `"Adaptation instruction: Do NOT copy template questions verbatim. Rewrite each in the vocabulary of THIS content's metaphor."`
  - ADAPTATION is permitted, not INVENTION. The synthesizer rewrites existing question types for new content — it does not create entirely new question types.

- No instruction says "If the content suggests a structural question that doesn't fit these 5 families, CREATE ONE."

**VERDICT:** The synthesizer is the SECOND CRITICAL BOTTLENECK (after tc-derivation.md). Section 10's 5 KB question families DEFINE the universe of compositional questions. All 5 are texture questions. Even if the TC agent miraculously produced a structural question, the synthesizer would have no KB family to categorize or reinforce it. The cross-specialist synthesis question (Source 3) COULD theoretically be structural, but the instruction says to "derive from the INTERSECTION of all 5 specialist findings" — and all 5 specialists output texture-level intelligence.

---

### FILE 8: `builder-pass-1-prompt.md` (386 lines)

**THE BUILDER — WHERE STRUCTURAL DECISIONS ACTUALLY HAPPEN**

**Spatial / Layout / Structural mentions:**

- Lines 37-40: What the builder is building:
  ```
  1. Zone skeleton — The major spatial divisions of the page
  2. Mechanism deployment
  3. Typography hierarchy
  4. Responsive scaffolding
  5. Content mapping
  ```
  - "Zone skeleton" IS structural, but it's built FROM the package's zone architecture (Section 1 overview + Section 4 recipe). The builder follows the package's zone recipe, not their own structural invention.

- Lines 151-184: Build Process — Boundary-by-Boundary:
  - `"Build zone-by-zone, NOT channel-by-channel."`
  - `"At each zone boundary, set ALL channels simultaneously"`
  - This is about HOW to build zones, not WHAT zones to build. The zone structure comes from the package.

- Lines 166-184: Transition Table:
  - The builder writes a transition table BEFORE writing CSS. But the transition table describes CHANGES BETWEEN ZONES (bg shift, type change, spacing change) — it's a texture transition map, not a structural plan.

**Invention encouragement / prohibition — THE SMOKING GUN:**

- Lines 362-363: **"Do NOT invent mechanisms that aren't in the package — the package was curated by specialists who read the full knowledge base. Trust its selections."**
  - THIS IS THE EXPLICIT INVENTION PROHIBITION. Line 362-363 of builder-pass-1-prompt.md.
  - The builder is told: Do NOT invent. Trust the package.
  - The package contains no structural questions.
  - Therefore: the builder cannot invent structural approaches.

- Lines 383-385: **"You have creative authority on HOW, not WHETHER. The research package's mechanism selections, zone architecture, and findings represent curated intelligence from 26,528 lines of accumulated knowledge. Your authority is in HOW you deploy them — what CSS values, what visual weight, what rhythm. You choose the creative interpretation. You do NOT selectively omit package instructions."**
  - THIS IS THE "HOW NOT WHETHER" CONSTRAINT. Lines 383-385.
  - The builder decides HOW to deploy mechanisms (CSS values, weights) — not WHETHER to use a different structural approach.
  - "Zone architecture" comes from the package. The builder cannot propose a different zone architecture.

- Lines 218-219: `"Invention is acceptable for structural plumbing (layout grid, responsive breakpoints). Invention is NOT acceptable for mechanism deployment — the package specifies which mechanisms to deploy."`
  - "Structural plumbing" = layout grid and responsive breakpoints. This is basic CSS infrastructure, not structural invention in the sense of "use a hub-and-spoke layout instead of vertical scroll."
  - CRITICAL: The pipeline draws the line at "structural plumbing" (permitted) vs "mechanism deployment" (follow the package). But the truly interesting structural decisions (what layout to use, what reading path to create, whether to break from single-column flow) fall into NEITHER category. They are in a dead zone between plumbing and mechanisms.

**Ceiling-to-floor ratio:**
- "Do NOT" instructions: 3 (don't invent mechanisms, don't omit package instructions, don't rename custom properties)
- "You may" / "Explore" instructions: 2 (explore 2-3 compositional questions, creative authority on HOW)
- Ratio: 3:2 (ceiling:floor), but the ceiling items are HIGH-IMPACT (invention prohibition) while the floor items are LOW-IMPACT (explore questions that are already texture-oriented)

**VERDICT:** The builder-pass-1 prompt is the EXECUTION POINT of the structural gap. The builder has:
1. A zone architecture from the package (vertical scroll with horizontal bands)
2. A mechanism list from the package (texture mechanisms)
3. Compositional questions from the package (texture questions)
4. An explicit prohibition on inventing mechanisms not in the package
5. Creative authority limited to HOW, not WHETHER

A builder following this prompt cannot produce a hub grid, a clip-path transition between zones, vertical text annotations, or any structural innovation that wasn't in the package. The package doesn't contain structural innovations. Therefore: structural innovation is impossible by design.

---

### FILE 9: `builder-pass-2-prompt.md` (373 lines)

**Spatial / Layout / Structural mentions:**

- Lines 50-51: `"Map findings from Section 3 to EXISTING zones. Do not create new zones unless Section 4 specifically calls for it."`
  - EXPLICIT: Do not create new zones. Structural expansion prohibited. Pass 2 enriches within the existing zone skeleton.

- Line 73: `"Do NOT delete zones that Pass 1 created"`
  - Structural modification prohibited in BOTH directions — can't add zones, can't remove zones.

**Invention encouragement / prohibition:**

- Line 5: `"CRITICAL RULE: DO NOT rebuild from scratch. Refine what exists."`
  - The enrichment pass is definitionally non-structural. It adds CSS to existing zones.

- Lines 99-109: Question deepening:
  - `"Deepening means extending to additional channels"`
  - `"A fully-explored question should produce CSS changes across 5-7 visual channels varying together"`
  - Even question exploration in Pass 2 is about CHANNEL COORDINATION (texture), not structural change.

**VERDICT:** Pass 2 is explicitly constrained to enrichment WITHIN existing structures. Even if a structural question somehow survived to this point, the builder could not act on it — they cannot modify zone architecture.

---

### FILE 10: `builder-pass-3-prompt.md` (375 lines)

**Spatial / Layout / Structural mentions:**

- Line 5: `"CRITICAL RULE: This is a HARDENING pass, not a creative pass. Do not add new features. Fix, polish, and verify."`
  - Hardening = defensive. Zero structural authority.

- Lines 65-70: Continuity Rule:
  - `"Do not add new creative features (no new zones, no new metaphor expressions)"`
  - `"Do not restructure the zone architecture"`
  - Structural modification explicitly prohibited.

**VERDICT:** Pass 3 has zero bearing on structural invention. It is purely defensive.

---

### FILE 11: `SKILL.md` (Orchestrator — ~600+ lines)

**Relevant to structural questions:**

- Lines 386-388: Rotation rationale:
  - `"Transformer attention follows a U-shaped curve: primacy (beginning) and recency (end) get disproportionate weight; the middle gets compressed. Rotation ensures EVERY section gets primacy position exactly once."`
  - Rotation is a DELIVERY mechanism — it ensures all package sections reach the builder. But if the package contains no structural questions (which it doesn't, per the synthesizer analysis), rotating it changes nothing.

- The SKILL.md orchestrator does not generate structural questions. It routes files between agents. If the files contain no structural intelligence, the orchestrator faithfully delivers an absence.

**VERDICT:** The orchestrator is plumbing. It cannot introduce or filter structural questions. It faithfully transmits whatever the pipeline produces — which, per the analysis above, is purely texture-level intelligence.

---

## The Complete Compression Chain

### Where Structural Questions Are Born (and Immediately Die)

```
STAGE 1: Content → TC Derivation Agent
  ↓
  The TC prompt asks for "spatial flow" (line 34) — vague enough to mean anything
  The TC prompt's example questions are ALL texture questions (lines 73-75)
  The TC agent, following exemplars, produces texture questions
  STRUCTURAL QUESTIONS: ~0% generated (exemplar-steered toward texture)
  ↓
STAGE 2: TC Brief → 5 Specialists (parallel)
  ↓
  Specialist 1 (Findings Mapper): RATES existing findings against content. Cannot generate new structural ideas.
  Specialist 2 (Validation Mapper): TRACES provenance chains. Cannot generate new structural ideas.
  Specialist 3 (Case Study Analyst): EXTRACTS techniques from prior builds. Techniques are CSS-level (texture).
  Specialist 4 (Constraints Compiler): MAPS constraint landscape. Maps freedom areas but doesn't suggest structural possibilities.
  Specialist 5 (Protocol Analyst): ANALYZES document format. Zero structural content.

  All 5 specialists: PASS-THROUGH for TC questions (preserved verbatim).
  No specialist generates structural questions.
  STRUCTURAL QUESTIONS: Still ~0% (pass-through of texture questions)
  ↓
STAGE 3: 5 Specialist Outputs → Synthesizer
  ↓
  Synthesizer assembles Section 10 from 3 sources:
    Source 1: TC Brief questions (texture, carried verbatim) = 2-3 questions
    Source 2: KB Question Families (ALL 5 are texture families) = 2-3 questions
    Source 3: Cross-specialist synthesis (derived from texture outputs) = 1 question

  Section 10: 5-7 questions, ALL texture questions
  STRUCTURAL QUESTIONS: 0% (guaranteed by KB families being 100% texture)
  ↓
STAGE 4: 3 Package Files → Builder (3-pass rotation)
  ↓
  Builder Pass 1:
    - Zone architecture from package (vertical scroll with horizontal bands) — structural decision MADE FOR the builder
    - Mechanisms from package (texture mechanisms) — structural vocabulary absent
    - Questions from Section 10 (texture questions) — structural exploration impossible
    - EXPLICIT PROHIBITION: "Do NOT invent mechanisms not in the package" (line 362-363)
    - EXPLICIT SCOPE: "Creative authority on HOW, not WHETHER" (line 383-385)
    STRUCTURAL QUESTIONS: 0% (prohibited from inventing, no structural input to act on)

  Builder Pass 2:
    - "Do not create new zones" (line 50-51) — structural expansion prohibited
    - Enriches WITHIN existing zones — texture only
    STRUCTURAL QUESTIONS: 0% (structurally frozen)

  Builder Pass 3:
    - "Do not add new features. Fix, polish, and verify." (line 5)
    - "Do not restructure zone architecture" (line 66)
    STRUCTURAL QUESTIONS: 0% (defensive only)
  ↓
FINAL OUTPUT: HTML with rich texture, zero structural invention
```

---

## The Three Kill Points

### Kill Point 1: TC Derivation Exemplars (tc-derivation.md, lines 73-75)
**What dies:** Structural questions are never born. The TC agent follows exemplar questions that are 100% texture-oriented. A question like "What if this page used a radial hub layout with satellite content zones?" would never be generated because the exemplars train toward "What if visual channels compressed as you descend?"

### Kill Point 2: Synthesizer's 5 KB Question Families (synthesizer-prompt.md, lines 246-253)
**What dies:** Even if a structural question somehow emerged from TC, the synthesizer has no KB family to categorize or reinforce it. All 5 families (Certainty Encoding, Fractal Self-Similarity, Velocity Interleaving, Atmospheric Signature, Temporal Compression) are texture families. A structural question would be an orphan — uncategorizable, unreinforced, likely dropped during deduplication or adaptation.

### Kill Point 3: Builder's Invention Prohibition (builder-pass-1-prompt.md, lines 362-363, 383-385)
**What dies:** Even if a structural question somehow survived through TC and synthesizer, the builder is explicitly prohibited from inventing mechanisms not in the package and limited to "creative authority on HOW, not WHETHER." A structural question that arrived in Section 10 would be unactionable — the builder has no mechanism vocabulary for structural invention and is told to trust the package.

---

## Could the Pipeline Produce a Hub Grid, Clip-Path Transition, or Vertical Text Annotation?

### Hub Grid (central navigation index with satellite content zones)
- TC derivation: Would need to ask "What if the page had a navigation hub?" — not trained by exemplars
- Specialists: No specialist produces hub-grid findings (R4 covers Z, F, Bento, Spiral, Choreography — no hub)
- Synthesizer: No KB family for spatial organization questions
- Builder: Even if question arrived, "Do NOT invent mechanisms" prevents implementation
- **Pipeline answer: NO**

### Clip-Path Transition (non-rectangular zone boundary using CSS clip-path)
- TC derivation: Could theoretically ask "What if zone boundaries were non-rectangular?" — but exemplars steer away
- Specialists: No specialist flags clip-path as a technique (it doesn't exist in R1-R5 or stage findings)
- Synthesizer: No mechanism named "clip-path transition" in any package section
- Builder: clip-path is CSS, which falls under "structural plumbing" (permitted) — BUT the builder would only deploy it to implement a package mechanism, and no package mechanism calls for clip-path
- **Pipeline answer: NO**

### Vertical Text Annotation (rotated text running vertically alongside content)
- TC derivation: Could ask "What if annotations ran vertically alongside the primary reading path?"
- Specialists: No finding in R1-R5 covers vertical text annotations
- Synthesizer: No mechanism or question family for text rotation/orientation
- Builder: Not in the mechanism vocabulary, not in any question, "Do NOT invent" applies
- **Pipeline answer: NO**

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total prompt files analyzed | 10 |
| Files mentioning spatial organization | 3 (tc-derivation vaguely, S1 passively, S3 for content-shape affinity) |
| Files encouraging structural invention | 0 |
| Files prohibiting structural invention | 3 (builder-pass-1 explicitly, builder-pass-2 and 3 implicitly) |
| KB question families that are structural | 0 of 5 |
| KB question families that are texture | 5 of 5 |
| Explicit "Do NOT invent" instructions | 1 (builder-pass-1, line 362-363) |
| Explicit "HOW not WHETHER" constraints | 1 (builder-pass-1, line 383-385) |
| Explicit "Do not create new zones" | 1 (builder-pass-2, line 50-51) |
| Explicit "Do not restructure" | 1 (builder-pass-3, line 66) |
| Example questions that are structural | 0 of 4 (2 in tc-derivation, 5 families in synthesizer) |
| Points in the chain where structural questions can be BORN | 1 (TC derivation — but steered by texture exemplars) |
| Points in the chain where structural questions are KILLED | 3 (see Kill Points above) |

---

## The Fundamental Architecture

The pipeline is a **texture maximizer with structural defaults**. Structure is decided ONCE (zone architecture in the TC brief and package) and then FROZEN. All subsequent work enriches texture within the frozen structure. The 5 KB question families, the 5 specialists, the 3 builder passes, and the explicit invention prohibition ensure that the only CSS decisions the builder makes are about HOW to vary visual channels within predetermined zones — never about WHETHER the zones themselves should be shaped differently.

This is not a bug in any single file. It is a systemic property: the pipeline's information architecture has no pathway for structural questions to travel from content analysis to CSS implementation. Structural invention requires a pathway that does not exist.

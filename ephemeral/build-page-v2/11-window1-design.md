# Window 1 Design: TC Derivation + BUILD in One Context

**Author:** window1-spec (Task #17)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## The Core Insight

Window 1 is the only place in the pipeline where CREATIVE WORK happens from scratch. Everything else (evaluation, refinement) is response work. This window must maximize creative headroom while ensuring the agent produces three deliverables: an HTML page, a conviction brief, and a reflection.

The agent in this window is simultaneously the TC agent (derives the metaphor) AND the builder (writes the CSS). This is not a compromise -- it is an advantage. The agent that constructs the metaphor builds from genuine conviction because the metaphor is theirs. There is no handoff loss, no compliance drift, no "I was told this is geological."

---

## Optimal Reading Order

The reading order is the most consequential architectural decision in Window 1. It determines what processing mode the agent is in when each piece of material arrives. Wrong order produces a compliance agent that builds to spec. Right order produces a creative agent that builds from conviction.

### The Sequence (7 steps)

```
Step 1: Receiving Principle (5 lines)                    -- identity activation
Step 2: TC Skill (~340 lines)                            -- creative process guide
Step 3: Raw Content (varies, 500-5000 lines)             -- the material itself
    [AGENT DERIVES METAPHOR + WRITES CONVICTION BRIEF]
Step 4: Identity Files (~600 lines)                      -- world physics
    [AGENT READS AFTER BRIEF IS WRITTEN]
Step 5: Mechanism Catalog (~751 lines)                   -- tools vocabulary
Step 6: Components CSS (~944 lines)                      -- base library
Step 7: Conventions Brief (~40 lines)                    -- mechanical constraints
    [AGENT BUILDS THE PAGE]
    [AGENT WRITES REFLECTION]
```

### Why This Order

**Steps 1-3 form the CREATIVE PHASE.** The agent reads the TC skill, then reads the content deeply, then runs the derivation pipeline (questioning, tension, metaphor, brief). No vocabulary files, no components, no constraints. The agent's first creative act happens in a context that contains only process guidance and raw material.

**The conviction brief is written BEFORE Steps 4-7.** This is the phase gate. The metaphor is committed, the opposition map is constructed, the compositional arc is imagined -- all before the agent knows what border weights are available or how many components exist. The brief cannot be contaminated by vocabulary because vocabulary hasn't arrived yet.

**Steps 4-6 arrive as TOOLS after conviction is established.** When the agent reads prohibitions.md, it processes them as the physics of the world it has already imagined. When it reads the mechanism catalog, it finds tools for implementing decisions it has already made. When it reads components.css, it finds starting points for structures it has already conceived. The creative direction is set; the vocabulary enables execution.

**Step 7 (conventions) arrives LAST.** The 40-line mechanical constraints document enters a context already saturated with creative intent. "Container: 940-960px" is absorbed as a parameter, not as the first thing the agent thinks about. "Adjacent zone backgrounds: >= 15 RGB difference" is a minimum the agent's conviction brief already satisfies (because the calibration section specifies hex values that are perceptibly different -- the physics are in the creative choice, not in the floor).

### What Happens If Order Is Wrong

**If identity files come before content:** The agent reads 22 prohibitions and 65 tokens before encountering the material. Its first encounter with the content is through a compliance lens: "how does this content fit within the constraints?" Instead of: "what does this content need?"

**If mechanism catalog comes before metaphor:** The agent reads 18 mechanisms and thinks: "which mechanisms should I use?" This is vocabulary-first composition -- the opposite of content-first. The metaphor becomes a selection from the mechanism menu rather than a construction from the content's tension.

**If conventions come early:** The agent absorbs "940-960px container" as a primary constraint. Every subsequent creative decision is bounded by container-awareness. The agent that reads conventions last thinks about the page's compositional arc; the agent that reads conventions first thinks about fitting content into 940px.

---

## Context Budget Breakdown

The agent's context window is approximately 200K tokens. Here is how it is allocated:

| Content | Lines | ~Tokens | % of Window |
|---------|-------|---------|-------------|
| Receiving principle | 5 | ~100 | <0.1% |
| TC Skill (simplified) | ~340 | ~8,500 | ~4% |
| Raw content | 500-5,000 | 2,500-25,000 | 1-13% |
| Identity files (prohibitions + tokens) | ~600 | ~15,000 | ~8% |
| Mechanism catalog | ~751 | ~18,750 | ~9% |
| Components CSS | ~944 | ~23,600 | ~12% |
| Conventions brief | ~40 | ~1,000 | ~0.5% |
| **Total input** | **~3,180-7,680** | **~69,450-91,950** | **~35-46%** |
| **Creative headroom** | | **~108,000-130,500** | **~54-65%** |

The agent retains 54-65% of its context for creative work: running the TC derivation, writing the conviction brief, building HTML+CSS, and writing the reflection. For a typical content file (~2,000 lines), the agent has approximately 60% headroom -- enough for a substantial page build with full compositional depth.

### Budget Risk: Long Content

For content files exceeding 4,000 lines, the creative headroom drops below 55%. At 5,000+ lines of content, the agent is at ~54% -- still workable but tight for a complex page. The orchestrator should warn the user if content exceeds 4,000 lines, and suggest condensing the content map (not the content itself -- the agent still reads it all, but the brief's content map can be more compressed).

### What NOT to Load

The following files are intentionally excluded from Window 1:

- **Case studies / explorations** -- Anti-gravity R1 prohibits these during derivation. Even after metaphor commitment, loading 3-4 explorations (~6,000-8,000 lines) would consume 15-20% of context. The benefit (creative challenge via generative opposition) does not justify the cost (reduced building headroom) in the combined-window model. Explorations are a luxury of the multi-window model where TC and Build had separate context budgets.

- **Research files (R1-R5)** -- The mechanism catalog already distills research into building-ready vocabulary. Loading raw research would be reading the bibliography instead of the textbook.

- **Gate runner code** -- The orchestrator runs gates. The builder never sees gate code.

- **PA skill file** -- The orchestrator extracts questions. The builder never sees the PA protocol.

- **Previous build artifacts** -- Window 1 is always a fresh build. Prior attempts (if RETHINK) are excluded except for the metaphor to avoid.

---

## The 5-Line Receiving Principle

```
RECEIVING PRINCIPLE:
1. Read the content as a reader first. What excites you about this material?
2. Derive your metaphor from the content's tension with the design system. The metaphor is yours.
3. Write your conviction brief -- this is your creative commitment, not a document for someone else.
4. Read the vocabulary files AFTER your brief is written. They are tools, not instructions.
5. Build from your conviction. Your perception is the tiebreaker on every creative decision.
```

### Why These 5 Lines

**Line 1** establishes the agent as READER before DESIGNER. The first encounter with content should produce excitement, curiosity, or engagement -- not structural analysis. "What excites you" activates evaluative response, not extractive scanning.

**Line 2** states creative ownership. "The metaphor is yours" makes the derivation a personal creative act, not an assignment. "Derive from tension" points to the TC skill's process without prescribing an outcome.

**Line 3** separates the conviction brief from compliance documentation. "Your creative commitment" means the brief is written for the agent's own use during building. "Not a document for someone else" prevents the agent from writing a handoff document (which is what TC briefs became in the old pipeline -- compliance documents dressed as creative briefs).

**Line 4** is the phase gate in plain language. The vocabulary files arrive later in the prompt, but this line tells the agent WHY: "after your brief is written" establishes temporal ordering. "Tools, not instructions" establishes the relationship between vocabulary and creative work.

**Line 5** establishes creative authority for the build phase. "Your perception is the tiebreaker" means: when the conviction brief suggests #F5F0E8 for mid-stratum and the agent perceives that shade as too close to the surface zone, the agent's perception wins. This prevents conviction-brief-compliance during building.

### What the Receiving Principle Does NOT Do

It does not mention:
- Container width, soul constraints, or any specific rule (that is the conventions brief's job)
- The TC skill's phases by name (the agent discovers those by reading the skill)
- Any output format or file path (the agent prompt handles those separately)
- Evaluation criteria or quality bars (the agent's job is to create, not to pre-evaluate)

The receiving principle is ORIENTATION, not instruction. It takes 10 seconds to read and shapes 2+ hours of creative work.

---

## The Agent's Journey (What Actually Happens)

### Phase A: Content Inhabitation (~10-15 minutes)

The agent reads the TC skill, which tells it to read the content deeply first. The agent then reads the raw content as a reader. Not as a designer scanning for structure. Not as an engineer counting sections. As a reader encountering writing for the first time.

The agent notices:
- Where the content surprises them
- Where the content changes register (from narrative to technical, from measured to passionate)
- Where the content's energy peaks and troughs
- What the content is ABOUT at the level of human experience (not at the level of information architecture)

This is the most important 10 minutes of the entire pipeline. Every downstream decision rests on the quality of this first reading.

### Phase B: TC Derivation (~15-20 minutes)

Following the TC skill's phases:

**Phase 0:** Content assessment -- type, scope, section identification. The deep-read instruction (new to the simplified TC skill) is already done.

**Phase 1:** Core questioning -- FEEL/UNDERSTAND/DO/BECOME applied to this content. The agent discovers what axes the content demands beyond the core four. Each axis produces needs with structural properties.

**Phase 2:** Tension derivation -- Side A (content needs) vs Side B (KortAI's sharp warm world). The Addition Test, BECAUSE test, and SUBSTITUTION test identify genuine tension. The agent identifies 2-5 genuine tensions and ranks them by creative energy.

**Phase 3:** Metaphor collapse -- structural properties from both sides overlap. The agent constructs a search query, explores domain candidates, evaluates them for structural depth vs decorative labeling, and selects one. The structural/decorative test: "Remove every text label referencing the metaphor. Does the page still feel like the metaphor? If no, reject."

**Governing Evaluation bridge:** RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE. This formula reframes quality before the brief is written.

### Phase C: Conviction Brief (~10-15 minutes)

The agent writes the conviction brief in 5 sections, approximately 50 lines total. This is written FOR THEMSELVES -- the agent will use it as their own creative anchor during building. It also travels to Window 2 (PA auditors see sections 1+4) and Window 3 (REFINE builder reads all of it).

### Phase D: Vocabulary Absorption (~5-10 minutes)

After writing the conviction brief, the agent reads:
1. Prohibitions.md -- the 22 rules that define what is NOT KortAI
2. Tokens.css -- the palette, type scale, spacing scale, border weights
3. Mechanism catalog -- 18 mechanisms available for compositional expression
4. Components.css -- 31KB of base component CSS to adapt

The agent processes these as TOOLS for implementing decisions already made. The prohibitions are the physics of the world already imagined. The mechanisms are the vocabulary available for the story already planned.

### Phase E: Building (~45-90 minutes)

The agent writes the HTML page. Full creative freedom within the world and vocabulary. The agent:

- Uses the conviction brief's compositional arc as their creative north star
- Applies mechanisms from the catalog that serve their metaphor
- Adapts components from the CSS library to their zone architecture
- Works boundary-by-boundary (setting all channels at each zone transition) rather than channel-by-channel
- Uses concept-based CSS naming from their metaphor (`.geological-bedrock` not `.section-dark`)
- Embeds all CSS in the HTML file (self-contained, no external dependencies)
- Includes ARIA landmarks, semantic HTML, responsive breakpoint at 768px

The agent does NOT:
- Check gates during building (the orchestrator handles gates after)
- Score their own work against PA questions
- Count mechanisms or measure RGB deltas
- Reference the conventions brief as a checklist to verify against

The conventions brief's values are absorbed into the building process, not applied as post-build verification. The agent who read "container: 940-960px" sets `max-width: 960px` once and never thinks about it again.

### Phase F: Reflection (~5-10 minutes)

After building, before any audit, the agent writes the 3-dimension reflection.

---

## Conviction Brief Format

5 sections, approximately 50 lines total. Written by the builder for the builder -- but also read by PA auditors (sections 1+4 only) and the REFINE builder (all sections).

### Section 1: WORLD-DESCRIPTION (~10 lines)

The world this page lives in. The metaphor as natural law. The BECAUSE statement.

**What it contains:**
- The world's physics stated as properties, not prohibitions ("Every surface is sharp and flat. Light falls directly." not "No border-radius. No box-shadow.")
- The metaphor embedded as how this world works ("In this world, knowledge compresses under pressure. Deeper = denser + darker.")
- The content's specific gravity ("This content has three registers: loose conversational, compressed technical, erupting provocative.")
- Why THIS metaphor for THIS content ("The content literally describes layers of institutional dysfunction settling over time.")

**What it does NOT contain:**
- Constraint lists or "MUST NOT" language
- Perception thresholds or compliance checks
- Catalog numbers for mechanisms

### Section 2: CALIBRATION (~5 lines)

The palette arc, spacing arc, and typography arc for this specific page.

**What it contains:**
- Background hex progression (e.g., `#FEF9F5 -> #F5F0E8 -> #EDE6DA -> #1A1A1A`) with perceptual annotations ("the warmth IS the voice" / "the cream reads as stone, not skin")
- Spacing character as compression behavior ("breathes at 72px surface, tightens to 48px mid, compresses to 32px deep")
- Typography shifts as voice changes ("loose Inter 18px/1.8 at surface, tight Inter 16px/1.6 at depth, Instrument Serif erupts at the climax")

**Critical framing:** Values are described with their perceptual consequences and their contextual conditions. "#F5F0E8" is accompanied by "about 20 RGB points cooler in the green channel -- because the content doesn't announce its register change, it drifts there." The value is a starting point; the consequence is the criterion for adjusting it.

### Section 3: OPPOSITION (~5 lines)

The 2-3 genuine tensions as creative invitations.

**What it contains:**
- Each tension stated as: "The content wants X. The world is Y. The creative territory lives in [specific zone/boundary]."
- The DOMINANT opposition (shaped the metaphor most deeply)
- The UNRESOLVED opposition (where both poles are valid -- the builder decides)

**What it does NOT contain:**
- Mechanism inventories with catalog numbers
- Rejected mechanism lists
- Per-category minimums

### Section 4: ARC (~10 lines)

The reader's experiential journey through the page.

**What it contains:**
- The journey described as what the reader EXPERIENCES, not what the CSS specifies
- For each major transition: the FEELING ("stepping from a porch into a hallway -- the space narrows, the light changes, but you're still in the same building")
- The CLIMAX: where maximum intensity occurs and why
- The RESOLUTION: how the page releases tension
- 3-5 creative waypoints where the builder should invest compositional energy

### Section 5: CONTENT MAP (~15 lines)

Reference material for the build.

**What it contains:**
- Section outline (1 line each)
- Register annotations per section (NARRATIVE / REFERENCE / CODE / PROVOCATIVE)
- Word counts per section (for height estimation)
- Structural features (lists, code blocks, tables, Q&A pairs)
- Emotional arc annotations (where energy peaks and troughs in the writing itself)

### What Is Absent (and Why)

**No CREATIVE CONDITIONS section.** In the old pipeline, the TC agent suggested experiments for a downstream builder. In Window 1, the builder IS the TC agent. Suggesting experiments to yourself is nonsensical -- you will experiment as creative opportunity arises during building. The conviction brief invites through its arc and opposition, not through a list of "try this."

**No EXPLORATION RECOMMENDATION.** Explorations are not loaded in Window 1. The orchestrator controls context loading. This is an orchestrator concern, not a TC concern.

---

## 3-Dimension Reflection Format

Written AFTER building, BEFORE any audit. Captures creative state at the moment of completion.

### Dimension 1: CONVICTION / EXECUTION (~5-7 sentences)

**Prompt to the builder:**

> What were you trying to make? Where did you succeed and where did you fall short? Describe the page you were aiming at -- not the page you made, but the page in your head. Where does the finished artifact match that vision? Where does it miss?

**What this captures:**
- The gap between intent and execution (creative fuel for the REFINE builder)
- Specific CSS decisions that worked and specific moments that fell short
- Honest assessment of the compositional arc's realization

**Why this matters for Window 3:** The REFINE builder reads this and understands what the original builder was REACHING for. They can extend the reach rather than starting from scratch. "The bedrock arrives as earned authority but the transition into it is too fast" tells the REFINE builder exactly where to invest energy.

### Dimension 2: ALTERNATIVES (~4-6 sentences)

**Prompt to the builder:**

> What roads did you not take, and why? Name 2-3 things you considered doing but didn't. For each: what stopped you -- a constraint, a judgment call, or a time/context limit? What creative energy was suppressed that might find expression in a different builder's hands?

**What this captures:**
- Deferred creative possibilities (not failures, but unexplored territory)
- Suppressed impulses that the REFINE builder could pursue
- The distinction between constraint-stopped (can't be helped), judgment-stopped (might be wrong), and context-stopped (different builder might succeed)

**Why this matters for Window 3:** The REFINE builder's receiving principle says: "The previous builder's reasons for rejection may not apply to YOU." Alternatives are offerings, not rejected options. The REFINE builder who reads "I wanted warm eruption instead of dark inversion but the contrast was insufficient at 960px" might discover that at their scale, the warm approach works.

### Dimension 3: UNRESOLVED (~4-6 sentences)

**Prompt to the builder:**

> What tension remains? What aesthetic conflicts couldn't you fully resolve? What surprised you during building -- a relationship you didn't plan, a rhythm that emerged, a mismatch you couldn't fix? What would you tell the next builder about this page?

**What this captures (merged from the old 6-dimension model's SURPRISES + EXPERIENCE + UNRESOLVED):**
- Emergent discoveries (the border-weight arc that nobody planned)
- Experiential qualities (what scrolling through the page actually feels like)
- Live aesthetic tensions (two good ideas competing, neither resolved)
- Direct creative guidance for the next builder

**Why merging works:** SURPRISES, EXPERIENCE, and UNRESOLVED all point the REFINE builder toward the page's creative frontier. Surprises say "something emerged here." Experience says "this is what it feels like to scroll." Unresolved says "this tension is still alive." All three are FORWARD-POINTING creative signals. Merging them into one dimension lets the builder write freely about the page's creative state without artificially separating intertwined observations.

### Reflection Rules

1. **Written BEFORE audit.** The reflection is the builder's honest creative account, not post-audit rationalization. PA findings are separate.

2. **Written as DIRECTION, not as FINDINGS.** "The quiet zone wants to feel like a clearing" is direction. "The quiet zone has insufficient mechanism density" is a finding. Direction enables the next builder. Findings produce compliance.

3. **Total: approximately 15-20 sentences across 3 dimensions.** This is a creative handoff. If it exceeds 25 sentences, the builder is analyzing instead of reflecting.

4. **Verifiable against the artifact.** Every claimed CSS decision should correspond to actual CSS in the HTML file. Specificity of tradeoffs ("the warm version, when I tried it at 960px width, looked decorative") resists confabulation. Abstract claims ("I wanted it to feel warm") are harder to verify.

---

## TC Skill Integration (~340 Lines in Same Context)

The simplified TC skill (Task #5's output) is read by the builder before the content. It serves as a creative process guide -- not a protocol to follow mechanically, but a thinking framework that shapes how the builder encounters and constructs meaning from the content.

### What the Builder Uses from TC

| TC Phase | What It Does in Window 1 | Time |
|----------|-------------------------|------|
| Phase 0 | Content type/scope routing, deep read instruction | 5 min |
| Phase 1 | Core four questioning + discovered axes | 10 min |
| Phase 2 | Tension derivation (Addition/BECAUSE/SUBSTITUTION) | 10 min |
| Phase 3 | Metaphor collapse + structural/decorative check | 10 min |
| Governing Evaluation | RICHNESS = DENSITY x RESTRAINT x CONFIDENCE | 1 min |
| Phase 4 (new) | Conviction brief writing (5 sections) | 10 min |
| Reflection | 3-dimension reflection (written after building) | 5 min |

### What Is Stripped from TC for This Context

- **Phase 4 (old): Compositional Architecture** -- Entirely removed. The builder does pacing assessment, transition planning, and fractal consistency during building, not as pre-planning ceremony. The principles that were valuable in Phase 4 (multi-coherence, transition variety, CSS channels) move to the conventions brief.

- **Phase 3.5: Commitment Gate** -- Removed. In the same-window model, there is no downstream builder to protect from a wrong metaphor. The builder who derives a metaphor they don't believe in will notice during building and self-correct. The ONE check worth keeping (the Creative Check: "Are you excited about this metaphor?") is folded into Phase 3's closer.

- **Fix Cycle Re-Invocation** -- Removed. The orchestrator handles re-invocation. The TC skill is a creative process guide, not a lifecycle manager.

- **Extended Axes Tables** -- Cut. The builder discovers content-specific axes naturally from the instruction to "ask what the content demands."

- **Exploration Loading** -- Cut. The orchestrator controls context loading.

### How 340 Lines Fits the Budget

At ~8,500 tokens, the TC skill consumes approximately 4% of the agent's context window. This is modest -- it leaves the agent substantial headroom for the content itself and for the creative work of derivation and building.

The key design choice: the TC skill is SHORTER than any single vocabulary file (prohibitions.md at ~600 lines, mechanism catalog at ~751 lines, components.css at ~944 lines). The creative process guide takes less space than the tools it helps the builder select. This is the right proportion -- process should be lightweight, vocabulary should be rich.

---

## The Agent Prompt (What the Orchestrator Constructs)

The orchestrator builds the Window 1 agent's prompt by concatenating sections in the reading order specified above. Here is the structure:

### Section-by-Section Prompt Assembly

```
[SECTION A: Identity + Task Definition]

You are building a page from raw content. You will derive a metaphor,
write a conviction brief, and build an HTML page -- all in this session.

RECEIVING PRINCIPLE:
1. Read the content as a reader first. What excites you about this material?
2. Derive your metaphor from the content's tension with the design system. The metaphor is yours.
3. Write your conviction brief -- this is your creative commitment, not a document for someone else.
4. Read the vocabulary files AFTER your brief is written. They are tools, not instructions.
5. Build from your conviction. Your perception is the tiebreaker on every creative decision.

You must produce 3 files:
  1. {OUTPUT_DIR}/output.html -- the complete, self-contained HTML page (all CSS embedded)
  2. {OUTPUT_DIR}/_tc-brief.md -- your conviction brief (~50 lines, 5 sections)
  3. {OUTPUT_DIR}/_reflection.md -- your 3-dimension reflection (~15-20 sentences)

---

[SECTION B: TC Skill -- ~340 lines]

(The simplified tension-composition skill is inserted here verbatim)

---

[SECTION C: Raw Content]

THE CONTENT YOU ARE BUILDING FOR:

(The full raw content file is inserted here)

---

[CHECKPOINT: DERIVE AND WRITE BRIEF BEFORE READING BELOW]

STOP. Before reading the files below, complete your TC derivation:
- Run Phase 0 (content assessment + deep read)
- Run Phase 1 (core questioning + discovered axes)
- Run Phase 2 (tension derivation)
- Run Phase 3 (metaphor collapse)
- Write your conviction brief (Phase 4, 5 sections, ~50 lines)
- Save it to {OUTPUT_DIR}/_tc-brief.md

Only AFTER writing the brief, continue reading the vocabulary files below.

---

[SECTION D: Identity Files]

IDENTITY -- THE WORLD'S PHYSICS:

(prohibitions.md inserted here -- ~419 lines)
(tokens.css inserted here -- ~183 lines)

---

[SECTION E: Mechanism Catalog]

MECHANISMS -- YOUR TOOLS:

(mechanism-catalog.md inserted here -- ~751 lines)

---

[SECTION F: Components CSS]

COMPONENT LIBRARY -- YOUR STARTING POINTS:

(components.css inserted here -- ~944 lines)

---

[SECTION G: Conventions Brief]

CONVENTIONS (mechanical constraints -- absorb these, do not checklist them):
- Container: 940-960px
- Fonts: Inter (body), Instrument Serif (headings), JetBrains Mono (code)
- Borders: 1px (subtle), 3px (section), 4px (primary)
- Prohibited: border-radius, box-shadow, gradients, transforms, transitions (except opacity)
- Backgrounds: R >= G >= B on every background hex (warm palette)
- Adjacent zone backgrounds: >= 15 RGB difference (perceptible)
- Stacked gap at any boundary: <= 120px total
- Single margin/padding: <= 96px
- Characters per line: 45-80
- WCAG 2.1 AA contrast: >= 4.5:1 body text, >= 3:1 large text
- ARIA landmarks: at least header, main, footer
- Responsive: 768px breakpoint minimum
- Self-contained HTML: all CSS embedded, no external dependencies
- At each zone boundary, multiple channels should reinforce the same direction
- Vary transition types: some smooth continuations, some bridges, some full resets
- Name CSS classes from your metaphor, not generic (.geological-bedrock, not .section-dark)

---

[SECTION H: Build + Reflect Instructions]

NOW BUILD.

Build from your conviction brief. Work boundary-by-boundary -- at each zone
transition, set background, typography, spacing, and borders together. The
reader should feel they enter a different room at each boundary.

Adapt components from the library. Do not invent from scratch when a component
serves your purpose. Do not copy when your metaphor demands something different.

After building, write your reflection to {OUTPUT_DIR}/_reflection.md:

DIMENSION 1 -- CONVICTION / EXECUTION:
What were you trying to make? Where did you succeed, where did you fall short?

DIMENSION 2 -- ALTERNATIVES:
What roads did you not take? What creative energy was suppressed?

DIMENSION 3 -- UNRESOLVED:
What tension remains? What surprised you? What would you tell the next builder?
```

### Prompt Length

| Section | Lines | Purpose |
|---------|-------|---------|
| A: Identity + Task | ~20 | Set creative posture + output requirements |
| B: TC Skill | ~340 | Creative process guide |
| C: Raw Content | 500-5,000 | The material |
| Checkpoint | ~10 | Phase gate |
| D: Identity Files | ~600 | World physics |
| E: Mechanism Catalog | ~751 | Tools |
| F: Components CSS | ~944 | Starting points |
| G: Conventions Brief | ~20 | Mechanical constraints |
| H: Build + Reflect | ~20 | Build instructions |
| **Total** | **~3,205-7,705** | |

---

## The Checkpoint: How the Phase Gate Works

The prompt contains a textual checkpoint between the content (Section C) and the vocabulary files (Sections D-F):

```
STOP. Before reading the files below, complete your TC derivation...
```

This is a SOFT gate -- it relies on the agent processing the prompt sequentially and respecting the instruction to derive before continuing. It is not a programmatic enforcement. In the same-window model, hard enforcement (e.g., spawning a sub-agent for derivation) would defeat the purpose -- the builder needs to carry the derivation's creative state directly into building.

### Why a Soft Gate Is Sufficient

In the old multi-window model, the commitment gate needed to be HARD because two different agents were involved: the TC agent committed, the builder received. The risk was that the builder would pattern-match against vocabulary instead of building from conviction.

In Window 1, the builder IS the TC agent. The risk is not pattern-matching against vocabulary (the vocabulary hasn't been read yet). The risk is the agent skipping the derivation because the vocabulary files are visible below in the prompt. The soft checkpoint addresses this:

1. The receiving principle (line 4) already says "Read the vocabulary files AFTER your brief is written"
2. The checkpoint makes this spatially explicit -- the vocabulary is physically below a STOP marker
3. The TC skill's internal logic (Phase 0 -> 1 -> 2 -> 3 -> 4) provides sequential momentum

An agent that skips derivation and jumps to vocabulary would need to actively violate the receiving principle, ignore the checkpoint, AND skip the TC skill's sequential phases. This is possible but unlikely -- LLMs process prompts sequentially, and the sequential structure of the prompt naturally produces sequential execution.

### What If the Agent Ignores the Gate

If the agent produces an HTML page without a conviction brief (or produces a brief that is clearly post-hoc -- written after building), the orchestrator's structural validation catches this: brief file must exist, must be > 100 bytes, must have all 5 sections. The orchestrator cannot verify that the brief was written BEFORE the page, but the prompt structure makes this the path of least resistance.

---

## What Vocabulary the Agent Needs vs What Is Unnecessary

### Needs (Loaded)

| File | Why |
|------|-----|
| Prohibitions.md | Defines the world's absolute boundaries. Without this, the agent produces border-radius and box-shadow. |
| Tokens.css | Provides the palette, type scale, spacing scale. Without this, the agent invents colors. |
| Mechanism catalog | The 18 reusable techniques that compose rich pages. Without this, the agent builds with backgrounds and typography only -- missing border-weight gradients, zone DNA, compression arcs. |
| Components.css | 31KB of base component CSS. Without this, the agent reinvents every callout, code block, and table from scratch. With it, the agent ADAPTS -- faster, more consistent, allows creative energy to focus on composition rather than component engineering. |

### Unnecessary (Not Loaded)

| File | Why Excluded |
|------|-------------|
| Case studies (9 files, ~4,500 lines) | Anti-gravity R1 + context budget. The agent derives its own metaphor. Case studies are for divergence verification in the old model. |
| Component inventory (~300 lines) | Meta-document about the components. The agent has the CSS itself -- it doesn't need a catalog of the catalog. |
| Semantic rules (~200 lines) | Guidelines for when to use what. The agent's TC derivation already determines what to use. |
| Usage criteria (~150 lines) | Same as semantic rules -- routing guidance for a decision the agent has already made. |
| Anti-gravity compliance (~300 lines) | Process audit document. The agent's prompt structure enforces anti-gravity; the agent doesn't need to know it's being protected from pattern-matching. |
| Responsive strategy (~100 lines) | The conventions brief states "768px breakpoint minimum." The agent handles responsive design from this single constraint. |
| Research files (R1-R5, ~2,000 lines) | The mechanism catalog distills research. Raw research is for understanding, not building. |

### Edge Case: Should the Agent See Any Case Study?

No. The combined-window model's strongest advantage is that the builder derives from conviction, not from precedent. Loading even one case study risks the agent borrowing compositional strategies rather than constructing them.

If the orchestrator wants to provide creative challenge via generative opposition (the exploration recommendation concept from the design spec), this belongs in a FUTURE extension -- perhaps an optional "exploration loading" flag that the user can enable for high-stakes builds. But the default path loads zero explorations.

---

## How This Design Serves the Pipeline's Goals

### Goal 1: Pages built from genuine creative conviction, not compliance

The reading order ensures creative conviction is established (Steps 1-3, conviction brief written) before any vocabulary enters context (Steps 4-7). The agent that reads prohibitions.md after writing "In this world, knowledge compresses under pressure" processes the prohibitions as the physics of THEIR world, not as constraints imposed from outside.

### Goal 2: 54-65% creative headroom for building

The context budget allocates approximately 35-46% to input materials, leaving the majority of the window for the agent's creative work. This is substantially more headroom than the old pipeline, which loaded TC skill + explorations + identity files + mechanism catalog + components + conventions + value tables + gate runner spec -- often consuming 60-70% of context before building began.

### Goal 3: Three verifiable deliverables

The agent must produce output.html, _tc-brief.md, and _reflection.md. The orchestrator validates these structurally (exist, non-empty, required sections present) without judging quality. Quality judgment belongs to Window 2 (gates + PA).

### Goal 4: Creative tissue for Window 3

The conviction brief and reflection travel to the REFINE builder, providing first-party creative context that no audit can replace. The brief tells the REFINE builder what world this page lives in. The reflection tells them what the original builder was reaching for and what remains unresolved. Together, they enable the REFINE builder to EXTEND rather than restart.

---

## Summary: Window 1 in 10 Sentences

1. One Opus agent derives a metaphor AND builds the page in the same context window.
2. Reading order is the key architecture: content + TC skill first, vocabulary + constraints last.
3. A textual checkpoint separates the creative phase (derivation) from the implementation phase (building).
4. The conviction brief (5 sections, ~50 lines) is written BEFORE vocabulary files are read.
5. Identity files, mechanism catalog, and components CSS arrive as tools for implementing decisions already made.
6. The conventions brief (~40 lines of mechanical constraints) arrives last, absorbed as parameters, not as the primary frame.
7. The 3-dimension reflection captures the builder's creative state at completion, before any audit.
8. No explorations, no case studies, no research files -- the agent builds from conviction and vocabulary, not from precedent.
9. Context budget: ~35-46% input, ~54-65% creative headroom for a typical content file.
10. The agent's creative authority is genuine -- the receiving principle, checkpoint, and reading order all ensure that creative intent precedes compliance awareness.

---

**END OF WINDOW 1 DESIGN**

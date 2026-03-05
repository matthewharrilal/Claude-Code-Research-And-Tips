# How the Pipeline Actually Works: An Architectural Portrait

**Source:** `~/.claude/skills/build-page/SKILL.md` (956 lines)
**Date:** 2026-02-28

---

## The Shape of the System

The pipeline moves through three creative windows connected by orchestrator plumbing:

```
WINDOW 1 (Step 1):   DERIVE + BUILD     → 1 Opus agent
WINDOW 2 (Steps 2-5): EVALUATE           → 5 PA Opus auditors + 1 Opus Weaver
ROUTING  (Step 6):    Decision            → Orchestrator (mechanical)
WINDOW 3 (Step 7):   REFINE              → 1 Opus agent (different from W1)
POST     (Step 8):    Verify + Ship       → Orchestrator (mechanical)
```

Step 0 is pre-flight (parse input, create directories). Step 9 is user-escalation only (a second REFINE cycle). The orchestrator handles all mechanical work -- file copying, screenshot capture, gate execution, routing -- so that creative agents can focus entirely on creative work.

---

## Understanding the File Types

Every file the pipeline touches falls into one of four categories:

| Category | What It Does for the Builder |
|----------|------------------------------|
| **CREATIVE KNOWLEDGE** | Gives the builder conviction, exploration, research, a sense of the world -- the material that generates creative energy |
| **REFERENCE** | Provides vocabulary and options -- tokens, mechanisms, components. The builder's tools |
| **RULES** | Defines what the world is NOT -- prohibitions, constraints, limits. The world's physics stated as boundaries |
| **PLUMBING** | Orchestrator logistics invisible to creative agents -- directories, screenshots, gates, routing |

The ratio between these categories shapes the builder's creative experience more than any single file.

---

## Step 0: Preparing the Ground

The orchestrator reads the content file, validates its length (>5,000 lines triggers a warning, >8,000 stops the run), creates the output directory structure, and copies content into place. No creative agent is involved. This is pure plumbing -- setting the stage before any builder enters the room.

---

## Window 1: Where Creation Begins

### What the Builder Receives

The Window 1 builder enters a context loaded with seven files:

**[A] world-description.md** (17 lines) -- The single most effective file in the entire system. It describes the world as PHYSICS: "Every surface is sharp." "Light is direct." "Nothing floats." "Think of a well-edited magazine spread, not a software interface." This is identity expressed as atmosphere, not as prohibition. The builder who reads this feels the world they are building in before they write a line of CSS.

**[B] tension-composition/SKILL.md** (841 lines) -- The full TC pipeline. This is the richest creative knowledge in the prompt. It contains the "CONSTRUCTING not DISCOVERING" epistemological framing, multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME), the Opposition Principle (richest tension comes from axes that OPPOSE the system's personality), tension derivation methodology, and the metaphor collapse framework. Approximately 70% creative methodology, 30% process structure.

**[C] _content.md** (varies) -- The raw content the builder will compose. User-provided text that the builder reads as a reader first, before engaging as a designer.

**[D] prohibitions.md** (419 lines) -- 22 prohibitions (8 absolute, 12 conditional, 2 meta). Defines identity through what the world refuses to contain. The most compliance-oriented file in the builder's context.

**[E] tokens.css** (183 lines) -- 65 CSS custom properties. The color palette, typography trinity, spacing scale, border weights. These are the atoms -- the smallest building blocks.

**[F] mechanism-catalog.md** (751 lines) -- 18 CSS mechanisms in 5 categories (Spatial, Hierarchy, Component, Depth, Structure). These are the builder's tools. The catalog opens with a genuinely illuminating distinction between Middle-tier composition (content-structure mapping) and Ceiling-tier composition (metaphor-driven multi-channel coherence), showing how the SAME tools produce fundamentally different results depending on the builder's creative framework.

**[G] components.css** (944 lines) -- Ready-to-adapt CSS components: callouts, code blocks, tables, page structure, breathing zones. Starting points, not templates.

**Total: ~3,155 lines + content**

### The Creative Sequencing

The prompt wraps these seven files in a structure designed to shape HOW the builder engages with them:

1. **The Receiving Principle** (5 directives that frame creative ownership):
   - "Read the content as a reader first. What excites you?"
   - "Derive your metaphor from the content's tension with the design system. The metaphor is yours."
   - "Write your conviction brief -- this is your creative commitment, not a document for someone else."
   - "Read the vocabulary files AFTER your brief is written. They are tools, not instructions."
   - "Build from your conviction. Your perception is the tiebreaker on every creative decision."

2. **World description [A]** -- sets the emotional atmosphere

3. **TC Skill [B]** -- provides the creative methodology

4. **Content [C]** -- the material to be composed

5. **A STOP marker** -- "Write your conviction brief before reading the vocabulary files below." This enforces creative-first sequencing: the builder derives their metaphor and writes their conviction BEFORE encountering mechanisms and components. The builder discovers their creative direction from the content, not from the tool catalog.

6. **Identity and vocabulary** -- prohibitions [D], tokens [E], mechanisms [F], components [G] appear AFTER the stop marker. They become tools the builder reaches for in service of their conviction, rather than instructions that shape their conviction.

7. **Build instructions** -- creative direction for the actual composition:
   - "Work boundary-by-boundary -- at each zone transition, set background, typography, spacing, and borders together"
   - "The reader should feel they enter a different room at each boundary"
   - "Vary transition types: some smooth continuations, some bridges, some full resets"
   - "Name CSS classes from your metaphor, not generic"
   - "Adapt components from the library. Do not invent from scratch when a component serves your purpose. Do not copy when your metaphor demands something different."

8. **Reflection requirement** -- 3 dimensions of creative self-assessment:
   - CONVICTION: What were you trying to make?
   - ALTERNATIVES: What roads did you not take?
   - UNRESOLVED: What tension remains?

### What the Builder Produces

Three files: the HTML page (`output.html`), the conviction brief (`_tc-brief.md`), and the reflection (`_reflection.md`). The reflection becomes handoff tissue -- it carries creative understanding to the next window.

### 13 Conventions (The World's Physics)

These mechanical constraints are stated as a compact block:
- Container: 940-960px
- Fonts: Inter (body), Instrument Serif (headings), JetBrains Mono (code)
- Borders: 1px/3px/4px only
- Prohibitions: no border-radius, box-shadow, gradients, transforms, transitions (except opacity)
- Backgrounds: R >= G >= B on every background hex
- Adjacent zone backgrounds: >= 15 RGB difference
- Stacked gap: <= 120px total
- Single margin/padding: <= 96px
- Characters per line: 45-80
- WCAG 2.1 AA contrast, ARIA landmarks
- Responsive: 768px breakpoint
- Self-contained HTML

The instruction: "absorb these, do not checklist them." The builder internalizes these as the world's physics rather than mechanically verifying each one.

### What Is Present and What Is Absent

**Present:** The world-description (17 lines) and TC Skill (841 lines) together generate genuine creative energy. The STOP marker and Receiving Principle create a sequence where conviction comes first, vocabulary second. The build instructions frame composition as boundary-by-boundary room-creation. The reflection captures creative understanding for the next window.

**Absent:** No research synthesis (R1-R5 findings). No case studies (correctly phase-gated out to prevent template copying). No examples of completed pages. No "what DESIGNED looks like" reference. No emotional arc guidance beyond "different room at each boundary." No quality exemplars showing what CEILING or FLAGSHIP feels like. No previous builder reflections.

The builder's context is rich in tools and physics but lean in creative theory and calibration. The world-description paints the world in 17 lines; a richer creative knowledge stack would deepen that painting with philosophical foundation, worked examples, and compositional wisdom.

---

## Window 2: Where the Page Meets Fresh Eyes

### Screenshot Capture (Orchestrator)

The orchestrator serves the HTML, navigates a browser to it, and captures screenshots at two viewports (1440px and 768px) -- cold look (full page) plus scroll-through at 80% viewport increments. These screenshots become the ONLY input to the PA auditors. This separation is architectural: auditors see what a reader would see, uncontaminated by knowledge of intent, process, or constraints.

### Gate Runner (Orchestrator)

The gate runner executes 30 programmatic checks -- 14 required, 1 meta, 1 recommended, 9 advisory, 4 brief-validation, 1 screenshot quality. These are mechanical measurements: container width, background color compliance, spacing thresholds, contrast ratios. The gate runner produces a JSON report that informs the routing decision but NEVER reaches any creative agent. Gates measure the world's physics; auditors measure the world's experience. The two streams never cross.

### PA Auditors: Five Independent Perspectives

Five Opus agents, each receiving ONLY:
- A receiving principle that frames fresh-eyes perception
- Section 0 protocol (Cold Look + Scroll-through) for experiential anchoring
- Screenshot paths
- 4 assigned questions from the 20-question set
- A language constraint

Each auditor sees the page for the first time. They have no knowledge of the builder's intent, the conviction brief, the mechanism catalog, the gate results, the prohibitions, or each other's responses. This isolation is the architecture's most powerful design choice: it creates five genuinely independent perceptual encounters with the artifact.

**The 20 questions span five tiers of perception:**
- Tier 1 (First Encounter, Q-01 to Q-03): gut reactions, personality
- Tier 2 (Spatial Experience, Q-04 to Q-08): space, density, viewport ownership
- Tier 3 (Content-Form Relationship, Q-09 to Q-13): visual-content alignment
- Tier 4 (Compositional Coherence, Q-14 to Q-17): rhythm, drama, adaptation
- Tier 5 (What's Almost There, Q-18 to Q-20): best moment, near-miss, one change

**The language constraint** forces perceptual language. Auditors cannot use CSS property names (px, rem, padding, margin...). They describe what they EXPERIENCE: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, warm, cold, sharp, soft, alive, flat. This constraint transforms the auditor from a code reviewer into a reader having an experience.

**Question assignment distributes coverage:**

| Auditor | Questions | Tier Coverage |
|---------|-----------|--------------|
| A | Q-01, Q-05, Q-11, Q-17 | First Encounter, Spatial, Content-Form, Coherence |
| B | Q-02, Q-08, Q-14, Q-18 | First Encounter, Spatial, Coherence, Almost There |
| C | Q-03, Q-07, Q-12, Q-19 | First Encounter, Spatial, Content-Form, Almost There |
| D | Q-04, Q-06, Q-13, Q-20 | Spatial (x2), Content-Form, Almost There |
| E | Q-09, Q-10, Q-15, Q-16 | Content-Form (x2), Coherence (x2) |

Each auditor writes a Section 0 (cold look gut reactions for each viewport + scroll narrative) plus 3-8 sentences of prose per question, referencing specific screenshots.

### The Weaver: Where Perception Becomes Direction

The Weaver is the only entity in the entire pipeline that sees BOTH what the builder intended (brief + reflection) AND what the audience experienced (5 auditor reports + screenshots). This makes the Weaver the bridge between creation and reception.

**The Weaver's receiving principle:**
1. View screenshots yourself first. Write 3 sentences about what YOU experience.
2. Read all auditor reports. Notice convergence (3+ agree) and divergence (1 disagrees).
3. Convergence confirms truth. Divergence surfaces subtlety. Both matter.
4. If 3+ converge, your synthesis acknowledges it.
5. Write creative direction FOR a creator, not corrections FOR a manager.
6. Your verdict is a creative judgment, not a calculation.

**What the Weaver produces:**
1. **EXPERIENTIAL ANCHOR** -- the Weaver's own first impression, BEFORE reading auditors
2. **WHAT IS WORKING** -- convergent strengths, explained so the REFINE builder understands WHY they work
3. **WHAT IS ALMOST THERE** -- near-misses framed as creative invitations, not deficiency reports
4. **WHERE TO GO** -- creative territories:
   - AMPLIFY: The best moment -- extend it
   - RELEASE: Where tension needs resolution
   - DEEPEN: The near-miss with the shortest path to improvement
   - THE GAP: The distance between personality and best self
5. **VERDICT:** SHIP / REFINE / RETHINK + one-sentence reason

The critical design choice: the Weaver writes "creative direction FOR a creator, not corrections FOR a manager." This shapes everything. The REFINE builder reads the Weaver's synthesis not as a list of problems to fix but as a map of creative territories to explore.

---

## Routing: The Mechanical Decision

The orchestrator makes a purely mechanical routing decision based on two inputs: the Weaver's verdict keyword (SHIP/REFINE/RETHINK) and the gate results (PASS/FAIL). The routing matrix:

| Creative Verdict | Gates | Route |
|-----------------|-------|-------|
| RETHINK | any | RETHINK -- start over with a different metaphor |
| SHIP | PASS | SHIP -- deliver the artifact |
| SHIP | FAIL | Patch mechanical failures, then SHIP |
| REFINE | PASS | REFINE -- enter Window 3 |
| REFINE | FAIL | Patch mechanical failures, then REFINE |

**Mechanical patching** is deterministic -- specific CSS fixes for specific gate failures (container width correction, warm color order fix, spacing reduction, etc.). One gate (GR-45, typography variation) cannot be patched mechanically and routes to REFINE instead.

**RETHINK protocol:** Back up the current output, extract the previous metaphor, add it to the next run's prompt as a creative exclusion ("do NOT derive a metaphor related to: {metaphor}"), and restart from Step 1 with a fresh builder.

The orchestrator exercises zero creative judgment. It reads keywords, checks gate data, and routes. Every decision is mechanical.

---

## Window 3: Where the Page Becomes More of What It Already Is

### The REFINE Builder's Context

The REFINE builder receives a fundamentally different creative context than the Window 1 builder:

| What Stays the Same | What Changes |
|---------------------|-------------|
| Mechanism catalog (751 lines) | Gains: existing HTML artifact to build on |
| Components CSS (944 lines) | Gains: Weaver's creative direction (territories to explore) |
| Prohibitions (419 lines) | Gains: previous builder's reflection (creative intent + what surprised them) |
| Tokens (183 lines) | Gains: conviction brief (metaphor, arc, calibration) |
| Content (varies) | Loses: world-description (17 lines of evocative prose) |
| 13 conventions | Loses: TC Skill (841 lines of derivation methodology) |

The REFINE builder has MORE situational creative knowledge (Weaver synthesis, brief, reflection, existing HTML) but LESS foundational creative knowledge (no world-description, no TC methodology). The exchange makes sense: the REFINE builder does not need to derive a metaphor (the Window 1 builder already did that). The REFINE builder needs to understand what the previous builder created and where the creative opportunities lie.

### The Creative Framing

**Role statement:** "Your job is not to fix problems. Your job is to make the page more of what it already is." This is the key creative framing -- it positions REFINE as amplification, not correction.

**Scope of authority:** "You may restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, and extend the metaphor's expression. You may NOT replace the metaphor itself or violate the world-description." Wide latitude within metaphor constraint.

**The Receiving Principle** (5 sequential steps with checkpoints):
1. Scroll through the page first. Write 2 sentences about what you experience.
2. Read the Weaver's synthesis -- these are territories to enter, not instructions to follow. What you do in each territory is yours.
3. Read the previous builder's reflection -- what excites you? What tension is still alive?
4. Read the conviction brief -- "The gap between aspiration and reality is not failure. It is your creative territory."
5. "What is the ONE THING you want to do with this page? Start there."

The ONE THING commitment forces focus. Not three improvements. Not "address the Weaver's feedback." One thing that, if achieved, would make the builder proud of their contribution.

### What the REFINE Builder Produces

The refined HTML (overwriting the original) and a second reflection (`_reflection-v2.md`) with the same three dimensions: CONVICTION, ALTERNATIVES, UNRESOLVED.

---

## Post-Refine: Verification and Ship

The orchestrator recaptures screenshots, re-runs gates, and performs a regression check: if REFINE introduced MORE gate failures than it resolved, the orchestrator restores the pre-REFINE backup and ships that version instead. This is a safety net, not a quality gate -- it catches catastrophic regression but does not evaluate creative quality.

If mechanical failures remain after REFINE, the orchestrator applies the same deterministic patches as in routing. Then: kill the server, inventory files, print a ship report with the output path, gate summary, route taken, Weaver verdict, and auditor cold-look excerpts.

---

## The Creative Knowledge Flow

```
Window 1:  World Description → TC Skill → Content → [DERIVE + BUILD] → Brief + Reflection + HTML
                                                                              ↓
Window 2:  Screenshots ─────────────────────────────────→ 5 PA Auditors → Weaver
                                                                               ↓
Window 3:  Brief + Reflection + Weaver → Content → [REFINE] → HTML v2 + Reflection v2
```

The creative tissue between windows:
- **W1 to W2:** Screenshots only. The visual artifact, stripped of all textual creative knowledge. PA auditors encounter the page the way a reader would.
- **W2 to W3:** Weaver synthesis (creative territories) + brief (creative intent) + reflection (creative self-assessment). This is the richest transfer -- it carries both what was built and how it was perceived.

### What Each Agent Actually Sees

| Agent | Creative Knowledge | Reference | Rules | Total Non-Content |
|-------|-------------------|-----------|-------|-------------------|
| **W1 Builder** | World desc (17) + TC Skill (841) + prompt framing (~70) | Tokens (183) + Mechanisms (751) + Components (944) | Prohibitions (419) + Conventions (13) | ~3,246 |
| **PA Auditor** | Receiving principle (~30) + 4 questions (~24) | -- | Language constraint (~10) | ~72 |
| **Weaver** | Receiving principle (~30) + 5 auditor reports + brief + reflection | -- | -- | ~38 + auditor data |
| **W3 REFINE Builder** | Weaver synthesis + brief + reflection + prompt framing (~80) | Tokens (183) + Mechanisms (751) + Components (944) + existing HTML | Prohibitions (419) + Conventions (13) | ~2,395 + variable |

**The W1 builder's creative advantage:** the TC Skill -- 841 lines of creative methodology that teaches the builder HOW to think about composition.

**The W3 builder's creative advantage:** the Weaver synthesis -- creative direction born from five independent perceptual encounters with the artifact -- plus the existing HTML as a concrete starting point.

---

## Architectural Observations

### 1. The STOP Marker: Behavioral, Not Architectural

The STOP marker ("Write your conviction brief before reading the vocabulary files below") is a behavioral instruction within a single text block. The agent reads the full prompt before acting. What creates the sequencing pressure is the combined weight of the TC Skill (which reinforces phase-gating) and the STOP marker together -- strong but not absolute.

### 2. The TC Skill Is the Soul of Window 1

At 841 lines, the TC Skill constitutes 27% of the Window 1 prompt. It is the only file that teaches the builder how to THINK about composition -- the Opposition Principle, multi-axis questioning, metaphor collapse. When this file is absent (as in Window 3), the builder loses the generative methodology. They inherit the OUTPUT of creative thinking (the brief) but not the PROCESS that produced it.

### 3. Auditor Isolation Creates Genuine Fresh Eyes

PA auditors receive zero context about intent, process, mechanism selection, or constraints. They see only screenshots and perceptual questions. The language constraint (no CSS terms allowed) further enforces perceptual purity. When an auditor says a page feels "flat" or "alive," that judgment emerges from pure perceptual encounter, uncontaminated by knowledge of what the builder was trying to achieve.

### 4. The Weaver Is the Bridge

The Weaver is the ONLY entity that holds both intent and reception simultaneously. The quality of its synthesis directly determines the quality of creative direction the REFINE builder receives. A Weaver that produces corrections creates a corrector. A Weaver that maps creative territories creates an explorer.

### 5. Reference Files Are Duplicated Between Windows

Mechanism catalog (751), components CSS (944), prohibitions (419), and tokens (183) appear in BOTH Window 1 and Window 3 -- 2,297 lines duplicated. Both builders receive the same tool library. The difference between them is not what tools they have but what creative context surrounds those tools.

### 6. The Absent Creative Calibration

Neither Window 1 nor Window 3 receives research synthesis, case studies, validated HTML explorations, or previous build artifacts. The only "what the world feels like" signal is world-description.md (17 lines of evocative prose). Everything else is tools (mechanisms, components) or physics (prohibitions, conventions). The builder knows WHAT the world is and WHAT tools it offers, but receives very little showing how those tools have been deployed to create pages that feel alive.

---

**What this architecture achieves:** Clean separation between creative and mechanical work. Genuine perceptual independence in evaluation. Creative territory mapping (Weaver) rather than deficiency reporting. Conviction-first sequencing in Window 1. Amplification-not-correction framing in Window 3.

**Where the architecture invites enrichment:** The builder's creative context is rich in tools and physics but lean in philosophy, theory, calibration examples, and compositional wisdom. The gap is between knowing WHAT to build with and understanding HOW the best compositions deploy those same tools.

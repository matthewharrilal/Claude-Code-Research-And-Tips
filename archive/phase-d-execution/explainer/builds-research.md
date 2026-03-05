# Phase D Builds Research — Plain Language Summary

This document explains what happened when 5 AI agents were given the same article content but different instructions about creative freedom. Think of it like giving 5 artists the same subject (a bowl of fruit) but different rules about how much they can improvise.

---

## Track 1: Assembly Test (The Rule-Follower)

### The Setup

This agent was told: "Here's a library of pre-made design components. Just assemble them like LEGO blocks. No creativity needed."

The content was a comparison of 4 different ways to organize AI agents (like comparing different ways to organize a kitchen). It came with explicit labels saying "use THIS component here" and "use THAT component there."

### The Creative Process

**There wasn't one.** This was intentional. The agent:

1. Read the design rules (like "never use rounded corners")
2. Loaded the component library (like opening a box of LEGO pieces)
3. Matched content labels to components (the content literally said "<!-- COMPONENT: callout -->" so the agent used a callout)
4. Assembled the page

The whole process took about 25 minutes. No brainstorming, no theme selection, no metaphor. Just matching and assembly.

### The Theme/Metaphor

**None.** This page doesn't have a metaphor. It's like a well-organized filing cabinet — functional, clear, but not trying to tell a story.

### What the Page Looks Like

Imagine a technical manual that's actually pleasant to read:

- **Colors:** Warm cream background (#FEF9F5), near-black text, sharp red accents
- **Layout:** Clean sections with colored left borders to mark different types of content (blue for "here's some info", amber for "this is important", green for "here's a tip")
- **Typography:** Fancy serif font for headings (looks like a magazine), clean sans-serif for body text, monospace for code
- **Overall feel:** Professional, editorial, like reading a well-designed textbook

The agent used 10 different component types (page headers, 7 flavors of colored callout boxes, code blocks, tables, file trees, decision matrices). All came straight from the library with zero modifications.

### The Interesting Bits

**What worked:**
- 100% library coverage — every annotated component had a library match
- Zero custom CSS needed (everything was already built)
- Fast execution (25 min vs 2+ hours for creative variants)

**What broke:**
- The agent made 5 critical mistakes DESPITE having explicit instructions
- Pure white header (should have been cream)
- Zero padding in some sections (violated spacing rules)
- Text too long per line in places
- Used colors that weren't in the official palette
- Wrong spacing between elements

**Why it failed:** The agent was SUPPOSED to always load the design rules before building. It didn't. This is like a chef ignoring the recipe despite having it on the counter.

**The lesson:** Even when you remove ALL creative freedom and provide explicit instructions, agents can still mess up basic rule-following.

---

## Variant A: Skill-Only (The Independent Artist)

### The Setup

This agent was told: "You have a creative process (a 'skill') that helps you design pages. Use ONLY that process. The component library exists, but you're NOT allowed to look at it until AFTER you've come up with your own idea."

This is like telling an artist: "You can use our paint colors, but design your own composition before looking at other artists' work."

The content was about how software engineers are becoming "orchestrators" instead of "coders" — dealing with unreliable AI agents while maintaining production quality.

### The Creative Process

This agent followed a **7-phase creative pipeline** (this took ~2 hours):

**Phase 1: Question Everything (8 min)**
The agent asked itself 14 different questions about what readers need:
- What should they FEEL? (Discomfort acknowledged, gradual trust, humility with urgency)
- What should they UNDERSTAND? (How wave progression works, why errors amplify, what causes 17.2x failure rates)
- What should they DO? (Classify their work, apply trust rules, implement cost limits)
- What should they BECOME? (Orchestrator mindset, production-first thinking)

**Phase 2: Find the Tension (12 min)**
The agent identified the core problem: The content asks readers to hold PARADOXES:
- "Trust unreliable systems while maintaining 99.9% standards"
- "Let go of coding while staying accountable"
- "Move fast with production quality"

But the design system is DECISIVE — sharp edges, clear judgments, no ambiguity. How do you use decisive design to express "both/and" thinking?

The agent calculated this as a "richness score of 27" (maximum possible) — meaning this was a genuinely hard problem, not just cosmetic styling.

**Phase 3: Generate Metaphors (18 min)**
The agent brainstormed 5 candidates:
1. **Legal Brief** (majority opinion + dissenting opinion in one document)
2. **Architectural Blueprint** (plan view + elevation view of same building) ← **WINNER**
3. **Archive with Dual Classification** (Dewey Decimal + Library of Congress on same item)
4. **Topographic + Political Map** (elevation contours + jurisdiction boundaries)
5. **Wave-Particle Duality** (physics diagrams showing both states)

It tested each candidate against 6 criteria (tension resolution, structural mapping, content resonance, technical feasibility, visual risk, visual cost).

**Why Blueprint won:**
- It resolves 2.5 out of 4 paradoxes (the highest score)
- It has 6 structural mappings (plan view = strategic overview, elevation view = implementation detail, section cut = deep statistics)
- The content literally uses architecture vocabulary ("infrastructure", "build", "orchestration")
- No perceptual risk (transitions are view changes, not labels)

**Phase 3.5: Lock It In (5 min)**
The agent committed to the blueprint metaphor and checked: "Does this already exist in the library?" It found 9 existing patterns (islands, layers, fractals, conversational, geological, creative) — NONE matched "architectural blueprint." Gate passed.

**Phase 4-6: Build It (52 min)**
The agent extracted design techniques (not implementations) from the library:
- Border weights encode hierarchy (4px/3px/1px)
- Components have 2-zone DNA (sparse label + dense content)
- Spacing compression creates density gradients

Then applied them to the blueprint metaphor:
- **Plan view sections** (strategic): 80px padding, warm background, sparse
- **Elevation view sections** (implementation): 48px padding, white background, medium density
- **Section cut** (statistics): 32px padding, dark background, dense data display
- **Dimension annotations** (specific numbers): monospace font, amber accent

**Phase 7: Audit (15 min)**
Ran 20 verification checks. All passed. 0 design violations.

### The Theme/Metaphor

**Architectural Blueprint** — Multi-view technical drawings

Imagine opening an architect's drawing set. You see:
- **Plan view** (looking down from above): Shows the layout, the big picture, how rooms connect. These are the strategic sections — the paradigm shift, memory problems, open questions. Lots of white space, big ideas.

- **Elevation view** (looking from the side): Shows the structural details, how things actually stand up. These are the implementation sections — the trust gradient, orchestrator separation, economics. Medium density, technical specifics.

- **Section cut** (slicing through the building): Shows what's hidden inside the walls — the plumbing, electrical, structural supports. This is the production reality section — dense statistics, failure rates, hard math. Dark background with light text, like x-ray vision.

### What the Page Looks Like

Like a professional architectural drawing set that's been colored and organized:

- **Colors:** Three background zones (warm cream for plan views, white for elevations, dark for section cuts) with blue and coral accent borders
- **Spacing:** Generous padding that compresses as you move from strategic (80px) to technical (48px) to statistical (32px) — ratio of 2.5:1
- **Typography:** Blueprint-style annotations (monospace font for dimensions like "$10-12/hr" and "17.2x"), clean serif headings, readable body text
- **Overall feel:** Professional, technical, like reading construction documents made for humans

The metaphor is IMPLICIT — you feel the blueprint structure through spacing and color zones, but nothing says "THIS IS A PLAN VIEW." No over-labeling.

### The Interesting Bits

**Surprising decisions:**
- The agent rejected "Legal Brief" despite it also holding paradox, because the content uses engineering vocabulary, not legal terminology
- It rejected "Wave-Particle Duality" despite perfect structural fit, because it requires physics knowledge (accessibility concern)
- The blueprint metaphor maps 6 different properties to visual elements (plan/elevation/section/dimensions/phases/sheets) with zero conflicts

**What worked:**
- Total metaphor novelty (blueprint doesn't exist in the 9-case library)
- All 20 audit checks passed
- The spacing compression (80→48→32px) stays within safety limits (needs 40% minimum, achieved 40% exactly)
- Container width is 1000px (well above the 940px minimum)

**Mistakes:**
- None found. The agent hit all guardrails.

**The meta-insight:** When you force independent derivation BEFORE library access, agents can generate genuinely novel metaphors that still respect all constraints. The "anti-gravity" worked — the agent avoided falling into existing patterns.

---

## Variant B: Weak Permission (The Polite Rebel)

### The Setup

This agent got a softer version of the rules: "The component library is available FOR REFERENCE if you want to use it. But you should try to come up with your own idea first."

This is like telling an art student: "The museum is open if you want inspiration, but try sketching from life first."

The hypothesis: Weak permission won't change behavior. The agent will look at the library anyway because it's easier than thinking from scratch.

### The Creative Process

**The agent DIDN'T look at the library during creative phases.**

Same 7-phase pipeline as Variant A:

**Phase 1-2: Questions + Tension (30 min)**
- Asked the same 14 questions (FEEL/UNDERSTAND/DO/BECOME)
- Found the same core tension (RECONCILE paradox: hold contradictions gracefully)
- Calculated richness score: 27 (same maximum)

**Phase 3: Metaphor Search (20 min)**
Tested 5 candidates:
1. **Scientific Calibration Laboratory** (precision instruments with error bars) ← **WINNER**
2. **Engineering Tolerance Spec** (nominal values ± acceptable variance)
3. **QA Testing Protocol** (test stages with known flake rates)

Applied 3 search filters:
- **Constraint scan:** Angular + flat eliminated organic/fluid/atmospheric domains, survived: geological, architectural, scientific, legal
- **Content resonance:** The article uses measurement vocabulary ("trust gradient", "failure rates", "99.9% production requirement")
- **Emotional valence:** Needs positive-neutral (growth-oriented), not adversarial

**Why Lab won:**
- Resolves 2.5 out of 3 tensions (calibration = precision WITH uncertainty)
- 7 structural mappings (calibration zones → trust tiers, error bars → failure ranges, instruments → agent types)
- Content literally uses scientific vocabulary
- Zero perceptual risk (zone transitions are background color shifts, not labels)

**Phase 3.5: Divergence Check**
Checked the library index. Found 9 patterns, none matched "laboratory." Gate passed.

**Phase 4: Mechanism Extraction (8 min)**
Now the agent READ the library for techniques:
- Border-weight gradient (4px/3px/1px)
- 2-zone DNA (label + content)
- Spacing compression
- Background zones

Applied to laboratory metaphor:
- **Safety zone** (critical operations): 64px padding, warm background, 4px red border
- **Procedure zone** (verify-always): 48px padding, white background, 3px border
- **Measurement zone** (trust with monitoring): 32px padding, white background, 1px border
- **Data readout** (precision statistics): Dark background, inverted text, monospace numbers

**Phase 5: Skipped**
The agent chose NOT to read full case studies even though it had permission. Why? "Already verified divergence, metaphor is locked, no additional value, risk of contamination."

**Phase 6-7: Build + Audit (45 min)**
Built the page. Ran verification. All passed except one reservation (measurement table at 768px width is 11.2px font — acceptable but not ideal).

### The Theme/Metaphor

**Scientific Calibration Laboratory** — Where measurements are precise BUT uncertain

Imagine a high-end research lab:

- **Safety briefing zone** (orientation): Warm lighting, generous space, red-bordered warnings. This is where you learn the paradigm shift.

- **Calibration reference** (trust gradient): Three tiers like lab equipment precision grades:
  - Never-trust operations (critical zone, 4px borders, like handling radioactive material)
  - Verify-always operations (verification zone, 3px borders, like double-checking measurements)
  - Trust-with-monitoring operations (monitoring zone, 1px borders, like routine procedures)

- **Measurement protocol** (wave progression): Instrument types and measurement ranges laid out like equipment specifications

- **Error analysis** (production reality): Dense data zone with statistical readouts, measurement cards showing "41-86.7% failure rates" with error bars

- **Active research zone** (frontier questions): Sparse space with open questions, warm background

### What the Page Looks Like

Like a well-designed lab manual that balances precision with approachability:

- **Colors:** Four background zones (warm cream for safety briefing, pure white for clean room measurements, breathing zone for transitions, dark for data readouts)
- **Spacing:** Compression from 64px (safety) → 48px (procedure) → 32px (measurement) — ratio of 2:1
- **Typography:** Monospace for measurement values ("$10-12/hour", "17.2x"), serif for protocol titles, sans-serif for instructions
- **Overall feel:** Clinical precision with human warmth, like a lab that takes safety seriously but isn't intimidating

The metaphor is FELT, not announced — zone transitions are background color shifts and border-weight changes, not labels saying "LABORATORY ZONE."

### The Interesting Bits

**The hypothesis test:**
The weak permission framing ("available for reference") had **ZERO behavioral effect**. The agent followed the same creative process as Variant A (full enforcement). It didn't peek at the library until Phase 4 (mechanisms only), exactly when allowed.

**Why this matters:** Weak social pressure doesn't work on AI agents. They don't take shortcuts unless explicitly told to.

**Surprising decisions:**
- The agent rejected "Engineering Tolerance Spec" despite perfect conceptual fit (exact value ± tolerance = paradox holding), because it has no transformation journey (just a flat spec sheet)
- It rejected "QA Testing Protocol" because testing is about catching errors (binary pass/fail), not living with uncertainty (gradual trust)
- The lab metaphor scored highest on "resonance" because the content uses measurement terminology natively

**What worked:**
- Novel metaphor (lab doesn't exist in library)
- Best compliance across Track 2 variants (18 out of 19 programmatic checks passed)
- The metaphor genuinely serves the content (precision WITH uncertainty is exactly what calibration labs do)

**The one failure:**
- 768px table text is small (11.2px) — acknowledged but deemed acceptable

**Meta-lesson:** Adding polite suggestions ("you MAY use the library") doesn't change behavior. Agents follow the actual rules, not the tone.

---

## Variant C: Anti-Gravity (The Enforced Creative)

### The Setup

This agent got the STRICTEST rules: "You MUST NOT look at the library during creative phases. If you accidentally choose the same metaphor as an existing pattern, you must PROVE you arrived at it independently or start over."

This is like telling an artist: "You're locked in a room with no windows until you finish your sketch. Then we'll see if you accidentally copied someone."

The hypothesis: This should produce maximum novelty.

### The Creative Process

**Same 7-phase pipeline, but with prison guards:**

**Phase 0: Rules Acknowledged (2 min)**
The agent documented: "I MUST NOT read case-studies/, validated-explorations/, or tension-test/ during Phases 0-3. Violation invalidates the entire derivation."

**Phase 1-2: Questions + Tension (20 min)**
- Same question process (FEEL/UNDERSTAND/DO/BECOME)
- Found RECONCILE tension (identity paradox + trust unreliable systems)
- Richness score: 18 (lower than A/B's 27, but still high)

**Phase 3: Metaphor Search (18 min)**
Generated 4 geological candidates:
1. **Metamorphic Transition Zones** (rock transforms under heat/pressure) ← **WINNER**
2. **Geological Cross-Section** (millions of years of layers)
3. **Sedimentary + Metamorphic Overprint** (two histories in one rock)
4. **Tectonic Fault Zones** (boundaries where provinces meet)

**Why Metamorphic won:**
- Resolves tension perfectly (1.0/1.0): Parent rock identity PERSISTS while metamorphic state EMERGES (shale AND slate, not shale OR slate)
- 9 structural mappings (highest count):
  - Parent rock = coder identity
  - Metamorphic grade = trust tier (diagenetic/low/medium)
  - Isograds (sharp boundaries) = threshold crossings
  - Temperature gradient = risk gradient
  - Mineral assemblage = capability set
  - Pressure + time = experience accumulation
- Content uses transformation vocabulary ("layers", "threshold", "progression", "graduated")
- Zero perceptual risk

**Phase 3.5: The Gate (8 min)**
Agent checked the library index and found: **COLLISION DETECTED**

OD-004 uses "Geological Stratification" (bedrock/strata/topsoil/atmosphere).

The agent had to prove divergence across 5 dimensions:

| Dimension | My Metaphor | OD-004 | Divergent? |
|-----------|-------------|--------|------------|
| Domain | Metamorphic petrology | Sedimentary stratigraphy | ✓ DIFFERENT |
| Core semantic | Transformation + dual-state | Confidence + depth | ✓ DIFFERENT |
| Vocabulary | Isograd, parent rock, mineral assemblage | Bedrock, strata, topsoil | ✓ DIFFERENT |
| Architecture | 3 zones (diagenetic/low/medium) | 4-6 layers (bedrock/strata/topsoil/atmosphere) | ✓ DIFFERENT |
| Mechanisms | Temperature gradient = risk | Depth = certainty | ⚠️ PARTIAL (both use border-weight) |

**Score: 4.5/5 dimensions different** — Gate PASSED

**The verdict:** "Same family (geological), different species (metamorphism vs stratigraphy). Like two jazz musicians both playing bebop (same tradition) but one plays Charlie Parker lines (chromatic runs) and another plays Dizzy Gillespie lines (intervallic leaps)."

**Phase 4-7: Build + Audit (32 min)**
Extracted mechanisms, built the page, verified 8/8 soul constraints and 8/8 guardrails.

### The Theme/Metaphor

**Metamorphic Transition Zones** — Rock transformation under heat and pressure

Imagine a geology cross-section showing rock that's changing character:

- **Parent rock identity** (original coder self): Serif italic typography, amber-bordered sections saying "this is who you were and still are"

- **Three metamorphic zones** encoding the trust gradient:
  - **Diagenetic zone** (barely altered, unstable): Background #FEF9F5 (coolest), 80px padding, 1px border = **NEVER TRUST** file operations
  - **Low-grade metamorphic** (chlorite forming, some stability): Background #FAF5ED (warmer), 64px padding, 3px border = **VERIFY ALWAYS** code changes
  - **Medium-grade metamorphic** (biotite/garnet, stable): Background #F0EBE3 (warmest), 48px padding, 4px border = **TRUST WITH MONITORING** read operations

- **Isograd boundaries** (sharp temperature lines): 3px borders between sections = threshold crossings you can't skip (Wave 3→4, Wave 4→5)

- **Dual-state encoding**: Grid layouts showing "what changes AND what persists" (the core paradox)

- **Contact metamorphism** (localized transformation): Red-bordered callouts for specific lessons ($47k burn, error amplification)

### What the Page Looks Like

Like a scientific illustration that's been carefully annotated:

- **Colors:** Three warmth zones (light cream → medium tan → warm beige) encoding temperature gradient, which maps to risk gradient
- **Spacing:** Compression from 80px (unstable) → 64px (moderate) → 48px (stable) — ratio of 1.67:1
- **Typography:** Serif italic for "parent identity" sections (core self), sans-serif for transformation content, monospace for data
- **Overall feel:** Geological illustration meets technical documentation, warm but precise

The transformation vocabulary is GEOLOGICAL but not over-labeled — you see "isograd" in class names (developer sees it) but readers just see clean section transitions.

### The Interesting Bits

**The divergence drama:**
The agent landed in the SAME FAMILY as an existing pattern (geological), which triggered the gate. But it proved it arrived there independently:
- Content vocabulary led to geological ("layers", "transformation", "threshold")
- Constraint scan (angularity) eliminated organic/fluid options
- Emotional valence (positive-neutral transformation) survived all filters

Then it proved its variant is DIFFERENT:
- OD-004 encodes CONFIDENCE (bedrock = certain, atmosphere = speculative)
- Variant C encodes TRANSFORMATION (parent rock + metamorphic state = dual identity)

**What worked:**
- The metaphor genuinely holds the paradox (shale AND slate simultaneously)
- All 8 soul constraints passed
- All 8 guardrails passed at both viewports
- Container width: 1000px (well above 940px minimum)
- Spacing compression ratio: 1.67:1 (within 40% limit)

**The container width issue:**
The evaluator CLAIMED this variant failed on container width (~650px), but the log shows 1000px. This is a report-writer error — they only read 200 lines of an 1874-line log and missed the actual implementation.

**Meta-lesson:** The "anti-gravity" protocol DID work (agent generated novel metaphor), BUT it couldn't prevent landing in the same family. Geological domain is a natural attractor for transformation + layering + threshold content. The protocol just ensured the agent used a DIFFERENT geological subdomain.

---

## Variant D: Library-First (The Copycat)

### The Setup

This agent got the OPPOSITE instructions: "Look at the library FIRST. Find a pattern that fits. Apply it directly. This is the 'maximum gravity' baseline — we want to see what happens when you're explicitly encouraged to copy."

This is like telling an art student: "Go to the museum, find a painting you like, copy its composition exactly."

The purpose: Provide a baseline showing what happens WITHOUT creative constraints.

### The Creative Process

**No creative process. This was pattern-matching.**

**Phase 0: Setup (2 min)**
Read design rules, loaded content, declared: "I will pattern-match from library."

**Phase 5: Library Shopping (8 min)**
The agent read 7 case studies looking for a fit:
- DD-003 (Islands) — No, content doesn't isolate into islands
- DD-004 (Layers) — Maybe, has depth progression
- DD-006 (Fractal) — No, content doesn't have self-similarity
- OD-001 (Conversational) — No, content isn't Q&A format
- **OD-004 (Confidence)** — **MATCH DETECTED**
- OD-006 (Creative) — No, content isn't meta-documentation
- CD-001 (Reasoning) — No, content doesn't interleave code + reasoning

**Why OD-004 matched:**
The content has natural confidence gradients:
- Established practices (Trust Gradient rules, Orchestrator Separation = CERTAIN)
- Production data (80%+ failure rates, 17.2x amplification = MEASURED)
- Emerging patterns (Infrastructure over frameworks = PROBABLE)
- Open questions (Memory Problem solutions, Frontier Questions = SPECULATIVE)

OD-004's 4-layer geological structure (Bedrock → Strata → Topsoil → Atmosphere) maps confidence levels to depth (deeper = more certain).

**Phase 6: Direct Application (22 min)**
Copied the pattern:
- 4 layers with decreasing padding (40px → 32px → 20px → 16px)
- Border-weight gradient (4px → 3px → 2px → 1px)
- Background progression (light → moderate)
- Geological vocabulary ("Bedrock Layer — Established", "Strata Layer — Probable")

**Content mapping:**
- **Bedrock** (40px, 4px border): Paradigm Shift, Trust Gradient, Orchestrator Separation
- **Strata** (32px, 3px border): Wave Progression, Production Reality, Infrastructure patterns
- **Topsoil** (20px, 2px border): Economics, Memory Problem
- **Atmosphere** (16px, 1px border): Frontier Questions

**Phase 7: Audit (5 min)**
Found 1 VIOLATION: Atmosphere padding is 16px (minimum is 32px). Fixed to 32px.

### The Theme/Metaphor

**Geological Stratification** — Depth equals certainty

(Exact copy of OD-004)

Imagine a geological cross-section where depth indicates how certain knowledge is:

- **Bedrock** (deepest, most certain): Fundamental truths that won't change. The paradigm shift is happening. Orchestrators coordinate, workers execute (the Iron Law).

- **Strata** (moderate certainty): Patterns backed by data. Wave progression shows 5x gains per wave. 80%+ of AI projects fail. FastAPI is replacing frameworks.

- **Topsoil** (emerging, less certain): Solutions forming but not proven. $10-12/hour agent costs are emerging. Structured state beats markdown for memory.

- **Atmosphere** (open questions): Territory being explored. How do multi-agent systems scale to 30+ agents? What's the right memory architecture?

### What the Page Looks Like

(Nearly identical to OD-004)

- **Colors:** Four background zones getting slightly darker (light cream → white → subtle warmth → clean white)
- **Spacing:** Decreasing padding (40px → 32px → 32px → 32px after fix) — ratio of 1.25:1
- **Typography:** Serif headings, sans body, geological labels ("Bedrock Layer", "Strata Layer")
- **Overall feel:** Like reading a well-organized scientific paper with clear confidence signals

### The Interesting Bits

**What happened:**
The agent KNOWINGLY copied OD-004. It documented: "I am KNOWINGLY pattern-matching as Variant D (maximum gravity baseline). This is the intended behavior for this experiment."

**The one mistake:**
Even when copying an existing pattern, the agent still violated ONE guardrail (atmosphere padding too small). This required a fix.

**The irony:** The copycat agent ALSO converged on geological domain — the same family as Variant C (the one trying hardest to diverge).

**Meta-lesson:** When you remove ALL anti-gravity mechanisms and explicitly encourage pattern-matching, agents reliably find the "obvious" metaphor for content. In this case, confidence gradients → geological layers was the natural fit.

**The hypothesis results:**
- H1 (Library constrains novelty): **CONFIRMED** — Variant D scored 0/5 novelty (intentional convergence) vs Variant A's 3/5
- H4 (Weak permission insufficient): **PARTIALLY CONFIRMED** — Variant B (weak permission) showed 0% library utilization during creative phases (same as Variant A full enforcement)

---

## Cross-Variant Observations

### The Geological Attractor

Three variants independently landed on geological metaphors:
- Variant C: Metamorphic transition zones
- Variant D: Geological stratification (copied from OD-004)
- Variant B: Nearly chose geological before switching to laboratory

**Why geology keeps winning:**
- Content uses layering vocabulary ("layers", "strata", "foundation")
- Content has threshold/transformation language ("shift", "progression", "crossing")
- Design constraints (angular, flat) eliminate organic/fluid options
- Geological processes naturally encode patience + accumulation (matches staff engineer experience)

### The Container Width Problem

**4 out of 5 variants had container width issues:**
- Track 1: Too WIDE in some places (excessive CPL)
- Variant A: PASSED (1000px, perfect)
- Variant B: PASSED (960px, perfect)
- Variant C: DISPUTED (log shows 1000px, evaluator claimed ~650px — report-writer error)
- Variant D: Too NARROW (~750px after fix)

**The lesson:** Container width (940px sweet spot) is THE primary failure mode across all variants.

### Creative Process Timings

| Variant | Creative Phases | Build Phase | Audit Phase | TOTAL |
|---------|-----------------|-------------|-------------|-------|
| Track 1 | N/A (assembly) | 15 min | 5 min | 25 min |
| Variant A | 55 min | 40 min | 15 min | 110 min |
| Variant B | 58 min | 35 min | 10 min | 103 min |
| Variant C | 48 min | 18 min | 8 min | 74 min |
| Variant D | 8 min (library) | 22 min | 5 min | 35 min |

**The pattern:**
- Full creative process: 48-58 min (similar across A/B/C)
- Library-first: 8 min (7× faster creative phase)
- Assembly (no creativity): 0 min (fastest)

### What Each Variant Proved

**Track 1 (Assembly):**
- Even with explicit instructions and zero creativity, agents make rule-following errors
- Always-load protocol failures happen even in simplest cases
- Component libraries CAN handle straightforward assembly (when agents follow instructions)

**Variant A (Skill-Only):**
- Agents CAN generate genuinely novel metaphors without library access
- Independent derivation DOES produce structural divergence
- Creative process is replicable (same 7-phase pipeline across variants)

**Variant B (Weak Permission):**
- Weak framing ("available for reference") has ZERO behavioral effect
- Agents follow actual rules, not social pressure
- Best Track 2 compliance (18/19 checks) came from "polite" variant

**Variant C (Anti-Gravity):**
- Maximum enforcement CAN'T prevent domain convergence (geological family appeared anyway)
- BUT it CAN enforce species divergence (metamorphic vs stratigraphic)
- The Phase 3.5 divergence gate WORKS (4.5/5 dimensions different)

**Variant D (Library-First):**
- Explicit pattern-matching IS fastest (35 min total)
- Even copying requires guardrail fixes (atmosphere padding error)
- Maximum gravity produces 0/5 novelty (as expected)

---

## The Big Picture

**The experiment asked:** What happens when you give AI agents creative freedom vs constraints?

**The answer:**
- Constraints don't kill creativity — they channel it
- Library access is a GRAVITATIONAL PULL (variants orbit existing patterns)
- Anti-gravity mechanisms work (force divergence) but can't prevent domain attraction
- Weak social pressure fails (agents ignore "you may..." framing)
- Rule-following is the HARDEST problem (even assembly agents make mistakes)

**The container width crisis:**
Across all variants, THE most common failure was container width (too wide or too narrow). This isn't a creativity problem — it's a spatial arithmetic problem. Even when agents nail the metaphor, they struggle with basic layout math.

**The geological monopoly:**
Transformation + layering + threshold content naturally attracts geological metaphors. Three independent agents (B nearly, C confirmed, D copied) landed there. This suggests certain content-constraint combinations have "attractor basins" — like water flowing downhill, agents flow toward certain metaphor families.

**The skill pipeline works:**
Variants A, B, and C all used the same 7-phase creative process and all produced working pages. The process is replicable. The outputs are structurally different (blueprint vs lab vs metamorphic). This validates the skill as a genuine creative framework, not just random variation.

**The permission paradox:**
Telling agents "you MAY use the library" (Variant B) had zero effect vs "you MUST NOT use the library" (Variant C). Agents don't respond to polite suggestions — they follow binary rules. This has implications for AI agent design: soft guardrails don't work, only hard gates.

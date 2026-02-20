# Section 1: Where We Are Right Now

The design system has been through five exploration stages, a full extraction into a six-layer ontology, a validation experiment, a tier-model investigation, a Middle-tier experiment that succeeded, a Ceiling experiment that succeeded on novelty but failed on richness, a Flagship experiment that failed harder, and months of retrospective analysis that diagnosed exactly why. The result is a rich, validated body of material -- skills, tokens, mechanisms, components, case studies, guidelines, and hard-won lessons about what works and what does not.

This section walks through every piece of that material. For each item, it explains what it IS, what it DOES in the pipeline, and what breaks without it. Then it names the gaps -- the pieces that do not exist yet but must exist before `/build-page` can work.

---

## The Two Skills

### The Tension-Composition Skill

**File:** `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines)

This is the creative engine of the entire system. It is a six-phase pipeline that takes raw content (a markdown document, a tutorial, a research synthesis) and transforms it into a compositional HTML layout by deriving *tension* between what the content needs and what the design system demands.

The pipeline works like this: Phase 0 assesses the content (how long is it? what type? which tier?). Phases 1-3 are the creative core -- multi-axis questioning asks what the reader needs to FEEL, UNDERSTAND, DO, and BECOME; tension derivation identifies where those needs clash with the design system's austere, angular personality; and metaphor collapse finds a real-world domain (geological strata, building floors, manuscript margins) that bridges both sides structurally. Phase 4 extracts reusable mechanisms from the catalog. Phase 5 optionally checks case studies for divergence. Phases 6-7 implement and verify.

The skill also contains the tier classification system. Content is routed to Floor (simple assembly, skip everything), Middle (pattern-based, skip metaphor derivation), Ceiling (full pipeline with metaphor), or Flagship (full pipeline plus multi-pass audit). Middle-tier pages skip directly to Phase 4 with a density pattern selection (CRESCENDO, F-PATTERN, BENTO, PULSE) instead of deriving a metaphor.

**What it does in the pipeline:** It is the creative decision-maker. It decides HOW content becomes a page -- which mechanisms to deploy, what spatial organization to use, what the page should feel like.

**What breaks without it:** There is no creative process. Pages become template-stamped assemblies. The difference between "formatted" and "designed" disappears. Every page looks the same.

### The Perceptual Auditing Skill

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md` (848 lines)

This is the quality gate. It defines 48 perceptual audit questions organized into four tiers, plus quantitative guardrails with hard numeric floors, four audit modes (Embedded through Standalone), team structures for each mode, and detailed protocols for how visual auditors must behave.

The 48 questions range from "What's the first thing that bothers you?" (PA-01) to "How could someone make this look terrible while passing every rule?" (PA-28) to void-prevention questions like "Count the number of full viewport-height scroll positions with less than 30% content" (PA-50). The five mandatory questions (PA-01 through PA-05) must be answered for every page. PA-05 is the ship-or-not question, evaluated on four sub-criteria: DESIGNED, COHERENT, PROPORTIONATE, and POLISHED.

The guardrails are hard numbers: content container 640-960px wide, characters per line 45-80, body line-height minimum 1.5, section spacing minimum 48px, padding compression ratio minimum 40%. These are floors, not targets -- a page can pass every guardrail and still fail the perceptual audit if it does not feel designed.

**What it does in the pipeline:** It is the quality verifier. After a page is built, the PA skill determines whether it ships.

**What breaks without it:** There is no way to distinguish "passes rules" from "is good." Programmatic checks pass while the page looks flat, void-filled, or monotonous. This is exactly what happened in the Flagship experiment -- all programmatic gates passed, but the perceptual audit revealed zero visible borders, uniform typography, and six whitespace voids.

---

## The Six-Layer Ontology

The compositional core is organized into six layers, each building on the one before it. Think of them as: what we REFUSE, what we HAVE, how we COMBINE, what we BUILD WITH, what we have PROVEN, and how we DECIDE.

### Layer 1: Identity -- The Prohibitions

**File:** `design-system/compositional-core/identity/prohibitions.md` (420 lines)

Twenty-four rules that define the design system by what it refuses. Eight are absolute (zero exceptions, ever): border-radius must be 0, box-shadow must be none, no drop-shadows, no semi-transparent backgrounds, no gradients, no pure black or white, Instrument Serif only for display text, no decorative rounding. Fourteen are conditional (documented exceptions only): no 2px borders except for confidence encoding, no accent borders under 4px except for progressive depth, no vertical table borders, no hover lift effects, and so on. Two are meta-prohibitions protecting the process itself: no design choices without research provenance, no new patterns without tension derivation.

**What it does in the pipeline:** It defines what KortAI IS by defining what KortAI IS NOT. Every page must pass all 24 prohibitions. This is the always-load first-contact layer -- agents read it before touching anything else.

**What breaks without it:** Identity dissolves. Agents produce pages with rounded corners, shadows, gradients -- generic Bootstrap-looking output that could be any design system. The prohibitions file was the single most important factor in the Phase D validation: the Track 1 variant that failed to load it scored 11/19 compliance with 5 critical soul violations.

### Layer 2: Vocabulary -- The Design Tokens

**File:** `design-system/compositional-core/vocabulary/tokens.css` (184 lines)

A single CSS `:root` block containing 65 design tokens. These are the atoms of the system -- the specific values every page must use. The color palette (8 locked values including Sanrok red #E83025, warm cream background #FEF9F5, near-black text #1A1A1A, warm border #E0D5C5). The typography trinity (Instrument Serif for display, Inter for body, JetBrains Mono for code). The spacing scale (4px base unit, 14 values from 4px to 96px). Border weights (4px structural, 3px accent, 1px micro). Zone background colors. Syntax highlighting colors. Each token is classified as IMMUTABLE (soul-level, never changes), MUTABLE (can vary within constraints), or AVAILABLE (exists but is not required).

The file also contains spacing maximums -- critically, no single margin or padding value should exceed 96px. This was added after the Ceiling experiment, where stacked generous spacing values accumulated into 1,500-2,000px of transition whitespace.

**What it does in the pipeline:** It is the vocabulary. Every CSS value on every page must come from this file. It prevents agents from inventing colors, guessing at spacing, or using the wrong fonts.

**What breaks without it:** Agents invent values. Pages drift off-palette. One page uses #333 for text while another uses #1A1A1A. Spacing becomes arbitrary. The warm editorial feel disappears. Design system coherence across pages vanishes.

### Layer 3: Grammar -- The Mechanism Catalog

**File:** `design-system/compositional-core/grammar/mechanism-catalog.md` (800+ lines)

Eighteen reusable CSS techniques, organized into five property families (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). Each mechanism is a transferable pattern that works across any metaphor -- it passes the Name Test ("remove the metaphor name, does the description still make sense?") and the Transfer Test ("does this work with a different metaphor?").

The mechanisms are: border-weight gradient encoding (#1), 2-zone component DNA (#2), solid offset depth (#3), spacing compression (#4), dense/sparse alternation (#5), bento grid islands (#6), zone background progression (#7), sticky navigation (#8), drop cap (#9), editorial pull quote (#10), heading scale (#11), progressive disclosure (#12), footer anchoring (#13), breadcrumb navigation (#14), grid island layout (#15), focal point emphasis (#16), dark-background code blocks (#17), and checkpoint transitions (#18).

Each mechanism includes its CSS pattern, cross-file frequency across explorations, reusable boundaries (what transfers vs. what is metaphor-specific), application modes (progressive vs. discrete), and impact profiles (perceptual effectiveness ratings). The catalog was enriched post-Flagship with perception thresholds: backgrounds must differ by at least 15 RGB points, letter-spacing by at least 0.5px, padding by at least 24px between zones.

**What it does in the pipeline:** It is the grammar -- how vocabulary (tokens) gets combined into meaningful structures. When the tension-composition skill reaches Phase 4, the builder selects mechanisms from this catalog. Middle-tier pages map content features directly to mechanisms. Ceiling-tier pages select mechanisms through the metaphor lens.

**What breaks without it:** Builders have tokens but no patterns. They can set colors and spacing but do not know HOW to use border-weight to encode hierarchy, or HOW to alternate dense and sparse zones for rhythm. Pages become flat token applications -- correctly colored but compositionally dead.

### Layer 4: Components -- The CSS Library

**File:** `design-system/compositional-core/components/components.css` (1,195 lines)

A merged CSS file extracted from all 27 exploration files (6 DD + 6 OD + 6 CD + 15 tension-test). It contains the concrete CSS for every validated component: the callout family (6 semantic variants with their colors and the 2-zone DNA pattern), tables (horizontal-only borders, semantic header rows), code blocks (dark background with syntax highlighting), headings (Instrument Serif display, scale system), body text, lists, blockquotes, breathing zones, section containers, grid layouts, and specialized components like reasoning containers and file trees.

Each component carries a confidence level based on its cross-file frequency. Universal components (callouts at 100% frequency) are high-confidence. Stage-specific components (reasoning containers from CD-001 only) are lower-confidence. Metaphor vocabulary has been stripped -- class names are functional (.callout, .section-header) not metaphorical (.stratum, .fossil).

**What it does in the pipeline:** It is the component library for Track 1 (assembly) building and the implementation reference for Track 2 (composition) building. Track 1 builders use these components directly. Track 2 builders use them as reference for mechanism #2 (2-zone DNA) and other component patterns, but generate their own metaphor-specific CSS.

**What breaks without it:** Builders have to reinvent every component from scratch. Callout styling varies page to page. Tables look different everywhere. The consistent component feel disappears, and build time doubles.

### Layer 5: Case Studies -- The Proof Gallery

**Directory:** `design-system/compositional-core/case-studies/` (13 files)

Nine case studies (plus an anti-prescription template and three visual analyses) documenting what specific metaphors produced for specific content tensions. DD-003 (Islands -- bento grid isolation), DD-004 (Layers -- atmospheric depth encoding), DD-006 (Fractal -- self-similarity at 4 scales), OD-001 (Conversational -- Q&A dialogue structure), OD-004 (Confidence -- geological stratification), OD-006 (Creative -- dual-lens toggle), CD-001 (Reasoning Inside Code), CD-005 (Multi-Axis Transition), CD-006 (Pilot Migration -- the crown jewel).

Every case study begins with a warning: "THIS IS NOT A TEMPLATE." They use narrative format ("the tension that produced this") rather than criteria format ("when to use this"). They are organized as process proofs -- showing how tension led to metaphor led to layout -- not as recipes to copy.

**What it does in the pipeline:** It is the proof gallery. Case studies exist for Phase 5 divergence verification only -- after a builder has independently derived their metaphor, they check case studies to verify they are not accidentally reproducing an existing pattern. If convergence is detected, a five-dimension divergence table must be completed.

**What breaks without it:** There is no reference for what "good" looks like. New builders have no examples of tension-to-metaphor-to-layout in action. The anti-gravity mechanisms (phase-gated access, anti-prescription framing, divergence mandate) lose their anchor.

### Layer 6: Guidelines -- The Semantic Rules

**File:** `design-system/compositional-core/guidelines/semantic-rules.md` (530 lines)

Seven semantic gap rules filling ambiguities that the other layers leave unresolved. When should you use a callout--info vs. callout--note? (Info for section-level orientation, Note for inline clarifications.) When is code inline vs. block? (One line or fewer than 50 characters = inline; 2+ lines = block.) Should tables be zebra-striped? (No -- zero validated instances exist; use clean styling.) What triggers breathing zones vs. dense zones? (Section changes with under 3 sentences of content = breathing zone; high-certainty = sparse padding; complex content = dense padding.) How many callout types exist? (5 semantic colors mapped to 8 CSS class variants.) What is the minimum content for a zone? (3+ paragraphs or 2+ components before a section earns its own background.) What is the simplest form that serves this content? (If a list works, do not use a bento grid.)

The file also contains the Semantic Value Framework -- a three-question test (WHAT varies? WHY does it vary? WHY THESE specific values?) that prevents arbitrary CSS. If the answer to "why these values?" is "it looked good" or "it was on the token scale," the values are arbitrary and must be revised.

**What it does in the pipeline:** It resolves ambiguity. When a builder faces a choice the other layers do not clearly answer, semantic rules provide the decision criteria.

**What breaks without it:** Builders make inconsistent decisions. One page uses callout--info where another uses callout--note for identical content. Tables get zebra-striped in one place and clean in another. The semantic coherence across pages degrades into per-builder preferences.

---

## The Crown Jewel

**File:** `design-system/validated-explorations/combination/CD-006-pilot-migration.html`

CD-006 is a 2,000+ line HTML page that scored 39/40 in evaluation. It is a pilot migration page about building KortAI documentation pages -- documentation about documentation, a meta-tutorial. It uses all 11 component types, all 5 axis patterns, all transition grammar types, fractal density at 5 scales, and the full combination rule set (velocity, temperature, weight, proximity). Its inline threading header documents 7 dependencies and 3 consumers. It was built by an Opus agent with full inter-agent communication.

CD-006 is the existence proof. It demonstrates that the design system can produce pages that feel designed, not formatted. It is not a template -- it is evidence that the pipeline works when all the pieces come together correctly.

---

## What Is Missing

Everything described above exists and is validated. But there is no way to USE it all in a single command. The gap between "all the pieces exist" and "type `/build-page` and get a designed page" is filled by five missing pieces:

### 1. No Orchestrator Skill

There is no `/build-page` command. The tension-composition skill exists, the perceptual auditing skill exists, but nothing ties them together into a single invocable workflow that spawns agents, routes files to the right roles, runs gates, and produces output. Today, building a page requires a human operator who knows which files to read, which skill to invoke, which agents to spawn, and in what order. Pipeline v2 is the orchestrator that automates all of this.

### 2. No Conventions Brief

When a builder agent sits down to write CSS, it needs a focused input document -- not the full 1,878-line TC skill, not the 848-line PA skill, not the 800-line mechanism catalog. It needs a 50-100 line "conventions brief" or "operational recipe" that says: here are the token values you use, here are the mechanisms you selected, here is the metaphor, here are the hard numeric floors, now build. The Middle-tier experiment succeeded partly because the builder got a 100-line recipe with sequenced steps and specific CSS values. The Flagship experiment failed partly because the builder got a 71-line checklist of constraints with no sequenced playbook. No conventions brief file exists in the system today.

### 3. No Perception Thresholds in Gates

The Flagship experiment proved that programmatic verification is not perceptual verification. Gate 4 confirmed 6 CSS channels with 4+ shifts per boundary. Gate 5 (fresh-eyes perceptual audit) found those shifts imperceptible -- backgrounds differed by 1-8 RGB points, letter-spacing by 0.001-0.01em. The mechanism catalog now documents minimum perceptual deltas (backgrounds at least 15 RGB points apart, letter-spacing at least 0.5px, padding at least 24px between zones), but no automated gate runner exists to check these thresholds during the build. A builder can comply with every rule and produce an imperceptible page.

### 4. No Gate Runner

There are 15+ quality gates described across the TC skill, PA skill, and various analysis documents, but no single executable script or agent workflow that runs them. Gate checking today is manual -- a human or agent reads the requirements, eyeballs the output, and makes a judgment call. Pipeline v2 needs an automated gate runner that programmatically checks what can be checked (container width, spacing values, token compliance, CPL, void distribution) and flags what requires perceptual verification.

### 5. S-09 Stacking Rule Incomplete

The spacing maximum token (96px) prevents any single margin or padding value from exceeding 96px. But section boundaries in CSS involve multiple properties that stack: margin-bottom on the outgoing section + padding-top on the incoming section + any breathing zone padding. Individual values pass S-09 (each under 96px) while their sum creates 210-276px voids. The Flagship experiment's six whitespace voids were caused by this stacking. The rule needs to measure TOTAL gap at section boundaries, not per-property values. This measurement does not exist yet.

---

## The State of the World, Plainly

We have a creative engine (TC skill) that knows how to derive composition from content tension. We have a quality gate (PA skill) that knows how to distinguish designed from formatted. We have a locked vocabulary (tokens), a grammar of 18 reusable mechanisms, a component library, 9 case studies proving the process works, and semantic rules for ambiguous decisions. We have a crown jewel (CD-006) proving the whole thing can produce a 39/40 page.

What we do not have is the connective tissue. No orchestrator to run the process end to end. No focused brief for builders. No automated gate checking. No perception thresholds in programmatic gates. No stacking measurement for spacing voids.

Pipeline v2 builds that connective tissue.

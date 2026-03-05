# Pipeline Artifact Audit: Import Candidates for TC Skill

**Date:** 2026-02-27
**Auditor:** pipeline-auditor (Opus)
**Frame:** Generative — what embodies conviction/direction better than the TC skill's current format?

---

## Executive Summary

The pipeline's output format contains 5 transformative innovations that the TC skill lacks entirely, plus 8 specific textual elements worth importing verbatim or with adaptation. The pipeline also contains substantial compliance infrastructure (BV gates, suppressor scans, threshold gaming prevention) that must NOT be imported — it carries the compression mindset that suppresses the very quality the TC skill is designed to produce.

**Key finding:** The pipeline's single greatest contribution is not any individual element but the FRAMING PARADIGM — soul constraints as world-description, thresholds as calibration ranges, dispositions as experimental creative conditions. This framing converts prohibitions into permissions and checklists into recipes. The TC skill currently uses a mix of both paradigms; the pipeline is consistent throughout.

---

## Artifact-by-Artifact Analysis

---

### 1. artifact-identity-perception.md (556 lines)

#### IMPORT: World-Description Format for Soul Constraints

The pipeline's soul constraint format is the single strongest conviction signal in the entire corpus.

**Pipeline text (verbatim from artifact-identity-perception.md lines 24-28):**
> "This is a world of sharp surfaces, warm materials, and deliberate restraint. Every page in this design system shares DNA -- not because a specification forces it, but because they are built from the same materials (tokens.css), the same structural components (components.css), and the same soul."

**Pipeline text (SC-01 world-description, line 41):**
> "Every surface is sharp. Corners are cut, not curved."

**Pipeline text (SC-02 world-description, line 49):**
> "Light is direct. Nothing floats. Nothing hovers above the page."

**Pipeline text (SC-03 world-description, line 58):**
> "The page has a spine. Content lives within 940-960px."

**Why IMPORT:** These sentences describe a world the builder inhabits, not rules the builder obeys. The TC skill currently has `Container width 940-960px is NON-NEGOTIABLE` (prohibition) where the pipeline has `The page has a spine. Content lives within 940-960px` (world-description). Both enforce the same constraint. One creates compliance; the other creates conviction.

**Specific TC skill text to replace:**
- Current: "Container width 940-960px is NON-NEGOTIABLE. Metaphor NEVER overrides this."
- Pipeline: "The page has a spine. Content lives within 940-960px. The spine holds."

#### IMPORT: Perception Calibration Table as Creative Range

**Pipeline text (artifact-identity-perception.md lines 260-270):**
```
| Property | Floor (barely visible) | Compositional (expressive) | Dramatic (bold statement) |
|----------|----------------------|---------------------------|--------------------------|
| Background delta | 15 RGB | 25-35 RGB | 50+ RGB |
| Letter-spacing | 0.025em | 0.03-0.04em | 0.05em+ |
| Stacked gap | 120px (CEILING) | 60-90px | 40-60px (dense) |
```

**Pipeline text (line 270):**
> "Use the FULL RANGE. A page that uses only floor values is technically correct but perceptually flat."

**Why IMPORT:** The TC skill has no equivalent. It has prohibition-format thresholds (">=15 RGB delta") but no calibration ranges. The pipeline learned from the Flagship failure that builders who only see floors park at floors. The calibration table transforms "don't go below 15" into "15 is subtle, 25 is confident, 50 is dramatic — use the full range." This is the difference between a page that barely passes and a page that composes.

#### IMPORT: Dual-Route Pattern Concept

**Pipeline text (MANIFEST.md line 224):**
> "DUAL-ROUTE PATTERN (Council Mandate): Identity and perception items go to BOTH the builder (as world-description/calibration in the brief) AND the gate runner (as binary verification checks). The builder sees them as creative context; the gate runner sees them as pass/fail thresholds. These are NOT redundant -- they serve different purposes."

**Why IMPORT (as concept):** The TC skill currently conflates builder instructions with verification checks. The pipeline cleanly separates "what the builder should feel" from "what the gate should check." The TC skill should present constraints as world-description and let verification happen downstream (in /build-page gates or standalone PA).

#### ADAPT: Evidence Taxonomy Tags

**Pipeline text (artifact-identity-perception.md lines 11-17):**
> "FACT -- Binary observation verifiable in data"
> "OBSERVED -- Consistent direction across available data, variables not isolated"
> "CONFOUNDED -- Direction observed but cannot separate from co-varying factors"
> "THEORETICAL -- N=0, hypothesis only"

**Why ADAPT (not import verbatim):** The evidence taxonomy is valuable intellectual honesty but its current format (tags on every item) is compliance-bureaucratic. The TC skill should adopt the PRINCIPLE (distinguish what we know from what we hypothesize) without the per-item annotation overhead. Import it as a brief section note, not as a per-disposition tag system.

#### LEAVE: Anti-Pattern Detection Section (AP-09, AP-10)

**Pipeline text (lines 295-310):**
> "AP-09: Ghost Mechanisms... FAIL if any mechanism's CSS values fall below perception thresholds"
> "AP-10: Threshold Gaming... WARNING if >50% of values are within 10% of threshold floor"

**Why LEAVE:** These are gate-runner concerns, not builder concerns. Telling the builder "don't do threshold gaming" is a suppressor — it makes the builder anxious about floor values instead of composing with the full range. The calibration table (IMPORT above) solves this problem generatively: if the builder knows 50 RGB is "dramatic," they won't park at 16. The anti-pattern detector is the compression response; the calibration range is the generative response to the same problem.

#### LEAVE: Perception Risk Probabilities

**Pipeline text (lines 362-371):**
> "P=0.40 Container width violation"
> "P=0.35 Whitespace voids"

**Why LEAVE:** Probability estimates of future failures are diagnostic/planning data, not creative direction. Showing the builder "there's a 40% chance you'll violate container width" creates anxiety, not conviction. The world-description ("The page has a spine") solves this better.

---

### 2. artifact-tc-brief-template.md (236 lines)

#### IMPORT: The Entire Tier 1 Section (Verbatim)

**Pipeline text (lines 15-35):**
> "Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world."
> "Light is direct. Nothing floats. Nothing hovers above the page. Surfaces sit flat against each other."
> "The page has a spine. Content lives within 940-960px. The spine holds."
> "This is a warm world. Colors carry warmth -- red leads (#E83025), cream grounds (#FEF9F5), near-black anchors (#1A1A1A). Five accent colors complete the palette, all warm."
> "Three typefaces. No more. Instrument Serif for headings. Inter for body. JetBrains Mono for code."
> "Color is flat. Backgrounds are solid. Transitions between colors happen at boundaries, not within surfaces."
> "Every element earns its place. Nothing is decorative. If it does not serve the content, it does not exist."
> "Borders speak. 4px = primary emphasis. 3px = section-level. 1px = subtle articulation. This hierarchy is absolute."
> "The header is the page's signature. Dark background. 3px red bottom border. Dense. Purposeful."
> "Text breathes at 1.7 line-height. Prose never exceeds 70 characters per line. Third-level headings are italic."

**Why IMPORT VERBATIM:** This is the definitive world-description text. Every sentence is carefully crafted to convey identity without prohibition. The TC skill should use this exact text (or a condensed version) as its soul section, replacing any prohibition-format soul constraints.

#### IMPORT: Tier 2 Natural Laws Format

**Pipeline text (lines 43-53):**
> "Adjacent backgrounds differ by at least 15 RGB points. Below that, the human eye cannot distinguish them. 15 is the floor, not the target. Calibration: 15 = subtle (floor), 20 = minimum compositional (aim here), 25 = confident, 50 = dramatic. Use the full range."

> "Letter-spacing below 0.025em is invisible. When applying letter-spacing, stay above 0.025em. Compositional range: 0.03-0.05em."

> "When padding-bottom + margin-bottom + padding-top between content blocks exceeds 120px total, the eye registers a void -- the page appears broken, not breathing. Compositional range: 60-90px (generous but purposeful)."

**Why IMPORT:** These frame thresholds as PHYSICS ("the human eye cannot distinguish them") not as RULES ("FAIL if delta < 15 RGB"). The TC skill should adopt this framing for all perception thresholds. The physics framing is more memorable, more motivating, and more honest about WHY the constraint exists.

#### IMPORT: Priority Override Section (Tier 2 vs Tier 3)

**Pipeline text (lines 62-72):**
> "When Tier 3 creative decisions conflict with Tier 2 perception physics:
> - Tier 2 WINS for: background deltas, letter-spacing, stacked gaps, single margins
> - Tier 3 WINS for: metaphor interpretation, component selection, layout patterns, color accents, typography beyond thresholds"

**Why IMPORT:** The TC skill has no explicit conflict resolution protocol. When metaphor suggests something that violates a perception threshold, the builder has no guidance. The pipeline's priority override makes creative authority REAL by specifying exactly where it applies and where physics trumps it. This is enabling, not constraining.

#### IMPORT: Worked Examples for Conflict Resolution

**Pipeline text (lines 68-72):**
> "Brief says Zone 3 background #f5f2ec but Tier 2 requires delta >= 15 from Zone 2 #faf7f0 -- delta is only 5 -- override to #e8e2d5 (delta 24, confident intensity)"

**Why IMPORT:** Shows the builder HOW to resolve conflicts with specific CSS values. The TC skill gives principles; the pipeline gives recipes. Recipes produce better output.

#### IMPORT: 80% Creative Authority Statement

**Pipeline text (lines 158):**
> "You have 80% creative authority within identity constraints. The soul (Tier 1) and physics (Tier 2) are non-negotiable. Everything else -- how you interpret the metaphor, which mechanisms you deploy, how zones transition -- is yours."

**Why IMPORT:** This is genuine permission. The TC skill has an equivalent sentiment scattered across its text, but the pipeline consolidates it into a single clear statement with explicit boundaries. The builder knows exactly what is theirs and what is not.

#### IMPORT: Content-Type Conditional (Prose/Mixed/Visual)

**Pipeline text (lines 135-155):**
> "IF page is predominantly PROSE: Focus on typography and spacing as primary differentiators... Metaphor should be ATMOSPHERIC (felt through rhythm and proportion, not through structural novelty)... Fewer zone boundaries needed (3-4 total) -- let the prose flow"

> "IF page is predominantly MIXED: Deploy FULL multi-coherence framework... Metaphor should be STRUCTURAL (expressed through layout shifts, grid changes, component adaptation)... More zone boundaries (4-6 total)"

**Why IMPORT:** The TC skill treats all content types identically through the pipeline. The pipeline's conditional gives different compositional direction based on what the content IS. This is exactly the kind of generative guidance the TC skill needs — not "do 6 channels" universally, but "for PROSE, focus on typography and spacing; for MIXED, deploy full multi-coherence."

#### ADAPT: Zone Background Assignments (Tier 2 LOCKED)

**Pipeline text (lines 82-92):**
> "Zone Background Assignments (Tier 2 LOCKED)... These are FIXED -- the builder may modify accents, typography, spacing, and components, but zone background hex values come from value-tables.md and are NOT creative territory."

**Why ADAPT:** The concept of locking background hex values in the brief (not the builder's decision) prevents threshold gaming and ensures perceptible zones. But the TC skill operates differently — it doesn't have a separate "brief assembler" stage. ADAPT by having the TC skill's Phase 4 specify zone backgrounds as PART OF the metaphor collapse output, with a self-check that deltas are >= 15 RGB. The backgrounds should feel like creative output, not imposed constraints.

#### LEAVE: Assembly Rules as BV-Gate Format

**Pipeline text (lines 226-236):**
> "PRESERVE RECIPE FORMAT: Use verbs like 'Build,' 'Create,' 'Derive,' 'Map' -- NOT 'Verify,' 'Fail if,' 'Must be.'"

**Why LEAVE (the format, import the principle):** The rule ABOUT recipe format is itself in checklist format. "Do NOT use these verbs" is a prohibition. The TC skill should embody recipe format naturally, not have a meta-rule about maintaining it.

---

### 3. artifact-routing.md (~1,056 lines)

#### IMPORT: Content Tension Identification Protocol

**Pipeline text (routing artifact lines 96-106, from Phase 0):**
> "Identify 2-4 content tensions -- opposing poles that the content navigates between. For each tension:
> - Name both poles with a representative quote from the content
> - State which pole is dominant
> - Identify which tension is metaphor-shaping (most structural to the page's visual architecture)"

**Why IMPORT:** The TC skill already has tension derivation (Phase 2), but the pipeline's version adds two elements the TC skill lacks: (1) requiring QUOTES from the content (grounding), and (2) identifying which tension is "metaphor-shaping" (prioritization). These are generative improvements that make the TC skill's existing strength stronger.

#### IMPORT: Content Map Output Template

**Pipeline text (routing artifact lines 111-155):**
The structured content map template with 7 sections (Classification, Mode, Zone Architecture, Tensions, Metaphor Seeds, Density Arc, Reader Profile) gives builders a concrete output format that the TC skill's Phase 0 lacks.

**Why IMPORT:** The TC skill's Phase 0 produces an assessment but doesn't have a standard output template. The pipeline's template ensures completeness without being prescriptive about content.

#### IMPORT: Compression Physics Concept

**Pipeline text (routing artifact TOC #8):**
> "S(x) = 1/(1+C(x)): C(x)=0 survives, C(x)>0 dies"

**Why IMPORT (as concept, not formula):** The survival function captures an important principle: items with zero compositional complexity survive compression perfectly (hex colors, font names), while items with any complexity die. The TC skill should be aware of this when producing output for downstream builders — some things must be EXACT (colors, widths) while others must be DIRECTIONAL (metaphor, density arc).

#### ADAPT: Reader Model (5-Axis Input Space)

**Pipeline text (routing artifact TOC #4):**
> "5 axes: Info Density, Visual Complexity, Progressive Disclosure, Navigation Complexity, Entry Velocity"

With specific CSS parameter adjustments per axis position (e.g., "line-height: 1.5 (expert) ... 1.8 (general)").

**Why ADAPT:** The 5-axis reader model is a powerful concept the TC skill completely lacks. However, the pipeline's implementation is heavily parameterized (specific px values per axis position). ADAPT by importing the 5 axes as QUESTIONS the TC skill asks during Phase 0, without the specific CSS value mappings — let those emerge from the metaphor collapse.

#### ADAPT: Temporal Composition (Scroll Rhythm)

**Pipeline text (routing artifact TOC #5):**
> "Three dimensions: Section Height ('measure length'), Visual Density ('dynamics'), Transition Weight ('articulation')"

**Why ADAPT:** The TC skill has density arc but lacks the pipeline's three-dimensional model of scroll rhythm. The music metaphors (measure length, dynamics, articulation) are particularly strong as creative direction. ADAPT by integrating these as Phase 4 compositional vocabulary, not as separate routing concerns.

#### LEAVE: Brief Verification Gates (BV-01 through BV-05)

**Pipeline text (routing artifact, Phase 1 description):**
> "BV-01: Tier Line Budget -- each tier meets minimum line count"
> "BV-03: Recipe Format Verification -- recipe:checklist verb ratio >= 3:1"
> "BV-04: Suppressor Scan -- zero instances of quality suppressor patterns"

**Why LEAVE:** These are compliance infrastructure for a multi-agent pipeline where a Brief Assembler might produce bad output. The TC skill is a single-agent pipeline — there's no separate assembler whose output needs verification. Importing BV gates would add compression mindset to a generative tool.

#### LEAVE: Content-Form Fit Gate

**Pipeline text (routing artifact TOC #12):**
> "Content-Form Fit Gate (Council-Added)"

**Why LEAVE:** The TC skill already has its own content-form fit mechanism (the Addition Test in Phase 2). The pipeline's version is a formal gate; the TC skill's version is an escape valve. The escape valve framing is more generative.

---

### 4. artifact-builder-recipe.md (828+ lines, split into compose/enrich)

#### IMPORT: Recipe Verb System (Read -> Select -> Deploy -> Assess)

**Pipeline text (recipe lines 35-84, Phase 1-2):**
> "Step 1.1: Read tokens.css... Step 1.4: Assess -- do you know the vocabulary?"
> "Step 2.1: Select zone background strategy + colors"
> "Step 2.9: Assess -- are your selections coherent?"

The Read/Select/Deploy/Assess cycle is the pipeline's most powerful structural innovation. Each phase has the same shape:
1. **READ** — internalize vocabulary (input)
2. **SELECT** — make creative decisions (choice)
3. **DEPLOY** — build with those decisions (execution)
4. **ASSESS** — check your own work (reflection)

**Why IMPORT:** The TC skill uses a different verb system (Question, Derive, Collapse, Build) which is creative but lacks the explicit reflection step. The pipeline's ASSESS step after each phase is where quality emerges — it forces the builder to LOOK at what they built before moving on. The TC skill should add assessment checkpoints after each phase.

#### IMPORT: Concept-Based CSS Naming as Conviction Signal

**Pipeline text (recipe lines 126-134):**
> "Derive a governing metaphor from the content. Name your CSS custom properties by CONCEPT, not by position."
> "COMPOSED mode indicator: --dispatch-open, --dispatch-tactical (named by concept)"
> "APPLIED mode indicator: --bg-z1, --bg-z2 (named by position -- avoid this)"
> "THE SMOKING GUN: CSS custom properties naming is the strongest single indicator of composed vs applied mode."

**Why IMPORT:** The TC skill derives metaphors but never explicitly instructs the builder to encode the metaphor IN THE CSS VARIABLE NAMES. This is the pipeline's most brilliant connector between metaphor and implementation. When CSS variables are named by concept, every line of CSS that uses them reinforces the metaphor. This should be in the TC skill's Phase 4 output format.

#### IMPORT: D-01 through D-09 Disposition System (Experimental Tag)

**Pipeline text (recipe lines 363-498):**
> "EVIDENCE STATUS: EXPERIMENTAL (council verdict Part 5, item 9)"
> "These 9 instructions are DESIGN INTENTIONS that create conditions for quality. They do not guarantee outcomes."

Each disposition follows the pattern:
- **PURPOSE:** (what it does)
- **VOCABULARY:** (specific CSS techniques)
- **DESIGN INTENTION:** (what emotional register it creates CONDITIONS for)

**Why IMPORT:** The TC skill has nothing equivalent to the disposition system. The dispositions are the pipeline's primary mechanism for shifting builders from APPLIED to COMPOSED mode. Key dispositions for TC import:
- **D-01 (Content-Register Reading):** Already implicit in TC Phase 0 but not explicit
- **D-02 (Room Perception):** "Each zone transition should feel like entering a different room" — pure direction, zero compliance
- **D-03 (Signing Frame):** "Build as if you will sign this page" — conviction distilled
- **D-04 (Second-Half Moment):** "Break the established pattern" — explicit permission for surprise
- **D-06 (Negative Space as Shape):** "Whitespace is not emptiness — it is a deliberate shape"
- **D-09 (Quiet Zone):** "Designate at least one zone as deliberately plainer" — the discipline of restraint

**The [EXPERIMENTAL] tag is itself a generative innovation.** It tells the builder "this is a creative hypothesis, not a verified law." That honesty creates more creative freedom than a confident mandate would.

#### IMPORT: Creative Check Before Building

**Pipeline text (recipe line 199):**
> "Before proceeding to Phase 3, pause. Are you EXCITED about building this page? Can you see the finished product in your mind? If the selections feel like compliance rather than creation, revisit the structural metaphor (Step 2.3). The metaphor should make you want to build, not just make you able to build."

**Why IMPORT:** This is the single most important sentence in the entire pipeline for preventing flat output. It converts an implicit creative standard into an explicit checkpoint. The TC skill should have this after Phase 3 (metaphor collapse) — "Does this metaphor make you want to build?"

#### IMPORT: Hover Behavior Vocabulary (Mandatory Section)

**Pipeline text (TC brief template lines 198-209):**
> "Interactive elements reveal depth on hover. Deploy >= 3 hover interactions across the page."
> With specific CSS examples for card hover, link hover, expandable hover.

**Why IMPORT:** The TC skill mentions hover states in its mechanism catalog references but never provides specific CSS vocabulary for them. The pipeline's hover section with concrete CSS snippets is exactly the kind of recipe-format instruction that produces quality output. The 100% loss rate note is valuable context.

#### IMPORT: INTENT Comment Protocol

**Pipeline text (recipe lines 328-351):**
> "As you build, embed <!-- INTENT ... --> HTML comments that explain WHY you made key CSS decisions."

Format: `<!-- INTENT [D-XX] selector | what you decided and why | which brief item motivated it | what you traded off -->`

**Why IMPORT:** INTENT comments serve three functions: (1) they force the builder to articulate WHY, which deepens commitment, (2) they create an audit trail for PA auditors, (3) they feed the IMPROVE builder with context. The TC skill's output currently has no structured reflection mechanism.

#### ADAPT: Component Zone-Adaptation (Fractal Coherence)

**Pipeline text (recipe lines 288-313):**
> "Components should not look identical across all zones. Adapt shared components to each zone's density and character."

With a concrete table showing padding, border-weight, background tint, and label sizing per zone density.

**Why ADAPT:** The TC skill talks about fractal coherence conceptually but the pipeline provides a concrete recipe with CSS property-value pairs per zone type. ADAPT by including zone-adaptation as a Phase 4 output requirement, with the principle (not the exact values, which are content-dependent).

#### LEAVE: Mechanism Quick-Reference Table

**Pipeline text (recipe lines 49-62):**
> "| Category | Top Mechanisms | CSS Signature |"

**Why LEAVE:** The TC skill already has its own mechanism vocabulary through the mechanism catalog reference. The pipeline's quick-reference is useful for its context (builders who haven't read the catalog) but redundant for TC skill users who have already done multi-axis questioning.

#### LEAVE: Builder Signal Declarations

**Pipeline text (recipe lines 315-327):**
> "<!-- SCROLL-REVEALS: true -->"

**Why LEAVE:** These are gate-runner communication signals (tells downstream validation what to expect). The TC skill doesn't have a gate-runner; these would be dead weight.

---

### 5. artifact-orchestrator.md (~744 lines)

#### IMPORT: IMPROVE Builder Isolation Concept

**Pipeline text (orchestrator lines 563-567):**
> "IMPROVE builder receives: artistic impression from Weaver + conviction statement + original brief + Cycle 0 HTML."
> "IMPROVE builder does NOT receive: gate results, PA scores, failure analysis, fix lists, threshold numbers, diagnostic vocabulary."
> "IMPROVE brief uses generative verbs ('illuminate', 'reveal', 'deepen', 'intensify') -- NOT diagnostic verbs ('fix', 'repair', 'address', 'correct')."

**Why IMPORT (as principle):** The isolation concept — that quality grows through COMPOSITION not CORRECTION — is the pipeline's deepest philosophical insight. When a page needs improvement, the answer is not "fix the 6 defects" but "compose deeper, knowing what was." The TC skill should embed this principle in its standalone output mode: if the user wants to iterate, the TC skill should produce generative direction ("deepen the metaphor here, let the boundary breathe more"), not diagnostic reports.

#### IMPORT: Two-Pass Architecture Concept

**Pipeline text (orchestrator Section 5, lines 291-360):**
Pass A = COMPOSE (structure, conviction, metaphor deployment, D-01 through D-06, D-09)
Pass B = ENRICH (edge intentionality, skeleton test, hover states, responsive polish)

**Why IMPORT (as TC output framing):** The TC skill currently outputs one monolithic compositional layout. The pipeline's two-pass concept — first compose the structure, then enrich the details — could improve TC output quality. The TC skill's Phase 4 could produce "Composition" (structure + metaphor) as primary output and "Enrichment Notes" (edge treatment, hover vocabulary, responsive direction) as secondary output.

#### IMPORT: Master Equation Framing

**Pipeline text (orchestrator lines 25-28):**
> "Quality_0 = Agent Capability x Content Affordance x Spec Fidelity"
> "Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)"
> "Zero in any Cycle 0 factor = zero starting point"

**Why IMPORT (concept only):** The multiplicative quality equation is a powerful framing: quality is the PRODUCT of capability, content, and spec quality. Zero in any factor zeroes the output. The TC skill should internalize this: the TC brief's quality directly multiplies the builder's output quality. A great builder with a flat brief produces flat output.

#### ADAPT: Experiential Scan Protocol

**Pipeline text (orchestrator lines 396-445):**
> "30-SECOND READ TEST: Open the page at 1440px. Scroll at reading speed from top to bottom. Do not analyze. Attempt to READ the page as a visitor would."

**Why ADAPT:** The experiential scan is a perceptual audit concept — look at the rendered page as a READER, not as a builder. The TC skill could include a self-assessment step in Phase 4 that says "scroll through your layout. Does it feel like a journey or a list?"

#### LEAVE: Observer Agent Protocol

**Pipeline text (orchestrator lines 124-156):**
> "The Observer is the FIRST agent spawned... 30 binary checks across 7 categories"

**Why LEAVE:** The Observer is multi-agent pipeline infrastructure. The TC skill is a single-agent tool. An observer would observe nothing useful.

#### LEAVE: Verdict Decision Tree (RELEASE/POLISH/IMPROVE/RETHINK)

**Pipeline text (orchestrator Section 7, lines 468-612):**
Detailed threshold-based verdict logic with PA-05 score ranges.

**Why LEAVE:** Verdict logic is orchestrator infrastructure for deciding what happens after a build. The TC skill produces a brief, not a verdict. The verdict system embodies the compression mindset at its most explicit: "PA-05 >= 3.5 AND zero soul violations = RELEASE" is a binary gate, not creative direction.

#### LEAVE: Gate Logic Relocated from Gate Runner

**Pipeline text (orchestrator lines 659-726):**
GR-23 through GR-28 precondition checks.

**Why LEAVE:** These are pipeline plumbing — model verification, suppressor counting, brief size caps. None of this is relevant to the TC skill's creative function.

---

### 6. MANIFEST.md (~600+ lines)

#### IMPORT: Concept of Concept-Based Custom Properties as Mode Indicator

**Pipeline text (MANIFEST.md, Phase 1.5 mode selection in orchestrator reference):**
> "Mode determinant 1: Custom property naming (position vs concept)"
> "Mode determinant 5: Governing logic (absent vs articulable in 1 sentence)"

**Why IMPORT:** The TC skill should make these the PRIMARY quality indicators in its output. If the builder's CSS custom properties are named by concept (not position), the page is composed. If the governing logic can be stated in one sentence, the metaphor is working. These are self-diagnostic tools the TC skill can provide.

#### ADAPT: PA-05 Sub-Criteria as Quality Vocabulary

**Pipeline text (MANIFEST.md lines 338-342):**
> "1. Designed -- Does this look intentionally composed, not template-generated?"
> "2. Coherent -- Do visual decisions reinforce each other across the page?"
> "3. Proportionate -- Are spatial relationships deliberate and hierarchical?"
> "4. Polished -- Are details refined (typography, spacing, color transitions)?"

**Why ADAPT:** These four words (Designed, Coherent, Proportionate, Polished) are the best quality vocabulary in the pipeline. The TC skill should use these as self-assessment criteria after Phase 4, framed as questions to ask about the output — not as pass/fail gates.

#### LEAVE: Agent Roster, Timing Estimates, Cost Estimates

**Pipeline text (MANIFEST.md Section 2):**
Agent count, duration, model requirements.

**Why LEAVE:** Multi-agent orchestration details are irrelevant to TC skill operation.

#### LEAVE: Gate-Runner Architecture (split files, gate counts, tiers)

**Pipeline text (MANIFEST.md lines 273-299):**
57 gates across 5 files, 4 tiers.

**Why LEAVE:** Gate infrastructure is the most compression-mindset artifact in the pipeline. Every gate is a "FAIL if" statement. The TC skill should not import any of this.

---

## Cross-Cutting Findings

### Pattern 1: World-Description > Prohibition (Confirmed in Every Artifact)

Every artifact demonstrates the same pattern: where the builder-facing text uses world-description ("this world IS"), quality rises. Where it uses prohibition ("never use," "FAIL if"), quality is suppressed.

**TC skill current state:** Mixed. Phase 0 uses generative language. The "Universal Compositional Requirements" section (lines 84-96) is heavily prohibition-format: "MUST meet ALL," "NON-NEGOTIABLE," "Metaphor NEVER overrides." The soul constraints need full rewrite into world-description.

### Pattern 2: Recipe Format > Checklist Format (Confirmed N=4)

The pipeline proves conclusively (N=4, massive effect size) that recipe format (Read/Select/Deploy/Assess) produces DESIGNED output while checklist format (Verify/Fail if/Must be) produces FLAT output.

**TC skill current state:** Mostly recipe format (Phase 1-4 are sequential steps). But pockets of checklist format exist, especially in the "Universal Compositional Requirements" and guardrail sections. These should be converted.

### Pattern 3: Calibration Ranges > Hard Rules (Confirmed by Flagship Failure)

The Flagship experiment proved that builders who see only floor values park at floor values. The pipeline's calibration ranges (subtle/compositional/dramatic) give builders a vocabulary for INTENSITY, not just compliance.

**TC skill current state:** Has thresholds but no calibration ranges. ">=15 RGB delta" appears without "15 is subtle, 25 is confident, 50 is dramatic."

### Pattern 4: Disposition System > Mechanism Checklist

The D-01 through D-09 system is the pipeline's most generative innovation. Each disposition:
- Has a PURPOSE (what it does)
- Has VOCABULARY (specific CSS to deploy)
- Creates CONDITIONS for an emotional register (not guarantees)
- Is tagged EXPERIMENTAL (honest about evidence level)

**TC skill current state:** Has mechanism categories but no disposition system. The TC skill tells builders WHAT to deploy but not WHY or HOW to think about it. Dispositions bridge this gap.

### Pattern 5: The [EXPERIMENTAL] Tag as Permission

Tagging creative directions as EXPERIMENTAL is paradoxically more empowering than stating them as REQUIREMENTS. "D-04 creates conditions for surprise (not guaranteed)" gives the builder permission to try — and permission to fail. A requirement ("MUST include a surprise moment") creates anxiety.

**TC skill current state:** Uses requirement language throughout. No experimental tags.

---

## Summary: Import/Adapt/Leave Counts

| Category | Count | Key Items |
|----------|-------|-----------|
| **IMPORT** | 16 | World-description soul text, calibration table, 80% creative authority, disposition system (D-01-D-09), concept-based CSS naming, creative check, hover vocabulary, INTENT comments, IMPROVE isolation principle, recipe verb system, priority override, content-type conditional, content tension protocol, two-pass concept, master equation, mode indicators |
| **ADAPT** | 6 | Evidence taxonomy, zone background locking, reader model (5-axis), temporal composition (scroll rhythm), component zone-adaptation, PA-05 sub-criteria as self-assessment |
| **LEAVE** | 11 | Anti-pattern detection, risk probabilities, BV gates, content-form fit gate, mechanism quick-reference, signal declarations, observer protocol, verdict decision tree, gate logic, agent roster/timing, gate-runner architecture |

---

## Highest-Priority Imports (Top 5)

1. **World-description soul text** (from TC brief template Tier 1) — Replace all prohibition-format soul constraints
2. **Calibration ranges** (from identity-perception Tier 2) — Add "subtle/compositional/dramatic" to every threshold
3. **Disposition system D-01 through D-09** (from builder recipe Phase 4) — New section in TC skill, with [EXPERIMENTAL] tags
4. **Concept-based CSS naming as conviction signal** (from builder recipe Step 2.3) — Add to Phase 4 output format
5. **80% creative authority + priority override** (from TC brief template Tier 3) — Explicit permission statement with clear boundaries

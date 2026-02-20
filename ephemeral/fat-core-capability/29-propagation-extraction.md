# Propagation Solutions Extraction for Flagship Variant

**Extractor:** bias-auditor (Opus 4.6)
**Task:** #54
**Date:** 2026-02-19
**Sources:** Report 18 (builder visibility, 690 lines), Report 28 (propagation without loss, 639 lines), Report 84 (telescope+microscope, 736 lines), Report 74 (bridging tissue, 828 lines)

---

## Executive Summary

Four reports totaling ~2,893 lines investigate how compositional intelligence reaches the CSS-writing agent without compression loss. The core finding across all four: **the problem is FORMAT, not VOLUME.** CSS-as-intelligence + structured data achieves ~2x survival at ~30% less volume. But all four reports were written with the Middle/linear-pipeline frame in mind. This extraction re-evaluates every recommendation for Flagship Fat Core applicability.

**Key extractions:**
- (a) Format: Recipe with YAML data blocks + embedded CSS snippets = proven winner. For Fat Core, the format becomes INTERNAL STRUCTURING, not inter-agent handoff.
- (b) Bridging tissue: 4 new artifacts designed (build recipe instance, cascade value table, fix instructions, gate results JSON). For Fat Core, 2 of 4 are UNNECESSARY (no handoff = no bridging needed); 2 remain essential (cascade table for verification, gate results for fix cycle).
- (c) Telescope/microscope: The integrated model (BECAUSE clauses + CSS values at every line) is the proven pattern from remediation. For Fat Core, this becomes the agent's INTERNAL DISCIPLINE, not a document format.
- (d) Fat Core input format: ~250-350 line conventions brief with perception thresholds, soul constraints, anti-scale model, creative authority, and Flagship-specific sections (multi-coherence binding, fractal echo, per-category mechanism minimums).

---

## (a) What Format Delivers Compositional Intelligence Without Triggering Inverse-Quality-With-Input?

### The Evidence Chain

Report 18 (Section 3) establishes the format hierarchy:

| Format | Evidence | PA-05 |
|--------|----------|-------|
| Recipe + specific CSS values | Middle builder (100 lines) | 4/4 |
| Recipe + specific CSS per phase | Remediation builder (1,025 lines) | 2.5/4 |
| Checklist + abstract constraints | Flagship builder (963 lines to team, 75 to builder) | 1.5/4 |

Report 28 (Section 2) provides the fidelity spectrum:

| Format | Fidelity |
|--------|----------|
| CSS code | LOSSLESS |
| HTML structure | LOSSLESS |
| Structured data (JSON/YAML) | NEAR-LOSSLESS |
| Prose with inline code | MODERATELY LOSSY |
| Prose summary | HIGHLY LOSSY |
| Abstract instruction | CATASTROPHICALLY LOSSY |

Report 18 (Section 3.3) identifies that different build phases need DIFFERENT formats:
- Code blocks for mechanical phases (CSS reset, borders, accessibility)
- YAML tables for structured lookup phases (zone backgrounds, typography)
- Prose for absorption and creative deployment
- Binary checklist for verification ONLY

**The governing principle:** SPECIFICITY > LENGTH. 100 specific lines beat 963 abstract lines. The inverse-quality-with-input correlation is actually INVERSE-QUALITY-WITH-ABSTRACTION. Adding more SPECIFIC material helps; adding more ABSTRACT material hurts.

### For Fat Core at Flagship

The format question transforms entirely for Fat Core because there is NO HANDOFF. The single Opus agent plans AND builds. This means:

1. **No build plan artifact needed.** The agent's planning output stays in its own context. No compression at Boundary 3.

2. **No recipe as separate document.** The agent doesn't need sequenced instructions -- it IS the intelligence that would write the instructions. What it needs is: CONSTRAINTS (soul, thresholds), VOCABULARY (tokens, components, mechanisms), and CREATIVE CONTEXT (content, anti-scale model).

3. **The conventions brief is the RIGHT format for Fat Core.** Convention = WHAT outcomes + WHY, not HOW steps. CD-006 got conventions and scored 39/40. The Middle builder got a recipe and scored 4/4. Convention works when the agent has full creative context; recipe works when the agent is following externally-generated instructions.

4. **BUT: For Flagship, 100 lines is insufficient.** (See Task #43 bias audit.) Flagship needs:
   - Soul constraints (~20 lines)
   - Perception thresholds table (~15 lines)
   - Anti-scale model (~5 lines)
   - Creative authority clause (~20 lines)
   - Spatial rules (~15 lines)
   - Multi-coherence binding rules (~25 lines) -- FLAGSHIP ADDITION
   - Fractal echo requirements (~20 lines) -- FLAGSHIP ADDITION
   - Per-category mechanism minimums with deployment guidance (~30 lines) -- FLAGSHIP ADDITION
   - Flagship anti-patterns (~15 lines) -- FLAGSHIP ADDITION
   - Component library adoption guidance (~15 lines) -- FLAGSHIP ADDITION
   - **Total: ~180-200 lines**

5. **YAML data blocks within conventions brief.** The perception threshold table and multi-coherence binding rules work best as YAML blocks (machine-parseable, unambiguous). The creative authority and anti-scale model work best as prose. The conventions brief should be a HYBRID format, matching Report 18's finding.

### Concrete Recommendation

**Fat Core conventions brief: ~200-250 lines, hybrid format (prose + YAML).**

Not 100 lines (Middle-calibrated). Not 650 lines (recipe-bloated). 200-250 lines of convention-style guidance with YAML blocks for structured data and prose for creative principles. This is within the "sweet spot" identified by Report 28's information theory analysis (~250-350 lines for structured YAML + embedded CSS) but adapted for convention-style (WHAT outcomes) rather than recipe-style (HOW steps).

---

## (b) What 'Bridging Tissue' Was Designed Between Pipeline Stages?

### The Four New Artifacts (Report 74)

Report 74 maps all 11 boundaries and designs 4 new artifacts + 4 enhanced artifacts:

| Artifact | Size | Purpose | Producer | Consumer |
|----------|------|---------|----------|----------|
| `_build-recipe.md` | ~250-400 lines | Structured recipe instance with YAML + CSS + BECAUSE clauses | TC Planner (Phase 4.8) | Orchestrator, Builder |
| `_cascade-value-table.md` | ~50-100 lines | Computed CSS proof at every section boundary | Builder (Phase 8) | Gates, Orchestrator |
| `_fix-instructions.md` | ~50-150 lines | Orchestrator-generated symptom-to-fix mapping | Orchestrator | Fix-cycle Builder |
| `_gate-results.json` | ~50-100 lines | Enhanced gate results with measured values + fix suggestions | Gate runner | Orchestrator, Fix builder |

Enhanced artifacts:
| Artifact | Enhancement |
|----------|------------|
| `_pa-report.md` | Add convergence counts (8/9 vs 5/9) |
| `_build-log.md` | Add fix cycle section with diffs |
| `operational-recipe-template.md` | Rewrite from 650 to 300 lines (universal rules only) |
| Per-agent briefs (4 types) | NEW: builder (~40 lines), TC planner (~40 lines), PA auditor (~25 lines), checkpoint (~20 lines) |

### For Fat Core at Flagship

Fat Core eliminates boundaries 3, 4, 5, and 10 (TC-to-builder handoff, handoff gate, multi-file synthesis, PA-to-fix cycle). This means:

**UNNECESSARY for Fat Core (no handoff = no bridging needed):**
- `_build-recipe.md` -- The agent IS both the planner and builder. No inter-agent recipe needed. The planning intelligence stays in context.
- `_fix-instructions.md` -- The FIX CYCLE uses the SAME agent. It has full compositional memory. No symptom-to-diagnosis mapping needed.
- `operational-recipe-template.md` -- Fat Core's agent doesn't follow an external recipe. It plans and builds organically. It needs constraints and conventions, not phases.
- TC Planner brief, Planner checkpoint brief -- No separate planner agent.

**ESSENTIAL for Fat Core (verification shell still exists):**
- `_cascade-value-table.md` -- CRITICAL. Even with Fat Core, the agent must PROVE its computed CSS matches compositional intent. This is the self-verification artifact. The gate runner compares the cascade table against thresholds.
- `_gate-results.json` -- ESSENTIAL. The gate runner still runs 15+ binary checks. Enhanced output with measured values + fix suggestions is equally valuable for Fat Core's self-correction.
- PA auditor brief -- ESSENTIAL. The 9 PA auditors are unchanged in Fat Core. They still need zero-context evaluation protocol.
- Enhanced `_pa-report.md` -- ESSENTIAL. Convergence counts help the core agent prioritize fixes.

**ADAPTED for Fat Core:**
- Builder brief (~40 lines) becomes CORE AGENT CONVENTIONS (~200-250 lines). The Fat Core agent's conventions brief absorbs and expands the builder brief concept.
- `_build-log.md` -- ESSENTIAL but the core agent writes it throughout the build, not just at Phase 8 and fix cycles. The log becomes the agent's compositional reasoning trace.

### Bridging Tissue Summary for Fat Core

| Linear Pipeline Artifact | Fat Core Equivalent | Needed? |
|-------------------------|-------------------|---------|
| `_build-recipe.md` (TC-generated) | None (agent plans internally) | NO |
| `operational-recipe-template.md` | Conventions brief (~200-250 lines) | ADAPTED |
| `_cascade-value-table.md` | Same (self-verification) | YES |
| `_fix-instructions.md` | None (same agent fixes) | NO |
| `_gate-results.json` | Same (gate runner output) | YES |
| Per-agent briefs (4) | Core agent conventions + PA brief | ADAPTED (2 of 4) |
| Enhanced `_pa-report.md` | Same (PA shell unchanged) | YES |
| Enhanced `_build-log.md` | Same (reasoning trace) | YES |

**Net: Fat Core needs 4 of 8 artifacts. Eliminates the 4 inter-agent bridging artifacts. Keeps the 4 verification artifacts.**

---

## (c) How Does the Telescope/Microscope Model Work for Flagship?

### The Core Insight (Report 84)

Report 84's central finding: "The fix is not two documents (theory + recipe). The fix is ONE integrated knowledge format where every CSS instruction carries its compositional meaning." The proven pattern from remediation:

```css
/* Ch4 STRUCTURAL BORDERS -- Section-level containment.
   6 of 12 sections. Alternating presence creates rhythm. */     -- TELESCOPE
.zone-s2 .page-container {                                        -- RECIPE
  border-left: 3px solid var(--color-border);                     -- MICROSCOPE
  padding-left: 29px;
}
```

The builder reads WHY before WHAT. This is structurally different from:
- Telescope in one document, microscope in another (PV2 current)
- Telescope absent entirely (master prompt failure)
- Telescope in the builder's HEAD (CD-006 success)

### Five Integration Mechanisms (Report 84, Section 2)

1. **Integrated Build Recipe** -- Every CSS instruction carries its compositional meaning inline (BECAUSE clause + hex value + delta check)
2. **Builder Reads the Build Plan as the Build Recipe** -- TC output format changes from planning manifest to integrated execution document
3. **Transition Table as Telescope+Microscope Bridge** -- CSS delta values and semantic direction labels in the same rows
4. **Scale-Organized Compositional Phases** -- Phases 3-6 organized by SCALE (Page/Section/Component/Character) instead of by CSS property type
5. **Creative Authority with Compositional Guardrails** -- Explicit permission to override non-soul values, with logging requirement

### For Fat Core at Flagship

Fat Core transforms the telescope/microscope problem fundamentally. When ONE agent plans AND builds:

**The agent IS the telescope.** It doesn't need external compositional reasoning because it derived the composition itself. The geological strata metaphor, the isomorphism table, the multi-coherence plan -- all of this exists in the agent's context from its own planning phase. No BECAUSE clause needed because the agent already knows the BECAUSE.

**The agent needs the microscope at specific moments.** When writing CSS for zone backgrounds, the agent must check: "Does this hex value produce >= 15 RGB delta from the adjacent zone?" This is a SELF-CHECK, not an external instruction. The conventions brief provides the THRESHOLDS (microscope) but not the VALUES (those come from the agent's own planning).

**For Flagship specifically:**

The danger is that the Fat Core agent plans at the beginning (Phase A/B) and then gradually loses compositional memory during the 60-120 minute build phase (Phase C). By the time it's writing CSS for Section 11, the metaphor direction established at Section 1 may have drifted.

**Solution: INTERNAL telescope/microscope discipline.** The conventions brief should include:

```
COMPOSITIONAL MEMORY PROTOCOL (Flagship pages only):

At every ZONE BOUNDARY (when your CSS transitions from one zone to the next):
1. RECALL: What is the coherence direction? (e.g., "deeper = denser = darker = heavier")
2. CHECK: Does the CSS you just wrote for this boundary shift >= 3 channels?
3. VERIFY: Are the channels shifting in the SAME semantic direction?
4. LOG: Write a CSS comment with the boundary assessment.

At the MIDPOINT of your build (~Section 6 of 12):
PAUSE. Render the page. Scroll from top to bottom.
  - Does the density arc hold?
  - Is the metaphor still structural, or has it become decorative?
  - What is the single WEAKEST section? Strengthen it.

At every FIFTH mechanism deployment:
PAUSE. Count mechanisms by category (S/T/M/B/R).
  - Any category at 0? Deploy one.
  - Any category at 4+? Check for over-saturation.

This protocol prevents compositional drift during long builds. The
conventions don't prescribe VALUES -- you derived those yourself. The
protocol prescribes SELF-CHECKS that keep your compositional memory active.
```

This is ~30 lines added to the conventions brief. It adapts the telescope/microscope model from "external document format" to "internal cognitive discipline."

### The Transition Table for Fat Core

Report 84 (Section 2.3) and Report 18 (Section 7) both emphasize the transition table as the PRIMARY compositional artifact. For Fat Core:

**The agent GENERATES the transition table as part of its own planning (Phase B), not for handoff but for SELF-REFERENCE.** During the 60-120 minute build, the agent can scroll up to its own transition table to verify that the CSS it's writing matches the plan it made. This is the "telescope + microscope in the same rows" pattern, but SELF-AUTHORED rather than received from another agent.

**The conventions brief should MANDATE that the agent write a transition table before starting CSS:**

```
BEFORE writing any CSS, produce a TRANSITION TABLE in your build log:

| Boundary | bg delta | font-size | font-weight | letter-spacing | border-left | margin | channels |
|----------|----------|-----------|-------------|---------------|-------------|--------|----------|
| ->Z1     | ...      | ...       | ...         | ...           | ...         | ...    | n/a      |
| Z1->Z2   | ...      | ...       | ...         | ...           | ...         | ...    | >= 3?    |

This table is YOUR navigation tool. When writing CSS for any zone boundary,
consult YOUR table to verify you're hitting >= 3 channel shifts.
After build, the gate runner will measure ACTUAL computed values. If they
differ from your plan by more than 5 RGB / 1px / 0.01em, investigate.
```

This is ~15 lines. It makes the transition table INHERENT for Fat Core (the agent must produce it to navigate its own build) rather than BOLTED-ON (a deliverable for the next agent).

### The Fractal Echo Table for Fat Core

Similarly, the fractal echo table (pattern expression at 5 scales) should be SELF-AUTHORED:

```
BEFORE writing any CSS, produce a FRACTAL ECHO TABLE in your build log:

| Scale     | Pattern Expression                    | Primary CSS          | Secondary CSS       |
|-----------|---------------------------------------|---------------------|-------------------|
| Navigation| [how header echoes the metaphor]      | [css property]      | [css property]    |
| Page      | [how zones echo]                      | [css property]      | [css property]    |
| Section   | [how within-section echoes]            | [css property]      | [css property]    |
| Component | [how component DNA echoes]             | [css property]      | [css property]    |
| Character | [how typography echoes]                | [css property]      | [css property]    |

Pattern direction MUST be the same at all 5 rows.
If inconsistent: your metaphor is not fractal. Either make it fractal or
switch to FLAT MODE (zones + recipe, no metaphor).
```

This is ~15 lines. It makes fractal echo INHERENT (the agent checks consistency before building) rather than a post-hoc gate.

---

## (d) Concrete Recommendations for Fat Core's Builder Input Format

### The Input Set

Fat Core's single Opus agent reads:

| File | Size | Purpose | When Consulted |
|------|------|---------|---------------|
| Content markdown | 500-10,000 words | The actual content to build | Phase A (understanding) |
| **Conventions brief** | **~200-250 lines** | Soul, thresholds, spatial rules, multi-coherence, fractal echo, creative authority, self-check protocol | **Always (PRIMARY)** |
| `tokens.css` | 174 lines | Exact token values | Phase C (building) |
| `prohibitions.md` | 353 lines | Soul constraints (source of truth) | Phase C (building) |
| `mechanism-catalog.md` | ~870 lines | 18 mechanisms with CSS and application modes | Phase B (planning) + Phase C (deploying) |
| `merged-components.css` | ~500 relevant lines | Component library classes | Phase C (building) |

**Total: ~2,100-2,150 lines of material + content file.**

This is significantly less than the linear pipeline's builder input (~1,300 lines recipe+reference + ~650 lines operational recipe = ~1,950 lines) because:
- No operational recipe (conventions replace it)
- No build plan (agent plans internally)
- No transition table artifact (agent generates its own)
- Reference files are identical

### The Conventions Brief Structure

```markdown
# Fat Core Conventions Brief -- Flagship (v1)
# ~200-250 lines

## SECTION 1: IDENTITY (SOUL) [~20 lines]
You are building a page for the KortAI design system.
These constraints are ABSOLUTE with ZERO exceptions:
- border-radius: 0 (always sharp edges)
- box-shadow: none (always flat surfaces)
- No pure #000 or pure #FFF
- No gradient backgrounds
- Container: 940-960px
- Fonts: Instrument Serif (headings), Inter (body), JetBrains Mono (code)
- Spacing: 4px base unit

## SECTION 2: PERCEPTION THRESHOLDS [~20 lines, YAML block]
```yaml
thresholds:
  background_delta: ">= 15 RGB between adjacent zones"
  font_size_delta: ">= 2px between typographic zones"
  letter_spacing_delta: ">= 0.03em between typographic zones"
  stacked_gap_max: "<= 108px total at any section boundary"
  multi_coherence: ">= 3 CSS channels shift at every zone boundary"
  border_presence: ">= 1 structural border-left per zone (alternating OK)"
  component_adoption: ">= 10 component families from merged-components.css"
  mechanism_span: ">= 4 of 5 mechanism categories (S/T/M/B/R)"
```

## SECTION 3: ANTI-SCALE MODEL [~5 lines]
RICHNESS = semantic density x restraint x spatial confidence
density = mechanisms per zone (not total count)
restraint = unused CSS budget (what you DIDN'T add)
confidence = whitespace-to-content ratio (breathing room)

## SECTION 4: MULTI-COHERENCE BINDING [~25 lines]
At every ZONE BOUNDARY, >= 3 of these 6 CSS channels must shift:
1. Chromatic: background-color or accent color
2. Typographic: font-size, font-weight, or letter-spacing
3. Spatial: padding, margin, or content density
4. Structural: border-left, hr, or visual divider
5. Behavioral: animation, transition, or interaction
6. Material: surface treatment (background texture/pattern)

The shifts must be in the SAME SEMANTIC DIRECTION.
Example: "deeper = denser = darker = heavier" means:
  At the Z1->Z2 boundary: bg DARKENS, spacing COMPRESSES,
  borders THICKEN, typography DENSIFIES. All four move toward "deeper."
  NOT: bg darkens but spacing increases (contradictory direction).

## SECTION 5: FRACTAL ECHO [~20 lines]
Your metaphor's pattern must appear at ALL 5 scales:
  Navigation | Page | Section | Component | Character

Before writing CSS, produce a FRACTAL ECHO TABLE showing how
the pattern expresses at each scale with specific CSS properties.
Pattern direction must be the SAME at all 5 rows.
If inconsistent: make it consistent or abandon the metaphor.

## SECTION 6: COMPOSITIONAL MEMORY PROTOCOL [~30 lines]
[As designed above -- zone boundary checks, midpoint pause, mechanism count]

## SECTION 7: CREATIVE AUTHORITY [~20 lines]
You may override ANY non-soul value if you log the override with
compositional reasoning. Soul values are LOCKED. Everything else
is a SUGGESTION that you can improve upon.

PROVIDED you:
- DO NOT violate soul constraints
- DO NOT violate perception thresholds
- LOG every override with: what, from, to, WHY
- MAINTAIN coherence direction at every boundary

## SECTION 8: FLAGSHIP ANTI-PATTERNS [~15 lines]
AVOID THESE (all observed in the PA-05 1.5/4 failure):
- Sub-perceptual CSS: letter-spacing < 0.02em is invisible. Stop.
- Uniform typography: if all body text is 16px/400, the page is FLAT.
- Imperceptible backgrounds: 1-8 RGB delta = same color. >= 15 or don't bother.
- Whitespace voids: > 108px of stacked gap = reader thinks page is broken.
- Zero borders: at least SOME sections need structural border-left.
- Announced-not-structural metaphor: if removing the metaphor labels
  doesn't change the visual, the metaphor is decoration, not structure.

## SECTION 9: REQUIRED DELIVERABLES [~15 lines]
Your build MUST produce:
1. output.html (the page)
2. _build-log.md containing:
   - Your transition table (BEFORE building)
   - Your fractal echo table (BEFORE building)
   - Override log (DURING building)
   - Midpoint observation (DURING building)
   - Final self-assessment (AFTER building)
3. _cascade-value-table.md (computed CSS at every section boundary)

## SECTION 10: PROCESS [~15 lines]
Phase A: Read content. Identify zones, tensions, metaphor (if any).
Phase B: Plan. Write transition table + fractal echo table in build log.
Phase C: Build HTML + CSS. Consult reference files as needed.
  - After skeleton: verify landmarks, skip link, component classes
  - After zone backgrounds: verify >= 15 RGB delta
  - After borders: verify border-left presence + distinct values
  - After typography: verify >= 2px font-size delta between zones
Phase D: Self-verify. Produce cascade value table. Scroll and assess.

Total: ~200-250 lines
```

### Flagship-Specific vs Middle Conventions

| Section | Middle Brief (~100 lines) | Flagship Brief (~200-250 lines) | Why Different |
|---------|-------------------------|-------------------------------|---------------|
| Soul | ~20 lines | ~20 lines (same) | Identity is universal |
| Thresholds | ~15 lines | ~20 lines (higher thresholds + more metrics) | Flagship checks more |
| Anti-scale | ~5 lines | ~5 lines (same) | Universal principle |
| Multi-coherence | ABSENT | ~25 lines | Flagship MUST have this |
| Fractal echo | ABSENT | ~20 lines | Flagship MUST have this |
| Memory protocol | ABSENT | ~30 lines | Flagship builds are longer, drift risk |
| Creative authority | ~10 lines | ~20 lines (expanded) | Flagship needs more latitude |
| Anti-patterns | ABSENT | ~15 lines | Flagship has specific failure modes |
| Deliverables | ~5 lines | ~15 lines (more artifacts) | Flagship needs more proof |
| Process | ~10 lines | ~15 lines (more checkpoints) | Flagship builds are longer |
| **Total** | **~100 lines** | **~200-250 lines** | **+100-150 for Flagship-specific** |

The 100-line difference between Middle and Flagship conventions is ENTIRELY from Flagship-specific sections that Middle doesn't need (multi-coherence, fractal echo, memory protocol, anti-patterns). The universal sections are the same length. This confirms the Task #43 finding that 100 lines is Middle-calibrated.

---

## Key Cross-Report Findings for Flagship Fat Core

### Finding 1: FORMAT > VOLUME (All 4 reports agree)

The format hierarchy (CSS code > YAML > prose + code > prose > abstract) is confirmed by all four reports. For Fat Core, this means the conventions brief should use YAML for structured data (thresholds, multi-coherence rules) and prose for principles (anti-scale, creative authority). Not all-prose, not all-YAML.

### Finding 2: The Transition Table is ALWAYS Essential (Reports 18, 28, 74, 84)

Whether the agent is receiving it from a planner (linear pipeline) or generating it itself (Fat Core), the transition table is the single most important compositional artifact. It translates multi-coherence from abstract principle to cell-by-cell execution. For Fat Core, mandating self-generation is equally important as mandating external generation.

### Finding 3: The Remediation Pattern (Telescope+Microscope Interlaced) is the Proven Format (Reports 18, 84)

The CSS comment pattern from the remediation (compositional comment above CSS rule) scored PA-05 +1.0. For Fat Core, this translates to: the agent should write CSS COMMENTS that include compositional reasoning (telescope) directly above every significant CSS rule (microscope). Not for handoff -- for SELF-VERIFICATION and fix-cycle context.

### Finding 4: The Cascade Value Table is NON-NEGOTIABLE (Reports 18, 74)

Regardless of architecture, the builder must PROVE its computed CSS values match compositional intent. The cascade value table records: computed background, font-size, font-weight, letter-spacing, border-left, margin, and color at EVERY section boundary. This is the PROOF artifact that the gate runner validates. Fat Core doesn't eliminate this need -- it just means the same agent writes it.

### Finding 5: Creative Authority Clause is the 3/4->4/4 Bridge (Report 84)

Report 84 identifies the "DO NOT deviate" sentence as THE 3/4 ceiling. Removing it via the Creative Authority Clause is the highest-leverage edit for reaching 4/4. For Fat Core at Flagship, this clause is already implicit (the agent plans and builds freely). But it must be EXPLICITLY stated in the conventions brief to counteract the constraint-accumulation tendency of LLM agents.

### Finding 6: Phase 6.5 Observation Pause is the Cheapest High-Impact Change (Report 84)

A 5-10 minute pause where the agent renders, scrolls, and writes 2-3 observations about what it SEES is modeled on CD-006's metacognitive loop. For Flagship Fat Core, this should happen at MINIMUM at the midpoint (after ~6 of 12 sections) and again before final verification. Cost: ~10-15 minutes. Expected impact: catches flat zones, broken density arcs, and metaphor drift that accumulate during long builds.

### Finding 7: 60% of Intelligence Loss is Tractable; 40% is Irreducible (Report 28, 74)

The tractable 60% is addressed by format changes (structured data, CSS embedding, integrated documents). The irreducible 40% consists of: emergence (the FEELING of the metaphor), creative contribution (Opus's compositional fluency), and context window limits. For Fat Core, the irreducible gap narrows because the agent holds FULL context, but emergence and context limits still apply at Flagship scale (1000-1500 CSS lines).

---

## Appendix: Information Theory -- Minimum Bandwidth for Flagship Fat Core

Report 28 (Section 5) calculates minimum bandwidth for compositional intelligence:

**Approach 1: Count decisions.**
Flagship: ~5 zones, ~12 sections, ~16 mechanisms, ~11 boundaries, 5 fractal scales.
Total discrete decisions: ~80-100 (vs Middle's ~50-60).
At ~3 lines/decision (YAML): ~240-300 lines of structured data.

**Approach 2: Count CSS.**
Flagship: 1000-1500 CSS lines with 16-18 mechanisms.
Adapted CSS for planning: ~400-600 lines.

**Approach 3: Custom properties.**
~60-80 CSS custom properties encoding all decisions: ~60-80 lines.
But loses reasoning.

**Practical minimum for Flagship Fat Core:** ~200-250 lines of conventions (WHAT+WHY) + ~100 lines of transition table (self-generated) + ~100 lines of fractal echo table (self-generated) + reference files as-needed. Total ACTIVE material: ~400-450 lines in the agent's working context at any given time. This is well within the attention-effective range identified by all four reports (~300-500 lines).

---

**END OF EXTRACTION REPORT**

**Key deliverable:** Conventions brief design (~200-250 lines) with 10 sections specifically adapted for Flagship Fat Core. See Section (d) for full structure.

**Key finding for Flagship variant:** The linear pipeline's bridging tissue (4 new inter-agent artifacts) is UNNECESSARY for Fat Core. What IS essential: (1) conventions brief at Flagship scale, (2) self-generated transition table + fractal echo table, (3) cascade value table as verification proof, (4) compositional memory protocol preventing drift during long builds.

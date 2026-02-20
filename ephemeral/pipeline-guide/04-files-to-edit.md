# Section 4: The Files We Need to Edit

Every file in this section already exists. We are not creating anything new -- we are adding specific content to specific locations in files that are already part of the design system. Each edit addresses a diagnosed failure from the flagship experiment and its subsequent analysis.

There are 6 files that need editing. Two of them need small additions. Four of them need substantial additions. The total new content across all 6 files is approximately 200 lines.

---

## The Stacking Threshold: 108px Is Canonical

Before we describe the edits, we need to resolve a number that appears differently in different sources. The codification-map.md (the document that first proposed these edits) uses 192px as the maximum stacked gap at section boundaries. But this number is wrong -- or more precisely, it is an overly generous gate that the fidelity audit (pv2-flagship-fidelity-audit.md) flagged as "the architecture's most concerning drift."

Here is why 108px is the right number:

File 42 (the operational recipe) provides an arithmetic proof. The three transition types used in the design system produce these worst-case stacked gaps:

- **BREATHING** transition (the largest): padding-bottom 32px + margin 24px + border 4px + margin 24px + padding-top 24px = **108px**
- **BRIDGE** transition: padding-bottom 24px + margin 32px + border 3px + margin 24px + padding-top 24px = **106px**
- **SMOOTH** transition: padding-bottom 24px + margin 24px + border 1px + margin 16px + padding-top 24px = **89px**

The worst case is 108px. If a builder follows the recipe's transition types using the design system's token values, no stacked gap will exceed 108px. A gap of 120px already means the builder used non-recipe values. A gap of 192px is nearly double the worst case -- it would allow the exact kind of whitespace voids (210-276px) that the Mode 4 perceptual audit flagged as catastrophic.

The tier-routing document (pv2-tier-routing.md) already uses 108px for Flagship tier. The fidelity audit explicitly states: "For Flagship, 108px should be BOTH the target AND the gate. The 192px gate is too loose."

**Throughout this section, wherever we describe the stacking maximum, we use 108px.** The codification-map's proposed edits that reference 192px should be understood as using 108px instead.

---

## Edit 1: tokens.css -- Add the Stacking Token

**The file:** `design-system/compositional-core/vocabulary/tokens.css` (183 lines). This is the design system's token vocabulary -- every CSS variable that builders use. It lives in the always-load layer, meaning every agent reads it before doing anything else. It currently has 65 tokens organized into soul constraints, colors, typography, spacing, borders, syntax highlighting, transitions, and solid offsets.

**What changes:** We add one new token and expand the existing comment block in the Spacing Maximums section (lines 114-122).

**The current content** (lines 114-122):

```css
  /* --- Spacing Maximums (AVAILABLE -- prevent void accumulation) --- */
  --space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
  --space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
  /* RULE: No single margin or padding value should exceed --space-max-zone (96px).
     If a zone transition needs more visual separation than 96px, use a CHECKPOINT
     element (see mechanism-catalog.md Transition Grammar), not more whitespace.
     Stacking two 96px margins creates 192px of void -- use checkpoint elements instead.
     Evidence: Ceiling experiment accumulated ~1,500-2,000px in zone transitions alone
     by stacking generous spacing values. This rule caps the maximum per-property value. */
```

**The new content:**

```css
  /* --- Spacing Maximums (AVAILABLE -- prevent void accumulation) --- */
  --space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
  --space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
  --space-max-stacked: 108px;            /* Maximum TOTAL visual gap at any section boundary */
  /* RULE: No single margin or padding value should exceed --space-max-zone (96px).
     STACKING RULE: The TOTAL gap at any section boundary
     (padding-bottom + collapsed-margin + padding-top) must not exceed
     --space-max-stacked (108px). Individual values may each pass the 96px check
     while stacking to create 200+ px voids that look like broken pages.
     ARITHMETIC PROOF (worst case, BREATHING transition):
       padding-bottom: 32px + margin: 24px + border: 4px + margin: 24px + padding-top: 24px = 108px
     If your total exceeds 108px, you used non-recipe values.
     Evidence: Flagship experiment had 210-276px voids at section boundaries.
     Each individual value was <=96px. 9/9 auditors flagged the voids as catastrophic. */
```

**Why this matters:** The current `--space-max-zone` token prevents any single spacing property from exceeding 96px. But builders can legally use 80px padding-bottom on one section and 80px padding-top on the next, creating 160px of whitespace. The `--space-max-stacked` token closes this loophole by capping the total gap at any boundary. It also includes the arithmetic proof so builders can verify their own transitions.

**Size:** 1 new token line, ~6 lines of expanded comment. Net: ~5 lines added.

---

## Edit 2: semantic-rules.md -- Add the S-09 Stacking Rule

**The file:** `design-system/compositional-core/guidelines/semantic-rules.md` (529 lines). This is Layer 6 of the ontology -- the file that resolves semantic ambiguity. It currently has 7 gaps filled with evidence-based rules, including Gap 6 which covers content density floors per zone. Within Gap 6, Rule 2 (lines 289-298) addresses the "Maximum Consecutive Empty Viewport Height" problem.

**What changes:** We insert the S-09 stacking rule into Rule 2, between the existing "See also" reference and the existing "Binary test" line. This is an expansion of the existing rule, not a replacement.

**The current content** (lines 289-297):

```markdown
#### Rule 2: Maximum Consecutive Empty Viewport Height

At no scroll position should a full viewport height (100vh at 1440px) have less than 30% content coverage.

If a zone's content does not fill the zone to at least 30% coverage at the narrowest reasonable interpretation: SHRINK THE ZONE to fit its content. Zones exist to SERVE content, not to DEMONSTRATE architecture.

**See also:** `--space-max-zone` in `tokens.css` (96px maximum per-property spacing value) provides token-level enforcement of this principle. No single margin or padding should exceed 96px.

**Binary test:** Scroll through at viewport-height increments. If any position shows < 30% content: FAIL. Shrink the zone or add content.
```

**The new content:**

```markdown
#### Rule 2: Maximum Consecutive Empty Viewport Height

At no scroll position should a full viewport height (100vh at 1440px) have less than 30% content coverage.

If a zone's content does not fill the zone to at least 30% coverage at the narrowest reasonable interpretation: SHRINK THE ZONE to fit its content. Zones exist to SERVE content, not to DEMONSTRATE architecture.

**See also:** `--space-max-zone` in `tokens.css` (96px maximum per-property spacing value) provides token-level enforcement of this principle. No single margin or padding should exceed 96px.

**S-09 Stacking Rule (addresses flagship experiment void failure):**

The 96px per-property maximum is NECESSARY but NOT SUFFICIENT. Adjacent spacing properties STACK at section boundaries:

```
Section A padding-bottom: 80px  (passes 96px check)
Section A margin-bottom:  64px  (passes 96px check)
Section B margin-top:     64px  (passes 96px check -- but collapses with above)
Section B padding-top:    64px  (passes 96px check)
TOTAL VISUAL GAP: 80 + 64 + 64 = 208px  (FAILS -- creates whitespace void)
```

(Note: CSS vertical margins collapse -- take the LARGER margin, not the sum.)

**Binary test for stacked gaps:**
1. At every section boundary, calculate: `padding-bottom + MAX(margin-bottom, margin-top) + padding-top`
2. PASS: Total <= 108px (the maximum produced by the design system's transition recipes)
3. FAIL: Total > 108px (builder used non-recipe values; reduce or insert checkpoint content)

**Provenance:** The flagship experiment accumulated 210-276px voids at section boundaries where each individual value was <=96px. The ceiling experiment accumulated ~1,500-2,000px total across all zone transitions by stacking generous per-property values. Both passed per-property checks. Both failed perceptual audit (9/9 auditors flagged voids).

**Fix options when stacked gap exceeds 108px:**
- REDUCE padding-bottom on the preceding section
- REDUCE padding-top on the following section
- INSERT a checkpoint element (breathing zone with 1-3 sentences of transition text) to convert EMPTY SPACE into CONTENT
- MERGE adjacent zones to eliminate the boundary entirely

**Binary test:** Scroll through at viewport-height increments. If any position shows < 30% content: FAIL. Shrink the zone or add content.
```

**Why this matters:** This is the rule that prevents the flagship's primary failure mode. The existing Rule 2 tells you *what* to check (viewport coverage) but not *how* to prevent the problem at build time. The stacking rule gives builders a concrete calculation to perform at every section boundary, with a specific pass/fail threshold and specific fix options. It turns "scroll through and look for voids" into "calculate this sum and compare to 108px."

**Size:** ~25 lines inserted into the existing rule.

---

## Edit 3: Perceptual Auditing SKILL.md -- Add Perception Thresholds

**The file:** `~/.claude/skills/perceptual-auditing/SKILL.md` (847 lines). This is the perceptual auditing skill -- the 48-question audit protocol used to evaluate every page the design system produces. It defines 4 modes (Embedded, Quick, Standard, Standalone), quantitative guardrails, team roles, and the visual auditing protocol.

**What changes:** We insert a new section titled "Minimum Perceptual Delta Thresholds" after the Void Guardrail Specifications table (after line 360, before the "Mode 4 Integration" paragraph). This section defines the minimum CSS value differences that a human can actually perceive.

**The current content** (lines 359-364):

```markdown
| Width utilization | Content container at **65-80%** of viewport width at 1440px | 65-80% = PASS. Below 65% or above 85% = FAIL. |

**Mode 4 Integration:** All 9 auditors (A through I) should note spatial distribution observations. Auditor C (Spatial+Proportion) is the PRIMARY evaluator for PA-50 through PA-53, but any auditor who notices void patterns should flag them.

**Embedded Mode Integration:** Builders running Mode 1 (Embedded, 90 seconds) should add a void check: after answering PA-01 through PA-05, quickly scroll through and verify no 2+ consecutive blank viewport-heights exist.
```

**The new content** (inserted between the table row and "Mode 4 Integration"):

```markdown
| Width utilization | Content container at **65-80%** of viewport width at 1440px | 65-80% = PASS. Below 65% or above 85% = FAIL. |

### Minimum Perceptual Delta Thresholds

**Provenance:** The flagship experiment passed all programmatic gates (6 CSS channels, 4+ shifts per boundary) but FAILED perceptual audit. Root cause: backgrounds differed by 1-8 RGB points (imperceptible), letter-spacing by 0.001-0.01em (invisible). Programmatic verification confirmed variation EXISTS; perceptual verification confirmed variation was INVISIBLE.

**BINARY RULE:** Any CSS property used to encode semantic differentiation MUST meet these minimum perceptual deltas. Values below these thresholds are sub-perceptual and DO NOT count as differentiation.

| CSS Property | Minimum Perceptible Delta | Sub-Perceptual (DOES NOT COUNT) |
|---|---|---|
| **Background color** | >= 15 RGB points apart (any channel) | < 15 RGB points difference |
| **Letter-spacing** | >= 0.5px (or ~0.03em at 16px) | < 0.5px difference |
| **Padding/margins between zones** | >= 24px | < 24px difference between zones |
| **Font-size** | >= 2px difference | < 2px between adjacent sizes |
| **Font-weight** | >= 200 weight units | < 200 weight units (e.g. 400 vs 500) |
| **Border-width** | >= 1px difference | 0px (either present or absent) |

**Application to gate runners:** When a programmatic gate verifies "N distinct values exist for property X," it MUST also verify that the MINIMUM difference between any two adjacent values meets the threshold above. A gate that counts 4 distinct background colors with 3 RGB points between them is a FALSE PASS.

**Builder self-check:** After writing CSS, scan all semantic-encoding properties. If any two values intended to communicate DIFFERENT meanings are closer than the threshold, INCREASE the difference or REMOVE one value.

**Mode 4 Integration:** All 9 auditors (A through I) should note spatial distribution observations. Auditor C (Spatial+Proportion) is the PRIMARY evaluator for PA-50 through PA-53, but any auditor who notices void patterns should flag them.

**Embedded Mode Integration:** Builders running Mode 1 (Embedded, 90 seconds) should add a void check: after answering PA-01 through PA-05, quickly scroll through and verify no 2+ consecutive blank viewport-heights exist.
```

**Why this matters:** This is the corpus's single most-cited finding. The master execution prompt's 963 lines contained ZERO perception-related terms -- not "threshold," not "delta," not "RGB," not "magnitude." The builder followed every rule and produced CSS that was formally correct but visually invisible. The perception thresholds close this gap by defining the minimum values a human can actually see. Without this section, a gate runner can report "4 distinct background colors" when the colors differ by 3 RGB points -- invisible to any human eye.

**Confidence note:** The PRINCIPLE (programmatic gates need perception thresholds) is Tier 1 -- unanimous across the corpus, zero dissent. The SPECIFIC VALUES (15 RGB, 0.5px, 24px, etc.) are Tier 2 -- derived from a single agent's analysis, not empirical human testing. The values are conservative starting points. They may need calibration after real-world validation.

**Size:** ~25 lines inserted.

---

## Edit 4: Tension-Composition SKILL.md -- Recipe Framing for Phase 4

**The file:** `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines after previous enrichments). This is the building pipeline -- the 6-phase process that transforms content into compositional HTML layouts. Phase 4 is where the metaphor gets translated into concrete CSS mechanisms.

**What changes:** We insert a recipe header with an explicit step sequence at the beginning of Phase 4, between the tier-specific deployment levels and the Phase 4.0 perceptual guardrails. This reframes Phase 4 from "verify these constraints" to "follow these steps in order."

**The current content** (around lines 866-877):

```markdown
**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.

### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)
```

**The new content:**

```markdown
**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

**RECIPE (not checklist) -- Follow these steps IN ORDER:**

Phase 4 is a RECIPE: sequenced steps with specific CSS values and concrete verbs (Read, Select, Map, Deploy, Assess, Check, Verify). It is NOT a checklist of constraints to verify after the fact. The distinction matters: recipes produce DESIGNED output; checklists produce COMPLIANT-but-flat output.

**Phase 4 Step Sequence:**
1. **READ** Phase 4.0 guardrails below (set your NON-NEGOTIABLE floors)
2. **READ** the full mechanism catalog -- all 18 mechanisms across all 5 categories
3. **SELECT** 1+ mechanism per category (Spatial / Hierarchy / Component / Depth / Structure) based on content needs
4. **MAP** each selected mechanism to specific CSS values using the Translation Grammar (Step 4.2)
5. **ASSESS** pacing risk (Step 4.2B) and rhythm variation (Step 4.2C)
6. **CHECK** coherence (Step 4.3) -- all channels reinforce same direction
7. **VERIFY** fractal consistency (Step 4.7) and landmarks (Step 4.7B)

Each step produces a concrete deliverable. If you skip a step, the output degrades.

### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)
```

**Why this matters:** The middle-tier experiment got a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs) and scored PA-05 DESIGNED (4/4). The flagship experiment got a 71-line CHECKLIST (constraints to verify, "Verify/Fail if/Must be" verbs) and FAILED. The recipe-vs-checklist distinction was identified by 10+ analysis files as the highest-confidence differentiator between success and failure. This edit ensures that every builder entering Phase 4 encounters a sequenced recipe before encountering any constraints.

**What we are NOT changing:** The per-category mechanism minimums (Change 6 in the codification map) are already applied from the enrichment execution team. The 3-transition minimum (Change 7) is also already in place as Step 4.2C. Both were verified as present in the current file. No edits needed for either.

**Size:** ~15 lines inserted.

---

## Edit 5: compositional-core/CLAUDE.md -- Builder Routing, Recipes, Communication, Model Selection

**The file:** `design-system/compositional-core/CLAUDE.md` (680 lines). This is the phase-gated building protocol -- the file every agent reads when entering the compositional-core directory. It defines the two tracks (Assembly and Composition), the phase sequence, the anti-gravity rules, and the 6-layer ontology navigation.

This file needs the most changes of any file in this section. There are 4 distinct edits, all addressing different diagnosed failures.

### Edit 5A: Builder Recipe for Phase 6 (replaces lines 195-220)

**The current content** (Track 2, Phase 6: Implementation):

```markdown
### Phase 6: Implementation

**Use:**
- Exact token values: var(--color-primary), var(--space-8)
- Mechanisms adapted to YOUR metaphor
- YOUR vocabulary (not library metaphor terms)

**Example:** .botanical-stage NOT .stratum (your metaphor, not library)

**Absolute rules:**
```css
border-radius: 0; /* ALWAYS */
box-shadow: none; /* ALWAYS */
opacity: 1; /* NO transparency on containers */
```

### Phase 7: Verification

**Invoke:** perceptual-auditing skill at ~/.claude/skills/perceptual-auditing/SKILL.md

**Check:**
- 48 PA questions (Tier 1 mandatory five + Tier 2 standard fifteen)
- Guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Soul: border-radius: 0? box-shadow: none? Colors correct?

**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."
```

**The new content:**

```markdown
### Phase 6: Implementation

**CRITICAL ROUTING: The builder agent MUST receive these files:**

1. `compositional-core/vocabulary/tokens.css` -- 65 tokens (palette, spacing, typography)
2. `compositional-core/grammar/mechanism-catalog.md` -- 18 mechanisms (the CSS RECIPES)
3. `compositional-core/identity/prohibitions.md` -- 22 prohibitions (the constraints)
4. The Phase 4 build plan from the planner agent (metaphor mapping, mechanism selections, transition sequence)

The mechanism catalog IS the recipe book. Each mechanism entry contains the CSS pattern (what to write), application modes (Progressive vs Discrete), anti-patterns (what NOT to do), impact profiles (what readers perceive), and zone mappings (where to deploy). Without it, the builder writes CSS from constraints alone -- which produces formally correct but visually flat output.

**Builder Agent Model Selection:**
- **Ceiling/Flagship builds:** Use Opus (claude-opus-4-6) for the builder agent. Opus complies with constraints AND creates beyond them.
- **Middle builds:** Sonnet (claude-sonnet-4-6) is sufficient. Middle builds follow pattern-based deployment without requiring metaphor creativity.
- **All other roles** (planner, verifier, auditor): Sonnet is cost-effective and reliable.

**Builder Recipe (follow in order):**

1. **SET UP** container: `max-width: 960px; margin: 0 auto; padding: 0 32px;`
2. **DEPLOY** header: dark background (`var(--color-text)`), 3px red bottom border, inverted text
3. **FOR EACH section** in the build plan:
   a. Read the mechanism catalog entry for the assigned mechanism
   b. Write the CSS using the mechanism's APPLICATION MODE (Progressive or Discrete)
   c. Use the Translation Grammar values from the planner's Phase 4 output
   d. Verify CPL: `content-width / font-size / 0.6` should yield 45-80 characters
4. **DEPLOY** transitions between sections: vary between SMOOTH (48px + 1px), BRIDGE (64px + breathing zone), BREATHING (80px + 3px) -- minimum 3 types
5. **DEPLOY** footer: mirror header (dark background, 3px red top border, inverted text)
6. **VERIFY** soul: border-radius: 0, box-shadow: none, opacity: 1 on containers, colors from tokens.css
7. **VERIFY** perception thresholds: backgrounds >= 15 RGB apart, letter-spacing >= 0.5px, padding >= 24px between zones

**Example:** .botanical-stage NOT .stratum (your metaphor, not library)

**Absolute rules:**
```css
border-radius: 0; /* ALWAYS */
box-shadow: none; /* ALWAYS */
opacity: 1; /* NO transparency on containers */
```

### Phase 7: Verification

**Invoke:** perceptual-auditing skill at ~/.claude/skills/perceptual-auditing/SKILL.md

**Check:**
- 48 PA questions (Tier 1 mandatory five + Tier 2 standard fifteen)
- Guardrails: 940px container, 16px spacing, 32px padding, 40% compression
- Minimum perceptual deltas: backgrounds >= 15 RGB, letter-spacing >= 0.5px, padding >= 24px between zones
- Soul: border-radius: 0? box-shadow: none? Colors correct?

**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."
```

**Why this matters:** The current Phase 6 gives builders 3 constraint lines and 1 example. That is it. The flagship dissection found that builders had 13.4% prompt visibility -- they received tokens + prohibitions + a build plan summary, but NOT the mechanism catalog (the actual CSS recipes). The inverted quality routing meant the planner (who does not write CSS) got the CSS recipes, while the builder (who writes all the CSS) got only constraints. This edit does four things: (1) explicitly lists the files the builder must receive, (2) provides a sequenced recipe with specific CSS values, (3) adds perception threshold verification as a build-time step, and (4) specifies model selection guidance.

**Size:** ~40 lines replacing ~25 lines. Net: ~15 lines added.

### Edit 5B: Builder Routing in Conditional-Load Section (modifies Phase 4 access)

**The current content** (around line 170 in the Track 2 Workflow section):

```markdown
### Phase 4: Mechanism Extraction

**NOW PERMITTED:**
- grammar/mechanism-catalog.md (first 200 lines)
- components/components.css (all lines)
```

**The new content:**

```markdown
### Phase 4: Mechanism Extraction

**NOW PERMITTED (for PLANNER agent):**
- grammar/mechanism-catalog.md (FULL file -- all 18 mechanisms, not just first 200 lines)
- components/components.css (all lines)

**CRITICAL ROUTING -- BUILDER MUST ALSO RECEIVE:**

When multiple agents are involved, the BUILDER agent (the one writing CSS) MUST receive:
1. `grammar/mechanism-catalog.md` -- The complete catalog with all 18 mechanism entries, application modes, impact profiles, and zone mappings. This is the CSS RECIPE BOOK.
2. `vocabulary/tokens.css` -- All 65 tokens (already in always-load).
3. `identity/prohibitions.md` -- All 22 prohibitions (already in always-load).
4. The planner's Phase 4 build plan output (mechanism selections, transition sequence, metaphor mapping).

**DO NOT restrict builder to "first 200 lines" of mechanism catalog.** The builder needs the FULL catalog including application modes (Progressive vs Discrete), impact profiles, and anti-patterns. These are the CSS recipes that produce DESIGNED output.
```

**Why this matters:** The current protocol restricts mechanism catalog access to "first 200 lines" and does not mention that the builder agent needs it at all. The flagship experiment routed the full catalog to the planner (who does not write CSS) and gave the builder only tokens + prohibitions. The mechanism catalog's application modes and impact profiles ARE the compositional intelligence -- they must reach the agent writing CSS.

**Size:** ~12 lines replacing ~3 lines. Net: ~9 lines added.

### Edit 5C: Agent Communication Protocol (inserted before Anti-Gravity Rules)

**The current content** (lines 220-224):

```markdown
**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## ANTI-GRAVITY RULES
```

**The new content:**

```markdown
**Core principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

---

## AGENT COMMUNICATION PROTOCOL (Track 2 Multi-Agent Builds)

**BINARY RULE:** When a Track 2 build uses multiple agents (planner + builder + verifier), agents MUST use SendMessage for coordination. File-only communication (writing shared files without messaging) produces B+ quality. Messaging produces A quality.

**Evidence:** Middle experiment (zero SendMessage) scored PA-05 DESIGNED but had a missing footer -- the builder could not ask the planner about footer design. CD-006 (with messaging) scored 39/40. The topology (flat vs tree) does not matter; the communication protocol (file-only vs messaging) does.

**Required communication points:**
1. **Planner -> Builder:** Send build plan summary + key design decisions (not just file path)
2. **Builder -> Planner:** Ask clarifying questions about ambiguous aspects BEFORE building
3. **Builder -> Verifier:** Signal completion with summary of what was built and known risks
4. **Verifier -> Builder:** Report findings that need fixes (with specific CSS/HTML locations)

**Minimum message count by tier:**
- Middle: 2+ messages (planner->builder plan, builder->verifier completion)
- Ceiling: 4+ messages (above + builder clarification question + verifier feedback)
- Flagship: 6+ messages (above + per-pass coordination)

---

## ANTI-GRAVITY RULES
```

**Why this matters:** The current CLAUDE.md has zero mention of inter-agent communication. The retro-analysis team (14 agents, 4 waves) corrected the initial "zero SendMessage = success" framing to "zero SendMessage = quality cost." The missing footer in the middle-tier experiment is the smoking gun -- the builder literally could not ask the planner whether the page should have a footer that mirrors the header. Five minutes of messaging saves fifty minutes of post-build remediation.

**Size:** ~20 lines inserted.

### Edit 5D: Conditional-Load Section -- Full Mechanism Catalog for Builders

This is partially covered by Edit 5B above. Additionally, in the **Conditional-Load** section near line 400 where builder agents are described:

**The current content:**

```markdown
Phase 4: Read mechanisms
- `compositional-core/grammar/mechanism-catalog.md` (first 200 lines)
- `compositional-core/components/components.css` (first 100 lines)
- Extract TECHNIQUES, not implementations
```

**The new content:**

```markdown
Phase 4: Read mechanisms
- `compositional-core/grammar/mechanism-catalog.md` (FULL file -- all 18 mechanisms)
- `compositional-core/components/components.css` (first 100 lines)
- Extract TECHNIQUES, not implementations
- CRITICAL: The builder agent MUST receive the full mechanism catalog. See Phase 6 for routing details.
```

**Why this matters:** This ensures consistency between the Phase 4 instruction and the Phase 6 routing. Both places now say "FULL file" instead of "first 200 lines."

**Size:** ~2 lines modified.

---

## Edit 6: design-system/CLAUDE.md -- Status Update and /build-page Reference

**The file:** `design-system/CLAUDE.md` (733 lines). This is the root navigation file -- the first thing any agent reads when entering the design-system directory. It routes agents to the right subfolder, enforces soul constraints, and tracks the evolution state.

**What changes:** Two small updates.

### Edit 6A: Status Line Update (line 9)

**The current content:**

```markdown
**Current Phase:** Phase D COMPLETE (CONDITIONAL PASS, 2026-02-15). Richness + rigidity research COMPLETE (11 agents, tier model established). Middle-tier Experiment SUCCESS (2026-02-16). Ceiling Preparation In Progress.
```

**The new content:**

```markdown
**Current Phase:** Pipeline v2 CODIFICATION IN PROGRESS (2026-02-19). Phase D through Flagship Remediation COMPLETE. Pipeline analysis corpus (41 files) COMPLETE. Codifying findings into permanent design system files.
```

**Why this matters:** The status line is stale. "Ceiling Preparation In Progress" was accurate weeks ago. Agents reading this file get a misleading picture of the project state. The update reflects reality: we are in the codification phase, turning research into permanent file edits.

**Size:** 1 line modified.

### Edit 6B: Build Routing in Quick Start (after line 22)

**The current content:**

```markdown
### I'm here to BUILD content/pages
**-> Start:** `compositional-core/README.md`
**-> ALWAYS load first:** `compositional-core/identity/prohibitions.md` (22 prohibitions)
**-> Then:** `compositional-core/vocabulary/tokens.css` (65 locked tokens)
```

**The new content:**

```markdown
### I'm here to BUILD content/pages
**-> Start:** `compositional-core/CLAUDE.md` (phase-gated building protocol)
**-> ALWAYS load first:** `compositional-core/identity/prohibitions.md` (22 prohibitions)
**-> Then:** `compositional-core/vocabulary/tokens.css` (65 locked tokens)
**-> For Ceiling/Flagship builds:** Use Opus (claude-opus-4-6) for builder agents
```

**Why this matters:** The current routing sends builders to README.md (923 lines of explanation) instead of CLAUDE.md (680 lines of operational protocol). The Opus recommendation for builder agents ensures the highest-leverage model selection finding reaches agents at the point where they make the decision.

**Size:** ~2 lines modified/added.

---

## Summary Table

| # | File | What Changes | Lines Added | Problem Solved |
|---|------|-------------|-------------|----------------|
| 1 | `tokens.css` | Add `--space-max-stacked: 108px` token + expanded comment | ~5 | S-09 stacking loophole -- per-property caps allow total voids |
| 2 | `semantic-rules.md` | Add S-09 stacking rule with arithmetic proof and fix options | ~25 | Builders had no concrete calculation to prevent whitespace voids |
| 3 | `perceptual-auditing/SKILL.md` | Add minimum perceptual delta thresholds table | ~25 | Programmatic gates counted invisible CSS differences as "variation" |
| 4 | `tension-composition/SKILL.md` | Add recipe header with step sequence to Phase 4 | ~15 | Checklist framing produced compliant-but-flat output |
| 5A | `compositional-core/CLAUDE.md` | Replace Phase 6 with builder recipe, model guidance, file routing | ~15 net | Builder got 13.4% prompt visibility, no CSS recipes, no perception checks |
| 5B | `compositional-core/CLAUDE.md` | Remove 200-line restriction, route full catalog to builder | ~9 | Mechanism catalog went to planner (no CSS), not builder (writes CSS) |
| 5C | `compositional-core/CLAUDE.md` | Insert agent communication protocol section | ~20 | Zero inter-agent messaging = missing components, B+ quality |
| 5D | `compositional-core/CLAUDE.md` | Update conditional-load to say FULL file | ~2 | Consistency with Edit 5B |
| 6A | `design-system/CLAUDE.md` | Update status line | 1 | Stale status misleads agents |
| 6B | `design-system/CLAUDE.md` | Update build routing, add Opus note | ~2 | Agents sent to README instead of CLAUDE.md |

**Total new content:** ~119 lines across 6 files.

**Already applied (no edit needed):**
- Per-category mechanism minimums (1+ per each of 5 categories) -- applied by enrichment execution team
- 3-transition minimum requirement (Step 4.2C) -- applied by enrichment execution team

---

## What These Edits Do NOT Cover

Three items from the codification map are deliberately excluded from this section because they belong to new files rather than edits to existing files:

1. **The gate runner** (spatial-gate-runner.js with SC-09 and SC-10 checks) -- this is a new file, covered in Section 3.
2. **The operational recipe** (the 9-phase build sequence from File 42) -- this is a new file, covered in Section 3.
3. **The /build-page orchestrator** (the thin command that runs Pipeline v2) -- this is a new file, covered in Section 3.

The edits in this section prepare the existing design system files to support Pipeline v2. The new files in Section 3 implement the pipeline itself. Together, they form the complete codification.

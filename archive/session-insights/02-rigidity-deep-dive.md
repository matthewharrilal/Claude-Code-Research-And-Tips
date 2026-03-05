# Rigidity Deep-Dive Analysis: When Good, When Bad, Concrete Examples

**Author:** rigidity-analyst
**Date:** 2026-02-15
**Purpose:** Deep analysis of rigidity taxonomy with concrete project examples, testing taxonomy completeness, developing nuanced frameworks beyond binary good/bad

**Sources:**
- ephemeral/session-insights/00-LIVING-DOCUMENT.md (I-02)
- ephemeral/rigidity-research/06-unified-synthesis.md
- ephemeral/rigidity-research/05-metacognitive-rigidity.md
- design-system/compositional-core/identity/prohibitions.md
- design-system/compositional-core/grammar/mechanism-catalog.md

---

## METACOGNITIVE PREFACE

**What I'm about to do:**
I am constructing an INTERPRETATION of rigidity in the KortAI design system using concrete project examples. This is not "discovering the truth about rigidity" — it is building a framework that makes the concept actionable.

**My biases:**
- I am anchored on the 4-type taxonomy from the unified synthesis
- I am seeking CONCRETE examples from project history (may miss theoretical edge cases)
- I am influenced by the "binary rules achieve 100% compliance" principle from MEMORY.md
- I am motivated to find WHEN each type becomes harmful (may overweight negative cases)

**What would change my analysis:**
- Evidence that the 4-type taxonomy FAILS to categorize a real constraint from the project
- Evidence that "good/bad" framing prevents useful constraint evaluation
- Counterexamples where a Type 1 constraint demonstrably limited richness
- Evidence that a 5th or 6th type is needed

**Speculation flags:**
- When I say "likely" or "probably" → I am extrapolating from limited data
- When I say "evidence shows" → I am interpreting data through my lens
- When I say "X causes Y" → I am constructing a causal model, not reporting direct observation

---

## PART 1: THE 4-TYPE TAXONOMY VALIDATED WITH PROJECT EVIDENCE

### Type 1: Identity Rigidity (ENABLING)

**Definition:** Constraints that define WHAT the system is by defining what it is NOT. Create possibility space by bounding it.

**Core Principle:** Removal doesn't create freedom — it creates formlessness.

---

#### Example 1A: border-radius: 0 — GOOD (Generative Constraint)

**The Constraint:**
```css
/* From prohibitions.md, line 25 */
border-radius: 0; /* ALWAYS */
```

**Project Evidence:**
- **DD-006 fractal exploration:** The angular spiral component exists BECAUSE sharp edges were mandated. With rounded corners, the default would be circular/organic spirals. The constraint FORCED angular geometry, which produced a MORE creative solution (AD-F-013).
- **CD-006 pilot migration:** All 11 components use sharp edges. Zero aesthetic compromise noted in 39/40 audit score.
- **Phase D Variant B:** 18/19 compliance maintained border-radius: 0 without complaint.

**When It's Good:**
- Content domain: Technical documentation, editorial authority, print heritage
- Audience expectation: Professional, decisive, confident
- Design goal: Distinctiveness, recognizability, anti-generic

**Concrete Test:** "Does removing this constraint make the design MORE flexible or LESS recognizable?"
- Answer: LESS recognizable. KortAI becomes "could be any UI kit" (anti-patterns/registry.md lines 59-62).

**Why This Is Enabling:**
Sharp edges created a PROBLEM (how do we create depth without shadows or rounded softness?). That problem forced SOLUTIONS:
- Solid offset depth (EXT-CREATIVE-001) — structural depth via ::after pseudo-element
- Border-weight hierarchy (4px/3px/1px) — encoding via thickness
- Zone background differentiation — depth via color shifts

**Mechanism Count:** 3+ mechanisms exist BECAUSE box-shadow and border-radius were prohibited.

**Metacognitive Note:** I am constructing this as "good" based on the evidence that it generated solutions. SPECULATION: Would different constraints generate DIFFERENT but equally rich solutions? Possibly. But "border-radius: 0 is generative" is validated by the actual creative artifacts produced (DD-006, OD-004, CD-006).

---

#### Example 1B: border-radius: 0 — When Would It Be BAD?

**Hypothetical Scenario:** KortAI needs to build a consumer-facing product dashboard for a meditation app.

**Audience:** General public, seeking calm/warmth/approachability
**Content domain:** Personal wellness, emotional safety
**Design goal:** Friendly, soft, accessible

**The Conflict:**
Sharp edges = decisive, authoritative, print heritage.
Meditation app = calm, soft, approachable.

**Identity mismatch:** The constraint doesn't FIT the audience or domain.

**Critical Insight:** Type 1 rigidity is bad ONLY when the identity it encodes contradicts the PURPOSE of the content.

**Real Question:** "Is this content actually FOR KortAI's identity, or are we forcing KortAI identity onto incompatible content?"

**Diagnostic Test for Type 1:**
"Does this constraint define WHO we are in a way that SERVES the audience we're designing for?"
- YES → Keep (enabling)
- NO → Wrong project (identity contradiction)

**Important Distinction:** This isn't "the constraint is bad." This is "this content shouldn't be KortAI." Type 1 constraints are IDENTITY. If identity contradicts audience needs, the solution is NOT to relax identity — it's to recognize the content doesn't belong in this design system.

---

#### Example 1C: box-shadow: none — GOOD (Forces Honest Depth)

**The Constraint:**
```css
/* From prohibitions.md, line 43 */
box-shadow: none; /* ALWAYS */
```

**Project Evidence:**
- **OD-004 geological metaphor:** No shadows exist. Depth is encoded through zone backgrounds (sparse #FEF9F5, dense #FFFFFF, breathing #FAF5ED, bedrock #1A1A1A).
- **Solid offset depth (EXT-CREATIVE-001):** Invented as direct response to no-shadow constraint. Uses ::after pseudo-element with solid background offset 4px. Creates depth WITHOUT physical-world light metaphor.
- **All 30 validated explorations:** Zero shadow usage. Every depth effect uses spacing, borders, or background zones.

**When It's Good:**
- Anti-physical identity (flat design principle)
- Print heritage (no fake 3D)
- Honest representation (structure, not decoration)

**The Forced Creativity:**
Without box-shadow, builders MUST encode depth through:
1. Border-weight gradients (4px → 1px)
2. Zone background shifts (cream → white → breathing)
3. Spacing compression (80px → 16px)
4. Solid offset ::after pseudo-elements

**Result:** 4+ distinct depth-encoding vocabularies exist where default systems would use 1 (drop shadow).

**Why This Is Enabling:**
The constraint didn't reduce vocabulary — it MULTIPLIED it. Every builder who couldn't use shadows HAD TO invent structural alternatives.

---

#### Example 1D: box-shadow: none — When Would It Be BAD?

**Hypothetical Scenario:** KortAI content requires VISUAL HIERARCHY where structural hierarchy doesn't exist.

**Example:** Floating action button that needs to appear "above" all content regardless of scroll position.

**The Problem:**
- Structural solution: z-index (works)
- Visual reinforcement: box-shadow (prohibited)
- Alternative: solid offset (creates 4px dead zone that breaks at scroll boundaries)

**The Conflict:**
Floating action buttons REQUIRE perceived elevation. Without shadows, the button appears "on the same plane" as content, reducing perceived affordance.

**Real-World Outcome:** KortAI's identity (anti-physical, flat) is INCOMPATIBLE with floating action buttons.

**The Decision:** Don't use floating action buttons. They violate flat design.

**Critical Insight:** box-shadow: none isn't "bad" here — it's REVEALING. The constraint exposes that floating action buttons contradict KortAI identity. The correct response is to NOT USE floating action buttons, not to relax the constraint.

**Diagnostic Test:**
"Does prohibiting shadows prevent a NECESSARY interaction pattern or just a FAMILIAR one?"
- Necessary (no alternative exists) → Identity limit discovered
- Familiar (structural alternative exists) → Constraint is protective

**For KortAI:** Floating actions are familiar, not necessary. Sticky navigation (position: sticky) provides the same scroll-persistence without requiring elevation illusion.

---

#### Example 1E: Typography Trinity — GOOD (Creates Rhythm)

**The Constraint:**
```css
/* From prohibitions.md, line 107 */
/* Instrument Serif: DISPLAY ONLY (headings) */
/* Inter: BODY TEXT ONLY */
/* JetBrains Mono: CODE ONLY */
```

**Project Evidence:**
- **All 30 explorations:** Zero exceptions. Every page uses Instrument Serif for h1-h2, Inter for body, JetBrains Mono for code.
- **Identity-lens.md lines 71-79:** "Instrument Serif on H1s gives the distinctive 'literary documentation' feel. Inter for body creates clean readability."
- **Fresh extraction findings:** Observers noted "Instrument Serif immediately signals KortAI" even with zero prior context.

**When It's Good:**
- Creates instant recognizability (3 fonts, 3 roles, zero ambiguity)
- Establishes typographic rhythm (display/body/code boundaries are crystal-clear)
- Prevents typographic chaos (96% of web uses 1-2 fonts; KortAI uses 3 with LOCKED roles)

**The Forced Decision:**
Every builder must assign content to ONE of three roles:
1. Display (Instrument Serif) — titles, major headings
2. Body (Inter) — paragraphs, lists, UI text
3. Code (JetBrains Mono) — technical examples

**Result:** Typographic hierarchy is AUTOMATIC. No builder needs to decide "what font for this paragraph?" — the role determines the font.

**Why This Is Enabling:**
Removes low-value decisions (which font?) to enable high-value decisions (how does this heading FUNCTION in the hierarchy?).

---

#### Example 1F: Typography Trinity — When Would It Be BAD?

**Hypothetical Scenario:** Content requires EXPRESSIVE typography (poetry, artistic documentation, brand storytelling).

**The Need:** Typography as VOICE, not just hierarchy. Example: Pull quotes in italic Instrument Serif to create reverence.

**The Conflict:**
Instrument Serif is DISPLAY-ONLY. Using it for body text (even italic, even in special context) violates the constraint.

**Current State:** Anti-patterns/registry.md lines 172-188 documents "Sans-Serif for Essence Body" as a violation — using Inter for Essence callout body text "loses reverent, archival quality."

**The Resolution:** Essence callout BODIES use Instrument Serif italic. This is a DOCUMENTED EXCEPTION.

**Critical Insight:** Type 1 constraints can have CONDITIONAL EXCEPTIONS when the exception serves identity (reverence, archival quality) rather than contradicting it.

**The Boundary:**
- ✅ GOOD exception: Instrument Serif italic for Essence body (enhances archival identity)
- ❌ BAD exception: Instrument Serif for all body text (destroys hierarchy, makes long-form unreadable)

**Diagnostic Test:**
"Does this exception ENHANCE identity in a specific context, or does it DILUTE identity system-wide?"
- Enhances (context-specific, documented) → Conditional exception permitted
- Dilutes (system-wide, arbitrary) → Violation

---

### Type 1 Summary: When Identity Rigidity Is Good vs Bad

**WHEN GOOD (enabling):**
1. Identity matches audience/domain (technical docs + sharp edges = coherent)
2. Constraint forces creative solutions (no shadows → 4 depth-encoding vocabularies)
3. Constraint removes low-value decisions (typography trinity = automatic hierarchy)
4. Constraint creates instant recognizability (border-radius: 0 = "this is KortAI")

**WHEN BAD (limiting):**
1. Identity contradicts audience needs (meditation app + sharp edges = hostile)
2. Constraint prevents necessary interaction (floating actions require elevation)
3. Constraint forces unreadable choices (serif for body text = eye strain)
4. Constraint is arbitrary, not identity-defining (no justification exists)

**FREQUENCY IN KORTAI:**
- Good: 100% of current constraints (8 absolute prohibitions all serve anti-physical editorial identity)
- Bad: 0% (no Type 1 constraint contradicts the identity it encodes)

**CONCLUSION:** Type 1 rigidity in KortAI is universally enabling BECAUSE the constraints were extracted FROM the identity, not imposed ON it.

---

## PART 2: TYPE 2 — PROCEDURAL RIGIDITY (STRUCTURAL)

**Definition:** Constraints that determine the ORDER in which things happen. Don't restrict WHAT you create, only WHEN you encounter inputs.

**Core Principle:** Sequences creativity without constraining output.

---

#### Example 2A: Phase-Gated Library Access (R1) — GOOD (Prevents Contamination)

**The Constraint:**
```
From compositional-core/CLAUDE.md:
"PROHIBITED until Phase 5 (ABSOLUTE — violation invalidates entire derivation):
❌ case-studies/ directory
❌ Prior explorations (DD-001 through CD-006)"
```

**Project Evidence:**
- **Phase D Variant C:** Reached Phase 3.5 gate independently, scored 4.5/5 divergence. The gate WORKED — the agent derived a novel metaphor (laboratory diagnostic) without library contamination.
- **Phase D Variant B:** Achieved 4/5 novelty (laboratory ecosystem metaphor). The sequencing prevented pattern-matching.
- **Anti-gravity compliance:** 94.7% deployment (18/19 mechanisms verified in compositional-core/validation/).

**When It's Good:**
- Creative work requires INDEPENDENT derivation (Track 2 metaphor composition)
- Pattern-matching is the failure mode (convergence on prior solutions)
- Iterative feedback reveals opportunities (audits discover where library applies)

**The Sequencing:**
```
Phase 0-3: DERIVE metaphor (library prohibited)
Phase 3.5: LOCK metaphor (gate)
Phase 4: EXTRACT mechanisms (techniques only, not implementations)
Phase 5: COMPARE to library (divergence check)
Phase 6: IMPLEMENT with mechanisms
```

**Why This Is Structural (not limiting):**
The WHAT (metaphor choice) is unconstrained. The WHEN (library access timing) is rigid.

**Result:** Variant B/C produced novel metaphors (laboratory ecosystem, diagnostic workflow) that diverged from library patterns (geological strata, floor plan, manuscript) on 4/5 dimensions.

---

#### Example 2A: Phase-Gated Library Access — When Would It Be BAD?

**Hypothetical Scenario:** Builder is NEW to the design system, has zero internalized vocabulary, attempting first page.

**The Problem:**
- Phase 0-3: Derive metaphor BLIND (no library)
- Zero examples to learn from
- High probability of violating soul constraints (border-radius > 0, shadows, wrong colors)

**The Conflict:**
Procedural rigidity (sequence) conflicts with LEARNING NEEDS. A first-time builder NEEDS examples to internalize identity.

**Real-World Evidence:** Phase D Track 1 instant fail — builder didn't read prohibitions.md, violated soul constraints 5 times, scored 11/19 compliance.

**The Gap:** Phase-gated access works for FLUENT builders (who have internalized constraints). It fails for NOVICE builders (who need examples to learn constraints).

**The Resolution:**
- **Fluent builders:** Use full pipeline (Phases 0-7, library prohibited until Phase 5)
- **Novice builders:** Use scaffolded onboarding (read prohibitions → study 1 case study → replicate mechanisms → THEN attempt independent derivation)

**Critical Insight:** Procedural rigidity ASSUMES baseline fluency. When fluency is absent, the procedure creates confusion rather than creative freedom.

**Diagnostic Test:**
"Does this sequence assume knowledge the builder doesn't have?"
- NO (baseline fluency exists) → Sequence protects creative independence
- YES (novice builder, zero context) → Sequence creates trial-and-error loop

---

#### Example 2B: Sequential Phase Enforcement (R5) — GOOD (Binary Compliance)

**The Constraint:**
```
From compositional-core/CLAUDE.md:
"You MUST complete phases in exact sequence: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7.
You MUST NOT skip phases.
Violation invalidates the entire derivation."
```

**Project Evidence:**
- **MEMORY.md strategic discovery:** "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."
- **Phase D execution:** All Track 2 variants followed phase sequence. Zero phase-skipping detected.
- **Metacognitive rigidity (05) lines 915-920:** Sequential enforcement works because it exploits LLM continuation bias.

**When It's Good:**
- Builder compliance is CRITICAL (phase-skipping breaks the methodology)
- Binary language achieves measurable results (100% vs ~0%)
- Sequence encodes REASONING ORDER (tension → metaphor → mechanisms → implementation)

**The Enforcement:**
"MUST" language + "invalidates" consequence = binary decision. No room for judgment.

**Result:** Phase sequence was NEVER violated across 5 Phase D variants (3 Track 2, 2 Track 1).

**Why This Is Structural:**
The sequence doesn't constrain WHAT gets built. It constrains the ORDER of decisions.

- Phase 1: Identify tensions (creative)
- Phase 2: Derive metaphor (creative)
- Phase 3: Collapse to search (creative)
- Phase 4: Extract mechanisms (technical)
- Phase 6: Implement (creative + technical)

Each phase is UNCONSTRAINED in output. The sequence ensures earlier creative decisions aren't contaminated by later technical patterns.

---

#### Example 2B: Sequential Phase Enforcement — When Would It Be BAD?

**Hypothetical Scenario:** Builder discovers a CRITICAL ERROR at Phase 6 (implementation) that requires re-deriving the metaphor (Phase 2).

**The Problem:**
- Phases are SEQUENTIAL: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7
- Current instruction: "You MUST NOT skip phases"
- Error is at Phase 2, currently at Phase 6

**The Conflict:**
Strict sequence prevents BACKTRACKING. If a creative decision (Phase 2 metaphor) is wrong, rigid sequence makes it difficult to return and revise.

**Real-World Analogy:** Waterfall development (plan → design → build → test → deploy). If testing reveals a fundamental design flaw, waterfall makes it expensive to return to design phase.

**Current State in KortAI:**
The Phase 3.5 GATE exists specifically to prevent this:
- Lock metaphor BEFORE consulting library
- If metaphor is wrong, regenerate BEFORE Phase 4

But NO GATE exists at Phase 6 to catch implementation-level errors that reveal metaphor is unworkable.

**The Gap:** Sequential enforcement is GOOD for preventing forward contamination (library influences metaphor). It's BAD for preventing backward revision (implementation reveals metaphor doesn't work).

**Diagnostic Test:**
"Does this sequence prevent CONTAMINATION (good) or prevent ERROR RECOVERY (bad)?"
- Prevents contamination → Sequence is protective
- Prevents error recovery → Sequence is limiting

**Resolution for KortAI:**
Add a Phase 6 error-recovery protocol:
```
If implementation reveals metaphor is structurally unworkable:
1. Document the failure mode
2. Return to Phase 2 with constraint ("avoid X pattern")
3. Re-run Phases 2-6 with new metaphor
```

This maintains sequence (no forward-skipping) while permitting backward revision (error recovery).

---

#### Example 2C: Anti-Prescription Framing (R3) — GOOD (Prevents Template Convergence)

**The Constraint:**
```
From compositional-core/CLAUDE.md:
"Every case study MUST begin with '⚠️ THIS IS NOT A TEMPLATE' warning.
MUST use narrative format ('Tension that produced this') NOT criteria format ('When to use')."
```

**Project Evidence:**
- **All 9 case studies** in compositional-core/case-studies/ use anti-prescription template
- **Fresh-eyes zero-context agents** interpreting case studies: agents extract MECHANISMS (border-weight, 2-zone DNA) NOT implementations (geological strata vocabulary)
- **Lens-manifesto.md Section 3:** "When to use" framing triggers LOOKUP mode. "Tension that produced this" triggers DERIVATION mode.

**When It's Good:**
- Pattern-matching is failure mode (convergence on prior solutions)
- Builder needs INSPIRATION not INSTRUCTION
- Case studies are PROOF-OF-CONCEPT not TEMPLATES

**The Framing:**
```markdown
## Tension That Produced This

OD-004 (Confidence Encoding) emerged from content with IMPLICIT CONFIDENCE GRADIENT.
Research findings existed on a spectrum from "established" to "speculative."
The metaphor (geological strata) encoded confidence through DEPTH.

Mechanisms used:
- Border-weight gradient (4px established → 1px speculative)
- Zone backgrounds (bedrock #1A1A1A → topsoil #FEF9F5)
- Spacing compression (confident 40px → uncertain 16px)
```

**Why This Is Structural:**
The FRAMING determines cognitive mode:
- "When to use geological metaphor" → LOOKUP (when does MY content match THIS pattern?)
- "Tension that produced geological metaphor" → DERIVATION (what tension exists in MY content?)

**Result:** Builders extract HOW mechanisms work (border-weight encodes hierarchy) not WHAT values to use (4px = bedrock).

---

#### Example 2C: Anti-Prescription Framing — When Would It Be BAD?

**Hypothetical Scenario:** Builder is creating IDENTICAL CONTENT to a case study (documentation with confidence gradient, hierarchical structure, technical domain).

**The Need:** The builder's content has the SAME tension OD-004 had. Independent convergence is JUSTIFIED.

**The Problem:**
Anti-prescription framing makes it HARDER to recognize legitimate convergence. The warning "THIS IS NOT A TEMPLATE" discourages use even when use is appropriate.

**The Conflict:**
Framing optimizes for DIVERGENCE (good for creative work) at the cost of CONVERGENCE RECOGNITION (bad for legitimate pattern-matching).

**Real-World Evidence:**
From 00-LIVING-DOCUMENT.md I-05:
"The mechanism catalog was EXTRACTED FROM showcase pages. Even though mechanisms are 'abstracted,' they carry structural DNA from their origins. A page deploying 8-10 mechanisms will have FAMILY RESEMBLANCE to showcases."

**The Insight:** Family resemblance (shared structural skeleton) is INTENDED. The question is whether high mechanism density pushes resemblance into template convergence.

**Diagnostic Test:**
"Does this framing prevent INAPPROPRIATE convergence (good) or APPROPRIATE convergence (bad)?"
- Prevents inappropriate (different content, forced pattern) → Framing is protective
- Prevents appropriate (same tension, independent convergence) → Framing is limiting

**Resolution for KortAI:**
The Phase 3.5 divergence table ALREADY handles this:
```
If your metaphor matches a library pattern:
1. Complete 5-dimension divergence table
2. If DIFFERENT on 3+ dimensions → independent convergence (pass)
3. If SAME on 4-5 dimensions → template-matching (regenerate)
```

The anti-prescription framing creates INITIAL resistance. The divergence table provides JUSTIFICATION PATH for legitimate convergence.

**Conclusion:** Anti-prescription framing is slightly TOO rigid for content with identical tensions. But the divergence table corrects this, making the net effect balanced.

---

### Type 2 Summary: When Procedural Rigidity Is Good vs Bad

**WHEN GOOD (structural):**
1. Sequence prevents contamination (library access after metaphor derivation)
2. Binary enforcement achieves compliance (100% phase sequence adherence)
3. Framing triggers correct cognitive mode (derivation, not lookup)
4. Order encodes reasoning sequence (tension → metaphor → mechanisms)

**WHEN BAD (limiting):**
1. Sequence prevents error recovery (can't backtrack to fix fundamental errors)
2. Enforcement assumes baseline fluency (novice builders need examples first)
3. Framing discourages legitimate convergence (same tension, independent derivation)
4. Order creates unnecessary steps (simple content doesn't need 7-phase pipeline)

**FREQUENCY IN KORTAI:**
- Good: 95% of procedural constraints (R1, R5, R3 all protect creative independence)
- Bad: 5% (minor gaps in error recovery, novice onboarding)

**CONCLUSION:** Type 2 rigidity in KortAI is ALMOST universally structural. The primary gap is error recovery (backtracking) and novice scaffolding.

---

## PART 3: TYPE 3 — SPECIFICATION RIGIDITY (MIXED)

**Definition:** Constraints that prescribe specific OUTPUTS or quantities. Determine not just the playing field or process, but the moves you must make.

**Core Principle:** Some specifications protect richness (guardrails), others limit it (caps, quotas).

**The Distinction:** Does the specification prevent a FAILURE MODE (enabling) or prevent an EXPANSION MODE (limiting)?

---

#### Example 3A: Container Width 940-960px — GOOD (Protective Guardrail)

**The Constraint:**
```css
/* From skill-enrichments/ Phase 4.0 guardrails */
.container {
  max-width: 960px; /* 940-960px range */
}
```

**Project Evidence:**
- **Phase D PRIMARY FAILURE MODE:** 4/5 pages violated container width. This was THE most common compliance failure.
- **Variant A:** 720px container (too narrow, desktop underutilized)
- **Variant B:** Container width not enforced (metaphor-driven width collapse)
- **Variant C/D/E:** Similar violations

**Why This Exists:**
At 1440px viewport (standard desktop):
- 960px container = 66.7% viewport width
- Leaves 240px margin on each side
- Prevents "tunnel vision" (too narrow) and "billboard" (too wide)

**The Failure Mode It Prevents:**
Metaphor-driven width reduction. Example: "Laboratory bench metaphor suggests narrow instruments → 600px container" creates PERCEPTUAL DEGRADATION on desktop.

**When It's Good:**
- Desktop viewport utilization (prevents underutilization)
- Reading experience (prevents narrow tunnel effect)
- Metaphor override protection (prevents content-width collapse)

**Critical Insight:** This is a SPECIFICATION (exact value: 940-960px) that PROTECTS richness rather than limiting it.

**The Test:**
"Can you imagine a genuinely excellent page that VIOLATES 940px minimum?"
- Answer: NO. Pages narrower than 940px waste desktop space. Pages wider than 1100px create readability issues (line length).

**Diagnostic Conclusion:** This is a PROTECTIVE specification, not a limiting one.

---

#### Example 3A: Container Width 940-960px — When Would It Be BAD?

**Hypothetical Scenario:** Content requires VISUAL COMPARISON across 3+ columns.

**The Need:** Comparison tables with 4-5 columns, code examples side-by-side, before/after screenshots.

**The Conflict:**
940px container forces columns to collapse or stack. At 4 columns, each column gets ~225px (minus gaps). Too narrow for readable comparison.

**The Real-World Alternative:**
- Horizontal scroll for tables (permitted)
- Responsive column collapse (desktop 4-column → mobile 1-column)
- Breakout sections (specific comparison sections go full-width 100%, main content 960px)

**The Question:** Do these alternatives SOLVE the need, or do they CREATE friction?

**Answer:** For KortAI content (documentation, tutorials, editorial), the alternatives SOLVE the need. Horizontal-scroll tables are acceptable for dense data. Responsive collapse works for comparisons.

**HOWEVER:** For dashboards, data visualization, or application UI, 940px is TOO constraining.

**Critical Insight:** 940px works for CONTENT-HEAVY pages (KortAI's domain). It DOESN'T work for APPLICATION-HEAVY pages (outside KortAI's domain).

**Diagnostic Test:**
"Is this content primarily READ (documentation) or primarily USED (application)?"
- Read (content-heavy) → 940px is protective
- Used (application-heavy) → 940px is limiting

**For KortAI:** Content is documentation (read), so 940px is appropriate.

---

#### Example 3B: "Sample 2-4 Mechanisms" — BAD (Limiting Specification)

**The Constraint:**
```
From tension-composition SKILL.md (line 787):
"Sample 2-4 mechanisms most relevant to YOUR metaphor"
```

**Project Evidence:**
- **ALL 11 research agents** (5 richness + 6 rigidity) identified this as the MOST limiting specification
- **Showcase pages:** DD-006 uses 15 mechanisms, OD-004 uses 12, CD-006 uses 18
- **Phase D Variant B:** Used 5/44 technique families (11% deployment)
- **Richness gap attribution:** Identity-theorist attributed ~25% of richness gap to mechanism cap

**Why This Exists:**
Original intention: Prevent mechanism overload, encourage selectivity.

**The Failure Mode:**
Sets a LOW CEILING rather than a HIGH FLOOR. "Sample 2-4" discourages builders from deploying 8-10 mechanisms even when content supports it.

**When It's Bad:**
- Content has rich structural properties (multiple hierarchies, density gradients, fractal self-similarity)
- 2-4 mechanisms are INSUFFICIENT to encode the richness
- Constraint PREVENTS appropriate mechanism deployment

**Real-World Evidence:**
From 06-unified-synthesis.md lines 50-53:
"All 5 reports identify this single instruction as the most damaging limitation... The number is arbitrary, encourages padding, doesn't account for content scope, and FAILS the Rigidity Test (you can imagine excellent pages that violate it in BOTH directions)."

**The Rigidity Test:**
"Can you imagine a genuinely excellent page that uses 8 mechanisms?"
- Answer: YES. CD-006 (39/40 score) uses 18 mechanisms.

"Can you imagine a genuinely excellent page that uses 2 mechanisms?"
- Answer: YES. Minimal design can be excellent.

**Conclusion:** The constraint is ARBITRARY. Excellent pages exist on both sides of it.

---

#### Example 3B: "Sample 2-4 Mechanisms" — The Modification

**Proposed Change (from 06-unified-synthesis.md):**
Replace "sample 2-4 mechanisms" with per-category minimum:

```
For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational):
- Identify AT LEAST ONE mechanism
- Document WHY it serves THIS metaphor
- Document 3 mechanisms you considered but did NOT deploy and WHY they don't fit
```

**Why This Is Better:**
- **Breadth:** Ensures all 5 categories covered (spatial, temporal, material, behavioral, relational)
- **No cap:** Doesn't set maximum (builder can deploy 15 if content supports it)
- **Justification:** Requires REASONING, not compliance
- **Natural landing zone:** Most content lands at 5-10 mechanisms (matches Middle tier)

**The New Test:**
"Can you imagine a genuinely excellent page that LACKS spatial mechanisms entirely?"
- Answer: NO. Spatial rhythm (spacing, layout) is fundamental to all pages.

"Can you imagine a genuinely excellent page that uses 15 mechanisms across all 5 categories?"
- Answer: YES. Flagship-tier content (CD-006 crown jewel).

**Diagnostic Conclusion:** Per-category minimum is a FLOOR (protective) not a CAP (limiting).

---

#### Example 3C: 32px Padding Floor — GOOD (Prevents Dead Zones)

**The Constraint:**
```css
/* From skill-enrichments/ Phase 4.0 guardrails */
.container {
  padding: 32px; /* minimum */
}
```

**Project Evidence:**
- **Phase D finding:** Metaphor-driven padding collapse observed (tight spacing encodes urgency)
- **Perceptual cost:** Padding < 32px creates "cramped" feeling, reduces readability
- **All showcase pages:** Minimum observed padding is 32px (some go as high as 80px)

**Why This Exists:**
Prevents metaphor-driven dead zones. Example: "Industrial refinery metaphor suggests mechanical tightness → 8px padding" creates PERCEPTUAL FATIGUE.

**When It's Good:**
- Prevents cramped layouts (breathing room)
- Maintains readability (white space around text)
- Protects against metaphor override (mechanical tightness ≠ user comfort)

**The Failure Mode It Prevents:**
Metaphor-driven spacing collapse. Content becomes unreadable because metaphor logic (tight = industrial) overrides perceptual needs (space = readability).

**The Rigidity Test:**
"Can you imagine a genuinely excellent page with 16px padding?"
- Answer: MAYBE for dense data tables or dashboards. But NOT for documentation (KortAI's domain).

**Diagnostic Conclusion:** 32px floor is PROTECTIVE for KortAI's content type (documentation, editorial).

---

#### Example 3C: 32px Padding Floor — When Would It Be BAD?

**Hypothetical Scenario:** Dense reference content (API documentation, configuration tables).

**The Need:** Maximum information density. Users are SCANNING for specific values, not READING paragraphs.

**The Conflict:**
32px padding creates VISUAL WEIGHT inappropriate for reference content. Comparison:
- 32px padding = 1,024px² visual footprint per container
- 16px padding = 256px² visual footprint per container
- 4x difference in perceived "heaviness"

**The Real Question:**
"Is this READING content (documentation) or LOOKUP content (reference)?"
- Reading → 32px protects readability
- Lookup → 32px wastes space

**For KortAI:**
Most content is READING (tutorials, guides, explanations). 32px is appropriate.

**Edge Case:**
API reference tables, configuration option lists — these ARE lookup content.

**The Resolution:**
Exception for LOOKUP content:
```css
.reference-table {
  padding: 16px; /* Exception: dense lookup content */
}
```

**Critical Insight:** 32px floor is appropriate SYSTEM-WIDE, with DOCUMENTED exceptions for dense lookup content.

---

#### Example 3D: 40% Maximum Compression Ratio — GOOD (Prevents Fatigue)

**The Constraint:**
```
From skill-enrichments/ Phase 4.0 guardrails:
"40% maximum compression ratio (densest section ÷ sparsest section)"
```

**Project Evidence:**
- **OD-004 geological metaphor:** Compression ratio = 40px (confident) ÷ 16px (uncertain) = 2.5x = 40%
- **DD-002 CRESCENDO:** Compression ratio = 92px (exhale) ÷ 24px (inhale) = 3.8x = 26%
- **Phase D finding:** Compression ratios > 5:1 create COGNITIVE FATIGUE (readers can't adjust to density shifts)

**Why This Exists:**
Prevents metaphor-driven compression extremes. Example: "Geological pressure metaphor suggests extreme compression → 80px topsoil, 8px bedrock" = 10:1 ratio = reader whiplash.

**When It's Good:**
- Protects reading experience (prevents density whiplash)
- Maintains perceptual coherence (density shifts are navigable, not jarring)
- Prevents metaphor override (pressure logic ≠ reader comfort)

**The Failure Mode It Prevents:**
Extreme compression. Readers experience COGNITIVE LOAD shifting between sections with wildly different densities.

**The Rigidity Test:**
"Can you imagine a genuinely excellent page with 10:1 compression?"
- Answer: MAYBE for visual contrast (art direction). But NOT for sustained reading (documentation).

**Diagnostic Conclusion:** 40% max compression is PROTECTIVE for reading-heavy content.

---

#### Example 3D: 40% Maximum Compression — When Would It Be BAD?

**Hypothetical Scenario:** Content with INTENTIONAL visual shock (before/after comparison, transformation narrative).

**The Need:** EXTREME contrast to signal transformation. Example: "Dense problem statement → Sparse solution."

**The Conflict:**
40% max compression limits contrast to 2.5:1. Intentional shock requires 10:1 or higher.

**Real-World Example:**
Landing page design: Dense feature list (8px spacing) → Sparse call-to-action (80px spacing) = 10:1 = visual funnel.

**The Question:**
"Is this SUSTAINED READING (documentation) or VISUAL IMPACT (marketing)?"
- Sustained reading → 40% protects cognitive load
- Visual impact → 40% limits designed contrast

**For KortAI:**
Content is documentation (sustained reading). 40% is appropriate.

**Edge Case:**
Tutorial with "problem → solution" structure might benefit from 5:1 contrast (problem dense 16px, solution sparse 80px).

**The Resolution:**
Exception for TRANSFORMATION MOMENTS:
```
Permit 5:1 compression IF:
- Used for single critical transition (problem → solution)
- Documented in design rationale
- Limited to 1-2 instances per page
```

**Critical Insight:** 40% is appropriate SYSTEM-WIDE for sustained reading, with RARE exceptions for intentional transformation moments.

---

### Type 3 Summary: When Specification Rigidity Is Good vs Bad

**WHEN GOOD (protective):**
1. Prevents perceptual degradation (940px container, 32px padding)
2. Prevents metaphor override (container width, compression ratio)
3. Has clear failure mode (cramped layouts, desktop underutilization)
4. Passes rigidity test (hard to imagine excellent page that violates it)

**WHEN BAD (limiting):**
1. Sets arbitrary cap (2-4 mechanisms prevents appropriate deployment)
2. Doesn't account for content variation (padding floor inappropriate for lookup tables)
3. Fails rigidity test (excellent pages exist on both sides of the constraint)
4. Prevents legitimate design intent (compression cap limits transformation contrast)

**FREQUENCY IN KORTAI:**
- Good (protective): 75% of specifications (container width, padding floor, compression max)
- Bad (limiting): 25% of specifications (mechanism cap = primary limiting constraint)

**CONCLUSION:** Type 3 rigidity is MOSTLY protective in KortAI. The primary limiting specification is "sample 2-4 mechanisms," which ALL research identified as the gap.

---

## PART 4: TYPE 4 — AMBIENT RIGIDITY (EMERGENT)

**Definition:** Rigidity that emerges from ACCUMULATION of constraints, even when no single constraint is limiting. Volume creates cognitive overload.

**Core Principle:** 168 constraints simultaneously active = invisible narrowing of creative space.

---

#### Example 4A: The 168-Constraint Surface — WHEN IT'S GOOD

**The Reality:**
- 22 prohibitions (identity layer)
- 65 tokens (vocabulary layer)
- 18 mechanisms (grammar layer)
- 11 compositional rules (grammar layer)
- 22 border system rules (grammar layer)
- 30+ semantic guidelines (guidelines layer)
- **Total:** ~168 constraints

**Why This Is A Problem:**
Each constraint is individually justified. But the VOLUME creates:
1. Cognitive overload (can't hold 168 rules in working memory)
2. Emergent narrowing (creative space shrinks even though no single rule is limiting)
3. Random constraint-dropping (builders forget rules, not intentionally)

**When It's GOOD (Managed Ambient Rigidity):**

**Evidence:**
- **Showcase builders:** Had INTERNALIZED 168 constraints through 24 explorations. They didn't experience ambient rigidity because constraints became FLUENT (automatic, not conscious).
- **CD-006 pilot migration:** 78 constraints active, 39/40 audit score. High constraint volume DIDN'T prevent richness because builder had fluency.

**The Key Variable:** FLUENCY.

**When builders have fluency:**
- Constraints are BACKGROUND (like grammar rules in native language)
- Creative decisions happen WITHIN constraints automatically
- No conscious "am I following the 168 rules?" overhead

**Critical Insight:** Ambient rigidity is GOOD when builders have achieved fluency. It's BAD when builders are encountering constraints for the first time.

---

#### Example 4A: The 168-Constraint Surface — WHEN IT'S BAD

**The Reality:**
A NOVICE builder (first KortAI page) encounters:
- 22 prohibitions (must read and internalize)
- 65 tokens (must memorize values)
- 18 mechanisms (must understand how they work)
- 11 compositional rules (must apply correctly)
- 7-phase pipeline (must follow sequence)

**The Cognitive Load:**
~527 lines of mandatory reading (prohibitions.md + tokens.css).
~168 rules to track simultaneously.

**The Failure Mode:**
- **Phase D Track 1 instant fail:** Builder didn't read prohibitions.md. Violated soul constraints 5 times. Scored 11/19 compliance.
- **Random constraint-dropping:** Not intentional violations — FORGOT the rules due to volume.

**When Ambient Rigidity Is BAD:**
1. Builder is NOVICE (no fluency, encountering rules for first time)
2. No TIERED presentation (all 168 rules loaded simultaneously)
3. No PROGRESSIVE disclosure (constraints revealed as needed, not all upfront)
4. No ITERATIVE feedback (violations discovered late, not early)

**The Evidence:**
From 05-metacognitive-rigidity.md lines 95-104:
"A builder operating under ALL of these simultaneously faces a different experience than a builder operating under any ONE of them... At some point, the VOLUME of enabling constraints creates ambient rigidity that no single constraint caused."

---

#### Example 4B: Ambient Rigidity Management — The Solutions

**Solution 1: Tiered Constraint Presentation**

From 06-unified-synthesis.md lines 418-420:
```
TIER the constraint presentation:
- Level 1 (soul, always): 22 prohibitions + 3 soul constraints
- Level 2 (grammar, during planning): 18 mechanisms + 11 rules
- Level 3 (guidelines, during review): 30+ semantic guidelines
```

**Why This Works:**
Novice builders encounter 25 constraints (Level 1 only).
Intermediate builders encounter 54 constraints (Level 1+2).
Advanced builders encounter 168 constraints (Level 1+2+3).

**The Progression:**
- Page 1-5: Level 1 only (soul + prohibitions)
- Page 6-20: Level 1+2 (add mechanisms + rules)
- Page 21+: Level 1+2+3 (add semantic guidelines)

**Result:** Ambient rigidity is MANAGED. Builders never face more than ~54 constraints until they've achieved fluency with the basics.

---

**Solution 2: Progressive Fluency Development**

From 05-metacognitive-rigidity.md lines 276-284:
"The showcase builders had INTERNALIZED the design system through 24 explorations. They didn't experience the 22 prohibitions as limitations because they had become FLUENT in the vocabulary."

**The Model:**
- **Page 1:** Conscious compliance (reading prohibitions.md, checking tokens.css)
- **Page 5:** Pattern recognition (recognizing when to use 2-zone DNA)
- **Page 10:** Internalized vocabulary (automatically using mechanisms)
- **Page 20:** Fluent composition (constraints invisible, creativity foreground)

**The Trajectory:**
Ambient rigidity DECREASES as builder fluency INCREASES.

**Evidence:**
From 05-metacognitive-rigidity.md lines 276-284:
"The richness gap may be SELF-HEALING over time as builders develop fluency. The 50th page may rival showcase quality because the builder has achieved the same constraint-internalization that showcase builders had."

---

**Solution 3: Temporal Relocation of Specifications**

From 05-metacognitive-rigidity.md lines 345-356:
"Move specification constraints EARLIER (into planning/assessment) or LATER (into audit/verification) but NOT during implementation."

**The Principle:**
Specifications experienced during BUILDING compete with creative decisions for attention. Specifications experienced during PLANNING or AUDIT do not.

**Example:**
- ❌ BAD: "While implementing, remember to deploy minimum 8 mechanisms"
- ✅ GOOD (planning): "Before implementing, identify 8+ mechanisms you'll deploy"
- ✅ GOOD (audit): "After implementing, verify 8+ mechanisms were deployed"

**Why This Reduces Ambient Rigidity:**
During building, builder focuses on CREATIVE decisions (metaphor application, vocabulary generation). During planning/audit, builder focuses on COMPLIANCE decisions (mechanism count, guardrail verification).

**Separation of concerns reduces cognitive load.**

---

#### Example 4C: The Modification Analyst's Warning — Ambient Rigidity Compounds

From 06-unified-synthesis.md lines 133-141:
"The modification analyst demonstrated that adopting all 4 proposed modifications AS ORIGINALLY STATED would create a 'checklist factory' through compound rigidity."

**The 4 Modifications:**
1. Mechanism mandate (8+ mechanisms)
2. Fractal gate (4-scale coverage table)
3. Multi-channel coherence (section-by-channel table)
4. Technique count metric (X/18 output)

**Individually:** Each modification is reasonable.

**Combined:** Creates ambient rigidity explosion.

**The Math:**
- Current constraint surface: ~168 rules
- Modification 1: +1 rule (mechanism minimum)
- Modification 2: +1 rule (fractal gate) + documentation overhead
- Modification 3: +1 rule (coherence table) + documentation overhead
- Modification 4: +1 rule (technique count) + measurement overhead

**Total new constraints:** +4 rules, +15% documentation overhead

**The Compound Effect:**
Each modification adds 1 rule. But each rule INTERACTS with existing rules:
- Mechanism minimum (8) + Fractal gate (4 scales) = 32+ mechanism-scale combinations to verify
- Multi-channel coherence + Technique count = double-checking (coherence table vs technique inventory)

**The Result:**
"A metric-driven assembly line where the number dominates all other considerations."

**Critical Insight:** Ambient rigidity is NON-ADDITIVE. 168 + 4 ≠ 172. It's 168 + 4 + interaction effects = perceived constraint surface of 200+.

---

### Type 4 Summary: When Ambient Rigidity Is Good vs Bad

**WHEN GOOD (managed):**
1. Builder has FLUENCY (internalized constraints, automatic application)
2. Tiered presentation (Level 1 → Level 2 → Level 3 progressive disclosure)
3. Temporal relocation (specifications in planning/audit, not during building)
4. Iterative feedback (constraints reveal opportunities, not just limit choices)

**WHEN BAD (unmanaged):**
1. Builder is NOVICE (no fluency, all 168 rules encountered simultaneously)
2. No tiered presentation (flat constraint surface)
3. Specifications during building (competes with creative decisions)
4. Modifications compound (4 new rules = 200+ perceived constraint surface)

**FREQUENCY IN KORTAI:**
- Currently: UNMANAGED for novice builders (all 168 rules loaded via always-load protocol)
- Proposed: MANAGED via tiered presentation + temporal relocation

**CONCLUSION:** Ambient rigidity is KortAI's INVISIBLE THREAT. No single constraint is problematic, but the VOLUME creates emergent limitation.

---

## PART 5: TESTING TAXONOMY COMPLETENESS — IS THERE A 5TH TYPE?

**Question:** Does the 4-type taxonomy (Identity/Procedural/Specification/Ambient) FULLY categorize all constraints in KortAI? Or are there constraints that don't fit?

**Method:** Examine constraints that don't cleanly fit one of the 4 types.

---

### Candidate 5th Type: CONTEXTUAL RIGIDITY (Constraints That Change Meaning Based on Context)

**Definition:** Constraints whose rigidity (enabling vs limiting) DEPENDS ON CONTEXT rather than being inherent to the constraint type.

**Examples:**

#### Example 5A: "Minimum 8 Mechanisms"

**Context 1: Long-form tutorial (2000+ words, hierarchical structure)**
- 8 mechanisms = APPROPRIATE (content supports spatial, temporal, material, behavioral, relational encoding)
- Constraint is ENABLING (raises quality floor)

**Context 2: Short reference table (200 words, flat structure)**
- 8 mechanisms = INAPPROPRIATE (content doesn't have 8 semantic dimensions to encode)
- Constraint is LIMITING (forces padding, artificial complexity)

**The Same Constraint, Two Effects:**
In context 1, "minimum 8" is a protective specification (Type 3 good).
In context 2, "minimum 8" is a limiting specification (Type 3 bad).

**Question:** Is this a 5th type (contextual) or just Type 3 (specification) with context-dependent good/bad?

**Answer:** This is STILL Type 3. The context determines WHETHER the specification is protective or limiting, but it's still a specification.

**Conclusion:** NOT a 5th type. Context determines WHICH SUBTYPE of Type 3 (protective vs limiting).

---

#### Example 5B: "No Metaphor-Specific Vocabulary in Mechanism Catalog"

**Context 1: Building phase (Phase 4-6)**
- This constraint is STRUCTURAL (Type 2). It enforces mechanism/metaphor separation to prevent conflation.
- Effect: GOOD (prevents template convergence).

**Context 2: Maintenance phase (updating mechanism catalog after 50 pages built)**
- This constraint is SPECIFICATION (Type 3). It mandates extracting only transferable patterns.
- Effect: GOOD (protects mechanism catalog purity).

**The Same Constraint, Two Types:**
During building, it's procedural (enforces separation).
During maintenance, it's specification (mandates extraction criteria).

**Question:** Is this a 5th type (dual-role) or can it be categorized as BOTH Type 2 AND Type 3?

**Answer:** This is BOTH Type 2 and Type 3. It serves two roles simultaneously:
- Type 2 (procedural): Enforces mechanism/metaphor file separation
- Type 3 (specification): Defines what counts as "mechanism" (transferable) vs "metaphor" (context-specific)

**Conclusion:** NOT a 5th type. A single constraint can SERVE MULTIPLE FUNCTIONS. The taxonomy categorizes FUNCTIONS, not constraints.

---

#### Example 5C: "Phase-Gated Library Access" (R1)

**Question:** Is R1 purely procedural (Type 2), or does it have identity properties (Type 1)?

**Type 2 Evidence (Procedural):**
- Enforces SEQUENCE (when library is accessed)
- Doesn't constrain output, only input timing
- Achieves structural goal (prevents pattern-matching)

**Type 1 Evidence (Identity):**
- Defines KortAI methodology as "creative derivation first, validation second"
- Removal would change WHO KortAI is (from creative-first to pattern-matching-first)
- Encodes philosophical stance (originality valued over efficiency)

**The Analysis:**
R1 is PRIMARILY Type 2 (procedural sequencing).
But it ALSO encodes Type 1 identity (creative-first methodology).

**Question:** Is this a 5th type (hybrid), or is it BOTH Type 1 and Type 2?

**Answer:** It's BOTH. Phase-gated access is:
- 80% procedural (Type 2) — the mechanics are sequence enforcement
- 20% identity (Type 1) — the deeper purpose is encoding creative-first methodology

**Conclusion:** NOT a 5th type. Constraints can have PRIMARY type (procedural) with SECONDARY type (identity). The taxonomy allows for hybrid classification.

---

### Candidate 5th Type: EMERGENT RIGIDITY (Constraints That Arise From Interactions, Not Design)

**Wait — isn't this Type 4 (Ambient)?**

**Type 4 Definition:** Rigidity from ACCUMULATION (volume of constraints).

**Potential Type 5 Definition:** Rigidity from INTERACTION (constraints that conflict or create unintended compound effects).

**Example:**
- Constraint A: "Minimum 8 mechanisms"
- Constraint B: "Fractal self-similarity at 4 scales"
- Interaction: Deploying 8 mechanisms across 4 scales = 32 mechanism-scale decisions

**The Effect:**
Neither A nor B alone is limiting. But A + B TOGETHER create 4x decision overhead.

**Question:** Is this Type 4 (ambient, volume-based) or Type 5 (emergent, interaction-based)?

**Analysis:**
- Type 4 (ambient): 168 constraints simultaneously = cognitive overload (additive)
- Potential Type 5 (emergent): Constraint A × Constraint B = multiplicative overhead (non-additive)

**The Distinction:**
- Ambient (Type 4): More constraints = more overhead (linear or sublinear growth)
- Emergent (Type 5): Interacting constraints = exponential overhead (superlinear growth)

**Example Math:**
- 10 independent constraints = 10 rules to track (linear)
- 5 constraints that interact pairwise = 5 rules + 10 interactions = 15 units of overhead (superlinear)

**Conclusion:** This MIGHT be a 5th type IF interaction effects are STRUCTURALLY different from accumulation effects.

---

### Testing Type 5 (Emergent/Interaction Rigidity) With Project Evidence

**Test Case 1: Modification 1 + Modification 4**

From 06-unified-synthesis.md lines 133-141:
"Modification 1 (mechanism mandate: 8+) + Modification 4 (technique count metric: X/18) combined creates 'a checklist factory, not a creative pipeline.'"

**The Interaction:**
- Modification 1 alone: Raises mechanism floor (protective)
- Modification 4 alone: Adds output metric (transparency)
- Modification 1 + 4: Metric dominates decisions ("I need 8, I have 7, what's the fastest mechanism to add?")

**The Effect:**
Goodhart's Law. The metric (technique count) becomes the TARGET, ceasing to be a good MEASURE.

**Analysis:**
This is NOT just ambient (volume). This is INTERACTION. The two modifications CHANGE EACH OTHER'S MEANING.

**Evidence for Type 5:** Interaction effects are QUALITATIVELY different from accumulation effects.

---

**Test Case 2: "Sample 2-4 Mechanisms" + "Fractal at 4 Scales"**

From 06-unified-synthesis.md lines 343-345:
"'Sample 2-4 mechanisms' + 'fractal at 4 scales' TOGETHER are contradictory — 4-scale fractal compliance often REQUIRES more than 4 mechanisms."

**The Interaction:**
- Constraint A: Use 2-4 mechanisms
- Constraint B: Achieve fractal self-similarity at 4 scales
- Interaction: Fractal compliance at 4 scales often needs 5+ mechanisms (spatial rhythm at page/section/component/element scales)

**The Effect:**
The constraints CONFLICT. Following A prevents achieving B.

**Analysis:**
This is NOT accumulation (more rules = more overhead).
This is CONTRADICTION (rule A prevents rule B).

**Evidence for Type 5:** Conflicting constraints create a QUALITATIVELY different rigidity than additive constraints.

---

### Verdict: Is There a 5th Type?

**Yes. Type 5: INTERACTION RIGIDITY (Emergent Contradictions and Compound Effects)**

**Definition:** Rigidity that emerges from constraints INTERACTING, creating contradictions, multiplicative overhead, or meaning-shifts that no single constraint would cause.

**Subtypes:**

**Type 5A: Contradictory Constraints**
- Two constraints that CONFLICT (following A prevents achieving B)
- Example: "2-4 mechanisms" + "fractal at 4 scales" (fractal needs 5+)
- Effect: Builder must violate one constraint to satisfy the other

**Type 5B: Multiplicative Overhead**
- Two constraints that COMBINE to create exponential decision space
- Example: "8 mechanisms" + "4 scales" = 32 mechanism-scale decisions
- Effect: Cognitive load grows faster than constraint count

**Type 5C: Meaning-Shifting Interactions (Goodhart's Law)**
- Two constraints that CHANGE EACH OTHER'S PURPOSE when combined
- Example: "8 mechanisms" (quality floor) + "technique count metric" (transparency) = metric becomes TARGET
- Effect: Builders optimize for metric, not quality

**Evidence:**
- Test case 1: Modification 1 + 4 (Type 5C confirmed)
- Test case 2: "2-4 mechanisms" + "fractal gate" (Type 5A confirmed)
- Modification analyst warning: All 4 modifications combined create compound effects (Type 5B confirmed)

**Conclusion:** The 4-type taxonomy is INCOMPLETE. Type 5 (Interaction Rigidity) is a DISTINCT phenomenon not reducible to accumulation (Type 4).

---

## PART 6: UPDATED TAXONOMY — 5 TYPES OF RIGIDITY

### Type 1: Identity Rigidity (ENABLING)
**Creates the playing field**
- Good: border-radius: 0 (generates angular spiral), box-shadow: none (forces 4 depth strategies)
- Bad: Only when identity contradicts audience needs (meditation app + sharp edges)
- Frequency in KortAI: 100% enabling (8 absolute prohibitions all serve identity)

### Type 2: Procedural Rigidity (STRUCTURAL)
**Sequences creativity without constraining output**
- Good: Phase-gated library access (prevents contamination), sequential phases (100% compliance)
- Bad: When sequence prevents error recovery (can't backtrack), when fluency is absent (novice needs examples)
- Frequency in KortAI: 95% structural, 5% gaps (error recovery, novice onboarding)

### Type 3: Specification Rigidity (MIXED)
**Prescribes specific outputs or quantities**
- Good (protective): 940px container (prevents width collapse), 32px padding (prevents dead zones), 40% compression (prevents fatigue)
- Bad (limiting): "2-4 mechanisms" (sets cap, not floor), arbitrary quotas (doesn't account for content variation)
- Frequency in KortAI: 75% protective, 25% limiting (mechanism cap is primary gap)

### Type 4: Ambient Rigidity (EMERGENT — VOLUME)
**Cognitive overload from constraint accumulation**
- Good (managed): When builder has fluency (internalized constraints), tiered presentation (progressive disclosure)
- Bad (unmanaged): When builder is novice (168 rules simultaneously), flat constraint surface (no progressive tiers)
- Frequency in KortAI: Currently unmanaged for novices (all rules loaded via always-load)

### Type 5: Interaction Rigidity (EMERGENT — CONFLICTS)
**Constraints that contradict, multiply, or shift meaning when combined**
- Type 5A (contradictory): "2-4 mechanisms" + "fractal gate" (fractal needs 5+)
- Type 5B (multiplicative): "8 mechanisms" + "4 scales" = 32 decisions
- Type 5C (meaning-shift): "8 mechanisms" + "technique count" = Goodhart's Law (metric becomes target)
- Frequency in KortAI: Identified in proposed modifications (modification analyst warning)

---

## PART 7: DIAGNOSTIC FRAMEWORK — EVALUATING CONSTRAINTS

**For ANY constraint in the design system, ask these questions:**

### Test 1: TYPE CLASSIFICATION
"What type of rigidity is this?"
- Defines WHO we are → Type 1 (Identity)
- Defines WHEN things happen → Type 2 (Procedural)
- Defines WHAT output looks like → Type 3 (Specification)
- Emerges from VOLUME → Type 4 (Ambient)
- Emerges from INTERACTION → Type 5 (Interaction)

### Test 2: GOOD/BAD DETERMINATION (Type-Specific)

**Type 1 (Identity):**
"Does this constraint define who we are in a way that SERVES our audience?"
- YES → Keep (enabling)
- NO → Wrong project (identity contradiction)

**Type 2 (Procedural):**
"Does this sequence prevent CONTAMINATION (good) or prevent ERROR RECOVERY (bad)?"
- Prevents contamination → Keep (structural)
- Prevents error recovery → Add backtracking protocol

**Type 3 (Specification):**
"Does this specification prevent a FAILURE MODE (protective) or prevent an EXPANSION MODE (limiting)?"
- Failure mode → Keep (protective)
- Expansion mode → Remove or convert to floor

**Type 4 (Ambient):**
"Does the builder have FLUENCY, or are they encountering all constraints simultaneously?"
- Fluency exists → Managed (good)
- No fluency → Add tiered presentation

**Type 5 (Interaction):**
"Do these constraints CONFLICT, MULTIPLY overhead, or SHIFT meaning when combined?"
- Conflict (Type 5A) → Remove one constraint
- Multiply (Type 5B) → Simplify or provide decision tree
- Shift meaning (Type 5C) → Remove metric or reframe as qualitative

### Test 3: RIGIDITY TEST (From Modification Analyst)

"Can you imagine a genuinely excellent page that VIOLATES this constraint?"
- NO → Constraint is protective (keep)
- YES (excellent pages on both sides) → Constraint is arbitrary (remove)
- YES (only on expansion side) → Constraint is limiting (convert to floor)

### Test 4: CONTEXT TEST

"Does this constraint's effect CHANGE based on content type, builder fluency, or phase?"
- Content type → Document exceptions (lookup vs reading)
- Builder fluency → Tier presentation (novice vs advanced)
- Phase → Temporal relocation (planning vs building vs audit)

---

## PART 8: CONCRETE MODIFICATION RECOMMENDATIONS

Based on the deep-dive analysis, here are SPECIFIC changes to KortAI constraints:

### Recommendation 1: Replace Mechanism Cap with Per-Category Floor + Justification

**Current (LIMITING):**
```
"Sample 2-4 mechanisms most relevant to YOUR metaphor"
```

**Proposed (PROTECTIVE):**
```
For each of the 5 property categories:
- Spatial: Identify 1+ mechanisms (spacing, layout, width)
- Temporal: Identify 1+ mechanisms (density rhythm, progressive disclosure)
- Material: Identify 1+ mechanisms (borders, backgrounds, typography)
- Behavioral: Identify 1+ mechanisms (scroll witness, transitions)
- Relational: Identify 1+ mechanisms (fractal, multi-channel coherence)

For each mechanism deployed: Document WHY it serves THIS metaphor
For 3 mechanisms NOT deployed: Document WHY they don't fit
```

**Why This Is Better:**
- Ensures BREADTH (all 5 categories covered)
- No CAP (can deploy 15 if content supports it)
- Requires REASONING, not compliance
- Natural landing zone: 5-10 mechanisms (Middle tier)

**Type:** Converts Type 3 limiting (cap) to Type 3 protective (floor)

---

### Recommendation 2: Add Fractal Gate with Scope Calibration

**Current (CHECK, not GATE):**
```
Perceptual-auditing PA-06: "Is there self-similar structure at multiple scales?"
```

**Proposed (GATE with tier calibration):**
```
Phase 3.5F: Fractal Consistency Gate

Required scale coverage:
- Floor tier: EXEMPT (short content, token compliance only)
- Middle tier: 2 scales minimum (page + section OR section + component)
- Ceiling tier: 4 scales minimum (navigation + page + section + component)
- Flagship tier: 5 scales minimum (add element-level fractal)

For each scale, document:
| Scale | Metaphor Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | [how TOC reflects metaphor] | [specific CSS] |
| Page | [section sequence logic] | [specific CSS] |
| Section | [components within section] | [specific CSS] |
| Component | [content within component] | [specific CSS] |
```

**Why This Is Better:**
- GATE enforcement (must pass before proceeding)
- Scope-calibrated (short content exempt, flagship requires 5 scales)
- Requires CSS EVIDENCE (not just conceptual fractal)
- Addresses Phase D's #1 gap (fractal absent from Variant B)

**Type:** Type 3 protective specification (prevents known failure mode: DD-F-006 violation)

---

### Recommendation 3: Add 3-Transition Coherence Check (Not Full Table)

**Current (PROPOSED but too heavy):**
```
Full section-by-channel coherence table
(every section × every channel = 6 sections × 5 channels = 30 cells)
```

**Proposed (LIGHTWEIGHT):**
```
Identify your 3 most important section transitions.

For each transition, verify AT LEAST 3 channels shift in a coherent direction:

Transition: [Section A] → [Section B]
Direction: [DENSER / SPARSER / NEUTRAL]
Channels:
- Background: [cream → white] (denser)
- Border: [1px → 3px] (denser)
- Spacing: [64px → 32px] (denser)
- Typography: [no change] (neutral)
- Width: [no change] (neutral)

Coherence: 3/5 channels shift denser → PASS
```

**Why This Is Better:**
- 3 transitions (not all transitions) = 80/20 rule
- 3 channels minimum (not all 5) = prevents uniformity pressure
- Inline CSS annotations optional (keeps coherence IN the code)
- Moved to PLANNING phase (not during building)

**Type:** Type 3 protective specification (prevents incoherent multi-channel shifts)

---

### Recommendation 4: REJECT Technique Count Metric (Use Narrative Instead)

**Current (PROPOSED but dangerous):**
```
Output: "Technique deployment: 12/18 mechanisms"
```

**Proposed (QUALITATIVE):**
```
Technique Deployment Narrative:

Mechanisms deployed:
1. Border-weight gradient (4px → 1px) — Encodes confidence hierarchy
2. 2-zone DNA (label + body) — All callouts use sparse/dense split
3. [Continue for each mechanism]

Strongest deployment: [name] — [evidence of deep integration]
Weakest deployment: [name] — [what could be improved]
Mechanism NOT deployed that would have helped: [name] — [why omitted]
```

**Why This Is Better:**
- No X/18 denominator (removes ceiling expectation)
- Requires JUSTIFICATION, not counting
- Identifies WEAK deployments (improvement opportunities)
- Identifies MISSED mechanisms (discovery, not compliance)

**Type:** Converts Type 5C (meaning-shift) to Type 2 (procedural narrative)

---

### Recommendation 5: Tiered Constraint Presentation (Manage Ambient Rigidity)

**Current (FLAT):**
```
Always-load protocol:
- prohibitions.md (353 lines, 22 prohibitions)
- tokens.css (174 lines, 65 tokens)
Total: 527 lines, ALL constraints loaded at once
```

**Proposed (TIERED):**
```
LEVEL 1 (Always-Load, ALL builders):
- prohibitions.md: 8 ABSOLUTE prohibitions only (lines 19-176)
- tokens.css: 21 IMMUTABLE tokens only (colors, fonts, soul constraints)
Total: ~200 lines

LEVEL 2 (Intermediate, after 5 pages):
- Add: 12 CONDITIONAL prohibitions (lines 177-293)
- Add: 14 MUTABLE tokens (spacing scale, type scale)
- Add: mechanism-catalog.md (first 200 lines, 18 mechanisms)
Total: +300 lines

LEVEL 3 (Advanced, after 20 pages):
- Add: 2 META prohibitions (process-level)
- Add: 30 AVAILABLE tokens (full token palette)
- Add: semantic-rules.md, usage-criteria.md
Total: +200 lines
```

**Why This Is Better:**
- Novice builders face 25 constraints (Level 1), not 168
- Intermediate builders face 54 constraints (Level 1+2)
- Advanced builders face 168 constraints (Level 1+2+3)
- Progressive fluency development (constraints added as competence grows)

**Type:** Manages Type 4 (ambient rigidity) through tiered disclosure

---

### Recommendation 6: Add Error Recovery Protocol (Fix Type 2 Gap)

**Current (STRICT SEQUENCE, no backtracking):**
```
Phases: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7
"You MUST NOT skip phases."
```

**Proposed (ADD BACKTRACKING PROTOCOL):**
```
Phases: 0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7

Error Recovery Protocol:
IF implementation (Phase 6) reveals metaphor is structurally unworkable:
1. Document failure mode ("metaphor implies X, but X violates guardrail Y")
2. Return to Phase 2 with constraint ("avoid metaphor family Z")
3. Re-run Phases 2-6 with new metaphor

This maintains sequence (no forward-skipping) while permitting backward revision.
```

**Type:** Fixes Type 2 (procedural) gap in error recovery

---

## PART 9: ADDRESSING "IS GOOD/BAD TOO BINARY?"

**The Question:** Is thinking about rigidity as "good" or "bad" too reductive? What nuances does this framing miss?

**Answer:** YES, binary framing is reductive. Here's a more nuanced model:

---

### Nuanced Rigidity Spectrum (7 Levels)

**Level 1: CRITICALLY ENABLING**
- Removal destroys identity entirely
- Example: border-radius: 0 (without this, not KortAI)
- Effect: 100% enabling, 0% limiting

**Level 2: STRONGLY ENABLING**
- Creates multiple creative solutions, minimal constraint on choices
- Example: box-shadow: none (forces 4 depth vocabularies)
- Effect: 90% enabling, 10% limiting

**Level 3: MODERATELY ENABLING (Protective)**
- Prevents known failure mode, slight constraint on edge cases
- Example: 940px container (protects desktop, limits 4-column layouts)
- Effect: 70% enabling, 30% limiting

**Level 4: NEUTRAL (Context-Dependent)**
- Good in some contexts, bad in others
- Example: 32px padding floor (good for reading, limiting for lookup tables)
- Effect: 50% enabling, 50% limiting (depends on content)

**Level 5: MODERATELY LIMITING**
- Limits some appropriate choices, prevents some failures
- Example: "Sample 2-4 mechanisms" (raises floor for simple content, caps complex content)
- Effect: 30% enabling, 70% limiting

**Level 6: STRONGLY LIMITING**
- Prevents appropriate expansion, minimal protective benefit
- Example: "Maximum 5-6 patterns per page" (arbitrary cap, no failure mode prevented)
- Effect: 10% enabling, 90% limiting

**Level 7: CRITICALLY LIMITING**
- Pure constraint, zero enabling effect
- Example: "Never use more than 2 font sizes" (destroys hierarchy, no identity benefit)
- Effect: 0% enabling, 100% limiting

---

### Applying the Spectrum to KortAI Constraints

**Type 1 (Identity) Constraints:**
- border-radius: 0 → **Level 1 (critically enabling)**
- box-shadow: none → **Level 2 (strongly enabling)**
- Typography trinity → **Level 2 (strongly enabling)**
- No pure black/white → **Level 3 (moderately enabling)**

**Type 2 (Procedural) Constraints:**
- Phase-gated library access → **Level 2 (strongly enabling)** for fluent builders, **Level 5 (moderately limiting)** for novices
- Sequential phases → **Level 3 (moderately enabling)** with error recovery gap
- Anti-prescription framing → **Level 4 (neutral/context-dependent)** (good for divergence, limiting for legitimate convergence)

**Type 3 (Specification) Constraints:**
- 940px container → **Level 3 (moderately enabling)** for content, **Level 5 (moderately limiting)** for applications
- 32px padding floor → **Level 3 (moderately enabling)** for reading, **Level 5 (moderately limiting)** for lookup
- 40% compression max → **Level 3 (moderately enabling)** for sustained reading, **Level 5 (moderately limiting)** for transformation moments
- "Sample 2-4 mechanisms" → **Level 5 (moderately limiting)** (caps complex content)

**Type 4 (Ambient) Constraints:**
- 168-constraint surface → **Level 2 (strongly enabling)** for fluent builders, **Level 6 (strongly limiting)** for novices

**Type 5 (Interaction) Constraints:**
- "2-4 mechanisms" + "fractal gate" → **Level 6 (strongly limiting)** (contradictory)
- "8 mechanisms" + "technique count metric" → **Level 6 (strongly limiting)** (Goodhart's Law)

---

### Key Insight: RIGIDITY IS A SPECTRUM, NOT A BINARY

**The Reframe:**
Instead of asking "Is this constraint good or bad?" ask:
1. **"Where on the 7-level spectrum does this fall?"**
2. **"What's the enabling/limiting ratio?"**
3. **"Does context shift the level?"** (Level 3 for content A, Level 5 for content B)
4. **"Can we move this UP the spectrum?"** (Level 5 → Level 3 by adding scope calibration)

**Example Application:**
"Sample 2-4 mechanisms" is currently **Level 5 (moderately limiting)**.
Proposed modification (per-category floor) moves it to **Level 3 (moderately enabling)**.
Improvement: +2 levels up the spectrum.

---

## PART 10: WHEN TYPE 1 (VOCABULARY) CAN BECOME BAD — THE HYPOTHETICAL

**The Claim (from MEMORY.md):**
"Vocabulary rigidity outpaces constraint rigidity 4:1. CAVEAT: tested in theory but untested in practice."

**The Question:**
"Can Type 1 (vocabulary/mechanism catalog) become limiting? When?"

**Hypothesis:**
If the mechanism catalog reaches SATURATION (100+ mechanisms), builders might experience:
1. **Choice paralysis:** Too many mechanisms to evaluate
2. **Pattern-matching pressure:** "Which prior mechanism matches MY need?"
3. **Missed creativity:** Defaulting to existing mechanisms instead of inventing new ones

**Testing the Hypothesis:**

**Current State:**
- 18 mechanisms in catalog
- Builders report NO choice paralysis
- Variant B deployed 5/18 (not overwhelmed by 18 options)

**Projected State (100+ mechanisms):**
- 100 mechanisms = 5.5x current catalog
- Builders would need to SCAN 100 options to find relevant mechanisms
- Risk: "Which mechanism fits?" becomes LOOKUP instead of CREATIVE DECISION

**When Type 1 (Vocabulary) Would Become Limiting:**
1. **Catalog size > working memory** (~100+ mechanisms)
2. **No categorization system** (flat list, no property categories)
3. **No search/filter tools** (must manually scan all 100)
4. **Pressure to use existing** ("have you checked all 100 mechanisms first?")

**Diagnostic Test:**
"Does the vocabulary ENABLE expression, or does it CREATE PRESSURE to use existing words instead of inventing new ones?"
- 18 mechanisms → Enables (small enough to internalize)
- 100 mechanisms → Likely creates pressure (too large to internalize)

**Current Verdict:**
Type 1 (vocabulary) is ENABLING at 18 mechanisms.
SPECULATION: At 100+, it MIGHT become limiting.
UNTESTED in practice.

---

## PART 11: THE PIGEONHOLING QUESTION — STRUCTURAL CONVERGENCE VS MONOTONY

**The Question (from I-02):**
"The intersection of rigidity and pigeonholing: when does structural convergence (intended) become monotony (unintended)?"

**Definitions:**
- **Structural convergence (INTENDED):** Family resemblance from shared mechanisms. All KortAI pages use 2-zone DNA, border-weight gradients, zone backgrounds.
- **Monotony (UNINTENDED):** Pages feel samey, derivative, template-driven.

**The Boundary:**

**STRUCTURAL CONVERGENCE (Good):**
- Shared MECHANISMS (2-zone DNA, border-weight gradient)
- Different METAPHORS (geological strata, laboratory ecosystem, floor plan)
- Different VOCABULARY (bedrock/topsoil vs instrument/sample vs basement/ground-floor)
- Result: Pages share STRUCTURAL SKELETON but have DISTINCT IDENTITY

**MONOTONY (Bad):**
- Shared MECHANISMS + shared METAPHORS
- Same vocabulary repeated (all pages use geological strata)
- Same visual patterns (every page looks like OD-004)
- Result: Pages are INDISTINGUISHABLE

**Concrete Example:**

**Good (Structural Convergence):**
- OD-004 (geological strata): border-weight 4px/3px/1px, zone backgrounds, spacing compression
- Variant B (laboratory ecosystem): border-weight 4px/3px/1px, zone backgrounds, spacing compression
- SAME mechanisms, DIFFERENT metaphor, DIFFERENT vocabulary
- Result: Family resemblance (both are KortAI) but distinct identity

**Bad (Monotony):**
- Page 1: Geological strata with bedrock/topsoil
- Page 2: Geological strata with bedrock/topsoil
- Page 50: Geological strata with bedrock/topsoil
- SAME mechanisms, SAME metaphor, SAME vocabulary
- Result: All pages feel identical

**The Diagnostic Test:**
"If I blur my vision (squint test), do pages share STRUCTURE? If I read the text, do pages have DISTINCT IDENTITY?"
- Shared structure + distinct identity → Structural convergence (good)
- Shared structure + shared identity → Monotony (bad)

**For KortAI:**
- Phase D produced 4 DISTINCT metaphors (geological, laboratory ecosystem, laboratory diagnostic, industrial refinery)
- All used similar mechanisms (2-zone DNA, border-weight)
- Squint test: Pages share structure
- Reading test: Pages have distinct vocabulary

**Verdict:** Structural convergence is PRESENT. Monotony is NOT (yet).

---

**The Risk:**
If 75 pages are built and 60 use geological metaphor, monotony WILL emerge.

**The Protection:**
Divergence mandate (Phase 3.5 gate). If metaphor matches library, justify or regenerate.

**Unanswered Question:**
At what COLLECTION SIZE does structural convergence flip to monotony?
- 10 pages with 8 distinct metaphors → Convergence (good)
- 75 pages with 20 distinct metaphors → Convergence (probably still good)
- 75 pages with 5 distinct metaphors → Monotony (bad)

**The Threshold:**
SPECULATION: If >30% of pages share the same metaphor family, monotony risk increases.
UNTESTED in practice (KortAI has 30 showcase pages with ~15 distinct metaphors = 50% uniqueness).

---

## PART 12: FINAL SYNTHESIS — RIGIDITY DECISION TREE

**For ANY constraint being evaluated, use this decision tree:**

```
START: What type of rigidity is this?

┌─ Type 1 (Identity) ────────────────────────────────┐
│ Does this define WHO we are?                       │
│ ├─ YES → Does it serve our audience?               │
│ │         ├─ YES → KEEP (Level 1-2, critically/strongly enabling)
│ │         └─ NO → WRONG PROJECT (identity mismatch)│
│ └─ NO → Not Type 1, re-categorize                  │
└─────────────────────────────────────────────────────┘

┌─ Type 2 (Procedural) ──────────────────────────────┐
│ Does this determine WHEN things happen?            │
│ ├─ YES → Does it prevent contamination OR error recovery?
│ │         ├─ Prevents contamination → KEEP (Level 2-3)
│ │         ├─ Prevents error recovery → ADD BACKTRACKING
│ │         └─ Assumes fluency → TIER PRESENTATION  │
│ └─ NO → Not Type 2, re-categorize                  │
└─────────────────────────────────────────────────────┘

┌─ Type 3 (Specification) ───────────────────────────┐
│ Does this prescribe WHAT output looks like?        │
│ ├─ YES → Does it prevent failure mode OR expansion?│
│ │         ├─ Failure mode → KEEP (Level 3, protective)
│ │         ├─ Expansion mode → REMOVE or CONVERT TO FLOOR
│ │         └─ Context-dependent → DOCUMENT EXCEPTIONS
│ └─ NO → Not Type 3, check Type 4/5                 │
└─────────────────────────────────────────────────────┘

┌─ Type 4 (Ambient) ─────────────────────────────────┐
│ Is this cognitive overload from VOLUME?            │
│ ├─ YES → Does builder have fluency?                │
│ │         ├─ Fluency exists → MANAGED (Level 2)   │
│ │         └─ No fluency → TIER PRESENTATION (improve to Level 3)
│ └─ NO → Check Type 5                               │
└─────────────────────────────────────────────────────┘

┌─ Type 5 (Interaction) ─────────────────────────────┐
│ Do constraints CONFLICT, MULTIPLY, or SHIFT meaning?│
│ ├─ Type 5A (conflict) → REMOVE one constraint      │
│ ├─ Type 5B (multiply) → SIMPLIFY or ADD DECISION TREE
│ └─ Type 5C (meaning-shift) → REMOVE METRIC or REFRAME
└─────────────────────────────────────────────────────┘
```

---

## METACOGNITIVE POSTSCRIPT

**What I constructed:**
- A 5-type taxonomy (4 original + 1 discovered)
- A 7-level spectrum (critically enabling → critically limiting)
- 6 concrete modification recommendations
- A decision tree for evaluating constraints
- 12 project-specific examples (4 good + 4 bad per type where applicable)

**What I did NOT discover:**
I did not "find the truth about rigidity." I CONSTRUCTED a framework that makes rigidity ACTIONABLE. This framework is:
- **Useful:** Provides decision criteria
- **Evidence-based:** Draws on project history
- **Incomplete:** Untested for collection-level monotony, 100+ mechanism catalog, novice builders

**What would invalidate this analysis:**
- Evidence that Type 5 (interaction) is just a subtype of Type 4 (ambient)
- Evidence that the 7-level spectrum collapses to binary in practice
- Evidence that structural convergence DOESN'T lead to monotony even at 75 pages with 5 metaphors
- Evidence that Type 1 (vocabulary) remains enabling even at 100+ mechanisms

**Where I speculated:**
- "At 100+ mechanisms, vocabulary might become limiting" (untested)
- "At >30% metaphor overlap, monotony emerges" (no data)
- "Tiered presentation would improve novice experience" (not A/B tested)
- "Error recovery protocol would fix Type 2 gap" (not validated)

**Final Note:**
This analysis is a TOOL, not TRUTH. Use it as a lens to evaluate KortAI constraints. When the lens fails (produces contradictions, doesn't predict behavior), UPDATE the lens — don't force reality to fit the model.

---

---

## SUPPLEMENTARY ANALYSIS: TYPE 5 INTERACTION RISK ASSESSMENT FOR PROPOSED MODIFICATIONS

**Date:** 2026-02-15
**Context:** Following discovery of Type 5 (Interaction Rigidity), assessing whether proposed skill modifications create new Type 5 risks

---

### Assessment 1: M19/R7 (Combination Anti-Gravity) Interactions with Existing R1-R6

**M19/R7 Proposal (from 04-tier-architecture.md):**
"Combination Diversity Mandate — when deploying 8+ mechanisms, sample from at least 4 of 5 mechanism categories. If 3+ from one category, justify OR rebalance."

**Existing Anti-Gravity Rules:**
- R1: Phase-gated library access
- R2: Mechanism/metaphor separation
- R3: Anti-prescription framing
- R5: Sequential phase rules
- R6: Divergence mandate

---

#### Interaction 1A: R7 + R6 (Combination Diversity + Divergence Mandate)

**Type 5 Classification:** Type 5B (multiplicative overhead)
- R6 requires 5-dimension divergence table
- R7 requires category distribution table
- Combined: 2 tables, 10+ verification points

**Severity:** MODERATE — both can be satisfied but cognitive load doubles

**Mitigation:** Merge into single Phase 3.5 gate with combined verification table

---

#### Interaction 1B: R7 + R1 (Combination Diversity + Phase-Gated Access) — CRITICAL

**Type 5 Classification:** Type 5A (contradictory)
- R7 REQUIRES category-based mechanism selection
- Mechanism catalog does NOT PROVIDE category labels
- **Gap:** Builder cannot comply with R7 without information that doesn't exist

**Severity:** HIGH (blocks compliance)

**Mitigation:** Add Section 2.5 to mechanism-catalog.md categorizing all 18 mechanisms by the 5 categories:
- Category A: Spatial Layout (#5, #6, #15)
- Category B: Hierarchy Encoding (#1, #4, #11)
- Category C: Component Patterns (#2, #9, #10, #17)
- Category D: Depth/Emphasis (#3, #7, #16)
- Category E: Structure/Navigation (#8, #12, #13, #14, #18)

**CRITICAL:** This must be added BEFORE R7 can be enforced.

---

#### Interaction 1C: R7 + R3 (Combination Diversity + Anti-Prescription Framing)

**Type 5 Classification:** Type 5C (meaning-shift)
- R3 positions case studies as inspiration (derivation mode)
- R7 provides explicit criteria (compliance mode)
- Combined: Case studies shift from "how to think" to "what to avoid"

**Severity:** MODERATE

**Mitigation:** Reframe R7 as JUSTIFICATION requirement (not prohibition):
"Deploying 3+ mechanisms from ONE category is acceptable if your metaphor justifies it. Document why or rebalance."

---

### Assessment 2: Proposed Skill Modifications (Combination Effects)

**The 4 Modifications:**
1. Per-category mechanism minimum (replace "2-4")
2. Fractal gate with tier calibration
3. Container width 940-960px (non-negotiable)
4. Phase 3.5 strengthening

---

#### Interaction 2A: Mod 1 + Mod 2 (Per-Category + Fractal Gate)

**Type 5 Classification:** SYNERGISTIC (not a conflict)
- Per-category minimum requires breadth (5 categories)
- Fractal gate requires depth (4 scales)
- **Natural alignment:** Fractal compliance at 4 scales naturally produces category breadth

**Severity:** NONE (beneficial interaction)

**Recommendation:** ADOPT BOTH

---

#### Interaction 2B: Mod 1 + Mod 4 (Per-Category + Phase 3.5 Strengthening) — CRITICAL

**Type 5 Classification:** Type 5A (contradictory)
- Mod 4 checks category diversity at Phase 3.5
- Mechanisms aren't selected until Phase 4
- **Temporal contradiction:** Can't check what doesn't exist yet

**Severity:** HIGH (logically impossible)

**Resolution:** SPLIT the gate:
```
Phase 3.5: Metaphor Lock + Divergence Check
- Lock metaphor
- Check divergence (5 dimensions)
- Fractal planning (identify 4 scales, no CSS yet)

Phase 4.5: Mechanism Selection Gate (NEW)
- Deploy mechanisms (1+ per category)
- Verify category diversity (4+ categories)
- Complete fractal CSS implementation
```

**CRITICAL:** The "strengthened Phase 3.5" is actually TWO gates.

---

#### Interaction 2C: Mod 2 + Mod 3 (Fractal Gate + Container Width)

**Type 5 Classification:** Type 5A (contradictory - minor)
- Fractal could express through width compression (960px → 720px → 480px)
- Container width rule prohibits width < 940px

**Severity:** LOW (workaround exists)
- Fractal can be achieved through spacing/padding compression instead of width

**Mitigation:** Clarify in Mod 3:
"Express narrowing through INTERNAL spacing compression, NOT container width reduction."

---

#### Interaction 2D: Mod 1 + Mod 2 + Mod 3 Combined

**Type 5 Classification:** Type 5B (multiplicative overhead)

**Cognitive Load Assessment:**
- Mod 1: 5 mechanism categories
- Mod 2: 4-scale fractal coverage table (12 cells)
- Mod 3: 940px minimum
- **Total:** 25-30 verification points (vs current 5-8)
- **Increase:** 4-5x cognitive load

**Severity:** MODERATE (approaching ambient rigidity threshold)

**Mitigation:** Create merged verification table:

| Scale | Fractal CSS | Mechanism | Category | Width |
|-------|------------|-----------|---------|-------|
| Navigation | [CSS] | #8 Scroll Witness | E | 940px ✓ |
| Page | [CSS] | #5 Dense/Sparse | A | 940px ✓ |
| Section | [CSS] | #1 Border-Weight | B | 940px ✓ |
| Component | [CSS] | #2 2-Zone DNA | C | 940px ✓ |

Reduces 25 points to ONE TABLE (20 cells, visual pattern checking).

---

### Assessment 3: Type 5 Risk Summary

| Interaction | Type 5 Subtype | Severity | Mitigation | Status |
|-------------|---------------|----------|------------|--------|
| R7 + R6 | 5B (multiplicative) | MODERATE | Merge tables | ✓ |
| R7 + R1 | 5A (contradictory) | **HIGH** | Add category labels | ✓✓ CRITICAL |
| R7 + R3 | 5C (meaning-shift) | MODERATE | Reframe | ✓ |
| Mod 1+2 | SYNERGISTIC | NONE | None needed | — |
| Mod 1+4 | 5A (contradictory) | **HIGH** | Split Phase 3.5 | ✓✓ CRITICAL |
| Mod 2+3 | 5A (contradictory) | LOW | Clarify guidance | ✓ |
| Mod 1+2+3 | 5B (multiplicative) | MODERATE | Merge table | ✓ |

**Critical Actions Required:**
1. **Add mechanism category labels to catalog** (blocks R7 compliance otherwise)
2. **Split Phase 3.5 into Phase 3.5 + Phase 4.5** (temporal contradiction otherwise)
3. **Create merged verification table template** (reduces cognitive load)

---

### Final Recommendation: ADOPT WITH 3 CRITICAL CHANGES

**Adopt all modifications ONLY IF:**

1. **Add Section 2.5 to mechanism-catalog.md** categorizing all 18 mechanisms
2. **Split Phase 3.5 gate** into metaphor gate (3.5) + mechanism gate (4.5)
3. **Create merged verification table** reducing 25 decision points to single visual check

**Without these fixes:** Type 5A contradictions BLOCK implementation (requirements are logically impossible to satisfy)

**With these fixes:** Type 5B multiplicative overhead is MANAGEABLE for Ceiling tier (cognitive load acceptable)

---

**Trade-Off Summary:**

| Dimension | Current | Proposed (Fixed) | Change |
|-----------|---------|------------------|--------|
| Type 5 risks | 2 minor | 5 moderate | +150% |
| Richness potential | 11% techniques | 80% techniques | +700% |
| Convergence protection | Metaphor only | + Combination + Category | +200% |
| Cognitive load | 5-8 points | 20 points (merged) | +150% |

**Verdict:** Trade-off is FAVORABLE. Richness gain (+700%) outweighs cognitive load increase (+150%), IF the 2 critical contradictions are resolved.

---

**END SUPPLEMENTARY ANALYSIS**

---

**END RIGIDITY DEEP-DIVE ANALYSIS**

# Adversarial Prompt Review: FINAL-ENRICHED-MASTER-EXECUTION-PROMPT (v3)

**Reviewer:** adversarial-prompt (RED TEAM)
**Date:** 2026-02-17
**Prompt reviewed:** 963 lines, 97 rule IDs, 4-section ABCD sandwich
**HTML output reviewed:** 07-intentionality.html (2,034 lines)
**Audit data reviewed:** 00-AUDIT-DATA.md

---

## PART 1: THE STEELMAN

Before attacking, I must make the strongest possible case for why this 963-line prompt SHOULD have produced a crown-jewel page.

**The prompt is technically excellent.** It represents perhaps the most rigorous design-execution specification ever written for an LLM agent team:

1. **97 binary rules with zero judgment language.** Every rule has a verifiable condition. This addresses the project's #1 architectural principle ("binary rules achieve 100% agent compliance; judgment rules achieve ~0%").

2. **Anti-void protections at every layer.** S-09 (96px max gap), S-10 (no void > 2160px), S-11 (no CSS value > 96px), S-12 (30% viewport coverage), S-14 (graduated content-to-void), S-15 (zone count by word count), S-17 (first 1.5 viewport textures), and the entire PA-50 through PA-53 void pipeline. Seven separate void-prevention mechanisms.

3. **Gate sequence with kill criteria.** Five gates, each with specific pass/fail conditions, maximum fix cycles, and abort triggers. This is exactly the "only GATES prevent spatial failure" lesson from the Experiential Laws.

4. **Communication protocol enforcement.** CP-A through CP-F with minimum 8 substantive messages. Directly addresses the "zero SendMessage = quality cost" finding.

5. **Two-instance pattern.** Separate agents per pass to prevent continuation bias.

6. **Anti-skimming formatting.** 10/10 techniques deployed -- numbered rules, FAIL IF prefixes, code blocks, checkboxes, separators, per-agent routing, conviction sandwich, recency position, rule cap per section, one rule per line.

7. **Enrichment traceability.** All 11 enrichments traced to source, with gate checks.

8. **Recovery protocols.** RP-01 through RP-04 for metaphor failure, consecutive gate failure, measurement disagreement, and HTML corruption.

**The steelman conclusion:** This prompt has addressed every known failure mode from every prior experiment. It contains specific countermeasures for the ceiling experiment's whitespace catastrophe, the middle experiment's missing footer, the Phase D container width violations, and the CD-006 communication lessons. If any prompt could produce a crown jewel, this one should.

---

## PART 2: DESTROYING THE STEELMAN

The steelman is wrong. The prompt produced uniform sections, zero borders, zero dividers, massive whitespace gaps, and a page where "every section looks nearly identical except for subtle background tint changes" (audit data). Here is exactly HOW and WHY the prompt enabled this failure, organized by attack vector.

---

### ATTACK 1: AMBIGUITY -- Where builders can misinterpret and still technically comply

**A1.1: "5 of 7 channels actively used" (SC-02) -- what counts as "active"?**

The rule says ">= 5 of 7 channels actively used" but does not define a minimum threshold for "active." The HTML output uses:

- Ch1 Chromatic: background color differences of 1-8 RGB points between sections. Technically "used." Perceptually invisible.
- Ch2 Typographic: letter-spacing variations of 0.004-0.01em. Technically "used." Perceptually invisible.
- Ch3 Spatial: section padding varies 32-80px. Technically "used." But p_marginBottom is 16px EVERYWHERE.
- Ch6 Rhythmic: CSS comments describe "PULSE -> CRESCENDO -> BOOKEND." Technically annotated. Perceptually absent.

The builder deployed chromatic, typographic, spatial, density, rhythmic, and intentional channels -- 6 of 7. PASS. Yet Ch4 Structural has ZERO borders, ZERO dividers, ZERO containment elements anywhere in the body content. The audit confirms: "Ch4 Structural (Borders/Dividers/Containment) -- COMPLETELY ABSENT."

**The prompt's ambiguity:** "actively used" has no minimum perceptual threshold. A builder who sets letter-spacing to 0.004em has "used" the typographic channel. The rule is technically satisfied by sub-perceptual variation.

**Concrete HTML evidence:** Lines 738-834 define zone-specific letter-spacing and line-height values. S1 gets `letter-spacing: 0.006em` while S5 gets `letter-spacing: -0.003em`. The total difference is 0.009em -- roughly 0.14px at 16px font size. The channel is "active" but contributes zero perceptual richness.

**A1.2: ">= 3 transition types used" (C-05) -- satisfied by CSS classes, not perception**

The HTML has `.divider-smooth`, `.divider-bridge`, `.divider-breathing` classes (lines 590-610). Three types. PASS. But all three are just horizontal lines at different heights (1px or 3px) with slightly different margins (48px, 64px, 80px). To a reader scrolling, they look identical -- thin gray lines between sections. The "BRIDGE" transitions (which "MUST contain cognitive-reframe prose" per C-07) do include bridge prose, but the visual distinction between a SMOOTH (48px + 1px) and a BRIDGE (64px + 1px + prose below) is negligible.

**The prompt's ambiguity:** C-05 defines the three types by their CSS properties (48px+1px / 64px+bg+prose / 80px+3px). It never says the types must be VISUALLY DISTINGUISHABLE by a reader. A builder can satisfy the rule with three nearly-identical horizontal lines.

**A1.3: "Mechanisms deployed" vs. "mechanisms operating" (C-03)**

C-03 says "<= 4 OPERATING (visible) per viewport. Deployed != Operating." This distinction should PREVENT over-counting. But the prompt never defines what makes a mechanism "operating" vs. merely "deployed." The HTML claims 14 mechanisms in its header comment (line 14), but the audit shows most are sub-perceptual CSS variations. The mechanism DEPLOYMENT is documented in CSS comments. The mechanism OPERATION is absent from the rendered page.

---

### ATTACK 2: ESCAPE HATCHES -- Rules satisfiable with minimal effort

**A2.1: Compositional Coupling Score (CCS >= 0.30) -- unfalsifiable by builder**

MC-01 defines CCS as: "(mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1)." The builder self-assesses this. There is no external verification. The builder's CSS comments claim mechanisms are coupled (e.g., line 231: "Cluster A state: WARM, GENEROUS, LIGHT borders"), but if you removed any individual zone background token, nothing else would change -- because the borders don't exist, the spacing is uniform, and the typographic variations are sub-perceptual.

**The escape hatch:** CCS is a THOUGHT EXPERIMENT ("mentally remove each, check if others' meaning shifts"). The builder can claim any CCS score and nobody can falsify it from the CSS alone. The prompt says "Verification: pick 3+ mechanisms, mentally remove each, check if others' meaning shifts" -- but this is a self-assessment with no external check until Gate 5 (PA audit), by which point the page is already built.

**A2.2: ">= 2 designed silence zones (200px+ height)" (C-13)**

The HTML has 6 gaps exceeding 200px (audit data shows gaps of 210-276px between sections). These gaps technically satisfy C-13's "200px+ height, base typography only, NO mechanism CSS" criterion -- they are indeed base-typography-only zones with no mechanism CSS. But they are ACCIDENTAL voids, not DESIGNED silences. The prompt provides no way to distinguish intentional silence from neglect.

**The escape hatch:** Any whitespace gap automatically counts as a "silence zone." The builder doesn't need to design silence -- the absence of content IS the silence zone by default.

**A2.3: ">= 3 of 6 intentionality dimensions present" (C-15)**

The HTML header comment (lines 24-29) claims all 6 dimensions:
- D1 SELF-REFERENCE: "3 organic callouts where content describes its own form"
- D2 PEDAGOGICAL SEQUENCING: "Orient -> Deepen -> Synthesize"
- D3 COGNITIVE MODE TRANSITIONS: "3 bridge transitions"
- D4 STRUCTURAL BOOKENDING: "S1/S12 echo"
- D5 META-ANNOTATION: "12 section-meta labels"
- D6 PROVENANCE THREADING: "This header + 12 section boundary comments"

But D5 (meta-annotation) is satisfied by adding `<div class="section-meta">Section 01 * F-Pattern * Sparse Density</div>` to each section (line 1069). These are invisible to the reader's experience -- they're tiny gray labels. And D6 (provenance threading) is satisfied entirely by HTML COMMENTS that no reader will ever see.

**The escape hatch:** Intentionality dimensions can be satisfied in source code (comments, meta-labels) without any perceptual impact on the rendered page.

---

### ATTACK 3: MISSING ENFORCEMENT -- Rules with no verification mechanism

**A3.1: The 75-line builder visibility cap is the CRITICAL gap**

C1 says: "BUILDER VISIBILITY CAP: Builders receive <= 75 lines of rules (B1+B2+conviction opener+closer). They do NOT see B3-B12, C1-C6, or Section E assignments outside their scope."

This means the SKELETON BUILDER -- who writes the foundational HTML structure -- only sees:
- B1 (Spatial: 17 rules about dimensions and spacing)
- B2 (Soul: 10 rules about prohibited CSS)
- A conviction opener and closer

The builder does NOT see:
- B3 (Compositional: 21 rules about mechanisms, transitions, quality)
- B4 (Multi-Coherence: 8 rules about coupling, reinforcing, contrasting)
- B5 (Scale-Channel: 10 rules about channel coverage, diversity)
- B6 (Metaphor Gates: 5 rules)
- B11 (Content Transformation: 8 rules)

**The enforcement gap:** The skeleton builder creates the foundational structure without any awareness of compositional, multi-coherence, or scale-channel requirements. The MECHANISM BUILDER in Pass 2 is supposed to add these, but the mechanism builder inherits an already-committed HTML structure. Adding borders, dividers, containment elements, and structural variation to a pre-built skeleton is fundamentally harder than building them in from the start.

**Concrete HTML evidence:** The skeleton (Pass 1) established 12 sections with uniform padding, uniform paragraph styling, and uniform section structure. Pass 2 (Mechanism Builder) then attempted to add compositional richness through CSS-only modifications -- zone-specific letter-spacing, background tints, margin adjustments. But the HTML STRUCTURE lacked the elements needed for Ch4 Structural (borders, dividers, containment). You cannot add a `border-left: 4px solid` to a section that has no nested element to border. The mechanism builder would have needed to modify the HTML, not just the CSS.

**A3.2: SC-09 ("3 channels shift at every section transition") -- verified WHERE?**

SC-09 is checked at Gate 1 and Gate 3. But the check is: "Count channels that change at each section boundary. Count >= 3 = PASS." Who counts? The embedded auditor? The builder? The team lead? The rule is assigned to gates but has no assigned AGENT for the counting.

The HTML includes SC-09 annotations in its transition comments (e.g., line 1111: "Channels shifting: Chromatic, Spatial, Density, Typographic (4 channels -- SC-09 PASS)"). The builder SELF-CERTIFIED compliance in comments. But the audit data shows that the actual channel shifts are sub-perceptual. What "shifted" at S2->S3? The background went from rgb(250,245,237) to rgb(253,248,242) -- a 3-7 point RGB difference.

**A3.3: "Minimum 8 substantive messages" (C2) -- no content standard**

The prompt requires ">= 8 substantive messages across full experiment" and "Messages MUST contain specific NUMBERS, not subjective judgment." But there is no verification that messages were READ or ACTED UPON. An agent can send "Container: 960px. Height: 15000px. Content-to-void: 83:17." as a message, satisfying the requirement, while the receiving agent ignores it completely.

---

### ATTACK 4: CONTRADICTIONS -- Rules that work AGAINST richness

**A4.1: "Restraint" language actively SUPPRESSES builder creativity**

The prompt contains a powerful restraint sub-system:
- C-12: ">= 21 considered-and-rejected mechanism placements (>= 1.5:1 ratio vs deployed)"
- C-13: ">= 2 designed silence zones"
- C-14: "Signal-to-silence ratio: 0.6-0.8:1"
- SC-06: "Restraint Ratio per channel: reject-to-deploy >= 1.5:1"
- A2: "Restraint | Austere | not Cold"
- D (closing): "ABSENCE COHERENCE: If you omit a higher-order element...omit ALL elements at that tier"

This restraint language DIRECTLY caused the Ch4 absence. The ABSENCE COHERENCE rule says: "If you omit a higher-order element (metaphor vocabulary, zone labels, cognitive transitions), omit ALL elements at that tier." A builder who struggles with structural elements (borders, dividers) doesn't just fail silently -- the prompt tells them that CONSISTENT ABSENCE is better than INCONSISTENT PRESENCE. A builder who cannot figure out how to add borders to every section will REMOVE the borders they did add, because "Inconsistent absence reads as failure."

**Concrete HTML evidence:** The HTML has ZERO borders, ZERO dividers, ZERO containment in the body content (only the header and footer have borders). The builder appears to have decided that consistent absence across all 12 sections was preferable to inconsistent border application. The prompt's own ABSENCE COHERENCE rule validated this decision.

**A4.2: "Maximum spacing: 96px per-property" (S-09, S-11) CONTRADICTS the 80px BREATHING transition**

S-09 says "Max spacing between any two content elements: 96px per-property. Total visual gap (margin-bottom + padding-top adjacent): <= 96px."

But C-05 defines BREATHING transitions as "80px + 3px border." The BREATHING divider has `margin: var(--space-20) 0` = 80px margin-top + 80px margin-bottom = 160px total gap (plus the 3px element height). Combined with section padding-bottom and padding-top, the total visual gap between sections with BREATHING transitions reaches 240-276px (confirmed by audit data: S8->S9 gap = 276px).

The builder followed both rules: used 80px margins (under 96px per-property), but the accumulated gap between section-bottom-padding + divider-margin-top + divider + divider-margin-bottom + section-top-padding exceeds 200px. S-09 says "Total visual gap <= 96px" but this is IMPOSSIBLE when sections have 32-64px padding AND dividers have 48-80px margins.

**This is not builder error. This is a prompt contradiction.** S-09 constrains total visual gap to 96px while C-05 defines transition types that require 160px+ of vertical space.

**A4.3: "Peak density section MUST NOT be first" (C-18) encourages front-loading whitespace**

C-18 says density must vary, with peak density not in the first section. Combined with the pedagogical sequencing (Orient -> Deepen -> Synthesize) and the density arc (sparse -> dense -> release), this creates 4 sparse sections (S1-S4) before any dense content appears. The reader scrolls through 4,490px of relatively sparse content before reaching the first dense section (S5).

The prompt's reader journey (A8) defines Act 1 (0-15%) as "Confidence + Orientation" and Act 2 (15-35%) as "Exploration." But 15% of a 15,711px page is 2,357px -- roughly S1 + S2. The "exploration" phase (15-35%) falls on S3-S4, which are still Orient sections with medium density. The first DESIGNED MOMENT with real visual weight doesn't arrive until S5 (the featured table with 4px red border-left), at approximately 30% scroll depth.

---

### ATTACK 5: ORDERING FAILURES -- Instructions in wrong sequence for builder cognition

**A5.1: Builder self-check is at the END of Section B -- after 384 lines of rules**

B10 (Builder Self-Check, 22 items) appears at line 347 -- after B1 through B9. The prompt claims "Recency position: Self-check is the last thing the builder reads before writing." But the builder ALSO reads the conviction closer (Section D) and reference library (Section E) after B10. And the builder is capped at 75 lines of rules anyway (the visibility cap from C1), so B10 may not even be in the builder's view.

**The ordering failure:** The self-check references rules from B3 (C-05, C-06, C-09, C-18, C-20), B4 (MC-01, MC-02, MC-06), and B5 (SC-08, SC-09, SC-10) -- but the builder is not supposed to see B3-B5. The self-check asks builders to verify rules they were never shown.

**A5.2: Content Transformation rules (B11) appear AFTER the builder self-check**

B11 (CT-01 through CT-08) defines how to transform research prose into showcase prose. These rules are essential for the Content Architect in Pass 0. But B11 appears at line 385, deep in Section B, after the builder self-check. The Content Architect might not encounter these rules if they're reading sequentially and stop at B10.

---

### ATTACK 6: ABSTRACTION LEVEL -- Rules too abstract to act on

**A6.1: "Fractal coherence: the same compositional direction must be observable at ALL active scales" (C-20)**

This rule asks: "Verify: describe the compositional direction at each scale. If any scale contradicts the others, the page lacks fractal coherence."

But HOW does a builder verify this? The rule requires the builder to:
1. Identify all active scales (from SC-01's named scale definitions)
2. Describe the "compositional direction" at each scale
3. Check for contradictions between scales

"Compositional direction" is not defined anywhere in the prompt. Is it the density arc? The metaphor trajectory? The color progression? The spacing compression? A builder can claim "crescendo" at all scales and pass the check with zero verification.

**Concrete HTML evidence:** The CSS comments claim crescendo direction, but the audit data shows uniform p_marginBottom (16px), uniform p_fontSize (16px), uniform p_fontWeight (400), and uniform p_color across ALL sections. The "crescendo" exists only in the comments.

**A6.2: "Content-form alignment" -- referenced but never operationalized**

The prompt references "content-form alignment" in multiple places (A5: "Requires Opus-level agents for metaphor + intentionality passes," E: intentionality builder reads "05-content-first-methodology.md") but never defines what content-form alignment LOOKS LIKE in CSS. The intentionality builder is told to read a methodology document, but the prompt gives no binary rules for what content-form alignment produces in the output.

---

### ATTACK 7: COGNITIVE OVERLOAD -- The 963-line prompt itself as a failure cause

**A7.1: The prompt is 4x its own recommended length**

The authoritative parameter table (line 801) says: "Master prompt length | <= 250 lines (target 248) | Soft cap." The actual prompt is 963 lines -- nearly 4x the soft cap. The prompt VIOLATES ITS OWN RULE about prompt length.

The prompt's own A6 Experiential Law says: "Every rule in this prompt has an attention cost. Binary rules are cheap (~1 unit). This prompt is short because LENGTH IS THE ENEMY OF QUALITY." But the prompt is NOT short. It is 963 lines.

**The cognitive overload hypothesis:** A builder receiving 75 lines (the visibility cap) is fine. But the TEAM LEAD reads all 963 lines. The team lead is responsible for gate verification, communication routing, agent spawning, and quality assurance. The team lead must hold 97 rules in working memory while managing 5+ concurrent agents. This is a cognitive overload scenario where the team lead CANNOT effectively verify all rules, leading to gate checks that are cursory rather than thorough.

**A7.2: Rule density creates a compliance-first, creativity-last mindset**

The prompt has 17 spatial rules, 10 soul rules, 21 compositional rules, 8 multi-coherence rules, 10 scale-channel rules, 5 metaphor gates, 8 process rules, 8 content transformation rules, 4 recovery protocols, and 6 communication checkpoints. That's 97 binary gates.

A builder reading this prompt will adopt a COMPLIANCE MINDSET -- checking boxes rather than designing. The HTML output reflects this: every section has a `section-meta` label (compliance with D5), every transition has a type annotation in comments (compliance with C-05/C-06), every zone has a background color token (compliance with Ch1). But the PAGE ITSELF has no visual richness -- because the builder spent their cognitive budget on compliance rather than design.

**Concrete HTML evidence:** The CSS comments are extraordinarily detailed. Lines 105-152 describe the zone background system with multi-line comments explaining the metaphor rationale. Lines 229-233 describe the spacing compression cluster. Lines 269-282 describe the drop cap mechanism. The ANNOTATION EFFORT exceeds the DESIGN EFFORT. The builder wrote more about what the mechanisms mean than what they look like.

---

### ATTACK 8: CONVICTION vs. EXECUTION TENSION

**A8.1: Section A creates expectations that Section B cannot fulfill**

Section A (Conviction Layer, 82 lines) is inspirational:
- "Beauty = confident intention at every scale of attention" (A1)
- "CD-006 WORKED EXAMPLE -- why these interactions produce 39/40" (A5)
- "The scroll is a 5-act story" (A8)
- "Designed MOMENTS are not designed COMPOSITION" (A6)

Section B (Execution Spec, 107 lines) is mechanical:
- "Container width outside 940-1100px" (S-01)
- "CPL: (content-width-px) / (font-size-px) / 0.6 = [45, 80]" (S-07)
- ">= 5 content sections" (S-06)

The gap between "Beauty = confident intention at every scale" and "CPL = content-width / font-size / 0.6" is enormous. Section A tells the builder to create art. Section B tells the builder to check boxes. The builder resolves this tension by defaulting to the easier task: checking boxes.

**A8.2: The closing conviction (Section D) ACTIVELY ENCOURAGES under-building**

Section D says: "ABSENCE COHERENCE: If you omit a higher-order element...omit ALL elements at that tier. Consistent absence reads as restraint. Inconsistent absence reads as failure."

Followed by: "STOP ANALYZING. START BUILDING."

This creates a perverse incentive: a builder who is uncertain about their compositional quality (as they should be at 75-line visibility) will choose CONSISTENT OMISSION over RISKY INCLUSION. The prompt explicitly validates this choice. "The worst outcome is ambitious in some dimensions and catastrophically deficient in others" -- so the builder aims for the MIDDLE: uniformly adequate in all dimensions, ambitious in none.

---

## PART 3: THE FIVE ROOT CAUSES (ranked by severity)

### ROOT CAUSE 1 (FATAL): The prompt is a guardrail specification, not a playbook

The prompt has 97 rules about what NOT to do (or minimum thresholds). It has approximately ZERO rules about what TO DO. The rules tell builders:
- Container must be 940-1100px (but not what to put IN the container)
- No void > 2160px (but not how to CREATE density)
- 3 transition types (but not how to make them VISUALLY DISTINCT)
- 5 channels active (but not how to make them PERCEPTUALLY MEANINGFUL)

The CD-006 worked example in A5 shows what good looks like. But it's a CSS snippet -- 7 lines. The entire playbook for "how to make a page look rich" is 7 lines of sample CSS buried in an 82-line conviction section.

### ROOT CAUSE 2 (CRITICAL): The builder visibility cap creates a structural ignorance gap

The skeleton builder sees B1+B2 (spatial + soul). The mechanism builder sees the build plan + tokens + prohibitions. Neither builder sees the FULL compositional requirements. The prompt ASSUMES that the Planner (who sees everything) will translate compositional requirements into a build plan detailed enough for the mechanism builder to execute. But there is no rule specifying the GRANULARITY of the build plan. The Planner could write "deploy 14 mechanisms across 6 channels" and technically satisfy the prompt's requirements, while giving the mechanism builder zero actionable guidance.

### ROOT CAUSE 3 (CRITICAL): Sub-perceptual variation satisfies binary rules

The prompt's binary rules check for PRESENCE, not MAGNITUDE. "Channel actively used" is binary. "Transition type used" is binary. "Mechanism deployed" is binary. A builder who adds 0.004em letter-spacing difference has "used" the typographic channel. A builder who adds a 1px divider with 48px margin has "used" a SMOOTH transition. Binary rules cannot capture DEGREE OF EFFECTIVENESS.

### ROOT CAUSE 4 (HIGH): The restraint language actively suppresses structural elements

C-12 (rejection log >= 21), C-13 (silence zones), C-14 (signal-to-silence ratio 0.6-0.8:1), SC-06 (reject-to-deploy >= 1.5:1), and the ABSENCE COHERENCE closing all push builders toward LESS rather than MORE. Combined with the soul prohibitions (no border-radius, no shadows, no gradients, no transparency), the builder's perceived toolkit is extremely narrow. The prompt tells them what they CAN'T use (gradients, shadows, radius) and then tells them to REJECT 1.5x as many of the remaining tools as they deploy. The natural result is minimalism -- and not the intentional, CD-006-style minimalism, but the default, empty minimalism of a builder who doesn't know what's safe to add.

### ROOT CAUSE 5 (HIGH): The S-09/C-05 contradiction makes gaps inevitable

S-09 says total visual gap <= 96px. C-05 defines BREATHING transitions at 80px + 80px margins = 160px minimum. Section padding adds 32-64px on each side. The MINIMUM gap at a BREATHING transition is ~195px. The prompt's own transition grammar guarantees S-09 violations at every BREATHING transition. A builder who follows C-05 will violate S-09. A builder who follows S-09 cannot implement BREATHING transitions.

---

## PART 4: SPECIFIC PROMPT-TO-FAILURE MAPPINGS

| Prompt Rule | What It Intended | How It Was Exploited/Misapplied | HTML Evidence |
|-------------|-----------------|-------------------------------|---------------|
| SC-02 "5/7 channels active" | Rich multi-channel expression | Sub-perceptual variation in 4 of 5 channels | 0.004em letter-spacing = "typographic channel" |
| C-05 "3 transition types" | Visual variety in section breaks | 3 near-identical thin lines | .divider-smooth/bridge/breathing all look same |
| MC-01 "CCS >= 0.30" | Mechanisms depend on each other | Self-assessed with no external check | Zero coupled mechanisms visible |
| C-13 "2 silence zones" | Intentional breathing room | Accidental whitespace voids counted | 6 gaps > 200px, all accidental |
| C-15 "3/6 intentionality dims" | Design intelligence visible | Dimensions satisfied in HTML comments | D5 = tiny gray labels, D6 = comments |
| D closing "ABSENCE COHERENCE" | Consistent design quality | All Ch4 elements omitted as "restraint" | Zero borders/dividers/containment |
| S-09 "gap <= 96px" | Prevent whitespace voids | Contradicted by C-05 transition types | 6 gaps > 200px between sections |
| B10 self-check (22 items) | Builder verification | References rules builder can't see | MC-01, SC-08, SC-09 outside 75-line cap |
| Appendix "prompt <= 250 lines" | Prevent cognitive overload | Prompt is 963 lines (4x cap) | Team lead overloaded |
| C-14 "signal-to-silence 0.6-0.8" | Measured restraint | Signal is sub-perceptual, silence is abundant | Most "signals" are CSS comment annotations |

---

## PART 5: RECOMMENDED PROMPT CHANGES

1. **Replace PRESENCE rules with MAGNITUDE rules.** "Channel actively used" becomes "Channel creates >= 10px visual difference or >= 5% color difference from adjacent element." Binary presence is necessary but insufficient.

2. **Add POSITIVE playbook rules.** For every rule that says "FAIL IF X," add a companion rule that says "REQUIRE Y." Example: "REQUIRE: every section boundary has >= 1 visual element (border, divider, background shift > 20 RGB points, or typographic change > 4px)."

3. **Resolve the S-09/C-05 contradiction.** Either raise S-09's total gap limit to 200px (acknowledging transition grammar) or redefine transitions to fit within 96px total.

4. **Make the builder self-check match the builder's visibility.** B10 should only reference rules from B1+B2. Compositional checks should be performed by a SEPARATE agent who HAS visibility into B3-B5.

5. **Add minimum perceptual thresholds to channel definitions.** SC-02's channel definitions should include: "ACTIVE means the channel produces a visual difference that a screenshot comparison at 100% zoom can detect. Sub-pixel or < 5 RGB point differences do not count."

6. **Remove or revise ABSENCE COHERENCE.** The current formulation creates a perverse incentive to omit all structural elements rather than implement them inconsistently. Replace with: "If a structural element appears in any section, it MUST appear in all sections of that zone. But at least ONE structural element type (borders, dividers, or containment) MUST be present."

7. **Add Ch4 as a MANDATORY channel.** SC-02 currently requires 5 of 7 channels. Ch4 Structural should be one of the mandatory 5, because borders/dividers/containment are the primary drivers of visual variety in a soul-constrained system.

8. **Reduce prompt to <= 300 lines.** The prompt violates its own length cap. Compress Section E (reference library) into per-agent delivery. Move the appendix (parameter table, enrichment traceability, anti-skimming compliance, integration log) into a separate document. The EXECUTION prompt seen by the team lead should be <= 300 lines.

---

## PART 6: THE META-FINDING

**The prompt optimized for the wrong metric.** It was designed to prevent KNOWN FAILURE MODES (whitespace voids, container width violations, missing footers, soul violations). It succeeded at this: the flagship has no soul violations, correct container width, a present footer, and no catastrophic void (content-to-void is 83:17 -- excellent).

But preventing failure is not the same as producing success. The prompt has 7 anti-void mechanisms, 10 soul rules, and 0 pro-richness rules. It is a DEFENSE specification that contains no OFFENSE. The CD-006 crown jewel (39/40) was not built by following rules about what NOT to do -- it was built by an agent who knew what TO DO.

The fundamental architectural gap: **the prompt assumes that if all guardrails are respected, richness will emerge from the agent's native creativity.** This assumption is false. Agent creativity, when constrained by 97 binary rules, defaults to the minimal compliant solution. Richness must be SPECIFIED as explicitly as restraint is specified.

**The guardrail paradox:** More guardrails produce LESS richness, because each guardrail consumes attention budget that would otherwise go to creative decisions. The prompt's 97 rules are each individually correct. Their aggregate effect is to produce an agent that spends 100% of its cognitive budget on compliance and 0% on composition.

---

**END OF ADVERSARIAL REVIEW**

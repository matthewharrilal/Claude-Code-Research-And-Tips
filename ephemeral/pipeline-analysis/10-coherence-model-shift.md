# 10: Coherence Model and Scale-Channel Shift Analysis

**Agent:** coherence-model (Opus 4.6)
**Date:** 2026-02-18
**Sources:**
1. `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (869 lines)
2. `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,025 lines)
3. `ephemeral/remediation-audit/09-multi-coherence-design.md` (516 lines)
4. `ephemeral/remediation-audit/05-scale-channel-audit.md` (589 lines)

---

## 1. MC RULES: FROM ABSTRACT TO MEASURABLE

### What the Master Prompt Defined

The master prompt (Section B4) established 8 MC rules as binary checks:

| Rule | Master Prompt Definition | Nature |
|------|------------------------|--------|
| MC-01 | CCS >= 0.30 (removal test: does meaning change?) | Abstract-operational hybrid |
| MC-02 | >= 3 reinforcing pairs (same semantic, different CSS channels) | Countable but unverified |
| MC-03 | >= 2 modulating chains (one mechanism controls another's intensity) | Conceptual -- no measurement protocol |
| MC-04 | >= 2 responding sequences (A's output triggers B) | Conceptual -- no measurement protocol |
| MC-05 | >= 2 contrasting deployments (presence/absence meaning) | Conceptual -- no measurement protocol |
| MC-06 | >= 1 cascading chain of 3+ mechanisms | Countable, with value table |
| MC-07 | Cross-dimension coherence: >= 10/15 dimension pairs coupled | Matrix-based but abstract |
| MC-08 | Anti-metronome: >= 3 distinct padding/margin values | Directly measurable |

The master prompt also provided a CD-006 worked example in A5 showing how border-weight + zone backgrounds + spacing compression track the same CRESCENDO trajectory. This was the most concrete MC guidance in the prompt, but it was in the CONVICTION layer (Section A), not the EXECUTION layer (Section B). The gap: MC-01 through MC-07 told agents WHAT to count but not HOW to measure or WHERE to verify.

### What the Remediation Introduced

The remediation's coherence design (report 09) transformed MC rules from counting exercises into **cascade value tables** -- complete per-section CSS value inventories that make coherence MEASURABLE by inspection.

**The cascade value table pattern:**

Instead of "verify >= 3 reinforcing pairs," the remediation provides a 12-row x 10-column table showing the EXACT CSS values at every section:

```
| Section | Ch1 Background | Ch2 Font-size/weight | Ch2 Letter-spacing | Ch3 Padding | Ch3 p margin | Ch3 p max-width | Ch4 Border-left | Ch5 Component | Ch7 Text color |
```

This transforms MC verification from "did you deploy 3 reinforcing pairs?" (which agents can claim without evidence) to "here are the computed values at S1 and S5 -- do they co-vary in the same semantic direction?" The table makes LYING impossible because the values are inspectable.

### Shift Characterization

The shift is from **declarative constraint** to **operational specification**:

| Dimension | Master Prompt | Remediation |
|-----------|--------------|-------------|
| Verification method | "Pick 3+ mechanisms, mentally remove each" (MC-01) | Measure computed CSS values at each section boundary |
| Evidence format | Agent self-report | 12x10 value table with exact hex/px/em values |
| Failure detection | Agent claims compliance (unfalsifiable) | Numerical comparison reveals gaps (T7: 2 channels, FAIL) |
| Fix mechanism | "Strengthen coupling" (abstract) | "Change .zone-s8 background from #F5F5F5 to #F0F0F0" (1 CSS line) |
| Reinforcing pairs | "Same semantic, different CSS channels" (definition) | 3 named pairs with removal tests: Density, Authority, Resolution |
| Cascading chain | ">= 1 chain of 3+" (threshold) | Specific 4-mechanism chain: Background -> Spacing -> Typography -> Component Internals, with per-zone computed values |

The master prompt defined coherence as a PROPERTY to verify. The remediation defined coherence as a TABLE to fill in and compare.

### Why This Matters

The master prompt's MC rules suffered from the **binary-rules-achieve-100%-compliance** principle in reverse: MC-01 through MC-07 LOOKED binary (">= 3 reinforcing pairs") but were actually **judgment rules in disguise**. An agent could claim 3 reinforcing pairs exist by describing ANY three mechanisms as "encoding the same semantic." The remediation eliminated this escape hatch by requiring EXACT VALUES at every position, making the reinforcing/contrasting/cascading claims verifiable by numerical inspection.

---

## 2. SC RULES: FROM THEORETICAL COVERAGE TO MEASURED ACTIVATION

### What the Master Prompt Defined

The master prompt (Section B5) established 10 SC rules:

- SC-01: Maximum 5 scales, preferred 2-3. Named scale definitions (PAGE/SECTION/COMPONENT/ELEMENT/DETAIL).
- SC-02: >= 5/7 channels actively used. Channel definitions provided.
- SC-03: Richness matrix coverage >= 30/35 cells.
- SC-04: No single channel > 40% semantic load.
- SC-05: Channel Dominance Threshold: each channel at >= 2 scales.
- SC-06: Restraint ratio per channel >= 1.5:1.
- SC-07: Same design principle at >= 3 scales.
- SC-08: No scale has ALL 7 channels simultaneously.
- SC-09: Minimum 3 channels shift at every section transition.
- SC-10: Chromatic-density alignment (warm=sparse, cool=dense).

The master prompt defined the channels clearly (Ch1 Chromatic through Ch7 Intentional) and even stated "Channels are NOT mechanisms. They are AXES along which mechanisms operate." This was good conceptual framing.

### What the Remediation Discovered

The scale-channel audit (report 05) performed the measurement the master prompt specified but never executed. The findings were devastating:

**Channel activation (measured):**

| Channel | Master Prompt Assumption | Actual Measured State | Remediation Target |
|---------|------------------------|-----------------------|--------------------|
| Ch1 Typographic | "actively used" | 3/7 barely, body uniform 16px/400, letter-spacing 0.096px range (sub-perceptual) | 17px/15px variation, weight 400/600 |
| Ch2 Chromatic | "actively used" | 18 zone vars defined, only 5 perceptibly distinct, heading colors 1-12 RGB delta | >= 10 RGB zone groups |
| Ch3 Spatial | implied active | Section padding varies but paragraph margins uniform 16px everywhere | Per-zone paragraph margins 12-20px |
| Ch4 Structural | implied active | ABSENT from body entirely. Tables only. Dividers invisible (1px subtle). | 6 section borders + 3-tier divider hierarchy |
| Ch5 Temporal | listed in channels | Zero transitions, zero animations, zero scroll effects | smooth-scroll + hover transitions |
| Ch6 Behavioral | listed in channels | Zero hover/focus/selection/responsive/@media queries | ::selection, focus-visible, reduced-motion, breakpoints |
| Ch7 Intentional | "Opus agent domain" | Pullquote outline only | Solid-offset depth on featured elements |

The master prompt listed 7 channels and required >= 5/7 active (SC-02). The reality: **3/7 barely perceptible, 4/7 completely absent.** The flagship page was deploying sub-perceptual micro-modulation (0.004em letter-spacing, 2-7 RGB color deltas) that the master prompt's binary rules counted as "active" but human eyes could not perceive.

### The Activation vs. Deployment Distinction

This is the critical conceptual shift. The master prompt treated "deployment" and "activation" as synonyms. If a channel had ANY CSS values, it counted as "active." The remediation introduced **perceptual magnitude floors** -- minimum deltas below which a channel does NOT count:

| Property | Minimum Perceptible Delta | Flagship's Actual Delta | Verdict |
|----------|--------------------------|------------------------|---------|
| Background color | >= 10 RGB points | 2-6 RGB between adjacent sections | NOT ACTIVE |
| Letter-spacing | >= 0.025em | 0.013em range | NOT ACTIVE |
| Font-size | >= 2px | 0px (uniform 16px body) | NOT ACTIVE |
| Font-weight | >= 100 units | 0 (uniform 400 body) | NOT ACTIVE |
| Border weight | >= 1px difference | N/A (absent from body) | NOT ACTIVE |

The remediation's perception threshold table makes channel activation BINARY in the true sense: either the delta exceeds the floor and a human can SEE it, or it doesn't and the channel is NOT active regardless of what CSS was written.

### From 3/7 to 7/7: The Remediation's Channel Activation Plan

The enhanced remediation spec consolidated the findings into a phased channel activation:

- Phase 2: Ch1 Chromatic -- amplify zone backgrounds to 10-20 RGB deltas
- Phase 3: Ch4 Structural -- 6 section borders + 3-tier divider hierarchy (HIGHEST IMPACT)
- Phase 4: Ch2 Typographic -- 17px/15px size, 400/600 weight, perceptible letter-spacing
- Phase 5: Ch3 Spatial -- per-zone paragraph margins, section padding variation
- Phase 6: Ch5 Element-level + Ch6 Temporal -- inline code, hover, smooth-scroll
- Phase 7: Ch6 Behavioral -- ::selection, focus-visible, reduced-motion, responsive

The enhanced spec raised the channel activation score from 3/7 (barely) to a target of 7/7, with the original CSS-only remediation capping at 5/7 (Ch5, Ch6, Ch7 unaddressed).

---

## 3. THE S-09 STACKING LOOPHOLE

### Discovery

The S-09 stacking loophole is one of the most instructive findings in the entire pipeline. It demonstrates how individually compliant CSS values can compound into catastrophic failure.

**S-09 as written in the master prompt:**
```
S-09. Max spacing between any two content elements: 96px per-property.
      Total visual gap (margin-bottom + padding-top adjacent): <= 96px.
```

The rule has TWO parts: a per-property cap (96px) AND a total gap cap (96px). But at section boundaries, the actual gap calculation involves 5-6 separate CSS properties, not 2:

```
section padding-bottom    (e.g., 80px)    <= 96px  PASS
+ divider margin-top      (e.g., 64px)    <= 96px  PASS
+ divider height          (e.g., 3px)     <= 96px  PASS
+ divider margin-bottom   (e.g., 64px)    <= 96px  PASS
+ bridge-prose margin-bot (e.g., 32px)    <= 96px  PASS
+ next section padding-top(e.g., 40px)    <= 96px  PASS
= TOTAL VISUAL GAP:        283px          CATASTROPHIC
```

Every individual value passed S-09's per-property check. The total gap was 3x the intended maximum. This is the **stacking loophole**: S-09 verifies COMPONENTS but not the SUM.

### The 11-Transition Audit

Report 09 performed the measurement the master prompt should have required: computing the total visual gap at all 11 section boundaries.

**Results:**

| Transition | Total Gap (px) | S-09 Cap (96px) | Verdict |
|-----------|---------------|-----------------|---------|
| T1: S1->S2 | 241px | 96px | FAIL (2.5x) |
| T2: S2->S3 | 257px (measured 243) | 96px | FAIL (2.7x) |
| T3: S3->S4 | 193px | 96px | FAIL (2.0x) |
| T4: S4->S5 | 209px (measured 270) | 96px | FAIL (2.8x) |
| T5: S5->S6 | 169px | 96px | FAIL (1.8x) |
| T6: S6->S7 | 169px (measured 210) | 96px | FAIL (2.2x) |
| T7: S7->S8 | 193px (measured 243) | 96px | FAIL (2.5x) |
| T8: S8->S9 | 235px (measured 276) | 96px | FAIL (2.9x) |
| T9: S9->S10 | 177px | 96px | FAIL (1.8x) |
| T10: S10->S11 | 185px | 96px | FAIL (1.9x) |
| T11: S11->S12 | 241px (measured 242) | 96px | FAIL (2.5x) |

**ALL 11 transitions failed.** Every section boundary exceeded the 96px total gap target by 1.8-2.9x. The measured values (from browser DevTools) sometimes exceeded the calculated values because bridge-prose elements added additional margin-bottom (32px) that the CSS calculation missed.

### The Fix Mechanism

The fix had two components:

**A. Redefine S-09 as a TOTAL-GAP rule:**

OLD: "Maximum spacing between any two elements: 96px per-property."
NEW: "Maximum TOTAL visual gap between adjacent content elements: 120px. Total gap = sum of all intervening margins, paddings, and divider heights."

**B. Reduce divider margins dramatically:**

```css
/* Old values */
.divider-smooth   { margin: 48px 0; }   /* 96px total margin */
.divider-bridge   { margin: 64px 0; }   /* 128px total margin */
.divider-breathing { margin: 80px 0; }   /* 160px total margin */

/* New values */
.divider-smooth   { margin: 16px 0; }   /* 32px total margin */
.divider-bridge   { margin: 24px 0; }   /* 48px total margin */
.divider-breathing { margin: 24px 0; }   /* 48px total margin */
```

This achieved a 40-55% reduction in total gaps. Post-fix worst cases:
- SMOOTH transitions: ~65-97px (PASS)
- BRIDGE transitions: ~98-122px (borderline PASS)
- BREATHING transition: ~100-116px (PASS with tightened margins)

### Why This Matters for the Pipeline

The stacking loophole reveals a class of failures the master prompt's rule structure cannot prevent: **compositional property failures**, where individually compliant values compound into non-compliant outcomes. S-09 is not the only rule vulnerable to this. Any rule that caps individual values but doesn't measure their sum is susceptible:

- S-03 caps header at 20%, but header + navigation + hero could compound
- S-11 caps individual margin/padding at 96px, but adjacent elements share boundaries
- C-14 defines signal-to-silence ratio, but doesn't account for silence zones clustering

The remediation's fix -- measuring TOTAL gaps, not just individual values -- is a pattern that should be applied to all compositional rules.

---

## 4. CCS: FROM FORMULA TO MEASUREMENT

### Master Prompt Definition

MC-01 defined CCS as:

```
CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism
    is removed) / (total deployed - 1). CCS for page = average CCS across all deployed.
```

This is a thought experiment, not a measurement. "Whose perceived meaning CHANGES" is subjective. An agent could claim CCS = 0.80 by asserting that every mechanism "changes meaning" when any other is removed, or CCS = 0.05 by applying a strict standard. The master prompt provided calibration (CD-006 ~0.55, Ceiling ~0.05) but no protocol for HOW to perform the removal test.

### Remediation's Operationalization

The remediation made CCS measurable in two ways:

**A. Cascade value tables as CCS evidence:**

Instead of "mentally remove mechanism X and check if meaning changes," the cascade value table lets you perform the removal test VISUALLY:

> "Remove Zone 2 backgrounds. Do the typography and spacing changes STILL feel 'dense'? YES = reinforcing."

The value table makes the removal concrete: if you zero out the Ch1 column, do the Ch2/Ch3/Ch4 columns still encode the same semantic direction? If YES, the mechanisms are coupled (CCS is high). If NO, they are independent (CCS is low).

**B. Named reinforcing pairs with specific removal tests:**

| Pair | Semantic | Channels | Removal Test |
|------|----------|----------|-------------|
| Density | Zone 2 = dense | Ch1 (cool bg) + Ch2 (smaller font, heavier weight) + Ch3 (tighter spacing) | Remove backgrounds. Does typography + spacing still feel "dense"? |
| Authority | Zone 1 = generous/opening | Ch1 (warm bg) + Ch2 (larger font, lighter weight) + Ch3 (generous spacing) | Remove backgrounds. Does typography + spacing still feel "generous"? |
| Resolution | Zone 3 = settled/refined | Ch1 (refined warm bg) + Ch2 (standard font) + Ch3 (moderate spacing) + Ch4 (borders) | Remove borders. Does warmth + spacing still signal "conclusion"? |

This transforms CCS from a number to a TESTABLE CLAIM. Each reinforcing pair can be verified by zeroing out one channel and checking if the remaining channels preserve the semantic reading.

**C. Cascading chain with exact per-zone values:**

The 4-mechanism cascade (Background -> Spacing -> Typography -> Component Internals) is specified with EXACT values at each zone:

| Zone | Background | Section Padding | p font-size | p margin | Component padding |
|------|-----------|----------------|-------------|---------|-------------------|
| Zone 1 | Warm (#FEF5EB) | 48-64px | 17px | 20px | 12-24px (sparse) |
| Zone 2 | Cool (#FFFFFF) | 32px | 15px | 12px | 8-12px (dense) |
| Zone 3 | Refined (#FEF7F0) | 40-48px | 16px | 18px | standard |

All 4 values shift in the SAME direction at zone boundaries. This constitutes a measurable cascade: you can verify that ALL columns move from "generous" to "compressed" to "moderate" by reading the numbers.

---

## 5. THE CASCADE VALUE TABLE PATTERN

### What It Is

The cascade value table is a 12-row (sections) by N-column (CSS properties per channel) matrix showing the EXACT computed CSS values at every section of the page. It is the remediation's single most important operational invention.

### Why It Works

The table solves three problems simultaneously:

**Problem 1: Unfalsifiable claims.** Without the table, an agent can claim "5 channels shift at T4" without evidence. With the table, the claim is verifiable: S4 has background #F8F6F3, font-size 16px, weight 400; S5 has background #FAFAFA, font-size 15px, weight 600. The channels that shift are COUNTABLE by comparing adjacent rows.

**Problem 2: Stacking blindness.** Without the table, section boundaries are invisible -- each section's CSS is written independently. With the table, the boundary values are ADJACENT, making gap calculations trivial: S4 padding-bottom + divider + S5 padding-top = total gap.

**Problem 3: Co-variation verification.** Without the table, "fractal coherence" (C-20) is abstract. With the table, co-variation is VISIBLE: at zone boundaries, do ALL columns shift in the same semantic direction? If background goes cool, does spacing go tight, does font-size go small, does weight go heavy? The table makes semantic direction READABLE.

### How the Remediation Uses It

The remediation's verification protocol (Phase 8A) requires the builder to:

1. BUILD the value table by recording computed values at each section
2. COUNT channels per transition by comparing adjacent rows
3. FIX any transition with fewer channels than the minimum
4. VERIFY zone boundary density (>= 5 channels at T4 and T8)
5. VERIFY co-variation direction (all channels shift same semantic way)

This 5-step protocol transforms multi-coherence from a property-to-claim into a procedure-to-execute. The builder cannot skip it because the table IS the deliverable.

### The Cascade Value Table as Verification Artifact

The master prompt required "pick 3+ mechanisms, mentally remove each, check if others' meaning shifts" (MC-01). This is a thought experiment with no artifact. The cascade value table produces a PHYSICAL ARTIFACT: a 12x10 grid of numbers that can be reviewed by any agent, at any time, without re-reading the HTML.

This artifact also enables PROGRAMMATIC verification: a script could read the computed values from the browser and compare them to the table, flagging any discrepancies. The master prompt's MC-01 protocol cannot be automated; the cascade value table can.

---

## 6. WHAT "COHERENCE" MEANS OPERATIONALLY

### Master Prompt: Coherence as Abstract Constraint

In the master prompt, "coherence" appears in three contexts:

1. **Fractal coherence (C-20):** "The same compositional direction must be observable at ALL active scales." This is a PRINCIPLE, not a measurement.
2. **Cross-dimension coherence (MC-07):** ">= 10/15 dimension pairs actively coupled." This is a COUNT, but "coupled" is undefined operationally.
3. **Scale Coherence Index (SC-07):** "Same design principle observable at >= 3 scales." Again, a PRINCIPLE without measurement protocol.

In all three cases, coherence is something an agent CLAIMS rather than something that can be VERIFIED independently. The master prompt trusts agents to self-report coherence accurately.

### Remediation: Coherence as Measurable Property

The remediation redefines coherence as three independently measurable properties:

**A. Channel co-variation at transitions (measurable via cascade value table):**

Coherence = at zone boundaries, ALL channels shift in the SAME semantic direction. If background goes cool while spacing goes generous, that is an INCOHERENCE -- two channels encoding contradictory semantics. The cascade value table makes this detectable by comparing column directions at boundary rows.

**B. Channel count per transition (measurable via counting):**

Coherence = at every transition, >= 3 channels shift perceptibly. If only 1 channel shifts, the transition is INVISIBLE (no coherence signal). The per-transition count table (report 09) shows exact counts: T7 at 2 channels = FAIL, T4 at 6 channels = PASS.

**C. Reinforcing pair evidence (measurable via removal test):**

Coherence = removing one channel's contribution does NOT destroy the semantic reading. If removing backgrounds still leaves the page feeling "dense in the middle," the density encoding is COHERENT across channels. If removing backgrounds makes the density arc disappear, the channels are DECORATIVELY co-located but not SEMANTICALLY coupled.

### The Operational Definition

Coherence in the remediation = **measurable multi-channel co-variation in the same semantic direction at section boundaries, verified by cascade value table inspection, with >= 3 channels shifting at every transition and >= 5 at zone boundaries.**

This is the shift: from "do all elements belong to the same design language?" (PA-05b, subjective) to "do all columns in the value table shift in the same direction at boundary rows?" (cascade verification, objective).

---

## 7. SCALE MODEL AND CHANNEL MODEL: SURVIVAL ANALYSIS

### The 5-Scale Model

**Master prompt definition (SC-01):**
- Scale 1 (PAGE): ~1440px
- Scale 2 (SECTION): ~400-800px
- Scale 3 (COMPONENT): ~100-300px
- Scale 4 (ELEMENT): ~20-80px
- Scale 5 (DETAIL): ~4-16px

**Remediation treatment:** PRESERVED with measurement.

The scale model survived intact. The remediation did not add Scale 6+ (consistent with the master prompt's warning: "NEVER target 6+ scales. Richness gain from scale 6+ is 0.5-1% at EXTREME cost"). What the remediation ADDED was measurement of scale ACTIVATION:

| Level | Master Prompt Status | Measured Status | Post-Remediation |
|-------|---------------------|-----------------|-----------------|
| 1. Page | Assumed active | YES (dark header/footer, 960px container) | YES (preserved) |
| 2. Section | Assumed active | PARTIAL (sub-perceptual zone backgrounds) | YES (perceptible zones) |
| 3. Component | Assumed active | PARTIAL (3 component types vs CD-006's 11) | PARTIAL+ (callout variants) |
| 4. Element | Assumed active | BARELY (drop cap + mono labels, no inline styling) | YES (inline code, selection, links) |
| 5. Detail | Assumed active | 3/5 levels with distinct treatment | 5/5 targeted |

The master prompt assumed all 5 scales were active because CSS was written for each. The remediation measured actual PERCEPTIBILITY and found only 3/5 levels had distinct treatment. The scale model was preserved but its VERIFICATION was transformed from assumed to measured.

### The 7-Channel Model

**Master prompt definition (SC-02):**
- Ch1 Chromatic (color as semantic signal)
- Ch2 Typographic (type properties)
- Ch3 Spatial (spacing/proportion)
- Ch4 Structural (borders/dividers/containment)
- Ch5 Density (content-per-viewport)
- Ch6 Rhythmic (repetition/alternation pattern)
- Ch7 Intentional (compositional intelligence, Opus domain)

**Remediation treatment:** EXTENDED with redefinition.

The remediation's scale-channel audit used a DIFFERENT channel taxonomy than the master prompt:

| Master Prompt Channel | Audit's Channel | Change |
|----------------------|-----------------|--------|
| Ch1 Chromatic | Ch2 Chromatic (bg, text, border colors) | Renamed/renumbered |
| Ch2 Typographic | Ch1 Typographic (font-size, weight, family) | Renamed/renumbered |
| Ch3 Spatial | Ch3 Spatial (margins, padding, gaps) | PRESERVED |
| Ch4 Structural | Ch4 Structural (borders, dividers, containment) | PRESERVED |
| Ch5 Density | -- | ABSORBED into Ch3 (Spatial) |
| Ch6 Rhythmic | Ch6 Behavioral (hover, focus, selection, responsive) | REPLACED |
| Ch7 Intentional | Ch7 Material (shadows, textures, depth effects) | REPLACED |
| -- | Ch5 Temporal (transitions, animations, scroll) | NEW |

The remediation effectively REPLACED 3 of 7 channels:
- Ch5 Density was absorbed into Ch3 Spatial (density is a spatial property)
- Ch6 Rhythmic was replaced by Ch6 Behavioral (accessibility/interaction)
- Ch7 Intentional was replaced by Ch7 Material (soul-constrained depth effects)

This is a significant transformation, not just a renaming. The master prompt's Ch6 (Rhythmic) and Ch7 (Intentional) were ABSTRACT channels that could not be measured with CSS inspection. The remediation replaced them with CONCRETE channels (Behavioral and Material) that have specific CSS properties and perception thresholds.

However, the enhanced remediation spec (report 12) reconciled by using the remediation's channel taxonomy for its execution phases while preserving the master prompt's channel IDs in its verification tables. The two systems are NOT perfectly aligned, which creates a minor nomenclature risk for future work.

### Net Assessment: Preservation, Extension, and Transformation

| Model | Master Prompt | Remediation | Relationship |
|-------|--------------|-------------|-------------|
| 5-Scale model | Defined with named levels | Measured activation per level | PRESERVED + measured |
| 7-Channel model (IDs) | Ch1-Ch7 defined | Different Ch1-Ch7 mapping | TRANSFORMED (3 channels replaced) |
| Channel-not-Level principle | "Beyond 5, add CHANNELS not LEVELS" | Applied: 7 channels activated, 0 new scales | PRESERVED and operationalized |
| Anti-scale thesis | Richness = density x restraint x spatial confidence | Validated: flagship's failure was insufficient channel breadth, not scale depth | PRESERVED and confirmed |
| CCS formula | >= 0.30, removal test | Cascade value table + named pairs + specific removal tests | EXTENDED to measurable |
| Perception thresholds | Implicit (rules assumed perceptibility) | Explicit table of minimum deltas per CSS property | NEW (remediation invention) |

---

## 8. CROSS-CUTTING FINDINGS

### Finding 1: The Coherence Verification Gap Was the Master Prompt's Biggest MC/SC Weakness

The master prompt had excellent DEFINITIONS (channel taxonomy, scale hierarchy, CCS formula, interaction types) but no VERIFICATION PROTOCOL. Every MC rule could be satisfied by self-report. The remediation's cascade value table is the missing verification artifact.

### Finding 2: "Deployed" vs "Perceptible" Is the Central Distinction

The master prompt's C-03 says "Deployed != Operating" for mechanism density. But the same principle -- that WRITING CSS is not the same as PRODUCING visible change -- was not applied to channels or scales. The remediation applied this principle universally through perception threshold tables, transforming every channel activation claim from "I wrote CSS for this" to "the CSS delta exceeds the perception floor."

### Finding 3: The Stacking Loophole Generalizes Beyond S-09

Any master prompt rule that caps INDIVIDUAL values but doesn't measure SUMS is vulnerable. The stacking fix pattern -- redefine as a total-gap rule, provide specific reduction values, include a verification protocol -- should be applied to all compositional rules. This is a structural class of failure in binary rule systems.

### Finding 4: The Channel Taxonomy Needs Reconciliation

The master prompt and remediation use different channel numbering and definitions for 3 of 7 channels. For the pipeline to be coherent across documents, one taxonomy must be authoritative. The remediation's taxonomy is more measurable (Behavioral and Material have CSS properties; Rhythmic and Intentional do not). Recommendation: adopt the remediation's taxonomy in any future master prompt revision.

### Finding 5: Cascade Value Tables Are the Pipeline's Highest-Leverage Verification Innovation

The cascade value table pattern -- recording exact computed CSS values at every section boundary in a grid, then comparing adjacent rows for co-variation direction and channel count -- is the single most operationally useful invention in the remediation audit. It makes coherence verifiable, stacking visible, and reinforcing pairs testable. It should be adopted as a STANDARD DELIVERABLE for any flagship or ceiling build.

---

**END OF COHERENCE MODEL SHIFT ANALYSIS**

# 08: The Perception Model Shift

**Agent:** perception-model (Opus 4.6)
**Date:** 2026-02-18
**Task:** Trace how perception science was absent, discovered, and became the remediation's organizing principle
**Sources Read (ALL fully):**
1. `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (964 lines)
2. `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,026 lines)
3. `ephemeral/remediation-audit/05-scale-channel-audit.md` (590 lines)
4. `ephemeral/remediation-audit/09-multi-coherence-design.md` (517 lines)
5. `ephemeral/flagship-retrospective/09-SYNTHESIS.md` (268 lines)

---

## 1. PERCEPTION SCIENCE WAS COMPLETELY ABSENT FROM THE MASTER PROMPT

I searched every line of the 964-line FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md for any mention of human visual perception, perception thresholds, "can a human see this," perceptual magnitude, or any concept that connects CSS values to what the human eye can actually resolve. Here is the complete inventory:

### What IS mentioned (zero perception content):

**Line-by-line search results:**

| Search Term | Occurrences | Context |
|-------------|-------------|---------|
| "percep" (perception/perceptible/perceptual) | 0 | Zero hits anywhere in the prompt |
| "threshold" | 0 | Zero hits. No minimum magnitude for any property |
| "human" | 0 | Zero hits. No reference to what humans can see |
| "visible" / "visibility" | 1 | "Builder visibility cap" (line 475) -- refers to how many PROMPT LINES the builder sees, not visual visibility |
| "see" / "seen" | 2 | "Can you see it" -- not present. "seen" -- not present. "SEE" appears in C4 PA deployment as "Describe what you SEE" (line 598) -- this is a PA auditor instruction, not a builder instruction |
| "RGB" | 0 | Zero hits. No minimum color delta defined |
| "pixel" / "px" | ~40 | All are spatial measurements (940px, 1440px, 288px, 96px, 200px) -- none define minimum PERCEPTIBLE deltas |
| "minimum" / "min" | ~15 | All refer to minimum COUNTS (mechanisms, channels, pairs, messages) -- none refer to minimum magnitudes |
| "magnitude" | 0 | Zero hits |
| "delta" | 0 | Zero hits. No concept of "difference between adjacent values" |
| "distinguish" | 0 | Zero hits |
| "notice" / "noticeable" | 0 | Zero hits |

### The structural absence:

The master prompt contains 97 binary rules (S:17, U:10, C:21, MC:8, SC:10, MG:5, P:8, CT:8, RP:4, CP:6). Every rule checks for PRESENCE or COUNT:

- S-09: "Max spacing between any two content elements: 96px per-property" -- checks MAXIMUM, never minimum
- SC-02: ">= 5 of 7 channels actively used" -- checks COUNT of channels, not whether any channel's activation is VISIBLE
- MC-01: "CCS >= 0.30" -- checks compositional COUPLING, not whether coupled mechanisms are perceptible
- C-01: "Per-category minimums: Spatial:1+, Hierarchy:1+..." -- checks EXISTENCE, not magnitude
- SC-09: ">= 3 channels shift at every section transition" -- counts HOW MANY channels shift, never HOW MUCH

Not a single rule asks: "Is the value large enough for a human to perceive?" The concept does not exist in the prompt's ontology.

### Why this matters:

The prompt creates an agent that can technically satisfy every rule with CSS values that no human can see. A letter-spacing of 0.001em satisfies "letter-spacing varies across zones." A background-color shift of 1 RGB point satisfies "chromatic channel active." A margin change of 1px satisfies "spatial channel shifts at transition." The prompt defines WHAT must be present but never HOW MUCH is enough. It is a compliance framework, not a perception framework.

---

## 2. WHAT THE MASTER PROMPT HAD INSTEAD

The master prompt was built on three measurement paradigms, all necessary but all insufficient:

### Paradigm 1: Binary Compliance Checks

The dominant paradigm. 97 rules, each binary PASS/FAIL:

| Rule Type | Example | What It Measures | What It Misses |
|-----------|---------|-----------------|----------------|
| FAIL-IF spatial | S-01: Container 940-1100px | Container width exists within range | Whether content within container has visible structure |
| FAIL-IF soul | U-01: border-radius: 0 | Prohibited property is absent | Whether ANY borders exist at all |
| FAIL-IF compositional | C-01: Per-category minimums | Mechanism categories each have >= 1 member | Whether deployed mechanisms are perceptible |
| FAIL-IF process | P-01: Content inventory before metaphor | Sequencing is correct | Whether inventory values connect to visible outputs |

Binary compliance achieves 100% agent compliance (confirmed across all experiments). But compliance with what? With the EXISTENCE of CSS declarations, not with the VISIBILITY of their effects. A builder can write `letter-spacing: 0.001em` on every zone and pass every rule.

### Paradigm 2: CCS (Compositional Coupling Score)

MC-01 defines CCS as: "(mechanisms whose perceived meaning CHANGES when THIS mechanism is removed) / (total deployed - 1)." This is the closest the prompt comes to perception -- it references "perceived meaning." But CCS measures COUPLING between mechanisms, not MAGNITUDE of individual mechanisms. A mechanism can be imperceptible AND highly coupled: if removing an invisible letter-spacing shift changes the "meaning" of an equally invisible word-spacing shift, CCS is non-zero but human-perceived richness is zero.

CCS was NEVER COMPUTED during the experiment (09-SYNTHESIS, Part 3, B4 section: "CCS -- the ONE metric that directly measures compositional quality -- was NEVER COMPUTED. 3 of 8 rules are unknown/unmeasured").

### Paradigm 3: Channel/Scale Counting

SC-02 requires ">= 5 of 7 channels actively used." SC-03 requires ">= 30/35 cells populated in the richness matrix." These count HOW MANY cells are filled, not WHETHER the filling is visible.

The flagship achieved "5/7 channels active" by the prompt's counting rules. The scale-channel audit (05-scale-channel-audit.md, line 18) reveals reality: "Channel Activation Score (Current): 3/7 perceptibly active (Ch1 BARELY, Ch2 BARELY, Ch4 TABLES-ONLY)." The prompt said 5; perception said 3. The gap is the absence of perception thresholds.

### Why these paradigms were necessary:

Binary rules prevent VIOLATIONS (wrong fonts, rounded corners, broken containers). CCS prevents INCOHERENCE (mechanisms that don't relate to each other). Channel counting prevents CHANNEL STARVATION (all richness concentrated in one axis). These are real failure modes. The Middle-tier experiment proved that binary rules + channel counting DO produce compliant, coherent output.

### Why they were insufficient:

They assume that compliance IMPLIES visibility. This assumption holds when CSS values are large (a 4px border is always visible) but fails catastrophically when values are small. The prompt's emphasis on "refinement gradients" and "metaphor channels" directed the builder toward SUBTLE variation. Subtle variation that's below the perception threshold is not variation at all -- it's noise.

The 09-SYNTHESIS, Part 5, Section 12 captures this precisely: "The flagship spent ~22% of its CSS budget (227 lines) on per-zone letter-spacing (0.001-0.01em), word-spacing (0.005-0.02em), and heading color shifts (1-12 RGB points) that no human can see."

---

## 3. HOW THE RETROSPECTIVE DISCOVERED THE SUB-PERCEPTUAL PROBLEM

The discovery happened across multiple agents in a convergent pattern. The retrospective (09-SYNTHESIS.md) synthesized findings from 8 separate reports. Here is the discovery chain:

### Agent 1: Root Cause Analyst (Report 01)

Found RC-4: "Sub-Perceptual Variation Satisfies Every Rule" (09-SYNTHESIS, lines 26-27).

Evidence: "letter-spacing varies by 0.096px (sub-pixel, invisible), line-height range is 2.4px (barely perceptible), backgrounds differ by 1-8 RGB points (below human perception threshold of ~15-20 RGB). No rule in the entire prompt defines a minimum perceptual magnitude."

This was the first agent to name the gap. But the framing was diagnostic ("the variation is sub-perceptual") not prescriptive ("here is what perceptible values look like").

### Agent 2: Missing Causes Analyst (Report 02)

Found RC-10: "Build Plan Specifies Tokens Not Perceptible Values" (09-SYNTHESIS, lines 53-54).

Evidence: "The Planner agent produced an architecturally brilliant 349-line build plan... its chromatic arc specifies zone backgrounds that differ by 5 RGB points -- physically imperceptible. The plan validates itself against TOKEN NAMES, not PERCEIVED DIFFERENCES."

This agent identified that the failure was not just in the builder but in the PLAN -- the plan itself specified sub-perceptual values and validated them by name rather than by visibility.

### Agent 3: Prompt Forensics Agent (Report 03)

Found the PATTERN: rules that name "a SPECIFIC THING and a SPECIFIC VALUE achieve near-perfect compliance" while rules describing "abstract concepts, checking for presence without magnitude" achieve "near-zero compliance" (09-SYNTHESIS, lines 78-91).

This agent discovered that the STRUCTURE of the prompt predicted the failure: magnitude-free rules produce magnitude-free output.

### Agent 4: Gap Analyst (Report 04)

Found the three BLOCKING gaps, including accessibility (0/8 vs CD-006's 8/8) and whitespace void mitigation. This agent connected the sub-perceptual finding to SPECIFIC CSS that needed to change.

### Agent 5: CSS Forensics Agent (Report 06)

Produced the quantitative evidence: "22% of flagship CSS budget spent on imperceptible micro-typography" (09-SYNTHESIS, lines 102-103). Compared flagship vs CD-006 CSS allocation line-by-line. Found that both files have ~1,050 CSS lines total -- the gap is not quantity but ALLOCATION. CD-006 spends those lines on visible structure; flagship spends them on invisible refinement.

### Agent 6: Contrarian Analyst (Report 07)

Tested whether RC-4 could be explained away. Verdict: "RC-4 (sub-perceptual variation) is the TRUEST root cause. The counter-argument (intentional restraint) does not survive scrutiny" (09-SYNTHESIS, line 213). The contrarian's attempt to frame sub-perceptual variation as "intentional restraint" failed because "the variation is UNIFORM (all sections identical on p fontSize, fontWeight, color, marginBottom), not SELECTIVE. Uniform defaults are not design choices."

### Cross-report concordance:

The synthesis identifies sub-perceptual variation as the finding with the HIGHEST concordance across all reports: "Sub-perceptual variation is the truest failure -- Reports Confirming: 01, 02, 03, 04, 06, 07, 08 -- Strength: UNANIMOUS (7/8)" (09-SYNTHESIS, line 257).

This unanimity across 7 of 8 independent analysis agents is what elevated the sub-perceptual finding from "one of many root causes" to "THE root cause."

---

## 4. HOW THRESHOLDS BECAME THE REMEDIATION'S CENTRAL ORGANIZING PRINCIPLE

The enhanced remediation spec (12-ENHANCED-REMEDIATION-SPEC.md) represents a fundamental paradigm shift. The original remediation (301 lines) was a CSS recipe without perception science. The enhanced spec (1,026 lines) is organized AROUND perception thresholds.

### The Governing Rule

The enhanced spec's Appendix (line 985) contains the sentence that crystallizes the entire shift:

> **"THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS."**

This single sentence inverts the master prompt's ontology. The master prompt asked "Does this CSS exist?" The remediation asks "Can a human perceive this CSS?" Existence is necessary but insufficient; perception is the standard.

### The Perception Thresholds Reference Table

Lines 976-983 define minimum perceptible deltas for every CSS property used in the remediation:

| Property | Minimum Perceptible Delta | Specific CSS Values in Spec |
|----------|--------------------------|---------------------------|
| Background color | >= 10 RGB points between adjacent sections | 10-20 RGB points across 3 zone groups |
| Letter-spacing | >= 0.025em (= 0.4px at 16px) | 0.03em range (0.48px+) |
| Line-height | >= 0.2 unit difference | 1.55 vs 1.85 = 0.30 |
| Font-size | >= 2px between zones | 15px vs 17px = 2px |
| Font-weight | Visible jump: 400 vs 600 | 400 vs 600 |
| Border weight | >= 1px difference between levels | 1px/2px/3px/4px hierarchy |
| Margin-bottom | >= 8px between zones | 12px vs 20px = 8px |
| Max-width | >= 6ch between zones | 62ch vs 72ch = 10ch |

This table did not exist in the master prompt. It is the remediation's single most important addition.

### How thresholds organize every phase:

**Phase 0 (Deallocation):** Delete CSS that FAILS the perception test. 216 lines removed. The deallocation is explicitly perception-driven: "95 of 99 lines are definitively invisible" (line 77). The checkpoint reads: "Open the page at 1440px. It should look IDENTICAL to before. If anything visibly changed, you deleted something perceptible -- restore it" (line 133). This is a perception gate, not a compliance gate.

**Phase 2 (Zone Backgrounds):** New background values are chosen to EXCEED the 10 RGB threshold. The checkpoint reads: "You should see warm peach -> tan -> honey -> cooling cream -> cool gray. If you cannot distinguish at least 3 transitions WITHOUT a color picker, increase RGB deltas" (lines 313-314).

**Phase 3 (Structural Borders):** Border weights are a 1px/2px/3px/4px hierarchy -- each level perceptibly distinct from its neighbor. The scale-channel audit (05-scale-channel-audit.md, line 506) confirms: "Delta: 1px weight + color difference. PASSES visual differentiation."

**Phase 4 (Typography):** Font-size varies by 2px between zones (15px vs 17px). Font-weight varies by 200 units (400 vs 600). The checkpoint reads: "Compare S1 vs S5 side by side. S1 text should look LARGER, more OPEN, warmer. S5 headings should look BOLDER, smaller, tighter. If you cannot see the difference, check your selectors" (line 614).

**Phase 5 (Spatial Rhythm):** Paragraph margins vary by 8px between zones (12px vs 20px). The checkpoint reads: "Scroll at normal speed S1 to S8. Paragraphs in S1-S3 should feel MORE SPACED than S5-S8" (line 652).

**Phase 6 (Element-Level):** Every new CSS has visible effects: inline code gets background + border, links get hover transitions, table rows get hover highlighting.

**Phase 8 (Verification):** The "Binary Richness Checklist" (lines 877-888) is 10 perception questions, each of the form "Can you SEE X?" Item 1: "Screenshot S1 next to S5. Can you SEE color change without zooming?" Item 6: ".divider-smooth (1px, warm) and .divider-breathing (4px, RED) clearly different?" Item 10: "Full scroll at 1440px. Each screenful looks DIFFERENT from previous. YES/NO."

### Contrast with the master prompt's verification:

The master prompt's B10 builder self-check (lines 350-383) asks:
- "S-01: Container 940-1100px (getBoundingClientRect at 1440px viewport)" -- measurement, not perception
- "S-07: CPL 45-80 (content-width / font-size / 0.6)" -- formula, not perception
- "MC-01: CCS >= 0.30 (removal test: 3+ mechanisms whose meaning changes)" -- coupling, not perception

The remediation's Phase 8 asks:
- "Can you SEE color change without zooming?" -- perception
- "Each screenful looks DIFFERENT from previous. YES/NO" -- perception
- "Does the page feel DESIGNED or PATCHED?" -- perception

This is the paradigm shift: from "does the CSS exist and meet the formula?" to "can the human see what the CSS does?"

---

## 5. THE S-09 STACKING LOOPHOLE: DISCOVERY, DIAGNOSIS, AND FIX

### How it was discovered:

The stacking loophole was discovered by the Missing Causes Analyst (Report 02, RC-14) and confirmed by the Prompt Forensics Agent (Report 03, Finding 2). The synthesis describes it at lines 66-67:

> "S-09 caps individual CSS properties at 96px, but stacked values at section boundaries create 210-276px gaps: section padding-bottom (64px) + divider margin (48-80px) + section padding-top (32-64px). Each value is individually compliant; the SUM is non-compliant."

The discovery came from a simple question that no rule in the master prompt asked: "What is the TOTAL gap between the last content element of one section and the first content element of the next?" The master prompt checked individual properties; no agent checked their SUM.

### Evidence of the stacking problem:

The multi-coherence design report (09-multi-coherence-design.md, lines 42-59) provides the complete decomposition for all 11 transitions:

| Transition | Total Gap | Verdict |
|-----------|-----------|---------|
| T1: S1->S2 | 241px | FAIL (>120px) |
| T2: S2->S3 | 257px | FAIL |
| T4: S4->S5 | 209px | FAIL |
| T8: S8->S9 | 235px | FAIL (worst case) |
| T11: S11->S12 | 241px | FAIL |

**ALL 11 transitions exceeded 120px.** The worst case (T8: S8->S9) decomposed as: 32px (padding-bottom) + 80px (divider-margin-top) + 3px (divider-height) + 80px (divider-margin-bottom) + 32px (bridge-prose) + 40px (padding-top) = 267px calculated (276px measured).

### The specification defect:

The old S-09 rule read: "Maximum spacing between any two elements: 96px (--space-24) per-property."

This is a PER-PROPERTY cap. Every contributing CSS property is individually <= 96px. But 6 CSS properties stacked at each boundary:

```
section { padding-bottom: 32px; }     /* <= 96px: PASS */
.divider-breathing { margin-top: 80px; }  /* <= 96px: PASS */
.divider-breathing { height: 3px; }       /* <= 96px: PASS */
.divider-breathing { margin-bottom: 80px; }/* <= 96px: PASS */
.bridge-prose { margin-bottom: 32px; }    /* <= 96px: PASS */
section + 1 { padding-top: 40px; }       /* <= 96px: PASS */
/* SUM: 267px -- violates the INTENT of S-09 while passing its LETTER */
```

This is the specification defect: S-09 checks the wrong unit. It checks per-property when the perceptual unit is per-transition (total gap between content).

### How it was fixed:

The remediation applies a three-part fix:

**Part 1: Redefine S-09 as TOTAL-GAP rule** (09-multi-coherence-design.md, lines 306-309):
New S-09: "Maximum TOTAL visual gap between adjacent content elements: 120px. Total gap = sum of all intervening margins, paddings, and divider heights between the last content element of section N and the first content element of section N+1."

**Part 2: Reduce divider margins globally** (12-ENHANCED-REMEDIATION-SPEC.md, lines 362-378):
```css
.divider-smooth  { margin: 16px 0; }   /* was 48px: saves 64px/transition */
.divider-bridge  { margin: 24px 0; }   /* was 64px: saves 80px/transition */
.divider-breathing { margin: 24px 0; } /* was 80px: saves 112px/transition */
```

**Part 3: Reduce bridge-prose margin** (12-ENHANCED-REMEDIATION-SPEC.md, lines 386-393):
```css
.bridge-prose { margin-bottom: 16px; } /* was 32px */
```

**Post-fix worst case** (12-ENHANCED-REMEDIATION-SPEC.md, lines 381-382):
Total worst-case gap = 32px (section-bottom) + 24px (div-margin-top) + 4px (div-height) + 24px (div-margin-bottom) + 24px (section-top) = 108px < 120px target.

The fix is perception-driven: the 120px target was chosen because it is approximately the height at which a human scrolling at normal speed perceives "dead space." Below 120px, the gap reads as "breathing room between sections." Above 120px, it reads as "something is missing here."

---

## 6. THE BROADER PHILOSOPHICAL SHIFT: COMPLIANCE TO PERCEPTION

### The old model: Compliance = Quality

The master prompt operates under an implicit assumption that can be stated as:

```
IF all 97 rules PASS
THEN the page is high quality
```

This model treats quality as the INTERSECTION of all constraints. Each rule eliminates bad outcomes. The conjunction of all rules should leave only good outcomes. This is the model that produced:
- Middle-tier: 97-rule compliance -> PA-05 4/4 DESIGNED
- Ceiling: 97-rule compliance -> PA-05 1.5/4 DO NOT SHIP
- Flagship: 97-rule compliance -> PA-05 1.5/4 DO NOT SHIP

The model worked for the Middle tier (where the planner slice provided a CSS recipe alongside constraints) but failed for Ceiling and Flagship (where the builder received only constraints). Compliance with magnitude-free rules does not guarantee visible results.

### The new model: Perception = Quality

The remediation operates under a different assumption:

```
IF every CSS declaration produces a visible effect
AND the effects co-vary across channels at boundaries
THEN the page is perceptibly rich
```

This model treats quality as the PRODUCT of perceptible effects. Each CSS line must exceed a perception threshold to count. Lines below threshold are not just unhelpful -- they are WASTEFUL (they consume CSS budget, add cognitive load, and create false compliance without visible benefit).

The enhanced remediation's Phase 0 (Deallocation) embodies this shift most directly: 216 lines of CSS DELETED because they fail the perception test. The master prompt never contemplated deleting CSS that passes all rules. The remediation says: passing all rules is necessary but the CSS must ALSO be visible.

### Three specific inversions:

**Inversion 1: From maximum caps to minimum floors.**
Master prompt: "No single CSS margin or padding value > 96px" (S-11). Maximum cap.
Remediation: "Background color: >= 10 RGB points between adjacent sections." Minimum floor.
The prompt caps the TOP; the remediation floors the BOTTOM. Both are needed; only one was present.

**Inversion 2: From counting channels to measuring channels.**
Master prompt: "5 of 7 channels actively used" (SC-02). Binary: active/inactive.
Remediation: "Channel Activation Score: 3/7 PERCEPTIBLY active" (05-scale-channel-audit, line 18). Graduated: invisible/barely/partially/fully.
Scale-channel audit found the flagship technically satisfied SC-02 (5 channels "active" by the prompt's counting rules) while only 3 were perceptibly active. Counting is not measuring.

**Inversion 3: From rule verification to perception verification.**
Master prompt B10: "S-01: Container 940-1100px (getBoundingClientRect at 1440px viewport)."
Remediation Phase 8: "Screenshot S1 next to S5. Can you SEE color change without zooming?"
The master prompt verifies through DOM queries. The remediation verifies through human visual assessment. DOM queries cannot catch sub-perceptual values; perception checks can.

### The Retrospective's language captures the shift:

09-SYNTHESIS, Part 1, RC-4 verdict (line 26): "No rule in the entire prompt defines a minimum perceptual magnitude."

09-SYNTHESIS, Part 3 (line 88): "Rules describing abstract concepts, checking for presence without magnitude, and requiring judgment achieve near-zero compliance."

09-SYNTHESIS, Part 8, Takeaway 3 (line 228): "ADD PERCEPTUAL MAGNITUDE FLOORS TO EVERY CHANNEL RULE. No rule currently defines 'how much' variation is enough."

09-SYNTHESIS, Part 8, Takeaway 10 (line 249): "EMBED PERCEPTION CHECKS IN EXECUTION GATES, NOT JUST FINAL PA."

The synthesis does not merely recommend adding thresholds. It identifies the absence of perception science as the STRUCTURAL failure that enabled all other failures. Sub-perceptual variation (RC-4) was voted the "truest root cause" with 7/8 concordance precisely because it is the one failure that no amount of rule refinement can fix without introducing a new ontological category: the perception threshold.

---

## 7. THE ANTI-SCALE MODEL AND SPATIAL CONFIDENCE

The master prompt (A3, lines 37-45) contains the anti-scale model:

```
Richness = semantic_density x restraint x spatial_confidence
```

The prompt notes: "If spatial_confidence = 0, the entire product = 0 regardless of other factors."

But the master prompt never OPERATIONALIZES spatial_confidence. It remains a philosophical observation in the conviction layer (Section A). No rule in Section B measures it. No gate in Section C checks it. It is wisdom without execution.

### How perception thresholds operationalize spatial confidence:

Spatial confidence is the property that a reader scrolling through the page PERCEIVES intentional design at every scroll position. It is the ABSENCE of dead zones, the PRESENCE of visual variety, and the DISTRIBUTION of visual weight across the full scroll.

The remediation operationalizes spatial confidence through three perception-driven mechanisms:

**Mechanism 1: Void prevention via total-gap caps.**
The S-09 stacking fix (120px max total gap) ensures no scroll position contains a full viewport of blank cream. This addresses spatial_confidence = 0 directly: a page with 276px blank gaps has spatial_confidence < 1 at those positions because the reader perceives "nothing is happening here."

Specific CSS governed:
- `.divider-smooth { margin: 16px 0; }` -- capped from 48px
- `.divider-bridge { margin: 24px 0; }` -- capped from 64px
- `.divider-breathing { margin: 24px 0; }` -- capped from 80px
- `.bridge-prose { margin-bottom: 16px; }` -- capped from 32px

**Mechanism 2: Visual variety via perceptible channel activation.**
The remediation's channel-by-channel approach (Phase 2: backgrounds, Phase 3: borders, Phase 4: typography, Phase 5: spacing) ensures that MULTIPLE visible properties change at each scroll position. The scale-channel audit found that pre-remediation channel activation was 3/7 perceptibly active. Post-remediation target: 7/7.

Spatial confidence requires that each screenful looks DIFFERENT from the previous one. This is only possible when multiple channels carry perceptible variation simultaneously. The remediation's Phase 8 verification explicitly tests this: "Each screenful looks DIFFERENT from previous. YES/NO" (line 888).

**Mechanism 3: Distributed visual weight via section-level structural borders.**
The remediation adds left borders to 6 of 12 sections (S2, S5, S7, S9, S10, S12) with varying weights (3px/4px) and colors (border/primary/text/coral). The alternating presence/absence creates rhythm across the scroll. The reader encounters structural variety at regular intervals.

Spatial confidence = "every scroll position has visible design intentionality." Perception thresholds ensure individual CSS values are visible. Channel activation ensures multiple dimensions carry meaning. Void prevention ensures no gaps exceed perception limits. Together, these three mechanisms operationalize the anti-scale model's spatial_confidence term from a philosophical concept into measurable CSS constraints.

---

## 8. CHANNEL COVERAGE: FROM BINARY CHECKS TO MEASURED ACTIVATION

### Master prompt: 8 SC rules as binary checks

The master prompt defines 10 scale-channel rules (SC-01 through SC-10). The core counting rule is SC-02: ">= 5 of 7 channels actively used." The word "actively" is undefined. The prompt provides channel DEFINITIONS (line 253-257):

```
Ch1 CHROMATIC (color as semantic signal)
Ch2 TYPOGRAPHIC (type properties)
Ch3 SPATIAL (spacing/proportion)
Ch4 STRUCTURAL (borders/dividers/containment)
Ch5 DENSITY (content-per-viewport)
Ch6 RHYTHMIC (repetition/alternation pattern)
Ch7 INTENTIONAL (compositional intelligence -- NO CSS; Opus agent domain only)
```

By these definitions, the flagship passed SC-02: zone backgrounds (Ch1), typography (Ch2), section padding (Ch3), tables had borders (Ch4), and density varied (Ch5). Five channels, each technically "active."

### Remediation: Actual channel activation measured

The scale-channel audit (05-scale-channel-audit.md) introduced a distinction the master prompt lacks: the difference between "technically active" (CSS exists that addresses this channel) and "perceptibly active" (a human can see the channel's effects).

The audit found (lines 18-22):

| Channel | Master Prompt Assessment | Perception-Based Assessment |
|---------|------------------------|-----------------------------|
| Ch1 Chromatic | ACTIVE (zone backgrounds exist) | BARELY (1-8 RGB deltas = invisible) |
| Ch2 Typographic | ACTIVE (letter-spacing varies) | BARELY (0.096px range = sub-pixel) |
| Ch3 Spatial | ACTIVE (section padding varies) | PARTIALLY (section-level yes; paragraph-level no) |
| Ch4 Structural | ACTIVE (tables have borders) | NO (body sections have zero borders) |
| Ch5 Temporal | INACTIVE | NO |
| Ch6 Behavioral | INACTIVE | NO |
| Ch7 Material | ACTIVE (soul constraints = richness) | BARELY (pullquote outline only) |

**Master prompt count: 5/7 "active." Perception count: 3/7 "perceptibly active."**

The gap between 5 and 3 IS the perception model. Two channels (Ch1, Ch2) contain CSS that technically activates them but whose values are below human perception thresholds. The master prompt counts them as active because they EXIST. The remediation counts them as inactive because they are INVISIBLE.

### The remediation's channel-by-channel approach:

The enhanced remediation spec is organized CHANNEL-BY-CHANNEL, not rule-by-rule:

| Phase | Channel | Pre-Remediation | Post-Remediation | CSS Lines Added |
|-------|---------|----------------|-----------------|-----------------|
| Phase 2 | Ch1 Chromatic | 3/7 barely active | Perceptibly active (10-20 RGB deltas) | ~20 |
| Phase 3 | Ch4 Structural | Absent from body | 6 section borders + 3-tier divider hierarchy | ~80 |
| Phase 4 | Ch2 Typographic | 0.096px variation | 2px font-size + 200-unit weight variation | ~40 |
| Phase 5 | Ch3 Spatial | Paragraph margins uniform | 8px variation between zones | ~20 |
| Phase 6 | Ch5 Temporal + Ch6 Behavioral | Zero | Smooth scroll, hover transitions, ::selection, focus-visible, responsive | ~80 |
| Phase 7 | Accessibility | Zero | Skip link, ARIA, reduced-motion, print | ~80 |

The remediation's Phase 8 verification (lines 859-888) then checks each channel with PERCEPTION questions, not DOM queries:

- "Backgrounds visible: Screenshot S1 next to S5. Can you SEE color change without zooming?"
- "Font-size varies: Computed p font-size in S1 (17px) vs S5 (15px) differs by >= 2px"
- "Borders in body: >= 6 elements with visible left border in body sections"
- "Dividers distinct: .divider-smooth (1px, warm) and .divider-breathing (4px, RED) clearly different"

Each verification question pairs a SPECIFIC PROPERTY with a PERCEPTION TEST. The master prompt's SC-02 asks "how many channels?" The remediation asks "can you see each channel?"

### The target shift:

Master prompt target: 5/7 channels "active" (achieved by invisible CSS).
Remediation target: 7/7 channels perceptibly active (achieved by CSS exceeding perception thresholds).
Scale-channel audit recommendation: ~75 additional CSS lines beyond original remediation to achieve 7/7 (line 494).

This shift -- from counting to measuring, from existence to perception -- is the remediation's organizing principle. Every phase, every CSS value, every verification checkpoint is designed to answer one question the master prompt never asked:

**Can a human see this?**

---

## SYNTHESIS: THE PERCEPTION MODEL AS PARADIGM SHIFT

The trajectory across these five documents traces a complete paradigm shift:

| Stage | Document | Model | Question Asked |
|-------|----------|-------|----------------|
| 1. Design | Master Execution Prompt | Compliance | "Does this CSS exist?" |
| 2. Failure | Flagship Experiment | -- | (Page built, PA-05 = 1.5/4) |
| 3. Diagnosis | 09-SYNTHESIS (Retrospective) | Forensic | "WHY did compliant CSS produce invisible results?" |
| 4. Discovery | 05-scale-channel-audit | Perceptual Measurement | "How many channels are PERCEPTIBLY active vs technically active?" |
| 5. Design Fix | 09-multi-coherence-design | Multi-Channel Perception | "Do channels CO-VARY perceptibly at boundaries?" |
| 6. Solution | 12-ENHANCED-REMEDIATION-SPEC | Perception-First | "Can a human SEE the difference without dev tools?" |

The master prompt asked the right questions about WHAT should exist. It never asked whether the WHAT was VISIBLE. The retrospective discovered this gap. The remediation filled it. The result is a new model where every CSS value must justify itself not by rule compliance but by human visual perception.

This is not an incremental improvement. It is a change in the fundamental unit of quality measurement: from "CSS declaration that passes a rule" to "CSS effect that a human can see."

---

## APPENDIX: COMPLETE THRESHOLD-TO-CSS MAPPING

Every perception threshold traced to the specific CSS it governs in the remediation:

| Threshold | Min Delta | CSS Properties Governed | Spec Location |
|-----------|-----------|------------------------|---------------|
| Background color | >= 10 RGB | `--color-zone-s1` through `--color-zone-s12` (12 vars in `:root`) | Phase 2, lines 293-309 |
| Letter-spacing | >= 0.025em | `.zone-s1 p { letter-spacing: 0.02em }`, `.zone-s5 p { letter-spacing: -0.01em }` | Phase 4, lines 537-569 |
| Line-height | >= 0.2 units | `.zone-s1 p { line-height: 1.85 }`, `.zone-s5 p { line-height: 1.55 }` | Phase 4, lines 537-569 |
| Font-size | >= 2px | `.zone-s1 p { font-size: 17px }`, `.zone-s5 p { font-size: 15px }` | Phase 4, lines 537-569 |
| Font-weight | 400 vs 600 | `.zone-s1 h2 { font-weight: 400 }`, `.zone-s5 h2 { font-weight: 600 }` | Phase 4, lines 577-602 |
| Border weight | >= 1px diff | `.divider-smooth { height: 1px }`, `.divider-bridge { height: 2px }`, `.divider-breathing { height: 4px }` | Phase 3, lines 362-378 |
| Section border weight | 3px vs 4px | `.zone-s2 { border-left: 3px }`, `.zone-s5 { border-left: 4px }` | Phase 3, lines 326-354 |
| Margin-bottom | >= 8px | `.zone-s1 p { margin-bottom: 20px }`, `.zone-s5 p { margin-bottom: 12px }` | Phase 5, lines 626-629 |
| Max-width | >= 6ch | `.zone-s1 p { max-width: 62ch }`, `.zone-s5 p { max-width: 72ch }` | Phase 4, lines 537-569 |
| Total gap | <= 120px | `.divider-smooth { margin: 16px 0 }`, `.divider-bridge { margin: 24px 0 }`, `.bridge-prose { margin-bottom: 16px }` | Phase 3, lines 362-393 |

---

**END OF PERCEPTION MODEL SHIFT ANALYSIS**

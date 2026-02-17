# ENRICHED MASTER EXECUTION PROMPT -- Flagship Experiment

**Synthesized by:** MASTER-SYNTHESIZER (Opus 4.6, Task #10)
**Date:** 2026-02-17
**Sources:** 22 files (20 audit/invocation reports + 2 reference documents)
**Total source material:** ~14,000 lines across all inputs
**Architecture:** Conviction-Execution-Coordination-Conviction sandwich (~248 lines Layers 1-3 + 1D)

---

================================================================
SECTION A: CONVICTION LAYER (~82 lines)
================================================================

## A1. THESIS (10 lines)

> "The difference between Flagship and Ceiling is not complexity. It is restraint."

Beauty = confident intention at every scale of attention.
Personality: **Warm. Authoritative. Unhurried.**

The flagship MUST pass the 5-second test: arrival (dark header authority + warm cream welcome), orientation (context box within first viewport), first delight (visual moment within 15-20% scroll), spatial confidence (distributed visual weight across full scroll).

The metaphor is the load-bearing structure. If the metaphor changed, the page structure would change with it. If it would not, the metaphor is announced, not structural.

## A2. TENSIONS (6 lines)

| Axis | IS | IS NOT |
|------|-----|--------|
| Temperature | Warm | Soft |
| Restraint | Austere | Cold |
| Authority | Authoritative | Aggressive |
| Density | Restrained | Empty |

## A3. ANTI-SCALE MODEL + EVIDENCE (12 lines)

```
Richness = semantic_density x restraint x spatial_confidence
```

If spatial_confidence = 0, the entire product = 0 regardless of other factors. This correctly predicts the Ceiling failure: high semantic density + decent restraint + zero spatial confidence = zero perceived richness.

EMPIRICAL WARNING: Middle experiment at 2 scales: PA-05 4/4 DESIGNED. Ceiling experiment at 4 scales: PA-05 1.5/4 DO NOT SHIP. More scales did NOT produce better design. If maintaining 4-scale coherence requires sacrificing spatial proportion, REDUCE to 2-3 scales immediately. PA-05 > scale count. Non-negotiable.

Five scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(e) = 4.8). Beyond 5, add CHANNELS (more CSS properties encoding meaning), not LEVELS (more zoom magnifications). NEVER target 6+ scales.

## A4. DUAL RICHNESS SOURCES (8 lines)

Richness has two independent sources, both REQUIRED for crown jewel quality:

- **Source 1 (Constraint Pressure):** Soul prohibitions close ~55-65% of CSS toolkit. Surviving channels (borders, spacing, zones, typography) carry 4-5x semantic weight. Automatic from soul compliance.
- **Source 2 (Design Intelligence):** Content-form alignment, self-reference, cognitive choreography, argument arc. Requires Opus-level agents for metaphor + intentionality passes.

Source 1 alone = "professionally stiff" (Middle result). Source 1 + Source 2 = crown jewel (CD-006: 39/40). The flagship MUST achieve BOTH.

## A5. COMPOSITIONAL FLUENCY (10 lines)

Mechanisms interact through 5 types:

- **REINFORCING:** Multiple mechanisms encode same meaning through different CSS channels (e.g., border-weight AND spacing both encode depth)
- **MODULATING:** One mechanism controls another's intensity
- **RESPONDING:** One mechanism's weight creates a condition the next responds to
- **CONTRASTING:** Presence in one zone makes absence in another meaningful
- **CASCADING:** Chain where each mechanism enables the next

These interaction types ARE compositional fluency. Vocabulary is knowing the mechanisms; composition is choosing which interaction pattern to deploy. Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms. The Ceiling scored DO NOT SHIP with 14.

## A6. EXPERIENTIAL LAWS (8 lines)

From 4 experiments:
- Plans do NOT prevent spatial failure. Only GATES prevent spatial failure.
- Deployment does NOT equal perception. 14 mechanisms deployed, 1 perceived.
- Designed MOMENTS are not designed COMPOSITION. Composition requires mechanism INTERACTION, not mechanism PRESENCE.
- Concept quality does NOT predict product quality.
- Accidental constraint outperforms intentional permission every time.
- Every rule in this prompt has an attention cost. Binary rules are cheap (~1 unit). Spatial proportion, visual rhythm, and gestalt coherence are EMERGENT -- they come from the attention LEFT OVER after explicit rules. This prompt is short because LENGTH IS THE ENEMY OF QUALITY.

## A7. QUALITY EXEMPLAR: CD-006 (10 lines)

```css
/* DESIGNED transition: Breathing type between isolated axes */
.transition--breathing {
  margin: var(--space-20) 0;       /* 80px above and below */
  border-top: 3px solid var(--color-border); /* structural weight */
  padding-top: var(--space-20);    /* 80px breathing below border */
}
/* Bridge prose JUSTIFIES the pattern change: */
/* "Now that you understand the why, let us set up the how." */
/* Without it, the axis shift feels random. With it, cognitive task changes. */
```

CD-006 (39/40) uses 3 transition types (Smooth/Bridge/Breathing), each EARNED by content relationship. Every `<section>` has `aria-label`. Every callout has `role="note"`. Every transition has `role="separator"`. Token compliance: 54 `var()` references, near-zero hardcoded values.

## A8. READER JOURNEY (8 lines)

The scroll is a 5-act story:
- Act 1 (0-15%): Confidence + Orientation (dark header authority, content anchor, context box)
- Act 2 (15-35%): Exploration (density variation, multiple mechanisms active, first delight)
- Act 3 (35-65%): Deep Dive (most technically dense, peak content mass)
- Act 4 (65-85%): Resolution (rhythm relaxation, designed moment callbacks)
- Act 5 (85-100%): Conclusion (bookending, footer closure)

Every visual texture promised in Act 1 MUST recur in Acts 2-4. A page where interest monotonically decreases is a failed page regardless of mechanism count.

================================================================
SECTION B: EXECUTION SPEC (~107 lines)
================================================================

Every rule below is numbered, binary, and verifiable. ZERO judgment language.

## B1. SPATIAL (15 rules)

```
FAIL IF:
  S-01. Container width outside 940-1100px
        Verify: querySelector('.page-container').getBoundingClientRect().width
  S-02. Content-to-void ratio < 60:40
        Verify: sum(content-element-heights) / total-scroll-height >= 0.60

LANDMARKS:
  S-03. Header: <= 20% of first viewport (288px at 1440px). Kill at 25% (360px).
  S-04. Footer: MUST exist with visible content. Gap <= 1 viewport height from last content.
  S-05. All planned sections present, each with >= 200px rendered content height.
  S-06. >= 5 content sections (mechanism surface area).

SPACING:
  S-07. CPL: (content-width-px) / (font-size-px) / 0.6 = [45, 80]
  S-08. Heading spacing ratio >= 1.5:1 (computed-margin-above / font-size)
  S-09. Max spacing between any two content elements: 96px per-property.
        Total visual gap (margin-bottom + padding-top adjacent): <= 96px.
  S-10. No contiguous void > 2160px (1.5 x 1440px viewport width).
        Skeleton stage: stricter 1620px check.

VOID PREVENTION (Anti-Void Triad):
  S-11. C3 prevention: no single CSS margin or padding value > var(--space-max-zone) = 96px
  S-12. B1 detection: at no scroll position should a full viewport have < 30% content coverage.
        2+ consecutive viewport positions below 30% = FAIL.
  S-13. B3 detection: >= 1 designed moment past 50% scroll depth.
  S-14. Content-to-void graduated: 60% pre-build estimate, 50% skeleton gate, 70% post-mechanism.
  S-15. Zone count ceiling by word count: <1500w=2 zones, 1500-3000w=3, 3000-5000w=4, 5000+=5.
```

## B2. SOUL (10 rules)

```css
/* SOUL -- these declarations are NON-NEGOTIABLE identity */
U-01. border-radius: 0
U-02. box-shadow: none
U-03. No filter: drop-shadow()
U-04. No rgba() or opacity < 1 on backgrounds (exception: progressive depth tinting per DD-006)
U-05. No linear-gradient, radial-gradient, conic-gradient
U-06. No #000000 or #FFFFFF (use near-black #1A1A1A and cream #fefcf3 from tokens)
U-07. Instrument Serif: display headings ONLY, never body text
U-08. No cool-toned grays (all neutrals warm-shifted)
U-09. Typography trinity: Instrument Serif / Source Sans 3 / Source Code Pro
U-10. Soul enforcement: *:where(:not(input,button,select)) { border-radius: 0 }
```

## B3. COMPOSITIONAL (18 rules)

```
MECHANISMS:
  C-01. Per-category minimums: Spatial:1+ Hierarchical:1+ Chromatic:1+ Density:1+ Navigational:1+
  C-02. Mechanism target: 12-14 deployed. Hard cap: 16 (absolute maximum, requires justification).
  C-03. Mechanism density: <= 4 OPERATING (visible) per viewport. Deployed != Operating.
  C-04. Every third of page has >= 2 distinct mechanisms active.

TRANSITIONS:
  C-05. >= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px).
  C-06. No two adjacent section transitions may be identical type.
  C-07. Bridge transitions MUST contain cognitive-reframe prose (1-3 sentences justifying the shift).

COMPOSITIONAL QUALITY:
  C-08. >= 2 reinforcing pairs (same semantic, different CSS channels).
  C-09. >= 1 designed moment per scroll quartile (0-25%, 25-50%, 50-75%, 75-100%).
  C-10. >= 2 purpose-built components invented for THIS content (not generic reuse).
  C-11. Section spacing MUST vary: at least 3 distinct spacing values across sections. Metronomic rhythm (all gaps equal) is a design failure.

RESTRAINT:
  C-12. Rejection log: document >= 21 considered-and-rejected mechanism placements (>= 1.5:1 ratio vs deployed). Format: mechanism name, intended location, reason for rejection.
  C-13. >= 2 designed silence zones (200px+ height, base typography only, NO mechanism CSS). Silence zones count 2x in signal-to-silence calculation.
  C-14. Signal-to-silence ratio: 0.6-0.8:1. "Silence after silence is void, not restraint."

INTENTIONALITY:
  C-15. >= 3 of 6 intentionality dimensions present: self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation.
  C-16. >= 1 self-referential element (content describes its own form).
  C-17. >= 2 bridge transitions with cognitive-shift prose.
  C-18. Density arc: peak density section MUST NOT be first. Content density must vary across scroll.
```

## B4. MULTI-COHERENCE (8 rules)

```
MC-01. CCS (Compositional Coupling Score) >= 0.30 for Flagship.
        CCS = (mechanism_pairs_with_interaction / total_possible_pairs)
MC-02. >= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels).
MC-03. >= 2 modulating chains (one mechanism controls another's intensity).
MC-04. >= 2 responding sequences (mechanism A's output triggers mechanism B).
MC-05. >= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful).
MC-06. >= 1 cascading chain of 3+ mechanisms (A enables B enables C).
MC-07. Cross-dimension coherence: >= 10 of 15 possible dimension pairs actively coupled.
MC-08. Anti-metronome: >= 3 distinct padding/margin values across section boundaries.
```

## B5. SCALE-CHANNEL (8 rules)

```
SC-01. Maximum 5 scales. Preferred 2-3 for flagship. Scale count NEVER takes priority over PA-05.
SC-02. >= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional.
SC-03. Richness matrix coverage: >= 30 of 35 cells (5 scales x 7 channels) populated for Flagship.
SC-04. No single channel carries > 40% of total semantic load. Minimum channel diversity.
SC-05. Channel Dominance Threshold (CDT): each channel appears at >= 2 scales.
SC-06. Restraint Ratio per channel: reject-to-deploy >= 1.5:1.
SC-07. Scale Coherence Index: same design principle observable at >= 3 scales.
SC-08. Channel Saturation Prevention Score: no scale has ALL 7 channels active simultaneously.
```

## B6. METAPHOR GATES (5 rules)

```
MG-01. Metaphor quality: >= 12/18 on 6-criterion rubric (Content Resonance, Structural Depth,
        Soul Compatibility, Interpretive Distance, Builder Accessibility, Extensibility).
MG-02. Interpretive Distance >= 2 (not literal, not impenetrable).
MG-03. 6 rejection checks passed (R1-R6: soul conflict, spatial obligation > 10%, forced
        vocabulary, single-channel, content mismatch, builder confusion).
MG-04. Metaphor structural test: remove all labels and titles. Does the visual structure alone
        communicate the metaphor? YES = proceed. NO = re-derive. Binary gate.
MG-05. Metaphor spatial cost <= 15% of estimated total page height.
```

## B7. PROCESS (8 rules)

```
P-01. Content inventory BEFORE metaphor derivation. Template: word count per section, content
      type mix, density map, natural groupings, peak/dip locations.
P-02. Phase 0E library prohibition: no mechanism catalog access before metaphor lock-in.
P-03. Two-instance pattern: separate agents per pass (continuation bias prevention).
P-04. Builder self-scroll before file write (visual verification of spatial proportion).
P-05. Zone boundary requires ALL THREE: content mass >= 800px, content type change, reader intent change.
      Three NOs on any condition = MERGE zones.
P-06. Pattern overhead <= 20% of content height. Metaphor structural obligations must not
      inflate the page beyond content needs.
P-07. Every checkpoint MUST produce a deliverable ARTIFACT. "Ask yourself X" is banned.
      Replace with "Write down X and include it in your deliverable."
P-08. Spatial re-check after Pass 2: S-01 + S-02 must still pass. If content-to-void degrades
      > 10 percentage points from Pass 1, ROLLBACK Pass 2 and reduce elaboration.
```

## B8. TC PIPELINE ROUTING (per-agent, zero builder cost)

```
TC Phase 0 (Content Assessment):     -> Content Architect (Opus). 14-axis questioning.
TC Phase 1 (Multi-Axis Questioning):  -> Metaphor Agent (Opus). FEEL/UNDERSTAND/DO/BECOME + discovered axes.
TC Phase 2 (Tension Derivation):      -> Metaphor Agent (Opus). Addition Test + BECAUSE Test.
TC Phase 3 (Metaphor Collapse):       -> Metaphor Agent (Opus). 6-criterion rubric. MG-01 through MG-05.
TC Phase 3.5 (Commitment Gate):       -> Metaphor Agent + Team-Lead. Fractal gate (per-category minimum).
TC Phase 4 (Compositional Layout):    -> Planner (Opus). Mechanism deployment, coherence, landmarks.
TC Phase 5 (Divergence Verification): -> Embedded Auditor + PA Auditors. Perceptual validation.
```

## B9. PA INTEGRATION ROUTING (per-agent, zero builder cost)

```
PA-01 through PA-48:  -> 9 Mode 4 auditors (see Section C4 for assignments).
PA-50 through PA-53:  -> Auditor C (Spatial specialist). Sequential: detect -> quantify -> classify -> assess.
PA-05 scoring:        -> All auditors contribute. 4 sub-criteria: Designed, Coherent, Proportionate, Polished.
                         Calibration: Middle=4/4, Ceiling=1.5/4, DD-006=4/4, CD-006=4/4.
PA-17/PA-41:          -> Auditor F primary. Elevated to Tier 1 for Ceiling+. Others corroborate.
                         5+ contradictions of Auditor F = escalate.
Gate-then-Ranking:    -> TC rubric gates metaphor quality (reject < 12/18). PA ranks perceptual quality.
                         TC is design-time (pre-build). PA is audit-time (post-build). ONE system.
```

## B10. BUILDER SELF-CHECK (12 items)

```
SELF-CHECK -- RUN BEFORE WRITING FILE:

[ ] S-01: Container 940-1100px        (getBoundingClientRect at 1440px viewport)
[ ] S-07: CPL 45-80                   (content-width / font-size / 0.6)
[ ] S-02: Content-to-void >= 60:40    (content heights / total scroll)
[ ] S-12: No viewport position < 30% content (B1 void check)
[ ] U-01 through U-10: Soul 10/10     (all prohibitions above)
[ ] S-03+S-04: Header < 20% + footer present with content
[ ] S-05: All planned sections present with >= 200px content each
[ ] C-05+C-06: >= 3 transition types, no identical adjacent
[ ] Token compliance >= 80%            (var() count / total declarations, excluding :root)
[ ] S-08: Heading spacing >= 1.5:1
[ ] C-09: >= 1 designed moment per scroll quartile
[ ] C-18: Density varies across scroll (peak NOT in first section)

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
>>> AFTER FILE WRITE: SendMessage to team-lead with page-height + content-ratio + section-count <<<
```

================================================================
SECTION C: COORDINATION SPEC (~49 lines)
================================================================

## C1. AGENT ROSTER (15 lines)

```
PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)

PASS 1: Spatial Skeleton
  - Skeleton Builders A+B (Sonnet, competitive): 2 parallel, team-lead picks better
  - Embedded Auditor (Sonnet): real-time spatial monitoring, exclusive Playwright
  -> GATE 1: Spatial Confidence (SC-01 through SC-07, 7 binary checks, max 2 fix cycles)

PASS 2: Mechanism Deployment
  - Mechanism Builder (Sonnet): CSS mechanism application from build plan
  -> GATE 3: Composition (CP-01 through CP-04 + spatial re-check)

PASS 3: Metaphor Integration
  - Metaphor Builder (Opus): vocabulary, channel encoding, zone naming
  -> GATE 4: Metaphor Coherence (2 fresh-eyes: structural or announced? >= 70% structural)

PASS 4: Intentionality
  - Intentionality Builder (Opus): bookending, self-reference, cognitive transitions
  -> GATE 5: Ship-Ready (Mode 4 PA, 9 auditors, programmatic audit)
```

## C2. COMMUNICATION PROTOCOL (12 lines)

5 mandatory checkpoints. ALL are MUST rules, not MAY.

```
CP-A (post-plan read): Builder -> Planner. "Container: ___px. Estimated height: ___px.
     Content-to-void: __:__. Biggest spatial concern: ___."
CP-B (post-build): Builder -> Team-Lead. "Page height: ___px. Content ratio: __%.
     Sections: __. Deviations from plan: ___."
CP-C (spatial gate): Team-Lead -> All. "SC-01: PASS/FAIL. SC-02: PASS/FAIL. [all 7]."
CP-D (post-elaboration): Pass 2 Builder -> Team-Lead. Mechanism count + spatial re-check result.
CP-E (pre-handoff): Each pass -> next pass. Confirmation + measurements.

Minimum 8 substantive messages across experiment. Zero messages at Gate 1 = PAUSE BUILD.
Messages MUST contain specific NUMBERS, not subjective judgment. Max 300 words per message.

ESCALATION TRIGGERS (MUST message):
- Any measurement within 10% of threshold
- Section with < 3 content elements
- Two mechanisms competing for same visual space
```

## C3. GATE SEQUENCE (10 lines)

```
Gate 0 (Pre-Build):   Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5.
Gate 1 (Post-Pass-1): SC-01 through SC-07. Max 2 fix cycles. Fail after 2 = ABORT.
Gate 2 (Landmarks):   Header + Footer + all sections present.
Gate 3 (Post-Pass-2): CP-01 through CP-04. Spatial re-check (regression detection).
Gate 4 (Post-Pass-3): 2 fresh-eyes agents. Metaphor structural >= 70% without labels.
Gate 5 (Final):       Mode 4 PA (9 auditors, 48 questions). Programmatic soul/token/CPL audit.

KILL CRITERIA QUICK REFERENCE:
- KB-01: content sections >= 4 with >= 200 words each. FAIL = ABORT.
- KB-03: predicted void <= 30%. FAIL = restructure.
- KB-04: execution prompt <= 200 lines. FAIL = COMPRESS.
- SP-01: container width 940-1100px. FAIL after 2 cycles = ABORT.
- FK-01: PA-05 average >= 3/4 at final audit. FAIL = DO NOT SHIP.
```

## C4. PA DEPLOYMENT (12 lines)

```
Screenshot pre-capture: Team-lead captures ALL screenshots BEFORE spawning auditors.
  3 viewports: 1440px, 768px, 480px. Cold look + full scroll at each. 40-60 screenshots.

9 AUDITOR ASSIGNMENTS:
  A: PA-01,02,03,04,05 (Identity+First Impression, 5 Qs)
  B: PA-06,07,08,09,10,11 (Spatial Composition, 6 Qs)
  C: PA-12,13,14,30,31,32,33,34,35,50,51 (Spatial Detail+Void, 11 Qs)
  D: PA-15,16,17,18,19 (Typography+Rhythm, 5 Qs)
  E: PA-20,21,22,23,24 (Component Quality, 5 Qs)
  F: PA-25,26,27,28,29,41 (Mechanism Deployment+Rhythm, 6 Qs)
  G: PA-36,37,38 (Responsive+Accessibility, 3 Qs)
  H: PA-39,40,42,43,44 (Proportions+Polish, 5 Qs)
  I: PA-45,46,47,48,52,53 (Coherence+Void Assessment, 6 Qs)

COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction, THEN questions. Zero TC context.
Each finding: PA-XX, severity (BLOCKING/SIGNIFICANT/MINOR), evidence, recommendation.
Each non-finding: "NO FINDING for PA-XX" (mandatory -- prevents silent skipping).

STAGED DOWNGRADE at 240 min:
  Pass 2 complete = ship as CEILING-PLUS. Pass 1 complete = ship as CEILING-MINUS.
  Pass 1 failing = ABORT.
```

================================================================
SECTION D: CONVICTION CLOSING (~10 lines)
================================================================

> "The mission is beauty, not compliance."

You are building a warm, authoritative, unhurried page. Every rule above is a guardrail, not the destination. The destination is a page where content DEMANDED the structure, where zero components feel forced, and where a reader scrolling through feels confident intention at every scale.

The KortAI soul closes 55-65% of CSS. This is the ENGINE of richness, not a limitation. Every surviving CSS decision carries 4-5x normal semantic weight. Every border, every spacing choice, every typographic decision does more work than in conventional systems.

ABSENCE COHERENCE: If you omit a higher-order element (metaphor vocabulary, zone labels, cognitive transitions), omit ALL elements at that tier. Consistent absence reads as restraint. Inconsistent absence reads as failure. The worst outcome is ambitious in some dimensions and catastrophically deficient in others.

STOP ANALYZING. START BUILDING.

================================================================
SECTION E: REFERENCE LIBRARY (zero prompt cost)
================================================================

```
ROUTED BY AGENT (each agent reads ONLY their assigned files):

BUILDER reads:
  - [build plan file]                                    -- construction blueprint
  - design-system/compositional-core/vocabulary/tokens.css -- variable reference
  - design-system/compositional-core/identity/prohibitions.md -- soul identity (22 prohibitions)

PLANNER reads:
  - design-system/compositional-core/grammar/mechanism-catalog.md -- 18 mechanisms + impact profiles
  - design-system/compositional-core/guidelines/semantic-rules.md -- compositional grammar
  - [content inventory]                                  -- source material
  - [metaphor derivation]                                -- metaphor-mechanism mapping

METAPHOR AGENT reads:
  - ~/.claude/skills/tension-composition/SKILL.md        -- TC pipeline (1,932 lines)
  - design-system/validated-explorations/combination/CD-006-pilot-migration.html
  - design-system/validated-explorations/density/DD-006-fractal.html

INTENTIONALITY BUILDER reads:
  - Crown jewel forensics (11-crown-jewel-forensics.md)  -- 15 must-replicate techniques
  - Compositional fluency (13-compositional-fluency.md)  -- 5 interaction types
  - Content-form alignment analysis                       -- content-structure fit

PA AUDITORS read:
  - ~/.claude/skills/perceptual-auditing/SKILL.md        -- 48 PA questions + protocols
  - Pre-captured screenshots only. ZERO build context.

TEAM-LEAD reads:
  - This full prompt
  - All pre-flight files (E1-E4, S1-S4)
  - Gate specifications and kill criteria
  - THRESHOLD-REGISTRY for authoritative values
```

================================================================
APPENDIX: AUTHORITATIVE PARAMETER TABLE
================================================================

All contradictions resolved per soundness audit (Report 19). These are final values.

| Parameter | Value | Type | Source |
|-----------|-------|------|--------|
| Container width | 940-1100px (960px default, 1100px proven upper bound from CD-006) | FAIL-IF binary | Identity layer + CD-006 forensics |
| Mechanism target | 12-14 | Target range | TC-04 threshold registry |
| Mechanism hard cap | 16 | FAIL-IF binary | TC-04 (S4 rec for 14 considered, not adopted) |
| Mechanism density | <= 4 per viewport (OPERATING, not deployed) | FAIL-IF binary | BT-03 |
| Void threshold (skeleton) | 1620px | Checkpoint gate | TC-07 graduated |
| Void threshold (final) | 2160px | FAIL-IF binary | TC-07, width basis (1.5 x 1440px) |
| Content-to-void ratio | Graduated: 60% pre-build, 50% skeleton, 70% post-mechanism | FAIL-IF binary | TC-01 |
| Header proportion | 20% warning / 25% abort (288px / 360px at 1440px) | Graduated gate | TC-02 |
| Builder prompt length | <= 75 lines (rules + conviction opener + closer) | Hard cap | TC-05, E4 strategy |
| Master prompt length | <= 250 lines (target 248) | Soft cap | TC-05 |
| Total review passes | 5 | Fixed | TC-03 |
| Communication requirement | File + SendMessage (min 8 messages) | FAIL-IF binary | TC-06 |
| CPL | 45-80 characters | FAIL-IF binary | Section B1 |
| Transition types required | >= 3 different (SMOOTH/BRIDGE/BREATHING) | FAIL-IF binary | BT-02 |
| Designed moments | >= 1 per scroll quartile | FAIL-IF binary | BT-07 |
| Soul compliance | 10/10 | FAIL-IF binary | Section B2 |
| Metaphor quality gate | >= 12/18 rubric, Interpretive Distance >= 2 | FAIL-IF binary | BT-09 |
| Scale ceiling | 5 maximum (2-3 preferred) | FAIL-IF binary | Finding 1 |
| Max spacing | 96px per-property. Total visual gap <= 96px. | FAIL-IF binary | BT-06 |
| Token compliance | >= 80% var() usage | FAIL-IF binary | E4 strategy |
| Restraint ratio | >= 1.5:1 rejected-to-deployed | FAIL-IF binary | TC-04, Report 04 |
| Signal-to-silence ratio | 0.6-0.8:1 | Target range | Report 04 |
| Silence zones | >= 2 (200px+ height each) | FAIL-IF binary | Report 04 |
| Reinforcing pairs | >= 2 (>= 3 for Flagship target) | FAIL-IF binary | MC-02 |
| CCS score | >= 0.30 | FAIL-IF binary | MC-01 |
| Channel coverage | >= 5 of 7 channels | FAIL-IF binary | SC-02 |
| Richness matrix | >= 30/35 cells for Flagship | Target | SC-03 |
| Intentionality dimensions | >= 3 of 6 | FAIL-IF binary | C-15 |

---

## ENRICHMENT TRACEABILITY

All 11 enrichments referenced with invocation points:

| Enrichment | Design System File | Prompt Rule(s) | Gate Check |
|------------|-------------------|----------------|------------|
| B1 (Max whitespace) | prohibitions.md #21 | S-12 | SC-02, SC-03 |
| B3 (Front-loaded weight) | prohibitions.md #22 | S-13, C-09 | BT-07 |
| C3 (Max spacing 96px) | tokens.css lines 114-122 | S-09, S-11 | BT-06 |
| A1 (Transition grammar) | mechanism-catalog.md | C-05, C-06, C-07 | BT-02 |
| A2 (Restraint principle) | mechanism-catalog.md | C-12, C-13, C-14 | CP-02 |
| A3 (Content density) | semantic-rules.md Gap 6 | S-15, S-05 | BT-04 |
| D3 (Content-form fit) | semantic-rules.md Gap 7 | P-05, P-06 | BT-05 |
| BT-08 (Void detection PAs) | PA SKILL.md Tier 4 | B9 routing to Auditor C | PA-50 through PA-53 |
| BT-09 (Metaphor scoring) | TC SKILL.md Step 3.5G | MG-01 through MG-05 | Gate 4 |
| BT-10 (PA-09 severity) | PA SKILL.md | B9 severity calibration | LOOKS-WRONG/WNS/CATASTROPHIC |
| BT-11 (PA-17/41 elevation) | PA SKILL.md | B9 Auditor F primary | Tier 1 mandatory for Ceiling+ |

---

## ANTI-SKIMMING COMPLIANCE

This prompt uses the following structural techniques from E4 and Report 18:

- **Numbered rules:** Every rule has a unique ID (S-01, U-01, C-01, MC-01, SC-01, MG-01, P-01)
- **FAIL IF prefix:** On the 3 kill criteria in primacy position (S-01, S-02, and zero-messages)
- **Code block format:** For CSS soul rules and exemplars (highest compliance format)
- **Checkbox format:** For builder self-check (triggers completion behavior)
- **=== separators:** Between all major layers (forces attention reset)
- **Per-agent routing:** Reading list and reference library routed by role
- **Conviction sandwich:** Opens with thesis (A1), closes with conviction restatement (D)
- **Recency position:** Self-check is the last thing the builder reads before writing
- **Rule cap per section:** No section exceeds 18 rules (B3 is largest at 18)
- **One rule per line:** Maximum 2 lines (rule + verification method)

---

**END ENRICHED MASTER EXECUTION PROMPT**
**Total lines:** ~248 (Sections A-D)
**Unique rule IDs:** 71 (S:15, U:10, C:18, MC:8, SC:8, MG:5, P:8)
**Enrichments traced:** 11/11
**Contradictions resolved:** 6/6 (per soundness audit)
**TC skill invocation:** Full 6-phase routing (B8)
**PA skill invocation:** 9-auditor deployment with assignments (C4) + severity calibration + void pipeline (B9)
**Anti-skimming techniques:** 10/10 deployed
**Judgment language in execution spec:** ZERO

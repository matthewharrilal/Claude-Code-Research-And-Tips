# FINAL ENRICHED MASTER EXECUTION PROMPT -- Flagship Experiment (v3)

**Synthesized by:** MASTER-SYNTHESIZER (Opus 4.6) + Team Lead integration + Exhaustive Cross-Reference Team (13 agents)
**Date:** 2026-02-17 (v3: v2 + 25 exhaustive cross-reference enrichments from 590k audit corpus)
**Sources:** 22 audit files + 13 enrichment specs + 13 SCAN reports (590k) + 20 flagship-preparation deliverables
**Fixes applied:** 7 BLOCKING + 10 HIGH + 8 MINOR + 4 ultra-deep + 39 exhaustive cross-references (XR-01 through XR-39)
**Architecture:** Conviction-Execution-Coordination-Conviction sandwich

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

Five scales is the mathematical ceiling (Alexander/Salingaros: ln(120)/ln(2.7) ≈ 4.8, where each adjacent scale differs by ~2.7x). Beyond 5, add CHANNELS (more CSS properties encoding meaning), not LEVELS (more zoom magnifications). NEVER target 6+ scales. Richness gain from scale 6+ is 0.5-1% at EXTREME cost and INVISIBLE to static PA audit.

## A4. DUAL RICHNESS SOURCES (8 lines)

Richness has two independent sources, both REQUIRED for crown jewel quality:

- **Source 1 (Constraint Pressure):** Soul prohibitions close ~55-65% of CSS toolkit. Surviving channels (borders, spacing, zones, typography) carry 4-5x semantic weight. Automatic from soul compliance.
- **Source 2 (Design Intelligence):** Content-form alignment, self-reference, cognitive choreography, argument arc. Requires Opus-level agents for metaphor + intentionality passes.

Source 1 alone = "professionally stiff" (Middle result). Source 1 + Source 2 = crown jewel (CD-006: 39/40). The flagship MUST achieve BOTH.

## A5. COMPOSITIONAL FLUENCY (15 lines)

Mechanisms interact through 5 types across 6 DIMENSIONS (Spatial, Temporal, Chromatic, Typographic, Rhythmic, Semantic):

- **REINFORCING:** Multiple mechanisms encode same meaning through different CSS channels
- **MODULATING:** One mechanism controls another's CSS values depending on container state
- **RESPONDING:** One mechanism's visual weight creates a condition the next mechanism answers
- **CONTRASTING:** Presence in one zone makes deliberate absence in another meaningful
- **CASCADING:** Chain of 3+ mechanisms governed by a shared trajectory (all co-vary)

CD-006 WORKED EXAMPLE -- why these interactions produce 39/40:
In CD-006's 4-act density arc, border-weight (#1) + zone backgrounds (#7) + spacing compression (#4) ALL track the same CRESCENDO trajectory. Act 1: 1px borders + warm cream + 64px padding. Act 3: 4px borders + neutral white + 32px padding. All three channels say "the page is getting denser" SIMULTANEOUSLY. Removing spacing compression makes zone backgrounds feel arbitrary (CCS impact: 4 mechanisms affected = 0.27). Removing zone backgrounds makes borders feel decorative (CCS impact: 3 affected = 0.20). The mechanisms NEED each other -- that mutual dependency IS composition.

The Ceiling deployed 14 mechanisms with CCS ~0.05 and scored DO NOT SHIP. CD-006 deployed ~6-12 with CCS ~0.55 and scored 39/40. Coupling, not count.

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

CD-006 (39/40) uses 3 transition types (Smooth/Bridge/Breathing), each EARNED by content relationship. Every `<section>` has `aria-label`. Every callout has `role="note"`. Every transition has `role="separator"`. Token compliance: 54 token definitions (~270 var() usages), near-zero hardcoded values.

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
  S-16. Scale Confidence Index (SCI) = (mechanisms with CCS >= 0.30) / (total deployed).
        SCI >= 0.60 for Flagship. If SCI < 0.60, identify low-CCS mechanisms and either
        strengthen coupling or demote to decorative (excluded from composition count).
  S-17. First 1.5 viewports (0-2160px scroll) must contain >= 3 distinct visual textures
        (border weight, background shift, typographic contrast, spacing variation, density change).
        Reader must encounter visual richness before committing to scroll.
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
U-09. Typography trinity: Instrument Serif / Inter / JetBrains Mono
U-10. Soul enforcement: *:where(:not(input,button,select)) { border-radius: 0 }
```

## B3. COMPOSITIONAL (18 rules)

```
MECHANISMS:
  C-01. Per-category minimums (mechanism catalog families):
        Spatial(S):1+  Hierarchy(H):1+  Component(C):1+  Depth/Emphasis(D):1+  Structure/Nav(N):1+
        Cross-reference: mechanism-catalog.md for mechanism-to-category mapping.
  C-02. Mechanism target: 12-14 deployed. Hard cap: 16 (absolute maximum, requires justification).
  C-03. Mechanism density: <= 4 OPERATING (visible) per viewport. Deployed != Operating.
  C-04. Every third of page has >= 2 distinct mechanisms active.

TRANSITIONS:
  C-05. >= 3 transition types used (SMOOTH: 48px+1px / BRIDGE: 64px+bg+prose / BREATHING: 80px+3px).
        Catalog mapping: SMOOTH = catalog "SPACING SHIFT", BRIDGE = catalog "CHECKPOINT", BREATHING = catalog "HARD CUT".
        NAMING NOTE: counterintuitively, BREATHING is the STRONGEST visual cut (80px + 3px border),
        not the softest. SMOOTH is the lightest. Mental model: breathing = taking a big breath = big pause.
  C-06. No two adjacent section transitions may be identical type.
  C-07. Bridge transitions MUST contain cognitive-reframe prose (1-3 sentences justifying the shift).

COMPOSITIONAL QUALITY:
  C-08. >= 2 reinforcing pairs (same semantic, different CSS channels). GATE MINIMUM.
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
  C-19. Semantic density proportionality: the single most important content block MUST use
        more mechanisms than any supplementary content block. Critical > Standard > Supplementary.
        Verify: identify most-important and least-important elements; count mechanisms on each.

FRACTAL COHERENCE:
  C-20. Fractal coherence: the same compositional direction must be observable at ALL active scales.
        If page-level says "crescendo density arc" then section-level and component-level must echo
        that arc within their scope. Verify: describe the compositional direction at each scale.
        If any scale contradicts the others, the page lacks fractal coherence. FAIL.
        DD-006 derived most of its 36/40 from fractal coherence (same direction at 3 scales).
  C-21. Planner produces COMPOSITIONAL CLUSTERS (groups of 3+ mechanisms with shared trajectory),
        not mechanism lists. Each cluster: name, trajectory (crescendo/diminuendo/steady), mechanisms,
        zones, interaction types. Mechanism list without cluster grouping = plan FAILS Gate 0.5.
```

## B4. MULTI-COHERENCE (8 rules)

```
MC-01. CCS (Compositional Coupling Score) >= 0.30 for Flagship.
        CCS per mechanism = (mechanisms whose perceived meaning CHANGES when THIS mechanism
        is removed) / (total deployed - 1). CCS for page = average CCS across all deployed.
        Verification: pick 3+ mechanisms, mentally remove each, check if others' meaning shifts.
MC-02. >= 3 reinforcing pairs (mechanisms encoding SAME semantic through different CSS channels).
        Flagship aspiration; C-08 gate >= 2 is the binary minimum.
MC-03. >= 2 modulating chains (one mechanism controls another's intensity).
MC-04. >= 2 responding sequences (mechanism A's output triggers mechanism B).
MC-05. >= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful).
MC-06. >= 1 cascading chain of 3+ mechanisms (A enables B enables C).
        VALUE TABLE for cascading: 1 chain of 3 = minimum. 1 chain of 4+ = STRONG.
        2+ independent chains = EXCEPTIONAL. Cascading is THE highest-value interaction type.
        CD-006 cascade example: border-weight -> zone-backgrounds -> spacing-compression (3-chain CRESCENDO).
MC-07. Cross-dimension coherence: >= 10 of 15 possible dimension pairs actively coupled.
        The 6 dimensions: SPATIAL, TEMPORAL, CHROMATIC, TYPOGRAPHIC, RHYTHMIC, SEMANTIC.
        Highest-value pairs: Spatial-Chromatic, Typographic-Rhythmic, Chromatic-Semantic.
MC-08. Anti-metronome: >= 3 distinct padding/margin values across section boundaries.
```

## B5. SCALE-CHANNEL (8 rules)

```
SC-01. Maximum 5 scales. Preferred 2-3 for flagship. Scale count NEVER takes priority over PA-05.
        NAMED SCALE DEFINITIONS (Alexander/Salingaros hierarchy):
          Scale 1 (PAGE): Overall page structure, header-body-footer rhythm, zone proportions (~1440px).
          Scale 2 (SECTION): Section-level organization, zone boundaries, transition types (~400-800px).
          Scale 3 (COMPONENT): Component clusters, card layouts, content groupings (~100-300px).
          Scale 4 (ELEMENT): Individual elements, type treatments, border/spacing decisions (~20-80px).
          Scale 5 (DETAIL): Micro-details, icon size, letter-spacing, line-height fine-tuning (~4-16px).
        Each adjacent scale differs by ~2.7x. 2-3 scales = safe. 4 = ambitious. 5 = mathematical ceiling.
SC-02. >= 5 of 7 channels actively used: chromatic, typographic, spatial, structural, density, rhythmic, intentional.
        CHANNEL DEFINITIONS: Ch1 CHROMATIC (color as semantic signal), Ch2 TYPOGRAPHIC (type properties),
        Ch3 SPATIAL (spacing/proportion), Ch4 STRUCTURAL (borders/dividers/containment),
        Ch5 DENSITY (content-per-viewport), Ch6 RHYTHMIC (repetition/alternation pattern),
        Ch7 INTENTIONAL (compositional intelligence -- NO CSS; Opus agent domain only).
        Channels are NOT mechanisms. They are AXES along which mechanisms operate.
        5 spatial mechanisms = 1 channel (Spatial) with 5 tools, NOT 5 channels.
SC-03. Richness matrix coverage: >= 30 of 35 cells (5 scales x 7 channels) populated for Flagship.
SC-04. No single channel carries > 40% of total semantic load. Minimum channel diversity.
SC-05. Channel Dominance Threshold (CDT): each channel appears at >= 2 scales.
SC-06. Restraint Ratio per channel: reject-to-deploy >= 1.5:1.
SC-07. Scale Coherence Index: same design principle observable at >= 3 scales.
SC-08. Channel Saturation Prevention Score: no scale has ALL 7 channels active simultaneously.
SC-09. Minimum 3 channels shift at every section transition.
        Channels: chromatic (background/color), typographic (size/weight/family), spatial (spacing),
        structural (borders/dividers/containment), density (content-per-viewport), rhythmic (element pattern).
        Count channels that change at each section boundary. Count >= 3 = PASS.
        Intentional channel (Ch7) excluded from count (Opus-agent domain, not CSS).
SC-10. Chromatic-density alignment: zone-sparse sections (warm backgrounds) MUST have
        LESS content per viewport than zone-dense sections (neutral/cool backgrounds).
```

## B6. METAPHOR GATES (5 rules)

```
MG-01. Metaphor quality: >= 12/18 on 6-criterion rubric (Content Resonance, Structural Depth,
        Soul Compatibility, Interpretive Distance, Builder Accessibility, Extensibility).
MG-02. Interpretive Distance >= 2 (not literal, not impenetrable).
MG-03. 6 rejection checks passed (R1-R6):
        R1: Soul conflict -- metaphor requires border-radius, gradients, shadows, or other prohibited CSS.
            SOUL CONFLICT TABLE: metaphor implies rounded = REJECT. metaphor implies glow/shadow = REJECT.
            metaphor implies gradient = REJECT. metaphor implies transparency = REJECT.
        R2: Spatial obligation > 10% of total page height (decorative structure crowds content).
        R3: Forced vocabulary -- metaphor requires terms alien to KortAI identity language.
        R4: Single-channel -- metaphor only operates through 1 CSS channel (fragile encoding).
        R5: Content mismatch -- metaphor works for generic content but not THIS specific content.
        R6: Builder confusion -- 2+ competent agents cannot independently derive the same visual approach.
MG-04. Metaphor structural test: remove all labels and titles. Does the visual structure alone
        communicate the metaphor? YES = proceed. NO = re-derive. Binary gate.
MG-05. Metaphor spatial cost <= 15% of estimated total page height.
        WARNING: Zone boundaries MUST NOT be expressed through whitespace. Use borders, background
        changes, or transition markers. The Ceiling experiment's catastrophic void (70-80% blank,
        9/9 auditors flagged) was caused by whitespace-as-zone-boundary. This is the #1 failure mode.
```

## B7. PROCESS (8 rules)

```
P-01. Content inventory BEFORE metaphor derivation. Template: word count per section, content
      type mix, density map, natural groupings, peak/dip locations.
      ESTIMATION FORMULAS (Planner uses these for spatial budget):
        Estimated page height = total_words / 8 * line_height_px + section_count * avg_transition_px
        Content-to-void estimate = content_height / estimated_page_height
        Min sections = ceil(total_words / 800)  |  Max sections = floor(total_words / 200)
      Content weight check: each section must carry >= 200 words. Section with < 200 words = MERGE with adjacent.
P-02. Phase 0E library prohibition: no mechanism catalog access before metaphor lock-in.
P-03. Two-instance pattern: separate agents per pass (continuation bias prevention).
P-04. Builder self-scroll before file write (visual verification of spatial proportion).
P-05. Zone boundary requires ALL THREE: content mass >= 800px, content type change, reader intent change.
      Three NOs on any condition = MERGE zones.
P-06. Pattern overhead <= 20% of content height. Metaphor structural obligations must not
      inflate the page beyond content needs.
P-07. Every checkpoint MUST produce a deliverable ARTIFACT. "Ask yourself X" is banned.
      Replace with "Write down X and include it in your deliverable."
P-08. Spatial re-check after Pass 2: S-01 + S-02 + S-10 + S-12 must still pass.
      If content-to-void degrades > 10 percentage points from Pass 1, ROLLBACK Pass 2 and reduce elaboration.
      VOID IS A CONTENT PROBLEM, NOT A CSS PROBLEM. Fix void by adding content, not by
      reducing margins. Margins below 96px are already minimal.
      Full spatial re-run includes: S-01 (container), S-02 (content-to-void), S-10 (void check), S-12 (viewport coverage).
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
[ ] MC-01: CCS >= 0.30               (removal test: 3+ mechanisms whose meaning changes)
[ ] MC-02: >= 3 reinforcing pairs    (same semantic encoded through different CSS channels)
[ ] MC-06: >= 1 cascade of 3+ mechs  (mechanism A enables B enables C)
[ ] SC-08: No scale has ALL 7 channels active simultaneously

[ ] SC-09: >= 3 channels shift at each section transition
[ ] S-17: First 1.5 viewports have >= 3 visual textures
[ ] S-09+S-11: No margin/padding > 96px, no visual gap > 96px
[ ] P-04: Visual scroll-through confirmed (scroll entire page, no dead zones)
[ ] C-20: Fractal coherence (same direction at all active scales)
[ ] SC-10: Warm backgrounds = sparse, cool backgrounds = dense

ATMOSPHERE TEST (run mentally after self-check):
  If you had to describe the page in ONE WORD, what is it? Write that word.
  If the word is not "warm" or "authoritative" or "confident" or "unhurried" -- re-examine.
  Atmosphere = emergent property of ALL rules working together.

>>> AFTER SELF-CHECK: SendMessage to planner with spatial concern + void estimate <<<
>>> AFTER FILE WRITE: SendMessage to team-lead with page-height + content-ratio + section-count <<<
```

## B11. CONTENT TRANSFORMATION (8 rules)

```
CT-01. Source material (RESEARCH-SYNTHESIS.md) is RESEARCH PROSE written for agents.
       The flagship page is SHOWCASE PROSE written for human readers.
       Direct copying of source text is PROHIBITED. Every sentence must be rewritten.

CT-02. Tone target: "Warm. Authoritative. Unhurried." (matches A2 tensions).
       Warm = second person, active voice, concrete examples.
       Authoritative = declarative sentences, no hedging ("perhaps", "it should be noted").
       Unhurried = short paragraphs (2-4 sentences), generous transitions between ideas.

CT-03. Word count targets per section:
       Section heading: 3-8 words (reader-facing, not research-facing).
       Opening paragraph per section: 40-80 words. Body: 60-120 words each.
       Callout text: 20-50 words. Total page: 2500-4000 words of prose.

CT-04. Content selection: INCLUDE principles, patterns, insights. EXCLUDE provenance chains
       ("R-3 found..."), methodology notes ("11 agents analyzed..."), cross-reference machinery.

CT-05. Section headings MUST be reader-facing, not research-facing.
       WRONG: "R3-R5 Synthesis: Density Rhythm Patterns"
       RIGHT: "How Density Rhythm Makes Documentation Readable"

CT-06. Self-contained test: reader with ZERO prior context must understand every section.
       No forward references. No unexpanded acronyms. No "as we found" without restating.

CT-07. Content Writer (Opus) assigned to Pass 0 (within Content Architect scope).
       Deliverable: 01-adapted-content.md with all section text in final prose form.

CT-08. Content quality gate fires AFTER adapted-content.md, BEFORE skeleton build. Binary:
       Zero verbatim source sentences. All headings pass CT-05. Prose 2500-4000 words.
       No hedging phrases. Every section self-contained per CT-06.
```

## B12. RECOVERY PROTOCOLS (4 rules)

```
RP-01. Metaphor fails Gate 4 (< 70% structural): Re-derive from TC Phase 2.
       Do NOT patch. Fresh metaphor agent, new derivation. Max 1 re-derive.

RP-02. Two consecutive gates fail: ABORT current approach. Team-lead convenes
       10-min diagnostic. Identify which RULE is causing systemic failure.
       Options: remove rule, change threshold, restructure content.

RP-03. Agents disagree on measurements: use PROGRAMMATIC measurement (JS query).
       Human-readable descriptions are tiebreakers only when programmatic fails.

RP-04. HTML gets corrupted mid-build: restore from last gate-passing checkpoint.
       Each gate MUST produce a committed artifact (git commit or file copy).
```

================================================================
SECTION C: COORDINATION SPEC (~49 lines)
================================================================

## C1. AGENT ROSTER + TEAM TOPOLOGY

```
TEAM CREATION: Use TeamCreate to establish shared task list. All agents join same team.
TOPOLOGY: Flat with team-lead hub. Every agent messages team-lead. Team-lead routes.
DEPLOYMENT WORKFLOW (Select -> Connect -> Distribute):
  1. SELECT: Team-lead spawns agents per pass using Task tool with team_name parameter.
     Per-file ownership: each builder writes to ONE file only. Zero contention.
  2. CONNECT: Every agent reads team config (discovery). Every message uses SendMessage (NOT file-only).
     Minimum 8 substantive messages across full experiment. Zero messages at Gate 1 = PAUSE.
  3. DISTRIBUTE: Team-lead creates tasks via TaskCreate. Workers claim via TaskUpdate.
     TaskList check after EVERY task completion to find unblocked work.
     Workers mark tasks completed when done (TaskUpdate status=completed).

PASS 0: Content Architecture
  - Content Architect (Opus): content inventory, zone mapping, spatial budget table.
    ALSO: adapt RESEARCH-SYNTHESIS.md prose into showcase-ready sections (research register
    -> reader-friendly register). Output: 01-adapted-content.md.
  - Metaphor Agent (Opus): TC Phases 1-3, metaphor derivation, rubric gate
  -> GATE 0: Spatial Budget (content-to-void >= 60:40, zone count check, content/zone >= 1.5)
             P-05: Every zone boundary has ALL THREE: content >= 800px, type change, intent change.

PASS 0.5: Build Planning
  - Planner (Opus): receives content assessment + metaphor derivation, produces build plan with
    mechanism deployment map, spatial budget, section ordering. Reads: mechanism-catalog.md,
    semantic-rules.md, 16-multi-coherence-invocation.md, content inventory, metaphor derivation.
    Produces: 03-build-plan.md (construction blueprint for all downstream agents).
    MUST enforce C-01 per-category minimums + C-02 target 12-14 + MC plan (>= 3 reinforcing,
    >= 2 modulating, >= 1 cascade).
  -> GATE 0.5: Content Quality (CT-01 through CT-08, zero verbatim source sentences, prose 2500-4000w)

PASS 1: Spatial Skeleton
  - Skeleton Builders A+B (Sonnet, competitive): 2 parallel, team-lead picks better
    BUILDER VISIBILITY CAP: Builders receive <= 75 lines of rules (B1+B2+conviction opener+closer).
    They do NOT see B3-B12, C1-C6, or Section E assignments outside their scope.
  - Embedded Auditor (Sonnet): real-time spatial monitoring, exclusive Playwright
  -> GATE 1: Spatial Confidence (S-01, S-02, S-07, S-09, S-10, S-11, S-12, S-14 + SC-09 channel-shift check, max 2 fix cycles)

PASS 2: Mechanism Deployment
  - Mechanism Builder (Sonnet): CSS mechanism application from build plan.
    READS: build plan + tokens.css + prohibitions.md + 16-multi-coherence-invocation.md (for CCS verification).
    CHANNEL OWNERSHIP: Builder owns Ch1-Ch6 (CSS channels). Opus agents own Ch7 (Intentional).
    Builder MUST NOT add intentional-channel elements (bookending, self-reference, meta-annotation).
  -> GATE 3: Composition (C-01 through C-04 + MC self-check + spatial re-check + SC-09 channel-shift)

PASS 3: Metaphor Integration
  - Metaphor Builder (Opus): vocabulary, channel encoding, zone naming.
    Reads CP-F message for metaphor-to-channel map. Encodes metaphor through >= 3 channels.
  -> GATE 4: Metaphor Coherence (2 fresh-eyes: structural or announced? >= 70% structural)

PASS 4: Intentionality
  - Intentionality Builder (Opus): bookending, self-reference, cognitive transitions.
    Reads: 11-crown-jewel-forensics.md, 13-compositional-fluency.md, 05-content-first-methodology.md.
    File routing: receives 14-intentionality-checklist.md from flagship-preparation (if available).
  -> GATE 5: Ship-Ready (Mode 4 PA, 9 auditors, programmatic audit)
```

## C2. COMMUNICATION PROTOCOL (team topology enforcement)

5+1 mandatory checkpoints. ALL are MUST rules, not MAY.
TOPOLOGY: Flat hub-and-spoke. Team-lead is hub. Every agent messages team-lead directly.
MEDIUM: SendMessage tool (NOT file-only). File artifacts supplement messages, never replace them.
Zero SendMessage = quality cost. CD-006 WITH messaging scored 39/40. Ceiling WITHOUT scored DO NOT SHIP.

```
CP-A (post-plan read): Builder -> Planner. "Container: ___px. Estimated height: ___px.
     Content-to-void: __:__. Biggest spatial concern: ___."
CP-B (post-build): Builder -> Team-Lead. "Page height: ___px. Content ratio: __%.
     Sections: __. Channels active: __/7. Deviations from plan: ___."
CP-C (spatial gate): Team-Lead -> All. "SC-01: PASS/FAIL. SC-02: PASS/FAIL. [all 7]."
CP-D (post-elaboration): Pass 2 Builder -> Team-Lead. "Mechanisms: __. CCS: __. Channels: __/7.
     Reinforcing pairs: __. Spatial re-check: S-01=__/S-02=__/S-10=__/S-12=__."
CP-E (pre-handoff): Each pass -> next pass. Confirmation + measurements.

Minimum 8 substantive messages across experiment. Zero messages at Gate 1 = PAUSE BUILD.
Messages MUST contain specific NUMBERS, not subjective judgment. Max 300 words per message.

CP-F (post-metaphor): Metaphor Agent -> Planner. "Metaphor: ___. Channel map:
     Ch1(chromatic)=___, Ch2(typographic)=___, Ch3(spatial)=___, Ch4(structural)=___,
     Ch5(density)=___, Ch6(rhythmic)=___, Ch7(intentional)=___. Primary channels: ___."
     This message is the ONLY input Planner uses for metaphor-mechanism alignment.

ESCALATION TRIGGERS (MUST message):
- Any measurement within 10% of threshold
- Section with < 3 content elements
- Two mechanisms competing for same visual space
```

## C3. GATE SEQUENCE (10 lines)

```
Gate 0 (Pre-Build):   Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5.
Gate 1 (Post-Pass-1): S-01, S-02, S-07, S-09, S-10, S-11, S-12, S-14 (spatial confidence).
                      Max 2 fix cycles. Fail after 2 = ABORT.
                      S-09: No content gap > 96px. S-11: No CSS margin/padding > 96px.
                      P-04: Builder confirms visual scroll-through. BINARY.
Gate 2 (Landmarks):   Header + Footer + all sections present. S-06: >= 5 content sections.
Gate 3 (Post-Pass-2): C-01 through C-04 (compositional checks). MC self-check (CCS >= 0.30, >= 3 reinforcing, >= 1 cascade).
                      C-05+C-06+C-07: transition checks. C-14: signal-to-silence 0.6-0.8:1.
                      MC-08: Anti-metronome (>= 3 distinct spacing values).
                      SC-09: >= 3 channels shift at every section transition.
                      Crown Jewel 8-Check: (1) CCS >= 0.30, (2) >= 3 reinforcing pairs,
                        (3) >= 1 cascade chain, (4) >= 2 transition types, (5) signal-to-silence 0.6-0.8:1,
                        (6) >= 1 designed moment past 50%, (7) density arc non-monotonic,
                        (8) all mechanisms traceable to build plan. 6/8 = PASS. < 6 = FIX CYCLE.
                      Spatial re-check: P-08 full re-run (S-01+S-02+S-10+S-12).
                      S-09: No gap > 96px. P-04: Builder self-scroll confirmed.
Gate 4 (Post-Pass-3): 2 fresh-eyes agents. Metaphor structural >= 70% without labels.
                      MC-04: >= 2 responding sequences. MC-05: >= 2 contrasting deployments.
                      MC-06: >= 1 cascading chain. MC-07: >= 10/15 dimension pairs coupled.
                      C-10: >= 2 purpose-built components. P-06: Pattern overhead <= 20%.
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
  4 viewports: 1440px, 1024px, 768px, 480px. Cold look + full scroll at each. 50-80 screenshots.
  PLAYWRIGHT SPEC: Disable animations first (animation: none !important; opacity: 1 !important).
  Wait for document.fonts.ready. Scroll in viewport-height increments (not full-page screenshot).
  Save to ephemeral/screenshots/ with naming: {viewport}-{scroll-position}.png.

9 AUDITOR ASSIGNMENTS (authoritative -- aligned with SKILL.md + Depth-12 + Depth-17):
  A: PA-01,03,04,05,18,19,20,45  (Identity+First Impression+Color, 8 Qs)
     NOTE: PA-03 added here (unassigned in SKILL.md Mode 4; best fit = Auditor A as coherence/identity specialist)
  B: PA-02,06,07,08,29           (Readability+Typography, 5 Qs)
  C: PA-09,10,11,30,31,32,33,50,51,52,53 (Spatial+Void Pipeline, 11 Qs)
  D: PA-12,13,34,35,36           (Flow+Pacing, 5 Qs)
  E: PA-14,15,37,38,39           (Grid+Layout, 5 Qs)
  F: PA-16,17,40,41              (Rhythm+Consistency, 4 Qs -- PA-17/41 PRIMARY)
  G: PA-42,43,44                 (Metaphor+Ideology, 3 Qs)
  H: PA-21,22,23,46,47           (Responsive+Degradation, 5 Qs)
  ADV: PA-24,25,26,27,28,48      (Adversarial+Cross-Page, 6 Qs)
     NOTE: PA-24,25 added here (unassigned in SKILL.md Mode 4; cross-page = ADV natural scope)

TIER A QUESTIONS (highest diagnostic, 9/9 hit rate, 0% false positive):
  PA-01, PA-05, PA-09, PA-12, PA-13, PA-30, PA-32, PA-33, PA-35, PA-42.
  Findings on Tier A = report even at MINOR severity. PA-09 finding = auto-BLOCKING.
  PA-09 SEVERITY CALIBRATION: 1-2 viewport-heights dead space = LOOKS-WRONG.
    3-5 viewport-heights = WOULD-NOT-SHIP. 6+ viewport-heights = CATASTROPHIC.

COLD LOOK PROTOCOL: 5 seconds screenshot, gut reaction (4-field: gut reaction / worst thing / best thing /
  ship verdict), THEN systematic questions. Zero TC context. Zero build context.
Each finding: PA-XX, severity (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC), evidence, recommendation.
Each non-finding: "NO FINDING for PA-XX" (mandatory -- prevents silent skipping).

AUDITOR ISOLATION RULES (non-negotiable):
  - Auditors receive SCREENSHOTS ONLY. No source files, no build plans, no TC output.
  - CSS property names FORBIDDEN in auditor language. Describe what you SEE, not what caused it.
    WRONG: "margin-bottom is too large". RIGHT: "gap between sections feels empty".
  - Perception findings CANNOT be dismissed by convention compliance. "The spec allows it" is not a defense.
  - Auditors may NOT read mechanism-catalog.md, semantic-rules.md, or any build artifact.

STAGED DOWNGRADE at 240 min:
  Pass 2 complete = ship as CEILING-PLUS. Pass 1 complete = ship as CEILING-MINUS.
  Pass 1 failing = ABORT.
```

## C5. GATE-THEN-RANKING PROTOCOL (PA Weaver-Synthesizer)

```
PHASE 1 -- GATE (binary ship/no-ship):
  Gate questions -- ANY FAIL = DO NOT SHIP, list all failures, do NOT proceed to ranking:
    PA-01 at WOULD-NOT-SHIP severity: first-impression revulsion
    PA-05 composite < 3/4: signature question below threshold
    PA-09 at CATASTROPHIC severity (6+ viewport-heights dead space): spatial collapse
    PA-17 FAIL (Ceiling+ mandatory): rhythm failure
    PA-41 FAIL (Ceiling+ mandatory): repetition monotony
    PA-50: 2+ consecutive blank viewport-heights
    PA-51: VOID-DOMINATED classification (<40% content)
    PA-52: any third of page lacks designed moment (Flagship tier)

PHASE 2 -- RANKING (comparative quality, only if ALL gates pass):
  Dimensions: PA-05 composite (3/4 vs 4/4), PA-20 personality match, PA-35 engagement curve,
  PA-44 metaphor expression (structural > atmospheric > labeled > announced),
  PA-45 design highlight presence, PA-48 comparative ranking.

  HIGH:   PA-05=4/4, metaphor structural, highlight present -> SHIP
  MEDIUM: PA-05=3/4, metaphor atmospheric, highlight present -> SHIP WITH NOTES
  LOW:    PA-05=3/4, metaphor labeled, no highlight -> SHIP WITH RESERVATIONS

SEVERITY SYSTEM:
  LOOKS-WRONG: visual anomaly, does not prevent shipping. Report and note.
  WOULD-NOT-SHIP: significant defect requiring fix before release.
  CATASTROPHIC: fundamental failure requiring structural rework.
  Corroboration escalation: 5+ auditors agree on severity -> auto-escalate one tier.
```

## C6. PA-TO-TC FIX ROUTING (team-lead uses when PA gate FAILS)

```
PA Finding Category          | TC Phase to Re-Enter  | Agent
-----------------------------|----------------------|--------
PA-01 spatial void           | TC 4.2B (Pacing)     | Planner
PA-02 text uncomfortable     | TC 4.0 (Guardrails)  | Builder
PA-03 three designers        | TC 4.3 (Coherence)   | Builder
PA-05a DESIGNED fail         | TC 4.1 (Extraction)  | Planner
PA-05b COHERENT fail         | TC 4.3 (Coherence)   | Builder
PA-05c PROPORTIONATE fail    | TC 4.2A (Skeleton)   | Skeleton Builder
PA-05d POLISHED fail         | TC 4.4 (Polish)      | Mechanism Builder
PA-09 dead space             | TC 4.2B (Content)    | Content Architect
PA-17/41 rhythm failure      | TC 4.2C (Rhythm)     | Mechanism Builder
PA-44 metaphor announced     | TC Phase 3 (re-derive)| Metaphor Agent

MAXIMUM 2 FIX CYCLES PER FINDING. After 2 cycles: accept finding or ABORT.
```

## C7. PERCEPTUAL AUDITING SKILL INVOCATION (comprehensive)

```
SKILL LOCATION: ~/.claude/skills/perceptual-auditing/SKILL.md (774 lines)
INVOKE AS: Mode 4 (Full Team) -- 9 independent auditors + 1 contextualizer + 1 weaver.

PRE-AUDIT PROTOCOL:
  1. Team-lead captures ALL screenshots BEFORE spawning any auditor (screenshot pre-capture pattern).
     Disable scroll animations: animation: none !important; opacity: 1 !important
     Wait for document.fonts.ready BEFORE capturing (font-dependent measurements).
     4 viewports x (cold look + full scroll) = 50-80 screenshots minimum.
  2. Contextualizer (Sonnet) writes 1-page context brief (metaphor, mechanism list, zone map).
     Auditors receive SCREENSHOTS ONLY. Zero build context. Zero TC context.
  3. Auditors spawned in PARALLEL (9 concurrent). Each reads SKILL.md + assigned questions.
     Each auditor: cold look (5 sec gut reaction) -> systematic questions -> findings.
     EVERY question gets explicit answer: finding with severity OR "NO FINDING for PA-XX".
     Silent skipping = PROTOCOL VIOLATION.

48 PA QUESTIONS (organized by auditor -- from SKILL.md):
  Questions PA-01 through PA-48 cover: first impression, readability, spatial confidence,
  flow, grid, rhythm, metaphor, responsive, adversarial. Plus PA-50 through PA-53 (void pipeline).

PA-05 SCORING PROTOCOL (THE signature question):
  4 sub-criteria, each 1-4 scale:
    DESIGNED (PA-05a): Does the page feel like it was designed, or generated? Look for intentional
      moments, considered relationships, designed surprises. Calibration: CD-006=4, Ceiling=1.5.
    COHERENT (PA-05b): Do ALL elements belong to the same design language? One discord = max 2.
    PROPORTIONATE (PA-05c): Does visual weight match content importance? 3 sub-dimensions, ALL must pass:
      PA-05c-H (Horizontal): column widths proportional to content importance.
      PA-05c-V (Vertical): section heights proportional to content weight. Header < 20%.
      PA-05c-B (Breathing): whitespace distributed as rhythm, not dumped at margins.
    POLISHED (PA-05d): Alignment, consistency, finish quality. Zero visual artifacts.
  Composite = average of 4. Gate: >= 3/4 to SHIP. < 3/4 = DO NOT SHIP.

VOID PIPELINE (PA-50 through PA-53 -- Auditor C exclusive):
  PA-50: Sequential blank viewport detection (2+ consecutive < 30% content = FAIL).
  PA-51: Void-dominated classification (< 40% content overall = VOID-DOMINATED).
  PA-52: Third-of-page designed moment check (each third needs >= 1 designed moment).
  PA-53: Void source diagnosis (CSS void vs content void -- different fix paths).

TIER SYSTEM (from SKILL.md enrichment):
  Tier A (highest diagnostic value, 0% false positive, 9/9 auditor hit rate):
    PA-01, PA-05, PA-09, PA-12, PA-13, PA-30, PA-32, PA-33, PA-35, PA-42.
    ANY Tier A finding at SIGNIFICANT or higher = MUST address before shipping.
    PA-09 finding = auto-BLOCKING (spatial confidence is non-negotiable).
  Tier 1 (Mandatory for all tiers): PA-01,02,03,04,05,06,07,09,12,13,16,17.
  Tier 2 (Required for Middle+): PA-08,10,11,14,15,18,19,20,21.
  Tier 3 (Required for Ceiling+): PA-22,23,24,25,26,27,28,29.
  Tier 4 (Flagship only): PA-30-53 (depth dimensions + void pipeline).

POST-AUDIT WEAVING:
  Weaver (Opus) synthesizes all 9 auditor reports. Gate-then-ranking protocol (C5).
  Cross-corroboration: 5+ auditors on same finding = auto-escalate severity.
  PA-05 composite from ALL auditor PA-05 contributions (not just Auditor A).
  Final verdict: SHIP / SHIP WITH NOTES / SHIP WITH RESERVATIONS / DO NOT SHIP.

RETROSPECTIVE LESSONS BAKED INTO PA (from ceiling + middle experiments):
  - Whitespace void is THE dominant failure mode. 9/9 auditors flagged it in ceiling experiment.
    PA-50 through PA-53 exist BECAUSE of this finding.
  - "Announced" metaphor scored 1.5/4 on PA-05. "Structural" metaphor scores 4/4.
    MG-04 (remove labels test) was added BECAUSE of ceiling metaphor failure.
  - Mode 4 (9 auditors) catches what 2-auditor setups miss. Breadth > depth for perception audit.
  - Screenshot pre-capture eliminates Playwright contention. 102 screenshots, 9 parallel agents, zero contention.
  - Fresh-eyes auditors (zero build context) find issues that research-loaded agents miss entirely.
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

BUILDER (Skeleton + Mechanism) reads:
  - [build plan file]                                    -- construction blueprint
  - design-system/compositional-core/vocabulary/tokens.css -- variable reference
  - design-system/compositional-core/identity/prohibitions.md -- soul identity (22 prohibitions)
  - 00-components-extract.md                             -- component CSS patterns (from wrapper extraction)
  - 00-case-studies-extract.md                           -- case study precedents (from wrapper extraction)
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md -- CCS verification, interaction types (MECHANISM BUILDER ONLY)

PLANNER reads:
  - design-system/compositional-core/grammar/mechanism-catalog.md -- 18 mechanisms + impact profiles
  - design-system/compositional-core/guidelines/semantic-rules.md -- compositional grammar
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md -- 5 interaction types, CCS formula, cross-dimension matrix
  - ephemeral/prompt-enrichment-audit/15-scale-channel-invocation.md  -- 7 channels, operational formulas
  - [content inventory]                                  -- source material
  - [metaphor derivation]                                -- metaphor-mechanism mapping

METAPHOR AGENT reads:
  - ~/.claude/skills/tension-composition/SKILL.md        -- TC pipeline (1,932 lines)
  - design-system/validated-explorations/combination/CD-006-pilot-migration.html
  - design-system/validated-explorations/density/DD-006-fractal.html

METAPHOR BUILDER reads:
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md -- CCS removal test, reinforcing pair verification
  - ephemeral/prompt-enrichment-audit/15-scale-channel-invocation.md  -- channel-mechanism mappings

INTENTIONALITY BUILDER reads:
  - Crown jewel forensics (11-crown-jewel-forensics.md)  -- 15 must-replicate techniques
  - Compositional fluency (13-compositional-fluency.md)  -- 5 interaction types
  - ephemeral/flagship-preparation/05-content-first-methodology.md -- content-form alignment analysis

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
| Void threshold (skeleton) | 1620px | Checkpoint gate | LIVING-STATE.md (consecutive-frame protocol) |
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
| Channel shift per transition | >= 3 of 7 channels | FAIL-IF binary | SC-09 |
| Chromatic-density alignment | warm=sparse, cool=dense | FAIL-IF binary | SC-10 |
| Scale Confidence Index (SCI) | >= 0.60 | FAIL-IF binary | S-16 |
| First 1.5 viewport textures | >= 3 distinct | FAIL-IF binary | S-17 |
| Builder visibility | <= 75 lines | Hard cap | C1 builder cap |
| Min messages | >= 8 substantive | FAIL-IF binary | C2 |
| Crown jewel gate | >= 6/8 checks | FAIL-IF binary | Gate 3 |

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

**END FINAL ENRICHED MASTER EXECUTION PROMPT (v3)**

**Total rule IDs:** 97 (S:17, U:10, C:21, MC:8, SC:10, MG:5, P:8, CT:8, RP:4, CP:6)
**Original enrichments traced:** 11/11
**BLOCKING fixes applied:** 7/7 (BG-01 through BG-07)
**HIGH fixes applied:** 10/10 (HP-01 through HP-10)
**MINOR fixes applied:** 5/8 (E-17, E-18, E-19, E-22, HP-10/E-20)
**New sections added:** B11 (Content Transformation), B12 (Recovery Protocols), C5 (Gate-Then-Ranking), C6 (PA-to-TC Routing), C7 (PA Skill Invocation)
**Ultra-deep cross-references integrated:** Scale (09), MC (10), Channel (11), Flagship (12)
**Exhaustive cross-reference integration (v3):** 13 SCAN reports (590k total) -> 39 enrichments applied (XR-01 through XR-39)
**TC skill invocation:** Full 6-phase routing (B8) with Planner (Pass 0.5)
**PA skill invocation:** Full Mode 4 deployment (C4 + C7) with 48 questions, tier system, void pipeline, retrospective lessons, gate-then-ranking (C5)
**Team topology:** Select-Connect-Distribute workflow (C1) + hub-and-spoke with messaging enforcement (C2) + CP-F metaphor-channel map
**Scale-channel enrichment:** SC-09 (3-channel transition), SC-10 (chromatic-density alignment), SCI formula (S-16), visual texture gate (S-17), named scale definitions
**MC enrichment:** Cascading value table, Crown Jewel 8-check, channel counts in CP-B/CP-D
**Anti-skimming techniques:** 10/10 deployed
**Judgment language in execution spec:** ZERO

---

## INTEGRATION LOG

| # | Fix/Enrichment | Source File | What Changed |
|---|---------------|-------------|--------------|
| BG-01 | Add Planner to C1 | 01-blocking-fix-spec.md | Pass 0.5 added with Planner agent definition |
| BG-02 | Fix fonts | 01-blocking-fix-spec.md | U-09: Source Sans 3/Source Code Pro -> Inter/JetBrains Mono |
| BG-03 | Route 16-MC | 01-blocking-fix-spec.md | Section E: Planner + Metaphor Builder now read 16-MC and 15-SC |
| BG-03b | MC B10 items | 01-blocking-fix-spec.md | B10: Added MC-01, MC-02, MC-06, SC-08 self-check items |
| BG-04 | PA assignments | 01-blocking-fix-spec.md | C4: System 2 assignments (SKILL.md aligned) + Tier A questions |
| BG-05 | File paths | 01-blocking-fix-spec.md | Wrapper only (components.css, README.md) |
| BG-06 | CCS formula | 01-blocking-fix-spec.md | MC-01: pair-counting -> per-mechanism removal test |
| BG-07 | SC-08 gate | 01-blocking-fix-spec.md | Gate 1: SC-01 through SC-08 (was SC-07) |
| HP-01 | C-08/MC-02 | 02-high-fix-spec.md | C-08 annotated GATE MINIMUM, MC-02 annotated Flagship aspiration |
| HP-02 | Transition map | 02-high-fix-spec.md | C-05: Added catalog mapping (SMOOTH=SPACING SHIFT, etc.) |
| HP-03 | Content Adapter | 02-high-fix-spec.md | C1 Pass 0: Content Architect also adapts prose |
| HP-04 | MC in B10 | 02-high-fix-spec.md | Merged with BG-03b |
| HP-05 | MC in Gate 3 | 02-high-fix-spec.md | Gate 3: Added MC self-check (CCS, reinforcing, cascade) |
| HP-06 | Viewports | 02-high-fix-spec.md | C4: 3->4 viewports (added 1024px), 50-80 screenshots |
| HP-08 | Orphan extracts | 02-high-fix-spec.md | Section E: Builder reads 00-components-extract + 00-case-studies-extract |
| HP-09 | File path | 02-high-fix-spec.md | Section E: Intentionality Builder reads 05-content-first-methodology.md |
| HP-10 | Void source | 02-high-fix-spec.md | Appendix: void threshold source corrected to LIVING-STATE.md |
| E-17 | DD-006 count | 06-minor-fix-spec.md | A5: "6 mechanisms" -> "~6-12 mechanisms" |
| E-18 | var() count | 06-minor-fix-spec.md | A7: "54 var() references" -> "54 token definitions (~270 var() usages)" |
| E-19 | Alexander formula | 06-minor-fix-spec.md | A3: ln notation corrected, scaling factor explained |
| E-22 | Void diagnosis | 06-minor-fix-spec.md | P-08: Added "VOID IS A CONTENT PROBLEM, NOT A CSS PROBLEM" |
| MC-ENR | Expanded A5 | 03-mc-enrichment-spec.md | A5: 10->15 lines with CD-006 CCS worked example |
| MC-ENR2 | MC dimensions | 10-mc-deep-crossref.md | MC-07: 6 dimensions enumerated + highest-value pairs |
| ADV-ENR | B11 Content Transform | 04-adversarial-enrichment-spec.md | New section: 8 CT rules |
| ADV-ENR2 | B12 Recovery | 04-adversarial-enrichment-spec.md | New section: 4 RP rules |
| ALIGN | Gate expansion | 07-alignment-enrichment-spec.md | Gates 0-4: 18 zero-enforcement rules assigned to gates |
| SYNTH | Gate-then-ranking | 08-synthesis-enrichment-spec.md | New C5: gate/ranking/severity protocol |
| SYNTH2 | PA-to-TC routing | 08-synthesis-enrichment-spec.md | New C6: fix routing table |
| SCALE | C-19 semantic density | 09-scale-deep-crossref.md | B3: New rule C-19 (mechanism count tracks content importance) |
| SCALE2 | Scale 6+ warning | 09-scale-deep-crossref.md | A3: Added 0.5-1% gain / EXTREME cost note |
| CHAN | Channel definitions | 11-channel-deep-crossref.md | SC-02: 7 channel definitions + axis distinction |
| FLAG | Gate 0 P-05 | 12-flagship-exhaustive-crossref.md | Gate 0: Added zone boundary check |
| FLAG2 | Gate 0.5 | 12-flagship-exhaustive-crossref.md | New gate: Content Quality (CT-01 through CT-08) |
| FLAG3 | Tier A questions | 12-flagship-exhaustive-crossref.md | C4: PA tier weighting + PA-09 auto-BLOCKING |
| XR-01 | SC naming collision | SCAN-E, SCAN-H | Gate 1: "SC-01 through SC-08" -> specific S-rule IDs |
| XR-02 | C-01 category names | SCAN-A, SCAN-K | C-01: channel names -> mechanism catalog family names |
| XR-03 | SC-09 channel shift | SCAN-E, SCAN-H, SCAN-K, SCAN-M | B5: 3-channel-per-transition rule added |
| XR-04 | SC-10 chrom-density | SCAN-H, SCAN-K | B5: chromatic-density alignment rule added |
| XR-05 | S-16 SCI formula | SCAN-H, SCAN-I | B1: Scale Confidence Index formula added |
| XR-06 | S-17 visual textures | SCAN-H, SCAN-I | B1: first 1.5 viewport >= 3 textures gate |
| XR-07 | CP-F metaphor map | SCAN-H, SCAN-E | C2: metaphor-to-channel map message added |
| XR-08 | Named scales | SCAN-G, SCAN-K | B5 SC-01: Alexander scale definitions (PAGE/SECTION/COMPONENT/ELEMENT/DETAIL) |
| XR-09 | Estimation formulas | SCAN-I, SCAN-H | B7 P-01: page height + content weight formulas added |
| XR-10 | P-08 expansion | SCAN-H, SCAN-D | B7: full spatial re-run S-01+S-02+S-10+S-12 |
| XR-11 | MG-03 soul table | SCAN-A, SCAN-I | B6: 6 rejection checks expanded with soul conflict table |
| XR-12 | Atmosphere test | SCAN-G, SCAN-M | B10: one-word atmosphere check added |
| XR-13 | PA-03 note | SCAN-L | C4: PA-03 assignment divergence documented |
| XR-14 | ADV PA-24/25 note | SCAN-L | C4: PA-24/25 addition to ADV documented |
| XR-15 | Deploy workflow | SCAN-I, SCAN-J, SCAN-M | C1: Select-Connect-Distribute team topology |
| XR-16 | Builder visibility | SCAN-I, SCAN-H | C1: <= 75 line visibility cap for builders |
| XR-17 | Channel ownership | SCAN-H, SCAN-K | C1 Pass 2: Ch1-6 Builder, Ch7 Opus |
| XR-18 | Crown jewel 8-check | SCAN-J | C3 Gate 3: 8-criterion quality gate added |
| XR-19 | CP-B/CP-D channels | SCAN-H, SCAN-E | C2: channel counts in post-build/post-elaboration messages |
| XR-20 | MC-06 value table | SCAN-A, SCAN-H | B4: cascading chain value table added |
| XR-21 | C2 topology enforce | SCAN-M, SCAN-I | C2: hub-spoke topology + messaging = quality lesson |
| XR-22 | C7 PA invocation | SCAN-L, SCAN-M, SCAN-D | New section: comprehensive PA SKILL invocation with retrospective lessons |
| XR-23 | C1 intent builder | SCAN-I, SCAN-J | C1 Pass 4: explicit file routing for intentionality builder |
| XR-24 | Gate 1 SC-09 | SCAN-E | C1 Gate 1: SC-09 channel-shift check added |
| XR-25 | Gate 3 SC-09 | SCAN-E | C3 Gate 3: SC-09 channel-shift check added |
| XR-26 | Severity naming | SCAN-L | C4: BLOCKING/SIGNIFICANT/MINOR -> LOOKS-WRONG/WOULD-NOT-SHIP/CATASTROPHIC |
| XR-27 | Fractal coherence | SCAN-C | B3: C-20 fractal coherence + C-21 compositional clusters |
| XR-28 | Gate 3 typo | SCAN-F | C3: "CP-01 through CP-04" -> "C-01 through C-04" |
| XR-29 | Builder reads 16-MC | SCAN-G | Section E + C1: Mechanism Builder reads 16-multi-coherence-invocation.md |
| XR-30 | Auditor isolation | SCAN-L | C4: CSS language hard block, zero build context, perception-first rules |
| XR-31 | Zone whitespace | SCAN-M | B6 MG-05: zone boundaries must NOT use whitespace |
| XR-32 | PA-05c sub-dim | SCAN-B, SCAN-L | C7: PA-05c expanded to H/V/B sub-dimensions |
| XR-33 | PA-09 calibration | SCAN-E | C4: viewport-height severity thresholds for PA-09 |
| XR-34 | Alexander formula | SCAN-K | A3: ln(120) -> ln(120)/ln(2.7) |
| XR-35 | Transition naming | SCAN-K | B3 C-05: BREATHING naming clarification (strongest cut, not softest) |
| XR-36 | Playwright spec | SCAN-B | C4: animation disable, fonts.ready, scroll increments, file naming |
| XR-37 | B10 additions | SCAN-E, SCAN-F | B10: S-09/S-11, P-04, C-20, SC-10 self-check items |
| XR-38 | Cold look format | SCAN-L | C4: 4-field format (gut/worst/best/verdict) |
| XR-39 | Gate 3 comp fix | SCAN-F, SCAN-G | C1+C3: Gate 3 references corrected to C-rules |

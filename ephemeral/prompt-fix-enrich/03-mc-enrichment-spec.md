# Multi-Coherence Layer Enrichment Specification

**Author:** mc-enrichment-agent-v2 (Opus 4.6)
**Date:** 2026-02-17 (v2 revision)
**Purpose:** Bring MC coverage from ~65% to 90%+ by resolving all 7 SIGNIFICANT and 1 BLOCKING discrepancy identified in the ultra-deep coherence cross-reference (Report 15).
**Sources Read:**
- `16-multi-coherence-invocation.md` (951 lines, full MC operational guide)
- `13-compositional-fluency.md` (670 lines, 5 interaction types, CCS, vocabulary vs composition)
- `15-ultra-deep-coherence-crossref.md` (709 lines, 19 discrepancies found)
- `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines, current prompt)

---

## DELIVERABLE 1: EXPANDED MC CONVICTION TEXT (Section A5 replacement)

**Current A5 is 10 lines.** Replace with 15 lines that include the CD-006 worked example of mechanism interaction. This addresses the cross-ref finding that A5 names interaction types but never SHOWS one working.

**INSERT INTO SECTION A5 (replacing current lines 56-66):**

```
## A5. COMPOSITIONAL FLUENCY (15 lines)

Mechanisms interact through 5 types:

- REINFORCING: Multiple mechanisms encode same meaning through different CSS channels
- MODULATING: One mechanism controls another's CSS values depending on container state
- RESPONDING: One mechanism's visual weight creates a condition the next mechanism answers
- CONTRASTING: Presence in one zone makes deliberate absence in another meaningful
- CASCADING: Chain of 3+ mechanisms governed by a shared trajectory (all co-vary)

CD-006 WORKED EXAMPLE -- why these interactions produce 39/40:
In CD-006's 4-act density arc, border-weight (#1) + zone backgrounds (#7) + spacing
compression (#4) ALL track the same CRESCENDO trajectory. Act 1: 1px borders + warm
cream + 64px padding. Act 3: 4px borders + neutral white + 32px padding. All three
channels say "the page is getting denser" SIMULTANEOUSLY. Removing spacing compression
makes zone backgrounds feel arbitrary (CCS impact: 4 other mechanisms affected = 0.27).
Removing zone backgrounds makes borders feel decorative (CCS impact: 3 affected = 0.20).
The mechanisms NEED each other -- that mutual dependency IS composition. The Ceiling
experiment deployed 14 mechanisms with CCS ~0.05 and scored DO NOT SHIP. CD-006 deployed
16 with CCS ~0.55 and scored 39/40. Coupling, not count.
```

---

## DELIVERABLE 2: CCS WORKED EXAMPLE (for MC-01)

**This addresses D-09 (CCS formula mismatch) and D-10 (no test method).** Provides the CORRECT formula from the source, a step-by-step 6-mechanism calculation, and pass/fail interpretation.

**INSERT AS NEW SUBSECTION after MC-01 in B4, OR add to Planner's reading material:**

```
CCS CALCULATION PROTOCOL (MC-01 operational guidance):

CORRECT FORMULA:
  CCS per mechanism = (count of OTHER mechanisms whose perceived meaning CHANGES
                       when THIS mechanism's CSS is deleted) / (total deployed - 1)
  CCS for page = average CCS across ALL deployed mechanisms

WORKED EXAMPLE -- 6-mechanism page:

Deployed mechanisms: #1 (border-weight), #4 (spacing compression), #5 (dense/sparse
alternation), #7 (zone backgrounds), #13 (dark header), #16 (drop cap).

REMOVAL TEST (for each mechanism, delete its CSS, count affected others):

  Remove #1 (border-weight):
    #4 spacing compression: meaning unchanged (still controls padding). NO.
    #5 dense/sparse: meaning unchanged (still alternates sections). NO.
    #7 zone backgrounds: lose depth encoding partner. Backgrounds now
       decorative, not semantic. YES.
    #13 dark header: unchanged (header is independent). NO.
    #16 drop cap: unchanged (responds to header, not borders). NO.
    CCS for #1 = 1/5 = 0.20

  Remove #4 (spacing compression):
    #1 border-weight: loses co-variation partner. Borders now arbitrary. YES.
    #5 dense/sparse: loses padding rhythm. Dense sections not denser. YES.
    #7 zone backgrounds: loses density tracking partner. YES.
    #13 dark header: unchanged. NO.
    #16 drop cap: unchanged. NO.
    CCS for #4 = 3/5 = 0.60

  Remove #5 (dense/sparse alternation):
    #1 border-weight: loses rhythmic backbone context. YES.
    #4 spacing: loses alternation structure to track. YES.
    #7 zone backgrounds: loses rhythm to encode. YES.
    #13 dark header: unchanged. NO.
    #16 drop cap: unchanged. NO.
    CCS for #5 = 3/5 = 0.60

  Remove #7 (zone backgrounds):
    #1 border-weight: loses color co-variation partner. YES.
    #4 spacing: unchanged (still compresses). NO.
    #5 dense/sparse: loses chromatic encoding. YES.
    #13 dark header: unchanged. NO.
    #16 drop cap: unchanged. NO.
    CCS for #7 = 2/5 = 0.40

  Remove #13 (dark header):
    #1: unchanged. NO. #4: unchanged. NO. #5: unchanged. NO. #7: unchanged. NO.
    #16 drop cap: now feels arbitrary (no weight to respond to). YES.
    CCS for #13 = 1/5 = 0.20

  Remove #16 (drop cap):
    #1: unchanged. NO. #4: unchanged. NO. #5: unchanged. NO. #7: unchanged. NO.
    #13 dark header: header is self-contained. NO.
    CCS for #16 = 0/5 = 0.00

PAGE CCS = average(0.20, 0.60, 0.60, 0.40, 0.20, 0.00) = 2.00/6 = 0.33

INTERPRETATION:
  0.33 >= 0.30 threshold = PASS (Flagship gate cleared)
  0.33 is in 0.30-0.50 range = "Coupled (compositional)" = Ceiling tier
  To reach Flagship range (0.50+), make #13 and #16 participate in
  the density cascade rather than operating as an isolated weight-response pair.

PASS/FAIL QUICK REFERENCE:
  CCS < 0.15: VOCABULARY ONLY. Mechanisms are wallpaper. FAIL for Ceiling+.
  CCS 0.15-0.29: WEAKLY COUPLED. Some pairs interact. FAIL for Flagship.
  CCS 0.30-0.49: COUPLED. Mechanism clusters exist. PASS for Flagship gate.
  CCS 0.50-0.69: STRONGLY COUPLED. Most mechanisms load-bearing. Flagship target.
  CCS 0.70+: FULLY COMPOSED. Crown jewel territory.

NOTE ON CCS = 0 MECHANISMS:
  Some mechanisms (e.g., #17 code blocks, #18 data tables) serve functional
  content needs and legitimately have CCS = 0. They are INDEPENDENT by design.
  A page with 10 coupled mechanisms (avg CCS 0.50) and 4 independent mechanisms
  (CCS 0.00) has page CCS = (10*0.50 + 4*0.00) / 14 = 0.36 = PASS.
  Independent mechanisms are NOT a defect if they serve content needs. But
  >= 8 of deployed mechanisms MUST participate in at least 1 interaction type.
  If > 50% of mechanisms are independent, the page is vocabulary, not composition.
```

---

## DELIVERABLE 3: INTERACTION TYPE OPERATIONAL DEFINITIONS (MC-02 through MC-06)

**This addresses D-02 through D-08 (no verification methods for any interaction type).** Each type gets: definition, CSS property example, verification question, concrete crown jewel example.

**INSERT AS APPENDIX TO B4 or into Planner/Mechanism Builder reading material:**

```
MC INTERACTION TYPE OPERATIONAL DEFINITIONS

========================================
MC-02: REINFORCING (>= 3 pairs)
========================================

DEFINITION: Two mechanisms encode the SAME semantic dimension through DIFFERENT
CSS properties. When one changes value, the reader perceives a single atmospheric
shift, not two property changes.

CSS PROPERTY EXAMPLE:
  Mechanism #1 (border-weight) + Mechanism #7 (zone backgrounds):
  .zone-deep    { border-left: 4px solid var(--color-text); background: var(--color-zone-sparse); }
  .zone-shallow { border-left: 1px solid var(--color-border); background: var(--color-zone-dense); }
  Both encode "depth" -- one through thickness, one through color temperature.

VERIFICATION QUESTION ("How do I know I have one?"):
  Pick a mechanism pair. Remove mechanism A's CSS entirely. Does mechanism B's
  perceived MEANING change (not just its appearance)? If zone backgrounds lose
  their "depth" encoding when borders are removed = REINFORCING. If backgrounds
  still look fine = INDEPENDENT.

CROWN JEWEL EXAMPLE (CD-006):
  Border-weight (#1) + zone backgrounds (#7) + spacing compression (#4) form a
  3-way reinforcing cluster. All three encode the 4-act density CRESCENDO.
  Act 1: 1px + warm cream + 64px = sparse/orient.
  Act 3: 4px + neutral white + 32px = dense/build.
  Removing ANY one makes the other two feel arbitrary.

========================================
MC-03: MODULATING (>= 2 chains)
========================================

DEFINITION: One mechanism's state (typically section-level) ADJUSTS another
mechanism's CSS values (typically component-level). The outer mechanism reaches
INSIDE the inner mechanism and changes its parameters.

CSS PROPERTY EXAMPLE:
  Mechanism #5 (dense/sparse alternation) modulates Mechanism #2 (2-zone DNA):
  .section--dense .callout  { padding: 16px 20px; margin: 12px 0; }
  .section--sparse .callout { padding: 24px 32px; margin: 24px 0; }
  Same component type, DIFFERENT values depending on container state.

VERIFICATION QUESTION ("How do I know I have one?"):
  Find the same component type (e.g., callout) in two different density zones.
  Compare their padding, margin, and font-size values. Are they DIFFERENT?
  If yes = MODULATING. If identical regardless of container = INDEPENDENT.

CROWN JEWEL EXAMPLE (DD-006):
  Dense/sparse alternation (#5) modulates 2-zone component DNA (#2).
  Callouts in dense sections: 16px padding, 12px margin, 0.6875rem label.
  Callouts in sparse sections: 24px padding, 24px margin, 0.75rem label.
  The section's density PROPAGATES into the component's internal structure.

========================================
MC-04: RESPONDING (>= 2 sequences)
========================================

DEFINITION: One mechanism's visual weight creates a perceptual condition that
the NEXT mechanism manages. The response bridges two visual registers (heavy
to light, monumental to conversational, dense to sparse).

CSS PROPERTY EXAMPLE:
  Mechanism #13 (dark header) -> Mechanism #16 (drop cap):
  header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); }
  .drop-cap::first-letter { font-size: 3.5em; color: var(--color-primary); }
  The drop cap's red ECHOES the header's red border, stepping down from
  monumental weight to body text.

VERIFICATION QUESTION ("How do I know I have one?"):
  Remove the PRECEDING section entirely. Does the responding mechanism still
  feel JUSTIFIED in its position? If the drop cap feels arbitrary without the
  dark header = RESPONDING. If it feels fine alone = INDEPENDENT.

CROWN JEWEL EXAMPLE (CD-006):
  Dark header creates near-black monumental weight. Drop cap responds with
  3.5em serif in --color-primary (echoing header's 3px red border). Without
  the header, the drop cap is decorative. With it, the drop cap is the
  stepping stone from high-intensity to conversational body text.

========================================
MC-05: CONTRASTING (>= 2 deployments)
========================================

DEFINITION: One mechanism's deployment in some zones makes its ABSENCE in
other zones semantically meaningful. The rhythm of presence/absence IS the
composition.

CSS PROPERTY EXAMPLE:
  Mechanism #7 (zone backgrounds) deployed selectively:
  .zone-1 { background: var(--color-zone-sparse); }
  .zone-2 { background: transparent; }  /* DELIBERATE absence */
  .zone-3 { background: var(--color-zone-dense); }
  .zone-4 { background: transparent; }  /* DELIBERATE absence */
  Transparent zones become "breathing spaces" BECAUSE adjacent zones have color.

VERIFICATION QUESTION ("How do I know I have one?"):
  For a mechanism absent from zone X, can you write a 1-sentence justification
  for WHY it is absent? "Zone 2 is transparent because it is a breathing pause
  between the anchoring zones 1 and 3" = CONTRASTING. If you cannot justify
  the absence = ACCIDENTAL OMISSION (not contrasting).

CROWN JEWEL EXAMPLE (CD-006):
  Drop cap (#16) deployed ONLY in Section 1 (opening ceremony). Deployment
  ratio: 1/8 = 0.125. Its absence in Sections 2-8 is meaningful: S1 is the
  ceremonial entry, not a recurring decoration. The single deployment creates
  asymmetry that gives S1 special status. If drop cap appeared in every
  section, it would be wallpaper (deployment ratio = 1.0 = zero contrast).

ANTI-PATTERN: Mechanism deployed in ALL sections (deployment ratio = 1.0).
No contrast exists. Reduce to selective deployment.

========================================
MC-06: CASCADING (>= 1 chain of 3+ mechanisms)
========================================

DEFINITION: A chain of 3+ mechanisms where ALL mechanisms' values are governed
by a shared compositional trajectory (density arc, weight gradient, warmth
progression). The trajectory is the COMPOSER; the mechanisms are instruments.

CSS PROPERTY EXAMPLE:
  Chain: #12 (progressive disclosure) -> #7 (zone backgrounds) -> #4 (spacing) -> #1 (borders)
  VALUE TABLE:
    | Stage    | #12 Disclosure | #7 Background     | #4 Padding | #1 Border |
    |----------|---------------|--------------------|-----------:|----------:|
    | Orient   | overview      | warm cream (sparse)|       64px |       1px |
    | Learn    | expanding     | tan (breathing)    |       48px |       3px |
    | Build    | full detail   | white (dense)      |       32px |       4px |
    | Ship     | summary       | tan (breathing)    |       48px |       3px |

  ALL four mechanisms change in the SAME direction at each stage.

VERIFICATION QUESTION ("How do I know I have one?"):
  Can you describe the cascade in ONE SENTENCE that is NOT a list of mechanism
  names? "The page tightens from orient to build, then releases" = CASCADE.
  "Padding decreases, backgrounds shift, and borders thicken" = VOCABULARY
  (this is a list of changes, not a trajectory description).

CROWN JEWEL EXAMPLE (CD-006):
  4-act density cascade: progressive disclosure establishes the density
  trajectory. Zone backgrounds follow. Spacing compression tightens in
  parallel. Border-weight thickens correspondingly. Change the trajectory
  and ALL four mechanisms must adjust. The density arc GOVERNS the mechanisms.

VERIFICATION: Build a VALUE TABLE. If all columns move in the same direction
at each row = CASCADE. If columns move independently = VOCABULARY.
```

---

## DELIVERABLE 4: BUILDER SELF-CHECK MC ITEMS (for B10)

**This addresses D-17 (builder self-check has ZERO MC items).** These 5 items run in ~2 minutes and catch the worst cases of vocabulary-only deployment.

**APPEND TO B10 (after existing 12 items, before the SendMessage instructions):**

```
MULTI-COHERENCE SELF-CHECK (add to B10, items 13-17):

[ ] MC-CHECK-1: Pick 2 mechanism pairs. Do they encode the SAME semantic
    dimension? For each pair: mentally remove mechanism A. Does mechanism B's
    meaning change? If YES for at least 1 pair = reinforcement exists.
[ ] MC-CHECK-2: Find one component type (e.g., callout) in a dense section
    AND in a sparse section. Are its padding/margin/font-size values DIFFERENT
    in the two locations? If YES = modulation exists. If IDENTICAL = FAIL.
[ ] MC-CHECK-3: Look at the first element after the dark header. Does it
    ACKNOWLEDGE the header's visual weight (color echo, scale match, dramatic
    opening)? If YES = response exists. If it ignores the header = FAIL.
[ ] MC-CHECK-4: Name 1 mechanism that is NOT deployed in at least 1 section.
    Can you write a 1-sentence justification for WHY it is absent there?
    If YES = deliberate contrast. If NO justification = accidental omission.
[ ] MC-CHECK-5: List all section padding values. Are there at least 3 DISTINCT
    values? Do they form a contour (wide-narrow-wide, sparse-dense-sparse)?
    If YES = rhythmic cascade. If all identical = METRONOMIC FAIL.

ATMOSPHERE TEST (10 seconds):
[ ] Can you describe the page's feel in ONE WORD that is NOT a mechanism name?
    ("Tightening." "Deepening." "Warming." "Gathering." "Descending.")
    If you can only say "it uses 14 mechanisms" = vocabulary, not composition.
    REVISE compositional clusters before writing file.

>>> If 4+ of MC-CHECK-1 through MC-CHECK-5 pass: proceed to file write.
>>> If < 4 pass: restructure at least 2 mechanism pairs to encode a SHARED
    semantic before writing file. <<<
```

---

## DELIVERABLE 5: GATE 3 MC ENFORCEMENT (for C3)

**This addresses D-16 (no per-agent MC gates in coordination spec).** Gate 3 fires after Pass 2 (mechanism deployment). This is the optimal checkpoint for MC verification because all mechanisms are placed but intentionality has not yet been added.

**MODIFY Gate 3 line in C3 (currently line 354):**

Current:
```
Gate 3 (Post-Pass-2): CP-01 through CP-04. Spatial re-check (regression detection).
```

Replace with:
```
Gate 3 (Post-Pass-2): CP-01 through CP-04. Spatial re-check. PLUS MC checks:
  MC-G3-01: CCS removal test on 5 mechanisms. Average CCS >= 0.30. FAIL = restructure clusters.
  MC-G3-02: >= 2 reinforcing pairs documented with shared semantic named.
  MC-G3-03: >= 1 modulating chain verified (same component, different zones, different values).
  MC-G3-04: Value table for primary cascade shows all mechanisms co-varying across
             all stages. Format: one column per mechanism, one row per stage. All columns
             must move in the SAME direction at each row. Table MUST be a written artifact,
             not a mental check.
  MC-G3-05: At least 1 mechanism with deliberate absence documented and justified.
             Format: mechanism name, absent-from zone, 1-sentence justification.
  (MC-G3-01 through MC-G3-05 are BINARY. 4/5 pass = PROCEED. < 4 = FIX CYCLE, max 2 attempts.)
```

**ADDITIONALLY, add MC gate to Gate 1 (Post-Pass-1 skeleton):**

Add to Gate 1:
```
  MC-G1-01: Section padding values have >= 3 distinct values. (Anti-metronome at skeleton stage.)
  MC-G1-02: Zone backgrounds co-vary with spacing direction (warmer/darker as padding decreases).
```

**ADDITIONALLY, add MC gate to Planner checkpoint (Pass 0 output):**

Add to Gate 0:
```
  MC-G0-01: Plan documents >= 3 reinforcing pairs with shared semantic named for each.
  MC-G0-02: Plan includes >= 1 cascade value table showing 3+ mechanisms co-varying.
  MC-G0-03: Plan organizes mechanisms by COMPOSITIONAL CLUSTERS, not individual deployments.
```

---

## DELIVERABLE 6: CROSS-DIMENSION COHERENCE GUIDANCE (for MC-07)

**This addresses D-11 (15-pair matrix unreachable) and D-12 (6 dimensions not enumerated).** Provides the 6 dimensions, all 15 pairs, priority ranking, and the 10 highest-value pairs to target first.

**INSERT AS APPENDIX or add to Planner's reading material:**

```
MC-07 OPERATIONAL GUIDE: CROSS-DIMENSION COHERENCE

THE 6 DESIGN DIMENSIONS:
  1. SPATIAL:      Layout topology, density rhythm, grid structure (#5, #6, #15)
  2. TEMPORAL:     Progressive disclosure, pacing, scroll-linked revelation (#8, #12)
  3. CHROMATIC:    Zone backgrounds, accent color encoding, warmth gradients (#7, #9)
  4. TYPOGRAPHIC:  Scale jumping, font family shifts, weight modulation (#11, #16)
  5. RHYTHMIC:     Border-weight gradients, spacing compression, alternation (#1, #4, #5)
  6. SEMANTIC:     2-zone component DNA, border-left signaling, data tables (#2, #10, #17, #18)

THE 15 PAIRS -- RANKED BY VALUE (high to low):

TIER 1 -- HIGHEST VALUE (target these first, 6 pairs):

  PAIR 1: SPATIAL x CHROMATIC
    Coherent state: Dense zones have warmer/darker backgrounds; sparse zones lighter.
    Verification: "Do zone backgrounds get warmer as spacing compresses?"
    CSS test: .dense { padding: 16px; background: var(--zone-dense); }
              .sparse { padding: 64px; background: var(--zone-sparse); }
    PRIORITY: CRITICAL. This pair defines the page's atmospheric foundation.

  PAIR 2: SPATIAL x RHYTHMIC
    Coherent state: Borders thicken in denser zones; borders thin in sparser zones.
    Verification: "Do borders track the spacing compression?"
    CSS test: .dense { border-left: 4px; padding: 16px; }
              .sparse { border-left: 1px; padding: 64px; }
    PRIORITY: CRITICAL. This pair creates the depth encoding backbone.

  PAIR 3: CHROMATIC x RHYTHMIC
    Coherent state: Accent colors on borders match zone background families.
    Verification: "Do accent colors respect the zone temperature?"
    CSS test: Info callouts (blue accent) in cool zones. Essence callouts
              (warm accent) in warm zones.
    PRIORITY: HIGH. Unifies color and structure into single atmospheric register.

  PAIR 4: SPATIAL x TYPOGRAPHIC
    Coherent state: Dense zones have tighter line-height, smaller font-size.
    Verification: "Does type loosen as space opens up?"
    CSS test: .dense p { line-height: 1.5; font-size: 0.9rem; }
              .sparse p { line-height: 1.8; font-size: 1rem; }
    PRIORITY: HIGH. Typography is the most perceptible dimension after color.

  PAIR 5: SPATIAL x TEMPORAL
    Coherent state: Progressive disclosure deepens as spatial density increases.
    Verification: "Do later, denser sections reveal more information?"
    CSS test: Act 1 shows overview. Act 3 shows full technical detail.
    PRIORITY: HIGH. Creates the pedagogical-density alignment.

  PAIR 6: TYPOGRAPHIC x RHYTHMIC
    Coherent state: Type weight and border weight co-vary.
    Verification: "Do text weight and border weight move in the same direction?"
    CSS test: Heavy border (4px) sections use 600-weight labels.
              Light border (1px) sections use 400-weight body.
    PRIORITY: HIGH. Weight coherence across typographic and structural channels.

TIER 2 -- MEDIUM VALUE (strengthen after Tier 1 is solid, 5 pairs):

  PAIR 7: CHROMATIC x TYPOGRAPHIC
    Coherent state: Dark backgrounds use light text with different weight.
    Verification: "Does font treatment shift with background warmth?"
    CSS test: Dark header: color: var(--color-background).
              Warm cream zone: font-family: var(--font-display) for ceremony.

  PAIR 8: CHROMATIC x TEMPORAL
    Coherent state: Color temperature tracks the argument arc.
    Verification: "Does color warmth map to the pedagogical arc?"
    CSS test: Act 1: warm cream (opening). Act 3: neutral (climax). Act 4: warm (resolution).

  PAIR 9: TEMPORAL x RHYTHMIC
    Coherent state: Progressive disclosure stages have increasing border weight.
    Verification: "Do borders thicken as disclosure progresses?"
    CSS test: Phase 1: 1px borders. Phase 3: 4px borders. Phase 4: 3px borders.

  PAIR 10: SPATIAL x SEMANTIC
    Coherent state: Components in dense zones have compressed 2-zone DNA.
    Verification: "Do callouts breathe more in sparse sections?"
    CSS test: Dense callout: 4px label gap. Sparse callout: 8px label gap.

  PAIR 11: TYPOGRAPHIC x TEMPORAL
    Coherent state: Type scale contracts during dense/climax, expands during resolution.
    Verification: "Does heading size track the density trajectory?"
    CSS test: Act 1 h2: generous margin. Act 3 h2: compressed margin.

TIER 3 -- LOWER VALUE (natural if Tiers 1-2 are strong, 4 pairs):

  PAIR 12: CHROMATIC x SEMANTIC
    Coherent state: Color encoding of priority matches zone weight.
    Verification: "Do high-priority items appear in zones with matching visual weight?"

  PAIR 13: TYPOGRAPHIC x SEMANTIC
    Coherent state: 2-zone DNA uses consistent typographic split.
    Verification: "Is label/body typographic split consistent across all components?"

  PAIR 14: TEMPORAL x SEMANTIC
    Coherent state: Component variety increases during learning, decreases in resolution.
    Verification: "Do more component types appear in learning sections?"

  PAIR 15: RHYTHMIC x SEMANTIC
    Coherent state: Border-weight on components matches semantic priority.
    Verification: "Do more important callouts have contextually thicker borders?"

TARGET STRATEGY:
  Flagship gate requires >= 10 of 15 pairs actively coupled.
  Strategy: Lock Tier 1 (6 pairs) first. These are the atmospheric foundation.
  Then strengthen Tier 2 (5 pairs). That gives 11/15 = PASS with margin.
  Tier 3 pairs typically emerge naturally if Tiers 1-2 are solid.

BINARY CHECK: At each section boundary, count how many dimension pairs BOTH
change in a related direction. If >= 3 pairs change together at each boundary
across 4+ boundaries = cross-dimension coherence is strong.
```

---

## ADDITIONAL FIXES (addressing remaining discrepancies)

### Fix for D-01: C-08 vs MC-02 count contradiction

**Current state:** C-08 says >= 2 reinforcing pairs. MC-02 says >= 3. Both are FAIL-IF binary.

**Resolution:** Unify. C-08 is the compositional gate (Ceiling minimum). MC-02 is the Flagship aspiration. Make this explicit:

```
C-08. >= 2 reinforcing pairs (same semantic, different CSS channels). FAIL-IF binary. [Ceiling gate]
MC-02. >= 3 reinforcing pairs for Flagship target. [Flagship aspiration -- 2 is gate, 3 is target]
```

Update parameter table entry (line 476):
```
| Reinforcing pairs | >= 2 gate (FAIL-IF) / >= 3 Flagship target (aspirational) | Tiered | MC-02, C-08 |
```

### Fix for D-03: Route 16-multi-coherence-invocation.md to agents

**MODIFY Section E (Reference Library):**

Add to PLANNER reads:
```
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md  -- MC operational guide (5 types, CCS worked example, cross-dimension matrix, verification protocols)
```

Add to MECHANISM BUILDER reads:
```
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md  -- MC verification protocols (Sections 2-3 only: interaction types + CCS)
```

Add to EMBEDDED AUDITOR reads:
```
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md  -- CCS formula + thresholds + cross-dimension matrix (Sections 3, 6 only)
```

Add to INTENTIONALITY BUILDER reads:
```
  - ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md  -- Fractal coherence protocol + self-reference detection (Sections 4-5 only)
```

### Fix for D-05: MC-04 "triggers" language

**Current:** "MC-04. >= 2 responding sequences (mechanism A's output triggers mechanism B)."
**Replace:** "MC-04. >= 2 responding sequences (mechanism A's visual weight creates a condition mechanism B answers)."

### Fix for D-09: CCS formula correction

**Current (line 195):**
```
CCS = (mechanism_pairs_with_interaction / total_possible_pairs)
```

**Replace with:**
```
CCS per mechanism = (mechanisms whose meaning changes when THIS one is removed) / (total - 1)
CCS for page = average across all deployed mechanisms. See CCS WORKED EXAMPLE.
```

### Fix for D-13: Remove duplicate MC-08/C-11

**Keep C-11** (it appears in compositional section, natural location for spacing variation rule).
**Remove MC-08** from B4 and renumber MC rules to MC-01 through MC-07 (7 rules).
**Alternatively:** Keep MC-08 but add the CONTOUR requirement that distinguishes it from C-11:
```
MC-08. Anti-metronome CONTOUR: section padding values form a describable shape
       (e.g., "opening wide, narrowing to climax, releasing to close"). >= 3 distinct
       values AND contour maps to density trajectory. (C-11 checks count only; MC-08
       checks compositional alignment.)
```

### Fix for D-14: Scale requirement reconciliation

**Current:** SC-01 says "Preferred 2-3 for flagship." Source says "5/5 required."

**Resolution:** The enriched prompt's 2-3 is the empirically safer target. Keep it but add escalation path:
```
SC-01. Target 2-3 scales with DEEP coherence. If all scales pass spatial gates
       (S-01, S-02, S-12), MAY extend to 4-5. PA-05 > scale count. Non-negotiable.
       FORBIDDEN: targeting 4+ scales before 2-3 are spatially sound.
```

### Fix for D-19: Transition type naming

**Add mapping note to C-05 or as footnote:**
```
Transition type mapping (prompt names / mechanism-catalog names):
  SMOOTH (48px+1px)   = SPACING SHIFT (catalog)
  BRIDGE (64px+bg+prose) = CHECKPOINT (catalog)
  BREATHING (80px+3px) = HARD CUT (catalog)
The prompt names are authoritative for execution. Catalog names for reference only.
```

---

## SUMMARY OF ALL ENRICHMENT INSERTIONS

| Deliverable | Target Location | Lines Added | Discrepancies Resolved |
|-------------|----------------|-------------|----------------------|
| 1. Expanded A5 conviction | Section A5 (replace lines 56-66) | +5 net | Conviction depth |
| 2. CCS worked example | After MC-01 in B4 or Planner appendix | +55 | D-09, D-10 |
| 3. Interaction type definitions | Appendix or Planner/Builder reading | +120 | D-02, D-04, D-05, D-06, D-07, D-08 |
| 4. Builder MC self-check | B10 (append items 13-17) | +20 | D-17 |
| 5. Gate 3 MC enforcement | C3 (expand Gate 3, add to Gates 0-1) | +15 | D-16 |
| 6. Cross-dimension guide | Appendix or Planner reading | +85 | D-11, D-12 |
| Additional fixes | Various locations | +25 | D-01, D-03, D-05, D-09, D-13, D-14, D-19 |

**Total: ~340 lines of enrichment content resolving all 19 discrepancies.**

**Net prompt impact:** Deliverables 1, 4, 5 add ~40 lines to the main prompt body. Deliverables 2, 3, 6 go into appendix or agent reading material (zero main prompt cost). Additional fixes are line-level modifications (net zero).

---

**END MC ENRICHMENT SPECIFICATION**

# PV2 Flagship Coherence Audit: File 10 Requirements vs. Operational Recipe Implementation

**Auditor:** coherence-auditor (Opus 4.6)
**Date:** 2026-02-18
**Task:** #19
**Sources:**
1. `ephemeral/pipeline-analysis/10-coherence-model-shift.md` (439 lines)
2. `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` (1,746 lines) -- Phases 6, 8
3. `ephemeral/pipeline-analysis/_meta-cognitive/pv2-tier-routing.md` (347 lines)

---

## Part A: File 10 Coherence Requirements (Complete Inventory)

File 10 identifies a shift from **declarative constraint** to **operational specification** for coherence. The requirements it documents fall into 6 categories:

### A1. MC Rules (8 rules, Section 1)

| Rule | Requirement | Nature |
|------|------------|--------|
| MC-01 | CCS >= 0.30 (removal test: does meaning change?) | Abstract-operational hybrid |
| MC-02 | >= 3 reinforcing pairs (same semantic, different CSS channels) | Countable but previously unverified |
| MC-03 | >= 2 modulating chains (one mechanism controls another's intensity) | Conceptual -- no measurement protocol in master prompt |
| MC-04 | >= 2 responding sequences (A's output triggers B) | Conceptual -- no measurement protocol |
| MC-05 | >= 2 contrasting deployments (presence/absence meaning) | Conceptual -- no measurement protocol |
| MC-06 | >= 1 cascading chain of 3+ mechanisms | Countable, with value table |
| MC-07 | Cross-dimension coherence: >= 10/15 dimension pairs coupled | Matrix-based but abstract |
| MC-08 | Anti-metronome: >= 3 distinct padding/margin values | Directly measurable |

### A2. SC Rules (10 rules, Section 2)

| Rule | Requirement |
|------|------------|
| SC-01 | Maximum 5 scales, preferred 2-3 |
| SC-02 | >= 5/7 channels actively used |
| SC-03 | Richness matrix coverage >= 30/35 cells |
| SC-04 | No single channel > 40% semantic load |
| SC-05 | Each channel at >= 2 scales |
| SC-06 | Restraint ratio per channel >= 1.5:1 |
| SC-07 | Same design principle at >= 3 scales |
| SC-08 | No scale has ALL 7 channels simultaneously |
| SC-09 | Minimum 3 channels shift at every section transition |
| SC-10 | Chromatic-density alignment (warm=sparse, cool=dense) |

### A3. Cascade Value Table Pattern (Section 5)

File 10's central innovation: a **12-row x N-column matrix** showing exact CSS computed values at every section. Requirements:
- 12 rows (one per section)
- 10 columns minimum (Ch1 Background, Ch2 Font-size/weight, Ch2 Letter-spacing, Ch3 Padding, Ch3 p margin, Ch3 p max-width, Ch4 Border-left, Ch5 Component, Ch7 Text color)
- Adjacent rows must be comparable for co-variation direction
- Builder must BUILD the table, COUNT channels per transition, FIX deficient transitions, VERIFY zone boundary density (>= 5 channels at T4/T8), VERIFY co-variation direction

### A4. CCS Operationalization (Section 4)

File 10 requires CCS to be transformed from thought experiment to:
- **Cascade value tables** as CCS evidence (zeroing a column to test coupling)
- **Named reinforcing pairs** with specific removal tests (3 named: Density, Authority, Resolution)
- **Cascading chain** with exact per-zone values (4-mechanism chain: Background -> Spacing -> Typography -> Component Internals)

### A5. Perception Thresholds (Section 2)

File 10 introduces minimum perceptible deltas that define "active" vs "deployed":
| Property | Minimum Perceptible Delta |
|----------|--------------------------|
| Background color | >= 10 RGB points |
| Letter-spacing | >= 0.025em |
| Font-size | >= 2px |
| Font-weight | >= 100 units |
| Border weight | >= 1px difference |

### A6. Channel Taxonomy Reconciliation (Section 7)

File 10 documents that the remediation REPLACED 3 of 7 channels:
- Ch5 Density -> absorbed into Ch3 Spatial
- Ch6 Rhythmic -> replaced by Ch6 Behavioral
- Ch7 Intentional -> replaced by Ch7 Material

File 10 recommends adopting the remediation's taxonomy as authoritative.

---

## Part B: PV2 Flagship Implementation Audit

### Phase 6 (Coherence) in File 42 Recipe

File 42 does NOT have a dedicated "Phase 6: Coherence" phase. Instead, coherence is distributed:
- **Phase 3** (Zone System + Backgrounds): Establishes zone-level color variation with >= 10 RGB delta
- **Phase 4** (Structural Borders + Dividers): Establishes structural channel
- **Phase 5** (Typography Zones): Establishes typographic variation by zone
- **Phase 8E** (Multi-Coherence Verification): The verification step

### Phase 8E Analysis

Phase 8E in File 42 specifies:

```
For the 2-3 major zone transitions (where zone groups change):
1. Count how many CSS properties shift at the boundary.
2. Each major transition MUST have >= 3 properties shifting simultaneously.
```

It provides an example verification table:
```
| Channel | Zone 1 Value | Zone 2 Value | Changed? |
| Background | #FEF5EB (warm) | #FAF8F5 (cool) | YES |
| Font-size | 17px | 15px | YES |
| Font-weight (h2) | 400 | 600 | YES |
| Letter-spacing | 0.02em | -0.01em | YES |
| Left border | none | 4px red | YES |
| Paragraph margin | 20px | 12px | YES |
| **Total** | | | **6 channels. PASS** |
```

### Requirement-by-Requirement Comparison

| # | File 10 Requirement | PV2 Phase 6 Implementation | PV2 Phase 8 Verification | Status |
|---|--------------------|-----------------------------|--------------------------|--------|
| MC-01 | CCS >= 0.30, removal test | NOT IMPLEMENTED as a formula. Replaced by cascade value table concept embedded in Phase 8E's count-and-compare approach. | Phase 8E counts channels at transitions but does NOT compute CCS as a number. | REPLACED -- CCS formula dropped, channel counting substituted. File 10 endorses this replacement (Section 4). |
| MC-02 | >= 3 reinforcing pairs | NOT EXPLICITLY REQUIRED in File 42 recipe. No mention of "reinforcing pairs" in any phase. | NOT VERIFIED. Phase 8E checks channel count, not semantic pairing. | DROPPED. File 10 defined 3 named pairs (Density, Authority, Resolution). File 42 has zero mention of reinforcing pairs. |
| MC-03 | >= 2 modulating chains | NOT IMPLEMENTED. File 42 has no mechanism interaction specification. | NOT VERIFIED. | DROPPED entirely. |
| MC-04 | >= 2 responding sequences | NOT IMPLEMENTED. | NOT VERIFIED. | DROPPED entirely. |
| MC-05 | >= 2 contrasting deployments | NOT IMPLEMENTED. | NOT VERIFIED. | DROPPED entirely. |
| MC-06 | >= 1 cascading chain of 3+ mechanisms | IMPLICITLY PRESENT. File 42's zone system creates a 4-channel cascade (Background -> Spacing -> Typography -> Borders) that shifts at zone boundaries. But this is a STRUCTURAL SIDE EFFECT, not an explicit requirement. | NOT VERIFIED as a named chain. Phase 8E counts channels but does not trace cascade direction. | IMPLICIT -- present by construction but not required or verified. |
| MC-07 | >= 10/15 dimension pairs coupled | NOT IMPLEMENTED. No cross-dimension coupling matrix. | NOT VERIFIED. | DROPPED entirely. |
| MC-08 | >= 3 distinct padding/margin values | IMPLEMENTED via zone padding (64px/32px/48px in Phase 3) and paragraph margins (20px/12px/16px/18px in Phase 5). | NOT EXPLICITLY VERIFIED at Phase 8, but embedded in the recipe values. | EMBEDDED -- satisfied by construction, not by verification. |
| SC-01 | Max 5 scales, preferred 2-3 | IMPLEMENTED. Phase 0.3 caps zones at 5. Phase 8C checks 5 scales. | Phase 8C: Scale 5 verification table (Page/Zone/Section/Component/Element). | IMPLEMENTED and VERIFIED. |
| SC-02 | >= 5/7 channels actively used | PARTIALLY IMPLEMENTED. Recipe activates Ch1-Ch4 in Phases 3-5, Ch5-Ch6 element in Phase 6. Ch7 (Intentional/Material) is unspecified. | Phase 8C checks 5 scales but does NOT count channels. No "5/7 channels" gate. | PARTIAL -- channels are deployed by recipe but channel count is not a verification gate. |
| SC-03 | Richness matrix >= 30/35 cells | NOT IMPLEMENTED. No richness matrix in any phase. | NOT VERIFIED. | DROPPED entirely. |
| SC-04 | No single channel > 40% semantic load | NOT IMPLEMENTED. | NOT VERIFIED. | DROPPED entirely. |
| SC-05 | Each channel at >= 2 scales | NOT IMPLEMENTED. | NOT VERIFIED. | DROPPED entirely. |
| SC-06 | Restraint ratio >= 1.5:1 | NOT IMPLEMENTED. | NOT VERIFIED. | DROPPED entirely. |
| SC-07 | Same design principle at >= 3 scales | NOT IMPLEMENTED as stated. File 42's fractal coherence is achieved by construction (zone backgrounds at section scale, borders at component scale, typography at element scale) but not measured. | Phase 8C checks 5 scales with designed moments but does NOT verify cross-scale principle consistency. | IMPLICIT -- satisfied by recipe construction, not by explicit gate. |
| SC-08 | No scale has ALL 7 channels | NOT IMPLEMENTED. | NOT VERIFIED. | DROPPED -- but unlikely to be violated given recipe structure. |
| SC-09 | Min 3 channels shift at every transition | IMPLEMENTED. Phase 8E requires >= 3 properties shifting at major transitions. | Phase 8E provides channel count verification table. | IMPLEMENTED and VERIFIED -- this is the ONE MC/SC rule that survived intact into Phase 8E. |
| SC-10 | Chromatic-density alignment | IMPLEMENTED by construction (Phase 3 warm zones = generous spacing; Phase 5 cool zones = tight spacing). | NOT EXPLICITLY VERIFIED as a named alignment. | EMBEDDED -- satisfied by recipe values, not by verification. |
| Cascade Value Table | 12-row x 10-column matrix with exact CSS values | NOT REQUIRED as a deliverable. Phase 8E shows a simplified channel-count table for 2-3 transitions only. | Phase 8E checks 2-3 major transitions, NOT all 11. No 12-row table required. | SIGNIFICANTLY REDUCED. File 10's full 12x10 table replaced by a spot-check of 2-3 transitions. |
| Perception Thresholds | Minimum deltas per CSS property | IMPLEMENTED. Phase 8A provides complete threshold table (7 properties). | Phase 8A: full perception threshold verification. | IMPLEMENTED and VERIFIED. This is a strong match. |
| Channel Taxonomy | 7 channels with redefined Ch5-Ch7 | PARTIALLY ADOPTED. File 42 uses pragmatic channel list (Background, Font-size, Font-weight, Letter-spacing, Left border, Paragraph margin) without mapping to Ch1-Ch7 taxonomy. | Phase 8E lists channels by CSS property name, not by Ch# ID. | PRAGMATIC SUBSTITUTE -- taxonomy dropped, CSS property names used directly. |
| S-09 Stacking Fix | Total gap <= 120px at boundaries | IMPLEMENTED. Step 0.6 includes stacking arithmetic. Phase 8B verifies void prevention. | Phase 8B: scroll through full page, verify no gap > 120px, no blank viewport. | IMPLEMENTED and VERIFIED. Strong match. |

---

## Part C: The Coherence Gap -- Does PV2 Phase 8E Actually Measure or Judge?

### The Critical Question

File 10's central thesis is that the master prompt's coherence was **unfalsifiable self-report** and the remediation introduced **measurable cascade value tables**. Does PV2 Flagship's Phase 8E actually COUNT channels and MEASURE shifts? Or does it ask the builder to judge?

### Answer: Phase 8E is a HYBRID -- it COUNTS but does not fully MEASURE.

**What Phase 8E does well:**

1. **It COUNTS.** The verification table structure requires the builder to list each channel, write Zone 1 and Zone 2 values, and mark YES/NO for "Changed?" This is a countable operation, not a judgment call.

2. **It uses EXACT VALUES.** The example table contains specific hex codes, px values, and em values. The builder must produce computed values, not assertions.

3. **It has a BINARY gate.** "Each major transition MUST have >= 3 properties shifting simultaneously." Pass or fail, no judgment.

**What Phase 8E does NOT do (gaps relative to File 10):**

1. **It checks only 2-3 transitions, not all 11.** File 10's cascade value table covers ALL 11 section boundaries. Phase 8E says "For the 2-3 major zone transitions" -- this means 8-9 transitions are UNVERIFIED. A page could have coherent zone boundaries but incoherent within-zone transitions.

2. **It does NOT verify co-variation DIRECTION.** Phase 8E counts how many channels change but does NOT check whether they change in the SAME semantic direction. If background goes warmer while typography goes tighter (contradictory signals), Phase 8E would count both as "changed" and PASS. File 10 explicitly requires co-variation direction verification (Section 5, step 5).

3. **It does NOT require the cascade value table as a DELIVERABLE.** File 10's cascade value table is a persistent artifact that can be reviewed by any agent. Phase 8E's verification table is a transient check during the builder's self-audit -- it is not saved as a file.

4. **It does NOT verify reinforcing pairs.** File 10 defined 3 named reinforcing pairs (Density, Authority, Resolution) with specific removal tests. Phase 8E has no concept of reinforcing pairs.

5. **It does NOT verify cascading chains.** File 10 documented a 4-mechanism cascade (Background -> Spacing -> Typography -> Component Internals) with per-zone values. Phase 8E counts channels but does not trace cascade sequences.

6. **It does NOT require the 12x10 grid.** File 10's full cascade value table (12 sections x 10 CSS properties) would catch EVERY coherence failure. Phase 8E's 2-3 transition check is a 75-80% reduction in coverage.

### Net Assessment

| Dimension | File 10 Target | PV2 Phase 8E Actual | Gap |
|-----------|---------------|--------------------|----|
| Transitions checked | All 11 | 2-3 major | 73-82% of transitions unchecked |
| Channel counting | YES | YES | No gap |
| Co-variation direction | Required | NOT checked | SIGNIFICANT gap |
| Exact values required | YES | YES (example shows hex/px/em) | No gap |
| Binary gate | CCS >= 0.30 + channel counts | >= 3 channels shifting | Simplified but binary |
| Reinforcing pairs | 3 named, with removal tests | Not mentioned | DROPPED |
| Cascading chains | 1+ chain of 3+, with per-zone values | Not verified | DROPPED |
| Deliverable artifact | 12x10 cascade value table | Transient check, not saved | No persistent artifact |
| Full 12x10 table | Required | Not required | DROPPED |

### PV2 Tier Routing Amplification

The tier routing matrix (`pv2-tier-routing.md`) specifies tier-specific coherence:

| Tier | Coherence Gate |
|------|---------------|
| Floor | N/A |
| Middle | WARNING: >= 3 transitions between sections |
| Ceiling | BLOCKING: coherence check |
| Flagship | BLOCKING: ALL gates including coherence |

For Flagship specifically, the routing matrix states:
- Phase 3 (Zone Backgrounds): "ENHANCED -- multi-channel zone differentiation verified. Background, typography, spacing, AND borders must all shift at zone boundaries. **6+ CSS channels shifting at each major boundary.**"
- Phase 8 (Verification): "ENHANCED -- Full programmatic gate suite. Mode 4 PA: 9 fresh-eyes Opus auditors running all 48 PA questions in parallel."

The 6+ channel requirement at Flagship is STRICTER than File 42's >= 3 channel base. However:
- The "6+ channels" requirement appears in Phase 3 of the tier routing (zone setup), not in Phase 8E (verification).
- The Mode 4 PA auditors assess coherence PERCEPTUALLY (PA questions about "designed feel") but do NOT run cascade value tables programmatically.
- The programmatic verifier (1 Sonnet agent) runs "soul, palette, container, voids, scales, coherence" gates, but the "coherence" gate is Phase 8E's >= 3 channel check, NOT File 10's full cascade table.

### Flagship-Specific Coherence Summary

**For PV2 Flagship:**
- Zone boundaries require 6+ CSS channels shifting (from tier routing Phase 3) -- STRONGER than File 42's base 3
- Mode 4 PA provides 9 independent perceptual assessments of coherence -- captures what numbers miss
- But NO full cascade value table is required as a deliverable
- NO co-variation direction is programmatically verified
- NO reinforcing pairs are traced
- The 6+ channel requirement is a SETUP INSTRUCTION (Phase 3), not a VERIFICATION GATE (Phase 8)

---

## Part D: Verdict and Recommendations

### Overall Verdict

PV2 Flagship's coherence implementation PARTIALLY addresses File 10's requirements. The recipe-based approach embeds coherence by construction (zone semantics, typographic zones, structural borders all shift together because the recipe VALUES co-vary). This is elegant -- if you follow the recipe, coherence is a structural side effect.

However, FILE 10'S CENTRAL INSIGHT -- that coherence must be VERIFIED by artifact, not CLAIMED by self-report -- is only 40% implemented. The cascade value table, which File 10 calls "the remediation's single most important operational invention" (Section 5), is absent from the PV2 recipe.

### What Survives

| File 10 Innovation | PV2 Status |
|-------------------|-----------|
| Perception thresholds | FULLY ADOPTED (Phase 8A) |
| S-09 stacking fix | FULLY ADOPTED (Phase 0.6 + 8B) |
| Channel counting at transitions | ADOPTED but scope-reduced (2-3 of 11) |
| Binary pass/fail gate for transitions | ADOPTED (>= 3 channels) |
| Exact CSS values in verification | ADOPTED (Phase 8E example) |

### What Was Lost

| File 10 Innovation | PV2 Status |
|-------------------|-----------|
| Full 12x10 cascade value table | NOT ADOPTED |
| Co-variation direction verification | NOT ADOPTED |
| Named reinforcing pairs with removal tests | NOT ADOPTED |
| Cascading chain specification | NOT ADOPTED |
| CCS as a computed score | NOT ADOPTED (intentionally -- replaced by counting) |
| Coverage of ALL 11 transitions | NOT ADOPTED (only 2-3 checked) |
| Cascade table as persistent deliverable | NOT ADOPTED |

### Recommendation

For PV2 Flagship tier specifically, consider adding:

1. **Expand Phase 8E to ALL transitions** (not just 2-3 major ones). The marginal cost of checking 11 transitions vs 3 is low.

2. **Add co-variation direction check.** After counting channels, add one sentence: "Do ALL changing channels shift in the SAME semantic direction (e.g., all toward 'compressed' or all toward 'generous')? If any channel contradicts, FLAG."

3. **Require cascade value table as a deliverable.** The builder writes a CSV/markdown table of computed values at every section. This becomes a reviewable artifact for PA auditors and future remediation.

These 3 additions would close the gap between File 10's vision and PV2's implementation without adding significant complexity to the recipe format.

---

**END OF COHERENCE AUDIT**

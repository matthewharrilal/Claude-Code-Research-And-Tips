# 05 -- Gate Results Comparison: Page A vs Page B

**Page A:** `yegge-gas-town/output.html` (Pipeline run 2026-02-20T01:18, fix cycle 1 at 01:45)
**Page B:** `gas-town-steve-yegge/output.html` (Pipeline run 2026-02-20T19:15, re-run on correct page)

---

## 1. Top-Level Summary

| Metric | Page A | Page B | Winner |
|--------|--------|--------|--------|
| Total gates evaluated | 17 | 25 | **Page B** (+8 gates) |
| PASS | 15 | 24 | **Page B** |
| FAIL | 0 | 0 | TIE |
| ADVISORY | 2 | 1 | **Page B** (fewer advisories) |
| Blocking failures | 0 | 0 | TIE |
| Fix cycles used | 1 | Not recorded (implied >=1) | -- |
| Verdict | ALL GATES PASS | ALL GATES PASS | TIE |

**Key structural difference:** Page B ran 25 gates (the full Flagship suite including SC-00, SC-12, SC-14, SC-15, SC-17, BG-1, BG-2, DG-3). Page A ran only 17 gates -- missing SC-00, SC-12, SC-14, SC-15, SC-17, BG-1, BG-2, DG-3. This means Page B was subjected to stricter verification. The 8 missing gates in Page A are NOT failures -- they simply were not run (likely an earlier version of the gate runner).

---

## 2. Gate-by-Gate Side-by-Side Comparison

### TIER A: COMPOSITION-CRITICAL GATES

#### SC-00: Zone Selector Validation (Pre-Gate)

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | NOT RUN | PASS |
| Measured | -- | 4 zone elements (.zone-1 through .zone-4) |
| Threshold | -- | >= 3 zone elements |
| Delta | -- | +1 |

**Analysis:** Page B validates zone selectors explicitly. Page A skipped this gate -- a risk, since all per-zone gates depend on zone selectors. Page B's zones are explicitly classed (.zone-1 through .zone-4), which is the preferred markup pattern per gate-runner.md.

---

#### SC-01: Container Width

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | PASS | PASS |
| Measured | 960px | 960px |
| Threshold | 940-960px | 940-960px |
| Delta | 0px (at upper bound) | 0 |

**Analysis:** Identical. Both pages hit the upper bound of the allowed range. TIE.

---

#### SC-09: Background Delta at Zone Boundaries

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | PASS | PASS |
| Boundaries | 6 (Header, Z1-Z5, Footer) | 3 interior (Z1->Z2, Z2->Z3, Z3->Z4) + 2 bookends |
| Min delta | 21 RGB | **15 RGB** (Z2->Z3 exactly at threshold) |
| Max delta | 228 RGB (bookends) | 228 RGB (bookends) |

**Detailed boundary comparison:**

| Boundary | Page A Delta | Page B Delta | Better |
|----------|-------------|-------------|--------|
| Header->Z1 | 228 RGB | 228 RGB | TIE |
| Z1->Z2 | 21 RGB | 18 RGB | **Page A** (+3) |
| Z2->Z3 | 21 RGB | **15 RGB** (exact threshold) | **Page A** (+6) |
| Z3->Z4 | 21 RGB | 20 RGB | **Page A** (+1) |
| Z4->Z5 (Page A) / Z4->Footer (Page B) | 21 RGB | 219 RGB | N/A (different structure) |
| Z5->Footer (Page A only) | 228 RGB | -- | -- |

**Page A backgrounds:** #1A1A1A / #FEF9F5 / #F5EDE0 alternating (2 distinct content backgrounds)
**Page B backgrounds:** #1A1A1A / #FEF9F5 / #F0EBE3 / #E8E0D4 / #F5F0E8 (4 distinct content backgrounds)

**Winner: Page A for safety margins.** Page A maintains a comfortable 21 RGB minimum at all interior boundaries. Page B has one boundary (Z2->Z3) sitting exactly at the 15 RGB threshold -- any slight rendering variation could cause a perceptual failure. However, Page B uses MORE distinct background values (4 vs 2), which is compositionally richer in principle -- IF the deltas are perceptible. The Z2->Z3 delta of 15 is the absolute floor.

---

#### SC-10: Stacked Gap Between Sections

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | PASS | PASS |
| Max gap | 112px (S1->S2) | 40px (Z3->Z4 checkpoint) |
| All gaps | 64, 112, 96, 88, 80, 40px | 0px, 0px, 40px |
| Threshold | <= 120px | <= 120px |
| Delta from threshold | -8px | -80px |

**Winner: Page B decisively.** Page B's maximum stacked gap is 40px vs Page A's 112px. Page B has far more compact zone transitions. However, Page A's gaps are all within bounds and provide more breathing room between sections -- whether this is a strength or weakness depends on perceptual audit.

From the cascade tables, Page A's stacked gaps are more intentionally varied: 64->112->96->88->80->40. This forms a compression arc (widest early, tightest late). Page B's gaps at 0/0/40 suggest tighter zone butting with a checkpoint-bar creating the only significant gap.

**Nuance:** Page A's stacked gap variation IS the compositional approach (compression arc from OPENING through DEEPENING to RESOLVING). Page B's near-zero gaps rely on backgrounds and borders alone for boundary signaling. Both are valid strategies.

---

#### SC-11: Typography Zone Hierarchy

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | PASS | PASS |
| Measured | 5 distinct h2 sizes: 28/26/24/22/24px | display-body delta: 32px, 6 distinct clusters: 48/40/32/24/18/16 |
| Threshold | >= 3 distinct font-size zones | >= 10px display-body, >= 3 clusters |

**Page A h2 cascade:** 28px -> 26px -> 24px -> 22px -> 24px (compression then partial release)
**Page B h2 cascade:** 48px -> 40px -> 32px -> 32px -> 32px (strong compression then plateau)

**Winner: Page B for range and variety.** Page B has a 32px display-body delta vs Page A's implied ~12px range. Page B achieves 6 distinct typographic clusters vs Page A's 5 distinct h2 sizes. Page B's typography arc is more dramatic (48px display down to 16px detail). Page A's arc is more subtle (28px down to 22px, a 6px range for h2s). The gate runner's Flagship threshold is >= 10px display-body delta -- both pass, but Page B exceeds by 22px while Page A likely exceeds by a smaller margin.

---

#### SC-12: Zone Count

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | NOT RUN | PASS |
| Measured | -- | 4 content zones |
| Threshold | -- | 3-5 zones |

**Page A structure:** 5 content zones (Z1-Z5) + header/footer = 7 total sections
**Page B structure:** 4 content zones (.zone-1 through .zone-4) + header/footer = 6 total sections

**Analysis:** Page A has more zones (5 vs 4), giving it more space for multi-coherence progression. Both are within Flagship range (3-5). Page A technically has richer zone structure. However, more zones require more channel differentiation at each boundary -- a higher compositional demand.

---

#### SC-13: Multi-Coherence (Channel Shift Count)

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | PASS | PASS |
| Average shifts | **5.3** | **4.00** |
| Min boundary | 5 (multiple interior) | 4 (all interior) |
| Max boundary | 6 (bookends) | 4 (all interior) |
| Threshold | >= 3/boundary, avg >= 4.0 | >= 3/boundary, avg >= 4.0 |

**Detailed boundary channel shifts:**

| Boundary | Page A Shifts | Page B Shifts | Better |
|----------|--------------|---------------|--------|
| Header->Z1 | 6 | (not counted in interior avg) | -- |
| Z1->Z2 | 5 | 4 (chromatic:18, h2-size:8, para-weight:100, padding:48) | **Page A** |
| Z2->Z3 | 5 | 4 (chromatic:15, para-weight:100, letter-spacing:0.48px, padding:28) | **Page A** |
| Z3->Z4 | 5 | 4 (chromatic:20, para-weight:200, letter-spacing:0.48px, padding:28) | **Page A** |
| Z4->Z5 | 5 | -- | Page A only |
| Z5->Footer | 6 | -- | Page A only |
| Z4->Footer | -- | (bookend, similar to Page A Z5->Footer) | -- |

**Page A channels detail (from gate results):**
- Interior zones: cascading h2 font-size (28->26->24->22->24px), varying letter-spacing (0.84->0.52->0.24->0->0.36px), alternating border-left (3px on Z2/Z4), compressing padding (64->48->40->32->40px)

**Page B channels detail (from gate results):**
- Z1->Z2: chromatic delta 18, h2-size delta 8px, para-weight delta 100, padding delta 48px
- Z2->Z3: chromatic delta 15, para-weight delta 100, letter-spacing 0.48px, padding delta 28px
- Z3->Z4: chromatic delta 20, para-weight delta 200, letter-spacing 0.48px, padding delta 28px

**Winner: Page A clearly.** Average 5.3 vs 4.0 shifts. Page A achieves 5 channels at every interior boundary; Page B achieves 4. Page A's multi-coherence is richer and more consistent. Page B meets the Flagship threshold (avg >= 4.0) but with zero margin -- exactly 4.00.

---

#### SC-13B: Channel Shift Direction Coherence

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | ADVISORY | **PASS** (BLOCKING) |
| Measured | Interior avg 5.0 vs bookend avg 5.5, gap 0.5 | 3/3 boundaries coherent (100%), directions: DEEPENING/DEEPENING/RESOLVING |
| Threshold | Advisory: interior match bookend quality | >= 50% boundaries coherent |

**Critical difference:** Page A treated SC-13B as ADVISORY; Page B treated it as BLOCKING (PASS). This reflects the updated gate runner where SC-13B was promoted from advisory to blocking.

**Page A directions (from cascade table):** OPENING -> DEEPENING -> OPENING -> DEEPENING -> RESOLVING -> CLOSING
**Page B directions:** DEEPENING -> DEEPENING -> RESOLVING (3/3 = 100% coherent)

**Winner: Page B for direction coherence clarity.** Page B has a clean narrative arc: deepen twice, then resolve. Page A alternates (OPENING/DEEPENING/OPENING/DEEPENING/RESOLVING/CLOSING) -- which is more complex but also potentially less coherent. However, Page A's alternation is arguably a deliberate tension-release pattern (the "breathing" between zones), not incoherence.

---

#### SC-14: Sub-Perceptual Prevention

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | NOT RUN | PASS |
| Measured | -- | 0 sub-perceptual letter-spacing violations |
| Threshold | -- | no letter-spacing in (0, 0.025em) |

**Analysis:** Page A did not run this gate. Page A's cascade table shows letter-spacing values of 0.03em and above, which would likely pass. But this is unverified. Page B explicitly passes with zero violations.

---

#### SC-15: Border/Structural Presence

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | NOT RUN | PASS |
| Measured | -- | **12 distinct border configurations** |
| Threshold | -- | >= 3 distinct configs |

**Page B border inventory:** 4px red, 3px red, 1px subtle, 4px blue, 4px amber, 4px coral, 4px green, 4px purple, 4px dark, 3px tan, 1px tan, 1px gray

**Page A border inventory (from cascade table):** 3px solid #E83025 (header/footer), 3px solid #E0D5C5 (zone borders), 4px callout accents, 3px solid blue (border-left on Z2/Z4), 1px solid #E0D5C5 (subtle borders)

**Analysis:** Page B explicitly passes with 12 distinct border configs -- an extremely rich structural vocabulary. Page A's cascade table suggests approximately 5-6 distinct configs. **Page B wins on border variety** by a significant margin (12 vs ~5-6).

---

#### SC-16: Monotonic Property Progression

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | ADVISORY (compliant) | ADVISORY (no monotonic found) |
| Measured | No sub-0.025em letter-spacing | No monotonic progression (padding arc 128/80/52/80, bg lightness 249/234/223/239) |

**Page A SC-16 data:** The gate result is labeled SC-16 but describes letter-spacing compliance, not monotonic progression. This appears to be a gate numbering mismatch in Page A's runner.

**Page B SC-16 data:** Explicitly checked for monotonic properties. Padding arc: 128->80->52->80 (NOT monotonic -- rises at end). Background lightness: 249->234->223->239 (NOT monotonic -- rises at end).

**Analysis:** Neither page achieves a purely monotonic arc. Both use tension-release patterns (compression then partial release). This is ADVISORY, not blocking -- and the non-monotonic pattern is compositionally intentional (the "resolving" zone should breathe wider).

---

#### SC-17: Parametric Echo (TC Brief Boundary Validation)

| Aspect | Page A | Page B |
|--------|--------|--------|
| Status | NOT RUN | PASS |
| Measured | -- | Builder documented overrides from TC brief bg colors (delta 13/5/8 -> 18/15/20). All overrides logged with compositional reasoning. Channel shifts match TC brief within tolerance. |

**Winner: Page B.** This gate validates that the builder EXECUTED the TC agent's compositional plan. Page B explicitly passes -- the builder's overrides are documented and justified (the TC brief originally planned deltas of 13/5/8 which were below the 15 RGB threshold, and the builder increased them to 18/15/20). This is exactly the kind of principled deviation the gate system should catch and approve.

Page A did not run this gate, so we cannot assess TC brief fidelity.

---

### TIER B: IDENTITY ENFORCEMENT GATES

| Gate | Page A | Page B | Winner |
|------|--------|--------|--------|
| SC-02 (Soul: radius/shadow) | PASS (0 violations) | PASS (all clean) | TIE |
| SC-03 (Font Trinity) | PASS (3 fonts + fallbacks) | PASS (3 fonts only) | TIE |
| SC-04 (Warm Palette) | PASS (0 violations, fix applied) | PASS (all R >= G >= B) | TIE (Page A needed fix cycle) |
| SC-05 (No Pure Extremes) | PASS (0 violations, fix applied) | PASS (no pure extremes) | TIE (Page A needed fix cycle) |
| SC-06 (ARIA Landmarks) | PASS (8 landmarks, +3 over threshold) | PASS (**20 landmarks**, +15 over threshold) | **Page B** |
| SC-07 (Skip Link) | PASS (present) | PASS (present) | TIE |
| SC-08 (Component Library) | PASS (**54 component classes**, +46) | PASS (18 component types, +10) | **Page A** |
| DG-3 (Landmark Complete) | NOT RUN | PASS (header + main + footer) | Page B (verified) |

**Notable differences:**
- **SC-06 (Landmarks):** Page B has 20 landmarks vs Page A's 8. Page B uses far more ARIA region annotations (banner, main, contentinfo, 4 section regions, 2 complementary, 11 note). This is a significant accessibility advantage.
- **SC-08 (Components):** Page A reports 54 distinct component classes vs Page B's 18 component types. This is a dramatic difference. Page A has a much richer component vocabulary by class count. However, some of Page A's classes may be more granular variants (e.g., `callout--essence` counted separately from `callout`), while Page B counts at the TYPE level. Regardless, Page A's component vocabulary is demonstrably broader.

---

### TIER C: BEHAVIORAL GATES

| Gate | Page A | Page B | Winner |
|------|--------|--------|--------|
| BG-1 (Metaphor Independence) | NOT RUN | PASS (TC derived metaphor independently, Phases 0-4) | Page B (verified) |
| BG-2 (Metaphor Structural) | NOT RUN | PASS (COMMAND POST / FIELD DISPATCH = structural, implies CSS properties) | Page B (verified) |

**Page A metaphor (from cascade table):** "Progressive mechanization" / "Factory" (implied by zone names: "Factory entrance", "Factory floor", "Factory exit")
**Page B metaphor:** "COMMAND POST / FIELD DISPATCH" -- explicitly structural, implying border-weight hierarchy (rank encoding), bg clearance progression, spacing compression arc

**Analysis:** Page B's metaphor is explicitly validated as STRUCTURAL (CSS-implying). Page A's metaphor is also structural in practice (factory = zones of production), but was not formally verified through BG-1/BG-2 gates.

---

### DELIVERABLE GATES

| Gate | Page A | Page B | Winner |
|------|--------|--------|--------|
| DG-1 (Fractal Echo Table) | PASS (5 rows, CSS evidence, direction PROGRESSIVE MECHANIZATION) | PASS (5 rows, CSS evidence, direction: dispatch compression) | TIE |
| DG-2 (Cascade Value Table) | PASS (7 properties x 6 boundaries) | PASS (123 lines, all boundaries documented) | **Page A** (more detailed) |
| DG-4 (Handoff Validation) | PASS (5/5 sub-checks, 16 mechanisms across 5 categories) | PASS (5/5 sub-checks, 15 mechanisms S:2/H:3/C:4/D:3/N:3) | **Page A** (16 vs 15 mechanisms) |

**DG-4 mechanism comparison:**

| Category | Page A | Page B |
|----------|--------|--------|
| Spatial (S) | 3 | 2 |
| Hierarchy (H) | 3 | 3 |
| Component (C) | 3 | 4 |
| Depth/Emphasis (D) | 2 | 3 |
| Navigation (N) | 5 | 3 |
| **Total** | **16** | **15** |

Page A has 16 mechanisms vs Page B's 15. Both exceed the Flagship minimum of 14. Page A is stronger in Spatial and Navigation categories; Page B is stronger in Component and Depth/Emphasis.

---

## 3. Cascade Value Table Comparison

### Zone Background Progression

**Page A:** 2-color alternation with dramatic bookends
```
Header:  #1A1A1A (dark)
Z1:      #FEF9F5 (warm cream)    -- light
Z2:      #F5EDE0 (breathing tan) -- darker
Z3:      #FEF9F5 (warm cream)    -- light (return)
Z4:      #F5EDE0 (breathing tan) -- darker (return)
Z5:      #FEF9F5 (warm cream)    -- light (final)
Footer:  #1A1A1A (dark)
```

**Page B:** 4-color progressive darkening then release
```
Header:  #1A1A1A (dark)
Z1:      #FEF9F5 (warm cream)    -- lightest
Z2:      #F0EBE3 (warm gray)     -- slightly darker
Z3:      #E8E0D4 (warm tan)      -- darkest content zone
Z4:      #F5F0E8 (warm light)    -- releases back lighter
Footer:  #1A1A1A (dark)
```

**Observation:** Page A uses a simpler alternating pattern (ABAB) for backgrounds. Page B uses a progressive arc (light -> darker -> darkest -> release), which is compositionally more ambitious. However, Page B's deltas are tighter (15-20 RGB between adjacent content zones vs Page A's consistent 21 RGB).

### Typography Cascade

**Page A h2 progression:** 28 -> 26 -> 24 -> 22 -> 24px (6px range, 2px steps)
**Page B h2 progression:** 40 -> 32 -> 32 -> 32px (8px initial drop then plateau)

**Page A body text:** Consistent across zones (not explicitly varied in cascade table)
**Page B body text:** 18px (Z1) -> 16px (Z2-Z4), weight varies 400->500->600->400

Page A has a more consistent compression arc for headings (each zone 2px smaller, then partial release). Page B has a more dramatic initial drop but then plateaus -- the variety comes from weight and letter-spacing shifts rather than size.

### Spacing Cascade

**Page A zone padding:** 64px -> 48px -> 40px -> 32px -> 40px (compression arc with release)
**Page B zone padding:** 64/64px -> 40/40px -> 32/20px -> 32/48px (compression with asymmetric release)

Both use compression arcs. Page A's is more regular; Page B introduces asymmetry (Z3 bottom = 20px, Z4 top = 32px, creating an asymmetric boundary).

### Letter-Spacing Cascade

**Page A:** 0.84em -> 0.52em -> 0.24em -> 0em -> 0.36em (dramatic compression then release)
**Page B:** 0 -> 0 -> 0.03em -> 0 (minimal variation)

**Winner: Page A decisively.** Page A's letter-spacing forms a dramatic compression arc that is highly perceptible. Page B uses letter-spacing minimally (only 0.03em in Z3). This is one of Page A's strongest compositional channels.

### Border Cascade

**Page A:** Alternating 3px border-left on Z2/Z4, 3px structural borders at zone transitions
**Page B:** 12 distinct border configurations with color-coded callout borders (4px red/blue/amber/coral/green/purple/dark), 3px structural borders

**Winner: Page B for variety; Page A for rhythmic coherence.** Page B has far more border configurations (12 vs ~5-6), but this variety serves component differentiation rather than zone rhythm. Page A's alternating border-left pattern is more compositionally coherent as a zone-level signal.

---

## 4. Gates Where Page A OUTPERFORMS Page B

| Gate | Page A | Page B | Magnitude |
|------|--------|--------|-----------|
| SC-09 (Background Delta) | Min 21 RGB | Min 15 RGB | +6 RGB safety margin |
| SC-13 (Multi-Coherence Avg) | 5.3 shifts | 4.0 shifts | +1.3 shifts/boundary |
| SC-13 (Multi-Coherence Min) | 5 shifts | 4 shifts | +1 shift/boundary |
| SC-08 (Component Classes) | 54 classes | 18 types | +36 (but counting differs) |
| DG-4 (Mechanisms) | 16 | 15 | +1 mechanism |
| DG-2 (Cascade Table) | 7 props x 6 boundaries | 123 lines total | Page A more structured |
| Letter-spacing variety | 5 distinct values (dramatic arc) | 2 distinct values (minimal) | Significant |
| Zone count | 5 content zones | 4 content zones | +1 zone |

---

## 5. Gates Where Page B OUTPERFORMS Page A

| Gate | Page A | Page B | Magnitude |
|------|--------|--------|-----------|
| SC-10 (Stacked Gap) | Max 112px | Max 40px | -72px (tighter) |
| SC-11 (Typography Range) | ~6px h2 range | 32px display-body delta | +26px range |
| SC-06 (Landmarks) | 8 | 20 | +12 landmarks |
| SC-15 (Border Configs) | ~5-6 (not run) | 12 distinct | +6-7 configs |
| SC-13B (Direction) | ADVISORY | PASS (100% coherent) | Promoted + verified |
| SC-17 (Parametric Echo) | NOT RUN | PASS (TC brief fidelity verified) | Verified |
| BG-1/BG-2 (Metaphor) | NOT RUN | PASS (structural metaphor verified) | Verified |
| Gate coverage | 17 gates | 25 gates | +8 gates run |
| SC-04/SC-05 | Needed fix cycle | Clean on first pass | Cleaner build |
| Background variety | 2 distinct content bgs | 4 distinct content bgs | +2 colors |

---

## 6. Synthesis and Verdict

### Gate Pass/Fail Verdict

**TIE.** Both pages pass all blocking gates with zero failures. Neither page has any FAIL status.

### Measured Value Verdict

**Mixed -- neither page dominates across all dimensions.**

**Page A strengths (compositional depth):**
- Higher multi-coherence (5.3 avg vs 4.0 avg) -- THE most important compositional gate
- More safety margin on background deltas (21 vs 15 RGB minimum)
- Richer letter-spacing cascade (5 distinct values forming a dramatic arc)
- More content zones (5 vs 4), providing more space for progression
- More component classes (54 vs 18)
- More total mechanisms (16 vs 15)

**Page B strengths (structural rigor + verification breadth):**
- Full 25-gate suite vs 17 gates -- more thoroughly verified
- Better typography range (32px display-body delta vs ~6px h2 range)
- Better accessibility (20 landmarks vs 8)
- More border variety (12 distinct configs)
- Cleaner direction coherence (100% boundaries coherent, formally verified)
- TC brief fidelity verified (SC-17 PASS with documented overrides)
- Metaphor formally verified as STRUCTURAL (BG-1/BG-2 PASS)
- Tighter stacked gaps (max 40px vs 112px)
- More distinct background colors (4 vs 2 content backgrounds)
- Cleaner first-pass identity compliance (no fix cycle needed for SC-04/SC-05)

### Which Page Is Compositionally Stronger By Gate Data?

**Page A has higher raw multi-coherence numbers** (SC-13 avg 5.3 vs 4.0). Multi-coherence is the single most important composition-critical gate -- it measures whether zone boundaries feel like genuine transitions or arbitrary dividers. Page A achieves 5 channel shifts at every interior boundary; Page B achieves 4. This is a meaningful difference.

**Page B has better verification coverage and structural clarity.** It ran 8 more gates, has formally verified metaphor independence, TC brief fidelity, zone selectors, direction coherence, and sub-perceptual prevention. Its direction arc (DEEPENING/DEEPENING/RESOLVING) is cleaner than Page A's alternating pattern.

**The gates cannot resolve which page is perceptually superior.** Gates measure mechanical properties (>= 15 RGB, >= 3 channels, etc.). Whether Page A's 5-channel, 21-RGB-delta alternating pattern LOOKS better than Page B's 4-channel, 15-20-RGB progressive darkening requires PA. The gate data says both pages have sufficient mechanical composition for PA to be worth running.

### Summary Table

| Dimension | Winner | Confidence |
|-----------|--------|------------|
| Multi-coherence depth | **Page A** | HIGH (5.3 vs 4.0, every boundary) |
| Background delta safety | **Page A** | HIGH (21 vs 15 minimum) |
| Typography arc range | **Page B** | HIGH (32px vs 6px range) |
| Border/structural variety | **Page B** | HIGH (12 vs ~5-6 configs) |
| Accessibility | **Page B** | HIGH (20 vs 8 landmarks) |
| Gate verification breadth | **Page B** | HIGH (25 vs 17 gates) |
| TC brief fidelity | **Page B** | MEDIUM (verified vs unverified) |
| Letter-spacing cascade | **Page A** | HIGH (dramatic arc vs minimal) |
| Component vocabulary | **Page A** | MEDIUM (counting methodology differs) |
| Direction coherence | **Page B** | MEDIUM (100% vs alternating) |
| Zone progression strategy | **TIE** | LOW (both valid approaches) |
| Overall mechanical floor | **TIE** | HIGH (both pass all blocking gates) |

---

## 7. Key Takeaway for Synthesizer

The gates tell us that both pages are mechanically sound but compositionally different. Page A is a deeper composition (more channels shifting, more zones, more letter-spacing variety). Page B is a better-verified composition (more gates, cleaner direction, richer typography range, better accessibility). The question of which page is BETTER requires the visual comparison (Task 1), CSS richness analysis (Task 2), and PA findings (Task 6) to answer. The gate data alone is insufficient -- by design, gates catch only ~26% of compositional quality.

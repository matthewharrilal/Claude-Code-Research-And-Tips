## FIX INSTRUCTIONS (Cycle 1) -- PRIORITY ORDERED

>>> Fix ALL Tier 1 issues BEFORE touching Tier 2. Fix ALL Tier 2 BEFORE Tier 3.

### TIER 1: STRUCTURAL (fix first)

**SC-10 FAIL: Stacked gap at zone boundaries exceeds 120px**
- Z1->Z2 gap: 320px (threshold: 120px, +200px over)
- Z3->Z4 gap: 304px (threshold: 120px, +184px over)
- Z2->Z3 gap: 121px (threshold: 120px, +1px over)

ROOT CAUSE: The `.breathing-zone` interstitial elements between content zones are adding excessive vertical space. The breathing zone itself plus the padding of adjacent zones creates stacked gaps far exceeding 120px.

FIX DIRECTION: Reduce breathing zone vertical padding/margin. The breathing zones should serve as TRANSITIONS, not as whitespace voids. Options:
1. Reduce `.breathing-zone` padding from current values to max 32px top/bottom
2. Reduce the padding-bottom of the zone BEFORE each breathing zone
3. Reduce the padding-top of the zone AFTER each breathing zone
4. Combine breathing zone content into adjacent zones (remove as separate elements)

TARGET: Total gap at each boundary <= 120px (sum of last-child bottom margin + breathing zone + first-child top margin).

Re-read conventions-brief.md Section 2 (PERCEPTION) -- "stacked gap <= 120px"

**SC-14 FAIL: Sub-perceptual letter-spacing on H2 elements**
- Measured: 0.02em (0.52px at 26px font-size)
- Threshold: No letter-spacing between 0 and 0.025em
- Delta: 0.005em below floor

FIX: Either remove the letter-spacing entirely (set to 0/normal) or increase to >= 0.025em. Since the TC brief only specifies letter-spacing in Z3 (0.03em), the H2 letter-spacing of 0.02em appears to be a blanket style that's sub-perceptual. Recommendation: remove it (set to 0).

Re-read conventions-brief.md Section 2 (PERCEPTION) -- "letter-spacing floor 0.025em"

### TIER 2: COMPOSITIONAL

**SC-13 Flagship avg concern: 3.3 avg channels (threshold: 4.0)**
- Z1->Z2: 4 channels (good)
- Z2->Z3: 3 channels (minimum)
- Z3->Z4: 3 channels (minimum)
- Z4->Z5: 3 channels (minimum)

DIRECTION: Boost channel shifts at Z2->Z3, Z3->Z4, and Z4->Z5 boundaries. The spatial channel is missing at most boundaries (padding deltas < 24px). Consider:
- Increasing padding differential between adjacent zones
- Adding a structural border at Z2->Z3 (currently no border transition there)
- Ensuring font-weight shifts are >= 200 at more boundaries

### TIER 3: POLISH
None identified from gates.

### PROTECTED (changes here require explicit justification)
- Zone background colors (all deltas 21 RGB -- well above threshold)
- Border weight gradient (4px/3px/1px -- 27 distinct configs)
- Typography hierarchy (27.9px display-body delta, 8 clusters)
- Bento grid layout in Z2 (only non-single-column layout)
- Drop cap in Z1 (singular emphasis)
- Dark header/footer bookends with 3px red borders

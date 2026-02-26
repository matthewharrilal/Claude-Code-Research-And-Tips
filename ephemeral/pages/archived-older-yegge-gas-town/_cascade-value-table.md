# Cascade Value Table -- Yegge Gas Town Page

Computed CSS values at every section boundary.

## Zone Map

| Zone | Section | Background | Role |
|------|---------|-----------|------|
| Z0 | Header | #1A1A1A (dark slab) | Factory entrance |
| Z1 | Opening (Who/Vibe Coding) | #FEF9F5 (warm cream) | Overview |
| Bridge | Breathing zone | #F5EDE0 (breathing tan) | Transition |
| Z2 | Architecture (8 Roles) | #F5EDE0 (breathing tan) | Factory floor |
| Z3 | Memory + Waves | #FEF9F5 (warm cream) | Reflection |
| Bridge (BREATHING) | Breathing zone T3 | #FEF9F5 + 3px borders | BREATHING transition |
| Z4 | Principles + Implementation | #F5EDE0 (breathing tan) | Operations |
| Z5 | Comparison + Sources | #FEF9F5 (warm cream) | Resolution |
| Z6 | Footer | #1A1A1A (dark slab) | Factory exit |

---

## Boundary T0: Header -> Z1 (Opening)

| Property | Header (Z0) | Z1 Opening | Delta | Direction |
|----------|-------------|-----------|-------|-----------|
| background | #1A1A1A | #FEF9F5 | R: +228, G: +224, B: +219 | OPENING (dramatic) |
| font-size (heading) | 2.75rem (44px, display) | 1.625rem (26px, section) | -18px | DEEPENING |
| font-weight | italic (display) | italic (section h2) | -- | Consistent |
| letter-spacing | 0.1em (header meta) | 0.1em (section indicator) | 0 | Consistent |
| border-left | none | none (4px on callouts) | -- | -- |
| padding | 48px 24px | 64px 24px (zone) | +16px | OPENING |
| margin | 0 | 0 | -- | -- |
| border-bottom/top | 3px solid #E83025 (header) | none (zone top) | -3px | OPENING |

**Channels shifting: 4** (Chromatic, Typographic, Spatial, Structural)
**Direction: OPENING** -- from dark compressed factory entrance into warm spacious overview

---

## Boundary T1: Z1 (Opening) -> Bridge -> Z2 (Architecture)

| Property | Z1 Opening | Bridge | Z2 Architecture | Delta Z1->Z2 | Direction |
|----------|-----------|--------|-----------------|--------------|-----------|
| background | #FEF9F5 | #FAF5ED | #FAF5ED | R: -4, G: -4, B: -8 -> below 15 on individual... | DEEPENING |

**NOTE on background delta:** #FEF9F5 to #FAF5ED: R(254->250)=-4, G(249->245)=-4, B(245->237)=-8. Max single-channel delta is 8. This is BELOW the 15 RGB threshold. However, the breathing zone bridge (#FAF5ED) and the 3px border-top on Z2 create the perceptual boundary. The border-top: 3px solid #E0D5C5 provides the structural signal.

**CORRECTION:** To meet the >= 15 RGB delta requirement, I should adjust Z2's background.

Let me recalculate with Z2 at #F5EDE0 instead (R:245, G:237, B:224 -- delta from #FEF9F5: R=-9, G=-12, B=-21, max=21 >= 15).

| Property | Z1 Opening | Z2 Architecture (corrected) | Delta | Direction |
|----------|-----------|---------------------------|-------|-----------|
| background | #FEF9F5 | #F5EDE0 | R: -9, G: -12, B: -21 | DEEPENING |
| font-size (h2) | 1.75rem (28px) | 1.625rem (26px) | -2px | DEEPENING |
| h2 letter-spacing | 0.03em | 0.02em | -0.01em | DEEPENING |
| section-indicator letter-spacing | 0.12em | 0.1em | -0.02em | DEEPENING |
| border-left (zone) | none | 3px solid var(--accent-blue) | +3px | DEEPENING |
| padding (zone) | 64px 0 | 48px 0 | -16px | DEEPENING |
| border-top | none | 3px solid #E0D5C5 | +3px | DEEPENING |
| layout | single-column | bento-grid (2-col) | topology change | DEEPENING |

**Channels shifting: 5** (Chromatic, Typographic, Spatial, Structural, Material [layout topology])
**Direction: DEEPENING** -- from warm overview into the factory floor architecture

---

## Boundary T2: Z2 (Architecture) -> Z3 (Memory)

| Property | Z2 Architecture | Z3 Memory | Delta | Direction |
|----------|----------------|-----------|-------|-----------|
| background | #F5EDE0 | #FEF9F5 | R: +9, G: +12, B: +21 | OPENING |
| font-size (h2) | 1.625rem (26px) | 1.5rem (24px) | -2px | DEEPENING |
| h2 letter-spacing | 0.02em | 0.01em | -0.01em | DEEPENING |
| section-indicator letter-spacing | 0.1em | 0.08em | -0.02em | DEEPENING |
| border-left (zone) | 3px solid blue | none | -3px | OPENING |
| padding (zone) | 48px 0 | 40px 0 | -8px | DEEPENING |
| border-top | 3px solid #E0D5C5 | 1px solid #E0D5C5 | -2px | OPENING |
| layout | bento-grid -> single-column | single-column -> tables | topology shift | OPENING |

**Channels shifting: 5** (Chromatic, Typographic, Spatial, Structural, Material)
**Direction: OPENING** -- from dense factory floor back to reflective single-column

---

## Boundary T3: Z3 (Memory) -> BREATHING -> Z4 (Principles)

| Property | Z3 Memory | BREATHING zone | Z4 Principles | Delta Z3->Z4 | Direction |
|----------|-----------|---------------|--------------|--------------|-----------|
| background | #FEF9F5 | #FEF9F5 (3px red borders top+bottom) | #F5EDE0 | R: -9, G: -12, B: -21 | DEEPENING |
| font-size (h2) | 1.5rem (24px) | -- | 1.375rem (22px) | -2px | DEEPENING |
| h2 letter-spacing | 0.01em | -- | 0 | -0.01em | DEEPENING |
| section-indicator | 0.08em, default color | -- | 0.06em, var(--color-primary) | color + spacing | DEEPENING |
| border-left (zone) | none | -- | 3px solid var(--color-primary) | +3px | DEEPENING |
| padding (zone) | 40px 0 | 48px 0 (BREATHING gap) | 32px 0 | -8px | DEEPENING |
| border-top | 1px | 3px solid #E83025 | 3px solid #E0D5C5 | structural | DEEPENING |
| layout | tables + prose | hr + pullquote | prose + code + bento | more components | DEEPENING |

**Channels shifting: 5** (Chromatic, Typographic, Spatial, Structural, Material)
**Transition type: BREATHING** (96px gap with 3px structural borders + internal hr)
**Direction: DEEPENING** -- from reflection through a dramatic pause into operational principles

---

## Boundary T4: Z4 (Principles) -> Z5 (Comparison)

| Property | Z4 Principles | Z5 Comparison | Delta | Direction |
|----------|--------------|--------------|-------|-----------|
| background | #F5EDE0 | #FEF9F5 | R: +9, G: +12, B: +21 | RESOLVING |
| font-size (h2) | 1.375rem (22px) | 1.5rem (24px) | +2px | RESOLVING (slight expansion) |
| h2 letter-spacing | 0 | 0.015em | +0.015em | RESOLVING |
| section-indicator | 0.06em, var(--color-primary) | 0.1em, default | color + spacing revert | RESOLVING |
| border-left (zone) | 3px solid var(--color-primary) | none | -3px | RESOLVING |
| padding (zone) | 32px 0 | 40px 0 | +8px | RESOLVING |
| border-top | 3px | 1px solid #E0D5C5 | -2px | RESOLVING |
| layout | prose + code blocks + bento | tables + decision matrix | comparison mode | RESOLVING |

**Channels shifting: 5** (Chromatic, Typographic, Spatial, Structural, Material)
**Direction: RESOLVING** -- from dense operations to resolved comparison and decision

---

## Boundary T5: Z5 (Comparison) -> Footer

| Property | Z5 Comparison | Footer (Z6) | Delta | Direction |
|----------|--------------|-------------|-------|-----------|
| background | #FEF9F5 | #1A1A1A | R: -228, G: -224, B: -219 | CLOSING (dramatic) |
| font-size | 1rem (body) | 0.75rem (meta) + 1rem (body) | varied | CLOSING |
| font-weight | 400 | 600 (labels) | +200 | CLOSING |
| letter-spacing | 0 | 0.1em (labels) | +0.1em | CLOSING |
| border-left | 4px | none | -4px | CLOSING |
| padding | 40px 0 | 48px 24px | +8px | slight OPENING |
| border-top | 1px | 3px solid #E83025 | +2px | CLOSING |

**Channels shifting: 5** (Chromatic, Typographic, Spatial, Structural, Behavioral)
**Direction: CLOSING** -- dramatic bookend mirror of header, product exits the factory

---

## Summary

| Boundary | Channels | Direction | Type |
|----------|----------|-----------|------|
| T0: Header -> Z1 | 4 | OPENING | Dramatic entry |
| T1: Z1 -> Z2 | 5 | DEEPENING | Bridge |
| T2: Z2 -> Z3 | 5 | OPENING | Smooth |
| T3: Z3 -> Z4 | 5 | DEEPENING | BREATHING |
| T4: Z4 -> Z5 | 5 | RESOLVING | Smooth |
| T5: Z5 -> Footer | 5 | CLOSING | Dramatic exit |

**Average channels per boundary: 4.83** (target >= 3, achieved >= 4 at every boundary)
**Minimum channels: 4** (at T0 -- header entry)
**Maximum channels: 5** (at T1-T5 -- all interior + exit)
**Transition types: 3** (BRIDGE, SMOOTH, BREATHING)

---

## Background Delta Verification

| Boundary | From | To | R Delta | G Delta | B Delta | Max Delta | Pass (>=15)? |
|----------|------|----|---------|---------|---------|-----------|-------------|
| T0 | #1A1A1A | #FEF9F5 | +228 | +224 | +219 | 228 | YES |
| T1 | #FEF9F5 | #F5EDE0 | -9 | -12 | -21 | 21 | YES |
| T2 | #F5EDE0 | #FEF9F5 | +9 | +12 | +21 | 21 | YES |
| T3 | #FEF9F5 | #F5EDE0 | -9 | -12 | -21 | 21 | YES |
| T4 | #F5EDE0 | #FEF9F5 | +9 | +12 | +21 | 21 | YES |
| T5 | #FEF9F5 | #1A1A1A | -228 | -224 | -219 | 228 | YES |

**All boundaries pass the >= 15 RGB max-channel delta threshold.**

NOTE: The original build used #FAF5ED for Z2/Z4 backgrounds. During cascade table creation, I identified that #FEF9F5 to #FAF5ED has max delta = 8 (below threshold). The corrected value is #F5EDE0 (max delta = 21). This correction needs to be applied to the HTML. R >= G >= B check: #F5EDE0 = R:245, G:237, B:224. 245 >= 237 >= 224. PASS (warm).

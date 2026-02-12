<!--
===============================================================================
INLINE THREADING HEADER
File: explorations/combination/research-packages/research-package-cd-005.md
Tier: C | Stage: 5 (Combination CD) | Generated: 2026-02-11
Purpose: Pre-compiled research package for Builder-E (CD-005: per Phase 0 decision)

BUILT ON: R5-COMBINATION-THEORY.md, HANDOFF-AD-TO-CD.md, AD-PA-CONVENTIONS.md,
          ACCUMULATED-IDENTITY-v2.md, tokens/*.md, anti-patterns/registry.md
CONSUMED BY: Builder-E (CD-005 exploration agent, Wave 2)
===============================================================================
-->

# Research Package: CD-005 -- Per Phase 0 Decision
## Builder-E Assignment (Wave 2)

===============================================================================
## 0. SOUL CHECKLIST (MANDATORY -- VERIFY BEFORE AND AFTER BUILD)
===============================================================================

```
[ ] border-radius: 0 everywhere
[ ] box-shadow: none
[ ] No filter: drop-shadow()
[ ] font-family: 'Instrument Serif'; font-style: italic for Essence/Core ONLY
[ ] 2-zone callouts + border-left: 4px solid + color differentiation
[ ] No physical-movement animation (ANTI-PHYSICAL identity)
[ ] opacity: 1 on all backgrounds (no rgba with alpha < 1.0)
[ ] 3-category borders ONLY (1px, 3px, 4px -- ZERO 2px)
[ ] #E83025 only accent color
[ ] No hover depth effects (no translateY, no scale-up)
```

===============================================================================
## 1. COMMON REFERENCES (ALL CD BUILDERS)
===============================================================================

### Reference Paths
| Document | Path (relative to docs-spa/app/showcase/) |
|----------|-------------------------------------------|
| AD-PA-CONVENTIONS.md | DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md |
| CD-CONVENTION-SPEC.md | DESIGN-SYSTEM/provenance/stage-5-combination-cd/CD-CONVENTION-SPEC.md |
| combination-rules.md | explorations/combination/combination-rules.md |
| Lock Sheet | explorations/combination/lock-sheet.md |
| ACCUMULATED-IDENTITY-v2.md | knowledge-architecture/ACCUMULATED-IDENTITY-v2.md |

### The 4 Combination Rules
1. **Velocity Rule (T2):** Insert FAST between consecutive SLOW.
2. **Temperature Rule (T3):** Buffer warm/cold with neutral.
3. **Weight Rule (G3):** 1 heavy to 1-2 light before next heavy.
4. **Proximity Rule (G1):** Tight (8-16px), standard (24-32px), section (48-64px).

### 11x11 Compatibility Matrix
R5-COMBINATION-THEORY.md Appendix.

### The 5 Soul Pieces
| # | Soul Piece | CSS Lock |
|---|-----------|----------|
| 1 | Sharp Edges | border-radius: 0 |
| 2 | Serif for Essence/Core | Instrument Serif italic |
| 3 | Callout Family DNA | 2-zone + 4px left border |
| 4 | No Shadows | box-shadow: none |
| 5 | Squares Signal System | border-radius: 0 on indicators |

### Compound Rules (AD-F-024): Sequential, not simultaneous.
### Transition Grammar: See common block reference.

===============================================================================
## 2. YOUR COMBINATION (TWO OPTIONS)
===============================================================================

This page depends on the Phase 0 decision about CD-005's scope. Read
CD-005-EVALUATION.md (produced by Agent-0C2) to determine which option applies.

### OPTION B: IF KEPT (Default -- Callout Showcase)

| Dimension | Pattern | Source |
|-----------|---------|--------|
| DD (Density) | PULSE | DD-F-001: Alternating dense/sparse |
| OD (Organization) | CONVERSATIONAL | OD-001: Dialogue structure |
| AD (Axis) | Z-PATTERN | AD-001 (Z-Pattern) |

**Why Option B:** A focused callout showcase that tests all 5 callout types (Info, Tip, Gotcha, Essence, Challenge) under PULSE density with conversational organization. This is the callout family DNA stress test -- every sibling in one page.

**Components:** All 5 callout types. Code Snippet (for reference examples). Prose sections.

**Challenge:** 5 callout types on one page risks callout cacophony (A1). The PULSE rhythm must separate callout clusters with non-callout content.

### OPTION A: IF REPLACED (Multi-Axis Alternative)

| Dimension | Pattern | Source |
|-----------|---------|--------|
| DD (Density) | WAVE | DD-F-005 variant: oscillating density |
| OD (Organization) | SPATIAL | OD-003: Position-based |
| AD (Axis) | Z + F + BENTO | Multi-axis compound |

**Why Option A:** A multi-axis compound that tests 3 axis patterns on one page with WAVE density. This is a higher-complexity alternative that exercises the transition grammar more aggressively.

**Components:** All 11 must appear at least once. Multi-axis transitions. WAVE density oscillation.

**Challenge:** Managing 3 axis patterns sequentially (AD-F-024) with proper transition grammar between each.

===============================================================================
## 3. R-5 FINDINGS TO TEST (BOTH OPTIONS)
===============================================================================

| Finding | ID | Summary | Application (Option B) | Application (Option A) |
|---------|----|---------|-----------------------|-----------------------|
| Family Cohesion | H1 | Same-family components combine seamlessly | THE primary test: 5 callout siblings must feel unified | Callout family within each axis section |
| Semantic Dissonance | T3 | Temperature oscillation | 5 callouts span warm (Tip, Challenge, Essence), neutral (Info), cold (Gotcha) | Temperature managed per axis section |
| 2-Callout Limit | T4 | Max 2 consecutive callouts | Critical: with 5 types, strict enforcement | Standard enforcement |
| Component Moods | R2 | Each component has an emotional valence | Map all 5 moods: Helpful, Friendly, Urgent, Reverent, Inviting | Map moods across 11 components |
| Component Voices | R3 | Each component has a voice register | All 5 callout voices on one page: concierge, colleague, advisor, archivist, mentor | All 11 voices present |
| Density Wave | S2 | Wave pattern, not plateau | PULSE alternation visible | WAVE oscillation visible |
| Advisory Cluster | G4 | Group related advisories | Can 2 related callouts cluster effectively? | Advisory clusters within sections |
| Temperature Whiplash | A5 | Warm-cold oscillation | Biggest risk: Essence (warm) followed by Gotcha (cold) | Risk per axis transition |
| Callout Cacophony | A1 | 3+ callouts = fatigue | THE primary anti-pattern to defeat | Risk in component-dense sections |
| Resolution Component | S4 | End with resolution | End with Challenge (invitation) or Tip (parting wisdom) | End with resolution per section |

### Additional for Option A Only
| Finding | ID | Summary | Application |
|---------|----|---------|-----------|
| Velocity Mismatch | T2 | FAST between SLOW | Apply when Code or Reasoning appear between axis sections |
| Weight Balance | G3 | Heavy-light ratio | All 11 components span all weight classes -- balance required |
| Setup-Payoff Arc | S1 | Context -> Map -> Principle -> Demo -> Action | Each axis section follows the arc |
| Recipe 5: Tutorial | Recipe 5 | Info -> Task -> Code -> Tip -> Code -> Gotcha -> Challenge | Use for the most complex section |

===============================================================================
## 4. DENSITY PATTERN
===============================================================================

### For OPTION B: PULSE

```
DENSE ####    ####    ####
SPARSE    ....    ....    ....
```

**PULSE Application:**
1. **Dense: Callout Pair 1** -- Info + Tip (both fast, related, warm-to-neutral transition)
2. **Sparse: Prose Explanation** -- Why these callouts work together
3. **Dense: Callout Pair 2** -- Gotcha + Code Snippet (warning + example)
4. **Sparse: Prose Explanation** -- The temperature contrast
5. **Dense: Callout Pair 3** -- Essence + Challenge (philosophical + action)
6. **Sparse: Resolution** -- Summary Tip, footer

Z-PULSE equivalence: Each Z-sweep IS one PULSE beat. The horizontal scan across the conversational Q&A or callout pair is the dense phase. The return to the left margin is the sparse phase.

### For OPTION A: WAVE

```
HIGH ████        ████
MED      ████        ████
LOW          ████        ████
```

**WAVE Application:**
1. **Z-Pattern Section (MED):** Conversational introduction, orientation callouts
2. **Transition (LOW):** Breathing + intermediary element
3. **F-Pattern Section (HIGH):** Dense progressive content, CRESCENDO within section
4. **Transition (LOW):** Breathing
5. **Bento Section (MED-HIGH):** Grid islands with component variety
6. **Resolution (LOW):** Summary, footer

===============================================================================
## 5. STRUCTURAL CONSTRAINTS
===============================================================================

### Standard CD Constraints (apply to both options)
- max-width: 1100px (C-01)
- Prose: max-width: 70ch (C-20)
- Footer REQUIRED (C-02), 3px border-top (C-04)
- Responsive: 768px (C-25), 960px for 4+ cols (C-08)
- Progressive enhancement (C-09)
- Token-only CSS (C-07)
- Border system: 1px / 3px / 4px only, ZERO 2px
- Max 2 callouts per viewport
- Dark header (C-16)
- Page personality: "Scholarly, Deliberate, Warm" (C-22)

### Option B Specific
- Callout spacing follows asymmetric padding: 24px top, 28px bottom (from spacing.md)
- Conversational structure: Question (narrow, serif) -> Answer (full-width, sans)
- Z-sweep width variation creates TIDAL sub-rhythm within PULSE

### Option A Specific
- 3 axis transitions required: Z->F (Smooth), F->Bento (Bridge), or Z->Bento (Bridge)
- Each axis section commits to ONE pattern (AD-F-024)
- Transition elements between sections: prose paragraph, callout, or section heading

===============================================================================
## 6. ANTI-PATTERNS TO AVOID
===============================================================================

| Anti-Pattern | Risk (Option B) | Risk (Option A) | Mitigation |
|--------------|-----------------|-----------------|------------|
| Callout Cacophony (A1) | CRITICAL | HIGH | Strict 2-per-viewport. Interleave with non-callout content. |
| Temperature Whiplash (A5) | HIGH | MEDIUM | Buffer Essence/Challenge (warm) from Gotcha (cold) with neutral components. |
| Same Density | MEDIUM | MEDIUM | Enforce PULSE/WAVE alternation. |
| Missing Context (A6) | LOW | MEDIUM | Each section starts with orientation. |
| 2px Borders | ZERO TOLERANCE | ZERO TOLERANCE | Only 1px, 3px, 4px. |
| Semi-Transparent | ZERO TOLERANCE | ZERO TOLERANCE | opacity === 1.0. |

===============================================================================
## 7. WAVE 2 NOTE
===============================================================================

This is a Wave 2 build. Read the Wave 1 identity delta from the lead BEFORE building. It may contain:
- Resolution of the Option A vs Option B decision
- Wave 1 combination findings that affect callout treatment
- Updated conventions or scoring adjustments

===============================================================================
## 8. SCORING CRITERIA
===============================================================================

CD-005 will be scored on the standard 40-point rubric:
- Soul compliance (10 pts): Zero violations required
- Research application (10 pts): Callout family DNA (H1) is the primary test for Option B; component coverage for Option A
- Density pattern fidelity (10 pts): PULSE/WAVE clearly perceptible
- Combination coherence (10 pts): Callout variety without cacophony (Option B) or multi-axis with grammar (Option A)

### Target Score: 34-36/40
Option B is a focused test with one primary risk (callout cacophony). Option A is more ambitious with multi-axis complexity. Either way, the page must demonstrate that the combination rules work at their respective scale.

===============================================================================

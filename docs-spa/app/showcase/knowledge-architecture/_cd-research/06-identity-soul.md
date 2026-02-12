# 06 — Identity and Soul Constraints for CD

## Research Summary
**Sources read:**
1. `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` (519 lines)
2. `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` (300 lines)
3. `checkpoints/DISCOVERIES-LOG.md` (896 lines)
4. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` (234 lines — supplementary)

---

## 1. THE 5 SOUL PIECES — Status and CD Implications

The 5 soul pieces are **perceptual truths** (ways of seeing), not CSS rules. The CSS is the secondary manifestation.

| # | Soul Piece | Perceptual Truth | Locked CSS | Status Across Stages |
|---|-----------|-----------------|------------|----------------------|
| 1 | **Sharp Edges Command Authority** | Rounded corners say "negotiable." Sharp edges say "this is exact, verified, the way." | `border-radius: 0` | DD: 0 violations. OD: 0/3,479 elements. AD: 0/3,190 elements. **LOCKED.** |
| 2 | **The Archivist Speaks in Serif** | Serif italic = accumulated wisdom voice. Sans-serif = present voice. | `font-family: 'Instrument Serif'; font-style: italic` (EssenceBox, CoreAbstraction only) | Verified after `document.fonts.ready` in AD. **LOCKED.** |
| 3 | **Callouts Share Family DNA** | Components in a family must share structural DNA — same structure, different personalities. | 2-zone (label + body), `border-left: 4px solid`, differentiation through COLOR only | Maintained across all stages. **LOCKED.** |
| 4 | **Shadows Lie About Depth** | Shadows create FALSE DEPTH. Nothing should float. Everything is GROUNDED on the same plane. | `box-shadow: none` | 0 violations across ~13,000 DOM elements (3 independent verifications). **LOCKED.** |
| 5 | **Squares Signal System, Circles Signal Softness** | Squares suggest precision/exactness. Circles suggest flexibility/approximation. | `border-radius: 0` on step numbers, checkboxes, all indicators | Maintained throughout. **LOCKED.** |

### Key Determination: No 6th Soul Piece

- **DD stage:** No 6th discovered.
- **OD stage:** Closest candidate was OD-F-005 ("Organization IS Density") — determined to be a META-PATTERN, not a soul piece. Soul pieces constrain CSS; meta-patterns constrain information architecture. Different levels.
- **AD stage:** No 6th discovered. AD-F-028 explicitly confirms the 5-piece model is complete.
- **Implication for CD:** The 5-piece model is FINAL across 4 stages. CD should NOT seek a 6th soul piece. However, CD may deepen the understanding of existing pieces at the combination scale (similar to how AD deepened Soul Piece #4 into the full ANTI-PHYSICAL identity).

### The ANTI-PHYSICAL Identity (Extension of Soul Pieces #1 + #4)

The system rejects ANYTHING that makes flat screens pretend to be three-dimensional:

| Category | What Fails | Count (OD+AD) |
|----------|-----------|---------------|
| Decorative depth | Card shadows, rounded progress steppers, gradient connectors | 6 |
| Animated z-movement | Transform hover-lift, scale-up hover, CSS perspective/3D | 5 |
| Rounded shapes | Rounded badges, progress bars | 3 |
| Gradients suggesting material | Gradient transitions, blur animations | 3 |
| Traffic-light color semantics | Red/amber/green material signals | 2 |
| Parallax/z-space | Parallax scrolling, layered movement | 1 |
| Physical movement metaphors (v2) | CSS animations implying object movement | 8 (AD-005) |

**AD-005 extension:** "Choreography" means reader attention movement through static structure, NOT CSS animation. CD must inherit this: combination dynamics are STRUCTURAL, not animated.

**Binary rules CD must enforce:**
- `opacity === 1.0` on ALL visual elements. No exceptions.
- Static solid offset = flat graphic (PASS). Animated offset = physics simulation (FAIL).
- Does the offset move? If yes -> FAIL. If no -> PASS.

---

## 2. ACCUMULATED-IDENTITY-v2.md — What It Contains

ACCUMULATED-IDENTITY-v2.md is the **complete inherited mind** of the KortAI Design System as of AD completion. It was evolved from v1.1 (2026-02-09) by synthesizing 28 AD-F findings, 6 AD explorations, 23 audit reports, and 3 identity deltas.

### Document Structure (8 sections + appendix, 519 lines)

| Section | Content |
|---------|---------|
| 1. WHO WE ARE | Master soul statement, 5 soul pieces, ANTI-PHYSICAL identity, 6 Universal Rules, Soul Test, Core Philosophy Contrast |
| 2. WHAT WE'VE LEARNED | DD findings (DD-F-001 through DD-F-018), OD findings (OD-F-001 through OD-F-013), AD findings (AD-F-001 through AD-F-028), Lesson Chains |
| 3. WHAT WE HONOR | Absolute constraints (soul-locked), Border System (3-category), Process constraints, Provenance constraints |
| 4. WHAT WORKED | Patterns validated (all 18 across DD/OD/AD), AD techniques that elevated quality, Structural patterns that preserved quality |
| 5. WHAT DIDN'T WORK | Anti-patterns (8 cumulative), Design system danger zones |
| 6. WHERE WE ARE | Pipeline position, current AD status, Research utilization |
| 7. OPEN QUESTIONS FOR CD | 5 new open questions (answered AD questions + new CD questions) |
| 8. THE IDENTITY STATEMENT (v2) | Full paragraph-form identity declaration |
| APPENDIX | Token Lock (:root block), AD-to-Density-Org Pairing Matrix, Transition Grammar Quick Reference, DD-F Finding Consumption Matrix |

### Key Content for CD

**The Identity Statement (v2):** "The KortAI design system is not a style guide. It is a design mind -- a way of seeing, thinking, and deciding that was discovered through iterative perceptual deepening rather than decided by committee."

**Crown Jewel Discovery:** "Axis IS Organization IS Density." Three dimensions that appeared independent are actually three perspectives on one phenomenon: how content arrangement shapes attention flow. The meta-equivalence: ATTENTION TOPOLOGY.

**Research Utilization Status:**
- R-1: 22/28 applied (78.6%) -- OD PRIMARY
- R-2: ~18/27 applied (~67%) -- AD evaluated
- R-3: ~10/51 formally applied
- R-4: 169/192 cited (~88%) -- AD PRIMARY
- R-5: **0/39 -- PRIMARY source for CD**
- EXT-OD: 94 bespoke findings (OD)
- EXT-AXIS: 33 bespoke findings (AD)

---

## 3. SHOULD CD PRODUCE v3?

**YES. CD MUST produce ACCUMULATED-IDENTITY-v3.**

Evidence from multiple sources:

1. **ACCUMULATED-IDENTITY-v2.md itself (line 518):** "CD completion will generate ACCUMULATED-IDENTITY-v3 with combination findings, component tolerance rules, and potentially refined transition grammar."

2. **Provenance CLAUDE.md (Section 7):** "CD must consume v2 and produce v3. The identity grows with each stage -- it never shrinks."

3. **HANDOFF-AD-TO-CD.md (acknowledgment checklist):** "I will read ACCUMULATED-IDENTITY-v2.md for full accumulated context."

### What v3 Must Add (Based on Open Questions)

| Addition | Source |
|----------|--------|
| DD-F-013 component tolerance test results | v2 Section 7, Q1 |
| Transition grammar refinements from combination contexts | v2 Section 7, Q2 |
| R-5 Combination Theory consumption record | v2 Section 6 (R-5 at 0%) |
| Compound page structure rules (optimal transitions per page) | v2 Section 7, Q4 |
| Cross-exploration component reuse rules | v2 Section 7, Q5 |
| CD-F-### findings (new combination findings) | Pattern: DD-F → OD-F → AD-F → CD-F |
| Combination-scale attention topology | HANDOFF Q3 |
| Sequential vs parallel combination determination | HANDOFF Q4 |
| Whether combination creates a 6th fractal scale | HANDOFF Q5 |

### What v3 Must Preserve from v2

- All 5 soul pieces (unchanged)
- All lesson chains (extended with CD links)
- All absolute constraints
- The 3-way unification (axis=org=density)
- The ATTENTION TOPOLOGY meta-equivalence
- Pipeline position (updated to show CD complete)
- All prior findings registries (DD-F, OD-F, AD-F)

---

## 4. IDENTITY EVOLUTION: DD -> OD -> AD -> CD

### DD (Density) — The Foundation
- Discovered the 6 density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL)
- DD-F-006 (FRACTAL) became the most important finding — self-similar density at 4 (later 5) scales
- Established: soul compliance is achievable (34.5/40 average, 100% soul compliance)
- Key lesson: research application rate correlates with quality

### OD (Organization) — The First Elevation
- Discovered that "Organization IS Density" (OD-F-005/OD-F-MP-001)
- 6 organizational patterns paired naturally with density patterns
- Confirmed no 6th soul piece — meta-patterns (like org=density) are structural, not perceptual
- Added: 94 EXT-OD bespoke findings, 17 OD-F findings
- Key lesson: fresh-eyes adversarial methodology is essential

### AD (Axis) — The Unification
- ELEVATED DD-F-012: axis does not "serve" density — axis IS density IS organization
- 5 equivalence mechanisms validated (temporal, spatial, proportional, kinetic, gravitational)
- Crown jewel: ATTENTION TOPOLOGY (AD-F-023) — the meta-equivalence
- Added: 33 EXT-AXIS bespoke findings, 28 AD-F findings, transition grammar
- Key lesson: convention spec BEFORE building eliminates dialect divergence

### CD (Combination) — What It Should Add

Based on all sources, CD should contribute:

1. **Combination Dynamics:** How do validated patterns from DD, OD, and AD behave when COMBINED? DD-F-013 (component tolerance) is the explicit gate finding.

2. **Attention Topology at Combination Scale:** AD-F-023 described topology for individual patterns. CD must discover how topologies compose when multiple patterns operate on the same page.

3. **Transition Grammar Refinement:** AD-F-025 produced the 5x5 matrix for transitions between axis patterns. CD must test these transitions in actual combined page contexts.

4. **R-5 Consumption:** R-5 (39 findings, 0% consumed) is CD's PRIMARY research source, just as R-4 was AD's.

5. **The Combination Meta-Question:** Does combination reveal a new dimension beyond axis/org/density? Or does it confirm that ATTENTION TOPOLOGY is the final word? This is the equivalent of AD's discovery that "axis IS density" — CD might discover something equally unifying or might confirm the 3-way model is complete.

---

## 5. CONVENTION SPEC INHERITANCE (DD -> OD -> AD -> CD)

### The Evolution

| Stage | Convention Spec | Sections |
|-------|----------------|----------|
| DD | None (pre-convention era) | N/A — DD files built before convention concept existed |
| OD | OD-CONVENTION-SPEC.md | Sections 1-11 (created after OD-001/002, applied to OD-003+) |
| AD | AD-CONVENTION-SPEC.md (822 lines) | Sections 1-11 INHERITED from OD + Sections 12-16 AD-SPECIFIC |
| CD | CD-CONVENTION-SPEC.md (to be created) | Sections 1-16 INHERITED from AD + Sections 17-20 CD-SPECIFIC |

### Key Learning: Convention-Before-Building

- **DD:** Built without convention. Required DD-BACKPORT treatment during Comprehensive Audit.
- **OD:** OD-001/002 built before convention; OD-003+ built with convention. Created 3 "dialect" clusters (Polished, Functional, Editorial).
- **AD:** Convention spec created in Phase 0 BEFORE any builder started. Result: ZERO dialect divergence. This is the lesson.
- **CD MUST:** Create CD-CONVENTION-SPEC.md in Phase 0. Inherit AD sections 1-16. Add sections 17-20 for:
  - Section 17: Combination rules
  - Section 18: Transition grammar implementation
  - Section 19: Component density tolerance thresholds
  - Section 20: Combination accessibility requirements

### DD-BACKPORT Pattern

DD files (DD-001 through DD-006) were retroactively patched with `/* DD-BACKPORT: ... */` CSS comments during Comprehensive Audit. Fixes included:
- VS Code default syntax highlighting colors -> locked palette
- Missing skip-link navigation and focus-visible CSS
- Missing reduced-motion media query
- Code block backgrounds #1E1E1E -> convention #1A1A1A

This backport pattern is the reference model for applying convention standards retroactively.

---

## 6. SOUL COMPLIANCE VERIFICATION FOR CD

### What CD Must Verify (Binary Checks)

| Check | Value | Tool |
|-------|-------|------|
| `border-radius` | `=== 0` everywhere | DOM query: `getComputedStyle(el).borderRadius` |
| `box-shadow` | `=== 'none'` everywhere | DOM query: `getComputedStyle(el).boxShadow` |
| `filter: drop-shadow()` | Not present | CSS text search |
| `opacity` on visual elements | `=== 1` | DOM query: `getComputedStyle(el).opacity` |
| `transform: translateY()` on hover | Not present | CSS text search for hover rules |
| CSS animation implying movement | Not present | CSS text search + perceptual review |
| `--color-primary` | `#E83025` | CSS custom property check |
| `--font-display` | `'Instrument Serif'` | After `document.fonts.ready` |
| rgba() backgrounds | All alpha must be 1.0 | CSS text search for rgba |
| Callout structure | 2-zone + 4px left border | Visual + structural audit |

### The Soul Test (Quick Perceptual Check)

> "Could this component exist in a Bootstrap/Tailwind/Material project without modification?"
> If YES = **FAIL**. The soul is compromised.

### Verification Methodology (From Prior Stages)

1. **Programmatic verification:** DOM queries across all elements (AD: 3,190 elements, OD: 3,479 elements, Comprehensive Audit: ~13,000 elements)
2. **Visual verification:** Full-page screenshots at 1440px AND 768px
3. **Fresh-eyes adversarial:** At least one reviewer with NO convention access
4. **document.fonts.ready:** CRITICAL before font checking (false positives without it)

### Historical Compliance Record

| Stage | Elements Checked | Soul Violations | Method |
|-------|-----------------|-----------------|--------|
| DD (6 explorations) | ~2,000 (est) | 0 | Perceptual deepening audit |
| OD (6 explorations) | 3,479+ | 0 | 17-agent granular audit |
| OD (comprehensive) | ~13,000 | 0 | 3 independent methodologies |
| AD (6 explorations) | 3,190+ | 0 (3 fixed during audit) | 24+-agent multi-dimensional audit |

CD must maintain this 0-violation record. The 3 violations caught and fixed during AD audit demonstrate that the audit process works -- violations CAN be introduced accidentally but MUST be caught and fixed before stage completion.

### Additional CD-Specific Checks

Because CD combines patterns, additional soul checks are needed:

1. **Combination boundary check:** Do transitions between combined patterns introduce soul violations? (e.g., does a Z-Pattern + Bento Grid boundary inadvertently create a visual "depth" illusion?)
2. **Component reuse check:** When a callout designed for one axis pattern appears in a different axis context, does it maintain family DNA?
3. **Density tolerance check (DD-F-013 gate):** When components are compressed by combination density, do they maintain soul compliance or crack?

---

## 7. LOCKED TOKEN REFERENCE (Copy-Paste :root Block)

```css
:root {
  /* Colors */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Typography */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Geometry -- LOCKED */
  --border-radius: 0;
  --box-shadow: none;

  /* Callout Accents */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* Standardized Border */
  --border-left-width: 4px;
}
```

---

## 8. SUMMARY — KEY IDENTITY/SOUL FACTS FOR CD

1. **5 soul pieces are FINAL.** No 6th exists. Confirmed across 4 stages (DD, OD, AD, and the negative determinations for each).

2. **ANTI-PHYSICAL identity is comprehensive.** Extends beyond just "no shadows" to reject ALL physicality cues including CSS animations, parallax, gradients suggesting material, and even movement METAPHORS.

3. **CD MUST produce ACCUMULATED-IDENTITY-v3.** Explicitly mandated by v2 and by the provenance chain protocol.

4. **Convention spec inheritance is mandatory.** CD-CONVENTION-SPEC.md = AD sections 1-16 + CD sections 17-20. Must be created BEFORE building (AD lesson).

5. **Soul compliance must be 0 violations.** Historical record is 0 violations across ~19,669+ audited DOM elements. CD must maintain this.

6. **The identity is a MIND, not a style guide.** The reasoning behind decisions is inherited, not just the rules. Any agent absorbing this identity can make NEW decisions consistent with prior ones.

7. **R-5 (0% consumed) is CD's primary research.** Just as R-4 was AD's primary, R-5 is CD's. All 39 findings must be evaluated.

8. **DD-F-013 is CD's gate finding.** Component density tolerance under combination must be formally tested.

9. **3-way unification (axis=org=density) is inherited.** CD operates at the TOP of the transitive chain. Combinations must maintain the equivalence or the combination is INVALID.

10. **Transition grammar (AD-F-025) is inherited.** The 5x5 matrix (Smooth/Bridge/Breathing) must be respected and potentially extended for combination contexts.

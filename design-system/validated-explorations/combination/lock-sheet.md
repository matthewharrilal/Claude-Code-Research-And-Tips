<!--
===============================================================================
INLINE THREADING HEADER
File: explorations/combination/lock-sheet.md
Tier: B | Stage: 5 (Combination CD) | Generated: 2026-02-11
Purpose: CD lock sheet classifying all inherited and new conventions by
         modification authority tier

BUILT ON: AD-PA-CONVENTIONS.md (27 conventions), AD-CONVENTION-SPEC.md (822 lines),
          ACCUMULATED-IDENTITY-v2.md, HANDOFF-AD-TO-CD.md, tokens/*.md,
          R5-COMBINATION-THEORY.md, anti-patterns/registry.md
CONSUMED BY: All CD builders (research packages reference this file),
             CD auditors, CD convention spec
===============================================================================
-->

# CD Lock Sheet
## Convention Classification for Stage 5 (Combination Design)

===============================================================================
## ALWAYS-LOCKED (Cannot Be Challenged -- Soul Identity)
===============================================================================

These conventions define the system identity. Challenging them requires
re-running the entire perceptual audit across all stages. No CD exploration
may violate these under any circumstances.

| ID | Convention | CSS/Value | Source |
|----|-----------|-----------|--------|
| AL-01 | border-radius | `0` | Soul Piece #1, geometry.md, 0 violations across 18+ explorations |
| AL-02 | box-shadow | `none` | Soul Piece #4, geometry.md, 0 violations across 18+ explorations |
| AL-03 | No filter: drop-shadow() | Not permitted | Soul Piece #4 extension |
| AL-04 | Instrument Serif for Essence/Core ONLY | `font-family: 'Instrument Serif'; font-style: italic` | Soul Piece #2, typography.md |
| AL-05 | Callout family DNA | 2-zone (label + body) + border-left: 4px solid + color differentiation | Soul Piece #3 |
| AL-06 | Three-font system | Instrument Serif + Inter + JetBrains Mono | typography.md, verified 6/6 AD pages |
| AL-07 | Primary accent color | `#E83025` (Sanrok red) -- the ONLY accent | colors.md |
| AL-08 | Background warmth | `#FEF9F5` (warm cream) -- not cool white | colors.md |
| AL-09 | Text color | `#1A1A1A` (near-black) -- not pure black | colors.md |
| AL-10 | ANTI-PHYSICAL identity | No CSS animations implying object movement, no parallax, no z-depth illusion | AD-F-020, ACCUMULATED-IDENTITY-v2 |
| AL-11 | opacity === 1.0 | Fully opaque on ALL visual elements. No rgba alpha < 1.0. | OD-AP-003, binary rule |

===============================================================================
## LOCKED (Research-Backed -- Challenging Requires Counter-Evidence)
===============================================================================

These conventions have strong research and perceptual evidence. Challenging
them requires documented counter-evidence from 3+ independent sources.

### Design Mechanics (DM)

| ID | Convention | Value/Rule | Source | Evidence Strength |
|----|-----------|-----------|--------|-------------------|
| DM-001 | Container max-width | 1100px | C-01, 6/6 AD pages + user intervention | LOCKED (unanimous) |
| DM-002 | Mandatory footer/capstone | Visual terminus required | C-02, 6/6 AD pages | LOCKED (most-flagged finding) |
| DM-003 | Breathing zone budget | 15-25% of page height, no zone > 300px | C-11, 6/6 AD pages | LOCKED (floor+ceiling) |
| DM-004 | Progressive enhancement | Initial CSS state = visible. JS may add hidden state. | C-09, 5/5 unanimity AD-006 | SOFT-LOCKED (principle universal) |
| DM-005 | 960px early collapse | 4+ column grids collapse at 960px, not 768px | C-08, 5/5 unanimity AD-006 | SOFT-LOCKED |
| DM-006 | Prose line-length | max-width: 70ch on body paragraphs | C-20, 6/6 AD pages | REINFORCED |
| DM-007 | Dark header | background: #1A1A1A, cream text, 3px red bottom | C-16, unanimously praised | REINFORCED |
| DM-008 | Footer mirrors header | Same border weight (3px), same color family | C-23, 6 independent fixers converged | LOCKED |
| DM-009 | Page personality | "Scholarly, Deliberate, Warm" at 1440px | C-22, independently discovered by auditors | REINFORCED |
| DM-010 | Token-only CSS | All values reference custom properties | C-07, 6/6 fix reports verify | REINFORCED |

### Combination Rules (from R-5)

| ID | Convention | Rule | Source | Evidence Strength |
|----|-----------|------|--------|-------------------|
| CR-01 | Velocity rule | Insert FAST between consecutive SLOW components | R-5 T2 | Research-backed |
| CR-02 | Temperature rule | Buffer warm/cold with neutral components | R-5 T3 | Research-backed |
| CR-03 | Weight rule | Golden ratio: 1 heavy to 1-2 light before next heavy | R-5 G3 | Research-backed |
| CR-04 | Proximity rule | 8-16px tight, 24-32px standard, 48-64px section | R-5 G1 | Research-backed |

### Density/Axis Findings

| ID | Convention | Rule | Source | Evidence Strength |
|----|-----------|------|--------|-------------------|
| DA-01 | DD-F-013 component tolerance | Components have density tolerance limits (CD GATE finding) | DD-F-013 | CD must formally test |
| DA-02 | AD-F-024 sequential compound | One axis pattern per section. Compound through scroll. | AD-F-024, 6/6 AD pages | LOCKED |
| DA-03 | AD-F-025 transition grammar | 5x5 matrix: Smooth/Bridge/Breathing | AD-F-025, AD-006 | LOCKED |
| DA-04 | Max 2 callouts per viewport | Callout stacking creates alarm fatigue | DD-F-014, confirmed in AD | LOCKED |
| DA-05 | 3-category border system | 1px (separator), 3px (structural), 4px (semantic). ZERO 2px. | OD-F-AP-001, AD-F-014 | LOCKED |
| DA-06 | DD-F-006 fractal at 5 scales | Self-similar at nav/page/section/component/character | DD-F-006, AD-F-027, AD-F-028 (bounded) | LOCKED |

===============================================================================
## CHALLENGEABLE (Convention Values Without Direct Research)
===============================================================================

These conventions are based on reasonable judgment or single-source evidence.
They may be adapted during CD with documented rationale.

### Spacing Values

| ID | Convention | Current Value | Source | Challenge Condition |
|----|-----------|--------------|--------|---------------------|
| CH-01 | Tight grouping | 8-16px | R-5 G1 | If combination context requires different coupling distance |
| CH-02 | Standard grouping | 24-32px | R-5 G1 | If combination context requires adjustment |
| CH-03 | Section break | 48-64px | R-5 G1 | If combination transitions need more or less space |
| CH-04 | Recovery after dense | 64-80px | spacing.md | If combination density patterns need different recovery |

### Temperature Extended Terms

| ID | Convention | Current Value | Source | Challenge Condition |
|----|-----------|--------------|--------|---------------------|
| CH-05 | Essence = "Reverent" | Warm temperature | R-5 R2 | If Essence in ambient role reads differently |
| CH-06 | Task = "Utilitarian" | Cold temperature | R-5 R2 | If Task in combination reads more neutral |
| CH-07 | Code = "Neutral" | Buffer temperature | R-5 T3 | If Code in combination has perceptible temperature |

### Component Density Tolerance (DRAFT -- CD MUST TEST)

| ID | Convention | Current Value | Source | Challenge Condition |
|----|-----------|--------------|--------|---------------------|
| CH-08 | Code compresses well | High tolerance | DD-F-013 hypothesis | CD formal testing required |
| CH-09 | Essence needs breathing | Low tolerance | DD-F-013 hypothesis | CD formal testing required |
| CH-10 | Decision Matrix moderate | Medium tolerance | DD-F-013 hypothesis | CD formal testing required |

### Responsive Preferences

| ID | Convention | Current Value | Source | Challenge Condition |
|----|-----------|--------------|--------|---------------------|
| CH-11 | Simple grid collapse | 768px | C-25, REINFORCED | If combination grids need different threshold |
| CH-12 | Responsive padding | --space-8 --space-4 at 768px | C-05 | If combination layout needs different mobile padding |
| CH-13 | Reading order on mobile | Source order preserved | General web convention | If combination layout needs reordering |

### Component Reading Ratios (Q3)

| ID | Convention | Current Value | Source | Challenge Condition |
|----|-----------|--------------|--------|---------------------|
| CH-14 | Heavy components | 20-30% of count | R-5 Q3 | If combination page type skews naturally |
| CH-15 | Medium components | 30-40% of count | R-5 Q3 | If combination context demands different ratio |
| CH-16 | Light components | 30-40% of count | R-5 Q3 | If combination context demands different ratio |

===============================================================================
## LOCK CONFLICT LOG
===============================================================================

Inherited from AD. CD must monitor for new conflicts.

| ID | Conflict | Status | Resolution |
|----|----------|--------|------------|
| ESC-001 | 768px collapse vs bento pattern | RESOLVED in AD | 960px for 4+ cols, 768px for 2-3 cols |
| ESC-002 | Scroll-reveal vs progressive enhancement | RESOLVED in AD | Initial CSS visible, JS adds hidden state |

CD-specific conflicts will be logged here during Phase 1 builds.

===============================================================================
## MODIFICATION PROTOCOL
===============================================================================

1. **ALWAYS-LOCKED:** Cannot be modified. Period.
2. **LOCKED:** Modification requires:
   - Documented perceptual evidence from 3+ independent sources
   - Written rationale explaining why the counter-evidence is stronger
   - Approval from lead agent before implementation
3. **CHALLENGEABLE:** Modification requires:
   - Documented rationale before modification
   - Note in this lock sheet recording the change and reason
   - Post-build verification that the change improved the outcome

===============================================================================

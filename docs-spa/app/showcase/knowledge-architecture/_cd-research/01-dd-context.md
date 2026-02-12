# DD Stage Contributions to CD (Stage 5)
## Research Summary for CD Planning

---

## 1. WHAT DD DISCOVERED

DD (Stage 2: Density Exploration) explored how components BREATHE together on a page. Six explorations tested density hypotheses, producing 18 formal findings (DD-F-001 through DD-F-018).

### The 6 Validated Density Patterns

| Pattern | Exploration | Score | Description |
|---------|------------|-------|-------------|
| **PULSE** | DD-001 | 33/40 | High-low-high alternating rhythm. Dense INHALE sections alternate with sparse EXHALE. Best for tutorials with practice breaks. |
| **CRESCENDO** | DD-002 | 35/40 | Sparse-to-dense progressive build. Introduction -> Context -> Details -> Resolution. Remove density indicators after section 2 (users learn the pattern). |
| **ISLANDS** | DD-003 | 32/40 | Dense clusters floating in sparse ocean. Archipelago metaphor. Horizontal offsets create visual rhythm. Best for reference/task clusters. |
| **GEOLOGICAL** | DD-004 | 35/40 | Atmosphere -> Surface -> Topsoil -> Subsoil -> Bedrock. 5-bar depth indicator. Expert/Novice paths emerge naturally. |
| **TIDAL/RIVERS** | DD-005 | 36/40 | Width = inverse density. Narrow channels for dense code, wide rivers for sparse context. Parallel rivers for comparison, confluence for decisions. |
| **FRACTAL** | DD-006 | 36/40 (HIGHEST) | Same rhythm at ALL scales: page, section, component, character. Self-similarity creates coherence that variety cannot. THE META-PATTERN. |

**Average score:** 34.5/40. All 6 INCLUDE. 100% soul compliance.

### The 6 Density Dimensions (Beyond Spatial)

| Dimension | Definition | How to Manipulate |
|-----------|-----------|-------------------|
| Temporal | Information over scroll | Use PULSE/CRESCENDO patterns |
| Depth | Z-axis layering | Surface/Sediment/Bedrock model |
| Semantic | Meaning per area | Jargon vs expansion |
| Cognitive | Processing required | Novelty, decision points |
| Interaction | Clickables per viewport | Zones: exploration/action/reading |
| Spatial | Elements per area | Components per viewport |

---

## 2. DD-F FINDINGS MANDATORY FOR CD

### UNIVERSAL MANDATE: DD-F-006 (FRACTAL)

**This is the single most important DD finding for CD.**

DD-F-006: "Density pattern at page level MUST mirror section level MUST mirror component level MUST mirror character level." The pattern `{dense}{sparse}{sparse}` repeats at every scale.

**CD implication:** When CD combines patterns/components, the combination MUST maintain fractal self-similarity at all scales. Combinations that break the fractal rhythm at any scale are non-compliant.

The consumption matrix marks DD-F-006 as `*** ALL` for CD -- it applies universally to every CD exploration.

### CD GATE FINDING: DD-F-013 (Component Density Tolerance)

**DD-F-013:** "Some components compress well at high density, others need breathing room. Code blocks handle high density. Essence callouts need space around them."

**CD must build combination rules that account for density tolerance:**
- High-tolerance components (code blocks, tables, data displays): CAN be packed into high-density zones
- Low-tolerance components (Essence callouts, CoreAbstraction, blockquotes with serif italic): NEED breathing room around them
- **The rule:** Don't pack low-tolerance components into high-density zones

This is DD's GATE finding for CD (marked `* GATE` in the consumption matrix). CD cannot begin without addressing this.

### DD-F-014 (Callout Stacking / Alarm Fatigue)

**DD-F-014:** "Callout stacking creates alarm fatigue regardless of density pattern. Even in PULSE high-density sections, max 2 callouts visible at once."

**CD must enforce:** R5-008 (2-callout limit) applies within ANY density pattern. Density is not license to stack callouts. When CD combines components, no viewport should show more than 2 callouts simultaneously.

### DD-F-007 (Consistency Beats Variety)

**DD-F-007:** "Self-similarity scored highest -- consistency across scales beats variety."

**CD must enforce:** When combining patterns, don't vary density patterns within a page -- be fractal. Repeat the pattern; don't fight it with variety. DD-006's fractal approach outperformed DD-003's variety approach.

---

## 3. DENSITY PATTERNS CD MUST MAINTAIN WHEN COMBINING COMPONENTS

### Pattern-to-Content-Type Mappings

| Content Type | Pattern | Rationale |
|-------------|---------|-----------|
| Tutorial/Learning | PULSE | Rhythmic reinforcement |
| Onboarding/Progressive | CRESCENDO | Builds confidence |
| Reference/Lookup | ISLANDS | Dense clusters in sparse ocean |
| Long-form docs | WAVE | Responds to content needs |
| Context-Action-Summary | BOOKENDS | Clear structure |

### Key Density Rules CD Must Honor

1. **Density Debt:** After dense sections, add recovery whitespace (64-80px). CD combinations must budget for this.

2. **Density Contrast:** Sparse context makes dense feel denser. CD should use this intentionally when combining sparse and dense components.

3. **Density Inheritance:** Child elements inherit parent density. CD combinations must not fight this -- a component placed in a dense zone will feel dense.

4. **10-Second Test:** In 10 seconds, user should know: What IS this? What can I DO? How do I GO DEEPER? CD combinations must pass this test.

5. **Max 1-2 Callouts Per Viewport:** More than 2 = alarm fatigue. Signal is lost. This constrains how many callout-type components CD can combine in a view.

### Spacing Values (From Validated CSS)

- INHALE (dense): 24px internal padding
- EXHALE (sparse): 64-80px whitespace
- CRESCENDO progression: 80px -> 64px -> 48px -> 24px -> 16px
- Dense bookend: 24px padding
- Sparse action area: 64px padding

### Component Density Tolerance Classification (From DD-F-013)

**High tolerance (compress well at high density):**
- Code blocks
- Tables
- Data displays
- Inline code

**Low tolerance (need breathing room):**
- Essence callouts (serif italic -- need space to resonate)
- CoreAbstraction components
- Blockquotes with wisdom text
- Section headers

CD combination rules must classify every component's density tolerance and enforce spacing accordingly.

---

## 4. DD ANTI-PATTERNS CD MUST AVOID

### DD-F-015: Traffic-Light Colors Adjacent
**What:** Never place green (#4A9D6B) Tip callout adjacent to red (#E83025) Gotcha callout.
**Why:** Creates kindergarten-level "green=go, red=stop" visual language. Undermines editorial authority.
**CD prevention:** When CD combines callouts, enforce 48px+ whitespace OR a neutral component between green and red callouts. Or reorder to non-adjacent.

### DD-F-016: Inconsistent Border Widths
**What:** Some callouts 2px, some 4px within same page.
**Why:** Breaks family DNA (COMP-F-010). Creates visual noise.
**CD prevention:** Standardize ALL borders to 4px via CSS variable. When combining components, verify border consistency.

### DD-F-017: Uniform Density Throughout
**What:** Same spacing, same rhythm, same everything top to bottom.
**Why:** No rhythm = monotonous. Reader's eye has nothing to anchor.
**CD prevention:** CD combinations must apply density patterns (PULSE, CRESCENDO, etc.) to create rhythm. Don't combine components into uniform walls.

### DD-F-018: Fighting the Density Pattern
**What:** Trying to insert sparse content in a dense zone or vice versa.
**Why:** Creates cognitive dissonance. Reader feels "this doesn't belong here."
**CD prevention:** Let the pattern guide placement. Dense zones stay dense. Sparse zones stay sparse. CD combination rules must respect zone boundaries.

---

## 5. DD-F-013: WHAT THE CD GATE FINDING MEANS

DD-F-013 is marked as `* GATE` for CD in the finding consumption matrix. This means:

**Before CD can begin exploring combinations, it must have a plan for component density tolerance.**

Specifically:
- CD must classify each component by its density tolerance (high/low/medium)
- CD must define rules for which components can be combined at which density levels
- CD must prevent low-tolerance components from being packed into high-density zones
- CD must ensure high-density combinations still maintain the fractal rhythm (DD-F-006)

**The constraint chain:**
- DD-F-013 (component tolerance) + DD-F-006 (fractal) + DD-F-014 (callout limit) = CD's density framework
- Every CD combination must answer: "Does this combination respect component density tolerance while maintaining fractal self-similarity and keeping callouts under 2 per viewport?"

---

## 6. DD FINDINGS CONSUMPTION MATRIX (CD COLUMN)

| Finding ID | CD Status | CD Responsibility |
|-----------|-----------|-------------------|
| DD-F-001 (PULSE) | Pending | Maintain PULSE rhythm in tutorial combinations |
| DD-F-002 (CRESCENDO) | Pending | Maintain CRESCENDO in progressive combinations |
| DD-F-003 (ISLANDS) | Pending | Maintain ISLANDS in reference combinations |
| DD-F-004 (GEOLOGICAL) | Pending | Maintain GEOLOGICAL in hierarchy combinations |
| DD-F-005 (TIDAL) | Pending | Maintain TIDAL width signals in flow combinations |
| DD-F-006 (FRACTAL) | **MANDATORY** | Apply fractal self-similarity to ALL combinations |
| DD-F-013 (Tolerance) | **GATE** | Build density tolerance classification before starting |
| DD-F-014 (Callout limit) | Pending | Enforce 2-callout max per viewport in all combinations |
| DD-F-015 (Traffic-light) | Verify | No green+red adjacent in any combination |
| DD-F-016 (Border widths) | Verify | Consistent 4px borders in all combinations |
| DD-F-017 (Uniform density) | Verify | No monotonous combinations |
| DD-F-018 (Fighting pattern) | Verify | Don't insert sparse in dense or vice versa |

---

## 7. KEY TAKEAWAYS FOR CD

1. **DD-F-006 (FRACTAL) is non-negotiable.** Every CD combination must show the same rhythm at page, section, component, and character levels.

2. **DD-F-013 (density tolerance) is the CD gate.** Build a component tolerance classification system FIRST, before exploring combinations.

3. **Density patterns have validated CSS.** CD doesn't need to invent spacing -- use the validated values (24px dense, 64-80px sparse, etc.).

4. **Anti-patterns are real constraints.** Traffic-light, inconsistent borders, uniform density, and fighting the pattern all caused DD score drops and must be prevented in CD.

5. **The 2-callout limit (DD-F-014) constrains combination density.** No matter how dense a zone, max 2 callouts visible at once.

6. **Density dimensions beyond spatial.** CD should consider temporal, depth, semantic, cognitive, and interaction density when combining components -- not just how many elements fit spatially.

7. **The quality bar is 34.5/40 average, minimum 32/40 for INCLUDE.** CD must match or exceed this standard.

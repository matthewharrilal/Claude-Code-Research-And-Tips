# Worked Examples — Pipeline v3

**Source:** Gas Town VA Pipeline execution (2026-02-23, first Pipeline v3 run)
**Content:** Steve Yegge "Gas Town" essay (research-synthesis type, ~8,500 words)
**Result:** PA-05 3/4 COMPOSED, 175/200 total score, 17-18 mechanisms
**Builder Model:** Opus

These examples show the ACTUAL inputs and outputs from each pipeline phase, so a fresh instance can see what "good" looks like at every stage.

---

## Example 1: Content Map (Phase 0 Output)

This is the actual Content Map produced by the Content Analyst for the Gas Town content.

**Input:** Raw content markdown (~8,500 words of Steve Yegge's essay on multi-agent orchestration)
**Model:** Sonnet (Phase 0 is analytical, not creative -- Sonnet is adequate)
**Output:** 66 lines (exceeds 30-50 target, which is acceptable)

```markdown
# Content Map: Steve Yegge and Gas Town

Content type: MIXED
Word count: ~8,500
Source: extractions/deep/yegge-gas-town-extraction.md (1,324 lines)

## 1. Content Classification

- **Type:** MIXED (prose + ASCII diagrams + tables + code blocks + pull quotes + command refs + lists)
- **Structural heterogeneity:** HIGH — 7+ element types across 13 sections. Narrative biography, architectural ASCII art, role specification tables, bash command sequences, philosophical quotes, decision-matrix diagrams, cost estimation data.
- **Metaphor viability:** HIGH — the "factory/colony" metaphor is NATIVE to the content. Mad Max: Fury Road naming (Mayor, Deacon, Dogs, Polecats, Crew) provides a complete thematic vocabulary. The ant-vs-colony framing is the article's central argument.

## 2. Mode Determination

**COMPOSED** — Both heterogeneity and metaphor viability are HIGH. The factory metaphor can structurally organize zones (Town Level / Rig Level / Human Level maps directly to page architecture). The content shifts register from philosophical manifesto to technical specification to implementation cookbook — these register shifts create natural zone boundaries with distinct visual identities.

## 3. Zone Architecture

Recommended zones: 5-7 (content is 8,500 words, fits 5,000-10,000 bracket). Recommend **6 zones**.

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
| Z1 | The Manifesto | sparse | You Are Here + Who is Yegge + Core Insight quotes | BREATHING | OPENING |
| Z2 | The Factory | moderate | Gas Town Mental Model + Factory Metaphor + Idea Compiler | TRANSITIONAL | OPENING->DEEPENING |
| Z3 | The Hierarchy | dense | 8 Roles Architecture (all role deep dives + communication flow) | DENSE | DEEPENING |
| Z4 | The Memory | moderate | Beads system + Memory Model + Git-as-database | DENSE | DEEPENING |
| Z5 | The Principles + Waves | moderate | 6 Waves of AI + Core Principles (GUPP, Zero Framework, Cattle not Pets) | TRANSITIONAL | DEEPENING->RESOLVING |
| Z6 | The Cookbook | dense->sparse | Implementation Guide + Troubleshooting + When to Use + Comparisons | BREATHING | RESOLVING |

## 4. Content Tensions

1. **Chaos vs Control** — Pole A: "comfort with chaos and imperfection" / Pole B: "8 specialized roles with clear hierarchy." **Pole A dominant.** The system embraces nondeterminism but imposes structural order.
2. **Individual vs Colony** — Pole A: "world's biggest ant" / Pole B: "nature prefers colonies." **Pole B dominant.** THE central argument. Shapes the structural metaphor directly.
3. **Programmer vs Product Manager** — Pole A: "you write code" / Pole B: "you file features." **Pole B dominant.** Identity transformation is the emotional core.
4. **Accessibility vs Gatekeeping** — Pole A: open-source tools, detailed docs / Pole B: "Stage 7+ or get your face ripped off." **Both active.** Creates tension between invitation and warning.

**Metaphor-shaping tension:** #2 (Individual vs Colony) — the ant-to-factory transformation is the structural spine.

## 5. Metaphor Seeds

1. **Industrial Factory / Refinery** — The content's own language: rigs, refineries, polecats, crew, production lines. CSS directions: zone backgrounds graduate from raw/exposed (sparse opening) to industrial density (role architecture), border-weight gradient 4px->1px as content moves from manifesto to specification. Risk: LOW (native to content).

2. **Ant Colony / Emergence** — Colony intelligence from simple agents. CSS directions: repeating micro-patterns that accumulate into macro-structure, small components that tile into larger grids, density increases through repetition not size. Risk: MEDIUM (metaphor is stated but not deeply structural).

3. **Post-Apocalyptic Settlement** — Mad Max world-building: survival, resourcefulness, hierarchy born from necessity. CSS directions: rough textures, high-contrast borders, utilitarian typography, "found object" component aesthetic. Risk: MEDIUM (evocative but could overwhelm content).

**Recommendation:** Seed #1 (Industrial Factory). It is the most structurally native — the content literally describes a factory architecture.

## 6. Density Arc

Z1 [SPARSE] -> Z2 [MODERATE] -> Z3 [DENSE] -> Z4 [MODERATE] -> Z5 [MODERATE] -> Z6 [DENSE->SPARSE]

Pattern: CRESCENDO + RELEASE. Peak density at Z3 (8 roles = most complex structural content). Section heights (estimated): Z1 ~500px, Z2 ~900px, Z3 ~2400px, Z4 ~1200px, Z5 ~1000px, Z6 ~1800px.

## 7. Reader Profile

- **Who:** Advanced developers at Stage 6-7. Running 3-10 Claude Code instances daily. High info density tolerance.
- **Axis positions:** Expert (75-80%), 3-4 components/viewport, minimal progressive disclosure, optional TOC, minimal header
- **What they expect:** Technical architecture docs with enough philosophy to justify the investment.
- **What should surprise them:** The EMOTIONAL dimension — philosophical manifesto disguised as technical documentation.
```

**What makes this a good Content Map:**
- Mode determination is justified with specific evidence (heterogeneity + metaphor viability)
- Zone architecture includes Pacing and Direction columns (not in the spec, but emerged as useful)
- Content tensions are novel analysis not in the spec -- identified as critical for COMPOSED mode
- Metaphor seeds include risk ratings with justification
- Reader profile has specific axis positions, not just prose description

**What could be improved:**
- Per-section character vocabulary (NARRATIVE/REFERENCE/CODE) is missing for individual sections
- Transition weights between sections are absent
- Content inventory (word counts per section, code block counts) would help the brief assembler

---

## Example 2: Execution Brief (Phase 1 Output)

This is the actual Execution Brief produced by the Brief Assembler. See the full 165-line brief at: `ephemeral/pages/gas-town-va-pipeline/_execution-brief.md`

**Key characteristics of this brief:**
- Mode: COMPOSED (correctly derived from Content Map)
- 4-tier structure followed exactly
- Tier 1: 10 soul constraints as world-description (verbatim from template)
- Tier 2: 5 perception thresholds as natural laws with calibration ranges
- Tier 3: Multi-coherence boundary-by-boundary descriptions, structural metaphor with CSS naming guidance, density arc, content-form coupling, creative authority statement
- Tier 4: All 8 dispositions with content-specific observations
- Content Map appended

**The brief is 165 lines (exceeds the 93-113 target).** The orchestrator chose to include richer compositional detail. This produced a higher-quality build. The target should be treated as advisory (100-180 lines is the observed effective range).

---

## Example 3: Gate Runner Results (Phase 3A Output)

This is the actual gate runner output. Note the naming convention (SC/PT) differs from the artifact's GR-XX convention — the enriched gate runner now uses GR-XX.

```markdown
## Soul Constraints (SC-01 through SC-10)

| Gate | Check | Result | Detail |
|------|-------|--------|--------|
| SC-01 | Sharp Surfaces (border-radius: 0) | **PASS** | 0 violations |
| SC-02 | No Shadows (box-shadow: none) | **PASS** | 0 violations |
| SC-03 | Container Discipline (940-960px) | **PASS** | 960px max-width on all 6 `.factory-spine` containers |
| SC-04 | Warm Palette | **PASS** | 0 pure black, 0 pure white text elements |
| SC-05 | Font Trinity | **PASS** | Instrument Serif, Inter, JetBrains Mono all present |
| SC-06 | No Gradients | **PASS** | 0 gradient violations |
| SC-07 | Zero Decorative Elements | MANUAL | Requires visual inspection |
| SC-08 | Border-Weight Hierarchy | **PASS** | 3 distinct weights: 4px / 2.67px / 0.67px |
| SC-09 | Header DNA | MANUAL | Dark bg + red border visible in screenshots |
| SC-10 | Typography Foundations | MANUAL | line-height, max-width, h3 italic — visual check |

## Perception Thresholds (PT-01 through PT-05)

| Gate | Check | Result | Detail |
|------|-------|--------|--------|
| PT-01 | Background Delta >= 15 RGB | **PASS** | All 5 adjacent zone boundaries pass: 21, 31, 37, 17, 22 |
| PT-02 | Letter Spacing >= 0.025em | **PASS** | Distinct values: 0.55px, 0.96px, 1px, 1.2px |
| PT-03 | Stacked Gaps < 120px | **PASS** | All inter-section gaps: 0px (zones are flush) |
| PT-04 | Single Margin <= 96px | MANUAL | No computed margins > 96px observed |
| PT-05 | Container Width 940-960px | **PASS** | 960px confirmed |

## Background Colors by Zone

| Zone | Background RGB | Role |
|------|---------------|------|
| Z1 Manifesto | rgb(254, 249, 245) | #FEF9F5 — lightest warm cream |
| Z2 Mental Model | rgb(240, 235, 224) | #F0EBE0 — warm tan |
| Z3 8 Roles | rgb(255, 255, 255) | #FFFFFF — clean white (peak density) |
| Z4 Beads | rgb(237, 230, 218) | #EDE6DA — warm sand |
| Z5 Principles | rgb(248, 243, 235) | #F8F3EB — light warm |
| Z6 Implementation | rgb(232, 225, 213) | #E8E1D5 — deepest warm |

Summary: 10 PASS, 0 FAIL, 4 MANUAL
```

**What this shows:**
- Only 14 of 42 gates were actually run (gate coverage was 33%, a known defect)
- 4 gates marked MANUAL (now addressed by the enriched gate runner JavaScript)
- Background delta at Z4-Z5 boundary was only 17 RGB (barely above 15 threshold) — this became the dominant defect flagged by 5/9 PA auditors
- Z3 uses pure white #FFFFFF — technically a warm palette deviation

---

## Example 4: PA Auditor Report Excerpt (Phase 3B Output)

This is an excerpt from Auditor C (Multi-Coherence), which produced the highest-quality analysis.

> **PA-55 (Sub-perceptual detection):** Looking at 3 adjacent sections/zones, I can clearly describe how they DIFFER visually. Z1 (manifesto) has the lightest background with generous spacing and large display type. Z2 (mental model) shifts to a noticeably warmer tan with more structured content blocks and tighter typography. Z3 (8 roles) has a clean white background with the densest content treatment — tables, code blocks, and multi-level headings compressed together. These differences are PERCEPTIBLE without inspecting code.
>
> However, the Z4-Z5 transition is nearly invisible. Both zones have similar warm cream backgrounds (17 RGB delta — barely above threshold). The typography treatment does not shift noticeably. The spacing rhythm continues unchanged. If I had to draw a line between Z4 and Z5 based purely on visual observation, I would struggle. This is the weakest zone boundary on the page.

**What makes this a good PA excerpt:**
- Uses perceptual language ("I can clearly describe," "nearly invisible," "I would struggle")
- References specific zones with specific observations
- Identifies the dominant defect (Z4-Z5 boundary) that 5/9 auditors converged on
- Connects observation to threshold knowledge without using gate language

---

*These worked examples are from the first Pipeline v3 execution. Future runs will produce different Content Maps, Briefs, and Gate Results depending on the content. The STRUCTURE remains the same; the CONTENT varies.*

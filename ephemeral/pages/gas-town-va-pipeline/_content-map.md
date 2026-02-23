# Content Map: Steve Yegge and Gas Town

Content type: MIXED
Word count: ~8,500
Source: `extractions/deep/yegge-gas-town-extraction.md` (1,324 lines)

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

**Recommendation:** Seed #1 (Industrial Factory). It is the most structurally native — the content literally describes a factory architecture. The Town/Rig/Worker hierarchy maps to zone nesting. The refinery metaphor implies progressive processing (raw ideas -> decomposed tasks -> finished code) which maps to the density arc.

## 6. Density Arc

```
Z1 [SPARSE]  ->  Z2 [MODERATE]  ->  Z3 [DENSE]  ->  Z4 [MODERATE]  ->  Z5 [MODERATE]  ->  Z6 [DENSE->SPARSE]
   manifesto       mental model       8 roles          memory system      principles         cookbook->closing
```

Pattern: CRESCENDO + RELEASE (matches Gas Town's own zone height pattern from the scroll rhythm reference data). Peak density at Z3 (8 roles = most complex structural content with nested diagrams, tables, code blocks, and narrative per role). Z6 has internal density shift: implementation details are dense, but the closing comparisons and decision matrix resolve into breathing space.

Section heights (estimated): Z1 ~500px, Z2 ~900px, Z3 ~2400px, Z4 ~1200px, Z5 ~1000px, Z6 ~1800px. Pattern: SHORT->MOD->LONGEST->MOD->MOD->LONG.

## 7. Reader Profile

- **Who:** Advanced developers at Stage 6-7 on Yegge's scale. Already running 3-10 Claude Code instances daily. Comfortable with tmux, git worktrees, and $50-200/day API spend. They are evaluating whether to invest in factory-scale orchestration.
- **Reader axis position:** EXPERT (75-80% on expert<->general spectrum). Info density: high tolerance. Visual complexity: 3-4 components/viewport acceptable. Progressive disclosure: minimal needed — trust reader to scan. Navigation: optional TOC sufficient. Entry velocity: minimal header, fast entry.
- **What they expect:** Technical architecture documentation with enough philosophy to justify the investment. Concrete commands and setup steps.
- **What should surprise them:** The EMOTIONAL dimension — the identity transformation from programmer to PM. The content is philosophical manifesto disguised as technical documentation. The design should let the philosophical voice breathe at the opening and closing while the middle zones deliver dense technical specification.

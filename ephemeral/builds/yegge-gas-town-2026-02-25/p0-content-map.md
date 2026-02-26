# Content Map: Steve Yegge and Gas Town

Content type: MIXED
Word count: ~5,270

## 1. Content Classification
- Type: MIXED (prose + tables + code blocks + ASCII diagrams + pull quotes + lists + checklists across 13 sections)
- Structural heterogeneity: HIGH
- Metaphor viability: HIGH

## 2. Mode Determination
COMPOSED — High structural heterogeneity (6+ element types, frequent mode-shifts between narrative, reference tables, code blocks, and architecture diagrams) combined with a content-native metaphor (factory/colony with explicit hierarchy) that maps directly to CSS structure.

## 3. Zone Architecture
Recommended zones: 5 (content is ~5,270 words, fits 5,000-10,000 bracket)

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
| Z1 | Orientation | LOW | You Are Here, Who is Steve Yegge | BREATHING | OPENING |
| Z2 | Mental Model | MODERATE | Gas Town Mental Model, 8 Roles Architecture | TRANSITIONAL | DEEPENING |
| Z3 | Infrastructure | HIGH | Beads Memory System, 6 Waves of AI, Core Principles | DENSE | DEEPENING |
| Z4 | Practice | HIGH | Implementation Guide, Checkpoints, Troubleshooting | DENSE | DEEPENING |
| Z5 | Orientation | LOW-MODERATE | When to Use, Quotes, Comparisons, Sources | BREATHING | RESOLVING |

Per-section character:
- S0 You Are Here: REF (complexity ladder, prerequisites checklist)
- S1 Who is Steve Yegge: NARRATIVE (biography with credential tables)
- S2 Gas Town Mental Model: NARRATIVE (core insight, factory metaphor, Idea Compiler)
- S3 8 Roles Architecture: REF (8 role specs, ASCII hierarchy, communication flow)
- S4 Beads Memory System: REF (architecture diagrams, command references, memory model)
- S5 6 Waves of AI: REF (wave table, stage table, warning)
- S6 Core Principles: NARRATIVE (5 philosophical principles with quotes)
- S7 Implementation Guide: CODE (install commands, tmux setup, startup script, daily workflow)
- S8 Checkpoints: REF (verification table, health check commands)
- S9 Troubleshooting: CODE (6 failure patterns with recovery commands)
- S10 When to Use: REF (use/don't-use lists, decision tree)
- S11 Quotes: NARRATIVE (curated quotes by theme)
- S12 Comparisons: REF (3 comparison tables, orchestrator spectrum)
- S13 Sources: REF (links, community extensions)

## 4. Content Tensions
1. **Single Agent vs Colony** — Pole A: "Everyone is focused on making their ant run longer" / Pole B: "nature prefers colonies." Pole B dominant.
2. **Chaos vs Control** — Pole A: "Some bugs fixed 2-3 times. Some fixes get lost" / Pole B: "Dogs run quality checks automatically" and 8 specialized roles with clear hierarchy. Neither dominant; content explicitly navigates between them.
3. **Accessibility vs Exclusivity** — Pole A: the document teaches and invites / Pole B: "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees." Pole B dominant (content repeatedly gatekeeps).
4. **Philosophy vs Practice** — Pole A: "Gas Town is an Idea Compiler" / Pole B: `go install github.com/steveyegge/gastown/cmd/gt@latest`. Balance shifts from philosophy (S1-S6) to practice (S7-S9) across the document.

Metaphor-shaping tension: #1 (Single Agent vs Colony). The ant-to-factory transformation IS the structural spine of the content.

## 5. Metaphor Seeds
1. **Factory/Refinery** — source: explicit in content ("Gas Town isn't an agent - it's a factory for agents," refinery role, rigs, crew). CSS: industrial zones with clear hierarchy, raw-to-refined progression, heavy infrastructure feel. Risk: LOW (content-native, deeply embedded).
2. **Colony/Hive** — source: "nature prefers colonies," ant metaphor, worker specialization. CSS: organic clustering, interconnected nodes, emergent-from-simple feel. Risk: MEDIUM (competes with the industrial metaphor the content already chose).
3. **Mad Max Post-Apocalyptic** — source: explicit Fury Road reference ("post-apocalyptic resourcefulness," Mayor/Deacon/Dogs/Polecats naming). CSS: rough textures, survival aesthetic, industrial-gritty palette. Risk: HIGH (could overwhelm technical content; decoration risk).

Recommendation: Seed #1 (Factory/Refinery). The factory metaphor is the content's own language -- it names roles, describes processes, and frames the entire architecture in industrial terms. Lowest risk because it IS the content rather than being imposed on it.

## 6. Density Arc
```
Z1 [LOW] -> Z2 [MODERATE] -> Z3 [HIGH] -> Z4 [HIGH] -> Z5 [LOW-MODERATE]
```
Section heights (estimated): Z1 ~700px, Z2 ~2000px, Z3 ~2200px, Z4 ~2000px, Z5 ~1600px. Pattern: ARCH (ramp up through Z2-Z3, sustained peak at Z3-Z4, gentle descent at Z5).

## 7. Reader Profile
- Who: Advanced developer (Stage 7+) already running multiple Claude Code instances, familiar with multi-agent patterns, evaluating whether Gas Town is their next step
- Expertise: EXPERT (content explicitly requires Stage 7+, 100+ hours multi-agent, tmux proficiency)
- Patience: MODERATE (will read deeply if content proves relevant, but will scan reference sections)
- Goal: EVALUATION + IMPLEMENTATION (deciding whether to adopt Gas Town, then following install steps)
- Context: Likely comparing against simpler orchestrators (Ralph, CC Mirror) they already use
- Device: DESKTOP (tmux-native workflow implies desktop/laptop; code-heavy content assumes wide viewport)
- What they expect: A technical deep-dive with clear architecture and actionable setup steps
- What should surprise them: The philosophical depth (vibe coding, idea compiler) that reframes their mental model of what development IS, not just how to orchestrate agents

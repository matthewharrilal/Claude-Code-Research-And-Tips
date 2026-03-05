# Content Map: Steve Yegge and Gas Town

Content type: MIXED
Word count: ~5,800

## 1. Content Classification
- Type: MIXED (prose + tables + ASCII diagrams + code blocks + blockquotes across 13 sections + appendices)
- Element inventory: 14 ASCII architecture diagrams, 12 tables, 18 code blocks (bash), 22 blockquotes, prose narrative, bulleted lists, hierarchical checklists, a cost estimation model
- Structural heterogeneity: **HIGH** — document oscillates between narrative philosophy (sections 1-2), reference architecture (sections 3-4), numbered principles (section 6), procedural tutorial (section 7), troubleshooting FAQ (section 9), decision matrices (sections 10, 12), and quote anthology (section 11). No two adjacent sections share the same element profile.
- Metaphor viability: **HIGH** — the content is already saturated with its own metaphors: ant colony/factory, Mad Max, idea compiler, kitchen/chef, fish markets, cattle vs pets. The factory-as-organism metaphor is structurally complete (roles = organs, beads = nervous system, git = skeleton).

## 2. Mode Determination
**COMPOSED** — High structural heterogeneity (6+ distinct element types, no two consecutive sections alike) combined with high metaphor viability (content provides its own complete metaphor system rooted in industrial/colony imagery). The document is not a uniform reference; it has narrative arc (philosophy -> architecture -> implementation -> decision), emotional peaks (Yegge quotes), and a clear protagonist shift (reader transforms from programmer to factory manager). This demands compositional treatment, not applied template.

## 3. Zone Architecture
Recommended zones: **6** (content is ~5,800 words, fits LARGE bracket; 13 logical sections collapse into 6 thematic zones)

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
| Z1 | The Shift | SPARSE | You Are Here, Who is Yegge, Mental Model (S0-S2) | ENTRY — orientation + philosophy + core metaphor | Downward (grounding) |
| Z2 | The Factory Floor | DENSE | 8 Roles Architecture (S3) | IMMERSION — role hierarchy, communication flow, ASCII diagrams | Horizontal (mapping) |
| Z3 | The Nervous System | MODERATE | Beads Memory System, 6 Waves of AI (S4-S5) | DEEPENING — memory architecture, evolutionary framing | Inward (layers) |
| Z4 | The Operating Principles | MODERATE | Core Principles (S6) | CONSOLIDATION — GUPP, ZFC, cattle/pets, idempotence, token economics | Vertical (stacking) |
| Z5 | The Assembly Line | DENSE | Implementation Guide, Checkpoints, Troubleshooting (S7-S9) | PROCEDURAL — step-by-step, code-heavy, troubleshooting | Forward (sequential) |
| Z6 | The Decision Room | MODERATE | When to Use, Quotes, Comparisons, Sources (S10-S13) | EXIT — evaluation, reflection, comparison, departure | Outward (expanding) |

## 4. Content Tensions

1. **Chaos vs Control** — Pole A: "Work with chaos, not against it" / "Some bugs fixed 2-3 times" / Pole B: 8 precisely defined roles, explicit hierarchy, quality gates (Dogs), checkpoints at every step. Pole A dominant in philosophy; Pole B dominant in architecture. **This is the metaphor-shaping tension** — the factory tames chaos without eliminating it.

2. **Accessibility vs Gatekeeping** — Pole A: tutorial structure, checkpoints, "You Are Here" ladder, step-by-step installation / Pole B: "If you're not at Stage 7, you'll get your face ripped off by superintelligent chimpanzees" / "If you have any doubt whatsoever, you can't use it." Pole B dominant — the document is explicitly exclusionary by design, making accessibility a courtesy frame around a hard gate.

3. **Simplicity vs Scale** — Pole A: "Go is just... good. It's boring." / Zero Framework Cognition / Pole B: 8 roles, 225K lines of Go, $50-200/day, tmux mastery required. Pole B dominant — the system is philosophically simple (AI makes all decisions) but operationally massive.

4. **Human Agency vs Machine Autonomy** — Pole A: "You're the Product Manager" / Overseer has inbox and identity / human approval gates / Pole B: "GUPP: If work is on your hook, YOU MUST RUN IT" / nondeterministic idempotence / agents self-correct. Balanced — the document holds both poles simultaneously (human sets direction, machines execute autonomously within bounds).

Metaphor-shaping tension: **#1 (Chaos vs Control)** — this tension generates the factory metaphor (structure imposed on volatile material), the Mad Max reference (survival hierarchy in post-apocalyptic chaos), and the ant colony biology (emergent order from simple rules).

## 5. Metaphor Seeds

1. **The Refinery** — sourced from Gas Town's own naming (Mad Max: Fury Road's Gas Town is a refinery settlement). CSS directions: industrial materials (steel borders, pipeline connectors between sections), heat gradients (cool planning zones to hot execution zones), pressure gauges (density indicators), conveyor-belt flow between zones. Risk: **LOW** — the metaphor is already in the content; we amplify rather than impose.

2. **The Colony** — sourced from "nature prefers colonies" and ant imagery. CSS directions: hexagonal/cellular layouts for role cards, pheromone trails (connecting lines between related elements), nest layers (concentric zones for memory model), swarm density for crew sections. Risk: **MEDIUM** — biological metaphor could clash with the industrial/Mad Max tone that dominates the quotes; would require choosing biology OVER industry.

3. **The Control Room** — sourced from tmux workflow, monitoring dashboards, inbox commands, status checks. CSS directions: dark terminal aesthetic, blinking status indicators, panel-based layout mimicking tmux splits, monospace typography dominance, green-on-dark for healthy states. Risk: **MEDIUM** — strong visual identity but risks becoming a "theme" rather than a structural metaphor; could flatten hierarchy.

**Recommendation: Seed #1 (The Refinery)** — lowest risk because it emerges from the content's own language. The refinery metaphor maps cleanly onto the zone architecture: raw ideas enter (Z1), get processed through the factory floor (Z2), stored in memory tanks (Z3), governed by operating principles (Z4), assembled on the line (Z5), and shipped from the decision room (Z6). The chaos-vs-control tension is native to industrial processing (volatile inputs, controlled outputs). The heat/pressure vocabulary provides natural CSS channels (color temperature shifts, border weight escalation, spacing compression in dense zones).

## 6. Density Arc

```
         Z1        Z2        Z3        Z4        Z5        Z6
        SPARSE    DENSE    MODERATE  MODERATE   DENSE    MODERATE

  MAX  |         ##                            ##
       |         ##                            ##
       |         ##        ##       ##         ##        ##
       |  ##     ##        ##       ##         ##        ##
  MIN  |  ##     ##        ##       ##         ##        ##
       +------------------------------------------------------>
         entry   immerse   deepen   stack      build     decide

Pattern: WAVE (sparse entry -> dense immersion -> moderate plateau -> dense procedural peak -> moderate exit)
```

The WAVE pattern reflects the content's own rhythm: philosophical opening (breathing room), architectural deep dive (high density), conceptual consolidation (moderate), implementation sprint (high density again), reflective close. Two density peaks — one conceptual (Z2: roles), one procedural (Z5: implementation) — with valleys between them for cognitive recovery.

## 7. Reader Profile
- **Who:** Advanced developer (Stage 7+, 100+ hours multi-agent experience) evaluating whether to adopt Gas Town. Comfortable with CLI, tmux, Go. Not a beginner seeking fundamentals — seeking architectural understanding and operational playbook. Likely already running 5-10 agents daily. High chaos tolerance. Budget-aware but not budget-constrained.
- **Entry state:** Curious but skeptical. Has hit scaling walls with simpler approaches. Wants to know "is this for me?" before investing setup time.
- **Exit state:** Can make an informed adopt/defer decision. If adopting, has installation path and mental model. If deferring, knows exactly what prerequisites remain.

Axis positions:
  - **Info Density:** 4/5 (high — architecture diagrams, role specs, command reference, cost model, comparison tables)
  - **Visual Complexity:** 3/5 (moderate — ASCII diagrams carry structural weight but are text-native; no images)
  - **Progressive Disclosure:** 4/5 (high — clear complexity ladder, prerequisites gate, "You Are Here" framing, sections build on each other)
  - **Navigation:** 4/5 (high — 13-section TOC, clear headings, internal cross-references, appendix quick-reference)
  - **Entry Velocity:** 2/5 (slow — extensive philosophical framing before architecture; "You Are Here" section alone is 40 lines. This is deliberate: the gate-keeping function requires reader self-assessment before proceeding.)

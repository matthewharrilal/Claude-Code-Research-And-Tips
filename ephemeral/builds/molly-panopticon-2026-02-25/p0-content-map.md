# Content Map: Molly Cantillon's Personal Panopticon

Content type: MIXED
Word count: ~6,800

## 1. Content Classification
- Type: MIXED (prose philosophy + code blocks + tables + directory trees + bash scripts + blockquotes across 17 parts)
- Structural heterogeneity: HIGH — ranges from pure philosophical narrative (Parts I, VI) to reference tables (V, XV) to tutorial with checkpoints (XII) to code-heavy implementation (IV, VIII, IX). No two consecutive sections share the same element profile.
- Metaphor viability: HIGH — the "panopticon/watchtower" metaphor is already native to the content and structurally rich (tower, domains, sight lines, isolation walls, corridors between rooms)

## 2. Mode Determination
COMPOSED — HIGH heterogeneity (philosophical prose, code, tables, directory trees, tutorials all interleaved) combined with HIGH metaphor viability (panopticon/watchtower is architecturally concrete) demands a pervading visual metaphor to unify radically different content types into a single coherent reading experience.

## 3. Zone Architecture
Recommended zones: 6 (content is ~6,800 words, fits 5,000-10,000 bracket)

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
| Z1 | Philosophy of Self-Legibility | MEDIUM | Parts I (philosophy, $2K story, quotes) | Slow entry, builds tension | Sets the "why" — surveillance asymmetry problem |
| Z2 | The 8-Domain Architecture | HIGH | Parts II, III (taxonomy, 4 design principles, isolation, handoffs, subagents) | Accelerating — concept-dense reference | Core architecture: 8 domains, isolation rules, handoff contracts |
| Z3 | Implementation & Production | HIGH | Parts IV, V (bash/tmux/cron, automation, GUI fallback, production table) | Dense technical — code blocks dominate | How it actually runs: scripts, cron, automations, proof points |
| Z4 | Philosophy & Critique | MEDIUM | Parts VI, VII (Goodhart, privacy trade, prison objection, technical critique) | Decelerating — reflective counterpoint | Warnings, trade-offs, pushback, the "meta-level outside" |
| Z5 | Build Your Own | HIGH | Parts VIII, IX, X, XI, XII (CLAUDE.md examples, correlation engine, anti-patterns, extensions, phased tutorial with 4 checkpoints) | Tutorial rhythm — step/verify/step | Practitioner section: examples, patterns, anti-patterns, build guide |
| Z6 | Synthesis & Reference | LOW | Parts XIII, XIV, XV, XVI, XVII (quotes, mental model summary, comparison table, open questions, tags) | Quick reference — scannable | Consolidation: key quotes, model summary, cross-references, gaps |

## 4. Content Tensions
1. **Empowerment vs. Imprisonment** — Pole A: "seeing around corners, being in ten places at once" / Pole B: "A panopticon still, but the tower belongs to you — so still a prison?" Pole A dominant.
2. **Simplicity vs. Sophistication** — Pole A: "Standard Unix tools: directories, cron, tmux, bash scripts" / Pole B: 8 parallel instances, correlation engine, cross-domain synthesis, skeptic agents. Pole A frames it; Pole B is the actual system.
3. **Isolation vs. Correlation** — Pole A: "instances operate INDEPENDENTLY. There is no shared context" / Pole B: "some scenarios require cross-domain awareness" and the correlation engine. Pole A is the default; Pole B is the exception.
4. **Metrics vs. Lived Experience** — Pole A: "WHOOP says recovered" / Pole B: "but you feel like death — notice the gap." Pole B ultimately sovereign.

Metaphor-shaping tension: #1 (Empowerment vs. Imprisonment) — the panopticon metaphor itself embodies this duality: a surveillance tower that is either liberating or confining depending on who controls it.

## 5. Metaphor Seeds
1. **The Watchtower / Panopticon** — native to the content itself ("you ARE the observer, you build your own watchtower"). CSS directions: central tower element radiating sight-lines to 8 domain cells arranged around it; isolation walls between domains; a corridor/handoff path where domains connect; the tower at the top or center as the correlation/synthesis layer. Risk: LOW (already the author's metaphor; no invention needed, only visual reification).
2. **The Control Room / Mission Control** — implied by "8 terminal sessions," monitoring dashboards, morning briefs. CSS directions: grid of 8 screens/panels, status indicators, data feeds flowing inward. Risk: MEDIUM (technically accurate but loses the philosophical weight of surveillance/self-legibility).
3. **The Organism / Nervous System** — 8 domains as organs, correlation engine as brain, handoffs as nerve signals. CSS directions: organic flow, connective tissue between sections, pulse/rhythm metaphor. Risk: HIGH (fights the mechanical/architectural nature of the actual implementation).

Recommendation: Seed #1 (The Watchtower). The panopticon is already the content's own metaphor. It provides architectural structure (tower, cells, walls, corridors, sight-lines) that maps directly to CSS layout decisions. The philosophical tension (liberation vs. imprisonment) gives the visual language emotional weight without invention.

## 6. Density Arc
```
        Z2    Z3          Z5
        ██    ██          ██
   Z1   ██    ██    Z4    ██    Z6
   ██   ██    ██    ██    ██    ░░
   ██   ██    ██    ██    ██    ░░
───────────────────────────────────
 SLOW  DENSE DENSE  SLOW DENSE SCAN
```
Section heights (estimated): Z1 ~22%, Z2 ~20%, Z3 ~18%, Z4 ~12%, Z5 ~20%, Z6 ~8%. Pattern: TWIN-PEAK with valley — two dense technical peaks (Z2-Z3, Z5) separated by a philosophical valley (Z4), bookended by a slow philosophical opener (Z1) and a quick-scan closer (Z6).

## 7. Reader Profile
- Who: Technical practitioner (developer, founder, power user) who already uses Claude Code and is looking for a systematic framework to scale personal AI usage across their life
- Axis positions: Expertise HIGH (comfortable with tmux, cron, bash, directory structures), Patience MODERATE (wants philosophy but also wants to build), Goal IMPLEMENTATION (came for the architecture, stays for the philosophy), Context EXPLORATORY (browsing curated extractions), Device DESKTOP (code-heavy content assumes wide viewport)
- What they expect: A technical tutorial with code snippets they can copy-paste to replicate the 8-domain setup
- What should surprise them: The philosophical depth — that the most powerful insight is not the bash scripts but the concept of reversing institutional surveillance asymmetry onto yourself, and the warning that self-optimization can become self-imprisonment

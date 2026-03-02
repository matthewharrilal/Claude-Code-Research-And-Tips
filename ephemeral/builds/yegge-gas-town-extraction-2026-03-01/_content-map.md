# Content Map: Steve Yegge and Gas Town

---

## 1. Structural Inventory

| # | Heading | Level | ~Words | Content Type | Density |
|---|---------|-------|--------|--------------|---------|
| — | Title + D-FINAL metadata + tagline | h1 | 35 | metadata + quote | sparse |
| — | Table of Contents | — | 60 | numbered list | sparse |
| 0 | You Are Here | h2 | 210 | mixed (ASCII art, prose, lists, checklist) | medium |
| 1 | Who is Steve Yegge? | h2 | 280 | mixed (table, lists, quote, prose) | medium |
| 2 | The Gas Town Mental Model | h2 | 280 | mixed (quote, ASCII diagram, table, prose) | medium |
| 3 | The 8 Roles Architecture | h2 | 750 | mixed (ASCII art, code, lists, prose, quote) | dense |
| 4 | Beads: The Memory System | h2 | 380 | mixed (quote, table, ASCII art, code, lists) | dense |
| 5 | The 6 Waves of AI | h2 | 200 | tables, quote | medium |
| 6 | Core Principles | h2 | 320 | mixed (quotes, prose, lists) | dense |
| 7 | Implementation Guide | h2 | 350 + ~80 lines code | code-dominant (shell, bash script, ASCII) | sparse |
| 8 | Checkpoints and Verification | h2 | 120 | table, code, list | sparse |
| 9 | Troubleshooting | h2 | 400 | patterned (symptom/cause/recovery), code | medium |
| 10 | When to Use Gas Town | h2 | 250 | lists, ASCII flowchart | medium |
| 11 | Quotes and Key Statements | h2 | 220 | blockquotes only | sparse |
| 12 | Comparison with Other Patterns | h2 | 420 | tables, ASCII diagram, prose | dense |
| 13 | Sources | h2 | 220 | lists, table, code | sparse |
| — | Appendix: Quick Reference | h2 | 80 + code | code-dominant | sparse |
| — | Cost Estimation | h2 | 90 | preformatted cost table | sparse |
| — | Tags + Metadata + closing quote | — | 60 | metadata | sparse |

**Total estimated word count:** ~4,200 (excluding code blocks and ASCII art)
**Total with code/ASCII:** ~5,500 equivalent rendering units

---

## 2. Hierarchy Depth

**Levels present:** 4 (h1, h2, h3, h4)

| Depth path | Location |
|---|---|
| h1 → h2 | All 15 major sections |
| h1 → h2 → h3 | Sections 1–4, 6–10, 12–13 |
| h1 → h2 → h3 → h4 | Section 3 (8 individual role deep-dives), Section 9 (6 failure patterns) |

**Deepest hierarchy:** Section 3, "The 8 Roles Architecture" — the role deep-dives nest h1 > h2 > h3 ("Role Deep Dives") > h4 (Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew, Overseer). Each h4 block contains its own internal structure (responsibilities list, commands code block, model recommendation).

**Structural orphans:**
- The D-FINAL Connection block sits between title and tagline, outside any h2
- The Table of Contents sits between tagline and first h2
- Tags, Document Metadata, and closing quote sit after the last formal section
- Cost Estimation behaves as a peer to the Appendix but has no heading level marker in the original (treated as h2 by convention)

---

## 3. Content Type Distribution

| Type | Estimated % of rendered area | Notes |
|---|---|---|
| Prose paragraphs | 20% | Concentrated in sections 0–2, 6 |
| Code blocks (shell/bash) | 22% | Dominant in sections 7, 8, 9, Appendix |
| ASCII art / diagrams | 18% | Large blocks in sections 0, 2, 3, 4, 10, 12 |
| Tables | 15% | Sections 1, 2, 4, 5, 8, 12 |
| Bullet/numbered lists | 12% | Throughout, concentrated in 1, 6, 10, 13 |
| Blockquotes | 8% | Concentrated in sections 2, 6, 11 |
| Metadata/tags | 5% | Top and bottom of document |

**Longest unbroken prose passage:** ~80 words — the "Vibe coding principles" paragraph in Section 1.4. The document strongly avoids long prose runs; nearly every paragraph is broken by a quote, list, table, or code block within 2–3 sentences.

**Longest code block:** ~40 lines — the `gastown-start.sh` startup script in Section 7.

**Distinct list structures:** 24 (bullet lists: 14, numbered lists: 3, checklists: 2, definition-style lists: 5)

---

## 4. Rhetorical Shifts

Each transition marks a candidate zone boundary:

| Location | Shift | Character |
|---|---|---|
| Title/metadata → "You Are Here" | **Framing → Orientation** — From document identity to reader positioning. The complexity ladder places the reader in a spatial hierarchy. | Zone entry |
| "You Are Here" → Section 1 | **Orientation → Authority-building** — Shifts from "where you are" to "why trust this person." Establishes credibility before presenting the system. | |
| Section 1 → Section 2 | **Authority → Conceptual model** — From biography to the core metaphor. The ant/colony quote is the document's thesis statement. | Major shift |
| Section 2 → Section 3 | **Abstract → Concrete architecture** — From metaphor ("factory for agents") to the literal 8-role system with commands and model recommendations. | Major shift |
| Section 3 → Section 4 | **Architecture → Infrastructure** — From roles (who does what) to memory (how state persists). Shifts from organizational design to data plane. | |
| Section 4 → Section 5 | **Concrete → Historical/contextual** — Pulls back from Beads specifics to frame the 6 Waves and 8 Stages. Overview after detail. | Zoom out |
| Section 5 → Section 6 | **Historical → Philosophical** — From timeline to principles. Shifts from "what happened" to "what we believe." | |
| Section 6 → Section 7 | **Philosophical → Instructional** — The sharpest rhetorical break. Moves from principles to "do this now" installation steps. Abstract to hands-on. | Major shift |
| Section 7 → Section 8 | **Instructional → Verificational** — From "do" to "check." Same instructional mode but the posture shifts from action to confirmation. | |
| Section 8 → Section 9 | **Verificational → Diagnostic** — From "is it working" to "what went wrong." The tone becomes troubleshooting: symptom/cause/recovery pattern. | |
| Section 9 → Section 10 | **Diagnostic → Advisory** — From fixing problems to deciding whether to use the system at all. Shifts to decision-making. | Zoom out |
| Section 10 → Section 11 | **Advisory → Anthological** — From decision framework to collected quotes. The voice shifts from analytical to curatorial. | Major shift |
| Section 11 → Section 12 | **Anthological → Comparative** — From Yegge's voice to objective comparison tables. Returns to analytical mode. | |
| Section 12 → Section 13+ | **Comparative → Reference** — From analysis to cataloging. Sources, appendix, cost estimation are pure reference material. | Closure begins |

---

## 5. Natural Zone Candidates

### Zone 1: THRESHOLD (Title through "You Are Here")

- **Start:** Document title
- **End:** End of prerequisites/complexity level in "You Are Here"
- **Density character:** Opening
- **Rationale:** This is the entry gate. It positions the reader (complexity ladder), states prerequisites, sets expectations. The ASCII ladder is the document's first visual anchor. Everything before Section 1 is orientation, not content.
- **Key elements:** Tagline quote, complexity ladder ASCII art, prerequisite checklist, "after this document" promise

### Zone 2: AUTHORITY + THESIS (Sections 1–2)

- **Start:** "Who is Steve Yegge?"
- **End:** End of "Why Gas Town?" in Section 2
- **Density character:** Development
- **Rationale:** These two sections form a single rhetorical unit: establish the person, then present his central idea. The ant/colony quote is the document's thesis. The factory metaphor and "Idea Compiler" frame complete the conceptual foundation. Separating Sections 1 and 2 would split the argument from its authority.
- **Key elements:** Career table, credentials list, ant/colony quote, factory comparison table, Mad Max reference

### Zone 3: ARCHITECTURE (Section 3)

- **Start:** "The 8 Roles Architecture"
- **End:** End of "Role Communication Flow"
- **Density character:** Peak
- **Rationale:** This is the document's densest and most structurally complex section. The hierarchy diagram,
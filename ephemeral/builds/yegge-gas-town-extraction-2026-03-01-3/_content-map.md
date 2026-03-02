# Content Map: Steve Yegge and Gas Town — Complete Extraction

---

## 1. Structural Inventory

| # | Heading | Level | ~Words | Content Type | Density |
|---|---------|-------|--------|-------------|---------|
| — | Title + D-FINAL block + epigraph | h1 + meta | 35 | meta, quote | sparse |
| — | Table of Contents | — | 80 | list (linked) | sparse |
| 0 | You Are Here | h2 | 180 | mixed (ASCII diagram + checklist + list) | medium |
| 1 | Who is Steve Yegge? | h2 | 250 | mixed (prose, table, list, quote) | medium |
| 1.1 | Professional Background | h3 | 60 | table | dense |
| 1.2 | Why His Opinion Matters | h3 | 40 | list | dense |
| 1.3 | Public Presence | h3 | 40 | list | sparse |
| 1.4 | The "Vibe Coding" Pioneer | h3 | 80 | prose + quote + list | medium |
| 2 | The Gas Town Mental Model | h2 | 350 | mixed (quote, ASCII, table, prose) | medium |
| 2.1 | The Core Insight | h3 | 80 | quote + ASCII diagram | medium |
| 2.2 | The Factory Metaphor | h3 | 60 | table | dense |
| 2.3 | The "Idea Compiler" | h3 | 60 | quote + prose | medium |
| 2.4 | Why "Gas Town"? | h3 | 50 | list | sparse |
| 3 | The 8 Roles Architecture | h2 | 1050 | mixed (ASCII, prose, code, tables) | dense |
| 3.1 | Hierarchy Overview | h3 | 30 | ASCII diagram (large) | dense |
| 3.2 | Role Deep Dives (×8) | h3→h4 | 700 | prose + code blocks + lists | dense |
| 3.3 | Role Communication Flow | h3 | 40 | ASCII diagram | medium |
| 4 | Beads: The Memory System | h2 | 550 | mixed (quote, table, ASCII, code, prose) | dense |
| 4.1 | The "50 First Dates" Problem | h3 | 20 | quote | sparse |
| 4.2 | Why Markdown Plans Fail at Scale | h3 | 60 | table | dense |
| 4.3 | What Beads Does | h3 | 60 | list | medium |
| 4.4 | Beads Architecture | h3 | 20 | ASCII diagram | medium |
| 4.5 | Key Beads Commands | h3 | 30 | code | dense |
| 4.6 | Memory Model | h3 | 80 | ASCII diagram (layered) | dense |
| 4.7 | Why Git as Database? | h3 | 60 | quote + list | medium |
| 5 | The 6 Waves of AI | h2 | 200 | mixed (table, table, quote) | dense |
| 6 | Core Principles | h2 | 400 | mixed (quote, prose, list) | dense |
| 6.1 | GUPP | h3 | 100 | quote + prose + list | medium |
| 6.2 | Zero Framework Cognition | h3 | 30 | quote + prose | dense |
| 6.3 | Agents as Cattle, Not Pets | h3 | 50 | list | medium |
| 6.4 | Nondeterministic Idempotence | h3 | 60 | list | medium |
| 6.5 | Token Spend as Health Metric | h3 | 60 | quote + list | dense |
| 6.6 | Talk to the Plan, Not the Agent | h3 | 50 | prose + list | medium |
| 7 | Implementation Guide | h2 | 650 | mixed (code-heavy, checklist, prose) | dense |
| 7.1 | Prerequisites Checklist | h3 | 50 | checklist | medium |
| 7.2 | Installation | h3 | 40 | code | dense |
| 7.3 | Adding Your First Rig | h3 | 30 | code | dense |
| 7.4 | Starting the Core Roles | h3 | 50 | code | dense |
| 7.5 | tmux Workflow | h3 | 40 | ASCII diagram | medium |
| 7.6 | Startup Script | h3 | 180 | code (bash) | dense |
| 7.7 | Typical Daily Workflow | h3 | 120 | code + comments | medium |
| 8 | Checkpoints and Verification | h2 | 180 | mixed (table, code, list) | dense |
| 9 | Troubleshooting | h2 | 500 | mixed (code, prose, list) | medium |
| 9.1–9.6 | 6 failure scenarios | h4 | ~70 each | symptom/cause/recovery pattern | medium |
| 9.7 | Recovery Command Reference | h3 | 80 | code | dense |
| 10 | When to Use Gas Town | h2 | 250 | mixed (list, ASCII diagram) | medium |
| 11 | Quotes and Key Statements | h2 | 250 | quotes (grouped) | sparse |
| 12 | Comparison with Other Patterns | h2 | 500 | tables + ASCII + prose | dense |
| 13 | Sources | h2 | 250 | mixed (lists, table, code) | medium |
| — | Appendix: Quick Reference | h2 | 200 | code blocks | dense |
| — | Cost Estimation | h2 | 120 | code-formatted table + arithmetic | dense |
| — | Tags + Metadata | — | 60 | meta | sparse |

**Total estimated word count:** ~5,800–6,200

---

## 2. Hierarchy Depth

**Levels present:** 4 (h1, h2, h3, h4)

| Depth | Count | Location |
|-------|-------|----------|
| h1 | 1 | Document title |
| h2 | 16 | Major sections (0–13 + Appendix + Cost) |
| h3 | ~35 | Subsections throughout |
| h4 | 8 | Role Deep Dives (section 3) + Troubleshooting scenarios (section 9) |

**Deepest hierarchy:** Section 3 — The 8 Roles Architecture. Goes h2 → h3 (Role Deep Dives) → h4 (each individual role: Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew, Overseer). Also Section 9 — each troubleshooting failure pattern sits at h4.

**Structural orphans:**
- The D-FINAL connection block and epigraph sit between h1 and the Table of Contents — no parent heading.
- Tags, Document Metadata, and the closing quote sit after all numbered sections — appendix-level content without explicit containment.
- The Table of Contents itself is unheaded structural content.

---

## 3. Content Type Distribution

| Type | Approximate % | Notes |
|------|--------------|-------|
| Prose | 25% | Explanatory paragraphs, short connective tissue |
| Code/CLI blocks | 22% | bash commands, startup scripts, CLI reference |
| ASCII diagrams | 15% | Hierarchy charts, flow diagrams, decision trees |
| Tables | 15% | Comparison matrices, role summaries, wave taxonomy |
| Lists (bullet/checkbox) | 13% | Feature lists, checklists, principle enumerations |
| Blockquotes | 8% | Yegge quotes — high rhetorical weight |
| Meta (TOC, tags, metadata) | 2% | Structural bookkeeping |

**Longest unbroken prose passage:** ~80 words (The "Vibe Coding" Pioneer subsection, section 1.4). Prose passages are consistently short — rarely exceeding 60 words before interruption by a list, quote, code block, or table.

**Longest code block:** 32 lines (Startup Script in section 7.6, `gastown-start.sh`).

**Distinct list structures:** 23 (mix of unordered bullets, ordered lists, checklists, and definition-style lists).

---

## 4. Rhetorical Shifts

| Location | Shift | Nature |
|----------|-------|--------|
| TOC → "You Are Here" | **Overview → situated orientation** | Reader placed on a ladder; content becomes positional |
| End of "You Are Here" → Section 1 | **Orientation → authority-building** | From "where you stand" to "why trust this person" |
| Section 1 → Section 2 | **Biographical → conceptual** | From who to what; person to mental model |
| Section 2.1 (quote + ASCII) → 2.2 (table) | **Abstract → concrete** | Colony metaphor crystallized into comparison table |
| Section 2 → Section 3 | **Conceptual → architectural** | From metaphor to system specification; major density increase |
| Within Section 3: overview → deep dives | **Overview → detail** | ASCII hierarchy diagram → per-role specification cards |
| Section 3 → Section 4 | **Architecture → infrastructure** | From agent roles to their shared memory substrate |
| Section 4 → Section 5 | **Detail → overview** | From Beads internals to broad historical framing (6 Waves) |
| Section 5 → Section 6 | **Historical → philosophical** | From timeline to named principles; assertive voice peaks |
| Section 6 → Section 7 | **Abstract → demonstrative** | From principles to step-by-step installation; code dominates |
| Section 7 → Section 8 | **Demonstrative → verificatory** | From "do this" to "check that it worked" |
| Section 8 → Section 9 | **Verificatory → diagnostic** | From expected states to failure states |
| Section 9 → Section 10 | **Diagnostic → evaluative** | From "what breaks" to "should you use this at all" |
| Section 10 → Section 11 | **Evaluative → rhetorical** | Decision framework yields to voice — collected quotes |
| Section 11 → Section 12 | **Rhetorical → comparative** | From voice to structured comparison with alternatives |
| Section 12 → Section 13 | **Comparative → bibliographic** | From analysis to citation; content becomes reference |
| Section 13 → Appendix | **Bibliographic → reference** | Dense command che
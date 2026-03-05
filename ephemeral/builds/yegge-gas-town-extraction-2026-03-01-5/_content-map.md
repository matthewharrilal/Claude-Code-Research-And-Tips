## Content Map: Steve Yegge and Gas Town — Complete Extraction

---

### 1. Structural Inventory

| # | Heading | Level | ~Words | Content Type | Density |
|---|---------|-------|--------|-------------|---------|
| — | Title + Frontmatter (D-FINAL, tagline) | h1 + meta | 30 | prose, quote | sparse |
| — | Table of Contents | h2 | 60 | list | sparse |
| 0 | You Are Here | h2 | 250 | mixed (ASCII diagram, prose, checklists) | medium |
| 1 | Who is Steve Yegge? | h2 | 280 | mixed (table, lists, quote, prose) | medium |
| 1.1 | Professional Background | h3 | 60 | table | medium |
| 1.2 | Why His Opinion Matters | h3 | 50 | list | dense |
| 1.3 | Public Presence | h3 | 30 | list | sparse |
| 1.4 | The "Vibe Coding" Pioneer | h3 | 80 | quote, prose, list | medium |
| 2 | The Gas Town Mental Model | h2 | 270 | mixed (quotes, ASCII, tables, prose) | medium |
| 2.1 | The Core Insight | h3 | 60 | quote, ASCII diagram | medium |
| 2.2 | The Factory Metaphor | h3 | 60 | table, prose | medium |
| 2.3 | The "Idea Compiler" | h3 | 50 | quote, prose | sparse |
| 2.4 | Why "Gas Town"? | h3 | 40 | list | sparse |
| 3 | The 8 Roles Architecture | h2 | 950 | mixed (ASCII, prose, code, quotes) | dense |
| 3.1 | Hierarchy Overview | h3 | 30 | ASCII diagram (large) | dense |
| 3.2 | Role Deep Dives (×8 h4s) | h3 | 680 | repeating pattern: prose + code + recommendation | medium |
| 3.3 | Role Communication Flow | h3 | 60 | ASCII diagram | medium |
| 4 | Beads: The Memory System | h2 | 420 | mixed (quotes, tables, ASCII, code, lists) | dense |
| 4.1 | The "50 First Dates" Problem | h3 | 30 | quote, prose | sparse |
| 4.2 | Why Markdown Plans Fail at Scale | h3 | 50 | table | medium |
| 4.3 | What Beads Does | h3 | 70 | prose, list | medium |
| 4.4 | Beads Architecture | h3 | 20 | ASCII diagram | medium |
| 4.5 | Key Beads Commands | h3 | 30 | code | sparse |
| 4.6 | Memory Model | h3 | 60 | ASCII diagram | dense |
| 4.7 | Why Git as Database? | h3 | 50 | quote, list | medium |
| 5 | The 6 Waves of AI | h2 | 200 | tables, quote | dense |
| 5.1 | The 8 Stages of Dev Evolution | h3 | 100 | table, quote | dense |
| 6 | Core Principles | h2 | 350 | mixed (quotes, prose, lists) | medium |
| 6.1 | GUPP | h3 | 90 | quote, prose | medium |
| 6.2 | Zero Framework Cognition | h3 | 30 | quote, prose | sparse |
| 6.3 | Agents as Cattle, Not Pets | h3 | 40 | list | sparse |
| 6.4 | Nondeterministic Idempotence | h3 | 50 | list | medium |
| 6.5 | Token Spend as Health Metric | h3 | 80 | quote, list (math) | dense |
| 6.6 | Talk to the Plan, Not the Agent | h3 | 40 | prose, list | sparse |
| 7 | Implementation Guide | h2 | 500 | mixed (code-heavy, checklists, ASCII) | medium |
| 7.1 | Prerequisites Checklist | h3 | 50 | checklist | sparse |
| 7.2 | Installation | h3 | 40 | code | sparse |
| 7.3 | Adding Your First Rig | h3 | 30 | code | sparse |
| 7.4 | Starting the Core Roles | h3 | 60 | code, prose | medium |
| 7.5 | tmux Workflow | h3 | 40 | ASCII diagram | medium |
| 7.6 | Startup Script | h3 | 50 | code (large block) | dense |
| 7.7 | Typical Daily Workflow | h3 | 100 | code with comments | medium |
| 8 | Checkpoints and Verification | h2 | 150 | tables, code, prose | medium |
| 9 | Troubleshooting | h2 | 400 | repeating pattern (×6 h4s) + code | medium |
| 10 | When to Use Gas Town | h2 | 220 | lists, ASCII diagram | medium |
| 11 | Quotes and Key Statements | h2 | 250 | blockquotes only | sparse |
| 12 | Comparison with Other Patterns | h2 | 450 | tables, prose, ASCII | dense |
| 13 | Sources | h2 | 200 | links, tables, code | sparse |
| — | Appendix: Quick Reference | h2 | 120 | code | sparse |
| — | Cost Estimation | h2 | 100 | code (formatted math) | dense |
| — | Tags + Metadata + Closing | — | 60 | meta | sparse |

**Total estimated word count:** ~5,300 (excluding code blocks and ASCII art); ~7,200 including all text content.

---

### 2. Hierarchy Depth

**Levels present:** 4 (h1, h2, h3, h4)

**Deepest hierarchy:**
- Section 3 (The 8 Roles Architecture) → h3 "Role Deep Dives" → 8 × h4 role entries. This is the only section that reaches h4.
- Section 9 (Troubleshooting) → h3 "Common Failures" → 6 × h4 failure types. Second h4 usage.

**Structural orphans:**
- The frontmatter block (D-FINAL Connection, tagline blockquote) sits between the h1 title and the Table of Contents — structurally orphaned from any h2.
- The closing quote, tags, and metadata block after the last h2 are footer-orphans with no containing section.
- The "Complexity Ladder" ASCII art in "You Are Here" is a standalone diagram not introduced by an h3.

---

### 3. Content Type Distribution

| Content Type | Approx % | Notes |
|---|---|---|
| Prose paragraphs | 25% | Explanatory connective tissue between structures |
| Code blocks (CLI, bash, config) | 18% | Concentrated in §7, §9, Appendix |
| ASCII diagrams (structural art) | 15% | Major pieces in §0, §2, §3, §4, §7, §10, §12 |
| Tables | 15% | Throughout; heaviest in §1, §4, §5, §8, §12 |
| Bullet/numbered lists | 14% | Pervasive; checklists in §0, §7 |
| Blockquotes | 8% | Concentrated in §2, §6, §11 |
| Metadata/links | 5% | §13, tags, frontmatter |

**Longest unbroken prose passage:** ~80 words (the "Vibe Coding Pioneer" introduction in §1.4, and the GUPP explanation in §6.1). No prose passage exceeds ~100 words. The document is structurally fragmented — content alternates between types every 40–80 words.

**Longest code block:** ~35 lines (the `gastown-start.sh` startup script in §7.6)

**Distinct list structures:** 22 (bullet lists: 12, numbered lists: 3, checklists: 3, definition-style lists: 4)

---

### 4. Rhetorical Shifts

| Location | Shift Type | Description |
|---|---|---|
| Frontmatter → "You Are Here" | **Abstract → Concrete** | Identity tagline gives way to a literal positioning diagram |
| "You Are Here" → §1 | **Concrete → Narrative** | Positioning ladder yields to biographical authority-building |
| §1 → §2 | **Narrative → Conceptual** | Biography ends; mental model / metaphor introduction begins |
| §2.1 → §2.2 | **Assertive → Demonstrative** | Core insight quote followed by comparison table showing it |
| §2 → §3 | **Overview → Detail** | Mental model zooms into 8-role architecture (deepest section) |
| §3 (roles) → §3.3 (flow) | **Detail → Overview** | Individual role specs zoom back out to communication flow diagram |
| §3 → §4 | **Architecture → Infrastructure** | Roles (who) gives way to memory system (how they persist) |
| §4 → §5 | **Technical → Historical** | Beads implementation detail yields to evolutionary wave framework |
| §5 → §6 | **Historical → Philosophical** | Timeline gives way to design principles and axioms |
| §6 → §7 | **Abstract → Concrete** | Principles become installation commands and bash scripts |
| §7 → §8 | **Demonstrative → Verificatory** | "Do this" shifts to "verify you did it right" |
| §8 → §9 | **Verificatory → Diagnostic** | Checkpoints shift to failure modes and recovery |
| §9 → §10 | **Diagnostic → Evaluative** | Troubleshooting yields to "should you use this at all?" |
| §10 → §11 | **Evaluative → Anthological** | Decision criteria shift to curated quotations (voice collection) |
| §11 → §12 | **Anthological → Comparative** | Quotes give way to structured competitor analysis |
| §12 → §13 | **Comparative → Referential** | Analysis yields to source links and attribution |
| §13 → Appendix | **Referential → Utilitarian** | Sources give way to quick-reference command cheat sheets |

---

### 5. Natural Zone Candidates

#### Zone 1: Orientation (Frontmatter through "You Are Here")
- **Start:** Title / D-FINAL block
- **End:** End of "You Are Here" prerequisites list
- **Density character:** Opening
- **Rationale:** Establishes who this is for, where they stand
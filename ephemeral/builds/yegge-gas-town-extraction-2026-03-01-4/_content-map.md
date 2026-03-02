# Content Map: Steve Yegge and Gas Town — Complete Extraction

---

## 1. Structural Inventory

| # | Heading | Level | ~Words | Content Type | Density |
|---|---------|-------|--------|--------------|---------|
| — | Title + D-FINAL block + epigraph | h1 | 35 | mixed (metadata + quote) | sparse |
| — | Table of Contents | — | 80 | list (navigation) | sparse |
| 0 | You Are Here | h2 | 220 | mixed (ASCII art + checklist + prose) | medium |
| 1 | Who is Steve Yegge? | h2 | 280 | mixed (table + prose + list) | medium |
| 1.1 | Professional Background | h3 | 60 | table | dense |
| 1.2 | Why His Opinion Matters | h3 | 45 | list | dense |
| 1.3 | Public Presence | h3 | 40 | list | sparse |
| 1.4 | The "Vibe Coding" Pioneer | h3 | 80 | mixed (quote + list) | medium |
| 2 | The Gas Town Mental Model | h2 | 350 | mixed (quote + ASCII + table + prose) | medium |
| 2.1 | The Core Insight | h3 | 60 | quote + ASCII diagram | medium |
| 2.2 | The Factory Metaphor | h3 | 70 | table | dense |
| 2.3 | The "Idea Compiler" | h3 | 50 | quote + prose | medium |
| 2.4 | Why "Gas Town"? | h3 | 50 | list | sparse |
| 3 | The 8 Roles Architecture | h2 | 1050 | mixed (ASCII + prose + code + tables) | dense |
| 3.1 | Hierarchy Overview | h3 | 30 | ASCII diagram | dense |
| 3.2 | Role Deep Dives (×8) | h3→h4 | 750 | mixed (prose + code + recommendation) | dense |
| 3.3 | Role Communication Flow | h3 | 40 | ASCII diagram | dense |
| 4 | Beads: The Memory System | h2 | 500 | mixed (quote + table + ASCII + code + prose) | dense |
| 4.1 | The "50 First Dates" Problem | h3 | 20 | quote | sparse |
| 4.2 | Why Markdown Plans Fail at Scale | h3 | 60 | table | dense |
| 4.3 | What Beads Does | h3 | 80 | list + prose | medium |
| 4.4 | Beads Architecture | h3 | 20 | ASCII diagram | dense |
| 4.5 | Key Beads Commands | h3 | 30 | code | dense |
| 4.6 | Memory Model | h3 | 80 | ASCII diagram | dense |
| 4.7 | Why Git as Database? | h3 | 60 | quote + list | medium |
| 5 | The 6 Waves of AI | h2 | 250 | mixed (table + list + quote) | dense |
| 5.1 | (Waves table) | — | 80 | table | dense |
| 5.2 | The 8 Stages of Dev Evolution | h3 | 100 | table + quote | dense |
| 6 | Core Principles | h2 | 400 | mixed (quote + prose + list) | medium |
| 6.1 | GUPP | h3 | 100 | quote + prose + list | medium |
| 6.2 | Zero Framework Cognition | h3 | 40 | quote + prose | medium |
| 6.3 | Agents as Cattle, Not Pets | h3 | 50 | list | medium |
| 6.4 | Nondeterministic Idempotence | h3 | 60 | list | medium |
| 6.5 | Token Spend as Health Metric | h3 | 70 | quote + list | medium |
| 6.6 | Talk to the Plan, Not the Agent | h3 | 50 | list + prose | medium |
| 7 | Implementation Guide | h2 | 700 | mixed (code + checklist + prose + ASCII) | dense |
| 7.1 | Prerequisites Checklist | h3 | 50 | checklist | dense |
| 7.2 | Installation | h3 | 40 | code | dense |
| 7.3 | Adding Your First Rig | h3 | 30 | code | dense |
| 7.4 | Starting the Core Roles | h3 | 50 | code | dense |
| 7.5 | tmux Workflow | h3 | 40 | ASCII diagram | dense |
| 7.6 | Startup Script | h3 | 200 | code (extended) | dense |
| 7.7 | Typical Daily Workflow | h3 | 100 | code + prose | medium |
| 8 | Checkpoints and Verification | h2 | 200 | mixed (table + code + list) | dense |
| 9 | Troubleshooting | h2 | 500 | mixed (code + prose) | dense |
| 9.1–9.6 | Failure scenarios (×6) | h4 | 400 | repeating pattern: symptom/cause/recovery | dense |
| 9.7 | Recovery Command Reference | h3 | 80 | code | dense |
| 10 | When to Use Gas Town | h2 | 300 | mixed (list + ASCII diagram) | medium |
| 10.1 | Use Gas Town When | h3 | 70 | list | medium |
| 10.2 | Don't Use Gas Town When | h3 | 70 | list | medium |
| 10.3 | Decision Matrix | h3 | 80 | ASCII flowchart | medium |
| 11 | Quotes and Key Statements | h2 | 250 | quotes (grouped) | sparse |
| 12 | Comparison with Other Patterns | h2 | 550 | mixed (tables + prose + ASCII) | dense |
| 12.1 | Gas Town vs Ralph Wiggum | h3 | 120 | table + prose | dense |
| 12.2 | Gas Town vs CC Mirror | h3 | 140 | table + quote + prose | dense |
| 12.3 | Gas Town vs Infinite Orchestra | h3 | 120 | table + prose | dense |
| 12.4 | Pattern Comparison Summary | h3 | 60 | ASCII diagram | medium |
| 13 | Sources | h2 | 300 | mixed (links + table + code) | sparse |
| — | Appendix: Quick Reference | h2 | 200 | code (reference) | dense |
| — | Cost Estimation | h2 | 120 | code (formatted data) | dense |
| — | Tags + Document Metadata | — | 60 | metadata | sparse |

**Total estimated word count:** ~6,200 words (excluding code blocks and ASCII diagrams)

---

## 2. Hierarchy Depth

**Levels present:** 4 (h1 → h2 → h3 → h4)

| Depth | Count | Where |
|-------|-------|-------|
| h1 | 1 | Title only |
| h2 | 16 | Major sections (0–13 + Appendix + Cost) |
| h3 | 38 | Subsections throughout |
| h4 | 8 | Role Deep Dives (§3) and Troubleshooting failure types (§9) |

**Deepest hierarchy:** Section 3 (The 8 Roles Architecture) — h2 → h3 → h4 for each of the 8 roles. Also Section 9 (Troubleshooting) with h4 failure patterns.

**Structural orphans:**
- The D-FINAL connection block sits between title and epigraph with no heading
- The Table of Contents has no heading (implied)
- The closing quote (*"Build a colony..."*) is freestanding after metadata
- Tags block sits outside any section

---

## 3. Content Type Distribution

| Type | Approximate % | Notes |
|------|--------------|-------|
| Prose | 25% | Explanatory paragraphs, introductions |
| Code blocks | 22% | CLI commands, bash scripts, config examples |
| ASCII diagrams | 18% | Architecture diagrams, flowcharts, hierarchy maps |
| Tables | 15% | Comparison matrices, role descriptions, cost data |
| Lists (bulleted/numbered/checklist) | 12% | Requirements, features, principles |
| Block quotes | 6% | Yegge quotations throughout |
| Metadata/navigation | 2% | TOC, tags, document info |

**Longest unbroken prose passage:** ~80 words — in "The Vibe Coding Pioneer" subsection and in the introductory context of "You Are Here." The content is aggressively fragmented; prose rarely runs beyond 2-3 sentences before yielding to a structural element.

**Longest code block:** 35 lines — the `gastown-start.sh` startup script in §7.6.

**Distinct list structures:** 22 (including checklists, bulleted, numbered, and definition-style lists)

---

## 4. Rhetorical Shifts

| Location | Shift Type | Description |
|----------|-----------|-------------|
| §0 → §1 | **Abstract → Concrete** | Ladder positioning (where you are) yields to biographical facts (who Yegge is) |
| §1.2 → §1.3 | **Assertive → Sparse** | Claims about credibility compress into link list — intensity drops |
| §1.4 → §2 | **Detail → Overview** | Zooms out from Yegge the person to the mental model he built |
| §2.1 → §2.2 | **Explanatory → Demonstrative** | Philosophical quote becomes concrete table mapping old world to new |
| §2 → §3 | **Overview → Detail** | Major shift. Abstract mental model gives way to dense 8-role architecture. Density jumps sharply. |
| §3 (roles) internal | **Repeating pattern** | Each role follows identical structure: Function → Responsibilities → Commands → Model rec. This is rhythmic, not shifting. |
| §3 → §4 | **Concrete → Concrete** | Lateral shift between two systems (Gas Town roles → Beads memory). The connector is the "50 First Dates" quote reframing the problem. |
| §4 → §5 | **Detail → Overview** | Zooms out from technical Beads implementation to historical wave framework. Breathing room. |
| §5 → §6 | **Overview → Abstract** | Waves/stages framework leads to philosophical principles. The content becomes declarative. |
| §6 → §7 | **Abstract → Concrete** | Major shift. Principles become installation commands, shell scripts, daily workflows. The document pivots from "what" to "how." |
| §7 → §8 | **Demonstrative → Verific
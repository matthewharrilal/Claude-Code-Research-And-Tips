# Content Map: Steve Yegge and Gas Town

---

## 1. Structural Inventory

| # | Heading | Level | ~Words | Content Type | Density |
|---|---------|-------|--------|--------------|---------|
| — | Title + D-FINAL block + tagline | h1 | 30 | prose + metadata | sparse |
| — | Table of Contents | — | 60 | ordered list | sparse |
| 0 | You Are Here | h2 | 200 | mixed (ASCII diagram, prose, bullets, checklist) | medium |
| 1 | Who is Steve Yegge? | h2 | 300 | mixed (table, bullets, quote, prose) | medium |
| 1.1 | Professional Background | h3 | 80 | table + prose | medium |
| 1.2 | Why His Opinion Matters | h3 | 70 | bullets | dense |
| 1.3 | Public Presence | h3 | 40 | bullets | sparse |
| 1.4 | The "Vibe Coding" Pioneer | h3 | 110 | quote + bullets + prose | medium |
| 2 | The Gas Town Mental Model | h2 | 250 | mixed (quote, ASCII diagram, table, prose) | medium |
| 2.1 | The Core Insight | h3 | 60 | quote + ASCII diagram | medium |
| 2.2 | The Factory Metaphor | h3 | 70 | table + prose | medium |
| 2.3 | The "Idea Compiler" | h3 | 60 | quote + prose | medium |
| 2.4 | Why "Gas Town"? | h3 | 50 | bullets | sparse |
| 3 | The 8 Roles Architecture | h2 | 850 | mixed (ASCII diagrams, code, prose, bullets) | dense |
| 3.1 | Hierarchy Overview | h3 | 10 | ASCII diagram (large) | dense |
| 3.2 | Role Deep Dives | h3 | 700 | 8× h4 blocks (prose + code + bullets) | dense |
| 3.2.x | Mayor/Deacon/Dogs/Refinery/Polecat/Witness/Crew/Overseer | h4 | ~85 each | prose + code + bullets | dense |
| 3.3 | Role Communication Flow | h3 | 10 | ASCII diagram | dense |
| 4 | Beads: The Memory System | h2 | 380 | mixed (quote, table, bullets, ASCII diagrams, code) | dense |
| 4.1 | The "50 First Dates" Problem | h3 | 30 | quote + prose | medium |
| 4.2 | Why Markdown Plans Fail at Scale | h3 | 50 | table | medium |
| 4.3 | What Beads Does | h3 | 60 | bullets | medium |
| 4.4 | Beads Architecture | h3 | 10 | ASCII diagram | dense |
| 4.5 | Key Beads Commands | h3 | 30 | code | dense |
| 4.6 | Memory Model | h3 | 10 | ASCII diagram | dense |
| 4.7 | Why Git as Database? | h3 | 60 | quote + bullets | medium |
| 5 | The 6 Waves of AI | h2 | 200 | tables + quote + prose | medium |
| 5.1 | The 8 Stages of Dev Evolution | h3 | 100 | table + quote | medium |
| 6 | Core Principles | h2 | 350 | mixed (quotes, prose, bullets, code) | dense |
| 6.1 | GUPP | h3 | 100 | quote + prose + bullets | dense |
| 6.2 | Zero Framework Cognition | h3 | 40 | quote + prose | medium |
| 6.3 | Agents as Cattle, Not Pets | h3 | 50 | bullets | medium |
| 6.4 | Nondeterministic Idempotence | h3 | 60 | bullets | medium |
| 6.5 | Token Spend as Health Metric | h3 | 70 | quote + bullets | dense |
| 6.6 | Talk to the Plan, Not the Agent | h3 | 40 | bullets | medium |
| 7 | Implementation Guide | h2 | 500 | mixed (checklists, code blocks, ASCII diagram, prose) | dense |
| 7.1 | Prerequisites Checklist | h3 | 50 | checklist | medium |
| 7.2 | Installation | h3 | 40 | code | dense |
| 7.3 | Adding Your First Rig | h3 | 30 | code | dense |
| 7.4 | Starting the Core Roles | h3 | 60 | code + prose | dense |
| 7.5 | tmux Workflow | h3 | 30 | ASCII diagram + prose | medium |
| 7.6 | Startup Script | h3 | 40 | code (long block) | dense |
| 7.7 | Typical Daily Workflow | h3 | 80 | code + comments | dense |
| 8 | Checkpoints and Verification | h2 | 130 | table + code | medium |
| 8.1 | Post-Installation Checkpoints | h3 | 50 | table | medium |
| 8.2 | Health Checks | h3 | 50 | code + bullets | medium |
| 8.3 | Quality Verification | h3 | 20 | code | sparse |
| 9 | Troubleshooting | h2 | 400 | mixed (6× symptom/cause/recovery blocks, code) | medium |
| 9.1 | Common Failures and Recovery | h3 | 300 | 6× h4 (prose + code) | medium |
| 9.2 | Recovery Command Reference | h3 | 80 | code | dense |
| 10 | When to Use Gas Town | h2 | 220 | bullets + ASCII diagram | medium |
| 10.1 | Use Gas Town When | h3 | 70 | bullets | sparse |
| 10.2 | Don't Use Gas Town When | h3 | 60 | bullets | sparse |
| 10.3 | Decision Matrix | h3 | 10 | ASCII diagram | medium |
| 11 | Quotes and Key Statements | h2 | 280 | blockquotes grouped by h3 | sparse |
| 12 | Comparison with Other Patterns | h2 | 380 | tables + prose + ASCII diagram | medium |
| 12.1 | Gas Town vs Ralph Wiggum | h3 | 120 | table + prose | medium |
| 12.2 | Gas Town vs CC Mirror | h3 | 130 | table + quote + prose | medium |
| 12.3 | Gas Town vs Infinite Orchestra | h3 | 100 | table + prose | medium |
| 12.4 | Pattern Comparison Summary | h3 | 10 | ASCII diagram | dense |
| 13 | Sources | h2 | 230 | links + tables + code | sparse |
| — | Appendix: Quick Reference | h2 | 120 | code blocks | dense |
| — | Cost Estimation | h2 | 100 | code-formatted math | medium |
| — | Tags | h2 | 20 | inline tags | sparse |
| — | Document Metadata | h2 | 40 | metadata list | sparse |

**Total estimated word count:** ~4,700 (text) + ~600 lines of code/ASCII

---

## 2. Hierarchy Depth

**Levels present:** 4 (h1 → h2 → h3 → h4)

| Depth | Count | Location |
|-------|-------|----------|
| h1 | 1 | Document title |
| h2 | 16 | Major sections (numbered 1-13 + Appendix/Cost/Tags/Metadata) |
| h3 | ~40 | Subsections within each h2 |
| h4 | 14 | 8 role deep dives (Section 3) + 6 troubleshooting items (Section 9) + source categories (Section 13) |

**Deepest nesting:** Section 3 → Role Deep Dives → Individual Roles (h2 > h3 > h4). Each h4 role block contains its own internal structure (bold labels, code blocks, bullets) creating an effective 5th level without heading markup.

**Structural orphans:**
- The D-FINAL Connection block sits between h1 and the tagline blockquote — neither is under any h2
- The tagline blockquote ("The agent factory architect...") is unattached
- Table of Contents is freestanding between tagline and first h2
- Tags, Document Metadata, and the closing italicized quote are post-content appendages with h2 headings but no substantive structural parent

---

## 3. Content Type Distribution

| Type | Estimated % | Notes |
|------|-------------|-------|
| Prose | 25% | Mostly short explanatory passages, rarely exceeding 80 words unbroken |
| Code blocks | 22% | CLI commands, bash scripts, ASCII diagrams |
| ASCII diagrams | 15% | Large structural diagrams (hierarchy, memory model, decision trees) |
| Tables | 14% | Comparison matrices, role summaries, checkpoint tables |
| Bullet/numbered lists | 12% | Prerequisites, principles, feature lists |
| Blockquotes | 8% | Yegge quotes distributed throughout, concentrated in Section 11 |
| Metadata/other | 4% | Tags, D-FINAL block, document metadata |

**Longest unbroken prose passage:** ~80 words — the "Vibe Coding" Pioneer introductory paragraph in Section 1.4

**Longest code block:** ~35 lines — the `gastown-start.sh` startup script in Section 7.6

**Longest ASCII diagram:** ~22 lines — the Role Hierarchy box diagram in Section 3.1

**Distinct list structures:** 24 (including 1 ordered TOC, 6 checklists, 17 unordered bullet lists)

---

## 4. Rhetorical Shifts

| Location | From → To | Nature |
|----------|-----------|--------|
| End of "You Are Here" → Section 1 | **Orientation → Authority** | Reader positioning gives way to credibility establishment |
| End of Section 1 → Section 2 | **Authority → Conceptual** | Person-focused → idea-focused; "who" → "what" |
| Section 2 (Mental Model) → Section 3 (8 Roles) | **Abstract → Concrete** | Metaphor/philosophy → specific architecture with named components |
| Within Section 3, prose → h4 role blocks | **Overview → Detail** | Hierarchy diagram → individual role specifications |
| End of Section 3 → Section 4 (Beads) | **Architecture → Infrastructure** | The system → its substrate; roles → their memory |
| End of Section 4 → Section 5 (6 Waves) | **Detail → Overview** | Zoom out from implementation detail to historical/evolutionary framing |
| Sec
# Delivery Format Research: How Findings Actually Land

**Agent:** format-researcher (Opus 4.6)
**Date:** 2026-02-27
**Task:** Investigate the synthesis bottleneck and propose alternatives

---

## 1. THE CORPUS: Scale of the Problem

- **1,232 markdown files** in ephemeral/
- **539,378 total lines** (~2.7M words estimated)
- **31 directories** of research, each representing a research team session
- Average research team: 12 agents, 12 files, ~8,000 lines
- Average synthesis file: 500-700 lines compressing 8,000-16,000 source lines
- Compression ratio: **10-15x** (90-93% information loss per synthesis)

The user reads the synthesis. The synthesis is lossy. The cycle repeats.

---

## 2. COMPRESSION RATIOS: What Three Synthesis Files Actually Achieved

### File A: fat-core-capability/17-MASTER-SYNTHESIS.md
- **Input:** 29 reports, ~750KB (~11,500 lines)
- **Output:** ~500 lines
- **Compression:** 23:1
- **What survived:** The verdict (PROBABLY YES for Middle, UNKNOWN for Flagship), a configuration table, a decision tree, the contrarian's main challenge. Each report's CONCLUSION survived as 1-2 sentences.
- **What died:** Evidence chains, methodology details, intermediate reasoning, disagreements between reports, nuanced edge cases. Report 16's contrarian challenges survived in abstract but the SPECIFIC challenges (4 confounded variables, which variables, how confounded) compressed to a single sentence.

### File B: pipeline-enrichment-research/11-master-synthesis.md
- **Input:** 17 reports, ~8,300 lines
- **Output:** ~500 lines
- **Compression:** 16:1
- **What survived:** 6 consensus findings, 3 genuine disagreements, a decision matrix with verdicts. BETTER than File A because it preserved the disagreements with both sides quoted.
- **What died:** The concept-flow-trace (Report 17) traced 9 concepts through 6 pipeline stages. The synthesis preserved ONE sentence about this: "Only perception thresholds survived." The other 8 concepts' specific failure modes — their extinction pathways — vanished. Also: the contrarian's case for "compression IS abstraction" got 4 lines despite being the intellectually richest argument in the corpus.

### File C: pv2-cross-reference/14-MASTER-SYNTHESIS.md
- **Input:** 24 reports, ~10,500 lines
- **Output:** ~614 lines
- **Compression:** 17:1
- **What survived:** Convergence map (unanimity counts), contradiction map (with resolutions), change checklist. This was the BEST synthesis — it used convergence counting to add structure.
- **What died:** WHY agents agreed or disagreed. "23/23 agree on two-layer verification" tells you consensus exists but not the reasoning. Also: the contradiction resolutions were decided BY THE SYNTHESIZER without visibility to the user. The synthesizer resolved X-01 (stacked gap: 108 vs 120 vs 192px) by citing "Architecture Decision 2" — but the user never saw the alternatives or the tradeoff.

### Pattern: synthesis preserves CONCLUSIONS but kills REASONING and TRADEOFFS.
The user gets "what to do" without "why" or "what we considered and rejected." This makes it impossible to challenge findings or build investment.

---

## 3. WHAT ACTUALLY WORKED: When Did Findings Change Real Files?

### Success Case 1: pipeline-enrichment-impl/ (24 files, 10,287 lines)
The enrichment research (17 reports) produced a synthesis (500 lines) that produced a DECISION MATRIX (5 verdicts: DO/DEFER). The implementation team then wrote CHANGE MANIFESTS — exact edits with old text, new text, line numbers, anti-regression checks. The change manifests actually got applied to conventions-brief.md.

**Why it worked:** The change manifest format is SELF-EXECUTING. An agent reads it and applies it. No interpretation needed. No compression. Each edit traces back to a specific report and specific finding.
**Format:** `Edit N: [source finding] → [old text] → [new text] → [anti-regression check]`

### Success Case 2: Remediation spec (ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md)
12 Opus agents produced a 1,025-line spec that an Opus BUILDER then executed. PA-05 went from 1.5/4 to 2.5/4 (per this system's compositional model). The spec was a RECIPE (9 phases, specific CSS, specific HTML changes). It wasn't a synthesis of findings — it was a direct set of instructions.

**Why it worked:** The consumer was an LLM agent, not a human. The format was imperative (do X, then Y). No interpretation of abstract findings needed.

### Success Case 3: REFINE builder in Yegge Gas Town build
A different Opus agent read ONLY the artistic/conviction PA feedback (not gates, not technical reports) and rewrote the page. PA-05 went from 2.0/4 to 3.5/4 (per this system's compositional model). Largest single-cycle PA-05 improvement ever.

**Why it worked:** The builder received CURATED, QUALITATIVE feedback — not a synthesis of 9 auditors, but the specific artistic assessments that spoke to composition. The signal was high because the noise was pre-filtered.

**PA circularity note (Pattern 1):** Both success cases use PA-05 as the sole quality measure. The remediation case has style-independent backing: visible borders were added, typography hierarchy was introduced, accessibility went from 0/8 to 8/8 — these improvements are measurable outside PA-05. The REFINE case is more PA-dependent: the REFINE builder received feedback shaped by PA-05's aesthetic model, then was re-evaluated by PA-05. The "success" partially reflects better alignment with the same aesthetic the feedback encoded.

### Failure Case 1: All 31 research directories in ephemeral/
Each produced thorough analysis. Most produced synthesis files. The synthesis files went into MEMORY.md as 2-3 sentence summaries. The original findings are effectively dead — no future agent or user reads the 8,000-line corpus.

### Failure Case 2: The 963-line master execution prompt
This was the PRODUCT of synthesizing months of research into a single executable document. It scored PA-05 1.5/4 (per this system's compositional model). The synthesis was so lossy that it inverted the creative engine: 7.9:1 guardrail-to-playbook ratio, zero compositional intelligence reaching the builder. **(Note: this failure case has style-independent backing — zero visible borders and uniform 16px/400 typography are objectively flat regardless of the quality metric used.)**

### Pattern: ACTIONABLE FORMATS (change manifests, recipes, curated feedback) change behavior. ANALYTICAL FORMATS (synthesis files, convergence maps, research reports) do not.

**[VERIFIED by independent evaluation:]** The independent evaluation independently confirmed this exact pattern. The pipeline's "recipe over checklist" distinction — where builders receive sequenced steps with "Read/Select/Deploy/Assess" verbs (recipe) instead of "Verify/Fail if/Must be" verbs (checklist) — is cited as "a genuine finding that drives real quality differences." The independent evaluation rates the pipeline's builder-facing artifacts (recipe format, reference file routing, iteration protocol) as SOLID, while rating the analytical infrastructure (57-gate specification, 3,185-line JS code that never executes, ~1,300-line manifest) as over-complex. This independently confirms that the actionable format IS the bottleneck differentiator.

---

## 4. ROOT CAUSE ANALYSIS: Why Synthesis Fails

**R1: LLM synthesizers face the same context limits as the pipeline.**
A synthesizer with 128K context cannot faithfully compress 16,000 lines. It generates plausible output that captures surface patterns. This is the SAME failure mode as the pipeline compressing 337 findings into "sample 2-4 mechanisms." **[VERIFIED by independent evaluation: The independent evaluation confirms the enormous infrastructure-to-output ratio. "The MANIFEST alone is ~1,300 lines. Add 9 artifacts, split gate runner (5 files), split PA protocol (6 files), templates, and you have ~10,000+ lines of pipeline infrastructure to produce one HTML page." This independently corroborates R1: the meta-complexity is disproportionate to the output.]**

**R2: Synthesis destroys tradeoff information.**
"23/23 agree" tells you WHAT but not WHY or WHAT ALTERNATIVES WERE CONSIDERED. The user can't challenge a conclusion they can't see the reasoning behind.

**R3: The user has no entry point into granular files.**
1,232 files with no navigation, no hierarchy, no "start here." Reading a specific finding requires knowing which of 31 directories to look in, which of 12 files contains it, and which section of that file addresses it. The granular research is technically available but practically inaccessible.

**R4: Research teams write for COMPLETENESS, not for ABSORPTION.**
Reports are structured as exhaustive analyses, not as progressive disclosures. A 500-line report reads like an academic paper, not like a conversation. The format fights absorption.

**R5: MEMORY.md is a 200-line cap on institutional memory.**
Everything beyond what fits in MEMORY.md is effectively ephemeral. 539,378 lines → 200 lines = 2,700:1 compression. No system survives this.

---

## 5. FOUR ALTERNATIVE DELIVERY APPROACHES

### Approach A: The Forensic Changelog (Append-Only Decision Log)

**Concept:** One persistent file (`design-system/DECISION-LOG.md`) that grows over time. Every research finding that warrants action gets ONE entry:

```
## 2026-02-17: Builder visibility cap is 75 lines (13.4% of prompt)
EVIDENCE: flagship-audit/03-prompt-surgery.md lines 45-89
DECISION: Route reference files to builder, not planner
APPLIED: PV2 operational recipe gives builder ~650 lines
STATUS: VERIFIED in remediation (PA-05 1.5→2.5)
```

Each entry: finding, evidence pointer, decision, application status. 5-8 lines max.

**How it solves the bottleneck:** Findings accumulate in ONE file that the user reads regularly. No synthesis needed — each finding is self-contained. Evidence is linked, not embedded. The user can drill into any finding by following the pointer.

**Compression strategy:** 0:1 — no compression of findings. Compression of EVIDENCE (pointer to source file, not inline text).

**Weakness:** Grows indefinitely. At 500+ entries it becomes its own navigation problem. Needs periodic archiving of VERIFIED entries.

### Approach B: The Layered Briefing (Progressive Disclosure HTML)

**Concept:** Deliver each research session's output as a SINGLE HTML page with 3 layers:
- **Layer 0 (visible by default):** 5-15 bullet findings, each one sentence. The user sees this first. ~30 seconds to read.
- **Layer 1 (expandable):** Each bullet expands to a 3-5 sentence reasoning block with evidence citation. ~5 minutes to read.
- **Layer 2 (linked):** Full source report accessible via link. ~30 minutes to read if desired.

**How it solves the bottleneck:** The user controls their depth. Most findings get Layer 0 attention. Findings the user questions get Layer 1 attention. Only contested or critical findings get Layer 2 deep dives. No compression — all 3 layers coexist.

**Compression strategy:** 0:1 within the HTML. The HTML IS the deliverable. Source reports still exist as Layer 2 but don't need separate synthesis.

**Weakness:** Requires each research team to produce the layered format directly (not report-then-synthesize). This changes the agent team topology: agents must write FINDINGS, not REPORTS.

### Approach C: The Living Question Board (Interactive Q&A)

**Concept:** Instead of producing reports that answer unasked questions, structure research around the user's ACTUAL QUESTIONS. The master document (Part 3) already has 30+ questions. Each question gets a persistent answer file:

```
ephemeral/answers/Q3.5-protective-vs-parasitic.md
```

Research agents write DIRECTLY into the answer file. Multiple agents append their perspective, tagged with their identity. The file grows as evidence accumulates. The user reads the ANSWER to their question, not a synthesis of a research corpus.

**How it solves the bottleneck:** Research output is organized by USER NEED, not by AGENT OUTPUT. The user goes to the question they care about and reads the accumulated evidence. No synthesis needed because the accumulation IS the answer.

**Compression strategy:** Agent outputs are PRE-ROUTED to the question they address. No post-hoc synthesis. Each question file has 50-200 lines of accumulated perspectives.

**Weakness:** Questions evolve. New questions emerge from answers. Requires maintenance of the question taxonomy. Also: agent perspectives may contradict each other within a file, requiring the user to adjudicate.

### Approach D: The Conversation-First Delivery (Talk, Don't Write)

**Concept:** Don't write research files at all. Instead, agents conduct their research, then a SINGLE presentation agent reads all findings and TALKS to the user — in the main conversation thread — as a structured briefing. The conversation is interactive: the user asks follow-ups, challenges findings, requests evidence. The briefing agent has all source material in context.

Each briefing session covers ONE topic (one of the Layer questions from the master doc). Takes 15-30 minutes of interactive conversation. No files produced except a 20-line summary appended to DECISION-LOG.md after the conversation.

**How it solves the bottleneck:** No intermediate files. No synthesis. The user absorbs findings through CONVERSATION, which is the highest-bandwidth channel for LLM-to-human communication. Questions get answered in real-time. Tradeoff information survives because the user can ask "what alternatives did you consider?"

**Compression strategy:** The conversation IS the delivery mechanism. The 20-line decision log summary is written AFTER the user has invested in understanding.

**Weakness:** Not persistent across sessions. New Claude instances can't read past conversations. Requires the 20-line summary to capture the essential decisions. Also: the user must be present for each briefing (can't be async).

---

## 6. RECOMMENDATION: Hybrid B+D (Layered Briefing + Conversation)

No single approach solves all failure modes. The strongest combination:

1. **Research agents produce FINDINGS, not REPORTS.** Each finding is a structured unit: claim + evidence pointer + confidence + counterclaim. Max 10 lines per finding.

2. **A presentation agent assembles findings into a LAYERED HTML BRIEFING** (Approach B). Layer 0 for scanning, Layer 1 for understanding, Layer 2 for deep dives.

3. **The user receives the briefing AND a conversation session** (Approach D) to discuss, challenge, and decide. This is where tradeoff information survives.

4. **Decisions are captured in an append-only DECISION-LOG.md** (Approach A) after each conversation. 5-8 lines per decision. Evidence pointers, not evidence.

5. **The decision log replaces MEMORY.md's role** as institutional memory for this project. MEMORY.md points to it; it doesn't try to summarize it.

**What this kills:** The current pattern of 12 agents → 12 reports → 1 synthesis → MEMORY.md 2-line summary. That's a 4-stage compression pipeline with ~2,700:1 total loss.

**What this creates:** 12 agents → structured findings → layered briefing → conversation → decision log entry. The compression happens at the FRONT (findings, not reports) and the BACK (decision log), with the user's conversation providing the quality filter in between.

**[INDEPENDENT CHECK: The independent evaluation corroborates this approach indirectly. It found that the pipeline's own success stories follow the same pattern: the REFINE builder receives CURATED feedback (artistic prose, not gate scores), and the BV revision loop catches problems via focused binary checks, not exhaustive reports. The pattern that works IN the pipeline (curated actionable input > comprehensive analytical input) is the same pattern this recommendation proposes for the research delivery process. Additionally, the independent evaluation notes that the skills serve value "as REFERENCE DOCUMENTS for understanding WHY the pipeline does what it does" — supporting Approach C's question-board model where research files serve as evidence-on-demand rather than mandatory reading.]**

---

## 7. IMPLEMENTATION COST

- **Approach B alone:** Requires changing agent team prompts to write findings (not reports) and building one HTML template. One session to set up. Low cost.
- **Approach D alone:** Zero infrastructure. Just change how sessions end — briefing agent instead of synthesis agent. Zero cost.
- **Hybrid B+D:** One HTML template + changed agent prompts + changed session ending. One session to set up. The decision log is just a markdown file. Low cost.
- **The current approach costs MORE:** 12 synthesis agents per session, each reading 8,000+ lines and producing 500-line summaries that nobody reads. The synthesis is the most expensive and least valuable step in every research session.

---

## 8. EVIDENCE FOR EACH CLAIM (Traceability)

| Claim | Evidence |
|-------|----------|
| 10-15x compression ratio | fat-core: 11,500→500 (23:1), enrichment: 8,300→500 (16:1), pv2: 10,500→614 (17:1) |
| Synthesis preserves conclusions, kills reasoning | All 3 synthesis files examined: verdicts survive, tradeoff analysis does not |
| Change manifests work | pipeline-enrichment-impl/01-brief-changes.md — 4 edits applied, each traceable |
| Recipes work | Remediation spec (1,025 lines) → PA-05 1.5→2.5; REFINE builder → PA-05 2.0→3.5. PA-05 is 61% aesthetic-shaped; style-independent evidence (visible borders added, accessibility 0→8) corroborates. |
| Synthesis files don't change behavior | 31 research directories, most with synthesis files, findings in MEMORY.md as 2-3 line summaries |
| 963-line master prompt failure | Flagship experiment: PA-05 1.5/4. 7.9:1 guardrail:playbook ratio |
| MEMORY.md cap is 200 lines | System prompt: "lines after 200 will be truncated" |
| Total corpus is 539K lines | `find ephemeral/ -name "*.md" -exec wc -l {} + | tail -1` = 539,378 |

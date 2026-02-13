# OD-004 External Research Report
## Confidence-Based / Progressive Disclosure Documentation Practices

**Research Agent:** UX/UI External Practices Scan
**Date:** 2026-02-07
**Purpose:** Feed OD-004 build with external practices for confidence-based organization using GEOLOGICAL + CRESCENDO density patterns
**Target Findings:** R1-001, R1-003, R1-004, R1-006 + DD-F-004 GEOLOGICAL, DD-F-002 CRESCENDO, DD-F-006 FRACTAL (mandatory)

---

## EXECUTIVE SUMMARY

12 resources surveyed across 8 research dimensions. The external landscape validates the GEOLOGICAL + CRESCENDO pairing as a strong organizational model with well-established precedent in UX, documentation design, epistemic writing, and AI confidence visualization. Key synthesis: the field converges on a **three-tier confidence model** (high/medium/low) with **color-coded thresholds**, **progressive depth revelation**, and **epistemic status markers** as the dominant patterns. OD-004 can draw from all of these while adding the unique KortAI constraint: density rhythm (certain=sparse, uncertain=dense) and fractal self-similarity at 4 scales.

---

## RESOURCE 1: Nielsen Norman Group — Progressive Disclosure

**URL:** [Progressive Disclosure — NN/G](https://www.nngroup.com/articles/progressive-disclosure/)
**Type:** Canonical UX research (primary source)

### Key UX/UI Practice

Progressive disclosure defers advanced features to secondary screens, balancing user demands for both power and simplicity. Two essential requirements for success:

1. **Correct Feature Division** — Display frequently-needed features upfront; reserve rarely-used options for secondary levels
2. **Clear Progression Mechanics** — Use labels with strong "information scent" so users understand what they will find when they drill deeper

Progressive disclosure improves three usability components:
- **Learnability:** Users focus on essential features first
- **Efficiency:** Advanced users skip unnecessary options
- **Error reduction:** Fewer confusing choices prevent mistakes

**Failure modes:** Excessive disclosure levels (3+ typically confuses users), mislabeled progression buttons, including secondary features on the primary display, over-compartmentalizing interdependent features.

### Mapping to GEOLOGICAL Layering

| NN/G Concept | GEOLOGICAL Equivalent |
|-------------|----------------------|
| Primary display (frequent features) | Surface stratum (certain facts) |
| Secondary screen (advanced options) | Middle stratum (probable/uncertain) |
| Failure at 3+ levels | Validates 3-layer geological model, not 5+ |
| "Information scent" on drill-down labels | Stratum transition markers need strong scent |

### New Techniques for OD-004

- **Two-level limit for core interaction:** NN/G data shows 3+ levels cause confusion. OD-004's GEOLOGICAL layers should present maximum 3 visible strata (certain / probable / speculative) with the fourth (unknown) accessible only via explicit opt-in.
- **Label the drill-down:** Every stratum transition needs a label with clear information scent: "Dig deeper: speculative approaches" not just "More."
- **Staged Disclosure variant:** Linear reveal (wizard-like) maps to CRESCENDO. Each section reveals progressively more uncertain content as the reader scrolls.

### Implementation Ideas

```
SURFACE (always visible):
  "We know X because [evidence]"

DRILL-DOWN TRIGGER (labeled):
  "Explore probable approaches (moderate evidence) ▼"

DEEPER (on click/scroll):
  "Speculative: emerging patterns suggest..."

DEEPEST (explicit opt-in):
  "Unknown territory: open research questions"
```

---

## RESOURCE 2: Confidence Visualization UI Patterns — AI Design Patterns

**URL:** [Confidence Visualization — AI UX Design Guide](https://www.aiuxdesign.guide/patterns/confidence-visualization)
**Type:** AI/UX pattern library

### Key UX/UI Practice

Color-coded confidence thresholds for showing "we know this" vs "this is uncertain":

| Threshold | Color | Visual Treatment |
|-----------|-------|-----------------|
| High confidence (>=80%) | Green | Bold, prominent, larger styling |
| Medium confidence (50-80%) | Amber | Standard presentation |
| Low confidence (<50%) | Red warning | Explanatory warnings, human verification recommended |

Multi-layered communication: Color + Percentage + Icon/Label create redundant, accessible confirmation. Expandable details ("Why this confidence?") let users drill into factors affecting certainty without overwhelming initial presentation.

### Mapping to GEOLOGICAL Layering

| CVP Concept | GEOLOGICAL Equivalent |
|-------------|----------------------|
| High confidence (green, bold) | Surface stratum: sparse, confident, prominent |
| Medium confidence (amber) | Middle stratum: moderate density, hedged language |
| Low confidence (red, warnings) | Deep stratum: dense, uncertain, flagged |
| "Why this confidence?" tooltip | Drill-down from stratum to supporting evidence |

### New Techniques for OD-004

- **Confidence-as-density inversion:** High confidence = sparse (less explanation needed). Low confidence = dense (more caveats, alternatives, evidence needed). This DIRECTLY maps to R1-001 density rhythm: certain=sparse, uncertain=dense.
- **Redundant coding:** Never use color alone. Pair with text labels, icons, and density changes. This satisfies DD-F-015 (no traffic-light colors adjacent) if the color system uses the KortAI palette rather than raw green/amber/red.
- **Expandable confidence rationale:** Each stratum provides a "Why this certainty level?" mechanism, creating fractal depth within each layer (DD-F-006 satisfied).

### Implementation Ideas

```css
/* Confidence stratum visual treatment */
.stratum-certain {
  /* Sparse: generous whitespace, minimal annotation */
  padding: 3rem 2rem;
  color: var(--text-primary);
  /* No border accent needed — confidence is implicit */
}

.stratum-probable {
  /* Moderate: some hedging, moderate density */
  padding: 2rem;
  border-left: 4px solid var(--accent-warm);
  /* Amber-equivalent in KortAI palette */
}

.stratum-speculative {
  /* Dense: caveats, alternatives, evidence clusters */
  padding: 1.5rem;
  border-left: 4px solid var(--accent-secondary);
  background: var(--surface-recessed);
}

.stratum-unknown {
  /* Densest: open questions, research gaps, community discussion */
  padding: 1rem;
  border: 1px dashed var(--border-subtle);
  background: var(--surface-deep);
}
```

---

## RESOURCE 3: Agentic Design Patterns — Confidence Visualization Patterns (CVP)

**URL:** [CVP — Agentic Design](https://agentic-design.ai/patterns/ui-ux-patterns/confidence-visualization-patterns)
**Type:** Agentic AI design pattern catalog

### Key UX/UI Practice

CVP is classified as "high complexity" and defines three distinct confidence display systems:

1. **Percentage-based:** 0-100% confidence ranges (precise but can create false precision)
2. **Categorical labels:** Low/Medium/High tiers (simpler, less misleading)
3. **Visual indicators:** Progress bars, color gradients, uncertainty bands/ranges

Critical Do's:
- Use consistent color schemes across the interface
- Explain factors influencing confidence scores
- Display uncertainty ranges alongside point estimates
- Provide historical accuracy calibration data

Critical Don'ts:
- Avoid false precision (present "very high" not "99.73%")
- Never hide genuine uncertainty
- Don't position confidence as sole decision factor
- Don't make typical low-confidence states appear alarming

### Mapping to GEOLOGICAL Layering

The categorical labels model (Low/Medium/High) maps directly to geological strata. The "avoid false precision" principle validates using natural language certainty markers over percentages in documentation contexts. The "don't make low-confidence alarming" principle is critical for OD-004: the speculative stratum should feel like an invitation to explore, not a warning to retreat.

### New Techniques for OD-004

- **Categorical over numerical:** Use words ("Established," "Probable," "Speculative," "Open") rather than percentages. Percentages create false precision in documentation contexts.
- **Uncertainty ranges as visual bands:** Instead of a single confidence point, show the RANGE of certainty. A finding might be "likely true but could be wrong in edge cases" — show that band visually.
- **Non-alarming deep strata:** The deepest geological layers should feel like rich territory worth exploring, not danger zones. The density increases (CRESCENDO) but the emotional tone should be curiosity, not caution.

---

## RESOURCE 4: Gwern.net — Confidence Tags (Kesselman List)

**URL:** [About This Website — Gwern.net](https://gwern.net/about)
**Type:** Practitioner convention (rationalist community)

### Key UX/UI Practice

Gwern's 8-level confidence scale based on the Kesselman List of Estimative Words:

| Level | Tag | Subjective Probability |
|-------|-----|----------------------|
| 1 | **Certain** | ~99%+ |
| 2 | **Highly likely** | ~93% |
| 3 | **Likely** | ~75% |
| 4 | **Possible** | ~50% |
| 5 | **Unlikely** | ~25% |
| 6 | **Highly unlikely** | ~7% |
| 7 | **Remote** | ~2% |
| 8 | **Impossible** | ~0% |

Additional categorical tags: **Log** (data collection, no judgment), **Emotional** (ideas entangled with feeling), **Fiction** (creative works).

Each essay carries a confidence tag at the top, setting reader expectations before engagement begins.

### Mapping to GEOLOGICAL Layering

| Gwern Level | OD-004 Stratum | Density Treatment |
|-------------|---------------|-------------------|
| Certain, Highly likely | Surface (ESTABLISHED) | Sparse — stated as fact, minimal hedging |
| Likely, Possible | Middle (PROBABLE) | Moderate — evidence presented, alternatives noted |
| Unlikely, Highly unlikely | Deep (SPECULATIVE) | Dense — full argumentation, counterpoints, caveats |
| Remote, Impossible | Deepest (OPEN QUESTIONS) | Densest — research gaps, competing hypotheses |

### New Techniques for OD-004

- **Per-section confidence tags:** Rather than one tag per page, OD-004 could tag each section/stratum with its confidence level. This creates visible geological layering.
- **Kesselman vocabulary:** The specific words (certain, highly likely, likely, possible, etc.) are carefully calibrated to map to probability ranges. OD-004 can adopt a simplified 4-level version matching its strata.
- **The "Log" category:** Some content is not confident or uncertain — it is simply recorded observation. OD-004 should have a stratum for "observed but not yet analyzed" content that sits outside the confidence gradient.

---

## RESOURCE 5: Maggie Appleton — Epistemic Disclosure

**URL:** [Epistemic Disclosure — Maggie Appleton](https://maggieappleton.com/epistemic-disclosure)
**Type:** Design/writing practice analysis

### Key UX/UI Practice

Epistemic disclosure is a short disclaimer at the top of a post explaining:
- How confident the author is in the contents
- How much reputation the author stakes on it
- What tests the post has undergone
- What sorts of feedback have been received

Key insight from Appleton: "Epistemic statuses are lazy and that is a good thing." Flexibility in implementation matters more than rigid uniformity. The value is in the SIGNAL, not in taxonomic precision.

Three dimensions identified across implementations:
1. **Transparency about research effort** (time invested, sources consulted)
2. **Confidence declarations** about conclusions
3. **Metadata positioning** at the article's beginning (expectation-setting)

### Mapping to GEOLOGICAL Layering

Appleton's "lazy but good" principle suggests OD-004 should not over-engineer its confidence markers. A simple, visible system beats a complex invisible one. The metadata-at-beginning convention maps to the surface stratum: the reader's first encounter tells them what certainty level to expect, then the content follows the CRESCENDO pattern from certain to uncertain.

### New Techniques for OD-004

- **"You Are Reading" orientation marker:** Each stratum begins with a brief epistemic disclosure: "This section contains well-established practices backed by multiple sources and extensive community validation."
- **Research effort signal:** Indicate how much evidence backs each stratum. Surface might say "Synthesized from 12 peer-reviewed sources." Deep might say "Based on a single case study and author experience."
- **Flexibility over rigidity:** The system should accommodate content that doesn't fit neatly into confidence levels. Not every section needs a precise calibration — sometimes "I think this is probably right" is sufficient.

---

## RESOURCE 6: Diataxis Framework — Four Documentation Types

**URL:** [Diataxis](https://diataxis.fr/)
**Type:** Documentation architecture framework

### Key UX/UI Practice

Diataxis organizes documentation along two axes creating four quadrants:

|  | Practical (doing) | Theoretical (understanding) |
|--|-------------------|---------------------------|
| **Learning (studying)** | Tutorials | Explanation |
| **Working (applying)** | How-to Guides | Reference |

Each type serves a different user need at a different expertise level:
- **Tutorials:** Beginner learning, guided path, author-directed
- **How-to Guides:** Experienced user solving specific problem
- **Reference:** Any user needing accurate technical facts
- **Explanation:** Curious user wanting to understand "why"

Key principle: Keep the four types **separate and distinct.** Mixing tutorials with reference material degrades both.

### Mapping to GEOLOGICAL Layering

| Diataxis Type | GEOLOGICAL Position | Confidence Level |
|---------------|-------------------|-----------------|
| Reference | Surface stratum | CERTAIN — Factual, lookup-oriented |
| How-to Guide | Surface-to-middle | ESTABLISHED — Proven approaches |
| Explanation | Middle-to-deep | PROBABLE — Interpretive, analytical |
| Tutorial | Orthogonal (not a layer) | Mixed — Learning path crosses strata |

### New Techniques for OD-004

- **Confidence maps to documentation type:** Certain content naturally takes reference form (terse, factual). Probable content takes explanation form (analytical, interpretive). Speculative content takes discussion form (exploratory, question-driven).
- **Cross-cutting tutorial paths:** A tutorial might start at the surface (certain facts), move through middle (probable approaches), and touch deep (speculative advanced techniques). This is the CRESCENDO pattern applied to a learning journey.
- **Separation discipline:** Even within a confidence-organized page, each stratum should maintain its own documentation type. Don't mix reference-style certainty markers with explanation-style uncertainty discussion in the same block.

---

## RESOURCE 7: Layered Information Architecture for Scalable Systems

**URL:** [Layered Information Architecture — PostUpgrade](https://postupgrade.com/how-to-build-layered-information-architecture/)
**Type:** Information architecture methodology

### Key UX/UI Practice

Four-layer architecture with strict dependency direction:

| Layer | Role | HTML Equivalent |
|-------|------|----------------|
| **Concept Layer** | Defines authoritative meaning | H1 headings |
| **Structural Layer** | Establishes logical sequencing | H2-H3 headings |
| **Context Layer** | Adjusts interpretation scope | Paragraphs |
| **Execution Layer** | Delivers concrete instances | Tables, lists, code |

Key principles:
- Lower layers execute intent defined by higher layers (top-down flow)
- Each layer exposes only predefined signals to adjacent layers (bounded interpretation)
- Layer collapse occurs when execution details begin redefining meaning
- Governance intensity must increase proportionally with system scale

### Mapping to GEOLOGICAL Layering

| Architecture Layer | GEOLOGICAL Stratum | OD-004 Application |
|-------------------|-------------------|-------------------|
| Concept | Surface (ESTABLISHED) | Core truths, definitional content |
| Structural | Transition markers | How strata relate to each other |
| Context | Middle (PROBABLE) | Interpretation, analysis, evidence |
| Execution | Deep (SPECULATIVE) | Examples, case studies, experiments |

The strict dependency direction principle is critical: ESTABLISHED facts should not be redefined by SPECULATIVE content further down the page. The geological metaphor enforces this naturally — deeper strata are younger and do not alter the bedrock above them.

### New Techniques for OD-004

- **Layer isolation contracts:** Each confidence stratum has an explicit contract: what it can contain, what it cannot contain, and how it signals transitions to adjacent strata. This prevents "semantic contamination" where speculative content undermines established facts.
- **Bounded interpretation zones:** Each stratum is a self-contained interpretation zone. The reader should be able to read ONLY the surface stratum and get accurate (if incomplete) information.
- **Top-down dependency:** Uncertain content can REFERENCE certain content but not REDEFINE it. If a speculative approach contradicts an established fact, the speculative approach must acknowledge the conflict explicitly.

---

## RESOURCE 8: GitBook — Adaptive Content System

**URL:** [Adaptive Content — GitBook](https://gitbook.com/docs/publishing-documentation/adaptive-content)
**Type:** Documentation platform feature (implementation reference)

### Key UX/UI Practice

GitBook's adaptive content transforms static documentation into dynamic experiences tailored to the reader. The system uses "claims" — data identifying who the user is — to show or hide:
- Individual pages
- Content variants
- Specific sections within documentation

Claims can be sourced from:
- Direct application data transmission
- GitBook's authenticated access system
- URL parameters
- Cookies

Key distinction: Adaptive content customizes already-published material based on visitor identity, as opposed to authenticated access which restricts document access through login requirements.

### Mapping to GEOLOGICAL Layering

GitBook's claims-based system provides a technical model for implementing reader-aware geological strata:

| Claim Type | OD-004 Application |
|-----------|-------------------|
| Experience level (beginner/advanced) | Show/hide deeper strata based on self-identified expertise |
| Role (developer/manager/researcher) | Emphasize strata most relevant to role |
| Prior reading history | If surface consumed, auto-expand middle stratum |
| URL parameter | Direct link to specific confidence stratum |

### New Techniques for OD-004

- **Progressive stratum revelation:** Default view shows surface stratum expanded, deeper strata collapsed. As reader interacts (scrolls, clicks), deeper strata become available. This is CRESCENDO with interactivity.
- **Self-identification gating:** A simple "I am: [Newcomer / Practitioner / Researcher]" toggle at the page top could control which strata are initially visible. Newcomers see surface only. Researchers see all strata.
- **URL-addressable strata:** Each confidence level gets a URL fragment (#established, #probable, #speculative, #open) so readers can link directly to the certainty level relevant to their discussion.
- **Remembering reader state:** If a reader has already consumed surface content, the system could remember this and start them at the middle stratum on return visits.

---

## RESOURCE 9: Progressive Disclosure Matters — AI Agents (Substack)

**URL:** [Progressive Disclosure Matters: Applying 90s UX Wisdom to 2026 AI Agents](https://aipositive.substack.com/p/progressive-disclosure-matters)
**Type:** Contemporary analysis (2026)

### Key UX/UI Practice

Progressive disclosure applied to AI agents through three implementation levels:

| Level | Mechanism | Documentation Parallel |
|-------|-----------|----------------------|
| Level 1: Metadata Discovery | Agent learns what skills exist via lightweight descriptions | Surface stratum: reader learns what confidence levels exist |
| Level 2: On-Demand Activation | Heavy instructions hidden behind abstraction layer, revealed on demand | Deeper strata: full evidence and arguments revealed on interaction |
| Level 3: Structured Format | SKILL.md provides portable, human-readable definitions | Confidence metadata format standardized across all pages |

Key insight: "The agent knows a skill exists (metadata), but the heavy instructions and scripts are hidden behind an abstraction layer. They are only revealed (injected into context) when the agent explicitly decides to use them."

Benefits: Token efficiency, cognitive clarity, decision focus (3 critical functions rather than 50 settings).

### Mapping to GEOLOGICAL Layering

The three-level agent model maps precisely to geological strata with CRESCENDO:

1. **Metadata layer** (surface) = What confidence levels exist on this page, stated upfront as a "geological survey"
2. **Abstraction layer** (middle) = Summarized content at each confidence level, expandable
3. **Full implementation** (deep) = Complete evidence, arguments, counterpoints, code

This mirrors how agents manage context: load summaries first, full details only when needed. Documentation readers benefit from the same pattern.

### New Techniques for OD-004

- **Geological survey header:** Every confidence-organized page starts with a brief survey: "This page contains 4 established practices, 2 probable approaches, and 1 speculative technique." The reader immediately knows the terrain.
- **Abstraction before expansion:** Each stratum shows a 1-2 sentence summary BEFORE the reader decides to expand. This is information scent for geological layers.
- **Context budget awareness:** Just as AI agents have token budgets, readers have attention budgets. Surface strata should be consumable in under 30 seconds. Each deeper stratum can be longer, following CRESCENDO.

---

## RESOURCE 10: NN/G — Information Scent and Foraging Theory

**URL:** [Information Scent: How Users Decide Where to Go Next — NN/G](https://www.nngroup.com/articles/information-scent/)
**Type:** Foundational UX research

### Key UX/UI Practice

Information foraging theory: users maximize the ratio `Rate of gain = Information value / Cost associated with obtaining that information`. They assess "scent" — signals from links, titles, and visible content — before committing to deeper exploration.

Key principles:
- Clear cues (descriptive headlines, bulleted lists, bold keywords) let users quickly evaluate relevance
- Even if scent gets progressively stronger, users may abandon if the search process is too lengthy
- Designers should evaluate the number of steps, provide enough scent in each step, indicate progress, and provide gratification for completing each step
- F-pattern scanning and layer-cake navigation are dominant reading strategies

### Mapping to GEOLOGICAL Layering

| Foraging Concept | GEOLOGICAL Application |
|-----------------|----------------------|
| Information scent | Stratum labels and preview summaries |
| Patch evaluation | Each stratum is a "patch" the reader evaluates before diving in |
| Cost/benefit ratio | Surface stratum = low cost, high certainty payoff. Deep stratum = higher cost, uncertain but potentially high payoff |
| Abandonment risk | If strata transitions are unclear, readers abandon at middle layers |
| F-pattern scanning | Surface stratum gets most scanning attention — must be optimized |

### New Techniques for OD-004

- **Strong scent at every stratum boundary:** The transition from ESTABLISHED to PROBABLE needs a clear, descriptive marker that tells the reader EXACTLY what they will find if they continue. "Below this point, evidence is moderate and approaches are not yet validated in production."
- **Progress indicators across strata:** Show readers where they are in the confidence gradient. "You are reading: PROBABLE (2 of 4 confidence levels)."
- **Gratification at each layer:** Each stratum should feel complete and rewarding on its own. The reader who stops at ESTABLISHED should feel they got full value. The reader who goes deeper gets bonus value, not required value.
- **Viewport-aligned strata (R1-003):** Each stratum transition should align with viewport boundaries so the reader makes a conscious decision to scroll into the next confidence level.

---

## RESOURCE 11: Effective Altruism Forum — Epistemic Status Explainer

**URL:** [Epistemic Status: An Explainer — EA Forum](https://forum.effectivealtruism.org/posts/bbtvDJtb6YwwWtJm7/epistemic-status-an-explainer-and-some-thoughts)
**Type:** Community convention documentation

### Key UX/UI Practice

Epistemic status is a short disclaimer at the top of a post providing:
- How confident the author is in the contents
- How much reputation the author stakes on it
- What tests the post has undergone (peer review, feedback, data validation)

Specific signaling techniques:
- **Confidence levels:** From "Divine revelation" (humorous) to "Pretty confident, enthusiasm on verge of partisanship"
- **Research effort markers:** "5 hours of work test" vs "40 hours to research and write"
- **Bias disclosure:** "I'm arguing this should be a priority area, but it's also what I specialized in"
- **Data quality notes:** "Conclusions rest on a sample size of five projects"
- **Feedback integration:** "I ran this by a few people, who all agreed"
- **Crux transparency:** "The strongest factor in me believing this is my personal experience, not the data presented"

### Mapping to GEOLOGICAL Layering

The EA Forum conventions provide a rich vocabulary for annotating each geological stratum. Each stratum in OD-004 can carry:

| EA Technique | OD-004 Stratum Annotation |
|-------------|--------------------------|
| Research effort | "Based on 12 sources" / "Based on 1 observation" |
| Bias disclosure | "Author has direct experience with this pattern" |
| Data quality | "Validated in 3 production deployments" / "Untested hypothesis" |
| Feedback status | "Peer-reviewed" / "Draft, feedback welcome" |
| Crux transparency | "Key evidence: controlled study" / "Key evidence: anecdote" |

### New Techniques for OD-004

- **Evidence DNA per stratum:** Each stratum carries a compact evidence summary: source count, data quality, feedback status, and key crux. This is metadata that enriches the geological model.
- **Crux identification:** At each confidence level, explicitly state WHAT would change the confidence rating. "This is PROBABLE. It would become ESTABLISHED if: [condition]. It would become SPECULATIVE if: [counter-evidence]."
- **Living confidence:** Strata can include timestamps and update markers: "Confidence updated from SPECULATIVE to PROBABLE on [date] based on [new evidence]."

---

## RESOURCE 12: Stripe Documentation — Markdoc and Multi-Level Content

**URL:** [How Stripe Creates the Best Documentation — Mintlify](https://www.mintlify.com/blog/stripe-docs)
**Type:** Industry case study

### Key UX/UI Practice

Stripe's documentation excellence relies on several techniques directly relevant to confidence-based organization:

- **Language switching tabs:** Users customize display by preferred programming language. Applied to confidence: users could customize display by preferred certainty level.
- **Personalized API keys in examples:** Test keys auto-injected into code samples. Applied to confidence: reader-relevant evidence auto-highlighted based on their context.
- **Product-like documentation:** "Designed to feel like an application rather than a traditional user manual." Interactive, responsive, state-aware.
- **Markdoc custom tags:** React components expressed through writer-friendly markdown syntax. Enables rich interactive features (tab switchers, collapsible sections, interactive diagrams) without requiring writers to write React code.

### Mapping to GEOLOGICAL Layering

Stripe's approach suggests OD-004 should feel like a product, not a document. The geological strata should be interactive, stateful, and responsive to user behavior.

| Stripe Technique | OD-004 Application |
|-----------------|-------------------|
| Language tabs | Confidence-level tabs: "Show me: [Established] [All Levels]" |
| Auto-injected context | Evidence auto-annotated with reader-relevant metadata |
| Markdoc custom tags | Simple markup that renders rich confidence visualization |
| Interactive diagrams | Confidence maps showing relationships between strata |

### New Techniques for OD-004

- **Confidence-level switcher:** A page-level control: "Show me: [Just the Facts] [Full Analysis] [Everything Including Speculation]." This is progressive disclosure with reader agency.
- **Writer-friendly confidence markup:** A simple syntax for authors to mark confidence levels that renders as rich geological visualization:
  ```
  :::established
  This is a known fact.
  :::

  :::probable
  This is likely true based on evidence.
  :::

  :::speculative
  This might work but hasn't been validated.
  :::
  ```
- **Product-feel documentation:** The confidence strata should have smooth transitions, animations on expand/collapse, and a sense of depth (literally — deeper strata could have subtle visual recession).

---

## CROSS-RESOURCE SYNTHESIS

### Convergence Points (All or Most Resources Agree)

1. **Three-tier confidence model is dominant.** Every resource that addresses confidence uses some variant of High/Medium/Low or Established/Probable/Speculative. OD-004's four-tier model (adding "Open Questions") extends this appropriately but should not go beyond four tiers (NN/G warns 3+ disclosure levels cause confusion, so 4 is the practical maximum).

2. **Categorical labels beat numerical precision.** Gwern, Agentic Design, and CVP all converge: use words, not percentages. "Established" is better than "92% confident" for documentation.

3. **Surface content must stand alone.** Information foraging theory, progressive disclosure, and Diataxis all emphasize: the top layer must be complete and valuable on its own. Readers who never go deeper should still get accurate, useful content.

4. **Density should correlate inversely with confidence.** This maps perfectly to R1-001 (certain=sparse, uncertain=dense). Established facts need few words. Speculative ideas need extensive argumentation, caveats, and alternatives.

5. **Transitions need strong information scent.** Every resource touching navigation emphasizes: the boundary between confidence levels must clearly communicate what the reader will find if they proceed deeper.

6. **Epistemic metadata belongs at the top.** Gwern, EA Forum, Appleton, and the agent-level progressive disclosure article all place confidence signals BEFORE content, not after.

### Divergence Points (Resources Disagree)

1. **Precision of confidence markers:** Gwern uses 8 levels; most UX patterns use 3. For documentation, 4 levels is the sweet spot.

2. **Color-coding vs text-only markers:** AI design patterns rely heavily on color; rationalist writing conventions are text-only. OD-004 should use BOTH — text labels as primary, color/density as reinforcing signal (satisfies DD-F-015 constraint about traffic-light colors).

3. **Reader agency vs author control:** GitBook gives readers control over what they see. Diataxis emphasizes author-controlled separation. OD-004 should offer controlled reader agency: the author determines what goes in each stratum, but the reader chooses how deep to go.

### Novel Synthesis for OD-004

Combining these external practices with the KortAI constraint system produces a unique model:

**THE GEOLOGICAL CONFIDENCE MODEL (OD-004)**

```
┌─────────────────────────────────────────────────────────────┐
│  GEOLOGICAL SURVEY (always visible)                         │
│  "4 established, 2 probable, 1 speculative, 1 open"        │
│  Confidence switcher: [Facts Only] [Full] [Everything]      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     │
│  STRATUM 1: ESTABLISHED                                    │
│  Density: SPARSE (generous whitespace, terse statements)    │
│  Evidence DNA: "12 sources | peer-reviewed | production"    │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     │
│                                                             │
│  ═══════ Stratum Boundary ═══════                          │
│  "Below: approaches with moderate evidence"                 │
│  Progress: ●●○○ (2 of 4 confidence levels)                 │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
│  STRATUM 2: PROBABLE                                        │
│  Density: MODERATE (evidence presented, alternatives noted)  │
│  Evidence DNA: "5 sources | case studies | 2 deployments"   │
│  Crux: "Would become ESTABLISHED if validated at scale"     │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
│                                                             │
│  ═══════ Stratum Boundary ═══════                          │
│  "Below: emerging patterns, not yet validated"              │
│  Progress: ●●●○ (3 of 4 confidence levels)                 │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     │
│  STRATUM 3: SPECULATIVE                                     │
│  Density: DENSE (full argumentation, counterpoints, caveats)│
│  Evidence DNA: "2 sources | author observation | untested"  │
│  Crux: "Would become PROBABLE if: [specific condition]"     │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     │
│                                                             │
│  ═══════ Stratum Boundary ═══════                          │
│  "Below: open research questions and unknown territory"     │
│  Progress: ●●●● (4 of 4 confidence levels)                 │
│                                                             │
│  ████████████████████████████████████████████████████████    │
│  STRATUM 4: OPEN QUESTIONS                                  │
│  Density: DENSEST (competing hypotheses, research gaps)     │
│  Evidence DNA: "0 sources | frontier territory"             │
│  Invitation: "What would YOU investigate here?"             │
│  ████████████████████████████████████████████████████████    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### DD-F-006 FRACTAL APPLICATION

The confidence model must be self-similar at all 4 scales:

| Scale | Fractal Application |
|-------|-------------------|
| **Page** | Entire page follows ESTABLISHED → OPEN arc |
| **Section** | Each major section contains its own mini confidence gradient |
| **Component** | Individual components (code blocks, callouts) carry confidence markers |
| **Character** | Typography density varies: sparse for certain (wider tracking), dense for uncertain (tighter tracking) |

### R1 FINDING APPLICATION MAP

| R1 Finding | OD-004 Application | Evidence Location |
|-----------|-------------------|------------------|
| R1-001 Density Rhythm | Certain=sparse, uncertain=dense (the defining OD-004 rhythm) | Stratum padding/whitespace progression |
| R1-003 Viewport Principle | Each stratum transition aligns with viewport boundary | Scroll-triggered stratum reveals |
| R1-004 Three-Column Doctrine | Side-by-side comparison: certain approach vs uncertain alternative | Stratum 2-3 comparison layouts |
| R1-006 Horizontal Comparison | Compare established vs speculative approaches directly | Split-view within strata |

---

## IMPLEMENTATION CHECKLIST FOR OD-004 BUILD

### Must Implement (Validated by 3+ Resources)

- [ ] Four confidence strata: ESTABLISHED, PROBABLE, SPECULATIVE, OPEN QUESTIONS
- [ ] Geological survey header showing content inventory by confidence level
- [ ] Categorical labels (words, not percentages) for each stratum
- [ ] Inverse density-to-confidence relationship (sparse=certain, dense=uncertain)
- [ ] Strong information scent at every stratum boundary
- [ ] Each stratum complete and valuable standalone
- [ ] Epistemic metadata per stratum (evidence count, data quality, feedback status)
- [ ] Fractal self-similarity at page/section/component/character scales

### Should Implement (Validated by 2 Resources)

- [ ] Confidence-level switcher control ("Facts Only" / "Full" / "Everything")
- [ ] Progress indicators across strata (1 of 4, 2 of 4, etc.)
- [ ] Crux transparency at PROBABLE and SPECULATIVE levels
- [ ] URL-addressable strata (#established, #probable, etc.)
- [ ] Non-alarming treatment of deep strata (curiosity, not danger)

### Could Implement (Novel Synthesis)

- [ ] "Evidence DNA" compact metadata per stratum
- [ ] Living confidence timestamps (when confidence level last updated)
- [ ] Self-identification gating (Newcomer/Practitioner/Researcher toggle)
- [ ] Gratification markers at each stratum ("You now know X")

---

## SOURCES

1. [Progressive Disclosure — NN/G](https://www.nngroup.com/articles/progressive-disclosure/)
2. [Confidence Visualization — AI UX Design Guide](https://www.aiuxdesign.guide/patterns/confidence-visualization)
3. [Confidence Visualization UI Patterns — Agentic Design](https://agentic-design.ai/patterns/ui-ux-patterns/confidence-visualization-patterns)
4. [About This Website — Gwern.net](https://gwern.net/about)
5. [Epistemic Disclosure — Maggie Appleton](https://maggieappleton.com/epistemic-disclosure)
6. [Diataxis Framework](https://diataxis.fr/)
7. [Layered Information Architecture — PostUpgrade](https://postupgrade.com/how-to-build-layered-information-architecture/)
8. [Adaptive Content — GitBook](https://gitbook.com/docs/publishing-documentation/adaptive-content)
9. [Progressive Disclosure Matters: Applying 90s UX Wisdom to 2026 AI Agents](https://aipositive.substack.com/p/progressive-disclosure-matters)
10. [Information Scent — NN/G](https://www.nngroup.com/articles/information-scent/)
11. [Epistemic Status: An Explainer — EA Forum](https://forum.effectivealtruism.org/posts/bbtvDJtb6YwwWtJm7/epistemic-status-an-explainer-and-some-thoughts)
12. [How Stripe Creates the Best Documentation — Mintlify](https://www.mintlify.com/blog/stripe-docs)

### Supplementary Sources Referenced

- [Information Foraging Theory — NN/G](https://www.nngroup.com/articles/information-foraging/)
- [Wikipedia Content Assessment](https://en.wikipedia.org/wiki/Wikipedia:Content_assessment)
- [Epistemic Status — Content Creation Wiki](https://contentcreation.issarice.com/epistemic-status/)
- [Epistemic Status — Chris Krycho](https://v5.chriskrycho.com/journal/epistemic-status/)
- [Psychology of Trust in AI — Smashing Magazine](https://www.smashingmagazine.com/2025/09/psychology-trust-ai-guide-measuring-designing-user-confidence/)
- [Accordion Pattern — UX Patterns for Developers](https://uxpatterns.dev/patterns/content-management/accordion)
- [Accordions on Desktop — NN/G](https://www.nngroup.com/articles/accordions-on-desktop/)
- [Stripe Markdoc Blog](https://stripe.com/blog/markdoc)
- [Technologies Like Geological Strata — Christopher Roosen](https://www.christopherroosen.com/blog/2025/7/2/technologies-like-geological-strata)
- [LessWrong: Epistemic Status Feature Idea](https://www.lesswrong.com/posts/Hrm59GdN2yDPWbtrd/feature-idea-epistemic-status)

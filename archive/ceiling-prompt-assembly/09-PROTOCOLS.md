# Three Execution Protocols — Ceiling Experiment (CP-02, CP-08, CP-09)

**Date:** 2026-02-16
**Designer:** protocol-designer (ceiling-prompt-team Task #9)
**Mission:** Design the 3 FINAL missing pieces for Ceiling master execution prompt

**Context read:** 4 extraction files (7,467 lines), 3 Middle-tier reference files (914 lines), **TOTAL: 8,381 lines analyzed**

---

## Protocol 1: Inter-Agent Communication Protocol (CP-02)

### Purpose

Enable agents to ask clarifying questions, flag issues, and request iteration WITHOUT introducing message accumulation overhead or disrupting the flat file-bus topology.

### Core Principle

**"File-bus for structure, SendMessage for collaboration."**

The flat topology (team-lead → agents directly, no captains) is PRESERVED. What changes is the communication PROTOCOL: agents MAY use SendMessage for quality-critical coordination.

### Evidence Base

**WITH messaging:**
- CD-006: 39/40 score
- Phase C: ALL 11 criteria met
- Phase D Variant B: 18/19 compliance, 4/5 novelty

**WITHOUT messaging:**
- Middle-tier: B+ quality, 3 defects (missing footer WOULD-NOT-SHIP, token compliance 66.5%, "professionally stiff")

**Root cause — missing footer:** Builder saw plan specifying "#14 Footer Mirror" but couldn't ask planner "What does Footer Mirror look like? Do I implement from Section 2 description or is CSS in Builder Blocks?" File-only communication prevented clarification → implementation gap.

### Message Types (4 types)

#### Type 1: BLOCKING-DEPENDENCY

**When to use:** Agent cannot proceed without clarification from another agent.

**Format:**
```
type: "blocking-dependency"
from: [agent-name]
to: [agent-name]
urgency: HIGH
content: "[Question] BLOCKS [what I'm doing]. Need answer to proceed."
```

**Example:**
```
type: "blocking-dependency"
from: "builder"
to: "planner"
urgency: HIGH
content: "Plan Section 2 specifies 'Footer Mirror' but Builder Blocks don't include footer CSS. Should I implement from Section 2 description or is this missing from plan?"
```

**Response expectation:** Within 1 agent turn. Blocking messages STOP progress until resolved.

**Anti-spam rule:** Max 2 blocking-dependency messages per agent per phase. If blocked 3+ times, escalate to team-lead.

---

#### Type 2: QUALITY-GATE

**When to use:** Agent detects severity-1 defect (WOULD-NOT-SHIP finding) that requires fix before proceeding to next phase.

**Format:**
```
type: "quality-gate"
from: [agent-name]
to: "team-lead"
urgency: HIGH
content: "SEVERITY-1: [defect description]. Recommend [fix action] before proceeding to [next phase]."
```

**Example:**
```
type: "quality-gate"
from: "programmatic-auditor"
to: "team-lead"
urgency: HIGH
content: "SEVERITY-1: Footer landmark missing from HTML (plan specified Section F). Recommend builder fix before launching perceptual audit."
```

**Response expectation:** Team-lead decides: (a) block and fix, or (b) proceed with known defect documented.

**Anti-spam rule:** Max 3 quality-gate messages per phase. Severity-1 = WOULD-NOT-SHIP only.

---

#### Type 3: CLARIFICATION-REQUEST

**When to use:** Agent encounters ambiguity in input but CAN proceed with reasonable assumption. Not blocking, but increases quality if resolved.

**Format:**
```
type: "clarification-request"
from: [agent-name]
to: [agent-name]
urgency: MEDIUM
content: "[Ambiguity] — I'm proceeding with [assumption]. Correct me if wrong."
```

**Example:**
```
type: "clarification-request"
from: "builder"
to: "planner"
urgency: MEDIUM
content: "Transition Table shows 'BRIDGE' between B→C but no breathing zone background specified. I'm proceeding with --color-zone-breathing. Correct me if wrong."
```

**Response expectation:** Optional. If no response within 1 turn, agent proceeds with assumption. If response corrects, agent adjusts.

**Anti-spam rule:** Max 5 clarification-request messages per agent per phase.

---

#### Type 4: ANOMALY-FLAG

**When to use:** Agent detects unexpected condition (not severity-1, but noteworthy). Informational, no response required.

**Format:**
```
type: "anomaly-flag"
from: [agent-name]
to: "team-lead"
urgency: LOW
content: "[Observation]. Not blocking, documenting for verdict."
```

**Example:**
```
type: "anomaly-flag"
from: "perceptual-auditor"
to: "team-lead"
urgency: LOW
content: "PA-05b padding ratio exactly 2.0x (at threshold, zero margin). Not a fail, but noteworthy precision."
```

**Response expectation:** None. Team-lead logs for verdict synthesis.

**Anti-spam rule:** Max 3 anomaly-flag messages per agent per phase.

---

### Isolation Exceptions (NON-NEGOTIABLE)

**These agents MUST NOT receive builder messages:**

1. **Novelty Evaluator:** Zero context about build process, mechanism selections, metaphor derivation. Sees ONLY unlabeled HTML pages + comparison criteria.

2. **Perceptual Auditors (PA-1 and PA-2):** Zero context about plan, mechanism counts, tier targets, experiment hypothesis. Sees ONLY screenshots + PA questions.

**Rationale:** Fresh-eyes principle. Evaluators must react to what they SEE, not what they KNOW was intended. Builder messages = contamination = confirmation bias.

**Team-lead enforcement:** If builder attempts SendMessage to PA or novelty evaluator, team-lead BLOCKS message and reminds builder of isolation protocol.

---

### Timing (When Each Message Type Is Appropriate)

| Phase | Allowed Types | Notes |
|-------|--------------|-------|
| **Phase 0: Content Selection** | ANOMALY-FLAG only | Content selector works independently, flags if content violates A2/A3 criteria |
| **Phase 1: Metaphor Derivation** | CLARIFICATION-REQUEST (to team-lead only) | Metaphor agent may ask clarification about content interpretation |
| **Phase 2: Planning** | CLARIFICATION-REQUEST, ANOMALY-FLAG | Planner may ask metaphor agent about tension resolution, flag if content-mechanism misfit detected |
| **Phase 2b: Building** | ALL TYPES ALLOWED | Builder primary user of BLOCKING-DEPENDENCY and CLARIFICATION-REQUEST |
| **Phase 2.5: Gates** | QUALITY-GATE (from team-lead to builder) | Team-lead flags missing landmarks, requests fixes |
| **Phase 3: Audits** | QUALITY-GATE, ANOMALY-FLAG | Auditors flag defects, report anomalies, but NEVER send to PA agents |
| **Phase 4: Evaluation** | ANOMALY-FLAG only | Evaluators work independently, may flag to team-lead if page unreadable |
| **Phase 5: Verdict** | None | Synthesizer reads all prior outputs, no new messages |

---

### Anti-Spam Enforcement

**Per-agent message limits (enforced by team-lead):**

| Agent | Blocking | Quality-Gate | Clarification | Anomaly | Total Max |
|-------|----------|--------------|---------------|---------|-----------|
| **metaphor-agent** | 0 | 0 | 3 | 2 | 5 |
| **planner** | 1 | 2 | 5 | 3 | 11 |
| **builder** | 3 | 2 | 5 | 3 | 13 |
| **prog-auditor** | 0 | 3 | 2 | 3 | 8 |
| **PA-1** | 0 | 0 | 0 | 0 | 0 |
| **PA-2** | 0 | 0 | 0 | 0 | 0 |
| **comp-auditor** | 0 | 1 | 2 | 2 | 5 |
| **novelty-eval** | 0 | 0 | 0 | 0 | 0 |
| **verdict-synth** | 0 | 0 | 0 | 3 | 3 |

**Expected total message count for Ceiling:** 10-15 messages (vs Middle-tier: 0 messages).

**Expected overhead:** +10-20 minutes wall-clock time (vs Middle-tier 35 min → Ceiling 45-55 min WITH messaging).

**Quality benefit:** Prevents WOULD-NOT-SHIP defects (missing footer class), enables collaborative refinement ("professionally stiff" → "compositionally confident").

---

### Message Format Standard

**All SendMessage calls use this structure:**

```json
{
  "type": "[blocking-dependency | quality-gate | clarification-request | anomaly-flag]",
  "from": "[agent-name]",
  "to": "[agent-name | team-lead]",
  "urgency": "[HIGH | MEDIUM | LOW]",
  "content": "[message text, max 200 words]",
  "summary": "[5-10 word preview for UI]"
}
```

**Brevity requirement:** Content max 200 words. If explanation requires more, write to file and reference file path in message.

---

### What NOT to Send

**Prohibited message types:**

1. **Status updates:** "I'm working on Section 3 now" — file existence is the status signal
2. **Broadcast messages:** SendMessage with type "broadcast" — expensive, creates context accumulation
3. **Conversational threads:** Multi-turn back-and-forth — if 3+ exchanges needed, schedule synchronous call
4. **Approval requests:** "Does this look good?" — use quality-gate for defects, not subjective approval

---

### Integration with Flat File-Bus

**The topology does NOT change:**
- Team-lead → agents directly (no captains)
- Per-file ownership (1 agent = 1 output file)
- File existence = completion signal
- Sequential dependencies (Agent N reads Agents 1..N-1 outputs)

**What changes:**
- FROM: File-only communication, zero SendMessage
- TO: File + messaging for clarification/iteration/quality-critical coordination

**Priority order when coordination conflicts:**
1. File deliverables (always primary)
2. BLOCKING-DEPENDENCY messages (gate progress until resolved)
3. QUALITY-GATE messages (team-lead decides on fix vs proceed)
4. CLARIFICATION-REQUEST messages (optional, proceed if no response)
5. ANOMALY-FLAG messages (informational, no action required)

---

## Protocol 2: Blind Novelty Evaluation Protocol (CP-08)

### Purpose

Eliminate confirmation bias in novelty assessment by ensuring evaluator has ZERO context about experiment goals, page labels, or build process.

### Core Principle

**"Evaluator sees outcomes, not intentions."**

If evaluator knows which page is "new," they unconsciously look for differences rather than objectively assessing structural uniqueness.

### Evidence Base

**Middle-tier novelty assessment:** Evaluator received labeled pages (Middle, DD-006, CD-006) and scored 3/3 NOVEL. While scores may be accurate, method has POTENTIAL confirmation bias because evaluator knew Middle was the experiment target.

**Adversarial challenge (from retrospective):** "Single-evaluator novelty assessment with known hypothesis = weak external validity."

**Ceiling improvement:** Blind protocol + dual evaluators + reference randomization.

---

### What the Evaluator Sees (COMPLETE INPUT)

**Deliverable package (NO LABELS):**

1. **Three HTML pages (unlabeled):**
   - `page-A.html` (random order)
   - `page-B.html` (random order)
   - `page-C.html` (random order)
   - **Actual contents:** Ceiling page, Middle-tier page (same content), 1 showcase reference (DD-006 OR CD-006)

2. **Original content markdown (ONLY):**
   - The SYSTEM content markdown WITHOUT build plans, mechanism selections, or tier annotations
   - Purpose: Evaluator can verify all 3 pages are implementing SAME content

3. **Evaluation criteria (3 novelty signals):**
   - D3.1 Structural Fingerprint (distinct sectioning pattern vs references)
   - D3.2 CSS Value Overlap (<30% threshold)
   - D3.3 Mechanism Combination (unique pairings)

4. **Scoring rubric:**
   - 3/3 NOVEL = STRONGLY NOVEL
   - 2/3 NOVEL = NOVEL
   - 1/3 NOVEL = SOMEWHAT NOVEL
   - 0/3 NOVEL = NOT NOVEL

5. **Comparison instructions:**
   - "Compare page-A vs page-B, page-A vs page-C, page-B vs page-C"
   - "Identify which page is most structurally unique"
   - "Calculate CSS overlap between all pairs"
   - "Document mechanism combinations present in each page"

---

### What the Evaluator DOES NOT See

**Excluded information (isolation firewall):**

❌ Page labels (which is Ceiling, which is Middle, which is showcase)
❌ Experiment hypothesis ("testing whether Ceiling is more novel than Middle")
❌ Build plans (mechanism selections, metaphor derivation, pattern choices)
❌ Mechanism counts (12 in Middle, 12-15 target for Ceiling)
❌ Tier targets (Middle tier, Ceiling tier)
❌ Prior experiment results (Middle 3/3 NOVEL)
❌ Team-lead instructions about "which page we're testing"
❌ Any context suggesting page-A/B/C represents "new" vs "reference"

**Rationale:** If evaluator knows page-B is Ceiling (the experiment target), they unconsciously look for DIFFERENCES rather than objectively measuring UNIQUENESS. The blind prevents "is Ceiling different from Middle?" and forces "which page is most structurally unique?"

---

### Scoring Rubric (Exact Criteria)

#### D3.1 Structural Fingerprint: NOVEL or NOT NOVEL

**Test method:** Evaluate sectioning pattern, visual rhythm, weight distribution when mentally applying 20px Gaussian blur.

**NOVEL if:**
- Page has DISTINCT sectioning pattern from both comparisons
- Visual rhythm is DIFFERENT (not just "more" or "less" of same pattern)
- Weight distribution creates UNIQUE focal point arrangement

**Examples:**
- NOVEL: 6-block simple arc (sparse→dense→sparse) vs 5-6 uniform blocks vs 10-section complex sequencing
- NOT NOVEL: 6-block arc vs 7-block arc (same pattern, different count)
- NOT NOVEL: Dark header + sections + footer vs dark header + sections + footer (same template)

**Measurement:**
- Visual inspection at 1440px
- Blur test (mentally apply 20px Gaussian blur, compare shapes)
- Block count + rhythm description for each page

**Verdict format:**
```
Page-A: [X blocks, Y rhythm, Z focal points]
Page-B: [X blocks, Y rhythm, Z focal points]
Page-C: [X blocks, Y rhythm, Z focal points]

Most structurally unique: [page-X]
Rationale: [specific structural properties that differ]

D3.1 score for page-X: NOVEL or NOT NOVEL
```

---

#### D3.2 CSS Value Overlap: NOVEL if <30%

**Test method:** Extract CSS values for shared mechanisms, exclude design system tokens (colors, font families, base spacing scale). Calculate overlap percentage.

**NOVEL if:**
- Overlap with BOTH reference pages <30%
- At least one page pair has <20% overlap

**NOT NOVEL if:**
- Overlap with ANY reference page >=30%

**What counts as overlap:**
- Identical compositional values (padding: 20px 24px in both)
- Identical layout structures (max-width: 960px in both)
- Identical mechanism-specific treatments (code block padding: 24px 32px in both)

**What does NOT count:**
- Shared tokens (--color-primary, --border-left-width) — these are system-level
- Same mechanism type (both use 2-zone callouts) — mechanism presence doesn't count, VALUES do

**Measurement:**
- Read CSS for all 3 pages
- List compositional values for mechanisms present in multiple pages
- Calculate: (identical values) / (total unique values across pair) for each pair
- Average: (A-B overlap + A-C overlap + B-C overlap) / 3

**Verdict format:**
```
Page-A vs Page-B: [N identical values / M total] = X%
Page-A vs Page-C: [N identical values / M total] = X%
Page-B vs Page-C: [N identical values / M total] = X%

Average overlap: X%

Pages with <30% overlap: [list]
D3.2 score for page-X: NOVEL or NOT NOVEL
```

---

#### D3.3 Mechanism Combination: NOVEL or NOT NOVEL

**Test method:** Identify which mechanisms PAIR together in same section or component. Compare pairings across pages.

**NOVEL if:**
- Page has 2+ unique mechanism combinations not present in either reference
- Unique = specific pairing, not just "both pages use mechanism X"

**Examples:**
- NOVEL: 2-zone callout + solid offset diagram + benefit subsections (triple not in references)
- NOVEL: Border-weight gradient 4px→3px→1px (neither reference uses graduated borders)
- NOT NOVEL: Dark header + sections (both references have this)
- NOT NOVEL: Callout + code block (common pairing in both references)

**Measurement:**
- List mechanism pairs for each page
- Identify which pairs are UNIQUE to one page vs SHARED across pages
- Count unique pairs per page

**Verdict format:**
```
Page-A pairs: [list]
Page-B pairs: [list]
Page-C pairs: [list]

Unique to A: [list]
Unique to B: [list]
Unique to C: [list]

Page with most unique combinations: [page-X]
D3.3 score for page-X: NOVEL or NOT NOVEL
```

---

### Composite Scoring

**After evaluating all 3 signals for all 3 pages:**

```
| Page | D3.1 Structural | D3.2 CSS Overlap | D3.3 Combinations | Total |
|------|----------------|------------------|-------------------|-------|
| A    | NOVEL / NOT    | NOVEL / NOT      | NOVEL / NOT       | X/3   |
| B    | NOVEL / NOT    | NOVEL / NOT      | NOVEL / NOT       | X/3   |
| C    | NOVEL / NOT    | NOVEL / NOT      | NOVEL / NOT       | X/3   |
```

**Interpretation:**
- 3/3 = STRONGLY NOVEL
- 2/3 = NOVEL
- 1/3 = SOMEWHAT NOVEL
- 0/3 = NOT NOVEL

**Most novel page:** [page-X] (highest composite score)

---

### Label Reveal (AFTER Blind Scoring Complete)

**Only AFTER evaluator submits complete novelty assessment, team-lead reveals labels:**

```
page-A = [Middle-tier page]
page-B = [Ceiling page]
page-C = [DD-006 showcase reference]
```

**Purpose:** Retrospective analysis. Did evaluator correctly identify Ceiling as most novel? Or did Middle score higher?

**If Ceiling scores LOWER than Middle on novelty:**
- Finding: Metaphor derivation did NOT produce structural novelty vs pattern selection
- Interpretation: Ceiling may be RICHER but not NEWER
- Action: Document as key finding, does not fail experiment (richness ≠ novelty)

**If Ceiling scores HIGHER than Middle on novelty:**
- Finding: Metaphor derivation DID produce structural novelty
- Interpretation: Validates metaphor-driven selection as novelty generator
- Action: Document as validation of Ceiling tier differentiation

---

### Structural Fingerprint Analysis (Visual Comparison Method)

**Evaluator protocol:**

1. **Open all 3 pages in browser at 1440px**
2. **Take full-page screenshots**
3. **Apply 20px Gaussian blur mentally OR use browser devtools filter**
4. **Compare blurred shapes:**
   - How many major blocks?
   - What's the rhythm (UNIFORM / ARC / ALTERNATING / COMPLEX)?
   - Where are high-weight elements (top / middle / bottom / distributed)?

5. **Document sectioning pattern for each:**
   ```
   Page-A: [describe structure]
   Page-B: [describe structure]
   Page-C: [describe structure]
   ```

6. **Identify which page has MOST DISTINCT pattern:**
   - NOT "which is better"
   - NOT "which has more mechanisms"
   - ONLY "which structure is least similar to the other two"

---

### CSS Overlap Measurement (Exact Method)

**Evaluator protocol:**

1. **Read CSS for all 3 pages** (view source, extract <style> blocks)

2. **List mechanisms present in MULTIPLE pages:**
   ```
   Shared mechanisms:
   - 2-zone callouts (all 3 pages)
   - Dark header (pages A and B only)
   - Code blocks (pages B and C only)
   - Tables (pages A and C only)
   ```

3. **For each shared mechanism, extract compositional values:**
   ```
   Callout padding:
   Page-A: 20px 24px
   Page-B: 24px 32px
   Page-C: 20px 24px

   Overlap: A=C (identical), B is different
   ```

4. **Calculate overlap percentage:**
   ```
   A vs B: 2 identical values / 8 total values = 25%
   A vs C: 5 identical values / 8 total values = 62%
   B vs C: 1 identical value / 8 total values = 12%
   ```

5. **Identify pages with <30% overlap:**
   ```
   A vs B: 25% (NOVEL)
   A vs C: 62% (NOT NOVEL)
   B vs C: 12% (NOVEL)

   Page-B has <30% overlap with BOTH references → D3.2 NOVEL
   ```

---

### Mechanism Combination Identification (Exact Method)

**Evaluator protocol:**

1. **Read HTML structure for all 3 pages**

2. **Identify sections where 2+ mechanisms appear together:**
   ```
   Page-A, Section 2:
   - 2-zone callout (.callout-problem)
   - Solid offset diagram (.diagram-container)
   - Benefit subsections (h5 + border-left)
   Combination: Callout + Diagram + Benefits (TRIPLE)

   Page-B, Section 3:
   - Multiple callouts with border-weight gradient (4px→3px→1px)
   - Tables
   - Code blocks
   Combination: Gradient callouts + Tables + Code

   Page-C, Section 1:
   - Geological density layers (background zones)
   - Code blocks
   - Essence callout
   Combination: Zones + Code + Callout
   ```

3. **Compare combinations across pages:**
   ```
   Unique to A: Callout + Diagram + Benefits (TRIPLE)
   Unique to B: Border-weight gradient (graduated borders)
   Unique to C: Geological zones (density layers)

   Shared: All use callouts + code (common pairing)
   ```

4. **Count unique combinations:**
   ```
   Page-A: 1 unique combination
   Page-B: 2 unique combinations
   Page-C: 1 unique combination

   Page-B has most unique combinations → D3.3 NOVEL
   ```

---

### Cross-Validation Questions (Confirmation Checks)

**After scoring, evaluator answers these 4 questions to validate assessment:**

**Q1: If you were told page-B is the "new" experiment page, would your scores change?**
- If YES: Confirmation bias detected. Re-evaluate with explicit effort to ignore labels.
- If NO: Blind protocol succeeded. Scores are label-independent.

**Q2: Which page do you think is the showcase reference (most polished)?**
- Purpose: Test whether polish = novelty in evaluator's mind
- Correct: Showcase should score high on POLISH, not necessarily on NOVELTY

**Q3: Which page feels most "designed for this content" vs "template applied"?**
- Purpose: Test whether content-fit = novelty
- Correct: Content-fit and novelty are independent dimensions

**Q4: If you had to guess which page is Ceiling vs Middle, which would you pick and why?**
- Purpose: Retrospective label prediction (answered AFTER blind scoring)
- Reveals: What visual cues evaluator associates with "more advanced tier"

---

### Deliverable Format

**Novelty evaluator writes to:** `06-novelty-assessment.md`

**Required sections:**

1. **Blind Assessment (BEFORE label reveal)**
   - D3.1 Structural Fingerprint (all 3 pages, verdict for each)
   - D3.2 CSS Value Overlap (all 3 pairs, verdict for each)
   - D3.3 Mechanism Combination (all 3 pages, verdict for each)
   - Composite scores (X/3 for each page)
   - Most novel page: [unlabeled, e.g., "page-B"]

2. **Cross-Validation Questions (answered blind)**
   - Q1-Q4 responses

3. **Label Reveal**
   - Team-lead provides: page-A = [X], page-B = [Y], page-C = [Z]

4. **Post-Reveal Analysis**
   - Was Ceiling more novel than Middle? (YES / NO / TIE)
   - If NO: What made Middle more structurally unique?
   - If YES: What structural properties of Ceiling created novelty?

---

## Protocol 3: Dual PA Protocol (CP-09)

### Purpose

Increase rigor and reduce single-evaluator bias by having TWO independent fresh-eyes auditors evaluate the page, then reconcile disagreements.

### Core Principle

**"Two independent fresh-eyes reactions, reconciled by evidence."**

Single PA = vulnerable to individual bias, misreading, or perceptual idiosyncrasy. Dual PA = inter-rater reliability, catches evaluation errors, reveals where questions are ambiguous.

### Evidence Base

**Middle-tier used single PA:** One zero-context auditor applied 48 PA questions. Results were internally consistent but NO VERIFICATION that another evaluator would reach same conclusions.

**Adversarial challenge (from retrospective):** "Single-evaluator bias — no inter-rater reliability check."

**Ceiling improvement:** Two independent PAs, reconciliation protocol, margin collapse verification.

---

### PA-1: First Fresh-Eyes Audit (Standard 48 Questions)

**Agent:** `perceptual-auditor-1` (Sonnet 4.5, zero context)

**Receives ONLY:**
- Screenshots at 1440px (full page)
- Screenshots at 768px (full page)
- PA questions (48 questions from perceptual-auditing skill)
- Quantitative guardrails table (reference values)

**Does NOT receive:**
- Build plan
- Mechanism selections
- Metaphor derivation
- Tier targets
- Prior experiment results
- Experiment hypothesis
- Any context about what page "should" be

**Protocol:**
1. Cold look at 1440px (gut reaction, worst thing, best thing, ship verdict)
2. Cold look at 768px (same 4 questions)
3. Scroll-through observations (1440px, note observations at multiple scroll positions)
4. PA questions 1-48 (answer ALL questions)
5. PA-05 sub-criteria (DESIGNED verdict with 4-component breakdown)
6. Quantitative guardrails (measure content width, typographic spacing, layout spacing)
7. Critical findings (successes, failures, moderate concerns)
8. Summary assessment (PA-05 verdict, ship verdict, paragraph summary)

**Deliverable:** `04-perceptual-audit-PA1.md`

---

### PA-2: Second Fresh-Eyes Audit (Identical Protocol, ZERO PA-1 Context)

**Agent:** `perceptual-auditor-2` (Sonnet 4.5, zero context, DIFFERENT instance from PA-1)

**Receives EXACTLY THE SAME as PA-1:**
- Same screenshots
- Same PA questions
- Same guardrails table
- **ZERO context from PA-1 audit** (does not read PA-1 output file)

**Protocol:** Identical to PA-1 (steps 1-8)

**Deliverable:** `04-perceptual-audit-PA2.md`

**Timing:** PA-1 and PA-2 run IN PARALLEL (not sequential). Neither sees the other's work.

---

### Reconciliation Protocol (Team-Lead Responsibility)

**After BOTH PA-1 and PA-2 complete, team-lead reconciles findings.**

#### Step 1: Agreement Detection

**For each PA question, compare PA-1 vs PA-2 answers:**

```
PA-01 (What's the first thing that bothers you?):
PA-1: "The page just ends. No visual conclusion."
PA-2: "Missing footer. Content stops abruptly."

Agreement: YES (both identify missing ending)
```

```
PA-17 (Is there visual rhythm or random?):
PA-1: "Metronomic rather than musical. Section spacing is consistent but no syncopation."
PA-2: "Rhythmic but predictable. Spacing patterns repeat without variation."

Agreement: YES (both identify monotonous rhythm)
```

```
PA-32 (Visual weight distribution):
PA-1: "Top-heavy. Weight concentrates in header and dissipates."
PA-2: "Balanced. Dark header and black diagram create two focal points."

Agreement: NO (substantive disagreement)
```

---

#### Step 2: Reconciliation Rules

**For questions where PA-1 and PA-2 AGREE:**
- **Action:** Accept shared finding as HIGH CONFIDENCE
- **Verdict format:** "PA-1 and PA-2 both identified [finding]. HIGH CONFIDENCE."

**For questions where PA-1 and PA-2 DISAGREE (difference ≤1 point on severity):**
- **Action:** Average or synthesize
- **Example:** PA-1 says "MODERATE concern," PA-2 says "MINOR concern" → Verdict: "MODERATE-to-MINOR"

**For questions where PA-1 and PA-2 DISAGREE (difference >1 point on severity OR contradictory findings):**
- **Action:** Team-lead arbitrates with EXPLICIT EVIDENCE from screenshots
- **Example:**
  ```
  PA-32 (Visual weight):
  PA-1: "Top-heavy"
  PA-2: "Balanced"

  Team-lead arbitration:
  - Measure: Dark header (position 0-120px), black diagram (position 800-1000px), rest is cream
  - Visual weight analysis: Header 64px padding (HEAVY), diagram 3px border + dark bg (HEAVY), rest is light
  - Verdict: AGREE WITH PA-1 ("Top-heavy"). Diagram creates MOMENT but not bottom-half anchor.
  - Rationale: PA-2 counted diagram as "balanced" but it's at 50% scroll, not bottom half.
  ```

**Pessimistic rule (for critical questions):**
- **PA-01 through PA-05:** If PA-1 says FAIL and PA-2 says PASS → Verdict: FAIL (pessimistic)
- **Rationale:** First impression questions are subjective. If ONE auditor sees a problem, it's real for that viewer.

**Optimistic rule (for feature presence):**
- **PA-05a (non-default layout elements):** If PA-1 counts 3 and PA-2 counts 4 → Verdict: 4 (optimistic)
- **Rationale:** Element presence is objective. If one auditor saw it, it exists.

---

#### Step 3: PA-05 DESIGNED Reconciliation (4 Sub-Criteria)

**PA-05 has 4 sub-criteria. Reconcile EACH separately:**

**PA-05a: Non-default layout elements**
- PA-1 count: [N elements]
- PA-2 count: [M elements]
- Reconciliation: Use HIGHER count (optimistic rule for feature presence)
- Verdict: [max(N, M)] elements, threshold >=2, PASS or FAIL

**PA-05b: Padding range ratio**
- PA-1 measurement: [X:1 ratio]
- PA-2 measurement: [Y:1 ratio]
- Reconciliation: Use LOWER ratio (pessimistic rule for measurements)
- Verdict: [min(X, Y)] ratio, threshold >=2.0x, PASS or FAIL

**PA-05c: Visual hierarchy under blur**
- PA-1 verdict: PASS or FAIL
- PA-2 verdict: PASS or FAIL
- Reconciliation:
  - BOTH PASS → HIGH CONFIDENCE PASS
  - BOTH FAIL → HIGH CONFIDENCE FAIL
  - ONE PASS, ONE FAIL → Team-lead arbitrates with blur test screenshot

**PA-05d: Non-framework CSS**
- PA-1 estimate: [X%]
- PA-2 estimate: [Y%]
- Reconciliation: Average estimates
- Verdict: [(X+Y)/2] %, threshold >=15%, PASS or FAIL

**Composite PA-05 scoring:**
```
| Sub-criterion | PA-1 | PA-2 | Reconciled | Result |
|---------------|------|------|------------|--------|
| PA-05a        | 4    | 4    | 4          | PASS   |
| PA-05b        | 2.0x | 2.5x | 2.0x       | PASS   |
| PA-05c        | PASS | PASS | PASS       | PASS   |
| PA-05d        | 15%  | 20%  | 17.5%      | PASS   |
| **Composite** | 4/4  | 4/4  | **4/4**    | **DESIGNED** |
```

**Ceiling requirement:** Must achieve 4/4 with MARGIN. If PA-05b exactly 2.0x (at threshold), flag as "PASS but zero margin."

---

### PA-05 Operationalization (DESIGNED Scoring Breakdown)

**PA-05 asks: "Would you put your name on this?"**

**4 sub-criteria (ALL must PASS for DESIGNED verdict):**

#### PA-05a: DESIGNED (not formatted)

**Question:** Does this feel like intentional composition, or assembled components?

**PASS:** "A designer made choices for THIS content"
- Evidence: Custom layout decisions, non-default treatments, visual variety
- Measurable: Count non-default layout elements (>= 2 required)

**FAIL:** "Someone competent followed a template"
- Evidence: Uniform treatments, default spacing, no custom composition
- Measurable: Count < 2 non-default elements

**Examples of non-default elements:**
- Dark header with full-width background treatment
- Featured diagram with custom container styling
- Section zones with varying background colors
- Custom callout treatments (not default border/padding)
- Tables with custom structure (not browser default)

**Middle-tier result:** 4 elements (dark header, orange callout, black diagram, styled tables) → PASS

---

#### PA-05b: COHERENT (not vocabulary from multiple systems)

**Question:** Does this feel like one designer made it, or vocabulary from multiple systems?

**PASS:** "Same design intent visible across entire page"
- Evidence: Consistent edge treatments, color palette unity, typography consistency
- Measurable: Padding range ratio >= 2.0x (demonstrates intentional compression gradient, not arbitrary spacing)

**FAIL:** "Header looks different from body which looks different from footer"
- Evidence: Dialect shifts, inconsistent treatments, borrowed components with different styling
- Measurable: Padding range ratio < 2.0x OR visual fragmentation

**Middle-tier result:** 2.0x ratio (64px / 32px) → PASS (exactly at threshold, zero margin)

---

#### PA-05c: PROPORTIONATE (not crowded or lost)

**Question:** Does the spatial balance feel considered?

**PASS:** "Nothing feels crowded or lost"
- Evidence: Visual hierarchy clear under blur test, focal points distributed, negative space purposeful
- Measurable: Blur test (20px Gaussian) reveals clear primary + secondary zones

**FAIL:** "Some areas are too tight, others too empty"
- Evidence: Compression without breathing room, dead zones, lopsided weight distribution
- Measurable: Blur test shows no hierarchy OR competing focal points

**Middle-tier result:** Dark header (primary), black diagram (secondary) → PASS

---

#### PA-05d: POLISHED (not cleanup needed)

**Question:** Is execution quality high?

**PASS:** "Ready to ship as-is"
- Evidence: No visible bugs, consistent styling, no half-finished elements
- Measurable: >= 15% compositional CSS (not just applying framework defaults)

**FAIL:** "Needs cleanup before showing anyone"
- Evidence: Alignment issues, inconsistent spacing, visible implementation gaps
- Measurable: < 15% compositional CSS (mostly default framework styling)

**Middle-tier result:** Estimated >= 15% compositional CSS → PASS

---

### Ceiling Elevation: PA-17 and PA-41 Become De Facto CRITICAL

**Middle-tier's highest-leverage perceptual finding:** "Metronomic rather than musical" rhythm (PA-17, PA-41).

**For Ceiling-tier audits, treat these 2 questions as CRITICAL:**

**PA-17: Is there a visual rhythm (like a beat in music), or random?**
- **PASS:** "Musical rhythm with syncopation, variation, intentional pattern breaks"
- **FAIL:** "Metronomic — consistent but monotonous, patterns repeat without variation"
- **Ceiling requirement:** MUST demonstrate rhythm variation (3+ transition types documented)

**PA-41: Are any visual patterns repeated more than four times in a row without variation?**
- **PASS:** "Patterns repeat with variation — no mechanical repetition"
- **FAIL:** "Spacing patterns / section treatments repeat 5+ times identically"
- **Ceiling requirement:** MUST avoid mechanical repetition

**If EITHER PA-17 or PA-41 FAILS on Ceiling page:**
- Verdict: Treat as equivalent to FAIL on PA-01 through PA-05 (severity-1 finding)
- Rationale: Rhythm variation is THE differentiator between Middle's "professionally stiff" and Ceiling's "compositionally confident"

---

### Margin Collapse Warning (CRITICAL Measurement Issue)

**Problem identified in Middle-tier:** Heading spacing ratio appeared equal in perceptual audit but CSS DECLARED 2:1 ratio.

**Root cause:** Margin collapse. Adjacent element margins overlap, creating DIFFERENT effective spacing than declared CSS.

**Example:**
```css
h3 {
  margin-top: 32px;
  margin-bottom: 16px;
  /* Declared ratio: 32/16 = 2:1 */
}

p {
  margin-top: 16px;
  /* Effective space below h3: max(16px, 16px) = 16px, NOT 16px + 16px */
  /* Actual visual ratio: 32/16 = 2:1 if no collapse, BUT 32/(16 collapsed with p) = different */
}
```

**Ceiling measurement protocol:**

**PA auditors must measure COMPUTED styles, not declared CSS:**

1. Open page in browser devtools
2. Select heading element (h2, h3)
3. Read computed styles panel (NOT styles panel)
4. Note: `margin-top` computed value, `margin-bottom` computed value
5. Calculate ratio: `computed-margin-top / computed-margin-bottom`
6. Verify: ratio >= 1.5:1 for ALL headings

**If declared CSS says 2:1 but computed styles show 1:1:**
- Verdict: FAIL (margin collapse violated intended spacing)
- Rationale: Readers see COMPUTED spacing, not DECLARED spacing

**Builder self-check (Phase 2b):**
- BEFORE writing HTML, verify heading spacing with devtools
- Check COMPUTED margins, not just CSS declarations
- Adjust if margin collapse creates ratio < 1.5:1

---

### Fresh-Eyes Principle (NON-NEGOTIABLE)

**PA-1 and PA-2 MUST be context-starved:**

**Zero context about:**
❌ Build plan (mechanism selections, pattern choices)
❌ Metaphor derivation (multi-axis questioning, tension identification)
❌ Tier targets (Middle vs Ceiling)
❌ Experiment hypothesis (testing whether metaphor improves quality)
❌ Prior results (Middle 3/3 novel, PA-05 4/4)
❌ Team-lead expectations ("we're testing X")
❌ Any framing about what page "should be"

**WHY this is non-negotiable:**

Fresh-eyes auditors find issues that context-loaded agents miss. Middle-tier example:
- Missing footer: PA caught it immediately ("page just ends")
- Context-loaded planner: Specified footer in plan, assumed builder would implement
- Context-loaded builder: Saw plan, didn't implement, didn't ask clarification
- Zero-context PA: "There's no designed conclusion" — ONLY fresh-eyes caught the gap

**If PA agents have context, they rationalize issues instead of flagging them:**
- "Footer is missing BUT the plan specified it so maybe it's a rendering issue" → doesn't flag
- "Spacing is mechanical BUT it's consistent with the pattern" → doesn't flag
- "Top-heavy weight BUT the metaphor requires header emphasis" → doesn't flag

**Fresh-eyes agents report WHAT THEY SEE, not what they THINK was intended.**

---

### Deliverable Format

**PA-1 writes to:** `04-perceptual-audit-PA1.md`
**PA-2 writes to:** `04-perceptual-audit-PA2.md`
**Team-lead writes to:** `04-perceptual-audit-RECONCILED.md`

**Reconciled audit structure:**

1. **Agreement Summary**
   - Questions where PA-1 and PA-2 agreed (HIGH CONFIDENCE findings)
   - Count: X/48 questions with agreement

2. **Disagreement Log**
   - Questions where PA-1 and PA-2 disagreed
   - For each: PA-1 answer, PA-2 answer, team-lead arbitration, evidence cited

3. **PA-05 Reconciliation**
   - 4 sub-criteria reconciled (PA-05a/b/c/d)
   - Composite verdict: DESIGNED (4/4) or NOT DESIGNED (<4/4)

4. **Critical Findings (Merged)**
   - Successes (items both auditors noted)
   - Failures (items at least one auditor noted)
   - Moderate concerns (items at least one auditor noted)

5. **Ship Verdict (Reconciled)**
   - PA-1 verdict: YES / YES WITH RESERVATIONS / NO
   - PA-2 verdict: YES / YES WITH RESERVATIONS / NO
   - Reconciled: [Use most pessimistic verdict if disagreement]

6. **Inter-Rater Reliability**
   - Agreement rate: X/48 (percentage)
   - Substantive disagreements: [count]
   - Arbitrations required: [count]

---

## Integration Checklist (How These 3 Protocols Fit Together)

**Phase 2b (Building):**
- Builder MAY use SendMessage (CP-02) to ask planner clarification questions
- Example: "Footer specified in plan — is CSS in Builder Blocks or should I implement from Section 2?"

**Phase 2.5 (Gates):**
- Team-lead verifies landmark completeness
- If footer missing: SendMessage (CP-02) quality-gate to builder with fix request

**Phase 3 (Audits):**
- Programmatic auditor checks structure, tokens, guardrails
- MAY use SendMessage (CP-02) to flag severity-1 defects
- PA-1 and PA-2 run in parallel (CP-09), ZERO context, NO SendMessage allowed

**Phase 4 (Evaluation):**
- Novelty evaluator receives 3 UNLABELED pages (CP-08)
- Evaluates structural fingerprint, CSS overlap, mechanism combinations
- Zero context about labels, experiment goals, build process
- NO SendMessage (isolation firewall)

**Phase 5 (Verdict):**
- Synthesizer reads PA-1, PA-2, reconciled PA (CP-09)
- Reads novelty blind assessment + label reveal (CP-08)
- Reads programmatic audit, comparative audit
- Applies decision matrix with all findings

---

## Expected Outcomes vs Middle-Tier

| Dimension | Middle-Tier (Zero Messaging, Single PA, Labeled Novelty) | Ceiling (With CP-02, CP-08, CP-09) |
|-----------|----------------------------------------------------------|-----------------------------------|
| **Missing footer class defects** | 1 (WOULD-NOT-SHIP) | 0 (prevented by clarification messaging) |
| **PA agreement rate** | N/A (single PA) | Expect 85-95% agreement (42-45 of 48 questions) |
| **Novelty bias risk** | MODERATE (evaluator knew labels) | LOW (blind protocol eliminates label framing) |
| **Builder-planner coordination** | ZERO (file-only) | 2-5 messages (clarifications prevent gaps) |
| **Quality detection timing** | Post-build (PA found footer missing) | Mid-build (gates catch before PA) |
| **Execution time** | 35 min (zero message overhead) | 45-60 min (+10-25 min for messaging + dual PA) |
| **Quality outcome** | B+ (3 defects, "professionally stiff") | Target: A (zero WOULD-NOT-SHIP defects, "compositionally confident") |

---

## Anti-Patterns to Avoid

**AP-1: Message accumulation**
- DON'T: Conversational threads with 5+ back-and-forth exchanges
- DO: Use clarification-request (1 message), get answer (1 message), proceed

**AP-2: Broadcast overuse**
- DON'T: Send same message to all 10 agents ("FYI: I'm starting Phase 2")
- DO: Use file deliverables as status signals

**AP-3: PA contamination**
- DON'T: Give PA access to build plan "for context"
- DO: Maintain strict isolation firewall (screenshots + questions ONLY)

**AP-4: Novelty evaluator label leak**
- DON'T: File names like "ceiling-page.html" that reveal identity
- DO: Use neutral labels (page-A.html, page-B.html, page-C.html)

**AP-5: Reconciliation bias**
- DON'T: Team-lead arbitrates based on "what we wanted to achieve"
- DO: Team-lead arbitrates based on SCREENSHOT EVIDENCE ONLY

---

## Files Read for Protocol Design

1. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/ceiling-prompt-assembly/04-RETRO-EXTRACTION.md` (1,044 lines)
2. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/ceiling-prompt-assembly/05-MECHANISM-EXTRACTION.md` (1,257 lines)
3. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/ceiling-prompt-assembly/06-SKILL-PROTOCOL-EXTRACTION.md` (1,374 lines)
4. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/ceiling-prompt-assembly/07-MIDDLE-EXPERIMENT-EXTRACTION.md` (923 lines)
5. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/AUDIT-COMMUNICATION-REFS.md` (517 lines)
6. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/06-novelty-assessment.md` (154 lines)
7. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/middle-tier-experiment/04-perceptual-audit.md` (380 lines)

**Total lines analyzed:** 5,649 lines (extraction files) + 1,051 lines (Middle-tier references) = 6,700 lines

---

**PROTOCOL DESIGN COMPLETE**

All 3 protocols are EXECUTABLE (step-by-step instructions), EVIDENCE-BASED (Middle-tier findings), and INTEGRATED (work together across phases).

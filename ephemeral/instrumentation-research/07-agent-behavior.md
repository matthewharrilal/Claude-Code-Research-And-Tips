# Instrumentation Dimension 7: Agent Behavior and Collaboration Analysis

**Author:** Agent Behavior Analyst (Opus)
**Date:** 2026-02-26
**Scope:** Instrumentation design for understanding multi-agent behavior patterns across pipeline v3+ runs.

---

## 0. Orientation

The pipeline deploys 17+ agents per run across 4 phases. Each agent produces structured artifacts. The core insight from this analysis: **almost everything we need to track agent behavior is already extractable from existing artifacts** — the problem is that nobody is extracting it. This report designs the extraction layer.

**Key constraint:** Agent behavior instrumentation must NOT add prompting overhead to agents during builds. All metrics should be computed POST-HOC from artifacts that already exist. The one exception: a small structured metadata block appended to each agent's output (Section 8).

**Data corpus analyzed for this design:**
- `p0-content-map.md` (Content Analyst output, ~70 lines)
- `p1-execution-brief.md` (Brief Assembler output, ~200 lines)
- `p2-yegge-gas-town.html` (Builder output, ~2000 lines)
- `p3a-gate-results.json` (Gate Runner output, ~60 lines structured JSON)
- `p3b-pa-auditor-{A-I}.md` (9 PA auditor reports, ~100-180 lines each)
- `p3b-integrative.md` (Integrative auditor report, ~150 lines)
- `p3c-weaver-diagnostic.md` (Weaver diagnostic, ~200 lines)
- `p3c-weaver-artistic.md` (Weaver artistic impression, ~40 lines)
- All `-refine` variants of the above (IMPROVE cycle artifacts)

---

## 1. Brief Fidelity Tracking

### 1.1 What to Measure

**BF-01: Zone Specification Fidelity**
Compare the brief's zone table (Tier 3 section) against the HTML output:
- Number of zones specified vs number of zones implemented
- Zone naming: do HTML class names / aria-labels match brief zone names?
- Background colors: exact hex match between brief specification and computed CSS

**BF-02: Multi-Coherence Specification Fidelity**
The brief specifies channel shifts at each boundary (e.g., "Z1 -> Z2: 4 channels shift" with specific values). Compare:
- Channel count specified vs channel count measured (from GR-50 gate results)
- Per-channel values: brief said `body 18px -> 16px`, builder used `body Xpx -> Ypx`
- Deviation direction: did builder add MORE channels or FEWER than spec?

**BF-03: Mechanism Suggestion Fidelity**
The brief's D-01 through D-09 sections contain specific CSS suggestions (e.g., `border-left: 4px solid var(--factory-accent)` in D-03). Track:
- Number of specific CSS values suggested in brief
- Number of those values present in output HTML
- Number of additional CSS techniques NOT in brief (builder's own contribution)

**BF-04: Spatial Specification Fidelity**
The brief specifies padding values per zone (e.g., "Z1: padding: 80px 0; Z3: padding: 48px 0"). Compare:
- Specified padding vs computed padding per zone
- Specified line-height per register vs computed line-height
- Specified font sizes vs computed font sizes

**BF-05: Component Suggestion Fidelity**
The brief suggests component types per zone (e.g., "pull-quotes and narrative callouts (Z1) give way to architecture diagrams and role tables (Z2)"). Track:
- Component types suggested per zone
- Component types actually used per zone
- Match rate: suggested-and-used / total-suggested

### 1.2 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| BF-01 Zone count | YES (brief + HTML parsing) | NO | LOW — parse HTML sections/aria-labels, compare to brief table |
| BF-01 Background hex | YES (brief hex table + gate-runner GR-11) | NO | LOW — GR-11 already reports zone colors |
| BF-02 Channel shifts | PARTIAL (brief has spec, GR-50 has aggregate) | YES — need per-boundary channel breakdown from gate runner | MEDIUM — extend GR-50 to report per-boundary |
| BF-03 CSS value match | YES (brief + HTML CSS) | NO | MEDIUM — regex extraction from brief, CSS parsing of output |
| BF-04 Spatial values | PARTIAL (brief has spec, need computed values) | YES — extend gate runner to report per-zone padding/spacing | MEDIUM — new gate function |
| BF-05 Components | PARTIAL (brief has suggestions, GR-46 has aggregate) | YES — need per-zone component breakdown | MEDIUM — extend GR-46 |

### 1.3 Implementation: Brief Fidelity Score

```javascript
// POST-HOC extraction script (runs after build, not during)
function computeBriefFidelity(briefPath, htmlPath, gateResultsPath) {
  const brief = parseBrief(briefPath);
  const html = parseHTML(htmlPath);
  const gates = JSON.parse(readFile(gateResultsPath));

  return {
    zoneCount: {
      specified: brief.zones.length,
      implemented: countHTMLZones(html),
      match: brief.zones.length === countHTMLZones(html)
    },
    backgroundHex: brief.zones.map((z, i) => ({
      zone: z.name,
      specified: z.background,
      implemented: gates.results.find(g => g.gate === 'GR-11')?.colors?.[i],
      exactMatch: z.background === gates.results.find(g => g.gate === 'GR-11')?.colors?.[i]
    })),
    // ... per metric
    overallFidelity: weightedScore // 0.0 to 1.0
  };
}
```

**Composite score:** `BF = 0.3*BF-01 + 0.2*BF-02 + 0.2*BF-03 + 0.15*BF-04 + 0.15*BF-05`

**Interpretation guide:**
- BF >= 0.9: Builder followed brief faithfully. If PA-05 is low, the brief was wrong.
- BF 0.6-0.9: Builder exercised creative authority. Check if deviations improved or degraded quality.
- BF < 0.6: Builder ignored the brief. Either the brief was unclear or the builder went rogue.

---

## 2. Information Propagation Chain

### 2.1 The Junction Model

The pipeline has 4 information junctions:

```
Source Content → [J1] → Content Map → [J2] → Execution Brief → [J3] → HTML → [J4] → PA Reports
```

At each junction, information is TRANSFORMED (abstracted, selected, compressed). Some information survives; some is lost. Tracking what survives is the propagation score.

### 2.2 What to Measure

**IP-01: Section Survival Rate**
- Content source has N sections
- Content Map lists sections (with zone assignments)
- Brief references sections (with register/density mappings)
- HTML implements sections
- **Score:** sections-in-HTML / sections-in-source

**IP-02: Theme Propagation**
The Content Map extracts "Content Tensions" (e.g., "Single Agent vs Colony"). These are the content's conceptual spine. Track:
- Number of tensions identified in Content Map
- Number of tensions referenced in Brief (check for tension keywords in Tier 3/4)
- Number of tensions visible in HTML (metaphor-related CSS classes, component choices, visual treatments that encode tension)
- **Score:** tensions-visible-in-HTML / tensions-in-Content-Map

**IP-03: Metaphor Propagation Depth**
The Content Map recommends a metaphor seed (e.g., "Factory/Refinery"). The Brief develops it into structural assignments (e.g., "Z3 = The Factory Floor"). The HTML implements it. Track:
- Metaphor mentioned in Content Map? [binary]
- Metaphor developed into zone mappings in Brief? [binary]
- Metaphor visible in HTML CSS custom properties? [binary]
- Metaphor visible in HTML class names? [count]
- Metaphor visible in HTML aria-labels? [count]
- Metaphor visible in zone backgrounds/transitions? [judgment — requires PA]
- **Score:** count of affirmative propagation checkpoints / total checkpoints

**IP-04: Reader Profile Propagation**
Content Map specifies a reader profile (expertise level, patience, goal, device). Track:
- Does the Brief reference the reader profile? [binary — search for keywords]
- Does the Brief adapt its specifications based on the profile? (e.g., EXPERT reader = denser defaults)
- Does the HTML reflect reader-appropriate density? (e.g., no baby steps for an EXPERT audience)
- **Score:** qualitative, assessed by PA auditors

**IP-05: Density Arc Propagation**
Content Map specifies a density arc (e.g., "Z1 LOW -> Z2 MODERATE -> Z3 HIGH -> Z4 HIGH -> Z5 LOW-MODERATE"). Track:
- Brief's per-zone density assignments match Content Map? [binary per zone]
- HTML's computed spacing/padding decreases in HIGH zones and increases in LOW zones? [measurable]
- PA auditors perceive the density arc? (check auditor D's flow/pacing report)
- **Score:** zones-matching-density-spec / total-zones

### 2.3 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| IP-01 Section survival | YES (source + content map + brief + HTML) | NO | LOW — section counting |
| IP-02 Theme propagation | PARTIAL (content map has themes, brief/HTML need keyword search) | NO — but accuracy improves with LLM judgment | MEDIUM — keyword matching gives false positives |
| IP-03 Metaphor depth | YES (all artifacts already contain metaphor references) | NO | LOW-MEDIUM — search for metaphor keywords across artifacts |
| IP-04 Reader profile | PARTIAL (content map has profile, brief may reference implicitly) | YES — add explicit reader profile section to brief template | LOW implementation, MEDIUM evaluation |
| IP-05 Density arc | PARTIAL (content map + brief have specs, need computed zone metrics) | YES — extend gate runner for per-zone spacing averages | MEDIUM |

### 2.4 Composite Propagation Score

```
PropagationScore = Π(IP-01..IP-05)
```

Using multiplication rather than average because loss at ANY junction reduces final quality multiplicatively. If sections survive but themes don't (IP-01=1.0, IP-02=0.0), the page has all the words but none of the meaning.

**Historical calibration (from Yegge Gas Town run):**
- IP-01: 13/13 sections in source, 13 in content map, 13 in brief, ~13 in HTML = 1.0
- IP-02: 4 tensions in content map. "Factory" tension visible in HTML (dark zone, industrial naming). "Philosophy vs Practice" visible (zone progression). Estimated: 2/4 = 0.5
- IP-03: "Factory/Refinery" → zone mappings → CSS custom properties (--factory-floor, --loading-dock, etc.) → 6 checkpoints of 6 = 1.0
- IP-04: Reader profile "EXPERT" in content map. Brief says "no apology, no on-ramp for tourists." HTML has no beginner content. Estimated: 1.0
- IP-05: LOW → MODERATE → HIGH → HIGH → LOW-MODERATE. PA auditors describe exactly this arc. Estimated: 0.9
- **Composite: 1.0 * 0.5 * 1.0 * 1.0 * 0.9 = 0.45** — theme propagation is the bottleneck

---

## 3. PA Auditor Behavior Patterns

### 3.1 What to Measure

**PA-01: Screenshot Reference Distribution**
For each auditor, count:
- Total screenshot filenames mentioned in their report
- Unique screenshot filenames mentioned
- Screenshot types: `cold-look` (1), `scroll-NN` (sequential viewports), `zone-element` (targeted captures)
- **Distribution metric:** Do auditors reference all available screenshots or cluster on a subset?

**PA-02: Question-Issue Correlation**
Map question assignments to finding severity:
- Auditor A (Impression + Emotion): questions PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67, PA-72, PA-76
- Track: how many CRITICAL/SEVERE/MODERATE issues does each auditor find?
- Hypothesis: auditors with PA-01 ("what bothers you first") find more CRITICAL issues because the question invites criticism; auditors with PA-16 ("pick two identical elements") find more MODERATE issues because the question invites nitpicking.

**PA-03: The 10th Man Effect**
For each finding in the weaver's synthesis:
- How many auditors flagged it? (convergence count)
- Was there a finding flagged by ONLY 1 auditor that turned out to be important?
- Track across runs: which auditor positions (A through I) produce the most unique-and-valuable findings?

**PA-04: Verbosity Patterns**
For each auditor report:
- Total word count
- Word count per question answered
- Correlation: does word count increase when auditor is critical (lower scores) or when impressed (higher scores)?
- Hypothesis: auditors write more when critical. Test: correlate per-question word count with per-question severity assessment.

**PA-05: Experiential Pass Quality**
Every auditor starts with "Step 1: Read Every Word from Pixels." Track:
- Does the auditor actually describe EVERY viewport screenshot? (count screenshots described vs total available)
- Does the auditor describe content in sequence (top-to-bottom) or jump around?
- Does the experiential pass surface findings that appear in the formal question answers?
- **Quality metric:** experiential-findings-that-reappear-in-answers / total-experiential-findings

**PA-06: Cross-Cycle Consistency**
When the same questions are asked in Cycle 0 and REFINE:
- Does the same auditor give the same answer for the same question on the same content? (consistency)
- When the HTML changes between cycles, does the auditor's assessment change proportionally? (sensitivity)
- Are there auditors whose assessments are stable regardless of actual changes? (insensitivity = problem)

### 3.2 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| PA-01 Screenshot refs | YES (text search for `.png` filenames in reports) | NO | LOW — regex `\d{4}-(scroll|cold|z\d).*\.png` |
| PA-02 Question-Issue | YES (reports have explicit severity markers) | NO | MEDIUM — need to parse severity from unstructured text |
| PA-03 10th Man | YES (weaver synthesis tracks auditor-per-finding) | NO | LOW — weaver already does this (see Section 0 table) |
| PA-04 Verbosity | YES (word count per section) | NO | LOW — split on `## PA-NN` headers, count words |
| PA-05 Experiential | YES (experiential pass section exists in every report) | NO | MEDIUM — need to count screenshot descriptions |
| PA-06 Cross-cycle | YES (compare Cycle 0 and REFINE reports for same auditor) | NO | MEDIUM — same-question comparison requires alignment |

### 3.3 Implementation: PA Behavior Dashboard

```javascript
function analyzeAuditorBehavior(auditorReports) {
  return auditorReports.map(report => ({
    auditor: report.auditorId,
    screenshotsMentioned: extractScreenshotRefs(report.text),
    screenshotsAvailable: totalScreenshotsInBuild,
    coverageRate: screenshotsMentioned.length / screenshotsAvailable,

    wordCount: countWords(report.text),
    wordsPerQuestion: report.questions.map(q => ({
      questionId: q.id,
      words: countWords(q.answerText),
      severity: parseSeverity(q.answerText) // PASS/CONDITIONAL/FAIL
    })),

    uniqueFindings: report.findings.filter(f =>
      f.convergenceCount === 1 // only this auditor flagged it
    ),

    experientialPassCompleteness: countDescribedScreenshots(report.experientialPass) / totalScreenshots
  }));
}
```

### 3.4 Cross-Run Auditor Leaderboard

After 5+ runs, compute per-auditor-position averages:

| Position | Avg Unique Findings | Avg Word Count | Avg Screenshot Coverage | Avg Severity |
|----------|-------------------|----------------|----------------------|--------------|
| A (Impression) | ? | ? | ? | ? |
| B (Readability) | ? | ? | ? | ? |
| ... | ... | ... | ... | ... |
| I (Adversarial) | ? | ? | ? | ? |

This reveals which auditor POSITION (question assignment) is most/least valuable. If position I consistently finds zero unique issues, those questions may need reassignment. If position A consistently finds the most critical issues, that position's question set is well-calibrated for surfacing problems.

---

## 4. Builder Creative Decision Archaeology

### 4.1 What to Measure

**BD-01: CSS Budget Allocation**
Parse the builder's CSS output and categorize every line:
- **Layout** (display, grid, flex, position, width, height, float): structural skeleton
- **Color** (background, color, border-color, accent, fill): chromatic layer
- **Typography** (font-family, font-size, font-weight, line-height, letter-spacing, text-transform): textual treatment
- **Spacing** (padding, margin, gap): whitespace management
- **Borders** (border, border-width, border-style, outline): structural articulation
- **Animation/Transition** (animation, transition, transform, opacity as animation): motion layer
- **Responsive** (@media, breakpoint-specific rules): adaptation layer
- **Component** (component-specific classes from components.css): library utilization

**Score:** percentage of CSS lines per category. Compare across runs.

**Historical insight:** The Flagship Experiment spent 22% of CSS on imperceptible micro-typography (letter-spacing 0.001-0.01em). CD-006 spent those lines on 11 components, 5 grids, 3 breakpoints. CSS budget allocation PREDICTS quality: builders who over-invest in invisible refinement under-invest in structural variety.

**BD-02: Component Library Utilization**
- Total classes available in components.css
- Total classes used in builder's HTML
- Utilization rate: classes-used / classes-available
- Novel classes: classes in HTML that are NOT in components.css (builder's own additions)

**Historical baseline:** GR-46 from the Yegge run reports "6 component types (callout:21, pull-quote:2, blockquote:7, table:7, details:6, comparison:3)." Compare this against the full components.css inventory.

**BD-03: Mechanism Catalog Coverage**
The mechanism catalog has 18 mechanisms. Track:
- Which mechanisms appear in the builder's output?
- How many mechanisms per zone?
- Does mechanism density correlate with zone density spec?
- **Score:** mechanisms-used / 18

**BD-04: Conviction Quality**
The builder writes a `<!-- CONVICTION: ... -->` HTML comment. Track:
- Length of conviction statement (words)
- Specificity: does it reference the content's metaphor, or is it generic?
- Does conviction mention specific design decisions and their rationale?
- **Correlation:** does conviction word count / specificity predict PA-05 score?

**BD-05: Self-Evaluation Accuracy**
The builder writes a `<!-- IMPROVEMENTS: ... -->` comment listing what they think could be better. Track:
- Number of self-identified improvements
- Number of improvements that PA auditors ALSO identified (overlap)
- Number of PA findings the builder did NOT self-identify (blind spots)
- **Accuracy score:** overlap / (overlap + PA-unique + builder-unique)

This is a powerful diagnostic. If builders are accurate self-evaluators, the pipeline could skip some PA auditors. If they have systematic blind spots (e.g., always miss spacing issues, always catch color issues), the PA question assignment can compensate.

### 4.2 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| BD-01 CSS budget | YES (parse CSS from HTML) | NO | MEDIUM — CSS categorization requires property-to-category mapping |
| BD-02 Component usage | YES (HTML class names + components.css) | NO | LOW — set intersection |
| BD-03 Mechanism coverage | PARTIAL (mechanisms are CSS patterns, not class names) | YES — need LLM to identify mechanism patterns in CSS | HIGH — mechanisms are semantic, not syntactic |
| BD-04 Conviction quality | YES (HTML comments) | NO | LOW — extract, count words, keyword search |
| BD-05 Self-eval accuracy | YES (HTML comments + PA reports) | NO | MEDIUM — need to align builder improvements with PA findings |

### 4.3 CSS Budget Analyzer

```javascript
function analyzeCSSBudget(cssText) {
  const categories = {
    layout: /display|grid|flex|position|width|height|min-width|max-width|float|overflow|z-index/,
    color: /background(?!-)|^color|border-color|accent-color|fill|opacity/,
    typography: /font-|line-height|letter-spacing|text-|word-/,
    spacing: /padding|margin|gap/,
    borders: /border(?!-color|-radius)|outline/,
    animation: /animation|transition|transform|@keyframes/,
    responsive: /@media/,
  };

  const lines = cssText.split('\n');
  const allocation = {};

  for (const [cat, pattern] of Object.entries(categories)) {
    allocation[cat] = lines.filter(l => pattern.test(l)).length;
  }

  const total = Object.values(allocation).reduce((a, b) => a + b, 0);

  return Object.fromEntries(
    Object.entries(allocation).map(([k, v]) => [k, {
      lines: v,
      percent: ((v / total) * 100).toFixed(1)
    }])
  );
}
```

**Healthy allocation profile (derived from CD-006 and successful Middle Tier builds):**
- Layout: 15-25%
- Color: 10-15%
- Typography: 15-20%
- Spacing: 15-20%
- Borders: 5-10%
- Animation: 3-8%
- Responsive: 10-15%

**Red flags:**
- Typography > 30%: probable sub-perceptual micro-refinement (Flagship failure mode)
- Layout < 10%: probable single-column flat layout (no grid variety)
- Responsive < 5%: probable 768px failure
- Animation > 15%: probable decoration-over-substance

---

## 5. Agent Attention Map

### 5.1 What to Measure

**AM-01: Builder Output Distribution**
The builder produces HTML + CSS in a single file. Measure:
- CSS lines per quality dimension (layout, color, typography, spacing, borders, animation, responsive) — this IS BD-01
- HTML structural elements per zone (headings, tables, code blocks, callouts, blockquotes, lists, grids)
- **Attention density:** elements-per-zone-pixel-height. Dense zones should have higher attention density.

**AM-02: Auditor Output Distribution**
Each auditor produces a report answering assigned questions. Measure:
- Word count per question (already captured in PA-04)
- Additionally: word count per SECTION of the page discussed. Do auditors write more about the opening (recency bias) or distribute evenly?
- **Zone attention:** extract which zones auditors reference most frequently. If 7/9 auditors spend 80% of their words on Zone 1 (the visible cream section) and 20% on Zone 3 (the dark factory floor), we know there is an attention bias.

**AM-03: Weaver Synthesis Distribution**
The weaver produces diagnostic + artistic reports. Measure:
- Words spent on convergent findings (things most auditors agree on) vs divergent findings (disagreements)
- Words spent on each PA-05 sub-criterion (DESIGNED, COHERENT, PROPORTIONATE, POLISHED)
- Ratio: weaver's fix priority order vs auditor consensus priority order

### 5.2 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| AM-01 Builder distribution | YES (HTML parsing) | NO | MEDIUM — zone identification requires section detection |
| AM-02 Auditor zone attention | YES (text search for zone/section references) | NO | MEDIUM — need to parse zone references from unstructured text |
| AM-03 Weaver distribution | YES (section word counts) | NO | LOW — split on headers, count words |

### 5.3 Implementation: Attention Heatmap

For each run, produce a grid:

```
             Zone 1    Zone 2    Zone 3    Zone 4    Zone 5
Builder CSS   120 lines  85 lines  250 lines  180 lines  95 lines
Auditor A     350 words  200 words  450 words  150 words  100 words
Auditor B     200 words  300 words  400 words  300 words  150 words
...
Weaver Diag   100 words  50 words   200 words  100 words  50 words
```

**Interpretation:**
- If builder CSS is concentrated in Zones 1-2 but sparse in Zones 3-5 → the builder ran out of creative energy (attention fatigue)
- If auditors concentrate words on zones the builder concentrated CSS → confirmation (they found what was built)
- If auditors concentrate words on zones the builder NEGLECTED → diagnostic (they found what was missing)

---

## 6. Weaver-Auditor Alignment

### 6.1 What to Measure

**WA-01: Agreement Rate**
For each finding the weaver synthesizes:
- Does the weaver's verdict match the majority auditor position?
- **Score:** weaver-matches-majority / total-findings

**WA-02: Override Tracking**
When the weaver DISAGREES with auditor consensus:
- What did the majority say? What did the weaver conclude?
- Was the weaver's override justified? (Can only be evaluated retroactively: if the fix cycle addressed the weaver's position, the weaver was right; if the fix cycle addressed the auditors' position, the auditors were right.)
- Track override DIRECTION: does the weaver override toward PASS (more lenient) or toward FAIL (more strict)?

**WA-03: Score Calibration**
The weaver assigns PA-05 sub-scores (DESIGNED, COHERENT, PROPORTIONATE, POLISHED). Cross-validate:
- Does the weaver's DESIGNED score match what auditor F (Consistency + Rhythm) assesses?
- Does the weaver's COHERENT score match what auditor G (Metaphor + Ideology) assesses?
- Does the weaver's PROPORTIONATE score match what auditors C (Spatial) and H (Responsiveness) assess?
- **Calibration delta:** |weaver score - relevant auditor score| per sub-criterion

### 6.2 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| WA-01 Agreement rate | YES (weaver report already tracks convergence counts) | NO | LOW — weaver Section 0 table has auditor-per-finding |
| WA-02 Overrides | YES (weaver explicitly states disagreements and resolutions) | NO | LOW — parse "Resolution:" sections |
| WA-03 Score calibration | YES (weaver PA-05 + auditor individual assessments) | NO | MEDIUM — need to extract sub-scores from auditor text |

### 6.3 Historical Data (Yegge Run, Cycle 0)

From the Cycle 0 weaver diagnostic:

| Finding | Weaver Position | Auditor Majority | Agreement? |
|---------|----------------|-----------------|------------|
| Dark zone invisible | CONFIRMED CRITICAL | 9/9 flagged | YES |
| 768px total failure | CONFIRMED CRITICAL | 9/9 flagged | YES |
| Abrupt cream-to-dark transition | CONFIRMED | 7/9 flagged | YES |
| No navigation on 22+ viewport page | CONFIRMED | 2/9 flagged | YES (weaver agreed with minority) |
| Footer/trailing dark void | POSSIBLE | 1/9 flagged | PARTIAL (weaver hedged) |

| PA-05 Sub-criterion | Weaver Score | Primary Auditor Score | Cross-Validator Score | Calibration |
|---------------------|-------------|----------------------|---------------------|-------------|
| DESIGNED | CONDITIONAL FAIL | FAIL (A) | CONDITIONAL PASS (F) | Weaver split the difference |
| COHERENT | CONDITIONAL PASS | FAIL (A) | CONDITIONAL PASS (G) | Weaver sided with cross-validator |
| PROPORTIONATE | FAIL | FAIL (A, C, H) | — | Full agreement |
| POLISHED | CONDITIONAL PASS | CONDITIONAL PASS (A, B) | — | Full agreement |

**Observation:** The weaver's override pattern is consistent — when primary auditor (A) and cross-validator disagree, the weaver synthesizes a middle position rather than siding with either. This is appropriate but should be tracked for whether the middle position is justified or just conflict avoidance.

---

## 7. Cross-Run Agent Learning (Prompt Improvement Tracking)

### 7.1 The Problem

Agents cannot learn between runs — each run spawns fresh agents. But PROMPTS can improve between runs. The question: do prompt improvements produce measurable agent behavior changes?

### 7.2 What to Measure

**CL-01: Prompt Diff Tracking**
For each agent role, track the prompt's evolution across runs:
- Lines added/removed/changed between runs (diff)
- Categories of changes: new rules, modified rules, removed rules, new examples, modified examples

**CL-02: Behavior Change Tracking**
For each prompt change, measure whether the corresponding agent behavior changed:
- If a new rule was added ("always verify zone backgrounds at each boundary"), did the next build's brief assembler add zone background verification?
- If a PA question was modified, did auditor responses change in structure or depth?
- **Score:** behavior-changes-matching-prompt-changes / total-prompt-changes

**CL-03: Regression Tracking**
Track whether prompt changes that fix one behavior break another:
- New rule: "builders must use >= 8 components." Builder uses 8 components but reduces CSS variety to meet the count.
- **Score:** regressions-per-prompt-change

**CL-04: Effective Prompt Surface Area**
Measure which parts of the prompt agents actually respond to:
- Add unique markers to each prompt section (e.g., "[RULE-14]")
- Count which markers appear in agent output (as citations or behavioral compliance)
- **Score:** sections-with-visible-response / total-sections

### 7.3 Extractability Assessment

| Metric | From Existing Artifacts? | New Agent Output Needed? | Difficulty |
|--------|------------------------|------------------------|------------|
| CL-01 Prompt diffs | YES (git diff of prompt files) | NO | LOW — standard diff |
| CL-02 Behavior changes | PARTIAL (need to compare agent outputs across runs) | NO — but needs cross-run database | MEDIUM-HIGH — requires baseline comparison |
| CL-03 Regressions | NO — requires longitudinal comparison | NO — but needs cross-run database | HIGH — causal attribution is hard |
| CL-04 Prompt surface area | NO | YES — need marker system in prompts | MEDIUM — low implementation, high prompt engineering |

### 7.4 Implementation: Prompt Evolution Log

Maintain a structured file per agent role:

```markdown
# Prompt Evolution: Brief Assembler

## Run 001 (2026-02-25, Yegge Gas Town)
- Prompt version: v3.1
- Key rules: BV-01 through BV-05, zone background locking, multi-coherence spec
- Behavior observed: 5 zones, all backgrounds correct, multi-coherence specified per boundary
- Issues: Z3->Z4 multi-coherence only 1 channel

## Run 002 (2026-02-28, [next content])
- Prompt version: v3.2
- Changes from v3.1: Added "multi-coherence minimum 3 channels at ALL boundaries" rule
- Behavior observed: [TBD]
- Did behavior change match prompt change? [TBD]
```

---

## 8. The Agent Metadata Block (The One New Requirement)

### 8.1 Rationale

Most metrics above are extractable from existing artifacts. But extraction is fragile — it relies on parsing unstructured text. A small structured metadata block at the end of each agent's output would make extraction reliable.

### 8.2 Specification

Add to each agent's prompt:

> **At the end of your output, append a metadata block in this exact format:**
>
> ```yaml
> ---
> agent_metadata:
>   role: [your role name]
>   files_read: [list of files you read, with line counts]
>   files_written: [list of files you wrote]
>   screenshots_examined: [list of screenshot filenames you looked at]
>   time_spent_description: [brief description of where you spent most effort]
>   confidence: [0.0-1.0, your confidence in your output]
>   key_decisions: [list of 3-5 key decisions you made and why]
> ```

### 8.3 Cost Assessment

- **Prompt overhead:** ~8 lines added to each agent prompt
- **Output overhead:** ~10-20 lines per agent (80-170 words)
- **Token cost per run:** 17 agents x ~200 tokens = ~3,400 tokens (~$0.05 at Opus pricing)
- **Extraction benefit:** Eliminates all text-parsing fragility for files_read, screenshots_examined, and key_decisions metrics

### 8.4 What This Enables

With the metadata block, every metric in Sections 1-7 becomes **trivially extractable** rather than requiring fuzzy text parsing:

- **BF metrics:** `files_read` shows which brief sections the builder accessed
- **PA metrics:** `screenshots_examined` gives exact screenshot coverage
- **BD metrics:** `key_decisions` captures the builder's creative rationale
- **CL metrics:** `confidence` tracks whether agents feel confident in their output (and whether confidence correlates with quality)

---

## 9. Composite Agent Behavior Dashboard

### 9.1 Per-Run Summary

After each run, produce:

```
=== AGENT BEHAVIOR SUMMARY: [build-slug] ===

BRIEF FIDELITY
  Zone Spec:        5/5 zones matched (100%)
  Background Hex:   5/5 exact match (100%)
  Multi-Coherence:  3/4 boundaries >= 3 channels (75%)
  Component Match:  6/8 suggested components used (75%)
  Overall BF:       0.87

INFORMATION PROPAGATION
  Section Survival:   13/13 (100%)
  Theme Propagation:  2/4 (50%)
  Metaphor Depth:     6/6 checkpoints (100%)
  Density Arc Match:  4/5 zones (80%)
  Overall IP:         0.40 (multiplicative)

PA AUDITOR PATTERNS
  Screenshot Coverage: A=65% B=80% C=45% D=70% E=55% F=60% G=50% H=75% I=40%
  Mean Word Count:     A=2100 B=1800 C=2400 D=1900 E=1500 F=1600 G=2000 H=1200 I=1100
  Unique Findings:     A=1 B=0 C=2 D=0 E=1 F=0 G=1 H=0 I=0

BUILDER CREATIVE DECISIONS
  CSS Budget: Layout 20% | Color 12% | Type 18% | Spacing 17% | Border 8% | Anim 5% | Responsive 12%
  Component Utilization: 6/26 (23%)
  Mechanism Coverage:    10/18 (56%)
  Conviction Words:      150 (SPECIFIC — references factory metaphor, zone structure)
  Self-Eval Accuracy:    3/5 PA findings anticipated (60%)

WEAVER-AUDITOR ALIGNMENT
  Agreement Rate:      4/5 findings (80%)
  Override Direction:   1 override toward PASS (lenient)
  Score Calibration:    |delta| = 0.25 average across sub-criteria
```

### 9.2 Cross-Run Trends (After 3+ Runs)

```
=== CROSS-RUN TRENDS ===

Brief Fidelity Trend:     Run 1: 0.87  Run 2: ?  Run 3: ?  [improving/stable/declining]
Theme Propagation Trend:  Run 1: 0.50  Run 2: ?  Run 3: ?  [improving/stable/declining]
PA Coverage Trend:        Run 1: 60%   Run 2: ?  Run 3: ?  [improving/stable/declining]
Component Utilization:    Run 1: 23%   Run 2: ?  Run 3: ?  [improving/stable/declining]

Prompt Changes Since Run 1:  [diff summary]
Correlated Behavior Changes: [list]
```

---

## 10. Implementation Priority

Ranked by information value per implementation effort:

| Priority | Metric Group | Effort | Value | Rationale |
|----------|-------------|--------|-------|-----------|
| 1 | Agent Metadata Block (Section 8) | LOW (8 prompt lines, YAML parsing) | VERY HIGH | Unlocks reliable extraction for all other metrics |
| 2 | PA Screenshot Coverage (PA-01) | LOW (regex on existing reports) | HIGH | Immediately reveals auditor attention gaps |
| 3 | CSS Budget Allocation (BD-01) | MEDIUM (CSS parsing) | HIGH | Directly predicts quality failures (Flagship lesson) |
| 4 | Brief Fidelity — Background Hex (BF-01) | LOW (brief + GR-11 comparison) | HIGH | Simple binary check, already partially in gate runner |
| 5 | Weaver-Auditor Agreement (WA-01) | LOW (parse weaver Section 0 table) | MEDIUM | Validates weaver synthesis quality |
| 6 | Auditor Verbosity (PA-04) | LOW (word count per section) | MEDIUM | Reveals attention patterns across auditors |
| 7 | Information Propagation — Sections (IP-01) | LOW (count sections across 4 artifacts) | MEDIUM | Baseline completeness check |
| 8 | Builder Self-Eval Accuracy (BD-05) | MEDIUM (align builder improvements with PA findings) | HIGH | If accurate, could reduce PA scope |
| 9 | Component Utilization (BD-02) | LOW (set intersection) | MEDIUM | Tracks library adoption over time |
| 10 | Information Propagation — Theme (IP-02) | HIGH (requires LLM judgment) | HIGH | The propagation bottleneck, but hard to measure |
| 11 | GR-50 Per-Boundary Extension | MEDIUM (gate runner modification) | HIGH | Needed for BF-02, currently only aggregate |
| 12 | Cross-Run Prompt Evolution (CL-01/02) | MEDIUM (needs cross-run storage) | HIGH over time | Value grows with N runs |
| 13 | Mechanism Coverage (BD-03) | HIGH (semantic CSS pattern matching) | MEDIUM | Interesting but hard to automate |
| 14 | Conviction-Quality Correlation (BD-04) | MEDIUM (need 5+ runs for significance) | LOW now, HIGH later | Insufficient data to calibrate |

---

## 11. Risks and Mitigations

**Risk 1: Instrumentation as overhead.**
Adding structured output requirements to agents could reduce their creative bandwidth. The metadata block is intentionally minimal (~10 lines) and placed at the END of output (not interrupting flow).
*Mitigation:* Make the metadata block optional for the first 2 runs. Compare output quality with and without the requirement.

**Risk 2: Goodhart's Law — optimizing for metrics, not quality.**
If builders learn that "component utilization rate" is tracked, they might use components superficially.
*Mitigation:* Never share instrumentation metrics with builder agents. These are POST-HOC diagnostics for the orchestrator/human, not agent incentives.

**Risk 3: False precision from text parsing.**
Counting screenshot references via regex might miss references that use slightly different naming or paraphrasing.
*Mitigation:* The Agent Metadata Block (Section 8) is the primary fix. Also, validate text-parsing accuracy on 3 historical runs before relying on it.

**Risk 4: Cross-run comparisons confounded by content differences.**
Run 1 used Yegge content (EXPERT reader, 5,270 words, HIGH heterogeneity). Run 2 might use beginner content (3,000 words, LOW heterogeneity). Agent behavior differences might be content-driven, not improvement-driven.
*Mitigation:* Track content properties (word count, heterogeneity, metaphor viability, reader expertise) as covariates. Only compare runs with similar content properties, or normalize metrics by content difficulty.

**Risk 5: Auditor behavior shaped by DPR/screenshot quality, not page quality.**
The Yegge run's dark zone invisibility was primarily a DPR 0.667 rendering artifact, not a genuine page failure. All 9 auditors reported the same artifact-driven finding. This inflates convergence metrics (9/9 agreement) while reducing meaningful design evaluation.
*Mitigation:* Track DPR and screenshot quality as environment variables. Flag runs where environment artifacts dominate findings. The REFINE cycle (which fixed the DPR issue and showed dramatically different auditor behavior) demonstrates this confound clearly.

---

## 12. Connection to Other Instrumentation Dimensions

This report intersects with:

- **Dimension 4 (Economics):** Agent behavior metrics enable per-agent cost attribution. If auditor C consistently writes 2x more than auditor I, we can measure cost/finding/auditor.
- **Dimension 5 (Quality Trajectory):** Brief fidelity + CSS budget allocation are LEADING indicators of quality; PA scores are LAGGING indicators. Together they model the quality trajectory.
- **Dimension 6 (Perceptual vs Programmatic):** Weaver-auditor alignment IS a specific case of perceptual-programmatic divergence (weaver = integrative perception, gates = programmatic measurement).
- **Dimension 8 (Cross-Run Trends):** Every metric in this report becomes a time-series when tracked across runs. The cross-run learning analysis (Section 7) is this dimension's direct interface with Dimension 8.

---

## 13. Summary of Recommendations

1. **Implement the Agent Metadata Block FIRST** (Section 8). It costs almost nothing and unlocks reliable extraction for every other metric.

2. **Start with 5 low-effort, high-value metrics:** PA Screenshot Coverage (PA-01), CSS Budget Allocation (BD-01), Background Hex Fidelity (BF-01), Weaver Agreement Rate (WA-01), and Auditor Verbosity (PA-04). These require only text parsing of existing artifacts.

3. **Extend GR-50 to per-boundary reporting** for Brief Fidelity multi-coherence tracking. This is a gate runner code change, not an agent change.

4. **Do NOT implement mechanism coverage (BD-03) yet.** It requires semantic CSS pattern matching (effectively an LLM judge) and the ROI is unclear until we have 5+ runs to calibrate.

5. **Build the cross-run storage layer** (even a simple JSON file per run with extracted metrics). Without longitudinal storage, cross-run trends (the highest-value analysis) are impossible.

6. **Track content properties as covariates** in every run. Without content normalization, all cross-run comparisons are confounded.

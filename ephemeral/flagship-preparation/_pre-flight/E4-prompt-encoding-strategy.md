# E4: Prompt Encoding Strategy -- Maximum Enforcement in Minimum Words

**Author:** META-ENCODER (Opus 4.6)
**Date:** 2026-02-16
**Task:** #27
**Sources:**
- 10-prompt-architecture.md (forensic analysis of 1,004-line ceiling prompt)
- 20-attention-bandwidth-theory.md (attention budget model, ~100 units per agent)
- 19-constraint-pressure-hypothesis.md (constraint pressure creates richness)
- 17-no-compromise-pipeline.md (5-pass pipeline, single-concern decomposition)
- CEILING-MASTER-EXECUTION-PROMPT.md (the 1,004-line prompt itself)
- 18-UNIFIED-ACTION-PLAN.md (synthesized action plan)

---

## 0. THE ENCODING PROBLEM

The ceiling prompt contained ~56 rules, of which 26 were judgment rules. At ~0.75 attention units per binary rule and ~5 units per judgment rule, total attention demand was ~152 units against a budget of ~100. The builder complied with binary rules (100%) and judgment rules (~0%). The prompt was 1,004 lines. The builder directly consumed ~10-15% of it.

**The encoding problem:** How do you write a prompt that achieves maximum compliance per attention unit spent?

**The answer:** Every word in the builder's prompt must either (a) trigger a binary behavior that costs 0.5-1 attention units, or (b) be deleted. There is no middle ground. Words that trigger judgment behaviors cost 4-6 units each and achieve ~0% compliance. They are worse than absent -- they consume budget without producing compliance, leaving less attention for emergent quality.

---

## 1. RULE ENCODING FORMAT

### 1.1 Word Patterns and Compliance Correlation

From the ceiling experiment's 100%/0% binary/judgment split:

| Pattern | Attention Cost | Compliance | Use When |
|---------|---------------|-----------|----------|
| `MUST [verb] [exact value]` | ~0.5 units | ~100% | Enforceable binary rule |
| `MUST NOT [verb]` | ~0.5 units | ~100% | Prohibition |
| `[property]: [value]` (bare declaration) | ~0.3 units | ~100% | CSS soul rules |
| `>= [number]` or `<= [number]` | ~0.5 units | ~100% | Threshold |
| `[formula] = [range]` | ~1.0 units | ~100% | Computed check |
| `Verify: [method]` | ~0.5 units | ~90% | Inline verification |
| `ensure` / `consider` / `aim for` | ~4.0 units | ~0% | NEVER USE |
| `should feel` / `appropriate` | ~5.0 units | ~0% | NEVER USE |
| `where possible` / `try to` | ~3.0 units | ~0% | NEVER USE |

**The compliance-triggering pattern is: VERB + EXACT VALUE + VERIFICATION METHOD.**

"Container width MUST be 940-960px. Verify: `querySelector('.page-container').getBoundingClientRect().width`"

This costs ~1.0 attention units and achieves ~100% compliance. The equivalent judgment encoding -- "Ensure the container width is appropriate for readability" -- costs ~4.0 units and achieves ~0%.

### 1.2 Number Presentation

| Format | Cost | Compliance | Example |
|--------|------|-----------|---------|
| Exact value | ~0.3 | 100% | `border-radius: 0` |
| Range [min, max] | ~0.5 | 100% | `CPL: 45-80` |
| Formula + range | ~1.0 | 90-100% | `CPL = width / font-size / 0.6, target [45, 80]` |
| "2-4" (range as guidance) | ~2.0 | Variable | `sample 2-4 mechanisms` -- THE most limiting spec |
| "around X" / "approximately" | ~3.0 | ~0% | NEVER USE |

**Rule: All numbers MUST be exact values or [min, max] ranges. Never "around," never "approximately," never unanchored ranges like "2-4" without specifying what happens at 1 or 5.**

### 1.3 Verification Method Embedding

**Inline verification beats separate verification sections.**

Evidence: The ceiling prompt had rules in Sections 4-6 and verification in Section 4.8 (self-check) and Section 7 (QA). The rules and their verifications were separated by 200+ lines. By the time the builder reached the self-check, the rules were already implemented (correctly or incorrectly). The self-check caught SOME errors (CPL improved from 66.5% to 86% between Middle and Ceiling) but missed spatial proportion entirely.

**Optimal format:** Rule + verification on the same line or immediately following line.

```
Container: max-width: 960px; margin: 0 auto;
  Verify: document.querySelector('.page-container').getBoundingClientRect().width at 1440px
```

This costs ~1.5 attention units total (rule + verification). Separating them into different sections costs ~1.0 + ~0.5 = ~1.5 units PLUS the reconnection cost of ~1.0 unit when the builder must link the self-check item back to the rule. **Separation adds ~1.0 unit of wasted attention per rule.**

### 1.4 Optimal Rule Length

**One rule = one line. Maximum two lines (rule + verification).**

Evidence: Rules in the ceiling prompt that spanned 3+ lines had lower compliance than single-line rules. The builder's processing is SEQUENTIAL -- it reads line by line and commits each line to working memory. A 3-line rule requires holding 3 things simultaneously, which competes with other rules for working memory.

**Exception:** A table of related rules (e.g., soul 8/8) can be compressed into a single conceptual unit. The 8 soul rules cost ~3-4 units total as a group, not 8 x 0.5 = 4.0, because the builder processes them as "the soul block" rather than 8 independent rules.

### 1.5 Concrete Conversions: Verbose to Terse

**Example 1: Mechanism selection guidance**

CEILING (verbose, ~18 attention units):
```
Select mechanisms THROUGH the metaphor. For each mechanism, explain how the
metaphor DEMANDS it. If the mechanism would exist regardless of the metaphor,
it is a Middle mechanism, not a Ceiling mechanism. Produce: SECTION MAP,
MECHANISM TABLE (with per-mechanism metaphor justification), TRANSITION TABLE
(3+ types), REINFORCING PAIRS (2+ pairs with shared semantic identified),
4-SCALE FRACTAL TABLE (Nav + Page + Section + Component with CSS evidence),
BUILDER BLOCKS (pre-baked CSS). Also produce a STRUCTURAL OBLIGATION TABLE
showing what the metaphor DEMANDS of each section.
```

FLAGSHIP (terse, ~6 attention units):
```
Per-category minimums: S:1+ H:1+ C:1+ D:1+ N:1+
Reinforcing pairs: >= 2 (same semantic, different CSS channels)
Transitions: >= 3 types, no identical adjacent
Each mechanism: 1 line justifying WHY this metaphor demands it
```

**Savings: 12 attention units recovered.** The verbose version asks the builder to REASON about metaphor-mechanism relationship (judgment, ~5 units each for 3 judgment calls = 15 units). The terse version specifies BINARY OUTPUTS (category count, pair count, transition count) at ~1 unit each.

**Example 2: Container width specification**

CEILING (appears at 3 locations, ~3 attention units total but diluted across 600 lines):
```
Section 4.7, line 410: "Container width 940-960px"
Section 4.8, line 416: "Container width check"
Section 8.1, line 432: "Container width 940-960px PASS"
```

FLAGSHIP (appears once, ~1.5 attention units, concentrated):
```
Container: max-width: 960px; margin: 0 auto;
  Verify: querySelector('.page-container').getBoundingClientRect().width
```

**Savings: 1.5 attention units + elimination of dilution.** Three mentions at weight 1/56 each = 3/56 = 5.4% of attention. One mention in a 25-rule prompt at weight 1/25 = 4.0% of attention. Fewer rules means each rule gets more weight.

**Example 3: Communication protocol**

CEILING (57 lines, ~8 attention units, 0% compliance):
```
Section 3: Communication Protocol
3.1 Message Types (4 types with descriptions)
3.2 Per-Agent Caps (table of maximums)
3.3 Response Expectations (2 response types)
3.4 Anti-Spam Table (per-role message limits)
```

FLAGSHIP (2 lines, ~1 attention unit, projected ~100% compliance):
```
MUST send >= 1 message to planner BEFORE writing HTML file.
MUST send page-height + content-ratio to team-lead AFTER writing file.
```

**Savings: 7 attention units recovered.** The ceiling version described CAPABILITIES (CAN send 4 message types). The flagship version specifies OBLIGATIONS (MUST send at 2 checkpoints). Capabilities achieve 0% adoption. Obligations achieve 100%.

---

## 2. THE DECISION FRAMEWORK: Where Does Each Item Go?

### 2.1 The Decision Tree

```
For any action item:

1. Is it enforceable PROGRAMMATICALLY (without the builder's cooperation)?
   YES → GATE (zero prompt cost, team-lead or auditor enforces)

2. Is it a BINARY builder behavior (pass/fail, exact value)?
   YES → SELF-CHECK in builder prompt (0.5-1.0 attention units)

3. Is it an ABORT condition (if this fails, stop everything)?
   YES → KILL CRITERION in team-lead prompt (~1 unit, zero builder cost)

4. Does it shape CREATIVE JUDGMENT (what "good" means)?
   YES → CONVICTION (Layer 1, ~2 units, read by creative agents)

5. Is it REFERENCE INFORMATION (look up when needed)?
   YES → LIBRARY (zero prompt cost, on-demand access by file path)

6. None of the above?
   → DISCARD (explicitly cut, reason documented)
```

### 2.2 Application to 20 Example Items

| # | Item (from flagship preparation) | Source | Decision | Destination | Cost | Reason |
|---|----------------------------------|--------|----------|-------------|------|--------|
| 1 | Container width 940-960px | Report 10 | Binary builder behavior | SELF-CHECK | 1.0 | Exact value with verification method |
| 2 | Content-to-void ratio >= 60:40 | Report 03 | Enforceable programmatically | GATE (Pass 0 + Pass 1) | 0.0 | Team-lead calculates from spatial budget; also builder self-check (1.0) |
| 3 | Soul 8/8 (border-radius:0, box-shadow:none, etc.) | Report 10 | Binary builder behavior | SELF-CHECK (grouped) | 3.0 | 8 rules as 1 conceptual block |
| 4 | Metaphor must be "load-bearing structure" | Report 10, Sec 0 | Shapes creative judgment | CONVICTION | 2.0 | Cannot be binary-fied; establishes qualitative frame |
| 5 | Per-category mechanism minimums S:1+ H:1+ C:1+ D:1+ N:1+ | Report 10 | Binary builder behavior | SELF-CHECK | 1.0 | Count check per category |
| 6 | Reinforcing pairs >= 2 | Report 10 | Binary builder behavior | SELF-CHECK | 1.0 | Count check |
| 7 | PA-05 4/4 DESIGNED | Report 17 | Enforceable programmatically | GATE (Mode 4 audit) | 0.0 | Auditor evaluates, not builder |
| 8 | Phase 0E library prohibition (no catalog before metaphor) | Report 10 | Enforceable programmatically | GATE (team-lead enforces isolation) | 0.0 | Isolation matrix prevents access |
| 9 | Two-instance pattern (separate agents per pass) | Report 17 | Enforceable programmatically | GATE (team-lead spawns separate agents) | 0.0 | Architecture enforces, not prompt |
| 10 | "This page should have a point of view" | Report 10, Sec 0 | Shapes creative judgment | CONVICTION | 2.0 | Qualitative directive |
| 11 | Builder MUST message planner before writing file | Report 06 | Binary builder behavior | SELF-CHECK | 0.5 | Binary: sent or not sent |
| 12 | Void budget <= 30% at any checkpoint | Report 07 | Abort condition | KILL CRITERION | 0.0 | Team-lead monitors via embedded auditor |
| 13 | Full mechanism catalog (18 mechanisms) | Report 10 | Reference information | LIBRARY | 0.0 | Planner reads on demand; builder never sees |
| 14 | 48 PA questions | PA skill | Reference information | LIBRARY | 0.0 | Auditors read on demand; builder never sees |
| 15 | Anti-patterns from ceiling experiment | Report 10, Sec 9 | Reference information | LIBRARY (team-lead reference) | 0.0 | Retrospective framing confuses builders |
| 16 | "Spatial proportion should feel balanced" | Report 10, rule 49 | None of the above (vague judgment) | DISCARD | 0.0 | Cannot be verified; replaced by binary SC checks |
| 17 | Success criteria detail (pass margins, qualitative framework) | Report 17 | Reference information | LIBRARY (verdict synthesizer) | 0.0 | Builder cannot act on outcome metrics |
| 18 | Crown jewel technique inventory (CD-006, DD-006 patterns) | Report 17 | Reference information | LIBRARY (intentionality builder) | 0.0 | Only relevant to Pass 4 builder |
| 19 | "Section-scale internal rhythm" | Report 10, rule 56 | None of the above (unmeasurable judgment) | DISCARD | 0.0 | No binary encoding possible; emergent from surplus attention |
| 20 | Token compliance >= 80% (var() / (var() + raw)) | Report 10 | Binary builder behavior | SELF-CHECK | 1.0 | Formula with threshold |

### 2.3 Distribution Summary

| Destination | Items | Total Cost to Builder | % of Items |
|-------------|-------|----------------------|------------|
| GATE | 6 | 0.0 units | 30% |
| SELF-CHECK | 8 | 8.5 units | 40% |
| KILL CRITERION | 1 | 0.0 units | 5% |
| CONVICTION | 2 | 4.0 units | 10% |
| LIBRARY | 5 | 0.0 units | 25% |
| DISCARD | 2 | 0.0 units | 10% |
| **TOTAL** | **20** (4 items dual-classified) | **12.5 units** | |

**Key insight: Only 40% of action items belong in the builder's prompt. 30% are gates (zero prompt cost). 25% are library references (zero prompt cost). 10% are discarded. The builder sees LESS THAN HALF of the system's total rule inventory.**

---

## 3. PROMPT STRUCTURE FOR MAXIMUM RETENTION

### 3.1 Primacy Effect: First 10 Lines

Agents remember beginnings best. The first 10 lines establish the processing frame for EVERYTHING that follows. In the ceiling prompt, Section 0 (Conviction) occupied this position and achieved its purpose -- the metaphor was recognized by all auditors, and novelty scored 9/9.

**What goes in the first 10 lines:**
1. The ONE-SENTENCE mission (what are you building)
2. The THREE KILLER CONSTRAINTS (the ones that caused all historical failures)
3. The CONVICTION frame (why this matters)

```
FLAGSHIP BUILDER: Single HTML page. Ceiling-plus tier. Metaphor-driven.
FAIL IF: container != 940-960px | void > 30% | zero messages sent
This page has a point of view. The metaphor is the structure, not a label.
```

These 3 lines consume ~4 attention units and encode the 3 historically fatal failure modes plus the qualitative frame. The builder will remember these above all else.

**Why these 3 constraints:** Container width was violated in 4/5 Phase D pages. Void was 70-80% in the Ceiling experiment. Zero messages were sent in both Middle and Ceiling. These three failures account for 100% of DO-NOT-SHIP verdicts. Preventing these three = preventing all known failure modes.

### 3.2 Recency Effect: Last 10 Lines

Agents remember endings second-best. The last 10 lines should be the SELF-CHECK -- the final thing the builder reads before writing the file. This creates a natural "checklist before takeoff" effect.

```
BEFORE WRITING FILE, VERIFY:
[ ] Container 940-960px (getBoundingClientRect)
[ ] CPL 45-80 (width / font-size / 0.6)
[ ] Content-to-void >= 60:40 (content heights / total scroll)
[ ] Token compliance >= 80% (var() / total values)
[ ] Soul 8/8 (border-radius:0 | box-shadow:none | etc.)
[ ] Header + footer present with visible content
[ ] >= 3 transition types, no identical adjacent
[ ] >= 1 message sent to planner
AFTER WRITING FILE, REPORT: page height, content ratio, section count
```

These 10 lines cost ~6 attention units total and serve as the builder's pre-flight checklist. The checkbox format (`[ ]`) triggers a sequential verification pattern in the agent -- it processes each item in order and checks it off.

### 3.3 Chunking: Group by Concern

The ceiling prompt grouped by DOCUMENT STRUCTURE (Section 1: Mission, Section 2: Topology, etc.). This forced the builder to mentally reorganize rules by concern during implementation. The builder cares about "what CSS do I write?" not "what section of the prompt am I in?"

**Group by builder concern, not document structure:**

```
Block 1: SPACE (container, CPL, void, landmarks)
Block 2: SOUL (8 prohibitions, palette, typography)
Block 3: COMPOSITION (mechanisms, pairs, transitions, moments)
Block 4: PROCESS (messages, self-check, reporting)
```

Each block is a self-contained concern that the builder addresses during a different phase of implementation:
- SPACE: addressed during initial HTML structure
- SOUL: addressed during CSS custom properties and reset
- COMPOSITION: addressed during mechanism deployment
- PROCESS: addressed before and after file write

This alignment between prompt blocks and builder workflow REDUCES attention cost because the builder reads each block when it is relevant, not all at once.

### 3.4 Repetition: Critical Rules Appear Twice

**Yes, but ONLY for the top 3 failure-mode rules, and ONLY in structurally different positions.**

The 3 killer constraints appear:
1. In the FIRST 3 LINES (primacy: establishes fail conditions)
2. In the SELF-CHECK (recency: verification before write)

This is NOT redundancy. Redundancy is the same rule at line 410 and line 416 (same position, same function). This is REINFORCEMENT: the same rule at two structurally distinct positions serving two different functions (frame-setting vs verification).

**Do NOT repeat any other rules.** The ceiling prompt's 3x container-width mention consumed 3 prompt slots for 1 rule's worth of information. Beyond the top 3, every rule appears exactly once.

### 3.5 Visual Formatting Effects on Compliance

| Format | Effect on Compliance | Evidence |
|--------|---------------------|----------|
| Bullet list | MODERATE: easy to scan, low engagement per item | Appendix A of ceiling prompt -- scanned but not deeply processed |
| Numbered list | MODERATE-HIGH: implies sequence, builder processes in order | Self-check section -- processed sequentially |
| Table | HIGH: structured, forces completeness (empty cells are visible) | Mechanism table in build plan -- high compliance |
| Code block | HIGHEST: treated as EXECUTABLE, builder copies pattern | Soul rules in code block format -- 100% compliance |
| Checkbox `[ ]` | HIGH: triggers completion behavior | Self-check -- encourages verification |
| Bold/caps | MODERATE: draws attention but wears off after 3+ uses | MUST/NEVER -- effective when sparse, invisible when overused |
| Paragraph prose | LOW: text compression, important details lost in paragraph body | Sections 5, 9 of ceiling prompt -- largely ignored |

**Formatting recommendations:**
1. Use CODE BLOCK format for CSS-level rules (soul, container, typography)
2. Use CHECKBOX format for self-check items
3. Use TABLE format for mechanism/transition specifications
4. Use BOLD CAPS for the 3 killer constraints ONLY (scarcity creates salience)
5. NEVER use paragraph prose in the execution spec (move all prose to Conviction)

---

## 4. THE "10 THINGS" TEST: Minimum Viable Prompt

If the builder could only remember 10 instructions, which 10 would produce the best flagship page?

### The 10 Instructions

```
1. Container: max-width: 960px; margin: 0 auto;
2. Content-to-void: >= 60:40 (no zone with < 200px content)
3. Soul: border-radius:0 | box-shadow:none | no drop-shadow |
   no gradients | no semi-transparent | no pure B/W | warm palette only
4. Mechanisms: S:1+ H:1+ C:1+ D:1+ N:1+ from build plan
5. Reinforcing pairs: >= 2 (same semantic, different CSS channels)
6. Transitions: >= 3 types, no identical adjacent
7. Token compliance: var() / (var() + raw) >= 0.80
8. Message planner BEFORE writing file (spatial concern)
9. Message team-lead AFTER writing file (height + ratio)
10. The metaphor is the structure. If the metaphor changed,
    the structure would change. If it wouldn't, go deeper.
```

**Total attention cost: ~12 units.**
**Remaining budget: ~88 units for creative work.**

These 10 instructions address:
- THE historical failure modes: container (#1), void (#2), messaging (#8, #9)
- THE binary identity: soul (#3)
- THE compositional minimum: mechanisms (#4), pairs (#5), transitions (#6)
- THE technical compliance: tokens (#7)
- THE qualitative frame: metaphor (#10)

**Everything beyond these 10 must be enforced through GATES (team-lead checks) or LIBRARY (reference files), not through the builder's prompt.**

### What Is NOT In The 10 Things

| Excluded Item | Why Excluded | How Enforced Instead |
|---------------|-------------|---------------------|
| Phase 0E library prohibition | Architecture enforces (metaphor agent cannot access catalog) | GATE |
| PA-05 success criteria | Builder cannot act on audit outcome metrics | LIBRARY (auditors) |
| Two-instance pattern | Team-lead spawns separate agents | GATE (structural) |
| Designed moments (3-5 locations) | Emerges from mechanism deployment | Planner specifies in build plan |
| Scale coherence (4 scales) | Too judgment-heavy for builder prompt | Planner specifies per-scale mapping |
| Crown jewel reference | Only relevant to intentionality pass | LIBRARY (Pass 4 only) |
| Anti-patterns | Retrospective framing confuses forward-looking builder | LIBRARY (team-lead) |
| Competitive skeleton build | Team-lead orchestration decision | GATE (team-lead coordinates) |
| Embedded auditor protocol | Separate agent's instructions | GATE (embedded auditor prompt) |
| Kill criteria | Team-lead decisions, not builder decisions | KILL CRITERION (team-lead) |

---

## 5. ANTI-PATTERNS TO AVOID

### 5.1 Contradictory Rules

**Ceiling example:** The prompt specified "container width 940-960px" (binary) AND "choose appropriate spacing for the metaphor's zones" (judgment). The metaphor demanded 4 zones with 80px transitions = 640px of whitespace overhead. Combined with 960px width and limited content, this mathematically produced the void. The binary rule and the judgment rule contradicted each other, but neither was explicitly subordinate.

**Fix:** When two rules can conflict, specify PRIORITY explicitly.
```
IF void ratio exceeds 30%: REDUCE zone spacing. Spatial budget
overrides metaphor zone architecture.
```

### 5.2 Rules Too Vague to Verify

**Ceiling examples:**
- "Metaphor expression observed by PA" -- What counts as "observed"? 40% of viewers? 80%? How is "expression" defined?
- "Section-scale internal rhythm" -- What IS internal rhythm? How would you measure it?
- "Weight distribution in bottom 50%" -- Weight of WHAT? Visual weight? Content weight? How measured?

**Fix:** If you cannot write a verification formula, the rule does not belong in the execution spec. Move it to Conviction (as creative aspiration) or DISCARD it.

**Verification test for any proposed rule:**
```
Can you write: "PASS if [measurement] [operator] [threshold]. FAIL otherwise."?
YES → Include in execution spec.
NO  → Move to Conviction or DISCARD.
```

### 5.3 Rules Requiring Counting Without Formulas

**Ceiling examples:**
- "Token compliance >= 80%" WITHOUT specifying how to count. The builder must decide: does `color: var(--token)` count as 1 token usage? Does `border: 1px solid var(--color)` count as 1 token + 2 raw values?
- "3-5 designed moments" WITHOUT specifying what qualifies as a "moment." Is a single bold border a moment? Do two adjacent mechanisms at the same location count as 1 or 2?

**Fix:** Every counting rule needs a FORMULA.
```
Token compliance = (declarations using var()) / (total declarations
in custom CSS, excluding @font-face and :root) >= 0.80
```

### 5.4 Hedging Language

**Words that destroy compliance:**

| Word/Phrase | Effect | Replacement |
|-------------|--------|-------------|
| `consider` | Agent considers and moves on | `MUST` or delete |
| `aim for` | Agent aims and misses | `>= [value]` |
| `where possible` | Agent decides it's not possible | Delete (unconditional) |
| `try to` | Agent tries and fails | `MUST` or delete |
| `should` | Agent reads as optional | `MUST` |
| `ideally` | Agent discounts to zero | Delete or convert to binary |
| `appropriate` | Agent uses its own judgment (which is the problem) | `[exact value]` |
| `balanced` | Undefined | `[ratio]` or `[range]` |
| `feel` | Unmeasurable | `[measurement] [operator] [threshold]` |

**The rule: if a word provides the agent PERMISSION to not comply, the agent will not comply.**

### 5.5 Creative Guidance in the Execution Spec

**Ceiling example:** The execution spec contained "The difference between Ceiling and Middle is not complexity. It is conviction." This is excellent creative guidance. But it was embedded in a 1,004-line execution spec, surrounded by binary rules. The builder processed it as one of 56 rules, diluting its impact.

**Fix:** Creative guidance belongs in a SEPARATE document (Conviction, Layer 1) that creative agents read BEFORE the execution spec. The execution spec is purely mechanical. When creative guidance appears in the execution spec, it signals to the builder that some rules are "soft" -- which contaminates the hardness of ALL rules.

**The contamination principle:** A single judgment rule in a list of binary rules makes the builder treat ALL rules as potentially soft. The judgment rule's ~0% compliance is not isolated -- it degrades the binary rules' compliance from ~100% to ~90-95% by establishing that "not all rules here are absolute."

---

## 6. CONCRETE PROMPT TEMPLATE

### 6.1 The ~55-Line Builder Prompt

This template costs ~37 attention units (well under the 60-unit budget), leaving ~63 units for creative work.

```
================================================================
FLAGSHIP BUILDER PROMPT
================================================================

YOU ARE BUILDING: Single HTML page from build plan.
FAIL IF: container != 940-960px | void > 30% | zero messages sent
CONVICTION: The metaphor is the load-bearing structure. If the
metaphor changed, the page structure would change with it.

--- SPACE ---

Container: max-width: 960px; margin: 0 auto;
CPL: (container-width - 2*padding) / font-size / 0.6 = [45, 80]
Void: no contiguous void > 2160px (1.5 viewports)
Content: present in >= 70% of total scroll depth
Header: <= 20% of first viewport height (288px at 1440px)
Footer: must exist with visible content, gap <= 1 viewport
Sections: all planned sections present with >= 200px content each

--- SOUL ---

border-radius: 0
box-shadow: none
No filter: drop-shadow()
No rgba() or opacity < 1 on backgrounds
No linear-gradient, radial-gradient, conic-gradient
No #000000 or #FFFFFF (use near-black/cream from tokens)
Instrument Serif: display headings ONLY, never body text
No cool-toned grays (all neutrals warm)
Typography: Instrument Serif / Source Sans 3 / Source Code Pro

--- COMPOSITION ---

Mechanisms from build plan. Per-category: S:1+ H:1+ C:1+ D:1+N:1+
Reinforcing pairs: >= 2 (same semantic encoded through 2+ CSS
  channels -- e.g., border-weight AND spacing both encode depth)
Transitions: >= 3 types (SMOOTH|BRIDGE|BREATHING|HARD CUT)
  No two adjacent section transitions identical.
Designed moments: >= 1 per scroll quartile (0-25%, 25-50%,
  50-75%, 75-100%) where 2+ mechanisms visibly intersect
Purpose-built components: >= 2 invented for THIS content

--- PROCESS ---

BEFORE writing file:
  SendMessage to planner: biggest spatial concern + void estimate
AFTER writing file:
  SendMessage to team-lead: page height, content-to-void ratio,
  section count, any plan deviations

--- TOKENS ---

Use var(--token-name) for ALL design values.
Token compliance: var() / (var() + raw values) >= 0.80
Approved raw exceptions: 0, auto, inherit, 100%, 1px
Reference: design-system/compositional-core/vocabulary/tokens.css

--- SELF-CHECK (before writing file) ---

[ ] Container 940-960px (getBoundingClientRect at 1440px)
[ ] CPL 45-80 (formula above)
[ ] Content-to-void >= 60:40
[ ] No empty structural elements (every classed div has content)
[ ] Soul 8/8 (all prohibitions above)
[ ] Header + footer present with content
[ ] >= 3 transition types, no identical adjacent
[ ] Token compliance >= 80%
[ ] >= 1 message sent to planner
[ ] Heading spacing >= 1.5:1 (space-above / font-size)
AFTER: report height + ratio + section count to team-lead

================================================================
```

### 6.2 Attention Budget Audit of This Template

| Block | Lines | Items | Cost per Item | Total Cost |
|-------|-------|-------|---------------|------------|
| Header (mission + fail + conviction) | 4 | 3 | 1.3 avg | 4.0 |
| SPACE | 7 | 7 binary | 0.75 | 5.25 |
| SOUL | 9 | 9 binary (grouped) | 0.4 | 3.6 |
| COMPOSITION | 8 | 5 binary | 1.2 | 6.0 |
| PROCESS | 5 | 2 binary | 0.75 | 1.5 |
| TOKENS | 4 | 2 binary | 0.75 | 1.5 |
| SELF-CHECK | 11 | 10 verification | 1.5 | 15.0 |
| **TOTAL** | **~55** | **~35 items** | | **~37 units** |

**Self-check costs 15 units but runs AFTER the main build.** During the build phase, the builder allocates ~22 units to rules, leaving ~78 units for creative work. The self-check runs as a separate cognitive task after the build is "complete" -- it does not compete with creative composition.

**Effective attention demand during build: ~22 units.**
**Available for creative work during build: ~78 units.**
**Available for verification during self-check: ~85 units (fresh after build focus releases).**

### 6.3 What Is NOT In This Template (And Where It Lives)

| Item | Location | Who Reads | Builder Cost |
|------|----------|-----------|-------------|
| Full metaphor derivation | `01-metaphor-derivation.md` | Metaphor agent, planner | 0 |
| Full mechanism catalog | `mechanism-catalog.md` | Planner only | 0 |
| Build plan (section map, mechanism table, transition table) | `02-build-plan.md` | Builder (as input, not prompt) | ~10 (content understanding) |
| 48 PA questions | PA skill file | Auditors only | 0 |
| Success criteria (PA-05, novelty, comparison) | Team-lead coordination spec | Verdict synthesizer | 0 |
| Kill criteria (void > 30%, PA-05 < 3/4, time > 360 min) | Team-lead coordination spec | Team-lead only | 0 |
| Anti-patterns from experiments | Team-lead reference | Team-lead only | 0 |
| Agent roster and blocking dependencies | Team-lead coordination spec | Team-lead only | 0 |
| Checkpoint sequence and audit protocols | Team-lead coordination spec | Team-lead only | 0 |
| Crown jewel reference material | Library files | Intentionality builder (Pass 4) | 0 |
| Spatial budget gate criteria | Gate specification | Team-lead + spatial auditor | 0 |
| Metaphor coherence gate criteria | Gate specification | Fresh-eyes auditors | 0 |
| Content inventory and density map | Content architecture output | Content architect (Pass 0) | 0 |

### 6.4 The 3-Line Encoding of Each Concern

For maximum density, every concern in the prompt follows this pattern:

```
[CONCERN LABEL]
[RULE]: [EXACT VALUE or FORMULA]
  [VERIFICATION METHOD or CHECKPOINT]
```

This 3-line pattern costs ~1.5 attention units per concern and achieves ~100% compliance. The entire ~55-line template is approximately 18 concerns in this format, plus the self-check.

---

## 7. ENCODING PRINCIPLES SUMMARY

### The 7 Laws of Prompt Encoding

**Law 1: Binary or Delete.**
Every rule in the builder's prompt MUST be verifiable as PASS/FAIL with a specific measurement. If it cannot be binary-fied, it belongs in Conviction (creative guidance) or is DISCARDED.

**Law 2: MUST, Never Should.**
The word "should" grants permission to not comply. The word "MUST" removes that permission. Use "MUST" for obligations, "MUST NOT" for prohibitions, and nothing else.

**Law 3: Verification Inline.**
Every rule includes its verification method on the same or next line. Separating rules from verification wastes ~1 attention unit per rule to reconnection cost.

**Law 4: One Rule, One Line.**
Maximum two lines (rule + verification). Rules spanning 3+ lines cost disproportionate attention because they require simultaneous working memory for multiple sub-clauses.

**Law 5: Primacy for Failure Modes, Recency for Self-Check.**
The first 3 lines encode the historically fatal failure modes. The last 10 lines encode the pre-write verification checklist. Everything else fills the middle.

**Law 6: Group by Builder Concern, Not Document Structure.**
SPACE | SOUL | COMPOSITION | PROCESS maps to the builder's implementation sequence. This reduces the cognitive cost of mapping prompt structure to workflow.

**Law 7: 40% to Builder, 60% to Infrastructure.**
Only 40% of the system's total rules belong in the builder's prompt. The other 60% are enforced through gates (30%), stored in reference libraries (25%), or discarded (5%). The builder's ignorance of most rules is a FEATURE, not a bug -- it preserves attention for creative work.

### The Encoding Scorecard

Before sending ANY prompt to a builder agent, score it:

```
ENCODING SCORECARD

1. Line count:       ___ (target <= 80, hard cap 120)
2. Binary rules:     ___ x 0.75 = ___ attention units
3. Judgment rules:   ___ x 5.0  = ___ attention units (SHOULD BE ZERO)
4. "Should" count:   ___ (SHOULD BE ZERO)
5. "Consider" count: ___ (SHOULD BE ZERO)
6. "Ensure" count:   ___ (SHOULD BE ZERO)
7. Rules without verification: ___ (SHOULD BE ZERO)
8. Redundant restatements: ___ (SHOULD BE ZERO)
9. Total attention demand: ___ (target <= 40, hard cap 60)
10. Attention surplus: 100 - demand = ___ (target >= 40)

PASS: surplus >= 40 AND judgment rules = 0 AND hedging = 0
FAIL: ANY of surplus < 30 OR judgment rules > 0 OR hedging > 3
```

---

## 8. APPLICATION ACROSS THE 5-PASS PIPELINE

Each pass has its own builder with its own prompt. The encoding strategy applies uniformly but the CONTENT differs by pass.

| Pass | Builder's Concern | Prompt Size | Key Rules | Conviction Needed? |
|------|-------------------|-------------|-----------|-------------------|
| 0: Content Architecture | Where content goes | ~40 lines | Spatial budget formula, zone count limits, content/zone ratio | YES (metaphor frame) |
| 1: Spatial Skeleton | HTML/CSS structure | ~55 lines (template above) | Container, CPL, void, soul, landmarks | YES (page point of view) |
| 2: Mechanism Deployment | CSS techniques | ~45 lines | Per-category minimums, reinforcing pairs, transitions, designed moments | NO (planner specified these) |
| 3: Metaphor Integration | Vocabulary + encoding | ~40 lines | Channel mapping, zone naming, variable naming conventions | YES (metaphor as structure) |
| 4: Intentionality | Bookending, self-reference | ~35 lines | Crown jewel technique checklist, cognitive transitions, meta-annotation | YES (quality calibration) |

**Total unique rules across all passes: ~95.**
**Maximum rules visible to any single builder: ~35.**
**This is the attention-preserving insight: the total rule inventory is large, but per-agent load stays within budget.**

### Per-Pass Attention Budgets

| Pass | Rules | Attention Demand | Budget | Surplus | Surplus for Emergent Quality |
|------|-------|-----------------|--------|---------|------------------------------|
| 0 | ~20 | ~15 | 100 (Opus) | 85 | 85% -- spatial reasoning |
| 1 | ~35 | ~22 (build) + ~15 (check) | 90 (Sonnet) | ~53 | 59% -- spatial composition |
| 2 | ~25 | ~18 | 90 (Sonnet) | ~72 | 80% -- mechanism expression |
| 3 | ~20 | ~16 | 100 (Opus) | ~84 | 84% -- metaphor coherence |
| 4 | ~15 | ~12 | 100 (Opus) | ~88 | 88% -- intentional design |

**Every pass has >= 53% surplus.** Compare to the ceiling experiment's 0% surplus. The encoding strategy transforms a deficit into an abundance across all passes.

---

**END PROMPT ENCODING STRATEGY**

**Key numbers:**
- Builder prompt: ~55 lines, ~37 attention units, ~63 unit surplus
- 10-item minimum viable prompt: ~12 attention units, ~88 unit surplus
- Zero judgment rules in execution spec (all moved to Conviction or discarded)
- Zero hedging language ("should," "consider," "ensure," "aim for")
- 7 encoding laws, 1 scoring template, 1 decision framework
- 40% of rules to builder, 60% to infrastructure (gates + library + discard)

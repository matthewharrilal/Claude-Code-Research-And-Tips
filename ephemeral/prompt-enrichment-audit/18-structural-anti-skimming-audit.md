# 18: Structural Anti-Skimming Audit

**Author:** STRUCTURAL-ARCHITECT (Opus 4.6)
**Date:** 2026-02-17
**Task:** #35
**Sources:**
- `00-PROMPT-STRUCTURE-OUTLINE.md` (prompt structure, 105 lines)
- `E2-information-loss-analysis.md` (6 loss mechanisms, 725 lines)
- `E4-prompt-encoding-strategy.md` (encoding strategy, 648 lines)
- `20-attention-bandwidth-theory.md` (attention budget theory, 674 lines)

---

## 1. DENSITY MAP -- Per-Section Information Density with Risk Rating

The prompt outline specifies 9 major sections. I analyze each for concepts-per-line density. Sections above 2.0 concepts/line WILL be skimmed by a receiving agent.

| Section | Estimated Lines | Distinct Concepts | Density (concepts/line) | Risk Rating | Verdict |
|---------|----------------|-------------------|------------------------|-------------|---------|
| 1. PREAMBLE (Urgency + Metacog) | ~15 | 5 (weight, ceiling lesson, middle lesson, 4 functions, metacog questions) | 0.33 | LOW | SAFE -- narrative framing, agents engage naturally |
| 2. READING LIST (66+ files) | ~30 | 66+ file paths across 6 layers | **2.2+** | **CRITICAL** | WILL BE SKIMMED. 66 file paths in 30 lines = wall of references. Agent will scan first 5-10 and skip rest. |
| 3. LAYER 1: CONVICTION (~70 lines) | ~70 | 11 (thesis, beauty def, personality, 4 tensions, exemplars, anti-scale, experiential truth, smoking gun, iteration insight) | 0.16 | LOW | SAFE -- conviction is designed to be read narratively, not executed |
| 4. LAYER 2: EXECUTION SPEC (~100-120 lines) | ~100-120 | ~40 (2A: 10 spatial, 2B: 10 soul, 2C: 8 compositional, 2D: 5 process, 2E: 11 self-check) | **0.33-0.40** overall BUT **2.67** within 2A (10 concepts in ~15 lines) | **HIGH for 2A, 2C** | Sub-sections 2A and 2C pack dense binary rules. Each sub-section individually is 10+ concepts in 15 lines = 0.67. Acceptable IF each rule is one line. |
| 5. LAYER 3: COORDINATION (~60 lines) | ~60 | ~25 (11 agent roster, 5 checkpoints, 3 communication rules, 5 audit protocol items) | 0.42 | MODERATE | Agent roster (3A, ~25 lines) is a TABLE -- tables are processed well. Communication (3B) at 5+ concepts in 20 lines = safe. |
| 6. LAYER 4: REFERENCE LIBRARY | ~10 | 7 files + routing | 0.70 | LOW | SAFE -- simple list with routing |
| 7. TEAM TOPOLOGY | ~20 | 20+ agents across 5 phases | **1.0+** | **HIGH** | Dense agent-role-phase mapping. Will be skimmed unless formatted as a table. |
| 8. FUNDAMENTAL PRINCIPLES (10) | ~15 | 10 principles | 0.67 | MODERATE | 10 numbered items in 15 lines = manageable. Numbered format forces sequential processing. |
| 9. SUCCESS CRITERIA (17 items) | ~20 | 17 criteria | **0.85** | **HIGH** | 17 criteria in 20 lines approaches the attention cliff. Every 2nd line is a new criterion. Agent will anchor on first 5-7 and fade on 8-17. |

### Critical Density Hotspots

1. **Section 2 (Reading List):** 66+ file paths = guaranteed skim. No agent will process all 66 paths serially. RECOMMENDATION: Route file lists to per-agent sections. Builder sees ONLY builder-relevant files (5-8 paths). Planner sees planner files. Auditor sees auditor files.

2. **Section 4, sub-section 2A (Spatial):** 10 spatial rules in ~15 lines. Each rule is critical and binary, so one-line-per-rule format works. But the BLOCK of 10 consecutive rules without visual break creates skim risk at rules 7-10. RECOMMENDATION: Group into sub-blocks (CONTAINER: 3 rules, VOID: 3 rules, LANDMARKS: 4 rules) with blank-line separators.

3. **Section 9 (Success Criteria):** 17 items is above the ~10 max rule cap per section (E4 finding). RECOMMENDATION: Split into BINARY CRITERIA (items with exact thresholds, ~10) and QUALITATIVE CRITERIA (items requiring judgment, ~7). Binary criteria in the prompt; qualitative criteria as auditor-only gates.

---

## 2. PRIMACY ANALYSIS -- First/Last Line Optimization

### First 10 Lines: What Does the Agent See?

Per the outline, the first 10 lines are the PREAMBLE:
- Weight statement (22 agents, 5 passes, ~320 min)
- Ceiling failure lesson
- Middle success lesson
- 4 simultaneous functions in tension
- Metacognitive questions

**VERDICT: WRONG CONTENT IN PRIMACY POSITION.**

The preamble is CONTEXTUAL NARRATIVE. It explains WHY this prompt exists. But agents do not need to understand WHY. They need to understand WHAT TO DO. The attention bandwidth theory (Section 3.1 of source file 20) is explicit: "The first 10 lines establish the processing frame for EVERYTHING that follows."

E4 recommends the first 3 lines be:
```
FLAGSHIP BUILDER: Single HTML page. Ceiling-plus tier. Metaphor-driven.
FAIL IF: container != 940-960px | void > 30% | zero messages sent
This page has a point of view. The metaphor is the structure, not a label.
```

The preamble's weight statement ("22 agents, 5 passes, ~320 min") is MOTIVATIONAL context for the HUMAN assembler, not for the executing agents. Agents do not care that 22 agents worked on this. They care about what to build.

**RECOMMENDATION:** Move preamble to a CONTEXT APPENDIX or to the human-facing assembly instructions. Replace with the 3 killer-constraint opening from E4 Section 3.1. First 10 lines must contain:
1. Mission statement (1 line)
2. 3 kill criteria (1 line)
3. Conviction frame (1 line)
4. Per-agent role declaration (1 line: "YOU ARE THE [ROLE]. Your job is [TASK].")
5. The 3 most critical binary rules for this specific agent (3-5 lines)

### Last 10 Lines: What's the Final Impression?

Per the outline, the last content is SUCCESS CRITERIA (17 items). This is EVALUATION CONTENT, not EXECUTION CONTENT.

**VERDICT: WRONG CONTENT IN RECENCY POSITION.**

The last thing the builder reads should be the SELF-CHECK (E4 Section 3.2). The self-check creates a "checklist before takeoff" effect. The checkbox format (`[ ]`) triggers sequential verification behavior.

The success criteria are for the ASSEMBLER and VERDICT SYNTHESIZER, not for the builder. Placing them last means the builder's final processing frame is "how will I be judged" rather than "what must I verify before writing."

**RECOMMENDATION:** Move success criteria to auditor/synthesizer prompts. End the builder prompt with the SELF-CHECK section. End the team-lead prompt with GATE SEQUENCE. End the auditor prompt with VERDICT TEMPLATE.

### The "10 Things" Test

If only 10 instructions survive, are they the right 10? Cross-referencing E2's "10 Essential Items" (Section 6) and E4's "10 Instructions" (Section 4):

| E2's 10 | E4's 10 | In Prompt Outline? | Position |
|---------|---------|-------------------|----------|
| Container 960px | Container 960px | YES (2A) | Line ~50-60 (BURIED) |
| Void < 1.5 viewports | Content-to-void >= 60:40 | YES (2A) | Line ~50-60 (BURIED) |
| Soul 8/8 | Soul 7 checks | YES (2B) | Line ~70 (BURIED) |
| Mechanism table from plan | Mechanisms S:1+ H:1+ C:1+ D:1+ N:1+ | YES (2C) | Line ~80 (BURIED) |
| Token compliance >= 80% | Token compliance >= 80% | YES (2E) | Line ~100 (DEEPLY BURIED) |
| 3+ transition types | Transitions >= 3 types | YES (2C) | Line ~85 (BURIED) |
| Message planner BEFORE file | Message planner BEFORE | YES (2D) | Line ~90 (BURIED) |
| Self-check before write | Self-check | YES (2E) | Line ~100 (DEEPLY BURIED) |
| Metaphor summary | Metaphor as structure | YES (3, conviction) | Line ~30 (EARLY but in narrative) |
| Content >= 70% scroll | Content distribution | YES (2A) | Line ~55 (BURIED) |

**VERDICT: ALL 10 essential items exist in the outline BUT none occupy primacy position (first 10 lines).** They are scattered across Lines 30-100, with the most critical items (container, void) buried in the middle of the execution spec.

**RECOMMENDATION:** The prompt MUST front-load these 10 items. They should occupy lines 1-15 before any other content appears.

---

## 3. SECTION LENGTH ANALYSIS -- With Recommended Splits

| Section | Current Length | Attention Cliff? | Recommendation |
|---------|--------------|------------------|----------------|
| 1. PREAMBLE | ~15 lines | NO | MOVE to appendix (not agent-facing content) |
| 2. READING LIST | ~30 lines | **YES (66+ items in 30 lines)** | SPLIT by recipient: 5 files per agent role. Never present >10 file paths in sequence. |
| 3. LAYER 1: CONVICTION | **~70 lines** | **YES -- SEVERE** | 70 lines of narrative = guaranteed attention cliff at line ~25. SPLIT into: 3A: Thesis + personality (15 lines), 3B: Tensions + exemplars (25 lines), 3C: Anti-scale model + evidence (20 lines). Each sub-section gets its own header. |
| 4. LAYER 2: EXECUTION SPEC | **~100-120 lines** | **YES -- CRITICAL** | Already split into 2A-2E sub-sections, which is good. But 100-120 lines total for one layer = attention cliff for any agent reading the full layer. RECOMMENDATION: No agent should read all of Layer 2. Route 2A+2B+2E to builder. Route 2C to planner output (builder gets plan, not rules). Route 2D to team-lead. |
| 5. LAYER 3: COORDINATION | ~60 lines | **YES (borderline)** | 60 lines is above the 30-line guaranteed-skim threshold. SPLIT: 3A (roster) to team-lead only. 3B (communication) split by recipient -- builder gets 2 lines of obligation; team-lead gets full protocol. 3C (audit) to auditor only. |
| 6. LAYER 4: REFERENCE | ~10 lines | NO | SAFE |
| 7. TEAM TOPOLOGY | ~20 lines | NO | SAFE if table-formatted |
| 8. FUNDAMENTAL PRINCIPLES | ~15 lines | NO | SAFE (numbered list) |
| 9. SUCCESS CRITERIA | ~20 lines | **YES (17 items, attention fades at ~10)** | SPLIT: Binary criteria (10) in one numbered block. Qualitative criteria (7) in auditor appendix. |

### Sections Exceeding Safe Thresholds

**Layer 1 Conviction at 70 lines is the biggest structural risk.** The attention bandwidth theory predicts agents process the first 20-25 lines of narrative deeply and then skim. A 70-line conviction section means lines 30-70 are effectively invisible.

**Proposed split:**

```
LAYER 1A: THESIS (10 lines)
- Thesis statement
- Three-word personality
- Beauty definition

LAYER 1B: TENSIONS + EXEMPLARS (25 lines)
- 4 resolved tensions (4 lines, table format)
- Quality exemplar: CD-006 (10 lines, code block)
- Quality exemplar: DD-006 (10 lines, code block)

LAYER 1C: EVIDENCE (15 lines)
- Anti-scale model (1 line formula)
- Smoking gun evidence (2 lines)
- Constraint pressure principle (2 lines)
- Iteration insight (2 lines)
```

This restructuring gives 3 short sections of 10-25 lines each, all within safe attention thresholds, with headers forcing re-engagement at each boundary.

**Layer 2 Execution Spec at 100-120 lines is safe ONLY if routed per-agent.** If any single agent reads all 100-120 lines, it consumes ~40-50 attention units on rules alone, leaving insufficient surplus. The outline already sub-divides into 2A-2E, which is correct. The structural risk is that the prompt presents 2A-2E as a single LAYER rather than as per-agent slices.

---

## 4. STRUCTURAL MARKER RECOMMENDATIONS -- Specific Formatting for Forced Attention

### Current State Assessment

| Marker Type | Present in Outline? | Assessment |
|-------------|-------------------|------------|
| ALL-CAPS headers | PARTIAL -- layer names are caps but sub-sections use mixed case | INSUFFICIENT -- all section headers must be ALL-CAPS to force re-engagement |
| Numbered rules | NO -- rules are described in prose clusters | CRITICAL GAP -- numbered rules force sequential processing |
| Visual separators between sections | NO (outline uses markdown headers only) | GAP -- separator lines (`---` or `===`) between major sections force attention reset |
| WARNING/CRITICAL/MUST markers | NO explicit markers in outline | CRITICAL GAP -- key rules lack salience markers |
| Code block formatting | NOT SPECIFIED | GAP -- CSS-level rules should be in code blocks (highest compliance format per E4 Section 3.5) |
| Checkbox format for self-check | NOT SPECIFIED | GAP -- self-check items must use `[ ]` format to trigger completion behavior |

### Recommendations

**R1: Add `===` separator lines between major layers.**
```
================================================================
LAYER 1: CONVICTION
================================================================
```
This forces an attention RESET at each layer boundary. Without separators, layers bleed into each other and the agent processes them as one continuous stream.

**R2: Number ALL rules within the execution spec.**
Instead of:
```
Container 940-960px, CPL 45-80, content-to-void >= 60:40, max void threshold...
```
Use:
```
RULE 1. Container: max-width 960px; margin: 0 auto;
RULE 2. CPL: 45-80 (formula: container-width / font-size / 0.6)
RULE 3. Void: no contiguous void > 2,160px (1.5 viewports)
```
Numbered rules allow the agent (and auditors) to reference rules by number. They also create an implicit count that agents process sequentially.

**R3: Mark the 3 kill criteria with `FAIL IF` prefix.**
```
FAIL IF: container width outside 940-960px
FAIL IF: content-to-void ratio < 60:40
FAIL IF: zero messages sent before file write
```
The `FAIL IF` prefix is a NEGATIVE framing marker that triggers heightened processing (E4 Section 3.4: negative rules consume ~1 attention unit vs ~2-4 for positive).

**R4: Use code block format for all CSS-level rules.**
Per E4 Section 3.5, code block format achieves HIGHEST compliance because agents treat code blocks as EXECUTABLE patterns to copy.
```css
/* SOUL -- copy these declarations exactly */
border-radius: 0;
box-shadow: none;
filter: none; /* no drop-shadow */
```

**R5: Use checkbox format for self-check.**
```
SELF-CHECK (run BEFORE writing file):
[ ] Container 940-960px
[ ] CPL 45-80
[ ] Content-to-void >= 60:40
```
Checkbox format triggers completion behavior -- the agent processes each item and "checks it off" mentally.

**R6: Add `CRITICAL:` prefix to the 5 most important rules.**
Overuse of emphasis markers degrades their salience (E4 Section 3.5 notes bold/caps "wears off after 3+ uses"). Limit CRITICAL markers to exactly 5 rules -- the 3 kill criteria + container + spatial anchors. All other rules use standard formatting.

---

## 5. VOICE AUDIT -- Passive to Imperative Conversions

### Scan Results from Prompt Outline

I scan the outline for passive voice, hedging language, and judgment-triggering phrases. The outline itself is a structural description, not the final prompt text, so I identify patterns that MUST NOT appear in the final prompt.

| Found in Outline | Voice Type | Risk | Imperative Conversion |
|-----------------|-----------|------|----------------------|
| "Quality exemplars" (line 29) | NEUTRAL | LOW | N/A (conviction content, not a rule) |
| "Prompt asks assembler to think holistically" (line 36) | PASSIVE | **HIGH** | "ASSEMBLER: For each layer, ask: what is MISSING that should be here?" |
| "Each rule tested: binary?, verification method?" (line 46) | PASSIVE | **HIGH** | "EVERY rule MUST pass: (1) Is it binary? (2) Does it have a verification method?" |
| "All resolved thresholds correct" (line 84) | PASSIVE | MODERATE | "VERIFY: every threshold matches the source document value." |
| "Adversarial reviewer: no path to 70% void" (line 88) | PASSIVE | MODERATE | "ADVERSARIAL CHECK: Can the builder produce 70% void while passing all rules? If YES, add a rule." |
| "Level 2 observations documented" (line 91) | PASSIVE | MODERATE | "DOCUMENT all Level 2 observations in the LIVING-STATE file." |

### Hedging Language Audit

Per E4 Section 5.4, these words MUST NEVER appear in the execution spec:

| Banned Word | Effect | Found in Outline? |
|-------------|--------|-------------------|
| `should` | Permission to not comply | NOT FOUND (good) |
| `consider` | Agent considers and moves on | NOT FOUND (good) |
| `ensure` | Vague obligation | NOT FOUND (good) |
| `aim for` | Permission to miss | NOT FOUND (good) |
| `try to` | Permission to fail | NOT FOUND (good) |
| `ideally` | Discounted to zero | NOT FOUND (good) |
| `appropriate` | Agent uses own judgment | NOT FOUND (good) |
| `where possible` | Agent decides not possible | NOT FOUND (good) |
| `feel` | Unmeasurable | NOT FOUND in rules (appears in conviction as "beauty definition" which is appropriate) |

**VERDICT: The outline itself is clean of hedging language.** This is a STRUCTURAL strength. The risk is that the final prompt assembler introduces hedging during prose expansion. RECOMMENDATION: Add to the assembly instructions: "ZERO TOLERANCE for should/consider/ensure/aim/try/ideally/appropriate/feel in Layers 2-3. Run automated grep before finalizing."

### Imperative Voice Pattern

The optimal pattern from E4 is: `[SUBJECT] MUST [VERB] [EXACT VALUE]. Verify: [METHOD].`

All rules in the execution spec (Layer 2) MUST follow this pattern. Conviction (Layer 1) is exempt -- it uses narrative voice intentionally.

---

## 6. RESILIENCE MATRIX -- Section Independence Assessment

The question: If an agent SKIPS an entire section, do the remaining sections still make sense?

| Section Skipped | Impact on Other Sections | Independence Rating | Recommendation |
|----------------|------------------------|--------------------|----|
| 1. PREAMBLE skipped | NO IMPACT. No other section references preamble content. | FULLY INDEPENDENT | SAFE to skip (and agents probably WILL skip motivational context) |
| 2. READING LIST skipped | MODERATE IMPACT. Agents won't know which files to read. BUT if file paths are embedded in per-agent prompts, the reading list becomes redundant. | CONDITIONALLY INDEPENDENT | SAFE if file paths are routed per-agent |
| 3. CONVICTION skipped | **HIGH IMPACT on builder quality.** Conviction shapes the qualitative frame. If skipped, builder produces technically correct but soulless output. BUT no other SECTION depends on conviction content. | FUNCTIONALLY INDEPENDENT but quality-degraded | RECOMMENDATION: Embed a 1-paragraph conviction summary in the builder's prompt header so conviction is never fully lost even if the full Layer 1 is skipped. |
| 4. EXECUTION SPEC skipped | **CATASTROPHIC.** This is the core of the prompt. If skipped, nothing works. | FULLY DEPENDENT -- ALL other sections assume execution spec is read | This section MUST be split per-agent so each agent gets a SHORT, targeted slice they WILL read in full. |
| 5. COORDINATION skipped | **HIGH IMPACT on team-lead.** Builder can still build without knowing the full coordination spec. Auditor can still audit. But team-lead cannot coordinate without this. | ROLE-DEPENDENT | SAFE for non-team-lead agents. CRITICAL for team-lead. |
| 6. REFERENCE LIBRARY skipped | LOW IMPACT. References are on-demand. Missing the directory means agents ask for files by name instead of path. | MOSTLY INDEPENDENT | SAFE |
| 7. TEAM TOPOLOGY skipped | LOW IMPACT on agents (they know their own role). HIGH IMPACT on team-lead (needs to know the full pipeline). | ROLE-DEPENDENT | Route to team-lead only |
| 8. PRINCIPLES skipped | **MODERATE IMPACT.** Principles inform meta-reasoning. If skipped, agents may make judgment calls that violate principles. BUT principles are abstract -- agents rarely reference them during execution. | MOSTLY INDEPENDENT (principles are ambient, not actionable) | SAFE to move to conviction or appendix |
| 9. SUCCESS CRITERIA skipped | LOW IMPACT on builder. **HIGH IMPACT on auditor/synthesizer.** | ROLE-DEPENDENT | Route to auditor/synthesizer only |

### Cross-Reference Dependencies

| Section A | References Content From Section B | Dependency Type |
|-----------|----------------------------------|-----------------|
| 4 (Execution) | 3 (Conviction) -- thesis, personality | WEAK (execution rules are self-contained; conviction adds meaning but isn't required for compliance) |
| 5 (Coordination) | 4 (Execution) -- gates reference execution rules | MODERATE (gates check execution rule compliance; gate definitions should INCLUDE the rule threshold) |
| 9 (Success Criteria) | 4 (Execution) -- criteria map to execution rules | MODERATE (criteria should restate thresholds, not reference them by section number) |
| 7 (Topology) | 5 (Coordination) -- phases reference agent roles | STRONG (topology phases depend on role definitions) |

### Resilience Verdict

**The prompt has 2 STRONG dependencies and 2 MODERATE dependencies.** The strongest risk is Section 5 (Coordination) depending on Section 4 (Execution): if gates reference rules by number ("Rule 3: void budget") rather than by content ("void budget >= 60:40"), then skipping the execution spec makes gates meaningless.

**RECOMMENDATION: Every gate definition MUST restate the threshold it checks.** Never reference "see Rule X" -- always inline the value.

Example of FRAGILE gate:
```
GATE CP-2: Verify Rule 3 passes.
```

Example of RESILIENT gate:
```
GATE CP-2: Content-to-void ratio >= 60:40. Calculate: sum(content-element-heights) / total-scroll-height.
```

---

## 7. WALL OF TEXT FINDINGS -- Line Length and Paragraph Break Recommendations

### Line Length Analysis

The outline does not contain final prompt text, but the PATTERNS described imply certain line lengths. I analyze the structural patterns:

| Pattern | Typical Line Length | Wall Risk | Recommendation |
|---------|-------------------|-----------|----------------|
| File paths (Section 2) | 80-120 chars per path | **HIGH** if paths are prose-embedded | Use bulleted list, one path per line, max 80 chars |
| Rule + verification (Section 4) | 80-120 chars | MODERATE | Rule on line 1, verification on line 2 (indented). Never combine into single line >100 chars. |
| Agent descriptions (Section 5) | 60-100 chars per agent | LOW | Table format handles this well |
| Principles (Section 8) | 40-80 chars | LOW | Numbered list, naturally short |
| Success criteria (Section 9) | 60-100 chars per criterion | MODERATE | Numbered list with max 80 chars per item |

### Paragraph Length Analysis

The conviction section (Layer 1) is the highest wall-of-text risk because it is NARRATIVE content.

| Sub-section | Risk | Recommendation |
|-------------|------|----------------|
| Thesis + beauty definition | 2-3 paragraphs = SAFE | Keep as-is |
| 4 resolved tensions | Could be 4 paragraphs = **WALL RISK** | Convert to TABLE: `| Tension | Warm/Not-Soft | Description |` |
| Quality exemplars (20 lines each) | 2 x 20 = 40 lines of dense description = **SEVERE WALL** | Use CODE BLOCK format for exemplars. Code blocks create visual breaks and trigger pattern-matching processing. |
| Anti-scale model + evidence | 4-5 paragraphs = **WALL RISK** | Convert formula to code block: `Richness = semantic_density * restraint * spatial_confidence`. Evidence as 2-line bullet points. |

### Terminal Display Considerations

When rendered in a terminal (which is how Claude Code agents see prompts), the effective display width is ~100-120 characters. Lines >120 chars wrap awkwardly, breaking mid-word.

**Hard rule: NO line in the final prompt may exceed 100 characters.** This prevents terminal wrap-breaks that create visual confusion.

**The reading list (66+ file paths) is the worst offender.** Absolute file paths like:
```
design-system/compositional-core/grammar/mechanism-catalog.md
```
are 62 characters. With a layer label prefix they approach 80-90 chars. Acceptable, but must be one-per-line with no additional description on the same line.

---

## 8. ANTI-SKIMMING TECHNIQUE DEPLOYMENT -- Which Techniques for Which Sections

### Technique Inventory (from E4 and attention theory)

| # | Technique | Mechanism | Cost | Where to Deploy |
|---|-----------|-----------|------|-----------------|
| T1 | Numbered rules | Agents process numbers sequentially; enables rule-by-number reference | ~0 extra | Layer 2 (Execution Spec) |
| T2 | Call-and-response | Agent must ECHO a rule to confirm reading (e.g., "State your container width before proceeding") | ~1 attention unit per call | 3 kill criteria only (overuse = fatigue) |
| T3 | Primacy loading | Most critical rules FIRST in each section | ~0 extra | ALL sections |
| T4 | Rule caps per section | ~10 rules max per section | ~0 extra | ALL sections (structural constraint) |
| T5 | Agent-specific sections | Builder reads ONLY builder rules | ~0 extra (saves attention) | Layer 2, Layer 3, Layer 5 |
| T6 | Code block format | Treated as executable, highest compliance | ~0 extra | Soul rules, CSS rules, self-check |
| T7 | Checkbox format | Triggers completion behavior | ~0 extra | Self-check section |
| T8 | Table format | Structured, forces completeness (empty cells visible) | ~0 extra | Mechanism table, tension table, roster |
| T9 | `FAIL IF` prefix | Negative framing triggers heightened processing | ~0 extra | 3 kill criteria only |
| T10 | `===` separators | Force attention reset at section boundaries | ~0 extra | Between all major layers |

### Deployment Matrix

| Section | T1 Numbered | T2 Echo | T3 Primacy | T4 Cap | T5 Per-Agent | T6 Code | T7 Checkbox | T8 Table | T9 FAIL IF | T10 Separator |
|---------|:-----------:|:-------:|:----------:|:------:|:------------:|:-------:|:-----------:|:--------:|:----------:|:-------------:|
| Preamble | - | - | - | - | - | - | - | - | - | YES |
| Reading List | - | - | - | - | **YES** | - | - | YES | - | YES |
| Conviction | - | - | YES | - | - | YES (exemplars) | - | YES (tensions) | - | YES |
| Execution 2A | **YES** | - | **YES** | YES (10) | **YES** | **YES** | - | - | **YES** | YES |
| Execution 2B | **YES** | - | YES | YES (10) | **YES** | **YES** | - | - | - | - |
| Execution 2C | **YES** | - | YES | YES (8) | **YES** | - | - | **YES** | - | - |
| Execution 2D | **YES** | **YES** | YES | YES (5) | **YES** | - | - | - | - | - |
| Execution 2E | **YES** | - | YES | YES (11) | **YES** | - | **YES** | - | - | YES |
| Coordination 3A | - | - | - | - | **YES** | - | - | **YES** | - | YES |
| Coordination 3B | **YES** | **YES** | YES | YES (5) | **YES** | - | - | - | - | - |
| Coordination 3C | - | - | YES | - | **YES** | - | - | - | - | - |
| Reference Library | - | - | - | - | **YES** | - | - | **YES** | - | YES |
| Team Topology | - | - | - | - | - | - | - | **YES** | - | YES |
| Principles | **YES** | - | YES | YES (10) | - | - | - | - | - | YES |
| Success Criteria | **YES** | - | YES | YES (10/7 split) | **YES** | - | **YES** | - | - | YES |

### Key Deployment Notes

**T2 (Call-and-response) is deployed at ONLY 2 points:**
1. In Section 2D (Process): "BUILDER: Before writing file, state your container width and content-to-void ratio in your message to planner." This forces the builder to ARTICULATE the two most critical measurements.
2. In Section 3B (Communication): "BUILDER: Your first message to planner MUST include your biggest spatial concern." This forces spatial awareness.

**T2 is NOT deployed broadly** because call-and-response costs ~1 attention unit per instance. More than 3 instances creates fatigue and the technique loses effectiveness.

**T5 (Per-agent sections) is the MOST IMPORTANT technique.** The single highest-leverage structural change is ensuring no agent reads content intended for a different role. The builder MUST NOT see auditor criteria. The auditor MUST NOT see build process rules. The team-lead sees coordination, not build details.

---

## 9. REFORMATTED SECTION EXAMPLES -- Before/After Structural Improvements

### Example 1: Reading List (Section 2)

**BEFORE (outline structure -- 30 lines, 66+ file paths, wall of references):**
```
### 2. READING LIST (66+ files across 6 layers)
- Layer A: 24 pre-flight files (master checklist, gap analysis, crossref,
  E1-E4, S1-S4, V1-V3, states, extractions)
- Layer B: 21 flagship preparation files (01-21)
- Layer C: 6 enriched design system files (prohibitions, mechanism-catalog,
  tokens, semantic-rules, TC skill, PA skill)
- Layer D: 2 crown jewels (CD-006 + DD-006)
- Layer E: 12 experiment research files (6 scale exploration + 6 flagship prep)
- Layer F: Ceiling + middle experiment artifacts
```

**AFTER (per-agent routing, each agent sees 5-10 paths max):**
```
================================================================
READING LIST -- ROUTED BY ROLE
================================================================

IF YOU ARE THE BUILDER, READ:
  1. [build plan file]        -- your construction blueprint
  2. tokens.css               -- variable reference
  3. prohibitions.md          -- soul identity rules
  4. [metaphor derivation]    -- 1-paragraph metaphor summary

IF YOU ARE THE PLANNER, READ:
  1. mechanism-catalog.md     -- full mechanism descriptions
  2. semantic-rules.md        -- compositional grammar
  3. [content inventory]      -- source material
  4. [metaphor derivation]    -- metaphor-mechanism mapping

IF YOU ARE THE AUDITOR, READ:
  1. PA SKILL.md              -- 48 evaluation questions
  2. [success criteria file]  -- pass/fail thresholds
  3. [build plan]             -- planned vs deployed comparison

IF YOU ARE THE TEAM-LEAD, READ:
  [all Layer A pre-flight files -- team-lead has budget for comprehensive reading]
```

**Structural improvement:** Each agent sees 4-5 paths instead of 66+. The routing format (`IF YOU ARE THE [ROLE]`) is an agent-specific section (T5) that makes irrelevant content self-filtering.

### Example 2: Execution Spec 2A Spatial (currently 10 concepts in ~15 lines)

**BEFORE (dense, undifferentiated rule block):**
```
### 2A SPATIAL (~15 lines)
Container 940-960px, CPL 45-80, content-to-void >= 60:40, max void threshold,
empty elements, heading spacing, max spacing 96px, header proportion, footer,
content distribution
```

**AFTER (numbered, grouped, with kill criteria marked):**
```
================================================================
SPACE -- 10 rules, 3 groups
================================================================

FAIL IF:
  1. Container width outside 940-960px
     Verify: querySelector('.page-container').getBoundingClientRect().width
  2. Content-to-void ratio < 60:40
     Verify: sum(element heights with content) / total scroll height

LANDMARKS:
  3. Header: <= 20% of first viewport (288px at 1440px)
  4. Footer: MUST exist with visible content
  5. All planned sections present, each with >= 200px of content
  6. No empty structural elements (every classed div has child content)

SPACING:
  7. CPL: 45-80 (formula: (content-width) / (font-size) / 0.6)
  8. Heading spacing ratio >= 1.5:1 (space-above / font-size)
  9. Max spacing between any two content elements: 96px
  10. No contiguous void > 2,160px (1.5 viewports at 1440px)
```

**Structural improvements:**
- Numbered (T1) for sequential processing and reference
- Grouped into 3 sub-blocks of 2-4 rules each (under T4 cap)
- Kill criteria marked with `FAIL IF` prefix (T9)
- Verification methods inline (E4 Law 3)
- Each rule is 1-2 lines (E4 Law 4)
- Visual separator at top (T10)

### Example 3: Self-Check Section (currently described but not formatted)

**BEFORE (outline description):**
```
### 2E BUILDER SELF-CHECK (~15 lines)
Container width, CPL, content-to-void, token compliance, soul 8/8,
header+footer, sections, rhythm, designed moment, transition grammar,
spatial budget
```

**AFTER (checkbox format, call-and-response, recency position):**
```
================================================================
SELF-CHECK -- RUN BEFORE WRITING FILE
================================================================

[ ] Container 940-960px        (getBoundingClientRect at 1440px viewport)
[ ] CPL 45-80                  (content-width / font-size / 0.6)
[ ] Content-to-void >= 60:40   (content heights / total scroll)
[ ] Token compliance >= 80%    (var() count / total declarations)
[ ] Soul 8/8                   (border-radius:0, box-shadow:none, no
                                drop-shadow, no rgba, no gradient,
                                no pure B/W, Instrument Serif display
                                only, h3 italic)
[ ] Header < 20% of viewport + footer present with content
[ ] All planned sections present with >= 200px content each
[ ] >= 3 transition types, no identical adjacent
[ ] >= 1 designed moment per scroll quartile
[ ] Heading spacing >= 1.5:1

AFTER SELF-CHECK, SEND MESSAGE TO PLANNER:
  "Container: ___px. Content ratio: __:__. Biggest concern: ___"

AFTER WRITING FILE, SEND MESSAGE TO TEAM-LEAD:
  "Page height: ___px. Content ratio: __%. Sections: __. Deviations: ___"
```

**Structural improvements:**
- Checkbox format (T7) triggers completion behavior
- Each item includes verification formula (E4 Law 3)
- Call-and-response (T2) at the end forces the builder to articulate measurements
- RECENCY POSITION -- this should be the LAST section the builder sees
- 10 items (under T4 cap of ~10)

### Example 4: Conviction Section Opening (currently 70 lines narrative)

**BEFORE (70-line narrative block):**
```
### 3. LAYER 1: CONVICTION (~70 lines)
Thesis: "difference between Flagship and Ceiling is not complexity — it is restraint"
Beauty definition: "confident intention at every scale of attention"
Three-word personality: "Warm. Authoritative. Unhurried."
4 resolved tensions: warm/not-soft, austere/not-cold, authoritative/not-aggressive,
  restrained/not-empty
Quality exemplars: 20 lines CD-006 (designed transition zone) + 20 lines DD-006
  (fractal coherence)
...
```

**AFTER (sub-sectioned with visual variety):**
```
================================================================
LAYER 1: CONVICTION -- Why This Page Matters
================================================================

THESIS:
The difference between Flagship and Ceiling is not complexity.
It is restraint. Beauty is confident intention at every scale
of attention.

PERSONALITY: Warm. Authoritative. Unhurried.

TENSIONS:
| Axis              | IS              | IS NOT          |
|-------------------|-----------------|-----------------|
| Temperature       | Warm            | Soft            |
| Restraint         | Austere         | Cold            |
| Authority         | Authoritative   | Aggressive      |
| Density           | Restrained      | Empty           |

================================================================

WHAT "DESIGNED" LOOKS LIKE -- CD-006 Evidence:

```css
/* Transition zone between Overview and Status sections */
.section-divider {
  border-top: 1px solid var(--border-subtle);
  margin: 48px 0;
  /* 48px breathing room + 1px separator = SMOOTH transition */
  /* The gap MEANS something: topic shift, not continuation */
}
```

ANTI-SCALE MODEL:
  Richness = semantic_density * restraint * spatial_confidence

EVIDENCE:
  - 2 scales, PA-05 4/4 DESIGNED (Middle experiment)
  - 4 scales, PA-05 1.5/4 DO NOT SHIP (Ceiling experiment)
  - Conclusion: fewer scales + more restraint = better quality

================================================================
```

**Structural improvements:**
- Split into 3 sub-sections with `===` separators (T10)
- Tensions converted to table (T8)
- Exemplar in code block (T6) for highest engagement
- Formula in code block
- Evidence as bullet points (not paragraph)
- No sub-section exceeds 20 lines

---

## 10. CONSOLIDATED RECOMMENDATIONS -- Priority-Ordered

### BLOCKING (must fix before prompt assembly)

1. **Move preamble out of primacy position.** First 5 lines must be: mission, kill criteria, conviction frame, role declaration, and top binary rule. The motivational weight statement goes to a human-facing appendix.

2. **Route reading list per-agent.** No agent should see more than 10 file paths. Use `IF YOU ARE THE [ROLE]` conditional formatting.

3. **Split conviction into 3 sub-sections of <= 25 lines each.** Use `===` separators between sub-sections. Convert tensions to table. Put exemplars in code blocks.

4. **Route execution spec per-agent.** Builder gets 2A + 2B + 2E (~40 lines). Planner gets 2C output via build plan. Team-lead gets 2D. No agent reads all 100-120 lines.

5. **Number ALL rules in the execution spec.** Use `RULE N.` prefix for sequential processing and auditable reference.

6. **Place self-check in RECENCY position.** It must be the LAST section the builder reads. Include call-and-response requiring the builder to state measurements.

7. **Split success criteria: binary (10, in prompt) vs qualitative (7, auditor-only).**

### SIGNIFICANT (should fix, quality impact)

8. **Add `===` separator lines between ALL major layers.** Forces attention reset.

9. **Mark exactly 3 kill criteria with `FAIL IF` prefix.** No more than 3 to preserve salience.

10. **Use code block format for all CSS-level rules** (soul, container, typography).

11. **Use checkbox format for self-check items.**

12. **Cap every section at 10 rules.** If a section exceeds 10, split into sub-sections.

13. **Make every gate definition self-contained.** Never reference "see Rule X." Always inline the threshold value.

### MINOR (nice to have, marginal impact)

14. **Enforce 100-character line length maximum** for terminal display readability.

15. **Add automated grep for banned hedging words** (should/consider/ensure/aim/try/ideally/appropriate/feel) as a pre-assembly validation step.

16. **Add a 1-paragraph conviction summary to the builder prompt header** as insurance against conviction section being skimmed.

---

## 11. STRUCTURAL RISK SUMMARY

| Risk | Severity | Current State | Mitigation |
|------|----------|---------------|------------|
| Primacy position wasted on motivational narrative | **CRITICAL** | Preamble occupies first 15 lines | Move to appendix; front-load kill criteria |
| 66+ file paths in one block | **CRITICAL** | Reading list is undifferentiated | Route per-agent |
| 70-line conviction = attention cliff at line 25 | **HIGH** | Single narrative block | Split into 3 x 25-line sub-sections |
| 100-120 line execution spec = full-layer skim | **HIGH** | Sub-sectioned (good) but presented as one layer | Route per-agent |
| No numbered rules | **HIGH** | Rules described in prose clusters | Add `RULE N.` prefix |
| Self-check not in recency position | **HIGH** | Position unclear in outline | Move to final section |
| 17 success criteria exceed 10-item cap | **MODERATE** | Single numbered list | Split binary/qualitative |
| No visual separators between layers | **MODERATE** | Markdown headers only | Add `===` separator lines |
| Gates may reference rules by number not value | **MODERATE** | Not specified | Inline all thresholds |
| No code block formatting specified for CSS rules | **MODERATE** | Format not specified | Use code blocks |

**Overall structural readiness: 4/10.** The content is well-researched and the right items are present, but the FORM of the prompt will cause significant skimming if assembled without the structural changes recommended above. The content-form mismatch is the primary risk: excellent content in a form that agents will skim.

---

**END STRUCTURAL ANTI-SKIMMING AUDIT**
**Lines:** ~470
**Core finding:** Prompt has correct CONTENT but wrong FORM for agent consumption. 7 BLOCKING structural changes needed.
**Highest-leverage fix:** Front-load kill criteria in primacy position + route content per-agent + split sections at attention cliff boundaries.
**Key principle from E4 confirmed:** "A single judgment rule in a list of binary rules makes the builder treat ALL rules as potentially soft." The structural corollary: a single wall-of-text section makes the agent treat ALL sections as skimmable.

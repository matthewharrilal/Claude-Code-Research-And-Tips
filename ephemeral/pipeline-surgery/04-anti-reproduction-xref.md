# Anti-Reproduction Cross-Reference Audit

**Agent:** xref-anti-reproduction (Opus 4.6)
**Date:** 2026-02-20
**Purpose:** Verify that the 4 pipeline files being modified do NOT reproduce the 7 diagnosed failure modes.
**Files audited:**
1. `~/.claude/skills/build-page/SKILL.md` (470 lines)
2. `design-system/pipeline/conventions-brief.md` (531 lines)
3. `design-system/pipeline/gate-runner.md` (1,160 lines)
4. `design-system/pipeline/flagship-pa-questions.md` (159 lines)

**Research files cross-referenced:**
- `anti-reproduction-protocol.md` (7 gates + 5 meta-protections)
- `codification-map.md` (10 changes)
- `pipeline-v2-architecture.md` (unified architecture)
- `hidden-questions.md` (blind spots)

---

## SECTION 1: Gate-by-Gate Check

### GATE 1: THE 50:1 COMPRESSION GATE
**Rule:** Every rule must include (a) concrete value/element name, (b) provenance citation, (c) violation example.

**Status: PARTIALLY ADDRESSED**

**Evidence FOR compliance:**
- `conventions-brief.md` lines 53-68: Perception section gives concrete values (15 RGB, 2px, 0.025em, 120px) with provenance ("The failed Flagship experiment proved this").
- `gate-runner.md` lines 296-313: SC-01 has provenance ("Provenance: #1 Phase D failure mode"), fix recipe with CSS, concrete threshold (940-960px).
- `gate-runner.md` lines 349-351: SC-09 has provenance, fix recipe with alternative CSS values.
- `conventions-brief.md` lines 107-116: Multi-coherence perception thresholds table has specific values per channel.

**Evidence of VIOLATION:**
- `conventions-brief.md` lines 73-89: Section 3 (Richness) contains abstract rules WITHOUT Gate 1 compliance. "Richness = semantic density x restraint x spatial confidence" -- no provenance citation, no violation example. "At least 2 distinct component types per viewport-height screenful" -- no provenance, no violation example.
- `conventions-brief.md` lines 181-198: Fractal Echo scale table has thresholds but NO provenance citations and NO violation examples. "Header padding >= 48px" -- from where? ">= 2 component types per viewport" -- based on what experiment?
- `conventions-brief.md` line 83: "The Flagship spent 238 lines on invisible variation" -- provenance exists inline but is not formatted as Gate 1 requires ("From [file]: [finding]").
- `SKILL.md` line 16: "container 940-960px" -- no formal provenance citation.
- `SKILL.md` line 335: ">= 14 mechanisms" quality floor -- no provenance citation, no violation example. This is a CONCRETE VALUE but lacks the other two Gate 1 elements.
- `flagship-pa-questions.md`: By design, PA questions are judgment-based (PA SKILL is the Gate 2 escape hatch for fresh-eyes), so Gate 1 is N/A for this file.

**Verdict:** ~60% compliant. The perception/identity sections are strong. The richness/fractal/quality-floor sections lack provenance and violation examples. Gate 1's 3-element format (value + provenance + violation) is NOT systematically applied.

---

### GATE 2: THE JUDGMENT RULE GATE
**Rule:** Every rule must be testable by a programmatic check returning PASS/FAIL with zero judgment.

**Status: LARGELY ADDRESSED**

**Evidence FOR compliance:**
- `gate-runner.md`: All 22 gates are binary PASS/FAIL with JavaScript code. No judgment verbs in gate definitions.
- `conventions-brief.md` lines 108-116: Perception threshold table is binary (>= N or < N).
- `SKILL.md` lines 159-176: Gate summary table is all binary thresholds.
- `conventions-brief.md` lines 330-343: Quality floor (Section 9B) uses binary minimums (>= 14 mechanisms, >= 800 CSS lines, >= 3 channel shifts).

**Evidence of VIOLATION:**
- `conventions-brief.md` line 87: "could I describe this page's personality in 3 adjectives?" -- JUDGMENT question with no programmatic check.
- `conventions-brief.md` lines 364-378: "Five Questions" (Section 11) are ALL judgment-based: "Lean back and squint," "does the skeleton alone communicate structure?" These have no binary answer.
- `conventions-brief.md` line 236: "A metaphor whose organizing influence a reader perceives through CSS treatment alone" -- judgment rule disguised as physics.
- `conventions-brief.md` line 251: "If no metaphor emerges... build without one" -- judgment escape hatch without binary criteria for when to invoke it.

**Verdict:** ~75% compliant. Gate-runner is fully binary. Conventions-brief has ~5 judgment rules embedded in narrative sections (Richness, Fractal Echo, Metaphor, Five Questions). The anti-reproduction protocol permits ONE judgment check (fresh-eyes PA-05) -- but the conventions-brief has 5+ additional judgment elements that are NOT fresh-eyes administered. The "Five Questions" (Section 11) are explicitly framed as "compositional mirrors" with "no pass state," which is an honest framing but technically violates Gate 2.

**Mitigation:** The conventions-brief is builder-facing RECIPE content, not gate content. Gate 2's escape hatch allows converting judgment rules to recipe steps ("Set X to Y"). Sections 1-4 and 8 of the conventions-brief are effectively recipe steps with specific values. Sections 3, 5, 6, and 11 contain judgment guidance that the builder uses for creative decisions (within Gate 2's "recipe steps don't need rules" exemption). This is TOLERABLE if the conventions-brief is understood as recipe + creative guidance, not as a checklist of verifiable rules.

---

### GATE 3: THE GUARDRAIL-TO-PLAYBOOK RATIO GATE
**Rule:** Guardrails:Playbooks <= 1:1 in execution sections.

**Status: WELL ADDRESSED**

**Evidence FOR compliance:**
- `conventions-brief.md`: Overwhelmingly recipe/playbook format. Counted samples:
  - Section 1 (Identity): 6 constraint lines + 4 recipe values (palette) + 5 spacing values + typography specification = ~2:3 guardrail:playbook.
  - Section 2 (Perception): Physics framing -- values given as "physics of visibility" rather than "must not" rules. ~0:8 ratio.
  - Section 8 (CSS Vocabulary): Pure playbook. 7 pattern recipes, zero prohibitions. ~0:12.
  - Section 12 (Restraint): 10 prohibitions, zero playbooks. ~10:0. BUT this section is explicitly marked as "IDENTITY -- READ ONCE" which is exempt per Gate 3's escape hatch.
- `SKILL.md` lines 70-119: Builder spawn prompt is recipe-dominant. "Read these files IN THIS ORDER," "Write 3 files to [output-directory]."
- `gate-runner.md`: Fix recipes accompany every gate failure. Each FAIL includes "instruction," "css," "alternative," "reference." This is playbook content.

**Evidence of concern:**
- `SKILL.md` lines 462-470: Section 10 (Non-Negotiables) is 7 guardrails with zero paired playbooks. BUT these are identity constraints (soul), exempt per Gate 3 escape hatch.
- `conventions-brief.md` Section 12 (Restraint List): 10 guardrails, zero playbooks. Explicitly identity-level, exempt.

**Verdict:** ~85% compliant. Execution sections (Sections 2, 4, 5, 7, 8, 9, PROCESS) are playbook-dominant. Identity sections (1, 12) are guardrail-dominant but exempt. The conventions-brief is a RECIPE by construction -- it was designed from the ground up as a world-description, not a constraint list. This directly addresses the "guardrail factory" root cause.

---

### GATE 4: THE BUILDER VISIBILITY GATE
**Rule:** Builder spec must be self-contained -- every CSS value the builder needs must be in the documents they read.

**Status: WELL ADDRESSED**

**Evidence FOR compliance:**
- `SKILL.md` lines 80-89: Builder reads 7 files explicitly enumerated. The conventions-brief + mechanism-catalog + components.css + tokens.css + prohibitions.md = complete vocabulary.
- `conventions-brief.md`: Contains inline CSS values for all critical properties: palette hex codes (lines 31-47), spacing scale (line 28), perception thresholds (lines 107-116), border budget (line 291), component DNA (line 287), dark slab values (line 293), callout colors (lines 295), syntax highlighting (line 299), layout topologies (lines 301-307), drop cap (line 310), responsive breakpoints (lines 453-456), accessibility requirements (lines 431-444).
- `SKILL.md` line 86: Builder receives mechanism-catalog.md (FULL file, not "first 200 lines").
- `SKILL.md` line 104: "YOUR CREATIVE AUTHORITY: You may override ANY non-soul value" -- builder has full creative freedom within soul constraints.

**Evidence of concern:**
- Perception thresholds appear in BOTH conventions-brief.md (Section 2, lines 53-68; Section 4, lines 107-116) AND gate-runner.md (embedded in each gate). The values are consistent (15 RGB, 2px, 0.025em, 120px). No divergence detected. BUT if one file is updated without the other, a split could emerge.
- The TC brief (`_tc-brief.md`) is generated per-build by the TC agent. Its content is NOT pre-specified. If the TC agent produces a brief that contradicts the conventions brief, the builder has conflicting specs. No conflict resolution protocol exists.

**Verdict:** ~90% compliant. The builder receives a comprehensive, self-contained spec. The main risk is TC-brief vs conventions-brief conflict (no resolution protocol) and dual-source perception thresholds (consistency now, drift risk later).

---

### GATE 5: THE QUALITY ROUTING GATE
**Rule:** CSS-containing files go to CSS-writing agents. Research files go to planning agents.

**Status: WELL ADDRESSED**

**Evidence FOR compliance:**
- `SKILL.md` lines 80-89: Builder receives:
  1. `_tc-brief.md` (content analysis -- appropriate for builder)
  2. `conventions-brief.md` (CSS recipes -- appropriate for builder)
  3. Content file (appropriate for builder)
  4. `mechanism-catalog.md` (CSS patterns -- appropriate for builder)
  5. `components.css` (CSS library -- appropriate for builder)
  6. `tokens.css` (CSS variables -- appropriate for builder)
  7. `prohibitions.md` (soul constraints -- appropriate for builder)
- `SKILL.md` lines 30-57: TC agent receives content + TC SKILL.md (research/analysis -- appropriate for planner).
- PA auditors receive screenshots only (lines 251-271) -- zero CSS context, zero build context. Appropriate for fresh-eyes.

**Evidence of concern:**
- None detected. The routing is explicit and well-reasoned. CSS-rich files go to the CSS-writing builder. Research/analysis stays with the TC planner. PA auditors are information-isolated.

**Verdict:** ~95% compliant. Routing is correct and explicit. The mechanism catalog is routed to the builder (fixing the flagship failure where it went to the planner only). The one gap: the TC agent also benefits from mechanism-catalog.md for mechanism selection (Phase 3), but currently only receives SKILL.md + content. However, TC SKILL.md Phase 3 references the mechanism catalog by path, so the TC agent can read it when needed.

---

### GATE 6: THE META-TO-OUTPUT RATIO GATE
**Rule:** Meta:Output <= 10:1. If exceeded, stop analyzing and start codifying.

**Status: ACTIVELY BEING ADDRESSED (by this pipeline surgery)**

**Evidence:**
- The 4 pipeline files being written/modified ARE the output. Combined: SKILL.md (470 lines) + conventions-brief.md (531 lines) + gate-runner.md (1,160 lines) + flagship-pa-questions.md (159 lines) = **2,320 lines of output**.
- Meta lines (ephemeral/ corpus): ~27,000+ lines from pipeline analysis + 6 meta-cognitive files + various research.
- **Current ratio: ~12:1** (improving from infinity:1, but still above 10:1 threshold).

**Verdict:** WATCH. The pipeline surgery is the codification action Gate 6 demands. After these files are finalized, the ratio should be ~10-12:1. Further analysis before these files are complete would violate Gate 6.

---

### GATE 7: THE RECIPE-VS-CHECKLIST GATE
**Rule:** Building phases use recipe verbs (Set, Write, Add, Create), not checklist verbs (Verify, Ensure, Must be, Fail if).

**Status: WELL ADDRESSED**

**Evidence FOR compliance:**
- `conventions-brief.md` PROCESS section (lines 487-527): Pure recipe format. "Read the content markdown," "Write your conviction statement," "HTML skeleton first," "Then CSS, working BOUNDARY BY BOUNDARY." Action verbs throughout.
- `conventions-brief.md` Section 8 (CSS Vocabulary): Recipe patterns with specific CSS values. "Every component has a sparse LABEL zone and a dense BODY zone" followed by exact CSS properties.
- `conventions-brief.md` Section 4 (Multi-Coherence): Recipe format for boundary CSS. Lines 503-517 give a concrete boundary CSS recipe with comments explaining each channel.
- `SKILL.md` lines 92-103: Builder process is recipe format. "Phase A: Read the TC brief," "Phase B: Plan," "Phase C: Build," "Phase D: Self-verify." Action verbs with deliverables.

**Evidence of concern:**
- `conventions-brief.md` lines 330-343 (Quality Floor, Section 9B): Uses minimum-threshold format (">= 14 mechanisms," ">= 800 CSS lines"). These are CHECKLIST items (thresholds to verify). Per Gate 7's escape hatch, verification sections are exempt. BUT Section 9B is labeled "Quality Floor" and positioned BEFORE the PROCESS section, making it ambiguous whether it's a build target or a verification gate.
- `SKILL.md` lines 97-101: Builder self-check items during Phase C use checklist format ("All adjacent zone bg deltas >= 15 RGB?" "3+ distinct typography zones?"). These are MICRO-GATES embedded in the build process. Per Gate 7's escape hatch, verification phases are exempt. BUT these are mid-build verification, not post-build, creating a checklist flavor during the recipe.

**Verdict:** ~80% compliant. The primary build flow (conventions-brief PROCESS, SKILL.md builder prompt) is recipe-dominant. Quality floors and mid-build checks introduce checklist elements, but these serve as verification pauses within a recipe flow (analogous to "check your oven temperature" mid-recipe). The escape hatch covers these.

---

## SECTION 2: Codification Map Coverage

### Change 1: Recipe Format, Not Checklist
**Target:** TC SKILL.md Phase 4 opening
**Status in pipeline files:** SUPERSEDED. The conventions-brief.md IS the recipe. It was written as a world-description with recipe-format process guidance. The TC SKILL.md Phase 4 edit described in the codification map is LESS relevant now because the builder reads conventions-brief.md (pure recipe) rather than TC SKILL.md Phase 4 directly.
**Coverage:** ADDRESSED by different mechanism (conventions-brief replaces the need for Phase 4 recipe header in TC SKILL.md).

### Change 2: Perception Thresholds in Every Gate
**Target:** PA SKILL.md -- add perception threshold table
**Status in pipeline files:** ADDRESSED.
- `conventions-brief.md` lines 53-68 and 107-116: Perception thresholds embedded in builder-facing spec.
- `gate-runner.md` SC-09 (bg delta >= 15 RGB), SC-10 (stacked gap <= 120px), SC-11 (font-size delta), SC-14 (sub-perceptual prevention): All have perception thresholds programmatically enforced.
- **GAP:** The codification map targets the PA SKILL.md file, which is NOT one of the 4 files being modified. The PA skill may still lack the threshold table. However, `flagship-pa-questions.md` does not need thresholds (PA questions are perceptual, not programmatic). The gate-runner.md handles programmatic threshold enforcement.
**Coverage:** ADDRESSED in gate-runner.md and conventions-brief.md. PA SKILL.md edit is OUT OF SCOPE for this surgery but may still be needed.

### Change 3: Builder Gets CSS Recipes, Not Just Constraints
**Target:** compositional-core/CLAUDE.md Phase 6
**Status in pipeline files:** SUPERSEDED. The conventions-brief.md IS the CSS recipe. The builder receives it directly (SKILL.md line 82). The compositional-core/CLAUDE.md Phase 6 edit is less critical because the build-page skill routes around it.
**Coverage:** ADDRESSED by different mechanism (conventions-brief + SKILL.md routing replaces the need for CLAUDE.md Phase 6 expansion).

### Change 4: Minimum Perceptual Deltas in Spatial Gate Runner
**Target:** ephemeral gate-runner.js -- add SC-09 and SC-10
**Status in pipeline files:** ADDRESSED.
- `gate-runner.md` SC-09 (lines 316-351): Background delta >= 15 RGB with full JS code.
- `gate-runner.md` SC-10 (lines 353-389): Stacked gap <= 120px with full JS code.
- `gate-runner.md` SC-14 (lines 573-628): Sub-perceptual prevention (letter-spacing floor, micro-clustering, intra-zone bg deltas).
**Coverage:** FULLY ADDRESSED. All three codification-map gates (SC-09, SC-10, SC-14) are present with complete JavaScript implementations.

### Change 5: S-09 Stacking Loophole -- Measure TOTAL Gap
**Target:** semantic-rules.md + tokens.css
**Status in pipeline files:** PARTIALLY ADDRESSED.
- `gate-runner.md` SC-10 (lines 353-389): Programmatic enforcement present.
- `conventions-brief.md` line 61: "Stacked gaps above 120px create voids" -- builder guidance present.
- **GAP:** The codification map targets semantic-rules.md and tokens.css, which are NOT among the 4 pipeline files being modified. Those files may still lack the stacking rule. However, the gate-runner catches violations programmatically and the conventions-brief educates the builder.
**Coverage:** ADDRESSED in pipeline files. Permanent design system files (semantic-rules.md, tokens.css) are OUT OF SCOPE for this surgery.

### Change 6: Per-Category Mechanism Minimums (Not "2-4")
**Target:** TC SKILL.md mechanism deployment
**Status in pipeline files:** ADDRESSED.
- `conventions-brief.md` line 67: "Mechanism breadth requires deployment from all 5 categories."
- `conventions-brief.md` line 335: ">= 14 mechanisms deployed across all 5 categories (Spatial 1+, Hierarchy 1+, Component 1+, Depth/Emphasis 1+, Structure/Navigation 1+)."
- `SKILL.md` line 204, DG-4 sub-check 3: "mechanisms: >= 14 total AND >= 1 in each of 5 categories."
**Coverage:** FULLY ADDRESSED across all three relevant files.

### Change 7: 3-Transition Minimum for Coherence
**Target:** TC SKILL.md Step 4.2C
**Status in pipeline files:** ADDRESSED.
- `conventions-brief.md` lines 255-280: Three transition types defined (SMOOTH, BRIDGE, BREATHING) with specific CSS values.
- `conventions-brief.md` line 265: "Two BREATHING transitions are never adjacent. Three SMOOTH transitions in sequence without a BRIDGE or BREATHING to break monotony creates drift."
- `SKILL.md` line 206, DG-4 sub-check 4: "transitions: >= 3 distinct types."
**Coverage:** FULLY ADDRESSED. The transition grammar is richer in the conventions-brief than the original codification map proposed.

### Change 8: Agent Communication Protocol (Not File-Only)
**Target:** compositional-core/CLAUDE.md -- add communication section
**Status in pipeline files:** PARTIALLY ADDRESSED.
- `SKILL.md` lines 62-66: "Spawn agents using the Task tool. You are the team lead / orchestrator."
- `SKILL.md` lines 121-129: Wave 1 monitoring includes checking for output files.
- `SKILL.md` lines 349-387: Fix cycle includes structured fix instructions routed to builder.
- **GAP:** The SKILL.md orchestrator communicates with agents via Task tool spawn prompts and file-based handoffs. There is NO explicit SendMessage protocol between agents. The codification map's "Required communication points" (Planner -> Builder send plan summary, Builder -> Planner ask clarifying questions, etc.) are NOT implemented. The TC agent writes `_tc-brief.md` and the builder reads it -- file-only communication.
- **HOWEVER:** The SKILL.md uses a single-agent-per-role architecture where the orchestrator mediates ALL communication. The TC agent writes a file, the builder reads it. This is FILE-BASED communication, not zero communication. The codification map's concern was about zero messaging between agents. The current architecture has the orchestrator as the communication hub.
**Coverage:** PARTIALLY ADDRESSED. File-based communication exists through orchestrator mediation. Direct agent-to-agent messaging (SendMessage) is absent. The codification map's "minimum message count" requirement is NOT met.

### Change 9: Opus for Builder Agents (Not Sonnet)
**Target:** compositional-core/CLAUDE.md -- add model selection
**Status in pipeline files:** FULLY ADDRESSED.
- `SKILL.md` line 73: "Model: Opus (ALWAYS -- never Sonnet for builders)"
- `SKILL.md` lines 441-452: Agent models table. Builder = Opus, all PA auditors = Opus.
- `SKILL.md` line 467: Non-negotiable #4: "Builder model: Opus. Always. Never Sonnet for the CSS-writing agent."
**Coverage:** FULLY ADDRESSED with explicit enforcement.

### Change 10: Builder Visibility -- Route CSS-Rich Files to CSS-Writing Agents
**Target:** compositional-core/CLAUDE.md -- expand conditional-load
**Status in pipeline files:** FULLY ADDRESSED.
- `SKILL.md` lines 80-89: Builder receives 7 files explicitly enumerated, including mechanism-catalog.md (FULL file), components.css, tokens.css.
- `SKILL.md` line 86: "mechanism-catalog.md -- mechanism CSS patterns" -- the mechanism catalog IS routed to the builder.
**Coverage:** FULLY ADDRESSED. The SKILL.md explicitly routes CSS-rich files to the builder.

### Codification Map Summary Table

| # | Change | Status | Where Addressed |
|---|--------|--------|-----------------|
| 1 | Recipe format | SUPERSEDED | conventions-brief.md IS the recipe |
| 2 | Perception thresholds | ADDRESSED | gate-runner.md SC-09/10/14, conventions-brief.md Sections 2/4 |
| 3 | Builder CSS recipes | SUPERSEDED | conventions-brief.md + SKILL.md routing |
| 4 | Gate runner deltas | FULLY ADDRESSED | gate-runner.md SC-09, SC-10, SC-14 |
| 5 | S-09 stacking | PARTIALLY | gate-runner.md SC-10, conventions-brief.md line 61. semantic-rules.md/tokens.css OUT OF SCOPE |
| 6 | Per-category minimums | FULLY ADDRESSED | conventions-brief.md line 335, SKILL.md DG-4, conventions-brief.md line 67 |
| 7 | 3-transition minimum | FULLY ADDRESSED | conventions-brief.md lines 255-280, SKILL.md DG-4 |
| 8 | Agent communication | PARTIALLY | File-based via orchestrator. No direct SendMessage protocol |
| 9 | Opus for builders | FULLY ADDRESSED | SKILL.md lines 73, 441-452, 467 |
| 10 | Builder visibility | FULLY ADDRESSED | SKILL.md lines 80-89 |

---

## SECTION 3: PV2 Alignment

### What Aligns

**1. Thin orchestrator architecture.** The PV2 architecture specifies `/build-page` as a thin orchestrator (~350 lines) that classifies tier, routes to build path, and presents results. The current SKILL.md (470 lines) IS this thin orchestrator. It classifies nothing (always Flagship), routes to TC + Builder + Gates + PA, and presents results. Aligned.

**2. Separation of concerns.** PV2 specifies: orchestrator routes, TC derives metaphor, recipe tells builder what to do, PA verifies. The current pipeline has exactly this separation: SKILL.md orchestrates, TC SKILL.md derives, conventions-brief.md instructs, gate-runner.md + PA verify. Aligned.

**3. Builder receives full recipe.** PV2 specifies builder reads operational-recipe.md (~650 lines, self-contained). The current pipeline routes builder to conventions-brief.md (531 lines, self-contained) + mechanism-catalog + tokens + prohibitions. The conventions-brief IS the operational recipe under a different name and structure. Aligned in spirit, different in form.

**4. Two-layer verification.** PV2 specifies programmatic gates (gate-runner.js) + perceptual audit (PA). The current pipeline has exactly this: gate-runner.md (21 gates) + 9-auditor PA with Tier 5 questions. Aligned.

**5. Builder model = Opus.** PV2 specifies Opus for Ceiling+ builders. Current SKILL.md mandates Opus for ALL builders. Aligned (stricter than PV2 by making Opus universal, not tier-gated).

### What Diverges

**1. Tier routing removed.** PV2 specifies a tier classification system (Floor/Middle/Ceiling/Flagship) with different build paths. The current SKILL.md has NO tier routing -- everything is Flagship. This is a DELIBERATE divergence: design-system/CLAUDE.md says "ALWAYS FLAGSHIP -- every page built at maximum compositional intensity. Tier routing REMOVED." This means the "Floor" and "Middle" efficiency optimizations from PV2 are absent. Every page gets the full treatment.

**2. Recipe file name and location.** PV2 specifies `design-system/compositional-core/grammar/operational-recipe.md` (~650 lines extracted from File 42). The current pipeline uses `design-system/pipeline/conventions-brief.md` (531 lines, written fresh). Different name, different location, different origin. The conventions-brief was NOT extracted from File 42 -- it was written from scratch as a "world-description" document. This is a STRUCTURAL divergence from PV2's "extract from File 42" approach.

**3. No standalone `/build-page` skill invocations by name.** PV2 specifies trigger phrases ("build a page," "run the pipeline") and power-user flags (`--tier`, `--output`, `--no-pa`, `--batch`). The current SKILL.md has none of these -- it's a simpler intake (parse path, create output directory). This is a SIMPLIFICATION, not a gap.

**4. No perception-thresholds.md standalone file.** PV2 specifies `design-system/compositional-core/guidelines/perception-thresholds.md` (~80 lines) as a canonical standalone reference. The current pipeline embeds thresholds in conventions-brief.md (Section 2 + Section 4) and gate-runner.md (per-gate). No standalone file exists. This creates a SINGLE-SOURCE-OF-TRUTH risk -- thresholds exist in 2 places (conventions-brief and gate-runner) instead of 1 canonical file referenced by both.

**5. No gate-runner.js executable file.** PV2 specifies `design-system/compositional-core/validation/gate-runner.js` (~250 lines) as an executable JavaScript file run via Playwright. The current pipeline has `design-system/pipeline/gate-runner.md` (1,160 lines) as a MARKDOWN specification with embedded JS code blocks. The SKILL.md orchestrator must extract JS from the markdown and run it manually. This is a FRICTION point -- the PV2 design intended a single executable file, not a markdown spec.

### What's Missing

**1. Content-type detection.** PV2 specifies auto-classification logic (< 200 words = Floor, tutorial = Middle, etc.) in the orchestrator's intake. The current SKILL.md has zero content-type detection -- it treats all content identically (always Flagship).

**2. Progress display.** PV2 specifies a live progress display showing phase-by-phase completion. The current SKILL.md has no progress display specification.

**3. Gate failure conversation UX.** PV2 specifies conversational gate failure handling ("WHAT / WHY / FIX / [1] Apply fix automatically / [2] Show me the page first / [3] Ship anyway"). The current SKILL.md has structured fix instructions but no conversational UX.

**4. Batch mode.** PV2 specifies `--batch path/to/dir/` for processing multiple files. Not present.

**5. Sunset protocol integration.** PV2 specifies rule retirement every 5 builds (M-2). No sunset tracking exists in any pipeline file.

---

## SECTION 4: Hidden Risk Assessment

### BLIND SPOT 1: The Comparison Trap (SB-01) -- STILL PRESENT
**Risk:** The entire pipeline is derived from comparing master prompt (failed) vs remediation (improved). The conventions-brief was NOT derived from this comparison -- it was written fresh. BUT the gate-runner thresholds ARE derived from the comparison (e.g., "15 RGB" comes from the flagship having 1-8 RGB deltas). If the thresholds are wrong (SB-01: "are both prompts wrong in the same way?"), the gates codify the wrong values.
**Not covered by:** Any gate, check, or guidance in the pipeline files.
**Severity:** MEDIUM. The thresholds are conservative and perceptually grounded. The risk is that they're too conservative (rejecting valid pages) or not conservative enough (missing novel failure modes).

### BLIND SPOT 2: N=2 Limitation (A-06) -- STILL PRESENT
**Risk:** All findings derive from comparing 2 artifacts. The pipeline codifies these findings as permanent rules. No mechanism exists for revising rules based on new experimental data.
**Not covered by:** Any gate or guidance. The sunset protocol (M-2) is NOT integrated into any pipeline file.
**Severity:** MEDIUM-HIGH. Without a sunset protocol, rules accumulate indefinitely (the complexity ratchet the anti-reproduction protocol warns about).

### BLIND SPOT 3: Content-Type Mismatch (Exploit 2) -- STILL PRESENT
**Risk:** The conventions-brief was designed for research-synthesis-style content. The hidden-questions research identifies this: "The recipe assumes RESEARCH-SYNTHESIS style content (long paragraphs, uniform density, 3000-5000 words)." A changelog, API reference, or landing page may produce poor results.
**Not covered by:** The conventions-brief gives the builder creative authority (Section 9) but provides NO content-type-specific guidance. The SKILL.md always routes to Flagship regardless of content type.
**Severity:** HIGH for non-prose content. The quality floor (>= 14 mechanisms, >= 800 CSS lines) may be inappropriate for a 200-word landing page or a tabular API reference.

### BLIND SPOT 4: Recipe Staleness (Exploit 1) -- PARTIALLY COVERED
**Risk:** The conventions-brief embeds specific hex codes (#FEF9F5, #1A1A1A, #E83025), font names (Instrument Serif, Inter, JetBrains Mono), and pixel values. When the design system evolves, these become stale.
**Partially covered by:** `conventions-brief.md` line 86: Builder reads `tokens.css` for current values. The conventions-brief references token variables alongside hex codes. BUT the conventions-brief also hardcodes hex values inline (Section 1, Section 4, Section 8), creating a dual-source risk.
**Severity:** LOW (short-term), MEDIUM (long-term). The design system evolves slowly. But when it does, the conventions-brief's inline hex codes will diverge from tokens.css.

### BLIND SPOT 5: The Compliance Ceiling (Exploit 3) -- ACKNOWLEDGED BUT NOT RESOLVED
**Risk:** Binary rules + recipe format may cap at 3/4 (COMPOSED) but not reach 4/4 (DESIGNED). The hidden-questions research calls this "the compliance ceiling." Every page may look the same: same zone architecture, same transition grammar, same typography hierarchy.
**Partially covered by:** `conventions-brief.md` Section 9 (Creative Authority): "You are the composer. Approximately 80% of all decisions are yours to make." This PERMITS creative deviation. But the builder prompt (SKILL.md) frames the build with specific phase structure and micro-gates that constrain freedom.
**Not covered by:** Any "post-recipe" phase where the builder has explicit permission to deviate for compositional reasons (Exploit 3's recommended defense).
**Severity:** MEDIUM. The conventions-brief's creative authority section is the strongest defense. But whether builders exercise that authority when surrounded by gates and checkpoints is an empirical question.

### BLIND SPOT 6: TC Brief Conflict Resolution -- NOT COVERED
**Risk:** The TC agent produces a `_tc-brief.md` with metaphor, zones, tensions, and mechanisms. The builder reads this FIRST (SKILL.md line 81), then the conventions-brief. If the TC brief specifies a zone architecture that conflicts with conventions-brief guidance (e.g., TC brief says 6 zones, conventions-brief says 3-5), no conflict resolution protocol exists.
**Not covered by:** Any gate, check, or guidance in any pipeline file.
**Severity:** MEDIUM. In practice, the TC skill's Phase 0 should produce architectures compatible with the conventions brief. But no formal guarantee exists.

### BLIND SPOT 7: Fix Cycle Degradation -- PARTIALLY COVERED
**Risk:** During fix cycles, the builder operates on symptoms (gate failures) rather than composition. The anti-reproduction protocol warns about this: "Fix cycles degrade from recipe to checklist when the builder operates at symptom level."
**Partially covered by:** `conventions-brief.md` line 360: "Fix cycle memory" section instructs builder to re-read conviction statement before fixing. `gate-runner.md` lines 224-261: Fix recipe compositional context section includes conventions-brief section references. `SKILL.md` line 387: "Re-read your conviction statement and transition table in _build-log.md before applying fixes."
**Not fully covered by:** Whether the builder ACTUALLY re-reads the conviction statement. No gate verifies that the builder's fix-cycle CSS changes are compositionally coherent (only that they fix the specific gate failure).
**Severity:** LOW-MEDIUM. The three-layer defense (conventions-brief section, gate-runner reference, SKILL.md framing) is solid. The residual risk is that builders comply mechanically with the fix instruction without genuinely re-engaging compositional context.

---

## SECTION 5: BLOCKING Gaps

### BLOCKING-1: No Sunset Protocol in Any Pipeline File
**What:** The anti-reproduction protocol's M-2 (Complexity Ratchet Brake) requires a rule sunset audit every 5 builds. No pipeline file contains any sunset mechanism, retirement tracking, or rule count monitoring.
**Why blocking:** Without sunset, the gate-runner will only grow. New gates will be added after each failure. No gates will ever be removed. The 22-gate system will become 30, then 40, then 50. This IS the complexity ratchet the anti-reproduction protocol was designed to prevent.
**Fix:** Add a SUNSET section to gate-runner.md with: (a) build counter, (b) per-gate "last triggered" date, (c) retirement criteria (not triggered in 5 builds), (d) `_retired-gates.md` archive reference.

### BLOCKING-2: No Canonical Single Source for Perception Thresholds
**What:** Perception thresholds exist in TWO places: conventions-brief.md (Section 2 + Section 4 table) and gate-runner.md (embedded in SC-09, SC-10, SC-11, SC-14). The PV2 architecture specifies a SINGLE canonical file (perception-thresholds.md) referenced by both. This file does not exist.
**Why blocking:** If thresholds are updated in one file but not the other, the builder sees different values than the gate enforces. This is a SILENT FAILURE: the builder writes CSS targeting one threshold, the gate checks against a different threshold, and the discrepancy is undetectable until it causes a gate failure that the builder cannot understand.
**Fix:** Create `design-system/pipeline/perception-thresholds.md` as the single source. Both conventions-brief.md and gate-runner.md should reference it by path rather than embedding values inline. OR: add a cross-reference comment in both files ("These values must match gate-runner.md SC-09/SC-10/SC-11/SC-14" and "These values must match conventions-brief.md Section 2/4").

### BLOCKING-3: No Content-Type Awareness
**What:** The SKILL.md always routes to Flagship tier regardless of content type. A 200-word changelog and a 5,000-word research synthesis receive identical treatment: full TC pipeline, Opus builder, 22 gates, 9-auditor PA.
**Why blocking:** The quality floor (>= 14 mechanisms, >= 800 CSS lines, >= 8 component types) is IMPOSSIBLE for short content. A 200-word changelog cannot sustain 14 mechanisms or 800 CSS lines. The gates will ALWAYS fail for short content, making the pipeline unusable for anything except long-form prose. This is the hidden-questions Exploit 2 ("content mismatch") reproduced in the pipeline's own architecture.
**Fix:** Add content-length detection to SKILL.md intake. If content is < 500 words, warn user that Flagship quality floor may not apply. OR: add a short-form variant to the quality floor (>= 6 mechanisms for < 1000 words, >= 14 for >= 1000 words). OR: at minimum, document in SKILL.md that the pipeline is designed for long-form prose content.

### BLOCKING-4: Stacked Gap Threshold Inconsistency
**What:** The codification map specifies 192px as the stacked gap GATE threshold and 120px as the builder TARGET. The PV2 architecture resolves this as "120px = target, 192px = gate." BUT the current pipeline uses 120px EVERYWHERE:
- `conventions-brief.md` line 61: "Stacked gaps above 120px create voids"
- `gate-runner.md` SC-10 line 358: "PASS: Total stacked gap <= 120px"
- `SKILL.md` line 171: "<= 120px total at section boundaries"
- `SKILL.md` line 466: "No stacked gaps above 120px"

The PV2 architecture explicitly says: "The 120px figure from File 42 is the builder's TARGET. The 192px is the GATE (fail if exceeded)." But the pipeline implements 120px as the GATE threshold, making it stricter than PV2 intended.
**Why blocking:** 120px as a GATE threshold is extremely tight. Padding-bottom (48px) + collapsed margin (48px) + padding-top (48px) = 144px, which FAILS at 120px. Builders will frequently hit this gate and need to use very tight spacing (32px + 32px + 32px = 96px), which may compress content uncomfortably. The PV2 architecture gives headroom to 192px for exactly this reason.
**Fix:** Decide whether the threshold is 120px (strict, current) or 192px (PV2 architecture's recommendation). If 120px: document that this is intentionally stricter than PV2. If 192px: update conventions-brief.md, gate-runner.md SC-10, and SKILL.md. EITHER value is defensible -- but the 3 files must agree and the choice must be documented.

**NOTE:** This may be intentional. The conventions-brief uses 120px as the physics statement ("above 120px = void"), and the gate enforces the physics. The PV2's 192px was a compromise to give headroom. The pipeline surgery team should confirm which value is intended.

---

## SUMMARY

### Gate Compliance Overview

| Gate | Status | Score | Key Gap |
|------|--------|-------|---------|
| G1: Compression | Partially | 60% | Richness/fractal sections lack provenance + violation examples |
| G2: Judgment | Largely | 75% | Five Questions + richness self-tests are judgment-based |
| G3: Guardrail Ratio | Well | 85% | Identity sections exempt; execution sections are playbook-dominant |
| G4: Builder Visibility | Well | 90% | Dual-source threshold risk; TC brief conflict potential |
| G5: Quality Routing | Well | 95% | CSS-rich files correctly routed to builder |
| G6: Meta Ratio | Watch | ~12:1 | Pipeline surgery IS the codification action |
| G7: Recipe Format | Well | 80% | Quality floor + mid-build checks are checklist-flavored |

### Codification Map Coverage: 8/10 addressed, 2 partially (agent communication, stacking loophole in permanent files)

### PV2 Alignment: Architecture aligned in spirit. Key divergences: no tier routing (deliberate), different recipe file (conventions-brief vs operational-recipe), no executable gate-runner.js, no perception-thresholds.md canonical file.

### BLOCKING Gaps: 4 identified
1. No sunset protocol (complexity ratchet risk)
2. No canonical perception threshold source (silent drift risk)
3. No content-type awareness (short content = guaranteed gate failure)
4. Stacked gap threshold inconsistency (120px everywhere vs PV2's 192px)

---

*File: `ephemeral/pipeline-surgery/04-anti-reproduction-xref.md`*
*Lines: ~440*
*Purpose: Cross-reference audit of 4 pipeline files against anti-reproduction protocol, codification map, PV2 architecture, and hidden questions*

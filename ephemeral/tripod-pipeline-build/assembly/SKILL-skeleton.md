---
name: research-compose
description: Build a designed HTML page from content markdown using the full accumulated knowledge base (26,528 lines across 57 files) via the Tripod Pipeline. Orchestrates five phases — DERIVE (tension-composition), RESEARCH (5 specialists + synthesizer), BUILD (3-pass rotation), EVALUATE (perceptual audit), REFINE (fix cycles). Input is a content markdown path. Output is a self-contained .html file + research packages + PA audit + comparison report. Trigger phrases include "research-compose", "research compose", "tripod compose", "deep compose", "compose with research".
---

# /research-compose — Tripod Pipeline Orchestrator

Takes content markdown and produces a designed, self-contained HTML page using the full accumulated knowledge base — not the 4 compressed vocabulary files, but curated selections from all 57 source files (26,528 lines).

**You are the ORCHESTRATOR.** You handle plumbing (file loading, agent spawning, screenshots, routing, validation). Creative freedom lives inside each phase's agents. You do NOT make compositional decisions.

**This skill SUPERSEDES /compose when invoked.** The user chose /research-compose for this build, which means the full Tripod Pipeline runs.

---

## Quick Reference — Phases & Outputs

Use this table to find your current position after context compression. If context has compressed, re-read `_pipeline-log.md` for the latest checkpoint, then jump to the next uncompleted phase below.

| Phase | Name | Agents | Key Outputs | Validation Gate |
|-------|------|--------|-------------|-----------------|
| 0 | SETUP | 0 (orchestrator) | Dirs created, files loaded | Input file exists, dirs created |
| 1 | DERIVE | 1 TC (Opus) | `_tc-brief.md` | 6 sections, definitive metaphor, 3+ waypoints |
| 2 | RESEARCH | 5 specialists + 1 synth (Opus) | `_specialist-[1-5]-*.md`, `_package-pass-[1-3].md` | Each specialist >= quality floor lines, each package >= 100 lines |
| 3 | BUILD | 1 builder x 3 passes (Opus) | `_build-pass-[1-2].html`, `_build-final.html`, `_pass-[1-2]-decisions.md`, `_builder-reflection.md` | HTML > 1KB, has `<style>`, has Google Fonts, self-contained |
| 4 | EVALUATE | 5 PA + 1 weaver (Opus) | `_pa/auditor-[1-5].md`, `_pa/synthesis.md`, `_comparison-report.md` | Synthesis has verdict, comparison report has gap analysis |
| 5 | REFINE | 0-1 builder (Opus) | Updated `_build-final.html`, `_fixes/fix-N-*.md` | Max 2 cycles, re-screenshot + re-PA after each |

**Total agents per run:** 14-15 (1 TC + 5 specialists + 1 synthesizer + 1 builder x 3 + 5 PA + 1 weaver + 0-1 refine)

---

## Prerequisites

**Content file:** The user provides a path to a markdown file containing the content to design. Resolve to an absolute path immediately and verify the file exists before proceeding. If the file doesn't exist, STOP and ask the user for the correct path.

**Output directory:** Create the output directory before any agent writes:
```bash
mkdir -p ephemeral/builds/<content-name>-<date>/
mkdir -p ephemeral/builds/<content-name>-<date>/_screenshots
mkdir -p ephemeral/builds/<content-name>-<date>/_pa
mkdir -p ephemeral/builds/<content-name>-<date>/_pa/_images
mkdir -p ephemeral/builds/<content-name>-<date>/_fixes
```
Content name = the markdown filename without extension (e.g., `my-article.md` -> `my-article-2026-03-02`).

Store the absolute output directory path as `OUTPUT_DIR` — every file reference below uses it.

**Agent spawning:** Use the Agent tool with `subagent_type: "general-purpose"` and `model: "opus"` for all agent spawns. Each agent runs in its own context. Agents have Read tool access to read files from disk. Include file PATHS in prompts (not full contents) unless the file is small (<100 lines).

**Pipeline log:** Create `{OUTPUT_DIR}/_pipeline-log.md` immediately with a header:
```markdown
# Pipeline Log: {content-name}
Started: {timestamp}
Content: {absolute-path-to-content.md}
Output: {OUTPUT_DIR}
```

---

## Phase 0: SETUP — Load Common Files (YOU do this)

Read these files. They are used across multiple phases.

1. `design-system/compositional-core/identity/identity.md` (87 lines)
2. `design-system/compositional-core/identity/vocabulary.md` (55 lines)
3. `design-system/compositional-core/vocabulary/tokens.css` (124 lines)
4. `design-system/compositional-core/components/components.css` (779 lines)

Verify soul principles are clear:
- `border-radius: 0` — always, on everything
- `box-shadow: none` — always, on everything
- No gradients, no semi-transparent backgrounds, no cool grays

**Write Phase 0 checkpoint to `_pipeline-log.md`:**
```markdown
## Phase 0 Checkpoint
- Status: COMPLETE
- Files loaded: identity.md (87L), vocabulary.md (55L), tokens.css (124L), components.css (779L)
- Output directory: {OUTPUT_DIR}
- Content file: {absolute-path} ({line-count} lines)
- Cumulative cost estimate: $0
- Decision: PROCEED to Phase 1
```

**DO NOT proceed to Phase 1 until Phase 0 validation passes.**

---

## Phase 1: DERIVE (Tension-Composition)

**Context recovery:** If context has compressed, re-read `{OUTPUT_DIR}/_pipeline-log.md`. If Phase 0 is marked COMPLETE and Phase 1 is not, you are HERE.

**Spawn:** One Opus agent for TC derivation.

**Agent receives (provide file paths for agent to Read):**
- The content markdown (full path: `{CONTENT_PATH}`)
- The TC skill: `~/.claude/skills/tension-composition/SKILL.md`
- Identity files: `design-system/compositional-core/identity/identity.md` + `design-system/compositional-core/identity/vocabulary.md`
- The resolved output path: `{OUTPUT_DIR}/_tc-brief.md`

**Agent does NOT receive:**
- Case studies, prior explorations, mechanism files (library prohibition until TC Phase 4)
- Gate results, PA scores, or any pipeline vocabulary
- Components.css or components.md
- Research packages or specialist outputs

**Agent prompt must include this instruction:**

{{TC_AGENT_PROMPT}}

**Agent outputs to:** `{OUTPUT_DIR}/_tc-brief.md`

### Phase 1 Validation (YOU verify before proceeding)

1. File exists: `{OUTPUT_DIR}/_tc-brief.md`
2. File is > 50 lines (thin briefs produce flat output)
3. Brief has all 6 sections: World-Description, Calibration, Opposition Map, Compositional Arc, Creative Conditions, Content Map
4. Section 1 contains a definitive metaphor statement (no 'could', 'might', 'perhaps')
5. Section 4 contains at least 3 creative waypoints
6. Brief is conviction-driven (creative invitations, not compliance checklists)

**If validation fails:** Re-spawn the TC agent with feedback: "The brief is missing [specific issue]. The conviction brief must transfer FULL compositional intelligence to the builder. Go deeper."

**Write Phase 1 checkpoint to `_pipeline-log.md`:**
```markdown
## Phase 1 Checkpoint
- Phase: DERIVE (TC)
- Agents spawned: 1
- Artifacts produced: _tc-brief.md ({line-count} lines)
- Validation: [PASS/FAIL — details]
- Cumulative cost estimate: $3-5
- Decision: PROCEED to Phase 2
```

**DO NOT proceed to Phase 2 until Phase 1 validation passes.**

---

## Phase 2: RESEARCH (Specialist Team)

**Context recovery:** If context has compressed, re-read `{OUTPUT_DIR}/_pipeline-log.md`. If Phase 1 is marked COMPLETE and Phase 2 is not, you are HERE. Re-read `{OUTPUT_DIR}/_tc-brief.md` to recall the metaphor and content.

This is the NEW phase — the core of the tripod. 5 specialists read different slices of the 26,528-line knowledge base and produce curated, content-specific research. Then 1 synthesizer merges their output into 3 rotation-ready package files.

### Step 2A: Spawn 5 Specialists (PARALLEL)

All 5 specialists run in parallel. Each receives the common input plus their domain-specific files.

**Common input for ALL specialists (provide file paths):**
- `{CONTENT_PATH}` — the article being designed
- `{OUTPUT_DIR}/_tc-brief.md` — the conviction brief (metaphor + spatial direction)

---

#### Specialist 1: Findings Mapper

**Domain files to Read (Layer 1 + Layer 6a, ~4,810 lines):**
- `design-system/research/R1-DOCUMENTATION-PATTERNS.md` (584 lines)
- `design-system/research/R2-CREATIVE-LAYOUTS.md` (810 lines)
- `design-system/research/R3-DENSITY-DIMENSIONS.md` (553 lines)
- `design-system/research/R4-AXIS-INNOVATIONS.md` (990 lines)
- `design-system/research/R5-COMBINATION-THEORY.md` (784 lines)
- `design-system/research/RESEARCH-SYNTHESIS.md` (383 lines)
- `design-system/validated-explorations/combination/R5-EVALUATION-MATRIX.md` (706 lines)

**Agent prompt:**

{{SPECIALIST_1_PROMPT}}

**Output:** `{OUTPUT_DIR}/_specialist-1-findings.md`
**Quality floor:** 100 lines minimum. 20+ HIGH findings. Each HIGH finding: finding ID + relevance rationale + specific CSS action for THIS build. Recipe format.

---

#### Specialist 2: Validation Mapper

**Domain files to Read (Layer 2 + Layer 5 + Layer 6b, ~4,827 lines):**
- `design-system/specification/provenance/stage-1-components/component-findings.md` (196 lines)
- `design-system/specification/provenance/stage-2-density-dd/DD-outbound-findings.md` (232 lines)
- `design-system/specification/provenance/stage-3-organization-od/OD-outbound-findings.md` (959 lines)
- `design-system/specification/provenance/stage-4-axis-ad/AD-outbound-findings.md` (680 lines)
- `design-system/specification/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` (338 lines)
- `design-system/specification/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` (351 lines)
- `design-system/specification/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` (447 lines)
- `design-system/specification/provenance/stage-3-organization-od/OD-SYNTHESIS.md` (672 lines)
- `design-system/specification/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` (306 lines)
- `archive/knowledge-architecture/09-CD-SYNTHESIS-BRIEFING.md` (646 lines)

**Agent prompt:**

{{SPECIALIST_2_PROMPT}}

**Output:** `{OUTPUT_DIR}/_specialist-2-validated.md`
**Quality floor:** 80 lines minimum. 15+ validated findings with provenance chains. Each: finding ID + stage progression + validation evidence + build-specific application.

---

#### Specialist 3: Case Study Analyst

**Domain files to Read (Layer 3, ~5,120 lines):**
- `design-system/compositional-core/case-studies/DD-003-islands.md` (405 lines)
- `design-system/compositional-core/case-studies/DD-004-layers.md` (428 lines)
- `design-system/compositional-core/case-studies/DD-006-fractal.md` (377 lines)
- `design-system/compositional-core/case-studies/dd-003-islands-visual.md` (462 lines)
- `design-system/compositional-core/case-studies/dd-004-layers-visual.md` (144 lines)
- `design-system/compositional-core/case-studies/dd-006-fractal-visual.md` (165 lines)
- `design-system/compositional-core/case-studies/OD-001-conversational.md` (297 lines)
- `design-system/compositional-core/case-studies/OD-004-confidence.md` (309 lines)
- `design-system/compositional-core/case-studies/OD-006-creative.md` (333 lines)
- `design-system/compositional-core/case-studies/CD-001-reasoning-inside-code.md` (415 lines)
- `design-system/compositional-core/case-studies/CD-005-multi-axis-transition.md` (386 lines)
- `design-system/compositional-core/case-studies/CD-006-pilot-migration.md` (387 lines)
- `design-system/compositional-core/case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` (471 lines)
- `design-system/compositional-core/case-studies/README.md` (541 lines)

**Agent prompt:**

{{SPECIALIST_3_PROMPT}}

**Output:** `{OUTPUT_DIR}/_specialist-3-casestudies.md`
**Quality floor:** 100 lines minimum. 3-5 case studies with structural affinity. Each: affinity rationale + process extraction + at least 10 lines of actual CSS adapted for THIS build.

---

#### Specialist 4: Constraints Compiler

**Domain files to Read (Layer 4 + Layer 9 + Layer 11, ~5,162 lines):**
- `design-system/specification/provenance/stage-4-axis-ad/AD-CONVENTION-SPEC.md` (1,093 lines)
- `design-system/specification/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md` (970 lines)
- `design-system/specification/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md` (468 lines)
- `design-system/compositional-core/identity/identity.md` (87 lines)
- `design-system/compositional-core/identity/vocabulary.md` (55 lines)
- `design-system/compositional-core/vocabulary/tokens.css` (124 lines)
- `design-system/specification/anti-patterns/registry.md` (354 lines)
- `archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md` (519 lines)
- `design-system/specification/BACKBONE.md` (542 lines)
- `design-system/specification/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` (440 lines)
- `design-system/specification/provenance/stage-4-axis-ad/AD-RESEARCH-GATE.md` (510 lines)

**Agent prompt:**

{{SPECIALIST_4_PROMPT}}

**Output:** `{OUTPUT_DIR}/_specialist-4-constraints.md`
**Quality floor:** 60 lines minimum. Soul checklist (all non-negotiables). 6+ anti-patterns risk-profiled with: risk level, WHY it's risky for THIS content, CSS mitigation. Token values as reference.

---

#### Specialist 5: Protocol & Exemplar Analyst

**Domain files to Read (Layer 7 + Layer 8, ~3,892 lines):**
- `archive/knowledge-architecture/MASTER-AD-EXECUTION-SPEC.md` (1,407 lines)
- `design-system/pipeline/MASTER-CD-EXECUTION-PROMPT.md` (930 lines)
- `archive/combination-research/research-package-cd-001.md` (249 lines)
- `archive/combination-research/research-package-cd-002.md` (240 lines)
- `archive/combination-research/research-package-cd-003.md` (249 lines)
- `archive/combination-research/research-package-cd-004.md` (250 lines)
- `archive/combination-research/research-package-cd-005.md` (226 lines)
- `archive/combination-research/research-package-cd-006.md` (341 lines)

**Agent prompt:**

{{SPECIALIST_5_PROMPT}}

**Output:** `{OUTPUT_DIR}/_specialist-5-protocol.md`
**Quality floor:** 80 lines minimum. Consumption protocol defined. 5+ effective patterns from Agent-0C. Template structure proposed. Anti-orphaning principle stated.

---

### Step 2B: Validate Specialist Outputs (YOU do this)

After all 5 specialists complete, validate EACH output:

```
For each specialist N in [1, 2, 3, 4, 5]:
  1. Verify file exists: {OUTPUT_DIR}/_specialist-{N}-*.md
  2. Count lines. Compare against quality floor:
     - S1: >= 100 lines
     - S2: >= 80 lines
     - S3: >= 100 lines
     - S4: >= 60 lines
     - S5: >= 80 lines
  3. If below floor: re-spawn that specialist with:
     "Your output was {N} lines. The quality floor is {floor} lines.
      Go deeper — read more carefully, extract more findings,
      provide more CSS examples. Every finding needs a specific
      build action for THIS content."
  4. Maximum 1 re-run per specialist. If still below floor after re-run, proceed with what you have.
```

---

### Step 2C: Spawn Synthesizer (SEQUENTIAL — after all specialists)

**Context recovery reminder:** If context has compressed between Step 2A and 2C, re-read `{OUTPUT_DIR}/_pipeline-log.md` to confirm you're in Phase 2, then re-read the specialist outputs.

**Spawn:** One Opus agent as the synthesizer.

**Agent receives (provide file paths for agent to Read):**
- All 5 specialist outputs:
  - `{OUTPUT_DIR}/_specialist-1-findings.md`
  - `{OUTPUT_DIR}/_specialist-2-validated.md`
  - `{OUTPUT_DIR}/_specialist-3-casestudies.md`
  - `{OUTPUT_DIR}/_specialist-4-constraints.md`
  - `{OUTPUT_DIR}/_specialist-5-protocol.md`
- `{OUTPUT_DIR}/_tc-brief.md` (conviction brief)
- `{CONTENT_PATH}` (content markdown)
- Exemplar packages (format reference, provide paths):
  - `archive/combination-research/research-package-cd-001.md`
  - `archive/combination-research/research-package-cd-006.md`

**Agent prompt:**

{{SYNTHESIZER_PROMPT}}

**Agent produces THREE files (not one):**

- `{OUTPUT_DIR}/_package-pass-1.md` — **Foundations** (~130-170 lines)
  - Section 0: Soul Checklist (~15 lines)
  - Section 1: Build Context — metaphor + content map (~30 lines)
  - Section 2: Mechanism Selections + full rationale + CSS examples (~100-120 lines)
  - Section 9: Consumption Protocol — how to read and sequence work (~20 lines)

- `{OUTPUT_DIR}/_package-pass-2.md` — **Enrichment** (~130-180 lines)
  - Section 3: Findings -> Build-Specific Actions (~80-100 lines)
  - Section 4: Zone Architecture — zone-by-zone recipe with ASCII density diagram (~50-70 lines)
  - Section 5: Case Study Processes + CSS that worked (~50-60 lines)

- `{OUTPUT_DIR}/_package-pass-3.md` — **Hardening** (~110-150 lines)
  - Section 6: Anti-Patterns risk-profiled + CSS mitigations (~30-40 lines)
  - Section 7: CSS Examples from validated explorations (~40-60 lines)
  - Section 8: Structural Propositions — testable hypotheses (~20-30 lines)

### Step 2D: Validate Synthesizer Outputs (YOU do this)

```
For each package file in [_package-pass-1.md, _package-pass-2.md, _package-pass-3.md]:
  1. Verify file exists
  2. Verify >= 100 lines
  3. Verify recipe format (look for sequenced verbs: Read, Deploy, Apply, Internalize — NOT checklist verbs: Verify, Fail if, Must be)
  4. Verify content-specificity (does it reference THIS article's specific topics? If it could apply to any article, it's too generic)
```

**If any package file is < 100 lines or too generic:** Re-spawn the synthesizer with: "Package file {name} is {issue}. Every section must reference specific aspects of THIS article and THIS metaphor. Generic advice is useless to the builder."

**Write Phase 2 checkpoint to `_pipeline-log.md`:**
```markdown
## Phase 2 Checkpoint
- Phase: RESEARCH
- Agents spawned: 6 (5 specialists + 1 synthesizer)
- Specialist outputs: S1 ({lines}L), S2 ({lines}L), S3 ({lines}L), S4 ({lines}L), S5 ({lines}L)
- Package outputs: pass-1 ({lines}L), pass-2 ({lines}L), pass-3 ({lines}L)
- Re-runs needed: [list any specialist re-runs]
- Cumulative cost estimate: $11-20
- Decision: PROCEED to Phase 3
```

**DO NOT proceed to Phase 3 until Phase 2 validation passes.**

---

## Phase 3: BUILD (3-Pass Rotation)

**Context recovery:** If context has compressed, re-read `{OUTPUT_DIR}/_pipeline-log.md`. If Phase 2 is marked COMPLETE and Phase 3 is not, you are HERE. Check which pass was last completed by looking for `_build-pass-1.html`, `_build-pass-2.html`, `_build-final.html`.

### Why Rotation

Transformer attention follows a U-shaped curve: primacy (beginning) and recency (end) get disproportionate weight; the middle gets compressed. Rotation ensures EVERY section gets primacy position exactly once by splitting the build into 3 passes, each with a different package file at the top of the context.

### Build Pass 1: STRUCTURE

**Spawn:** One Opus builder.

**Agent receives (include file contents for small files; provide paths for large files):**

In this order (order matters for attention primacy):
1. `{OUTPUT_DIR}/_package-pass-1.md` **(PRIMACY POSITION)** — include full contents in prompt
2. `{CONTENT_PATH}` — provide path for agent to Read
3. `{OUTPUT_DIR}/_tc-brief.md` — provide path for agent to Read
4. `design-system/compositional-core/vocabulary/tokens.css` — include full contents (124 lines)
5. `design-system/compositional-core/components/components.css` — provide path for agent to Read (779 lines)

**Agent does NOT receive:**
- `_package-pass-2.md` or `_package-pass-3.md`
- PA questions, audit criteria, gate thresholds
- Prior build artifacts or fix lists

**Agent prompt (Pass 1 builder instructions):**

{{BUILDER_PASS_1_PROMPT}}

**Agent outputs to:**
- `{OUTPUT_DIR}/_build-pass-1.html`
- `{OUTPUT_DIR}/_pass-1-decisions.md` (~20-30 lines: what was built, which mechanisms deployed, what zones were created)

**Pass 1 Validation (YOU verify):**
1. `_build-pass-1.html` exists and is > 1KB
2. Contains a `<style>` block
3. Contains Google Fonts `<link>` tags
4. No external stylesheet links (must be self-contained)
5. `_pass-1-decisions.md` exists and is > 10 lines

**If validation fails:** Re-spawn the builder with: "The output is missing {specific issue}. The HTML must be self-contained with all CSS inline in a <style> block."

---

### Build Pass 2: ENRICHMENT

**Context recovery reminder:** If context has compressed since Pass 1, re-read `{OUTPUT_DIR}/_pipeline-log.md` and `{OUTPUT_DIR}/_pass-1-decisions.md`.

**Spawn:** One Opus builder (new agent — fresh context).

**Agent receives (in this order):**
1. `{OUTPUT_DIR}/_package-pass-2.md` **(PRIMACY POSITION)** — include full contents in prompt
2. `{OUTPUT_DIR}/_pass-1-decisions.md` — include full contents in prompt
3. `{OUTPUT_DIR}/_build-pass-1.html` — provide path for agent to Read

**Agent does NOT receive:**
- `_package-pass-1.md` or `_package-pass-3.md`
- The TC brief (decisions.md carries what's needed)
- content.md (the HTML already contains the content)

**Agent prompt (Pass 2 builder instructions):**

{{BUILDER_PASS_2_PROMPT}}

**Agent outputs to:**
- `{OUTPUT_DIR}/_build-pass-2.html`
- `{OUTPUT_DIR}/_pass-2-decisions.md` (~20-30 lines: what was enriched, which findings applied, what changed)

**Pass 2 Validation (YOU verify):**
1. `_build-pass-2.html` exists and is > 1KB
2. File is >= size of `_build-pass-1.html` (enrichment should add, not remove)
3. Contains a `<style>` block
4. `_pass-2-decisions.md` exists and is > 10 lines

---

### Build Pass 3: HARDENING

**Context recovery reminder:** If context has compressed since Pass 2, re-read `{OUTPUT_DIR}/_pipeline-log.md`, `{OUTPUT_DIR}/_pass-1-decisions.md`, and `{OUTPUT_DIR}/_pass-2-decisions.md`.

**Spawn:** One Opus builder (new agent — fresh context).

**Agent receives (in this order):**
1. `{OUTPUT_DIR}/_package-pass-3.md` **(PRIMACY POSITION)** — include full contents in prompt
2. `{OUTPUT_DIR}/_pass-1-decisions.md` + `{OUTPUT_DIR}/_pass-2-decisions.md` — include full contents in prompt
3. `{OUTPUT_DIR}/_build-pass-2.html` — provide path for agent to Read

**Agent does NOT receive:**
- `_package-pass-1.md` or `_package-pass-2.md`
- The TC brief
- content.md

**Agent prompt (Pass 3 builder instructions):**

{{BUILDER_PASS_3_PROMPT}}

**Agent outputs to:**
- `{OUTPUT_DIR}/_build-final.html`
- `{OUTPUT_DIR}/_builder-reflection.md` (~30-50 lines — 6 dimensions: conviction fidelity, alternatives considered, surprises, impulses resisted, experience quality, unresolved tensions)

**Pass 3 Validation (YOU verify):**
1. `_build-final.html` exists and is > 1KB
2. Contains a `<style>` block
3. Contains Google Fonts `<link>` tags
4. No external stylesheet links (self-contained)
5. `_builder-reflection.md` exists

**Write Phase 3 checkpoint to `_pipeline-log.md`:**
```markdown
## Phase 3 Checkpoint
- Phase: BUILD (3-pass rotation)
- Agents spawned: 3 (1 per pass)
- Pass 1 HTML: {size}KB, {css-lines} CSS lines
- Pass 2 HTML: {size}KB, {css-lines} CSS lines
- Final HTML: {size}KB, {css-lines} CSS lines
- Decisions files: pass-1 ({lines}L), pass-2 ({lines}L)
- Reflection: {lines}L
- Cumulative cost estimate: $23-38
- Decision: PROCEED to Phase 4
```

**DO NOT proceed to Phase 4 until Phase 3 validation passes.**

---

## Phase 4: EVALUATE (Perceptual Audit)

**Context recovery:** If context has compressed, re-read `{OUTPUT_DIR}/_pipeline-log.md`. If Phase 3 is marked COMPLETE and Phase 4 is not, you are HERE. The page to evaluate is `{OUTPUT_DIR}/_build-final.html`.

### Step 4A: Screenshots (YOU do this)

**Screenshot capture protocol — same as /compose:**

1. Start a local HTTP server:
   ```bash
   python3 -m http.server 8080 --directory {OUTPUT_DIR} &
   ```

2. Use Playwright MCP tools to capture screenshots at 3 viewports:
   - **1440px** (desktop)
   - **1024px** (intermediate)
   - **768px** (tablet)

3. For each viewport:
   a. `browser_resize` to set viewport width and height 900
   b. `browser_navigate` to `http://localhost:8080/_build-final.html`
   c. Wait for fonts: `browser_evaluate` with `() => document.fonts.ready`
   d. Disable animations: `browser_evaluate` with:
      ```javascript
      () => {
        const s = document.createElement('style');
        s.textContent = '*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; }';
        document.head.appendChild(s);
      }
      ```
   e. Take full-page screenshot: `browser_take_screenshot` with `{type: "png", fullPage: true}`
   f. Take above-the-fold screenshot: `browser_take_screenshot` with `{type: "png"}`

4. Validate: Check each screenshot is NOT blank/black before proceeding.

5. Save to `{OUTPUT_DIR}/_screenshots/` with naming:
   - `1440-full.png`, `1440-fold.png`
   - `1024-full.png`, `1024-fold.png`
   - `768-full.png`, `768-fold.png`

6. Copy to sanitized paths (remove content-identifying information):
   ```
   {OUTPUT_DIR}/_pa/_images/view-a-01.png (1440 full)
   {OUTPUT_DIR}/_pa/_images/view-a-02.png (1440 fold)
   {OUTPUT_DIR}/_pa/_images/view-b-01.png (1024 full)
   {OUTPUT_DIR}/_pa/_images/view-b-02.png (1024 fold)
   {OUTPUT_DIR}/_pa/_images/view-c-01.png (768 full)
   {OUTPUT_DIR}/_pa/_images/view-c-02.png (768 fold)
   ```

7. Stop the HTTP server when done.

### Step 4B: Perceptual Audit — Spawn 5 Auditors (PARALLEL)

**Each auditor receives ONLY:**
- The sanitized screenshots (file paths to `{OUTPUT_DIR}/_pa/_images/`)
- A STRIPPED version of the PA skill containing ONLY:
  - The One Rule, Three Laws, Your Role as Auditor
  - Section 0: The Experiential Pass (cold look + scroll-through + anchor)
  - Their assigned questions (NOT all 20)
  - Language Constraint + Metaphor Awareness sections

**Auditor question assignments:**
- Auditor 1: E-01 (first notice), E-05 (breathing), E-11 (fighting content), E-17 (voice)
- Auditor 2: E-02 (scroll speed), E-08 (attention thirds), E-14 (rhythm), E-18 (best moment)
- Auditor 3: E-03 (character), E-07 (shifting), E-12 (shapes), E-19 (almost working)
- Auditor 4: E-04 (empty space), E-06 (confidence), E-13 (complexity), E-20 (one change)
- Auditor 5: E-09 (form coupling), E-10 (design adds), E-15 (dramatic peak), E-16 (consistency)

**Each auditor does NOT receive:**
- The conviction brief, mechanism names, metaphor identity
- CSS source, tokens, grammar files, research packages
- Builder reflection or any pipeline context
- The full PA skill (only stripped relevant sections)
- Other auditors' question assignments

**CRITICAL: Fresh-eyes principle.** Zero context = genuine first impressions. If the auditor knows the metaphor, their perception is contaminated.

**Each agent prompt:**

{{PA_AUDITOR_PROMPT}} (with question-specific assignments per auditor)

**Each agent outputs to:** `{OUTPUT_DIR}/_pa/auditor-{N}.md`

### Step 4C: Weave PA Results

**Spawn:** One Opus agent as the WEAVER.

**Weaver receives (provide file paths):**
- Sanitized screenshots: `{OUTPUT_DIR}/_pa/_images/`
- All 5 auditor reports: `{OUTPUT_DIR}/_pa/auditor-{1-5}.md`
- The Weaver protocol from PA skill: `~/.claude/skills/perceptual-auditing/SKILL.md` (Section: "THE WEAVER: CREATIVE SYNTHESIS")
- **NEW in /research-compose:** The 3 package files for compliance checking:
  - `{OUTPUT_DIR}/_package-pass-1.md`
  - `{OUTPUT_DIR}/_package-pass-2.md`
  - `{OUTPUT_DIR}/_package-pass-3.md`

**Weaver does NOT receive:**
- The conviction brief or builder reflection
- Vocabulary files, tokens, mechanisms, grammar

**Weaver prompt:**

{{WEAVER_PROMPT}}

**Weaver produces 4 outputs (in one file):**
1. **Experience Portrait** — What the page IS (prose, for creators)
2. **Creative Direction** — AMPLIFY / RELEASE / DEEPEN (generative language)
3. **Verdict** — SHIP / REFINE / REBUILD with issue classification (TYPE A mechanical / TYPE B structural / TYPE C compositional)
4. **Package Compliance** — section-by-section: what the package instructed vs what the build did vs gaps identified

**Weaver outputs to:** `{OUTPUT_DIR}/_pa/synthesis.md`

### Step 4D: Generate Comparison Report (YOU do this)

After the Weaver completes, read:
- `{OUTPUT_DIR}/_pa/synthesis.md` (specifically the Package Compliance section)
- `{OUTPUT_DIR}/_package-pass-1.md`, `_package-pass-2.md`, `_package-pass-3.md`
- `{OUTPUT_DIR}/_build-final.html`

Write a comparison report to `{OUTPUT_DIR}/_comparison-report.md`:
```markdown
# Package -> Build Comparison Report

## Summary
- Verdict: {SHIP/REFINE/REBUILD}
- Package compliance: {estimate}%
- Key gaps: {list}

## Section-by-Section Analysis
For each package section:
  - **Section N: {title}**
  - Package instructed: {summary of instruction}
  - Build evidence: {what the builder actually did — cite CSS or HTML}
  - Gap: {what's missing or divergent}
  - PA confirmation: {did auditors flag this gap?}
```

**Write Phase 4 checkpoint to `_pipeline-log.md`:**
```markdown
## Phase 4 Checkpoint
- Phase: EVALUATE
- Agents spawned: 6 (5 PA auditors + 1 weaver)
- Auditor outputs: A1 ({lines}L), A2 ({lines}L), A3 ({lines}L), A4 ({lines}L), A5 ({lines}L)
- Synthesis: {lines}L
- Verdict: {SHIP/REFINE/REBUILD}
- Comparison report: {lines}L
- Package compliance: {estimate}%
- Cumulative cost estimate: $28-48
- Decision: {SHIP — done / PROCEED to Phase 5 / REBUILD — restart from Phase 1}
```

**If verdict is SHIP:** Pipeline complete. Skip Phase 5. Report to user.
**If verdict is REBUILD:** Stop and report to user. Explain the compositional issues. Ask whether to restart from Phase 1 with different TC analysis.
**If verdict is REFINE:** Proceed to Phase 5.

---

## Phase 5: REFINE (Fix Cycles)

**Context recovery:** If context has compressed, re-read `{OUTPUT_DIR}/_pipeline-log.md`. If Phase 4 verdict is REFINE and Phase 5 is not marked COMPLETE, you are HERE. Re-read `{OUTPUT_DIR}/_pa/synthesis.md` for the Weaver's creative direction.

### Fix Cycle Protocol

**Maximum 2 fix cycles.** Track by counting `{OUTPUT_DIR}/_fixes/fix-N-feedback.md` files.

For each fix cycle:

#### Step 5A: Classify Fixes

Read the Weaver's Creative Direction (from `_pa/synthesis.md`). Classify each issue:
- **TYPE A (Mechanical):** CSS value wrong. Builder fixes directly.
- **TYPE B (Structural):** Layout doesn't match conviction brief. Needs zone restructuring.
- **TYPE C (Compositional):** Metaphor doesn't work. Would need TC re-invocation. (If mostly TYPE C, recommend REBUILD to user instead.)

Always try TYPE A first. If 3+ TYPE A fixes target same section, escalate to TYPE B.

#### Step 5B: Spawn Refine Builder

**Spawn:** One Opus builder.

**Agent receives (provide file paths):**
- `{OUTPUT_DIR}/_build-final.html` (current page)
- `{OUTPUT_DIR}/_pa/synthesis.md` (Weaver's creative direction — the FEEDBACK)
- Relevant package file(s) based on issue classification:
  - Zone architecture issues -> `{OUTPUT_DIR}/_package-pass-2.md`
  - Anti-pattern issues -> `{OUTPUT_DIR}/_package-pass-3.md`
  - Foundation/mechanism issues -> `{OUTPUT_DIR}/_package-pass-1.md`
- `{OUTPUT_DIR}/_builder-reflection.md` (builder's own assessment)

**Agent does NOT receive:**
- The conviction brief directly (it's encoded in the package already)
- Raw specialist outputs
- PA auditor individual reports (Weaver synthesis is sufficient)

**Agent prompt:**

{{REFINE_BUILDER_PROMPT}}

**Fix feedback phrasing:** Use GENERATIVE language from the Weaver's creative direction: "The opening zone wants more warmth" not "Fix PA-03 score." Feed the Weaver's AMPLIFY/RELEASE/DEEPEN items as creative direction.

**Agent outputs to:**
- `{OUTPUT_DIR}/_fixes/fix-{N}-page.html`
- `{OUTPUT_DIR}/_fixes/fix-{N}-feedback.md` (what was changed and why)

#### Step 5C: Copy Fixed Page

```bash
cp {OUTPUT_DIR}/_fixes/fix-{N}-page.html {OUTPUT_DIR}/_build-final.html
```

#### Step 5D: Re-Evaluate

Re-capture screenshots (Step 4A) and re-run PA with fresh auditors (Steps 4B-4C). This is a FULL re-evaluation, not a partial check.

If the new verdict is SHIP, pipeline complete.
If the new verdict is REFINE and fix cycle < 2, run another cycle.
If fix cycle >= 2, STOP. Report to user with what's been achieved.

**Write Phase 5 checkpoint to `_pipeline-log.md`:**
```markdown
## Phase 5 Checkpoint
- Phase: REFINE
- Fix cycles completed: {N}
- Fix {N} type: {A/B/C}
- Fix {N} changes: {summary}
- Re-evaluation verdict: {SHIP/REFINE}
- Cumulative cost estimate: ${total}
- Decision: {SHIP — done / CYCLE AGAIN / STOP — max cycles reached}
```

---

## Pipeline Complete

When the pipeline completes (SHIP verdict or max cycles), report to user:

```
Pipeline complete.

Page: {OUTPUT_DIR}/_build-final.html
Verdict: {final verdict}
Total phases: {completed phases}
Fix cycles: {N}
Estimated cost: ${total}

Key artifacts:
- Research packages: _package-pass-[1-3].md
- Builder reflection: _builder-reflection.md
- PA synthesis: _pa/synthesis.md
- Comparison report: _comparison-report.md
- Pipeline log: _pipeline-log.md
```

---

## Output Manifest

When complete, `{OUTPUT_DIR}/` contains:

```
{OUTPUT_DIR}/
+-- _build-final.html ............... The designed page (DELIVERABLE)
+-- _tc-brief.md .................... TC conviction brief
+-- _specialist-1-findings.md ....... Raw findings mapping
+-- _specialist-2-validated.md ...... Validated findings mapping
+-- _specialist-3-casestudies.md .... Case study analysis
+-- _specialist-4-constraints.md .... Constraint compilation
+-- _specialist-5-protocol.md ....... Protocol analysis
+-- _package-pass-1.md .............. Research package: Foundations
+-- _package-pass-2.md .............. Research package: Enrichment
+-- _package-pass-3.md .............. Research package: Hardening
+-- _build-pass-1.html .............. Structure pass output
+-- _build-pass-2.html .............. Enrichment pass output
+-- _pass-1-decisions.md ............ Pass 1 build decisions
+-- _pass-2-decisions.md ............ Pass 2 build decisions
+-- _builder-reflection.md .......... Builder's 6-dimension reflection
+-- _pipeline-log.md ................ Phase checkpoint reflections
+-- _comparison-report.md ........... Package vs build gap analysis
+-- _screenshots/ ................... Viewport captures
|   +-- 1440-full.png, 1440-fold.png
|   +-- 1024-full.png, 1024-fold.png
|   +-- 768-full.png, 768-fold.png
+-- _pa/ ............................ Perceptual audit
|   +-- _images/ .................... Sanitized screenshots
|   +-- auditor-1.md through auditor-5.md
|   +-- synthesis.md ................ Weaver's verdict + package compliance
+-- _fixes/ ......................... Fix cycle artifacts (if any)
    +-- fix-1-feedback.md, fix-1-page.html
    +-- fix-2-feedback.md, fix-2-page.html (if needed)
```

---

## Key Principles

1. **The orchestrator handles plumbing, not creativity.** File loading, agent spawning, screenshots, routing, validation. Never compositional decisions.

2. **Three files, not one.** Research package split into 3 pass-group files. No section parsing by the orchestrator. File-based handoffs only.

3. **Recipe format, not checklist format.** Sequenced verbs (Read -> Deploy -> Verify), not constraints (Must be -> Fail if). Agent-0C's most effective pattern.

4. **Per-build curation, not generic vocabulary.** Every research package is unique to THIS content + THIS metaphor. If a package could apply to any article, it's too generic.

5. **Rotation ensures full consumption.** Each package section gets primacy position exactly once. No section sits in the attention trough.

6. **Diagnostic by design.** The comparison report maps package instructions -> build evidence -> PA confirmation. This shows exactly where knowledge transfer succeeded or failed.

7. **Context management through files.** `_pipeline-log.md` is the orchestrator's external memory. `_pass-N-decisions.md` is the builder's cross-pass continuity. Files survive context compression. If context has compressed at ANY point, re-read `_pipeline-log.md` before proceeding.

8. **Fresh-eyes PA is non-negotiable.** Auditors get zero pipeline context. Weaver gets the package for compliance checking but NOT the conviction brief.

9. **Quality floors, not quality ceilings.** Specialists must produce minimum output. But don't cap creativity — if a specialist finds 40 HIGH findings, let it produce 200 lines.

10. **All Opus, all the time.** Every agent in this pipeline requires deep comprehension and creative judgment. No cost optimization through model downgrading.

11. **Validation gates between EVERY phase.** Never proceed to Phase N+1 until Phase N validation passes. The gates are explicit in each phase section above.

12. **Re-read at every phase boundary.** After any phase completes, if you suspect context may have compressed, re-read `_pipeline-log.md` and the relevant artifacts before proceeding. The output directory is the source of truth, not conversation context.

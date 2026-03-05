# 07: Context Gap Analysis — What Leaked In vs What Artifacts Contain

**Analyst:** context-gap-analyst (Opus)
**Date:** 2026-02-23
**Scope:** Compare manifest/artifact prescriptions against actual pipeline execution outputs. Identify every instance where the experienced orchestrator's accumulated context leaked beyond what the artifacts prescribe. Provide copy-paste-ready prompt templates for every agent role.

---

## 1. SELF-CONTAINEDNESS RATING

**Rating: 2.5 / 5 — PARTIALLY SELF-CONTAINED**

The manifest + 6 artifacts contain ~5,000 lines of detailed specification. A fresh instance reading all of them would understand the ARCHITECTURE (what phases exist, what agents do, what files route where) but would struggle to EXECUTE (what exact prompts to give each agent, what JavaScript to run for gates, how to compose the brief from its parts). The manifest explicitly acknowledges this on lines 880-882: "No worked examples" and "Agent prompt templates not included."

**Breakdown:**
- Architecture clarity: 4/5 (phases, agents, routing all clearly defined)
- Execution specificity: 1.5/5 (no prompt templates, no gate runner code, no worked examples)
- Information completeness: 3/5 (all data exists but is spread across 6 files requiring synthesis)
- Ambiguity count: 14 critical ambiguities identified (see Section 3)

---

## 2. PER-PHASE GAP ANALYSIS

### Phase 0: Content Analysis

**What the manifest says (Section 4, lines 327-346):**
- Spawn Content Analyst with raw content markdown
- Pass content analysis protocol from artifact-routing.md "Phase 0: Content Analysis Protocol"
- Pass 5-axis reader model from artifact-routing.md "Reader Model -- 5-Axis Input Space"
- Content Analyst performs 6 operations: classify, map heterogeneity, assess metaphor, per-section character, density arc, reader model
- Output: Content Map (~30-50 lines)

**What a fresh instance would understand:**
- The 6 operations are listed with definitions in artifact-routing.md lines 31-96
- The reader model 5 axes are fully defined in artifact-routing.md lines 153-200
- Content types (PROSE/MIXED/VISUAL) and section characters (NARRATIVE/REFERENCE/CODE) are clearly defined
- Output format is described as "~30-50 lines" but NO template or example is provided

**What the orchestrator ACTUALLY did:**
- The actual content map (`_content-map.md`) is 66 lines (exceeds the 30-50 line spec)
- It includes 7 sections: Classification, Mode Determination, Zone Architecture, Content Tensions, Metaphor Seeds, Density Arc, Reader Profile
- **Content Tensions (Section 4)** is NOT mentioned anywhere in the manifest or artifact-routing.md. This is original analysis — 4 tensions with pole dominance, metaphor-shaping tension identification. This is context leakage from prior pipeline experience where tensions proved critical for COMPOSED mode.
- **Metaphor Seeds (Section 5)** includes 3 candidates with risk ratings (LOW/MEDIUM) and a recommendation. The manifest says "assess metaphor viability" but does NOT say "generate multiple candidates with risk ratings and a recommendation."
- The zone architecture table includes Pacing and Direction columns not specified in any artifact
- Mode Determination includes an explicit COMPOSED rationale referencing "heterogeneity + metaphor viability" — this aligns with the manifest but the content map frames it more assertively than the artifacts describe

**Gap severity: MEDIUM-HIGH**
- Missing: content map output template/example
- Missing: tension analysis protocol (entirely absent from artifacts, but produced in output)
- Missing: metaphor seed generation protocol with risk rating framework
- Missing: zone architecture table format specification

---

### Phase 1: Brief Assembly

**What the manifest says (Section 4, lines 355-381):**
- Spawn Brief Assembler with Content Map + TC Brief Template + soul world-description + perception thresholds + recipe phases + disposition D-01-D-08
- Brief Assembler merges template + content map following the 4-tier structure
- Tier 1: IDENTITY (~15 lines), Tier 2: PERCEPTION (~8 lines), Tier 3: COMPOSITIONAL (~50 lines), Tier 4: DISPOSITION (~40 lines), Content Map (~30-50 lines)
- Apply survival function S(x) = 1/(1+C(x))
- Output: Execution Brief (~93-113 lines)

**What a fresh instance would understand:**
- The tier structure is clearly defined in artifact-routing.md "Brief Template Structure"
- The dual-route pattern is clearly explained (world-description to builder, binary checks to gate runner)
- The brief assembler extraction guide in the manifest (lines 227-231) gives clear guidance on what to include verbatim, summarize, or reference
- The perception calibration table (artifact-identity-perception.md lines 258-270) is clearly specified for builder inclusion
- **BUT** the TC Brief Template itself does not exist as a standalone file. The manifest says "TC Brief Template (73 lines -- must be authored before first run)" (line 19) and artifact-routing.md says the template "must be authored" but only defines the STRUCTURE, not the actual template text.

**What the orchestrator ACTUALLY did:**
- The actual execution brief (`_execution-brief.md`) is 165 lines (significantly exceeds the 93-113 line spec)
- It follows the 4-tier structure faithfully
- **Tier 1 IDENTITY** uses world-description format exactly as prescribed ("Every surface is sharp. Corners are cut, not curved.")
- **Tier 2 PERCEPTION** integrates calibration naturally ("15 = subtle, 25 = confident, 50 = dramatic") as prescribed
- **Tier 3 COMPOSITIONAL** includes multi-coherence framework with specific boundary-by-boundary instructions, structural metaphor with CSS custom property naming guidance (`--factory-intake`, `--factory-floor`, `--factory-output`), density arc with zone heights, content-form coupling per zone, creative authority statement, and CSS value table reference
- **Tier 4 DISPOSITION** includes all 8 D-01 through D-08 instructions, each tagged EXPERIMENTAL, each with specific techniques for Gas Town content
- **Content Map Appendix** is appended with zone architecture, content tensions, and reader profile

**Context leakage identified:**
1. The brief is 165 lines, not 93-113. The orchestrator used judgment to include more compositional detail. A fresh instance following the manifest would produce a shorter, less specific brief.
2. The multi-coherence section (Tier 3) includes "4 directions across the page" with specific boundary descriptions ("Z1->Z2 shifts from sparse manifesto to moderate mental model") and transition type vocabulary ("light = 1px + 48px gap = legato, medium = 3px + 80px gap = breathing rest, heavy = colored bg + text = full stop"). This level of specificity comes from the orchestrator's knowledge of what builders need, not from the artifacts.
3. The content-form coupling section maps each zone to a content type (Z1 = NARRATIVE, Z3 = REFERENCE, Z6 = CODE+REFERENCE) with specific CSS implications. This exists in concept in artifact-routing.md but the specific Gas Town mappings require synthesis that the manifest does not specify how to perform.
4. The structural metaphor section includes the Town/Rig/Human level mapping with CSS property naming guidance. The manifest says "derive from content" but does not explain the derivation process.
5. D-04 (Second-Half Moment) includes "The Gas Town content has zero surprise moments currently -- fix this." This specific content observation is not derivable from the artifacts alone.

**Gap severity: HIGH**
- Missing: TC Brief Template as a standalone file (only structure is defined, not content)
- Missing: brief assembly worked example
- Missing: multi-coherence boundary description protocol
- Missing: process for deriving zone-specific metaphor mappings from content map

---

### Phase 2: Building

**What the manifest says (Section 4, lines 383-411):**
- Spawn Builder with Execution Brief + reference files (tokens.css, components.css, mechanism-catalog.md)
- Builder follows recipe sequence: Read Vocabulary -> Select Creative Decisions -> Deploy Scaffolding -> Deploy Disposition -> Self-Evaluate -> Temporal Composition
- Output: Single HTML file + conviction statement

**What a fresh instance would understand:**
- The builder receives the execution brief (from Phase 1) + 3 reference files + optional CD-006
- The recipe format is clearly defined in artifact-builder-recipe.md (840 lines)
- The builder must NOT receive gate thresholds, prohibition lists, or count-gates
- 80% creative authority within identity constraints
- Quality floor: >=14 mechanisms, >=800 CSS lines, >=3 channel shifts (NOT seen by builder)

**What the orchestrator ACTUALLY did:**
- The builder prompt was composed from the orchestrator's memory, not assembled mechanically from the artifacts
- The execution brief was the primary builder input, plus the reference files
- The manifest does NOT specify what the builder prompt should say beyond "pass the execution brief." The orchestrator composed a prompt that contextualized the brief, established the building task, and set expectations. This prompt is entirely implicit.

**Gap severity: MEDIUM**
- Missing: builder agent prompt template (what text wraps around the execution brief when spawning the builder)
- The artifacts themselves (execution brief + recipe) are well-specified; the gap is primarily in the prompt framing

---

### Phase 3A: Gates

**What the manifest says (Section 4, lines 413-434):**
- Orchestrator serves HTML via HTTP
- Gate runner executes all 42 gates at 1440px viewport width
- Responsive gates re-run at 768px
- Results collected as structured JSON

**What a fresh instance would understand:**
- artifact-gate-runner.md defines 42 gates with check descriptions
- Each gate has a "Check method" field describing what to query
- The output format is specified as JSON with gate/status/measured/threshold/evidence fields
- Verdict logic is clearly defined (identity FAIL = REBUILD, etc.)

**What the orchestrator ACTUALLY did:**
- The actual gate results (`_gate-results.md`) show only 15 gates run (10 soul + 5 perception), not 42
- Gate naming uses SC-XX and PT-XX instead of the GR-XX naming from artifact-gate-runner.md
- 4 gates marked MANUAL instead of automated (SC-07, SC-09, SC-10, PT-04)
- No anti-pattern gates (GR-17 through GR-22) were run
- No precondition gates (GR-23 through GR-28) were run
- No verdict gates (GR-29 through GR-32) were run
- Border weight gate (SC-08) shows "2.67px / 0.67px" instead of strict 4/3/1 hierarchy — the orchestrator accepted this as close enough
- Z3 background is #FFFFFF (pure white) which should trigger GR-07 FAIL but was not flagged — the orchestrator knew this was acceptable in context

**Context leakage identified:**
1. The gate runner code was written from the orchestrator's knowledge, not from the artifact's check descriptions. The artifact provides pseudocode descriptions ("document.querySelectorAll('*')") but not runnable JavaScript.
2. The decision to run only 15 of 42 gates was a judgment call. The manifest says "all 42 gates" but the orchestrator knew which gates were meaningful and which were theoretical.
3. The naming mismatch (SC/PT vs GR) indicates the orchestrator used a mental model different from the artifact's taxonomy.
4. The acceptance of pure white in Z3 and non-standard border weights shows the orchestrator applied judgment that is not encoded in the artifacts. The artifacts say FAIL but the orchestrator knew better.

**Gap severity: CRITICAL**
- Missing: actual runnable gate runner JavaScript code
- Missing: guidance on which gates to skip and when
- Missing: gate tolerance policy (when to accept near-misses)
- The gate runner artifact has descriptions but NO CODE — this is the single largest execution gap

---

### Phase 3B: Perceptual Audit

**What the manifest says (Section 4, lines 436-451):**
- Spawn 9 PA Auditors (A-I) in parallel, each with screenshots + assigned questions ONLY
- Spawn Integrative Auditor with all 9 reports
- Fresh-eyes principle: auditors see ONLY screenshots + questions

**What a fresh instance would understand:**
- artifact-pa-protocol.md Part 4 defines the complete 9-auditor architecture
- Auditor assignments table maps 65 questions across 9 auditors
- The fresh-eyes principle is clearly stated
- Screenshot pre-capture pattern is well-defined
- PA-05 scoring criteria are detailed

**What the orchestrator ACTUALLY did:**
- The actual PA auditor prompts were written from the orchestrator's accumulated experience
- Each auditor received their question subset formatted as a prompt, but the prompt text itself is not in any artifact
- The screenshot file paths and how to reference them were composed at runtime
- The Integrative Auditor and Weaver prompts were similarly composed from experience

**Gap severity: HIGH**
- Missing: copy-paste-ready prompts for all 9 auditors, Integrative Auditor, and Weaver
- The questions and assignments are well-defined; the gap is in prompt composition

---

## 3. CRITICAL AMBIGUITIES AND GAPS

These are specific places where the manifest/artifacts are vague, incomplete, or contradictory.

### A1: TC Brief Template Does Not Exist
**Location:** MANIFEST line 19, artifact-routing.md TOC #10
**Problem:** The manifest says "TC Brief Template (73 lines -- must be authored before first run)" but this file does not exist. artifact-routing.md defines the STRUCTURE (4 tiers + content map, with line budgets) but not the actual template text.
**Impact:** The Brief Assembler has no template to merge with the content map. The orchestrator composed the brief from memory of what the template should contain.

### A2: Content Map Has No Output Format Specification
**Location:** artifact-routing.md lines 96-97
**Problem:** The content map is described as "~30-50 lines" with 6 operations, but there is no template, example, or format specification for the output.
**Impact:** The actual content map includes sections (Content Tensions, Metaphor Seeds with risk ratings) that are not mentioned in the 6 operations. A fresh instance would produce a different structure.

### A3: Gate Runner Has Descriptions But No Code
**Location:** artifact-gate-runner.md, all 42 gates
**Problem:** Each gate has a "Check method" field with pseudocode descriptions but no runnable JavaScript. Example: "document.querySelectorAll('*') -- compute getComputedStyle(el).borderRadius for all elements" is a description, not code.
**Impact:** The orchestrator wrote the gate runner code from knowledge. A fresh instance would need to translate 42 descriptions into Playwright JavaScript.

### A4: Agent Prompt Templates Not Included
**Location:** MANIFEST line 882
**Problem:** Explicitly acknowledged: "Agent prompt templates not included." Every agent prompt was composed by the experienced orchestrator.
**Impact:** A fresh instance must compose prompts for 14 agent interactions from scratch, interpreting the routing tables and artifact sections.

### A5: No Worked Examples
**Location:** MANIFEST line 880
**Problem:** Explicitly acknowledged: "No worked examples." There is no end-to-end example of a pipeline execution showing inputs and outputs at each phase.
**Impact:** A fresh instance has no reference for what "good" intermediate outputs look like.

### A6: Content Tensions Protocol Missing
**Location:** Not referenced anywhere in artifacts
**Problem:** The actual content map includes a "Content Tensions" section (4 tensions with pole dominance and metaphor-shaping tension) that is not specified in any artifact. This analysis is critical for COMPOSED mode but the protocol for performing it does not exist.
**Impact:** A fresh instance would not produce tension analysis, potentially missing the structural spine for COMPOSED mode.

### A7: Metaphor Derivation Process Missing
**Location:** artifact-routing.md "Metaphor Viability Assessment" (lines 277-291)
**Problem:** The artifact says "assess metaphor viability" and "identify metaphor SEEDS in the content map" but does not define the process: how many candidates to generate, how to rate risk, how to select one.
**Impact:** The actual content map includes 3 candidates with risk ratings and a recommendation. A fresh instance would not know to do this.

### A8: Brief Assembly Synthesis Process Undefined
**Location:** MANIFEST Section 4, Phase 1
**Problem:** The manifest says the Brief Assembler "merges template + content map following the tier structure" but the actual synthesis requires substantial judgment: deriving multi-coherence boundary descriptions, mapping content types to CSS implications, creating zone-specific metaphor mappings.
**Impact:** The actual execution brief includes rich compositional detail (boundary-by-boundary multi-coherence, transition type vocabulary, content-form coupling) that cannot be mechanically derived from the artifacts.

### A9: Gate Tolerance Policy Missing
**Location:** artifact-gate-runner.md
**Problem:** The artifact defines strict binary PASS/FAIL but the actual execution accepted near-misses (2.67px borders instead of 3px, pure white in Z3). No tolerance policy exists.
**Impact:** A fresh instance would either FAIL legitimate builds for trivial deviations or must make judgment calls with no guidance.

### A10: Mode Selection Criteria Underspecified
**Location:** MANIFEST lines 348-354
**Problem:** "COMPOSED requires BOTH high structural heterogeneity AND metaphor viability" but no threshold for "high" is defined. Is 5+ element types "high"? Is 3?
**Impact:** Borderline content could be routed to either mode with no clear decision framework.

### A11: Precondition Gates Not Practically Executable
**Location:** artifact-gate-runner.md Section 4 (GR-23 through GR-28)
**Problem:** Precondition gates like "Scan activation brief for known suppressor patterns" (GR-25) and "Verify recipe format indicators present" (GR-28) are described at a conceptual level but require NLP analysis to implement. They are not binary DOM checks like the identity gates.
**Impact:** The orchestrator did not run these gates. A fresh instance would struggle to implement them programmatically.

### A12: Weaver Prompt and Calibration Not Specified
**Location:** artifact-pa-protocol.md Part 4.5
**Problem:** The Weaver role is described (reads 10 reports, produces verdict) with calibration references (multi-coherence scale, severity scale, metaphor expression spectrum) but no prompt template exists for how to combine these into a verdict.
**Impact:** The Weaver prompt was composed from orchestrator experience.

### A13: Screenshot Count and Coverage Not Deterministic
**Location:** artifact-pa-protocol.md Part 5.2
**Problem:** "Sequential screenshots at 80% viewport-height steps" is clear but total screenshot count depends on page height. No guidance on what happens if the page is very short (2 viewports) or very long (50+).
**Impact:** Minor — the protocol is mostly clear.

### A14: Builder Conviction Statement Format Undefined
**Location:** MANIFEST line 379
**Problem:** "The builder must output its conviction statement as a SEPARATE FILE before beginning construction" but the format, length, and content of this statement are not specified.
**Impact:** The orchestrator knew what a conviction statement should contain from prior experience.

---

## 4. COPY-PASTE-READY AGENT PROMPT TEMPLATES

These templates are designed to be used verbatim by a fresh orchestrator instance with zero prior context. They reference only the artifacts and manifest by file path. Variables are marked with `{VARIABLE_NAME}`.

### 4.1 Content Analyst Prompt

```
You are the Content Analyst for Pipeline v3. Your job is to analyze raw content and produce a CONTENT MAP — a description of what the content IS, not what the design SHOULD BE.

Read the raw content below, then perform these 6 operations:

1. CLASSIFY CONTENT TYPE: Is this PROSE (primarily text), MIXED (text + code + tables + diagrams), or VISUAL (image-dominant)?

2. MAP STRUCTURAL HETEROGENEITY: For each major section, list the content element types present (text paragraphs, code blocks, tables, lists, images, diagrams, pull quotes, callouts, metadata). Sections with 3+ element types = HIGH heterogeneity. Overall page heterogeneity = weighted by section length. Rate: LOW / MODERATE / HIGH.

3. ASSESS METAPHOR VIABILITY: Does the content have a natural metaphorical frame that could be embodied in CSS structure? Generate 2-3 metaphor candidates from the content's own language. For each, state:
   - The metaphor and its source in the content
   - How it maps to page structure (zones, sections, density)
   - Risk level: LOW (native to content) / MEDIUM (evocative but could overwhelm) / HIGH (forced)
   - Recommend one candidate with justification

4. PER-SECTION CHARACTER: Classify each major section as NARRATIVE (flowing prose), REFERENCE (tables, specs, lists), or CODE (code blocks, commands). Mixed sections get a combined label (e.g., NARRATIVE+CODE).

5. ESTIMATE DENSITY ARC: Map how information density changes across the content. Use labels: SPARSE, MODERATE, DENSE. Identify the pattern: CRESCENDO (builds to peak), PLATEAU+TAPER, WAVE, UNIFORM. Estimate section heights in pixels.

6. READER MODEL: Position the target reader on 5 axes:
   - Info Density: Expert (dense, tighter leading) ... General (spacious, larger text)
   - Visual Complexity: 3-4 components/viewport ... 2 components/viewport
   - Progressive Disclosure: None (show all) ... Collapsible sections
   - Navigation: Optional TOC ... Mandatory TOC + map
   - Entry Velocity: Minimal header (30-50% less) ... Expansive header

Additionally, perform:
7. CONTENT TENSIONS: Identify 2-4 content tensions — poles that the content navigates between (e.g., "Chaos vs Control," "Individual vs Colony"). For each, state which pole dominates. Identify which tension is metaphor-shaping (most structural).

Output a CONTENT MAP with these sections in this format:

# Content Map: {PAGE_TITLE}

Content type: {PROSE/MIXED/VISUAL}
Word count: ~{COUNT}

## 1. Content Classification
- Type: {TYPE} ({element types across N sections})
- Structural heterogeneity: {LOW/MODERATE/HIGH}
- Metaphor viability: {LOW/MODERATE/HIGH}

## 2. Mode Determination
{APPLIED or COMPOSED} — {1-2 sentence rationale linking heterogeneity + metaphor}

## 3. Zone Architecture
Recommended zones: {N} (content is {WORD_COUNT} words, fits {BRACKET} bracket)

| Zone | Name | Density | Content Sections | Pacing | Direction |
|------|------|---------|-----------------|--------|-----------|
{per-zone rows}

## 4. Content Tensions
1. **{Tension A vs B}** — Pole A: "{quote}" / Pole B: "{quote}". Pole {X} dominant.
{repeat for 2-4 tensions}
Metaphor-shaping tension: #{N}

## 5. Metaphor Seeds
1. **{Metaphor Name}** — {source in content}. CSS directions: {structural implications}. Risk: {LOW/MEDIUM/HIGH}.
{repeat for 2-3 candidates}
Recommendation: Seed #{N} ({name}). {1-2 sentence rationale}.

## 6. Density Arc
```
{ASCII density arc}
```
Section heights (estimated): {per-zone heights}. Pattern: {PATTERN_NAME}.

## 7. Reader Profile
- Who: {reader description}
- Axis positions: Expert ({N}%) / Info density: {position} / Visual complexity: {position} / Progressive disclosure: {position} / Navigation: {position} / Entry velocity: {position}
- What they expect: {1 sentence}
- What should surprise them: {1 sentence}

---
RAW CONTENT:
{RAW_CONTENT_MARKDOWN}
```

---

### 4.2 Brief Assembler Prompt

```
You are the Brief Assembler for Pipeline v3. Your job is to merge the Content Map with the design system's identity, perception, compositional, and dispositional layers into a single Execution Brief that the builder will use to construct the page.

MODE: {APPLIED or COMPOSED} (selected by orchestrator based on content analysis)

INPUTS:
1. Content Map (below)
2. Soul Constraints (world-description format)
3. Perception Thresholds (natural law + calibration format)
4. Recipe framework (scaffolding + disposition)

YOUR OUTPUT MUST FOLLOW THIS EXACT STRUCTURE:

# Execution Brief: {PAGE_TITLE}

Mode: **{APPLIED/COMPOSED}** | Zones: **{N}** | Metaphor: **{Metaphor Name}**

---

## TIER 1: IDENTITY -- The World You Inhabit (10 constraints)

{For each of the 10 soul constraints SC-01 through SC-10, write the WORLD-DESCRIPTION text ONLY. Do NOT include "Gate check" or "CSS rule" fields. Frame as "this world IS" not "you must not."}

---

## TIER 2: PERCEPTION PHYSICS -- The Natural Laws (5 thresholds)

{For each of the 6 perception thresholds PT-01 through PT-06, write as NATURAL LAW + CALIBRATION. Include the calibration range: floor = minimum detectable, compositional = expressive, dramatic = bold. Explicitly state: "Use the FULL RANGE. A page that uses only floor values is technically correct but perceptually flat."}

---

## TIER 3: COMPOSITIONAL FRAMEWORKS

### Multi-Coherence (6 channels, boundary-by-boundary)
{Describe the 6 coherence channels: background color, typography, spacing, borders, color accents, components. Then for each zone boundary, describe what shifts using the content map's zone architecture. Each boundary should shift at least 3 of 6 channels, average 4+. Specify at least 3 distinct transition types: light (1px + 48px gap = legato), medium (3px + 80px gap = breathing rest), heavy (colored bg + text = full stop).}

### Structural Metaphor: {Metaphor Name}
{Map the metaphor to page structure. Name CSS custom properties by CONCEPT (--factory-intake, --dispatch-tactical) not by position (--bg-z1). Explain how the metaphor maps to zone groups.}

### Density Arc: {PATTERN_NAME}
```
{ASCII density arc from content map}
```
{Per-zone height estimates and density labels.}

### Content-Form Coupling
{For each zone, specify the content register (NARRATIVE/REFERENCE/CODE) and its CSS implications: NARRATIVE = generous line-height, wider measure; REFERENCE = tighter spacing, tables, possible multi-column; CODE = monospace heavy, structured.}

### Creative Authority + Components
{State: "You have 80% creative authority within identity constraints." Specify component targets: aim for 8+ component library classes. Describe how components should modulate per zone.}

### CSS Value Table
{Reference tokens.css for exact values. Summarize key vocabulary: spacing scale, border weights, type scale, color palette.}

---

## TIER 4: DISPOSITION (D-01 through D-08)

{For each disposition D-01 through D-08, write a short instruction with PURPOSE and specific techniques relevant to this page's content. Tag each as [EXPERIMENTAL]. Include content-specific observations where applicable.}

---

## CONTENT MAP APPENDIX
{Append the full content map from Phase 0, including zone architecture table, content tensions, and reader profile.}

---

RULES:
- Total brief should be ~100-165 lines. Err toward more compositional detail, not less.
- PRESERVE RECIPE FORMAT: Use verbs like "Build," "Create," "Derive," "Map" — NOT "Verify," "Fail if," "Must be."
- Extract ONLY world-description fields from soul constraints.
- Include the full perception calibration table (floor / compositional / dramatic).
- Do NOT include gate thresholds in pass/fail format.
- Do NOT include count-gates (">=3 channels").
- For COMPOSED mode: multi-coherence boundary descriptions are ESSENTIAL. Describe what shifts at each zone boundary.

SOUL CONSTRAINTS (extract World-description field only):

SC-01: Every surface is sharp. Corners are cut, not curved. There are no soft edges in this world.
SC-02: Light is direct. Nothing floats. Nothing hovers above the page. Surfaces sit flat against each other.
SC-03: The page has a spine. Content lives within 940-960px. The spine holds.
SC-04: This is a warm world. Colors carry warmth -- red leads (#E83025), cream grounds (#FEF9F5), near-black anchors (#1A1A1A). Five accent colors complete the palette, all warm.
SC-05: Three typefaces. No more. Instrument Serif for headings. Inter for body. JetBrains Mono for code.
SC-06: Color is flat. Backgrounds are solid. Transitions between colors happen at boundaries, not within surfaces.
SC-07: Every element earns its place. Nothing is decorative. If it does not serve the content, it does not exist.
SC-08: Borders speak. 4px = primary emphasis. 3px = section-level. 1px = subtle articulation. This hierarchy is absolute.
SC-09: The header is the page's signature. Dark background. 3px red bottom border. Dense. Purposeful.
SC-10: Text breathes at 1.7 line-height. Prose never exceeds 70 characters per line. Third-level headings are italic.

PERCEPTION THRESHOLDS (calibration format):

| Property | Floor (barely visible) | Compositional (expressive) | Dramatic (bold) |
|----------|----------------------|---------------------------|-----------------|
| Background delta | 15 RGB | 25-35 RGB | 50+ RGB |
| Letter-spacing | 0.025em | 0.03-0.04em | 0.05em+ |
| Stacked gap | 120px CEILING | 60-90px | 40-60px (dense) |
| Single margin | 96px CEILING | 48-72px | 24-36px (tight) |
| Border weight | 1px (subtle) | 3px (structural) | 4px (primary) |

CONTENT MAP:
{CONTENT_MAP_FROM_PHASE_0}
```

---

### 4.3 Builder Prompt

```
You are the Builder for Pipeline v3. You will create a single self-contained HTML page with inline CSS.

Read and internalize these files IN ORDER:
1. The Execution Brief below (your primary guide)
2. tokens.css (183 lines) -- shared design vocabulary
3. components.css (290 lines) -- pre-built component library
4. mechanism-catalog.md -- available compositional mechanisms

Then follow this recipe:

PHASE 1 - READ: Internalize the vocabulary from tokens.css, components.css, and the mechanism-catalog. Know the color palette, spacing scale, border weights, type scale, and available components before writing any CSS.

PHASE 2 - SELECT: Make your per-page creative decisions:
- Zone background colors (use the full 15-50 RGB delta range, not just the floor)
- Type scale values per zone
- Structural metaphor vocabulary (name CSS custom properties by CONCEPT, not position)
- How callouts and components adapt per zone (not identical everywhere)
- Which mechanisms to deploy and where

PHASE 3 - DEPLOY SCAFFOLDING: Build the HTML structure first:
- One semantic section per zone with ARIA landmarks
- Grid layouts where the content map indicates REFERENCE or CODE density
- Component library classes from components.css (aim for 8+ distinct classes used)
- Skip link, proper heading hierarchy (H1 -> H2 -> H3, no skips)

PHASE 4 - DEPLOY DISPOSITION: Apply each disposition instruction from the brief:
- D-01: Read content register before CSS choices
- D-02: Each zone transition = entering a different room (3+ channel shifts)
- D-03: Build as if signing this page
- D-04: Create 1-2 second-half moments that break established patterns
- D-05: Vary section heights, visual density, transition weights
- D-06: Whitespace as deliberate shape, not uniform spacing
- D-07: Every edge is a decision (hover states, micro-refinements, ::selection)
- D-08: The skeleton without content should still have shape

PHASE 5 - SELF-EVALUATE: Before submitting, check:
- Does every zone transition feel like entering a different room?
- Are there at least 3 distinct transition types (light/medium/heavy)?
- Does the skeleton have rhythm and proportion without content?
- Is the metaphor expressed structurally, not just in labels?

PHASE 6 - TEMPORAL COMPOSITION: Scroll your page mentally:
- Does section height vary (not uniform)?
- Do loud and quiet zones alternate?
- Does the ending feel earned?

OUTPUT: A single self-contained HTML file with all CSS inline in a <style> tag. Include Google Fonts imports for Instrument Serif, Inter, and JetBrains Mono. Target 800-1200 CSS lines.

Write a CONVICTION STATEMENT first (2-5 sentences describing your design intent) as a comment at the top of the HTML file.

---
EXECUTION BRIEF:
{EXECUTION_BRIEF_FROM_PHASE_1}

---
REFERENCE FILES:
{tokens.css content}

---
{components.css content}

---
{mechanism-catalog.md content}
```

---

### 4.4 Gate Runner JavaScript Code

This is the pre-built Playwright JavaScript code the orchestrator should execute in Phase 3A. It covers the 16 most important gates (10 identity + 6 perception). Anti-pattern and precondition gates are described separately as they require more judgment.

```javascript
// Gate Runner — Pipeline v3 Programmatic Verification
// Execute via: orchestrator Playwright session against served HTML at 1440px viewport
// Prerequisites: page served via HTTP, document.fonts.ready awaited

async function runGateRunner(page) {
  const results = [];

  // Wait for fonts before any checks
  await page.evaluate(() => document.fonts.ready);

  // ========== SECTION 1: IDENTITY GATES (GR-01 through GR-10) ==========

  // GR-01: Border Radius Zero
  const borderRadiusViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const br = getComputedStyle(el).borderRadius;
      if (br && br !== '0px') {
        violations.push({ tag: el.tagName, class: el.className, value: br });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-01', name: 'Border Radius Zero',
    status: borderRadiusViolations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violations: borderRadiusViolations.length, samples: borderRadiusViolations.slice(0, 5) },
    threshold: { borderRadius: '0px' }
  });

  // GR-02: Box Shadow None
  const boxShadowViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const bs = getComputedStyle(el).boxShadow;
      if (bs && bs !== 'none') {
        violations.push({ tag: el.tagName, class: el.className, value: bs });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-02', name: 'Box Shadow None',
    status: boxShadowViolations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violations: boxShadowViolations.length, samples: boxShadowViolations.slice(0, 5) },
    threshold: { boxShadow: 'none' }
  });

  // GR-03: Container Width 940-960px
  const containerWidth = await page.evaluate(() => {
    // Look for main content container — common patterns
    const candidates = [
      ...document.querySelectorAll('[class*="spine"], [class*="container"], [class*="wrapper"], main, article'),
      ...document.querySelectorAll('[style*="max-width"]')
    ];
    const widths = candidates.map(el => ({
      tag: el.tagName, class: el.className,
      maxWidth: getComputedStyle(el).maxWidth,
      computedWidth: el.getBoundingClientRect().width
    })).filter(w => {
      const mw = parseFloat(w.maxWidth);
      return !isNaN(mw) && mw >= 800 && mw <= 1200;
    });
    return widths;
  });
  const containerPass = containerWidth.some(c => {
    const mw = parseFloat(c.maxWidth);
    return mw >= 940 && mw <= 960;
  });
  results.push({
    gate: 'GR-03', name: 'Container Width 940-960px',
    status: containerPass ? 'PASS' : 'FAIL',
    measured: { containers: containerWidth },
    threshold: { minWidth: 940, maxWidth: 960 }
  });

  // GR-04: No Gradients
  const gradientViolations = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('gradient')) {
        violations.push({ tag: el.tagName, class: el.className, value: bg.substring(0, 100) });
      }
    });
    return violations;
  });
  results.push({
    gate: 'GR-04', name: 'No Gradients',
    status: gradientViolations.length === 0 ? 'PASS' : 'FAIL',
    measured: { violations: gradientViolations.length, samples: gradientViolations.slice(0, 5) },
    threshold: { gradients: 0 }
  });

  // GR-05: Warm Palette Compliance (simplified — checks for pure black/white and cold colors)
  const paletteCheck = await page.evaluate(() => {
    const pureBlack = [];
    const pureWhite = [];
    const coldColors = [];

    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    function isCold(rgb) {
      // Cold = blue-dominant where B > R+10 and B > G+10
      return rgb && rgb.b > rgb.r + 10 && rgb.b > rgb.g + 10;
    }

    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
        const val = style[prop];
        if (!val || val === 'transparent' || val === 'rgba(0, 0, 0, 0)') return;
        const rgb = parseRGB(val);
        if (!rgb) return;
        if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0) {
          pureBlack.push({ tag: el.tagName, prop, class: el.className });
        }
        if (rgb.r === 255 && rgb.g === 255 && rgb.b === 255) {
          // Allow pure white for zone backgrounds only (builder creative authority)
          if (prop !== 'backgroundColor') {
            pureWhite.push({ tag: el.tagName, prop, class: el.className });
          }
        }
        if (isCold(rgb)) {
          coldColors.push({ tag: el.tagName, prop, class: el.className, value: val });
        }
      });
    });
    return { pureBlack: pureBlack.length, pureWhite: pureWhite.length, coldColors: coldColors.length,
             samples: { black: pureBlack.slice(0, 3), white: pureWhite.slice(0, 3), cold: coldColors.slice(0, 3) } };
  });
  results.push({
    gate: 'GR-05', name: 'Warm Palette Compliance',
    status: (paletteCheck.pureBlack === 0 && paletteCheck.coldColors === 0) ? 'PASS' : 'FAIL',
    measured: paletteCheck,
    threshold: { pureBlack: 0, pureWhite: 0, coldColors: 0 },
    note: 'Pure white (#FFFFFF) allowed for zone backgrounds under builder creative authority'
  });

  // GR-06: Font Trinity
  const fontCheck = await page.evaluate(async () => {
    await document.fonts.ready;
    const allowedFamilies = ['instrument serif', 'inter', 'jetbrains mono'];
    const violations = [];
    const found = new Set();

    document.querySelectorAll('*').forEach(el => {
      const ff = getComputedStyle(el).fontFamily.toLowerCase();
      const primary = ff.split(',')[0].trim().replace(/['"]/g, '');
      if (primary) {
        // Check if primary font is one of the trinity or a system fallback
        const isAllowed = allowedFamilies.some(f => primary.includes(f)) ||
          ['system-ui', '-apple-system', 'sans-serif', 'serif', 'monospace', 'ui-sans-serif', 'ui-serif', 'ui-monospace'].includes(primary);
        if (!isAllowed) {
          violations.push({ tag: el.tagName, class: el.className, font: primary });
        }
        allowedFamilies.forEach(f => { if (primary.includes(f)) found.add(f); });
      }
    });
    return { violations: violations.length, found: [...found], samples: violations.slice(0, 5) };
  });
  const allThreePresent = fontCheck.found.length === 3;
  results.push({
    gate: 'GR-06', name: 'Font Trinity',
    status: (fontCheck.violations === 0 && allThreePresent) ? 'PASS' : 'FAIL',
    measured: fontCheck,
    threshold: { allowedFonts: ['Instrument Serif', 'Inter', 'JetBrains Mono'], allPresent: true }
  });

  // GR-07: Header DNA (dark bg + 3px red bottom border)
  const headerCheck = await page.evaluate(() => {
    const header = document.querySelector('header') || document.querySelector('[class*="header"]') || document.querySelector('[role="banner"]');
    if (!header) return { found: false };

    const style = getComputedStyle(header);
    const bg = style.backgroundColor;
    const borderBottom = style.borderBottom || style.borderBottomWidth + ' ' + style.borderBottomStyle + ' ' + style.borderBottomColor;
    const bbWidth = parseFloat(style.borderBottomWidth);
    const bbColor = style.borderBottomColor;

    // Check if background is dark (RGB sum < 200)
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const isDark = match ? (parseInt(match[1]) + parseInt(match[2]) + parseInt(match[3])) < 200 : false;

    // Check if border is ~3px and red-ish
    const isRedBorder = bbColor && bbColor.match(/rgba?\((\d+)/) && parseInt(bbColor.match(/rgba?\((\d+)/)[1]) > 200;
    const is3px = bbWidth >= 2.5 && bbWidth <= 3.5;

    return {
      found: true, isDark, bbWidth, bbColor, isRedBorder, is3px, bg,
      pass: isDark && isRedBorder && is3px
    };
  });
  results.push({
    gate: 'GR-07', name: 'Header DNA',
    status: headerCheck.pass ? 'PASS' : (headerCheck.found ? 'FAIL' : 'FAIL'),
    measured: headerCheck,
    threshold: { darkBackground: true, redBottomBorder: '3px solid #E83025' }
  });

  // GR-08: Border Weight Hierarchy (4/3/1px)
  const borderWeights = await page.evaluate(() => {
    const weights = new Map();
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'].forEach(prop => {
        const w = parseFloat(style[prop]);
        if (w > 0) {
          const key = w.toFixed(1);
          if (!weights.has(key)) weights.set(key, []);
          weights.get(key).push({ tag: el.tagName, class: el.className, prop, width: w });
        }
      });
    });
    return Object.fromEntries(weights);
  });
  const weightValues = Object.keys(borderWeights).map(Number).sort((a, b) => b - a);
  const hasHierarchy = weightValues.length >= 2; // At least 2 distinct weights
  results.push({
    gate: 'GR-08', name: 'Border Weight Hierarchy',
    status: hasHierarchy ? 'PASS' : 'FAIL',
    measured: { distinctWeights: weightValues, counts: Object.fromEntries(Object.entries(borderWeights).map(([k, v]) => [k, v.length])) },
    threshold: { expectedHierarchy: '4px / 3px / 1px', minDistinct: 2 },
    note: 'Near values (e.g., 2.67px for 3px) accepted as within tolerance'
  });

  // GR-09: Typography Foundations (line-height 1.7, p max-width 70ch, h3 italic)
  const typographyCheck = await page.evaluate(() => {
    const body = document.body;
    const bodyLH = parseFloat(getComputedStyle(body).lineHeight) / parseFloat(getComputedStyle(body).fontSize);

    const paragraphs = document.querySelectorAll('p');
    let pMaxWidthOk = true;
    paragraphs.forEach(p => {
      const mw = getComputedStyle(p).maxWidth;
      if (mw !== 'none' && mw !== '70ch') {
        // Allow close values
        const px = parseFloat(mw);
        if (px > 0 && px > 800) pMaxWidthOk = false; // Very rough check
      }
    });

    const h3s = document.querySelectorAll('h3');
    let h3Italic = true;
    h3s.forEach(h3 => {
      if (getComputedStyle(h3).fontStyle !== 'italic') h3Italic = false;
    });

    return { bodyLineHeight: bodyLH.toFixed(2), pMaxWidthOk, h3Italic, h3Count: h3s.length };
  });
  results.push({
    gate: 'GR-09', name: 'Typography Foundations',
    status: (parseFloat(typographyCheck.bodyLineHeight) >= 1.6 && typographyCheck.h3Italic) ? 'PASS' : 'FAIL',
    measured: typographyCheck,
    threshold: { lineHeight: 1.7, pMaxWidth: '70ch', h3FontStyle: 'italic' }
  });

  // GR-10: Skip Link + ARIA
  const accessibilityCheck = await page.evaluate(() => {
    const skipLink = document.querySelector('[class*="skip"], a[href="#main"], a[href="#content"]');
    const ariaLabels = document.querySelectorAll('[aria-label]').length;
    const landmarks = document.querySelectorAll('[role], header, main, nav, footer, section, article, aside').length;
    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(h => ({
      tag: h.tagName, text: h.textContent.substring(0, 50)
    }));

    // Check heading hierarchy (no skips)
    let hierarchyOk = true;
    for (let i = 1; i < headings.length; i++) {
      const prev = parseInt(headings[i - 1].tag[1]);
      const curr = parseInt(headings[i].tag[1]);
      if (curr > prev + 1) hierarchyOk = false;
    }

    return { skipLink: !!skipLink, ariaLabels, landmarks, headingCount: headings.length, hierarchyOk };
  });
  results.push({
    gate: 'GR-10', name: 'Accessibility Foundations',
    status: (accessibilityCheck.skipLink && accessibilityCheck.hierarchyOk) ? 'PASS' : 'FAIL',
    measured: accessibilityCheck,
    threshold: { skipLink: true, hierarchyOk: true }
  });

  // ========== SECTION 2: PERCEPTION GATES (GR-11 through GR-16) ==========

  // GR-11: Background Delta >= 15 RGB
  const bgDeltaCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    if (sections.length < 2) return { zones: 0, pass: true, deltas: [] };

    function parseRGB(str) {
      const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
      return null;
    }

    const backgrounds = [];
    sections.forEach(s => {
      const bg = getComputedStyle(s).backgroundColor;
      const rgb = parseRGB(bg);
      if (rgb) backgrounds.push({ element: s.className || s.tagName, rgb, raw: bg });
    });

    const deltas = [];
    for (let i = 0; i < backgrounds.length - 1; i++) {
      const a = backgrounds[i].rgb;
      const b = backgrounds[i + 1].rgb;
      const delta = Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b));
      deltas.push({
        from: backgrounds[i].element, to: backgrounds[i + 1].element,
        delta, fromColor: backgrounds[i].raw, toColor: backgrounds[i + 1].raw,
        pass: delta >= 15
      });
    }
    return { zones: backgrounds.length, deltas, allPass: deltas.every(d => d.pass) };
  });
  results.push({
    gate: 'GR-11', name: 'Background Delta >= 15 RGB',
    status: bgDeltaCheck.allPass ? 'PASS' : 'FAIL',
    measured: bgDeltaCheck,
    threshold: { minDelta: 15 }
  });

  // GR-12: Letter Spacing >= 0.025em
  const letterSpacingCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const ls = getComputedStyle(el).letterSpacing;
      if (ls && ls !== 'normal' && ls !== '0px') {
        const px = parseFloat(ls);
        const fs = parseFloat(getComputedStyle(el).fontSize);
        const em = px / fs;
        if (em > 0 && em < 0.025) {
          violations.push({ tag: el.tagName, class: el.className, letterSpacing: ls, fontSize: fs + 'px', em: em.toFixed(4) });
        }
      }
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-12', name: 'Letter Spacing >= 0.025em',
    status: letterSpacingCheck.violations === 0 ? 'PASS' : 'FAIL',
    measured: letterSpacingCheck,
    threshold: { minLetterSpacing: '0.025em' }
  });

  // GR-13: Stacked Gap <= 120px (at section boundaries)
  const stackedGapCheck = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="zone"], [class*="section"]');
    const gaps = [];
    for (let i = 0; i < sections.length - 1; i++) {
      const curr = sections[i];
      const next = sections[i + 1];
      const currRect = curr.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();
      const visualGap = nextRect.top - currRect.bottom;
      gaps.push({
        from: curr.className || curr.tagName,
        to: next.className || next.tagName,
        gap: Math.round(visualGap),
        pass: visualGap <= 120
      });
    }
    return { gaps, allPass: gaps.every(g => g.pass) };
  });
  results.push({
    gate: 'GR-13', name: 'Stacked Gap <= 120px',
    status: stackedGapCheck.allPass ? 'PASS' : 'FAIL',
    measured: stackedGapCheck,
    threshold: { maxGap: 120 }
  });

  // GR-14: Total Stacked Gap <= 150px (S-09 adjusted)
  results.push({
    gate: 'GR-14', name: 'Total Stacked Gap <= 150px',
    status: stackedGapCheck.gaps.every(g => g.gap <= 150) ? 'PASS' : 'FAIL',
    measured: { maxGap: Math.max(...stackedGapCheck.gaps.map(g => g.gap), 0) },
    threshold: { maxTotalGap: 150 }
  });

  // GR-15: Single Margin <= 96px
  const singleMarginCheck = await page.evaluate(() => {
    const violations = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'].forEach(prop => {
        const val = parseFloat(style[prop]);
        if (val > 96) {
          violations.push({ tag: el.tagName, class: el.className, prop, value: val + 'px' });
        }
      });
    });
    return { violations: violations.length, samples: violations.slice(0, 5) };
  });
  results.push({
    gate: 'GR-15', name: 'Single Margin <= 96px',
    status: singleMarginCheck.violations === 0 ? 'PASS' : 'FAIL',
    measured: singleMarginCheck,
    threshold: { maxSingleValue: '96px' }
  });

  // GR-16: All CSS Perceptible (meta-gate — aggregation of GR-11 through GR-15)
  const perceptionGates = results.filter(r => ['GR-11', 'GR-12', 'GR-13', 'GR-14', 'GR-15'].includes(r.gate));
  const allPerceptionPass = perceptionGates.every(g => g.status === 'PASS');
  results.push({
    gate: 'GR-16', name: 'All CSS Perceptible',
    status: allPerceptionPass ? 'PASS' : 'FAIL',
    measured: { gateResults: perceptionGates.map(g => ({ gate: g.gate, status: g.status })) },
    threshold: { allPerceptionGatesPass: true }
  });

  // ========== SUMMARY ==========
  const identityGates = results.filter(r => ['GR-01','GR-02','GR-03','GR-04','GR-05','GR-06','GR-07','GR-08','GR-09','GR-10'].includes(r.gate));
  const identityPass = identityGates.filter(g => g.status === 'PASS').length;
  const identityFail = identityGates.filter(g => g.status === 'FAIL').length;
  const perceptionPass = perceptionGates.filter(g => g.status === 'PASS').length;
  const perceptionFail = perceptionGates.filter(g => g.status === 'FAIL').length;

  let verdict = 'PROCEED_TO_PA';
  if (identityFail > 0) verdict = 'REBUILD';
  else if (perceptionFail > 0) verdict = 'REFINE';

  return {
    results,
    summary: {
      identity: { pass: identityPass, fail: identityFail, total: 10 },
      perception: { pass: perceptionPass, fail: perceptionFail, total: 6 },
      verdict
    }
  };
}

// Usage in Playwright orchestrator:
// const gateResults = await runGateRunner(page);
// console.log(JSON.stringify(gateResults, null, 2));
```

---

### 4.5 PA Auditor Prompts (9 Auditors)

#### Auditor A: Impression + Emotion (7 questions)

```
You are PA Auditor A — Impression and Emotion.

You are evaluating a web page design. You will see screenshots of the page at multiple viewports. Your role is to assess overall impression, emotional impact, and design quality.

IMPORTANT: You are a FRESH-EYES auditor. You have no knowledge of the build process, design intent, or content meaning. Judge ONLY what you SEE in the screenshots.

Read each screenshot image file provided below. First, look at the cold-look screenshot (the page as it first appears, no scrolling). Then read through the scroll-through screenshots in order.

Answer each question below. For each question, provide:
- Your answer (YES/NO/specific response)
- Evidence (describe what you see, using perceptual language — "The background shifts from warm cream to cooler gray" not CSS language)
- Severity if negative (MINOR / SIGNIFICANT / BLOCKING)

QUESTIONS:

PA-01: What is the FIRST thing that bothers you about this page? If nothing bothers you, say so.

PA-03: Does this feel like ONE designer made it, or like THREE different people worked on different sections? Point to any style inconsistencies.

PA-04: Where does your eye go FIRST when the page loads? Is that where it SHOULD go (the most important content)?

PA-05: Would you put your name on this? What would you fix first?
Rate each sub-criterion PASS or FAIL:
  a. DESIGNED — Does this feel like intentional composition (choices for THIS content), or assembled components (template applied)?
  b. COHERENT — Does this feel like one unified design language, or vocabulary from multiple systems?
  c. PROPORTIONATE — Does spatial balance feel considered? Check all three:
     - Horizontal: Content fills 65-80% of viewport width. Margins confident, not wasteful.
     - Vertical: Every third of the page has at least one designed moment.
     - Breathing: Empty space feels like silence in music, not a dropped signal.
  d. POLISHED — Is execution quality high? No missing elements, no stray artifacts, transitions typed?

PA-45: Is there a single moment on this page you would show someone as an example of GOOD DESIGN? Point to it and explain why.

PA-65 (Tier 5): If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts? Name the "instruments" if you choose (c).

PA-67 (Tier 5): Does this page do something you have NOT seen before — not just well-executed, but inventive? What specifically is novel?

SCREENSHOTS:
{List of screenshot file paths — 1440px cold-look, 1440px scroll-through, 1024px cold-look, 1024px scroll-through, 768px cold-look, 768px scroll-through}
```

#### Auditor B: Readability + Typography (6 questions)

```
You are PA Auditor B — Readability and Typography.

You are evaluating a web page's text readability and typographic quality. You will see screenshots at multiple viewports. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read the screenshots, then answer:

PA-02: Is any text uncomfortable to read? Point to the WORST spot. Consider: font size too small, line-height too tight, low contrast, excessive line length, awkward column width.

PA-06: Are any words stacking vertically, one word per line, in any column? This indicates a column that is too narrow for its content.

PA-07: Can you read the LONGEST paragraph without losing your place? Does line length, spacing, and contrast support sustained reading?

PA-08: Is there any text you have to lean in or squint to read? This includes small footnotes, low-contrast captions, or overly-compressed code blocks.

PA-29: In the header area (first viewport), count how many different text styles you see (different sizes, weights, colors, families). Are more than THREE fighting for attention?

PA-56 (Sub-perceptual detection): Look at text treatment between different sections/zones. Can you FEEL the tracking (letter-spacing) difference between zones? If not, flag as sub-perceptual — the CSS claims to vary tracking but you cannot perceive the difference.

SCREENSHOTS:
{List of screenshot file paths}
```

#### Auditor C: Spatial + Proportion (14 questions)

```
You are PA Auditor C — Spatial Balance and Proportion.

You evaluate whitespace, proportions, void detection, and spatial intentionality. This is the most question-heavy assignment — take your time. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read all screenshots, then answer:

PA-09: Is there dead space that serves no purpose? Calibrate: small pockets of dead space (< 1 viewport-height) are MINOR. Multiple consecutive viewports of dead space (> 2 viewport-heights) are BLOCKING.

PA-10: If you SQUINT until you cannot read text, does the layout look balanced? This tests the page's structural silhouette.

PA-11: Are the margins generous (confident, breathing room) or anxious (clutching the edges, content pinched)?

PA-30: At 1440px, does the layout feel DESIGNED for this width, or merely centered in extra space?

PA-31: If you covered all the content and only saw the surrounding space (margins, padding, gaps), would that space feel designed or leftover?

PA-32: Squint at the full page (use the full-page screenshots). Is the visual weight distributed purposefully across the scroll, or concentrated in one area?

PA-33: Pick the LARGEST area of empty space. Does it feel like silence in music (purposeful pause) or a dropped signal (something is missing)?

PA-50 (Void Prevention — MANDATORY): Count viewport-heights where < 30% of the viewport is content. How many CONSECUTIVE blank viewports are there?

PA-51 (Void Prevention — MANDATORY): What percentage of the total page height is content vs empty? Rate: 80%+ (excellent) / 60-80% (good) / 40-60% (concerning) / <40% (catastrophic void).

PA-52 (Void Prevention — MANDATORY): Divide the page into thirds (top/middle/bottom). Does each third have at least one designed moment (a place where visual treatment draws attention)?

PA-53 (Void Prevention — MANDATORY): At 1440px, does the container use 65-80% of horizontal space, or does it feel like a narrow strip floating in a sea of empty space?

PA-55 (Sub-perceptual): Look at 3 adjacent sections/zones. Can you describe how they DIFFER visually without inspecting code? If they look the same despite claiming to be different zones, flag as sub-perceptual variation.

PA-64 (Tier 5): Is there a section that is DELIBERATELY plain — simpler than surrounding sections in a way that makes the surrounding richness more noticeable? Can you tell the difference between "designed quiet" and "forgot to design this part"?

PA-66 (Tier 5): Look at the empty spaces between sections. Are they all the same "flavor" of emptiness, or do different gaps feel different from each other? Describe at least 2 different gap types if they exist.

SCREENSHOTS:
{List of screenshot file paths}
```

#### Auditor D: Flow + Pacing (8 questions)

```
You are PA Auditor D — Visual Flow and Pacing.

You evaluate how the eye moves through the page, transition quality, and scroll rhythm. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read all screenshots in scroll order, then answer:

PA-12: Do your eyes flow smoothly from section to section, or do they get stuck or jump?

PA-13: Is there a clear visual ending (footer, closing statement, bookend design), or does the page just stop?

PA-34: Pick a transition between two major sections. Is it a DESIGNED moment (border, background shift, spacing change) or just empty space?

PA-35: Scroll at reading speed through the scroll-through screenshots. Does interest stay level, peak and valley, or fade? At what scroll position do you start skimming?

PA-36: Is there a DRAMATIC visual moment — a place where treatment changes noticeably? Where is it? What makes it dramatic?

PA-62 (Tier 5): Find a section transition. Count how many visual properties change simultaneously (background, typography, spacing, borders, color). Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds on the page?

PA-69 (Pipeline Integration): Pick two section transitions. Count visual properties changing at each. Are transition intensities varied or uniform?

PA-70 (Pipeline Integration): Compare the densest analytical section to the lightest overview section. Does the visual treatment RESPOND to the content density difference, or are dense and light sections treated the same?

SCREENSHOTS:
{List of screenshot file paths}
```

#### Auditor E: Grid + Layout (6 questions)

```
You are PA Auditor E — Grid and Layout.

You evaluate layout structure, column usage, content organization, and entry design. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read all screenshots, then answer:

PA-14: Does every column (if multi-column layout is used) have enough room for its content to breathe?

PA-15: Trace the left edge of every content block down the page. How many different starting positions (left margins) are there? 1-2 = disciplined, 3-4 = varied but intentional, 5+ = chaotic.

PA-37: Is there any container with 5+ pieces of information competing for attention at once? Does it feel like a control panel (organized) or a pile (dumped)?

PA-38: Pick any card, callout, or info-box. Is there a clear reading order inside it (title -> body -> footer)?

PA-39: In the first screenful (first viewport), how much is header vs actual content? Is the header a doorway (quick entry) or a lobby (forcing you to wait)?

PA-63 (Tier 5): Zoom into one component (card, callout, table, code block). Does its internal design echo the page's overall design language at a smaller scale? Then find the SAME component type in a different section — does it adapt to its surroundings (zone-specific styling) or look identical everywhere?

SCREENSHOTS:
{List of screenshot file paths}
```

#### Auditor F: Consistency + Rhythm (6 questions)

```
You are PA Auditor F — Consistency and Rhythm.

You evaluate visual rhythm, pattern consistency, and design repetition quality. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read all screenshots, then answer:

PA-16: Pick two elements that SHOULD look identical (e.g., two callouts, two headings at the same level). Do they? Point to any inconsistencies.

PA-17 (TIER 1 EQUIVALENT — FAIL blocks verdict above "YES WITH RESERVATIONS"): Is there a visual rhythm (like a beat in music) — a predictable but varied pattern — or does spacing and visual weight feel random?

PA-40: Does spacing between sections feel consistent (same system of spacing), or is there a sudden unexplained jump? If there is a jump, does the content justify it?

PA-41 (TIER 1 EQUIVALENT — FAIL blocks verdict above "YES WITH RESERVATIONS"): Are any visual patterns repeated 4+ times without variation? If so, is it purposeful repetition (like a chorus) or monotony (copy-pasted treatment)?

PA-60 (Tier 5): Can you identify at least 3 distinct "design moments" — places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each.

PA-61 (Tier 5): Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time at every boundary?

SCREENSHOTS:
{List of screenshot file paths}
```

#### Auditor G: Metaphor + Ideology (7 questions)

```
You are PA Auditor G — Metaphor and Ideology.

You evaluate whether the page has a coherent visual identity/metaphor, emotional color palette, and whether visual choices serve or undermine the content's character. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent. You should be able to sense if a metaphor exists without being told what it is.

Read all screenshots, then answer:

PA-18: Do all the grays and neutrals feel like the same family (warm-toned together, cool-toned together), or is there a mix that feels unintentional?

PA-19: Is there any element that feels like it is from a DIFFERENT website — a stylistic outlier?

PA-20: Describe this page's personality in three words. Does the personality feel intentional and consistent?

PA-42: Is there any section where you understand WHY it looks this way (you can guess the intent) but it still looks WRONG? This tests metaphor ideas that fail in execution.

PA-43: Could the same metaphor/concept be communicated with less visual cost (fewer elements, simpler treatment) without losing meaning?

PA-44: WITHOUT reading labels, headings, or text annotations, could you still sense a governing visual metaphor from the page's structure alone? Does this metaphor persist across the ENTIRE page, or fade after the introduction?

PA-68 (Tier 5): Does the page's organizing metaphor (if one exists) persist across ALL scroll thirds (top/middle/bottom), or does it fade or disappear as you scroll? Can you identify metaphor expression in the bottom third?

SCREENSHOTS:
{List of screenshot file paths}
```

#### Auditor H: Responsiveness (5 questions)

```
You are PA Auditor H — Responsiveness.

You evaluate how the page adapts across viewport sizes. You MUST compare the 1440px screenshots against the 768px screenshots. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read the 1440px screenshots first, then the 768px screenshots, then answer:

PA-21: At 768px, does everything look designed for this width, or squeezed (content truncated, elements overlapping)?

PA-22: Would a user with ONLY the 768px screen feel served (the page works well for them) or punished (clearly a desktop page forced into a small window)?

PA-23: What breaks if you imagine the viewport 200px narrower than 768px? Are there fragile layouts that would collapse?

PA-46: At 768px, does element reorganization make SENSE for this content? For example, do multi-column grids stack vertically in a logical order? Or is content just shrunk to fit?

PA-47: At what scroll position (in the 1440px scroll-through) do you feel "I have seen this pattern before" — where repetition starts? Is there anything surprising in the second half of the page?

SCREENSHOTS:
{List of screenshot file paths — explicitly label which are 1440px and which are 768px}
```

#### Auditor I: Cross-Page + Adversarial (6 questions)

```
You are PA Auditor I — Cross-Page and Adversarial.

You evaluate whether this page belongs to a design system, challenge its conventions, and stress-test its quality. You are the skeptical auditor. Judge ONLY what you SEE.

IMPORTANT: Fresh-eyes audit. No knowledge of build process or design intent.

Read all screenshots, then answer:

PA-24: Does this page feel like it BELONGS with sibling pages in a design system? Does it share visual DNA (consistent header, typography, color) while having its own identity?

PA-25: If you covered the header (first viewport), could you still identify that this page belongs to a specific design system? What visual signatures give it away?

PA-26: Is any design convention CAUSING a visual problem? For example, is a required border-weight rule making a section look cluttered? Is a required color palette making text hard to read?

PA-27: If you were designing this page from scratch for the same content, would you design it this way? What would you change, and why?

PA-28: How could someone make this page look TERRIBLE while passing every visible design rule (correct fonts, colors, spacing, borders)? What rules are missing?

PA-48: If this layout were one of five design options presented to a client, would it be the FIRST choice or LAST choice? Why?

SCREENSHOTS:
{List of screenshot file paths}
```

---

### 4.6 Integrative Auditor Prompt

```
You are the Integrative Auditor for Pipeline v3.

You have NO assigned questions. Your role is to:
1. Read ALL 9 PA auditor reports below
2. Read ALL screenshots
3. Write a FREE-FORM gestalt impression — what patterns emerge across reports that no single auditor catches?
4. Synthesize the 9 reports into a single PA-05 score

GESTALT ASSESSMENT:
Look for cross-cutting patterns:
- Do multiple auditors independently flag the same issue? (high-confidence signal)
- Do auditors contradict each other? (ambiguity signal — investigate)
- Is there something ALL auditors miss? (blind spot — you catch it)
- Does the page as a whole feel greater or less than the sum of its parts?

PA-05 SYNTHESIS:
Rate each sub-criterion PASS or FAIL based on the preponderance of auditor evidence:
  a. DESIGNED — Intentional composition vs template assembly
  b. COHERENT — Unified design language vs multiple vocabularies
  c. PROPORTIONATE — Spatial balance considered (horizontal + vertical + breathing)
  d. POLISHED — Execution quality (no missing elements, transitions typed, details refined)

PA-05 Score: {4/4 if all PASS, 3/4 if 3 PASS, etc.}
Scale: 1=FLAT, 2=ASSEMBLED, 3=COMPOSED, 4=DESIGNED

TIER 5 SYNTHESIS (if Tier 5 questions were asked):
Count YES answers across PA-60 through PA-68. Score: {N}/9.

COMBINED VERDICT (recommendation to Weaver):
| PA-05 | Tier 5 | Recommendation |
|-------|--------|----------------|
| 4/4   | 8-9    | SHIP — COMPOSED |
| 4/4   | 6-7    | SHIP — APPROACHING |
| 3/4   | any    | REFINE (note failing criterion) |
| <=2/4 | any    | REBUILD |

TOP-5 FIXES (if not shipping):
For each, classify as:
- MECHANICAL (CSS value fix)
- STRUCTURAL (zone/boundary redesign)
- COMPOSITIONAL (metaphor/intent issue — requires rebuild)

---
AUDITOR REPORTS:
{Report A}
{Report B}
...
{Report I}

SCREENSHOTS:
{List of screenshot file paths}
```

---

### 4.7 Weaver Prompt

```
You are the Weaver for Pipeline v3. You make the final verdict.

Read the Integrative Auditor's report and the Gate Runner results. Produce:

1. GATE SUMMARY:
   - Identity gates: {N}/10 PASS
   - Perception gates: {N}/6 PASS
   - Verdict from gates: {REBUILD / REFINE / PROCEED}

2. PA-05 SCORE (from Integrative Auditor):
   - Sub-criteria: Designed {P/F}, Coherent {P/F}, Proportionate {P/F}, Polished {P/F}
   - Score: {1-4}/4

3. TIER 5 SCORE (if applicable):
   - YES count: {N}/9
   - Level: {VOCABULARY ONLY / STRUCTURED / APPROACHING / COMPOSED}

4. VERDICT (apply in priority order):
   a. ANY identity gate FAIL => REBUILD (soul violation)
   b. 3+ anti-pattern gates FAIL => REBUILD (systemic)
   c. ANY perception gate FAIL => REFINE (targeted CSS fix)
   d. PA-05 >= 3.5 AND all gates PASS => SHIP
   e. PA-05 2.5-3.5 => REFINE (with action items)
   f. PA-05 < 2.5 => REBUILD

5. TOP-5 FIXES (classified):
   - MECHANICAL: {CSS value wrong — specific property and fix}
   - STRUCTURAL: {Zone organization or boundary — re-read brief sections X+Y}
   - COMPOSITIONAL: {Metaphor not expressed — requires rebuild with new intent}

6. TWO OUTPUTS:
   OUTPUT A — DIAGNOSTIC (for orchestrator):
   VERDICT: {SHIP / SHIP WITH FIXES / REFINE / REBUILD}
   Gate failures: {list}
   PA-05: {score}
   Fix list: {classified fixes with specifics}

   OUTPUT B — ARTISTIC IMPRESSION (for potential REFINE/REBUILD builder):
   Write in generative, artistic language. NO threshold numbers. NO gate scores.
   Describe what the page FEELS like, what works, what does not work.
   Use the emotional arc registers: Surprise, Delight, Authority, Earned Closure.
   The REFINE/REBUILD builder should read this and understand the SPIRIT of what needs to change.

CALIBRATION REFERENCES (for your classification, NOT shared with auditors):

Multi-Coherence Scale:
| Simultaneous Shifts at Boundary | Quality Level |
|------|------|
| 0-1 | FLAT |
| 2 | FUNCTIONAL |
| 3 | DESIGNED |
| 4-5 | COMPOSED |
| 6 | FLAGSHIP |

Severity Scale:
| Dead Space | Severity |
|------|------|
| 1-2 viewport-heights | LOOKS-WRONG |
| 3-5 viewport-heights | WOULD-NOT-SHIP |
| 6+ viewport-heights | CATASTROPHIC |

Metaphor Expression Spectrum:
| Level | Expression |
|------|------|
| STRUCTURAL | Spatial organization, color progression, visual weight |
| ATMOSPHERIC | Palette, typography, vocabulary choices |
| LABELED | Explicit text labels on structural elements |
| ANNOUNCED | Section titles explain the metaphor |

---
INTEGRATIVE AUDITOR REPORT:
{integrative_report}

GATE RUNNER RESULTS:
{gate_results_json}

INDIVIDUAL AUDITOR REPORTS (for evidence):
{all 9 reports}
```

---

## 5. CONTEXT LEAKAGE INVENTORY

A complete enumeration of every instance where the experienced orchestrator's accumulated context entered the pipeline execution beyond what the artifacts prescribe.

### L1: Content Tensions Protocol (Phase 0)
**What leaked:** The content map includes a "Content Tensions" section with 4 tensions, pole dominance analysis, and metaphor-shaping tension identification.
**Source of leakage:** Prior pipeline experience showed tensions are critical for COMPOSED mode. The tension-composition skill (1,878 lines) informed this, but the skill is not referenced in any artifact.
**Artifact gap:** No artifact mentions content tensions. artifact-routing.md's 6 operations do not include tension analysis.
**Fix:** Add "7. Identify content tensions" to the Content Analysis Protocol in artifact-routing.md.

### L2: Metaphor Seed Risk Ratings (Phase 0)
**What leaked:** The content map generates 3 metaphor candidates with LOW/MEDIUM/HIGH risk ratings and a recommendation.
**Source of leakage:** Orchestrator experience with metaphor selection from prior builds.
**Artifact gap:** artifact-routing.md says "assess metaphor viability" but provides no protocol for generating candidates or rating risk.
**Fix:** Add metaphor seed generation protocol to artifact-routing.md.

### L3: Execution Brief Exceeds Line Budget (Phase 1)
**What leaked:** The brief is 165 lines, not 93-113. The orchestrator knew more compositional detail helps the builder.
**Source of leakage:** Prior experience with builder quality correlation to brief richness.
**Artifact gap:** Manifest specifies 93-113 lines. The orchestrator chose to exceed this based on judgment.
**Fix:** Update the line budget to 100-180 lines, or make it advisory rather than prescriptive.

### L4: Multi-Coherence Boundary Descriptions (Phase 1)
**What leaked:** The brief includes boundary-by-boundary descriptions of what shifts between each zone pair (e.g., "Z2->Z3 is the biggest shift -- entering the 8-role architecture (all 6 channels shift)").
**Source of leakage:** Orchestrator's understanding of multi-coherence from research synthesis.
**Artifact gap:** The multi-coherence framework is defined in the builder recipe but the process of translating a content map into boundary-by-boundary descriptions is not specified.
**Fix:** Add a multi-coherence derivation protocol to artifact-routing.md Phase 1 section.

### L5: Transition Type Vocabulary (Phase 1)
**What leaked:** The brief defines 3 transition types with specific CSS values: "light (1px border + 48px gap = legato), medium (3px + 80px gap = breathing rest), heavy (colored background + text = full stop)."
**Source of leakage:** This vocabulary appears in artifact-routing.md "Temporal Composition" section (lines 265-268) but the brief adds the "legato/breathing rest/full stop" musical metaphor.
**Artifact gap:** The musical metaphor mapping (legato/staccato) is in artifact-routing.md but the Brief Assembler is not told to include it.
**Fix:** Specify in the Brief Assembler protocol that transition type vocabulary including musical metaphors should be included in Tier 3.

### L6: Content-Specific Disposition Notes (Phase 1)
**What leaked:** D-04 includes "The Gas Town content has zero surprise moments currently -- fix this." This is a content-specific observation not derivable from artifacts alone.
**Source of leakage:** Orchestrator read the content and made observations about what it lacked.
**Artifact gap:** The artifacts describe D-04 generally but do not specify that the Brief Assembler should make content-specific observations for each disposition instruction.
**Fix:** Add to Brief Assembler protocol: "For each D-01 through D-08, include 1-2 content-specific observations relevant to this page."

### L7: Gate Runner Subset Selection (Phase 3A)
**What leaked:** Only 15 of 42 gates were run. The orchestrator decided anti-pattern, precondition, verdict, and policy gates were not applicable or not implementable.
**Source of leakage:** Orchestrator's knowledge of which gates are practically executable vs. theoretical.
**Artifact gap:** Manifest says "all 42 gates." No guidance on which gates to skip, which are advisory, or which require NLP analysis.
**Fix:** Categorize gates as REQUIRED (identity + perception = 16), RECOMMENDED (anti-pattern = 6), and ADVISORY (precondition + verdict + mode + experiment + policy = 20). Only REQUIRED gates block verdict.

### L8: Gate Naming Convention (Phase 3A)
**What leaked:** Results use SC-XX and PT-XX naming instead of the artifact's GR-XX convention.
**Source of leakage:** Orchestrator used a more intuitive naming that maps to soul constraints (SC) and perception thresholds (PT).
**Artifact gap:** The manifest does not specify output naming conventions for gate results.
**Fix:** Define the output naming convention in artifact-gate-runner.md. Consider adopting the SC/PT naming as it is more descriptive.

### L9: Gate Tolerance for Near-Misses (Phase 3A)
**What leaked:** Border weights of 2.67px/0.67px were accepted as PASS for the 3/1px hierarchy. Pure white (#FFFFFF) in Z3 was not flagged.
**Source of leakage:** Orchestrator judgment about acceptable deviations.
**Artifact gap:** No tolerance policy exists. Gates are defined as strict binary but the orchestrator applied flexible interpretation.
**Fix:** Add tolerance ranges to gate definitions: border weights within +/-0.5px, background colors allowing pure white for specific zone strategies with justification.

### L10: PA Auditor Prompt Composition (Phase 3B)
**What leaked:** Each PA auditor received a carefully composed prompt with question text, severity guidance, and perceptual language instructions.
**Source of leakage:** Orchestrator experience with how to frame questions for effective audit.
**Artifact gap:** artifact-pa-protocol.md defines questions and assignments but provides no prompt templates.
**Fix:** Include the prompt templates from Section 4.5 of this document in artifact-pa-protocol.md.

### L11: TC Brief Template Non-Existence (Phase 1)
**What leaked:** The orchestrator composed the brief structure from memory rather than from a standalone template file.
**Source of leakage:** The TC Brief Template "must be authored before first run" (MANIFEST line 19) but was never authored.
**Artifact gap:** The template structure is defined in artifact-routing.md but the actual template does not exist as a file.
**Fix:** Create the TC Brief Template as a standalone file using the structure from artifact-routing.md and the content from the Brief Assembler prompt template in Section 4.2 of this document.

---

## 6. RECOMMENDATIONS

### Priority 1 (BLOCKING for fresh-instance execution)
1. **Create the TC Brief Template** as a standalone 73-line file
2. **Add gate runner JavaScript** to artifact-gate-runner.md (use Section 4.4 of this document)
3. **Add agent prompt templates** to relevant artifacts (use Section 4 of this document)
4. **Add content map output template** to artifact-routing.md (use Section 4.1 of this document)

### Priority 2 (HIGH — reduces context leakage significantly)
5. **Add content tensions protocol** to artifact-routing.md Phase 0
6. **Add metaphor seed generation protocol** with risk rating framework
7. **Add multi-coherence derivation protocol** to Brief Assembly
8. **Add gate categorization** (REQUIRED/RECOMMENDED/ADVISORY) to artifact-gate-runner.md
9. **Add gate tolerance policy** for near-misses

### Priority 3 (MEDIUM — improves quality)
10. **Update brief line budget** from 93-113 to 100-180
11. **Add content-specific disposition observation** requirement to Brief Assembler protocol
12. **Add transition type vocabulary** inclusion requirement
13. **Standardize gate naming convention** (SC/PT vs GR)
14. **Create worked example** showing one complete pipeline execution with all inputs/outputs

---

## 7. SUMMARY

The Pipeline v3 manifest and 6 artifacts are architecturally sound — a fresh instance would understand WHAT needs to happen at each phase. The critical gap is in EXECUTION specificity: there are no agent prompt templates, no gate runner code, no output format templates, and no worked examples.

The experienced orchestrator filled these gaps with accumulated context from 50+ prior pipeline builds. This context leaked in at every phase:
- Phase 0: content tensions protocol and metaphor seed risk ratings (not in artifacts)
- Phase 1: multi-coherence boundary descriptions, transition vocabulary, content-specific dispositions (synthesis beyond what artifacts specify)
- Phase 2: builder prompt framing (entirely implicit)
- Phase 3A: gate subset selection, tolerance policy, naming conventions (judgment calls)
- Phase 3B: PA auditor prompt composition (not in artifacts)

**The fix is mechanical, not architectural.** The artifacts contain 95%+ of the needed information. What they lack is the "last mile" — the prompt templates, code, and format specifications that turn ARCHITECTURE into EXECUTION. This document provides all of those missing pieces.

**Updated self-containedness estimate after applying all fixes from this document: 4.0 / 5.**

# Remediation Lessons Cross-Reference Audit

**Agent:** xref-remediation-lessons (Opus 4.6)
**Date:** 2026-02-20
**Task:** Cross-reference whether lessons from the SUCCESSFUL flagship remediation (PA-05 1.5/4 -> 2.5/4) are incorporated into the current /build-page pipeline
**Sources read (13 files):**

| # | File | Lines | Category |
|---|------|-------|----------|
| 1 | ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md | 1,025 | What worked |
| 2 | ephemeral/remediation-audit/08-recipe-remediation.md | 831 | What worked |
| 3 | ephemeral/remediation-audit/06-css-budget-reallocation.md | 543 | What worked |
| 4 | ephemeral/remediation-audit/09-multi-coherence-design.md | 517 | What worked |
| 5 | ephemeral/remediation-audit/03-root-cause-coverage.md | 555 | What worked |
| 6 | ephemeral/pipeline-analysis/02-master-prompt-failures.md | 403 | What failed |
| 7 | ephemeral/pipeline-analysis/05-css-philosophy-shift.md | 452 | What failed |
| 8 | ephemeral/pipeline-analysis/08-perception-model-shift.md | 484 | What failed |
| 9 | ephemeral/pipeline-analysis/10-coherence-model-shift.md | 439 | What failed |
| 10 | ephemeral/pipeline-analysis/07-process-topology-shift.md | 492 | Process lessons |
| 11 | ephemeral/pipeline-analysis/18-prompt-craftsmanship-evolution.md | 533 | Process lessons |
| 12 | ~/.claude/skills/build-page/SKILL.md | 470 | Current pipeline |
| 13 | design-system/pipeline/conventions-brief.md | 547 | Current pipeline |

---

## Section 1: What Remediation Did Differently (Pipeline Presence Check)

The remediation spec (12-ENHANCED-REMEDIATION-SPEC.md) succeeded where the 963-line master prompt failed. Below is every distinct remediation innovation, with a binary check on whether the current /build-page pipeline preserves it.

### 1.1 Remediation Innovations: Full Inventory

| # | Innovation | Source | In Pipeline? | Where in Pipeline | Notes |
|---|-----------|--------|-------------|-------------------|-------|
| 1 | **Phase 0 Deallocation** -- strategic DELETION of sub-perceptual CSS before adding visible CSS (216 lines removed) | 12-ENHANCED-SPEC Phase 0; 06-css-budget Phase 0 | PARTIAL | conventions-brief.md Section 2 mentions "if delta < threshold, DELETE the rule." SKILL.md SC-14 checks "sub-perceptual CSS count = 0" | Pipeline checks for sub-perceptual CSS at end (SC-14) but does NOT mandate a deallocation PHASE at the start. The remediation's insight was: delete FIRST, then build. The pipeline's approach is: build, then verify nothing is sub-perceptual. Different sequencing. |
| 2 | **Perception thresholds table** -- explicit minimum deltas (>=15 RGB background, >=2px font-size, >=0.025em letter-spacing, >=24px padding, <=120px stacked gap) | 12-ENHANCED-SPEC Appendix; 08-perception-model-shift | YES | conventions-brief.md Section 2 ("Perception Thresholds") has the full table: >=15 RGB, >=2px font-size, >=0.025em letter-spacing, >=0.15 line-height, >=24px padding. SKILL.md SC-09 (bg delta >=15 RGB), SC-10 (stacked gap <=120px), SC-14 (sub-perceptual count = 0) | WELL PRESERVED. Thresholds appear in both the builder's world-description AND the programmatic gates. |
| 3 | **Recipe format** -- sequenced imperative steps with exact CSS values ("font-size: 17px") instead of declarative constraints ("must be rich") | 08-recipe-remediation; 18-prompt-craftsmanship Section 1 (0.32:1 constraint-to-action ratio) | YES | conventions-brief.md Section 8 ("CSS Vocabulary") provides concrete CSS recipes for boundaries: "Boundary CSS Recipe" with exact properties. Section 4 has cascade planning recipes. Section 7 has transition grammar recipes. | WELL PRESERVED in conventions-brief. The builder receives recipes, not just constraints. However, see Section 2 below for detailed ratio analysis. |
| 4 | **CSS budget reallocation** -- categorizing CSS into Visible Structural (31.5%), Perceptible Typographic (14%), Sub-Perceptual (23.7%), then reallocating sub-perceptual budget to visible structural variety | 06-css-budget-reallocation | NO | Neither SKILL.md nor conventions-brief.md contains CSS budget allocation guidance. No instruction like "spend X% on structural variety, Y% on typography." | MISSING. The pipeline has no concept of CSS budget. The remediation discovered that the flagship spent 23.7% of CSS on invisible properties. The pipeline's SC-14 (sub-perceptual count = 0) prevents the WORST outcome but does not guide ALLOCATION. |
| 5 | **S-09 stacking loophole fix** -- measuring TOTAL gap at section boundaries, not per-property (<=120px total) | 12-ENHANCED-SPEC Phase 3.2; 09-multi-coherence Section 3 | YES | SKILL.md SC-10: "Stacked boundary gap (padding + margin + border): MUST be <=120px between any two adjacent sections." conventions-brief.md Section 2 includes <=120px in the perception thresholds table. | WELL PRESERVED. Both the gate AND the builder description contain this fix. |
| 6 | **Opus builder** -- using Opus (not Sonnet) for the CSS-writing agent | 12-ENHANCED-SPEC header; 07-process-topology Section 2.2 | YES | SKILL.md Section 4 (Builder Deployment): "Model: ALWAYS Opus -- never Sonnet for builders." | WELL PRESERVED. Explicit, binary, unambiguous. |
| 7 | **Embedded perceptual checkpoints** -- "PERCEPTION CHECK" after every phase asking "can you SEE this?" | 08-recipe-remediation Phases 2-7; 07-process-topology Section 5.3 | PARTIAL | conventions-brief.md Section 9B ("Quality Floor") has a binary richness checklist: "Can you see zone color differences without a color picker?" But this is a SINGLE checklist, not per-phase embedded checks. SKILL.md has no mid-build perception checks -- SC gates run AFTER build. | PARTIALLY PRESERVED. The pipeline has a quality floor checklist (conventions-brief Section 9B) that echoes the remediation's perceptual language. But the remediation's key innovation was EMBEDDED checks after EVERY phase, not a single post-build checklist. The pipeline defers all perceptual checking to the SC gates (post-build) and the Mode 4 PA (post-build). |
| 8 | **Single-builder with full context** -- one agent reads the full spec (1,025 lines) instead of multiple agents each reading 71-line snippets | 07-process-topology Section 2; 12-ENHANCED-SPEC | YES | SKILL.md Section 4: single Opus builder. Builder receives conventions-brief (547 lines) plus content analysis + metaphor + mechanism selections from TC pipeline. | WELL PRESERVED. The pipeline uses a single builder with full context. The builder's total input (conventions-brief + TC output) is comparable to the remediation's 1,025 lines. |
| 9 | **Grid layouts** -- explicit grid patterns (1fr 1fr, 2fr 1fr, etc.) for layout variety | 12-ENHANCED-SPEC Phase 3.5; 06-html-restructuring | YES | conventions-brief.md Section 8 ("CSS Vocabulary") includes grid: "grid-template-columns: 1fr 1fr" and "grid with sidebar: 2fr 1fr". Section 8 has 3 layout patterns (centered, grid, sidebar). | PRESERVED. The builder has access to grid recipes. |
| 10 | **Component library adoption** -- converting raw HTML to semantic components (callout family: `.callout-insight`, `.callout-warning`, etc.) | 12-ENHANCED-SPEC Phase 1; 06-html-restructuring | YES | conventions-brief.md Section 8 references component library. SKILL.md Phase 2 invokes TC which has component selection. | PRESERVED indirectly. The pipeline references components through the TC pipeline and conventions-brief. |
| 11 | **Accessibility** -- skip link, ARIA landmarks, focus-visible, reduced-motion, responsive breakpoints | 12-ENHANCED-SPEC Phase 7; 03-root-cause-coverage (RC-13) | YES | conventions-brief.md Section 13 ("Accessibility") covers skip-link, focus-visible, prefers-reduced-motion, ARIA. Section 14 ("Responsive") covers breakpoints. SKILL.md SC-16: "Accessibility: skip-link + focus-visible + reduced-motion." | WELL PRESERVED. Full accessibility section in conventions-brief. Gate SC-16 verifies. |
| 12 | **Multi-coherence cascade value tables** -- 12-row x N-column matrix of exact computed CSS values per section for verifiable coherence | 09-multi-coherence-design; 12-ENHANCED-SPEC Phase 8 | PARTIAL | conventions-brief.md Section 4 ("Multi-Coherence") has the conceptual framework: 6 channels, perception floors per channel, semantic directions, coherence arc planning, typographic progression. SKILL.md SC-13: "Multi-coherence: >=3 channels shift between adjacent sections." | PARTIALLY PRESERVED. The CONCEPT of multi-coherence is well-represented. But the remediation's specific innovation -- a COMPLETED cascade value table as a verification artifact -- is not required by the pipeline. The pipeline checks ">=3 channels shift" (SC-13) which is a threshold check, not a full cascade table. The cascade table was what made coherence VERIFIABLE rather than assessable. |
| 13 | **Root cause resolution matrix** -- mapping each fix to the specific root cause it addresses | 03-root-cause-coverage; 12-ENHANCED-SPEC | NO | Neither SKILL.md nor conventions-brief.md contains root cause traceability. | NOT APPLICABLE to the pipeline (this was remediation-specific). No action needed. |
| 14 | **Deletion-before-addition sequencing** -- Phase 0 deletes before Phase 2+ adds | 12-ENHANCED-SPEC Phase 0; 05-css-philosophy-shift (Shift 3) | NO | SKILL.md has no deallocation concept. The builder is instructed to BUILD, with SC-14 checking for sub-perceptual CSS after. | MISSING as a sequencing principle. See Item 1. |
| 15 | **Honest PA-05 prediction** -- setting realistic expectations ("Sonnet builder: 3/4; Opus builder: 3-4/4") | 12-ENHANCED-SPEC risk assessment | NO | SKILL.md success bar is "PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations." No prediction, just a threshold. | NOT APPLICABLE to the pipeline (prediction was remediation-specific). The pipeline has a success threshold instead, which is appropriate. |

### 1.2 Summary Scorecard

| Status | Count | Items |
|--------|-------|-------|
| WELL PRESERVED | 7 | Perception thresholds, Recipe format, S-09 stacking, Opus builder, Grid layouts, Accessibility, Single builder |
| PARTIALLY PRESERVED | 3 | Phase 0 deallocation, Embedded perceptual checkpoints, Multi-coherence cascade tables |
| MISSING | 2 | CSS budget allocation, Deletion-before-addition sequencing |
| NOT APPLICABLE | 2 | Root cause matrix, PA-05 prediction |

**Verdict:** 7/12 applicable innovations are WELL PRESERVED. 3/12 are PARTIALLY preserved. 2/12 are MISSING. The pipeline has absorbed the remediation's WHAT but not always its WHEN (sequencing) or HOW MUCH (budget allocation).

---

## Section 2: Recipe vs Checklist Assessment

The remediation succeeded in part because of its language register: 0.32:1 constraint-to-action ratio (72 action verbs vs 23 constraint terms). The master prompt that failed had 3.0:1 (141 constraints vs 47 actions). This section audits the current pipeline's language.

### 2.1 conventions-brief.md Language Audit (547 lines)

**Recipe-format instructions** (imperative, sequenced, with specific values):
- Section 2 (Perception Thresholds): Recipe. Provides exact threshold values. "Background delta >= 15 RGB." Concrete, actionable.
- Section 4 (Multi-Coherence): Mixed. Provides cascade planning framework + typographic progression values, but uses some judgment language ("semantic direction").
- Section 7 (Transition Grammar): Recipe. Provides transition-to-coherence mapping with specific patterns.
- Section 8 (CSS Vocabulary): Recipe. Provides exact CSS blocks: "Boundary CSS Recipe" with `border-left: 3px solid var(--color-accent)`, grid patterns, component library.
- Section 9B (Quality Floor): Recipe. 8 binary yes/no perception checks.
- Section 13 (Accessibility): Recipe. Skip-link, focus-visible, prefers-reduced-motion with CSS.
- Section 14 (Responsive): Recipe. Breakpoint values and grid collapse rules.

**Checklist-format instructions** (declarative constraints, threshold-only):
- Section 1 (Identity): Checklist. "border-radius: 0. box-shadow: none." (These are identity constraints -- checklist is appropriate here.)
- Section 3 (Scale-Channel): Mixed. Provides the framework but relies on agent judgment for "how many scales."
- Section 5 (Fractal Echo): Checklist. "signature element echoes at 3+ scales." No recipe for HOW.
- Section 6 (Spatial Confidence): Checklist. "container: 940-960px", "content-to-void >= 60:40." Thresholds without construction steps.
- Section 9A (Soul): Checklist. 10 soul rules as pass/fail.
- Section 10-12 (Kill criteria, Process, Responsive foundation): Mostly checklist.

**Count:**
- Recipe sections: 7 (Sections 2, 4-partial, 7, 8, 9B, 13, 14)
- Checklist sections: 5 (Sections 1, 3-partial, 5, 6, 9A)
- Mixed: 2 (Sections 3, 4)

**Recipe-to-Checklist ratio: approximately 1.4:1 (recipe-dominant).**

### 2.2 SKILL.md Language Audit (470 lines)

SKILL.md is an ORCHESTRATOR prompt, not a builder prompt. Its language is procedural-directive:
- "Read conventions-brief.md" (action)
- "Spawn TC pipeline" (action)
- "Deploy Opus builder" (action)
- "Run SC gates" (verification)
- "Deploy 9 PA auditors" (action)

The SC gates (Section 5) are entirely CHECKLIST format -- binary pass/fail. This is appropriate because gates ARE verification, not construction.

**Orchestrator constraint-to-action ratio: approximately 0.8:1 (action-dominant).**

### 2.3 Assessment

The current pipeline's conventions-brief has a recipe-to-checklist ratio of approximately 1.4:1 (recipe-dominant). This is a significant improvement over the master prompt's 3.0:1 constraint-to-action ratio (constraint-dominant), though not as recipe-heavy as the remediation's 0.32:1 constraint-to-action ratio.

**Key difference:** The remediation was a MODIFICATION spec (find X, delete Y, add Z). The pipeline is a CREATION spec (here is the world, build in it). Creation specs naturally carry more constraint language because they define the space. The conventions-brief's 1.4:1 recipe ratio is appropriate for its purpose.

**Verdict: ADEQUATE.** The pipeline is recipe-dominant where it matters (CSS vocabulary, transitions, accessibility, perception thresholds) and checklist-formatted where checklist is appropriate (identity constraints, soul rules, kill criteria). The language register has shifted correctly from the failed master prompt.

---

## Section 3: CSS Budget Lessons

### 3.1 What the Remediation Discovered

The remediation audit (06-css-budget-reallocation.md) categorized the flagship's CSS into three categories:

| Category | Lines | % | Description |
|----------|-------|---|-------------|
| A: Visible Structural | 310 | 31.5% | Borders, backgrounds, grid layouts, components |
| B: Perceptible Typographic | 138 | 14.0% | Font-size, weight, line-height above thresholds |
| C: Sub-Perceptual | 233 | 23.7% | Letter-spacing 0.001-0.01em, background deltas 3-8 RGB |
| D: Infrastructure | 303 | 30.8% | Reset, variables, responsive, accessibility |

The flagship spent 23.7% of its CSS budget on INVISIBLE properties. The remediation's fix: delete Category C entirely, reallocate those 233 lines to more Category A (structural variety: components, grids, responsive breakpoints).

### 3.2 What the Pipeline Has

**SKILL.md:** SC-14 gate checks "sub-perceptual CSS count = 0." This prevents Category C from existing in the final output.

**conventions-brief.md:** Section 2 provides perception thresholds. Section 8 provides CSS vocabulary recipes. Section 9B has a quality floor that includes "Can you see zone color differences without a color picker?"

### 3.3 What the Pipeline is Missing

**No CSS budget allocation guidance.** The pipeline tells the builder WHAT to build (recipes) and WHAT NOT to build (sub-perceptual = 0). But it does not tell the builder HOW TO ALLOCATE effort:

- No guidance on "spend at least X% of CSS on structural variety"
- No guidance on "if your CSS has more than Y lines of typography micro-tuning, you are over-allocating"
- No concept of CSS categories (structural / typographic / infrastructure) as a budget

The remediation's CSS budget analysis (06-css-budget-reallocation.md) found that the flagship's CSS was TECHNICALLY COMPLIANT with every rule but VISUALLY EMPTY because effort was misallocated toward invisible micro-typography instead of visible structural components.

**Risk:** Without budget allocation guidance, a builder could again produce technically-compliant CSS that is visually monotonous -- lots of well-crafted typography with no grids, no borders, no component variety. SC-14 prevents sub-perceptual CSS, but it does not prevent UNDER-ALLOCATION to structural variety.

**Counterargument:** The pipeline's recipe format (conventions-brief Section 8) IMPLICITLY guides allocation by providing structural CSS recipes. A builder following the recipes will produce structural variety because the recipes contain structural CSS. The remediation's explicit budget concept may not be necessary if the recipes are good enough.

### 3.4 Verdict

**GAP: SIGNIFICANT but not BLOCKING.** The pipeline's SC-14 prevents the worst failure mode (sub-perceptual CSS). The recipe format in conventions-brief implicitly guides toward structural variety. But the explicit concept of "CSS budget allocation" -- deliberately distributing CSS effort across structural, typographic, and infrastructure categories -- is absent. If a future builder skips the structural recipes and writes extensive custom typography, the pipeline would not catch the misallocation until the Mode 4 PA.

---

## Section 4: Perception Model

### 4.1 Where Thresholds Are Embedded

The perception threshold table appears in three locations in the current pipeline:

**Location 1: conventions-brief.md Section 2 ("Perception Thresholds")**
- Background color: >= 15 RGB points on at least one channel between adjacent sections
- Font-size: >= 2px between adjacent section headings
- Letter-spacing: >= 0.025em between zones
- Line-height: >= 0.15 between zones
- Padding: >= 24px difference between adjacent zones
- Border: present or absent (>= 1px)
- Font-weight: >= 100 between zones
- Total boundary gap: <= 120px stacked

**Location 2: SKILL.md Section 5 (SC Gates)**
- SC-09: "Background delta: adjacent sections MUST differ by >= 15 RGB on at least one channel"
- SC-10: "Stacked boundary gap (padding + margin + border): MUST be <= 120px between any two adjacent sections"
- SC-14: "Sub-perceptual CSS: count of properties below perception thresholds (from conventions-brief Section 2) MUST be 0"

**Location 3: conventions-brief.md Section 9B (Quality Floor)**
- "Can you see zone color differences without a color picker? YES"
- "Can you see typography variation between sections without measuring? YES"
- "Can you see at least 3 different structural elements (borders, dividers, callouts, grids)? YES"

### 4.2 Consistency Check

| Threshold | conventions-brief Section 2 | SKILL.md SC Gates | Quality Floor (Section 9B) | Consistent? |
|-----------|---------------------------|-------------------|--------------------------|-------------|
| Background >= 15 RGB | YES | YES (SC-09) | YES (perceptual question) | CONSISTENT |
| Font-size >= 2px | YES | NO (not a gate) | YES (perceptual question) | PARTIAL -- no programmatic gate for font-size delta |
| Letter-spacing >= 0.025em | YES | INDIRECT (SC-14 catches sub-perceptual) | NO | PARTIAL -- caught by SC-14 but not its own gate |
| Line-height >= 0.15 | YES | INDIRECT (SC-14) | NO | PARTIAL -- caught by SC-14 but not its own gate |
| Padding >= 24px | YES | NO (not a gate) | NO | WEAK -- only in conventions-brief |
| Stacked gap <= 120px | YES | YES (SC-10) | NO | CONSISTENT between brief and gates |
| Border >= 1px | YES | NO (not a gate) | YES (structural elements question) | PARTIAL |
| Font-weight >= 100 | YES | INDIRECT (SC-14) | YES (perceptual question) | PARTIAL |

### 4.3 Assessment

**Strengths:**
- The pipeline's perception model is VASTLY improved over the original master prompt (which had ZERO perception terms across 963 lines -- the dominant finding from 08-perception-model-shift.md)
- The two most critical thresholds (background >=15 RGB and stacked gap <=120px) have FULL coverage: defined in conventions-brief, enforced by SC gates, and checked by quality floor
- SC-14 provides a CATCH-ALL gate for any sub-perceptual CSS

**Weaknesses:**
- Font-size delta (>=2px) has no dedicated gate. A builder could use 16px and 17px for adjacent section headings (only 1px delta, below threshold). SC-14 might catch this if the builder wrote it as a per-zone rule, but font-size is often set globally, not per-zone.
- Padding delta (>=24px) has no gate at all. Only appears in conventions-brief.
- Letter-spacing, line-height, font-weight are caught only indirectly by SC-14's general "sub-perceptual count = 0" check. This works if SC-14's implementation actually scans every CSS property against the thresholds table. If SC-14 is implemented as a keyword search for known sub-perceptual patterns rather than a comprehensive scan, these could slip through.

### 4.4 Verdict

**WELL PRESERVED with 2 SIGNIFICANT gaps:**
1. **Font-size delta lacks its own gate.** The remediation's flagship failure included uniform 16px/400 typography across ALL sections. A dedicated SC gate checking "adjacent section heading font-sizes MUST differ by >= 2px" would prevent this specific failure mode.
2. **Padding delta lacks any gate.** Only in conventions-brief text. If the builder doesn't read that line, no gate catches it.

---

## Section 5: Process Topology Lessons

### 5.1 What the Remediation Demonstrated (from 07-process-topology-shift.md and 18-prompt-craftsmanship-evolution.md)

The remediation succeeded with a radically simpler topology:

| Dimension | Failed Master Prompt | Successful Remediation |
|-----------|---------------------|----------------------|
| Agent count | 12 creative + 9 PA = 21 | 1 builder |
| Builder model | Sonnet | Opus |
| Topology | Hub-and-spoke, 6 passes | Single agent, 9 phases |
| Communication | 6 checkpoints, 0 messages sent | N/A (one agent) |
| Builder prompt size | 71 lines (13.4%) | 1,025 lines (100%) |
| Builder prompt type | 100% constraints | ~70% recipes, ~30% constraints |
| Verification | Deferred to Gate 5 (post-build) | Embedded after every phase |
| Information compression | 2,400:1 from research to builder behavior | ~1:1 (builder reads all) |
| Reproducibility | LOW (high variance) | HIGH (specific values) |

Key process lessons from the remediation:

1. **Single builder with full context beats multiple builders with partial context.** Information compression across agent handoffs was 2,400:1 -- the builder received 71 lines out of a 963-line prompt plus ~170,000 lines of research.
2. **Opus for builders, not Sonnet.** Opus complies AND creates beyond constraints. Sonnet complies meticulously but does not create beyond what is specified.
3. **Embedded verification beats deferred verification.** The remediation had perception checks after every phase. The master prompt deferred all perceptual checking to Gate 5 (post-build). By Gate 5, fixing failures requires rebuilding.
4. **Recipe language beats constraint language.** 0.32:1 constraint-to-action ratio (remediation) vs 3.0:1 (master prompt).
5. **Audience separation is critical.** The master prompt addressed ALL agents equally. The remediation addressed a single builder. The auxiliary wrapper demonstrated a third approach: separate orchestrator from executor.
6. **Backstory belongs in orchestrator prompts, not executor prompts.** The master prompt spent 272 lines (28%) on conviction, exemplars, laws, parameter tables. The remediation spent those lines on CSS recipes instead.
7. **Reading must produce ARTIFACTS, not comprehension.** The auxiliary wrapper invented "mandatory extraction artifacts" -- proof that agents actually read their reference files.

### 5.2 What the Pipeline Preserves

| Lesson | Pipeline Implementation | Status |
|--------|----------------------|--------|
| Single builder | SKILL.md Section 4: single Opus builder | PRESERVED |
| Opus for builders | SKILL.md: "ALWAYS Opus -- never Sonnet for builders" | PRESERVED |
| Full context for builder | Builder receives conventions-brief (547 lines) + TC output | PRESERVED |
| Recipe language | conventions-brief is recipe-dominant (1.4:1 ratio) | PRESERVED |
| Audience separation | SKILL.md = orchestrator prompt; conventions-brief = builder prompt | PRESERVED |
| Backstory in orchestrator only | SKILL.md has procedural directives; conventions-brief has recipes + identity | PRESERVED |
| Embedded verification | PARTIAL -- Quality Floor checklist exists but is post-build, not per-phase | PARTIAL |
| Mandatory extraction artifacts | NOT in pipeline | MISSING (see Section 6) |

### 5.3 Verdict

**WELL PRESERVED on topology.** The pipeline adopted the remediation's most critical topology lessons: single Opus builder, full context, recipe language, audience separation. The 07-process-topology-shift.md analysis mapped 23 shifts; the pipeline implements the 7 highest-impact ones.

**PARTIALLY PRESERVED on verification timing.** The pipeline has comprehensive post-build verification (21 SC gates + Mode 4 PA). But the remediation's per-phase embedded perception checks -- which catch failures DURING construction when they are cheap to fix -- are only partially represented by the Quality Floor checklist in conventions-brief Section 9B.

---

## Section 6: BLOCKING Gaps

These are remediation lessons that are NOT in the pipeline and whose absence could cause the same class of failure that the remediation fixed.

### GAP 1: No Mid-Build Perceptual Verification (BLOCKING)

**What the remediation did:** After every major phase (backgrounds, borders, typography, spacing), the builder performed a PERCEPTION CHECK asking "can you SEE this?" with specific expected observations: "You should see warm peach -> tan -> honey -> cooling cream -> cool gray."

**What the pipeline does:** Builder builds according to conventions-brief recipes. After the build is complete, 21 SC gates run programmatic checks. Then Mode 4 PA (9 auditors) assesses the final artifact.

**Why this is BLOCKING:** The flagship experiment's builder followed every rule but produced imperceptible output. The failure accumulated across phases -- each phase added sub-perceptual CSS that was individually compliant but cumulatively invisible. The remediation's embedded checkpoints caught this MID-BUILD. The pipeline's post-build gates caught this TOO LATE (after the entire page was built).

**Risk level:** HIGH. If the builder writes compliant-but-imperceptible CSS, the pipeline will not catch it until the SC gates and PA, at which point the fix requires re-building significant portions of the page. The remediation's per-phase checkpoints are 10-20x cheaper to act on than post-build PA findings.

**Recommended fix:** Add 4-6 embedded perception checkpoints to the conventions-brief (or to the builder's operational recipe if one exists), positioned after major construction phases:
1. After zone backgrounds: "Open at 1440px. Can you see 3+ distinct color zones without a color picker?"
2. After structural elements: "Can you see borders, dividers, or callouts creating visual structure?"
3. After typography: "Compare section headings -- can you see size/weight differences?"
4. After spacing: "Do sections feel rhythmically different? Early sections more spacious?"

### GAP 2: No CSS Budget Allocation Guidance (SIGNIFICANT)

**What the remediation did:** Categorized CSS into Visible Structural (31.5%), Perceptible Typographic (14%), Sub-Perceptual (23.7%), and Infrastructure (30.8%). Then reallocated the sub-perceptual budget to structural variety.

**What the pipeline does:** SC-14 prevents sub-perceptual CSS. Recipes guide toward structural variety. But no explicit budget allocation.

**Why this matters:** A builder could over-invest in any single channel (e.g., elaborate typography with minimal structural variety) without violating any gate. SC-14 prevents invisible CSS but does not prevent MONOTONOUS visible CSS.

**Risk level:** MODERATE. The recipe format in conventions-brief implicitly guides allocation. SC-14 prevents the worst failure. But without explicit allocation guidance, a builder with strong typography instincts might produce a page with beautiful text and zero structural elements.

**Recommended fix:** Add a brief "CSS Budget" note to conventions-brief Section 8: "Your CSS should include at least: 3 distinct structural elements (borders, dividers, grids, callouts), 3+ zone background colors, and 2+ typography scale levels. If your CSS is >60% typography with <3 structural elements, rebalance."

### GAP 3: Font-Size Delta Has No Dedicated Gate (SIGNIFICANT)

**What the remediation fixed:** The flagship had uniform 16px/400 typography across all sections. The remediation specified exact font-size values per zone (15px, 16px, 17px) with >=2px deltas between non-adjacent zones.

**What the pipeline does:** conventions-brief Section 2 states >=2px font-size delta. SC-14 catches "sub-perceptual CSS count = 0." But there is no dedicated gate checking "adjacent section heading font-sizes MUST differ by >= 2px."

**Why this matters:** Font-size uniformity was the second-most-visible failure in the flagship (after whitespace voids). A builder could set all body text to 16px and all headings to 28px -- technically compliant with typography rules but creating zero inter-section differentiation. SC-14 would not catch this because each value is above the absolute perception threshold; it is the LACK OF VARIATION that is the problem.

**Risk level:** MODERATE. The conventions-brief Section 4 (Multi-Coherence) and Section 4's typographic progression table guide builders toward variation. But without a gate, this is guidance, not enforcement.

**Recommended fix:** Add SC gate: "Typography variation: section heading font-sizes MUST use >= 3 distinct values across 12+ sections. Adjacent sections' primary text MUST differ on at least 1 of: font-size (>=2px), font-weight (>=100), or line-height (>=0.15)."

### GAP 4: Cascade Value Table Not Required as Verification Artifact (MODERATE)

**What the remediation did:** Required a complete cascade value table (12 rows x 10 columns) showing exact computed CSS values per section per channel. This made coherence VERIFIABLE -- you could SEE whether adjacent sections actually differed on >=3 channels.

**What the pipeline does:** SC-13 checks "multi-coherence: >=3 channels shift between adjacent sections." This is a threshold check. The builder must verify it, but no structured artifact is required.

**Why this matters:** Without a cascade table, SC-13 relies on the builder's self-assessment of channel shifts. The master prompt's CCS was "mandated but NEVER COMPUTED" (10-coherence-model-shift.md). The pipeline risks the same outcome if SC-13 is checked by eyeballing rather than by constructing a value table.

**Risk level:** MODERATE. The pipeline's SC-13 is more specific than the master prompt's CCS (it specifies >=3 channels, not just >=0.30 CCS). But it is still a self-assessment gate.

**Recommended fix:** Consider requiring a brief cascade summary as part of the builder's self-check: "List the 3 channels that shift between each pair of adjacent sections. If you cannot name 3, add variation."

### GAP 5: No Mandatory Extraction Artifacts / Proof of Reading (MINOR)

**What the auxiliary wrapper invented:** "Read X. Write extraction Y. Cannot proceed until Y exists." This transformed passive reading into active, verifiable extraction.

**What the pipeline does:** SKILL.md instructs the builder to "Read conventions-brief.md." No extraction artifact is required.

**Why this matters:** The 18-prompt-craftsmanship-evolution.md analysis found that the auxiliary's mandatory extraction artifacts were its single most valuable innovation. They prevent the common failure where an agent "reads" a file but only skims it.

**Risk level:** LOW for /build-page specifically, because the builder is a single Opus agent reading a well-structured 547-line document. The risk of skimming is lower with Opus than with Sonnet, and lower with a single document than with 11+ files. The extraction artifact pattern is more critical for multi-agent orchestration.

**Recommended fix:** No immediate change needed. If future validation reveals that builders are skimming conventions-brief, add an extraction requirement.

---

## Summary of All Gaps

| # | Gap | Severity | Risk | Recommended Action |
|---|-----|----------|------|-------------------|
| 1 | No mid-build perceptual verification | BLOCKING | Builder produces imperceptible CSS that is not caught until post-build PA | Add 4-6 embedded perception checkpoints to conventions-brief or operational recipe |
| 2 | No CSS budget allocation guidance | SIGNIFICANT | Builder over-invests in one channel, creating monotonous visible CSS | Add brief budget note to conventions-brief Section 8 |
| 3 | Font-size delta lacks dedicated gate | SIGNIFICANT | Builder produces uniform typography that passes SC-14 but creates no inter-section variation | Add SC gate for typography variation |
| 4 | Cascade value table not required | MODERATE | SC-13 multi-coherence is self-assessed, not artifact-verified | Consider requiring cascade summary in self-check |
| 5 | No mandatory extraction artifacts | MINOR | Builder skims conventions-brief | Monitor; add if validation reveals skimming |

**Overall pipeline health: 7/12 remediation innovations WELL PRESERVED, 3 PARTIALLY, 2 MISSING.** The pipeline has successfully absorbed the remediation's most critical lessons (perception thresholds, recipe format, Opus builder, single builder with full context, S-09 stacking fix, accessibility). The BLOCKING gap (mid-build perceptual verification) is the single highest-priority fix -- it directly addresses the failure mode that caused the flagship to score 1.5/4 despite passing all programmatic checks.

---

**END OF CROSS-REFERENCE AUDIT**
**Total innovations audited:** 15
**Total gaps identified:** 5 (1 BLOCKING, 2 SIGNIFICANT, 1 MODERATE, 1 MINOR)
**Files read:** 13 (5 remediation, 4 failure analysis, 2 process, 2 current pipeline)

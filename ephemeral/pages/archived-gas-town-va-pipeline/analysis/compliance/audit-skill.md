# Skill Compliance Audit: /build-page SKILL.md

**Auditor:** audit-skill
**Date:** 2026-02-23
**Scope:** Does `~/.claude/skills/build-page/SKILL.md` correctly govern the Pipeline v3 run that produced `ephemeral/pages/yegge-gas-town-extraction/`?
**Evidence base:** SKILL.md (61 lines), MANIFEST.md (1,092 lines), 9 artifact files in `ephemeral/va-extraction/`, all output files in `ephemeral/pages/yegge-gas-town-extraction/`

---

## 1. Skill Expansion and Content Path Substitution

### 1.1 Content Path Variable

**SKILL.md specifies:**
> Build a page from `{CONTENT_PATH}`.

**Assessment: COMPLIANT (inferred)**

The skill was invoked with a Yegge Gas Town content markdown file. The output directory `yegge-gas-town-extraction` uses a content-slug derivation consistent with SKILL.md line 52:
> Output directory: `ephemeral/pages/{CONTENT_SLUG}/` -- derive slug from content filename.

The Content Map produced in Phase 0 references "~5,800 words" of Steve Yegge Gas Town content with 13 sections + appendices, confirming the content path was successfully substituted and the Content Analyst received the raw markdown.

### 1.2 MANIFEST as Authoritative Spec

**SKILL.md specifies (lines 25-26):**
> Use the Pipeline v3 execution manifest at `ephemeral/va-extraction/MANIFEST.md` as the authoritative pipeline spec. Read it first, then follow the 11-step quickstart procedure in its opening section.

**Assessment: COMPLIANT**

The pipeline run follows the MANIFEST's 11-step quickstart:
1. Prerequisites verified (tokens.css, components.css, mechanism-catalog.md, council-verdict.md, TC Brief Template all exist at specified paths)
2. Content Analyst produced Content Map (79 lines -- slightly above the "~30-50 lines" target)
3. Mode determined: COMPOSED (correct per content map's high heterogeneity + high metaphor viability)
4. Brief Assembler produced Execution Brief (174 lines -- above the "~100-165 lines" target but reasonable for COMPOSED mode)
5. Builder produced single HTML file (`yegge-gas-town.html`)
6. Screenshots captured at 3 viewports (1440px: 24 files, 1024px: 15 files, 768px: 16 files = 55 total)
7. Gate Runner ran programmatically (42 gates, results in `gate-results.md`)
8. 9 PA Auditors deployed (A-I, reports in `pa-auditor-{a-i}.md`)
9. Integrative Auditor produced synthesis (`pa-integrative.md`)
10. Weaver produced verdict (`verdict.md`)
11. Verdict: SHIP WITH FIXES (pipeline terminated with action items per single-pass behavior)

All 11 steps executed. The MANIFEST governed execution.

---

## 2. Non-Negotiable Enforcement

### 2.1 Container 940-960px

**SKILL.md (line 56):** "Container: 940-960px"

**Assessment: PASS**

HTML source has `max-width: 960px` on all container elements (lines 169, 186, 257, 1611). Gate GR-03 reports PASS: "960px, 6 container elements." The container discipline was enforced.

### 2.2 Warm Palette R >= G >= B

**SKILL.md (line 57):** "Warm palette: R >= G >= B on every background color"

**Assessment: PARTIAL FAIL (gate flagged, but source CSS is warm)**

Gate GR-05 reports FAIL: "98 cold colors (rgb(74,144,217) on role-card__level)." However, examination of the HTML source reveals a discrepancy:

- The CSS defines `--accent-blue: #A07D50` (R=160, G=125, B=80 -- WARM, R>G>B)
- `.role-card--rig .role-card__level` uses `color: var(--accent-blue)` which resolves to `#A07D50`
- No explicit `rgb(74,144,217)` appears anywhere in the HTML source

The `rgb(74,144,217)` detected by the gate runner is likely a computed color from either: (a) browser default styles bleeding through on elements without explicit color assignment, (b) a different version of the HTML being tested, or (c) a gate runner false positive on elements inheriting browser default link colors.

The builder DID encode warm colors in the CSS. The "accent-blue" variable name is misleading but the actual value (#A07D50) is warm. The GR-05 "18 pure black" violations are from browser defaults on HTML/HEAD elements (acknowledged as false positives in the gate results).

**Verdict: The CSS INTENT is compliant. The gate runner detected a genuine issue that needs investigation -- either the HTML served to the gate runner differed from the source, or browser defaults are leaking cold colors onto elements without explicit color assignment. The non-negotiable was partially enforced at the CSS level but not fully enforced at the computed-style level.**

### 2.3 Perception Thresholds

**SKILL.md (line 58):** "Perceptible CSS: >= 15 RGB background delta, >= 0.025em letter-spacing, <= 120px stacked gap, <= 96px single margin"

**Assessment: PARTIAL FAIL**

| Threshold | Gate | Status | Evidence |
|-----------|------|--------|----------|
| >= 15 RGB delta | GR-11 | **FAIL** | Z2->Z3 delta = 11, Z3->Z4 delta = 8 |
| >= 0.025em letter-spacing | GR-12 | PASS | 0 violations |
| <= 120px stacked gap | GR-13 | PASS | Max 112px |
| <= 96px single margin | GR-15 | PASS | 0 violations |
| <= 150px visual gap | GR-14 | **FAIL** | Z5->Z6 = 318px (dark interstitial block) |

Two of four perception thresholds failed. The background delta failures (Z2->Z3 and Z3->Z4) are straightforward CSS fixes -- the zone backgrounds need wider RGB separation. The 318px visual gap is a designed dark inversion block (D-04 "Second-Half Moment") that creates a structural element between zones; the intent is compositional but the measurement is correct.

**The non-negotiable was NOT fully enforced.** The builder produced backgrounds that fell below the 15 RGB threshold, and the gate runner correctly flagged this. The pipeline DID run the gates and DID flag the failures, so the DETECTION was compliant -- but the builder was not prevented from violating the thresholds (which is by design: builder never sees thresholds, gates check after the fact).

### 2.4 Builder Model: Opus

**SKILL.md (line 59):** "Builder model: Opus always"

**Assessment: COMPLIANT (structural evidence)**

The HTML output demonstrates:
- Conviction statement as HTML comment at file top (lines 1-9)
- 6 concept-named zone backgrounds (`--refinery-intake`, `--refinery-floor`, etc.)
- Structural metaphor execution (refinery vocabulary in CSS custom property names)
- 8 disposition instructions executed (D-01 through D-08 all evidenced in the Execution Brief and HTML)
- Multiple genuine "design moments" identified by PA auditors (role card grid, dark inversion quote, complexity ladder)
- PA-05 score of 3/4 COMPOSED

This level of compositional intelligence is consistent with an Opus builder. The MANIFEST (Appendix F) states "ALL pipeline agents MUST use the Opus model" and the skill reiterates "Builder model: Opus always." There is no explicit model tag in the output files to verify model choice directly, but the output quality is strong evidence.

### 2.5 Fresh-Eyes PA Auditors

**SKILL.md (line 60):** "PA auditors are fresh-eyes: zero build context, perceptual language only"

**Assessment: COMPLIANT**

All 9 PA auditor reports (pa-auditor-a.md through pa-auditor-i.md) show:
- Header declaring "Fresh Eyes, Zero Context" (Auditor A) or "Fresh-eyes, zero build context" (Auditor E)
- No references to the Execution Brief, Content Map, builder recipe, or pipeline internals
- Perceptual language throughout: "I see," "reads as," "feels like," "my eye goes to"
- No gate thresholds cited, no mechanism counts, no CSS line counts
- Questions answered with visual evidence only (screenshot references, viewport observations)

Example from Auditor A: "The massive blank void after the footer. At 1440px, scrolls 18 through 22 -- five full viewport-heights -- are completely empty cream-colored space..." This is purely perceptual language describing what is seen.

The Integrative Auditor also operates fresh-eyes, synthesizing from auditor reports + screenshots only.

**The non-negotiable was enforced.**

---

## 3. Output Directory Compliance

**SKILL.md (line 52):** "Output directory: `ephemeral/pages/{CONTENT_SLUG}/` -- derive slug from content filename."

**Assessment: COMPLIANT**

Output directory is `ephemeral/pages/yegge-gas-town-extraction/`. The slug `yegge-gas-town-extraction` is derived from the content filename. This follows the skill's convention.

For comparison, the previous Gas Town run used `ephemeral/pages/gas-town-steve-yegge/` -- a different slug derivation from the same content. Both are valid slug derivations; the skill does not specify a canonical slug algorithm.

### Output file inventory:

| File | Type | Present |
|------|------|---------|
| content-map.md | Phase 0 output | YES |
| execution-brief.md | Phase 1 output | YES |
| yegge-gas-town.html | Phase 2 output | YES |
| gate-results.md | Phase 3A output | YES |
| screenshots/ (55 files) | Phase 3A output | YES |
| pa-auditor-{a-i}.md (9 files) | Phase 3B output | YES |
| pa-integrative.md | Phase 3B output | YES |
| verdict.md | Phase 3C output | YES |

Total: 16 files + 55 screenshots = 71 artifacts. All pipeline phases produced output.

---

## 4. Artifact Reference Compliance

**SKILL.md (lines 29-41):** The skill lists 9 artifact files + council-verdict.md.

### 4.1 Do All 9 Artifacts Exist?

| # | File | Path | Exists |
|---|------|------|--------|
| 1 | artifact-identity-perception.md | ephemeral/va-extraction/ | YES |
| 2 | artifact-builder-recipe.md | ephemeral/va-extraction/ | YES |
| 3 | artifact-gate-runner.md | ephemeral/va-extraction/ | YES |
| 4 | artifact-pa-protocol.md | ephemeral/va-extraction/ | YES |
| 5 | artifact-routing.md | ephemeral/va-extraction/ | YES |
| 6 | artifact-orchestrator.md | ephemeral/va-extraction/ | YES |
| 7 | artifact-tc-brief-template.md | ephemeral/va-extraction/ | YES |
| 8 | artifact-worked-examples.md | ephemeral/va-extraction/ | YES |
| 9 | artifact-value-tables.md | ephemeral/va-extraction/ | YES |
| + | council-verdict.md | ephemeral/va-extraction/ | YES |

All 9 artifacts + council-verdict.md are present.

### 4.2 Were Artifacts Used by Correct Agents?

Evidence from output files:

- **Content Analyst** used artifact-routing.md's content analysis protocol (Content Map shows 7 operations, reader model, tension analysis -- all matching the routing artifact's Phase 0 spec)
- **Brief Assembler** used artifact-tc-brief-template.md + soul world-descriptions + perception thresholds + recipe phases + disposition D-01-D-08 (Execution Brief shows all 4 tiers + content map appendix matching template structure)
- **Builder** received Execution Brief + reference files (HTML shows concept-named CSS properties, conviction statement, 6-phase recipe execution)
- **Gate Runner** used artifact-gate-runner.md (42 gates checked, identity/perception/anti-pattern sections all present)
- **PA Auditors** received screenshots + assigned questions per artifact-pa-protocol.md "4.2 Auditor Assignments" (each report shows thematic question assignments matching the MANIFEST roster)
- **Integrative Auditor** synthesized 9 reports + screenshots (pa-integrative.md shows gestalt impression + PA-05 scoring)
- **Weaver** applied verdict logic from artifact-pa-protocol.md "4.5 Weaver" (verdict.md shows priority-ordered verdict logic, dual outputs)

### 4.3 Skill-to-Artifact Description Accuracy

| # | Skill Description | Actual Content | Match |
|---|-------------------|---------------|-------|
| 1 | "Soul constraints + perception thresholds" | Soul constraints (10 SCs) + perception thresholds (6 PTs) + cross-layer integration | ACCURATE |
| 2 | "Builder recipe in sequenced format" | 6-phase recipe (Read/Select/Deploy/Assess) + disposition D-01-D-08 | ACCURATE |
| 3 | "~1,379 lines -- includes executable Playwright JS for all gates" | Gate runner with Playwright JS code for 42 gates | ACCURATE |
| 4 | "PA auditor protocol + question assignments" | PA protocol + 65 questions across 9 auditors + integrative + weaver | ACCURATE |
| 5 | "Content routing + mode determination" | Content analysis protocol + mode selection + brief template structure | ACCURATE |
| 6 | "Orchestration protocol" | Full pipeline orchestration (Sections 0-8) + experiments + suppressors | ACCURATE |
| 7 | "~165-line TC brief template for Brief Assembler" | TC Brief Template with 4-tier structure | ACCURATE |
| 8 | "Gas Town worked examples" | Content map, brief, gates, PA excerpt worked examples | ACCURATE |
| 9 | "Pre-computed CSS perception threshold values" | CSS value tables for 6-channel framework | ACCURATE |

All 9 descriptions accurately reflect actual artifact content.

---

## 5. MANIFEST Used as Authoritative Spec

**SKILL.md (lines 25-26):** "Use the Pipeline v3 execution manifest at `ephemeral/va-extraction/MANIFEST.md` as the authoritative pipeline spec."

**Assessment: COMPLIANT WITH DEVIATIONS**

The MANIFEST was clearly the governing document. Evidence:

**Followed correctly:**
- 11-step quickstart executed in order
- 15-agent topology (orchestrator + 14 workers)
- FLAT topology (no nested hierarchies)
- Gate Runner executed as Playwright JS by orchestrator, NOT as a separate LLM agent
- Screenshot pre-capture pattern (orchestrator takes all screenshots before spawning auditors)
- Fresh-eyes principle enforced (PA auditors received only screenshots + questions)
- Single-pass behavior (pipeline terminated with SHIP WITH FIXES verdict + action items)
- COMPOSED mode selected (correct per content analysis output)
- Dual-output Weaver (diagnostic verdict + artistic impression)

**Minor deviations:**
- Content Map was 79 lines vs MANIFEST's "~30-50 lines" target (+58% over upper bound)
- Execution Brief was 174 lines vs MANIFEST's "~100-165 lines" target (+5% over upper bound)
- Gate results reported in markdown (gate-results.md) rather than "structured JSON" per MANIFEST
- Screenshots organized in flat `screenshots/` directory with viewport-prefix naming rather than MANIFEST's suggested `screenshots/{width}/` directory structure
- Conviction statement embedded as HTML comment in the HTML file rather than "a SEPARATE FILE before beginning construction" per MANIFEST Phase 2 step 3

---

## 6. Sufficiency Assessment: Can a Fresh Instance Execute from This Skill?

### What the Skill Provides Well

1. **Clear entry point:** "Read MANIFEST first, follow 11-step quickstart" -- unambiguous starting instruction
2. **Non-negotiables listed explicitly:** 5 binary rules, each on its own line, testable
3. **Agent prompts directive:** "Appendix E has copy-paste-ready prompts -- fill the {VARIABLE} placeholders"
4. **Output directory convention:** Clear `ephemeral/pages/{CONTENT_SLUG}/` pattern
5. **Key execution rules:** Gate Runner is orchestrator code (not a separate agent), screenshots taken before PA auditors, all agents Opus
6. **MANIFEST reference:** Single authoritative source, not 9 separate files to discover

### What Is Ambiguous or Missing

| # | Gap | Impact | Severity |
|---|-----|--------|----------|
| G1 | **No content path validation** -- skill says "Parse content file path from command argument. If no path provided, ask the user." but does not specify what constitutes a valid content file (markdown? minimum word count? specific format?) | A fresh instance might accept an empty file or non-markdown content, wasting an entire pipeline run before Phase 0 catches the error. | LOW -- Phase 0 Content Analyst would catch this |
| G2 | **No explicit file-writing mandate for pipeline intermediates** -- skill does not say "Write Content Map to file, write Execution Brief to file, write gate results to file." The MANIFEST implies it but the skill does not mandate it. | A fresh instance might keep Content Map and Execution Brief in memory only, not writing them to disk. This would still work functionally but lose audit trail. | MODERATE -- affects reproducibility and debugging |
| G3 | **No HTTP serving instruction** -- skill does not mention serving HTML via HTTP. MANIFEST step 6 says "Serve HTML via HTTP. Capture screenshots at 3 viewports." A fresh instance reading only the skill might try `file://` protocol. | Playwright blocks `file://`. A fresh instance would hit this error at screenshot capture. | LOW -- MANIFEST covers this; skill defers to MANIFEST |
| G4 | **Conviction statement format ambiguous** -- skill does not mention conviction statements. MANIFEST says "separate file before construction." The actual run embedded it as an HTML comment inside the HTML file. | Minor process discrepancy. Both approaches preserve the conviction. | LOW |
| G5 | **No mention of TeamCreate** -- skill line 49 says "Use TeamCreate." but does not explain what TeamCreate is (a tool? a command? an API?). | A fresh Claude instance would need to discover TeamCreate through tool availability. If using the Claude Agent SDK with team capabilities, this is implicit. If not, the instruction is meaningless. | MODERATE -- depends on execution environment |
| G6 | **No mention of parallel PA auditor deployment** -- skill mentions "Screenshots: Capture ALL screenshots YOURSELF before spawning PA auditors" but does not explicitly say to spawn 9 auditors in parallel. MANIFEST does. | A fresh instance might spawn them sequentially, wasting time. | LOW -- functional but slower |
| G7 | **No explicit output filename conventions** -- skill specifies the output directory but not file naming. Should the HTML be `output.html`? `{slug}.html`? `index.html`? | The two Gas Town runs used different conventions: `yegge-gas-town.html` vs `output.html`. Neither is wrong but the inconsistency suggests the skill should specify. | LOW -- cosmetic |
| G8 | **No mention of what to do if gates fail** -- the 5 non-negotiables are listed but the skill does not say "if these fail, the pipeline produces REFINE/REBUILD." A fresh instance must infer the verdict logic from the MANIFEST. | The skill is a trigger, not a full spec; this is by design. But a fresh instance might not understand that gate failures do not abort the pipeline (they produce a verdict). | LOW -- MANIFEST covers this |
| G9 | **council-verdict.md mentioned but not numbered** -- skill lists 9 artifacts numbered 1-9, then mentions council-verdict.md as "+ council-verdict.md as the authoritative override document when artifacts conflict." A fresh instance might not realize it should read this file. | If artifacts conflict, the orchestrator needs council-verdict.md. But per MANIFEST Section 7, "all council rulings are already incorporated into the 9 artifacts" so it is a safety net, not a dependency. | LOW |
| G10 | **No model verification mechanism** -- non-negotiable #4 says "Builder model: Opus always" but there is no way for the skill or MANIFEST to verify which model was actually used. The output quality is the only signal. | If a cost-constrained user substitutes Sonnet without the `[SONNET-TEST]` tag, the pipeline would run and produce output of unknown model provenance. | MODERATE -- trust-based enforcement, no verification |

### Overall Sufficiency Rating: 7/10

The skill is a thin, well-designed trigger document that correctly delegates to the MANIFEST for execution detail. The 61-line skill does not attempt to replicate the MANIFEST's 1,092 lines; it provides:
- Entry point (content path)
- Authority reference (MANIFEST)
- Non-negotiables (5 binary rules)
- Key execution rules (6 specific instructions)

A fresh Opus instance reading this skill would:
1. Know to read the MANIFEST first (line 25)
2. Know the 9 artifact paths (lines 29-41)
3. Know the 5 non-negotiables (lines 56-60)
4. Know the key execution rules (lines 47-52)
5. Discover the full execution protocol from MANIFEST Quickstart

The primary risk is that a fresh instance might not write intermediate files to disk (G2), might not know about HTTP serving (G3, covered by MANIFEST), and might not understand TeamCreate (G5). These are low-to-moderate risks because the MANIFEST covers them.

---

## 7. Compliance Summary

| Dimension | Status | Notes |
|-----------|--------|-------|
| Content path substitution | PASS | Content correctly loaded, slug derived |
| MANIFEST as authoritative spec | PASS | 11-step quickstart followed |
| Container 940-960px | PASS | 960px confirmed in CSS + gate |
| Warm palette R>=G>=B | PARTIAL FAIL | CSS intent warm, but gate found cold computed colors |
| >= 15 RGB delta | FAIL | Z2-Z3 = 11, Z3-Z4 = 8 |
| >= 0.025em letter-spacing | PASS | 0 violations |
| <= 120px stacked gap | PASS | Max 112px |
| <= 96px single margin | PASS | 0 violations |
| Builder model Opus | PASS (evidence-based) | Output quality consistent with Opus |
| Fresh-eyes PA auditors | PASS | All 9 reports show zero build context |
| Output directory | PASS | ephemeral/pages/{slug}/ |
| 9 artifacts referenced | PASS | All 9 exist and were used |
| MANIFEST compliance | PASS with minor deviations | 5 minor deviations documented |
| Sufficient for fresh instance | 7/10 | 10 gaps identified, none blocking |

### Final Assessment

**COMPLIANT WITH 2 NON-NEGOTIABLE VIOLATIONS**

The skill correctly governed the pipeline run. The MANIFEST was used as the authoritative spec. All 9 artifacts exist and were correctly routed to agents. The output directory convention was followed. PA auditors were fresh-eyes. The builder was likely Opus.

Two non-negotiable violations were detected and correctly flagged by the pipeline's own gate system:
1. **Warm palette:** Gate GR-05 found cold computed colors on `.role-card__level` elements, though the CSS source defines warm values
2. **Perception thresholds:** Background deltas Z2-Z3 (11) and Z3-Z4 (8) fell below the 15 RGB minimum

Both violations resulted in the pipeline's correct verdict: SHIP WITH FIXES (not SHIP). The pipeline's self-correction mechanism worked -- violations were detected, classified, and the verdict was downgraded appropriately. The skill's non-negotiables served as checkable assertions, and the gates that enforce them functioned correctly.

The skill is well-designed as a thin trigger document. Its primary value is directing the orchestrator to the MANIFEST rather than duplicating execution detail. For a fresh instance, the 10 identified gaps (G1-G10) are mostly low-severity and covered by the MANIFEST. The most impactful improvement would be adding explicit instructions for writing intermediate files to disk (G2) and specifying the output filename convention (G7).

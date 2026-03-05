# Final Crack Dimension Assessment -- Pipeline v4 (Post-Convergence Reframe)

**Date:** 2026-02-25
**Auditor:** Opus agent (final-crack-dims)
**Scope:** ALL 14 crack dimensions assessed against the COMPLETE pipeline: 14 artifact files, SKILL.md entry point, convergence reframe checklist, and all implementation/buddy reports.
**Baseline:** `aux-gate0-crack-precheck.md` (pre-convergence: 12/14 IMPROVED, 2/14 UNCHANGED)

---

## Method

For each dimension:
1. Re-read the crack taxonomy definition and concrete examples from the yegge-gas-town build
2. Traced the dimension through ALL pipeline files to assess current structural defenses
3. Compared against the `aux-gate0-crack-precheck.md` baseline to determine delta
4. Cross-referenced `buddy-adversarial-v3-review.md` (4 BLOCKING + 6 SIGNIFICANT issues) to verify fix application status
5. Rated residual risk as HIGH / MEDIUM / LOW / RESOLVED

**BLOCKING fix status note:** The adversarial review identified 4 BLOCKING issues (B-1 through B-4). These are assessed as UNVERIFIED -- no evidence in the implementation directory of explicit fix commits. The assessment below treats them as PENDING unless the file evidence shows them resolved.

---

## D1: Template Slot Absence

**Definition:** Pipeline artifacts contain placeholder tokens (`{VARIABLE}`, `___`, `_INITIAL / REFINE-1 / ...`) that execute as literal strings when agents skip filling them.

### Current State

**Substantially improved.** The convergence reframe made three structural interventions:

1. **EXECUTION-TRACKER-TEMPLATE.md** (163 lines): All 59 fields marked `___` with `(auto)` or `(manual)` source tags. The template itself is a copy-to-output artifact (SKILL.md line 72), so unfilled slots persist as visible blanks in the working document -- a self-documenting failure mode.

2. **GR-80 (Iteration Log Auto-Fill):** Programmatic gate that checks the execution tracker for filled iteration log rows. When it runs, it can detect `___` values remaining. However, GR-80 is RECOMMENDED tier (not REQUIRED), meaning it can be skipped.

3. **Auxiliary Gate 2 (Template-Slot Completeness):** Run during this build's implementation phase (`aux-gate2-template-slots.md`). Found all `{VARIABLE}` placeholders have upstream fill instructions.

**Remaining gaps:**
- The MANIFEST.md Appendix E agent prompts contain `{VARIABLE}` placeholders that require orchestrator substitution. No programmatic check verifies these are filled before agent spawning.
- `artifact-tc-brief-template.md` (~223 lines) uses `{ZONE_BACKGROUNDS}`, `{TYPE_SCALE}`, etc. BV-01 through BV-04 verify brief CONTENT but not that all template slots were filled vs left as literal `{...}` tokens.

### File Locations

| File | Slot Type | Defense |
|------|-----------|---------|
| `EXECUTION-TRACKER-TEMPLATE.md` | `___` blanks (59) | GR-80 partially, manual review |
| `MANIFEST.md` Appendix E | `{VARIABLE}` prompts | NONE (orchestrator diligence) |
| `artifact-tc-brief-template.md` | `{...}` template tokens | BV-01 indirectly (line budget) |
| `artifact-orchestrator.md` Section 7 | `[Y/N]` checklist items | Structural (section position) |

### Residual Risk: **LOW**

The template is now self-documenting (unfilled = visible blank). GR-80 provides programmatic backup. The remaining gap is in agent prompt variable substitution, which is an orchestrator-level concern that would be caught immediately at agent spawn (the agent would receive a literal `{CONTENT_PATH}` and fail to find the file).

### What Would Fully Resolve It

Add a BV-style gate (BV-08 or equivalent) that scans ALL text being passed to each agent for `{...}` or `___` tokens and fails if any are found. ~30 lines of JavaScript. This would make slot absence structurally impossible rather than just visible.

### Structural Defense Adequacy: **ADEQUATE** (with minor gap)

The combination of visible blanks + GR-80 + upstream fill instructions covers 80%+ of the risk. The unfixed gap (agent prompt substitution) is low-probability because agents fail loudly when given literal template tokens.

---

## D2: Compression Loss

**Definition:** Information degrades as it passes through pipeline stages. 963-line specs compress to 73-line briefs (83:1). Nuance, worked examples, and calibration context evaporate.

### Current State

**Substantially improved.** Pipeline v4 made compression loss a DESIGN CHOICE rather than an accident:

1. **TC Brief Template** (`artifact-tc-brief-template.md`, ~223 lines): Provides a structured template with mandatory sections, forcing the Brief Assembler to cover specific dimensions. This is REGENERATION not COMPRESSION -- the Brief Assembler reads the full content and generates a brief from scratch, rather than trying to compress 963 lines.

2. **BV-01 (Tier Line Budget):** Verifies minimum line counts per tier (T1 >= 12, T2 >= 6, T3 >= 40, T4 >= 32, Content Map >= 24). This catches the most egregious compression -- entire tiers being omitted or truncated.

3. **BV-03 (Recipe Format Verification):** Ensures brief uses recipe verbs (3:1 ratio), which carries more information per line than checklist format.

4. **BV-04 (Suppressor Scan):** Catches the specific compressed phrases ("sample 2-4") that were the highest-impact information losers.

5. **GR-26 (Brief Size Cap):** Total < 200 lines, constraint layer <= 73 lines. This is a CEILING, preventing the opposite failure (overloaded briefs that cause builder attention decay -- see D5).

6. **Dual-Channel Architecture** (MANIFEST.md): Builder receives the brief (disposition channel) AND the design system files (vocabulary channel). The brief doesn't need to encode everything because the builder has direct access to `tokens.css`, `components.css`, `mechanism-catalog.md`.

**Remaining gaps:**
- No gate verifies that SPECIFIC worked-example details survive from content map to brief. The Brief Assembler could produce a well-formatted 120-line brief that passes BV-01 through BV-04 while omitting the most content-specific insights.
- The PA protocol compresses 69 questions across 9 auditors, with each auditor seeing only their assigned subset. No mechanism verifies that the Weaver's synthesis doesn't lose auditor-level nuance.

### File Locations

| File | Compression Point | Defense |
|------|-------------------|---------|
| `artifact-tc-brief-template.md` | Content -> Brief | BV-01 line budget |
| `artifact-builder-recipe.md` | Brief -> CSS decisions | Recipe format (BV-03) |
| `artifact-routing.md` | Raw content -> Content Map | Phase 0 protocol |
| `pa-weaver.md` | 10 reports -> Verdict | Weaver calibration refs |
| `MANIFEST.md` Appendix E | Full spec -> Agent prompt | Orchestrator routing |

### Residual Risk: **MEDIUM**

The structural defenses (BV-01 through BV-04, dual-channel, regeneration-not-compression) address the MECHANISM of compression loss. But the CONTENT of what survives is still judgment-dependent. A Brief Assembler that produces grammatically correct recipe-format text at the right line count but misses the key content tension would pass all gates.

### What Would Fully Resolve It

A BV-05 (Compression Fidelity) gate that extracts key entities from the Content Map (tension, metaphor candidates, zone structure, reader model) and verifies they appear in the brief. This is partially covered by BV-05 in the gate manifest ("Compression ratio tracking") but its implementation status is unclear from the code reviewed.

### Structural Defense Adequacy: **PARTIALLY ADEQUATE**

The pipeline addresses the 80/20 of compression loss (format, budget, suppressors, dual-channel). The remaining 20% (content fidelity) requires either a semantic-matching gate or human review of the brief before builder spawn.

---

## D3: Voluntary Non-Execution

**Definition:** Agents receive instructions and simply skip steps, especially late-document steps and steps perceived as optional.

### Current State

**Substantially improved.** The convergence reframe made this a primary target:

1. **BV-06 (Anti-Regression Language Scan):** ITEM-01 from the checklist. Scans the brief for forbidden phrases that historically correlate with non-execution: "single-pass," "when possible," "optional," "consider," etc. This is a STRUCTURAL defense -- the language that enables voluntary non-execution is removed before the builder sees it.

2. **GR-63 (Builder Experiential Marker):** Checks for `<!-- CONVICTION: ... -->` and `<!-- RESIDUAL: ... -->` comments in the HTML output. If the builder skipped the self-evaluation phase (D-08, D-09 in the recipe), these markers would be absent. REQUIRED tier.

3. **GR-78 (Builder Residual Artifact):** Checks for the RESIDUAL comment specifically, which documents what was preserved/changed/traded-off. This is a convergence-reframe addition targeting the specific non-execution pattern where builders skip the self-reflection steps.

4. **GR-79 (REFINE File Completion):** Checks that REFINE artifacts actually exist with `-refine` suffix. Prevents the pattern where the orchestrator declares REFINE but the actual re-audit never happens.

5. **Orchestrator Section 7 Checklists:** The BEFORE/DURING/AFTER checklists for REFINE include `[Y/N]` gates ("Did you re-read this section? [Y/N -- if N, STOP and re-read]"). These are VOLUNTARY compliance (agent must self-report), but their positional prominence reduces skip probability.

**Remaining gaps:**
- D-01 through D-09 in the builder recipe are dispositional instructions. No gate verifies that the builder actually EXECUTED each disposition step (vs just writing HTML that happens to look right). Example: D-04 (Surprise) says to create "at least one moment of visual surprise." GR-53 (Density Arc) partially catches this, but as ADVISORY tier.
- PA auditor non-execution: If an auditor skips questions, the completion manifest (`pa-guardrails.md`) catches it. But the manifest is self-reported.

### File Locations

| File | Non-Execution Risk | Defense |
|------|-------------------|---------|
| `artifact-builder-recipe.md` D-01--D-09 | Builder skips disposition steps | GR-63 (conviction), GR-78 (residual) |
| `artifact-orchestrator.md` Section 7 | Orchestrator skips REFINE protocol | GR-79 (file existence), checklist [Y/N] |
| `pa-deployment.md` | Auditors skip questions | Completion manifest requirement |
| `MANIFEST.md` Phase 3A | Orchestrator skips experiential scan | No programmatic defense |

### Residual Risk: **LOW-MEDIUM**

The highest-impact non-execution scenarios (skipping REFINE entirely, omitting conviction/residual, builder seeing gates) now have programmatic or structural defenses. The remaining gap is in per-step verification of the builder recipe, which is inherently difficult to gate (you can't tell if the builder "considered" D-04 Surprise without perceptual judgment).

### What Would Fully Resolve It

Per-disposition markers in the HTML output (e.g., `<!-- D-04: [builder's surprise description] -->`) verified by a gate. This adds builder overhead but creates a paper trail. Alternatively, rely on the PA audit to catch the EFFECTS of non-execution (a page without surprise WILL score low on PA-17 visual rhythm and PA-55 zone differences).

### Structural Defense Adequacy: **ADEQUATE**

The combination of BV-06 (remove enabling language) + GR-63/78 (verify key outputs exist) + GR-79 (verify REFINE completion) covers the highest-risk non-execution scenarios. The PA audit provides a second-layer catch for disposition non-execution.

---

## D4: Execution-Recording Divergence

**Definition:** What the pipeline DOES and what the tracker RECORDS diverge. Gates report PASS but the reality is different. Agents claim completion without doing the work.

### Current State

**Improved but with structural limitation.**

1. **`source: 'code'` field on all gate results:** Every gate in `gate-runner-core.js` includes `source: 'code'` in its result object. This distinguishes programmatic results from hand-constructed ones. GR-49 (Gate Result Integrity) verifies this field exists.

2. **GR-48 (Gate Coverage Verification):** Checks that all REQUIRED gates appear in the accumulated results. If a gate was skipped, GR-48 catches it. However, the adversarial review (B-1) found GR-79 was MISSING from the REQUIRED_GATES array, which means GR-48 would NOT catch a missing GR-79 result.

3. **GR-80 (Iteration Log Auto-Fill):** Fills tracker fields from gate results, reducing manual entry (and thus divergence). However, the adversarial review (B-2) noted that GR-80 returns PASS even when it can't fill a row.

4. **Execution Tracker Self-Assessment** (5 questions at bottom): Forces the orchestrator to audit their own recording: "Were any gate results hand-constructed?" This is voluntary self-reporting but creates a paper trail.

**Remaining gaps:**
- The BLOCKING issues B-1 (GR-79 missing from REQUIRED_GATES) and B-2 (GR-78/80/82 missing from RECOMMENDED_GATES) are UNVERIFIED as fixed. If unfixed, the coverage verification gate has blind spots.
- Screenshot timestamps vs PA audit timestamps: No gate verifies that screenshots were taken BEFORE PA auditors were spawned (the temporal ordering that ensures fresh-eyes). The orchestrator could spawn auditors before screenshots are ready.
- PA auditor report authenticity: No mechanism distinguishes a genuine 48-question audit from a hastily generated report that hits the right format.

### File Locations

| File | Divergence Risk | Defense |
|------|----------------|---------|
| `gate-runner-core.js` GR-48, GR-49 | Gate results fabricated/skipped | `source:'code'`, coverage check |
| `EXECUTION-TRACKER-TEMPLATE.md` | Tracker not updated | GR-80 auto-fill, self-assessment |
| `gate-manifest.json` | Gate registry out of sync | GR-48 references manifest |
| `pa-guardrails.md` | PA reports fabricated | Completion manifest, cross-validation |

### Residual Risk: **MEDIUM**

The `source:'code'` field and GR-48/49 provide strong defense against gate-level divergence. But the tracker auto-fill (GR-80) has known issues (adversarial B-2: PASS when can't fill), and the BLOCKING fix (B-1: GR-79 missing from REQUIRED_GATES) is unverified. If B-1 is unfixed, REFINE file completion could be unrecorded without detection.

### What Would Fully Resolve It

1. Fix B-1 and B-2 (add missing gates to GR-48 arrays)
2. Add timestamp assertions: screenshot timestamps must precede PA auditor spawn timestamps
3. GR-80 should return FAIL or WARNING (not PASS) when it can't fill tracker fields

### Structural Defense Adequacy: **PARTIALLY ADEQUATE**

Strong at the gate level (source:'code' is an excellent pattern). Weak at the process level (timestamps, tracker fill rate, REFINE coverage).

---

## D5: Position Effect / Attention Decay

**Definition:** Instructions late in documents are executed at lower fidelity than early instructions. Agents front-load attention and skim endings.

### Current State

**Improved from UNCHANGED to PARTIALLY ADDRESSED.**

1. **Brief Size Cap (GR-26):** Total < 200 lines, constraint <= 73 lines. This is the primary structural defense -- if the brief is short enough, there IS no "late document" attention decay. The brief is designed to fit within a single attention window.

2. **BV-07 (Builder Input Volume Ceiling):** ITEM-14 from convergence reframe. Caps total builder input at a threshold (2,500 lines from MASTER-CHECKLIST-v3.md). This prevents the attention budget from being overwhelmed by volume.

3. **Recipe Format (D-01--D-09):** The builder recipe is SEQUENCED with explicit phase markers ("Phase 1: Read Vocabulary", "Phase 2: Select Creative Decisions", etc.). This creates structural anchors that resist attention decay.

4. **Disposition at Both Ends:** D-01 and D-09 form a "conviction sandwich" -- the builder starts with structural framing and ends with self-evaluation. D-09 (The Quiet Zone) was added in the convergence reframe specifically to create an END-OF-DOCUMENT anchor.

5. **PA Question Distribution:** 69 questions split across 9 auditors (6-8 per auditor). Each auditor sees a small enough set that position effects within their assignment are minimal.

**Remaining gaps:**
- The artifact-orchestrator.md is 1,099+ lines. The orchestrator (the user/lead agent) must read and follow instructions across this entire document. Sections 10-14 are marked "STOP HERE FOR EXECUTION" (line 785-790), but the orchestrator may still need to reference them.
- The MANIFEST.md is 700+ lines. While structured with clear section headers and an Appendix system, attention decay across the routing table and agent roster is likely.
- **The two-pass builder pattern remains unimplemented.** The aux-gate0 pre-check identified this as the primary D5 gap. The convergence reframe addressed it indirectly via the brief size cap and recipe sequencing, but did NOT implement a structural two-pass builder.

### File Locations

| File | Attention Decay Risk | Defense |
|------|---------------------|---------|
| `artifact-orchestrator.md` (1,099+ lines) | Orchestrator skims late sections | "STOP HERE" marker at line 785 |
| `MANIFEST.md` (700+ lines) | Routing table entries skipped | Section headers, appendix structure |
| `artifact-builder-recipe.md` (828 lines) | D-07, D-08, D-09 skimmed | D-09 added as end anchor, GR-63/78 |
| Builder input package | Late instructions deprioritized | GR-26 + BV-07 size caps |

### Residual Risk: **MEDIUM**

The brief-level defenses (size cap, recipe format, conviction sandwich) are strong. But the ORCHESTRATOR-level attention decay across 1,099+ lines of orchestrator.md remains unaddressed. The orchestrator is the highest-leverage agent (controls all spawning decisions), and their attention decay directly causes downstream failures.

### What Would Fully Resolve It

1. Split artifact-orchestrator.md into phase-specific files (Phase 0-1, Phase 2, Phase 3, Phase 4/Verdict) that the orchestrator reads only when entering that phase.
2. Implement attention-budget-aware document design: critical instructions FIRST in every section, elaboration AFTER.
3. Add a "re-read before proceeding" prompt at each phase transition (partially done with REFINE `[Y/N]` gates).

### Structural Defense Adequacy: **PARTIALLY ADEQUATE**

Adequate for builder-facing attention decay (brief is short enough). Inadequate for orchestrator-facing attention decay (orchestrator.md is too long and the orchestrator has too many responsibilities).

---

## D6: Cross-File Reference Rot

**Definition:** References between pipeline files become invalid as files are edited independently. Section numbers shift, gate IDs change, file names are updated but cross-references are not.

### Current State

**Improved but fundamentally unresolved.**

1. **Auxiliary Gate 1 (Reference Integrity Scan):** Run during implementation (`aux-gate1-reference-integrity.md`). Scanned all modified files for cross-file references and verified targets exist. Found issues and flagged them. However, this is a ONE-TIME scan, not a persistent defense.

2. **Gate-Manifest.json as Single Source of Truth:** The canonical gate registry centralizes gate IDs, tiers, and descriptions. Gate-runner-core.js references manifest IDs. This reduces (but doesn't eliminate) drift between gate specs and code.

3. **Council Verdict (council-verdict.md):** Authoritative override document that resolves conflicts between artifacts. This is a RECOVERY mechanism, not a prevention mechanism.

4. **Redirect Files:** `artifact-gate-runner.md` and `artifact-pa-protocol.md` are now redirect files pointing to their split sub-files. This creates a known entry point that reduces stale direct references.

**Remaining gaps:**
- No automated cross-reference validation exists as a persistent pipeline gate. The aux-gate1 scan was manual and one-time.
- The adversarial review (B-1, B-2) found SPECIFIC cross-reference rot: gate-manifest.json lists gates as REQUIRED/RECOMMENDED but the GR-48 code arrays don't match. This is EXACTLY D6 -- the manifest and the code drifted apart.
- Line-number references in MANIFEST.md and orchestrator.md (e.g., "extract-d09-d11.md L892") are inherently fragile. Any edit to the referenced file invalidates the line numbers.

### File Locations

| Reference Type | Source | Target | Status |
|---------------|--------|--------|--------|
| Gate IDs (REQUIRED_GATES array) | `gate-runner-core.js` L1634 | `gate-manifest.json` tiers.required | **DRIFTED** (B-1: GR-79 missing) |
| Gate IDs (RECOMMENDED_GATES) | `gate-runner-core.js` L1642 | `gate-manifest.json` tiers.recommended | **DRIFTED** (B-2: 3 gates missing) |
| Wrapper function calls | `gate-runner-core.js` runPostWeaverGates | `gate-manifest.json` step 5.5 | **DRIFTED** (B-3: GR-81 not called) |
| Artifact file references | `MANIFEST.md` routing table | Artifact files on disk | OK |
| Section references | `artifact-orchestrator.md` | Internal section numbers | OK (stable numbering) |
| Line-number citations | `MANIFEST.md` ITEM references | Extraction files | **FRAGILE** (any edit breaks) |

### Residual Risk: **HIGH**

This is one of the two dimensions with the WEAKEST structural defenses. The adversarial review found 3 concrete instances of reference rot (B-1, B-2, B-3) in the CURRENT codebase. No persistent automated check prevents this from recurring with every edit.

### What Would Fully Resolve It

A persistent reference integrity gate (could be an auxiliary gate run at every pipeline start) that:
1. Parses gate-manifest.json tier lists and verifies they match the code arrays in gate-runner-core.js
2. Verifies every file reference in MANIFEST.md resolves to an existing file
3. Verifies gate IDs in gate-runner-spec.md match gate-manifest.json
4. Flags line-number references as warnings (they're inherently fragile)

### Structural Defense Adequacy: **INADEQUATE**

The one-time aux-gate scan is not a persistent defense. The adversarial review proved that reference rot exists in the CURRENT pipeline. Without an automated, always-on check, every edit risks introducing new rot.

---

## D7: Defense Paradox / Complexity Tax

**Definition:** Adding more rules and gates to prevent failures creates its own failure mode: the pipeline becomes so complex that agents (and orchestrators) can't hold it all in working memory. Defenses against D1-D6 introduce D7.

### Current State

**Partially addressed via design principles, but at risk.**

1. **Complexity Budget Tracking:** The MASTER-CHECKLIST-v3.md tracks spec lines added/removed per wave. Net change: +20 spec lines (target was zero). Code net: +160 lines (justified as "code doesn't compete for orchestrator attention budget").

2. **Principle #8 from checklist:** "Code does not compete with spec for the orchestrator's attention budget. 160 lines of gate-runner JS is invisible to agents who never read it. Spec lines are the scarce resource."

3. **Gate Count Management:** 54 total gates (21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY). The tier system means the orchestrator only MUST engage with 21 + 7 = 28 gates. The rest are advisory/informational.

4. **Artifact Split (Wave 3):** Monolithic files split into focused sub-files (gate-runner -> 5 files, PA protocol -> 6 files). Each agent reads ONLY the files relevant to their role. Routing table in MANIFEST.md controls visibility.

5. **"STOP HERE FOR EXECUTION" Marker:** Orchestrator.md line 785 explicitly marks the boundary between execution-critical content (Sections 0-9) and historical/experimental content (Sections 10+).

**Remaining gaps:**
- The total file count increased from the pre-v3 baseline (identified as D14 concern in aux-gate0). More files = more cross-reference surface area = more D6 risk.
- The convergence reframe ADDED 7 new gates (BV-06, BV-07, GR-78-82) and 2 procedural gates (GR-70, GR-75). Each gate is individually justified, but the cumulative effect increases the orchestrator's cognitive load.
- The Aux Audit D (Soft Language) found remaining judgment language in the pipeline. Every piece of ambiguous language is a complexity tax because it requires the agent to make an interpretation decision.

### File Locations

| Complexity Source | Count | Mitigation |
|------------------|-------|------------|
| Total artifact files | 20+ | Role-based routing in MANIFEST.md |
| Total gates | 54 | Tier system (28 mandatory) |
| Orchestrator.md sections | 14 | "STOP HERE" at section 9 |
| Pipeline phases | 4 (+ REFINE) | Sequential execution |
| Agent types | 15 | Clear roster in MANIFEST.md |

### Residual Risk: **MEDIUM**

The tier system and role-based routing are good structural defenses. But the pipeline is at the EDGE of manageable complexity. The next wave of improvements risks tipping into "defense paradox" territory where the defenses themselves become the primary failure mode.

### What Would Fully Resolve It

1. A COMPLEXITY CEILING: no more than 60 gates, 25 artifact files, 1,200 lines in any single file. New additions must be offset by removals.
2. Automated complexity metrics reported at pipeline start (file count, total spec lines, gate count, max file length).
3. A sunset protocol: gates that have never FAILED across N runs get downgraded from REQUIRED to ADVISORY.

### Structural Defense Adequacy: **PARTIALLY ADEQUATE**

The tier system and routing table are good. The absence of hard complexity ceilings and sunset protocols means complexity can only grow. The convergence reframe added +20 spec lines where the target was zero -- even the most disciplined additions create drift.

---

## D8: Spec Ambiguity / Soft Language

**Definition:** Specifications use judgment-dependent language ("appropriate," "reasonable," "consider") that agents interpret differently (or ignore entirely).

### Current State

**Substantially improved.** This was a PRIMARY target of the convergence reframe:

1. **BV-06 (Anti-Regression Language Scan):** ITEM-01. Scans the brief for forbidden phrases: "single-pass," "when possible," "optional," "consider," "appropriate," etc. This is the strongest D8 defense -- it REMOVES soft language before it reaches the builder.

2. **Language Surgery (ITEM-02):** The checklist specified direct text replacements in MANIFEST.md and orchestrator.md to replace soft language with binary alternatives. Example: "iterative-to-convergence is the DEFAULT" replaced all instances of "single-pass" with iteration framing.

3. **Binary Rule Design:** Gate thresholds are numeric (>= 15 RGB delta, >= 0.025em letter-spacing, <= 120px stacked gap). The recipe format uses concrete verbs (Read/Select/Deploy/Assess). Soul constraints (SC-01 through SC-10) are binary pass/fail with specific CSS evidence.

4. **Aux Audit D (Soft Language Scan):** Run during implementation. Counted remaining soft/judgment language instances across all files.

**Remaining gaps:**
- The PA protocol necessarily uses judgment language. PA questions ask about "feel," "impression," "coherence" -- these are INTENTIONALLY perceptual, not binary. The Weaver must synthesize judgment across 10 reports. This is not a bug; it's the design. But it means PA scores are inherently subject to D8.
- Orchestrator decision rules (GR-40-42 as "policy gates") use phrases like "no unauthorized 3-pass Compositional Critic" -- "unauthorized" is judgment language (who authorizes?).
- REFINE protocol: "enters COMPOSITIONAL mode" and "deepening relationships, not fixing defects" are dispositional instructions that resist binary encoding.

### File Locations

| File | Soft Language Risk | Defense |
|------|-------------------|---------|
| Builder-facing brief | HIGH risk, HIGH impact | BV-06 forbidden phrase scan |
| `artifact-builder-recipe.md` | Recipe verbs are concrete | BV-03 recipe:checklist ratio |
| `pa-questions.md`, `pa-weaver.md` | INTENTIONALLY perceptual | N/A (by design) |
| `artifact-orchestrator.md` Section 7 | REFINE language is dispositional | [Y/N] checklists for process steps |

### Residual Risk: **LOW**

BV-06 addresses the highest-impact soft language (builder-facing). The remaining soft language is either intentional (PA protocol) or low-frequency (orchestrator decision language). The pipeline now has 0 suppressor patterns in builder-facing content (BV-04 enforces this).

### What Would Fully Resolve It

Complete elimination is neither possible nor desirable -- perceptual audit REQUIRES judgment language. The appropriate ceiling is: zero soft language in SPECIFICATION files (gates, thresholds, constraints), permitted in DISPOSITION files (recipe, PA questions, weaver calibration).

### Structural Defense Adequacy: **ADEQUATE**

BV-06 is an excellent structural defense for the highest-risk surface (builder input). The pipeline correctly distinguishes between specification language (must be binary) and disposition language (may be judgment-based).

---

## D9: Environmental / Platform Variance

**Definition:** Pipeline behavior varies based on execution environment: browser DPR, viewport size, font availability, Playwright version, model availability.

### Current State

**Improved with targeted defenses.**

1. **GR-61 (DPR Check):** `checkDPR(page)` verifies device pixel ratio and logs it. If DPR != expected, the gate FAILS with instructions to normalize. REQUIRED tier, BLOCKING behavior (SKILL.md line 77: "If either gate FAILS, fix before deploying auditors").

2. **GR-62 (Screenshot Quality):** `checkScreenshotQuality(dir)` verifies screenshots meet minimum quality thresholds. Catches the scenario where DPR mismatch produces blurry screenshots that mislead PA auditors.

3. **3-Viewport Standard:** Screenshots at 1440px, 1024px, 768px (pa-deployment.md Section 2). Standardized set reduces viewport variance.

4. **GR-08 Exception Pattern:** Gate manifest includes a codified exception for DPR-dependent font size measurements (exception ID: "GR-08-dpr"). This acknowledges that computed font sizes vary with DPR and provides a tolerance.

5. **Model Mandate:** GR-23 (Builder Model = Opus) is REQUIRED with BLOCKING behavior. This eliminates the "Sonnet-for-builder" variance that was identified as an unexamined confound in research.

**Remaining gaps:**
- DPR correction is a PROSE INSTRUCTION in SKILL.md line 77 and gate-runner-preconditions.md. The gate DETECTS the problem but the FIX is manual (orchestrator must adjust browser settings or re-capture).
- Font availability: The pipeline assumes system fonts are available. No gate verifies that specified fonts are installed. `document.fonts.ready` is noted in memory as CRITICAL but has no corresponding gate.
- Playwright version: No version pinning. Gate behavior could change with Playwright updates.
- Local file serving: Playwright blocks `file://` protocol (noted in memory). The orchestrator must know to serve via HTTP. No documentation of this requirement in the pipeline artifacts.

### File Locations

| File | Variance Source | Defense |
|------|----------------|---------|
| `gate-runner-core.js` GR-61 | DPR mismatch | Detection + BLOCKING behavior |
| `gate-runner-core.js` GR-62 | Screenshot quality | Quality threshold check |
| `pa-deployment.md` Section 2 | Viewport variance | 3-viewport standard |
| `gate-manifest.json` exceptions | Font size DPR tolerance | Codified exception |
| `artifact-orchestrator.md` GR-23 | Model variance | REQUIRED BLOCKING gate |

### Residual Risk: **LOW-MEDIUM**

The highest-impact environmental variances (DPR, viewport, model) have programmatic defenses. The remaining variances (font availability, Playwright version, file serving) are lower-probability but have no structural defense.

### What Would Fully Resolve It

1. Add `document.fonts.ready` check as a gate (GR-65 or equivalent)
2. Pin Playwright version in a lockfile
3. Document HTTP serving requirement in SKILL.md
4. Make DPR correction automated (not manual)

### Structural Defense Adequacy: **PARTIALLY ADEQUATE**

Good coverage of the top 3 variances (DPR, viewport, model). Missing coverage of lower-probability but still impactful variances (fonts, Playwright version, file serving).

---

## D10: Orchestrator Opacity

**Definition:** The orchestrator is both player and referee -- makes pipeline decisions AND evaluates whether those decisions were correct. No external validation of orchestrator behavior.

### Current State

**Marginally improved but STRUCTURALLY UNRESOLVED.**

1. **GR-48 (Gate Coverage):** Verifies that all REQUIRED gates were actually run. This provides ONE check on orchestrator behavior. However, the orchestrator runs GR-48 themselves (via `runMetaGates`), so they're still self-auditing.

2. **Execution Tracker Self-Assessment:** 5 questions forcing orchestrator self-reflection. Includes "Were any gate results hand-constructed instead of from gate runner?" This creates a paper trail but relies on honest self-reporting.

3. **GR-49 (Gate Result Integrity):** Verifies `source:'code'` field. This catches hand-constructed results but the orchestrator could theoretically modify gate-runner-core.js to always return PASS.

4. **Phase 3 Screenshots:** The orchestrator takes screenshots BEFORE spawning PA auditors. The auditors see the screenshots (via Read tool), not the live page. This creates an OBSERVABLE checkpoint -- if the screenshots don't match the page, the auditors would flag discrepancies. However, this relies on the orchestrator faithfully capturing screenshots.

**Remaining gaps:**
- The orchestrator still decides: when to REFINE vs SHIP, which agents to spawn, what input each agent receives, and whether to apply fixes. No external agent validates these decisions.
- The REFINE isolation rules ("builder does NOT receive gate scores") are enforced by the orchestrator's discipline, not by a structural mechanism. Nothing prevents the orchestrator from passing gate data to the REFINE builder.
- Verdict override: The orchestrator could receive a REFINE verdict from the Weaver and decide to SHIP anyway. The execution tracker would record the override, but no mechanism prevents it.

### File Locations

| File | Opacity Surface | Defense |
|------|----------------|---------|
| `artifact-orchestrator.md` (entire file) | All orchestrator decisions | Self-assessment (5 questions) |
| `EXECUTION-TRACKER-TEMPLATE.md` | Decision recording | GR-80 auto-fill + manual fields |
| `gate-runner-core.js` GR-48/49 | Gate execution | Coverage + integrity check |
| `pa-deployment.md` | Auditor spawning | Gateway check (9 reports before Integrative) |

### Residual Risk: **HIGH**

This is one of the two dimensions with the WEAKEST structural defenses. The orchestrator remains judge, jury, and executioner. All current defenses are self-reporting mechanisms. The only truly EXTERNAL check is the PA audit (9 independent auditors who don't know what the orchestrator did or didn't do), but the orchestrator controls what the auditors see.

### What Would Fully Resolve It

1. **External auditor agent:** A separate Opus agent that receives the execution tracker + all gate results + all PA reports and verifies consistency. This agent would have READ-ONLY access and no ability to modify pipeline state.
2. **Immutable log:** Gate results written to a file that the orchestrator cannot modify after writing. (Practically difficult in current architecture.)
3. **Verdict lock:** After Weaver issues verdict, the orchestrator cannot override it without explicit documentation reviewed by external agent.

### Structural Defense Adequacy: **INADEQUATE**

The fundamental problem is architectural: the orchestrator is a single point of control. No amount of self-assessment or gate coverage can replace an external validation mechanism. This is the pipeline's deepest structural limitation.

---

## D11: Mode / Context Sensitivity

**Definition:** Pipeline behavior changes based on content type, mode selection (APPLIED vs COMPOSED), and whether iteration is occurring. Rules that work in one mode may not apply or may conflict in another.

### Current State

**Well addressed by design.**

1. **Content-Form Routing** (`artifact-routing.md`): Explicit protocol for APPLIED vs COMPOSED mode determination based on content heterogeneity and metaphor viability. Binary decision point with documented criteria.

2. **GR-33, GR-34 (Mode Detection):** Programmatic gates that detect which mode was selected and verify mode-appropriate behavior.

3. **REFINE vs REBUILD Protocol:** Clear, distinct protocols in orchestrator.md Section 7. REFINE uses artistic impression + conviction; REBUILD starts fresh. The protocols are STRUCTURALLY DIFFERENT (different inputs, different builder framing), not just parameter changes.

4. **Iteration-Aware Suffixing:** REFINE artifacts get `-refine` suffix (GR-79 verifies). This prevents mode confusion between initial and REFINE passes.

5. **PA-05 Cross-Validation:** 4 blind cross-validators (pa-deployment.md) provide mode-independent quality assessment. The PA audit doesn't change based on mode -- it evaluates perceptual quality regardless.

**Remaining gaps:**
- Experiment gates (GR-36-39) are mode-sensitive and currently deferred to a separate protocol document. If experiments are activated without proper mode tracking, results could be confounded.
- The 3-pass experimental architecture (Section 10, BLOCKED) introduces a third mode (GENERATIVE/COMPOSITIONAL/POLISHING) that doesn't map cleanly to APPLIED/COMPOSED. Mode confusion risk if activated.

### File Locations

| File | Mode Sensitivity | Defense |
|------|-----------------|---------|
| `artifact-routing.md` | APPLIED vs COMPOSED | Explicit routing protocol |
| `gate-runner-core.js` GR-33/34 | Mode detection | Programmatic verification |
| `artifact-orchestrator.md` Section 7 | REFINE vs REBUILD | Distinct protocols |
| `artifact-orchestrator.md` Section 10 | 3-pass (BLOCKED) | Status: BLOCKED until validation |

### Residual Risk: **LOW**

The pipeline has clear mode boundaries with structural enforcement. The BLOCKED experimental tier prevents premature mode proliferation. GR-33/34 provide programmatic mode verification.

### What Would Fully Resolve It

A mode-context matrix that maps every pipeline rule to its applicable modes and flags rules that don't apply in the current mode. This would be a planning tool for the orchestrator, not a runtime gate.

### Structural Defense Adequacy: **ADEQUATE**

Clear routing, programmatic mode detection, structurally distinct protocols for different modes.

---

## D12: Downstream Propagation Failure

**Definition:** A defect in an early pipeline phase propagates through all subsequent phases undetected. Example: Brief Assembler omits zone backgrounds -> Builder has no background guidance -> Page has monochrome backgrounds -> PA audit detects the symptom but not the root cause.

### Current State

**Substantially improved via multi-layer verification.**

1. **BV-01 through BV-07 (Brief Verification):** 7 gates that verify the brief BEFORE it reaches the builder. BV-02 (Background Delta) specifically catches the example scenario above -- it computes hex pair deltas and fails if < 15 RGB. This intercepts the defect at the BRIEF level, not at the HTML level.

2. **GR-23-28 (Orchestrator Preconditions):** Verify pipeline configuration before builder starts. GR-23 (Opus builder) prevents the model-quality propagation chain. GR-25 (Suppressor Count) prevents suppressor language from reaching the builder.

3. **Phase 3A Gate Runner:** 30+ gates on the HTML output catch defects that propagated through the brief. GR-01-10 (Identity), GR-11-16 (Perception), GR-17-22 (Anti-Pattern) form overlapping detection layers.

4. **PA Audit as Final Catch:** The 9-auditor Mode 4 audit catches PERCEPTUAL defects that propagated through all gates. PA-05 specifically asks whether the page feels DESIGNED -- which integrates all upstream propagation effects.

5. **REFINE Iteration:** If a defect propagates to the final page and is caught by PA, the REFINE protocol provides a recovery path. The artistic impression tells the REFINE builder WHAT the defect looks like perceptually, without revealing the upstream cause.

**Remaining gaps:**
- No "root cause tracing" mechanism. When a PA auditor flags a defect (e.g., "sections feel monotonous"), the Weaver classifies it as MECHANICAL/STRUCTURAL/COMPOSITIONAL. But there's no automated trace back to which pipeline phase introduced the defect.
- Content Map -> Brief propagation: No gate verifies that key content features (tension, metaphor, zone structure) survive from Phase 0 to Phase 1. BV-01 checks LINE COUNT but not CONTENT FIDELITY.

### File Locations

| File | Propagation Chain | Defense |
|------|------------------|---------|
| Phase 0 -> Phase 1 | Content -> Brief | BV-01 line budget (not content fidelity) |
| Phase 1 -> Phase 2 | Brief -> HTML | BV-02/03/04 format + content checks |
| Phase 2 -> Phase 3 | HTML -> Gates | 30+ programmatic gates |
| Phase 3 -> Verdict | Gates + PA -> Decision | PA-05 + GR-48 + Weaver |

### Residual Risk: **LOW-MEDIUM**

The multi-layer verification (BV + gates + PA) catches MOST propagation failures. The remaining gap is between Phases 0 and 1 (content map -> brief), where BV-01 checks format but not semantic fidelity.

### What Would Fully Resolve It

A BV-05 "Compression Fidelity" gate that extracts key entities (tension, metaphor, zone count, reader model) from the content map and verifies they appear in the brief. This closes the Phase 0 -> Phase 1 propagation gap.

### Structural Defense Adequacy: **ADEQUATE**

Multi-layer verification provides good coverage. The Phase 0 -> Phase 1 gap is the only significant remaining propagation path, and it's partially covered by the Brief Assembler's use of the TC Brief Template (which requires specific sections).

---

## D13: Feedback Loop Absence

**Definition:** The pipeline has no mechanism to learn from its own failures. Each run starts from zero. Defect patterns repeat across runs because there's no systematic way to incorporate lessons.

### Current State

**Partially addressed via convergence reframe mechanisms.**

1. **Execution Tracker Archival:** Post-pipeline archival to `design-system/pipeline/archived-runs/{SLUG}-{DATE}/` (orchestrator.md Section 8). This preserves run artifacts for future reference. However, no mechanism READS archived runs to inform current runs.

2. **Iteration Log:** The execution tracker includes a 3-row iteration log (PA-05, Tier5, Gate Pass %, Fix Count, Verdict, Decision). This provides within-run learning. GR-80 auto-fills this.

3. **RESIDUAL Artifact (GR-78):** Builder's `<!-- RESIDUAL: ... -->` comment documents trade-offs and next steps. If the build goes to REFINE, the REFINE builder sees this RESIDUAL. This is within-run feedback.

4. **Historical Data Points (Orchestrator Section 9):** Rerouted VALUES items provide calibration context (Gas Town PA-05 3.5, Middle PA-05 2.5, Flagship PA-05 1.5). These are STATIC historical reference points, not dynamic learning.

5. **Suppressor Inflection Curve (Section 12):** Documents HYPOTHESIZED improvement curves from suppressor removal. Labeled "THEORETICAL per council."

**Remaining gaps:**
- **No cross-run learning mechanism.** Each pipeline execution reads the same artifact files regardless of what happened in previous runs. If PA auditors consistently flag "monotonous transitions" across 5 runs, nothing in the pipeline would detect or respond to this pattern.
- **No defect pattern database.** Common PA findings should accumulate into a "known defect patterns" reference. Currently, each Weaver starts fresh.
- **The 4-Stage Experiment Protocol (Section 11) is unexecuted.** It WOULD provide systematic cross-run comparison, but it hasn't been run yet.
- **Buddy review findings from this build** are not automatically incorporated into future pipeline runs. The adversarial review found 4 BLOCKING issues, but these must be manually fixed in artifact files.

### File Locations

| File | Feedback Mechanism | Status |
|------|-------------------|--------|
| `artifact-orchestrator.md` Section 8 | Run archival | EXISTS but not consumed |
| `EXECUTION-TRACKER-TEMPLATE.md` | Iteration log | Within-run only |
| `artifact-orchestrator.md` Section 9 | Historical calibration | STATIC (not learning) |
| `artifact-orchestrator.md` Section 11 | Experiment protocol | UNEXECUTED |
| `artifact-builder-recipe.md` GR-78 | RESIDUAL artifact | Within-run only |

### Residual Risk: **MEDIUM-HIGH**

The pipeline can iterate WITHIN a run (REFINE protocol) but cannot learn ACROSS runs. Every run starts from the same artifact files. If the pipeline consistently underperforms on a specific content type, there's no mechanism to detect or adapt.

### What Would Fully Resolve It

1. A `run-history.json` file that accumulates PA-05 scores, common PA findings, gate failure rates, and content-type performance across runs.
2. A Phase 0 step that reads run-history.json and generates content-type-specific warnings for the current run.
3. Post-run update protocol: after each run, extract the top 3 findings and check if they match known patterns. If a finding appears in 3+ runs, promote it to a gate or recipe modification.

### Structural Defense Adequacy: **INADEQUATE**

The pipeline has NO cross-run learning mechanism. This is a design gap, not a bug -- the pipeline was designed for single-run execution. But as runs accumulate, the absence of feedback loops means the same defect patterns will repeat.

---

## D14: Complexity-Induced Invisibility

**Definition:** As the pipeline grows, specific rules and defenses become invisible -- not because they're wrong, but because no one reads them. File count, line count, and cross-reference density exceed human (and LLM) working memory.

### Current State

**WORSENED relative to aux-gate0 pre-check (was UNCHANGED, now SLIGHTLY WORSE).**

1. **File Count:** The pipeline now has 20+ artifact files (14 listed in SKILL.md + redirect files + auxiliary files + execution tracker template + experiment protocol + council verdict). This is UP from the pre-v3 baseline.

2. **Line Count:** artifact-orchestrator.md alone is 1,099+ lines. MANIFEST.md is 700+ lines. gate-runner-core.js is 2,270+ lines. Total pipeline spec: roughly 8,000+ lines across all files.

3. **Role-Based Routing (MANIFEST.md):** The routing table maps each artifact section to the agent that needs it. This is the PRIMARY defense against invisibility -- agents only read what's routed to them.

4. **"STOP HERE FOR EXECUTION" Marker:** Orchestrator.md line 785. Sections 10-14 contain historical/experimental content that the orchestrator should NOT read during execution. This quarantines ~300 lines of low-priority content.

5. **Gate Tier System:** 54 gates, but only 28 mandatory (21 REQUIRED + 7 BV). The remaining 26 are advisory/informational. This reduces the orchestrator's mandatory engagement.

6. **Aux Gate 3 (Attention Budget):** Run during implementation. Assessed per-file and per-role attention costs. Found the pipeline is at the EDGE of manageable complexity.

**Remaining gaps:**
- The convergence reframe added +20 spec lines and +160 code lines. While individually justified, each addition makes the total pipeline harder to hold in working memory.
- No file-count ceiling. The current 20+ files could grow to 30+ in the next iteration.
- No periodic complexity audit. The aux-gate3 attention budget check was one-time.
- The MANIFEST.md routing table is itself a complex artifact (~100+ lines of routing rules). An error in the routing table could cause an agent to miss a critical artifact section.

### File Locations

| Complexity Metric | Current | Threshold | Status |
|------------------|---------|-----------|--------|
| Total artifact files | 20+ | None defined | AT RISK |
| Max single file length | 2,270 lines (gate-runner-core.js) | None defined | HIGH |
| Total spec lines | ~8,000+ | None defined | UNKNOWN |
| Total gates | 54 | None defined | MANAGEABLE (tier system) |
| Orchestrator mandatory reading | ~1,500 lines | None defined | HIGH |

### Residual Risk: **MEDIUM-HIGH**

The pipeline is at the edge of manageable complexity. The routing table and tier system provide structural defenses, but there are no hard ceilings on growth. The convergence reframe demonstrated the difficulty of net-zero changes (target was zero, achieved +20).

### What Would Fully Resolve It

1. Hard complexity ceilings: max 60 gates, max 25 files, max 1,500 lines per file, max 10,000 total spec lines.
2. Sunset protocol: remove or downgrade rules/gates that haven't triggered in N runs.
3. Periodic complexity audit at pipeline start: report file count, total lines, max file length, routing table health.
4. "Complexity debt" tracking: every new addition requires justification AND a removal target.

### Structural Defense Adequacy: **PARTIALLY ADEQUATE**

The routing table and tier system are good existing defenses. The absence of hard ceilings and sunset protocols means complexity can only grow. This is a SLOW-BURNING risk that won't cause immediate failure but will degrade pipeline reliability over time.

---

## Summary Table

| Dimension | Risk (Pre-Reframe) | Risk (Post-Reframe) | Delta | Defense Type |
|-----------|--------------------|--------------------|-------|-------------|
| D1: Template Slot Absence | MEDIUM | **LOW** | -1 | Structural (GR-80, visible blanks) |
| D2: Compression Loss | HIGH | **MEDIUM** | -1 | Structural (BV-01-04, dual-channel) |
| D3: Voluntary Non-Execution | HIGH | **LOW-MEDIUM** | -1.5 | Structural (BV-06, GR-63/78/79) |
| D4: Execution-Recording Divergence | MEDIUM | **MEDIUM** | 0 | Partial (source:'code', GR-48/49) |
| D5: Position Effect / Attention Decay | HIGH (UNCHANGED) | **MEDIUM** | -1 | Partial (size caps, recipe format) |
| D6: Cross-File Reference Rot | HIGH | **HIGH** | 0 | **INADEQUATE** (one-time scan only) |
| D7: Defense Paradox / Complexity Tax | MEDIUM | **MEDIUM** | 0 | Partial (tier system, routing) |
| D8: Spec Ambiguity / Soft Language | HIGH | **LOW** | -2 | Structural (BV-06, binary rules) |
| D9: Environmental / Platform Variance | MEDIUM | **LOW-MEDIUM** | -0.5 | Structural (GR-61/62, model mandate) |
| D10: Orchestrator Opacity | HIGH | **HIGH** | 0 | **INADEQUATE** (self-reporting only) |
| D11: Mode / Context Sensitivity | MEDIUM | **LOW** | -1 | Structural (routing, GR-33/34) |
| D12: Downstream Propagation Failure | HIGH | **LOW-MEDIUM** | -1.5 | Structural (multi-layer BV + gates + PA) |
| D13: Feedback Loop Absence | HIGH | **MEDIUM-HIGH** | -0.5 | **INADEQUATE** (no cross-run learning) |
| D14: Complexity-Induced Invisibility | MEDIUM (UNCHANGED) | **MEDIUM-HIGH** | +0.5 | Partial (routing, tiers, but growing) |

---

## Overall Assessment

### Dimensions Adequately Addressed (risk LOW or better): 5/14 (36%)

- **D1** (Template Slot Absence) -- LOW
- **D3** (Voluntary Non-Execution) -- LOW-MEDIUM
- **D8** (Spec Ambiguity) -- LOW
- **D9** (Environmental Variance) -- LOW-MEDIUM
- **D11** (Mode/Context Sensitivity) -- LOW

### Dimensions Partially Addressed (risk MEDIUM): 5/14 (36%)

- **D2** (Compression Loss) -- MEDIUM
- **D4** (Execution-Recording Divergence) -- MEDIUM
- **D5** (Position Effect) -- MEDIUM
- **D7** (Defense Paradox) -- MEDIUM
- **D12** (Downstream Propagation) -- LOW-MEDIUM

### Dimensions Inadequately Addressed (risk HIGH or MEDIUM-HIGH): 4/14 (29%)

- **D6** (Cross-File Reference Rot) -- **HIGH** -- No persistent automated defense
- **D10** (Orchestrator Opacity) -- **HIGH** -- Architecturally unresolvable with current single-orchestrator design
- **D13** (Feedback Loop Absence) -- **MEDIUM-HIGH** -- No cross-run learning
- **D14** (Complexity-Induced Invisibility) -- **MEDIUM-HIGH** -- No hard ceilings, complexity growing

### Key Findings

1. **Strongest improvements:** D8 (Spec Ambiguity, -2 risk levels) and D3/D12 (Non-Execution / Propagation, -1.5 each). BV-06 anti-regression language scan is the single most impactful convergence-reframe addition.

2. **Structural walls:** D10 (Orchestrator Opacity) is architecturally unresolvable without an external validation agent. D6 (Reference Rot) requires a persistent automated cross-reference check that doesn't exist.

3. **Growing risks:** D14 (Complexity-Induced Invisibility) is the only dimension that WORSENED. Each improvement to D1-D13 adds spec lines, gates, or files that make D14 worse. This is the Defense Paradox (D7) in action.

4. **BLOCKING fixes from adversarial review:** B-1 through B-4 are UNVERIFIED as applied. If unfixed, they directly impact D4 (GR-48 coverage holes) and D6 (reference rot between manifest and code).

5. **The 80/20 pattern holds:** The pipeline is very good at the 80% case (builder-facing spec quality, gate coverage, multi-layer verification) but struggles with the 20% (orchestrator accountability, cross-run learning, complexity management, reference integrity).

### Bottom Line

**10 of 14 dimensions (71%) are adequately or partially addressed.** 4 of 14 (29%) remain inadequately addressed. The pipeline is in solid shape for a SMOKE TEST run. The four remaining gaps (D6, D10, D13, D14) are real but their impact is PROBABILISTIC -- they don't guarantee failure, they increase the probability of specific failure modes. The highest-leverage next actions are:

1. **Fix B-1 through B-4** from the adversarial review (immediate, closes D4 and D6 gaps)
2. **Add persistent reference integrity check** (closes D6 -- highest remaining structural gap)
3. **RUN THE PIPELINE** -- many remaining risks are theoretical and need empirical data to validate

---

*Assessment complete. 14/14 dimensions evaluated. Files read: SKILL.md, MANIFEST.md, artifact-orchestrator.md, artifact-builder-recipe.md, artifact-routing.md, artifact-identity-perception.md, gate-runner-core.js, gate-manifest.json, gate-runner-spec.md, gate-runner-preconditions.md, EXECUTION-TRACKER-TEMPLATE.md, pa-weaver.md, pa-deployment.md, pa-questions.md, pa-guardrails.md, pa-guardrails-weaver.md, 01-crack-taxonomy.md, aux-gate0-crack-precheck.md, buddy-adversarial-v3-review.md, MASTER-CHECKLIST-v3.md, aux-audits-ABCD.md.*

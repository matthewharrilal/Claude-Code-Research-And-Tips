# DIMENSION RESEARCH: Reproducibility

**Researcher:** dim-researcher-reproducibility
**Date:** 2026-02-13
**Task:** Define "reproducibility" dimension of file usefulness

---

## EXECUTIVE SUMMARY

**REPRODUCIBILITY = The degree to which a file enables re-derivation of quality outcomes without the original creator's tacit knowledge.**

The DD→OD→AD→CD journey from DD-001 (33/40) to CD-006 (39/40) demonstrates a **QUALITY ESCALATION PATTERN**. The question is: which files are necessary to UNDERSTAND and REPRODUCE that escalation?

**Key Discovery:** Reproducibility requires BOTH process artifacts (research packages, findings) AND outcome artifacts (HTML explorations) — deletion of either layer breaks reproducibility in different ways.

**Two-Tier Model:**
- **Process reproducibility**: Can someone re-derive the findings/insights? (Needs research packages)
- **Outcome reproducibility**: Can someone build to the same quality standard? (Needs validated HTML explorations)

**Core Tension:** The CD explorations cite DD/OD as dependencies — but POST-CD-PIPELINE describes FUTURE work. The explorations are REFERENCE IMPLEMENTATIONS proving the theory, not superseded drafts.

---

## 1. CONTEXT FROM FILES READ

### 1.1 DD/OD Zone Analysis (zone-dd-od.md)

**Quality Baseline:**
- DD average: 34.5/40 (DD-006: 36/40, most-referenced artifact)
- OD average: 35.5/40 (OD-006: 37/40, crown jewel)
- 100% soul compliance (0 violations across 3,479+ elements)
- All 12 explorations marked INCLUDE

**Strategic Role:**
- DD-006-fractal.html produced DD-F-006: fractal meta-pattern (20+ inbound refs)
- OD-006-creative.html discovered OD-F-005: Organization IS Density (shaped AD-F-023)
- DD+OD patterns form Tier 2.5 component catalog (~145 lines CSS + 440 prose)
- Migration requires DD+OD for BOTH Track 1 (assembly) and Track 2 (composition)

**Provenance Chain:**
```
R1-R5 Research (337 findings)
  ↓
Stage 2 (DD): 18 DD-F findings → 6 HTML explorations
  ↓
Stage 3 (OD): 17 OD-F findings → 6 HTML explorations → 89 audit findings → 94 EXT-* enrichments
  ↓
Stage 4 (AD): 28 AD-F findings (must honor DD-F-006 fractal at 5 scales)
  ↓
Stage 5 (CD): 25 CD-F findings (requires DD+OD patterns as vocabulary)
```

**Key Quote (line 142-146):**
> "Tier 2.5: REUSABLE PATTERNS (~145 lines CSS + 440 guidance)
> Layout systems that work in many contexts
> CSS extractable, WHEN to use it is compositional"

**Deletion Impact (589 references):**
- 212 DD references + 377 OD references
- 4 pipeline stages break (OD→AD→CD→Migration)
- Tier 2.5 extraction impossible (no source patterns)

### 1.2 CD Zone Analysis (zone-cd.md)

**Quality Achievement:**
- CD average: 37.3/40 (93.3%)
- CD-006: 39/40 (crown jewel, TARGET MET)
- Soul: 59/60 (98.3%)
- Convention: 43/43 (100%)

**Audit Provenance:**
- Phase 2: 9-agent team, ~15 min, 12 reports
- Phase 3: Refinement iteration
- Phase 4: Per-CD deep inspection (343 screenshots, 56-63 per file)
- Total: 396 files, ~19MB audit archive

**CD Purpose (line 63):**
> "CD's purpose evolved. AD's discovery of the 3-way equivalence transformed CD from 'component chemistry' into a stress test of whether the unified theory holds under combination pressure."

**Relationship to DD/OD (line 409):**
```
DD = Visual breathing alphabet (6 density patterns)
OD = Content type vocabulary (6 organizational patterns)
AD = 3-way equivalence proof
CD = Grammar stress test (combining DD+OD+AD patterns under multi-component load)
```

**Status:** CD is the MOST RECENT phase (commits 95b3cdb + 42fd987). NOT superseded.

### 1.3 Adversary Challenge (adversary-dd-od.md)

**Supersession Test Results (lines 31-109):**
- CD does NOT replace DD/OD — it VALIDATES them through combination
- 73 CD files reference DD/OD as dependencies (grep verified)
- POST-CD-PIPELINE describes DD+OD as "Tier 2.5 pattern catalog" (NOT superseded)
- Two-track migration requires DD+OD patterns for BOTH tracks

**Migration Failure Test (lines 191-201):**
- Track 1: "Deterministic pattern selection + mechanical component assembly" → needs DD+OD library
- Track 2: "Tension-driven metaphor selection + compositional layout generation" → needs DD+OD primitives
- Tier 2.5 extraction IS DD+OD patterns → no source = no extraction

**Proof vs Finding Distinction (lines 256-260):**
> "DD-006.html is the PROOF. DD-F-006 is the FINDING extracted from the proof.
> Provenance docs cite DD-006.html as evidence
> Deletion breaks citation chain
> Finding without proof = ungrounded claim"

**Verdict:** KEEP ALL 15 DD/OD files — foundational, load-bearing, not superseded.

### 1.4 Exploration Structure (Glob + HTML Headers)

**DD-006-fractal.html Header (lines 1-116):**
- Inline threading header: WHY THIS EXISTS, QUESTION IT ANSWERS, BUILT ON, MUST HONOR, CONSUMED BY
- Line 12-14: "single most-referenced artifact in entire showcase (20+ inbound references)"
- Line 49-55: DD-F-006 is MANDATORY for all OD, AD, CD explorations
- Line 90-96: ALL 6 OD explorations cite DD-F-006 fractal constraint in headers
- Lines 98-107: RESEARCH DEBT section documents what's missing (no per-scale scoring, no automated enforcement)

**CD-006-pilot-migration.html Header (lines 1-52):**
- "Pilot Migration crown jewel — the definitive CD exploration"
- Uses REAL content: "Building Your First KortAI Documentation Page"
- ALL 11 components, ALL 5 axis patterns, ALL transition grammar types, fractal density at 5 scales
- Built on: CD-006-CONTENT-SELECTION.md, research-package-cd-006.md, all AD explorations, R5, ACCUMULATED-IDENTITY-v2.md

**Pattern:** Every exploration has:
1. Threading header (provenance context)
2. Research grounding (BUILT ON section)
3. Constraint documentation (MUST HONOR section)
4. Downstream citation tracking (CONSUMED BY section)
5. Research debt acknowledgment (what's incomplete)

### 1.5 POST-CD-PIPELINE Context (README.md)

**Two-Track Architecture (line 199):**
```
Track 1 (assembly): ~40-50% of pages
  - Mechanical combination of stable components
  - 45-90 minutes per page
  - Highly parallelizable

Track 2 (composition): ~50-60% of pages
  - Creative tension resolution through metaphor-driven composition
  - Tension-composition skill invocation
  - 3-5 hours per page
  - Sequential bottleneck
```

**Component Taxonomy (from 08-COMPOSITIONAL-STRATEGY-LIBRARY.md ref):**
```
Tier 1: Atoms (design tokens) — 80 lines
Tier 2: Molecules (components) — 175 lines
Tier 2.5: Patterns (DD+OD) — 145 lines CSS + 440 lines guidance
Tier 3: Organisms (CD combinations) — 0 lines CSS, prose recipes only
```

**Key Insight (line 50):**
> "These documents were produced by a 7-agent research and writing team synthesizing insights from two prior research campaigns (9 CD research files totaling ~3,500 lines, and 10 migration research files totaling ~5,800 lines)"

**Absorption Status:**
- POST-CD-PIPELINE absorbed `_cd-research/` (9 files, ~3,500 lines) — RESEARCH FILES
- POST-CD-PIPELINE does NOT absorb CD-001 through CD-006 — REFERENCE IMPLEMENTATIONS
- POST-CD-PIPELINE does NOT absorb audit results — QUALITY VERIFICATION RECORDS

---

## 2. REPRODUCIBILITY DEFINITION

### 2.1 What Is Reproducibility?

**Definition:**
The degree to which a file enables someone WITHOUT the original creator's tacit knowledge to:
1. **Understand WHY** a decision was made (process transparency)
2. **Re-derive the INSIGHT** that led to the decision (intellectual reproducibility)
3. **Build to the SAME QUALITY STANDARD** (outcome reproducibility)

**Reproducibility ≠ Exact Replication:**
- Goal is NOT to produce byte-for-byte identical output
- Goal IS to produce QUALITY-EQUIVALENT output using the same principles
- Example: DD-006 (36/40) is reproducible if someone can build a different fractal exploration that also scores 36/40 using DD-F-006 principles

### 2.2 Two-Tier Reproducibility Model

**Tier 1: Process Reproducibility**
Can someone re-derive the findings/insights from the research?

*Requires:*
- Research packages (R1-R5 findings, research-package-cd-NNN.md)
- Research synthesis docs (RESEARCH-SYNTHESIS.md, ACCUMULATED-IDENTITY-v2.md)
- Finding registries (DD-outbound-findings.md, OD-F-XXX, AD-F-XXX, CD-F-XXX)
- Provenance handoffs (HANDOFF-DD-TO-OD.md, HANDOFF-AD-TO-CD.md)

*Evidence:* DD-006 header line 42-43 cites R3-036 as source finding.

*Failure mode:* Delete research packages → cannot trace WHY DD-006 fractal pattern was chosen, only THAT it was chosen.

**Tier 2: Outcome Reproducibility**
Can someone build to the same quality standard using the findings?

*Requires:*
- Validated HTML explorations (DD-001-006, OD-001-006, AD-001-006, CD-001-006)
- Audit results (OD-GRANULAR-AUDIT-RESULTS.md, CD-AUDIT-SYNTHESIS.md)
- Screenshots (visual evidence of rendering quality)
- Soul compliance verification (programmatic + visual checks)

*Evidence:* Adversary report line 256-260 — "DD-006.html is the PROOF. DD-F-006 is the FINDING. Finding without proof = ungrounded claim."

*Failure mode:* Delete HTML explorations → cannot see WHAT 36/40 quality looks like, only read ABOUT it in prose.

### 2.3 Reproducibility vs Supersession

**Critical Distinction:**

| Scenario | Process Reproducible? | Outcome Reproducible? | Deletion Safe? |
|----------|----------------------|----------------------|----------------|
| Research absorbed into synthesis | NO (findings disconnected from source) | N/A | DEPENDS |
| Findings extracted to registry | YES (finding ID traces to source) | NO (no quality proof) | NO |
| HTML explorations superseded by CD | MAYBE | NO (CD tests COMBINATIONS not individual patterns) | NO |
| Audit results absorbed into provenance | NO (provenance summarizes, not preserves evidence) | NO (screenshots deleted) | NO |

**Example from CD zone:**
- POST-CD-PIPELINE absorbed `_cd-research/` (9 files, ~3,500 lines of PROCESS)
- POST-CD-PIPELINE did NOT absorb CD-001-006.html (OUTCOMES)
- POST-CD-PIPELINE did NOT absorb audit screenshots (QUALITY EVIDENCE)

**Why?** CD explorations are REFERENCE IMPLEMENTATIONS proving the theory works. They demonstrate 39/40 quality. Deleting them removes the proof that the theory produces that quality.

---

## 3. REPRODUCIBILITY REQUIREMENTS FOR DD→CD JOURNEY

### 3.1 Minimum Viable Set for Process Reproducibility

**To re-derive the quality journey from DD-001 to CD-006, you need:**

1. **Research Source (337 findings):**
   - R1-DOCUMENTATION-PATTERNS.md (28 findings)
   - R2-CREATIVE-LAYOUTS.md (27 findings)
   - R3-DENSITY-DIMENSIONS.md (51 findings)
   - R4-AXIS-INNOVATIONS.md (192 findings)
   - R5-COMBINATION-THEORY.md (39 findings)

2. **Finding Registries:**
   - DD-outbound-findings.md (18 DD-F findings)
   - OD-SYNTHESIS.md (17 OD-F findings)
   - AD-outbound-findings.md (28 AD-F findings)
   - CD findings registry (pending, ~25 CD-F expected)

3. **Provenance Handoffs:**
   - HANDOFF-DD-TO-OD.md (DD terminal outputs, OD entry constraints)
   - HANDOFF-OD-TO-AD.md (if exists)
   - HANDOFF-AD-TO-CD.md (AD terminal outputs, CD entry constraints)

4. **Synthesis Documents:**
   - ACCUMULATED-IDENTITY-v2.md (inherited context by CD)
   - RESEARCH-SYNTHESIS.md (cross-research insights)
   - PIPELINE-MANIFEST.md (master registry)

**Why sufficient?** These files trace the INTELLECTUAL PATH from R3-036 (fractal self-similarity) → DD-F-006 (4-scale fractal) → OD-F-005 (Organization IS Density) → AD-F-023 (3-way equivalence = ATTENTION TOPOLOGY) → CD stress testing.

**What's missing?** HOW to actually BUILD to 36/40 or 39/40 quality. You can re-derive the insights, but not the execution.

### 3.2 Minimum Viable Set for Outcome Reproducibility

**To build to the same quality standard as CD-006 (39/40), you need:**

1. **Validated Explorations (12 HTML files):**
   - DD-001-006.html (density pattern exemplars, 32-36/40 range)
   - OD-001-006.html (organizational pattern exemplars, 34-37/40 range)
   - CD-001-006.html (combination grammar exemplars, 33-39/40 range, CD-006 crown jewel)

2. **Audit Results:**
   - OD-GRANULAR-AUDIT-RESULTS.md (89 findings, 0 soul violations across 3,479 elements)
   - CD-AUDIT-SYNTHESIS.md (Phase 2 audit, 37.3/40 average, soul/convention/combination compliance)
   - Phase 4 standalone audit reports (per-CD deep inspection, systemic findings)

3. **Visual Evidence:**
   - Screenshots (343 for CD, proving 39/40 claim and documenting responsive/scroll states)
   - Soul compliance verification (border-radius: 0, box-shadow: none programmatic checks)

4. **Component/Pattern Catalog:**
   - DESIGN-TOKEN-SUMMARY.md (locked values)
   - 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (Tier 2.5 DD+OD patterns, Tier 3 CD recipes)
   - density-patterns.md, organizational-patterns.md (pattern definitions with scores)

**Why sufficient?** These files provide CONCRETE EXAMPLES of what 36/40 and 39/40 quality looks like. A builder can:
- Inspect DD-006.html source to see HOW fractal rhythm is implemented in CSS
- Read OD-006.html to see HOW Organization IS Density manifests visually
- Study CD-006.html to see HOW 11 components + 5 axis patterns + 7 transitions combine into 39/40 quality
- Compare their work to audit screenshots to verify they're hitting the same quality bar

**What's missing?** The REASONING behind why fractal rhythm produces 36/40 instead of 30/40. That's in the process layer.

### 3.3 Full Reproducibility = Process + Outcome

**The minimum viable set to FULLY reproduce the quality journey:**

**Process Layer (WHY):**
- R1-R5 research (337 findings) — source insights
- Finding registries (DD-F, OD-F, AD-F, CD-F) — extracted insights
- Provenance handoffs (HANDOFF-DD-TO-OD, HANDOFF-AD-TO-CD) — stage transitions
- Synthesis docs (ACCUMULATED-IDENTITY-v2, RESEARCH-SYNTHESIS) — accumulated context

**Outcome Layer (WHAT):**
- DD-001-006.html (6 density exemplars)
- OD-001-006.html (6 organizational exemplars)
- CD-001-006.html (6 combination exemplars)
- Audit results (OD-GRANULAR-AUDIT-RESULTS, CD-AUDIT-SYNTHESIS, Phase 4)
- Screenshots (343 CD, visual proof of quality claims)
- Component catalog (08-COMPOSITIONAL-STRATEGY-LIBRARY, density-patterns.md, organizational-patterns.md)

**Total Files:** ~35-40 core files (R1-R5, findings, handoffs, synthesis, 18 HTML explorations, audit results, screenshots, catalogs)

**Redundancy Check:**
- Can you delete R1-R5 if findings are in registries? **NO** — registries cite research, don't reproduce full context
- Can you delete HTML explorations if patterns are in catalog? **NO** — catalog describes patterns, doesn't demonstrate 36/40 execution
- Can you delete audit results if explorations are marked INCLUDE? **NO** — INCLUDE is a verdict, not proof of 0 soul violations
- Can you delete screenshots if HTML files exist? **NO** — HTML renders differently across browsers/viewports, screenshots prove actual rendering quality

---

## 4. RESEARCH PACKAGES: GROUNDING NOT ABSORBED

### 4.1 What Are Research Packages?

**Example:** `research-package-cd-006.md` (18KB)

**Purpose (from CD zone analysis):**
> "Each research package documents the research context (R5 findings) applied to that specific exploration. These are GROUNDING documents, not absorbed artifacts."

**Content:**
- Which R5 findings (of 39 total) apply to this exploration
- HOW each finding maps to specific implementation decisions
- WHAT constraints this exploration inherits from prior stages

**Why not absorbed?** Research packages are BUILD CONTEXT consumed BEFORE building. They're read to decide WHAT to build, not synthesized AFTER building to describe what was built.

### 4.2 Grounding vs Absorbed

**Grounding Documents (NOT absorbed):**
- research-package-cd-001.md through cd-006.md (6 files, ~89KB)
- R1-R5 research files (5 files, source of 337 findings)
- DESIGN-TOKEN-SUMMARY.md (locked values reference)

**Absorbed Documents (synthesis of grounding):**
- `_cd-research/` (9 files, ~3,500 lines) absorbed into POST-CD-PIPELINE
- `_migration-research/` (10 files, ~5,800 lines) absorbed into POST-CD-PIPELINE
- CD-AUDIT-SYNTHESIS.md absorbs individual auditor reports (but NOT the explorations themselves)

**Key Distinction:**
- Grounding = pre-build input (what to apply)
- Absorbed = post-research synthesis (what was learned)

**Deletion Test:**
- Delete research-package-cd-006.md → can still READ CD-006.html, but cannot trace WHY it uses those specific R5 findings
- Delete `_cd-research/` → POST-CD-PIPELINE still exists (findings absorbed into strategic plans)

**Reproducibility Impact:**
- Grounding deletion breaks PROCESS reproducibility (can't re-derive decisions)
- Absorbed deletion breaks SYNTHESIS accessibility (must re-read all source material)

### 4.3 Research Debt in Exploration Headers

**DD-006 Research Debt (lines 98-107):**
```
- No per-scale scoring breakdown exists
- Fractal constraint enforcement is prose-only (no automated tool)
- DD-005 lesson integration documented in CSS comment but not verified
- R3-036 to DD-F-006 relationship could be more explicitly mapped
- No failure mode documentation
```

**Why this matters for reproducibility:**

If DD-006 had per-scale scoring (page: 9/10, section: 9/10, component: 9/10, character: 9/10), a builder could:
1. Check their work scale-by-scale
2. Identify which scale is dragging down overall score
3. Reproduce 36/40 quality more reliably

**Current state:** Builder must intuit from full-page visual inspection what "36/40 fractal rhythm" looks like. This is TACIT KNOWLEDGE not captured in files.

**Reproducibility gap:** Research debt documents what's MISSING from reproducibility. Deleting research debt sections removes awareness of the gap.

---

## 5. DIFFERENCE: NEEDED TO REPRODUCE VS NICE TO HAVE

### 5.1 Reproducibility-Critical Files

**Cannot reproduce quality journey without:**

| File Type | Example | Why Critical | Deletion Impact |
|-----------|---------|--------------|-----------------|
| Research source | R3-DENSITY-DIMENSIONS.md | Origin of DD-F-006 fractal insight | Cannot trace WHY fractal pattern exists |
| Finding registry | DD-outbound-findings.md | DD-F-006 formal definition | Cannot know WHAT the fractal constraint is |
| Provenance handoff | HANDOFF-DD-TO-OD.md | DD-F-006 marked MANDATORY for OD | Cannot know fractal constraint PROPAGATES to OD |
| Validated exploration | DD-006-fractal.html | PROOF that fractal produces 36/40 quality | Cannot see WHAT 36/40 fractal looks like |
| Audit result | OD-GRANULAR-AUDIT-RESULTS.md | 0 soul violations across 3,479 elements | Cannot verify 100% soul compliance claim |
| Screenshot evidence | CD-006 screenshots (63 files) | Proof of 39/40 rendering across viewports | Cannot verify responsive quality claim |
| Component catalog | 08-COMPOSITIONAL-STRATEGY-LIBRARY.md | Tier 2.5 pattern definitions (DD+OD) | Cannot extract CSS for migration |

**Test:** If file is deleted, can someone still build CD-007 (hypothetical 7th CD exploration) to 39/40 quality?
- Delete R3-DENSITY-DIMENSIONS.md → can copy DD-006 patterns but don't understand WHY they work (cargo-cult design)
- Delete DD-006-fractal.html → have no visual exemplar of 36/40 fractal quality to compare against
- Delete CD-AUDIT-SYNTHESIS.md → have no proof that 39/40 is achievable (might assume 35/40 is the ceiling)

### 5.2 Context-Enriching Files (Nice to Have)

**Helpful but not strictly required for reproduction:**

| File Type | Example | What It Adds | Deletion Impact |
|-----------|---------|--------------|-----------------|
| CLAUDE.md navigation | explorations/density/CLAUDE.md | Directory overview, file scores, best-use guide | Agents must manually discover exploration inventory |
| Creative research feed | OD-006-CREATIVE-RESEARCH-FEED.md | EXT-CREATIVE-001–015 techniques | Lose re-enrichment technique catalog (not core to OD-006 quality) |
| Debrief meta-learnings | debrief-intention-vs-execution.md | Audit process analysis | Lose process improvement insights (not core to CD quality) |
| Lock sheet | lock-sheet.md (CD) | Convention classification (ALWAYS-LOCKED, LOCKED, NEGOTIABLE) | Lose convention rationale, but convention spec still exists |
| Phase 3 refinement audit | phase3-visual-a.md | Refinement iteration details | Lose iteration history, but Phase 2 + Phase 4 audits still prove quality |

**Test:** If file is deleted, can someone still build CD-007 to 39/40 quality?
- Delete CLAUDE.md → yes, but slower (must manually read all explorations to find inventory)
- Delete OD-006-CREATIVE-RESEARCH-FEED.md → yes, OD-006.html still demonstrates quality (creative techniques are enhancement, not foundation)
- Delete debrief files → yes, debriefs analyze audit PROCESS not exploration OUTCOMES

**Key Distinction:**
- Reproducibility-critical: File contains UNIQUE information needed to re-derive quality
- Context-enriching: File organizes/synthesizes information available elsewhere

### 5.3 Gray Zone: Audit Archives

**Question:** Are 343 CD screenshots reproducibility-critical or nice-to-have?

**Arguments for CRITICAL:**
- Screenshots prove 39/40 claim is real (not aspirational)
- Document responsive behavior at 1440px, 1024px, 768px (CD-005 CRITICAL finding was 768px overflow)
- Verify scroll-animation rendering (scroll-reveal content invisibility systemic finding)
- Provide visual comparison baseline for "does my CD-007 look 39/40 quality?"

**Arguments for NICE-TO-HAVE:**
- CD-006.html source code fully describes implementation (screenshots are rendering evidence, not design specification)
- Audit reports document findings in prose (screenshots illustrate but don't replace text)
- Modern browsers render consistently (screenshots prove 2026 rendering, but 2027 browser might render differently anyway)

**Reproducibility Framework Answer:**

**Phase 4 screenshots (56-63 per CD) = CRITICAL** because:
1. Viewport-specific issues (768px overflow) only visible in screenshots, not source code
2. Scroll-animation mid-states only visible in scroll-sequence screenshots
3. 39/40 quality claim requires visual proof — prose alone is insufficient

**Phase 2/3 redundant screenshots = NICE-TO-HAVE** because:
1. Phase 4 screenshots are more comprehensive (per-CD deep inspection)
2. Audit report prose summarizes findings adequately
3. Iteration history (Phase 2 → Phase 3 changes) is process documentation, not outcome proof

**Verdict:** Keep Phase 4 screenshots (reproducibility-critical). Phase 2/3 screenshots could potentially be archived (context-enriching, not strictly critical).

---

## 6. DOES REPRODUCIBILITY REQUIRE PROCESS OR JUST OUTPUTS?

### 6.1 The Cargo-Cult Design Problem

**Scenario:** Someone has DD-006.html but NOT R3-036 or DD-outbound-findings.md.

**What they can reproduce:**
- Copy the exact CSS from DD-006 source code
- Apply fractal rhythm to new content (same 4-scale pattern)
- Visually match DD-006 aesthetic

**What they CANNOT reproduce:**
- Understand WHY fractal rhythm produces 36/40 quality (vs 30/40 or 32/40)
- Adapt fractal principle to content that doesn't fit DD-006 structure
- Derive NEW patterns with similar quality using fractal reasoning
- Justify WHY fractal constraint is MANDATORY for OD/AD/CD

**Analogy:** Having the Mona Lisa painting but not Leonardo's notebooks.
- Can copy brushstrokes exactly (output reproduction)
- Cannot understand sfumato technique reasoning (process reproduction)
- Cannot apply sfumato to NEW subjects

**Reproducibility Verdict:**

**Outputs alone = TEMPLATE REUSE** (copy-paste existing solutions)
**Outputs + Process = TRUE REPRODUCTION** (re-derive quality from principles)

### 6.2 The 39/40 Quality Ceiling Problem

**CD-006 scores 39/40.** Why not 40/40?

**From CD-AUDIT-SYNTHESIS.md (zone-cd.md line 22):**
- Overall: 37.3/40 average (93.3%)
- CD-006: 39/40 (target met)
- Soul: 59/60 (1 minor — opacity 0.6 on TOC number)

**If you have CD-006.html but NOT the audit results:**
- Can see the OUTCOME (39/40 quality achieved)
- Cannot see the 1-POINT DEDUCTION (soul violation: opacity 0.6)
- Might COPY the opacity 0.6 into your CD-007 (thinking it's correct)
- Your CD-007 also loses 1 soul point

**Reproducibility Requirement:**

To reproduce 39/40 quality, you need:
1. **POSITIVE examples** (what achieves 39/40) — CD-006.html
2. **NEGATIVE examples** (what loses points) — CD-AUDIT-SYNTHESIS.md finding on opacity 0.6

**Process artifacts document MISTAKES and CORRECTIONS:**
- OD-GRANULAR-AUDIT-RESULTS.md: "2px border epidemic (108 CSS decls)" — systemic anti-pattern
- CD Phase 4: "Systemic S-01: scroll-reveal content invisibility" — systemic finding
- DD-006 research debt: "No per-scale scoring breakdown" — known gap

**Deletion of process artifacts removes:**
- Awareness of what NOT to do
- Explanation of why certain approaches were rejected
- Guardrails preventing quality regression

**Conclusion:** Reproducibility requires BOTH process (why decisions were made, what was tried and rejected) AND outputs (what the final quality looks like).

### 6.3 The Tacit Knowledge Problem

**Definition:** Tacit knowledge = knowledge that cannot be fully articulated in documents.

**Example from DD-006 (line 99-103 research debt):**
> "Fractal constraint enforcement mechanism is prose-only: no automated tool verifies that future explorations actually implement self-similarity at all 4 scales"

**What this means:**
- DD-006.html demonstrates 4-scale fractal rhythm visually
- DD-outbound-findings.md defines DD-F-006 constraint in prose
- But there's NO EXPLICIT RUBRIC for "does this implementation satisfy DD-F-006?"

**A builder must:**
1. Read DD-F-006 definition ("same rhythm at page, section, component, character")
2. Look at DD-006.html visual rendering
3. **Intuit** what "same rhythm" means perceptually
4. Apply that intuition to new content
5. **Judge** whether their implementation "feels like" DD-006 quality

**Steps 3-5 are TACIT KNOWLEDGE** — not captured in files.

**Reproducibility Implications:**

**Full reproducibility is IMPOSSIBLE** because:
- Some quality judgments require perceptual intuition
- Perceptual intuition cannot be fully documented
- "Same rhythm at all 4 scales" is UNDERSPECIFIED

**Maximum achievable reproducibility:**
- Provide as many concrete examples as possible (DD-006, OD-006, CD-006)
- Document scoring rubrics explicitly (OD-GRANULAR-AUDIT 40-point scale)
- Acknowledge gaps in documentation (research debt sections)
- Provide comparison baselines (audit screenshots showing what 39/40 looks like)

**This is why BOTH layers are necessary:**
- Process layer: Reduces tacit knowledge by documenting reasoning
- Outcome layer: Provides concrete perceptual examples that prose cannot fully capture

---

## 7. WHAT ABOUT RESEARCH FINDINGS — ARE THEY REPRODUCIBILITY-CRITICAL?

### 7.1 Finding Registries vs Research Source

**Two types of documents:**

**Research Source (R1-R5):**
- R3-DENSITY-DIMENSIONS.md (51 findings)
- R5-COMBINATION-THEORY.md (39 findings)
- Full research context, exploration reasoning, evidence

**Finding Registry:**
- DD-outbound-findings.md (18 DD-F findings extracted from DD explorations)
- Lists finding IDs, brief descriptions, source explorations

**Reproducibility Test:**

Can you re-derive DD-006 quality with ONLY the finding registry (no R3)?

**What you'd know from DD-outbound-findings.md:**
- DD-F-006 exists
- It's about "fractal self-similarity"
- It came from DD-006-fractal.html

**What you WOULDN'T know:**
- WHY fractal self-similarity matters (R3-036 rationale)
- WHAT specific scales to apply it at (R3-036 might specify page/section/component/character)
- HOW it relates to other density patterns (R3 context)

**Verdict:**

**Finding registries alone = INSUFFICIENT** for full reproducibility.

**Why?** Findings are COMPRESSED INSIGHTS extracted from full research. The compression loses context needed to re-derive the insight independently.

**Analogy:** Finding registry is like a table of contents. You know chapter titles, but can't read the chapters.

### 7.2 Research Findings as Provenance Chain Links

**From adversary report (lines 69-94):**

```
R1-R5 Research (337 findings)
  ↓
Stage 2 (DD): 18 DD-F findings → 6 HTML explorations
  ↓
Stage 3 (OD): 17 OD-F findings → 6 HTML explorations
  ↓
Stage 4 (AD): 28 AD-F findings
  ↓
Stage 5 (CD): 25 CD-F findings
```

**Each stage produces findings that the NEXT stage consumes:**
- DD produces DD-F-006 (fractal) → OD MUST honor it
- OD produces OD-F-005 (Organization IS Density) → AD builds on it
- AD produces AD-F-023 (3-way equivalence) → CD stress-tests it

**Reproducibility Dependency:**

To reproduce CD-006 (39/40), you need:
1. R5 research (39 combination findings) — direct input
2. AD findings (AD-F-023 3-way equivalence) — inherited constraint
3. OD findings (OD-F-005 Organization IS Density) — inherited constraint
4. DD findings (DD-F-006 fractal) — inherited constraint

**Deletion Test:**
- Delete R5 → cannot trace WHY CD-006 uses those specific combination patterns
- Delete AD findings → cannot trace WHY CD-006 treats axis/organization/density as equivalent
- Delete DD-F-006 → cannot trace WHY CD-006 must demonstrate fractal at 5 scales

**Verdict:** Research findings are LOAD-BEARING for provenance chain reproducibility.

**BUT:** Do you need the FULL R3-DENSITY-DIMENSIONS.md (51 findings) or just DD-F-006 (1 finding)?

**Answer:** FULL R3 for COMPLETE reproducibility, DD-F-006 for NARROW reproducibility.

- **Narrow reproducibility**: Reproduce CD-006 as-is (need only the findings CD-006 directly consumes)
- **Complete reproducibility**: Understand the DESIGN SPACE that produced CD-006 (need full research to see what was tried, what was rejected, why DD-F-006 emerged as strongest finding)

### 7.3 Findings vs Explorations: Which Is Primary?

**From adversary report (line 256-260):**
> "DD-006.html is the PROOF. DD-F-006 is the FINDING extracted from the proof."

**Two reproduction paths:**

**Path 1: Finding → Exploration**
1. Read DD-F-006 definition
2. Build a fractal exploration from scratch
3. Compare to DD-006.html to verify you hit 36/40 quality

**Path 2: Exploration → Finding**
1. Study DD-006.html implementation
2. Extract the fractal pattern from observation
3. Formalize it as a finding
4. Apply to new explorations

**Which path requires which files?**

| Path | Needs DD-F-006? | Needs DD-006.html? | Needs R3-036? |
|------|-----------------|-------------------|---------------|
| Finding → Exploration | YES (definition) | YES (quality baseline) | MAYBE (context) |
| Exploration → Finding | NO (derives it) | YES (source) | NO (finding emerges from observation) |

**Reproducibility Insight:**

**Both findings AND explorations are primary** — they serve DIFFERENT reproduction paths.

**Findings enable:** Top-down reasoning (principle → implementation)
**Explorations enable:** Bottom-up reasoning (example → principle)

**Deleting either breaks one reproduction path.**

**Real-world reproduction:** Most builders use BOTH paths iteratively:
1. Read DD-F-006 to understand principle (top-down)
2. Study DD-006.html to see how it's implemented (bottom-up)
3. Attempt their own implementation
4. Compare back to DD-006.html to verify quality
5. Refine by re-reading DD-F-006 to check principle adherence

**This is why the adversary report says "Finding without proof = ungrounded claim"** — findings alone don't prove the principle produces quality. The exploration is the proof.

---

## 8. REPRODUCIBILITY SCORING FRAMEWORK

### 8.1 Scoring Dimensions

**File usefulness for reproducibility scored on:**

| Dimension | Weight | Description |
|-----------|--------|-------------|
| **Process Traceability** | 30% | Can you trace WHY decisions were made? |
| **Outcome Demonstrability** | 30% | Can you SEE what quality looks like? |
| **Principle Extractability** | 20% | Can you derive reusable insights? |
| **Quality Verifiability** | 10% | Can you prove claims (scores, compliance)? |
| **Tacit Knowledge Capture** | 10% | How much intuition is documented vs assumed? |

**Total:** 100%

### 8.2 Example Scores

**DD-006-fractal.html:**
- Process Traceability: 25/30 (BUILT ON section cites R3-036, but R3-036 content not inline)
- Outcome Demonstrability: 30/30 (Full HTML with inline styles, renders in browser)
- Principle Extractability: 18/20 (Fractal rhythm visible, but no per-scale scoring)
- Quality Verifiability: 9/10 (36/40 score documented, soul compliance in header)
- Tacit Knowledge Capture: 6/10 (Research debt section acknowledges gaps)
- **Total: 88/100** — High reproducibility, but some tacit knowledge remains

**R3-DENSITY-DIMENSIONS.md:**
- Process Traceability: 30/30 (Full research reasoning, exploration process)
- Outcome Demonstrability: 5/30 (Prose only, no visual examples)
- Principle Extractability: 20/20 (51 findings fully articulated)
- Quality Verifiability: 3/10 (No quality scores, findings are hypotheses)
- Tacit Knowledge Capture: 8/10 (Extensive documentation, but some perceptual judgments assumed)
- **Total: 66/100** — High process, low outcome (needs DD explorations to reach full reproducibility)

**08-COMPOSITIONAL-STRATEGY-LIBRARY.md:**
- Process Traceability: 18/30 (Describes WHAT patterns exist, less WHY they were chosen)
- Outcome Demonstrability: 10/30 (CSS snippets, but no full HTML examples)
- Principle Extractability: 20/20 (Tier 2.5 patterns fully cataloged with when-to-use guidance)
- Quality Verifiability: 7/10 (References exploration scores, but doesn't independently verify)
- Tacit Knowledge Capture: 7/10 (Guidance on when to use patterns, but judgment still required)
- **Total: 62/100** — Good catalog, but needs DD/OD explorations for full context

**CD-AUDIT-SYNTHESIS.md:**
- Process Traceability: 20/30 (Documents WHAT was found, less WHY those issues matter)
- Outcome Demonstrability: 15/30 (Findings reference screenshots, but synthesis is prose)
- Principle Extractability: 10/20 (Findings are specific to CD, less generalizable)
- Quality Verifiability: 10/10 (Scores, soul compliance, convention compliance all documented)
- Tacit Knowledge Capture: 5/10 (Audit criteria implicit in findings, not explicit rubric)
- **Total: 60/100** — Good verification record, but needs CD explorations + screenshots for full context

**CLAUDE.md (navigation):**
- Process Traceability: 5/30 (Lists files, doesn't explain provenance)
- Outcome Demonstrability: 0/30 (Navigation only, no content)
- Principle Extractability: 0/20 (No insights, just directory listing)
- Quality Verifiability: 5/10 (Lists scores, but doesn't verify them)
- Tacit Knowledge Capture: 0/10 (Assumes agent knows how to navigate)
- **Total: 10/100** — Low reproducibility value (context-enriching, not reproducibility-critical)

### 8.3 Threshold for Reproducibility-Critical

**Proposal:** Files scoring **≥60/100** are reproducibility-critical.

**Rationale:**
- 60/100 = file contains substantial unique information for reproduction
- <60/100 = file is either redundant, context-enriching, or absorbed elsewhere

**Applying to examples:**
- DD-006.html (88/100) → CRITICAL
- R3-DENSITY-DIMENSIONS.md (66/100) → CRITICAL
- 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (62/100) → CRITICAL
- CD-AUDIT-SYNTHESIS.md (60/100) → CRITICAL (threshold)
- CLAUDE.md (10/100) → NICE-TO-HAVE

**Edge case:** OD-006-CREATIVE-RESEARCH-FEED.md

*Scoring:*
- Process Traceability: 15/30 (EXT-CREATIVE techniques documented, but not WHY they were chosen)
- Outcome Demonstrability: 5/30 (Prose only, references OD-006.html)
- Principle Extractability: 12/20 (Techniques cataloged, but application context limited)
- Quality Verifiability: 3/10 (No independent verification, relies on OD-006 audit)
- Tacit Knowledge Capture: 5/10 (Techniques named, but execution details assumed)
- **Total: 40/100** → NICE-TO-HAVE

**Verdict:** OD-006-CREATIVE-RESEARCH-FEED.md is context-enriching (enhances OD-006 understanding) but not reproducibility-critical (OD-006.html already demonstrates the techniques visually).

---

## 9. FINAL REPRODUCIBILITY FRAMEWORK

### 9.1 Core Principle

**Reproducibility requires BOTH layers:**

**Process Layer (WHY + HOW):**
- Research source files (R1-R5)
- Finding registries (DD-F, OD-F, AD-F, CD-F)
- Provenance handoffs (HANDOFF-DD-TO-OD, HANDOFF-AD-TO-CD)
- Synthesis documents (ACCUMULATED-IDENTITY-v2, RESEARCH-SYNTHESIS)
- Audit reports (documenting what was tried, what failed, what succeeded)

**Outcome Layer (WHAT):**
- Validated HTML explorations (DD-001-006, OD-001-006, CD-001-006)
- Component/pattern catalogs (08-COMPOSITIONAL-STRATEGY-LIBRARY, density-patterns.md)
- Visual evidence (screenshots, especially Phase 4 per-CD deep inspection)
- Quality verification records (audit syntheses, soul compliance checks)

**Deletion of either layer breaks reproducibility in different ways:**
- Process deletion → Cargo-cult design (can copy but not understand)
- Outcome deletion → Ungrounded theory (can read about quality but not see it)

### 9.2 Reproducibility Tiers

**Tier 1: Template Reuse (Outputs Only)**
- Can copy existing solutions to similar problems
- Cannot adapt to novel problems
- Cannot justify design decisions
- *Minimum requirement:* Validated explorations (DD-006.html, CD-006.html)

**Tier 2: Principle Application (Outputs + Findings)**
- Can apply documented patterns to new contexts
- Can justify decisions by citing findings
- Cannot re-derive findings from first principles
- *Minimum requirement:* Explorations + finding registries (DD-006.html + DD-outbound-findings.md)

**Tier 3: Full Reproduction (Outputs + Process)**
- Can re-derive findings from research
- Can adapt principles to novel problems
- Can build to equivalent quality using different approaches
- *Minimum requirement:* Explorations + findings + research source + audit provenance (DD-006.html + DD-F + R3 + audit)

### 9.3 Reproducibility-Critical File Types

**ALWAYS critical:**
1. Research source files (R1-R5) — origin of insights
2. Validated explorations (DD-006, OD-006, CD-006) — proof of quality
3. Finding registries (DD-outbound-findings, etc.) — compressed insights
4. Provenance handoffs (HANDOFF-DD-TO-OD) — constraint propagation
5. Audit syntheses (OD-GRANULAR-AUDIT-RESULTS, CD-AUDIT-SYNTHESIS) — quality verification
6. Component catalogs (08-COMPOSITIONAL-STRATEGY-LIBRARY) — extraction targets

**SOMETIMES critical:**
7. Phase 4 audit screenshots (343 files) — critical for responsive/scroll quality claims
8. Research packages (research-package-cd-NNN.md) — critical if building similar exploration
9. Synthesis documents (ACCUMULATED-IDENTITY-v2) — critical for understanding full context

**RARELY critical:**
10. CLAUDE.md navigation files — context-enriching, not reproducibility-critical
11. Debrief meta-learnings — process improvement, not quality reproduction
12. Phase 2/3 redundant audit files — Phase 4 supersedes for quality proof

### 9.4 Open Questions for Reproducibility

**Q1:** Does reproducibility require bit-for-bit HTML identity or quality-equivalent output?
**A:** Quality-equivalent. Different builders may implement DD-F-006 fractal differently while achieving same 36/40 score.

**Q2:** If research packages are deleted, can someone still build CD-007 to 39/40 quality?
**A:** MAYBE. They'd have CD-006.html as template, but wouldn't know WHY those specific R5 findings were chosen. Risk of cargo-cult copying.

**Q3:** Are audit screenshots reproducibility-critical or just nice-to-have evidence?
**A:** CRITICAL for responsive/scroll quality claims (CD-005 768px overflow), NICE-TO-HAVE for desktop static rendering.

**Q4:** Does POST-CD-PIPELINE absorption of `_cd-research/` mean research packages are now redundant?
**A:** NO. POST-CD-PIPELINE absorbed STRATEGIC SYNTHESIS of CD research. It did NOT absorb research-package-cd-NNN.md (per-exploration grounding context).

**Q5:** What's the minimum viable set to reproduce CD-006 (39/40) WITHOUT re-deriving the entire DD→OD→AD→CD chain?
**A:**
- CD-006.html (outcome)
- research-package-cd-006.md (grounding)
- 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (pattern catalog)
- CD-AUDIT-SYNTHESIS.md (quality verification)
- ACCUMULATED-IDENTITY-v2.md (inherited constraints)
- Phase 4 screenshots (visual proof)
**Total: 6 files + screenshots (~100 files total)**

---

## 10. RECOMMENDATIONS

### 10.1 For Cleanup Audit

**DO NOT DELETE:**
- DD-001-006.html, OD-001-006.html, CD-001-006.html (18 explorations) — outcome layer
- R1-R5 research files (5 files) — process layer source
- Finding registries (DD-F, OD-F, AD-F, CD-F) — process layer insights
- Audit syntheses (OD-GRANULAR-AUDIT-RESULTS, CD-AUDIT-SYNTHESIS) — quality verification
- 08-COMPOSITIONAL-STRATEGY-LIBRARY.md — extraction target
- Phase 4 standalone screenshots (343 files) — responsive/scroll quality proof

**CAN ARCHIVE (not delete):**
- Phase 2/3 audit redundant files IF Phase 4 supersedes
- Debrief meta-learnings IF process insights already captured elsewhere

**CAN DELETE:**
- CLAUDE.md IF navigation can be auto-generated from file structure
- Lock-sheet duplicates IF root version is canonical and phase4-standalone/ is intentional snapshot

### 10.2 For Reproducibility Documentation

**Add to exploration headers:**
1. **Reproducibility Checklist** — what files are needed to reproduce this quality
2. **Tacit Knowledge Warnings** — where perceptual judgment is required
3. **Per-Scale Scoring** — break down 36/40 into component scores (DD-006 research debt)

**Add to audit syntheses:**
1. **Negative Examples** — what was tried and failed (not just what succeeded)
2. **Quality Ceiling Explanation** — why 39/40 not 40/40 (what lost the point)

**Add to provenance handoffs:**
1. **Constraint Propagation Table** — which findings are MANDATORY vs OPTIONAL for next stage

### 10.3 For Future Work

**When building CD-007 or migrating pages:**

**Minimum reproducibility context to load:**
1. CD-006-pilot-migration.html (39/40 quality exemplar)
2. research-package-cd-006.md (R5 application example)
3. 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (pattern catalog)
4. CD-AUDIT-SYNTHESIS.md (quality verification baseline)
5. ACCUMULATED-IDENTITY-v2.md (inherited constraints)
6. Phase 4 screenshots (visual quality baseline)

**Total: ~6 core files + screenshot archive**

**What this enables:**
- See what 39/40 quality looks like (CD-006.html)
- Understand which research applies (research-package)
- Extract patterns for reuse (strategy library)
- Verify quality standard (audit synthesis)
- Honor inherited constraints (accumulated identity)
- Compare visual output (screenshots)

---

## FINAL VERDICT

**Reproducibility dimension definition:**

> **The degree to which a file enables re-derivation of quality outcomes without the original creator's tacit knowledge, measured by process traceability (30%), outcome demonstrability (30%), principle extractability (20%), quality verifiability (10%), and tacit knowledge capture (10%).**

**Files scoring ≥60/100 are reproducibility-critical and must be preserved.**

**The DD→CD journey requires BOTH process artifacts (R1-R5, findings, handoffs) AND outcome artifacts (DD-006, CD-006, audits, screenshots) for full reproducibility. Deleting either layer breaks reproducibility in different ways: process deletion enables only cargo-cult copying; outcome deletion enables only ungrounded theory.**

**Minimum viable set for full reproducibility: ~35-40 core files spanning R1-R5, findings, handoffs, syntheses, 18 HTML explorations, audit results, component catalogs, and Phase 4 screenshots.**

---

END DIMENSION RESEARCH: REPRODUCIBILITY

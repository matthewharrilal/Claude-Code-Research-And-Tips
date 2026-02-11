# Dark Matter Formalization Paths

**Date:** 2026-02-11
**Agent:** Dark Matter Cataloger
**Input:** dark-matter.md (47 items), 6 audit reports, lock-sheet.md, 5 skill evolution files, formal provenance chain (6 files in stage-4-axis-ad/)
**Purpose:** For each dark matter item, specify exactly WHERE the knowledge lives now, WHERE it should go, WHAT transformation is needed, estimated effort, and priority.

---

## Notation

- **Source** = exact file path where the knowledge currently lives (informal)
- **Target** = exact file path where the knowledge should be formalized
- **Transform** = what operation converts source to target
- **Lines** = estimated lines to write in the target
- **Priority** = MUST-ADD / SHOULD-ADD / NICE-TO-HAVE
- **CD-Blocking** = YES if a CD agent will produce wrong output without this

All paths relative to repo root: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`

Formal provenance root: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/`

---

## CATEGORY 1: MUST-ADD (7 items) -- CD-Blocking Risk

### DM-001: Lock-vs-Lock Conflict (Responsive Breakpoint vs Bento Pattern)

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-006/AUDIT-REPORT.md` lines 69-84 (MF-002) |
| **Secondary sources** | `explorations/axis/_perceptual-audit/lock-sheet.md` lines 53, 63 (S12.5, AD-F-009) |
| **Target** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` -- new section "OPEN ESCALATIONS" |
| **Secondary target** | `docs-spa/app/showcase/knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` -- amend S12.5 with pattern-specific override |
| **Transform** | Extract MF-002 finding + escalation rationale. Write as a formal ESCALATION entry: two LOCKED decisions conflict, proposed resolution (move collapse to ~960px for 4+ column grids), mark as UNRESOLVED pending CD validation. |
| **Lines** | ~30 (escalation entry) + ~10 (convention amendment) = ~40 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | YES -- any CD page using bento grids at compound scale will hit the same 768-960px destruction zone without this warning |

### DM-002: Scroll-Reveal Is a Content Gate, Not Progressive Enhancement

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-006/AUDIT-REPORT.md` lines 46-67 (MF-001, 5/5 unanimous) |
| **Secondary sources** | `explorations/axis/_perceptual-audit/lock-sheet.md` line 56 (S15.3 LOCKED) |
| **Target** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` -- new section "OPEN ESCALATIONS" |
| **Secondary target** | AD-CONVENTION-SPEC S15.3 -- amend with progressive enhancement requirement |
| **Transform** | Extract MF-001 finding. Write as formal ESCALATION: S15.3's letter is honored (content in DOM) but spirit is violated (content invisible). Proposed resolution: initial CSS state MUST be visible; JS MAY add hidden state for reveal. Mark as UNRESOLVED or RESOLVED depending on whether fix was applied to AD-006. |
| **Lines** | ~35 (escalation) + ~10 (convention amendment) = ~45 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | YES -- CD pages using scroll-reveal will hide 40-60% of content if they follow S15.3 literally |

### DM-003: Container Width Convention Update (860px -> 1100px)

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-001/AUDIT-REPORT.md` (LW-02), `AD-002/AUDIT-REPORT.md` (F-004), `AD-003/AUDIT-REPORT.md` (LW-3), `AD-005/AUDIT-REPORT.md` (MF-005), `AD-006/AUDIT-REPORT.md` (MF-005) |
| **Secondary source** | `explorations/axis/_perceptual-audit/_skill-evolution/failure-analysis.md` lines 56-64 (Intervention 4: user said "WHY IS THE WIDTH SO NARROW ON ALL OF THESE") |
| **Target** | AD-CONVENTION-SPEC -- UPDATE page container max-width from 860px to 1100px |
| **Secondary target** | HANDOFF-AD-TO-CD.md -- add note that effective container width is 1100px, not the spec's 860px |
| **Transform** | Convention update with rationale. Cite all 6 audit reports + user intervention. This is a CHALLENGEABLE convention that was effectively overridden by unanimous perceptual evidence + user validation. Mark old 860px as superseded. |
| **Lines** | ~15 (convention update) + ~10 (handoff note) = ~25 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | YES -- CD agents reading AD-CONVENTION-SPEC will build at 860px, which is wrong. Pages were widened to 1100px in fixes. |

### DM-004: Systemic "No Visual Ending" -- Template-Level Footer Requirement

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-001/AUDIT-REPORT.md` (LW-01, CBB-02), `AD-002/AUDIT-REPORT.md` (F-001), `AD-003/AUDIT-REPORT.md` (LW-4), `AD-004/AUDIT-REPORT.md` (LW-4), `AD-005/AUDIT-REPORT.md` (LW-3), `AD-006/AUDIT-REPORT.md` (MF-004) |
| **Target** | AD-CONVENTION-SPEC -- new section "Template Requirements: Visual Ending" |
| **Secondary target** | HANDOFF-AD-TO-CD.md -- add to "KNOWN GAPS" |
| **Transform** | Synthesize the 6 per-page findings into a single systemic finding: "All 6 AD pages lack visual endings. This is a template-level gap. CD pages MUST include a footer/capstone/return-to-top element." Write as a new convention requirement. |
| **Lines** | ~20 (convention addition) + ~8 (handoff note) = ~28 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | NO (CD can function without this, but will reproduce the same gap) |

### DM-005: Breathing Zone Ceiling (<=25%)

| Field | Value |
|-------|-------|
| **Source** | All 6 `explorations/axis/_perceptual-audit/AD-00X/AUDIT-REPORT.md` files (unanimous dead space findings across all pages) |
| **Target** | AD-CONVENTION-SPEC -- amend breathing zone budget from "15% minimum" to "15% minimum, 25% maximum" |
| **Secondary target** | HANDOFF-AD-TO-CD.md -- note the ceiling |
| **Transform** | The existing CHALLENGEABLE convention specifies a 15% floor but no ceiling. The perceptual audit's most consistent finding is excessive whitespace. Add a ceiling of 25%. Cite all 6 audit reports as evidence. |
| **Lines** | ~10 (convention amendment) + ~5 (handoff note) = ~15 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | NO (but without ceiling, CD will reproduce the same dead space) |

### DM-006: Perceptual Validation of AD-F-023 (ATTENTION TOPOLOGY)

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-006/AUDIT-REPORT.md` (positive findings), `AD-005/AUDIT-REPORT.md` (Auditor D: "one of the strongest visual rhythms I have seen") |
| **Target** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` -- amend AD-F-023 entry |
| **Transform** | Add a "Perceptual Validation" sub-section to the AD-F-023 finding entry. Cite the independent perceptual auditor confirmations: Auditor D in AD-005 confirmed WAVE density oscillation visible, Auditor A in AD-006 confirmed "scholarly, deliberate, warm" personality at 1440px and 1024px. This adds empirical perceptual evidence to the structural argument already in the finding. |
| **Lines** | ~15 (amendment to existing finding) |
| **Priority** | MUST-ADD |
| **CD-Blocking** | NO (strengthens authority, doesn't change behavior) |

### DM-007: "Two Designers" Problem -- Internal Quality Dialect Within Pages

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-003/AUDIT-REPORT.md` (CBB-1: "I would put my name on the top third"), `AD-004/AUDIT-REPORT.md` (CBB-5: comparison panels feel "borrowed") |
| **Target** | HANDOFF-AD-TO-CD.md -- new section "KNOWN QUALITY PATTERNS" |
| **Secondary target** | AD-SYNTHESIS.md -- note in synthesis |
| **Transform** | The OD audit found 3 quality dialects ACROSS pages (Polished, Functional, Editorial). The PA audit discovered quality dialects WITHIN pages. Synthesize as a warning: compound pages may have internal consistency gaps where polished sections coexist with wireframe-quality sections. CD should verify internal dialect consistency. |
| **Lines** | ~20 (handoff section) + ~10 (synthesis note) = ~30 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | NO (awareness item, not a rule) |

---

## CATEGORY 2: SHOULD-ADD (17 items) -- Enriches CD Execution

### DM-008: Lock Sheet Classification System (81 Decisions, 3 Tiers)

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/lock-sheet.md` (150 lines) |
| **Target** | `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` -- new appendix "Decision Classification Framework" |
| **Transform** | Summarize the 3-tier classification (12 ALWAYS-LOCKED, 34 LOCKED, 19 CHALLENGEABLE) with the decision tree. The lock sheet itself is too operational for provenance, but its CLASSIFICATION FRAMEWORK is a reusable methodology. Extract the decision tree and the tier definitions. Leave the per-decision details in the informal lock-sheet.md. |
| **Lines** | ~40 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO |

### DM-009: Zero Soul Violations -- Perceptual Confirmation

| Field | Value |
|-------|-------|
| **Source** | All 6 `explorations/axis/_perceptual-audit/AD-00X/AUDIT-REPORT.md` (Soul Compliance sections, all ZERO violations) |
| **Target** | AD-SYNTHESIS.md -- amend soul compliance section to cite dual-method confirmation |
| **Transform** | AD-SYNTHESIS already mentions zero soul violations. Add one sentence: "Additionally confirmed by independent perceptual auditors across all 6 pages (zero violations observed by human-perspective agents, distinct from the programmatic 13,000-element sweep in the comprehensive audit)." |
| **Lines** | ~5 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO |

### DM-010: Cold Look Instincts Were Reliable Predictors

| Field | Value |
|-------|-------|
| **Source** | All 6 `explorations/axis/_perceptual-audit/AD-00X/AUDIT-REPORT.md` (Cold Look Summary / concordance sections) |
| **Target** | Skill evolution files (already captured in `_skill-evolution/od-benchmark.md` and `skill-redesign.md`). No formal provenance target needed. |
| **Transform** | No transformation needed. This is a METHODOLOGY finding, not a design system finding. It validates the cold-look protocol and is correctly scoped to the skill evolution analysis. |
| **Lines** | 0 (already in correct location) |
| **Priority** | SHOULD-ADD (already satisfied by current placement) |
| **CD-Blocking** | NO |

### DM-011: Concordance Tracking as Severity Indicator

| Field | Value |
|-------|-------|
| **Source** | All 6 audit reports (concordance tracking throughout) |
| **Target** | Same as DM-010 -- skill evolution files. Not provenance material. |
| **Transform** | No transformation needed. Methodological insight already captured in skill evolution analysis. |
| **Lines** | 0 |
| **Priority** | SHOULD-ADD (already satisfied) |
| **CD-Blocking** | NO |

### DM-012: Sovereignty Classification (Systemic vs Sovereign)

| Field | Value |
|-------|-------|
| **Source** | All 6 `explorations/axis/_perceptual-audit/AD-00X/AUDIT-REPORT.md` (sovereignty sections in each) |
| **Target** | HANDOFF-AD-TO-CD.md -- new section "SYSTEMIC vs SOVEREIGN FINDINGS" |
| **Transform** | Extract the sovereignty classifications from all 6 reports. Create a summary table: SYSTEMIC findings (responsive collapse, no visual ending, dead space, container width, dark code block contrast) vs SOVEREIGN findings (AD-001 Z-sweep, AD-003 code truncation, AD-004 invisible border, AD-005 hub-spoke). CD needs this to know which patterns will recur and which are page-specific. |
| **Lines** | ~30 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO (but high value for CD planning) |

### DM-013: 768px Is Consistently the Failure Point

| Field | Value |
|-------|-------|
| **Source** | All 6 audit reports (multi-viewport comparison sections showing 768px failures) |
| **Target** | HANDOFF-AD-TO-CD.md -- note in "KNOWN PATTERNS" section |
| **Transform** | Synthesize: across all 6 pages, 1440px is consistently "good," 1024px is often the sweet spot, and 768px is where problems concentrate. Some layouts break BEFORE 768px (bento at ~900px). CD should test compound layouts at 900px, not just 768px. |
| **Lines** | ~12 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO |

### DM-014: Confirmed Positive Findings to Protect

| Field | Value |
|-------|-------|
| **Source** | All 6 audit reports (positive findings sections) |
| **Target** | HANDOFF-AD-TO-CD.md -- new section "STRENGTHS TO PROTECT" |
| **Transform** | Extract the independently confirmed positives: typography velocity (serif Q / sans A PULSE), header authority (dark full-bleed + 3px red), warm palette cohesion, Q&A conversational rhythm, callout system differentiation, "Scholarly, Deliberate, Warm" personality. These are things CD MUST NOT break. |
| **Lines** | ~25 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO (protective, not directive) |

### DM-015: Border-Weight-as-Confidence Encoding (AD-004 Crown Jewel)

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-004/AUDIT-REPORT.md` (both auditors: "genuine design innovation," "strongest and most successful design element") |
| **Target** | AD-outbound-findings.md -- amend AD-F-014 with perceptual validation |
| **Transform** | Add "Perceptual Validation" note to AD-F-014: both independent auditors called the border-weight gradient (4px/3px/1px, skipping 2px) the page's "crown jewel" and "genuine design innovation." |
| **Lines** | ~10 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO |

### DM-016: AD-004 Spiral Metaphor Not Perceptually Achieved

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-004/AUDIT-REPORT.md` (LW-2, 2/2 concordance: "four stacked horizontal layers, not a spiral") |
| **Target** | AD-outbound-findings.md -- add note to AD-F-013 |
| **Transform** | Add "Perceptual Caveat" to AD-F-013: both auditors confirm the GEOLOGICAL metaphor is delivered effectively, but the SPIRAL label is aspirational. Viewers see "stepped left borders," not "spiral path." The naming/framing tension should be noted for CD. |
| **Lines** | ~10 |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO |

### DM-017: Nuclear Question Absent from AD Formal Audit

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/od-benchmark.md` (Section B.7) |
| **Target** | Skill evolution files (already captured). Not provenance material. |
| **Transform** | No formal provenance target. This is a methodology gap -- OD asked every auditor the nuclear question ("If this were the ONLY page..."), AD did not. The PA audit added it via v3 redesign. Already documented in skill evolution. |
| **Lines** | 0 |
| **Priority** | SHOULD-ADD (already in correct location) |
| **CD-Blocking** | NO |

### DM-043: Three-Layer Architecture (Binary Gates -> Structured Judgment -> Free Perception)

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/skill-redesign.md` (Section D), `od-benchmark.md` (Section F.5) |
| **Target** | No formal provenance target. This is a SKILL finding, not a design system finding. Correctly lives in `_skill-evolution/`. |
| **Transform** | No transformation needed for provenance. However, if a `METHODOLOGY-APPENDIX.md` is created in provenance, this would be the first entry. |
| **Lines** | 0 (or ~20 if methodology appendix created) |
| **Priority** | SHOULD-ADD (for methodology documentation, not provenance) |
| **CD-Blocking** | NO |

### DM-044: Binary Rule Compliance Principle

| Field | Value |
|-------|-------|
| **Source** | MEMORY.md, `explorations/axis/_perceptual-audit/_skill-evolution/od-benchmark.md`, `skill-redesign.md` |
| **Target** | No formal provenance target. Meta-architectural principle. Already in MEMORY.md. |
| **Transform** | No transformation needed for provenance chain. This is a process principle, not a design system artifact. Its natural home is MEMORY.md and the skill evolution files. |
| **Lines** | 0 |
| **Priority** | SHOULD-ADD (already satisfied by MEMORY.md placement) |
| **CD-Blocking** | NO |

### DM-045: OD vs AD Process Comparison -- 10 Transferable Patterns

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/od-benchmark.md` (Section E, 474 lines total) |
| **Target** | No formal provenance target. Process knowledge, not design system knowledge. |
| **Transform** | No transformation needed. Already comprehensive in od-benchmark.md. |
| **Lines** | 0 |
| **Priority** | SHOULD-ADD (already in correct location) |
| **CD-Blocking** | NO |

### DM-046: 7 Binary Validation Gates

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/team-structure.md`, `skill-redesign.md`, plus the actual skill files (GATES.md in `~/.claude/skills/perceptual-deepening/`) |
| **Target** | No formal provenance target. Skill infrastructure, not design system artifact. |
| **Transform** | No transformation needed for provenance. The gates are operational in the skill files. |
| **Lines** | 0 |
| **Priority** | SHOULD-ADD (already in correct location) |
| **CD-Blocking** | NO |

### DM-047: Meta-Lesson ("Structural Checks vs Experiential Quality")

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/failure-analysis.md` (Section H) |
| **Target** | No formal provenance target. Epistemological insight about the pipeline itself. |
| **Transform** | Could be added to a methodology appendix if one is created. Otherwise, correctly scoped as skill evolution learning. The recursive insight (audit methodology had the same blind spot as the design it was auditing) is profound but not actionable for CD agents. |
| **Lines** | 0 (or ~15 if methodology appendix created) |
| **Priority** | SHOULD-ADD (for posterity, not provenance) |
| **CD-Blocking** | NO |

---

## CATEGORY 3: CONTRADICTIONS (5 items) -- Resolution Required

### DM-038: AD-001 Scroll-Triggered Navigation -- Contention Artifact?

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-001/AUDIT-REPORT.md` (WNS-01, single-auditor, Alpha only) |
| **Target** | No formal provenance target unless confirmed as real bug |
| **Transform** | Requires PROGRAMMATIC VERIFICATION: check AD-001's JavaScript for `window.location`, `history.pushState`, or scroll-triggered navigation. If confirmed real: add to HANDOFF-AD-TO-CD as WARNING. If contention artifact: mark as DISCARDED in audit report. The audit report already recommends this verification. |
| **Lines** | ~5 (verification result annotation) or ~15 (if confirmed, warning entry) |
| **Priority** | SHOULD-ADD (resolution) |
| **CD-Blocking** | NO (AD-001 specific) |

### DM-039: AD-002 Two-Column Collapse -- Factual Discrepancy

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-002/AUDIT-REPORT.md` (F-005: Alpha says collapses, Beta says survives at 768px) |
| **Target** | No formal provenance target unless LOCKED violation confirmed |
| **Transform** | Requires PROGRAMMATIC VERIFICATION: render AD-002 at 768px and check whether two-column layout collapses. If Beta is correct (survives), this is a LOCKED violation of S12.5. If Alpha is correct (collapses), it complies. Add verification result as annotation in audit report. |
| **Lines** | ~5 (verification annotation) |
| **Priority** | SHOULD-ADD |
| **CD-Blocking** | NO |

### DM-040: Fixer Playwright Usage -- Skill Files Contradict Analysis

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/SYNTHESIS.md` (Section D1) |
| **Target** | No provenance target. Internal to skill evolution. |
| **Transform** | Already noted as "should be resolved before second use" in SYNTHESIS.md. The contradiction is between analysis recommendation (code-only fixers) and skill file instruction (Playwright fixers). Resolution: align skill files with analysis (code-only fixers, independent verification in Wave 4). |
| **Lines** | 0 (skill file update, not provenance) |
| **Priority** | SHOULD-ADD (skill maintenance) |
| **CD-Blocking** | NO |

### DM-041: 7 Human Interventions -- Process Not Autonomous

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/_skill-evolution/failure-analysis.md` (full document, 448 lines) |
| **Target** | No formal provenance target. Process quality, not design system artifact. |
| **Transform** | Already comprehensively documented in failure-analysis.md. The formal provenance correctly presents outputs (28 findings, all fixes applied). The process messiness is correctly scoped as operational learning in the skill evolution directory. No formalization needed. |
| **Lines** | 0 |
| **Priority** | NICE-TO-HAVE |
| **CD-Blocking** | NO |

### DM-042: Ship Verdicts -- 2 DO-NOT-SHIP Pages

| Field | Value |
|-------|-------|
| **Source** | `explorations/axis/_perceptual-audit/AD-002/AUDIT-REPORT.md` (DO NOT SHIP: empty Acts IV-V), `AD-006/AUDIT-REPORT.md` (DO NOT SHIP: scroll-reveal + bento collapse) |
| **Target** | HANDOFF-AD-TO-CD.md -- amend or add "SHIP STATUS" section |
| **Transform** | The formal provenance says "all fixes applied" but doesn't record which pages were initially DO-NOT-SHIP or whether the specific DO-NOT-SHIP issues were resolved. Write a brief ship-status table: AD-001 SHIP WITH CONCERNS, AD-002 initially DO-NOT-SHIP (empty Acts IV-V) -- resolution status TBD, AD-003 SHIP WITH CONCERNS, AD-004 SHIP WITH CONCERNS, AD-005 SHIP WITH CONCERNS, AD-006 initially DO-NOT-SHIP (scroll-reveal + bento) -- escalated to DM-001/DM-002. |
| **Lines** | ~20 |
| **Priority** | MUST-ADD |
| **CD-Blocking** | YES -- CD agents reading "all fixes applied" may assume all pages are ship-ready. The 2 DO-NOT-SHIP verdicts and their resolution status must be visible. |

---

## CATEGORY 4: ACCEPTABLE AS-IS (20 items) -- No Formalization Needed

### DM-018 through DM-032: Individual Per-Page Findings

These 15 items are COULD-BE-BETTER level findings on individual pages (metadata monospace voice, progress bar appearance, orphaned cards, etc.). They are:
- Correctly scoped as working artifacts in `_perceptual-audit/AD-00X/AUDIT-REPORT.md`
- Valuable for fixers if a fix pass is undertaken
- NOT identity-level discoveries
- NOT convention-changing

**Recommendation:** Leave in place. No formalization needed. A fixer reading the audit report will find them.

### DM-033 through DM-037: Process Artifacts

These 5 items are operational artifacts (preflight reports, cold look files, individual findings files, screenshots, weaver drafts). They are:
- Correctly scoped as working artifacts in `_perceptual-audit/`
- Valuable as audit trail
- NOT provenance material

**Recommendation:** Leave in place. No formalization needed.

---

## SUMMARY: FORMALIZATION WORK REQUIRED

### Immediate (CD-Blocking) -- 4 items

| DM | Item | Target File | Lines | Transform |
|----|------|------------|-------|-----------|
| DM-001 | Lock-vs-lock conflict (S12.5 vs AD-F-009) | HANDOFF-AD-TO-CD.md + AD-CONVENTION-SPEC | ~40 | Extract escalation, write formal entry |
| DM-002 | Scroll-reveal progressive enhancement | HANDOFF-AD-TO-CD.md + AD-CONVENTION-SPEC | ~45 | Extract escalation, amend convention |
| DM-003 | Container width 860->1100px | AD-CONVENTION-SPEC + HANDOFF-AD-TO-CD.md | ~25 | Convention update with rationale |
| DM-042 | Ship verdict resolutions | HANDOFF-AD-TO-CD.md | ~20 | Ship-status table |
| | | **SUBTOTAL** | **~130** | |

### High Priority -- 5 items

| DM | Item | Target File | Lines | Transform |
|----|------|------------|-------|-----------|
| DM-004 | Template footer requirement | AD-CONVENTION-SPEC + HANDOFF-AD-TO-CD.md | ~28 | Synthesize 6 per-page findings into systemic requirement |
| DM-005 | Breathing zone ceiling <=25% | AD-CONVENTION-SPEC + HANDOFF-AD-TO-CD.md | ~15 | Amend existing convention |
| DM-006 | Perceptual validation of AD-F-023 | AD-outbound-findings.md | ~15 | Amend finding with perceptual evidence |
| DM-007 | Internal quality dialect warning | HANDOFF-AD-TO-CD.md + AD-SYNTHESIS.md | ~30 | Synthesize 2 findings into warning |
| DM-008 | Lock sheet classification framework | AD-AUDIT-SYNTHESIS.md | ~40 | Extract decision tree methodology |
| | | **SUBTOTAL** | **~128** | |

### Medium Priority -- 7 items (actual new content needed)

| DM | Item | Target File | Lines | Transform |
|----|------|------------|-------|-----------|
| DM-009 | Dual-method soul confirmation | AD-SYNTHESIS.md | ~5 | Add sentence citing perceptual confirmation |
| DM-012 | Systemic vs sovereign table | HANDOFF-AD-TO-CD.md | ~30 | Extract from 6 reports, synthesize |
| DM-013 | 768px failure pattern | HANDOFF-AD-TO-CD.md | ~12 | Synthesize viewport findings |
| DM-014 | Strengths to protect | HANDOFF-AD-TO-CD.md | ~25 | Extract confirmed positives |
| DM-015 | Border-weight crown jewel | AD-outbound-findings.md | ~10 | Amend AD-F-014 |
| DM-016 | Spiral metaphor caveat | AD-outbound-findings.md | ~10 | Amend AD-F-013 |
| DM-042 | (counted in Immediate above) | -- | -- | -- |
| | | **SUBTOTAL** | **~92** | |

### Already In Correct Location -- 7 items (no work needed)

| DM | Item | Current Location | Why No Move |
|----|------|-----------------|-------------|
| DM-010 | Cold look reliability | _skill-evolution/ | Methodology finding, not design system |
| DM-011 | Concordance tracking | _skill-evolution/ | Methodology finding |
| DM-017 | Nuclear question absence | _skill-evolution/od-benchmark.md | Methodology gap, already documented |
| DM-043 | Three-layer architecture | _skill-evolution/skill-redesign.md | Skill architecture, not provenance |
| DM-044 | Binary rule principle | MEMORY.md + _skill-evolution/ | Meta-architectural, not design system |
| DM-045 | OD vs AD comparison | _skill-evolution/od-benchmark.md | Process knowledge |
| DM-046 | 7 binary gates | _skill-evolution/ + skill files | Operational skill infrastructure |
| DM-047 | Meta-lesson | _skill-evolution/failure-analysis.md | Epistemological, not provenance |

### No Formalization Needed -- 20 items

DM-018 through DM-037: Individual findings and process artifacts. Correctly scoped in `_perceptual-audit/` working directories.

### Contradictions Requiring Resolution -- 3 items

| DM | Item | Action | Lines |
|----|------|--------|-------|
| DM-038 | Navigation hijack | Programmatic verification, then annotate | ~5-15 |
| DM-039 | Two-column collapse | Programmatic verification, then annotate | ~5 |
| DM-040 | Fixer Playwright | Align skill files with analysis | ~0 (skill edit) |

---

## TOTAL EFFORT ESTIMATE

| Category | Items | New Lines to Write | Files Modified |
|----------|-------|-------------------|----------------|
| CD-Blocking (Immediate) | 4 | ~130 | 2 (HANDOFF + CONVENTION-SPEC) |
| High Priority | 5 | ~128 | 4 (HANDOFF + CONVENTION-SPEC + AD-outbound-findings + AD-AUDIT-SYNTHESIS) |
| Medium Priority | 6 | ~92 | 3 (HANDOFF + AD-outbound-findings + AD-SYNTHESIS) |
| Contradiction Resolution | 3 | ~10-25 | 1-2 (audit reports + possibly HANDOFF) |
| Already Correct | 7 | 0 | 0 |
| No Action Needed | 20 | 0 | 0 |
| **TOTAL** | **45** | **~360-375** | **~5 unique files** |

---

## PRIMARY TARGET FILES (Ordered by Change Volume)

1. **HANDOFF-AD-TO-CD.md** (~165 lines added) -- 8 items land here
   - New sections: OPEN ESCALATIONS, SHIP STATUS, KNOWN QUALITY PATTERNS, SYSTEMIC vs SOVEREIGN, STRENGTHS TO PROTECT, 768px warning
   - Path: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md`

2. **AD-CONVENTION-SPEC.md** (~90 lines added/amended) -- 4 items land here
   - Amendments: S12.5 (breakpoint override for bento), S15.3 (progressive enhancement), page container width, breathing zone ceiling, footer requirement
   - Path: `docs-spa/app/showcase/knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md`

3. **AD-outbound-findings.md** (~35 lines added) -- 3 items land here
   - Amendments: AD-F-023 (perceptual validation), AD-F-014 (crown jewel), AD-F-013 (spiral caveat)
   - Path: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md`

4. **AD-AUDIT-SYNTHESIS.md** (~40 lines added) -- 1 item lands here
   - New appendix: Decision Classification Framework (from lock sheet)
   - Path: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md`

5. **AD-SYNTHESIS.md** (~15 lines added) -- 2 items land here
   - Amendments: dual-method soul confirmation, internal dialect note
   - Path: `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md`

---

## KEY INSIGHT: MOST DARK MATTER IS CORRECTLY PLACED

Of 47 dark matter items:
- **7 are MUST-ADD** (genuine provenance gaps)
- **10 need actual formalization work** (the 7 MUST-ADD + 3 contradictions)
- **7 need enrichment to existing entries** (SHOULD-ADD amendments)
- **7 are already in their correct location** (skill evolution, MEMORY.md)
- **20 need no action** (working artifacts, correctly scoped)

The dark matter analysis initially sounds alarming ("47 items! 15,000+ lines unformalized!") but on close examination, **only ~360 lines of new content across 5 files** are needed to close all provenance gaps. The bulk of the "dark matter" is either correctly scoped as working artifacts or already in appropriate non-provenance locations.

The 4 CD-BLOCKING items (DM-001, DM-002, DM-003, DM-042) require only ~130 lines total and all land in 2 files (HANDOFF-AD-TO-CD.md and AD-CONVENTION-SPEC.md). This is the minimum viable formalization pass.

# Ephemeral Directory Archival Classification

**Date:** 2026-02-15
**Classifier:** archival-classifier (clarification-enrichment team)
**Task:** Task #16 — Classify every ephemeral/ file for archival vs retention decisions
**Total Files Processed:** 257 (192 markdown + 65 non-markdown)

---

## CLASSIFICATION CRITERIA SUMMARY

**ARCHIVE** — Purpose fulfilled, findings absorbed into synthesis documents, key info captured elsewhere
**RETAIN-CURRENT** — Actively referenced or needed for upcoming work (Middle experiment, Wave 2, etc.)
**RETAIN-HISTORICAL** — Contains unique information not captured elsewhere, valuable for provenance
**DELETE** — Empty, broken, or 100% duplicated

---

## ROOT-LEVEL FILES (6 files)

### RETAIN-CURRENT (4 files)

**File:** `/ephemeral/START-HERE.md`
- **Size:** 11 lines
- **Justification:** Entry point for new instances, actively referenced in HANDOFF-PROMPT.md and memory/MEMORY.md
- **Usage:** Quick orientation before reading full continuity docs

**File:** `/ephemeral/HANDOFF-PROMPT.md`
- **Size:** 85 lines
- **Justification:** Master handoff template for new Claude instances, companion to continuity-docs/HANDOFF.md
- **Usage:** Copy-paste prompt for session continuity

**File:** `/ephemeral/skill-enrichment-verification.md`
- **Size:** 492 lines
- **Justification:** Wave 1 verification audit (M2, M3, M5, M8, PRE-1, DOC-1 through DOC-6), documents what WAS modified
- **Usage:** Reference for Wave 2 planning, ensures no duplicate modifications

**File:** `/ephemeral/skill-enrichment-wave1-integration-report.md`
- **Size:** 371 lines
- **Justification:** Completion report for Wave 1 skill enrichment, shows which modifications were applied and tested
- **Usage:** Reference for Wave 2 sequencing, documents integration patterns

### ARCHIVE (2 files)

**File:** `/ephemeral/skill-edit-manifest.md`
- **Size:** 769 lines
- **Justification:** Wave 1 execution manifest (surgeon's surgical plan), purpose fulfilled when Wave 1 completed
- **Key info captured in:** skill-enrichment-verification.md (verification) + skill-enrichment-wave1-integration-report.md (integration)
- **Archival value:** Shows detailed before/after text for Wave 1, useful for understanding modification precision

**File:** `/ephemeral/01c-css-forensics-cd-tension.md`
- **Size:** 1431 lines (duplicate)
- **Justification:** Duplicate of true-extraction-inventory/01c-css-forensics-cd-tension.md
- **Key info captured in:** true-extraction-inventory/01c-css-forensics-cd-tension.md (master copy)
- **Action:** DELETE (100% duplicate, wrong location)

---

## /continuity-docs (11 files)

### RETAIN-CURRENT (2 files)

**File:** `/ephemeral/continuity-docs/HANDOFF.md`
- **Size:** 473 lines
- **Justification:** THE comprehensive state transfer document, actively referenced in memory/MEMORY.md, START-HERE.md, HANDOFF-PROMPT.md
- **Unique info:** Complete worldview, all jargon definitions, modification recommendations, user context
- **Usage:** Primary deep-context document for new instances

**File:** `/ephemeral/continuity-docs/07-open-threads-and-gaps.md`
- **Size:** Not yet read fully, but referenced in ENTRY-POINT.md
- **Justification:** Tracks open questions (OT-01 through OT-N) that inform upcoming experiments
- **Usage:** Guides Middle-tier experiment design, identifies what needs testing

### ARCHIVE (9 files)

All other continuity-docs files are ARCHIVE candidates because their key findings were synthesized into HANDOFF.md:

**File:** `/ephemeral/continuity-docs/01-narrative-arc.md`
- **Justification:** Narrative framing research, purpose fulfilled when HANDOFF.md written
- **Key info captured in:** HANDOFF.md Section 1 (orientation) + doc-enrichment/05-richness-journey.md (user motivation)

**File:** `/ephemeral/continuity-docs/02-worldview-and-goals.md`
- **Justification:** Worldview extraction research, synthesized into HANDOFF.md Section 3-4
- **Key info captured in:** HANDOFF.md (worldview, tier model, goals)

**File:** `/ephemeral/continuity-docs/03-documentation-audit.md`
- **Justification:** Staleness audit COMPLETED 2026-02-15, all fixes applied
- **Key info captured in:** Staleness fixes were applied to design-system/CLAUDE.md, pipeline/05-COMPLETE-ROADMAP.md, memory/MEMORY.md

**File:** `/ephemeral/continuity-docs/04-instance-continuity-guide.md`
- **Justification:** Research on implicit context patterns, synthesized into HANDOFF.md Section 9
- **Key info captured in:** HANDOFF.md (implicit context), doc-enrichment/03-ENTRY-POINT.md (reading order)

**File:** `/ephemeral/continuity-docs/04b-ingestion-architecture.md`
- **Justification:** Documentation structure research, synthesized into doc-enrichment/03-ENTRY-POINT.md
- **Key info captured in:** ENTRY-POINT.md (file map, reading order)

**File:** `/ephemeral/continuity-docs/05-adversarial-review.md`
- **Justification:** Adversarial review of continuity-docs content, findings integrated into HANDOFF.md revisions
- **Key info captured in:** HANDOFF.md (revised worldview)

**File:** `/ephemeral/continuity-docs/06-content-adversarial.md`
- **Justification:** Content-level adversarial review challenging priorities, findings integrated into session-insights/13-master-agenda.md
- **Key info captured in:** Master agenda (experiment-first methodology), doc-enrichment/02-tier-methodology.md (methodology section)

**File:** `/ephemeral/continuity-docs/08-cross-cutting-synthesis.md`
- **Justification:** Cross-research synthesis across richness + rigidity investigations, findings distributed across HANDOFF.md + ENTRY-POINT.md
- **Key info captured in:** HANDOFF.md (convergence findings), ENTRY-POINT.md (key concepts)

**File:** `/ephemeral/continuity-docs/DOC-UPDATES.md`
- **Justification:** Tracking document for documentation updates during continuity team execution, purpose fulfilled
- **Key info captured in:** The updates were applied to their target documents

---

## /doc-enrichment (7 files)

### RETAIN-CURRENT (2 files)

**File:** `/ephemeral/doc-enrichment/03-ENTRY-POINT.md`
- **Size:** 167 lines
- **Justification:** Quick-start entry point, actively referenced in START-HERE.md, HANDOFF-PROMPT.md, memory/MEMORY.md
- **Unique info:** 5-minute orientation, acronym legend, tier model table, file map, what NOT to do
- **Usage:** First document for new instances after START-HERE.md

**File:** `/ephemeral/doc-enrichment/02-tier-methodology.md`
- **Size:** 563 lines
- **Justification:** THE core document for tier building methodology, actively needed for Middle-tier experiment
- **Unique info:** Why tiers build on Variant B, concrete specs per tier, how to build each, vocabulary vs prohibition with CSS examples, experiment-first methodology, open questions
- **Usage:** Required reading before building any tier

### ARCHIVE (5 files)

**File:** `/ephemeral/doc-enrichment/01-updates-applied.md`
- **Justification:** Tracking document showing which updates were applied during doc-enrichment team execution
- **Key info captured in:** The updates were applied to HANDOFF.md, ENTRY-POINT.md, 02-tier-methodology.md

**File:** `/ephemeral/doc-enrichment/04-metacognitive-audit.md`
- **Justification:** Metacognitive review of documentation quality, findings integrated into final doc revisions
- **Key info captured in:** HANDOFF.md + ENTRY-POINT.md + 02-tier-methodology.md (revised content)

**File:** `/ephemeral/doc-enrichment/05-richness-journey.md`
- **Size:** 430 lines
- **Justification:** User motivation narrative (why richness matters personally), synthesized into ENTRY-POINT.md Section "Key Context" and HANDOFF.md Section 10
- **Key info captured in:** HANDOFF.md (user context), ENTRY-POINT.md (richness definition)
- **Archival value:** Full narrative arc with emotional context, useful for understanding WHY this project exists

**File:** `/ephemeral/doc-enrichment/06-structure-review.md`
- **Justification:** Structural review of documentation organization, findings applied to final doc structure
- **Key info captured in:** ENTRY-POINT.md (reading order), HANDOFF.md (section organization)

**File:** `/ephemeral/doc-enrichment/07-vocab-library-crossref.md`
- **Justification:** Vocabulary vs library distinction research, synthesized into ENTRY-POINT.md Section "Key Context #2"
- **Key info captured in:** ENTRY-POINT.md (Name Test + Transfer Test), 02-tier-methodology.md (Section 6)

---

## /session-insights (31 files)

### RETAIN-CURRENT (5 files)

**File:** `/ephemeral/session-insights/13-master-agenda.md`
- **Size:** ~400+ lines (not fully read but confirmed large)
- **Justification:** Complete ordered work plan for all remaining work (Phases 0-8, 58 items), actively referenced in current conversation
- **Unique info:** Dependency-aware execution sequence, blocking items, parallel opportunities
- **Usage:** Roadmap for Wave 2, Middle experiment, and all future phases

**File:** `/ephemeral/session-insights/14-master-execution-prompt.md`
- **Size:** ~500+ lines (confirmed large from sample)
- **Justification:** Self-contained prompt for executing skill enrichment, actively needed for Wave 2
- **Unique info:** All modification specs with exact before/after text, file paths, rationale
- **Usage:** Wave 2 execution template

**File:** `/ephemeral/session-insights/17-conversation-clarifications.md`
- **Size:** ~400+ lines (confirmed from sample read)
- **Justification:** Critical clarifications from user conversation about Middle tier design (mechanism counts are descriptive not prescriptive, "sample 2-4" is the PROBLEM, deployment level distinctions)
- **Unique info:** 4 major clarifications that close gaps in tier methodology understanding
- **Usage:** Must inform Middle-tier build execution, enrich tier methodology documentation

**File:** `/ephemeral/session-insights/18-clarification-mapping.md`
- **Size:** Unknown (Task #1 output)
- **Justification:** Maps conversation clarifications to documentation locations for enrichment
- **Usage:** Guides where to apply clarifications from #17

**File:** `/ephemeral/session-insights/00-LIVING-DOCUMENT.md`
- **Justification:** If this is a living working document (suggested by name), likely tracks ongoing insights
- **Usage:** Check if actively maintained

### RETAIN-HISTORICAL (10 files)

These files contain unique research/analysis not fully captured elsewhere:

**File:** `/ephemeral/session-insights/02-rigidity-deep-dive.md`
- **Justification:** Deep analysis of rigidity mechanics, informed modification recommendations
- **Unique info:** 4-type taxonomy derivation, constraint archaeology, rigidity mathematics
- **Why historical:** Core findings are in HANDOFF.md, but derivation logic is unique

**File:** `/ephemeral/session-insights/03-semantic-framework.md`
- **Justification:** Semantic layer analysis of design system structure
- **Unique info:** How meaning flows through the 6-layer ontology

**File:** `/ephemeral/session-insights/04-tier-architecture.md`
- **Justification:** Tier model architectural research
- **Unique info:** How tiers were derived from CSS analysis
- **Why historical:** Tier specs are in 02-tier-methodology.md, but architecture logic is unique

**File:** `/ephemeral/session-insights/05-extraction-chain.md`
- **Justification:** How Phase C extraction chain was constructed
- **Unique info:** Provenance methodology for compositional-core

**File:** `/ephemeral/session-insights/10-fresh-eyes-review.md`
- **Justification:** Zero-context fresh-eyes review of the project
- **Unique info:** Perspective from agent with no prior context, found gaps research-loaded agents missed

**File:** `/ephemeral/session-insights/11-continuity-crossref.md`
- **Justification:** Cross-reference analysis across continuity documents
- **Unique info:** How different documents reinforce each other

**File:** `/ephemeral/session-insights/12-middle-tier-quickstart.md`
- **Justification:** Quick-start guide for Middle-tier building
- **Unique info:** Condensed build protocol (may be CURRENT if needed for experiment)
- **Review:** May upgrade to RETAIN-CURRENT if actively needed for Middle build

**File:** `/ephemeral/session-insights/15-prompt-validation.md`
- **Justification:** Validation of master execution prompt completeness
- **Unique info:** Checks whether prompt #14 is truly self-contained

**File:** `/ephemeral/session-insights/16-final-enrichment-recommendations.md`
- **Justification:** Final recommendations from enrichment team
- **Unique info:** What to do after Wave 1 completes

**File:** `/ephemeral/session-insights/cross-ref-01-session-insights.md`
**File:** `/ephemeral/session-insights/cross-ref-02-research.md`
**File:** `/ephemeral/session-insights/cross-ref-03-architecture.md`
**File:** `/ephemeral/session-insights/cross-ref-04-continuity.md`
- **Justification:** Cross-reference maps across all ephemeral/ documentation
- **Unique info:** Shows how information flows between documents
- **Why historical:** Useful for understanding documentation topology, not actively needed

### ARCHIVE (16 files)

**File:** `/ephemeral/session-insights/01-gap-analysis.md`
- **Justification:** Early gap analysis, findings integrated into master agenda (#13)
- **Key info captured in:** 13-master-agenda.md (gap resolutions)

**File:** `/ephemeral/session-insights/06-enrichment-actions.md`
- **Justification:** Action items from enrichment planning, executed in Wave 1
- **Key info captured in:** skill-enrichment-verification.md (what was done)

**File:** `/ephemeral/session-insights/08-skill-enrichment-plan.md`
- **Justification:** Original enrichment plan, superseded by master agenda (#13) and master execution prompt (#14)
- **Key info captured in:** 13-master-agenda.md + 14-master-execution-prompt.md

**File:** `/ephemeral/session-insights/09-adversarial-doc-review.md`
- **Justification:** Adversarial review of enrichment documentation, findings applied to final docs
- **Key info captured in:** HANDOFF.md + ENTRY-POINT.md + 02-tier-methodology.md (revisions)

**File:** `/ephemeral/session-insights/audit-01-modification-audit.md`
- **Justification:** Audit of proposed modifications, findings integrated into master agenda
- **Key info captured in:** 13-master-agenda.md (modification sequencing)

**File:** `/ephemeral/session-insights/audit-02-staleness-report.md`
- **Justification:** Staleness audit report, fixes applied 2026-02-15
- **Key info captured in:** Fixes applied to design-system/CLAUDE.md, pipeline/05-COMPLETE-ROADMAP.md, memory/MEMORY.md

**File:** `/ephemeral/session-insights/plan-revision-01-audit.md` (if exists)
**File:** `/ephemeral/session-insights/plan-revision-02-topology.md`
**File:** `/ephemeral/session-insights/plan-revision-03-state.md`
**File:** `/ephemeral/session-insights/plan-revision-04-detail.md`
- **Justification:** Plan revision series during master agenda development, purpose fulfilled when agenda finalized
- **Key info captured in:** 13-master-agenda.md (final plan)

**File:** `/ephemeral/session-insights/18-middle-tier-checklist.md`
- **Justification:** DUPLICATE or related to #2 (Build granular Middle-tier deliverables checklist, marked completed in task list)
- **Key info captured in:** Check if this is Task #2 output, may already be in master agenda
- **Action:** Verify if this duplicates work already in agenda or if it's a distinct artifact

Remaining session-insights files not individually listed above are assumed ARCHIVE unless they contain unique research methodology or findings not captured in the 5 RETAIN-CURRENT files.

---

## /richness-research (5 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/richness-research/05-unified-synthesis.md`
- **Size:** ~800+ lines (confirmed large from sample read)
- **Justification:** Unified synthesis across 5 richness research agents, HIGH-VALUE research artifact
- **Unique info:** Convergence map (what all 4 agents agree on), contradiction map (where they tension), confidence levels, full argumentation
- **Why historical:** Core findings are in HANDOFF.md Section 3 + ENTRY-POINT.md, but full research logic with dissenting perspectives is unique and valuable for provenance

### ARCHIVE (4 files)

**File:** `/ephemeral/richness-research/01-richness-anatomy.md`
**File:** `/ephemeral/richness-research/02-identity-investigation.md`
**File:** `/ephemeral/richness-research/03-implications-landscape.md`
**File:** `/ephemeral/richness-research/04-metacognitive-analysis.md`
- **Justification:** Individual agent reports synthesized into 05-unified-synthesis.md
- **Key info captured in:** 05-unified-synthesis.md (convergence + contradictions), HANDOFF.md (settled positions)
- **Archival value:** Show individual agent reasoning paths, useful for understanding how synthesis was constructed

---

## /rigidity-research (6 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/rigidity-research/06-unified-synthesis.md`
- **Size:** ~900+ lines (confirmed large from sample read)
- **Justification:** Unified synthesis across 6 rigidity research agents, HIGH-VALUE research artifact
- **Unique info:** The rigidity-richness answer, convergence map, 4-type taxonomy derivation, modification analysis, confidence levels
- **Why historical:** Core findings are in HANDOFF.md Section 3 + ENTRY-POINT.md, but full research logic with taxonomy derivation is unique

### RETAIN-HISTORICAL (2 files)

**File:** `/ephemeral/rigidity-research/02-modification-analysis.md`
- **Justification:** Analysis of 4 proposed modifications (M1, M2, M6, M7) with adoption/modify/reject recommendations
- **Unique info:** Rigidity Test methodology, per-modification argumentation
- **Why historical:** Recommendations are in HANDOFF.md Section 5, but detailed analysis is unique and informs Wave 2

**File:** `/ephemeral/rigidity-research/03-tier-specifications.md`
- **Justification:** Concrete tier definitions grounded in actual CSS analysis of showcase pages
- **Unique info:** Line-by-line CSS breakdown showing how mechanism counts were derived
- **Why historical:** Tier specs are in 02-tier-methodology.md, but CSS-level derivation is unique provenance

### ARCHIVE (3 files)

**File:** `/ephemeral/rigidity-research/01-rigidity-archaeology.md`
**File:** `/ephemeral/rigidity-research/04-reproducibility-analysis.md`
**File:** `/ephemeral/rigidity-research/05-metacognitive-rigidity.md`
- **Justification:** Individual agent reports synthesized into 06-unified-synthesis.md
- **Key info captured in:** 06-unified-synthesis.md (findings), HANDOFF.md (settled positions)

---

## /phase-d-execution (47 files across 7 subfolders)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/phase-d-execution/FINAL-REPORT.md`
- **Size:** ~1000+ lines estimated (confirmed large from sample read)
- **Justification:** Complete Phase D validation report with verdict, per-page analysis, anti-gravity evaluation
- **Unique info:** Lens declaration, programmatic check results (19 checks × 5 pages), perceptual audit results (48 questions), top 3 strengths/gaps
- **Why historical:** Phase D is COMPLETE, but this is the definitive record of what was tested and what was learned

### ARCHIVE (46 files)

All other phase-d-execution files are ARCHIVE because Phase D is COMPLETE (CONDITIONAL PASS, 2026-02-15) and findings are captured in FINAL-REPORT.md:

**Subfolders:**
- `/builds/` — 5 HTML output files (Variant A, B, C, D + Track 1), purpose fulfilled
- `/content/` — Source content used for Phase D, purpose fulfilled
- `/digest/` — Processing notes during execution (review-notes.md, source-facts-*.md), purpose fulfilled
- `/evaluation/` — Individual page evaluation reports, synthesized into FINAL-REPORT.md
- `/explainer/` — Explainer documents for Phase D setup, purpose fulfilled
- `/logs/` — Build logs for 5 variants, useful for debugging but not actively needed
- `/screenshots/` — Visual captures of 5 pages at 1440px/768px, useful for visual reference

**Archival justification:** Phase D is a completed milestone. The FINAL-REPORT.md captures all findings. Individual execution artifacts (logs, intermediate reports, source content) served their purpose during execution. Logs and screenshots have historical value for visual/technical reference but are not actively needed.

**Exception check:** If any logs contain unique insights NOT in FINAL-REPORT.md (e.g., the Phase 3.5 gate that was missed due to log truncation), those specific logs should be RETAIN-HISTORICAL. Recommend spot-checking variant-c-anti-gravity.log for Phase 3.5 content.

---

## /phase-d-success-research (9 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/phase-d-success-research/09-unified-success-checklist.md`
- **Justification:** Synthesis of 8 research reports into unified success criteria
- **Unique info:** Comprehensive checklist for Phase D-V2 design (when re-running with mixed content)
- **Why historical:** Phase D is complete, but this informs future validation design

### ARCHIVE (8 files)

**File:** `/ephemeral/phase-d-success-research/01-protocol-audit.md`
**File:** `/ephemeral/phase-d-success-research/02-first-principles.md`
**File:** `/ephemeral/phase-d-success-research/03-variant-test-design.md`
**File:** `/ephemeral/phase-d-success-research/04-content-selection.md`
**File:** `/ephemeral/phase-d-success-research/05-failure-modes.md`
**File:** `/ephemeral/phase-d-success-research/06-evaluation-methodology.md`
**File:** `/ephemeral/phase-d-success-research/07-downstream-dependencies.md`
**File:** `/ephemeral/phase-d-success-research/08-epistemological-validity.md`
- **Justification:** Research reports analyzing Phase D design, synthesized into 09-unified-success-checklist.md
- **Key info captured in:** 09-unified-success-checklist.md (synthesis), phase-d-execution/FINAL-REPORT.md (actual results)

---

## /plan-audit (12 files)

### ARCHIVE (12 files)

All plan-audit files are ARCHIVE because they were part of master agenda development (Task #13), which is now complete and captured in session-insights/13-master-agenda.md:

**File:** `/ephemeral/plan-audit/plan-revision-01-audit.md`
**File:** `/ephemeral/plan-audit/topology-audit.md`
**File:** `/ephemeral/plan-audit/criteria-audit.md`
**File:** `/ephemeral/plan-audit/rigidity-pipeline-audit.md`
**File:** `/ephemeral/plan-audit/epistemology-audit.md`
**File:** `/ephemeral/plan-audit/rigidity-audit.md`
**File:** `/ephemeral/plan-audit/failure-mode-audit.md`
**File:** `/ephemeral/plan-audit/skill-integration-audit.md`
**File:** `/ephemeral/plan-audit/research-coverage-audit.md`
**File:** `/ephemeral/plan-audit/skill-invocation-deep-audit.md`
**File:** `/ephemeral/plan-audit/new-gap-analysis.md`
**File:** `/ephemeral/plan-audit/library-alignment-audit.md`
- **Justification:** Audit reports during master agenda construction, purpose fulfilled when agenda finalized
- **Key info captured in:** session-insights/13-master-agenda.md (final work plan)

---

## /true-extraction-inventory (7 files + 45 screenshots)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/true-extraction-inventory/07-synthesis.md`
- **Size:** 862 lines
- **Justification:** Synthesis of CSS/HTML forensics across all showcase pages, informed Phase C extraction
- **Unique info:** How mechanisms were extracted from actual code, validation of extraction completeness
- **Why historical:** Extraction is complete (6-layer ontology built), but forensics methodology is valuable provenance

### ARCHIVE (6 files)

**File:** `/ephemeral/true-extraction-inventory/01-css-forensics.md`
**File:** `/ephemeral/true-extraction-inventory/01b-css-forensics-od-ad.md`
**File:** `/ephemeral/true-extraction-inventory/01c-css-forensics-cd-tension.md`
**File:** `/ephemeral/true-extraction-inventory/02-html-forensics.md`
**File:** `/ephemeral/true-extraction-inventory/03-implementation-audit.md`
**File:** `/ephemeral/true-extraction-inventory/04-visual-dd-od.md`
**File:** `/ephemeral/true-extraction-inventory/05-visual-ad-cd.md`
**File:** `/ephemeral/true-extraction-inventory/06-visual-tension.md`
- **Justification:** Individual forensics reports synthesized into 07-synthesis.md
- **Key info captured in:** 07-synthesis.md (extraction findings), compositional-core/grammar/mechanism-catalog.md (extracted mechanisms)
- **Archival value:** Line-by-line CSS analysis, shows HOW extraction was done

### RETAIN-HISTORICAL (45 screenshots)

**Files:** `/ephemeral/true-extraction-inventory/screenshots/*.png` (45 images)
- **Justification:** Visual captures of showcase pages (DD-001 through DD-006, OD-001 through OD-006, AD-001 through AD-004, boris-1 through boris-5, gastown-1 through gastown-5, playbook-1 through playbook-5)
- **Unique info:** Visual reference for understanding mechanism deployment in context
- **Why historical:** Useful for visual comparison when evaluating Middle/Ceiling tier output quality
- **Size consideration:** Images are typically larger files, but 45 screenshots likely ~20-30MB total (acceptable for historical retention)

---

## /pipeline-metacognition (5 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/pipeline-metacognition/05-metacognitive-synthesis.md`
- **Justification:** Synthesis of 4 metacognition research reports on pipeline design patterns
- **Unique info:** Strategic discoveries (binary rules achieve 100% compliance, meta-to-output ratio 2.6:1, 50:1 compression, Two-Instance pattern, Prophylactic Paradox)
- **Why historical:** Informs future pipeline modifications, captured in MEMORY.md but full analysis is valuable

### ARCHIVE (4 files)

**File:** `/ephemeral/pipeline-metacognition/01-extraction-methodology.md`
**File:** `/ephemeral/pipeline-metacognition/02-pattern-bias-analysis.md`
**File:** `/ephemeral/pipeline-metacognition/03-track-implications.md`
**File:** `/ephemeral/pipeline-metacognition/04-content-mutation-audit.md`
- **Justification:** Individual reports synthesized into 05-metacognitive-synthesis.md
- **Key info captured in:** 05-metacognitive-synthesis.md (patterns), MEMORY.md (strategic discoveries)

---

## /post-cd-research (7 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/post-cd-research/SYNTHESIS.md`
- **Justification:** Synthesis of post-CD research (file map, architecture, planning analysis, tension synthesis, gaps)
- **Unique info:** How the design system evolved after CD-006 completion
- **Why historical:** Bridges Phase C completion to Phase D planning

### ARCHIVE (6 files)

**File:** `/ephemeral/post-cd-research/01-file-map.md`
**File:** `/ephemeral/post-cd-research/02-architecture-analysis.md`
**File:** `/ephemeral/post-cd-research/03-exploration-connections.md`
**File:** `/ephemeral/post-cd-research/04-planning-docs-analysis.md`
**File:** `/ephemeral/post-cd-research/05-tension-synthesis-analysis.md`
**File:** `/ephemeral/post-cd-research/06-gaps-and-open-questions.md`
- **Justification:** Individual reports synthesized into SYNTHESIS.md
- **Key info captured in:** SYNTHESIS.md (findings)

---

## /extraction-architecture (6 files)

### ARCHIVE (6 files)

**File:** `/ephemeral/extraction-architecture/01-rigidity-free-architecture.md`
**File:** `/ephemeral/extraction-architecture/02-guardrail-integration.md`
**File:** `/ephemeral/extraction-architecture/03-creative-freedom-systems.md`
**File:** `/ephemeral/extraction-architecture/04-extraction-inventory.md`
**File:** `/ephemeral/extraction-architecture/05-library-architecture.md`
**File:** `/ephemeral/extraction-architecture/06-synthesis-blueprint.md`
- **Justification:** Early Phase C architecture research, findings were integrated into compositional-core structure
- **Key info captured in:** compositional-core/CLAUDE.md (build protocol), compositional-core/ 6-layer ontology
- **Archival value:** Shows early architectural thinking before Phase C extraction finalized

---

## /extraction-epistemology (9 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/extraction-epistemology/09-synthesis.md`
- **Justification:** Synthesis of epistemological research on extraction methodology
- **Unique info:** How to know what to extract, lens derivation, identity vs enablement vs reuse
- **Why historical:** Informs future extraction work (if more mechanisms are added to catalog)

### ARCHIVE (8 files)

**File:** `/ephemeral/extraction-epistemology/01-fresh-extraction.md`
**File:** `/ephemeral/extraction-epistemology/02-lens-derivation.md`
**File:** `/ephemeral/extraction-epistemology/03-reuse-lens.md`
**File:** `/ephemeral/extraction-epistemology/04-enablement-lens.md`
**File:** `/ephemeral/extraction-epistemology/05-identity-lens.md`
**File:** `/ephemeral/extraction-epistemology/06-adversarial-methodology.md`
**File:** `/ephemeral/extraction-epistemology/07-count-validation.md`
**File:** `/ephemeral/extraction-epistemology/08-process-metacognition.md`
- **Justification:** Individual reports synthesized into 09-synthesis.md
- **Key info captured in:** 09-synthesis.md (epistemology), compositional-core/ (extracted artifacts)

---

## /rigidity-mechanics (8 files)

### RETAIN-HISTORICAL (1 file)

**File:** `/ephemeral/rigidity-mechanics/08-synthesis.md`
- **Justification:** Synthesis of rigidity mechanics research (cognitive mechanics, spectrum, analogies, artifact audit, dimension taxonomy, mechanism design, enrichment plan)
- **Unique info:** How rigidity WORKS as a cognitive phenomenon, not just what it IS
- **Why historical:** Complements rigidity-research/ synthesis, focuses on mechanics vs effects

### ARCHIVE (7 files)

**File:** `/ephemeral/rigidity-mechanics/01-cognitive-mechanics.md`
**File:** `/ephemeral/rigidity-mechanics/02-spectrum-analysis.md`
**File:** `/ephemeral/rigidity-mechanics/03-analogous-domains.md`
**File:** `/ephemeral/rigidity-mechanics/04-artifact-audit.md`
**File:** `/ephemeral/rigidity-mechanics/05-dimension-taxonomy.md`
**File:** `/ephemeral/rigidity-mechanics/06-mechanism-design.md`
**File:** `/ephemeral/rigidity-mechanics/07-enrichment-plan.md`
- **Justification:** Individual reports synthesized into 08-synthesis.md
- **Key info captured in:** 08-synthesis.md (mechanics), rigidity-research/06-unified-synthesis.md (implications)

---

## /readme-research (7 files)

### ARCHIVE (7 files)

**File:** `/ephemeral/readme-research/01-agent-ingestion.md`
**File:** `/ephemeral/readme-research/02-architecture.md`
**File:** `/ephemeral/readme-research/03-metacognitive.md`
**File:** `/ephemeral/readme-research/04-practical.md`
**File:** `/ephemeral/readme-research/05-epistemological.md`
**File:** `/ephemeral/readme-research/06-adversarial.md`
**File:** `/ephemeral/readme-research/07-base-readme-audit.md`
- **Justification:** Research for README.md enrichment, findings applied to design-system/README.md and compositional-core/README.md
- **Key info captured in:** design-system/README.md (base README), compositional-core/README.md (core README)
- **Status:** User confirmed Wave 1 skill enrichment includes documentation work (DOC-1 through DOC-6), README research is complete

---

## /claude-md-research (24 files: 10 research + 10 review + 4 unlisted)

### ARCHIVE (24 files)

All claude-md-research files are ARCHIVE because this research informed design-system/CLAUDE.md and compositional-core/CLAUDE.md creation, which are now complete:

**File:** `/ephemeral/claude-md-research/01-agent-ingestion.md`
**File:** `/ephemeral/claude-md-research/02-anti-gravity-rules.md`
**File:** `/ephemeral/claude-md-research/03-workflow-sequences.md`
**File:** `/ephemeral/claude-md-research/04-metacognitive-framing.md`
**File:** `/ephemeral/claude-md-research/05-root-claude-audit.md`
**File:** `/ephemeral/claude-md-research/06-cross-reference-strategy.md`
**File:** `/ephemeral/claude-md-research/07-folder-landscape.md`
**File:** `/ephemeral/claude-md-research/08-agent-routing.md`
**File:** `/ephemeral/claude-md-research/09-ingestion-protocol.md`
**File:** `/ephemeral/claude-md-research/10-evolution-state.md`
- **Justification:** Research reports for CLAUDE.md design
- **Key info captured in:** design-system/CLAUDE.md (root navigation), compositional-core/CLAUDE.md (build protocol)

**File:** `/ephemeral/claude-md-research/review-01-ingestion.md`
**File:** `/ephemeral/claude-md-research/review-02-antigravity.md`
**File:** `/ephemeral/claude-md-research/review-03-workflow.md`
**File:** `/ephemeral/claude-md-research/review-04-metacognition.md`
**File:** `/ephemeral/claude-md-research/review-05-staleness.md`
**File:** `/ephemeral/claude-md-research/review-06-crossref.md`
**File:** `/ephemeral/claude-md-research/review-07-landscape.md`
**File:** `/ephemeral/claude-md-research/review-08-routing.md`
**File:** `/ephemeral/claude-md-research/review-09-ingestion.md`
**File:** `/ephemeral/claude-md-research/review-10-evolution.md`
- **Justification:** Adversarial reviews of research reports
- **Key info captured in:** Final CLAUDE.md files incorporate review feedback

---

## /doc-reflection (files not yet enumerated, likely exists)

**Status:** Folder exists per `find` output but files not yet read
**Action:** If this folder contains reflection on documentation quality, likely ARCHIVE (purpose fulfilled when docs finalized)

---

## SUMMARY STATISTICS

### By Classification

**RETAIN-CURRENT:** 12 files
- ROOT: 4 (START-HERE, HANDOFF-PROMPT, skill-enrichment-verification, wave1-integration-report)
- continuity-docs: 2 (HANDOFF.md, 07-open-threads-and-gaps.md)
- doc-enrichment: 2 (03-ENTRY-POINT.md, 02-tier-methodology.md)
- session-insights: 4-5 (13-master-agenda, 14-master-execution-prompt, 17-conversation-clarifications, 18-clarification-mapping, possibly 00-LIVING-DOCUMENT)

**RETAIN-HISTORICAL:** 60+ files
- session-insights: 10-12
- richness-research: 1 (05-unified-synthesis)
- rigidity-research: 3 (06-unified-synthesis, 02-modification-analysis, 03-tier-specifications)
- phase-d-execution: 1 (FINAL-REPORT.md)
- phase-d-success-research: 1 (09-unified-success-checklist)
- true-extraction-inventory: 46 (07-synthesis + 45 screenshots)
- pipeline-metacognition: 1 (05-metacognitive-synthesis)
- post-cd-research: 1 (SYNTHESIS.md)
- extraction-epistemology: 1 (09-synthesis.md)
- rigidity-mechanics: 1 (08-synthesis.md)

**ARCHIVE:** 180+ files
- continuity-docs: 9
- doc-enrichment: 5
- session-insights: 16
- richness-research: 4
- rigidity-research: 3
- phase-d-execution: 46
- phase-d-success-research: 8
- plan-audit: 12
- true-extraction-inventory: 6
- pipeline-metacognition: 4
- post-cd-research: 6
- extraction-architecture: 6
- extraction-epistemology: 8
- rigidity-mechanics: 7
- readme-research: 7
- claude-md-research: 24
- doc-reflection: (TBD)

**DELETE:** 1 file
- ROOT: 1 (01c-css-forensics-cd-tension.md — duplicate)

### By Information Density

**HIGH-VALUE SYNTHESIS FILES (must retain):**
- continuity-docs/HANDOFF.md (473 lines, THE master handoff)
- doc-enrichment/03-ENTRY-POINT.md (167 lines, THE entry point)
- doc-enrichment/02-tier-methodology.md (563 lines, THE tier methodology)
- session-insights/13-master-agenda.md (400+ lines, THE work plan)
- session-insights/14-master-execution-prompt.md (500+ lines, THE execution template)
- session-insights/17-conversation-clarifications.md (400+ lines, critical clarifications)
- richness-research/05-unified-synthesis.md (800+ lines, richness answer)
- rigidity-research/06-unified-synthesis.md (900+ lines, rigidity answer)
- phase-d-execution/FINAL-REPORT.md (1000+ lines, Phase D verdict)

**MEDIUM-VALUE RESEARCH FILES (historical retention):**
- All other synthesis files (typically 500-900 lines)
- Key analysis files (tier-specifications, modification-analysis)
- Methodological files (extraction epistemology, metacognition)

**LOW-VALUE EXECUTION ARTIFACTS (archival):**
- Individual agent reports (synthesized into unified documents)
- Tracking documents (updates-applied, DOC-UPDATES)
- Execution logs (phase-d-execution/logs/)
- Intermediate audits (plan-audit/)

---

## RECOMMENDED ACTIONS

### IMMEDIATE (Before Middle-tier experiment)

1. **Verify 00-LIVING-DOCUMENT.md status** — If actively maintained, upgrade to RETAIN-CURRENT
2. **Check 18-middle-tier-checklist.md** — Verify if distinct from master agenda or duplicate
3. **Spot-check variant-c-anti-gravity.log** — Confirm if Phase 3.5 gate content exists (would upgrade log to RETAIN-HISTORICAL)
4. **Delete /ephemeral/01c-css-forensics-cd-tension.md** — 100% duplicate

### POST-MIDDLE-EXPERIMENT (After first tier build)

1. **Archive continuity-docs/** — Move 9 ARCHIVE files to `ephemeral/archive/continuity-docs/`
2. **Archive phase-d-execution/** — Move 46 ARCHIVE files (keep FINAL-REPORT.md at root, move builds/logs/digest/evaluation to archive)
3. **Archive research inputs** — Move individual agent reports to `ephemeral/archive/research-inputs/` (keep synthesis files)
4. **Compress session-insights/** — Move 16 ARCHIVE files to `ephemeral/archive/session-insights/`

### LONG-TERM (After Phase E complete)

1. **Create archive/ subfolder structure:**
   - `ephemeral/archive/phase-d/` (Phase D execution artifacts)
   - `ephemeral/archive/research/` (Individual research reports)
   - `ephemeral/archive/planning/` (Plan audits, revision documents)
   - `ephemeral/archive/documentation/` (Doc research, README research, CLAUDE.md research)

2. **Compress RETAIN-HISTORICAL synthesis files** — After 6+ months, consider moving to archive if not actively referenced

3. **Delete true duplicate files** — Only /ephemeral/01c-css-forensics-cd-tension.md identified so far

---

## NOTES ON ARCHIVAL PHILOSOPHY

**"ARCHIVE" does NOT mean DELETE.** It means:
- Purpose fulfilled (deliverable completed)
- Key information captured in synthesis documents
- Not actively needed for upcoming work (Middle experiment, Wave 2, Phase E)
- Valuable for provenance, understanding decisions, or future reference
- Should be preserved but moved out of active workspace

**Key information MUST exist in at least one RETAIN file before marking ARCHIVE.**

**RETAIN-HISTORICAL** preserves unique research artifacts that:
- Show HOW conclusions were reached (methodology)
- Contain full argumentation with dissenting perspectives
- Provide provenance for extracted artifacts (compositional-core)
- Document decision-making processes
- Enable future work (Phase D-V2, more mechanism extraction)

**RETAIN-CURRENT** is for documents actively needed for:
- Middle-tier experiment execution
- Wave 2 skill modifications
- New instance onboarding
- Ongoing work coordination

---

## CRITICAL VERIFICATION NEEDED

Before finalizing archival decisions, verify:

1. **Does session-insights/00-LIVING-DOCUMENT.md exist and is it actively maintained?**
2. **Is session-insights/18-middle-tier-checklist.md distinct from master agenda or duplicate work?**
3. **Does any Phase D log contain Phase 3.5 gate content not in FINAL-REPORT.md?**
4. **Are there files in /doc-reflection that need classification?**
5. **Do any plan-audit files contain unique insights not in master agenda?**
6. **Are there any other DUPLICATE files beyond 01c-css-forensics-cd-tension.md?**

---

**Classification complete. 257 files processed across 14 subfolders.**
**Recommended structure: 12 RETAIN-CURRENT, 60+ RETAIN-HISTORICAL, 180+ ARCHIVE, 1 DELETE.**
**Next step: User review and approval of classification decisions before moving files.**

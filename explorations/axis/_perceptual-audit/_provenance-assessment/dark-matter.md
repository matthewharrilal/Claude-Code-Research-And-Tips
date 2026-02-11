# Dark Matter Analysis: Informal Knowledge Not in Formal AD Provenance

**Date:** 2026-02-11
**Agent:** Dark Matter Hunter
**Scope:** All informal artifacts from AD perceptual audit pipeline vs formal provenance chain in `DESIGN-SYSTEM/provenance/stage-4-axis-ad/`
**Method:** Read all informal sources (6 audit reports, 19 findings files, 16 cold looks, 6 fix reports, 5 skill evolution analyses, lock sheet, preflight reports, MEMORY.md, comprehensive audit reports) and compared against formal provenance (AD-outbound-findings.md, AD-SYNTHESIS.md, AD-AUDIT-SYNTHESIS.md, STAGE-HEADER.md, ACCUMULATED-IDENTITY-v2.md)

---

## Executive Summary

The AD perceptual audit pipeline generated approximately **15,000+ lines** of informal knowledge across **60+ files**. The formal provenance chain captured the **research findings** (28 AD-F findings), the **build audit** (~47 de-duplicated items in AD-AUDIT-SYNTHESIS.md), and the **synthesis narrative** (AD-SYNTHESIS.md). But the **perceptual audit** -- the second, deeper audit done AFTER the build audit -- produced knowledge that exists ONLY in the informal `explorations/axis/_perceptual-audit/` directory. Additionally, the **skill evolution analysis** (5 files, ~3,735 lines) and the **perceptual audit skill redesign** (v3 skill, 4 files, ~2,227 lines) contain significant architectural knowledge that has no provenance representation at all.

**Total dark matter found: 47 items** across 4 categories.

---

## Category 1: MUST ADD -- Knowledge That Changes the Identity or Design System

These items represent genuine discoveries or systemic findings that ALTER the understanding of the design system's identity, its rules, or its behavior. They are NOT captured in any formal provenance document.

### DM-001: Two LOCKED Conventions Conflict -- Responsive Breakpoint vs Bento Pattern

**Source:** AD-006 AUDIT-REPORT.md (MF-002, 5/5 unanimous)
**What it says:** The LOCKED responsive collapse at 768px (AD-CONV S12.5) and the LOCKED bento grid pattern (AD-F-009, "cells ARE islands") directly conflict between 768-960px. The bento grid becomes unreadable at ~900px but doesn't collapse until 768px. Text renders as single characters stacked vertically.
**Why it matters:** This is the first documented case of two LOCKED research-backed decisions producing a BROKEN outcome. The escalation was flagged but the RESOLUTION is not captured in any formal provenance document. No provenance file records whether S12.5 was revised, whether a pattern-specific override was adopted, or whether the conflict remains open.
**Provenance gap:** Neither AD-outbound-findings.md nor AD-AUDIT-SYNTHESIS.md records the lock-vs-lock conflict resolution. AD-SYNTHESIS.md does not mention it.
**Classification:** MUST ADD -- this affects CD phase directly (any CD page using bento grids at compound scale will hit the same conflict).

### DM-002: Scroll-Reveal is a Content Gate, Not Progressive Enhancement

**Source:** AD-006 AUDIT-REPORT.md (MF-001, 5/5 unanimous)
**What it says:** AD-CONV S15.3 (scroll-triggered reveal) is LOCKED and research-backed (EXT-CREATIVE-004 + WCAG). But the implementation hides 40-60% of page content when animations fail. The lock says "content in DOM regardless" -- the letter is honored but the spirit is violated. Five independent auditors unanimously flagged this as WOULD-NOT-SHIP.
**Why it matters:** This challenges the LOCKED interpretation of S15.3. The escalation proposed: "Initial CSS state MUST be visible. JavaScript MAY add hidden state for scroll-reveal to remove." This would make progressive enhancement a LOCKED requirement. But no formal provenance document records this decision.
**Provenance gap:** The resolution of MF-001 is not in any formal provenance file.
**Classification:** MUST ADD -- scroll-reveal affects all future pages and the LOCKED convention needs its interpretation clarified in the formal chain.

### DM-003: 860px Container Width is Systematically Too Narrow for AD Pages

**Source:** AD-001 LW-02, AD-002 F-004, AD-003 LW-3, AD-004 (not challenged), AD-005 MF-005, AD-006 MF-005; failure-analysis.md Intervention 4
**What it says:** All 6 AD pages were independently flagged for excessive horizontal dead space at 1440px. The 860px max-width container leaves ~40% of the viewport as empty cream margins. For AD-003 (bento grid), this contradicts the page's own thesis about spatial organization. The user intervened explicitly: "WHY IS THE WIDTH SO NARROW ON ALL OF THESE." Pages were widened to 1100px in fixes.
**Why it matters:** The page container max-width is a CHALLENGEABLE convention. The perceptual audit produced a SYSTEMIC challenge across all 6 pages with the user validating the challenge. The convention was effectively overridden (860 -> 1100px) but this is not recorded in any formal provenance document as a convention update.
**Provenance gap:** AD-CONVENTION-SPEC still lists 860px. No provenance file records the width expansion or the rationale.
**Classification:** MUST ADD -- CD pages need to know the effective width is 1100px, not 860px. The convention spec needs updating.

### DM-004: Systemic "No Visual Ending" Pattern Across All 6 ADs

**Source:** AD-001 LW-01/CBB-02, AD-002 F-001 (empty void), AD-003 LW-4, AD-004 LW-4, AD-005 LW-3, AD-006 MF-004
**What it says:** All 6 AD pages "just stop" without a visual footer, closing bookend, return-to-top, or page-end signal. This was independently flagged in all 6 audit reports. AD-006's report specifically notes the page claims to use the BOOKENDS density pattern but the closing bookend is missing.
**Why it matters:** This is a template-level gap. If all 6 ADs lack visual endings, the AD-SOUL-TEMPLATE.html itself likely lacks a footer/capstone. This should be documented as a systemic template requirement for CD.
**Provenance gap:** Not in AD-outbound-findings, not in AD-SYNTHESIS, not in AD-AUDIT-SYNTHESIS (which has fix items but no systemic "add footer" requirement).
**Classification:** MUST ADD -- CD needs to know this is a template gap, not a per-page oversight.

### DM-005: Dead Space is Systemic, Not Per-Page -- All 6 ADs Have Multi-Viewport Blank Zones

**Source:** All 6 AUDIT-REPORT.md files (unanimous across all pages)
**What it says:** Every single AD page has excessive dead space between sections. AD-002 has ~3,700px of empty Acts IV-V. AD-003 has 4,000-6,000px blank. AD-004 has ~4 consecutive blank screens. AD-005 has massive dead zones between spokes. AD-006 has multiple full-viewport blanks.
**Why it matters:** The breathing zone budget (15% minimum whitespace, CHALLENGEABLE) may need a CEILING (suggested: <=25%). The perceptual audit's most consistent finding across all 6 pages is that whitespace exceeds what feels purposeful.
**Provenance gap:** The breathing zone budget has no ceiling in any formal convention or provenance document.
**Classification:** MUST ADD -- a ceiling on breathing zones would prevent this systemic issue in CD.

### DM-006: AD-F-023 "ATTENTION TOPOLOGY" -- The Meta-Equivalence -- Was Validated Perceptually

**Source:** AD-006 AUDIT-REPORT.md, AD-005 AUDIT-REPORT.md (positive findings)
**What it says:** The 3-way unification (axis=organization=density) and its meta-name ATTENTION TOPOLOGY (AD-F-023) were confirmed by perceptual auditors. Auditor D in AD-005: "one of the strongest visual rhythms I have seen" (the WAVE density oscillation). Auditor A in AD-006: "scholarly, deliberate, warm" personality achieved at 1440px and 1024px. The concept was validated not just structurally but PERCEPTUALLY.
**Why it matters:** AD-F-023 is already in formal provenance, but its PERCEPTUAL validation is not. The research chain traces the structural argument; the perceptual audit provides independent empirical confirmation that the 3-way unification is VISIBLE, not just theoretically correct.
**Provenance gap:** AD-outbound-findings.md lists AD-F-023 with structural evidence only. The perceptual validation across multiple independent auditors is not cited.
**Classification:** MUST ADD -- perceptual confirmation strengthens the finding's authority for CD.

### DM-007: The "Two Designers" Problem -- Quality Dialect Exists Within Single AD Pages

**Source:** AD-003 AUDIT-REPORT.md (CBB-1), AD-004 AUDIT-REPORT.md (CBB-5)
**What it says:** AD-003 auditors perceived "TWO designers" -- the prose/header sections feel polished and confident ("I would put my name on the top third") while the bento grid cards feel like "wireframes that never got their second pass." AD-004 auditors found comparison panels feel like "borrowed components dropped into a geological metaphor page."
**Why it matters:** The OD audit identified 3 quality dialects (Polished, Functional, Editorial) ACROSS pages. The AD perceptual audit discovered quality dialects WITHIN pages -- a different and potentially more concerning pattern. This suggests that individual explorations have internal consistency gaps that the template/convention system doesn't address.
**Provenance gap:** Not captured in any formal provenance document.
**Classification:** MUST ADD -- CD should be aware that compound pages may have internal dialect inconsistency.

---

## Category 2: SHOULD ADD -- Knowledge That Enriches Understanding

These items represent valuable insights from the perceptual audit pipeline that would strengthen the provenance chain if formalized, but do not fundamentally change the identity or rules.

### DM-008: Lock Sheet Classification System (81 Decisions, 3 Tiers)

**Source:** lock-sheet.md (150 lines)
**What it says:** 12 ALWAYS-LOCKED (soul-level), 34 LOCKED (research-backed), 19 CHALLENGEABLE, 16 PREVIOUS FINDINGS. Decision tree: formal finding + research citation = LOCKED; convention without research = CHALLENGEABLE; inherited without re-validation = CHALLENGEABLE.
**Why it matters:** This classification system is the most rigorous decision-categorization framework in the project. It was created for the perceptual audit but could serve as the definitive sovereignty reference for CD.
**Provenance gap:** The lock sheet exists only in the informal `_perceptual-audit/` directory.
**Classification:** SHOULD ADD -- would strengthen AD provenance significantly.

### DM-009: Zero Soul Violations Across All 6 AD Pages (Independent Perceptual Confirmation)

**Source:** All 6 AUDIT-REPORT.md files
**What it says:** Zero border-radius violations, zero box-shadow violations, zero drop-shadow violations confirmed across all 6 AD pages by independent perceptual auditors (not programmatic scans). This is a different confirmation method than the comprehensive audit's programmatic 13,000-element sweep.
**Why it matters:** Two independent verification methods (programmatic sweep from comprehensive audit + perceptual observation from PA audit) both confirm zero soul violations. This dual-method confirmation is stronger than either alone.
**Provenance gap:** AD-SYNTHESIS.md mentions zero soul violations but doesn't cite the perceptual audit as a separate confirmation source.
**Classification:** SHOULD ADD -- strengthens soul compliance confidence.

### DM-010: Cold Look Instincts Were Reliable Predictors of Full Analysis

**Source:** All 6 AUDIT-REPORT.md cold look concordance sections
**What it says:** Across all 6 pages, Cold Look (first-impression) verdicts aligned with full analysis outcomes. AD-002's cold look missed the empty Acts IV-V (below fold) but was otherwise reliable. No auditor contradicted their initial instinct during full analysis. The Cold Look protocol is VALIDATED as a reliable initial filter.
**Why it matters:** This validates a key tenet of the perceptual audit methodology: perception-before-analysis produces genuine first impressions.
**Provenance gap:** Not documented in any formal provenance file.
**Classification:** SHOULD ADD -- validates the methodology for CD.

### DM-011: Concordance Tracking Is High-Value for Audit Confidence

**Source:** All 6 AUDIT-REPORT.md files
**What it says:** Findings with 2-auditor concordance were consistently the most important and actionable. Single-auditor findings were often edge cases or subjective. The concordance signal (how many auditors independently flagged the same issue) is a reliable severity indicator.
**Why it matters:** This is a methodological discovery about how to weight audit findings. Two independent confirmations of the same issue is much stronger than one.
**Provenance gap:** Not captured in formal provenance.
**Classification:** SHOULD ADD -- methodology insight for future audits.

### DM-012: Sovereignty Classification of Findings (Systemic vs Sovereign)

**Source:** All 6 AUDIT-REPORT.md sovereignty sections
**What it says:** Each finding was classified as AD-00X SOVEREIGN (unique to that page) or POTENTIALLY SYSTEMIC (may affect other pages). Key systemic patterns: responsive collapse failures, no visual ending, dead space, container width, dark code block contrast. Key sovereign patterns: AD-001 Z-sweep shallowness, AD-003 code truncation in bento cards, AD-004 invisible Open border, AD-005 hub-spoke transition inconsistency.
**Why it matters:** This classification separates template-level bugs from page-level design choices -- critical for CD planning.
**Provenance gap:** Not in formal provenance.
**Classification:** SHOULD ADD -- CD needs the systemic/sovereign distinction.

### DM-013: 768px Is Consistently the Failure Point -- 5 of 8 Findings Worsen

**Source:** All 6 AUDIT-REPORT.md multi-viewport comparison sections
**What it says:** Across all 6 pages, the pattern is consistent: 1440px is the "good" viewport, 1024px is often the "sweet spot" (AD-006), and 768px is where problems concentrate. Responsive collapse failures, text cramping, dead space amplification, and layout persistence all worsen at 768px.
**Why it matters:** 768px is the LOCKED responsive collapse point but many layouts break BEFORE reaching it (AD-006 bento breaks at ~900px). The 768px breakpoint may need revisiting for complex layouts.
**Provenance gap:** The viewport-severity pattern is not synthesized in any formal provenance document.
**Classification:** SHOULD ADD.

### DM-014: Positive Findings Confirmed Across Multiple Auditors

**Source:** All 6 AUDIT-REPORT.md positive findings sections
**What it says:** Key positives confirmed independently by multiple auditors across multiple pages:
- Typography velocity (serif Q / sans A) creates genuine PULSE rhythm
- Header authority (dark full-bleed #1A1A1A with 3px red border) is the strongest element on every page
- Warm palette cohesion (every warm gray, cream, tan reads as one family)
- Q&A conversational rhythm is "genuinely well-designed"
- Each page's personality reads as "Scholarly, Deliberate, Warm"
- Callout system differentiation works (color-coded left borders, 2-zone DNA)
**Why it matters:** These are confirmed STRENGTHS to protect during CD and migration.
**Provenance gap:** AD-SYNTHESIS mentions strengths generally but doesn't cite the perceptual audit's independent confirmation.
**Classification:** SHOULD ADD -- strengthens what to PROTECT.

### DM-015: Border-Weight-as-Confidence Encoding Is AD-004's "Crown Jewel"

**Source:** AD-004 AUDIT-REPORT.md (both auditors)
**What it says:** Both auditors independently identified the border-weight gradient (4px/3px/1px, skipping 2px) as the most innovative and effective design element. "Genuine design innovation" (Alpha). "Strongest and most successful design element... instantly legible and semantically powerful" (Beta).
**Why it matters:** This is the only AD-specific design innovation called a "crown jewel" by independent auditors. It validates AD-F-014 (border-weight gradient as geological encoding) through perceptual evidence, not just structural analysis.
**Provenance gap:** AD-F-014 exists in formal provenance with structural evidence. The perceptual "crown jewel" assessment is not cited.
**Classification:** SHOULD ADD.

### DM-016: AD-004's Spiral Metaphor Is Not Perceptually Achieved

**Source:** AD-004 AUDIT-REPORT.md (LW-2, 2/2 concordance)
**What it says:** Both auditors agree the spiral label is aspirational, not delivered. "The page reads as four stacked horizontal layers, not a spiral" (Beta). "A viewer sees 'stepped left borders,' not 'spiral path'" (Alpha). The GEOLOGICAL metaphor IS delivered effectively; the SPIRAL metaphor is not.
**Why it matters:** This creates a naming/framing tension. AD-F-013 locks "angular spiral = geological strata," which the auditors confirm is correct -- but the page's name ("Spiral") sets expectations that the visual experience doesn't fulfill.
**Provenance gap:** AD-F-013 is in formal provenance but the perceptual non-achievement of the spiral metaphor is not noted.
**Classification:** SHOULD ADD -- CD should be aware of the naming gap.

### DM-017: The "Nuclear Question" Was Not Asked in AD's Formal Audit

**Source:** od-benchmark.md (Section B.7)
**What it says:** OD asked every auditor: "If this OD exploration were the ONLY page a user ever saw from KortAI -- would they understand the identity?" AD had no equivalent single-forcing-question for holistic identity judgment. The PA audit added it (via the v3 skill redesign) but the AD pages were audited without it.
**Why it matters:** The nuclear question is the highest-signal single data point for identity verification. Its absence from AD's formal audit means identity coherence was assessed indirectly, not directly.
**Provenance gap:** AD-AUDIT-SYNTHESIS does not include nuclear question answers.
**Classification:** SHOULD ADD -- methodology gap worth noting.

---

## Category 3: ACCEPTABLE AS-IS -- Knowledge That's Useful but Not Provenance-Worthy

These items contain valuable operational knowledge but are correctly scoped as working artifacts, not provenance chain material.

### DM-018 through DM-032: Individual Finding Details

Per-page findings at the COULD-BE-BETTER level:
- DM-018: AD-001 metadata card monospace voice (LW-03)
- DM-019: AD-001 overview grid non-collapse at 768px (LW-04)
- DM-020: AD-002 tension progress bar looks like broken loading indicator (F-002)
- DM-021: AD-002 code block comment contrast (F-003)
- DM-022: AD-002 Act labels are faint (F-007)
- DM-023: AD-003 orphaned "Configure Typography Tokens" card (CBB-3)
- DM-024: AD-003 TIP callout text stacking at 768px (CBB-2)
- DM-025: AD-004 Open Questions "?" markers oversized (CBB-3)
- DM-026: AD-004 Pull quotes appear inconsistently (CBB-2)
- DM-027: AD-005 progress bar feels foreign (CB-1)
- DM-028: AD-005 red accent color competition (CB-2)
- DM-029: AD-005 hub grid over-promises scope (CB-3)
- DM-030: AD-006 drop cap ceremony fatigue (MF-007)
- DM-031: AD-006 axis indicator bar tonal split (MF-008)
- DM-032: AD-006 callout label inconsistency (MF-009)

These are valuable for fixers but are not identity-level discoveries.

### DM-033 through DM-037: Process Artifacts

- DM-033: Preflight reports (2 copies -- main and scratchpad)
- DM-034: Individual cold look files (16 total across 6 pages)
- DM-035: Individual findings files (19 total, pre-synthesis)
- DM-036: Screenshot directory structure (6 page directories with 200+ PNGs)
- DM-037: Weaver draft files (2 pages had explicit weaver drafts)

These are working artifacts, not provenance material.

---

## Category 4: CONTRADICTIONS -- Knowledge That Conflicts with Existing Provenance

### DM-038: AD-001 Scroll-Triggered Navigation -- Contention Artifact or Real Bug?

**Source:** AD-001 AUDIT-REPORT.md (WNS-01)
**What it says:** Alpha flagged a "scroll-triggered navigation hijack" where JavaScript navigates the browser to other explorations on scroll. Beta did NOT observe it. The synthesizer correctly identified this as a possible Playwright contention artifact.
**Contradiction:** If real, this contradicts the soul rule "No CSS animations implying object movement" (the behavior is JS, not CSS, so technically not a soul violation, but it violates the spirit). The finding was classified as REQUIRING STRUCTURAL VERIFICATION but no formal resolution is documented.
**Status:** UNRESOLVED in formal provenance.
**Classification:** CONTRADICTION -- needs resolution before CD.

### DM-039: AD-002 Two-Column Collapse -- Auditor Factual Discrepancy

**Source:** AD-002 AUDIT-REPORT.md (F-005)
**What it says:** Alpha says the two-column layout "collapses to single-column" at 768px. Beta says it "survives at 768px" with columns getting ~45% width. This is a factual discrepancy about what the page actually does.
**Contradiction:** The LOCKED convention says "all multi-column grids collapse at 768px" (AD-CONV S12.5). If Beta is correct, this is a LOCKED violation. If Alpha is correct, it complies.
**Status:** UNRESOLVED -- requires programmatic verification.
**Classification:** CONTRADICTION -- needs resolution.

### DM-040: Fixer Playwright Usage -- Skill Files Contradict Analysis

**Source:** _skill-evolution/SYNTHESIS.md (Section D1)
**What it says:** team-structure.md (analysis document) says fixers MUST NOT use Playwright (code-only, visual verification in Wave 4). TEAM.md (skill file) says fixers SHOULD use Playwright for before/after screenshots. PROTOCOL.md also says fixers MUST use Playwright.
**Contradiction:** The skill files (PROTOCOL.md + TEAM.md) are internally consistent but contradict the analysis document's recommendation. The analysis argues code-only fixers are architecturally superior (parallel execution, zero contention, independent verification).
**Status:** Noted as "should be resolved before second use" but not resolved.
**Classification:** CONTRADICTION (internal to skill evolution, not provenance chain) -- acceptable as noted.

### DM-041: 7 Human Interventions Required -- Process Not Autonomous

**Source:** failure-analysis.md
**What it says:** The AD perceptual audit pipeline required 7 human interventions costing ~2-3 hours (25-30% of total wall time). Root causes: agents falling back to source-code analysis, lead not synthesizing systemic patterns, plan language too descriptive.
**Contradiction with:** The formal provenance presents AD as a clean pipeline (28 findings, audited, fixed, verified). The informal reality was significantly messier with rework, redone audits, user frustration, and stale agent teams.
**Classification:** CONTRADICTION -- the formal narrative is accurate for OUTPUTS but silent about PROCESS quality.

### DM-042: AD Pages Ship Verdicts -- 2 DO-NOT-SHIP in Raw Audit

**Source:** AD-002 AUDIT-REPORT (DO NOT SHIP), AD-006 AUDIT-REPORT (DO NOT SHIP)
**What it says:** AD-002 received DO NOT SHIP (empty Acts IV-V). AD-006 received DO NOT SHIP (scroll-reveal hides content + bento collapse). AD-001, AD-003, AD-004, AD-005 received SHIP WITH CONCERNS.
**Contradiction with:** The formal provenance (STAGE-HEADER.md) says "6 explorations built, 28 findings produced, audited by 24+ agents, all fixes applied." This implies all pages are shippable. The raw verdicts show 2 of 6 were initially un-shippable.
**Why it matters:** The narrative of "all fixes applied" suggests the DO-NOT-SHIP issues were resolved. But the specific resolutions are not documented in formal provenance. Were Acts IV-V of AD-002 populated? Was AD-006's scroll-reveal converted to progressive enhancement?
**Classification:** CONTRADICTION -- formal provenance is accurate but incomplete.

---

## Category 5: METHODOLOGY DARK MATTER -- The Skill Evolution Knowledge

This is the largest single body of dark matter: the **perceptual audit skill evolution** (5 analysis files + 4 skill files = ~5,962 lines) contains knowledge about HOW to audit that is nowhere in the formal provenance chain.

### DM-043: The Three-Layer Architecture (Binary Gates -> Structured Judgment -> Free Perception)

**Source:** skill-redesign.md (Section D), od-benchmark.md (Section F.5)
**What it says:** The v3 skill architecture separates auditing into three layers:
1. **Binary Gates** (automated, 100% compliance): Playwright alive? Screenshots exist? Perceptual language used?
2. **Structured Judgment** (bounded options, ~80% compliance): Cold Look verdict, Ship verdict, Severity classification
3. **Free Perception** (the skill's core value): Squint tests, named problems, soul discoveries

This ordering (binary FIRST, then judgment, then perception) is a significant methodological innovation. Layer 3 is PROTECTED by Layers 1 and 2.
**Provenance gap:** Not in any formal provenance document.
**Classification:** SHOULD ADD -- this methodology is transferable to CD audits.

### DM-044: The Metacognition Principle -- "Binary Rules Achieve 100% Agent Compliance; Judgment Rules Achieve ~0%"

**Source:** MEMORY.md, od-benchmark.md, skill-redesign.md
**What it says:** The single most important architectural principle discovered across 6 agent teams and 100+ agents: binary rules (YES/NO, PASS/FAIL) achieve near-perfect agent compliance. Judgment rules ("is this good enough?") achieve near-zero compliance without human intervention.
**Why it matters:** This principle should inform ALL future agent team design, not just perceptual audits. It's a meta-insight about LLM agent architecture.
**Provenance gap:** Exists only in MEMORY.md and skill evolution analysis files.
**Classification:** SHOULD ADD -- meta-architectural principle with broad applicability.

### DM-045: OD vs AD Process Comparison -- 10 Transferable Patterns

**Source:** od-benchmark.md (Section E)
**What it says:** 10 specific patterns that made OD audits succeed with near-zero human intervention while AD required 7 interventions: (1) wave separation for Playwright, (2) cross-file consistency agent, (3) programmatic verification gate, (4) independent fresh-eyes agent, (5) nuclear forcing question, (6) batch processing, (7) font-loading guard, (8) inversion test for fixes, (9) real-time weaver, (10) nuclear forcing question.
**Provenance gap:** Not in formal provenance.
**Classification:** SHOULD ADD -- process improvement knowledge.

### DM-046: 7 Binary Validation Gates Designed from Failure Evidence

**Source:** team-structure.md, skill-redesign.md, GATES.md
**What it says:** 7 gates designed from specific failure modes: (1) Playwright alive, (2) screenshot exists, (3) cold look locked (temporal firewall), (4) perceptual language (contamination check), (5) systemic synthesis (after 3+ pages), (6) fix trigger (proactive when DO-NOT-SHIP), (7) independent verification. Each gate traces to a specific intervention that would have been prevented.
**Provenance gap:** Not in formal provenance.
**Classification:** SHOULD ADD -- operationally significant.

### DM-047: The Meta-Lesson -- "The System Passed Every Structural Check While the Experience Was Broken"

**Source:** failure-analysis.md (Section H)
**What it says:** "The perceptual audit process suffered from the same failure mode it was designed to detect: the system passed every structural check while the experience was broken." The audit plan was structurally complete (28 questions, 23 anti-patterns, 7 enrichment layers) but agents still fell back to source-code analysis because no binary gate checked for screenshots. The parallel to the design audit is exact: AD pages had correct tokens, fonts, soul compliance -- and 40% of the viewport was wasted cream margins.
**Why it matters:** This is a profound recursive insight: the audit methodology had the same blind spot as the design it was auditing. "Validate what matters most, not what's most comprehensive."
**Provenance gap:** Exists only in informal failure analysis.
**Classification:** SHOULD ADD -- the self-referential nature makes this a significant discovery about the entire pipeline's epistemology.

---

## Summary Statistics

| Category | Count | Lines of Source Material |
|----------|-------|------------------------|
| MUST ADD | 7 | ~1,200 lines across 6 audit reports |
| SHOULD ADD | 17 | ~3,500 lines across audit reports + skill evolution |
| ACCEPTABLE AS-IS | 20 | ~5,000 lines of individual findings/process artifacts |
| CONTRADICTIONS | 5 | ~800 lines across audit reports + skill evolution |
| **TOTAL** | **47** | **~10,500 lines** (estimated, with overlap) |

---

## Priority Ranking for Formalization

### Immediate (Block CD if not resolved)

1. **DM-001** -- Lock-vs-lock conflict (S12.5 vs AD-F-009) resolution
2. **DM-002** -- Scroll-reveal progressive enhancement resolution
3. **DM-003** -- Container width convention update (860 -> 1100px)
4. **DM-042** -- Ship verdict resolutions (were DO-NOT-SHIP issues fixed?)

### High (Should be in provenance before CD begins)

5. **DM-004** -- Template-level footer/capstone requirement
6. **DM-005** -- Breathing zone ceiling (<=25%)
7. **DM-008** -- Lock sheet classification system
8. **DM-006** -- Perceptual validation of AD-F-023 (ATTENTION TOPOLOGY)
9. **DM-007** -- Internal quality dialect within pages

### Medium (Enriches CD execution)

10. **DM-012** -- Sovereignty classification (systemic vs sovereign)
11. **DM-013** -- 768px viewport failure pattern
12. **DM-014** -- Confirmed positive findings to protect
13. **DM-043** -- Three-layer audit architecture
14. **DM-044** -- Binary rule compliance principle
15. **DM-047** -- Meta-lesson (structural checks vs experiential quality)

### Low (Record for posterity)

16. **DM-009** through **DM-011** -- Methodological validations
17. **DM-015** through **DM-017** -- Per-page enrichments
18. **DM-038** through **DM-041** -- Unresolved contradictions
19. **DM-045**, **DM-046** -- Process improvement details

---

## Recommendation

The 7 MUST-ADD items represent knowledge that WILL affect CD execution if not formalized. Four of them (DM-001, DM-002, DM-003, DM-042) are potentially CD-BLOCKING -- they describe convention conflicts, unresolved ship verdicts, and updated conventions that CD agents need to know about.

The perceptual audit was a second, deeper quality pass that the formal provenance chain currently treats as if it didn't happen. The AD-AUDIT-SYNTHESIS.md documents the FIRST audit (build-time, ~47 items from 23 reports). The SECOND audit (perceptual, 6 reports with ~60 deduplicated findings from independent auditors using a different methodology) produced knowledge that is invisible to any agent reading only the formal chain.

The skill evolution analysis (DM-043 through DM-047) represents a significant body of meta-architectural knowledge about how to run effective agent teams. This knowledge is transferable beyond perceptual auditing -- it applies to ANY multi-agent pipeline. Its absence from the formal chain means each future team must re-discover these patterns.

---

*Dark matter analysis complete. 60+ informal files analyzed (~15,000+ lines). 47 dark matter items identified and classified. 7 MUST ADD, 17 SHOULD ADD, 20 ACCEPTABLE AS-IS, 5 CONTRADICTIONS.*

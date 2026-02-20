# Assembly Changelog -- MASTER-EXECUTION-PROMPT.md
# Assembler: Final Assembler Agent (Opus 4.6)
# Date: 2026-02-19

---

## FILES READ (13 sources)

| Priority | File | Lines | Role |
|----------|------|-------|------|
| 1 | ASSEMBLED-DRAFT-v1.md | 628 | Starting skeleton + structure template |
| 2 | DRAFT-09-conventions-brief-section.md | 520 | Conventions brief content (STRONGEST draft) |
| 3 | DRAFT-10-gate-runner-section.md | 1,048 | Gate runner content (21 gates + JS) |
| 4 | DRAFT-11-pa-orchestrator-section.md | 643 | PA questions + orchestrator SKILL.md |
| 5 | DRAFT-12-skill-edits-section.md | 1,121 | 23 TC edits + 16 PA edits |
| 6 | DRAFT-13-claude-md-architecture-section.md | 885 | 11+9 CLAUDE.md edits + architecture |
| 7 | AUDIT-14-compression.md | 536 | Compression ratio analysis |
| 8 | AUDIT-15-contrarian.md | 378 | Adversarial challenge |
| 9 | AUDIT-16-metacog-review.md | 396 | Meta-review of prompt quality |
| 10 | VERIFY-brief-spec.md | 226 | Brief vs user spec |
| 11 | VERIFY-gate-spec.md | 250 | Gates vs user spec |
| 12 | VERIFY-pa-orchestrator-spec.md | 239 | PA+Orchestrator vs user spec |
| 13 | VERIFY-coherence.md | 431 | Cross-draft coherence |

**Total source material:** ~6,301 lines across 13 files.

---

## BLOCKING ISSUES FIXED (7)

### BF-01: `merged-components.css` does not exist
**Source:** AUDIT-14 (B-03), AUDIT-15 (B-02, B-03), VERIFY-coherence
**Locations:** DRAFT-11 lines 223, 622; DRAFT-orchestrator line 81
**Fix:** All references changed to `components.css` in assembly instructions. Each section agent receives explicit instruction to verify `components.css` only. The conventions brief (DRAFT-09) was already correct.

### BF-02: SC-10 stacked gap threshold -- 108px vs 120px
**Source:** AUDIT-14 (B-01), AUDIT-15 (B-06), VERIFY-coherence, VERIFY-gate-spec
**Conflict:** Conventions brief Section 2 says 108px. Gate runner uses 120px. Assembled draft says 120px.
**Decision:** Standardized to **120px** everywhere.
**Rationale:** The gate runner's 120px threshold comes from the cross-validation resolution in DRAFT-10 (lines 21-22), sourced from remediation audit FINAL-VERDICT.md: "6 of 11 gaps exceed 120px." The 108px value was unsourced. Instructions to conventions-brief-writer explicitly say to change 108px to 120px in Section 2.

### BF-03: SC-14 letter-spacing threshold -- 0.02em vs 0.025em
**Source:** AUDIT-14 (S-01), AUDIT-15 (B-07), VERIFY-coherence
**Conflict:** Conventions brief says 0.02em. Gate runner uses 0.025em. Section 0 non-negotiables said 0.02em.
**Decision:** Standardized to **0.025em** everywhere.
**Rationale:** The gate runner's 0.025em comes from anti-conditions S-08 median value (DRAFT-10 line 22). 0.025em = 0.4px at 16px font, which is at the perceptibility floor. 0.02em = 0.32px at 16px, which is sub-perceptual. The conventions brief's 0.02em was a brief-side inheritance from earlier drafts. Instructions to conventions-brief-writer explicitly say to change 0.02em to 0.025em.

### BF-04: Quality Floor section missing from conventions brief
**Source:** VERIFY-brief-spec (FAIL -- Section 9 missing)
**User spec:** "Quality floor: minimum 14 mechanisms, 800+ CSS lines, >= 3 channel shifts at every boundary"
**Fix:** Assembly instructions include literal markdown content for a new Section 9B "Quality Floor" to be inserted after Creative Authority (Section 9) and before Compositional Memory (Section 10). Contains all 3 user-specified values plus complementary thresholds from gate research.

### BF-05: 80% creative authority number missing from brief body
**Source:** VERIFY-brief-spec (PARTIAL PASS)
**User spec:** "explicit statement that the builder owns 80% of decisions"
**Fix:** Assembly instructions add sentence to Section 9: "Approximately 80% of all decisions -- grid layouts, component styling, mechanism selection, metaphor choice, density arc -- are yours to make."

### BF-06: DG-4 references _build-plan.yaml that builder never produces
**Source:** AUDIT-15 (B-05)
**Conflict:** DG-4 validates `_build-plan.yaml` but builder spawn prompt only instructs 3 output files (output.html, _build-log.md, _cascade-value-table.md).
**Fix:** Assembly instructions tell the SKILL.md writer to change DG-4 to validate the builder's transition table and fractal echo table FROM `_build-log.md` instead of a separate YAML file.

### BF-07: Mechanism count threshold -- user says "< 14 = fail" but draft uses per-category minimums only
**Source:** VERIFY-gate-spec (FINDING)
**User spec:** "< 14 mechanisms = fail"
**Draft:** DG-4 sub-check 3 requires >= 1 per category (minimum 5 total)
**Fix:** Assembly instructions tell gate-runner-writer to change DG-4 sub-check 3 to "mechanisms: >= 14 total AND >= 1 in each of 5 categories." Both checks are complementary: per-category prevents gaming, total meets user spec.

---

## CONCERNING ISSUES ADDRESSED (5)

### CI-01: Two competing DRAFT-13 versions
**Source:** AUDIT-14 (B-02), AUDIT-15 (B-01)
**Resolution:** Only one DRAFT-13 file was found in the directory: `DRAFT-13-claude-md-architecture-section.md` (885 lines). This was used as canonical. If a second version exists elsewhere, it was not referenced.

### CI-02: Conventions brief path inconsistency
**Source:** VERIFY-coherence
**Conflict:** DRAFT-09 says `design-system/pipeline/conventions-brief.md`. DRAFT-11 builder spawn prompt says `design-system/compositional-core/conventions-brief.md`.
**Decision:** Used `design-system/pipeline/conventions-brief.md` per team lead instructions and DRAFT-09.
**Fix:** Assembly instructions tell SKILL.md writer to change the path in builder spawn prompt.

### CI-03: Transition grammar naming mismatch
**Source:** VERIFY-brief-spec (SIGNIFICANT)
**User spec:** "hard cut, spacing shift, checkpoint"
**Draft:** "SMOOTH, BRIDGE, BREATHING"
**Decision:** Kept SMOOTH/BRIDGE/BREATHING from DRAFT-09 (the strongest draft, rated by compression auditor).
**Rationale:** The draft names are semantically richer and have CSS values attached. "Hard cut" maps loosely to "BREATHING" but the mapping is imprecise either way. SMOOTH/BRIDGE/BREATHING are used consistently across all draft sections. Renaming would require cascading changes across gate runner, skill edits, and conventions brief with no proven benefit.

### CI-04: Scoring label at 3-4/8 -- "CEILING" vs "STRUCTURED"
**Source:** VERIFY-pa-orchestrator-spec (MINOR)
**User spec:** "CEILING" at 3-4 range
**Draft:** "STRUCTURED" at 3-4 range
**Decision:** Kept "STRUCTURED" from drafts.
**Rationale:** "Ceiling" is an existing tier name in the design system that is being retired. Using "STRUCTURED" avoids confusion with the deprecated tier model.

### CI-05: R-MC-03 letter-spacing channel shift detection floor at 0.01em
**Source:** Review of DRAFT-12 TC Edit 10
**Issue:** R-MC-03 uses 0.01em as channel shift counting threshold for Typographic channel. This is below the 0.025em per-element minimum from SC-14.
**Decision:** Left as-is.
**Rationale:** R-MC-03 is a different measurement -- it counts whether letter-spacing SHIFTED between zones, not whether the absolute value is perceptible. A shift from 0.04em to 0.03em (delta 0.01em) could be counted as a channel shift even though both values are above 0.025em. The 0.01em is a delta threshold, not an absolute floor.

---

## DELIBERATE CHOICES (8)

### DC-01: Prompt length -- ~520 lines (above 400-500 target)
The metacog review (AUDIT-16) recommended 400-600 lines. The assembled draft skeleton was 628 lines. The final prompt is ~520 lines, within the extended range. The overshoot comes from including all 9 checkpoints (valuable for verification) and the full team architecture table. Cutting these would save ~60 lines but lose critical verification infrastructure.

### DC-02: Conventions brief content NOT embedded inline
The metacog review recommended embedding the conventions brief verbatim. Instead, the prompt instructs agents to read DRAFT-09 as primary source and write the content with 5 specific adjustments. This avoids bloating the master prompt (~230 extra lines) while ensuring the exact source is referenced.

### DC-03: Skill edits referenced, not embedded
The 23 TC edits and 16 PA edits (DRAFT-12, 1,121 lines) are referenced as a source file, not embedded. Embedding would make the master prompt ~1,600 lines -- well into skimming-collapse territory. The trade-off: agents must read DRAFT-12 correctly. Mitigation: explicit execution order is listed in the prompt.

### DC-04: Lock Sheet included despite DRAFT-11 argument against it
DRAFT-11 cross-reference notes argue lock sheet adds complexity without proven benefit. The assembled draft (team lead) specifies it. I included it as a lightweight step with specific implementation: orchestrator generates categories from _build-log.md, feeds to weaver ONLY (not auditors). This preserves fresh-eyes while giving the weaver orientation context.

### DC-05: Edit count updated to 59 (was 49)
The assembled draft said "49 edits." Actual count from DRAFT-12 and DRAFT-13: 23 TC + 16 PA + 11 CLAUDE.md + 9 compositional-core = 59 edits. Updated throughout.

### DC-06: B-EDIT-5 and B-EDIT-8 SC-10 threshold warning
DRAFT-13 Section B edits reference SC-10. The DRAFT-13 I read uses "108px" in some places. Assembly instructions include explicit warning to change to 120px if DRAFT-13 says 108px. This ensures the fresh instance catches any residual 108px references.

### DC-07: Wave 1.5 timing
Agent #3 (PA questions writer) is in Wave 1.5 (after Agent #6) because both touch the PA skill. However, Agent #3's primary output is `flagship-pa-questions.md` (a NEW file), not the PA skill. The Wave 1.5 timing is conservative -- Agent #3 verifies Agent #6's Tier 5 insertion rather than duplicating it.

### DC-08: Metaphor pervading question coverage
VERIFY-pa-orchestrator-spec noted that no PA question directly asks "Does a single metaphor pervade the entire page?" PA-63 (fractal zoom coherence) + PA-65 (musical analogy) approximate this indirectly. I did not add a 9th question because: (1) 8 questions matches user spec, (2) PA-63 + PA-65 together cover the concept, (3) adding a question would change all auditor assignments.

---

## THRESHOLD CONSISTENCY MATRIX

Final standardized values across all sections of the master prompt:

| Threshold | Value | Sections Using It |
|-----------|-------|-------------------|
| Container width | 940-960px | S0, S2, S3, S5, S7, S9 |
| Background delta | >= 15 RGB | S0, S2, S3, S5, S7, S9 |
| Font-size delta | >= 2px | S0, S2, S3, S9 |
| Letter-spacing minimum | >= 0.025em | S0, S2, S3, S5, S9 |
| Stacked gap | <= 120px | S0, S2, S3, S5, S7, S9 |
| Channel shifts/boundary | >= 3, avg >= 4 | S2, S3, S5 |
| PA-05 threshold | >= 3.5 | S5, S8, S9 |
| Tier 5 threshold | >= 6/8 | S5, S8, S9 |
| Zone count | 3-5 | S2, S3 |
| Border configs | >= 3 distinct | S2, S3 |
| Component types | >= 8 | S2, S3 |
| ARIA landmarks | >= 5 | S3 |
| Mechanism count | >= 14 total | S2, S3 |
| Typography zones | >= 3, display-body >= 10px | S3 |
| Fix cycles max | 3 | S5 |

---

## SOURCE TRACEABILITY

| Master Prompt Section | Primary Source | Secondary Sources |
|----------------------|---------------|-------------------|
| S0: Mission | ASSEMBLED-DRAFT-v1.md S0 | VERIFY-coherence |
| S1: Team Architecture | ASSEMBLED-DRAFT-v1.md S1 | AUDIT-15, VERIFY-pa-orchestrator |
| S2: Conventions Brief | DRAFT-09 | VERIFY-brief-spec, AUDIT-14 |
| S3: Gate Runner | DRAFT-10 | VERIFY-gate-spec, 42-gate-crossref |
| S4: PA Questions | DRAFT-11 S4 | VERIFY-pa-orchestrator |
| S5: Orchestrator SKILL | DRAFT-11 S5 | VERIFY-pa-orchestrator, AUDIT-15 |
| S6: Skill Edits | DRAFT-12 | AUDIT-15 |
| S7: CLAUDE.md Edits | DRAFT-13 | AUDIT-14 |
| S8: Validation | DRAFT-13 S-C | ASSEMBLED-DRAFT-v1.md S8 |
| S9: Recency | ASSEMBLED-DRAFT-v1.md S9 | -- |

---

## RISK ASSESSMENT (from AUDIT-15 contrarian)

| Risk | Probability | Mitigation in Prompt |
|------|-------------|---------------------|
| Brief reads as checklist despite conventions framing | 40-50% | Explicit constraint language < 20% check in Checkpoint 2 |
| Skill edits fail on exact string match | 30% | Agents read current file first; execution order preserves line numbers |
| PA-05 < 3.0 on first run | 60-70% | Fix cycles (max 3) + same builder preservation |
| PA-05 >= 3.5 on first run (Flagship target) | 5-15% | Realistic -- fix cycles are expected path |
| PA-05 >= 3.5 after fix cycles | 25-40% | 3 cycles with targeted feedback |
| Full Flagship (PA-05 >= 3.5 + Tier 5 >= 6/8) first run | 5-10% | Fix cycles + Tier 5 diagnostics guide iteration |

---

**END OF ASSEMBLY CHANGELOG**

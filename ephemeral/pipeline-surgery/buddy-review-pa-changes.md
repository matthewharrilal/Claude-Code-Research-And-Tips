# Buddy Review: PA File Changes
Date: 2026-02-25
Reviewer: gate-runner-fixer (Opus 4.6)
Scope: pa-guardrails.md, pa-guardrails-weaver.md (new), pa-deployment.md, pa-weaver.md
Changelog: ephemeral/pipeline-surgery/cleanup-pa-files-changelog.md

---

## Methodology

1. Read the changelog to understand intended changes
2. Read all four PA files in full
3. Cross-referenced against the fresh-eyes coherence audit (03-fresh-eyes-coherence.md) and adversarial audit (02-adversarial-audit.md) to verify findings were addressed
4. Searched for stale cross-references (old section numbers), broken links, content lost in transit, pipeline vocabulary leaks, and introduced contradictions

---

## VERDICT: GOOD WITH 5 ISSUES (2 BLOCKING, 3 SIGNIFICANT)

The split is well-executed. The pipeline vocabulary that was leaking to fresh-eyes auditors is now cleanly separated into pa-guardrails-weaver.md. Section renumbering is consistent within each file. The experiential pass positional primacy in pa-deployment.md is correctly implemented. No content was lost in transit.

---

## BLOCKING ISSUES

### B-1: pa-deployment.md Section 3 contradicts pa-guardrails.md Section 6 on auditor inputs

**pa-deployment.md Section 3 (lines 326-329):**
```
The auditor receives ONLY:
1. The rendered page (saved screenshots)
2. The PA questions
3. Nothing else
```

**pa-guardrails.md Section 6 (lines 107-111):**
```
The auditor receives ONLY:
1. The rendered page (saved screenshots)
2. The PA questions (pa-questions.md)
3. The PA guardrails (this file)
4. Nothing else
```

The pa-deployment.md version omits pa-guardrails.md from the auditor input list. Since auditors DO receive the guardrails file (it contains evidence format, completion manifest, assessment language, etc.), **pa-deployment.md is wrong**. Item 3 should be "The PA guardrails (pa-guardrails.md)" and "Nothing else" should be item 4.

This is BLOCKING because the orchestrator reads pa-deployment.md to set up auditor prompts. If the orchestrator follows pa-deployment.md literally, auditors would NOT receive the guardrails file, breaking evidence format and completion manifest requirements.

**Fix:** Add "3. The PA guardrails (pa-guardrails.md)" to pa-deployment.md Section 3 and renumber "Nothing else" to 4.

### B-2: artifact-orchestrator.md line 473 references "pa-guardrails.md Section 11" (now Section 6)

**Current text:**
```
EXPLICIT EXCEPTION to the fresh-eyes principle (pa-deployment.md Section 3,
pa-guardrails.md Section 11). This is the ONLY permitted context injection into
```

**Should say:** `pa-guardrails.md Section 6`

This is BLOCKING because the orchestrator agent following this cross-reference would look for a "Section 11" that no longer exists in pa-guardrails.md (it was renumbered to Section 6 during the split). The agent would either fail to find it or read the wrong section.

**Note:** This file is owned by the orchestrator-recipe-fixer agent (task #3), not the pa-fixer. But the PA split introduced this breakage, so it should be flagged here.

---

## SIGNIFICANT ISSUES

### S-1: pa-guardrails.md title is stale after the split

**Current title (line 1):**
```
# PA GUARDRAILS — Anti-Patterns, Quality Bars, Scoring Thresholds
```

After the split, the anti-patterns (Section 7), quality bars (Tier 5 scoring, Section 6), and scoring thresholds (S-09, Section 9) all moved to pa-guardrails-weaver.md. The title no longer describes the file's actual content.

**Should say:** `# PA GUARDRAILS — Evidence Format, Assessment Language, Fresh-Eyes Principle` or similar reflecting the actual remaining content (Sections 1-6).

### S-2: pa-guardrails-weaver.md is not registered in MANIFEST.md, routing tables, or verification scripts

The new file `pa-guardrails-weaver.md` is only referenced from pa-guardrails.md line 5. It is not:
- Listed in MANIFEST.md (Appendix D file registry, Section 3 routing table)
- Listed in gate-manifest.json files section
- Included in pipeline-structural-manifest.md section checks
- Checked by verify-pipeline-structure.js

This means the structural verification system (164 checks) does not know this file exists. The orchestrator reading MANIFEST.md would not know to route it to the Weaver.

**Fix:** Register pa-guardrails-weaver.md in MANIFEST.md (routing table + Appendix D), gate-manifest.json files section, and the structural verification artifacts.

### S-3: Anti-pattern table is now duplicated in THREE places (was TWO)

Before the split: pa-guardrails.md Section 7 + pa-weaver.md Section 6.1
After the split: pa-guardrails-weaver.md Section 3 + pa-weaver.md Section 6.1

The original redundancy between weaver and guardrails was identified as wasteful (fresh-eyes audit M-2). The split correctly removed it from the auditor-facing guardrails. But now it exists in TWO weaver-facing files. An update to one table risks divergence with the other.

**Recommendation:** Consider whether pa-guardrails-weaver.md Section 3 should instead say "See pa-weaver.md Section 6.1 for the full anti-pattern table" to avoid maintaining two copies. Or accept the redundancy and document that pa-weaver.md is the authoritative source.

---

## CROSS-REFERENCE ISSUES IN OTHER FILES (not PA-owned, but caused by PA changes)

These are in files NOT owned by the pa-fixer, but introduced by the PA split:

| File | Line | Stale Reference | Should Be |
|------|------|-----------------|-----------|
| gate-runner-core.js | 1560 | `pa-weaver.md Section 5.0` | `pa-weaver.md Section 4.5` |
| gate-runner-core.js | 1609 | `See pa-weaver.md Section 5.0` | `See pa-weaver.md Section 4.5` |
| gate-manifest.json | 131 | `pa-weaver.md Section 5.0` | `pa-weaver.md Section 4.5` |
| artifact-orchestrator.md | 473 | `pa-guardrails.md Section 11` | `pa-guardrails.md Section 6` |
| verify-pipeline-structure.js | 154 | `Section 5.0: PRIORITY OVERRIDE` | `Section 4.5` |
| verify-pipeline-structure.js | 161 | `Section 11: FRESH-EYES PRINCIPLE` | `Section 6` |
| verify-pipeline-structure.js | 163 | `Section 9: S-09 STACKING CHECK` | Now in pa-guardrails-weaver.md Section 5 |
| verify-pipeline-structure.js | 467 | `Section 11: FRESH-EYES PRINCIPLE` | `Section 6` |
| pipeline-structural-manifest.md | 198-204 | All old section numbers (5-11) | New numbers or redirected to pa-guardrails-weaver.md |
| pipeline-structural-manifest.md | 619 | `pa-guardrails.md: Section 11` | `Section 6` |

**Note:** The gate-runner-core.js and gate-manifest.json references are in MY files. I will fix these immediately after submitting this review.

---

## CONTENT TRANSIT VERIFICATION

### What moved from pa-guardrails.md to pa-guardrails-weaver.md

| Original Section | New Location | Content Status |
|-----------------|-------------|----------------|
| Section 5 (Tier 1 Equivalent Questions) | Weaver Section 1 | COMPLETE - content matches |
| Section 6 (Tier 5 Provisional Scoring Note) | Weaver Section 2 | COMPLETE - content matches |
| Section 7 (PA-Assessed Anti-Patterns, 8 rows) | Weaver Section 3 | COMPLETE - all 8 APs present |
| Section 8 (Revision Degradation Warnings, 5 rows) | Weaver Section 4 | COMPLETE - all 5 warnings present |
| Section 9 (S-09 Stacking Check) | Weaver Section 5 | COMPLETE - thresholds preserved |
| Section 10 (Cross-Viewport Comparison) | Guardrails Section 5 (stayed) | CORRECT - auditor-appropriate content |
| Section 11 (Fresh-Eyes Principle) | Guardrails Section 6 (stayed) | CORRECT - auditor-appropriate content |

No content was lost in transit. All moved sections are present in their new locations with content integrity.

---

## SECTION NUMBERING CONSISTENCY

### pa-guardrails.md (auditor-facing)
Sections: 1, 2, 3 (with 3.1), 4, 5, 6 (with 6.1, 6.2) -- CONSISTENT, no gaps

### pa-guardrails-weaver.md (new)
Sections: 1, 2, 3, 4, 5 -- CONSISTENT, no gaps

### pa-deployment.md
Sections: 0 (with 0.1-0.4), 1 (with 1.1-1.5), 2 (with 2.1-2.4), 3 (with 3.1-3.2), 4 -- CONSISTENT

### pa-weaver.md
Sections: 0 (with 0.1-0.4), 1, 2 (with 2.1-2.5), 3 (with 3.1), 4 (with 4.1-4.4), 4.5, 5 (with 5.1-5.4), 6 (with 6.1-6.2), 7 (with 7.1-7.2), 8, 9 (with 9.1-9.3) -- CONSISTENT. The 4.5 insertion is clean.

---

## PIPELINE VOCABULARY LEAK CHECK (pa-guardrails.md)

Searched for: channel, mechanism, tier, COMPOSED, FLAGSHIP, CEILING, FLOOR, anti-pattern, AP-0x, stacking check, degradation

**Results:** Zero pipeline vocabulary in operational sections. The only matches are:
- Line 1 (title): "Anti-Patterns, Quality Bars, Scoring Thresholds" -- STALE TITLE (see S-1)
- Line 5 (split description): Mentions what was moved -- acceptable meta-description
- Lines 96-103 (fresh-eyes section): Lists what NOT to provide -- these are anti-examples, correct usage

**Verdict:** The split successfully removed all pipeline vocabulary from auditor-facing content.

---

## CHANGES WELL-EXECUTED

1. **Experiential Pass positional primacy** in pa-deployment.md Section 2.4 workflow -- Step 2 is now "Experiential Pass (Section 0)" before analytical work. Correct.
2. **Relocation notices removed** -- pa-deployment.md Section 2.5 and pa-weaver.md Section 4.5 notices are gone. Clean.
3. **Section 5.0 renumbered to 4.5** in pa-weaver.md -- resolves the numbering collision flagged in M-5.
4. **Priority Override added to pa-deployment.md Section 4** -- auditors now see the priority override rule directly. Correct.
5. **Cross-viewport method deduped** -- removed from pa-deployment.md Section 1.2.1, remains in pa-guardrails.md Section 5. Correct routing.

---

## RECOMMENDED FIX PRIORITY

1. **B-1** (pa-deployment.md Section 3 missing guardrails from auditor input list) -- MUST FIX
2. **B-2** (orchestrator.md Section 11 reference) -- MUST FIX (orchestrator-recipe-fixer's file)
3. **S-2** (register pa-guardrails-weaver.md in MANIFEST + routing) -- SHOULD FIX (manifest-fixer's scope)
4. **S-1** (stale title) -- SHOULD FIX
5. **Cross-reference table** -- gate-runner-core.js and gate-manifest.json `Section 5.0` -> `4.5` (my files, I will fix)
6. **S-3** (triple anti-pattern table) -- LOW PRIORITY, accept redundancy for now

---

*End of buddy review.*

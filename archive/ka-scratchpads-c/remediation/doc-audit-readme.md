# Document Audit Report: DESIGN-SYSTEM README and Key Onboarding Documents

**Auditor:** auditor-readme agent
**Date:** 2026-02-08
**Scope:** 7 files audited against 3-layer provenance architecture and current pipeline state

---

## Files Audited

| # | File | Exists | Size |
|---|------|--------|------|
| 1 | DESIGN-SYSTEM/README.md | YES | ~2053 lines (109KB) |
| 2 | DESIGN-SYSTEM/QUICK-START.md | YES | ~243 lines |
| 3 | DESIGN-SYSTEM/BACKBONE.md | YES | Large (first 150 lines read) |
| 4 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | YES | Large |
| 5 | DESIGN-SYSTEM/FINDINGS-INDEX.md | **DOES NOT EXIST** | N/A |
| 6 | DESIGN-SYSTEM/components/OVERVIEW.md | YES | ~185 lines |
| 7 | DESIGN-SYSTEM/guides/migration-guide.md | YES | ~265 lines |

---

## CRITICAL FINDING: OD Stage Status is Stale in README.md

**Location:** README.md line 406
**Current text:** `### Stage 3 — Organization (OD) — IN PROGRESS`
**Actual state:** OD is COMPLETE. 6 explorations built, audited (17-agent granular adversarial audit), fixed (16/16 fixes), and provenance chain formalized with 17 OD-F findings.

This is the single most impactful error. The README is the "philosophical nucleus" (its own words) and it tells readers OD hasn't happened yet. Every description of OD in Part II uses future tense ("What it will do", "What it will produce") while OD has been done for weeks.

**Lines affected:** 406-414, and numerous references throughout Parts II, III, IV that describe OD in future/hypothetical terms.

### Related stale content in README:

| Line | Current Content | Should Be |
|------|----------------|-----------|
| 406 | "Stage 3 — Organization (OD) — IN PROGRESS" | "Stage 3 — Organization (OD) — COMPLETE (~34.8/40 avg)" |
| 407-408 | "What it will do: Build 6 organizational explorations..." | Past tense: "Built 6 organizational explorations..." |
| 410 | "What it consumes:" (future tense throughout) | Past tense |
| 413-414 | "What it will produce: 6 validated organizational patterns..." | "Produced: 6 validated patterns, 17 OD-F findings, HANDOFF-OD-TO-AD.md..." |
| 56 | OD-F-007/008/009 described as "HYPOTHETICAL" in inline header | These are now REAL findings (though the specific IDs differ from actual — see below) |

**Note:** BACKBONE.md line 110 is ALREADY CORRECT: `Stage 3: ORGANIZATION (OD) — COMPLETE (~34.8/40 avg)` with full OD-F findings listed. So there is a contradiction between README.md (stale) and BACKBONE.md (current).

---

## Assessment Per File

### 1. README.md (THE KORTAI DESIGN MIND)

**Does it explain the 3-layer architecture?**
PARTIALLY. It describes:
- Layer 1 (Inline Threading): YES, well documented at line 492 and throughout Part III (references "253 files" with inline threading sections as of Phase 2B)
- Layer 2 (Light Provenance Sections): NO. Phase 2D added 244 light provenance sections but the README makes zero mention of this. The README only knows about Phase 2B.
- Layer 3 (Formal Provenance Chain): YES, extensively documented in Part III (seven structures, two traversals, stage folder layout)

**Missing:** The README does not describe the 3-layer architecture as a coherent model. It doesn't use the term "3-layer" or present the layers as a unified system. A fresh agent reading this would understand inline headers and the formal chain but would have no idea that light provenance sections exist.

**Is pipeline status current?**
NO. OD is described as "IN PROGRESS" (line 406). The file correctly shows AD as "PENDING" and CD as "PENDING".

**Are there false claims?**
- Lines 56-57 of inline header: OD-F-007/008/009 are called "HYPOTHETICAL" but this is now outdated — OD work IS completed. However, the actual OD findings use different IDs (OD-F-001 through OD-F-013 + OD-F-MP-001), so the specific hypothetical IDs used as examples in the README body (OD-F-007/008/009) happen to overlap with real finding IDs. This creates confusion.
- Line 109 of inline header: "OD-F-007/008/009 are hypothetical examples used to illustrate the compounding pipeline. When actual OD work is completed, these examples should be validated or replaced with real finding IDs." This is now actionable — OD work IS completed.
- The README uses "Cormorant Garamond" for Soul Piece #2 (lines 627, 729, 1147) but the actual design system uses "Instrument Serif" per QUICK-START.md and all token files. This font name inconsistency appears in multiple exploration protocol examples within the README.
- Line 398: "DD-F-001 through DD-F-[N]" — the [N] placeholder was never resolved. Actual count is DD-F-018.

**What updates are needed?**
1. **CRITICAL:** Update OD stage description from "IN PROGRESS" to "COMPLETE" with actual results
2. **CRITICAL:** Add description of Phase 2D light provenance sections (Layer 2)
3. **HIGH:** Replace hypothetical OD-F-007/008/009 examples with real OD findings
4. **HIGH:** Fix "Cormorant Garamond" references to "Instrument Serif"
5. **HIGH:** Add the 3-layer architecture concept explicitly (even a brief section)
6. **MEDIUM:** Update OD-related content throughout Parts II-IV from future to past tense
7. **MEDIUM:** Resolve DD-F-[N] placeholder to DD-F-018
8. **MEDIUM:** Add mention of OD provenance chain remediation (18-agent team, 5 waves)
9. **LOW:** Update "253 files" references to "490 files" (253 Phase 2B + 244 Phase 2D = ~490)
10. **LOW:** Add mention of zoom levels concept (pipeline > stage > finding > file > forward guidance)

**Does it properly onboard a fresh agent?**
MOSTLY YES for philosophy and reasoning. The 9-Part structure is excellent for understanding WHY the system exists. But a fresh agent would be seriously confused about the current state of OD (thinks it hasn't happened) and wouldn't know about Light Provenance Sections at all. The three reading modes (First Read, Task Execution, Context Recovery) are well-designed and would help a fresh agent orient.

---

### 2. QUICK-START.md

**Does it explain the 3-layer architecture?**
NO. This is a purely practical CSS/token reference. It correctly doesn't try to explain architecture — that's not its purpose.

**Is pipeline status current?**
N/A — no pipeline status mentioned.

**Are there false claims?**
NO. Token values appear correct:
- border-radius: 0 (correct)
- box-shadow: none (correct)
- Font stack: Instrument Serif, Inter, JetBrains Mono (correct)
- Colors match design token standards

**What updates are needed?**
NONE for the file's purpose. This is clean and functional.

**Does it properly onboard a fresh agent?**
YES for its scope (getting CSS tokens applied quickly). Does exactly what it promises.

---

### 3. BACKBONE.md

**Does it explain the 3-layer architecture?**
NO explicitly, but it IS the master narrative and correctly shows OD as COMPLETE.

**Is pipeline status current?**
YES. The pipeline diagram (lines 78-133) shows:
- Stage 3: ORGANIZATION (OD) — COMPLETE (~34.8/40 avg)
- OD-F-001 to OD-F-013 + OD-F-MP-001 documented
- OD-F-005 crown jewel: "Organization IS Density"
- Stage 4: AXIS (AD) — PENDING
- Stage 5: COMBINATION (CD) — PENDING

This is accurate and current.

**Are there false claims?**
The inline header (line 19) says "Stage 4 (AD) and Stage 5 (CD) sections are placeholders awaiting future work" — this is correct.

**What updates are needed?**
1. **MEDIUM:** Could mention the 3-layer provenance architecture concept
2. **LOW:** Could reference the OD provenance chain files that now exist in stage-3-organization-od/

**Does it properly onboard a fresh agent?**
YES for understanding the pipeline narrative and current state.

---

### 4. PIPELINE-MANIFEST.md

**Does it explain the 3-layer architecture?**
NO — this is a finding registry, not an architecture document.

**Is pipeline status current?**
PARTIALLY verified (only first 80 lines read). The inline header is dated 2026-02-06 and references OD findings as part of the pipeline. The actual manifest sections would need verification against the full set of OD-F findings (OD-F-001 through OD-F-013 + OD-F-MP-001).

**What updates are needed?**
1. **VERIFY:** Section E (finding disambiguation) — ensure R3-023 vs R3-036 disambiguation is correct per remediation commit
2. **VERIFY:** Ensure all 17 OD-F findings are registered

---

### 5. FINDINGS-INDEX.md — DOES NOT EXIST

This file was requested for audit but does not exist at `DESIGN-SYSTEM/FINDINGS-INDEX.md` or any nearby location. The closest equivalent is:
- `PIPELINE-MANIFEST.md` (master finding registry)
- `provenance/stage-3-organization-od/OD-outbound-findings.md` (OD-specific)
- `provenance/EXT-RESEARCH-REGISTRY.md` (external research)

**Recommendation:** Either create this as a lightweight index pointing to the above files, or document that PIPELINE-MANIFEST.md serves this purpose.

---

### 6. components/OVERVIEW.md

**Does it explain the 3-layer architecture?**
NO — this is a component catalog, not an architecture document.

**Is pipeline status current?**
YES — the 11 components with soul scores, character names, and families are documented. No pipeline status claims.

**Are there false claims?**
POTENTIAL: The velocity/temperature/weight properties are noted in the inline header as "enrichment layer added during DESIGN-SYSTEM creation, not in design-extraction source." This is honest and transparent.

**What updates are needed?**
NONE — this file is clean and accurate for its purpose.

**Does it properly onboard a fresh agent?**
YES for component understanding. The catalog is clear, the families are well-organized, and "When to Use Each Component" table is practical.

---

### 7. guides/migration-guide.md

**Does it explain the 3-layer architecture?**
NO — this is a practical migration guide.

**Is pipeline status current?**
PARTIALLY. Line 164-165 references density patterns including "WAVE" which is NOT a validated pattern name. The validated patterns are: PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL. "WAVE" does not appear in density-patterns.md or BACKBONE.md.

**Are there false claims?**
- **Line 165:** "Long-form | WAVE" — WAVE is not a validated density pattern. Should be TIDAL (the river/wave flow pattern).
- **Line 264:** "DD-002 is gold standard" — DD-006 (FRACTAL, 36/40) scored higher than DD-002 (CRESCENDO, 35/40). DD-002 is excellent but DD-006 is the actual highest-scoring exploration.

**What updates are needed?**
1. **HIGH:** Fix "WAVE" to correct pattern name (likely TIDAL)
2. **LOW:** Clarify DD-002 vs DD-006 as reference standard
3. **LOW:** Could add OD patterns to the density pattern selection guidance since OD is now complete

**Does it properly onboard a fresh agent?**
YES for the practical migration task. Step-by-step is clear, checklists are useful, common pitfalls are well-documented.

---

## Cross-Cutting Findings

### Finding A: No Document Explains the 3-Layer Architecture

None of the 7 audited files explicitly describe the 3-layer provenance architecture:
- **Layer 1: Inline Threading Headers** (Phase 2B) — 490 files with per-file metadata
- **Layer 2: Light Provenance Sections** (Phase 2D) — 244 files with lighter metadata
- **Layer 3: Formal Provenance Chain** (provenance/ directory) — Curated narrative documents

The README comes closest by describing inline headers and the formal chain, but never mentions Phase 2D light sections and never presents all three as a unified architecture.

**Recommendation:** Add a concise section to README.md (or a new brief document) explaining the 3-layer model and what each layer answers.

### Finding B: Zoom Levels Not Documented

The concept of zoom levels (pipeline > stage > finding > file > forward guidance) is implicit in the provenance chain description but never explicitly articulated. This would significantly help onboarding.

### Finding C: Mode A/B/C Construction History Not Documented

The README does not explain how different stages were built:
- **DD (Mode A):** Build first, formalize later, zero operational records
- **OD (Mode B initially):** Build + document everything but no formalization, then retroactive remediation
- **AD (Mode C guidance):** Write provenance incrementally

This construction history matters for understanding why the provenance chain has different completeness levels across stages.

### Finding D: Transitive Chain Not Explained

The critical transitive chain (org patterns -> density patterns -> axis preferences, via OD-F-005 + DD-F-012) is not explicitly documented in any onboarding document as a concept. OD-F-005 ("Organization IS Density") is mentioned in BACKBONE.md but the transitive implication for AD is not spelled out.

### Finding E: Enforcement Gate for AD Not in Onboarding

The HANDOFF-OD-TO-AD.md exists in the provenance directory but none of the onboarding documents explain the enforcement gate concept — that AD MUST read the handoff before starting work, and that this gate carries accumulated identity from all prior stages.

### Finding F: Font Name Inconsistency

README.md uses "Cormorant Garamond" in multiple examples while the actual design system uses "Instrument Serif." This appears in:
- Line 627 (Soul #2 description in Exploration Protocol)
- Line 729 (Consumption Receipt example)
- Line 1147 (Forward Traversal example)

All other files (QUICK-START.md, OVERVIEW.md, migration-guide.md) correctly use "Instrument Serif."

---

## Summary of Required Updates

### CRITICAL (blocks correct understanding)
| # | File | Issue | Impact |
|---|------|-------|--------|
| C1 | README.md | OD described as "IN PROGRESS" — actually COMPLETE | Fresh agents think OD hasn't happened |
| C2 | README.md | OD-F-007/008/009 still marked "HYPOTHETICAL" | Confuses hypothetical vs real finding IDs |

### HIGH (significant accuracy issues)
| # | File | Issue | Impact |
|---|------|-------|--------|
| H1 | README.md | No mention of Phase 2D / Light Provenance Sections (Layer 2) | Missing entire layer of architecture |
| H2 | README.md | "Cormorant Garamond" should be "Instrument Serif" (3+ locations) | Wrong font name in examples |
| H3 | README.md | 3-layer architecture not explicitly articulated | No unified provenance architecture explanation |
| H4 | migration-guide.md | "WAVE" is not a validated pattern name | Incorrect density pattern reference |

### MEDIUM (missing context)
| # | File | Issue | Impact |
|---|------|-------|--------|
| M1 | README.md | OD content in Parts II-IV uses future tense | Misleading about system state |
| M2 | README.md | DD-F-[N] placeholder never resolved | Minor inaccuracy |
| M3 | All files | Mode A/B/C construction history not documented | Missing onboarding context |
| M4 | All files | Transitive chain (OD-F-005 + DD-F-012) not explained | Missing critical AD context |
| M5 | All files | Enforcement gate concept not in onboarding docs | AD startup procedure unclear |
| M6 | All files | Zoom levels concept not articulated | Missing navigational framework |

### LOW (polish)
| # | File | Issue | Impact |
|---|------|-------|--------|
| L1 | README.md | "253 files" count is now ~490 (Phase 2B + 2D) | Minor number inaccuracy |
| L2 | migration-guide.md | "DD-002 is gold standard" — DD-006 scored higher | Minor accuracy |
| L3 | N/A | FINDINGS-INDEX.md doesn't exist | Possibly unnecessary if PIPELINE-MANIFEST serves purpose |

---

## Audit Conclusion

The README.md is an exceptional philosophical document — its 9-Part structure genuinely enables the "transferable design mind" it describes. The other files (QUICK-START, BACKBONE, OVERVIEW, migration-guide) are solid and mostly accurate.

However, the README has two categories of staleness:
1. **Temporal:** OD status hasn't been updated since before OD was completed
2. **Architectural:** Phase 2D and the 3-layer model aren't documented

The BACKBONE.md is more current than the README, which creates an inconsistency at the heart of the system. A fresh agent reading README first (as instructed) would form an incorrect picture of system state, then get corrected by BACKBONE.

**Priority recommendation:** Update README.md's OD status and add 3-layer architecture description. These two changes would resolve C1, C2, H1, H3, and M1 — the majority of significant findings.

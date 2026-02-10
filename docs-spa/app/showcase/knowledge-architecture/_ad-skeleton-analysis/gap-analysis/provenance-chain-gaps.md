# Provenance Chain Gap Analysis: AD Skeleton vs OD Reality

**Author:** Provenance Chain Analyst
**Date:** 2026-02-09
**Scope:** Compare what the AD skeleton synthesis PROPOSES for provenance against what OD ACTUALLY built (post-remediation, post-re-enrichment, post-comprehensive-audit)
**Files Examined:** 15+ provenance chain files across `DESIGN-SYSTEM/provenance/`, `knowledge-architecture/`, and skeleton inputs

---

## EXECUTIVE SUMMARY

The AD skeleton synthesis captures ~70% of the provenance chain's structural requirements. It correctly identifies the highest-value change (Mode C incremental finding registration) and the key failure mode (deferred provenance requiring 18-agent remediation). However, it glosses over or misses **12 significant gaps** in how the chain actually works, what OD's remediation actually fixed, and what structural complexity AD will inherit. The skeleton treats provenance as a 2-layer system (findings + chain documents) when OD actually operates with **5 distinct layers**. It underspecifies cross-document reference syntax, omits the R3-023/R3-036 disambiguation protocol, and makes several optimistic assumptions about Mode C incremental provenance that contradict OD's actual execution experience.

---

## 1. LAYER STRUCTURE: 5 Layers, Not the 2-3 the Skeleton Implies

### What OD Actually Has

OD's provenance chain operates across **5 distinct layers**, documented explicitly in `provenance/CLAUDE.md` Section 6 ("THE THREE LAYERS OF PROVENANCE") plus two additional layers the CLAUDE.md doesn't formally count but that exist:

| Layer | What It Is | Example File | Count |
|-------|-----------|-------------|-------|
| **L1: Inline Threading Headers** | 150+ line headers embedded in every source file as HTML/CSS/MD comments. 10 numbered sections (WHY EXISTS, QUESTION ANSWERED, STATUS, BUILT ON, MUST HONOR, CONSUMED BY, DIAGNOSTIC QUESTIONS). | Every `.html`, `.css`, `.md`, `.tsx` file | 490 files |
| **L2: Light Provenance Sections** | Shorter metadata linking files to parent phase and T1 synthesis. Bridge between L1 and L3. | Added in Phase 2D to 244 files | 244 files |
| **L3: Formal Chain Documents** | Per-stage curated narrative documents: STAGE-HEADER, outbound-findings, SYNTHESIS, AUDIT-SYNTHESIS, RESEARCH-GATE, CONVENTION-SPEC, HANDOFF | `stage-3-organization-od/STAGE-HEADER.md` (8 sections), `OD-outbound-findings.md` (7 fields per finding) | 8 files per stage |
| **L4: Pipeline-Level Documents** | Cross-stage registries and narratives that span the entire pipeline, not any single stage | `BACKBONE.md`, `PIPELINE-MANIFEST.md`, `RESEARCH-ACTIVE.md`, `SOUL-DISCOVERIES.md`, `EXT-RESEARCH-REGISTRY.md` | 5 files |
| **L5: Identity Documents** | Accumulated identity that grows per stage, plus knowledge-architecture meta-layer | `ACCUMULATED-IDENTITY-v1.1.md` (577 lines), `knowledge-architecture/CLAUDE.md` | 2+ files |

### What the Skeleton Proposes

The skeleton synthesis (Section 3) mentions:
- AD-outbound-findings.md (L3)
- Various chain documents (L3)
- PIPELINE-MANIFEST.md updates (L4)
- ACCUMULATED-IDENTITY-v2 (L5)

**GAP-PC-01: The skeleton NEVER mentions Layers 1 or 2 (inline threading headers and light sections).**

This is a critical omission. OD's Phase 2B threading and Phase 2D light sections were massive efforts (250 files for 2B, 244 for 2D). The skeleton assumes AD HTML files will have inline threading headers (Gate W-02 checks for them) but provides zero guidance on:
- What sections the inline header must contain (10 numbered sections in OD)
- What the BUILT ON dependency table looks like
- What the CONSUMED BY consumer table looks like
- Whether light sections (L2) need to be added to AD files
- How the 490 existing threaded files relate to new AD files

**Evidence:** OD inline headers contain rich metadata. E.g., `OD-CONVENTION-SPEC.md` header at line 7: `BUILT ON: OD-AUDIT-SYNTHESIS, OD-SYNTHESIS, anti-patterns/registry.md, ACCUMULATED-IDENTITY-v1.md` and `CONSUMED BY: all Builders (Wave 1-3), HANDOFF-OD-TO-AD.md, future AD/CD work`. This is NOT the same as a simple "INLINE THREADING HEADER exists = PASS" gate check. The content of the header matters.

**Severity:** HIGH. Without specifying L1/L2 format, AD agents will either (a) skip inline headers entirely, (b) write ad-hoc headers that don't match OD's format, or (c) write minimal headers that pass the binary gate but carry no useful provenance.

---

## 2. CROSS-REFERENCING: Three Distinct Syntaxes, Not One

### What OD Actually Uses

OD documents cross-reference each other using **three distinct mechanisms**:

**Mechanism A: YAML Frontmatter Links**
```yaml
---
predecessor: provenance/stage-2-density-dd/DD-outbound-findings.md
successor: provenance/stage-4-axis-ad/AD-outbound-findings.md
backbone_ref: DESIGN-SYSTEM/BACKBONE.md
manifest_ref: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md
---
```
Used in: STAGE-HEADER.md, OD-outbound-findings.md, HANDOFF-OD-TO-AD.md, PIPELINE-MANIFEST.md

**Mechanism B: Inline Finding ID Citations**
```
"Applying OD-F-005: Organization IS Density"
"DD-F-006 fractal self-similarity at 4 scales"
```
Used in: HTML file headers (CSS comments), outbound-findings.md, SYNTHESIS.md, ACCUMULATED-IDENTITY.md

**Mechanism C: Table-Based Dependency Tracking (Inline Headers)**
```
5. BUILT ON
| Dependency | Relationship |
|------------|-------------|
| DD-F-006   | Mandatory constraint honored |
```
Used in: Every file's inline threading header (L1)

### What the Skeleton Proposes

The skeleton specifies Mechanism B (finding ID citations) and partially Mechanism A (mentions frontmatter but doesn't specify the exact keys). It completely omits Mechanism C.

**GAP-PC-02: The skeleton does not specify YAML frontmatter key names.** OD uses exactly these keys: `pipeline_stage`, `stage_name`, `file_type`, `predecessor`, `successor`, `backbone_ref`, `manifest_ref`, `last_updated`, `status`. The skeleton's provenance architect (ad-skeleton-provenance.md, Section 1.1) shows a YAML block for STAGE-HEADER that closely matches but never mandates this as the standard. What about AD-outbound-findings.md? The skeleton shows its YAML but doesn't explicitly say "match this format exactly."

**GAP-PC-03: No specification for how inline threading header tables connect to formal chain documents.** In OD, every formal chain document's inline header (L1) has a BUILT ON table that creates a dependency graph. The skeleton has no equivalent requirement for AD documents.

**Severity:** MEDIUM. Inconsistent cross-referencing creates the "illusion of completeness" problem identified in the 18-agent remediation root cause analysis (item 4: "Inline headers create illusion of completeness").

---

## 3. FINDING FLOW: The Full 8-Step Lifecycle

### What OD Actually Built

A finding in OD (e.g., OD-F-005) flows through **8 distinct states** across the chain:

1. **Discovery** (builder during HTML construction) -> Builder writes finding in CSS comment header of HTML file
2. **Registration** (builder immediately) -> Builder writes 7-field entry in `OD-outbound-findings.md`
3. **Manifest Entry** (lead between waves) -> Lead adds row to `PIPELINE-MANIFEST.md` Section B
4. **Synthesis Citation** (synthesis agent post-build) -> Finding cited in `OD-SYNTHESIS.md`
5. **Identity Absorption** (lead at stage end) -> Finding integrated into `ACCUMULATED-IDENTITY-v1.1.md`
6. **Handoff Transfer** (lead at stage end) -> Finding listed in MUST/SHOULD tables in `HANDOFF-OD-TO-AD.md`
7. **Stage Header Record** (lead at stage end) -> Finding referenced in `STAGE-HEADER.md` section 3 (WHAT THIS STAGE PRODUCED)
8. **Research Gate Inheritance** (next stage, Phase 0) -> Finding appears in `AD-RESEARCH-GATE.md` as inherited constraint

### What the Skeleton Proposes

The skeleton's discovery-to-documentation flow (synthesis Section 3.2) shows steps 1-3 but stops there. It mentions synthesis (step 4) and identity (step 5) as separate documents to write, but doesn't trace the same finding through all 8 steps. The provenance architect's flow diagram (ad-skeleton-provenance.md, Section 3.1) shows 5 steps but conflates the PIPELINE-MANIFEST update into the builder's flow (builder updates PIPELINE-MANIFEST directly), which contradicts the File Ownership Matrix that says Lead owns PIPELINE-MANIFEST.

**GAP-PC-04: The skeleton's finding flow diagram (Section 3.1) has the builder updating PIPELINE-MANIFEST directly.** This contradicts the ownership matrix (Section 3.3) which says "Lead (batch updates between waves)" for PIPELINE-MANIFEST. OD resolved this exact contention by having builders write ONLY to AD-outbound-findings.md (append-only), with the Lead doing batch updates to PIPELINE-MANIFEST between waves.

**Evidence:** `ad-skeleton-provenance.md` line 370: `Update PIPELINE-MANIFEST.md Section B (add one row to AD-F table)` is shown as a builder step. But line 398-399 in the same file: `PIPELINE-MANIFEST.md | Lead | Builders request updates via message`.

**Severity:** MEDIUM. Internal contradiction in the skeleton will confuse builders about who writes what.

---

## 4. WHAT THE 18-AGENT REMEDIATION ACTUALLY FIXED

### What Actually Happened

The 18-agent remediation (MEMORY.md: "18-agent team, 5 waves, formal OD provenance chain created and verified") didn't just "formalize what should have been written during build." It created an entire formal chain layer that DID NOT EXIST before remediation:

**Before remediation (what existed):**
- 6 OD HTML files with CSS comment headers (partial L1)
- builder-log.md with informal finding notes
- An informal OD-CHECKPOINT.md
- ACCUMULATED-IDENTITY-v1.md (created during build, not remediation)
- NO formal STAGE-HEADER.md
- NO formal OD-outbound-findings.md
- NO formal OD-SYNTHESIS.md
- NO formal OD-RESEARCH-GATE.md
- NO formal OD-AUDIT-SYNTHESIS.md
- NO PIPELINE-MANIFEST.md entries for OD-F findings
- NO HANDOFF-OD-TO-AD.md
- NO EXT-RESEARCH-REGISTRY.md

**After remediation (what was created):**
- All 8 formal chain documents (STAGE-HEADER, outbound-findings, SYNTHESIS, AUDIT-SYNTHESIS, RESEARCH-GATE, HANDOFF, CONVENTION-SPEC, CLAUDE.md)
- PIPELINE-MANIFEST.md updated with OD-F entries
- BACKBONE.md updated with Stage 3 narrative
- EXT-RESEARCH-REGISTRY.md created
- Finding ID collision (OD-F-005) discovered and resolved
- 3 ghost findings identified (cited but never defined)
- 94/104 verification items confirmed passing

**GAP-PC-05: The skeleton says "OD deferred provenance -> required 18-agent remediation. AD writes provenance incrementally." This is a dangerous oversimplification.** The remediation didn't just catch up on deferred writing -- it created an entire formal document architecture that didn't exist. The skeleton assumes the document architecture is a given; OD proved it had to be built from scratch.

**What AD needs but the skeleton doesn't specify:** The exact section structure for each formal chain document. OD's STAGE-HEADER has 8 specific sections. OD's outbound-findings has a specific 7-field template. The skeleton's provenance architect (ad-skeleton-provenance.md) DOES specify these templates in detail -- but the synthesis (ad-skeleton-synthesis.md) compresses them to bullet points. If the synthesis is the Plan, these details will be lost.

**Severity:** HIGH. The skeleton needs to either embed the full templates or explicitly reference the provenance architect's file as mandatory reading.

---

## 5. WHAT THE 43-AGENT RE-ENRICHMENT MODIFIED

### What Actually Changed

The 43-agent re-enrichment (commit 826ce3a, 92 files, 15,000 insertions) modified existing provenance documents in ways the skeleton underestimates:

**Documents created fresh during re-enrichment:**
- `OD-CONVENTION-SPEC.md` (468 lines) -- completely new, unified 3 quality dialects
- `r2-evaluation.md` -- evaluated all 27 R-2 findings for soul compliance
- `identity-delta-wave{1,2,3}.md` -- 3 delta documents tracking identity evolution
- 6 `research-package-od-{001-006}.md` files -- per-OD research packages

**Documents significantly updated during re-enrichment:**
- `RESEARCH-ACTIVE.md` -- R-1 status updated from 20 to 22 APPLIED, 4 update log entries added (~150 lines)
- `PIPELINE-MANIFEST.md` -- OD-F entries refined, EXT-* total updated from 69 to 94, Document Metadata section expanded
- `EXT-RESEARCH-REGISTRY.md` -- 22 new EXT findings registered across 3 waves
- `ACCUMULATED-IDENTITY-v1.md` -> `v1.1` -- evolved from 539 to 577 lines with wave delta synthesis
- `OD-outbound-findings.md` -- YAML frontmatter updated with re-enrichment wave data
- `STAGE-HEADER.md` -- RE-ENRICHMENT subsection added
- All 6 OD HTML files -- re-enriched content (scores, research applications, identity deltas)

**GAP-PC-06: The skeleton assumes re-enrichment is prevented by convention-first architecture.** Section 4.1 states: "AD eliminates OD's 43-agent re-enrichment phase by embedding enrichment DURING build." This is partly true (conventions prevent dialect drift), but misses why re-enrichment was needed for OD:

1. **Convention unification** -- YES, AD prevents this with convention-first
2. **Bespoke research application** -- PARTIALLY prevented (research packages exist before build)
3. **Identity delta evolution** -- NOT prevented. The skeleton proposes identity deltas between waves (Section 4.6), which IS re-enrichment by another name
4. **Bug fixes and audit-driven changes** -- NOT prevented. AD will still have a fix phase

The key insight: OD's re-enrichment was 3 things conflated: (a) convention remediation, (b) research deepening, (c) identity evolution. AD prevents (a) but still requires (b) and (c).

**Severity:** MEDIUM. AD should expect iterative updates to provenance documents even with convention-first, just driven by audit findings rather than dialect drift.

---

## 6. WHAT THE SKELETON ASSUMES WILL WORK

### Assumption 1: Builders Can Write Findings Incrementally

**The skeleton says:** "Builder discovers finding -> STOPS building -> writes AD-F-NNN entry -> RESUMES building."

**What actually happened in OD:** Builders wrote HTML content and CSS comment headers with finding references, but the formal 7-field finding entries were NOT written by builders during OD's original build. They were created retroactively in the remediation. The re-enrichment's scribes (per-wave) wrote provenance updates, not the builders themselves.

**GAP-PC-07: There is ZERO evidence in OD's history that builders can successfully interrupt their HTML construction flow to write formal finding entries.** The skeleton's provenance architect correctly identifies this as "the single most important change from OD" -- but it remains UNTESTED. OD's builders wrote informal CSS comments ("Applying OD-F-005") but never wrote the formal 7-field blocks in outbound-findings.md.

**Risk:** Builder agents have limited context windows. Interrupting HTML construction to open a separate markdown file, write a structured entry, then return to HTML construction may cause context thrashing. OD avoided this entirely by having scribes handle formal writing.

**Mitigation the skeleton proposes but doesn't emphasize:** The skeleton-first pattern (Section 10.4) where agents write file skeletons first. If AD-outbound-findings.md is scaffolded with empty finding blocks per builder's reserved range, builders only need to FILL IN fields rather than create structure.

**Severity:** HIGH. This is the single highest-risk assumption in the entire skeleton. It should have a fallback protocol: "If builders fail to write findings incrementally, deploy per-wave scribe agents (proven in OD re-enrichment)."

---

### Assumption 2: Reserved ID Ranges Prevent All Collisions

**The skeleton says:** Reserved ranges (AD-F-001 through AD-F-004 for Builder-A, etc.) make collisions "impossible."

**What actually happened in OD:** The OD-F-005 collision was between two agents assigning the SAME ID to DIFFERENT findings. Reserved ranges prevent this specific failure. BUT the finding-registry.md diagnostic (line 17-25) revealed **3 collision types**, not just one:

1. **Finding ID collision** (OD-F-005) -- FIXED by reserved ranges
2. **Research ID disambiguation** (R3-023 vs R3-036) -- NOT addressed by reserved ranges
3. **Category ID collision** (CA-001) -- NOT addressed by reserved ranges

**GAP-PC-08: The skeleton doesn't address research ID disambiguation for AD.** OD had to formally disambiguate R3-023 (fractal self-similarity per PIPELINE-MANIFEST) vs R3-036 (CRESCENDO per RESEARCH-ACTIVE). This disambiguation required a DISAMBIGUATION NOTE in PIPELINE-MANIFEST Section E (line 277) and explicit corrections in RESEARCH-ACTIVE.md. AD will cite R-4 findings (192 of them) -- is there any existing disambiguation needed in R-4? The skeleton doesn't check.

**Severity:** LOW-MEDIUM. R-4 is newer and likely less ambiguous than R-3, but the skeleton should include a "verify no R-4 ID collisions" step in Phase 0.

---

### Assumption 3: Append-Only File Access Prevents Contention

**The skeleton says:** AD-outbound-findings.md is "append-only. Builders append their findings to the end."

**What actually happened in OD:** The append-only pattern works IF builders are writing sequentially (one wave at a time). OD's re-enrichment used sequential waves (Wave 1: OD-001 + OD-002, Wave 2: OD-003 + OD-005, Wave 3: OD-004 + OD-006). AD's skeleton proposes the same wave structure.

**The gap:** Within a wave, 2 builders run simultaneously. If both discover findings at the same time, both try to append to the same file. The skeleton says "append-only" but doesn't specify the file locking mechanism.

**GAP-PC-09: No file locking or contention resolution for simultaneous appends.** In practice, Write tool calls are atomic (the tool overwrites the entire file), so two simultaneous writes would cause DATA LOSS -- the second write would overwrite the first. The skeleton needs an explicit protocol: "Within a wave, builders write findings to their OWN per-builder scratch files (e.g., `findings-builder-a.md`). The lead or scribe merges them into AD-outbound-findings.md between waves."

**Evidence:** OD re-enrichment avoided this by having scribes (not builders) write to shared files. The scribe role was sequential by design.

**Severity:** HIGH. Simultaneous write conflicts would silently destroy finding data.

---

## 7. MISSING DOCUMENTS THE SKELETON DOESN'T MENTION

### Documents OD Needed That the Skeleton Omits

| Document | What It Does | Why AD Needs It |
|----------|-------------|-----------------|
| `finding-registry.md` | Diagnostic scan of ALL finding IDs across ALL files, detecting collisions, ghosts, orphans | AD should run an equivalent diagnostic before and after build to verify chain integrity |
| `_remediation/06-root-cause-analysis.md` | The 5 root causes of OD's provenance failure | AD agents need to understand WHY the protocol exists, not just follow rules |
| `identity-delta-wave{N}.md` | 10-15 line documents tracking how identity evolved per re-enrichment wave | The skeleton DOES mention these (Section 4.6) but treats them as optional. In OD they were CRITICAL for ACCUMULATED-IDENTITY-v1.1 synthesis |
| `r2-evaluation.md` | Per-finding evaluation of all 27 R-2 findings for soul compliance | AD needs a similar evaluation for R-4 (192 findings -- which ones SOUL PASS/FAIL?) |
| Working directory CLAUDE.md files | `_od-reenrichment/CLAUDE.md`, `_od-audit-scratchpad/CLAUDE.md` | The skeleton mentions `_ad-execution/CLAUDE.md` (Section 10.1) but doesn't specify its format |

**GAP-PC-10: No post-build chain integrity diagnostic.** OD's finding-registry.md was a diagnostic that caught 3 collisions, 3 ghosts, and 0 orphans across 476+ finding IDs. The skeleton has no equivalent. Gate 6 (Stage Complete) checks that files exist but doesn't check internal consistency. A fresh agent could write AD-F-005 in AD-outbound-findings.md but cite it as AD-F-006 in the HTML header, and no gate would catch this.

**Severity:** MEDIUM. Should be added as a Gate 6 verification step.

---

## 8. INCREMENTAL vs DEFERRED: What ACTUALLY Worked in OD

### The Reality Matrix

The skeleton's Incremental vs Deferred decision matrix (Section 3.4 / provenance Section 6) is largely correct but misrepresents two items:

| Document | Skeleton Says | OD Actually Did | Gap? |
|----------|-------------|----------------|------|
| Outbound findings | INCREMENTAL | **DEFERRED then remediated** (builders wrote informal CSS comments; formal entries created retroactively) | YES - skeleton proposes untested approach |
| RESEARCH-GATE | PRE-BUILD | PRE-BUILD (OD-RESEARCH-GATE created before building) | No gap |
| CONVENTION-SPEC | PRE-BUILD | **POST-BUILD** (OD-CONVENTION-SPEC created during re-enrichment, not before OD build) | YES - skeleton correctly proposes fix |
| SYNTHESIS | DEFERRED | DEFERRED (OD-SYNTHESIS written after all ODs built) | No gap |
| STAGE-HEADER | HYBRID | **DEFERRED** (created during remediation, not drafted at start) | YES - skeleton correctly proposes fix |
| ACCUMULATED-IDENTITY | HYBRID | **HYBRID** (v1 during build, v1.1 during re-enrichment) | No gap |
| PIPELINE-MANIFEST | BATCHED | **DEFERRED then remediated** (OD-F entries added during remediation, not between waves) | YES - skeleton correctly proposes fix |
| EXT-RESEARCH-REGISTRY | INCREMENTAL | **BATCHED** (created by census-b agent scanning all files after re-enrichment) | Partial gap |

**GAP-PC-11: EXT-RESEARCH-REGISTRY was NOT incremental in OD.** The skeleton proposes incremental EXT registration. OD's EXT-RESEARCH-REGISTRY was created by a census agent (census-b) AFTER re-enrichment by scanning all OD HTML headers and research files. It was a post-hoc compilation, not incremental registration. AD can do better (register EXT findings as they're commissioned), but should know the precedent.

**Severity:** LOW. The skeleton's approach is an improvement, not a gap per se.

---

## 9. THE SYNCED DUPLICATE PROBLEM

### A Pattern the Skeleton Completely Ignores

OD maintains **synced duplicates** of key documents:

| Original Location | Duplicate Location | Sync Protocol |
|-------------------|-------------------|---------------|
| `checkpoints/SOUL-DISCOVERIES.md` | `provenance/SOUL-DISCOVERIES.md` | "Operational edits go in checkpoints/, archival copies here" |
| `checkpoints/RESEARCH-ACTIVE.md` | `provenance/RESEARCH-ACTIVE.md` | Same sync protocol |

Both duplicate files have explicit inline headers noting the sync relationship (e.g., `RESEARCH-ACTIVE.md` line 17-18: "SYNCED DUPLICATE of checkpoints/RESEARCH-ACTIVE.md").

**GAP-PC-12: The skeleton never mentions the synced duplicate pattern.** When AD updates RESEARCH-ACTIVE.md or SOUL-DISCOVERIES.md, should it update the checkpoints/ copy, the provenance/ copy, or both? OD's protocol says "operational edits go in checkpoints/", but during re-enrichment, the provenance/ copy was actually updated directly by the updater-b agent. The sync is not automated -- it relies on agents manually keeping both copies aligned.

**Severity:** LOW-MEDIUM. Stale synced duplicates create contradictions that confuse downstream agents. AD should designate ONE authoritative location and make the other an explicit pointer.

---

## 10. R-2 COUNT DISCREPANCY

### A Specific Data Inconsistency the Skeleton Inherits

The skeleton says "R-2 Creative Layouts (27 findings)" in some places and "25 applicable" in others. The HANDOFF-OD-TO-AD.md says "25 applicable, 2 SOUL FAIL." RESEARCH-ACTIVE.md says "R-2: 27 findings, 27 UNAPPLIED." PIPELINE-MANIFEST.md originally said "R-2: 78 findings" but was corrected to 27 during the comprehensive audit (line 317: "PIPELINE-MANIFEST R-2 count corrected (78->27)").

The skeleton synthesis Section 7.2 says "25 applicable findings" and the HANDOFF says "25 applicable, 2 SOUL FAIL" -- meaning 27 total, 25 usable, 2 rejected. This is internally consistent but the skeleton sometimes says "25 findings" when it means "25 applicable of 27 total."

**This is not a gap per se**, but a precision issue. AD agents reading "25 applicable R-2 findings" may not know there are 2 additional SOUL FAIL findings they need to be aware of (to avoid accidentally applying them).

---

## 11. DIRECTORY STRUCTURE: Where Do AD Files Actually Go?

### What OD's Structure Looks Like

```
docs-spa/app/showcase/DESIGN-SYSTEM/provenance/
  stage-3-organization-od/
    CLAUDE.md
    STAGE-HEADER.md
    OD-outbound-findings.md
    OD-SYNTHESIS.md
    OD-CONVENTION-SPEC.md
    OD-AUDIT-SYNTHESIS.md
    OD-RESEARCH-GATE.md
    HANDOFF-OD-TO-AD.md
```

### What the Skeleton Proposes

The skeleton mentions `stage-4-axis-ad/` as the target directory but doesn't specify its full path. Is it:
- `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/stage-4-axis-ad/`? (matching OD's location)
- `knowledge-architecture/stage-4-axis-ad/`? (different location)

The provenance architect (ad-skeleton-provenance.md, Section 1.9) says ACCUMULATED-IDENTITY-v2 should go in `knowledge-architecture/` -- matching v1/v1.1's location at `knowledge-architecture/ACCUMULATED-IDENTITY-v1.1.md`. But the formal chain documents should go in `DESIGN-SYSTEM/provenance/stage-4-axis-ad/`.

**This is not explicitly a gap** -- the convention is clear from OD -- but the skeleton should state the full path once to prevent ambiguity.

---

## 12. THE COMPREHENSIVE AUDIT'S PROVENANCE CONTRIBUTIONS

### What the 58-Agent Audit Added to the Chain

The comprehensive hierarchical audit (commit 71dc02c) made provenance-specific fixes that the skeleton doesn't account for as INHERITED state:

1. **PIPELINE-MANIFEST R-2 count corrected** (78 -> 27) -- AD must use 27, not 78
2. **EXT-* count corrected** (69 -> 94) -- AD inherits 94 EXT findings, not 69
3. **rgba() opacity cleanup across 4 OD files** -- AD must not reintroduce these
4. **ACCUMULATED-IDENTITY supersession clarified** -- v1.1 supersedes v1
5. **Stale metadata fixes** -- several provenance files had incorrect dates/counts

**The skeleton's consumption order (Section 6.1) doesn't include the comprehensive audit's fix record.** AD agents should know what was fixed to avoid reintroducing the same issues.

---

## SUMMARY: TOP 12 GAPS RANKED BY SEVERITY

| # | Gap ID | Severity | Description | Skeleton Section Affected |
|---|--------|----------|-------------|--------------------------|
| 1 | GAP-PC-01 | **HIGH** | L1/L2 layer spec missing -- no inline threading header format for AD files | 3.2, Gates W-02 |
| 2 | GAP-PC-07 | **HIGH** | Builder incremental finding writing is UNTESTED -- no OD evidence it works, needs fallback protocol | 3.1, 3.2, 9.1 |
| 3 | GAP-PC-09 | **HIGH** | No file contention resolution for simultaneous appends within a wave | 3.5, File Ownership Matrix |
| 4 | GAP-PC-05 | **HIGH** | Skeleton underestimates what remediation created (entire formal doc architecture, not just "catch-up") | 3.1 core lesson |
| 5 | GAP-PC-04 | **MEDIUM** | Internal contradiction: builder flow shows PIPELINE-MANIFEST update, ownership matrix says Lead-only | 3.1 flow vs 3.3 ownership |
| 6 | GAP-PC-02 | **MEDIUM** | YAML frontmatter key names not standardized for AD documents | 1.1, 1.2 templates |
| 7 | GAP-PC-03 | **MEDIUM** | No spec for inline header dependency tables (BUILT ON, CONSUMED BY) | 1.8 CLAUDE.md |
| 8 | GAP-PC-10 | **MEDIUM** | No post-build chain integrity diagnostic (finding-registry equivalent) | Gate 6 |
| 9 | GAP-PC-06 | **MEDIUM** | Skeleton claims AD eliminates re-enrichment -- only true for convention drift, not research/identity | 4.1 |
| 10 | GAP-PC-12 | **LOW-MED** | Synced duplicate pattern (checkpoints/ vs provenance/) never mentioned | Not in skeleton |
| 11 | GAP-PC-08 | **LOW-MED** | R-4 disambiguation not checked (R3-023/R3-036 precedent) | 4.2 |
| 12 | GAP-PC-11 | **LOW** | EXT-RESEARCH-REGISTRY was batch-compiled, not incremental, in OD | 3.4 decision matrix |

---

## RECOMMENDATIONS FOR PLAN CONVERSION

### Must-Add to Plan (HIGH gaps)

1. **Specify L1 inline threading header format** as a mandatory builder deliverable. Include the 10-section template (WHY EXISTS, QUESTION ANSWERED, STATUS, [reserved], BUILT ON, MUST HONOR, [reserved], CONSUMED BY, [reserved], DIAGNOSTIC QUESTIONS). Add to builder prompts.

2. **Add fallback protocol for finding registration**: "If builders fail to write formal 7-field finding entries during construction, deploy per-wave scribe agents (one per wave, sequential, append-only to AD-outbound-findings.md). Scribe reads builder's CSS comment headers + builder messages and formalizes findings."

3. **Add per-builder scratch files**: Within each wave, builders write findings to `_ad-execution/findings-builder-{A|B}.md`. Lead/scribe merges into AD-outbound-findings.md between waves. This eliminates simultaneous write contention.

4. **Embed full document templates** (STAGE-HEADER 8 sections, outbound-findings 7-field template, YAML frontmatter keys) in the Plan, not just the skeleton. Or explicitly reference `ad-skeleton-provenance.md` as mandatory reading for all agents.

### Should-Add to Plan (MEDIUM gaps)

5. **Fix the builder flow diagram** to remove PIPELINE-MANIFEST update from builder steps. Builders write to outbound-findings only. Lead batch-updates PIPELINE-MANIFEST.

6. **Add chain integrity diagnostic** as Gate 6 step: "Run finding-registry scan across all AD files. Verify: 0 collisions, 0 ghosts, 0 orphans. Every AD-F-NNN cited in HTML headers has matching entry in AD-outbound-findings.md."

7. **Clarify what 'convention-first eliminates re-enrichment' means**: It prevents dialect drift. It does NOT prevent iterative improvement. AD should still plan for post-audit fixes and identity evolution.

### Nice-to-Have (LOW gaps)

8. **Designate authoritative copy for SOUL-DISCOVERIES and RESEARCH-ACTIVE** (checkpoints/ or provenance/, not both). Add "this is the pointer, that is the authority" note.

9. **Add R-4 disambiguation check** to Phase 0: "Verify no R-4 ID collisions exist before builders cite them."

---

*Analysis based on 15+ provenance chain documents, skeleton synthesis (729 lines), provenance architect analysis (647 lines), and repo-level file structure examination.*

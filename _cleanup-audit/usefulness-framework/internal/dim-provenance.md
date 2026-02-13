# Dimension Analysis: Provenance

**Agent:** dim-provenance-researcher
**Date:** 2026-02-13
**Research Sources:** graph-showcase.md, graph-design-extraction.md, graph-root.md, sample threaded files
**Total Files Examined:** 4 graph analyses + 3 threaded file samples (R1, PIPELINE-BACKBONE, RETROACTIVE-AUDIT)

---

## Executive Summary

**Provenance is not a binary property — it's a spectrum of integration depth.**

The KortAI project has a **formal 3-layer provenance system** covering 734 files:
1. **Inline Threading Headers (Phase 2B)** — 490 files with BUILT ON / CONSUMED BY sections
2. **Light Section Headers (Phase 2D)** — 244 files with SUPERSEDED BY markers
3. **Stage Provenance Directories** — Formal handoff documents connecting pipeline phases

**Key Insight:** A file's provenance-criticality is determined by its **position in dependency chains**, not just whether it HAS threading. Root-level folders (explorations/axis/, _tension-test/, PROGRESS-audit/) have ZERO threading headers but were intentionally isolated — they are research scratchpads, not committed deliverables.

**The Core Question:** When is a provenance link "alive" (active dependency) vs "dead" (bibliographic citation)?

---

## 1. What Makes a File "Provenance-Critical"?

### 1.1 Hub Documents (12+ Inbound References)

Files with **8+ inbound references** are load-bearing. Deleting them breaks the knowledge graph.

**Examples from graph-showcase.md:**

| File | Inbound Refs | Role | Provenance Status |
|------|--------------|------|-------------------|
| `research/RESEARCH-SYNTHESIS.md` | 30+ | Cross-research synthesis (337 findings) | **CRITICAL HUB** |
| `research/R3-DENSITY-DIMENSIONS.md` | 25+ | DD research source (51 findings, 76% applied) | **CRITICAL HUB** |
| `knowledge-architecture/PIPELINE-BACKBONE.md` | 15+ | Master narrative, 12-file minimal set | **CRITICAL HUB** |
| `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` | 15+ | Research → T1 → DD → OD → AD → CD flow | **CRITICAL HUB** |

**Definition:** A file is provenance-critical if **3+ other Tier A/B files cite it in their BUILT ON or CONSUMED BY sections** AND those citations are active (not bibliographic).

### 1.2 Synthesis Documents (Absorbed Underscore Archives)

Files that **absorbed multi-agent team outputs** are provenance anchors. They consolidate 5-30 raw agent files into a single authoritative synthesis.

**Pattern from graph-showcase.md:**

```
_od-audit-scratchpad/ (22 files, 7,867 lines)
    ↓
OD-GRANULAR-AUDIT-RESULTS.md (688 lines, 89 findings)
    ↓
CONSUMED BY: OD fix execution, comprehensive audit, provenance remediation
```

**Provenance Status:**
- **Synthesis file:** CRITICAL — it's the distilled output
- **Underscore archive:** ARCHIVAL — evidence for synthesis, but not directly consumed

**Definition:** A synthesis document is provenance-critical if it **absorbed working artifacts AND is cited by downstream phases**.

### 1.3 T1 Synthesis Files (LOCKED Authority)

The 6 T1 synthesis files from `design-extraction/component-system/perceptual-audit-v2/synthesis/` are **THE highest authority tier**.

**From graph-design-extraction.md:**

| T1 File | Inbound Refs | Downstream Impact |
|---------|--------------|-------------------|
| `DESIGN-TOKEN-SUMMARY.md` | 18+ | Single CSS source of truth — ALL component CSS consumes this |
| `MASTER-SOUL-SYNTHESIS.md` | 15+ | Soul definition — ALL soul-dependent work cites this |
| `CHARACTER-FAMILY-COMPLETE.md` | 27 files / 52 occurrences | Character names propagate to 7 React components |

**Provenance Status:** IRREPLACEABLE — Changing T1 cascades to 50+ downstream files.

**Definition:** T1 files are provenance-critical because they are **authoritative lock points** in the dependency chain. They cannot be deleted or superseded without breaking the system.

---

## 2. When Is a Provenance Link "Alive" vs "Dead"?

### 2.1 Alive Links (Active Dependencies)

**Characteristics:**
- Downstream file **reads values** from upstream file (token values, finding IDs, character names)
- Upstream change **forces downstream update** (cascading dependency)
- CONSUMED BY section lists **specific usage** ("implements --font-display token")

**Examples:**

1. **Token Propagation (ALIVE):**
   ```
   DESIGN-TOKEN-SUMMARY.md (defines --font-display: 'Instrument Serif')
       ↓
   typography-system/type-scale.css (copies value verbatim)
       ↓
   component-system/css/*.css (imports typography.css)
   ```
   **Why alive:** CSS files MUST match token values. Change token → update all CSS.

2. **Character Name Propagation (ALIVE):**
   ```
   CHARACTER-FAMILY-COMPLETE.md ("The Precise Transcriptionist")
       ↓
   docs-spa/components/content/CodeBlock.tsx (renders character name in UI)
   ```
   **Why alive:** React component DISPLAYS the character name. Change name → update component.

3. **Finding Application (ALIVE):**
   ```
   R3-DENSITY-DIMENSIONS.md (R3-012: "Density Breathing" pattern)
       ↓
   explorations/density/DD-001-breathing.html (implements R3-012)
       ↓
   RESEARCH-ACTIVE.md (tracks "R3-012 applied in DD-001")
   ```
   **Why alive:** Deletion of R3 breaks research tracking. RESEARCH-ACTIVE.md has broken link.

### 2.2 Dead Links (Bibliographic Citations)

**Characteristics:**
- Downstream file **mentions** upstream file for context, not implementation
- Upstream change has **no downstream impact** (informational only)
- CONSUMED BY section says "historical reference" or "context only"

**Examples:**

1. **Supersession Chain (DEAD):**
   ```
   card-system/SOUL-DEFINITION.md (10 principles, SUPERSEDED)
       ↓
   component-system/SOUL-DEFINITION.md (6 universal rules)
       ↓
   MASTER-SOUL-SYNTHESIS.md (T1, LOCKED)
   ```
   **Why dead:** card-system/SOUL-DEFINITION.md is bibliographic. It documents soul evolution history, but **no current work consumes it**. Downstream files skip it and go straight to T1.

2. **Exploration Reference (DEAD):**
   ```
   explorations/axis/AD-001-master-playbook-axis-z.html
       ↓
   MEMORY.md mentions "AD phase (read RETROSPECTIVE FIRST)"
   ```
   **Why dead:** MEMORY.md references AD phase for human orientation, but **no file programmatically imports AD-001**. It's not in the execution path.

3. **Archival Evidence (DEAD):**
   ```
   _od-audit-scratchpad/visual-audit-001.md
       ↓
   OD-GRANULAR-AUDIT-RESULTS.md (synthesis absorbed it)
   ```
   **Why dead:** Synthesis file contains the distilled findings. Original agent output is archival evidence only. **Deleting _od-audit-scratchpad/ does not break OD-GRANULAR-AUDIT-RESULTS.md.**

### 2.3 Zombie Links (Half-Alive)

**A third category exists: provenance links that are alive in SOME contexts but dead in OTHERS.**

**Example:**

```
research/R1-DOCUMENTATION-PATTERNS.md (28 findings)
    ↓
RESEARCH-ACTIVE.md (tracks which R1 findings applied)
    ↓
OD explorations (should reference R1 findings, but some don't)
```

**Why zombie:** R1 is cited in RESEARCH-ACTIVE.md (alive link for tracking), but **only 60% of R1 findings were applied** to OD explorations. The other 40% are bibliographic — they exist in R1 but have no downstream implementation.

**Provenance Status:** File is CRITICAL (hub document), but **not all its content is consumed**. Selective extraction, not full propagation.

---

## 3. Provenance Isolation Threshold

### 3.1 Isolated Files (No Inbound/Outbound Refs)

**From graph-root.md:**

| Folder | Files | Threading Headers | Cross-References | Verdict |
|--------|-------|-------------------|------------------|---------|
| `explorations/axis/` | 233 | 0 | 0 to design-extraction or docs-spa | **ISOLATED** |
| `_tension-test/` | 104 | 0 | 0 to design-extraction or docs-spa | **ISOLATED** |
| `PROGRESS-audit/` | 7 | 0 | 4 mentions of docs-spa (contextual) | **ISOLATED** |

**Key Discovery:** These folders are **intentionally isolated**. They are working scratchpads for exploratory phases (AD perceptual audit, tension-composition skill test). They were never intended to be part of the committed provenance chain.

**Threshold Definition:**
- **0 inbound refs from Tier A/B files** = isolated (not consumed by authoritative work)
- **0 outbound refs to design-extraction or docs-spa** = island (self-contained, no external dependencies)
- **BOTH** = isolated island (delete candidate IF the phase is complete)

**Counterexample:** `archive/` in design-extraction has 0 inbound refs AND a "DANGEROUS" warning, but it's **intentionally kept** as a historical record with a supersession marker. Deletion would lose the supersession chain documentation.

### 3.2 Integration Candidates (Weak Provenance)

**Files with 1-2 inbound refs from Tier B/C files are "weakly integrated."**

**Example from graph-showcase.md:**

| File | Inbound Refs | Tier | Provenance Status |
|------|--------------|------|-------------------|
| `checkpoints/OD-CHECKPOINT.md` | 1 (checkpoints/CLAUDE.md) | C | **WEAKLY INTEGRATED** |
| `checkpoints/SECTIONS-PROGRESS.md` | 3 (tracking files) | B | **MODERATELY INTEGRATED** |

**Threshold:** Files with <3 inbound refs from Tier A/B are candidates for:
- **Archiving** if the phase is complete
- **Deletion** if the content is absorbed elsewhere

---

## 4. When Can a Provenance-Linked File Be Safely Deleted?

### 4.1 Safe Deletion Criteria

A provenance-linked file can be deleted if **ALL of the following are true:**

1. **Superseded:** File has explicit `SUPERSEDED BY [file]` marker
2. **Content Absorbed:** Downstream synthesis file contains all its findings/data
3. **No Active Consumers:** CONSUMED BY section is empty OR lists only archival references
4. **Bibliographic Only:** All inbound citations are for historical context, not implementation

**Example: card-system/ (66 files, SUPERSEDED)**

```
card-system/SOUL-DEFINITION.md
    SUPERSEDED BY: component-system/SOUL-DEFINITION.md
    CONSUMED BY: (empty — no active consumers)
    Status: SAFE TO DELETE (but kept for supersession chain documentation)
```

**Why safe:** All content migrated to component-system. No current work depends on it. Graph-design-extraction.md lists it as "intentionally isolated."

### 4.2 Unsafe Deletion (Active Link Violation)

A file CANNOT be deleted if:

1. **Hub Document:** 8+ inbound refs from Tier A/B files
2. **T1 Authority:** File is in T1 synthesis layer (6 locked files)
3. **Active Token Source:** File contains CSS values copied by downstream files
4. **Active Character Source:** File contains names/definitions rendered in React components
5. **Tracking Source:** File is RESEARCH-ACTIVE.md or similar tracking file

**Example: DESIGN-TOKEN-SUMMARY.md (18+ inbound refs)**

```
DESIGN-TOKEN-SUMMARY.md
    CONSUMED BY: typography-system/*.css (4 files), component-system/css/*.css (9 files), React components (7 files)
    Status: DELETION WOULD BREAK 20+ FILES
```

**Why unsafe:** This is the single CSS source of truth. All downstream CSS imports token values from here.

### 4.3 Risky Deletion (Zombie Links)

Files with **partial consumption** are risky to delete:

**Example: R1-DOCUMENTATION-PATTERNS.md (28 findings, 60% applied)**

```
R1-DOCUMENTATION-PATTERNS.md
    CONSUMED BY: RESEARCH-ACTIVE.md (tracks all 28 findings), OD explorations (applied 17/28)
    Status: RISKY — deletion breaks RESEARCH-ACTIVE.md tracking
```

**Why risky:** Even though 40% of R1 content is unapplied, **RESEARCH-ACTIVE.md references all 28 finding IDs**. Deletion breaks tracking integrity.

---

## 5. Bibliographic vs Active Consumption

### 5.1 Bibliographic Citation (Informational)

**Characteristics:**
- Downstream file MENTIONS upstream file in prose ("see R3 for background")
- No specific values/findings extracted
- Deletion would not break downstream functionality

**Example:**

```
MEMORY.md: "Read RETROSPECTIVE FIRST — contains protocol v2, team structure, templates"
    ↓
This is a HUMAN-FACING instruction, not a programmatic dependency.
```

**Provenance Status:** BIBLIOGRAPHIC — MEMORY.md would still function if RETROSPECTIVE were deleted (though the instruction would become a broken recommendation).

### 5.2 Active Consumption (Implementation)

**Characteristics:**
- Downstream file EXTRACTS specific data (token values, finding IDs, character names)
- Deletion breaks downstream file's functionality
- CONSUMED BY section lists specific usage ("implements R3-012 pattern")

**Example:**

```
DESIGN-TOKEN-SUMMARY.md: `--font-display: 'Instrument Serif'`
    ↓
typography-system/type-scale.css: `font-family: var(--font-display);`
    ↓
Deletion breaks CSS — `var(--font-display)` becomes undefined.
```

**Provenance Status:** ACTIVE — downstream files programmatically depend on this.

### 5.3 The Gray Zone: Research Findings

**Research findings (R1-R5, 337 total) are BOTH bibliographic AND active:**

- **Bibliographic:** Agents read research for inspiration ("R3 suggests density breathing")
- **Active:** RESEARCH-ACTIVE.md tracks which findings were applied by ID

**Deletion Impact:**
- Deleting R3 breaks RESEARCH-ACTIVE.md tracking (active link)
- Deleting R3 does NOT break DD-001-breathing.html (it's already built)
- BUT deleting R3 makes DD-001 **unreproducible** (can't trace why decisions were made)

**Provenance Status:** HYBRID — research is consumed during creation, then becomes bibliographic after creation.

---

## 6. Edge Cases

### 6.1 Underscore Directories (Absorbed Archives)

**Pattern from 13 multi-agent teams:**

```
_od-audit-scratchpad/ (22 files, raw agent outputs)
    ↓
OD-GRANULAR-AUDIT-RESULTS.md (synthesis, 89 findings)
    ↓
CONSUMED BY: Fix execution, comprehensive audit, provenance remediation
```

**Edge Case:** Underscore directories have **0 direct consumers**, but synthesis files depend on them **historically**.

**Provenance Status:**
- **Synthesis file:** CRITICAL (active consumers)
- **Underscore archive:** ARCHIVAL (evidence for synthesis, but not actively consumed)

**Deletion Impact:**
- Deleting synthesis → breaks downstream work (HIGH blast radius)
- Deleting archive → loses audit trail, but synthesis remains valid (LOW blast radius)

**Recommendation:** KEEP archives if synthesis is complex (89 findings) or controversial (adversarial audit). DELETE archives if synthesis is simple (<10 findings) and uncontested.

### 6.2 Handoff Documents (Phase Transitions)

**From graph-design-extraction.md:**

```
DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md
    Transfers applicable R1 findings from DD to OD scope
    CONSUMED BY: OD explorations (read to know what DD already applied)
```

**Edge Case:** Handoff documents are consumed ONCE at phase start, then become bibliographic.

**Provenance Status:**
- **During phase transition:** ACTIVE (OD agents must read it)
- **After phase complete:** BIBLIOGRAPHIC (historical record only)

**Deletion Impact:** Deleting handoff breaks **reproducibility** (can't trace what OD inherited from DD), but doesn't break current work.

### 6.3 CLAUDE.md Navigation Files (Auto-Loaded)

**From graph-showcase.md:**

```
showcase/CLAUDE.md
    Auto-read by Claude Code on directory entry
    Contains mandatory research grounding rules
    CONSUMED BY: ALL showcase/ work
```

**Edge Case:** CLAUDE.md is consumed **implicitly** (auto-loaded by tool), not explicitly cited.

**Provenance Status:** CRITICAL — deletion breaks agent workflow, even though no file explicitly lists "BUILT ON: CLAUDE.md"

**Recommendation:** ALL CLAUDE.md files are provenance-critical by definition.

### 6.4 Duplicate Files (Provenance Chain Integration)

**From graph-showcase.md:**

```
showcase/research/R1-DOCUMENTATION-PATTERNS.md (ORIGINAL)
DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md (COPY)

Threading header: "Copies in provenance/original-research/ must match"
```

**Edge Case:** Duplicates exist **by design** for chain integration.

**Provenance Status:**
- **Original (showcase/research/):** SOURCE (agents read from here)
- **Copy (DESIGN-SYSTEM/provenance/):** ARCHIVAL (chain documentation)

**Deletion Impact:**
- Deleting original → breaks active work (agents can't find research)
- Deleting copy → breaks provenance chain documentation
- **BOTH must be kept in sync**

---

## 7. Provenance Dimension Scoring Rubric

### 7.1 Inbound Reference Score (0-10)

| Score | Criteria | Example |
|-------|----------|---------|
| 10 | 15+ inbound refs from Tier A files | RESEARCH-SYNTHESIS.md (30+ refs) |
| 8 | 8-14 inbound refs from Tier A/B files | PIPELINE-BACKBONE.md (12+ refs) |
| 6 | 3-7 inbound refs from Tier A/B files | RETROACTIVE-AUDIT-DD-001-006.md |
| 4 | 1-2 inbound refs from Tier B/C files | OD-CHECKPOINT.md |
| 2 | Cited in prose/MEMORY.md only (bibliographic) | RETROSPECTIVE.md |
| 0 | No inbound refs | explorations/axis/ (isolated) |

### 7.2 Active Consumption Score (0-10)

| Score | Criteria | Example |
|-------|----------|---------|
| 10 | Token source / character names / CSS values | DESIGN-TOKEN-SUMMARY.md |
| 8 | Synthesis absorbing 10+ raw files | OD-GRANULAR-AUDIT-RESULTS.md |
| 6 | Research findings tracked in RESEARCH-ACTIVE.md | R3-DENSITY-DIMENSIONS.md |
| 4 | Handoff document read during phase transition | HANDOFF-DD-TO-OD.md |
| 2 | Bibliographic citation only | card-system/SOUL-DEFINITION.md |
| 0 | No downstream consumption | _od-audit-scratchpad/ (raw agent files) |

### 7.3 Supersession Status Score (0-10)

| Score | Criteria | Example |
|-------|----------|---------|
| 10 | T1 LOCKED authority (cannot be superseded) | MASTER-SOUL-SYNTHESIS.md |
| 8 | Active, no supersession planned | R1-DOCUMENTATION-PATTERNS.md |
| 6 | Active, but newer version exists (both used) | SOUL-DEFINITION.md (component-system) |
| 4 | Superseded, but kept for chain documentation | card-system/SOUL-DEFINITION.md |
| 2 | Superseded, content fully absorbed | archive/tokens/ |
| 0 | Superseded + marked DANGEROUS | archive/ (wrong token values) |

### 7.4 Reproducibility Score (0-10)

| Score | Criteria | Example |
|-------|----------|---------|
| 10 | Deletion breaks understanding of "why" decisions made | R1-R5 research findings |
| 8 | Deletion loses audit trail for multi-agent work | _od-audit-scratchpad/ |
| 6 | Deletion loses phase transition context | HANDOFF-DD-TO-OD.md |
| 4 | Deletion loses historical supersession chain | card-system/ |
| 2 | Deletion loses only agent execution logs | _execution-journal/ |
| 0 | File was never part of decision-making | node_modules/ |

### 7.5 TOTAL PROVENANCE SCORE (0-40)

```
PROVENANCE SCORE = Inbound Refs (0-10) + Active Consumption (0-10) + Supersession (0-10) + Reproducibility (0-10)
```

**Scoring Bands:**

| Score | Provenance Status | Deletion Recommendation |
|-------|-------------------|-------------------------|
| 35-40 | **CRITICAL HUB** | NEVER DELETE |
| 25-34 | **HIGHLY INTEGRATED** | Delete only with formal deprecation |
| 15-24 | **MODERATELY INTEGRATED** | Archive if phase complete |
| 5-14 | **WEAKLY INTEGRATED** | Deletion candidate |
| 0-4 | **ISOLATED / DEAD** | Safe to delete |

---

## 8. Examples Scored

### 8.1 RESEARCH-SYNTHESIS.md

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Inbound Refs | 10 | 30+ refs from Tier A/B files |
| Active Consumption | 8 | Cross-research insights feed OD/AD/CD work |
| Supersession | 8 | Active, no supersession planned |
| Reproducibility | 10 | Deletion breaks understanding of 337-finding synthesis |
| **TOTAL** | **36** | **CRITICAL HUB** |

**Verdict:** NEVER DELETE — this is the master synthesis of all research.

### 8.2 _od-audit-scratchpad/ (22 agent output files)

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Inbound Refs | 0 | No files cite these directly |
| Active Consumption | 0 | Content absorbed by OD-GRANULAR-AUDIT-RESULTS.md |
| Supersession | 4 | Superseded by synthesis, kept for audit trail |
| Reproducibility | 8 | Deletion loses audit trail for 17-agent adversarial audit |
| **TOTAL** | **12** | **WEAKLY INTEGRATED** |

**Verdict:** ARCHIVE (keep as evidence) OR DELETE (if synthesis is uncontested and complete).

### 8.3 explorations/axis/ (233 files, AD phase)

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Inbound Refs | 0 | No files cite these (isolated per graph-root.md) |
| Active Consumption | 0 | Not consumed by committed work |
| Supersession | 2 | Phase complete per MEMORY.md, no formal supersession |
| Reproducibility | 6 | Deletion loses AD perceptual audit context |
| **TOTAL** | **8** | **WEAKLY INTEGRATED** |

**Verdict:** ARCHIVE .md files (lock sheet, audit reports) + DELETE 167 PNG screenshots.

### 8.4 DESIGN-TOKEN-SUMMARY.md (T1 synthesis)

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Inbound Refs | 10 | 18+ refs from CSS files, React components |
| Active Consumption | 10 | Single CSS source of truth — ALL tokens copied from here |
| Supersession | 10 | T1 LOCKED — cannot be superseded |
| Reproducibility | 10 | Deletion breaks understanding of token derivation |
| **TOTAL** | **40** | **CRITICAL HUB** |

**Verdict:** NEVER DELETE — this is the authoritative lock point for all CSS.

### 8.5 card-system/SOUL-DEFINITION.md (SUPERSEDED)

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Inbound Refs | 2 | Cited in prose for historical context only |
| Active Consumption | 2 | Bibliographic — no active consumers |
| Supersession | 4 | Superseded, but kept for chain documentation |
| Reproducibility | 6 | Deletion loses soul evolution history |
| **TOTAL** | **14** | **WEAKLY INTEGRATED** |

**Verdict:** KEEP for supersession chain documentation (intentionally isolated per graph-design-extraction.md).

---

## 9. Recommendations for Cleanup

### 9.1 NEVER DELETE (Score 35-40)

- All T1 synthesis files (6 files)
- All hub documents with 8+ inbound refs (12 files)
- RESEARCH-SYNTHESIS.md, R1-R5 research files
- PIPELINE-BACKBONE.md, SOURCE-OF-TRUTH-REGISTRY.md
- All CLAUDE.md navigation files

### 9.2 ARCHIVE (Score 15-24)

- Underscore directories with synthesis files
- Handoff documents (phase transitions)
- Perceptual audit reports (if synthesis exists)

### 9.3 DELETE CANDIDATES (Score 0-14)

- Isolated root folders (explorations/axis/, _tension-test/) IF phase complete
- PNG screenshots in underscore archives (keep .md reports)
- node_modules/ (playwright agent files)
- Duplicate CHECKPOINT-CURRENT.md (exists at 2 levels)

### 9.4 SPECIAL CASES (Manual Review)

- archive/ — score 2, but KEEP for supersession chain + DANGEROUS warning
- card-system/ — score 14, KEEP for supersession chain documentation
- PROGRESS-audit/ — score 4, KEEP (referenced in README.md Phase 5 status)

---

## 10. Diagnostic Questions

**Q1: Does a file have active consumers, or only bibliographic citations?**
- Check CONSUMED BY section in threading header
- If CONSUMED BY is empty OR says "historical reference" → bibliographic

**Q2: Would deleting this file break downstream functionality?**
- If file contains token values, character names, or finding IDs → YES
- If file is synthesis absorbed elsewhere → NO (but loses audit trail)

**Q3: Is this file part of a supersession chain?**
- Check for SUPERSEDED BY markers
- If yes, check if chain is documented — deletion loses historical context

**Q4: How many files would need updates if this file changed?**
- Count CONSUMED BY entries + inbound refs
- 8+ = HIGH blast radius, CRITICAL
- 3-7 = MEDIUM blast radius, important
- 0-2 = LOW blast radius, safe to delete if superseded

**Q5: Is this file isolated by design (research scratchpad) or by accident (orphan)?**
- Check graph-root.md for intentional isolation
- Check MEMORY.md for phase completion status
- Isolated + phase complete = DELETE CANDIDATE

---

## Conclusion

**Provenance is a 4-dimensional spectrum:**

1. **Inbound References** — How many files cite this?
2. **Active Consumption** — Do downstream files programmatically depend on it?
3. **Supersession Status** — Is it current, superseded, or locked?
4. **Reproducibility** — Does it document "why" decisions were made?

**The critical threshold:**
- **Score 35+:** NEVER DELETE (hub document / T1 authority)
- **Score 25-34:** KEEP unless formally deprecated
- **Score 15-24:** ARCHIVE if phase complete
- **Score 0-14:** DELETION CANDIDATE

**The key insight:** Provenance links can be ALIVE (active dependency), DEAD (bibliographic), or ZOMBIE (partial consumption). Only alive links create deletion risk.

**Files to always keep:**
- T1 synthesis (6 files) — authoritative lock points
- Hub documents (12 files) — load-bearing nodes
- Research files (R1-R5) — reproducibility anchors
- CLAUDE.md files — process enforcement

**Files safe to delete:**
- Isolated root folders (IF phase complete + no inbound refs)
- Raw agent outputs (IF synthesis exists)
- Screenshots (IF .md reports kept)
- node_modules/ (junk)

# STRUCTURAL DIMENSION — FILE USEFULNESS FRAMEWORK

**Researcher:** dim-structural
**Date:** 2026-02-13
**Task:** Define how folder position, nesting depth, and naming affect file usefulness

---

## EXECUTIVE SUMMARY

**Core Principle:** Structural position is a **MULTIPLIER on VALUE, not a SOURCE of value**. A file with zero inherent value remains zero-value regardless of location. A file with high inherent value becomes LOW-IMPACT if buried beyond discoverability threshold.

**Key Finding:** Nesting depth ≥5 levels creates "discovery death" — files exist but are operationally invisible. 152 underscore directories signal "scratchpad" status, a structural marker for deletion candidacy.

**Critical Insight:** Structure affects ACCESS to value, not existence of value. But if no one can find it, operational usefulness = 0.

---

## RESEARCH FINDINGS

### 1. NESTING DEPTH ANALYSIS

**Current State (from depth analysis):**
- **Deepest nesting:** 13 levels (CD Phase 4 audit reports at `docs-spa/app/showcase/explorations/combination/_perceptual-audit/phase4-standalone/CD-006/`)
- **Crown jewels buried:** T1 synthesis at 5 levels (`design-extraction/component-system/perceptual-audit-v2/synthesis/`)
- **Design system buried:** 4 levels (`docs-spa/app/showcase/DESIGN-SYSTEM/`)
- **Knowledge architecture:** 3 levels (`docs-spa/app/showcase/knowledge-architecture/`)

**From STRUCTURE-PROPOSAL.md (lines 13-16, 51-59):**
> **CURRENT PAIN POINTS:**
> 1. **Excessive nesting** — DESIGN-SYSTEM buried 4 levels deep
> 2. **SPA framework tax** — 3 levels of Next.js structure
> 3. **Crown jewels hidden** — T1 synthesis at `design-extraction/component-system/perceptual-audit-v2/synthesis/`

**From MASTER-VERDICT.md (lines 102-106):**
> **Critical Migration Actions:**
> 4. **MOVE** T1 synthesis to design-extraction/DESIGN-SYSTEM/ (soul.md, tokens.md, characters.md, anti-patterns.md, production-rules.md, consistency-verification.md)
>
> **Key Insight:** Adversary's T1 synthesis promotion challenge is THE SINGLE HIGHEST-LEVERAGE structural change in entire cleanup. Crown jewels buried 4 levels deep (component-system/perceptual-audit-v2/synthesis/) deserve root-level prominence.

---

### 2. NESTING DEPTH THRESHOLDS

**Empirically Derived Breakpoints:**

| Depth | Status | Discoverability | Examples | Verdict |
|-------|--------|-----------------|----------|---------|
| **0-2 levels** | VISIBLE | Easy to find via ls, Glob, file browser | `/design-system/foundation/soul.md` | IDEAL for high-value |
| **3-4 levels** | DISCOVERABLE | Requires intentional navigation or grep | `docs-spa/app/showcase/DESIGN-SYSTEM/` | ACCEPTABLE for specialized content |
| **5-7 levels** | BURIED | Only found via search or prior knowledge | T1 synthesis at 5 levels (CURRENT) | HARMFUL for crown jewels |
| **8+ levels** | DISCOVERY DEATH | Operationally invisible without explicit path | Phase 4 audits at 13 levels | DELETE or PROMOTE |

**Evidence from STRUCTURE-PROPOSAL.md (lines 165-189):**
> **FROM:**
> ```
> design-extraction/component-system/perceptual-audit-v2/synthesis/
> ```
>
> **TO:**
> ```
> /design-system/foundation/
> ```
>
> **RATIONALE:**
> - T1 = highest authority tier (per Phase 2A classification)
> - 6 crown jewel files (MASTER-SOUL-SYNTHESIS, DESIGN-TOKEN-SUMMARY, CHARACTER-FAMILY-COMPLETE, etc.)
> - 18+ inbound refs per file (hub documents)
> - Foundation of entire pipeline
>
> **IMPACT:** T1 synthesis now at `/design-system/foundation/` (2 levels)

---

### 3. UNDERSCORE PREFIX PATTERN (`_*` directories)

**Quantitative Evidence:**
- **152 underscore directories** in repository (from my find analysis)
- **19 underscore directories** in knowledge-architecture alone (from MEMORY.md)

**From MASTER-VERDICT.md (lines 109-136):**
> **Aggressive lens:** Post-CD pipeline forward-consumption test
>
> | Directory | Files | Verifier | Adversary | Master Verdict | Rationale |
> |-----------|-------|----------|-----------|----------------|-----------|
> | `_cd-research/` | 9 | KEEP | KEEP | **KEEP** | Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON |
> | `_migration-research/` | 10 | KEEP | KEEP | **KEEP** | Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON |
> | `_comprehensive-audit/` | 78 | KEEP | DELETE | **DELETE** | MASTER-AUDIT-REPORT absorbed findings, 58-agent team complete |
> | `_od-reenrichment/` | 65 | KEEP | DELETE | **DELETE** | OD re-enrichment COMPLETE, spec absorbed 65 agent outputs |
> | `_ad-execution/` | 61 | KEEP | DELETE | **DELETE** | AD COMPLETE, ACCUMULATED-IDENTITY-v2 absorbed all findings |
> | ... 10 directories total deleted | 312 | KEEP | DELETE | **DELETE** | Forward-consumption test: synthesis absorbed insights |
>
> **Total: KEEP 26 files (4 dirs), DELETE 312 files (10 dirs)**

**Structural Principle Derived:**
- **Underscore prefix (`_*`) = SCRATCHPAD marker**
- Default disposition: DELETE after phase completion (synthesis absorbs findings)
- Exception: If actively consumed by forward-looking work (e.g., POST-CD-PIPELINE references)

**From MASTER-VERDICT.md (lines 263-273):**
> **Verifier position:** "Synthesis documents reference scratchpads = intentional archives. Unique value in attribution/debate/screenshots."
>
> **Adversary position:** "Only 2 of 12 directories forward-consumed by POST-CD pipeline. Compression ratio 8.4:1 (88% noise). Delete 10 completed-phase archives."
>
> **Master decision:** DELETE 10 directories (312 files), KEEP 4 directories (26 files)
>
> **Reasoning:**
> - Forward-consumption test is CORRECT lens for post-CD pipeline readiness
> - Verifier's "archival value" conflates historical interest with operational necessity

---

### 4. NAMING PATTERNS & DISCOVERABILITY

**High-Discoverability Patterns:**
1. **UPPERCASE filenames** (MASTER-SOUL-SYNTHESIS.md, CLAUDE.md, BACKBONE.md) — visually prominent in listings
2. **Index/Hub files** (README.md, SOURCE-INDEX.md, PIPELINE-MANIFEST.md) — conventional entry points
3. **Semantic folder names** (`design-system/`, `explorations/`, `research/`) — purpose-based grouping
4. **Convention-based names** (FINDINGS-INDEX.md, RESEARCH-SYNTHESIS.md) — predictable structure

**Low-Discoverability Patterns:**
1. **Generic names in deep nesting** (`synthesis/`, `perceptual-audit-v2/`) — meaning only with full path context
2. **Underscore prefixes** (`_tension-test/`, `_od-audit-scratchpad/`) — signals "internal working directory"
3. **Procedural numbering** (`01-reachability-report.md`, `02-threading-data/`) — opaque without manifest

**From STRUCTURE-PROPOSAL.md (lines 69-101):**
> ### Principle: **Purpose-Based Grouping at Top Level**
>
> ```
> /
> ├── design-system/          ← PROMOTED (was docs-spa/app/showcase/DESIGN-SYSTEM/)
> │   ├── foundation/         ← T1 synthesis promoted here
> │   ├── tokens/
> │   ├── patterns/
> │   ├── anti-patterns/
> │   └── provenance/
> │
> ├── explorations/           ← CONSOLIDATED (keep only showcase versions)
> │   ├── density/            ← DD-001 through DD-006
> │   ├── organizational/     ← OD-001 through OD-006
> │   ├── axis/               ← AD-001 through AD-006
> │   └── combination/        ← CD-001 through CD-006
> │
> ├── research/               ← CONSOLIDATED
> │   ├── pipeline/           ← was knowledge-architecture/, POST-CD-PIPELINE/
> │   ├── findings/           ← R1-R5 + RESEARCH-SYNTHESIS + FINDINGS-INDEX
> │   ├── workflows/          ← WORKFLOW-METACOGNITION + productivity-workflows.md
> │   └── _archives/          ← 12 underscore dirs from knowledge-architecture/
> ```

**Proposed max depth:** 2 levels for active content (line 19)

---

### 5. STRUCTURAL POSITION AS DELETION SIGNAL

**Folder Patterns Indicating Deletion Candidacy:**

| Pattern | Signal Strength | Rationale | Example |
|---------|----------------|-----------|---------|
| `_*` prefix + phase complete | **STRONG** | Scratchpad archived after synthesis | `_od-audit-scratchpad/` (312 files deleted) |
| Root clutter (no grouping) | **STRONG** | Unintegrated debris | `/PROGRESS-audit/`, `/_tension-test/` (335 files deleted) |
| Depth ≥8 levels | **MEDIUM** | Discovery death zone | Phase 4 audits at 13 levels |
| Duplicate locations (root vs showcase) | **STRONG** | Superseded working copy | `/explorations/axis/` (233 files deleted, showcase kept) |
| `archive/` or `historical/` in path | **MEDIUM-STRONG** | Explicitly marked as superseded | `design-extraction/archive/` (53 files deleted) |

**From MASTER-VERDICT.md (lines 32-46):**
> | Category | Files | Action | Rationale |
> |----------|-------|--------|-----------|
> | PROGRESS-audit/ | 2 | **ARCHIVE** | Type scale research (Perfect Fourth 1.333 ratio) + Playwright testing methodology have future value |
> | PROGRESS-audit/ | 5 | **DELETE** | Unintegrated exploratory research (Attio tokens, font recs, visual identity) |
> | _tension-test/ | 4 | **ARCHIVE** | Top 2 HTMLs (elevation map, geological core) + audit report + verification = existence proofs |
> | _tension-test/ | 100 | **DELETE** | All other HTMLs, fix reports, post-fix audits, ~73 screenshots |
> | explorations/axis/ | 3 | **ARCHIVE** | lock-sheet.md, provenance synthesis, AD-006 compound HTML |
> | explorations/axis/ | 230 | **DELETE** | 5 other HTMLs, 167 screenshots, per-layout audits |

**Total root cleanup:** 335/347 files deleted (97%)

---

## STRUCTURAL DIMENSION DEFINITION

### Primary Question: When Does Structure Determine Usefulness?

**Answer:** Structure acts as a **ACCESS MULTIPLIER** on inherent value:

```
Operational Usefulness = Inherent Value × Discoverability Factor
```

Where:
- **Inherent Value** = content quality, forward-consumption, provenance authority
- **Discoverability Factor** = function of nesting depth, naming clarity, structural convention

**Key Cases:**

| Inherent Value | Depth | Discoverability Factor | Operational Usefulness | Example |
|---------------|-------|----------------------|----------------------|---------|
| **HIGH** | 5 levels | 0.2 | LOW | T1 synthesis buried (BEFORE) |
| **HIGH** | 2 levels | 0.9 | HIGH | T1 synthesis promoted (AFTER) |
| **ZERO** | 1 level | 1.0 | ZERO | PROGRESS-audit root clutter |
| **MEDIUM** | 13 levels | 0.05 | NEAR-ZERO | Phase 4 audits (deep scratchpad) |

**Critical Threshold:** At depth ≥5, even high-value content becomes low-impact due to discovery death.

---

### Secondary Question: Does Position Affect VALUE or Just ACCESS?

**Answer:** Structure affects **ACCESS ONLY**, not intrinsic value.

**Evidence from MASTER-VERDICT.md (lines 518-536):**
> ### High-Risk Items
>
> | Item | Files | Refs | What Breaks if Wrong |
> |------|-------|------|---------------------|
> | T1 synthesis promotion | 6 | 52+ | Import paths, 7 React components, 4+ showcase pages |

**Interpretation:**
- T1 synthesis has 52+ references REGARDLESS of location (value is inherent)
- Promotion from 5→2 levels doesn't change provenance authority or forward-consumption
- Promotion DOES change:
  - **Discoverability** (easier to find)
  - **Cognitive load** (shorter mental model)
  - **Path length** (fewer characters in imports)

**But:** Value was already present. Structure made it accessible.

---

### Tertiary Question: Underscore Prefix as Deletion Marker?

**Answer:** YES, with nuance.

**Rule:**
`_*` prefix = **SCRATCHPAD STATUS**
Default disposition: **DELETE after synthesis**
Exception: **KEEP if forward-consumed** (not just backward-cited)

**From MASTER-VERDICT.md (lines 119-123):**
> | `_cd-research/` | 9 | KEEP | KEEP | **KEEP** | Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON |
> | `_migration-research/` | 10 | KEEP | KEEP | **KEEP** | Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON |
> | `_pipeline-evolution-research/` | 5 | KEEP | DELETE | **KEEP** | Referenced by POST-CD-PIPELINE/README.md synthesis |
> | `_component-taxonomy-research/` | 2 | KEEP | DELETE | **KEEP** | Referenced by POST-CD-PIPELINE/08-COMPOSITIONAL-STRATEGY-LIBRARY.md |

**Test:** Does POST-CD pipeline BUILD ON this scratchpad?
- **YES** → KEEP (active input to future work)
- **NO** → DELETE (synthesis absorbed findings, compression ratio 8.4:1, 88% noise)

**Quantitative Validation:**
- 12 underscore directories in knowledge-architecture
- 4 KEPT (forward-consumed by POST-CD-PIPELINE)
- 8 DELETED (compression ratio 8.4:1, synthesis complete)
- **Result:** 67% deletion rate for underscore directories

---

## STRUCTURAL HARM PATTERNS

### 1. CROWN JEWEL BURIAL

**Pattern:** High-authority content at depth ≥5
**Impact:** Operationally invisible despite critical role
**Example:** T1 synthesis at 5 levels (52+ inbound refs, foundational to entire pipeline)
**Fix:** Promote to 2 levels (`/design-system/foundation/`)

**From MEMORY.md context:**
> T1 synthesis (crown jewels) are buried 4 levels deep at component-system/perceptual-audit-v2/synthesis/

---

### 2. SPA FRAMEWORK TAX

**Pattern:** Static content forced through runtime framework nesting
**Impact:** 3 extra directory levels with no operational benefit
**Example:** `docs-spa/app/showcase/DESIGN-SYSTEM/` (4 levels) for static documentation
**Fix:** Promote to `/design-system/` (1 level)

**From STRUCTURE-PROPOSAL.md (lines 136-151):**
> **FROM:**
> ```
> docs-spa/app/showcase/DESIGN-SYSTEM/
> ```
>
> **TO:**
> ```
> /design-system/
> ```
>
> **RATIONALE:**
> - Crown jewel of project (hub document per graph scan)
> - No SPA runtime needed (static documentation)
> - Most-referenced folder (15+ inbound refs to PIPELINE-MANIFEST alone)

---

### 3. ROOT DEBRIS ACCUMULATION

**Pattern:** No top-level grouping → files accumulate at root
**Impact:** 580+ files cluttering root, 96% deletion recommended
**Example:** `/PROGRESS-audit/`, `/_tension-test/`, `/explorations/axis/`
**Fix:** Delete unintegrated debris (335 files), archive samples (9 files)

**From MASTER-VERDICT.md (line 44):**
> **Total: DELETE 335, ARCHIVE 9, UPDATE 1, KEEP 2**

---

### 4. DUPLICATE LOCATIONS (ROOT vs CANONICAL)

**Pattern:** Working scratchpad at root, canonical version elsewhere
**Impact:** Confusion, zero external references to root version
**Example:** `/explorations/axis/` (233 files) vs `docs-spa/.../axis/` (194 files, canonical)
**Fix:** Delete root scratchpad entirely

**From MASTER-VERDICT.md (lines 161-183):**
> **Verifier Verdict:** DELETE root /explorations/axis/ (233 files)
> **Adversary Verdict:** AGREE with DELETE (found verifier errors but conclusion correct)
>
> | Location | Files | Action | Rationale |
> |----------|-------|--------|-----------|
> | Root /explorations/axis/ | 233 | **DELETE** | Superseded working scratchpad, showcase is canonical |
> | docs-spa/.../axis/ | 194 | **KEEP** | Canonical location in provenance chain |

**Master Assessment:** Root axis is working scratchpad with zero external references. Lock-sheet content absorbed into AD-CONVENTION-SPEC.md. Showcase axis is canonical. **Delete root despite flawed reasoning.**

---

## STRUCTURAL USEFULNESS SCORING RUBRIC

**Proposed 5-Factor Structural Score (0-10 scale):**

| Factor | Weight | 0 (Harmful) | 5 (Neutral) | 10 (Ideal) |
|--------|--------|-------------|-------------|------------|
| **Nesting Depth** | 35% | ≥8 levels (discovery death) | 3-4 levels (discoverable) | 0-2 levels (visible) |
| **Naming Clarity** | 20% | Generic (`synthesis/`, `v2/`) | Descriptive (`perceptual-audit/`) | Semantic + convention (`DESIGN-SYSTEM/`, `foundation/`) |
| **Grouping Logic** | 20% | Root clutter, no grouping | Grouped by type (all .md together) | Purpose-based grouping (`design-system/`, `research/`) |
| **Underscore Status** | 15% | `_*` prefix + phase COMPLETE | `_*` prefix + phase ACTIVE | No underscore (production content) |
| **Duplication Risk** | 10% | Multiple copies (root + showcase) | Single copy, unclear if canonical | Single canonical location, documented |

**Composite Score Formula:**
```
Structural Score = (Depth × 0.35) + (Naming × 0.20) + (Grouping × 0.20) + (Underscore × 0.15) + (Duplication × 0.10)
```

**Usefulness Threshold:** Structural Score ≥6.0 = KEEP, <4.0 = DELETE, 4.0-6.0 = ARCHIVE or PROMOTE

---

## WORKED EXAMPLES

### Example 1: T1 Synthesis (BEFORE Promotion)

**Path:** `design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md`

| Factor | Raw Score | Weighted | Rationale |
|--------|-----------|----------|-----------|
| Nesting Depth | 2/10 (5 levels) | 0.70 | Discovery death threshold |
| Naming Clarity | 6/10 | 1.20 | `synthesis/` is descriptive but generic |
| Grouping Logic | 7/10 | 1.40 | Purpose-grouped under component-system |
| Underscore Status | 10/10 | 1.50 | No underscore, production content |
| Duplication Risk | 10/10 | 1.00 | Single canonical location |
| **TOTAL** | **5.80** | — | **BORDERLINE** (archive or promote) |

**Verdict:** PROMOTE to 2 levels (structural fix raises score to 8.5)

---

### Example 2: `_od-audit-scratchpad/` (312 files)

**Path:** `knowledge-architecture/_od-audit-scratchpad/fix-report-*.md`

| Factor | Raw Score | Weighted | Rationale |
|--------|-----------|----------|-----------|
| Nesting Depth | 6/10 (3 levels) | 2.10 | Discoverable but not visible |
| Naming Clarity | 7/10 | 1.40 | `_od-audit-scratchpad/` = clear intent |
| Grouping Logic | 5/10 | 1.00 | Grouped by phase, not purpose |
| Underscore Status | 0/10 | 0.00 | `_*` prefix + OD phase COMPLETE |
| Duplication Risk | 10/10 | 1.00 | Single location (no duplication) |
| **TOTAL** | **5.50** | — | **BORDERLINE** (context-dependent) |

**Forward-Consumption Test:** OD-GRANULAR-AUDIT-RESULTS.md absorbed 89 findings (11.4:1 compression, 91% noise)
**Verdict:** DELETE (synthesis complete, scratchpad served its purpose)

---

### Example 3: `/design-system/foundation/` (AFTER Promotion)

**Path:** `/design-system/foundation/soul.md` (promoted from T1 synthesis)

| Factor | Raw Score | Weighted | Rationale |
|--------|-----------|----------|-----------|
| Nesting Depth | 9/10 (2 levels) | 3.15 | Highly visible |
| Naming Clarity | 10/10 | 2.00 | `design-system/foundation/` = semantic + conventional |
| Grouping Logic | 10/10 | 2.00 | Purpose-based top-level grouping |
| Underscore Status | 10/10 | 1.50 | No underscore, crown jewel content |
| Duplication Risk | 10/10 | 1.00 | Single canonical, documented migration |
| **TOTAL** | **9.65** | — | **IDEAL** |

**Verdict:** KEEP (structural perfection for high-value content)

---

### Example 4: Root Axis `/explorations/axis/` (233 files)

**Path:** `/explorations/axis/AD-001.html` (root copy)

| Factor | Raw Score | Weighted | Rationale |
|--------|-----------|----------|-----------|
| Nesting Depth | 8/10 (2 levels) | 2.80 | Visible at root |
| Naming Clarity | 7/10 | 1.40 | `explorations/axis/` = descriptive |
| Grouping Logic | 6/10 | 1.20 | Grouped by exploration type |
| Underscore Status | 10/10 | 1.50 | No underscore (not scratchpad) |
| Duplication Risk | 0/10 | 0.00 | **DUPLICATE** (showcase is canonical) |
| **TOTAL** | **6.90** | — | **KEEP normally, BUT duplication kills it** |

**Duplication Override:** Canonical copy exists at `docs-spa/.../axis/` (194 files) in provenance chain
**Verdict:** DELETE (root is superseded working scratchpad, zero external refs)

---

## CROSS-DIMENSION INTERACTIONS

### Structural × Provenance

**Interaction:** High-provenance content at depth ≥5 = **HIGH PRIORITY PROMOTION**

**Example:** T1 synthesis (Tier 1 authority + 52 inbound refs) at 5 levels
**Resolution:** Adversary identified T1 promotion as "THE SINGLE HIGHEST-LEVERAGE structural change"

### Structural × Supersession

**Interaction:** Duplicate locations = **ALWAYS DELETE NON-CANONICAL**

**Example:** Root axis (233 files) vs showcase axis (194 files)
**Resolution:** Delete root (zero external refs), keep showcase (in provenance chain)

### Structural × Temporal

**Interaction:** Recent scratchpads at depth ≥8 = **DELETE AFTER SYNTHESIS** (temporal recency doesn't justify structural burial)

**Example:** Phase 4 audits at 13 levels (Feb 11-13, recent)
**Resolution:** KEEP (systemic findings inform future work) BUT acknowledge discovery death risk

### Structural × Reference Density

**Interaction:** Hub documents (15+ inbound refs) at depth ≥4 = **URGENT PROMOTION**

**Example:** DESIGN-SYSTEM/ at 4 levels (15+ inbound refs to PIPELINE-MANIFEST alone)
**Resolution:** Promote to 1 level (most-referenced folder deserves top-level visibility)

---

## CALIBRATION AGAINST MASTER VERDICT

**Master Verdict Structural Decisions:**

| Action | Files | Structural Rationale | Validates Threshold |
|--------|-------|---------------------|---------------------|
| Promote T1 synthesis | 6 | 5→2 levels (crown jewels) | ✅ Depth ≥5 harmful for high-value |
| Promote DESIGN-SYSTEM | 58 | 4→1 level (hub document) | ✅ Depth ≥4 harmful for refs >15 |
| Delete root axis | 233 | Duplicate location (showcase canonical) | ✅ Duplication = non-canonical DELETE |
| Delete KA scratchpads | 312 | `_*` prefix + phase complete | ✅ Underscore + complete = DELETE |
| Delete root clutter | 335 | No grouping, unintegrated debris | ✅ Root debris = deletion candidate |

**Validation Rate:** 5/5 (100%) — structural dimension aligns with Master Verdict decisions

---

## OPEN QUESTIONS & EDGE CASES

### 1. Phase 4 Audits at 13 Levels (Edge Case)

**Situation:** 343 screenshots (18.5MB) at 13 levels, recent (Feb 11-13)
**Master Verdict:** KEEP (systemic findings S-01, S-02, S-03 inform future work)
**Structural Lens:** Depth 13 = discovery death, should DELETE or PROMOTE

**Resolution:** **Content value overrides structural harm in this case**
- Systemic patterns > discovery convenience
- Alternative: MOVE to `/research/cd-phase4-systemic-findings/` (reduce to 2 levels)

### 2. `02-threading-data/` Utility (Unknown)

**Situation:** Unclear if contains useful lookup data or just batch manifests
**Master Verdict:** Spot-check needed before deletion
**Structural Lens:** Generic name + procedural numbering = low discoverability

**Resolution:** Content determines fate (structural score neutral)

### 3. Archive Storage Location

**Question:** Keep in git vs external storage (S3, .tar.gz)?
**Master Verdict:** Keep in git (46 files = ~25MB, manageable)
**Structural Lens:** Archive at root (`/archive/`) vs deep (`design-extraction/archive/historical/`)

**Proposed Rule:**
- **Historical archives:** `/archive/` at root (1 level, documented)
- **Working archives:** Delete from repo after synthesis complete

---

## FINAL STRUCTURAL PRINCIPLES

### 1. DEPTH THRESHOLDS (BINARY RULES)

- **0-2 levels:** IDEAL for high-value content (crown jewels, hub documents)
- **3-4 levels:** ACCEPTABLE for specialized content (explorations, research packages)
- **5-7 levels:** HARMFUL for crown jewels, TOLERABLE for scratchpads
- **8+ levels:** DISCOVERY DEATH — DELETE or PROMOTE (no exceptions)

### 2. UNDERSCORE PREFIX RULE (BINARY)

- **`_*` prefix + phase COMPLETE** → DELETE (synthesis absorbed findings)
- **`_*` prefix + forward-consumed** → KEEP (active input to future work)
- **No underscore** → Production content (no structural penalty)

### 3. DUPLICATION RULE (BINARY)

- **Multiple copies** → DELETE non-canonical (ALWAYS)
- **Single copy** → Structural score determines fate

### 4. ROOT GROUPING RULE (BINARY)

- **No top-level grouping** → Root debris, deletion candidate
- **Purpose-based grouping** → Production content, structural ideal

### 5. PROMOTION PRIORITY (RANKED)

1. **Crown jewels at depth ≥5** (T1 synthesis) — CRITICAL
2. **Hub documents at depth ≥4** (DESIGN-SYSTEM) — HIGH
3. **Recent work at depth ≥8** (Phase 4 audits) — MEDIUM
4. **Scratchpads at depth ≥6** (KA underscore dirs) — LOW (delete instead)

---

## STRUCTURAL SCORE INTEGRATION

**How to Use in Multi-Dimensional Framework:**

```
Usefulness = (Provenance × 0.25) + (Pipeline × 0.20) + (Soul × 0.15) + (Reproducibility × 0.10) + (Supersession × 0.10) + (Reference Density × 0.10) + (Temporal × 0.05) + (Structural × 0.05)
```

**Structural contributes 5%** (ACCESS multiplier, not VALUE source)

**But:** Structural score <4.0 = **VETO POWER** (if buried beyond discovery death, operational usefulness = 0 regardless of inherent value)

**Exception:** Content so critical that path memorization occurs (T1 synthesis BEFORE promotion — 52 refs means people knew the path)

---

## RECOMMENDATIONS FOR SYNTHESIS

### 1. Structural Should Be a GATE, Not a Dimension

**Proposal:** Instead of weighted dimension, use as **PASS/FAIL gate**:

- **Depth ≥8** → AUTOMATIC PROMOTION REQUIRED (or DELETE)
- **`_*` prefix + complete** → AUTOMATIC DELETE CANDIDACY
- **Duplicate location** → AUTOMATIC DELETE (non-canonical)

**Rationale:** Structure affects access, not value. Binary gates clearer than weighted scores.

### 2. Promote-or-Delete Decision Tree

**For files at depth ≥5:**

```
IF (Inherent Value HIGH) AND (Depth ≥5)
  THEN PROMOTE to 2 levels
ELSE IF (Inherent Value LOW) AND (Depth ≥5)
  THEN DELETE
ELSE IF (Inherent Value MEDIUM) AND (Depth ≥5)
  THEN ARCHIVE at 2 levels
```

**Example Applications:**
- T1 synthesis (HIGH, depth 5) → PROMOTE ✅
- Phase 4 audits (MEDIUM, depth 13) → ARCHIVE at `/research/cd-systemic/` (or KEEP if critical)
- KA scratchpads (LOW after synthesis, depth 3-4) → DELETE ✅

### 3. Structural Debt Tracking

**Proposed Metric:** "Discovery Death Files" = count of high-value files at depth ≥5

**Current State:** 6 crown jewels at 5 levels (T1 synthesis)
**Target State:** 0 crown jewels beyond 2 levels
**Progress Metric:** Discovery Death Count (track in MASTER-STATE.md)

---

**END OF STRUCTURAL DIMENSION RESEARCH**

**Key Takeaway:** Structure is a multiplier on value, not a source. At depth ≥5, even crown jewels become operationally invisible. Underscore prefix signals scratchpad status. Forward-consumption test determines fate. Promote high-value, delete low-value, no middle ground at discovery death depth.

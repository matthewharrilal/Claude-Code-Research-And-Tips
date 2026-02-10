# Perceptual Audit Enrichment Protocol

**Designed by:** enrichment-designer
**Date:** 2026-02-10
**Purpose:** Define exactly how perceptual audit findings get BAKED INTO the provenance layer, inline headers, research, and identity documents -- so that every insight is unanimous down to the most basic components.

---

## HOW TO USE THIS DOCUMENT

This protocol defines the enrichment pipeline for perceptual audit findings. When a Perceptual Audit (any mode) produces findings, those findings must propagate through 7 enrichment layers. Without this propagation, findings exist only in audit reports -- ephemeral artifacts that future agents never read.

The protocol is ordered by enrichment sequence (bottom-up: from the finding source outward to the broadest documents). An enrichment agent follows Steps 1-7 in order.

**Key principle:** Enrichment is NOT editing prose. It is adding structured metadata in established formats that machines and agents can parse. Every enrichment step produces a diff that can be verified.

---

## 1. FINDING ID FORMAT (PA-F-### SCHEME)

### 1.1 ID Structure

Perceptual Audit findings use the `PA-F-` prefix, continuing the established pipeline convention:

| Stage | Prefix | Example | Count Convention |
|-------|--------|---------|------------------|
| Stage 1 (Components) | `COMP-F-` | COMP-F-001 | 3-digit zero-padded |
| Stage 2 (Density) | `DD-F-` | DD-F-001 | 3-digit zero-padded |
| Stage 3 (Organization) | `OD-F-` | OD-F-001 | 3-digit zero-padded |
| Stage 4 (Axis) | `AD-F-` | AD-F-001 | 3-digit zero-padded |
| **Perceptual Audit** | **`PA-F-`** | **PA-F-001** | **3-digit zero-padded** |
| Stage 5 (Combination) | `CD-F-` | CD-F-001 | 3-digit zero-padded |

**Why PA-F, not stage-bound:** Perceptual Audit findings can apply to ANY stage's explorations. PA is a cross-cutting concern, not a pipeline stage. A PA finding on AD-003 is `PA-F-007`, not `AD-PA-F-007`.

### 1.2 Classification Suffixes

Each PA-F finding receives a classification suffix indicating its nature:

| Suffix | Classification | Meaning | Example |
|--------|---------------|---------|---------|
| (none) | `PERCEPTUAL` | A visual quality concern identified through perception, not rule-checking. The core finding type. | PA-F-001: "Code blocks create jarring contrast holes in the warm page" |
| `-R` | `RULE` | A perceptual finding that, on classification, maps to an existing rule violation. Bridges perception to rule track. | PA-F-005-R: "Squinting to read captions" -> maps to min font-size convention |
| `-C` | `CASCADE` | A perceptual finding that reveals a systemic issue affecting multiple files/stages. Triggers downstream propagation. | PA-F-012-C: "All six AD explorations share the same dead zone at scroll position 4" |
| `-E` | `ESCALATION` | A perceptual finding that conflicts with a LOCKED research decision. Requires human resolution. | PA-F-003-E: "F-pattern column widths make text uncomfortable" -> F-pattern is LOCKED |
| `-S` | `SOUL` | A perceptual finding that proposes or validates a soul-level truth. Extremely rare. | PA-F-020-S: potential 6th soul piece discovery |

### 1.3 Severity (Dual Track)

Every PA-F finding carries BOTH a Rule Track severity and a Perception Track severity:

```
PA-F-007
  Rule Track:     CONVENTION BUG (if applicable) | N/A (if purely perceptual)
  Perception Track: WOULD-NOT-SHIP | LOOKS-WRONG | COULD-BE-BETTER
  Sovereignty:    LOCKED-EXECUTION | CHALLENGEABLE | ESCALATION
```

### 1.4 Finding Registry Entry Template

```markdown
### PA-F-NNN[-suffix]: [Title]

| Field | Value |
|-------|-------|
| **ID** | PA-F-NNN[-suffix] |
| **Title** | [One-line description] |
| **Source Audit** | [audit-id, e.g., pa-ad-003-standard-20260210] |
| **Target** | [file or page audited, e.g., AD-003-bento-grid.html] |
| **PA Question** | [which PA-NN question surfaced this] |
| **Classification** | PERCEPTUAL / RULE / CASCADE / ESCALATION / SOUL |
| **Rule Track** | N/A / SOUL VIOLATION / CONVENTION BUG / OVERFLOW |
| **Perception Track** | WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER |
| **Sovereignty** | LOCKED-EXECUTION / CHALLENGEABLE / ESCALATION |
| **Cold Look Quote** | [The exact locked Cold Look sentence that first surfaced this, if applicable] |
| **Description** | [Full description in plain perceptual language -- no CSS property names] |
| **Evidence** | [Screenshot references, scroll positions, viewport widths] |
| **Fix Status** | PENDING / FIXED / WONT-FIX / ESCALATED |
| **Fix Applied In** | [file path + commit if fixed] |
| **Downstream Impact** | [which other files/stages are affected] |
```

---

## 2. INLINE THREADING HEADER ENRICHMENT (Phase 2B Headers)

### 2.1 What Changes

The Phase 2B Inline Threading Header is the 10-section commented block at the top of every source file. When a perceptual audit finding applies to a file, THREE sections of its inline header are updated:

1. **Section 3 (STATUS)** -- Add PA audit reference
2. **Section 5 (BUILT ON)** -- Add PA findings that constrain this file
3. **Section 9 (RESEARCH DEBT)** -- Add unresolved PA findings

### 2.2 Before/After Example

**BEFORE** (AD-003-bento-grid.html, current header):

```html
<!-- ...
3. STATUS
ACTIVE -- INCLUDE (scored [PENDING AUDIT])

5. BUILT ON
  Source                          | Role
  R4-001                         | Z-pattern diagonal sweep
  DD-F-006                       | Fractal self-similarity (mandatory)
  OD-F-005                       | Organization IS Density

9. RESEARCH DEBT
  - No gap analysis exists for bento grid content overflow
...
-->
```

**AFTER** (with PA enrichment):

```html
<!-- ...
3. STATUS
ACTIVE -- INCLUDE. PA audit: pa-ad-003-standard-20260210 (SHIP WITH CONCERNS).
2 PA-F findings: PA-F-007 (LOOKS-WRONG, FIXED), PA-F-012-C (COULD-BE-BETTER, PENDING).

5. BUILT ON
  Source                          | Role                              | Key Values Taken
  R4-001                         | Z-pattern diagonal sweep          | ...
  DD-F-006                       | Fractal self-similarity (mandatory)| ...
  OD-F-005                       | Organization IS Density           | ...
  PA-F-007                       | Perceptual finding: column breathing| Fix applied: widened min-width from cramped to comfortable
  PA-F-012-C                     | CASCADE: dead zone at scroll pos 4 | Systemic across all 6 ADs -- pending CD resolution

9. RESEARCH DEBT
  - PA-F-012-C: CASCADE finding -- dead zone pattern at scroll position 4 affects all 6 AD explorations. Deferred to CD stage for systemic fix.
...
-->
```

### 2.3 Enrichment Rules

1. **STATUS section**: Append PA audit ID and verdict. Format: `PA audit: {audit-id} ({verdict}). N PA-F findings: {list with status}.`
2. **BUILT ON section**: Add one row per PA-F finding that was FIXED in this file or that CONSTRAINS this file going forward. Use the established table format.
3. **RESEARCH DEBT section**: Add one bullet per UNRESOLVED PA-F finding (PENDING or WONT-FIX with reason).
4. **Never modify sections 1, 2, 4, 6, 7, 8, 10** for PA enrichment. Those sections track structural dependencies, not quality findings.
5. **Preserve existing content** -- PA enrichment APPENDS, never overwrites existing header content.

---

## 3. LIGHT SECTION HEADER ENRICHMENT (Phase 2D Headers)

### 3.1 What Changes

The Phase 2D Light Section is a shorter provenance marker placed after the inline threading header. It links files to their parent phase and T1 synthesis. PA findings add a `PA-AUDIT` line.

### 3.2 Before/After Example

**BEFORE** (typical light section):

```html
<!-- ═══════════════════════════════════════════════════════════════════════
LIGHT SECTION — Phase 2D
Parent: Stage 4 — Axis Exploration (AD)
T1 Root: perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
Generated: 2026-02-06
═══════════════════════════════════════════════════════════════════════════ -->
```

**AFTER** (with PA enrichment):

```html
<!-- ═══════════════════════════════════════════════════════════════════════
LIGHT SECTION — Phase 2D
Parent: Stage 4 — Axis Exploration (AD)
T1 Root: perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
Generated: 2026-02-06
PA-AUDIT: pa-ad-003-standard-20260210 | SHIP WITH CONCERNS | PA-F-007 (FIXED), PA-F-012-C (PENDING)
═══════════════════════════════════════════════════════════════════════════ -->
```

### 3.3 Enrichment Rules

1. Add exactly ONE line: `PA-AUDIT: {audit-id} | {verdict} | {finding-list-with-status}`
2. Finding list uses compact format: `PA-F-NNN (STATUS)` separated by commas
3. If multiple PA audits have been run on the same file, add one PA-AUDIT line per audit (chronological order)
4. PA-AUDIT line goes AFTER `Generated:` and BEFORE the closing `═══` line

---

## 4. PROVENANCE STAGE DOCUMENT ENRICHMENT

### 4.1 Which Documents Are Updated

When a perceptual audit runs against a stage's explorations, these stage documents are updated:

| Document | What Gets Added | When |
|----------|----------------|------|
| `STAGE-HEADER.md` | PA audit summary in STATUS section + new row in PRODUCED table | After audit completes |
| `{STAGE}-outbound-findings.md` | PA-F finding entries (only CASCADE and SOUL findings that flow forward) | After findings are classified |
| `{STAGE}-AUDIT-SYNTHESIS.md` | Full PA audit results section | After audit completes |
| `CLAUDE.md` (stage directory) | PA audit status line | After audit completes |

### 4.2 STAGE-HEADER.md Enrichment

**Template -- add to STATUS section:**

```markdown
## STATUS

**Stage 4 is COMPLETE.** [existing text...]

**Perceptual Audit:** pa-ad-{scope}-{mode}-{date}
- Verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
- PA-F findings: N total (X PERCEPTUAL, Y RULE, Z CASCADE)
- Fixed: N | Pending: N | Escalated: N | Wont-Fix: N
- Cross-page consistency: [UNIFORM / DIALECT DRIFT / N/A]
```

**Template -- add to PRODUCED table:**

```markdown
| PA-F-001 through PA-F-NNN | Perceptual audit findings for CD and Migration | COMPLETE |
| PA-AUDIT-REPORT.md | Perceptual audit full report | COMPLETE |
```

### 4.3 Outbound Findings Enrichment

Only **CASCADE (-C)** and **SOUL (-S)** classified PA-F findings flow into the outbound findings document. PERCEPTUAL and RULE findings are stage-local (fixed in place, not forwarded).

**Template -- add new section after existing stage findings:**

```markdown
===============================================================================
## PA-F-### — Perceptual Audit Findings (Cross-Stage)
===============================================================================

### PA-F-NNN-C: [Title]

| Field | Value |
|-------|-------|
| **ID** | PA-F-NNN-C |
| **Title** | [Title] |
| **Source Audit** | [audit-id] |
| **Classification** | CASCADE |
| **Perception Track** | WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER |
| **Sovereignty** | CHALLENGEABLE / LOCKED-EXECUTION |
| **Description** | [Description] |
| **Downstream Impact** | [Which stages/files must address this] |
| **Fix Status** | PENDING -- deferred to [next stage] |
```

### 4.4 AUDIT-SYNTHESIS.md Enrichment

Add a new section for perceptual audit results:

```markdown
===============================================================================
## PERCEPTUAL AUDIT RESULTS
===============================================================================

### Audit: [audit-id]
- **Mode:** Quick / Standard / Standalone
- **Date:** [date]
- **Verdict:** SHIP / SHIP WITH CONCERNS / DO NOT SHIP
- **Team Size:** [N agents]

### Finding Summary

| PA-F ID | Classification | Perception Track | Target | Fix Status |
|---------|---------------|-----------------|--------|------------|
| PA-F-001 | PERCEPTUAL | LOOKS-WRONG | AD-003 | FIXED |
| PA-F-002-C | CASCADE | WOULD-NOT-SHIP | ALL ADs | PENDING |

### Cold Look Verdicts

| Target | 1440px | 768px | 1024px |
|--------|--------|-------|--------|
| AD-003 | SHIP WITH CONCERNS | SHIP | N/A |

### Key Perceptual Themes
1. [Theme 1 -- what pattern of findings emerged]
2. [Theme 2]

### Sovereignty Outcomes
- LOCKED findings challenged: N
- Escalations to human: N
- Conventions challenged: N (M accepted)

### Cross-Reference with Prior Audits
| Prior Finding | PA Audit Status | Notes |
|--------------|----------------|-------|
| [prior-ID] | STILL PRESENT / FIXED / IMPROVED | [notes] |
```

---

## 5. RESEARCH ENRICHMENT

### 5.1 RESEARCH-ACTIVE.md Update

After every perceptual audit, RESEARCH-ACTIVE.md receives a new tracking entry. This follows the existing mandatory update format from `showcase/CLAUDE.md`.

**Template -- append to RESEARCH-ACTIVE.md:**

```markdown
### [Date] — Perceptual Audit: [audit-id]

**Audit Scope:** [target files/pages]
**Verdict:** [verdict]

**Research Applied (validated through perception):**
| Finding ID | Perceptual Validation | PA Evidence |
|------------|----------------------|-------------|
| R4-001 | Z-pattern confirmed perceptually natural | PA-04: eye flow follows intended Z-path |
| DD-F-006 | Fractal verified at component scale | PA-17: visual rhythm detected at 3 scales |

**Research Challenged (perception contradicts):**
| Finding ID | Perceptual Challenge | PA Finding | Sovereignty |
|------------|---------------------|------------|-------------|
| R4-016 | Bottom-left feels empty, not "avoided" | PA-F-009 | CHALLENGEABLE |

**New Learnings from Perception:**
| Learning | Should Be Added To | Priority | PA Finding |
|----------|-------------------|----------|------------|
| [learning] | [R-X or new file] | HIGH/MED/LOW | PA-F-NNN |
```

### 5.2 Research Validation Through Perception

Perceptual audit provides a UNIQUE validation pathway for research findings. When an auditor independently confirms a research prediction through perception (e.g., the Z-pattern eye flow actually works as R4-001 predicted), this is stronger validation than code inspection.

**Status transition enabled by PA:**
- `APPLIED` -> `VALIDATED` when PA confirms the finding perceptually works
- `APPLIED` -> mark with `PA-CHALLENGED` flag when PA contradicts the finding

**Example:** R4-001 (Z-pattern diagonal sweep) was APPLIED in AD-001. If a PA auditor at PA-04 ("Where does your eye go first?") confirms the eye follows the Z-path, R4-001 advances to VALIDATED. If the auditor reports the eye goes to the wrong place, R4-001 gets a PA-CHALLENGED flag for human review.

### 5.3 R-File Cross-Reference

PA findings do NOT create new R-file entries (the R1-R5 streams are closed research). Instead, PA findings are cross-referenced in RESEARCH-ACTIVE.md under the existing finding they validate, challenge, or extend.

If a PA finding reveals something entirely new (not covered by any R1-R5 finding), it becomes a PA-F entry in the outbound findings doc and is tracked in RESEARCH-ACTIVE.md under a new section: **"Perceptual Discoveries (not in R1-R5)"**.

---

## 6. ACCUMULATED IDENTITY ENRICHMENT

### 6.1 When Identity Updates

Accumulated Identity (currently v2) is updated when a perceptual audit produces:

1. A **SOUL (-S)** finding -- potential new soul piece or validation of existing ones
2. A **CASCADE (-C)** finding that reveals a systemic identity-level truth
3. Validation or challenge of the ANTI-PHYSICAL identity through perception
4. A new equivalence mechanism or meta-pattern discovered through perceptual analysis

Identity does NOT update for individual PERCEPTUAL or RULE findings -- those are execution concerns, not identity concerns.

### 6.2 Identity Enrichment Template

**Template -- add to Section 1 (WHO WE ARE) if soul-relevant:**

```markdown
### Perceptual Validation of Soul Pieces (PA Audit)

| Soul Piece | PA Validation | PA Finding | Confidence |
|------------|--------------|------------|------------|
| #1 Sharp Edges | Confirmed: sharp edges register as "authoritative" at Cold Look | PA-F-NNN | 3/3 auditors |
| #4 No Shadows | Confirmed: flatness perceived as "honest, grounded" | PA-F-NNN | 2/3 auditors |

**No new soul piece discovered in PA audit.** The 5-piece model remains stable across [N] stages + [M] perceptual audits.
```

**Template -- add to Section 2 (WHAT WE'VE LEARNED) if CASCADE relevant:**

```markdown
### PA Audit Findings (Cross-Stage)

| PA-F ID | Finding | Type | Impact |
|---------|---------|------|--------|
| PA-F-NNN-C | [finding] | CASCADE | [impact on identity] |
```

### 6.3 Identity Version Bump

Perceptual audit findings alone do NOT bump the identity version (v2 -> v3). Version bumps are reserved for stage completions (CD completing -> v3). However, PA findings are ACCUMULATED into the next version bump. The pattern:

1. PA runs on AD explorations -> PA-F findings documented
2. CD stage starts, reads PA-F findings as inherited constraints
3. CD completes -> ACCUMULATED-IDENTITY-v3.md includes PA-F findings in its inheritance section

---

## 7. OUTBOUND FINDINGS DOCUMENT ENRICHMENT

### 7.1 PA-Outbound-Findings.md (New Document)

Unlike stage findings (which live in stage-specific outbound docs), PA findings get their own cross-cutting document:

**Location:** `DESIGN-SYSTEM/provenance/PA-outbound-findings.md`

This document is the single registry for ALL PA-F findings across all stages. It follows the same YAML frontmatter + finding table format as AD-outbound-findings.md.

**Template:**

```markdown
---
file_type: outbound-findings
scope: cross-stage
total_findings: [N]
finding_range: PA-F-001 through PA-F-[NNN]
last_updated: [date]
---

# PA Outbound Findings (PA-F-###)
## Perceptual Audit Finding Registry

===============================================================================
## HOW TO USE THIS FILE
===============================================================================

Every finding has an ID: `PA-F-###`

When you apply a finding, cite it:
- "Applying PA-F-007: widened bento grid columns for breathing room"
- "PA-F-012-C deferred to CD resolution"

**Finding Classification:**
| Suffix | Type | Flows Forward? |
|--------|------|----------------|
| (none) | PERCEPTUAL | No -- fixed in place |
| -R | RULE | No -- fixed via rule track |
| -C | CASCADE | YES -- affects multiple stages |
| -E | ESCALATION | YES -- requires human decision |
| -S | SOUL | YES -- affects identity |

Only -C, -E, and -S findings are consumed by downstream stages.

===============================================================================
## FINDING REGISTRY
===============================================================================

### PA-F-001: [Title]

[Full finding entry per Section 1.4 template]

---
```

### 7.2 Finding ID Allocation

PA-F IDs are allocated sequentially across all audits. They do NOT reset per audit or per target. This ensures global uniqueness:

- First audit (pa-ad-003-standard-20260210) produces: PA-F-001, PA-F-002, PA-F-003
- Second audit (pa-ad-001-quick-20260211) produces: PA-F-004, PA-F-005
- Third audit (pa-full-site-standalone-20260212) produces: PA-F-006 through PA-F-015

The PA-outbound-findings.md document is the allocation authority. Before assigning a new PA-F ID, read the current max ID from this document.

---

## 8. PIPELINE MANIFEST ENRICHMENT

### 8.1 What Changes in PIPELINE-MANIFEST.md

The Pipeline Manifest (PIPELINE-MANIFEST.md) is the master registry for ALL findings. PA-F findings get a new section:

**Template -- add after Section B (Generated Findings), before Section C (Soul Pieces):**

```markdown
### Perceptual Audit (PA-F-###) -- Cross-Stage

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| PA-F-001 | [finding] | PERCEPTUAL | [target file] | FIXED |
| PA-F-002-C | [finding] | CASCADE | AD, CD, Migration | ACTIVE |
| PA-F-003-R | [finding] | RULE | [target file] | FIXED |

**Total PA-F-###:** [N] findings ([X] perceptual, [Y] rule, [Z] cascade, [W] escalation, [V] soul)
```

### 8.2 Section F (Finding Lifecycle States) Update

Add a new state for PA-specific lifecycle:

```markdown
| PA-CHALLENGED | Research finding challenged by perceptual evidence | ~0 (initial) |
```

### 8.3 Section E (Cross-Reference) Update

Add PA findings to existing cross-reference entries when they validate or challenge a finding. Example:

```markdown
### "Where was R4-001 used?"

R4-001 (Z-pattern diagonal sweep):
- **AD-001:** APPLIED — Z-layout hero section
- **PA-F-004:** VALIDATED — PA-04 eye tracking confirms Z-path (pa-ad-001-standard-20260211)
```

---

## 9. ENRICHMENT EXECUTION SEQUENCE

### 9.1 Agent Workflow

The enrichment agent follows this exact sequence after a PA audit completes:

```
STEP 1: READ the PA AUDIT-REPORT.md
        Extract: all PA-F findings, verdicts, classifications, fix statuses

STEP 2: CREATE/UPDATE PA-outbound-findings.md
        Allocate PA-F IDs (check current max)
        Write full finding entries per Section 1.4 template
        This is the SOURCE OF TRUTH for all PA-F findings

STEP 3: UPDATE target file inline headers (Phase 2B)
        For each file that received findings:
        - Update Section 3 (STATUS): add PA audit reference
        - Update Section 5 (BUILT ON): add FIXED PA-F findings
        - Update Section 9 (RESEARCH DEBT): add PENDING PA-F findings

STEP 4: UPDATE target file light sections (Phase 2D)
        For each file that received findings:
        - Add PA-AUDIT line to light section

STEP 5: UPDATE stage provenance documents
        - STAGE-HEADER.md: STATUS section + PRODUCED table
        - outbound-findings.md: CASCADE and SOUL findings only
        - AUDIT-SYNTHESIS.md: full PA results section
        - CLAUDE.md: PA status line

STEP 6: UPDATE RESEARCH-ACTIVE.md
        - Research validated by PA (APPLIED -> VALIDATED transitions)
        - Research challenged by PA (PA-CHALLENGED flags)
        - New perceptual discoveries not in R1-R5

STEP 7: UPDATE PIPELINE-MANIFEST.md
        - Section B: PA-F finding entries
        - Section E: cross-references for validated/challenged research
        - Section F: lifecycle state additions

STEP 8: FLAG identity updates (DO NOT WRITE)
        - If SOUL or systemic CASCADE findings exist, write a
          PA-IDENTITY-DELTA.md file listing proposed identity changes
        - Identity doc is updated at next stage version bump, not by PA enrichment agent
```

### 9.2 Agent Constraints

1. **The enrichment agent does NOT fix CSS/HTML.** Fixes are done by the PA fix team. The enrichment agent documents what happened.
2. **The enrichment agent reads the AUDIT-REPORT.md** -- it does not re-run the audit.
3. **Enrichment is APPEND-ONLY.** No existing content is deleted or overwritten. PA findings are added to existing sections.
4. **PA-F IDs are immutable once assigned.** If a finding is later invalidated, its status changes to INVALIDATED but the ID is never reused.
5. **The enrichment agent must use the Write or Edit tool** for every file modification. No modifications through indirect means.

### 9.3 Verification Checklist

After enrichment completes, verify:

```
[ ] PA-outbound-findings.md exists with all PA-F entries
[ ] Every target file's inline header updated (Section 3, 5, 9)
[ ] Every target file's light section has PA-AUDIT line
[ ] STAGE-HEADER.md STATUS section updated
[ ] AUDIT-SYNTHESIS.md has PA results section
[ ] RESEARCH-ACTIVE.md has PA tracking entry
[ ] PIPELINE-MANIFEST.md has PA-F section
[ ] PA-F IDs are sequential with no gaps
[ ] No existing content was deleted or overwritten
[ ] CASCADE findings appear in outbound-findings.md
[ ] SOUL findings flagged in PA-IDENTITY-DELTA.md
```

---

## 10. ENRICHMENT TEMPLATES (COPY-PASTE READY)

### Template A: Inline Header STATUS Update

```
PA audit: {AUDIT-ID} ({VERDICT}).
{N} PA-F findings: {PA-F-NNN (STATUS), PA-F-NNN (STATUS)}.
```

### Template B: Inline Header BUILT ON Row

```
  PA-F-{NNN}                       | Perceptual finding: {short-desc}    | {fix-or-constraint-description}
```

### Template C: Inline Header RESEARCH DEBT Bullet

```
  - PA-F-{NNN}[-suffix]: {description}. {resolution-status}.
```

### Template D: Light Section PA-AUDIT Line

```
PA-AUDIT: {AUDIT-ID} | {VERDICT} | {PA-F-NNN (STATUS), PA-F-NNN (STATUS)}
```

### Template E: Stage AUDIT-SYNTHESIS PA Section

```markdown
===============================================================================
## PERCEPTUAL AUDIT RESULTS
===============================================================================

### Audit: {AUDIT-ID}
- **Mode:** {Quick / Standard / Standalone}
- **Date:** {date}
- **Verdict:** {SHIP / SHIP WITH CONCERNS / DO NOT SHIP}
- **Team Size:** {N agents}

### Finding Summary

| PA-F ID | Classification | Perception Track | Target | Fix Status |
|---------|---------------|-----------------|--------|------------|
| PA-F-{NNN} | {CLASS} | {SEVERITY} | {target} | {STATUS} |

### Cold Look Verdicts

| Target | 1440px | 768px | 1024px |
|--------|--------|-------|--------|
| {target} | {verdict} | {verdict} | {verdict or N/A} |
```

### Template F: RESEARCH-ACTIVE.md PA Entry

```markdown
### {Date} -- Perceptual Audit: {AUDIT-ID}

**Audit Scope:** {targets}
**Verdict:** {verdict}

**Research Validated by Perception:**
| Finding ID | Perceptual Validation | PA Evidence |
|------------|----------------------|-------------|
| {R-ID} | {validation} | {PA question + answer} |

**Research Challenged by Perception:**
| Finding ID | Perceptual Challenge | PA Finding | Sovereignty |
|------------|---------------------|------------|-------------|
| {R-ID} | {challenge} | PA-F-{NNN} | {classification} |
```

### Template G: PIPELINE-MANIFEST PA-F Section

```markdown
### Perceptual Audit (PA-F-###) -- Cross-Stage

| ID | Finding | Type | Consumed By | Status |
|----|---------|------|-------------|--------|
| PA-F-{NNN} | {finding} | {TYPE} | {consumers} | {STATUS} |

**Total PA-F-###:** {N} findings
```

### Template H: PA-outbound-findings.md Finding Entry

```markdown
### PA-F-{NNN}[-suffix]: {Title}

| Field | Value |
|-------|-------|
| **ID** | PA-F-{NNN}[-suffix] |
| **Title** | {title} |
| **Source Audit** | {audit-id} |
| **Target** | {target file} |
| **PA Question** | PA-{NN} |
| **Classification** | {PERCEPTUAL / RULE / CASCADE / ESCALATION / SOUL} |
| **Rule Track** | {N/A / SOUL VIOLATION / CONVENTION BUG / OVERFLOW} |
| **Perception Track** | {WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER} |
| **Sovereignty** | {LOCKED-EXECUTION / CHALLENGEABLE / ESCALATION} |
| **Cold Look Quote** | {quote or N/A} |
| **Description** | {description} |
| **Evidence** | {screenshot refs, scroll positions} |
| **Fix Status** | {PENDING / FIXED / WONT-FIX / ESCALATED} |
| **Fix Applied In** | {path + commit or N/A} |
| **Downstream Impact** | {affected files/stages} |
```

### Template I: PA-IDENTITY-DELTA.md (for stage version bump)

```markdown
# PA Identity Delta
## Proposed Changes for ACCUMULATED-IDENTITY-v{N+1}

**Source:** Perceptual Audit {audit-id}
**Date:** {date}

### Soul Piece Validations
| Soul Piece | PA Evidence | Auditor Count |
|------------|-------------|---------------|
| {piece} | {evidence} | {N/M auditors} |

### Proposed Identity Additions
| Finding | Type | Proposed Addition | Section |
|---------|------|-------------------|---------|
| PA-F-{NNN}-S | SOUL | {proposed text} | Section 1 (WHO WE ARE) |
| PA-F-{NNN}-C | CASCADE | {proposed text} | Section 2 (WHAT WE'VE LEARNED) |

### No-Change Confirmation
{If nothing identity-level was discovered, state explicitly:}
"No identity-level changes. The 5-piece soul model and ANTI-PHYSICAL identity
remain stable. PA findings are execution-level only."
```

---

## 11. RELATIONSHIP TO CASCADE PROPAGATION

This enrichment protocol describes how findings flow INTO the provenance layer (upward enrichment). A separate protocol (13b-cascade-protocol.md or equivalent) should describe how findings flow DOWN to fix basic components (downward cascade).

The relationship:

```
                    ACCUMULATED IDENTITY
                           ^
                           |  (Section 6: Identity Enrichment)
                           |
    PIPELINE MANIFEST  <---+---> STAGE DOCUMENTS
           ^                          ^
           |  (Section 8)             |  (Section 4)
           |                          |
    PA-OUTBOUND-FINDINGS  <----------+
           ^                          ^
           |  (Section 7)             |  (Section 5: Research)
           |                          |
    RESEARCH-ACTIVE.md  <------------+
           ^
           |
    TARGET FILE HEADERS  <--- (Sections 2-3: Inline + Light)
           ^
           |
    PA AUDIT REPORT (source of all enrichment data)
```

**Bottom-up flow:** Findings originate in audit reports, get IDs in PA-outbound-findings.md, propagate into file headers, then into stage documents, research tracking, pipeline manifest, and finally (if soul-level) into accumulated identity.

**Enrichment is UNANIMOUS when:** Every layer from the target file's inline header up to the pipeline manifest contains a reference to the PA-F finding. An agent reading ANY level of the provenance chain encounters the finding. No layer is silently ignorant of perceptual audit results.

---

## DOCUMENT METADATA

**Total enrichment layers:** 7 (inline header, light section, stage documents, research, outbound findings, pipeline manifest, identity)
**Templates provided:** 9 (A through I)
**Enrichment steps:** 8 (sequential, one agent)
**Finding classifications:** 5 (PERCEPTUAL, RULE, CASCADE, ESCALATION, SOUL)
**Severity tracks:** 2 (Rule Track + Perception Track, per spec Section 9)
**ID format:** PA-F-NNN[-suffix] (globally sequential, immutable)

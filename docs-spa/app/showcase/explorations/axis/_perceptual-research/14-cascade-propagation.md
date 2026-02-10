# 14 -- CASCADE PROPAGATION ARCHITECTURE
## How Perceptual Audit Fixes Propagate DOWN Through the Dependency Chain

**Author:** cascade-architect agent
**Date:** 2026-02-10
**Purpose:** Design a protocol ensuring perceptual audit findings are "baked in" at every level of the design system -- not just applied as surface patches to exploration HTML files.

---

## 0. THE PROBLEM

Previous audits fixed exploration HTML files at the surface level:
- AD-002: `border-radius: 4px` on `.callout` removed (FIX-001)
- AD-004: `box-shadow` on `pre` elements removed (FIX-002)
- AD-003: hardcoded `h1 font-size: 2.8rem` replaced with token (FIX-005)
- All 6 ADs: header padding corrected to convention spec (FIX-006)

But the underlying system was never updated. The fixes live in individual HTML files. When a downstream stage (CD, Migration) consumes the **patterns**, **tokens**, **convention specs**, or **research findings** that these explorations were built from, the fixes do not carry through. The consumer gets the pre-fix version of the system.

**The user's mandate:** "I wanted to do that so that it's unanimous down to the most basic components -- these changes aren't just applied at the top level. Whenever we're ingesting this design system as a whole, the fixes don't get propagated into whatever they're feeding into because they were never inherently baked in."

---

## 1. THE DEPENDENCY CHAIN (What Feeds What)

The system has 5 layers, ordered from most fundamental to most surface:

```
LAYER 1: TOKENS (most fundamental)
  tokens/geometry.md, tokens/colors.md, tokens/typography.md, tokens/spacing.md

  Consumed by everything. If a token is wrong, EVERYTHING downstream is wrong.
    |
    v
LAYER 2: PATTERNS
  patterns/density-patterns.md, patterns/organizational-patterns.md
  patterns/PATTERN-INDEX.md, patterns/combination-rules.md

  Consume tokens. Consumed by explorations and convention specs.
    |
    v
LAYER 3: RESEARCH & FINDINGS
  provenance/PIPELINE-MANIFEST.md (finding registry)
  provenance/stage-N/outbound-findings.md (findings per stage)
  ACCUMULATED-IDENTITY-v2.md (accumulated constraints)
  AD-CONVENTION-SPEC.md, OD-CONVENTION-SPEC.md (build rules)

  Consume tokens + patterns. Consumed by explorations.
    |
    v
LAYER 4: EXPLORATIONS (surface artifacts)
  explorations/density/DD-001..006.html
  explorations/organizational/OD-001..006.html
  explorations/axis/AD-001..006.html

  Consume everything above. Consumed by downstream stages and migration.
    |
    v
LAYER 5: DOWNSTREAM CONSUMERS
  Stage N+1 explorations (CD consumes AD)
  Migration targets (final product pages)

  Consume everything above.
```

**Key insight:** Fixes applied ONLY at Layer 4 are invisible to Layer 5 consumers who read from Layers 1-3.

---

## 2. ROOT CAUSE CLASSIFICATION

Every perceptual audit finding has a root cause at one of these layers. The classification determines WHERE the fix must be applied.

### Classification Taxonomy

| Class | Name | Definition | Fix Location | Cascade Scope |
|-------|------|-----------|--------------|---------------|
| **S** | SURFACE | Execution error in THIS exploration only. No shared source is wrong. | Layer 4 ONLY | None -- local fix |
| **T** | TOKEN | A token value is wrong, missing, or misspecified in `tokens/*.md`. | Layer 1 (tokens) | ALL downstream (patterns, findings, explorations, consumers) |
| **P** | PATTERN | A pattern definition in `patterns/*.md` is wrong, incomplete, or produces bad results. | Layer 2 (patterns) | All explorations using that pattern + all downstream |
| **C** | CONVENTION | A convention spec rule is wrong, ambiguous, or missing. | Layer 3 (convention spec) | All explorations governed by that convention + downstream |
| **R** | RESEARCH | A gap in research findings -- the finding that would have prevented this issue doesn't exist. | Layer 3 (research) | Future stages that would consume the finding |
| **I** | IDENTITY | An ACCUMULATED-IDENTITY constraint is missing, wrong, or ambiguous. | Layer 3 (identity doc) | All stages that consume that version of identity |
| **F** | FINDING | An outbound finding (DD-F, OD-F, AD-F) is wrong, incomplete, or contradicts observed behavior. | Layer 3 (findings) | All downstream stages that consume the finding |

### Classification Decision Tree

```
Given: A perceptual audit finding at Stage N

Q1: Does the issue involve a LOCKED VALUE (color, font, spacing, border-radius, box-shadow)?
    YES --> Is the locked value CORRECT in tokens/*.md?
            YES --> Q1a: Is the exploration using a hardcoded value INSTEAD of the token?
                    YES --> Class S (SURFACE) -- builder failed to use token
                    NO  --> Class P (PATTERN) -- pattern CSS doesn't reference token correctly
            NO  --> Class T (TOKEN) -- fix at token source

Q2: Does the issue involve a LAYOUT or RHYTHM decision (grid gaps, density alternation, responsive breakpoints)?
    YES --> Is there a pattern definition for this in patterns/*.md?
            YES --> Does the pattern definition match the finding?
                    YES --> Class S (SURFACE) -- builder deviated from pattern
                    NO  --> Class P (PATTERN) -- pattern definition is wrong
            NO  --> Is there a convention spec rule for this?
                    YES --> Does the convention rule match the finding?
                            YES --> Class S (SURFACE) -- builder deviated from convention
                            NO  --> Class C (CONVENTION) -- convention spec is wrong
                    NO  --> Class R (RESEARCH) -- no rule exists; create one

Q3: Does the issue appear in MULTIPLE explorations (cross-file consistency)?
    YES --> Is there a convention spec that governs this?
            YES --> Class C (CONVENTION) -- convention is ambiguous or wrong
            NO  --> Class C (CONVENTION) -- convention is MISSING
    NO  --> Class S (SURFACE) -- single-file deviation

Q4: Does the issue contradict a documented finding (DD-F, OD-F, AD-F)?
    YES --> Is the finding correct?
            YES --> Class S (SURFACE) -- builder violated finding
            NO  --> Class F (FINDING) -- finding is wrong; fix finding
    NO  --> Class R (RESEARCH) -- no relevant finding exists

Q5: Does the issue relate to the ANTI-PHYSICAL identity or soul pieces?
    YES --> Is the constraint documented in ACCUMULATED-IDENTITY?
            YES --> Class S (SURFACE) -- builder violated identity
            NO  --> Class I (IDENTITY) -- identity doc is incomplete
```

---

## 3. CONCRETE EXAMPLES WITH CLASSIFICATION

### Example A: Crushed Column in Bento Grid (AD-003)

**Finding:** A bento grid column renders at an uncomfortably narrow width, crushing content.

**Walk the decision tree:**
- Q1: Involves spacing/layout, not locked color/font. Not purely a token issue.
- Q2: Involves a LAYOUT decision (grid column sizing).
  - Is there a pattern definition? `density-patterns.md` defines ISLANDS (DD-F-003), which specifies grid gaps but NOT minimum column widths.
  - Is there a convention spec rule? `AD-CONVENTION-SPEC.md` Section 12.4 specifies bento grid gap as `var(--space-8)` (32px) but does not specify minimum column widths.
  - **Result: Class C (CONVENTION)** -- the convention spec lacks a minimum column width rule.

**Cascade fix:**
1. Fix at Layer 3: Add to AD-CONVENTION-SPEC.md Section 12: "Bento grid columns must have `min-width: 200px` or use `minmax(200px, 1fr)` to prevent content crushing."
2. Fix at Layer 2: Add to `patterns/density-patterns.md` ISLANDS section: "Island containers require minimum width to prevent content crushing. Minimum: 200px."
3. Fix at Layer 4: Update AD-003-bento-grid.html to use `minmax(200px, 1fr)`.
4. Generate finding: AD-F-NEW "Bento grid minimum column width prevents content crushing."
5. Verify: Check AD-006 Compound (which also uses bento grids).

### Example B: Wrong Breakpoint at 1024px (Hypothetical)

**Finding:** An exploration uses 1024px as a breakpoint, but the convention specifies 768px and 1440px only.

**Walk the decision tree:**
- Q2: Layout decision. Convention spec Section 16.1 specifies exactly 2 breakpoints: 768px and 1440px.
- The exploration deviates from the convention.
- **Result: Class S (SURFACE)** -- builder used a non-convention breakpoint.

**Cascade fix:**
1. Fix at Layer 4 ONLY: Replace 1024px breakpoint with convention-compliant alternatives.
2. No upstream fix needed -- the convention is correct.

### Example C: `border-radius: 4px` on Callouts (AD-002 FIX-001)

**Finding:** `.callout` has `border-radius: 4px`, violating Soul Piece #1.

**Walk the decision tree:**
- Q1: Involves a LOCKED VALUE (border-radius). Is it correct in `tokens/geometry.md`? YES (`--border-radius: 0`).
- Q1a: Is the exploration using a hardcoded value instead of the token? YES -- it has `border-radius: 4px` directly in the axis-layer CSS.
- **Result: Class S (SURFACE)** -- builder hardcoded a value that contradicts the token.

**Cascade fix:**
1. Fix at Layer 4 ONLY: Remove `border-radius: 4px` from AD-002.
2. No upstream fix needed -- token is correct.
3. BUT: Generate a process finding (AD-F-PR) documenting that axis-layer CSS can override locked-layer CSS via specificity. This informs audit methodology.

### Example D: Hardcoded h1 font-size: 2.8rem (AD-003 FIX-005)

**Finding:** AD-003 uses `font-size: 2.8rem` for h1 instead of `var(--type-page)` (2.625rem).

**Walk the decision tree:**
- Q1: Involves a locked value (type scale). Is `--type-page` correct in `tokens/typography.md`? YES.
- Q1a: Is the exploration using a hardcoded value? YES.
- **Result: Class S (SURFACE)** -- builder bypassed token.

**Cascade fix:**
1. Fix at Layer 4 ONLY.
2. BUT: Add to convention spec: "All font-size declarations MUST use token variables. No hardcoded rem/px values."

### Example E: Header Padding Convention Violation (FIX-006 -- ALL 6 ADs)

**Finding:** All 6 AD files use `padding: var(--space-12) var(--space-6)` (48px 24px) instead of `padding: var(--space-16) var(--space-8)` (64px 32px).

**Walk the decision tree:**
- Q3: Appears in MULTIPLE explorations (all 6). Convention spec Section 4 specifies `var(--space-16) var(--space-8)`.
- The convention exists and is correct, but all builders deviated.
- **Result: Class S (SURFACE)** -- but the SYSTEMIC nature (all 6 files) suggests a process issue.

**Cascade fix:**
1. Fix at Layer 4: All 6 files.
2. Generate process finding: "When all builders deviate from the same convention rule, the rule may be insufficiently prominent or the template may be wrong."
3. Check: Was the builder template (in the team execution prompt) using the wrong values? If so, fix the template for CD.

### Example F: Uncomfortable Text Spacing (Hypothetical)

**Finding:** Body text in dense sections has line-height: 1.4 instead of 1.7, making it feel cramped.

**Walk the decision tree:**
- Q1: Involves spacing. Is `line-height: 1.7` locked in `tokens/typography.md`?
  - Check: typography.md specifies `line-height: 1.7` for body text? If NOT specified:
    - **Result: Class T (TOKEN)** -- token is missing; add line-height to typography tokens.
  - If specified and correct:
    - Q1a: Exploration using hardcoded value? YES.
    - **Result: Class S (SURFACE)**.

---

## 4. PER-LAYER FIX PROTOCOL

### Layer 1: Token Fixes

**When:** A token value is wrong, missing, or ambiguous.

**Files affected:**
- `DESIGN-SYSTEM/tokens/geometry.md`
- `DESIGN-SYSTEM/tokens/colors.md`
- `DESIGN-SYSTEM/tokens/typography.md`
- `DESIGN-SYSTEM/tokens/spacing.md`

**Protocol:**
1. Update the token value in the canonical token file.
2. Update the `MUST HONOR` section of the token file's inline threading header.
3. Search all explorations (DD, OD, AD) for the old token value.
4. Update `ACCUMULATED-IDENTITY` if the token change affects soul pieces.
5. Update `patterns/*.md` if any pattern CSS uses the old value.
6. Run programmatic verification across all exploration HTML files.
7. Generate a finding documenting the token correction.

**Verification query:**
```bash
# Find all instances of a wrong token value across explorations
grep -rn "old-value" explorations/ --include="*.html"
grep -rn "old-value" patterns/ --include="*.md"
grep -rn "old-value" tokens/ --include="*.md"
```

### Layer 2: Pattern Fixes

**When:** A pattern definition in `patterns/*.md` is wrong, incomplete, or produces bad results when followed correctly.

**Files affected:**
- `DESIGN-SYSTEM/patterns/density-patterns.md`
- `DESIGN-SYSTEM/patterns/organizational-patterns.md`
- `DESIGN-SYSTEM/patterns/PATTERN-INDEX.md`
- `DESIGN-SYSTEM/patterns/combination-rules.md`

**Protocol:**
1. Update the pattern definition with correct CSS / structure / guidance.
2. Update the pattern's "Best For" and constraint sections if affected.
3. Check PATTERN-INDEX.md mappings for consistency.
4. Check all explorations that implement this pattern.
5. Generate a finding (e.g., DD-F-NEW, OD-F-NEW) documenting the correction.
6. Update PIPELINE-MANIFEST.md Section D (Pattern Provenance) if scores or provenance change.
7. Update density-patterns.md inline threading header's "MUST HONOR" if constraints change.

### Layer 3: Convention / Research / Finding / Identity Fixes

**When:** A convention spec, finding, identity constraint, or research gap is the root cause.

**Files affected (by sub-type):**

| Sub-type | Files |
|----------|-------|
| Convention | `AD-CONVENTION-SPEC.md`, `OD-CONVENTION-SPEC.md`, etc. |
| Finding | `provenance/stage-N/outbound-findings.md`, `PIPELINE-MANIFEST.md` |
| Identity | `ACCUMULATED-IDENTITY-v2.md` |
| Research | `provenance/original-research/R[N]-*.md`, `RESEARCH-ACTIVE.md` |

**Protocol (Convention):**
1. Update the convention spec with the corrected or new rule.
2. Identify all explorations governed by this convention.
3. Verify each exploration complies with the updated rule.
4. Fix non-compliant explorations at Layer 4.
5. Document the convention change in the stage's AUDIT-SYNTHESIS.

**Protocol (Finding):**
1. Update the outbound-findings.md entry with corrected text.
2. Update PIPELINE-MANIFEST.md if the finding's status or consumers change.
3. Update BACKBONE.md if the finding is referenced in the master narrative.
4. Notify downstream stages that consume this finding (via HANDOFF updates).

**Protocol (Identity):**
1. Update ACCUMULATED-IDENTITY with the corrected/new constraint.
2. Trace all explorations that should honor this constraint.
3. Verify compliance across all traced explorations.

### Layer 4: Surface Fixes

**When:** A builder made an error that doesn't reflect a system-level problem.

**Files affected:** The specific exploration HTML file(s).

**Protocol:**
1. Fix the HTML/CSS in the exploration file.
2. Run programmatic verification on the fixed file.
3. Run visual verification (screenshot comparison).
4. Document the fix in the stage's AUDIT-SYNTHESIS or FIX-REPORT.
5. **Check:** Should this generate a preventive convention rule?
   - If the same error could easily recur in future stages, add a convention rule (escalate to Layer 3).

---

## 5. CASCADE PROPAGATION PROTOCOL (Step-by-Step)

When a perceptual audit produces findings, execute this protocol:

### Phase 1: CLASSIFY (for each finding)

```
FOR EACH audit finding:
  1. Read the finding description
  2. Walk the Classification Decision Tree (Section 2)
  3. Assign class: S / T / P / C / R / I / F
  4. Record: finding ID, class, root layer, affected files
```

### Phase 2: TRACE (for non-Surface findings)

```
FOR EACH finding with class != S:
  1. Identify the source file at the root layer
  2. List all files that CONSUME the source file
     (use inline threading headers: "CONSUMED BY" section)
  3. List all explorations that implement the affected pattern/token/convention
  4. Build the IMPACT SET: all files that need checking after the root fix
```

### Phase 3: FIX AT SOURCE

```
FOR EACH finding with class != S:
  1. Apply the fix at the ROOT LAYER (Layer 1, 2, or 3)
  2. Update inline threading headers if MUST HONOR or BUILT ON sections change
  3. Generate a finding documenting the fix (AD-F-NEW, OD-F-NEW, etc.)
```

### Phase 4: PROPAGATE DOWN

```
FOR EACH root-layer fix:
  1. Check every file in the IMPACT SET
  2. Does the file use the old (incorrect) value/pattern/convention?
     YES --> Fix the file
     NO  --> Mark as "already compliant" (no action)
  3. Run programmatic verification on each fixed file
```

### Phase 5: VERIFY UNANIMITY

```
FOR EACH root-layer fix:
  1. Search the ENTIRE system for any remaining instance of the old value
     (grep across tokens/, patterns/, explorations/, provenance/)
  2. Zero remaining instances = UNANIMOUS
  3. Any remaining instances = list them, fix them, re-verify
```

### Phase 6: DOCUMENT

```
FOR EACH cascade:
  1. Record in CASCADE-LOG.md:
     - Finding ID
     - Root cause class
     - Root fix (what changed at the source)
     - Propagation set (what files were updated downstream)
     - Unanimity verification result
  2. Update PIPELINE-MANIFEST.md if new findings were generated
  3. Update RESEARCH-ACTIVE.md if research gaps were identified
```

---

## 6. CROSS-STAGE IMPACT MATRIX

When you fix X at Layer N, what else needs checking?

### Token Change Impact

| Token Changed | Check In |
|---------------|----------|
| `--border-radius` | ALL exploration CSS `:root`, ALL pattern CSS, ALL component CSS |
| `--box-shadow` | ALL exploration CSS `:root`, ALL pattern CSS, ALL component CSS |
| `--color-primary` | ALL exploration CSS `:root`, ALL pattern CSS, anti-patterns registry |
| `--color-background` | ALL exploration CSS `:root`, ALL pattern CSS |
| `--font-display` | ALL exploration CSS `:root`, typography patterns, component specs |
| `--space-N` | ALL exploration CSS `:root`, spacing patterns, density patterns |
| `--grid-gap` | ALL grid layouts in explorations, PATTERN-INDEX bento references |

### Pattern Change Impact

| Pattern Changed | Check In |
|-----------------|----------|
| PULSE definition | DD-001, OD-001, AD-001, all explorations using PULSE |
| CRESCENDO definition | DD-002, OD-002, AD-002, AD-004, all using CRESCENDO |
| ISLANDS definition | DD-003, OD-003, AD-003, all using ISLANDS |
| GEOLOGICAL definition | DD-004, OD-004, AD-004, all using GEOLOGICAL |
| TIDAL/RIVERS definition | DD-005, OD-001, AD-001, all using TIDAL |
| FRACTAL definition | DD-006, ALL explorations (meta-pattern) |

### Convention Change Impact

| Convention Changed | Check In |
|--------------------|----------|
| Header padding | ALL explorations at current + future stages |
| Breakpoint values | ALL responsive CSS in explorations |
| Grid gap values | ALL grid layouts in explorations |
| Border thickness rules | ALL border declarations in explorations |
| Font-size token rules | ALL font-size declarations in explorations |
| Content max-width | ALL `.page-container` or equivalent wrappers |

### Finding Change Impact

| Finding Changed | Check In |
|-----------------|----------|
| DD-F-006 (FRACTAL) | ALL explorations (all 18 files) -- meta-pattern |
| DD-F-012 (axis IS density) | AD-001 through AD-006, ACCUMULATED-IDENTITY |
| OD-F-005 (org IS density) | AD-001 through AD-006, ACCUMULATED-IDENTITY |
| OD-F-AP-001 (2px border) | ALL explorations, anti-patterns registry |
| AD-F-023 (ATTENTION TOPOLOGY) | ACCUMULATED-IDENTITY, HANDOFF-AD-TO-CD |
| Any COMP-F (soul pieces) | ALL explorations across ALL stages |

---

## 7. THE "UNANIMOUS" GUARANTEE

A fix is **UNANIMOUS** when it satisfies ALL of the following conditions:

### 7 Conditions for Unanimity

| # | Condition | Verification Method |
|---|-----------|---------------------|
| 1 | **Token-level correct:** The canonical token file contains the correct value. | Read `tokens/*.md`, verify value. |
| 2 | **Pattern-level correct:** All pattern definitions use the correct token/value. | Read `patterns/*.md`, verify all CSS references. |
| 3 | **Convention-level correct:** All convention specs reference the correct rule. | Read `*-CONVENTION-SPEC.md`, verify rules. |
| 4 | **Finding-level correct:** All relevant findings are accurate and complete. | Read `outbound-findings.md`, verify descriptions. |
| 5 | **Identity-level correct:** ACCUMULATED-IDENTITY reflects the constraint. | Read ACCUMULATED-IDENTITY, verify constraint listed. |
| 6 | **Exploration-level correct:** All current exploration HTML files implement correctly. | Programmatic search + visual audit across all HTML. |
| 7 | **Zero residual instances:** No instance of the old/wrong value exists ANYWHERE in the system. | Full-system grep for old value returns zero results. |

### Unanimity Verification Script (Conceptual)

```
FOR EACH fix applied:
  old_value = "the incorrect value"
  new_value = "the correct value"

  # Layer 1: Token check
  ASSERT tokens/*.md contains new_value
  ASSERT tokens/*.md does NOT contain old_value

  # Layer 2: Pattern check
  ASSERT patterns/*.md does NOT contain old_value

  # Layer 3: Convention/Finding/Identity check
  ASSERT convention specs do NOT contain old_value
  ASSERT outbound findings are accurate
  ASSERT ACCUMULATED-IDENTITY reflects constraint

  # Layer 4: Exploration check
  ASSERT grep(old_value, explorations/**/*.html) returns ZERO results

  # Layer 5: Cross-system check
  ASSERT grep(old_value, DESIGN-SYSTEM/**/*) returns ZERO results
  ASSERT grep(old_value, knowledge-architecture/**/*) returns ZERO results

  IF all assertions pass:
    FIX IS UNANIMOUS
  ELSE:
    LIST remaining instances
    FIX remaining instances
    RE-VERIFY
```

---

## 8. UPWARD TRACE PROTOCOL

Given a finding at Stage N, trace what it inherited from prior stages:

### Step 1: Identify the Exploration

Which exploration file exhibits the issue? (e.g., AD-003-bento-grid.html)

### Step 2: Read the Exploration's Provenance

Read the exploration's CLAUDE.md or inline threading header:
- What tokens does it use? (Trace to `tokens/*.md`)
- What patterns does it implement? (Trace to `patterns/*.md`)
- What convention spec governs it? (Trace to `*-CONVENTION-SPEC.md`)
- What findings did it consume? (Trace to `outbound-findings.md` from prior stages)
- What identity doc did it load? (Trace to `ACCUMULATED-IDENTITY`)

### Step 3: Check Each Layer

For the specific issue:

```
Layer 4 (Exploration): Is the CSS in the HTML file correct per convention?
                        |
                        v NO --> Class S (fix here, done)
                        v YES (or no convention exists) --> continue

Layer 3 (Convention):   Does a convention rule cover this case?
                        |
                        v NO --> Class C (create rule, then fix exploration)
                        v YES --> Does the rule produce the right result?
                              |
                              v NO --> Class C (fix rule, then fix explorations)
                              v YES --> continue

Layer 2 (Pattern):      Does the pattern definition cover this case?
                        |
                        v NO --> Class P or R (fix pattern or create research)
                        v YES --> Does the pattern produce the right result?
                              |
                              v NO --> Class P (fix pattern, then cascade)
                              v YES --> continue

Layer 1 (Token):        Is the relevant token correct?
                        |
                        v NO --> Class T (fix token, cascade to everything)
                        v YES --> Issue must be Class S at Layer 4
```

### Step 4: Document the Trace

Record the upward trace in the audit finding:

```markdown
### Upward Trace for [Finding ID]
- Layer 4 (AD-003): [status -- correct/incorrect]
- Layer 3 (AD-CONVENTION-SPEC Section 12): [status -- correct/incorrect/missing]
- Layer 2 (density-patterns.md ISLANDS): [status -- correct/incorrect/missing]
- Layer 1 (tokens/spacing.md --grid-gap): [status -- correct/incorrect]
- Root cause: Class [S/T/P/C/R/I/F] at Layer [1/2/3/4]
```

---

## 9. INTEGRATION WITH EXISTING AUDIT PIPELINE

### Pre-Audit: Cascade-Aware Audit Spec

When writing audit specs for future stages, include:

```markdown
## CASCADE-AWARE AUDIT REQUIREMENTS

For each finding, auditors MUST:
1. Classify the root cause (S/T/P/C/R/I/F)
2. If not Class S, document the upward trace
3. If not Class S, list the impact set (downstream files)
4. Rate cascade severity:
   - Token-level = CRITICAL (affects everything)
   - Pattern-level = HIGH (affects all explorations using pattern)
   - Convention-level = MEDIUM (affects current stage explorations)
   - Surface-level = LOW (affects single file)
```

### During Audit: Classification Worksheet

Each auditor fills out per finding:

```markdown
| Field | Value |
|-------|-------|
| Finding ID | [e.g., PA-001] |
| File | [e.g., AD-003-bento-grid.html] |
| Description | [what's wrong] |
| Root Cause Class | [S/T/P/C/R/I/F] |
| Root Layer | [1/2/3/4] |
| Root File | [e.g., tokens/spacing.md] |
| Impact Set | [list of files needing checking] |
| Cascade Severity | [CRITICAL/HIGH/MEDIUM/LOW] |
```

### Post-Audit: Cascade Execution

After audit findings are classified:

1. **Group by root layer:** Fix Layer 1 issues first, then Layer 2, then Layer 3, then Layer 4.
2. **Within each layer:** Fix in dependency order (tokens before patterns, patterns before conventions).
3. **After each layer fix:** Propagate and verify before proceeding to next layer.
4. **Final unanimity check:** Full-system grep for all old values.

---

## 10. THE RETROACTIVE CASCADE (For Already-Completed Stages)

For DD and OD explorations (already audited and fixed), a retroactive cascade check should verify:

### DD Retroactive Cascade Checklist

```
[ ] tokens/geometry.md: border-radius: 0, box-shadow: none (CONFIRMED)
[ ] tokens/colors.md: all DD explorations use --color-primary: #E83025, not #FF0000 (CHECK)
[ ] tokens/spacing.md: all DD explorations use token variables, not hardcoded px (CHECK)
[ ] patterns/density-patterns.md: CSS matches what DD explorations actually implement (CHECK)
[ ] DD-outbound-findings: all 18 findings accurate per current understanding (CHECK)
[ ] PIPELINE-MANIFEST Section B/D: finding registry consistent with outbound-findings (CHECK)
```

### OD Retroactive Cascade Checklist

```
[ ] All OD fixes from 17-agent audit are reflected in convention spec (CHECK)
[ ] OD-CONVENTION-SPEC unified 3 dialects -- verify all 6 ODs match unified spec (CHECK)
[ ] OD-outbound-findings: all 17 findings accurate (CHECK)
[ ] EXT-* research registry: 94 findings accurately cataloged (CHECK)
[ ] 2px border epidemic fix (OD-F-AP-001): verify zero 2px structural borders remain (CHECK)
[ ] rgba() opacity fix: verify zero non-1.0 opacity on visual elements (CHECK)
```

### AD Retroactive Cascade Checklist

```
[ ] All 7 BROKEN/SOUL VIOLATION fixes from AD-AUDIT-SYNTHESIS applied (CONFIRMED)
[ ] 11 OVERFLOW fixes applied (CHECK)
[ ] AD-CONVENTION-SPEC: verify all rules match post-fix state (CHECK)
[ ] AD-outbound-findings: 28 findings accurate post-fix (CHECK)
[ ] HANDOFF-AD-TO-CD: reflects post-fix state of AD (CHECK)
[ ] ACCUMULATED-IDENTITY-v2: reflects all AD discoveries post-fix (CHECK)
```

---

## 11. CASCADE LOG FORMAT

Maintain a `CASCADE-LOG.md` in each stage's audit scratchpad:

```markdown
# CASCADE LOG -- Stage [N] Audit

## Entry 1
| Field | Value |
|-------|-------|
| Audit Finding | [ID] |
| Root Class | [S/T/P/C/R/I/F] |
| Root Layer | [1/2/3/4] |
| Root Fix | [description of change at source] |
| Root File | [file path] |
| Propagation | [list of downstream files fixed] |
| Unanimity | [VERIFIED / PENDING -- date] |
| New Finding Generated | [finding ID or N/A] |

## Entry 2
...
```

---

## 12. SUMMARY: THE CASCADE GUARANTEE

The cascade propagation architecture ensures:

1. **Every finding is classified** by root cause layer (S/T/P/C/R/I/F).
2. **Non-surface findings are traced** upward through the dependency chain.
3. **Fixes are applied at the root**, not just at the surface.
4. **Fixes propagate downward** through all consuming files.
5. **Unanimity is verified** via full-system search for residual old values.
6. **The fix is documented** in the cascade log with finding generation.

**The result:** When CD (or any future consumer) ingests the design system, the fixes are already baked into the tokens, patterns, conventions, findings, and identity that CD reads. The consumer doesn't need to know that a fix happened -- the system is simply correct at every level.

**This is the difference between:**
- "We fixed the HTML" (surface patch, invisible to downstream)
- "We fixed the system" (cascade propagation, unanimous at every layer)

---

## APPENDIX A: Quick Reference Card

```
CLASSIFICATION:
  S = Surface (fix at Layer 4 only)
  T = Token (fix at Layer 1, cascade to all)
  P = Pattern (fix at Layer 2, cascade to explorations)
  C = Convention (fix at Layer 3, cascade to stage)
  R = Research (fix at Layer 3, inform future stages)
  I = Identity (fix at Layer 3, cascade to all stages)
  F = Finding (fix at Layer 3, cascade to consumers)

LAYERS (inner to outer):
  1. Tokens     (geometry, colors, typography, spacing)
  2. Patterns   (density, organizational, axis, combination)
  3. Research   (convention specs, findings, identity, research)
  4. Explorations (DD, OD, AD, CD HTML files)
  5. Consumers  (CD, Migration, final product)

FIX ORDER: Layer 1 first --> Layer 2 --> Layer 3 --> Layer 4

UNANIMITY = zero instances of old value ANYWHERE in system
```

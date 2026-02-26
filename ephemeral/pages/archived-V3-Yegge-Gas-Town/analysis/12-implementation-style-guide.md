# Phase 3 Implementation Style Guide

**Purpose:** Actionable reference for implementers adding enrichments to Pipeline v3 spec files.
**Sources:** 08-anti-loss-catalog.md (25 mechanisms), 06-enrichment-safety-analysis.md (capacity thresholds), 03-anti-loss-map.md (fragility ratings), audit-anti-loss-mechanisms.md (12 confirmed, 6 upgraded), audit-anti-loss-propagation.md (5 end-to-end traces).

---

## HARD CONSTRAINT: 240 Lines Total Budget

The aggregate safe addition capacity across ALL artifacts is ~240 lines. We have 50+ candidate enrichments. **Most enrichments MUST be implemented as REPLACEMENTS or MODIFICATIONS, not additions.**

gate-runner-core.js is at 68% compliance and ALREADY PAST CAPACITY. Any enrichment targeting this file MUST subtract before adding. This is non-negotiable.

| Artifact | Current Lines | Safe Net Addition | Compliance | Status |
|----------|--------------|-------------------|------------|--------|
| artifact-tc-brief-template.md | ~224 | +30 | 83.7% | MODERATE headroom |
| artifact-builder-recipe.md | ~934 | +50 | 82% | MODERATE headroom |
| gate-runner-core.js | ~1,437 | **0 net** | 68% | OVER CAPACITY |
| artifact-routing.md | ~900 | +40 | 71.4% | MODERATE headroom |
| artifact-orchestrator.md | ~1,058 | +50 | 87% | GOOD headroom |
| artifact-identity-perception.md | ~556 | +20 | 78.8% | LIMITED headroom |
| pa-questions.md + split files | ~1,004 | +30 | 94% | GOOD headroom |
| MANIFEST.md | ~1,193 | +20 | 70.6% | LIMITED headroom |
| artifact-value-tables.md | ~263 | +50 | N/A (reference) | GOOD headroom |

**Rule:** Before adding N lines to any file, identify N lines to remove or replace. Net-zero is the default posture. Net-positive additions consume the 240-line budget.

---

## DIMENSION 1: Formatting Patterns Per File

### artifact-builder-recipe.md — RECIPE FORMAT

**Pattern:** Sequenced steps with Read/Select/Deploy/Assess verbs. Each instruction has a concrete CSS example or value reference. No checklist verbs (Verify, Fail if, Must be, Ensure, Check that).

**Template:**
```markdown
### Step N.M: [Action Verb] [What]

**Read** the [source reference] for [what to extract].
**Select** [specific CSS property]: [concrete value or range].
**Deploy** as:
  ```css
  .zone-element { property: value; }
  ```
**Assess:** Does [observable result]? If not, [specific correction].
```

**Anti-patterns that break the format:**
- Prose paragraphs without action verbs ("The builder should consider...")
- Gate-format language ("Verify that all backgrounds differ by >= 15 RGB")
- Prohibition framing ("Do NOT use cold colors") -- use world-description instead ("Your palette is warm: R >= G >= B")
- Naked thresholds without calibration ranges ("delta >= 15" without "15 = floor, 25 = confident, 50 = dramatic")

**BV-03 enforcement:** Brief Assembler output is checked for 3:1 recipe-to-checklist verb ratio. Enrichment content that enters the brief via Tier 3/4 extraction must use recipe verbs.

---

### artifact-tc-brief-template.md — TIERED TEMPLATE WITH LINE BUDGETS

**Pattern:** 4 tiers with explicit line budgets. Tier 1-2: verbatim (zero compression). Tier 3-4: synthesis targets. Content Map appendix with its own budget.

**Template for adding to Tier 3 (Compositional Intelligence):**
```markdown
### [Zone Boundary or Channel]
Build [spatial/material/temporal change] at the Z[N]-Z[N+1] boundary.
- Background: [hex1] to [hex2] (delta [N] RGB — [calibration label])
- Spacing: [value]px outer, [value]px inner
- Typography: [specific shift, e.g., "H2 from 28px to 32px"]
Deploy [component class or CSS pattern].
```

**Template for adding to Tier 4 (Disposition + Techniques):**
```markdown
D-[NN]: [Disposition Name]
Create [technique] using [CSS property]: [value].
Assess: [1-sentence binary test visible in the viewport].
```

**Anti-patterns:**
- Adding prose without a paired CSS property:value (every Tier 4 disposition MUST have at least 1 concrete CSS pair)
- Breaking tier header format (must match `^#+\s*Tier\s*[1234]` for BV-01 regex)
- Expanding beyond budget (BV-01 enforces T1>=12, T2>=6, T3>=40, T4>=32, ContentMap>=24 at 80% threshold)

**BV-01 enforcement:** Programmatic line counting per tier. Content below 80% of budget triggers FAIL.

---

### gate-runner-core.js — EXECUTABLE PLAYWRIGHT JAVASCRIPT

**Pattern:** Functions return arrays of result objects with schema `{ gate, name, status: 'PASS'|'FAIL', measured, threshold }`. All DOM access via `await page.evaluate(() => {...})`. Use `window.isRenderedElement()` helper for element filtering.

**Template for adding a new gate:**
```javascript
// GR-XX: [Gate Name]
try {
  const measured = await page.evaluate(() => {
    const elements = [...document.querySelectorAll('[selector]')]
      .filter(el => window.isRenderedElement(el));
    // measurement logic
    return { value: computedValue, detail: 'explanation' };
  });
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: measured.value >= THRESHOLD ? 'PASS' : 'FAIL',
    measured: measured.detail,
    threshold: '[description of threshold]'
  });
} catch (e) {
  results.push({
    gate: 'GR-XX', name: '[Gate Name]',
    status: 'FAIL', measured: `Error: ${e.message}`,
    threshold: '[description]'
  });
}
```

**Anti-patterns:**
- Returning anything other than 'PASS' or 'FAIL' for status (no 'PASS*', no 'PARTIAL')
- Querying `document.querySelectorAll('*')` without filtering through `isRenderedElement()` (catches HTML/HEAD/META false positives)
- Adding gates without updating GR-48's REQUIRED_GATES or RECOMMENDED_GATES arrays (L1331-1340)
- Forgetting the try/catch wrapper (uncaught errors break the entire gate run)

**Coordinated update checklist for any gate change:**
1. gate-runner-core.js: gate code in correct function (runGateRunner / runAntiPatternGates / runWave2Gates)
2. gate-runner-core.js L1331-1340: GR-48 REQUIRED or RECOMMENDED array
3. gate-manifest.json L18-52: tier classification
4. gate-manifest.json L62-111: execution order (if new step needed)
5. gate-runner-spec.md: human-readable specification row
6. MANIFEST.md L244-267: Section 3 routing table
7. MANIFEST.md L275-285: verdict logic (if new category)

---

### MANIFEST.md — DECLARATIVE ROUTING + AGENT TEMPLATES

**Pattern:** Structured tables for routing, structured templates for agent prompts, formal definitions for verdict logic. The MANIFEST is the single source of truth for "who gets what."

**Template for adding a routing entry (Appendix B):**
```markdown
| [Agent Role] | [File 1] + [File 2] + ... (~[N] lines) |
```

**Template for adding an exclusion rule (Appendix B negative table):**
```markdown
| [Agent Role] | "[What must NOT be included]" | [Reason — which suppressor or contamination risk] |
```

**Anti-patterns:**
- Adding content to MANIFEST prose sections when it belongs in an artifact file (MANIFEST routes, artifacts contain)
- Modifying Appendix E prompt templates without verifying `{VARIABLE}` placeholders still work
- Changing verdict logic in MANIFEST without updating gate-manifest.json (must stay synchronized)

---

### pa-questions.md — BINARY PA QUESTIONS

**Pattern:** Each question has a YES/NO answer format with a screenshot reference requirement. Questions in Sections 1-3 are auditor-facing. Section 4 is WEAVER USE ONLY.

**Template for adding a PA question:**
```markdown
**PA-[NN]: [Question text ending in ?]**
- Evidence format: YES / NO / CONDITIONAL + screenshot reference + 1-sentence description
- Viewport(s): [1440px / 768px / both]
- Assigned to: Auditor [Letter]
```

**Anti-patterns:**
- Adding calibration data or quality tiers to Sections 1-3 (violates fresh-eyes M-20)
- Adding judgment-scale questions ("Rate 1-5") instead of binary YES/NO
- Adding questions without updating: pa-deployment.md assignment table, MANIFEST agent roster, pa-manifest.md checklist, question totals (appear in 3+ locations)

---

### artifact-value-tables.md — PRE-COMPUTED CSS REFERENCE

**Pattern:** Copy-paste-ready CSS values organized by dimension (background, spacing, typography, borders). Each value pair includes computed deltas for verification.

**Template for adding a value pair:**
```markdown
| Pair [N] | #[HEX1] → #[HEX2] | Delta: [N] RGB | [Intensity label: Subtle/Confident/Dramatic] | [Usage guidance] |
```

**Anti-patterns:**
- Adding value pairs below the 15 RGB threshold without marking them as "BELOW THRESHOLD -- avoid"
- Including prose instructions (this file is REFERENCE, not INSTRUCTION -- instructions go in builder-recipe)

---

### artifact-orchestrator.md — ORCHESTRATOR DECISION TREE

**Pattern:** Phased execution with decision points. Each phase has explicit inputs, outputs, and verification steps.

**Template for adding an orchestrator step:**
```markdown
### Phase [N].[M]: [Step Name]

**Input:** [what the orchestrator reads]
**Action:** [what the orchestrator does — binary decision or delegation]
**Output:** [what gets produced]
**Verification:** [how to confirm the step completed correctly]
**If FAIL:** [recovery path — delegate to Brief Assembler / abort / flag for human]
```

**Anti-patterns:**
- Adding judgment-based decisions where binary decisions are possible
- Contradicting verdict logic in gate-manifest.json
- Adding steps without tracking them in EXECUTION-TRACKER-TEMPLATE.md

---

## DIMENSION 2: Structural Architecture

### Per-File Capacity Ceilings (from enrichment-safety-analysis)

**Key insight:** Compliance does NOT degrade linearly with file size. It degrades based on AGENT-VISIBLE instruction count and INSTRUCTION FORMAT.

| Format Type | Compliance Impact Per Line | Multiplier |
|------------|---------------------------|------------|
| Binary + CSS value | Half normal degradation | 0.5x |
| Recipe-format steps | Neutral | 1.0x |
| Prose instructions | Double degradation | 2.0x |
| Judgment-requiring | Triple degradation | 3.0x |

**Before adding any enrichment, compute:**
1. Count net lines being added to each artifact
2. Classify each line by format type
3. Multiply: `effective_lines = net_lines x format_multiplier`
4. Compare against Safe Net Addition column in the table above
5. If over budget: subtract first, or route to a different artifact

### Content Routing Decision Tree

When an enrichment needs to reach the builder:

```
Does it specify a CSS property:value pair?
  YES → artifact-builder-recipe.md (recipe step)
  NO → Is it a perception threshold?
    YES → artifact-identity-perception.md (calibration) + gate-runner-core.js (binary check)
    NO → Is it a brief structure change?
      YES → artifact-tc-brief-template.md (template modification)
      NO → Is it a process/decision change?
        YES → artifact-orchestrator.md (phase step)
        NO → Is it a reference value?
          YES → artifact-value-tables.md (value pair)
          NO → Reconsider whether this enrichment is needed
```

### The Brief Bottleneck

ALL builder-facing enrichments pass through the brief (~165 lines). The brief is at the 200-line mode-collapse threshold. Enrichments that add builder instructions should go into artifact-builder-recipe.md (934 lines with headroom) rather than artifact-tc-brief-template.md (224 lines near ceiling). The Brief Assembler extracts key concepts from the recipe; the recipe provides backup detail.

### File Splitting Guidance

A file needs splitting when:
- Compliance drops below 65% (gate-runner already hit this -- hence the 5-file split)
- A single agent must process the entire file AND the file exceeds 1,000 lines
- The file serves multiple agent roles (the monolithic PA protocol served orchestrator + auditors + weaver -- hence the 5-file split)

A file does NOT need splitting when:
- It is a reference document read selectively (artifact-value-tables.md at 263 lines is fine)
- It serves a single agent role regardless of length (artifact-builder-recipe.md at 934 lines serves only the Brief Assembler's extraction)
- Its content is structurally independent per section (pa-questions.md sections are independent)

---

## DIMENSION 3: Regression Prevention

### Pre-Flight Checklist (Before Implementing Any Enrichment)

For EVERY enrichment, verify these before writing a single line:

- [ ] **Identify the target file(s)** and check the capacity table above
- [ ] **Identify anti-loss mechanisms in blast radius** using the 5 interdependency clusters below
- [ ] **Classify the enrichment format** (binary+CSS / recipe / prose / judgment) and compute effective lines
- [ ] **Check if net addition exceeds safe budget** -- if yes, identify lines to subtract first
- [ ] **If targeting gate-runner-core.js:** identify equal or greater subtraction. Net-zero is MANDATORY.
- [ ] **If targeting brief-facing content:** verify NO checklist verbs, NO suppressor patterns, NO prohibition framing
- [ ] **If targeting auditor-facing content:** verify NO calibration data, NO tier definitions, NO build intent

### 5 Interdependency Clusters (Touch One, Check All)

**Cluster 1: Brief Quality Enforcement**
Members: M-05 (tiered brief), M-06 (suppressor management), M-11 (recipe format), M-17 (TC brief template)
Shared code: gate-runner-core.js L29-120 (BV-01 through BV-04)
Check: Any brief format change must be coordinated across all four mechanisms.

**Cluster 2: Builder Information Barrier**
Members: M-04 (context isolation), M-08 (dual-route), M-12 (world-description framing)
Shared enforcement: MANIFEST Appendix B exclusion table, BV-04 suppressor scan
Check: Content reaching the builder must avoid prohibition framing AND gate-format thresholds.

**Cluster 3: Gate Verification System**
Members: M-13 (binary rules), M-14 (perception calibration), M-19 (programmatic verification)
Shared code: gate-runner-core.js (entire file), gate-manifest.json (tiers + verdict logic)
Check: Adding/removing gates requires coordinated updates in 5-7 locations.

**Cluster 4: PA Audit Integrity**
Members: M-20 (fresh-eyes), M-21 (screenshots), M-22 (9-auditor deployment)
Shared enforcement: pa-deployment.md (assignment table), pa-guardrails.md (constraints)
Check: Adding PA questions requires updates in 5+ locations.

**Cluster 5: Routing Accuracy**
Members: M-01 (decomposition), M-03 (direct injection), M-07 (MANIFEST routing), M-09 (prompt templates)
Shared spec: MANIFEST.md (Section 3 + Appendix B + Appendix D + Appendix E)
Check: Adding new files or changing routing requires updates in all four MANIFEST sections.

### Post-Implementation Verification (After Each Enrichment)

- [ ] **Format check:** Does the modified section still use recipe verbs (not checklist verbs)?
- [ ] **Capacity check:** Count the net lines added. Update the running total against the 240-line budget.
- [ ] **Cross-reference check:** If you changed a threshold, did you update ALL locations? (gate-runner-core.js + gate-runner-spec.md + gate-runner-preconditions.md + MANIFEST quickstart)
- [ ] **Isolation check:** Does any new content leak to an agent that should not see it? (Check MANIFEST Appendix B exclusion table)
- [ ] **Regex check:** If you changed any header format, do the BV-01 tier regexes (gate-runner-core.js L35-39) still match?
- [ ] **GR-48 check:** If you added a gate, is it in REQUIRED_GATES or RECOMMENDED_GATES?
- [ ] **Question count check:** If you added PA questions, are totals updated in pa-deployment.md, pa-manifest.md, and MANIFEST?

### Red Lines: NEVER Safe Without Architectural Review

These changes are NEVER safe as "enrichments" -- they are architectural changes requiring a separate validation cycle:

1. **Changing the number of pipeline phases** (e.g., adding automated REFINE as Phase 4)
2. **Changing the brief line budget totals** (e.g., expanding from ~165 to ~250 lines)
3. **Changing the BV gate thresholds downward** (weakening pre-build verification)
4. **Removing any mechanism rated HIGHLY EFFECTIVE** (12 mechanisms confirmed effective)
5. **Changing the builder's creative authority band** (currently 80% -- changing to 60% or 95% is architectural)
6. **Adding calibration data to auditor-visible files** (violates fresh-eyes principle)
7. **Modifying the `isCold()` formula** in gate-runner-core.js without full palette validation
8. **Changing GR-48 REQUIRED_GATES to a smaller list** (weakening coverage enforcement)
9. **Removing the dual-route pattern** for any soul constraint (single-route removes a safety net)

### Per-Enrichment Blast Radius Template

For each enrichment, the implementer should fill in:

```
Enrichment: E-[NNN]
Target file(s): [list]
Net lines: [+N / -N / 0]
Format type: [binary+CSS / recipe / prose / judgment]
Effective lines: [net x multiplier]
Clusters in blast radius: [1-5, list which]
Anti-loss mechanisms affected: [M-NN, list]
Subtraction offset (if gate-runner-core.js): [what to remove]
Regression checks needed: [from post-implementation list above]
```

---

## QUICK REFERENCE: File Fragility Ratings

| File | Fragility | Safe Edits | Dangerous Edits |
|------|-----------|-----------|-----------------|
| gate-runner-core.js | **CRITICAL** | New gate functions following patterns | Regex changes, threshold changes, schema changes, GR-48 arrays |
| gate-manifest.json | **FRAGILE** | Adding gates to tier arrays | Verdict logic, execution order, tier reclassification |
| MANIFEST.md | **FRAGILE** (routing/templates) | Adding routing entries, line count updates | Exclusion rules, prompt templates, verdict logic |
| pa-deployment.md | **FRAGILE** (assignments) | Model recommendations | Auditor assignments, cross-validation pairs, question counts |
| pa-questions.md | ROBUST (S1-3) / **FRAGILE** (S4) | Adding questions to S1-3 | Adding calibration data to auditor-visible sections |
| artifact-builder-recipe.md | ROBUST | Adding recipe steps | Checklist verbs, gate thresholds |
| artifact-tc-brief-template.md | ROBUST (content) / **CRITICAL** (headers) | Enriching tier content | Changing tier header format (breaks BV-01 regex) |
| artifact-orchestrator.md | ROBUST | Adding orchestrator steps | Contradicting MANIFEST verdict logic |
| artifact-value-tables.md | ROBUST | Adding/modifying value pairs | N/A |
| EXECUTION-TRACKER-TEMPLATE.md | ROBUST | Adding verification checkboxes | N/A |

---

*Guide complete. 3 dimensions covered: formatting patterns (per-file templates + anti-patterns), structural architecture (capacity ceilings + routing + splitting), regression prevention (pre-flight + clusters + post-implementation + red lines).*

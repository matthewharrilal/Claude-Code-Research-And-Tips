<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/synthesis/PRODUCTION-RULES.md
     Tier: A | Batch: 1 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════ -->

## 1. IDENTITY

| Field | Value |
|-------|-------|
| **File** | `design-extraction/component-system/perceptual-audit-v2/synthesis/PRODUCTION-RULES.md` |
| **Tier** | T1-FOUNDATION (locked, cannot be regenerated) |
| **Role** | Implementation enforcement bridge between soul philosophy and CSS production code |
| **Pipeline Position** | T1 Synthesis -- consumes soul + tracking data, feeds all downstream implementation |
| **Size** | 444 lines, ~13K bytes |
| **Created** | 2026-02-04, Phase 4A-E Synthesis |
| **Edge ID** | E-006 (relationship map) |
| **Classification** | T1-FOUNDATION per KA-DECISIONS.md line 74 |

**One-sentence purpose:** This file translates the 6 Universal Rules from SOUL-DEFINITION.md into mandatory CSS enforcement rules with correct/wrong examples, component-specific implementation templates, coexistence rules, and a verification checklist that any KortAI implementer MUST follow.

---

## 2. BUILT ON (Upstream Dependencies)

This file is a synthesis product. It consumes and codifies the following sources:

| Source File | What Was Consumed | Relationship |
|-------------|-------------------|--------------|
| `component-system/SOUL-DEFINITION.md` | 6 Universal Rules (Section 2), locked CSS values, soul statement | **Primary source** -- PRODUCTION-RULES translates these philosophical rules into enforceable CSS constraints |
| `tracking/COLOR-TOKENS.md` | Allowed color palette (#E83025, #FEF9F5, #1A1A1A, #666666), semantic accent colors, banned color list | Token authority -- specific hex values and banning rules |
| `tracking/TYPOGRAPHY-TOKENS.md` | Serif/Sans/Mono hierarchy, font family assignments (Instrument Serif, Inter, JetBrains Mono) | Token authority -- typography zone rules |
| `tracking/ANTI-PATTERNS.md` | Banned properties (border-radius > 0, box-shadow, Bootstrap colors, arbitrary grays, rainbow accents) | Negative constraint source -- what the "WRONG" examples demonstrate |
| All 11 component re-audits | Component-specific rules (Code Snippet background, Callout padding asymmetry, Task gap=0, etc.) | Per-component findings distilled into implementation templates |
| Phase 4 re-audit findings | Verified values, edge case discoveries, exception identification | Validation layer confirming rule accuracy |

**Critical upstream relationship:** SOUL-DEFINITION.md provides the WHY ("editorial precision," "print heritage honesty"). PRODUCTION-RULES.md provides the WHAT (explicit CSS with `border-radius: 0`). These two files form an inseparable pair -- soul philosophy without enforcement is aspirational; enforcement without soul philosophy is arbitrary.

---

## 3. FEEDS INTO (Downstream Dependents)

| Consumer | What It Takes | How It Uses PRODUCTION-RULES |
|----------|---------------|------------------------------|
| `showcase/DESIGN-SYSTEM/` (general) | Implementation guidelines | Public-facing documentation for component builders references these mandatory constraints |
| `showcase/knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` | T1 listing (line 48-51) | Declares PRODUCTION-RULES as authoritative for implementation rules alongside CONSISTENCY-VERIFICATION.md |
| Any CSS implementation work | 6 Universal Rules, component templates | Every `.css` file must comply; the verification checklist is the QA gate |
| `perceptual-audit-v2/CLAUDE.md` | Constraint enforcement (lines 44, 56) | CLAUDE.md declares "ASSUME nothing is optional -- Every constraint in PRODUCTION-RULES.md is mandatory" |
| `showcase/dependency-trace/11-DEPRECATION-ASSESSMENT.md` | Enforcement authority | Used to declare `archive/tokens/effects.css` as SUPERSEDED/DANGEROUS because it defines `--radius-sm: 2px` which violates Rule 1 |
| `showcase/dependency-trace/10-MOVE-RECOMMENDATIONS.md` | Warning text source | Recommends adding CSS comment citing PRODUCTION-RULES.md to dangerous files |
| Future OD/AD/CD pipeline stages | Mandatory compliance baseline | Any component optimization, assembly, or composition must pass the verification checklist |

**Downstream impact radius:** 22 files across the codebase reference PRODUCTION-RULES.md (42 total occurrences). This makes it the 4th most-referenced T1 file by file count, behind DESIGN-TOKEN-SUMMARY.md, MASTER-SOUL-SYNTHESIS.md, and ANTI-PATTERNS-REGISTRY.md.

---

## 4. WHAT THIS FILE ESTABLISHES

PRODUCTION-RULES.md establishes five categories of mandatory constraints:

### 4.1 The 6 Universal Rules (Lines 10-125)

Each rule includes correct CSS, wrong CSS, and an enforcement statement:

| Rule # | Name | Locked Value | Enforcement Mechanism |
|--------|------|-------------|----------------------|
| 1 | Sharp Edges | `border-radius: 0` | Every component CSS file must explicitly set it |
| 2 | Flat Design | `box-shadow: none` | Every component CSS file must explicitly set it |
| 3 | Limited Palette | 4 core + 4 semantic colors only | Banned list (Bootstrap, arbitrary grays, rainbow) |
| 4 | Typography Hierarchy | Serif/Sans/Mono zones | Zone-type mapping table |
| 5 | Heavy Borders | 2-4px minimum when bordered | Exception: Frame borders (Core Abstraction, Reasoning) use 1px |
| 6 | Generous Whitespace | 24px+ padding, 1.6 line-height | Correct/wrong CSS examples |

### 4.2 Component Implementation Templates (Lines 128-322)

7 component-specific rule sets with CSS templates:
- **Code Snippet** -- dark background (#1E1E1E), 2-3 syntax colors max, hover-reveal copy button
- **Callout Family** -- 4px left border, asymmetric padding (24px top / 28px bottom), no icons
- **File Tree** -- monospace only, 1.4-1.5 line-height, 4-space indent, blue folders
- **Decision Matrix** -- 4px red left border, no vertical borders, no zebra/hover
- **Core Abstraction** -- 1px all-sides frame, serif italic philosophy, dark code section
- **Task Component** -- 0px gap between tasks, 18px square checkbox, strikethrough complete
- **Reasoning Component** -- 1px all-sides frame, 2-column only, amber summary (#FEF9F0)

### 4.3 Coexistence Rules (Lines 324-350)

- Universal gap: 24px between all components
- Same-type adjacency: requires prose break between
- HIGH+HIGH density transitions: add prose or 32px gap

### 4.4 Page Composition Rules (Lines 352-377)

- Density rhythm: LOW -> HIGH -> LOW
- Max 3 same-type components in sequence
- Breathing point every 3-4 dense components

### 4.5 Accessibility and Verification (Lines 378-431)

- Focus states: 2px solid primary with 2px offset
- ARIA labels for 4 components (Code Snippet, Callouts, Task, File Tree)
- Color contrast: WCAG AA compliance claims
- 3-phase verification checklist: Pre-Implementation, Implementation, Post-Implementation

---

## 5. WHAT BREAKS IF THIS FILE IS WRONG

**Impact assessment based on 42 references across 22 files:**

| Break Category | What Happens | Affected Files |
|----------------|-------------|----------------|
| **Soul violation** | Components built with wrong CSS values (rounded corners, shadows) destroy editorial identity | All downstream CSS, DESIGN-SYSTEM/ |
| **Dangerous file rehabilitation** | `archive/tokens/effects.css` deprecation rationale depends on Rule 1 and Rule 2 being absolute | 11-DEPRECATION-ASSESSMENT.md, 10-MOVE-RECOMMENDATIONS.md |
| **CLAUDE.md enforcement collapse** | `perceptual-audit-v2/CLAUDE.md` lines 44-47 cite PRODUCTION-RULES as the mandatory constraint source; wrong rules = wrong enforcement | Every future Claude session in this directory |
| **Pipeline integrity** | SOURCE-OF-TRUTH-REGISTRY.md declares this T1; wrong T1 cascades through DD/OD/AD/CD | All pipeline stages |
| **Verification failure** | The 3-phase checklist is the QA gate; wrong checklist = wrong QA | Every component audit |
| **Anti-pattern misidentification** | Banned property lists feed ANTI-PATTERNS-REGISTRY.md; if rules are wrong, legitimate values get banned or banned values get allowed | ANTI-PATTERNS-REGISTRY.md, DESIGN-SYSTEM/anti-patterns/ |

**Blast radius:** HIGH. This file is a enforcement authority -- it is the document that turns philosophy into testable constraints. If the constraints are wrong, every compliance check produces wrong results.

---

## 6. SOUL ALIGNMENT

This file is the **bridge** between soul philosophy (SOUL-DEFINITION.md, MASTER-SOUL-SYNTHESIS.md) and CSS implementation. Its soul alignment is structural, not decorative.

**How each rule maps to soul:**

| Rule | Soul Piece | Soul Statement |
|------|-----------|----------------|
| Rule 1 (Sharp Edges) | Editorial Precision | "Every sharp edge is a decision" -- from SOUL-DEFINITION.md soul statement |
| Rule 2 (Flat Design) | Print Heritage | "Every lack of shadow is a statement" -- flat honors print honesty |
| Rule 3 (Limited Palette) | Bold Restraint | Red + cream + black only = "limited palette, maximum impact" |
| Rule 4 (Typography) | Typographic Hierarchy | Serif/sans/mono zones = "typography creates interest, not decoration" |
| Rule 5 (Heavy Borders) | Confident Structure | 2-4px = "decisive, confident" vs 1px = "timid" |
| Rule 6 (Whitespace) | Content Breathing | "Content breathes freely" -- generous whitespace as design element |

**The Soul Test (from Post-Implementation checklist):** "Could this be Bootstrap?" If the answer is yes, the component fails. This is the ultimate soul alignment check -- PRODUCTION-RULES.md exists so that no KortAI component could ever be mistaken for a generic UI framework output.

---

## 7. SIBLING RELATIONSHIPS

Within the `synthesis/` directory, PRODUCTION-RULES.md relates to its 5 siblings:

| Sibling | Relationship to PRODUCTION-RULES |
|---------|----------------------------------|
| `MASTER-SOUL-SYNTHESIS.md` | **Upstream philosophy** -- defines the 5 soul pieces that PRODUCTION-RULES enforces. PRODUCTION-RULES is the "how to enforce" for what MASTER-SOUL-SYNTHESIS describes as "what to believe." |
| `DESIGN-TOKEN-SUMMARY.md` | **Upstream values** -- provides the complete `:root` block with locked CSS variables. PRODUCTION-RULES references these tokens (e.g., `--color-primary`, `--font-serif`) but does not redefine them. |
| `CHARACTER-FAMILY-COMPLETE.md` | **Parallel specification** -- defines the 11 component characters with soul scores. PRODUCTION-RULES provides the CSS implementation rules for those same 7 components (Code Snippet through Reasoning). CHARACTER-FAMILY covers personality; PRODUCTION-RULES covers enforcement. |
| `ANTI-PATTERNS-REGISTRY.md` | **Complementary negative** -- defines what NOT to do ("The Soul Test"). PRODUCTION-RULES defines what TO DO. Together they form the positive/negative constraint pair. The "BANNED" lists in Rule 3 overlap with ANTI-PATTERNS-REGISTRY content. |
| `CONSISTENCY-VERIFICATION.md` | **Downstream QA** -- provides the detailed 10-point universal verification checklist and 11 component-specific checklists. PRODUCTION-RULES has its own 3-phase checklist (lines 407-431) which is a condensed version. CONSISTENCY-VERIFICATION is the expanded QA partner. |

**Division of labor:** MASTER-SOUL-SYNTHESIS = philosophy. DESIGN-TOKEN-SUMMARY = values. CHARACTER-FAMILY = personalities. PRODUCTION-RULES = enforcement. ANTI-PATTERNS-REGISTRY = prohibitions. CONSISTENCY-VERIFICATION = verification. Each has a distinct role; none is redundant.

---

## 8. RESEARCH DEBT

The following gaps, ambiguities, and missing enforcement mechanisms were identified through analysis:

### 8.1 Rules Without Enforcement Mechanisms

| Rule | Gap | Severity |
|------|-----|----------|
| Rule 4 (Typography) | No correct/wrong CSS examples unlike Rules 1, 2, 5, 6. No explicit enforcement statement ("Every component must..."). Only a table mapping zones to fonts. | MEDIUM -- an implementer knows the mapping but has no enforcement mechanism or wrong-case illustration |
| Rule 6 (Whitespace) | No explicit enforcement statement. Rules 1 and 2 say "Every component CSS file must explicitly set X." Rule 6 has no equivalent. | MEDIUM -- what constitutes "generous" is subjective without a floor value in the enforcement statement |
| Rule 5 (Exception) | "Frame borders (Core Abstraction, Reasoning) use 1px for subtlety" -- no mechanism to distinguish when 1px is an acceptable exception vs. a violation. How does a new component know if it qualifies as a "frame"? | LOW -- currently only 2 exceptions exist and they are named |

### 8.2 Edge Cases Not Covered

| Edge Case | Description | Severity |
|-----------|-------------|----------|
| **Invalid CSS value** | File Tree template has `font-size: 13-14px` (line 207) which is not valid CSS. Should be a locked single value or a `clamp()` expression. | HIGH -- copy-paste from template produces broken CSS |
| **Missing component templates** | Only 7 of 11 components have implementation templates. Missing: Gotcha callout specifics (different from generic callout?), Level Card, Navigation, and Sidebar components if they exist. | MEDIUM -- depends on whether CHARACTER-FAMILY components all need templates |
| **Responsive rules absent** | The Post-Implementation checklist includes "Responsive behavior verified" (line 429) but no responsive rules are defined anywhere in the document. How should components behave at mobile breakpoints? | HIGH -- verification step with no specification to verify against |
| **Dark mode / theme switching** | No rules for alternate color schemes. The locked palette assumes light/cream background only. | LOW -- may be out of scope for v1.0 |
| **Accent color enforcement** | Semantic extensions (blue, green, amber, purple) are declared "ONLY for callouts" but no enforcement prevents their use elsewhere. | MEDIUM -- if an implementer uses `--accent-blue` on a non-callout, no rule catches it |
| **Code Snippet `box-shadow: none`** | The Code Snippet CSS template (line 147) includes `box-shadow: none` but the Code Snippet rule table (lines 133-140) does not list it as a rule. Inconsistency between table and template. | LOW -- the template is correct per Rule 2 |
| **Missing ARIA specs** | Accessibility section provides ARIA labels for 4 components (Code Snippet, Callouts, Task, File Tree) but not for Decision Matrix, Core Abstraction, or Reasoning. | MEDIUM -- incomplete accessibility coverage |
| **Color contrast verification** | Line 404 claims "#F5F0EB on #1E1E1E meets requirements" but no verification method or tool is specified. The contrast ratio is stated but not computed or cited. | LOW -- the claim appears correct but is unverified |
| **Coexistence enforcement** | "Add prose break" between same-type components has no enforcement mechanism. This is a design guideline, not a testable constraint. | MEDIUM -- cannot be automated |
| **Page Composition vs "nothing is optional"** | Page Composition rules use "recommended" language ("Recommended Limits", "Consider adding") which conflicts with CLAUDE.md's "ASSUME nothing is optional" directive. | LOW -- philosophical tension, not a technical bug |

### 8.3 Summary

| Severity | Count |
|----------|-------|
| HIGH | 2 (invalid CSS value, missing responsive rules) |
| MEDIUM | 5 (Rule 4 enforcement, Rule 6 enforcement, missing templates, accent enforcement, ARIA gaps) |
| LOW | 5 (Rule 5 exception clarity, dark mode, code snippet table/template mismatch, contrast verification, composition language) |

---

## 9. QUALITY GATES

### 9.1 Content Completeness

| Check | Result | Evidence |
|-------|--------|----------|
| All 6 Universal Rules present with CSS examples | PASS | Lines 13-125, Rules 1-6 each with correct/wrong code blocks |
| Every rule has correct AND wrong CSS | PARTIAL | Rules 1, 2, 5, 6 have both. Rule 3 has allowed/banned lists (equivalent). Rule 4 has only a table (no wrong CSS). |
| Enforcement statements present | PARTIAL | Rules 1 and 2 have explicit "Every component CSS file must..." statements. Rules 3-6 lack this explicit enforcement phrasing. |
| Component templates are copy-paste ready | PARTIAL | 6 of 7 templates are valid CSS. File Tree has `font-size: 13-14px` which is invalid. |
| Verification checklist covers all rules | PASS | Lines 410-430 cover all 6 rules across Pre/Implementation/Post phases |
| Coexistence rules defined | PASS | Lines 324-350 with gap values and adjacency rules |
| Accessibility rules defined | PARTIAL | Focus states and ARIA for 4/7 documented components |

### 9.2 Threading Integrity

| Check | Result | Evidence |
|-------|--------|----------|
| Source attribution present | PASS | Line 7: "Sources: All Tracking Sheets + SOUL-DEFINITION.md" |
| Built-on files exist and are accessible | PASS | SOUL-DEFINITION.md, all tracking/ files verified as existing |
| Downstream consumers documented in threading data | PASS | E-006 edge in relationship-map-data.yaml, 22 files reference this document |
| No contradictions with upstream sources | PASS | Hex values match DESIGN-TOKEN-SUMMARY.md; rules match SOUL-DEFINITION.md Section 2 |
| Threading data matches actual content | PASS | Threading data says "6 Universal Rules with correct/wrong CSS examples; enforcement rules; new component checklist" -- all present |

### 9.3 Soul Fidelity

| Check | Result | Evidence |
|-------|--------|----------|
| `border-radius: 0` is absolute (no exceptions) | PASS | Rule 1 says "NO EXCEPTIONS"; every CSS template includes `border-radius: 0` |
| `box-shadow: none` is absolute (no exceptions) | PASS | Rule 2 says "NO EXCEPTIONS"; templates include `box-shadow: none` where applicable |
| Color palette matches DESIGN-TOKEN-SUMMARY.md | PASS | Core 4 + semantic 4 match exactly |
| Typography hierarchy matches tracking data | PASS | Serif/Sans/Mono zones consistent with TYPOGRAPHY-TOKENS.md |
| No soul violations in CSS templates | PASS | All 7 templates use `border-radius: 0`, correct colors, correct fonts |

### 9.4 Overall Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| Content completeness | 85% | Strong on rules 1-2, weaker on 4-6 enforcement phrasing |
| Threading integrity | 100% | All upstream/downstream connections verified |
| Soul fidelity | 100% | No soul violations in any template or rule |
| Actionability | 90% | Templates are mostly copy-paste ready; one invalid CSS value |
| Research debt | MEDIUM | 2 HIGH, 5 MEDIUM, 5 LOW gaps identified |

---

## 10. NAVIGATION

### Reading This File

**Read order for implementers:**
1. Section "THE 6 UNIVERSAL RULES" (lines 10-125) -- understand the non-negotiable constraints
2. Your specific component in "COMPONENT IMPLEMENTATION RULES" (lines 128-322) -- get the CSS template
3. "COEXISTENCE RULES" (lines 324-350) -- understand component adjacency
4. "VERIFICATION CHECKLIST" (lines 407-431) -- run the QA gate

**Read order for auditors:**
1. "VERIFICATION CHECKLIST" first -- understand what to check
2. "THE 6 UNIVERSAL RULES" -- understand what each check verifies
3. Cross-reference with CONSISTENCY-VERIFICATION.md for the expanded 10-point checklist

### Before Modifying This File

This file is T1-FOUNDATION (locked). Before any modification:
1. Verify the change does not contradict SOUL-DEFINITION.md
2. Verify the change does not break any of the 22 downstream references
3. Update DESIGN-TOKEN-SUMMARY.md if token values change
4. Update ANTI-PATTERNS-REGISTRY.md if banned properties change
5. Update CONSISTENCY-VERIFICATION.md if checklist items change

### Related Files (Quick Reference)

| Need | File |
|------|------|
| Soul philosophy (WHY) | `synthesis/MASTER-SOUL-SYNTHESIS.md` |
| CSS variable values | `synthesis/DESIGN-TOKEN-SUMMARY.md` |
| Component personalities | `synthesis/CHARACTER-FAMILY-COMPLETE.md` |
| What NOT to do | `synthesis/ANTI-PATTERNS-REGISTRY.md` |
| Expanded QA checklists | `synthesis/CONSISTENCY-VERIFICATION.md` |
| Upstream soul authority | `component-system/SOUL-DEFINITION.md` |
| Color token registry | `tracking/COLOR-TOKENS.md` |
| Typography token registry | `tracking/TYPOGRAPHY-TOKENS.md` |
| Anti-pattern tracking data | `tracking/ANTI-PATTERNS.md` |

<!-- ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->

# PRODUCTION RULES
## KortAI Implementation Guidelines

**Version:** 1.0
**Date:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:** All Tracking Sheets + SOUL-DEFINITION.md

═══════════════════════════════════════════════════════════════════════════════
## THE 6 UNIVERSAL RULES
═══════════════════════════════════════════════════════════════════════════════

### Rule 1: Sharp Edges — NO EXCEPTIONS

```css
/* ✓ CORRECT */
.component {
  border-radius: 0;
}

/* ✗ WRONG — Never do this */
.component {
  border-radius: 4px;   /* NO */
  border-radius: 8px;   /* NO */
  border-radius: 12px;  /* NO */
  border-radius: 50%;   /* NO */
}
```

**Enforcement:** Every component CSS file must explicitly set `border-radius: 0`.

---

### Rule 2: Flat Design — NO EXCEPTIONS

```css
/* ✓ CORRECT */
.component {
  box-shadow: none;
}

/* ✗ WRONG — Never do this */
.component {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);   /* NO */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);  /* NO */
}
```

**Enforcement:** Every component CSS file must explicitly set `box-shadow: none`.

---

### Rule 3: Limited Palette — RED + CREAM + BLACK ONLY

**Allowed Colors:**
```css
--color-primary: #E83025;      /* Red accent */
--color-background: #FEF9F5;   /* Warm cream */
--color-text: #1A1A1A;         /* Near-black */
--color-text-secondary: #666666;  /* Muted */
```

**Semantic Extensions (ONLY for callouts):**
```css
--accent-blue: #4A90D9;    /* Info only */
--accent-green: #4A9D6B;   /* Tip only */
--accent-amber: #D97706;   /* Essence, Reasoning only */
--accent-purple: #7C3AED;  /* Challenge only */
```

**BANNED:**
- Bootstrap colors (#007bff, #28a745, #dc3545, #ffc107)
- Arbitrary grays (#f8f9fa, #e9ecef, #dee2e6)
- Rainbow accents

---

### Rule 4: Typography Hierarchy — SERIF/SANS/MONO

| Zone Type | Font | Usage |
|-----------|------|-------|
| Display/Title | Serif (Instrument Serif) | Headlines, labels, pull quotes |
| Body/Content | Sans (Inter) | Paragraphs, descriptions |
| Technical | Mono (JetBrains Mono) | Code, file trees |

**Special Case:** Essence Callout body uses Serif Italic (the only callout exception).

---

### Rule 5: Heavy Borders When Bordered — 2-4px MINIMUM

```css
/* ✓ CORRECT */
.bordered-component {
  border: 3px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
}

/* ✗ WRONG — Timid borders */
.component {
  border: 1px solid #dee2e6;  /* NO */
}
```

**Exception:** Frame borders (Core Abstraction, Reasoning) use 1px for subtlety.

---

### Rule 6: Whitespace as Design Element — GENEROUS ALWAYS

```css
/* ✓ CORRECT */
.component {
  padding: 24px 32px;
  margin: 32px 0;
  line-height: 1.6;
}

/* ✗ WRONG — Cramped */
.component {
  padding: 8px;
  margin: 0;
  line-height: 1.2;
}
```

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT IMPLEMENTATION RULES
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet

| Rule | Value | Reason |
|------|-------|--------|
| Background | `#1E1E1E` (dark slate) | Technical focus zone |
| Border radius | 0 | Editorial precision |
| Syntax colors | 2-3 max | Calm, not rainbow |
| Copy button | Hover-reveal only | Content first |
| Line numbers | Optional, ghosted | Ruler, not feature |
| Max-height | Consider adding | Prevent page domination |

**CSS Template:**
```css
.code-snippet {
  background: #1E1E1E;
  border-radius: 0;
  box-shadow: none;
  padding: 16px;
}
```

---

### Callout Family (Info, Tip, Gotcha, Essence, Challenge)

| Rule | Value | Reason |
|------|-------|--------|
| Left border | 4px solid [accent] | Flag marker |
| Background | Tinted or transparent | Semantic zone |
| Padding top | 24px | Breathing room |
| Padding bottom | 28px (asymmetric!) | Settling space |
| Label | Uppercase, 10-11px | Type identification |
| Icons | NONE | Typography only |

**CSS Template:**
```css
.callout {
  border-left: 4px solid var(--accent-color);
  padding: 24px 20px 28px 20px;
  border-radius: 0;
  box-shadow: none;
}

.callout__label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**Essence Exception:**
```css
.essence-callout .callout__body {
  font-family: var(--font-serif);
  font-style: italic;
}
```

---

### File Tree

| Rule | Value | Reason |
|------|-------|--------|
| Font | Monospace only | Alignment critical |
| Line height | 1.4-1.5 (tight) | Dense structure |
| Indentation | 4 spaces fixed | Hierarchy depth |
| Folder color | Blue (#4A90D9) | Landmarks |
| Comment color | Gray (#888) | Annotations recede |

**CSS Template:**
```css
.file-tree {
  font-family: var(--font-mono);
  font-size: 13-14px;
  line-height: 1.4;
  white-space: pre;
  border-left: 4px solid var(--color-primary);
  border-radius: 0;
}
```

---

### Decision Matrix

| Rule | Value | Reason |
|------|-------|--------|
| Left border | 4px red | Category anchor |
| Vertical borders | NONE | Open columns |
| Horizontal rules | 1px subtle | Section breaks |
| Width | auto (content-driven) | Not forced 100% |
| Zebra striping | NONE | Trust reader |
| Hover effects | NONE | Content, not app |

**CSS Template:**
```css
.decision-matrix {
  border-left: 4px solid var(--color-primary);
  border-radius: 0;
}

.decision-matrix th,
.decision-matrix td {
  border-bottom: 1px solid var(--color-border-subtle);
  border-left: none;
  border-right: none;
}
```

---

### Core Abstraction

| Rule | Value | Reason |
|------|-------|--------|
| Frame | 1px border all sides | Bounded teaching unit |
| Philosophy font | Serif italic | Editorial pull-quote |
| Code section | Dark background | Demonstration |
| Layout | Stacked (philosophy first) | Wisdom precedes proof |

**CSS Template:**
```css
.core-abstraction {
  border: 1px solid var(--color-border);
  border-radius: 0;
  box-shadow: none;
}

.core-abstraction__quote {
  font-family: var(--font-serif);
  font-style: italic;
}

.core-abstraction__code {
  background: #1E1E1E;
}
```

---

### Task Component

| Rule | Value | Reason |
|------|-------|--------|
| Task-to-task gap | 0px (touching!) | Workflow continuity |
| Checkbox | 18px square, 0 radius | Sharp, editorial |
| Completed state | Strikethrough | Editorial marking |
| Removal on complete | NO | Visibility preserved |
| Gamification | NONE | No confetti/colors |

**CSS Template:**
```css
.task-list .task + .task {
  margin-top: 0; /* Tasks touch */
}

.task--complete .task__title {
  text-decoration: line-through;
  color: var(--color-text-secondary);
}
```

---

### Reasoning Component

| Rule | Value | Reason |
|------|-------|--------|
| Frame | 1px border all sides | Bounded analysis |
| Columns | 2 only, equal weight | Binary comparison |
| Column divider | 1px subtle | Barely visible |
| Summary background | Amber tint (#FEF9F0) | Synthesis zone |
| Color coding columns | NONE | Equal weight |

**CSS Template:**
```css
.reasoning {
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.reasoning__column:first-child {
  border-right: 1px solid var(--color-border);
}

.reasoning__summary {
  background: #FEF9F0;
  border-top: 2px solid var(--accent-amber);
}
```

═══════════════════════════════════════════════════════════════════════════════
## COEXISTENCE RULES
═══════════════════════════════════════════════════════════════════════════════

### Universal Gap: 24px Between All Components

```css
.component + .component {
  margin-top: 24px;
}
```

### Same-Type Adjacency: Add Prose Break

When placing same-type components back-to-back:
- Code + Code: Add explanatory prose between
- Callout + Callout: Add prose context
- Matrix + Matrix: Needs clear section break

### Density Transitions

| From | To | Recommended Gap |
|------|-----|-----------------|
| HIGH → LOW | 24px | Standard |
| LOW → HIGH | 24px | Standard |
| HIGH → HIGH | Add prose or 32px gap | Prevent fatigue |
| LOW → LOW | 24px | Standard |

═══════════════════════════════════════════════════════════════════════════════
## PAGE COMPOSITION RULES
═══════════════════════════════════════════════════════════════════════════════

### Density Rhythm: LOW → HIGH → LOW

Every page should breathe:
- Start with LOW density (intro prose)
- Build to HIGH density (core content)
- Return to LOW density (breathing points)

### Component Limits Per Page

| Page Type | Recommended Limits |
|-----------|-------------------|
| Documentation | Max 3 same-type components in sequence |
| Tutorial | Mix component types, checkpoints between |
| Reference | Group by semantic category |

### Required Breathing Points

Every 3-4 dense components needs a breathing point:
- Simple prose paragraph
- LOW density component (Tip, Info)
- Visual separator

═══════════════════════════════════════════════════════════════════════════════
## ACCESSIBILITY RULES
═══════════════════════════════════════════════════════════════════════════════

### Focus States (Mandatory)

```css
.interactive:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### ARIA Labels (Required)

| Component | Required ARIA |
|-----------|---------------|
| Code Snippet | `aria-label="Code: [language]"` |
| Callouts | `role="note" aria-label="[type]"` |
| Task Checkbox | `aria-checked` |
| File Tree | `role="tree" aria-label="File structure"` |

### Color Contrast

- All text must meet WCAG AA (4.5:1 for body, 3:1 for large)
- Red accent (#E83025) on cream meets requirements
- Dark code (#F5F0EB on #1E1E1E) meets requirements

═══════════════════════════════════════════════════════════════════════════════
## VERIFICATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

### Pre-Implementation

- [ ] Reviewed SOUL-DEFINITION.md locked values
- [ ] Identified component archetype
- [ ] Confirmed no banned properties in design

### Implementation

- [ ] `border-radius: 0` on all elements
- [ ] `box-shadow: none` on all elements
- [ ] Only allowed colors used
- [ ] Typography hierarchy correct (serif/sans/mono)
- [ ] Whitespace generous (24px+ padding)
- [ ] Heavy borders when bordered (3-4px)

### Post-Implementation

- [ ] Passes Soul Test ("Could this be Bootstrap?")
- [ ] Accessibility audit passed
- [ ] Responsive behavior verified
- [ ] Coexistence tested with adjacent components

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:**
- SOUL-DEFINITION.md (root)
- All tracking sheets
- Phase 4 re-audit findings

**Purpose:** Implementation rules for production KortAI components

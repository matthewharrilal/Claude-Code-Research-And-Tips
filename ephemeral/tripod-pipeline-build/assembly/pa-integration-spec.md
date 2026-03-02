# PA Integration + Weaver Compliance Protocol

**Purpose:** Defines how the existing 5-auditor Perceptual Audit system integrates with the Tripod Pipeline's research package, and how the Weaver's new Output 4 (Package Compliance) works in practice.

**Core principle:** The PA system's fresh-eyes isolation is non-negotiable. The integration adds a compliance layer to the WEAVER only -- auditors remain completely untouched.

---

## 1. PA Auditors: Unchanged

The 5 PA auditors operate IDENTICALLY to the existing `/compose` skill. No modifications.

### What Auditors Receive

- Sanitized screenshots from `_pa/_images/` (6 files: view-a-01.png through view-c-02.png)
- A STRIPPED version of the PA skill containing ONLY:
  - The One Rule, Three Laws, Your Role as Auditor
  - Section 0: The Experiential Pass (cold look + scroll-through + anchor)
  - Their 4 assigned questions (NOT all 20)
  - Language Constraint + Metaphor Awareness sections
- Their question assignments (same as `/compose`):
  - Auditor 1: E-01, E-05, E-11, E-17
  - Auditor 2: E-02, E-08, E-14, E-18
  - Auditor 3: E-03, E-07, E-12, E-19
  - Auditor 4: E-04, E-06, E-13, E-20
  - Auditor 5: E-09, E-10, E-15, E-16

### What Auditors Do NOT Receive

- Conviction brief, metaphor name, TC output
- Research package files (`_package-pass-*.md`)
- Builder reflection, decisions files, or any pipeline context
- CSS source, tokens, grammar files
- Other auditors' reports or question assignments

### Why This Matters

Fresh-eyes auditors provide PERCEPTUAL truth -- what the page actually feels like to a first-time viewer. If auditors know the metaphor is "geological strata," they will see strata everywhere. If they know the package instructed "breathing rhythm at 48px/32px," they will look for breathing rhythm instead of reporting their genuine scroll experience. The compliance check is the WEAVER's job, not the auditors'.

---

## 2. Weaver: Enhanced with Package Compliance

The Weaver retains its existing role (Experience Portrait, Creative Direction, Verdict) and gains a new Output 4.

### What the Weaver Receives

**Same as `/compose`:**
- Sanitized screenshots from `_pa/_images/`
- All 5 auditor reports (`auditor-1.md` through `auditor-5.md`)
- The Weaver protocol from the PA skill (Section: "THE WEAVER: CREATIVE SYNTHESIS")

**NEW in Tripod Pipeline:**
- `_package-pass-1.md` (Sections 0, 1, 2, 9)
- `_package-pass-2.md` (Sections 3, 4, 5)
- `_package-pass-3.md` (Sections 6, 7, 8)

### What the Weaver Still Does NOT Receive

- The conviction brief (`_tc-brief.md`) -- the Weaver must not know the metaphor name
- The builder's reflection or decisions files
- The specialist outputs (`_specialist-*.md`)
- Vocabulary files (tokens.css, grammar.md, mechanisms.md, components.css)

### Why the Weaver Gets the Package But Not the Brief

The research package contains BUILD INSTRUCTIONS -- specific mechanisms, CSS actions, zone architecture. These are OBSERVABLE in the output. The Weaver can check: "The package said to deploy fractal density at 4 scales. I can see it at 2 scales in the HTML."

The conviction brief contains CREATIVE INTENT -- the metaphor identity, emotional arc, spatial philosophy. Knowing this would contaminate the Weaver's experiential assessment. The Weaver must perceive what the page IS, not what it was TRYING to be.

The package is operational (HOW to build). The brief is conceptual (WHAT to build). The Weaver assesses operational compliance, not conceptual fidelity.

---

## 3. The Weaver's Process (Updated)

The Weaver follows the same 3-step process from the PA skill, with an additional 4th step.

### Step 1: Experiential Anchor (unchanged)

View all screenshots before reading any auditor report. Write a 3-sentence first impression. This anchor has permanent priority.

### Step 2: Auditor Report Synthesis (unchanged)

Read all 5 auditor reports. Note convergence (3+ auditors describe the same experience) and divergence (one auditor perceives something others missed).

### Step 3: Produce Outputs 1-3 (unchanged)

- **Output 1: Experience Portrait** (~15 lines) -- what the page feels like
- **Output 2: Creative Direction** (~10 lines) -- AMPLIFY / RELEASE / DEEPEN / THE GAP
- **Output 3: Verdict** -- SHIP / REFINE / REBUILD with classification (MECHANICAL / STRUCTURAL / COMPOSITIONAL)

### Step 4: Package Compliance Assessment (NEW)

AFTER completing Outputs 1-3, the Weaver reads the 3 package files and produces Output 4.

**Process:**
1. Read `_package-pass-1.md`, `_package-pass-2.md`, `_package-pass-3.md` in order
2. For each package section (0 through 8, skipping 9):
   a. Summarize what the package instructed
   b. Examine the screenshots (and HTML source if provided) for evidence
   c. Rate compliance: FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED
   d. Describe the specific gap if any
   e. Diagnose: BUILDER DIVERGED / PACKAGE UNCLEAR / BOTH
3. Produce the summary counts and identify the highest-impact gap

**The compliance assessment examines the OUTPUT, not the process.** The Weaver cannot know whether the builder read the package carefully or skimmed it. The Weaver can only see what ended up in the HTML.

---

## 4. Output 4: Package Compliance Format

This section is appended to `_pa/synthesis.md` after Output 3.

```markdown
## Output 4: Package Compliance

### Assessment Method

[1-2 sentences describing what was compared: package files vs HTML output + screenshots]

### Section-by-Section Assessment

**Section 0: Soul Checklist**
- Instructed: [key non-negotiables from package]
- Evidence: [what the HTML shows]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [specific gap or "None"]

**Section 1: Build Context**
- Instructed: [metaphor application + content mapping]
- Evidence: [visual structure observations]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [specific gap or "None"]

**Section 2: Mechanism Selections**
- Instructed: [mechanisms with expected evidence]
- Evidence: [which mechanisms visible]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [missing/incorrect mechanisms]

**Section 3: Findings -> Actions**
- Instructed: [key findings + CSS actions]
- Evidence: [which actions applied]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [unapplied findings]

**Section 4: Zone Architecture**
- Instructed: [zone structure + density progression]
- Evidence: [actual zones in output]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [zone mismatches]

**Section 5: Case Study Processes**
- Instructed: [processes + CSS to integrate]
- Evidence: [CSS patterns found]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [missing integrations]

**Section 6: Anti-Patterns**
- Instructed: [risk-profiled anti-patterns]
- Evidence: [anti-patterns present/absent]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [unmitigated anti-patterns]

**Section 7: CSS Examples**
- Instructed: [validated CSS to integrate]
- Evidence: [CSS matches found]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [unused examples]

**Section 8: Structural Propositions**
- Instructed: [visual hypotheses]
- Evidence: [which propositions embodied]
- Compliance: [FOLLOWED / PARTIALLY FOLLOWED / NOT FOLLOWED]
- Gap: [unembodied propositions]

### Summary

- Sections fully followed: [N]/9
- Sections partially followed: [N]/9
- Sections not followed: [N]/9
- Highest-impact gap: [the single most significant gap]
- Diagnosis: [BUILDER DIVERGED / PACKAGE UNCLEAR / BOTH]
```

### Section 9 Is Skipped

Section 9 (Consumption Protocol) describes HOW the builder should read and sequence its work. This is a process instruction that leaves no trace in the output. The Weaver cannot assess it and should not attempt to.

---

## 5. Compliance Findings in Fix Cycles

When the verdict is REFINE, the compliance report directly informs which package sections the fix builder receives.

### Routing Logic

The orchestrator reads Output 4's section-by-section assessment and routes package files to the fix builder based on where gaps were found:

| Gap Location | Package File Sent to Fix Builder | Rationale |
|-------------|----------------------------------|-----------|
| Section 0 (Soul) | `_package-pass-1.md` | Soul violations are foundational |
| Section 1 (Context) or Section 2 (Mechanisms) | `_package-pass-1.md` | Mechanism/context gaps need the foundations package |
| Section 3 (Findings) or Section 4 (Zones) or Section 5 (Case Studies) | `_package-pass-2.md` | Enrichment gaps need the enrichment package |
| Section 6 (Anti-Patterns) or Section 7 (CSS) or Section 8 (Propositions) | `_package-pass-3.md` | Hardening gaps need the hardening package |

**If gaps span multiple packages:** Send all relevant packages. The fix builder receives the Weaver's creative direction (Output 2) PLUS the relevant package sections PLUS the specific gaps identified in Output 4. Maximum: all 3 package files if gaps are widespread (but at that point, the verdict should probably be REBUILD, not REFINE).

### Fix Builder Prompt Integration

The fix builder receives, in this order:
1. **Weaver's Creative Direction** (Output 2) -- AMPLIFY / RELEASE / DEEPEN / THE GAP
2. **Relevant package section(s)** -- the specific instructions that were not followed
3. **Weaver's specific gaps** -- extracted from Output 4, presented as: "The research package instructed X. The build shows Y instead. Close this gap."
4. **The current HTML** (`_build-final.html`)
5. **Standard fix builder instructions** (same as `/compose` Phase 4)

The creative direction comes FIRST because the fix builder should be creatively oriented, not compliance-driven. The gaps come second as specific targets within that creative frame.

### What the Fix Builder Does NOT Receive

- The full compliance report (Output 4 in its entirety) -- too much diagnostic detail, risks making the fix builder anxious about compliance
- Auditor reports directly -- the Weaver has already synthesized these
- The conviction brief -- the fix builder works from the Weaver's creative direction, not the original brief

---

## 6. Distinguishing "Builder Didn't Follow Package" vs "Package Instruction Was Wrong"

This is the critical diagnostic question. The Weaver uses these criteria:

### BUILDER DIVERGED

The package instruction was:
- **Specific:** Named a finding, mechanism, or CSS pattern with expected evidence
- **Actionable:** Included CSS values, zone targets, or clear deployment instructions
- **Unambiguous:** One reasonable interpretation of what to do

But the build does NOT reflect it. The builder either missed it, chose to ignore it, or ran out of context before reaching it.

**Signal in the output:** The HTML contains CSS that works differently from what the package described, or the described element is simply absent.

**Fix cycle action:** Re-provide the same package section to the fix builder, with the specific gap highlighted. The instruction was good; the execution missed it.

### PACKAGE UNCLEAR

The package instruction was:
- **Vague:** "Apply appropriate density" without values or zones
- **Contradictory:** Two sections gave conflicting guidance for the same element
- **Missing context:** Referenced a concept without defining it or providing CSS examples
- **Aspirational:** Described a desired outcome without a path to achieve it

And the builder produced something reasonable but different from what the package probably intended.

**Signal in the output:** The HTML shows creative decisions that don't obviously map to any package instruction, but are defensible within the overall design direction.

**Fix cycle action:** Do NOT re-provide the same vague instruction. Instead, the Weaver's Creative Direction (Output 2) supersedes the unclear package section. The fix builder follows the Weaver's prose direction rather than the original package instruction.

**Synthesizer feedback (for future runs):** Log "PACKAGE UNCLEAR" instances in the pipeline log. If 3+ sections are flagged PACKAGE UNCLEAR, this indicates a synthesizer quality issue that should inform future synthesizer prompt improvements.

### BOTH

The package was somewhat specific but left room for interpretation, AND the builder's interpretation moved away from the likely intent.

**Fix cycle action:** Re-provide the package section WITH the Weaver's clarifying prose. The fix builder gets both the original instruction and the Weaver's interpretation of what it should have produced.

---

## 7. Edge Cases

### Edge Case 1: Builder Followed Package but PA Finds Result Perceptually Weak

**Scenario:** Output 4 shows FOLLOWED across most sections. But Outputs 1-3 show the page is perceptually flat, monotonous, or lifeless. The auditors found the page underwhelming.

**Diagnosis:** This is the most important diagnostic outcome of the Tripod experiment. It means one of:

1. **The package was correctly followed but its instructions don't produce richness.** The research phase curated well-intentioned but perceptually ineffective material. The tripod's research leg is weak.
2. **The package was followed literally but not creatively.** The builder treated recipe steps as a checklist (ironic, given the recipe-not-checklist principle). Compliance without creative investment.
3. **The package was good, the builder was good, but THIS content + THIS metaphor doesn't support the mechanisms selected.** Content-mechanism fit failure.

**What the Weaver writes:** In the compliance summary, add a diagnostic note:

```markdown
- **Diagnostic note:** High compliance (7/9 sections FOLLOWED) with weak perceptual result.
  This suggests [one of the three diagnoses above]. The gap is not between package and build,
  but between package quality and perceptual impact.
```

**Fix cycle action:** The Weaver's Creative Direction (Output 2) takes precedence over the package. The fix builder follows the Weaver's AMPLIFY/RELEASE/DEEPEN guidance, which is grounded in perceptual reality, not the package instructions that produced a compliant but flat result.

### Edge Case 2: Weaver Can't Assess Certain Sections from Screenshots Alone

**Scenario:** The Weaver receives screenshots but some package sections require CSS-level inspection (e.g., Section 7: specific CSS property values from validated examples).

**Mitigation:** The Weaver receives the HTML source file in addition to screenshots. The orchestrator includes the path to `_build-final.html` in the Weaver's prompt so the Weaver can Read the file.

**What the Weaver checks in HTML vs Screenshots:**

| Assessment Type | Source |
|----------------|--------|
| Soul checklist (border-radius, box-shadow, gradients) | HTML source -- search for CSS properties |
| Mechanism deployment | Screenshots -- visual evidence of mechanisms |
| Zone architecture / density progression | Screenshots -- spatial observation |
| Anti-pattern presence | HTML source -- CSS pattern matching |
| CSS example integration | HTML source -- compare CSS values |
| Structural propositions | Screenshots -- visual hypothesis testing |

### Edge Case 3: Process-Oriented Sections

**Scenario:** Section 9 (Consumption Protocol) tells the builder HOW to sequence its reading. This is entirely process-oriented -- no output evidence exists.

**Resolution:** The Weaver SKIPS Section 9. The compliance report covers Sections 0-8 only. Section 9's effectiveness is indirectly observable through the quality of the other sections' compliance: if the builder followed the consumption protocol well, it would have consumed the package effectively, which would show up as higher compliance across Sections 1-8.

### Edge Case 4: Weaver's Compliance Assessment Contradicts Its Own Experiential Assessment

**Scenario:** Output 1 (Experience Portrait) says "the page feels alive and confident." Output 4 (Package Compliance) says "4 of 9 sections NOT FOLLOWED." The page is perceptually strong despite low compliance.

**Diagnosis:** The builder exercised creative judgment that diverged from the package but produced a better result. This is a VALID outcome -- the builder's 80% creative authority means divergence is allowed when it serves the composition.

**What the Weaver writes:**

```markdown
- **Diagnostic note:** Low compliance (4/9 sections NOT FOLLOWED) with strong perceptual result.
  The builder exercised creative authority to diverge from package instructions. The divergences
  appear to have served the composition. This suggests the builder's creative judgment was sound
  even where it overrode the package.
```

**Fix cycle action:** If the verdict is SHIP, no action needed -- the page works. If the verdict is REFINE for other reasons, the fix builder should NOT be directed to increase package compliance. The Weaver's Creative Direction guides the fixes, not the compliance gaps.

### Edge Case 5: Package Files Are Missing or Corrupt

**Scenario:** The orchestrator passes the package files to the Weaver but one or more are missing, empty, or unreadable.

**Resolution:** The Weaver notes the missing file(s) in the Assessment Method section and skips the affected sections. The compliance summary notes: "N sections could not be assessed due to missing package file(s)." This is a pipeline infrastructure failure, not a compliance question.

---

## 8. Integration with `_comparison-report.md`

The pipeline spec (Section 9, Layer C) mentions a standalone `_comparison-report.md` file. In this implementation, that document IS Output 4 of the Weaver's synthesis. There is no separate `_comparison-report.md` file.

**Rationale:** Having the Weaver produce the compliance report AS PART OF its synthesis keeps all PA-related analysis in one place (`_pa/synthesis.md`). The orchestrator reads one file for the verdict, creative direction, AND compliance diagnosis. Splitting into two files would create a coordination risk where the orchestrator reads the verdict from synthesis.md but forgets to read the compliance from a separate file.

The orchestrator CAN extract Output 4 into a standalone `_comparison-report.md` for archival purposes after the pipeline completes, but this is optional post-processing, not part of the live pipeline flow.

---

## 9. Summary of Information Flow

```
                    FRESH-EYES WALL
                         |
PA Auditors ────────────|──── Screenshots ONLY ──── No package, no brief, no context
                         |
                         |
Weaver ─────────────────|──── Screenshots + Auditor Reports + Package Files
                         |    (still NO conviction brief)
                         |
                         ▼
         ┌──────────────────────────────┐
         │   _pa/synthesis.md           │
         │                              │
         │   Output 1: Experience       │  ← From auditor synthesis
         │   Output 2: Creative Dir     │  ← From auditor synthesis
         │   Output 3: Verdict          │  ← Creative judgment
         │   Output 4: Compliance       │  ← From package comparison (NEW)
         └──────────────────────────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │ Verdict: SHIP       │──── Pipeline ends
              │ Verdict: REFINE     │──── Fix builder gets:
              │                     │     1. Creative Direction (Output 2)
              │                     │     2. Relevant package sections
              │                     │     3. Specific gaps (from Output 4)
              │                     │     4. Current HTML
              │ Verdict: REBUILD    │──── TC re-invocation
              └─────────────────────┘
```

The key insight: auditors produce PERCEPTUAL truth. The Weaver synthesizes perceptual truth AND adds COMPLIANCE analysis. The fix builder receives CREATIVE direction first, compliance gaps second. Perceptual reality always outranks compliance.

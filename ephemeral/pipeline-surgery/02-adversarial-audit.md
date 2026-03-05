# Adversarial Red-Team Audit: Experiential Pass & Visual Verification

Date: 2026-02-25
Auditor: Opus 4.6 (adversarial mode)
Scope: 8 files — MANIFEST.md (Appendix E), pa-deployment.md, pa-weaver.md, pa-guardrails.md, artifact-builder-recipe.md, artifact-orchestrator.md, gate-runner-core.js, EXECUTION-TRACKER-TEMPLATE.md
Method: Think like an attacker, a lazy Sonnet agent, or a distracted Opus agent. Find loopholes.

---

## FINDING 01: GR-63 Is Trivially Gameable — Regex-Only Enforcement of Experiential Check

**Severity: BLOCKING**
**Files:** `gate-runner-core.js` (lines 786-810), `artifact-builder-recipe.md` (Step 5.0)

### Attack Vector

GR-63 checks for the builder's experiential self-check using REGEX ONLY:

```javascript
const marker = html.match(/<!--\s*EXPERIENTIAL-CHECK:\s*([\s\S]*?)-->/i);
const hasLegibility = /legib|read|text|font|arm.?s?\s*length/i.test(text);
const hasMinLength = text.length >= 20;
pass: hasLegibility && hasMinLength
```

A builder agent can pass GR-63 by inserting this boilerplate without ever taking a screenshot:

```html
<!-- EXPERIENTIAL-CHECK: All text is legible and readable at arm's length. No issues found. -->
```

That string is 74 characters (passes `minLength >= 20`) and contains "legible" and "readable" (passes `hasLegibility`). A Sonnet builder agent, under time pressure or token pressure, will produce EXACTLY this kind of formulaic compliance. It already happened with the self-evaluation block in prior experiments — builders produced syntactically correct but semantically empty self-evaluations.

The `hasVisualClarity` check exists in the code but IS NOT REQUIRED FOR PASS:

```javascript
pass: hasLegibility && hasMinLength  // hasVisualClarity NOT in pass condition!
```

### Why This Matters

The entire experiential enforcement chain depends on the builder genuinely reading its own output. If the builder generates a fake experiential check comment, the orchestrator will see GR-63 PASS and proceed to the PA audit. The PA audit will then catch the issues, but the whole point of Step 5.0 is to catch BLOCKING usability defects BEFORE the expensive 9-auditor deployment.

### Recommended Fix

1. Add `hasVisualClarity` to the pass condition: `pass: hasLegibility && hasVisualClarity && hasMinLength`
2. Add a minimum FINDING count — require at least one specific location reference (e.g., regex for "Z1", "Z2", "section", "header", "footer", or similar structural references)
3. Add negative-finding detection — the experiential check should contain AT LEAST one weakness or "effortful" finding. A check that reports zero issues is suspicious. Add: `const hasNegativeFinding = /but|however|difficult|hard|squint|effort|strain|small|tight/i.test(text)`
4. Increase `minLength` to 100 — a genuine experiential check with 3 categories of findings cannot fit in 20 characters

---

## FINDING 02: Fresh-Eyes Principle Directly Contradicted by Usability Circuit Breaker

**Severity: BLOCKING**
**Files:** `artifact-orchestrator.md` (lines 464-468), `pa-deployment.md` (Section 3, Section 0), `pa-guardrails.md` (Section 11)

### Attack Vector

Three files create a direct contradiction:

**pa-guardrails.md Section 11 (sent TO auditors):**
> "The auditor receives ONLY: 1. The rendered page (saved screenshots) 2. The PA questions (pa-questions.md) 3. The PA guardrails (this file) 4. Nothing else"

**pa-deployment.md Section 3 (sent to orchestrator):**
> "PA auditors MUST be context-starved. [...] Zero context = genuine first impressions."

**artifact-orchestrator.md Phase 3A+ (sent to orchestrator):**
> "Include in the prompt for ALL PA auditors as a pre-seeded finding: 'The orchestrator observed [specific description]. Verify or contradict this finding.'"

The circuit breaker EXPLICITLY instructs the orchestrator to inject pipeline-context findings into auditor prompts. This directly violates the "ONLY screenshots + questions + guardrails" rule.

### Why This Matters

A lazy orchestrator could interpret this as license to inject arbitrary context. A careful orchestrator faces an unresolvable paradox — follow the fresh-eyes rule, or follow the circuit breaker? This is not a theoretical concern; it is a CONCRETE decision the orchestrator must make during every build where Phase 3A+ finds an issue.

Even the "narrow" version of the circuit breaker (one pre-seeded finding about a specific illegibility) contaminates the fresh-eyes principle. An auditor who reads "The orchestrator observed illegible text in the chart labels" will be PRIMED to focus on chart labels, potentially missing a different, more severe issue elsewhere. The auditor's experiential pass is no longer genuine — it has been directed.

### Recommended Fix

1. **Remove the auditor pre-seeding entirely.** The circuit breaker should instead ABORT the PA audit for BLOCKING-USABILITY findings and send the page directly to REBUILD. If the text is illegible, you do not need 9 auditors to confirm it — just rebuild.
2. **OR** formalize the pre-seeding as a separate, clearly-marked exception with an explicit override of the fresh-eyes rule, documented in BOTH pa-guardrails.md Section 11 AND pa-deployment.md Section 3. The current state, where one file says "nothing else" and another file says "also this finding," is a bug.
3. **Minimum fix:** Add a warning to pa-guardrails.md Section 11: "Exception: If the orchestrator identified a BLOCKING-USABILITY finding in Phase 3A+, that finding is pre-seeded into the auditor prompt for verification. This is the ONLY permitted context injection."

---

## FINDING 03: Experiential Pass Has No Structural Enforcement at the Auditor Level

**Severity: BLOCKING**
**Files:** `MANIFEST.md` (Appendix E, PA Auditor Prompt), `pa-guardrails.md` (Section 2), `EXECUTION-TRACKER-TEMPLATE.md` (P3B-3)

### Attack Vector

The pipeline relies on THREE mechanisms to enforce the experiential pass:

1. **Primacy position** in the prompt template (Section 0 before questions)
2. **Completion manifest** requires a "## 0. Experiential Pass" row
3. **Execution tracker** has a checkbox for "Experiential Pass Present" per auditor

None of these can detect whether the auditor ACTUALLY PERFORMED the experiential pass versus generating a fake section. A Sonnet agent under the instructions:

```
## 0. EXPERIENTIAL PASS (MANDATORY — COMPLETE BEFORE ANY QUESTIONS)
```

will dutifully produce:

```
## 0. Experiential Pass

I scrolled through the page from top to bottom. All text appears legible and readable.
Charts convey their information clearly. Navigation structure is logical.
No comprehension failures observed. No CANNOT READ findings.
```

This satisfies:
- The `## 0. Experiential Pass` section header exists (passes P3B-3 check)
- The completion manifest will show "Experiential Pass: YES"
- The execution tracker checkbox will be marked

But the agent never genuinely attempted to read from pixels. It recognized the PATTERN of what a successful experiential pass looks like and generated a plausible-sounding one. There is ZERO programmatic enforcement that the agent actually read the screenshots before writing this section.

### Evidence This Will Happen

From MEMORY.md: "Sonnet complies meticulously but stays within constraints." Sonnet will produce the structurally correct output because the instructions demand it. But Sonnet does NOT have the intrinsic motivation to genuinely fight against its own text-decoding tendencies. It will "see" text in screenshots by inferring from context, not by genuinely evaluating pixel legibility.

### Recommended Fix

1. **Contamination check enforcement:** pa-deployment.md Section 0.4 states "If the auditor mentions PA question IDs in their experiential pass, the pass was contaminated." This should be programmatically enforced — add a gate (GR-65?) that regex-scans each auditor report's Section 0 for `PA-\d+` references.
2. **Require specific screenshot references:** The experiential pass should cite specific screenshots (e.g., "In 1440/scroll-03.png, I see..."). An experiential pass without ANY screenshot path references is likely fabricated.
3. **Require at least one "I see" or "pixels show" phrase** — a genuine pixel-reading pass will describe what was seen. A fabricated pass will describe what is known.
4. **Fresh-eyes auditor golden test:** Before the pipeline goes live, run a test where an auditor receives screenshots of a page with known illegible text that looks plausible from HTML context. If the auditor reports the text as readable, the experiential pass framework has failed.

---

## FINDING 04: Analytical Mode Can Activate Before Experiential Pass Via Question Awareness

**Severity: SIGNIFICANT**
**Files:** `MANIFEST.md` (Appendix E, PA Auditor Prompt template lines 1096-1133)

### Attack Vector

The auditor prompt template in Appendix E places the experiential pass BEFORE the questions (good), but the prompt preamble says:

```
You are PA Auditor {LETTER} — {SPECIALTY}.
You are evaluating a web page design.
```

The specialty label (e.g., "Readability + Typography" for Auditor B, "Metaphor + Ideology" for Auditor G) is given BEFORE the experiential pass instruction. An LLM reading "You are PA Auditor B — Readability + Typography" is ALREADY primed into analytical mode before encountering the experiential pass directive. The specialty label frames the agent's entire orientation.

This is especially dangerous for Auditor G ("Metaphor + Ideology") — an agent primed with "metaphor" will search for metaphors during its experiential pass rather than attempting to genuinely read text from pixels.

### Recommended Fix

1. Move the specialty label AFTER the experiential pass in the prompt template. The auditor should perform the experiential pass in a role-neutral state, then receive their analytical specialty.
2. Or rename auditors with neutral labels in the prompt (e.g., "You are PA Auditor B") and provide the specialty ONLY in the question section header.

---

## FINDING 05: Orchestrator's Phase 3A+ Experiential Scan Has No Enforcement

**Severity: SIGNIFICANT**
**Files:** `artifact-orchestrator.md` (lines 442-476), `EXECUTION-TRACKER-TEMPLATE.md` (Phase 3A+, lines 308-331)

### Attack Vector

The orchestrator's experiential scan is "MANDATORY" but:

1. There is no gate for it. GR-61 checks DPR, GR-62 checks screenshots, GR-63 checks the builder. NO gate checks the orchestrator's own experiential scan.
2. The execution tracker has a checkbox `P3A+-5: Scan result recorded` but a lazy orchestrator can write `EXPERIENTIAL_SCAN: CLEAN` without actually performing the scan.
3. A distracted Opus orchestrator, eager to move to the PA audit phase, may rationalize: "The PA auditors will catch everything, so my scan is redundant." This is exactly backward — the scan exists to PREVENT deploying 9 expensive auditors on a page with fundamental usability failures.

The execution tracker checks (P3A+-1a through P3A+-1d) are all self-reported text fields:

```
| P3A+-1a | Any text illegible at arm's length? | ___ (NONE / description) |
| P3A+-1d | Visual verification: reported what PIXELS show, not what HTML says? | [ ] |
```

Checking your own box for "did I do the visual verification correctly" is the equivalent of a student grading their own exam.

### Recommended Fix

1. Add a gate (GR-65 or similar) that verifies the orchestrator WROTE experiential scan results with sufficient specificity (similar to GR-63's approach but for the orchestrator's scan report).
2. Alternatively, require the orchestrator to produce a SEPARATE markdown file (e.g., `p3a-experiential-scan.md`) with at least 3 findings categories (legibility, extraction, navigation) before proceeding. The existence and non-emptiness of this file can be checked.
3. Make the scan a BLOCKING prerequisite for PA deployment — if `EXPERIENTIAL_SCAN` field is empty, PA auditor spawn is blocked.

---

## FINDING 06: Visual Verification Evasion — LLMs Cannot Truly "Read Pixels" as Instructed

**Severity: SIGNIFICANT**
**Files:** `pa-guardrails.md` (Section 3.1), `pa-deployment.md` (Section 0.1), `pa-weaver.md` (Section 0.1), `artifact-builder-recipe.md` (Step 5.0)

### Attack Vector

The entire experiential pass framework rests on an assumption that may be architecturally unsound: that an LLM processing a screenshot can distinguish between "reading from pixels" and "decoding from context."

When an LLM receives a screenshot of a web page, it processes the image using vision capabilities. But an LLM's vision system does not work like a human eye. When the LLM "reads" text in an image, it is performing OCR-like pattern recognition. When the page contains text that is low-contrast but structurally recognizable (e.g., a chart label in a predictable position), the LLM may:

1. Recognize the STRUCTURAL PATTERN (this is a bar chart label)
2. Apply CONTEXTUAL INFERENCE (bar charts have labels, this label is probably describing the bar)
3. Use SURROUNDING TEXT (the heading says "Complexity Levels" so this label probably says "Level 3")
4. Report it as "readable" because it reached a confident interpretation

The instructions say "report what you SEE, not what you KNOW." But the LLM's seeing IS knowing — its vision model processes structure, context, and content simultaneously. It cannot selectively disable its contextual inference.

This is not a hypothetical — it is the fundamental architecture of multimodal LLMs. The instructions are fighting against the model's inference mechanism.

### Why This Matters

Every experiential pass across ALL agents (builder, orchestrator, 9 auditors, integrative auditor, weaver = 12 agents) depends on this capability. If the capability is fundamentally limited, the entire experiential enforcement chain is weaker than it appears on paper.

### Recommended Fix

This is an inherent limitation, not a bug. The mitigation is:

1. **Redundancy over accuracy.** 9 auditors + 1 integrative + 1 weaver = 11 independent attempts to read from pixels. Even if each agent is only 50% reliable at genuine pixel-reading, the convergence of 3+ agents flagging the same element is strong signal.
2. **Adversarial test screenshots.** Before production deployment, run a calibration test with screenshots containing known illegible text (e.g., 8px cream text on off-white background). Verify that at least 5/9 auditors flag it. If fewer than 3 flag it, the experiential pass framework needs fundamental redesign.
3. **Do not overweight single-agent experiential findings.** The pipeline already has the 3+ auditor convergence threshold (good). Consider raising it to 4+ for BLOCKING classification.
4. **Consider Playwright-based legibility verification** — compute contrast ratios and font sizes programmatically for ALL text elements and add a gate (partially covered by GR-60 WCAG but that checks contrast ratio, not rendered pixel size at viewport).

---

## FINDING 07: GR-63 Is RECOMMENDED, Not REQUIRED

**Severity: SIGNIFICANT**
**Files:** `gate-runner-core.js` (line 20, line 1368)

### Attack Vector

In the gate tier classification at the top of gate-runner-core.js:

```javascript
//   RECOMMENDED (11): GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-63, GR-64
```

GR-63 (Builder Experiential Marker) is classified as RECOMMENDED, not REQUIRED. This means:

1. A GR-63 FAIL does not trigger REBUILD or REFINE in the verdict logic
2. The orchestrator can observe GR-63 FAIL and proceed to PA audit anyway
3. The execution tracker records it but nothing blocks on it

This completely undermines the experiential enforcement chain at the builder level. The builder can skip Step 5.0 entirely, produce no `<!-- EXPERIENTIAL-CHECK: -->` comment, GR-63 FAILs, and the pipeline continues unimpeded.

### Recommended Fix

1. **Promote GR-63 to REQUIRED tier.** A builder that did not perform its experiential self-check should not proceed to the expensive PA audit. The whole point of Step 5.0 is early detection.
2. At minimum, add GR-63 to the `REQUIRED_GATES` array in `runGateCoverage()`.
3. Add GR-63 to the verdict logic in `runGateRunner()` — if GR-63 FAIL, verdict should be REFINE (send back to builder with instruction to actually read its output).

---

## FINDING 08: GR-64 Is RECOMMENDED and Runs Post-Weaver — Too Late to Matter

**Severity: SIGNIFICANT**
**Files:** `gate-runner-core.js` (lines 1542-1593, line 1368, line 1624)

### Attack Vector

GR-64 (Usability Priority Verification) runs AFTER the weaver has already produced its verdict:

```javascript
// 15. Usability priority:    const upResult = checkUsabilityPriority(auditorReports, weaverReport);
//                            (AFTER Weaver — verifies Fix #1 addresses usability if 3+ auditors flagged)
```

If the weaver produces a SHIP verdict but 3+ auditors flagged usability issues, GR-64 will FAIL. But:

1. GR-64 is RECOMMENDED, not REQUIRED — so the FAIL is informational
2. By the time GR-64 runs, the weaver has already issued its verdict
3. The orchestrator must now manually decide what to do with a SHIP verdict + GR-64 FAIL combination

There is no documented override protocol. If the weaver says SHIP but GR-64 says FAIL, does the pipeline ship? The execution tracker records it, but there is no decision rule that says "GR-64 FAIL overrides SHIP to SHIP WITH FIXES."

### Recommended Fix

1. **Promote GR-64 to REQUIRED.**
2. Add a decision rule to the orchestrator: "If GR-64 FAIL and weaver verdict is SHIP or SHIP WITH FIXES, downgrade to REFINE."
3. Or move GR-64 logic BEFORE the weaver — run the usability scan on auditor reports before passing to weaver, and inject "Fix #1 must address usability" into the weaver prompt when triggered.

---

## FINDING 09: Completion Manifest Checks Existence, Not Quality

**Severity: SIGNIFICANT**
**Files:** `pa-guardrails.md` (Section 2), `EXECUTION-TRACKER-TEMPLATE.md` (P3B-3)

### Attack Vector

The completion manifest requires each auditor to produce:

```markdown
## Completion Manifest — Auditor [LETTER]
| Question ID | Answered | Evidence Screenshot(s) |
|-------------|----------|----------------------|
| PA-XX       | YES      | 1440/scroll-02.png   |
```

The execution tracker then checks:
- `## 0. Experiential Pass section present?` (yes/no checkbox)
- But the check is about PRESENCE, not CONTENT

A Sonnet agent will produce a perfectly-formatted manifest showing YES for every question with valid-looking screenshot paths. But:

1. The screenshot paths are NOT validated — the agent could cite `1440/scroll-99.png` (nonexistent)
2. The "Answered: YES" is self-reported — an agent that gave a 2-word answer would still mark YES
3. The Experiential Pass presence check looks for `## 0. Experiential Pass` header — any section with that header passes

### Recommended Fix

1. **Add a manifest verification gate (GR-66?)** that:
   - Parses each auditor report for `## 0. Experiential Pass`
   - Checks that the section has >= 50 words (prevents empty/trivial sections)
   - Checks that it contains at least one screenshot reference
   - Cross-references cited screenshot paths against actually-existing files
2. The Integrative Auditor already receives all 9 reports — add explicit instruction to FLAG any auditor whose experiential pass looks templatic or whose findings are suspiciously positive.

---

## FINDING 10: Weaver Receives Gate Results, Breaking Experiential-First Sequencing

**Severity: SIGNIFICANT**
**Files:** `MANIFEST.md` (Appendix E, Weaver Prompt, line 1180), `pa-weaver.md` (Section 0.4)

### Attack Vector

The Weaver prompt in Appendix E says:

```
You are the Weaver. Read the Integrative Auditor report + Gate Runner results.
```

This is the FIRST line of the Weaver prompt. Gate results are mentioned BEFORE the experiential anchor directive in Section 0. Even though Section 0 says "Before reading any reports or gate results, view the screenshots yourself," the prompt STRUCTURE positions gate results as a primary input in the role description.

An LLM processes its prompt holistically, not linearly. Knowing that gate results exist in its context window contaminates the experiential anchor, because the model may (subconsciously, through attention mechanisms) weight its experiential impressions toward confirming or contradicting gate results it has already encoded.

The pa-weaver.md Section 0.4 sequence says:

```
AFTER completing Sections 0.1-0.3, proceed to the existing workflow below:
1. Manifest Verification (the current "FIRST ACTION" — now SECOND)
```

But in practice, the Weaver receives ALL inputs at spawn time. The gate results JSON is in the context window from the moment the Weaver starts processing. "Before reading" is an instruction to an LLM about processing order, but LLMs do not process inputs linearly — they attend to all context simultaneously.

### Recommended Fix

1. **Two-phase Weaver deployment.** Spawn the Weaver FIRST with only screenshots and auditor reports (no gate results). Collect the experiential anchor and PA-05 score. THEN provide gate results for verdict synthesis. This is more expensive (two calls) but genuinely isolates the experiential anchor.
2. **OR** accept the contamination as inherent and document it honestly — do not claim the experiential anchor is "uncontaminated" when gate results are in the same context window.

---

## FINDING 11: `pa-guardrails.md` Sections 5-9 Leak Pipeline Vocabulary to Fresh-Eyes Auditors

**Severity: SIGNIFICANT**
**Files:** `pa-guardrails.md` (Sections 5-9)

### Attack Vector

pa-guardrails.md is sent to ALL auditors per the information routing table. It contains:

- **Section 5:** "PA-17 (visual rhythm) and PA-41 (pattern repetition without variation) are TIER 1 EQUIVALENT." — This tells auditors about the TIER system and implies some questions matter more than others.
- **Section 6:** "Tier 5 scoring thresholds (8-9 = COMPOSED, 6-7 = APPROACHING)" — This exposes the entire tier classification system and specific score targets.
- **Section 7:** Anti-pattern names like "CHANNEL ISOLATION," "METAPHOR BLEED," "COMPONENT ORPHAN" — These are COMPOSITIONAL INTELLIGENCE VOCABULARY that a fresh-eyes auditor should not know. An auditor who reads "AP-06: 6 channels shift not at same boundaries" now knows the pipeline expects 6 channels and boundary-aligned shifts. This is pipeline context, not fresh-eyes.
- **Section 8:** Revision degradation warnings — These tell auditors about multi-channel encoding, density arcs, and bookending symmetry. A fresh-eyes auditor should not know these concepts exist.
- **Section 9:** S-09 STACKING CHECK with specific thresholds (120px, 200px) — This gives auditors numeric thresholds. A fresh-eyes auditor who knows "120px = PASS" will measure against 120px instead of reporting their genuine perception of whitespace.

### Why This Matters

The fresh-eyes principle says "Zero context = genuine first impressions." But pa-guardrails.md provides SUBSTANTIAL context about the design system's internal concepts (channels, mechanisms, tiers, anti-patterns, thresholds). An auditor who reads Section 7 and learns about "6 channels shifting at boundaries" is no longer fresh-eyes — they are primed to evaluate the page through the pipeline's conceptual framework.

### Recommended Fix

1. **Split pa-guardrails.md** into two files:
   - `pa-guardrails-auditor.md` (Sections 1-4 + Section 10-11 + visual verification) — safe for auditors
   - `pa-guardrails-weaver.md` (Sections 5-9 + anti-pattern vocabulary) — weaver/orchestrator only
2. At minimum, redact Section 7's anti-pattern names from the auditor-facing version. Replace "6 channels shift not at same boundaries" with "do different visual properties change at the same or different points?"

---

## FINDING 12: Execution Tracker Self-Reporting Has No External Verification

**Severity: MINOR**
**Files:** `EXECUTION-TRACKER-TEMPLATE.md` (all sections)

### Attack Vector

The execution tracker is filled in BY the orchestrator ABOUT the orchestrator's own execution. Every checkbox, every field, every "Complete" marker is self-reported. There is no external verification step.

The "Post-Run Verification" section includes "Cross-Phase Consistency" checks, but these are ALSO self-performed. The orchestrator checks "Does my verdict match my PA-05 score?" — yes, because the orchestrator wrote both.

### Recommended Fix

1. Add a final "Tracker Verification Agent" — a fresh Opus agent that receives the completed execution tracker + all output files and verifies that claimed outputs exist, claimed scores match file contents, and claimed experiential passes are present in reports. This adds ~5 minutes but catches systematic self-reporting failures.
2. Alternatively, make the Post-Run Verification section a SEPARATE prompt to the orchestrator with explicit adversarial framing: "You are now auditing your own execution. Find any discrepancy."

---

## FINDING 13: Builder Step 5.0 References Playwright, Creating Self-Verification Incentive

**Severity: MINOR**
**Files:** `artifact-builder-recipe.md` (Step 5.0, line 626-627), Builder Prompt (Appendix E, line 1070)

### Attack Vector

Step 5.0 says:

> "When you take a screenshot to assess your page, read the text FROM THE RENDERED PIXELS"

And the builder prompt says:

> "OUTPUT: Single HTML file, all CSS in <style> tag, Google Fonts imports. Target 800-1200 CSS lines."

The builder has Playwright access (ITEM 102: "Builder HAS Playwright"). This means the builder can take its own screenshots and assess them. But the builder WROTE the HTML — it knows exactly what every element says. The instruction to "read from pixels, not from knowledge" is fighting against the strongest possible confirmation bias: the builder reading its OWN output that it JUST generated.

The builder's experiential check will ALWAYS report the page as mostly legible because the builder has PERFECT knowledge of every text string. The builder cannot unknow what it wrote 30 seconds ago.

### Recommended Fix

1. Accept that the builder's self-check is a WEAK signal, not a strong one. Document this honestly.
2. The builder's check is valuable for LAYOUT issues (text obscured by overlapping elements, elements pushed off-screen) but not for LEGIBILITY issues (too-small text, low-contrast text). Re-scope Step 5.0 to focus on layout verification rather than pretending the builder can objectively assess its own text legibility.
3. Consider having the builder take its screenshots at a REDUCED zoom level (e.g., 75%) to simulate arm's-length reading distance. This is not documented anywhere.

---

## FINDING 14: DPR Correction Logic May Invalidate Viewport

**Severity: MINOR**
**Files:** `gate-runner-core.js` (GR-61, lines 1457-1484)

### Attack Vector

GR-61's DPR correction divides viewport dimensions by DPR:

```javascript
await page.setViewportSize({
  width: Math.round(viewport.width / dpr),
  height: Math.round(viewport.height / dpr)
});
```

On a Retina Mac (DPR = 2), if the viewport is set to 1440x900, the "correction" sets it to 720x450. This is WRONG — the correction should keep the viewport at 1440 CSS pixels, not halve it. The DPR affects device pixels, not CSS pixels. Playwright's viewport size is already in CSS pixels, so dividing by DPR shrinks the viewport to half the intended size.

All subsequent screenshots and gate checks would run at 720px wide instead of 1440px, which would cause GR-03 (container width) to behave differently and would invalidate all spatial measurements.

### Recommended Fix

1. The DPR check should NOT modify the viewport size. DPR > 1 means the screenshots will be at higher physical resolution (which is fine for visual inspection). The correct fix is to set `deviceScaleFactor: 1` in the browser launch options, not to halve the viewport.
2. Or simply document that DPR > 1 is expected on Retina displays and the viewport size in CSS pixels is what matters.

---

## FINDING 15: No Enforcement That Auditors Actually Read Screenshots (Not Just Process Text Context)

**Severity: MINOR**
**Files:** `MANIFEST.md` (Appendix E), `pa-deployment.md` (Section 2.4)

### Attack Vector

Auditors receive screenshot file paths and instructions to use the Read tool. But there is no verification that the Read tool was actually called. An LLM that receives file paths in its prompt could, in theory, generate plausible-sounding observations about a page based solely on:

1. The PA questions themselves (which describe what to look for)
2. The question themes (which imply what the page contains)
3. General knowledge of web page design patterns

This is an edge case — most agents WILL call the Read tool because it is in their instructions. But under token pressure or if the Read tool fails silently, an agent might generate a "reasonable" audit report without actually viewing any screenshots.

### Recommended Fix

1. Require each auditor report to contain at least one SPECIFIC detail that could only be known from viewing the screenshot — a specific hex color visible in the screenshot, a specific word count in a heading, or a specific element position. The Integrative Auditor or Weaver can spot-check these.
2. This is partially covered by the evidence format requirement (screenshot references in answers), but citing `1440/scroll-02.png` does not prove the agent read that file.

---

## SUMMARY TABLE

| # | Finding | Severity | Exploitable By | Fix Complexity |
|---|---------|----------|----------------|----------------|
| 01 | GR-63 regex trivially gameable | BLOCKING | Sonnet builder (formulaic compliance) | LOW — tighten regex |
| 02 | Fresh-eyes contradicted by circuit breaker | BLOCKING | Orchestrator confusion | MEDIUM — architectural decision |
| 03 | No structural enforcement of experiential pass | BLOCKING | Any agent (fake section) | HIGH — needs new gate |
| 04 | Specialty label primes analytical mode | SIGNIFICANT | All auditors (implicit) | LOW — reorder prompt |
| 05 | Orchestrator scan has no enforcement | SIGNIFICANT | Lazy orchestrator | MEDIUM — new gate |
| 06 | LLMs can't truly read pixels as instructed | SIGNIFICANT | All agents (inherent) | ACCEPT — mitigate with redundancy |
| 07 | GR-63 is RECOMMENDED not REQUIRED | SIGNIFICANT | Pipeline continues on FAIL | LOW — promote tier |
| 08 | GR-64 runs post-weaver, too late | SIGNIFICANT | Weaver already decided | MEDIUM — rearchitect timing |
| 09 | Completion manifest checks existence not quality | SIGNIFICANT | Sonnet auditor (formulaic) | MEDIUM — new gate |
| 10 | Weaver receives gate results, breaking sequence | SIGNIFICANT | Inherent to single-context | HIGH — two-phase weaver |
| 11 | pa-guardrails.md leaks pipeline vocabulary | SIGNIFICANT | All auditors (priming) | MEDIUM — split file |
| 12 | Execution tracker is self-reported | MINOR | Lazy orchestrator | LOW — verification agent |
| 13 | Builder assessing own output has confirmation bias | MINOR | Builder (inherent) | ACCEPT — re-scope expectations |
| 14 | DPR correction divides CSS viewport incorrectly | MINOR | Retina displays | LOW — fix math |
| 15 | No proof auditors read screenshots | MINOR | Edge case | LOW — spot-check details |

### Critical Path

The three BLOCKING findings form a failure chain: if the builder fakes the experiential check (Finding 01), GR-63 passes because the regex is too loose (Finding 07), the orchestrator skips its own scan because there is no gate (Finding 05), and the PA auditors receive contaminated prompts (Finding 02) with pipeline vocabulary (Finding 11), producing experiential passes that look correct but were generated from context rather than pixels (Finding 03, Finding 06).

The entire experiential enforcement chain is PROMPTED but not ENFORCED. Every layer relies on the agent's good faith, and no layer has structural verification that good faith was exercised.

### Highest-Leverage Single Fix

**Promote GR-63 and GR-64 to REQUIRED, tighten GR-63's regex, and resolve the fresh-eyes/circuit-breaker contradiction.** These three changes address Findings 01, 02, 07, and 08 with minimal architectural change.

# Definitive Team Structure for Perceptual Audits

**Version:** 1.0
**Date:** 2026-02-11
**Source Data:** 6 prior agent teams (100+ agents total), 7 human interventions analyzed, OD benchmark comparison, 12 skill files, 1,314-line execution plan post-mortem
**Purpose:** Blueprint for any future perceptual audit team. Self-contained -- another Claude instance follows this without additional context.

---

## A. TEAM TOPOLOGY

### A.1 Total Agent Count

**For a 6-page batch audit (e.g., all AD pages):**

| Wave | Agents | Roles |
|------|--------|-------|
| Wave 0 | 1 | Preflight Validator |
| Wave 1 | 6 (sequential) | Visual Auditors (1 per page) |
| Wave 2 | 1 | Systemic Synthesizer |
| Wave 3 | up to 6 (parallel) | Fixers (1 per file) |
| Wave 4 | 1 | Verification Agent |
| **TOTAL** | **up to 15** | |

**For a single-page audit:** Waves 0, 1 (1 auditor), skip Wave 2, Wave 3 (1 fixer), Wave 4 (1 verifier) = 4 agents.

### A.2 Why This Structure (Evidence)

| Design Decision | Evidence Source |
|-----------------|---------------|
| Sequential auditors, not parallel | AD-004 contention: 2 agents got zero Playwright access. OD benchmark: sequential waves = zero contention. |
| 1 auditor per page, not 2-4 | AD-005 Auditor B failed completely (20% failure rate). Single deep auditor > multiple shallow ones. |
| No captain-worker hierarchy | Fourth Team: "Workers spawned by captains via Task tool frequently complete without writing files -- THE critical failure mode." |
| Direct agents, not hierarchies | Fourth Team: "Single recovery agents (doing work directly, not spawning workers) are MORE reliable." |
| Lead stays THIN | Validated across 6 teams: "zero building, zero Playwright, orchestrate only." Zero Lead compactions. |
| Per-file fixer ownership | Third Team: "4 fixers, zero file conflicts." |
| Sequential verification after fixes | Third Team: "Sequential verification (programmatic then visual) eliminates Playwright contention." |

### A.3 Role Definitions

```
LEAD (you -- the orchestrating instance)
  RULES:
  - NEVER use Playwright
  - NEVER read/write HTML/CSS source files
  - NEVER do audit work yourself
  - Orchestrate, validate gates, spawn agents, commit
  - Stay under 7 direct reports at any time

  YOUR CHECKLIST PER WAVE:
  Wave 0: Verify preflight PASS. If FAIL, fix and re-run.
  Wave 1: After each auditor completes, run Gate 1 (screenshot check).
           After auditor 3, run systemic pre-scan.
           After all 6, run Gate 2 (full validation).
  Wave 2: After synthesizer, run Gate 3 (synthesis quality).
           Present systemic findings + fix proposal to user.
  Wave 3: After all fixers, run Gate 4 (fix report existence).
  Wave 4: After verifier, run Gate 5 (verification PASS/FAIL).
           If PASS: commit. If FAIL: respawn targeted fixers.
```

---

## B. WAVE STRUCTURE

### WAVE 0: PREFLIGHT (1 agent, ~5 minutes)

**Purpose:** Verify all infrastructure before spending agent budget on auditors.

**Agent:** Preflight Validator (via Task tool, not TeamCreate)

**What it checks (ALL BINARY):**

```
PREFLIGHT CHECKLIST -- ALL MUST PASS

1. HTTP SERVER: curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/
   PASS: 200
   FAIL: Start server: cd docs-spa/app/showcase && python3 -m http.server 8080 &

2. PLAYWRIGHT ACCESS: Navigate to a test URL, take screenshot
   PASS: Screenshot file exists and is >0 bytes
   FAIL: STOP. Report to Lead. Do NOT proceed.

3. FILE EXISTENCE: All target HTML files exist on disk
   PASS: All N files found
   FAIL: List missing files. STOP.

4. OUTPUT DIRECTORIES: Create if missing
   mkdir -p {output-root}/{page-id}/screenshots for each page

5. LOCK SHEET: Does {output-root}/lock-sheet.md exist?
   If YES and pages are same stage: PASS (reuse cached)
   If NO: Generate (Lead spawns Research Contextualizer)

6. FONT LOADING TEST: Navigate to any page, run:
   await page.evaluate(() => document.fonts.ready.then(() => 'READY'))
   PASS: Returns 'READY'
   FAIL: WARNING (proceed but note font-loading risk)

7. ANIMATION DISABLE TEST: Inject CSS and verify computed style
   PASS: animation-duration computes to 0s
   FAIL: WARNING (proceed but note animation interference)
```

**Output:** `{output-root}/preflight-report.md`
- PASS: All 7 checks pass
- FAIL: List failing checks with error details

**Gate 0:** Preflight report shows PASS on checks 1-5. Checks 6-7 may WARN.
- If FAIL on 1-3: Lead fixes infrastructure, re-runs preflight.
- If FAIL on 4-5: Lead creates directories / spawns lock sheet agent, re-runs.

**Preflight Validator Prompt:**
```
You are the Preflight Validator for a Perceptual Audit.

YOUR JOB: Verify all infrastructure is ready before auditors are spawned.
Run every check below. Report PASS or FAIL for each.

CHECKS:
1. HTTP server at http://localhost:8080/ returns 200
2. Playwright can navigate and screenshot (navigate to {test-url}, take screenshot)
3. All target HTML files exist: {file-list}
4. Output directories exist (create if missing): {dir-list}
5. Lock sheet exists at {lock-sheet-path}
6. Font loading: navigate to {test-url}, await document.fonts.ready
7. Animation disable: inject "*, *::before, *::after { animation: none !important;
   transition: none !important; opacity: 1 !important; transform: none !important; }"
   then verify computed animation-duration is 0s on body

OUTPUT: Write {output-root}/preflight-report.md

FORMAT:
## Preflight Report
| Check | Result | Details |
|-------|--------|---------|
| 1. HTTP Server | PASS/FAIL | ... |
| 2. Playwright | PASS/FAIL | ... |
...
## Overall: PASS / FAIL

CRITICAL:
1. You MUST write the report file using the Write tool
2. If Playwright check fails, report the error message exactly
3. Do NOT proceed to auditing -- you only validate infrastructure
```

---

### WAVE 1: VISUAL AUDIT (sequential auditors, ~45 min for 6 pages)

**Architecture:** ONE auditor per page. Auditors run SEQUENTIALLY -- each one finishes before the next starts. This eliminates all Playwright contention.

**Why sequential, not parallel:** The AD pipeline ran 2-4 parallel auditors per page and suffered:
- AD-004: Both auditors fell back to source-code analysis (Interventions 1-2)
- AD-001: Contention artifact misidentified as scroll hijack (WNS-01)
- AD-005: Auditor B failed completely after 2 attempts
- OD benchmark: sequential waves = zero contention, zero failures

**Time cost of sequential:** ~7-8 minutes per page x 6 pages = ~45 minutes.
**Time saved by avoiding rework:** ~60-90 minutes (Interventions 1, 2 prevented).
**Net:** Sequential is FASTER than parallel with rework.

**Auditor Assignment:**

| Order | Page | Est. Time | Priority |
|-------|------|-----------|----------|
| 1 | {highest-complexity page} | ~8 min | Tests protocol at max difficulty |
| 2 | {second-highest} | ~8 min | |
| 3 | {third page} | ~7 min | After this, Lead runs systemic pre-scan |
| 4 | {fourth page} | ~7 min | |
| 5 | {fifth page} | ~7 min | |
| 6 | {sixth page} | ~7 min | |

**Between auditors, Lead runs Gate 1 (see Section D).**

**After auditor 3 completes:** Lead reads all 3 completed AUDIT-REPORT.md files and checks for systemic patterns (findings appearing in 2+ reports). If systemic patterns found, note them for Wave 2. This prevents Intervention 4 (user had to point out systemic width issue).

#### AUDITOR PROMPT TEMPLATE

This is the COMPLETE prompt for each auditor. Replace `{variables}` with actual values.

```
You are the Perceptual Auditor for {page-id}.

██████████████████████████████████████████████████████████████████████████████
YOU MUST USE PLAYWRIGHT TO LOOK AT THE RENDERED PAGE.
SOURCE CODE ANALYSIS IS NOT AN AUDIT. FILE READING IS NOT AN AUDIT.
IF YOU CANNOT ACCESS PLAYWRIGHT AFTER 3 RETRIES, REPORT FAILURE.
DO NOT FALL BACK TO READING HTML/CSS FILES. EVER.
██████████████████████████████████████████████████████████████████████████████

YOUR JOB: Navigate to the rendered page, LOOK at it, and describe what you
SEE. You are a designer evaluating visual quality, not a rule-checker.

THE ONE RULE: React to what you see before you check what you know.

═══════════════════════════════════════════════════════════════════════════════
EXACT PROCEDURE (follow in this order, do NOT skip steps):
═══════════════════════════════════════════════════════════════════════════════

STEP 1 — NAVIGATE AND PREPARE:
  a) Navigate to: {page-url}
  b) Wait for fonts: evaluate(() => document.fonts.ready)
  c) Disable animations: inject CSS on page:
     *, *::before, *::after {
       animation: none !important;
       transition: none !important;
       opacity: 1 !important;
       transform: none !important;
     }
  d) Wait 500ms for layout stability

STEP 2 — COLD LOOK AT 1440px:
  a) Resize viewport to 1440x900
  b) Take viewport-only screenshot (NOT full page)
     Save to: {output-path}/screenshots/1440-viewport.png
  c) LOOK at the screenshot for 5 seconds. Do NOT read any files.

  d) IMMEDIATELY write your LOCKED reactions:

     COLD LOOK (1440px):
     Gut reaction: [what did you FEEL? One sentence.]
     Worst thing: [point to a PLACE on the page, not a rule]
     Best thing: [what should be protected during any fixes?]
     Ship verdict: YES / YES WITH RESERVATIONS / NO

  e) Write Cold Look to: {output-path}/cold-look.md (checkpoint)

  ████████████████████████████████████████████████████████████████████████
  HARD BLOCK: Your NEXT action after the screenshot MUST be writing the
  Cold Look reaction. If your next action is Read, Grep, or any file
  operation, you have VIOLATED the protocol. The audit is INVALID.
  ████████████████████████████████████████████████████████████████████████

STEP 3 — SCROLL-THROUGH AT 1440px:
  a) Scroll the entire page in ~80% viewport height steps
  b) Take a viewport-sized screenshot at EACH scroll position
     Save to: {output-path}/screenshots/1440-scroll-{N}.png
  c) After ALL scroll screenshots, make 5 DIMENSION PASSES:

     PASS 1 — READABILITY:
     Scan every screenshot. Is any text uncomfortable to read?
     Words stacking one-per-line? Lines too wide? Squinting needed?
     CATCHING: PA-02, PA-06, PA-07, PA-08

     PASS 2 — SPATIAL BALANCE (Squint Test):
     Squint/blur. Only shapes and weight. Dead space? Lopsided?
     Margins generous (confident) or anxious (clutching)?
     CATCHING: PA-09, PA-10, PA-11

     PASS 3 — HIERARCHY & FLOW:
     Where does your eye go first? Is that correct?
     Flow smooth section-to-section, or stuck anywhere?
     Clear visual ending, or page just stops?
     CATCHING: PA-04, PA-12, PA-13

     PASS 4 — CONSISTENCY:
     Pick two identical elements (e.g., two callout boxes). Same?
     Visual rhythm (like a beat) or random?
     All grays from same family? Any element from different website?
     CATCHING: PA-16, PA-17, PA-18, PA-19

     PASS 5 — SHIP TEST:
     One designer or three? Would you put your name on this?
     Next to Stripe, proud or embarrassed?
     Page personality in three words -- does it match?
     CATCHING: PA-01, PA-03, PA-05, PA-20

STEP 4 — REPEAT AT 768px:
  a) Resize viewport to 768x1024
  b) New Cold Look (append to cold-look.md)
  c) Full scroll-through with screenshots ({output-path}/screenshots/768-scroll-{N}.png)
  d) 5 dimension passes at this viewport
  e) Additional responsive questions:
     - Does everything look designed for this width, or squeezed? (PA-21)
     - Would a user with only this screen feel served or punished? (PA-22)
     - What breaks 200px narrower? (PA-23)

STEP 5 — WRITE FINDINGS:
  For each finding, classify severity:
  - WOULD-NOT-SHIP: Designer would refuse to release
  - LOOKS-WRONG: Something visually off, needs attention
  - COULD-BE-BETTER: Polish opportunity

  For each finding, classify sovereignty:
  - SOVEREIGN: This page only
  - POTENTIALLY SYSTEMIC: May affect other pages
  - SYSTEMIC: Confirmed across pages

  NUCLEAR QUESTION (answer at the end):
  "If this were the ONLY page from this design system a user ever saw --
   would they understand the identity?"
  Answer: YES / CONCERN / NO with evidence.

  OUTPUT: Write to {output-path}/AUDIT-REPORT.md

═══════════════════════════════════════════════════════════════════════════════
ANTI-PATTERN WARNINGS — These are how audits FAIL:
═══════════════════════════════════════════════════════════════════════════════

AP-01 ANALYTICAL ESCAPE:
  If your first action after a screenshot is opening a source file,
  you have failed. LOOK first, analyze never.

AP-04 PROPERTY-NAME ANSWERS:
  If your finding contains ANY CSS property name, rewrite it.
  BAD: "the grid-template-columns creates narrow cells"
  GOOD: "the right column is so narrow words stack vertically"

AP-16 FINDING-WITHOUT-LOOKING:
  If your findings could describe ANY page without seeing it,
  you are fabricating, not perceiving. Every finding must reference
  a specific screenshot and scroll position.

AP-23 THUMBNAIL-SCALE BLINDNESS:
  NEVER use fullPage: true for analysis. NEVER evaluate from a
  compressed full-page image. Use viewport-sized scroll screenshots.
  A 130px crushed column looks "fine" at thumbnail scale.

═══════════════════════════════════════════════════════════════════════════════
LANGUAGE RESTRICTIONS (HARD BLOCK):
═══════════════════════════════════════════════════════════════════════════════

Your findings may NOT contain:
  px, rem, em, %, hex codes (#), rgb, rgba, hsl, border-radius,
  box-shadow, padding, margin, font-size, font-family, line-height,
  max-width, min-width, flex, grid, gap, opacity, z-index, overflow,
  display, position, or ANY CSS property name.

USE INSTEAD:
  heavy, light, cramped, spacious, jarring, smooth, floating,
  grounded, anxious, confident, broken, polished, warm, cold,
  sharp, soft, crushed, drowning, breathing, stacking, squeezed.

SELF-CHECK: Before writing your findings file, search your own text
for: px, rem, %, #[0-9a-f], rgb, rgba, border-radius, padding, margin.
If ANY match: rewrite the offending sentence in perceptual language.

═══════════════════════════════════════════════════════════════════════════════
SOUL COMPLIANCE SPOT-CHECK (binary, takes 30 seconds):
═══════════════════════════════════════════════════════════════════════════════

While you have the page open, run these binary checks via browser_evaluate:

  await page.evaluate(() => {
    const els = document.querySelectorAll('*');
    const sample = Array.from(els).filter((_, i) => i % 20 === 0);
    const violations = [];
    for (const el of sample) {
      const s = getComputedStyle(el);
      if (s.borderRadius !== '0px' && s.borderRadius !== '')
        violations.push({ el: el.tagName, issue: 'border-radius', val: s.borderRadius });
      if (s.boxShadow !== 'none' && s.boxShadow !== '')
        violations.push({ el: el.tagName, issue: 'box-shadow', val: s.boxShadow });
    }
    return { checked: sample.length, violations };
  });

Include result in your report under "## Soul Compliance Spot-Check".
This is the ONLY programmatic check you run. Everything else is VISUAL.

═══════════════════════════════════════════════════════════════════════════════
MANDATORY OUTPUT REQUIREMENTS:
═══════════════════════════════════════════════════════════════════════════════

1. You MUST write {output-path}/AUDIT-REPORT.md using the Write tool
2. You MUST write {output-path}/cold-look.md using the Write tool
3. You MUST save screenshots to {output-path}/screenshots/
4. AUDIT-REPORT.md MUST contain:
   - Cold Look reactions (1440px + 768px)
   - Findings with severity classification
   - Soul compliance spot-check result
   - Nuclear question answer
   - Sovereignty classification for each finding
   - Multi-viewport comparison table
5. Minimum screenshot count: 6 at 1440px + 6 at 768px = 12 total
6. If Playwright is unavailable after 3 retries (30s each):
   STOP. Write a FAILURE report. DO NOT fall back to source reading.

██████████████████████████████████████████████████████████████████████████████
YOUR WORK IS NOT DONE UNTIL AUDIT-REPORT.md IS WRITTEN.
IF YOU DO NOT CALL THE Write TOOL, YOUR WORK DOES NOT EXIST.
██████████████████████████████████████████████████████████████████████████████
```

#### GATE 1: POST-AUDITOR VALIDATION (Lead runs after EACH auditor)

```
GATE 1 CHECKLIST — Run after each auditor completes

1. SCREENSHOT COUNT:
   ls {output-path}/screenshots/*.png | wc -l
   PASS: >= 12 files (6 at 1440px + 6 at 768px)
   FAIL: Auditor did not use Playwright. REJECT. Respawn.

2. COLD LOOK EXISTS:
   {output-path}/cold-look.md exists and contains "Ship verdict:"
   PASS: File exists with verdict
   FAIL: Protocol violation. REJECT. Respawn.

3. AUDIT REPORT EXISTS:
   {output-path}/AUDIT-REPORT.md exists and is > 50 lines
   PASS: Report written
   FAIL: Agent failed to write output. REJECT. Respawn.

4. CONTAMINATION SPOT-CHECK:
   Grep AUDIT-REPORT.md for: px, rem, border-radius, padding, margin,
   font-size, max-width, grid-template, flex, opacity, #[0-9a-f]{3,6}
   PASS: 0 matches (or matches only in Soul Compliance section)
   WARN: 1-3 matches (note but proceed)
   FAIL: >3 matches (contaminated audit, consider respawn)

5. NUCLEAR QUESTION PRESENT:
   Grep AUDIT-REPORT.md for "identity" or "Nuclear"
   PASS: Nuclear question answered
   FAIL: Incomplete audit. Note for synthesis.

ALL 5 PASS → proceed to next auditor
ANY REJECT → respawn auditor with this prefixed to prompt:

   ██████████████████████████████████████████████████████████████████
   YOUR PREDECESSOR FAILED. They did not use Playwright / did not
   write their report / used CSS language instead of perceptual
   language. You MUST take screenshots. You MUST write your report.
   SOURCE CODE ANALYSIS IS NOT AN AUDIT.
   ██████████████████████████████████████████████████████████████████
```

#### SYSTEMIC PRE-SCAN (Lead runs after auditor 3)

```
SYSTEMIC PRE-SCAN — After 3 audits complete

1. Read all completed AUDIT-REPORT.md files
2. For each finding in each report:
   - Does an identical or similar finding appear in another report?
   - If YES: mark as SYSTEMIC CANDIDATE
3. List systemic candidates:
   | Finding | Pages Affected | Description |
4. If any systemic candidate has >= 2 pages:
   FLAG for Wave 2 Synthesizer with high priority
5. If any systemic candidate is WOULD-NOT-SHIP on 2+ pages:
   ALERT user immediately — do not wait for Wave 2

PURPOSE: Prevents Intervention 4 (user had to point out width issue
that appeared in all 6 reports but nobody synthesized).
```

---

### WAVE 2: SYSTEMIC SYNTHESIS (1 agent, ~15 min)

**Purpose:** Cross-page pattern detection. Identifies systemic vs sovereign issues. Produces prioritized fix list.

**Why this wave exists:** The AD pipeline had NO equivalent. Each page was audited independently. When AD-003 found "responsive non-implementation" and flagged it as "POTENTIALLY SYSTEMIC," nobody ever checked. The user had to intervene (Intervention 4). The OD benchmark had a dedicated cross-OD-consistency agent that identified 3 quality dialects and 17 fix recommendations.

**Agent:** Systemic Synthesizer (via Task tool)

```
SYSTEMIC SYNTHESIZER PROMPT:

You are the Systemic Synthesizer for a Perceptual Audit of {N} pages.

YOUR JOB: Read ALL {N} audit reports. Identify patterns across pages.
Classify findings as SYSTEMIC (affects multiple pages) vs SOVEREIGN
(affects one page only). Produce a prioritized fix recommendation list.

YOU MUST READ:
{list of all AUDIT-REPORT.md paths}

YOU MUST NOT: Use Playwright, read source files.

═══════════════════════════════════════════════════════════════════════════════
YOUR TASKS:
═══════════════════════════════════════════════════════════════════════════════

1. SYSTEMIC PATTERN DETECTION:
   For each finding in each report, check if identical/similar finding
   exists in any other report. A finding appearing in 2+ reports is
   SYSTEMIC.

   Output a SYSTEMIC FINDINGS TABLE:
   | Finding | Pages Affected | Severity | Description |

   Known systemic candidates from prior teams:
   - Width too narrow (860px container on 1440px viewport)
   - No visual ending (pages just stop)
   - Dead space between sections
   - Responsive collapse failures at 768px
   - Dark code block contrast with warm palette

2. SOVEREIGN FINDINGS SUMMARY:
   Findings unique to one page. Group by page.

3. FIX PRIORITY LIST (4 tiers):
   CRITICAL: Must fix before any use
   HIGH: Should fix to meet quality bar
   MEDIUM: Should fix for consistency
   LOW: Polish items

   For SYSTEMIC findings: one fix entry applies to ALL affected pages.
   For SOVEREIGN findings: one fix entry per page.

4. QUALITY DIALECT ASSESSMENT:
   Do pages fall into quality tiers? (e.g., OD had Polished/Functional/Editorial)
   Are some pages significantly better/worse than others?

5. CROSS-PAGE CONSISTENCY:
   Do pages feel like siblings from the same family?
   Do they share visual DNA (color, spacing, typography rhythm)?
   Any page that feels like it's from a different system?

6. FIX-OR-CONTINUE RECOMMENDATION:
   Based on severity distribution:
   - All SHIP: "Proceed to enrichment, no fixes needed"
   - Mixed: "Fix CRITICAL/HIGH systemic, proceed with sovereign LOOKS-WRONG"
   - Severe: "STOP. Fix all WOULD-NOT-SHIP before proceeding"

OUTPUT: Write {output-root}/SYSTEMIC-SYNTHESIS.md

██████████████████████████████████████████████████████████████████████████████
CRITICAL:
1. You MUST write the file using the Write tool
2. The fix priority list is THE deliverable -- it drives Wave 3
3. Systemic fixes are HIGHER priority than sovereign fixes
4. Do NOT add your own perceptual opinions -- you SYNTHESIZE, not perceive
██████████████████████████████████████████████████████████████████████████████
```

#### GATE 2: POST-SYNTHESIS VALIDATION (Lead runs)

```
GATE 2 CHECKLIST

1. SYSTEMIC-SYNTHESIS.md exists and is > 100 lines
   FAIL: Respawn synthesizer

2. Fix priority list contains at least 1 entry
   FAIL: Respawn with "Your predecessor found no fixes. Read the
         audit reports again. If audits found WOULD-NOT-SHIP or
         LOOKS-WRONG findings, those NEED fixes."

3. Present to user:
   a) Summary: "X systemic findings, Y sovereign findings"
   b) Top 5 fixes by priority
   c) "Proceed with fixes? [Yes / Yes with modifications / No]"

   ████████████████████████████████████████████████████████████████
   DO NOT WAIT FOR USER TO ASK FOR FIXES.
   If ANY finding is WOULD-NOT-SHIP or DO-NOT-SHIP: propose fixes
   PROACTIVELY. This prevents Intervention 5.
   ████████████████████████████████████████████████████████████████
```

---

### WAVE 3: FIXES (parallel fixers, ~15-20 min)

**Architecture:** One fixer per HTML file. Fixers work in PARALLEL -- they do NOT use Playwright. Fixes are code-only (CSS/HTML edits). Visual verification comes in Wave 4.

**Why fixers don't use Playwright:** Fixers read the audit report, apply the recommended changes to source code, and write a fix report. They do not need to render the page. This eliminates all contention and makes Wave 3 the fastest wave.

**Fixer Assignment (per-file ownership -- CRITICAL):**

```
FIXER ASSIGNMENT RULES:
1. Each fixer owns EXACTLY one HTML file
2. No two fixers touch the same file
3. Fixers read their page's AUDIT-REPORT.md + SYSTEMIC-SYNTHESIS.md
4. Systemic fixes are applied by EVERY affected fixer independently
   (each fixer applies the same systemic fix to their own file)
5. Maximum 6 fixers running in parallel
```

#### FIXER PROMPT TEMPLATE

```
You are the Fixer for {page-id}.

YOUR JOB: Apply the fixes listed in the audit report and systemic
synthesis to {page-file}. You own this file exclusively.

██████████████████████████████████████████████████████████████████████████████
YOU MUST NOT USE PLAYWRIGHT. You are a code-only agent.
Read the audit findings, edit the HTML/CSS, write a fix report.
Visual verification is done by a SEPARATE agent in Wave 4.
██████████████████████████████████████████████████████████████████████████████

YOU MUST READ:
1. {output-path}/AUDIT-REPORT.md — your page's audit findings
2. {output-root}/SYSTEMIC-SYNTHESIS.md — systemic fixes to apply

FIX PRIORITY (follow this order):
1. SYSTEMIC CRITICAL fixes (apply to your file)
2. SYSTEMIC HIGH fixes (apply to your file)
3. SOVEREIGN WOULD-NOT-SHIP findings
4. SOVEREIGN LOOKS-WRONG findings
5. SYSTEMIC MEDIUM fixes
6. Skip LOW / COULD-BE-BETTER unless trivial

SOUL COMPLIANCE — ABSOLUTE CONSTRAINTS:
  You may NOT introduce:
  - border-radius > 0 on ANY element
  - box-shadow on ANY element
  - filter: drop-shadow() on ANY element
  - Any font outside the trio (Instrument Serif, Inter, JetBrains Mono)
  - rgba() with alpha < 1.0 on backgrounds
  - CSS animations implying object movement

  If a fix would require violating soul rules: SKIP the fix.
  Document: "Fix X skipped — would require soul violation."

FIX REPORT FORMAT:
  For each fix applied:
  | Fix | Finding | What Changed | Soul Compliance |

  For each fix skipped:
  | Fix | Finding | Why Skipped |

OUTPUT: Write {output-path}/fix-report.md

═══════════════════════════════════════════════════════════════════════════════
MANDATORY: VISUAL JUDGMENT — AFTER APPLYING FIXES
═══════════════════════════════════════════════════════════════════════════════

After finishing fixes, you CANNOT visually verify (no Playwright).
Instead, for each fix, answer:

  Q-FIXER: "If I were looking at this page after my change, would the
            audit finding be resolved, or would I still see the problem?"

If the answer is "still see the problem" for any fix: reconsider your
approach before writing the fix report.

═══════════════════════════════════════════════════════════════════════════════

CRITICAL:
1. You MUST write fix-report.md using the Write tool
2. You own {page-file} EXCLUSIVELY -- no other agent touches it
3. Do NOT modify any file other than {page-file}
4. Zero soul violations introduced — verify before writing report

██████████████████████████████████████████████████████████████████████████████
YOUR WORK IS NOT DONE UNTIL fix-report.md IS WRITTEN.
██████████████████████████████████████████████████████████████████████████████
```

#### GATE 3: POST-FIX VALIDATION (Lead runs)

```
GATE 3 CHECKLIST

For each fixer:
1. fix-report.md exists
   FAIL: Agent didn't write output. Check if fixes were applied
         to HTML file (git diff). If yes, write report manually.
         If no, respawn fixer.

2. fix-report.md lists fixes applied with soul compliance notes
   FAIL: Report is stub/empty. Respawn.

3. Soul compliance: fix report says "0 soul violations introduced"
   FAIL: Review the specific violation. If real, revert the fix.

ALL fixers pass → proceed to Wave 4
```

---

### WAVE 4: VERIFICATION (1 agent, ~15-20 min)

**Architecture:** ONE verification agent. Runs AFTER all fixers complete. Has exclusive Playwright access (no contention). Runs both programmatic DOM tests AND visual spot-checks.

**Why one agent, not two:** The OD pipeline used 2 verifiers (programmatic then visual) sequentially. For perceptual audits, a single agent running both is simpler and avoids the coordination overhead. The key is that verification is INDEPENDENT from fixing -- a different agent than the fixer.

#### VERIFICATION AGENT PROMPT

```
You are the Verification Agent for a Perceptual Audit of {N} pages.

YOUR JOB: Independently verify that fixes were applied correctly.
You were NOT involved in auditing or fixing. You are fresh eyes.

██████████████████████████████████████████████████████████████████████████████
YOU MUST USE PLAYWRIGHT. YOU MUST TAKE SCREENSHOTS.
YOUR VERIFICATION IS MEANINGLESS WITHOUT VISUAL CONFIRMATION.
██████████████████████████████████████████████████████████████████████████████

YOU MUST READ:
1. All fix-report.md files (to know what was changed)
2. {output-root}/SYSTEMIC-SYNTHESIS.md (to know priority of fixes)

VERIFICATION PROTOCOL:

FOR EACH PAGE:

  A. PROGRAMMATIC CHECKS (browser_evaluate):

     1. Soul compliance spot-check (sample every 20th element):
        border-radius, box-shadow, filter: drop-shadow
        PASS: 0 violations
        FAIL: List violations

     2. Font loading guard:
        await document.fonts.ready
        Check computed font-family on h1, body, code elements
        PASS: Correct trio fonts
        FAIL: List mismatches

     3. Fix-specific DOM checks:
        For each fix in fix-report.md, write ONE test:
        "If this fix were absent, would this test detect it?"
        (This is the INVERSION TEST from OD benchmark)
        PASS: Fix is detectable
        FAIL: Fix may not have been applied or is ineffective

  B. VISUAL CHECKS (Playwright screenshots):

     1. Navigate to page at 1440px. Wait for fonts. Disable animations.
     2. Take viewport screenshot.
     3. Answer Q1: "What's the first thing that bothers me?"
        If answer references a finding that was supposed to be fixed:
        → FAIL that fix
     4. Scroll through at 1440px, screenshot each position.
     5. Repeat at 768px.
     6. Compare: do fixed areas look better than pre-fix audit described?

  C. RESULTS TABLE:

     | Page | Fix | Programmatic | Visual | Verdict |
     |------|-----|-------------|--------|---------|
     | AD-001 | Width expansion | PASS | PASS | VERIFIED |
     | AD-001 | Dead space removal | PASS | FAIL (still visible) | REWORK |

OUTPUT: Write {output-root}/VERIFICATION-REPORT.md

FORMAT:
## Verification Report
### Summary
  - Total fixes checked: N
  - VERIFIED: X
  - REWORK NEEDED: Y
  - Pages PASS: [list]
  - Pages NEED REWORK: [list]

### Per-Page Results
[detailed table per page]

### Soul Compliance
  - Elements sampled: N
  - Violations found: N
  - Details: [if any]

### Overall Verdict: ALL PASS / PARTIAL PASS / FAIL

CRITICAL:
1. You MUST write VERIFICATION-REPORT.md using the Write tool
2. You MUST take screenshots -- visual verification without
   screenshots is NOT verification
3. You were NOT involved in auditing or fixing -- you are
   INDEPENDENT. Your job is to CONFIRM, not to agree.
4. If a fix looks wrong, say so. Fixers self-certifying is
   why the AD pipeline had problems. You are the check.

██████████████████████████████████████████████████████████████████████████████
YOUR WORK IS NOT DONE UNTIL VERIFICATION-REPORT.md IS WRITTEN.
██████████████████████████████████████████████████████████████████████████████
```

#### GATE 4: POST-VERIFICATION (Lead runs)

```
GATE 4 CHECKLIST

1. VERIFICATION-REPORT.md exists
   FAIL: Respawn verifier

2. Overall verdict is ALL PASS or PARTIAL PASS
   ALL PASS → commit changes, proceed to enrichment
   PARTIAL PASS → for each REWORK item:
     a) Respawn targeted fixer for that page only
     b) After re-fix, re-run verifier on that page only
     c) Maximum 2 rework cycles. After 2, escalate to user.
   FAIL → escalate to user with full report

3. Soul compliance: 0 violations
   FAIL → revert all fixes on violating pages. Re-fix without violations.
```

---

## C. PLAYWRIGHT MANAGEMENT (The Definitive Solution)

### C.1 The Rule: ONE Agent Has Playwright At A Time

```
PLAYWRIGHT ACCESS SCHEDULE:

Wave 0: Preflight Validator — EXCLUSIVE
         (1 agent, ~5 min)

Wave 1: Auditor 1 — EXCLUSIVE → Gate 1
        Auditor 2 — EXCLUSIVE → Gate 1
        Auditor 3 — EXCLUSIVE → Gate 1
        ...
        Auditor N — EXCLUSIVE → Gate 1
        (sequential, ~7-8 min each)

Wave 2: Synthesizer — NO PLAYWRIGHT (file-only)

Wave 3: All Fixers — NO PLAYWRIGHT (code-only, parallel)

Wave 4: Verifier — EXCLUSIVE
         (1 agent, ~15-20 min)
```

**Zero contention. Zero sharing. Zero fighting.**

### C.2 Browser State Reset Between Agents

```
BETWEEN EVERY PLAYWRIGHT AGENT:

The Lead (or the agent itself at the start) MUST:

1. Navigate to about:blank (clear previous page state)
2. Clear cookies/storage if available
3. Set viewport to default (1440x900)
4. Verify fonts load on test navigation

This prevents:
- State leakage between auditors
- Cookie/storage interference
- Stale cached renders
```

### C.3 Font-Loading Guard (MANDATORY)

```
BEFORE ANY FONT-DEPENDENT OBSERVATION:

await page.evaluate(() => document.fonts.ready);

WHY: The OD audit caught a false positive because agents measured
fonts BEFORE they loaded. Fallback fonts reported incorrectly.
Fix #1 (Essence font) was declared as a finding but was actually
correct -- the font just hadn't loaded yet.

This single line prevents ALL font-loading false positives.
Include in every auditor and verifier prompt.
```

### C.4 Animation Disabling

```
INJECT THIS CSS ON EVERY PAGE, IMMEDIATELY AFTER NAVIGATION:

await page.addStyleTag({ content: `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
`});

WHY: Scroll-driven animations hide content (AD-006 had 40-60%
invisible when animations failed). The !important overrides ensure
all content is visible and static for auditing.

Wait 500ms after injection for layout to stabilize.
```

### C.5 Viewport Management

```
THREE REQUIRED VIEWPORTS (in this order):

1. 1440x900  — Desktop (primary audit viewport)
2. 768x1024  — Tablet (responsive collapse check)
3. 1024x768  — Laptop (the squeeze zone -- optional but valuable)

RESIZE METHOD:
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(300); // layout reflow

NEVER use fullPage: true for analysis screenshots.
Always use viewport-sized screenshots for scroll-through.
Full-page screenshots compress 15,000px pages to thumbnails
where 130px crushed columns look "fine" (AP-23).
```

---

## D. LEAD PROTOCOL (Exact Checklist)

### D.1 Before Spawning ANY Agent

```
PRE-SPAWN CHECKLIST:

[ ] Wave 0 preflight passed (Gate 0)
[ ] Lock sheet exists (cached or generated)
[ ] Output directories exist for all pages
[ ] Previous wave's gate passed
[ ] HTTP server verified running (curl check)
[ ] No stale agents from previous waves
    (if using TeamCreate: check team exists, members are alive)
```

### D.2 Between Each Auditor (Wave 1)

```
INTER-AUDITOR CHECKLIST:

[ ] Previous auditor completed (TaskUpdate shows completed,
    or file existence verified)
[ ] Gate 1 passed for previous auditor:
    [ ] Screenshots >= 12
    [ ] Cold Look file exists with verdict
    [ ] AUDIT-REPORT.md exists and > 50 lines
    [ ] Contamination spot-check < 3 CSS terms
    [ ] Nuclear question present
[ ] If Gate 1 FAILED: respawn with failure prefix
[ ] If this is auditor #3: run systemic pre-scan
    [ ] Read all 3 completed reports
    [ ] Check for findings in 2+ reports
    [ ] Note systemic candidates for Wave 2
[ ] Spawn next auditor
```

### D.3 After All Auditors Complete (Wave 1 → Wave 2)

```
WAVE 1 → WAVE 2 TRANSITION:

[ ] All N auditors passed Gate 1
[ ] Total AUDIT-REPORT.md count = N (one per page)
[ ] Systemic pre-scan completed (after auditor 3)
[ ] Spawn Systemic Synthesizer
[ ] Wait for completion
[ ] Run Gate 2
[ ] Present fix proposal to user
[ ] Get user approval before proceeding to Wave 3
```

### D.4 After Synthesis (Wave 2 → Wave 3)

```
WAVE 2 → WAVE 3 TRANSITION:

[ ] SYSTEMIC-SYNTHESIS.md exists and passes Gate 2
[ ] User has approved fix list (or modified it)
[ ] Spawn fixers (1 per file, parallel)
[ ] Per-file ownership verified (no two fixers on same file)
[ ] Wait for all fixers to complete
[ ] Run Gate 3 for each fixer
```

### D.5 After Fixes (Wave 3 → Wave 4)

```
WAVE 3 → WAVE 4 TRANSITION:

[ ] All fixers passed Gate 3
[ ] All fix-report.md files exist
[ ] Zero soul violations in any fix report
[ ] Spawn Verification Agent (exclusive Playwright)
[ ] Wait for completion
[ ] Run Gate 4
[ ] If ALL PASS: commit, present summary to user
[ ] If PARTIAL PASS: targeted rework cycle (max 2)
[ ] If FAIL: escalate to user with full report
```

### D.6 Handling Agent Failures

```
AGENT FAILURE PROTOCOL:

IF agent does not complete within expected time:
  1. Check if output files exist (Write tool may have succeeded
     even if agent didn't call TaskUpdate)
  2. If output exists and passes gate: proceed (agent forgot TaskUpdate)
  3. If output doesn't exist: respawn with failure prefix
  4. Maximum 2 respawns per agent
  5. After 2 failures: do the work yourself as Lead
     (exception to "Lead never does work" rule — recovery only)

IF agent produces contaminated output (CSS language):
  1. Check if findings are still valid (perceptual meaning preserved?)
  2. If yes: proceed with warning noted
  3. If no: respawn with stronger language restriction emphasis

IF agent falls back to source-code analysis:
  1. Gate 1 screenshot check WILL catch this
  2. REJECT immediately, do not proceed
  3. Respawn with failure prefix:
     "YOUR PREDECESSOR READ SOURCE CODE INSTEAD OF USING PLAYWRIGHT.
      THIS IS THE FUNDAMENTAL FAILURE MODE. YOU MUST TAKE SCREENSHOTS."
```

### D.7 When to Fix vs When to Continue

```
DECISION MATRIX:

| Situation | Action |
|-----------|--------|
| All SHIP verdicts, no WOULD-NOT-SHIP | Continue to enrichment, no fixes |
| Mixed verdicts, some LOOKS-WRONG | Fix CRITICAL+HIGH, defer MEDIUM+LOW |
| Any WOULD-NOT-SHIP | MUST fix before continuing |
| Any DO-NOT-SHIP | STOP. Present to user. Get direction. |
| Systemic finding on 3+ pages | Fix SYSTEMICALLY (one solution, all pages) |
| Sovereign finding on 1 page | Fix per-page |
| Soul violation found | EMERGENCY: fix immediately, reverify |
```

---

## E. LOCK SHEET MANAGEMENT

### E.1 When to Cache

Lock Sheets classify DECISIONS, which are stage-level (not page-level). One Lock Sheet covers all pages within the same stage.

```
LOCK SHEET CACHING RULES:

Same stage (e.g., all 6 AD pages): Generate ONCE, reuse for all 6
Different stages (e.g., AD + OD + DD): Generate 1 per stage
Already exists from prior session: Reuse if stage hasn't changed
```

### E.2 Lock Sheet Agent Prompt

```
You are the Research Contextualizer for a Perceptual Audit of the
{stage-name} stage.

YOUR JOB: Read design conventions, identity, and research. Produce
a Lock Sheet classifying every decision as LOCKED vs CHALLENGEABLE.

YOU MUST READ: {list of research files for this stage}

CLASSIFICATION DECISION TREE:
- Traces to formal finding (XX-F-NNN) with research citation? → LOCKED
- Convention cites research? → LOCKED
- Convention value without research citation? → CHALLENGEABLE
- Inherited without re-validation? → CHALLENGEABLE
- Builder choice within convention bounds? → CHALLENGEABLE
- Unknown provenance? → CHALLENGEABLE

ALWAYS-LOCKED (hardcoded, never question):
- border-radius: 0 on ALL elements
- box-shadow: none on ALL elements
- filter: drop-shadow() prohibited
- No 2px structural borders
- opacity === 1.0 on backgrounds (no rgba < 1.0)
- Font trio: Instrument Serif / Inter / JetBrains Mono ONLY
- --color-primary: #E83025 (Sanrok red)
- --color-background: #FEF9F5 (warm cream)
- --color-text: #1A1A1A (near-black)
- No CSS animations implying object movement
- No hover transforms
- DD-F-006 fractal at exactly 5 scales

OUTPUT: Write {lock-sheet-path}
Keep under 200 lines.

FORMAT:
## ALWAYS-LOCKED (Do Not Question)
| Rule | Lock Source |

## LOCKED (Research-Backed)
| Decision | Lock Source | Auditable Execution Aspects |

## CHALLENGEABLE (Question If Visually Problematic)
| Convention | Current Value | Can Be Questioned If... |

## PREVIOUS FINDINGS
| Finding ID | Description | Status |

CRITICAL:
1. You MUST write the file using the Write tool
2. You may NOT use Playwright or read HTML/CSS source files
3. You are a FILE-READING agent only
```

---

## F. TIMING ESTIMATES

### F.1 Per-Batch (6 pages)

| Wave | Duration | Agents | Parallel? |
|------|----------|--------|-----------|
| Wave 0: Preflight | ~5 min | 1 | N/A |
| Lock Sheet (if needed) | ~10 min | 1 | N/A |
| Wave 1: 6 Auditors | ~45 min | 6 sequential | NO |
| Wave 2: Synthesis | ~15 min | 1 | N/A |
| User review | ~5-10 min | 0 | N/A |
| Wave 3: 6 Fixers | ~15 min | 6 parallel | YES |
| Wave 4: Verification | ~15-20 min | 1 | N/A |
| **TOTAL** | **~110-120 min** | **15 agents** | |

### F.2 Comparison to AD Pipeline

| Metric | AD Pipeline (actual) | This Structure (projected) |
|--------|---------------------|--------------------------|
| Wall time | ~8.5-10 hours | ~2 hours |
| Human interventions | 7 | 0-1 (fix approval only) |
| Rework time | ~2.5-3 hours | ~0 (gates catch before synthesis) |
| Agent failures | ~13% | ~0% (sequential = no contention) |
| Total agents | ~30+ | 15 |

### F.3 Single-Page Audit

| Wave | Duration | Agents |
|------|----------|--------|
| Wave 0: Preflight | ~3 min | 1 |
| Wave 1: 1 Auditor | ~8 min | 1 |
| Wave 3: 1 Fixer | ~5 min | 1 |
| Wave 4: 1 Verifier | ~10 min | 1 |
| **TOTAL** | **~26 min** | **4 agents** |

---

## G. OUTPUT FILE STRUCTURE

```
{output-root}/
  preflight-report.md              ← Wave 0
  lock-sheet.md                    ← Cached (1 per stage)
  SYSTEMIC-SYNTHESIS.md            ← Wave 2
  VERIFICATION-REPORT.md           ← Wave 4

  {page-id}/
    screenshots/
      1440-viewport.png            ← Cold Look screenshot
      1440-scroll-01.png           ← Scroll-through
      1440-scroll-02.png
      ...
      768-viewport.png             ← Cold Look at 768px
      768-scroll-01.png
      ...
    cold-look.md                   ← Locked reactions
    AUDIT-REPORT.md                ← Wave 1 output
    fix-report.md                  ← Wave 3 output
```

---

## H. COMPLETE EXECUTION SCRIPT (Lead follows this verbatim)

```
STEP 1: PREFLIGHT
  → Spawn Preflight Validator (Task tool)
  → Wait for completion
  → Check Gate 0
  → If FAIL: fix and re-run
  → If PASS: continue

STEP 2: LOCK SHEET
  → Check if lock-sheet.md exists for this stage
  → If YES: skip (use cached)
  → If NO: spawn Research Contextualizer, wait, verify

STEP 3: AUDITORS (sequential)
  FOR page IN {pages sorted by complexity descending}:
    → Spawn Auditor for page (Task tool)
    → Wait for completion
    → Run Gate 1
    → If FAIL: respawn with failure prefix (max 2 retries)
    → If PASS: continue
    → If this is page #3: run Systemic Pre-Scan
  END FOR

STEP 4: SYNTHESIS
  → Spawn Systemic Synthesizer (Task tool)
  → Wait for completion
  → Run Gate 2
  → Present fix proposal to user
  → Wait for user approval

STEP 5: FIXES (parallel)
  → Spawn N fixers (one per file, Task tool, all parallel)
  → Wait for ALL to complete
  → Run Gate 3 for each
  → If any FAIL: respawn targeted fixer

STEP 6: VERIFICATION
  → Spawn Verification Agent (Task tool)
  → Wait for completion
  → Run Gate 4
  → If ALL PASS: commit
  → If PARTIAL PASS: targeted rework (max 2 cycles)
  → If FAIL: escalate to user

STEP 7: COMMIT AND REPORT
  → git add all output files
  → Commit with descriptive message
  → Present final summary to user:
    - Pages audited: N
    - Findings total: X (Y systemic, Z sovereign)
    - Fixes applied: A
    - Fixes verified: B
    - Soul violations: 0
    - Rework cycles: R
```

---

## I. KNOWN FAILURE MODES AND MITIGATIONS

| Failure Mode | How Detected | Mitigation |
|-------------|-------------|-----------|
| Agent falls back to source-code analysis | Gate 1: screenshot count = 0 | REJECT + respawn with failure prefix |
| Agent doesn't write output file | Gate 1/3: file doesn't exist | Respawn with "MUST use Write tool" emphasis |
| Contaminated language (CSS terms in findings) | Gate 1: grep for property names | WARN if <3 matches, REJECT if >3 |
| Playwright contention | Sequential architecture prevents this | N/A (eliminated by design) |
| Font-loading false positive | Font guard in every auditor prompt | `document.fonts.ready` before any font observation |
| Animation hiding content | Animation disable in every auditor prompt | CSS injection with !important |
| Lead fails to synthesize systemic patterns | Systemic Pre-Scan after auditor 3 | Automated check for 2+ report overlap |
| Lead follows plan literally when judgment needed | Gate 2 fix-proposal trigger | "If WOULD-NOT-SHIP: MUST propose fixes" |
| Stale agents lingering | Lead shutdown protocol | Shutdown after each wave completion |
| Post-fix visual issues not caught | Independent Verification Agent | Wave 4 verifier is NOT the fixer |

---

## J. CHECKLIST SUMMARY (Quick Reference for Lead)

```
□ Wave 0: Preflight PASS
□ Lock Sheet exists
□ Wave 1: All N auditors complete
  □ Each passed Gate 1 (screenshots >= 12, cold-look exists, report > 50 lines)
  □ Systemic pre-scan after auditor 3
□ Wave 2: Synthesis complete, Gate 2 passed
  □ Fix proposal presented to user
  □ User approved
□ Wave 3: All fixers complete
  □ Each passed Gate 3 (fix-report exists, 0 soul violations)
□ Wave 4: Verification complete, Gate 4 passed
  □ ALL PASS or targeted rework complete
□ Commit and report
```

---

*Team structure designed from evidence across 6 prior agent teams (100+ agents), 7 documented human interventions, OD benchmark analysis, and lessons from 12 skill files. Every design decision traces to a specific failure mode observed in production.*

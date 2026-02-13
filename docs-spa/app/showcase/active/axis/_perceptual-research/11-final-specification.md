# Perceptual Auditing Skill: Final Specification

**Synthesized by:** final-synthesizer
**Date:** 2026-02-10
**Sources:** 06-skill-synthesis.md (712 lines), 07-team-architecture.md (936 lines), 08-visual-protocol.md (1,049 lines), 09-research-sovereignty.md (767 lines), 10-team-integration.md (1,000 lines)
**Total Input:** ~4,464 lines across 5 design documents

---

## HOW TO USE THIS DOCUMENT

This is the SINGLE DEFINITIVE SPECIFICATION for the Perceptual Auditing skill. It supersedes all five source design documents (06 through 10). Any conflict between this document and its sources is resolved here.

An implementer should be able to build the complete skill -- all files, all prompts, all team configurations -- from this document alone.

**Structure:**
1. The One Rule + Sovereignty Principle (foundational laws)
2. 28 Core Questions (the skill's assessment instrument)
3. 4 Modes with Team Configurations (scaling from 0 to 7 agents)
4. Team Roles and Responsibilities (who does what, CAN/CANNOT)
5. Visual Auditing Protocol (exact Playwright steps, Cold Look, zone sweep)
6. Research Sovereignty Layer (Lock Sheet, classification, escalation)
7. TeamCreate Integration (wave structure, prompt templates, lifecycle)
8. Anti-Patterns (22 failure modes across 6 categories)
9. Dual Severity Track (Rule Track + Perception Track)
10. Exact Prompt Templates for Each Agent Role
11. File Structure (skill files + runtime output)
12. Validation Criteria (litmus tests, metrics, red flags)

---

## 1. THE ONE RULE + SOVEREIGNTY PRINCIPLE

### The One Rule

> **"React to what you see before you check what you know."**

Every decision in this skill traces back to this sentence. "React" demands an emotional/perceptual response. "Before" creates temporal ordering -- perception MUST precede analysis. "Check" acknowledges that rule-verification has a place, but never first. "Know" captures the accumulated rules, specs, and conventions that agents default to.

If an agent's first action after taking a screenshot is to open a CSS file, the skill has failed. If an agent's first action is to describe what they SEE and FEEL, the skill is working.

### The Sovereignty Principle

> **"Perceptual Auditing evaluates the EXECUTION of research-backed decisions, never the decisions themselves. Research defines WHAT. Perception judges HOW."**

This is the second law. It operates AFTER the perceptual reaction -- it governs what happens when a perceptual finding collides with a research-backed decision.

Without this principle, two failure modes occur:
1. **Perceptual overreach:** An auditor recommends removing a research-backed F-pattern. The auditor is attacking the WHAT, not the HOW.
2. **Research suppression:** An auditor's valid perception ("code blocks create jarring contrast holes") is dismissed because "the convention allows dark code blocks." The convention becomes a shield against legitimate perceptual feedback.

The sovereignty principle prevents both: research decisions are locked (you cannot remove the F-pattern), but execution quality is always auditable (you CAN say the F-pattern's column widths make text uncomfortable to read).

Three categories of sovereignty:
1. **ALWAYS-LOCKED:** Soul rules (border-radius: 0, box-shadow: none). Never challengeable. Baked into the skill.
2. **LOCKED:** Research-backed decisions (axis choice, density pairing, organization pattern). Decision is protected; execution is auditable.
3. **CHALLENGEABLE:** Convention values, inherited defaults, builder choices without specific research backing. Open to perceptual challenge.

When perception and research conflict:
- If the finding attacks a LOCKED decision: INVALID (redirect to execution)
- If the finding attacks EXECUTION of a locked decision: VALID (fix within constraints)
- If the finding attacks a CHALLENGEABLE value: VALID and ACTIONABLE
- If perception and locked research genuinely conflict: ESCALATE to human

### The Three Laws of Perceptual Questions

Every question in this skill obeys three laws:

**Law 1: The Answer Must Require a Screenshot.** If an agent can answer by reading CSS/HTML without rendering the page, the question is not perceptual.

**Law 2: The Answer Must Be Describable in Plain Language.** If the answer requires technical vocabulary (px, rem, hex, rgba, flex, grid), the question has been answered technically, not perceptually.

**Law 3: A Non-Designer Must Be Able to Validate the Answer.** If validating the answer requires design expertise or tool knowledge, the question tests expertise, not perception.

### Skill Identity

| Dimension | Perceptual Deepening (v1) | Perceptual Auditing (NEW) |
|-----------|--------------------------|---------------------------|
| **Core Verb** | MATCH (reference vs. attempt) | JUDGE (is this good?) |
| **Requires Reference Image** | YES | NO |
| **Scope** | Single component | Full page + cross-page |
| **Primary Question** | "Does this match the reference?" | "Would you ship this?" |
| **When to Use** | Replicating a known-good design | Evaluating original work |
| **Failure Mode** | Premature analytical escape | Checklist-robot mode |

v1 is not deprecated. It remains useful for reference-matching. But any audit, review, or quality gate uses Perceptual Auditing (this skill), not Perceptual Deepening.

---

## 2. 28 CORE QUESTIONS

### Curation Criteria

From ~200+ research questions, the final set was distilled using four filters:
1. **Cannot be answered by rule-checking** -- cut if answerable from CSS/HTML source alone
2. **Covers a gap area** -- prioritized questions addressing documented blind spots
3. **Practically answerable** -- an agent looking at a screenshot CAN answer in under 60 seconds
4. **Non-redundant** -- overlapping questions merged into the strongest formulation

### Tier 1: The Mandatory Five (Every Audit, Every Mode)

| ID | Question | Dimension | What It Catches |
|----|----------|-----------|-----------------|
| **PA-01** | What's the first thing that bothers you? | First Impression | Misplaced focal points, gestalt discomfort, the thing a designer sees in 2 seconds |
| **PA-02** | Is any text uncomfortable to read? Point to the worst spot. | Readability | Narrow columns, cramped containers, insufficient contrast, the 130px catastrophe |
| **PA-03** | Does this feel like one designer made it, or three? | Coherence | Design dialect shifts, visual fragmentation, the "collage" effect |
| **PA-04** | Where does your eye go first? Is that where it SHOULD go? | Hierarchy | Competing focal points, badges outranking headlines, decorative elements stealing focus |
| **PA-05** | Would you put your name on this? What would you fix first? | Ship Test | The gap between "passes rules" and "is good," professional pride threshold |

### Tier 2: The Standard Fifteen (Standard and Standalone Audits)

**Readability and Comfort:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-06** | Are any words stacking vertically, one per line, in any column? | The canonical bento-grid failure mode |
| **PA-07** | Can you read the longest paragraph without your eye losing its place between lines? | Line length >80 CPL, insufficient leading |
| **PA-08** | Is there any text you have to lean in or squint to read? | Sub-minimum font sizes, low-contrast captions |

**Spatial Balance and Weight:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-09** | Is there dead space that serves no purpose -- a screen-sized void with nothing in it? | Viewport-scale dead zone, meaningless emptiness |
| **PA-10** | If you squint until you can't read any text, does the layout still look balanced? | Macro composition failure, top-heavy pages, lopsided grids |
| **PA-11** | Are the margins generous (confident spacing) or anxious (clutching or pushing away)? | Spacing psychology, inconsistent rhythm, mechanical rigidity |

**Visual Flow:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-12** | Do your eyes flow smoothly from section to section, or do they get stuck anywhere? | Visual walls, contrast traps, flow-breaking dividers |
| **PA-13** | Is there a clear visual ending, or does the page just stop? | Abrupt endings, trailing emptiness, no narrative closure |

**Grid and Layout:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-14** | Does every column have enough room for its content to breathe? | Content-container misfit across all grid cells |
| **PA-15** | If you trace the left edge of every content block top to bottom, how many different starting positions do you count? | Alignment scatter, staircase margins, jittery edges |

**Consistency:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-16** | Pick two elements that should look identical (e.g., two callout boxes). Do they actually look the same? | Contextual inconsistency, content-volume-driven divergence |
| **PA-17** | Is there a visual rhythm to the page (like a beat in music), or does it feel random? | Arrhythmic section sequencing, unpredictable density alternation |

**Color and Emotion:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-18** | Do all the grays/neutrals feel like they belong to the same family, or do some feel warmer/cooler? | Color temperature inconsistency |
| **PA-19** | Is there any element that feels like it's from a different website? | Visual intruders (dark code blocks on warm pages, mismatched components) |
| **PA-20** | If you described this page's personality in three words, what would they be? Does that match the intended personality? | Emotional misalignment, tonal incoherence |

### Tier 3: Deep Dive Eight (Standalone Mode Only)

**Responsiveness:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-21** | At this viewport, does everything look designed for this width, or squeezed from a wider design? | Afterthought responsive layouts |
| **PA-22** | Would a user who ONLY has this screen size feel served or punished? | Mobile-as-degradation |
| **PA-23** | What breaks if you resize 200px narrower? Is the page one viewport change away from failing? | Fragile breakpoints |

**Cross-Page Consistency:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-24** | Does this page feel like it belongs in the same family as the other pages in this collection? | Cross-page dialect drift |
| **PA-25** | If you covered the header, could you identify which design system this belongs to? | Visual anonymity, generic-framework appearance |

**Architectural Challenge:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-26** | Is there any convention (max-width, column count, spacing value) that seems to be CAUSING a visual problem? | Fossilized conventions, the 860px bottleneck |
| **PA-27** | If you were designing this from scratch with no existing code, would you design it this way? | Constraint-shaped design vs intention-shaped design |

**Adversarial:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-28** | How could someone make this page look terrible while passing every rule check? | Layout vulnerabilities, proportional fragility, content edge cases |

### Tier Summary

| Tier | Questions | Time | When Used |
|------|-----------|------|-----------|
| Tier 1: Mandatory Five | PA-01 through PA-05 | 3 min | ALWAYS (all modes) |
| Tier 2: Standard Fifteen | PA-06 through PA-20 | 25 min | Standard and Standalone |
| Tier 3: Deep Dive Eight | PA-21 through PA-28 | 20 min | Standalone only |
| **Full Battery** | **28 questions** | **~48 min** | **Standalone only** |

---

## 3. FOUR MODES WITH TEAM CONFIGURATIONS

### Mode 1: Embedded (Mandatory 90 Seconds) -- NO TEAM

**When:** Every agent producing visual output, BEFORE declaring work done.
**Who:** Builders, fixers, any agent that modifies CSS/HTML and renders a page.
**What:** The Mandatory Five (PA-01 through PA-05), answered in plain language.
**Team Size:** 0 agents. Prompt injection into the existing agent.

**Exact Steps:**
1. Take a screenshot at the viewport you're working at.
2. STOP. Do not open any CSS file. Do not check any spec.
3. Look at the screenshot for 5 full seconds.
4. Answer PA-01 through PA-05 in 1-2 sentences each.
5. Quality gate: if PA-05 answer is "no, I would not put my name on this," identify what PA-05 flagged and fix it before declaring done.

**Output Format:**
```
PERCEPTUAL CHECK (Embedded):
PA-01 (Bothers me): [plain language answer]
PA-02 (Text comfort): [plain language answer]
PA-03 (One designer?): [plain language answer]
PA-04 (Eye path): [plain language answer]
PA-05 (Ship it?): YES / YES WITH CONCERNS / NO
If NO: [what needs fixing]
```

**Anti-Pattern Detection:** If any answer references a CSS property name, hex value, pixel measurement, or selector -- the answer is INVALID. Rewrite using human words: heavy, cramped, jarring, floating, anxious, confident, broken, polished.

### Mode 2: Quick (3 Minutes) -- NO TEAM

**When:** Spot-checking a page. Verifier pass after programmatic checks.
**Who:** Verifiers, leads, anyone doing a fast assessment.
**What:** The Mandatory Five + Cold Look Protocol at two viewports. NO scroll-through (Quick mode uses viewport-only screenshots).
**Team Size:** 0 agents. The invoking agent performs inline. If invoked by a lead, one Task tool agent (not TeamCreate).

**Exact Steps:**
1. Take a viewport-only screenshot at 1440px AND 768px. (No scroll-through -- Quick mode only.)
2. Cold Look: Look at the 1440px screenshot for 5 seconds. Write your gut reaction in exactly one sentence. LOCKED.
3. Cold Look: Look at the 768px screenshot for 5 seconds. Write one sentence. LOCKED.
4. Answer PA-01 through PA-05 for each viewport.
5. Verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP.

**Output Format:**
```
PERCEPTUAL CHECK (Quick):
Cold Look (1440px): [one locked sentence]
Cold Look (768px): [one locked sentence]
[PA-01 through PA-05 answers for each viewport]
Verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
```

### Mode 3: Standard (30 Minutes) -- TEAM OF 4

**When:** Regular page review. Pre-ship quality gate. Design review checkpoint.
**Who:** Dedicated auditor agents.
**What:** Tier 1 + Tier 2 (20 questions) across 2 viewports (1440px, 768px). Scroll-through is MANDATORY -- auditors scroll through the entire page section by section at viewport scale.
**Team Size:** 4 agents via TeamCreate.

**Team Composition:**
```
[Lead / Skill Invoker]
  ├── Research Contextualizer (Wave 1 -- produces Lock Sheet)
  ├── Auditor-Alpha (Wave 2 -- PA-01 through PA-11)
  ├── Auditor-Beta (Wave 2 -- PA-12 through PA-20)
  └── Synthesizer-Validator (Wave 3 -- classification + verdict)
```

**Wave Execution:**
1. **Wave 1 (0:00-0:05):** Research Contextualizer reads research, produces Lock Sheet
2. **Wave 2 (0:05-0:22):** Auditor-Alpha and Auditor-Beta start (staggered by 30 sec), perform Cold Look and answer assigned questions at both viewports
3. **Wave 3 (0:22-0:30):** Synthesizer-Validator reads Lock Sheet + findings files, classifies, deduplicates, produces verdict

**Escalation to Standalone:** Lead escalates if: page count >= 2, prior Standard returned WOULD-NOT-SHIP, or fixes are requested (not just findings).

### Mode 4: Standalone (60 Minutes) -- FULL TEAM OF 7

**When:** Final review before shipping. Comprehensive design assessment.
**Who:** Full parallel audit team.
**What:** All 28 questions across 3 viewports (1440px, 1024px, 768px) + cross-page comparison. Scroll-through is MANDATORY at all viewports -- each section examined at full viewport scale.
**Team Size:** 7 agents via TeamCreate.

**Team Composition:**
```
[Lead / Skill Invoker]
  ├── Research Contextualizer (Wave 1)
  ├── Auditor-A: Impression + Emotion + Color (Wave 2)
  │     PA-01, PA-04, PA-05, PA-18, PA-19, PA-20
  ├── Auditor-B: Readability + Responsiveness (Wave 2, +10s stagger)
  │     PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23
  ├── Auditor-C: Spatial + Grid (Wave 2, +20s stagger)
  │     PA-09, PA-10, PA-11, PA-14, PA-15, PA-17
  ├── Auditor-D: Hierarchy + Coherence + Cross-Page (Wave 2, +30s stagger)
  │     PA-03, PA-12, PA-13, PA-16, PA-24, PA-25
  ├── Adversarial Agent (Wave 2, +40s stagger)
  │     PA-26, PA-27, PA-28
  └── Weaver-Synthesizer (Wave 3)
```

**Wave Execution:**
1. **Wave 1 (0:00-0:08):** Research Contextualizer reads extended research chain, produces Lock Sheet
2. **Wave 2 (0:08-0:38):** Five agents start staggered (10s intervals), perform Cold Look and answer assigned questions at all 3 viewports
3. **Wave 3 (0:38-0:60):** Weaver reads Lock Sheet + all 5 findings files, synthesizes final comprehensive verdict

**Fixer Team (Optional):** If `--fix` flag is set and verdict is not SHIP, the Lead spawns a SEPARATE fix team after the audit team completes:
- 1 Fixer per file with findings (per-file ownership, no contention)
- 1 Re-verification agent (Quick mode on fixed files)

---

## 4. TEAM ROLES AND RESPONSIBILITIES

### 4.1 Lead (The Skill Invoker)

The agent that invokes `/perceptual-audit` becomes the Lead. The Lead does NOT do visual work, does NOT read source code, does NOT make fixes.

**CAN do:**
- Create the team (TeamCreate)
- Assign questions to Visual Auditors via SendMessage
- Receive findings from all agents
- Make mode-escalation decisions (Standard -> Standalone)
- Reject anti-pattern-contaminated answers (answers containing CSS property names)
- Read team output files to verify completeness
- Make the final verdict if Weaver is not present (Standard mode)
- Start HTTP server before spawning visual agents
- Commit results (one committer rule)

**CANNOT do:**
- Take screenshots (NO Playwright)
- Read CSS/HTML source files
- Make fixes to any file
- Answer PA questions (that would be Embedded mode)
- Override Research Lock Sheet classifications

**Self-Discipline Rules (from 6 prior teams):**
1. THIN rule: zero building, zero Playwright, zero source-code reading
2. File-existence verification: do not trust TaskUpdate alone
3. One committer: Lead commits, never agents
4. Staggered spawning: never spawn all agents simultaneously
5. Shutdown protocol: send shutdown requests after final verdict

### 4.2 Research Contextualizer

Operates in a RESEARCH-ONLY world. Never sees the page. Never takes screenshots. Produces the Research Lock Sheet.

**CAN do:**
- Read research files (R1-R5, RESEARCH-SYNTHESIS.md)
- Read provenance chain files (ACCUMULATED-IDENTITY, SOUL-DISCOVERIES, stage provenance)
- Read convention specs (AD-CONVENTION-SPEC.md, outbound findings)
- Read DESIGN-SYSTEM/tokens/* for locked values
- Read prior audit results
- Write the Research Lock Sheet output file

**CANNOT do:**
- Take screenshots (NO Playwright)
- Navigate to any URL
- Read CSS/HTML source files of the page being audited
- Communicate directly with Visual Auditors (information isolation)

**Produces:** `lock-sheet.md`

**Spawned in:** Standard and Standalone. In Standard mode, produces a lighter Lock Sheet (~5 min). In Standalone, reads the full research chain (~8 min).

### 4.3 Visual Auditor (2-4 agents in parallel)

The core perceptual agents. Their ENTIRE input is visual -- screenshots only. They LOOK before they KNOW.

**CAN do:**
- Take screenshots via Playwright (browser_take_screenshot, browser_snapshot)
- Navigate to pages via Playwright (browser_navigate)
- Resize viewport via Playwright (browser_resize)
- Look at screenshots (Read tool on screenshot image files)
- Write their findings to an output file (Write tool)
- Communicate findings to Lead/Weaver via SendMessage

**CANNOT do:**
- Read ANY source file (.css, .html, .tsx, .ts, .md, .json) -- ABSOLUTE prohibition
- Use Grep or Glob to search the codebase
- Use browser_evaluate to inspect DOM properties
- Use browser_console_messages to check for errors
- Open DevTools or any inspection tool
- Reference pixel values, hex codes, CSS property names in answers
- Read the Research Lock Sheet (must not know what is LOCKED vs CHALLENGEABLE)
- Communicate with Research Contextualizer (information isolation)

**Language Restrictions (HARD BLOCK):**
Answers may NOT contain: px, rem, em, %, hex (#), rgb, rgba, hsl, border-radius, box-shadow, padding, margin, font-size, font-family, line-height, max-width, min-width, flex, grid, gap, opacity, z-index, overflow, display, position, or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating, grounded, anxious, confident, broken, polished, loud, quiet, warm, cold, sharp, soft, cluttered, breathing, stacking, flowing, stuck, drifting.

**Produces:** `findings-[agent-name].md`

**Playwright Contention Mitigation:**
1. Staggered spawning (10-30s intervals)
2. Each auditor takes ALL screenshots at the start, saves to files, then works from saved images
3. If Playwright unavailable: WAIT (do NOT fall back to source code). Send message to Lead.

### 4.4 Research Validator / Synthesizer-Validator

The BRIDGE between visual perception and research context. The only agent that sees BOTH the visual findings AND the Lock Sheet. Classifies whether a visual concern targets a LOCKED decision or a CHALLENGEABLE value.

**CAN do:**
- Read the Research Lock Sheet
- Read Visual Auditor findings reports
- Read research files for deeper context
- Answer PA-26, PA-27, PA-28 (architectural questions requiring research context) -- in Standard mode only
- Write the Validated Findings Report or Final Audit Report
- Reclassify findings as needed
- Communicate with Lead and Weaver

**CANNOT do:**
- Take screenshots (NO Playwright)
- Read CSS/HTML source files of the page being audited
- Make fixes to any file
- Communicate with Visual Auditors (information isolation)
- Override ABSOLUTE-lock-strength decisions
- Dismiss WOULD-NOT-SHIP findings

**Produces:** `AUDIT-REPORT.md` (Standard mode, doubles as Weaver) or `validated-findings.md` (Standalone mode, separate from Weaver)

**Spawned in:** Standard (doubles as Weaver), Standalone (dedicated role)

### 4.5 Adversarial Agent (Standalone Only)

Challenges the design. Finds fragility. Questions whether conventions CAUSE visual problems.

**CAN do:**
- Take screenshots via Playwright
- Navigate, resize viewport
- Read Lock Sheet (specifically the CHALLENGEABLE section)
- Write findings file

**CANNOT do:**
- Read source files (.css, .html, .tsx)
- Use browser_evaluate for DOM scans
- Reference CSS properties in findings

**Questions:** PA-26, PA-27, PA-28

**Produces:** `findings-adversarial.md`

### 4.6 Fixer (Standalone + Fix Mode Only)

The only agents that modify CSS/HTML source files.

**CAN do:**
- Read CSS/HTML/TSX source files (they NEED source to fix)
- Edit source files (Edit tool)
- Take screenshots via Playwright for post-fix verification ONLY
- Read Validated Findings Report and convention specs
- Write fix reports

**CANNOT do:**
- Make fixes violating soul rules
- Make fixes to LOCKED decisions without human approval
- Take screenshots before reading findings
- Introduce new CSS properties not in design system tokens

**Post-Fix Verification Loop (after EVERY fix):**
1. Save the change
2. Navigate to page in Playwright
3. Take screenshot at the viewport where concern was flagged
4. Answer PA-01 and PA-02: "Does this LOOK better, or just change a number?"
5. If "just changed a number" or "created new problems": REVERT and try again

**Produces:** `fix-report-fixer-[a/b].md`

**Per-file ownership eliminates all contention.** If 3 files need fixes, spawn 3 fixers, each owning one file.

### 4.7 Weaver/Synthesizer (Standalone Only)

Collects ALL outputs, deduplicates, cross-references, produces the single authoritative verdict.

**CAN do:**
- Read ALL output files from all agents
- Read research files for synthesis context
- Write the final Perceptual Audit Verdict
- Cross-reference findings across auditors
- Deduplicate, rank, identify patterns

**CANNOT do:**
- Take screenshots (NO Playwright)
- Read CSS/HTML source files
- Make fixes
- Override Research Validator classifications
- Dismiss findings from any agent

**Produces:** `AUDIT-REPORT.md` (THE final deliverable)

---

## 5. VISUAL AUDITING PROTOCOL

### 5.1 Screenshot Protocol

**Viewport Specification:**

| Viewport | Width | Height | Priority |
|----------|-------|--------|----------|
| Desktop | 1440px | 900px | PRIMARY |
| Tablet | 1024px | 768px | SECONDARY |
| Mobile | 768px | 1024px | TERTIARY |

Standard mode uses Desktop + Mobile. Standalone uses all three.

**Screenshot Order:** 1440px first (baseline), then 768px (maximum contrast), then 1024px last (reveals squeeze problems invisible at extremes). The jump from 1440 to 768 prevents perceptual anchoring.

**Types per viewport:**
- 1 viewport-only (for Cold Look -- no scrolling, captures only what a user sees on landing)
- N scroll-through screenshots (for Zone Sweep -- see Section 5.2.1)
- Minimum: 1 Cold Look + 5-15 scroll-through per viewport

**Why Scroll-Through, Not Full-Page Screenshots:**
A full-page screenshot of a 15,000px page shrinks everything so small that a 130px crushed column might look "fine" at thumbnail scale. But scrolling through at 1440px viewport width, each section fills the screen and problems are immediately obvious. The scroll-through simulates how a REAL USER experiences the page -- seeing each section at full viewport scale, noticing section transitions, jarring visual jumps, dead zones, and flow breaks as they scroll.

### 5.2 Playwright Configuration

**EXACT STEPS (every screenshot-taking agent follows this):**

```
STEP 1: NAVIGATE
  Use browser_navigate to the target URL.

STEP 2: WAIT FOR FONTS
  Use browser_evaluate: () => document.fonts.ready

  CRITICAL: Without this, fallback fonts render with wrong metrics.
  Previous audits produced FALSE POSITIVES from font-loading timing
  (the "Essence font" false positive).

STEP 3: DISABLE ANIMATIONS
  Use browser_run_code to inject:
  *, *::before, *::after {
    animation: none !important;
    animation-delay: 0s !important;
    animation-duration: 0s !important;
    transition: none !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
    opacity: 1 !important;
    transform: none !important;
    scroll-behavior: auto !important;
  }

  CRITICAL: opacity: 1 is ESSENTIAL. Many libraries initialize elements
  at opacity: 0 and reveal on scroll. Without this override, half the
  page may be invisible (the "dead zone" false positive).

STEP 4: WAIT FOR LAYOUT STABILITY
  Wait 500ms for style recalculations to settle.

STEP 5: SET VIEWPORT AND CAPTURE (Cold Look)
  Set viewport size, then take a viewport-only screenshot (fullPage: false).
  This is the Cold Look screenshot -- it captures ONLY what a user sees
  on first landing, before any scrolling.

STEP 6: SCROLL-THROUGH CAPTURE (Zone Sweep) -- MANDATORY for Standard/Standalone
  After Cold Look, scroll through the ENTIRE page section by section:

  a) Start at the top (scroll position 0).
  b) Take a viewport-sized screenshot (fullPage: false).
  c) Scroll down by 80% of viewport height (e.g., 720px for a 900px viewport).
  d) Take another viewport-sized screenshot.
  e) Repeat until you reach the bottom of the page.
  f) This produces 5-15 screenshots per page depending on page length.

  Implementation (browser_run_code):
    async (page) => {
      const viewportHeight = page.viewportSize().height;
      const scrollStep = Math.floor(viewportHeight * 0.8);
      const totalHeight = await page.evaluate(() => document.body.scrollHeight);
      const positions = [];
      for (let y = 0; y < totalHeight; y += scrollStep) {
        positions.push(y);
      }
      return positions;
    }

  Then for each scroll position:
    await page.evaluate((y) => window.scrollTo(0, y), position);
    await page.waitForTimeout(300);  // let layout settle after scroll
    await page.screenshot({ path: '[OUTPUT_PATH]', fullPage: false });

  WHY SCROLL-THROUGH INSTEAD OF FULL-PAGE:
  A full-page screenshot of a 15,000px page compresses everything to
  thumbnail scale. A 130px crushed column looks "fine" when the entire
  page is 5% of its real size. But at viewport scale, each section fills
  the screen and problems are immediately obvious.

  The scroll experience IS the audit: agents notice section transitions,
  how content flows as you scroll, whether sticky headers obscure content,
  whether there are jarring visual jumps between sections, dead zones of
  whitespace, and whether the page has narrative momentum or just stops.

  NAMING: screenshots are numbered sequentially:
    {page}-{viewport}-scroll-01.png
    {page}-{viewport}-scroll-02.png
    ...

  Quick mode SKIPS the scroll-through (Cold Look viewport shot only).
```

**HTTP Server Requirement:** The Lead MUST start an HTTP server before spawning visual agents. Playwright blocks the `file://` protocol.

```
python3 -m http.server 8080 &
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/
# Expected: 200
```

### 5.3 Cold Look Protocol

**Purpose:** Capture the 50-millisecond verdict before analytical contamination (Lindgaard 2006). The closest an agent can get to a user's first impression.

**Exact Sequence:**

1. **CLEAR:** Close all CSS files, spec documents, convention references. You are a person seeing this page for the first time.
2. **LOOK (5 seconds):** Open the viewport-only screenshot. Do NOT read text. Do NOT examine details. Absorb shape, color, weight, impression.
3. **REACT (immediate):** Write these four responses. They are LOCKED -- cannot be changed after writing.

```
COLD LOOK ([WIDTH]px):
Gut reaction: [one sentence -- what did you FEEL?]
Worst thing: [one element or area -- what would you fix first?]
Best thing: [one element or area -- what should be protected?]
Ship verdict: YES / YES WITH RESERVATIONS / NO
```

4. **LOCK:** These responses are FINAL. Even after reading specs or examining CSS, the Cold Look stands. Modifying it is a PROTOCOL VIOLATION that invalidates the audit.
5. **REPEAT:** Complete independently for each viewport. Do not let one viewport's reaction influence another.

**Why Locking Matters:** Agents retroactively rationalize perceptual findings when they encounter rule compliance. An agent might see "the code blocks don't belong" (correct perception) but then read a convention allowing dark code blocks and revise to "code blocks are convention-compliant" (perceptual withdrawal). Locking prevents this.

### 5.4 Zone-by-Zone Visual Sweep (5 Passes)

After the Cold Look captures the macro impression, the Zone Sweep examines the page systematically using the scroll-through screenshots. The agent looks at EACH scroll-through screenshot individually at viewport scale -- not a compressed full-page composite.

Uses a **dimension-layered** approach: scan through ALL scroll-through screenshots once per dimension, not once per zone. This reveals systemic issues across the page.

**PASS 1: READABILITY SCAN**
Step through each scroll-through screenshot top to bottom. For every text block visible at viewport scale: "Could I comfortably read this for 10 minutes?" Look for word stacking, squinting, lines too wide, text squeezed against edges. At viewport scale, a 130px column's word stacking is unmistakable -- it fills a visible portion of the screen.

**PASS 2: SPATIAL BALANCE SCAN (Squint Test)**
Step through each screenshot again. Blur vision. Only shapes, color blocks, and weight distribution remain. Is each "screen" balanced? Dead space visible at viewport scale? Any section heavier than neighbors? Do you notice jarring visual jumps between consecutive scroll positions? Are margins generous or anxious?

**PASS 3: HIERARCHY AND FLOW SCAN**
Step through each screenshot as if scrolling. Notice how content flows from one scroll position to the next. What draws the eye first in each "screen"? Is that the INTENDED focal point? Do section transitions feel smooth or jarring? Does the page have narrative momentum as you scroll, or does it feel like disconnected slides? Do sticky headers obscure content? Clear ending or just stops? Trace the actual eye path through the scroll sequence.

**PASS 4: CONSISTENCY SCAN**
Find pairs of elements that should look identical across different scroll positions. Do they? Is there visual rhythm as you scroll? Do grays/neutrals feel like the same family throughout? Anything from a different visual language? Does the design dialect shift as you scroll deeper?

**PASS 5: THE SHIP TEST**
Step back. You are a senior designer who just scrolled through this entire page section by section. Would you put your name on this? What would you fix with 10 more minutes? Next to Stripe or Linear, proud or embarrassed? Were there any scroll positions where you winced?

### 5.5 Multi-Viewport Comparison

After completing Cold Look and Zone Sweep for each viewport independently:

**Comparison 1: Squeeze Test** -- Track each major element from widest to narrowest. Does it degrade gracefully or collapse?

**Comparison 2: Content Survival** -- Is ALL 1440px content still visible at 768px? Anything unreadable? Elements that disappear?

**Comparison 3: Identity Survival** -- At 768px alone: does this look DESIGNED for this width, or squeezed? Would a user feel served or punished?

**Comparison 4: Cold Look Reconciliation** -- Compare the three Cold Look verdicts. If they differ, the difference reveals where the design breaks.

### 5.6 Iterative Fix Verification

When a fixer modifies code to address a perceptual finding, the visual re-examination follows:

1. **Fresh Cold Look** on the fixed area (without comparing to old screenshot)
2. **Before/After Comparison** -- original problem resolved? New problems introduced?
3. **Context Check** -- does the fix improve the area but break something nearby?
4. **Verdict:** CONFIRMED / PARTIAL / FAILED / REGRESSED

---

## 6. RESEARCH SOVEREIGNTY LAYER

### 6.1 Research Lock Sheet Format

```markdown
# RESEARCH-LOCK-SHEET.md
# Project: [name]
# Generated by: Research Contextualizer
# Date: [date]

## ALWAYS-LOCKED (Soul / Identity -- Universal)

These are NEVER challengeable. Any finding recommending violation is INVALID.

| Rule | Lock Source | Example |
|------|------------|---------|
| border-radius: 0 | Soul Piece #1 | Cannot suggest rounded corners |
| box-shadow: none | Soul Piece #4 | Cannot suggest shadows |
| No filter: drop-shadow() | Soul Piece #5 | Cannot suggest drop shadows |
| No 2px structural borders | OD-F-AP-001 | Cannot suggest 2px borders |
| Opacity === 1 on backgrounds | Soul rule | Cannot suggest transparency |
| Font trio: Instrument Serif / Inter / JetBrains Mono | Soul constraint | Cannot suggest different typefaces |

## LOCKED (Research-Backed -- Project-Specific)

The DECISION is locked. The EXECUTION is auditable.

| Decision | Lock Source | Research Chain | Auditable Execution Aspects |
|----------|------------|----------------|----------------------------|
| [decision] | [finding] | [chain] | [what CAN be questioned about execution] |

## CHALLENGEABLE (Inherited / Builder-Chosen)

Open to perceptual challenge.

| Decision | Origin | Why Challengeable | What Could Change |
|----------|--------|-------------------|-------------------|
| [decision] | [origin] | [reason] | [possible alternatives] |

## PREVIOUS FINDINGS (from prior audits)

| Finding ID | Description | Status |
|------------|-------------|--------|
| [ID] | [desc] | FIXED / STILL PRESENT / UNKNOWN |
```

### 6.2 Research Contextualizer Protocol

**Reading Order (provenance order, critical):**

Phase 1 -- Soul and Identity (Universal):
1. SOUL-DISCOVERIES.md -> extract soul pieces (ALWAYS-LOCKED)
2. ACCUMULATED-IDENTITY-v[latest].md -> extract identity constraints

Phase 2 -- Research Chain (Project-Specific):
3. R[relevant]-*.md -> primary research findings
4. Outbound-findings.md per consumed stage (COMP-F -> DD-F -> OD-F -> AD-F)
5. SYNTHESIS.md for current stage
6. EXT-RESEARCH-REGISTRY.md if exists

Phase 3 -- Convention and Execution:
7. Convention spec -> THESE are the CHALLENGEABLE items
8. HANDOFF file -> constraints from prior stage
9. Prior AUDIT-SYNTHESIS.md if exists

**Decision Tree for Classification:**
```
Does it trace to a formal finding (XX-F-NNN) with research citation?
  YES -> LOCKED
Does the convention cite research?
  YES -> LOCKED
Convention value without research citation?
  -> CHALLENGEABLE
Inherited without re-validation?
  -> CHALLENGEABLE
Builder choice within convention bounds?
  -> CHALLENGEABLE
Unknown provenance?
  -> CHALLENGEABLE
```

**Time Budget:** ~5-8 min for typical project. File-reading-only agent.

### 6.3 Two-Phase Classification (Cross-Reference Mechanism)

**Phase 1:** Auditor produces raw finding with NO research context. Finding is LOCKED immediately after writing.

**Phase 2:** Research Validator classifies finding against Lock Sheet:
1. Identify the design element the finding concerns
2. Search Lock Sheet: ALWAYS-LOCKED? LOCKED? CHALLENGEABLE?
3. If LOCKED: does finding target the decision or the execution?
   - Decision -> INVALID (redirect to execution aspect)
   - Execution -> VALID (keep on Perception Track, note constraints)
4. If CHALLENGEABLE -> VALID and ACTIONABLE
5. If ALWAYS-LOCKED -> INVALID (automatic)
6. If genuine conflict -> ESCALATE

**The Temporal Firewall:** Visual auditors NEVER see the Lock Sheet before completing their perceptual work. The Cold Look and all PA findings are locked before any research context is introduced. The auditor never experiences the cognitive conflict between "I see a problem" and "the research says it's correct."

### 6.4 Escalation Protocol

**When:** A finding correctly identifies a perceptual problem, AND the problem traces to a research-backed decision, AND the problem cannot be fixed within the decision's execution space.

**Format:**
```markdown
## ESCALATION: [Finding ID]

### Perceptual Evidence
- Finding: [raw observation]
- Confidence: [how many independent agents flagged this]
- Severity: [WOULD-NOT-SHIP / LOOKS-WRONG]

### Research Lock
- Locked decision: [what creates this]
- Lock source: [finding ID and chain]
- Lock strength: [ALWAYS-LOCKED / LOCKED]

### Attempted Resolution Within Constraints
- Fix attempted: [what was tried]
- Result: [did it resolve?]
- Remaining gap: [what persists]

### Escalation Question
[Exactly one question for the human]

### Options
1. Maintain lock -- accept perceptual cost as known trade-off
2. Revise decision -- specific change with impact analysis
3. Modify execution -- partial address within constraints
```

**Rules:**
1. Escalation is RARE (<10% of findings). If more escalate, the Lock Sheet is too aggressive.
2. The auditor does NOT escalate. The Research Validator escalates.
3. Escalation requires evidence of attempted resolution within constraints.
4. The human decides. Outcomes feed back to the Lock Sheet.
5. If human maintains lock, finding is documented as "known perceptual trade-off" and future audits do not re-escalate.

### 6.5 Fix-Within-Constraints Principle

When perception identifies a problem with a LOCKED decision's execution:

| Locked Decision | Fix Within Constraints | Fix That Violates Lock (INVALID) |
|----------------|----------------------|----------------------------------|
| F-Pattern axis | Widen container, reduce column count | "Use Z-pattern instead" |
| CRESCENDO density | Add transition spacing, smooth curve | "Use ISLANDS density" |
| Dark code blocks | Border treatment, surrounding spacing | "Use light code blocks" |
| Spiral axis | Improve landmarks, add reading cues | "Use linear layout" |

### 6.6 Edge Cases

**Research was wrong:** ESCALATE. Human can revise. Finding chain annotated with "CHALLENGED BY" marker. Decision becomes CHALLENGEABLE in future audits.

**Multiple locked decisions create combined failure:** Finding targets the INTERACTION. Escalate with note: "Combined effect of multiple locked decisions."

**Everything is locked:** Lock Sheet is too aggressive. Apply decision tree strictly: only DIRECT research citations are LOCKED. Convention values implementing research (but not themselves researched) are CHALLENGEABLE.

**No research context exists (greenfield):** Minimal Lock Sheet with ONLY ALWAYS-LOCKED items. Everything else is CHALLENGEABLE.

---

## 7. TEAMCREATE INTEGRATION

### 7.1 Team Naming Convention

```
pa-{target-id}-{mode}-{date}
```

Examples: `pa-ad-001-standard-20260210`, `pa-full-site-standalone-20260210`

### 7.2 Task Graph (Standard Mode)

```
Task #1: "Produce Lock Sheet for {target-id}"
  blockedBy: []    blocks: [#2, #3, #4]

Task #2: "Audit PA-01-11 for {target-id}"
  blockedBy: [#1]  blocks: [#4]

Task #3: "Audit PA-12-20 for {target-id}"
  blockedBy: [#1]  blocks: [#4]

Task #4: "Synthesize findings and produce verdict"
  blockedBy: [#2, #3]  blocks: []
```

### 7.3 Task Graph (Standalone Mode)

```
Task #1: Lock Sheet     blockedBy: []      blocks: [#2-#6]
Task #2: Auditor A      blockedBy: [#1]    blocks: [#7]
Task #3: Auditor B      blockedBy: [#1]    blocks: [#7]
Task #4: Auditor C      blockedBy: [#1]    blocks: [#7]
Task #5: Auditor D      blockedBy: [#1]    blocks: [#7]
Task #6: Adversarial    blockedBy: [#1]    blocks: [#7]
Task #7: Weaver         blockedBy: [#2-#6] blocks: []
```

### 7.4 Communication Protocol

**PRIMARY: File-based.** All inter-agent data flows through files, not SendMessage.

Why files over messages:
1. Files survive agent crashes
2. Files can be read by any subsequent agent
3. File existence is the most reliable completion signal
4. Files become audit artifacts for provenance

**When SendMessage IS used:**
- Lock Sheet completion notification (Contextualizer -> Lead)
- Critical errors blocking downstream work
- Nothing else.

### 7.5 Information Isolation Barriers

| From | To | Blocked | Why |
|------|----|---------|-----|
| Research Contextualizer | Visual Auditors | ALL | Auditors must not know what is LOCKED |
| Visual Auditors | Research Contextualizer | ALL | Contextualizer must not be influenced by visual findings |
| Research Validator | Visual Auditors | ALL | Classifications must not influence auditor perception |
| Visual Auditors | Fixers | Direct findings | Findings must go through validation first |

### 7.6 Team Lifecycle

**Phase A (Initialization):**
1. Lead receives invocation
2. Creates scratchpad directory: `{target-dir}/_perceptual-audit/`
3. Verifies HTTP server running
4. Spawns Research Contextualizer

**Phase B (Lock Sheet -- Wave 1):**
1. Contextualizer reads research files, writes `lock-sheet.md`
2. Lead detects completion via file existence

**Phase C (Visual Auditing -- Wave 2):**
1. Lead spawns auditors (staggered)
2. Each auditor takes screenshots, performs Cold Look, answers questions
3. Each writes findings file

**Phase D (Synthesis -- Wave 3):**
1. Lead spawns Synthesizer/Weaver
2. Reads Lock Sheet + all findings, classifies, deduplicates, ranks
3. Writes `AUDIT-REPORT.md`

**Phase E (Completion):**
1. Lead reads verdict
2. If DO NOT SHIP + fix mode: spawns separate fix team
3. Sends shutdown requests to remaining agents
4. Reports verdict

### 7.7 Gate Verification

| Gate | Condition | What Lead Checks |
|------|-----------|-----------------|
| Gate 1 | Contextualizer done | Lock Sheet file exists with LOCKED and CHALLENGEABLE sections |
| Gate 2 | All auditors done | All finding files exist, PA questions answered, no CSS property names |
| Gate 3 | Synthesizer/Weaver done | AUDIT-REPORT.md exists with verdict and ranked concerns |

### 7.8 Error Handling

**Agent fails to write file:** Lead checks every 5 min. If in_progress after 2x expected duration, sends status ping. If no response in 2 min, spawns replacement with same prompt + explicit "MUST write file using Write tool" instruction.

**Playwright contention:** Staggered spawning prevents most. If blocked, agent WAITS (does NOT fall back to source code). After 3 retries, works from any screenshots captured and notes "LIMITED ACCESS."

**Lock Sheet agent fails:** If no file after 10 min (Standard) / 15 min (Standalone), Lead produces emergency Lock Sheet directly from convention spec + identity doc.

**All auditors return "SHIP" with zero concerns:** Red flag. Lead spawns adversarial auditor: "Your predecessor auditors found nothing wrong. Find what they missed."

### 7.9 Skill Routing (CLAUDE.md)

```
/perceptual-audit {target}                    -> Quick mode (default)
/perceptual-audit {target} --mode embedded    -> Embedded mode
/perceptual-audit {target} --mode quick       -> Quick mode
/perceptual-audit {target} --mode standard    -> Standard mode (team of 4)
/perceptual-audit {target} --mode standalone  -> Standalone mode (team of 7)
/perceptual-audit {target} --mode standalone --fix  -> Standalone + fix team
```

---

## 8. ANTI-PATTERNS: THE COMPLETE TAXONOMY

### Category A: Cognitive Escape (The Agent Flees Perception)

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-01 | **Analytical Escape** | First action after screenshot is reading source code |
| AP-02 | **Grepping for Existence** | Answer could be written without a screenshot |
| AP-03 | **Technical Documentation** | Finding describes CSS properties, not visual experience |
| AP-04 | **Property-Name Answers** | Answer contains CSS property names |

### Category B: Rule-Checking in Disguise

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-05 | **Rule Checking in Disguise** | Answer is a compliance statement, not a visual reaction |
| AP-06 | **Spec Comparison Masquerading** | Answer references a specification value |
| AP-07 | **Pixel-Value Perception** | Answer includes pixel measurements without visual context |
| AP-08 | **Convention Worship** | Convention cited as proof of correctness despite visual evidence |

### Category C: Scope Failures

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-09 | **Component Blindness** | No finding references relationships between elements |
| AP-10 | **Viewport Tunnel Vision** | Only two viewport widths tested (in Standalone) |
| AP-11 | **Container vs Viewport Blindness** | Media query targets viewport when problem is container width |
| AP-12 | **Self-Reference Blindness** | No reference to industry standards |

### Category D: Completion Failures

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-13 | **Declaring Victory After Writing CSS** | No post-fix screenshot |
| AP-14 | **Premature Ship Declaration** | PA-05 answer is suspiciously fast or formulaic |
| AP-15 | **"Nothing New" Surrender** | Only one dimension examined before declaring clean |
| AP-16 | **Finding-Without-Looking** | Findings match task prompt verbatim but not actual page |

### Category E: Aesthetic Masking

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-17 | **Aesthetic-Usability Blindness** | High rating coexists with element-level problems |
| AP-18 | **Halo Effect** | Assessment focuses only on strongest dimension |

### Category F: Sovereignty Violations (from 09)

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-19 | **Research Suppression** | Valid perceptual finding dismissed because "convention allows it" |
| AP-20 | **Perceptual Overreach** | Finding attacks a LOCKED decision (the WHAT) rather than execution (the HOW) |
| AP-21 | **Temporal Firewall Breach** | Auditor reads Lock Sheet or specs before completing Cold Look |
| AP-22 | **Post-Lock Revision** | Cold Look or PA answers modified after encountering research context |

### Category G: Scale Distortion

| ID | Anti-Pattern | The Tell |
|----|--------------|----------|
| AP-23 | **Thumbnail-Scale Blindness** | Agent evaluates the page from a full-page screenshot instead of scrolling through at viewport scale. Problems invisible at thumbnail size are missed -- a crushed 130px column looks "fine" when the entire 15,000px page is compressed to fit one screen. |

**Total: 23 Anti-Patterns across 7 categories.**

---

## 9. DUAL SEVERITY TRACK

### Why a Separate Track

The current severity system (BROKEN > OVERFLOW > CRAMPED > INCONSISTENT > CONCERN > NITPICK) guarantees perceptual findings never get fixed. Documented ratio: 100% rule-based findings get fixed, ~0% perceptual findings get fixed. The severity system IS the filtering mechanism.

### The Two Parallel Tracks

**Rule Track (existing, unchanged):**
```
SOUL VIOLATION    --> Always fix (binary: violates locked rule)
CONVENTION BUG    --> Always fix (binary: violates spec)
OVERFLOW          --> Usually fix (binary: content escapes container)
```

**Perception Track (NEW):**
```
WOULD-NOT-SHIP    --> A designer would refuse to release this.
                      Requires human review. Cannot be auto-dismissed.
LOOKS-WRONG       --> Something is visually off. Needs attention.
                      Addressed in current cycle if time permits.
COULD-BE-BETTER   --> Polish opportunity. Documented for future.
```

### Critical Rules

1. Perception Track findings can NEVER be reclassified onto the Rule Track.
2. They cannot be dismissed because "the convention spec allows it."
3. A finding can exist on BOTH tracks simultaneously (rule compliance + visual quality are independent).
4. "The convention describes WHAT is built. The perception track describes HOW IT LOOKS." When they conflict, escalate to human.

### How Sovereignty Feeds the Dual Track

```
Raw Finding -> Research Validator -> Sovereignty Classification
                                      |
                            VALID                    INVALID
                              |                        |
                     Perception Track           Documentation Only
                     (WOULD-NOT-SHIP /          (Recorded, not fixed)
                      LOOKS-WRONG /
                      COULD-BE-BETTER)
                              |
                     Fix Consideration
                              |
                    CHALLENGEABLE        LOCKED EXECUTION
                         |                      |
                    Direct Fix          Fix Within Constraints
```

---

## 10. EXACT PROMPT TEMPLATES

### 10.1 Research Contextualizer Prompt

```
You are the Research Contextualizer for a Perceptual Audit of {target-id}.

YOUR JOB: Read the project's design conventions, identity, and research,
then produce a LOCK SHEET that classifies every design decision as LOCKED
(cannot be changed) versus CHALLENGEABLE (can be questioned).

YOU MUST READ THESE FILES:
1. {path-to-convention-spec}
2. {path-to-identity-doc}
3. {path-to-soul-discoveries}
4. {path-to-outbound-findings}

YOU MAY READ: Research files (R1-R5), previous audit reports.

YOU MAY NOT:
- Use Playwright or take screenshots
- Read HTML/CSS source files of the target page
- Make visual judgments

OUTPUT: Write lock-sheet.md to {output-path}/_perceptual-audit/lock-sheet.md

The Lock Sheet has this structure:
## LOCKED (Do Not Question)
| Rule | Value | Why Locked |

## CONVENTION (Question If Visually Problematic)
| Convention | Current Value | Can Be Questioned If... |

## PREVIOUS FINDINGS
| Finding ID | Description | Status |

## CROSS-PAGE CONTEXT (if multi-page audit)
| Sibling Page | URL | Key Characteristics |

CRITICAL:
1. You MUST write the file using the Write tool
2. Mark your task as completed using TaskUpdate
3. Keep the Lock Sheet under 200 lines
4. You are a FILE-READING agent: no Playwright, no screenshots
```

### 10.2 Visual Auditor Prompt (Standard -- Alpha)

```
You are Visual Auditor Alpha for a Perceptual Audit of {target-id}.

YOUR JOB: LOOK at the rendered page and describe what you SEE. You are
a designer evaluating visual quality, NOT a rule-checker scanning CSS.

THE ONE RULE: React to what you see before you check what you know.

YOU MUST READ FIRST:
1. {output-path}/_perceptual-audit/lock-sheet.md

YOU MUST USE:
- Playwright (browser_snapshot, browser_take_screenshot, browser_navigate,
  browser_resize)
- Write tool (to write your findings file)
- TaskUpdate (to mark completion)

YOU MUST NOT USE:
- Read tool on ANY .html, .css, .tsx, .ts, or .js file
- Grep or Glob to search source code
- browser_evaluate to run DOM scans or computed-style checks

YOUR ASSIGNED QUESTIONS (for 1440px AND 768px):
PA-01: What's the first thing that bothers you?
PA-02: Is any text uncomfortable to read? Point to the worst spot.
PA-03: Does this feel like one designer made it, or three?
PA-04: Where does your eye go first? Is that where it SHOULD go?
PA-05: Would you put your name on this? What would you fix first?
PA-06: Are any words stacking vertically, one per line?
PA-07: Can you read the longest paragraph without losing your place?
PA-08: Is there any text you have to lean in or squint to read?
PA-09: Is there dead space that serves no purpose?
PA-10: Squint test -- does the layout look balanced?
PA-11: Are the margins generous (confident) or anxious (clutching)?

EXACT PROCEDURE:
Step 1: Navigate to {target-url}. Wait for fonts: document.fonts.ready.
        Disable animations (opacity:1, animation:none, transition:none).
Step 2: Take viewport-only screenshot at 1440px (Cold Look shot).
Step 3: COLD LOOK -- look 5 seconds, write LOCKED reactions immediately.
Step 4: SCROLL-THROUGH -- scroll the entire page section by section at
        1440px viewport width. Take a viewport-sized screenshot at each
        scroll position (every ~80% of viewport height). This produces
        5-15 screenshots. Look at EACH screenshot individually at full
        viewport scale. Answer PA-01 through PA-11 based on what you see
        at each scroll position, not a compressed full-page thumbnail.
Step 5: Resize to 768px. New viewport-only screenshot. Abbreviated Cold Look.
Step 6: SCROLL-THROUGH at 768px. Same process -- scroll, screenshot at
        each position, look at each individually.
Step 7: Answer PA-01 through PA-11 for 768px.
Step 8: Write findings file.

THE SCROLL EXPERIENCE IS THE AUDIT: As you scroll, notice section
transitions, how content flows, whether sticky headers obscure content,
whether there are jarring visual jumps between sections, dead zones of
whitespace, and whether the page has narrative momentum.

LANGUAGE RESTRICTIONS (HARD BLOCK):
Your answers may NOT contain: px, rem, em, %, hex (#), rgb, rgba, hsl,
border-radius, box-shadow, padding, margin, font-size, font-family,
line-height, max-width, min-width, flex, grid, gap, opacity, z-index,
overflow, display, position, or ANY CSS property name.

Use instead: heavy, light, cramped, spacious, jarring, smooth, floating,
grounded, anxious, confident, broken, polished, warm, cold, sharp, soft.

If any answer contains a CSS property name, rewrite it in human words.

OUTPUT: {output-path}/_perceptual-audit/findings-alpha.md

CRITICAL:
1. You MUST write your findings file using the Write tool
2. Mark your task as completed using TaskUpdate
3. If Playwright unavailable, wait 30s and retry (3 max)
```

### 10.3 Visual Auditor Prompt (Standard -- Beta)

Same structure as Alpha with different question assignments:
- PA-12 through PA-20
- Output: `findings-beta.md`

### 10.4 Visual Auditor Prompts (Standalone -- A through D)

Same structure as Standard auditors with:
- **Auditor A:** PA-01, PA-04, PA-05, PA-18, PA-19, PA-20. Three viewports. Output: `findings-impression-emotion.md`
- **Auditor B:** PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23. Three viewports. Output: `findings-readability-resp.md`
- **Auditor C:** PA-09, PA-10, PA-11, PA-14, PA-15, PA-17. Three viewports. Output: `findings-spatial-grid.md`
- **Auditor D:** PA-03, PA-12, PA-13, PA-16, PA-24, PA-25. Three viewports. Cross-page screenshots for PA-24/25. Output: `findings-hierarchy-coherence.md`

### 10.5 Adversarial Agent Prompt (Standalone Only)

```
You are the Adversarial Agent for a Perceptual Audit of {target-id}.

YOUR JOB: Challenge the design. Find how it could fail. Question whether
conventions are CAUSING visual problems. You are the red team.

YOU MUST READ: {output-path}/_perceptual-audit/lock-sheet.md
  Pay special attention to the CONVENTION (Challengeable) section.

YOU MUST NOT: Read source files, use browser_evaluate.

YOUR QUESTIONS:
PA-26: Is any convention CAUSING a visual problem? Check each CHALLENGEABLE
       item in the Lock Sheet against visual evidence.
PA-27: If designing from scratch with no existing code, would you design
       it this way? What is constraint-shaped vs intention-shaped?
PA-28: How could someone make this page look terrible while passing every
       rule check? Test by:
       a) Resize 1440->320 in 50px increments. Screenshot breakage points.
       b) Check content length variation (short vs long).
       c) Check non-standard breakpoints (900px, 1100px, 500px).

OUTPUT: {output-path}/_perceptual-audit/findings-adversarial.md

Format includes: Convention Challenges, From-Scratch Assessment,
Fragility Map (breakage points, edge cases, "almost broken" states),
Risk Assessment (ROBUST / ADEQUATE / FRAGILE / BRITTLE).
```

### 10.6 Synthesizer-Validator Prompt (Standard Mode)

```
You are the Synthesizer-Validator for a Perceptual Audit of {target-id}.

YOUR JOB: Read all findings files, cross-reference against Lock Sheet,
deduplicate, rank by visual impact, produce final verdict.

YOU MUST READ:
1. {output-path}/_perceptual-audit/lock-sheet.md
2. {output-path}/_perceptual-audit/findings-alpha.md
3. {output-path}/_perceptual-audit/findings-beta.md

YOU MUST NOT: Use Playwright, read source files.

YOUR TASKS:
1. CONTAMINATION CHECK -- flag any findings with CSS property names,
   hex values, pixel measurements, or selectors. Exclude contaminated.
2. CROSS-REFERENCE against Lock Sheet:
   - Flags LOCKED rule? -> RULE TRACK
   - Flags CONVENTION? -> PERCEPTION TRACK
   - Not in Lock Sheet? -> NOVEL PERCEPTION
3. DEDUPLICATION -- merge identical findings, note auditor agreement.
4. RANKING -- WOULD-NOT-SHIP highest, then LOOKS-WRONG, then COULD-BE-BETTER.
5. COLD LOOK CONCORDANCE -- do auditors' gut reactions agree?
6. SOVEREIGNTY CLASSIFICATION -- for each finding:
   - Targets locked DECISION? -> INVALID (document, exclude from fixes)
   - Targets locked EXECUTION? -> VALID (note constraints)
   - Targets CHALLENGEABLE? -> VALID and ACTIONABLE
   - Genuine conflict? -> ESCALATE
7. FINAL VERDICT:
   - SHIP: No WOULD-NOT-SHIP. Few LOOKS-WRONG.
   - SHIP WITH CONCERNS: No WOULD-NOT-SHIP, multiple LOOKS-WRONG.
   - DO NOT SHIP: Any WOULD-NOT-SHIP survives validation.

OUTPUT: {output-path}/_perceptual-audit/AUDIT-REPORT.md

Format includes: Verdict, Cold Look Summary, Top 5 Findings, All Findings
by Track, Contamination Report, Sovereignty Classifications,
Escalation Items, Audit Metadata.

CRITICAL:
1. You MUST write AUDIT-REPORT.md using the Write tool
2. You are the LAST agent -- your output IS the deliverable
3. Do NOT add your own visual opinions -- you synthesize, not perceive
```

### 10.7 Weaver-Synthesizer Prompt (Standalone Mode)

Same structure as Standard Synthesizer with additions:
- Reads 5 findings files (A-D + Adversarial)
- Includes CONVENTION CHALLENGE section from PA-26/27
- Includes FRAGILITY ASSESSMENT from PA-28
- Cross-references all 28 questions
- Includes FIX RECOMMENDATIONS ranked by visual impact
- Includes CROSS-PAGE FINDINGS from Auditor D
- Produces ~300-500 line report

### 10.8 Builder/Fixer Embedded Mode Injection

```
BEFORE YOU DECLARE THIS WORK DONE:
Take a screenshot. Answer these 5 questions in plain language
(no CSS property names, no pixel values):
1. What's the first thing that bothers you?
2. Is any text uncomfortable to read?
3. Does this feel like one designer made it?
4. Where does your eye go first? Is that correct?
5. Would you put your name on this?
If Q5 is NO: identify what Q5 flagged and fix it.
```

### 10.9 Fixer Post-Fix Injection

```
After writing your CSS fix:
1. Re-render the page.
2. Take a screenshot.
3. Answer PA-01 and PA-02 for the fixed area.
4. Did your fix make it LOOK better, or did it just change a number?
5. Did your fix create any NEW visual problems?
If Q4 is "just changed a number" or Q5 is "yes": iterate.
```

---

## 11. FILE STRUCTURE

### 11.1 Skill Files (4 files)

```
perceptual-auditing/
  SKILL.md              # THE skill definition (single source of truth, ~500 lines)
  CLAUDE.md             # Skill registration and routing (~30 lines)
  EMBEDDED-PROMPT.md    # Exact text injected into builder/fixer/auditor prompts (~50 lines)
  ANTI-QUESTIONS.md     # Anti-questions + anti-patterns reference (~150 lines)
```

### 11.2 Runtime Output (per audit)

```
{target-dir}/_perceptual-audit/
  screenshots/
    {page}-{viewport}-coldlook-{agent}.png    # Cold Look viewport-only screenshots
    {page}-{viewport}-scroll-01-{agent}.png   # Scroll-through screenshots (sequential)
    {page}-{viewport}-scroll-02-{agent}.png   # Each at viewport scale, not full-page
    {page}-{viewport}-scroll-NN-{agent}.png   # 5-15 per page depending on length
    {page}-{viewport}-fix-{N}-{fixer}.png     # Post-fix screenshots
  lock-sheet.md                                # Research Contextualizer
  findings-alpha.md                            # Standard Auditor Alpha
  findings-beta.md                             # Standard Auditor Beta
  findings-impression-emotion.md               # Standalone Auditor A
  findings-readability-resp.md                 # Standalone Auditor B
  findings-spatial-grid.md                     # Standalone Auditor C
  findings-hierarchy-coherence.md              # Standalone Auditor D
  findings-adversarial.md                      # Standalone Adversarial
  validated-findings.md                        # Standalone Research Validator
  fix-report-fixer-a.md                        # Standalone Fixer A
  fix-report-fixer-b.md                        # Standalone Fixer B
  AUDIT-REPORT.md                              # THE final deliverable
```

### 11.3 v1 Disposition

| v1 File | Disposition |
|---------|-------------|
| SKILL.md (v1) | SUPERSEDED |
| SKILL-v2.md | ABSORBED into new SKILL.md |
| PERCEPTUAL-DEEPENING-PROTOCOL.md | ABSORBED |
| ZONE-SUB-AGENTS.md | SUPERSEDED by dimension model |
| TURBO-ORCHESTRATOR.md | SUPERSEDED |
| QUICK-INVOKE.md | SUPERSEDED by CLAUDE.md routing |
| EMBEDDED-PROMPT.md (v1) | EVOLVED (different content) |
| CLAUDE.md (v1) | EVOLVED (different routing) |
| PERCEPTUAL-AUDIT-LOG-TEMPLATE.md | DROPPED (template bloat) |
| SOUL-DISCOVERIES-TEMPLATE.md | KEPT for v1 only |

---

## 12. VALIDATION CRITERIA

### 12.1 The Bento Grid Litmus Test

The skill passes if and only if it catches the canonical failure: a 4-column bento grid in an 860px container where one column is 130px wide and every word stacks on its own line.

**Specific Requirements:**
- PA-02 must catch the word stacking (text uncomfortable to read)
- PA-06 must catch it explicitly (words stacking vertically)
- PA-14 must catch content-container misfit
- PA-10 (squint test) must reveal lopsided column distribution
- Research Validator must classify container width as CHALLENGEABLE (not LOCKED)
- If Fixers present, fix must increase column room (not reduce font size)
- Weaver must include it in top 3 concerns

### 12.2 Ongoing Metrics

| Metric | Target | Red Flag |
|--------|--------|----------|
| Perception-to-Rule finding ratio | >= 40% perception | < 15% |
| Cold Look accuracy | Gut matches final verdict | Gut says NO, final says SHIP |
| Fix rate parity | >= 30% perception findings fixed | 0% |
| False positive rate | < 20% | |
| Designer concordance | >= 60% overlap with human top-3 | |
| Anti-pattern contamination | < 10% of answers | > 30% |
| Auditor agreement rate | >= 60% overlap on top 3 | < 30% |
| Post-fix improvement | Visual improvement reported | "Just changed a number" |
| WOULD-NOT-SHIP appearance rate | Non-zero per audit | 0% across multiple audits |

### 12.3 Red Flags

- Agents answer PA-01 through PA-05 in under 30 seconds (not really looking)
- Every Cold Look verdict is "YES" (compliant, not honest)
- All Perception Track findings are COULD-BE-BETTER (hedging)
- No WOULD-NOT-SHIP findings ever appear (threshold too high)
- Answers contain CSS properties (rule-checking in disguise)
- Findings copy-pasted across pages (pattern-matching task prompt)
- Escalation rate > 10% (Lock Sheet too aggressive)
- All auditors return zero concerns (spawn adversarial auditor)

### 12.4 The "Would They Tweet It" Test

Would someone screenshot this page and share it as an example of great design? If the answer is "no" after passing all checks, the skill found the gap.

### 12.5 Industry Alignment

| Organization | Method | Alignment |
|-------------|--------|-----------|
| Stripe | Quarterly Product Quality Reviews | Cold Look + Standard Mode |
| Linear | "Screenshot, design on top" | PA-10 + PA-14 |
| Vercel | Content resilience testing | PA-06 + PA-28 |
| Apple | Clarity / Deference / Depth | PA-04, PA-02, PA-12 |
| Google M3 | 46 global studies | PA-01, PA-04 |
| Julie Zhuo | "Throw away constraints" | PA-27 |
| NN/g | Heuristic #8 | PA-19 + PA-09 |

---

## APPENDIX A: QUESTION PROVENANCE

| PA-ID | Primary Source | Additional Sources |
|-------|---------------|-------------------|
| PA-01 | 04 Q-FI-02 | 01 v2 Q53, 03 fresh-eyes |
| PA-02 | 04 Q-RC-01 | 01 v2 Q54, 02 readability science |
| PA-03 | 04 Q-CC-01 | 03 "three dialects," 02 design debt |
| PA-04 | 04 Q-FI-01 | 02 eye-tracking, 05 Material Design 3 |
| PA-05 | 04 Q-ST-01 | 01 v2 Q55, 05 Stripe PQR |
| PA-06 | 04 Q-RC-02 | 03 130px failure, 02 min column width |
| PA-07 | 04 Q-RC-06 | 02 Baymard line-length |
| PA-08 | 04 Q-RC-05 | 02 font size research |
| PA-09 | 04 Q-SB-01 | 02 white space, 03 OD-004 |
| PA-10 | 04 Q-FI-05 | 01 squint test, 05 squint research |
| PA-11 | 04 Q-SB-03 | 02 white space science |
| PA-12 | 04 Q-VH-02 | 02 eye-tracking, visual continuity |
| PA-13 | 04 Q-VH-04 | 03 "page just stops" |
| PA-14 | 04 Q-GL-01 | 03 130px failure |
| PA-15 | 04 Q-GL-03 | 02 alignment science |
| PA-16 | 04 Q-CC-03 | 03 callout dialect |
| PA-17 | 04 Q-CC-04 | 02 visual rhythm |
| PA-18 | 02 color harmony | 01 Section 6.1 |
| PA-19 | 01 Section 6.1 + 03 dark code block | 02 figure-ground |
| PA-20 | 04 Q-FI-06 | 02 designer vs developer perception |
| PA-21 | 04 Q-RP-01 | 01 v2 zone 1, 02 responsive |
| PA-22 | 04 Q-RP-02 | 05 Vercel content resilience |
| PA-23 | 04 Q-RP-03 | 01 v2 Q64-Q69 |
| PA-24 | 01 Section 6.3 | 03 "all look the same" |
| PA-25 | 04 Q-CC-02 | 02 design debt, 05 Stripe trust |
| PA-26 | 01 v2 architectural questioning | 03 860px convention |
| PA-27 | 05 Julie Zhuo Q7 | 03 "130px from scratch" |
| PA-28 | 05 red team design lab | 03 adversarial review |

---

## APPENDIX B: COLD LOOK CALIBRATION EXAMPLES

### Good (perceptual, immediate, visceral):
```
Gut reaction: The page feels confident and spacious, but the bottom
              third seems to run out of energy.
Worst thing:  The narrow column on the left where text is stacking
              vertically -- it looks like a bookmark, not a content area.
Best thing:   The header typography commands attention without shouting.
Ship verdict: YES WITH RESERVATIONS
```

### Bad (analytical, measured, technical):
```
Gut reaction: The layout uses a 4-column grid with appropriate spacing
              and the color palette matches the design system tokens.
Worst thing:  The third grid column computes to approximately 130px
              which is below the minimum recommended width.
Best thing:   The h1 element uses the correct font-family and weight.
Ship verdict: YES
```

The bad example could be written without seeing the page.

### Good Zone Sweep Finding:
```
READABILITY CONCERN: In the "How It Works" section, the right-most
column is so narrow that every word sits alone on its own line.
Reading it feels like reading a shopping list, not a paragraph. The
neighboring column has plenty of room -- the space distribution
feels unfair.
```

### Bad Zone Sweep Finding:
```
READABILITY CONCERN: Column 4 in the bento grid has a computed width
of 130px. At 16px font-size, this yields approximately 8 characters
per line. Recommend increasing grid-template-columns.
```

---

## APPENDIX C: THE SEVERITY SYSTEM THAT KILLED PERCEPTION

This documents the mechanism by which 100% of perceptual findings were filtered out across 7 teams and 100+ agents:

```
Raw Finding: "The page is visually monotonous" (Fresh-Eyes agent)
  --> Classified as: CONCERN (judgment, not binary)
    --> Weaver verdict: "UX observation, not CSS fix"
      --> Fix manifest: NOT INCLUDED (below threshold)
        --> Fix execution: N/A
          --> Final status: "DOCUMENTED" (= permanently ignored)
```

| Phase | Rule Findings | Perception Findings | Rule Fix Rate | Perception Fix Rate |
|-------|--------------|--------------------|--------------|--------------------|
| AD Audit (24+ agents) | 40 (85%) | 7 (15%) | ~100% | 0% |
| OD Comprehensive (~58 agents) | ~69 (78%) | ~20 (22%) | ~100% | ~10% |
| **Combined** | **~109 (82%)** | **~27 (18%)** | **~100%** | **~4%** |

The Perception Track exists to break this pattern.

---

*Final specification complete. 2026-02-10.*
*Synthesized from: 06-skill-synthesis.md, 07-team-architecture.md, 08-visual-protocol.md, 09-research-sovereignty.md, 10-team-integration.md*

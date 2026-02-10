# Visual Auditing Protocol: The Complete Specification

**Author:** visual-designer agent
**Date:** 2026-02-10
**Purpose:** The exact protocol that forces agents to LOOK at rendered pages instead of reading source code. Every section contains the EXACT PROMPT TEXT that visual auditor agents receive.

---

## THE CORE ENFORCEMENT PRINCIPLE

Every protocol step below exists to enforce one behavior: **the agent must react to what it SEES before it can access what it KNOWS.** The protocol creates a temporal barrier between perception and analysis. If an agent can reach source code before completing its perceptual responses, the protocol has failed.

---

## 1. SCREENSHOT PROTOCOL

### 1.1 Viewport Specification

| Viewport | Width | Height | Represents | Priority |
|----------|-------|--------|-----------|----------|
| Desktop | 1440px | 900px | Standard wide monitor | PRIMARY |
| Tablet | 1024px | 768px | Tablet landscape / narrow laptop | SECONDARY |
| Mobile | 768px | 1024px | Tablet portrait / large phone | TERTIARY |

**Why these three:**
- 1440px is the primary design width -- this is where the design is "intended" to live.
- 1024px is the critical squeeze point -- where multi-column layouts start to strain. Research (03-audit-failure-analysis.md) documents that the canonical bento grid failure occurs between 860px and 1100px. This viewport catches it.
- 768px is the responsive threshold -- where layouts must fundamentally restructure. This is where "afterthought responsive" becomes visible.

### 1.2 Screenshot Order

**Always capture in this order:**
1. **1440px first** -- establish baseline perception at the intended width
2. **768px second** -- jump to the narrowest width to create maximum contrast
3. **1024px last** -- the middle viewport is examined last because it reveals squeeze problems that are invisible at the extremes

**Why this order (not sequential narrowing):**
Sequential narrowing (1440 -> 1024 -> 768) creates perceptual anchoring: the agent sees the "good" layout first and evaluates narrower viewports as "acceptable degradations." Jumping from 1440 to 768 creates maximum perceptual contrast, making responsive failures viscerally obvious.

### 1.3 Full-Page vs Viewport-Only

| Mode | When | What |
|------|------|------|
| **Viewport-only** | Cold Look Protocol (first impression) | Captures ONLY what a user sees on landing -- no scrolling |
| **Full-page** | Zone-by-Zone Sweep (detailed audit) | Captures the entire scrollable page as one tall image |

**Minimum screenshots per page per viewport:**
- 1 viewport-only (for Cold Look)
- 1 full-page (for Zone Sweep)
- Total: 2 per viewport x 3 viewports = **6 screenshots minimum per page**

### 1.4 Playwright Screenshot Configuration

**EXACT PROMPT TEXT for screenshot-taking agents:**

```
SCREENSHOT PROTOCOL -- EXACT STEPS

You are about to capture screenshots of a rendered page. Follow these steps
EXACTLY. Do not skip any step. Do not reorder.

STEP 1: NAVIGATE
  await page.goto('[URL]', { waitUntil: 'networkidle' });

STEP 2: WAIT FOR FONTS
  await page.evaluate(() => document.fonts.ready);

  WHY: Without this, fallback fonts render first. The page will look wrong
  because system fonts have different metrics than the intended web fonts.
  Previous audits produced FALSE POSITIVES because agents screenshotted
  before fonts loaded (the "Essence font false positive" from OD Fix
  Execution, Fixer-C).

STEP 3: DISABLE ANIMATIONS
  await page.addStyleTag({
    content: '*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; scroll-behavior: auto !important; }'
  });

  WHY: Scroll-triggered animations hide content behind opacity: 0 and
  transform offsets. Without disabling them, the screenshot shows a page
  where half the content is invisible (the "dead zone false positive"
  from OD Fix Execution, Fixer-C). The opacity: 1 override is critical --
  many animation libraries use opacity as a reveal mechanism.

STEP 4: WAIT FOR LAYOUT STABILITY
  await page.waitForTimeout(500);

  WHY: After disabling animations, some layout recalculations occur.
  500ms allows all forced style recalculations to settle.

STEP 5: SET VIEWPORT AND CAPTURE
  For viewport-only (Cold Look):
    await page.setViewportSize({ width: [WIDTH], height: [HEIGHT] });
    await page.screenshot({
      path: '[OUTPUT_PATH]',
      type: 'png',
      fullPage: false
    });

  For full-page (Zone Sweep):
    await page.setViewportSize({ width: [WIDTH], height: [HEIGHT] });
    await page.screenshot({
      path: '[OUTPUT_PATH]',
      type: 'png',
      fullPage: true
    });

CRITICAL: Always capture viewport-only BEFORE full-page for each width.
The Cold Look must happen on the viewport-only screenshot. If you capture
full-page first, the agent may scroll and contaminate the first impression.
```

---

## 2. THE COLD LOOK PROTOCOL

### 2.1 Purpose

Capture the 50-millisecond verdict (Lindgaard 2006) before analytical contamination. The Cold Look is the closest an agent can get to a user's first impression. It exploits the fact that first impressions are structural -- they respond to shape, balance, weight, and color, not content or correctness.

### 2.2 The Locking Mechanism

**What "locked" means:**
Once the Cold Look responses are written, they are FINAL. They cannot be revised, softened, or withdrawn -- even after the agent reads specifications, convention documents, or source code. The locked response represents the uncontaminated perceptual signal.

**Why locking matters (from 06-skill-synthesis.md):**
Research documents that agents retroactively rationalize perceptual findings when they encounter rule compliance. An agent might see "the code blocks feel alien" (correct perception) but then read a convention that says dark code blocks are specified, and revise to "code blocks are convention-compliant" (perceptual withdrawal). Locking prevents this.

**Enforcement mechanism:**
The Cold Look responses are written to a separate section of the output file BEFORE any other analysis begins. The agent is instructed that modifying this section after writing it constitutes a protocol violation.

### 2.3 Exact Cold Look Sequence

**EXACT PROMPT TEXT for visual auditor agents:**

```
COLD LOOK PROTOCOL -- MANDATORY FIRST ACTION

You have received a viewport-only screenshot of a page at [WIDTH]px.

BEFORE YOU DO ANYTHING ELSE -- before you read any spec, open any file,
or examine any detail -- you must complete this protocol.

STEP 1: CLEAR YOUR ANALYTICAL CONTEXT
  You are NOT an auditor right now. You are a person seeing this page for
  the first time. You have no knowledge of the design system, the
  conventions, or what this page is supposed to look like.

STEP 2: LOOK FOR 5 SECONDS
  Look at the screenshot. Do NOT read the text. Do NOT examine individual
  elements. Absorb the overall SHAPE -- the weight distribution, the color
  balance, the density, the rhythm.

STEP 3: WRITE YOUR COLD LOOK RESPONSES
  Write these four responses IMMEDIATELY. Do not deliberate. Write what
  comes to mind FIRST.

  ┌─────────────────────────────────────────────────────────────────┐
  │ COLD LOOK ([WIDTH]px):                                         │
  │                                                                 │
  │ Gut reaction: [one sentence -- what did you FEEL?]             │
  │                                                                 │
  │ Worst thing: [one element or area -- what would you fix first?]│
  │                                                                 │
  │ Best thing: [one element or area -- what should be protected?] │
  │                                                                 │
  │ Ship verdict: YES / YES WITH RESERVATIONS / NO                 │
  └─────────────────────────────────────────────────────────────────┘

STEP 4: LOCK
  These four responses are now FINAL. You may NOT change them after
  writing. Even if you later discover that a convention explains why
  something looks the way it does, your Cold Look stands as written.

  VIOLATION: If you modify your Cold Look responses at any point during
  the audit, your entire audit is INVALID.

STEP 5: REPEAT FOR EACH VIEWPORT
  Complete the Cold Look independently for each viewport screenshot.
  Do NOT let your 1440px reaction influence your 768px reaction.
  Each viewport is a fresh encounter.
```

---

## 3. ZONE-BY-ZONE VISUAL SWEEP

### 3.1 The Sweep Pattern

After the Cold Look captures the macro impression, the Zone Sweep examines the page systematically. The sweep uses a **top-to-bottom, dimension-layered** approach: scan the full page once per dimension, not once per zone.

**Why dimension-layered, not zone-by-zone:**
Zone-by-zone scanning (examine the header completely, then the hero, then section 1...) causes agents to evaluate each zone in isolation. They miss cross-zone problems: inconsistent spacing between sections, dialect shifts from one zone to the next, rhythm breaks. Dimension-layered scanning forces the agent to look at ONE quality across the ENTIRE page, revealing systemic issues.

### 3.2 The Five Sweep Passes

**EXACT PROMPT TEXT for visual auditor agents:**

```
ZONE-BY-ZONE VISUAL SWEEP -- AFTER COLD LOOK IS COMPLETE

You are now looking at the FULL-PAGE screenshot at [WIDTH]px.
You will scan this page FIVE times. Each scan looks for ONE thing.
Do NOT combine scans. Complete each scan fully before starting the next.

═══════════════════════════════════════════════════════════════════
PASS 1: READABILITY SCAN (top to bottom)
═══════════════════════════════════════════════════════════════════

Scroll your attention from the top of the page to the bottom.
For every text block you encounter, ask:

  "Could I comfortably read this for 10 minutes?"

Look for:
  - Words stacking vertically (one word per line in narrow columns)
  - Text that requires squinting or leaning in
  - Lines so wide your eye loses track returning to the start
  - Text that feels squeezed against its container edges
  - Paragraphs where lines break at awkward points

For each problem found, record:
  READABILITY CONCERN: [where on page] -- [what you see in plain language]

DO NOT reference CSS properties. Describe what you SEE.

═══════════════════════════════════════════════════════════════════
PASS 2: SPATIAL BALANCE SCAN (squint test)
═══════════════════════════════════════════════════════════════════

Blur your vision or mentally defocus so you cannot read any text.
Only the large shapes, blocks of color, and weight distribution remain.

Ask:
  - "Is the page balanced left-to-right and top-to-bottom?"
  - "Is there dead space -- a screen-sized void with nothing in it?"
  - "Does any single section feel heavier than its neighbors?"
  - "Are the margins generous (confident) or anxious (clutching)?"

For each problem found, record:
  SPATIAL CONCERN: [where on page] -- [what you see in plain language]

═══════════════════════════════════════════════════════════════════
PASS 3: HIERARCHY AND FLOW SCAN (trace the eye path)
═══════════════════════════════════════════════════════════════════

Start at the top. Let your eyes move naturally through the page.
At each point, notice:

  - "What draws my eye first? Is that the INTENDED focal point?"
  - "Does my eye flow smoothly, or does it get stuck somewhere?"
  - "Are there elements competing for attention at the same level?"
  - "Does the page have a clear ending, or does it just stop?"

Trace the actual path your eyes take. Record it:
  EYE PATH: [element 1] -> [element 2] -> [element 3] -> ...
  FLOW BREAKS: [where the eye gets stuck and why]

═══════════════════════════════════════════════════════════════════
PASS 4: CONSISTENCY SCAN (compare like elements)
═══════════════════════════════════════════════════════════════════

Find pairs of elements that should look identical:
  - Two cards, two callouts, two headings at the same level
  - Two sections with the same structural purpose
  - Repeated patterns (borders, spacing, typography treatment)

Ask:
  - "Do these look like they were made by ONE designer?"
  - "Is there a visual rhythm (like a beat in music)?"
  - "Do all the grays/neutrals feel like the same family?"
  - "Is anything on this page from a different visual language?"

For each inconsistency found, record:
  CONSISTENCY CONCERN: [element A] vs [element B] -- [what differs]

═══════════════════════════════════════════════════════════════════
PASS 5: THE SHIP TEST (professional judgment)
═══════════════════════════════════════════════════════════════════

Step back from auditing. You are now a senior designer.

Ask:
  - "Would I put my name on this page?"
  - "What would I fix if I had 10 more minutes?"
  - "If this were next to Stripe's documentation or Linear's
     marketing page, would I be proud or embarrassed?"
  - "Is there anything I'd have to explain away to a client?"

Record:
  SHIP TEST:
    Name on it: YES / YES WITH CONCERNS / NO
    10-minute fix: [what you would fix]
    Competitor test: [proud / neutral / embarrassed]
    Embarrassment check: [anything you'd need to explain]

═══════════════════════════════════════════════════════════════════
After completing all 5 passes, compile your findings into the
structured output format (see OUTPUT FORMAT section).
═══════════════════════════════════════════════════════════════════
```

---

## 4. "NO SOURCE CODE" ENFORCEMENT

### 4.1 The Absolute Rule

Visual auditors NEVER open CSS, HTML, JavaScript, or any source file. They see ONLY screenshots and rendered pages. If they need to understand WHY something looks the way it does, they ask the Research Contextualizer agent via SendMessage.

### 4.2 Why This Matters

Research (03-audit-failure-analysis.md) documents the mechanism:
1. Agent takes screenshot, notices "this column looks too narrow"
2. Agent opens CSS, sees `grid-template-columns: 1fr 2fr 1fr 3fr`
3. Agent thinks "the grid is intentionally asymmetric per the spec"
4. Agent revises finding to "grid follows specification" -- PASS
5. The column is STILL visually too narrow. The finding was correct. The spec caused the problem.

Opening source code enables **analytical escape**: the agent flees from a perceptual judgment (the column looks wrong) into a rule-checking comfort zone (the column matches spec). The "No Source Code" rule blocks this escape entirely.

### 4.3 Exact Enforcement Language

**EXACT PROMPT TEXT for visual auditor agents:**

```
SOURCE CODE ACCESS -- ABSOLUTE PROHIBITION

You are a VISUAL auditor. You see ONLY what a user would see.

FORBIDDEN ACTIONS (any of these INVALIDATE your audit):
  - Opening any .css file
  - Opening any .html file
  - Opening any .tsx, .jsx, .js, or .ts file
  - Opening any configuration file (tailwind.config, etc.)
  - Using browser DevTools or DOM inspection
  - Running JavaScript to query computed styles
  - Using Grep, Glob, or Read tools on source files
  - Referencing CSS property names in your findings
  - Citing pixel values without visual context
  - Mentioning class names, selectors, or DOM structure

ALLOWED ACTIONS:
  - Looking at screenshots (viewport-only and full-page)
  - Describing what you SEE in plain language
  - Measuring visual relationships BY EYE (not programmatically)
  - Comparing two screenshots side-by-side
  - Asking the Research Contextualizer for context

IF YOU NEED TO UNDERSTAND WHY SOMETHING LOOKS WRONG:
  Send a message to the research-contextualizer agent:

  SendMessage({
    type: "message",
    recipient: "research-contextualizer",
    content: "I see [describe what you see]. Can you tell me what
              in the source code might be causing this? I need the
              context but I must NOT look at the code myself.",
    summary: "Visual auditor requesting context for [element]"
  })

  The research-contextualizer will read the source code, identify
  the cause, and report back to you. You still describe the VISUAL
  problem. They describe the TECHNICAL cause.

QUALITY GATE FOR YOUR FINDINGS:
  A finding PASSES if:
    - It describes a VISUAL experience (looks, feels, seems)
    - It could NOT be generated from source code alone
    - A non-technical person could understand it
    - It references spatial relationships, readability, or weight

  A finding FAILS if:
    - It names CSS properties (border-radius, padding, margin)
    - It cites pixel values without visual context
    - It references source code, class names, or selectors
    - It could be generated without rendering the page

EXAMPLE OF VALID FINDING:
  "The third column in the grid is so narrow that every word sits
   on its own line. Reading this column feels like reading a
   vertical list of individual words, not a paragraph."

EXAMPLE OF INVALID FINDING:
  "grid-template-columns uses 1fr for the third column which
   computes to approximately 130px, below the recommended
   minimum of 200px for text content."

Both describe the same problem. The first is perceptual. The second
is analytical. ONLY the first is acceptable from you.
```

---

## 5. MULTI-VIEWPORT COMPARISON PROTOCOL

### 5.1 Purpose

After the agent has completed Cold Look and Zone Sweep for each viewport independently, the multi-viewport comparison reveals responsive failures that are invisible at any single width.

### 5.2 Comparison Method

**EXACT PROMPT TEXT for visual auditor agents:**

```
MULTI-VIEWPORT COMPARISON -- AFTER ALL SINGLE-VIEWPORT SWEEPS

You have now completed the Cold Look and Zone Sweep for all three
viewports: 1440px, 1024px, and 768px. You have findings for each.

Now compare ACROSS viewports. Look at your three full-page
screenshots side by side (mentally or literally).

═══════════════════════════════════════════════════════════════════
COMPARISON 1: THE SQUEEZE TEST (1440 -> 1024 -> 768)
═══════════════════════════════════════════════════════════════════

Track each major element from widest to narrowest:
  - Does the header degrade gracefully or suddenly collapse?
  - Do multi-column layouts restructure or just compress?
  - Do cards maintain their proportions or become compressed slivers?
  - Does any element look "designed for a different screen"?

For each responsive failure, record:
  RESPONSIVE CONCERN: [element] degrades from [description at 1440]
  to [description at 768]. At 1024px it [squeezes/collapses/overflows].

═══════════════════════════════════════════════════════════════════
COMPARISON 2: THE CONTENT SURVIVAL TEST
═══════════════════════════════════════════════════════════════════

At each viewport, check:
  - Is ALL content from 1440px still VISIBLE at 768px?
  - Is any text that was readable at 1440px now unreadable at 768px?
  - Are there elements that disappear entirely (not collapsed, GONE)?
  - Does any element that made sense at 1440px become nonsensical
    at 768px (e.g., a wide table squeezed into a phone-width column)?

═══════════════════════════════════════════════════════════════════
COMPARISON 3: THE IDENTITY SURVIVAL TEST
═══════════════════════════════════════════════════════════════════

Looking at the page at 768px ALONE (without reference to wider views):
  - Does this page look DESIGNED for this width, or does it look
    like a wider page that was reluctantly squeezed?
  - Would a user at this width feel SERVED or PUNISHED?
  - Does the page maintain its visual IDENTITY at this width, or
    does it become a generic single-column layout?

═══════════════════════════════════════════════════════════════════
COMPARISON 4: THE COLD LOOK RECONCILIATION
═══════════════════════════════════════════════════════════════════

Review your three Cold Look verdicts:
  - 1440px Cold Look: [your locked verdict]
  - 1024px Cold Look: [your locked verdict]
  - 768px Cold Look: [your locked verdict]

If the verdicts differ (e.g., YES at 1440, NO at 768), the
difference reveals the viewport where the design breaks.
Document which viewport is the weakest and why.

CROSS-VIEWPORT VERDICT:
  Strongest viewport: [width] -- why?
  Weakest viewport: [width] -- why?
  The design breaks at: [approximate width] because [what happens]
```

---

## 6. ITERATIVE FIX VERIFICATION PROTOCOL

### 6.1 Purpose

After a fixer agent makes changes to address a perceptual finding, the visual auditor must re-examine the SPECIFIC area that was fixed to confirm the fix LOOKS better, not just that the code changed.

### 6.2 The Re-Examination Protocol

**EXACT PROMPT TEXT for visual auditor agents during fix verification:**

```
FIX VERIFICATION -- RE-EXAMINATION PROTOCOL

A fixer agent has modified [ELEMENT/AREA] to address your finding:
  "[YOUR ORIGINAL FINDING TEXT]"

You are about to see a NEW screenshot of the page after the fix.

═══════════════════════════════════════════════════════════════════
STEP 1: FRESH COLD LOOK ON THE FIXED AREA
═══════════════════════════════════════════════════════════════════

Look at the new screenshot. Focus on the area that was fixed.
WITHOUT comparing to the old screenshot, answer:

  Does this area look RIGHT to you now?
  Not "did the code change" -- does it LOOK BETTER?

Record:
  FIX COLD LOOK: [what you see now -- plain language]

═══════════════════════════════════════════════════════════════════
STEP 2: BEFORE/AFTER COMPARISON
═══════════════════════════════════════════════════════════════════

Now compare the old screenshot to the new screenshot:

  - Is the original problem VISUALLY resolved?
  - Has the fix introduced any NEW visual problems?
  - Does the fixed element now look consistent with its neighbors?
  - Has the fix changed the visual weight or balance of the page?

Record:
  BEFORE: [what it looked like -- from your original finding]
  AFTER: [what it looks like now]
  ORIGINAL PROBLEM RESOLVED: YES / PARTIALLY / NO
  NEW PROBLEMS INTRODUCED: YES (list) / NO

═══════════════════════════════════════════════════════════════════
STEP 3: CONTEXT CHECK
═══════════════════════════════════════════════════════════════════

Look at the SURROUNDING area (not just the fixed element):

  - Does the fix improve the fixed area but break something nearby?
  - Does the fix create a NEW inconsistency with similar elements?
  - If two callouts were mismatched before and one was fixed,
    do they BOTH look right now?

Record:
  CONTEXT IMPACT: [any effects on surrounding elements]

═══════════════════════════════════════════════════════════════════
STEP 4: VERDICT
═══════════════════════════════════════════════════════════════════

  FIX VERDICT: CONFIRMED / PARTIAL / FAILED / REGRESSED

  CONFIRMED: The fix resolved the original problem with no side effects.
  PARTIAL: The fix improved the problem but did not fully resolve it.
  FAILED: The fix did not visibly change the problem.
  REGRESSED: The fix made the problem worse or created new problems.

If PARTIAL, FAILED, or REGRESSED:
  REMAINING ISSUE: [what still needs to be addressed]
  SUGGESTED APPROACH: [what the fixer should try next -- described
    in VISUAL terms, not CSS terms]
```

---

## 7. SCREENSHOT NAMING AND STORAGE

### 7.1 Naming Convention

```
[PAGE-ID]-[VIEWPORT]-[TYPE]-[TIMESTAMP].png
```

| Component | Values | Example |
|-----------|--------|---------|
| PAGE-ID | The exploration ID (AD-001, OD-003, etc.) or page name | `AD-001` |
| VIEWPORT | `1440`, `1024`, `768` | `1440` |
| TYPE | `viewport` (Cold Look) or `fullpage` (Zone Sweep) or `fix-N` (fix verification) | `viewport` |
| TIMESTAMP | Unix timestamp or ISO date-hour | `1707580800` |

**Examples:**
```
AD-001-1440-viewport-1707580800.png      # Cold Look at 1440px
AD-001-1440-fullpage-1707580800.png      # Zone Sweep at 1440px
AD-001-768-viewport-1707580800.png       # Cold Look at 768px
AD-001-768-fullpage-1707580800.png       # Zone Sweep at 768px
AD-001-1440-fix-1-1707581400.png         # After first fix, 1440px
AD-001-1440-fix-2-1707582000.png         # After second fix, 1440px
```

### 7.2 Storage Location

```
docs-spa/app/showcase/_perceptual-audit/
  screenshots/
    [EXPLORATION-ID]/           # One folder per exploration
      AD-001-1440-viewport-*.png
      AD-001-1440-fullpage-*.png
      ...
  findings/
    [EXPLORATION-ID]/           # One folder per exploration
      cold-look.md              # All locked Cold Look responses
      sweep-findings.md         # All Zone Sweep findings
      comparison-findings.md    # Multi-viewport comparison
      fix-verification.md       # Fix verification results
  synthesis/
    cross-page-comparison.md    # Cross-page consistency findings
    audit-summary.md            # Final synthesis of all findings
```

### 7.3 Screenshot Retention

- **Cold Look screenshots:** Keep forever (they are evidence)
- **Zone Sweep screenshots:** Keep until audit is closed
- **Fix verification screenshots:** Keep the FINAL version; delete intermediates after audit closes
- **Never delete a screenshot that is referenced by a finding**

---

## 8. PLAYWRIGHT CONFIGURATION

### 8.1 Base Configuration

**EXACT PROMPT TEXT for agents setting up Playwright:**

```
PLAYWRIGHT CONFIGURATION -- EXACT SETTINGS

Before any visual auditing begins, the page must be served via HTTP.
Playwright blocks the file:// protocol (documented lesson from Phase 2A).

═══════════════════════════════════════════════════════════════════
STEP 1: START HTTP SERVER
═══════════════════════════════════════════════════════════════════

  Before spawning any visual auditor agents, the Lead must start
  an HTTP server:

  cd [EXPLORATION_DIRECTORY]
  python3 -m http.server 8080 &

  Verify it is running:
  curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/

  Expected: 200

  CRITICAL: Start this BEFORE spawning visual agents. If agents
  try to use Playwright before the server is running, they will
  fail silently and fall back to source-code analysis (which
  VIOLATES the No Source Code rule).

═══════════════════════════════════════════════════════════════════
STEP 2: BROWSER CONFIGURATION
═══════════════════════════════════════════════════════════════════

  Use Chromium (the Playwright MCP default).
  No special launch flags are needed.

  Navigate to: http://localhost:8080/[FILENAME].html

═══════════════════════════════════════════════════════════════════
STEP 3: VIEWPORT SETTINGS
═══════════════════════════════════════════════════════════════════

  Desktop:
    await page.setViewportSize({ width: 1440, height: 900 });

  Tablet:
    await page.setViewportSize({ width: 1024, height: 768 });

  Mobile:
    await page.setViewportSize({ width: 768, height: 1024 });

  IMPORTANT: Set viewport BEFORE navigating for the most accurate
  rendering. If you set viewport after navigation, some responsive
  CSS may not re-evaluate correctly.

═══════════════════════════════════════════════════════════════════
STEP 4: FONT LOADING (CRITICAL)
═══════════════════════════════════════════════════════════════════

  After navigation:
    await page.evaluate(() => document.fonts.ready);

  This waits for ALL web fonts to finish loading. Without this:
  - Fallback fonts render with different metrics
  - Font-size and line-height produce different column widths
  - Headlines may be measured as the wrong weight
  - Previous audit produced a FALSE POSITIVE because the agent
    checked fonts before document.fonts.ready resolved (the
    "Essence font" false positive from OD audit Fix #1)

═══════════════════════════════════════════════════════════════════
STEP 5: ANIMATION DISABLING (CRITICAL)
═══════════════════════════════════════════════════════════════════

  After font loading:
    await page.addStyleTag({
      content: `
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
      `
    });

  CRITICAL NOTES:
  - opacity: 1 !important is ESSENTIAL. Many animation libraries
    initialize elements at opacity: 0 and reveal them on scroll.
    Without this override, half the page content may be invisible.
  - transform: none !important removes scroll-triggered transforms
    (translateY, scale) that can hide or reposition content.
  - Previous audit documented a "dead zone" that was actually
    content hidden behind scroll animation that had not triggered
    (OD Fix Execution, Fix #7 investigation).

═══════════════════════════════════════════════════════════════════
STEP 6: LAYOUT STABILIZATION WAIT
═══════════════════════════════════════════════════════════════════

  After style injection:
    await page.waitForTimeout(500);

  This ensures forced style recalculations from the animation
  override have completed before screenshots are taken.

═══════════════════════════════════════════════════════════════════
STEP 7: PLAYWRIGHT CONTENTION HANDLING
═══════════════════════════════════════════════════════════════════

  KNOWN ISSUE: Only one agent can control the Playwright browser
  at a time. The Playwright MCP is a shared resource.

  MITIGATION STRATEGIES (from team lessons):
  - Sequential, not parallel: Visual auditors take turns using
    Playwright. One agent captures ALL its screenshots, then the
    next agent takes over.
  - Batch by viewport: Agent A captures all 1440px screenshots for
    all pages. Agent B captures all 768px screenshots. This
    minimizes viewport switching overhead.
  - Capture-then-analyze: Each agent captures ALL its screenshots
    in one Playwright session, THEN releases Playwright and
    analyzes the screenshots offline. This keeps the shared
    resource available.

  IF PLAYWRIGHT IS UNAVAILABLE:
  - The agent WAITS. It does NOT fall back to source code analysis.
  - The agent sends a message to the lead: "Playwright unavailable,
    waiting for access."
  - If the wait exceeds 5 minutes, the lead may reassign the
    screenshot-taking task to an agent that already has screenshots.
```

---

## 9. COMPLETE OUTPUT FORMAT

### 9.1 Per-Page Audit Output

**EXACT PROMPT TEXT for visual auditor output format:**

```
OUTPUT FORMAT -- STRUCTURE YOUR FINDINGS EXACTLY LIKE THIS

═══════════════════════════════════════════════════════════════════
PERCEPTUAL AUDIT: [PAGE-ID]
Date: [DATE]
Auditor: [AGENT-NAME]
Mode: [Embedded / Quick / Standard / Standalone]
═══════════════════════════════════════════════════════════════════

── COLD LOOK RESPONSES (LOCKED -- DO NOT MODIFY) ──────────────

1440px:
  Gut reaction: [one sentence]
  Worst thing: [one element or area]
  Best thing: [one element or area]
  Ship verdict: [YES / YES WITH RESERVATIONS / NO]

1024px:
  Gut reaction: [one sentence]
  Worst thing: [one element or area]
  Best thing: [one element or area]
  Ship verdict: [YES / YES WITH RESERVATIONS / NO]

768px:
  Gut reaction: [one sentence]
  Worst thing: [one element or area]
  Best thing: [one element or area]
  Ship verdict: [YES / YES WITH RESERVATIONS / NO]

── ZONE SWEEP FINDINGS ────────────────────────────────────────

PASS 1 -- READABILITY:
  [numbered findings with location and plain-language description]

PASS 2 -- SPATIAL BALANCE:
  [numbered findings with location and plain-language description]

PASS 3 -- HIERARCHY AND FLOW:
  Eye Path: [element] -> [element] -> [element] -> ...
  Flow Breaks: [numbered list]

PASS 4 -- CONSISTENCY:
  [numbered findings comparing specific element pairs]

PASS 5 -- SHIP TEST:
  Name on it: [YES / YES WITH CONCERNS / NO]
  10-minute fix: [description]
  Competitor test: [proud / neutral / embarrassed]
  Embarrassment check: [description]

── MULTI-VIEWPORT COMPARISON ──────────────────────────────────

Squeeze Test: [findings]
Content Survival: [findings]
Identity Survival: [findings]
Cold Look Reconciliation:
  Strongest viewport: [width] -- [why]
  Weakest viewport: [width] -- [why]
  Design breaks at: [approximate width] -- [what happens]

── RANKED CONCERNS ────────────────────────────────────────────

TOP 3 CONCERNS (by visual impact):

1. [SEVERITY] [location] -- [description]
   Viewport(s) affected: [which]

2. [SEVERITY] [location] -- [description]
   Viewport(s) affected: [which]

3. [SEVERITY] [location] -- [description]
   Viewport(s) affected: [which]

Severity uses the PERCEPTION TRACK:
  WOULD-NOT-SHIP: A designer would refuse to release this.
  LOOKS-WRONG: Something is visually off, needs attention.
  COULD-BE-BETTER: Polish opportunity, not blocking.

── VERDICT ────────────────────────────────────────────────────

OVERALL: SHIP / SHIP WITH CONCERNS / DO NOT SHIP

If SHIP WITH CONCERNS or DO NOT SHIP:
  BLOCKING ISSUES: [list of WOULD-NOT-SHIP findings]
  RECOMMENDED FIXES: [prioritized list, described in VISUAL terms]
```

---

## 10. PROTOCOL VIOLATIONS AND RECOVERY

### 10.1 Violation Detection

The following are protocol violations that invalidate the audit:

| Violation | Detection Signal | Recovery |
|-----------|-----------------|----------|
| **Source code access** | Finding mentions CSS property names, class names, or pixel values without visual context | RESTART the audit. Agent is reassigned or replaced. |
| **Cold Look modification** | Cold Look text differs between initial write and final output | RESTART Cold Look for affected viewport only. |
| **Skipped Cold Look** | No Cold Look section in output, or Cold Look written after Zone Sweep | RESTART entire audit for this page. |
| **Analytical escape** | Agent opens CSS/HTML after screenshot, then revises findings | Strip post-contamination findings. Keep pre-contamination findings. Agent cannot continue. |
| **Playwright fallback** | Agent cannot access Playwright and reads source code instead | INVALID audit. Must wait for Playwright access. |
| **Combined sweep passes** | Agent answers all 5 passes in one undifferentiated block | Agent re-does the sweep, one pass at a time. |

### 10.2 Quality Review Checklist

**EXACT PROMPT TEXT for lead agents reviewing visual audit output:**

```
QUALITY REVIEW CHECKLIST -- FOR LEADS REVIEWING VISUAL AUDITS

Check each item. ANY failure means the audit must be revised or redone.

□ Cold Look section exists and is clearly marked as LOCKED
□ Cold Look responses are brief (1 sentence each), not analytical
□ Cold Look verdict is decisive (not hedged with qualifications)
□ No CSS property names appear ANYWHERE in the findings
□ No pixel values appear without visual context
□ No class names, selectors, or DOM references appear
□ Each Zone Sweep pass is completed separately (5 distinct sections)
□ Findings describe VISUAL experiences, not technical properties
□ A non-technical person could understand every finding
□ The "10-minute fix" is described in visual terms, not code terms
□ Multi-viewport comparison exists (not just 3 independent audits)
□ Top 3 concerns use PERCEPTION TRACK severity (not rule severity)
□ Screenshots are saved with correct naming convention
□ Overall verdict is consistent with the evidence presented
```

---

## 11. INTEGRATION WITH TEAM ROLES

### 11.1 Who Receives Which Protocol Sections

| Agent Role | Protocol Sections They Receive |
|------------|-------------------------------|
| **Visual Auditor** | ALL of Sections 2-6, 9 (Cold Look, Sweep, No Source Code, Comparison, Fix Verification, Output Format) |
| **Lead/Orchestrator** | Section 1 (Screenshot Protocol), Section 7 (Storage), Section 8 (Playwright Config), Section 10 (Quality Review) |
| **Builder/Fixer** | Section 2.3 Cold Look (Embedded Mode only -- 5 questions before declaring done), Section 6 (Fix Verification -- re-examine after fixing) |
| **Research Contextualizer** | Section 4.3 (they are the other end of the "No Source Code" communication channel -- they READ source code so the visual auditor does not have to) |
| **Weaver/Synthesizer** | Section 9 (Output Format -- they consume and synthesize multiple auditors' outputs) |

### 11.2 The Visual Auditor's Full Prompt Injection

**EXACT PROMPT TEXT -- the complete block injected into a visual auditor agent's prompt:**

```
═══════════════════════════════════════════════════════════════════
YOU ARE A VISUAL AUDITOR
═══════════════════════════════════════════════════════════════════

Your job is to LOOK at rendered pages and describe what you SEE.
You are a designer reviewing work, not an engineer checking code.

THE ONE RULE: React to what you see BEFORE you check what you know.

YOUR PROTOCOL (in exact order):

1. COLD LOOK (MANDATORY FIRST ACTION)
   Look at the viewport-only screenshot for 5 seconds.
   Write your gut reaction, worst thing, best thing, ship verdict.
   These responses are LOCKED. You cannot change them later.

2. ZONE-BY-ZONE SWEEP (5 passes on full-page screenshot)
   Pass 1: Readability -- can you comfortably read everything?
   Pass 2: Spatial Balance -- squint test, weight distribution
   Pass 3: Hierarchy and Flow -- where does your eye go?
   Pass 4: Consistency -- do like elements look alike?
   Pass 5: Ship Test -- would you put your name on this?

3. MULTI-VIEWPORT COMPARISON
   Compare 1440px, 1024px, and 768px screenshots side-by-side.
   Identify where the design BREAKS across viewports.

4. RANKED CONCERNS
   Your top 3 visual problems, ranked by impact.
   Use PERCEPTION TRACK severity:
     WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER

ABSOLUTE PROHIBITIONS:
  - You may NOT open any source code file (.css, .html, .tsx, .js)
  - You may NOT use DevTools or DOM inspection
  - You may NOT reference CSS property names in findings
  - You may NOT cite pixel values without visual context
  - If you need to know WHY something looks wrong, ask the
    research-contextualizer agent via SendMessage

YOUR FINDINGS MUST:
  - Describe VISUAL experiences (looks, feels, seems)
  - Be understandable to a non-technical person
  - Reference spatial relationships, readability, and weight
  - Use plain language: heavy, cramped, jarring, floating,
    anxious, confident, broken, polished

YOUR FINDINGS MUST NOT:
  - Name CSS properties (border-radius, padding, font-size)
  - Cite hex values, rgba values, or rem/px measurements
  - Reference class names, selectors, or DOM structure
  - Be answerable from source code alone

If your finding contains ANY technical vocabulary, rewrite it
in human words before including it in your output.

═══════════════════════════════════════════════════════════════════
```

---

## APPENDIX A: COLD LOOK CALIBRATION EXAMPLES

### What Good Cold Look Responses Look Like

**GOOD (perceptual, immediate, visceral):**
```
Gut reaction: The page feels confident and spacious, but the bottom
              third seems to run out of energy.
Worst thing:  The narrow column on the left where text is stacking
              vertically -- it looks like a bookmark, not a content area.
Best thing:   The header typography commands attention without shouting.
Ship verdict: YES WITH RESERVATIONS
```

**BAD (analytical, measured, technical):**
```
Gut reaction: The layout uses a 4-column grid with appropriate spacing
              and the color palette matches the design system tokens.
Worst thing:  The third grid column computes to approximately 130px
              which is below the minimum recommended width.
Best thing:   The h1 element uses the correct font-family and weight.
Ship verdict: YES
```

The bad example could be written without seeing the page. It references grid structure, pixel computation, CSS properties, and token compliance. It reveals an agent in rule-checking mode, not perception mode.

### What Good Zone Sweep Findings Look Like

**GOOD (visual, spatial, experiential):**
```
READABILITY CONCERN: In the "How It Works" section, the right-most
column is so narrow that every word sits alone on its own line.
Reading it feels like reading a shopping list, not a paragraph. The
neighboring column has plenty of room -- the space distribution
feels unfair.
```

**BAD (technical, property-based, measurable):**
```
READABILITY CONCERN: Column 4 in the bento grid has a computed width
of 130px. At 16px font-size, this yields approximately 8 characters
per line, which is below the 30 CPL minimum. Recommend increasing
grid-template-columns to allocate more space.
```

---

## APPENDIX B: PERCEPTUAL SEVERITY vs RULE SEVERITY

The visual auditing protocol uses a SEPARATE severity track from rule-based auditing. These tracks are parallel and independent.

### Rule Track (existing, for automated/programmatic audits)
```
SOUL VIOLATION    --> Binary: violates locked identity rule. Always fix.
CONVENTION BUG    --> Binary: violates specification. Always fix.
OVERFLOW          --> Binary: content escapes container. Usually fix.
INCONSISTENT      --> Judgment: varies from pattern. Sometimes fix.
CONCERN           --> Judgment: might be an issue. Rarely fixed.
NITPICK           --> Judgment: trivial inconsistency. Never fixed.
```

### Perception Track (NEW, for visual audits)
```
WOULD-NOT-SHIP    --> A professional designer would refuse to release
                      this. Requires human review. Cannot be dismissed
                      because "the convention allows it."
LOOKS-WRONG       --> Something is visually off. Not blocking, but it
                      needs attention. Addressed if time permits.
COULD-BE-BETTER   --> Polish opportunity. Documented for future work.
```

### Critical Interaction Rule

A finding can exist on BOTH tracks simultaneously. Example:
- Rule Track: "Border width is 3px (CONVENTION BUG -- spec says 4px)"
- Perception Track: "The borders feel inconsistent across sections (LOOKS-WRONG)"

These are DIFFERENT findings about potentially the SAME underlying issue. The rule track finding is about compliance. The perception track finding is about visual quality. Fixing the rule track finding might or might not resolve the perception track finding.

**Perception track findings can NEVER be dismissed by rule track compliance.** "The convention allows it" is not a valid response to "it looks wrong."

---

*Protocol specification complete. 2026-02-10.*

<!--
===============================================================================
INLINE THREADING HEADER
File: DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-PA-CONVENTIONS.md
Tier: B | Stage: 4 (Axis AD) | Generated: 2026-02-11
Purpose: Convention Ideology Document — captures the REASONING and perceptual
         evidence behind every AD convention, complementing AD-CONVENTION-SPEC.md

BUILT ON: convention-extraction.md (27 conventions), 6x AUDIT-REPORT.md,
          6x fix-report.md, FIX-VERIFICATION-REPORT.md, lock-sheet.md,
          AD-CONVENTION-SPEC.md (rule definitions)
CONSUMED BY: HANDOFF-AD-TO-CD.md, CD builders (Stage 5), future auditors,
             any agent needing to understand WHY a convention exists
===============================================================================
-->

# AD Perceptual Audit Conventions -- Design Ideology

## Why This Document Exists

Convention specifications compress thousands of lines of audit evidence into
terse rules. The AD-CONVENTION-SPEC.md tells CD agents WHAT to do: "use
max-width: 1100px." But the 50:1 compression from agent output to behavioral
constraint means 99.8% of the reasoning is lost. An agent reading only the
spec applies rules mechanically. An agent reading this document understands
the perceptual reality that produced each rule.

This document exists because the user specifically requested that the reasoning
behind conventions be "baked into the provenance chain" so future agents know
WHY, not just WHAT. OD had a convention spec (rules only). AD has BOTH a
convention spec AND this ideology document. Together they form a complete
picture: the spec is the skeleton, this document is the muscle memory.

Every convention below was discovered or reinforced through adversarial
perceptual auditing: 2-4 independent auditors per page, zero prior context,
reporting what they SEE, not what they think the CSS says. When 12+ auditors
across 6 pages independently flag the same problem, that is not opinion -- it
is perceptual evidence.

---

## How to Read This Document

CD agents should read this ALONGSIDE `AD-CONVENTION-SPEC.md`. The spec tells
you WHAT. This document tells you WHY. If the spec says "max-width: 1100px"
and you want to know why 860px was abandoned, this document has the full
narrative with auditor quotes.

Each convention entry has five parts:
1. **Rule** -- the behavioral constraint (matches the spec)
2. **Why** -- narrative reasoning, not bullet points
3. **Evidence** -- specific audit report citations with auditor quotes
4. **CSS Pattern** -- implementation reference where applicable
5. **Authority** -- how strongly this convention is locked

---

## Convention Authority Levels

| Level | Meaning | Modification Conditions |
|-------|---------|------------------------|
| **LOCKED** | Validated by perceptual evidence from ALL 6 pages. Cannot be modified without re-running full perceptual audit across all affected pages. | Requires unanimous counter-evidence from 6+ independent auditors |
| **SOFT-LOCKED** | Strong evidence from 3+ pages, or 1-page finding with 5/5 auditor unanimity. Modification requires PA re-validation on affected pages. | Requires documented perceptual evidence from 3+ independent sources |
| **REINFORCED** | Pre-existing convention validated by PA evidence. Carries both original provenance AND PA validation. | Same conditions as original lock tier, now strengthened by PA confirmation |
| **OPEN** | Established convention based on judgment or single-page evidence. Can be adapted with documented rationale. | Requires rationale document before modification |

---

## I. Universal Conventions (ALL 6 Pages -- LOCKED)

These conventions were independently discovered or validated across every AD
exploration by every auditor team. They represent the strongest perceptual
evidence in the system.

---

### C-01: Container Width 1100px

**Rule:** All page containers use `max-width: 1100px`.

**Why:** The original 860px was established during convention authoring based on
OD precedent. It seemed reasonable on paper. Then six independent perceptual
audit teams -- none of whom had seen each other's work -- all reported the same
observation: at a 1440px viewport, the 860px container left approximately 40%
of the screen as unused cream margins. The content felt "cramped," "narrow,"
and "undermined its own message."

AD-003's Beta auditor put it most sharply: "For a page demonstrating bento
grid layouts, this narrow tube undermines the content's own message." AD-001's
Alpha similarly observed that "content column occupies roughly sixty percent
of the viewport width." AD-002's Alpha noted the content occupied "~60% of
1440px viewport, leaving ~40% unused."

After the first audit cycle produced these findings, the user intervened
directly: "WHY IS THE WIDTH SO NARROW ON ALL OF THESE." This was the clearest
signal possible that the convention had failed the perceptual test.

The fix to 1100px uses ~76% of a 1440px viewport. The existing
`p { max-width: 70ch }` rule (C-20) prevents prose lines from becoming
uncomfortably long. Grid layouts benefit from the wider container without
sacrificing readability.

**Evidence:** AD-001 AUDIT-REPORT LW-02, AD-002 AUDIT-REPORT F-004, AD-003
AUDIT-REPORT LW-3, AD-005 AUDIT-REPORT MF-005, AD-006 AUDIT-REPORT MF-005.
User intervention documented in `_skill-evolution/failure-analysis.md`.
FIX-VERIFICATION-REPORT confirms all 6 pages pass at 1100px.

**CSS Pattern:**
```css
.header-inner { max-width: 1100px; margin: 0 auto; }
.page-container { max-width: 1100px; margin: 0 auto; }
```

**Authority:** LOCKED -- unanimous 6/6 pages, user intervention, post-fix
verification PASS.

---

### C-02: Visual Page Ending Required

**Rule:** Every page MUST end with a visual terminus element. The page MUST NOT
trail off into empty cream space.

**Why:** This was the single most consistently flagged finding across the entire
AD perceptual audit corpus. Every page "just stopped." There was no footer, no
bookend, no signal that the content was complete. Readers encountered a wall of
empty cream and had no way to distinguish "the page is over" from "the page
failed to load."

The language auditors used tells the story. AD-001: "~1,800px empty tail"
(Beta, CRITICAL). AD-002: "~3,700px blank void... a page about F-pattern
reading physics that itself fails the most basic reading physics test" (Beta).
AD-003: "~4,000-6,000px catastrophic dead space" (both auditors). AD-004:
"approximately FOUR consecutive screens of nothing... the page just stops...
TWICE" (Beta, CRITICAL). AD-005: "MASSIVE dead zones ~2 viewport heights"
(3-auditor concordance). AD-006: "no visual closure" (Auditor D).

The fix pattern that emerged across all 6 independent fix agents was
remarkably consistent: a footer element that mirrors the header's visual
weight, creating a "bookend" frame around the page content. The footer says
"you have reached the end" the same way a period ends a sentence.

**Evidence:** AD-001 AUDIT-REPORT LW-01, AD-002 AUDIT-REPORT F-001 (CRITICAL),
AD-003 AUDIT-REPORT WNS-1, AD-004 AUDIT-REPORT LW-4, AD-005 AUDIT-REPORT
LW-3 (FAIL verdict), AD-006 AUDIT-REPORT MF-004. FIX-VERIFICATION-REPORT:
all 6 pages show footer present with zero dead space after.

**CSS Pattern:**
```css
.page-footer {
  border-top: 3px solid var(--color-border); /* Cat 1 structural */
  padding: var(--space-8) 0;
  max-width: 1100px;
  margin: 0 auto;
}
```

**Authority:** LOCKED -- unanimous 6/6 pages. This is a TEMPLATE-LEVEL gap:
the convention spec did not require a footer, so none was built. Section 17
of AD-CONVENTION-SPEC now mandates it.

---

### C-03: Dead Space Elimination

**Rule:** No blank zones exceeding ~300px vertical height between content
sections. The page MUST NOT contain cream voids exceeding one-third of a
viewport height.

**Why:** Dead space was the #1 or #2 finding on every single audit. The
severity language escalated page by page as auditors encountered it
independently. AD-001's Alpha called it "cavernous dead space." AD-002's Beta
called the 3,700px void "deeply ironic: a page about F-pattern reading
physics that itself fails the most basic reading physics test." AD-003's
Alpha found "approximately 4,000 pixels of blank space -- nearly 5 empty
viewports of nothing." AD-004's Beta encountered "approximately FOUR
consecutive screens of nothing" and rated it CRITICAL because "catastrophic
for engagement." AD-005 had 3-auditor concordance on "MASSIVE dead zones ~2
viewport heights." AD-006 had 5/5 UNANIMOUS agreement on "multiple
full-viewport blanks."

The perceptual problem is not merely aesthetic. Dead space creates a "broken
page" perception. Users encountering multi-viewport blank stretches conclude
the page failed to load or was abandoned mid-authoring. The scholarly,
deliberate editorial identity degrades to "unfinished."

The fixes followed a consistent pattern: reduce chapter divider heights from
`--space-12` to `--space-8`, reduce section padding from `--space-20` to
`--space-16`, remove hidden duplicate sections, and tighten closing statement
spacing. Net reductions ranged from 300px to 1,600px per page.

**Evidence:** ALL 6 AUDIT-REPORTs flag dead space as the primary or secondary
finding. AD-001 LW-01/LW-02, AD-002 F-001, AD-003 WNS-1, AD-004 WNS-2,
AD-005 LW-1, AD-006 MF-003. All 6 fix reports document reductions.

**CSS Pattern:** Section gaps capped via token reduction:
```css
/* Before: excessive */
.chapter-divider { height: var(--space-12); margin: var(--space-12) 0; }

/* After: tightened */
.chapter-divider { height: var(--space-8); margin: var(--space-8) 0; }
```

**Authority:** LOCKED -- unanimous 6/6 pages, highest-severity finding across
the corpus.

---

### C-04: Footer Border -- 3px Cat 1 Structural

**Rule:** Footer elements MUST use `border-top: 3px solid var(--color-border)`
or `border-top: 3px solid var(--color-primary)`. Never 2px (violates border-
weight hierarchy). Never 1px (too subtle for a structural terminus).

**Why:** The 3px border on the footer is not arbitrary. It echoes the header's
3px red bottom border, creating a visual bookend that frames the entire page.
This 3px weight was chosen because it sits in the Cat 1 (structural) tier of
the border system -- the same tier as chapter dividers, section boundaries, and
the header itself. Using 2px would violate the banned-2px rule. Using 1px
would make the footer border indistinguishable from data separators (Cat 2),
undermining its structural role as a page terminus.

**Evidence:** All 6 fix reports independently adopted the 3px border pattern.
AD-001 fix: "border-top: 3px solid var(--color-border) -- structural Cat 1
border as visual terminus." AD-006 fix: "Top border matching header's bottom
border (3px solid var(--color-primary))."

**CSS Pattern:**
```css
border-top: 3px solid var(--color-border);   /* neutral option */
border-top: 3px solid var(--color-primary);  /* red, matching header */
```

**Authority:** LOCKED -- emerged consistently from 6 independent fix agents.

---

### C-05: Responsive Padding Reduction at 768px

**Rule:** At `@media (max-width: 768px)`, reduce header and container padding.
Footer stacks vertically with centered text.

**Why:** Multiple audit findings across different pages flagged cramped content
at 768px. The problem was not that the layout broke -- it was that the desktop
padding values consumed too much of the already-limited viewport width. AD-001
flagged "overview grid cards feel squeezed." AD-002 noted "columns should
likely collapse to a single column at this breakpoint." AD-004 found "text
clipping at 768px" in side-by-side panels. AD-005 discovered "the page
renders identically at 1440px, 1024px, and 768px" -- meaning zero responsive
adaptation had been implemented.

The fix pattern reduces padding from `--space-16 --space-8` (64px 32px) to
`--space-8 --space-4` (32px 16px) at 768px, giving content more horizontal
room. Footer elements switch from side-by-side flex to vertical stack.

**Evidence:** AD-001 AUDIT-REPORT LW-04, AD-002 AUDIT-REPORT F-005, AD-004
AUDIT-REPORT WNS-1, AD-005 AUDIT-REPORT LW-2. All 6 fix reports added or
improved responsive padding.

**CSS Pattern:**
```css
@media (max-width: 768px) {
  .header-inner { padding: var(--space-8) var(--space-4); }
  .page-container { padding: var(--space-8) var(--space-4); }
  .page-footer__inner {
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);
  }
}
```

**Authority:** LOCKED -- validated across 6/6 pages.

---

### C-06: Soul Compliance -- Zero Violations Across All Fixes

**Rule:** ALL fixes MUST introduce ZERO soul violations. The 7-point soul
checklist MUST be verified before any change is committed.

**Why:** The soul is the identity. Every design system has aesthetic
preferences, but this system's soul is different: it emerged from empirical
perceptual research, not taste. The ANTI-PHYSICAL identity (no rounded
corners, no shadows, no depth illusion) was validated through 20 independent
SOUL FAIL tests across 20 explorations. The font trio was locked through
component-level research. The palette was locked through T1 token
specification.

During the AD perceptual audit, every auditor on every page checked soul
compliance. The result was definitive: ZERO violations across 6 pages, checked
by 2-4 independent auditors each, spanning ~13,000+ DOM elements. The
FIX-VERIFICATION-REPORT confirmed: "ZERO violations across all 6 files (no
border-radius, no box-shadow, no drop-shadow in source)."

This convention is not merely about maintaining consistency. It is about
preserving the perceptual identity that makes the system recognizable. A single
`border-radius: 4px` on a callout (flagged on AD-002 as FIX-001) would break
the rectilinear geometry that every auditor praised as "confident," "assured,"
and "deliberate."

**Evidence:** All 6 AUDIT-REPORTs Section 2 (Soul Compliance). All 6
fix-reports confirm zero violations introduced. FIX-VERIFICATION-REPORT
confirms zero violations post-fix.

**Authority:** REINFORCED -- already ALWAYS-LOCKED. PA provides the strongest
validation: 12+ independent auditors, 6 pages, zero violations.

---

### C-11: Breathing Zone Ceiling (15-25%)

**Rule:** Breathing zones must be >= 15% of page height (floor) but MUST NOT
exceed ~25% (ceiling). No single breathing zone should exceed 300px.

**Why:** The original convention specified only a 15% floor -- a minimum amount
of whitespace to prevent pages from feeling cramped. What the convention did
NOT specify was a ceiling. The AD audit revealed why ceilings matter as much
as floors.

All 6 audits flagged EXCESSIVE breathing as a problem. AD-006's adversarial
analysis quantified it: "Breathing zone budget >= 15%... Actual breathing may
be 30-40%+ due to dead space accumulation." AD-004's Alpha observed "more
than half the viewport is empty warm cream." AD-005 had 3-auditor concordance
that the dead zones "read as empty rather than as breathing space."

The distinction between "breathing" and "dead" is perceptual, not structural.
A 48px divider between related sections feels like a pause. A 300px+ void
between sections feels like the page is broken. The 25% ceiling and 300px
per-zone cap prevent the "is the page broken?" experience while preserving
the density oscillation (PULSE/WAVE) that defines the system's rhythm.

**Evidence:** AD-006 AUDIT-REPORT adversarial Challenge 4. AD-004 AUDIT-REPORT
WNS-2 (Beta CRITICAL). AD-005 AUDIT-REPORT LW-1 (3-auditor concordance).
AD-CONVENTION-SPEC Section 8 (DM-005 amendment).

**Authority:** LOCKED -- the floor was already locked; the ceiling is now
locked based on unanimous 6/6 evidence.

---

### C-14: Warm Neutral Palette Cohesion

**Rule:** ALL colors on the page MUST belong to the warm cream/tan/charcoal
family. No cool grays, no blue-blacks, no cool-toned neutrals.

**Why:** The warm palette is not a preference -- it is the perceptual signature
of the system. Every auditor across all 6 pages confirmed cohesion with zero
temperature violations. AD-001 Beta: "All the neutrals feel warm and
cohesive... I did not detect any cool-toned outlier." AD-003: "Warm Neutral
Palette Cohesion -- zero palette violations." AD-004: "every neutral, every
background, every border lives in the same warm cream/tan family." AD-006
Auditor A: "No jarring cool gray anywhere."

The significance is that 12+ independent auditors, examining different pages
with different layouts and different content, all perceived the same warmth.
This unanimity demonstrates that the palette tokens produce a consistent
perceptual result across diverse applications -- the definition of a working
design system.

**Evidence:** All 6 AUDIT-REPORTs confirm zero palette temperature violations.

**Authority:** REINFORCED -- already locked via colors.md T1. PA validation is
the strongest confirmation: 12+ independent observers, zero violations.

---

### C-15: Typography Trio Compliance

**Rule:** ONLY three fonts: Instrument Serif (display/headings/questions/
Essence), Inter (body/answers), JetBrains Mono (code/meta/labels).

**Why:** The trio creates three distinct voices that readers learn to
distinguish: the authoritative serif for editorial content, the neutral sans
for explanatory body text, and the technical mono for code and metadata. Every
auditor on every page confirmed the trio. AD-001 Alpha: "serif/sans-serif
pairing is consistently applied and clearly intentional." AD-004: "Display
serif, body sans, mono for meta/code -- consistent."

The ONLY finding related to the trio was AD-001's LW-03, where the metadata
card's monospaced voice felt like "a terminal dump." But JetBrains Mono IS in
the locked trio -- the issue was not a wrong font, but a design question about
where mono is appropriate. This finding reinforces rather than challenges the
trio: the font is correct, the application context warranted discussion.

**Evidence:** All 6 AUDIT-REPORTs confirm zero font violations.

**Authority:** REINFORCED -- locked via typography.md T1. Zero violations across
6 pages and 12+ auditors.

---

### C-16: Dark Header Convention

**Rule:** Every page MUST have a dark full-bleed header with
`background: var(--color-text)` (#1A1A1A), cream text, and
`border-bottom: 3px solid var(--color-primary)` (red).

**Why:** The dark header was unanimously praised as the strongest visual
element across the entire audit corpus. Not one auditor on any page
criticized it. AD-001 Alpha called it "commanding." AD-001 Beta said it
conveyed "immediate authority and personality." AD-003 Beta found "real
presence and gravitas." AD-004 Alpha: "Clean, authoritative, well-
proportioned." AD-006 had 4/4 auditors praise "The Convergence" title
typography.

This is significant because auditors were explicitly instructed to be
adversarial -- to find problems. The header survived adversarial scrutiny
from 20+ independent reviewers without a single negative finding. That level
of unanimous praise is exceptionally rare in the audit corpus and signals
that the dark header pattern is not just acceptable but exemplary.

**Evidence:** All 6 AUDIT-REPORTs confirm header praised. Zero negative
header findings in any audit.

**Authority:** REINFORCED -- the single most-praised element across the
entire audit corpus.

---

### C-22: Page Personality -- "Scholarly, Deliberate, Warm"

**Rule:** The page personality MUST read as "Scholarly, Deliberate, Warm" at
1440px. At 768px, it MUST NOT degrade to "Cramped" or "Unfinished."

**Why:** The three-word personality descriptor was not invented by a
designer -- it was independently discovered by auditors. AD-001 Beta's
perceptual assessment landed on "Scholarly. Deliberate. Warm." AD-004
confirmed "genuinely strong typographic presence... scholarly character."
AD-005 described it as "unhurried, architectural, confident." AD-006 at
1440px aligned: "Scholarly, Deliberate, Warm."

But AD-006 at 768px told a different story: "Scholarly, Cramped,
Unfinished." The personality DEGRADED at narrow viewports because
responsive conventions had not been implemented. This single observation --
tracking how personality changes across viewports -- drove the responsive
convention fixes (C-05, C-08, C-25).

The three words function as a perceptual litmus test: if an agent builds a
page and it does not feel "Scholarly, Deliberate, Warm," something is wrong
even if every token is technically correct.

**Evidence:** AD-001 AUDIT-REPORT Beta PA-20. AD-004 AUDIT-REPORT Alpha.
AD-005 AUDIT-REPORT Auditor A. AD-006 AUDIT-REPORT cold looks (1440px vs
768px contrast).

**Authority:** REINFORCED -- independently confirmed by multiple auditors
across multiple pages.

---

### C-23: Footer Mirrors Header Design Language

**Rule:** Footer elements MUST echo the header's design language: same border
weight (3px), same color family, same typography tokens.

**Why:** No one told the fix agents to mirror the header. Six independent
fixers -- working on different pages without seeing each other's work -- all
independently converged on the same pattern: make the footer echo the header.
AD-001's fixer wrote: "footer identifier echoes the header meta-line,
creating bookend framing." AD-002's fixer built "dark footer matching
header... 3px red border echoes header's bottom border." AD-005's fixer added
a "red rule echoes the header's 3px red bottom border." AD-006's fixer
created a footer that "mirrors the opening header band."

This convergence from independent agents is the strongest possible evidence
that header-mirroring is a natural design principle, not an arbitrary choice.
When six agents independently arrive at the same solution, the solution is
likely correct.

**Evidence:** All 6 fix-reports describe header-mirroring in footer design.
FIX-VERIFICATION-REPORT confirms all 6 footers present.

**Authority:** LOCKED -- emerged independently from 6 parallel fix agents with
zero coordination.

---

### C-26: Cross-Page Family DNA

**Rule:** All 6 AD pages MUST share recognizable sibling resemblance: same
header convention, same callout vocabulary, same color family, same typography
trio, same soul rules.

**Why:** Each AD page explores a different axis pattern -- Z-Pattern, F-Pattern,
Bento Grid, Spiral, Choreography, Compound. Despite these structural
differences, auditors consistently perceived the pages as siblings rather than
strangers. AD-005 Auditor D: "AD-005, AD-006, AD-003 share core visual DNA;
differences are content-appropriate." AD-006: "Strong sibling resemblance with
AD-001 and AD-003." AD-004: "Feels like a single, intentional design voice."

This is the whole point of a design system: structural diversity within
perceptual unity. The soul rules and token system produce pages that look
different in layout but identical in character. The audit validated that this
goal is achieved.

**Evidence:** AD-005 AUDIT-REPORT Auditor D PA-24. AD-006 AUDIT-REPORT
cross-page analysis. AD-004 AUDIT-REPORT Alpha.

**Authority:** REINFORCED -- validated across 6 structurally different pages.

---

## II. Responsive Conventions (Discovered Through PA)

These conventions address how pages behave at narrow viewports. Before the
perceptual audit, most AD pages had minimal or zero responsive adaptation.

---

### C-08: 960px Early Collapse for 4+ Column Grids

**Rule:** Grids with 4+ columns MUST collapse to single-column at
`max-width: 960px`, not 768px.

**Why:** This convention was born from a locked convention conflict -- one of
the most instructive moments in the audit. The existing convention (S12.5)
locked responsive collapse at 768px. The bento grid convention (AD-F-009)
required grid cells to be readable. Between 960px and 768px, these two locked
decisions produced a catastrophic outcome: bento grid text collapsed to single
characters stacked vertically.

AD-006's audit produced the clearest evidence. MF-002 achieved 5/5 UNANIMOUS
agreement at WOULD-NOT-SHIP severity: "Bento grid text collapses to single-
character-per-line vertical stacking at viewports below ~960px. The LOCKED
768px responsive collapse fires 130+ units too late." The adversarial agent
confirmed the cliff pattern: at 960px the grid works, at 900px text renders
vertically, at 768px the grid is catastrophically broken.

The resolution was to add a SECOND breakpoint specifically for complex grids.
Simple 2-3 column grids still collapse at 768px. But 4+ column grids
collapse at 960px, 130px earlier, preventing the text destruction zone.

**Evidence:** AD-006 AUDIT-REPORT MF-002 (5/5 UNANIMOUS, WOULD-NOT-SHIP).
Lock-sheet.md lines 53, 63 (LOCKED CONFLICT documentation).

**CSS Pattern:**
```css
@media (max-width: 960px) {
  .bento-grid { grid-template-columns: 1fr; grid-template-areas: none; }
  .bento-item--featured { grid-column: span 1; }
}
```

**Authority:** SOFT-LOCKED -- directly from AD-006 (1 page), but with 5/5
auditor unanimity at WOULD-NOT-SHIP severity. Pattern applies to ANY page
with 4+ column grids.

---

### C-25: Responsive Collapse at 768px for Simple Grids

**Rule:** All 2-3 column grids MUST collapse to single-column at
`max-width: 768px`.

**Why:** This was already a locked convention, but the audit discovered that
it was not being implemented. Multiple pages had grids that persisted at 768px
when they should have collapsed. AD-001: "overview grid does not collapse at
768px" (LW-04, two-auditor concordance). AD-003: "Grid does NOT collapse at
768px -- VIOLATION OF LOCKED DECISION" (WNS-2, both auditors). AD-004:
"media query max-width: 768px means collapse happens BELOW 768, not AT 768"
(Alpha, revealing a subtle CSS interpretation issue). AD-005: "the page
renders identically at 1440px, 1024px, and 768px" (LW-2).

The audit revealed a systemic implementation gap: the convention existed in
the spec but was not enforced in the build. The 768px breakpoint is now
verified as part of the fix verification protocol.

**Evidence:** AD-001 AUDIT-REPORT LW-04, AD-003 AUDIT-REPORT WNS-2, AD-004
AUDIT-REPORT WNS-1, AD-005 AUDIT-REPORT LW-2. All 6 fix reports added or
corrected responsive collapse rules.

**Authority:** REINFORCED -- already locked (AD-CONV S12.5). The audit
discovered implementation gaps and fixes corrected them.

---

## III. Defensive CSS Conventions (Discovered Through PA)

These conventions emerged from situations where technically correct CSS
produced perceptually broken outcomes.

---

### C-09: Scroll-Reveal Must Be Progressive Enhancement

**Rule:** Content MUST be visible by default. Scroll-reveal adds animation,
not visibility. If JavaScript fails, all content remains visible.

**Why:** AD-006 originally implemented scroll-reveal as a content gate: content
started at `opacity: 0` in CSS and was revealed by JavaScript on scroll. When
animations failed (reduced-motion preferences, JS failure, slow connections),
40-60% of the page rendered as blank cream. Content existed in the DOM but was
invisible.

This finding achieved the rarest consensus in the audit: 5/5 UNANIMOUS at
WOULD-NOT-SHIP severity. Auditor A found Sections 4-7 invisible (bottom ~60%).
Auditor D found Sections 6-7 invisible (~40%). The adversarial agent found
Sections 5-7 invisible (~45%, 6,600 vertical units). At 500px and 320px, the
entire page was blank.

The fix used defensive CSS with `!important` to override external scroll-
reveal code: `opacity: 1 !important; transform: none !important; visibility:
visible !important`. The `!important` is justified because this is a defense
against unknown external code, not a specificity hack.

The audit also produced an important escalation: the existing convention
(S15.3) said "content in DOM regardless." The letter was honored -- content WAS
in the DOM. But the spirit was violated -- content was NOT visible. DM-002
amended S15.3 to close the gap between letter and spirit: the initial CSS
state MUST be visible, and JavaScript MAY add hidden state for animation.

**Evidence:** AD-006 AUDIT-REPORT MF-001 (5/5 UNANIMOUS, WOULD-NOT-SHIP).
AD-006 fix-report Fix 1. AD-CONVENTION-SPEC Section 15.3 (DM-002 amendment).

**CSS Pattern:**
```css
/* Defensive override */
.axis-section, .axis-section > *,
.axis-section .page-container,
.axis-section .page-container > * {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}
```

**Authority:** SOFT-LOCKED -- from AD-006 (1 page) with 5/5 unanimity. The
PRINCIPLE is universal: content visibility must never depend on JavaScript.

---

### C-10: Code Wrap in Narrow Containers

**Rule:** Code blocks inside narrow containers MUST use `white-space: pre-wrap;
word-wrap: break-word;` instead of relying solely on `overflow-x: auto`.

**Why:** AD-003's bento grid cells contained code blocks that were truncated
mid-word. Alpha's observation was blunt: "Code is truncated horizontally --
you can see `grid-template-colu` cut off mid-word. Code that you can't read
completely is worse than no code at all."

The standard approach (`overflow-x: auto` with horizontal scroll) works in
full-width containers. But in narrow bento cells, a horizontal scrollbar
inside a grid card is awkward and often invisible. Pre-wrap with word-break
ensures all code is visible even when the container is narrow.

**Evidence:** AD-003 AUDIT-REPORT LW-1 (two-auditor concordance).

**CSS Pattern:**
```css
.bento-cell pre, .bento-cell--1x1 pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
```

**Authority:** OPEN -- from AD-003 (1 page). The principle is sound but may
need adaptation for different container types.

---

## IV. Component Conventions (Page-Specific Discoveries)

These conventions were discovered on specific pages but may apply to CD work
if similar components appear.

---

### C-07: Token-Only CSS Values

**Rule:** ALL CSS values MUST reference CSS custom properties from the locked
layer. No hardcoded hex colors, pixel values, or font names.

**Why:** Every fix agent explicitly verified token compliance as part of their
work. AD-001 fix: "All new values reference CSS custom properties from locked
layer." AD-003 fix: "page-end uses --color-border (#E0D5C5)." AD-005 fix:
"All new spacing uses var(--space-*) tokens."

Tokens are not merely about consistency -- they are about auditability. When
every value references a token, a grep sweep can verify the entire page in
seconds. When values are hardcoded, verification requires visual inspection
of each element. The token-only rule transforms an exponential verification
problem into a linear one.

**Evidence:** All 6 fix-reports explicitly verify token compliance.

**Authority:** REINFORCED -- already locked. PA validates enforcement.

---

### C-12: Tension Meter Labeling

**Rule:** The five-segment tension bar below ACT headings in AD-002 MUST
include a visible label showing "Narrative tension: X / 5".

**Why:** AD-002's tension progress bar was independently described as "a broken
loading indicator" (Alpha) and "a dashboard widget dropped into an editorial
layout" (Beta). Both auditors independently failed to understand what the bar
represented because it had no label. Adding "Narrative tension: X / 5" in mono
type immediately disambiguated the component.

**Evidence:** AD-002 AUDIT-REPORT F-002 (two-auditor concordance).

**Authority:** OPEN -- AD-002-specific component convention.

---

### C-13: Compact Interstitial Transition Markers

**Rule:** In AD-005, transitions between spokes MUST have labeled
interstitials. Major transitions use diagonal clip-path; minor transitions
use compact interstitials with 3px borders and centered uppercase labels.

**Why:** AD-005's audit found only 2 interstitials where the choreographic
logic suggested 4-5. As Auditor D noted: "For a page about choreography,
inconsistently applied transitions are a structural irony." The fix
established a 2-tier transition hierarchy: major transitions (diagonal clip-
path) and minor transitions (compact interstitials with borders), bringing
the total to 5 transitions plus a closing footer.

**Evidence:** AD-005 AUDIT-REPORT LW-4.

**Authority:** OPEN -- AD-005-specific. The 2-tier transition hierarchy may
inform CD work.

---

### C-17: Callout Family DNA (2-Zone, 4px Left Border)

**Rule:** All callouts MUST use the 2-zone structure: colored 4px left border
+ uppercase label + body content. Differentiation ONLY by border/label color.

**Why:** The callout system is one of the most consistently praised elements in
the audit. AD-001 Beta: "left-border color coding creates useful
differentiation." AD-002: "Colored left border + label pattern consistent."
AD-005 Auditor D: "blue for context, amber for caution, green for tips,
purple for essence." AD-006: "Purple (Essence), Blue (Context), Green
(Discovery), Orange (Caution/Gotcha) is coherent and learnable."

The key word is "learnable." Readers encountering the system across multiple
pages internalize the color-to-meaning mapping. This is the callout family
DNA: same structure, different colors, consistent meaning. Any variation in
structure (different border widths, different label positions) would break
the learnability.

**Evidence:** All 6 AUDIT-REPORTs confirm consistent callout structure. Zero
structural violations detected.

**Authority:** REINFORCED -- Soul Piece #3 (COMP-F-003). Zero violations
across 6 pages.

---

### C-18: Essence/CoreAbstraction Serif Italic

**Rule:** Essence callout body text MUST use italic Instrument Serif. This is
the "editorial whisper" voice.

**Why:** The Essence callout stands apart from all other callouts through its
italic serif voice. Where Context, Tip, and Caution callouts use the body
sans-serif (Inter), Essence uses italic Instrument Serif -- creating what
auditors perceive as an "editorial whisper" distinct from the explanatory
tone of other callouts. AD-001 Alpha: "Essence callouts in italic serif with
purple left border add an editorial voice." AD-004 Alpha: "purple italic
serif" in sidebar. AD-005: confirmed by Auditors A and D.

**Evidence:** All 6 AUDIT-REPORTs confirm serif italic in Essence callouts.

**Authority:** REINFORCED -- locked via Soul Piece #2 (COMP-F-005).

---

### C-19: Dark Code Blocks

**Rule:** Code blocks MUST use `background: #1A1A1A` with syntax highlighting.
This is a LOCKED convention with documented trade-off.

**Why:** Every auditor noted the stark contrast between dark code blocks and
the warm cream page. AD-001 Alpha flagged it as "jarring." AD-001 Beta called
the contrast "stark." This is the only convention in the system where every
auditor notes a perceptual concern but the convention is maintained anyway.

The reason: this trade-off was explicitly debated and documented during the OD
audit (Decision Note #5, where all 6 fresh-eyes auditors also flagged it).
The dark code block provides superior code readability through syntax
highlighting on a dark background. The alternative (light code blocks on warm
cream) would lose syntax highlighting contrast. The trade-off was accepted:
momentary visual disruption in exchange for superior code legibility.

**Evidence:** All 6 AUDIT-REPORTs note the contrast. Lock-sheet Decision
Note #5 documents the accepted trade-off.

**Authority:** REINFORCED -- flagged perceptually but maintained as a
documented, deliberate trade-off.

---

### C-20: Prose Line-Length Constraint (70ch)

**Rule:** Body paragraphs MUST be constrained to `max-width: 70ch` regardless
of container width.

**Why:** This rule is the safety net that makes C-01 (1100px container width)
viable. Without it, wider containers would produce 100+ character lines that
are uncomfortable to read. AD-001 fix report: "The p { max-width: 70ch } rule
still constrains prose paragraphs for readability." AD-005 fix report: "1100px
provides comfortable reading width at 1440px viewport while still maintaining
line-length constraints through the existing p { max-width: 70ch } rule."

The 70ch constraint means the container can be any width and prose will
remain readable. Grids, tables, and code blocks benefit from the wider
container. Text stays constrained. This decoupling of container width from
line length is what made the 860px-to-1100px change safe.

**Evidence:** AD-001 fix-report, AD-005 fix-report. All pages pass
readability checks at 1100px with 70ch constraint active.

**Authority:** REINFORCED -- already locked. PA validates it as the enabling
mechanism for C-01.

---

### C-21: Q&A PULSE Rhythm

**Rule:** In AD-001, questions MUST be narrow (~60% width, serif, red left
border) and answers MUST be full-width (gray card, sans-serif). This creates
the PULSE pattern: question = inhale (sparse), answer = exhale (dense).

**Why:** Both AD-001 auditors independently perceived and named the PULSE
rhythm. Alpha: "the Q&A alternation creates a rhythm... micro-level Z works
well." Beta: "Q&A PULSE rhythm (question=inhale/sparse, answer=exhale/dense)
is perceptible as a visual beat." Beta called it "one of the strongest
aspects of the design."

The significance is that PULSE is not just a structural arrangement -- it is
perceptually felt as a rhythm. When auditors independently describe the same
experience using the same language ("rhythm," "beat," "inhale/exhale"), the
pattern has achieved its intended perceptual effect.

**Evidence:** AD-001 AUDIT-REPORT Section 3 (both auditors). Beta PA-17.

**Authority:** REINFORCED -- the audit confirmed the PULSE rhythm is
perceptually real.

---

### C-24: No Scroll-Triggered Navigation

**Rule:** JavaScript MUST NOT automatically navigate the browser to other pages
based on scroll position.

**Why:** AD-001's Alpha auditor reported a CRITICAL finding: "JavaScript
automatically navigates the browser to OTHER exploration pages (AD-003,
AD-005, AD-006) when the user scrolls past certain positions." Investigation
revealed this was likely a Playwright contention artifact (Beta's browser was
being navigated by another audit agent), not actual page behavior. But the
investigation established the binary rule: scroll-triggered navigation hijack
is ALWAYS WOULD-NOT-SHIP severity, regardless of cause.

**Evidence:** AD-001 AUDIT-REPORT WNS-01 (Alpha CRITICAL). Investigation
concluded contention artifact.

**Authority:** REINFORCED -- the principle was established even though the
specific finding was an artifact.

---

### C-27: WAVE Density Oscillation

**Rule:** Pages using Choreography or Compound axis MUST exhibit the
SPARSE-DENSE-BREATHE oscillation pattern.

**Why:** AD-005's Auditor C delivered one of the strongest endorsements in the
audit: "one of the strongest visual rhythms I have seen. The WAVE density
oscillation is not just described -- it is embodied in the page structure."
AD-006's spatial analysis confirmed the same three-part internal rhythm in
each section: label, body, callout.

Like PULSE (C-21), WAVE was validated as perceptually real, not just
structurally present. When auditors describe a rhythm as "embodied" rather
than "applied," the pattern has achieved its goal.

**Evidence:** AD-005 AUDIT-REPORT Auditor C PA-17. AD-006 AUDIT-REPORT
spatial analysis.

**Authority:** REINFORCED -- validated across AD-005 and AD-006.

---

## V. Operational Convention (Audit Methodology)

### Font Loading Check

**Rule:** When checking computed fonts programmatically, ALWAYS await
`document.fonts.ready` before measuring.

**Why:** AD-001's audit produced a false positive about Essence callout fonts.
The auditor measured the computed font BEFORE fonts finished loading and got
the fallback font instead of Instrument Serif. The OD fix execution confirmed
this: "`document.fonts.ready` is CRITICAL before checking computed font --
without it, fallback fonts report incorrectly." The AD audit did not produce
new font-loading false positives because auditors were warned about this trap.

**Evidence:** AD-001 AUDIT-REPORT (Alpha Essence font finding). OD fix
execution experience.

**Authority:** REINFORCED -- operational convention for audit methodology.

---

## Cross-References

| Document | Relationship |
|----------|-------------|
| `AD-CONVENTION-SPEC.md` (this directory) | The WHAT -- convention rules and values |
| `../../explorations/axis/_perceptual-audit/AD-*/AUDIT-REPORT.md` | Raw evidence -- auditor findings |
| `../../explorations/axis/_perceptual-audit/AD-*/fix-report.md` | Fix evidence -- what was changed and why |
| `../../explorations/axis/_perceptual-audit/FIX-VERIFICATION-REPORT.md` | Post-fix verification |
| `../../explorations/axis/_perceptual-audit/lock-sheet.md` | Decision classification (81 decisions) |
| `../../explorations/axis/_perceptual-audit/_remediation-scope/convention-extraction.md` | Source extraction (27 conventions) |
| `HANDOFF-AD-TO-CD.md` | References this document for CD agents |

---

## Convention Summary Table

| ID | Convention | Authority | Pages Validated | Category |
|----|-----------|-----------|-----------------|----------|
| C-01 | Container 1100px | LOCKED | 6/6 | Width |
| C-02 | Visual Ending Required | LOCKED | 6/6 | Visual Ending |
| C-03 | Dead Space Elimination | LOCKED | 6/6 | Spacing |
| C-04 | Footer 3px Cat 1 Border | LOCKED | 6/6 | Visual Ending |
| C-05 | Responsive Padding 768px | LOCKED | 6/6 | Responsive |
| C-06 | Soul Compliance Zero Violations | REINFORCED | 6/6 | Soul |
| C-07 | Token-Only CSS Values | REINFORCED | 6/6 | Soul |
| C-08 | 960px Bento Grid Collapse | SOFT-LOCKED | 1/6 (5/5 unanimous) | Responsive |
| C-09 | Scroll-Reveal Progressive Enhancement | SOFT-LOCKED | 1/6 (5/5 unanimous) | Defensive CSS |
| C-10 | Code Wrap in Narrow Containers | OPEN | 1/6 | Defensive CSS |
| C-11 | Breathing Zone Ceiling 15-25% | LOCKED | 6/6 | Spacing |
| C-12 | Tension Meter Labeling | OPEN | 1/6 | Component |
| C-13 | Compact Interstitials | OPEN | 1/6 | Component |
| C-14 | Warm Neutral Palette Cohesion | REINFORCED | 6/6 | Palette |
| C-15 | Typography Trio Compliance | REINFORCED | 6/6 | Typography |
| C-16 | Dark Header Convention | REINFORCED | 6/6 | Header |
| C-17 | Callout Family DNA | REINFORCED | 6/6 | Component |
| C-18 | Essence Serif Italic | REINFORCED | 6/6 | Component |
| C-19 | Dark Code Blocks | REINFORCED | 6/6 | Component |
| C-20 | Prose 70ch Line-Length | REINFORCED | 6/6 | Typography |
| C-21 | Q&A PULSE Rhythm | REINFORCED | 1/6 | Rhythm |
| C-22 | Page Personality SDW | REINFORCED | 6/6 | Identity |
| C-23 | Footer Mirrors Header | LOCKED | 6/6 | Visual Ending |
| C-24 | No Navigation Hijack | REINFORCED | 1/6 | Defensive |
| C-25 | Grid Collapse at 768px | REINFORCED | 6/6 | Responsive |
| C-26 | Cross-Page Family DNA | REINFORCED | 6/6 | Identity |
| C-27 | WAVE Density Oscillation | REINFORCED | 2/6 | Rhythm |

---

## COMPACTION-SAFE SUMMARY

- **File:** AD-PA-CONVENTIONS.md (Convention Ideology Document)
- **Purpose:** Captures the REASONING behind every AD convention -- the WHY behind the WHAT
- **Companion:** AD-CONVENTION-SPEC.md (rules) + this file (ideology) = complete picture
- **Content:** 27 conventions with narrative reasoning, auditor quotes, evidence citations, CSS patterns, and authority levels
- **Authority levels:** LOCKED (6/6 pages unanimous), SOFT-LOCKED (strong single-page evidence), REINFORCED (pre-existing + PA validated), OPEN (adaptable)
- **Key insight:** When 12+ independent auditors across 6 pages converge on the same finding, that is not opinion -- it is perceptual evidence
- **Strongest findings:** C-02 (visual ending, unanimous #1), C-03 (dead space, unanimous), C-01 (width, user intervention), C-09 (scroll-reveal, 5/5 WOULD-NOT-SHIP)
- **Status:** COMPLETE

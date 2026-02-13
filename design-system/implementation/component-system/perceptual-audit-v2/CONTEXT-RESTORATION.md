<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/CONTEXT-RESTORATION.md
     Tier: B | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS
This 18.7KB file is the complete context restoration document designed to be pasted
into a new Claude session to resume the perceptual audit. It contains a compressed
but comprehensive summary of everything needed: the KORTAI soul (7 principles +
anti-patterns), all Phase 1 results (11 components with scores and characters), the
audit methodology (12 parallel sub-agents, 60-point scoring), Phase 2 coexistence
results (8 pairs, 4.4/5 avg), Phase 3 page composition results (4 pages), design
tokens, and key file locations. It is the "cold start" document that eliminates
re-reading 150+ files.

2. THE QUESTION THIS ANSWERS
"If I am a new Claude session with zero context, what is the minimum I need to
read to fully understand and continue the perceptual audit from where it left off?"

3. STATUS
ACTIVE (HISTORICAL) — Written 2026-02-04 after Phase 3 completion. Represents the
audit state at that point. Phase 4 synthesis has since been completed, so a session
restoring from this file would need to also check synthesis/ for the final T1
outputs. Remains valuable as the most comprehensive single-file audit summary.

5. BUILT ON
| Source | Role | Key Values | Path |
|--------|------|------------|------|
| EXECUTION-STATE.md | Phase progress and component scores | Phases 0-3 complete, 11 scores | EXECUTION-STATE.md |
| KORTAI-ESSENCE-FOUNDATION.md | Soul principles compressed here | 7 soul principles, anti-patterns | foundation/KORTAI-ESSENCE-FOUNDATION.md |
| 11 soul extraction files | Component summaries compressed here | Character names, master truths, scores | soul-extractions/*-soul-extraction.md |
| COEXISTENCE-TEST-RESULTS.md | Pair test summaries compressed here | 8 pairs, scores, pass status | coexistence/COEXISTENCE-TEST-RESULTS.md |
| Page audit results | Page summaries compressed here | 4 pages, scores, findings | pages/*.md |
| CONSISTENCY-REGISTRY.md | Design token snapshot included | Typography, color, spacing tokens | CONSISTENCY-REGISTRY.md |
| Master plan (38 revisions) | Methodology summary compressed here | Sub-agent types A-L, scoring formula | ~/.claude/plans/woolly-riding-yeti.md |

6. MUST HONOR
| Constraint | Detail |
|------------|--------|
| Audit methodology preserved | The 12-sub-agent, 60-point scoring, 48/60 threshold is historical record |
| Soul principles are compressed but complete | All 7 principles and anti-patterns must be present for valid restoration |
| Component data is frozen | 11 component scores, characters, and master truths are audit outcomes |
| File paths may reference moved locations | validation-sprint/ and perceptual-audit/ paths now point to archive |
| HTTP server reference is session-specific | Port 8766 reference is historical; new sessions need their own server |
| Phase 4 is marked NEXT but is now COMPLETE | A restoring session should verify synthesis/ exists before starting Phase 4 |

8. CONSUMED BY
| Consumer | How It Uses This File |
|----------|----------------------|
| New Claude sessions needing audit context | Paste-in document for cold-start context recovery |
| EXECUTION-STATE.md | References this as the full context restoration document |
| MASTER-INDEX.md | Lists this under process documents |
| CLAUDE.md (perceptual-audit-v2) | Lists this as context recovery instructions |
| Future multi-session project planning | Template for how to build effective context restoration documents |

10. DIAGNOSTIC QUESTIONS
Q1: Does the KORTAI SOUL section contain all 7 soul principles (Typography,
    Spacing, Containers, Hierarchy, Composition, Color, Layout) and the 6
    anti-patterns (rounded corners, shadows, gradients, bold stacking, traffic
    light colors, hover lift)?
Q2: Does the PHASE 1 RESULTS table list all 11 components with scores, character
    names, and master truth summaries — and do scores match EXECUTION-STATE.md?
Q3: Does the file warn that Phase 4 is marked NEXT but may already be complete,
    directing the restoring session to check synthesis/ before starting new work?

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# CONTEXT RESTORATION DOCUMENT
## Perceptual Audit v2 — Maximum Intensity Soul Extraction
## PASTE THIS INTO NEW CLAUDE SESSION TO CONTINUE

═══════════════════════════════════════════════════════════════════════════════
## CRITICAL: READ THIS FIRST
═══════════════════════════════════════════════════════════════════════════════

**What is this project?**
A "perceptual audit" extracting the SOUL of a design system (KortAI) and applying it to 11 UI components. Not CSS copying—extracting the FEELING, the PHILOSOPHY, the editorial voice.

**Where are we?**
- ✅ Phase 0: Foundation — COMPLETE
- ✅ Phase 1: Component Audits — COMPLETE (11/11 components)
- ✅ Phase 2: Coexistence Testing — COMPLETE (8/8 pairs, avg 4.4/5)
- ✅ Phase 3: Page Composition — COMPLETE (3/4 pass + 1 stress test)
- ⏳ Phase 4: Master Synthesis — NEXT

**Working Directory:**
`/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/component-system/perceptual-audit-v2/`

═══════════════════════════════════════════════════════════════════════════════
## THE KORTAI SOUL (Design Philosophy)
═══════════════════════════════════════════════════════════════════════════════

**KortAI Named Character:** The Unhurried Editor
**Core Feel:** Premium financial publication, editorial confidence, print heritage

**7 Soul Principles:**
1. **Typography:** Serif italic (Instrument Serif) for display/labels, Inter for body
2. **Spacing:** Generous internal padding, graduated spacing, "gallery curator"
3. **Containers:** Sharp corners (0px radius), heavy borders (3px), NO shadows
4. **Hierarchy:** SIZE creates hierarchy (not weight), position reinforces
5. **Composition:** Calm, restful, top-heavy anchor, clear reading path
6. **Color:** Grayscale dominant, RED (#E83025) for emphasis, AMBER (#C49052) for process
7. **Layout:** 5-6 zones per component, whitespace separates (not borders)

**Anti-Patterns (What to AVOID):**
- Rounded corners (signals "friendly app" not "editorial")
- Box shadows (fake depth)
- Gradient backgrounds
- Bold + caps + color stacking ("eager intern")
- Green/red traffic light colors
- Hover lift effects

**Reference Images:**
- `validation-sprint/screenshots/references/provided-kortai-card-detail.png`
- `validation-sprint/screenshots/references/provided-kortai-page-layout.png`

═══════════════════════════════════════════════════════════════════════════════
## PHASE 1 RESULTS: ALL 11 COMPONENTS
═══════════════════════════════════════════════════════════════════════════════

| # | Component | Score | Character | Master Truth Summary |
|---|-----------|-------|-----------|---------------------|
| 1 | Code Snippet | 49/60 (82%) | The Precise Transcriptionist | Scholar's precise transcription, dark slate focus |
| 2 | Info Callout | 53/60 (88%) | The Senior Concierge | Helpful aside, function over personality |
| 3 | Tip Callout | 49/60 (82%) | The Seasoned Colleague | Calm sidebar whisper, present but not interrupting |
| 4 | Gotcha Callout | 51/60 (85%) | The Vigilant Sentinel | Velocity gate (speed bump, not stop sign) |
| 5 | Essence Callout | 54/60 (90%) | The Archivist of Axioms | Marginalia in first-edition book, wisdom worth preserving |
| 6 | Challenge Callout | 52/60 (86%) | The Spirited Catalyst | Friendly mentor with interesting exercise |
| 7 | File Tree | 52/60 (87%) | The Methodical Surveyor | Library card catalog, every item has one exact location |
| 8 | Decision Matrix | 48.5/60 (81%) | The Impartial Cartographer | Reference index in design annual, maps without choosing |
| 9 | Core Abstraction | 50.5/60 (84%) | The Sagacious Mentor | Programming textbook, philosophy leads, code serves |
| 10 | Task Component | 51/60 (85%) | The Diligent Scribe | Scholarly margin checklist, satisfying without gamified |
| 11 | Reasoning Component | 54/60 (90%) | The Deliberative Counselor | Analyst's comparison brief, wisdom without coercion |

**Average Score:** 51.3/60 (86%)
**Pass Threshold:** 48/60 (80%)
**Pass Rate:** 100%

═══════════════════════════════════════════════════════════════════════════════
## METHODOLOGY SUMMARY
═══════════════════════════════════════════════════════════════════════════════

**Per-Component Workflow:**
1. Build HTML component with KortAI-aligned tokens
2. Capture Playwright screenshot
3. Deploy 12 PARALLEL sub-agents:
   - A: Typography | B: Spacing | C: Containers | D: Hierarchy
   - E: Composition | F: Color | G: Layout | H: Squint Test
   - I: KortAI Alignment | J: Named Character | K: Anti-Pattern | L: Blindspot
4. Synthesize results into soul extraction
5. Calculate score (must be ≥48/60 to pass)
6. Document in SOUL-EXTRACTION-COMPLETE.md

**Scoring (60 points max):**
- 12 sub-agents × 5 points each = 60 points
- PASS: ≥48/60 (80%)
- All 11 components passed

**Total Sub-Agents Deployed:** 132 (12 × 11 components)

═══════════════════════════════════════════════════════════════════════════════
## PHASE 2: COEXISTENCE TESTING (COMPLETE ✅)
═══════════════════════════════════════════════════════════════════════════════

**Purpose:** Test visual harmony when components appear adjacent to each other

**8 Pairs Tested:**
| Test | Pair | Score | Status |
|------|------|-------|--------|
| 01 | Code Snippet + Tip Callout | 4.5/5 | ✅ PASS |
| 02 | Code Snippet + Gotcha Callout | 4.5/5 | ✅ PASS |
| 03 | File Tree + Code Snippet | 5/5 | ✅ PASS |
| 04 | Task + Task + Task | 4/5 | ✅ PASS |
| 05 | Essence Callout + Prose | 5/5 | ✅ PASS |
| 06 | Decision Matrix + Code Snippet | 4/5 | ✅ PASS |
| 07 | Core Abstraction + Info Callout | 4.5/5 | ✅ PASS |
| 08 | All 5 Callouts Together | 4.5/5 | ✅ PASS |

**Results:** Average 4.4/5, 100% pass rate
**Full Results:** coexistence/COEXISTENCE-TEST-RESULTS.md

═══════════════════════════════════════════════════════════════════════════════
## PHASE 3: PAGE COMPOSITION (COMPLETE ✅)
═══════════════════════════════════════════════════════════════════════════════

**Purpose:** Test complete pages with multiple components

**4 Pages Built and Audited:**

| Page | Purpose | Score | Status |
|------|---------|-------|--------|
| page-documentation.html | Code + callouts + file trees | 54/60 (90%) | ✅ APPROVED |
| page-tutorial.html | Tasks + challenges + essence | 39/40 (97.5%) | ✅ APPROVED |
| page-portfolio.html | Matrices + abstractions | 39/40 (97.5%) | ✅ APPROVED |
| page-kitchen-sink.html | All 11 components (stress test) | 31.4/40 (78.5%) | ⚠️ INFORMATIVE |

**Critical Findings from Stress Test:**
1. Max 2 callouts in sequence (prose buffer required after)
2. Callout colors: Red + Gray only (green/purple need justification)
3. File tree blue folders off-palette
4. Component headers must be subordinate to section headers
5. Vertical reading flow preferred over horizontal grids

**Files Created:**
- pages/page-documentation.html
- pages/page-tutorial.html
- pages/page-portfolio.html
- pages/page-kitchen-sink.html
- pages/DOCUMENTATION-PAGE-SOUL-EXTRACTION.md
- pages/KITCHEN-SINK-AUDIT-RESULTS.md

═══════════════════════════════════════════════════════════════════════════════
## PHASE 4: MASTER SYNTHESIS (FINAL)
═══════════════════════════════════════════════════════════════════════════════

**Purpose:** Create unified soul documentation

**Deliverable:** MASTER-SOUL-SYNTHESIS.md containing:
- Cross-reference of all 11 soul extractions
- Consistency registry verification
- Complete named character family
- Design token summary
- Final decision log

═══════════════════════════════════════════════════════════════════════════════
## KEY FILE LOCATIONS
═══════════════════════════════════════════════════════════════════════════════

**Foundation:**
- `foundation/KORTAI-ESSENCE-FOUNDATION.md` — KortAI soul extraction
- `EXECUTION-STATE.md` — Progress tracking (READ THIS for current state)
- `CONSISTENCY-REGISTRY.md` — Design tokens

**Soul Extractions (11 complete):**
- `soul-extractions/code-snippet-soul-extraction.md`
- `soul-extractions/info-callout-soul-extraction.md`
- `soul-extractions/tip-callout-soul-extraction.md`
- `soul-extractions/gotcha-callout-soul-extraction.md`
- `soul-extractions/essence-callout-soul-extraction.md`
- `soul-extractions/challenge-callout-soul-extraction.md`
- `soul-extractions/file-tree-soul-extraction.md`
- `soul-extractions/decision-matrix-soul-extraction.md`
- `soul-extractions/core-abstraction-soul-extraction.md`
- `soul-extractions/task-component-soul-extraction.md`
- `soul-extractions/reasoning-component-soul-extraction.md`

**Component HTML:**
- `components/[component-name]/component-[name].html`
- `components/[component-name]/screenshots/`
- `components/[component-name]/SOUL-EXTRACTION-COMPLETE.md`

**Plan File:**
- `~/.claude/plans/woolly-riding-yeti.md` — Full 38-revision master plan

═══════════════════════════════════════════════════════════════════════════════
## DESIGN TOKENS (From CONSISTENCY-REGISTRY.md)
═══════════════════════════════════════════════════════════════════════════════

**Typography:**
```css
--font-title: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-code: 'JetBrains Mono', 'SF Mono', monospace;
```

**Colors:**
```css
--text-primary: #1a1a1a;
--text-secondary: #3d3d3d;
--text-tertiary: #666666;
--text-muted: #888888;
--bg-page: #FEFCF3;
--bg-warm: #FEF9F5;
--accent-red: #E83025;
--accent-amber: #C49052;
--border-subtle: #E8E2D9;
```

**Spacing:**
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-base: 16px;
--space-lg: 20px;
--space-xl: 24px;
--space-2xl: 32px;
```

**Borders:**
```css
--border-thin: 1px;
--border-heavy: 3px;
--border-accent: 4px;
border-radius: 0; /* LOCKED: Sharp corners */
```

═══════════════════════════════════════════════════════════════════════════════
## ENFORCEMENT RULES (25 Total)
═══════════════════════════════════════════════════════════════════════════════

1. Never say "similar to [other component]" — full analysis each time
2. Never batch sub-agents across components — one component at a time
3. Never skip Playwright captures — visual auditing requires visuals
4. Never combine soul extractions — each gets its own document
5. Never proceed to coexistence before all individual audits complete
6. Always compare to KortAI reference VISUALLY
7. Always articulate perceptual truths in FEELING language
8. Always assign a UNIQUE named character to each component
9. Always document blindspots
10. Always create state snapshot after each audit
11. Always invoke /essence-quick after building component
12. Always invoke /essence-check after refinement
13. Always update CONSISTENCY-REGISTRY after each component
14. Deploy 12 sub-agents in PARALLEL (single message)
15. If score < 48/60, enter revision loop (max 3 iterations)
16. Read KortAI images via Read tool for visual analysis
17. Build on existing work, don't duplicate
18. Each sub-agent invokes its OWN analysis
19. Each sub-agent captures its OWN zone-specific observations
20. 5-iteration refinement uses SEPARATE sub-agents
21. 7 perceptual truths per component (one per zone) + 1 master
22. Coexistence pairs each get dedicated analysis
23. All sub-agents must complete for full execution
24. Isolation enforcement: reject analyses that reference other components
25. MAXIMUM INTENSITY. EXHAUSTIVE. RICH IN DETAIL. NO SHORTCUTS.

═══════════════════════════════════════════════════════════════════════════════
## HTTP SERVER FOR PLAYWRIGHT
═══════════════════════════════════════════════════════════════════════════════

**To start server (run from repo root):**
```bash
cd /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips
python3 -m http.server 8766
```

**URL pattern:**
`http://127.0.0.1:8766/design-extraction/component-system/perceptual-audit-v2/components/[component-name]/component-[name].html`

═══════════════════════════════════════════════════════════════════════════════
## IMMEDIATE NEXT ACTION
═══════════════════════════════════════════════════════════════════════════════

**START PHASE 4: Master Synthesis**

1. Read `EXECUTION-STATE.md` to confirm all phases 0-3 complete
2. Read `foundation/KORTAI-ESSENCE-FOUNDATION.md` for soul principles
3. Read `pages/KITCHEN-SINK-AUDIT-RESULTS.md` for production rules
4. Create `MASTER-SOUL-SYNTHESIS.md` containing:
   - Cross-reference of all 11 soul extractions
   - Complete named character family (12 total including KortAI)
   - Design token summary with usage counts
   - Production rules derived from stress test
   - Anti-patterns registry
   - Final decision log
5. Verify consistency across all components
6. Mark Phase 4 and project COMPLETE

═══════════════════════════════════════════════════════════════════════════════
## QUICK REFERENCE: NAMED CHARACTERS
═══════════════════════════════════════════════════════════════════════════════

| Component | Character | One-Line Description |
|-----------|-----------|---------------------|
| KortAI | The Unhurried Editor | Authority through restraint |
| Code Snippet | The Precise Transcriptionist | Faithful reproduction |
| Info Callout | The Senior Concierge | Anticipatory care |
| Tip Callout | The Seasoned Colleague | Warm peer advice |
| Gotcha Callout | The Vigilant Sentinel | Alert but calm protection |
| Essence Callout | The Archivist of Axioms | Keeper of truths |
| Challenge Callout | The Spirited Catalyst | Encouraging activator |
| File Tree | The Methodical Surveyor | Precise territory mapper |
| Decision Matrix | The Impartial Cartographer | Maps without choosing |
| Core Abstraction | The Sagacious Mentor | Wisdom + proof teacher |
| Task Component | The Diligent Scribe | Marks progress without ceremony |
| Reasoning Component | The Deliberative Counselor | Walks through complexity |

═══════════════════════════════════════════════════════════════════════════════
## END OF CONTEXT RESTORATION
═══════════════════════════════════════════════════════════════════════════════

**To continue, say:**
"Continue with Phase 4: Master Synthesis. Create the unified soul documentation."

**Alternative quick start:**
```
Read these files in order:
1. perceptual-audit-v2/EXECUTION-STATE.md
2. perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md
3. perceptual-audit-v2/pages/KITCHEN-SINK-AUDIT-RESULTS.md

Then create MASTER-SOUL-SYNTHESIS.md
```
